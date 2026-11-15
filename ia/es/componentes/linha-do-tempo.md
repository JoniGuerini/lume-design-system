# Línea de tiempo

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/linha-do-tempo

Eventos en orden, como el historial de un pedido o la actividad de un proyecto. Muestra qué pasó, cuándo y quién lo hizo.

En números: JavaScript: 0 · tonos: 5 · marcador: 24 px · base: ol.

## Ejemplo

```html
<ol class="ds-timeline">
  <li class="ds-timeline__item" data-tone="success">
    <span class="ds-timeline__marker"><ds-icon name="check" size="14"></ds-icon></span>
    <div class="ds-timeline__content">
      <p class="ds-timeline__title">Pedido entregado</p>
      <p class="ds-timeline__text">Recibido por Ana</p>
      <time class="ds-timeline__time" datetime="2026-11-08T14:20">8 nov, 14:20</time>
    </div>
  </li>
</ol>
```

## Variantes

El tono va en `data-tone`, en el elemento. Reserva el color para lo que merece destacar.

Con íconos `ds-timeline__marker` — El ícono dice el tipo de evento.

Con puntos `marcador vacío` — Cuando todos los eventos son del mismo tipo.

Marcado de los ejemplos de esta sección:

```html
<ol class="ds-timeline"><li class="ds-timeline__item" data-tone="success">
<span class="ds-timeline__marker"><ds-icon name="check"></ds-icon></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Pedido entregado</p>
<p class="ds-timeline__text">Recibido por Ana</p>
<time class="ds-timeline__time" datetime="2026-11-08T14:20">8 nov, 14:20</time>
</div>
</li><li class="ds-timeline__item" data-tone="brand">
<span class="ds-timeline__marker"><ds-icon name="package"></ds-icon></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Salió para entrega</p>
<p class="ds-timeline__text">Previsto para hoy</p>
<time class="ds-timeline__time" datetime="2026-11-08T08:05">8 nov, 08:05</time>
</div>
</li><li class="ds-timeline__item">
<span class="ds-timeline__marker"><ds-icon name="file-text"></ds-icon></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Factura emitida</p>
<time class="ds-timeline__time" datetime="2026-11-07T17:42">7 nov, 17:42</time>
</div>
</li><li class="ds-timeline__item">
<span class="ds-timeline__marker"><ds-icon name="clock"></ds-icon></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Pedido creado</p>
<p class="ds-timeline__text">Por Bruno</p>
<time class="ds-timeline__time" datetime="2026-11-07T09:30">7 nov, 09:30</time>
</div>
</li></ol>

<ol class="ds-timeline"><li class="ds-timeline__item" data-tone="success">
<span class="ds-timeline__marker"></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Pedido entregado</p>
<p class="ds-timeline__text">Recibido por Ana</p>
<time class="ds-timeline__time" datetime="2026-11-08T14:20">8 nov, 14:20</time>
</div>
</li><li class="ds-timeline__item" data-tone="brand">
<span class="ds-timeline__marker"></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Salió para entrega</p>
<p class="ds-timeline__text">Previsto para hoy</p>
<time class="ds-timeline__time" datetime="2026-11-08T08:05">8 nov, 08:05</time>
</div>
</li><li class="ds-timeline__item">
<span class="ds-timeline__marker"></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Factura emitida</p>
<time class="ds-timeline__time" datetime="2026-11-07T17:42">7 nov, 17:42</time>
</div>
</li><li class="ds-timeline__item">
<span class="ds-timeline__marker"></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Pedido creado</p>
<p class="ds-timeline__text">Por Bruno</p>
<time class="ds-timeline__time" datetime="2026-11-07T09:30">7 nov, 09:30</time>
</div>
</li></ol>
```

## Accesibilidad

Es una lista ordenada, con la fecha en un elemento propio.

- Orden — Usa `ol`: el lector de pantalla dice cuántos eventos hay y en cuál está.
- Fecha de verdad — `time` con `datetime` deja la fecha legible también para máquinas.
- No solo color — El sentido está en el título; el tono y el ícono solo refuerzan.

## Tokens usados

Todo lo que consume la línea de tiempo.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.muted (`--ds-color-bg-muted`) | Marcador neutro | #DAE0E8 | #3D3B38 |
| color.brand.solid (`--ds-color-brand-solid`) | Marcador de marca | #3E5166 | #C0CAD6 |
| color.success.subtle (`--ds-color-success-subtle`) | Marcador de éxito | #EFFAF1 | #72CB8B21 |
| color.border.default (`--ds-color-border-default`) | Línea entre eventos | #3E516633 | #FFFFFF1A |
| color.fg.subtle (`--ds-color-fg-subtle`) | Fecha | #53657A | #9C9792 |
| radius.full (`--ds-radius-full`) | Marcador | 9999 px | 9999 px |

## Uso

Cuándo usarla y cuándo preferir otra cosa.

- **Haz:** lo que ya pasó. Historial de pedidos, actividad y auditoría, del más nuevo al más antiguo.
- **Evita:** lo que falta hacer. Las etapas de un flujo piden el Stepper.
- **Consejo:** Fecha relativa con cuidado. “Hace 2 horas” es ideal para lo reciente; para el resto, muestra la fecha.
