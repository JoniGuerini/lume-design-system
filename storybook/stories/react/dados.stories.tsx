import { useMemo, useState } from 'react';
import { Table, Badge, BarChart, LineChart, DonutChart, StatTile, Calendar, CodeBlock, Carousel, ResizablePanels, ResizablePanel, type SortDirection, type CalendarView } from '../../../react';
import { mount } from './mount';

export default {
  title: 'React/Dados e gráficos',
  id: 'react-dados',
  parameters: { docs: { description: { component: 'Tabela, gráficos, calendário, carrossel, painéis redimensionáveis e bloco de código em React.\n\nDocumentação: https://lumeui.dev/#/recursos/react' } } },
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
