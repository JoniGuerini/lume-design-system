# Control segmentado

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/controle-segmentado

Pocas opciones lado a lado, siempre visibles, con una elegida. El cambio vale al instante, como en los selectores de diseño y de vista del calendario.

En números: altura: 36 px · opciones: 2 – 4 · tipos: 2 · rol ARIA: radiogroup.

## Ejemplo

```html
<div class="ds-segmented" role="radiogroup" aria-label="Vista">
  <button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Mes</button>
  <button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Semana</button>
  <button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Día</button>
</div>

<script type="module">
  import { createSegmented } from 'https://lumeui.dev/v/0.41/lume.js';
  createSegmented(document.querySelector('.ds-segmented'), {
    onChange: (value) => trocar(value),
  });
</script>
```

## Variantes

Con texto, o solo con íconos cuando el sentido es conocido. Un ícono solo necesita nombre y tooltip.

Con texto `ds-segmented` — Lo más claro, para hasta cuatro opciones cortas.

Con íconos `aria-label` — Compacto, con el nombre en el tooltip y para el lector de pantalla.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Vista" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Mes</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Semana</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Día</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="Vista" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="lista" aria-checked="true" aria-label="Lista" data-ds-tooltip="Lista"><ds-icon name="list"></ds-icon></button><button type="button" class="ds-segmented__item" role="radio" data-value="grade" aria-checked="false" aria-label="Cuadrícula" data-ds-tooltip="Cuadrícula"><ds-icon name="grid"></ds-icon></button>
</div>
```

## Estados

La opción elegida sube con el fondo de los campos; las otras quedan atenuadas.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Vista" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true">Mes</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false">Semana</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Día</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="Vista" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="false">Mes</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="true">Semana</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false">Día</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="Vista" data-demo="">
<button type="button" class="ds-segmented__item" role="radio" data-value="mes" aria-checked="true" disabled="">Mes</button><button type="button" class="ds-segmented__item" role="radio" data-value="semana" aria-checked="false" disabled="">Semana</button><button type="button" class="ds-segmented__item" role="radio" data-value="dia" aria-checked="false" disabled="">Día</button>
</div>
```

## Accesibilidad

Funciona como un grupo de botones de radio.

- Un punto en el Tab — Tab — El Tab entra en la opción elegida y sale del grupo.
- Las flechas cambian — ← → — Las flechas pasan de una opción a otra, dando la vuelta, y la elección vale al instante.
- Nombre del grupo — El aria-label del grupo dice qué se está eligiendo.
- Ícono con nombre — Sin texto, cada opción necesita aria-label.

## Tokens usados

Todo lo que consume el control.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.sunken (`--ds-color-bg-sunken`) | Riel | #E8EDF3 | #151412 |
| color.bg.field (`--ds-color-bg-field`) | Opción elegida | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Contornos | #3E516633 | #FFFFFF1A |
| color.fg.default (`--ds-color-fg-default`) | Texto elegido | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Otras opciones | #46586E | #CEC8C1 |
| radius.full (`--ds-radius-full`) | Esquinas | 9999 px | 9999 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** de 2 a 4 opciones. Cambiar la vista del mismo contenido: mes o semana, lista o cuadrícula.
- **Evita:** muchas opciones. Con cinco o más, o textos largos, usa el Selector.
- **Consejo:** ¿Pestañas o segmentado?. Las pestañas cambian el contenido; el segmentado cambia la forma de ver el mismo contenido.
