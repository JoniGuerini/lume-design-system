import { useMemo, useState } from 'react';
import { Table, Badge, BarChart, LineChart, DonutChart, StatTile, Calendar, CodeBlock, type SortDirection, type CalendarView } from '../../../react';
import { mount } from './mount';

export default {
  title: 'React/Dados e gráficos',
  id: 'react-dados',
  parameters: { docs: { description: { component: 'Tabela, gráficos, calendário e bloco de código em React.\n\nDocumentação: https://lumeui.dev/#/recursos/react' } } },
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
