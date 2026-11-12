# Progress bar

Lume section: Components. Page: https://lumeui.dev/#/componentes/barra-de-progresso

Shows how much of a task is done. When there’s no way to know how much is left, the indeterminate version says something is happening.

In numbers: JavaScript: 0 · base: progress · thicknesses: 4 · 8 px · tones: 4.

## Example

```html
<div class="ds-progress-field">
  <div class="ds-progress-field__head">
    <span id="envio">Uploading files</span>
    <span class="ds-progress-field__value">62%</span>
  </div>
  <progress class="ds-progress" aria-labelledby="envio" value="62" max="100"></progress>
</div>
```

## Variants

Use a tone for the result, not along the way.

Determinate `value · max` — When it can be measured, always show the number.

Indeterminate `no value` — For when there’s no way to know what’s left.

Complete `ds-progress--success` — Together with text saying it’s done.

With an error `ds-progress--danger` — Shows where it stopped; the text says why.

Markup of the examples in this section:

```html
<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pb-1">Uploading files</span><span class="ds-progress-field__value" data-value="">62%</span></div>
<progress class="ds-progress" aria-labelledby="pb-1" value="62" max="100"></progress>
</div>

<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pb-2">Preparing</span></div>
<progress class="ds-progress" aria-labelledby="pb-2"></progress>
</div>

<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pb-3">Uploaded</span><span class="ds-progress-field__value" data-value="">100%</span></div>
<progress class="ds-progress ds-progress--success" aria-labelledby="pb-3" value="100" max="100"></progress>
</div>

<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pb-4">Upload failed</span><span class="ds-progress-field__value" data-value="">38%</span></div>
<progress class="ds-progress ds-progress--danger" aria-labelledby="pb-4" value="38" max="100"></progress>
</div>
```

## Accessibility

The native element is already announced as a progress bar, with its current value.

- With a name — Link the text to the bar with `aria-labelledby`, so people know what’s progressing.
- Not only color — Success and errors need text; color only reinforces it.
- Announce the end — Screen readers don’t announce every change: announce the end in role="status".
- Reduced motion — The indeterminate bar stops moving and becomes a static band.

## Tokens used

Everything the bar consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.border.field (`--ds-color-border-field`) | Track | #3E5166AD | #FFFFFF61 |
| color.brand.solid (`--ds-color-brand-solid`) | Fill | #3E5166 | #C0CAD6 |
| color.success.solid (`--ds-color-success-solid`) | Complete | #1E854A | #72CB8B |
| color.warning.solid (`--ds-color-warning-solid`) | Warning | #FFB851 | #FFB851 |
| color.danger.solid (`--ds-color-danger-solid`) | With an error | #C13834 | #FF9087 |
| radius.full (`--ds-radius-full`) | Corners | 9999 px | 9999 px |

## Usage

Bar, spinner, or meter?

- **Do:** tasks over 10 seconds. Uploads and imports, where knowing what’s left is reassuring.
- **Avoid:** measuring what isn’t a task. Used storage or a monthly goal are measures: use the Meter, in Charts.
- **Tip:** Short wait? Spinner. Under 10 seconds, a Spinner is enough.
