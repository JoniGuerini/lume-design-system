# Number field

Lume section: Components. Page: https://lumeui.dev/#/componentes/campo-numerico

For an exact number, when typing is as useful as adjusting little by little. It respects limits, a step, and the language’s format.

In numbers: sizes: 3 · formats: Intl · shortcuts: 6 · ARIA role: spinbutton.

## Example

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="quantidade">Quantity</label>
  <div class="ds-field ds-number"><input class="ds-field__input" id="quantidade" name="quantidade" type="text"></div>
</div>

<script type="module">
  import { createNumberField } from 'https://lumeui.dev/v/0.30/lume.js';
  createNumberField(document.querySelector('#quantidade'), {
    value: 10,
    step: 1,
    min: 0,
    max: 100,
  });
</script>
```

## Variants

The format uses `Intl.NumberFormat` options: currency, percent, or unit, always in the current language.

Integer with limits `min · max` — The button at the limit is disabled, and a typed value returns to within it when you leave the field.

Currency `style: 'currency'` — A 10-cent step, always with two decimals.

Percent `style: 'percent'` — The value is the fraction (0.15), and the screen shows 15%.

Unit `style: 'unit'` — The unit also comes from the language, with no fixed text.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="nf-int">Guests</label>
<div class="ds-field ds-number"><button type="button" class="ds-number__btn" data-delta="-1" aria-label="Decrease"><ds-icon name="minus"></ds-icon></button><input class="ds-field__input" id="nf-int" type="text" role="spinbutton" inputmode="numeric" autocomplete="off" aria-valuenow="2" aria-valuemin="0" aria-valuemax="20"><button type="button" class="ds-number__btn" data-delta="1" aria-label="Increase"><ds-icon name="plus"></ds-icon></button><input type="hidden" name="nf-int" value="2"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="nf-money">Price</label>
<div class="ds-field ds-number"><button type="button" class="ds-number__btn" data-delta="-1" aria-label="Decrease"><ds-icon name="minus"></ds-icon></button><input class="ds-field__input" id="nf-money" type="text" role="spinbutton" inputmode="decimal" autocomplete="off" aria-valuenow="49.9" aria-valuetext="R$49.90" aria-valuemin="0"><button type="button" class="ds-number__btn" data-delta="1" aria-label="Increase"><ds-icon name="plus"></ds-icon></button><input type="hidden" name="nf-money" value="49.9"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="nf-percent">Discount</label>
<div class="ds-field ds-number"><button type="button" class="ds-number__btn" data-delta="-1" aria-label="Decrease"><ds-icon name="minus"></ds-icon></button><input class="ds-field__input" id="nf-percent" type="text" role="spinbutton" inputmode="decimal" autocomplete="off" aria-valuenow="0.15" aria-valuetext="15%" aria-valuemin="0" aria-valuemax="1"><button type="button" class="ds-number__btn" data-delta="1" aria-label="Increase"><ds-icon name="plus"></ds-icon></button><input type="hidden" name="nf-percent" value="0.15"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="nf-unit">Duration</label>
<div class="ds-field ds-number"><button type="button" class="ds-number__btn" data-delta="-1" aria-label="Decrease"><ds-icon name="minus"></ds-icon></button><input class="ds-field__input" id="nf-unit" type="text" role="spinbutton" inputmode="decimal" autocomplete="off" aria-valuenow="45" aria-valuetext="45 min" aria-valuemin="5"><button type="button" class="ds-number__btn" data-delta="1" aria-label="Increase"><ds-icon name="plus"></ds-icon></button><input type="hidden" name="nf-unit" value="45"></div>
</div>
```

## States

The same as the Text field, plus disabled buttons at the limits.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<span class="ds-form-field__label">Quantity</span>
<div class="ds-field ds-number"><span class="ds-number__btn"><ds-icon name="minus"></ds-icon></span><input class="ds-field__input" type="text" value="" aria-label="Quantity"><span class="ds-number__btn"><ds-icon name="plus"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Quantity</span>
<div class="ds-field ds-number"><span class="ds-number__btn"><ds-icon name="minus"></ds-icon></span><input class="ds-field__input" type="text" value="4" aria-label="Quantity"><span class="ds-number__btn"><ds-icon name="plus"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Quantity</span>
<div class="ds-field ds-number"><span class="ds-number__btn"><ds-icon name="minus"></ds-icon></span><input class="ds-field__input" type="text" value="0" aria-label="Quantity"><span class="ds-number__btn"><ds-icon name="plus"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Quantity</span>
<div class="ds-field ds-number"><span class="ds-number__btn"><ds-icon name="minus"></ds-icon></span><input class="ds-field__input" type="text" value="4" aria-label="Quantity" disabled=""><span class="ds-number__btn"><ds-icon name="plus"></ds-icon></span></div>
</div>
```

## Code

The form receives the plain number, in a hidden input with the field’s `name`.

```html
import { createNumberField } from 'https://lumeui.dev/v/0.30/lume.js';

const preco = createNumberField(document.querySelector('#preco'), {
  value: 49.9,
  min: 0,
  step: 0.1,
  format: { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 },
  onChange: (value) => console.log(value), // 50
});

// on submit: preco=49.9
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

The field is a spinbutton: it announces the value and the limits.

- One step — ↑ ↓ — ↑ and ↓ add or remove one step.
- Ten steps — PageUp PageDown — PageUp and PageDown move ten steps.
- Limits — Home End — Home goes to the minimum and End to the maximum.
- Buttons out of Tab order — − and + are for mouse and touch, with a 30 px area. They have names for screen readers.
- Formatted value — With a currency or unit, aria-valuetext announces “$49.90” instead of the plain number.

## Tokens used

On top of the Text field tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | − and + icons | #46586E | #CEC8C1 |
| color.bg.hover (`--ds-color-bg-hover`) | Button on hover | #3E51660D | #FFFFFF0D |
| color.fg.disabled (`--ds-color-fg-disabled`) | Button at the limit | #93A0B0 | #605D59 |
| radius.sm (`--ds-radius-sm`) | Button corners | 8 px | 8 px |

## Usage

When to use it and when to prefer something else.

- **Do:** quantities. Items in a cart, guests, price, percent: numbers you add up or compare.
- **Avoid:** codes. ZIP codes, phone numbers, and cards are text with digits. Nobody adds 1 to a ZIP code. Use the Text field.
- **Tip:** No precision needed? Slider. If position matters more than the exact number, like volume, use the Slider.
