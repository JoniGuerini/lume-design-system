# Toolbar

Lume section: Components. Page: https://lumeui.dev/#/componentes/barra-de-ferramentas

Groups icon buttons for the same area, like an editor’s formatting buttons. The whole bar is a single Tab stop; the arrow keys move between buttons.

In numbers: Tab stops: 1 · keys: 4 · height: 36 px · ARIA role: toolbar.

## Example

```html
<div class="ds-toolbar" aria-label="Formatting">
  <div class="ds-toolbar__group">
    <button type="button" class="ds-icon-btn" aria-label="Bold" aria-pressed="false">…</button>
    <button type="button" class="ds-icon-btn" aria-label="Italic" aria-pressed="false">…</button>
  </div>
  <div class="ds-toolbar__separator"></div>
  <div class="ds-toolbar__group" data-exclusive>
    <button type="button" class="ds-icon-btn" aria-label="Align left" aria-pressed="true">…</button>
    <button type="button" class="ds-icon-btn" aria-label="Center" aria-pressed="false">…</button>
  </div>
</div>

<script type="module">
  import { createToolbar } from 'https://lumeui.dev/v/1.6/lume.js';
  createToolbar(document.querySelector('.ds-toolbar'), {
    onToggle: (button, pressed) => console.log(button.ariaLabel, pressed),
  });
</script>
```

## Variants

With an outline, for a bar that sits over content; `ds-toolbar--plain` when it is already inside a surface, like a card header.

Formatting `ds-toolbar` — Groups separated by a line: style, alignment (one at a time), lists, and undo.

Vertical `aria-orientation="vertical"` — On the side of an area; the up and down arrows move.

Plain `ds-toolbar--plain` — Actions of a code block, in its corner.

Markup of the examples in this section:

```html
<div class="ds-toolbar" aria-orientation="vertical" aria-label="Formatting" data-demo="vertical" role="toolbar">
<div class="ds-toolbar__group"><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Bold" data-ds-tooltip="Bold" data-value="bold"><ds-icon name="bold"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Italic" data-ds-tooltip="Italic" data-value="italic"><ds-icon name="italic"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Underline" data-ds-tooltip="Underline" data-value="underline"><ds-icon name="underline"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Strikethrough" data-ds-tooltip="Strikethrough" data-value="strikethrough"><ds-icon name="strikethrough"></ds-icon></button></div>
<div class="ds-toolbar__separator" role="separator" aria-orientation="horizontal"></div>
<div class="ds-toolbar__group" data-exclusive=""><button type="button" class="ds-icon-btn" aria-pressed="true" aria-label="Align left" data-ds-tooltip="Align left" data-value="align-left"><ds-icon name="align-left"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Center" data-ds-tooltip="Center" data-value="align-center"><ds-icon name="align-center"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Align right" data-ds-tooltip="Align right" data-value="align-right"><ds-icon name="align-right"></ds-icon></button></div>
</div>

<div class="ds-toolbar ds-toolbar--plain" aria-label="Code actions" data-demo="plain" role="toolbar"><button type="button" class="ds-icon-btn" aria-label="Copy" data-ds-tooltip="Copy" data-value="copy"><ds-icon name="copy"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Download" data-ds-tooltip="Download" data-value="download"><ds-icon name="download"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Copy link" data-ds-tooltip="Copy link" data-value="link"><ds-icon name="link"></ds-icon></button><div class="ds-toolbar__separator" role="separator" aria-orientation="vertical"></div><button type="button" class="ds-icon-btn" aria-label="More actions" data-ds-tooltip="More actions" data-value="more-horizontal"><ds-icon name="more-horizontal"></ds-icon></button></div>
```

## States

A pressed button gets the selected background, which stays on hover. Disabled buttons are skipped by the arrow keys.

Markup of the examples in this section:

```html
<div class="ds-toolbar" aria-label="Example"><div class="ds-toolbar__group"><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Bold" data-value="bold"><ds-icon name="bold"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Italic" data-value="italic"><ds-icon name="italic"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Underline" data-value="underline"><ds-icon name="underline"></ds-icon></button></div></div>

<div class="ds-toolbar" aria-label="Example"><div class="ds-toolbar__group"><button type="button" class="ds-icon-btn" aria-pressed="true" aria-label="Bold" data-value="bold"><ds-icon name="bold"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Italic" data-value="italic"><ds-icon name="italic"></ds-icon></button><button type="button" class="ds-icon-btn" aria-pressed="false" aria-label="Underline" data-value="underline"><ds-icon name="underline"></ds-icon></button></div></div>

<div class="ds-toolbar" aria-label="Example"><div class="ds-toolbar__group"><button type="button" class="ds-icon-btn" aria-label="Undo" data-value="undo"><ds-icon name="undo"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Redo" data-value="redo" disabled=""><ds-icon name="redo"></ds-icon></button></div></div>
```

## Code

The buttons are yours; the bar handles Tab, the arrow keys, and `aria-pressed`.

```html
<div class="ds-toolbar" aria-label="Formatting">
  <div class="ds-toolbar__group">
    <button type="button" class="ds-icon-btn" aria-label="Bold" aria-pressed="false">…</button>
    <button type="button" class="ds-icon-btn" aria-label="Italic" aria-pressed="false">…</button>
  </div>
  <div class="ds-toolbar__separator"></div>
  <div class="ds-toolbar__group" data-exclusive>
    <button type="button" class="ds-icon-btn" aria-label="Align left" aria-pressed="true">…</button>
    <button type="button" class="ds-icon-btn" aria-label="Center" aria-pressed="false">…</button>
  </div>
</div>

<script type="module">
  import { createToolbar } from 'https://lumeui.dev/v/1.6/lume.js';
  createToolbar(document.querySelector('.ds-toolbar'), {
    onToggle: (button, pressed) => console.log(button.ariaLabel, pressed),
  });
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

It follows the ARIA toolbar pattern. Give the bar a name with aria-label.

- One Tab stop — Tab enters the bar on the last button used and leaves on the next Tab: keyboard users don’t go through ten buttons.
- Keyboard — ← → Home End — The arrow keys move and wrap around; Home and End go to the ends. Vertically, the up and down arrows.
- Toggle — A button with aria-pressed says “pressed” or not; in a group with data-exclusive, only one stays pressed.
- Each button’s name — An icon-only button needs aria-label; the tooltip (data-ds-tooltip) shows the same name to mouse users.

## Tokens used

Everything the bar consumes, besides the icon button.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Bar background | #FFFFFF | #24221F |
| color.border.control (`--ds-color-border-control`) | Bar outline | #3E516633 | #FFFFFF21 |
| color.border.default (`--ds-color-border-default`) | Separator | #3E516633 | #FFFFFF1A |
| color.bg.selected (`--ds-color-bg-selected`) | Pressed button | #3E516612 | #C0CAD61A |
| space.050 (`--ds-space-050`) | Bar and separator padding | 4 px | 4 px |
| radius.md (`--ds-radius-md`) | Bar corners | 12 px | 12 px |

## Usage

When to use it and when to prefer something else.

- **Do:** group by what they do. Style with style, alignment with alignment. The separator shows where a group ends.
- **Avoid:** two or three loose buttons. With no group or keyboard of its own, icon buttons side by side are enough.
- **Tip:** A tooltip on every icon. Formatting icons seem obvious until someone doesn’t recognize one. A tooltip costs little.
