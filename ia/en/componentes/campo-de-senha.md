# Password field

Lume section: Components. Page: https://lumeui.dev/#/componentes/campo-de-senha

The text field for passwords, with the show and hide button. Showing it prevents typos without asking for the password twice.

In numbers: button: aria-pressed · focus: in the field · autofill: autocomplete · sizes: 3.

## Example

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="senha">Password</label>
  <div class="ds-field"><input class="ds-field__input" id="senha" name="senha" type="password" autocomplete="current-password"></div>
</div>

<script type="module">
  import { createPasswordField } from 'https://lumeui.dev/v/1.13/lume.js';
  createPasswordField(document.querySelector('#senha'));
</script>
```

## Sign in and sign up

The difference is in `autocomplete`: it tells the browser and the password manager whether to fill the saved password or suggest a new one.

Sign in `current-password` — Fills in the saved password.

Sign up `new-password` — The manager suggests a strong password. State the requirements in the hint, in plain view.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="pw-current">Password</label>
<div class="ds-field"><input class="ds-field__input" id="pw-current" type="password" autocomplete="current-password" value="lume2026"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" aria-pressed="false" aria-label="Show password"><ds-icon name="eye"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pw-new">New password</label>
<div class="ds-field"><input class="ds-field__input" id="pw-new" type="password" autocomplete="new-password" value="lume2026" aria-describedby="pw-new-hint"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" aria-pressed="false" aria-label="Show password"><ds-icon name="eye"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="pw-new-hint">At least 8 characters.</p></div>
</div>
```

## States

The same as the Text field. The crossed-out eye says the password is visible.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<span class="ds-form-field__label">Password</span>
<div class="ds-field"><input class="ds-field__input" type="password" value="lume2026" aria-label="Password"><span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"><ds-icon name="eye"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Password</span>
<div class="ds-field"><input class="ds-field__input" type="text" value="lume2026" aria-label="Password"><span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"><ds-icon name="eye-off"></ds-icon></span></div>
</div>

<div class="ds-form-field">
<span class="ds-form-field__label">Password</span>
<div class="ds-field"><input class="ds-field__input" type="password" value="lume2026" aria-label="Password" disabled=""><span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"><ds-icon name="eye"></ds-icon></span></div>
</div>
```

## Code

On submitting the form, the password goes back to hidden, so the browser offers to save it.

```html
<div class="ds-field">
  <input class="ds-field__input" id="senha" name="senha" type="password" autocomplete="current-password">
</div>

<script type="module">
  import { createPasswordField } from 'https://lumeui.dev/v/1.13/lume.js';
  const senha = createPasswordField(document.querySelector('#senha'));
  // senha.visible · senha.show() · senha.hide() · senha.toggle()
</script>

// React
<Field label="Password">
  <PasswordField name="senha" autoComplete="new-password" />
</Field>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

The button is a toggle: the name doesn’t change, the state does.

- Fixed name, state in aria-pressed — Screen readers hear “Show password, button, pressed” when the password is visible.
- The cursor stays — Clicking the eye doesn’t take focus from the field: you can show, check, and keep typing.
- By keyboard — Tab Space — Tab reaches the button after the field; Space or Enter toggle it.

## Tokens used

On top of the Text field tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Eye icon | #46586E | #CEC8C1 |
| color.bg.hover (`--ds-color-bg-hover`) | Button on hover | #3E51660D | #FFFFFF0D |

## Usage

When to use it and when to prefer something else.

- **Do:** a single field. With the eye, “confirm password” is unnecessary: people check by looking.
- **Avoid:** blocking paste. People with a password manager paste the password. Blocking paste only gets in the way.
- **Tip:** Requirements in view. State the rules before the error, in the hint. The Sign-in pattern checks each one off as people type.
