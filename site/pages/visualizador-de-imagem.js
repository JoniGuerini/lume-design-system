import { icon } from '../../ds/icons/icons.js';
import { msg } from '../../ds/js/i18n.js';
import { openImageViewer, mountImageViewer } from '../../ds/js/image-viewer.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/visualizador-de-imagem.css'];

/* As imagens dos exemplos são capturas do próprio Lume (escolha dele: o DS não usa imagens de enfeite) */
const SHOTS = () => [
  { id: 'inicio', caption: L('Início · tema claro', 'Home · light theme', 'Inicio · tema claro'), alt: L('A página inicial do Lume no tema claro, com o título “Vamos construir com refinamento.” e o cartão da última versão.', 'Lume’s home page in the light theme, with the headline “Let’s build with refinement.” and the latest version card.', 'La página de inicio de Lume en el tema claro, con el título “Construyamos con refinamiento.” y la tarjeta de la última versión.') },
  { id: 'cores', caption: L('Cores · tema escuro', 'Colors · dark theme', 'Colores · tema oscuro'), alt: L('A página Cores do Lume no tema escuro, com os números da paleta e a escala do pêssego.', 'Lume’s Colors page in the dark theme, with the palette numbers and the peach scale.', 'La página Colores de Lume en el tema oscuro, con los números de la paleta y la escala del durazno.') },
  { id: 'botao', caption: L('Botão · tema claro', 'Button · light theme', 'Botón · tema claro'), alt: L('A página Botão do Lume no tema claro, com o playground e as variantes.', 'Lume’s Button page in the light theme, with the playground and the variants.', 'La página Botón de Lume en el tema claro, con el playground y las variantes.') },
  { id: 'graficos', caption: L('Gráficos · tema escuro', 'Charts · dark theme', 'Gráficos · tema oscuro'), alt: L('A página Gráficos do Lume no tema escuro, com gráficos de barras e de linhas.', 'Lume’s Charts page in the dark theme, with bar and line charts.', 'La página Gráficos de Lume en el tema oscuro, con gráficos de barras y de líneas.') },
];

const src = (id, mini = false) => `assets/capturas/${id}${mini ? '-mini' : ''}.jpg`;

const thumb = (shot, { group = 'capturas', caption = true, attrs = '' } = {}) =>
  `<a class="ds-viewer-thumb" href="${src(shot.id)}" data-ds-viewer="${group}"${caption ? ` data-caption="${shot.caption}"` : ''}${attrs}><img src="${src(shot.id, true)}" alt="${shot.alt}" width="640" height="400" loading="lazy"></a>`;

const gallery = (group, { caption = true } = {}) => `<div class="iv-grid">${SHOTS().map((s) => thumb(s, { group, caption })).join('')}</div>`;

export default function renderImageViewer(page) {
  const shots = SHOTS();
  return controlPage(page, {
    lead: L('Abre uma imagem grande por cima da página, com zoom, arrastar e as outras da mesma galeria. A miniatura fica na página; a imagem inteira, só quando a pessoa pede.', 'Opens a large image over the page, with zoom, panning, and the others in the same gallery. The thumbnail stays on the page; the full image only when people ask for it.', 'Abre una imagen grande sobre la página, con zoom, arrastre y las demás de la misma galería. La miniatura queda en la página; la imagen completa, solo cuando la persona la pide.'),
    stats: [
      [L('zoom máximo', 'max zoom', 'zoom máximo'), '4×'],
      [L('formas de abrir', 'ways to open', 'formas de abrir'), 2],
      [L('atalhos', 'shortcuts', 'atajos'), 8],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'dialog'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Clique numa captura. Dentro, use a roda do mouse ou ${ic('+')} e ${ic('−')}, arraste para andar e ${ic('←')} ${ic('→')} para trocar.`, `Click a capture. Inside, use the mouse wheel or ${ic('+')} and ${ic('−')}, drag to move around, and ${ic('←')} ${ic('→')} to switch.`, `Haz clic en una captura. Dentro, usa la rueda del ratón o ${ic('+')} y ${ic('−')}, arrastra para moverte y ${ic('←')} ${ic('→')} para cambiar.`), html: playgroundMarkup('viewer', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('O mesmo visualizador, aberto por miniaturas ou por código.', 'The same viewer, opened from thumbnails or from code.', 'El mismo visor, abierto desde miniaturas o por código.'),
        html: examples(
          [
            example(L('Galeria', 'Gallery', 'Galería'), 'data-ds-viewer', L('Links com o mesmo valor viram uma galeria: setas, contagem e legenda de cada uma.', 'Links with the same value become one gallery: arrows, count, and each one’s caption.', 'Los enlaces con el mismo valor forman una galería: flechas, conteo y la leyenda de cada una.'), gallery('galeria')),
            example(L('Imagem única', 'Single image', 'Imagen única'), 'ds-viewer-thumb', L('Sozinha, sem setas nem contagem. Sem legenda, a barra mostra só as ferramentas.', 'On its own, without arrows or count. Without a caption, the bar shows only the tools.', 'Sola, sin flechas ni conteo. Sin leyenda, la barra muestra solo las herramientas.'), `<div class="iv-single">${thumb(shots[1], { group: 'unica', caption: false })}</div>`),
            example(L('Por código', 'From code', 'Por código'), 'openImageViewer', L('Para abrir de um botão, de um menu ou de outro componente. Começa na imagem que você pedir.', 'To open from a button, a menu, or another component. It starts on the image you ask for.', 'Para abrir desde un botón, un menú u otro componente. Empieza en la imagen que pidas.'), `<button type="button" class="ds-btn ds-btn--secondary" data-open-code>${icon('maximize', { size: 18 })}${L('Ver as capturas', 'See the captures', 'Ver las capturas')}</button>`),
            example(L('Sem carregar', 'Failed to load', 'Sin cargar'), L('estado de erro', 'error state', 'estado de error'), L('Se a imagem não vem, o visualizador diz isso no lugar dela, e as outras da galeria continuam.', 'If the image doesn’t arrive, the viewer says so in its place, and the rest of the gallery still works.', 'Si la imagen no llega, el visor lo dice en su lugar, y las demás de la galería siguen.'), `<button type="button" class="ds-btn ds-btn--secondary" data-open-error>${icon('alert-circle', { size: 18 })}${L('Abrir imagem que falha', 'Open a failing image', 'Abrir imagen que falla')}</button>`),
          ],
          2,
        ),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('A miniatura aproxima de leve com o mouse e mostra o anel com o foco. O cursor de lupa avisa que abre.', 'The thumbnail zooms in slightly on hover and shows the ring on focus. The magnifier cursor says it opens.', 'La miniatura se acerca un poco con el ratón y muestra el anillo con el foco. El cursor de lupa avisa que abre.'),
        html: stateGrid([
          [L('Padrão', 'Default', 'Por defecto'), `<div class="iv-state">${thumb(shots[2], { group: 'estado' })}</div>`],
          [L('Com o mouse', 'Hover', 'Con el ratón'), `<div class="iv-state">${thumb(shots[2], { group: 'estado', attrs: ' data-state="hover"' })}</div>`],
          [L('Com foco', 'Focus', 'Con foco'), `<div class="iv-state">${thumb(shots[2], { group: 'estado', attrs: ' data-state="focus"' })}</div>`],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`A miniatura é um link para a imagem grande: sem JavaScript, ela ainda abre. ${ic('mountImageViewer')} liga todos os links de uma área.`, `The thumbnail is a link to the large image: without JavaScript, it still opens. ${ic('mountImageViewer')} wires every link in an area.`, `La miniatura es un enlace a la imagen grande: sin JavaScript, igual se abre. ${ic('mountImageViewer')} conecta todos los enlaces de un área.`),
        html: codeBlock(`<a class="ds-viewer-thumb" href="inicio.jpg" data-ds-viewer="capturas" data-caption="${shots[0].caption}">
  <img src="inicio-mini.jpg" alt="${shots[0].alt}">
</a>
<a class="ds-viewer-thumb" href="cores.jpg" data-ds-viewer="capturas" data-caption="${shots[1].caption}">
  <img src="cores-mini.jpg" alt="${shots[1].alt}">
</a>

<script type="module">
  import { mountImageViewer, openImageViewer } from 'https://lumeui.dev/v/1.6/lume.js';

  // ${L('clicar numa miniatura abre a galeria do mesmo data-ds-viewer', 'clicking a thumbnail opens the gallery with the same data-ds-viewer', 'hacer clic en una miniatura abre la galería del mismo data-ds-viewer')}
  mountImageViewer(document);

  // ${L('ou abra por código, começando na segunda', 'or open from code, starting on the second one', 'o abre por código, empezando por la segunda')}
  openImageViewer([
    { src: 'inicio.jpg', alt: '…', caption: '${shots[0].caption}' },
    { src: 'cores.jpg', alt: '…', caption: '${shots[1].caption}' },
  ], { index: 1 });
</script>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Um diálogo modal: o foco entra, fica dentro e volta para a miniatura ao fechar.', 'A modal dialog: focus moves in, stays inside, and returns to the thumbnail on close.', 'Un diálogo modal: el foco entra, se queda dentro y vuelve a la miniatura al cerrar.'),
        html: a11yList([
          [L('Texto alternativo', 'Alt text', 'Texto alternativo'), L('O alt da miniatura vai para a imagem grande. Descreva o que a imagem mostra; a legenda é outra coisa e pode ficar vazia.', 'The thumbnail’s alt goes to the large image. Describe what the image shows; the caption is something else and can be empty.', 'El alt de la miniatura pasa a la imagen grande. Describe lo que muestra la imagen; la leyenda es otra cosa y puede quedar vacía.')],
          [L('Trocar de imagem', 'Switching images', 'Cambiar de imagen'), L('As setas trocam; com zoom, andam pela imagem. A contagem “2 de 4” é anunciada a cada troca.', 'Arrow keys switch images; when zoomed, they move around the image. The “2 of 4” count is announced on each switch.', 'Las flechas cambian; con zoom, se mueven por la imagen. El conteo “2 de 4” se anuncia en cada cambio.'), ['←', '→', 'Home', 'End']],
          [L('Zoom', 'Zoom', 'Zoom'), L(`Botões com nome, ${ic('+')} e ${ic('−')} no teclado e ${ic('0')} para voltar a caber na tela. A roda e a pinça aproximam no ponto do cursor ou dos dedos.`, `Named buttons, ${ic('+')} and ${ic('−')} on the keyboard, and ${ic('0')} to fit the screen again. The wheel and pinch zoom in where the cursor or fingers are.`, `Botones con nombre, ${ic('+')} y ${ic('−')} en el teclado y ${ic('0')} para volver a caber en la pantalla. La rueda y el pellizco acercan en el punto del cursor o de los dedos.`), ['+', '−', '0']],
          [L('Fechar', 'Close', 'Cerrar'), L('Esc, o botão “Fechar” ou um clique fora da imagem. O foco volta para quem abriu.', 'Esc, the “Close” button, or a click outside the image. Focus returns to whatever opened it.', 'Esc, el botón “Cerrar” o un clic fuera de la imagen. El foco vuelve a quien lo abrió.'), ['Esc']],
          [L('Carregando e erro', 'Loading and error', 'Cargando y error'), L(`Enquanto a imagem chega aparece o spinner; se falhar, a mensagem “${msg('viewer.error')}” fica numa região de status.`, `While the image loads, the spinner shows; if it fails, the message “${msg('viewer.error')}” sits in a status region.`, `Mientras la imagen llega aparece el spinner; si falla, el mensaje “${msg('viewer.error')}” queda en una región de estado.`)],
          [L('Movimento reduzido', 'Reduced motion', 'Movimiento reducido'), L('Sem animação de zoom nem de entrada.', 'No zoom or entrance animation.', 'Sin animación de zoom ni de entrada.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('O fundo é o do app, opaco: nada de véu translúcido.', 'The background is the app’s, opaque: no translucent veil.', 'El fondo es el de la app, opaco: nada de velo translúcido.'),
        html: tokenTable([
          ['color.bg.app', L('Fundo do visualizador', 'Viewer background', 'Fondo del visor')],
          ['color.bg.raised', L('Barra de ferramentas e setas', 'Toolbar and arrows', 'Barra de herramientas y flechas')],
          ['color.bg.muted', L('Fundo da miniatura', 'Thumbnail background', 'Fondo de la miniatura')],
          ['color.border.subtle', L('Contorno da miniatura', 'Thumbnail border', 'Contorno de la miniatura')],
          ['color.fg.muted', L('Contagem e porcentagem do zoom', 'Count and zoom percentage', 'Conteo y porcentaje del zoom')],
          ['radius.lg', L('Cantos da miniatura e da imagem', 'Thumbnail and image corners', 'Esquinas de la miniatura y de la imagen')],
          ['radius.full', L('Ferramentas e setas', 'Tools and arrows', 'Herramientas y flechas')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Visualizador, carrossel ou modal?', 'Viewer, carousel, or modal?', '¿Visor, carrusel o modal?'),
        html: usageCards([
          ['do', L('Faça: imagem que pede detalhe', 'Do: images that need detail', 'Haz: imágenes que piden detalle'), L('Capturas de tela, fotos de produto, comprovantes: o que a pessoa quer ver de perto.', 'Screenshots, product photos, receipts: things people want to see up close.', 'Capturas de pantalla, fotos de producto, comprobantes: lo que la persona quiere ver de cerca.')],
          ['dont', L('Evite: imagem de enfeite', 'Avoid: decorative images', 'Evita: imágenes decorativas'), L('Se não há o que ver de perto, a imagem não precisa abrir. Destaques que passam sozinhos são Carrossel.', 'If there’s nothing to see up close, the image doesn’t need to open. Highlights that go by on their own are a Carousel.', 'Si no hay nada que ver de cerca, la imagen no necesita abrirse. Destacados que pasan solos son Carrusel.')],
          ['tip', L('Miniatura leve, imagem grande', 'Light thumbnail, large image', 'Miniatura liviana, imagen grande'), L('A miniatura carrega com a página; a grande, só quando abre. Aqui, 30 KB e 200 KB.', 'The thumbnail loads with the page; the large one only when opened. Here, 30 KB and 200 KB.', 'La miniatura carga con la página; la grande, solo al abrirse. Aquí, 30 KB y 200 KB.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'viewer',
    controls: [
      { id: 'count', label: L('Imagens', 'Images', 'Imágenes'), value: '4', options: [{ value: '4', label: L('Galeria (4)', 'Gallery (4)', 'Galería (4)') }, { value: '1', label: L('Uma', 'One', 'Una') }] },
      { id: 'caption', label: L('Legenda', 'Caption', 'Leyenda'), value: 'yes', options: [{ value: 'yes', label: L('Sim', 'Yes', 'Sí') }, { value: 'no', label: L('Não', 'No', 'No') }] },
    ],
    render: (s) => (s.count === '1' ? `<div class="iv-single">${thumb(SHOTS()[0], { group: 'play', caption: s.caption === 'yes' })}</div>` : `<div class="iv-play">${gallery('play', { caption: s.caption === 'yes' })}</div>`),
    code: (s) => {
      const list = s.count === '1' ? SHOTS().slice(0, 1) : SHOTS();
      return `${list
        .map(
          (shot) => `<a class="ds-viewer-thumb" href="${shot.id}.jpg" data-ds-viewer="capturas"${s.caption === 'yes' ? ` data-caption="${shot.caption}"` : ''}>
  <img src="${shot.id}-mini.jpg" alt="${shot.alt}">
</a>`,
        )
        .join('\n')}

<script type="module">
  import { mountImageViewer } from 'https://lumeui.dev/v/1.6/lume.js';
  mountImageViewer(document);
</script>`;
    },
  });

  const unmountViewer = mountImageViewer(root);
  const images = () => SHOTS().map((s) => ({ src: src(s.id), alt: s.alt, caption: s.caption }));
  const onClick = (event) => {
    if (event.target.closest('[data-open-code]')) openImageViewer(images(), { index: 0 });
    if (event.target.closest('[data-open-error]')) openImageViewer([{ src: 'assets/capturas/nao-existe.jpg', alt: '', caption: L('Uma imagem que não existe', 'An image that doesn’t exist', 'Una imagen que no existe') }, ...images().slice(0, 1)]);
  };
  root.addEventListener('click', onClick);
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountViewer();
    root.removeEventListener('click', onClick);
    unmountCopy();
    unmountNav();
  };
}
