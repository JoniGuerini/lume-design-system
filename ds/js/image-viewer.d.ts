// Gerado por scripts/build-react.mjs. Não edite.
export interface ViewerImage { src: string; alt?: string; caption?: string }
export declare function openImageViewer(images: Array<ViewerImage | string>, options?: { index?: number; onChange?: (index: number) => void; onClose?: () => void }): { el: HTMLDialogElement; readonly index: number; readonly zoom: number; goTo(index: number): void; next(): void; prev(): void; zoomIn(): void; zoomOut(): void; fit(): void; close(): void };
export declare function mountImageViewer(area?: ParentNode & EventTarget, options?: { selector?: string; onChange?: (index: number) => void; onClose?: () => void }): () => void;
