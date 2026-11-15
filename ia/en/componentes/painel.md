# Panel

Lume section: Components. Page: https://lumeui.dev/#/componentes/painel

The surface of a product task: label, title, controls, and content in airy sections. All flat — emphasis comes from hierarchy, not effects.

In numbers: parts: 7 · variations: 3 · radius: 28 px · primary action: 1.

## Example

```html
<article class="ds-panel" aria-labelledby="script-title">
  <header class="ds-panel__header">
    <div>
      <p class="ds-panel__eyebrow">Script</p>
      <h2 class="ds-panel__title" id="script-title">Launch script</h2>
    </div>
    <div class="ds-panel__actions">
      <button class="ds-icon-btn" aria-label="Close"><ds-icon name="x"></ds-icon></button>
    </div>
    <div class="ds-panel__aside">
      <button class="ds-btn ds-btn--ghost ds-btn--sm"><ds-icon name="star"></ds-icon>Examples</button>
    </div>
  </header>
  <div class="ds-panel__toolbar">
    <button class="ds-chip">Direct tone …</button>
    <span class="ds-panel__spacer"></span>
    <span class="ds-panel__meta">~3 min</span>
  </div>
  <div class="ds-panel__body">
    <section class="ds-section">
      <p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Opening</span></p>
      <p class="ds-section__text">…</p>
    </section>
  </div>
  <footer class="ds-panel__footer">
    <button class="ds-btn ds-btn--primary">Choose format</button>
  </footer>
</article>
```

## Anatomy

Seven parts, always in the same order. Anyone who has seen one panel can read any other.

- 1 — Label — The content type, faded: “Script”, “Order”, “Review”. — `text.eyebrow · fg.subtle`
- 2 — Title — The subject, with tight tracking. One per panel. — `text.heading-lg`
- 3 — Icon actions — Close, duplicate, expand — no background, always named. — `ds-icon-btn`
- 4 — Aside — A secondary ghost action, like “Examples”. — `ds-btn--ghost`
- 5 — Control bar — Chips that adjust the content; the meta sits on the right. — `ds-chip · ds-panel__meta`
- 6 — Section — Stamp + label, airy text, and inline actions. — `ds-section`
- 7 — Footer — The panel’s main action. Just one. — `ds-btn--primary`

Markup of the examples in this section:

```html
<article class="ds-panel ds-panel--compact">
<header class="ds-panel__header">
<div>
<p class="ds-panel__eyebrow"><span>Script</span></p>
<p class="ds-panel__title"><span>Launch script</span></p>
</div>
<div class="ds-panel__actions"><span class="ds-icon-btn"><ds-icon name="stack"></ds-icon></span><span class="ds-icon-btn"><ds-icon name="x"></ds-icon></span></div>
<div class="ds-panel__aside"><span class="ds-btn ds-btn--ghost ds-btn--sm"><ds-icon name="star"></ds-icon>Examples</span></div>
</header>
<div class="ds-panel__toolbar">
<span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="pencil"></ds-icon></span>Direct tone<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></span>
<span class="ds-panel__spacer"></span>
<span class="ds-panel__meta">~3 min</span>
</div>
<div class="ds-panel__body">
<section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Opening</span></p>
<p class="ds-section__text">Start with the reader’s problem.</p>
<div class="ds-section__actions"><span class="ds-inline-action"><ds-icon name="video"></ds-icon>In the scene<ds-icon name="plus"></ds-icon></span></div>
</section>
</div>
<footer class="ds-panel__footer"><span class="ds-btn ds-btn--primary"><ds-icon name="video"></ds-icon>Choose format</span></footer>
</article>
```

## Sections

The stamp gives the content order. Use numbers for steps, times for scripts, and just the label when order doesn’t matter.

01 — Context

02 — Proposal

Numbered — Steps and decision lists.

00s — Open with the situation

14s — Introduce the product

Timed — Scripts, videos, and schedules.

Notes

Attachments

Label only — Unordered blocks: notes, details.

## Variations

One structure, three ways to fit on the screen.

Default `ds-panel`

The screen’s main task, with a shadow and a raised background.

Compact `ds-panel--compact`

Drawers, side panels, and smaller spaces.

Flat `ds-panel--flat`

Inside another surface — no shadow of its own.

Markup of the examples in this section:

```html
<article class="ds-panel " aria-label="Launch script">
<header class="ds-panel__header">
<div>
<p class="ds-panel__eyebrow">Script</p>
<h3 class="ds-panel__title">Launch script</h3>
</div>
<div class="ds-panel__actions"><button type="button" class="ds-icon-btn" aria-label="Duplicate"><ds-icon name="stack"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Close"><ds-icon name="x"></ds-icon></button></div>
</header>
<div class="ds-panel__body">
<section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Opening</span></p>
<p class="ds-section__text">Start with the reader’s problem: what’s stuck today and why it matters now.</p>
<div class="ds-section__actions"><button type="button" class="ds-inline-action"><ds-icon name="video"></ds-icon>In the scene<ds-icon name="plus"></ds-icon></button></div>
</section><section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">01</span><span>Proposal</span></p>
<p class="ds-section__text">Show the path in one sentence. Details come later, once the person knows where they’re headed.</p>
<div class="ds-section__actions"><button type="button" class="ds-inline-action"><ds-icon name="file-text"></ds-icon>References<ds-icon name="plus"></ds-icon></button></div>
</section>
</div>
</article>

<article class="ds-panel ds-panel--compact" aria-label="Launch script">
<header class="ds-panel__header">
<div>
<p class="ds-panel__eyebrow">Script</p>
<h3 class="ds-panel__title">Launch script</h3>
</div>
<div class="ds-panel__actions"><button type="button" class="ds-icon-btn" aria-label="Duplicate"><ds-icon name="stack"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Close"><ds-icon name="x"></ds-icon></button></div>
</header>
<div class="ds-panel__body">
<section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Opening</span></p>
<p class="ds-section__text">Start with the reader’s problem: what’s stuck today and why it matters now.</p>
<div class="ds-section__actions"><button type="button" class="ds-inline-action"><ds-icon name="video"></ds-icon>In the scene<ds-icon name="plus"></ds-icon></button></div>
</section>
</div>
</article>

<article class="ds-panel ds-panel--compact ds-panel--flat" aria-label="Launch script">
<header class="ds-panel__header">
<div>
<p class="ds-panel__eyebrow">Script</p>
<h3 class="ds-panel__title">Launch script</h3>
</div>
<div class="ds-panel__actions"><button type="button" class="ds-icon-btn" aria-label="Duplicate"><ds-icon name="stack"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Close"><ds-icon name="x"></ds-icon></button></div>
</header>
<div class="ds-panel__body">
<section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Opening</span></p>
<p class="ds-section__text">Start with the reader’s problem: what’s stuck today and why it matters now.</p>
<div class="ds-section__actions"><button type="button" class="ds-inline-action"><ds-icon name="video"></ds-icon>In the scene<ds-icon name="plus"></ds-icon></button></div>
</section>
</div>
</article>
```

## Panel or card?

Both are surfaces, but they solve different things.

### Panel

- A whole task: read, adjust, and decide.
- Has controls, sections, and one main action.
- Usually one per screen or per drawer.

### Card

- One item from a collection: a summary to open.
- Clickable as a whole, with no controls of its own.
- Appears in a grid or list, several per screen.

## Accessibility

The panel’s visual order is already the reading order. Keep it that way.

- A named region — Use `<article aria-labelledby>` pointing to the title.
- Title at the right level — The title is a real heading (h2 on a page, h1 in a modal). The faded label is just text.
- Named icon actions — Close, duplicate, and expand get an `aria-label` and a hint with the same text.
- Reading order — Header → controls → sections → action. Don’t reorder with CSS.
- Keyboard controls — ↑ ↓ Esc — Chips open menus you can navigate with arrows; Esc closes and returns focus.
- Stamps are content — “00 · Opening” is read in order. Don’t use the stamp as the only sequence cue in long lists — number the text too.

## Tokens used

The panel has no color of its own: everything comes from surface, text, and space.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Background | #FFFFFF | #2C2A27 |
| color.border.subtle (`--ds-color-border-subtle`) | Outline | #3E516624 | #FFFFFF0F |
| radius.2xl (`--ds-radius-2xl`) | Radius | 28 px | 28 px |
| shadow.lg (`--ds-shadow-lg`) | Shadow | 0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14) | 0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5) |
| space.600 (`--ds-space-600`) | Side and bottom padding | 48 px | 48 px |
| space.400 (`--ds-space-400`) | Between header, controls, and content | 32 px | 32 px |
| space.500 (`--ds-space-500`) | Between sections | 40 px | 40 px |
| text.eyebrow (`--ds-text-eyebrow`) | Label | 13/18 · medium | 13/18 · medium |
| text.heading-lg (`--ds-text-heading-lg`) | Title | 26/32 · regular | 26/32 · regular |
| text.display-sm (`--ds-text-display-sm`) | Hero title | 40/44 · regular | 40/44 · regular |
| text.caption (`--ds-text-caption`) | Stamp | 12/16 · regular | 12/16 · regular |
| text.body-md (`--ds-text-body-md`) | Section text | 16/28 · regular | 16/28 · regular |
| color.fg.subtle (`--ds-color-fg-subtle`) | Label, stamp, and meta | #53657A | #9C9792 |

## Usage

The panel is for product screens — not for whole pages.

- **Do:** one task per panel. A script, an order, a review. If the screen has two tasks, that’s two panels — or a panel and a drawer.
- **Avoid:** a panel as a page. Home, landing pages, and docs have their own layouts. Cramming everything into a panel turns it into a block of text with no page hierarchy.
- **Tip:** One action in the footer. The primary closes the task. Supporting actions go in the aside or in the sections’ inline actions.
