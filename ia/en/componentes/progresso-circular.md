# Circular progress

Lume section: Components. Page: https://lumeui.dev/#/componentes/progresso-circular

The same progress as the bar, in a ring. It fits in a card, a header, or next to a list item, where a bar wouldn’t have the width.

In numbers: sizes: 20 · 56 · 80 · tones: 4 · forms: determinate and indeterminate · ARIA role: progressbar.

## Example

```html
<span data-envio></span>

<script type="module">
  import { progressRingHtml, setProgressRing } from 'https://lumeui.dev/v/0.39/lume.js';

  const box = document.querySelector('[data-envio]');
  box.innerHTML = progressRingHtml(0, { label: 'Uploading files' });
  setProgressRing(box.firstElementChild, 62);
</script>
```

## Variants

The tones are the bar’s: for the result, not along the way.

Sizes `size: 'sm' · 'md' · 'lg'` — 20 px in a line of text, no number; 56 px by default; 80 px when progress is the point.

Indeterminate `progressRingHtml(null)` — For when there’s no way to know what’s left. With reduced motion, the arc stops.

Tones `tone: 'success' · 'warning' · 'danger'` — Complete, near the limit, and failed. Always with text that states the result.

- Foundations
- Components
- Figma plugin

In a list `size: 'sm'` — Next to the name, with the number written out: the small ring has no number inside.

Markup of the examples in this section:

```html
<div class="ds-progress-ring ds-progress-ring--sm" role="progressbar" aria-label="Uploading files" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg></div>

<div class="ds-progress-ring" role="progressbar" aria-label="Uploading files" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">62%</span></div>

<div class="ds-progress-ring ds-progress-ring--lg" role="progressbar" aria-label="Uploading files" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">62%</span></div>

<div class="ds-progress-ring ds-progress-ring--sm" role="progressbar" aria-label="Preparing"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg></div>

<div class="ds-progress-ring" role="progressbar" aria-label="Preparing"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg></div>

<div class="ds-progress-ring ds-progress-ring--success" role="progressbar" aria-label="Uploaded" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">100%</span></div>

<div class="ds-progress-ring ds-progress-ring--warning" role="progressbar" aria-label="Space used" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">90%</span></div>

<div class="ds-progress-ring ds-progress-ring--danger" role="progressbar" aria-label="Upload failed" aria-valuemin="0" aria-valuemax="100" aria-valuenow="38"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">38%</span></div>
```

## Code

The markup comes ready; to change the value, call setProgressRing.

```html
<span data-envio></span>

<script type="module">
  import { progressRingHtml, setProgressRing } from 'https://lumeui.dev/v/0.39/lume.js';

  const box = document.querySelector('[data-envio]');
  box.innerHTML = progressRingHtml(0, { label: 'Uploading files' });
  const ring = box.firstElementChild;

  // at each step of the upload
  setProgressRing(ring, 62);
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

The ring is a progressbar with a name and a value, like the native bar.

- With a name — Pass `label` with what’s progressing. Without it, the ring is called “Progress”.
- Value — aria-valuenow carries the number; the text in the middle is visual only, so it isn’t read twice. With no value, it’s indeterminate.
- Announce the end — Screen readers don’t announce every change: announce the end in role="status".
- Not only color — Success and errors need text nearby; the tone only reinforces it.

## Tokens used

The same as the progress bar.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.border.field (`--ds-color-border-field`) | Track | #3E5166AD | #FFFFFF61 |
| color.brand.solid (`--ds-color-brand-solid`) | Fill | #3E5166 | #C0CAD6 |
| color.success.solid (`--ds-color-success-solid`) | Complete | #1E854A | #72CB8B |
| color.warning.solid (`--ds-color-warning-solid`) | Warning | #FFB851 | #FFB851 |
| color.danger.solid (`--ds-color-danger-solid`) | With an error | #C13834 | #FF9087 |
| color.fg.default (`--ds-color-fg-default`) | Percentage | #2B3847 | #F3EDE5 |
| duration.base (`--ds-duration-base`) | Value change | 200ms | 200ms |

## Usage

Ring, bar, or spinner?

- **Do:** where a bar doesn’t fit. In an upload card, a list row, a header. With room, a bar reads better.
- **Avoid:** measuring what isn’t a task. Used storage or a monthly goal are measures: use the Meter or the Donut, in Charts.
- **Tip:** Short wait? Spinner. Under 10 seconds, with no number to show, a Spinner is enough.
