# Icons

Lume section: Foundations. Page: https://lumeui.dev/#/fundamentos/icones

A custom library, drawn on the same grid with the same stroke. Thin outlines, round caps, and color inherited from the text.

In numbers: icons: 154 · categories: 8 · grid: 24 px · stroke: 1.5.

## Library

Search by name or by words in English, Portuguese, or Spanish. Click an icon to copy its code.

- home
- menu
- panel-left
- panel-top
- chevron-down
- chevron-up
- chevron-left
- chevron-right
- chevrons-up-down
- arrow-right
- arrow-left
- arrow-up
- arrow-up-right
- arrow-down
- external-link
- corner-down-left
- log-out
- compass
- zoom-in
- zoom-out
- maximize
- search
- search-x
- send
- paperclip
- stop-circle
- thumbs-up
- thumbs-down
- at-sign
- plus
- minus
- x
- check
- pencil
- copy
- trash
- download
- upload
- link
- filter
- refresh
- more-horizontal
- more-vertical
- grip-vertical
- zap
- play
- pause
- megaphone
- slash
- mic
- video
- info
- alert-circle
- alert-triangle
- check-circle
- x-circle
- help-circle
- bell
- loader
- clock
- history
- shield
- lock
- wifi-off
- star
- heart
- flag
- settings
- sliders
- sun
- moon
- cabin
- mountain
- monitor
- scrollbar
- eye
- eye-off
- keyboard
- command
- app-shell
- layout
- button
- input
- check-square
- radio
- toggle
- tag
- card
- dialog
- tabs
- carousel
- resizable
- kanban
- tooltip
- table
- list
- bold
- italic
- underline
- strikethrough
- align-left
- align-center
- align-right
- list-ordered
- heading
- quote
- undo
- redo
- divider
- progress-ring
- banner
- toolbar
- message-square
- stack
- calendar
- file-text
- folder
- inbox
- image
- package
- book-open
- code
- terminal
- git-branch
- git-pull-request
- mail
- globe
- target
- hash
- dashboard
- bar-chart
- line-chart
- area-chart
- donut
- heatmap
- scatter
- gauge
- trending-up
- trending-down
- palette
- droplet
- type
- shapes
- grid
- layers
- component
- spacing
- radius
- elevation
- motion
- accessibility
- user
- user-circle
- users

Markup of the examples in this section:

```html
<label class="ds-field">
<ds-icon name="search"></ds-icon>
<span class="ds-visually-hidden">Search icons</span>
<input class="ds-field__input" type="search" placeholder="Search: house, arrow, calendar…" autocomplete="off" spellcheck="false" data-search="">
</label>

<button type="button" class="ds-chip" data-menu="size" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-10"><span class="ds-chip__icon"><ds-icon name="spacing"></ds-icon></span><span data-label="">24 px</span><span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="all" aria-pressed="true">All<span>154</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="navegacao" aria-pressed="false">Navigation<span>18</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="acoes" aria-pressed="false">Actions<span>35</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="status" aria-pressed="false">Status and feedback<span>17</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="interface" aria-pressed="false">Interface<span>44</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="objetos" aria-pressed="false">Objects<span>15</span></button>
```

## Anatomy

The same rules for every icon. That’s what makes the library feel like one family.

- 01 — 24 × 24 grid — Every icon is drawn on the same artboard, so it lines up at any size.
- 02 — 2 px padding — The live area is 20 × 20. The free edge gives optical balance between different shapes.
- 03 — Keylines — Circle, square, and rectangles guide visual weight: a circle and a square look the same size.
- 04 — 1.5 stroke — A 1.5 px outline; at 16 px or less it goes up to 1.75 so it doesn’t fade away.
- 05 — Round caps — Rounded caps and joins, in line with the system’s generous radii.
- 06 — currentColor — The icon inherits the color of the surrounding text — it changes with the theme and the state.

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="home" aria-pressed="true" aria-label="View home" data-ds-tooltip="home" data-ds-tooltip-placement="bottom"><ds-icon name="home"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="settings" aria-pressed="false" aria-label="View settings" data-ds-tooltip="settings" data-ds-tooltip-placement="bottom"><ds-icon name="settings"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="palette" aria-pressed="false" aria-label="View palette" data-ds-tooltip="palette" data-ds-tooltip-placement="bottom"><ds-icon name="palette"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="bell" aria-pressed="false" aria-label="View bell" data-ds-tooltip="bell" data-ds-tooltip-placement="bottom"><ds-icon name="bell"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="calendar" aria-pressed="false" aria-label="View calendar" data-ds-tooltip="calendar" data-ds-tooltip-placement="bottom"><ds-icon name="calendar"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="user" aria-pressed="false" aria-label="View user" data-ds-tooltip="user" data-ds-tooltip-placement="bottom"><ds-icon name="user"></ds-icon></button>
```

## Sizes

Five sizes, all tokens. Below 16 px the stroke thickens on its own to stay legible.

The icon follows the component’s size: 14 in the badge, 16 in the chip, 20 in the default button, 24 in the large button.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<svg class="ds-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<svg class="ds-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<span class="ds-badge ds-badge--success"><ds-icon name="check"></ds-icon>Published</span>

<span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="pencil"></ds-icon></span>Direct tone</span>

<span class="ds-btn ds-btn--secondary"><ds-icon name="download"></ds-icon>Export</span>
```

## In code

Two ways to use them: the `icon()` function in JavaScript or the `<ds-icon>` element right in the HTML.

JavaScript

```html
import { icon } from 'https://lumeui.dev/v/1.9/lume.js';

button.innerHTML = icon('home', { size: 20 });
// with a label for screen readers
icon('bell', { size: 20, label: 'Notifications' });
```

HTML

```html
<ds-icon name="home"></ds-icon>
<ds-icon name="home" size="16"></ds-icon>
<!-- icon on its own, with meaning -->
<ds-icon name="home" size="20" label="Home"></ds-icon>
```

Decorative, next to text

Without `label`: the SVG gets `aria-hidden="true"` and the screen reader reads only the text.

On its own, with meaning

With `label`: it becomes `role="img"` with an accessible name. In icon-only buttons, prefer `aria-label` on the button.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="4.5" r="1.5"></circle><path d="M5 8.5l7 1.5 7-1.5M12 10v4.5M9.5 20.5l2.5-6 2.5 6"></path></svg>
```

## Usage

An icon helps recognition; it doesn’t replace the word.

- **Do:** icon with text. In navigation and buttons, the label says what happens; the icon helps people find it faster.
- **Avoid:** mixing styles. Filled icons, icons from another library, or with another stroke break the family. If one is missing, draw it on the grid.
- **Tip:** Icon on its own? Name and hint. Icon-only buttons need an aria-label and a tooltip with the same text.
