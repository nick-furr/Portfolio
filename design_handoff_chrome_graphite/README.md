# Handoff: Chrome Graphite Portfolio Theme + Alignment-Sheet Hero Graphic

## Overview
A visual redesign of nickfurr.com. Two deliverables:

1. **Chrome Graphite + Violet theme** — a dark-ground recolor of the existing portfolio (previously a light/rust "cream" theme). Chrome (polished-metal) gradient on display italics, a single violet accent driving all functional color.
2. **Alignment-sheet hero graphic** — a generated SVG backdrop behind the hero: a civil-engineering plan view (roadway alignment, contours, right-of-way, station ticks) overlaid with a LiDAR-style structured point cloud. Also exported standalone as a LinkedIn banner.

No content was changed. Copy, sections, and structure are identical to the current live site.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing the intended look and behavior, not production code to drop in verbatim. The task is to **recreate these designs in the target codebase's existing environment**, using its established patterns.

That said, this design is unusual in one respect: `index.html` in this bundle **is a full, working copy of the real site** with the theme applied as a CSS override block, and `alignment-sheet.js` is **framework-agnostic vanilla JS with no dependencies**. So:

- The theme is best implemented by folding the override values into the site's real `:root` token block (see Design Tokens), not by keeping a second override `<style>` tag.
- The graphic can be **used as-is**: `alignment-sheet.js` is dependency-free and can be copied directly, or ported to a component that calls it on mount.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and the exact generated graphic. Values below are authoritative — the hex codes and numbers are the ones in the shipped files.

## Screens / Views

### Site — global theme
Applies to every section of the single-page portfolio.

- **Ground:** `#101316` page background; `#171b1f` secondary; `#161a1e` paper/cards.
- **Text:** `#e9ecef` primary ink, `#b4babf` secondary, `#838a90` muted, `#5f666c` muted-2.
- **Rules/borders:** `#262b30` hairline, `#353b42` heavier, `#3a4147` rule.
- **Accent (violet):** `#9b7cff`, hover/lighter `#b9a3ff`, tint `#2a3138`.

**Chrome treatment** — applied ONLY to display italics (`.hero-lede em`, `.section-head h2 em`, `.about-prose em`, `#contact h2 em`). This is the signature of the theme; never use it on body text.

```css
background: linear-gradient(100deg,#6e7479 0%,#c5cbd0 14%,#ffffff 27%,#a7adb3 41%,#7c8288 53%,#eef1f4 69%,#b4babf 83%,#878d93 100%);
-webkit-background-clip: text; background-clip: text;
-webkit-text-fill-color: transparent; color: transparent;
font-style: italic;
```

It is a **banded** gradient (light→dark→light→dark), not a two-stop fade — that banding is what reads as polished metal. Keep the stop positions.

**Violet carries all functional color:** primary CTA fill, the `01/03` section-number slash, the wordmark dot, and link hovers. There is no second accent — an earlier gold micro-accent was tested and cut.

**Dark-ground fixes** (these elements were hardcoded light-on-dark in the original and need explicit values):

```css
#contact{background:#13171b;color:#e9ecef}
#contact h2{color:#f1f3f5}
#contact .contact-row .v{color:#e9ecef}
.booking-card{background:#171c21;border-color:#272d33}
.booking-card h3{color:#f1f3f5}
footer{background:#0c0e11;color:#838a90;border-top-color:#262b30}
footer a:hover{color:#e9ecef}
.booking-btn{background:#9b7cff;border-color:#9b7cff;color:#0b0d10}
.booking-btn:hover{background:transparent;color:#9b7cff}
```

Note: the original stylesheet had a hardcoded `#e08442` orange in the contact block (button fill, a divider, link hovers). All instances were replaced with the `--pop` variable. **Verify no `#e08442` remains** — grep for it.

Also set `<meta name="theme-color" content="#101316">`.

### Hero — alignment-sheet backdrop
- **Purpose:** ambient graphic behind the hero headline; establishes the civil-engineering-meets-software identity.
- **Layout:** absolutely positioned layer filling `#hero`, sitting behind content.

```css
#hero{position:relative;overflow:hidden;isolation:isolate}
#hero-sheet{
  position:absolute;left:0;right:0;bottom:0;width:100%;height:100%;
  z-index:-1;opacity:.62;
  -webkit-mask-image:linear-gradient(100deg,transparent 0%,rgba(0,0,0,.35) 26%,#000 62%),linear-gradient(180deg,#000 62%,transparent 100%);
  mask-image:linear-gradient(100deg,transparent 0%,rgba(0,0,0,.35) 26%,#000 62%),linear-gradient(180deg,#000 62%,transparent 100%);
  -webkit-mask-composite:source-in;mask-composite:intersect;
}
#hero-sheet::after{content:'';position:absolute;inset:0;background:radial-gradient(680px 380px at 88% 30%,rgba(155,124,255,.16),transparent 64%)}
#hero .wrap{position:relative;z-index:1}
@media (max-width:900px){#hero-sheet{opacity:.4}}
```

The dual mask is essential: it fades the graphic out toward the left (so headline text stays legible) and toward the bottom (so it dissolves into the next section) — `mask-composite: intersect` combines them. Without it the graphic competes with the type.

- **Mount:** `<div id="hero-sheet"></div>` as the first child of `<section id="hero">`, then:

```html
<script src="alignment-sheet.js"></script>
<script>renderAlignmentSheet(document.getElementById('hero-sheet'),{labels:false,preserve:'xMidYMax slice'});</script>
```

In a component framework, call `renderAlignmentSheet(ref.current, {...})` in a mount effect and clear the container on unmount (it appends an `<svg>`).

## The Graphic (alignment-sheet.js)

Dependency-free. Signature:

```js
renderAlignmentSheet(targetElement, {
  labels: true,      // station text labels ("10+00", "20+00", …)
  occlusion: true,   // scan shadows where line of sight is lost
  preserve: 'xMidYMid slice'  // SVG preserveAspectRatio
})
```

Draws into a `1584×396` viewBox, scaled to fill the target. **Deterministic** — it uses a seeded LCG (`rng(23)`), so every render is pixel-identical. Do not swap in `Math.random()`; the composition was art-directed against these specific seeds.

**Usage settings:**
- Site hero: `{labels:false, preserve:'xMidYMax slice'}` — labels off (they'd compete with hero copy), anchored bottom so the corridor sits low.
- LinkedIn banner: `{labels:true, occlusion:true}` at native `1584×396`.

**Layer stack, back to front:**
1. **Terrain contours** — offsets of the alignment path at ±106/136/166/196/226/256 (×1.02) plus ±76/88. Stroke `#8e979f`, 0.8px @ 0.22 opacity; the ±166 pair is the **index contour** at 1.1px @ 0.40. The heavier every-5th line is what makes it read as a real topo sheet.
2. **Point cloud** (see below).
3. **Right-of-way** — ±58 offsets, `#79828a`, 0.9px @ 0.34, dash `26 7 4 7` (long-short = property line convention).
4. **Pavement edges** — ±27, `#d3d9de`, 2px @ 0.72. **Shoulders** — ±36, `#aab2b9`, 0.9px @ 0.30, dash `12 9`.
5. **Station ticks** — every 132 units along the path, perpendicular, alternating major (11px, `#c9d0d6`, 1.4px @ 0.85) / minor (6px, `#8a9299`, 0.8px @ 0.5). Major ticks get a label at `10+00` + 5 per station.
6. **Centerline** — the designed line, violet `#9b7cff`, 2px @ 0.9, dash `34 10 3 10` (long-dash-dot = CL convention), with a `feGaussianBlur stdDeviation=4` glow merge.

**Point cloud** — the piece that took the most iteration. It is NOT random scatter. It's **perpendicular cross-section passes**, 190 along the corridor, sampling every 7 units across ±150:
- 30% random dropout per point, plus positional jitter (±5.5 along-section, ±4.5 in both axes) to break the lattice.
- **Section rhythm:** every 8th pass drops to 4% dropout — a full-density plotted cross-section. This cadence is what makes it read as surveyed rather than decorative.
- **Occlusion:** two scan shadows (at 40% and 73.5% along the path) where points are 93% culled — simulates lost line of sight.
- Points are bucketed into 4 brightness tiers by distance from centerline and emitted as **4 batched `<path>` elements** (~5,600 `M x y h.1` subpaths total) rather than 5,600 `<circle>` elements. This is a deliberate perf decision — keep it.
- Tier config `[color, opacity, width]`: `['#79838c',.26,1.5] ['#98a2ab',.38,1.7] ['#c3cad2',.58,1.9] ['#d9cfff',.85,2.2]`. Points within 30 units of centerline get the brightest tier.

**Left/right fade:** a `<mask>` driven by a horizontal gradient (0.15 → 1.0 at 45% → 0.35) applied to the terrain, cloud, ROW, and pavement groups — but NOT to the ticks, centerline, or labels, which stay at full strength.

**Caution:** the cloud points are small and low-opacity by design. They look correct on screen but can be lost by naive raster export or aggressive image compression. Do not "fix" faintness by boosting opacity — it turns the graphic busy and lattice-like. Export at native resolution instead.

## Interactions & Behavior
- The graphic is **static and decorative** — no animation, no interaction. Marked `aria-hidden="true"`.
- Render cost is one synchronous pass at mount (~5,600 path segments in 4 nodes); no re-render on resize — the SVG viewBox handles scaling.
- All other site interactions (nav anchors, hovers, the Loom embed, contact links) are unchanged from the current site.
- Responsive: graphic opacity drops to 0.4 below 900px.

## State Management
None. The theme is pure CSS; the graphic is a single deterministic render with no state.

## Design Tokens

**Colors**
| Token | Value |
|---|---|
| `--bg` | `#101316` |
| `--bg-2` | `#171b1f` |
| `--paper` | `#161a1e` |
| `--ink` | `#e9ecef` |
| `--ink-2` | `#b4babf` |
| `--muted` | `#838a90` |
| `--muted-2` | `#5f666c` |
| `--line` | `#262b30` |
| `--line-2` | `#353b42` |
| `--rule` | `#3a4147` |
| `--pop` / `--accent` | `#9b7cff` |
| `--accent-2` | `#b9a3ff` |
| `--accent-tint` | `#2a3138` |
| contact ground | `#13171b` |
| booking card | `#171c21` / border `#272d33` |
| footer ground | `#0c0e11` |
| CTA text-on-violet | `#0b0d10` |

**Graphic-only colors:** `#8e979f` contours · `#79828a` ROW · `#d3d9de` pavement · `#aab2b9` shoulder · `#c9d0d6`/`#8a9299` ticks · cloud tiers `#79838c` `#98a2ab` `#c3cad2` `#d9cfff` · banner ground `#0b0d11`.

**Typography** — unchanged from the existing site (serif display + mono eyebrows). Graphic labels: JetBrains Mono, 9.5px, `letter-spacing: .12em`, fill `#b9a3ff` @ 0.92.

**Other:** banner canvas `1584×396`; hero graphic viewBox `1584×396`; icon sizes 32 / 180 / 512.

## Assets
- `alignment-sheet.js` — the graphic generator. No dependencies.
- `nickfurr-linkedin-banner-d2s.png` — 1584×396 LinkedIn banner export.
- `favicon.png` (32), `apple-touch-icon.png` (180), `icon-512.png` (512) — graphite ground, light "NF", violet accent dot. These replace the existing icons 1:1.
- Unchanged and not included: `headshot.jpg`, project screenshots, the Loom embed.

## Files
- `index.html` — full working site with the theme applied. The theme lives in a `<style id="metal-overrides">` block near the end of `<head>`; fold those values into the real token block when implementing.
- `alignment-sheet.js` — graphic generator, drop-in.
- `banner-v2.html` — standalone banner source. Supports `?v=` variants explored during design: `a` (no tech layer), `c` (Delaunay TIN mesh), `d`/`d1`/`d2`/`d3` (point-cloud treatments), `d2s` (**final** — section rhythm + strong stationing + occlusion), `e` (coordinate readout). Defaults to `d2s`. Also `?raw=1` to render at native 1584px for export.
- `nickfurr-linkedin-banner-d2s.png`, `favicon.png`, `apple-touch-icon.png`, `icon-512.png` — exported assets.

## Implementation Notes
1. Fold the override tokens into the site's real `:root`; delete the override block.
2. Grep for and remove any remaining `#e08442`.
3. Add `theme-color`.
4. Mount the graphic in the hero with the mask CSS above — the mask is not optional.
5. Replace the three icon files.
6. Keep the seeded RNG.
