# Carrusel

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/carrossel

Muestra destacados o una galería de a uno, en un solo espacio. Úsalo cuando el espacio importa más que el orden; si todo es importante, prefiere una cuadrícula.

En números: por vista: 1+ · teclas: 4 · punto: 6 px · deslizar: nativo.

## Ejemplo

```html
<section class="ds-carousel" aria-label="Destacados">
  <div class="ds-carousel__viewport">
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
  </div>
</section>

<script type="module">
  import { createCarousel } from 'https://lumeui.dev/v/1.6/lume.js';
  createCarousel(document.querySelector('.ds-carousel'));
</script>
```

## Variantes

Cuántos se ven a la vez viene del CSS, en `--ds-carousel-per-view`: se puede cambiar por ancho de pantalla sin tocar el JavaScript.

Destacado `ds-carousel` — Una diapositiva a la vez, con título y texto. Bueno para novedades y bienvenidas.

Galería `ds-carousel--peek` — Dos a la vez (uno en el móvil), con el borde del siguiente a la vista: la persona ve que hay más.

## Estados

El punto actual se estira y oscurece: cambia de forma, no solo de color. Sin `loop`, la flecha del extremo queda desactivada.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-carousel__bar">
<div class="ds-carousel__dots"><button type="button" class="ds-carousel__dot" aria-current="true" aria-label="1"></button><button type="button" class="ds-carousel__dot" aria-label="2"></button><button type="button" class="ds-carousel__dot" aria-label="3"></button><button type="button" class="ds-carousel__dot" aria-label="4"></button></div>
<span class="ds-carousel__count">1 / 4</span>
<div class="ds-carousel__nav">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" disabled="" aria-label="prev"><ds-icon name="chevron-left"></ds-icon></button>
<button type="button" class="ds-icon-btn ds-icon-btn--muted" aria-label="next"><ds-icon name="chevron-right"></ds-icon></button>
</div>
</div>

<div class="ds-carousel__bar">
<div class="ds-carousel__dots"><button type="button" class="ds-carousel__dot" aria-label="1"></button><button type="button" class="ds-carousel__dot" aria-current="true" aria-label="2"></button><button type="button" class="ds-carousel__dot" aria-label="3"></button><button type="button" class="ds-carousel__dot" aria-label="4"></button></div>
<span class="ds-carousel__count">2 / 4</span>
<div class="ds-carousel__nav">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" aria-label="prev"><ds-icon name="chevron-left"></ds-icon></button>
<button type="button" class="ds-icon-btn ds-icon-btn--muted" aria-label="next"><ds-icon name="chevron-right"></ds-icon></button>
</div>
</div>
```

## Código

Las diapositivas son tuyas; el carrusel pone la barra de abajo, el teclado y las etiquetas.

```html
<section class="ds-carousel" aria-label="Destacados">
  <div class="ds-carousel__viewport">
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
  </div>
</section>

<script type="module">
  import { createCarousel } from 'https://lumeui.dev/v/1.6/lume.js';

  const carousel = createCarousel(document.querySelector('.ds-carousel'), {
    loop: true,
    onChange: (index) => console.log(index),
  });
  carousel.next();
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Sigue el patrón de carrusel de ARIA. Dale un nombre al carrusel con aria-label.

- Nombre y rol — El lector de pantalla dice “carrusel” y, en cada diapositiva, “2 de 5”.
- Solo lo que está a la vista — Las diapositivas fuera de la vista quedan inert: el Tab no cae en un enlace oculto.
- Teclado — ← → Home End — Con el foco en el área de las diapositivas, las flechas cambian y Home y End van a los extremos.
- Paso automático — Siempre con botón de pausa, se detiene con el ratón o el foco y no empieza con movimiento reducido. Mientras pasa solo, el lector de pantalla no anuncia cada cambio.
- Puntos — Cada punto es un botón “Ir a la diapositiva 3”, con aria-current en el actual y un área táctil mayor que el dibujo.

## Tokens usados

Todo lo que consume el carrusel.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.fg.default (`--ds-color-fg-default`) | Punto actual y título | #2B3847 | #F3EDE5 |
| color.border.strong (`--ds-color-border-strong`) | Puntos | #3E51664D | #FFFFFF29 |
| color.fg.muted (`--ds-color-fg-muted`) | Punto con el ratón, conteo y texto | #46586E | #CEC8C1 |
| color.bg.surface (`--ds-color-bg-surface`) | Fondo de la diapositiva de destacado | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno de la diapositiva | #3E516624 | #FFFFFF0F |
| color.border.focus (`--ds-color-border-focus`) | Foco en el área de las diapositivas | #53657A | #C0CAD6 |
| space.150 (`--ds-space-150`) | Espacio entre diapositivas | 12 px | 12 px |
| radius.xl (`--ds-radius-xl`) | Esquinas del área y la diapositiva | 20 px | 20 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** de 3 a 7 diapositivas. Cosas parecidas, en las que ver una a la vez no estorba.
- **Evita:** lo esencial escondido. Poca gente pasa de la segunda diapositiva. Lo que todos necesitan ver va fuera del carrusel.
- **Consejo:** Paso automático, solo si hace falta. Moverse solo quita atención a la lectura. Si lo usas, deja al menos 5 segundos por diapositiva.
