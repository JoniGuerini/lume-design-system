import { useEffect, useRef } from 'react';
import { createSelect } from '../js/select.js';
import { useFieldProps } from './Field';
import { useLatest, stableKey } from './useController';
import type { IconName } from './Icon';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectGroup {
  group: string;
  options: SelectOption[];
}

interface SelectBase {
  /** As opções, soltas ou em grupos ({ group: 'Américas', options: […] }). */
  options: Array<SelectOption | SelectGroup>;
  /** Campo de busca no topo da lista, para listas longas. */
  search?: boolean;
  searchPlaceholder?: string;
  /** Texto quando nada está escolhido. */
  placeholder?: string;
  /** Padrão: md. */
  size?: 'sm' | 'md' | 'lg';
  /** Ícone antes do valor. */
  icon?: IconName;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
}

export interface SingleSelectProps extends SelectBase {
  multiple?: false;
  value: string | null;
  onChange: (value: string | null) => void;
}

export interface MultipleSelectProps extends SelectBase {
  multiple: true;
  value: string[];
  onChange: (value: string[]) => void;
  /** chips (padrão) mostra as escolhas; count mostra "3 selecionados". */
  display?: 'chips' | 'count';
  /** No máximo N escolhas. */
  max?: number;
  /** Rodapé com "todos" e "limpar". */
  footer?: boolean;
}

export type SelectProps = SingleSelectProps | MultipleSelectProps;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const optionHtml = (o: SelectOption) => `<option value="${esc(o.value)}"${o.disabled ? ' disabled' : ''}>${esc(o.label)}</option>`;

/**
 * Escolher uma ou várias opções numa lista própria do Lume (não a do sistema), com busca e teclado.
 * Por baixo continua um <select> real: envio do formulário, required e o Form funcionam.
 * https://lumeui.dev/#/componentes/selecao
 */
export function Select(props: SelectProps) {
  const { options, search, searchPlaceholder, placeholder, size = 'md', icon, name, required, disabled } = props;
  const multi = props.multiple === true;
  const display = multi ? (props as MultipleSelectProps).display : undefined;
  const max = multi ? (props as MultipleSelectProps).max : undefined;
  const footer = multi ? (props as MultipleSelectProps).footer : undefined;
  const a11y = useFieldProps(props);
  const host = useRef<HTMLDivElement>(null);
  const api = useRef<{ select: HTMLSelectElement; sync(): void; destroy(): void } | null>(null);
  const onChange = useLatest(props.onChange);
  const optionsKey = stableKey(options);

  const fill = (el: HTMLSelectElement) => {
    el.innerHTML =
      (!multi ? `<option value="">${esc(placeholder ?? '')}</option>` : '') +
      options.map((o) => ('group' in o ? `<optgroup label="${esc(o.group)}">${o.options.map(optionHtml).join('')}</optgroup>` : optionHtml(o))).join('');
    const chosen = multi ? (props.value as string[]) : [props.value ?? ''];
    for (const opt of el.options) opt.selected = chosen.includes(opt.value);
  };

  useEffect(() => {
    const el = document.createElement('select');
    if (a11y.id) el.id = a11y.id;
    if (name) el.name = name;
    el.multiple = multi;
    el.required = Boolean(required);
    el.disabled = Boolean(disabled);
    if (size !== 'md') el.dataset.size = size;
    if (icon) el.dataset.icon = icon;
    if (a11y['aria-describedby']) el.setAttribute('aria-describedby', a11y['aria-describedby']);
    if (a11y['aria-invalid']) el.setAttribute('aria-invalid', 'true');
    fill(el);
    host.current!.append(el);
    const instance = createSelect(el, { search, searchPlaceholder, placeholder, display, max, footer });
    api.current = instance;
    const onNative = () => {
      if (multi) (onChange.current as MultipleSelectProps['onChange'])([...el.selectedOptions].map((o) => o.value));
      else (onChange.current as SingleSelectProps['onChange'])(el.value || null);
    };
    el.addEventListener('change', onNative);
    return () => {
      el.removeEventListener('change', onNative);
      instance.destroy();
      el.remove();
      api.current = null;
    };
    // recria quando muda algo que o Lume só lê ao montar
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [multi, search, searchPlaceholder, placeholder, display, max, footer, size, icon, name, required, disabled, a11y.id, a11y['aria-describedby'], a11y['aria-invalid']]);

  // opções e valor: atualiza no lugar
  useEffect(() => {
    if (!api.current) return;
    fill(api.current.select);
    api.current.sync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionsKey, stableKey(props.value)]);

  return <div ref={host} style={{ display: 'contents' }} />;
}
