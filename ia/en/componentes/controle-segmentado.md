# Segmented control

Lume section: Components. Page: https://lumeui.dev/#/componentes/controle-segmentado

A few options side by side, always visible, with one selected. The change applies right away, as in the layout and calendar view selectors.

In numbers: height: 36 px · options: 2 – 4 · types: 2 · ARIA role: radiogroup.

## Example

```html
<div class="ds-segmented" role="radiogroup" aria-label="View">
  <button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Month</button>
  <button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Week</button>
  <button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Day</button>
</div>

<script type="module">
  import { createSegmented } from 'https://lumeui.dev/v/0.29/lume.js';
  createSegmented(document.querySelector('.ds-segmented'), {
    onChange: (value) => trocar(value),
  });
</script>
```

## Variants

With text, or icons only when the meaning is familiar. An icon alone needs a name and a tooltip.

With text `ds-segmented` — The clearest, for up to four short options.

With icons `aria-label` — Compact, with the name in the tooltip and for screen readers.

Markup of the examples in this section:

```html
<div class="ds-segmented" role="radiogroup" aria-label="View" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Month</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Week</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Day</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="Display" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="lista" aria-checked="true" aria-label="List" data-ds-tooltip="List"><ds-icon name="list"></ds-icon></button><button type="button" class="ds-segmented__item" role="radio" data-value="grade" aria-checked="false" aria-label="Grid" data-ds-tooltip="Grid"><ds-icon name="grid"></ds-icon></button>
</div>
```

## States

The chosen option rises with the field background; the others stay muted.

Markup of the examples in this section:

```html
<div class="ds-segmented" role="radiogroup" aria-label="View" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Month</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Week</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Day</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="View" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="false">Month</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="true">Week</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Day</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="View" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true" disabled="">Month</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false" disabled="">Week</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false" disabled="">Day</button>
</div>
```

## Accessibility

It works like a radio button group.

- One Tab stop — Tab — Tab enters the chosen option and leaves the group.
- Arrows change — ← → — Arrows move between options, wrapping around, and the choice applies right away.
- Group name — The group’s aria-label says what’s being chosen.
- Icon with a name — With no text, each option needs an aria-label.

## Tokens used

Everything the control consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.sunken (`--ds-color-bg-sunken`) | Track | #E8EDF3 | #151412 |
| color.bg.field (`--ds-color-bg-field`) | Chosen option | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Outlines | #3E516633 | #FFFFFF1A |
| color.fg.default (`--ds-color-fg-default`) | Chosen text | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Other options | #46586E | #CEC8C1 |
| radius.full (`--ds-radius-full`) | Corners | 9999 px | 9999 px |

## Usage

When to use it and when to prefer something else.

- **Do:** 2 to 4 options. Switching the view of the same content: month or week, list or grid.
- **Avoid:** many options. With five or more, or long text, use the Select.
- **Tip:** Tabs or segmented?. Tabs change the content; the segmented control changes how you see the same content.
