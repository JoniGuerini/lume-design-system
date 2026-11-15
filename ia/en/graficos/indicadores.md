# Indicators

Lume section: Charts. Page: https://lumeui.dev/#/graficos/indicadores

When the chart is a number. The current value, how much it changed, and where it’s heading — no axis, no legend, no effort to read.

In numbers: pieces: 3 · hero per screen: 1 · change directions: 3 · meter tones: 4.

## Example

```html
import { statTileHtml } from 'https://lumeui.dev/v/1.1/lume.js';

el.innerHTML = statTileHtml({
  label: 'Revenue',
  value: 1284000,
  format: 'currency-compact',
  delta: 0.124,
  deltaLabel: 'vs. last month',
  trend: [8, 9, 9, 11, …],
});
```

## Anatomy

Five parts, always in this order. Only the label and the value are required.

- 1 — Label — What’s measured, in sentence case and without a colon.
- 2 — Value — Sans semibold, compacted (38.2K; R$1.3M). Proportional figures.
- 3 — Change optional — Sign, icon, and text together. The color says whether it got better or worse — never alone.
- 4 — Period optional — What the change was measured against. Without it, the number says nothing.
- 5 — Trend optional — Sparkline in the context tone; the current point in the highlight color.

Markup of the examples in this section:

```html
<article class="ds-stat">
<p class="ds-stat__label">Active customers</p>
<p class="ds-stat__value">38,210</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+13.7%</span><span class="ds-visually-hidden"> (improving)</span></span>
<span class="ds-stat__period">vs. last month</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Active customers trend"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 28C5.85 27.48 8.7 26.44 11.55 26.44C14.39 26.44 17.24 26.99 20.09 26.99C22.94 26.99 25.79 23.72 28.64 22.67C31.48 21.62 34.33 21.08 37.18 20.18C40.03 19.29 42.88 17.24 45.73 17.24C48.58 17.24 51.42 17.89 54.27 17.89C57.12 17.89 59.97 15.4 62.82 14.39C65.67 13.38 68.52 11.72 71.36 11.72C74.21 11.72 77.06 12.28 79.91 12.28C82.76 12.28 85.61 9.61 88.45 8.23C91.3 6.85 94.15 5.41 97 4L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 28C5.85 27.48 8.7 26.44 11.55 26.44C14.39 26.44 17.24 26.99 20.09 26.99C22.94 26.99 25.79 23.72 28.64 22.67C31.48 21.62 34.33 21.08 37.18 20.18C40.03 19.29 42.88 17.24 45.73 17.24C48.58 17.24 51.42 17.89 54.27 17.89C57.12 17.89 59.97 15.4 62.82 14.39C65.67 13.38 68.52 11.72 71.36 11.72C74.21 11.72 77.06 12.28 79.91 12.28C82.76 12.28 85.61 9.61 88.45 8.23C91.3 6.85 94.15 5.41 97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>
```

## Indicator row

The numbers that open a dashboard. Same structure, same comparison period, from most to least important.

- 2 to 5 per row. More than that becomes a table.
- All compared with the same period — or each one says its own.
- Clickable when it leads to a detail (`href`).

Markup of the examples in this section:

```html
<article class="ds-stat">
<p class="ds-stat__label">Revenue</p>
<p class="ds-stat__value">R$149K</p>
<p class="ds-stat__delta" data-tone="bad">
<span class="ds-stat__change"><ds-icon name="trending-down"></ds-icon><span>−2%</span><span class="ds-visually-hidden"> (worsening)</span></span>
<span class="ds-stat__period">vs. November</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Revenue trend"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 28C5.85 26.97 8.7 24.91 11.55 24.91C14.39 24.91 17.24 25.94 20.09 25.94C22.94 25.94 25.79 21.68 28.64 20.46C31.48 19.24 34.33 17.71 37.18 17.71C40.03 17.71 42.88 22.51 45.73 22.51C48.58 22.51 51.42 16.65 54.27 14.97C57.12 13.3 59.97 11.2 62.82 11.2C65.67 11.2 68.52 12.91 71.36 12.91C74.21 12.91 77.06 9.59 79.91 8.11C82.76 6.64 85.61 4 88.45 4C91.3 4 94.15 4.69 97 5.03L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 28C5.85 26.97 8.7 24.91 11.55 24.91C14.39 24.91 17.24 25.94 20.09 25.94C22.94 25.94 25.79 21.68 28.64 20.46C31.48 19.24 34.33 17.71 37.18 17.71C40.03 17.71 42.88 22.51 45.73 22.51C48.58 22.51 51.42 16.65 54.27 14.97C57.12 13.3 59.97 11.2 62.82 11.2C65.67 11.2 68.52 12.91 71.36 12.91C74.21 12.91 77.06 9.59 79.91 8.11C82.76 6.64 85.61 4 88.45 4C91.3 4 94.15 4.69 97 5.03" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Active customers</p>
<p class="ds-stat__value">38,200</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+13.7%</span><span class="ds-visually-hidden"> (improving)</span></span>
<span class="ds-stat__period">vs. November</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Active customers trend"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 28C5.85 27.48 8.7 26.44 11.55 26.44C14.39 26.44 17.24 26.99 20.09 26.99C22.94 26.99 25.79 23.72 28.64 22.67C31.48 21.62 34.33 21.08 37.18 20.18C40.03 19.29 42.88 17.24 45.73 17.24C48.58 17.24 51.42 17.89 54.27 17.89C57.12 17.89 59.97 15.4 62.82 14.39C65.67 13.38 68.52 11.72 71.36 11.72C74.21 11.72 77.06 12.28 79.91 12.28C82.76 12.28 85.61 9.61 88.45 8.23C91.3 6.85 94.15 5.41 97 4L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 28C5.85 27.48 8.7 26.44 11.55 26.44C14.39 26.44 17.24 26.99 20.09 26.99C22.94 26.99 25.79 23.72 28.64 22.67C31.48 21.62 34.33 21.08 37.18 20.18C40.03 19.29 42.88 17.24 45.73 17.24C48.58 17.24 51.42 17.89 54.27 17.89C57.12 17.89 59.97 15.4 62.82 14.39C65.67 13.38 68.52 11.72 71.36 11.72C74.21 11.72 77.06 12.28 79.91 12.28C82.76 12.28 85.61 9.61 88.45 8.23C91.3 6.85 94.15 5.41 97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Response time</p>
<p class="ds-stat__value">182 ms</p>
<p class="ds-stat__delta" data-tone="bad">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+8%</span><span class="ds-visually-hidden"> (worsening)</span></span>
<span class="ds-stat__period">vs. last week</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Response time trend"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 28C5.85 25.71 8.7 21.14 11.55 21.14C14.39 21.14 17.24 24.57 20.09 24.57C22.94 24.57 25.79 14.29 28.64 14.29C31.48 14.29 34.33 17.71 37.18 17.71C40.03 17.71 42.88 12.38 45.73 10.86C48.58 9.33 51.42 7.43 54.27 7.43C57.12 7.43 59.97 14.29 62.82 14.29C65.67 14.29 68.52 10.51 71.36 8.8C74.21 7.09 77.06 4 79.91 4C82.76 4 85.61 7.43 88.45 7.43C91.3 7.43 94.15 6.51 97 6.06L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 28C5.85 25.71 8.7 21.14 11.55 21.14C14.39 21.14 17.24 24.57 20.09 24.57C22.94 24.57 25.79 14.29 28.64 14.29C31.48 14.29 34.33 17.71 37.18 17.71C40.03 17.71 42.88 12.38 45.73 10.86C48.58 9.33 51.42 7.43 54.27 7.43C57.12 7.43 59.97 14.29 62.82 14.29C65.67 14.29 68.52 10.51 71.36 8.8C74.21 7.09 77.06 4 79.91 4C82.76 4 85.61 7.43 88.45 7.43C91.3 7.43 94.15 6.51 97 6.06" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Open tickets</p>
<p class="ds-stat__value">46</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-down"></ds-icon><span>−21%</span><span class="ds-visually-hidden"> (improving)</span></span>
<span class="ds-stat__period">vs. last week</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Open tickets trend"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 4C5.85 5.33 8.7 8 11.55 8C14.39 8 17.24 6 20.09 6C22.94 6 25.79 13 28.64 13C31.48 13 34.33 11 37.18 11C40.03 11 42.88 15.44 45.73 16C48.58 16.56 51.42 16.56 54.27 17C57.12 17.44 59.97 18.2 62.82 19C65.67 19.8 68.52 21.2 71.36 22C74.21 22.8 77.06 23.56 79.91 24C82.76 24.44 85.61 24.5 88.45 25C91.3 25.5 94.15 27 97 28L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 4C5.85 5.33 8.7 8 11.55 8C14.39 8 17.24 6 20.09 6C22.94 6 25.79 13 28.64 13C31.48 13 34.33 11 37.18 11C40.03 11 42.88 15.44 45.73 16C48.58 16.56 51.42 16.56 54.27 17C57.12 17.44 59.97 18.2 62.82 19C65.67 19.8 68.52 21.2 71.36 22C74.21 22.8 77.06 23.56 79.91 24C82.76 24.44 85.61 24.5 88.45 25C91.3 25.5 94.15 27 97 28" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>
```

## Hero number

The number the whole screen exists to show. Only one per view, in the same sans as the rest — a display or serif font looks like decoration.

Proportional figures in the big number

At large sizes, tabular figures give each digit the width of a zero and the “1” floats loose. Save `tabular-nums` for columns that need to align.

Markup of the examples in this section:

```html
<article class="ds-stat ds-stat--hero">
<p class="ds-stat__label">Revenue in 2026</p>
<p class="ds-stat__value">R$1.4M</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+27.9%</span><span class="ds-visually-hidden"> (improving)</span></span>
<span class="ds-stat__period">vs. 2025</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Revenue in 2026 trend"><svg viewBox="0 0 100 44" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 40C5.85 38.46 8.7 35.37 11.55 35.37C14.39 35.37 17.24 36.91 20.09 36.91C22.94 36.91 25.79 30.51 28.64 28.69C31.48 26.86 34.33 24.57 37.18 24.57C40.03 24.57 42.88 31.77 45.73 31.77C48.58 31.77 51.42 22.97 54.27 20.46C57.12 17.94 59.97 14.8 62.82 14.8C65.67 14.8 68.52 17.37 71.36 17.37C74.21 17.37 77.06 12.39 79.91 10.17C82.76 7.96 85.61 4 88.45 4C91.3 4 94.15 5.03 97 5.54L97 44L3 44Z"></path><path class="ds-sparkline__line" d="M3 40C5.85 38.46 8.7 35.37 11.55 35.37C14.39 35.37 17.24 36.91 20.09 36.91C22.94 36.91 25.79 30.51 28.64 28.69C31.48 26.86 34.33 24.57 37.18 24.57C40.03 24.57 42.88 31.77 45.73 31.77C48.58 31.77 51.42 22.97 54.27 20.46C57.12 17.94 59.97 14.8 62.82 14.8C65.67 14.8 68.52 17.37 71.36 17.37C74.21 17.37 77.06 12.39 79.91 10.17C82.76 7.96 85.61 4 88.45 4C91.3 4 94.15 5.03 97 5.54" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m9 9 6 6M15 9l-6 6"></path></svg>
```

## Sparkline

The trend without axes, inline with the text. It stretches to its container’s width and the stroke doesn’t distort.

With area — The default: a line in the context tone, a light wash, and the current point in the highlight color.

Line only — For table rows and tight spots, where the area would weigh it down.

No dot — When “now” doesn’t matter — only the shape of the curve.

Straight — Points joined by segments, for short or stepped series.

### Inside a table

Markup of the examples in this section:

```html
<span class="ds-sparkline" aria-hidden="true"><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 44C5.85 43.13 8.7 41.39 11.55 41.39C14.39 41.39 17.24 42.31 20.09 42.31C22.94 42.31 25.79 36.86 28.64 35.11C31.48 33.36 34.33 32.47 37.18 30.97C40.03 29.48 42.88 26.07 45.73 26.07C48.58 26.07 51.42 27.14 54.27 27.14C57.12 27.14 59.97 23 62.82 21.32C65.67 19.64 68.52 16.87 71.36 16.87C74.21 16.87 77.06 17.79 79.91 17.79C82.76 17.79 85.61 13.35 88.45 11.05C91.3 8.75 94.15 6.35 97 4L97 48L3 48Z"></path><path class="ds-sparkline__line" d="M3 44C5.85 43.13 8.7 41.39 11.55 41.39C14.39 41.39 17.24 42.31 20.09 42.31C22.94 42.31 25.79 36.86 28.64 35.11C31.48 33.36 34.33 32.47 37.18 30.97C40.03 29.48 42.88 26.07 45.73 26.07C48.58 26.07 51.42 27.14 54.27 27.14C57.12 27.14 59.97 23 62.82 21.32C65.67 19.64 68.52 16.87 71.36 16.87C74.21 16.87 77.06 17.79 79.91 17.79C82.76 17.79 85.61 13.35 88.45 11.05C91.3 8.75 94.15 6.35 97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span>

<span class="ds-sparkline" aria-hidden="true"><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__line" d="M3 44C5.85 43.13 8.7 41.39 11.55 41.39C14.39 41.39 17.24 42.31 20.09 42.31C22.94 42.31 25.79 36.86 28.64 35.11C31.48 33.36 34.33 32.47 37.18 30.97C40.03 29.48 42.88 26.07 45.73 26.07C48.58 26.07 51.42 27.14 54.27 27.14C57.12 27.14 59.97 23 62.82 21.32C65.67 19.64 68.52 16.87 71.36 16.87C74.21 16.87 77.06 17.79 79.91 17.79C82.76 17.79 85.61 13.35 88.45 11.05C91.3 8.75 94.15 6.35 97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span>

<span class="ds-sparkline" aria-hidden="true"><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__line" d="M3 44C5.85 43.13 8.7 41.39 11.55 41.39C14.39 41.39 17.24 42.31 20.09 42.31C22.94 42.31 25.79 36.86 28.64 35.11C31.48 33.36 34.33 32.47 37.18 30.97C40.03 29.48 42.88 26.07 45.73 26.07C48.58 26.07 51.42 27.14 54.27 27.14C57.12 27.14 59.97 23 62.82 21.32C65.67 19.64 68.52 16.87 71.36 16.87C74.21 16.87 77.06 17.79 79.91 17.79C82.76 17.79 85.61 13.35 88.45 11.05C91.3 8.75 94.15 6.35 97 4" vector-effect="non-scaling-stroke"></path></svg></span>

<span class="ds-sparkline" aria-hidden="true"><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 44L11.55 41.39L20.09 42.31L28.64 35.11L37.18 30.97L45.73 26.07L54.27 27.14L62.82 21.32L71.36 16.87L79.91 17.79L88.45 11.05L97 4L97 48L3 48Z"></path><path class="ds-sparkline__line" d="M3 44L11.55 41.39L20.09 42.31L28.64 35.11L37.18 30.97L45.73 26.07L54.27 27.14L62.82 21.32L71.36 16.87L79.91 17.79L88.45 11.05L97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span>
```

## Meter

A ratio against a limit. The fill carries the severity — brand, warning, critical — and the track is a lighter tint of the same color. From warning on, it gets an icon.

Two pie slices are a meter. For several parts of a whole, use the donut or stacked bars.

Markup of the examples in this section:

```html
<div class="ds-meter ds-meter--brand" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="42" aria-valuetext="42 GB of 100 GB" aria-label="Storage">
<div class="ds-meter__head">
<span class="ds-meter__label">Storage</span>
<span class="ds-meter__value"><strong>42 GB</strong><span> of 100 GB</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Plan limit: 100 GB</p>
</div>

<div class="ds-meter ds-meter--warning" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="78" aria-valuetext="78 of 100, warning" aria-label="API quota">
<div class="ds-meter__head">
<span class="ds-meter__label">API quota</span>
<span class="ds-meter__value"><ds-icon name="alert-triangle"></ds-icon><strong>78</strong><span> of 100</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Warning from 75% — renews in 3 days</p>
</div>

<div class="ds-meter ds-meter--danger" role="meter" aria-valuemin="0" aria-valuemax="5000" aria-valuenow="4700" aria-valuetext="R$4.7K of R$5K, critical" aria-label="Limit used">
<div class="ds-meter__head">
<span class="ds-meter__label">Limit used</span>
<span class="ds-meter__value"><ds-icon name="alert-circle"></ds-icon><strong>R$4.7K</strong><span> of R$5K</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Critical from 90%</p>
</div>

<div class="ds-meter ds-meter--success" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="112" aria-valuetext="112 of 100, ok" aria-label="Sales goal">
<div class="ds-meter__head">
<span class="ds-meter__label">Sales goal</span>
<span class="ds-meter__value"><strong>112</strong><span> of 100</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Goal met — success tone forced with tone</p>
</div>

<div class="ds-meter ds-meter--brand ds-meter--sm" role="meter" aria-valuemin="0" aria-valuemax="5" aria-valuenow="3" aria-valuetext="3 steps of 5 steps" aria-label="Onboarding">
<div class="ds-meter__head">
<span class="ds-meter__label">Onboarding</span>
<span class="ds-meter__value"><strong>3 steps</strong><span> of 5 steps</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
</div>

<div class="ds-meter ds-meter--danger ds-meter--sm" role="meter" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0.86" aria-valuetext="86%, critical" aria-label="Team space">
<div class="ds-meter__head">
<span class="ds-meter__label">Team space</span>
<span class="ds-meter__value"><ds-icon name="alert-circle"></ds-icon><strong>86%</strong></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Custom thresholds: warning at 60%, critical at 85%</p>
</div>
```

## Change

The color comes from two facts: where the number went and whether that’s good. The same rise can be better or worse — that’s why the sign, icon, and text always come together.

It went up and up is good: better.

It went up, but down is good: worse.

It went down and down is good: better.

It went down and up is good: worse.

It didn’t change: flat, no color.

No good side: it just informs.

Markup of the examples in this section:

```html
<article class="ds-stat">
<p class="ds-stat__label">Revenue</p>
<p class="ds-stat__value">R$1.3M</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+12.4%</span><span class="ds-visually-hidden"> (improving)</span></span>
<span class="ds-stat__period">vs. last month</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Acquisition cost</p>
<p class="ds-stat__value">R$84</p>
<p class="ds-stat__delta" data-tone="bad">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+8%</span><span class="ds-visually-hidden"> (worsening)</span></span>
<span class="ds-stat__period">vs. last month</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Response time</p>
<p class="ds-stat__value">182 ms</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-down"></ds-icon><span>−14%</span><span class="ds-visually-hidden"> (improving)</span></span>
<span class="ds-stat__period">vs. last month</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Active customers</p>
<p class="ds-stat__value">38,210</p>
<p class="ds-stat__delta" data-tone="bad">
<span class="ds-stat__change"><ds-icon name="trending-down"></ds-icon><span>−3.1%</span><span class="ds-visually-hidden"> (worsening)</span></span>
<span class="ds-stat__period">vs. last month</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Visits</p>
<p class="ds-stat__value">12,400</p>
<p class="ds-stat__delta" data-tone="neutral">
<span class="ds-stat__change"><ds-icon name="minus"></ds-icon><span>0%</span><span class="ds-visually-hidden"> (stable)</span></span>
<span class="ds-stat__period">vs. last month</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Server temperature</p>
<p class="ds-stat__value">41 °C</p>
<p class="ds-stat__delta" data-tone="neutral">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+2%</span><span class="ds-visually-hidden"> (stable)</span></span>
<span class="ds-stat__period">vs. yesterday</span>
</p>
</article>
```

## Accessibility

The indicator is text, so it starts out accessible. These details complete it.

- The number is text — Value, change, and period are real text — screen readers read it, search engines find it, you can copy it.
- Better or worse, in writing — The change carries hidden text — “(better)”, “(worse)”, or “(flat)” — because color doesn’t reach the screen reader.
- Never color alone — The sign (+ or −) and an up or down icon go with the color. It works in grayscale and for colorblind people.
- A named sparkline — With `trendLabel` or `label`, it becomes an image with a description; without, it stays hidden — the number already said it all.
- A semantic meter — `role="meter"` with value, minimum, maximum, and text that includes the state: “92 of 100, critical”.
- Change contrast — Green and red text (`success.fg`, `danger.fg`) pass 4.5:1 in both themes.

## Tokens

What the indicator, sparkline, and meter consume.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Indicator background | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Outline | #3E516624 | #FFFFFF0F |
| radius.xl (`--ds-radius-xl`) | Indicator radius | 20 px | 20 px |
| color.fg.muted (`--ds-color-fg-muted`) | Label | #46586E | #CEC8C1 |
| color.fg.default (`--ds-color-fg-default`) | Value | #2B3847 | #F3EDE5 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Period | #5C6C7F | #9C9792 |
| color.success.fg (`--ds-color-success-fg`) | Change for the better | #0F6939 | #97DCA8 |
| color.danger.fg (`--ds-color-danger-fg`) | Change for the worse | #C13834 | #FFB2AA |
| color.chart.other (`--ds-color-chart-other`) | Sparkline line | #93A0B0 | #605D59 |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Sparkline current point | #D95C0A | #D95C0A |
| color.brand.solid (`--ds-color-brand-solid`) | Normal meter | #3E5166 | #C0CAD6 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Normal meter track | #EEF2F6 | #C0CAD624 |
| color.chart.status.warning (`--ds-color-chart-status-warning`) | Meter in warning | #F6A10C | #FFB851 |
| color.chart.status.critical (`--ds-color-chart-status-critical`) | Critical meter | #E44B46 | #E44B46 |
| color.chart.status.good (`--ds-color-chart-status-good`) | Meter with goal met | #339F5C | #51B873 |
| radius.full (`--ds-radius-full`) | Meter track | 9999 px | 9999 px |

## Usage

When a number is enough — and how not to ruin it.

- **Do:** a number instead of a bar. A single value doesn’t need a chart. A lone column or a two-slice pie becomes an indicator.
- **Avoid:** a change without a period. “+12%” on its own doesn’t say whether it’s about yesterday or last year. Name the period.
- **Tip:** One hero per screen. If two numbers fight for the top, neither wins. Pick the one the screen exists to show.

## API

Three functions that return HTML, with no state — use them anywhere, including inside tables and cards.

```html
import { statTileHtml, sparklineHtml, meterHtml } from 'https://lumeui.dev/v/1.1/lume.js';

kpis.innerHTML = [
  statTileHtml({ label: 'Revenue', value: 1284000, format: 'currency-compact',
             delta: 0.124, deltaLabel: 'vs. last month', trend: revenue }),
  statTileHtml({ label: 'Response time', value: '182 ms',
             delta: 0.08, deltaLabel: 'vs. last week', good: 'down' }),
].join('');

cell.innerHTML = sparklineHtml(revenue, { width: 96, height: 24, area: false });
usage.innerHTML = meterHtml({ label: 'Storage', value: 72, max: 100, format: (v) => `${v} GB` });
```

`statTileHtml(options)`

A complete indicator. Returns HTML.

|   |   |
| --- | --- |
|  `label`  | Label, in sentence case and without a colon. |
|  `value · format`  | Number and format ('currency-compact', 'integer'…) — or ready-made text, like '182 ms'. |
|  `delta · deltaFormat`  | Change (ratio: 0.124 = +12.4%) and how to show it. Default: percentage. |
|  `deltaLabel`  | Against what: “vs. last month”. Without a period, the change says nothing. |
|  `good`  | 'up' (rising is good), 'down' (falling is good), or 'none' (no good side). |
|  `trend · trendLabel`  | The sparkline series and its accessible name. |
|  `hero · href`  | Hero version; with href, the indicator becomes a link. |

`sparklineHtml(values, options)`

A trend line without axes. Returns HTML that stretches to the container width.

|   |   |
| --- | --- |
|  `width · height`  | Default size when nothing else sets it (112 × 32). |
|  `area · curve`  | Wash under the line (default) and 'smooth' or 'linear'. |
|  `highlight`  | 'last' marks the current point; 'none' removes the dot. |
|  `color · label`  | Line color (default: chart.other) and the accessible name. |
|  `domain`  | Fixed scale [min, max]. Without it, the scale covers at least 10% of the value — a flat series doesn’t turn into a saw. |

`meterHtml(options)`

A ratio against a limit. Returns HTML with role="meter".

|   |   |
| --- | --- |
|  `label · value · max · min`  | What it measures and in which range. |
|  `format`  | Value format; without it, shows the percentage. |
|  `thresholds`  | Where it turns warning and critical. Default: { warning: 0.75, danger: 0.9 }. |
|  `tone · size · caption`  | Forces a tone ('success'…), 'sm' version, and a supporting line. |

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```
