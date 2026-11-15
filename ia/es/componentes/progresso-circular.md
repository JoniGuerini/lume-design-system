# Progreso circular

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/progresso-circular

El mismo progreso de la barra, en un anillo. Cabe en una tarjeta, un encabezado o junto a un elemento de lista, donde la barra no tendría ancho.

En números: tamaños: 20 · 56 · 80 · tonos: 4 · formas: determinado e indeterminado · rol ARIA: progressbar.

## Ejemplo

```html
<span data-envio></span>

<script type="module">
  import { progressRingHtml, setProgressRing } from 'https://lumeui.dev/v/1.5/lume.js';

  const box = document.querySelector('[data-envio]');
  box.innerHTML = progressRingHtml(0, { label: 'Enviando archivos' });
  setProgressRing(box.firstElementChild, 62);
</script>
```

## Variantes

Los tonos son los de la barra: para el resultado, no para el medio del camino.

Tamaños `size: 'sm' · 'md' · 'lg'` — 20 px en una línea de texto, sin número; 56 px por defecto; 80 px cuando el progreso es el tema.

Indeterminado `progressRingHtml(null)` — Para cuando no se puede saber cuánto falta. Con movimiento reducido, el arco se detiene.

Tonos `tone: 'success' · 'warning' · 'danger'` — Completado, cerca del límite y con error. Siempre con un texto que diga el resultado.

- Lume 1.0
- Documentación para IA
- Lume 1.1

En una lista `size: 'sm'` — Junto al nombre, con el número escrito: el anillo pequeño no lleva número dentro.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-progress-ring ds-progress-ring--sm" role="progressbar" aria-label="Enviando archivos" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg></div>

<div class="ds-progress-ring" role="progressbar" aria-label="Enviando archivos" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">62&nbsp;%</span></div>

<div class="ds-progress-ring ds-progress-ring--lg" role="progressbar" aria-label="Enviando archivos" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">62&nbsp;%</span></div>

<div class="ds-progress-ring ds-progress-ring--sm" role="progressbar" aria-label="Preparando"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg></div>

<div class="ds-progress-ring" role="progressbar" aria-label="Preparando"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg></div>

<div class="ds-progress-ring ds-progress-ring--success" role="progressbar" aria-label="Enviado" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">100&nbsp;%</span></div>

<div class="ds-progress-ring ds-progress-ring--warning" role="progressbar" aria-label="Espacio usado" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">90&nbsp;%</span></div>

<div class="ds-progress-ring ds-progress-ring--danger" role="progressbar" aria-label="Fallo en el envío" aria-valuemin="0" aria-valuemax="100" aria-valuenow="38"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">38&nbsp;%</span></div>
```

## Código

El marcado viene listo; para cambiar el valor, llama a setProgressRing.

```html
<span data-envio></span>

<script type="module">
  import { progressRingHtml, setProgressRing } from 'https://lumeui.dev/v/1.5/lume.js';

  const box = document.querySelector('[data-envio]');
  box.innerHTML = progressRingHtml(0, { label: 'Enviando archivos' });
  const ring = box.firstElementChild;

  // en cada paso del envío
  setProgressRing(ring, 62);
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

El anillo es un progressbar con nombre y valor, como la barra nativa.

- Con nombre — Pasa `label` con lo que está progresando. Sin él, el anillo se llama “Progreso”.
- Valor — aria-valuenow lleva el número; el texto del centro es solo visual, para no leerse dos veces. Sin valor, es indeterminado.
- Avisa al final — Los lectores de pantalla no anuncian cada cambio: avisa el fin en role="status".
- No solo color — El éxito y el error necesitan texto al lado; el tono solo refuerza.

## Tokens usados

Los mismos de la barra de progreso.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.border.field (`--ds-color-border-field`) | Riel | #3E5166AD | #FFFFFF61 |
| color.brand.solid (`--ds-color-brand-solid`) | Relleno | #3E5166 | #C0CAD6 |
| color.success.solid (`--ds-color-success-solid`) | Completado | #1E854A | #72CB8B |
| color.warning.solid (`--ds-color-warning-solid`) | Atención | #FFB851 | #FFB851 |
| color.danger.solid (`--ds-color-danger-solid`) | Con error | #C13834 | #FF9087 |
| color.fg.default (`--ds-color-fg-default`) | Porcentaje | #2B3847 | #F3EDE5 |
| duration.base (`--ds-duration-base`) | Cambio de valor | 200ms | 200ms |

## Uso

¿Anillo, barra o spinner?

- **Haz:** donde la barra no cabe. En una tarjeta de envío, una fila de lista, un encabezado. Con ancho, la barra se lee mejor.
- **Evita:** medir lo que no es tarea. El espacio usado o la meta del mes son medidas: usa el Medidor o la Dona, en Gráficos.
- **Consejo:** ¿Espera corta? Spinner. Por debajo de 10 segundos y sin número para mostrar, basta un Spinner.
