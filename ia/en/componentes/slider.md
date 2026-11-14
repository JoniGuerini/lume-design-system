# Slider

Lume section: Components. Page: https://lumeui.dev/#/componentes/slider

For choosing a value or a range when position matters more than the exact number, like volume, brightness, or a price range.

In numbers: modes: 2 · base: range · thumb: 18 px · dependencies: 0.

## Example

```html
<div class="ds-form-field">
  <div class="ds-slider__head">
    <label class="ds-form-field__label" for="volume">Volume</label>
    <output class="ds-slider__value"></output>
  </div>
  <div class="ds-slider">
    <input class="ds-slider__input" id="volume" name="volume" type="range" min="0" max="100" step="1" value="50">
  </div>
</div>

<script type="module">
  import { createSlider } from 'https://lumeui.dev/v/0.31/lume.js';
  createSlider(document.querySelector('.ds-slider'), {
    format: (value) => `${value}%`,
  });
</script>
```

## Variants

The value sits next to the label, always visible. Marks help when some points have names.

One value `ds-slider` — The filled part shows how much is chosen.

Range `data-range` — Two thumbs that don’t cross, each with its own name for screen readers.

With marks `marks` — Named points below the track.

With a step `step` — The thumb moves by 10, and the keyboard does too.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-one">Brightness</label>
<output class="ds-slider__value" for="sl-one">70%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-one" type="range" min="0" max="100" step="1" value="70" aria-valuetext="70%"></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<span class="ds-form-field__label" id="sl-range-label">Price range</span>
<output class="ds-slider__value">R$200 – R$800</output>
</div>
<div class="ds-slider" role="group" aria-labelledby="sl-range-label" data-demo="" data-range="">
<input class="ds-slider__input" type="range" min="0" max="1000" step="50" value="200" aria-label="Minimum" aria-valuetext="R$200">
<input class="ds-slider__input" type="range" min="0" max="1000" step="50" value="800" aria-label="Maximum" aria-valuetext="R$800">
</div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-marks">Quality</label>
<output class="ds-slider__value" for="sl-marks">Medium</output>
</div>
<div class="ds-slider" data-demo="" data-marks=""><input class="ds-slider__input" id="sl-marks" type="range" min="0" max="100" step="25" value="50" aria-valuetext="Medium"><div class="ds-slider__marks" aria-hidden="true"><span class="ds-slider__mark">Low</span><span class="ds-slider__mark">Medium</span><span class="ds-slider__mark">High</span></div></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-step">Opacity</label>
<output class="ds-slider__value" for="sl-step">60%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-step" type="range" min="0" max="100" step="10" value="60" aria-valuetext="60%"></div>
</div>
```

## States

Hover and focus can be forced with `data-state` on `.ds-slider`.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-s-a">Volume</label>
<output class="ds-slider__value" for="sl-s-a">40%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-s-a" type="range" min="0" max="100" step="1" value="40" aria-valuetext="40%"></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-s-b">Volume</label>
<output class="ds-slider__value" for="sl-s-b">40%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-s-b" type="range" min="0" max="100" step="1" value="40" aria-valuetext="40%"></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-s-c">Volume</label>
<output class="ds-slider__value" for="sl-s-c">40%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-s-c" type="range" min="0" max="100" step="1" value="40" aria-valuetext="40%"></div>
</div>

<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sl-s-d">Volume</label>
<output class="ds-slider__value" for="sl-s-d">40%</output>
</div>
<div class="ds-slider" data-demo=""><input class="ds-slider__input" id="sl-s-d" type="range" min="0" max="100" step="1" value="40" disabled="" aria-valuetext="40%"></div>
</div>
```

## Code

`onInput` follows the drag; `onChange` fires when the person lets go.

```html
import { createSlider } from 'https://lumeui.dev/v/0.31/lume.js';

const volume = createSlider(document.querySelector('.ds-slider'), {
  format: (value) => `${value}%`,
  marks: [{ value: 0, label: '0%' }, { value: 100, label: '100%' }],
  onChange: (value) => salvar(value),
});
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

The native input is already announced as a slider, with its current value.

- Adjust — ← → PageUp PageDown — Arrows move one step; PageUp and PageDown, bigger steps.
- Go to the limits — Home End — Home goes to the minimum and End to the maximum.
- A meaningful value — aria-valuetext announces the format text, like “$800”, not just “800”.
- A range with two names — Each thumb is an input with its own aria-label, inside a group with the range’s label.
- An exact alternative — If the exact number matters, also offer the Number field: dragging precisely is hard for many people.

## Tokens used

Everything the slider consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.border.field (`--ds-color-border-field`) | Track | #3E5166AD | #FFFFFF61 |
| color.brand.solid (`--ds-color-brand-solid`) | Filled part and thumb outline | #3E5166 | #C0CAD6 |
| color.bg.raised (`--ds-color-bg-raised`) | Thumb center | #FFFFFF | #2C2A27 |
| color.border.focus (`--ds-color-border-focus`) | Focus ring | #53657A | #C0CAD6 |
| color.fg.muted (`--ds-color-fg-muted`) | Value | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Marks | #5C6C7F | #9C9792 |
| radius.full (`--ds-radius-full`) | Track and thumb | 9999 px | 9999 px |
| opacity.disabled (`--ds-opacity-disabled`) | Disabled | 0.44 | 0.44 |

## Usage

When to use it and when to prefer something else.

- **Do:** visible adjustments. Volume, brightness, and zoom, where the result shows while dragging.
- **Avoid:** exact numbers. To choose 1,250 in a range from 0 to 10,000, the Number field is better.
- **Tip:** Always show the value. Without the number beside it, the person is only guessing what they chose.
