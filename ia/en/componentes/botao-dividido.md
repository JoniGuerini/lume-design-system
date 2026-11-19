# Split button

Lume section: Components. Page: https://lumeui.dev/#/componentes/botao-dividido

The most common action and, attached to it, the arrow with the alternatives. One click covers the usual case; the arrow keeps the others without filling the bar.

In numbers: parts: 2 · variants: 4 · sizes: 3 · menu: createMenu.

## Example

```html
<div class="ds-split-button">
  <button type="button" class="ds-btn ds-btn--primary" id="nova">
    <ds-icon name="plus"></ds-icon>
    New session
  </button>
  <button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" id="nova-mais" aria-label="More options">
    <ds-icon name="chevron-down"></ds-icon>
  </button>
</div>

<script type="module">
  import { createMenu } from 'https://lumeui.dev/v/1.12/lume.js';
  createMenu(document.querySelector('#nova-mais'), {
    mode: 'action',
    label: 'More options',
    hideLabel: true,
    options: [
      { value: 'recorrente', label: 'Recurring session', icon: 'refresh' },
      { value: 'bloqueio', label: 'Block time', icon: 'lock' },
      { type: 'separator' },
      { value: 'importar', label: 'Import calendar', icon: 'upload' },
    ],
    onChange: (value) => …,
  });
</script>
```

## Variants

Both halves take the same variant and size. On filled ones, a thin line in the background color separates them; on outlined ones, the outline itself. Ghost is out: without an outline, the halves don’t read as one piece.

Primary `ds-btn--primary` — The screen’s main action, with its variations.

Secondary `ds-btn--secondary` — In a bar, next to a primary.

Subtle `ds-btn--subtle` — Support with a bit of presence.

Danger `ds-btn--danger` — Delete and the ways to delete. Always with confirmation.

Markup of the examples in this section:

```html
<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>New session</button>
<button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" aria-label="More options" data-split-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-20"><ds-icon name="chevron-down"></ds-icon></button>
</div>

<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="download"></ds-icon>Export</button>
<button type="button" class="ds-btn ds-btn--secondary ds-split-button__menu" aria-label="More options" data-split-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-21"><ds-icon name="chevron-down"></ds-icon></button>
</div>

<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--subtle"><ds-icon name="copy"></ds-icon>Duplicate</button>
<button type="button" class="ds-btn ds-btn--subtle ds-split-button__menu" aria-label="More options" data-split-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-22"><ds-icon name="chevron-down"></ds-icon></button>
</div>

<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--danger"><ds-icon name="trash"></ds-icon>Delete</button>
<button type="button" class="ds-btn ds-btn--danger ds-split-button__menu" aria-label="More options" data-split-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-23"><ds-icon name="chevron-down"></ds-icon></button>
</div>
```

## States

Each half reacts on its own. With the menu open, the arrow turns.

Markup of the examples in this section:

```html
<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>New session</button>
<button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" aria-label="More options" data-split-menu=""><ds-icon name="chevron-down"></ds-icon></button>
</div>

<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--primary" disabled=""><ds-icon name="plus"></ds-icon>New session</button>
<button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" aria-label="More options" data-split-menu="" disabled=""><ds-icon name="chevron-down"></ds-icon></button>
</div>
```

## Code

Just CSS plus the Menu: the arrow is a `createMenu` in action mode, with the name for screen readers only.

```html
<div class="ds-split-button">
  <button type="button" class="ds-btn ds-btn--primary" id="nova">
    <ds-icon name="plus"></ds-icon>
    New session
  </button>
  <button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" id="nova-mais" aria-label="More options">
    <ds-icon name="chevron-down"></ds-icon>
  </button>
</div>

<script type="module">
  import { createMenu } from 'https://lumeui.dev/v/1.12/lume.js';
  createMenu(document.querySelector('#nova-mais'), {
    mode: 'action',
    label: 'More options',
    hideLabel: true,
    options: [
      { value: 'recorrente', label: 'Recurring session', icon: 'refresh' },
      { value: 'bloqueio', label: 'Block time', icon: 'lock' },
      { type: 'separator' },
      { value: 'importar', label: 'Import calendar', icon: 'upload' },
    ],
    onChange: (value) => …,
  });
</script>

// React
<SplitButton
  label="New session"
  icon="plus"
  onClick={novaSessao}
  options={opcoes}
  onSelect={(value) => …}
/>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Two real buttons, each in the Tab order.

- Two Tab stops — Tab — The first runs the action; the second opens the menu. Nothing is hidden from the keyboard.
- The arrow has a name — ↓ Enter — “More options”, with `aria-haspopup="menu"` and `aria-expanded` set by the Menu.
- The main one stays out of the menu — Repeating the main action in the menu makes screen readers hear the same thing twice.

## Tokens used

The same as the Button.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Arrow height and width | 40 px | 40 px |
| duration.base (`--ds-duration-base`) | Arrow turn | 200ms | 200ms |

## Usage

When to use it and when to prefer something else.

- **Do:** one action and its variations. “New session” and “Recurring session”: the same verb, different ways.
- **Avoid:** unrelated actions. If the menu gathers things unrelated to the main one, use an icon button with a Menu.
- **Tip:** One per screen. Like the primary, the split button draws attention. More than one becomes noise.
