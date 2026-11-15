# Time picker

Lume section: Components. Page: https://lumeui.dev/#/componentes/seletor-de-horario

For choosing hours and minutes. Type it however you like or pick from the list, shown in the language’s format.

In numbers: default step: 15 min · formats: 12 · 24 h · value sent: HH:MM · ARIA role: combobox.

## Example

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="inicio">Time</label>
  <div class="ds-field"><input class="ds-field__input" id="inicio" name="inicio" type="text"></div>
</div>

<script type="module">
  import { createTimePicker } from 'https://lumeui.dev/v/1.7/lume.js';
  createTimePicker(document.querySelector('#inicio'), {
    step: 15,
  });
</script>
```

## Variants

The step sets the list options, but any minute can be typed.

Every 15 minutes `step: 15` — The default, good for appointments.

Every 30 minutes `step: 30` — Fewer options, when precision matters less.

With limits `min · max` — Business hours only. Typing outside them shows the error.

Already filled `value` — Always HH:MM in code; the screen shows the language’s format.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-15">Start</label>
<div class="ds-field"><input class="ds-field__input" id="tp-15" type="text" autocomplete="off" role="combobox" aria-autocomplete="none" aria-expanded="false" aria-controls="ds-timepicker-2" placeholder="--:--"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-label="Open time list"><ds-icon name="clock"></ds-icon></button><input type="hidden" name="tp-15" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-30">Meeting</label>
<div class="ds-field"><input class="ds-field__input" id="tp-30" type="text" autocomplete="off" role="combobox" aria-autocomplete="none" aria-expanded="false" aria-controls="ds-timepicker-3" placeholder="--:--"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-label="Open time list"><ds-icon name="clock"></ds-icon></button><input type="hidden" name="tp-30" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-limits">Support</label>
<div class="ds-field"><input class="ds-field__input" id="tp-limits" type="text" autocomplete="off" role="combobox" aria-autocomplete="none" aria-expanded="false" aria-controls="ds-timepicker-4" placeholder="--:--"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-label="Open time list"><ds-icon name="clock"></ds-icon></button><input type="hidden" name="tp-limits" value=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-filled">Reminder</label>
<div class="ds-field"><input class="ds-field__input" id="tp-filled" type="text" autocomplete="off" role="combobox" aria-autocomplete="none" aria-expanded="false" aria-controls="ds-timepicker-5" placeholder="--:--"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-field__action" aria-label="Open time list"><ds-icon name="clock"></ds-icon></button><input type="hidden" name="tp-filled" value="09:30"></div>
</div>
```

## Format

Each language reads the time its own way, and the form always receives 24 hours.

Language — On screen — In the form — Português — 14:30 — 14:30 — English — 02:30 PM — 14:30 — Español — 14:30 — 14:30

## States

The same as the Text field.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-a">Time</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-a" type="text" placeholder="--:--"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-b">Time</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-b" type="text" value="02:30 PM"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-c">Time</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-c" type="text" value="02:30 PM"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-d">Time</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-d" type="text" value="02:30 PM"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-e">Time</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-e" type="text" value="25:00" aria-invalid="true"><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>

<p class="ds-form-field__error"><ds-icon name="alert-circle"></ds-icon><span>Use a time like 02:30 PM.</span></p>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tp-state-f">Time</label>
<div class="ds-field"><input class="ds-field__input" id="tp-state-f" type="text" value="02:30 PM" disabled=""><span class="ds-icon-btn ds-icon-btn--sm ds-field__action"><ds-icon name="clock"></ds-icon></span></div>
</div>
```

## Code

It works with `createForm`, like the other fields.

```html
import { createTimePicker } from 'https://lumeui.dev/v/1.7/lume.js';

const picker = createTimePicker(document.querySelector('#inicio'), {
  value: '09:00',
  step: 30,
  min: '08:00',
  max: '18:00',
  onChange: (value) => console.log(value), // '09:30'
});
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Focus always stays in the field. The arrows only point to the list option, following the ARIA combobox pattern.

- Open and move — ↓ ↑ — ↓ and ↑ open the list and move between options; the option is announced through aria-activedescendant.
- Move one hour — PageUp PageDown Home End — PageUp and PageDown jump one hour; Home and End go to the start and end of the list.
- Choose and close — Enter Esc — Enter chooses; Esc closes without changing anything.
- Button out of Tab order — The clock button is a shortcut for mouse and touch. On the keyboard, the arrows do the same.

## Tokens used

On top of the Text field tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | List background | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | List outline | #3E51664D | #FFFFFF29 |
| shadow.xl (`--ds-shadow-xl`) | List shadow | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| color.bg.hover (`--ds-color-bg-hover`) | Active option | #3E51660D | #FFFFFF0D |
| color.fg.brand (`--ds-color-fg-brand`) | Chosen option check | #3E5166 | #DAE0E8 |
| text.body-sm (`--ds-text-body-sm`) | Option text | 14/22 · regular | 14/22 · regular |

## Usage

When to use it and when to prefer something else.

- **Do:** time of day. Meeting starts, reminders, and support windows.
- **Avoid:** duration. “45 minutes” isn’t a time of day. Use the Number field with the unit beside it.
- **Tip:** Time zone. If the person may be in another time zone, say which one applies in the hint.
