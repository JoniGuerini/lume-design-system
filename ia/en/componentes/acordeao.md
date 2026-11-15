# Accordion

Lume section: Components. Page: https://lumeui.dev/#/componentes/acordeao

Sections that open and close in place. Good for FAQs and details only some people want to read.

In numbers: JavaScript: 0 · looks: 2 · base: details · minimum height: 52 px.

## Example

```html
<div class="ds-accordion">
  <details class="ds-accordion__item" name="faq" open>
    <summary class="ds-accordion__head">
      <span>What’s included in the plan?</span>
      <ds-icon name="chevron-down" size="18"></ds-icon>
    </summary>
    <div class="ds-accordion__body">All components, tokens, and updates.</div>
  </details>
  <!-- more items -->
</div>
```

## Variants

With the same `name` on items, opening one closes the others. Without it, several stay open.

With lines `ds-accordion` — Discreet, for the middle of a page.

In cards `ds-accordion--card` — Each item is a surface. Good on the page background.

Markup of the examples in this section:

```html
<div class="ds-accordion">
<details class="ds-accordion__item" name="ac-lines" open="">
<summary class="ds-accordion__head"><span>What’s included in the plan?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">All components, tokens, and updates.</div>
</details><details class="ds-accordion__item" name="ac-lines">
<summary class="ds-accordion__head"><span>Can I cancel anytime?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Yes, with no fee. Access continues until the end of the period.</div>
</details><details class="ds-accordion__item" name="ac-lines">
<summary class="ds-accordion__head"><span>How do I reach support?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">By chat, on business days, or from your account’s email.</div>
</details>
</div>

<div class="ds-accordion ds-accordion--card">
<details class="ds-accordion__item" name="ac-card" open="">
<summary class="ds-accordion__head"><span>What’s included in the plan?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">All components, tokens, and updates.</div>
</details><details class="ds-accordion__item" name="ac-card">
<summary class="ds-accordion__head"><span>Can I cancel anytime?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Yes, with no fee. Access continues until the end of the period.</div>
</details><details class="ds-accordion__item" name="ac-card">
<summary class="ds-accordion__head"><span>How do I reach support?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">By chat, on business days, or from your account’s email.</div>
</details>
</div>
```

## States

Hover and focus can be forced with `data-state` on the header.

Markup of the examples in this section:

```html
<div class="ds-accordion"><details class="ds-accordion__item"><summary class="ds-accordion__head"><span>What’s included in the plan?</span><ds-icon name="chevron-down"></ds-icon></summary><div class="ds-accordion__body">All components, tokens, and updates.</div></details></div>

<div class="ds-accordion"><details class="ds-accordion__item" open=""><summary class="ds-accordion__head"><span>What’s included in the plan?</span><ds-icon name="chevron-down"></ds-icon></summary><div class="ds-accordion__body">All components, tokens, and updates.</div></details></div>
```

## Accessibility

The browser already handles the role, state, and keyboard.

- Keyboard — Tab Enter Space — Tab moves between headings; Enter or Space open and close.
- Announced state — Screen readers say “collapsed” or “expanded” with no extra attribute.
- Findable — Ctrl F — In current browsers, find-in-page opens the item containing the text.
- Reduced motion — With `prefers-reduced-motion`, it opens without animating.

## Tokens used

Everything the accordion consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.border.subtle (`--ds-color-border-subtle`) | Lines and card outline | #3E516624 | #FFFFFF0F |
| color.bg.surface (`--ds-color-bg-surface`) | Card background | #FFFFFF | #24221F |
| color.fg.default (`--ds-color-fg-default`) | Heading | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Content | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Chevron | #53657A | #9C9792 |
| duration.base (`--ds-duration-base`) | Open and close | 200ms | 200ms |

## Usage

When to use it and when to prefer something else.

- **Do:** optional content. FAQs and details not everyone needs to read.
- **Avoid:** essentials. What everyone needs to see shouldn’t hide behind a click.
- **Tip:** Headings that say it all. People decide to open based on the heading: write the whole question.
