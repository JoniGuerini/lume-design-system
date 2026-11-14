# Popover

Lume section: Components. Page: https://lumeui.dev/#/componentes/popover

Content that opens on click, attached to its trigger, without blocking the screen. It sits between the Tooltip, which only gives a hint, and the Modal, which interrupts.

In numbers: sides: 4 · alignments: 3 · max width: 340 px · ARIA role: dialog.

## Example

```html
<button type="button" class="ds-btn ds-btn--secondary" id="detalhes">Open popover</button>

<script type="module">
  import { createPopover } from 'https://lumeui.dev/v/0.34/lume.js';
  createPopover(document.querySelector('#detalhes'), {
    title: 'Details',
    content: '<p>Free content that stays open until the person leaves.</p>',
    placement: 'bottom',
    align: 'start',
  });
</script>
```

## Variants

It can be just text, have a title and close button, or hold controls.

Text only `content` — An explanation longer than a tooltip could hold.

With a title `title` — The title names the panel and brings the close button.

With controls `Element` — On open, focus goes to the first control.

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-demo="text" aria-label="What’s this?" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-popover-2"><ds-icon name="help-circle"></ds-icon></button>

<button type="button" class="ds-btn ds-btn--secondary" data-demo="title" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-popover-3">Details</button>

<button type="button" class="ds-btn ds-btn--secondary" data-demo="form" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-popover-4"><ds-icon name="link"></ds-icon>Share</button>
```

## Code

With `data-popover-close`, a button inside also closes the panel.

```html
import { createPopover } from 'https://lumeui.dev/v/0.34/lume.js';

const popover = createPopover(document.querySelector('#detalhes'), {
  title: 'Details',
  content: '<p>Free content that stays open until the person leaves.</p>',
  placement: 'bottom',
  align: 'start',
});
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

A dialog that doesn’t trap focus: people can leave with Tab.

- Open — Enter Space — The trigger is an ordinary button, with aria-expanded. Focus enters the panel.
- Close — Esc Tab — Esc closes and returns focus to the trigger. Clicking outside or tabbing away also closes it.
- With a name — With no title, pass `label` so screen readers know what opened.

## Tokens used

The same surface as the Menu.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Background | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Outline | #3E51664D | #FFFFFF29 |
| shadow.xl (`--ds-shadow-xl`) | Shadow | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| radius.lg (`--ds-radius-lg`) | Corners | 16 px | 16 px |
| color.fg.muted (`--ds-color-fg-muted`) | Text | #46586E | #CEC8C1 |

## Usage

Which layer to choose.

- **Do:** short content on demand. A detail, a link to copy, or a quick filter.
- **Avoid:** long tasks. For a whole form, use the Drawer or Modal.
- **Tip:** A hover-only hint?. If it needs no click and fits in a sentence, it’s a Tooltip.
