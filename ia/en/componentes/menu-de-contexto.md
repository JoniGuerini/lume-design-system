# Context menu

Lume section: Components. Page: https://lumeui.dev/#/componentes/menu-de-contexto

An item’s actions, right where the person is: right-click, menu key, or long press. It’s a shortcut, never the only way.

In numbers: ways to open: 3 · ARIA role: menu · long press: 500 ms · surface: the Menu’s.

## Example

```html
<ul id="arquivos" role="list">
  <li data-arquivo tabindex="0">Proposal.pdf</li>
</ul>

<script type="module">
  import { createContextMenu } from 'https://lumeui.dev/v/1.1/lume.js';
  createContextMenu(document.querySelector('#arquivos'), {
    selector: '[data-arquivo]',
    options: [
      { value: 'open', label: 'Open', icon: 'external-link' },
      { type: 'separator' },
      { value: 'delete', label: 'Delete', icon: 'trash', tone: 'danger' },
    ],
    onSelect: (value, alvo) => agir(value, alvo),
  });
</script>
```

## Code

With `selector`, one menu serves every row; `options` can change by item.

```html
import { createContextMenu } from 'https://lumeui.dev/v/1.1/lume.js';

createContextMenu(document.querySelector('#arquivos'), {
  selector: '[data-arquivo]',
  label: 'File actions',
  options: [
    { value: 'open', label: 'Open', icon: 'external-link' },
    { type: 'separator' },
    { value: 'delete', label: 'Delete', icon: 'trash', tone: 'danger' },
  ],
  onSelect: (value, alvo) => agir(value, alvo),
});
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

It works like the Menu once open, but nobody discovers it alone: that’s why it’s always a shortcut.

- Open by keyboard — Shift F10 — The item must take focus. The menu key or Shift+F10 open it beside the item.
- Move and choose — ↑ ↓ Enter — ↑/↓, Home/End, and letters move; Enter chooses.
- Close — Esc — Esc closes and returns focus to the item.
- Another way — Offer the same actions in a visible button: right-click isn’t obvious and doesn’t exist everywhere.

## Tokens used

The same as the Menu.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Background | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Outline | #3E51664D | #FFFFFF29 |
| shadow.xl (`--ds-shadow-xl`) | Shadow | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| color.bg.hover (`--ds-color-bg-hover`) | Active item | #3E51660D | #FFFFFF0D |
| color.danger.fg (`--ds-color-danger-fg`) | Danger action | #C13834 | #FFB2AA |

## Usage

When to use it and when to prefer something else.

- **Do:** a shortcut in lists. Files, table rows, and cards, where people repeat actions.
- **Avoid:** hidden actions. If the action only exists on right-click, many people will never find it.
- **Tip:** Short and in order of use. The most common on top; destructive ones at the end, after a separator.
