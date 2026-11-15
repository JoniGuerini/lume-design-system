# Badge

Lume section: Components. Page: https://lumeui.dev/#/componentes/badge

A short status or count label. Small, quiet, and always meaningful — never decoration.

In numbers: tones: 6 · sizes: 2 · height (md / sm): 24/20 · interactive: no.

## Example

```html
<span class="ds-badge ds-badge--success">
  <span class="ds-badge__dot"></span>
  Done
</span>
```

## Tones

The tone says the type of status. A soft background, strong text, and a thin outline — legible in both themes, without shouting.

Neutral `ds-badge` — A non-urgent state: draft, archived, planned. — Contrast 5.86:1 Lume light · 8.29:1 Lume dark

Brand `ds-badge--brand` — Rare. Something just added inside a list — never as a call to action. — Contrast 7.25:1 Lume light · 9.38:1 Lume dark

Success `ds-badge--success` — Completed, active, approved. — Contrast 6.33:1 Lume light · 8.33:1 Lume dark

Warning `ds-badge--warning` — Needs attention, but doesn’t block. — Contrast 6.43:1 Lume light · 8.99:1 Lume dark

Danger `ds-badge--danger` — An error or blocker that calls for action. — Contrast 5.02:1 Lume light · 7.93:1 Lume dark

Info `ds-badge--info` — Neutral context: beta, under review. — Contrast 4.56:1 Lume light · 8.19:1 Lume dark

Markup of the examples in this section:

```html
<span class="ds-badge">Draft</span>

<span class="ds-badge"><span class="ds-badge__dot"></span>Draft</span>

<span class="ds-badge ds-badge--sm">Draft</span>

<span class="ds-badge ds-badge--brand">New</span>

<span class="ds-badge ds-badge--brand"><span class="ds-badge__dot"></span>New</span>

<span class="ds-badge ds-badge--brand ds-badge--sm">New</span>

<span class="ds-badge ds-badge--success">Done</span>

<span class="ds-badge ds-badge--success"><span class="ds-badge__dot"></span>Done</span>
```

## Sizes

Medium next to regular text; small in tables, dense lists, and card headers.

Medium `default` — Height 24 px · text label-sm · 13 px

Small `ds-badge--sm` — Height 20 px · text caption · 12 px

Markup of the examples in this section:

```html
<span class="ds-badge ds-badge--success"><span class="ds-badge__dot"></span>Done</span>

<span class="ds-badge ds-badge--warning">In review</span>

<span class="ds-badge ds-badge--count">12</span>

<span class="ds-badge ds-badge--success ds-badge--sm"><span class="ds-badge__dot"></span>Done</span>

<span class="ds-badge ds-badge--warning ds-badge--sm">In review</span>

<span class="ds-badge ds-badge--sm ds-badge--count">12</span>
```

## Count

`ds-badge--count` centers the number and keeps a circle’s minimum width. Zero doesn’t show; above 99, show “99+”.

- Inbox — 12
- Comments — 99+
- Approvals — 3
- Archived — no badge

12 — exact number up to 99 — 99+ — above 99 — — — zero: no badge

## Where to use

A badge goes with something — a row, a title, an item. It’s never alone on the screen.

A list or table row — Each item’s status, always in the same column.

Rich text editor — Beta

Bold, lists, and links, with Markdown shortcuts.

Next to a title — Qualifies what’s written: beta, in testing.

A count on an item — How much there is to see, on the far right.

Markup of the examples in this section:

```html
<span class="ds-badge ds-badge--success ds-badge--sm">Done</span>

<span class="ds-badge ds-badge--warning ds-badge--sm">In review</span>

<span class="ds-badge ds-badge--sm">Planned</span>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3.5 13h5l1.5 2.5h4l1.5-2.5h5"></path><path d="M6 4.5h12l2.5 8.5v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V13z"></path></svg>

<span class="ds-badge ds-badge--sm ds-badge--count">3</span>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<span class="ds-badge ds-badge--brand ds-badge--sm ds-badge--count">99+</span>
```

## Accessibility

A badge is text. Treat it like text.

- Never color alone — The status is written out (“In review”). The dot and the tone only reinforce it.
- Contrast checked — Each tone’s text passes 4.5:1 on its own background — success: 6.33:1 in Lume light and 8.33:1 in Lume dark.
- Not interactive — A badge takes no clicks or focus. If it needs to filter or open something, use a chip, link, or button.
- A count with context — A bare “12” tells the screen reader nothing. Complete it with hidden text: “12 unread”.
- Changed? Announce it — When the status changes without a reload, put the message in an `aria-live="polite"` region.
- Truly short — One or two words. A whole sentence becomes regular text, not a badge.

## Tokens used

Each tone uses its status’s subtle / fg / border trio. Here, neutral and success as examples.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.selected (`--ds-color-bg-selected`) | Background (neutral) | #3E516612 | #C0CAD61A |
| color.fg.muted (`--ds-color-fg-muted`) | Text (neutral) | #46586E | #CEC8C1 |
| color.border.subtle (`--ds-color-border-subtle`) | Outline (neutral) | #3E516624 | #FFFFFF0F |
| color.success.subtle (`--ds-color-success-subtle`) | Background (success) | #EFFAF1 | #72CB8B21 |
| color.success.fg (`--ds-color-success-fg`) | Text (success) | #0F6939 | #97DCA8 |
| color.success.border (`--ds-color-success-border`) | Outline (success) | #BDEAC6 | #72CB8B4D |
| color.brand.subtle (`--ds-color-brand-subtle`) | Background (brand) | #EEF2F6 | #C0CAD624 |
| color.brand.fg (`--ds-color-brand-fg`) | Text (brand) | #3E5166 | #DAE0E8 |
| text.label-sm (`--ds-text-label-sm`) | Text (medium) | 13/18 · medium | 13/18 · medium |
| text.caption (`--ds-text-caption`) | Text (small) | 12/16 · regular | 12/16 · regular |
| radius.full (`--ds-radius-full`) | Pill shape | 9999 px | 9999 px |

## Usage

A badge is information. If it doesn’t inform, it isn’t a badge.

- **Do:** status and counts. Says the state of something or how much of it there is, in one or two words.
- **Avoid:** a decorative badge. A badge isn’t a call to action or hero decoration. News goes in the text or becomes a real link.
- **Tip:** One per row. More than one badge on the same item competes for attention. Pick the status that matters now.
