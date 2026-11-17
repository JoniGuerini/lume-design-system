import { forwardRef, useEffect, useImperativeHandle, useRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { Icon } from './Icon';
import { useSafeId } from './useController';
import { cx } from './cx';

type NativeInput = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>;

interface ChoiceText {
  /** O texto da opção. Sem ele, passe aria-label. */
  label?: ReactNode;
  /** Uma linha de explicação abaixo do rótulo. */
  description?: ReactNode;
}

function Text({ label, description }: ChoiceText) {
  if (!label && !description) return null;
  return (
    <span className="ds-choice__text">
      {label && <span className="ds-choice__label">{label}</span>}
      {description && <span className="ds-choice__description">{description}</span>}
    </span>
  );
}

export interface CheckboxProps extends NativeInput, ChoiceText {
  /** "Alguns marcados": o traço no lugar do ✓, para o "marcar todos" de uma lista. */
  indeterminate?: boolean;
}

/**
 * Marca uma opção que vale sozinha, para enviar depois. Efeito imediato é Switch.
 * https://lumeui.dev/#/componentes/checkbox-radio
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, description, indeterminate = false, className, ...rest },
  ref,
) {
  const inner = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inner.current as HTMLInputElement);
  useEffect(() => {
    if (inner.current) inner.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const Tag = label || description ? 'label' : 'span';
  return (
    <Tag className={cx('ds-checkbox', className)}>
      <input ref={inner} type="checkbox" className="ds-checkbox__input" {...rest} />
      <Text label={label} description={description} />
    </Tag>
  );
});

export interface RadioProps extends NativeInput, ChoiceText {}

/** Uma opção entre várias, exatamente uma. Use dentro de RadioGroup ou com o mesmo name. */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio({ label, description, className, ...rest }, ref) {
  return (
    <label className={cx('ds-radio', className)}>
      <input ref={ref} type="radio" className="ds-radio__input" {...rest} />
      <Text label={label} description={description} />
    </label>
  );
});

export interface SwitchProps extends NativeInput, ChoiceText {
  /** Padrão: md. */
  size?: 'sm' | 'md';
  /** O switch depois do texto, para listas de ajustes. */
  end?: boolean;
}

/**
 * Liga e desliga com efeito imediato. Para marcar e enviar depois, use Checkbox.
 * https://lumeui.dev/#/componentes/switch
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, description, size = 'md', end, className, ...rest },
  ref,
) {
  return (
    <label className={cx('ds-switch', size === 'sm' && 'ds-switch--sm', end && 'ds-switch--end', className)}>
      <input ref={ref} type="checkbox" role="switch" className="ds-switch__input" {...rest} />
      <Text label={label} description={description} />
    </label>
  );
});

export interface ChoiceGroupProps {
  /** A pergunta do grupo. */
  legend: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  /** As opções lado a lado, para poucas opções curtas. */
  inline?: boolean;
  /** Para a validação do Form: pelo menos N marcados. */
  min?: number;
  className?: string;
  children: ReactNode;
}

/** Agrupa checkboxes ou radios com uma pergunta, dica e erro. */
export function ChoiceGroup({ legend, hint, error, inline, min, className, children }: ChoiceGroupProps) {
  const id = useSafeId('g');
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  return (
    <fieldset
      className={cx('ds-choice-group', inline && 'ds-choice-group--inline', className)}
      aria-describedby={describedBy}
      aria-invalid={error ? true : undefined}
      data-min={min}
    >
      <legend className="ds-choice-group__legend">{legend}</legend>
      <div className="ds-choice-group__items">{children}</div>
      {hint && !error && <p className="ds-choice-group__hint" id={`${id}-hint`}>{hint}</p>}
      {error && (
        <p className="ds-choice-group__error" id={`${id}-error`}>
          <Icon name="alert-circle" size={16} />
          <span>{error}</span>
        </p>
      )}
    </fieldset>
  );
}

export interface ChoiceOption {
  value: string;
  label: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
}

interface GroupBase extends Omit<ChoiceGroupProps, 'children'> {
  options: ChoiceOption[];
  /** name dos inputs, para o envio do formulário. */
  name: string;
  required?: boolean;
  disabled?: boolean;
}

export interface RadioGroupProps extends GroupBase {
  value: string | null;
  onChange: (value: string) => void;
}

/** Radios a partir de uma lista, com o valor controlado. */
export function RadioGroup({ options, name, value, onChange, required, disabled, ...group }: RadioGroupProps) {
  return (
    <ChoiceGroup {...group}>
      {options.map((o) => (
        <Radio
          key={o.value}
          name={name}
          value={o.value}
          label={o.label}
          description={o.description}
          checked={value === o.value}
          disabled={disabled || o.disabled}
          required={required}
          onChange={() => onChange(o.value)}
        />
      ))}
    </ChoiceGroup>
  );
}

export interface CheckboxGroupProps extends GroupBase {
  value: string[];
  onChange: (value: string[]) => void;
}

/** Checkboxes a partir de uma lista; o valor é a lista dos marcados, na ordem das opções. */
export function CheckboxGroup({ options, name, value, onChange, required, disabled, ...group }: CheckboxGroupProps) {
  const toggle = (v: string, on: boolean) => onChange(options.map((o) => o.value).filter((x) => (x === v ? on : value.includes(x))));
  return (
    <ChoiceGroup {...group}>
      {options.map((o) => (
        <Checkbox
          key={o.value}
          name={name}
          value={o.value}
          label={o.label}
          description={o.description}
          checked={value.includes(o.value)}
          disabled={disabled || o.disabled}
          required={required && value.length === 0}
          onChange={(e) => toggle(o.value, e.target.checked)}
        />
      ))}
    </ChoiceGroup>
  );
}
