# Accessibility

Lume section: Resources. Page: https://lumeui.dev/#/recursos/acessibilidade

Screens everyone can use: by keyboard, with a screen reader, with zoom, with low color vision, or asking for less motion. The goal is WCAG 2.2 level AA, in both themes.

In numbers: contrasts in the build: 78/78 · WCAG 2.2: AA · themes measured: 2 · open issues: 0.

## Principles

Four ideas guide every component. They aren’t an appendix at the end of the project: they go into the token, the CSS, and the JavaScript.

### Perceivable

Measured contrast, nothing by color alone, text that holds up to zoom. Both themes count the same.

### Operable

Everything by keyboard, focus always visible, nothing with too little time to act.

### Understandable

Clear labels, errors that say how to fix them, predictable behavior.

### Robust

Native HTML first, well-known ARIA patterns when native isn’t enough.

How we measure — 78 of 78 pairs pass now

The reference is WCAG 2.2, level AA. On every build, `scripts/build-tokens.mjs` measures every text and background pair declared in `tokens/semantic.json`, in both themes — transparencies are composited over the background before the math. A pair that drops below the minimum shows up in the terminal right away. What the build doesn’t measure (focus, keyboard, screen readers) is in the sections below, and what still isn’t right goes in Known issues.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="2.5"></rect><path d="M6 10h.01M9.3 10h.01M12.6 10h.01M15.9 10h.01M18 10h.01M7 14h10"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20.5 15a2 2 0 0 1-2 2H8l-4.5 3.5V5.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5"></path></svg>
```

## Contrast

Pick a text or mark and a background: the math is the same as the build’s, in both themes. Use it to check a combination before using it.

Aa — Sample text at 14 px

Lume light

6.48:1

#46586E on #EEF2F6

- Normal text — up to 18 px, or up to 14 px bold — AA 4.5 passes — AAA 7.0 fails
- Large text — from 24 px, or 18.66 px bold — AA 3.0 passes — AAA 4.5 passes
- Components and charts — borders that identify the control, icons, marks — AA 3.0 passes

Aa — Sample text at 14 px

Lume dark

10.36:1

#CEC8C1 on #1D1B18

- Normal text — up to 18 px, or up to 14 px bold — AA 4.5 passes — AAA 7.0 passes
- Large text — from 24 px, or 18.66 px bold — AA 3.0 passes — AAA 4.5 passes
- Components and charts — borders that identify the control, icons, marks — AA 3.0 passes

Chart colors, in a validated order — The 8 series colors follow an order chosen for protanopia and deuteranopia: the worst neighboring pair still has ΔE 11.7 (target: 8), 18.5 with typical vision, and all pass 3:1 on the surface in both themes. See in Charts

### Pairs checked in the build 38 pairs × 2 themes

| Text or mark | Background | Minimum | Lume light | Lume dark |
| --- | --- | --- | --- | --- |
| fg.default | bg.canvas | 4.5:1 | Lume light — 10.61:1 | Lume dark — 14.77:1 |
| fg.muted | bg.canvas | 4.5:1 | Lume light — 6.48:1 | Lume dark — 10.36:1 |
| fg.default | bg.sidebar | 4.5:1 | Lume light — 11.42:1 | Lume dark — 13.64:1 |
| fg.muted | bg.sidebar | 4.5:1 | Lume light — 6.97:1 | Lume dark — 9.56:1 |
| fg.subtle | bg.sidebar | 4.5:1 | Lume light — 5.14:1 | Lume dark — 5.48:1 |
| fg.muted | bg.raised | 4.5:1 | Lume light — 7.29:1 | Lume dark — 8.62:1 |
| fg.link | bg.canvas | 4.5:1 | Lume light — 7.25:1 | Lume dark — 12.93:1 |
| fg.brand | bg.canvas | 4.5:1 | Lume light — 7.25:1 | Lume dark — 12.93:1 |
| brand.on-solid | brand.solid | 4.5:1 | Lume light — 7.80:1 | Lume dark — 9.09:1 |
| brand.fg | brand.subtle | 4.5:1 | Lume light — 7.25:1 | Lume dark — 9.38:1 |
| fg.inverse | bg.inverse | 4.5:1 | Lume light — 11.42:1 | Lume dark — 16.59:1 |
| success.fg | success.subtle | 4.5:1 | Lume light — 6.33:1 | Lume dark — 8.33:1 |
| success.on-solid | success.solid | 4.5:1 | Lume light — 4.66:1 | Lume dark — 7.41:1 |
| warning.fg | warning.subtle | 4.5:1 | Lume light — 6.43:1 | Lume dark — 8.99:1 |
| warning.on-solid | warning.solid | 4.5:1 | Lume light — 8.33:1 | Lume dark — 8.33:1 |
| danger.fg | danger.subtle | 4.5:1 | Lume light — 5.02:1 | Lume dark — 7.93:1 |
| danger.on-solid | danger.solid | 4.5:1 | Lume light — 5.41:1 | Lume dark — 7.13:1 |
| info.fg | info.subtle | 4.5:1 | Lume light — 4.56:1 | Lume dark — 8.19:1 |
| info.on-solid | info.solid | 4.5:1 | Lume light — 4.89:1 | Lume dark — 7.31:1 |
| chart.series.1 | bg.surface | 3.0:1 | Lume light — 3.83:1 | Lume dark — 4.14:1 |
| chart.series.2 | bg.surface | 3.0:1 | Lume light — 3.54:1 | Lume dark — 4.49:1 |
| chart.series.3 | bg.surface | 3.0:1 | Lume light — 3.88:1 | Lume dark — 4.08:1 |
| chart.series.4 | bg.surface | 3.0:1 | Lume light — 4.60:1 | Lume dark — 3.45:1 |
| chart.series.5 | bg.surface | 3.0:1 | Lume light — 3.37:1 | Lume dark — 4.70:1 |
| chart.series.6 | bg.surface | 3.0:1 | Lume light — 3.89:1 | Lume dark — 4.07:1 |
| chart.series.7 | bg.surface | 3.0:1 | Lume light — 3.79:1 | Lume dark — 4.19:1 |
| chart.series.8 | bg.surface | 3.0:1 | Lume light — 3.36:1 | Lume dark — 4.73:1 |
| fg.subtle | bg.canvas | 4.5:1 | Lume light — 4.78:1 | Lume dark — 5.94:1 |
| fg.subtle | bg.surface | 4.5:1 | Lume light — 5.38:1 | Lume dark — 5.48:1 |
| fg.subtle | bg.raised | 4.5:1 | Lume light — 5.38:1 | Lume dark — 4.94:1 |
| fg.subtle | bg.sunken | 4.5:1 | Lume light — 4.57:1 | Lume dark — 6.36:1 |
| border.field | bg.canvas | 3.0:1 | Lume light — 3.35:1 | Lume dark — 3.58:1 |
| border.field | bg.surface | 3.0:1 | Lume light — 3.57:1 | Lume dark — 3.50:1 |
| border.field | bg.raised | 3.0:1 | Lume light — 3.57:1 | Lume dark — 3.38:1 |
| border.field | bg.sunken | 3.0:1 | Lume light — 3.29:1 | Lume dark — 3.57:1 |
| fg.muted | bg.sunken | 4.5:1 | Lume light — 6.19:1 | Lume dark — 11.10:1 |
| fg.muted | bg.field | 4.5:1 | Lume light — 7.29:1 | Lume dark — 8.62:1 |
| fg.default | bg.field-hover | 4.5:1 | Lume light — 11.42:1 | Lume dark — 11.15:1 |

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-ra-swap="" aria-label="Swap text and background" data-ds-tooltip="Swap"><ds-icon name="chevrons-up-down"></ds-icon></button>
```

## Focus and keyboard

Keyboard users need to know where they are and reach everything. Press Tab inside the example: every control shows the same ring.

“Create” shows the ring pinned, with `data-state="focus"`, so you can see it without a keyboard.

- Width: focus-ring.width · 2 px
- Offset: focus-ring.offset · 2 px
- Color: border.focus · 5.32:1 in Lume light and 10.36:1 in Lume dark, on the canvas
- When: Only with :focus-visible — a mouse click doesn’t light the ring

- Never remove the outline — No `outline: none` without replacing it with an equally visible indicator. The ring comes from `base.css` for every focusable element.
- Focus order is reading order — No positive `tabindex`. If the order looks wrong, it’s the HTML order that is.
- One tab stop per group — Tabs, radio groups, and lists use a “roving tabindex”: Tab enters the group, the arrows move within it.
- Focus always returns — On closing a modal, menu, drawer, or the ⌘K search, focus returns to the element that opened it.
- Skip the navigation — Tab — The page’s first Tab shows “Skip to content”, which goes straight to the main panel.

### Keyboard map 12 components and patterns

| Component | Keys |
| --- | --- |
| Button and link | Enter — activates (the button also with Space ) |
| Menu | ↓ ↑ — open and move through — Home End — first and last option — Enter Space — choose — letters — jump to the option — Esc — closes and returns to the trigger |
| Select | Enter ↓ — opens the list — ↑ ↓ PgUp PgDn — move through — typing — filters (with search) or jumps — Backspace — removes the last chip (multiple) — Esc — closes without changing |
| Tabs | ← → — switch tabs — Home End — first and last — Enter — activates, in manual mode |
| Modal | Tab — cycles only inside the modal — Esc — closes — on close — focus returns to what opened it |
| Toast | never — steals focus — Tab — reaches the action (Undo) — focus or hover — pause the timer |
| Table | Tab — goes to the sort buttons and checkboxes — Enter — sorts the column — Space — checks the row |
| Charts | Tab — focuses the chart — ← → — move through the values (announced) — ↑ ↓ — switch rows in the heatmap — Home End — first and last — Esc — hides the tooltip |
| ⌘K search | ⌘ K / — open — ↑ ↓ — move through — Enter — goes — Esc — closes and returns focus |
| Composer | Enter — sends — Shift Enter — adds a line break — / — opens the commands — Esc — closes the menu or stops the reply |
| App shell | ⌘ B — collapses or expands the sidebar — Esc — closes the drawer on phones — first Tab — shows “Skip to content” |
| Tooltip | keyboard focus — shows the tooltip — Esc — closes without moving focus — hover — you can point at the bubble without it disappearing |

Markup of the examples in this section:

```html
<button type="button" class="ds-theme-toggle" data-ra-theme="dark" aria-pressed="false" aria-label="Example theme: focus" data-ds-tooltip="Switch between light and dark">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Create</button>

<button type="button" class="ds-btn ds-btn--secondary">Cancel</button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Copy link" data-ds-tooltip="Copy link"><ds-icon name="link"></ds-icon></button>

<button type="button" class="ds-chip" aria-pressed="false" data-ra-chip="">Favorites</button>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input"><span class="ds-choice__text"><span class="ds-choice__label">Remember</span></span></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" checked=""><span class="ds-choice__text"><span class="ds-choice__label">Notices</span></span></label>

<div class="ds-field ds-field--sm"><ds-icon name="search"></ds-icon><input class="ds-field__input" type="search" placeholder="Search" aria-label="Search in the example"></div>
```

## Screen readers

A screen reader reads the structure, not the drawing. Landmarks, names, and live regions make the screen make sense without seeing it.

Landmarks

Sidebar, navigation, breadcrumb, and content are named landmarks. Screen reader users jump straight between them.

```html
<a class="ds-skip-link" href="#content">Skip to content</a>
<aside class="ds-sidebar" aria-label="Sidebar">
  <nav class="ds-sidebar__nav" aria-label="Main">…</nav>
</aside>
<div class="ds-main">
  <header class="ds-topbar">
    <nav class="ds-breadcrumb" aria-label="You are here">…</nav>
  </header>
  <main id="content" tabindex="-1">…</main>
</div>
```

Names

Every control has a name. An icon-only button gets an `aria-label`; the tooltip repeats the same text for sighted users. Icons next to text stay hidden.

```html
<!-- Icon-only button: the name comes from aria-label; the tooltip shows the same text -->
<button class="ds-icon-btn" aria-label="Copy link" data-ds-tooltip="Copy link">
  <ds-icon name="copy"></ds-icon>
</button>

<!-- Decorative icon next to text: hidden from the reader -->
<button class="ds-btn ds-btn--primary">
  <ds-icon name="plus"></ds-icon>Create project
</button>
```

Live regions

The region needs to exist before the change — only the text changes. Announce the result, not each typed letter.

```html
<!-- The region exists beforehand; only the text changes -->
<p class="ds-visually-hidden" role="status" data-count></p>

count.textContent = '12 orders found';
```

Text only for the reader

`.ds-visually-hidden` hides from the screen, not from the reader. Use it to complete what the color or icon says.

```html
<!-- Visible only to screen readers: completes what the color and icon say -->
<span class="ds-stat__change">
  <ds-icon name="trending-up"></ds-icon>+12.4%
  <span class="ds-visually-hidden">(better)</span>
</span>
```

### Which region to use

| Region | How it announces | Where we use it |
| --- | --- | --- |
| `role="status"` | polite: waits for the person to finish | Toast, filter count, “no results”, announcement while navigating a chart |
| `role="log"` | polite, in order | New replies in the conversation |
| `role="alert"` | interrupts: use sparingly | A failure that needs attention now. Form errors prefer the summary with focus |
| `aria-busy="true"` | says it’s changing | A chart reloading, a reply being written |

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Motion

Motion orients, but it can sicken people with vestibular sensitivity. When the system asks for less motion, Lume swaps animation for an immediate change — the result is the same, without the journey.

Your system has normal motion. The right column shows how it looks for people who ask for less.

With motion — Reduced motion

Theme switch

Chart entrance

Typing…

### What changes

| Where | With motion | Reduced |
| --- | --- | --- |
| Theme switch | A smooth transition of the whole page | Switches instantly |
| Charts | Bars grow, lines draw themselves | They appear ready |
| Conversation | Dots pulse, the reply appears gradually | Still dots, the whole reply at once |
| In-page navigation | Smooth scroll to the section | A direct jump |
| Menus, modals, toasts | Enter with a short slide | They just appear |

### Durations and curves

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| duration.fast (`--ds-duration-fast`) | Hover, small color changes | 120ms | 120ms |
| duration.base (`--ds-duration-base`) | Menus, chips, fields | 200ms | 200ms |
| duration.slow (`--ds-duration-slow`) | Modals, panels, theme switch | 320ms | 320ms |
| duration.slower (`--ds-duration-slower`) | Chart entrance | 480ms | 480ms |
| easing.standard (`--ds-easing-standard`) | Most transitions | cubic-bezier(0.2, 0, 0, 1) | cubic-bezier(0.2, 0, 0, 1) |
| easing.emphasized (`--ds-easing-emphasized`) | Entrances with more presence | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |

Markup of the examples in this section:

```html
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-ra-replay="theme"><ds-icon name="refresh"></ds-icon>Switch</button>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-ra-replay="chart"><ds-icon name="refresh"></ds-icon>Replay</button>

<div class="ds-typing"><span class="ds-typing__dots" aria-hidden="true"><i></i><i></i><i></i></span><span>Lume is typing</span></div>
```

## Known issues

What was below the rule and how it was resolved, measured now with the current tokens. If something fails again, the badge goes back to “Open” on its own — no hiding.

Field outline

WCAG 1.4.11 · component contrast, 3:1

The composer and the off switch use `border.field`, which passes 3:1 on every surface. Since 0.9, fields, selects, and menu chips use the background of the menu they open (`bg.field`, same as `bg.raised`) with the thin `border.default` outline — a visual choice: the outline is below 3:1, and the label above the field plus the background contrast identify it. Chips and text buttons keep `border.control`.

Resolved in 0.4.1. The build now measures `border.field` against all four surfaces on every change.

Off switch

WCAG 1.4.11 · 3:1

The off track got the field border: the control’s outline shows on any background, and the knob still contrasts with the track.

Resolved in 0.4.1, with the same token as the fields — one change fixed both.

Muted text in the light theme

WCAG 1.4.3 · text, 4.5:1

`fg.subtle` appears in placeholders, captions, and 12–14 px axis ticks. In light mode it moved to `neutral.550`, a new step; and `fg.muted` went down to `neutral.650`, so the two don’t end up the same.

Resolved in 0.4.1. The build check went up from 3:1 to 4.5:1.

A tooltip that disappears when pointed at

WCAG 1.4.13 · content on hover or focus

Now you can move the pointer to the bubble without it disappearing, it stays open while the trigger has hover or focus, and Esc closes it without moving focus. Try it on the copy button in Focus and keyboard.

Outside the rule, on purpose

`fg.disabled` sits around 2.62:1. WCAG exempts disabled controls — but if people need to know why something is disabled, say it in text next to it.

Markup of the examples in this section:

```html
<span class="ds-badge ds-badge--sm ds-badge--success"><ds-icon name="check"></ds-icon>Resolved</span>

<div class="ds-table-wrap"><table class="ds-table ds-table--compact">
<thead><tr><th scope="col">Pair</th><th scope="col" class="ds-table__num">Lume light</th><th scope="col" class="ds-table__num">Lume dark</th></tr></thead>
<tbody><tr><th scope="row">border.field on bg.canvas</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3.35:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3.58:1</span></td></tr><tr><th scope="row">border.field on bg.surface</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3.57:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3.50:1</span></td></tr><tr><th scope="row">border.field on bg.raised</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3.57:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3.38:1</span></td></tr><tr><th scope="row">border.field on bg.sunken</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3.29:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3.57:1</span></td></tr></tbody></table></div>

<div class="ds-table-wrap"><table class="ds-table ds-table--compact">
<thead><tr><th scope="col">Pair</th><th scope="col" class="ds-table__num">Lume light</th><th scope="col" class="ds-table__num">Lume dark</th></tr></thead>
<tbody><tr><th scope="row">Track border (border.field) on bg.canvas</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3.35:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3.58:1</span></td></tr><tr><th scope="row">Knob (fg.muted) on the track</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5.49:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>6.73:1</span></td></tr></tbody></table></div>

<div class="ds-table-wrap"><table class="ds-table ds-table--compact">
<thead><tr><th scope="col">Pair</th><th scope="col" class="ds-table__num">Lume light</th><th scope="col" class="ds-table__num">Lume dark</th></tr></thead>
<tbody><tr><th scope="row">fg.subtle on bg.canvas</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>4.78:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5.94:1</span></td></tr><tr><th scope="row">fg.subtle on bg.surface</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5.38:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5.48:1</span></td></tr><tr><th scope="row">fg.subtle on bg.raised</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5.38:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>4.94:1</span></td></tr><tr><th scope="row">fg.subtle on bg.sunken</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>4.57:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>6.36:1</span></td></tr></tbody></table></div>

<span class="ds-badge ds-badge--sm"><ds-icon name="info"></ds-icon>Note</span>
```

## Checklist for every screen

Before opening the PR, go through this. Checking is just for you to keep track — nothing is saved.

### Accessibility of each piece

Each component and pattern page has its own accessibility section, with keyboard and screen readers.

Markup of the examples in this section:

```html
<div class="ds-meter ds-meter--brand" role="meter" aria-valuemin="0" aria-valuemax="13" aria-valuenow="0" aria-valuetext="0 of 13" aria-label="Checked on this screen">
<div class="ds-meter__head">
<span class="ds-meter__label">Checked on this screen</span>
<span class="ds-meter__value"><strong>0</strong><span> of 13</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
</div>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Text passes 4.5:1 (3:1 if large) in both themes</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Nothing relies on color alone: status has an icon and text; series have a legend</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Works at 200% zoom and on a 320 px screen without horizontal scrolling</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Informative images and icons have alt text; decorative ones don’t</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Everything works with the keyboard alone, in reading order</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Focus is always visible and never hidden behind something fixed</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">On closing a modal, menu, or drawer, focus returns to what opened it</span></span></label>
```

## How to test

Automated tools catch part of it; the rest takes using the screen the way other people do. Ten minutes per screen catches most problems.

Keyboard only

Put the mouse away. Reach everything with Tab, the arrows, Enter, and Esc — and always see where focus is.

Screen reader

VoiceOver on Mac (⌘ F5) or NVDA on Windows. Navigate by headings and landmarks; listen for whether the names make sense.

Zoom and narrow screen

200% zoom and a 320 px window: nothing may disappear or require horizontal scrolling.

High contrast

Turn on the system contrast (forced-colors). Borders and focus need to stay visible.

Color vision

In DevTools, Rendering › Emulate vision deficiencies. Status and series need to read without color.

Reduced motion

Turn it on in the system settings (or emulate it in DevTools) and check that nothing animates on its own.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="2.5"></rect><path d="M6 10h.01M9.3 10h.01M12.6 10h.01M15.9 10h.01M18 10h.01M7 14h10"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m20 20-4.2-4.2"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="4" width="18" height="12.5" rx="2.5"></rect><path d="M8.5 20.5h7M12 16.5v4"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3 12h4l2.5-6 5 12L17 12h4"></path></svg>
```
