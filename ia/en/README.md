# Lume Design System: guide for AIs

Read this file before building any screen with Lume. It explains how to install it, which rules apply to every screen, and what you must never invent. The full file index is at https://lumeui.dev/ia/en/llms.txt.

Lume is a design system in native HTML, CSS, and JavaScript, with no dependencies. It brings together tokens, typography, 130 custom icons, 44 components, charts, and screen patterns, in light and dark themes.

## Before anything else

1. **Use only what is documented.** Every `ds-*` class, every `data-*` attribute, and every JavaScript function you use must appear in a file of this documentation. Don't invent classes, variants, sizes, or properties.
2. **Icons only from the list.** Use `<ds-icon name="…">` with a name from https://lumeui.dev/ia/en/icons.md. If none fits, pick the closest one on the list and tell the person. Never draw your own SVG instead.
3. **Color, spacing, radius, and typography only through tokens.** Use `var(--ds-…)`, never a loose value like `#3e5166` or `13px`. The tokens are in https://lumeui.dev/ia/en/recursos/tokens.md and in each component file, under "Tokens used".
4. **A component before custom code.** If a component exists for the need, use it, even if you could build it by hand.
5. **When in doubt, ask or say so.** If the documentation doesn't cover a case, tell the person what was missing and which choice was closest. Don't fill the gap with something that merely looks like Lume.
6. **Follow each component's "Usage" and "Accessibility" sections.** They are rules, not suggestions.

## Installation

The CSS and modules are published at `https://lumeui.dev/ds/` and can be loaded straight from another site.

```html
<html lang="en" data-theme="light">
  <head>
    <link rel="stylesheet" href="https://lumeui.dev/ds/ds.css">
  </head>
  <body>
    <button type="button" class="ds-btn ds-btn--primary">Save</button>

    <script type="module">
      import 'https://lumeui.dev/ds/icons/icons.js';
      import { initTooltips } from 'https://lumeui.dev/ds/js/tooltip.js';
      initTooltips();
    </script>
  </body>
</html>
```

- **One CSS file:** `ds.css` brings the fonts, the tokens, the base, and every component.
- **One JavaScript file, if you prefer:** `https://lumeui.dev/ds/lume.js` gathers the whole public API (`import { createModal, toast } from 'https://lumeui.dev/ds/lume.js'`). The list and the naming convention are in `https://lumeui.dev/ia/en/recursos/api.md`. Anything not in it is internal: don't use it.
- **Theme:** `data-theme="light"` or `data-theme="dark"` on `<html>`. To follow the system, call `initTheme()` from `https://lumeui.dev/ds/js/theme.js`.
- **JavaScript only where needed:** visual components work with CSS alone. Interactive ones have a module in `https://lumeui.dev/ds/js/`. Import only the ones the screen uses; each component file shows which.
- **Icons:** import `https://lumeui.dev/ds/icons/icons.js` once so `<ds-icon>` works.
- **Language:** the components' system texts follow the browser language (Portuguese, English, or Spanish; anything else becomes English). To fix one, call `setLocale('en')` from `https://lumeui.dev/ds/js/i18n.js`.
- **Version:** the address always serves the newest Lume. There's no package with a pinned version yet; it's on the roadmap. To pin a version, copy the `ds/` folder into the project and point to it.

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
