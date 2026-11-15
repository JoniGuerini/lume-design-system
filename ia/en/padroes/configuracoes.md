# Settings

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/configuracoes

Where people adjust their profile, notifications, and appearance, and now and then do something serious. Light things apply right away; text waits for Save; what can’t be undone asks for confirmation.

In numbers: sections: 4 · Save button: 1 · confirmations: 2.

## Live example

The settings of a Lume account. Change the settings, edit the profile, and try switching sections without saving.

You

- Profile
- Notifications
- Appearance

Workspace

- Danger zone

All saved

- Change the name and go to Notifications: Lume asks whether to discard.
- Turn on a switch: “Saved” shows next to the title, with no button.
- In Appearance, choose Dark: the whole stage switches theme.
- In Danger zone, Delete only unlocks after typing “Lume”.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-nome">Name</label>
<div class="ds-field"><input class="ds-field__input" id="cf-nome" name="cf-nome" type="text" value="Ana Lima" autocomplete="name" spellcheck="false" data-cf-input=""></div>
<div class="ds-form-field__footer" hidden=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-email">Email</label>
<div class="ds-field"><input class="ds-field__input" id="cf-email" name="cf-email" type="email" value="ana@lume.app" autocomplete="email" aria-describedby="cf-email-hint" spellcheck="false" data-cf-input=""></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="cf-email-hint">If you change it, we send a link to confirm. Until then, the current email stays.</p></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-sobre">About you</label>
<div class="ds-field ds-field--multiline"><textarea class="ds-field__input" id="cf-sobre" name="cf-sobre" rows="3" data-cf-input="">I look after Lume’s design.</textarea></div>
</div>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-cf-discard="" disabled="">Discard</button>

<button type="submit" class="ds-btn ds-btn--primary ds-btn--sm" data-cf-save="" disabled="">Save</button>

<label class="ds-switch ds-switch--end">
<input type="checkbox" role="switch" class="ds-switch__input" data-cf-instant="mencoes" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Mentions and replies</span><span class="ds-choice__description">When someone talks to you in a comment.</span></span>
</label>

<label class="ds-switch ds-switch--end">
<input type="checkbox" role="switch" class="ds-switch__input" data-cf-instant="convites" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Accepted invites</span><span class="ds-choice__description">When someone you invited joins.</span></span>
</label>

<label class="ds-switch ds-switch--end">
<input type="checkbox" role="switch" class="ds-switch__input" data-cf-instant="novidades">
<span class="ds-choice__text"><span class="ds-choice__label">Lume news</span><span class="ds-choice__description">Once a month, at most.</span></span>
</label>
```

## Right away, on the button, or with confirmation

The core decision of the pattern: how much a mistake costs decides when the setting applies.

| Setting | Applies | Why |
| --- | --- | --- |
| On and off | Right away, with “Saved” | It’s one click, and another click undoes it. A Save button would only give a chance to forget. |
| A few options | Right away | Theme, language, frequency: seeing the effect is the best confirmation. |
| Text | On the Save button | Saving on every keystroke stores half-written values and shows errors too early. |
| What can’t be undone | With confirmation | Deleting, changing plans, transferring: the only time asking really protects. |

## Anatomy

Five parts. The save bar only shows up where there’s text.

- 1 — Section navigation — On the left, grouped by who’s affected: you or the workspace. The danger zone is always last.
- 2 — Setting row — Name, one sentence about the effect, and the control on the right. The sentence says what changes; it doesn’t repeat the name.
- 3 — Saved notice — A discreet “Saved” next to the section title that fades on its own. No toast for every switch.
- 4 — Save bar — Only for text fields: the state (“Unsaved changes”), Discard, and Save, which only work when something changed.
- 5 — Danger zone — A border in the danger tone, each action on its own row, and the button saying what it does.

## Rules

Six decisions that apply to any settings screen.

On and off applies right away

A switch is an immediate effect by definition. If it needs Save, the right control is a checkbox in a form.

Text waits for Save

And Save only works when something changed. Next to it, the state in words: “All saved” or “Unsaved changes”.

Leaving unsaved asks

Switching sections with the profile half-edited asks whether to discard. It’s what would be lost without warning.

Danger goes last and apart

In its own section, with a border in the danger tone. Nobody should land there by accident while scrolling.

Confirming takes reading

For what can’t be undone, people type the workspace name. The button says “Delete workspace”, never “OK”.

Each section has an address

In the app, each item is a link (/settings/notifications). You can send it to someone and Back works.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="2.5" y="6.5" width="19" height="11" rx="5.5"></rect><circle cx="16" cy="12" r="2.75"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M16 4.5a2.12 2.12 0 0 1 3 3L8 18.5l-4 1 1-4z"></path><path d="m14 6.5 3 3"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V13"></path><path d="M12 16.5h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5l7.5 2.8v5.4c0 4.4-3.1 7.9-7.5 8.8-4.4-.9-7.5-4.4-7.5-8.8V6.3z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 7V5h14v2M12 5v14M9 19h6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"></path></svg>
```

## Messages

Light things, in one word. Serious things, with numbers and the name of what’s lost.

| Situation | Avoid | Prefer |
| --- | --- | --- |
| Saved instantly | Your preferences were updated successfully! | Saved |
| Leaving unsaved | Are you sure? | Discard the profile changes? |
| Delete | This action is irreversible. Do you wish to continue? | This deletes 12 projects, 48 files, and the access of 22 people. |
| Confirm button | OK | Delete workspace |

## Accessibility

Saving right away can’t be silent for people who can’t see the screen.

- Current section marked — The navigation has a name and `aria-current` on the open section. When switching, focus goes to the section title (`tabindex="-1"`), and the screen reader says where the person landed.
- Switches with name and effect — `role="switch"` inside the `<label>`, with name and description: the screen reader says “Mentions and replies, on” and the effect sentence.
- “Saved” announced — The notice sits in a `role="status"` region: it’s announced without taking focus off the control.
- Save bar state in words — “Unsaved changes” sits in `aria-live`; a disabled Save has the reason right next to it, in view.
- Deleting by keyboard — The modal opens with focus on the name field. Enter confirms only when the name matches; Esc cancels and focus returns to the Delete button.

## Code

Switches and `createSegmented` store right away; the profile is a plain `<form>`; deletion uses `createModal` to lock the button until the name matches.

```html
<section aria-labelledby="notifications-titulo">
  <header>
    <h2 id="notifications-titulo" tabindex="-1">Notifications</h2>
    <p role="status" id="saved"></p>   <!-- “Saved” shows up here -->
  </header>

  <label class="ds-switch ds-switch--end">
    <input type="checkbox" role="switch" class="ds-switch__input" name="mentions" checked>
    <span class="ds-choice__text">
      <span class="ds-choice__label">Mentions and replies</span>
      <span class="ds-choice__description">When someone talks to you in a comment.</span>
    </span>
  </label>
</section>
```

```html
import { createModal, toast } from 'https://lumeui.dev/v/1.2/lume.js';

// On and off: store right away and announce without moving focus
section.addEventListener('change', async (e) => {
  await save({ [e.target.name]: e.target.checked });
  saved.textContent = 'Saved';
  setTimeout(() => (saved.textContent = ''), 2000);
});

// Delete: only confirms once the name is typed
const modal = createModal({
  title: 'Delete “Lume”?', tone: 'danger', size: 'sm', body: body,
  actions: [
    { label: 'Cancel', value: 'cancel' },
    { label: 'Delete workspace', value: 'confirm', variant: 'danger' },
  ],
});
const confirm = modal.el.querySelector('[data-ds-modal-close="confirm"]');
confirm.disabled = true;
input.addEventListener('input', () => (confirm.disabled = input.value.trim() !== 'Lume'));
if ((await modal.open()) === 'confirm') deleteWorkspace();
modal.destroy();
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

Settings are for what people change now and then. What they change every day lives on the screen itself.

- **Do:** group by who’s affected. “You” and “Workspace” make it clear whether the change is just yours or everyone’s, before even opening the section.
- **Avoid:** one Save for the whole page. Mixing switches, theme, and text under one Save makes people leave thinking they turned on something they didn’t.
- **Tip:** A setting with many levels becomes a page. Per-project permissions, billing rules: when the row needs a table, it leads to a page of its own.
