# First use

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/primeiro-uso

Someone’s first session: a short welcome, a few steps that are already the real work, an empty state that teaches, and sample data for those who want to see before doing.

In numbers: steps: 3–5 · step already done: 1 · tour balloons: 0.

## Live example

The first time in a new workspace. The list’s empty state follows the Empty states pattern.

### Projects

### First steps

- Create the account — (done) — Done. You’re already here.
- Create the first project — It’s where the screens, notes, and people of a piece of work live. — Create project
- Invite someone — Projects move better with two. — Invite
- Choose the theme — Light or dark. You can change it later in Settings. — Light — Dark

All set

These steps stay in Help, if you need them.

- Create a project from the step or from the empty state: both check the same ✓.
- “See with examples” fills the list with marked projects that go away in one click.
- Choose the theme in the last step: the stage switches right away.
- The X hides the steps, with Undo in the notice.

Markup of the examples in this section:

```html
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-pu-clear-samples="" hidden=""><ds-icon name="trash"></ds-icon>Delete examples</button>

<div class="ds-empty ds-empty--compact" data-pu-empty="">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">Your projects show up here</p>
<p class="ds-empty__description">Create the first one or see how it looks with sample projects.</p>
<div class="ds-empty__actions">
<button type="button" class="ds-btn ds-btn--primary ds-btn--sm" data-pu-do="projeto"><ds-icon name="plus"></ds-icon>Create project</button>
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-pu-samples="">See with examples</button>
</div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-pu-dismiss="" aria-label="Hide first steps" data-ds-tooltip="Hide"><ds-icon name="x"></ds-icon></button>

<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pu-progress-label">Progress</span><span data-pu-count="">1 / 4</span></div>
<progress class="ds-progress ds-progress--success" aria-labelledby="pu-progress-label" aria-valuetext="1 of 4" value="1" max="4" data-pu-progress=""></progress>
</div>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-pu-dismiss="">Close</button>

<p class="ds-visually-hidden" role="status" data-pu-live=""></p>
```

## Anatomy

Five parts, all beside the work, none in front of it.

- 1 — Welcome — One sentence, with the person’s name, saying how much is left. No video or carousel before letting them in.
- 2 — First steps — A short list beside the work, with the progress and an X to hide it. It doesn’t block anything.
- 3 — Step — What to do, why it’s worth it, and the button that really does it. A done step gets its ✓ right away.
- 4 — Empty state that teaches — Says what will show up there and gives the same button as the step. See Empty states.
- 5 — Sample data — To see the screen full before having content. Marked as examples and deleted all at once.

## Rules

Six decisions that apply to any first time.

Learn by doing

Each step is the real action, not an explanation of it. Whoever creates the project from the step already has a project.

Few steps, already started

Three to five. The first one (creating the account) comes done: the bar starts moving, and finishing feels close.

It can be dismissed

The X hides the list, with Undo, and it comes back through Help. Nobody has to finish in order to work.

The empty state teaches

In place of the list, what will show up there and the button to start. No blank screen waiting for guesses.

Examples stay marked

Sample projects carry the “Example” tag and go away in one click. They never mix with what the person created.

No balloon tour

Five balloons pointing at the interface before any action get skipped by almost everyone. Explain in place, when the person gets there.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4"></rect><path d="m8 12 3 3 5-6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10 6h10M10 12h10M10 18h10M4 4.5l1.5-1V9M3.5 14c.2-.6.8-1 1.5-1 .8 0 1.5.6 1.5 1.4 0 1.4-3 2.1-3 3.6h3"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3.5 13h5l1.5 2.5h4l1.5-2.5h5"></path><path d="M6 4.5h12l2.5 8.5v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V13z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20.5 15a2 2 0 0 1-2 2H8l-4.5 3.5V5.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"></path></svg>
```

## Messages

Warm without a party. Each step says why it’s worth it, in one sentence.

| Situation | Avoid | Prefer |
| --- | --- | --- |
| Welcome | Welcome to Lume!!! 🎉 | Welcome, Ana. Three steps and your space is ready. |
| Step | Configure your workspace | Invite someone: projects move better with two. |
| End | Congratulations! You completed the onboarding! | All set. These steps stay in Help, if you need them. |
| Empty | No projects. | Your projects show up here. Create the first one or see with examples. |

## Accessibility

Progress needs to be said, not just drawn.

- Done steps, in writing — The ✓ is decoration; the state goes in hidden text (“done”) inside the step title.
- Progress with text — The `<progress>` has a label and `aria-valuetext` (“2 of 4”), instead of a bare percentage.
- Focus moves forward — On finishing a step, focus goes to the next missing one. On the last, to “All set”.
- Short announcements — A `role="status"` region says “Project created. 2 of 4 steps.”, without moving focus from where it is.
- Dismiss by keyboard — The X has a name (“Hide first steps”); when hiding, focus goes to the project list instead of getting lost.

## Code

The step list is markup with `<progress>`; the behavior is yours: check off, move focus, and hide with `toast` and Undo.

```html
<aside aria-labelledby="steps-titulo">
  <h2 id="steps-titulo">First steps</h2>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm" aria-label="Hide first steps">…</button>

  <div class="ds-progress-field">
    <div class="ds-progress-field__head"><span id="progress">Progress</span><span>2 / 4</span></div>
    <progress class="ds-progress ds-progress--success" aria-labelledby="progress" aria-valuetext="2 of 4" value="2" max="4"></progress>
  </div>

  <ol>
    <li data-done>Create the account <span class="ds-visually-hidden">(done)</span></li>
    <li>
      Invite someone
      <p>Projects move better with two.</p>
      <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">Invite</button>
    </li>
  </ol>
</aside>
```

```html
import { toast } from 'https://lumeui.dev/v/1.7/lume.js';

function complete(step) {
  step.toggleAttribute('data-done', true);
  step.querySelector('.ds-visually-hidden').textContent = ' (done)';
  bar.value = done();
  bar.setAttribute('aria-valuetext', `${done()} of 4`);
  next(step)?.querySelector('button').focus();   // focus moves on to the next step
}

function hide() {
  steps.hidden = true;
  toast('First steps hidden', {
    action: { label: 'Undo', onClick: () => (steps.hidden = false) },
  });
}
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

First use ends when the person has done the first thing that matters, not when they’ve seen every screen.

- **Do:** lead to the first result. Pick the step that makes people feel the product’s value (here, having a project) and put it second, right after the one already done.
- **Avoid:** a long form before getting in. Job title, company size, how they found you: ask later, when the answer changes something for the person.
- **Tip:** Steps done elsewhere count too. Whoever created the project from the menu, not from the step, also gets the ✓. The list follows what the person did, not where they clicked.
