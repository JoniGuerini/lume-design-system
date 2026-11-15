import { forwardRef, useEffect, useImperativeHandle, useRef, type FormHTMLAttributes } from 'react';
import { createForm } from '../js/form.js';
import { useLatest } from './useController';

export type FormData = Record<string, string | File | Array<string | File>>;

export interface FormError {
  name: string;
  label: string;
  message: string;
}

export interface FormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'onInvalid'> {
  /** Chamado só quando tudo está válido, com os valores pelo name de cada campo. */
  onSubmit?: (data: FormData, form: HTMLFormElement) => void;
  /** Chamado quando o envio parou por erro. */
  onInvalid?: (errors: FormError[]) => void;
  /** Regras próprias por name (ou id): devolva a mensagem de erro, ou null quando vale. Grupos recebem a lista dos marcados. */
  rules?: Record<string, (value: string | string[], field: HTMLElement, form: HTMLFormElement) => string | null | undefined>;
  /** Mensagens próprias por name e regra: { nome: { required: 'Dê um nome ao projeto.' } }. */
  messages?: Record<string, Partial<Record<'required' | 'email' | 'url' | 'number' | 'minlength' | 'maxlength' | 'min' | 'max' | 'pattern' | 'groupMin', string>>>;
  /** Quando valida. blur (padrão): ao sair do campo; submit: só ao enviar. Campo com erro revalida enquanto a pessoa corrige. */
  validateOn?: 'blur' | 'submit' | 'input';
  /** Resumo dos erros no topo, que recebe o foco no envio. Padrão: sim. */
  summary?: boolean;
}

export interface FormHandle {
  /** Valida tudo e mostra os erros; devolve true se está tudo certo. */
  validate(): boolean;
  /** Limpa valores nativos, erros e o resumo. Os valores que estão no estado do React, limpe você. */
  reset(): void;
  data(): FormData;
  errors(): FormError[];
}

/**
 * Formulário com a validação do Lume: required, email, minlength, regras próprias, erro ligado a cada campo
 * e resumo no topo. Use o required e os tipos nativos nos campos; o resto é com o Lume.
 * Valide pelo Form ou passe error nos campos, não os dois no mesmo campo.
 * https://lumeui.dev/#/padroes/formularios
 */
export const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSubmit, onInvalid, rules, messages, validateOn, summary, children, ...rest },
  ref,
) {
  const form = useRef<HTMLFormElement>(null);
  const api = useRef<FormHandle & { destroy(): void } | null>(null);
  const submit = useLatest(onSubmit);
  const invalid = useLatest(onInvalid);
  const ruleFns = useLatest(rules);
  const texts = useLatest(messages);
  const ruleNames = Object.keys(rules ?? {}).join(',');

  useImperativeHandle(ref, () => ({
    validate: () => api.current?.validate() ?? false,
    reset: () => api.current?.reset(),
    data: () => api.current?.data() ?? {},
    errors: () => api.current?.errors() ?? [],
  }));

  useEffect(() => {
    const proxied = Object.fromEntries(
      ruleNames.split(',').filter(Boolean).map((name) => [name, (value: string | string[], el: HTMLElement, f: HTMLFormElement) => ruleFns.current?.[name]?.(value, el, f) ?? null]),
    );
    const c = createForm(form.current!, {
      ...(validateOn && { validateOn }),
      ...(summary !== undefined && { summary }),
      rules: proxied,
      // as mensagens são lidas na hora de validar: um objeto que sempre olha a versão mais nova
      messages: new Proxy({}, { get: (_t, name: string) => texts.current?.[name] }),
      onSubmit: (data: FormData, el: HTMLFormElement) => submit.current?.(data, el),
      onInvalid: (errors: FormError[]) => invalid.current?.(errors),
    });
    api.current = c;
    return () => {
      c.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateOn, summary, ruleNames]);

  return (
    <form ref={form} {...rest}>
      {children}
    </form>
  );
});
