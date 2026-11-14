# Carousel

Lume section: Components. Page: https://lumeui.dev/#/componentes/carrossel

Shows highlights or a gallery one at a time, in a single space. Use it when space matters more than order; if everything matters, prefer a grid.

In numbers: per view: 1+ · keys: 4 · dot: 6 px · swipe: native.

## Example

```html
<section class="ds-carousel" aria-label="Highlights">
  <div class="ds-carousel__viewport">
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
  </div>
</section>

<script type="module">
  import { createCarousel } from 'https://lumeui.dev/v/0.40/lume.js';
  createCarousel(document.querySelector('.ds-carousel'));
</script>
```

## Variants

How many show at once comes from CSS, in `--ds-carousel-per-view`: you can change it per screen width without touching JavaScript.

Highlight `ds-carousel` — One slide at a time, with title and text. Good for news and welcomes.

Gallery `ds-carousel--peek` — Two at once (one on phones), with the edge of the next one in view: people can see there’s more.

## States

The current dot stretches and darkens: it changes shape, not just color. Without `loop`, the arrow at the end is disabled.

Markup of the examples in this section:

```html
<div class="ds-carousel__bar">
<div class="ds-carousel__dots"><button type="button" class="ds-carousel__dot" aria-current="true" aria-label="1"></button><button type="button" class="ds-carousel__dot" aria-label="2"></button><button type="button" class="ds-carousel__dot" aria-label="3"></button><button type="button" class="ds-carousel__dot" aria-label="4"></button></div>
<span class="ds-carousel__count">1 / 4</span>
<div class="ds-carousel__nav">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" disabled="" aria-label="prev"><ds-icon name="chevron-left"></ds-icon></button>
<button type="button" class="ds-icon-btn ds-icon-btn--muted" aria-label="next"><ds-icon name="chevron-right"></ds-icon></button>
</div>
</div>

<div class="ds-carousel__bar">
<div class="ds-carousel__dots"><button type="button" class="ds-carousel__dot" aria-label="1"></button><button type="button" class="ds-carousel__dot" aria-current="true" aria-label="2"></button><button type="button" class="ds-carousel__dot" aria-label="3"></button><button type="button" class="ds-carousel__dot" aria-label="4"></button></div>
<span class="ds-carousel__count">2 / 4</span>
<div class="ds-carousel__nav">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" aria-label="prev"><ds-icon name="chevron-left"></ds-icon></button>
<button type="button" class="ds-icon-btn ds-icon-btn--muted" aria-label="next"><ds-icon name="chevron-right"></ds-icon></button>
</div>
</div>
```

## Code

The slides are yours; the carousel adds the bottom bar, the keyboard, and the labels.

```html
<section class="ds-carousel" aria-label="Highlights">
  <div class="ds-carousel__viewport">
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
  </div>
</section>

<script type="module">
  import { createCarousel } from 'https://lumeui.dev/v/0.40/lume.js';

  const carousel = createCarousel(document.querySelector('.ds-carousel'), {
    loop: true,
    onChange: (index) => console.log(index),
  });
  carousel.next();
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

It follows the ARIA carousel pattern. Give the carousel a name with aria-label.

- Name and role — Screen readers say “carousel” and, on each slide, “2 of 5”.
- Only what’s in view — Slides out of view are inert: Tab never lands on a hidden link.
- Keyboard — ← → Home End — With focus on the slide area, arrow keys switch and Home and End go to the ends.
- Autoplay — Always with a pause button, it stops on hover or focus and never starts with reduced motion. While it plays, screen readers don’t announce each change.
- Dots — Each dot is a “Go to slide 3” button, with aria-current on the current one and a touch area bigger than the drawing.

## Tokens used

Everything the carousel consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.fg.default (`--ds-color-fg-default`) | Current dot and title | #2B3847 | #F3EDE5 |
| color.border.strong (`--ds-color-border-strong`) | Dots | #3E51664D | #FFFFFF29 |
| color.fg.muted (`--ds-color-fg-muted`) | Dot on hover, count, and text | #46586E | #CEC8C1 |
| color.bg.surface (`--ds-color-bg-surface`) | Highlight slide background | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Slide outline | #3E516624 | #FFFFFF0F |
| color.border.focus (`--ds-color-border-focus`) | Focus on the slide area | #53657A | #C0CAD6 |
| space.150 (`--ds-space-150`) | Space between slides | 12 px | 12 px |
| radius.xl (`--ds-radius-xl`) | Area and slide corners | 20 px | 20 px |

## Usage

When to use it and when to prefer something else.

- **Do:** 3 to 7 slides. Similar things, where seeing one at a time doesn’t get in the way.
- **Avoid:** hiding what matters. Few people go past the second slide. What everyone needs to see goes outside the carousel.
- **Tip:** Autoplay only if needed. Moving on its own pulls attention away from reading. If you use it, allow at least 5 seconds per slide.
