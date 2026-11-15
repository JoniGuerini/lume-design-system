# Volver arriba

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/voltar-ao-topo

En páginas largas, lleva de vuelta al inicio con un clic. Queda oculto hasta que la persona se haya desplazado bastante.

En números: tamaño: 40 px · aparece tras: 1 pantalla · ancla: contenedor · función: 1.

## Ejemplo

```html
import { createBackToTop } from 'https://lumeui.dev/v/1.5/lume.js';

createBackToTop(document.querySelector('.painel__rolagem'));
```

## Estados

Hover y foco se pueden forzar con `data-state`. El botón solo aparece con `data-visible`.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-back-to-top" data-visible="" aria-label="Volver arriba"><ds-icon name="arrow-up"></ds-icon></button>
```

## Código

El botón entra en `parent`, que necesita `position`.

```html
import { createBackToTop } from 'https://lumeui.dev/v/1.5/lume.js';

const back = createBackToTop(document.querySelector('.painel__rolagem'), {
  parent: document.querySelector('.painel'),
  threshold: 600, // opcional; el predeterminado es una pantalla del área
});

back.destroy();
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Pensado para quien no usa mouse, y para quien prefiere menos movimiento.

- Foco en el contenido — Tab Enter — Al hacer clic, el foco va al inicio del contenido. El siguiente Tab sigue desde ahí, no desde el medio de la página.
- Oculto de verdad — Mientras no aparece, el botón queda fuera del Tab y del lector de pantalla.
- Menos movimiento — Quien pidió menos movimiento en el sistema vuelve arriba sin animación.
- Nombre — El ícono tiene nombre en los tres idiomas, y el mismo texto aparece en el tooltip.

## Tokens usados

Todo lo que consume el botón.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Tamaño | 40 px | 40 px |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Contorno | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Contorno en hover | #3E51664D | #FFFFFF29 |
| color.fg.muted (`--ds-color-fg-muted`) | Ícono | #46586E | #CEC8C1 |
| radius.full (`--ds-radius-full`) | Esquinas | 9999 px | 9999 px |
| shadow.md (`--ds-shadow-md`) | Lo separa del contenido | 0 2px 4px -1px rgb(45 58 74 / 0.06), 0 8px 20px -4px rgb(45 58 74 / 0.1) | 0 2px 4px -1px rgb(0 0 0 / 0.28), 0 8px 20px -4px rgb(0 0 0 / 0.36) |
| duration.base (`--ds-duration-base`) | Aparecer y desaparecer | 200ms | 200ms |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** páginas muy largas. Documentación, listas e historiales, donde volver desplazándose da trabajo.
- **Evita:** páginas cortas. Si la página cabe en dos pantallas, el botón solo ocupa espacio.
- **Consejo:** Uno por área. ¿Más de un área con desplazamiento en la pantalla? Da el botón solo a la principal.
