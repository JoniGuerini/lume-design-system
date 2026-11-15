# Sortable list

Lume section: Components. Page: https://lumeui.dev/#/componentes/lista-arrastavel

Change the order of a list by dragging, with the mouse, touch, or keyboard. The item leaves an empty slot where it will land, and each step is announced to screen readers.

In numbers: ways to drag: 3 · directions: 2 · shortcuts: 7 · dependencies: 0.

## Example

```html
<ul class="ds-sortable" role="list" aria-label="Order of the foundations in the sidebar">
  <li class="ds-sortable__item" data-id="cores">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Colors</span>
  </li>
  <li class="ds-sortable__item" data-id="tipografia">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Typography</span>
  </li>
  <li class="ds-sortable__item" data-id="icones">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Icons</span>
  </li>
</ul>

<script type="module">
  import { createSortable } from 'https://lumeui.dev/v/1.2/lume.js';
  createSortable(document.querySelector('.ds-sortable'), { onChange: (e) => console.log(e.id, e.newIndex) });
</script>
```

## Variants

Separate boxes, rows inside a card, or items side by side.

With handle `ds-sortable__handle` — The default. Only the handle drags: the rest of the item stays clickable and the page scrolls normally on touch.

As rows `ds-sortable--plain` — Inside a card, with no box around each item: a line separates the rows.

Side by side `aria-orientation="horizontal"`

Without a handle, the whole item drags and takes focus. The `←` `→` arrows move it. On touch, hold for a moment before dragging.

Markup of the examples in this section:

```html
<ul class="ds-sortable" role="list" aria-label="Order of the foundations in the sidebar" data-sortable=""><li class="ds-sortable__item" data-id="cores"><button type="button" class="ds-sortable__handle" data-auto-label="" aria-label="Move “Colors”" aria-describedby="ds-sortable-help" aria-pressed="false"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Colors</span><span class="ds-sortable__meta">15 palettes</span></li><li class="ds-sortable__item" data-id="tipografia"><button type="button" class="ds-sortable__handle" data-auto-label="" aria-label="Move “Typography”" aria-describedby="ds-sortable-help" aria-pressed="false"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Typography</span><span class="ds-sortable__meta">Geist</span></li><li class="ds-sortable__item" data-id="icones"><button type="button" class="ds-sortable__handle" data-auto-label="" aria-label="Move “Icons”" aria-describedby="ds-sortable-help" aria-pressed="false"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Icons</span><span class="ds-sortable__meta">154 icons</span></li><li class="ds-sortable__item" data-id="espacamento"><button type="button" class="ds-sortable__handle" data-auto-label="" aria-label="Move “Spacing”" aria-describedby="ds-sortable-help" aria-pressed="false"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Spacing</span><span class="ds-sortable__meta">base 8</span></li></ul>

<span class="ds-visually-hidden" aria-live="assertive"></span>

<ul class="ds-sortable" role="list" aria-orientation="horizontal" aria-label="Chart series order" data-sortable="">
<li class="ds-sortable__item" data-id="serie-1" data-label="Peach" aria-describedby="ds-sortable-help"><span></span>Peach</li><li class="ds-sortable__item" data-id="serie-2" data-label="Blue" aria-describedby="ds-sortable-help"><span></span>Blue</li><li class="ds-sortable__item" data-id="serie-3" data-label="Pink" aria-describedby="ds-sortable-help"><span></span>Pink</li><li class="ds-sortable__item" data-id="serie-4" data-label="Amber" aria-describedby="ds-sortable-help"><span></span>Amber</li><li class="ds-sortable__item" data-id="serie-5" data-label="Teal" aria-describedby="ds-sortable-help"><span></span>Teal</li>
</ul>
```

## States

While dragging, the item becomes a dashed slot and a raised copy follows the pointer. Picked up with the keyboard, it gets the brand outline.

Markup of the examples in this section:

```html
<ul class="ds-sortable" role="list"><li class="ds-sortable__item" data-id="cores"><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Colors</span><span class="ds-sortable__meta">15 palettes</span></li></ul>

<ul class="ds-sortable" role="list"><li class="ds-sortable__item"><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Colors</span><span class="ds-sortable__meta">15 palettes</span></li></ul>

<ul class="ds-sortable" role="list"><li class="ds-sortable__item" data-id="cores" data-grabbed=""><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Colors</span><span class="ds-sortable__meta">15 palettes</span></li></ul>

<ul class="ds-sortable" role="list"><li class="ds-sortable__item" data-id="cores" data-ghost=""><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Colors</span><span class="ds-sortable__meta">15 palettes</span></li></ul>

<ul class="ds-sortable" role="list"><li class="ds-sortable__item ds-sortable__item--drag"><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Colors</span><span class="ds-sortable__meta">15 palettes</span></li></ul>
```

## Code

Each item’s `data-id` is what `toArray()` returns and what you save.

```html
<ul class="ds-sortable" role="list" aria-label="Order of the foundations in the sidebar">
  <li class="ds-sortable__item" data-id="cores">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Colors</span>
  </li>
  <li class="ds-sortable__item" data-id="tipografia">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Typography</span>
  </li>
</ul>

<script type="module">
  import { createSortable } from 'https://lumeui.dev/v/1.2/lume.js';

  const sortable = createSortable(document.querySelector('.ds-sortable'), {
    onChange: () => salvar(sortable.toArray()), // ['tipografia', 'cores']
  });
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Dragging can’t be the only way: everything the mouse does, the keyboard does too.

- Pick up and drop — Space Enter — The handle is a button named “Move …”. Space or Enter picks up; again, drops. Leaving with Tab also drops.
- Move — ↑ ↓ Home End — Arrow keys move one position; Home and End go to the ends. In a side-by-side list, use the left and right arrows.
- Undo — Esc — Esc puts the item back where it was, also in the middle of a mouse drag.
- Announcements — Each step is spoken in a live region: “Picked up “Colors”. Position 1 of 5.”, then the new position, and where it landed.
- Instructions — The handle describes how to use it: “Space to pick up and drop. Arrow keys to move, Esc to undo.”
- Reduced motion — Neighbors swap places without sliding and the copy doesn’t tilt.

## Tokens used

Surface, slot, and the raised copy.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Item background | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Item border | #3E516624 | #FFFFFF0F |
| color.bg.muted (`--ds-color-bg-muted`) | Slot background | #DAE0E8 | #3D3B38 |
| color.border.strong (`--ds-color-border-strong`) | Slot dashed border | #3E51664D | #FFFFFF29 |
| color.bg.raised (`--ds-color-bg-raised`) | Copy that follows the pointer | #FFFFFF | #2C2A27 |
| shadow.lg (`--ds-shadow-lg`) | Copy elevation | 0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14) | 0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5) |
| color.brand.indicator (`--ds-color-brand-indicator`) | Item picked up by keyboard | #C97B63 | #DE9680 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Handle | #5C6C7F | #9C9792 |

## Usage

When the order belongs to the person.

- **Do:** an order people choose. Priorities, the order of a menu, the series of a chart. The saved order is the one they left.
- **Avoid:** an order with a rule. Date, name, value: that’s sorting the Table. Dragging shouldn’t fight an automatic order.
- **Tip:** Things that change group. Lists with the same group exchange items. For columns of cards, use the Kanban.
