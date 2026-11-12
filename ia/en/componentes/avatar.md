# Avatar

Lume section: Components. Page: https://lumeui.dev/#/componentes/avatar

Represents a person or account. A photo when there is one, initials in a stable tone when there isn’t — and always a name behind it.

In numbers: sizes: 5 · tones: 9 · statuses: 4 · minimum contrast: 5.81:1.

## Example

```html
<span class="ds-avatar ds-avatar--xl ds-avatar--sand" role="img" aria-label="Marina Duarte, online">
  <span aria-hidden="true">MD</span>
  <span class="ds-avatar__status ds-avatar__status--online" aria-hidden="true"></span>
</span>
```

## Sizes

Five sizes. The initials and status follow the proportion on their own.

xs — 24 px

Dense lists, tables

sm — 32 px

Comments, mentions

md — 40 px

Default

lg — 48 px

Card headers

xl — 64 px

Profile, invite

Markup of the examples in this section:

```html
<span class="ds-avatar ds-avatar--xs ds-avatar--sand" role="img" aria-label="Marina Duarte"><span aria-hidden="true">MD</span></span>

<span class="ds-avatar ds-avatar--sm ds-avatar--sand" role="img" aria-label="Marina Duarte"><span aria-hidden="true">MD</span></span>

<span class="ds-avatar ds-avatar--sand" role="img" aria-label="Marina Duarte, online"><span aria-hidden="true">MD</span><span class="ds-avatar__status ds-avatar__status--online" aria-hidden="true"></span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--sand" role="img" aria-label="Marina Duarte"><span aria-hidden="true">MD</span></span>

<span class="ds-avatar ds-avatar--xl ds-avatar--sand" role="img" aria-label="Marina Duarte"><span aria-hidden="true">MD</span></span>
```

## Content

The order of preference is always the same: image, initials, icon.

Image — The person’s photo, cropped to the circle. The initials sit underneath, ready in case the image fails.

Initials — The first letter of the first and last name, in a stable tone derived from the name.

Icon — No name or photo: guests, generic accounts, empty seats.

Failed image — The onerror removes the image and the initials show — no broken icon.

Markup of the examples in this section:

```html
<span class="ds-avatar ds-avatar--xl ds-avatar--green" role="img" aria-label="Caio Ramos"><span aria-hidden="true">CR</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c9b08f%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23f1dcc8%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%234a4744%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"></span>

<span class="ds-avatar ds-avatar--xl ds-avatar--green" role="img" aria-label="Caio Ramos"><span aria-hidden="true">CR</span></span>

<span class="ds-avatar ds-avatar--xl" role="img" aria-label="Caio Ramos"><ds-icon name="user"></ds-icon></span>
```

## Tones

Nine tones from the supporting palettes, lightly tinted over the surface. The tone comes from the name: the same person always gets the same color, on any screen.

Neutral

Sand

Clay

Ochre

Slate

Green

Teal

Blue

Violet

Pink

Tone: Sand

Initials contrast between 5.81:1 and 6.46:1 in both themes.

```html
// same name, same tone
function toneFor(name) {
  let h = 0;
  for (const ch of name.normalize('NFD')) h = (h * 31 + ch.codePointAt(0)) >>> 0;
  return TONES[h % TONES.length];
}
```

Markup of the examples in this section:

```html
<span class="ds-avatar ds-avatar--lg" aria-hidden="true"><span aria-hidden="true">N</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--sand" aria-hidden="true"><span aria-hidden="true">S</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--clay" aria-hidden="true"><span aria-hidden="true">C</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--ochre" aria-hidden="true"><span aria-hidden="true">O</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--slate" aria-hidden="true"><span aria-hidden="true">S</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--green" aria-hidden="true"><span aria-hidden="true">G</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--teal" aria-hidden="true"><span aria-hidden="true">T</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--blue" aria-hidden="true"><span aria-hidden="true">B</span></span>
```

## Status

A dot in the corner, with a ring in the background color to separate it. Status isn’t just color: say it in the accessible name or the text beside it too.

Online — `ds-avatar__status--online`

Away — `ds-avatar__status--away`

Busy — `ds-avatar__status--busy`

Offline — `ds-avatar__status--offline`

On another surface, adjust the ring with `--ds-avatar-ring` (default: the canvas background).

Markup of the examples in this section:

```html
<span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado, online"><span aria-hidden="true">OP</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%238fa3ad%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23e5c3a6%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%233d3b38%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"><span class="ds-avatar__status ds-avatar__status--online" aria-hidden="true"></span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado, away"><span aria-hidden="true">OP</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%238fa3ad%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23e5c3a6%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%233d3b38%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"><span class="ds-avatar__status ds-avatar__status--away" aria-hidden="true"></span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado, busy"><span aria-hidden="true">OP</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%238fa3ad%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23e5c3a6%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%233d3b38%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"><span class="ds-avatar__status ds-avatar__status--busy" aria-hidden="true"></span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado, offline"><span aria-hidden="true">OP</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%238fa3ad%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23e5c3a6%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%233d3b38%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"><span class="ds-avatar__status ds-avatar__status--offline" aria-hidden="true"></span></span>
```

## Group

Overlapping avatars to show who’s taking part. Up to four faces and a “+N” for the rest. Hover to see the names.

```html
<div class="ds-avatar-group" role="group" aria-label="7 participants">
  <span class="ds-avatar ds-avatar--sm ds-avatar--violet" role="img" aria-label="Marina Duarte">
    <span aria-hidden="true">MD</span>
  </span>
  …
  <span class="ds-avatar ds-avatar--sm ds-avatar--more" role="img" aria-label="3 more people">+3</span>
</div>
```

### Next to the name the avatar becomes decoration

- Marina Duarte — Online · Design
- Caio Ramos — Away · Product
- Lia Nakamura — Offline · Engineering

Markup of the examples in this section:

```html
<div class="ds-avatar-group" role="group" aria-label="7 participants">
<span class="ds-avatar ds-avatar--sm ds-avatar--sand" role="img" aria-label="Marina Duarte" data-ds-tooltip="Marina Duarte" data-ds-tooltip-placement="bottom"><span aria-hidden="true">MD</span></span><span class="ds-avatar ds-avatar--sm ds-avatar--green" role="img" aria-label="Caio Ramos" data-ds-tooltip="Caio Ramos" data-ds-tooltip-placement="bottom"><span aria-hidden="true">CR</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c98f73%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23f3e3d3%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%235f4a3c%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"></span><span class="ds-avatar ds-avatar--sm ds-avatar--sand" role="img" aria-label="Lia Nakamura" data-ds-tooltip="Lia Nakamura" data-ds-tooltip-placement="bottom"><span aria-hidden="true">LN</span></span><span class="ds-avatar ds-avatar--sm ds-avatar--violet" role="img" aria-label="Otávio Prado" data-ds-tooltip="Otávio Prado" data-ds-tooltip-placement="bottom"><span aria-hidden="true">OP</span></span>
<span class="ds-avatar ds-avatar--more ds-avatar--sm" role="img" aria-label="3 more people" data-ds-tooltip="Bruna Sá, Rafael Couto, Teresa Lins" data-ds-tooltip-placement="bottom">+3</span>
</div>

<div class="ds-avatar-group" role="group" aria-label="7 participants">
<span class="ds-avatar ds-avatar--sand" role="img" aria-label="Marina Duarte" data-ds-tooltip="Marina Duarte" data-ds-tooltip-placement="bottom"><span aria-hidden="true">MD</span></span><span class="ds-avatar ds-avatar--green" role="img" aria-label="Caio Ramos" data-ds-tooltip="Caio Ramos" data-ds-tooltip-placement="bottom"><span aria-hidden="true">CR</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c98f73%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23f3e3d3%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%235f4a3c%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"></span><span class="ds-avatar ds-avatar--sand" role="img" aria-label="Lia Nakamura" data-ds-tooltip="Lia Nakamura" data-ds-tooltip-placement="bottom"><span aria-hidden="true">LN</span></span><span class="ds-avatar ds-avatar--violet" role="img" aria-label="Otávio Prado" data-ds-tooltip="Otávio Prado" data-ds-tooltip-placement="bottom"><span aria-hidden="true">OP</span></span>
<span class="ds-avatar ds-avatar--more" role="img" aria-label="3 more people" data-ds-tooltip="Bruna Sá, Rafael Couto, Teresa Lins" data-ds-tooltip-placement="bottom">+3</span>
</div>

<div class="ds-avatar-group" role="group" aria-label="7 participants">
<span class="ds-avatar ds-avatar--lg ds-avatar--sand" role="img" aria-label="Marina Duarte" data-ds-tooltip="Marina Duarte" data-ds-tooltip-placement="bottom"><span aria-hidden="true">MD</span></span><span class="ds-avatar ds-avatar--lg ds-avatar--green" role="img" aria-label="Caio Ramos" data-ds-tooltip="Caio Ramos" data-ds-tooltip-placement="bottom"><span aria-hidden="true">CR</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c98f73%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23f3e3d3%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%235f4a3c%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"></span><span class="ds-avatar ds-avatar--lg ds-avatar--sand" role="img" aria-label="Lia Nakamura" data-ds-tooltip="Lia Nakamura" data-ds-tooltip-placement="bottom"><span aria-hidden="true">LN</span></span><span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado" data-ds-tooltip="Otávio Prado" data-ds-tooltip-placement="bottom"><span aria-hidden="true">OP</span></span>
<span class="ds-avatar ds-avatar--more ds-avatar--lg" role="img" aria-label="3 more people" data-ds-tooltip="Bruna Sá, Rafael Couto, Teresa Lins" data-ds-tooltip-placement="bottom">+3</span>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

An avatar is an image of a person. Treat it as one.

- Accessible name — On its own, the avatar gets `role="img"` and an `aria-label` with the name. The initials and the image are hidden (`aria-hidden` and `alt=""`) so they aren’t read twice.
- Next to the name, decorative — If the name is already written beside it, the whole avatar gets `aria-hidden="true"`.
- Status isn’t just color — Include the status in the accessible name (“Marina Duarte, online”) or in visible text.
- Initials contrast — Between 5.81:1 and 6.46:1 across all tones and both themes — above WCAG’s 4.5:1.
- A group with a count — The group is a `role="group"` with the total in its label; the “+N” says how many people are hidden.
- A tooltip with the name — In groups, each avatar shows the name on hover and focus via a tooltip.

## Tokens used

The tones use the supporting palettes directly (they’re categorical); everything else is semantic.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.muted (`--ds-color-bg-muted`) | Neutral and “+N” background | #DAE0E8 | #3D3B38 |
| color.fg.muted (`--ds-color-fg-muted`) | Initials and icon on neutral | #46586E | #CEC8C1 |
| color.border.subtle (`--ds-color-border-subtle`) | Outline | #3E516624 | #FFFFFF0F |
| color.bg.raised (`--ds-color-bg-raised`) | Base for the tinted tones | #FFFFFF | #2C2A27 |
| radius.full (`--ds-radius-full`) | Round shape | 9999 px | 9999 px |
| radius.md (`--ds-radius-md`) | Square shape | 12 px | 12 px |
| color.success.solid (`--ds-color-success-solid`) | Online | #1E854A | #72CB8B |
| color.warning.solid (`--ds-color-warning-solid`) | Away | #FFB851 | #FFB851 |
| color.danger.solid (`--ds-color-danger-solid`) | Busy | #C13834 | #FF9087 |
| color.fg.disabled (`--ds-color-fg-disabled`) | Offline | #93A0B0 | #605D59 |
| color.bg.canvas (`--ds-color-bg-canvas`) | Status and group ring | #EEF2F6 | #1D1B18 |

## Usage

Three things that help the avatar make people recognizable.

- **Do:** a stable tone from the name. The same person always gets the same color — the eye learns to recognize it.
- **Avoid:** a generic icon for everyone. If you know the name, use the initials. The icon is only for those without a name.
- **Tip:** Keep groups short. Up to four faces. More than that turns into a blur — use the “+N”.
