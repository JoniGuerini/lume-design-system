# Back to top

Lume section: Components. Page: https://lumeui.dev/#/componentes/voltar-ao-topo

On long pages, it takes you back to the start in one click. It stays hidden until you’ve scrolled a good way.

In numbers: size: 40 px · appears after: 1 screen · anchor: container · function: 1.

## Example

```html
import { createBackToTop } from 'https://lumeui.dev/v/0.33/lume.js';

createBackToTop(document.querySelector('.painel__rolagem'));
```

## States

Hover and focus can be forced with `data-state`. The button appears only with `data-visible`.

Markup of the examples in this section:

```html
<button type="button" class="ds-back-to-top" data-visible="" aria-label="Back to top"><ds-icon name="arrow-up"></ds-icon></button>
```

## Code

The button goes into `parent`, which needs a `position`.

```html
import { createBackToTop } from 'https://lumeui.dev/v/0.33/lume.js';

const back = createBackToTop(document.querySelector('.painel__rolagem'), {
  parent: document.querySelector('.painel'),
  threshold: 600, // optional; the default is one screen of the area
});

back.destroy();
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Designed for people who don’t use a mouse, and for those who prefer less motion.

- Focus on the content — Tab Enter — On click, focus moves to the start of the content. The next Tab continues from there, not from mid-page.
- Truly hidden — While it isn’t showing, the button is out of Tab order and hidden from screen readers.
- Less motion — People who asked for less motion in their system go back to the top without animation.
- Name — The icon has a name in all three languages, and the same text appears in the tooltip.

## Tokens used

Everything the button consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Size | 40 px | 40 px |
| color.bg.raised (`--ds-color-bg-raised`) | Background | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Outline | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Outline on hover | #3E51664D | #FFFFFF29 |
| color.fg.muted (`--ds-color-fg-muted`) | Icon | #46586E | #CEC8C1 |
| radius.full (`--ds-radius-full`) | Corners | 9999 px | 9999 px |
| shadow.md (`--ds-shadow-md`) | Sets it apart from the content | 0 2px 4px -1px rgb(45 58 74 / 0.06), 0 8px 20px -4px rgb(45 58 74 / 0.1) | 0 2px 4px -1px rgb(0 0 0 / 0.28), 0 8px 20px -4px rgb(0 0 0 / 0.36) |
| duration.base (`--ds-duration-base`) | Appearing and fading | 200ms | 200ms |

## Usage

When to use it and when to prefer something else.

- **Do:** very long pages. Docs, lists, and histories, where scrolling back is a chore.
- **Avoid:** short pages. If the page fits in two screens, the button only takes up space.
- **Tip:** One per area. More than one area scrolling on screen? Give the button only to the main one.
