# Sidebar

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/sidebar

La navegación en el lateral: marca, búsqueda, los lugares de todos los días y grupos que se contraen. En escritorio se encoge hasta quedarse solo con los íconos; en el móvil, se vuelve cajón.

En números: abierta: 288 px · contraída: 76 px · cajón por debajo de: 1024 px · atajo: Ctrl B.

## En vivo

Es el propio Lume, funcionando aquí dentro. Contráela, cambia el tamaño de pantalla y mira cómo la sidebar se vuelve cajón. Nada de lo que hagas aquí cambia tus preferencias.

Cargando la app…

Sidebar expandida · Escritorio 1280 × 800

Marcado de los ejemplos de esta sección:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Tamaño de pantalla" data-segmented="device">
<button type="button" class="ds-segmented__item" role="radio" data-value="desktop" aria-checked="true">Escritorio</button><button type="button" class="ds-segmented__item" role="radio" data-value="tablet" aria-checked="false">Tablet</button><button type="button" class="ds-segmented__item" role="radio" data-value="phone" aria-checked="false">Móvil</button>
</div>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-demo-toggle=""><ds-icon name="panel-left"></ds-icon><span data-demo-toggle-label="">Contraer menú</span></button>

<button type="button" class="ds-theme-toggle " data-demo-theme="dark" aria-pressed="false" aria-label="Tema del ejemplo" data-ds-tooltip="Alternar claro y oscuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-demo-reload="" aria-label="Recargar el ejemplo" data-ds-tooltip="Recargar el ejemplo"><ds-icon name="refresh"></ds-icon></button>
```

## Anatomía

La sidebar del propio sitio, con menos páginas. Los grupos se abren y se cierran, y hacer clic en un elemento marca la página actual. Pasa el puntero o enfoca una parte de la lista para destacarla.

- 1 — Panel — 288 px de ancho, radio xl y contorno fino. Flota sobre el fondo de la app, a 10 px del borde.
- 2 — Marca — La llama en la columna de los íconos y el nombre alineado con las etiquetas. Lleva al inicio.
- 3 — Búsqueda — Un botón con aspecto de campo: abre la paleta de comandos, como Ctrl K.
- 4 — Navegación principal — El grupo sin título: elementos más grandes, siempre a la vista, para los lugares de todos los días.
- 5 — Punto de novedad — Marca lo que cambió desde la última visita. El lector de pantalla oye “Nuevo”.
- 6 — Título del grupo — Contrae y abre el grupo. El estado queda guardado para la próxima visita.
- 7 — Etiqueta de sección — Divide un grupo largo. Viene del campo `section` de cada elemento.
- 8 — Elemento actual — Fondo seleccionado, contorno fino y `aria-current="page"`.
- 9 — Pie — Fijo al pie del panel: cuenta, workspace o, aquí, la versión.

## Elemento

Ícono de 20 px, etiqueta y, si corresponde, el conteo o el punto. Los estados se pueden forzar con `data-state`.

## Abierta y contraída

En escritorio, la sidebar se contrae a 76 px y deja respirar el contenido. Los íconos quedan en la misma columna en los dos estados, por eso nada salta en la animación.

Abierta — 288 px

- No hay botón en la cabecera: la pestaña redonda en el borde derecho, a la altura de la marca, la contrae.
- La pestaña aparece con el puntero sobre la sidebar o con el foco, y el resto del tiempo desaparece.
- Sin tooltips: el nombre ya está escrito.

Contraída — 76 px

- La llama ocupa el lugar del botón, más grande (28 px). Con el puntero o el foco, se vuelve el ícono de expandir.
- Los íconos no salen de su columna; las etiquetas desaparecen por opacidad.
- Cada elemento recibe un tooltip con el nombre. Los títulos de grupo se vuelven una línea, y el punto sube a la esquina del ícono.

La elección queda guardada (`ds-sidebar`) y se aplica antes del primer dibujo: la página no parpadea al abrir.

El ancho se anima con `duration.slow` y `easing.emphasized`; con movimiento reducido, el cambio es inmediato.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-inline-action" data-try="collapse"><ds-icon name="panel-left"></ds-icon>Contraer en el ejemplo en vivo<ds-icon name="arrow-up"></ds-icon></button>
```

## En el móvil

Por debajo de 1024 px la sidebar sale de la pantalla y se vuelve cajón, abierto con el botón de menú de la barra superior. La navbar usa el mismo cajón.

- 1 — Abrir — El botón de menú (o Ctrl B) desliza el cajón y oscurece el fondo. El foco va al elemento actual.
- 2 — Navegar — Elegir una página cierra el cajón. El ancho es 288 px, pero nunca toca el borde: quedan 48 px para tocar fuera.
- 3 — Cerrar — Toca el fondo, la X o pulsa Esc. El foco vuelve al botón de menú.

El cajón no tiene modo contraído: siempre se abre entero, con las etiquetas.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--secondary" data-try="phone"><ds-icon name="arrow-up"></ds-icon>Verlo en el móvil, en vivo</button>
```

## Comportamiento

Los detalles que hacen que la sidebar parezca tranquila: nada cambia sin motivo y todo vuelve como estaba.

Grupos que recuerdan

Cada grupo se contrae por el título y el estado queda guardado (`ds-nav-groups`). Contraída, la sidebar muestra los íconos de todos.

Elemento actual a la vista

Si la página actual está en un grupo cerrado, el grupo se abre y la lista se desplaza hasta ella.

Puntos que desaparecen

El punto queda hasta que la persona abre la página. Con el grupo cerrado, aparece en el título del grupo.

Solo la lista se desplaza

Marca, búsqueda y pie quedan fijos. La lista se desplaza sola, con la barra superpuesta y el final atenuado.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.5"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1z"></path><path d="M17 9a3.5 3.5 0 0 1 0 6M8 15.67V19a1.5 1.5 0 0 0 3 0v-1.33"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="4" y="3.5" width="16" height="17" rx="3"></rect><path d="M16 7.5v5"></path></svg>
```

## Teclado

Los atajos de una sola tecla solo valen fuera de campos de texto: nadie pierde lo que está escribiendo.

| Teclas | Acción | Detalle |
| --- | --- | --- |
| Ctrl B | Contraer o expandir | En el móvil, abre y cierra el cajón. |
| Tab | Recorrer los elementos | En el orden de la pantalla: marca, búsqueda, elementos y títulos de grupo, pie. |
| Enter | Abrir o cerrar el grupo | En el título del grupo. Espacio hace lo mismo. |
| Ctrl K | Abrir la búsqueda | Lo mismo que hacer clic en el campo de la sidebar. / también la abre. |
| Esc | Cerrar el cajón | Y devuelve el foco al botón de menú. |

## Accesibilidad

Lo que encuentran el teclado y el lector de pantalla.

- Regiones con nombre — La sidebar es un `aside` “Barra lateral” y la lista, un `nav` “Principal”. Se puede saltar a ellas con el lector de pantalla.
- Página actual — El elemento actual tiene `aria-current="page"`: no depende solo del destacado visual.
- Grupos que dicen su estado — Enter — El título es un botón con `aria-expanded` y `aria-controls`. Las etiquetas de sección quedan fuera del lector: el nombre del elemento basta.
- Nombres cuando está contraída — Solo íconos en pantalla, pero cada elemento mantiene la etiqueta para el lector y recibe tooltip con hover y foco.
- Contraer con etiqueta — Ctrl B — La pestaña y la llama dicen lo que hacen (“Contraer menú” ↔ “Expandir menú”) y muestran Ctrl B en el tooltip.
- Foco en el cajón — Esc — Al abrir, el foco va al elemento actual; Esc cierra y devuelve el foco al botón de menú.
- Movimiento reducido — Con la preferencia del sistema activada, contraer y abrir el cajón ocurren sin animación.

## Tokens usados

Cambia un número y toda la sidebar lo sigue.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| layout.sidebar (`--ds-layout-sidebar`) | Ancho abierto (y máximo del cajón) | 288 px | 288 px |
| layout.sidebar-collapsed (`--ds-layout-sidebar-collapsed`) | Ancho contraído | 76 px | 76 px |
| layout.frame-gap (`--ds-layout-frame-gap`) | Distancia del borde de la ventana y del panel principal | 10 px | 10 px |
| radius.xl (`--ds-radius-xl`) | Esquinas del panel | 20 px | 20 px |
| color.bg.sidebar (`--ds-color-bg-sidebar`) | Fondo del panel | #F8FAFD | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno del panel y del elemento actual | #3E516624 | #FFFFFF0F |
| size.control.lg (`--ds-size-control-lg`) | Altura de los elementos principales | 48 px | 48 px |
| size.control.md (`--ds-size-control-md`) | Altura de los elementos y títulos de grupo | 40 px | 40 px |
| color.bg.hover (`--ds-color-bg-hover`) | Hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Elemento actual | #3E516612 | #C0CAD61A |
| color.brand.indicator (`--ds-color-brand-indicator`) | Punto de novedad | #C97B63 | #DE9680 |
| duration.slow (`--ds-duration-slow`) | Contraer, expandir y cajón | 320ms | 320ms |

## Código

El HTML es fijo; la navegación se dibuja a partir de una lista. La sidebar vive dentro de `.ds-shell`: mira App shell para el marco entero.

### HTML

```html
<aside class="ds-sidebar" id="sidebar" aria-label="Barra lateral">
  <div class="ds-sidebar__header">
    <a class="ds-brand" href="#/" aria-label="Inicio"><img class="ds-brand__mark" src="logo.svg" alt="">Tu app</a>
    <button class="ds-icon-btn ds-icon-btn--outline ds-icon-btn--lg ds-sidebar__toggle" data-shell-toggle aria-controls="sidebar">
      <img class="ds-sidebar__toggle-mark" src="logo.svg" alt="">
      <ds-icon name="panel-left" class="ds-sidebar__toggle-collapse"></ds-icon>
      <ds-icon name="x" class="ds-sidebar__toggle-close"></ds-icon>
    </button>
  </div>
  <div class="ds-sidebar__search">
    <button class="ds-field ds-sidebar-search" data-command-open>…</button>
  </div>
  <nav class="ds-sidebar__nav" id="sidebar-nav" aria-label="Principal"></nav>
  <div class="ds-sidebar__footer"><a class="ds-account" href="…">…</a></div>
</aside>
<!-- la pestaña de contraer queda fuera de la sidebar, fija en su borde -->
<button class="ds-shell__edge" data-shell-toggle aria-controls="sidebar"><ds-icon name="chevron-left" size="16"></ds-icon></button>
```

### JavaScript

```html
import { createShell, renderSidebarNav, setActiveNavItem } from 'https://lumeui.dev/v/1.12/lume.js';

const nav = document.getElementById('sidebar-nav');
renderSidebarNav(nav, [
  // el grupo sin label es la navegación principal (elementos más grandes, siempre abiertos)
  { id: 'main', items: [
    { label: 'Inicio', icon: 'home', href: '#/' },
    { label: 'Novedades', icon: 'megaphone', href: '#/novedades', dot: true },
  ] },
  { id: 'ventas', label: 'Ventas', items: [
    { label: 'Pedidos', icon: 'inbox', href: '#/pedidos', section: 'Hoy' },
    { label: 'Clientes', icon: 'users', href: '#/clientes', section: 'Registro' },
  ] },
]);

const shell = createShell(document.getElementById('shell'));
setActiveNavItem(nav, location.hash);   // marca aria-current, abre el grupo y se desplaza hasta el elemento
addEventListener('hashchange', () => setActiveNavItem(nav, location.hash));

shell.setCollapsed(true);               // contrae (escritorio)
shell.collapsed;                        // → true
```

| API | Qué hace |
| --- | --- |
|  `renderSidebarNav(el, groups)`  | Dibuja la navegación. Cada elemento: `label`, `icon`, `href` y, si quieres, `count`, `dot` y `section`. |
|  `setActiveNavItem(el, href)`  | Marca la página actual, abre su grupo y se desplaza hasta ella. |
|  `createShell(el, { persist, initial })`  | Conecta contraer, cajón y grupos. `persist: false` no guarda nada; `initial` fuerza “expanded” o “collapsed”. |
|  `shell.toggle() · setCollapsed() · setMobileOpen()`  | Cambian el estado como lo hacen los botones y el atajo. |
|  `shell.collapsed · mobile · mobileOpen`  | Leen el estado actual. |
|  `evento ds:shellchange`  | Disparado en el shell con cada cambio, con { sidebar, mobile, mobileOpen }. |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

La sidebar desaparece cuando está bien hecha.

- **Haz:** muchas páginas, uso diario. Apps que la persona abre todos los días y en las que salta entre decenas de páginas. Hasta seis grupos, con nombres de una o dos palabras.
- **Evita:** demasiadas acciones y niveles. La sidebar lleva a lugares. Los botones de crear o eliminar y un tercer nivel de navegación van al contenido de la página.
- **Consejo:** ¿Pocas áreas? Navbar. Con pocas áreas y contenido ancho (tablas, tableros), la navbar devuelve todo el ancho. Los mismos grupos sirven a las dos.
