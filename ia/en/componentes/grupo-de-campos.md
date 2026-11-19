# Field group

Lume section: Components. Page: https://lumeui.dev/#/componentes/grupo-de-campos

One label, one hint, and one error for several controls that make up a single piece of data: date and times, first and last name, amount and unit. The group has the name; each control has its own.

In numbers: ARIA role: group · labels: 1 + 1 per control · layouts: 2 · React: FieldGroup.

## Live

Date and two times under a single label: “When”. The date and the times open Lume’s pickers.

## Layouts

By default, the first control takes twice the space of the others. With `ds-field-group--even`, all of them split the row evenly. On narrow screens, they wrap.

The first stands out `ds-field-group` — Amount and unit: the number gets twice the unit’s space.

Evenly `ds-field-group--even` — First and last name carry the same weight.

Markup of the examples in this section:

```html
<div class="ds-form-field ds-field-1" role="group" aria-labelledby="fg-amount-label">
<span class="ds-form-field__label" id="fg-amount-label">Duration</span>
<div class="ds-field-1__controls"><div class="ds-field"><input class="ds-field__input" id="fg-amount-n" type="text" aria-label="Amount" value="50"></div><div class="ds-field"><input class="ds-field__input" id="fg-amount-u" type="text" aria-label="Unit" value="minutes"></div></div>
</div>

<div class="ds-form-field ds-field-1 ds-field-1--even" role="group" aria-labelledby="fg-name-label">
<span class="ds-form-field__label" id="fg-name-label">Full name</span>
<div class="ds-field-1__controls"><div class="ds-field"><input class="ds-field__input" id="fg-first" type="text" aria-label="First name" value="Ana"></div><div class="ds-field"><input class="ds-field__input" id="fg-last" type="text" aria-label="Last name" value="Souza"></div></div>
</div>
```

## Group error

When the problem is the combination (end before start), the error belongs to the group, not to one control. The controls involved get aria-invalid and point to the same message.

## Code

`Field` ties one label to one control. The group uses `role="group"` with `aria-labelledby`, and each control gets its own `aria-label`.

```html
<div class="ds-form-field ds-field-group" role="group" aria-labelledby="quando-label" aria-describedby="quando-hint">
  <span class="ds-form-field__label" id="quando-label">When</span>
  <div class="ds-field-group__controls">
    <div class="ds-field"><input class="ds-field__input" id="data" aria-label="Date" aria-describedby="quando-hint"></div>
    <div class="ds-field"><input class="ds-field__input" id="inicio" aria-label="Start" aria-describedby="quando-hint"></div>
    <span class="ds-field-group__sep" aria-hidden="true">to</span>
    <div class="ds-field"><input class="ds-field__input" id="fim" aria-label="End" aria-describedby="quando-hint"></div>
  </div>
  <div class="ds-form-field__footer"><p class="ds-form-field__hint" id="quando-hint">The session lasts 50 minutes.</p></div>
</div>

// React: each control reads the group’s hint and error on its own
<FieldGroup label="When" hint="The session lasts 50 minutes." error={erro}>
  <DatePicker aria-label="Date" value={data} onChange={setData} />
  <TimePicker aria-label="Start" value={inicio} onChange={setInicio} />
  <TimePicker aria-label="End" value={fim} onChange={setFim} />
</FieldGroup>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Screen readers hear the group and then each part.

- Group name — On entering the first control, people hear “When, group”, then “Date”.
- Each control named — The group label doesn’t name the controls. Without each one’s aria-label, people hear three identical fields.
- Their own ids — In React, FieldGroup doesn’t pass an id to the controls: each keeps its own, and error focus goes to the right control.

## Tokens used

The same as the Text field, plus the space between controls.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| space.100 (`--ds-space-100`) | Space between controls | 8 px | 8 px |
| color.fg.subtle (`--ds-color-fg-subtle`) | Separator (“to”) | #53657A | #9C9792 |

## Usage

When to use it and when to prefer something else.

- **Do:** one piece of data in parts. When, duration, full name, address with number.
- **Avoid:** fields that don’t connect. Email and phone are two pieces of data. Each in its own Field, side by side with ds-form__row.
- **Tip:** Choices too. A radio group or a labeled segmented control is also a group: use the same layout.
