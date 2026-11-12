# Typography

Lume section: Foundations. Page: https://lumeui.dev/#/fundamentos/tipografia

Geist Serif gives headings their voice, Geist Sans handles reading, and JetBrains Mono, code. 19 ready-made styles cover everything from the hero to the smallest label.

In numbers: families: 3 · weights: 5 · text styles: 19 · base size: 16 px.

## Families

Three families, each with one job. Never mix two in the same role.

Aa

Headings and numbers — Geist Serif — A high-contrast serif in a single weight (Regular): it gives headings an editorial tone. — ABCDEFGHIJKLMabcdefghijklm0123456789 ?!&@ áçõ — 400

Aa

Reading and interface — Geist Sans — A sans made for screens: legible from 12 to 18 px, in weights from 100 to 900. — ABCDEFGHIJKLMabcdefghijklm0123456789 ?!&@ áçõ — 400 — 500 — 600 — 700

Aa

Code and tokens — JetBrains Mono — Distinct characters (0/O, 1/l) and fixed width. — ABCDEFGHIJKLMabcdefghijklm0123456789 ?!&@ áçõ — 400 — 500 — 600

Markup of the examples in this section:

```html
<button type="button" class="ds-inline-action" data-copy="var(--ds-font-family-display)"><ds-icon name="copy"></ds-icon><code>--ds-font-family-display</code></button>

<button type="button" class="ds-inline-action" data-copy="var(--ds-font-family-sans)"><ds-icon name="copy"></ds-icon><code>--ds-font-family-sans</code></button>

<button type="button" class="ds-inline-action" data-copy="var(--ds-font-family-mono)"><ds-icon name="copy"></ds-icon><code>--ds-font-family-mono</code></button>
```

## Scale

Each style bundles family, size, line height, weight, and tracking into a single token. Type below to test your own text in all of them.

display-lg — 64/64 · 400 · -0.025em — Geist Serif

display-md — 48/52 · 400 · -0.022em — Geist Serif

display-sm — 40/44 · 400 · -0.02em — Geist Serif

heading-xl — 32/38 · 400 · -0.018em — Geist Serif

heading-lg — 26/32 · 400 · -0.014em — Geist Serif

heading-md — 21/28 · 400 · -0.01em — Geist Serif

heading-sm — 17/24 · 600 · -0.016em — Geist Sans

heading-xs — 15/22 · 600 · -0.011em — Geist Sans

body-lg — 18/32 · 400 · -0.014em — Geist Sans

body-md — 16/28 · 400 · -0.011em — Geist Sans

body-sm — 14/22 · 400 · -0.006em — Geist Sans

label-lg — 16/22 · 500 · -0.011em — Geist Sans

label-md — 14/20 · 500 · -0.006em — Geist Sans

label-sm — 13/18 · 500 · -0.003em — Geist Sans

eyebrow — 13/18 · 500 · 0 — Geist Sans

caption — 12/16 · 400 · 0 — Geist Sans

overline — 11/16 · 600 · 0.08em — Geist Sans

code-md — 14/22 · 400 · 0 — JetBrains Mono

code-sm — 12/18 · 400 · 0 — JetBrains Mono

Markup of the examples in this section:

```html
<label class="ds-field">
<ds-icon name="type"></ds-icon>
<input class="ds-field__input" type="text" value="Let’s build with refinement." data-sample-input="" aria-label="Sample text" spellcheck="false">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-sample-reset="" aria-label="Reset text" data-ds-tooltip="Reset"><ds-icon name="refresh"></ds-icon></button>
</label>

<button type="button" class="ds-chip ds-chip--sm" data-category="all" aria-pressed="true">All</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="display" aria-pressed="false">Display</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="heading" aria-pressed="false">Headings</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="body" aria-pressed="false">Body</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="label" aria-pressed="false">Labels</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="other" aria-pressed="false">Other</button>

<p class="ds-text-display-lg" data-sample="">Let’s build with refinement.</p>
```

## Hierarchy in practice

A typical screen uses few styles. Contrast comes from size and color — not from many different weights.

### From token to component

Markup of the examples in this section:

```html
<p class="ds-text-eyebrow">Launch guide</p>

<p class="ds-text-body-lg">Everything that changes in version 0.1, in order of impact for people already using the system.</p>

<p class="ds-text-body-sm">01 · Foundations</p>

<p class="ds-text-body-md">Color, typography, and icons are tokens now. Components read those values and adapt to the theme without a single extra line.</p>

<p class="ds-text-label-md">See what changed →</p>

<p class="ds-text-caption">Updated on October 31 · 4 min read</p>

<p class="ds-text-code-sm">font: var(--ds-text-body-md);</p>
```

## Weights and tracking

The bigger the text, the tighter the letter spacing. Only the all-caps overline opens the tracking up.

Weights — font.weight.* — Aa — regular — 400 — Aa — medium — 500 — Aa — semibold — 600 — Aa — bold — 700 — Aa — heavy — 800 — Tracking per style — largest to smallest — display-lg — -0.025em — display-md — -0.022em — display-sm — -0.02em — heading-xl — -0.018em — heading-lg — -0.014em — heading-md — -0.01em — body-lg — -0.014em — heading-sm — -0.016em — body-md — -0.011em — label-lg — -0.011em — heading-xs — -0.011em — body-sm — -0.006em — label-md — -0.006em — code-md — 0 — label-sm — -0.003em — eyebrow — 0 — caption — 0 — code-sm — 0 — overline — 0.08em

## Usage

Three rules to keep text consistent.

- **Do:** use a ready-made style. Family, size, line height, weight, and tracking come together — and change together.
- **Avoid:** loose sizes and weights. One-off values create near-duplicate variations and break the page’s rhythm.
- **Tip:** Reading measure. For long text, keep 60 to 75 characters per line. The layout token already limits this.
