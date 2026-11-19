import type { HTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from './Icon';
import { cx } from './cx';

export interface EmptyStateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** O ícone do assunto. Padrão: inbox. */
  icon?: IconName;
  /** Diz o que falta, sem culpa: "Nenhum cliente ainda". */
  title: ReactNode;
  /** Por que está vazio ou o que acontece depois. */
  description?: ReactNode;
  /** O próximo passo: um botão principal e, se precisar, um secundário. */
  actions?: ReactNode;
  /** Linha pequena no fim (código do erro, hora). */
  meta?: ReactNode;
  /** danger para erro, warning para atenção (offline), muted para ícone neutro, loading para o ícone girando. */
  tone?: 'danger' | 'warning' | 'muted' | 'loading';
  /** page (padrão) para a página ou a lista inteira; compact dentro de um painel; inline numa linha de tabela. */
  size?: 'page' | 'compact' | 'inline';
  /** Sem contorno nem fundo, quando já está dentro de um cartão. */
  plain?: boolean;
}

/**
 * Estado vazio: o que falta, por quê e o próximo passo. Anunciado sem interromper (role="status").
 * https://lumeui.dev/#/componentes/estado-vazio
 */
export function EmptyState({ icon = 'inbox', title, description, actions, meta, tone, size = 'page', plain, className, role = 'status', ...rest }: EmptyStateProps) {
  return (
    <div
      className={cx('ds-empty', size !== 'page' && `ds-empty--${size}`, plain && 'ds-empty--plain', tone && `ds-empty--${tone}`, className)}
      role={role}
      {...rest}
    >
      <span className="ds-empty__icon">
        <Icon name={icon} />
      </span>
      <p className="ds-empty__title">{title}</p>
      {description && <p className="ds-empty__description">{description}</p>}
      {actions && <div className="ds-empty__actions">{actions}</div>}
      {meta && <p className="ds-empty__meta">{meta}</p>}
    </div>
  );
}
