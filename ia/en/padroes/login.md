# Sign-in and sign-up

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/login

The product’s first screen — and the one most people abandon. Ask only for what’s needed, let people see their password, explain errors without revealing who has an account, and never lock anyone out.

In numbers: fields to sign in: 2 · fields to sign up: 3 · primary action: 1 · “confirm password”: 0.

## Live example

Three connected screens: sign in, create an account, and reset the password. The test account accepts any email with the password `lume2026`; `ana@lume.app` is already registered.

Lume

### Check your email

- Sign in with another password: the error doesn’t say which one is wrong.
- The eye shows the password; the sign-up requirements check off as you type.
- On reset, the answer is the same whether the account exists or not.

Markup of the examples in this section:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Example screen" data-lc-views="">
<button type="button" class="ds-segmented__item" role="radio" data-lc-view-option="login" aria-checked="true">Sign in</button><button type="button" class="ds-segmented__item" role="radio" data-lc-view-option="signup" aria-checked="false">Create account</button><button type="button" class="ds-segmented__item" role="radio" data-lc-view-option="recover" aria-checked="false">Reset password</button>
</div>

<button type="button" class="ds-theme-toggle" data-lc-theme="dark" aria-pressed="false" aria-label="Example theme" data-ds-tooltip="Switch between light and dark">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<form class="ds-form" data-lc-view="login" id="lc-login" aria-labelledby="lc-login-title" novalidate="">
<header>
<p><img src="assets/favicon.svg" alt="" width="24" height="24">Lume</p>
<h3><span id="lc-login-title">Sign in to Lume</span></h3>
</header>
<div data-lc-alert=""></div>
<div class="ds-form-field">
<label class="ds-form-field__label" for="lc-login-email">Email</label>
<div class="ds-field"><input class="ds-field__input" id="lc-login-email" name="email" type="email" required="" autocomplete="username" inputmode="email" autocapitalize="none" spellcheck="false" data-error-required="Enter your account email."></div>
</div>
<div>
<div class="ds-form-field">
<label class="ds-form-field__label" for="lc-login-senha">Password</label>
<div class="ds-field"><input class="ds-field__input" id="lc-login-senha" name="senha" type="password" required="" autocomplete="current-password" spellcheck="false" data-error-required="Enter your password."><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" data-lc-reveal="" aria-pressed="false" aria-label="Show password" data-ds-tooltip="Show password"><ds-icon name="eye"></ds-icon></button></div>
</div>
<button type="button" class="ds-inline-action" data-lc-go="recover">Forgot password</button>
</div>
<button type="submit" class="ds-btn ds-btn--primary" data-lc-submit="">Sign in</button>
<p>Don’t have an account? <button type="button" data-lc-go="signup">Create account</button></p>
</form>

<form class="ds-form" id="lc-recover" aria-labelledby="lc-recover-title" novalidate="">
<header>
<p><img src="assets/favicon.svg" alt="" width="24" height="24">Lume</p>
<h3><span id="lc-recover-title">Reset your password</span></h3>
<p>We’ll send a link to create a new password.</p>
</header>
<div class="ds-form-field">
<label class="ds-form-field__label" for="lc-recover-email">Email</label>
<div class="ds-field"><input class="ds-field__input" id="lc-recover-email" name="email" type="email" required="" autocomplete="username" inputmode="email" autocapitalize="none" spellcheck="false" data-error-required="Enter your account email."></div>
</div>
<button type="submit" class="ds-btn ds-btn--primary" data-lc-submit="">Send link</button>
<p><button type="button" data-lc-go="login"><ds-icon name="arrow-left"></ds-icon>Back to sign in</button></p>
</form>

<svg class="ds-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"></rect><path d="m3.5 7.5 8.5 6 8.5-6"></path></svg>

<button type="button" class="ds-btn ds-btn--secondary" data-lc-go="login">Back to sign in</button>
```

## Rules

Six decisions that apply to any access screen.

Only what’s needed

Signing in asks for email and password. Creating an account asks for name, email, and password. Everything else — photo, company, role — waits until later, inside the product.

Show the password

A button inside the field (`.ds-field__action`) shows what was typed. That’s what prevents typos — not a second field.

No “confirm password”

Nor “confirm email”. Repeating the field doubles the work and doesn’t catch the error that matters. Anyone who mistyped their email recovers through the link.

Requirements in view

The password rules show up before typing and get checked off as the person writes — not after an error.

Errors don’t reveal who has an account

On sign-in, “incorrect email or password” — never which one. On reset, the same answer whether the account exists or not.

Let people paste and autofill

Never block pasting. With the right `autocomplete`, the password manager fills in sign-in and suggests a strong password on sign-up.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z"></path><path d="M14 3.5v5h5M9 13h6M9 16.5h4"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m9 9 6 6M15 9l-6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5l7.5 2.8v5.4c0 4.4-3.1 7.9-7.5 8.8-4.4-.9-7.5-4.4-7.5-8.8V6.3z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"></rect><path d="M8 10.5v-3a4 4 0 0 1 8 0v3"></path></svg>
```

## Messages

Every message says what to do next. On access screens, it also mustn’t help anyone trying to guess other people’s accounts.

| Situation | Avoid | Prefer |
| --- | --- | --- |
| Wrong password | Invalid password for this user | Incorrect email or password. Check them and try again, or reset your password. |
| Too many attempts | Account locked! | Too many attempts in a row. Try again in 5 minutes or reset your password. |
| Email in use | Error 409: conflict | There’s already an account with that email. Want to sign in? |
| Weak password | Password does not meet policy | Use at least 8 characters, with a letter and a number. |
| Link sent | Email sent successfully! | If there’s an account with that email, the link arrives in a few minutes. |
| Expired link | Invalid token | That link has expired — it’s valid for 1 hour. Request a new one. |

## Accessibility

Signing in can’t depend on memory, perfect vision, or speed. WCAG 2.2 has a criterion just for this: accessible authentication (3.3.8).

- The right autocomplete — `username` and `current-password` on sign-in, `email` and `new-password` on sign-up. The password manager fills in and suggests — nobody has to memorize anything.
- Pasting always works — Blocking paste pushes people toward weak passwords and breaks password managers. Not on email, not on password.
- Show password with state — The button has a fixed name (“Show password”) and `aria-pressed` says whether it’s on. Focus stays put.
- Requirements tied to the field — The list is in the password’s `aria-describedby`; each item says in text whether it’s met — not just through the ✓ color.
- Access errors as alerts — “Incorrect email or password.” shows in a `.ds-alert` with `role="alert"`; the password is cleared and gets focus for the next try.
- No memory tests — No image CAPTCHA or security question as the only way through. If you need to stop bots, offer a path that doesn’t depend on deciphering letters.

## Code

Sign-in is a regular form with `createForm`: the fields, the show-password button, and the server’s answer in an alert.

```html
<form class="ds-form" id="sign-in" novalidate>
  <div class="ds-form-field">
    <label class="ds-form-field__label" for="email">Email</label>
    <div class="ds-field">
      <input class="ds-field__input" id="email" name="email" type="email" required
        autocomplete="username" inputmode="email" autocapitalize="none" spellcheck="false">
    </div>
  </div>
  <div class="ds-form-field">
    <label class="ds-form-field__label" for="password">Password</label>
    <div class="ds-field">
      <input class="ds-field__input" id="password" name="password" type="password" required
        autocomplete="current-password">
      <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"
        aria-pressed="false" aria-label="Show password" data-show-password>
        <ds-icon name="eye" size="16"></ds-icon>
      </button>
    </div>
  </div>
  <button type="submit" class="ds-btn ds-btn--primary">Sign in</button>
</form>
```

```html
import { createForm } from 'https://lumeui.dev/v/0.34/lume.js';

// show password: switches the field type and marks the button
document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-show-password]');
  if (!button) return;
  const input = button.closest('.ds-field').querySelector('input');
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  button.setAttribute('aria-pressed', String(show));
});

createForm(document.querySelector('#sign-in'), {
  summary: false, // two fields: the error shows on each one
  async onSubmit(data) {
    const ok = await signIn(data.email, data.password);
    if (!ok) showAlert('Incorrect email or password.'); // never say which one
  },
});
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

The access screen sits outside the app: no sidebar, no navigation — just the brand and the form.

- **Do:** sign people in right after sign-up. Someone who just created an account is already in. Asking them to sign in again, with the same details, loses people at the door.
- **Avoid:** hidden password rules. Finding out the rule only after the error — “needs a special character” — makes people guess twice. Show it first, check it off while they type.
- **Tip:** A way back on every screen. Sign-in leads to sign-up and to password reset; both lead back to sign-in. Nobody gets stuck in a dead end.
