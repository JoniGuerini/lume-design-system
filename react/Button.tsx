import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from './Icon';
import { cx } from './cx';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'subtle' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonLook {
  /** O peso da ação. Uma só primária por tela. Padrão: secondary. */
  variant?: ButtonVariant;
  /** Padrão: md (40 px). sm para barras densas; lg para chamadas e toque. */
  size?: ButtonSize;
  /** Ícone antes do rótulo. */
  icon?: IconName;
  /** Ícone depois do rótulo: só para "avançar". */
  iconEnd?: IconName;
  /** Cantos de pílula. */
  pill?: boolean;
  /** Ocupa a largura toda. */
  block?: boolean;
}

const classes = ({ variant = 'secondary', size = 'md', pill, block }: ButtonLook, className?: string) =>
  cx('ds-btn', `ds-btn--${variant}`, size !== 'md' && `ds-btn--${size}`, pill && 'ds-btn--pill', block && 'ds-btn--block', className);

export interface ButtonProps extends ButtonLook, ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Ocupado: mostra o spinner no lugar do ícone, marca aria-busy e fica indisponível (aria-disabled),
   * sem perder o foco: o clique e o envio do formulário não disparam de novo. Troque o rótulo ("Salvando").
   */
  busy?: boolean;
}

/**
 * Dispara uma ação. Rótulo começa com verbo: "Salvar alterações", não "OK".
 * https://lumeui.dev/#/componentes/botao
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, size, icon, iconEnd, pill, block, busy, className, type = 'button', children, onClick, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={classes({ variant, size, pill, block }, className)}
      {...rest}
      aria-busy={busy || undefined}
      aria-disabled={busy || rest['aria-disabled'] || undefined}
      onClick={(event) => {
        // ocupado: nada de segundo envio (o Enter num campo também chega aqui como clique no botão de envio)
        if (busy) {
          event.preventDefault();
          return;
        }
        onClick?.(event);
      }}
    >
      {busy ? <span className="ds-spinner ds-spinner--sm" aria-hidden="true" /> : icon && <Icon name={icon} />}
      {children}
      {iconEnd && <Icon name={iconEnd} />}
    </button>
  );
});

export interface ButtonLinkProps extends ButtonLook, AnchorHTMLAttributes<HTMLAnchorElement> {}

/** O mesmo visual do Botão, para navegar: vira um link (<a>), com o teclado e o leitor de tela de um link. */
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(function ButtonLink(
  { variant, size, icon, iconEnd, pill, block, className, children, ...rest },
  ref,
) {
  return (
    <a ref={ref} className={classes({ variant, size, pill, block }, className)} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
      {iconEnd && <Icon name={iconEnd} />}
    </a>
  );
});
