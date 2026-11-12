# Timeline

Lume section: Components. Page: https://lumeui.dev/#/componentes/linha-do-tempo

Events in order, like an order’s history or a project’s activity. Shows what happened, when, and who did it.

In numbers: JavaScript: 0 · tones: 5 · marker: 24 px · base: ol.

## Example

```html
<ol class="ds-timeline">
  <li class="ds-timeline__item" data-tone="success">
    <span class="ds-timeline__marker"><ds-icon name="check" size="14"></ds-icon></span>
    <div class="ds-timeline__content">
      <p class="ds-timeline__title">Order delivered</p>
      <p class="ds-timeline__text">Received by Ana</p>
      <time class="ds-timeline__time" datetime="2026-11-08T14:20">Nov 8, 02:20 PM</time>
    </div>
  </li>
</ol>
```

## Variants

The tone goes in `data-tone`, on the item. Save color for what deserves attention.

With icons `ds-timeline__marker` — The icon says the event type.

With dots `empty marker` — When all events are of the same type.

Markup of the examples in this section:

```html
<ol class="ds-timeline"><li class="ds-timeline__item" data-tone="success">
<span class="ds-timeline__marker"><ds-icon name="check"></ds-icon></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Order delivered</p>
<p class="ds-timeline__text">Received by Ana</p>
<time class="ds-timeline__time" datetime="2026-11-08T14:20">Nov 8, 02:20 PM</time>
</div>
</li><li class="ds-timeline__item" data-tone="brand">
<span class="ds-timeline__marker"><ds-icon name="package"></ds-icon></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Out for delivery</p>
<p class="ds-timeline__text">Expected today</p>
<time class="ds-timeline__time" datetime="2026-11-08T08:05">Nov 8, 08:05 AM</time>
</div>
</li><li class="ds-timeline__item">
<span class="ds-timeline__marker"><ds-icon name="file-text"></ds-icon></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Invoice issued</p>
<time class="ds-timeline__time" datetime="2026-11-07T17:42">Nov 7, 05:42 PM</time>
</div>
</li><li class="ds-timeline__item">
<span class="ds-timeline__marker"><ds-icon name="clock"></ds-icon></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Order created</p>
<p class="ds-timeline__text">By Bruno</p>
<time class="ds-timeline__time" datetime="2026-11-07T09:30">Nov 7, 09:30 AM</time>
</div>
</li></ol>

<ol class="ds-timeline"><li class="ds-timeline__item" data-tone="success">
<span class="ds-timeline__marker"></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Order delivered</p>
<p class="ds-timeline__text">Received by Ana</p>
<time class="ds-timeline__time" datetime="2026-11-08T14:20">Nov 8, 02:20 PM</time>
</div>
</li><li class="ds-timeline__item" data-tone="brand">
<span class="ds-timeline__marker"></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Out for delivery</p>
<p class="ds-timeline__text">Expected today</p>
<time class="ds-timeline__time" datetime="2026-11-08T08:05">Nov 8, 08:05 AM</time>
</div>
</li><li class="ds-timeline__item">
<span class="ds-timeline__marker"></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Invoice issued</p>
<time class="ds-timeline__time" datetime="2026-11-07T17:42">Nov 7, 05:42 PM</time>
</div>
</li><li class="ds-timeline__item">
<span class="ds-timeline__marker"></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Order created</p>
<p class="ds-timeline__text">By Bruno</p>
<time class="ds-timeline__time" datetime="2026-11-07T09:30">Nov 7, 09:30 AM</time>
</div>
</li></ol>
```

## Accessibility

It’s an ordered list, with the date in its own element.

- Order — Use `ol`: screen readers say how many events there are and which one it’s on.
- A real date — `time` with `datetime` keeps the date machine-readable too.
- Not only color — The meaning is in the title; tone and icon only reinforce it.

## Tokens used

Everything the timeline consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.muted (`--ds-color-bg-muted`) | Neutral marker | #DAE0E8 | #3D3B38 |
| color.brand.solid (`--ds-color-brand-solid`) | Brand marker | #3E5166 | #C0CAD6 |
| color.success.subtle (`--ds-color-success-subtle`) | Success marker | #EFFAF1 | #72CB8B21 |
| color.border.default (`--ds-color-border-default`) | Line between events | #3E516633 | #FFFFFF1A |
| color.fg.subtle (`--ds-color-fg-subtle`) | Date | #5C6C7F | #9C9792 |
| radius.full (`--ds-radius-full`) | Marker | 9999 px | 9999 px |

## Usage

When to use it and when to prefer something else.

- **Do:** what already happened. Order history, activity, and audit logs, newest first.
- **Avoid:** what’s still to do. Steps in a flow call for the Stepper.
- **Tip:** Careful with relative dates. “2 hours ago” is great for recent events; otherwise, show the date.
