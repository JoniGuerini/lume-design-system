# Pagination

Lume section: Components. Page: https://lumeui.dev/#/componentes/paginacao

Splits a long list into pages and shows where the person is. Use it when people need to return to a spot or compare pages.

In numbers: height: 36 px · versions: 2 · sibling pages: your choice · role: navigation.

## Example

```html
<nav class="ds-pagination"></nav>

<script type="module">
  import { createPagination } from 'https://lumeui.dev/v/0.29/lume.js';
  createPagination(document.querySelector('.ds-pagination'), {
    total: 248,
    pageSizes: [10, 25, 50],
    onChange: ({ page, pageSize }) => carregar(page, pageSize),
  });
</script>
```

## Variants

Parts appear as needed: a few pages don’t need an ellipsis.

A few pages `total: 42` — Up to seven pages stay visible, with no ellipsis.

Many pages `total: 2480` — The first and last are always visible.

Items per page `pageSizes` — When changed, people keep seeing the same item.

With links `hrefFor` — Each page is an address: you can share it and open it in another tab.

Markup of the examples in this section:

```html
<nav class="ds-pagination" data-demo="few" aria-label="Pagination">
<p class="ds-pagination__summary" role="status">1–10 of 42</p>
<ul class="ds-pagination__list" role="list">
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Previous page" data-page="0" disabled=""><ds-icon name="chevron-left"></ds-icon></button></li>
<li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 1" aria-current="page" data-page="1">1</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 2" data-page="2">2</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 3" data-page="3">3</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 4" data-page="4">4</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 5" data-page="5">5</button></li>
<li class="ds-pagination__compact" aria-hidden="true">1 of 5</li>
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Next page" data-page="2"><ds-icon name="chevron-right"></ds-icon></button></li>
</ul></nav>

<nav class="ds-pagination" data-demo="many" aria-label="Pagination">
<p class="ds-pagination__summary" role="status">111–120 of 2,480</p>
<ul class="ds-pagination__list" role="list">
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Previous page" data-page="11"><ds-icon name="chevron-left"></ds-icon></button></li>
<li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 1" data-page="1">1</button></li><li class="ds-pagination__gap" aria-hidden="true">…</li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 11" data-page="11">11</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 12" aria-current="page" data-page="12">12</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 13" data-page="13">13</button></li><li class="ds-pagination__gap" aria-hidden="true">…</li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 248" data-page="248">248</button></li>
<li class="ds-pagination__compact" aria-hidden="true">12 of 248</li>
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Next page" data-page="13"><ds-icon name="chevron-right"></ds-icon></button></li>
</ul></nav>

<nav class="ds-pagination" data-demo="links" aria-label="Pagination">
<p class="ds-pagination__summary" role="status">11–20 of 90</p>
<ul class="ds-pagination__list" role="list">
<li><a class="ds-pagination__page ds-pagination__arrow" aria-label="Previous page" href="#/componentes/paginacao?pagina=1" data-page="1"><ds-icon name="chevron-left"></ds-icon></a></li>
<li class="ds-pagination__number"><a class="ds-pagination__page" aria-label="Page 1" href="#/componentes/paginacao?pagina=1" data-page="1">1</a></li><li class="ds-pagination__number"><a class="ds-pagination__page" aria-label="Page 2" aria-current="page" href="#/componentes/paginacao?pagina=2" data-page="2">2</a></li><li class="ds-pagination__number"><a class="ds-pagination__page" aria-label="Page 3" href="#/componentes/paginacao?pagina=3" data-page="3">3</a></li><li class="ds-pagination__number"><a class="ds-pagination__page" aria-label="Page 4" href="#/componentes/paginacao?pagina=4" data-page="4">4</a></li><li class="ds-pagination__number"><a class="ds-pagination__page" aria-label="Page 5" href="#/componentes/paginacao?pagina=5" data-page="5">5</a></li><li class="ds-pagination__gap" aria-hidden="true">…</li><li class="ds-pagination__number"><a class="ds-pagination__page" aria-label="Page 9" href="#/componentes/paginacao?pagina=9" data-page="9">9</a></li>
<li class="ds-pagination__compact" aria-hidden="true">2 of 9</li>
<li><a class="ds-pagination__page ds-pagination__arrow" aria-label="Next page" href="#/componentes/paginacao?pagina=3" data-page="3"><ds-icon name="chevron-right"></ds-icon></a></li>
</ul></nav>
```

## States

Hover and focus can be forced with `data-state`.

Markup of the examples in this section:

```html
<button type="button" class="ds-pagination__page">3</button>

<button type="button" class="ds-pagination__page" aria-current="page">3</button>

<button type="button" class="ds-pagination__page" disabled="">3</button>
```

## Code

`onChange` reports the page and size; you load the data.

```html
import { createPagination } from 'https://lumeui.dev/v/0.29/lume.js';

const pagination = createPagination(document.querySelector('.ds-pagination'), {
  total: 248,
  pageSizes: [10, 25, 50],
  onChange: ({ page, pageSize }) => carregar(page, pageSize),
});

pagination.setTotal(100); // the total changed (a filter, for example)
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

They’re ordinary links or buttons, inside a named navigation.

- Current page — Marked with aria-current="page", besides the visual highlight.
- Full names — Screen readers hear “Page 3” and “Next page”, not just “3” and an arrow.
- Announced change — The “11–20 of 248” range is in role="status".
- Focus stays put — Tab Enter — When the page changes, focus stays on the arrow or moves to the current page.

## Tokens used

Everything pagination consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Numbers and summary | #46586E | #CEC8C1 |
| color.bg.hover (`--ds-color-bg-hover`) | Number on hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Current page | #3E516612 | #C0CAD61A |
| color.border.default (`--ds-color-border-default`) | Current outline | #3E516633 | #FFFFFF1A |
| color.fg.disabled (`--ds-color-fg-disabled`) | Arrow with nowhere to go | #93A0B0 | #605D59 |
| radius.sm (`--ds-radius-sm`) | Corners | 8 px | 8 px |

## Usage

When to use it and when to prefer something else.

- **Do:** tables and results. When people look for something and want to return to a spot in the list.
- **Avoid:** a few items. A single page doesn’t need pagination. Hide the component.
- **Tip:** Go back to the top. When the page changes, take people to the start of the list.
