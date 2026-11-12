# Interface with the Lume Design System

This project uses the Lume Design System (https://lumeui.dev). Before creating or changing any screen, read https://lumeui.dev/ia/en/README.md and, for each component used, its file in https://lumeui.dev/ia/en/componentes/. The full index is at https://lumeui.dev/ia/en/llms.txt.

Rules that always apply:

- Use only `ds-*` classes, attributes, and functions that appear in Lume's documentation. Don't invent variants, sizes, or properties.
- Icons only with `<ds-icon name="…">` and names from the list in https://lumeui.dev/ia/en/icons.md.
- Color, spacing, radius, and typography only through tokens (`var(--ds-…)`), never loose values.
- If Lume has a component for the need, use it instead of building your own.
- Follow each component's "Usage" and "Accessibility" sections.
- Flat visuals: no gradients, decorative shadows, glass, or blur. One primary action per screen.
- If the documentation doesn't cover a case, tell the person and say which choice was closest.

Copy this file to your project root under the name your tool reads: `AGENTS.md`, `CLAUDE.md`, or your editor's rules file.
