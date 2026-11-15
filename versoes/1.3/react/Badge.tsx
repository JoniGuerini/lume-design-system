import type { HTMLAttributes } from 'react';
import { cx } from './cx';

export type Tone = 'neutral' | 'brand' | 'info' | 'success' | 'warning' | 'danger';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Padrão: neutral. A cor nunca vem sozinha: o texto diz o mesmo. */
  tone?: Tone;
  /** Padrão: md (24 px). */
  size?: 'sm' | 'md';
  /** Ponto antes do texto, para status. */
  dot?: boolean;
  /** Contador: número curto, redondo ("3", "99+"). */
  count?: boolean;
}

/**
 * Rótulo curto de status ou contagem. Não é clicável.
 * https://lumeui.dev/#/componentes/badge
 */
export function Badge({ tone = 'neutral', size = 'md', dot, count, className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cx('ds-badge', tone !== 'neutral' && `ds-badge--${tone}`, size === 'sm' && 'ds-badge--sm', count && 'ds-badge--count', className)}
      {...rest}
    >
      {dot && !count && <span className="ds-badge__dot" />}
      {children}
    </span>
  );
}
