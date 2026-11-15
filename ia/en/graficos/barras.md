# Bars

Lume section: Charts. Page: https://lumeui.dev/#/graficos/barras

Compares quantities side by side. A baseline at zero, thin bars, the rounded end carrying the data — and the number only where it tells the story.

In numbers: layouts: 3 · orientations: 2 · max thickness: 24 px · minimum contrast: 3.36:1.

## Example

```html
import { createBarChart } from 'https://lumeui.dev/v/1.7/lume.js';

createBarChart(document.querySelector('#sales'), {
  title: 'Sales by channel',
  subtitle: 'Thousand units · 1st half',
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    { name: 'App', values: [30, 35, 41, 44, 52, 60] },
    { name: 'Store', values: [40, 42, 38, 50, 55, 52] },
    { name: 'Website', values: [20, 18, 22, 25, 24, 28] },
  ],
  labels: 'none',
});
```

## Variants

Each form answers a question. Choose by the question, not by the look.

Columns `orientation: 'vertical'` — One series, one color. Only the largest value gets a label; the axis carries the rest.

Grouped `layout: 'grouped'` — Compares series within each category. Up to 4 series, with 2 px between neighboring bars.

Stacked `layout: 'stacked'` — Total and composition together. Only the top end is rounded; the total goes on top.

100% `layout: 'percent'` — Composition only: each column adds up to 100%. The tooltip shows the share and the real value.

Horizontal `orientation: 'horizontal'` — For rankings and long names. The value goes at the end, so the axis goes away.

Diverging `diverging: true` — Above and below a reference, at both ends of the diverging scale. Zero is the goal.

Emphasis `highlight: 11` — When the story is a single bar: it keeps the color, the rest becomes gray context.

Funnel `ordinal: true` — Steps in sequence on a single-hue ramp. The tooltip shows how much carried over from the previous step.

## States

The chart responds to the pointer, the keyboard, and the data. The first two start with the state applied — interact to see it again.

Hover and focus — The category band lights up and the tooltip lists every series. With Tab and the arrows, the same — and a screen reader hears the values.

Hidden series — Click the legend to hide a series. The others keep their color: color follows the series, not the position.

Loading — Reload

While fetching new data, the previous drawing stays at half opacity. No skeleton, no layout jump.

Empty — With no data, the chart area becomes a notice of the same height. Say what to do, if anything.

Markup of the examples in this section:

```html
<figure class="ds-chart" data-kind="bar">
<figcaption class="ds-chart__head">
<div class="ds-chart__titles">
<p class="ds-chart__title" id="ds-bar-19-title">Sales this week</p>
</div>
<div class="ds-chart__actions">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-chart__toggle" data-chart-toggle="" aria-pressed="false" aria-label="View as table" data-ds-tooltip="View as table"><ds-icon name="table"></ds-icon></button>
</div>
</figcaption>
<div class="ds-chart__legend" data-legend="" hidden=""></div>
<div class="ds-chart__body" data-body="">
<div class="ds-chart__plot" data-plot="" role="group" aria-roledescription="chart" aria-describedby="ds-bar-19-hint" aria-label="Sales this week. Column chart, 0 categories"><div class="ds-chart__empty"><ds-icon name="bar-chart"></ds-icon><span>No sales in this period.</span></div></div>
<div class="ds-chart__tooltip" data-tooltip="" hidden=""></div>
</div>
<div class="ds-chart__table" data-table="" hidden=""></div>
<p class="ds-visually-hidden" id="ds-bar-19-hint">Use the arrow keys to move through the values. The table has all the data.</p>
<p class="ds-visually-hidden" aria-live="polite" data-live=""></p></figure>
```

## Anatomy

Six fixed measurements make the calm look. The data is the only thing allowed to draw attention.

- 1 — Baseline — Every bar grows from zero, on a 1 px line in `chart.axis`. Bars don’t cut the axis.
- 2 — Bar — At most 24 px thick. What’s left of the band is breathing room, not a fatter bar.
- 3 — Data end — A 4 px radius only on the end that carries the value. The base stays flat, on zero.
- 4 — Breathing room — 2 px between neighboring bars and between stacked segments, letting the surface show through. Never an outline.
- 5 — Value label — At the end, in `fg.default` — text never uses the series color. Only where it tells the story.
- 6 — Grid and axis — Solid 1 px lines in `chart.grid`. Round ticks, compact from a thousand.

## Accessibility

Every bar chart comes out like this. What’s still yours: a clear title and a number format that makes sense.

- A table always at hand — The button in the header swaps the chart for a `<table>` with every value — including the ones the chart doesn’t label. The tooltip is never the only way to a number.
- Keyboard — Tab ← → Home End Esc — Tab focuses the chart; the arrows walk through the categories; Home and End go to the ends; Esc closes the tooltip.
- Screen reader — The chart announces itself with title, type, and number of categories. On each arrow press, a live region reads the category and each series’ value.
- Never color alone — With two or more series there’s a legend; position and labels help. For total color blindness, print, and high contrast, turn on `texture`.
- Contrast checked — All 8 series colors pass 3:1 on the surface in both themes — the lowest sits at 3.36:1. The color order was validated for protanopia and deuteranopia.
- Motion — The bars grow once, when they appear. With reduced motion, nothing animates.

## Tokens used

Marks use the chart colors; text always uses the text tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Series 1 (and the only one, when there’s one) | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Series 2 — and so on up to 8 | #2A8ED6 | #2A8ED6 |
| color.chart.muted (`--ds-color-chart-muted`) | Gray context (emphasis) | #C0CAD6 | #4A4744 |
| color.chart.div.2 (`--ds-color-chart-div-2`) | Below the reference | #48A7F1 | #2A8ED6 |
| color.chart.div.6 (`--ds-color-chart-div-6`) | Above the reference | #F57630 | #D95C0A |
| color.chart.ord.5 (`--ds-color-chart-ord-5`) | First funnel step | #923700 | #FF945E |
| color.chart.ord.1 (`--ds-color-chart-ord-1`) | Last funnel step | #FF945E | #923700 |
| color.chart.grid (`--ds-color-chart-grid`) | Grid lines | #DAE0E8 | #33312E |
| color.chart.axis (`--ds-color-chart-axis`) | Baseline | #C0CAD6 | #4A4744 |
| color.fg.default (`--ds-color-fg-default`) | Value labels | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Category labels | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Axis ticks | #5C6C7F | #9C9792 |
| color.bg.hover (`--ds-color-bg-hover`) | Category band on hover | #3E51660D | #FFFFFF0D |
| color.bg.raised (`--ds-color-bg-raised`) | Tooltip background | #FFFFFF | #2C2A27 |
| shadow.md (`--ds-shadow-md`) | Tooltip shadow | 0 2px 4px -1px rgb(45 58 74 / 0.06), 0 8px 20px -4px rgb(45 58 74 / 0.1) | 0 2px 4px -1px rgb(0 0 0 / 0.28), 0 8px 20px -4px rgb(0 0 0 / 0.36) |
| color.border.focus (`--ds-color-border-focus`) | Chart focus ring | #53657A | #C0CAD6 |

## Usage

Bars compare length. Almost every mistake comes from forgetting that.

- **Do:** start at zero. The bar’s length is the value. With the base at zero, 66 looks a little bigger than 62 — because it is.
- **Avoid:** a truncated axis. Starting at 60 makes a 6% difference look three times bigger. If the small change is the story, use a line.
- **Tip:** Long names? Lay the bars down. Horizontally the label fits whole, without rotating text, and the ranking reads top to bottom.
- **Do:** one series, one color. Teams, products, and regions have no order. All bars in slot 1’s color; length already says who’s bigger.
- **Avoid:** coloring each bar. Different colors promise different series. For nominal categories, that’s noise — and it uses up colors you’ll need.
- **Tip:** More than 4 series. Grouped bars with 5 or more series turn into an illegible comb. Stack, gather the tail into “Others”, or split into several small charts.

## API

One call mounts the chart; `update()` swaps the data without recreating the frame.

| Option | Values | Default | What it does |
| --- | --- | --- | --- |
|  `categories`  | string[] | — | Category labels, in axis order. |
|  `series`  | [{ name, values, color? }] | — | One entry per series. Without `color`, the series uses the slot for its position (1–8). |
|  `orientation`  | 'vertical' \| 'horizontal' | 'vertical' | Horizontal for rankings and long names. |
|  `layout`  | 'grouped' \| 'stacked' \| 'percent' | 'grouped' | Side by side, stacked, or stacked to 100%. |
|  `labels`  | 'auto' \| 'none' \| 'max' \| 'last' \| 'all' | 'auto' | Value labels. `auto` shows all of them only on single-series horizontal bars or stacked bars. |
|  `highlight`  | number | — | Index of the highlighted category; the others use `chart.muted`. |
|  `diverging`  | boolean | false | Positive and negative at the ends of the diverging scale. Legend with `positiveLabel` and `negativeLabel`. |
|  `ordinal`  | boolean | false | Categories in sequence (funnel, bands) on a single-hue ramp. |
|  `format`  | preset \| Intl \| function | 'number' | `'integer'`, `'compact'`, `'percent'`, `'currency'` … The axis compacts on its own; change it with `axisFormat`. |
|  `height`  | px | 280 | Total height of the columns, including the axis. Horizontal bars compute their height from the rows. |
|  `title · subtitle`  | string | — | Chart header. Without a title, pass `label` to name it. |
|  `card · table · texture`  | boolean | false · true · false | Outlined surface, table button, and backup hatching. |

```html
const chart = createBarChart(el, { title: 'Sales', categories, series });

chart.update({ series: nextSeries });   // redraws keeping legend and table
chart.setLoading(true);                   // half opacity while fetching
chart.destroy();                          // removes everything and the observers
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```
