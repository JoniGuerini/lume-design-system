import { useEffect, useRef, useSyncExternalStore, type MouseEvent, type ReactNode } from 'react';
import { createShell, renderSidebarNav, renderNavbarNav, setActiveNavItem } from '../js/shell.js';
import { resolvedTheme, toggleTheme } from '../js/theme.js';
import { initTooltips } from '../js/tooltip.js';
import { msg } from '../js/i18n.js';
import { Icon, type IconName } from './Icon';
import { useLocale } from './useLocale';
import { stableKey } from './useController';
import { cx } from './cx';

export interface NavItem {
  label: string;
  icon: IconName;
  href: string;
  /** Pontinho de novidade. */
  dot?: boolean;
  /** Rótulo pequeno que abre uma seção dentro do grupo (repita em cada item da seção). */
  section?: string;
}

export interface NavGroup {
  id: string;
  /** Sem rótulo: a navegação principal, no topo. Com rótulo: um grupo que recolhe. */
  label?: string;
  items: NavItem[];
}

export interface AppShellProps {
  /** O nome do produto, ao lado da marca. */
  name: string;
  /** A marca (um <img> ou um ícone), 24 px. */
  logo?: ReactNode;
  /** Para onde a marca leva. Padrão: "/". */
  homeHref?: string;
  /** A navegação da sidebar. */
  nav: NavGroup[];
  /** O endereço da página atual: o item ganha aria-current e o grupo dele abre. */
  activeHref?: string;
  /**
   * Chamado ao clicar num item da navegação ou na marca, para o seu roteador:
   * (href, event) => { event.preventDefault(); navigate(href); }. Sem ele, os links navegam normalmente.
   */
  onNavigate?: (href: string, event: MouseEvent) => void;
  /** Botão de busca no topo da sidebar (abre a sua paleta de comandos). */
  onSearch?: () => void;
  searchLabel?: string;
  /** Pé da sidebar: conta, versão ou workspace. */
  sidebarFooter?: ReactNode;
  /** A trilha da página, à esquerda da topbar (um Breadcrumb). */
  breadcrumb?: ReactNode;
  /** O que fica à direita da topbar. O botão de tema já vem no fim. */
  actions?: ReactNode;
  /** Mostra o botão de tema na topbar. Padrão: sim. */
  themeToggle?: boolean;
  /**
   * Onde fica a navegação no desktop: na lateral ("sidebar", o padrão) ou no topo ("navbar").
   * No celular, os dois viram a mesma gaveta. https://lumeui.dev/#/componentes/navbar
   */
  layout?: 'sidebar' | 'navbar';
  /** Guarda a sidebar recolhida e os grupos no navegador. Padrão: sim. */
  persist?: boolean;
  /** O conteúdo da página. */
  children: ReactNode;
  className?: string;
}

/**
 * A moldura do app: sidebar que recolhe (gaveta no celular), topbar que aparece ao rolar e o painel principal.
 * https://lumeui.dev/#/padroes/app-shell
 */
export function AppShell({
  name, logo, homeHref = '/', nav, activeHref, onNavigate, onSearch, searchLabel, sidebarFooter, breadcrumb, actions,
  themeToggle = true, layout = 'sidebar', persist = true, children, className,
}: AppShellProps) {
  useLocale();
  const root = useRef<HTMLDivElement>(null);
  const navEl = useRef<HTMLElement>(null);
  const navbarEl = useRef<HTMLElement>(null);
  const navbar = useRef<{ setActive(href: string): void; destroy(): void } | null>(null);
  const shell = useRef<{ closeMobile(): void; setLayout(layout: 'sidebar' | 'navbar'): void; destroy(): void } | null>(null);
  const navigate = useRef(onNavigate);
  navigate.current = onNavigate;
  const navKey = stableKey(nav);

  useEffect(() => {
    initTooltips();
    const c = createShell(root.current!, { persist, layout });
    shell.current = c;
    return () => {
      c.destroy();
      shell.current = null;
    };
  }, [persist]);

  useEffect(() => {
    renderSidebarNav(navEl.current!, nav);
    if (activeHref) setActiveNavItem(navEl.current!, activeHref);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navKey]);

  useEffect(() => {
    if (activeHref) setActiveNavItem(navEl.current!, activeHref);
    if (activeHref) navbar.current?.setActive(activeHref);
  }, [activeHref]);

  useEffect(() => {
    shell.current?.setLayout(layout);
    if (layout !== 'navbar') return;
    // escolher no menu de um grupo não tem clique num link: o roteador recebe um evento só com preventDefault
    const go = (href: string) => {
      if (navigate.current) navigate.current(href, { preventDefault() {} } as unknown as MouseEvent);
      else location.assign(href);
    };
    const n = renderNavbarNav(navbarEl.current!, nav, { go });
    navbar.current = n;
    if (activeHref) n.setActive(activeHref);
    return () => {
      n.destroy();
      navbar.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout, navKey]);

  const onNavClick = (event: MouseEvent) => {
    const link = (event.target as HTMLElement).closest('a.ds-nav-item, a.ds-navbar__item, a.ds-brand');
    if (!link || !onNavigate || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    onNavigate(link.getAttribute('href') ?? '', event);
    shell.current?.closeMobile();
  };

  const brand = (
    <a className="ds-brand" href={homeHref} aria-label={msg('shell.goHome', name)}>
      {logo && <span className="ds-brand__mark" aria-hidden="true">{logo}</span>}
      {name}
    </a>
  );
  const search = onSearch && (
    <div className="ds-sidebar__search">
      <button type="button" className="ds-field ds-sidebar-search" onClick={onSearch} data-ds-tooltip={searchLabel ?? msg('common.search')} data-ds-tooltip-placement="right">
        <Icon name="search" size={20} />
        <span className="ds-field__placeholder">{searchLabel ?? msg('common.search')}</span>
      </button>
    </div>
  );

  return (
    <div ref={root} className={cx('ds-shell', className)} onClick={onNavClick}>
      <button type="button" className="ds-shell__edge" data-shell-toggle aria-controls="ds-shell-sidebar" data-ds-tooltip-placement="right">
        <Icon name="chevron-left" size={16} />
      </button>
      {layout === 'navbar' && (
        <div className="ds-navbar">
          {brand}
          <nav ref={navbarEl} className="ds-navbar__nav" aria-label={msg('shell.mainNav')} />
          {onSearch && (
            <button type="button" className="ds-field ds-sidebar-search ds-navbar__search" onClick={onSearch}>
              <Icon name="search" size={20} />
              <span className="ds-field__placeholder">{searchLabel ?? msg('common.search')}</span>
            </button>
          )}
        </div>
      )}
      <aside className="ds-sidebar" id="ds-shell-sidebar" aria-label={msg('shell.sidebar')}>
        <div className="ds-sidebar__header">
          {brand}
          <button type="button" className="ds-icon-btn ds-icon-btn--outline ds-icon-btn--lg ds-sidebar__toggle" data-shell-toggle aria-controls="ds-shell-sidebar" data-ds-tooltip-placement="right">
            {logo && <span className="ds-sidebar__toggle-mark" aria-hidden="true">{logo}</span>}
            <Icon name="panel-left" className="ds-sidebar__toggle-collapse" />
            <Icon name="x" className="ds-sidebar__toggle-close" />
          </button>
        </div>
        {search}
        <nav ref={navEl} className="ds-sidebar__nav" aria-label={msg('shell.mainNav')} />
        {sidebarFooter && <div className="ds-sidebar__footer">{sidebarFooter}</div>}
      </aside>
      <div className="ds-shell__scrim" data-shell-scrim />
      <div className="ds-main">
        <div className="ds-main__scroll">
          <header className="ds-topbar">
            <button type="button" className="ds-icon-btn ds-icon-btn--outline ds-topbar__menu" data-shell-toggle aria-controls="ds-shell-sidebar">
              <Icon name="menu" />
            </button>
            {breadcrumb}
            <div className="ds-topbar__spacer" />
            {onSearch && (
              <button type="button" className="ds-icon-btn ds-topbar__search" onClick={onSearch} aria-label={searchLabel ?? msg('common.search')}>
                <Icon name="search" />
              </button>
            )}
            {actions}
            {themeToggle && <ThemeToggle />}
          </header>
          <main className="ds-main__content" tabIndex={-1}>{children}</main>
        </div>
      </div>
    </div>
  );
}

export interface ThemeToggleProps {
  className?: string;
}

function subscribeTheme(onChange: () => void) {
  const html = document.documentElement;
  html.addEventListener('ds:themechange', onChange);
  return () => html.removeEventListener('ds:themechange', onChange);
}

/** O tema em uso ('light' ou 'dark'); redesenha quando ele muda. */
export function useTheme(): 'light' | 'dark' {
  return useSyncExternalStore(subscribeTheme, () => resolvedTheme() as 'light' | 'dark', () => 'light');
}

/** O botão redondo de claro e escuro; a escolha fica salva. Chame initTheme() (lume.js) na entrada do app. */
export function ThemeToggle({ className }: ThemeToggleProps) {
  useLocale();
  const dark = useTheme() === 'dark';
  const label = msg('theme.toggle');
  return (
    <button type="button" className={cx('ds-theme-toggle', className)} aria-pressed={dark} aria-label={label} data-ds-tooltip={label} data-ds-tooltip-placement="bottom" onClick={toggleTheme}>
      <Icon name="sun" size={18} className="ds-theme-toggle__sun" />
      <Icon name="moon" size={18} className="ds-theme-toggle__moon" />
    </button>
  );
}
