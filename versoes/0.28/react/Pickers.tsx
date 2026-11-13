import { useEffect, useRef } from 'react';
import { createDatePicker } from '../js/date-picker.js';
import { createTimePicker } from '../js/time-picker.js';
import { createNumberField } from '../js/number-field.js';
import { createTagField } from '../js/tag-field.js';
import { Input, type FieldSize } from './Field';
import { useLatest, stableKey, defined } from './useController';

interface Controller<V> {
  readonly value: V;
  setValue(value: V): void;
  destroy(): void;
}

interface TextControlBase {
  /** name do valor no formulário (vai num input oculto, no formato de máquina). */
  name?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  size?: FieldSize;
  'aria-describedby'?: string;
  'aria-label'?: string;
}

/** Liga um controlador do Lume a um <input> e mantém o valor do React e o do controlador iguais. */
function useControlled<V>(
  create: (input: HTMLInputElement, emit: (value: V) => void) => Controller<V>,
  value: V,
  onChange: ((value: V) => void) | undefined,
  deps: unknown[],
) {
  const input = useRef<HTMLInputElement>(null);
  const api = useRef<Controller<V> | null>(null);
  const emit = useLatest(onChange);
  const latest = useLatest(value);
  useEffect(() => {
    const c = create(input.current!, (v) => emit.current?.(v));
    c.setValue(latest.current);
    api.current = c;
    return () => {
      c.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  const key = stableKey(value);
  useEffect(() => {
    if (api.current && stableKey(api.current.value) !== key) api.current.setValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return input;
}

const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export interface DateRange {
  start: Date;
  end: Date | null;
}

interface DatePickerBase extends TextControlBase {
  /** Primeiro e último dia que dá para escolher (inclusive). */
  min?: Date;
  max?: Date;
  /** Meses lado a lado no calendário. Padrão: 1 (no período, 2 quando cabe). */
  months?: number;
}

export interface SingleDatePickerProps extends DatePickerBase {
  mode?: 'single';
  value: Date | null;
  onChange: (value: Date | null) => void;
}

export interface RangeDatePickerProps extends DatePickerBase {
  mode: 'range';
  value: DateRange | null;
  onChange: (value: DateRange | null) => void;
}

export type DatePickerProps = SingleDatePickerProps | RangeDatePickerProps;

/**
 * Campo de data que também abre um calendário; dá para digitar no formato do idioma.
 * O formulário recebe a data em ISO (2026-11-08, ou 2026-11-08/2026-11-15 no período).
 * https://lumeui.dev/#/componentes/seletor-de-data
 */
export function DatePicker(props: DatePickerProps) {
  const { mode = 'single', min, max, months, name, size, value, onChange, ...rest } = props;
  const input = useControlled<Date | DateRange | null>(
    (el, emit) => createDatePicker(el, defined({ mode, min, max, months, placeholder: rest.placeholder, onChange: emit })),
    value,
    onChange as (v: Date | DateRange | null) => void,
    [mode, min?.getTime(), max?.getTime(), months, rest.placeholder],
  );
  const hidden = !value ? '' : mode === 'range' ? ((value as DateRange).end ? `${iso((value as DateRange).start)}/${iso((value as DateRange).end!)}` : '') : iso(value as Date);
  return (
    <>
      <Input ref={input} size={size} autoComplete="off" {...rest} />
      {name && <input type="hidden" name={name} value={hidden} />}
    </>
  );
}

export interface TimePickerProps extends TextControlBase {
  /** HH:MM, em 24 h. */
  value: string | null;
  onChange: (value: string | null) => void;
  /** Minutos entre as opções da lista. Padrão: 15. */
  step?: number;
  min?: string;
  max?: string;
}

/**
 * Campo de horário com uma lista; aceita digitar 1430, 14h30 ou 2:30 pm. O formulário recebe HH:MM.
 * https://lumeui.dev/#/componentes/seletor-de-horario
 */
export function TimePicker({ value, onChange, step, min, max, name, size, ...rest }: TimePickerProps) {
  const input = useControlled<string | null>(
    (el, emit) => createTimePicker(el, defined({ step, min, max, placeholder: rest.placeholder, onChange: emit })),
    value,
    onChange,
    [step, min, max, rest.placeholder],
  );
  return (
    <>
      <Input ref={input} size={size} autoComplete="off" {...rest} />
      {name && <input type="hidden" name={name} value={value ?? ''} />}
    </>
  );
}

export interface NumberFieldProps extends TextControlBase {
  value: number | null;
  onChange: (value: number | null) => void;
  min?: number;
  max?: number;
  /** Padrão: 1. */
  step?: number;
  /** Opções de Intl.NumberFormat: { style: 'currency', currency: 'BRL' }, { style: 'percent' }… */
  format?: Intl.NumberFormatOptions;
}

/**
 * Número com − e +, limites, passo e o formato do idioma. O formulário recebe o número puro (1234.5).
 * https://lumeui.dev/#/componentes/campo-numerico
 */
export function NumberField({ value, onChange, min, max, step, format, name, size, ...rest }: NumberFieldProps) {
  const input = useControlled<number | null>(
    (el, emit) => createNumberField(el, defined({ min, max, step, format, onChange: emit })),
    value,
    onChange,
    [min, max, step, stableKey(format)],
  );
  return (
    <>
      <Input ref={input} size={size} className="ds-number" {...rest} />
      {name && <input type="hidden" name={name} value={value ?? ''} />}
    </>
  );
}

export interface TagFieldProps extends TextControlBase {
  value: string[];
  onChange: (value: string[]) => void;
  /** No máximo N tags. */
  max?: number;
  /** Devolve a mensagem de erro, ou null quando a tag vale. */
  validate?: (text: string) => string | null;
}

/**
 * Vários valores livres num campo só: Enter ou vírgula criam a tag. O formulário recebe os valores separados por vírgula.
 * https://lumeui.dev/#/componentes/campo-de-tags
 */
export function TagField({ value, onChange, max, validate, name, size, ...rest }: TagFieldProps) {
  const check = useLatest(validate);
  const input = useControlled<string[]>(
    (el, emit) => createTagField(el, defined({ max, validate: check.current ? (t: string) => check.current!(t) : undefined, onChange: emit })),
    value,
    onChange,
    [max, Boolean(validate)],
  );
  return (
    <>
      <Input ref={input} size={size} className="ds-tags" {...rest} />
      {name && <input type="hidden" name={name} value={value.join(',')} />}
    </>
  );
}
