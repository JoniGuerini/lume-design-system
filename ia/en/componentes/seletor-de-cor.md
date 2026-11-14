# Color picker

Lume section: Components. Page: https://lumeui.dev/#/componentes/seletor-de-cor

For choosing a free color or one from the palette. Drag in the area, adjust the hue, type the hex, or click a swatch.

In numbers: forms: 2 · value sent: #rrggbb · swatches: optional · ARIA role: slider.

## Example

```html
<div class="ds-field"><input class="ds-field__input" id="marca" name="marca" type="text"></div>

<script type="module">
  import { createColorField } from 'https://lumeui.dev/v/0.32/lume.js';
  createColorField(document.querySelector('#marca'), {
    value: '#c97b63',
    swatches: [{ value: '#d95c0a', label: 'Peach' }, { value: '#2a8ed6', label: 'Blue' }, { value: '#cd5892', label: 'Pink' }, …],
  });
</script>
```

## Variants

The field fits in a form and opens the picker in a panel. The standalone picker stays in view, for settings screens.

Color field `createColorField` — The swatch at the start opens the picker; the text can be typed.

Standalone picker `createColorPicker` — With the palette swatches below.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-field">Brand color</label>
<div class="ds-field"><button type="button" class="ds-color-field__swatch" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-colorfield-2-panel" aria-label="Choose color, current #C97B63"></button><input class="ds-field__input" id="cp-field" name="cp-field" type="text" value="#c97b63" autocomplete="off" spellcheck="false" maxlength="7" placeholder="#000000"></div>
</div>
```

## States

The field has the Text field states. A hex that isn’t a color shows the error when leaving the field.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-a">Brand color</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-a" type="text" placeholder="#000000"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-b">Brand color</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-b" type="text" value="#C97B63"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-c">Brand color</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-c" type="text" value="#C97B63"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-d">Brand color</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-d" type="text" value="#C97B63"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-e">Brand color</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-e" type="text" value="#C97B6" aria-invalid="true"></div>
</div>

<p class="ds-form-field__error"><ds-icon name="alert-circle"></ds-icon><span>Use a hex color, like #C97B63.</span></p>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cp-state-f">Brand color</label>
<div class="ds-field"><span class="ds-color-field__swatch"></span><input class="ds-field__input" id="cp-state-f" type="text" value="#C97B63" disabled=""></div>
</div>
```

## Code

The form receives the field’s hex; it works with `createForm`, like the other fields.

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="marca">Brand color</label>
  <div class="ds-field"><input class="ds-field__input" id="marca" name="marca" type="text"></div>
</div>

<script type="module">
  import { createColorField } from 'https://lumeui.dev/v/0.32/lume.js';

  createColorField(document.querySelector('#marca'), {
    value: '#c97b63',
    swatches: [{ value: '#d95c0a', label: 'Peach' }, { value: '#2a8ed6', label: 'Blue' }, { value: '#cd5892', label: 'Pink' }, …],
    onChange: (hex) => console.log(hex),
  });
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Everything you can do with the mouse works with the keyboard, and the hex is the way out for those who prefer typing.

- Area — ← → ↑ ↓ — It’s a slider: it reads “Saturation 60%, brightness 80%” at each step.
- Hue — ← → Home End — A slider from 0° to 360°. With Shift, it moves 10 at a time.
- Swatches — Buttons with the color name and aria-pressed on the chosen one; the check switches between black and white for contrast.
- Field panel — ↓ Esc — The swatch says the current color (“Choose color, current #C97B63”). ↓ opens, Esc closes and returns focus to the field.
- Don’t rely on color alone — If the chosen color means something, show the name or value too.

## Tokens used

The area and hue gradients are the choosable colors themselves; the rest comes from tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Panel and thumb ring | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Thumb and panel outline | #3E51664D | #FFFFFF29 |
| color.border.subtle (`--ds-color-border-subtle`) | Area, hue, and swatch outline | #3E516624 | #FFFFFF0F |
| color.border.focus (`--ds-color-border-focus`) | Thumb focus | #53657A | #C0CAD6 |
| radius.md (`--ds-radius-md`) | Area | 12 px | 12 px |
| radius.full (`--ds-radius-full`) | Thumbs, hue, and swatches | 9999 px | 9999 px |

## Usage

When to use it and when to prefer something else.

- **Do:** offer the palette. Swatches with the brand colors avoid a shade that’s almost right.
- **Avoid:** color for data. To tag or classify, a few fixed options (a Segmented control or Select) work better than a free color.
- **Tip:** Check the contrast. If the color goes on text or a background, warn when it doesn’t reach 4.5:1.
