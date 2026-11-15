# Checkbox and radio

Lume section: Components. Page: https://lumeui.dev/#/componentes/checkbox-radio

A checkbox to check independent items; a radio to pick just one among a few options. Both with a clickable label.

In numbers: controls: 2 · states: 7 · size: 18 px · click area: label.

## Example

```html
<label class="ds-checkbox">
  <input type="checkbox" class="ds-checkbox__input" checked>
  <span class="ds-choice__text">
    <span class="ds-choice__label">Get updates</span>
    <span class="ds-choice__description">Once a month, no spam.</span>
  </span>
</label>
```

## Checkbox or radio?

There’s only one question: can people pick more than one option?

Checkbox `ds-checkbox` — Several, none, or all. Each one stands on its own.

Radio `ds-radio` — Exactly one. Picking another unchecks the previous one.

Markup of the examples in this section:

```html
<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend">Notify by</legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-q-email" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Email</span></span>
</label>
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-q-push" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Phone notification</span></span>
</label>
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-q-sms">
<span class="ds-choice__text"><span class="ds-choice__label">SMS</span></span>
</label>
</div>
</fieldset>

<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend">Plan</legend>
<div class="ds-choice-group__items">
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-q-mensal" name="cr-plano" value="mensal">
<span class="ds-choice__text"><span class="ds-choice__label">Monthly</span><span class="ds-choice__description">R$49 per month</span></span>
</label>
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-q-anual" name="cr-plano" value="anual" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Yearly</span><span class="ds-choice__description">R$490 per year — two months free</span></span>
</label>
</div>
</fieldset>
```

## States

Checked uses the brand color; the unchecked outline has 3:1 contrast so it can be seen without relying on the label. Hover and focus can be forced with `data-state`.

Markup of the examples in this section:

```html
<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-1"></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-2" checked=""></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-3" data-indeterminate=""></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-4"></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-5"></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-6" disabled=""></span>

<span class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" id="cr-7" aria-invalid="true"></span>

<span class="ds-radio"><input type="radio" class="ds-radio__input" id="cr-8"></span>
```

## Groups

Related options sit in a `<fieldset>` with a `<legend>`: the screen reader announces the question before the answers.

Vertical `default` — One option per line — easier to read and to click.

Inline `ds-choice-group--inline` — For two or three short options.

With error

A message below the group, linked by `aria-describedby`.

Markup of the examples in this section:

```html
<fieldset class="ds-choice-group" aria-describedby="cr-g1-hint">
<legend class="ds-choice-group__legend">Show on the dashboard</legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-14" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Visits</span></span>
</label>
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-15" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Conversions</span></span>
</label>
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-16">
<span class="ds-choice__text"><span class="ds-choice__label">Revenue</span></span>
</label>
</div>
<p class="ds-choice-group__hint" id="cr-g1-hint">Choose up to three metrics.</p>
</fieldset>

<fieldset class="ds-choice-group ds-choice-group--inline">
<legend class="ds-choice-group__legend">Theme</legend>
<div class="ds-choice-group__items">
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-17" name="cr-g2" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Dark</span></span>
</label>
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-18" name="cr-g2">
<span class="ds-choice__text"><span class="ds-choice__label">Light</span></span>
</label>
<label class="ds-radio">
<input type="radio" class="ds-radio__input" id="cr-19" name="cr-g2">
<span class="ds-choice__text"><span class="ds-choice__label">System</span></span>
</label>
</div>
</fieldset>

<fieldset class="ds-choice-group" aria-describedby="cr-g3-error">
<legend class="ds-choice-group__legend">Terms</legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-20" aria-invalid="true" aria-describedby="cr-g3-error">
<span class="ds-choice__text"><span class="ds-choice__label">I have read and accept the terms of use</span></span>
</label>
</div>
<p class="ds-choice-group__error" id="cr-g3-error"><ds-icon name="alert-circle"></ds-icon><span>Accept the terms to create the account.</span></p>
</fieldset>
```

## Select all

The indeterminate state only makes sense in a checkbox that summarizes others: some checked, some not.

```html
const checked = children.filter((c) => c.checked).length;
parent.checked = checked === children.length;
parent.indeterminate = checked > 0 && checked < children.length;
```

Markup of the examples in this section:

```html
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-all" data-parent="" aria-controls="cr-all-list">
<span class="ds-choice__text"><span class="ds-choice__label">The whole team</span><span class="ds-choice__description">3 people</span></span>
</label>

<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-all-0" checked="" data-child="">
<span class="ds-choice__text"><span class="ds-choice__label">Ana Souza</span></span>
</label>

<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-all-1" data-child="">
<span class="ds-choice__text"><span class="ds-choice__label">Bruno Lima</span></span>
</label>

<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" id="cr-all-2" data-child="">
<span class="ds-choice__text"><span class="ds-choice__label">Carla Dias</span></span>
</label>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Underneath they’re native inputs — keyboard and screen reader already work.

- The label wraps the input — The whole `<label>` is clickable, and the control’s name comes from the text.
- Checkbox: Space checks — Tab Space — Tab moves from one checkbox to the next; Space checks and unchecks.
- Radio: arrows choose — Tab ↑ ↓ — The group is a single Tab stop; the arrows change the chosen option.
- An announced question — With `<fieldset>` and `<legend>`, the reader says “Plan, group” before the options.
- Indeterminate = “mixed” — The `indeterminate` property is announced as partially checked.
- Outline contrast — The unchecked outline uses `fg.subtle`: at least 3:1 against the background in both themes.

## Tokens used

Everything checkbox and radio consume.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.fg.subtle (`--ds-color-fg-subtle`) | Unchecked outline | #53657A | #9C9792 |
| color.fg.muted (`--ds-color-fg-muted`) | Outline on hover | #46586E | #CEC8C1 |
| color.brand.solid (`--ds-color-brand-solid`) | Checked background (checkbox) and dot (radio) | #3E5166 | #C0CAD6 |
| color.brand.solid-hover (`--ds-color-brand-solid-hover`) | Checked on hover | #2B3847 | #DAE0E8 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Check mark | #F8FAFD | #1D2734 |
| color.border.focus (`--ds-color-border-focus`) | Focus ring | #53657A | #C0CAD6 |
| color.danger.solid (`--ds-color-danger-solid`) | Invalid outline | #C13834 | #FF9087 |
| color.danger.fg (`--ds-color-danger-fg`) | Error message | #C13834 | #FFB2AA |
| radius.xs (`--ds-radius-xs`) | Checkbox radius | 6 px | 6 px |
| radius.full (`--ds-radius-full`) | Radio | 9999 px | 9999 px |
| text.label-md (`--ds-text-label-md`) | Label | 14/20 · medium | 14/20 · medium |
| text.body-sm (`--ds-text-body-sm`) | Description | 14/22 · regular | 14/22 · regular |
| space.150 (`--ds-space-150`) | Control → text and between options | 12 px | 12 px |
| duration.fast (`--ds-duration-fast`) | Mark appearing | 120ms | 120ms |

## Usage

Three rules for clear choices.

- **Do:** a label that reads on its own. Checked or not, the sentence still makes sense.
- **Avoid:** negation in the label. Checking a “don’t” makes people stop and think twice.
- **Tip:** Immediate effect? Use a switch. A checkbox applies when the form is submitted. If the change happens right away (turning on notifications), a switch communicates better.
