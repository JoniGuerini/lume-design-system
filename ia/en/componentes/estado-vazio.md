# Empty state

Lume section: Components. Page: https://lumeui.dev/#/componentes/estado-vazio

What shows in place of a list or panel with nothing in it: what’s missing, why, and the next step. For the copy of each situation (first use, no results, error), see the Empty states pattern.

In numbers: sizes: 3 · tones: 4 · parts: 5 · ARIA role: status.

## Example

```html
<div class="ds-empty" role="status">
  <span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
  <p class="ds-empty__title">No clients yet</p>
  <p class="ds-empty__description">Add the first one to book sessions and issue receipts.</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--primary">Add client</button>
  </div>
</div>

// React
<EmptyState
  icon="users"
  title="No clients yet"
  description="Add the first one to book sessions and issue receipts."
  actions={<Button variant="primary">Add client</Button>}
/>
```

## Sizes

The size of the place left empty: the whole list, a panel, or a row.

Page `ds-empty` — The whole list or screen. The default.

Compact `ds-empty--compact` — Inside a panel or a card.

Inline `ds-empty--inline` — In a table or list row, without a button.

Plain `ds-empty--plain` — When it’s already inside a card, which provides the outline.

Markup of the examples in this section:

```html
<div class="ds-empty" role="status">
<span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
<p class="ds-empty__title">No clients yet</p>
<p class="ds-empty__description">Add the first one to book sessions and issue receipts.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Add client</button></div>
</div>

<div class="ds-empty ds-empty--compact" role="status">
<span class="ds-empty__icon"><ds-icon name="calendar"></ds-icon></span>
<p class="ds-empty__title">No sessions today</p>
<p class="ds-empty__description">Today’s schedule shows here.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary ds-btn--sm"><ds-icon name="plus"></ds-icon>Book session</button></div>
</div>

<div class="ds-empty ds-empty--inline" role="status">
<span class="ds-empty__icon"><ds-icon name="search-x"></ds-icon></span>
<p class="ds-empty__title">Nothing this week</p>
<p class="ds-empty__description">Change the period to see more.</p>
</div>

<div class="ds-card"><div class="ds-empty ds-empty--compact ds-empty--plain" role="status">
<span class="ds-empty__icon"><ds-icon name="file-text"></ds-icon></span>
<p class="ds-empty__title">No notes</p>
<p class="ds-empty__description">Session notes stay here.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary ds-btn--sm"><ds-icon name="plus"></ds-icon>Write note</button></div>
</div></div>
```

## Tones

The tone goes only on the icon. Error and warning call for a recovery action; muted is for what doesn’t depend on the person.

Neutral `—`

Error `ds-empty--danger`

Warning `ds-empty--warning`

Muted `ds-empty--muted`

Markup of the examples in this section:

```html
<div class="ds-empty ds-empty--compact" role="status">
<span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
<p class="ds-empty__title">Neutral</p>
</div>

<div class="ds-empty ds-empty--compact ds-empty--danger" role="status">
<span class="ds-empty__icon"><ds-icon name="alert-circle"></ds-icon></span>
<p class="ds-empty__title">Error</p>
</div>

<div class="ds-empty ds-empty--compact ds-empty--warning" role="status">
<span class="ds-empty__icon"><ds-icon name="wifi-off"></ds-icon></span>
<p class="ds-empty__title">Warning</p>
</div>

<div class="ds-empty ds-empty--compact ds-empty--muted" role="status">
<span class="ds-empty__icon"><ds-icon name="lock"></ds-icon></span>
<p class="ds-empty__title">Muted</p>
</div>
```

## Code

CSS only. In React, `EmptyState` builds the same markup.

```html
<div class="ds-empty" role="status">
  <span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
  <p class="ds-empty__title">No clients yet</p>
  <p class="ds-empty__description">Add the first one to book sessions and issue receipts.</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--primary">Add client</button>
  </div>
</div>

// React
<EmptyState
  icon="users"
  title="No clients yet"
  description="Add the first one to book sessions and issue receipts."
  actions={<Button variant="primary" icon="plus">Add client</Button>}
/>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Emptiness is content too, and it gets said.

- Announced without interrupting — `role="status"`: when a search empties the list, screen readers hear the title.
- Decorative icon — The icon isn’t read: the title says it all.
- Action with a verb — “Add client”, not “Click here”: the button makes sense out of context.

## Tokens used

Everything the empty state consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.sunken (`--ds-color-bg-sunken`) | Background | #E8EDF3 | #151412 |
| color.border.default (`--ds-color-border-default`) | Dashed outline | #3E516633 | #FFFFFF1A |
| color.bg.muted (`--ds-color-bg-muted`) | Icon background | #DAE0E8 | #3D3B38 |
| color.fg.brand (`--ds-color-fg-brand`) | Icon | #3E5166 | #DAE0E8 |
| text.heading-md (`--ds-text-heading-md`) | Title | 21/28 · regular | 21/28 · regular |
| radius.2xl (`--ds-radius-2xl`) | Corners | 28 px | 28 px |

## Usage

When to use it and when to prefer something else.

- **Do:** always a next step. Create, clear the search, try again. Empty with no way out is a dead end.
- **Avoid:** an illustration instead of text. The icon tags along; the title and description do the explaining.
- **Tip:** The copy for each situation. First use, no results, error, no permission, offline: the Empty states pattern has the copy for each.
