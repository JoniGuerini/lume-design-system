# Divider

Lume section: Components. Page: https://lumeui.dev/#/componentes/divisor

A thin line that separates blocks without drawing attention. Horizontal between groups of content, vertical between items in a row and, when it helps, with a label in the middle.

In numbers: JavaScript: 0 · directions: 2 · thickness: 1 px · base: hr.

## Example

```html
<hr class="ds-divider">
```

## Variants

The line is always the same; what changes is what it separates.

Colors

Palettes, roles, and contrast measured in both themes.

Typography

Geist Serif for headings, Geist Sans for text.

Horizontal `ds-divider` — Between groups in a card or list, when space alone isn’t enough.

Vertical `ds-divider--vertical` — Between items in a row: metadata, actions in a bar. It takes the row’s height.

0.34 Divider, link, and circular progress

0.33 Rating and toolbar

0.32 Resizable panels

Label at the start `ds-divider--label · --start` — Opens a group inside a list, like a small heading.

Load lumeui.dev/v/1.7/lume.css

Download lume-1.7.zip

Label in the middle `ds-divider--label` — Between two alternatives. A short word is enough.

Faded `ds-divider--fade` — Fades at the ends. It’s the sidebar divider, between the navigation and the footer.

Markup of the examples in this section:

```html
<hr class="ds-divider">

<span class="ds-divider ds-divider--vertical" role="separator" aria-orientation="vertical"></span>

<div class="ds-divider ds-divider--label ds-divider--start"><span>Earlier versions</span></div>

<div class="ds-divider ds-divider--label"><span>or</span></div>

<hr class="ds-divider ds-divider--fade">
```

## Code

Pick the element by what it means: hr separates, the label is text.

```html
<!-- horizontal -->
<hr class="ds-divider">

<!-- vertical, inside a flex row -->
<span class="ds-divider ds-divider--vertical" role="separator" aria-orientation="vertical"></span>

<!-- with a label -->
<div class="ds-divider ds-divider--label"><span>or</span></div>
<div class="ds-divider ds-divider--label ds-divider--start"><span>Earlier versions</span></div>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

A separator is structure: only announce what changes how the page reads.

- Horizontal — `hr` is already role="separator". Use it when the division also makes sense to someone listening to the page.
- Vertical — It carries role="separator" and aria-orientation="vertical". If it’s just decoration between metadata, use aria-hidden="true" instead.
- With a label — It’s a plain div: screen readers read the text (“or”, “Earlier versions”) and skip the lines.
- Contrast — The line is decorative and stays below 3:1 on purpose. The label uses muted text at 4.5:1.

## Tokens used

Everything the divider consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.border.subtle (`--ds-color-border-subtle`) | Line | #3E516624 | #FFFFFF0F |
| gradient.divider (`--ds-gradient-divider`) | Faded line | linear-gradient(90deg, var(--ds-color-border-strong) 0%, transparent 100%) | linear-gradient(90deg, var(--ds-color-border-strong) 0%, transparent 100%) |
| color.fg.muted (`--ds-color-fg-muted`) | Label | #46586E | #CEC8C1 |
| text.label-sm (`--ds-text-label-sm`) | Label | 13/18 · medium | 13/18 · medium |
| space.150 (`--ds-space-150`) | Space between the label and the lines | 12 px | 12 px |

## Usage

Fewer dividers, more space.

- **Do:** separate what’s different. A divider between two topics helps; between identical list items, space is enough.
- **Avoid:** a divider between every pair. Too many lines turn into a grid and weigh the screen down. For rows of data, use the Table.
- **Tip:** Short label. One or two words. If the label needs more, it’s a section heading.
