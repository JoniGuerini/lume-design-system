import type { HTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from './Icon';
import { msg } from '../js/i18n.js';
import { useLocale } from './useLocale';
import { cx } from './cx';

export type AlertTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

const TONE_ICON: Record<AlertTone, IconName> = {
  neutral: 'info',
  info: 'info',
  success: 'check-circle',
  warning: 'alert-triangle',
  danger: 'alert-circle',
};

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Padrão: info. Cada tom já traz o ícone dele. */
  tone?: AlertTone;
  /** A frase principal. */
  title: ReactNode;
  /** O detalhe, quando precisa. */
  children?: ReactNode;
  /** Botões do próximo passo ("Tentar de novo"). */
  actions?: ReactNode;
  /** Uma linha só, para painéis e barras. */
  compact?: boolean;
  /** Troca o ícone do tom. */
  icon?: IconName;
  /** Mostra o × e chama esta função. Você decide o que some. */
  onClose?: () => void;
}

/**
 * Aviso dentro da página. Depois de uma ação urgente, passe role="alert"; o resto, role="status".
 * https://lumeui.dev/#/componentes/alerta
 */
export function Alert({ tone = 'info', title, children, actions, compact, icon, onClose, className, ...rest }: AlertProps) {
  useLocale();
  return (
    <div className={cx('ds-alert', tone !== 'neutral' && `ds-alert--${tone}`, compact && 'ds-alert--compact', className)} {...rest}>
      <span className="ds-alert__icon"><Icon name={icon ?? TONE_ICON[tone]} size={18} /></span>
      <div className="ds-alert__body">
        <p className="ds-alert__title">{title}</p>
        {children && <p className="ds-alert__text">{children}</p>}
        {actions && <div className="ds-alert__actions">{actions}</div>}
      </div>
      {onClose && (
        <button type="button" className="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-alert__close" aria-label={msg('common.close')} onClick={onClose}>
          <Icon name="x" size={16} />
        </button>
      )}
    </div>
  );
}
