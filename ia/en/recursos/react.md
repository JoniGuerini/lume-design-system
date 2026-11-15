# Use with React

Lume section: Resources. Page: https://lumeui.dev/#/recursos/react

.tsx components to copy into your project, on top of Lume’s same CSS and JavaScript. No package to install: the folder comes in each version’s zip.

In numbers: of the 58 components: 58 · React: 18+ · dependencies: 0.

## Install

Download the 1.3 zip, unzip it, and move the folder into `src/` named `lume`. The components are in `lume/react/` and import the JavaScript and icons from that same folder. It works with Vite, Next.js, and any React 18 or newer project.

```html
src/
  lume/                 ← the whole folder from the zip
    lume.css
    lume.js
    js/  icons/  fonts/
    react/              ← the .tsx components
  main.tsx
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Use

Import `lume.css` once, at the app’s entry, and the components from `./lume/react`.

```html
import { createRoot } from 'react-dom/client';
import './lume/lume.css';
import { initTheme } from './lume/lume.js';
import { App } from './App';

initTheme();
createRoot(document.getElementById('root')!).render(<App />);
```

```html
import { useState } from 'react';
import { Alert, Badge, Button, Panel } from './lume/react';

export function App() {
  const [saving, setSaving] = useState(false);
  return (
    <Panel eyebrow="Order" title="Order #1042" actions={<Badge tone="success" dot>Paid</Badge>}>
      <Alert tone="info" title="Delivery expected on Friday" />
      <Button variant="primary" icon="check" busy={saving} onClick={() => setSaving(true)}>
        {saving ? 'Saving' : 'Confirm'}
      </Button>
    </Panel>
  );
}
```

With an AI: point it to `https://lumeui.dev/llms.txt` and say the project uses the components in `lume/react`.

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Components

What’s already in React. Each name leads to the component’s page, with the uses, variants, and accessibility, which apply here just the same.

### Base

| Component | What it does | File |
| --- | --- | --- |
| `Icon` | The 132 icons, with the name checked by TypeScript. | Icon.tsx |
| `useLocale` | Lume’s language; re-renders when it changes. | useLocale.ts |
| `cx` | Joins classes, skipping anything falsy. | cx.ts |

### Actions

| Component | What it does | File |
| --- | --- | --- |
| `Button · ButtonLink` | Variant, size, icons and busy. ButtonLink is the same look on a link. | Button.tsx |
| `IconButton` | Icon only; the screen reader label is required. | IconButton.tsx |
| `InlineAction` | Minimal action within content ("In scene +"). | InlineAction.tsx |
| `Link` | Inline or standalone (variant), muted, and external, with icon and new-tab notice. | Link.tsx |
| `Chip · RemovableChip · ChipGroup` | Filter (pressed), selector (chevron) and removable (onRemove). | Chip.tsx |

### Forms

| Component | What it does | File |
| --- | --- | --- |
| `Field · Input · Textarea · TextField` | Label, hint, error and counter wired to the control; TextField puts it all together. | Field.tsx |
| `Select` | One or more options, with groups, search and a limit. | Select.tsx |
| `Checkbox · Radio · RadioGroup · CheckboxGroup` | Single options or groups, with a controlled value. | Choice.tsx |
| `Switch` | On and off, with a description and two sizes. | Choice.tsx |
| `DatePicker` | Date or range, value as Date; the form gets ISO. | Pickers.tsx |
| `TimePicker` | Time as HH:MM, with a list and free typing. | Pickers.tsx |
| `ColorPicker · ColorField` | The standalone picker and the field that opens it; the hex stays in state. | ColorPicker.tsx |
| `NumberField` | Number with − and +, limits and format (currency, percent). | Pickers.tsx |
| `Slider` | A value or a range; onChange while dragging, onCommit on release. | Controls.tsx |
| `TagField` | A list of free values, with a limit and validation. | Pickers.tsx |
| `FileUpload` | Drag or pick, with upload, progress and per-file errors. | Controls.tsx |
| `OtpField` | One box per digit; onComplete on the last one. | Controls.tsx |
| `RichTextEditor` | label, value, and onChange with clean HTML; tools, placeholder, name, and disabled. The editor owns its own DOM. | Editor.tsx |
| `Form` | Lume’s validation, with custom rules and the error summary. | Form.tsx |

### Navigation

| Component | What it does | File |
| --- | --- | --- |
| `Menu` | Attaches the list to any trigger (triggerRef): choice or actions. | Navigation.tsx |
| `Tabs` | ARIA tabs with arrows, Home and End; underlined or segmented. | Navigation.tsx |
| `SegmentedControl` | A few options side by side, one chosen. | Navigation.tsx |
| `Pagination` | Page and page size in state; optional links. | Navigation.tsx |
| `Stepper` | Steps, the current one, and going back with onChange. | Navigation.tsx |
| `Accordion` | Built on native details; single keeps one open at a time. | Navigation.tsx |
| `Tree` | Nested levels, with keyboard and the selected item. | Navigation.tsx |
| `useScrollbars` | Turns on the overlay scrollbar for the whole app. | Navigation.tsx |
| `BackToTop` | A button pinned to the corner of the scrolling area. | Navigation.tsx |

### Layers

| Component | What it does | File |
| --- | --- | --- |
| `Modal` | open and onClose with the action value; focus trap and Esc from the native dialog. | Layers.tsx |
| `Drawer` | The same Modal, sliding in from the edge. | Layers.tsx |
| `Popover` | React content pinned to the trigger. | Layers.tsx |
| `ContextMenu` | Right click, Shift+F10 or long press in an area. | Layers.tsx |
| `Tooltip` | Wraps an element; takes a placement and a shortcut. | Layers.tsx |
| `toast` | A function, not a component: toast(text, options). | toast.js |
| `useDisclosure` | Open, closed and the functions, for Modal and Drawer. | Layers.tsx |

### Feedback and loading

| Component | What it does | File |
| --- | --- | --- |
| `Badge` | Six tones, dot and counter. | Badge.tsx |
| `Alert` | Tone with the right icon, actions and the × (onClose). | Alert.tsx |
| `Banner` | Tone, title, and text; closable with an id remembers in the browser that it was closed. | Notices.tsx |
| `NotificationCenter` | The bell with the count; items in state and onChange for what was read. New ids are announced. | Notices.tsx |
| `Progress` | Bar with label and percentage; without a value, indeterminate. | Loading.tsx |
| `ProgressRing` | Ring with the percentage; without a value, indeterminate. Three sizes and the bar’s tones. | Loading.tsx |
| `Spinner` | Three sizes, with the "Loading" label built in. | Loading.tsx |
| `Skeleton` | Block, text line and circle. | Loading.tsx |

### Content

| Component | What it does | File |
| --- | --- | --- |
| `Card · CardLink` | Simple surface; CardLink is the whole card as a link. | Panel.tsx |
| `Panel · Section` | Header, toolbar, body and footer in the right order, through props. | Panel.tsx |
| `Avatar · AvatarGroup` | Initials and tone from the name, photo falling back to initials, status and "+N". | Avatar.tsx |
| `Kbd` | One key or a combination (keys). | Content.tsx |
| `DescriptionList` | Label and value pairs from a list. | Content.tsx |
| `Timeline` | Events with tone, icon and date. | Content.tsx |
| `Breadcrumb` | Items with links; renderLink for your router’s link. | Content.tsx |
| `Table` | Columns, sorting and selection in state; empty and loading. | Table.tsx |
| `Calendar` | Month, week and day, with events; view and date in state. | Calendar.tsx |
| `CodeBlock` | Code with the copy button. | Calendar.tsx |
| `Carousel` | Each child becomes a slide; perView, peek, loop and autoplay with pause. index and onChange in state. | Carousel.tsx |
| `ResizablePanels` | One ResizablePanel per part, with size, min, max and collapsible; dividers are added for you. storageKey keeps the size. | Resizable.tsx |
| `Rating` | Give a score, with name, value and onChange; RatingDisplay only shows one, with half stars. | Rating.tsx |
| `Toolbar` | ToolbarGroup, ToolbarSeparator and ToolbarButton; pressed in state and onToggle on the bar. | Toolbar.tsx |
| `Divider` | Horizontal, vertical, faded, or with a label in the middle or at the start. | Link.tsx |
| `ImageGallery` | Thumbnails that open the viewer; images with src, thumb, alt, and caption. openImageViewer opens it from anywhere. | ImageViewer.tsx |
| `SortableList` | items with an id, renderItem, and onChange with the new order; handle, plain, and orientation. | Sortable.tsx |
| `Kanban` | columns with items, renderCard, and onChange with the updated columns; handle for cards with links. | Sortable.tsx |

### Charts

| Component | What it does | File |
| --- | --- | --- |
| `BarChart · LineChart · DonutChart` | The chart options become props; when they change, it updates. | Charts.tsx |
| `Heatmap · CalendarHeatmap · ScatterChart` | Matrix, a year calendar and scatter. | Charts.tsx |
| `StatTile · Sparkline · Meter` | The number with change, the trend line and the meter. | Charts.tsx |

### App shell and theme

| Component | What it does | File |
| --- | --- | --- |
| `AppShell` | Collapsing sidebar, drawer on phones and top bar; onNavigate hooks into your router. | AppShell.tsx |
| `ThemeToggle · useTheme` | The light and dark button and the theme in use. | AppShell.tsx |

## How it works

|   |   |
| --- | --- |
| A thin layer | Each component only builds Lume’s markup, with the same classes. The look comes from `lume.css`; fix it there, it’s fixed in React. |
| Your files | The .tsx files live in your project, as with shadcn: you can read, change, and delete what you don’t use. No npm. |
| TypeScript | Typed, commented props, with a link to each component’s page. `IconName` lists the 154 icons: a wrong name won’t compile. |
| Language | The text a component writes on its own ("Close", "Loading") follows Lume’s language and changes with `setLocale`. `useLocale()` does the same for yours. |
| Versions | The `react/` folder ships with every line: `/v/1.3/react/`. Updating means swapping the Lume folder for the new line’s. |

## What’s next

All 58 components are already in React.
