# Popover

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/popover

Contenido que se abre al hacer clic, unido a su disparador, sin bloquear la pantalla. Está entre el Tooltip, que solo da una pista, y el Modal, que interrumpe.

En números: lados: 4 · alineaciones: 3 · ancho máximo: 340 px · rol ARIA: dialog.

## Ejemplo

```html
<button type="button" class="ds-btn ds-btn--secondary" id="detalhes">Abrir popover</button>

<script type="module">
  import { createPopover } from 'https://lumeui.dev/v/0.27/lume.js';
  createPopover(document.querySelector('#detalhes'), {
    title: 'Detalles',
    content: '<p>Contenido libre, que queda abierto hasta que la persona salga.</p>',
    placement: 'bottom',
    align: 'start',
  });
</script>
```

## Variantes

Puede ser solo un texto, tener título y botón de cerrar, o llevar controles.

Solo texto `content` — Una explicación mayor de lo que cabría en un tooltip.

Con título `title` — El título da nombre al panel y trae el botón de cerrar.

Con controles `Element` — Al abrir, el foco va al primer control.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-demo="text" aria-label="¿Qué es esto?" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-popover-2"><ds-icon name="help-circle"></ds-icon></button>

<button type="button" class="ds-btn ds-btn--secondary" data-demo="title" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-popover-3">Detalles</button>

<button type="button" class="ds-btn ds-btn--secondary" data-demo="form" aria-haspopup="dialog" aria-expanded="false" aria-controls="ds-popover-4"><ds-icon name="link"></ds-icon>Compartir</button>
```

## Código

Con `data-popover-close`, un botón de adentro también cierra el panel.

```html
import { createPopover } from 'https://lumeui.dev/v/0.27/lume.js';

const popover = createPopover(document.querySelector('#detalhes'), {
  title: 'Detalles',
  content: '<p>Contenido libre, que queda abierto hasta que la persona salga.</p>',
  placement: 'bottom',
  align: 'start',
});
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Un diálogo que no atrapa el foco: la persona puede salir con Tab.

- Abrir — Enter Espacio — El disparador es un botón común, con aria-expanded. El foco entra en el panel.
- Cerrar — Esc Tab — Esc cierra y devuelve el foco al disparador. Hacer clic fuera o salir con Tab también lo cierran.
- Con nombre — Sin título, pasa `label` para que el lector de pantalla sepa qué se abrió.

## Tokens usados

La misma superficie del Menú.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Contorno | #3E51664D | #FFFFFF29 |
| shadow.xl (`--ds-shadow-xl`) | Sombra | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| radius.lg (`--ds-radius-lg`) | Esquinas | 16 px | 16 px |
| color.fg.muted (`--ds-color-fg-muted`) | Texto | #46586E | #CEC8C1 |

## Uso

Qué capa elegir.

- **Haz:** contenido corto a pedido. Un detalle, un enlace para copiar o un filtro rápido.
- **Evita:** tareas largas. Para un formulario entero, usa el Panel lateral o el Modal.
- **Consejo:** ¿Una pista solo al pasar el cursor?. Si no necesita clic y cabe en una frase, es un Tooltip.
