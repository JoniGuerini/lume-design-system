import { type AnchorHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';
import { Icon } from './Icon';
import { msg } from '../js/i18n.js';
import { useLocale } from './useLocale';
import { cx } from './cx';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** inline (padrão): sublinhado, no meio do texto. standalone: solto, no fim de um card ou lista, com seta. */
  variant?: 'inline' | 'standalone';
  /** Apagado, para rodapés e metadados. */
  muted?: boolean;
  /** Sai do site: abre em nova aba, com o ícone de link externo e o aviso para o leitor de tela. */
  external?: boolean;
  /** Sem destino: fica apagado e não navega. */
  disabled?: boolean;
  children: ReactNode;
}

/**
 * Link do Lume. Para ir a algum lugar; para fazer algo, use Button.
 *   <Link href="/cores">cores</Link> · <Link variant="standalone" href="/novidades">Ver todas as versões</Link>
 * https://lumeui.dev/#/componentes/link
 */
export function Link({ variant = 'inline', muted, external, disabled, href, className, children, ...rest }: LinkProps) {
  useLocale();
  return (
    <a
      className={cx('ds-link', variant === 'standalone' && 'ds-link--standalone', muted && 'ds-link--muted', className)}
      href={disabled ? undefined : href}
      aria-disabled={disabled || undefined}
      {...(external && !disabled ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
      {external ? (
        <>
          <Icon name="external-link" size={16} className="ds-link__icon" />
          <span className="ds-visually-hidden">{msg('link.external')}</span>
        </>
      ) : (
        variant === 'standalone' && <Icon name="arrow-right" size={16} className="ds-link__icon" data-arrow="" />
      )}
    </a>
  );
}

export interface DividerProps extends HTMLAttributes<HTMLElement> {
  /** Na vertical, entre itens de uma linha (o contêiner precisa ser flex). */
  vertical?: boolean;
  /** Texto no meio da linha (“ou”), ou no começo com labelPosition="start". */
  label?: ReactNode;
  labelPosition?: 'center' | 'start';
  /** Some nas pontas, como o divisor da sidebar. */
  fade?: boolean;
}

/**
 * Linha fina entre blocos. Sem margem: o espaço vem do gap de quem o contém.
 * https://lumeui.dev/#/componentes/divisor
 */
export function Divider({ vertical, label, labelPosition = 'center', fade, className, ...rest }: DividerProps) {
  if (label != null)
    return (
      <div className={cx('ds-divider', 'ds-divider--label', labelPosition === 'start' && 'ds-divider--start', className)} {...rest}>
        <span>{label}</span>
      </div>
    );
  if (vertical) return <span className={cx('ds-divider', 'ds-divider--vertical', className)} role="separator" aria-orientation="vertical" {...rest} />;
  return <hr className={cx('ds-divider', fade && 'ds-divider--fade', className)} {...(rest as HTMLAttributes<HTMLHRElement>)} />;
}
