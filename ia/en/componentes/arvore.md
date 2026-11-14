# Tree

Lume section: Components. Page: https://lumeui.dev/#/componentes/arvore

Shows nested levels, like folders or categories, without taking over the screen. Only the open parts appear.

In numbers: levels: unlimited · shortcuts: 8 · indent: 20 px · ARIA role: tree.

## Example

```html
<div class="ds-tree" aria-label="Files"></div>

<script type="module">
  import { createTree } from 'https://lumeui.dev/v/0.35/lume.js';
  createTree(document.querySelector('.ds-tree'), {
    items: arquivos,
    expanded: ['docs', 'contratos'],
    onSelect: (item) => abrir(item.id),
  });
</script>
```

## Variants

Icons and side information are optional.

With icons `icon · meta` — For files, with the size beside them.

Text only `label` — For categories, with less noise.

## States

Hover and focus can be forced with `data-state` on the row.

Markup of the examples in this section:

```html
<div class="ds-tree"><ul class="ds-tree__group"><li class="ds-tree__item" aria-selected="false"><div class="ds-tree__row"><span class="ds-tree__toggle"></span><span class="ds-tree__icon"><ds-icon name="file-text"></ds-icon></span><span class="ds-tree__label">Notes.txt</span></div></li></ul></div>

<div class="ds-tree"><ul class="ds-tree__group"><li class="ds-tree__item" aria-selected="true"><div class="ds-tree__row"><span class="ds-tree__toggle"></span><span class="ds-tree__icon"><ds-icon name="file-text"></ds-icon></span><span class="ds-tree__label">Notes.txt</span></div></li></ul></div>
```

## Code

The `aria-label` on `.ds-tree` names the tree for screen readers.

```html
import { createTree } from 'https://lumeui.dev/v/0.35/lume.js';

const tree = createTree(document.querySelector('.ds-tree'), {
  items: [
    { id: 'docs', label: 'Documents', icon: 'folder', children: [
      { id: 'notas', label: 'Notes.txt', icon: 'file-text' },
    ] },
  ],
  expanded: ['docs'],
  onSelect: (item) => abrir(item.id),
});
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

It follows the ARIA tree pattern: one Tab stop, and the arrows do the rest.

- Move — ↑ ↓ Home End — ↑ and ↓ move through visible rows; Home and End go to the first and last.
- Open and close — → ← — → opens or enters the folder; ← closes or returns to the level above.
- Choose — Enter Space — Enter or Space choose the row. Letters jump to the next name starting with them.
- Announced state — aria-expanded, aria-selected, and aria-level state each row’s status and level.

## Tokens used

Everything the tree consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Name | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Chevron, icon, and info | #5C6C7F | #9C9792 |
| color.bg.hover (`--ds-color-bg-hover`) | Row on hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Chosen row | #3E516612 | #C0CAD61A |
| color.border.focus (`--ds-color-border-focus`) | Focus ring | #53657A | #C0CAD6 |
| color.fg.disabled (`--ds-color-fg-disabled`) | Disabled row | #93A0B0 | #605D59 |
| radius.sm (`--ds-radius-sm`) | Row corners | 8 px | 8 px |

## Usage

When to use it and when to prefer something else.

- **Do:** real hierarchies. Folders, categories, and org charts, where the level has meaning.
- **Avoid:** site navigation. For pages, the sidebar is simpler. A tree asks for keyboard use not everyone knows.
- **Tip:** Open the path. Start with the current item visible, with its folders already open.
