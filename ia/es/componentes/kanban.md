# Kanban

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/kanban

Columnas de tarjetas que pasan de una a otra: etapas de un trabajo, de lo planificado a lo hecho. Es la lista ordenable con varias listas del mismo grupo, y el número de cada columna se actualiza.

En números: columnas: 3–5 · ancho mínimo: 240 px · atajos: 9 · dependencias: 0.

## Ejemplo

```html
<script type="module">
  import { createKanban } from 'https://lumeui.dev/v/1.12/lume.js';
  createKanban(document.querySelector('.ds-kanban'), { onChange: (_, colunas) => console.log(colunas) });
</script>
```

## Variantes

La tarjeta entera arrastra, o solo el agarre cuando tiene enlaces y botones.

Columna vacía `data-empty` — Sin tarjetas, la columna muestra dónde soltar. El texto viene de Lume, en el idioma de la página.

Con agarre `ds-kanban__card--handle`

Con `handle`, solo el agarre arrastra: el resto de la tarjeta queda libre para enlaces y botones.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-kanban" aria-label="Roadmap de Lume" data-kanban="" role="group"><section class="ds-kanban__column" data-id="andamento">
<header class="ds-kanban__header"><h3 class="ds-kanban__title" id="kb-v1-andamento">En curso</h3><span class="ds-kanban__count">0</span></header>
<ul class="ds-kanban__list ds-sortable" role="list" aria-label="En curso" data-empty="" data-empty-text="Suelta una tarjeta aquí"></ul><span class="ds-visually-hidden" aria-live="assertive"></span>
</section><section class="ds-kanban__column" data-id="feito">
<header class="ds-kanban__header"><h3 class="ds-kanban__title" id="kb-v1-feito">Hecho</h3><span class="ds-kanban__count">2</span></header>
<ul class="ds-kanban__list ds-sortable" role="list" aria-label="Hecho" data-empty-text="Suelta una tarjeta aquí"><li class="ds-sortable__item ds-kanban__card" data-id="visualizador" data-kanban="" aria-describedby="ds-sortable-help" role="group">
<p class="ds-kanban__card-title">Visor de imágenes</p>
</li><li class="ds-sortable__item ds-kanban__card" data-id="banner" data-kanban="" aria-describedby="ds-sortable-help" role="group">
<p class="ds-kanban__card-title">Banner y notificaciones</p>
</li></ul><span class="ds-visually-hidden" aria-live="assertive"></span>
</section></div>
```

## Estados

Los mismos de la lista ordenable, en la tarjeta.

Marcado de los ejemplos de esta sección:

```html
<ul class="ds-kanban__list" role="list"><li class="ds-sortable__item ds-kanban__card" data-id="visualizador">
<p class="ds-kanban__card-title">Visor de imágenes</p>
<p class="ds-kanban__card-text">Zoom, arrastre y galería.</p>
<div class="ds-kanban__card-meta"><span class="ds-badge ds-badge--sm ds-badge--success">0.36</span></div>
</li></ul>

<ul class="ds-kanban__list" role="list"><li class="ds-sortable__item ds-kanban__card" data-id="visualizador" data-grabbed="">
<p class="ds-kanban__card-title">Visor de imágenes</p>
<p class="ds-kanban__card-text">Zoom, arrastre y galería.</p>
<div class="ds-kanban__card-meta"><span class="ds-badge ds-badge--sm ds-badge--success">0.36</span></div>
</li></ul>

<ul class="ds-kanban__list" role="list"><li class="ds-sortable__item ds-kanban__card" data-id="visualizador" data-ghost="">
<p class="ds-kanban__card-title">Visor de imágenes</p>
<p class="ds-kanban__card-text">Zoom, arrastre y galería.</p>
<div class="ds-kanban__card-meta"><span class="ds-badge ds-badge--sm ds-badge--success">0.36</span></div>
</li></ul>
```

## Código

El `data-id` de la columna y el de cada tarjeta forman lo que `toObject()` devuelve.

```html
<div class="ds-kanban" aria-label="Roadmap de Lume">
  <section class="ds-kanban__column" data-id="andamento">
    <header class="ds-kanban__header">
      <h3 class="ds-kanban__title">En curso</h3>
      <span class="ds-kanban__count"></span>
    </header>
    <ul class="ds-kanban__list" role="list" aria-label="En curso">
      <li class="ds-sortable__item ds-kanban__card" data-id="kanban">
        <p class="ds-kanban__card-title">Lista ordenable y kanban</p>
        <p class="ds-kanban__card-text">Cambiar el orden y el lugar de las cosas.</p>
      </li>
    </ul>
  </section>
  <section class="ds-kanban__column" data-id="feito">…</section>
</div>

<script type="module">
  import { createKanban } from 'https://lumeui.dev/v/1.12/lume.js';

  createKanban(document.querySelector('.ds-kanban'), {
    // { andamento: [], feito: ['kanban', …] }
    onChange: (mudanca, colunas) => salvar(colunas),
  });
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Cada columna es una lista con nombre; la tarjeta se lee por su propio texto.

- Tarjeta enfocable — Espacio Enter — Sin agarre, la tarjeta recibe el foco y Espacio o Enter la toma. Con agarre, el agarre es el botón “Mover …”.
- Cambiar de columna — ← → — Las laterales llevan la tarjeta a la columna vecina, y el anuncio dice cuál: ““Lista ordenable y kanban” en Hecho, posición 1 de 4.”
- Cambiar el orden — ↑ ↓ Home End — Las flechas de arriba y abajo se mueven dentro de la columna; Home y End van a los extremos.
- Deshacer — Esc — Esc devuelve la tarjeta a la columna y la posición de donde salió.
- Desplazamiento — Con más columnas que el ancho, el tablero se desplaza de lado; arrastrando cerca del borde, se desplaza solo.

## Tokens usados

La columna está hundida; la tarjeta, la superficie encima.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.sunken (`--ds-color-bg-sunken`) | Fondo de la columna | #E8EDF3 | #151412 |
| color.bg.surface (`--ds-color-bg-surface`) | Fondo de la tarjeta | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno de la tarjeta | #3E516624 | #FFFFFF0F |
| color.border.default (`--ds-color-border-default`) | Tarjeta con el ratón y columna vacía | #3E516633 | #FFFFFF1A |
| color.fg.muted (`--ds-color-fg-muted`) | Texto de la tarjeta y número de la columna | #46586E | #CEC8C1 |
| radius.xl (`--ds-radius-xl`) | Esquinas de la columna | 20 px | 20 px |
| radius.lg (`--ds-radius-lg`) | Esquinas de la tarjeta | 16 px | 16 px |

## Uso

Para etapas, no para categorías.

- **Haz:** trabajo que avanza. De lo planificado a lo hecho, de la clasificación a la respuesta: la tarjeta cambia de columna cuando cambia de etapa.
- **Evita:** demasiadas columnas. De tres a cinco caben en la pantalla. Más que eso, la persona pierde de vista el tablero.
- **Consejo:** Tarjetas cortas. Título, una línea y una insignia. El detalle se abre al hacer clic, en un Modal o un Panel lateral.
