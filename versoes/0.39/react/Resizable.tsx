import { Children, Fragment, useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { createResizable } from '../js/resizable.js';
import { useLatest, defined } from './useController';
import { cx } from './cx';

type Size = number | `${number}px`;

export interface ResizablePanelsProps {
  /** Os painéis: um ResizablePanel por parte. As divisórias entram sozinhas entre eles. */
  children: ReactNode;
  /** Nome da área para o leitor de tela (“Editor”). */
  label?: string;
  /** Lado a lado (padrão) ou um sobre o outro. */
  direction?: 'horizontal' | 'vertical';
  /** Alça à vista na divisória. */
  grip?: boolean;
  /** Guarda o tamanho no navegador com este nome. */
  storageKey?: string;
  /** Quanto cada seta anda, em %. */
  step?: number;
  /** Tamanhos em %, no fim de cada arrasto ou tecla. */
  onChange?: (sizes: number[]) => void;
  className?: string;
  /** A área precisa de altura (ou de um pai flex) para dividir: height: '100%' costuma bastar. */
  style?: CSSProperties;
}

export interface ResizablePanelProps {
  children?: ReactNode;
  /** Tamanho inicial, em % (30) ou px ('240px'). */
  size?: Size;
  min?: Size;
  max?: Size;
  /** Pode fechar até zero: arrastando até o fim ou com Enter na divisória. */
  collapsible?: boolean;
  className?: string;
}

/** Uma parte da área. Fora de ResizablePanels não faz nada. */
export function ResizablePanel({ children, size, min, max, collapsible, className }: ResizablePanelProps) {
  return (
    <div className={cx('ds-resizable__panel', className)} data-size={size} data-min={min} data-max={max} data-collapsible={collapsible ? '' : undefined}>
      {children}
    </div>
  );
}

/**
 * Área dividida em partes que a pessoa ajusta arrastando a divisória, com teclado e tamanho salvo.
 *   <ResizablePanels label="Editor" storageKey="editor">
 *     <ResizablePanel size={30} min={20} collapsible>…</ResizablePanel>
 *     <ResizablePanel min="240px">…</ResizablePanel>
 *   </ResizablePanels>
 * As divisórias são desenhadas aqui (o módulo usa as que encontra), para o React continuar dono da marcação.
 * https://lumeui.dev/#/componentes/paineis-redimensionaveis
 */
export function ResizablePanels({ children, label, direction = 'horizontal', grip, storageKey, step, onChange, className, style }: ResizablePanelsProps) {
  const root = useRef<HTMLDivElement>(null);
  const change = useLatest(onChange);
  const panels = Children.toArray(children);
  useEffect(() => {
    const r = createResizable(root.current!, defined({ direction, storageKey, step, onChange: (sizes: number[]) => change.current?.(sizes) }));
    return () => r.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panels.length, direction, storageKey, step]);
  return (
    <div ref={root} className={cx('ds-resizable', grip && 'ds-resizable--grip', className)} data-direction={direction} aria-label={label} style={style}>
      {panels.map((panel, i) => (
        <Fragment key={(panel as { key?: string }).key ?? i}>
          {i > 0 && (
            <div className="ds-resizable__handle">
              <span className="ds-resizable__grip" aria-hidden="true" />
            </div>
          )}
          {panel}
        </Fragment>
      ))}
    </div>
  );
}
