import { forwardRef, useRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from './Icon';
import { Menu, type MenuOption } from './Navigation';
import { msg } from '../js/i18n.js';
import { useLocale } from './useLocale';
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

export interface SplitButtonProps {
  /** O rótulo da ação principal, com verbo ("Novo atendimento"). */
  label: string;
  icon?: IconName;
  /** A ação principal. */
  onClick: () => void;
  /** As alternativas, no menu da seta (modo ação: separador e tone: 'danger' valem). */
  options: MenuOption[];
  /** Chamado com o value da alternativa escolhida. */
  onSelect: (value: string) => void;
  /** Nome da seta e do menu para o leitor de tela. Padrão: "Mais opções". */
  menuLabel?: string;
  /** Padrão: primary. Ghost não entra: sem contorno, as duas metades não se leem como uma peça. */
  variant?: Exclude<ButtonVariant, 'ghost'>;
  size?: ButtonSize;
  disabled?: boolean;
  /** A ação principal está em andamento: o spinner entra nela e a seta fica indisponível. */
  busy?: boolean;
  className?: string;
}

/**
 * A ação principal e, colada nela, a seta com as alternativas ("Novo atendimento ▾").
 * https://lumeui.dev/#/componentes/botao-dividido
 */
export function SplitButton({
  label, icon, onClick, options, onSelect, menuLabel, variant = 'primary', size = 'md', disabled, busy, className,
}: SplitButtonProps) {
  useLocale();
  const arrow = useRef<HTMLButtonElement>(null);
  const name = menuLabel ?? msg('split.more');
  return (
    <div className={cx('ds-split-button', className)}>
      <Button variant={variant} size={size} icon={icon} disabled={disabled} busy={busy} onClick={onClick}>
        {label}
      </Button>
      <button
        ref={arrow}
        type="button"
        className={classes({ variant, size }, 'ds-split-button__menu')}
        aria-label={name}
        disabled={disabled || busy}
      >
        <Icon name="chevron-down" size={size === 'sm' ? 16 : 18} />
      </button>
      <Menu triggerRef={arrow} options={options} mode="action" label={name} hideLabel onChange={onSelect} />
    </div>
  );
}
