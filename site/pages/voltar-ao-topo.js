import { createBackToTop } from '../../ds/js/back-to-top.js';
import { icon } from '../../ds/icons/icons.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const lines = () => Array.from({ length: 30 }, (_, i) => `<p>${L('Linha', 'Line', 'Línea')} ${i + 1}</p>`).join('');
const sample = (attrs) => `<button type="button" class="ds-back-to-top" data-visible ${attrs} aria-label="${L('Voltar ao topo', 'Back to top', 'Volver arriba')}">${icon('arrow-up', { size: 20 })}</button>`;

export default function renderBackToTop(page) {
  return controlPage(page, {
    lead: L('Em páginas longas, leva de volta ao começo com um clique. Fica escondido até a pessoa ter rolado bastante.', 'On long pages, it takes you back to the start in one click. It stays hidden until you’ve scrolled a good way.', 'En páginas largas, lleva de vuelta al inicio con un clic. Queda oculto hasta que la persona se haya desplazado bastante.'),
    stats: [
      [L('tamanho', 'size', 'tamaño'), '40 px'],
      [L('aparece depois de', 'appears after', 'aparece tras'), L('1 tela', '1 screen', '1 pantalla')],
      [L('âncora', 'anchor', 'ancla'), L('contêiner', 'container', 'contenedor')],
      [L('função', 'function', 'función'), 1],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Role a área até o botão aparecer no canto e clique nele. Este site usa o mesmo botão: role esta página para ver.', 'Scroll the area until the button appears in the corner, then click it. This site uses the same button: scroll this page to see it.', 'Desplaza el área hasta que el botón aparezca en la esquina y haz clic. Este sitio usa el mismo botón: desplaza esta página para verlo.'), html: playgroundMarkup('back-to-top') },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L(`Hover e foco podem ser forçados com ${ic('data-state')}. O botão só aparece com ${ic('data-visible')}.`, `Hover and focus can be forced with ${ic('data-state')}. The button appears only with ${ic('data-visible')}.`, `Hover y foco se pueden forzar con ${ic('data-state')}. El botón solo aparece con ${ic('data-visible')}.`),
        html: stateGrid([
          [L('Normal', 'Default', 'Normal'), sample('')],
          ['Hover', sample('data-state="hover"')],
          [L('Foco', 'Focus', 'Foco'), sample('data-state="focus"')],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`O botão entra em ${ic('parent')}, que precisa ter ${ic('position')}.`, `The button goes into ${ic('parent')}, which needs a ${ic('position')}.`, `El botón entra en ${ic('parent')}, que necesita ${ic('position')}.`),
        html: codeBlock(`import { createBackToTop } from 'https://lumeui.dev/v/0.34/lume.js';

const back = createBackToTop(document.querySelector('.painel__rolagem'), {
  parent: document.querySelector('.painel'),
  threshold: 600, // ${L('opcional; o padrão é uma tela da área', 'optional; the default is one screen of the area', 'opcional; el predeterminado es una pantalla del área')}
});

back.destroy();`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Pensado para quem não usa mouse, e para quem prefere menos movimento.', 'Designed for people who don’t use a mouse, and for those who prefer less motion.', 'Pensado para quien no usa mouse, y para quien prefiere menos movimiento.'),
        html: a11yList([
          [L('Foco no conteúdo', 'Focus on the content', 'Foco en el contenido'), L('Ao clicar, o foco vai para o começo do conteúdo. O próximo Tab continua de lá, e não do meio da página.', 'On click, focus moves to the start of the content. The next Tab continues from there, not from mid-page.', 'Al hacer clic, el foco va al inicio del contenido. El siguiente Tab sigue desde ahí, no desde el medio de la página.'), ['Tab', 'Enter']],
          [L('Escondido de verdade', 'Truly hidden', 'Oculto de verdad'), L('Enquanto não aparece, o botão fica fora do Tab e do leitor de tela.', 'While it isn’t showing, the button is out of Tab order and hidden from screen readers.', 'Mientras no aparece, el botón queda fuera del Tab y del lector de pantalla.')],
          [L('Menos movimento', 'Less motion', 'Menos movimiento'), L('Quem pediu menos movimento no sistema volta ao topo sem animação.', 'People who asked for less motion in their system go back to the top without animation.', 'Quien pidió menos movimiento en el sistema vuelve arriba sin animación.')],
          [L('Nome', 'Name', 'Nombre'), L('O ícone tem nome nos três idiomas, e o mesmo texto aparece no tooltip.', 'The icon has a name in all three languages, and the same text appears in the tooltip.', 'El ícono tiene nombre en los tres idiomas, y el mismo texto aparece en el tooltip.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o botão consome.', 'Everything the button consumes.', 'Todo lo que consume el botón.'),
        html: tokenTable([
          ['size.control.md', L('Tamanho', 'Size', 'Tamaño')],
          ['color.bg.raised', L('Fundo', 'Background', 'Fondo')],
          ['color.border.default', L('Contorno', 'Outline', 'Contorno')],
          ['color.border.strong', L('Contorno no hover', 'Outline on hover', 'Contorno en hover')],
          ['color.fg.muted', L('Ícone', 'Icon', 'Ícono')],
          ['radius.full', L('Cantos', 'Corners', 'Esquinas')],
          ['shadow.md', L('Separa do conteúdo', 'Sets it apart from the content', 'Lo separa del contenido')],
          ['duration.base', L('Aparecer e sumir', 'Appearing and fading', 'Aparecer y desaparecer')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: páginas bem longas', 'Do: very long pages', 'Haz: páginas muy largas'), L('Documentação, listas e históricos, em que voltar rolando dá trabalho.', 'Docs, lists, and histories, where scrolling back is a chore.', 'Documentación, listas e historiales, donde volver desplazándose da trabajo.')],
          ['dont', L('Evite: páginas curtas', 'Avoid: short pages', 'Evita: páginas cortas'), L('Se a página cabe em duas telas, o botão só ocupa espaço.', 'If the page fits in two screens, the button only takes up space.', 'Si la página cabe en dos pantallas, el botón solo ocupa espacio.')],
          ['tip', L('Um por área', 'One per area', 'Uno por área'), L(`Mais de uma área rolando na tela? Dê o botão só à principal.`, `More than one area scrolling on screen? Give the button only to the main one.`, `¿Más de un área con desplazamiento en la pantalla? Da el botón solo a la principal.`)],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'back-to-top',
    controls: [{ id: 'threshold', label: L('Aparece depois de', 'Appears after', 'Aparece tras'), value: 'screen', options: [{ value: 'screen', label: L('1 tela', '1 screen', '1 pantalla') }, { value: '100', label: '100 px' }, { value: '400', label: '400 px' }] }],
    render: () => `<div class="fc-back"><div class="fc-scroll" tabindex="0" role="region" aria-label="${L('Área de exemplo com rolagem', 'Sample scrolling area', 'Área de ejemplo con desplazamiento')}">${lines()}</div></div>`,
    mount: (preview, s) => {
      const box = preview.querySelector('.fc-back');
      const back = createBackToTop(box.querySelector('.fc-scroll'), { parent: box, threshold: s.threshold === 'screen' ? undefined : Number(s.threshold) });
      return () => back.destroy();
    },
    code: (s) => `import { createBackToTop } from 'https://lumeui.dev/v/0.34/lume.js';

createBackToTop(document.querySelector('.painel__rolagem')${s.threshold === 'screen' ? '' : `, { threshold: ${s.threshold} }`});`,
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
