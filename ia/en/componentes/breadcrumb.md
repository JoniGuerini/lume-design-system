# Breadcrumb

Lume section: Components. Page: https://lumeui.dev/#/componentes/breadcrumb

Shows the path to the current page and lets you go back to any level. It’s what appears at the top of this site.

In numbers: JavaScript: 0 · separator: 14 px · on phones: current only · attribute: aria-current.

## Example

```html
<nav class="ds-breadcrumb" aria-label="You are here">
  <ol>
    <li><a href="#">Home</a></li>
    <li><ds-icon name="chevron-right" size="14"></ds-icon><a href="#">Projects</a></li>
    <li><ds-icon name="chevron-right" size="14"></ds-icon><span aria-current="page">Lume</span></li>
  </ol>
</nav>
```

## Variants

On narrow screens, only the current page appears, and the page title already orients people.

Two levels `ol` — The minimum that makes sense.

Several levels `ol` — Each upper level is a link.

Markup of the examples in this section:

```html
<nav class="ds-breadcrumb" aria-label="You are here"><ol>
<li><a href="#/componentes/breadcrumb" data-inert="">Home</a></li><li><ds-icon name="chevron-right"></ds-icon><span aria-current="page">Projects</span></li>
</ol></nav>

<nav class="ds-breadcrumb" aria-label="You are here"><ol>
<li><a href="#/componentes/breadcrumb" data-inert="">Home</a></li><li><ds-icon name="chevron-right"></ds-icon><a href="#/componentes/breadcrumb" data-inert="">Projects</a></li><li><ds-icon name="chevron-right"></ds-icon><a href="#/componentes/breadcrumb" data-inert="">Lume</a></li><li><ds-icon name="chevron-right"></ds-icon><span aria-current="page">Settings</span></li>
</ol></nav>
```

## Accessibility

A named navigation and an ordered list.

- Navigation name — The aria-label sets this navigation apart from the main menu.
- Current page — The last item has `aria-current="page"` and isn’t a link.
- Separators — The arrows are drawings, hidden from screen readers.
- Keyboard — Tab Enter — Ordinary links, in Tab order.

## Tokens used

Everything the breadcrumb consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.fg.subtle (`--ds-color-fg-subtle`) | Links and separator | #5C6C7F | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Current page and hover | #2B3847 | #F3EDE5 |
| text.label-md (`--ds-text-label-md`) | Text | 14/20 · medium | 14/20 · medium |

## Usage

When to use it and when to prefer something else.

- **Do:** content in levels. When people can go deep and want to go up a level.
- **Avoid:** step flows. For a sign-up in parts, the Stepper is right.
- **Tip:** It shows the structure. It’s the place in the hierarchy, not a history of what people visited.
