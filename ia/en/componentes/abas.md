# Tabs

Lume section: Components. Page: https://lumeui.dev/#/componentes/abas

Switch between views of the same subject without leaving the page. One active tab at a time, always with its panel right below.

In numbers: appearances: 2 · sizes: 2 · activation modes: 2 · keyboard shortcuts: 4.

## Example

```html
<div class="ds-tabs" data-ds-tabs>
  <div class="ds-tabs__list" role="tablist" aria-label="Project">
    <button type="button" class="ds-tabs__tab" role="tab" id="tab-geral" aria-controls="panel-geral" aria-selected="true">
      Overview
    </button>
    <button type="button" class="ds-tabs__tab" role="tab" id="tab-atividade" aria-controls="panel-atividade" aria-selected="false">
      Activity
      <span class="ds-tabs__count">12</span>
    </button>
    <button type="button" class="ds-tabs__tab" role="tab" id="tab-arquivos" aria-controls="panel-arquivos" aria-selected="false">
      Files
      <span class="ds-tabs__count">3</span>
    </button>
    <button type="button" class="ds-tabs__tab" role="tab" id="tab-ajustes" aria-controls="panel-ajustes" aria-selected="false">
      Settings
    </button>
  </div>
  <div class="ds-tabs__panel" role="tabpanel" id="panel-geral" aria-labelledby="tab-geral">…</div>
  <div class="ds-tabs__panel" role="tabpanel" id="panel-atividade" aria-labelledby="tab-atividade" hidden>…</div>
  <div class="ds-tabs__panel" role="tabpanel" id="panel-arquivos" aria-labelledby="tab-arquivos" hidden>…</div>
  <div class="ds-tabs__panel" role="tabpanel" id="panel-ajustes" aria-labelledby="tab-ajustes" hidden>…</div>
</div>
```

## Appearances

Underline organizes content sections; segmented switches the view of the same thing. Both come in medium and small.

Underline `ds-tabs` — For sections of the same object — profile, project, settings. It sits at the top of the content, left-aligned.

Segmented `ds-tabs--segmented` — For switching the view of the same set — list, board, calendar. Two to four short options.

Markup of the examples in this section:

```html
<div class="ds-tabs ds-tabs--segmented" data-ds-tabs="">
<div class="ds-tabs__list" role="tablist" aria-label="View">
<button type="button" class="ds-tabs__tab" role="tab" id="ap-s-tab-lista" aria-controls="ap-s-panel-lista" aria-selected="true">
<ds-icon name="list"></ds-icon><span>List</span>
</button><button type="button" class="ds-tabs__tab" role="tab" id="ap-s-tab-quadro" aria-controls="ap-s-panel-quadro" aria-selected="false">
<ds-icon name="layout"></ds-icon><span>Board</span>
</button><button type="button" class="ds-tabs__tab" role="tab" id="ap-s-tab-agenda" aria-controls="ap-s-panel-agenda" aria-selected="false">
<ds-icon name="calendar"></ds-icon><span>Calendar</span>
</button>
</div>
<div class="ds-tabs__panel" role="tabpanel" id="ap-s-panel-lista" aria-labelledby="ap-s-tab-lista"><div>
<p>List</p>
<p>Items in rows, good for comparing details.</p>
</div></div><div class="ds-tabs__panel" role="tabpanel" id="ap-s-panel-quadro" aria-labelledby="ap-s-tab-quadro" hidden=""><div>
<p>Board</p>
<p>Items in columns by status, good for following the flow.</p>
</div></div><div class="ds-tabs__panel" role="tabpanel" id="ap-s-panel-agenda" aria-labelledby="ap-s-tab-agenda" hidden=""><div>
<p>Calendar</p>
<p>Items on the calendar, good for deadlines.</p>
</div></div>
</div>
```

## States

Hover and focus can be forced with `data-state`.

Markup of the examples in this section:

```html
<div class="ds-tabs"><div class="ds-tabs__list"><button type="button" class="ds-tabs__tab">Script</button></div></div>

<div class="ds-tabs"><div class="ds-tabs__list"><button type="button" class="ds-tabs__tab" aria-selected="true">Script</button></div></div>

<div class="ds-tabs"><div class="ds-tabs__list"><button type="button" class="ds-tabs__tab" disabled="">Script</button></div></div>
```

## Anatomy

Four parts. Each tab points to its panel, and the panel points back.

- 1 — Tab list — `role="tablist"` with a name (`aria-label`). Scrolls horizontally when it doesn’t fit.
- 2 — Active tab — Text in `fg.default` and a 2 px indicator in the brand color. The others use `fg.subtle`.
- 3 — Count optional — A short number for what’s inside. No status color — it isn’t an alert.
- 4 — Panel — `role="tabpanel"`, focusable, right below the list. Only the active panel shows.

Markup of the examples in this section:

```html
<div class="ds-tabs" data-anatomy="">
<div class="ds-tabs__list">
<span class="ds-tabs__tab" aria-selected="true">Overview</span>
<span class="ds-tabs__tab">Activity <span class="ds-tabs__count">12</span></span>
<span class="ds-tabs__tab">Files</span>
</div>
<div class="ds-tabs__panel"><div>
<p>Overview</p>
<p>Project summary, owners, and next steps.</p>
</div></div>
</div>
```

## Behavior

With automatic activation, the arrows switch the panel right away. With manual, the arrows only move focus — use it when opening a panel is expensive (search, loading).

Automatic `default` — Focus a tab and use ← →: the panel switches along.

Manual `data-activation="manual"` — The arrows move focus; Enter or Space activate.

### Keyboard

|   |   |
| --- | --- |
| Tab | Enters the active tab. Tab again moves to the panel. |
| ← → | Previous or next tab. At the end, wraps to the start. |
| Home End | First or last tab. |
| Enter Space | Activates the focused tab — manual mode only. |

### In code

```html
import { mountTabs } from 'https://lumeui.dev/v/0.37/lume.js';

// wires every [data-ds-tabs] on the page — including ones added later
const unmount = mountTabs(document);

document.addEventListener('ds:tabchange', (event) => {
  console.log(event.detail.id); // active tab id
});
```

Markup of the examples in this section:

```html
<div class="ds-tabs ds-tabs--sm" data-ds-tabs="">
<div class="ds-tabs__list" role="tablist" aria-label="Project">
<button type="button" class="ds-tabs__tab" role="tab" id="md-a-tab-geral" aria-controls="md-a-panel-geral" aria-selected="true">
<span>Overview</span>
</button><button type="button" class="ds-tabs__tab" role="tab" id="md-a-tab-atividade" aria-controls="md-a-panel-atividade" aria-selected="false">
<span>Activity</span>
</button><button type="button" class="ds-tabs__tab" role="tab" id="md-a-tab-arquivos" aria-controls="md-a-panel-arquivos" aria-selected="false">
<span>Files</span>
</button><button type="button" class="ds-tabs__tab" role="tab" id="md-a-tab-ajustes" aria-controls="md-a-panel-ajustes" aria-selected="false">
<span>Settings</span>
</button>
</div>
<div class="ds-tabs__panel" role="tabpanel" id="md-a-panel-geral" aria-labelledby="md-a-tab-geral"><div>
<p>Overview</p>
<p>Project summary, owners, and next steps.</p>
</div></div><div class="ds-tabs__panel" role="tabpanel" id="md-a-panel-atividade" aria-labelledby="md-a-tab-atividade" hidden=""><div>
<p>Activity</p>
<p>12 updates since yesterday: reviews, comments, and releases.</p>
</div></div><div class="ds-tabs__panel" role="tabpanel" id="md-a-panel-arquivos" aria-labelledby="md-a-tab-arquivos" hidden=""><div>
<p>Files</p>
<p>Three attached files: script, palette, and spec.</p>
</div></div><div class="ds-tabs__panel" role="tabpanel" id="md-a-panel-ajustes" aria-labelledby="md-a-tab-ajustes" hidden=""><div>
<p>Settings</p>
<p>Project permissions, notifications, and integrations.</p>
</div></div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

The script handles states and the keyboard. The right markup is up to you.

- Roles and links — `tablist` → `tab` with `aria-controls`; the `tabpanel` answers with `aria-labelledby`.
- One tab stop — ← → — Only the active tab takes Tab (roving `tabindex`). The others are reached with the arrows.
- Announced state — `aria-selected` says which one is active; the screen reader reads “tab, 2 of 4, selected”.
- Focusable panel — The panel gets `tabindex="0"` so Tab users reach the content, even without links.
- List name — Give the tablist an `aria-label` (“Project”, “View”) to tell sets apart.
- Tabs aren’t navigation — To go to another page, use links. Tabs switch content within the same page.

## Tokens used

Everything the tabs consume.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| size.control.compact (`--ds-size-control-compact`) | Tab height (medium) | 36 px | 36 px |
| size.control.sm (`--ds-size-control-sm`) | Tab height (small) | 32 px | 32 px |
| text.label-md (`--ds-text-label-md`) | Label | 14/20 · medium | 14/20 · medium |
| color.fg.subtle (`--ds-color-fg-subtle`) | Inactive tab | #5C6C7F | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Active tab | #2B3847 | #F3EDE5 |
| color.brand.solid (`--ds-color-brand-solid`) | Active tab indicator | #3E5166 | #C0CAD6 |
| color.border.subtle (`--ds-color-border-subtle`) | Baseline | #3E516624 | #FFFFFF0F |
| color.bg.hover (`--ds-color-bg-hover`) | Hover | #3E51660D | #FFFFFF0D |
| color.bg.sunken (`--ds-color-bg-sunken`) | Segmented track | #E8EDF3 | #151412 |
| color.bg.muted (`--ds-color-bg-muted`) | Segmented active tab | #DAE0E8 | #3D3B38 |
| color.bg.selected (`--ds-color-bg-selected`) | Count background | #3E516612 | #C0CAD61A |
| radius.full (`--ds-radius-full`) | Segmented and count | 9999 px | 9999 px |
| duration.fast (`--ds-duration-fast`) | Color transition | 120ms | 120ms |

## Usage

Three rules for tabs that don’t confuse.

- **Do:** short, parallel labels. Nouns of one or two words, two to six tabs.
- **Avoid:** tabs as steps. Tabs have no order. For a step-by-step flow, use steps with “Continue”.
- **Tip:** Remember the active tab. If it makes sense to share or come back to the same view, keep the tab in the URL or the session.
