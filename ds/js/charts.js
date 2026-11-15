/**
 * Lume — gráficos.
 *
 *   import { createBarChart, createLineChart, createDonutChart, createHeatmap, createCalendarHeatmap, createScatterChart,
 *            sparklineHtml, statTileHtml, meterHtml } from './ds/js/charts.js';
 *
 *   const chart = createBarChart(document.querySelector('#vendas'), {
 *     title: 'Vendas por mês',
 *     categories: ['Jan', 'Fev', 'Mar'],
 *     series: [{ name: 'Loja', values: [120, 180, 150] }],
 *     format: 'currency',
 *   });
 *   chart.update({ series: [...] });   // mesma API em todos
 *   chart.destroy();
 *
 * Todo gráfico desenha em SVG puro, segue o tema (cores são tokens), tem tooltip no hover e no
 * teclado (setas), legenda que esconde séries sem repintar as outras e uma vista em tabela.
 */
export { createBarChart } from './charts/bar.js';
export { createLineChart } from './charts/line.js';
export { createDonutChart } from './charts/donut.js';
export { createHeatmap, createCalendarHeatmap } from './charts/heatmap.js';
export { createScatterChart } from './charts/scatter.js';
export { sparklineHtml, statTileHtml, meterHtml } from './charts/figures.js';
import { formatter as chartFormatter } from './charts/core.js';

export { chartFormatter };
