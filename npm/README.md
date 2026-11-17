# Lume Design System

Tokens, typography, {{ICONS}} custom icons, {{COMPONENTS}} components, charts, and screen patterns, in light and dark themes. Native HTML, CSS, and JavaScript, with no dependencies, plus React components. Works with any framework, or none.

Documentation: https://lumeui.dev · in English, Portuguese, and Spanish.

## Install

```bash
npm install {{NAME}}
```

### HTML, CSS, and JavaScript

```js
import '{{NAME}}/lume.css';
import { initTheme, createModal, toast } from '{{NAME}}';

initTheme();
```

### React

```tsx
import '{{NAME}}/lume.css';
import { Button, AppShell } from '{{NAME}}/react';

export function App() {
  return <Button variant="primary">Save</Button>;
}
```

The React components are a thin layer over the same CSS and JavaScript, already compiled and typed. React 18 or newer.

## Or copy it into your project

```bash
npx {{NAME}} init          # the whole design system in ./lume
npx {{NAME}} add modal     # only one component, with what it needs
npx {{NAME}} list          # the names add accepts
```

The files become yours: edit them as you like.

## Or load it from the web

```html
<link rel="stylesheet" href="https://lumeui.dev/v/{{LINE}}/lume.css">
<script type="module">
  import { initTheme } from 'https://lumeui.dev/v/{{LINE}}/lume.js';
  initTheme();
</script>
```

## Using an AI to build with Lume

Point it to https://lumeui.dev/llms.txt. Every page of the documentation is available as Markdown, with rules that keep the AI from inventing classes, icons, or colors.

## License

MIT. The fonts (Geist, Geist Serif, JetBrains Mono) are under the SIL Open Font License 1.1; their licenses ship in `fonts/`.

Source: https://github.com/JoniGuerini/lume-design-system
