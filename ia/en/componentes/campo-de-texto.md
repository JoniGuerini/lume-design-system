# Text field

Lume section: Components. Page: https://lumeui.dev/#/componentes/campo-de-texto

For people to type in. An always-visible label, a hint before the error, and messages that say how to fix it.

In numbers: sizes: 3 · states: 6 · formats: 2 · default height: 40 px.

## Example

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="project-name">Project name</label>
  <div class="ds-field">
    <input class="ds-field__input" id="project-name" type="text" placeholder="E.g. Lume" aria-describedby="project-name-hint">
  </div>
  <div class="ds-form-field__footer">
    <p class="ds-form-field__hint" id="project-name-hint">Shows up in the menu and in search.</p>
  </div>
</div>
```

## Anatomy

Six parts; only the label and the container are required.

- 1 — Label — Always visible, above the field, in `text.label-md`. Mark what’s optional — not what’s required.
- 2 — Container — Height `size.control.*`, outline `border.control`, radius `radius.md`.
- 3 — Icon — Optional. Only when it helps recognize the kind of data — search, email, date.
- 4 — Text and placeholder — The placeholder gives an example of the format; it never replaces the label.
- 5 — Hint or error — One line right below. The error takes the hint’s place and says how to fix it.
- 6 — Counter — Only when there’s a limit. Turns red past the maximum.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<span class="ds-form-field__label">Work email</span>
<div class="ds-field">
<span><ds-icon name="mail"></ds-icon></span>
<span class="ds-field__placeholder">name@company.com</span>
</div>
<div class="ds-form-field__footer">
<span class="ds-form-field__hint">We’ll use it for account notices.</span>
<span class="ds-form-field__counter">0/40</span>
</div>
</div>
```

## Sizes

Inside a `.ds-form-field` the default is medium. Use the same size as the buttons next to it.

Small `ds-field--sm` — 32 px · Filters and dense bars.

Medium `default` — 40 px · The form default.

Large `ds-field--lg` — 48 px · Touch screens and short, prominent forms.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-size-sm">Small</label>
<div class="ds-field ds-field--sm"><ds-icon name="search"></ds-icon><input class="ds-field__input" id="tf-size-sm" type="text" placeholder="Search"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-size-md">Medium</label>
<div class="ds-field"><ds-icon name="search"></ds-icon><input class="ds-field__input" id="tf-size-md" type="text" placeholder="Search"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-size-lg">Large</label>
<div class="ds-field ds-field--lg"><ds-icon name="search"></ds-icon><input class="ds-field__input" id="tf-size-lg" type="text" placeholder="Search"></div>
</div>
```

## States

Hover and focus can also be forced with `data-state` on `.ds-field`, to document and test.

Default — A quiet outline; the label identifies the field.

Hover — The outline gets stronger.

Focus — An outline in the focus color and a soft halo.

Read-only — A recessed background: you can read and copy, not edit.

Disabled — Reduced opacity and out of the focus order.

Invalid — A danger outline and message, linked by aria-describedby.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-default">Project slug</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-default" type="text" placeholder="lume-ds"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-hover">Project slug</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-hover" type="text" placeholder="lume-ds"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-focus">Project slug</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-focus" type="text" placeholder="lume-ds"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-readonly">Project slug</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-readonly" type="text" placeholder="lume-ds" value="lume-design-system" readonly=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-disabled">Project slug</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-disabled" type="text" placeholder="lume-ds" disabled=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-state-invalid">Project slug</label>
<div class="ds-field"><input class="ds-field__input" id="tf-state-invalid" type="text" placeholder="lume-ds" value="Lume DS!" aria-invalid="true" aria-describedby="tf-state-invalid-error"></div>
<div class="ds-form-field__footer">
<p class="ds-form-field__error" id="tf-state-invalid-error"><ds-icon name="alert-circle"></ds-icon><span>Use only letters, numbers, and hyphens.</span></p>
</div>
</div>
```

## Multiline

For text longer than one sentence. The same container, with `.ds-field--multiline` and a `<textarea>` that grows vertically.

```html
<div class="ds-field ds-field--multiline">
  <textarea class="ds-field__input" id="description" rows="4"></textarea>
</div>
```

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-bio">Project description<span class="ds-form-field__optional">optional</span></label>
<div class="ds-field ds-field--multiline">
<textarea class="ds-field__input" id="tf-bio" rows="4" maxlength="200" aria-describedby="tf-bio-hint" placeholder="Say in a few lines what it’s for.">A flat, calm design system, with OKLCH tokens.</textarea>
</div>
<div class="ds-form-field__footer">
<p class="ds-form-field__hint" id="tf-bio-hint">Shows up at the top of the project page.</p>
<span class="ds-form-field__counter" data-counter-for="tf-bio">46/200</span>
</div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Validation

Validate when people leave the field or submit — never on every keystroke. The message replaces the hint and says what to do.

Avoid

“Invalid email.”

Prefer

“Use a full email, like name@company.com.”

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="tf-email">Work email</label>
<div class="ds-field"><ds-icon name="mail"></ds-icon><input class="ds-field__input" id="tf-email" type="email" autocomplete="email" placeholder="name@company.com" aria-describedby="tf-email-msg"></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="tf-email-msg" data-msg="">We’ll use it for account notices.</p></div>
</div>

<button type="submit" class="ds-btn ds-btn--primary">Continue</button>

<button type="reset" class="ds-btn ds-btn--ghost">Clear</button>
```

## Accessibility

What makes sure everyone can fill it in.

- A real label — `<label for>` linked to the field’s `id`. Clicking the label focuses the field; the screen reader announces the name.
- A placeholder isn’t a label — It disappears when typing and has lower contrast. Use it only as a format example.
- Announced hint and error — `aria-describedby` points to the hint or the error, and the invalid field gets `aria-invalid="true"`.
- Errors don’t rely on color alone — The message has an icon and text, besides the red outline.
- Keyboard — Tab Shift + Tab — Tab enters, Shift + Tab goes back; nothing traps focus inside the field.
- Autofill — Use the right `type` and `autocomplete` (email, name, tel) so the browser and password managers can help.

## Tokens used

Everything the field consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Height (medium) | 40 px | 40 px |
| radius.md (`--ds-radius-md`) | Radius | 12 px | 12 px |
| text.label-md (`--ds-text-label-md`) | Label | 14/20 · medium | 14/20 · medium |
| text.body-sm (`--ds-text-body-sm`) | Typed text, hint, and error | 14/22 · regular | 14/22 · regular |
| space.075 (`--ds-space-075`) | Label → field → hint | 6 px | 6 px |
| color.border.control (`--ds-color-border-control`) | Outline | #3E516633 | #FFFFFF21 |
| color.border.strong (`--ds-color-border-strong`) | Outline on hover | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Focus outline and halo | #53657A | #C0CAD6 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Placeholder, icon, and hint | #53657A | #9C9792 |
| color.bg.sunken (`--ds-color-bg-sunken`) | Read-only background | #E8EDF3 | #151412 |
| color.danger.solid (`--ds-color-danger-solid`) | Invalid outline | #C13834 | #FF9087 |
| color.danger.fg (`--ds-color-danger-fg`) | Error message | #C13834 | #FFB2AA |
| duration.fast (`--ds-duration-fast`) | Outline transition | 120ms | 120ms |
| opacity.disabled (`--ds-opacity-disabled`) | Disabled | 0.44 | 0.44 |

## Usage

Three rules for forms that don’t give people a hard time.

- **Do:** label on top, hint below. People know what to write before they start.
- **Avoid:** a placeholder instead of a label. When typing, the “label” disappears — and so does the context.
- **Tip:** Size tells what fits. A short ZIP code in a short field already explains the format.
