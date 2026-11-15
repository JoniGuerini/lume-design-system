# Tooltip

Lume section: Components. Page: https://lumeui.dev/#/componentes/tooltip

A short hint that appears on hover or focus. It names icons and shows shortcuts — it never holds information people need to move on.

In numbers: placements: 4 · delay: 450 ms · max width: 240 px · JavaScript: 0 lines.

## Example

```html
<button type="button" class="ds-icon-btn" aria-label="Search"
  data-ds-tooltip="Search"
  data-ds-tooltip-kbd="Ctrl K">
  <ds-icon name="search"></ds-icon>
</button>
```

## Placements

Top is the default. Pick another when the tooltip would cover something important or the trigger sits on an edge — near the screen limit, it adjusts on its own.

Hover here

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Tooltip on top" data-ds-tooltip="Top" data-ds-tooltip-placement="top"><ds-icon name="arrow-up"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Tooltip on the right" data-ds-tooltip="Right" data-ds-tooltip-placement="right"><ds-icon name="arrow-right"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Tooltip at the bottom" data-ds-tooltip="Bottom" data-ds-tooltip-placement="bottom"><ds-icon name="chevron-down"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Tooltip on the left" data-ds-tooltip="Left" data-ds-tooltip-placement="left"><ds-icon name="arrow-left"></ds-icon></button>
```

## With a shortcut

The best place to teach a shortcut is the action’s tooltip. Use `data-ds-tooltip-kbd`.

Search `Ctrl K`

Collapse menu `Ctrl B`

Close `Esc`

Markup of the examples in this section:

```html
<span class="ds-tooltip" data-open="">Search<kbd class="ds-kbd">Ctrl K</kbd></span>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Search" data-ds-tooltip="Search" data-ds-tooltip-placement="top" data-ds-tooltip-kbd="Ctrl K"><ds-icon name="search"></ds-icon></button>

<span class="ds-tooltip" data-open="">Collapse menu<kbd class="ds-kbd">Ctrl B</kbd></span>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Collapse menu" data-ds-tooltip="Collapse menu" data-ds-tooltip-placement="top" data-ds-tooltip-kbd="Ctrl B"><ds-icon name="panel-left"></ds-icon></button>

<span class="ds-tooltip" data-open="">Close<kbd class="ds-kbd">Esc</kbd></span>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Close" data-ds-tooltip="Close" data-ds-tooltip-placement="top" data-ds-tooltip-kbd="Esc"><ds-icon name="x"></ds-icon></button>
```

## Behavior

A short delay keeps tooltips from flickering when the pointer just passes by. After the first one, the next ones show right away.

Try it: rest on the first one and slide to the others.

- On keyboard focus it shows right away, no delay.
- It hides on leave, click, page scroll, or Esc.
- It doesn’t show on touch — so nothing essential can depend on it.
- One tooltip at a time: there’s a single element on the page, repositioned for each trigger.

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn" aria-label="Home" data-ds-tooltip="Home" data-ds-tooltip-placement="bottom"><ds-icon name="home"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Search" data-ds-tooltip="Search" data-ds-tooltip-placement="bottom"><ds-icon name="search"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Notifications" data-ds-tooltip="Notifications" data-ds-tooltip-placement="bottom"><ds-icon name="bell"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Calendar" data-ds-tooltip="Calendar" data-ds-tooltip-placement="bottom"><ds-icon name="calendar"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Settings" data-ds-tooltip="Settings" data-ds-tooltip-placement="bottom"><ds-icon name="settings"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Your account" data-ds-tooltip="Your account" data-ds-tooltip-placement="bottom"><ds-icon name="user-circle"></ds-icon></button>
```

## When not to use

If people need the information to continue, it can’t be hidden.

Essential information — Password rules, deadlines, prices: write them on screen, near the field.

Interactive content — Links or buttons inside the tooltip can’t be reached. Use a menu or a panel.

Long text — More than one short line becomes reading. Up to ~240 px; beyond that, it’s page text.

Disabled element — A disabled button gets no focus or hover — the tooltip never shows. Explain the reason beside it.

Markup of the examples in this section:

```html
<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>
```

## Accessibility

The tooltip complements — the accessible name always comes from the element itself.

- Name on the element — An icon button gets an `aria-label` with the same text as the tooltip. The tooltip itself is `aria-hidden`, so it isn’t read twice.
- Keyboard — Tab Esc — It shows on visible focus and hides with Esc, without moving focus.
- Persistent — It stays visible while the pointer is on the trigger or it has focus.
- Terms in text — A term with a tooltip needs `tabindex="0"` to be reachable by keyboard.
- Contrast — Default text on the raised surface: above 4.5:1 in both themes.
- Turn off by region — Use `data-ds-tooltips="off"` on an ancestor when the label is already visible — like in the expanded sidebar.

## Tokens used

A small, raised surface above everything else.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Background | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Border | #3E516633 | #FFFFFF1A |
| color.fg.default (`--ds-color-fg-default`) | Text | #2B3847 | #F3EDE5 |
| shadow.lg (`--ds-shadow-lg`) | Shadow | 0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14) | 0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5) |
| radius.sm (`--ds-radius-sm`) | Radius | 8 px | 8 px |
| text.label-sm (`--ds-text-label-sm`) | Text | 13/18 · medium | 13/18 · medium |
| duration.fast (`--ds-duration-fast`) | Enter and exit | 120ms | 120ms |
| z.tooltip (`--ds-z-tooltip`) | Layer (the highest) | 1600 | 1600 |

## Usage

Short, useful, and only when the element doesn’t speak for itself.

- **Do:** name icons. Two or three words saying what the button does.
- **Avoid:** repeating the label. If the text is already visible, the tooltip only gets in the way.
- **Tip:** Show the shortcut. On a labeled button, a tooltip is worth it when it teaches something new — like the shortcut.
