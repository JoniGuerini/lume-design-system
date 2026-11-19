import {
  createContext, forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState,
  type ChangeEvent, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes,
} from 'react';
import { Icon, type IconName } from './Icon';
import { Kbd } from './Content';
import { msg } from '../js/i18n.js';
import { createCurrencyField } from '../js/currency-field.js';
import { useLocale } from './useLocale';
import { useSafeId, useLatest, defined } from './useController';
import { cx } from './cx';

export type FieldSize = 'sm' | 'md' | 'lg';

interface FieldContextValue {
  /** Sem id dentro de um FieldGroup: cada controle do grupo leva o próprio. */
  id?: string;
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

/* ───────── Grupo de campos ───────── */

export interface FieldGroupProps {
  /** O nome do grupo ("Quando"). Cada controle de dentro leva o próprio aria-label ("Data", "Início"). */
  label: ReactNode;
  /** Uma linha logo abaixo. Some quando há erro. */
  hint?: ReactNode;
  /** A mensagem de erro do grupo. Liga aria-invalid nos controles de dentro. */
  error?: ReactNode;
  optional?: boolean;
  /** Os controles dividem a linha por igual (nome e sobrenome). Padrão: o primeiro ocupa o dobro dos outros. */
  even?: boolean;
  /** Base dos ids do rótulo e da mensagem. Padrão: um gerado. */
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Um rótulo, uma dica e um erro para vários controles lado a lado (data e dois horários).
 * O grupo tem role="group" e o nome do rótulo; cada controle mantém o próprio id e lê a dica e o erro sozinho.
 * https://lumeui.dev/#/componentes/grupo-de-campos
 */
export function FieldGroup({ label, hint, error, optional, even, id, className, children }: FieldGroupProps) {
  useLocale();
  const auto = useSafeId('fg');
  const groupId = id ?? auto;
  const invalid = Boolean(error);
  const describedBy = invalid ? `${groupId}-error` : hint ? `${groupId}-hint` : undefined;
  return (
    <FieldContext.Provider value={{ id: undefined, describedBy, invalid }}>
      <div className={cx('ds-form-field ds-field-group', even && 'ds-field-group--even', className)} role="group" aria-labelledby={`${groupId}-label`}>
        <span className="ds-form-field__label" id={`${groupId}-label`}>
          {label}
          {optional && <span className="ds-form-field__optional">{msg('form.optional')}</span>}
        </span>
        <div className="ds-field-group__controls">{children}</div>
        {(invalid || hint) && (
          <div className="ds-form-field__footer">
            {invalid ? (
              <p className="ds-form-field__error" id={`${groupId}-error`}>
                <Icon name="alert-circle" size={16} />
                <span>{error}</span>
              </p>
            ) : (
              <p className="ds-form-field__hint" id={`${groupId}-hint`}>{hint}</p>
            )}
          </div>
        )}
      </div>
    </FieldContext.Provider>
  );
}

/* ───────── Campo de senha ───────── */

export interface PasswordFieldProps extends Omit<InputProps, 'type' | 'action' | 'affix'> {
  /** Padrão: current-password. Em criar conta e trocar senha, use new-password. */
  autoComplete?: 'current-password' | 'new-password';
}

/**
 * Senha com o botão de mostrar e esconder dentro do campo (aria-pressed; o foco fica no campo).
 * https://lumeui.dev/#/componentes/campo-de-senha
 */
export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(function PasswordField(
  { autoComplete = 'current-password', disabled, ...rest },
  ref,
) {
  useLocale();
  const [visible, setVisible] = useState(false);
  return (
    <Input
      ref={ref}
      {...rest}
      disabled={disabled}
      type={visible ? 'text' : 'password'}
      autoComplete={autoComplete}
      action={
        <button
          type="button"
          className="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"
          aria-label={msg('password.show')}
          aria-pressed={visible}
          disabled={disabled}
          onPointerDown={(event) => event.preventDefault()}
          onClick={() => setVisible((v) => !v)}
        >
          <Icon name={visible ? 'eye-off' : 'eye'} size={16} />
        </button>
      }
    />
  );
});

/* ───────── Campo de busca ───────── */

export interface SearchFieldProps extends Omit<InputProps, 'type' | 'value' | 'onChange' | 'action' | 'icon'> {
  value: string;
  onChange: (value: string) => void;
  /** Uma tecla sem modificador que leva o foco ao campo de qualquer lugar ("/"). Aparece no campo vazio. */
  shortcut?: string;
}

const typing = (target: EventTarget | null) =>
  target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));

/**
 * Busca: a lupa, o × quando há texto, Esc que limpa e o atalho opcional. Dê um aria-label ("Buscar clientes")
 * ou ponha dentro de um Field.
 * https://lumeui.dev/#/componentes/campo-de-busca
 */
export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(function SearchField(
  { value, onChange, shortcut, onKeyDown, disabled, className, placeholder, ...rest },
  ref,
) {
  useLocale();
  const input = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => input.current!, []);
  useEffect(() => {
    if (!shortcut) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== shortcut || event.metaKey || event.ctrlKey || event.altKey || event.defaultPrevented || typing(event.target)) return;
      const el = input.current;
      if (!el || el.disabled || el.getClientRects().length === 0) return;
      event.preventDefault();
      el.focus();
      el.select();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [shortcut]);
  const clear = () => {
    onChange('');
    input.current?.focus();
  };
  return (
    <Input
      ref={input}
      {...rest}
      type="search"
      icon="search"
      className={cx('ds-search', className)}
      placeholder={placeholder ?? msg('common.search')}
      disabled={disabled}
      value={value}
      aria-keyshortcuts={shortcut}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && value) {
          event.preventDefault();
          event.stopPropagation();
          onChange('');
        }
        onKeyDown?.(event);
      }}
      action={
        value && !disabled ? (
          <FieldAction icon="x" label={msg('search.clear')} onClick={clear} />
        ) : shortcut ? (
          <Kbd className="ds-search__kbd" aria-hidden="true">{shortcut}</Kbd>
        ) : undefined
      }
    />
  );
});

/* ───────── Campo de dinheiro ───────── */

export interface CurrencyFieldProps extends Omit<InputProps, 'value' | 'onChange' | 'affix' | 'type' | 'inputMode' | 'defaultValue'> {
  value: number | null;
  /** Quando o valor se firma: ao sair do campo ou com Enter. */
  onChange: (value: number | null) => void;
  /** Código ISO 4217. Padrão: BRL. */
  currency?: string;
  min?: number;
  max?: number;
}

/**
 * Dinheiro: digita-se livre e, ao sair do campo, o valor volta formatado no idioma, com o símbolo fixo.
 * O formulário recebe o número puro (1290.5) pelo name.
 * https://lumeui.dev/#/componentes/campo-de-dinheiro
 */
export const CurrencyField = forwardRef<HTMLInputElement, CurrencyFieldProps>(function CurrencyField(
  { value, onChange, currency = 'BRL', min, max, name, ...rest },
  ref,
) {
  const input = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => input.current!, []);
  const api = useRef<{ value: number | null; setValue(v: number | null): void; destroy(): void } | null>(null);
  const emit = useLatest(onChange);
  const latest = useLatest(value);
  useEffect(() => {
    const c = createCurrencyField(input.current!, defined({ currency, min, max, value: latest.current, onChange: (v: number | null) => emit.current(v) }));
    api.current = c;
    return () => {
      c.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, min, max]);
  useEffect(() => {
    if (api.current && api.current.value !== value) api.current.setValue(value);
  }, [value]);
  return (
    <>
      <Input ref={input} {...rest} />
      {name && <input type="hidden" name={name} value={value ?? ''} />}
    </>
  );
});
