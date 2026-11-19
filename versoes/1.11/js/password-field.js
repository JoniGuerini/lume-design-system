/**
 * Campo de senha — o botão de mostrar e esconder dentro do campo, sem tirar o foco de quem digita.
 *
 *   <div class="ds-field"><input class="ds-field__input" id="senha" name="senha" type="password" autocomplete="current-password"></div>
 *
 *   const senha = createPasswordField(document.querySelector('#senha'));
 *   senha.visible; senha.show(); senha.hide(); senha.toggle(); senha.destroy();
 *
 * O botão é um .ds-field__action com aria-pressed: o nome ("Mostrar senha") não muda, e o estado diz se
 * a senha está à vista. Ao enviar o formulário, a senha volta a ficar escondida (o navegador não oferece
 * para salvar um campo de texto comum).
 */
import { icon } from '../icons/icons.js';
import { msg } from './i18n.js';

export function createPasswordField(input, { onToggle } = {}) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action';
  input.after(button);
  let visible = false;

  function sync() {
    input.type = visible ? 'text' : 'password';
    button.setAttribute('aria-pressed', String(visible));
    button.setAttribute('aria-label', msg('password.show'));
    button.innerHTML = icon(visible ? 'eye-off' : 'eye', { size: 16 });
    button.disabled = input.disabled;
  }

  function set(next) {
    if (next === visible) return;
    visible = next;
    sync();
    onToggle?.(visible);
  }

  // o clique no botão não tira o foco do campo (o cursor fica onde estava)
  const onDown = (event) => event.preventDefault();
  const onClick = () => set(!visible);
  const form = input.form;
  const onSubmit = () => set(false);
  const onLocale = () => sync();

  button.addEventListener('pointerdown', onDown);
  button.addEventListener('click', onClick);
  form?.addEventListener('submit', onSubmit);
  document.documentElement.addEventListener('ds:localechange', onLocale);
  sync();

  return {
    el: input,
    get visible() {
      return visible;
    },
    show: () => set(true),
    hide: () => set(false),
    toggle: () => set(!visible),
    destroy() {
      button.removeEventListener('pointerdown', onDown);
      button.removeEventListener('click', onClick);
      form?.removeEventListener('submit', onSubmit);
      document.documentElement.removeEventListener('ds:localechange', onLocale);
      button.remove();
      input.type = 'password';
    },
  };
}
