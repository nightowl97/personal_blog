"""Build road-matched GeoJSON polylines from history.jsonl via OSRM.

Usage:
    python road_matcher.py --line 48              # auto: longest run per direction
    python road_matcher.py --line 53 --pick       # interactive: choose aller + retour run
    python road_matcher.py --line 47 --list       # list runs then exit (no matching)
    python road_matcher.py --line 48 --aller-idx 2 --retour-idx 0   # explicit indices
    python road_matcher.py --line 48 --osrm http://localhost:5000

Writes geojson/<prefix>_aller.geojson and geojson/<prefix>_retour.geojson.
Line-prefix mapping: 47 -> l01, 48 -> l02, 53 -> l03.
"""

import argparse
import json
import math
import time
from datetime import datetime
from pathlib import Path

import requests

OSRM_DEFAULT = "http://localhost:5000/match/v1/driving/"
MIN_MOVE_M   = 5    # drop GPS points closer than this to the previous one
RADIUS_M     = 25   # GPS accuracy hint sent to OSRM
HISTORY      = Path(__file__).parent / "history.jsonl"
GEOJSON_DIR  = Path(__file__).parent / "geojson"

LINE_PREFIX = {47: "l01", 48: "l02", 53: "l03"}


def haversine(a, b):
    R = 6_371_000
    p1, p2 = math.radians(a[0]), math.radians(b[0])
    dphi = math.radians(b[0] - a[0])
    dl   = math.radians(b[1] - a[1])
    h = math.sin(dphi / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def load_runs(line_id):
    """Read history.jsonl, keep only records for line_id.
    Group points by physical bus, order by time, then segment each
    bus's track wherever sens changes (a real direction change)."""
    rows = []
    with HISTORY.open() as f:
        for raw in f:
            raw = raw.strip()
            if not raw:
                continue
            obj = json.loads(raw)
            for b in obj["buses"]:
                if b.get("line") == line_id and b["lat"] is not None and b["lng"] is not None:
                    rows.append({"ts": obj["fetched_at"], "bus": b.get("bus"),
                                 "sens": b["sens"], "lat": b["lat"], "lng": b["lng"]})

    # split the interleaved stream out into one track per physical bus
    by_bus = {}
    for r in rows:
        by_bus.setdefault(r["bus"], []).append(r)

    # within each bus, go chronological and cut on real direction changes
    segs = []
    for track in by_bus.values():
        track.sort(key=lambda r: r["ts"])
        cur, cur_sens = [], None
        for r in track:
            if r["sens"] != cur_sens:
                if cur:
                    segs.append((cur_sens, cur))
                cur, cur_sens = [], r["sens"]
            cur.append(r)
        if cur:
            segs.append((cur_sens, cur))

    # sort by start time so indices are stable and predictable
    segs.sort(key=lambda sc: sc[1][0]["ts"])
    return segs


def clean(run):
    out = []
    for r in run:
        if not out:
            out.append(r)
        elif (r["ts"] != out[-1]["ts"]
              and haversine((out[-1]["lat"], out[-1]["lng"]), (r["lat"], r["lng"])) >= MIN_MOVE_M):
            out.append(r)
    return out


def span_km(run):
    """Straight-line distance between first and last clean point (km)."""
    c = clean(run)
    if len(c) < 2:
        return 0.0
    return haversine((c[0]["lat"], c[0]["lng"]), (c[-1]["lat"], c[-1]["lng"])) / 1000


def print_runs(segs, highlight_aller=None, highlight_retour=None):
    """Print a formatted table of all runs."""
    DIR = {0: "aller  (0)", 1: "retour (1)"}
    print(f"\n  {'idx':>3}  {'dir':<12} {'bus':<8} {'pts':>4} {'clean':>5} {'span km':>7}  {'start':>8}–{'end':<8}  {'start coords'}")
    print("  " + "─" * 80)
    for idx, (s, c) in enumerate(segs):
        nc    = len(clean(c))
        sk    = span_km(c)
        t0    = c[0]["ts"][11:19]
        t1    = c[-1]["ts"][11:19]
        bus   = c[0].get("bus", "?")
        coord = f"{c[0]['lat']:.4f}, {c[0]['lng']:.4f}"
        marker = ""
        if idx == highlight_aller:   marker = " ◀ aller"
        if idx == highlight_retour:  marker = " ◀ retour"
        flag  = "  *" if nc < 2 else "   "
        print(f"  {flag}{idx:>2}  {DIR.get(s,s):<12} {bus:<8} {len(c):>4} {nc:>5} {sk:>7.1f}  {t0}–{t1}  {coord}{marker}")
    print()


def pick_interactive(segs, name, target_sens):
    """Ask the user to pick a run index for a given direction."""
    DIR = {0: "aller", 1: "retour"}
    candidates = [(i, s, c) for i, (s, c) in enumerate(segs) if s == target_sens]
    if not candidates:
        raise RuntimeError(f"No runs with sens={target_sens} found.")

    print(f"  Pick run for {name} (sens={target_sens}, direction: {DIR.get(target_sens)}).")
    print(f"  Candidates: {[i for i,_,_ in candidates]}  (or any index from the table above)")
    while True:
        raw = input("  Enter index: ").strip()
        if not raw.isdigit():
            print("  Please enter a number.")
            continue
        idx = int(raw)
        if idx < 0 or idx >= len(segs):
            print(f"  Index out of range (0–{len(segs)-1}).")
            continue
        s, c = segs[idx]
        nc = len(clean(c))
        if nc < 2:
            print(f"  Warning: run {idx} has only {nc} usable point(s) after dedup. "
                  "It will likely fail OSRM matching. Continue anyway? [y/N] ", end="")
            if input().strip().lower() != "y":
                continue
        if s != target_sens:
            print(f"  Warning: run {idx} has sens={s}, not {target_sens}. "
                  "Use it anyway? [y/N] ", end="")
            if input().strip().lower() != "y":
                continue
        return idx


def auto_pick(segs, target_sens):
    """Original behaviour: pick the run with the most clean points."""
    best_i, best_n = None, 0
    for i, (s, c) in enumerate(segs):
        if s == target_sens:
            nc = len(clean(c))
            if nc > best_n:
                best_i, best_n = i, nc
    if best_i is None:
        raise RuntimeError(f"No run with sens={target_sens} found.")
    if best_n < 2:
        raise RuntimeError(
            f"Best run for sens={target_sens} has only {best_n} usable point(s) after "
            f"deduplication (seg {best_i}). Run poll_buses.py longer, then retry."
        )
    return best_i


def match(run, osrm_url):
    run = clean(run)
    if len(run) < 2:
        raise RuntimeError(
            f"Only {len(run)} point(s) remain after deduplication."
        )
    coords = ";".join(f"{r['lng']},{r['lat']}" for r in run)
    radii  = ";".join(str(RADIUS_M) for _ in run)
    ts     = ";".join(str(int(datetime.fromisoformat(r["ts"]).timestamp())) for r in run)
    params = {"geometries": "geojson", "overview": "full",
              "radiuses": radii, "timestamps": ts}
    resp = requests.get(osrm_url + coords, params=params, timeout=30)
    resp.raise_for_status()
    data = resp.json()
    if data.get("code") != "Ok":
        raise RuntimeError(f"OSRM: {data.get('code')} {data.get('message', '')}")
    coords_out = [pt for m in data["matchings"] for pt in m["geometry"]["coordinates"]]
    conf = [round(m.get("confidence", 0), 3) for m in data["matchings"]]
    print(f"  matched: {len(coords_out)} pts, confidence={conf}")
    return {"type": "Feature",
            "geometry": {"type": "LineString", "coordinates": coords_out},
            "properties": {"confidence": conf}}


def main():
    ap = argparse.ArgumentParser(
        description="Build road-matched GeoJSON from history.jsonl via OSRM.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python road_matcher.py --line 48              # auto: longest run per direction
  python road_matcher.py --line 53 --pick       # interactive run picker (good for depot bias)
  python road_matcher.py --line 47 --list       # list runs and exit, no matching
  python road_matcher.py --line 48 --aller-idx 2 --retour-idx 0   # explicit indices
        """
    )
    ap.add_argument("--line", type=int, required=True,
                    help="API line ID: 47 (L01), 48 (L02), 53 (L03)")
    ap.add_argument("--osrm", default=OSRM_DEFAULT,
                    help="OSRM match endpoint base URL")
    ap.add_argument("--aller-idx",  type=int, default=None,
                    help="Index of the aller run to use (overrides auto + --pick)")
    ap.add_argument("--retour-idx", type=int, default=None,
                    help="Index of the retour run to use (overrides auto + --pick)")

    mode = ap.add_mutually_exclusive_group()
    mode.add_argument("--pick", action="store_true",
                      help="Interactively pick runs for each direction after listing them")
    mode.add_argument("--list", action="store_true",
                      help="List available runs and exit without running OSRM")
    args = ap.parse_args()

    prefix = LINE_PREFIX.get(args.line)
    if not prefix:
        ap.error(f"Unknown line {args.line}. Known: {list(LINE_PREFIX)}")

    print(f"Loading runs for line {args.line} ({prefix.upper()})…")
    segs = load_runs(args.line)

    if not segs:
        print("No data found for this line in history.jsonl.")
        return

    # ── list mode: just print and exit ──────────────────────────────────────
    if args.list:
        print_runs(segs)
        print(f"  {len(segs)} run(s) total.  Use --aller-idx / --retour-idx or --pick to select.")
        return

    # ── resolve indices ──────────────────────────────────────────────────────
    if args.pick:
        print_runs(segs)
        aller_idx  = args.aller_idx  if args.aller_idx  is not None else pick_interactive(segs, "aller",  0)
        retour_idx = args.retour_idx if args.retour_idx is not None else pick_interactive(segs, "retour", 1)
    else:
        aller_idx  = args.aller_idx  if args.aller_idx  is not None else auto_pick(segs, 0)
        retour_idx = args.retour_idx if args.retour_idx is not None else auto_pick(segs, 1)

    print_runs(segs, highlight_aller=aller_idx, highlight_retour=retour_idx)

    # ── match & write ────────────────────────────────────────────────────────
    GEOJSON_DIR.mkdir(exist_ok=True)
    for out_name, idx in [(f"{prefix}_aller", aller_idx), (f"{prefix}_retour", retour_idx)]:
        s, run = segs[idx]
        print(f"{out_name}  (run {idx}, sens={s}, bus={run[0].get('bus','?')}):")
        gj  = match(run, args.osrm)
        out = GEOJSON_DIR / f"{out_name}.geojson"
        out.write_text(json.dumps(gj))
        print(f"  wrote {out}")
        time.sleep(1)


if __name__ == "__main__":
    main()