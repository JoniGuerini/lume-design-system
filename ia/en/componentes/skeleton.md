# Skeleton

Lume section: Components. Page: https://lumeui.dev/#/componentes/skeleton

Shows the shape of the content before it arrives. The screen doesn’t jump when data loads, and the wait feels shorter.

In numbers: JavaScript: 0 · shapes: 3 · pulse: 1,4 s · shine: none.

## Example

```html
<div aria-busy="true" role="status" aria-label="Loading">
  <div class="fc-skel-row">
  <span class="ds-skeleton ds-skeleton--circle">
  </span>
  <div class="fc-skel-lines">
  <span class="ds-skeleton ds-skeleton--text" style="--w:55%">
  </span>
  <span class="ds-skeleton ds-skeleton--text" style="--w:80%">
  </span>
  </div>
  </div>
</div>
```

## Variants

Build the shape from three pieces: line, circle, and block.

Person `ds-skeleton--circle` — An avatar and two lines.

Card `ds-skeleton` — A block with text below.

Text `ds-skeleton--text` — Different widths, like a real paragraph.

Markup of the examples in this section:

```html
<span class="ds-skeleton ds-skeleton--circle"></span>

<span class="ds-skeleton ds-skeleton--text"></span>

<span class="ds-skeleton"></span>
```

## Accessibility

The shapes say nothing to screen readers: the container does the telling.

- Say it’s loading — On the container, `aria-busy="true"` and a name. When data arrives, remove the attribute.
- No focus — Shapes aren’t interactive and stay out of Tab order.
- Reduced motion — The pulse stops, and the shape holds still.

## Tokens used

Everything the skeleton consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.muted (`--ds-color-bg-muted`) | Shapes | #DAE0E8 | #3D3B38 |
| radius.md (`--ds-radius-md`) | Block | 12 px | 12 px |
| radius.xs (`--ds-radius-xs`) | Line | 6 px | 6 px |
| radius.full (`--ds-radius-full`) | Circle | 9999 px | 9999 px |

## Usage

When to use it and when to prefer something else.

- **Do:** the real shape. Copy the final content’s size, so nothing jumps when it arrives.
- **Avoid:** long waits. Past 10 seconds, say what’s happening: use the Progress bar.
- **Tip:** Don’t invent what won’t come. If the list may come back empty, go straight to the Empty state when it ends.
