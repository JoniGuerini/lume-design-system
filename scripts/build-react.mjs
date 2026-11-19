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
  'data-table': `export interface DataTableViewResult<Row> { filtered: Row[]; pageRows: Row[]; page: number; pages: number; total: number; counts: Record<string, Record<string, number>> }
export declare const DATA_TABLE_STATE: { query: string; filters: Record<string, string[]>; sort: { key: string; direction: 'ascending' | 'descending' } | null; page: number; pageSize: number; selected: string[]; hidden: string[]; density: 'comfortable' | 'compact' };
export declare function dataTableView<Row>(rows: Row[], config: { columns: any[]; filters?: any[] }, state: any): DataTableViewResult<Row>;
export declare function dataTableCsv<Row>(rows: Row[], columns: any[], options?: { textOf?: (column: any, row: Row) => unknown }): string;
export declare function downloadCsv(fileName: string, text: string): void;
export declare function dataTableMinWidth(columns: { width?: number; minWidth?: number }[], options?: { selectable?: boolean; actions?: boolean }): number;
export declare function createDataTable(root: HTMLElement, options?: Record<string, unknown>): { el: HTMLElement; state: Record<string, unknown>; setState(partial: Record<string, unknown>): void; setRows(rows: unknown[]): void; setLoading(loading: boolean): void; setActive(key: string | null): void; exportCsv(): void; destroy(): void };`,
  'currency-field': `export declare function currencyParts(currency?: string): { symbol: string; after: boolean; digits: number };
export declare function parseMoney(text: string): number | null;
export declare function createCurrencyField(input: HTMLInputElement, options?: { currency?: string; value?: number | null; min?: number; max?: number; onChange?: (value: number | null) => void }): { el: HTMLInputElement; value: number | null; setValue(value: number | null): void; destroy(): void };`,
  'password-field': `export declare function createPasswordField(input: HTMLInputElement, options?: { onToggle?: (visible: boolean) => void }): { el: HTMLInputElement; visible: boolean; show(): void; hide(): void; toggle(): void; destroy(): void };`,
  'search-field': `export declare function createSearchField(input: HTMLInputElement, options?: { shortcut?: string; onChange?: (value: string) => void }): { el: HTMLInputElement; value: string; setValue(value: string): void; clear(): void; focus(): void; destroy(): void };`,
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
  menu: `export declare function createMenu(trigger: HTMLElement, config?: Record<string, unknown>): { open(): void; close(returnFocus?: boolean): void; isOpen: boolean; value: string; setValue(value: string): void; destroy(): void };
export declare function menuRows(count: number, maxRows: number): number;
export declare function menuContent(config?: Record<string, unknown>): string;
`,
  pagination: `export declare function createPagination(root: HTMLElement, options?: Record<string, unknown>): { page: number; pageSize: number; setPage(page: number): void; setTotal(total: number): void; destroy(): void };
export declare function pageRange(page: number, pages: number, siblings?: number): Array<number | string>;
`,
  'color-picker': `export declare function parseHex(text: string): string | null;
export declare function createColorPicker(root: HTMLElement, options?: Record<string, unknown>): { value: string; setValue(value: string | null): void; setSwatches(list: unknown[]): void; focus(): void; destroy(): void };
export declare function createColorField(input: HTMLInputElement, options?: Record<string, unknown>): { value: string | null; setValue(value: string | null): void; open(): void; close(): void; destroy(): void };
`,
  rating: `export declare function createRating(root: HTMLElement, options?: Record<string, unknown>): { value: number; setValue(value: number): void; destroy(): void };
export declare function ratingHtml(value: number, options?: Record<string, unknown>): string;
`,
  toolbar: `export declare function createToolbar(root: HTMLElement, options?: Record<string, unknown>): { focus(): void; refresh(): void; destroy(): void };
`,
  resizable: `export declare function createResizable(root: HTMLElement, options?: Record<string, unknown>): { sizes: number[]; setSizes(sizes: number[]): void; collapse(index: number): void; expand(index: number): void; reset(): void; destroy(): void };
`,
  carousel: `export declare function createCarousel(root: HTMLElement, options?: Record<string, unknown>): { index: number; paused: boolean; goTo(index: number): void; next(): void; prev(): void; pause(): void; play(): void; destroy(): void };
`,
  stepper: `export declare function createStepper(root: HTMLElement, options?: Record<string, unknown>): { current: number; setCurrent(index: number): void; next(): void; prev(): void; destroy(): void };
`,
  tree: `export declare function createTree(root: HTMLElement, options?: Record<string, unknown>): { selected: string | null; select(id: string): void; expand(id: string): void; collapse(id: string): void; setItems(items: any[]): void; destroy(): void };
`,
  'back-to-top': `export declare function createBackToTop(scroller: HTMLElement, options?: Record<string, unknown>): { el: HTMLButtonElement; update(): void; destroy(): void };
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
  notifications: `export interface NotificationItem { id: string; title: string; text?: string; time?: Date | string | number; icon?: string; tone?: 'neutral' | 'brand' | 'info' | 'success' | 'warning' | 'danger'; href?: string; read?: boolean }
export declare function relativeTime(date: Date | string | number, now?: Date): string;
export declare function createNotificationCenter(trigger: HTMLElement, options?: { items?: NotificationItem[]; onSelect?: (item: NotificationItem) => void; onChange?: (items: NotificationItem[], unread: number) => void; badge?: boolean; placement?: 'bottom' | 'top' | 'left' | 'right'; align?: 'start' | 'center' | 'end' }): { readonly items: NotificationItem[]; readonly unread: number; readonly isOpen: boolean; open(): void; close(): void; setItems(items: NotificationItem[], options?: { announce?: boolean }): void; add(item: NotificationItem): void; markRead(id: string, read?: boolean): void; markUnread(id: string): void; markAllRead(): void; destroy(): void };
`,
  'image-viewer': `export interface ViewerImage { src: string; alt?: string; caption?: string }
export declare function openImageViewer(images: Array<ViewerImage | string>, options?: { index?: number; onChange?: (index: number) => void; onClose?: () => void }): { el: HTMLDialogElement; readonly index: number; readonly zoom: number; goTo(index: number): void; next(): void; prev(): void; zoomIn(): void; zoomOut(): void; fit(): void; close(): void };
export declare function mountImageViewer(area?: ParentNode & EventTarget, options?: { selector?: string; onChange?: (index: number) => void; onClose?: () => void }): () => void;
`,
  sortable: `export interface SortChange { item: HTMLElement; id: string | undefined; from: HTMLElement; to: HTMLElement; oldIndex: number; newIndex: number }
export interface SortableController { el: HTMLElement; readonly horizontal: boolean; toArray(): string[]; refresh(): void; destroy(): void }
export declare function createSortable(list: HTMLElement, options?: { group?: string | symbol; orientation?: 'vertical' | 'horizontal'; handle?: string; onChange?: (change: SortChange) => void }): SortableController;
export declare function createKanban(board: HTMLElement, options?: { onChange?: (change: SortChange, columns: Record<string, string[]>) => void }): { el: HTMLElement; toObject(): Record<string, string[]>; refresh(): void; destroy(): void };
`,
  editor: `export type EditorTool = 'history' | 'marks' | 'blocks' | 'align' | 'link';
export interface EditorController { el: HTMLElement; content: HTMLElement; readonly value: string; setValue(html: string): void; getText(): string; isEmpty(): boolean; focus(): void; setDisabled(disabled: boolean): void; destroy(): void }
export declare function createEditor(root: HTMLElement, options?: { tools?: EditorTool[]; placeholder?: string; name?: string; value?: string; onChange?: (html: string) => void }): EditorController;
export declare function sanitizeHtml(html: string): string;
`,
  popover: `export declare function createPopover(trigger: HTMLElement, options?: Record<string, unknown>): { el: HTMLElement; readonly isOpen: boolean; open(): void; close(returnFocus?: boolean): void; toggle(): void; reposition(): void; destroy(): void };
`,
  'context-menu': `export declare function createContextMenu(root: HTMLElement, config?: Record<string, unknown>): { open(...args: unknown[]): void; close(returnFocus?: boolean): void; readonly isOpen: boolean; destroy(): void };
`,
  tooltip: `export declare function initTooltips(): void;
`,
  toast: `export type ToastPosition = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
export interface ToastOptions {
  /** Uma segunda linha, mais apagada, embaixo da mensagem (que vira o título). */
  description?: string;
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
export declare function toastClasses(options?: { tone?: string; description?: string }): string;
`,
  shell: `export declare const LAYOUTS: Array<'sidebar' | 'navbar'>;
export declare function createShell(root: HTMLElement, options?: { persist?: boolean; initial?: 'expanded' | 'collapsed'; layout?: 'sidebar' | 'navbar' }): { toggle(): void; setCollapsed(collapsed: boolean): void; setLayout(layout: 'sidebar' | 'navbar'): void; readonly layout: 'sidebar' | 'navbar'; setMobileOpen(open: boolean): void; closeMobile(): void; readonly collapsed: boolean; readonly mobile: boolean; readonly mobileOpen: boolean; scrollToTop(): void; destroy(): void };
export declare function renderSidebarNav(container: HTMLElement, groups: any[]): void;
export declare function setActiveNavItem(container: HTMLElement, href: string): void;
export declare function renderNavbarNav(container: HTMLElement, groups: any[], options?: { go?: (href: string) => void; createMenu?: unknown }): { setActive(href: string): void; destroy(): void };
`,
  theme: `export declare const THEMES: Array<'light' | 'dark'>;
export declare function getThemePreference(): 'system' | 'light' | 'dark';
export declare function themeFor(preference: string): 'light' | 'dark';
export declare function resolvedTheme(): 'light' | 'dark';
export declare function toggleTheme(): void;
export declare function setTheme(preference: 'system' | 'light' | 'dark'): void;
export declare function mountThemeControls(scope?: ParentNode): () => void;
export declare function initTheme(): void;
`,
  calendar: `export declare function localeWeekStart(tag?: string): number;
export declare function createCalendar(root: HTMLElement, options?: Record<string, unknown>): { view: 'month' | 'week' | 'day'; date: Date; setView(view: string): void; setDate(date: Date): void; today(): void; prev(): void; next(): void; setEvents(events: any[]): void; destroy(): void };
`,
  'code-block': `export declare function codeBlockHtml(code: string, options?: { small?: boolean }): string;
export declare function mountCodeBlocks(root?: ParentNode): () => void;
`,
  charts: `type Chart = { update(options: any): void; setLoading(on: boolean): void; destroy(): void; el: HTMLElement };
export declare function createBarChart(host: HTMLElement, options: any): Chart;
export declare function createLineChart(host: HTMLElement, options: any): Chart;
export declare function createDonutChart(host: HTMLElement, options: any): Chart;
export declare function createHeatmap(host: HTMLElement, options: any): Chart;
export declare function createCalendarHeatmap(host: HTMLElement, options: any): Chart;
export declare function createScatterChart(host: HTMLElement, options: any): Chart;
export declare function sparklineHtml(values: number[], options?: Record<string, unknown>): string;
export declare function statTileHtml(options: Record<string, unknown>): string;
export declare function meterHtml(options: Record<string, unknown>): string;
export declare function chartFormatter(format?: unknown): (value: number) => string;
`,
};
for (const [name, body] of Object.entries(MODULES)) {
  await writeFile(path.join(ROOT, 'ds', 'js', `${name}.d.ts`), `// Gerado por scripts/build-react.mjs. Não edite.
${body}`);
}
console.log(`✓ react: ${names.length} nomes de ícone, ${exported.length} declarações em ds/lume.d.ts, ${Object.keys(MODULES).length} módulos tipados`);
