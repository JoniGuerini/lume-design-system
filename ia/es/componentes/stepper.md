# Stepper

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/stepper

Muestra las etapas de un flujo, cuántas faltan y dónde está la persona. Bueno para registros y configuraciones por partes.

En números: orientaciones: 2 · estados: 3 · marcador: 28 px · atributo: aria-current.

## Ejemplo

```html
<ol class="ds-stepper"></ol>

<script type="module">
  import { createStepper } from 'https://lumeui.dev/v/1.3/lume.js';
  createStepper(document.querySelector('.ds-stepper'), {
    steps: [{ label: 'Cuenta' }, { label: 'Perfil' }, { label: 'Equipo' }, { label: 'Listo' }],
    current: 1,
    clickable: true,
  });
</script>
```

## Variantes

En horizontal caben pocas etapas con nombres cortos. Con descripciones largas o muchas etapas, usa la vertical.

Horizontal `ds-stepper` — Solo el nombre de cada etapa. En el móvil, se vuelve una lista.

Vertical `ds-stepper--vertical` — Con espacio para una descripción.

Marcado de los ejemplos de esta sección:

```html
<ol class="ds-stepper" data-demo="plain"><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true"><ds-icon name="check"></ds-icon></span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Cuenta<span class="ds-visually-hidden"> (completada)</span></span>
</span></div></li><li class="ds-stepper__step" aria-current="step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">2</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Perfil</span>
</span></div></li><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">3</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Equipo</span>
</span></div></li></ol>

<ol class="ds-stepper ds-stepper--vertical" data-demo="vertical"><li class="ds-stepper__step"><button type="button" class="ds-stepper__content" data-step="0"><span class="ds-stepper__marker" aria-hidden="true"><ds-icon name="check"></ds-icon></span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Cuenta<span class="ds-visually-hidden"> (completada)</span></span>
<span class="ds-stepper__description">Correo y contraseña</span>
</span></button></li><li class="ds-stepper__step" aria-current="step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">2</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Perfil</span>
<span class="ds-stepper__description">Nombre y foto</span>
</span></div></li><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">3</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Equipo</span>
<span class="ds-stepper__description">Invitaciones</span>
</span></div></li></ol>
```

## Estados

Cada etapa recibe `data-state`: hecha, actual o próxima. La diferencia también viene del número y la marca, no solo del color.

Marcado de los ejemplos de esta sección:

```html
<ol class="ds-stepper" data-demo="states"><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true"><ds-icon name="check"></ds-icon></span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Hecha<span class="ds-visually-hidden"> (completada)</span></span>
</span></div></li><li class="ds-stepper__step" aria-current="step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">2</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Actual</span>
</span></div></li><li class="ds-stepper__step"><div class="ds-stepper__content"><span class="ds-stepper__marker" aria-hidden="true">3</span>
<span class="ds-stepper__text">
<span class="ds-stepper__label">Próxima</span>
</span></div></li></ol>
```

## Código

El contenido de cada etapa es tuyo; el stepper solo muestra el camino.

```html
import { createStepper } from 'https://lumeui.dev/v/1.3/lume.js';

const stepper = createStepper(document.querySelector('.ds-stepper'), {
  steps: [{ label: 'Cuenta' }, { label: 'Perfil' }, { label: 'Listo' }],
  clickable: true,
  onChange: (index) => mostrar(index),
});

stepper.next();
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Es una lista ordenada común, así que el lector de pantalla ya dice cuántas etapas hay.

- Etapa actual — Marcada con aria-current="step".
- Etapas hechas — La marca es un dibujo; el texto “completada” se lee junto con el nombre.
- Volver con el teclado — Tab Enter — Con etapas clicables, las ya hechas son botones en el Tab. Las próximas no reciben foco.
- Lleva el foco — Al cambiar de etapa, mueve el foco al título de la nueva etapa.

## Tokens usados

Todo lo que consume el stepper.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.brand.solid (`--ds-color-brand-solid`) | Marcador hecho y actual | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Número y marca | #F8FAFD | #1D2734 |
| color.border.field (`--ds-color-border-field`) | Marcador de las próximas | #3E5166AD | #FFFFFF61 |
| color.border.default (`--ds-color-border-default`) | Línea entre etapas | #3E516633 | #FFFFFF1A |
| color.fg.muted (`--ds-color-fg-muted`) | Nombre de las próximas | #46586E | #CEC8C1 |
| radius.full (`--ds-radius-full`) | Marcador | 9999 px | 9999 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** de 3 a 5 etapas. Etapas con inicio y fin claros, en orden.
- **Evita:** navegación libre. Si la persona puede ir a cualquier parte en cualquier orden, usa Pestañas.
- **Consejo:** Guarda lo completado. Volver una etapa nunca debe borrar lo que la persona ya hizo.
