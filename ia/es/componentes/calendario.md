# Calendario

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/calendario

Mes, semana y día en la misma pieza, con eventos. Las fechas, los nombres y el primer día de la semana vienen del idioma — y se puede usar entero con el teclado.

En números: vistas: 3 · tonos de evento: 6 · la semana empieza: lunes · dependencias: 0.

## Ejemplo

```html
import { createCalendar } from 'https://lumeui.dev/v/0.41/lume.js';

createCalendar(document.querySelector('#agenda'), {
  events: [
    { id: 'guion', title: 'Revisión del guion', start, end, tone: 'brand' },
    { id: 'evento', title: 'Evento de lanzamiento', start, end, allDay: true, tone: 'success' },
  ],
  onEventClick: (event) => abrir(event.id),
});
```

## Eventos

Tres formas, según la duración, y seis tonos. El tono nunca es la única pista: el título dice qué es.

Con horario — En el mes, una línea: punto en el tono, hora y título. En la semana y el día, un bloque del tamaño de la duración.

Todo el día — Una barra rellena, arriba del día — en el mes y en la franja “Todo el día” de la semana. Puede durar varios días.

Al mismo tiempo — Los eventos que se superponen dividen la columna. En el mes, hasta tres por día; el resto se vuelve “+2 otros”, que abre el día.

### Tonos tone

El predeterminado: un compromiso común.

Lo que es tuyo o está en foco.

Reuniones y conversaciones.

Hecho, feriado, lanzamiento.

Un plazo que se acerca.

Atrasado o cancelado.

Marcado de los ejemplos de esta sección:

```html
<span class="ds-calendar__item ds-calendar__item--brand"><span class="ds-calendar__dot"></span><span class="ds-calendar__item-time">10:00</span><span class="ds-calendar__item-title">Revisión del guion</span></span>

<span class="ds-calendar__event ds-calendar__event--brand"><span class="ds-calendar__event-title">Revisión del guion</span><span class="ds-calendar__event-time">10:00</span></span>

<span class="ds-calendar__chip ds-calendar__chip--success">Evento de lanzamiento</span>

<span class="ds-calendar__event ds-calendar__event--brand"><span class="ds-calendar__event-title">Guion</span><span class="ds-calendar__event-time">10:00</span></span>

<span class="ds-calendar__event ds-calendar__event--info"><span class="ds-calendar__event-title">Café</span><span class="ds-calendar__event-time">10:30</span></span>

<span class="ds-calendar__event ds-calendar__event--neutral"><span class="ds-calendar__event-title">Neutro</span><span class="ds-calendar__event-time">'neutral'</span></span>

<span class="ds-calendar__event ds-calendar__event--brand"><span class="ds-calendar__event-title">Marca</span><span class="ds-calendar__event-time">'brand'</span></span>

<span class="ds-calendar__event ds-calendar__event--info"><span class="ds-calendar__event-title">Info</span><span class="ds-calendar__event-time">'info'</span></span>
```

## Accesibilidad

El mes es una cuadrícula de verdad (role="grid"): una sola parada de Tab, y las flechas recorren los días.

- Cada día dice lo que tiene — El lector de pantalla oye “miércoles, 4 de noviembre, hoy, 6 eventos” — nunca solo “4”.
- Hoy marcado — El día de hoy tiene `aria-current="date"`, además del círculo en el color de la marca.
- Eventos con nombre completo — En la semana y el día, cada evento es un botón con título, horario y día. En el mes, Enter abre el día, donde los eventos son botones.
- El título avisa el cambio — Al cambiar de mes, semana o día, el título (`aria-live="polite"`) se lee de nuevo.
- Tono nunca solo — El color ayuda a agrupar, pero lo que cuenta es el título del evento. El texto del evento supera 4,5:1 sobre el fondo del tono.

### Teclado en el mes

|   |   |
| --- | --- |
| ← → | Día anterior o siguiente |
| ↑ ↓ | Mismo día en la semana anterior o siguiente |
| Home End | Inicio o fin de la semana |
| PageUp PageDown | Mes anterior o siguiente |
| Enter | Abre el día |

## API

Un elemento vacío y `createCalendar`. El componente dibuja todo dentro de él.

| Opción | Tipo | Predeterminado | Para qué |
| --- | --- | --- | --- |
| `view` | 'month' \| 'week' \| 'day' | 'month' | Vista inicial. |
| `date` | Date | hoy | Día en foco: define el mes, la semana o el día que aparece. |
| `events` | { id, title, start, end, allDay?, tone? }[] | [] | Fin exclusivo: 9:00 a 10:00 termina a las 10:00; todo el día termina a la medianoche siguiente. |
| `weekStartsOn` | 0 \| 1 | el del idioma | 0 = domingo, 1 = lunes. |
| `views` | string[] | ['month', 'week', 'day'] | Las vistas del selector. Con una sola, el selector desaparece. |
| `scrollToHour` | number | 8 | Hora en que se abre la cuadrícula de horas. |
| `onEventClick` | (event) => void | — | Clic en un evento. Sin ella, hacer clic en el mes abre el día. |
| `onDateClick` | (date) => void | abre el día | Clic o Enter en un día del mes. |
| `onChange` | ({ view, date }) => void | — | Cambió la vista o el período. |

### Métodos

|   |   |
| --- | --- |
| `setView(view) · setDate(date)` | Cambia la vista o el día en foco. |
| `today() · prev() · next()` | Vuelve a hoy o avanza un período. |
| `setEvents(list)` | Cambia los eventos y redibuja. |
| `view · date` | La vista y el día actuales (solo lectura). |
| `destroy()` | Desconecta todo y limpia el elemento. |

### Altura CSS

```html
.agenda {
  --ds-calendar-hour: 48px;    /* altura de una hora */
  --ds-calendar-height: 600px; /* altura de la cuadrícula de horas */
  --ds-calendar-cell: 112px;   /* altura mínima del día en el mes */
}
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Tokens usados

Superficies y líneas del sistema; los tonos de los eventos son los mismos del Badge y la Alerta.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fondo | #FFFFFF | #24221F |
| color.bg.sunken (`--ds-color-bg-sunken`) | Días fuera del mes | #E8EDF3 | #151412 |
| color.border.subtle (`--ds-color-border-subtle`) | Líneas de la cuadrícula | #3E516624 | #FFFFFF0F |
| color.brand.solid (`--ds-color-brand-solid`) | Círculo de hoy | #3E5166 | #C0CAD6 |
| color.brand.indicator (`--ds-color-brand-indicator`) | Línea de ahora | #C97B63 | #DE9680 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Evento en el tono de la marca | #EEF2F6 | #C0CAD624 |
| color.info.subtle (`--ds-color-info-subtle`) | Evento en el tono info | #F0F8FF | #6ABCFF21 |
| text.heading-md (`--ds-text-heading-md`) | Título | 21/28 · regular | 21/28 · regular |
| text.caption (`--ds-text-caption`) | Días de la semana, horas y eventos | 12/16 · regular | 12/16 · regular |
| radius.xl (`--ds-radius-xl`) | Esquinas | 20 px | 20 px |

## Uso

El calendario muestra el tiempo. Para elegir una fecha en un formulario, basta un campo de fecha.

- **Haz:** abre en la vista de la tarea. La agenda del día abre en el día; la planificación, en la semana; la vista general, en el mes. Guarda la última elección con onChange.
- **Evita:** un tono para cada evento. Demasiado color se vuelve ruido. Usa el neutro por defecto y los tonos para lo que pide atención: plazo, foco, cancelado.
- **Consejo:** Títulos cortos. En el mes cabe poco: “Revisión del guion”, no “Reunión para revisar el guion del video”. El detalle llega con el clic.
