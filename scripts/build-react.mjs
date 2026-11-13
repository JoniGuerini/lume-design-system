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
  select: `export declare function createSelect(select: HTMLSelectElement, config?: Record<string, unknown>): { select: HTMLSelectElement; trigger: HTMLElement; control: HTMLElement; open(): void; close(): void; sync(): void; destroy(): void };
export declare function mountSelects(root?: ParentNode): () => void;
`,
  'date-picker': `export declare function createDatePicker(input: HTMLInputElement, options?: Record<string, unknown>): { value: any; setValue(value: any): void; open(): void; close(): void; destroy(): void };
`,
  'time-picker': `export declare function createTimePicker(input: HTMLInputElement, options?: Record<string, unknown>): { value: string | null; setValue(value: string | null): void; open(): void; close(): void; destroy(): void };
`,
  'number-field': `export declare function createNumberField(input: HTMLInputElement, options?: Record<string, unknown>): { value: number | null; setValue(value: number | null): void; destroy(): void };
`,
  'tag-field': `export declare function createTagField(input: HTMLInputElement, options?: Record<string, unknown>): { value: string[]; setValue(value: string[]): void; add(text: string): void; remove(text: string): void; destroy(): void };
`,
  slider: `export declare function createSlider(root: HTMLElement, options?: Record<string, unknown>): { value: any; setValue(value: any): void; refresh(): void; destroy(): void };
`,
  'file-upload': `export declare function createFileUpload(root: HTMLElement, options?: Record<string, unknown>): { files: File[]; add(files: File[] | FileList): void; clear(): void; destroy(): void };
`,
  'otp-field': `export declare function createOtpField(root: HTMLElement, options?: Record<string, unknown>): { value: string; setValue(value: string): void; clear(): void; setError(on?: boolean): void; focus(): void; destroy(): void };
`,
  form: `export declare function createForm(form: HTMLFormElement, options?: Record<string, unknown>): { validate(): boolean; data(): Record<string, any>; errors(): Array<{ name: string; label: string; message: string }>; reset(): void; destroy(): void };
`,
  menu: `export declare function createMenu(trigger: HTMLElement, config: Record<string, unknown>): { open(): void; close(returnFocus?: boolean): void; isOpen: boolean; value: string; setValue(value: string): void; destroy(): void };
export declare function menuRows(count: number, maxRows: number): number;
export declare function menuContent(config?: Record<string, unknown>): string;
`,
  pagination: `export declare function createPagination(root: HTMLElement, options?: Record<string, unknown>): { page: number; pageSize: number; setPage(page: number): void; setTotal(total: number): void; destroy(): void };
export declare function pageRange(page: number, pages: number, siblings?: number): Array<number | string>;
`,
  stepper: `export declare function createStepper(root: HTMLElement, options?: Record<string, unknown>): { current: number; setCurrent(index: number): void; next(): void; prev(): void; destroy(): void };
`,
  tree: `export declare function createTree(root: HTMLElement, options?: Record<string, unknown>): { selected: string | null; select(id: string): void; expand(id: string): void; collapse(id: string): void; setItems(items: any[]): void; destroy(): void };
`,
  'back-to-top': `export declare function createBackToTop(scroller: HTMLElement, options?: Record<string, unknown>): { element: HTMLButtonElement; update(): void; destroy(): void };
`,
  scrollbar: `export declare function initScrollbars(): void;
`,
  modal: `export declare function enhanceModal(dialog: HTMLDialogElement, options?: { dismissible?: boolean; onClose?: (value?: string) => void }): { el: HTMLDialogElement; open(): Promise<string | undefined>; close(value?: string): void; destroy(): void; readonly isOpen: boolean };
export declare function createModal(options?: Record<string, unknown>): { el: HTMLDialogElement; open(): Promise<string | undefined>; close(value?: string): void; destroy(): void; readonly isOpen: boolean };
export declare function openModal(options?: Record<string, unknown>): Promise<string | undefined>;
export declare function confirmModal(options?: Record<string, unknown>): Promise<boolean>;
export declare function modalHtml(options?: Record<string, unknown>): string;
export declare function modalClasses(options?: { size?: string; tone?: string }): string;
`,
  popover: `export declare function createPopover(trigger: HTMLElement, options?: Record<string, unknown>): { el: HTMLElement; readonly isOpen: boolean; open(): void; close(returnFocus?: boolean): void; toggle(): void; reposition(): void; destroy(): void };
`,
  'context-menu': `export declare function createContextMenu(root: HTMLElement, config?: Record<string, unknown>): { open(...args: unknown[]): void; close(returnFocus?: boolean): void; readonly isOpen: boolean; destroy(): void };
`,
  tooltip: `export declare function initTooltips(): void;
`,
  toast: `export type ToastPosition = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
export interface ToastOptions {
  icon?: string;
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
  action?: { label: string; onClick: () => void };
  duration?: number;
  position?: ToastPosition;
}
export declare const TOAST_POSITIONS: ToastPosition[];
export declare function toast(message: string, options?: ToastOptions): { close(): void };
export declare function clearToasts(): void;
export declare function copyText(text: string, label?: string, options?: { echo?: boolean }): Promise<boolean>;
export declare function getToastPosition(): ToastPosition;
export declare function setToastPosition(position: ToastPosition): ToastPosition;
export declare function toastContent(message: string, options?: ToastOptions & { dismissible?: boolean }): string;
export declare function toastClasses(options?: { tone?: string }): string;
`,
};
for (const [name, body] of Object.entries(MODULES)) {
  await writeFile(path.join(ROOT, 'ds', 'js', `${name}.d.ts`), `// Gerado por scripts/build-react.mjs. Não edite.
${body}`);
}
console.log(`✓ react: ${names.length} nomes de ícone, ${exported.length} declarações em ds/lume.d.ts, ${Object.keys(MODULES).length} módulos tipados`);
