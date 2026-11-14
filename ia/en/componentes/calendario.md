# Calendar

Lume section: Components. Page: https://lumeui.dev/#/componentes/calendario

Month, week, and day in the same piece, with events. Dates, names, and the first day of the week come from the locale — and it’s fully usable by keyboard.

In numbers: views: 3 · event tones: 6 · week starts: Sunday · dependencies: 0.

## Example

```html
import { createCalendar } from 'https://lumeui.dev/v/0.30/lume.js';

createCalendar(document.querySelector('#calendar'), {
  events: [
    { id: 'script', title: 'Script review', start, end, tone: 'brand' },
    { id: 'event', title: 'Launch event', start, end, allDay: true, tone: 'success' },
  ],
  onEventClick: (event) => open(event.id),
});
```

## Events

Three shapes, depending on duration, and six tones. Tone is never the only cue: the title says what it is.

Timed — In the month, one line: a dot in the tone, time, and title. In the week and day, a block as tall as the duration.

All day — A filled bar at the top of the day — in the month and in the week’s “All day” row. It can span several days.

At the same time — Overlapping events split the column. In the month, up to three per day; the rest becomes “+2 more”, which opens the day.

### Tones tone

The default: a regular commitment.

What’s yours or in focus.

Meetings and conversations.

Done, holiday, launch.

An upcoming deadline.

Late or canceled.

Markup of the examples in this section:

```html
<span class="ds-calendar__item ds-calendar__item--brand"><span class="ds-calendar__dot"></span><span class="ds-calendar__item-time">10:00 AM</span><span class="ds-calendar__item-title">Script review</span></span>

<span class="ds-calendar__event ds-calendar__event--brand"><span class="ds-calendar__event-title">Script review</span><span class="ds-calendar__event-time">10:00 AM</span></span>

<span class="ds-calendar__chip ds-calendar__chip--success">Launch event</span>

<span class="ds-calendar__event ds-calendar__event--brand"><span class="ds-calendar__event-title">Script</span><span class="ds-calendar__event-time">10:00 AM</span></span>

<span class="ds-calendar__event ds-calendar__event--info"><span class="ds-calendar__event-title">Coffee</span><span class="ds-calendar__event-time">10:30 AM</span></span>

<span class="ds-calendar__event ds-calendar__event--neutral"><span class="ds-calendar__event-title">Neutral</span><span class="ds-calendar__event-time">'neutral'</span></span>

<span class="ds-calendar__event ds-calendar__event--brand"><span class="ds-calendar__event-title">Brand</span><span class="ds-calendar__event-time">'brand'</span></span>

<span class="ds-calendar__event ds-calendar__event--info"><span class="ds-calendar__event-title">Info</span><span class="ds-calendar__event-time">'info'</span></span>
```

## Accessibility

The month is a real grid (role="grid"): a single Tab stop, and the arrows move through the days.

- Each day says what it holds — The screen reader hears “Wednesday, November 4, today, 6 events” — never just “4”.
- Today marked — Today has `aria-current="date"`, besides the circle in the brand color.
- Events with full names — In the week and day, each event is a button with title, time, and day. In the month, Enter opens the day, where events are buttons.
- The title announces changes — When switching month, week, or day, the title (`aria-live="polite"`) is read again.
- Tone never alone — Color helps grouping, but the event title is what matters. Event text passes 4.5:1 on the tone background.

### Keyboard in the month

|   |   |
| --- | --- |
| ← → | Previous or next day |
| ↑ ↓ | Same day in the previous or next week |
| Home End | Start or end of the week |
| PageUp PageDown | Previous or next month |
| Enter | Opens the day |

## API

An empty element and `createCalendar`. The component draws everything inside it.

| Option | Type | Default | What for |
| --- | --- | --- | --- |
| `view` | 'month' \| 'week' \| 'day' | 'month' | Initial view. |
| `date` | Date | today | Day in focus: sets the month, week, or day shown. |
| `events` | { id, title, start, end, allDay?, tone? }[] | [] | Exclusive end: 9:00 to 10:00 ends at 10:00; all-day ends at the next midnight. |
| `weekStartsOn` | 0 \| 1 | the locale’s | 0 = Sunday, 1 = Monday. |
| `views` | string[] | ['month', 'week', 'day'] | The views in the switch. With only one, the switch disappears. |
| `scrollToHour` | number | 8 | Hour the time grid opens at. |
| `onEventClick` | (event) => void | — | Click on an event. Without it, clicking in the month opens the day. |
| `onDateClick` | (date) => void | opens the day | Click or Enter on a day in the month. |
| `onChange` | ({ view, date }) => void | — | The view or the period changed. |

### Methods

|   |   |
| --- | --- |
| `setView(view) · setDate(date)` | Changes the view or the day in focus. |
| `today() · prev() · next()` | Goes back to today or moves one period. |
| `setEvents(list)` | Replaces the events and redraws. |
| `view · date` | The current view and day (read-only). |
| `destroy()` | Turns everything off and clears the element. |

### Height CSS

```html
.calendar {
  --ds-calendar-hour: 48px;    /* height of one hour */
  --ds-calendar-height: 600px; /* height of the time grid */
  --ds-calendar-cell: 112px;   /* minimum day height in the month */
}
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Tokens used

System surfaces and lines; event tones are the same as the Badge and Alert.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Background | #FFFFFF | #24221F |
| color.bg.sunken (`--ds-color-bg-sunken`) | Days outside the month | #E8EDF3 | #151412 |
| color.border.subtle (`--ds-color-border-subtle`) | Grid lines | #3E516624 | #FFFFFF0F |
| color.brand.solid (`--ds-color-brand-solid`) | Today’s circle | #3E5166 | #C0CAD6 |
| color.brand.indicator (`--ds-color-brand-indicator`) | Now line | #C97B63 | #DE9680 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Brand-tone event | #EEF2F6 | #C0CAD624 |
| color.info.subtle (`--ds-color-info-subtle`) | Info-tone event | #F0F8FF | #6ABCFF21 |
| text.heading-md (`--ds-text-heading-md`) | Title | 21/28 · regular | 21/28 · regular |
| text.caption (`--ds-text-caption`) | Weekdays, hours, and events | 12/16 · regular | 12/16 · regular |
| radius.xl (`--ds-radius-xl`) | Corners | 20 px | 20 px |

## Usage

The calendar shows time. To pick a date in a form, a date field is enough.

- **Do:** open in the task’s view. A day’s agenda opens on the day; planning, on the week; overview, on the month. Remember the last choice with onChange.
- **Avoid:** one tone per event. Too much color becomes noise. Use neutral by default and tones for what needs attention: deadlines, focus, canceled.
- **Tip:** Short titles. Little fits in the month: “Script review”, not “Meeting to review the video script”. The details come on click.
