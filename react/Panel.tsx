import { type AnchorHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';
import { useSafeId } from './useController';
import { cx } from './cx';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Título curto. */
  title?: ReactNode;
  /** Uma ou duas linhas sobre o conteúdo. */
  text?: ReactNode;
}

/**
 * Superfície simples para agrupar um assunto. Para um cabeçalho com ações, use o Painel.
 * https://lumeui.dev/#/componentes/card
 */
export function Card({ title, text, className, children, ...rest }: CardProps) {
  return (
    <div className={cx('ds-card', className)} {...rest}>
      {title && <p className="ds-card__title">{title}</p>}
      {text && <p className="ds-card__text">{text}</p>}
      {children}
    </div>
  );
}

export interface CardLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> {
  title?: ReactNode;
  text?: ReactNode;
}

/** O card inteiro é um link: o contorno reforça no hover. Um destino só; sem botões dentro. */
export function CardLink({ title, text, className, children, ...rest }: CardLinkProps) {
  return (
    <a className={cx('ds-card', 'ds-card--link', className)} {...rest}>
      {title && <p className="ds-card__title">{title}</p>}
      {text && <p className="ds-card__text">{text}</p>}
      {children}
    </a>
  );
}

export interface PanelProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** O tipo do conteúdo, pequeno e apagado: "Roteiro", "Pedido". */
  eyebrow?: ReactNode;
  /** O assunto. Um por painel; dá nome ao painel para leitores de tela. */
  title?: ReactNode;
  /** Botões de ícone à direita do título (fechar, duplicar). */
  actions?: ReactNode;
  /** Ação secundária abaixo das ações ("Exemplos"). */
  aside?: ReactNode;
  /** Barra de controles entre o cabeçalho e o corpo (chips, PanelSpacer, PanelMeta). */
  toolbar?: ReactNode;
  /** Rodapé com a ação principal. */
  footer?: ReactNode;
  /** compact: menos respiro; flat: sem contorno, dentro de outra superfície; hero: título maior. */
  variant?: 'default' | 'compact' | 'flat' | 'hero';
  /** Nível do título. Padrão: 2. */
  titleLevel?: 2 | 3 | 4;
}

/**
 * Superfície principal de conteúdo, com cabeçalho, barra, corpo e rodapé sempre na mesma ordem.
 * https://lumeui.dev/#/componentes/painel
 */
export function Panel({
  eyebrow, title, actions, aside, toolbar, footer, variant = 'default', titleLevel = 2, className, children, ...rest
}: PanelProps) {
  const id = useSafeId('p');
  const Heading = `h${titleLevel}` as 'h2';
  const hasHeader = eyebrow || title || actions || aside;
  return (
    <article
      className={cx('ds-panel', variant !== 'default' && `ds-panel--${variant}`, className)}
      aria-labelledby={title ? id : undefined}
      {...rest}
    >
      {hasHeader && (
        <header className="ds-panel__header">
          <div>
            {eyebrow && <p className="ds-panel__eyebrow">{eyebrow}</p>}
            {title && <Heading className="ds-panel__title" id={id}>{title}</Heading>}
          </div>
          {actions && <div className="ds-panel__actions">{actions}</div>}
          {aside && <div className="ds-panel__aside">{aside}</div>}
        </header>
      )}
      {toolbar && <div className="ds-panel__toolbar">{toolbar}</div>}
      {children && <div className="ds-panel__body">{children}</div>}
      {footer && <footer className="ds-panel__footer">{footer}</footer>}
    </article>
  );
}

/** Empurra o que vem depois para a direita, na barra do painel. */
export const PanelSpacer = () => <span className="ds-panel__spacer" />;

/** Informação pequena na barra do painel ("~3 min"). */
export const PanelMeta = ({ children }: { children: ReactNode }) => <span className="ds-panel__meta">{children}</span>;

export interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** O carimbo antes do título ("00"). */
  stamp?: ReactNode;
  /** Título pequeno da seção. */
  title: ReactNode;
  /** Ações inline da seção ("Na cena +"). */
  actions?: ReactNode;
}

/** Seção de leitura dentro do painel: "00 · Abertura" e o texto. */
export function Section({ stamp, title, actions, className, children, ...rest }: SectionProps) {
  return (
    <section className={cx('ds-section', className)} {...rest}>
      <p className="ds-section__head">
        {stamp !== undefined && <span className="ds-section__stamp">{stamp}</span>}
        <span>{title}</span>
      </p>
      {typeof children === 'string' ? <p className="ds-section__text">{children}</p> : children}
      {actions && <div className="ds-section__actions">{actions}</div>}
    </section>
  );
}
