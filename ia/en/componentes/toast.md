# Toast

Lume section: Components. Page: https://lumeui.dev/#/componentes/toast

Confirms that something happened, without interrupting. It shows at the bottom, goes away on its own, and can carry a short action, like undo.

In numbers: tones: 5 · default duration: 2.2 s · on screen at once: 3 · positions: 6.

## Example

```html
import { toast } from 'https://lumeui.dev/v/0.39/lume.js';

toast('Changes saved', {
  tone: 'success',
});
```

## Tones

The background is always inverse — the toast stands out on any screen. The tone shows only in the icon, so the color doesn’t shout.

Neutral `—`

The default: simple confirmations of what someone just did.

Success `tone: 'success'`

Something that took a while or mattered finished well.

Info `tone: 'info'`

News that doesn’t call for immediate action.

Warning `tone: 'warning'`

Attention, without blocking. The app keeps working.

Danger `tone: 'danger'`

It failed, but you can try again. Serious errors stay on screen.

Markup of the examples in this section:

```html
<div class="ds-toast" data-open=""><span class="ds-toast__icon"><ds-icon name="check"></ds-icon></span>
<span class="ds-toast__message">Link copied</span>
</div>

<button type="button" class="ds-inline-action" data-show-tone="neutral"><ds-icon name="play"></ds-icon>Show</button>

<div class="ds-toast ds-toast--success" data-open=""><span class="ds-toast__icon"><ds-icon name="check-circle"></ds-icon></span>
<span class="ds-toast__message">Changes saved</span>
</div>

<button type="button" class="ds-inline-action" data-show-tone="success"><ds-icon name="play"></ds-icon>Show</button>

<div class="ds-toast ds-toast--info" data-open=""><span class="ds-toast__icon"><ds-icon name="info"></ds-icon></span>
<span class="ds-toast__message">New version available</span>
</div>

<button type="button" class="ds-inline-action" data-show-tone="info"><ds-icon name="play"></ds-icon>Show</button>

<div class="ds-toast ds-toast--warning" data-open=""><span class="ds-toast__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<span class="ds-toast__message">You’re offline</span>
</div>

<button type="button" class="ds-inline-action" data-show-tone="warning"><ds-icon name="play"></ds-icon>Show</button>
```

## With an action

A single action, short and reversible — “Undo”, “View”, “Try again”. With an action, the toast stays 5 s.

- Launch plan
- Campaign palette
- Meeting notes

All archived. Start over

Archive a file and undo it from the toast. — Undo in the toast beats asking for confirmation first: people act fast and fix it if they slip.

## Behavior

Predictable: always in the same place, always leaving on its own.

Six positions

Bottom center is the default. At the top, it sits below the topbar. The newest enters next to the edge and the toast slides in from the side it comes from.

At most 3 per position

The fourth pushes the oldest out. Each position has its own announced region.

On phones

Below 768 px, the corners become the center of the same side — top or bottom.

Pauses with the pointer

Hover or Tab to it and the timer stops. Leave and it resumes.

Until closed

With `duration: Infinity` it gets a ×. Close it from code with `.close()`.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="9" rx="2"></rect><rect x="13.5" y="3.5" width="7" height="5" rx="2"></rect><rect x="13.5" y="11.5" width="7" height="9" rx="2"></rect><rect x="3.5" y="15.5" width="7" height="5" rx="2"></rect></svg>

<button type="button" class="ds-inline-action" data-demo="corners"><ds-icon name="play"></ds-icon>Try all six</button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<button type="button" class="ds-inline-action" data-demo="burst"><ds-icon name="play"></ds-icon>Show 4 in a row</button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="4" width="18" height="12.5" rx="2.5"></rect><path d="M8.5 20.5h7M12 16.5v4"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>

<button type="button" class="ds-inline-action" data-demo="sticky"><ds-icon name="play"></ds-icon>Show until closed</button>
```

## Accessibility

It notifies without stealing anyone’s focus.

- Politely announced — The region is `role="status"` with `aria-live="polite"`: the screen reader reads it once it finishes what it’s saying.
- Doesn’t move focus — Tab — People stay where they were. The toast’s action is reachable with Tab.
- Enough time — Pauses on hover and focus. With an action, 5 s; for something important, use “until closed”.
- Doesn’t rely on color — Each tone has its own icon — success, warning, danger, and info are told apart without color.
- A complete message — Write what happened, not just “Done!”. Someone who only hears the announcement needs to understand.
- Serious errors stay on screen — If people need to act to fix it, show the error near the problem — not in a notice that disappears.

## Tokens used

An inverse background to stand out; tones only in the icon.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.inverse (`--ds-color-bg-inverse`) | Background | #2B3847 | #F3EDE5 |
| color.fg.inverse (`--ds-color-fg-inverse`) | Text and action | #F8FAFD | #0F0E0C |
| radius.md (`--ds-radius-md`) | Radius | 12 px | 12 px |
| shadow.lg (`--ds-shadow-lg`) | Shadow | 0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14) | 0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5) |
| text.label-md (`--ds-text-label-md`) | Message | 14/20 · medium | 14/20 · medium |
| color.success.solid (`--ds-color-success-solid`) | Success icon | #1E854A | #72CB8B |
| color.warning.solid (`--ds-color-warning-solid`) | Warning icon | #FFB851 | #FFB851 |
| color.danger.solid (`--ds-color-danger-solid`) | Danger icon | #C13834 | #FF9087 |
| color.info.solid (`--ds-color-info-solid`) | Info icon | #1776B5 | #6ABCFF |
| duration.base (`--ds-duration-base`) | Enter and exit | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Enter curve | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| z.toast (`--ds-z-toast`) | Layer | 1500 | 1500 |

## Usage

To confirm, not to chat.

- **Do:** confirm what happened. Short, in the past tense, stating the result — at the bottom, where it doesn’t cover navigation.
- **Avoid:** an important error that disappears. If people need to fix it, the error stays on screen, near the field.
- **Tip:** Undo instead of confirm. For reversible actions, acting right away and offering undo is faster than a modal.
### Where to place it one position for the whole app

| Position | When to use |  |
| --- | --- | --- |
| Bottom center — `bottom-center` | Confirmations in general. Away from navigation and top actions. It’s the default. | Show |
| Bottom right — `bottom-end` | Screens with work in the center — editors, wide tables: the corner doesn’t cover the content. | Show |
| Top center — `top-center` | System notices that apply to the whole screen, like connection or session. | Show |
| Top right — `top-end` | Notifications coming from outside (messages, invites). It sits below the topbar, without covering its actions. | Show |
| Bottom left — `bottom-start` | Avoid in the app shell: on desktop it covers the sidebar footer. | Show |
| Top left — `top-start` | Rarely: it sits over the sidebar navigation. | Show |
