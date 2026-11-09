import { icon } from '../../ds/icons/icons.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const ITEMS = () => [
  [L('O que está incluído no plano?', 'What’s included in the plan?', '¿Qué incluye el plan?'), L('Todos os componentes, os tokens e as atualizações.', 'All components, tokens, and updates.', 'Todos los componentes, los tokens y las actualizaciones.')],
  [L('Posso cancelar quando quiser?', 'Can I cancel anytime?', '¿Puedo cancelar cuando quiera?'), L('Sim, sem multa. O acesso segue até o fim do período.', 'Yes, with no fee. Access continues until the end of the period.', 'Sí, sin multa. El acceso sigue hasta el fin del período.')],
  [L('Como falo com o suporte?', 'How do I reach support?', '¿Cómo hablo con soporte?'), L('Pelo chat, em dias úteis, ou pelo e-mail da sua conta.', 'By chat, on business days, or from your account’s email.', 'Por chat, en días hábiles, o por el correo de tu cuenta.')],
];

const accordion = ({ name = '', card = false, openFirst = true, id = 'ac' }) => `<div class="ds-accordion${card ? ' ds-accordion--card' : ''}">
  ${ITEMS().map(([title, text], i) => `<details class="ds-accordion__item"${name ? ` name="${name}"` : ''}${openFirst && i === 0 ? ' open' : ''}>
    <summary class="ds-accordion__head"><span>${title}</span>${icon('chevron-down', { size: 18 })}</summary>
    <div class="ds-accordion__body">${text}</div>
  </details>`).join('')}
</div>`;

const codeFor = (s) => `<div class="ds-accordion${s.look === 'card' ? ' ds-accordion--card' : ''}">
  <details class="ds-accordion__item"${s.mode === 'one' ? ' name="faq"' : ''} open>
    <summary class="ds-accordion__head">
      <span>${ITEMS()[0][0]}</span>
      <ds-icon name="chevron-down" size="18"></ds-icon>
    </summary>
    <div class="ds-accordion__body">${ITEMS()[0][1]}</div>
  </details>
  <!-- ${L('mais itens', 'more items', 'más elementos')} -->
</div>`;

export default function renderAcordeao(page) {
  return controlPage(page, {
    lead: L('Seções que abrem e fecham no lugar. Boa para perguntas frequentes e detalhes que só parte das pessoas quer ler.', 'Sections that open and close in place. Good for FAQs and details only some people want to read.', 'Secciones que se abren y se cierran en su lugar. Bueno para preguntas frecuentes y detalles que solo parte de las personas quiere leer.'),
    stats: [
      ['JavaScript', 0],
      [L('aparências', 'looks', 'apariencias'), 2],
      [L('base', 'base', 'base'), 'details'],
      [L('altura mínima', 'minimum height', 'altura mínima'), '52 px'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Só HTML e CSS, sobre o ${ic('details')} nativo: sem JavaScript, a busca do navegador também encontra o texto fechado.`, `Just HTML and CSS, on top of native ${ic('details')}: no JavaScript, and the browser’s find also reaches closed text.`, `Solo HTML y CSS, sobre el ${ic('details')} nativo: sin JavaScript, y la búsqueda del navegador también encuentra el texto cerrado.`), html: playgroundMarkup('accordion', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L(`Com o mesmo ${ic('name')} nos itens, abrir um fecha os outros. Sem ele, vários ficam abertos.`, `With the same ${ic('name')} on items, opening one closes the others. Without it, several stay open.`, `Con el mismo ${ic('name')} en los elementos, abrir uno cierra los otros. Sin él, varios quedan abiertos.`),
        html: examples([
          example(L('Com linhas', 'With lines', 'Con líneas'), 'ds-accordion', L('Discreto, para o meio de uma página.', 'Discreet, for the middle of a page.', 'Discreto, para el medio de una página.'), accordion({ name: 'ac-lines' })),
          example(L('Em cartões', 'In cards', 'En tarjetas'), 'ds-accordion--card', L('Cada item é uma superfície. Bom sobre o fundo da página.', 'Each item is a surface. Good on the page background.', 'Cada elemento es una superficie. Bueno sobre el fondo de la página.'), accordion({ name: 'ac-card', card: true })),
        ]),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O navegador já cuida do papel, do estado e do teclado.', 'The browser already handles the role, state, and keyboard.', 'El navegador ya se ocupa del rol, del estado y del teclado.'),
        html: a11yList([
          [L('Teclado', 'Keyboard', 'Teclado'), L('Tab vai de um título a outro; Enter ou Espaço abrem e fecham.', 'Tab moves between headings; Enter or Space open and close.', 'Tab va de un título a otro; Enter o Espacio abren y cierran.'), ['Tab', 'Enter', L('Espaço', 'Space', 'Espacio')]],
          [L('Estado anunciado', 'Announced state', 'Estado anunciado'), L('O leitor de tela diz “recolhido” ou “expandido” sem atributo extra.', 'Screen readers say “collapsed” or “expanded” with no extra attribute.', 'El lector de pantalla dice “contraído” o “expandido” sin atributo extra.')],
          [L('Encontrável', 'Findable', 'Encontrable'), L('Em navegadores atuais, buscar na página abre o item que tem o texto.', 'In current browsers, find-in-page opens the item containing the text.', 'En navegadores actuales, buscar en la página abre el elemento que tiene el texto.'), ['Ctrl', 'F']],
          [L('Movimento reduzido', 'Reduced motion', 'Movimiento reducido'), L(`Com ${ic('prefers-reduced-motion')}, abre sem animar.`, `With ${ic('prefers-reduced-motion')}, it opens without animating.`, `Con ${ic('prefers-reduced-motion')}, se abre sin animar.`)],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o acordeão consome.', 'Everything the accordion consumes.', 'Todo lo que consume el acordeón.'),
        html: tokenTable([
          ['color.border.subtle', L('Linhas e contorno do cartão', 'Lines and card outline', 'Líneas y contorno de la tarjeta')],
          ['color.bg.surface', L('Fundo do cartão', 'Card background', 'Fondo de la tarjeta')],
          ['color.fg.default', L('Título', 'Heading', 'Título')],
          ['color.fg.muted', L('Conteúdo', 'Content', 'Contenido')],
          ['color.fg.subtle', L('Seta', 'Chevron', 'Flecha')],
          ['duration.base', L('Abrir e fechar', 'Open and close', 'Abrir y cerrar')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: conteúdo opcional', 'Do: optional content', 'Haz: contenido opcional'), L('Perguntas frequentes e detalhes que nem todo mundo precisa ler.', 'FAQs and details not everyone needs to read.', 'Preguntas frecuentes y detalles que no todos necesitan leer.')],
          ['dont', L('Evite: o essencial', 'Avoid: essentials', 'Evita: lo esencial'), L('O que todo mundo precisa ver não deve ficar escondido atrás de um clique.', 'What everyone needs to see shouldn’t hide behind a click.', 'Lo que todos necesitan ver no debe quedar oculto tras un clic.')],
          ['tip', L('Títulos que dizem tudo', 'Headings that say it all', 'Títulos que lo dicen todo'), L('A pessoa decide abrir pelo título: escreva a pergunta inteira.', 'People decide to open based on the heading: write the whole question.', 'La persona decide abrir por el título: escribe la pregunta entera.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'accordion',
    controls: [
      { id: 'mode', label: L('Abertos', 'Open', 'Abiertos'), value: 'one', options: [{ value: 'one', label: L('Um por vez', 'One at a time', 'Uno a la vez') }, { value: 'many', label: L('Vários', 'Several', 'Varios') }] },
      { id: 'look', label: L('Aparência', 'Look', 'Apariencia'), value: 'lines', options: [{ value: 'lines', label: L('Com linhas', 'With lines', 'Con líneas') }, { value: 'card', label: L('Em cartões', 'In cards', 'En tarjetas') }] },
    ],
    render: (s) => `<div class="fc-accordion">${accordion({ name: s.mode === 'one' ? 'ac-play' : '', card: s.look === 'card' })}</div>`,
    code: codeFor,
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
