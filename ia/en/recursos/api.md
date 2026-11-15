# API

Lume section: Resources. Page: https://lumeui.dev/#/recursos/api

Everything you can call from JavaScript, in a single file. What’s here is public and stable; the rest is internal and may change.

In numbers: public items: 102 · verbs: 5 · dependencies: 0.

## Import

One file, `ds/lume.js`, gathers the whole API. The `ds/js/` modules can still be imported one by one, to load only what you need.

```html
<link rel="stylesheet" href="https://lumeui.dev/v/1.6/lume.css">

<script type="module">
  import { initTheme, createModal, toast } from 'https://lumeui.dev/v/1.6/lume.js';

  initTheme();
  const modal = createModal({ title: 'Publish changes?' });
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Convention

Each verb promises one thing. From the name, you already know what comes back.

| Verb | When | Returns |
| --- | --- | --- |
| `create…` | Attaches a component to an element, or creates the element | A controller with `destroy()` |
| `mount…` | Sets up every component of a kind in an area | The function that tears them all down |
| `init…` | Page-wide behavior, called once | Nothing |
| `open…` `confirm…` `toast` | Immediate action | The answer, or a controller with close() |
| `…Html` | Builds the markup without wiring anything | An HTML string |

Global state follows `get…` and `set…`; constants are uppercase, like `THEMES`.

## Controllers

What a create… returns follows the same rules in every component.

| Name | Rule |
| --- | --- |
| `el` | The component’s main element. |
| `value` · `setValue()` | Read and replace the value, without calling `onChange`. Pagination (`page`), stepper (`current`), and carousel (`index`) use the name of what they hold. |
| `isOpen` · `collapsed` | State is a property, without parentheses. |
| `open()` · `close()` · `goTo()` · `focus()` | Actions are functions, with the same name in every component. |
| `destroy()` | Removes everything the component set up. Every create… has it. |
| `onChange` · `onInput` | In JavaScript, like the native field: `onChange` when the value settles (on release, on pick) and `onInput` while dragging. |
| `onChange` · `onCommit` | In React, like any controlled field: `onChange` on every change and `onCommit` on release, to save or fetch. |

## Events

Few, all prefixed with `ds:`. Everything else arrives through each component’s `on…` options.

| Event | Where | detail | When |
| --- | --- | --- | --- |
| `ds:localechange` | `<html>` | `{ preference, locale }` | The language changed. |
| `ds:themechange` | `<html>` | `{ preference, resolved }` | The theme changed. |
| `ds:shellchange` | `.ds-shell` | `{ sidebar, layout, mobile, mobileOpen }` | The sidebar collapsed, opened, or switched layout. |
| `ds:tabchange` | the tabs (bubbles) | `{ tab, id }` | Another tab was chosen. |
| `ds:sortchange` | the target list (bubbles) | `{ item, id, from, to, oldIndex, newIndex }` | An item moved. |

## Everything public

The 102 items in `ds/lume.js`, with the module each one comes from.

### Components

| Name | What it does | Module |
| --- | --- | --- |
| `createBackToTop` | Back-to-top button for a scrolling area. | back-to-top.js |
| `createBanner` | Announcement banner: closes and remembers in the browser that the person closed that announcement. | banner.js |
| `createCalendar` | Calendar with month, week, and day views. | calendar.js |
| `createCarousel` | Carousel with arrows, dots, keyboard, and autoplay with pause. | carousel.js |
| `createColorPicker` | Standalone color picker: area, hue, hex, and swatches. | color-picker.js |
| `createColorField` | Color field with a swatch that opens the picker. | color-picker.js |
| `parseHex` | Reads a hex color (3 or 6 digits, with or without #). | color-picker.js |
| `createCommandPalette` | Command search opened with ⌘K. | command-palette.js |
| `createComposer` | Chat message field, with attachments. | composer.js |
| `createContextMenu` | Right-click menu for an area. | context-menu.js |
| `createDatePicker` | Date picker attached to a field. | date-picker.js |
| `createDrawer` | Drawer you open and close whenever you want. | drawer.js |
| `createEditor` | Rich text editor: Lume’s toolbar, shortcuts, Markdown at line start, clean paste, and the HTML for the form. | editor.js |
| `sanitizeHtml` | Cleans HTML down to what the editor accepts: paragraphs, headings, lists, quotes, marks, and safe links. | editor.js |
| `createFileUpload` | File upload area, with list and progress. | file-upload.js |
| `createFilters` | Filter bar that keeps its state in the URL. | filters.js |
| `createForm` | Validation, errors, and error summary for a form. | form.js |
| `openImageViewer` | Opens the image viewer with a list of images: zoom, panning, arrows, and caption. | image-viewer.js |
| `mountImageViewer` | Wires the links with data-ds-viewer in an area: the same value becomes one gallery. | image-viewer.js |
| `createMenu` | Menu attached to a button, with single or multiple choice. | menu.js |
| `createModal` | Modal you open and close whenever you want. | modal.js |
| `createNotificationCenter` | Notification center on the bell: list, unread, mark all, and announcing new ones. | notifications.js |
| `relativeTime` | Relative time in Lume’s language (“5 minutes ago”); after a week, a date. | notifications.js |
| `createNumberField` | Number field with – and +. | number-field.js |
| `createOtpField` | Verification code field. | otp-field.js |
| `createPagination` | Pagination for a list or table. | pagination.js |
| `createPopover` | Panel that opens attached to a button. | popover.js |
| `progressRingHtml` | Circular progress markup, with the percentage in the middle; with no value, indeterminate. | progress-ring.js |
| `setProgressRing` | Changes the value of a circular progress already on the page. | progress-ring.js |
| `createRating` | Star rating for giving a score; each star is a native radio. | rating.js |
| `ratingHtml` | Markup for a display-only score, with half stars. | rating.js |
| `createResizable` | Resizable panels: a draggable divider, with keyboard, limits, and saved size. | resizable.js |
| `createSegmented` | Segmented control. | segmented.js |
| `createSelect` | Lume select on top of a native select. | select.js |
| `mountSelects` | Sets up every select in an area. | select.js |
| `createShell` | App shell: sidebar or navbar, collapse, and drawer on mobile. | shell.js |
| `renderSidebarNav` | Builds the sidebar navigation groups. | shell.js |
| `renderNavbarNav` | Builds the navbar navigation groups. | shell.js |
| `setActiveNavItem` | Marks the current page’s navigation item. | shell.js |
| `LAYOUTS` | The app shell layouts. | shell.js |
| `createSortable` | Sortable list: change the order with the mouse, touch, or keyboard; lists in the same group exchange items. | sortable.js |
| `createKanban` | Kanban: columns of cards that move from one to another, with each column’s count. | sortable.js |
| `createSlider` | Slider for a value or a range. | slider.js |
| `createStepper` | Steps of a process. | stepper.js |
| `mountTabs` | Sets up every tab set in an area. | tabs.js |
| `selectTab` | Selects a tab from code. | tabs.js |
| `createTagField` | Tag field. | tag-field.js |
| `createTimePicker` | Time picker attached to a field. | time-picker.js |
| `createToolbar` | Toolbar: a single Tab stop, arrow keys between buttons, and toggle buttons. | toolbar.js |
| `createTree` | Tree that expands and collapses. | tree.js |

### Immediate actions

| Name | What it does | Module |
| --- | --- | --- |
| `openModal` | Opens a modal and returns the answer when it closes. | modal.js |
| `confirmModal` | Asks for confirmation and returns yes or no. | modal.js |
| `openDrawer` | Opens a drawer and returns the answer. | drawer.js |
| `toast` | Shows a toast; returns a controller with close(). | toast.js |
| `clearToasts` | Closes every toast. | toast.js |
| `copyText` | Copies text and confirms with a toast. | toast.js |
| `getToastPosition` | Reads the toast position. | toast.js |
| `setToastPosition` | Changes the toast position. | toast.js |
| `TOAST_POSITIONS` | The possible toast positions. | toast.js |

### Charts

| Name | What it does | Module |
| --- | --- | --- |
| `createBarChart` | Bar chart. | charts.js |
| `createLineChart` | Line and area chart. | charts.js |
| `createDonutChart` | Donut chart. | charts.js |
| `createHeatmap` | Matrix heatmap. | charts.js |
| `createCalendarHeatmap` | Calendar heatmap. | charts.js |
| `createScatterChart` | Scatter chart. | charts.js |
| `statTileHtml` | Stat tile with value, change, and trend. | charts.js |
| `sparklineHtml` | Sparkline. | charts.js |
| `meterHtml` | Meter for an amount with thresholds. | charts.js |
| `chartFormatter` | Formats numbers the way the charts do. | charts.js |

### Markup as text

| Name | What it does | Module |
| --- | --- | --- |
| `modalHtml` | A modal’s HTML. | modal.js |
| `composerHtml` | The message field’s HTML. | composer.js |
| `messageHtml` | A chat message’s HTML. | composer.js |
| `attachmentHtml` | An attachment’s HTML. | composer.js |
| `typingHtml` | The “typing…” HTML. | composer.js |
| `streamText` | Writes a reply bit by bit, like an assistant. | composer.js |
| `codeBlockHtml` | A code block’s HTML. | code-block.js |
| `mountCodeBlocks` | Sets up the copy button of the code blocks in an area. | code-block.js |

### Page: theme, language, and icons

| Name | What it does | Module |
| --- | --- | --- |
| `initTheme` | Applies the saved theme or the system one. | theme.js |
| `setTheme` | Chooses light, dark, or system. | theme.js |
| `toggleTheme` | Switches between light and dark. | theme.js |
| `resolvedTheme` | The theme in use now. | theme.js |
| `getThemePreference` | The saved choice: light, dark, or system. | theme.js |
| `mountThemeControls` | Sets up the theme buttons in an area. | theme.js |
| `THEMES` | The available themes. | theme.js |
| `initLocale` | Applies the saved language or the system one. | i18n.js |
| `setLocale` | Chooses the components’ language. | i18n.js |
| `locale` | The language in use now. | i18n.js |
| `getLocalePreference` | The saved language choice. | i18n.js |
| `tr` | Picks the current language’s text from { pt-BR, en, es }. | i18n.js |
| `msg` | A component system text, in the current language. | i18n.js |
| `formatNumber` | Formats a number in the current language. | i18n.js |
| `numberFormat` | Intl.NumberFormat in the current language. | i18n.js |
| `dateFormat` | Intl.DateTimeFormat in the current language. | i18n.js |
| `LOCALES` | Lume’s languages. | i18n.js |
| `LOCALE_NAMES` | Each language’s name. | i18n.js |
| `initTooltips` | Sets up the tooltips for every data-ds-tooltip on the page. | tooltip.js |
| `initScrollbars` | Sets up the overlay scrollbar. | scrollbar.js |
| `icon` | An icon’s SVG, as text. | icons/icons.js |
| `icons` | The 132 icons, by name. | icons/icons.js |
| `iconList` | The 132 icons, as a list. | icons/icons.js |
| `filtersToQuery` | Turns the filter state into a URL query. | filters.js |
| `filtersFromQuery` | Reads the filter state from a URL query. | filters.js |

## What won’t change

Since 1.0, a name on this page only changes in a major version (2.0), with a console warning and a migration guide. New components arrive in minor versions (1.1, 1.2…) without touching what already exists. Visuals (color, spacing, radius) can evolve in any version, because they don’t break anyone.
