# Getting started

Lume section: Lume. Page: https://lumeui.dev/#/primeiros-passos

How to install, import the styles, and use the tokens in your project. No dependencies and no required build: one CSS file, the modules you use, and you’re done.

In numbers: dependencies: 0 · CSS file: 1 · tokens: 383 · themes: 2.

## Installation

Three steps, no terminal. Prefer the files inside your project? Download the version’s zip and take the folder into your project. Using npm? `npm install @joniguerini/lume` and import `@joniguerini/lume/lume.css`; in React, the components come from `@joniguerini/lume/react`.

- Step 1: — Load the CSS — Paste this line into the `<head>`: a single file brings the fonts, the tokens, the base, and every component. The `1.9` in the address is the version; your project only changes when you change that number. MIT license. — `<link rel="stylesheet" href="https://lumeui.dev/v/1.9/lume.css">`
- Step 2: — Pick the theme — `light` is light and `dark` is dark. To follow the system (the site’s default), `initTheme()` picks one of them. — `<html lang="en" data-theme="light">`
- Step 3: — Turn on only the JavaScript you use — Visual components work with CSS alone. For interactive ones, import what your screen uses from `lume.js`. — `<script type="module"> import { initTooltips, mountSelects } from 'https://lumeui.dev/v/1.9/lume.js'; initTooltips(); mountSelects(document); </script>`

## Your first screen

Pick a starting point, check it in each theme, and copy it. The code below is exactly what’s on the stage.

```html
<form class="ds-card" style="display:grid;gap:var(--ds-space-250);width:min(420px,100%)">
  <h2 class="ds-text-heading-md">Create project</h2>
  <div class="ds-form-field">
    <label class="ds-form-field__label" for="gs-nome">Project name</label>
    <div class="ds-field"><input class="ds-field__input" id="gs-nome" placeholder="E.g. Customer portal"></div>
    <p class="ds-form-field__hint">Shows up in the menu and in invites.</p>
  </div>
  <label class="ds-switch">
    <input type="checkbox" role="switch" class="ds-switch__input" checked>
    <span class="ds-choice__text"><span class="ds-choice__label">Private project</span></span>
  </label>
  <div style="display:flex;gap:var(--ds-space-100)">
    <button type="button" class="ds-btn ds-btn--primary">Create project</button>
    <button type="button" class="ds-btn ds-btn--ghost">Cancel</button>
  </div>
</form>
```

Markup of the examples in this section:

```html
<form class="ds-card">
<h2 class="ds-text-heading-md">Create project</h2>
<div class="ds-form-field">
<label class="ds-form-field__label" for="gs-nome">Project name</label>
<div class="ds-field"><input class="ds-field__input" id="gs-nome" placeholder="E.g. Customer portal"></div>
<p class="ds-form-field__hint">Shows up in the menu and in invites.</p>
</div>
<label class="ds-switch">
<input type="checkbox" role="switch" class="ds-switch__input" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Private project</span></span>
</label>
<div>
<button type="button" class="ds-btn ds-btn--primary">Create project</button>
<button type="button" class="ds-btn ds-btn--ghost">Cancel</button>
</div>
</form>

<button type="button" class="ds-chip" data-control="example" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-7">
<span>Starting point</span><span data-label="">Form</span>
<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span>
</button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Using tokens

In your CSS, always use a semantic token — never a loose value. That way the theme, the brand, and the density change without touching your code.

```html
.meu-card {
  padding: var(--ds-space-300);
  border-radius: var(--ds-radius-xl);
  background: var(--ds-color-bg-surface);
  border: 1px solid var(--ds-color-border-subtle);
  color: var(--ds-color-fg-default);
  font: var(--ds-text-body-md);
}
```

- Color — `--ds-color-*` — 96
- Text — `--ds-text-*` — 19
- Space — `--ds-space-*` — 15
- Radius — `--ds-radius-*` — 9
- Shadow — `--ds-shadow-*` — 6
- Motion — `--ds-duration-* · --ds-easing-*` — 5
- Layout — `--ds-layout-* · --ds-z-*` — 7

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## JavaScript modules

Each interactive component has its own module, with no dependencies between them. Import only what your screen uses.

| Module | What for | How to turn on |  |
| --- | --- | --- | --- |
|  `ds/icons/icons.js`  | Icons as <ds-icon> and the icon() function |  ``  |  |
|  `ds/js/theme.js`  | Dark, light, or system theme |  `initTheme(); setTheme("light")`  |  |
|  `ds/js/tooltip.js`  | Hints via data-ds-tooltip |  `initTooltips()`  |  |
|  `ds/js/menu.js`  | Menus that open from a trigger |  `createMenu(botao, { options, onChange })`  |  |
|  `ds/js/select.js`  | Select with its own list |  `mountSelects(document)`  |  |
|  `ds/js/tabs.js`  | Tabs with keyboard support |  `mountTabs(document)`  |  |
|  `ds/js/modal.js`  | Modal and confirmation |  `await confirmModal({ title })`  |  |
|  `ds/js/toast.js`  | Quick notices and copy |  `toast("Salvo"); copyText(valor)`  |  |
|  `ds/js/command-palette.js`  | Ctrl K search |  `createCommandPalette({ items })`  |  |
|  `ds/js/shell.js`  | App shell with sidebar |  `createShell(document.querySelector(".ds-shell"))`  |  |

## Use your brand

The whole brand comes from one hue. Change a number and the build recreates the palette, fits it to sRGB, and checks the contrast again.

- 1 — In `tokens/palettes.json`, change the hue (and, if you like, the chroma) of the `refugio` palette.
- 2 — Run `npm run tokens` — or keep `npm run dev` open, which rebuilds on its own.
- 3 — Check the contrast report in the terminal. If anything drops below 4.5:1, adjust the semantic token.

```html
"refugio": { "hue": 253, "chroma": 0.043 }
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Structure

Where everything lives. You edit `tokens/`; the rest is consumed.

```html
ds/
├─ ds.css              entry point: tokens + base + components
├─ tokens.css          generated from tokens/*.json — don’t edit
├─ base.css            reset, base typography, focus
├─ components/         one CSS file per component
├─ js/                 one module per interactive component
└─ icons/icons.js      icon library
tokens/                the source of truth: color, typography, space…
scripts/build-tokens.mjs generates tokens.css and checks contrast
```

## Next steps

Markup of the examples in this section:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5a8.5 8.5 0 0 0 0 17c1.1 0 1.8-.8 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8h2.1a3.8 3.8 0 0 0 3.8-3.8C20.5 6.9 16.7 3.5 12 3.5z"></path><circle cx="7.8" cy="11.2" r="1.1" fill="currentColor" stroke="none"></circle><circle cx="9.6" cy="7.3" r="1.1" fill="currentColor" stroke="none"></circle><circle cx="14.2" cy="6.9" r="1.1" fill="currentColor" stroke="none"></circle><circle cx="17.2" cy="9.6" r="1.1" fill="currentColor" stroke="none"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="3.5"></rect><path d="M8.5 12h7"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1z"></path><path d="M17 9a3.5 3.5 0 0 1 0 6M8 15.67V19a1.5 1.5 0 0 0 3 0v-1.33"></path></svg>
```
