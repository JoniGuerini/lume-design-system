# Select

Lume section: Components. Page: https://lumeui.dev/#/componentes/selecao

For choosing one or several options from a list. The list is Lume’s own — the same look as menus, with search when it grows — but the value lives in a real `<select>` that goes along with the form.

In numbers: types: 3 · sizes: 3 · ARIA pattern: combobox · without JS: native.

## Example

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="language">Language</label>
  <select id="language" name="language" data-ds-select data-icon="globe">
    <option selected>Português (Brasil)</option>
    <option>English (US)</option>
    <option>Español</option>
  </select>
</div>

<script type="module">
  import { mountSelects } from 'https://lumeui.dev/v/0.26/lume.js';
  mountSelects(document);
</script>
```

## Which to use

Three kinds of select for forms, and the chip with a menu for filters. The lists look the same; what changes is what happens on choosing.

Select `select[data-ds-select]` — In the form. The value goes along on save.

Visits

12,480 — visits

Chip with menu `ds-chip + createMenu` — In the filter. Changes the screen right away.

|  | Single | Searchable | Multiple | Filter chip |
| --- | --- | --- | --- | --- |
| When | One choice in a form, few options. | One choice in a long list: country, city, person. | Several choices: tags, assignees, categories. | A quick filter that changes the screen right away. |
| Options | 5 to ~15 | 15 to hundreds | From few to hundreds (with search) | Up to ~7 |
| Effect | Applies on submit | Applies on submit | Applies on submit | Immediate |
| Value | A real `<select>` | A real `<select>` | A real `<select multiple>` | Screen state |
| Attributes | `data-ds-select` | + `data-search` | + `multiple` | ds-chip + createMenu |

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-form-tz-label">Time zone</label>
<div class="ds-select"><select id="sl-form-tz" name="fuso" data-ds-select="" data-icon="globe" aria-describedby="sl-form-tz-hint" class="ds-select__native" data-enhanced="" aria-hidden="true"><optgroup label="Brazil"><option selected="">Brasília (UTC−3)</option><option>Manaus (UTC−4)</option><option>Fernando de Noronha (UTC−2)</option><option disabled="">Rio Branco (UTC−5) — coming soon</option></optgroup><optgroup label="Europe"><option>Lisbon (UTC+0)</option><option>Madrid (UTC+1)</option><option>Berlin (UTC+1)</option></optgroup><optgroup label="North America"><option>New York (UTC−5)</option><option>Mexico City (UTC−6)</option></optgroup></select><button type="button" class="ds-select__trigger" id="sl-form-tz-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-form-tz-listbox" aria-labelledby="sl-form-tz-label" aria-describedby="sl-form-tz-hint"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Brasília (UTC−3)</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="sl-form-tz-hint">Used in reminders and reports.</p></div>
</div>

<button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">Save</button>

<button type="button" class="ds-chip" data-period="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-47"><span class="ds-chip__icon"><ds-icon name="calendar"></ds-icon></span><span data-label="">Last 30 days</span><span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>
```

## Searchable

With `data-search`, the list gets a field at the top and focus goes straight to it. It filters ignoring accents and case — group names included.

- Filters as you type and highlights the match, without changing the text the screen reader reads.
- ↑ ↓ move only through the visible ones; Enter picks and closes.
- Esc clears the search; with the search empty, it closes.
- Nothing found? The list says “Nothing found for …” in place of the options.

```html
<select id="country" name="country" data-ds-select data-search
        data-search-placeholder="Search country or continent">
  <optgroup label="South America">
    <option>Argentina</option>
    <option selected>Brazil</option>
  </optgroup>
  …
</select>
```

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-search-person-label">Assignee</label>
<div class="ds-select"><select id="sl-search-person" name="responsavel" data-ds-select="" data-icon="users" data-search="" data-search-placeholder="Search person" aria-describedby="sl-search-person-hint" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Ana Souza</option><option>Bruno Lima</option><option>Carla Dias</option><option>Diego Ramos</option><option>Elisa Prado</option><option>Fábio Nunes</option><option>Gabriela Rocha</option><option>Heitor Melo</option><option>Isabela Torres</option><option>João Pedro Alves</option><option>Lívia Castro</option><option>Marcos Vieira</option></select><button type="button" class="ds-select__trigger" id="sl-search-person-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-search-person-listbox" aria-labelledby="sl-search-person-label" aria-describedby="sl-search-person-hint"><ds-icon name="users"></ds-icon><span class="ds-select__value">Ana Souza</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="sl-search-person-hint">Type with the list closed: the search starts with that letter.</p></div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Multiple choice

With `multiple`, each option gets a checkbox and the list doesn’t close on choosing. The chosen ones become chips in the field — up to two lines, then “+N”.

Main case: tags

`multiple data-search data-max="5" data-footer`

No search, with chips

`multiple`

A count instead of chips

`multiple data-display="count" data-footer`

- Click, Space, or Enter toggle without closing. In the search, Space types — use Enter.
- Remove one: the chip’s ×, unchecking in the list, or Backspace. All: the field’s × or “Clear”.
- Select all respects the current search and the limit.
- With a limit, the rest is disabled and the list explains why.

```html
<select id="tags" name="tags" multiple data-ds-select
        data-search data-max="5" data-footer
        data-placeholder="Add tags">
  <optgroup label="Design">
    <option selected>Component</option>
    <option selected>Token</option>
  </optgroup>
  …
</select>

<!-- the chosen ones arrive as a list -->
<script>
  new FormData(form).getAll('tags'); // ['Component', 'Token']
</script>
```

Markup of the examples in this section:

```html
<button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">Save</button>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-categories-label">Categories</label>
<div class="ds-select ds-select--multiple"><select id="sl-categories" name="categorias" data-ds-select="" multiple="" data-display="count" data-footer="" data-placeholder="All categories" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Food</option><option selected="">Transport</option><option selected="">Housing</option><option>Health</option><option>Education</option><option>Leisure</option><option>Subscriptions</option><option>Travel</option><option>Pets</option><option>Gifts</option></select><div class="ds-select__trigger ds-select__trigger--multi">
<div class="ds-select__values">
<button type="button" class="ds-select__combobox" id="sl-categories-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-categories-listbox" aria-labelledby="sl-categories-label"><span class="ds-select__summary">3 selected</span><span class="ds-visually-hidden" data-sr="">: Food, Transport, Housing</span></button>
</div>
<button type="button" class="ds-select__clear" aria-label="Clear selection"><ds-icon name="x"></ds-icon></button>
<ds-icon name="chevron-down"></ds-icon></div></div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Sizes

The same three as the text field — they line up side by side in a form. Use `data-size` on the select; in multiple, the chips follow.

Small `data-size="sm"` — 32 px minimum height.

Medium `default` — 40 px minimum height.

Large `data-size="lg"` — 48 px minimum height.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-size-sm-label">Small</label>
<div class="ds-select ds-select--sm"><select id="sl-size-sm" data-ds-select="" data-size="sm" data-icon="globe" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-size-sm-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-size-sm-listbox" aria-labelledby="sl-size-sm-label"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-size-md-label">Medium</label>
<div class="ds-select"><select id="sl-size-md" data-ds-select="" data-icon="globe" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-size-md-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-size-md-listbox" aria-labelledby="sl-size-md-label"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-size-lg-label">Large</label>
<div class="ds-select ds-select--lg"><select id="sl-size-lg" data-ds-select="" data-size="lg" data-icon="globe" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-size-lg-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-size-lg-listbox" aria-labelledby="sl-size-lg-label"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>
```

## States

The same as the text field’s, in single and multiple. To document and test, force hover or focus with `data-ds-state` on the select.

Default — A quiet outline and a chevron on the right.

Hover — The outline gets stronger.

Focus or open — An outline in the focus color, a soft halo, and the chevron rotates.

No choice — The empty text shows faded, like a placeholder.

Disabled — Reduced opacity and out of the focus order.

Invalid — A danger outline and message.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-default-label">Language</label>
<div class="ds-select"><select id="sl-state-default" data-ds-select="" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-default-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-default-listbox" aria-labelledby="sl-state-default-label"><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-hover-label">Language</label>
<div class="ds-select"><select id="sl-state-hover" data-ds-select="" data-ds-state="hover" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-hover-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-hover-listbox" aria-labelledby="sl-state-hover-label"><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-focus-label">Language</label>
<div class="ds-select"><select id="sl-state-focus" data-ds-select="" data-ds-state="focus" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-focus-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-focus-listbox" aria-labelledby="sl-state-focus-label"><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-placeholder-label">Language</label>
<div class="ds-select"><select id="sl-state-placeholder" data-ds-select="" class="ds-select__native" data-enhanced="" aria-hidden="true"><option value="" selected="">Choose a language</option><option>Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-placeholder-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-placeholder-listbox" aria-labelledby="sl-state-placeholder-label"><span class="ds-select__value" data-placeholder="">Choose a language</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-multi-placeholder-label">Languages</label>
<div class="ds-select ds-select--multiple"><select id="sl-state-multi-placeholder" data-ds-select="" multiple="" data-placeholder="Choose languages" class="ds-select__native" data-enhanced="" aria-hidden="true"><option>Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option></select><div class="ds-select__trigger ds-select__trigger--multi">
<div class="ds-select__values">
<ul class="ds-select__chips" role="list"></ul>
<button type="button" class="ds-select__combobox" id="sl-state-multi-placeholder-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-multi-placeholder-listbox" aria-labelledby="sl-state-multi-placeholder-label"><span class="ds-select__summary" data-placeholder="">Choose languages</span><span class="ds-visually-hidden" data-sr=""></span></button>
</div>
<button type="button" class="ds-select__clear" aria-label="Clear selection" hidden=""><ds-icon name="x"></ds-icon></button>
<ds-icon name="chevron-down"></ds-icon></div></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-disabled-label">Language</label>
<div class="ds-select"><select id="sl-state-disabled" data-ds-select="" disabled="" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-disabled-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-disabled-listbox" aria-labelledby="sl-state-disabled-label" disabled="" data-disabled=""><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-invalid-label">Language</label>
<div class="ds-select"><select id="sl-state-invalid" data-ds-select="" aria-invalid="true" aria-describedby="sl-state-invalid-error" class="ds-select__native" data-enhanced="" aria-hidden="true"><option value="" selected="">Choose a language</option><option>Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-invalid-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-invalid-listbox" aria-labelledby="sl-state-invalid-label" aria-invalid="true" aria-describedby="sl-state-invalid-error" data-invalid=""><span class="ds-select__value" data-placeholder="">Choose a language</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__error" id="sl-state-invalid-error"><ds-icon name="alert-circle"></ds-icon><span>Choose at least one option to continue.</span></p></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-multi-invalid-label">Languages</label>
<div class="ds-select ds-select--multiple"><select id="sl-state-multi-invalid" data-ds-select="" multiple="" data-placeholder="Choose languages" aria-invalid="true" aria-describedby="sl-state-multi-invalid-error" class="ds-select__native" data-enhanced="" aria-hidden="true"><option>Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option></select><div class="ds-select__trigger ds-select__trigger--multi" data-invalid="">
<div class="ds-select__values">
<ul class="ds-select__chips" role="list"></ul>
<button type="button" class="ds-select__combobox" id="sl-state-multi-invalid-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-multi-invalid-listbox" aria-labelledby="sl-state-multi-invalid-label" aria-invalid="true" aria-describedby="sl-state-multi-invalid-error"><span class="ds-select__summary" data-placeholder="">Choose languages</span><span class="ds-visually-hidden" data-sr=""></span></button>
</div>
<button type="button" class="ds-select__clear" aria-label="Clear selection" hidden=""><ds-icon name="x"></ds-icon></button>
<ds-icon name="chevron-down"></ds-icon></div></div>
<div class="ds-form-field__footer"><p class="ds-form-field__error" id="sl-state-multi-invalid-error"><ds-icon name="alert-circle"></ds-icon><span>Choose at least one option to continue.</span></p></div>
</div>
```

## Groups and disabled

`<optgroup>` becomes a group label in the list; `<option disabled>` shows, but the keyboard and clicks skip it.

```html
<select id="timezone" data-ds-select data-icon="globe">
  <optgroup label="Brazil">
    <option selected>Brasília (UTC−3)</option>
    <option disabled>Rio Branco (UTC−5) — coming soon</option>
  </optgroup>
  <optgroup label="Europe">
    <option>Lisbon (UTC+0)</option>
  </optgroup>
</select>
```

Without JavaScript, the same `<select>` shows as the system’s native list, already with the field’s basic look. Nothing is lost.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-groups-tz-label">Time zone</label>
<div class="ds-select"><select id="sl-groups-tz" data-ds-select="" data-icon="globe" aria-describedby="sl-groups-tz-hint" class="ds-select__native" data-enhanced="" aria-hidden="true"><optgroup label="Brazil"><option selected="">Brasília (UTC−3)</option><option>Manaus (UTC−4)</option><option>Fernando de Noronha (UTC−2)</option><option disabled="">Rio Branco (UTC−5) — coming soon</option></optgroup><optgroup label="Europe"><option>Lisbon (UTC+0)</option><option>Madrid (UTC+1)</option><option>Berlin (UTC+1)</option></optgroup><optgroup label="North America"><option>New York (UTC−5)</option><option>Mexico City (UTC−6)</option></optgroup></select><button type="button" class="ds-select__trigger" id="sl-groups-tz-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-groups-tz-listbox" aria-labelledby="sl-groups-tz-label" aria-describedby="sl-groups-tz-hint"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Brasília (UTC−3)</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="sl-groups-tz-hint">Rio Branco isn’t available yet.</p></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-groups-off-label">Plan</label>
<div class="ds-select"><select id="sl-groups-off" data-ds-select="" disabled="" aria-describedby="sl-groups-off-hint" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Team (set by the admin)</option></select><button type="button" class="ds-select__trigger" id="sl-groups-off-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-groups-off-listbox" aria-labelledby="sl-groups-off-label" aria-describedby="sl-groups-off-hint" disabled="" data-disabled=""><span class="ds-select__value">Team (set by the admin)</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="sl-groups-off-hint">Only account admins can change it.</p></div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Keyboard and accessibility

It follows the WAI-ARIA combobox pattern. The active option is announced through `aria-activedescendant`, on the trigger or the search field.

### All types

| Key | Closed | Open |
| --- | --- | --- |
| Enter Space | Opens the list | Single: picks and closes · Multiple: checks or unchecks |
| ↓ ↑ | Opens on the chosen option | Moves through the visible options (skips disabled ones) |
| Home End | Opens on the first or last | Goes to the first or last (without search) |
| Page ↓ Page ↑ | — | Jumps 10 options |
| Esc | — | Closes without changing anything |
| Tab | Moves to the next field | Single without search: picks the active one and moves on · Others: closes and moves on |

### Without search

| Key | Closed | Open |
| --- | --- | --- |
| A–Z | Opens on the first one starting with the letter | Jumps to the next one with that letter |

### With search

| Key | Closed | Open |
| --- | --- | --- |
| A–Z | Opens the list and starts the search with the letter | Filters the list |
| Space | Opens the list | Types a space in the search |
| Esc | — | Clears the search; when empty, closes |

### Multiple

| Key | Closed | Open |
| --- | --- | --- |
| Backspace | Removes the last chosen | In the empty search, removes the last chosen |
| Ctrl A | — | Checks all visible ones (without search), respecting the limit |

- The right roles — A trigger with `role="combobox"`, `aria-haspopup="listbox"`, and `aria-expanded`; a `role="listbox"` list; options with `aria-selected`.
- Search is the combobox — With search, the top field has `role="combobox"` and `aria-autocomplete="list"`; the match highlight doesn’t change the text read.
- Announced multiple — The list has `aria-multiselectable="true"`; the trigger reads “3 selected: …” and each chip has a “Remove X” button.
- One value, in the right place — The real select is hidden from reading and focus, but it keeps the value and fires `change` — your code doesn’t change.
- Native validation — `required` works in all three types: with no choice, the trigger gets focus and becomes invalid.
- An explained limit — With `data-max`, the remaining options are disabled and the list shows why.

## Tokens used

The trigger uses the text field’s tokens; the list, the menu’s; the chips, the small chip’s.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Height (medium) | 40 px | 40 px |
| radius.md (`--ds-radius-md`) | Trigger radius | 12 px | 12 px |
| text.body-sm (`--ds-text-body-sm`) | Chosen value | 14/22 · regular | 14/22 · regular |
| color.border.control (`--ds-color-border-control`) | Trigger outline | #3E516633 | #FFFFFF21 |
| color.border.strong (`--ds-color-border-strong`) | Hover and list border | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Focus and open list | #53657A | #C0CAD6 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Chevron, icon, placeholder, group, and empty box | #5C6C7F | #9C9792 |
| color.bg.raised (`--ds-color-bg-raised`) | List background | #FFFFFF | #2C2A27 |
| radius.lg (`--ds-radius-lg`) | List radius | 16 px | 16 px |
| shadow.xl (`--ds-shadow-xl`) | List shadow | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| color.bg.hover (`--ds-color-bg-hover`) | Active option and limit notice | #3E51660D | #FFFFFF0D |
| color.fg.brand (`--ds-color-fg-brand`) | Chosen mark and found match | #3E5166 | #DAE0E8 |
| color.brand.solid (`--ds-color-brand-solid`) | Checked box (multiple) | #3E5166 | #C0CAD6 |
| color.bg.selected (`--ds-color-bg-selected`) | Chosen chips | #3E516612 | #C0CAD61A |
| color.danger.solid (`--ds-color-danger-solid`) | Invalid outline | #C13834 | #FF9087 |
| duration.base (`--ds-duration-base`) | Chevron and list entrance | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Entrance curve | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| opacity.disabled (`--ds-opacity-disabled`) | Disabled and over the limit | 0.44 | 0.44 |

## Usage

Pick the type by the size of the list and the number of choices.

- **Do:** a long list with search. Above ~15 options, turn on search. Group when there’s a natural division (continent, area).
- **Avoid:** multiple with few options. With up to 5 options, checkboxes show everything at once and take one click less.
- **Tip:** A limit? Say what it is. Put the limit in the hint (“up to 5”) — the list also warns when it’s reached.
