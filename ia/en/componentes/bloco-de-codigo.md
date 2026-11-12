# Code block

Lume section: Components. Page: https://lumeui.dev/#/componentes/bloco-de-codigo

Shows code in the right font, and a button copies it all at once. It’s what appears in every playground on this site.

In numbers: mono font: JetBrains · sizes: 2 · scrolling: horizontal · base: pre · code.

## Example

```html
.cartao {
  background: var(--ds-color-bg-surface);
  border-radius: var(--ds-radius-xl);
}
```

## Variants

Without the button, it’s just `.ds-code`. For a term within text, use `.ds-inline-code`.

With copy `ds-code-block` — For what people will use.

```html
<html data-theme="dark">
```

Read only `ds-code` — For a snippet that only illustrates.

```html
--ds-radius-xl: 20px;
```

Small `ds-code--sm` — Inside cards and tables.

Run `npm run dev` and open the site.

Within text `ds-inline-code` — For file names, tokens, and commands.

Markup of the examples in this section:

```html
<div class="ds-code-block">
<pre class="ds-code"><code>npm run build</code></pre>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-code-block__copy" data-code-copy="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
</div>
```

## Accessibility

Real text you can select and read.

- The right elements — `pre` preserves spacing; `code` says it’s code.
- Named button — Tab Enter — The icon has a name for screen readers, and the copy is announced in the notice.
- Long lines — The block scrolls horizontally, without breaking the page or the code.

## Tokens used

Everything the block consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.sunken (`--ds-color-bg-sunken`) | Background | #E8EDF3 | #151412 |
| color.border.subtle (`--ds-color-border-subtle`) | Outline | #3E516624 | #FFFFFF0F |
| color.fg.default (`--ds-color-fg-default`) | Text | #2B3847 | #F3EDE5 |
| text.code-md (`--ds-text-code-md`) | Code | 14/22 · regular | 14/22 · regular |
| text.code-sm (`--ds-text-code-sm`) | Small and within text | 12/18 · regular | 12/18 · regular |
| radius.lg (`--ds-radius-lg`) | Corners | 16 px | 16 px |

## Usage

When to use it and when to prefer something else.

- **Do:** code to copy. Commands and examples people will paste elsewhere.
- **Avoid:** ordinary data. A password or coupon code works better in a field with a copy button.
- **Tip:** Short is better. Show only what matters. Long snippets tire people, and nobody reads them.
