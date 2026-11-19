// Gerado por scripts/build-react.mjs. Não edite.
export declare function localeWeekStart(tag?: string): number;
export declare function createCalendar(root: HTMLElement, options?: Record<string, unknown>): { view: 'month' | 'week' | 'day'; date: Date; setView(view: string): void; setDate(date: Date): void; today(): void; prev(): void; next(): void; setEvents(events: any[]): void; closeDetails(): void; destroy(): void };
