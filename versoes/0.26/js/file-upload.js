/**
 * Upload de arquivo — arrastar ou escolher, com progresso e erro por arquivo.
 *
 *   <div class="ds-upload" id="anexos"><input class="ds-upload__input" type="file" name="anexos" id="anexos-input" multiple></div>
 *
 *   const upload = createFileUpload(document.querySelector('#anexos'), {
 *     accept: ['image/*', '.pdf'],            // tipos aceitos (também vai para o seletor do sistema)
 *     maxSize: 5 * 1024 * 1024,               // em bytes, por arquivo
 *     maxFiles: 3,
 *     upload: (file, { onProgress, signal }) => enviar(file, onProgress, signal),   // promessa; opcional
 *     onChange: (files) => …,
 *   });
 *   upload.files; upload.clear(); upload.destroy();
 *
 * Sem `upload`, os arquivos ficam no próprio input e seguem com o formulário. Com ele, cada arquivo é enviado
 * ao entrar na lista; uma falha vira erro naquela linha, com “Tentar de novo”, e não atrapalha as outras.
 * A área inteira é o <input type="file"> nativo, então clicar, arrastar e o teclado funcionam sem código extra.
 */
import { icon } from '../icons/icons.js';
import { msg, numberFormat } from './i18n.js';

const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
let uid = 0;

const formatSize = (bytes) => {
  const units = ['byte', 'kilobyte', 'megabyte', 'gigabyte'];
  const i = bytes ? Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1) : 0;
  return numberFormat({ style: 'unit', unit: units[i], unitDisplay: 'short', maximumFractionDigits: i > 1 ? 1 : 0 }).format(bytes / 1024 ** i);
};

const accepts = (file, rules) =>
  !rules?.length ||
  rules.some((rule) => {
    const r = rule.toLowerCase();
    if (r.startsWith('.')) return file.name.toLowerCase().endsWith(r);
    if (r.endsWith('/*')) return file.type.toLowerCase().startsWith(r.slice(0, -1));
    return file.type.toLowerCase() === r;
  });

export function createFileUpload(root, options = {}) {
  const o = { ...options };
  const input = root.querySelector('.ds-upload__input');
  const multiple = input.multiple;
  if (o.accept) input.accept = o.accept.join(',');
  const hintId = `ds-upload-${++uid}-hint`;

  let items = []; // { id, file, status: 'ready'|'uploading'|'done'|'error', progress, error, controller }

  root.insertAdjacentHTML(
    'beforeend',
    `<div class="ds-upload__zone" aria-hidden="true">
      <span class="ds-upload__icon">${icon('upload', { size: 20 })}</span>
      <span class="ds-upload__title" data-title></span>
      <span class="ds-upload__hint" id="${hintId}" data-hint></span>
    </div>
    <ul class="ds-upload__list" role="list" data-list hidden></ul>
    <span class="ds-visually-hidden" role="status" data-live></span>`,
  );
  const zone = root.querySelector('.ds-upload__zone');
  const list = root.querySelector('[data-list]');
  const live = root.querySelector('[data-live]');
  // a zona é só visual: o input fica por cima dela
  zone.before(input);
  input.setAttribute('aria-describedby', hintId);

  function syncTexts() {
    root.querySelector('[data-title]').textContent = msg(multiple ? 'upload.title' : 'upload.titleOne');
    const notes = [o.hint, o.maxSize ? msg('upload.maxSize', formatSize(o.maxSize)) : '', o.maxFiles && multiple ? msg('upload.maxFiles', o.maxFiles) : ''].filter(Boolean);
    const hint = root.querySelector('[data-hint]');
    hint.textContent = notes.join(' · ');
    hint.hidden = !notes.length;
  }

  /** Mantém no input só o que foi aceito, para seguir com o formulário. */
  function syncInput() {
    try {
      const transfer = new DataTransfer();
      items.filter((i) => !i.rejected).forEach((i) => transfer.items.add(i.file));
      input.files = transfer.files;
    } catch {}
  }

  const accepted = () => items.filter((i) => !i.rejected).map((i) => i.file);

  function rowHtml(item) {
    const status = item.status === 'uploading' ? `${msg('upload.uploading')} · ${numberFormat({ style: 'percent' }).format(item.progress)}` : item.status === 'done' ? msg('upload.done') : item.status === 'error' ? item.error : formatSize(item.file.size);
    return `<li class="ds-upload__item" data-item="${item.id}" data-status="${item.status}">
      <span class="ds-upload__file">${icon(item.status === 'error' ? 'alert-circle' : item.status === 'done' ? 'check-circle' : 'file-text', { size: 18 })}</span>
      <span class="ds-upload__meta">
        <span class="ds-upload__name">${escape(item.file.name)}</span>
        <span class="ds-upload__status">${escape(status)}</span>
        ${item.status === 'uploading' ? `<span class="ds-upload__bar" role="progressbar" aria-label="${escape(msg('upload.uploading'))} ${escape(item.file.name)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(item.progress * 100)}"><span style="width:${item.progress * 100}%"></span></span>` : ''}
      </span>
      ${item.status === 'error' && !item.rejected ? `<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-retry="${item.id}">${msg('upload.retry')}</button>` : ''}
      <button type="button" class="ds-icon-btn ds-icon-btn--sm" data-remove="${item.id}" aria-label="${escape(msg('common.remove', item.file.name))}">${icon('x', { size: 16 })}</button>
    </li>`;
  }

  function render() {
    list.innerHTML = items.map(rowHtml).join('');
    list.hidden = !items.length;
    root.toggleAttribute('data-filled', !multiple && items.some((i) => !i.rejected));
  }

  function updateRow(item) {
    list.querySelector(`[data-item="${item.id}"]`)?.replaceWith(document.createRange().createContextualFragment(rowHtml(item)));
  }

  async function send(item) {
    if (!o.upload) return;
    item.status = 'uploading';
    item.progress = 0;
    item.error = '';
    item.controller = new AbortController();
    updateRow(item);
    try {
      await o.upload(item.file, {
        signal: item.controller.signal,
        onProgress: (fraction) => {
          item.progress = Math.max(0, Math.min(1, fraction));
          const row = list.querySelector(`[data-item="${item.id}"]`);
          const bar = row?.querySelector('.ds-upload__bar');
          if (!bar) return;
          bar.setAttribute('aria-valuenow', Math.round(item.progress * 100));
          bar.firstElementChild.style.width = `${item.progress * 100}%`;
          row.querySelector('.ds-upload__status').textContent = `${msg('upload.uploading')} · ${numberFormat({ style: 'percent' }).format(item.progress)}`;
        },
      });
      item.status = 'done';
      live.textContent = `${item.file.name}: ${msg('upload.done')}`;
    } catch (error) {
      if (item.controller.signal.aborted) return;
      item.status = 'error';
      item.error = error?.message || msg('upload.failed');
      live.textContent = `${item.file.name}: ${item.error}`;
    }
    updateRow(item);
  }

  function addFiles(files) {
    if (!multiple) items = [];
    const added = [];
    let total = accepted().length;
    for (const file of files) {
      const item = { id: ++uid, file, status: 'ready', progress: 0, error: '', rejected: false };
      const problem = !accepts(file, o.accept) ? msg('upload.badType') : o.maxSize && file.size > o.maxSize ? msg('upload.tooBig', formatSize(o.maxSize)) : o.maxFiles && multiple && total >= o.maxFiles ? msg('upload.tooMany', o.maxFiles) : '';
      if (problem) Object.assign(item, { status: 'error', error: problem, rejected: true });
      else total++;
      items.push(item);
      added.push(item);
    }
    render();
    syncInput();
    live.textContent = added.map((i) => (i.rejected ? `${i.file.name}: ${i.error}` : i.file.name)).join('. ');
    added.filter((i) => !i.rejected).forEach(send);
    o.onChange?.(accepted());
  }

  const onChange = () => {
    if (input.files?.length) addFiles([...input.files]);
  };
  const onDragEnter = () => root.setAttribute('data-dragging', '');
  const onDragLeave = (event) => {
    if (!root.contains(event.relatedTarget)) root.removeAttribute('data-dragging');
  };
  const onDrop = (event) => {
    root.removeAttribute('data-dragging');
    if (input.disabled) return;
    event.preventDefault();
    addFiles([...(event.dataTransfer?.files ?? [])]);
  };
  const onDragOver = (event) => event.preventDefault();
  const onClick = (event) => {
    const remove = event.target.closest('[data-remove]');
    const retry = event.target.closest('[data-retry]');
    if (remove) {
      const id = Number(remove.dataset.remove);
      const item = items.find((i) => i.id === id);
      item?.controller?.abort();
      items = items.filter((i) => i.id !== id);
      render();
      syncInput();
      live.textContent = msg('upload.removed', item.file.name);
      o.onChange?.(accepted());
      (list.querySelector('[data-remove]') ?? input).focus({ preventScroll: true });
    } else if (retry) send(items.find((i) => i.id === Number(retry.dataset.retry)));
  };
  const onLocale = () => {
    syncTexts();
    render();
  };

  input.addEventListener('change', onChange);
  root.addEventListener('dragenter', onDragEnter);
  root.addEventListener('dragleave', onDragLeave);
  root.addEventListener('dragover', onDragOver);
  root.addEventListener('drop', onDrop);
  root.addEventListener('click', onClick);
  document.documentElement.addEventListener('ds:localechange', onLocale);

  syncTexts();

  return {
    get files() {
      return accepted();
    },
    add: addFiles,
    clear() {
      items.forEach((i) => i.controller?.abort());
      items = [];
      render();
      syncInput();
      o.onChange?.([]);
    },
    destroy() {
      items.forEach((i) => i.controller?.abort());
      input.removeEventListener('change', onChange);
      root.removeEventListener('dragenter', onDragEnter);
      root.removeEventListener('dragleave', onDragLeave);
      root.removeEventListener('dragover', onDragOver);
      root.removeEventListener('drop', onDrop);
      root.removeEventListener('click', onClick);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
    },
  };
}
