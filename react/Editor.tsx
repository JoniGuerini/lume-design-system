import { useEffect, useRef, useState, type HTMLAttributes } from 'react';
import { createEditor, type EditorController, type EditorTool } from '../js/editor.js';
import { useLatest, defined, stableKey } from './useController';
import { useLocale } from './useLocale';
import { cx } from './cx';

export type { EditorTool };

export interface RichTextEditorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** O nome do campo para o leitor de tela (ou use labelledBy com o id de um rótulo). */
  label?: string;
  labelledBy?: string;
  /** HTML inicial. Para controlar, use value + onChange. */
  defaultValue?: string;
  value?: string;
  /** O HTML limpo a cada mudança ("" quando vazio). */
  onChange?: (html: string) => void;
  /** Grupos da barra, na ordem. Padrão: todos. */
  tools?: EditorTool[];
  placeholder?: string;
  /** Envia o HTML num campo oculto com este nome. */
  name?: string;
  disabled?: boolean;
  /** Sem contorno, para quando o editor é a própria página. */
  borderless?: boolean;
}

/**
 * Editor de texto rico: títulos, listas, citações, negrito, itálico e links, com a barra do Lume.
 *   <RichTextEditor label="Nota da versão" value={html} onChange={setHtml} tools={['marks', 'link']} />
 * O editor é dono do próprio DOM (contenteditable): o React só monta a caixa e conversa pelo HTML.
 * https://lumeui.dev/#/componentes/editor-de-texto-rico
 */
export function RichTextEditor({ label, labelledBy, defaultValue, value, onChange, tools, placeholder, name, disabled, borderless, className, ...rest }: RichTextEditorProps) {
  useLocale();
  const host = useRef<HTMLDivElement>(null);
  const editor = useRef<EditorController | null>(null);
  const current = useRef(value ?? defaultValue ?? '');
  const [html, setHtml] = useState(current.current);
  const latest = useLatest({ onChange });

  useEffect(() => {
    const root = document.createElement('div');
    root.className = cx('ds-editor', borderless && 'ds-editor--borderless', className);
    const content = document.createElement('div');
    content.className = 'ds-editor__content';
    if (label) content.setAttribute('aria-label', label);
    if (labelledBy) content.setAttribute('aria-labelledby', labelledBy);
    root.append(content);
    host.current!.append(root);
    const ed = createEditor(
      root,
      defined({
        tools,
        placeholder,
        value: current.current,
        onChange: (next: string) => {
          current.current = next;
          setHtml(next);
          latest.current.onChange?.(next);
        },
      }),
    );
    editor.current = ed;
    return () => {
      ed.destroy();
      root.remove();
      editor.current = null;
    };
  }, [stableKey(tools), placeholder, label, labelledBy, borderless, className]);

  useEffect(() => {
    if (value !== undefined && editor.current && value !== editor.current.value) {
      current.current = value;
      editor.current.setValue(value);
    }
  }, [value]);

  useEffect(() => editor.current?.setDisabled(!!disabled), [disabled, stableKey(tools), borderless, className]);

  return (
    <div ref={host} style={{ display: 'contents' }} {...rest}>
      {name && <input type="hidden" name={name} value={html} />}
    </div>
  );
}
