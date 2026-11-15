# Image viewer

Lume section: Components. Page: https://lumeui.dev/#/componentes/visualizador-de-imagem

Opens a large image over the page, with zoom, panning, and the others in the same gallery. The thumbnail stays on the page; the full image only when people ask for it.

In numbers: max zoom: 4× · ways to open: 2 · shortcuts: 8 · ARIA role: dialog.

## Example

```html
<a class="ds-viewer-thumb" href="inicio.jpg" data-ds-viewer="capturas" data-caption="Home · light theme">
  <img src="inicio-mini.jpg" alt="Lume’s home page in the light theme, with the headline “Let’s build with refinement.” and the latest version card.">
</a>
<a class="ds-viewer-thumb" href="cores.jpg" data-ds-viewer="capturas" data-caption="Colors · dark theme">
  <img src="cores-mini.jpg" alt="Lume’s Colors page in the dark theme, with the palette numbers and the peach scale.">
</a>
<a class="ds-viewer-thumb" href="botao.jpg" data-ds-viewer="capturas" data-caption="Button · light theme">
  <img src="botao-mini.jpg" alt="Lume’s Button page in the light theme, with the playground and the variants.">
</a>
<a class="ds-viewer-thumb" href="graficos.jpg" data-ds-viewer="capturas" data-caption="Charts · dark theme">
  <img src="graficos-mini.jpg" alt="Lume’s Charts page in the dark theme, with bar and line charts.">
</a>

<script type="module">
  import { mountImageViewer } from 'https://lumeui.dev/v/1.1/lume.js';
  mountImageViewer(document);
</script>
```

## Variants

The same viewer, opened from thumbnails or from code.

Gallery `data-ds-viewer` — Links with the same value become one gallery: arrows, count, and each one’s caption.

Single image `ds-viewer-thumb` — On its own, without arrows or count. Without a caption, the bar shows only the tools.

From code `openImageViewer` — To open from a button, a menu, or another component. It starts on the image you ask for.

Failed to load `error state` — If the image doesn’t arrive, the viewer says so in its place, and the rest of the gallery still works.

Markup of the examples in this section:

```html
<a class="ds-viewer-thumb" href="assets/capturas/inicio.jpg" data-ds-viewer="galeria" data-caption="Home · light theme"><img src="assets/capturas/inicio-mini.jpg" alt="Lume’s home page in the light theme, with the headline “Let’s build with refinement.” and the latest version card." width="640" height="400" loading="lazy"></a>

<a class="ds-viewer-thumb" href="assets/capturas/cores.jpg" data-ds-viewer="galeria" data-caption="Colors · dark theme"><img src="assets/capturas/cores-mini.jpg" alt="Lume’s Colors page in the dark theme, with the palette numbers and the peach scale." width="640" height="400" loading="lazy"></a>

<a class="ds-viewer-thumb" href="assets/capturas/botao.jpg" data-ds-viewer="galeria" data-caption="Button · light theme"><img src="assets/capturas/botao-mini.jpg" alt="Lume’s Button page in the light theme, with the playground and the variants." width="640" height="400" loading="lazy"></a>

<a class="ds-viewer-thumb" href="assets/capturas/graficos.jpg" data-ds-viewer="galeria" data-caption="Charts · dark theme"><img src="assets/capturas/graficos-mini.jpg" alt="Lume’s Charts page in the dark theme, with bar and line charts." width="640" height="400" loading="lazy"></a>

<a class="ds-viewer-thumb" href="assets/capturas/cores.jpg" data-ds-viewer="unica"><img src="assets/capturas/cores-mini.jpg" alt="Lume’s Colors page in the dark theme, with the palette numbers and the peach scale." width="640" height="400" loading="lazy"></a>

<button type="button" class="ds-btn ds-btn--secondary" data-open-code=""><ds-icon name="maximize"></ds-icon>See the captures</button>

<button type="button" class="ds-btn ds-btn--secondary" data-open-error=""><ds-icon name="alert-circle"></ds-icon>Open a failing image</button>
```

## States

The thumbnail zooms in slightly on hover and shows the ring on focus. The magnifier cursor says it opens.

Markup of the examples in this section:

```html
<a class="ds-viewer-thumb" href="assets/capturas/botao.jpg" data-ds-viewer="estado" data-caption="Button · light theme"><img src="assets/capturas/botao-mini.jpg" alt="Lume’s Button page in the light theme, with the playground and the variants." width="640" height="400" loading="lazy"></a>
```

## Code

The thumbnail is a link to the large image: without JavaScript, it still opens. `mountImageViewer` wires every link in an area.

```html
<a class="ds-viewer-thumb" href="inicio.jpg" data-ds-viewer="capturas" data-caption="Home · light theme">
  <img src="inicio-mini.jpg" alt="Lume’s home page in the light theme, with the headline “Let’s build with refinement.” and the latest version card.">
</a>
<a class="ds-viewer-thumb" href="cores.jpg" data-ds-viewer="capturas" data-caption="Colors · dark theme">
  <img src="cores-mini.jpg" alt="Lume’s Colors page in the dark theme, with the palette numbers and the peach scale.">
</a>

<script type="module">
  import { mountImageViewer, openImageViewer } from 'https://lumeui.dev/v/1.1/lume.js';

  // clicking a thumbnail opens the gallery with the same data-ds-viewer
  mountImageViewer(document);

  // or open from code, starting on the second one
  openImageViewer([
    { src: 'inicio.jpg', alt: '…', caption: 'Home · light theme' },
    { src: 'cores.jpg', alt: '…', caption: 'Colors · dark theme' },
  ], { index: 1 });
</script>
```

Markup of the examples in this section:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copy code" data-ds-tooltip="Copy code"><ds-icon name="copy"></ds-icon></button>
```

## Accessibility

A modal dialog: focus moves in, stays inside, and returns to the thumbnail on close.

- Alt text — The thumbnail’s alt goes to the large image. Describe what the image shows; the caption is something else and can be empty.
- Switching images — ← → Home End — Arrow keys switch images; when zoomed, they move around the image. The “2 of 4” count is announced on each switch.
- Zoom — + − 0 — Named buttons, `+` and `−` on the keyboard, and `0` to fit the screen again. The wheel and pinch zoom in where the cursor or fingers are.
- Close — Esc — Esc, the “Close” button, or a click outside the image. Focus returns to whatever opened it.
- Loading and error — While the image loads, the spinner shows; if it fails, the message “The image couldn’t be loaded.” sits in a status region.
- Reduced motion — No zoom or entrance animation.

## Tokens used

The background is the app’s, opaque: no translucent veil.

| Token | Role | Lume light | Lume dark |
| --- | --- | --- | --- |
| color.bg.app (`--ds-color-bg-app`) | Viewer background | #DAE0E8 | #0F0E0C |
| color.bg.raised (`--ds-color-bg-raised`) | Toolbar and arrows | #FFFFFF | #2C2A27 |
| color.bg.muted (`--ds-color-bg-muted`) | Thumbnail background | #DAE0E8 | #3D3B38 |
| color.border.subtle (`--ds-color-border-subtle`) | Thumbnail border | #3E516624 | #FFFFFF0F |
| color.fg.muted (`--ds-color-fg-muted`) | Count and zoom percentage | #46586E | #CEC8C1 |
| radius.lg (`--ds-radius-lg`) | Thumbnail and image corners | 16 px | 16 px |
| radius.full (`--ds-radius-full`) | Tools and arrows | 9999 px | 9999 px |

## Usage

Viewer, carousel, or modal?

- **Do:** images that need detail. Screenshots, product photos, receipts: things people want to see up close.
- **Avoid:** decorative images. If there’s nothing to see up close, the image doesn’t need to open. Highlights that go by on their own are a Carousel.
- **Tip:** Light thumbnail, large image. The thumbnail loads with the page; the large one only when opened. Here, 30 KB and 200 KB.
