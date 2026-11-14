# Modal

Lume section: Components. Page: https://lumeui.dev/#/componentes/modal

Interrupts the flow for a decision or a short task. Use it sparingly: whatever can stay on the page, stays on the page.

In numbers: sizes: 3 · tones: 2 · closes with: Esc · built on: <dialog>.

## Example

```html
import { openModal } from 'https://lumeui.dev/v/0.31/lume.js';

const choice = await openModal({
  eyebrow: 'Project',
  title: 'Publish changes?',
  body: 'The changes become visible to the whole team as soon as you publish.',
  actions: [
    { label: 'Cancel', value: 'cancel' },
    { label: 'Publish', value: 'confirm', variant: 'primary' },
  ],
});

// choice → the action’s value, or undefined if closed with ×, Esc, or an outside click
```

## Anatomy

Five parts. A title and at least one way out are required; the rest depends on the decision.

- 1 — Header — An optional label and a title in `text.heading-lg`. The title is the question: “Publish changes?”.
- 2 — Close — An icon button with an `aria-label`. It disappears when the modal requires a choice (`dismissible: false`).
- 3 — Body — Text in `text.body-md` and a secondary color. If it grows, only the body scrolls — header and actions stay put.
- 4 — Footer — Actions on the right, the primary one last. On phones they stack, with the primary on top.
- 5 — Backdrop — `color.bg.overlay`, flat and unblurred. The page stays visible — and inert until the modal closes.

Markup of the examples in this section:

```html
<div class="ds-modal ds-modal--inline" role="presentation">
<header class="ds-modal__header">
<div class="ds-modal__heading">
<p class="ds-modal__eyebrow">Project</p>
<h2 class="ds-modal__title" id="md-prev-title">Publish changes?</h2>
</div>
<button type="button" class="ds-icon-btn ds-icon-btn--muted ds-modal__close" data-ds-modal-close="" aria-label="Close"><ds-icon name="x"></ds-icon></button>
</header>
<div class="ds-modal__body" id="md-prev-body">The changes become visible to the whole team as soon as you publish.</div>
<footer class="ds-modal__footer"><button type="button" class="ds-btn ds-btn--secondary" data-ds-modal-close="cancel">Cancel</button><button type="button" class="ds-btn ds-btn--primary" data-ds-modal-close="confirm">Publish</button></footer></div>
```

## Sizes

The width follows the content, never the screen. On phones they all take the available width.

Small `size: 'sm'`

Confirmations and one-sentence notices.

Medium — default — `—`

The default: decisions with context and short forms.

Large `size: 'lg'`

Larger content, like a preview or a list to review.

Markup of the examples in this section:

```html
<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-open-size="sm"><ds-icon name="arrow-up-right"></ds-icon>Open</button>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-open-size="md"><ds-icon name="arrow-up-right"></ds-icon>Open</button>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-open-size="lg"><ds-icon name="arrow-up-right"></ds-icon>Open</button>
```

## Destructive confirmation

For what can’t be undone. The danger tone changes the icon and the action — and focus starts on “Cancel”.

- A title with the object: “Delete ‘Launch 0.1’?”, never “Are you sure?”.
- The body states the consequence and whether it can be undone.
- The button repeats the verb: “Delete project”, not “Yes”.
- Initial focus on the safe way out, so Enter doesn’t delete anything by mistake.

```html
const ok = await confirmModal({
  title: 'Delete “Launch 0.1”?',
  body: 'The project and its 12 files will be deleted.',
  confirmLabel: 'Delete project',
  tone: 'danger',
}); // → true or false
```

Markup of the examples in this section:

```html
<div class="ds-modal ds-modal--sm ds-modal--danger ds-modal--inline" role="presentation">
<header class="ds-modal__header">
<span class="ds-modal__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-modal__heading">
<h2 class="ds-modal__title" id="md-prev-title">Delete “Launch 0.1”?</h2>
</div>
<button type="button" class="ds-icon-btn ds-icon-btn--muted ds-modal__close" data-ds-modal-close="" aria-label="Close"><ds-icon name="x"></ds-icon></button>
</header>
<div class="ds-modal__body" id="md-prev-body">The project and its 12 files will be deleted. This can’t be undone.</div>
<footer class="ds-modal__footer"><button type="button" class="ds-btn ds-btn--secondary" data-ds-modal-close="cancel">Cancel</button><button type="button" class="ds-btn ds-btn--danger" data-ds-modal-close="confirm">Delete project</button></footer></div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>

<button type="button" class="ds-btn ds-btn--danger" data-open-confirm=""><ds-icon name="trash"></ds-icon>Delete project…</button>
```

## Behavior

The native <dialog> handles focus and layering. The component takes care of the rest.

Initial focus

Goes to the first field in the body; with no fields, to the primary action (or to “Cancel”, in the danger tone).

Three ways out

Esc, outside click, and the × button. With `dismissible: false`, only the actions close it.

Focus returned

On close, focus returns to whatever opened the modal — people pick up where they were.

Long content

The modal never exceeds the screen height: the body scrolls, header and footer stay fixed.

Motion

Enters with `duration.base` + emphasized and exits with `duration.fast` + accelerate. With reduced motion, it appears directly.

A single layer

No modal on top of a modal. If the task needs a second step, it happens inside the same modal.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M13 2.5 4.5 13.5H12l-1 8 8.5-11H12z"></path></svg>

<button type="button" class="ds-inline-action" data-open-demo="form"><ds-icon name="arrow-up-right"></ds-icon>Open with a form</button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"></path><path d="M4.5 6h.01"></path><path d="M4.5 12h.01"></path><path d="M4.5 18h.01"></path></svg>

<button type="button" class="ds-inline-action" data-open-demo="long"><ds-icon name="arrow-up-right"></ds-icon>Open with long text</button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3 12h4l2.5-6 5 12L17 12h4"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>
```

## Accessibility

Because it’s a <dialog> opened with showModal, the browser already announces it, traps focus, and makes the rest of the page inert.

- Name and description — The title becomes `aria-labelledby` and the body, `aria-describedby` — the screen reader reads both on open.
- Keyboard — Tab Shift Tab Esc — Tab cycles only inside the modal; Esc closes it (when allowed).
- Focus trapped and returned — No one gets lost behind the backdrop. On close, focus returns to the trigger.
- A named close button — The × has `aria-label="Close"`. Change it with `closeLabel` if the context calls for it.
- No trap — Every modal has a keyboard way out. Without a footer, the × is required.
- Reduced motion — With `prefers-reduced-motion`, the modal appears and disappears without animation.

## Tokens used

A raised surface, a flat backdrop, and short motion.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Modal background | #FFFFFF | #2C2A27 |
| color.border.subtle (`--ds-color-border-subtle`) | Border | #3E516624 | #FFFFFF0F |
| radius.2xl (`--ds-radius-2xl`) | Radius | 28 px | 28 px |
| shadow.2xl (`--ds-shadow-2xl`) | Shadow | 0 12px 24px -6px rgb(45 58 74 / 0.1), 0 48px 96px -24px rgb(45 58 74 / 0.24) | 0 12px 24px -6px rgb(0 0 0 / 0.36), 0 48px 96px -24px rgb(0 0 0 / 0.72) |
| color.bg.overlay (`--ds-color-bg-overlay`) | Page backdrop behind | #2B384759 | #00000099 |
| text.heading-lg (`--ds-text-heading-lg`) | Title | 26/32 · regular | 26/32 · regular |
| text.body-md (`--ds-text-body-md`) | Body | 16/28 · regular | 16/28 · regular |
| color.fg.muted (`--ds-color-fg-muted`) | Body color | #46586E | #CEC8C1 |
| color.danger.subtle (`--ds-color-danger-subtle`) | Icon in the danger tone | #FFF4F3 | #FF908721 |
| space.400 (`--ds-space-400`) | Inner padding | 32 px | 32 px |
| duration.base (`--ds-duration-base`) | Enter | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Enter curve | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| duration.fast (`--ds-duration-fast`) | Exit | 120ms | 120ms |
| easing.accelerate (`--ds-easing-accelerate`) | Exit curve | cubic-bezier(0.3, 0, 1, 1) | cubic-bezier(0.3, 0, 1, 1) |

## Usage

Before opening a modal, ask whether the page can handle it.

- **Do:** blocking decisions. Confirming something irreversible, choosing before moving on, a one-step task.
- **Avoid:** a modal to notify. “Saved successfully” doesn’t need to stop anyone — use a toast. And never open a modal on top of another.
- **Tip:** The title asks, the button answers. “Delete project?” → “Delete project”. You can decide by reading just the title and the button.
