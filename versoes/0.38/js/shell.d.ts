// Gerado por scripts/build-react.mjs. Não edite.
export declare const LAYOUTS: Array<'sidebar' | 'navbar'>;
export declare function createShell(root: HTMLElement, options?: { persist?: boolean; initial?: 'expanded' | 'collapsed'; layout?: 'sidebar' | 'navbar' }): { toggle(): void; setCollapsed(collapsed: boolean): void; setLayout(layout: 'sidebar' | 'navbar'): void; layout(): string; setMobileOpen(open: boolean): void; closeMobile(): void; isCollapsed(): boolean; isMobile(): boolean; isMobileOpen(): boolean; scrollToTop(): void; destroy(): void };
export declare function renderSidebarNav(container: HTMLElement, groups: any[]): void;
export declare function setActiveNavItem(container: HTMLElement, href: string): void;
export declare function renderNavbarNav(container: HTMLElement, groups: any[], options: Record<string, unknown>): void;
