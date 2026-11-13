/** Desenha um elemento React dentro de um <div> para as histórias do Storybook (framework HTML). */
import type { ReactNode } from 'react';
import { createRoot, type Root } from 'react-dom/client';

const live = new Set<{ el: HTMLElement; root: Root }>();

export function mount(node: ReactNode): HTMLElement {
  // desmonta o que já saiu da tela (troca de história), para não deixar ouvintes para trás
  for (const item of live) {
    if (!item.el.isConnected) {
      item.root.unmount();
      live.delete(item);
    }
  }
  const el = document.createElement('div');
  el.className = 'lume-story';
  const root = createRoot(el);
  root.render(node);
  live.add({ el, root });
  return el;
}
