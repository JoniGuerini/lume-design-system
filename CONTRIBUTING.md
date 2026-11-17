# Contributing to Lume

Thanks for your interest! Lume is maintained by one person, so contributing is kept simple.

Issues and pull requests can be written in English, Portuguese or Spanish.

## Found a bug or have an idea?

Open an [issue](../../issues/new/choose). For a bug, tell us which page or component it happens on, the theme (light or dark) and the browser. A screenshot helps a lot.

## Pull requests

**Small pull requests** are welcome:

- bug fixes;
- accessibility improvements (keyboard, screen readers, contrast);
- texts and translations (English, Portuguese and Spanish);
- documentation fixes.

For a **new component, a visual change or an API change**, please open an issue before writing code. That way we agree on whether and how it fits, and nobody loses work. Not every pull request is merged, even a correct one: Lume has a defined visual direction and prefers fewer pieces over more.

## Running the project

You only need Node 18 or newer. There are no dependencies to install.

```bash
npm run dev            # opens the site at http://localhost:5173
```

The server generates the tokens on its own and watches `tokens/` for changes.

## Code rules

- **No dependencies:** plain HTML, CSS and JavaScript. No new packages.
- **Tokens are the source of truth:** colors, spacing and typography come from `tokens/*.json`. `ds/tokens.css` and `ds/tokens.js` are generated, don't edit them. Components use semantic tokens only (`var(--ds-color-fg-muted)`, never a raw color).
- **Three languages:** every new text ships in English, Portuguese and Spanish. In components, through `msg()` (`ds/js/messages.js`); on the site, through `T(pt, en, es)` or `L(pt, en, es)`.
- **States:** every rule with `:hover`, `:focus-visible` or `:active` has a sibling with `[data-state="hover|focus|pressed"]`, so states can be shown on the docs pages.
- **Works without a browser:** modules in `ds/` must import cleanly on the server (Next.js). Touch `document` or `window` only inside functions that run in the browser.
- **Accessibility:** full keyboard support, accessible names, WCAG AA contrast in both themes.
- **Flat:** no background gradients, glass, blur, glow or decorative images.

## Before opening the pull request

```bash
npm run build          # tokens, React types and the site
npm run test:a11y      # accessibility and contrast on every page, in both themes
```

If you changed CSS, also run `npm run test:visual`. The first time, run `npm run test:visual -- --atualizar` before making changes, to create the reference screenshots on your machine. Then run it again and check the report at `dist/test-visual/relatorio.html`.

You don't need to touch the changelog, the version number or the generated files for AI assistants (`ia/`) and Storybook. That happens when a version is released.

## License

By contributing, you agree that your code is distributed under the project's [MIT license](LICENSE).
