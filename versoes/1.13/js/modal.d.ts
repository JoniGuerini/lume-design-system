// Gerado por scripts/build-react.mjs. Não edite.
export declare function enhanceModal(dialog: HTMLDialogElement, options?: { dismissible?: boolean; onClose?: (value?: string) => void }): { el: HTMLDialogElement; open(): Promise<string | undefined>; close(value?: string): void; destroy(): void; readonly isOpen: boolean };
export declare function createModal(options?: Record<string, unknown>): { el: HTMLDialogElement; open(): Promise<string | undefined>; close(value?: string): void; destroy(): void; readonly isOpen: boolean };
export declare function openModal(options?: Record<string, unknown>): Promise<string | undefined>;
export declare function confirmModal(options?: Record<string, unknown>): Promise<boolean>;
export declare function modalHtml(options?: Record<string, unknown>): string;
export declare function modalClasses(options?: { size?: string; tone?: string }): string;
