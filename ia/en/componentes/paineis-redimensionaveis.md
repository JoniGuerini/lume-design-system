# Resizable panels

Lume section: Components. Page: https://lumeui.dev/#/componentes/paineis-redimensionaveis

Splits an area into parts people adjust by dragging the divider. Use it when everyone reads differently: a list next to the content, the preview above the code.

In numbers: directions: 2 · line: 1 px · grab area: 9 px · keys: 5.

## Example

```html
<div class="ds-resizable" aria-label="Editor">
  <div class="ds-resizable__panel" data-size="30" data-min="20">…</div>
  <div class="ds-resizable__panel" data-min="30">…</div>
</div>

<script type="module">
  import { createResizable } from 'https://lumeui.dev/v/1.4/lume.js';
  createResizable(document.querySelector('.ds-resizable'), {
    storageKey: 'editor', // keeps the size in the browser
  });
</script>
```

## Variants

Side by side or one above the other, with `data-direction`. A panel can hold others inside.

Side by side `ds-resizable` — The list with a minimum size; the content takes the rest.

Stacked `data-direction="vertical"` — The preview on top and the code below.

Nested, with grip and collapsible `ds-resizable--grip · data-collapsible` — The list closes when dragged all the way or with Enter on the divider. The visible grip helps when dragging isn’t obvious.

Markup of the examples in this section:

```html
<div class="ds-resizable" data-demo="horizontal" aria-label="Components and preview" data-direction="horizontal"><div class="ds-resizable__panel" data-size="32" data-min="22" data-max="50" id="ds-resizable-panel-2"><div>
<p>00 · Components</p>
<ul role="list"><li>Button</li><li>Input</li><li>Select</li><li>Carousel</li><li>Color picker</li><li>Panels</li></ul>
</div></div><div class="ds-resizable__handle" role="separator" aria-orientation="vertical" aria-controls="ds-resizable-panel-2" data-index="0" aria-valuenow="32" aria-valuemin="22" aria-valuemax="50" aria-label="Resize panels"><span class="ds-resizable__grip" aria-hidden="true"></span></div><div class="ds-resizable__panel" data-min="35"><div>
<p>01 · Preview</p>
<div>
<button type="button" class="ds-btn ds-btn--primary">Save</button>
<button type="button" class="ds-btn ds-btn--secondary">Cancel</button>
</div>
</div></div></div>

<div class="ds-resizable" data-direction="vertical" data-demo="vertical" aria-label="Preview and code"><div class="ds-resizable__panel" data-min="30" id="ds-resizable-panel-3"><div>
<p>01 · Preview</p>
<div>
<button type="button" class="ds-btn ds-btn--primary">Save</button>
<button type="button" class="ds-btn ds-btn--secondary">Cancel</button>
</div>
</div></div><div class="ds-resizable__handle" role="separator" aria-orientation="horizontal" aria-controls="ds-resizable-panel-3" data-index="0" aria-valuenow="55" aria-valuemin="30" aria-valuemax="75" aria-label="Resize panels"><span class="ds-resizable__grip" aria-hidden="true"></span></div><div class="ds-resizable__panel" data-size="45" data-min="25"><div>
<p>02 · Code</p>
<pre>&lt;button class="ds-btn ds-btn--primary"&gt; Save &lt;/button&gt;</pre>
</div></div></div>

<div class="ds-resizable ds-resizable--grip" data-demo="nested" aria-label="Editor" data-direction="horizontal"><div class="ds-resizable__panel" data-size="28" data-min="20" data-max="45" data-collapsible="" id="ds-resizable-panel-5"><div>
<p>00 · Components</p>
<ul role="list"><li>Button</li><li>Input</li><li>Select</li><li>Carousel</li><li>Color picker</li><li>Panels</li></ul>
</div></div><div class="ds-resizable__handle" role="separator" aria-orientation="vertical" aria-controls="ds-resizable-panel-5" data-index="0" aria-valuenow="28" aria-valuemin="0" aria-valuemax="45" aria-label="Resize panels"><span class="ds-resizable__grip" aria-hidden="true"></span></div><div class="ds-resizable__panel" data-min="40"><div class="ds-resizable ds-resizable--grip" data-direction="vertical" data-demo="nested-inner" aria-label="Preview and code"><div class="ds-resizable__panel" data-min="30" id="ds-resizable-panel-4"><div>
<p>01 · Preview</p>
<div>
<button type="button" class="ds-btn ds-btn--primary">Save</button>
<button type="button" class="ds-btn ds-btn--secondary">Cancel</button>
</div>
</div></div><div class="ds-resizable__handle" role="separator" aria-orientation="horizontal" aria-controls="ds-resizable-panel-4" data-index="0" aria-valuenow="55" aria-valuemin="30" aria-valuemax="75" aria-label="Resize panels"><span class="ds-resizable__grip" aria-hidden="true"></span></div><div class="ds-resizable__panel" data-size="45" data-min="25"><div>
<p>02 · Code</p>
<pre>&lt;button class="ds-btn ds-btn--primary"&gt; Save &lt;/button&gt;</pre>
</div></div></div></div></div>
```

## States

The line thickens on hover and takes the indicator color while dragging. Keyboard focus outlines the whole grab area.

Markup of the examples in this section:

```html
<div class="ds-resizable" data-direction="horizontal">
<div class="ds-resizable__panel"></div>
<div class="ds-resizable__handle" role="separator" aria-orientation="vertical" aria-valuenow="40"><span class="ds-resizable__grip" aria-hidden="true"></span></div>
<div class="ds-resizable__panel"></div>
</div>
```

## Code

The panels are yours; JavaScript puts the dividers between them. Limits in % (`data-min="20"`) or px (`data-min="240px"`).

```html
<div class="ds-resizable" aria-label="Editor">
  <div class="ds-resizable__panel" data-size="30" data-min="20" data-collapsible>…</div>
  <div class="ds-resizable__panel" data-min="30">…</div>
</div>

<script type="module">
  import { createResizable } from 'https://lumeui.dev/v/1.4/lume.js';
  createResizable(document.querySelector('.ds-resizable'), {
    storageKey: 'editor', // keeps the size in the browser
  });
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

It follows the ARIA movable separator pattern (window splitter).

- Name and role — Each divider is a focusable separator that says the size of the panel before it, as a percentage.
- Keyboard — ← → Home End Enter — Arrow keys change the size (faster with Shift), Home and End go to the limits, and Enter closes and opens a collapsible panel.
- Closed panel — It becomes inert: Tab never lands on what isn’t in view.
- Grab area — The line is 1 px, but the grab area is 9 px, so mouse and finger can hit it.

## Tokens used

Everything the panels consume.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.border.default (`--ds-color-border-default`) | Divider line and grip outline | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Line on hover | #3E51664D | #FFFFFF29 |
| color.brand.indicator (`--ds-color-brand-indicator`) | Line while dragging | #C97B63 | #DE9680 |
| color.border.focus (`--ds-color-border-focus`) | Keyboard focus | #53657A | #C0CAD6 |
| color.bg.raised (`--ds-color-bg-raised`) | Grip background | #FFFFFF | #2C2A27 |
| radius.sm (`--ds-radius-sm`) | Focus corners | 8 px | 8 px |

## Usage

When to use it and when to prefer something else.

- **Do:** always set a minimum. Without a minimum, a panel turns into a sliver nobody can use.
- **Avoid:** on phones. On narrow screens, stack the parts or use tabs: dragging a thin line with a finger is hard.
- **Tip:** Keep the size. With storageKey, people adjust it once and find it the same on the next visit.
