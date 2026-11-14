# Search and commands

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/busca

Three ways to find things: the palette (Ctrl K) takes you anywhere, filters narrow down a list, and shortcuts save the trip for those who already know where they’re going.

In numbers: opens search: Ctrl K · also opens: / · relevance levels: 3 · filter row: 1.

## Command palette

A single box to go to any page or trigger any action. It opens with Ctrl K, with /, or from the magnifier — and returns focus to where it was on close.

- 1 — Search field — It comes focused. Typing filters right away — no search button.
- 2 — Group — Groups by intent: go to, create, actions, help. Group order is registration order.
- 3 — Active item — Selection background and ↵ on the right. ↑ ↓ move; the mouse moves too.
- 4 — Hint — A shortcut or a short state (“Coming soon”). Never a sentence.
- 5 — Footer — Reminds you of the keys. It disappears on phones, where there’s no physical keyboard.

A palette just for this example, with the commands of an orders app. Ctrl K still opens Lume’s.

Markup of the examples in this section:

```html
<div class="ds-command__search"><ds-icon name="search"></ds-icon><span>rep<span></span></span><kbd class="ds-kbd">Esc</kbd><span>1</span></div>

<div class="ds-command__list">
<div class="ds-command__group"><div class="ds-command__group-label">Go to<span>2</span></div>
<div class="ds-command__item" aria-selected="true"><ds-icon name="bar-chart"></ds-icon><span class="ds-command__label">Reports</span><ds-icon name="corner-down-left"></ds-icon><span>3</span></div>
</div>
<div class="ds-command__group"><div class="ds-command__group-label">Actions</div>
<div class="ds-command__item"><ds-icon name="folder"></ds-icon><span class="ds-command__label">Archive completed orders</span></div>
<div class="ds-command__item"><ds-icon name="keyboard"></ds-icon><span class="ds-command__label">See keyboard shortcuts</span><span class="ds-command__hint">?</span><span>4</span></div>
</div>
</div>

<footer class="ds-command__footer"><span><kbd class="ds-kbd">↑</kbd><kbd class="ds-kbd">↓</kbd> navigate</span><span><kbd class="ds-kbd">↵</kbd> open</span><span><kbd class="ds-kbd">Esc</kbd> close</span><span>5</span></footer>

<button type="button" class="ds-btn ds-btn--primary" data-open-demo=""><ds-icon name="search"></ds-icon>Open the example palette</button>
```

## Registering items

Each item is an object. Pass a function in `items` and the list is read again on every open — context-dependent items show up on their own.

| Field | What it’s for |
| --- | --- |
|  `id`  | Unique. Identifies the item. |
|  `label`  | What shows and what weighs most in search. Start with the verb or the name of the place. |
|  `group`  | Group title. Items in the same group appear together. |
|  `icon`  | An icon from the library. It helps read the list at a glance. |
|  `keywords`  | Synonyms people might type (“spreadsheet” finds “Export as CSV”). They don’t show. |
|  `description`  | Also part of search. Use it for actions that need context. |
|  `hint`  | A shortcut or short state, on the right. |
|  `perform()`  | What happens on Enter or click. The palette closes first. |

```html
import { createCommandPalette } from 'https://lumeui.dev/v/0.37/lume.js';

const palette = createCommandPalette({
  placeholder: 'Search pages and actions…',
  items: () => [
    { id: 'orders', label: 'Orders', group: 'Go to', icon: 'inbox',
      keywords: ['sales'], perform: () => go('/orders') },
    { id: 'new', label: 'New order', group: 'Create', icon: 'plus',
      hint: 'N', perform: () => openNewOrder() },
    { id: 'csv', label: 'Export as CSV', group: 'Actions', icon: 'download',
      keywords: ['spreadsheet', 'excel'], perform: exportCsv },
  ],
});

// ⌘K, Ctrl K, and / already open it. For a button:
button.addEventListener('click', () => palette.open());
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## How search finds

Accent- and case-insensitive: “resume” finds “Résumé”. Every word has to appear — in the label, the group, the description, or the keywords. Then, the order: the label that starts with the text comes first.

- Reports — Go to — starts with

- starts with — The label starts with the text.
- contains — The label has the text in the middle.
- other field — Found in the group, the description, or the keywords.

Markup of the examples in this section:

```html
<label class="ds-field">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" value="rep" data-tester="" aria-label="Test the palette search" autocomplete="off" spellcheck="false">
</label>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="rep">rep</button>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="spreadsheet">spreadsheet</button>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="new cus">new cus</button>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="orders">orders</button>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="xyz">xyz</button>
```

## Filters

A row above the list it narrows: search first, then the most-used filters, and sorting at the end. What’s on shows below, with an X to remove it — and the count says how much is left.

Search first — It’s the filter everyone tries first. It filters as you type (with a short pause) and Esc clears it. — The most used in view — Two or three filters in the row. The rest go into a “More filters” button — never a second row. — Sorting isn’t filtering — Sorting sits at the end of the row and doesn’t appear in the active filters: it changes the order, not what’s left. — No results, a way out — The empty list explains why and offers “Clear filters”. Never an empty table without notice.

## State in the URL

A filter that only exists in memory is lost on reload and can’t be shared. Keep the state in the URL — only what differs from the default.

- Use `replaceState`: the Back button shouldn’t undo letter by letter.
- Whoever gets the link sees the same list — including the sorting.
- A value that doesn’t exist (a deleted status) is ignored; it doesn’t break the page.

```html
import { filtersToQuery, filtersFromQuery } from 'https://lumeui.dev/v/0.37/lume.js';

// on filtering: replace the URL without stacking one entry per typed letter
history.replaceState(null, '', '?' + filtersToQuery(filters.state, config));

// on opening the page (or a shared link): restore
filters.set(filtersFromQuery(location.search, config));
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-url="" aria-label="Copy link" data-ds-tooltip="Copy link"><ds-icon name="link"></ds-icon></button>

<button type="button" class="ds-chip ds-chip--sm" data-restore="?status=pendente&amp;canal=app"><code>?status=pendente&amp;canal=app</code></button>

<button type="button" class="ds-chip ds-chip--sm" data-restore="?q=souza"><code>?q=souza</code></button>

<button type="button" class="ds-chip ds-chip--sm" data-restore="?desconto=1&amp;ordem=maior"><code>?desconto=1&amp;ordem=maior</code></button>

<button type="button" class="ds-chip ds-chip--sm" data-restore="?"><code>no filters</code></button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Keyboard shortcuts

A shortcut is one more path, never the only one. Show it where the action appears — in the tooltip, the menu, the palette — and frequent users learn it on their own.

| Keys | In Lume |
| --- | --- |
| Ctrl K | Open or close search |
| / | Open search (outside fields) |
| Ctrl B | Collapse the sidebar or open the drawer |
| ↑ ↓ | Move through lists, menus, and the palette |
| ↵ | Open the active item |
| Esc | Close search, menu, drawer, or clear the filter search |

Where to show it

Ctrl on Mac, Ctrl elsewhere

Write the modifier for the person’s system. Each key is a separate kbd .

Single keys, outside fields — “/” or “N” don’t fire while someone is typing. With a modifier, they work anywhere.

Don’t fight the browser — No Ctrl T, Ctrl W, Ctrl L, or Ctrl R: they belong to the browser and the system.

Tell assistive technology

Use `aria-keyshortcuts` on the control the shortcut triggers.

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="New order" data-ds-tooltip="New order" data-ds-tooltip-kbd="N" aria-keyshortcuts="N"><ds-icon name="plus"></ds-icon></button>

<button type="button" class="ds-chip" data-shortcut-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-222">Order<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<kbd class="ds-kbd">Ctrl</kbd>

<kbd class="ds-kbd">K</kbd>
```

## Accessibility

Search is the fastest way to navigate with keyboard and screen reader — as long as each piece says what it is.

- The palette is a dialog with a combobox — ↑ ↓ ↵ — The field is a `combobox` tied to the list (`listbox`); the active item is announced through `aria-activedescendant` without taking focus from the field.
- Focus that returns — Esc — On closing the palette, focus returns to whatever opened it. On running an item, it goes wherever the action leads.
- Filters in a search region — The bar has a named `role="search"`; each filter is a menu button, with label and value in its text.
- Announced count — The “8 of 24 orders” sits in an `aria-live="polite"` region: the reader speaks the result after each change, without interrupting.
- Named removal — Each active filter’s X says what it removes (“Remove filter Status: Paid”). After removing, focus moves to the next one — or to search.
- An explained empty list — With no results, the table gives way to a message with the reason and a button to clear.

## Code

The palette and the filters are independent modules; both only ask for data and a function for each action.

### Filters

```html
import { createFilters } from 'https://lumeui.dev/v/0.37/lume.js';

const filters = createFilters(document.querySelector('#filters'), {
  label: 'Filter orders',
  search: { placeholder: 'Search by customer or number' },
  fields: [
    { id: 'status', label: 'Status', options: [{ value: 'pago', label: 'Paid' }, …] },
    { id: 'canal', label: 'Channel', options: [{ value: 'app', label: 'App' }, …] },
  ],
  toggles: [{ id: 'desconto', label: 'Discounted' }],
  sort: { id: 'ordem', label: 'Sort', options: [...], value: 'recentes' },
  noun: ['order', 'orders'],
  onChange(state) {
    const rows = search(state);            // { q, status, canal, desconto, ordem }
    render(rows);
    filters.setCount(rows.length, total);  // "8 of 24 orders", announced to the screen reader
  },
});

filters.clear();                           // clears everything except sorting
```

| API | What it does |
| --- | --- |
|  `createFilters(el, config)`  | Builds the bar (search, filters, toggles, sorting, active filters, count) and returns the controller. |
|  `filters.state · set(parcial) · clear()`  | Reads and changes the state; each change calls `onChange`. |
|  `filters.setCount(mostrados, total)`  | Updates the announced count. |
|  `filtersToQuery · filtersFromQuery`  | State ⇄ URL, ignoring what’s default or doesn’t exist. |
|  `.ds-filters and parts`  | The classes also work for a hand-built bar (see the comment in filters.css). |

### Palette

| Option | What it does |
| --- | --- |
|  `items`  | List of items — or a function that returns the list on every open. |
|  `placeholder · label`  | Field text and the dialog’s name for screen readers. |
|  `hotkeys: false`  | Doesn’t bind ⌘K or /. For extra palettes, like this page’s example. |
|  `open() · close() · isOpen() · destroy()`  | Manual control; destroy() removes the dialog and the shortcuts. |
|  `filterCommands(items, busca)`  | The same search as the palette, for tests or other lists. |

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

Finding should be faster than remembering where things are.

- **Do:** everything via the palette too. Every page and every frequent action goes into the palette, with synonyms. Whoever knows the shortcut never has to hunt for a menu.
- **Avoid:** scattered filters. A filter inside each card or column confuses what applies to what. A single row, above everything it narrows.
- **Tip:** Labels in the person’s words. “Export as CSV” with the keyword “spreadsheet”. Think about what someone would type, not the function’s internal name.
