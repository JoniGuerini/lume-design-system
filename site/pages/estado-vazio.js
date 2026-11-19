import { icon } from '../../ds/icons/icons.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList, escapeHtml } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const TEXT = () => ({
  title: L('Nenhum cliente ainda', 'No clients yet', 'Ningún cliente todavía'),
  desc: L('Cadastre o primeiro para marcar sessões e emitir recibos.', 'Add the first one to book sessions and issue receipts.', 'Registra el primero para agendar sesiones y emitir recibos.'),
  action: L('Cadastrar cliente', 'Add client', 'Registrar cliente'),
});

const TONES = () => [
  ['neutral', L('Neutro', 'Neutral', 'Neutro'), 'users'],
  ['danger', L('Erro', 'Error', 'Error'), 'alert-circle'],
  ['warning', L('Atenção', 'Warning', 'Atención'), 'wifi-off'],
  ['muted', L('Apagado', 'Muted', 'Atenuado'), 'lock'],
];

/** O estado vazio do Lume (.ds-empty), com as partes que fizerem sentido. */
function empty({ size = 'page', plain = false, tone = 'neutral', glyph = 'users', title, desc, action, meta } = {}) {
  const t = TEXT();
  const cls = ['ds-empty', size !== 'page' && `ds-empty--${size}`, plain && 'ds-empty--plain', tone !== 'neutral' && `ds-empty--${tone}`].filter(Boolean).join(' ');
  const btnSize = size === 'page' ? '' : ' ds-btn--sm';
  const act = action === false ? '' : `<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary${btnSize}">${icon('plus', { size: 16 })}${action ?? t.action}</button></div>`;
  return `<div class="${cls}" role="status">
    <span class="ds-empty__icon">${icon(glyph)}</span>
    <p class="ds-empty__title">${title ?? t.title}</p>
    ${desc === false ? '' : `<p class="ds-empty__description">${desc ?? t.desc}</p>`}
    ${size === 'inline' ? '' : act}
    ${meta ? `<p class="ds-empty__meta">${meta}</p>` : ''}
  </div>`;
}

export default function renderEstadoVazio(page) {
  return controlPage(page, {
    lead: L('O que aparece no lugar de uma lista ou de um painel sem nada: o que falta, por quê e o próximo passo. Para o texto de cada situação (primeiro uso, sem resultados, erro), veja o padrão Estados vazios.', 'What shows in place of a list or panel with nothing in it: what’s missing, why, and the next step. For the copy of each situation (first use, no results, error), see the Empty states pattern.', 'Lo que aparece en lugar de una lista o un panel sin nada: qué falta, por qué y el siguiente paso. Para el texto de cada situación (primer uso, sin resultados, error), mira el patrón Estados vacíos.'),
    stats: [
      [L('tamanhos', 'sizes', 'tamaños'), 3],
      [L('tons', 'tones', 'tonos'), 4],
      [L('partes', 'parts', 'partes'), 5],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'status'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Monte o estado vazio e copie o HTML ou o React.', 'Build the empty state and copy the HTML or the React.', 'Arma el estado vacío y copia el HTML o el React.'), html: playgroundMarkup('empty-state') },
      {
        id: 'tamanhos',
        title: L('Tamanhos', 'Sizes', 'Tamaños'),
        desc: L('Do tamanho do lugar que ficou vazio: a lista inteira, um painel ou uma linha.', 'The size of the place left empty: the whole list, a panel, or a row.', 'Del tamaño del lugar que quedó vacío: la lista entera, un panel o una fila.'),
        html: examples([
          example(L('Página', 'Page', 'Página'), 'ds-empty', L('A lista ou a tela inteira. O padrão.', 'The whole list or screen. The default.', 'La lista o la pantalla entera. El predeterminado.'), empty()),
          example(L('Compacto', 'Compact', 'Compacto'), 'ds-empty--compact', L('Dentro de um painel ou de um cartão.', 'Inside a panel or a card.', 'Dentro de un panel o de una tarjeta.'), empty({ size: 'compact', glyph: 'calendar', title: L('Nenhuma sessão hoje', 'No sessions today', 'Ninguna sesión hoy'), desc: L('A agenda do dia aparece aqui.', 'Today’s schedule shows here.', 'La agenda del día aparece aquí.'), action: L('Marcar sessão', 'Book session', 'Agendar sesión') })),
          example(L('Em linha', 'Inline', 'En línea'), 'ds-empty--inline', L('Numa linha de tabela ou de lista, sem botão.', 'In a table or list row, without a button.', 'En una fila de tabla o de lista, sin botón.'), empty({ size: 'inline', glyph: 'search-x', title: L('Nada nesta semana', 'Nothing this week', 'Nada esta semana'), desc: L('Troque o período para ver mais.', 'Change the period to see more.', 'Cambia el período para ver más.') })),
          example(L('Sem contorno', 'Plain', 'Sin contorno'), 'ds-empty--plain', L('Quando já está dentro de um cartão, que faz o contorno.', 'When it’s already inside a card, which provides the outline.', 'Cuando ya está dentro de una tarjeta, que hace el contorno.'), `<div class="ds-card" style="width:100%">${empty({ size: 'compact', plain: true, glyph: 'file-text', title: L('Nenhuma nota', 'No notes', 'Ninguna nota'), desc: L('As notas da sessão ficam aqui.', 'Session notes stay here.', 'Las notas de la sesión quedan aquí.'), action: L('Escrever nota', 'Write note', 'Escribir nota') })}</div>`),
        ]),
      },
      {
        id: 'tons',
        title: L('Tons', 'Tones', 'Tonos'),
        desc: L('O tom vai só no ícone. Erro e atenção pedem uma ação de recuperação; apagado é para o que não depende da pessoa.', 'The tone goes only on the icon. Error and warning call for a recovery action; muted is for what doesn’t depend on the person.', 'El tono va solo en el ícono. Error y atención piden una acción de recuperación; atenuado es para lo que no depende de la persona.'),
        html: examples(
          TONES().map(([tone, name, glyph]) =>
            example(name, tone !== 'neutral' ? `ds-empty--${tone}` : '—', '', empty({ size: 'compact', tone, glyph, action: false, desc: false, title: name })),
          ),
        ),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`Só CSS. No React, ${ic('EmptyState')} monta a mesma marcação.`, `CSS only. In React, ${ic('EmptyState')} builds the same markup.`, `Solo CSS. En React, ${ic('EmptyState')} arma el mismo marcado.`),
        html: codeBlock(`<div class="ds-empty" role="status">
  <span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
  <p class="ds-empty__title">${TEXT().title}</p>
  <p class="ds-empty__description">${TEXT().desc}</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--primary">${TEXT().action}</button>
  </div>
</div>

// React
<EmptyState
  icon="users"
  title="${TEXT().title}"
  description="${TEXT().desc}"
  actions={<Button variant="primary" icon="plus">${TEXT().action}</Button>}
/>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O vazio também é conteúdo, e é dito.', 'Emptiness is content too, and it gets said.', 'El vacío también es contenido, y se dice.'),
        html: a11yList([
          [L('Anunciado sem interromper', 'Announced without interrupting', 'Anunciado sin interrumpir'), L(`${ic('role="status"')}: quando uma busca esvazia a lista, o leitor de tela ouve o título.`, `${ic('role="status"')}: when a search empties the list, screen readers hear the title.`, `${ic('role="status"')}: cuando una búsqueda vacía la lista, el lector de pantalla oye el título.`)],
          [L('Ícone decorativo', 'Decorative icon', 'Ícono decorativo'), L('O ícone não é lido: o título diz tudo.', 'The icon isn’t read: the title says it all.', 'El ícono no se lee: el título lo dice todo.')],
          [L('Ação com verbo', 'Action with a verb', 'Acción con verbo'), L('“Cadastrar cliente”, não “Clique aqui”: o botão faz sentido fora do contexto.', '“Add client”, not “Click here”: the button makes sense out of context.', '“Registrar cliente”, no “Haz clic aquí”: el botón tiene sentido fuera de contexto.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o estado vazio consome.', 'Everything the empty state consumes.', 'Todo lo que consume el estado vacío.'),
        html: tokenTable([
          ['color.bg.sunken', L('Fundo', 'Background', 'Fondo')],
          ['color.border.default', L('Contorno tracejado', 'Dashed outline', 'Contorno discontinuo')],
          ['color.bg.muted', L('Fundo do ícone', 'Icon background', 'Fondo del ícono')],
          ['color.fg.brand', L('Ícone', 'Icon', 'Ícono')],
          ['text.heading-md', L('Título', 'Title', 'Título')],
          ['radius.2xl', L('Cantos', 'Corners', 'Esquinas')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: sempre um próximo passo', 'Do: always a next step', 'Haz: siempre un siguiente paso'), L('Criar, limpar a busca, tentar de novo. Vazio sem saída é beco.', 'Create, clear the search, try again. Empty with no way out is a dead end.', 'Crear, borrar la búsqueda, intentar de nuevo. Vacío sin salida es un callejón.')],
          ['dont', L('Evite: ilustração no lugar do texto', 'Avoid: an illustration instead of text', 'Evita: ilustración en lugar del texto'), L('O ícone acompanha; quem explica é o título e a descrição.', 'The icon tags along; the title and description do the explaining.', 'El ícono acompaña; quien explica es el título y la descripción.')],
          ['tip', L('O texto de cada situação', 'The copy for each situation', 'El texto de cada situación'), L('Primeiro uso, sem resultados, erro, sem permissão, offline: o padrão Estados vazios tem o texto de cada um.', 'First use, no results, error, no permission, offline: the Empty states pattern has the copy for each.', 'Primer uso, sin resultados, error, sin permiso, offline: el patrón Estados vacíos tiene el texto de cada uno.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'empty-state',
    controls: [
      { id: 'size', label: L('Tamanho', 'Size', 'Tamaño'), value: 'page', options: [{ value: 'page', label: L('Página', 'Page', 'Página') }, { value: 'compact', label: L('Compacto', 'Compact', 'Compacto') }, { value: 'inline', label: L('Em linha', 'Inline', 'En línea') }] },
      { id: 'tone', label: L('Tom', 'Tone', 'Tono'), value: 'neutral', options: TONES().map(([value, label]) => ({ value, label })) },
      { id: 'plain', label: L('Superfície', 'Surface', 'Superficie'), value: 'no', options: [{ value: 'no', label: L('Com contorno', 'Outlined', 'Con contorno') }, { value: 'yes', label: L('Sem contorno', 'Plain', 'Sin contorno') }] },
    ],
    text: { id: 'title', label: L('Título', 'Title', 'Título'), value: TEXT().title },
    render: (s) => `<div style="width:100%;max-width:560px">${empty({ size: s.size, tone: s.tone, plain: s.plain === 'yes', title: escapeHtml(s.title || TEXT().title), glyph: TONES().find(([t]) => t === s.tone)?.[2] ?? 'users' })}</div>`,
    code: (s) => {
      const glyph = TONES().find(([t]) => t === s.tone)?.[2] ?? 'users';
      const cls = ['ds-empty', s.size !== 'page' && `ds-empty--${s.size}`, s.plain === 'yes' && 'ds-empty--plain', s.tone !== 'neutral' && `ds-empty--${s.tone}`].filter(Boolean).join(' ');
      const props = [`icon="${glyph}"`, `title="${s.title || TEXT().title}"`, `description="${TEXT().desc}"`, s.size !== 'page' && `size="${s.size}"`, s.tone !== 'neutral' && `tone="${s.tone}"`, s.plain === 'yes' && 'plain'].filter(Boolean);
      return `<div class="${cls}" role="status">
  <span class="ds-empty__icon"><ds-icon name="${glyph}"></ds-icon></span>
  <p class="ds-empty__title">${s.title || TEXT().title}</p>
  <p class="ds-empty__description">${TEXT().desc}</p>${s.size === 'inline' ? '' : `
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--primary">${TEXT().action}</button>
  </div>`}
</div>

// React
<EmptyState
  ${props.join('\n  ')}${s.size === 'inline' ? '' : `\n  actions={<Button variant="primary">${TEXT().action}</Button>}`}
/>`;
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
