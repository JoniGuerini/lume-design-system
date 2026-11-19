import { createDataTable } from '../../ds/js/data-table.js';
import { toast } from '../../ds/js/toast.js';
import { formatNumber } from '../../ds/js/i18n.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, usageCards, ic } from '../form-control-doc.js';
import { navigation } from '../nav.js';
import { REACT_GROUPS } from '../react.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/tabela-de-dados.css'];

/* ───────── Dados: os componentes do próprio Lume (textos no idioma atual: chame na renderização) ───────── */

const OWNERS = ['Ana Ribeiro', 'Bia Santos', 'Caio Mendes', 'Davi Lima'];
const STATUS = () => [
  { value: 'ready', label: L('Pronto', 'Done', 'Listo'), tone: 'success' },
  { value: 'review', label: L('Em revisão', 'In review', 'En revisión'), tone: 'warning' },
  { value: 'progress', label: L('Em andamento', 'In progress', 'En curso'), tone: 'brand' },
];
const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/** As páginas de Componentes, com a versão em que chegaram ao React e um dono e um status de exemplo (estáveis). */
function componentRows() {
  const group = navigation.find((g) => g.id === 'componentes');
  const since = new Map(REACT_GROUPS().flatMap((g) => g.items.map((i) => [i[2], i[3]])));
  return group.items.map((item, i) => ({
    id: item.path.split('/').pop(),
    name: item.label,
    section: item.section,
    sectionLabel: group.sectionLabel(item.section),
    since: since.get(item.path) ?? '0.26',
    owner: OWNERS[i % OWNERS.length],
    status: ['ready', 'ready', 'review', 'ready', 'progress'][i % 5],
    screens: (i * 37) % 240 + 4,
  }));
}

let rows = [];
let table = null;

function columns() {
  const status = STATUS();
  return [
    { key: 'name', label: L('Componente', 'Component', 'Componente'), sortable: true, strong: true, hideable: false },
    { key: 'sectionLabel', label: L('Seção', 'Section', 'Sección'), width: 140, sortable: true },
    {
      key: 'status',
      label: L('Status', 'Status', 'Estado'),
      width: 172,
      sortable: true,
      value: (r) => status.find((s) => s.value === r.status)?.label,
      sortValue: (r) => status.findIndex((s) => s.value === r.status),
      render: (r) => {
        const s = status.find((x) => x.value === r.status);
        return `<span class="ds-badge ds-badge--${s.tone}">${escape(s.label)}</span>`;
      },
      edit: { type: 'select', value: (r) => r.status, options: status.map(({ value, label }) => ({ value, label })), onSave: (r, v) => update(r.id, { status: v }) },
    },
    {
      key: 'owner',
      label: L('Responsável', 'Owner', 'Responsable'),
      width: 170,
      edit: {
        type: 'text',
        validate: (v) => (v.trim() ? null : L('Escreva um nome.', 'Write a name.', 'Escribe un nombre.')),
        // finge uma ida ao servidor, para mostrar o "salvando"
        onSave: (r, v) => new Promise((ok) => setTimeout(() => ok(update(r.id, { owner: v.trim() })), 500)),
      },
    },
    { key: 'since', label: 'React', width: 100, sortable: true, sortValue: (r) => r.since.split('.').map((n) => n.padStart(3, '0')).join('.'), render: (r) => `<span class="ds-table__muted">${escape(r.since)}</span>` },
    { key: 'screens', label: L('Telas', 'Screens', 'Pantallas'), width: 110, num: true, sortable: true, render: (r) => formatNumber(r.screens), search: false },
  ];
}

function update(id, patch) {
  rows = rows.map((r) => (r.id === id ? { ...r, ...patch } : r));
  table?.setRows(rows);
}

function options() {
  const sections = navigation.find((g) => g.id === 'componentes');
  const sectionIds = [...new Set(rows.map((r) => r.section))];
  return {
    caption: L('Componentes do Lume', 'Lume components', 'Componentes de Lume'),
    description: L(`${rows.length} componentes, do Botão ao Calendário`, `${rows.length} components, from Button to Calendar`, `${rows.length} componentes, del Botón al Calendario`),
    actions: `<button type="button" class="ds-btn ds-btn--primary ds-btn--sm" data-new><ds-icon name="plus" size="16"></ds-icon>${L('Novo componente', 'New component', 'Nuevo componente')}</button>`,
    rows,
    rowKey: (r) => r.id,
    rowLabel: (r) => r.name,
    columns: columns(),
    filters: [
      { key: 'section', label: L('Seção', 'Section', 'Sección'), options: sectionIds.map((id) => ({ value: id, label: sections.sectionLabel(id) })), value: (r) => r.section },
      { key: 'status', label: L('Status', 'Status', 'Estado'), options: STATUS().map(({ value, label }) => ({ value, label })), value: (r) => r.status },
    ],
    search: { placeholder: L('Buscar componentes', 'Search components', 'Buscar componentes'), shortcut: '/' },
    rowActions: [
      { value: 'open', label: L('Abrir a página', 'Open the page', 'Abrir la página'), icon: 'external-link' },
      { value: 'copy', label: L('Copiar o nome', 'Copy the name', 'Copiar el nombre'), icon: 'copy' },
      { type: 'separator' },
      { value: 'archive', label: L('Arquivar', 'Archive', 'Archivar'), icon: 'trash', tone: 'danger' },
    ],
    onRowAction: (value, row) => {
      if (value === 'open') location.hash = `#/componentes/${row.id}`;
      else toast(value === 'copy' ? L(`“${row.name}” copiado`, `“${row.name}” copied`, `“${row.name}” copiado`) : L(`“${row.name}” arquivado (de mentira)`, `“${row.name}” archived (not really)`, `“${row.name}” archivado (de mentira)`), { tone: 'success' });
    },
    bulkActions: [{ value: 'review', label: L('Mandar para revisão', 'Send to review', 'Enviar a revisión'), icon: 'refresh' }],
    onBulkAction: (value, list) => {
      list.forEach((r) => (rows = rows.map((x) => (x.id === r.id ? { ...x, status: 'review' } : x))));
      table.setRows(rows);
      table.setState({ selected: [] });
      toast(L(`${list.length} em revisão`, `${list.length} in review`, `${list.length} en revisión`), { tone: 'success' });
    },
    onRowClick: (row) => table.setActive(row.id),
    pageSize: 10,
    exportCsv: { fileName: L('componentes-lume', 'lume-components', 'componentes-lume') },
    empty: { title: L('Nenhum componente ainda', 'No components yet', 'Ningún componente todavía') },
  };
}

const FEATURES = () => [
  [L('Busca', 'Search', 'Búsqueda'), ic("search: { shortcut: '/' }"), L('Olha todas as colunas (ou só as que você disser), sem acento e sem maiúscula.', 'Looks at every column (or only the ones you choose), ignoring accents and case.', 'Mira todas las columnas (o solo las que digas), sin tildes ni mayúsculas.')],
  [L('Filtros', 'Filters', 'Filtros'), ic('filters'), L('Um Chip por filtro, com caixas de marcar e quantas linhas cada opção traria.', 'One Chip per filter, with checkboxes and how many rows each option would bring.', 'Un Chip por filtro, con casillas y cuántas filas traería cada opción.')],
  [L('Ordem', 'Sort', 'Orden'), ic('sortable'), L('Crescente, decrescente e de volta à ordem original.', 'Ascending, descending, and back to the original order.', 'Ascendente, descendente y de vuelta al orden original.')],
  [L('Colunas', 'Columns', 'Columnas'), ic('hideable · hidden · width'), L('Escolher as visíveis; com largura, elas não pulam ao trocar de página.', 'Pick the visible ones; with a width, they don’t jump when changing pages.', 'Elegir las visibles; con ancho, no saltan al cambiar de página.')],
  [L('Densidade', 'Density', 'Densidad'), ic("density: 'compact'"), L('Linhas de 52 ou de 40 px.', 'Rows of 52 or 40 px.', 'Filas de 52 o de 40 px.')],
  [L('Lote', 'Bulk', 'Lote'), ic('bulkActions'), L('Marcou, a barra de ações em lote toma o lugar da barra de ferramentas. Shift marca um intervalo.', 'Once marked, the bulk bar takes the toolbar’s place. Shift marks a range.', 'Al marcar, la barra de acciones en lote toma el lugar de la barra de herramientas. Shift marca un intervalo.')],
  [L('Ações da linha', 'Row actions', 'Acciones de la fila'), ic('rowActions'), L('O botão … abre o Menu. Aparece com o mouse, o foco ou a linha ativa; no toque, sempre.', 'The … button opens the Menu. It shows with the mouse, focus, or the active row; on touch, always.', 'El botón … abre el Menú. Aparece con el ratón, el foco o la fila activa; en táctil, siempre.')],
  [L('Linha ativa', 'Active row', 'Fila activa'), ic('onRowClick · activeKey'), L('Clique ou Enter abre a linha; a ativa ganha o fundo selecionado e o fio do indicador.', 'Click or Enter opens the row; the active one gets the selected background and the indicator line.', 'Clic o Enter abre la fila; la activa recibe el fondo seleccionado y la línea del indicador.')],
  [L('Edição na célula', 'Cell editing', 'Edición en la celda'), ic("edit: { type: 'text' | 'currency' | 'select' }"), L('O valor vira campo ou menu. Enter salva, Esc desfaz; uma Promise mostra o “salvando”.', 'The value turns into a field or menu. Enter saves, Esc undoes; a Promise shows “saving”.', 'El valor se vuelve campo o menú. Enter guarda, Esc deshace; una Promise muestra el “guardando”.')],
  ['CSV', ic('exportCsv'), L('Exporta o que está filtrado, ou só as marcadas. Separador ; quando o idioma usa vírgula decimal.', 'Exports what’s filtered, or just the marked rows. Separator ; when the language uses a decimal comma.', 'Exporta lo filtrado, o solo las marcadas. Separador ; cuando el idioma usa coma decimal.')],
];

export default function renderTabelaDeDados(page) {
  return controlPage(page, {
    lead: L('A Tabela com o estado dentro: busca, filtros, ordem, páginas, seleção com ações em lote, colunas, densidade, edição na célula e CSV. Para só mostrar dados, a Tabela basta.', 'The Table with state inside: search, filters, sort, pages, selection with bulk actions, columns, density, cell editing, and CSV. To just show data, the Table is enough.', 'La Tabla con el estado adentro: búsqueda, filtros, orden, páginas, selección con acciones en lote, columnas, densidad, edición en la celda y CSV. Para solo mostrar datos, alcanza la Tabla.'),
    stats: [
      [L('recursos', 'features', 'recursos'), 10],
      [L('densidades', 'densities', 'densidades'), 2],
      [L('edição', 'editing', 'edición'), L('3 tipos', '3 types', '3 tipos')],
      [L('dependências', 'dependencies', 'dependencias'), 0],
    ],
    sections: [
      {
        id: 'ao-vivo',
        title: L('Ao vivo', 'Live', 'En vivo'),
        desc: L(`Os componentes do próprio Lume. Busque com /, filtre, ordene, marque algumas linhas, edite o status e o responsável e abra o menu … de uma linha.`, `Lume’s own components. Search with /, filter, sort, mark some rows, edit the status and the owner, and open a row’s … menu.`, `Los componentes del propio Lume. Busca con /, filtra, ordena, marca algunas filas, edita el estado y el responsable y abre el menú … de una fila.`),
        html: '<div data-data-table></div>',
      },
      {
        id: 'recursos',
        title: L('Recursos', 'Features', 'Recursos'),
        desc: L('Cada um liga com uma opção. Sem ela, a parte não aparece.', 'Each one turns on with an option. Without it, that part doesn’t show.', 'Cada uno se activa con una opción. Sin ella, esa parte no aparece.'),
        html: `<ul class="td-features" role="list">${FEATURES().map(([t, code, text]) => `<li><p class="td-features__title">${t}${code}</p><p class="td-features__text">${text}</p></li>`).join('')}</ul>`,
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`No HTML, ${ic('render')} devolve HTML em texto; no React, ${ic('DataTable')} recebe JSX. As opções são as mesmas. Depois de salvar uma célula, quem é dono dos dados manda a lista nova.`, `In HTML, ${ic('render')} returns HTML as text; in React, ${ic('DataTable')} takes JSX. The options are the same. After a cell is saved, whoever owns the data sends the new list.`, `En HTML, ${ic('render')} devuelve HTML en texto; en React, ${ic('DataTable')} recibe JSX. Las opciones son las mismas. Después de guardar una celda, quien es dueño de los datos manda la lista nueva.`),
        html: codeBlock(`<div id="clientes"></div>

<script type="module">
  import { createDataTable } from 'https://lumeui.dev/v/1.13/lume.js';

  const tabela = createDataTable(document.querySelector('#clientes'), {
    caption: '${L('Clientes', 'Clients', 'Clientes')}',
    rows: clientes,
    rowKey: (c) => c.id,
    rowLabel: (c) => c.nome,
    columns: [
      { key: 'nome', label: '${L('Nome', 'Name', 'Nombre')}', sortable: true, strong: true },
      { key: 'valor', label: '${L('Valor', 'Amount', 'Valor')}', num: true, sortable: true, width: 140,
        render: (c) => brl(c.valor),
        edit: { type: 'currency', onSave: (c, valor) => salvar(c.id, { valor }) } },
    ],
    filters: [{ key: 'freq', label: '${L('Frequência', 'Frequency', 'Frecuencia')}', options, value: (c) => c.freq }],
    search: { shortcut: '/' },
    rowActions: [{ value: 'abrir', label: '${L('Abrir ficha', 'Open record', 'Abrir ficha')}' }],
    onRowAction: (value, cliente) => …,
    bulkActions: [{ value: 'presenca', label: '${L('Marcar presença', 'Mark attendance', 'Marcar asistencia')}' }],
    onBulkAction: (value, lista) => …,
    onRowClick: (cliente) => tabela.setActive(cliente.id),
    exportCsv: { fileName: 'clientes' },
  });
  // ${L('depois de salvar', 'after saving', 'después de guardar')}: tabela.setRows(listaNova);
</script>

// React
<DataTable
  caption="${L('Clientes', 'Clients', 'Clientes')}"
  rows={clientes}
  rowKey={(c) => c.id}
  columns={colunas}
  filters={filtros}
  search={{ shortcut: '/' }}
  bulkActions={[{ value: 'presenca', label: '${L('Marcar presença', 'Mark attendance', 'Marcar asistencia')}' }]}
  onBulkAction={(value, lista) => …}
  onRowClick={(c) => setAberto(c.id)}
  activeKey={aberto}
/>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Uma tabela de verdade, com cada controle nomeado.', 'A real table, with every control named.', 'Una tabla de verdad, con cada control nombrado.'),
        html: a11yList([
          [L('Nome da tabela', 'Table name', 'Nombre de la tabla'), L(`O título nomeia a tabela (${ic('aria-labelledby')}); ordem em ${ic('aria-sort')}.`, `The title names the table (${ic('aria-labelledby')}); sort in ${ic('aria-sort')}.`, `El título nombra la tabla (${ic('aria-labelledby')}); orden en ${ic('aria-sort')}.`)],
          [L('Linhas com nome', 'Named rows', 'Filas con nombre'), L(`${ic('rowLabel')} dá nome aos controles de cada linha: “Selecionar Botão”, “Ações de Botão”, “Editar status de Botão”.`, `${ic('rowLabel')} names each row’s controls: “Select Button”, “Actions for Button”, “Edit status for Button”.`, `${ic('rowLabel')} nombra los controles de cada fila: “Seleccionar Botón”, “Acciones de Botón”, “Editar estado de Botón”.`)],
          [L('Linha clicável', 'Clickable row', 'Fila clicable'), L('Recebe foco com Tab e abre com Enter; a ativa leva aria-current.', 'Gets focus with Tab and opens with Enter; the active one has aria-current.', 'Recibe foco con Tab y se abre con Enter; la activa lleva aria-current.'), ['Tab', 'Enter']],
          [L('Mudanças ditas', 'Changes announced', 'Cambios anunciados'), L('O intervalo e as linhas marcadas ficam em regiões de status: o leitor de tela ouve “1–10 de 24” e “3 selecionadas”.', 'The range and the marked rows live in status regions: screen readers hear “1–10 of 24” and “3 selected”.', 'El intervalo y las filas marcadas quedan en regiones de estado: el lector de pantalla oye “1–10 de 24” y “3 seleccionadas”.')],
          [L('Edição pelo teclado', 'Editing by keyboard', 'Edición por teclado'), L('Enter salva, Esc desfaz e devolve o foco ao valor.', 'Enter saves, Esc undoes and returns focus to the value.', 'Enter guarda, Esc deshace y devuelve el foco al valor.'), ['Enter', 'Esc']],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Além dos da Tabela, da Paginação e do Chip.', 'On top of the Table, Pagination, and Chip tokens.', 'Además de los de la Tabla, la Paginación y el Chip.'),
        html: tokenTable([
          ['color.bg.surface', L('Cartão', 'Card', 'Tarjeta')],
          ['color.bg.inverse', L('Barra de lote', 'Bulk bar', 'Barra de lote')],
          ['color.bg.selected', L('Linhas marcadas e a ativa', 'Marked rows and the active one', 'Filas marcadas y la activa')],
          ['color.brand.indicator', L('Fio da linha ativa', 'Active row line', 'Línea de la fila activa')],
          ['radius.xl', L('Cantos do cartão', 'Card corners', 'Esquinas de la tarjeta')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: listas de trabalho', 'Do: working lists', 'Haz: listas de trabajo'), L('Clientes, sessões, pedidos: dados que a pessoa procura, filtra e muda.', 'Clients, sessions, orders: data people look for, filter, and change.', 'Clientes, sesiones, pedidos: datos que la persona busca, filtra y cambia.')],
          ['dont', L('Evite: tabela para mostrar', 'Avoid: a table just to show', 'Evita: tabla solo para mostrar'), L('Cinco linhas fixas não pedem busca nem filtro. Use a Tabela.', 'Five fixed rows don’t call for search or filters. Use the Table.', 'Cinco filas fijas no piden búsqueda ni filtro. Usa la Tabla.')],
          ['tip', L('Muitos dados?', 'Lots of data?', '¿Muchos datos?'), L(`Até alguns milhares de linhas, a conta é no navegador. Acima disso, busque no servidor e use ${ic('onStateChange')} para pedir a página certa.`, `Up to a few thousand rows, the math runs in the browser. Beyond that, search on the server and use ${ic('onStateChange')} to request the right page.`, `Hasta algunos miles de filas, la cuenta va en el navegador. Más allá, busca en el servidor y usa ${ic('onStateChange')} para pedir la página correcta.`)],
        ]),
      },
    ],
  });
}

export function mount(root) {
  rows = componentRows();
  table = createDataTable(root.querySelector('[data-data-table]'), options());
  const onNew = (event) => {
    if (event.target.closest('[data-new]')) toast(L('Aqui abriria o cadastro.', 'The form would open here.', 'Aquí se abriría el registro.'), { icon: 'info' });
  };
  root.addEventListener('click', onNew);
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    table?.destroy();
    table = null;
    root.removeEventListener('click', onNew);
    unmountCopy();
    unmountNav();
  };
}
