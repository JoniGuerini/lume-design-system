# File upload

Lume section: Components. Page: https://lumeui.dev/#/componentes/upload

For sending files, by dragging or browsing. Each file has its own progress and its own error, so one failure doesn’t get in the way of the others.

In numbers: ways to send: 2 · file states: 4 · limits: type · size · count · base: file.

## Example

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="anexos">Attachments</label>
  <div class="ds-upload"><input class="ds-upload__input" type="file" id="anexos" name="anexos" multiple></div>
</div>

<script type="module">
  import { createFileUpload } from 'https://lumeui.dev/v/1.12/lume.js';
  createFileUpload(document.querySelector('.ds-upload'), {
    maxSize: 5 * 1024 * 1024,
    maxFiles: 3,
    upload: enviar,
  });
</script>
```

## Variants

Without the `upload` option, files stay in the input and go with the form. With it, each one is sent as soon as it joins the list.

Multiple files `multiple` — With type, size, and count limits, written in the hint.

A single file `no multiple` — Choosing another replaces the current one.

Per-file states `data-status` — Uploaded, uploading, refused, and failed, with “Try again”.

Markup of the examples in this section:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="up-many">Attachments</label>
<div class="ds-upload" data-upload="up-many"><input class="ds-upload__input" type="file" id="up-many" name="up-many" multiple="" accept="image/*,.pdf" aria-describedby="ds-upload-2-hint"><div class="ds-upload__zone" aria-hidden="true">
<span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span>
<span class="ds-upload__title" data-title="">Drag files or click to browse</span>
<span class="ds-upload__hint" id="ds-upload-2-hint" data-hint="">Up to 5 MB per file · 3 at most</span>
</div>
<ul class="ds-upload__list" role="list" data-list="" hidden=""></ul>
<span class="ds-visually-hidden" role="status" data-live=""></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="up-one">Résumé</label>
<div class="ds-upload" data-upload="up-one"><input class="ds-upload__input" type="file" id="up-one" name="up-one" accept=".pdf" aria-describedby="ds-upload-3-hint"><div class="ds-upload__zone" aria-hidden="true">
<span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span>
<span class="ds-upload__title" data-title="">Drag a file or click to browse</span>
<span class="ds-upload__hint" id="ds-upload-3-hint" data-hint="">Up to 2 MB per file</span>
</div>
<ul class="ds-upload__list" role="list" data-list="" hidden=""></ul>
<span class="ds-visually-hidden" role="status" data-live=""></span></div>
</div>
```

## States

The area can be forced with `data-state` and `data-dragging`.

Markup of the examples in this section:

```html
<div class="ds-upload"><input class="ds-upload__input" type="file" aria-label="Attachments">
<div class="ds-upload__zone"><span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span><span class="ds-upload__title">Drag files or click to browse</span></div>
</div>

<div class="ds-upload" data-dragging=""><input class="ds-upload__input" type="file" aria-label="Attachments">
<div class="ds-upload__zone"><span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span><span class="ds-upload__title">Drag files or click to browse</span></div>
</div>

<div class="ds-upload"><input class="ds-upload__input" type="file" aria-label="Attachments" disabled="">
<div class="ds-upload__zone"><span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span><span class="ds-upload__title">Drag files or click to browse</span></div>
</div>
```

## Code

The `upload` function receives the file, reports progress (0 to 1), and returns a promise. Any error it throws shows on the file’s row.

```html
import { createFileUpload } from 'https://lumeui.dev/v/1.12/lume.js';

createFileUpload(document.querySelector('.ds-upload'), {
  accept: ['image/*', '.pdf'],
  maxSize: 5 * 1024 * 1024,
  maxFiles: 3,
  upload: async (file, { onProgress, signal }) => {
    const resposta = await enviar(file, { onProgress, signal });
    if (!resposta.ok) throw new Error('Couldn’t upload.');
  },
});
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

The area is the file input itself, so it works without dragging.

- No need to drag — Tab Enter Space — Tab reaches the input, and Enter or Space open the system picker.
- Limits stated upfront — The hint with type and size is linked to the input by aria-describedby.
- Announced progress — The bar is a role="progressbar" with the file’s name; completion and errors are announced in role="status".
- Not only color — Errors and success include an icon and text.
- Named remove — Each × says which file goes, and focus moves to the next button in the list.

## Tokens used

Everything the upload consumes.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.field (`--ds-color-bg-field`) | Area background | #FFFFFF | #2C2A27 |
| color.bg.field-hover (`--ds-color-bg-field-hover`) | Area on hover | #F8FAFD | #33312E |
| color.border.strong (`--ds-color-border-strong`) | Dashed outline | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Focus ring | #53657A | #C0CAD6 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Area while dragging | #EEF2F6 | #C0CAD624 |
| color.brand.border (`--ds-color-brand-border`) | Outline while dragging | #DAE0E8 | #C0CAD652 |
| color.brand.solid (`--ds-color-brand-solid`) | Progress bar | #3E5166 | #C0CAD6 |
| color.border.subtle (`--ds-color-border-subtle`) | Row outline | #3E516624 | #FFFFFF0F |
| color.danger.border (`--ds-color-danger-border`) | Row with an error | #FFCFCA | #FF90874D |
| color.danger.fg (`--ds-color-danger-fg`) | Error text | #C13834 | #FFB2AA |
| color.success.fg (`--ds-color-success-fg`) | Uploaded icon | #0F6939 | #97DCA8 |

## Usage

When to use it and what to pair it with.

- **Do:** state the limits. Type and size in the hint avoid the frustration of an error after choosing.
- **Avoid:** blocking everything over one error. One refused file doesn’t invalidate the others. Show the error only on that row.
- **Tip:** Validate on the server too. The type and size check here helps people; it isn’t protection.
