# Lume Design System: guide for AIs

Read this file before building any screen with Lume. It explains how to install it, which rules apply to every screen, and what you must never invent. The full file index is at https://lumeui.dev/ia/en/llms.txt.

Lume is a design system in native HTML, CSS, and JavaScript, with no dependencies. It brings together tokens, typography, 154 custom icons, 58 components, charts, and screen patterns, in light and dark themes.

## Before anything else

1. **Use only what is documented.** Every `ds-*` class, every `data-*` attribute, and every JavaScript function you use must appear in a file of this documentation. Don't invent classes, variants, sizes, or properties.
2. **Icons only from the list.** Use `<ds-icon name="…">` with a name from https://lumeui.dev/ia/en/icons.md. If none fits, pick the closest one on the list and tell the person. Never draw your own SVG instead.
3. **Color, spacing, radius, and typography only through tokens.** Use `var(--ds-…)`, never a loose value like `#3e5166` or `13px`. The tokens are in https://lumeui.dev/ia/en/fundamentos/cores.md (and the other Foundations pages) and in each component file, under "Tokens used".
4. **A component before custom code.** If a component exists for the need, use it, even if you could build it by hand.
5. **When in doubt, ask or say so.** If the documentation doesn't cover a case, tell the person what was missing and which choice was closest. Don't fill the gap with something that merely looks like Lume.
6. **Follow each component's "Usage" and "Accessibility" sections.** They are rules, not suggestions.

## Installation

Lume is published with a fixed version at `https://lumeui.dev/v/1.5/` and can be loaded straight from another site. MIT license.

```html
<html lang="en" data-theme="light">
  <head>
    <link rel="stylesheet" href="https://lumeui.dev/v/1.5/lume.css">
  </head>
  <body>
    <button type="button" class="ds-btn ds-btn--primary">Save</button>

    <script type="module">
      import { initTooltips } from 'https://lumeui.dev/v/1.5/lume.js';
      initTooltips();
    </script>
  </body>
</html>
```

- **One CSS file:** `lume.css` brings the fonts, the tokens, the base, and every component.
- **One JavaScript file, if you prefer:** `lume.js` gathers the whole public API (`import { createModal, toast } from 'https://lumeui.dev/v/1.5/lume.js'`). The list and the naming convention are in `https://lumeui.dev/ia/en/recursos/api.md`. Anything not in it is internal: don't use it.
- **Theme:** `data-theme="light"` or `data-theme="dark"` on `<html>`. To follow the system, call `initTheme()` from `https://lumeui.dev/ds/js/theme.js`.
- **JavaScript only where needed:** visual components work with CSS alone. Interactive ones have a module in `https://lumeui.dev/ds/js/`. Import only the ones the screen uses; each component file shows which.
- **Icons:** import `https://lumeui.dev/ds/icons/icons.js` once so `<ds-icon>` works.
- **Language:** the components' system texts follow the browser language (Portuguese, English, or Spanish; anything else becomes English). To fix one, call `setLocale('en')` from `https://lumeui.dev/ds/js/i18n.js`.
- **Version:** use the versioned address (`/v/1.5/`). The current version and the list are at `https://lumeui.dev/v/index.json`. `https://lumeui.dev/ds/` always serves the newest, and every version has a zip for those who prefer the files in the project (`https://lumeui.dev/v/1.5/lume-1.5.zip`).

## React

In React projects, use the components in `lume/react/`, which ship in each version’s zip (`https://lumeui.dev/v/1.5/lume-1.5.zip`). The whole folder from the zip goes into `src/lume/`; the app imports `./lume/lume.css` once and the components from `./lume/react`.

```tsx
import './lume/lume.css';
import { Button, Alert } from './lume/react';

<Button variant="primary" icon="check">Save changes</Button>
<Alert tone="success" title="Changes saved" />
```

- **Use the React component when there is one** (list at `https://lumeui.dev/ia/en/recursos/react.md`). Props follow the variants on each component’s page: `variant`, `size`, `tone`.
- **Anything without a React component yet** uses the HTML markup from the component’s page, with `className` instead of `class`. The CSS is the same.
- **Icons:** `<Icon name="…" />`, with names from the icon list. TypeScript rejects a name that doesn’t exist.
- **Don’t install an npm package for Lume:** there isn’t one. The files live in the project, as with shadcn.

## Visual direction

- **Everything flat.** Opaque surfaces, thin outlines, large radii. No gradients, decorative shadows, glass, blur, glow, or texture.
- **No decorative images.** The personality comes from typography, outlines, and the accent color.
- **Typography:** Geist Serif for headings, Geist Sans for text, and JetBrains Mono for code. Use the token text styles (`--ds-text-…`), not loose sizes.
- **One primary action per screen.** The other actions go in secondary, ghost, or subtle.
- **Less is more.** Prefer fewer, well-resolved elements over ornaments. Don't use a sparkles icon to signal something new or AI.

## Copy

- Short and direct. Button labels start with a verb ("Save changes", not "OK").
- The component already includes its system texts in three languages (Portuguese, English, and Spanish). Don't translate by hand what it already handles.

## Accessibility

Lume follows WCAG 2.2, level AA, in both themes. Components already come with keyboard support, visible focus, and measured contrast. It's still your responsibility to:

- name icon-only buttons (`aria-label` and a tooltip with the same text);
- use the right element (`<button>` for actions, `<a>` to navigate);
- not rely on color alone to convey information;
- follow each component's rules in its "Accessibility" section.

## Where everything is

- **Components:** one file per component in `https://lumeui.dev/ia/en/componentes/`. Each has a code example, variants with their classes, states, anatomy, accessibility, tokens, and usage rules.
- **Foundations:** color, typography, icons, spacing, radius, elevation, motion, and layout, in `https://lumeui.dev/ia/en/fundamentos/`.
- **Charts:** in `https://lumeui.dev/ia/en/graficos/`.
- **Screen patterns:** app shell, forms, login, search, empty states, and chat, in `https://lumeui.dev/ia/en/padroes/`. Start with them when building a whole screen.
- **Getting started:** `https://lumeui.dev/ia/en/primeiros-passos.md`.

File paths are in Portuguese, like the site's addresses; the content is in English.

## Quick choice

- Action → Button; action inside text or a list → Inline action.
- One option among a few, always visible, taking effect at once → Segmented control; pick one or more from a list → Select.
- On and off with immediate effect → Switch; mark to submit later → Checkbox.
- Message that goes away by itself → Toast; one that stays on screen → Alert.
- Decision or short task that interrupts the flow → Modal; details or a task without leaving the page → Drawer.
- Group content → Card; the surface of a product task, with controls and sections → Panel.
- Task with measurable progress → Progress bar; short wait → Spinner; content with a known shape loading → Skeleton.
