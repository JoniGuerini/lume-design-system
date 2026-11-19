# Scatter

Lume section: Charts. Page: https://lumeui.dev/#/graficos/dispersao

The relationship between two measures: each point is an item. 8 px dots with a ring, up to three series, names only where they’re earned — and a generous target so hover finds the closest point.

In numbers: series: up to 3 · dot: 8 px · ring: 2 px · hover target: 24 px.

## Example

```html
import { createScatterChart } from 'https://lumeui.dev/v/1.12/lume.js';

// each point: { x, y, label }
const chart = createScatterChart(document.querySelector('#accounts'), {
  title: 'Cost × satisfaction by segment',
  subtitle: 'Each point is an account',
  series: [
    { name: 'Retail', points: retail },
    { name: 'Businesses', points: businesses },
    { name: 'Freelancers', points: freelancers },
  ],
  x: { label: 'Acquisition cost', format: 'currency' },
  y: { label: 'NPS', format: 'integer' },
});
```

## Variants

From a simple cloud to bubbles. In all of them, hover finds the closest point and the table lists each one.

Simple `1 series` — One series, one hue. No legend: the title says what each point is.

By segment `series: 3` — Up to three series. In a scatter, any point can touch any other — that’s why the ceiling is lower than for lines.

Bubbles `size` — A third measure becomes the bubble’s area. It’s for comparing orders of magnitude, not for reading the value.

With references `reference` — The medians split the plane into quadrants: top left is the best — satisfied and cheap.

Selective labels `showLabel` — Names only on the extremes — the highest NPS, the lowest, and the highest cost. The rest stays in the tooltip and the table.

## 24 px target

An 8 px dot is too small to aim at. Hover looks for the point closest to the pointer, up to 24 px away.

- 8 px dot — Radius 4, in the series color. Small enough for the cloud to breathe.
- 2 px ring — In the surface color, it separates overlapping points without drawing an ink outline.
- 24 px target — The closest within the radius lights up, with a ring in its color. With bubbles, distance counts from the edge.

Try it on the cloud `44 points` — Hover among the points: there’s always one lit, the closest to the pointer.

## Accessibility

Every point is reachable without a mouse and without color.

- A table with every point — The table button lists each point with name, series, x, y, and size — the way in for those who can’t see the cloud.
- Keyboard — Tab ← → Home End Esc — Tab focuses the chart; the arrows walk through the points from left to right, Home and End go to the ends, and Esc closes the tooltip.
- Screen reader — The chart announces how many points it has; each visited point is read with its name and both values.
- Colors validated across all pairs — In a scatter, any color can touch any other. Lume’s first three series were validated pair by pair for color blindness — hence the limit of three.
- Never color alone — With two or more series there’s a legend, and the tooltip repeats the series name.
- A generous target — Hover catches the closest point up to 24 px, the comfortable minimum for mouse and touch.

## Tokens used

The first three series colors, the plane lines, and the surface color for the ring.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | First series | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Second series | #2A8ED6 | #2A8ED6 |
| color.chart.series.3 (`--ds-color-chart-series-3`) | Third series | #CD5892 | #CD5892 |
| color.bg.surface (`--ds-color-bg-surface`) | Point ring (surface color) | #FFFFFF | #24221F |
| color.chart.grid (`--ds-color-chart-grid`) | Grid lines | #DAE0E8 | #33312E |
| color.chart.axis (`--ds-color-chart-axis`) | Axes | #C0CAD6 | #4A4744 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Axis values and titles, reference | #53657A | #9C9792 |
| color.fg.muted (`--ds-color-fg-muted`) | Direct labels | #46586E | #CEC8C1 |
| color.bg.raised (`--ds-color-bg-raised`) | Tooltip background | #FFFFFF | #2C2A27 |

## Usage

A scatter answers “does one thing move with the other?”. For everything else, there are better charts.

- **Do:** up to 3 series. Beyond that, colors start to get confused. Group into “Others” or split into small multiples.
- **Avoid:** bubbles for exact values. The eye misjudges circle areas. A bubble says “much bigger” or “much smaller”; the number stays in the tooltip.
- **Tip:** Zero is optional. Unlike bars, the axes can start near the data — position is the message, not length. Turn on zero when the distance to zero matters.
- **Do:** a reference. Median, average, or goal give the quadrants meaning. Without them, people don’t know what “high” is.
- **Avoid:** time on the x-axis. If the points are a sequence in time, connect them: use a line chart.
- **Tip:** Labels only on the extremes. A name on every point becomes noise. Label what the story calls for and leave the rest in the tooltip.

## API

One function, with update, setLoading, and destroy as in every chart.

```html
import { createScatterChart } from 'https://lumeui.dev/v/1.12/lume.js';

const chart = createScatterChart(document.querySelector('#accounts'), {
  title: 'Cost × satisfaction',
  series: [{ name: 'Retail', points: [{ x: 42, y: 61, label: 'Account 01' }, { x: 58, y: 47, label: 'Account 02' }] }],
  x: { label: 'Acquisition cost', format: 'currency' },
  y: { label: 'NPS', format: 'integer', reference: 50, referenceLabel: 'Goal' },
});
```

| Option | Type | Default | What for |
| --- | --- | --- | --- |
| `series` | { name, color?, points }[] | — | Up to 3 series. Beyond that, Lume warns in the console: group them or use small multiples. |
| `points` | { x, y, size?, label?, showLabel? }[] | — | `label` names the point in the tooltip and the table; `showLabel: false` removes only the direct label. |
| `x · y` | { label, format, zero, reference, referenceLabel } | zero: false | Axis title, format, whether it starts at zero, and a dashed reference line. |
| `size` | { label, format, range } | range: [4, 18] | With `size` on the points, the radius follows the square root of the value (proportional area). |
| `height` | number | 320 | Total height, with the axes. |
| `title · subtitle · label · card · table · pointLabel` | — | — | Same as every chart; pointLabel names the table column. |

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```
