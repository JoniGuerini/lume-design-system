import { icon } from '../../ds/icons/icons.js';
import { createPopover } from '../../ds/js/popover.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const hint = () => L('Conteúdo livre, que fica aberto até a pessoa sair.', 'Free content that stays open until the person leaves.', 'Contenido libre, que queda abierto hasta que la persona salga.');
const share = () => `<div class="ds-form-field"><label class="ds-form-field__label" for="pv-link">${L('Link', 'Link', 'Enlace')}</label><div class="ds-field"><input class="ds-field__input" id="pv-link" type="text" value="lumeui.dev/p/1042"></div></div><button type="button" class="ds-btn ds-btn--primary ds-btn--sm" data-popover-close>${L('Copiar link', 'Copy link', 'Copiar enlace')}</button>`;

export default function renderPopover(page) {
  return controlPage(page, {
    lead: L('Conteúdo que abre ao clicar, preso ao gatilho, sem bloquear a tela. Fica entre o Tooltip, que só dá uma dica, e o Modal, que interrompe.', 'Content that opens on click, attached to its trigger, without blocking the screen. It sits between the Tooltip, which only gives a hint, and the Modal, which interrupts.', 'Contenido que se abre al hacer clic, unido a su disparador, sin bloquear la pantalla. Está entre el Tooltip, que solo da una pista, y el Modal, que interrumpe.'),
    stats: [
      [L('lados', 'sides', 'lados'), 4],
      [L('alinhamentos', 'alignments', 'alineaciones'), 3],
      [L('largura máxima', 'max width', 'ancho máximo'), '340 px'],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'dialog'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Se não couber no lado escolhido, ele abre no oposto.', 'If it doesn’t fit on the chosen side, it opens on the opposite one.', 'Si no cabe en el lado elegido, se abre en el opuesto.'), html: playgroundMarkup('popover') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Pode ser só um texto, ter título e botão de fechar, ou levar controles.', 'It can be just text, have a title and close button, or hold controls.', 'Puede ser solo un texto, tener título y botón de cerrar, o llevar controles.'),
        html: examples([
          example(L('Só texto', 'Text only', 'Solo texto'), 'content', L('Uma explicação maior do que caberia num tooltip.', 'An explanation longer than a tooltip could hold.', 'Una explicación mayor de lo que cabría en un tooltip.'), `<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-demo="text" aria-label="${L('O que é isso?', 'What’s this?', '¿Qué es esto?')}">${icon('help-circle', { size: 20 })}</button>`),
          example(L('Com título', 'With a title', 'Con título'), 'title', L('O título dá nome ao painel e traz o botão de fechar.', 'The title names the panel and brings the close button.', 'El título da nombre al panel y trae el botón de cerrar.'), `<button type="button" class="ds-btn ds-btn--secondary" data-demo="title">${L('Detalhes', 'Details', 'Detalles')}</button>`),
          example(L('Com controles', 'With controls', 'Con controles'), 'Element', L('Ao abrir, o foco vai para o primeiro controle.', 'On open, focus goes to the first control.', 'Al abrir, el foco va al primer control.'), `<button type="button" class="ds-btn ds-btn--secondary" data-demo="form">${icon('link', { size: 18 })}${L('Compartilhar', 'Share', 'Compartir')}</button>`),
        ], 3),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`Com ${ic('data-popover-close')}, um botão de dentro também fecha o painel.`, `With ${ic('data-popover-close')}, a button inside also closes the panel.`, `Con ${ic('data-popover-close')}, un botón de adentro también cierra el panel.`),
        html: codeBlock(`import { createPopover } from 'https://lumeui.dev/v/1.0/lume.js';

const popover = createPopover(document.querySelector('#detalhes'), {
  title: '${L('Detalhes', 'Details', 'Detalles')}',
  content: '<p>${hint()}</p>',
  placement: 'bottom',
  align: 'start',
});`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Um diálogo que não prende o foco: a pessoa pode sair com Tab.', 'A dialog that doesn’t trap focus: people can leave with Tab.', 'Un diálogo que no atrapa el foco: la persona puede salir con Tab.'),
        html: a11yList([
          [L('Abrir', 'Open', 'Abrir'), L('O gatilho é um botão comum, com aria-expanded. O foco entra no painel.', 'The trigger is an ordinary button, with aria-expanded. Focus enters the panel.', 'El disparador es un botón común, con aria-expanded. El foco entra en el panel.'), ['Enter', L('Espaço', 'Space', 'Espacio')]],
          [L('Fechar', 'Close', 'Cerrar'), L('Esc fecha e devolve o foco ao gatilho. Clicar fora ou sair com Tab também fecham.', 'Esc closes and returns focus to the trigger. Clicking outside or tabbing away also closes it.', 'Esc cierra y devuelve el foco al disparador. Hacer clic fuera o salir con Tab también lo cierran.'), ['Esc', 'Tab']],
          [L('Com nome', 'With a name', 'Con nombre'), L(`Sem título, passe ${ic('label')} para o leitor de tela saber o que abriu.`, `With no title, pass ${ic('label')} so screen readers know what opened.`, `Sin título, pasa ${ic('label')} para que el lector de pantalla sepa qué se abrió.`)],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Mesma superfície do Menu.', 'The same surface as the Menu.', 'La misma superficie del Menú.'),
        html: tokenTable([
          ['color.bg.raised', L('Fundo', 'Background', 'Fondo')],
          ['color.border.strong', L('Contorno', 'Outline', 'Contorno')],
          ['shadow.xl', L('Sombra', 'Shadow', 'Sombra')],
          ['radius.lg', L('Cantos', 'Corners', 'Esquinas')],
          ['color.fg.muted', L('Texto', 'Text', 'Texto')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Qual camada escolher.', 'Which layer to choose.', 'Qué capa elegir.'),
        html: usageCards([
          ['do', L('Faça: conteúdo curto sob demanda', 'Do: short content on demand', 'Haz: contenido corto a pedido'), L('Um detalhe, um link para copiar ou um filtro rápido.', 'A detail, a link to copy, or a quick filter.', 'Un detalle, un enlace para copiar o un filtro rápido.')],
          ['dont', L('Evite: tarefas longas', 'Avoid: long tasks', 'Evita: tareas largas'), L('Para um formulário inteiro, use a Gaveta lateral ou o Modal.', 'For a whole form, use the Drawer or Modal.', 'Para un formulario entero, usa el Panel lateral o el Modal.')],
          ['tip', L('Dica só de passar o mouse?', 'A hover-only hint?', '¿Una pista solo al pasar el cursor?'), L('Se não precisa de clique e cabe numa frase, é Tooltip.', 'If it needs no click and fits in a sentence, it’s a Tooltip.', 'Si no necesita clic y cabe en una frase, es un Tooltip.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'popover',
    controls: [
      { id: 'placement', label: L('Lado', 'Side', 'Lado'), value: 'bottom', options: [{ value: 'bottom', label: L('Embaixo', 'Bottom', 'Abajo') }, { value: 'top', label: L('Em cima', 'Top', 'Arriba') }, { value: 'right', label: L('À direita', 'Right', 'Derecha') }, { value: 'left', label: L('À esquerda', 'Left', 'Izquierda') }] },
      { id: 'align', label: L('Alinhamento', 'Alignment', 'Alineación'), value: 'start', options: [{ value: 'start', label: L('Início', 'Start', 'Inicio') }, { value: 'center', label: L('Centro', 'Center', 'Centro') }, { value: 'end', label: L('Fim', 'End', 'Fin') }] },
      { id: 'title', label: L('Título', 'Title', 'Título'), value: 'on', options: [{ value: 'on', label: L('Com título', 'With a title', 'Con título') }, { value: 'off', label: L('Sem título', 'No title', 'Sin título') }] },
    ],
    render: () => `<button type="button" class="ds-btn ds-btn--secondary" data-play>${L('Abrir popover', 'Open popover', 'Abrir popover')}</button>`,
    mount: (preview, s) => {
      const p = createPopover(preview.querySelector('[data-play]'), { placement: s.placement, align: s.align, title: s.title === 'on' ? L('Detalhes', 'Details', 'Detalles') : undefined, label: L('Detalhes', 'Details', 'Detalles'), content: `<p>${hint()}</p>` });
      return () => p.destroy();
    },
    code: (s) => `<button type="button" class="ds-btn ds-btn--secondary" id="detalhes">${L('Abrir popover', 'Open popover', 'Abrir popover')}</button>

<script type="module">
  import { createPopover } from 'https://lumeui.dev/v/1.0/lume.js';
  createPopover(document.querySelector('#detalhes'), {${s.title === 'on' ? `\n    title: '${L('Detalhes', 'Details', 'Detalles')}',` : `\n    label: '${L('Detalhes', 'Details', 'Detalles')}',`}
    content: '<p>${hint()}</p>',
    placement: '${s.placement}',
    align: '${s.align}',
  });
</script>`,
  });
  const demo = (n) => root.querySelector(`[data-demo="${n}"]`);
  const items = [
    createPopover(demo('text'), { label: L('O que é isso?', 'What’s this?', '¿Qué es esto?'), content: `<p>${L('O token de marca muda a cor da ação principal em todo o produto.', 'The brand token changes the primary action color across the product.', 'El token de marca cambia el color de la acción principal en todo el producto.')}</p>` }),
    createPopover(demo('title'), { title: L('Pedido 1042', 'Order 1042', 'Pedido 1042'), content: `<p>${L('Aprovado em 8 de novembro, por Ana. Entrega prevista para sexta-feira.', 'Approved on November 8, by Ana. Delivery expected on Friday.', 'Aprobado el 8 de noviembre, por Ana. Entrega prevista para el viernes.')}</p>`, align: 'center' }),
    createPopover(demo('form'), { label: L('Compartilhar', 'Share', 'Compartir'), content: share(), align: 'end' }),
  ];
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    items.forEach((p) => p.destroy());
    unmountCopy();
    unmountNav();
  };
}
