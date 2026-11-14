import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const LINES = () => [
  L('Role esta área para ver a barra.', 'Scroll this area to see the bar.', 'Desplaza esta área para ver la barra.'),
  L('Ela aparece enquanto você rola.', 'It appears while you scroll.', 'Aparece mientras te desplazas.'),
  L('Some cerca de um segundo depois de parar.', 'It fades about a second after you stop.', 'Desaparece cerca de un segundo después de parar.'),
  L('Enquanto está visível, dá para arrastá-la.', 'While it’s visible, you can drag it.', 'Mientras está visible, se puede arrastrar.'),
  L('Com o ponteiro em cima, ela fica mais grossa e não some.', 'With the pointer on it, it gets thicker and stays.', 'Con el puntero encima, se hace más gruesa y no desaparece.'),
  L('Se a página rolar, ela acompanha a área.', 'If the page scrolls, it follows the area.', 'Si la página se desplaza, sigue al área.'),
  L('Não há trilho nem setas.', 'There’s no track and no arrows.', 'No hay riel ni flechas.'),
  L('Ela não ocupa espaço no layout.', 'It takes up no layout space.', 'No ocupa espacio en el diseño.'),
  L('Vale para qualquer área que rola.', 'It works on any scrolling area.', 'Funciona en cualquier área con desplazamiento.'),
];

const name = () => L('Área de exemplo com rolagem', 'Sample scrolling area', 'Área de ejemplo con desplazamiento');
/* conteúdo com folga: com pouca rolagem, a roda logo passa para a página e parece que a área travou */
const vertical = () => [...LINES(), ...Array.from({ length: 12 }, (_, i) => `${L('Linha', 'Line', 'Línea')} ${i + 9}`)].map((t) => `<p>${t}</p>`).join('');
const horizontal = () => `<div class="fc-scroll__wide">${Array.from({ length: 14 }, (_, i) => `<span class="fc-scroll__cell">${i + 1}</span>`).join('')}</div>`;

/** kind: y · x · both · inset · none */
function area(kind) {
  const inset = kind === 'inset';
  const content = kind === 'x'
    ? horizontal()
    : kind === 'both'
      ? `${horizontal()}${vertical()}${horizontal()}`
      : `${inset ? `<p class="fc-scroll__head">${L('Cabeçalho fixo', 'Fixed header', 'Encabezado fijo')}</p>` : ''}${vertical()}`;
  const style = inset ? ' style="--ds-scrollbar-start:44px"' : kind === 'none' ? ' style="--ds-scrollbar:none"' : '';
  return `<div class="fc-scroll${kind === 'x' ? ' fc-scroll--x' : ''}${inset ? ' fc-scroll--inset' : ''}" tabindex="0" role="region" aria-label="${name()}"${style}>${content}</div>`;
}

const state = (attrs) => `<div class="fc-scroll-state"><div class="ds-scrollbar ds-scrollbar--y" ${attrs}></div></div>`;

export default function renderScrollbar(page) {
  return controlPage(page, {
    lead: L('Uma barra só, sem trilho nem setas, igual em qualquer sistema. Aparece enquanto a pessoa rola e não ocupa espaço no layout.', 'A single bar, with no track or arrows, the same on every system. It appears while people scroll and takes up no layout space.', 'Una sola barra, sin riel ni flechas, igual en cualquier sistema. Aparece mientras la persona se desplaza y no ocupa espacio en el diseño.'),
    stats: [
      [L('função', 'function', 'función'), 1],
      [L('espessura', 'thickness', 'grosor'), '6 px'],
      [L('área de pegar', 'grab area', 'área de agarre'), '12 px'],
      [L('some em', 'fades in', 'desaparece en'), L('0,9 s', '0.9 s', '0,9 s')],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Role a área com a roda, o toque ou o teclado, e tente arrastar a barra. Na horizontal, use Shift + roda.', 'Scroll the area with the wheel, touch, or keyboard, and try dragging the bar. For horizontal, use Shift + wheel.', 'Desplaza el área con la rueda, el toque o el teclado, e intenta arrastrar la barra. En horizontal, usa Shift + rueda.'), html: playgroundMarkup('scrollbar', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Todas funcionam aqui: é só rolar.', 'They all work here: just scroll.', 'Todas funcionan aquí: solo desplázate.'),
        html: examples([
          example(L('Vertical', 'Vertical', 'Vertical'), L('padrão', 'default', 'predeterminada'), L('Na borda direita da área.', 'On the right edge of the area.', 'En el borde derecho del área.'), area('y')),
          example(L('Horizontal', 'Horizontal', 'Horizontal'), L('padrão', 'default', 'predeterminada'), L('Na borda de baixo. Para rolar: Shift + roda, trackpad ou ← →.', 'On the bottom edge. To scroll: Shift + wheel, trackpad, or ← →.', 'En el borde inferior. Para desplazar: Shift + rueda, trackpad o ← →.'), area('x')),
          example(L('Com recuo', 'With an inset', 'Con margen'), '--ds-scrollbar-start', L('Começa abaixo de um cabeçalho fixo.', 'Starts below a fixed header.', 'Empieza debajo de un encabezado fijo.'), area('inset')),
          example(L('Sem barra', 'No bar', 'Sin barra'), '--ds-scrollbar: none', L('Para listas curtas na horizontal, como abas.', 'For short horizontal lists, like tabs.', 'Para listas cortas en horizontal, como pestañas.'), area('none')),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L(`Hover pode ser forçado com ${ic('data-state')}; arrastando, com ${ic('data-active')}.`, `Hover can be forced with ${ic('data-state')}; dragging, with ${ic('data-active')}.`, `Hover se puede forzar con ${ic('data-state')}; arrastrando, con ${ic('data-active')}.`),
        html: stateGrid([
          [L('Visível', 'Visible', 'Visible'), state('data-visible')],
          ['Hover', state('data-visible data-state="hover"')],
          [L('Arrastando', 'Dragging', 'Arrastrando'), state('data-visible data-active')],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L('Basta ligar uma vez. Áreas que entram depois também recebem a barra.', 'Just turn it on once. Areas added later get the bar too.', 'Basta activarla una vez. Las áreas que entran después también reciben la barra.'),
        html: codeBlock(`import { initScrollbars } from 'https://lumeui.dev/v/0.38/lume.js';

initScrollbars();

/* ${L('Ajustes por área, no CSS da própria área que rola', 'Per-area settings, in the CSS of the scrolling area itself', 'Ajustes por área, en el CSS de la propia área con desplazamiento')} */
.painel {
  --ds-scrollbar-start: 64px; /* ${L('recuo em cima', 'top inset', 'margen superior')} */
  --ds-scrollbar-end: 16px;   /* ${L('recuo embaixo', 'bottom inset', 'margen inferior')} */
}

.abas {
  --ds-scrollbar: none;       /* ${L('sem barra', 'no bar', 'sin barra')} */
}`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('A rolagem continua sendo a do navegador; a barra só mostra onde a pessoa está.', 'Scrolling is still the browser’s; the bar only shows where you are.', 'El desplazamiento sigue siendo el del navegador; la barra solo muestra dónde está la persona.'),
        html: a11yList([
          [L('Teclado', 'Keyboard', 'Teclado'), L(`A rolagem nativa continua. Área sem nada focável precisa de ${ic('tabindex="0"')}, ${ic('role')} e um nome.`, `Native scrolling stays. An area with nothing focusable needs ${ic('tabindex="0"')}, ${ic('role')}, and a name.`, `El desplazamiento nativo sigue. Un área sin nada enfocable necesita ${ic('tabindex="0"')}, ${ic('role')} y un nombre.`), ['↑', '↓', 'PgUp', 'PgDn']],
          [L('Leitor de tela', 'Screen readers', 'Lector de pantalla'), L(`A barra é só visual, com ${ic('aria-hidden')}. O conteúdo é lido normalmente.`, `The bar is visual only, with ${ic('aria-hidden')}. The content is read normally.`, `La barra es solo visual, con ${ic('aria-hidden')}. El contenido se lee normalmente.`)],
          [L('Sem aviso falso', 'No false cue', 'Sin aviso falso'), L('Ela não pisca quando o código rola sozinho, ao abrir uma página. Só aparece com a ação da pessoa.', 'It doesn’t flash when code scrolls on its own, as a page opens. It appears only with a person’s action.', 'No parpadea cuando el código se desplaza solo, al abrir una página. Solo aparece con la acción de la persona.')],
          [L('Mostre que há mais', 'Show there’s more', 'Muestra que hay más'), L('Com a barra escondida, deixe o conteúdo cortado na borda, para indicar que dá para rolar.', 'With the bar hidden, let content cut off at the edge, to signal it can scroll.', 'Con la barra oculta, deja el contenido cortado en el borde, para indicar que se puede desplazar.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que a barra consome.', 'Everything the bar consumes.', 'Todo lo que consume la barra.'),
        html: tokenTable([
          ['color.border.field', L('Barra', 'Bar', 'Barra')],
          ['color.fg.subtle', L('Hover e arrastando', 'Hover and dragging', 'Hover y arrastrando')],
          ['radius.full', L('Pontas', 'Ends', 'Extremos')],
          ['z.popover', L('Camada', 'Layer', 'Capa')],
          ['duration.fast', L('Aparecer e engrossar', 'Appearing and thickening', 'Aparecer y engrosar')],
          ['duration.slow', L('Sumir', 'Fading', 'Desaparecer')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarla y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: ligue no app inteiro', 'Do: turn it on for the whole app', 'Haz: actívala en toda la app'), L('Uma chamada só, ao iniciar. Assim toda área rola do mesmo jeito.', 'A single call at startup. That way every area scrolls the same.', 'Una sola llamada, al iniciar. Así toda área se desplaza igual.')],
          ['dont', L('Evite: esconder onde ela ajuda', 'Avoid: hiding it where it helps', 'Evita: ocultarla donde ayuda'), L(`Use ${ic('--ds-scrollbar: none')} só em listas curtas, nunca em conteúdo longo.`, `Use ${ic('--ds-scrollbar: none')} only on short lists, never on long content.`, `Usa ${ic('--ds-scrollbar: none')} solo en listas cortas, nunca en contenido largo.`)],
          ['tip', L('Cabeçalho fixo?', 'A fixed header?', '¿Encabezado fijo?'), L(`Dê a altura dele em ${ic('--ds-scrollbar-start')}, para a barra não passar por baixo.`, `Set its height in ${ic('--ds-scrollbar-start')}, so the bar doesn’t run under it.`, `Indica su altura en ${ic('--ds-scrollbar-start')}, para que la barra no pase por debajo.`)],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'scrollbar',
    controls: [{ id: 'kind', label: L('Tipo', 'Type', 'Tipo'), value: 'y', options: [{ value: 'y', label: L('Vertical', 'Vertical', 'Vertical') }, { value: 'x', label: L('Horizontal', 'Horizontal', 'Horizontal') }, { value: 'both', label: L('As duas', 'Both', 'Ambas') }, { value: 'inset', label: L('Com recuo', 'With an inset', 'Con margen') }, { value: 'none', label: L('Sem barra', 'No bar', 'Sin barra') }] }],
    render: (s) => area(s.kind),
    code: (s) => {
      const style = s.kind === 'inset' ? '--ds-scrollbar-start: 44px;' : s.kind === 'none' ? '--ds-scrollbar: none;' : '';
      return `<div class="painel" tabindex="0" role="region" aria-label="…"${style ? ` style="${style}"` : ''}>
  …
</div>

<script type="module">
  import { initScrollbars } from 'https://lumeui.dev/v/0.38/lume.js';
  initScrollbars();
</script>`;
    },
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
