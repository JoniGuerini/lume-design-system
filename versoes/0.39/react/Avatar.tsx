import { useState, type HTMLAttributes, type ReactNode } from 'react';
import { Icon } from './Icon';
import { msg } from '../js/i18n.js';
import { useLocale } from './useLocale';
import { cx } from './cx';

export type AvatarTone = 'sand' | 'clay' | 'ochre' | 'slate' | 'green' | 'teal' | 'blue' | 'violet' | 'pink';
export type AvatarStatus = 'online' | 'away' | 'busy' | 'offline';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const TONES: AvatarTone[] = ['sand', 'clay', 'ochre', 'slate', 'green', 'teal', 'blue', 'violet', 'pink'];
const ICON_PX: Record<AvatarSize, number> = { xs: 12, sm: 16, md: 20, lg: 24, xl: 32 };

/** Tom estável por pessoa: o mesmo nome cai sempre no mesmo tom, igual ao site. */
export function avatarTone(name: string): AvatarTone {
  let h = 0;
  for (const ch of name.normalize('NFD')) h = (h * 31 + (ch.codePointAt(0) ?? 0)) >>> 0;
  return TONES[h % TONES.length];
}

/** Primeira letra do primeiro e do último nome. */
export function initials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return '?';
  return (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : '')).toLocaleUpperCase();
}

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** O nome da pessoa: dá as iniciais, o tom e o rótulo para leitores de tela. */
  name?: string;
  /** Foto. Se falhar, as iniciais aparecem. */
  src?: string;
  /** Padrão: md (40 px). */
  size?: AvatarSize;
  /** Padrão: o tom derivado do nome. */
  tone?: AvatarTone;
  /** Bolinha de status no canto. Entra também no rótulo ("Marina, online"). */
  status?: AvatarStatus;
  /** Cantos quadrados, para empresas e projetos. */
  square?: boolean;
  /** Ao lado do nome escrito: esconde do leitor de tela, para não ler duas vezes. */
  decorative?: boolean;
}

/**
 * Representa uma pessoa ou conta: foto quando existe, iniciais num tom estável quando não, ícone sem nome.
 * https://lumeui.dev/#/componentes/avatar
 */
export function Avatar({ name, src, size = 'md', tone, status, square, decorative, className, ...rest }: AvatarProps) {
  useLocale();
  const [failed, setFailed] = useState<string | null>(null);
  const label = name ? (status ? `${name}, ${msg(`avatar.${status}`)}` : name) : undefined;
  return (
    <span
      className={cx(
        'ds-avatar',
        size !== 'md' && `ds-avatar--${size}`,
        name && `ds-avatar--${tone ?? avatarTone(name)}`,
        square && 'ds-avatar--square',
        className,
      )}
      {...(decorative || !label ? { 'aria-hidden': true } : { role: 'img', 'aria-label': label })}
      {...rest}
    >
      {name ? <span aria-hidden="true">{initials(name)}</span> : <Icon name="user" size={ICON_PX[size]} />}
      {src && failed !== src && <img src={src} alt="" onError={() => setFailed(src)} />}
      {status && <span className={`ds-avatar__status ds-avatar__status--${status}`} aria-hidden="true" />}
    </span>
  );
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Os avatares. Passe todos: o grupo mostra até max e resume o resto em "+N". */
  children: ReactNode[];
  /** Quantos mostrar antes do "+N". Padrão: 4. */
  max?: number;
  /** Tamanho do "+N"; use o mesmo dos avatares. Padrão: md. */
  size?: AvatarSize;
}

/** Pessoas de um grupo, sobrepostas. */
export function AvatarGroup({ children, max = 4, size = 'md', className, ...rest }: AvatarGroupProps) {
  useLocale();
  const shown = children.slice(0, max);
  const more = children.length - shown.length;
  return (
    <div role="group" aria-label={msg('avatar.group', children.length)} className={cx('ds-avatar-group', className)} {...rest}>
      {shown}
      {more > 0 && (
        <span className={cx('ds-avatar', 'ds-avatar--more', size !== 'md' && `ds-avatar--${size}`)} role="img" aria-label={msg('avatar.more', more)}>
          +{more}
        </span>
      )}
    </div>
  );
}
