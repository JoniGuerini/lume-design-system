# Alert

Lume section: Components. Page: https://lumeui.dev/#/componentes/alerta

A message on the page itself, which stays visible until it no longer applies. To confirm something that just happened and then disappear, use the Toast.

In numbers: tones: 5 · sizes: 2 · JavaScript: 0 · roles: alert · status.

## Example

```html
<div class="ds-alert ds-alert--info" role="status">
  <span class="ds-alert__icon"><ds-icon name="info" size="18"></ds-icon></span>
  <div class="ds-alert__body">
    <p class="ds-alert__title">New version available</p>
    <p class="ds-alert__text">Update when you can; nothing you did is lost.</p>
  </div>
  <button class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-alert__close" aria-label="Close"><ds-icon name="x" size="16"></ds-icon></button>
</div>
```

## Tones

The tone never comes alone: the icon and text say the same as the color.

Markup of the examples in this section:

```html
<div class="ds-alert">
<span class="ds-alert__icon"><ds-icon name="info"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Plan change in December</p>
<p class="ds-alert__text">Current prices stay until the end of the month.</p>
</div>
</div>

<div class="ds-alert ds-alert--info">
<span class="ds-alert__icon"><ds-icon name="info"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">New version available</p>
<p class="ds-alert__text">Update when you can; nothing you did is lost.</p>
</div>
</div>

<div class="ds-alert ds-alert--success">
<span class="ds-alert__icon"><ds-icon name="check-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Payment confirmed</p>
<p class="ds-alert__text">The receipt was sent to your email.</p>
</div>
</div>

<div class="ds-alert ds-alert--warning">
<span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Your plan expires in 3 days</p>
<p class="ds-alert__text">Renew so you don’t lose access to your projects.</p>
</div>
</div>

<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">We couldn’t save</p>
<p class="ds-alert__text">Your changes are still here. Try again in a few seconds.</p>
</div>
</div>
```

## Variants

With an action to resolve it, or compact to fit inside a panel.

With an action `ds-alert__actions` — Gives the next step, instead of just warning.

Compact `ds-alert--compact` — A single line, for panels and bars.

Markup of the examples in this section:

```html
<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">We couldn’t save</p>
<p class="ds-alert__text">Your changes are still here. Try again in a few seconds.</p>
<div class="ds-alert__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">Try again</button></div>
</div>
</div>

<div class="ds-alert ds-alert--warning ds-alert--compact">
<span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Your plan expires in 3 days</p>
</div>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-alert__close" data-alert-close="" aria-label="Close"><ds-icon name="x"></ds-icon></button>
</div>
```

## Accessibility

The role depends on when the alert appears.

- After an action — `role="alert"` announces right away, as in a save error. Use it only for what’s urgent.
- A non-urgent notice — `role="status"` announces without interrupting what the person is hearing.
- Already on the page — Those already there on load need no role: they’re read in normal order.
- In React — `` picks on its own: `tone="danger"` becomes `role="alert"` and the other tones, `role="status"`. Pass `role` to change it, or `role="none"` for a notice that’s already on the page at load.
- Not only color — Each tone has its own icon and explanatory text.

## Tokens used

Tones follow the same pattern: background, outline, and icon.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Neutral background | #FFFFFF | #24221F |
| color.info.subtle (`--ds-color-info-subtle`) | Info background | #F0F8FF | #6ABCFF21 |
| color.success.subtle (`--ds-color-success-subtle`) | Success background | #EFFAF1 | #72CB8B21 |
| color.warning.subtle (`--ds-color-warning-subtle`) | Warning background | #FFF9F0 | #FFB85121 |
| color.danger.subtle (`--ds-color-danger-subtle`) | Danger background | #FFF4F3 | #FF908721 |
| color.danger.border (`--ds-color-danger-border`) | Danger outline | #FFCFCA | #FF90874D |
| color.danger.fg (`--ds-color-danger-fg`) | Danger icon | #C13834 | #FFB2AA |
| radius.lg (`--ds-radius-lg`) | Corners | 16 px | 16 px |

## Usage

Alert, Toast, or Modal?

- **Do:** what still applies. An expiring plan, an error to fix, a notice about this page.
- **Avoid:** passing confirmations. “Project saved” is for the Toast, which disappears on its own.
- **Tip:** Say what to do. A good alert explains what happened and what comes next.
