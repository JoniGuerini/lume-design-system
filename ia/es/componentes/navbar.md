# Navbar

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/navbar

La misma navegación de la sidebar, acostada arriba: enlaces directos, un menú por grupo y la búsqueda. Cuando falta espacio, la búsqueda se encoge y los últimos elementos pasan a Más.

En números: altura: 64 px · a partir de: 1024 px · menú: columnas · sin espacio: Más.

## En vivo

La navbar de este sitio, con las páginas de verdad. Achica la ventana y mira cómo la búsqueda se encoge y los elementos pasan a Más. Los menús se abren, y elegir una página solo marca su grupo.

Todo cabe

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sh-navbar-width">Ancho de la ventana</label>
<output class="ds-slider__value" for="sh-navbar-width">1440 px</output>
</div>
<div class="ds-slider"><input class="ds-slider__input" id="sh-navbar-width" type="range" min="560" max="1600" step="10" value="1440" aria-valuetext="1440 px"></div>
</div>
```

## Anatomía

En un ancho en el que ya falta espacio, para que aparezca Más. Pasa el puntero o enfoca una parte de la lista para destacarla.

- 1 — Panel — El mismo panel de la sidebar, acostado arriba: 64 px de alto, radio xl y contorno fino.
- 2 — Marca — La llama y el nombre, como en la sidebar. Lleva al inicio.
- 3 — Enlaces principales — Los elementos del grupo sin título se vuelven enlaces directos. El inicio queda en la marca.
- 4 — Botón de grupo — Cada grupo se vuelve un botón con flecha. Abre un menú con las páginas, en columnas.
- 5 — Grupo actual — El grupo de la página abierta queda seleccionado, como el elemento actual de la sidebar.
- 6 — Más — Solo aparece cuando falta espacio: guarda los últimos elementos, separados por el nombre del grupo.
- 7 — Búsqueda — Abre la paleta de comandos. Con espacio, tiene 240 px y el atajo; sin espacio, solo la lupa.

## Cuando falta espacio

La navbar nunca se parte en dos líneas ni corta un elemento por la mitad. Renuncia a las cosas en este orden.

1 — Todo cabe

Enlaces, grupos y la búsqueda entera, con el atajo.

2 — La búsqueda se encoge

Primero sale el texto de la búsqueda: queda solo la lupa, del tamaño de un botón. El nombre sigue ahí para el lector de pantalla.

3 — Los últimos pasan a Más

Si aún falta, los elementos salen del final hacia el principio y entran en el botón Más, uno por vez, hasta que cabe. Nada queda cortado ni encima de la búsqueda.

La cuenta se hace con `ResizeObserver` en la propia barra, no en la ventana: también vale para una navbar dentro de un panel más pequeño.

Si la página actual pasó a Más, es Más el que queda seleccionado.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m20 20-4.2-4.2"></path></svg>

<button type="button" class="ds-inline-action" data-try-width="full">Verlo en el ejemplo<ds-icon name="arrow-up"></ds-icon></button>

<button type="button" class="ds-inline-action" data-try-width="compact">Verlo en el ejemplo<ds-icon name="arrow-up"></ds-icon></button>

<button type="button" class="ds-inline-action" data-try-width="more">Verlo en el ejemplo<ds-icon name="arrow-up"></ds-icon></button>
```

## Menús de los grupos

Cada botón de grupo abre un menú con las páginas de ese grupo. Una lista larga se vuelve cuadrícula, sin desplazamiento.

Una columna por sección

Si los elementos tienen `section`, cada sección se vuelve una columna con el nombre arriba (`sectionColumns`).

Cinco por columna

Sin secciones, el menú se parte en columnas equilibradas de hasta cinco elementos (`maxRows: 5`). ← y → saltan de columna.

Más, agrupado

Más reúne los elementos que salieron, con el nombre de cada grupo como título de la columna.

Siempre en pantalla

Cerca del borde, el menú se desliza para caber. La flecha del botón gira mientras está abierto.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="2"></rect><rect x="13.5" y="4" width="6.5" height="6.5" rx="2"></rect><rect x="4" y="13.5" width="6.5" height="6.5" rx="2"></rect><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2"></rect></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><g fill="currentColor"><circle cx="6" cy="12" r="0.75"></circle><circle cx="12" cy="12" r="0.75"></circle><circle cx="18" cy="12" r="0.75"></circle></g></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M8.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v3.5M15.5 3.5H19a1.5 1.5 0 0 1 1.5 1.5v3.5M8.5 20.5H5A1.5 1.5 0 0 1 3.5 19v-3.5M15.5 20.5H19a1.5 1.5 0 0 0 1.5-1.5v-3.5"></path></svg>

<button type="button" class="ds-inline-action" data-try-menu=""><ds-icon name="chevron-down"></ds-icon>Abrir Componentes en el ejemplo<ds-icon name="arrow-up"></ds-icon></button>
```

## En la app

Todo Lume, en el diseño navbar. Cambia al móvil: por debajo de 1024 px la navbar se va y el botón de menú de la barra superior abre el mismo cajón de la sidebar.

Cargando la app…

Navbar · Escritorio 1280 × 800

Marcado de los ejemplos de esta sección:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Tamaño de pantalla" data-segmented="device">
<button type="button" class="ds-segmented__item" role="radio" data-value="desktop" aria-checked="true">Escritorio</button><button type="button" class="ds-segmented__item" role="radio" data-value="tablet" aria-checked="false">Tablet</button><button type="button" class="ds-segmented__item" role="radio" data-value="phone" aria-checked="false">Móvil</button>
</div>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-demo-toggle="" disabled=""><ds-icon name="menu"></ds-icon><span data-demo-toggle-label="">Abrir cajón</span></button>

<button type="button" class="ds-theme-toggle " data-demo-theme="dark" aria-pressed="false" aria-label="Tema del ejemplo" data-ds-tooltip="Alternar claro y oscuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-demo-reload="" aria-label="Recargar el ejemplo" data-ds-tooltip="Recargar el ejemplo"><ds-icon name="refresh"></ds-icon></button>
```

## Sidebar o navbar

Los dos llevan a los mismos lugares. La diferencia está en cuántos lugares son y en cuánto espacio pide el contenido.

|  | Sidebar | Navbar |
| --- | --- | --- |
| Cuántas áreas | Muchas: grupos largos, decenas de páginas | Pocas: lo que cabe en una línea |
| Ancho del contenido | Pierde 288 px (76 px contraída) | Todo el ancho, solo pierde la altura de la barra |
| Encontrar una página | Todo a la vista, desplazando la lista | Un clic más: abrir el menú del grupo |
| Novedades | Punto en cada elemento | Punto en el botón del grupo |
| En el móvil | Cajón | El mismo cajón |

Los dos leen los mismos grupos. En este sitio, la persona elige en la barra superior (solo en escritorio) o con la búsqueda; la elección queda guardada en `ds-layout`. Quien llega por primera vez ve la sidebar.

## Teclado

Los menús siguen el mismo teclado del componente Menú.

| Teclas | Acción | Detalle |
| --- | --- | --- |
| Tab | Recorrer la barra | Marca, enlaces, botones de grupo, Más y búsqueda, en el orden de la pantalla. |
| Enter | Abrir el menú del grupo | Espacio y ↓ también lo abren; el foco va a la página actual o a la primera. |
| ↑ ↓ | Moverse en el menú | Home y End van al primero y al último. Una letra salta al elemento que empieza con ella. |
| ← → | Saltar de columna | En los menús en cuadrícula o con secciones. |
| Esc | Cerrar el menú | Y devuelve el foco al botón del grupo. |
| Ctrl K | Abrir la búsqueda | Incluso con la búsqueda solo en el ícono. |

## Accesibilidad

Lo que encuentran el teclado y el lector de pantalla.

- Navegación con nombre — Los enlaces y botones quedan en un `nav` “Principal”, el mismo nombre de la sidebar: solo uno de los dos aparece a la vez.
- Botones que abren menú — Enter — Cada grupo es un botón con `aria-haspopup` y `aria-expanded`; el menú es una lista con `role="menu"`.
- Página actual — El enlace actual tiene `aria-current="page"`; en el menú, la página actual aparece marcada.
- Nada desaparece de verdad — Lo que pasa a Más sale del Tab y entra en su menú. La búsqueda compacta mantiene el texto oculto, para el lector de pantalla.
- El foco vuelve — Esc — Esc o elegir una página cierra el menú y devuelve el foco al botón que lo abrió.

## Tokens usados

Los mismos de la sidebar, más la altura de la barra.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| layout.topbar (`--ds-layout-topbar`) | Altura de la barra | 64 px | 64 px |
| layout.frame-gap (`--ds-layout-frame-gap`) | Distancia del borde de la ventana y del panel principal | 10 px | 10 px |
| radius.xl (`--ds-radius-xl`) | Esquinas del panel | 20 px | 20 px |
| color.bg.sidebar (`--ds-color-bg-sidebar`) | Fondo del panel | #F8FAFD | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno del panel | #3E516624 | #FFFFFF0F |
| size.control.compact (`--ds-size-control-compact`) | Altura de los enlaces y botones de grupo | 36 px | 36 px |
| size.control.md (`--ds-size-control-md`) | Búsqueda compacta | 40 px | 40 px |
| color.bg.hover (`--ds-color-bg-hover`) | Hover y menú abierto | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Enlace y grupo actuales | #3E516612 | #C0CAD61A |
| color.brand.indicator (`--ds-color-brand-indicator`) | Punto de novedad | #C97B63 | #DE9680 |

## Código

La navbar vive en `.ds-shell`, junto a la sidebar, y aparece con `data-layout="navbar"`. Los grupos son los mismos.

### HTML

```html
<div class="ds-shell" id="shell" data-layout="navbar">
  <div class="ds-navbar">
    <a class="ds-brand" href="#/" aria-label="Inicio"><img class="ds-brand__mark" src="logo.svg" alt="">Tu app</a>
    <nav class="ds-navbar__nav" id="navbar-nav" aria-label="Principal"></nav>
    <button class="ds-field ds-sidebar-search ds-navbar__search" data-command-open>…</button>
  </div>
  <!-- la sidebar sigue en la página: en el móvil, es ella la que se vuelve cajón -->
  <aside class="ds-sidebar" id="sidebar">…</aside>
  <div class="ds-main">…</div>
</div>
```

### JavaScript

```html
import { createShell, renderSidebarNav, renderNavbarNav } from 'https://lumeui.dev/v/1.11/lume.js';

const groups = [
  { id: 'main', items: [
    { label: 'Inicio', icon: 'home', href: '#/' },          // en la navbar, el inicio queda en la marca
    { label: 'Informes', icon: 'bar-chart', href: '#/informes' },
  ] },
  { id: 'ventas', label: 'Ventas', items: [
    { label: 'Pedidos', icon: 'inbox', href: '#/pedidos' },
    { label: 'Clientes', icon: 'users', href: '#/clientes' },
  ] },
];

renderSidebarNav(document.getElementById('sidebar-nav'), groups);   // el cajón del móvil
const navbar = renderNavbarNav(document.getElementById('navbar-nav'), groups, {
  go: (href) => (location.hash = href),                              // qué hacer al elegir en el menú
});
navbar.setActive(location.hash);

const shell = createShell(document.getElementById('shell'));
shell.setLayout('navbar');                                          // o “sidebar”; queda guardado
```

| API | Qué hace |
| --- | --- |
|  `renderNavbarNav(el, groups, { go })`  | Dibuja enlaces y botones de grupo y conecta los menús. `go(href)` se ejecuta al elegir una página; el predeterminado es `location.assign`. |
|  `navbar.setActive(href)`  | Marca el enlace o el grupo de la página actual (o Más, si pasó allí). |
|  `navbar.destroy()`  | Apaga los menús y la medida de espacio. |
|  `shell.setLayout('navbar' \| 'sidebar')`  | Cambia el diseño y lo guarda en `ds-layout`. `shell.layout` lee el actual. |
|  `botones [data-layout-option]`  | Dentro del shell, en un radiogroup, se vuelven el selector de diseño sin código. |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Cuándo la navbar es la mejor opción.

- **Haz:** pocas áreas, contenido ancho. Tablas, tableros y paneles que necesitan todo el ancho. Nombres cortos en los grupos, para que quepa más antes de Más.
- **Evita:** decenas de enlaces sueltos. Si la fila de arriba ya no cabe en una pantalla común, los grupos son demasiado grandes o demasiados: es caso de sidebar.
- **Consejo:** Lo más usado primero. Más toma del final. Pon a la izquierda lo que la persona más usa, y será lo último en salir.
