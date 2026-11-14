# Heatmap

Lume section: Charts. Page: https://lumeui.dev/#/graficos/heatmap

Intensity on a grid — day × hour, or day by day across the year. A single hue that gets stronger with the value; two hues with a neutral middle when the question is above or below a reference.

In numbers: formats: 2 · scales: 2 · bands: up to 7 · gap: 2 px.

## Example

```html
import { createHeatmap } from 'https://lumeui.dev/v/0.34/lume.js';

const chart = createHeatmap(document.querySelector('#orders'), {
  title: 'Orders by hour',
  subtitle: 'Last week',
  rows: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  columns: ['0:00', '1:00', '2:00', /* … */ '23:00'],
  values: orders, // 7 rows × 24 columns; null = no data
  valueLabel: 'orders',
  format: 'integer',
});
```

## Variants

A matrix for repeating patterns (weekday × hour); a calendar for the whole year at once.

Matrix `createHeatmap()` — Rows and columns with meaning. The midday peak and the early-morning dip jump out — without reading a number.

Diverging `scale: 'diverging'` — Cool below the average, warm above, gray in the middle. The middle has to read as “nothing”.

Calendar `createCalendarHeatmap()` — One square per day, one column per week. It opens on the most recent week; on narrow screens, scroll back into the past. The table summarizes by month.

## Scale and bands

The value becomes a color band, not a continuous tone — bands are something the eye can compare. In dark mode, the anchor flips: more is lighter.

Lume light

Sequential · 7 bands — empty — 1 — 2 — 3 — 4 — 5 — 6 — 7

Sequential · 5 bands — empty — 1 — 2 — 3 — 4 — 5 — 6 — 7

Diverging · 7 bands — −3 — −2 — −1 — middle — +1 — +2 — +3

Lume dark

Sequential · 7 bands — empty — 1 — 2 — 3 — 4 — 5 — 6 — 7

Sequential · 5 bands — empty — 1 — 2 — 3 — 4 — 5 — 6 — 7

Diverging · 7 bands — −3 — −2 — −1 — middle — +1 — +2 — +3

- Equal bands — The range between minimum and maximum is split into equal parts. With 5 bands, we use steps 1, 2, 4, 6, and 7, to cover the whole ramp.
- Empty isn’t zero — A cell with no data (and zero, on the sequential scale) uses the grid color — it’s clear there’s nothing there, not “a little”.
- The middle is a decision — On the diverging scale, `center` defines what’s neutral: zero for a change, the average for a count, the goal for a result.

Markup of the examples in this section:

```html
<div class="ds-chart__scale"><span>Less</span><span class="ds-chart__scale-bins"><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span></span><span>More</span></div>

<div class="ds-chart__scale"><span>−8</span><span class="ds-chart__scale-bins"><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span></span><span>+8</span></div>
```

## Accessibility

Color alone doesn’t carry a number. That’s why the map always has another way to the value.

- A table always at hand — The table button swaps the map for the numbers: rows × columns in the matrix and a monthly summary in the calendar — 365 rows help no one.
- Keyboard in two directions — ← ↑ ↓ → Home End — Tab focuses the map; the arrows move between cells, Home and End go to the start and end of the row, Esc closes the tooltip. In the calendar, ← and → jump weeks and ↑ and ↓ move days.
- Screen reader — The map is announced with the grid size; each cell visited by keyboard is read with row, column, and value.
- Outline on hover — The active cell gets a 1.5 px ring in the text color, visible over any band, in both themes.
- Countable bands — At most 7 meaningful colors. Beyond that, neighbors get confused — use a table.
- A faint end is allowed — On the sequential scale, the faintest step can nearly vanish into the surface: it means “close to zero”. The exact value stays in the tooltip and the table.

## Tokens used

Two ramps and the grid color. No categorical series color comes in here.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.chart.seq.1 (`--ds-color-chart-seq-1`) | Sequential: the minimum | #FFE7DB | #712800 |
| color.chart.seq.4 (`--ds-color-chart-seq-4`) | Sequential: the middle | #F57630 | #D95C0A |
| color.chart.seq.7 (`--ds-color-chart-seq-7`) | Sequential: the maximum | #923700 | #FFB590 |
| color.chart.div.1 (`--ds-color-chart-div-1`) | Diverging: low end (cool) | #1776B5 | #6ABCFF |
| color.chart.div.4 (`--ds-color-chart-div-4`) | Diverging: neutral middle | #DAE0E8 | #3D3B38 |
| color.chart.div.7 (`--ds-color-chart-div-7`) | Diverging: high end (warm) | #B74900 | #FF945E |
| color.chart.grid (`--ds-color-chart-grid`) | Empty cell | #DAE0E8 | #33312E |
| color.fg.default (`--ds-color-fg-default`) | Active cell ring | #2B3847 | #F3EDE5 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Labels and scale legend | #5C6C7F | #9C9792 |
| color.bg.raised (`--ds-color-bg-raised`) | Tooltip background | #FFFFFF | #2C2A27 |

## Usage

A heatmap shows a pattern, not an exact value. Use it when the question is “where does it concentrate?”.

- **Do:** a single hue. Magnitude is a single-hue ramp, from light to strong. The eye reads “more” without needing a legend.
- **Avoid:** rainbows. Red, yellow, green, and blue have no order. No one knows whether green is more or less than yellow.
- **Tip:** Diverging with a neutral middle. Two opposite hues — cool and warm — and gray in the middle. Two cool hues don’t read as “sides”.
- **Do:** up to 7 bands. Five almost always do it. Seven is the ceiling: beyond that, neighboring bands blend together.
- **Avoid:** exact values by color. If people need the number to decide, show the number — in a table or in bars.
- **Tip:** Same scale to compare. Two maps side by side? Fix the same domain on both, or the same color will mean different values.

## API

Two functions with the same rules as every Lume chart: update, setLoading, and destroy.

```html
import { createHeatmap, createCalendarHeatmap } from 'https://lumeui.dev/v/0.34/lume.js';

createHeatmap(document.querySelector('#orders'), {
  title: 'Orders by hour',
  rows: ['Mon', 'Tue', 'Wed'],
  columns: ['8:00', '9:00', '10:00'],
  values: [[12, 30, 41], [9, 28, 44], [14, 26, 39]],
  valueLabel: 'orders',
});

createCalendarHeatmap(document.querySelector('#activity'), {
  title: 'Activity this year',
  start: '2025-11-02',
  values: activityByDay, // one number per day
  valueLabel: 'deliveries',
});
```

### createHeatmap()

| Option | Type | Default | What for |
| --- | --- | --- | --- |
| `rows · columns` | string[] | — | Row labels (on the left) and column labels (at the bottom). |
| `values` | (number \| null)[][] | — | `values[row][column]`. `null` becomes an empty cell, with “No data” in the tooltip. |
| `scale` | 'sequential' \| 'diverging' | 'sequential' | One hue from little to a lot, or two hues with a neutral middle. |
| `steps` | 3 – 7 | 5 | How many color bands. More than 7 makes neighbors indistinguishable. |
| `domain` | [min, max] | from the data | Fix it to compare different maps on the same scale. |
| `center` | number | 0 | The value of the neutral middle on the diverging scale (e.g., the average). |
| `zeroEmpty` | boolean | true | Zero shows as an empty cell on the sequential scale. |
| `format · valueLabel` | preset \| Intl \| function · string | 'number' · — | Value in the tooltip, table, and legend; unit after the number. |
| `cellHeight` | number | square | Cell height; by default it follows the width, between 14 and 32 px. |
| `scaleLegend · scaleLabels` | boolean · [string, string] | true · min./max. | Scale legend at the bottom, with the extremes or “Less/More”. |
| `title · subtitle · label · card · table` | — | — | Same as every chart. |

### createCalendarHeatmap()

| Option | Type | Default | What for |
| --- | --- | --- | --- |
| `start` | 'YYYY-MM-DD' \| Date | today | First day. Columns are weeks, Sunday to Saturday. |
| `values` | (number \| null)[] | — | One value per day, from start. |
| `steps · format · valueLabel` | — | 5 · 'integer' · — | As in the heatmap; the scale is always sequential. |
| `scaleLabels` | [string, string] | ['Less', 'More'] | Ends of the scale legend. |

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```
