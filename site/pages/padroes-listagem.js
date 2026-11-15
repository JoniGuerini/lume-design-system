import { icon } from '../../ds/icons/icons.js';
import { createFilters } from '../../ds/js/filters.js';
import { createPagination } from '../../ds/js/pagination.js';
import { createMenu } from '../../ds/js/menu.js';
import { toast, copyText } from '../../ds/js/toast.js';
import { locale, dateFormat } from '../../ds/js/i18n.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock, a11yList, escapeHtml } from '../component-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/padroes-comum.css', 'site/pages/padroes-listagem.css'];

/* ───────── Dados de exemplo: as pessoas de um espaço de trabalho (ids fixos; textos no idioma atual) ───────── */

const ic = (s) => `<code class="ds-inline-code">${s}</code>`;
const PAGE_SIZE = 8;

const NAMES = ['Amanda Ribeiro', 'Beatriz Nogueira', 'Caio Fernandes', 'Daniela Moura', 'Eduardo Vieira', 'Flávia Cardoso', 'Gustavo Pacheco', 'Helena Barbosa', 'Igor Monteiro', 'Juliana Torres', 'Leonardo Brito', 'Mariana Azevedo', 'Natália Coelho', 'Otávio Lacerda', 'Patrícia Gomes', 'Renato Siqueira', 'Sabrina Melo', 'Thiago Antunes', 'Valéria Castro', 'William Rezende', 'Yara Fontes', 'Zeca Andrade'];
const ROLE_IDS = ['admin', 'editor', 'leitor'];
const STATUS_IDS = ['ativo', 'ativo', 'convidado', 'ativo', 'desativado', 'ativo', 'ativo'];

const ROLES = () => [
  { value: 'admin', label: L('Admin', 'Admin', 'Admin') },
  { value: 'editor', label: L('Editor', 'Editor', 'Editor') },
  { value: 'leitor', label: L('Leitor', 'Viewer', 'Lector') },
];
const STATUS = () => [
  { value: 'ativo', label: L('Ativo', 'Active', 'Activo'), tone: 'success' },
  { value: 'convidado', label: L('Convidado', 'Invited', 'Invitado'), tone: 'info' },
  { value: 'desativado', label: L('Desativado', 'Deactivated', 'Desactivado'), tone: 'neutral' },
];

const slug = (name) => name.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().split(' ');
const seed = () =>
  NAMES.map((name, i) => {
    const [first, last] = slug(name);
    return {
      id: `p${i + 1}`,
      name,
      email: `${first}.${last}@lume.app`,
      role: ROLE_IDS[i === 0 ? 0 : (i * 5) % 7 === 0 ? 0 : (i * 2) % 3 === 0 ? 2 : 1],
      status: STATUS_IDS[(i * 3) % STATUS_IDS.length],
      seen: new Date(2026, 10, 14 - ((i * 7) % 40), 9 + (i % 9), (i * 13) % 60),
    };
  });

const initials = (name) => name.split(' ').map((p) => p[0]).slice(0, 2).join('');
const normalize = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const filterConfig = () => ({
  label: L('Filtrar pessoas', 'Filter people', 'Filtrar personas'),
  search: { placeholder: L('Buscar por nome ou e-mail', 'Search by name or email', 'Buscar por nombre o correo'), label: L('Buscar pessoas por nome ou e-mail', 'Search people by name or email', 'Buscar personas por nombre o correo') },
  fields: [
    { id: 'funcao', label: L('Função', 'Role', 'Función'), options: ROLES() },
    { id: 'status', label: L('Status', 'Status', 'Estado'), options: STATUS().map(({ value, label }) => ({ value, label })) },
  ],
  noun: L(['pessoa', 'pessoas'], ['person', 'people'], ['persona', 'personas']),
});

const selectedText = (n) => L(n === 1 ? '1 selecionada' : `${n} selecionadas`, `${n} selected`, n === 1 ? '1 seleccionada' : `${n} seleccionadas`);

/* ───────── Peças da tela ───────── */

const statusBadge = (id) => {
  const st = STATUS().find((s) => s.value === id);
  return `<span class="ds-badge ds-badge--sm ds-badge--${st.tone}"><span class="ds-badge__dot"></span>${st.label}</span>`;
};

function rowHtml(p, selected, fmt) {
  const role = ROLES().find((r) => r.value === p.role).label;
  const on = selected.has(p.id);
  return `<tr${on ? ' data-selected' : ''} data-row="${p.id}">
    <td class="ds-table__check"><input type="checkbox" data-dl-select="${p.id}" aria-label="${escapeHtml(L(`Selecionar ${p.name}`, `Select ${p.name}`, `Seleccionar a ${p.name}`))}"${on ? ' checked' : ''}></td>
    <td>
      <span class="dl-person">
        <span class="ds-avatar ds-avatar--sm" aria-hidden="true"><span>${initials(p.name)}</span></span>
        <span class="dl-person__text"><span class="dl-person__name">${escapeHtml(p.name)}</span><span class="dl-person__email">${p.email}</span></span>
      </span>
    </td>
    <td>${role}</td>
    <td>${statusBadge(p.status)}</td>
    <td class="ds-table__muted">${p.status === 'convidado' ? '—' : fmt.format(p.seen)}</td>
    <td class="dl-actions"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-dl-row-menu="${p.id}" aria-label="${escapeHtml(L(`Ações para ${p.name}`, `Actions for ${p.name}`, `Acciones para ${p.name}`))}">${icon('more-horizontal', { size: 18 })}</button></td>
  </tr>`;
}

const sortIcon = (dir) => icon(dir === 'descending' ? 'chevron-down' : dir === 'ascending' ? 'chevron-up' : 'chevrons-up-down', { size: 14 });

function screen() {
  return `<div class="pt-stage">
    <div class="pt-screen dl-screen">
      <header class="pt-screen__head">
        <div>
          <h3 class="pt-screen__title">${L('Pessoas', 'People', 'Personas')}</h3>
          <p class="pt-screen__desc">${L('Quem tem acesso a este espaço de trabalho.', 'Who has access to this workspace.', 'Quién tiene acceso a este espacio de trabajo.')}</p>
        </div>
        <div class="pt-screen__actions">
          <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-dl-export>${icon('download', { size: 16 })}${L('Exportar', 'Export', 'Exportar')}</button>
          <button type="button" class="ds-btn ds-btn--primary ds-btn--sm" data-dl-invite>${icon('plus', { size: 16 })}${L('Convidar', 'Invite', 'Invitar')}</button>
        </div>
      </header>

      <div class="dl-toolbar">
        <div data-dl-filters></div>
        <div class="dl-bulk" data-dl-bulk role="region" aria-label="${L('Ações em lote', 'Bulk actions', 'Acciones en lote')}" hidden>
          <p class="dl-bulk__count" data-dl-count aria-live="polite"></p>
          <div class="dl-bulk__actions">
            <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-dl-role>${icon('users', { size: 16 })}${L('Mudar função', 'Change role', 'Cambiar función')}${icon('chevron-down', { size: 14 })}</button>
            <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-dl-deactivate>${icon('pause', { size: 16 })}${L('Desativar', 'Deactivate', 'Desactivar')}</button>
            <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm dl-danger" data-dl-remove>${icon('trash', { size: 16 })}${L('Remover', 'Remove', 'Eliminar')}</button>
          </div>
          <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-dl-clear-selection aria-label="${L('Limpar seleção', 'Clear selection', 'Limpiar selección')}" data-ds-tooltip="${L('Limpar seleção', 'Clear selection', 'Limpiar selección')}">${icon('x', { size: 16 })}</button>
        </div>
      </div>

      <div class="ds-table-wrap dl-table" role="region" aria-labelledby="dl-caption" tabindex="0">
        <table class="ds-table ds-table--hover">
          <caption id="dl-caption" class="ds-visually-hidden">${L('Pessoas do espaço de trabalho', 'Workspace people', 'Personas del espacio de trabajo')}</caption>
          <thead><tr>
            <th scope="col" class="ds-table__check"><input type="checkbox" data-dl-select-page aria-label="${L('Selecionar as pessoas desta página', 'Select the people on this page', 'Seleccionar las personas de esta página')}"></th>
            <th scope="col" data-dl-sort-col="nome"><button type="button" class="ds-table__sort" data-dl-sort="nome">${L('Pessoa', 'Person', 'Persona')}<span data-dl-sort-icon></span></button></th>
            <th scope="col">${L('Função', 'Role', 'Función')}</th>
            <th scope="col">${L('Status', 'Status', 'Estado')}</th>
            <th scope="col" data-dl-sort-col="acesso"><button type="button" class="ds-table__sort" data-dl-sort="acesso">${L('Último acesso', 'Last active', 'Último acceso')}<span data-dl-sort-icon></span></button></th>
            <th scope="col"><span class="ds-visually-hidden">${L('Ações', 'Actions', 'Acciones')}</span></th>
          </tr></thead>
          <tbody data-dl-rows></tbody>
        </table>
        <div class="dl-empty" data-dl-empty hidden>
          <div class="ds-empty ds-empty--compact ds-empty--plain">
            <span class="ds-empty__icon">${icon('search', { size: 20 })}</span>
            <p class="ds-empty__title">${L('Ninguém com esses filtros', 'No one matches these filters', 'Nadie con esos filtros')}</p>
            <p class="ds-empty__description">${L('Tente outra busca ou tire um filtro.', 'Try another search or remove a filter.', 'Prueba otra búsqueda o quita un filtro.')}</p>
            <div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-dl-clear-filters>${L('Limpar filtros', 'Clear filters', 'Limpiar filtros')}</button></div>
          </div>
        </div>
      </div>

      <nav class="ds-pagination" data-dl-pages aria-label="${L('Páginas de pessoas', 'People pages', 'Páginas de personas')}"></nav>
    </div>
  </div>`;
}

/* ───────── Textos da página ───────── */

const PARTS = () => [
  [L('Cabeçalho', 'Header', 'Encabezado'), L('Título, uma frase do que é a lista e uma ação principal (Convidar). Exportar e afins vão em secundário.', 'Title, one sentence about what the list is, and one primary action (Invite). Export and the like go in secondary.', 'Título, una frase de qué es la lista y una acción principal (Invitar). Exportar y similares van en secundario.')],
  [L('Filtros', 'Filters', 'Filtros'), L('Busca e os filtros mais usados, numa linha. A ordenação fica no cabeçalho da tabela, num lugar só.', 'Search and the most-used filters, in one row. Sorting lives in the table header, in one place only.', 'Búsqueda y los filtros más usados, en una fila. El orden queda en el encabezado de la tabla, en un solo lugar.')],
  [L('Barra de lote', 'Bulk bar', 'Barra de lote'), L('Toma o lugar dos filtros enquanto há seleção: quantas, o que dá para fazer com elas e o X para sair.', 'Takes the filters’ place while there’s a selection: how many, what you can do with them, and the X to leave.', 'Ocupa el lugar de los filtros mientras hay selección: cuántas, qué se puede hacer con ellas y la X para salir.')],
  [L('Tabela', 'Table', 'Tabla'), L('A primeira coluna identifica a linha (avatar, nome e e-mail). Ordenação no cabeçalho das colunas que fazem sentido.', 'The first column identifies the row (avatar, name, and email). Sorting on the headers of the columns where it makes sense.', 'La primera columna identifica la fila (avatar, nombre y correo). Orden en el encabezado de las columnas donde tiene sentido.')],
  [L('Ações da linha', 'Row actions', 'Acciones de la fila'), L('Um ⋯ no fim de cada linha, sempre visível. O que é de uma pessoa só fica aqui, não na barra de lote.', 'A ⋯ at the end of each row, always visible. What belongs to a single person stays here, not in the bulk bar.', 'Un ⋯ al final de cada fila, siempre visible. Lo que es de una sola persona queda aquí, no en la barra de lote.')],
  [L('Paginação', 'Pagination', 'Paginación'), L('Embaixo, com o intervalo (“1–8 de 22”). Filtrar volta para a página 1.', 'At the bottom, with the range (“1–8 of 22”). Filtering goes back to page 1.', 'Abajo, con el intervalo (“1–8 de 22”). Filtrar vuelve a la página 1.')],
];

const RULES = () => [
  ['link', L('O endereço guarda a lista', 'The URL keeps the list', 'La dirección guarda la lista'), L('Busca, filtros, ordenação e página vão para a URL. Voltar, recarregar e mandar o link para alguém mostram a mesma lista.', 'Search, filters, sorting, and page go into the URL. Going back, reloading, and sending the link to someone show the same list.', 'Búsqueda, filtros, orden y página van a la URL. Volver, recargar y enviar el enlace a alguien muestran la misma lista.')],
  ['check-square', L('Seleção é da página', 'Selection belongs to the page', 'La selección es de la página'), L('O checkbox do cabeçalho marca só o que está à vista. Filtrar ou mudar de página não leva a seleção junto, para ninguém agir sobre o que não vê.', 'The header checkbox only checks what’s in view. Filtering or changing pages doesn’t carry the selection along, so nobody acts on what they can’t see.', 'El checkbox del encabezado marca solo lo que está a la vista. Filtrar o cambiar de página no arrastra la selección, para que nadie actúe sobre lo que no ve.')],
  ['undo', L('Desfazer em vez de confirmar', 'Undo instead of confirm', 'Deshacer en vez de confirmar'), L('Remover e desativar acontecem na hora, com “Desfazer” no aviso. Uma pergunta antes de cada ação só ensina a clicar em “Sim” sem ler.', 'Removing and deactivating happen right away, with “Undo” in the notice. A question before every action only teaches people to click “Yes” without reading.', 'Eliminar y desactivar ocurren al instante, con “Deshacer” en el aviso. Una pregunta antes de cada acción solo enseña a pulsar “Sí” sin leer.')],
  ['more-horizontal', L('As ações não somem', 'Actions don’t hide', 'Las acciones no se esconden'), L('O ⋯ da linha fica sempre à vista, não só com o mouse por cima: no toque e no teclado não existe “passar o mouse”.', 'The row’s ⋯ is always visible, not only on hover: touch and keyboard have no “hover”.', 'El ⋯ de la fila queda siempre a la vista, no solo al pasar el mouse: en el toque y en el teclado no existe “pasar el mouse”.')],
  ['search', L('Vazio por filtro não é lista vazia', 'Empty by filter isn’t an empty list', 'Vacío por filtro no es lista vacía'), L('Quando os filtros não acham nada, diga isso e ofereça “Limpar filtros”. O convite para começar é para quando não existe nada mesmo.', 'When the filters find nothing, say so and offer “Clear filters”. The invitation to get started is for when there’s really nothing.', 'Cuando los filtros no encuentran nada, dilo y ofrece “Limpiar filtros”. La invitación a empezar es para cuando de verdad no hay nada.')],
  ['type', L('Datas que se leem', 'Dates people can read', 'Fechas que se leen'), L('“14 de nov.” em vez de “2026-11-14T09:12”. O horário exato fica para o detalhe da pessoa.', '“Nov 14” instead of “2026-11-14T09:12”. The exact time is for the person’s detail page.', '“14 nov” en vez de “2026-11-14T09:12”. La hora exacta queda para el detalle de la persona.')],
];

const WRITING = () => [
  [L('Lote feito', 'Bulk done', 'Lote hecho'), L('Operação realizada com sucesso!', 'Operation completed successfully!', '¡Operación realizada con éxito!'), L('3 pessoas removidas. Desfazer', '3 people removed. Undo', '3 personas eliminadas. Deshacer')],
  [L('Sem resultado', 'No results', 'Sin resultados'), L('Nenhum registro encontrado.', 'No records found.', 'No se encontraron registros.'), L('Ninguém com esses filtros. Limpar filtros', 'No one matches these filters. Clear filters', 'Nadie con esos filtros. Limpiar filtros')],
  [L('Contagem', 'Count', 'Conteo'), L('Exibindo registros 1 a 8', 'Displaying records 1 to 8', 'Mostrando registros 1 a 8'), L('8 de 22 pessoas', '8 of 22 people', '8 de 22 personas')],
  [L('Seleção', 'Selection', 'Selección'), L('Itens selecionados: 3', 'Selected items: 3', 'Elementos seleccionados: 3'), L('3 selecionadas', '3 selected', '3 seleccionadas')],
];

const htmlCode = () => `<div class="${L('lista', 'list', 'lista')}">
  <div id="${L('filtros', 'filters', 'filtros')}"></div>

  <!-- ${L('aparece no lugar dos filtros quando há seleção', 'shows up in place of the filters when there’s a selection', 'aparece en el lugar de los filtros cuando hay selección')} -->
  <div class="${L('barra-de-lote', 'bulk-bar', 'barra-de-lote')}" role="region" aria-label="${L('Ações em lote', 'Bulk actions', 'Acciones en lote')}" hidden>
    <p aria-live="polite">3 ${L('selecionadas', 'selected', 'seleccionadas')}</p>
    <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm">${L('Remover', 'Remove', 'Eliminar')}</button>
  </div>

  <div class="ds-table-wrap" role="region" aria-labelledby="${L('legenda', 'caption', 'leyenda')}" tabindex="0">
    <table class="ds-table ds-table--hover">
      <caption id="${L('legenda', 'caption', 'leyenda')}" class="ds-visually-hidden">${L('Pessoas', 'People', 'Personas')}</caption>
      <thead><tr>
        <th scope="col" class="ds-table__check"><input type="checkbox" aria-label="${L('Selecionar as pessoas desta página', 'Select the people on this page', 'Seleccionar las personas de esta página')}"></th>
        <th scope="col" aria-sort="ascending"><button type="button" class="ds-table__sort">${L('Pessoa', 'Person', 'Persona')}</button></th>
        …
      </tr></thead>
      <tbody>…</tbody>
    </table>
  </div>

  <nav class="ds-pagination" id="${L('paginas', 'pages', 'paginas')}" aria-label="${L('Páginas', 'Pages', 'Páginas')}"></nav>
</div>`;

const jsCode = () => `import { createFilters, createPagination, filtersToQuery, toast } from 'https://lumeui.dev/v/1.3/lume.js';

const pages = createPagination(document.querySelector('#${L('paginas', 'pages', 'paginas')}'), {
  total: ${L('pessoas', 'people', 'personas')}.length, pageSize: 8,
  onChange: ({ page }) => render(),
});

const filters = createFilters(document.querySelector('#${L('filtros', 'filters', 'filtros')}'), {
  ...config,
  onChange(state) {
    history.replaceState(null, '', '?' + filtersToQuery(state, config));
    ${L('selecao', 'selection', 'seleccion')}.clear();   // ${L('a seleção não atravessa filtros', 'the selection doesn’t cross filters', 'la selección no atraviesa filtros')}
    pages.setPage(1);
    render();
  },
});

function ${L('remover', 'remove', 'eliminar')}(ids) {
  const ${L('antes', 'before', 'antes')} = [...${L('pessoas', 'people', 'personas')}];
  ${L('pessoas', 'people', 'personas')} = ${L('pessoas', 'people', 'personas')}.filter((p) => !ids.includes(p.id));
  render();
  toast(\`\${ids.length} ${L('pessoas removidas', 'people removed', 'personas eliminadas')}\`, {
    action: { label: '${L('Desfazer', 'Undo', 'Deshacer')}', onClick: () => { ${L('pessoas', 'people', 'personas')} = ${L('antes', 'before', 'antes')}; render(); } },
  });
}`;

/* ───────── Página ───────── */

const section = (id, title, desc, body) => `
  <section class="doc-section" id="${id}" aria-labelledby="${id}-title">
    <header class="doc-section__header">
      <div>
        <h2 class="doc-section__title" id="${id}-title">${title}</h2>
        <p class="doc-section__desc">${desc}</p>
      </div>
    </header>
    ${body}
  </section>`;

const NAV = () => [
  ['dl-exemplo', L('Exemplo', 'Example', 'Ejemplo')],
  ['dl-anatomia', L('Anatomia', 'Anatomy', 'Anatomía')],
  ['dl-regras', L('Regras', 'Rules', 'Reglas')],
  ['dl-mensagens', L('Mensagens', 'Messages', 'Mensajes')],
  ['dl-acessibilidade', L('Acessibilidade', 'Accessibility', 'Accesibilidad')],
  ['dl-codigo', L('Código', 'Code', 'Código')],
  ['dl-uso', L('Uso', 'Usage', 'Uso')],
];

export default function renderListagem(page) {
  return `
  <div class="page doc dl-page">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">${page.group}</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${L('A tela que todo produto tem: uma lista que a pessoa busca, filtra, ordena e trata em lote. Tudo à vista, nada perdido ao voltar e qualquer ação com volta.', 'The screen every product has: a list people search, filter, sort, and handle in bulk. Everything in view, nothing lost on the way back, and every action reversible.', 'La pantalla que todo producto tiene: una lista que la persona busca, filtra, ordena y trata en lote. Todo a la vista, nada perdido al volver y cualquier acción con vuelta atrás.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('ação principal', 'primary action', 'acción principal')}</dt><dd class="doc-stat__value">1</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('linha de filtros', 'filter row', 'fila de filtros')}</dt><dd class="doc-stat__value">1</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('“tem certeza?”', '“are you sure?”', '“¿estás seguro?”')}</dt><dd class="doc-stat__value">0</dd></div>
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${NAV().map(([id, label]) => `<button type="button" class="doc-nav__link" data-target="${id}">${label}</button>`).join('')}
    </nav>

    ${section(
      'dl-exemplo',
      L('Exemplo ao vivo', 'Live example', 'Ejemplo en vivo'),
      L('As pessoas de um espaço de trabalho. Busque, filtre, ordene pelo cabeçalho, marque algumas e aja em lote.', 'The people in a workspace. Search, filter, sort by the header, check a few, and act in bulk.', 'Las personas de un espacio de trabajo. Busca, filtra, ordena por el encabezado, marca algunas y actúa en lote.'),
      `${screen()}
      <ul class="pt-tries" role="list">
        <li>${icon('check-square', { size: 16 })}${L('Marque duas pessoas: a barra de lote toma o lugar dos filtros, com a contagem.', 'Check two people: the bulk bar takes the filters’ place, with the count.', 'Marca dos personas: la barra de lote ocupa el lugar de los filtros, con el conteo.')}</li>
        <li>${icon('undo', { size: 16 })}${L('Remova e use “Desfazer” no aviso: elas voltam para o mesmo lugar.', 'Remove them and use “Undo” in the notice: they come back to the same place.', 'Elimínalas y usa “Deshacer” en el aviso: vuelven al mismo lugar.')}</li>
        <li>${icon('search', { size: 16 })}${L('Busque “xyz”: o vazio diz que é o filtro e oferece limpar.', 'Search “xyz”: the empty state says it’s the filter and offers to clear it.', 'Busca “xyz”: el vacío dice que es el filtro y ofrece limpiarlo.')}</li>
      </ul>`,
    )}

    ${section(
      'dl-anatomia',
      L('Anatomia', 'Anatomy', 'Anatomía'),
      L('Seis partes, sempre na mesma ordem, de cima para baixo.', 'Six parts, always in the same order, top to bottom.', 'Seis partes, siempre en el mismo orden, de arriba abajo.'),
      `<ol class="pt-parts" role="list">${PARTS().map(([name, text], i) => `<li><span class="pt-parts__num">${i + 1}</span><div><p class="pt-parts__name">${name}</p><p class="pt-parts__text">${text}</p></div></li>`).join('')}</ol>`,
    )}

    ${section(
      'dl-regras',
      L('Regras', 'Rules', 'Reglas'),
      L('Seis decisões que valem para qualquer lista de dados.', 'Six decisions that apply to any data list.', 'Seis decisiones que valen para cualquier lista de datos.'),
      `<div class="pt-rules">${RULES().map(([glyph, title, text]) => `<article class="pt-rule"><span class="pt-rule__icon">${icon(glyph, { size: 18 })}</span><p class="pt-rule__title">${title}</p><p class="pt-rule__text">${text}</p></article>`).join('')}</div>`,
    )}

    ${section(
      'dl-mensagens',
      L('Mensagens', 'Messages', 'Mensajes'),
      L('Curtas, com o número e o nome do que mudou. A ação vem junto, no próprio aviso.', 'Short, with the number and the name of what changed. The action comes along, in the notice itself.', 'Cortos, con el número y el nombre de lo que cambió. La acción viene junto, en el propio aviso.'),
      `<div class="doc-table pt-writing">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Situação', 'Situation', 'Situación')}</span><span>${L('Evite', 'Avoid', 'Evita')}</span><span>${L('Prefira', 'Prefer', 'Prefiere')}</span></div>
        ${WRITING().map(([s, bad, good]) => `<div class="doc-table__row"><span class="pt-writing__situation">${s}</span><span class="pt-writing__bad">${icon('x-circle', { size: 16 })}<span>${escapeHtml(bad)}</span></span><span class="pt-writing__good">${icon('check-circle', { size: 16 })}<span>${escapeHtml(good)}</span></span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'dl-acessibilidade',
      L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
      L('Uma tabela de verdade, com legenda e cabeçalhos, e cada mudança dita em voz alta.', 'A real table, with a caption and headers, and every change said out loud.', 'Una tabla de verdad, con leyenda y encabezados, y cada cambio dicho en voz alta.'),
      a11yList([
        [L('Tabela com nome', 'A named table', 'Tabla con nombre'), L(`${ic('&lt;caption&gt;')} (pode ficar escondida) e ${ic('scope="col"')} nos cabeçalhos. A área que rola tem ${ic('tabindex="0"')} para rolar pelo teclado.`, `${ic('&lt;caption&gt;')} (it can be hidden) and ${ic('scope="col"')} on the headers. The scrolling area has ${ic('tabindex="0"')} to scroll by keyboard.`, `${ic('&lt;caption&gt;')} (puede quedar oculta) y ${ic('scope="col"')} en los encabezados. El área que se desplaza tiene ${ic('tabindex="0"')} para desplazarse con el teclado.`)],
        [L('Ordenação dita', 'Sorting announced', 'Orden anunciado'), L(`O botão do cabeçalho troca ${ic('aria-sort')} no ${ic('&lt;th&gt;')}; o leitor de tela diz “crescente” ou “decrescente”.`, `The header button switches ${ic('aria-sort')} on the ${ic('&lt;th&gt;')}; the screen reader says “ascending” or “descending”.`, `El botón del encabezado cambia ${ic('aria-sort')} en el ${ic('&lt;th&gt;')}; el lector de pantalla dice “ascendente” o “descendente”.`)],
        [L('Checkbox com o nome da linha', 'Checkboxes named after the row', 'Checkbox con el nombre de la fila'), L('“Selecionar Amanda Ribeiro”, não só “Selecionar”. O do cabeçalho fica misto quando parte da página está marcada.', '“Select Amanda Ribeiro”, not just “Select”. The header one goes mixed when part of the page is checked.', '“Seleccionar a Amanda Ribeiro”, no solo “Seleccionar”. El del encabezado queda mixto cuando parte de la página está marcada.')],
        [L('Contagens anunciadas', 'Counts announced', 'Conteos anunciados'), L(`A contagem dos filtros e a da seleção ficam em regiões ${ic('aria-live')}; o aviso de “Desfazer” é um toast com ${ic('role="status"')}.`, `The filter count and the selection count sit in ${ic('aria-live')} regions; the “Undo” notice is a toast with ${ic('role="status"')}.`, `El conteo de los filtros y el de la selección están en regiones ${ic('aria-live')}; el aviso de “Deshacer” es un toast con ${ic('role="status"')}.`)],
        [L('O foco não se perde', 'Focus isn’t lost', 'El foco no se pierde'), L('Depois de remover, o foco vai para a tabela, não para o topo da página. Ao limpar a seleção, volta para os filtros.', 'After removing, focus goes to the table, not the top of the page. When clearing the selection, it goes back to the filters.', 'Después de eliminar, el foco va a la tabla, no al principio de la página. Al limpiar la selección, vuelve a los filtros.')],
      ]),
    )}

    ${section(
      'dl-codigo',
      L('Código', 'Code', 'Código'),
      L(`A lista junta ${ic('createFilters')}, a tabela, ${ic('createPagination')} e ${ic('toast')} com “Desfazer”. A barra de lote é marcação sua.`, `The list combines ${ic('createFilters')}, the table, ${ic('createPagination')}, and ${ic('toast')} with “Undo”. The bulk bar is your own markup.`, `La lista junta ${ic('createFilters')}, la tabla, ${ic('createPagination')} y ${ic('toast')} con “Deshacer”. La barra de lote es marcado tuyo.`),
      `${codeBlock(htmlCode())}
      ${codeBlock(jsCode())}`,
    )}

    ${section(
      'dl-uso',
      L('Uso', 'Usage', 'Uso'),
      L('Lista é para comparar e agir sobre muitas coisas parecidas. Para uma coisa só, use a página de detalhe.', 'A list is for comparing and acting on many similar things. For a single thing, use the detail page.', 'La lista es para comparar y actuar sobre muchas cosas parecidas. Para una sola, usa la página de detalle.'),
      `<div class="usage-grid">
        <article class="usage-card usage-card--do">
          <p class="usage-card__head">${icon('check-circle', { size: 20 })}${L('Faça: poucas colunas, as que decidem', 'Do: few columns, the ones that decide', 'Haz: pocas columnas, las que deciden')}</p>
          <p class="usage-card__text">${L('Quatro ou cinco colunas que ajudam a escolher a linha certa. O resto mora no detalhe, a um clique.', 'Four or five columns that help pick the right row. The rest lives in the detail, one click away.', 'Cuatro o cinco columnas que ayudan a elegir la fila correcta. El resto vive en el detalle, a un clic.')}</p>
        </article>
        <article class="usage-card usage-card--dont">
          <p class="usage-card__head">${icon('x-circle', { size: 20 })}${L('Evite: ação em lote escondida no ⋯ da linha', 'Avoid: bulk actions hidden in the row ⋯', 'Evita: acción en lote escondida en el ⋯ de la fila')}</p>
          <p class="usage-card__text">${L('O que vale para várias linhas fica na barra de lote; o ⋯ é só daquela linha. Misturar os dois faz a pessoa adivinhar sobre o que a ação age.', 'What applies to several rows lives in the bulk bar; the ⋯ is just for that row. Mixing them makes people guess what the action acts on.', 'Lo que vale para varias filas queda en la barra de lote; el ⋯ es solo de esa fila. Mezclarlos hace adivinar sobre qué actúa la acción.')}</p>
        </article>
        <article class="usage-card usage-card--tip">
          <p class="usage-card__head">${icon('zap', { size: 20 })}${L('Mais de mil linhas? Busque no servidor', 'Over a thousand rows? Search on the server', '¿Más de mil filas? Busca en el servidor')}</p>
          <p class="usage-card__text">${L('O padrão é o mesmo: os filtros mandam o estado, o servidor devolve uma página e o total. A tabela nunca precisa ter tudo de uma vez.', 'The pattern is the same: the filters send the state, the server returns one page and the total. The table never needs everything at once.', 'El patrón es el mismo: los filtros envían el estado, el servidor devuelve una página y el total. La tabla nunca necesita todo de una vez.')}</p>
        </article>
      </div>`,
    )}
  </div>`;
}

/* ───────── Comportamento ───────── */

export function mount(root) {
  const cleanups = [];
  const stage = root.querySelector('.dl-screen');
  const rowsEl = stage.querySelector('[data-dl-rows]');
  const emptyEl = stage.querySelector('[data-dl-empty]');
  const tableWrap = stage.querySelector('.dl-table');
  const bulk = stage.querySelector('[data-dl-bulk]');
  const filtersHost = stage.querySelector('[data-dl-filters]');
  const countEl = stage.querySelector('[data-dl-count]');
  const pageBox = stage.querySelector('[data-dl-select-page]');

  let people = seed();
  const selected = new Set();
  let sort = { key: 'nome', dir: 'ascending' };
  const fmt = dateFormat({ day: 'numeric', month: 'short' });
  let rowMenus = [];

  const config = filterConfig();
  const visible = () => {
    const state = filters.value;
    const q = normalize(state.q).trim();
    const list = people.filter((p) => (!q || normalize(`${p.name} ${p.email}`).includes(q)) && (!state.funcao || p.role === state.funcao) && (!state.status || p.status === state.status));
    const dir = sort.dir === 'ascending' ? 1 : -1;
    const by = sort.key === 'nome' ? (a, b) => a.name.localeCompare(b.name, locale()) : (a, b) => a.seen - b.seen;
    return list.sort((a, b) => by(a, b) * dir);
  };

  const pages = createPagination(stage.querySelector('[data-dl-pages]'), {
    total: people.length,
    pageSize: PAGE_SIZE,
    onChange: () => {
      selected.clear();
      render();
    },
  });

  const filters = createFilters(filtersHost, {
    ...config,
    onChange: () => {
      selected.clear();
      pages.setPage(1);
      render();
    },
  });

  function syncBulk() {
    const n = selected.size;
    bulk.hidden = n === 0;
    filtersHost.hidden = n > 0;
    countEl.textContent = n ? selectedText(n) : '';
    const onPage = [...rowsEl.querySelectorAll('[data-dl-select]')];
    const checked = onPage.filter((b) => b.checked).length;
    pageBox.checked = onPage.length > 0 && checked === onPage.length;
    pageBox.indeterminate = checked > 0 && checked < onPage.length;
  }

  function render() {
    rowMenus.forEach((m) => m.destroy());
    rowMenus = [];
    const list = visible();
    pages.setTotal(list.length);
    const start = (pages.page - 1) * PAGE_SIZE;
    const slice = list.slice(start, start + PAGE_SIZE);
    rowsEl.innerHTML = slice.map((p) => rowHtml(p, selected, fmt)).join('');
    emptyEl.hidden = list.length > 0;
    stage.querySelector('[data-dl-pages]').hidden = list.length <= PAGE_SIZE;
    filters.setCount(list.length, people.length);
    stage.querySelectorAll('[data-dl-sort-col]').forEach((th) => {
      const on = th.dataset.dlSortCol === sort.key;
      if (on) th.setAttribute('aria-sort', sort.dir);
      else th.removeAttribute('aria-sort');
      th.querySelector('[data-dl-sort-icon]').innerHTML = sortIcon(on ? sort.dir : null);
    });
    rowsEl.querySelectorAll('[data-dl-row-menu]').forEach((btn) => rowMenus.push(rowMenu(btn)));
    syncBulk();
  }

  /* Remover e desativar: na hora, com Desfazer */
  const apply = (ids, change, message) => {
    const before = people.map((p) => ({ ...p }));
    people = change(people);
    selected.clear();
    render();
    tableWrap.focus();
    toast(message(ids.length), {
      tone: 'success',
      action: {
        label: L('Desfazer', 'Undo', 'Deshacer'),
        onClick: () => {
          people = before;
          render();
        },
      },
    });
  };
  const remove = (ids) =>
    apply(ids, (list) => list.filter((p) => !ids.includes(p.id)), (n) => L(n === 1 ? '1 pessoa removida' : `${n} pessoas removidas`, n === 1 ? '1 person removed' : `${n} people removed`, n === 1 ? '1 persona eliminada' : `${n} personas eliminadas`));
  const setStatus = (ids, status) =>
    apply(
      ids,
      (list) => list.map((p) => (ids.includes(p.id) ? { ...p, status } : p)),
      (n) =>
        status === 'desativado'
          ? L(n === 1 ? '1 pessoa desativada' : `${n} pessoas desativadas`, n === 1 ? '1 person deactivated' : `${n} people deactivated`, n === 1 ? '1 persona desactivada' : `${n} personas desactivadas`)
          : L(n === 1 ? '1 pessoa reativada' : `${n} pessoas reativadas`, n === 1 ? '1 person reactivated' : `${n} people reactivated`, n === 1 ? '1 persona reactivada' : `${n} personas reactivadas`),
    );
  const setRole = (ids, role) => {
    const label = ROLES().find((r) => r.value === role).label;
    apply(ids, (list) => list.map((p) => (ids.includes(p.id) ? { ...p, role } : p)), (n) => L(`${n === 1 ? '1 pessoa agora é' : `${n} pessoas agora são`} ${label}`, `${n === 1 ? '1 person is' : `${n} people are`} now ${label}`, `${n === 1 ? '1 persona ahora es' : `${n} personas ahora son`} ${label}`));
  };

  function rowMenu(btn) {
    const person = people.find((p) => p.id === btn.dataset.dlRowMenu);
    const off = person.status === 'desativado';
    return createMenu(btn, {
      mode: 'action',
      options: [
        { value: 'copy', label: L('Copiar e-mail', 'Copy email', 'Copiar correo'), icon: 'copy' },
        { value: 'status', label: off ? L('Reativar', 'Reactivate', 'Reactivar') : L('Desativar', 'Deactivate', 'Desactivar'), icon: off ? 'play' : 'pause' },
        { type: 'separator' },
        { value: 'remove', label: L('Remover', 'Remove', 'Eliminar'), icon: 'trash', tone: 'danger' },
      ],
      onChange: (value) => {
        if (value === 'copy') copyText(person.email);
        if (value === 'status') setStatus([person.id], off ? 'ativo' : 'desativado');
        if (value === 'remove') remove([person.id]);
      },
    });
  }

  const roleMenu = createMenu(stage.querySelector('[data-dl-role]'), {
    mode: 'action',
    options: ROLES().map((r) => ({ value: r.value, label: r.label })),
    onChange: (role) => setRole([...selected], role),
  });

  const onClick = (event) => {
    const t = event.target;
    const sortBtn = t.closest('[data-dl-sort]');
    if (sortBtn) {
      const key = sortBtn.dataset.dlSort;
      sort = sort.key === key ? { key, dir: sort.dir === 'ascending' ? 'descending' : 'ascending' } : { key, dir: key === 'acesso' ? 'descending' : 'ascending' };
      render();
      return;
    }
    if (t.closest('[data-dl-remove]')) return remove([...selected]);
    if (t.closest('[data-dl-deactivate]')) return setStatus([...selected], 'desativado');
    if (t.closest('[data-dl-clear-selection]')) {
      selected.clear();
      render();
      filtersHost.querySelector('input')?.focus();
      return;
    }
    if (t.closest('[data-dl-clear-filters]')) return filters.clear();
    if (t.closest('[data-dl-invite]')) return toast(L('No app de verdade, aqui abre o convite.', 'In a real app, the invite opens here.', 'En la app de verdad, aquí se abre la invitación.'), { icon: 'mail' });
    if (t.closest('[data-dl-export]')) return toast(L('Exportando as pessoas filtradas…', 'Exporting the filtered people…', 'Exportando las personas filtradas…'), { icon: 'download' });
  };
  const onChange = (event) => {
    const box = event.target;
    if (box.matches('[data-dl-select]')) {
      if (box.checked) selected.add(box.dataset.dlSelect);
      else selected.delete(box.dataset.dlSelect);
      box.closest('tr').toggleAttribute('data-selected', box.checked);
      syncBulk();
    } else if (box.matches('[data-dl-select-page]')) {
      rowsEl.querySelectorAll('[data-dl-select]').forEach((b) => {
        b.checked = box.checked;
        if (box.checked) selected.add(b.dataset.dlSelect);
        else selected.delete(b.dataset.dlSelect);
        b.closest('tr').toggleAttribute('data-selected', box.checked);
      });
      syncBulk();
    }
  };
  stage.addEventListener('click', onClick);
  stage.addEventListener('change', onChange);

  render();

  cleanups.push(
    () => stage.removeEventListener('click', onClick),
    () => stage.removeEventListener('change', onChange),
    () => rowMenus.forEach((m) => m.destroy()),
    () => roleMenu.destroy(),
    () => filters.destroy(),
    () => pages.destroy(),
    mountDocNav(root),
    mountCodeCopy(root),
  );
  return () => cleanups.forEach((fn) => fn?.());
}
