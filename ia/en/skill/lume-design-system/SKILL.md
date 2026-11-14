---
name: lume-design-system
description: Builds and reviews interfaces with the Lume Design System (lumeui.dev), a design system in native HTML, CSS, and JavaScript. Use whenever someone asks for a screen, a component, or a prototype with Lume, or when the project already loads ds.css or uses ds-* classes.
---

# Lume Design System

Lume is a design system with no dependencies: one CSS file (`https://lumeui.dev/v/0.39/lume.css`), optional JavaScript modules, and 154 custom icons. The documentation for AIs is published at `https://lumeui.dev/ia/en/`.

## How to work

1. Read `https://lumeui.dev/ia/en/README.md` before writing code. It covers installation, the general rules, and the visual direction.
2. Open the index `https://lumeui.dev/ia/en/llms.txt` and read the file for each component you'll use (`https://lumeui.dev/ia/en/componentes/<name>.md`). For a whole screen, start with the patterns in `https://lumeui.dev/ia/en/padroes/`.
3. Write the interface using only what appears in those files: the `ds-*` classes, the attributes, the module functions, and the `var(--ds-…)` tokens.
4. For icons, check the name in `https://lumeui.dev/ia/en/icons.md`.
5. In a React project, use the components in `lume/react/` (React section of the README); anything without a component yet uses the HTML markup with `className`.
6. Before delivering, review the screen against the "Usage" and "Accessibility" sections of the components used.

## Never

- Invent classes, variants, sizes, properties, or icons that aren't in the documentation.
- Use loose colors, spacing, radii, or font sizes instead of a token.
- Rebuild by hand a component Lume already has.
- Use gradients, glass, blur, decorative shadows, or the sparkles icon.

If the documentation doesn't cover the case, tell the person and explain which choice was closest.
