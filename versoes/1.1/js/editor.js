/**
 * Editor de texto rico — escrever com formatação, sem dependências, sobre contenteditable.
 *
 *   <div class="ds-editor">
 *     <div class="ds-editor__content" aria-label="Descrição"><p>Texto inicial…</p></div>
 *   </div>
 *
 *   const editor = createEditor(document.querySelector('.ds-editor'), {
 *     tools: ['history', 'marks', 'blocks', 'align', 'link'], // grupos da barra, na ordem
 *     placeholder: 'Escreva aqui…',
 *     name: 'descricao',            // cria um <input type="hidden"> com o HTML, para o formulário enviar
 *     onChange: (html) => {},
 *   });
 *   editor.value; editor.setValue('<p>Oi</p>'); editor.getText(); editor.isEmpty();
 *   editor.focus(); editor.setDisabled(true); editor.destroy();
 *
 * A barra é a Barra de ferramentas do Lume (um Tab só, setas entre os botões) e mostra o estado do
 * trecho onde está o cursor. Atalhos: Ctrl/⌘ + B, I, U, K (link), Z e Shift+Z; no começo de um
 * parágrafo, “# ”, “## ”, “- ”, “1. ” e “> ” viram título, subtítulo, lista, lista numerada e citação.
 * Colar limpa o HTML: ficam só parágrafos, títulos, listas, citações, negrito, itálico, sublinhado,
 * riscado, código e links (http, https, mailto e caminhos). O HTML que sai segue a mesma regra.
 */
import { icon } from '../icons/icons.js';
import { msg } from './i18n.js';
import { createToolbar } from './toolbar.js';

const GROUPS = {
  history: ['undo', 'redo'],
  marks: ['bold', 'italic', 'underline', 'strikethrough'],
  blocks: ['heading', 'list', 'list-ordered', 'quote'],
  align: ['align-left', 'align-center', 'align-right'],
  link: ['link'],
};

const TOOLS = {
  undo: { cmd: 'undo', keys: 'Control+Z' },
  redo: { cmd: 'redo', keys: 'Control+Shift+Z' },
  bold: { cmd: 'bold', keys: 'Control+B', state: true },
  italic: { cmd: 'italic', keys: 'Control+I', state: true },
  underline: { cmd: 'underline', keys: 'Control+U', state: true },
  strikethrough: { cmd: 'strikeThrough', state: true },
  heading: { block: 'h2', state: true },
  list: { cmd: 'insertUnorderedList', state: true },
  'list-ordered': { cmd: 'insertOrderedList', state: true },
  quote: { block: 'blockquote', state: true },
  'align-left': { cmd: 'justifyLeft', align: 'left', state: true },
  'align-center': { cmd: 'justifyCenter', align: 'center', state: true },
  'align-right': { cmd: 'justifyRight', align: 'right', state: true },
  link: { keys: 'Control+K', state: true },
};

const BLOCKS = new Set(['P', 'H2', 'H3', 'UL', 'OL', 'BLOCKQUOTE', 'PRE']);
const INLINE = { B: 'strong', STRONG: 'strong', I: 'em', EM: 'em', U: 'u', S: 's', STRIKE: 's', DEL: 's', CODE: 'code', A: 'a', BR: 'br' };
const ALIGNABLE = new Set(['P', 'H2', 'H3', 'BLOCKQUOTE', 'LI']);
const safeHref = (href) => {
  const h = (href || '').trim();
  return /^(https?:|mailto:|\/|#|\.\.?\/)/i.test(h) ? h : /^[\w.-]+\.[a-z]{2,}(\/|$)/i.test(h) ? `https://${h}` : '';
};

/* Limpa um trecho de HTML para o que o editor aceita. Devolve um DocumentFragment. */
function clean(html) {
  const doc = new DOMParser().parseFromString(`<body>${html}</body>`, 'text/html');
  const out = document.createDocumentFragment();
  let para = null; // agrupa texto solto num <p>

  const inline = (node, parent) => {
    node.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) return parent.append(child.textContent.replace(/\s+/g, ' '));
      if (child.nodeType !== Node.ELEMENT_NODE) return;
      const tag = INLINE[child.tagName];
      const style = child.getAttribute('style') || '';
      if (tag === 'br') return parent.append(document.createElement('br'));
      if (tag === 'a') {
        const href = safeHref(child.getAttribute('href'));
        if (!href) return inline(child, parent);
        const a = document.createElement('a');
        a.href = href;
        inline(child, a);
        return parent.append(a);
      }
      // estilos do Google Docs e do Word chegam em <span style>: negrito e itálico viram tags
      let target = parent;
      const wrap = (t) => {
        const el = document.createElement(t);
        target.append(el);
        target = el;
      };
      if (tag) wrap(tag);
      else if (child.tagName === 'SPAN') {
        if (/font-weight:\s*(bold|[6-9]00)/.test(style)) wrap('strong');
        if (/font-style:\s*italic/.test(style)) wrap('em');
      }
      inline(child, target);
    });
  };

  const block = (tag, node, align) => {
    const el = document.createElement(tag);
    if (align && /^(center|right)$/.test(align)) el.style.textAlign = align;
    return el;
  };

  const walk = (node) => {
    node.childNodes.forEach((child) => {
      const name = child.nodeType === Node.ELEMENT_NODE ? child.tagName : '#text';
      const align = child.nodeType === Node.ELEMENT_NODE ? child.style?.textAlign : '';
      if (name === '#text' || INLINE[name] || name === 'SPAN' || name === 'FONT') {
        if (name === '#text' && !child.textContent.trim() && !para) return;
        if (!para) {
          para = document.createElement('p');
          out.append(para);
        }
        const holder = document.createElement('div');
        holder.append(child.cloneNode(true));
        inline(holder, para);
        return;
      }
      if (child.nodeType !== Node.ELEMENT_NODE || /^(SCRIPT|STYLE|META|LINK|TITLE|TEMPLATE|IMG|SVG|IFRAME|OBJECT|VIDEO|AUDIO|CANVAS)$/.test(name)) return;
      para = null;
      if (/^H[1-6]$/.test(name)) {
        const el = block(name === 'H1' || name === 'H2' ? 'h2' : 'h3', child, align);
        inline(child, el);
        return el.textContent.trim() && out.append(el);
      }
      if (name === 'UL' || name === 'OL') {
        const list = document.createElement(name.toLowerCase());
        child.querySelectorAll(':scope > li').forEach((li) => {
          const item = block('li', li, li.style.textAlign);
          inline(li, item);
          list.append(item);
        });
        return list.children.length && out.append(list);
      }
      if (name === 'BLOCKQUOTE') {
        const el = block('blockquote', child, align);
        inline(child, el);
        return out.append(el);
      }
      if (name === 'PRE') {
        const el = document.createElement('pre');
        el.textContent = child.textContent;
        return out.append(el);
      }
      if (name === 'P' || name === 'LI') {
        const el = block('p', child, align);
        inline(child, el);
        return out.append(el);
      }
      walk(child); // div, section, table… entram pelo conteúdo
      para = null;
    });
  };
  walk(doc.body);
  return out;
}

export function sanitizeHtml(html) {
  const box = document.createElement('div');
  box.append(clean(html));
  // linhas vazias não vão para o HTML: o espaço entre blocos é do CSS
  box.querySelectorAll('p, h2, h3, blockquote, li').forEach((el) => !el.textContent.trim() && el.remove());
  box.querySelectorAll('ul, ol').forEach((el) => !el.children.length && el.remove());
  box.querySelectorAll('p > br:last-child, li > br:last-child, h2 > br:last-child, h3 > br:last-child').forEach((br) => br.remove());
  return box.innerHTML;
}

let count = 0;

export function createEditor(root, options = {}) {
  const o = { placeholder: '', name: null, value: null, onChange: null, ...options };
  o.tools ??= Object.keys(GROUPS);
  const id = `ds-editor-${++count}`;
  root.classList.add('ds-editor');

  let content = root.querySelector('.ds-editor__content');
  if (!content) {
    content = document.createElement('div');
    content.className = 'ds-editor__content';
    root.append(content);
  }
  content.id ||= `${id}-content`;
  content.contentEditable = 'true';
  content.setAttribute('role', 'textbox');
  content.setAttribute('aria-multiline', 'true');
  if (o.placeholder) content.dataset.placeholder = o.placeholder;
  if (o.value != null) content.innerHTML = sanitizeHtml(o.value);
  else if (content.innerHTML.trim()) content.innerHTML = sanitizeHtml(content.innerHTML);

  /* ── barra ── */
  let bar = root.querySelector('.ds-editor__toolbar');
  const builtBar = !bar;
  if (!bar) {
    bar = document.createElement('div');
    bar.className = 'ds-toolbar ds-toolbar--plain ds-editor__toolbar';
    bar.innerHTML = o.tools
      .filter((g) => GROUPS[g])
      .map(
        (g) =>
          `<div class="ds-toolbar__group"${g === 'align' ? ' data-exclusive' : ''}>${GROUPS[g]
            .map((t) => `<button type="button" class="ds-icon-btn ds-icon-btn--sm" data-tool="${t}" aria-label="${msg(`editor.${t}`)}"${TOOLS[t].state ? ' aria-pressed="false"' : ''}${TOOLS[t].keys ? ` aria-keyshortcuts="${TOOLS[t].keys}"` : ''}>${icon(t, { size: 18 })}</button>`)
            .join('')}</div>`,
      )
      .join('<div class="ds-toolbar__separator"></div>');
    root.prepend(bar);
  }
  bar.setAttribute('aria-label', msg('editor.toolbar'));
  bar.setAttribute('aria-controls', content.id);
  const toolbar = createToolbar(bar);

  /* ── barra do link ── */
  const linkbar = document.createElement('form');
  linkbar.className = 'ds-editor__linkbar';
  linkbar.hidden = true;
  linkbar.innerHTML = `
    <label class="ds-visually-hidden" for="${id}-url">${msg('editor.linkUrl')}</label>
    <div class="ds-field ds-field--sm ds-editor__url">${icon('link', { size: 16 })}<input class="ds-field__input" id="${id}-url" type="text" inputmode="url" autocomplete="off" placeholder="https://"></div>
    <button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">${msg('editor.linkApply')}</button>
    <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-unlink>${msg('editor.unlink')}</button>
    <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-link-close aria-label="${msg('common.close')}">${icon('x', { size: 16 })}</button>`;
  bar.after(linkbar);
  const url = linkbar.querySelector('input');

  let hidden = null;
  if (o.name) {
    hidden = document.createElement('input');
    hidden.type = 'hidden';
    hidden.name = o.name;
    root.append(hidden);
  }

  try {
    document.execCommand('defaultParagraphSeparator', false, 'p');
    document.execCommand('styleWithCSS', false, false);
  } catch {
    /* navegador sem execCommand: digitar continua funcionando */
  }

  /* ── seleção ── */
  let saved = null;
  const inside = (node) => node && content.contains(node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement);
  const range = () => {
    const sel = getSelection();
    return sel.rangeCount && inside(sel.anchorNode) ? sel.getRangeAt(0) : null;
  };
  function restore() {
    content.focus({ preventScroll: true });
    if (!saved) return;
    const sel = getSelection();
    sel.removeAllRanges();
    sel.addRange(saved);
  }
  const blockOf = (node) => {
    for (let el = node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentElement; el && el !== content; el = el.parentElement) {
      if (ALIGNABLE.has(el.tagName)) return el;
    }
    return null;
  };
  const linkOf = (node) => (node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentElement)?.closest('a');

  /* Arruma o que o navegador deixa torto: o Chrome põe listas e títulos dentro de <p>,
     e tirar uma lista pode deixar texto solto. Guarda o cursor, porque mover nós o perderia. */
  function normalize() {
    const sel = getSelection();
    const r = range();
    const mark = r && [r.startContainer, r.startOffset, r.endContainer, r.endOffset];
    let touched = false;
    const isBlock = (n) => n.nodeType === Node.ELEMENT_NODE && (BLOCKS.has(n.tagName) || /^(H[1-6]|DIV)$/.test(n.tagName));
    const regroup = (parent, before) => {
      let para = null;
      [...parent.childNodes].forEach((n) => {
        if (isBlock(n)) {
          para = null;
          const target = n.tagName === 'DIV' ? 'p' : null;
          if (target) {
            const p = document.createElement('p');
            p.append(...n.childNodes);
            before.before(p);
          } else before.before(n);
          return;
        }
        if (n.nodeType === Node.TEXT_NODE && !n.textContent.trim() && !para) return n.remove();
        if (!para) {
          para = document.createElement('p');
          before.before(para);
        }
        para.append(n);
      });
    };
    content.querySelectorAll('p, h2, h3, blockquote').forEach((el) => {
      if (![...el.children].some(isBlock)) return;
      regroup(el, el);
      el.remove();
      touched = true;
    });
    // texto solto no topo do editor vira parágrafo
    if ([...content.childNodes].some((n) => !isBlock(n) && !(n.nodeType === Node.TEXT_NODE && !n.textContent.trim()))) {
      const holder = document.createElement('div');
      holder.append(...content.childNodes);
      const end = document.createComment('');
      content.append(end);
      regroup(holder, end);
      end.remove();
      touched = true;
    }
    content.querySelectorAll(':scope > div').forEach((div) => {
      const p = document.createElement('p');
      p.append(...div.childNodes);
      div.replaceWith(p);
      touched = true;
    });
    content.querySelectorAll('p:empty, h2:empty, h3:empty, li:empty').forEach((el) => el.append(document.createElement('br')));
    if (touched && mark && mark[0].isConnected) {
      try {
        const nr = document.createRange();
        nr.setStart(mark[0], Math.min(mark[1], mark[0].length ?? mark[0].childNodes.length));
        nr.setEnd(mark[2], Math.min(mark[3], mark[2].length ?? mark[2].childNodes.length));
        sel.removeAllRanges();
        sel.addRange(nr);
      } catch {
        /* cursor perdido: fica onde o navegador deixou */
      }
    }
  }

  /* ── estado da barra ── */
  function sync() {
    const r = range();
    if (r) saved = r.cloneRange();
    const node = r?.startContainer;
    const blockEl = blockOf(node);
    const align = blockEl ? getComputedStyle(blockEl).textAlign : 'left';
    bar.querySelectorAll('[data-tool]').forEach((btn) => {
      const t = TOOLS[btn.dataset.tool];
      if (!t.state) return;
      let on = false;
      if (!r) on = false;
      else if (t.block) on = !!blockEl?.closest(t.block === 'h2' ? 'h2, h3' : t.block);
      else if (t.align) on = (align === 'start' ? 'left' : align === 'end' ? 'right' : align) === t.align;
      else if (btn.dataset.tool === 'link') on = !!linkOf(node);
      else {
        try {
          on = document.queryCommandState(t.cmd);
        } catch {
          on = false;
        }
      }
      btn.setAttribute('aria-pressed', String(on));
    });
    bar.querySelectorAll('[data-tool="undo"], [data-tool="redo"]').forEach((btn) => {
      try {
        btn.disabled = !document.queryCommandEnabled(TOOLS[btn.dataset.tool].cmd);
      } catch {
        btn.disabled = false;
      }
    });
    toolbar.refresh();
  }

  function changed() {
    content.classList.toggle('is-empty', isEmpty());
    const html = getHTML();
    if (hidden) hidden.value = html;
    o.onChange?.(html);
  }

  function setBlock(tag) {
    const current = blockOf(range()?.startContainer);
    const same = current?.closest(tag === 'h2' ? 'h2, h3' : tag);
    document.execCommand('formatBlock', false, same ? 'p' : tag);
  }

  function run(tool) {
    const t = TOOLS[tool];
    restore();
    if (tool === 'link') return openLink();
    if (t.block) setBlock(t.block);
    else document.execCommand(t.cmd, false, null);
    normalize();
    sync();
    changed();
  }

  /* ── link ── */
  function openLink() {
    const r = range();
    if (!r) return;
    saved = r.cloneRange();
    const a = linkOf(r.startContainer);
    url.value = a ? a.getAttribute('href') : '';
    linkbar.querySelector('[data-unlink]').hidden = !a;
    linkbar.hidden = false;
    url.focus();
    url.select();
  }
  function closeLink(focusBack = true) {
    linkbar.hidden = true;
    if (focusBack) restore();
  }
  const onLinkSubmit = (event) => {
    event.preventDefault();
    const href = safeHref(url.value);
    restore();
    const r = range();
    const a = r && linkOf(r.startContainer);
    if (!href) {
      url.setAttribute('aria-invalid', 'true');
      url.focus();
      return;
    }
    url.removeAttribute('aria-invalid');
    if (a) a.setAttribute('href', href);
    else if (r && r.collapsed) document.execCommand('insertHTML', false, `<a href="${href.replace(/"/g, '&quot;')}">${href.replace(/</g, '&lt;')}</a>`);
    else document.execCommand('createLink', false, href);
    closeLink();
    sync();
    changed();
  };
  const onLinkClick = (event) => {
    if (event.target.closest('[data-link-close]')) closeLink();
    if (event.target.closest('[data-unlink]')) {
      restore();
      const a = linkOf(range()?.startContainer);
      if (a) {
        const r = document.createRange();
        r.selectNodeContents(a);
        const sel = getSelection();
        sel.removeAllRanges();
        sel.addRange(r);
      }
      document.execCommand('unlink');
      closeLink();
      sync();
      changed();
    }
  };
  const onLinkKey = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      closeLink();
    }
  };

  /* ── eventos ── */
  const onBarDown = (event) => {
    // o clique não tira o foco do texto: a seleção continua onde estava
    if (event.target.closest('[data-tool]')) event.preventDefault();
  };
  const onBarClick = (event) => {
    const btn = event.target.closest('[data-tool]');
    if (btn && !btn.disabled && !disabled) run(btn.dataset.tool);
  };

  const MARKDOWN = [
    [/^#$/, () => setBlock('h2')],
    [/^##$/, () => document.execCommand('formatBlock', false, 'h3')],
    [/^[-*]$/, () => document.execCommand('insertUnorderedList')],
    [/^1[.)]$/, () => document.execCommand('insertOrderedList')],
    [/^>$/, () => setBlock('blockquote')],
  ];

  const onKeyDown = (event) => {
    const mod = event.ctrlKey || event.metaKey;
    if (mod && !event.altKey) {
      const k = event.key.toLowerCase();
      if (k === 'k') {
        // o link vem antes da busca ⌘K da página
        event.preventDefault();
        event.stopPropagation();
        return openLink();
      }
      if (k === 'b' || k === 'i' || k === 'u') {
        event.preventDefault();
        document.execCommand(k === 'b' ? 'bold' : k === 'i' ? 'italic' : 'underline');
        sync();
        return changed();
      }
    }
    // atalhos de Markdown no começo de um parágrafo
    if (event.key === ' ' && !mod) {
      const r = range();
      const blockEl = blockOf(r?.startContainer);
      if (!r || !r.collapsed || !blockEl || blockEl.tagName !== 'P') return;
      const before = document.createRange();
      before.setStart(blockEl, 0);
      before.setEnd(r.startContainer, r.startOffset);
      const typed = before.toString();
      const rule = MARKDOWN.find(([re]) => re.test(typed));
      if (!rule) return;
      event.preventDefault();
      const sel = getSelection();
      sel.removeAllRanges();
      sel.addRange(before);
      document.execCommand('delete');
      // parágrafo vazio sem <br>: o Chrome poria a lista dentro do <p>
      if (!blockEl.firstChild) {
        blockEl.append(document.createElement('br'));
        const caret = document.createRange();
        caret.setStart(blockEl, 0);
        sel.removeAllRanges();
        sel.addRange(caret);
      }
      rule[1]();
      normalize();
      sync();
      changed();
    }
  };

  const onPaste = (event) => {
    const data = event.clipboardData;
    if (!data) return;
    event.preventDefault();
    const html = data.getData('text/html');
    const text = data.getData('text/plain');
    const safe = html
      ? sanitizeHtml(html)
      : text
          .split(/\r?\n\r?\n/)
          .map((p) => `<p>${p.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\r?\n/g, '<br>')}</p>`)
          .join('');
    // um parágrafo só: entra no meio da linha, sem quebrar
    const single = safe.match(/^<p>(.*)<\/p>$/s);
    document.execCommand('insertHTML', false, single && !single[1].includes('<p>') ? single[1] : safe);
  };

  const onInput = () => {
    // apagou tudo: volta a ter um parágrafo, para o primeiro caractere não ficar solto
    if (!content.firstElementChild && content.textContent === '') content.innerHTML = '<p><br></p>';
    else normalize();
    sync();
    changed();
  };
  const onSelection = () => {
    if (inside(document.getSelection()?.anchorNode)) sync();
  };
  const onLinkFollow = (event) => {
    // com Ctrl/⌘, o link abre; sem, o clique só põe o cursor
    const a = event.target.closest('a');
    if (a && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      window.open(a.href, '_blank', 'noopener');
    }
  };
  const onLocale = () => {
    if (!builtBar) return;
    bar.querySelectorAll('[data-tool]').forEach((btn) => btn.setAttribute('aria-label', msg(`editor.${btn.dataset.tool}`)));
    bar.setAttribute('aria-label', msg('editor.toolbar'));
  };

  bar.addEventListener('mousedown', onBarDown);
  bar.addEventListener('click', onBarClick);
  linkbar.addEventListener('submit', onLinkSubmit);
  linkbar.addEventListener('click', onLinkClick);
  linkbar.addEventListener('keydown', onLinkKey);
  content.addEventListener('keydown', onKeyDown);
  content.addEventListener('paste', onPaste);
  content.addEventListener('input', onInput);
  content.addEventListener('click', onLinkFollow);
  document.addEventListener('selectionchange', onSelection);
  document.addEventListener('ds:localechange', onLocale);

  let disabled = false;
  function getHTML() {
    return isEmpty() ? '' : sanitizeHtml(content.innerHTML);
  }
  function setValue(html) {
    content.innerHTML = sanitizeHtml(html || '') || '<p><br></p>';
    changed();
    sync();
  }
  function isEmpty() {
    return !content.textContent.trim() && !content.querySelector('li, br + br');
  }
  if (!content.firstElementChild) content.innerHTML = '<p><br></p>';
  content.classList.toggle('is-empty', isEmpty());
  if (hidden) hidden.value = getHTML();
  sync();

  return {
    el: root,
    content,
    /** O HTML limpo (vazio quando não há texto). */
    get value() {
      return getHTML();
    },
    setValue,
    getText: () => content.innerText.trim(),
    isEmpty,
    focus: () => content.focus(),
    setDisabled(value) {
      disabled = !!value;
      content.contentEditable = String(!disabled);
      content.setAttribute('aria-disabled', String(disabled));
      root.toggleAttribute('data-disabled', disabled);
      bar.querySelectorAll('button').forEach((btn) => (btn.disabled = disabled));
      if (!disabled) sync();
    },
    destroy() {
      bar.removeEventListener('mousedown', onBarDown);
      bar.removeEventListener('click', onBarClick);
      content.removeEventListener('keydown', onKeyDown);
      content.removeEventListener('paste', onPaste);
      content.removeEventListener('input', onInput);
      content.removeEventListener('click', onLinkFollow);
      document.removeEventListener('selectionchange', onSelection);
      document.removeEventListener('ds:localechange', onLocale);
      toolbar.destroy();
      linkbar.remove();
      hidden?.remove();
      if (builtBar) bar.remove();
      content.removeAttribute('contenteditable');
    },
  };
}
