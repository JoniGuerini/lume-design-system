# Barra de desplazamiento

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/barra-de-rolagem

Una sola barra, sin riel ni flechas, igual en cualquier sistema. Aparece mientras la persona se desplaza y no ocupa espacio en el diseño.

En números: función: 1 · grosor: 6 px · área de agarre: 12 px · desaparece en: 0,9 s.

## Ejemplo

```html
<div class="painel" tabindex="0" role="region" aria-label="…">
  …
</div>

<script type="module">
  import { initScrollbars } from 'https://lumeui.dev/v/1.0/lume.js';
  initScrollbars();
</script>
```

## Variantes

Todas funcionan aquí: solo desplázate.

Desplaza esta área para ver la barra. — Aparece mientras te desplazas. — Desaparece cerca de un segundo después de parar. — Mientras está visible, se puede arrastrar. — Con el puntero encima, se hace más gruesa y no desaparece. — Si la página se desplaza, sigue al área. — No hay riel ni flechas. — No ocupa espacio en el diseño. — Funciona en cualquier área con desplazamiento. — Línea 9 — Línea 10 — Línea 11 — Línea 12 — Línea 13 — Línea 14 — Línea 15 — Línea 16 — Línea 17 — Línea 18 — Línea 19 — Línea 20 — Vertical `predeterminada` — En el borde derecho del área. — 1 — 2 — 3 — 4 — 5 — 6 — 7 — 8 — 9 — 10 — 11 — 12 — 13 — 14 — Horizontal `predeterminada` — En el borde inferior. Para desplazar: Shift + rueda, trackpad o ← →. — Encabezado fijo — Desplaza esta área para ver la barra. — Aparece mientras te desplazas. — Desaparece cerca de un segundo después de parar. — Mientras está visible, se puede arrastrar. — Con el puntero encima, se hace más gruesa y no desaparece. — Si la página se desplaza, sigue al área. — No hay riel ni flechas. — No ocupa espacio en el diseño. — Funciona en cualquier área con desplazamiento. — Línea 9 — Línea 10 — Línea 11 — Línea 12 — Línea 13 — Línea 14 — Línea 15 — Línea 16 — Línea 17 — Línea 18 — Línea 19 — Línea 20 — Con margen `--ds-scrollbar-start` — Empieza debajo de un encabezado fijo. — Desplaza esta área para ver la barra. — Aparece mientras te desplazas. — Desaparece cerca de un segundo después de parar. — Mientras está visible, se puede arrastrar. — Con el puntero encima, se hace más gruesa y no desaparece. — Si la página se desplaza, sigue al área. — No hay riel ni flechas. — No ocupa espacio en el diseño. — Funciona en cualquier área con desplazamiento. — Línea 9 — Línea 10 — Línea 11 — Línea 12 — Línea 13 — Línea 14 — Línea 15 — Línea 16 — Línea 17 — Línea 18 — Línea 19 — Línea 20 — Sin barra `--ds-scrollbar: none` — Para listas cortas en horizontal, como pestañas.

## Estados

Hover se puede forzar con `data-state`; arrastrando, con `data-active`.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-scrollbar ds-scrollbar--y" data-visible=""></div>

<div class="ds-scrollbar ds-scrollbar--y" data-visible="" data-active=""></div>
```

## Código

Basta activarla una vez. Las áreas que entran después también reciben la barra.

```html
import { initScrollbars } from 'https://lumeui.dev/v/1.0/lume.js';

initScrollbars();

/* Ajustes por área, en el CSS de la propia área con desplazamiento */
.painel {
  --ds-scrollbar-start: 64px; /* margen superior */
  --ds-scrollbar-end: 16px;   /* margen inferior */
}

.abas {
  --ds-scrollbar: none;       /* sin barra */
}
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

El desplazamiento sigue siendo el del navegador; la barra solo muestra dónde está la persona.

- Teclado — ↑ ↓ PgUp PgDn — El desplazamiento nativo sigue. Un área sin nada enfocable necesita `tabindex="0"`, `role` y un nombre.
- Lector de pantalla — La barra es solo visual, con `aria-hidden`. El contenido se lee normalmente.
- Sin aviso falso — No parpadea cuando el código se desplaza solo, al abrir una página. Solo aparece con la acción de la persona.
- Muestra que hay más — Con la barra oculta, deja el contenido cortado en el borde, para indicar que se puede desplazar.

## Tokens usados

Todo lo que consume la barra.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.border.field (`--ds-color-border-field`) | Barra | #3E5166AD | #FFFFFF61 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Hover y arrastrando | #5C6C7F | #9C9792 |
| radius.full (`--ds-radius-full`) | Extremos | 9999 px | 9999 px |
| z.popover (`--ds-z-popover`) | Capa | 1400 | 1400 |
| duration.fast (`--ds-duration-fast`) | Aparecer y engrosar | 120ms | 120ms |
| duration.slow (`--ds-duration-slow`) | Desaparecer | 320ms | 320ms |

## Uso

Cuándo usarla y cuándo preferir otra cosa.

- **Haz:** actívala en toda la app. Una sola llamada, al iniciar. Así toda área se desplaza igual.
- **Evita:** ocultarla donde ayuda. Usa --ds-scrollbar: none solo en listas cortas, nunca en contenido largo.
- **Consejo:** ¿Encabezado fijo?. Indica su altura en --ds-scrollbar-start, para que la barra no pase por debajo.
