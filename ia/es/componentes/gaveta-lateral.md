# Panel lateral

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/gaveta-lateral

Muestra detalles o una tarea sin sacar a la persona de la página. Entra por el borde y deja ver lo que hay detrás.

En números: lados: 3 · anchos: 360 · 480 · 640 · base: dialog · foco: atrapado.

## Ejemplo

```html
import { openDrawer } from 'https://lumeui.dev/v/1.1/lume.js';

openDrawer({
  side: 'right',
  title: '1042',
  body: detalhes,
});
```

## Variantes

La derecha es lo predeterminado. La de abajo funciona bien para elecciones rápidas.

Derecha `side: 'right'` — Para detalles de un elemento de una lista.

Izquierda `side: 'left'` — Para filtros o navegación extra.

Abajo `side: 'bottom'` — Para elecciones rápidas, sobre todo en el móvil.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--secondary" data-open="right"><ds-icon name="panel-left"></ds-icon>Abrir</button>

<button type="button" class="ds-btn ds-btn--secondary" data-open="left"><ds-icon name="filter"></ds-icon>Abrir</button>

<button type="button" class="ds-btn ds-btn--secondary" data-open="bottom"><ds-icon name="more-horizontal"></ds-icon>Abrir</button>
```

## Código

`openDrawer` devuelve una promesa con el valor de la acción elegida, como el Modal.

```html
import { openDrawer } from 'https://lumeui.dev/v/1.1/lume.js';

const escolha = await openDrawer({
  side: 'right',
  eyebrow: 'Pedido',
  title: '1042',
  body: detalhes,
  actions: [
    { label: 'Cerrar', value: 'close' },
    { label: 'Aprobar', value: 'approve', variant: 'primary' },
  ],
});
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Es un `dialog` nativo, como el Modal: el navegador se ocupa del foco y deja el resto de la página inerte.

- Foco atrapado — Tab — Mientras está abierto, el Tab solo se mueve adentro.
- Cerrar — Esc — Esc y el botón de cerrar siempre funcionan, y el foco vuelve a quien lo abrió.
- Con nombre — El título da nombre al panel para el lector de pantalla.
- Movimiento reducido — Sin animación de entrada para quien pidió menos movimiento.

## Tokens usados

Además de los tokens del Modal.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo | #FFFFFF | #2C2A27 |
| color.bg.overlay (`--ds-color-bg-overlay`) | Velo | #2B384759 | #00000099 |
| shadow.2xl (`--ds-shadow-2xl`) | Sombra | 0 12px 24px -6px rgb(45 58 74 / 0.1), 0 48px 96px -24px rgb(45 58 74 / 0.24) | 0 12px 24px -6px rgb(0 0 0 / 0.36), 0 48px 96px -24px rgb(0 0 0 / 0.72) |
| radius.xl (`--ds-radius-xl`) | Esquinas | 20 px | 20 px |
| layout.frame-gap (`--ds-layout-frame-gap`) | Espacio alrededor | 10 px | 10 px |
| duration.base (`--ds-duration-base`) | Entrada | 200ms | 200ms |

## Uso

¿Panel o Modal?

- **Haz:** mantener el contexto. Abrir el detalle de una fila y seguir viendo la lista detrás.
- **Evita:** decisiones rápidas. Para “¿Eliminar este proyecto?”, el Modal es directo y centrado.
- **Consejo:** Uno a la vez. Panel sobre panel confunde. Cambia el contenido en vez de apilar.
