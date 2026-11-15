# Color

Lume section: Foundations. Page: https://lumeui.dev/#/fundamentos/cores

A warm palette generated in OKLCH and semantic tokens that adapt to the theme. Components never use a loose color — always a token.

In numbers: palettes: 15 · primitive colors: 179 · semantic tokens: 96 · WCAG contrast checks: 80/80.

## Primitive palettes

The raw material. Each palette starts from one hue and one chroma in OKLCH, with perceptually uniform lightness. Click a color to copy it.

50 — #fff4ef — 100 — #ffe7db — 200 — #ffd1ba — 300 — #ffb590 — 400 — #ff945e — 500 — #f57630 — 600 — #d95c0a — 700 — #b74900 — 800 — #923700 — 900 — #712800 — 950 — #451400

25 — #fefaf7 — 50 — #f9f5f1 — 100 — #f3ede5 — 200 — #e5ded7 — 300 — #cec8c1 — 400 — #9c9792 — 500 — #7e7975 — 550 — #6d6a66 — 600 — #605d59 — 650 — #55524f — 700 — #4a4744 — 750 — #3d3b38 — 800 — #33312e — 850 — #2c2a27 — 900 — #24221f — 925 — #1d1b18 — 950 — #151412 — 975 — #0f0e0c

### Supporting palettes status, data, and illustration

Sand — hue 78 · chroma 0.045 · 11 shades — Clay — hue 52 · chroma 0.135 · 11 shades — Ochre — hue 88 · chroma 0.085 · 11 shades — Slate — hue 225 · chroma 0.035 · 11 shades — Red — hue 25 · chroma 0.19 · 11 shades — Amber — hue 82 · chroma 0.165 · 11 shades — Green — hue 150 · chroma 0.14 · 11 shades — Teal — hue 185 · chroma 0.11 · 11 shades — Blue — hue 245 · chroma 0.14 · 11 shades — Violet — hue 295 · chroma 0.16 · 11 shades — Pink — hue 352 · chroma 0.16 · 11 shades — Lume · Cool slate — hue 253 · chroma 0.043 · 18 shades — Terracotta — hue 38 · chroma 0.104 · 11 shades

To recreate a whole palette, change the hue in `tokens/palettes.json`. The build generates the shades, fits them to the sRGB gamut, and checks contrast.

```html
// tokens/palettes.json
"brand": { "hue": 50, "chroma": 0.175 }
```

## Semantic tokens

This is what components consume. Each token points to a different primitive in each theme — the name describes the role, not the color.

Backgrounds and surface layers — from the app to the raised panel.

| Token | Lume light | Lume dark |  |
| --- | --- | --- | --- |
| bg.app — --ds-color-bg-app — Background behind the app shell panels. | refugio.200 — #DAE0E8 | neutral.975 — #0F0E0C |  |
| bg.canvas — --ds-color-bg-canvas — Background of the content panel. | refugio.100 — #EEF2F6 | neutral.925 — #1D1B18 |  |
| bg.sidebar — --ds-color-bg-sidebar | refugio.25 — #F8FAFD | neutral.900 — #24221F |  |
| bg.surface — --ds-color-bg-surface — Cards and blocks on the canvas. | white — #FFFFFF | neutral.900 — #24221F |  |
| bg.raised — --ds-color-bg-raised — Modals, popovers, floating panels. | white — #FFFFFF | neutral.850 — #2C2A27 |  |
| bg.sunken — --ds-color-bg-sunken — Fields and recessed areas. | refugio.150 — #E8EDF3 | neutral.950 — #151412 |  |
| bg.muted — --ds-color-bg-muted | refugio.200 — #DAE0E8 | neutral.750 — #3D3B38 |  |
| bg.field — --ds-color-bg-field — Background of fields, selects, and chips that open a menu: the same as the menu they open (raised), so the two match. | white — #FFFFFF | neutral.850 — #2C2A27 |  |
| bg.field-hover — --ds-color-bg-field-hover | refugio.25 — #F8FAFD | neutral.800 — #33312E |  |
| bg.inverse — --ds-color-bg-inverse | refugio.800 — #2B3847 | neutral.100 — #F3EDE5 |  |
| bg.hover — --ds-color-bg-hover | refugio.700 · 5% — #3E51660D | white · 5% — #FFFFFF0D |  |
| bg.pressed — --ds-color-bg-pressed | refugio.700 · 9% — #3E516617 | white · 8% — #FFFFFF14 |  |
| bg.selected — --ds-color-bg-selected | refugio.700 · 7% — #3E516612 | refugio.300 · 10% — #C0CAD61A |  |
| bg.overlay — --ds-color-bg-overlay | refugio.800 · 35% — #2B384759 | black · 60% — #00000099 |  |

Markup of the examples in this section:

```html
<button type="button" class="ds-chip ds-chip--sm" data-group="bg" aria-pressed="true">Background<span>14</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="fg" aria-pressed="false">Text<span>8</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="border" aria-pressed="false">Border<span>7</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="brand" aria-pressed="false">Brand<span>9</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="success" aria-pressed="false">Success<span>6</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="warning" aria-pressed="false">Warning<span>6</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="danger" aria-pressed="false">Danger<span>6</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-group="info" aria-pressed="false">Info<span>6</span></button>
```

## Themes

Lume comes in light and dark — the Lume app’s slate and terracotta — and by default follows the system: light by day, dark if the device is set to dark. Since themes live in attributes, you can even mix them: a dark block inside a light screen.

Version 0.1 launch

The same components and the same tokens — only the theme changes.

Version 0.1 launch

The same components and the same tokens — only the theme changes.

```html
<html data-theme="light">        <!-- Lume light · default -->
<html data-theme="dark">         <!-- Lume dark -->
<!-- “System” is resolved in JS (initTheme): Lume light or Lume dark -->

<section data-theme="dark">  <!-- nested theme: only this block turns dark -->
```

Markup of the examples in this section:

```html
<p class="ds-panel__eyebrow">Example</p>

<span class="ds-icon-btn ds-icon-btn--sm"><ds-icon name="x"></ds-icon></span>

<span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="pencil"></ds-icon></span>Direct tone<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></span>

<span class="ds-badge ds-badge--sm ds-badge--success">Done</span>

<span class="ds-badge ds-badge--sm ds-badge--warning">Review</span>

<span class="ds-btn ds-btn--primary ds-btn--sm">Publish</span>

<span class="ds-btn ds-btn--secondary ds-btn--sm">Cancel</span>
```

## Contrast

Every text and background pair the components use is checked in the build, in both themes, against WCAG 2.2. Regular text needs 4.5:1; tertiary text, 3:1.

| Text on background | Lume light | Lume dark | Minimum |
| --- | --- | --- | --- |
| fg.default — on bg.canvas | Aa — 10.61:1 — AAA | Aa — 14.77:1 — AAA | 4.5:1 |
| fg.muted — on bg.canvas | Aa — 6.48:1 — AA | Aa — 10.36:1 — AAA | 4.5:1 |
| fg.default — on bg.sidebar | Aa — 11.42:1 — AAA | Aa — 13.64:1 — AAA | 4.5:1 |
| fg.muted — on bg.sidebar | Aa — 6.97:1 — AA | Aa — 9.56:1 — AAA | 4.5:1 |
| fg.subtle — on bg.sidebar | Aa — 5.72:1 — AA | Aa — 5.48:1 — AA | 4.5:1 |
| fg.muted — on bg.raised | Aa — 7.29:1 — AAA | Aa — 8.62:1 — AAA | 4.5:1 |
| fg.link — on bg.canvas | Aa — 7.25:1 — AAA | Aa — 12.93:1 — AAA | 4.5:1 |
| fg.brand — on bg.canvas | Aa — 7.25:1 — AAA | Aa — 12.93:1 — AAA | 4.5:1 |
| brand.on-solid — on brand.solid | Aa — 7.80:1 — AAA | Aa — 9.09:1 — AAA | 4.5:1 |
| brand.fg — on brand.subtle | Aa — 7.25:1 — AAA | Aa — 9.38:1 — AAA | 4.5:1 |
| fg.inverse — on bg.inverse | Aa — 11.42:1 — AAA | Aa — 16.59:1 — AAA | 4.5:1 |
| success.fg — on success.subtle | Aa — 6.33:1 — AA | Aa — 8.33:1 — AAA | 4.5:1 |
| success.on-solid — on success.solid | Aa — 4.66:1 — AA | Aa — 7.41:1 — AAA | 4.5:1 |
| warning.fg — on warning.subtle | Aa — 6.43:1 — AA | Aa — 8.99:1 — AAA | 4.5:1 |
| warning.on-solid — on warning.solid | Aa — 8.33:1 — AAA | Aa — 8.33:1 — AAA | 4.5:1 |
| danger.fg — on danger.subtle | Aa — 5.02:1 — AA | Aa — 7.93:1 — AAA | 4.5:1 |
| danger.on-solid — on danger.solid | Aa — 5.41:1 — AA | Aa — 7.13:1 — AAA | 4.5:1 |
| info.fg — on info.subtle | Aa — 4.56:1 — AA | Aa — 8.19:1 — AAA | 4.5:1 |
| info.on-solid — on info.solid | Aa — 4.89:1 — AA | Aa — 7.31:1 — AAA | 4.5:1 |
| chart.series.1 — on bg.surface | Aa — 3.83:1 — AA large | Aa — 4.14:1 — AA large | 3:1 |
| chart.series.2 — on bg.surface | Aa — 3.54:1 — AA large | Aa — 4.49:1 — AA large | 3:1 |
| chart.series.3 — on bg.surface | Aa — 3.88:1 — AA large | Aa — 4.08:1 — AA large | 3:1 |
| chart.series.4 — on bg.surface | Aa — 4.60:1 — AA | Aa — 3.45:1 — AA large | 3:1 |
| chart.series.5 — on bg.surface | Aa — 3.37:1 — AA large | Aa — 4.70:1 — AA | 3:1 |
| chart.series.6 — on bg.surface | Aa — 3.89:1 — AA large | Aa — 4.07:1 — AA large | 3:1 |
| chart.series.7 — on bg.surface | Aa — 3.79:1 — AA large | Aa — 4.19:1 — AA large | 3:1 |
| chart.series.8 — on bg.surface | Aa — 3.36:1 — AA large | Aa — 4.73:1 — AA | 3:1 |
| fg.subtle — on bg.app | Aa — 4.50:1 — AA | Aa — 6.67:1 — AA | 4.5:1 |
| fg.subtle — on bg.canvas | Aa — 5.32:1 — AA | Aa — 5.94:1 — AA | 4.5:1 |
| fg.subtle — on bg.surface | Aa — 5.98:1 — AA | Aa — 5.48:1 — AA | 4.5:1 |
| fg.subtle — on bg.raised | Aa — 5.98:1 — AA | Aa — 4.94:1 — AA | 4.5:1 |
| fg.subtle — on bg.sunken | Aa — 5.08:1 — AA | Aa — 6.36:1 — AA | 4.5:1 |
| border.field — on bg.canvas | Aa — 3.35:1 — AA large | Aa — 3.58:1 — AA large | 3:1 |
| border.field — on bg.surface | Aa — 3.57:1 — AA large | Aa — 3.50:1 — AA large | 3:1 |
| border.field — on bg.raised | Aa — 3.57:1 — AA large | Aa — 3.38:1 — AA large | 3:1 |
| border.field — on bg.sunken | Aa — 3.29:1 — AA large | Aa — 3.57:1 — AA large | 3:1 |
| fg.muted — on bg.sunken | Aa — 6.19:1 — AA | Aa — 11.10:1 — AAA | 4.5:1 |
| fg.muted — on bg.field | Aa — 7.29:1 — AAA | Aa — 8.62:1 — AAA | 4.5:1 |
| fg.default — on bg.field-hover | Aa — 11.42:1 — AAA | Aa — 11.15:1 — AAA | 4.5:1 |

## Usage

Three rules that keep the interface consistent as the system grows.

- **Do:** use semantic tokens. The name describes the role. When the theme or brand changes, the component follows on its own.
- **Avoid:** loose or primitive colors. A fixed hex or a primitive in a component breaks the light theme and locks the brand swap.
- **Tip:** Go easy on the peach. Save the brand color for the main action and for indicators. The rest of the interface lives in the warm neutrals.
