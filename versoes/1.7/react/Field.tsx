import {
  createContext, forwardRef, useContext, useState,
  type ChangeEvent, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes,
} from 'react';
import { Icon, type IconName } from './Icon';
import { msg } from '../js/i18n.js';
import { useLocale } from './useLocale';
import { useSafeId } from './useController';
import { cx } from './cx';

export type FieldSize = 'sm' | 'md' | 'lg';

interface FieldContextValue {
  id: string;
  describedBy?: string;
  invalid: boolean;
}

const FieldContext = createContext<FieldContextValue | null>(null);

/** O id, a descrição (dica ou erro) e o estado de erro do Field em volta. Para controles próprios dentro de um Field. */
export function useField(): FieldContextValue | null {
  return useContext(FieldContext);
}

export interface FieldProps {
  /** Sempre visível, acima do controle. */
  label: ReactNode;
  /** Uma linha logo abaixo, com o formato ou o motivo. Some quando há erro. */
  hint?: ReactNode;
  /** A mensagem de erro, dizendo como resolver. Liga aria-invalid no controle. */
  error?: ReactNode;
  /** Marca o campo como opcional (o obrigatório não leva marca). */
  optional?: boolean;
  /** Contador "atual/máximo", para campos com limite. */
  count?: { value: number; max: number };
  /** id do controle. Padrão: um gerado. */
  id?: string;
  className?: string;
  /** O controle: Input, Textarea, Select, DatePicker… Eles leem o id e a descrição sozinhos. */
  children: ReactNode;
}

/**
 * Rótulo, controle, dica, erro e contador, ligados para leitores de tela.
 * https://lumeui.dev/#/componentes/campo-de-texto
 */
export function Field({ label, hint, error, optional, count, id, className, children }: FieldProps) {
  useLocale();
  const auto = useSafeId('f');
  const fieldId = id ?? auto;
  const invalid = Boolean(error);
  const describedBy = invalid ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined;
  return (
    <FieldContext.Provider value={{ id: fieldId, describedBy, invalid }}>
      <div className={cx('ds-form-field', className)}>
        <label className="ds-form-field__label" htmlFor={fieldId}>
          {label}
          {optional && <span className="ds-form-field__optional">{msg('form.optional')}</span>}
        </label>
        {children}
        {(invalid || hint || count) && (
          <div className="ds-form-field__footer">
            {invalid && (
              <p className="ds-form-field__error" id={`${fieldId}-error`}>
                <Icon name="alert-circle" size={16} />
                <span>{error}</span>
              </p>
            )}
            {!invalid && hint && <p className="ds-form-field__hint" id={`${fieldId}-hint`}>{hint}</p>}
            {count && (
              <span className="ds-form-field__counter" data-over={count.value > count.max ? '' : undefined}>
                {count.value}/{count.max}
              </span>
            )}
          </div>
        )}
      </div>
    </FieldContext.Provider>
  );
}

/** Junta os atributos de acessibilidade do Field com os que vieram por props. */
export function useFieldProps(props: { id?: string; 'aria-describedby'?: string; 'aria-invalid'?: unknown }) {
  const field = useField();
  return {
    id: props.id ?? field?.id,
    'aria-describedby': cx(field?.describedBy, props['aria-describedby']) || undefined,
    'aria-invalid': (props['aria-invalid'] as boolean | undefined) ?? (field?.invalid ? true : undefined),
  };
}

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Padrão: md (40 px). Use o mesmo tamanho dos botões ao lado. */
  size?: FieldSize;
  /** Ícone à esquerda, só quando ajuda a reconhecer o dado (busca, e-mail). */
  icon?: IconName;
  /** Texto fixo antes do valor ("https://", "R$"). */
  affix?: ReactNode;
  /** Botão dentro do campo, à direita (use FieldAction). */
  action?: ReactNode;
}

/** O campo de texto. Dentro de um Field, pega o id, a dica e o erro sozinho. */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = 'md', icon, affix, action, className, type = 'text', ...rest },
  ref,
) {
  const a11y = useFieldProps(rest);
  return (
    <div className={cx('ds-field', size !== 'md' && `ds-field--${size}`, className)}>
      {icon && <Icon name={icon} size={size === 'sm' ? 16 : 18} />}
      {affix && <span className="ds-field__affix" aria-hidden="true">{affix}</span>}
      <input ref={ref} type={type} className="ds-field__input" {...rest} {...a11y} />
      {action}
    </div>
  );
});

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

/** Texto de mais de uma frase. Cresce na vertical. */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ className, rows = 4, ...rest }, ref) {
  const a11y = useFieldProps(rest);
  return (
    <div className={cx('ds-field', 'ds-field--multiline', className)}>
      <textarea ref={ref} rows={rows} className="ds-field__input" {...rest} {...a11y} />
    </div>
  );
});

export interface FieldActionProps {
  icon: IconName;
  /** O nome da ação ("Limpar", "Mostrar a senha"). */
  label: string;
  onClick: () => void;
  /** Para ações que ligam e desligam (mostrar a senha). */
  pressed?: boolean;
}

/** Botão de ícone dentro do campo: limpar, mostrar a senha. */
export function FieldAction({ icon, label, onClick, pressed }: FieldActionProps) {
  return (
    <button type="button" className="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" aria-label={label} aria-pressed={pressed} onClick={onClick}>
      <Icon name={icon} size={16} />
    </button>
  );
}

export interface TextFieldProps extends Omit<InputProps, 'children'> {
  label: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  optional?: boolean;
  /** Mostra o contador "atual/máximo". Pede maxLength. */
  showCount?: boolean;
  /** Linhas: vira um Textarea. */
  multiline?: boolean;
  rows?: number;
  /** Mostra o × para limpar quando há texto; chamado ao clicar. */
  onClear?: () => void;
}

/**
 * Atalho para o caso comum: Field + Input (ou Textarea, com multiline).
 * https://lumeui.dev/#/componentes/campo-de-texto
 */
export const TextField = forwardRef<HTMLInputElement & HTMLTextAreaElement, TextFieldProps>(function TextField(
  { label, hint, error, optional, showCount, multiline, rows, onClear, id, className, onChange, maxLength, ...rest },
  ref,
) {
  useLocale();
  const initial = String(rest.value ?? rest.defaultValue ?? '').length;
  const [typed, setTyped] = useState(initial);
  const length = rest.value !== undefined ? String(rest.value).length : typed;
  const change = (event: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    setTyped(event.target.value.length);
    onChange?.(event as ChangeEvent<HTMLInputElement>);
  };
  const count = showCount && maxLength ? { value: length, max: maxLength } : undefined;
  const { size, icon, affix, action, type, ...common } = rest;
  return (
    <Field label={label} hint={hint} error={error} optional={optional} count={count} id={id} className={className}>
      {multiline ? (
        <Textarea ref={ref} rows={rows} maxLength={maxLength} onChange={change} {...(common as TextareaProps)} />
      ) : (
        <Input
          ref={ref}
          size={size}
          icon={icon}
          affix={affix}
          type={type}
          maxLength={maxLength}
          onChange={change}
          action={action ?? (onClear && length > 0 ? <FieldAction icon="x" label={msg('form.clear')} onClick={onClear} /> : undefined)}
          {...common}
        />
      )}
    </Field>
  );
});
