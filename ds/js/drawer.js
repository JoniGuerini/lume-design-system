/**
 * Gaveta lateral — detalhes ou uma tarefa sem sair da página. É um Modal que entra pela borda da tela:
 * usa o mesmo <dialog> (foco preso pelo navegador, Esc e clique fora fecham, o foco volta ao gatilho).
 *
 *   const escolha = await openDrawer({
 *     side: 'right',                  // 'right' | 'left' | 'bottom'
 *     size: 'md',                     // 'sm' 360 · 'md' 480 · 'lg' 640
 *     eyebrow: 'Pedido', title: 'Nº 1042', body: 'Texto, HTML ou um Element',
 *     actions: [{ label: 'Fechar', value: 'close' }, { label: 'Salvar', value: 'save', variant: 'primary' }],
 *     theme: 'dark',                  // opcional: tema próprio
 *   });
 *
 *   const drawer = createDrawer({ … }); // controle manual: drawer.open(), drawer.close(valor), drawer.destroy()
 *
 * No celular, a gaveta ocupa a largura toda e as de lado continuam entrando pela borda.
 */
import { modalContent, enhanceModal } from './modal.js';

let uid = 0;

export function createDrawer(options = {}) {
  const { side = 'right', size = 'md', theme } = options;
  const id = `ds-drawer-${++uid}`;
  const dialog = document.createElement('dialog');
  dialog.className = ['ds-modal', 'ds-drawer', `ds-drawer--${side}`, size !== 'md' && `ds-drawer--${size}`].filter(Boolean).join(' ');
  if (theme) dialog.dataset.theme = theme;
  dialog.setAttribute('aria-labelledby', `${id}-title`);
  const hasBody = options.body !== undefined && options.body !== null;
  dialog.innerHTML = modalContent({ ...options, id, tone: undefined, icon: undefined });
  if (hasBody && typeof options.body !== 'string') dialog.querySelector('.ds-modal__body').append(options.body);
  document.body.append(dialog);
  const api = enhanceModal(dialog, { dismissible: options.dismissible ?? true, onClose: options.onClose });
  return {
    ...api,
    destroy() {
      api.destroy();
      dialog.remove();
    },
  };
}

/** Abre uma gaveta e resolve com o valor da ação escolhida (undefined se fechou sem escolher). */
export function openDrawer(options = {}) {
  const drawer = createDrawer(options);
  const result = drawer.open();
  result.then(() => drawer.destroy());
  return result;
}
