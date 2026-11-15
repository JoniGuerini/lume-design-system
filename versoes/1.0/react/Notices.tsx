import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import { createNotificationCenter, type NotificationItem } from '../js/notifications.js';
import { msg } from '../js/i18n.js';
import { Icon, type IconName } from './Icon';
import { useLatest, defined } from './useController';
import { useLocale } from './useLocale';
import { cx } from './cx';

export type BannerTone = 'neutral' | 'brand' | 'info' | 'warning' | 'danger';

const TONE_ICON: Record<BannerTone, IconName> = { neutral: 'info', brand: 'megaphone', info: 'info', warning: 'alert-triangle', danger: 'alert-circle' };
const KEY = 'ds-banner:';

export interface BannerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Padrão: neutral. brand para novidade; warning e danger para o que afeta todo mundo. */
  tone?: BannerTone;
  /** O começo em negrito (“Lume 0.35”). */
  title?: ReactNode;
  /** A frase, e no máximo um link (use <Link>). */
  children: ReactNode;
  icon?: IconName;
  /** Mostra o × . Com id, lembra no navegador que este anúncio foi fechado (a mesma chave de createBanner). */
  closable?: boolean;
  id?: string;
  /** Colado nas bordas, no topo do app. */
  flush?: boolean;
  onClose?: () => void;
}

/**
 * Faixa no topo do app com um recado para todo mundo.
 *   <Banner tone="brand" title="Lume 0.35" id="lume-0.35" closable>Banner e central. <Link href="/novidades">Ver</Link></Banner>
 * https://lumeui.dev/#/componentes/banner-de-anuncio
 */
export function Banner({ tone = 'neutral', title, children, icon, closable, id, flush, onClose, className, ...rest }: BannerProps) {
  useLocale();
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (!id || !closable) return;
    try {
      if (localStorage.getItem(KEY + id)) setOpen(false);
    } catch {
      /* sem armazenamento */
    }
  }, [id, closable]);
  if (!open) return null;
  const close = () => {
    setOpen(false);
    if (id) {
      try {
        localStorage.setItem(KEY + id, '1');
      } catch {
        /* sem armazenamento */
      }
    }
    onClose?.();
  };
  return (
    <div className={cx('ds-banner', tone !== 'neutral' && `ds-banner--${tone}`, flush && 'ds-banner--flush', className)} role="region" aria-label={msg('banner.label')} {...rest}>
      <span className="ds-banner__icon"><Icon name={icon ?? TONE_ICON[tone]} size={18} /></span>
      <p className="ds-banner__text">{title != null && <strong>{title}</strong>}{children}</p>
      {closable && (
        <button type="button" className="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label={msg('banner.close')} onClick={close}>
          <Icon name="x" size={16} />
        </button>
      )}
    </div>
  );
}

export type { NotificationItem };

export interface NotificationCenterProps {
  /** As notificações, da mais nova para a mais antiga. Ids novos que chegarem são anunciados ao leitor de tela. */
  items: NotificationItem[];
  /** Mudou o que está lido (clique num item ou “Marcar todas”). Guarde no seu estado. */
  onChange?: (items: NotificationItem[], unread: number) => void;
  onSelect?: (item: NotificationItem) => void;
  placement?: 'bottom' | 'top' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  className?: string;
}

/**
 * O sino com o número das não lidas, que abre a lista.
 *   const [items, setItems] = useState(lista);
 *   <NotificationCenter items={items} onChange={setItems} />
 * https://lumeui.dev/#/componentes/central-de-notificacoes
 */
export function NotificationCenter({ items, onChange, onSelect, placement, align, className }: NotificationCenterProps) {
  useLocale();
  const button = useRef<HTMLButtonElement>(null);
  const api = useRef<ReturnType<typeof createNotificationCenter> | null>(null);
  const change = useLatest(onChange);
  const select = useLatest(onSelect);
  const start = useLatest(items);
  const [unread, setUnread] = useState(() => items.filter((i) => !i.read).length);
  useEffect(() => {
    const center = createNotificationCenter(button.current!, defined({
      items: start.current,
      badge: false,
      placement,
      align,
      onChange: (next: NotificationItem[], n: number) => {
        setUnread(n);
        change.current?.(next, n);
      },
      onSelect: (item: NotificationItem) => select.current?.(item),
    }));
    api.current = center;
    return () => {
      center.destroy();
      api.current = null;
    };
  }, [placement, align, start, change, select]);
  const first = useRef(true);
  useEffect(() => {
    setUnread(items.filter((i) => !i.read).length);
    if (first.current) {
      first.current = false;
      return;
    }
    api.current?.setItems(items, { announce: true });
  }, [items]);
  return (
    <span style={{ display: 'contents' }}>
      <button ref={button} type="button" className={cx('ds-icon-btn', 'ds-notify-trigger', className)}>
        <Icon name="bell" size={20} />
        {unread > 0 && <span className="ds-notify-trigger__count" aria-hidden="true">{unread > 99 ? '99+' : unread}</span>}
      </button>
    </span>
  );
}
