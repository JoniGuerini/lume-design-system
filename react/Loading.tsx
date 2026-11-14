import { type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';
import { formatNumber, msg } from '../js/i18n.js';
import { useLocale } from './useLocale';
import { useSafeId } from './useController';
import { cx } from './cx';

export interface ProgressProps extends Omit<HTMLAttributes<HTMLProgressElement>, 'children'> {
  /** De 0 a max. Sem valor, a barra fica indeterminada (em movimento). */
  value?: number;
  /** Padrão: 100. */
  max?: number;
  /** Tom do resultado: success no fim, danger no erro, warning perto do limite. */
  tone?: 'brand' | 'success' | 'warning' | 'danger';
  /** Mais grossa (8 px). */
  large?: boolean;
  /** O que está carregando. Com rótulo, mostra a linha de cima com o nome e a porcentagem. */
  label?: ReactNode;
  /** Mostra a porcentagem ao lado do rótulo. Padrão: sim, quando há valor. */
  showValue?: boolean;
}

/**
 * Barra de progresso. Com label, vira o campo completo (nome em cima, porcentagem à direita).
 * https://lumeui.dev/#/componentes/barra-de-progresso
 */
export function Progress({ value, max = 100, tone = 'brand', large, label, showValue = true, className, ...rest }: ProgressProps) {
  const id = useSafeId('pg');
  const bar = (
    <progress
      className={cx('ds-progress', tone !== 'brand' && `ds-progress--${tone}`, large && 'ds-progress--lg', !label && className)}
      value={value}
      max={max}
      aria-labelledby={label ? id : undefined}
      {...rest}
    />
  );
  if (!label) return bar;
  return (
    <div className={cx('ds-progress-field', className)}>
      <div className="ds-progress-field__head">
        <span id={id}>{label}</span>
        {showValue && value !== undefined && (
          <span className="ds-progress-field__value">{formatNumber(value / max, { style: 'percent' })}</span>
        )}
      </div>
      {bar}
    </div>
  );
}

export interface ProgressRingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** De 0 a max. Sem valor, o arco gira: indeterminado. */
  value?: number;
  /** Padrão: 100. */
  max?: number;
  /** sm (20 px, sem número) · md (56, padrão) · lg (80). */
  size?: 'sm' | 'md' | 'lg';
  /** Tom do resultado, como na barra. */
  tone?: 'brand' | 'success' | 'warning' | 'danger';
  /** O que está progredindo, para o leitor de tela. Padrão: "Progresso", no idioma do Lume. */
  label?: string;
  /** Mostra a porcentagem no meio (md e lg). Padrão: sim. */
  showValue?: boolean;
}

/**
 * Progresso circular: o anel da barra, para quando a barra não cabe.
 * https://lumeui.dev/#/componentes/progresso-circular
 */
export function ProgressRing({ value, max = 100, size = 'md', tone = 'brand', label, showValue = true, className, style, ...rest }: ProgressRingProps) {
  useLocale();
  const on = value !== undefined && value !== null;
  const v = on ? Math.max(0, Math.min(max, value)) : 0;
  return (
    <div
      className={cx('ds-progress-ring', size !== 'md' && `ds-progress-ring--${size}`, tone !== 'brand' && `ds-progress-ring--${tone}`, className)}
      role="progressbar"
      aria-label={label ?? msg('progress.label')}
      {...(on ? { 'aria-valuemin': 0, 'aria-valuemax': max, 'aria-valuenow': v } : {})}
      style={{ ...(on ? { '--ds-progress-value': (v / max) * 100 } : {}), ...style } as CSSProperties}
      {...rest}
    >
      <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <circle className="ds-progress-ring__track" cx="20" cy="20" r="18" />
        <circle className="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength={100} />
      </svg>
      {on && showValue && size !== 'sm' && (
        <span className="ds-progress-ring__value" aria-hidden="true">{formatNumber(v / max, { style: 'percent', maximumFractionDigits: 0 })}</span>
      )}
    </div>
  );
}

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /** Padrão: md (24 px). sm (16) dentro de botões. */
  size?: 'sm' | 'md' | 'lg';
  /** O que está carregando, para leitores de tela. Padrão: "Carregando", no idioma do Lume. */
  label?: string;
  /** Dentro de algo que já se anuncia (um botão com aria-busy): esconde do leitor de tela. */
  decorative?: boolean;
}

/**
 * Indicador de espera curta. Para conteúdo que vai aparecer no lugar, prefira o Skeleton.
 * https://lumeui.dev/#/componentes/spinner
 */
export function Spinner({ size = 'md', label, decorative, className, ...rest }: SpinnerProps) {
  useLocale();
  return (
    <span
      className={cx('ds-spinner', size !== 'md' && `ds-spinner--${size}`, className)}
      {...(decorative ? { 'aria-hidden': true } : { role: 'status', 'aria-label': label ?? msg('common.loading') })}
      {...rest}
    />
  );
}

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  /** block (padrão): um bloco de 64 px de altura; text: uma linha de texto; circle: avatar. */
  shape?: 'block' | 'text' | 'circle';
  /** Largura ("60%", "120px"). Padrão: a largura toda. */
  width?: string;
  /** Altura de um bloco ("120px"). */
  height?: string;
  /** Diâmetro de um círculo ("32px"). Padrão: 40 px. */
  size?: string;
}

/**
 * Forma apagada no lugar do conteúdo que está chegando. Ponha o grupo dentro de algo com aria-busy="true".
 * https://lumeui.dev/#/componentes/skeleton
 */
export function Skeleton({ shape = 'block', width, height, size, className, style, ...rest }: SkeletonProps) {
  const vars: Record<string, string> = {};
  if (width) vars['--w'] = width;
  if (height) vars['--h'] = height;
  if (size) vars['--s'] = size;
  return (
    <span
      aria-hidden="true"
      className={cx('ds-skeleton', shape !== 'block' && `ds-skeleton--${shape}`, className)}
      style={{ ...vars, ...style } as CSSProperties}
      {...rest}
    />
  );
}
