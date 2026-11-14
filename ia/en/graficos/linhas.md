# Lines and areas

Lume section: Charts. Page: https://lumeui.dev/#/graficos/linhas

To show how something changes over time. A 2 px stroke, a single axis, the crosshair finds the month, and the name sits at the end of the line — no legend box to decipher.

In numbers: variants: 8 · stroke: 2 px · end labels: up to 4 · y axis: 1.

## Example

```html
import { createLineChart } from 'https://lumeui.dev/v/0.34/lume.js';

const chart = createLineChart(document.querySelector('#users'), {
  title: 'Active users',
  subtitle: 'By month · 2026',
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    { name: 'Active users', values: [12100, 13800, 13200, 17900, 20600, 23800, 23100, 26900, 29800, 29200, 33600, 38200] },
  ],
  format: 'integer',
});
```

## Variants

The same component covers the most common questions about time. Hover any of them.

Single line `1 series` — A single series needs no legend: the title says what it is, and the last value is written at the end of the line.

Several series `endLabels` — Up to four lines get their name at the end — when it fits without colliding. If the lines meet there, the legend and tooltip remain.

Against the previous period `muted: true` — Last year goes in gray, underneath: it’s context, not the lead. It stays named in the legend and tooltip.

Emphasis `highlight: 0` — When the story is one series, it keeps the color and the others turn gray. Clearer than four colors fighting for the eye.

Area `area: true` — For a single series, when volume matters. The area is a 10% wash of the color — the line stays in charge.

Stacked areas `stacked: true` — Parts that add up to a total over time. Each band’s edge is the line; the total shows in the tooltip.

With a goal `target` — The goal is the only dashed line in the system — dashes mean reference, never grid.

With gaps `null` — No data in April and May: the line breaks instead of inventing a bridge. In the tooltip and table, “—” shows.

## Crosshair and tooltip

No one aims at a 2 px line. The vertical crosshair finds the closest month and a single tooltip shows every series there.

- Finds the x, not the line — The crosshair snaps to the data point closest to the pointer, at any height in the area.
- One tooltip, every series — The readout lists each visible series in that month, in legend order.
- Value first, name after — The reader already knows the series; they want the number. It comes strong, the name comes muted, with a stroke of color as the key.
- The same on the keyboard — Tab focuses the chart, the arrows walk through the months, and screen readers read the value.

## A single axis

No dual y-axes. Two quantities on different scales become a common index or two aligned charts.

With two axes, the scale on each side is picked by hand. Where the lines cross — and the impression that they move together — becomes the chart maker’s decision, not the data’s.

Index based at 100 `zero: false` — Both measures start at 100 in January. Now you can compare the pace: users grew faster than revenue.

Two charts, same x-axis `small multiples` — Each measure on its own scale, one chart below the other, with the months aligned.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10.3 4.2 2.9 17.5A2 2 0 0 0 4.6 20.5h14.8a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0z"></path><path d="M12 9.5v4"></path><path d="M12 17h.01"></path></svg>
```

## Accessibility

The chart is born with keyboard, table, and names. These are the decisions that are still yours.

- A table always at hand — The table button in the header swaps the drawing for the numbers — all of them, including the ones the chart doesn’t label. The tooltip is never the only way to a value.
- Keyboard — Tab ← → Home End Esc — Tab focuses the chart; the arrows walk through the points, Home and End go to the ends, and Esc closes the tooltip.
- Screen reader — The chart has a name and a summary (type, points, and series). Each point visited by keyboard is announced in a live region.
- Never color alone — With two or more series, there’s always a legend — and names at the end of the line when they fit. The context series is gray and stays named.
- Contrast checked — Every series color passes 3:1 against the surface — the lowest is 3.36:1 in Lume light and 3.45:1 in Lume dark. Text uses text tokens, never the series color.
- Motion in moderation — The line draws once, when it appears on screen, and doesn’t animate with `prefers-reduced-motion`.

## Tokens used

Marks consume the chart colors; everything that’s text consumes text tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | First series | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Second series | #2A8ED6 | #2A8ED6 |
| color.chart.series.3 (`--ds-color-chart-series-3`) | Third series | #CD5892 | #CD5892 |
| color.chart.series.4 (`--ds-color-chart-series-4`) | Fourth series | #A86600 | #A86600 |
| color.chart.muted (`--ds-color-chart-muted`) | Context and non-emphasized series | #C0CAD6 | #4A4744 |
| color.chart.grid (`--ds-color-chart-grid`) | Grid lines | #DAE0E8 | #33312E |
| color.chart.axis (`--ds-color-chart-axis`) | Baseline and crosshair | #C0CAD6 | #4A4744 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Axis labels and goal line | #5C6C7F | #9C9792 |
| color.fg.muted (`--ds-color-fg-muted`) | Name at the end of the line | #46586E | #CEC8C1 |
| color.fg.default (`--ds-color-fg-default`) | Value at the end of the line | #2B3847 | #F3EDE5 |
| color.bg.raised (`--ds-color-bg-raised`) | Tooltip background | #FFFFFF | #2C2A27 |
| color.border.focus (`--ds-color-border-focus`) | Chart focus | #53657A | #C0CAD6 |

## Usage

Choose a line when the question has “when” or “since”. Four precautions solve almost everything.

- **Do:** time on the x-axis. Lines connect points in sequence. If the order isn’t time (or another real sequence), use bars.
- **Avoid:** dual y-axes. It creates a correlation that doesn’t exist. Index both measures to the same base or make two charts.
- **Tip:** More than 4 series?. Highlight the one that matters and leave the rest gray, group the tail into “Others”, or split into small multiples. Never invent a 9th color.
- **Do:** selective labels. The final value, the peak, or the series that tells the story. A number on every point, no one reads.
- **Avoid:** overlapping areas. Areas of several series on top of each other hide data. For parts of a total, stack; to compare, use lines.
- **Tip:** Zero on the axis. Areas always start at zero. On lines, turn it off with zero: false only when the variation is the story — and say so in the subtitle.

## API

One function, the same rules as every Lume chart.

```html
import { createLineChart } from 'https://lumeui.dev/v/0.34/lume.js';

const chart = createLineChart(document.querySelector('#revenue'), {
  title: 'Revenue',
  categories: ['Jan', 'Feb', 'Mar'],
  series: [{ name: 'Revenue', values: [82000, 91000, 88000] }],
  format: 'currency-compact',
});

chart.update({ target: { value: 90000, label: 'Goal' } });
```

| Option | Type | Default | What for |
| --- | --- | --- | --- |
| `categories` | string[] | — | X-axis labels, in order. |
| `series` | { name, values, color?, muted? }[] | — | One entry per line. `null` in values breaks the line. Without `color`, the series uses the slot for its position. |
| `area` | boolean | false | A 10% wash under the line. |
| `stacked` | boolean | false | Summed bands; the tooltip shows the total. |
| `curve` | 'linear' \| 'smooth' | 'linear' | Smooth is monotone: it doesn’t create peaks that don’t exist. |
| `markers` | 'end' \| 'all' \| 'none' | 'end' | 8 px dots with a 2 px ring. `all` only up to 40 points. |
| `endLabels` | boolean | true | Name (or value, with one series) at the end of the line, if it fits without colliding. |
| `highlight` | number | — | Index of the highlighted series; the others go gray. |
| `target` | { value, label } | — | Dashed reference line. |
| `zero` | boolean | true | The axis starts at zero. Areas always do. |
| `format · axisFormat` | preset \| Intl \| function | 'number' | Values in the tooltip and table; the axis compacts from a thousand. |
| `height` | number | 280 | Total height, including the x-axis band. |
| `title · subtitle · label` | string | — | Visible title or, without it, the chart’s accessible name. |
| `card · table · tooltipLabels` | boolean · boolean · string[] | false · true · — | Outlined surface, table button, and long labels for the tooltip. |

| Method | What it does |
| --- | --- |
| `update(options)` | Merges the options and redraws. Series hidden in the legend stay hidden. |
| `setLoading(bool)` | Keeps the previous drawing at 45% while data arrives — no skeleton, no jump. |
| `destroy()` | Disconnects observers and events and clears the container. |

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```
