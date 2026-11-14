import { useMemo, useState } from 'react';
import { Table, Badge, BarChart, LineChart, DonutChart, StatTile, Calendar, CodeBlock, Carousel, ResizablePanels, ResizablePanel, ImageGallery, SortableList, Kanban, type KanbanColumn, type SortDirection, type CalendarView } from '../../../react';
import { mount } from './mount';

export default {
  title: 'React/Dados e gráficos',
  id: 'react-dados',
  parameters: { docs: { description: { component: 'Tabela, gráficos, calendário, carrossel, painéis redimensionáveis, visualizador de imagem, lista arrastável, kanban e bloco de código em React.\n\nDocumentação: https://lumeui.dev/#/recursos/react' } } },
};

type Row = { id: string; nome: string; status: string; telas: number };
const ROWS: Row[] = [
  { id: 'botao', nome: 'Botão', status: 'Pronto', telas: 248 },
  { id: 'chip', nome: 'Chip', status: 'Pronto', telas: 132 },
  { id: 'tooltip', nome: 'Tooltip', status: 'Revisão', telas: 201 },
];

function Tabela() {
  const [sort, setSort] = useState<{ key: string; direction: SortDirection } | null>({ key: 'telas', direction: 'descending' });
  const [sel, setSel] = useState<string[]>([]);
  const rows = useMemo(() => {
    if (!sort) return ROWS;
    const k = sort.key as keyof Row;
    return [...ROWS].sort((a, b) => (a[k] > b[k] ? 1 : -1) * (sort.direction === 'ascending' ? 1 : -1));
  }, [sort]);
  return (
    <Table
      caption="Componentes" description="Uso nas telas" hover rows={rows} rowKey={(r) => r.id}
      sort={sort} onSortChange={setSort} selected={sel} onSelectionChange={setSel}
      columns={[
        { key: 'nome', label: 'Componente', strong: true, sortable: true },
        { key: 'status', label: 'Status', render: (r) => <Badge size="sm" tone={r.status === 'Pronto' ? 'success' : 'warning'}>{r.status}</Badge> },
        { key: 'telas', label: 'Telas', num: true, sortable: true },
      ]}
    />
  );
}

export const TabelaStory = { name: 'Table', render: () => mount(<div style={{ maxWidth: 640 }}><Tabela /></div>) };

export const Graficos = {
  name: 'Gráficos',
  render: () =>
    mount(
      <div style={{ display: 'grid', gap: 16, maxWidth: 720 }}>
        <StatTile label="Receita" value={128400} format="currency-compact" delta={0.124} deltaLabel="vs. mês anterior" trend={[3, 5, 4, 6, 8, 7, 9]} />
        <BarChart title="Vendas por mês" categories={['Jan', 'Fev', 'Mar', 'Abr']} series={[{ name: 'Loja', values: [120, 180, 150, 210] }]} format="currency" card />
        <LineChart title="Visitas" categories={['1', '2', '3', '4', '5']} series={[{ name: 'Este mês', values: [3, 5, 4, 7, 9] }, { name: 'Anterior', values: [2, 3, 3, 4, 5], muted: true }]} card />
        <DonutChart title="Pagamentos" items={[{ name: 'Pix', value: 420 }, { name: 'Cartão', value: 310 }, { name: 'Boleto', value: 90 }]} card />
      </div>,
    ),
};

function Agenda() {
  const [view, setView] = useState<CalendarView>('month');
  const [date, setDate] = useState(new Date(2026, 10, 13));
  return (
    <Calendar view={view} date={date} onChange={(s) => { setView(s.view); setDate(s.date); }}
      events={[
        { id: 'a', title: 'Revisão do roteiro', start: new Date(2026, 10, 13, 9), end: new Date(2026, 10, 13, 10), tone: 'brand' },
        { id: 'b', title: 'Feriado', start: new Date(2026, 10, 15), end: new Date(2026, 10, 16), allDay: true, tone: 'success' },
      ]} />
  );
}

export const CalendarioStory = { name: 'Calendar', render: () => mount(<Agenda />) };

export const Codigo = { name: 'CodeBlock', render: () => mount(<CodeBlock code={'npm run build\nnpm run dev'} />) };

const DESTAQUES = [
  ['01 · Tokens', 'Uma fonte só para cores, espaços e tipos'],
  ['02 · Componentes', 'Peças prontas para montar telas'],
  ['03 · Padrões', 'Telas inteiras, já resolvidas'],
];

function Destaques() {
  const [index, setIndex] = useState(0);
  return (
    <div style={{ width: 'min(560px, 100%)' }}>
      <Carousel label="Destaques do Lume" loop index={index} onChange={setIndex}>
        {DESTAQUES.map(([eyebrow, title]) => (
          <article key={eyebrow} className="ds-carousel__card">
            <p className="ds-carousel__eyebrow">{eyebrow}</p>
            <h3 className="ds-carousel__title">{title}</h3>
          </article>
        ))}
      </Carousel>
    </div>
  );
}

export const Carrossel = { name: 'Carousel', render: () => mount(<Destaques />) };

const pane = { padding: 16, height: '100%', boxSizing: 'border-box' as const };
const label = { margin: 0, color: 'var(--ds-color-fg-subtle)', font: 'var(--ds-text-label-sm)' };

function Paineis() {
  const [sizes, setSizes] = useState<number[]>([]);
  return (
    <div style={{ width: 'min(720px, 100%)' }}>
      <div style={{ height: 280, border: '1px solid var(--ds-color-border-subtle)', borderRadius: 'var(--ds-radius-xl)', background: 'var(--ds-color-bg-surface)', overflow: 'hidden' }}>
        <ResizablePanels label="Editor" grip onChange={setSizes} style={{ width: '100%', height: '100%' }}>
          <ResizablePanel size={30} min={20} max={50} collapsible>
            <div style={pane}><p style={label}>00 · Componentes</p></div>
          </ResizablePanel>
          <ResizablePanel min={40}>
            <ResizablePanels label="Prévia e código" direction="vertical">
              <ResizablePanel min={30}>
                <div style={pane}><p style={label}>01 · Prévia</p></div>
              </ResizablePanel>
              <ResizablePanel size={45} min={25}>
                <div style={pane}><p style={label}>02 · Código</p></div>
              </ResizablePanel>
            </ResizablePanels>
          </ResizablePanel>
        </ResizablePanels>
      </div>
      <p style={{ ...label, marginTop: 12 }}>{sizes.length ? `onChange: [${sizes.map(Math.round).join(', ')}]` : 'Arraste a divisória.'}</p>
    </div>
  );
}

export const PaineisRedimensionaveis = { name: 'ResizablePanels', render: () => mount(<Paineis />) };

const CAPTURAS = 'https://lumeui.dev/assets/capturas/';
const SHOTS = [
  ['inicio', 'Início · tema claro', 'A página inicial do Lume no tema claro.'],
  ['cores', 'Cores · tema escuro', 'A página Cores do Lume no tema escuro.'],
  ['botao', 'Botão · tema claro', 'A página Botão do Lume no tema claro.'],
  ['graficos', 'Gráficos · tema escuro', 'A página Gráficos do Lume no tema escuro.'],
].map(([id, caption, alt]) => ({ src: `${CAPTURAS}${id}.jpg`, thumb: `${CAPTURAS}${id}-mini.jpg`, caption, alt }));

function Galeria() {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <div style={{ width: 'min(560px, 100%)' }}>
      <ImageGallery images={SHOTS} onChange={setIndex} onClose={() => setIndex(null)} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }} />
      <p style={{ ...label, marginTop: 12 }}>{index === null ? 'Clique numa captura.' : `onChange: ${index}`}</p>
    </div>
  );
}

export const VisualizadorDeImagem = { name: 'ImageGallery', render: () => mount(<Galeria />) };

const FUNDAMENTOS = [
  { id: 'cores', nome: 'Cores', meta: '15 paletas' },
  { id: 'tipografia', nome: 'Tipografia', meta: 'Geist' },
  { id: 'icones', nome: 'Ícones', meta: '154 ícones' },
  { id: 'espacamento', nome: 'Espaçamento', meta: 'base 8' },
];

function Lista() {
  const [itens, setItens] = useState(FUNDAMENTOS);
  return (
    <div style={{ width: 'min(420px, 100%)' }}>
      <SortableList
        label="Ordem dos fundamentos na sidebar"
        items={itens}
        onChange={setItens}
        renderItem={(i) => (
          <>
            <span className="ds-sortable__label">{i.nome}</span>
            <span className="ds-sortable__meta">{i.meta}</span>
          </>
        )}
      />
      <p style={{ ...label, marginTop: 12 }} data-ordem>{itens.map((i) => i.id).join(' · ')}</p>
    </div>
  );
}

type Etapa = { id: string; titulo: string; versao: string };
const COLUNAS: KanbanColumn<Etapa>[] = [
  { id: 'planejado', title: 'Planejado', items: [{ id: 'editor', titulo: 'Editor de texto rico', versao: '0.38' }, { id: 'estavel', titulo: 'Versão estável', versao: '1.0' }] },
  { id: 'andamento', title: 'Em andamento', items: [{ id: 'kanban', titulo: 'Lista arrastável e kanban', versao: '0.37' }] },
  { id: 'feito', title: 'Feito', items: [{ id: 'visualizador', titulo: 'Visualizador de imagem', versao: '0.36' }] },
];

function Quadro() {
  const [colunas, setColunas] = useState(COLUNAS);
  return (
    <div style={{ width: 'min(860px, 100%)' }}>
      <Kanban
        label="Roadmap do Lume"
        columns={colunas}
        onChange={setColunas}
        renderCard={(c) => (
          <>
            <p className="ds-kanban__card-title">{c.titulo}</p>
            <div className="ds-kanban__card-meta">
              <Badge size="sm">{c.versao}</Badge>
            </div>
          </>
        )}
      />
      <p style={{ ...label, marginTop: 12 }} data-colunas>{colunas.map((c) => `${c.id}: ${c.items.map((i) => i.id).join(', ')}`).join(' · ')}</p>
    </div>
  );
}

export const ListaArrastavel = { name: 'SortableList', render: () => mount(<Lista />) };
export const QuadroKanban = { name: 'Kanban', render: () => mount(<Quadro />) };
