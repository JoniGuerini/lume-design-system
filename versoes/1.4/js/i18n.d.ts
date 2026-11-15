// Gerado por scripts/build-react.mjs. Não edite.
export type Locale = 'pt-BR' | 'en' | 'es';
export declare const LOCALES: Locale[];
export declare const LOCALE_NAMES: Record<Locale, string>;
export declare function getLocalePreference(): string;
export declare function systemLocale(): Locale;
export declare function locale(): Locale;
export declare function setLocale(preference: string, options?: { persist?: boolean }): void;
export declare function initLocale(): void;
export declare function tr<T>(text: T | Record<Locale, T>): T;
export declare function msg(key: string, ...args: unknown[]): string;
export declare function numberFormat(options?: Intl.NumberFormatOptions): Intl.NumberFormat;
export declare function dateFormat(options?: Intl.DateTimeFormatOptions): Intl.DateTimeFormat;
export declare function formatNumber(n: number, options?: Intl.NumberFormatOptions): string;
