# Date picker

Lume section: Components. Page: https://lumeui.dev/#/componentes/seletor-de-data

For choosing a day or a range. You can type the date or open the calendar, and both lead to the same value.

In numbers: modes: 2 · languages: 3 · value sent: ISO · ARIA role: dialog.

## Example

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="entrega">Delivery date</label>
  <div class="ds-field"><input class="ds-field__input" id="entrega" name="entrega" type="text"></div>
</div>

<script type="module">
  import { createDatePicker } from 'https://lumeui.dev/v/1.9/lume.js';
  createDatePicker(document.querySelector('#entrega'), {
  });
</script>
```

## Variants

One day is the default. With `mode: 'range'`, the first click sets the start and the second, the end.

One day `mode: 'single'` — Choosing a day closes the panel.

Range `mode: 'range'` — Two months side by side when there’s room, with a preview on hover.

With limits `min · max` — Only the next 30 days. The others are disabled, and typing outside the limit shows the error.

Already filled `value` — It shows in the current language’s format, and the panel opens on that month.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-one">Delivery date</label>
<div class="ds-field"><input class="ds-field__input" id="dp-one" type="text" autocomplete="off" placeholder="mm/dd/yyyy"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-datepicker-2" aria-label="Open calendar"><ds-icon name="calendar"></ds-icon></button><input type="hidden" name="dp-one" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-range">Range</label>
<div class="ds-field"><input class="ds-field__input" id="dp-range" type="text" autocomplete="off" placeholder="mm/dd/yyyy – mm/dd/yyyy"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-datepicker-3" aria-label="Open calendar"><ds-icon name="calendar"></ds-icon></button><input type="hidden" name="dp-range" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-limits">Schedule for</label>
<div class="ds-field"><input class="ds-field__input" id="dp-limits" type="text" autocomplete="off" placeholder="mm/dd/yyyy"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-datepicker-4" aria-label="Open calendar"><ds-icon name="calendar"></ds-icon></button><input type="hidden" name="dp-limits" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-filled">Delivery date</label>
<div class="ds-field"><input class="ds-field__input" id="dp-filled" type="text" autocomplete="off" placeholder="mm/dd/yyyy"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-datepicker-5" aria-label="Open calendar"><ds-icon name="calendar"></ds-icon></button><input type="hidden" name="dp-filled" value="2026-11-21"></div>
</div>
```

## Format

The field shows the date the way each language writes it, but the form always receives the same format, so the server doesn’t have to guess.

Language — On screen — In the form — Português — 08/11/2026 — 2026-11-08 — English — 11/08/2026 — 2026-11-08 — Español — 08/11/2026 — 2026-11-08

## States

The field follows the Text field states. Hover and focus can be forced with `data-state`.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-a">Delivery date</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-a" type="text" placeholder="mm/dd/yyyy"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-b">Delivery date</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-b" type="text" value="11/28/2026"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-c">Delivery date</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-c" type="text" value="11/28/2026"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-d">Delivery date</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-d" type="text" value="11/28/2026"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-e">Delivery date</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-e" type="text" value="31/02/2026" aria-invalid="true"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>

<p class="ds-form-field__error"><ds-icon name="alert-circle"></ds-icon><span>Use a date like 11/28/2026.</span></p>

<div class="ds-form-field">
<label class="ds-form-field__label" for="dp-state-f">Delivery date</label>
<div class="ds-field"><input class="ds-field__input" id="dp-state-f" type="text" value="11/28/2026" disabled=""><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="calendar"></ds-icon></span></div>
</div>
```

## In forms

It works with `createForm`: `required` and format errors show up as in the other fields. The ISO value goes in a hidden input, with the field’s `name`.

```html
import { createDatePicker } from 'https://lumeui.dev/v/1.9/lume.js';

const picker = createDatePicker(document.querySelector('#entrega'), {
  min: new Date(),
  onChange: (value) => console.log(value), // Date
});

// on submit: entrega=2026-11-08
// range: viagem=2026-11-08/2026-11-15
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Typing is always possible, and the calendar works entirely from the keyboard.

- Open — ↓ — ↓ in the field opens the calendar, with focus on the chosen day or today.
- Move through days — ← → ↑ ↓ Home End — Arrows move one day or one week; Home and End go to the start and end of the week.
- Change month and year — PageUp PageDown Shift — PageUp and PageDown change the month; with Shift, the year. For a distant date, typing is faster.
- Close — Esc — Esc closes and returns focus to the calendar button.
- Days with full names — Each day is announced with weekday, number, month, and year. Today is marked with aria-current.
- An error that explains — A date that doesn’t exist shows an example of the right format, linked to the field by aria-describedby.

## Tokens used

On top of the Text field tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Panel background | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Panel outline | #3E51664D | #FFFFFF29 |
| shadow.xl (`--ds-shadow-xl`) | Panel shadow | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| color.brand.solid (`--ds-color-brand-solid`) | Chosen day | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Number on the chosen day | #F8FAFD | #1D2734 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Middle of the range | #EEF2F6 | #C0CAD624 |
| color.bg.hover (`--ds-color-bg-hover`) | Day on hover | #3E51660D | #FFFFFF0D |
| color.fg.disabled (`--ds-color-fg-disabled`) | Day outside the limit | #93A0B0 | #605D59 |
| radius.lg (`--ds-radius-lg`) | Panel corners | 16 px | 16 px |
| radius.sm (`--ds-radius-sm`) | Day corners | 8 px | 8 px |

## Usage

When to use it and when to prefer something else.

- **Do:** nearby dates. Bookings, deadlines, and reservations, where seeing the month helps you choose.
- **Avoid:** date of birth. Nobody wants to go back decades on a calendar. Use a text field with the format in the hint.
- **Tip:** Visible limits. If there’s a limit, say so in the hint. Disabled days alone don’t explain why.
