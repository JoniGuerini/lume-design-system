# API

Sección de Lume: Recursos. Página: https://lumeui.dev/#/recursos/api

Todo lo que puedes llamar desde JavaScript, en un solo archivo. Lo que está aquí es público y estable; el resto es interno y puede cambiar.

En números: ítems públicos: 102 · verbos: 5 · dependencias: 0.

## Importar

Un archivo, `ds/lume.js`, reúne toda la API. Los módulos de `ds/js/` siguen pudiéndose importar uno a uno, para cargar solo lo necesario.

```html
<link rel="stylesheet" href="https://lumeui.dev/v/1.3/lume.css">

<script type="module">
  import { initTheme, createModal, toast } from 'https://lumeui.dev/v/1.3/lume.js';

  initTheme();
  const modal = createModal({ title: '¿Publicar cambios?' });
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Convención

Cada verbo promete una cosa. Por el nombre, ya sabes qué vuelve.

| Verbo | Cuándo | Devuelve |
| --- | --- | --- |
| `create…` | Liga un componente a un elemento, o crea el elemento | Un control con `destroy()` |
| `mount…` | Activa todos los componentes de un tipo en un área | La función que los desactiva todos |
| `init…` | Comportamiento global de la página, una vez | Nada |
| `open…` `confirm…` `toast` | Acción inmediata | La respuesta o un control con close() |
| `…Html` | Genera el marcado, sin activar nada | Un string de HTML |

El estado global sigue `get…` y `set…`; las constantes van en mayúsculas, como `THEMES`.

## Controles

Lo que devuelve un create… sigue las mismas reglas en todos los componentes.

| Nombre | Regla |
| --- | --- |
| `el` | El elemento principal del componente. |
| `value` · `setValue()` | Leen y cambian el valor, sin llamar a `onChange`. Paginación (`page`), pasos (`current`) y carrusel (`index`) usan el nombre de lo que guardan. |
| `isOpen` · `collapsed` | El estado es una propiedad, sin paréntesis. |
| `open()` · `close()` · `goTo()` · `focus()` | Las acciones son funciones, con el mismo nombre en todos los componentes. |
| `destroy()` | Desactiva todo lo que el componente activó. Todo create… lo tiene. |
| `onChange` · `onInput` | En JavaScript, como en el campo nativo: `onChange` cuando el valor se fija (al soltar, al elegir) y `onInput` mientras se arrastra. |
| `onChange` · `onCommit` | En React, como todo campo controlado: `onChange` en cada cambio y `onCommit` al soltar, para guardar o buscar. |

## Eventos

Pocos y todos con el prefijo `ds:`. El resto llega por las opciones `on…` de cada componente.

| Evento | Dónde | detail | Cuándo |
| --- | --- | --- | --- |
| `ds:localechange` | `<html>` | `{ preference, locale }` | El idioma cambió. |
| `ds:themechange` | `<html>` | `{ preference, resolved }` | El tema cambió. |
| `ds:shellchange` | `.ds-shell` | `{ sidebar, layout, mobile, mobileOpen }` | La sidebar se contrajo, se abrió o cambió de layout. |
| `ds:tabchange` | las pestañas (burbujea) | `{ tab, id }` | Se eligió otra pestaña. |
| `ds:sortchange` | la lista de destino (burbujea) | `{ item, id, from, to, oldIndex, newIndex }` | Un elemento cambió de lugar. |

## Todo lo público

Los 102 ítems de `ds/lume.js`, con el módulo del que viene cada uno.

### Componentes

| Nombre | Qué hace | Módulo |
| --- | --- | --- |
| `createBackToTop` | Botón de volver arriba para un área con desplazamiento. | back-to-top.js |
| `createBanner` | Banner de anuncio: se cierra y recuerda en el navegador que la persona cerró ese anuncio. | banner.js |
| `createCalendar` | Calendario con vistas de mes, semana y día. | calendar.js |
| `createCarousel` | Carrusel con flechas, puntos, teclado y paso automático con pausa. | carousel.js |
| `createColorPicker` | Selector de color suelto: área, matiz, hexadecimal y muestras. | color-picker.js |
| `createColorField` | Campo de color con muestra que abre el selector. | color-picker.js |
| `parseHex` | Lee un color en hexadecimal (3 o 6 dígitos, con o sin #). | color-picker.js |
| `createCommandPalette` | Búsqueda de comandos que se abre con ⌘K. | command-palette.js |
| `createComposer` | Campo de mensaje de una conversación, con adjuntos. | composer.js |
| `createContextMenu` | Menú del botón derecho en un área. | context-menu.js |
| `createDatePicker` | Selector de fecha ligado a un campo. | date-picker.js |
| `createDrawer` | Panel lateral que abres y cierras cuando quieras. | drawer.js |
| `createEditor` | Editor de texto enriquecido: barra de Lume, atajos, Markdown al comienzo de la línea, pegado limpio y el HTML para el formulario. | editor.js |
| `sanitizeHtml` | Limpia un HTML a lo que acepta el editor: párrafos, títulos, listas, citas, marcas y enlaces seguros. | editor.js |
| `createFileUpload` | Área de carga de archivos, con lista y progreso. | file-upload.js |
| `createFilters` | Barra de filtros que guarda el estado en la dirección. | filters.js |
| `createForm` | Validación, errores y resumen de errores de un formulario. | form.js |
| `openImageViewer` | Abre el visor de imágenes con una lista de imágenes: zoom, arrastre, flechas y leyenda. | image-viewer.js |
| `mountImageViewer` | Conecta los enlaces con data-ds-viewer de un área: el mismo valor forma una galería. | image-viewer.js |
| `createMenu` | Menú ligado a un botón, con elección única o múltiple. | menu.js |
| `createModal` | Modal que abres y cierras cuando quieras. | modal.js |
| `createNotificationCenter` | Centro de notificaciones en la campana: lista, sin leer, marcar todas y aviso de las nuevas. | notifications.js |
| `relativeTime` | Tiempo relativo en el idioma de Lume (“hace 5 minutos”); después de una semana, fecha. | notifications.js |
| `createNumberField` | Campo numérico con – y +. | number-field.js |
| `createOtpField` | Campo de código de verificación. | otp-field.js |
| `createPagination` | Paginación de una lista o tabla. | pagination.js |
| `createPopover` | Panel que se abre sujeto a un botón. | popover.js |
| `progressRingHtml` | Marcado del progreso circular, con el porcentaje en el centro; sin valor, indeterminado. | progress-ring.js |
| `setProgressRing` | Cambia el valor de un progreso circular ya dibujado. | progress-ring.js |
| `createRating` | Valoración con estrellas para calificar; cada estrella es un radio nativo. | rating.js |
| `ratingHtml` | Marcado de una nota solo para mostrar, con media estrella. | rating.js |
| `createResizable` | Paneles redimensionables: divisor que se arrastra, con teclado, límites y tamaño guardado. | resizable.js |
| `createSegmented` | Control segmentado. | segmented.js |
| `createSelect` | Selector de Lume sobre un select nativo. | select.js |
| `mountSelects` | Activa todos los selectores de un área. | select.js |
| `createShell` | App shell: sidebar o navbar, contraer y panel en el móvil. | shell.js |
| `renderSidebarNav` | Arma los grupos de navegación de la sidebar. | shell.js |
| `renderNavbarNav` | Arma los grupos de navegación de la navbar. | shell.js |
| `setActiveNavItem` | Marca el ítem de navegación de la página actual. | shell.js |
| `LAYOUTS` | Los layouts del app shell. | shell.js |
| `createSortable` | Lista ordenable: cambiar el orden con el ratón, el toque o el teclado; listas del mismo grupo intercambian elementos. | sortable.js |
| `createKanban` | Kanban: columnas de tarjetas que pasan de una a otra, con el número de cada columna. | sortable.js |
| `createSlider` | Slider de un valor o de un rango. | slider.js |
| `createStepper` | Etapas de un proceso. | stepper.js |
| `mountTabs` | Activa todas las pestañas de un área. | tabs.js |
| `selectTab` | Elige una pestaña desde el código. | tabs.js |
| `createTagField` | Campo de etiquetas. | tag-field.js |
| `createTimePicker` | Selector de hora ligado a un campo. | time-picker.js |
| `createToolbar` | Barra de herramientas: un solo Tab, flechas entre los botones y botones que se activan y desactivan. | toolbar.js |
| `createTree` | Árbol que se expande y contrae. | tree.js |

### Acciones inmediatas

| Nombre | Qué hace | Módulo |
| --- | --- | --- |
| `openModal` | Abre un modal y devuelve la respuesta cuando se cierra. | modal.js |
| `confirmModal` | Pide una confirmación y devuelve sí o no. | modal.js |
| `openDrawer` | Abre un panel lateral y devuelve la respuesta. | drawer.js |
| `toast` | Muestra un toast; devuelve un control con close(). | toast.js |
| `clearToasts` | Cierra todos los toasts. | toast.js |
| `copyText` | Copia un texto y lo confirma con un toast. | toast.js |
| `getToastPosition` | Lee la posición de los toasts. | toast.js |
| `setToastPosition` | Cambia la posición de los toasts. | toast.js |
| `TOAST_POSITIONS` | Las posiciones posibles de los toasts. | toast.js |

### Gráficos

| Nombre | Qué hace | Módulo |
| --- | --- | --- |
| `createBarChart` | Gráfico de barras. | charts.js |
| `createLineChart` | Gráfico de líneas y áreas. | charts.js |
| `createDonutChart` | Gráfico de dona. | charts.js |
| `createHeatmap` | Mapa de calor en matriz. | charts.js |
| `createCalendarHeatmap` | Mapa de calor en calendario. | charts.js |
| `createScatterChart` | Gráfico de dispersión. | charts.js |
| `statTileHtml` | Indicador con valor, variación y tendencia. | charts.js |
| `sparklineHtml` | Minigráfico de línea. | charts.js |
| `meterHtml` | Medidor de una cantidad con límites. | charts.js |
| `chartFormatter` | Formatea números como lo hacen los gráficos. | charts.js |

### Marcado como texto

| Nombre | Qué hace | Módulo |
| --- | --- | --- |
| `modalHtml` | El HTML de un modal. | modal.js |
| `composerHtml` | El HTML del campo de mensaje. | composer.js |
| `messageHtml` | El HTML de un mensaje de la conversación. | composer.js |
| `attachmentHtml` | El HTML de un adjunto. | composer.js |
| `typingHtml` | El HTML del “escribiendo…”. | composer.js |
| `streamText` | Escribe una respuesta poco a poco, como un asistente. | composer.js |
| `codeBlockHtml` | El HTML de un bloque de código. | code-block.js |
| `mountCodeBlocks` | Activa el botón de copiar de los bloques de código de un área. | code-block.js |

### Página: tema, idioma e íconos

| Nombre | Qué hace | Módulo |
| --- | --- | --- |
| `initTheme` | Aplica el tema guardado o el del sistema. | theme.js |
| `setTheme` | Elige claro, oscuro o sistema. | theme.js |
| `toggleTheme` | Alterna entre claro y oscuro. | theme.js |
| `resolvedTheme` | El tema en uso ahora. | theme.js |
| `getThemePreference` | La elección guardada: claro, oscuro o sistema. | theme.js |
| `mountThemeControls` | Activa los botones de tema de un área. | theme.js |
| `THEMES` | Los temas disponibles. | theme.js |
| `initLocale` | Aplica el idioma guardado o el del sistema. | i18n.js |
| `setLocale` | Elige el idioma de los componentes. | i18n.js |
| `locale` | El idioma en uso ahora. | i18n.js |
| `getLocalePreference` | La elección de idioma guardada. | i18n.js |
| `tr` | Elige el texto del idioma actual en { pt-BR, en, es }. | i18n.js |
| `msg` | Un texto de sistema de los componentes, en el idioma actual. | i18n.js |
| `formatNumber` | Formatea un número en el idioma actual. | i18n.js |
| `numberFormat` | Intl.NumberFormat en el idioma actual. | i18n.js |
| `dateFormat` | Intl.DateTimeFormat en el idioma actual. | i18n.js |
| `LOCALES` | Los idiomas de Lume. | i18n.js |
| `LOCALE_NAMES` | El nombre de cada idioma. | i18n.js |
| `initTooltips` | Activa las ayudas de todos los data-ds-tooltip de la página. | tooltip.js |
| `initScrollbars` | Activa la barra de desplazamiento superpuesta. | scrollbar.js |
| `icon` | El SVG de un ícono, como texto. | icons/icons.js |
| `icons` | Los 132 íconos, por nombre. | icons/icons.js |
| `iconList` | Los 132 íconos, en lista. | icons/icons.js |
| `filtersToQuery` | Convierte el estado de los filtros en dirección. | filters.js |
| `filtersFromQuery` | Lee el estado de los filtros de una dirección. | filters.js |

## Lo que no cambia

Desde la 1.0, un nombre de esta página solo cambia en una versión mayor (2.0), con aviso en la consola y guía de migración. Los componentes nuevos llegan en las versiones menores (1.1, 1.2…) sin tocar lo que ya existe. Lo visual (color, espaciado, radio) puede evolucionar en cualquier versión, porque no rompe a nadie.
