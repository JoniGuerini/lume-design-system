/** Junta classes, ignorando o que for falso: cx('ds-btn', size !== 'md' && `ds-btn--${size}`, className). */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
