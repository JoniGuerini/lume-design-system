# Elevation

Lume section: Foundations. Page: https://lumeui.dev/#/fundamentos/elevacao

In Lume, depth comes first from the surface color and only then from the shadow. Clear layers, soft shadows, and a stacking order with no surprises.

In numbers: surface layers: 5 · shadows: 6 · z-index levels: 9.

## Surface layers

Each step is a slightly higher surface. In the dark themes, going up means lighter; in the light ones, the highest layer is white.

app — #DAE0E8 — sunken — #E8EDF3 — canvas — #EEF2F6 — surface — #FFFFFF — raised — #FFFFFF

app — #0F0E0C — sunken — #151412 — canvas — #1D1B18 — surface — #24221F — raised — #2C2A27

- 01 — bg.app — Behind the app shell panels.
- 02 — bg.sunken — Fields and recessed areas.
- 03 — bg.canvas — Background of the content panel.
- 04 — bg.surface — Cards and blocks. The sidebar uses the same color.
- 05 — bg.raised — Panels, menus, and modals.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
```

## Shadows

Six two-layer shadows — one short and defined, one long and diffuse. In the dark theme they’re black and dense; in Lume light, a very soft slate. Click a shadow to copy it.

xs — Minimal details. — sm — Slightly raised controls. — md — Highlighted cards. — lg — Panels, sidebar, tooltip, and toast. — xl — Menus and popovers. — 2xl — ⌘K and the mobile drawer.

xs — Minimal details. — sm — Slightly raised controls. — md — Highlighted cards. — lg — Panels, sidebar, tooltip, and toast. — xl — Menus and popovers. — 2xl — ⌘K and the mobile drawer.

### Values same token, different value in each theme

| Token | Lume light | Lume dark |  |
| --- | --- | --- | --- |
| shadow.xs — --ds-shadow-xs |  `0 1px 2px 0 rgb(45 58 74 / 0.06)`  |  `0 1px 2px 0 rgb(0 0 0 / 0.32)`  |  |
| shadow.sm — --ds-shadow-sm |  `0 1px 2px 0 rgb(45 58 74 / 0.06), 0 2px 6px -1px rgb(45 58 74 / 0.06)`  |  `0 1px 2px 0 rgb(0 0 0 / 0.3), 0 2px 6px -1px rgb(0 0 0 / 0.24)`  |  |
| shadow.md — --ds-shadow-md |  `0 2px 4px -1px rgb(45 58 74 / 0.06), 0 8px 20px -4px rgb(45 58 74 / 0.1)`  |  `0 2px 4px -1px rgb(0 0 0 / 0.28), 0 8px 20px -4px rgb(0 0 0 / 0.36)`  |  |
| shadow.lg — --ds-shadow-lg |  `0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14)`  |  `0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5)`  |  |
| shadow.xl — --ds-shadow-xl |  `0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18)`  |  `0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6)`  |  |
| shadow.2xl — --ds-shadow-2xl |  `0 12px 24px -6px rgb(45 58 74 / 0.1), 0 48px 96px -24px rgb(45 58 74 / 0.24)`  |  `0 12px 24px -6px rgb(0 0 0 / 0.36), 0 48px 96px -24px rgb(0 0 0 / 0.72)`  |  |

## When to elevate

What stays in the flow uses surface color only. Shadows are for what separates from the page; strong shadows, only for what floats above everything.

| Component | Surface | Shadow | Layer |
| --- | --- | --- | --- |
| Card — A content block on the canvas. | bg.surface | — | — |
| Panel — The main surface, like the “Script” panel. | bg.raised | shadow.lg | — |
| Sidebar and main area — The two panels of the app shell. | bg.surface | shadow.lg | — |
| Top bar — Sticks to the top while scrolling. | bg.canvas | — | z.sticky |
| Menu — Opens from a chip or a button. | bg.raised | shadow.xl | z.popover |
| Tooltip — A hint over any element. | bg.raised | shadow.lg | z.tooltip |
| Toast — A short, passing notice. | bg.inverse | shadow.lg | z.toast |
| ⌘K palette — A modal dialog over the dimmed background. | bg.raised | shadow.2xl | z.modal |
| Mobile drawer — The sidebar on small screens. | bg.surface | shadow.2xl | z.overlay |

## Stacking

The order of who sits on top. Always use the token: the gaps of 100 leave room for special cases without a numbers fight.

- 1600 — tooltip — Tooltip — always on top of everything.
- 1500 — toast — Toast.
- 1400 — popover — Menus and popovers.
- 1300 — modal — Modals (⌘K uses the native <dialog> layer).
- 1200 — overlay — Dimmed background and the mobile drawer.
- 1100 — sticky — Top bar.
- 1000 — dropdown — In-flow dropdown lists.
- 1 — raised — Something that needs to sit in front of its neighbors.
- 0 — base — Normal page flow.

## Usage

Less shadow, more intent.

- **Do:** color layer first. A card on the canvas only needs the surface and a subtle border.
- **Avoid:** strong shadows in the flow. A large shadow on something that doesn’t float adds noise and steals the hierarchy from menus and modals.
- **Tip:** z-index only via tokens. Loose numbers turn into a race (999, 9999…). The tokens already say who sits on top.
