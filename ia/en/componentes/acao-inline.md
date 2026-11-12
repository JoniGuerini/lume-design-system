# Inline action

Lume section: Components. Page: https://lumeui.dev/#/componentes/acao-inline

The quietest action in the system. It lives inside the content — “In the scene +”, “See history →” — and only stands out when the pointer arrives.

In numbers: forms: 5 · min height: 28 px · text: 13 px · elements: a · button.

## Example

```html
<button type="button" class="ds-inline-action">
  <ds-icon name="video" size="16"></ds-icon>
  In the scene
  <ds-icon name="plus" size="14" class="ds-inline-action__plus"></ds-icon>
</button>
```

## Forms

The sign at the end tells what happens: + adds or opens something here; → takes you elsewhere.

In-place action `<button>` — Does something without leaving the context: add, attach, generate.

Navigation `<a>` — Takes you to another screen. The arrow says “go to”.

With icon `<button>` — The icon hints at the type of content.

Strong `<a>` — A bit more presence, for the next step after some text.

Disabled `<button>` — Not available yet. Say why nearby.

Markup of the examples in this section:

```html
<button type="button" class="ds-inline-action"><ds-icon name="file-text"></ds-icon>Add note<ds-icon name="plus"></ds-icon></button>

<a class="ds-inline-action" href="#/componentes/acao-inline">See history<ds-icon name="arrow-right"></ds-icon></a>

<button type="button" class="ds-inline-action"><ds-icon name="video"></ds-icon>In the scene<ds-icon name="plus"></ds-icon></button>

<a class="ds-inline-action ds-inline-action--strong" href="#/componentes/acao-inline">See what changed<ds-icon name="arrow-right"></ds-icon></a>

<button type="button" class="ds-inline-action" disabled=""><ds-icon name="clock"></ds-icon>Coming soon</button>
```

## Show and hide

With `<details>`, the inline action opens extra content in place. The + rotates into an × when open. Try it:

24s — Invite people to check it out

Want to see what your routine would look like? Check it out through the link in the profile.

```html
<details class="ds-disclosure">
  <summary class="ds-inline-action">
    <ds-icon name="file-text" size="16"></ds-icon>
    More details
    <ds-icon name="plus" size="14" class="ds-inline-action__plus"></ds-icon>
  </summary>
  <div class="ds-disclosure__content">…</div>
</details>
```

Markup of the examples in this section:

```html
<details class="ds-disclosure">
<summary class="ds-inline-action"><ds-icon name="file-text"></ds-icon>More details<ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content">
<p><span>Format</span>Vertical video, 9:16</p>
<p><span>Audience</span>Small businesses</p>
<p><span>Call to action</span>Link in profile</p>
</div>
</details>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Inline or ghost?

Both are quiet. The difference is where they live.

### Inline action

- Inside the content, right after what it affects.
- No visible area: just text, icon, and sign.
- Several per screen, one per block.

### Ghost button

- In bars, headers, and lists — outside the text.
- The click area shows on hover.
- For actions that apply to the whole screen.

Markup of the examples in this section:

```html
<span class="ds-inline-action"><ds-icon name="video"></ds-icon>In the scene<ds-icon name="plus"></ds-icon></span>

<span class="ds-inline-action">See example<ds-icon name="arrow-right"></ds-icon></span>

<span class="ds-btn ds-btn--ghost ds-btn--sm"><ds-icon name="star"></ds-icon>Examples</span>

<span class="ds-btn ds-btn--ghost ds-btn--sm"><ds-icon name="download"></ds-icon>Export</span>
```

## Accessibility

Quiet to the eye, clear to keyboard and screen reader users.

- The right element — Navigates? `<a href>`. Does something here? `<button>`. Opens and closes? `<details><summary>`.
- Keyboard — Tab Enter Space — Tab focuses; Enter activates links and buttons; Space also activates buttons and the summary.
- Touch target — A minimum height of 28 px, above WCAG 2.2’s 24 px (target size).
- Icons and signs are decorative — The text says the action. The + and the → get aria-hidden.
- Disclosure state — The native summary announces expanded and collapsed — no aria-expanded needed.
- Disabled with a reason — Prefer explaining next to it (“Coming soon”). Disabled links get aria-disabled and leave the Tab order.

## Tokens used

Few, and all text tokens: that’s what keeps it light.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| text.label-sm (`--ds-text-label-sm`) | Label | 13/18 · medium | 13/18 · medium |
| color.fg.subtle (`--ds-color-fg-subtle`) | Resting color | #5C6C7F | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Hover and strong form color | #2B3847 | #F3EDE5 |
| color.fg.brand (`--ds-color-fg-brand`) | Strong form hover | #3E5166 | #DAE0E8 |
| space.100 (`--ds-space-100`) | Space between icon, label, and sign | 8 px | 8 px |
| radius.xs (`--ds-radius-xs`) | Focus ring radius | 6 px | 6 px |
| duration.fast (`--ds-duration-fast`) | Color transition | 120ms | 120ms |
| duration.base (`--ds-duration-base`) | The + rotation and the arrow step | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Rotation and arrow curve | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| opacity.muted (`--ds-opacity-muted`) | Disabled | 0.64 | 0.64 |

## Usage

Three rules to keep it quiet.

- **Do:** close to what it affects. Right below the block, aligned with the text.
- **Avoid:** the main action. What closes the task is a primary button. Inline is for the secondary path.
- **Tip:** One sign per action. + adds or opens here; → goes elsewhere. Never both together.
