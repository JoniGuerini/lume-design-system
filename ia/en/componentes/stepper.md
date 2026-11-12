# Stepper

Lume section: Components. Page: https://lumeui.dev/#/componentes/stepper

Shows the steps of a flow, how many are left, and where the person is. Good for sign-ups and multi-part setups.

In numbers: orientations: 2 · states: 3 · marker: 28 px · attribute: aria-current.

## Example

```html
<ol class="ds-stepper"></ol>

<script type="module">
  import { createStepper } from './ds/js/stepper.js';
  createStepper(document.querySelector('.ds-stepper'), {
    steps: [{ label: 'Account' }, { label: 'Profile' }, { label: 'Team' }, { label: 'Done' }],
    current: 1,
    clickable: true,
  });
</script>
```

## Variants

Horizontal fits a few steps with short names. With long descriptions or many steps, use vertical.

Horizontal `ds-stepper` — Just each step’s name. On phones, it becomes a list.

Vertical `ds-stepper--vertical` — With room for a description.

Markup of the examples in this section:

```html
<ol class="ds-stepper" data-demo="plain"><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true"><ds-icon name="check"></ds-icon></span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Account<span class="ds-visually-hidden"> (completed)</span></span>
</span></div></li><li class="ds-stepper__step" aria-current="step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">2</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Profile</span>
</span></div></li><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">3</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Team</span>
</span></div></li></ol>

<ol class="ds-stepper ds-stepper--vertical" data-demo="vertical"><li class="ds-stepper__step"><button type="button" class="ds-stepper__content" data-step="0"><span class="ds-stepper__marker" aria-hidden="true"><ds-icon name="check"></ds-icon></span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Account<span class="ds-visually-hidden"> (completed)</span></span>
<span class="ds-stepper__description">Email and password</span>
</span></button></li><li class="ds-stepper__step" aria-current="step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">2</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Profile</span>
<span class="ds-stepper__description">Name and photo</span>
</span></div></li><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">3</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Team</span>
<span class="ds-stepper__description">Invites</span>
</span></div></li></ol>
```

## States

Each step gets `data-state`: done, current, or upcoming. The difference also comes from the number and check, not just color.

Markup of the examples in this section:

```html
<ol class="ds-stepper" data-demo="states"><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true"><ds-icon name="check"></ds-icon></span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Done<span class="ds-visually-hidden"> (completed)</span></span>
</span></div></li><li class="ds-stepper__step" aria-current="step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">2</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Current</span>
</span></div></li><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">3</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Upcoming</span>
</span></div></li></ol>
```

## Code

Each step’s content is yours; the stepper only shows the way.

```html
import { createStepper } from './ds/js/stepper.js';

const stepper = createStepper(document.querySelector('.ds-stepper'), {
  steps: [{ label: 'Account' }, { label: 'Profile' }, { label: 'Done' }],
  clickable: true,
  onChange: (index) => mostrar(index),
});

stepper.next();
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

It’s an ordinary ordered list, so screen readers already say how many steps there are.

- Current step — Marked with aria-current="step".
- Finished steps — The check is a drawing; the word “completed” is read with the name.
- Go back by keyboard — Tab Enter — With clickable steps, finished ones are buttons in Tab order. Upcoming ones don’t take focus.
- Move focus — When the step changes, move focus to the new step’s heading.

## Tokens used

Everything the stepper consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.brand.solid (`--ds-color-brand-solid`) | Done and current marker | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Number and check | #F8FAFD | #1D2734 |
| color.border.field (`--ds-color-border-field`) | Upcoming marker | #3E5166AD | #FFFFFF61 |
| color.border.default (`--ds-color-border-default`) | Line between steps | #3E516633 | #FFFFFF1A |
| color.fg.muted (`--ds-color-fg-muted`) | Upcoming name | #46586E | #CEC8C1 |
| radius.full (`--ds-radius-full`) | Marker | 9999 px | 9999 px |

## Usage

When to use it and when to prefer something else.

- **Do:** 3 to 5 steps. Steps with a clear start and end, in order.
- **Avoid:** free navigation. If people can go anywhere in any order, use Tabs.
- **Tip:** Keep what was filled in. Going back a step should never erase what people already did.
