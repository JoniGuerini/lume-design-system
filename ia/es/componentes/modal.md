# Modal

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/modal

Interrumpe el flujo para una decisión o una tarea corta. Úsalo poco: todo lo que puede quedarse en la página, se queda en la página.

En números: tamaños: 3 · tonos: 2 · se cierra con: Esc · base: <dialog>.

## Ejemplo

```html
import { openModal } from './ds/js/modal.js';

const eleccion = await openModal({
  eyebrow: 'Proyecto',
  title: '¿Publicar cambios?',
  body: 'Los cambios quedan visibles para todo el equipo en cuanto publiques.',
  actions: [
    { label: 'Cancelar', value: 'cancel' },
    { label: 'Publicar', value: 'confirm', variant: 'primary' },
  ],
});

// eleccion → valor de la acción, o undefined si se cerró con ×, Esc o clic fuera
```

## Anatomía

Cinco partes. El título y al menos una salida son obligatorios; el resto depende de la decisión.

- 1 — Encabezado — Etiqueta opcional y título en `text.heading-lg`. El título es la pregunta: “¿Publicar cambios?”.
- 2 — Cerrar — Botón de ícono con `aria-label`. Desaparece cuando el modal exige una elección (`dismissible: false`).
- 3 — Cuerpo — Texto en `text.body-md` y color secundario. Si crece, solo el cuerpo se desplaza — encabezado y acciones quedan en su lugar.
- 4 — Pie — Acciones a la derecha, la principal al final. En el móvil se apilan, con la principal arriba.
- 5 — Fondo — `color.bg.overlay`, plano y sin desenfoque. La página sigue visible — e inerte hasta que el modal se cierra.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-modal ds-modal--inline" role="presentation">
<header class="ds-modal__header">
<div class="ds-modal__heading">
<p class="ds-modal__eyebrow">Proyecto</p>
<h2 class="ds-modal__title" id="md-prev-title">¿Publicar cambios?</h2>
</div>
<button type="button" class="ds-icon-btn ds-icon-btn--muted ds-modal__close" data-ds-modal-close="" aria-label="Cerrar"><ds-icon name="x"></ds-icon></button>
</header>
<div class="ds-modal__body" id="md-prev-body">Los cambios quedan visibles para todo el equipo en cuanto publiques.</div>
<footer class="ds-modal__footer"><button type="button" class="ds-btn ds-btn--secondary" data-ds-modal-close="cancel">Cancelar</button><button type="button" class="ds-btn ds-btn--primary" data-ds-modal-close="confirm">Publicar</button></footer></div>
```

## Tamaños

El ancho sigue al contenido, nunca a la pantalla. En el móvil todos ocupan el ancho disponible.

Pequeño `size: 'sm'`

Confirmaciones y avisos de una frase.

Mediano — predeterminado — `—`

El predeterminado: decisiones con contexto y formularios cortos.

Grande `size: 'lg'`

Contenido más grande, como una vista previa o una lista para revisar.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-open-size="sm"><ds-icon name="arrow-up-right"></ds-icon>Abrir</button>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-open-size="md"><ds-icon name="arrow-up-right"></ds-icon>Abrir</button>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-open-size="lg"><ds-icon name="arrow-up-right"></ds-icon>Abrir</button>
```

## Confirmación destructiva

Para lo que no tiene vuelta atrás. El tono de peligro cambia el ícono y la acción — y el foco empieza en “Cancelar”.

- Título con el objeto: “¿Eliminar ‘Lanzamiento 0.1’?”, nunca “¿Estás seguro?”.
- El cuerpo dice la consecuencia y si se puede deshacer.
- El botón repite el verbo: “Eliminar proyecto”, no “Sí”.
- Foco inicial en la salida segura, para que Enter no borre nada por error.

```html
const ok = await confirmModal({
  title: '¿Eliminar “Lanzamiento 0.1”?',
  body: 'El proyecto y sus 12 archivos se borrarán.',
  confirmLabel: 'Eliminar proyecto',
  tone: 'danger',
}); // → true o false
```

Marcado de los ejemplos de esta sección:

```html
<div class="ds-modal ds-modal--sm ds-modal--danger ds-modal--inline" role="presentation">
<header class="ds-modal__header">
<span class="ds-modal__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-modal__heading">
<h2 class="ds-modal__title" id="md-prev-title">¿Eliminar “Lanzamiento 0.1”?</h2>
</div>
<button type="button" class="ds-icon-btn ds-icon-btn--muted ds-modal__close" data-ds-modal-close="" aria-label="Cerrar"><ds-icon name="x"></ds-icon></button>
</header>
<div class="ds-modal__body" id="md-prev-body">El proyecto y sus 12 archivos se borrarán. No se puede deshacer.</div>
<footer class="ds-modal__footer"><button type="button" class="ds-btn ds-btn--secondary" data-ds-modal-close="cancel">Cancelar</button><button type="button" class="ds-btn ds-btn--danger" data-ds-modal-close="confirm">Eliminar proyecto</button></footer></div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>

<button type="button" class="ds-btn ds-btn--danger" data-open-confirm=""><ds-icon name="trash"></ds-icon>Eliminar proyecto…</button>
```

## Comportamiento

El <dialog> nativo resuelve el foco y las capas. El componente se encarga del resto.

Foco inicial

Va al primer campo del cuerpo; sin campos, a la acción principal (o a “Cancelar”, en el tono de peligro).

Tres salidas

Esc, clic fuera y el botón ×. Con `dismissible: false`, solo las acciones lo cierran.

Foco devuelto

Al cerrar, el foco vuelve a quien abrió el modal — la persona sigue desde donde estaba.

Contenido largo

El modal nunca supera la altura de la pantalla: el cuerpo se desplaza, encabezado y pie quedan fijos.

Movimiento

Entra con `duration.base` + emphasized y sale con `duration.fast` + accelerate. Con movimiento reducido, aparece directamente.

Una sola capa

Nada de modal sobre modal. Si la tarea pide un segundo paso, ocurre dentro del mismo modal.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M13 2.5 4.5 13.5H12l-1 8 8.5-11H12z"></path></svg>

<button type="button" class="ds-inline-action" data-open-demo="form"><ds-icon name="arrow-up-right"></ds-icon>Abrir con formulario</button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M9 6h11M9 12h11M9 18h11"></path><path d="M4.5 6h.01"></path><path d="M4.5 12h.01"></path><path d="M4.5 18h.01"></path></svg>

<button type="button" class="ds-inline-action" data-open-demo="long"><ds-icon name="arrow-up-right"></ds-icon>Abrir con texto largo</button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3 12h4l2.5-6 5 12L17 12h4"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>
```

## Accesibilidad

Por ser un <dialog> abierto con showModal, el navegador ya lo anuncia, atrapa el foco y deja el resto de la página inerte.

- Nombre y descripción — El título se vuelve `aria-labelledby` y el cuerpo, `aria-describedby` — el lector de pantalla lee los dos al abrir.
- Teclado — Tab Shift Tab Esc — Tab circula solo dentro del modal; Esc lo cierra (cuando se permite).
- Foco atrapado y devuelto — Nadie se pierde detrás del fondo. Al cerrar, el foco vuelve al disparador.
- Cerrar con nombre — El × tiene `aria-label="Cerrar"`. Cámbialo con `closeLabel` si el contexto lo pide.
- Sin trampa — Todo modal tiene una salida por teclado. Sin pie, el × es obligatorio.
- Movimiento reducido — Con `prefers-reduced-motion`, el modal aparece y desaparece sin animación.

## Tokens usados

Superficie elevada, fondo plano y movimiento corto.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo del modal | #FFFFFF | #2C2A27 |
| color.border.subtle (`--ds-color-border-subtle`) | Borde | #3E516624 | #FFFFFF0F |
| radius.2xl (`--ds-radius-2xl`) | Radio | 28 px | 28 px |
| shadow.2xl (`--ds-shadow-2xl`) | Sombra | 0 12px 24px -6px rgb(45 58 74 / 0.1), 0 48px 96px -24px rgb(45 58 74 / 0.24) | 0 12px 24px -6px rgb(0 0 0 / 0.36), 0 48px 96px -24px rgb(0 0 0 / 0.72) |
| color.bg.overlay (`--ds-color-bg-overlay`) | Fondo de la página detrás | #2B384759 | #00000099 |
| text.heading-lg (`--ds-text-heading-lg`) | Título | 26/32 · regular | 26/32 · regular |
| text.body-md (`--ds-text-body-md`) | Cuerpo | 16/28 · regular | 16/28 · regular |
| color.fg.muted (`--ds-color-fg-muted`) | Color del cuerpo | #46586E | #CEC8C1 |
| color.danger.subtle (`--ds-color-danger-subtle`) | Ícono en el tono de peligro | #FFF4F3 | #FF908721 |
| space.400 (`--ds-space-400`) | Espacio interno | 32 px | 32 px |
| duration.base (`--ds-duration-base`) | Entrada | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Curva de entrada | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| duration.fast (`--ds-duration-fast`) | Salida | 120ms | 120ms |
| easing.accelerate (`--ds-easing-accelerate`) | Curva de salida | cubic-bezier(0.3, 0, 1, 1) | cubic-bezier(0.3, 0, 1, 1) |

## Uso

Antes de abrir un modal, pregúntate si la página no lo resuelve.

- **Haz:** decisiones que bloquean. Confirmar algo irreversible, elegir antes de seguir, una tarea de un solo paso.
- **Evita:** modal para avisar. “Guardado con éxito” no necesita detener a nadie — usa un toast. Y nunca abras un modal sobre otro.
- **Consejo:** El título pregunta, el botón responde. “¿Eliminar proyecto?” → “Eliminar proyecto”. Se puede decidir leyendo solo el título y el botón.
