# Search field

Lume section: Components. Page: https://lumeui.dev/#/componentes/campo-de-busca

Filters a list or a page as people type. It has the magnifier, the × to clear and, if you want, a key that brings focus to the field from anywhere.

In numbers: clear: × · Esc · shortcut: / · type: search · sizes: 3.

## Example

```html
<div class="ds-field">
  <ds-icon name="search" size="18"></ds-icon>
  <input class="ds-field__input" id="busca" type="search" aria-label="Search components" placeholder="Search">
</div>

<script type="module">
  import { createSearchField } from 'https://lumeui.dev/v/1.14/lume.js';
  createSearchField(document.querySelector('#busca'), { shortcut: '/' });
</script>
```

## With and without a shortcut

With `shortcut`, the key shows in the empty field and goes away when there’s text, to make room for the ×.

- Button
- Split button
- Search field
- Money field
- Password field
- Empty state
- Field group

Nothing found for “”.

Filtering a list `onChange` — The list follows every letter. With no result, say what was searched.

With a shortcut `shortcut: '/'` — For the screen’s main search. Only one per page.

Markup of the examples in this section:

```html
<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" id="sf-list" type="search" aria-label="Search components" placeholder="Search" autocomplete="off"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" hidden="" aria-label="Clear search"><ds-icon name="x"></ds-icon></button>
</div>

<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" aria-label="Search components" placeholder="Search" value="">
<kbd class="ds-kbd ds-search__kbd">/</kbd>
</div>
```

## States

Empty with the key, with text and the ×, and focused.

Markup of the examples in this section:

```html
<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" aria-label="Search components" placeholder="Search" value="">
</div>

<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" aria-label="Search components" placeholder="Search" value="">
<kbd class="ds-kbd ds-search__kbd">/</kbd>
</div>

<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" aria-label="Search components" placeholder="Search" value="button">
<span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"><ds-icon name="x"></ds-icon></span>
</div>
```

## Code

The field’s name comes from `aria-label` or a label. The placeholder isn’t a name.

```html
<div class="ds-field">
  <ds-icon name="search" size="18"></ds-icon>
  <input class="ds-field__input" id="busca" type="search" aria-label="Search clients" placeholder="Search">
</div>

<script type="module">
  import { createSearchField } from 'https://lumeui.dev/v/1.14/lume.js';
  createSearchField(document.querySelector('#busca'), {
    shortcut: '/',
    onChange: (value) => filtrar(value),
  });
</script>

// React
<SearchField aria-label="Search clients" value={busca} onChange={setBusca} shortcut="/" />
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

Keyboard from start to finish, and the shortcut told to screen readers.

- Shortcut announced — / — The field gets `aria-keyshortcuts`. The key doesn’t fire while people type in another field.
- Esc clears — Esc — With text, Esc clears and stays in the field. Empty, Esc moves on and closes the surrounding panel.
- A named × — The clear button is named “Clear search” and returns focus to the field.
- Results — If the list changes while people type, state the count in an aria-live region (“3 results”).

## Tokens used

On top of the Text field and Key tokens.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Magnifier and × | #46586E | #CEC8C1 |
| color.bg.hover (`--ds-color-bg-hover`) | Key background | #3E51660D | #FFFFFF0D |

## Usage

When to use it and when to prefer something else.

- **Do:** filter what’s on screen. Clients, sessions, notes: the list follows as people type.
- **Avoid:** two identical shortcuts. One key, one search. With Lume’s command palette, the page search keeps / and the palette stays on Ctrl K.
- **Tip:** Searching the whole app?. To go to any page or action, use a global search, like this site’s Ctrl K.
