import { useEffect, useRef, type ReactNode } from 'react';
import { createToolbar } from '../js/toolbar.js';
import { Icon, type IconName } from './Icon';
import { useLatest, defined } from './useController';
import { cx } from './cx';

export interface ToolbarProps {
  /** Nome da barra para o leitor de tela (“Formatação”). */
  label: string;
  children: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  /** Sem contorno nem fundo, para quando a barra já está dentro de uma superfície. */
  plain?: boolean;
  /** Botão com pressed trocou: o value dele e o novo estado. Guarde no estado e passe de volta em pressed. */
  onToggle?: (value: string, pressed: boolean) => void;
  className?: string;
}

/**
 * Botões de ícone agrupados: um Tab só para a barra, setas entre os botões.
 *   <Toolbar label="Formatação" onToggle={(value, on) => …}>
 *     <ToolbarGroup>
 *       <ToolbarButton icon="bold" label="Negrito" value="bold" pressed={bold} />
 *     </ToolbarGroup>
 *     <ToolbarSeparator />
 *     <ToolbarGroup exclusive>…</ToolbarGroup>
 *   </Toolbar>
 * https://lumeui.dev/#/componentes/barra-de-ferramentas
 */
export function Toolbar({ label, children, orientation = 'horizontal', plain, onToggle, className }: ToolbarProps) {
  const root = useRef<HTMLDivElement>(null);
  const toggle = useLatest(onToggle);
  const api = useRef<{ refresh(): void; destroy(): void } | null>(null);
  useEffect(() => {
    const t = createToolbar(root.current!, defined({ orientation, onToggle: (button: HTMLElement, pressed: boolean) => toggle.current?.(button.dataset.value ?? '', pressed) }));
    api.current = t;
    return () => {
      t.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orientation]);
  // botões novos ou desativados mudam quem fica com o Tab
  useEffect(() => api.current?.refresh());
  return (
    <div ref={root} className={cx('ds-toolbar', plain && 'ds-toolbar--plain', className)} aria-label={label} aria-orientation={orientation === 'vertical' ? 'vertical' : undefined}>
      {children}
    </div>
  );
}

/** Grupo de botões; exclusive: só um apertado por vez (como o alinhamento). */
export function ToolbarGroup({ children, exclusive }: { children: ReactNode; exclusive?: boolean }) {
  return (
    <div className="ds-toolbar__group" data-exclusive={exclusive ? '' : undefined}>
      {children}
    </div>
  );
}

export function ToolbarSeparator() {
  return <div className="ds-toolbar__separator" />;
}

export interface ToolbarButtonProps {
  icon: IconName;
  /** Nome da ação (“Negrito”): vira o aria-label e a dica. */
  label: string;
  /** O que o onToggle da barra recebe. */
  value?: string;
  /** Com pressed (true ou false), o botão liga e desliga; sem, é uma ação. */
  pressed?: boolean;
  disabled?: boolean;
  /** Dica com o nome. Padrão: sim. */
  tooltip?: boolean;
  onClick?: () => void;
}

export function ToolbarButton({ icon, label, value, pressed, disabled, tooltip = true, onClick }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      className="ds-icon-btn"
      aria-label={label}
      aria-pressed={pressed === undefined ? undefined : pressed}
      data-ds-tooltip={tooltip ? label : undefined}
      data-value={value}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon name={icon} size={20} />
    </button>
  );
}
