# Donut

Lume section: Charts. Page: https://lumeui.dev/#/graficos/rosca

Part of a whole at a glance. Up to six slices, the total in the center, and a list that’s legend and label at once.

In numbers: max slices: 6 · default thickness: 24 px · gap between slices: 2 px · minimum contrast: 3.37:1.

## Example

```html
import { createDonutChart } from 'https://lumeui.dev/v/1.8/lume.js';

donutChart(document.querySelector('#payments'), {
  title: 'Payments by method',
  subtitle: 'Transactions in October',
  items: [
    { name: 'Pix', value: 4210 },
    { name: 'Credit card', value: 2630 },
    { name: 'Debit card', value: 1290 },
    { name: 'Boleto', value: 610 },
    { name: 'Account balance', value: 320 },
  ],
  format: 'integer',
  centerLabel: 'transactions',
});
```

## Variants

Same anatomy, four tweaks. The donut never gets 3D, shadows, or an exploded slice.

Total in the center `center: 'total'` — The default. The center adds everything up; on hover, it shows the slice. The list beside it is the legend and the label for each part.

Tail in “Others” `maxSegments: 6` — From the 6th slice on, the smallest become “Others”, in gray and always last. The table opens up the tail.

With texture `texture: true` — Hatching at 45° and 135° for total color blindness, print, and high contrast. In print, it turns on by itself.

Thin, with a custom center `thickness: 14` — A thin ring when the center number is the message. Say what it means in the label.

### Side by side or stackedautomatic, by width

With room: list beside

When narrow: list below

With room (diameter + 260 px), the list sits beside the donut. When narrow, it drops below — without you configuring anything.

## Donut or bars?

A donut shows proportion; no one compares angles precisely. When values are close, use bars.

- **Avoid:** a donut for close values. Which region is largest? With 21.8% against 21%, the angle doesn’t answer — people have to read the list.
- **Do:** sorted bars. Length on the same base: the order jumps out and the value sits at the end.

## States

The first starts with a slice highlighted — hover or use the arrows to switch.

Hover and keyboard — The slice moves 4 px out of the ring, the others fade, and the center shows the percentage. The list row lights up too.

Loading — Reload

While fetching new data, the previous donut stays at half opacity — no skeleton, no jump.

Empty — With no values, a notice takes the ring’s place. An empty donut isn’t a gray circle.

Markup of the examples in this section:

```html
<figure class="ds-chart" data-kind="donut">
<figcaption class="ds-chart__head">
<div class="ds-chart__titles">
<p class="ds-chart__title" id="ds-donut-44-title">Payments by method</p>
</div>
<div class="ds-chart__actions">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-chart__toggle" data-chart-toggle="" aria-pressed="false" aria-label="View as table" data-ds-tooltip="View as table"><ds-icon name="table"></ds-icon></button>
</div>
</figcaption>
<div class="ds-chart__legend" data-legend="" hidden=""></div>
<div class="ds-chart__body" data-body="">
<div class="ds-chart__plot" data-plot="" role="group" aria-roledescription="chart" aria-describedby="ds-donut-44-hint" aria-label="Payments by method. Donut chart with 0 slices"><div class="ds-chart__empty"><ds-icon name="bar-chart"></ds-icon><span>No payments in this period.</span></div></div>
<div class="ds-chart__tooltip" data-tooltip="" hidden=""></div>
</div>
<div class="ds-chart__table" data-table="" hidden=""></div>
<p class="ds-visually-hidden" id="ds-donut-44-hint">Use the arrow keys to move through the values. The table has all the data.</p>
<p class="ds-visually-hidden" aria-live="polite" data-live=""></p></figure>
```

## Anatomy

Five parts. The donut is just the visual summary; the list carries the numbers.

- 1 — Ring — 24 px thick by default (14 to 36). Slices start at 12 o’clock and go clockwise, from largest to smallest.
- 2 — Gap — 2 px between slices, cut into the drawing itself — the surface shows through. Never an outline around the slice.
- 3 — Center — The total in sans semibold, with proportional figures, and the label with the unit. On hover, it becomes the slice’s percentage.
- 4 — List — Legend and direct label at once: color, name, value, and percentage, with numbers aligned in columns.
- 5 — Others — The grouped tail, in `chart.other`, always last. Never a 7th color.

## Accessibility

The donut comes out accessible. What’s still yours: a clear title and the unit label in the center.

- A table always at hand — The button in the header swaps the donut for a table with name, value, and percentage — including the items grouped into “Others”, one by one.
- Keyboard — Tab ← → Home End Esc — Tab focuses the chart; the arrows walk through the slices; Home and End go to the first and last; Esc returns to the total.
- Screen reader — The chart announces itself with title and number of slices. On each arrow press, a live region reads the name, percentage, and value.
- Never color alone — Each slice has a name and number in the list, in the same order as the ring. For total color blindness, print, and high contrast, turn on `texture`.
- Contrast checked — The first 6 series colors pass 3:1 on the surface in both themes — the lowest sits at 3.37:1.
- Motion — The slices appear once, with a fade. With reduced motion, nothing animates — not even the slice highlight.

## Tokens used

Slices use the chart colors, in fixed order; text always uses the text tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | First slice | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Second slice — and so on up to the 5th | #2A8ED6 | #2A8ED6 |
| color.chart.other (`--ds-color-chart-other`) | “Others” | #93A0B0 | #605D59 |
| color.fg.default (`--ds-color-fg-default`) | Center and list value | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Name in the list | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Center label and percentage | #53657A | #9C9792 |
| color.bg.hover (`--ds-color-bg-hover`) | Highlighted list row | #3E51660D | #FFFFFF0D |
| color.border.subtle (`--ds-color-border-subtle`) | List divider | #3E516624 | #FFFFFF0F |
| color.border.focus (`--ds-color-border-focus`) | Chart focus ring | #53657A | #C0CAD6 |
| duration.base (`--ds-duration-base`) | Slice moving out of the ring | 200ms | 200ms |

## Usage

The donut is the easiest form to get wrong. Use it sparingly, and only for part of a whole.

- **Do:** parts of a whole. The slices add up to 100% of a single thing — transactions, budget, customers. No overlapping categories.
- **Do:** up to 6 slices, in order. From largest to smallest, starting at 12 o’clock. From the 6th on, group into “Others” — the component does it for you.
- **Avoid:** 3D, shadows, and exploded slices. Perspective distorts the angles and shadows become noise. The highlight comes on hover, and only while it lasts.
- **Avoid:** a two-slice donut. “72% used” is a ratio against a limit. A meter says it in one line, without asking anyone to read angles.
- **Tip:** Comparing? Use bars. If the question is “which is bigger”, “how much did it change”, or “how did it go over time”, the answer is a bar or a line — never several donuts side by side.
- **Tip:** Say the unit in the center. “9,120” says nothing on its own. centerLabel: 'transactions' does.

## API

One call mounts the donut, the list, and the table; `update()` swaps the items.

| Option | Values | Default | What it does |
| --- | --- | --- | --- |
|  `items`  | [{ name, value, color? }] | — | One entry per slice, in the order they appear from 12 o’clock. Sort from largest to smallest. |
|  `format`  | preset \| Intl \| function | 'number' | Format of the values in the center, the list, and the table. The percentage is computed. |
|  `center`  | 'total' \| { value, label } \| false | 'total' | What the center shows outside of hover. |
|  `centerLabel`  | string | 'Total' | Label under the total. Say the unit: “transactions”, “customers”. |
|  `maxSegments`  | number | 6 | Above that, the smallest slices become “Others”. |
|  `otherLabel`  | string | 'Others' | Name of the slice that groups the tail. |
|  `size · thickness`  | px | 200 · 24 | Diameter and thickness of the ring. The list moves below when it doesn’t fit beside it. |
|  `texture`  | boolean | false | Backup hatching for when color isn’t enough. |
|  `title · subtitle`  | string | — | Header. Without a title, pass `label` to name the chart. |
|  `categoryLabel · valueLabel`  | string | 'Category' · 'Value' | Column headers of the table view. |

```html
const chart = createDonutChart(el, { title: 'Payments', items, format: 'integer' });

chart.update({ items: nextItems });   // redraws keeping the frame
chart.setLoading(true);                 // half opacity while fetching
chart.destroy();
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```
