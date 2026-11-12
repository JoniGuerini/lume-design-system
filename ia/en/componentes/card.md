# Card

Lume section: Components. Page: https://lumeui.dev/#/componentes/card

The basic surface for grouping content. It sets things apart with a background and thin outline, no shadow.

In numbers: JavaScript: 0 · corners: 20 px · padding: 24 px · shadow: none.

## Example

```html
<div class="ds-card">
  <p class="ds-card__title">Monthly report</p>
  <p class="ds-card__text">Revenue, new customers, and what changed since last month.</p>
</div>
```

## Variants

A card is just a container; the clickable one is a whole link.

Simple `ds-card` — Groups related content.

Clickable `ds-card--link` — The outline strengthens on hover. There’s just one destination.

With an action `inside the card` — Buttons inside an ordinary card, without the whole card being a link.

Markup of the examples in this section:

```html
<div class="ds-card"><p class="ds-card__title">Monthly report</p><p class="ds-card__text">Revenue, new customers, and what changed since last month.</p></div>

<a class="ds-card ds-card--link" href="#/componentes/card" data-inert=""><p class="ds-card__title">Monthly report</p><p class="ds-card__text">Revenue, new customers, and what changed since last month.</p></a>

<div class="ds-card"><p class="ds-card__title">Monthly report</p><p class="ds-card__text">Revenue, new customers, and what changed since last month.</p><div><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm"><ds-icon name="download"></ds-icon>Download</button></div></div>
```

## States

Only the clickable one changes. Hover and focus can be forced with `data-state`.

Markup of the examples in this section:

```html
<a class="ds-card ds-card--link" href="#/componentes/card"><p class="ds-card__title">Monthly report</p><p class="ds-card__text">Revenue, new customers, and what changed since last month.</p></a>
```

## Accessibility

The card itself means nothing to screen readers; the content is what matters.

- Headings in order — If the card starts a section, use a real heading, at the page’s right level.
- A single link — On the clickable one, the `a` is the whole card. Don’t put buttons or other links inside it.
- Focus — Tab Enter — The ring appears around the whole card, by keyboard.

## Tokens used

Everything the card consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Background | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Outline | #3E516624 | #FFFFFF0F |
| color.border.strong (`--ds-color-border-strong`) | Outline on hover | #3E51664D | #FFFFFF29 |
| radius.xl (`--ds-radius-xl`) | Corners | 20 px | 20 px |
| text.heading-sm (`--ds-text-heading-sm`) | Title | 17/24 · semibold | 17/24 · semibold |

## Usage

When to use it and when to prefer something else.

- **Do:** repeating groups. A grid of projects, results, or options.
- **Avoid:** a card inside a card. Too many layers feel heavy. Inside a card, separate with space or a line.
- **Tip:** Card, Panel, or Modal?. A Card groups; a Panel is the surface of a task; a Modal interrupts.
