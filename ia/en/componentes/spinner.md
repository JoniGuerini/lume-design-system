# Spinner

Lume section: Components. Page: https://lumeui.dev/#/componentes/spinner

Says something is happening during a short wait. It inherits the text color, so it works anywhere, including inside buttons.

In numbers: JavaScript: 0 · sizes: 16 · 20 · 32 · turn: 0,8 s · ARIA role: status.

## Example

```html
<span class="ds-spinner" role="status" aria-label="Loading"></span>
```

## Variants

Whenever it fits, say what’s happening.

Loading the orders…

With text `ds-spinner` — Best for waits over a second.

Inside a button `aria-busy` — The button stays busy and takes no further clicks.

Sizes `--sm · --lg` — 16, 20, and 32 px. The largest suits a whole area.

Markup of the examples in this section:

```html
<button type="button" class="ds-btn ds-btn--primary" aria-busy="true"><span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>Saving</button>

<span class="ds-spinner ds-spinner--sm" role="status" aria-label="Loading"></span>

<span class="ds-spinner" role="status" aria-label="Loading"></span>

<span class="ds-spinner ds-spinner--lg" role="status" aria-label="Loading"></span>
```

## Accessibility

A spinning drawing says nothing on its own.

- With a name — Alone, it takes `role="status"` and `aria-label`. Next to text, use `aria-hidden`.
- Busy button — `aria-busy="true"` prevents repeat clicks, and the text says what’s happening: “Saving”.
- Reduced motion — The ring stops spinning. That’s why the text matters even more.

## Tokens used

The color comes from the surrounding text; the rest is shape.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.fg.default (`--ds-color-fg-default`) | Most common color | #2B3847 | #F3EDE5 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | On the primary button | #F8FAFD | #1D2734 |
| radius.full (`--ds-radius-full`) | Ring | 9999 px | 9999 px |

## Usage

When to use it and when to prefer something else.

- **Do:** 1 to 10 seconds. Saving, loading a panel, confirming a payment.
- **Avoid:** instant waits. Under a second, nothing: a flashing spinner hurts more than it helps.
- **Tip:** Know the shape? Skeleton. When you know how the content will look, the Skeleton feels faster.
