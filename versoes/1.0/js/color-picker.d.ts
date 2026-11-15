// Gerado por scripts/build-react.mjs. Não edite.
export declare function parseHex(text: string): string | null;
export declare function createColorPicker(root: HTMLElement, options?: Record<string, unknown>): { value: string; setValue(value: string | null): void; setSwatches(list: unknown[]): void; focus(): void; destroy(): void };
export declare function createColorField(input: HTMLInputElement, options?: Record<string, unknown>): { value: string | null; setValue(value: string | null): void; open(): void; close(): void; destroy(): void };
