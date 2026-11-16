# Menu

Lume section: Components. Page: https://lumeui.dev/#/componentes/menu

A list of options that opens from a trigger. It’s for picking a value — like in chips — or for running actions.

In numbers: modes: 2 · item types: 6 · keys: 8 · function: createMenu.

## Example

```html
import { createMenu } from 'https://lumeui.dev/v/1.8/lume.js';

const menu = createMenu(trigger, {
  label: 'Sort by',
  value: 'recent',
  options: [
    { value: 'recent', label: 'Most recent', icon: 'clock' },
    { value: 'name', label: 'Name', icon: 'type' },
    { value: 'size', label: 'Size', icon: 'bar-chart' },
    { value: 'kind', label: 'File type', icon: 'file-text' },
  ],
  onChange: (value) => sort(value),
});

// when leaving the page: menu.destroy();
```

## Modes

The same function, two jobs. Choose by what happens after the click.

Selection `mode: 'radio'` — Holds a value. The current item gets the mark and the trigger shows the choice. It’s the default.

Action `mode: 'action'` — Runs a command and disappears. No selection mark; supports shortcuts, separators, and a danger item.

Markup of the examples in this section:

```html
<button type="button" class="ds-chip" data-mn-demo="radio" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-32"><span class="ds-chip__icon"><ds-icon name="filter"></ds-icon></span><span data-mn-label="">Most recent</span><span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-mn-demo="action" aria-label="More options" data-ds-tooltip="More options" data-ds-tooltip-placement="bottom" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-33"><ds-icon name="more-horizontal"></ds-icon></button>
```

## Columns

A long list doesn’t scroll or turn into a giant menu: with maxRows, each column holds at most that many items and the rest moves to the next column, split evenly. It’s what the navbar uses for its groups.

In columns `maxRows: 5` — 16 items with up to 5 per column become 4 columns of 4 — not 5, 5, 5, and 1. ↑/↓ go down the column and on to the next; ←/→ jump between columns. Near the edge, the menu slides to fit on screen.

```html
createMenu(button, {
  label: 'Components',
  options: pages.map((p) => ({ value: p.href, label: p.label, icon: p.icon })),
  maxRows: 5,   // at most 5 per column, balanced
  onChange: (href) => (location.hash = href),
});
```

Markup of the examples in this section:

```html
<button type="button" class="ds-chip" data-mn-demo="columns" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-31"><span>Components</span><span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Items

Each item is an object in `options`. The special ones organize the list without becoming options.

- Menu label `label: 'Sort by'` — Optional. Says what’s being chosen and becomes the menu’s name.
- Item with icon `{ value, label, icon: 'clock' }` — An 18 px icon on the left. Use it on every item or on none.
- Selected `value: 'name'` — In selection mode, the mark in the brand color shows the current value.
- Group `{ type: 'group', label: 'File' }` — A small heading to separate topics in a long list.
- Shortcut `shortcut: 'Ctrl D'` — Action mode only. Teaches the key without taking up space.
- Disabled `disabled: true` — Stays visible but is skipped by the keyboard. Prefer hiding it if it will never work.
- Separator `{ type: 'separator' }` — A line between blocks — before what’s destructive, for example.
- Danger `tone: 'danger'` — For delete and the like. Always last, after a separator.

Markup of the examples in this section:

```html
<div class="ds-menu" data-open=""><p class="ds-menu__label" aria-hidden="true">Sort by</p><button type="button" class="ds-menu__item" role="menuitemradio" aria-checked="false" data-value="recent">
<ds-icon name="clock"></ds-icon><span class="ds-menu__text">Most recent</span><ds-icon name="check"></ds-icon>
</button><button type="button" class="ds-menu__item" role="menuitemradio" aria-checked="true" data-value="name">
<ds-icon name="type"></ds-icon><span class="ds-menu__text">Name</span><ds-icon name="check"></ds-icon>
</button><button type="button" class="ds-menu__item" role="menuitemradio" aria-checked="false" data-value="size">
<ds-icon name="bar-chart"></ds-icon><span class="ds-menu__text">Size</span><ds-icon name="check"></ds-icon>
</button><button type="button" class="ds-menu__item" role="menuitemradio" aria-checked="false" data-value="kind">
<ds-icon name="file-text"></ds-icon><span class="ds-menu__text">File type</span><ds-icon name="check"></ds-icon>
</button></div>

<div class="ds-menu" data-mode="action" data-open=""><p class="ds-menu__group" aria-hidden="true">File</p><button type="button" class="ds-menu__item" role="menuitem" data-value="duplicate">
<ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicate</span><span class="ds-menu__shortcut">Ctrl D</span>
</button><button type="button" class="ds-menu__item" role="menuitem" data-value="export">
<ds-icon name="download"></ds-icon><span class="ds-menu__text">Export PDF</span><span class="ds-menu__shortcut">Ctrl E</span>
</button><button type="button" class="ds-menu__item" role="menuitem" aria-disabled="true" data-value="share">
<ds-icon name="link"></ds-icon><span class="ds-menu__text">Share</span>
</button><div class="ds-menu__separator" role="separator"></div><button type="button" class="ds-menu__item ds-menu__item--danger" role="menuitem" data-value="delete">
<ds-icon name="trash"></ds-icon><span class="ds-menu__text">Delete</span>
</button></div>
```

## States

Hover and focus share a background and can be forced with `data-state`.

Markup of the examples in this section:

```html
<button type="button" class="ds-menu__item"><ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicate</span></button>

<button type="button" class="ds-menu__item" aria-checked="true"><ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicate</span><ds-icon name="check"></ds-icon></button>

<button type="button" class="ds-menu__item ds-menu__item--danger"><ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicate</span></button>

<button type="button" class="ds-menu__item" aria-disabled="true"><ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicate</span></button>
```

## Keyboard

Everything you can do with the mouse, you can do without it.

| Key | On the trigger | With the menu open |
| --- | --- | --- |
| ↓ | Opens the menu on the current item | Moves to the next item (wraps at the end) |
| ↑ | Opens the menu (in action mode, on the last item) | Moves to the previous item |
| Home | — | First item |
| End | — | Last item |
| Enter | Opens or closes | Picks the focused item |
| Space | Opens or closes | Picks the focused item |
| A–Z | — | Jumps to the next item starting with that letter |
| Esc | — | Closes and returns focus to the trigger |
| Tab | — | Closes and moves on to the next element |

## Accessibility

createMenu already sets the ARIA attributes on the trigger and the menu.

- An announced trigger — Gets `aria-haspopup="menu"`, `aria-expanded`, and `aria-controls` — the screen reader knows it opens something.
- The right roles — Selection uses `menuitemradio` with `aria-checked`; action uses `menuitem`.
- Focus that makes sense — ↓ Esc — On open, it goes to the selected item (or the first). On closing with Esc or picking, it returns to the trigger.
- Closes on its own — Clicking outside, scrolling the page, or resizing closes the menu without trapping anyone.
- A named icon button — If the trigger is just an icon, give it an `aria-label` and a hint.
- Not color-dependent — The selected item has a mark; danger has its own icon and position, besides color.

## Tokens used

It floats above the content, hence the strong border and larger shadow.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Background | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Border | #3E51664D | #FFFFFF29 |
| radius.lg (`--ds-radius-lg`) | Menu radius | 16 px | 16 px |
| shadow.xl (`--ds-shadow-xl`) | Shadow | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| text.label-md (`--ds-text-label-md`) | Items | 14/20 · medium | 14/20 · medium |
| color.bg.hover (`--ds-color-bg-hover`) | Focused item | #3E51660D | #FFFFFF0D |
| color.fg.brand (`--ds-color-fg-brand`) | Selected mark | #3E5166 | #DAE0E8 |
| color.danger.fg (`--ds-color-danger-fg`) | Danger item | #C13834 | #FFB2AA |
| color.danger.subtle (`--ds-color-danger-subtle`) | Focused danger | #FFF4F3 | #FF908721 |
| color.border.subtle (`--ds-color-border-subtle`) | Separator | #3E516624 | #FFFFFF0F |
| duration.fast (`--ds-duration-fast`) | Open and close | 120ms | 120ms |
| easing.emphasized (`--ds-easing-emphasized`) | Slide curve | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| z.popover (`--ds-z-popover`) | Layer | 1400 | 1400 |

## Usage

A menu hides options. It’s worth it when there are too many to show and too few to search.

- **Do:** 3 to 12 options. Sorting, filters, an item’s secondary actions — what doesn’t need to be always visible.
- **Avoid:** 2 options or 40. Two fit in a segmented control or chips. Dozens call for a searchable select.
- **Tip:** Destructive last. Separated by a line, away from what’s safe to click.
