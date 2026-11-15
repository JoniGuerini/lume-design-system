# Chip

Lume section: Components. Page: https://lumeui.dev/#/componentes/chip

An outlined pill to filter, choose, and show selections. Lighter than a button, made to appear in groups.

In numbers: types: 3 · sizes: 2 · states: 5 · height (md / sm): 36/32.

## Example

```html
<button type="button" class="ds-chip" aria-pressed="true">
  <span class="ds-chip__check"><ds-icon name="check" size="14"></ds-icon></span>
  Dark
</button>
```

## Types

The same look, three different jobs. They all work here.

Filter `aria-pressed` — Turns a criterion on and off. Several can be on at the same time.

Sorted by: Recent

Picker `aria-haspopup="menu"` — Shows the current choice and opens a menu to change it.

Removable `ds-chip--removable` — Shows something the person added — and lets them remove it.

Markup of the examples in this section:

```html
<div class="ds-chip-group" role="group" aria-label="Platforms" data-filter-demo="">
<button type="button" class="ds-chip" aria-pressed="true"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Web</button><button type="button" class="ds-chip" aria-pressed="false"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>iOS</button><button type="button" class="ds-chip" aria-pressed="false"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Android</button>
</div>

<button data-sort-chip="" type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-26"><span class="ds-chip__icon"><ds-icon name="filter"></ds-icon></span>Recent<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<div class="ds-chip-group" role="list" aria-label="Tags" data-tags=""><span role="listitem"><span class="ds-chip ds-chip--removable">Design<button type="button" class="ds-chip__remove" aria-label="Remove Design"><ds-icon name="x"></ds-icon></button></span></span><span role="listitem"><span class="ds-chip ds-chip--removable">Tokens<button type="button" class="ds-chip__remove" aria-label="Remove Tokens"><ds-icon name="x"></ds-icon></button></span></span><span role="listitem"><span class="ds-chip ds-chip--removable">Accessibility<button type="button" class="ds-chip__remove" aria-label="Remove Accessibility"><ds-icon name="x"></ds-icon></button></span></span><span role="listitem"><span class="ds-chip ds-chip--removable">Motion<button type="button" class="ds-chip__remove" aria-label="Remove Motion"><ds-icon name="x"></ds-icon></button></span></span></div>
```

## Grouped filters

Filters combine: turn on more than one. None on is the same as all.

Showing 6 of 6

- Button — Done
- Chip — Done
- Menu — In review
- Text field — In review
- Table — In progress
- Modal — Planned

Markup of the examples in this section:

```html
<div class="ds-chip-group" role="group" aria-label="Filter by status" data-status-filter="">
<button type="button" class="ds-chip ds-chip--sm" aria-pressed="false" data-status="ready"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Done</button><button type="button" class="ds-chip ds-chip--sm" aria-pressed="false" data-status="review"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>In review</button><button type="button" class="ds-chip ds-chip--sm" aria-pressed="false" data-status="progress"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>In progress</button><button type="button" class="ds-chip ds-chip--sm" aria-pressed="false" data-status="planned"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Planned</button>
</div>

<button type="button" class="ds-inline-action" data-status-clear="" hidden=""><ds-icon name="x"></ds-icon>Clear filters</button>
```

## Sizes

Medium goes with buttons and fields; small goes in filter bars and inside cards.

Medium `default` — Height 36 px · text label-sm · 13 px · padding 16 px, 12 px on the icon or arrow side

Small `ds-chip--sm` — Height 32 px · text caption · 12 px · padding 12 px, 8 px on the icon or arrow side

Markup of the examples in this section:

```html
<button type="button" class="ds-chip" aria-pressed="true"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Filter</button>

<button type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="false"><span class="ds-chip__icon"><ds-icon name="filter"></ds-icon></span>Picker<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<span class="ds-chip ds-chip--removable">Tag<button type="button" class="ds-chip__remove" aria-label="Remove Tag"><ds-icon name="x"></ds-icon></button></span>

<button type="button" class="ds-chip ds-chip--sm" aria-pressed="true"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Filter</button>

<button type="button" class="ds-chip ds-chip--sm" aria-haspopup="menu" aria-expanded="false"><span class="ds-chip__icon"><ds-icon name="filter"></ds-icon></span>Picker<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<span class="ds-chip ds-chip--sm ds-chip--removable">Tag<button type="button" class="ds-chip__remove" aria-label="Remove Tag"><ds-icon name="x"></ds-icon></button></span>
```

## States

Selected gets a background and a stronger outline — and, in the filter, a check mark, so it doesn’t rely on color alone. Force a state with `data-state`.

Markup of the examples in this section:

```html
<button type="button" class="ds-chip" aria-pressed="false"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Web</button>

<button type="button" class="ds-chip" aria-pressed="true"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Web</button>

<button type="button" class="ds-chip" aria-pressed="false" disabled=""><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Web</button>

<button type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="false">Recent<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="true">Recent<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="false" disabled="">Recent<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<span class="ds-chip ds-chip--removable">Web<button type="button" class="ds-chip__remove" aria-label="Remove Web"><ds-icon name="x"></ds-icon></button></span>

<span class="ds-chip ds-chip--removable" aria-disabled="true">Web<button type="button" class="ds-chip__remove" aria-label="Remove Web"><ds-icon name="x"></ds-icon></button></span>
```

## Accessibility

Each type has its own semantics. The look is the same; what the screen reader hears isn’t.

- A filter is a toggle button — Enter Space — `<button aria-pressed>`: the reader announces “Web, toggle button, pressed”.
- A picker opens a menu — ↓ Esc — `aria-haspopup="menu"` and `aria-expanded` — `createMenu` handles both, plus the arrow keys.
- Remove has a name — The remove button says what it removes (“Remove Tokens”). Afterwards, focus moves to the neighboring tag.
- A named group — Wrap the chips in `role="group"` with an `aria-label` (“Filter by status”).
- Not just color — An active filter shows a check, not just a background. The filter result is announced in a live region.
- A comfortable target — 36 px for medium; small (32 px) should sit in bars with space between the chips.

## Tokens used

Everything the chip consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.border.control (`--ds-color-border-control`) | Outline | #3E516633 | #FFFFFF21 |
| color.border.strong (`--ds-color-border-strong`) | Outline on hover and when selected | #3E51664D | #FFFFFF29 |
| color.bg.hover (`--ds-color-bg-hover`) | Hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Selected and open | #3E516612 | #C0CAD61A |
| color.fg.default (`--ds-color-fg-default`) | Label | #2B3847 | #F3EDE5 |
| color.fg.brand (`--ds-color-fg-brand`) | Left icon | #3E5166 | #DAE0E8 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Chevron and remove button | #53657A | #9C9792 |
| text.label-sm (`--ds-text-label-sm`) | Label (medium) | 13/18 · medium | 13/18 · medium |
| text.caption (`--ds-text-caption`) | Label (small) | 12/16 · regular | 12/16 · regular |
| radius.full (`--ds-radius-full`) | Pill shape | 9999 px | 9999 px |
| duration.fast (`--ds-duration-fast`) | Transition | 120ms | 120ms |
| opacity.disabled (`--ds-opacity-disabled`) | Disabled | 0.44 | 0.44 |

## Usage

Three rules for chips that help instead of decorate.

- **Do:** chips for quick choices. Filters, sorting, tags — things that change the view, not things that run something.
- **Avoid:** a chip as an action button. “Publish”, “Delete”, “Send” are actions: use a button.
- **Tip:** Up to six per group. With more options than that, switch to a picker that opens a menu — it fits on one line and reads better.
