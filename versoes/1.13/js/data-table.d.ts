// Gerado por scripts/build-react.mjs. Não edite.
export interface DataTableViewResult<Row> { filtered: Row[]; pageRows: Row[]; page: number; pages: number; total: number; counts: Record<string, Record<string, number>> }
export declare const DATA_TABLE_STATE: { query: string; filters: Record<string, string[]>; sort: { key: string; direction: 'ascending' | 'descending' } | null; page: number; pageSize: number; selected: string[]; hidden: string[]; density: 'comfortable' | 'compact' };
export declare function dataTableView<Row>(rows: Row[], config: { columns: any[]; filters?: any[] }, state: any): DataTableViewResult<Row>;
export declare function dataTableCsv<Row>(rows: Row[], columns: any[], options?: { textOf?: (column: any, row: Row) => unknown }): string;
export declare function downloadCsv(fileName: string, text: string): void;
export declare function dataTableMinWidth(columns: { width?: number; minWidth?: number }[], options?: { selectable?: boolean; actions?: boolean }): number;
export declare function createDataTable(root: HTMLElement, options?: Record<string, unknown>): { el: HTMLElement; state: Record<string, unknown>; setState(partial: Record<string, unknown>): void; setRows(rows: unknown[]): void; setLoading(loading: boolean): void; setActive(key: string | null): void; exportCsv(): void; destroy(): void };