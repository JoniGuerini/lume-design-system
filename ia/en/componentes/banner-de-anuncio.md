# Announcement banner

Lume section: Components. Page: https://lumeui.dev/#/componentes/banner-de-anuncio

A strip at the top of the app for a message that applies to everyone: a new version, a change on the way. People close it and the banner remembers they saw it.

In numbers: tones: 5 · at a time: 1 · remembers: localStorage · ARIA role: region.

## Example

```html
<div class="ds-banner ds-banner--brand" aria-label="Announcement">
  <span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
  <p class="ds-banner__text"><strong>Lume 0.35</strong> Announcement banner and notification center. <a class="ds-link" href="/novidades">See what’s new</a></p>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close"><ds-icon name="x" size="16"></ds-icon></button>
</div>

<script type="module">
  import { createBanner } from 'https://lumeui.dev/v/1.13/lume.js';
  createBanner(document.querySelector('.ds-banner'), { id: 'lume-0.35' });
</script>
```

## Variants

The tone says what kind of message it is; the icon and text say the same as the color.

News `ds-banner--brand` — A new version, a feature that arrived. A solid strip in the brand tone: the only tone that truly stands out.

Neutral `ds-banner` — A message with no urgency that doesn’t need to draw attention.

Information `ds-banner--info` — Something that helps people understand what changed.

Warning `ds-banner--warning` — A change that needs action before a date. Not closable until the action is done.

Error `ds-banner--danger` — Something affecting the whole app right now. It stays until the problem is over.

Components — Feedback

At the top of the app `ds-banner--flush` — Flush with the edges, above the top bar: only the bottom line separates it.

Markup of the examples in this section:

```html
<div class="ds-banner ds-banner--brand" role="region" aria-label="Announcement">
<span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
<p class="ds-banner__text"><strong>Lume 0.35</strong>Announcement banner and notification center. <a class="ds-link" href="#/novidades">See what’s new</a></p>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="Close announcement"><ds-icon name="x"></ds-icon></button>
</div>

<div class="ds-banner" role="region" aria-label="Announcement">
<span class="ds-banner__icon"><ds-icon name="info"></ds-icon></span>
<p class="ds-banner__text">Lume’s Storybook now also shows the React components. <a class="ds-link" href="#/recursos/react">Storybook</a></p>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="Close announcement"><ds-icon name="x"></ds-icon></button>
</div>

<div class="ds-banner ds-banner--info" role="region" aria-label="Announcement">
<span class="ds-banner__icon"><ds-icon name="info"></ds-icon></span>
<p class="ds-banner__text">Each Lume line stays frozen at /v/0.xx/: update whenever you want. <a class="ds-link" href="#/primeiros-passos">Installation</a></p>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="Close announcement"><ds-icon name="x"></ds-icon></button>
</div>

<div class="ds-banner ds-banner--warning" role="region" aria-label="Announcement">
<span class="ds-banner__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<p class="ds-banner__text">From 1.0, public names only change with a console warning. <a class="ds-link" href="#/recursos/api">API</a></p>
</div>

<div class="ds-banner ds-banner--danger" role="region" aria-label="Announcement">
<span class="ds-banner__icon"><ds-icon name="alert-circle"></ds-icon></span>
<p class="ds-banner__text">Lume’s fonts didn’t load; text is using system fonts.</p>
</div>

<div class="ds-banner ds-banner--brand ds-banner--flush" role="region" aria-label="Announcement">
<span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
<p class="ds-banner__text"><strong>Lume 0.35</strong>Announcement banner and notification center. <a class="ds-link" href="#/novidades">See what’s new</a></p>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="Close announcement"><ds-icon name="x"></ds-icon></button>
</div>

<span class="ds-skeleton ds-skeleton--text"></span>
```

## Code

The markup is the whole banner; JavaScript only closes it and remembers.

```html
<div class="ds-banner ds-banner--brand" aria-label="Announcement">
  <span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
  <p class="ds-banner__text">
    <strong>Lume 0.35</strong> Announcement banner and notification center.
    <a class="ds-link" href="/novidades">See what’s new</a>
  </p>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close"><ds-icon name="x" size="16"></ds-icon></button>
</div>

<script type="module">
  import { createBanner } from 'https://lumeui.dev/v/1.13/lume.js';

  // a new id for each announcement: whoever closed the last one sees this one
  createBanner(document.querySelector('.ds-banner'), { id: 'lume-0.35' });
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

A message that’s on the page from the start, not an interrupting alert.

- Named region — It’s role="region" named “Announcement”: screen readers list it among the page landmarks. Don’t use role="alert": it didn’t just arrive.
- Close — Tab Enter — The button says “Close announcement”. Closed with focus inside, focus moves to what comes right after, so it isn’t lost.
- Not only color — Each tone has its own icon, and the text says what kind of message it is.
- One sentence — Short text and one link: the banner sits on every screen and can’t become required reading.

## Tokens used

The same tones as the alert.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Neutral background | #FFFFFF | #24221F |
| color.brand.solid (`--ds-color-brand-solid`) | News background | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | News text and icon | #F8FAFD | #1D2734 |
| color.info.subtle (`--ds-color-info-subtle`) | Information background | #F0F8FF | #6ABCFF21 |
| color.warning.subtle (`--ds-color-warning-subtle`) | Warning background | #FFF9F0 | #FFB85121 |
| color.danger.subtle (`--ds-color-danger-subtle`) | Error background | #FFF4F3 | #FF908721 |
| color.border.default (`--ds-color-border-default`) | Neutral border | #3E516633 | #FFFFFF1A |
| radius.lg (`--ds-radius-lg`) | Corners | 16 px | 16 px |

## Usage

Banner, alert, or toast?

- **Do:** messages for everyone. A new version, a change on the way, a problem affecting the whole app.
- **Avoid:** stacking banners. One at a time. A message for a single screen is an Alert; a response to an action is a Toast.
- **Tip:** Change the id for each announcement. Whoever closed “lume-0.34” sees “lume-0.35”. Same id, the banner stays closed.
