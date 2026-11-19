# Data list

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/listagem

The screen every product has: a list people search, filter, sort, and handle in bulk. Everything in view, nothing lost on the way back, and every action reversible.

In numbers: primary action: 1 · filter row: 1 · “are you sure?”: 0.

## Live example

The people in a workspace. Search, filter, sort by the header, check a few, and act in bulk.

- Check two people: the bulk bar takes the filters’ place, with the count.
- Remove them and use “Undo” in the notice: they come back to the same place.
- Search “xyz”: the empty state says it’s the filter and offers to clear it.

Markup of the examples in this section:

```html
<div class="ds-filters" role="search" aria-label="Filter people">
<div class="ds-filters__bar">
<label class="ds-field ds-filters__search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" data-filter-search="" placeholder="Search by name or email" aria-label="Search people by name or email" autocomplete="off" spellcheck="false">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" data-filter-clear-search="" aria-label="Clear search" hidden=""><ds-icon name="x"></ds-icon></button>
</label>
<div class="ds-filters__controls">
<button type="button" class="ds-chip ds-filters__field" data-filter-field="funcao" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-257">
<span data-label="">Role</span>
<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span>
</button><button type="button" class="ds-chip ds-filters__field" data-filter-field="status" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-258">
<span data-label="">Status</span>
<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span>
</button>
</div>
</div>
<div class="ds-filters__summary">
<p class="ds-filters__count" id="ds-filters-2-count" role="status" aria-live="polite" aria-atomic="true">22 people</p>
<ul class="ds-filters__active" role="list" aria-label="Active filters" data-filter-active="" hidden=""></ul>
<button type="button" class="ds-inline-action ds-filters__clear" data-filter-clear="" hidden=""><ds-icon name="x"></ds-icon>Clear all</button>
</div>
</div>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-dl-role="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-259"><ds-icon name="users"></ds-icon>Change role<ds-icon name="chevron-down"></ds-icon></button>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-dl-deactivate=""><ds-icon name="pause"></ds-icon>Deactivate</button>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-dl-remove=""><ds-icon name="trash"></ds-icon>Remove</button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-dl-clear-selection="" aria-label="Clear selection" data-ds-tooltip="Clear selection"><ds-icon name="x"></ds-icon></button>

<nav class="ds-pagination" data-dl-pages="" aria-label="Pagination">
<p class="ds-pagination__summary" role="status">1–8 of 22</p>
<ul class="ds-pagination__list" role="list">
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Previous page" data-page="0" disabled=""><ds-icon name="chevron-left"></ds-icon></button></li>
<li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 1" aria-current="page" data-page="1">1</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 2" data-page="2">2</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Page 3" data-page="3">3</button></li>
<li class="ds-pagination__compact" aria-hidden="true">1 of 3</li>
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Next page" data-page="2"><ds-icon name="chevron-right"></ds-icon></button></li>
</ul></nav>
```

## Anatomy

Six parts, always in the same order, top to bottom.

- 1 — Header — Title, one sentence about what the list is, and one primary action (Invite). Export and the like go in secondary.
- 2 — Filters — Search and the most-used filters, in one row. Sorting lives in the table header, in one place only.
- 3 — Bulk bar — Takes the filters’ place while there’s a selection: how many, what you can do with them, and the X to leave.
- 4 — Table — The first column identifies the row (avatar, name, and email). Sorting on the headers of the columns where it makes sense.
- 5 — Row actions — A ⋯ at the end of each row, always visible. What belongs to a single person stays here, not in the bulk bar.
- 6 — Pagination — At the bottom, with the range (“1–8 of 22”). Filtering goes back to page 1.

## Rules

Six decisions that apply to any data list.

The URL keeps the list

Search, filters, sorting, and page go into the URL. Going back, reloading, and sending the link to someone show the same list.

Selection belongs to the page

The header checkbox only checks what’s in view. Filtering or changing pages doesn’t carry the selection along, so nobody acts on what they can’t see.

Undo instead of confirm

Removing and deactivating happen right away, with “Undo” in the notice. A question before every action only teaches people to click “Yes” without reading.

Actions don’t hide

The row’s ⋯ is always visible, not only on hover: touch and keyboard have no “hover”.

Empty by filter isn’t an empty list

When the filters find nothing, say so and offer “Clear filters”. The invitation to get started is for when there’s really nothing.

Dates people can read

“Nov 14” instead of “2026-11-14T09:12”. The exact time is for the person’s detail page.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4"></rect><path d="m8 12 3 3 5-6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M9 13.5 4.5 9 9 4.5M4.5 9h10a5 5 0 0 1 0 10H11"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><g fill="currentColor"><circle cx="6" cy="12" r="0.75"></circle><circle cx="12" cy="12" r="0.75"></circle><circle cx="18" cy="12" r="0.75"></circle></g></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m20 20-4.2-4.2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 7V5h14v2M12 5v14M9 19h6"></path></svg>
```

## Messages

Short, with the number and the name of what changed. The action comes along, in the notice itself.

| Situation | Avoid | Prefer |
| --- | --- | --- |
| Bulk done | Operation completed successfully! | 3 people removed. Undo |
| No results | No records found. | No one matches these filters. Clear filters |
| Count | Displaying records 1 to 8 | 8 of 22 people |
| Selection | Selected items: 3 | 3 selected |

## Accessibility

A real table, with a caption and headers, and every change said out loud.

- A named table — `<caption>` (it can be hidden) and `scope="col"` on the headers. The scrolling area has `tabindex="0"` to scroll by keyboard.
- Sorting announced — The header button switches `aria-sort` on the `<th>`; the screen reader says “ascending” or “descending”.
- Checkboxes named after the row — “Select Amanda Ribeiro”, not just “Select”. The header one goes mixed when part of the page is checked.
- Counts announced — The filter count and the selection count sit in `aria-live` regions; the “Undo” notice is a toast with `role="status"`.
- Focus isn’t lost — After removing, focus goes to the table, not the top of the page. When clearing the selection, it goes back to the filters.

## Code

The list combines `createFilters`, the table, `createPagination`, and `toast` with “Undo”. The bulk bar is your own markup.

```html
<div class="list">
  <div id="filters"></div>

  <!-- shows up in place of the filters when there’s a selection -->
  <div class="bulk-bar" role="region" aria-label="Bulk actions" hidden>
    <p aria-live="polite">3 selected</p>
    <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm">Remove</button>
  </div>

  <div class="ds-table-wrap" role="region" aria-labelledby="caption" tabindex="0">
    <table class="ds-table ds-table--hover">
      <caption id="caption" class="ds-visually-hidden">People</caption>
      <thead><tr>
        <th scope="col" class="ds-table__check"><input type="checkbox" aria-label="Select the people on this page"></th>
        <th scope="col" aria-sort="ascending"><button type="button" class="ds-table__sort">Person</button></th>
        …
      </tr></thead>
      <tbody>…</tbody>
    </table>
  </div>

  <nav class="ds-pagination" id="pages" aria-label="Pages"></nav>
</div>
```

```html
import { createFilters, createPagination, filtersToQuery, toast } from 'https://lumeui.dev/v/1.13/lume.js';

const pages = createPagination(document.querySelector('#pages'), {
  total: people.length, pageSize: 8,
  onChange: ({ page }) => render(),
});

const filters = createFilters(document.querySelector('#filters'), {
  ...config,
  onChange(state) {
    history.replaceState(null, '', '?' + filtersToQuery(state, config));
    selection.clear();   // the selection doesn’t cross filters
    pages.setPage(1);
    render();
  },
});

function remove(ids) {
  const before = [...people];
  people = people.filter((p) => !ids.includes(p.id));
  render();
  toast(`${ids.length} people removed`, {
    action: { label: 'Undo', onClick: () => { people = before; render(); } },
  });
}
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

A list is for comparing and acting on many similar things. For a single thing, use the detail page.

- **Do:** few columns, the ones that decide. Four or five columns that help pick the right row. The rest lives in the detail, one click away.
- **Avoid:** bulk actions hidden in the row ⋯. What applies to several rows lives in the bulk bar; the ⋯ is just for that row. Mixing them makes people guess what the action acts on.
- **Tip:** Over a thousand rows? Search on the server. The pattern is the same: the filters send the state, the server returns one page and the total. The table never needs everything at once.
