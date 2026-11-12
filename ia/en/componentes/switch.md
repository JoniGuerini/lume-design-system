# Switch

Lume section: Components. Page: https://lumeui.dev/#/componentes/switch

Turns something on or off right away, with no save button. If the change only applies on submit, use a checkbox.

In numbers: sizes: 2 · states: 5 · transition: 200 ms · ARIA role: switch.

## Example

```html
<label class="ds-switch">
  <input type="checkbox" role="switch" class="ds-switch__input" checked>
  <span class="ds-choice__text">
    <span class="ds-choice__label">Notify about comments</span>
    <span class="ds-choice__description">We’ll let you know when someone comments.</span>
  </span>
</label>
```

## Switch or checkbox?

Both hold a yes/no. The difference is when the choice takes effect.

On now

Switch `ds-switch` — Immediate effect. No save button needed.

Checkbox `ds-checkbox` — Part of a form, applies on submit.

Markup of the examples in this section:

```html
<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-q-dark" checked="" data-live=""><span class="ds-choice__text"><span class="ds-choice__label">Focus mode</span><span class="ds-choice__description">Hides notifications while it’s on.</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" checked=""><span class="ds-choice__text"><span class="ds-choice__label">Get the contract by email</span><span class="ds-choice__description">Applies when you submit the form.</span></span></label>

<button type="button" class="ds-btn ds-btn--primary ds-btn--sm" aria-hidden="true">Send</button>
```

## Sizes

Medium is the default. Small fits in table rows and dense bars.

Medium `default` — 36 × 20 px

Small `ds-switch--sm` — 28 × 16 px

Markup of the examples in this section:

```html
<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-1" checked=""><span class="ds-choice__text"><span class="ds-choice__label">On</span></span></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-2"><span class="ds-choice__text"><span class="ds-choice__label">Off</span></span></label>

<label class="ds-switch ds-switch--sm"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-3" checked=""><span class="ds-choice__text"><span class="ds-choice__label">On</span></span></label>

<label class="ds-switch ds-switch--sm"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-4"><span class="ds-choice__text"><span class="ds-choice__label">Off</span></span></label>
```

## States

On gets the brand color and the thumb moves right — the position communicates too, not just the color.

Markup of the examples in this section:

```html
<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-5"></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-6" checked=""></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-7"></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-8"></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-9" disabled=""></label>
```

## Settings list

The most common use: label and description on the left, the switch on the right with `.ds-switch--end`. Each change applies right away.

Notifications

- Email summary — Every Monday, with what changed during the week.
- Phone notifications — Mentions and replies, right away.
- Sound on new messages — Only when the tab is open.
- Features in testing — May change without notice.

## Motion

The thumb moves in `duration.base` (200 ms) with `easing.emphasized`: it leaves fast and settles softly. With reduced motion, the change is instant.

```html
.ds-switch__input::before {
  transition: translate var(--ds-duration-base) var(--ds-easing-emphasized);
}

@media (prefers-reduced-motion: reduce) {
  .ds-switch__input::before { transition: none; }
}
```

Markup of the examples in this section:

```html
<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-motion" aria-label="Motion example"></label>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-motion-play=""><ds-icon name="play"></ds-icon>Toggle</button>

<button type="button" class="ds-chip ds-chip--sm" data-motion-reduce="" aria-pressed="false"><ds-icon name="motion"></ds-icon>Simulate reduced motion</button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

A native checkbox underneath, announced as a switch.

- role="switch" — The screen reader announces “switch, on” instead of “checkbox, checked”.
- Keyboard — Tab Space — Tab moves focus; Space turns it on and off.
- The label describes what it turns on — “Email notifications”, not “On”. The control already announces its state.
- Not color alone — The thumb position changes along with the color — it works for people who can’t tell the peach apart.
- A visible effect — If the change happens off screen, confirm it with a short notice (toast) for people who can’t see the result.
- Reduced motion — With `prefers-reduced-motion`, the thumb switches sides without animating.

## Tokens used

Everything the switch consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.muted (`--ds-color-bg-muted`) | Off track | #DAE0E8 | #3D3B38 |
| color.fg.muted (`--ds-color-fg-muted`) | Off thumb | #46586E | #CEC8C1 |
| color.brand.solid (`--ds-color-brand-solid`) | On track | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | On thumb | #F8FAFD | #1D2734 |
| color.border.default (`--ds-color-border-default`) | Track outline | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Outline on hover | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Focus ring | #53657A | #C0CAD6 |
| radius.full (`--ds-radius-full`) | Track and thumb | 9999 px | 9999 px |
| duration.base (`--ds-duration-base`) | Thumb and color | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Thumb curve | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| text.label-md (`--ds-text-label-md`) | Label | 14/20 · medium | 14/20 · medium |
| text.body-sm (`--ds-text-body-sm`) | Description | 14/22 · regular | 14/22 · regular |
| opacity.disabled (`--ds-opacity-disabled`) | Disabled | 0.44 | 0.44 |

## Usage

Three rules to avoid confusion.

- **Do:** an immediate effect. Turn it on and the interface changes. No “save” afterwards.
- **Avoid:** a switch with a submit button. If it needs confirming, it’s a checkbox. A switch promises an immediate effect.
- **Tip:** No “turn on/off” in the label. “Dark mode” is enough. “Turn on dark mode” reads oddly when it’s already on.
