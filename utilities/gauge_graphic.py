import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

# Use LaTeX for all text rendering
plt.rcParams.update({
    "text.usetex": True,
    "font.family": "serif",
    "font.serif": ["Computer Modern Roman"],
})

fig, ax = plt.subplots(figsize=(6, 6), dpi=300)
fig.patch.set_alpha(0)          # transparent figure background
ax.set_facecolor("none")        # transparent axes background

WHITE = "#FFFFFF"
LW = 1.6                        # line weight — keep consistent for sleekness

# --- Unit circle --------------------------------------------------------
theta = np.linspace(0, 2 * np.pi, 400)
ax.plot(np.cos(theta), np.sin(theta), color=WHITE, lw=LW)

# --- Radius vector (the "phase" arrow from origin) ----------------------
phi = np.deg2rad(35)            # initial phase angle
ax.annotate(
    "", xy=(np.cos(phi), np.sin(phi)), xytext=(0, 0),
    arrowprops=dict(arrowstyle="-|>", color=WHITE, lw=LW,
                    mutation_scale=18, shrinkA=0, shrinkB=0),
)

# # --- Curved arrow showing the rotation e^{i alpha} ----------------------
# arc_r = 0.32
# arc = patches.Arc((0, 0), 2 * arc_r, 2 * arc_r,
#                   angle=0, theta1=0, theta2=np.rad2deg(phi),
#                   color=WHITE, lw=LW)
# ax.add_patch(arc)

# # arrowhead at the end of the arc
# head_ang = phi
# hx, hy = arc_r * np.cos(head_ang), arc_r * np.sin(head_ang)
# # tangent direction (perpendicular to radius, counter-clockwise)
# tx, ty = -np.sin(head_ang), np.cos(head_ang)
# ax.annotate(
#     "", xy=(hx + 0.001 * tx, hy + 0.001 * ty),
#     xytext=(hx - 0.05 * tx, hy - 0.05 * ty),
#     arrowprops=dict(arrowstyle="-|>", color=WHITE, lw=LW,
#                     mutation_scale=14, shrinkA=0, shrinkB=0),
# )

# --- Labels -------------------------------------------------------------
# # phase angle label inside the arc
# ax.text(arc_r * 1.55 * np.cos(phi / 2),
#         arc_r * 1.55 * np.sin(phi / 2),
#         r"$\alpha(x)$", color=WHITE, fontsize=20,
#         ha="center", va="center")

# e^{i alpha} label near the tip of the radius
ax.text(np.cos(phi) * 1.18, np.sin(phi) * 1.18,
        r"$e^{i\alpha(x)}$", color=WHITE, fontsize=22,
        ha="left", va="center")

# U(1) label, top-left of the circle
ax.text(-1.05, 1.05, r"$U(1)$", color=WHITE, fontsize=24,
        ha="left", va="top")

# --- Framing ------------------------------------------------------------
ax.set_xlim(-1.35, 1.55)
ax.set_ylim(-1.25, 1.25)
ax.set_aspect("equal")
ax.axis("off")

plt.savefig("u1_phase.png", transparent=True, bbox_inches="tight", dpi=300)
plt.show()