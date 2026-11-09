import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const line = (w) => `<span class="ds-skeleton ds-skeleton--text" style="--w:${w}"></span>`;
const person = () => `<div class="fc-skel-row"><span class="ds-skeleton ds-skeleton--circle"></span><div class="fc-skel-lines">${line('55%')}${line('80%')}</div></div>`;
const card = () => `<div class="fc-skel-card"><span class="ds-skeleton" style="--h:96px"></span>${line('70%')}${line('95%')}${line('40%')}</div>`;
const rows = () => `<div class="fc-skel-lines fc-skel-lines--gap">${['90%', '75%', '82%', '60%'].map(line).join('')}</div>`;
const SHAPES = { person, card, rows };
const busy = (html) => `<div class="fc-skel" aria-busy="true" role="status" aria-label="${L('Carregando', 'Loading', 'Cargando')}">${html}</div>`;

export default function renderSkeleton(page) {
  return controlPage(page, {
    lead: L('Mostra a forma do conteúdo antes de ele chegar. A tela não pula quando os dados carregam, e a espera parece menor.', 'Shows the shape of the content before it arrives. The screen doesn’t jump when data loads, and the wait feels shorter.', 'Muestra la forma del contenido antes de que llegue. La pantalla no salta cuando cargan los datos, y la espera parece menor.'),
    stats: [
      ['JavaScript', 0],
      [L('formas', 'shapes', 'formas'), 3],
      [L('pulso', 'pulse', 'pulso'), '1,4 s'],
      [L('brilho', 'shine', 'brillo'), L('nenhum', 'none', 'ninguno')],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Formas lisas que pulsam devagar, sem o brilho que atravessa a tela.', 'Flat shapes that pulse slowly, with no shine sweeping across the screen.', 'Formas lisas que pulsan despacio, sin el brillo que atraviesa la pantalla.'), html: playgroundMarkup('skeleton') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Monte a forma com três peças: linha, círculo e bloco.', 'Build the shape from three pieces: line, circle, and block.', 'Monta la forma con tres piezas: línea, círculo y bloque.'),
        html: examples([
          example(L('Pessoa', 'Person', 'Persona'), 'ds-skeleton--circle', L('Avatar e duas linhas.', 'An avatar and two lines.', 'Avatar y dos líneas.'), busy(person())),
          example(L('Cartão', 'Card', 'Tarjeta'), 'ds-skeleton', L('Um bloco e o texto embaixo.', 'A block with text below.', 'Un bloque y el texto debajo.'), busy(card())),
          example(L('Texto', 'Text', 'Texto'), 'ds-skeleton--text', L('Larguras diferentes, como um parágrafo de verdade.', 'Different widths, like a real paragraph.', 'Anchos diferentes, como un párrafo de verdad.'), busy(rows())),
        ], 3),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('As formas não dizem nada ao leitor de tela: quem avisa é o contêiner.', 'The shapes say nothing to screen readers: the container does the telling.', 'Las formas no dicen nada al lector de pantalla: quien avisa es el contenedor.'),
        html: a11yList([
          [L('Avise que carrega', 'Say it’s loading', 'Avisa que carga'), L(`No contêiner, ${ic('aria-busy="true"')} e um nome. Quando os dados chegarem, tire o atributo.`, `On the container, ${ic('aria-busy="true"')} and a name. When data arrives, remove the attribute.`, `En el contenedor, ${ic('aria-busy="true"')} y un nombre. Cuando lleguen los datos, quita el atributo.`)],
          [L('Sem foco', 'No focus', 'Sin foco'), L('Formas não são interativas e ficam fora do Tab.', 'Shapes aren’t interactive and stay out of Tab order.', 'Las formas no son interactivas y quedan fuera del Tab.')],
          [L('Movimento reduzido', 'Reduced motion', 'Movimiento reducido'), L('O pulso para, e a forma fica parada.', 'The pulse stops, and the shape holds still.', 'El pulso se detiene, y la forma queda quieta.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o skeleton consome.', 'Everything the skeleton consumes.', 'Todo lo que consume el skeleton.'),
        html: tokenTable([
          ['color.bg.muted', L('Formas', 'Shapes', 'Formas')],
          ['radius.md', L('Bloco', 'Block', 'Bloque')],
          ['radius.xs', L('Linha', 'Line', 'Línea')],
          ['radius.full', L('Círculo', 'Circle', 'Círculo')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: a forma real', 'Do: the real shape', 'Haz: la forma real'), L('Copie o tamanho do conteúdo final, para nada pular quando ele chegar.', 'Copy the final content’s size, so nothing jumps when it arrives.', 'Copia el tamaño del contenido final, para que nada salte cuando llegue.')],
          ['dont', L('Evite: esperas longas', 'Avoid: long waits', 'Evita: esperas largas'), L('Se passa de 10 segundos, diga o que acontece: use a Barra de progresso.', 'Past 10 seconds, say what’s happening: use the Progress bar.', 'Si pasa de 10 segundos, di lo que pasa: usa la Barra de progreso.')],
          ['tip', L('Não invente o que não vem', 'Don’t invent what won’t come', 'No inventes lo que no llega'), L('Se a lista pode vir vazia, passe logo ao Estado vazio ao terminar.', 'If the list may come back empty, go straight to the Empty state when it ends.', 'Si la lista puede venir vacía, pasa directo al Estado vacío al terminar.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'skeleton',
    controls: [{ id: 'shape', label: L('Forma', 'Shape', 'Forma'), value: 'person', options: [{ value: 'person', label: L('Pessoa', 'Person', 'Persona') }, { value: 'card', label: L('Cartão', 'Card', 'Tarjeta') }, { value: 'rows', label: L('Texto', 'Text', 'Texto') }] }],
    render: (s) => `<div class="fc-stage">${busy(SHAPES[s.shape]())}</div>`,
    code: (s) => `<div aria-busy="true" role="status" aria-label="${L('Carregando', 'Loading', 'Cargando')}">
  ${SHAPES[s.shape]().replace(/></g, '>\n  <')}
</div>`,
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
