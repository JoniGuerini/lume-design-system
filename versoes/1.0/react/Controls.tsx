import { forwardRef, useEffect, useImperativeHandle, useRef, type ReactNode } from 'react';
import { createSlider } from '../js/slider.js';
import { createFileUpload } from '../js/file-upload.js';
import { createOtpField } from '../js/otp-field.js';
import { msg } from '../js/i18n.js';
import { useFieldProps } from './Field';
import { useLocale } from './useLocale';
import { useLatest, stableKey, defined, useSafeId } from './useController';
import { cx } from './cx';

/* ───────── Slider ───────── */

interface SliderBase {
  /** O rótulo, à esquerda; o valor aparece à direita. */
  label: ReactNode;
  min?: number;
  max?: number;
  step?: number;
  /** Texto do valor e do leitor de tela: (v) => `${v}%`. */
  format?: (value: number) => string;
  /** Marcas abaixo do trilho. */
  marks?: Array<{ value: number; label?: string }>;
  name?: string;
  disabled?: boolean;
  className?: string;
}

export interface SingleSliderProps extends SliderBase {
  value: number;
  /** A cada movimento. */
  onChange: (value: number) => void;
  /** Ao soltar: bom para salvar ou buscar. */
  onCommit?: (value: number) => void;
}

export interface RangeSliderProps extends SliderBase {
  value: [number, number];
  onChange: (value: [number, number]) => void;
  onCommit?: (value: [number, number]) => void;
}

export type SliderProps = SingleSliderProps | RangeSliderProps;

/**
 * Um valor, ou uma faixa, num trilho. Por baixo, o <input type="range"> nativo cuida do teclado e do leitor de tela.
 * https://lumeui.dev/#/componentes/slider
 */
export function Slider(props: SliderProps) {
  useLocale();
  const { label, min = 0, max = 100, step = 1, format, marks, name, disabled, className, value } = props;
  const range = Array.isArray(value);
  const id = useSafeId('s');
  const root = useRef<HTMLDivElement>(null);
  const api = useRef<{ value: number | number[]; setValue(v: number | number[]): void; refresh(): void; destroy(): void } | null>(null);
  const change = useLatest(props.onChange as (v: number | number[]) => void);
  const commit = useLatest(props.onCommit as ((v: number | number[]) => void) | undefined);
  const fmt = useLatest(format);
  const latest = useLatest(value);

  useEffect(() => {
    const c = createSlider(root.current!, defined({
      format: (v: number) => (fmt.current ? fmt.current(v) : String(v)),
      marks,
      onInput: (v: number | number[]) => change.current(v),
      onChange: (v: number | number[]) => commit.current?.(v),
    }));
    c.setValue(latest.current);
    api.current = c;
    return () => {
      c.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range, min, max, step, stableKey(marks)]);

  const key = stableKey(value);
  useEffect(() => {
    if (api.current && stableKey(api.current.value) !== key) api.current.setValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const common = { className: 'ds-slider__input', type: 'range', min, max, step, disabled } as const;
  return (
    <div className={cx('ds-form-field', className)}>
      <div className="ds-slider__head">
        {range ? <span className="ds-form-field__label" id={`${id}-label`}>{label}</span> : <label className="ds-form-field__label" htmlFor={id}>{label}</label>}
        <output className="ds-slider__value" htmlFor={id} />
      </div>
      {range ? (
        <div ref={root} className="ds-slider" role="group" aria-labelledby={`${id}-label`}>
          <input {...common} defaultValue={value[0]} aria-label={msg('slider.min')} name={name ? `${name}-min` : undefined} />
          <input {...common} defaultValue={value[1]} aria-label={msg('slider.max')} name={name ? `${name}-max` : undefined} />
        </div>
      ) : (
        <div ref={root} className="ds-slider">
          <input {...common} id={id} defaultValue={value} name={name} />
        </div>
      )}
    </div>
  );
}

/* ───────── Upload ───────── */

export interface FileUploadProps {
  /** Tipos aceitos: ['image/*', '.pdf']. */
  accept?: string[];
  /** Tamanho máximo por arquivo, em bytes. */
  maxSize?: number;
  maxFiles?: number;
  multiple?: boolean;
  /** Mais uma linha de orientação, junto dos limites. */
  hint?: string;
  /**
   * Envia cada arquivo assim que entra na lista; devolva uma promessa. Uma falha vira erro naquela linha, com "Tentar de novo".
   * Sem upload, os arquivos seguem com o formulário (name).
   */
  upload?: (file: File, ctx: { onProgress: (fraction: number) => void; signal: AbortSignal }) => Promise<unknown>;
  /** Os arquivos aceitos, a cada mudança. */
  onChange?: (files: File[]) => void;
  name?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export interface FileUploadHandle {
  readonly files: File[];
  clear(): void;
}

/**
 * Arrastar ou escolher arquivos, com progresso e erro por arquivo. A área inteira é o <input type="file"> nativo.
 * https://lumeui.dev/#/componentes/upload
 */
export const FileUpload = forwardRef<FileUploadHandle, FileUploadProps>(function FileUpload(
  { accept, maxSize, maxFiles, multiple, hint, upload, onChange, name, disabled, required, className, ...rest },
  ref,
) {
  const a11y = useFieldProps(rest);
  const root = useRef<HTMLDivElement>(null);
  const api = useRef<{ files: File[]; clear(): void; destroy(): void } | null>(null);
  const change = useLatest(onChange);
  const send = useLatest(upload);
  useImperativeHandle(ref, () => ({
    get files() {
      return api.current?.files ?? [];
    },
    clear: () => api.current?.clear(),
  }));
  useEffect(() => {
    const c = createFileUpload(root.current!, defined({
      accept,
      maxSize,
      maxFiles,
      hint,
      upload: send.current ? (file: File, ctx: { onProgress: (n: number) => void; signal: AbortSignal }) => send.current!(file, ctx) : undefined,
      onChange: (files: File[]) => change.current?.(files),
    }));
    api.current = c;
    return () => {
      c.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stableKey(accept), maxSize, maxFiles, hint, multiple, Boolean(upload)]);
  return (
    <div ref={root} className={cx('ds-upload', className)}>
      <input className="ds-upload__input" type="file" id={a11y.id} name={name} multiple={multiple} disabled={disabled} required={required} aria-invalid={a11y['aria-invalid']} />
    </div>
  );
});

/* ───────── Código de verificação ───────── */

export interface OtpFieldProps {
  /** Casas. Padrão: 6. */
  length?: number;
  /** Separa em grupos de N (3 = "123 456"). */
  group?: number;
  /** Aceita letras também. */
  alphanumeric?: boolean;
  value?: string;
  /** A cada dígito. */
  onChange?: (value: string) => void;
  /** Quando a última casa é preenchida: hora de verificar. */
  onComplete?: (code: string) => void;
  /** Código recusado: casas em vermelho e aria-invalid. */
  error?: boolean;
  name?: string;
  id?: string;
  disabled?: boolean;
  /** Nome para leitores de tela, quando não há Field com rótulo. */
  'aria-label'?: string;
  className?: string;
}

/**
 * Um dígito por casa, para login em duas etapas. Por baixo é um input só, com autocomplete="one-time-code".
 * https://lumeui.dev/#/componentes/codigo-de-verificacao
 */
export function OtpField({ length = 6, group, alphanumeric, value, onChange, onComplete, error, name, disabled, className, ...rest }: OtpFieldProps) {
  const a11y = useFieldProps(rest);
  const root = useRef<HTMLDivElement>(null);
  const api = useRef<{ value: string; setValue(v: string): void; setError(on: boolean): void; destroy(): void } | null>(null);
  const done = useLatest(onComplete);
  const change = useLatest(onChange);
  useEffect(() => {
    const c = createOtpField(root.current!, defined({ length, group, alphanumeric, onComplete: (code: string) => done.current?.(code) }));
    api.current = c;
    const input = root.current!.querySelector('input')!;
    const onInput = () => change.current?.(input.value);
    input.addEventListener('input', onInput);
    if (value) c.setValue(value);
    return () => {
      input.removeEventListener('input', onInput);
      c.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, group, alphanumeric]);
  useEffect(() => {
    if (api.current && value !== undefined && api.current.value !== value) api.current.setValue(value);
  }, [value]);
  useEffect(() => {
    api.current?.setError(Boolean(error));
  }, [error]);
  return (
    <div ref={root} className={cx('ds-otp', className)}>
      <input className="ds-otp__input" id={a11y.id} name={name} disabled={disabled} aria-label={rest['aria-label']} aria-describedby={a11y['aria-describedby']} />
    </div>
  );
}
