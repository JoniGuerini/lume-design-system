# Drawer

Lume section: Components. Page: https://lumeui.dev/#/componentes/gaveta-lateral

Shows details or a task without taking people off the page. It enters from the edge and lets you see what’s behind it.

In numbers: sides: 3 · widths: 360 · 480 · 640 · base: dialog · focus: trapped.

## Example

```html
import { openDrawer } from 'https://lumeui.dev/v/1.12/lume.js';

openDrawer({
  side: 'right',
  title: '1042',
  body: detalhes,
});
```

## Variants

Right is the default. Bottom works well for quick choices.

Right `side: 'right'` — For details of an item in a list.

Left `side: 'left'` — For filters or extra navigation.

Bottom `side: 'bottom'` — For quick choices, especially on phones.

Markup of the examples in this section:

```html
<button type="button" class="ds-btn ds-btn--secondary" data-open="right"><ds-icon name="panel-left"></ds-icon>Open</button>

<button type="button" class="ds-btn ds-btn--secondary" data-open="left"><ds-icon name="filter"></ds-icon>Open</button>

<button type="button" class="ds-btn ds-btn--secondary" data-open="bottom"><ds-icon name="more-horizontal"></ds-icon>Open</button>
```

## Code

`openDrawer` returns a promise with the chosen action’s value, like the Modal.

```html
import { openDrawer } from 'https://lumeui.dev/v/1.12/lume.js';

const escolha = await openDrawer({
  side: 'right',
  eyebrow: 'Order',
  title: '1042',
  body: detalhes,
  actions: [
    { label: 'Close', value: 'close' },
    { label: 'Approve', value: 'approve', variant: 'primary' },
  ],
});
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

It’s a native `dialog`, like the Modal: the browser handles focus and makes the rest of the page inert.

- Trapped focus — Tab — While it’s open, Tab only moves inside it.
- Close — Esc — Esc and the close button always work, and focus returns to what opened it.
- With a name — The title names the drawer for screen readers.
- Reduced motion — No entrance animation for those who asked for less motion.

## Tokens used

On top of the Modal tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Background | #FFFFFF | #2C2A27 |
| color.bg.overlay (`--ds-color-bg-overlay`) | Scrim | #2B384759 | #00000099 |
| shadow.2xl (`--ds-shadow-2xl`) | Shadow | 0 12px 24px -6px rgb(45 58 74 / 0.1), 0 48px 96px -24px rgb(45 58 74 / 0.24) | 0 12px 24px -6px rgb(0 0 0 / 0.36), 0 48px 96px -24px rgb(0 0 0 / 0.72) |
| radius.xl (`--ds-radius-xl`) | Corners | 20 px | 20 px |
| layout.frame-gap (`--ds-layout-frame-gap`) | Space around | 10 px | 10 px |
| duration.base (`--ds-duration-base`) | Entrance | 200ms | 200ms |

## Usage

Drawer or Modal?

- **Do:** keep the context. Opening a row’s details while still seeing the list behind.
- **Avoid:** quick decisions. For “Delete this project?”, the Modal is direct and centered.
- **Tip:** One at a time. A drawer over a drawer is confusing. Swap the content instead of stacking.
