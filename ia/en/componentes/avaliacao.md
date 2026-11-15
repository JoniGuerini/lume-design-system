# Rating

Lume section: Components. Page: https://lumeui.dev/#/componentes/avaliacao

Stars to give a score or show the average. To give a score, each star is a radio: the form sends the value with no extra code.

In numbers: forms: 2 · sizes: 3 · half star: when showing · ARIA role: radiogroup.

## Example

```html
<div class="ds-rating" aria-label="How would you rate this page?"></div>

<script type="module">
  import { createRating } from 'https://lumeui.dev/v/1.3/lume.js';
  createRating(document.querySelector('.ds-rating'), { name: 'score', value: 4 });
</script>
```

## Variants

Giving a score uses `createRating`. Just showing uses `ratingHtml`, which takes any decimal and cuts the star at the right point.

How would you rate this page?

Give a score `createRating` — In a form, with the field name. The question is the group label.

Display only `ratingHtml` — Average with a half star, the number next to it, and how many scores.

Sizes `ds-rating--sm · ds-rating--lg` — 16 px in lists and cards, 20 px by default, 28 px when the score is what the screen is about.

## States

A lit star uses the indicator color. On hover, the stars up to the pointer light up before the click.

## Code

To give a score, an empty element; JavaScript adds the stars. To show one, the markup comes ready.

```html
<div class="ds-rating" aria-label="How would you rate this page?"></div>
<span data-media></span>

<script type="module">
  import { createRating, ratingHtml } from 'https://lumeui.dev/v/1.3/lume.js';

  createRating(document.querySelector('.ds-rating'), {
    name: 'score',
    onChange: (value) => console.log(value),
  });
  document.querySelector('[data-media]').innerHTML = ratingHtml(4.5, { text: true, count: 128 });
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Giving a score is a radio group; showing one is an image with the score as text.

- Name — The group carries the question (aria-label or aria-labelledby) and each star says “3 stars”.
- Keyboard — Tab ← → — Tab enters the group and the arrow keys change the score, like any radio. From the keyboard, the score is never cleared by accident.
- Display only — It becomes role="img" with “Rated 4.5 out of 5”: screen readers read the score once, not five stars.
- Not just color — When showing, add the number next to it (text: true) when half a star matters.

## Tokens used

Everything the rating consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.brand.indicator (`--ds-color-brand-indicator`) | Lit star | #C97B63 | #DE9680 |
| color.border.default (`--ds-color-border-default`) | Unlit star | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Unlit star on hover | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Keyboard focus | #53657A | #C0CAD6 |
| color.fg.default (`--ds-color-fg-default`) | Score number | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | How many scores | #46586E | #CEC8C1 |
| size.icon.sm (`--ds-size-icon-sm`) | Small star | 16 px | 16 px |
| size.icon.md (`--ds-size-icon-md`) | Default star | 20 px | 20 px |

## Usage

When to use it and when to prefer something else.

- **Do:** show how many scores. A 5 average from two scores says less than 4.5 from a hundred. The number in parentheses tells that.
- **Avoid:** stars for picking an option. Stars are a satisfaction score. To choose between different things, use radios or a segmented control.
- **Tip:** Five stars are enough. Bigger scales ask for a precision people don’t have. Keep the default of 5.
