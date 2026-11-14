# Banner de anuncio

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/banner-de-anuncio

Una franja arriba de la app para un mensaje que vale para todos: una versión nueva, un cambio que se viene. La persona lo cierra y el banner recuerda que ya lo vio.

En números: tonos: 5 · a la vez: 1 · recuerda: localStorage · rol ARIA: region.

## Ejemplo

```html
<div class="ds-banner ds-banner--brand" aria-label="Anuncio">
  <span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
  <p class="ds-banner__text"><strong>Lume 0.35</strong> Banner de anuncio y centro de notificaciones. <a class="ds-link" href="/novidades">Ver novedades</a></p>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close"><ds-icon name="x" size="16"></ds-icon></button>
</div>

<script type="module">
  import { createBanner } from 'https://lumeui.dev/v/0.38/lume.js';
  createBanner(document.querySelector('.ds-banner'), { id: 'lume-0.35' });
</script>
```

## Variantes

El tono dice el tipo de mensaje; el ícono y el texto dicen lo mismo que el color.

Novedad `ds-banner--brand` — Una versión nueva, una función que llegó. Franja sólida en el tono de la marca: el único tono que destaca de verdad.

Neutro `ds-banner` — Un mensaje sin urgencia, que no necesita llamar la atención.

Información `ds-banner--info` — Algo que ayuda a entender qué cambió.

Atención `ds-banner--warning` — Un cambio que pide acción antes de una fecha. Sin cerrar, mientras la acción no esté hecha.

Error `ds-banner--danger` — Algo que afecta toda la app ahora. Se queda hasta que el problema termine.

Componentes — Feedback

Arriba de la app `ds-banner--flush` — Pegado a los bordes, encima de la barra superior: solo la línea de abajo lo separa.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-banner ds-banner--brand" role="region" aria-label="Anuncio">
<span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
<p class="ds-banner__text"><strong>Lume 0.35</strong>Banner de anuncio y centro de notificaciones. <a class="ds-link" href="#/novidades">Ver novedades</a></p>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="Cerrar anuncio"><ds-icon name="x"></ds-icon></button>
</div>

<div class="ds-banner" role="region" aria-label="Anuncio">
<span class="ds-banner__icon"><ds-icon name="info"></ds-icon></span>
<p class="ds-banner__text">El Storybook de Lume ahora también muestra los componentes React. <a class="ds-link" href="#/recursos/react">Storybook</a></p>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="Cerrar anuncio"><ds-icon name="x"></ds-icon></button>
</div>

<div class="ds-banner ds-banner--info" role="region" aria-label="Anuncio">
<span class="ds-banner__icon"><ds-icon name="info"></ds-icon></span>
<p class="ds-banner__text">Cada línea de Lume queda congelada en /v/0.xx/: actualiza cuando quieras. <a class="ds-link" href="#/primeiros-passos">Instalación</a></p>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="Cerrar anuncio"><ds-icon name="x"></ds-icon></button>
</div>

<div class="ds-banner ds-banner--warning" role="region" aria-label="Anuncio">
<span class="ds-banner__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<p class="ds-banner__text">Desde la 1.0, los nombres públicos solo cambian con aviso en la consola. <a class="ds-link" href="#/recursos/api">API</a></p>
</div>

<div class="ds-banner ds-banner--danger" role="region" aria-label="Anuncio">
<span class="ds-banner__icon"><ds-icon name="alert-circle"></ds-icon></span>
<p class="ds-banner__text">Las fuentes de Lume no cargaron; el texto usa las del sistema.</p>
</div>

<div class="ds-banner ds-banner--brand ds-banner--flush" role="region" aria-label="Anuncio">
<span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
<p class="ds-banner__text"><strong>Lume 0.35</strong>Banner de anuncio y centro de notificaciones. <a class="ds-link" href="#/novidades">Ver novedades</a></p>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="Cerrar anuncio"><ds-icon name="x"></ds-icon></button>
</div>

<span class="ds-skeleton ds-skeleton--text"></span>
```

## Código

El marcado es el banner entero; el JavaScript solo lo cierra y lo recuerda.

```html
<div class="ds-banner ds-banner--brand" aria-label="Anuncio">
  <span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
  <p class="ds-banner__text">
    <strong>Lume 0.35</strong> Banner de anuncio y centro de notificaciones.
    <a class="ds-link" href="/novidades">Ver novedades</a>
  </p>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close"><ds-icon name="x" size="16"></ds-icon></button>
</div>

<script type="module">
  import { createBanner } from 'https://lumeui.dev/v/0.38/lume.js';

  // id nuevo en cada anuncio: quien cerró el anterior ve este
  createBanner(document.querySelector('.ds-banner'), { id: 'lume-0.35' });
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Un mensaje que está en la página desde el principio, no un aviso que interrumpe.

- Región con nombre — Es role="region" con el nombre “Anuncio”: los lectores de pantalla lo listan entre los puntos de la página. No uses role="alert": no acaba de llegar.
- Cerrar — Tab Enter — El botón dice “Cerrar anuncio”. Cerrado con el foco dentro, el foco va a lo que viene justo después, y no se pierde.
- No solo color — Cada tono tiene su ícono, y el texto dice el tipo de mensaje.
- Una frase — Texto corto y un solo enlace: el banner está en todas las pantallas y no puede volverse lectura obligatoria.

## Tokens usados

Los mismos tonos de la alerta.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fondo neutro | #FFFFFF | #24221F |
| color.brand.solid (`--ds-color-brand-solid`) | Fondo de novedad | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Texto e ícono de novedad | #F8FAFD | #1D2734 |
| color.info.subtle (`--ds-color-info-subtle`) | Fondo de información | #F0F8FF | #6ABCFF21 |
| color.warning.subtle (`--ds-color-warning-subtle`) | Fondo de atención | #FFF9F0 | #FFB85121 |
| color.danger.subtle (`--ds-color-danger-subtle`) | Fondo de error | #FFF4F3 | #FF908721 |
| color.border.default (`--ds-color-border-default`) | Contorno neutro | #3E516633 | #FFFFFF1A |
| radius.lg (`--ds-radius-lg`) | Esquinas | 16 px | 16 px |

## Uso

¿Banner, alerta o toast?

- **Haz:** mensajes para todos. Versión nueva, cambio que se viene, problema que afecta a toda la app.
- **Evita:** un banner encima de otro. Uno a la vez. Un mensaje de una sola pantalla es Alerta; la respuesta a una acción es Toast.
- **Consejo:** Cambia el id en cada anuncio. Quien cerró “lume-0.34” ve “lume-0.35”. Mismo id, el banner queda cerrado.
