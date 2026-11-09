import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const ROWS = () => [
  [L('Cliente', 'Customer', 'Cliente'), 'Ana Lima'],
  [L('E-mail', 'Email', 'Correo'), 'ana@lume.dev'],
  [L('Plano', 'Plan', 'Plan'), L('Equipe', 'Team', 'Equipo')],
  [L('Criado em', 'Created on', 'Creado el'), L('8 de novembro', 'November 8', '8 de noviembre')],
];
const dl = (mod = '') => `<dl class="ds-dl${mod ? ` ${mod}` : ''}">${ROWS().map(([k, v]) => `<div class="ds-dl__row"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;

export default function renderDl(page) {
  return controlPage(page, {
    lead: L('Pares de rótulo e valor, como numa ficha de detalhes. Mais leve que uma tabela quando só há um registro para mostrar.', 'Label and value pairs, as on a details sheet. Lighter than a table when there’s only one record to show.', 'Pares de etiqueta y valor, como en una ficha de detalles. Más ligera que una tabla cuando solo hay un registro para mostrar.'),
    stats: [
      ['JavaScript', 0],
      [L('disposições', 'layouts', 'disposiciones'), 3],
      [L('base', 'base', 'base'), 'dl'],
      [L('sem espaço', 'when tight', 'sin espacio'), L('empilha', 'stacks', 'apila')],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Só HTML e CSS, sobre ${ic('dl')}, ${ic('dt')} e ${ic('dd')}.`, `Just HTML and CSS, on top of ${ic('dl')}, ${ic('dt')}, and ${ic('dd')}.`, `Solo HTML y CSS, sobre ${ic('dl')}, ${ic('dt')} y ${ic('dd')}.`), html: playgroundMarkup('dl') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Rótulo ao lado do valor, com ou sem linhas, ou em cima, para caber em colunas.', 'Label beside the value, with or without lines, or above it, to fit in columns.', 'Etiqueta junto al valor, con o sin líneas, o encima, para caber en columnas.'),
        html: examples([
          example(L('Simples', 'Simple', 'Simple'), 'ds-dl', L('Para o meio de um cartão.', 'For the middle of a card.', 'Para el medio de una tarjeta.'), dl()),
          example(L('Com linhas', 'With lines', 'Con líneas'), 'ds-dl--lines', L('Mais fácil de acompanhar quando a lista é longa.', 'Easier to follow when the list is long.', 'Más fácil de seguir cuando la lista es larga.'), dl('ds-dl--lines')),
          example(L('Em colunas', 'In columns', 'En columnas'), 'ds-dl--stacked', L('Rótulo em cima, para resumos.', 'Label on top, for summaries.', 'Etiqueta encima, para resúmenes.'), dl('ds-dl--stacked')),
        ], 3),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O próprio HTML liga cada rótulo ao seu valor.', 'The HTML itself links each label to its value.', 'El propio HTML vincula cada etiqueta con su valor.'),
        html: a11yList([
          [L('Semântica', 'Semantics', 'Semántica'), L(`Leitores de tela entendem ${ic('dt')} como termo e ${ic('dd')} como definição. O ${ic('div')} em volta de cada par é permitido.`, `Screen readers treat ${ic('dt')} as a term and ${ic('dd')} as its definition. The ${ic('div')} around each pair is allowed.`, `Los lectores de pantalla entienden ${ic('dt')} como término y ${ic('dd')} como definición. El ${ic('div')} alrededor de cada par está permitido.`)],
          [L('Texto longo', 'Long text', 'Texto largo'), L('Valores longos, como e-mails, quebram em vez de vazar.', 'Long values, like emails, wrap instead of overflowing.', 'Los valores largos, como correos, se parten en vez de desbordarse.')],
          [L('Pouco espaço', 'Little space', 'Poco espacio'), L('Em contêiner estreito, o rótulo sobe para cima do valor, em vez de quebrar as palavras.', 'In a narrow container, the label moves above the value instead of breaking words.', 'En un contenedor estrecho, la etiqueta sube encima del valor, en vez de partir las palabras.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que a lista consome.', 'Everything the list consumes.', 'Todo lo que consume la lista.'),
        html: tokenTable([
          ['color.fg.subtle', L('Rótulo', 'Label', 'Etiqueta')],
          ['color.fg.default', L('Valor', 'Value', 'Valor')],
          ['color.border.subtle', L('Linhas', 'Lines', 'Líneas')],
          ['text.body-sm', L('Texto', 'Text', 'Texto')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarla y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: um registro só', 'Do: a single record', 'Haz: un solo registro'), L('Os detalhes de um pedido, um perfil, um resumo antes de confirmar.', 'An order’s details, a profile, a summary before confirming.', 'Los detalles de un pedido, un perfil, un resumen antes de confirmar.')],
          ['dont', L('Evite: comparar registros', 'Avoid: comparing records', 'Evita: comparar registros'), L('Para vários itens lado a lado, use a Tabela.', 'For several items side by side, use the Table.', 'Para varios elementos lado a lado, usa la Tabla.')],
          ['tip', L('Sem valor? Diga', 'No value? Say so', '¿Sin valor? Dilo'), L('Mostre “Não informado” em vez de um espaço vazio.', 'Show “Not provided” instead of a blank.', 'Muestra “No informado” en vez de un espacio vacío.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'dl',
    controls: [{ id: 'layout', label: L('Disposição', 'Layout', 'Disposición'), value: 'lines', options: [{ value: 'plain', label: L('Simples', 'Simple', 'Simple') }, { value: 'lines', label: L('Com linhas', 'With lines', 'Con líneas') }, { value: 'stacked', label: L('Em colunas', 'In columns', 'En columnas') }] }],
    render: (s) => stageWrap(dl(s.layout === 'plain' ? '' : `ds-dl--${s.layout}`)),
    code: (s) => `<dl class="ds-dl${s.layout === 'plain' ? '' : ` ds-dl--${s.layout}`}">
${ROWS().map(([k, v]) => `  <div class="ds-dl__row"><dt>${k}</dt><dd>${v}</dd></div>`).join('\n')}
</dl>`,
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
