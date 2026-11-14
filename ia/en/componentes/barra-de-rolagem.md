# Scrollbar

Lume section: Components. Page: https://lumeui.dev/#/componentes/barra-de-rolagem

A single bar, with no track or arrows, the same on every system. It appears while people scroll and takes up no layout space.

In numbers: function: 1 · thickness: 6 px · grab area: 12 px · fades in: 0.9 s.

## Example

```html
<div class="painel" tabindex="0" role="region" aria-label="…">
  …
</div>

<script type="module">
  import { initScrollbars } from 'https://lumeui.dev/v/0.31/lume.js';
  initScrollbars();
</script>
```

## Variants

They all work here: just scroll.

Scroll this area to see the bar. — It appears while you scroll. — It fades about a second after you stop. — While it’s visible, you can drag it. — With the pointer on it, it gets thicker and stays. — If the page scrolls, it follows the area. — There’s no track and no arrows. — It takes up no layout space. — It works on any scrolling area. — Line 9 — Line 10 — Line 11 — Line 12 — Line 13 — Line 14 — Line 15 — Line 16 — Line 17 — Line 18 — Line 19 — Line 20 — Vertical `default` — On the right edge of the area. — 1 — 2 — 3 — 4 — 5 — 6 — 7 — 8 — 9 — 10 — 11 — 12 — 13 — 14 — Horizontal `default` — On the bottom edge. To scroll: Shift + wheel, trackpad, or ← →. — Fixed header — Scroll this area to see the bar. — It appears while you scroll. — It fades about a second after you stop. — While it’s visible, you can drag it. — With the pointer on it, it gets thicker and stays. — If the page scrolls, it follows the area. — There’s no track and no arrows. — It takes up no layout space. — It works on any scrolling area. — Line 9 — Line 10 — Line 11 — Line 12 — Line 13 — Line 14 — Line 15 — Line 16 — Line 17 — Line 18 — Line 19 — Line 20 — With an inset `--ds-scrollbar-start` — Starts below a fixed header. — Scroll this area to see the bar. — It appears while you scroll. — It fades about a second after you stop. — While it’s visible, you can drag it. — With the pointer on it, it gets thicker and stays. — If the page scrolls, it follows the area. — There’s no track and no arrows. — It takes up no layout space. — It works on any scrolling area. — Line 9 — Line 10 — Line 11 — Line 12 — Line 13 — Line 14 — Line 15 — Line 16 — Line 17 — Line 18 — Line 19 — Line 20 — No bar `--ds-scrollbar: none` — For short horizontal lists, like tabs.

## States

Hover can be forced with `data-state`; dragging, with `data-active`.

Markup of the examples in this section:

```html
<div class="ds-scrollbar ds-scrollbar--y" data-visible=""></div>

<div class="ds-scrollbar ds-scrollbar--y" data-visible="" data-active=""></div>
```

## Code

Just turn it on once. Areas added later get the bar too.

```html
import { initScrollbars } from 'https://lumeui.dev/v/0.31/lume.js';

initScrollbars();

/* Per-area settings, in the CSS of the scrolling area itself */
.painel {
  --ds-scrollbar-start: 64px; /* top inset */
  --ds-scrollbar-end: 16px;   /* bottom inset */
}

.abas {
  --ds-scrollbar: none;       /* no bar */
}
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Scrolling is still the browser’s; the bar only shows where you are.

- Keyboard — ↑ ↓ PgUp PgDn — Native scrolling stays. An area with nothing focusable needs `tabindex="0"`, `role`, and a name.
- Screen readers — The bar is visual only, with `aria-hidden`. The content is read normally.
- No false cue — It doesn’t flash when code scrolls on its own, as a page opens. It appears only with a person’s action.
- Show there’s more — With the bar hidden, let content cut off at the edge, to signal it can scroll.

## Tokens used

Everything the bar consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.border.field (`--ds-color-border-field`) | Bar | #3E5166AD | #FFFFFF61 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Hover and dragging | #5C6C7F | #9C9792 |
| radius.full (`--ds-radius-full`) | Ends | 9999 px | 9999 px |
| z.popover (`--ds-z-popover`) | Layer | 1400 | 1400 |
| duration.fast (`--ds-duration-fast`) | Appearing and thickening | 120ms | 120ms |
| duration.slow (`--ds-duration-slow`) | Fading | 320ms | 320ms |

## Usage

When to use it and when to prefer something else.

- **Do:** turn it on for the whole app. A single call at startup. That way every area scrolls the same.
- **Avoid:** hiding it where it helps. Use --ds-scrollbar: none only on short lists, never on long content.
- **Tip:** A fixed header?. Set its height in --ds-scrollbar-start, so the bar doesn’t run under it.
