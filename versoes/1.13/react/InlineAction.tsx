import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from './Icon';
import { cx } from './cx';

export interface InlineActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Ícone antes do texto. */
  icon?: IconName;
  /** Mostra o + depois do texto, para ações que adicionam algo ("Na cena +"). */
  plus?: boolean;
  /** Texto mais forte, para a ação principal de um grupo. */
  strong?: boolean;
}

/**
 * Ação mínima dentro do texto ou de um painel: "Adicionar nota +".
 * https://lumeui.dev/#/componentes/acao-inline
 */
export const InlineAction = forwardRef<HTMLButtonElement, InlineActionProps>(function InlineAction(
  { icon, plus, strong, className, type = 'button', children, ...rest },
  ref,
) {
  return (
    <button ref={ref} type={type} className={cx('ds-inline-action', strong && 'ds-inline-action--strong', className)} {...rest}>
      {icon && <Icon name={icon} size={16} />}
      {children}
      {plus && <Icon name="plus" size={14} className="ds-inline-action__plus" />}
    </button>
  );
});
