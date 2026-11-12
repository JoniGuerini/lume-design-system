# Spacing

Lume section: Foundations. Page: https://lumeui.dev/#/fundamentos/espacamento

A 4 px scale that gives the interface its rhythm. Small space groups, large space separates — always with a token.

In numbers: steps: 15 · base: 4 px · space-100: 8 px · unit: rem.

## Scale

Each step is a multiple of 4 px, in rem — it follows the browser zoom. Click a step to copy the variable.

Why does 100 = 8 px? The name is the fraction of 8 px times 100. That leaves room for new steps in between (025, 075, 150…) without renaming anything.

```html
gap: var(--ds-space-150);      /* 12 px */
padding: var(--ds-space-300);  /* 24 px */
```

Markup of the examples in this section:

```html
<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="8.5" y="8.5" width="12" height="12" rx="2"></rect><path d="M15.5 8.5v-3a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"></path></svg>
```

## In practice

A component uses few tokens, each with one role. Change the density to see the scale working together.

I reviewed the launch script. I tweaked the opening and left two call-to-action options for you to pick from. — 3 comments · 1 file

Tokens used — Padding — The card’s inner breathing room — space-300 — 24 px — Gap — Between items side by side — space-150 — 12 px — Stack — Between lines in the same group — space-100 — 8 px — Between groups — Separates different blocks — space-300 — 24 px

Markup of the examples in this section:

```html
<span class="ds-btn ds-btn--primary ">Approve</span>

<span class="ds-btn ds-btn--secondary ">Comment</span>
```

## Rhythm

Proximity groups. Use small space inside a group and a clear jump between groups — the eye understands the structure before reading.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m9 9 6 6M15 9l-6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg>
```

## Usage

Few rules, always applied.

- **Do:** one token per role. Padding, gap, and stack come from the scale. Changing density becomes swapping three tokens.
- **Avoid:** magic numbers. Off-scale values look like a detail, but they add up to misalignments across the whole screen.
- **Tip:** Tip: double it to separate. If two blocks need to feel separate, the space between them should be at least twice the inner space.
