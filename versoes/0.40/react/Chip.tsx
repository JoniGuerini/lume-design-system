import { forwardRef, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';
import { Icon, type IconName } from './Icon';
import { msg } from '../js/i18n.js';
import { useLocale } from './useLocale';
import { cx } from './cx';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Filtro: ligado ou desligado. Ligado, mostra o ✓. Deixe vazio num chip que não é filtro. */
  pressed?: boolean;
  /** Ícone antes do texto (em seletores, o do critério). */
  icon?: IconName;
  /** Mostra a seta: o chip abre um menu (Seletor). Use com aria-haspopup e aria-expanded. */
  chevron?: boolean;
  /** Padrão: md (36 px). */
  size?: 'sm' | 'md';
}

/**
 * Pílula com contorno para filtrar e escolher. Filtro: passe pressed e troque no onClick.
 * https://lumeui.dev/#/componentes/chip
 */
export const Chip = forwardRef<HTMLButtonElement, ChipProps>(function Chip(
  { pressed, icon, chevron, size = 'md', className, type = 'button', children, ...rest },
  ref,
) {
  const sm = size === 'sm';
  return (
    <button
      ref={ref}
      type={type}
      aria-pressed={pressed}
      className={cx('ds-chip', sm && 'ds-chip--sm', className)}
      {...rest}
    >
      {pressed !== undefined && (
        <span className="ds-chip__check"><Icon name="check" size={14} /></span>
      )}
      {icon && <span className="ds-chip__icon"><Icon name={icon} size={sm ? 14 : 16} /></span>}
      {children}
      {chevron && <span className="ds-chip__chevron"><Icon name="chevron-down" size={14} /></span>}
    </button>
  );
});

export interface RemovableChipProps extends HTMLAttributes<HTMLSpanElement> {
  /** O que a pessoa adicionou. */
  children: ReactNode;
  /** Chamado pelo × . */
  onRemove: () => void;
  /** Rótulo do × para leitores de tela. Padrão: "Remover" + o texto, no idioma do Lume. */
  removeLabel?: string;
  size?: 'sm' | 'md';
}

/** Chip que mostra algo adicionado e deixa tirar. Em lista, use dentro de ChipGroup com role="list". */
export function RemovableChip({ children, onRemove, removeLabel, size = 'md', className, ...rest }: RemovableChipProps) {
  useLocale();
  const sm = size === 'sm';
  const label = removeLabel ?? msg('common.remove', typeof children === 'string' ? children : '').trim();
  return (
    <span className={cx('ds-chip', 'ds-chip--removable', sm && 'ds-chip--sm', className)} {...rest}>
      {children}
      <button type="button" className="ds-chip__remove" aria-label={label} onClick={onRemove}>
        <Icon name="x" size={sm ? 12 : 14} />
      </button>
    </span>
  );
}

export interface ChipGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** O nome do grupo para leitores de tela ("Plataformas"). */
  label: string;
}

/** Agrupa chips com o espaçamento certo. Filtros: role="group" (padrão). */
export function ChipGroup({ label, role = 'group', className, ...rest }: ChipGroupProps) {
  return <div role={role} aria-label={label} className={cx('ds-chip-group', className)} {...rest} />;
}
