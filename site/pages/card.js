import { icon } from '../../ds/icons/icons.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const title = () => L('Relatório mensal', 'Monthly report', 'Informe mensual');
const text = () => L('Receita, novos clientes e o que mudou desde o mês passado.', 'Revenue, new customers, and what changed since last month.', 'Ingresos, nuevos clientes y lo que cambió desde el mes pasado.');
const inner = () => `<p class="ds-card__title">${title()}</p><p class="ds-card__text">${text()}</p>`;

const LINK = (attrs) => `<a class="ds-card ds-card--link" href="#/componentes/card" ${attrs}>${inner()}</a>`;

export default function renderCard(page) {
  return controlPage(page, {
    lead: L('A superfície básica para agrupar conteúdo. Separa uma coisa da outra com fundo e contorno finos, sem sombra.', 'The basic surface for grouping content. It sets things apart with a background and thin outline, no shadow.', 'La superficie básica para agrupar contenido. Separa una cosa de otra con fondo y contorno finos, sin sombra.'),
    stats: [
      ['JavaScript', 0],
      [L('cantos', 'corners', 'esquinas'), '20 px'],
      [L('respiro', 'padding', 'margen'), '24 px'],
      [L('sombra', 'shadow', 'sombra'), L('nenhuma', 'none', 'ninguna')],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Só CSS. Para uma tarefa com rótulo, título e controles, use o ${ic('Painel')}.`, `Just CSS. For a task with a label, title, and controls, use the ${ic('Panel')}.`, `Solo CSS. Para una tarea con etiqueta, título y controles, usa el ${ic('Panel')}.`), html: playgroundMarkup('card') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Um card é só um contêiner; o clicável é um link inteiro.', 'A card is just a container; the clickable one is a whole link.', 'Una tarjeta es solo un contenedor; la clicable es un enlace entero.'),
        html: examples([
          example(L('Simples', 'Simple', 'Simple'), 'ds-card', L('Agrupa conteúdo relacionado.', 'Groups related content.', 'Agrupa contenido relacionado.'), `<div class="ds-card">${inner()}</div>`),
          example(L('Clicável', 'Clickable', 'Clicable'), 'ds-card--link', L('O contorno reforça no hover. O destino é um só.', 'The outline strengthens on hover. There’s just one destination.', 'El contorno se refuerza en hover. El destino es uno solo.'), `<a class="ds-card ds-card--link" href="#/componentes/card" data-inert>${inner()}</a>`),
          example(L('Com ação', 'With an action', 'Con acción'), L('dentro do card', 'inside the card', 'dentro de la tarjeta'), L('Botões dentro de um card comum, sem o card inteiro ser link.', 'Buttons inside an ordinary card, without the whole card being a link.', 'Botones dentro de una tarjeta común, sin que toda sea enlace.'), `<div class="ds-card">${inner()}<div style="margin-top:var(--ds-space-200)"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">${icon('download', { size: 16 })}${L('Baixar', 'Download', 'Descargar')}</button></div></div>`),
        ], 3),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L(`Só o clicável muda. Hover e foco podem ser forçados com ${ic('data-state')}.`, `Only the clickable one changes. Hover and focus can be forced with ${ic('data-state')}.`, `Solo cambia la clicable. Hover y foco se pueden forzar con ${ic('data-state')}.`),
        html: stateGrid([
          [L('Normal', 'Default', 'Normal'), LINK('')],
          ['Hover', LINK('data-state="hover"')],
          [L('Foco', 'Focus', 'Foco'), LINK('data-state="focus"')],
        ]),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O card em si não é nada para o leitor de tela; o conteúdo é que importa.', 'The card itself means nothing to screen readers; the content is what matters.', 'La tarjeta en sí no es nada para el lector de pantalla; lo que importa es el contenido.'),
        html: a11yList([
          [L('Títulos em ordem', 'Headings in order', 'Títulos en orden'), L('Se o card começa uma seção, use um título real, no nível certo da página.', 'If the card starts a section, use a real heading, at the page’s right level.', 'Si la tarjeta inicia una sección, usa un título real, en el nivel correcto de la página.')],
          [L('Link único', 'A single link', 'Enlace único'), L(`No clicável, o ${ic('a')} é o card inteiro. Não coloque botões ou outros links dentro dele.`, `On the clickable one, the ${ic('a')} is the whole card. Don’t put buttons or other links inside it.`, `En la clicable, el ${ic('a')} es toda la tarjeta. No pongas botones ni otros enlaces dentro.`)],
          [L('Foco', 'Focus', 'Foco'), L('O anel aparece em volta do card inteiro, pelo teclado.', 'The ring appears around the whole card, by keyboard.', 'El anillo aparece alrededor de toda la tarjeta, con el teclado.'), ['Tab', 'Enter']],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o card consome.', 'Everything the card consumes.', 'Todo lo que consume la tarjeta.'),
        html: tokenTable([
          ['color.bg.surface', L('Fundo', 'Background', 'Fondo')],
          ['color.border.subtle', L('Contorno', 'Outline', 'Contorno')],
          ['color.border.strong', L('Contorno no hover', 'Outline on hover', 'Contorno en hover')],
          ['radius.xl', L('Cantos', 'Corners', 'Esquinas')],
          ['text.heading-sm', L('Título', 'Title', 'Título')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarla y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: grupos que se repetem', 'Do: repeating groups', 'Haz: grupos que se repiten'), L('Uma grade de projetos, resultados ou opções.', 'A grid of projects, results, or options.', 'Una cuadrícula de proyectos, resultados u opciones.')],
          ['dont', L('Evite: card dentro de card', 'Avoid: a card inside a card', 'Evita: tarjeta dentro de tarjeta'), L('Camadas demais pesam. Dentro de um card, separe com espaço ou com uma linha.', 'Too many layers feel heavy. Inside a card, separate with space or a line.', 'Demasiadas capas pesan. Dentro de una tarjeta, separa con espacio o con una línea.')],
          ['tip', L('Card, Painel ou Modal?', 'Card, Panel, or Modal?', '¿Tarjeta, Panel o Modal?'), L('Card agrupa; Painel é a superfície de uma tarefa; Modal interrompe.', 'A Card groups; a Panel is the surface of a task; a Modal interrupts.', 'La Tarjeta agrupa; el Panel es la superficie de una tarea; el Modal interrumpe.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'card',
    controls: [{ id: 'kind', label: L('Tipo', 'Type', 'Tipo'), value: 'plain', options: [{ value: 'plain', label: L('Simples', 'Simple', 'Simple') }, { value: 'link', label: L('Clicável', 'Clickable', 'Clicable') }] }],
    render: (s) => stageWrap(s.kind === 'link' ? `<a class="ds-card ds-card--link" href="#/componentes/card" data-inert>${inner()}</a>` : `<div class="ds-card">${inner()}</div>`),
    code: (s) => (s.kind === 'link'
      ? `<a class="ds-card ds-card--link" href="/relatorio">\n  <p class="ds-card__title">${title()}</p>\n  <p class="ds-card__text">${text()}</p>\n</a>`
      : `<div class="ds-card">\n  <p class="ds-card__title">${title()}</p>\n  <p class="ds-card__text">${text()}</p>\n</div>`),
  });
  const onClick = (event) => {
    if (event.target.closest('[data-inert]')) event.preventDefault();
  };
  root.addEventListener('click', onClick);
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    root.removeEventListener('click', onClick);
    unmountCopy();
    unmountNav();
  };
}
