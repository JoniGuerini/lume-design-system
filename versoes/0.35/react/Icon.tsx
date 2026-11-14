import type { SVGAttributes } from 'react';
import { icons } from '../icons/icons.js';
import type { IconName } from './icon-names';
import { cx } from './cx';

export type { IconName };

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'name'> {
  /** Um dos 147 ícones do Lume. */
  name: IconName;
  /** Tamanho em px. Padrão: 20. Abaixo de 16 px o traço engrossa para 1,75. */
  size?: number;
  /** Texto para leitores de tela. Sem ele, o ícone é decorativo (aria-hidden). */
  label?: string;
}

/** Ícone do Lume. Herda a cor do texto. */
export function Icon({ name, size = 20, label, className, ...rest }: IconProps) {
  return (
    <svg
      className={cx('ds-icon', className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={size <= 16 ? 1.75 : 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: icons[name]?.body ?? '' }}
      {...rest}
    />
  );
}
