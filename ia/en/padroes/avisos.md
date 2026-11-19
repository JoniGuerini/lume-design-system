# Notices and confirmations

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/avisos

Toast, alert, banner, or modal: each answers a different question. How much a mistake costs and how long the notice needs to last decide which to use.

In numbers: ways to notify: 4 · banner at a time: 1 · errors in a toast: 0.

## Live example

A report being edited. Each action answers with the notice that fits it.

- Section 1 — Response time dropped 18% and active people went past 2 thousand.
- Section 2 — The new search accounted for half of the visits to the docs.
- Section 3 — In November, the focus is first use and the error screens.

- Save draft: a short toast with no action. It worked, that’s it.
- Publish: the untitled sections become an alert at the top, with links to each field.
- In the ⋯, Archive happens right away, with Undo; Delete asks first.
- Turn on “Offline” above the stage: the banner stays until the connection is back.

Markup of the examples in this section:

```html
<label class="ds-switch ds-switch--sm">
<input type="checkbox" role="switch" class="ds-switch__input" data-av-offline="">
<span class="ds-choice__text"><span class="ds-choice__label">Offline</span></span>
</label>

<div class="ds-banner ds-banner--warning" role="region" aria-label="Notice" data-av-banner="" hidden="">
<span class="ds-banner__icon"><ds-icon name="wifi-off"></ds-icon></span>
<p class="ds-banner__text"><strong>Offline.</strong> What you write is kept and goes up when the connection is back.</p>
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-av-retry="">Try now</button>
</div>

<div class="ds-empty ds-empty--compact ds-empty--plain" data-av-deleted="" hidden="">
<span class="ds-empty__icon"><ds-icon name="trash"></ds-icon></span>
<p class="ds-empty__title">Report deleted</p>
<p class="ds-empty__description">In the example, you can bring it back.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-av-restore="">Restart the example</button></div>
</div>
```

## Which to use

Four ways to notify, from the lightest to the one that interrupts.

| Means | When | Goes away on its own? | Example |
| --- | --- | --- | --- |
| Toast | The result of something the person did that worked or can be undone. | Yes, in 2 s (5 s with an action) | “Draft saved” |
| Alert | A problem on this screen that stays until it’s solved. Close to where it happened. | No, it leaves once solved | “2 sections have no title” |
| Banner | A state that applies to the whole app: connection, maintenance, plan. | When the state ends | “Offline” |
| Modal | A decision that can’t be undone and needs an answer now. | Closes with the answer | “Delete the report?” |

## Rules

Six decisions that apply to any notice.

Undo beats confirm

If it can be undone, do it right away and offer “Undo” in the toast. Archiving, moving, and removing from a list work this way.

Confirm only what can’t be undone

The modal says what’s lost, with numbers, and the button repeats the verb: “Delete report”.

Errors don’t go in a toast

A toast vanishes in seconds. What people need to fix stays in an alert until it’s fixed.

Close to where it happened

The alert sits at the top of the affected area, with links to each field. No notice in a corner for a problem in the middle.

One notice per thing

Don’t add an alert and a toast for the same problem. One banner at a time; at most three toasts.

Never color alone

Icon and text say the same as the tone. A yellow alert with no words says nothing to someone who can’t tell the color.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M9 13.5 4.5 9 9 4.5M4.5 9h10a5 5 0 0 1 0 10H11"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10.3 4.2 2.9 17.5A2 2 0 0 0 4.6 20.5h14.8a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0z"></path><path d="M12 9.5v4"></path><path d="M12 17h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.5"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>
```

## Messages

What happened and what to do, in the words of the people using it. Error codes go in the log, not on screen.

| Situation | Avoid | Prefer |
| --- | --- | --- |
| It worked | Operation completed successfully! | Draft saved |
| Something missing | Error processing the request. | 2 sections have no title. Give them a title to publish. |
| No network | ERR_INTERNET_DISCONNECTED | Offline. What you write is kept. |
| Delete | Are you sure you want to continue? | Delete the report? The 3 sections and the comments go away. |

## Accessibility

Each means speaks its own way: some without moving focus, others bringing focus to them.

- Polite toast — The toast region is `role="status"`: it’s announced without interrupting. With an action, it lasts 5 s and the timer pauses with focus or pointer on it.
- Undo elsewhere too — Whoever missed the toast needs another path: the archived item shows up in Archive, with Restore.
- Alert gets focus — The alert that appears after an action has `role="alert"` and `tabindex="-1"`; focus moves to it, and each link leads to the right field.
- Banners don’t steal focus — It’s a named region (`aria-label="Notice"`), easy to find through landmarks, and its text is announced when it appears.
- Danger modals start on Cancel — A hasty Enter doesn’t delete anything. Esc closes and focus returns to the ⋯ that opened the menu.

## Code

Alerts and banners are markup; `toast` and `confirmModal` are one line each.

```html
<!-- Alert: at the top of the affected area, with a link to each field -->
<div class="ds-alert ds-alert--warning" role="alert" tabindex="-1">
  <span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
  <div class="ds-alert__body">
    <p class="ds-alert__title">2 sections have no title</p>
    <ul class="ds-alert__list">
      <li><a href="#section-2">Section 2: give it a title.</a></li>
      <li><a href="#section-3">Section 3: give it a title.</a></li>
    </ul>
  </div>
</div>

<!-- Banner: a state of the whole app -->
<div class="ds-banner ds-banner--warning" role="region" aria-label="Notice">
  <span class="ds-banner__icon"><ds-icon name="wifi-off"></ds-icon></span>
  <p class="ds-banner__text"><strong>Offline.</strong> What you write is kept.</p>
</div>
```

```html
import { toast, confirmModal } from 'https://lumeui.dev/v/1.12/lume.js';

// Can be undone: do it now and offer Undo
archive(report);
toast('Report archived', {
  action: { label: 'Undo', onClick: () => unarchive(report) },
});

// Can’t be undone: ask, saying what’s lost
const ok = await confirmModal({
  title: 'Delete the report?',
  body: 'The 3 sections and the comments go away. It can’t be undone.',
  confirmLabel: 'Delete report',
  tone: 'danger',   // focus starts on Cancel
});
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

When in doubt, the lightest notice that still gets the job done.

- **Do:** say the next step. Every problem notice ends with what people can do: try again, fix the field, wait for the connection.
- **Avoid:** a modal to say it worked. Interrupting to celebrate forces people to close something they didn’t ask for. Success is a toast, or not even that when the screen already shows it.
- **Tip:** Screen already shows it? Don’t notify. An item that shows up in the list or a switch that flips is already the notice. Toasts are for when the effect isn’t in view.
