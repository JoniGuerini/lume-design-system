# App shell

Lume section: Patterns. Page: https://lumeui.dev/#/padroes/app-shell

The frame of every screen: a floating sidebar, the main panel, and the top bar. It collapses on desktop, becomes a drawer on phones, and responds to the keyboard.

In numbers: sidebar: 288 px · collapsed: 76 px · topbar: 64 px · drawer below: 1024 px.

## Live

It’s the app itself, running in here. Change the screen size and watch the sidebar become a drawer; collapse it, switch the theme, navigate. Nothing you do here changes your preferences.

Loading the app…

Sidebar expanded · Desktop 1280 × 800

Markup of the examples in this section:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Screen size" data-segmented="device">
<button type="button" class="ds-segmented__item" role="radio" data-value="desktop" aria-checked="true">Desktop</button><button type="button" class="ds-segmented__item" role="radio" data-value="tablet" aria-checked="false">Tablet</button><button type="button" class="ds-segmented__item" role="radio" data-value="phone" aria-checked="false">Phone</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="Example layout" data-segmented="layout">
<button type="button" class="ds-segmented__item" role="radio" data-value="sidebar" aria-checked="true" aria-label="Sidebar"><ds-icon name="panel-left"></ds-icon></button><button type="button" class="ds-segmented__item" role="radio" data-value="navbar" aria-checked="false" aria-label="Navbar"><ds-icon name="panel-top"></ds-icon></button>
</div>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-demo-toggle=""><ds-icon name="panel-left"></ds-icon><span data-demo-toggle-label="">Collapse menu</span></button>

<button type="button" class="ds-theme-toggle " data-demo-theme="dark" aria-pressed="false" aria-label="Example theme" data-ds-tooltip="Switch between light and dark">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-demo-reload="" aria-label="Reload the example" data-ds-tooltip="Reload the example"><ds-icon name="refresh"></ds-icon></button>
```

## Anatomy

Eight parts, marked over the real app — the positions come from the DOM itself. Hover or focus a list item to highlight it.

Loading the app…

- 1 — Sidebar — A floating 288 px panel, xl radius, separated from the content by 10 px of app background.
- 2 — Brand — The Lume flame and the name, in Geist Serif. It goes to Home.
- 3 — Search — Opens the command palette — the same as Ctrl K or /.
- 4 — Grouped navigation — Main navigation at the top; then, groups that collapse and remember their state.
- 5 — Account card — Pinned to the foot of the sidebar: account, version, or workspace.
- 6 — Main panel — The page content, with 40 px side padding and a limited reading width.
- 7 — Top bar and breadcrumb — 64 px, fixed at the top of the panel: transparent at first, opaque on scroll.
- 8 — Theme — A button that switches between light and dark with each click. It starts like the device, and the choice is saved for the whole app.

## Collapsed and expanded

On desktop, the sidebar collapses to 76 px and lets the content breathe. The icons stay in the same column in both states — so nothing jumps during the animation.

Expanded — 288 px

- Labels, group titles, and the search shortcut in view.
- No tooltips — the name is already written.
- To collapse, the tab on the edge, level with the brand: it shows with the pointer over the sidebar or with focus.
- The default for first-time visitors.

Collapsed — 76 px

- Icons only; the text fades out by opacity, without moving.
- Each item gets a tooltip with its name — and its shortcut, when it has one.
- Group titles become a thin divider; search becomes the magnifier.
- The flame stays at the top, larger; with the pointer or focus, it becomes the expand button.

The choice is saved (`ds-sidebar`) and applied before the first paint — the page doesn’t flash on open.

The width animates with `duration.slow` and `easing.emphasized`; with reduced motion, the change is immediate.

Markup of the examples in this section:

```html
<button type="button" class="ds-inline-action" data-try="collapse"><ds-icon name="panel-left"></ds-icon>Collapse in the live example<ds-icon name="arrow-up"></ds-icon></button>
```

## Mobile

Below 1024 px the sidebar leaves the screen and becomes a drawer. The content gets the full width; the top bar gets the menu button and the magnifier.

- 1 — Open — The top bar’s menu button (or Ctrl B) slides the drawer in and dims the background. Focus moves to the active item.
- 2 — Navigate — Choosing a page closes the drawer. The width is 288 px, but it never touches the edge: 48 px remain to tap outside.
- 3 — Close — Tap the background, the X, or press Esc. Focus returns to the menu button.

Below 768 px the breadcrumb shows only the current page and the side padding drops to 16 px.

Markup of the examples in this section:

```html
<button type="button" class="ds-btn ds-btn--secondary" data-try="phone"><ds-icon name="arrow-up"></ds-icon>See it on a phone, live</button>
```

## Behavior

The details that make the shell feel quiet: nothing changes without a reason and everything comes back as it was.

A top bar that appears on scroll

At the top of the page it’s transparent and blends into the background. On scroll, it turns opaque and gains a thin line below (data-scrolled on the panel).

The active item always in view

The current page gets aria-current="page"; if it’s in a closed group, the group opens and the list scrolls to it.

Groups that remember

Each group collapses by its title and the state is saved (ds-nav-groups). When collapsed, the sidebar shows every icon.

Three widths

From 1024 px: collapsible sidebar. Below: drawer. Below 768 px: short breadcrumb and less padding.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="9" rx="2"></rect><rect x="13.5" y="3.5" width="7" height="5" rx="2"></rect><rect x="13.5" y="11.5" width="7" height="9" rx="2"></rect><rect x="3.5" y="15.5" width="7" height="5" rx="2"></rect></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.5"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="4" width="18" height="12.5" rx="2.5"></rect><path d="M8.5 20.5h7M12 16.5v4"></path></svg>
```

## Shortcuts

They work on any page. Single-key shortcuts only apply outside text fields — no one loses what they’re typing.

| Keys | Action | Detail |
| --- | --- | --- |
| Ctrl B | Collapse or expand the sidebar | On phones, opens and closes the drawer. |
| Ctrl K | Open search | Opens the command palette from anywhere. |
| / | Open search | Only outside text fields — inside them, / is just a slash. |
| Esc | Close | Closes search, the drawer, menus, and tooltips, and returns focus. |
| Tab | Skip to content | The page’s first Tab shows the shortcut to the main panel. |

## Accessibility

The shell is the first thing the keyboard and screen reader meet. It has to be predictable.

- Named regions — Sidebar in an `aside` “Sidebar”, navigation “Main”, breadcrumb “You are here”, content in `main`. You can jump between them with a screen reader.
- Skip to content — Tab — The first Tab shows the link; Enter takes focus straight to the main panel, without going through all the navigation.
- Current page — The active item has `aria-current="page"` — it doesn’t rely on the visual highlight alone.
- Buttons that state their state — Collapse, open drawer, and groups use `aria-expanded` and `aria-controls`; the label changes with them (“Collapse menu” ↔ “Expand menu”).
- Focus in the drawer — Esc — On open, focus goes to the active item; Esc closes and returns focus to the menu button.
- Names when collapsed — Only icons on screen, but each item keeps its label for the reader and gets a tooltip on hover and focus.
- Shortcuts that don’t get in the way — Ctrl B and / don’t fire inside text fields. Shortcuts show in tooltips and in `aria-keyshortcuts`.
- Reduced motion — With the system preference on, the sidebar and drawer change state without animation.

## Measurements

Everything comes from layout tokens — change one number and the whole shell follows.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| layout.sidebar (`--ds-layout-sidebar`) | Sidebar width (and drawer max) | 288 px | 288 px |
| layout.sidebar-collapsed (`--ds-layout-sidebar-collapsed`) | Collapsed width | 76 px | 76 px |
| layout.topbar (`--ds-layout-topbar`) | Top bar height | 64 px | 64 px |
| layout.frame-gap (`--ds-layout-frame-gap`) | Background between the panels and the window edge | 10 px | 10 px |
| layout.gutter (`--ds-layout-gutter`) | Content side padding | 40 px | 40 px |
| layout.content-max (`--ds-layout-content-max`) | Content max width | 1160 px | 1160 px |
| radius.2xl (`--ds-radius-2xl`) | Radius of both panels | 28 px | 28 px |
| breakpoint.lg (`--ds-breakpoint-lg`) | From here, sidebar; below, drawer | 1024 px | 1024 px |
| color.bg.app (`--ds-color-bg-app`) | Background behind the panels | #DAE0E8 | #0F0E0C |
| color.bg.sidebar (`--ds-color-bg-sidebar`) | Sidebar | #F8FAFD | #24221F |
| color.bg.canvas (`--ds-color-bg-canvas`) | Main panel and top bar on scroll | #EEF2F6 | #1D1B18 |
| duration.slow (`--ds-duration-slow`) | Collapse, expand, and drawer | 320ms | 320ms |

## Code

The HTML is fixed; the navigation is built by JS from a list. The same file serves the whole site.

### HTML

```html
<a class="ds-skip-link" href="#content">Skip to content</a>

<div class="ds-shell" id="shell">
  <button class="ds-shell__edge" data-shell-toggle aria-controls="sidebar"><ds-icon name="chevron-left" size="16"></ds-icon></button>
  <aside class="ds-sidebar" id="sidebar" aria-label="Sidebar">
    <div class="ds-sidebar__header">
      <a class="ds-brand" href="#/" aria-label="Lume"><img class="ds-brand__mark" src="assets/favicon.svg" alt="">Lume</a>
      <button class="ds-icon-btn ds-icon-btn--outline ds-icon-btn--lg ds-sidebar__toggle"
              data-shell-toggle aria-controls="sidebar">
        <img class="ds-sidebar__toggle-mark" src="assets/favicon.svg" alt="">
        <ds-icon name="panel-left" class="ds-sidebar__toggle-collapse"></ds-icon>
        <ds-icon name="x" class="ds-sidebar__toggle-close"></ds-icon>
      </button>
    </div>
    <div class="ds-sidebar__search">…button that opens search…</div>
    <nav class="ds-sidebar__nav" id="sidebar-nav" aria-label="Main"></nav>
    <div class="ds-sidebar__footer"><a class="ds-account" href="…">…</a></div>
  </aside>

  <div class="ds-shell__scrim" data-shell-scrim></div>

  <div class="ds-main">
    <div class="ds-main__scroll">
      <header class="ds-topbar">
        <button class="ds-icon-btn ds-icon-btn--outline ds-topbar__menu"
                data-shell-toggle aria-controls="sidebar"><ds-icon name="menu"></ds-icon></button>
        <nav class="ds-breadcrumb" aria-label="You are here"></nav>
        <div class="ds-topbar__spacer"></div>
        …search and theme…
      </header>
      <main id="content" class="ds-main__content" tabindex="-1"></main>
    </div>
  </div>
</div>
```

### JavaScript

```html
import { createShell, renderSidebarNav, setActiveNavItem } from 'https://lumeui.dev/v/0.27/lume.js';

const nav = document.getElementById('sidebar-nav');
renderSidebarNav(nav, [
  { id: 'main', items: [{ label: 'Home', icon: 'home', href: '#/' }] },
  { id: 'sales', label: 'Sales', items: [
    { label: 'Orders', icon: 'inbox', href: '#/orders', dot: true },
    { label: 'Customers', icon: 'users', href: '#/customers' },
  ] },
]);

const shell = createShell(document.getElementById('shell'));
setActiveNavItem(nav, location.hash);            // sets aria-current and opens the group

shell.toggle();                                 // collapses (desktop) or opens the drawer (phone)
shell.closeMobile();                            // when navigating on a phone
document.getElementById('shell')
  .addEventListener('ds:shellchange', (e) => console.log(e.detail));
  // → { sidebar: 'expanded' | 'collapsed', mobile: false, mobileOpen: false }
```

| API | What it does |
| --- | --- |
|  `createShell(el, { persist, initial })`  | Wires collapse, drawer, groups, and top bar. `persist: false` saves nothing; `initial` forces “expanded” or “collapsed”. |
|  `shell.toggle() · setCollapsed(bool) · setMobileOpen(bool)`  | Change the state the way the buttons and the shortcut do. |
|  `shell.isCollapsed() · isMobile() · isMobileOpen()`  | Read the current state. |
|  `renderSidebarNav(el, groups)`  | Draws the navigation: the unlabeled group becomes the main one; the others collapse. |
|  `setActiveNavItem(el, href)`  | Marks the current page, opens its group, and scrolls to it. |
|  `ds:shellchange event`  | Fired on the shell at every change, with { sidebar, mobile, mobileOpen }. |

### Demo mode ?embed

It’s what this page uses. With `?embed` in the URL, the app doesn’t save theme, sidebar, or groups, and the embedding page controls everything through `lumeEmbed`.

```html
<!-- the real app, without saving preferences -->
<iframe src="index.html?embed&theme=dark&sidebar=collapsed#/"></iframe>

<script type="module">
  const app = iframe.contentWindow.lumeEmbed;   // same origin
  app.shell.toggle();
  app.setTheme('dark');          // light · dark
  app.setLocale('en');
  app.go('/componentes/botao');
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Usage

The shell disappears when it’s done well. Three rules help.

- **Do:** few groups, short names. Up to six groups, with one- or two-word labels. If an item needs explaining, it lives on a page, not in the menu.
- **Avoid:** too many actions and levels in the sidebar. The sidebar takes you places. Create and delete buttons, or a third navigation level, go in the page content.
- **Tip:** Everything via search too. Every sidebar page and action shows up in the palette (Ctrl K). Keyboard users don’t even need to open the menu.
