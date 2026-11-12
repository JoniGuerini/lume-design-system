# How to contribute

Lume section: Resources. Page: https://lumeui.dev/#/recursos/contribuir

Lume grows with what teams need. This is the path from an idea to a version — with the house rules, the review checklist, and how to publish.

In numbers: stages: 5 · review items: 17 · dependencies: 0 · current version: 0.23.1.

## The path of a change

Five stages, always in this order. A small fix can skip the proposal; a new piece, never.

- 01 — Idea — A problem that shows up on more than one screen — or a piece three teams have already drawn, each in their own way. — Who — Anyone on the team — Comes out — A note with real examples
- 02 — Proposal — The filled-in template: the problem, who uses it, what already exists, and the impact on tokens and accessibility. — Who — Whoever had the idea + someone from Lume — Comes out — Accepted, adjusted, or declined with a reason
- 03 — Draft — Tokens, CSS, JS, and the page with a playground. States forced with data-state, in both themes. — Who — Whoever will build it — Comes out — A draft pull request
- 04 — Review — One person looks at the design, another at the code. Both go through the same checklist. — Who — Two people, design and code — Comes out — Approved or change requests
- 05 — Published — It goes into What’s new with a new version. The dot in the sidebar lets everyone know. — Who — Whoever maintains Lume — Comes out — A new version — today, 0.23.1

## Propose

Before the code, the question: what kind of change is this? The smaller it is, the faster it ships.

### Token

Changes just one value — a color, a space, a radius — and applies to the whole system.

Example — color.chart.status.critical was born because the danger red looked like the peach in dark mode.

### Variant

The same component with another weight, size, or tone. Same anatomy, same keyboard.

Example — ds-btn--danger is a button; only the intent changes.

### Pattern

A combination of pieces that already exist, with usage rules. It adds no new CSS — or very little.

Example — Forms: fields + validation + error summary.

### Component

A new piece, with its own anatomy, states, and accessibility.

Example — ds-alert arrived in 0.3 because no component gave an inline notice.

### Does this belong in the design system? four questions, at most

### Proposal template copy and fill in

A good proposal fits on one screen. Bring screenshots of where the problem shows up — they convince more than any paragraph.

```html
## Proposal: <name of the piece>

### Problem
What happens today and where. Links or screenshots from at least two screens.

### Who uses it
Teams, products, and how often.

### What already exists
Lume components, patterns, or tokens that come close — and why they aren’t enough.

### Proposal
Anatomy, variants, and states (default, hover, pressed, focus, disabled, error).

### Alternatives
What else was considered and why it was left out.

### Token impact
New or changed tokens. Contrast in both themes.

### Accessibility
ARIA role, keyboard, focus, screen reader, and reduced motion.

### Out of scope
What this proposal doesn’t solve.
```

Markup of the examples in this section:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5c3 3.5 5.5 6.6 5.5 10a5.5 5.5 0 0 1-11 0c0-3.4 2.5-6.5 5.5-10z"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M7.5 3.5 11.5 10.5h-8z"></path><rect x="13" y="3.5" width="7.5" height="7" rx="2"></rect><circle cx="12" cy="17" r="3.5"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 2.5 15 5.5 12 8.5 9 5.5zM5.5 9 8.5 12 5.5 15 2.5 12zM18.5 9l3 3-3 3-3-3zM12 15.5l3 3-3 3-3-3z"></path></svg>

<fieldset class="ds-choice-group" data-question="repete">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">01</span>Does it appear on more than one screen or product?</legend>
<p>Or will soon — not just "someday, maybe".</p>
<div>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-repete" value="sim"><span class="ds-choice__text"><span class="ds-choice__label">Yes</span></span></label>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-repete" value="nao"><span class="ds-choice__text"><span class="ds-choice__label">No</span></span></label>
</div>
</fieldset>

<fieldset class="ds-choice-group" data-question="valor" hidden="">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">02</span>Is the difference just a value — a color, a space, a radius?</legend>
<div>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-valor" value="sim"><span class="ds-choice__text"><span class="ds-choice__label">Yes</span></span></label>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-valor" value="nao"><span class="ds-choice__text"><span class="ds-choice__label">No</span></span></label>
</div>
</fieldset>

<fieldset class="ds-choice-group" data-question="mesmo" hidden="">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">03</span>Is it an existing component with another weight, size, or tone?</legend>
<div>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-mesmo" value="sim"><span class="ds-choice__text"><span class="ds-choice__label">Yes</span></span></label>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-mesmo" value="nao"><span class="ds-choice__text"><span class="ds-choice__label">No</span></span></label>
</div>
</fieldset>

<fieldset class="ds-choice-group" data-question="monta" hidden="">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">04</span>Can it be built from pieces that already exist?</legend>
<div>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-monta" value="sim"><span class="ds-choice__text"><span class="ds-choice__label">Yes</span></span></label>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-monta" value="nao"><span class="ds-choice__text"><span class="ds-choice__label">No</span></span></label>
</div>
</fieldset>
```

## Build

The house rules and the step-by-step for a new piece, with the real files in this repository.

- Zero dependencies — Native HTML, CSS, and JavaScript. No `npm install` to use it — the Node scripts only generate tokens and serve the site.
- Semantic tokens only — Components read `var(--ds-color-fg-muted)`, never a hex or a raw palette like `--ds-color-neutral-400`.
- Names ds-block__part--variation — `.ds-panel__header`, `.ds-btn--primary`. The `ds-` prefix belongs to the system; documentation pages use their own prefix.
- States forced with data-state — `data-state="hover|pressed|focus"` draws the state without interaction — for documenting and testing.
- Real ARIA patterns — combobox and listbox in Select, menu in Menu, tablist in Tabs, dialog in Modal, status in Toast.
- Whatever turns on, turns off — Modules return `destroy()` or a cleanup function: listeners, timers, and observers go with it.

### Step by step from the tokens/ folder to the page

- Step 1: — A token, if one is missing — Edit the JSON in tokens/ and run the build. Never edit ds/tokens.css or ds/tokens.js — they’re generated, and the development server rebuilds them on every change. — `// tokens/semantic.json — the source of truth "chart": { "grid": { "dark": "{color.neutral.800}", "light": "{color.neutral.200}" } } // and, for a brand or text color, the contrast check: "$checks": [["color.chart.series.1", "color.bg.surface", 3]]` — `npm run tokens # ✓ tokens: … tokens, 13 paletas → ds/tokens.css, ds/tokens.js # contraste: …/… combinações atingem o mínimo`
- Step 2: — The CSS — One file per component in ds/components/, with the markup in the top comment, and an import line in ds/ds.css. — `/* * Alert — an inline message with tone, icon, title, text, and actions. * * <div class="ds-alert ds-alert--danger" role="alert">…</div> * * Tones: neutral (default) · --info · --success · --warning · --danger. */ .ds-alert { padding: var(--ds-space-200) var(--ds-space-250); border-radius: var(--ds-radius-xl); background: var(--ds-color-bg-surface); border: 1px solid var(--ds-color-border-subtle); } /* and in the entry point, ds/ds.css */ @import url("./components/alert.css");`
- Step 3: — The JavaScript, if it’s interactive — A module in ds/js/ that turns the behavior on and returns how to turn it off. — `// ds/js/my-component.js export function createMyComponent(el, { onChange } = {}) { const onClick = (event) => { /* … */ onChange?.(); }; el.addEventListener('click', onClick); return { destroy() { el.removeEventListener('click', onClick); }, }; }`
- Step 4: — New icons — They go into the list in ds/icons/icons.js, with English and Spanish keywords in site/icon-keywords.js, and show up in the Icons search right away. — `// ds/icons/icons.js — 24 grid, 1.5 stroke, round caps, currentColor // [name, category, Portuguese keywords, drawing] ['send', 'acoes', 'enviar mensagem avião', path('M20.5 3.5 10 14M20.5 3.5 14 20.5l-4-6.5-6.5-4z')], // site/icon-keywords.js — the English and Spanish keywords send: ['send message plane', 'enviar mensaje avión'],`
- Step 5: — The page — Components follow the Button page: playground with code, variants, sizes, states, anatomy, accessibility, tokens, and usage. All text goes in all three languages. — `// site/pages/my-component.js import { mountDocNav } from '../doc-nav.js'; import { mountCodeCopy } from '../component-doc.js'; import { L } from '../i18n.js'; export const styles = ['site/component-doc.css', 'site/pages/my-component.css']; export default function render(page) { return `<div class="page doc"> <h1 class="doc-header__title">${page.label}</h1> <p>${L('Olá', 'Hello', 'Hola')}</p> </div>`; } export function mount(root) { const offNav = mountDocNav(root); const offCopy = mountCodeCopy(root); return () => { offNav(); offCopy(); }; }` — `// site/nav.js — text in T(pt-BR, en, es) { label: T('Meu componente', 'My component', 'Mi componente'), icon: 'component', path: '/componentes/my-component', load: () => import('./pages/my-component.js'), description: T('Uma frase sobre para que serve.', 'One sentence on what it’s for.', 'Una frase sobre para qué sirve.'), }`

## Review

The reviewer checks; the builder has already been through it. For the details on contrast, keyboard, and screen readers, see Accessibility.

### What blocks

- Any ✗ in the build’s contrast report
- A hard-coded color, space, or radius in the CSS instead of a token
- A new dependency
- Something that only works with a mouse
- A page without a playground or the accessibility section
- A console error or a duplicate id

### How to comment

- Point to the spot. “Focus on menu item 3 disappears in light mode” helps more than “focus looks weird”.
- Say whether it blocks. Separate what prevents publishing from what’s a suggestion for later.
- Suggest. If you can, show the token or the snippet that fixes it.

Markup of the examples in this section:

```html
<div class="ds-meter" role="progressbar" aria-label="Items checked" aria-valuemin="0" aria-valuemax="17" aria-valuenow="0" data-rc-meter="" aria-valuetext="0 of 17 items checked">
<div class="ds-meter__head">
<span class="ds-meter__label">Items checked</span>
<span class="ds-meter__value"><strong data-rc-count="">0</strong><span> of 17</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill" data-rc-fill=""></span></div>
</div>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-rc-clear=""><ds-icon name="refresh"></ds-icon>Uncheck all</button>

<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">01</span>Visual<span data-rc-group-count="visual">0/4</span></legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="visual" name="rc-visual-0">
<span class="ds-choice__text"><span class="ds-choice__label">Flat</span><span class="ds-choice__description">No gradient, glass, glow, blur, or background image.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="visual" name="rc-visual-1">
<span class="ds-choice__text"><span class="ds-choice__label">Tokens only</span><span class="ds-choice__description">No hex, hard-coded color, or raw palette in the component’s CSS.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="visual" name="rc-visual-2">
<span class="ds-choice__text"><span class="ds-choice__label">Both themes</span><span class="ds-choice__description">Checked in dark and light, including with a nested theme.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="visual" name="rc-visual-3">
<span class="ds-choice__text"><span class="ds-choice__label">Every state</span><span class="ds-choice__description">Default, hover, pressed, focus, disabled, and error — with data-state.</span></span>
</label>
</div>
</fieldset>

<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">02</span>Accessibility<span data-rc-group-count="a11y">0/4</span></legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="a11y" name="rc-a11y-0">
<span class="ds-choice__text"><span class="ds-choice__label">Contrast</span><span class="ds-choice__description">Text ≥ 4.5:1 and outlines and icons ≥ 3:1, in both themes.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="a11y" name="rc-a11y-1">
<span class="ds-choice__text"><span class="ds-choice__label">Keyboard</span><span class="ds-choice__description">Everything reachable with Tab; arrows, Enter, Space, and Esc where the ARIA pattern calls for them.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="a11y" name="rc-a11y-2">
<span class="ds-choice__text"><span class="ds-choice__label">Names</span><span class="ds-choice__description">Icon buttons with aria-label; fields with a real label.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="a11y" name="rc-a11y-3">
<span class="ds-choice__text"><span class="ds-choice__label">Motion</span><span class="ds-choice__description">prefers-reduced-motion respected; nothing flashes or animates without a reason.</span></span>
</label>
</div>
</fieldset>

<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">03</span>Code<span data-rc-group-count="codigo">0/4</span></legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="codigo" name="rc-codigo-0">
<span class="ds-choice__text"><span class="ds-choice__label">No dependencies</span><span class="ds-choice__description">Nothing new in package.json, no third-party scripts.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="codigo" name="rc-codigo-1">
<span class="ds-choice__text"><span class="ds-choice__label">Cleanup</span><span class="ds-choice__description">destroy() or the mount function removes listeners, timers, and observers.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="codigo" name="rc-codigo-2">
<span class="ds-choice__text"><span class="ds-choice__label">Unique ids</span><span class="ds-choice__description">No repeated id on the page, and none colliding with the app’s.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="codigo" name="rc-codigo-3">
<span class="ds-choice__text"><span class="ds-choice__label">Clean console</span><span class="ds-choice__description">No errors or warnings in the browser.</span></span>
</label>
</div>
</fieldset>
```

## Publish

Every version comes from a single file: `site/changelog.js`. It feeds What’s new, the Home roadmap, the sidebar dot, and the version card.

1.0.0 — Major — Changes something you use: a class name, a removed token. Comes with a migration guide. — 0.3.0 — Minor — New things without breaking anything: a section, a component, new tokens. — 0.3.1 — Patch — Tweaks and bugs. Nobody needs to change anything.

While we’re on 0.x, a minor version can still bring a breaking change — always announced in What’s new. Every big delivery becomes a minor version: 0.1 First version, 0.2 Charts, 0.3 Patterns, 0.4 Resources, 0.4.1 Contrast sorted, 0.5 Figma plugin, 0.6 Complete plugin, 0.6.1 Plugin on the free plan, 0.7 Languages, 0.8 Lume, 0.9 Refúgio, 0.10 Lume theme, 0.11 Sign-in and sign-up, 0.11.1 New version notice, 0.12 Calendar, 0.13 Roadmap, 0.13.1 Updated fonts, 0.14 Complete forms, 0.14.1 Top bar on phones, 0.14.2 News only for returning visitors, 0.14.3 Latest version on Home, 0.14.4 Light and dark, 0.14.5 Theme button, 0.14.6 Fixed-height card, 0.15 Navigation and structure, 0.16 Overlays, 0.17 Feedback and loading, 0.18 Content, 0.19 Refinement, 0.19.1 Megaphone icon, 0.19.2 Icon review, 0.20 Scrollbar, 0.21 Back to top, 0.21.1 Navbar in smaller windows, 0.22 Figma plugin, 0.22.1 Plugin numbers on the site, 0.22.2 Visit counts, 0.23 Lume for AI, 0.23.1 AI docs in three languages.

### An entry in What’s new

Something that didn’t exist: a component, page, token, icon.

Something that existed and got better, without changing how it’s used.

Something that was wrong and is now right.

```html
// site/changelog.js
export const CURRENT_VERSION = '0.5.0';   // ← the new version

const RELEASES = [
  {
    version: '0.5.0',
    date: '2026-12-01',
    title: T('Nome curto da entrega', 'Short name for the release', 'Nombre corto de la entrega'),
    summary: T('Uma frase sobre o que muda para quem usa.', 'One sentence on what changes for users.', 'Una frase sobre lo que cambia para quien lo usa.'),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          // [type, text, link]
          ['novo', T(
            'Alerta inline com tons e ações',
            'Inline alert with tones and actions',
            'Alerta inline con tonos y acciones',
          ), '/padroes/formularios'],
          ['correcao', T(
            'A busca de ícones encontra “calendário”',
            'Icon search finds “calendar”',
            'La búsqueda de íconos encuentra “calendario”',
          ), '/fundamentos/icones'],
        ],
      },
    ],
  },
  // …earlier versions, newest to oldest
];
```

### After publishing no manual step

- The What’s new dot comes back in the sidebar for anyone who hasn’t seen the version yet.
- The account card shows the new version — today, Lume 0.23.1.
- The Home roadmap card reads the same files as What’s new and Roadmap; there’s nowhere else to update.

No fixed schedule: a minor version ships when a delivery is ready; fixes ship as soon as they’re reviewed.

Markup of the examples in this section:

```html
<span class="ds-badge ds-badge--sm ds-badge--brand">New</span>

<span class="ds-badge ds-badge--sm ds-badge--info">Improvement</span>

<span class="ds-badge ds-badge--sm ds-badge--success">Fix</span>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Definition of done

A piece only goes into a version when all of this is true.

- Solves a real problem — Shows up on at least two screens, with examples.
- Works without a mouse — Keyboard, visible focus, and screen reader checked.
- Runs on tokens — Changes along with the brand or theme.
- Is documented — A page with playground, states, accessibility, and usage, in all three languages.
- Passed review — Design and code, with the whole checklist checked.
- Is in What’s new — With version, date, and a link to the page.

## Frequently asked questions

Ready to start? — See what changed in the latest versions or build your first screen with Lume — 44 components and 6 patterns waiting.

Markup of the examples in this section:

```html
<details class="ds-disclosure">
<summary class="ds-inline-action"><span>Do I need permission to use something that isn’t in Lume?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>No. Build it in your product with the tokens and components that exist. The proposal comes when the piece repeats.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>What if my case is unlike anything else?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Start with a conversation, not code: bring the examples. Sometimes it’s a variant; sometimes, a pattern with pieces that already exist.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>Can I create a token just for my component?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Only if it has a role other components could have too. Tokens name roles (fg.muted, border.focus), not places.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>How long does a review take?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>It depends on the size. A fix or a token goes quickly; a new component takes longer, because it goes through design and code — and the page with a playground.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>Can a class name change?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Yes, but it’s a breaking change: only in a major version, with a migration guide. Meanwhile, keep the old name working.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>Where are the decisions already made?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>In the pages: each component says when to use it and when not to. What changed, and why, is in What’s new.</p></div>
</details>

<a class="ds-btn ds-btn--secondary" href="#/novidades"><ds-icon name="megaphone"></ds-icon>See What’s new</a>

<a class="ds-btn ds-btn--primary" href="#/primeiros-passos">Getting started<ds-icon name="arrow-right"></ds-icon></a>
```
