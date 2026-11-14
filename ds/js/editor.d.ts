// Gerado por scripts/build-react.mjs. Não edite.
export type EditorTool = 'history' | 'marks' | 'blocks' | 'align' | 'link';
export interface EditorController { el: HTMLElement; content: HTMLElement; getHTML(): string; setHTML(html: string): void; getText(): string; isEmpty(): boolean; focus(): void; setDisabled(disabled: boolean): void; destroy(): void }
export declare function createEditor(root: HTMLElement, options?: { tools?: EditorTool[]; placeholder?: string; name?: string; value?: string; onChange?: (html: string) => void }): EditorController;
export declare function sanitizeHtml(html: string): string;
