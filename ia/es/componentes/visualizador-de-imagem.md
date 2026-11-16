# Visor de imágenes

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/visualizador-de-imagem

Abre una imagen grande sobre la página, con zoom, arrastre y las demás de la misma galería. La miniatura queda en la página; la imagen completa, solo cuando la persona la pide.

En números: zoom máximo: 4× · formas de abrir: 2 · atajos: 8 · rol ARIA: dialog.

## Ejemplo

```html
<a class="ds-viewer-thumb" href="inicio.jpg" data-ds-viewer="capturas" data-caption="Inicio · tema claro">
  <img src="inicio-mini.jpg" alt="La página de inicio de Lume en el tema claro, con el título “Construyamos con refinamiento.” y la tarjeta de la última versión.">
</a>
<a class="ds-viewer-thumb" href="cores.jpg" data-ds-viewer="capturas" data-caption="Colores · tema oscuro">
  <img src="cores-mini.jpg" alt="La página Colores de Lume en el tema oscuro, con los números de la paleta y la escala del durazno.">
</a>
<a class="ds-viewer-thumb" href="botao.jpg" data-ds-viewer="capturas" data-caption="Botón · tema claro">
  <img src="botao-mini.jpg" alt="La página Botón de Lume en el tema claro, con el playground y las variantes.">
</a>
<a class="ds-viewer-thumb" href="graficos.jpg" data-ds-viewer="capturas" data-caption="Gráficos · tema oscuro">
  <img src="graficos-mini.jpg" alt="La página Gráficos de Lume en el tema oscuro, con gráficos de barras y de líneas.">
</a>

<script type="module">
  import { mountImageViewer } from 'https://lumeui.dev/v/1.9/lume.js';
  mountImageViewer(document);
</script>
```

## Variantes

El mismo visor, abierto desde miniaturas o por código.

Galería `data-ds-viewer` — Los enlaces con el mismo valor forman una galería: flechas, conteo y la leyenda de cada una.

Imagen única `ds-viewer-thumb` — Sola, sin flechas ni conteo. Sin leyenda, la barra muestra solo las herramientas.

Por código `openImageViewer` — Para abrir desde un botón, un menú u otro componente. Empieza en la imagen que pidas.

Sin cargar `estado de error` — Si la imagen no llega, el visor lo dice en su lugar, y las demás de la galería siguen.

Marcado de los ejemplos de esta sección:

```html
<a class="ds-viewer-thumb" href="assets/capturas/inicio.jpg" data-ds-viewer="galeria" data-caption="Inicio · tema claro"><img src="assets/capturas/inicio-mini.jpg" alt="La página de inicio de Lume en el tema claro, con el título “Construyamos con refinamiento.” y la tarjeta de la última versión." width="640" height="400" loading="lazy"></a>

<a class="ds-viewer-thumb" href="assets/capturas/cores.jpg" data-ds-viewer="galeria" data-caption="Colores · tema oscuro"><img src="assets/capturas/cores-mini.jpg" alt="La página Colores de Lume en el tema oscuro, con los números de la paleta y la escala del durazno." width="640" height="400" loading="lazy"></a>

<a class="ds-viewer-thumb" href="assets/capturas/botao.jpg" data-ds-viewer="galeria" data-caption="Botón · tema claro"><img src="assets/capturas/botao-mini.jpg" alt="La página Botón de Lume en el tema claro, con el playground y las variantes." width="640" height="400" loading="lazy"></a>

<a class="ds-viewer-thumb" href="assets/capturas/graficos.jpg" data-ds-viewer="galeria" data-caption="Gráficos · tema oscuro"><img src="assets/capturas/graficos-mini.jpg" alt="La página Gráficos de Lume en el tema oscuro, con gráficos de barras y de líneas." width="640" height="400" loading="lazy"></a>

<a class="ds-viewer-thumb" href="assets/capturas/cores.jpg" data-ds-viewer="unica"><img src="assets/capturas/cores-mini.jpg" alt="La página Colores de Lume en el tema oscuro, con los números de la paleta y la escala del durazno." width="640" height="400" loading="lazy"></a>

<button type="button" class="ds-btn ds-btn--secondary" data-open-code=""><ds-icon name="maximize"></ds-icon>Ver las capturas</button>

<button type="button" class="ds-btn ds-btn--secondary" data-open-error=""><ds-icon name="alert-circle"></ds-icon>Abrir imagen que falla</button>
```

## Estados

La miniatura se acerca un poco con el ratón y muestra el anillo con el foco. El cursor de lupa avisa que abre.

Marcado de los ejemplos de esta sección:

```html
<a class="ds-viewer-thumb" href="assets/capturas/botao.jpg" data-ds-viewer="estado" data-caption="Botón · tema claro"><img src="assets/capturas/botao-mini.jpg" alt="La página Botón de Lume en el tema claro, con el playground y las variantes." width="640" height="400" loading="lazy"></a>
```

## Código

La miniatura es un enlace a la imagen grande: sin JavaScript, igual se abre. `mountImageViewer` conecta todos los enlaces de un área.

```html
<a class="ds-viewer-thumb" href="inicio.jpg" data-ds-viewer="capturas" data-caption="Inicio · tema claro">
  <img src="inicio-mini.jpg" alt="La página de inicio de Lume en el tema claro, con el título “Construyamos con refinamiento.” y la tarjeta de la última versión.">
</a>
<a class="ds-viewer-thumb" href="cores.jpg" data-ds-viewer="capturas" data-caption="Colores · tema oscuro">
  <img src="cores-mini.jpg" alt="La página Colores de Lume en el tema oscuro, con los números de la paleta y la escala del durazno.">
</a>

<script type="module">
  import { mountImageViewer, openImageViewer } from 'https://lumeui.dev/v/1.9/lume.js';

  // hacer clic en una miniatura abre la galería del mismo data-ds-viewer
  mountImageViewer(document);

  // o abre por código, empezando por la segunda
  openImageViewer([
    { src: 'inicio.jpg', alt: '…', caption: 'Inicio · tema claro' },
    { src: 'cores.jpg', alt: '…', caption: 'Colores · tema oscuro' },
  ], { index: 1 });
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Un diálogo modal: el foco entra, se queda dentro y vuelve a la miniatura al cerrar.

- Texto alternativo — El alt de la miniatura pasa a la imagen grande. Describe lo que muestra la imagen; la leyenda es otra cosa y puede quedar vacía.
- Cambiar de imagen — ← → Home End — Las flechas cambian; con zoom, se mueven por la imagen. El conteo “2 de 4” se anuncia en cada cambio.
- Zoom — + − 0 — Botones con nombre, `+` y `−` en el teclado y `0` para volver a caber en la pantalla. La rueda y el pellizco acercan en el punto del cursor o de los dedos.
- Cerrar — Esc — Esc, el botón “Cerrar” o un clic fuera de la imagen. El foco vuelve a quien lo abrió.
- Cargando y error — Mientras la imagen llega aparece el spinner; si falla, el mensaje “No se pudo cargar la imagen.” queda en una región de estado.
- Movimiento reducido — Sin animación de zoom ni de entrada.

## Tokens usados

El fondo es el de la app, opaco: nada de velo translúcido.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.app (`--ds-color-bg-app`) | Fondo del visor | #DAE0E8 | #0F0E0C |
| color.bg.raised (`--ds-color-bg-raised`) | Barra de herramientas y flechas | #FFFFFF | #2C2A27 |
| color.bg.muted (`--ds-color-bg-muted`) | Fondo de la miniatura | #DAE0E8 | #3D3B38 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno de la miniatura | #3E516624 | #FFFFFF0F |
| color.fg.muted (`--ds-color-fg-muted`) | Conteo y porcentaje del zoom | #46586E | #CEC8C1 |
| radius.lg (`--ds-radius-lg`) | Esquinas de la miniatura y de la imagen | 16 px | 16 px |
| radius.full (`--ds-radius-full`) | Herramientas y flechas | 9999 px | 9999 px |

## Uso

¿Visor, carrusel o modal?

- **Haz:** imágenes que piden detalle. Capturas de pantalla, fotos de producto, comprobantes: lo que la persona quiere ver de cerca.
- **Evita:** imágenes decorativas. Si no hay nada que ver de cerca, la imagen no necesita abrirse. Destacados que pasan solos son Carrusel.
- **Consejo:** Miniatura liviana, imagen grande. La miniatura carga con la página; la grande, solo al abrirse. Aquí, 30 KB y 200 KB.
