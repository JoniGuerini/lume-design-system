# Radius

Lume section: Foundations. Page: https://lumeui.dev/#/fundamentos/raios

Generous corners set Lume’s calm tone. A short scale — from detail to pill — and one simple rule for corners inside corners.

In numbers: radius tokens: 9 · px, from xs to 3xl: 6–36 · px on the button: 12 · for pills: full.

## Scale

Nine steps. The bigger the surface, the bigger the radius. Click a radius to copy the variable.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="8.5" y="8.5" width="12" height="12" rx="2"></rect><path d="M15.5 8.5v-3a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"></path></svg>
```

## Nested radii

When a rounded surface sits inside another, the inner radius is the outer one minus the padding. That keeps the curves parallel.

20 — − — 8 — = — 12 px — `radius.md`

Markup of the examples in this section:

```html
<button type="button" class="ds-chip ds-chip--sm" data-outer="lg" aria-pressed="false">lg · 16</button>

<button type="button" class="ds-chip ds-chip--sm" data-outer="xl" aria-pressed="true">xl · 20</button>

<button type="button" class="ds-chip ds-chip--sm" data-outer="2xl" aria-pressed="false">2xl · 28</button>

<button type="button" class="ds-chip ds-chip--sm" data-outer="3xl" aria-pressed="false">3xl · 36</button>

<button type="button" class="ds-chip ds-chip--sm" data-pad="050" aria-pressed="false">4 px</button>

<button type="button" class="ds-chip ds-chip--sm" data-pad="100" aria-pressed="true">8 px</button>

<button type="button" class="ds-chip ds-chip--sm" data-pad="150" aria-pressed="false">12 px</button>

<button type="button" class="ds-chip ds-chip--sm" data-pad="200" aria-pressed="false">16 px</button>
```

## Where to use

Each component already comes with the right radius. The examples below are the real components.

| Radius | Components | Example |
| --- | --- | --- |
| full — pill | Chip, badge, segmented control, avatar. |  |
| xs — 6 px | Kbd, inline code, inline action focus. |  |
| sm — 8 px | Small button, icon button. |  |
| md — 12 px | Button, field, toast, ⌘K item. |  |
| lg — 16 px | Menu, code block, account card. |  |
| xl — 20 px | Card; panel on mobile. |  |
| 2xl — 28 px | Panel, ⌘K, sidebar, and main area. |  |

## Usage

Radius is hierarchy too: smaller corners for small things, larger ones for what contains them.

- **Do:** use the scale. A token-based radius keeps everything coherent — and changes with the scale.
- **Avoid:** loose or repeated radii. A fixed value escapes the scale; the same radius inside and out makes the inner curve look “fat”.
- **Tip:** Pills only for compact things. Chips, badges, avatars, and the theme picker. Buttons and fields stay at md.
