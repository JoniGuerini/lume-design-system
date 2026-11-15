# Forms

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/formularios

Asking for information without making people guess: one clear label per field, the hint before the error, and errors that say how to fix them — at the right moment.

In numbers: native rules: 9 · moments to validate: 3 · primary action: 1 · error contrast: 7.9:1.

## Live example

A real form, with `createForm`. Submit it empty, type “ab” in the name, try the address “payments” — and watch the error disappear as you fix it.

- Submit it empty: the summary takes focus and each link leads to the field.
- Errors only on leaving the field — and they go away on the first right keystroke.
- With everything right, the toast confirms and the form goes back to the start.

## Layout

One column, top to bottom, in the order people think. The layout answers one question: what’s the next thing to fill in?

One column, label on top — The eye goes down a single line. A label beside the field forces zigzag reading — and doesn’t fit on phones.

Side by side, only what goes together

City and state, start and end, first and last name. Use `.ds-form__row`; on phones it becomes one column.

Width tells the size of the answer — Short postal code, long street. A wide field for four digits seems to ask for more than it does.

Mark the optional, not the required — Most fields are required: say so once at the top and mark only the exception as “optional”. No asterisks.

Stamped sections

A form with more than six fields gets numbered sections, like in the panel: `01 · Address`.

The hint sits below, always visible — A placeholder disappears on the first letter. What people need to know to get it right goes in the hint, which stays there.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l1">Full name</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l1" name="pf-ex-l1" type="text" required="" spellcheck="false"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l2">Email</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l2" name="pf-ex-l2" type="text" required="" spellcheck="false"></div>
</div>

<div class="ds-form__row"><div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l3">City</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l3" name="pf-ex-l3" type="text" required="" spellcheck="false"></div>
</div><div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l4">State</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l4" name="pf-ex-l4" type="text" required="" spellcheck="false"></div>
</div></div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l5">Postal code</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l5" name="pf-ex-l5" type="text" required="" spellcheck="false"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l6">Street</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l6" name="pf-ex-l6" type="text" required="" spellcheck="false"></div>
</div>

<p class="ds-form__note">All fields are required, except those marked optional.</p>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l7">Phone<span class="ds-form-field__optional">optional</span></label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l7" name="pf-ex-l7" type="text" spellcheck="false"></div>
</div>

<fieldset class="ds-form__section"><legend class="ds-form__legend"><span class="ds-section__stamp">02</span>Address</legend><div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l8">Street</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l8" name="pf-ex-l8" type="text" required="" spellcheck="false"></div>
</div></fieldset>
```

## Validation

Validate when the person is done, not while they type. And, with the error on screen, revalidate on every keystroke — no one should fix it and keep seeing the error.

01 — On leaving the field

If the person typed something. Tabbing through the field flags nothing.

02 — On submit

Validates everything, shows the summary on top, and moves focus to it.

03 — While fixing

A field with an error revalidates on every keystroke — the error goes away at the right time.

### Compare the same field, three moments

Default. The error appears when the person is done — never mid-typing.

### Ready-made rules they come from HTML attributes

| Attribute | Default message |
| --- | --- |
|  `required`  | Fill in this field. · Choose an option. · Check this option to continue. |
|  `type="email"`  | Use an email in the format name@company.com. |
|  `type="url"`  | Use a full address that starts with https://. |
|  `minlength`  | Use at least 3 characters (1 to go). |
|  `data-max`  | Use at most 40 characters (2 over). — the counter follows along |
|  `min · max`  | Use a value of 1 or more. · Use a value of 99 or less. |
|  `pattern`  | The text of the title attribute — write it as an instruction. |
|  `data-min (fieldset)`  | Check at least 2. |
|  `rules (JS)`  | Any rule of your own: return the message, or null when everything’s fine. |

Markup of the examples in this section:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M9.5 20.5H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h3.5M15.5 16.5 20 12l-4.5-4.5M20 12H9.5"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20 5v7a3 3 0 0 1-3 3H5M9 11l-4 4 4 4"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg>

<div class="ds-segmented" role="radiogroup" aria-labelledby="pf-modes-label">
<button type="button" class="ds-segmented__item" role="radio" data-mode="blur" aria-checked="true">On leaving the field</button><button type="button" class="ds-segmented__item" role="radio" data-mode="submit" aria-checked="false">On submit</button><button type="button" class="ds-segmented__item" role="radio" data-mode="input" aria-checked="false">On every keystroke</button>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-val-email">Work email</label>
<div class="ds-field"><input class="ds-field__input" id="pf-val-email" name="email" type="email" required="" autocomplete="email" aria-describedby="pf-val-email-hint" spellcheck="false"></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="pf-val-email-hint">Type “ana” and leave the field — or submit.</p></div>
</div>

<button type="submit" class="ds-btn ds-btn--secondary">Submit</button>
```

## Error messages

An error is an instruction, not a scolding: it says what to do to move on. Icon and text always together — color alone tells nothing to those who can’t see it.

- Summary on top. It takes focus on submit and says how many fields are left. Each line is a link to the field.
- Error below the field. Icon and text in `danger.fg`, in place of the hint. It says how to fix it.
- Marked field. Danger outline and `aria-invalid="true"`. It goes away as soon as the person fixes it.

### How to write avoid → prefer

| Situation | Avoid | Prefer |
| --- | --- | --- |
| Empty field | Required | Fill in the project name. |
| Format | Invalid email | Use an email in the format name@company.com. |
| Length | Min 8 | Use at least 8 characters — 3 to go. |
| Conflict | Error 409 | That address is already in use. How about payments-2? |
| Date | Invalid date | Use the full date, like 10/31/2026. |
| Server | An unexpected error occurred! | We couldn’t save right now. Your data is still here — try again. |

### When the error isn’t about a field .ds-alert

A save failure, a conflict, a warning before a change: an alert at the top of the form, with the right tone and a way out.

Markup of the examples in this section:

```html
<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Review 2 fields to continue</p>
<ul class="ds-alert__list" role="list"><li><a href="#pf-ex-nome">Project name: give the project a name</a></li><li><a href="#pf-ex-mail">Email for notices: use an email in the format name@company.com</a></li></ul>
</div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-nome">Project name</label>
<div class="ds-field"><span></span><input class="ds-field__input" id="pf-ex-nome" aria-invalid="true"></div>
<div class="ds-form-field__footer"><p class="ds-form-field__error"><span></span><ds-icon name="alert-circle"></ds-icon><span>Give the project a name.</span></p></div>
</div>

<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">We couldn’t create the project</p><p class="ds-alert__text">Your data is still here. Try again in a few seconds.</p><div class="ds-alert__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm"><ds-icon name="refresh"></ds-icon>Try again</button><span class="ds-alert__meta">Error 503 · 14:32</span></div></div>
</div>

<div class="ds-alert ds-alert--warning">
<span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">The address changes old links</p><p class="ds-alert__text">Anyone with the previous link will land on a notice page for 30 days.</p></div>
</div>

<div class="ds-alert ds-alert--success">
<span class="ds-alert__icon"><ds-icon name="check-circle"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">Draft saved</p><p class="ds-alert__text">You can close it and continue later, from any device.</p></div>
</div>

<div class="ds-alert ds-alert--info">
<span class="ds-alert__icon"><ds-icon name="info"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">Invites go by email</p><p class="ds-alert__text">Anyone without an account gets a link to create one.</p></div>
</div>

<div class="ds-alert ds-alert--compact">
<span class="ds-alert__icon"><ds-icon name="info"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">Compact</p><p class="ds-alert__text">one line, inside panels.</p></div>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-alert__close" aria-label="Close notice"><ds-icon name="x"></ds-icon></button>
</div>
```

## Actions

One primary action, with a verb that says what happens: “Create project”, not “OK”. And the submit button is never disabled — let people submit and explain what’s missing.

Primary on the right — The eye finishes reading on the right, where the concluding action is. Cancel sits beside it, quieter.

Destructive away from primary — Delete goes to the other end, in the danger tone — and always asks for confirmation.

Submitting — The button says what’s happening and doesn’t accept a second click. The rest of the form stays legible.

On phones — The actions take the full width and the primary moves to the top, near the thumb and the end of reading.

Markup of the examples in this section:

```html
<div class="ds-form__actions"><button type="button" class="ds-btn ds-btn--secondary">Cancel</button><button type="button" class="ds-btn ds-btn--primary">Save changes</button></div>

<div class="ds-form__actions"><button type="button" class="ds-btn ds-btn--ghost ds-form__actions-start"><ds-icon name="trash"></ds-icon>Delete project</button><button type="button" class="ds-btn ds-btn--secondary">Cancel</button><button type="button" class="ds-btn ds-btn--primary">Save</button></div>

<div class="ds-form__actions"><button type="button" class="ds-btn ds-btn--secondary">Cancel</button><button type="button" class="ds-btn ds-btn--primary" aria-disabled="true" data-busy=""><ds-icon name="loader"></ds-icon>Creating…</button></div>

<div class="ds-form__actions"><button type="button" class="ds-btn ds-btn--primary">Save changes</button><button type="button" class="ds-btn ds-btn--secondary">Cancel</button></div>
```

## Long form

Numbered sections, sticky actions in the footer, and a status of what isn’t saved yet. Edit a field below and watch the footer follow along.

## Accessibility

What `createForm` and the styles guarantee — and what’s left to you.

- A visible label tied to the field — Every field has a `<label for>`. A placeholder isn’t a label: it disappears on typing and has low contrast.
- An error tied to the field — The error text goes into `aria-describedby` and the field gets `aria-invalid="true"`. The hint stays connected.
- The summary takes focus — Tab Enter — On submitting with errors, focus goes to the summary; each link leads to the field (for a select, to the trigger; for a group, to the option).
- Never color alone — An error has an icon and text; the danger outline is reinforcement. The error text contrast passes 4.5:1 in both themes.
- Groups with fieldset — Related radios and checkboxes go in a `<fieldset>` with a `<legend>`; the group’s error is tied to the fieldset.
- Autofill — Use `autocomplete` (email, name, postal-code…) and the right `type`, which opens the right keyboard on phones.
- A button that’s always enabled — Disabling submit hides the reason. Let people submit and show what’s missing; while submitting, use `aria-disabled` and say “Creating…”.

## Code

Structure in HTML with the form classes; the behavior comes from one line of JS.

### HTML

```html
<form class="ds-form" id="project" novalidate>
  <div data-form-summary></div>

  <fieldset class="ds-form__section">
    <legend class="ds-form__legend"><span class="ds-section__stamp">01</span>About the project</legend>
    <div class="ds-form__row">
      <div class="ds-form-field">
        <label class="ds-form-field__label" for="name">Project name</label>
        <div class="ds-field"><input class="ds-field__input" id="name" name="name"
          required minlength="3" data-max="40" aria-describedby="name-hint"></div>
        <div class="ds-form-field__footer">
          <p class="ds-form-field__hint" id="name-hint">Shows in the menu and in search.</p>
          <span class="ds-form-field__counter" aria-hidden="true">0/40</span>
        </div>
      </div>
      <!-- another field… -->
    </div>
  </fieldset>

  <div class="ds-form__actions">
    <button type="reset" class="ds-btn ds-btn--secondary">Cancel</button>
    <button type="submit" class="ds-btn ds-btn--primary">Create project</button>
  </div>
</form>
```

### JavaScript

```html
import { createForm } from 'https://lumeui.dev/v/1.7/lume.js';

const form = createForm(document.querySelector('#project'), {
  rules: {
    // your own rule: return the message, or null when everything’s fine
    address: (value) => (taken.has(value) ? 'That address is already in use.' : null),
  },
  messages: { name: { required: 'Give the project a name.' } },
  onSubmit: async (data) => {
    await save(data);
    toast('Project created', { tone: 'success' });
  },
});
```

### createForm(form, options) ds/js/form.js

| Option or method | Value | What it does |
| --- | --- | --- |
|  `validateOn`  |  `'blur' (default) · 'submit' · 'input'`  | When to show the error. With an error on screen, the field always revalidates while the person fixes it. |
|  `rules`  |  `{ name: (value, el, form) => string \| null }`  | Your own rules, after the native ones. Can be a list. |
|  `messages`  |  `{ name: { required: '…' } }`  | Replaces a rule’s message. In HTML: data-error-required, data-error-email… |
|  `summary`  |  `true · Element · false`  | Error summary on top (in [data-form-summary] or at the start of the form). |
|  `onSubmit`  |  `(data, form) => void`  | Only runs when everything is valid. data comes from FormData; repeated names become a list. |
|  `onInvalid`  |  `(errors) => void`  | Runs when submission stops because of an error: [{ name, label, message }]. |
|  `validate()`  |  `boolean`  | Validates everything and shows the errors, without moving focus. |
|  `reset() · destroy()`  |  ``  | Clears values, errors, and the summary · turns everything off. |

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

Six rules that prevent most bad forms.

- **Do:** ask only for what’s needed. Every extra field is a reason to give up. What can be found out later, ask later.
- **Avoid:** placeholder as label. It disappears on the first letter, and people forget what they were filling in mid-sentence.
- **Tip:** Pick a safe default. Visibility starts at “Private”. The right default avoids a question — and a mistake.
- **Do:** errors that teach. “Use at least 8 characters — 3 to go” says what to do. “Invalid password” only says you got it wrong.
- **Avoid:** clearing what people typed. On error, never clear the fields. Keep everything and mark only what needs to change.
- **Tip:** Confirm with a toast. Did it work? A short toast (“Project created”) and the screen moves on. A success modal interrupts for nothing.
