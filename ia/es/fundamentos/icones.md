# Íconos

Sección de Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/icones

Una biblioteca propia, dibujada en la misma cuadrícula y con el mismo trazo. Contorno fino, extremos redondeados y color heredado del texto.

En números: íconos: 154 · categorías: 8 · cuadrícula: 24 px · trazo: 1,5.

## Biblioteca

Busca por nombre o por palabras en español, portugués o inglés. Haz clic en un ícono para copiar el código.

- home
- menu
- panel-left
- panel-top
- chevron-down
- chevron-up
- chevron-left
- chevron-right
- chevrons-up-down
- arrow-right
- arrow-left
- arrow-up
- arrow-up-right
- arrow-down
- external-link
- corner-down-left
- log-out
- compass
- zoom-in
- zoom-out
- maximize
- search
- search-x
- send
- paperclip
- stop-circle
- thumbs-up
- thumbs-down
- at-sign
- plus
- minus
- x
- check
- pencil
- copy
- trash
- download
- upload
- link
- filter
- refresh
- more-horizontal
- more-vertical
- grip-vertical
- zap
- play
- pause
- megaphone
- slash
- mic
- video
- info
- alert-circle
- alert-triangle
- check-circle
- x-circle
- help-circle
- bell
- loader
- clock
- history
- shield
- lock
- wifi-off
- star
- heart
- flag
- settings
- sliders
- sun
- moon
- cabin
- mountain
- monitor
- scrollbar
- eye
- eye-off
- keyboard
- command
- app-shell
- layout
- button
- input
- check-square
- radio
- toggle
- tag
- card
- dialog
- tabs
- carousel
- resizable
- kanban
- tooltip
- table
- list
- bold
- italic
- underline
- strikethrough
- align-left
- align-center
- align-right
- list-ordered
- heading
- quote
- undo
- redo
- divider
- progress-ring
- banner
- toolbar
- message-square
- stack
- calendar
- file-text
- folder
- inbox
- image
- package
- book-open
- code
- terminal
- git-branch
- git-pull-request
- mail
- globe
- target
- hash
- dashboard
- bar-chart
- line-chart
- area-chart
- donut
- heatmap
- scatter
- gauge
- trending-up
- trending-down
- palette
- droplet
- type
- shapes
- grid
- layers
- component
- spacing
- radius
- elevation
- motion
- accessibility
- user
- user-circle
- users

Marcado de los ejemplos de esta sección:

```html
<label class="ds-field">
<ds-icon name="search"></ds-icon>
<span class="ds-visually-hidden">Buscar íconos</span>
<input class="ds-field__input" type="search" placeholder="Buscar: casa, flecha, calendario…" autocomplete="off" spellcheck="false" data-search="">
</label>

<button type="button" class="ds-chip" data-menu="size" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-10"><span class="ds-chip__icon"><ds-icon name="spacing"></ds-icon></span><span data-label="">24 px</span><span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="all" aria-pressed="true">Todos<span>154</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="navegacao" aria-pressed="false">Navegación<span>18</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="acoes" aria-pressed="false">Acciones<span>35</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="status" aria-pressed="false">Estado y feedback<span>17</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="interface" aria-pressed="false">Interfaz<span>44</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="objetos" aria-pressed="false">Objetos<span>15</span></button>
```

## Anatomía

Las mismas reglas para todos los íconos. Es lo que hace que la biblioteca parezca una familia.

- 01 — Cuadrícula de 24 × 24 — Todo ícono se dibuja en la misma mesa de trabajo, para alinearse en cualquier tamaño.
- 02 — Margen de 2 px — El área útil es 20 × 20. El borde libre da equilibrio óptico entre formas distintas.
- 03 — Keylines — Círculo, cuadrado y rectángulos guían el peso visual: un círculo y un cuadrado parecen del mismo tamaño.
- 04 — Trazo de 1,5 — Contorno de 1,5 px; en 16 px o menos sube a 1,75 para no desaparecer.
- 05 — Extremos redondeados — Extremos y uniones redondeados, coherentes con los radios generosos del sistema.
- 06 — currentColor — El ícono hereda el color del texto que lo rodea — cambia junto con el tema y el estado.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="home" aria-pressed="true" aria-label="Ver home" data-ds-tooltip="home" data-ds-tooltip-placement="bottom"><ds-icon name="home"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="settings" aria-pressed="false" aria-label="Ver settings" data-ds-tooltip="settings" data-ds-tooltip-placement="bottom"><ds-icon name="settings"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="palette" aria-pressed="false" aria-label="Ver palette" data-ds-tooltip="palette" data-ds-tooltip-placement="bottom"><ds-icon name="palette"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="bell" aria-pressed="false" aria-label="Ver bell" data-ds-tooltip="bell" data-ds-tooltip-placement="bottom"><ds-icon name="bell"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="calendar" aria-pressed="false" aria-label="Ver calendar" data-ds-tooltip="calendar" data-ds-tooltip-placement="bottom"><ds-icon name="calendar"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="user" aria-pressed="false" aria-label="Ver user" data-ds-tooltip="user" data-ds-tooltip-placement="bottom"><ds-icon name="user"></ds-icon></button>
```

## Tamaños

Cinco tamaños, todos en tokens. Por debajo de 16 px el trazo se engrosa solo para mantener la lectura.

El ícono acompaña el tamaño del componente: 14 en la insignia, 16 en el chip, 20 en el botón estándar, 24 en el botón grande.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<svg class="ds-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<svg class="ds-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<span class="ds-badge ds-badge--success"><ds-icon name="check"></ds-icon>Publicado</span>

<span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="pencil"></ds-icon></span>Tono directo</span>

<span class="ds-btn ds-btn--secondary"><ds-icon name="download"></ds-icon>Exportar</span>
```

## En código

Dos formas de usarlos: la función `icon()` en JavaScript o el elemento `<ds-icon>` directo en el HTML.

JavaScript

```html
import { icon } from 'https://lumeui.dev/v/0.39/lume.js';

button.innerHTML = icon('home', { size: 20 });
// con etiqueta para lectores de pantalla
icon('bell', { size: 20, label: 'Notificaciones' });
```

HTML

```html
<ds-icon name="home"></ds-icon>
<ds-icon name="home" size="16"></ds-icon>
<!-- ícono solo, con significado -->
<ds-icon name="home" size="20" label="Inicio"></ds-icon>
```

Decorativo, junto al texto

Sin `label`: el SVG sale con `aria-hidden="true"` y el lector de pantalla lee solo el texto.

Solo, con significado

Con `label`: se vuelve `role="img"` con nombre accesible. En botones solo de ícono, prefiere el `aria-label` en el botón.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="4.5" r="1.5"></circle><path d="M5 8.5l7 1.5 7-1.5M12 10v4.5M9.5 20.5l2.5-6 2.5 6"></path></svg>
```

## Uso

El ícono ayuda a reconocer; no reemplaza la palabra.

- **Haz:** ícono con texto. En la navegación y en los botones, la etiqueta dice qué pasa; el ícono ayuda a encontrarlo más rápido.
- **Evita:** mezclar estilos. Íconos rellenos, de otra biblioteca o con otro trazo rompen la familia. Si falta uno, dibújalo en la cuadrícula.
- **Consejo:** ¿Ícono solo? Nombre y pista. Los botones solo de ícono necesitan aria-label y un tooltip con el mismo texto.
