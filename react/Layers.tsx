import { cloneElement, useEffect, useMemo, useRef, useState, type ReactElement, type ReactNode, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import { enhanceModal } from '../js/modal.js';
import { createPopover } from '../js/popover.js';
import { createContextMenu } from '../js/context-menu.js';
import { initTooltips } from '../js/tooltip.js';
import { msg } from '../js/i18n.js';
import { Icon, type IconName } from './Icon';
import type { ButtonVariant } from './Button';
import type { MenuOption } from './Navigation';
import { useLocale } from './useLocale';
import { useLatest, stableKey, defined, useSafeId } from './useController';
import { cx } from './cx';

/* ───────── Modal e gaveta ───────── */

export interface DialogAction {
  label: string;
  /** O valor que onClose recebe quando a pessoa escolhe esta ação. */
  value: string;
  variant?: ButtonVariant;
  icon?: IconName;
  /** Recebe o foco ao abrir. */
  autofocus?: boolean;
}

interface DialogBase {
  /** Aberto ou fechado: o estado é seu. */
  open: boolean;
  /**
   * Chamado quando o diálogo fecha por dentro: uma ação (com o value dela), o ×, Esc ou clique fora (undefined).
   * Ponha open em false aqui. Quando você mesmo passa open={false}, ele não é chamado.
   */
  onClose: (value?: string) => void;
  title: ReactNode;
  eyebrow?: ReactNode;
  /** O conteúdo. */
  children?: ReactNode;
  /** Botões do rodapé, do menos ao mais importante; fecham com o valor deles. */
  actions?: DialogAction[];
  /** Rodapé próprio, no lugar de actions. Um botão com data-ds-modal-close="valor" fecha com esse valor. */
  footer?: ReactNode;
  /** Padrão: true. Sem ele, só as ações fecham (sem ×, Esc nem clique fora). */
  dismissible?: boolean;
  className?: string;
}

function DialogShell({
  open, onClose, title, eyebrow, children, actions = [], footer, dismissible = true, className, lead,
}: DialogBase & { className: string; lead?: IconName | null }) {
  useLocale();
  const id = useSafeId('dlg');
  const dialog = useRef<HTMLDialogElement>(null);
  const api = useRef<{ open(): Promise<unknown>; close(v?: string): void; destroy(): void; isOpen: boolean } | null>(null);
  const closed = useLatest(onClose);
  // fechado por quem é dono do estado (open={false}): não avisa de volta, porque ninguém escolheu nada
  const external = useRef(false);
  useEffect(() => {
    const c = enhanceModal(dialog.current!, {
      dismissible,
      onClose: (v?: string) => {
        if (external.current) {
          external.current = false;
          return;
        }
        closed.current(v);
      },
    });
    api.current = c;
    return () => {
      c.destroy();
      api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dismissible]);
  useEffect(() => {
    if (!api.current) return;
    if (open && !api.current.isOpen) {
      external.current = false;
      api.current.open();
    }
    if (!open && api.current.isOpen) {
      external.current = true;
      api.current.close();
    }
  }, [open, dismissible]);
  return (
    <dialog ref={dialog} className={className} aria-labelledby={`${id}-title`} aria-describedby={children ? `${id}-body` : undefined}>
      <header className="ds-modal__header">
        {lead && <span className="ds-modal__icon"><Icon name={lead} size={20} /></span>}
        <div className="ds-modal__heading">
          {eyebrow && <p className="ds-modal__eyebrow">{eyebrow}</p>}
          <h2 className="ds-modal__title" id={`${id}-title`}>{title}</h2>
        </div>
        {dismissible && (
          <button type="button" className="ds-icon-btn ds-icon-btn--muted ds-modal__close" data-ds-modal-close="" aria-label={msg('common.close')}>
            <Icon name="x" size={20} />
          </button>
        )}
      </header>
      {children && <div className="ds-modal__body" id={`${id}-body`}>{children}</div>}
      {footer ? (
        <footer className="ds-modal__footer">{footer}</footer>
      ) : actions.length > 0 ? (
        <footer className="ds-modal__footer">
          {actions.map((a) => (
            <button key={a.value} type="button" className={`ds-btn ds-btn--${a.variant ?? 'secondary'}`} data-ds-modal-close={a.value} data-ds-autofocus={a.autofocus ? '' : undefined}>
              {a.icon && <Icon name={a.icon} size={18} />}
              {a.label}
            </button>
          ))}
        </footer>
      ) : null}
    </dialog>
  );
}

export interface ModalProps extends DialogBase {
  /** sm 400 · md 520 (padrão) · lg 720. */
  size?: 'sm' | 'md' | 'lg';
  /** danger: para ações que destroem; já traz o ícone de alerta. */
  tone?: 'danger';
  /** Ícone ao lado do título. */
  icon?: IconName;
}

/**
 * Decisão ou tarefa curta que interrompe o fluxo, sobre <dialog>: foco preso, Esc, clique fora e o foco volta ao gatilho.
 *   <Modal open={aberto} onClose={(v) => { setAberto(false); if (v === 'publicar') publicar(); }}
 *          title="Publicar alterações?" actions={[{ label: 'Cancelar', value: 'cancel' }, { label: 'Publicar', value: 'publicar', variant: 'primary' }]} />
 * https://lumeui.dev/#/componentes/modal
 */
export function Modal({ size = 'md', tone, icon, className, ...rest }: ModalProps) {
  return (
    <DialogShell
      {...rest}
      lead={icon ?? (tone === 'danger' ? 'alert-triangle' : null)}
      className={cx('ds-modal', size !== 'md' && `ds-modal--${size}`, tone && `ds-modal--${tone}`, className)}
    />
  );
}

export interface DrawerProps extends DialogBase {
  /** Padrão: right. */
  side?: 'right' | 'left' | 'bottom';
  /** sm 360 · md 480 (padrão) · lg 640. */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Detalhes ou uma tarefa sem sair da página: um Modal que entra pela borda.
 * https://lumeui.dev/#/componentes/gaveta-lateral
 */
export function Drawer({ side = 'right', size = 'md', className, ...rest }: DrawerProps) {
  return <DialogShell {...rest} className={cx('ds-modal', 'ds-drawer', `ds-drawer--${side}`, size !== 'md' && `ds-drawer--${size}`, className)} />;
}

/* ───────── Popover ───────── */

export interface PopoverProps {
  /** O botão que abre (useRef no gatilho). */
  triggerRef: RefObject<HTMLElement | null>;
  /** O conteúdo, em React. */
  children: ReactNode;
  /** Dá nome ao painel e mostra o ×. */
  title?: string;
  /** Nome para leitores de tela, quando não há título. */
  label?: string;
  placement?: 'bottom' | 'top' | 'right' | 'left';
  align?: 'start' | 'center' | 'end';
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

/**
 * Conteúdo livre preso ao gatilho, sem bloquear a tela. Abre ao clicar; Esc e clique fora fecham.
 * https://lumeui.dev/#/componentes/popover
 */
export function Popover({ triggerRef, children, title, label, placement, align, onOpenChange, className }: PopoverProps) {
  const locale = useLocale();
  const host = useMemo(() => (typeof document === 'undefined' ? null : document.createElement('div')), []);
  const change = useLatest(onOpenChange);
  useEffect(() => {
    if (!triggerRef.current || !host) return;
    const c = createPopover(triggerRef.current, defined({
      title, label, placement, align, className, content: host,
      onOpen: () => change.current?.(true),
      onClose: () => change.current?.(false),
    }));
    return () => c.destroy();
  }, [triggerRef, host, title, label, placement, align, className, locale]);
  return host ? createPortal(children, host) : null;
}

/* ───────── Menu de contexto ───────── */

export interface ContextMenuProps {
  /** A área que tem o menu (useRef). */
  targetRef: RefObject<HTMLElement | null>;
  /** Só nestes elementos dentro da área ('[data-arquivo]'); sem ele, vale a área inteira. */
  selector?: string;
  /** Lista fixa, ou função que recebe o item clicado. */
  options: MenuOption[] | ((target: HTMLElement) => MenuOption[]);
  onSelect: (value: string, target: HTMLElement) => void;
  /** Nome para leitores de tela. */
  label?: string;
}

/**
 * Ações de um item com o botão direito, Shift+F10 ou toque longo. Ofereça as mesmas ações em outro lugar.
 * https://lumeui.dev/#/componentes/menu-de-contexto
 */
export function ContextMenu({ targetRef, selector, options, onSelect, label }: ContextMenuProps) {
  const select = useLatest(onSelect);
  const list = useLatest(options);
  useEffect(() => {
    if (!targetRef.current) return;
    const c = createContextMenu(targetRef.current, defined({
      selector, label,
      options: (target: HTMLElement) => (typeof list.current === 'function' ? list.current(target) : list.current),
      onSelect: (v: string, t: HTMLElement) => select.current(v, t),
    }));
    return () => c.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef, selector, label, typeof options === 'function' ? 'fn' : stableKey(options)]);
  return null;
}

/* ───────── Tooltip ───────── */

export interface TooltipProps {
  /** O texto da dica: curto, sem formatação. */
  content: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  /** Atalho mostrado ao lado ("⌘B"). */
  kbd?: string;
  /** Um elemento só, que recebe hover e foco (um botão). */
  children: ReactElement<Record<string, unknown>>;
}

/**
 * Dica curta em hover e foco. Num botão só de ícone, repita o texto no aria-label.
 * https://lumeui.dev/#/componentes/tooltip
 */
export function Tooltip({ content, placement, kbd, children }: TooltipProps) {
  useEffect(() => initTooltips(), []);
  return cloneElement(children, {
    'data-ds-tooltip': content,
    'data-ds-tooltip-placement': placement,
    'data-ds-tooltip-kbd': kbd,
  });
}

/** Liga os tooltips de data-ds-tooltip na página inteira (o Tooltip já chama sozinho). */
export function useTooltips() {
  useEffect(() => initTooltips(), []);
}

/** Estado aberto/fechado com as funções prontas, para Modal e Drawer: const m = useDisclosure(); <Modal open={m.open} onClose={m.close} />. */
export function useDisclosure(initial = false) {
  const [open, setOpen] = useState(initial);
  return useMemo(() => ({ open, show: () => setOpen(true), close: () => setOpen(false), toggle: () => setOpen((o) => !o) }), [open]);
}
