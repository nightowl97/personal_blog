#!/usr/bin/env python3
"""
Poll the Errachidia transit API for live bus positions.
L01 (Meski-Amazouj), L02 (Omrane-Ahibous) and L03 (Tisegdalt-My Mhamed)

Writes two files:
  - latest.json     : current snapshot, overwritten each tick (for the map)
  - history.jsonl   : append-only, one JSON object per poll (for map-matching + ETA)

Usage:
    python poll_buses.py            # poll forever, every 15s
    python poll_buses.py --once     # single poll (good for cron / Actions)
    python poll_buses.py --interval 10
"""

import argparse
import json
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

import requests

API_BASE = "http://51.210.102.8/api/line_horaires"
LINES = [47, 48, 53] # 47 is L01 (Meski-Amazouj), 48 L02 (Omrane-Ahibous) and 53 is L03 (Tisegdalt-My Mhamed)
PAYLOAD = {"reseaux_id": 8}
OUT_DIR = Path(__file__).parent
LATEST = OUT_DIR / "latest.json"
HISTORY = OUT_DIR / "history.jsonl"
TIMEOUT = 10


def parse_buses(data, line):
    """Flatten buses_aller + buses_retour into simple position dicts."""
    buses = []
    for direction_key in ("buses_aller", "buses_retour"):
        for b in data.get(direction_key, []):
            loc = b.get("localisation", "")
            try:
                lat_str, lng_str = loc.split(",")
                lat, lng = float(lat_str), float(lng_str)
            except (ValueError, AttributeError):
                # malformed/empty localisation -> skip this bus this tick
                continue
            buses.append({
                "line": line,
                "bus": b.get("bus"),
                "sens": b.get("sens"),
                "lat": lat,
                "lng": lng,
                # the API's own GPS timestamp (note: appears to be UTC)
                "src_updated_at": b.get("updated_at"),
            })
    return buses


def poll_once():
    """Fetch, parse, write latest.json, append to history.jsonl. Returns bus count."""
    # client-side timestamp, when WE fetched it
    fetched_at = datetime.now(timezone.utc).isoformat()

    buses = []
    for line in LINES:
        resp = requests.post(f"{API_BASE}/{line}", json=PAYLOAD, timeout=TIMEOUT)
        resp.raise_for_status()
        buses.extend(parse_buses(resp.json(), line))
    snapshot = {"fetched_at": fetched_at, "buses": buses}

    # latest.json: overwrite (write to temp then replace, so the map never
    # reads a half-written file)
    tmp = LATEST.with_suffix(".json.tmp")
    tmp.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2))
    tmp.replace(LATEST)

    # history.jsonl: append one compact line
    with HISTORY.open("a", encoding="utf-8") as f:
        f.write(json.dumps(snapshot, ensure_ascii=False) + "\n")

    return len(buses)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--once", action="store_true", help="poll a single time and exit")
    ap.add_argument("--interval", type=int, default=10, help="seconds between polls")
    args = ap.parse_args()

    if args.once:
        try:
            n = poll_once()
            print(f"ok: {n} bus(es) logged")
        except Exception as e:
            print(f"error: {e}", file=sys.stderr)
            sys.exit(1)
        return

    print(f"polling every {args.interval}s -> {LATEST.name} + {HISTORY.name} "
          f"(Ctrl-C to stop)")
    while True:
        try:
            n = poll_once()
            stamp = datetime.now().strftime("%H:%M:%S")
            print(f"[{stamp}] {n} bus(es)")
        except requests.RequestException as e:
            # network hiccup: log it and keep going, don't crash the loop
            print(f"[{datetime.now():%H:%M:%S}] request failed: {e}",
                  file=sys.stderr)
        except Exception as e:
            print(f"[{datetime.now():%H:%M:%S}] unexpected: {e}", file=sys.stderr)
        time.sleep(args.interval)


if __name__ == "__main__":
    main()