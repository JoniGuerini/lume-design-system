# Navbar

Lume section: Components. Page: https://lumeui.dev/#/componentes/navbar

The same navigation as the sidebar, lying across the top: direct links, a menu per group, and search. When space runs out, search shrinks and the last items move into More.

In numbers: height: 64 px · from: 1024 px · menu: columns · no room: More.

## Live

This site’s navbar, with the real pages. Shrink the window and watch search shrink and items move into More. The menus open, and choosing a page only marks its group.

Everything fits

Markup of the examples in this section:

```html
<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sh-navbar-width">Window width</label>
<output class="ds-slider__value" for="sh-navbar-width">1440 px</output>
</div>
<div class="ds-slider"><input class="ds-slider__input" id="sh-navbar-width" type="range" min="560" max="1600" step="10" value="1440" aria-valuetext="1440 px"></div>
</div>
```

## Anatomy

At a width where space is already short, so More shows up. Hover or focus a part in the list to highlight it.

- 1 — Panel — The same panel as the sidebar, lying across the top: 64 px tall, xl radius, and a thin outline.
- 2 — Brand — The flame and the name, as in the sidebar. It goes home.
- 3 — Main links — The items of the untitled group become direct links. Home lives on the brand.
- 4 — Group button — Each group becomes a button with a chevron. It opens a menu with the pages, in columns.
- 5 — Current group — The group of the open page stays selected, like the sidebar’s current item.
- 6 — More — Only shows up when space runs out: it holds the last items, split by group name.
- 7 — Search — Opens the command palette. With room, it’s 240 px with the shortcut; without, just the magnifier.

## When space runs out

The navbar never wraps onto two lines or cuts an item in half. It gives things up in this order.

1 — Everything fits

Links, groups, and the full search, with the shortcut.

2 — Search shrinks

First the search text goes: only the magnifier stays, the size of a button. The name is still there for screen readers.

3 — The last ones move to More

If it still doesn’t fit, items leave from the end toward the start and go into the More button, one at a time, until it fits. Nothing gets cut off or covers the search.

The math runs with `ResizeObserver` on the bar itself, not the window: it also works for a navbar inside a smaller panel.

If the current page moved into More, More is the one that stays selected.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m20 20-4.2-4.2"></path></svg>

<button type="button" class="ds-inline-action" data-try-width="full">See it in the example<ds-icon name="arrow-up"></ds-icon></button>

<button type="button" class="ds-inline-action" data-try-width="compact">See it in the example<ds-icon name="arrow-up"></ds-icon></button>

<button type="button" class="ds-inline-action" data-try-width="more">See it in the example<ds-icon name="arrow-up"></ds-icon></button>
```

## Group menus

Each group button opens a menu with that group’s pages. A long list becomes a grid, with no scrolling.

One column per section

If the items have a `section`, each section becomes a column with its name on top (`sectionColumns`).

Five per column

Without sections, the menu breaks into balanced columns of up to five items (`maxRows: 5`). ← and → jump between columns.

More, grouped

More gathers the items that left, with each group’s name as the column title.

Always on screen

Near the edge, the menu slides to fit. The button’s chevron turns while it’s open.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="2"></rect><rect x="13.5" y="4" width="6.5" height="6.5" rx="2"></rect><rect x="4" y="13.5" width="6.5" height="6.5" rx="2"></rect><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2"></rect></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><g fill="currentColor"><circle cx="6" cy="12" r="0.75"></circle><circle cx="12" cy="12" r="0.75"></circle><circle cx="18" cy="12" r="0.75"></circle></g></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M8.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v3.5M15.5 3.5H19a1.5 1.5 0 0 1 1.5 1.5v3.5M8.5 20.5H5A1.5 1.5 0 0 1 3.5 19v-3.5M15.5 20.5H19a1.5 1.5 0 0 0 1.5-1.5v-3.5"></path></svg>

<button type="button" class="ds-inline-action" data-try-menu=""><ds-icon name="chevron-down"></ds-icon>Open Components in the example<ds-icon name="arrow-up"></ds-icon></button>
```

## In the app

All of Lume, in the navbar layout. Switch to the phone: below 1024 px the navbar goes away and the top bar’s menu button opens the same drawer as the sidebar.

Loading the app…

Navbar · Desktop 1280 × 800

Markup of the examples in this section:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Screen size" data-segmented="device">
<button type="button" class="ds-segmented__item" role="radio" data-value="desktop" aria-checked="true">Desktop</button><button type="button" class="ds-segmented__item" role="radio" data-value="tablet" aria-checked="false">Tablet</button><button type="button" class="ds-segmented__item" role="radio" data-value="phone" aria-checked="false">Phone</button>
</div>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-demo-toggle="" disabled=""><ds-icon name="menu"></ds-icon><span data-demo-toggle-label="">Open drawer</span></button>

<button type="button" class="ds-theme-toggle " data-demo-theme="dark" aria-pressed="false" aria-label="Example theme" data-ds-tooltip="Switch between light and dark">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-demo-reload="" aria-label="Reload the example" data-ds-tooltip="Reload the example"><ds-icon name="refresh"></ds-icon></button>
```

## Sidebar or navbar

Both lead to the same places. The difference is how many places there are and how much room the content needs.

|  | Sidebar | Navbar |
| --- | --- | --- |
| How many areas | Many: long groups, dozens of pages | Few: what fits on one row |
| Content width | Loses 288 px (76 px collapsed) | The full width, only the bar’s height is lost |
| Finding a page | Everything in view, scrolling the list | One more click: opening the group’s menu |
| News | A dot on each item | A dot on the group button |
| On phones | Drawer | The same drawer |

Both read the same groups. On this site, people choose in the top bar (desktop only) or via search; the choice is saved in `ds-layout`. First-time visitors see the sidebar.

## Keyboard

The menus follow the same keyboard as the Menu component.

| Keys | Action | Detail |
| --- | --- | --- |
| Tab | Move along the bar | Brand, links, group buttons, More, and search, in screen order. |
| Enter | Open the group’s menu | Space and ↓ open it too; focus goes to the current page or the first one. |
| ↑ ↓ | Move in the menu | Home and End go to the first and last. A letter jumps to the item that starts with it. |
| ← → | Jump between columns | In grid or sectioned menus. |
| Esc | Close the menu | And returns focus to the group button. |
| Ctrl K | Open search | Even when search is just the icon. |

## Accessibility

What the keyboard and screen readers find.

- Named navigation — Links and buttons sit in a `nav` “Main”, the same name as the sidebar’s: only one of them shows at a time.
- Buttons that open a menu — Enter — Each group is a button with `aria-haspopup` and `aria-expanded`; the menu is a list with `role="menu"`.
- Current page — The current link has `aria-current="page"`; in a menu, the current page is checked.
- Nothing really disappears — What moves into More leaves the Tab order and joins its menu. The compact search keeps its text hidden, for screen readers.
- Focus comes back — Esc — Esc or choosing a page closes the menu and returns focus to the button that opened it.

## Tokens used

The same as the sidebar’s, plus the bar’s height.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| layout.topbar (`--ds-layout-topbar`) | Bar height | 64 px | 64 px |
| layout.frame-gap (`--ds-layout-frame-gap`) | Distance from the window edge and the main panel | 10 px | 10 px |
| radius.xl (`--ds-radius-xl`) | Panel corners | 20 px | 20 px |
| color.bg.sidebar (`--ds-color-bg-sidebar`) | Panel background | #F8FAFD | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Panel outline | #3E516624 | #FFFFFF0F |
| size.control.compact (`--ds-size-control-compact`) | Height of links and group buttons | 36 px | 36 px |
| size.control.md (`--ds-size-control-md`) | Compact search | 40 px | 40 px |
| color.bg.hover (`--ds-color-bg-hover`) | Hover and open menu | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Current link and group | #3E516612 | #C0CAD61A |
| color.brand.indicator (`--ds-color-brand-indicator`) | New dot | #C97B63 | #DE9680 |

## Code

The navbar lives in `.ds-shell`, next to the sidebar, and shows with `data-layout="navbar"`. The groups are the same.

### HTML

```html
<div class="ds-shell" id="shell" data-layout="navbar">
  <div class="ds-navbar">
    <a class="ds-brand" href="#/" aria-label="Home"><img class="ds-brand__mark" src="logo.svg" alt="">Your app</a>
    <nav class="ds-navbar__nav" id="navbar-nav" aria-label="Main"></nav>
    <button class="ds-field ds-sidebar-search ds-navbar__search" data-command-open>…</button>
  </div>
  <!-- the sidebar stays on the page: on phones, it becomes the drawer -->
  <aside class="ds-sidebar" id="sidebar">…</aside>
  <div class="ds-main">…</div>
</div>
```

### JavaScript

```html
import { createShell, renderSidebarNav, renderNavbarNav } from 'https://lumeui.dev/v/1.11/lume.js';

const groups = [
  { id: 'main', items: [
    { label: 'Home', icon: 'home', href: '#/' },          // in the navbar, home lives on the brand
    { label: 'Reports', icon: 'bar-chart', href: '#/reports' },
  ] },
  { id: 'sales', label: 'Sales', items: [
    { label: 'Orders', icon: 'inbox', href: '#/orders' },
    { label: 'Customers', icon: 'users', href: '#/customers' },
  ] },
];

renderSidebarNav(document.getElementById('sidebar-nav'), groups);   // the phone drawer
const navbar = renderNavbarNav(document.getElementById('navbar-nav'), groups, {
  go: (href) => (location.hash = href),                              // what to do when picking from a menu
});
navbar.setActive(location.hash);

const shell = createShell(document.getElementById('shell'));
shell.setLayout('navbar');                                          // or “sidebar”; it’s saved
```

| API | What it does |
| --- | --- |
|  `renderNavbarNav(el, groups, { go })`  | Draws links and group buttons and wires the menus. `go(href)` runs when a page is picked; the default is `location.assign`. |
|  `navbar.setActive(href)`  | Marks the link or group of the current page (or More, if it moved there). |
|  `navbar.destroy()`  | Turns off the menus and the space measurement. |
|  `shell.setLayout('navbar' \| 'sidebar')`  | Switches the layout and saves it in `ds-layout`. `shell.layout` reads the current one. |
|  `[data-layout-option] buttons`  | Inside the shell, in a radiogroup, they become the layout picker with no code. |

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

When the navbar is the better choice.

- **Do:** few areas, wide content. Tables, boards, and dashboards that need the full width. Short group names, so more fits before More.
- **Avoid:** dozens of loose links. If the top row doesn’t fit on a regular screen, the groups are too big or too many: that’s a case for the sidebar.
- **Tip:** Most used first. More takes from the end. Put what people use most on the left, and it will be the last to go.
