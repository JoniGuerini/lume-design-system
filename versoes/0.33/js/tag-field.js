/**
 * Campo de tags — vários valores livres dentro de um campo só.
 *
 *   <div class="ds-field ds-tags"><input class="ds-field__input" id="assuntos" name="assuntos" type="text"></div>
 *
 *   const tags = createTagField(document.querySelector('#assuntos'), {
 *     value: ['design', 'tokens'],
 *     max: 5,                                   // no máximo 5 tags
 *     validate: (text) => (text.length > 20 ? 'Use até 20 caracteres.' : null),
 *     onChange: (values) => …,
 *   });
 *   tags.value; tags.setValue([…]); tags.add('novo'); tags.remove('novo'); tags.destroy();
 *
 * O formulário recebe os valores separados por vírgula, num input oculto com o name do campo.
 * Enter ou vírgula criam a tag; colar uma lista cria várias. Backspace com o campo vazio marca a última
 * tag e, de novo, apaga. Cada tag tem um botão de remover com nome próprio, e as mudanças são anunciadas.
 */
import { icon } from '../icons/icons.js';
import { msg } from './i18n.js';
import { hiddenValue, setFieldError } from './field-support.js';

const escape = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

export function createTagField(input, options = {}) {
  const o = { ...options };
  const field = input.closest('.ds-field');
  const hidden = input.name ? hiddenValue(input) : null;
  input.autocomplete = 'off';

  let values = [...(o.value ?? [])];
  let armed = false; // a última tag está marcada para sair

  const list = document.createElement('ul');
  list.className = 'ds-tags__list';
  list.setAttribute('role', 'list');
  input.before(list);

  const live = document.createElement('span');
  live.className = 'ds-visually-hidden';
  live.setAttribute('role', 'status');
  field.after(live);

  function render() {
    list.innerHTML = values
      .map(
        (v, i) => `<li class="ds-tags__tag"${armed && i === values.length - 1 ? ' data-armed' : ''}>
          <span class="ds-tags__text">${escape(v)}</span>
          <button type="button" class="ds-tags__remove" data-remove="${i}" aria-label="${escape(msg('common.remove', v))}"${input.disabled ? ' disabled' : ''}>${icon('x', { size: 14 })}</button>
        </li>`,
      )
      .join('');
    list.hidden = !values.length;
    if (hidden) hidden.value = values.join(',');
    if (values.length) input.dataset.dsFilled = values.join(',');
    else delete input.dataset.dsFilled;
  }

  function changed() {
    render();
    o.onChange?.([...values]);
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }

  /** Cria as tags do texto (várias, se vier uma lista). Devolve false se alguma foi recusada. */
  function addText(text) {
    const pieces = text.split(/[,;\n]/).map((s) => s.trim()).filter(Boolean);
    let error = null;
    let added = false;
    for (const piece of pieces) {
      if (values.some((v) => v.toLocaleLowerCase() === piece.toLocaleLowerCase())) error = msg('tags.duplicate', piece);
      else if (o.max && values.length >= o.max) error = msg('tags.max', o.max);
      else {
        const refused = o.validate?.(piece);
        if (refused) error = refused;
        else {
          values.push(piece);
          added = true;
          live.textContent = msg('tags.added', piece);
        }
      }
    }
    setFieldError(input, error);
    if (added) changed();
    return !error;
  }

  function removeAt(index) {
    const [gone] = values.splice(index, 1);
    armed = false;
    setFieldError(input, null);
    live.textContent = msg('tags.removed', gone);
    changed();
  }

  const disarm = () => {
    if (armed) {
      armed = false;
      render();
    }
  };

  const onKey = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      if (!input.value.trim()) {
        if (event.key === ',') event.preventDefault();
        return; // Enter vazio envia o formulário normalmente
      }
      event.preventDefault();
      if (addText(input.value)) input.value = '';
    } else if (event.key === 'Backspace' && !input.value && values.length) {
      event.preventDefault();
      if (armed) removeAt(values.length - 1);
      else {
        armed = true;
        render();
      }
    } else if (event.key !== 'Shift') disarm();
  };
  const onInput = () => {
    if (input.dataset.dsInvalid) setFieldError(input, null);
    disarm();
  };
  const onPaste = (event) => {
    const text = event.clipboardData?.getData('text') ?? '';
    if (!/[,;\n]/.test(text)) return;
    event.preventDefault();
    if (addText(text)) input.value = '';
  };
  const onBlur = () => {
    disarm();
    if (input.value.trim() && addText(input.value)) input.value = '';
  };
  const onClick = (event) => {
    const remove = event.target.closest('[data-remove]');
    if (remove) {
      removeAt(Number(remove.dataset.remove));
      input.focus({ preventScroll: true });
    } else if (event.target === field || event.target === list) input.focus({ preventScroll: true });
  };
  const onLocale = () => render();

  input.addEventListener('keydown', onKey);
  input.addEventListener('input', onInput);
  input.addEventListener('paste', onPaste);
  input.addEventListener('blur', onBlur);
  field.addEventListener('click', onClick);
  document.documentElement.addEventListener('ds:localechange', onLocale);

  render();

  return {
    get value() {
      return [...values];
    },
    setValue(next) {
      values = [...next];
      armed = false;
      setFieldError(input, null);
      render();
    },
    add: addText,
    remove(text) {
      const index = values.indexOf(text);
      if (index !== -1) removeAt(index);
    },
    destroy() {
      list.remove();
      live.remove();
      input.removeEventListener('keydown', onKey);
      input.removeEventListener('input', onInput);
      input.removeEventListener('paste', onPaste);
      input.removeEventListener('blur', onBlur);
      field.removeEventListener('click', onClick);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
    },
  };
}
