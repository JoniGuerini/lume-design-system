// Gerado por scripts/build-react.mjs. Não edite.
export declare function currencyParts(currency?: string): { symbol: string; after: boolean; digits: number };
export declare function parseMoney(text: string): number | null;
export declare function createCurrencyField(input: HTMLInputElement, options?: { currency?: string; value?: number | null; min?: number; max?: number; onChange?: (value: number | null) => void }): { el: HTMLInputElement; value: number | null; setValue(value: number | null): void; destroy(): void };