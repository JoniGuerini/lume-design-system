# Keyboard key

Lume section: Components. Page: https://lumeui.dev/#/componentes/tecla

Shows a key or shortcut within text, in menus, and in tooltips. It helps people learn the faster way.

In numbers: JavaScript: 0 · height: 20 px · base: kbd · interactive: no.

## Example

```html
<kbd class="ds-kbd">⌘</kbd>
<kbd class="ds-kbd">K</kbd>
```

## Variants

One key per label: a two-key shortcut is two labels.

One key `ds-kbd` — For simple actions.

A combination `two labels` — It’s ⌘ on Mac; Ctrl on Windows and Linux.

Press Esc to close.

Within text `inside a paragraph` — It lines up with the text.

Markup of the examples in this section:

```html
<kbd class="ds-kbd">Esc</kbd>

<kbd class="ds-kbd">⌘</kbd>

<kbd class="ds-kbd">K</kbd>
```

## Accessibility

A shortcut is only a shortcut: the normal path must still exist.

- The right element — `kbd` says it’s keyboard input.
- Symbols with names — Screen readers don’t always read ⌘. On buttons, use `aria-keyshortcuts` to state the shortcut.
- By system — Show the key of the person’s system: ⌘ or Ctrl.

## Tokens used

Everything the key consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.hover (`--ds-color-bg-hover`) | Background | #3E51660D | #FFFFFF0D |
| color.border.default (`--ds-color-border-default`) | Outline | #3E516633 | #FFFFFF1A |
| color.fg.subtle (`--ds-color-fg-subtle`) | Text | #53657A | #9C9792 |
| radius.xs (`--ds-radius-xs`) | Corners | 6 px | 6 px |

## Usage

When to use it and when to prefer something else.

- **Do:** teach shortcuts. In menus, tooltips, and search, beside the action.
- **Avoid:** looking like a button. Clicking a drawn key shouldn’t do anything. For an action, use a Button.
- **Tip:** Short names. Esc, Enter, Tab. Spell it out only when no known abbreviation exists.
