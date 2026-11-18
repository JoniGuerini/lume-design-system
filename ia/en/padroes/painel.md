# Metrics dashboard

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/painel

A screen to answer one question at a glance: compared numbers, one main chart, and, in words, what needs attention. The charts are Lume’s; here the subject is how to put them together.

In numbers: question: 1 · indicators, at most: 4 · period for everything: 1.

## Live example

Usage of the Lume docs, with example numbers. To choose the chart for each kind of data, see Charts › Overview.

### Needs attention

- “datepicker” was searched 38 times with no results — The page is called Date picker in Portuguese. A search synonym would help. — See searches
- Tokens lost 24% of its visits — Since it left the Resources menu. — Open the page

- Switch the period: indicators and charts change together, and each subtitle repeats the period.
- Searches with no results going down shows in green: there, down is good.
- Refresh: the time changes, and the cards say they’re loading.

## Anatomy

Five parts, from the question to the detail: whoever reads top to bottom stops once they have the answer.

- 1 — Header — The question the dashboard answers, how fresh the data is, and the period, which applies to everything below.
- 2 — Indicators — Up to four numbers, each with the change and the trend. Ones where down is good say so (searches with no results).
- 3 — Main chart — The largest on the screen, answering the title’s question. The previous period in gray, to compare.
- 4 — Needs attention — What calls for action, already written in sentences, with the link to act. Nobody needs to dig through the chart.
- 5 — Details — Below, the breakdowns that explain the number: where people come from, what they view most.

## Rules

Six decisions that apply to any dashboard.

One question per dashboard

The title is the question (“How the docs are being used”), not “Dashboard”. What doesn’t help answer it goes to another dashboard.

Numbers always compared

“4,812 visits” doesn’t say if it’s good. With “+12% vs. previous 30 days”, it does. Four indicators at most.

One period for everything

The selector at the top changes every card together. A period per card makes people compare things that don’t compare.

What calls for action comes written

An important drop doesn’t hide in a curve. It becomes a sentence in “Needs attention”, with the link.

Say how fresh the data is

“Updated at 9:40” and a button to refresh. Old numbers treated as new lead to wrong decisions.

Every number leads somewhere

From the dashboard to the list that explains the number. The dashboard summarizes; the decision happens in the list.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.3"></path><path d="M12 17h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 9h14M5 15h14M10 4 8 20M16 4l-2 16"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="3"></rect><path d="M3.5 10h17M8 3v4M16 3v4"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 17.2h.01"></path><path d="M12 17.2h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10.3 4.2 2.9 17.5A2 2 0 0 0 4.6 20.5h14.8a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0z"></path><path d="M12 9.5v4"></path><path d="M12 17h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
```

## Messages

Numbers with context, readable times, and empty states that say what to do.

| Situation | Avoid | Prefer |
| --- | --- | --- |
| Title | Dashboard | How the docs are being used |
| Change | +12.4% | +12.4% vs. previous 30 days |
| Freshness | Last sync: 2026-11-15T12:40:00Z | Updated at 9:40 AM |
| No data | No data | No visits in this period. Choose a longer period. |

## Accessibility

People who can’t see the chart need to reach the same conclusion.

- Charts with a table — Every Lume chart has a table view and a keyboard tooltip (arrows). The dashboard’s numbers also exist as text.
- Change without relying on color — Arrow, sign (+ or −), and the phrase “vs. previous 30 days”. Green and red only reinforce.
- Period announced — The selector is a `radiogroup`; the indicators sit in `aria-live="polite"`, and the screen reader reads the new numbers after the switch.
- Loading, said — `setLoading(true)` marks the chart with `aria-busy`; nobody reads an old number thinking it’s new.
- Attention as a list — “Needs attention” is a section with a heading and a `<ul>`; links say where they go (“See searches”), not “Click here”.

## Code

Charts are `createLineChart` and `createBarChart`; indicators, `statTileHtml`. The period is a `createSegmented` that updates them all.

```html
<header>
  <h1>How the docs are being used</h1>
  <p>Updated at 9:40 AM</p>
  <div class="ds-segmented" role="radiogroup" aria-label="Period">…</div>
</header>

<div id="indicators" aria-live="polite"></div>
<div id="visits"></div>

<section aria-labelledby="attention">
  <h2 id="attention">Needs attention</h2>
  <ul>…</ul>
</section>
```

```html
import { createLineChart, createSegmented, statTileHtml } from 'https://lumeui.dev/v/1.10/lume.js';

const chart = createLineChart(document.querySelector('#visits'), {
  card: true, title: 'Visits', categories, tooltipLabels,
  series: [
    { name: 'This period', values: current },
    { name: 'Previous period', values: previous, muted: true },
  ],
});

createSegmented(document.querySelector('[aria-label="Period"]'), {
  async onChange(period) {
    chart.setLoading(true);                 // one period for every card
    const d = await fetch(period);
    indicators.innerHTML = statTileHtml({ label: 'Visits', value: d.visits, delta: d.change, deltaLabel: 'vs. previous 30 days' });
    chart.update({ categories: d.days, series: d.series });
    chart.setLoading(false);
  },
});
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

A dashboard is for keeping track. To investigate, people go to the list or the report.

- **Do:** start from what people decide. Ask “what does someone do after looking at this?”. The numbers that change that decision go in; the rest goes in a report.
- **Avoid:** the wall of numbers. Twelve indicators of the same size say nothing is more important. Four, with a bigger chart, tell a story.
- **Tip:** The period starts at the most used. Open on the period people choose most (here, 30 days) and remember their choice on the next visit.
