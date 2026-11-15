# App shell

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/app-shell

El marco de toda pantalla: sidebar flotante, panel principal y barra superior. Se contrae en escritorio, se vuelve cajón en el móvil y responde al teclado.

En números: sidebar: 288 px · contraída: 76 px · topbar: 64 px · cajón por debajo de: 1024 px.

## En vivo

Es la propia app, funcionando aquí dentro. Cambia el tamaño de pantalla y mira cómo la sidebar se vuelve cajón; contráela, cambia el tema, navega. Nada de lo que hagas aquí cambia tus preferencias.

Cargando la app…

Sidebar expandida · Escritorio 1280 × 800

Marcado de los ejemplos de esta sección:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Tamaño de pantalla" data-segmented="device">
<button type="button" class="ds-segmented__item" role="radio" data-value="desktop" aria-checked="true">Escritorio</button><button type="button" class="ds-segmented__item" role="radio" data-value="tablet" aria-checked="false">Tablet</button><button type="button" class="ds-segmented__item" role="radio" data-value="phone" aria-checked="false">Móvil</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="Diseño del ejemplo" data-segmented="layout">
<button type="button" class="ds-segmented__item" role="radio" data-value="sidebar" aria-checked="true" aria-label="Sidebar"><ds-icon name="panel-left"></ds-icon></button><button type="button" class="ds-segmented__item" role="radio" data-value="navbar" aria-checked="false" aria-label="Navbar"><ds-icon name="panel-top"></ds-icon></button>
</div>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-demo-toggle=""><ds-icon name="panel-left"></ds-icon><span data-demo-toggle-label="">Contraer menú</span></button>

<button type="button" class="ds-theme-toggle " data-demo-theme="dark" aria-pressed="false" aria-label="Tema del ejemplo" data-ds-tooltip="Alternar claro y oscuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-demo-reload="" aria-label="Recargar el ejemplo" data-ds-tooltip="Recargar el ejemplo"><ds-icon name="refresh"></ds-icon></button>
```

## Anatomía

Ocho partes, marcadas sobre la app de verdad — las posiciones vienen del propio DOM. Pasa el mouse o enfoca un elemento de la lista para destacarlo.

Cargando la app…

- 1 — Sidebar — Panel flotante de 288 px, radio xl, separado del contenido por 10 px de fondo de la app.
- 2 — Marca — La llama de Lume y el nombre, en Geist Serif. Lleva al Inicio.
- 3 — Búsqueda — Abre la paleta de comandos — lo mismo que Ctrl K o /.
- 4 — Navegación con grupos — Navegación principal arriba; después, grupos que se contraen y recuerdan su estado.
- 5 — Tarjeta de la cuenta — Queda fija al pie de la sidebar: cuenta, versión o workspace.
- 6 — Panel principal — El contenido de la página, con respiro lateral de 40 px y ancho de lectura limitado.
- 7 — Barra superior y ruta — 64 px, fija arriba del panel: transparente al inicio, opaca al desplazarse.
- 8 — Tema — Un botón que cambia entre claro y oscuro con cada clic. Empieza como el dispositivo, y la elección queda guardada para toda la app.

## Contraído y expandido

En escritorio, la sidebar se contrae a 76 px y deja respirar el contenido. Los íconos quedan en la misma columna en los dos estados — por eso nada salta en la animación.

Expandida — 288 px

- Etiquetas, títulos de grupo y el atajo de la búsqueda a la vista.
- Sin tooltips — el nombre ya está escrito.
- Para contraer, la pestaña en el borde, a la altura de la marca: aparece con el puntero sobre la sidebar o con el foco.
- El predeterminado para quien llega por primera vez.

Contraída — 76 px

- Solo íconos; los textos desaparecen por opacidad, sin cambiar de lugar.
- Cada elemento recibe un tooltip con el nombre — y el atajo, cuando lo tiene.
- Los títulos de grupo se vuelven una línea divisoria; la búsqueda se vuelve la lupa.
- La llama queda arriba, más grande; con el puntero o el foco, se vuelve el botón de expandir.

La elección queda guardada (`ds-sidebar`) y se aplica antes del primer dibujo — la página no parpadea al abrir.

El ancho se anima con `duration.slow` y `easing.emphasized`; con movimiento reducido, el cambio es inmediato.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-inline-action" data-try="collapse"><ds-icon name="panel-left"></ds-icon>Contraer en el ejemplo en vivo<ds-icon name="arrow-up"></ds-icon></button>
```

## Móvil

Por debajo de 1024 px la sidebar sale de la pantalla y se vuelve cajón. El contenido gana todo el ancho; la barra superior gana el botón de menú y la lupa.

- 1 — Abrir — El botón de menú de la barra superior (o Ctrl B) desliza el cajón y oscurece el fondo. El foco va al elemento activo.
- 2 — Navegar — Elegir una página cierra el cajón. El ancho es 288 px, pero nunca toca el borde: quedan 48 px para tocar fuera.
- 3 — Cerrar — Toca el fondo, la X o pulsa Esc. El foco vuelve al botón de menú.

Por debajo de 768 px la ruta muestra solo la página actual y el respiro lateral baja a 16 px.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--secondary" data-try="phone"><ds-icon name="arrow-up"></ds-icon>Verlo en el móvil, en vivo</button>
```

## Comportamiento

Los detalles que hacen que el shell parezca tranquilo: nada cambia sin motivo y todo vuelve como estaba.

Barra superior que aparece al desplazarse

Arriba de la página es transparente y se funde con el fondo. Al desplazarse, se vuelve opaca y gana una línea debajo (data-scrolled en el panel).

Elemento activo siempre a la vista

La página actual recibe aria-current="page"; si está en un grupo cerrado, el grupo se abre y la lista se desplaza hasta ella.

Grupos que recuerdan

Cada grupo se contrae por el título y el estado queda guardado (ds-nav-groups). Contraída, la sidebar muestra todos los íconos.

Tres anchos

A partir de 1024 px: sidebar contraíble. Por debajo: cajón. Por debajo de 768 px: ruta corta y menos respiro.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="9" rx="2"></rect><rect x="13.5" y="3.5" width="7" height="5" rx="2"></rect><rect x="13.5" y="11.5" width="7" height="9" rx="2"></rect><rect x="3.5" y="15.5" width="7" height="5" rx="2"></rect></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.5"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="4" width="18" height="12.5" rx="2.5"></rect><path d="M8.5 20.5h7M12 16.5v4"></path></svg>
```

## Atajos

Funcionan en cualquier página. Los atajos de una sola tecla solo valen fuera de campos de texto — nadie pierde lo que está escribiendo.

| Teclas | Acción | Detalle |
| --- | --- | --- |
| Ctrl B | Contraer o expandir la sidebar | En el móvil, abre y cierra el cajón. |
| Ctrl K | Abrir la búsqueda | Abre la paleta de comandos desde cualquier lugar. |
| / | Abrir la búsqueda | Solo fuera de campos de texto — dentro de ellos, / es solo una barra. |
| Esc | Cerrar | Cierra la búsqueda, el cajón, menús y tooltips, y devuelve el foco. |
| Tab | Saltar al contenido | El primer Tab de la página muestra el atajo al panel principal. |

## Accesibilidad

El shell es lo primero que encuentran el teclado y el lector de pantalla. Tiene que ser predecible.

- Regiones con nombre — Sidebar en `aside` “Barra lateral”, navegación “Principal”, ruta “Estás en”, contenido en `main`. Se puede saltar entre ellas con el lector de pantalla.
- Saltar al contenido — Tab — El primer Tab muestra el enlace; Enter lleva el foco directo al panel principal, sin pasar por toda la navegación.
- Página actual — El elemento activo tiene `aria-current="page"` — no depende solo del destacado visual.
- Botones que dicen su estado — Contraer, abrir cajón y grupos usan `aria-expanded` y `aria-controls`; la etiqueta cambia a la vez (“Contraer menú” ↔ “Expandir menú”).
- Foco en el cajón — Esc — Al abrir, el foco va al elemento activo; Esc cierra y devuelve el foco al botón de menú.
- Nombres cuando está contraída — Solo íconos en pantalla, pero cada elemento mantiene la etiqueta para el lector y recibe tooltip con hover y foco.
- Atajos que no estorban — Ctrl B y / no se disparan dentro de campos de texto. Los atajos aparecen en los tooltips y en `aria-keyshortcuts`.
- Movimiento reducido — Con la preferencia del sistema activada, la sidebar y el cajón cambian de estado sin animación.

## Medidas

Todo viene de tokens de layout — cambia un número y todo el shell lo sigue.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| layout.sidebar (`--ds-layout-sidebar`) | Ancho de la sidebar (y máximo del cajón) | 288 px | 288 px |
| layout.sidebar-collapsed (`--ds-layout-sidebar-collapsed`) | Ancho contraído | 76 px | 76 px |
| layout.topbar (`--ds-layout-topbar`) | Altura de la barra superior | 64 px | 64 px |
| layout.frame-gap (`--ds-layout-frame-gap`) | Fondo entre los paneles y el borde de la ventana | 10 px | 10 px |
| layout.gutter (`--ds-layout-gutter`) | Respiro lateral del contenido | 40 px | 40 px |
| layout.content-max (`--ds-layout-content-max`) | Ancho máximo del contenido | 1160 px | 1160 px |
| radius.2xl (`--ds-radius-2xl`) | Radio de los dos paneles | 28 px | 28 px |
| breakpoint.lg (`--ds-breakpoint-lg`) | A partir de aquí, sidebar; por debajo, cajón | 1024 px | 1024 px |
| color.bg.app (`--ds-color-bg-app`) | Fondo detrás de los paneles | #DAE0E8 | #0F0E0C |
| color.bg.sidebar (`--ds-color-bg-sidebar`) | Sidebar | #F8FAFD | #24221F |
| color.bg.canvas (`--ds-color-bg-canvas`) | Panel principal y barra superior al desplazarse | #EEF2F6 | #1D1B18 |
| duration.slow (`--ds-duration-slow`) | Contraer, expandir y cajón | 320ms | 320ms |

## Código

El HTML es fijo; la navegación se arma con JS a partir de una lista. El mismo archivo sirve a todo el sitio.

### HTML

```html
<a class="ds-skip-link" href="#contenido">Saltar al contenido</a>

<div class="ds-shell" id="shell">
  <button class="ds-shell__edge" data-shell-toggle aria-controls="sidebar"><ds-icon name="chevron-left" size="16"></ds-icon></button>
  <aside class="ds-sidebar" id="sidebar" aria-label="Barra lateral">
    <div class="ds-sidebar__header">
      <a class="ds-brand" href="#/" aria-label="Lume"><img class="ds-brand__mark" src="assets/favicon.svg" alt="">Lume</a>
      <button class="ds-icon-btn ds-icon-btn--outline ds-icon-btn--lg ds-sidebar__toggle"
              data-shell-toggle aria-controls="sidebar">
        <img class="ds-sidebar__toggle-mark" src="assets/favicon.svg" alt="">
        <ds-icon name="panel-left" class="ds-sidebar__toggle-collapse"></ds-icon>
        <ds-icon name="x" class="ds-sidebar__toggle-close"></ds-icon>
      </button>
    </div>
    <div class="ds-sidebar__search">…botón que abre la búsqueda…</div>
    <nav class="ds-sidebar__nav" id="sidebar-nav" aria-label="Principal"></nav>
    <div class="ds-sidebar__footer"><a class="ds-account" href="…">…</a></div>
  </aside>

  <div class="ds-shell__scrim" data-shell-scrim></div>

  <div class="ds-main">
    <div class="ds-main__scroll">
      <header class="ds-topbar">
        <button class="ds-icon-btn ds-icon-btn--outline ds-topbar__menu"
                data-shell-toggle aria-controls="sidebar"><ds-icon name="menu"></ds-icon></button>
        <nav class="ds-breadcrumb" aria-label="Estás en"></nav>
        <div class="ds-topbar__spacer"></div>
        …búsqueda y tema…
      </header>
      <main id="contenido" class="ds-main__content" tabindex="-1"></main>
    </div>
  </div>
</div>
```

### JavaScript

```html
import { createShell, renderSidebarNav, setActiveNavItem } from 'https://lumeui.dev/v/1.4/lume.js';

const nav = document.getElementById('sidebar-nav');
renderSidebarNav(nav, [
  { id: 'main', items: [{ label: 'Inicio', icon: 'home', href: '#/' }] },
  { id: 'ventas', label: 'Ventas', items: [
    { label: 'Pedidos', icon: 'inbox', href: '#/pedidos', dot: true },
    { label: 'Clientes', icon: 'users', href: '#/clientes' },
  ] },
]);

const shell = createShell(document.getElementById('shell'));
setActiveNavItem(nav, location.hash);            // marca aria-current y abre el grupo

shell.toggle();                                 // contrae (escritorio) o abre el cajón (móvil)
shell.closeMobile();                            // al navegar en el móvil
document.getElementById('shell')
  .addEventListener('ds:shellchange', (e) => console.log(e.detail));
  // → { sidebar: 'expanded' | 'collapsed', mobile: false, mobileOpen: false }
```

| API | Qué hace |
| --- | --- |
|  `createShell(el, { persist, initial })`  | Conecta contraer, cajón, grupos y barra superior. `persist: false` no guarda nada; `initial` fuerza “expanded” o “collapsed”. |
|  `shell.toggle() · setCollapsed(bool) · setMobileOpen(bool)`  | Cambian el estado como lo hacen los botones y el atajo. |
|  `shell.collapsed · mobile · mobileOpen`  | Leen el estado actual. |
|  `renderSidebarNav(el, groups)`  | Dibuja la navegación: el grupo sin etiqueta se vuelve el principal; los demás se contraen. |
|  `setActiveNavItem(el, href)`  | Marca la página actual, abre su grupo y se desplaza hasta ella. |
|  `evento ds:shellchange`  | Disparado en el shell con cada cambio, con { sidebar, mobile, mobileOpen }. |

### Modo demostración ?embed

Es lo que usa esta página. Con `?embed` en la URL, la app no guarda tema, sidebar ni grupos, y quien la incrusta controla todo con `lumeEmbed`.

```html
<!-- la app de verdad, sin guardar preferencias -->
<iframe src="index.html?embed&theme=dark&sidebar=collapsed#/"></iframe>

<script type="module">
  const app = iframe.contentWindow.lumeEmbed;   // mismo origen
  app.shell.toggle();
  app.setTheme('dark');          // light · dark
  app.setLocale('es');
  app.go('/componentes/botao');
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

El shell desaparece cuando está bien hecho. Tres reglas ayudan.

- **Haz:** pocos grupos, nombres cortos. Hasta seis grupos, con etiquetas de una o dos palabras. Si un elemento necesita explicación, vive en una página, no en el menú.
- **Evita:** demasiadas acciones y niveles en la sidebar. La sidebar lleva a lugares. Los botones de crear, eliminar o un tercer nivel de navegación van al contenido de la página.
- **Consejo:** Todo también por la búsqueda. Toda página y acción de la sidebar aparece en la paleta (Ctrl K). Quien usa teclado ni necesita abrir el menú.
