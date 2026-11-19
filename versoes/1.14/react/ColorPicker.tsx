import { useEffect, useRef } from 'react';
import { createColorPicker, createColorField } from '../js/color-picker.js';
import { Input, type FieldSize } from './Field';
import { useLatest, stableKey, defined } from './useController';
import { cx } from './cx';

export type ColorSwatch = string | { value: string; label?: string };

interface ColorController {
  readonly value: string | null;
  setValue(value: string | null): void;
  destroy(): void;
}

export interface ColorPickerProps {
  /** Hexadecimal (#rrggbb). */
  value: string;
  /** A cada mudança, inclusive enquanto arrasta (como o Slider). */
  onChange: (hex: string) => void;
  /** Ao soltar, ao escolher uma amostra ou ao confirmar o hexadecimal: bom para salvar. */
  onCommit?: (hex: string) => void;
  /** Amostras embaixo; sem label, o nome é o hexadecimal. */
  swatches?: ColorSwatch[];
  className?: string;
}

/**
 * Seletor de cor solto: área de saturação e brilho, matiz, hexadecimal e amostras.
 *   <ColorPicker value={cor} onChange={setCor} swatches={['#c97b63', '#3b82f6']} />
 * https://lumeui.dev/#/componentes/seletor-de-cor
 */
export function ColorPicker({ value, onChange, onCommit, swatches, className }: ColorPickerProps) {
  const root = useRef<HTMLDivElement>(null);
  const api = useRef<ColorController | null>(null);
  const change = useLatest(onChange);
  const commit = useLatest(onCommit);
  const latest = useLatest(value);
  useEffect(() => {
    let last = latest.current?.toLowerCase();
    const live = (h: string) => {
      if (h === last) return;
      last = h;
      change.current(h);
    };
    const c = createColorPicker(
      root.current!,
      defined({
        value: latest.current,
        swatches,
        onInput: live,
        onChange: (h: string) => {
          live(h);
          commit.current?.(h);
        },
      }),
    ) as ColorController;
    api.current = c;
    return () => {
      c.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stableKey(swatches)]);
  useEffect(() => {
    if (api.current && api.current.value !== value?.toLowerCase()) api.current.setValue(value);
  }, [value]);
  return <div ref={root} className={cx('ds-color-picker', className)} />;
}

export interface ColorFieldProps {
  /** Hexadecimal (#rrggbb), ou null sem cor. */
  value: string | null;
  onChange: (hex: string | null) => void;
  swatches?: ColorSwatch[];
  /** name do valor no formulário (vai num input oculto). */
  name?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  size?: FieldSize;
  'aria-describedby'?: string;
  'aria-label'?: string;
}

/**
 * Campo de cor: a amostra no começo abre o seletor num painel, e o hexadecimal dá para digitar.
 *   <ColorField id="marca" value={cor} onChange={setCor} swatches={paleta} />
 * https://lumeui.dev/#/componentes/seletor-de-cor
 */
export function ColorField({ value, onChange, swatches, name, size, ...rest }: ColorFieldProps) {
  const input = useRef<HTMLInputElement>(null);
  const api = useRef<ColorController | null>(null);
  const change = useLatest(onChange);
  const latest = useLatest(value);
  useEffect(() => {
    const c = createColorField(input.current!, defined({ value: latest.current ?? undefined, swatches, placeholder: rest.placeholder, onChange: (h: string | null) => change.current(h) })) as ColorController;
    api.current = c;
    return () => {
      c.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stableKey(swatches), rest.placeholder]);
  useEffect(() => {
    if (api.current && api.current.value !== (value?.toLowerCase() ?? null)) api.current.setValue(value);
  }, [value]);
  return (
    <>
      <Input ref={input} size={size} autoComplete="off" spellCheck={false} {...rest} />
      {name && <input type="hidden" name={name} value={value ?? ''} />}
    </>
  );
}
