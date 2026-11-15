import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from './Icon';
import { cx } from './cx';

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** O ícone do botão. */
  icon: IconName;
  /** O nome da ação para leitores de tela ("Fechar", "Editar"). Obrigatório: o botão não tem texto. */
  label: string;
  /** Padrão: md (36 px). */
  size?: 'sm' | 'md' | 'lg';
  /** Padrão: sem fundo. subtle tem fundo leve; outline, contorno; muted, ícone apagado. */
  look?: 'plain' | 'subtle' | 'outline' | 'muted';
  /** Redondo. */
  round?: boolean;
}

/**
 * Botão só com ícone, sem fundo até o hover.
 * https://lumeui.dev/#/componentes/botao
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon, label, size = 'md', look = 'plain', round, className, type = 'button', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      className={cx(
        'ds-icon-btn',
        size !== 'md' && `ds-icon-btn--${size}`,
        look !== 'plain' && `ds-icon-btn--${look}`,
        round && 'ds-icon-btn--round',
        className,
      )}
      {...rest}
    >
      <Icon name={icon} size={size === 'sm' ? 16 : 20} />
    </button>
  );
});
