// Gerado por scripts/build-react.mjs. Não edite.
export declare const THEMES: Array<'light' | 'dark'>;
export declare function getThemePreference(): 'system' | 'light' | 'dark';
export declare function themeFor(preference: string): 'light' | 'dark';
export declare function resolvedTheme(): 'light' | 'dark';
export declare function toggleTheme(): void;
export declare function setTheme(preference: 'system' | 'light' | 'dark'): void;
export declare function mountThemeControls(scope?: ParentNode): () => void;
export declare function initTheme(): void;
