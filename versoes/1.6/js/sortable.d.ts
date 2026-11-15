// Gerado por scripts/build-react.mjs. Não edite.
export interface SortChange { item: HTMLElement; id: string | undefined; from: HTMLElement; to: HTMLElement; oldIndex: number; newIndex: number }
export interface SortableController { el: HTMLElement; readonly horizontal: boolean; toArray(): string[]; refresh(): void; destroy(): void }
export declare function createSortable(list: HTMLElement, options?: { group?: string | symbol; orientation?: 'vertical' | 'horizontal'; handle?: string; onChange?: (change: SortChange) => void }): SortableController;
export declare function createKanban(board: HTMLElement, options?: { onChange?: (change: SortChange, columns: Record<string, string[]>) => void }): { el: HTMLElement; toObject(): Record<string, string[]>; refresh(): void; destroy(): void };
