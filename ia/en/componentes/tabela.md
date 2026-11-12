# Table

Lume section: Components. Page: https://lumeui.dev/#/componentes/tabela

For comparing data in rows and columns. Aligned numbers, a header that sorts, and selection that doesn’t rely on color alone.

In numbers: densities: 2 · states: 3 · row height: 52 px · element: <table>.

## Example

```html
<div class="ds-table-wrap">
  <table class="ds-table ds-table--hover">
    <caption>Components <span class="ds-table__caption-desc">Usage across product screens</span></caption>
    <thead>
      <tr>
        <th scope="col">Component</th>
        <th scope="col">Status</th>
        <th scope="col" class="ds-table__num">Screens</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="ds-table__strong">Button</td>
        <td><span class="ds-badge ds-badge--sm ds-badge--success">Done</span></td>
        <td class="ds-table__num">248</td>
      </tr>
      <tr>
        <td class="ds-table__strong">Tooltip</td>
        <td><span class="ds-badge ds-badge--sm ds-badge--success">Done</span></td>
        <td class="ds-table__num">201</td>
      </tr>
      …
    </tbody>
  </table>
</div>
```

## Sort and select

Click a header to sort (again to reverse). Check rows to act in bulk — the count shows on top.

None selected

Markup of the examples in this section:

```html
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-clear="" hidden=""><ds-icon name="x"></ds-icon>Clear selection</button>

<p class="ds-visually-hidden" aria-live="polite" data-live=""></p>
```

## Anatomy

A native table with five pieces. No grid of divs: the semantics come built in.

- 1 — Caption — `<caption>` names the table for screen readers. It can have a short description.
- 2 — Header — `<th scope="col">` in `label-sm`, muted. Sortable with a button inside and `aria-sort`.
- 3 — Row — 52 px (40 px in compact), a thin divider. Optional hover; selected rows get `bg.selected`.
- 4 — Numeric cell — `ds-table__num`: right-aligned with tabular figures, so the digits line up.
- 5 — Selection optional — A native checkbox with a label per row and “select all” in the header.

Markup of the examples in this section:

```html
<div class="ds-table-wrap">
<table class="ds-table">
<caption>Components <span>1</span></caption>
<thead><tr>
<th class="ds-table__check"><input type="checkbox"><span>5</span></th>
<th aria-sort="descending"><span class="ds-table__sort">Component<ds-icon name="chevron-down"></ds-icon></span><span>2</span></th>
<th class="ds-table__num">Screens</th>
</tr></thead>
<tbody>
<tr data-selected=""><td class="ds-table__check"><input type="checkbox" checked=""></td><td class="ds-table__strong">Button <span>3</span></td><td class="ds-table__num">248 <span>4</span></td></tr>
<tr><td class="ds-table__check"><input type="checkbox"></td><td class="ds-table__strong">Chip</td><td class="ds-table__num">132</td></tr>
</tbody>
</table>
</div>
```

## Density

Comfortable is the default. Compact for operational screens, with many rows to scan.

Comfortable `default · 52 px`

Compact `ds-table--compact · 40 px`

Markup of the examples in this section:

```html
<div class="ds-table-wrap">
<table class="ds-table">
<thead><tr>
<th scope="col">Component</th><th scope="col">Status</th><th scope="col" class="ds-table__num">Screens</th>
</tr></thead>
<tbody><tr>
<td class="ds-table__strong">Button</td><td><span class="ds-badge ds-badge--sm ds-badge--success">Done</span></td><td class="ds-table__num">248</td>
</tr><tr>
<td class="ds-table__strong">Tooltip</td><td><span class="ds-badge ds-badge--sm ds-badge--success">Done</span></td><td class="ds-table__num">201</td>
</tr><tr>
<td class="ds-table__strong">Text field</td><td><span class="ds-badge ds-badge--sm ds-badge--warning">In review</span></td><td class="ds-table__num">164</td>
</tr></tbody>
</table>
</div>

<div class="ds-table-wrap">
<table class="ds-table ds-table--compact">
<thead><tr>
<th scope="col">Component</th><th scope="col">Status</th><th scope="col" class="ds-table__num">Screens</th>
</tr></thead>
<tbody><tr>
<td class="ds-table__strong">Button</td><td><span class="ds-badge ds-badge--sm ds-badge--success">Done</span></td><td class="ds-table__num">248</td>
</tr><tr>
<td class="ds-table__strong">Tooltip</td><td><span class="ds-badge ds-badge--sm ds-badge--success">Done</span></td><td class="ds-table__num">201</td>
</tr><tr>
<td class="ds-table__strong">Text field</td><td><span class="ds-badge ds-badge--sm ds-badge--warning">In review</span></td><td class="ds-table__num">164</td>
</tr></tbody>
</table>
</div>
```

## States

A table without data is still a table: keep the header and say what to do. While loading, show the shape of the rows — no shimmer.

Empty `ds-table__empty` — An icon, a short sentence, and a way out.

Loading `ds-table__skeleton` — Flat bars that pulse slowly; they stop with reduced motion.

Markup of the examples in this section:

```html
<div class="ds-table-wrap">
<table class="ds-table ds-table--hover">
<thead><tr>
<th scope="col">Component</th><th scope="col">Status</th><th scope="col" class="ds-table__num">Screens</th>
</tr></thead>
<tbody><tr class="ds-table__empty"><td colspan="3">
<span class="ds-table__empty-inner">
<ds-icon name="inbox"></ds-icon>
<span class="ds-table__empty-title">No components match this filter</span>
<span>Try another status or clear the search.</span>
<span class="ds-btn ds-btn--secondary ds-btn--sm">Clear filters</span>
</span>
</td></tr></tbody>
</table>
</div>

<div class="ds-table-wrap">
<table class="ds-table ds-table--hover">
<thead><tr>
<th scope="col">Component</th><th scope="col">Status</th><th scope="col" class="ds-table__num">Screens</th>
</tr></thead>
<tbody><tr><td><span class="ds-table__skeleton"></span></td><td><span class="ds-table__skeleton"></span></td><td class="ds-table__num"><span class="ds-table__skeleton"></span></td></tr><tr><td><span class="ds-table__skeleton"></span></td><td><span class="ds-table__skeleton"></span></td><td class="ds-table__num"><span class="ds-table__skeleton"></span></td></tr><tr><td><span class="ds-table__skeleton"></span></td><td><span class="ds-table__skeleton"></span></td><td class="ds-table__num"><span class="ds-table__skeleton"></span></td></tr></tbody>
</table>
</div>
```

## Accessibility

Use the native table and almost everything comes for free.

- A real table — `<table>`, `<caption>`, and `<th scope="col">`: the screen reader announces each cell’s column.
- Announced sorting — The sortable header is a button; the `th` gets `aria-sort` and a live region confirms the change.
- Selection by checkbox — Each row has a named checkbox (“Select Button”). “Select all” shows the mixed state when only some are checked.
- Keyboard scrolling — Tab ↑ ↓ — With a sticky header, the container becomes a named `role="region"` with `tabindex="0"` to scroll with the arrows.
- Never color alone — Status goes as text in the badge; the selected row also has its checkbox checked.
- Don’t use it for layout — Tables are for tabular data. To align interface elements, use grid.

## Tokens used

Everything the table consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Background and sticky header | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Outline and dividers | #3E516624 | #FFFFFF0F |
| color.fg.subtle (`--ds-color-fg-subtle`) | Header and muted text | #5C6C7F | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Cells | #2B3847 | #F3EDE5 |
| color.bg.hover (`--ds-color-bg-hover`) | Row hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Selected row | #3E516612 | #C0CAD61A |
| color.fg.brand (`--ds-color-fg-brand`) | Sorted column icon | #3E5166 | #DAE0E8 |
| color.brand.solid (`--ds-color-brand-solid`) | Checked checkbox | #3E5166 | #C0CAD6 |
| color.bg.muted (`--ds-color-bg-muted`) | Loading bars | #DAE0E8 | #3D3B38 |
| text.body-sm (`--ds-text-body-sm`) | Cells | 14/22 · regular | 14/22 · regular |
| text.label-sm (`--ds-text-label-sm`) | Header | 13/18 · medium | 13/18 · medium |
| radius.xl (`--ds-radius-xl`) | Container | 20 px | 20 px |
| space.200 (`--ds-space-200`) | Cell side padding | 16 px | 16 px |

## Usage

Three rules for easy-to-read tables.

- **Do:** numbers on the right. Right-aligned and with tabular figures, values compare at a glance.
- **Avoid:** a table for very little. Two columns of “label and value” work better as a details list.
- **Tip:** Few columns. Show only what helps decide. The rest goes into the row’s detail.
