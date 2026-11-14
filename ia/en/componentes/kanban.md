# Kanban

Lume section: Components. Page: https://lumeui.dev/#/componentes/kanban

Columns of cards that move from one to another: stages of work, from planned to done. It’s the sortable list with several lists in the same group, and each column’s count keeps up.

In numbers: columns: 3–5 · min width: 240 px · shortcuts: 9 · dependencies: 0.

## Example

```html
<script type="module">
  import { createKanban } from 'https://lumeui.dev/v/0.39/lume.js';
  createKanban(document.querySelector('.ds-kanban'), { onChange: (_, colunas) => console.log(colunas) });
</script>
```

## Variants

The whole card drags, or only the handle when it has links and buttons.

Empty column `data-empty` — With no cards, the column shows where to drop. The text comes from Lume, in the page’s language.

With handle `ds-kanban__card--handle`

With `handle`, only the handle drags: the rest of the card stays free for links and buttons.

Markup of the examples in this section:

```html
<div class="ds-kanban" aria-label="Lume roadmap" data-kanban="" role="group"><section class="ds-kanban__column" data-id="andamento">
<header class="ds-kanban__header"><h3 class="ds-kanban__title" id="kb-v1-andamento">In progress</h3><span class="ds-kanban__count">0</span></header>
<ul class="ds-kanban__list ds-sortable" role="list" aria-label="In progress" data-empty="" data-empty-text="Drop a card here"></ul><span class="ds-visually-hidden" aria-live="assertive"></span>
</section><section class="ds-kanban__column" data-id="feito">
<header class="ds-kanban__header"><h3 class="ds-kanban__title" id="kb-v1-feito">Done</h3><span class="ds-kanban__count">2</span></header>
<ul class="ds-kanban__list ds-sortable" role="list" aria-label="Done" data-empty-text="Drop a card here"><li class="ds-sortable__item ds-kanban__card" data-id="visualizador" data-kanban="" aria-describedby="ds-sortable-help" role="group">
<p class="ds-kanban__card-title">Image viewer</p>
</li><li class="ds-sortable__item ds-kanban__card" data-id="banner" data-kanban="" aria-describedby="ds-sortable-help" role="group">
<p class="ds-kanban__card-title">Banner and notifications</p>
</li></ul><span class="ds-visually-hidden" aria-live="assertive"></span>
</section></div>
```

## States

The same as the sortable list, on the card.

Markup of the examples in this section:

```html
<ul class="ds-kanban__list" role="list"><li class="ds-sortable__item ds-kanban__card" data-id="visualizador">
<p class="ds-kanban__card-title">Image viewer</p>
<p class="ds-kanban__card-text">Zoom, panning, and gallery.</p>
<div class="ds-kanban__card-meta"><span class="ds-badge ds-badge--sm ds-badge--success">0.36</span></div>
</li></ul>

<ul class="ds-kanban__list" role="list"><li class="ds-sortable__item ds-kanban__card" data-id="visualizador" data-grabbed="">
<p class="ds-kanban__card-title">Image viewer</p>
<p class="ds-kanban__card-text">Zoom, panning, and gallery.</p>
<div class="ds-kanban__card-meta"><span class="ds-badge ds-badge--sm ds-badge--success">0.36</span></div>
</li></ul>

<ul class="ds-kanban__list" role="list"><li class="ds-sortable__item ds-kanban__card" data-id="visualizador" data-ghost="">
<p class="ds-kanban__card-title">Image viewer</p>
<p class="ds-kanban__card-text">Zoom, panning, and gallery.</p>
<div class="ds-kanban__card-meta"><span class="ds-badge ds-badge--sm ds-badge--success">0.36</span></div>
</li></ul>
```

## Code

The column’s `data-id` and each card’s make up what `toObject()` returns.

```html
<div class="ds-kanban" aria-label="Lume roadmap">
  <section class="ds-kanban__column" data-id="andamento">
    <header class="ds-kanban__header">
      <h3 class="ds-kanban__title">In progress</h3>
      <span class="ds-kanban__count"></span>
    </header>
    <ul class="ds-kanban__list" role="list" aria-label="In progress">
      <li class="ds-sortable__item ds-kanban__card" data-id="kanban">
        <p class="ds-kanban__card-title">Sortable list and kanban</p>
        <p class="ds-kanban__card-text">Change the order and place of things.</p>
      </li>
    </ul>
  </section>
  <section class="ds-kanban__column" data-id="feito">…</section>
</div>

<script type="module">
  import { createKanban } from 'https://lumeui.dev/v/0.39/lume.js';

  createKanban(document.querySelector('.ds-kanban'), {
    // { andamento: [], feito: ['kanban', …] }
    onChange: (mudanca, colunas) => salvar(colunas),
  });
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Each column is a named list; the card is read by its own text.

- Focusable card — Space Enter — Without a handle, the card takes focus and Space or Enter picks it up. With a handle, the handle is the “Move …” button.
- Change column — ← → — The side arrows take the card to the next column, and the announcement says which: ““Sortable list and kanban” in Done, position 1 of 4.”
- Change the order — ↑ ↓ Home End — Up and down arrows move within the column; Home and End go to the ends.
- Undo — Esc — Esc returns the card to the column and position it came from.
- Scrolling — With more columns than fit, the board scrolls sideways; dragging near the edge scrolls it automatically.

## Tokens used

The column is sunken; the card is the surface on top.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.sunken (`--ds-color-bg-sunken`) | Column background | #E8EDF3 | #151412 |
| color.bg.surface (`--ds-color-bg-surface`) | Card background | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Card border | #3E516624 | #FFFFFF0F |
| color.border.default (`--ds-color-border-default`) | Card hover and empty column | #3E516633 | #FFFFFF1A |
| color.fg.muted (`--ds-color-fg-muted`) | Card text and column count | #46586E | #CEC8C1 |
| radius.xl (`--ds-radius-xl`) | Column corners | 20 px | 20 px |
| radius.lg (`--ds-radius-lg`) | Card corners | 16 px | 16 px |

## Usage

For stages, not categories.

- **Do:** work that moves forward. From planned to done, from triage to reply: the card changes column when it changes stage.
- **Avoid:** too many columns. Three to five fit on screen. More than that, people lose sight of the board.
- **Tip:** Short cards. Title, one line, and a badge. Details open on click, in a Modal or a Drawer.
