# Lume Design System

An open design system: tokens, 175 icons, 66 components, charts and 12 screen patterns. Light and dark themes, in English, Portuguese and Spanish, built with plain HTML, CSS and JavaScript and no dependencies. It also ships a React layer and documentation written for AI assistants.

**[lumeui.dev](https://lumeui.dev)** · [Storybook](https://lumeui.dev/storybook/) · [Figma](https://www.figma.com/design/1yTJ881xoXjRmdi6NeTnYD/Lume-Design-System) · [npm](https://www.npmjs.com/package/@joniguerini/lume) · [Contributing](CONTRIBUTING.md)

## Install

```bash
npm install @joniguerini/lume
```

```js
import '@joniguerini/lume/lume.css';
import { initTheme, createModal, toast } from '@joniguerini/lume';   // HTML and JavaScript
import { Button, AppShell } from '@joniguerini/lume/react';          // React 18+, compiled and typed

initTheme();
```

Works with Vite, Next.js (the components are already marked for the client) and any bundler.

### Without npm

Load a fixed version straight from the site:

```html
<link rel="stylesheet" href="https://lumeui.dev/v/1.12/lume.css">
<script type="module">
  import { initTheme, initTooltips } from 'https://lumeui.dev/v/1.12/lume.js';
  initTheme();
  initTooltips();
</script>

<button class="ds-btn ds-btn--primary"><ds-icon name="pencil"></ds-icon>Create</button>
```

Prefer the files in your project? `npx @joniguerini/lume init` copies the whole system into `./lume`, and `npx @joniguerini/lume add modal` brings a single component with what it needs. Every version also has a zip at `https://lumeui.dev/v/<line>/lume-<line>.zip`.

### With an AI assistant

Point it to [lumeui.dev/llms.txt](https://lumeui.dev/llms.txt). Every page of the docs is available as Markdown, with rules that keep the assistant from inventing classes, icons or colors.

## What's inside

- **Tokens** in OKLCH, with semantic colors for both themes and WCAG contrast checked at build time.
- **Components:** actions, forms, navigation, layers, feedback and content, each with states, keyboard support and accessible names.
- **Charts** in SVG: bars, lines and areas, donut, heatmap, calendar, scatter, stat tiles, sparklines and meters. The 8-color series palette is ordered for color blindness in both themes.
- **Screen patterns:** app shell (sidebar or navbar), forms, login, search, listings, settings, notices, detail, dashboard, loading and errors.
- **Languages:** component texts and number and date formatting follow the user's language (English, Portuguese or Spanish), switchable with `setLocale()`.

In your own styles, always use semantic tokens: `var(--ds-color-fg-muted)`, `var(--ds-radius-xl)`, `font: var(--ds-text-body-md)`.

## Develop

Node 18 or newer. There are no dependencies to install.

```bash
npm run dev            # the docs site at http://localhost:5173
```

The dev server generates the tokens on start and again whenever a file in `tokens/` changes.

| Command | What it does |
| --- | --- |
| `npm run build` | Tokens, React types, the Figma plugin test and the site in `dist/site/` (what Vercel publishes) |
| `npm run test:a11y` | Accessibility and contrast on every page, in both themes |
| `npm run test:visual` | Screenshots every component in both themes and compares them with the references |
| `npm run ia` | The Markdown docs for AI assistants (`ia/`, `llms.txt`) |
| `npm run stories` / `npm run storybook` | Generates and opens the Storybook (its dependencies live only in `storybook/`) |
| `npm run figma` / `npm run figma:test` | Builds the Figma plugin and tests it against a mock of the Figma API |
| `npm run npm:build` / `npm run publicar` | Builds and publishes the npm package (see `npm/PUBLICAR.md`) |

### Structure

```
tokens/        the source of truth: palettes, foundation, typography, semantic colors, effects
ds/            the design system itself
  ds.css         entry point (imports everything); lume.css is the same in a single file
  tokens.css/js  generated, don't edit
  components/    one CSS file per component
  icons/         175 icons, icon() and <ds-icon>
  js/            behavior: theme, menu, select, pickers, modal, toast, shell, charts, i18n…
react/         the React layer (.tsx), compiled into the npm package
site/          the documentation site (built with the design system)
figma/         the Figma plugin that generates the library file
scripts/       build, tests, docs for AI, package
versoes/       frozen copies of previous version lines
```

## Contributing

Bug reports and small pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE). The fonts (Geist, Geist Serif, JetBrains Mono) are under the SIL Open Font License 1.1; their licenses ship in `ds/fonts/`.
