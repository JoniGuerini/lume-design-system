// Gerado por scripts/build-react.mjs. Não edite.
export declare const LAYOUTS: Array<'sidebar' | 'navbar'>;
export declare function createShell(root: HTMLElement, options?: { persist?: boolean; initial?: 'expanded' | 'collapsed'; layout?: 'sidebar' | 'navbar' }): { toggle(): void; setCollapsed(collapsed: boolean): void; setLayout(layout: 'sidebar' | 'navbar'): void; layout(): string; setMobileOpen(open: boolean): void; closeMobile(): void; readonly collapsed: boolean; readonly mobile: boolean; readonly mobileOpen: boolean; /** @deprecated Use collapsed. */ isCollapsed(): boolean; /** @deprecated Use mobile. */ isMobile(): boolean; /** @deprecated Use mobileOpen. */ isMobileOpen(): boolean; scrollToTop(): void; destroy(): void };
export declare function renderSidebarNav(container: HTMLElement, groups: any[]): void;
export declare function setActiveNavItem(container: HTMLElement, href: string): void;
export declare function renderNavbarNav(container: HTMLElement, groups: any[], options?: { go?: (href: string) => void; createMenu?: unknown }): { setActive(href: string): void; destroy(): void };
