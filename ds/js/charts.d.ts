// Gerado por scripts/build-react.mjs. Não edite.
type Chart = { update(options: any): void; setLoading(on: boolean): void; destroy(): void; el: HTMLElement };
export declare function createBarChart(host: HTMLElement, options: any): Chart;
export declare function createLineChart(host: HTMLElement, options: any): Chart;
export declare function createDonutChart(host: HTMLElement, options: any): Chart;
export declare function createHeatmap(host: HTMLElement, options: any): Chart;
export declare function createCalendarHeatmap(host: HTMLElement, options: any): Chart;
export declare function createScatterChart(host: HTMLElement, options: any): Chart;
export declare function sparklineHtml(values: number[], options?: Record<string, unknown>): string;
export declare function statTileHtml(options: Record<string, unknown>): string;
export declare function meterHtml(options: Record<string, unknown>): string;
export declare function chartFormatter(format?: unknown): (value: number) => string;
/** @deprecated Use chartFormatter. */
export declare function formatter(format?: unknown): (value: number) => string;
