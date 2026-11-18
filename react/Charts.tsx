import { useEffect, useRef } from 'react';
import {
  createBarChart, createLineChart, createDonutChart, createHeatmap, createCalendarHeatmap, createScatterChart,
  sparklineHtml, statTileHtml, meterHtml,
} from '../js/charts.js';
import { useLocale } from './useLocale';
import { stableKey, defined } from './useController';

type Format = string | ((value: number) => string);

/** Opções que todo gráfico aceita. */
export interface ChartBase {
  title?: string;
  subtitle?: string;
  /** Nome para leitores de tela, quando não há título. */
  label?: string;
  /** 'number', 'currency', 'percent', 'compact', 'currency-compact'… ou uma função. */
  format?: Format;
  /** Formato do eixo, quando difere do tooltip. */
  axisFormat?: Format;
  height?: number;
  /** Superfície de cartão em volta. */
  card?: boolean;
  /** Botão de ver como tabela. Padrão: sim. */
  table?: boolean;
  /** Linhas apagadas enquanto os dados chegam. */
  loading?: boolean;
  className?: string;
}

export interface Series {
  name: string;
  values: Array<number | null>;
  color?: string;
  /** Linha de contexto, em cinza (período anterior). */
  muted?: boolean;
}

type Chart = { update(options: unknown): void; setLoading(on: boolean): void; destroy(): void };

/** Liga um gráfico do Lume a um <div> e atualiza quando as opções mudam (pelo conteúdo, não pela referência). */
function useChart(create: (host: HTMLElement, options: object) => Chart, { loading, className, ...options }: ChartBase & object) {
  useLocale();
  const host = useRef<HTMLDivElement>(null);
  const chart = useRef<Chart | null>(null);
  const latest = useRef(options);
  latest.current = options;
  useEffect(() => {
    const c = create(host.current!, defined({ ...latest.current, className }));
    chart.current = c;
    return () => {
      c.destroy();
      chart.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [className]);
  const key = stableKey(options);
  useEffect(() => {
    chart.current?.update(defined({ ...latest.current, className }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  useEffect(() => {
    chart.current?.setLoading(Boolean(loading));
  }, [loading]);
  return <div ref={host} />;
}

export interface BarChartProps extends ChartBase {
  categories: string[];
  series: Series[];
  orientation?: 'vertical' | 'horizontal';
  layout?: 'grouped' | 'stacked' | 'percent';
  labels?: 'auto' | 'none' | 'all' | 'max' | 'last';
  /** Índice da categoria em destaque; o resto fica cinza. */
  highlight?: number;
  /** Acima e abaixo de zero nas cores divergentes. */
  diverging?: boolean;
  /** Categorias em sequência (funil) numa rampa de um tom. */
  ordinal?: boolean;
  /** O título da dica de cada categoria, quando o eixo usa uma forma curta ("Jan" no eixo, "Janeiro de 2026" na dica). */
  tooltipLabels?: string[];
}

/** Colunas e barras. https://lumeui.dev/#/graficos/barras */
export const BarChart = (props: BarChartProps) => useChart(createBarChart, props);

export interface LineChartProps extends ChartBase {
  categories: string[];
  series: Series[];
  area?: boolean;
  stacked?: boolean;
  curve?: 'linear' | 'smooth';
  markers?: 'end' | 'none' | 'all';
  endLabels?: boolean;
  highlight?: number;
  /** Linha tracejada de meta ou limite. */
  target?: { value: number; label?: string };
  zero?: boolean;
  /** O título da dica de cada categoria, quando o eixo usa uma forma curta. */
  tooltipLabels?: string[];
}

/** Linhas e áreas. Um eixo só. https://lumeui.dev/#/graficos/linhas */
export const LineChart = (props: LineChartProps) => useChart(createLineChart, props);

export interface DonutChartProps extends ChartBase {
  items: Array<{ name: string; value: number; color?: string }>;
  center?: 'total' | { value: string | number; label?: string } | false;
  centerLabel?: string;
  /** Da enésima fatia em diante, tudo vira "Outros". Padrão: 6. */
  maxSegments?: number;
  size?: number;
  thickness?: number;
}

/** Parte do todo, até 6 fatias. https://lumeui.dev/#/graficos/rosca */
export const DonutChart = (props: DonutChartProps) => useChart(createDonutChart, props);

export interface HeatmapProps extends ChartBase {
  rows: string[];
  columns: string[];
  /** values[linha][coluna]; null = sem dado. */
  values: Array<Array<number | null>>;
  scale?: 'sequential' | 'diverging';
  steps?: 5 | 7;
  domain?: [number, number];
  center?: number;
  valueLabel?: string;
  cellHeight?: number;
  scaleLabels?: [string, string];
}

/** Matriz de intensidade. https://lumeui.dev/#/graficos/heatmap */
export const Heatmap = (props: HeatmapProps) => useChart(createHeatmap, props);

export interface CalendarHeatmapProps extends ChartBase {
  /** O primeiro dia, em ISO ('2025-11-02'). */
  start: string;
  /** Um valor por dia. */
  values: Array<number | null>;
  valueLabel?: string;
}

/** Um ano em quadradinhos, como o de contribuições. https://lumeui.dev/#/graficos/heatmap */
export const CalendarHeatmap = (props: CalendarHeatmapProps) => useChart(createCalendarHeatmap, props);

interface Axis {
  label?: string;
  format?: Format;
  zero?: boolean;
  reference?: number;
  referenceLabel?: string;
}

export interface ScatterChartProps extends ChartBase {
  series: Array<{ name: string; color?: string; points: Array<{ x: number; y: number; size?: number; label?: string }> }>;
  x?: Axis;
  y?: Axis;
  /** Com size nos pontos, vira bolhas. */
  size?: { label?: string; format?: Format; range?: [number, number] };
}

/** Dispersão e bolhas, até 3 séries. https://lumeui.dev/#/graficos/dispersao */
export const ScatterChart = (props: ScatterChartProps) => useChart(createScatterChart, props);

/* ───────── Indicadores (HTML sem estado) ───────── */

export interface StatTileProps {
  label: string;
  value: number;
  format?: Format;
  /** Variação, em fração (0.124 = 12,4%). */
  delta?: number;
  deltaFormat?: Format;
  deltaLabel?: string;
  /** Subir é bom (up), cair é bom (down) ou neutro (none). */
  good?: 'up' | 'down' | 'none';
  /** Sparkline embaixo. */
  trend?: number[];
  trendLabel?: string;
  /** Valor maior, para o número principal da tela. */
  hero?: boolean;
  href?: string;
  className?: string;
}

/** O número com rótulo, variação e tendência. https://lumeui.dev/#/graficos/indicadores */
export function StatTile(props: StatTileProps) {
  useLocale();
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: statTileHtml(defined({ ...props })) }} />;
}

export interface SparklineProps {
  values: number[];
  width?: number;
  height?: number;
  /** Para leitores de tela ("Receita nos últimos 12 meses"). */
  label?: string;
  area?: boolean;
  curve?: 'linear' | 'smooth';
  color?: string;
  /** 'last' (padrão) marca o ponto atual; 'none' tira a marca. */
  highlight?: 'last' | 'none';
  domain?: [number, number];
  className?: string;
}

/** Linha de tendência sem eixos. https://lumeui.dev/#/graficos/indicadores */
export function Sparkline({ values, ...options }: SparklineProps) {
  return <span style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: sparklineHtml(values, defined(options)) }} />;
}

export interface MeterProps {
  label: string;
  value: number;
  max?: number;
  min?: number;
  format?: Format;
  /** Frações do máximo em que vira alerta e perigo. */
  thresholds?: { warning?: number; danger?: number };
  tone?: 'brand' | 'warning' | 'danger';
  caption?: string;
  size?: 'sm' | 'md';
  className?: string;
}

/** Uma razão contra um limite (armazenamento, cota). https://lumeui.dev/#/graficos/indicadores */
export function Meter(props: MeterProps) {
  useLocale();
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: meterHtml(defined({ ...props })) }} />;
}
