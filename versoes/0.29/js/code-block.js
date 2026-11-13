/**
 * Bloco de código com botão de copiar.
 *
 *   <div class="ds-code-block">
 *     <pre class="ds-code"><code>npm run build</code></pre>
 *     <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-code-block__copy" data-code-copy aria-label="Copiar código"></button>
 *   </div>
 *
 *   const stop = mountCodeBlocks(document);   // liga todos os botões [data-code-copy] dentro do elemento
 *
 * codeBlockHtml(codigo) devolve esse HTML pronto, com o código já escapado e o nome do botão no idioma atual.
 * Ao copiar, um aviso confirma; o texto do código não é repetido no aviso.
 */
import { icon } from '../icons/icons.js';
import { msg } from './i18n.js';
import { copyText } from './toast.js';

const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const codeBlockHtml = (code, { small = false } = {}) => `<div class="ds-code-block">
  <pre class="ds-code${small ? ' ds-code--sm' : ''}"><code>${escape(code)}</code></pre>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-code-block__copy" data-code-copy aria-label="${escape(msg('code.copy'))}" data-ds-tooltip="${escape(msg('code.copy'))}">${icon('copy', { size: 16 })}</button>
</div>`;

export function mountCodeBlocks(root = document) {
  const onClick = (event) => {
    const btn = event.target.closest('[data-code-copy]');
    if (btn) copyText(btn.closest('.ds-code-block').querySelector('code').textContent, msg('code.copied'), { echo: false });
  };
  root.addEventListener('click', onClick);
  return () => root.removeEventListener('click', onClick);
}
