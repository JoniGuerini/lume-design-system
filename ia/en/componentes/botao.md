# Button

Lume section: Components. Page: https://lumeui.dev/#/componentes/botao

Triggers an action. Flat and direct: color goes to the main action, the rest leans on outlines and transparency.

In numbers: variants: 5 · sizes: 3 · states: 5 · primary contrast: 7.80:1.

## Example

```html
<button type="button" class="ds-btn ds-btn--primary">
  <ds-icon name="pencil"></ds-icon>
  Create component
</button>
```

## Variants

The variant says how much weight the action carries. The more important, the more color — and only one action gets the brand color.

Primary `ds-btn--primary` — The screen’s main action. One at a time.

Secondary `ds-btn--secondary` — An alternative to the main one: cancel, go back, supporting actions.

Ghost `ds-btn--ghost` — Quiet actions in bars, headers, and lists.

Subtle `ds-btn--subtle` — Support with a bit more presence than ghost.

Danger `ds-btn--danger` — Destructive, irreversible actions — always with confirmation.

Markup of the examples in this section:

```html
<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="pencil"></ds-icon>Create</button>

<button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="pencil"></ds-icon>Create</button>

<button type="button" class="ds-btn ds-btn--ghost"><ds-icon name="pencil"></ds-icon>Create</button>

<button type="button" class="ds-btn ds-btn--subtle"><ds-icon name="pencil"></ds-icon>Create</button>

<button type="button" class="ds-btn ds-btn--danger">Delete</button>
```

## Sizes

Medium is the default. Small for dense bars and tables; large for calls to action and touch screens.

- Size: Small
- Height: size.control.sm · 32 px
- Padding: 12 px
- Text: text.label-sm
- Radius: radius.sm · 8 px
- Class: ds-btn--sm

- Size: Medium default
- Height: size.control.md · 40 px
- Padding: 16 px
- Text: text.label-md
- Radius: radius.md · 12 px
- Class: —

- Size: Large
- Height: size.control.lg · 48 px
- Padding: 20 px
- Text: text.label-lg
- Radius: radius.md · 12 px
- Class: ds-btn--lg

Markup of the examples in this section:

```html
<button type="button" class="ds-btn ds-btn--primary ds-btn--sm"><ds-icon name="pencil"></ds-icon>Create</button>

<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="pencil"></ds-icon>Create</button>

<button type="button" class="ds-btn ds-btn--primary ds-btn--lg"><ds-icon name="pencil"></ds-icon>Create</button>
```

## States

Every variant reacts the same way: hover lightens or highlights, pressed darkens, focus gets the ring. To document and test, force a state with `data-state`.

Markup of the examples in this section:

```html
<button type="button" class="ds-btn ds-btn--primary">Save</button>

<button type="button" class="ds-btn ds-btn--primary" disabled="">Save</button>

<button type="button" class="ds-btn ds-btn--secondary">Save</button>

<button type="button" class="ds-btn ds-btn--secondary" disabled="">Save</button>

<button type="button" class="ds-btn ds-btn--ghost">Save</button>

<button type="button" class="ds-btn ds-btn--ghost" disabled="">Save</button>

<button type="button" class="ds-btn ds-btn--subtle">Save</button>

<button type="button" class="ds-btn ds-btn--subtle" disabled="">Save</button>
```

## Anatomy

Three parts. The icon is optional; the label never is — except in the icon button.

- 1 — Container — Height `size.control.*`, radius `radius.md`, side padding from 12 to 20 px. A 1 px border is always there (transparent when hidden), so sizes don’t shift.
- 2 — Icon optional — 16 to 20 px, 8 px from the label, inheriting its color. On the left for actions; on the right only for “next”.
- 3 — Label — `text.label-*` style, on a single line. Start with a verb: “Save changes”, not “OK”.

Markup of the examples in this section:

```html
<span class="ds-btn ds-btn--primary ds-btn--lg">
<span><ds-icon name="pencil"></ds-icon></span>
<span>Create component</span>
</span>
```

## Icon button

For actions recognizable without text — close, search, more options. No background by default; hover to see the hint.

Default `ds-icon-btn`

Muted `ds-icon-btn--muted`

Outline `ds-icon-btn--outline`

Subtle `ds-icon-btn--subtle`

Round `ds-icon-btn--round`

```html
<button type="button" class="ds-icon-btn" aria-label="Close" data-ds-tooltip="Close">
  <ds-icon name="x"></ds-icon>
</button>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm" aria-label="Close" data-ds-tooltip="Close" data-ds-tooltip-placement="bottom"><ds-icon name="x"></ds-icon></button>

<button type="button" class="ds-icon-btn " aria-label="Close" data-ds-tooltip="Close" data-ds-tooltip-placement="bottom"><ds-icon name="x"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--lg" aria-label="Close" data-ds-tooltip="Close" data-ds-tooltip-placement="bottom"><ds-icon name="x"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted ds-icon-btn--sm" aria-label="More options" data-ds-tooltip="More options" data-ds-tooltip-placement="bottom"><ds-icon name="more-horizontal"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted " aria-label="More options" data-ds-tooltip="More options" data-ds-tooltip-placement="bottom"><ds-icon name="more-horizontal"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted ds-icon-btn--lg" aria-label="More options" data-ds-tooltip="More options" data-ds-tooltip-placement="bottom"><ds-icon name="more-horizontal"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline ds-icon-btn--sm" aria-label="Collapse menu" data-ds-tooltip="Collapse menu" data-ds-tooltip-placement="bottom"><ds-icon name="panel-left"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline " aria-label="Collapse menu" data-ds-tooltip="Collapse menu" data-ds-tooltip-placement="bottom"><ds-icon name="panel-left"></ds-icon></button>
```

## Accessibility

The button comes accessible. These are the decisions that are still yours.

- The right element — Use `<button>` for actions and `<a class="ds-btn">` to navigate. The element brings keyboard and screen reader support for free.
- Keyboard — Tab Enter Space — Tab moves focus; Enter and Space activate.
- Focus always visible — A 2 px ring in the focus color, with 2 px of offset — in both themes, in every variant.
- Contrast checked — Primary text on the brand: 7.80:1 in Lume light and 9.09:1 in Lume dark, above the 4.5:1 minimum.
- Icon only? Give it a name — Put an `aria-label` on the button and a hint with the same text.
- Disable with care — `disabled` removes the button from focus. If people need to discover the action, use `aria-disabled="true"` and explain why.

## Tokens used

Everything the button consumes. Change the token, change the button — on every screen.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Height (medium) | 40 px | 40 px |
| space.200 (`--ds-space-200`) | Side padding (medium) | 16 px | 16 px |
| space.100 (`--ds-space-100`) | Space between icon and label | 8 px | 8 px |
| radius.md (`--ds-radius-md`) | Radius | 12 px | 12 px |
| text.label-md (`--ds-text-label-md`) | Label | 14/20 · medium | 14/20 · medium |
| color.brand.solid (`--ds-color-brand-solid`) | Primary background | #3E5166 | #C0CAD6 |
| color.brand.solid-hover (`--ds-color-brand-solid-hover`) | Primary hover | #2B3847 | #DAE0E8 |
| color.brand.solid-pressed (`--ds-color-brand-solid-pressed`) | Primary pressed | #232F3D | #93A0B0 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Primary label | #F8FAFD | #1D2734 |
| color.border.control (`--ds-color-border-control`) | Secondary outline | #3E516633 | #FFFFFF21 |
| color.bg.hover (`--ds-color-bg-hover`) | Secondary and ghost hover | #3E51660D | #FFFFFF0D |
| color.bg.muted (`--ds-color-bg-muted`) | Subtle background | #DAE0E8 | #3D3B38 |
| color.danger.solid (`--ds-color-danger-solid`) | Danger background | #C13834 | #FF9087 |
| color.border.focus (`--ds-color-border-focus`) | Focus ring | #53657A | #C0CAD6 |
| duration.fast (`--ds-duration-fast`) | Color transition | 120ms | 120ms |
| opacity.disabled (`--ds-opacity-disabled`) | Disabled | 0.44 | 0.44 |

## Usage

Three rules that solve most screens.

- **Do:** one primary action per screen. Color guides the eye. One main action, the others in outline or ghost.
- **Avoid:** everything primary. If everything calls for attention, nothing does. People don’t know where to start.
- **Tip:** A label with a verb. The label says what will happen. Nobody has to read the rest of the screen to decide.
