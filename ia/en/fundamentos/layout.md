# Layout

Lume section: Foundations. Page: https://lumeui.dev/#/fundamentos/layout

Where things go and how they rearrange. Five breakpoints, a shell with fixed measures, and maximum widths that protect reading.

In numbers: breakpoints: 5 · sidebar (px): 288/76 · top bar (px): 64 · max content (px): 1160.

## Breakpoints

Mobile first: the base layout covers small screens and each breakpoint adds rules from its width up. Resize the window to watch the marker move.

| Name | From | Media query | What changes in the app |
| --- | --- | --- | --- |
| sm | 640 px | @media (min-width: 640px) | No rule in the app yet — available for components. |
| md | 768 px | @media (min-width: 768px) | Below it, margins and panels compact, the top bar trail shows only the current page, and tables become cards. |
| lg | 1024 px | @media (min-width: 1024px) | Below it, the sidebar becomes a drawer over a dimmed background and the menu appears in the top bar. From it up, the sidebar is fixed and collapsible (Ctrl B). |
| xl | 1280 px | @media (min-width: 1280px) | Below it, the Home hero stacks and 4-column grids go down to 2. |
| 2xl | 1536 px | @media (min-width: 1536px) | No rule in the app yet — wide screens keep the maximum content width. |

## App shell

Two panels over the app background: sidebar and content, with the top bar inside the content. The diagram is scaled to a 1440 × 900 window.

|   |   |   |   |
| --- | --- | --- | --- |
| layout.sidebar — --ds-layout-sidebar | 288 px | Expanded sidebar. |  |
| layout.sidebar-collapsed — --ds-layout-sidebar-collapsed | 76 px | Collapsed sidebar — icons only, all centered on the same axis. |  |
| layout.topbar — --ds-layout-topbar | 64 px | Height of the top bar and of the sidebar header. |  |
| layout.frame-gap — --ds-layout-frame-gap | 10 px | Breathing room between the window edge and the two panels. |  |
| radius.2xl — --ds-radius-2xl | 28 px | Radius of the shell panels. |  |

## Widths

Wide screens shouldn’t stretch content to the edge. Pages stop at 1160 px and running text at 720 px.

content-max — Maximum width of page content.

prose-max — Comfortable measure for running text.

gutter — Side margin of the content on desktop.

prose-max in practice — 720 px · ≈ 99 characters per line — A good reading line has between 60 and 80 characters. Shorter, and the eye jumps lines all the time; longer, and it gets lost on the way back. That’s why running text has its own maximum width, narrower than the content, while headings can take the full width without hurting reading.

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-copy="var(--ds-layout-content-max)" aria-label="Copy variable: var(--ds-layout-content-max)" data-ds-tooltip="Copy variable"><ds-icon name="copy"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-copy="var(--ds-layout-prose-max)" aria-label="Copy variable: var(--ds-layout-prose-max)" data-ds-tooltip="Copy variable"><ds-icon name="copy"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-copy="var(--ds-layout-gutter)" aria-label="Copy variable: var(--ds-layout-gutter)" data-ds-tooltip="Copy variable"><ds-icon name="copy"></ds-icon></button>
```

## Grid

Two grid patterns cover the site. Drag to change the container width and watch how each one rearranges. The space between items is always space.150 (12 px).

Container width — 1020 px

Fixed columns that collapse — 4 columns — auto-fill with a minimum — 3 columns

```html
/* fixed columns: cards of equal importance */
grid-template-columns: repeat(4, minmax(0, 1fr));
/* and fewer columns at each breakpoint */
```

```html
/* auto-fill: columns appear on their own */
grid-template-columns:
  repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
```

## Layers

Stacking order is a fixed scale: no z-index 9999. The higher on the list, the further in front.

|   |   |   |   |   |
| --- | --- | --- | --- | --- |
|  | tooltip — --ds-z-tooltip | 1600 | Tooltips and the “Skip to content” link. |  |
|  | toast — --ds-z-toast | 1500 | Confirmation notices. |  |
|  | popover — --ds-z-popover | 1400 | Menus that chips open. |  |
|  | modal — --ds-z-modal | 1300 | Reserved. Ctrl K search uses <dialog>, which already goes to the browser’s top layer. |  |
|  | overlay — --ds-z-overlay | 1200 | The drawer’s dimmed background — the drawer sits one level above. |  |
|  | sticky — --ds-z-sticky | 1100 | The fixed top bar and this page’s navigation. |  |
|  | dropdown — --ds-z-dropdown | 1000 | Reserved for dropdown lists. |  |
|  | raised — --ds-z-raised | 1 | Reserved for something that needs to sit above its neighbors. |  |
|  | base — --ds-z-base | 0 | Content in the normal flow. |  |

## Usage

Rules to keep the layout predictable on any screen.

- **Do:** cap width with tokens. Content up to content-max, running text up to prose-max. On small screens, the width comes from the container.
- **Avoid:** magic measures. Breakpoints and widths made up on the spot create jumps nobody can predict.
- **Tip:** @media doesn’t read variables. Custom properties don’t work inside media queries. Use the token’s px value and, for “below”, subtract a fraction.
