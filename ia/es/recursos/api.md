# API

Sección de Lume: Recursos. Página: https://lumeui.dev/#/recursos/api

Todo lo que puedes llamar desde JavaScript, en un solo archivo. Lo que está aquí es público y estable; el resto es interno y puede cambiar.

En números: ítems públicos: 83 · verbos: 5 · dependencias: 0.

## Importar

Un archivo, `ds/lume.js`, reúne toda la API. Los módulos de `ds/js/` siguen pudiéndose importar uno a uno, para cargar solo lo necesario.

```html
<link rel="stylesheet" href="https://lumeui.dev/ds/ds.css">

<script type="module">
  import { initTheme, createModal, toast } from 'https://lumeui.dev/ds/lume.js';

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

El estado sigue `get…` y `set…`; las constantes van en mayúsculas, como `THEMES`.

## Todo lo público

Los 83 ítems de `ds/lume.js`, con el módulo del que viene cada uno.

### Componentes

| Nombre | Qué hace | Módulo |
| --- | --- | --- |
| `createBackToTop` | Botón de volver arriba para un área con desplazamiento. | back-to-top.js |
| `createCalendar` | Calendario con vistas de mes, semana y día. | calendar.js |
| `createCommandPalette` | Búsqueda de comandos que se abre con ⌘K. | command-palette.js |
| `createComposer` | Campo de mensaje de una conversación, con adjuntos. | composer.js |
| `createContextMenu` | Menú del botón derecho en un área. | context-menu.js |
| `createDatePicker` | Selector de fecha ligado a un campo. | date-picker.js |
| `createDrawer` | Panel lateral que abres y cierras cuando quieras. | drawer.js |
| `createFileUpload` | Área de carga de archivos, con lista y progreso. | file-upload.js |
| `createFilters` | Barra de filtros que guarda el estado en la dirección. | filters.js |
| `createForm` | Validación, errores y resumen de errores de un formulario. | form.js |
| `createMenu` | Menú ligado a un botón, con elección única o múltiple. | menu.js |
| `createModal` | Modal que abres y cierras cuando quieras. | modal.js |
| `createNumberField` | Campo numérico con – y +. | number-field.js |
| `createOtpField` | Campo de código de verificación. | otp-field.js |
| `createPagination` | Paginación de una lista o tabla. | pagination.js |
| `createPopover` | Panel que se abre sujeto a un botón. | popover.js |
| `createSegmented` | Control segmentado. | segmented.js |
| `createSelect` | Selector de Lume sobre un select nativo. | select.js |
| `mountSelects` | Activa todos los selectores de un área. | select.js |
| `createShell` | App shell: sidebar o navbar, contraer y panel en el móvil. | shell.js |
| `renderSidebarNav` | Arma los grupos de navegación de la sidebar. | shell.js |
| `renderNavbarNav` | Arma los grupos de navegación de la navbar. | shell.js |
| `setActiveNavItem` | Marca el ítem de navegación de la página actual. | shell.js |
| `LAYOUTS` | Los layouts del app shell. | shell.js |
| `createSlider` | Slider de un valor o de un rango. | slider.js |
| `createStepper` | Etapas de un proceso. | stepper.js |
| `mountTabs` | Activa todas las pestañas de un área. | tabs.js |
| `selectTab` | Elige una pestaña desde el código. | tabs.js |
| `createTagField` | Campo de etiquetas. | tag-field.js |
| `createTimePicker` | Selector de hora ligado a un campo. | time-picker.js |
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
| `formatter` | Formatea números como lo hacen los gráficos. | charts.js |

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
| `icons` | Los 130 íconos, por nombre. | icons/icons.js |
| `iconList` | Los 130 íconos, en lista. | icons/icons.js |
| `filtersToQuery` | Convierte el estado de los filtros en dirección. | filters.js |
| `filtersFromQuery` | Lee el estado de los filtros de una dirección. | filters.js |

## Lo que no cambia

A partir de la 0.24, un nombre de esta página solo cambia en una versión mayor, con aviso en la consola y guía de migración. Lo visual (color, espaciado, radio) puede evolucionar en cualquier versión, porque no rompe a nadie.
