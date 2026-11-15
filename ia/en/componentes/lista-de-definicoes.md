# Description list

Lume section: Components. Page: https://lumeui.dev/#/componentes/lista-de-definicoes

Label and value pairs, as on a details sheet. Lighter than a table when there’s only one record to show.

In numbers: JavaScript: 0 · layouts: 3 · base: dl · when tight: stacks.

## Example

```html
<dl class="ds-dl ds-dl--lines">
  <div class="ds-dl__row"><dt>Customer</dt><dd>Ana Lima</dd></div>
  <div class="ds-dl__row"><dt>Email</dt><dd>ana@lume.dev</dd></div>
  <div class="ds-dl__row"><dt>Plan</dt><dd>Team</dd></div>
  <div class="ds-dl__row"><dt>Created on</dt><dd>November 8</dd></div>
</dl>
```

## Variants

Label beside the value, with or without lines, or above it, to fit in columns.

Simple `ds-dl` — For the middle of a card.

With lines `ds-dl--lines` — Easier to follow when the list is long.

In columns `ds-dl--stacked` — Label on top, for summaries.

Markup of the examples in this section:

```html
<dl class="ds-dl"><div class="ds-dl__row"><dt>Customer</dt><dd>Ana Lima</dd></div><div class="ds-dl__row"><dt>Email</dt><dd>ana@lume.dev</dd></div><div class="ds-dl__row"><dt>Plan</dt><dd>Team</dd></div><div class="ds-dl__row"><dt>Created on</dt><dd>November 8</dd></div></dl>

<dl class="ds-dl ds-dl--lines"><div class="ds-dl__row"><dt>Customer</dt><dd>Ana Lima</dd></div><div class="ds-dl__row"><dt>Email</dt><dd>ana@lume.dev</dd></div><div class="ds-dl__row"><dt>Plan</dt><dd>Team</dd></div><div class="ds-dl__row"><dt>Created on</dt><dd>November 8</dd></div></dl>

<dl class="ds-dl ds-dl--stacked"><div class="ds-dl__row"><dt>Customer</dt><dd>Ana Lima</dd></div><div class="ds-dl__row"><dt>Email</dt><dd>ana@lume.dev</dd></div><div class="ds-dl__row"><dt>Plan</dt><dd>Team</dd></div><div class="ds-dl__row"><dt>Created on</dt><dd>November 8</dd></div></dl>
```

## Accessibility

The HTML itself links each label to its value.

- Semantics — Screen readers treat `dt` as a term and `dd` as its definition. The `div` around each pair is allowed.
- Long text — Long values, like emails, wrap instead of overflowing.
- Little space — In a narrow container, the label moves above the value instead of breaking words.

## Tokens used

Everything the list consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.fg.subtle (`--ds-color-fg-subtle`) | Label | #53657A | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Value | #2B3847 | #F3EDE5 |
| color.border.subtle (`--ds-color-border-subtle`) | Lines | #3E516624 | #FFFFFF0F |
| text.body-sm (`--ds-text-body-sm`) | Text | 14/22 · regular | 14/22 · regular |

## Usage

When to use it and when to prefer something else.

- **Do:** a single record. An order’s details, a profile, a summary before confirming.
- **Avoid:** comparing records. For several items side by side, use the Table.
- **Tip:** No value? Say so. Show “Not provided” instead of a blank.
