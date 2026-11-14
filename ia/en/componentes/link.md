# Link

Lume section: Components. Page: https://lumeui.dev/#/componentes/link

Takes you to another page. Inside text, underlined; standalone, at the end of a card or list, with an arrow. When it leaves the site, the external-link icon says so before the click.

In numbers: JavaScript: 0 · forms: 2 · tones: 2 · base: a.

## Example

```html
<a class="ds-link" href="/novidades">See all versions</a>
```

## Variants

The form comes from where the link sits, not from how important it is.

Components only use semantic tokens. See colors and typography to understand the roles.

Inline `ds-link` — Underlined, so it stands out from the surrounding words without relying on color alone.

What’s new

Divider, link, and circular progress arrived in 0.34.

Standalone `ds-link--standalone` — At the end of a card or list. The arrow moves a little on hover; the underline appears with it.

Lume’s headings and text use Geist — (opens in a new tab).

External `target="_blank"` — The icon shows that it leaves the site, and hidden text tells screen readers it opens in a new tab.

Updated Nov 14 · see history

Muted `ds-link--muted` — In footers and metadata, where the link shouldn’t compete with the content.

Markup of the examples in this section:

```html
<a class="ds-link ds-link--standalone" href="#/novidades">See all versions<ds-icon name="arrow-right"></ds-icon></a>
```

## States

On hover the color deepens and the underline turns solid; focus uses the ring used across Lume.

colors

colors

colors

Markup of the examples in this section:

```html
<a class="ds-link ds-link--standalone" href="#/novidades">See all versions<ds-icon name="arrow-right"></ds-icon></a>

<a class="ds-link ds-link--standalone" aria-disabled="true">See all versions<ds-icon name="arrow-right"></ds-icon></a>
```

## Code

The icon comes from Lume’s library. For external links, the hidden text too.

```html
<a class="ds-link" href="/cores">colors</a>

<a class="ds-link ds-link--standalone" href="/novidades">
  See all versions
  <ds-icon name="arrow-right" class="ds-link__icon" data-arrow></ds-icon>
</a>

<a class="ds-link" href="https://vercel.com/font" target="_blank" rel="noopener">
  Geist<ds-icon name="external-link" class="ds-link__icon"></ds-icon>
  <span class="ds-visually-hidden">(opens in a new tab)</span>
</a>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

A link says where it goes, even out of context.

- Text that names the destination — “See all versions”, not “click here”: screen readers list a page’s links out of context.
- Not only color — Inside text, the underline always stays: the link color has 4.5:1 against the background, but not against the text next to it.
- New tab announced — With `target="_blank"`, the icon and hidden text warn beforehand. Use `rel="noopener"`.
- Keyboard — Tab Enter — Tab reaches the link and Enter opens it. The icon has aria-hidden.

## Tokens used

Everything the link consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.fg.link (`--ds-color-fg-link`) | Text | #3E5166 | #DAE0E8 |
| color.fg.link-hover (`--ds-color-fg-link-hover`) | Text on hover | #232F3D | #EEF2F6 |
| color.fg.muted (`--ds-color-fg-muted`) | Muted tone | #46586E | #CEC8C1 |
| color.fg.disabled (`--ds-color-fg-disabled`) | Disabled | #93A0B0 | #605D59 |
| color.border.focus (`--ds-color-border-focus`) | Keyboard focus | #53657A | #C0CAD6 |
| text.label-md (`--ds-text-label-md`) | Standalone link | 14/20 · medium | 14/20 · medium |
| duration.fast (`--ds-duration-fast`) | Color change and arrow | 120ms | 120ms |

## Usage

Link or button?

- **Do:** links to go. If it changes the page address, it’s a link: it can open in another tab and be copied.
- **Avoid:** links that perform actions. Saving, deleting, and opening a modal are buttons. For a subtle action, use the Inline action.
- **Tip:** External only when it leaves. Pages on the same site open in the same tab, with no icon.
