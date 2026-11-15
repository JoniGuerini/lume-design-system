# Charts

Lume section: Charts. Page: https://lumeui.dev/#/graficos/visao-geral

Data that reads at a glance and holds up to a second look. Thin marks, one color per role, labels only where they matter — and every piece of information reachable by keyboard and as a table.

In numbers: forms: 6 · categorical colors: 8 · worst ΔE between neighbors: 11.7 · mark contrast: ≥ 3.3:1.

## Live example

A dashboard with a single filter at the top: the period applies to everything below it, so the numbers always agree. When it changes, the charts hold the previous drawing while they update — no skeleton, no jump.

Markup of the examples in this section:

```html
<div class="ds-segmented" role="radiogroup" aria-labelledby="vg-periodo-label">
<button type="button" class="ds-segmented__item" role="radio" data-range="7d" aria-checked="false">7 days</button><button type="button" class="ds-segmented__item" role="radio" data-range="30d" aria-checked="true">30 days</button><button type="button" class="ds-segmented__item" role="radio" data-range="90d" aria-checked="false">90 days</button><button type="button" class="ds-segmented__item" role="radio" data-range="12m" aria-checked="false">12 months</button>
</div>
```

## Which chart to use

Choose by the reader’s task, before thinking about color. Sometimes the right answer isn’t a chart at all.

Compare quantities

Bars

From largest to smallest, across categories or over time. Always starts at zero.

Show a trend

Lines and areas

How something changes over time. Compare with the previous period in gray.

Part of a whole

Donut

The proportion at a glance, with up to 6 slices. Close values call for bars.

Relationship between measures

Scatter

Two quantities per item: correlation, clusters, and outliers.

Intensity on a grid

Heatmap

Day × hour, week × month: where it concentrates. Up to 7 color bands.

A number that matters

Indicators

The current value, the change, and the trend. The number is the chart.

### When it isn’t a chart

A single value — A lone column or a two-slice pie becomes an indicator. The number is the chart.

Exact values or more than 7 classes — Beyond 7 meaningful colors, neighbors get confused. Use a table — or a table and a chart together.

One series is the story — Highlight that series in color and leave the others gray. Emphasis is clearer than eight colors fighting for attention.

Markup of the examples in this section:

```html
<path class="ds-chart__grid" d="M8 63.5H112"></path>

<rect x="12" y="37" width="8" height="26" rx="2" class="ds-chart__bar"></rect>

<rect x="26" y="25" width="8" height="38" rx="2" class="ds-chart__bar"></rect>

<rect x="40" y="32" width="8" height="31" rx="2" class="ds-chart__bar"></rect>

<rect x="54" y="17" width="8" height="46" rx="2" class="ds-chart__bar"></rect>

<rect x="68" y="11" width="8" height="52" rx="2" class="ds-chart__bar"></rect>

<rect x="82" y="19" width="8" height="44" rx="2" class="ds-chart__bar"></rect>

<rect x="96" y="5" width="8" height="58" rx="2" class="ds-chart__bar"></rect>
```

## Color

Each color does one job: identity (categorical), quantity (sequential), step (ordinal), side of a reference (diverging), or state (status). And none was picked by eye — the order came from a validator.

### Categorical identity · fixed order, never recycle

- 1 — Brand — `brand.600` — #D95C0A
- 2 — Blue — `blue.600` — #2A8ED6
- 3 — Pink — `pink.600` — #CD5892
- 4 — Amber — `amber.700` — #A86600
- 5 — Teal — `teal.600` — #019D90
- 6 — Red — `red.600` — #E44B46
- 7 — Violet — `violet.600` — #9070DD
- 8 — Green — `green.600` — #339F5C

The same hues passed in both themes — validated against the dark and the light surface. From the 9th series on there’s no new color: the tail becomes “Others”.

11.7 — worst ΔE between neighbors with protanopia and deuteranopia — target ≥ 8 — 18.5 — worst ΔE between neighbors with typical vision — minimum 15 — 11.8 · 15.1 — the first 3 across all pairs, for scatter — color blindness · typical vision — 3.4 · 3.5 — lowest contrast of a mark against the surface — Lume light · Lume dark · minimum 3:1

Typical vision — Protanopia — Deuteranopia — Simulation by Machado, Oliveira, and Fernandes (2009). Neighbors stay distinct even without telling red from green.

### Scales one hue per job · each theme with its own steps

Lume light

Sequential `chart.seq.1–7` — little — a lot

Ordinal `chart.ord.1–5` — 1st step — 5th step

Diverging `chart.div.1–7` — below — neutral — above

Lume dark

Sequential `chart.seq.1–7` — little — a lot

Ordinal `chart.ord.1–5` — 1st step — 5th step

Diverging `chart.div.1–7` — below — neutral — above

- Sequential. Magnitude: a single hue, from little to a lot. In dark mode the anchor flips — more is lighter.
- Ordinal. Steps in order (funnel, bands). The faintest end still passes 2:1 on the surface.
- Diverging. Below and above a reference: cool and warm, with a neutral gray middle.

### Status reserved

- Good — Goal met, normal operation
- Warning — Close to the limit
- Critical — Over the limit, failure
- Info — Neutral, just to inform

Only when the color means good or bad — and always with an icon and text. Never as “series 4”.

### Context

- `chart.muted` — Emphasis: the rest in gray, so one series stands out
- `chart.other` — “Others”: the grouped tail
- `chart.grid` — Grid and cells without data
- `chart.axis` — Baseline, axes, and crosshair

### Color follows the entity try it

## Anatomy

Seven pieces, always in the same place. The title names what’s plotted; with a single series, there’s no need for a legend.

- 1 — Title and subtitle — What’s plotted and in which unit. A short phrase, no colon.
- 2 — Legend — Whenever there are two or more series. The key mirrors the mark: a stroke for lines, a square for bars.
- 3 — Axis and grid — 1 px recessive lines. Round ticks, compacted from a thousand.
- 4 — Mark — The only thing with strong color. A 2 px line, an 8 px end dot with a ring.
- 5 — Direct label — At the end of the line, only if it doesn’t collide. Text in the text color — never in the series color.
- 6 — Tooltip — On hover and focus. The value comes first and strong; the series name, after.
- 7 — Table — The accessible twin: every number, including the ones the chart doesn’t label.

## Marks and breathing room

The calm look comes from a few fixed measurements and two negative spaces. Only the data gets to be loud.

Bar — Up to 24 px thick. The data end has a 4 px radius; the straight base grows from a single line.

Line — 2 px, with rounded caps and joins. No lines too thin to read or so thick they weigh the chart down.

Marker — 8 px, with a 2 px ring in the surface color — the dot stays legible where it crosses a line.

2 px of breathing room — A gap in the surface color separates stacked segments and neighboring bars. Never an outline around them.

Area — The series color at 10% under the line: a wash, never a saturated block.

Grid and goal — A 1 px grid, solid and one step off the surface. Dashes are reserved for goals and limits.

Markup of the examples in this section:

```html
<path class="ds-chart__baseline" d="M20 84.5H140"></path>

<path class="ds-chart__bar" d="M68 84V28A4 4 0 0 1 72 24H88A4 4 0 0 1 92 28V84Z"></path>

<path class="ds-chart__grid" d="M16 76.5H144M16 44.5H144"></path>

<path class="ds-chart__line" d="M16 70 44 58 72 62 100 36 128 30 144 22"></path>

<path class="ds-chart__line" d="M16 70 80 40 144 30"></path>

<path class="ds-chart__line" d="M16 30 80 44 144 72"></path>

<circle class="ds-chart__dot" cx="80" cy="44" r="6"></circle>

<path class="ds-chart__bar" d="M52 84H76V60H52Z"></path>
```

## Interaction

Every chart comes interactive. The tooltip complements — it’s never the only way to a value.

- Tooltip — Strong value, muted name, a stroke key. On lines, it shows every series at that point.
- Crosshair — A vertical line finds the closest date. No one has to hit a 2 px line.
- A legend that hides — Click a series to remove it from the chart. The others don’t change color.
- Table — The icon in the corner swaps the chart for the numbers.
- Keyboard — Tab ← → Home End Esc — Tab focuses the chart; the arrows walk through the points and the screen reader announces each one.

## Accessibility

Decisions that come built into every chart — and the ones that are still yours.

- Never color alone — Two or more series get a legend; up to four, a direct label too. Status comes with an icon and text.
- A colorblind-validated palette — Neighbors separated by ΔE ≥ 8 with protanopia and deuteranopia, and ≥ 15 with typical vision, in both themes.
- A table in every chart — The “View as table” button shows every number. It’s the accessible equivalent, not an extra.
- Keyboard and screen reader — Tab ← → Esc — The chart takes focus, the arrows walk through the values, and a live region announces each one.
- Mark contrast — Every categorical color passes 3:1 against the surface — 3.4:1 in Lume light and 3.5:1 in Lume dark, in the worst case.
- Backup texture — With `texture: true`, bars and slices get hatching at 45° and 135° — in print and high contrast too.
- Reduced motion — The entrance animates once, when the chart appears. With `prefers-reduced-motion`, it doesn’t.
- Data text is yours — Series and category names go in as text, never as HTML — they come from spreadsheets and APIs.

## Tokens

Marks consume `color.chart.*`; text, always `color.fg.*`. Change the brand and the chart changes with it.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Series 1 · Brand | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Series 2 · Blue | #2A8ED6 | #2A8ED6 |
| color.chart.series.3 (`--ds-color-chart-series-3`) | Series 3 · Pink | #CD5892 | #CD5892 |
| color.chart.series.4 (`--ds-color-chart-series-4`) | Series 4 · Amber | #A86600 | #A86600 |
| color.chart.series.5 (`--ds-color-chart-series-5`) | Series 5 · Teal | #019D90 | #019D90 |
| color.chart.series.6 (`--ds-color-chart-series-6`) | Series 6 · Red | #E44B46 | #E44B46 |
| color.chart.series.7 (`--ds-color-chart-series-7`) | Series 7 · Violet | #9070DD | #9070DD |
| color.chart.series.8 (`--ds-color-chart-series-8`) | Series 8 · Green | #339F5C | #339F5C |
| color.chart.muted (`--ds-color-chart-muted`) | Gray context (emphasis) | #C0CAD6 | #4A4744 |
| color.chart.other (`--ds-color-chart-other`) | “Others” | #93A0B0 | #605D59 |
| color.chart.seq.1 (`--ds-color-chart-seq-1`) | Sequential 1 · little | #FFE7DB | #712800 |
| color.chart.seq.2 (`--ds-color-chart-seq-2`) | Sequential 2 | #FFB590 | #923700 |
| color.chart.seq.3 (`--ds-color-chart-seq-3`) | Sequential 3 | #FF945E | #B74900 |
| color.chart.seq.4 (`--ds-color-chart-seq-4`) | Sequential 4 | #F57630 | #D95C0A |
| color.chart.seq.5 (`--ds-color-chart-seq-5`) | Sequential 5 | #D95C0A | #F57630 |
| color.chart.seq.6 (`--ds-color-chart-seq-6`) | Sequential 6 | #B74900 | #FF945E |
| color.chart.seq.7 (`--ds-color-chart-seq-7`) | Sequential 7 · a lot | #923700 | #FFB590 |
| color.chart.ord.1 (`--ds-color-chart-ord-1`) | Ordinal 1 | #FF945E | #923700 |
| color.chart.ord.2 (`--ds-color-chart-ord-2`) | Ordinal 2 | #F57630 | #B74900 |
| color.chart.ord.3 (`--ds-color-chart-ord-3`) | Ordinal 3 | #D95C0A | #D95C0A |
| color.chart.ord.4 (`--ds-color-chart-ord-4`) | Ordinal 4 | #B74900 | #F57630 |
| color.chart.ord.5 (`--ds-color-chart-ord-5`) | Ordinal 5 | #923700 | #FF945E |
| color.chart.div.1 (`--ds-color-chart-div-1`) | Diverging 1 · below | #1776B5 | #6ABCFF |
| color.chart.div.2 (`--ds-color-chart-div-2`) | Diverging 2 · below | #48A7F1 | #2A8ED6 |
| color.chart.div.3 (`--ds-color-chart-div-3`) | Diverging 3 · below | #98D0FF | #095C92 |
| color.chart.div.4 (`--ds-color-chart-div-4`) | Diverging 4 · neutral | #DAE0E8 | #3D3B38 |
| color.chart.div.5 (`--ds-color-chart-div-5`) | Diverging 5 · above | #FFB590 | #923700 |
| color.chart.div.6 (`--ds-color-chart-div-6`) | Diverging 6 · above | #F57630 | #D95C0A |
| color.chart.div.7 (`--ds-color-chart-div-7`) | Diverging 7 · above | #B74900 | #FF945E |
| color.chart.status.good (`--ds-color-chart-status-good`) | Status · good | #339F5C | #51B873 |
| color.chart.status.warning (`--ds-color-chart-status-warning`) | Status · warning | #F6A10C | #FFB851 |
| color.chart.status.critical (`--ds-color-chart-status-critical`) | Status · critical | #E44B46 | #E44B46 |
| color.chart.grid (`--ds-color-chart-grid`) | Grid and empty cell | #DAE0E8 | #33312E |
| color.chart.axis (`--ds-color-chart-axis`) | Baseline, axis, and crosshair | #C0CAD6 | #4A4744 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Axis ticks | #5C6C7F | #9C9792 |
| color.fg.muted (`--ds-color-fg-muted`) | Labels and names | #46586E | #CEC8C1 |
| color.bg.raised (`--ds-color-bg-raised`) | Tooltip background | #FFFFFF | #2C2A27 |

## Usage

What goes wrong most often in charts — and what to do instead.

- **Avoid:** two vertical axes. The alignment between the scales is arbitrary and invents a correlation. Use two charts or an index based at 100.
- **Avoid:** a rainbow scale. Magnitude is a single hue, from light to dark. Many hues make the eye look for categories that don’t exist.
- **Do:** color follows the entity. Filtered or hid a series? The remaining ones keep their color. Whoever learned “App is blue” must not be misled.
- **Tip:** Donuts only for part of a whole. Up to 6 slices; from the 6th on, “Others”. To compare close values, bars read much better.
- **Avoid:** a number on every point. Label the end, the peak, or the series that tells the story. The axis, tooltip, and table carry the rest.
- **Do:** more than 8 series, group them. There’s no 9th color. The tail becomes “Others”, or the chart becomes small multiples.

## API

One function per form, the same conversation in all of them: mount on an element, take options, and return controls.

```html
import { createBarChart } from 'https://lumeui.dev/v/1.1/lume.js';

const chart = createBarChart(document.querySelector('#sales'), {
  title: 'Revenue by month',
  subtitle: 'In reais · 2026',
  categories: ['Jan', 'Feb', 'Mar'],
  series: [{ name: 'Revenue', values: [82000, 91000, 88000] }],
  format: 'currency',
});

chart.setLoading(true);           // holds the drawing while fetching
chart.update({ series: next });  // redraws with the new options
chart.setLoading(false);
chart.destroy();                  // cleans everything up when leaving the screen
```

### Common options

|   |   |
| --- | --- |
|  `title · subtitle`  | Title and supporting line in the frame. The title also names the chart for screen readers. |
|  `label`  | Accessible name when there’s no visible title. |
|  `card`  | A surface with outline and radius — for dashboards. |
|  `height`  | Total height, including the x-axis band. Horizontal bars grow with the number of rows. |
|  `format · axisFormat`  | Format of the values (tooltip, labels, table) and of the axis. The axis compacts on its own from a thousand. |
|  `table`  | “View as table” button. On by default — turn it off only if the table is on screen. |
|  `texture`  | Hatching at 45° and 135° as a backup channel (total color blindness, print). |
|  `empty`  | Empty state text. |

### Formats en

|   |   |
| --- | --- |
|  `'number'`  | 1,234.6 |
|  `'integer'`  | 1,235 |
|  `'compact'`  | 1.3M |
|  `'percent'`  | 12.4% |
|  `'currency'`  | R$1,235 |
|  `'currency-compact'`  | R$1.3M |
|  `{ … } · (v) => …`  | Intl.NumberFormat options or a function |

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
```
