import { Fragment, type HTMLAttributes, type ReactNode } from 'react';
import { Icon, type IconName } from './Icon';
import { msg } from '../js/i18n.js';
import { useLocale } from './useLocale';
import { cx } from './cx';

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  /** Uma tecla ("Esc"), ou várias para uma combinação (["⌘", "K"]): cada uma vira uma etiqueta. */
  keys?: string | string[];
}

/**
 * Tecla de um atalho. O atalho é só um atalho: o caminho normal continua existindo.
 * https://lumeui.dev/#/componentes/tecla
 */
export function Kbd({ keys, className, children, ...rest }: KbdProps) {
  if (Array.isArray(keys)) {
    return (
      <>
        {keys.map((k, i) => (
          <Fragment key={i}>
            {i > 0 && ' '}
            <kbd className={cx('ds-kbd', className)} {...rest}>{k}</kbd>
          </Fragment>
        ))}
      </>
    );
  }
  return <kbd className={cx('ds-kbd', className)} {...rest}>{keys ?? children}</kbd>;
}

export interface DescriptionListProps extends HTMLAttributes<HTMLDListElement> {
  /** Os pares rótulo e valor, na ordem. */
  items: Array<[label: ReactNode, value: ReactNode]>;
  /** lines: com divisórias, para listas longas; stacked: rótulo em cima, para resumos. */
  variant?: 'default' | 'lines' | 'stacked';
}

/**
 * Pares de rótulo e valor: os dados de um pedido, de uma conta.
 * https://lumeui.dev/#/componentes/lista-de-definicoes
 */
export function DescriptionList({ items, variant = 'default', className, ...rest }: DescriptionListProps) {
  return (
    <dl className={cx('ds-dl', variant !== 'default' && `ds-dl--${variant}`, className)} {...rest}>
      {items.map(([label, value], i) => (
        <div className="ds-dl__row" key={i}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export interface TimelineItem {
  /** O que aconteceu. */
  title: ReactNode;
  /** Detalhe curto. */
  text?: ReactNode;
  /** Quando: texto para mostrar e, de preferência, a data em ISO em dateTime. */
  time?: ReactNode;
  dateTime?: string;
  /** Tom do marcador. Padrão: neutro. */
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
  /** Ícone do marcador. Sem ícone, um ponto. */
  icon?: IconName;
}

export interface TimelineProps extends HTMLAttributes<HTMLOListElement> {
  items: TimelineItem[];
}

/**
 * O que aconteceu, em ordem: histórico de um pedido, de um documento.
 * https://lumeui.dev/#/componentes/linha-do-tempo
 */
export function Timeline({ items, className, ...rest }: TimelineProps) {
  return (
    <ol className={cx('ds-timeline', className)} {...rest}>
      {items.map((item, i) => (
        <li className="ds-timeline__item" data-tone={item.tone && item.tone !== 'neutral' ? item.tone : undefined} key={i}>
          <span className="ds-timeline__marker">{item.icon && <Icon name={item.icon} size={14} />}</span>
          <div className="ds-timeline__content">
            <p className="ds-timeline__title">{item.title}</p>
            {item.text && <p className="ds-timeline__text">{item.text}</p>}
            {item.time && <time className="ds-timeline__time" dateTime={item.dateTime}>{item.time}</time>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export interface BreadcrumbItem {
  label: ReactNode;
  /** Endereço. O último item é a página atual e não leva link. */
  href?: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  /** Troca o link padrão (<a>) pelo do seu roteador: renderLink={(item) => <Link to={item.href}>{item.label}</Link>}. */
  renderLink?: (item: BreadcrumbItem) => ReactNode;
}

/**
 * Onde a pessoa está, do geral para o específico.
 * https://lumeui.dev/#/componentes/breadcrumb
 */
export function Breadcrumb({ items, renderLink, className, ...rest }: BreadcrumbProps) {
  useLocale();
  return (
    <nav className={cx('ds-breadcrumb', className)} aria-label={msg('common.breadcrumb')} {...rest}>
      <ol>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i}>
              {i > 0 && <Icon name="chevron-right" size={14} />}
              {last ? (
                <span aria-current="page">{item.label}</span>
              ) : renderLink ? (
                renderLink(item)
              ) : (
                <a href={item.href}>{item.label}</a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
