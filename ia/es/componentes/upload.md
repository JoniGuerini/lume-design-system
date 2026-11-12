# Carga de archivos

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/upload

Para enviar archivos, arrastrando o eligiendo. Cada archivo tiene su propio progreso y su propio error, así que un fallo no molesta a los demás.

En números: formas de enviar: 2 · estados del archivo: 4 · límites: tipo · tamaño · número · base: file.

## Ejemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="anexos">Adjuntos</label>
  <div class="ds-upload"><input class="ds-upload__input" type="file" id="anexos" name="anexos" multiple></div>
</div>

<script type="module">
  import { createFileUpload } from './ds/js/file-upload.js';
  createFileUpload(document.querySelector('.ds-upload'), {
    maxSize: 5 * 1024 * 1024,
    maxFiles: 3,
    upload: enviar,
  });
</script>
```

## Variantes

Sin la opción `upload`, los archivos quedan en el input y siguen con el formulario. Con ella, cada uno se envía en cuanto entra en la lista.

Varios archivos `multiple` — Con límites de tipo, tamaño y número, escritos en la pista.

Un solo archivo `sin multiple` — Elegir otro reemplaza el actual.

Situaciones por archivo `data-status` — Enviado, enviando, rechazado y fallo de envío, con “Intentar de nuevo”.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="up-many">Adjuntos</label>
<div class="ds-upload" data-upload="up-many"><input class="ds-upload__input" type="file" id="up-many" name="up-many" multiple="" accept="image/*,.pdf" aria-describedby="ds-upload-2-hint"><div class="ds-upload__zone" aria-hidden="true">
<span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span>
<span class="ds-upload__title" data-title="">Arrastra archivos o haz clic para elegir</span>
<span class="ds-upload__hint" id="ds-upload-2-hint" data-hint="">Hasta 5 MB por archivo · Máximo 3</span>
</div>
<ul class="ds-upload__list" role="list" data-list="" hidden=""></ul>
<span class="ds-visually-hidden" role="status" data-live=""></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="up-one">Currículum</label>
<div class="ds-upload" data-upload="up-one"><input class="ds-upload__input" type="file" id="up-one" name="up-one" accept=".pdf" aria-describedby="ds-upload-3-hint"><div class="ds-upload__zone" aria-hidden="true">
<span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span>
<span class="ds-upload__title" data-title="">Arrastra un archivo o haz clic para elegir</span>
<span class="ds-upload__hint" id="ds-upload-3-hint" data-hint="">Hasta 2 MB por archivo</span>
</div>
<ul class="ds-upload__list" role="list" data-list="" hidden=""></ul>
<span class="ds-visually-hidden" role="status" data-live=""></span></div>
</div>
```

## Estados

El área se puede forzar con `data-state` y `data-dragging`.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-upload"><input class="ds-upload__input" type="file" aria-label="Adjuntos">
<div class="ds-upload__zone"><span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span><span class="ds-upload__title">Arrastra archivos o haz clic para elegir</span></div>
</div>

<div class="ds-upload" data-dragging=""><input class="ds-upload__input" type="file" aria-label="Adjuntos">
<div class="ds-upload__zone"><span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span><span class="ds-upload__title">Arrastra archivos o haz clic para elegir</span></div>
</div>

<div class="ds-upload"><input class="ds-upload__input" type="file" aria-label="Adjuntos" disabled="">
<div class="ds-upload__zone"><span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span><span class="ds-upload__title">Arrastra archivos o haz clic para elegir</span></div>
</div>
```

## Código

La función `upload` recibe el archivo, avisa el progreso (de 0 a 1) y devuelve una promesa. El error que lance aparece en la fila del archivo.

```html
import { createFileUpload } from './ds/js/file-upload.js';

createFileUpload(document.querySelector('.ds-upload'), {
  accept: ['image/*', '.pdf'],
  maxSize: 5 * 1024 * 1024,
  maxFiles: 3,
  upload: async (file, { onProgress, signal }) => {
    const resposta = await enviar(file, { onProgress, signal });
    if (!resposta.ok) throw new Error('No se pudo enviar.');
  },
});
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

El área es el propio input de archivo, así que funciona sin arrastrar.

- Sin depender de arrastrar — Tab Enter Espacio — Tab lleva al input, y Enter o Espacio abren el selector del sistema.
- Límites avisados antes — La pista con tipo y tamaño está vinculada al input por aria-describedby.
- Progreso anunciado — La barra es un role="progressbar" con el nombre del archivo; el fin y los errores se avisan en role="status".
- No solo color — El error y el éxito traen ícono y texto.
- Quitar con nombre — Cada × dice qué archivo sale, y el foco sigue al siguiente botón de la lista.

## Tokens usados

Todo lo que consume la carga.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.field (`--ds-color-bg-field`) | Fondo del área | #FFFFFF | #2C2A27 |
| color.bg.field-hover (`--ds-color-bg-field-hover`) | Área en hover | #F8FAFD | #33312E |
| color.border.strong (`--ds-color-border-strong`) | Contorno punteado | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Anillo de foco | #53657A | #C0CAD6 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Área al arrastrar | #EEF2F6 | #C0CAD624 |
| color.brand.border (`--ds-color-brand-border`) | Contorno al arrastrar | #DAE0E8 | #C0CAD652 |
| color.brand.solid (`--ds-color-brand-solid`) | Barra de progreso | #3E5166 | #C0CAD6 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno de la fila | #3E516624 | #FFFFFF0F |
| color.danger.border (`--ds-color-danger-border`) | Fila con error | #FFCFCA | #FF90874D |
| color.danger.fg (`--ds-color-danger-fg`) | Texto del error | #C13834 | #FFB2AA |
| color.success.fg (`--ds-color-success-fg`) | Ícono de enviado | #0F6939 | #97DCA8 |

## Uso

Cuándo usarlo y con qué combinarlo.

- **Haz:** di los límites. El tipo y el tamaño en la pista evitan la frustración del error después de elegir.
- **Evita:** bloquear todo por un error. Un archivo rechazado no invalida los demás. Muestra el error solo en esa fila.
- **Consejo:** Validar también en el servidor. La comprobación de tipo y tamaño aquí es una ayuda para la persona, no una protección.
