# Menú

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/menu

Una lista de opciones que se abre desde un disparador. Sirve para elegir un valor — como en los chips — o para ejecutar acciones.

En números: modos: 2 · tipos de elemento: 6 · teclas: 8 · función: createMenu.

## Ejemplo

```html
import { createMenu } from 'https://lumeui.dev/v/1.0/lume.js';

const menu = createMenu(disparador, {
  label: 'Ordenar por',
  value: 'recent',
  options: [
    { value: 'recent', label: 'Más recientes', icon: 'clock' },
    { value: 'name', label: 'Nombre', icon: 'type' },
    { value: 'size', label: 'Tamaño', icon: 'bar-chart' },
    { value: 'kind', label: 'Tipo de archivo', icon: 'file-text' },
  ],
  onChange: (valor) => ordenar(valor),
});

// al salir de la página: menu.destroy();
```

## Modos

La misma función, dos trabajos. Elige según lo que pasa después del clic.

Selección `mode: 'radio'` — Guarda un valor. El elemento actual gana la marca y el disparador muestra la elección. Es el predeterminado.

Acción `mode: 'action'` — Ejecuta un comando y desaparece. Sin marca de selección; admite atajos, separadores y un elemento de peligro.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-chip" data-mn-demo="radio" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-32"><span class="ds-chip__icon"><ds-icon name="filter"></ds-icon></span><span data-mn-label="">Más recientes</span><span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-mn-demo="action" aria-label="Más opciones" data-ds-tooltip="Más opciones" data-ds-tooltip-placement="bottom" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-33"><ds-icon name="more-horizontal"></ds-icon></button>
```

## Columnas

Una lista larga no se desplaza ni se vuelve un menú gigante: con maxRows, cada columna lleva como máximo esa cantidad de elementos y el resto pasa a la columna de al lado, repartido por igual. Es lo que usa la navbar en sus grupos.

En columnas `maxRows: 5` — 16 elementos con hasta 5 por columna se vuelven 4 columnas de 4 — no 5, 5, 5 y 1. ↑/↓ bajan por la columna y pasan a la siguiente; ←/→ saltan de columna. Cerca del borde, el menú se desliza para caber en la pantalla.

```html
createMenu(boton, {
  label: 'Componentes',
  options: paginas.map((p) => ({ value: p.href, label: p.label, icon: p.icon })),
  maxRows: 5,   // como máximo 5 por columna, equilibrado
  onChange: (href) => (location.hash = href),
});
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-chip" data-mn-demo="columns" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-31"><span>Componentes</span><span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Elementos

Cada elemento es un objeto en `options`. Los especiales organizan la lista sin volverse opciones.

- Etiqueta del menú `label: 'Ordenar por'` — Opcional. Dice qué se está eligiendo y se vuelve el nombre del menú.
- Elemento con ícono `{ value, label, icon: 'clock' }` — Ícono de 18 px a la izquierda. Úsalo en todos los elementos o en ninguno.
- Seleccionado `value: 'name'` — En el modo selección, la marca en el color de la marca indica el valor actual.
- Grupo `{ type: 'group', label: 'Archivo' }` — Un título pequeño para separar temas en una lista larga.
- Atajo `shortcut: '⌘D'` — Solo en el modo acción. Enseña la tecla sin ocupar espacio.
- Desactivado `disabled: true` — Queda visible, pero el teclado lo salta. Prefiere ocultarlo si nunca va a funcionar.
- Separador `{ type: 'separator' }` — Una línea entre bloques — antes de lo destructivo, por ejemplo.
- Peligro `tone: 'danger'` — Para eliminar y similares. Siempre al final, después de un separador.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-menu" data-open=""><p class="ds-menu__label" aria-hidden="true">Ordenar por</p><button type="button" class="ds-menu__item" role="menuitemradio" aria-checked="false" data-value="recent">
<ds-icon name="clock"></ds-icon><span class="ds-menu__text">Más recientes</span><ds-icon name="check"></ds-icon>
</button><button type="button" class="ds-menu__item" role="menuitemradio" aria-checked="true" data-value="name">
<ds-icon name="type"></ds-icon><span class="ds-menu__text">Nombre</span><ds-icon name="check"></ds-icon>
</button><button type="button" class="ds-menu__item" role="menuitemradio" aria-checked="false" data-value="size">
<ds-icon name="bar-chart"></ds-icon><span class="ds-menu__text">Tamaño</span><ds-icon name="check"></ds-icon>
</button><button type="button" class="ds-menu__item" role="menuitemradio" aria-checked="false" data-value="kind">
<ds-icon name="file-text"></ds-icon><span class="ds-menu__text">Tipo de archivo</span><ds-icon name="check"></ds-icon>
</button></div>

<div class="ds-menu" data-mode="action" data-open=""><p class="ds-menu__group" aria-hidden="true">Archivo</p><button type="button" class="ds-menu__item" role="menuitem" data-value="duplicate">
<ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicar</span><span class="ds-menu__shortcut">⌘D</span>
</button><button type="button" class="ds-menu__item" role="menuitem" data-value="export">
<ds-icon name="download"></ds-icon><span class="ds-menu__text">Exportar PDF</span><span class="ds-menu__shortcut">⌘E</span>
</button><button type="button" class="ds-menu__item" role="menuitem" aria-disabled="true" data-value="share">
<ds-icon name="link"></ds-icon><span class="ds-menu__text">Compartir</span>
</button><div class="ds-menu__separator" role="separator"></div><button type="button" class="ds-menu__item ds-menu__item--danger" role="menuitem" data-value="delete">
<ds-icon name="trash"></ds-icon><span class="ds-menu__text">Eliminar</span>
</button></div>
```

## Estados

Hover y foco tienen el mismo fondo y se pueden forzar con `data-state`.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-menu__item"><ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicar</span></button>

<button type="button" class="ds-menu__item" aria-checked="true"><ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicar</span><ds-icon name="check"></ds-icon></button>

<button type="button" class="ds-menu__item ds-menu__item--danger"><ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicar</span></button>

<button type="button" class="ds-menu__item" aria-disabled="true"><ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicar</span></button>
```

## Teclado

Todo lo que se puede hacer con el ratón se puede hacer sin él.

| Tecla | En el disparador | Con el menú abierto |
| --- | --- | --- |
| ↓ | Abre el menú en el elemento actual | Va al siguiente elemento (vuelve al principio al final) |
| ↑ | Abre el menú (en el modo acción, por el último elemento) | Va al elemento anterior |
| Home | — | Primer elemento |
| End | — | Último elemento |
| Enter | Abre o cierra | Elige el elemento con foco |
| Espacio | Abre o cierra | Elige el elemento con foco |
| A–Z | — | Salta al siguiente elemento que empieza con la letra |
| Esc | — | Cierra y devuelve el foco al disparador |
| Tab | — | Cierra y sigue al siguiente elemento |

## Accesibilidad

createMenu ya pone los atributos ARIA en el disparador y en el menú.

- Disparador anunciado — Recibe `aria-haspopup="menu"`, `aria-expanded` y `aria-controls` — el lector de pantalla sabe que abre algo.
- Los roles correctos — La selección usa `menuitemradio` con `aria-checked`; la acción usa `menuitem`.
- Foco con sentido — ↓ Esc — Al abrir, va al elemento seleccionado (o al primero). Al cerrar con Esc o elegir, vuelve al disparador.
- Se cierra solo — Hacer clic fuera, desplazar la página o cambiar el tamaño cierran el menú sin atrapar a nadie.
- Botón de ícono con nombre — Si el disparador es solo un ícono, dale `aria-label` y una pista.
- No depende del color — El seleccionado tiene marca; el peligro tiene ícono y posición propia, además del color.

## Tokens usados

Flota sobre el contenido, por eso el borde fuerte y la sombra mayor.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Borde | #3E51664D | #FFFFFF29 |
| radius.lg (`--ds-radius-lg`) | Radio del menú | 16 px | 16 px |
| shadow.xl (`--ds-shadow-xl`) | Sombra | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| text.label-md (`--ds-text-label-md`) | Elementos | 14/20 · medium | 14/20 · medium |
| color.bg.hover (`--ds-color-bg-hover`) | Elemento con foco | #3E51660D | #FFFFFF0D |
| color.fg.brand (`--ds-color-fg-brand`) | Marca de seleccionado | #3E5166 | #DAE0E8 |
| color.danger.fg (`--ds-color-danger-fg`) | Elemento de peligro | #C13834 | #FFB2AA |
| color.danger.subtle (`--ds-color-danger-subtle`) | Peligro con foco | #FFF4F3 | #FF908721 |
| color.border.subtle (`--ds-color-border-subtle`) | Separador | #3E516624 | #FFFFFF0F |
| duration.fast (`--ds-duration-fast`) | Abrir y cerrar | 120ms | 120ms |
| easing.emphasized (`--ds-easing-emphasized`) | Curva del deslizamiento | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| z.popover (`--ds-z-popover`) | Capa | 1400 | 1400 |

## Uso

El menú esconde opciones. Vale la pena cuando son demasiadas para mostrar y pocas para buscar.

- **Haz:** de 3 a 12 opciones. Orden, filtros, acciones secundarias de un elemento — lo que no necesita estar siempre visible.
- **Evita:** 2 opciones o 40. Dos caben en un control segmentado o en chips. Decenas piden un selector con búsqueda.
- **Consejo:** Lo destructivo al final. Separado por una línea, lejos de lo que es seguro hacer clic.
