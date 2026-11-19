import { icon } from '../../ds/icons/icons.js';
import { createPasswordField } from '../../ds/js/password-field.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const label = () => L('Senha', 'Password', 'Contraseña');

const field = ({ id, text = label(), autocomplete = 'current-password', hint = '', attrs = '' }) => `<div class="ds-form-field">
  <label class="ds-form-field__label" for="${id}">${text}</label>
  <div class="ds-field"><input class="ds-field__input" id="${id}" type="password" autocomplete="${autocomplete}" value="lume2026"${hint ? ` aria-describedby="${id}-hint"` : ''}${attrs ? ` ${attrs}` : ''}></div>
  ${hint ? `<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="${id}-hint">${hint}</p></div>` : ''}
</div>`;

/** Amostra estática (estados): o botão desenhado, sem o módulo. */
const sample = ({ visible = false, state = '', disabled = false } = {}) => `<div class="ds-form-field">
  <span class="ds-form-field__label">${label()}</span>
  <div class="ds-field"${state ? ` data-state="${state}"` : ''}><input class="ds-field__input" type="${visible ? 'text' : 'password'}" value="lume2026" tabindex="-1" aria-label="${label()}"${disabled ? ' disabled' : ''}><span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"${disabled ? ' style="opacity:var(--ds-opacity-disabled)"' : ''}>${icon(visible ? 'eye-off' : 'eye', { size: 16 })}</span></div>
</div>`;

export default function renderCampoDeSenha(page) {
  return controlPage(page, {
    lead: L('O campo de texto para senhas, com o botão de mostrar e esconder. Mostrar evita erro de digitação sem pedir a senha duas vezes.', 'The text field for passwords, with the show and hide button. Showing it prevents typos without asking for the password twice.', 'El campo de texto para contraseñas, con el botón de mostrar y ocultar. Mostrarla evita errores de escritura sin pedir la contraseña dos veces.'),
    stats: [
      [L('botão', 'button', 'botón'), 'aria-pressed'],
      [L('foco', 'focus', 'foco'), L('no campo', 'in the field', 'en el campo')],
      [L('preenchimento', 'autofill', 'autocompletado'), 'autocomplete'],
      [L('tamanhos', 'sizes', 'tamaños'), 3],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Clique no olho: a senha aparece e o cursor continua no campo. A senha do exemplo é lume2026.', 'Click the eye: the password shows and the cursor stays in the field. The sample password is lume2026.', 'Haz clic en el ojo: la contraseña aparece y el cursor sigue en el campo. La contraseña del ejemplo es lume2026.'), html: playgroundMarkup('password-field') },
      {
        id: 'variantes',
        title: L('Entrar e criar', 'Sign in and sign up', 'Entrar y crear'),
        desc: L(`A diferença está no ${ic('autocomplete')}: ele diz ao navegador e ao gerenciador de senhas se é para preencher a senha salva ou sugerir uma nova.`, `The difference is in ${ic('autocomplete')}: it tells the browser and the password manager whether to fill the saved password or suggest a new one.`, `La diferencia está en ${ic('autocomplete')}: le dice al navegador y al gestor de contraseñas si debe completar la contraseña guardada o sugerir una nueva.`),
        html: examples([
          example(L('Entrar', 'Sign in', 'Entrar'), 'current-password', L('Preenche a senha salva.', 'Fills in the saved password.', 'Completa la contraseña guardada.'), field({ id: 'pw-current' })),
          example(L('Criar conta', 'Sign up', 'Crear cuenta'), 'new-password', L('O gerenciador sugere uma senha forte. Diga os requisitos na dica, à vista.', 'The manager suggests a strong password. State the requirements in the hint, in plain view.', 'El gestor sugiere una contraseña fuerte. Di los requisitos en la pista, a la vista.'), field({ id: 'pw-new', text: L('Nova senha', 'New password', 'Nueva contraseña'), autocomplete: 'new-password', hint: L('Pelo menos 8 caracteres.', 'At least 8 characters.', 'Al menos 8 caracteres.') })),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('Os mesmos do Campo de texto. O olho cortado diz que a senha está à vista.', 'The same as the Text field. The crossed-out eye says the password is visible.', 'Los mismos del Campo de texto. El ojo tachado dice que la contraseña está a la vista.'),
        html: stateGrid([
          [L('Escondida', 'Hidden', 'Oculta'), sample()],
          [L('À vista', 'Visible', 'A la vista'), sample({ visible: true })],
          [L('Foco', 'Focus', 'Foco'), sample({ state: 'focus' })],
          [L('Desativado', 'Disabled', 'Desactivado'), sample({ disabled: true })],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L('Ao enviar o formulário, a senha volta a ficar escondida, para o navegador oferecer salvá-la.', 'On submitting the form, the password goes back to hidden, so the browser offers to save it.', 'Al enviar el formulario, la contraseña vuelve a ocultarse, para que el navegador ofrezca guardarla.'),
        html: codeBlock(`<div class="ds-field">
  <input class="ds-field__input" id="senha" name="senha" type="password" autocomplete="current-password">
</div>

<script type="module">
  import { createPasswordField } from 'https://lumeui.dev/v/1.13/lume.js';
  const senha = createPasswordField(document.querySelector('#senha'));
  // senha.visible · senha.show() · senha.hide() · senha.toggle()
</script>

// React
<Field label="${label()}">
  <PasswordField name="senha" autoComplete="new-password" />
</Field>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O botão é um interruptor: o nome não muda, o estado sim.', 'The button is a toggle: the name doesn’t change, the state does.', 'El botón es un interruptor: el nombre no cambia, el estado sí.'),
        html: a11yList([
          [L('Nome fixo, estado em aria-pressed', 'Fixed name, state in aria-pressed', 'Nombre fijo, estado en aria-pressed'), L('O leitor de tela ouve “Mostrar senha, botão, pressionado” quando a senha está à vista.', 'Screen readers hear “Show password, button, pressed” when the password is visible.', 'El lector de pantalla oye “Mostrar contraseña, botón, presionado” cuando la contraseña está a la vista.')],
          [L('O cursor não sai', 'The cursor stays', 'El cursor no sale'), L('Clicar no olho não tira o foco do campo: dá para mostrar, conferir e continuar digitando.', 'Clicking the eye doesn’t take focus from the field: you can show, check, and keep typing.', 'Hacer clic en el ojo no saca el foco del campo: se puede mostrar, revisar y seguir escribiendo.')],
          [L('Pelo teclado', 'By keyboard', 'Por teclado'), L('Tab chega ao botão depois do campo; Espaço ou Enter alternam.', 'Tab reaches the button after the field; Space or Enter toggle it.', 'Tab llega al botón después del campo; Espacio o Enter lo alternan.'), ['Tab', L('Espaço', 'Space', 'Espacio')]],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Além dos tokens do Campo de texto.', 'On top of the Text field tokens.', 'Además de los tokens del Campo de texto.'),
        html: tokenTable([
          ['color.fg.muted', L('Ícone do olho', 'Eye icon', 'Ícono del ojo')],
          ['color.bg.hover', L('Botão no hover', 'Button on hover', 'Botón en hover')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: um campo só', 'Do: a single field', 'Haz: un solo campo'), L('Com o olho, “confirmar senha” sobra: a pessoa confere vendo.', 'With the eye, “confirm password” is unnecessary: people check by looking.', 'Con el ojo, “confirmar contraseña” sobra: la persona revisa viendo.')],
          ['dont', L('Evite: bloquear colar', 'Avoid: blocking paste', 'Evita: bloquear pegar'), L('Quem usa gerenciador de senhas cola a senha. Bloquear colar só atrapalha.', 'People with a password manager paste the password. Blocking paste only gets in the way.', 'Quien usa gestor de contraseñas la pega. Bloquear pegar solo estorba.')],
          ['tip', L('Requisitos à vista', 'Requirements in view', 'Requisitos a la vista'), L('Diga as regras antes do erro, na dica. O padrão Login e cadastro marca cada uma enquanto a pessoa digita.', 'State the rules before the error, in the hint. The Sign-in pattern checks each one off as people type.', 'Di las reglas antes del error, en la pista. El patrón Login y registro marca cada una mientras la persona escribe.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'password-field',
    controls: [
      { id: 'autocomplete', label: 'autocomplete', value: 'current-password', options: [{ value: 'current-password', label: L('Entrar', 'Sign in', 'Entrar') }, { value: 'new-password', label: L('Criar conta', 'Sign up', 'Crear cuenta') }] },
      { id: 'size', label: L('Tamanho', 'Size', 'Tamaño'), value: 'md', options: [{ value: 'sm', label: L('Pequeno', 'Small', 'Pequeño') }, { value: 'md', label: L('Médio', 'Medium', 'Mediano') }, { value: 'lg', label: L('Grande', 'Large', 'Grande') }] },
    ],
    render: (s) => stageWrap(field({ id: 'pw-play', autocomplete: s.autocomplete }).replace('class="ds-field"', `class="ds-field${s.size !== 'md' ? ` ds-field--${s.size}` : ''}"`)),
    mount: (preview) => {
      const f = createPasswordField(preview.querySelector('#pw-play'));
      return () => f.destroy();
    },
    code: (s) => `<div class="ds-form-field">
  <label class="ds-form-field__label" for="senha">${label()}</label>
  <div class="ds-field${s.size !== 'md' ? ` ds-field--${s.size}` : ''}"><input class="ds-field__input" id="senha" name="senha" type="password" autocomplete="${s.autocomplete}"></div>
</div>

<script type="module">
  import { createPasswordField } from 'https://lumeui.dev/v/1.13/lume.js';
  createPasswordField(document.querySelector('#senha'));
</script>`,
  });
  const fields = ['#pw-current', '#pw-new'].map((s) => createPasswordField(root.querySelector(s)));
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    fields.forEach((f) => f.destroy());
    unmountCopy();
    unmountNav();
  };
}
