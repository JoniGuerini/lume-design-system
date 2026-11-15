/**
 * Código de verificação — um dígito por casa, para login em duas etapas.
 *
 *   <div class="ds-otp"><input class="ds-otp__input" id="codigo" name="codigo" aria-label="Código de verificação"></div>
 *
 *   const otp = createOtpField(document.querySelector('.ds-otp'), {
 *     length: 6,
 *     group: 3,                  // separa em grupos de 3 (opcional)
 *     alphanumeric: false,       // aceita letras também
 *     onComplete: (code) => verificar(code),
 *   });
 *   otp.value; otp.clear(); otp.setError(true); otp.destroy();
 *
 * Por baixo é um único <input> com autocomplete="one-time-code": o preenchimento automático do celular, colar e
 * o leitor de tela funcionam como num campo comum. As casas são só o desenho, e ficam escondidas do leitor de tela.
 */
export function createOtpField(root, options = {}) {
  const o = { length: 6, ...options };
  const input = root.querySelector('.ds-otp__input');
  const allowed = o.alphanumeric ? /[^0-9a-z]/gi : /\D/g;

  input.type = 'text';
  input.maxLength = o.length;
  input.autocomplete = 'one-time-code';
  input.inputMode = o.alphanumeric ? 'text' : 'numeric';
  input.autocapitalize = o.alphanumeric ? 'characters' : 'off';
  input.spellcheck = false;
  input.pattern = o.alphanumeric ? `[0-9A-Za-z]{${o.length}}` : `\\d{${o.length}}`;

  const boxes = document.createElement('div');
  boxes.className = 'ds-otp__boxes';
  boxes.setAttribute('aria-hidden', 'true');
  boxes.innerHTML = Array.from({ length: o.length }, (_, i) => `${o.group && i && i % o.group === 0 ? '<span class="ds-otp__gap"></span>' : ''}<span class="ds-otp__box" data-box="${i}"></span>`).join('');
  input.after(boxes);
  const cells = [...boxes.querySelectorAll('[data-box]')];

  let completed = '';

  function paint() {
    const v = input.value;
    const focused = document.activeElement === input;
    const at = Math.min(input.selectionStart ?? v.length, o.length - 1);
    cells.forEach((cell, i) => {
      cell.textContent = v[i] ?? '';
      cell.toggleAttribute('data-filled', i < v.length);
      cell.toggleAttribute('data-active', focused && i === at);
    });
  }

  const onInput = () => {
    const clean = input.value.replace(allowed, '').slice(0, o.length);
    const value = o.alphanumeric ? clean.toUpperCase() : clean;
    if (value !== input.value) input.value = value;
    root.removeAttribute('data-error');
    if (input.getAttribute('aria-invalid') === 'true' && !input.form) input.removeAttribute('aria-invalid');
    paint();
    if (value.length === o.length && value !== completed) {
      completed = value;
      o.onComplete?.(value);
    } else if (value.length < o.length) completed = '';
  };
  const onSelection = () => {
    if (document.activeElement === input) paint();
  };
  const onFocus = () => {
    // abre com o cursor no fim, onde a próxima tecla entra
    const end = input.value.length;
    input.setSelectionRange(end, end);
    paint();
  };

  input.addEventListener('input', onInput);
  input.addEventListener('focus', onFocus);
  input.addEventListener('blur', paint);
  document.addEventListener('selectionchange', onSelection);
  paint();

  return {
    get value() {
      return input.value;
    },
    setValue(next) {
      input.value = next;
      onInput();
    },
    clear() {
      input.value = '';
      completed = '';
      root.removeAttribute('data-error');
      input.removeAttribute('aria-invalid');
      paint();
    },
    setError(on = true) {
      root.toggleAttribute('data-error', on);
      if (on) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
    },
    focus: () => input.focus(),
    destroy() {
      boxes.remove();
      input.removeEventListener('input', onInput);
      input.removeEventListener('focus', onFocus);
      input.removeEventListener('blur', paint);
      document.removeEventListener('selectionchange', onSelection);
    },
  };
}
