# Sidebar

Lume section: Components. Page: https://lumeui.dev/#/componentes/sidebar

Navigation on the side: brand, search, everyday places, and groups that collapse. On desktop it shrinks down to just the icons; on phones it becomes a drawer.

In numbers: open: 288 px · collapsed: 76 px · drawer below: 1024 px · shortcut: Ctrl B.

## Live

It’s Lume itself, running in here. Collapse it, change the screen size, and watch the sidebar become a drawer. Nothing you do here changes your preferences.

Loading the app…

Sidebar expanded · Desktop 1280 × 800

Markup of the examples in this section:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Screen size" data-segmented="device">
<button type="button" class="ds-segmented__item" role="radio" data-value="desktop" aria-checked="true">Desktop</button><button type="button" class="ds-segmented__item" role="radio" data-value="tablet" aria-checked="false">Tablet</button><button type="button" class="ds-segmented__item" role="radio" data-value="phone" aria-checked="false">Phone</button>
</div>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-demo-toggle=""><ds-icon name="panel-left"></ds-icon><span data-demo-toggle-label="">Collapse menu</span></button>

<button type="button" class="ds-theme-toggle " data-demo-theme="dark" aria-pressed="false" aria-label="Example theme" data-ds-tooltip="Switch between light and dark">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-demo-reload="" aria-label="Reload the example" data-ds-tooltip="Reload the example"><ds-icon name="refresh"></ds-icon></button>
```

## Anatomy

This site’s own sidebar, with fewer pages. Groups open and close, and clicking an item marks the current page. Hover or focus a part in the list to highlight it.

- 1 — Panel — 288 px wide, xl radius and a thin outline. It floats over the app background, 10 px from the edge.
- 2 — Brand — The flame in the icon column and the name lined up with the labels. It goes home.
- 3 — Search — A button that looks like a field: it opens the command palette, like Ctrl K.
- 4 — Main navigation — The untitled group: larger items, always in view, for everyday places.
- 5 — New dot — Marks what changed since the last visit. Screen readers hear “New”.
- 6 — Group title — Collapses and opens the group. The state is saved for the next visit.
- 7 — Section label — Splits a long group. It comes from each item’s `section` field.
- 8 — Current item — Selected background, a thin outline, and `aria-current="page"`.
- 9 — Footer — Pinned to the foot of the panel: account, workspace, or, here, the version.

## Item

A 20 px icon, a label, and, when it applies, the dot. States can be forced with `data-state`.

## Open and collapsed

On desktop, the sidebar collapses to 76 px and lets the content breathe. The icons stay in the same column in both states, so nothing jumps during the animation.

Open — 288 px

- There’s no button in the header: the round tab on the right edge, level with the brand, collapses it.
- The tab shows with the pointer over the sidebar or with focus, and stays out of the way otherwise.
- No tooltips: the name is already written.

Collapsed — 76 px

- The flame takes the button’s place, larger (28 px). With the pointer or focus, it turns into the expand icon.
- The icons stay in their column; the labels fade out.
- Each item gets a tooltip with its name. Group titles become a thin line, and the dot moves to the icon’s corner.

The choice is saved (`ds-sidebar`) and applied before the first paint: the page doesn’t flash on open.

The width animates with `duration.slow` and `easing.emphasized`; with reduced motion, the change is immediate.

Markup of the examples in this section:

```html
<button type="button" class="ds-inline-action" data-try="collapse"><ds-icon name="panel-left"></ds-icon>Collapse in the live example<ds-icon name="arrow-up"></ds-icon></button>
```

## On phones

Below 1024 px the sidebar leaves the screen and becomes a drawer, opened by the top bar’s menu button. The navbar uses the same drawer.

- 1 — Open — The menu button (or Ctrl B) slides the drawer in and dims the background. Focus moves to the current item.
- 2 — Navigate — Choosing a page closes the drawer. The width is 288 px, but it never touches the edge: 48 px remain to tap outside.
- 3 — Close — Tap the background, the X, or press Esc. Focus returns to the menu button.

The drawer has no collapsed mode: it always opens in full, with the labels.

Markup of the examples in this section:

```html
<button type="button" class="ds-btn ds-btn--secondary" data-try="phone"><ds-icon name="arrow-up"></ds-icon>See it on a phone, live</button>
```

## Behavior

The details that make the sidebar feel quiet: nothing changes without a reason and everything comes back as it was.

Groups that remember

Each group collapses by its title and the state is saved (`ds-nav-groups`). When collapsed, the sidebar shows every group’s icons.

The current item in view

If the current page is in a closed group, the group opens and the list scrolls to it.

Dots that go away

The dot stays until the person opens the page. With the group closed, it shows on the group title.

Only the list scrolls

Brand, search, and footer stay put. The list scrolls on its own, with the overlay scrollbar and a faded end.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.5"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1z"></path><path d="M17 9a3.5 3.5 0 0 1 0 6M8 15.67V19a1.5 1.5 0 0 0 3 0v-1.33"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="4" y="3.5" width="16" height="17" rx="3"></rect><path d="M16 7.5v5"></path></svg>
```

## Keyboard

Single-key shortcuts only work outside text fields: no one loses what they’re typing.

| Keys | Action | Detail |
| --- | --- | --- |
| Ctrl B | Collapse or expand | On phones, opens and closes the drawer. |
| Tab | Move through the items | In screen order: brand, search, items and group titles, footer. |
| Enter | Open or close the group | On the group title. Space does the same. |
| Ctrl K | Open search | The same as clicking the sidebar field. / opens it too. |
| Esc | Close the drawer | And returns focus to the menu button. |

## Accessibility

What the keyboard and screen readers find.

- Named regions — The sidebar is an `aside` “Sidebar” and the list a `nav` “Main”. Screen reader users can jump straight to them.
- Current page — The current item has `aria-current="page"`: it doesn’t rely on the visual highlight alone.
- Groups that state their state — Enter — The title is a button with `aria-expanded` and `aria-controls`. Section labels are hidden from screen readers: the item name is enough.
- Names when collapsed — Only icons on screen, but each item keeps its label for screen readers and gets a tooltip on hover and focus.
- Collapse with a label — Ctrl B — The tab and the flame say what they do (“Collapse menu” ↔ “Expand menu”) and show Ctrl B in the tooltip.
- Focus in the drawer — Esc — On open, focus goes to the current item; Esc closes and returns focus to the menu button.
- Reduced motion — With the system preference on, collapsing and opening the drawer happen without animation.

## Tokens used

Change one number and the whole sidebar follows.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| layout.sidebar (`--ds-layout-sidebar`) | Open width (and drawer max) | 288 px | 288 px |
| layout.sidebar-collapsed (`--ds-layout-sidebar-collapsed`) | Collapsed width | 76 px | 76 px |
| layout.frame-gap (`--ds-layout-frame-gap`) | Distance from the window edge and the main panel | 10 px | 10 px |
| radius.xl (`--ds-radius-xl`) | Panel corners | 20 px | 20 px |
| color.bg.sidebar (`--ds-color-bg-sidebar`) | Panel background | #F8FAFD | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Outline of the panel and the current item | #3E516624 | #FFFFFF0F |
| size.control.lg (`--ds-size-control-lg`) | Height of main items | 48 px | 48 px |
| size.control.md (`--ds-size-control-md`) | Height of items and group titles | 40 px | 40 px |
| color.bg.hover (`--ds-color-bg-hover`) | Hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Current item | #3E516612 | #C0CAD61A |
| color.brand.indicator (`--ds-color-brand-indicator`) | New dot | #C97B63 | #DE9680 |
| duration.slow (`--ds-duration-slow`) | Collapse, expand, and drawer | 320ms | 320ms |

## Code

The HTML is fixed; the navigation is drawn from a list. The sidebar lives inside `.ds-shell`: see App shell for the whole frame.

### HTML

```html
<aside class="ds-sidebar" id="sidebar" aria-label="Sidebar">
  <div class="ds-sidebar__header">
    <a class="ds-brand" href="#/" aria-label="Home"><img class="ds-brand__mark" src="logo.svg" alt="">Your app</a>
    <button class="ds-icon-btn ds-icon-btn--outline ds-icon-btn--lg ds-sidebar__toggle" data-shell-toggle aria-controls="sidebar">
      <img class="ds-sidebar__toggle-mark" src="logo.svg" alt="">
      <ds-icon name="panel-left" class="ds-sidebar__toggle-collapse"></ds-icon>
      <ds-icon name="x" class="ds-sidebar__toggle-close"></ds-icon>
    </button>
  </div>
  <div class="ds-sidebar__search">
    <button class="ds-field ds-sidebar-search" data-command-open>…</button>
  </div>
  <nav class="ds-sidebar__nav" id="sidebar-nav" aria-label="Main"></nav>
  <div class="ds-sidebar__footer"><a class="ds-account" href="…">…</a></div>
</aside>
<!-- the collapse tab lives outside the sidebar, pinned to its edge -->
<button class="ds-shell__edge" data-shell-toggle aria-controls="sidebar"><ds-icon name="chevron-left" size="16"></ds-icon></button>
```

### JavaScript

```html
import { createShell, renderSidebarNav, setActiveNavItem } from 'https://lumeui.dev/v/1.8/lume.js';

const nav = document.getElementById('sidebar-nav');
renderSidebarNav(nav, [
  // the group without a label is the main navigation (larger items, always open)
  { id: 'main', items: [
    { label: 'Home', icon: 'home', href: '#/' },
    { label: 'What’s new', icon: 'megaphone', href: '#/news', dot: true },
  ] },
  { id: 'sales', label: 'Sales', items: [
    { label: 'Orders', icon: 'inbox', href: '#/orders', section: 'Today' },
    { label: 'Customers', icon: 'users', href: '#/customers', section: 'Records' },
  ] },
]);

const shell = createShell(document.getElementById('shell'));
setActiveNavItem(nav, location.hash);   // sets aria-current, opens the group, and scrolls to the item
addEventListener('hashchange', () => setActiveNavItem(nav, location.hash));

shell.setCollapsed(true);               // collapses (desktop)
shell.collapsed;                        // → true
```

| API | What it does |
| --- | --- |
|  `renderSidebarNav(el, groups)`  | Draws the navigation. Each item: `label`, `icon`, `href` and, optionally, `dot` and `section`. |
|  `setActiveNavItem(el, href)`  | Marks the current page, opens its group, and scrolls to it. |
|  `createShell(el, { persist, initial })`  | Wires collapse, drawer, and groups. `persist: false` saves nothing; `initial` forces “expanded” or “collapsed”. |
|  `shell.toggle() · setCollapsed() · setMobileOpen()`  | Change the state the way the buttons and the shortcut do. |
|  `shell.collapsed · mobile · mobileOpen`  | Read the current state. |
|  `ds:shellchange event`  | Fired on the shell at every change, with { sidebar, mobile, mobileOpen }. |

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

The sidebar disappears when it’s done well.

- **Do:** many pages, daily use. Apps people open every day and where they jump between dozens of pages. Up to six groups, with one- or two-word names.
- **Avoid:** too many actions and levels. The sidebar takes you places. Create and delete buttons, or a third navigation level, go in the page content.
- **Tip:** Only a few areas? Navbar. With few areas and wide content (tables, boards), the navbar gives back the full width. The same groups work for both.
