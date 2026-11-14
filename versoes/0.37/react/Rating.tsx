import { useEffect, useRef } from 'react';
import { createRating, ratingHtml } from '../js/rating.js';
import { useLatest, defined } from './useController';
import { useLocale } from './useLocale';
import { cx } from './cx';

export interface RatingProps {
  /** A pergunta, para o leitor de tela (“Como você avalia esta página?”). */
  label: string;
  /** Nome do campo: o formulário envia a nota (1 a max). */
  name?: string;
  /** A nota, de 0 (sem nota) a max. Com onChange, acompanha o estado. */
  value?: number;
  onChange?: (value: number) => void;
  max?: number;
  /** Clicar de novo na estrela marcada tira a nota. Padrão: sim. */
  clearable?: boolean;
  disabled?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

type RatingApi = { value: number; setValue(value: number): void; destroy(): void };

/**
 * Estrelas para dar nota; cada estrela é um rádio nativo.
 *   <Rating label="Sua nota" name="nota" value={nota} onChange={setNota} />
 * https://lumeui.dev/#/componentes/avaliacao
 */
export function Rating({ label, name, value, onChange, max, clearable, disabled, required, size = 'md', className }: RatingProps) {
  const root = useRef<HTMLDivElement>(null);
  const api = useRef<RatingApi | null>(null);
  const change = useLatest(onChange);
  const start = useLatest(value);
  useEffect(() => {
    const r = createRating(root.current!, defined({ name, max, clearable, disabled, required, value: start.current, onChange: (v: number) => change.current?.(v) })) as RatingApi;
    api.current = r;
    return () => {
      r.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, max, clearable, disabled, required]);
  useEffect(() => {
    if (value !== undefined && api.current && api.current.value !== value) api.current.setValue(value);
  }, [value]);
  return <div ref={root} className={cx('ds-rating', size !== 'md' && `ds-rating--${size}`, className)} aria-label={label} />;
}

export interface RatingDisplayProps {
  /** A média, com qualquer decimal (4.5 mostra meia estrela). */
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  /** Mostra o número ao lado (“4,5”). */
  text?: boolean;
  /** Quantas notas, entre parênteses. */
  count?: number;
  /** Texto para o leitor de tela; padrão “Nota 4,5 de 5”. */
  label?: string;
}

/**
 * Só mostra a nota: uma imagem com o texto da nota para o leitor de tela.
 *   <RatingDisplay value={4.5} text count={128} />
 */
export function RatingDisplay({ value, max, size, text, count, label }: RatingDisplayProps) {
  useLocale();
  const html = ratingHtml(value, defined({ max, size: size === 'md' ? undefined : size, text, count, label }));
  return <span style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: html }} />;
}
