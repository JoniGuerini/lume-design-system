# Centro de notificaciones

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/central-de-notificacoes

La campana que abre la lista de lo que pasó, para cada persona. El número muestra cuántas faltan por leer; abrir una notificación la marca como leída.

En números: base: Popover · tonos de ícono: 6 · tiempo: relativo · rol ARIA: dialog.

## Ejemplo

```html
<button type="button" class="ds-icon-btn"><ds-icon name="bell"></ds-icon></button>

<script type="module">
  import { createNotificationCenter } from 'https://lumeui.dev/v/1.14/lume.js';

  createNotificationCenter(document.querySelector('.ds-icon-btn'), {
    items: [
      { id: 'v035', title: 'Lume 0.35', time: new Date(), icon: 'megaphone', tone: 'brand', href: '/novidades' },
    ],
  });
</script>
```

## Variantes

El panel es siempre el mismo; cambia lo que hay en él.

Con sin leer `read: false` — Título fuerte y el punto del indicador. “Marcar todas como leídas” solo aparece cuando hay algo que marcar.

Todo leído `read: true` — Sin punto, título en peso normal y la campana sin número.

Vacío `items: []` — Una frase corta, sin ilustración.

Sin ícono `sin icon` — Para listas donde todas las notificaciones son del mismo tipo.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-popover ds-notify-panel" role="group" aria-label="Notificaciones">
<div class="ds-notify">
<div class="ds-notify__header"><h3 class="ds-notify__title">Notificaciones</h3></div>
<ul class="ds-notify__list" role="list"><li class="ds-notify__item">
<a class="ds-notify__link" href="#">
<span class="ds-notify__icon ds-notify__icon--success"><ds-icon name="check-circle"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Storybook actualizado</span><span class="ds-notify__text">Las historias de los componentes nuevos ya están ahí.</span><time class="ds-notify__time">hace 2 horas</time></span>
</a>
</li><li class="ds-notify__item">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__icon ds-notify__icon--brand"><ds-icon name="megaphone"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.34</span><span class="ds-notify__text">Divisor, enlace y progreso circular.</span><time class="ds-notify__time">ayer</time></span>
</a>
</li><li class="ds-notify__item">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__icon"><ds-icon name="megaphone"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.33</span><span class="ds-notify__text">Valoración y barra de herramientas.</span><time class="ds-notify__time">10 nov</time></span>
</a>
</li></ul>
</div>
</div>

<div class="ds-popover ds-notify-panel" role="group" aria-label="Notificaciones">
<div class="ds-notify">
<div class="ds-notify__header"><h3 class="ds-notify__title">Notificaciones</h3></div>
<div class="ds-notify__empty"><ds-icon name="bell"></ds-icon><span>Todavía no hay notificaciones.</span></div>
</div>
</div>

<div class="ds-popover ds-notify-panel" role="group" aria-label="Notificaciones">
<div class="ds-notify">
<div class="ds-notify__header"><h3 class="ds-notify__title">Notificaciones</h3><span class="ds-inline-action">Marcar todas como leídas</span></div>
<ul class="ds-notify__list" role="list"><li class="ds-notify__item" data-unread="">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.35</span><span class="ds-notify__text">Banner de anuncio y centro de notificaciones.</span><time class="ds-notify__time">hace 4 minutos</time></span>
<span class="ds-dot ds-notify__dot"></span>
</a>
</li><li class="ds-notify__item" data-unread="">
<a class="ds-notify__link" href="#">
<span class="ds-notify__body"><span class="ds-notify__item-title">Storybook actualizado</span><span class="ds-notify__text">Las historias de los componentes nuevos ya están ahí.</span><time class="ds-notify__time">hace 2 horas</time></span>
<span class="ds-dot ds-notify__dot"></span>
</a>
</li></ul>
</div>
</div>
```

## Estados

El número en la campana usa el color del indicador; arriba de 99, se vuelve “99+”.

Marcado de los ejemplos de esta sección:

```html
<span class="ds-icon-btn ds-notify-trigger"><ds-icon name="bell"></ds-icon></span>

<span class="ds-icon-btn ds-notify-trigger"><ds-icon name="bell"></ds-icon><span class="ds-notify-trigger__count">2</span></span>

<span class="ds-icon-btn ds-notify-trigger"><ds-icon name="bell"></ds-icon><span class="ds-notify-trigger__count">99+</span></span>

<ul class="ds-notify__list" role="list"><li class="ds-notify__item" data-unread="">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__icon ds-notify__icon--brand"><ds-icon name="megaphone"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.35</span><span class="ds-notify__text">Banner de anuncio y centro de notificaciones.</span><time class="ds-notify__time">hace 4 minutos</time></span>
<span class="ds-dot ds-notify__dot"></span>
</a>
</li></ul>

<ul class="ds-notify__list" role="list"><li class="ds-notify__item">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__icon ds-notify__icon--brand"><ds-icon name="megaphone"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.35</span><span class="ds-notify__text">Banner de anuncio y centro de notificaciones.</span><time class="ds-notify__time">hace 4 minutos</time></span>
</a>
</li></ul>
```

## Código

Tú das la campana y la lista; el JavaScript dibuja el panel, el número y se ocupa de lo leído.

```html
<button type="button" class="ds-icon-btn"><ds-icon name="bell"></ds-icon></button>

<script type="module">
  import { createNotificationCenter } from 'https://lumeui.dev/v/1.14/lume.js';

  const center = createNotificationCenter(document.querySelector('.ds-icon-btn'), {
    items: [
      { id: 'v035', title: 'Lume 0.35', text: 'Banner de anuncio y centro de notificaciones.', time: new Date(),
        icon: 'megaphone', tone: 'brand', href: '/novidades' },
    ],
    onChange: (items, unread) => guardar(items),
  });

  // llegó una nueva (por WebSocket, por ejemplo)
  center.add({ id: 'v036', title: 'Lume 0.36', time: new Date() });
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Un popover con una lista de enlaces: nada nuevo que aprender.

- Campana con el número — El nombre de la campana dice cuántas faltan: “Notificaciones, 2 sin leer”. El número visible es aria-hidden.
- Panel — Tab Enter Esc — role="dialog" no modal, con nombre. Abrir lleva el foco adentro; Esc cierra y devuelve el foco a la campana.
- Sin leer — El punto es visual; cada elemento sin leer dice “Sin leer” al lector de pantalla.
- Lo que llega — add() anuncia “Nueva notificación: …” en una región de estado, sin robar el foco.

## Tokens usados

Todo lo que consume el centro, además del Popover.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.brand.indicator (`--ds-color-brand-indicator`) | Número y punto sin leer | #C97B63 | #DE9680 |
| color.bg.hover (`--ds-color-bg-hover`) | Elemento con el ratón | #3E51660D | #FFFFFF0D |
| color.bg.muted (`--ds-color-bg-muted`) | Fondo del ícono neutro | #DAE0E8 | #3D3B38 |
| color.fg.muted (`--ds-color-fg-muted`) | Texto y título leído | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Tiempo | #53657A | #9C9792 |
| color.border.subtle (`--ds-color-border-subtle`) | Línea del encabezado | #3E516624 | #FFFFFF0F |
| radius.md (`--ds-radius-md`) | Esquinas del elemento | 12 px | 12 px |

## Uso

¿Notificación, toast o banner?

- **Haz:** lo que la persona querrá revisar. Una versión nueva, algo que cambió en lo suyo. La notificación queda guardada; el toast desaparece.
- **Evita:** notificar lo que la persona acaba de hacer. “Guardado” es un toast. En el centro, solo lo que pasó mientras hacía otra cosa.
- **Consejo:** Un título que se basta. Quien lee solo el título tiene que entender qué pasó. El texto completa.
