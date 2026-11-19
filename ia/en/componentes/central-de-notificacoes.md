# Notification center

Lume section: Components. Page: https://lumeui.dev/#/componentes/central-de-notificacoes

The bell that opens the list of what happened, for each person. The number shows how many are left to read; opening a notification marks it as read.

In numbers: base: Popover · icon tones: 6 · time: relative · ARIA role: dialog.

## Example

```html
<button type="button" class="ds-icon-btn"><ds-icon name="bell"></ds-icon></button>

<script type="module">
  import { createNotificationCenter } from 'https://lumeui.dev/v/1.12/lume.js';

  createNotificationCenter(document.querySelector('.ds-icon-btn'), {
    items: [
      { id: 'v035', title: 'Lume 0.35', time: new Date(), icon: 'megaphone', tone: 'brand', href: '/novidades' },
    ],
  });
</script>
```

## Variants

The panel is always the same; what changes is what’s in it.

With unread `read: false` — Bold title and the indicator dot. “Mark all as read” only appears when there’s something to mark.

All read `read: true` — No dot, regular-weight title, and the bell without a number.

Empty `items: []` — A short sentence, no illustration.

Without icon `no icon` — For lists where every notification is the same kind.

Markup of the examples in this section:

```html
<div class="ds-popover ds-notify-panel" role="group" aria-label="Notifications">
<div class="ds-notify">
<div class="ds-notify__header"><h3 class="ds-notify__title">Notifications</h3></div>
<ul class="ds-notify__list" role="list"><li class="ds-notify__item">
<a class="ds-notify__link" href="#">
<span class="ds-notify__icon ds-notify__icon--success"><ds-icon name="check-circle"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Storybook updated</span><span class="ds-notify__text">The stories for the new components are there.</span><time class="ds-notify__time">2 hours ago</time></span>
</a>
</li><li class="ds-notify__item">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__icon ds-notify__icon--brand"><ds-icon name="megaphone"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.34</span><span class="ds-notify__text">Divider, link, and circular progress.</span><time class="ds-notify__time">yesterday</time></span>
</a>
</li><li class="ds-notify__item">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__icon"><ds-icon name="megaphone"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.33</span><span class="ds-notify__text">Rating and toolbar.</span><time class="ds-notify__time">Nov 9</time></span>
</a>
</li></ul>
</div>
</div>

<div class="ds-popover ds-notify-panel" role="group" aria-label="Notifications">
<div class="ds-notify">
<div class="ds-notify__header"><h3 class="ds-notify__title">Notifications</h3></div>
<div class="ds-notify__empty"><ds-icon name="bell"></ds-icon><span>No notifications yet.</span></div>
</div>
</div>

<div class="ds-popover ds-notify-panel" role="group" aria-label="Notifications">
<div class="ds-notify">
<div class="ds-notify__header"><h3 class="ds-notify__title">Notifications</h3><span class="ds-inline-action">Mark all as read</span></div>
<ul class="ds-notify__list" role="list"><li class="ds-notify__item" data-unread="">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.35</span><span class="ds-notify__text">Announcement banner and notification center.</span><time class="ds-notify__time">4 minutes ago</time></span>
<span class="ds-dot ds-notify__dot"></span>
</a>
</li><li class="ds-notify__item" data-unread="">
<a class="ds-notify__link" href="#">
<span class="ds-notify__body"><span class="ds-notify__item-title">Storybook updated</span><span class="ds-notify__text">The stories for the new components are there.</span><time class="ds-notify__time">2 hours ago</time></span>
<span class="ds-dot ds-notify__dot"></span>
</a>
</li></ul>
</div>
</div>
```

## States

The number on the bell uses the indicator color; above 99, it becomes “99+”.

Markup of the examples in this section:

```html
<span class="ds-icon-btn ds-notify-trigger"><ds-icon name="bell"></ds-icon></span>

<span class="ds-icon-btn ds-notify-trigger"><ds-icon name="bell"></ds-icon><span class="ds-notify-trigger__count">2</span></span>

<span class="ds-icon-btn ds-notify-trigger"><ds-icon name="bell"></ds-icon><span class="ds-notify-trigger__count">99+</span></span>

<ul class="ds-notify__list" role="list"><li class="ds-notify__item" data-unread="">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__icon ds-notify__icon--brand"><ds-icon name="megaphone"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.35</span><span class="ds-notify__text">Announcement banner and notification center.</span><time class="ds-notify__time">4 minutes ago</time></span>
<span class="ds-dot ds-notify__dot"></span>
</a>
</li></ul>

<ul class="ds-notify__list" role="list"><li class="ds-notify__item">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__icon ds-notify__icon--brand"><ds-icon name="megaphone"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.35</span><span class="ds-notify__text">Announcement banner and notification center.</span><time class="ds-notify__time">4 minutes ago</time></span>
</a>
</li></ul>
```

## Code

You provide the bell and the list; JavaScript draws the panel and the number and handles what’s read.

```html
<button type="button" class="ds-icon-btn"><ds-icon name="bell"></ds-icon></button>

<script type="module">
  import { createNotificationCenter } from 'https://lumeui.dev/v/1.12/lume.js';

  const center = createNotificationCenter(document.querySelector('.ds-icon-btn'), {
    items: [
      { id: 'v035', title: 'Lume 0.35', text: 'Announcement banner and notification center.', time: new Date(),
        icon: 'megaphone', tone: 'brand', href: '/novidades' },
    ],
    onChange: (items, unread) => save(items),
  });

  // a new one arrived (over a WebSocket, for example)
  center.add({ id: 'v036', title: 'Lume 0.36', time: new Date() });
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

A popover with a list of links: nothing new to learn.

- Bell with the count — The bell’s name includes how many are unread: “Notifications, 2 unread”. The visible number is aria-hidden.
- Panel — Tab Enter Esc — A non-modal role="dialog" with a name. Opening moves focus inside; Esc closes and returns focus to the bell.
- Unread — The dot is visual; each unread item says “Unread” to screen readers.
- What arrives — add() announces “New notification: …” in a status region, without stealing focus.

## Tokens used

Everything the center consumes, on top of the Popover.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.brand.indicator (`--ds-color-brand-indicator`) | Count and unread dot | #C97B63 | #DE9680 |
| color.bg.hover (`--ds-color-bg-hover`) | Item on hover | #3E51660D | #FFFFFF0D |
| color.bg.muted (`--ds-color-bg-muted`) | Neutral icon background | #DAE0E8 | #3D3B38 |
| color.fg.muted (`--ds-color-fg-muted`) | Text and read title | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Time | #53657A | #9C9792 |
| color.border.subtle (`--ds-color-border-subtle`) | Header line | #3E516624 | #FFFFFF0F |
| radius.md (`--ds-radius-md`) | Item corners | 12 px | 12 px |

## Usage

Notification, toast, or banner?

- **Do:** what people will want to revisit. A new version, something that changed in what’s theirs. A notification stays; a toast disappears.
- **Avoid:** notifying what people just did. “Saved” is a toast. In the center, only what happened while they were doing something else.
- **Tip:** A title that stands alone. Someone reading only the title should understand what happened. The text completes it.
