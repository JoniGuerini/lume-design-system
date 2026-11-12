# Layout

Sección de Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/layout

Dónde quedan las cosas y cómo se reorganizan. Cinco breakpoints, un shell con medidas fijas y anchos máximos que protegen la lectura.

En números: breakpoints: 5 · sidebar (px): 288/76 · barra superior (px): 64 · contenido máx. (px): 1160.

## Breakpoints

Móvil primero: el layout base vale para pantallas pequeñas y cada breakpoint suma reglas desde su ancho. Cambia el tamaño de la ventana para ver moverse el marcador.

| Nombre | Desde | Media query | Qué cambia en el app |
| --- | --- | --- | --- |
| sm | 640 px | @media (min-width: 640px) | Todavía sin regla en el app — disponible para componentes. |
| md | 768 px | @media (min-width: 768px) | Por debajo, márgenes y paneles se compactan, la ruta de la barra superior muestra solo la página actual y las tablas se vuelven tarjetas. |
| lg | 1024 px | @media (min-width: 1024px) | Por debajo, la sidebar se vuelve un cajón con fondo oscurecido y el menú aparece en la barra superior. Desde él, la sidebar queda fija y contraíble (⌘B). |
| xl | 1280 px | @media (min-width: 1280px) | Por debajo, el héroe del Inicio se apila y las cuadrículas de 4 columnas pasan a 2. |
| 2xl | 1536 px | @media (min-width: 1536px) | Todavía sin regla en el app — las pantallas anchas mantienen el ancho máximo de contenido. |

## App shell

Dos paneles sobre el fondo del app: sidebar y contenido, con la barra superior dentro del contenido. El diagrama está a escala de una ventana de 1440 × 900.

|   |   |   |   |
| --- | --- | --- | --- |
| layout.sidebar — --ds-layout-sidebar | 288 px | Sidebar expandida. |  |
| layout.sidebar-collapsed — --ds-layout-sidebar-collapsed | 76 px | Sidebar contraída — solo los íconos, todos centrados en el mismo eje. |  |
| layout.topbar — --ds-layout-topbar | 64 px | Altura de la barra superior y del encabezado de la sidebar. |  |
| layout.frame-gap — --ds-layout-frame-gap | 10 px | Respiro entre el borde de la ventana y los dos paneles. |  |
| radius.2xl — --ds-radius-2xl | 28 px | Radio de los paneles del shell. |  |

## Anchos

Las pantallas anchas no deben estirar el contenido hasta el borde. Las páginas paran en 1160 px y el texto corrido en 720 px.

content-max — Ancho máximo del contenido de las páginas.

prose-max — Medida cómoda para texto corrido.

gutter — Margen lateral del contenido en el escritorio.

prose-max en la práctica — 720 px · ≈ 101 caracteres por línea — Una buena línea de lectura tiene entre 60 y 80 caracteres. Más corta, el ojo salta de línea todo el tiempo; más larga, se pierde en el camino de vuelta. Por eso el texto corrido tiene su propio ancho máximo, menor que el del contenido, y los títulos pueden ocupar todo el ancho sin perjudicar la lectura.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-copy="var(--ds-layout-content-max)" aria-label="Copiar variable: var(--ds-layout-content-max)" data-ds-tooltip="Copiar variable"><ds-icon name="copy"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-copy="var(--ds-layout-prose-max)" aria-label="Copiar variable: var(--ds-layout-prose-max)" data-ds-tooltip="Copiar variable"><ds-icon name="copy"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-copy="var(--ds-layout-gutter)" aria-label="Copiar variable: var(--ds-layout-gutter)" data-ds-tooltip="Copiar variable"><ds-icon name="copy"></ds-icon></button>
```

## Cuadrícula

Dos patrones de cuadrícula cubren el sitio. Arrastra para cambiar el ancho del contenedor y mira cómo se reorganiza cada uno. El espacio entre elementos es siempre space.150 (12 px).

Ancho del contenedor — 1020 px

Columnas fijas que colapsan — 4 columnas — auto-fill con mínimo — 3 columnas

```html
/* columnas fijas: tarjetas de igual importancia */
grid-template-columns: repeat(4, minmax(0, 1fr));
/* y menos columnas en cada breakpoint */
```

```html
/* auto-fill: las columnas aparecen solas */
grid-template-columns:
  repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
```

## Capas

El orden de apilamiento es una escala fija: nada de z-index 9999. Cuanto más arriba en la lista, más adelante.

|   |   |   |   |   |
| --- | --- | --- | --- | --- |
|  | tooltip — --ds-z-tooltip | 1600 | Tooltips y el enlace “Saltar al contenido”. |  |
|  | toast — --ds-z-toast | 1500 | Avisos de confirmación. |  |
|  | popover — --ds-z-popover | 1400 | Menús que abren los chips. |  |
|  | modal — --ds-z-modal | 1300 | Reservado. La búsqueda ⌘K usa <dialog>, que ya va a la capa superior del navegador. |  |
|  | overlay — --ds-z-overlay | 1200 | Fondo oscurecido del cajón — el cajón queda un nivel arriba. |  |
|  | sticky — --ds-z-sticky | 1100 | La barra superior fija y la navegación de esta página. |  |
|  | dropdown — --ds-z-dropdown | 1000 | Reservado para listas desplegables. |  |
|  | raised — --ds-z-raised | 1 | Reservado para algo que deba quedar por encima de sus vecinos. |  |
|  | base — --ds-z-base | 0 | Contenido en el flujo normal. |  |

## Uso

Reglas para que el layout siga siendo previsible en cualquier pantalla.

- **Haz:** limita el ancho con tokens. Contenido hasta content-max, texto corrido hasta prose-max. En pantallas pequeñas, el ancho viene del contenedor.
- **Evita:** medidas mágicas. Los breakpoints y anchos inventados en el momento crean saltos que nadie puede prever.
- **Consejo:** @media no lee variables. Las custom properties no funcionan dentro de media queries. Usa el valor en px del token y, para “por debajo de”, resta una fracción.
