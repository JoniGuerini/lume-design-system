#!/usr/bin/env node
/**
 * Gera os tipos que a camada React (react/) usa:
 *   react/icon-names.ts  a lista dos nomes de ícone, como tipo (IconName), lida de ds/icons/icons.js
 *   ds/lume.d.ts          as declarações de ds/lume.js, para o TypeScript aceitar o import nos projetos
 * Roda dentro de npm run build. Item novo em ds/lume.js: declare o tipo aqui se ele for usado pela camada React.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const iconsSrc = await readFile(path.join(ROOT, 'ds', 'icons', 'icons.js'), 'utf8');
const names = [...iconsSrc.matchAll(/^\s*\['([a-z0-9-]+)',\s*'[a-z]+',/gm)].map((m) => m[1]);
if (names.length < 100) throw new Error(`Só ${names.length} ícones encontrados em icons.js: o formato mudou?`);
await writeFile(path.join(ROOT, 'react', 'icon-names.ts'), `// Gerado por scripts/build-react.mjs a partir de ds/icons/icons.js. Não edite.
export type IconName =
${names.map((n) => `  | '${n}'`).join('\n')};
`);

// as declarações de lume.js: os tipos conhecidos e "any" para o resto, até cada etapa do React tipar o seu
const KNOWN = {
  icons: 'Record<string, { name: string; category: string; keywords: string[]; body: string }>',
  iconList: 'Array<{ name: string; category: string; keywords: string[]; body: string }>',
  icon: '(name: string, options?: { size?: number; strokeWidth?: number; label?: string; className?: string }) => string',
};
const lume = await readFile(path.join(ROOT, 'ds', 'lume.js'), 'utf8');
const exported = [...lume.matchAll(/export \{([^}]+)\}/g)].flatMap((m) => m[1].split(',').map((s) => s.trim()).filter(Boolean));
await writeFile(path.join(ROOT, 'ds', 'lume.d.ts'), `// Gerado por scripts/build-react.mjs a partir de ds/lume.js. Não edite.
// Tipos de lume.js para projetos em TypeScript. A documentação de cada item está em https://lumeui.dev/#/recursos/api.
${exported.map((n) => `export declare const ${n}: ${KNOWN[n] ?? 'any'};`).join('\n')}
`);
// o Ícone importa direto de icons.js, para o projeto não carregar o Lume inteiro só por causa dele
await writeFile(path.join(ROOT, 'ds', 'icons', 'icons.d.ts'), `// Gerado por scripts/build-react.mjs. Não edite.
${['icons', 'iconList', 'icon'].map((n) => `export declare const ${n}: ${KNOWN[n]};`).join('\n')}
export declare const iconCategories: Record<string, string>;
`);
// os módulos de ds/js que a camada React importa direto: um .d.ts escrito à mão para cada um
const MODULES = {
  i18n: `export type Locale = 'pt-BR' | 'en' | 'es';
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
`,
};
for (const [name, body] of Object.entries(MODULES)) {
  await writeFile(path.join(ROOT, 'ds', 'js', `${name}.d.ts`), `// Gerado por scripts/build-react.mjs. Não edite.
${body}`);
}
console.log(`✓ react: ${names.length} nomes de ícone, ${exported.length} declarações em ds/lume.d.ts, ${Object.keys(MODULES).length} módulos tipados`);
