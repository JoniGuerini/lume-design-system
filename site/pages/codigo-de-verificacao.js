import { icon } from '../../ds/icons/icons.js';
import { createOtpField } from '../../ds/js/otp-field.js';
import { toast } from '../../ds/js/toast.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const label = () => L('Código de verificação', 'Verification code', 'Código de verificación');

const field = (id, attrs = '', state = '', error = false) => `<div class="ds-otp"${state ? ` data-state="${state}"` : ''}${error ? ' data-error' : ''} data-otp><input class="ds-otp__input" id="${id}" name="${id}" aria-label="${label()}"${attrs ? ` ${attrs}` : ''}></div>`;

/** Desenho parado, para a grade de estados. */
const staticBoxes = (text = '', { active = -1, state = '', error = false, disabled = false, length = 6 } = {}) => `<div class="ds-otp"${state ? ` data-state="${state}"` : ''}${error ? ' data-error' : ''}${disabled ? ' style="opacity:var(--ds-opacity-disabled)"' : ''}>
    <div class="ds-otp__boxes">${Array.from({ length }, (_, i) => `<span class="ds-otp__box"${i < text.length ? ' data-filled' : ''}${i === active ? ' data-active' : ''}>${text[i] ?? ''}</span>`).join('')}</div>
  </div>`;

export default function renderCodigo(page) {
  return controlPage(page, {
    lead: L('Para o código de login em duas etapas. Parece seis casas, mas é um campo só, e por isso colar e o preenchimento automático do celular funcionam sem esforço.', 'For the two-step sign-in code. It looks like six boxes, but it’s a single field, which is why pasting and the phone’s autofill just work.', 'Para el código de inicio de sesión en dos pasos. Parece seis casillas, pero es un solo campo, y por eso pegar y el autocompletado del móvil funcionan sin esfuerzo.'),
    stats: [
      [L('casas', 'boxes', 'casillas'), L('à escolha', 'your choice', 'a elegir')],
      [L('campos reais', 'real fields', 'campos reales'), 1],
      [L('autocomplete', 'autocomplete', 'autocomplete'), 'one-time-code'],
      [L('tipos', 'types', 'tipos'), 2],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Digite ou cole um código. Ao completar, o componente avisa.', 'Type or paste a code. When it’s complete, the component lets you know.', 'Escribe o pega un código. Al completarlo, el componente avisa.'), html: playgroundMarkup('otp') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('O número de casas segue o seu serviço de verificação.', 'The number of boxes follows your verification service.', 'El número de casillas sigue tu servicio de verificación.'),
        html: examples([
          example(L('Seis dígitos', 'Six digits', 'Seis dígitos'), 'length: 6', L('O mais comum, e só aceita números.', 'The most common, and it only accepts numbers.', 'El más común, y solo acepta números.'), field('otp-six')),
          example(L('Em dois grupos', 'In two groups', 'En dos grupos'), 'group: 3', L('Fica mais fácil de ler e memorizar.', 'Easier to read and memorize.', 'Es más fácil de leer y memorizar.'), field('otp-group')),
          example(L('Quatro dígitos', 'Four digits', 'Cuatro dígitos'), 'length: 4', L('Códigos mais curtos, como um PIN.', 'Shorter codes, like a PIN.', 'Códigos más cortos, como un PIN.'), field('otp-four')),
          example(L('Letras e números', 'Letters and numbers', 'Letras y números'), 'alphanumeric', L('Vira maiúsculas sozinho.', 'It turns uppercase on its own.', 'Se vuelve mayúsculas solo.'), field('otp-alpha')),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L(`Foco e erro podem ser forçados com ${ic('data-state')} e ${ic('data-error')}.`, `Focus and error can be forced with ${ic('data-state')} and ${ic('data-error')}.`, `Foco y error se pueden forzar con ${ic('data-state')} y ${ic('data-error')}.`),
        html: stateGrid([
          [L('Vazio', 'Empty', 'Vacío'), staticBoxes()],
          [L('Foco', 'Focus', 'Foco'), staticBoxes('', { state: 'focus' })],
          [L('Digitando', 'Typing', 'Escribiendo'), staticBoxes('482', { active: 3 })],
          [L('Completo', 'Complete', 'Completo'), staticBoxes('482913')],
          [L('Erro', 'Error', 'Error'), staticBoxes('482913', { error: true })],
          [L('Desativado', 'Disabled', 'Desactivado'), staticBoxes('', { disabled: true })],
        ]),
      },
      {
        id: 'exemplo',
        title: L('Numa tela de verificação', 'On a verification screen', 'En una pantalla de verificación'),
        desc: L('Experimente: o código certo aqui é 123456. Errar mostra a mensagem, limpa o campo e devolve o foco, para tentar de novo sem usar o mouse.', 'Try it: the right code here is 123456. A wrong one shows the message, clears the field, and returns focus, so you can try again without the mouse.', 'Pruébalo: el código correcto aquí es 123456. Equivocarse muestra el mensaje, limpia el campo y devuelve el foco, para intentar de nuevo sin usar el ratón.'),
        html: `<div class="fc-otp-demo">
          <p class="fc-otp-demo__title">${L('Confirme que é você', 'Confirm it’s you', 'Confirma que eres tú')}</p>
          <p class="fc-otp-demo__text">${L('Enviamos um código de 6 dígitos para ana@lume.dev.', 'We sent a 6-digit code to ana@lume.dev.', 'Enviamos un código de 6 dígitos a ana@lume.dev.')}</p>
          ${field('otp-verify')}
          <p class="ds-form-field__error" data-verify-error hidden>${icon('alert-circle', { size: 16 })}<span>${L('Código incorreto. Confira e tente de novo.', 'Wrong code. Check it and try again.', 'Código incorrecto. Revísalo e inténtalo de nuevo.')}</span></p>
          <button type="button" class="ds-inline-action fc-otp-demo__resend" data-resend>${icon('refresh', { size: 16 })}${L('Enviar outro código', 'Send another code', 'Enviar otro código')}</button>
        </div>`,
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Um único input evita os problemas das várias caixas: o leitor de tela lê um campo só, com um nome só.', 'A single input avoids the problems of multiple boxes: the screen reader reads one field, with one name.', 'Un único input evita los problemas de varias cajas: el lector de pantalla lee un solo campo, con un solo nombre.'),
        html: a11yList([
          [L('Preenchimento automático', 'Autofill', 'Autocompletado'), L('Com autocomplete="one-time-code", o celular sugere o código que chegou por SMS.', 'With autocomplete="one-time-code", the phone suggests the code that arrived by SMS.', 'Con autocomplete="one-time-code", el móvil sugiere el código que llegó por SMS.')],
          [L('Colar', 'Paste', 'Pegar'), L('Colar funciona de qualquer casa, e o que não for dígito é ignorado.', 'Pasting works from any box, and anything that isn’t a digit is ignored.', 'Pegar funciona desde cualquier casilla, y lo que no sea dígito se ignora.'), ['Ctrl', 'V']],
          [L('Teclado numérico', 'Number keypad', 'Teclado numérico'), L('No celular, inputmode="numeric" abre o teclado de números.', 'On phones, inputmode="numeric" opens the number keypad.', 'En el móvil, inputmode="numeric" abre el teclado de números.')],
          [L('Casas escondidas', 'Hidden boxes', 'Casillas ocultas'), L('As casas têm aria-hidden: são só desenho. Quem usa leitor de tela ouve o campo, não seis caixas.', 'The boxes have aria-hidden: they’re only a drawing. Screen reader users hear the field, not six boxes.', 'Las casillas tienen aria-hidden: son solo un dibujo. Quien usa lector de pantalla oye el campo, no seis cajas.')],
          [L('Erro com texto', 'Error with text', 'Error con texto'), L('Além do contorno vermelho, escreva o que houve e ligue a mensagem por aria-describedby.', 'Besides the red outline, write what happened and link the message with aria-describedby.', 'Además del contorno rojo, escribe qué pasó y vincula el mensaje con aria-describedby.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o campo consome.', 'Everything the field consumes.', 'Todo lo que consume el campo.'),
        html: tokenTable([
          ['color.bg.field', L('Fundo da casa', 'Box background', 'Fondo de la casilla')],
          ['color.border.default', L('Contorno', 'Outline', 'Contorno')],
          ['color.border.strong', L('Contorno no hover e divisor do grupo', 'Outline on hover and group divider', 'Contorno en hover y divisor del grupo')],
          ['color.border.focus', L('Casa ativa', 'Active box', 'Casilla activa')],
          ['color.danger.solid', L('Contorno no erro', 'Outline on error', 'Contorno en error')],
          ['color.fg.default', L('Dígito e cursor', 'Digit and caret', 'Dígito y cursor')],
          ['radius.md', L('Cantos da casa', 'Box corners', 'Esquinas de la casilla')],
          ['opacity.disabled', L('Desativado', 'Disabled', 'Desactivado')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e o que oferecer junto.', 'When to use it and what to offer with it.', 'Cuándo usarlo y qué ofrecer junto.'),
        html: usageCards([
          ['do', L('Faça: verificar sozinho', 'Do: verify on its own', 'Haz: verificar solo'), L('Com o código completo, confira sem pedir mais um clique.', 'Once the code is complete, check it without asking for another click.', 'Con el código completo, compruébalo sin pedir otro clic.')],
          ['dont', L('Evite: senha ou PIN visível', 'Avoid: visible passwords or PINs', 'Evita: contraseña o PIN visible'), L('Os dígitos ficam à mostra, porque o código é de uso único. Para segredos que se repetem, use um campo de senha.', 'Digits stay visible because the code is single-use. For secrets that repeat, use a password field.', 'Los dígitos quedan a la vista, porque el código es de un solo uso. Para secretos que se repiten, usa un campo de contraseña.')],
          ['tip', L('Sempre um plano B', 'Always a plan B', 'Siempre un plan B'), L('Ofereça “Enviar outro código” e diga para onde ele foi.', 'Offer “Send another code” and say where it went.', 'Ofrece “Enviar otro código” y di adónde fue.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'otp',
    controls: [
      { id: 'length', label: L('Casas', 'Boxes', 'Casillas'), value: '6', options: ['4', '5', '6', '8'].map((v) => ({ value: v, label: v })) },
      { id: 'group', label: L('Grupos', 'Groups', 'Grupos'), value: 'off', options: [{ value: 'off', label: L('Sem grupos', 'No groups', 'Sin grupos') }, { value: 'half', label: L('Dois grupos', 'Two groups', 'Dos grupos') }] },
      { id: 'type', label: L('Tipo', 'Type', 'Tipo'), value: 'digits', options: [{ value: 'digits', label: L('Só números', 'Numbers only', 'Solo números') }, { value: 'alpha', label: L('Letras e números', 'Letters and numbers', 'Letras y números') }] },
      { id: 'state', label: L('Estado', 'State', 'Estado'), value: 'default', options: [{ value: 'default', label: L('Normal', 'Default', 'Normal') }, { value: 'error', label: L('Erro', 'Error', 'Error') }, { value: 'disabled', label: L('Desativado', 'Disabled', 'Desactivado') }] },
    ],
    render: (s) => field('otp-play', s.state === 'disabled' ? 'disabled' : ''),
    mount: (preview, s) => {
      const otp = createOtpField(preview.querySelector('.ds-otp'), {
        length: Number(s.length),
        group: s.group === 'half' ? Math.floor(Number(s.length) / 2) : undefined,
        alphanumeric: s.type === 'alpha',
        onComplete: (code) => toast(L(`Código completo: ${code}`, `Code complete: ${code}`, `Código completo: ${code}`)),
      });
      if (s.state === 'error') otp.setError(true);
      return () => otp.destroy();
    },
    code: (s) => `<div class="ds-otp"><input class="ds-otp__input" id="codigo" name="codigo" aria-label="${label()}"${s.state === 'disabled' ? ' disabled' : ''}></div>

<script type="module">
  import { createOtpField } from 'https://lumeui.dev/v/0.25/lume.js';
  createOtpField(document.querySelector('.ds-otp'), {
    length: ${s.length},${s.group === 'half' ? `\n    group: ${Math.floor(Number(s.length) / 2)},` : ''}${s.type === 'alpha' ? '\n    alphanumeric: true,' : ''}
    onComplete: (code) => verificar(code),
  });
</script>`,
  });

  const fieldOf = (id) => root.querySelector(`#${id}`).closest('.ds-otp');
  const verifyError = root.querySelector('[data-verify-error]');
  verifyError.id = 'otp-verify-error';
  root.querySelector('#otp-verify').setAttribute('aria-describedby', 'otp-verify-error');
  const verify = createOtpField(fieldOf('otp-verify'), {
    onComplete: (code) => {
      const ok = code === '123456';
      verifyError.hidden = ok;
      if (ok) {
        toast(L('Pronto, é você.', 'All set, it’s you.', 'Listo, eres tú.'), { tone: 'success' });
        verify.clear();
      } else {
        verify.clear();
        verify.setError(true);
        verify.focus();
      }
    },
  });
  const otps = [
    createOtpField(fieldOf('otp-six')),
    createOtpField(fieldOf('otp-group'), { group: 3 }),
    createOtpField(fieldOf('otp-four'), { length: 4 }),
    createOtpField(fieldOf('otp-alpha'), { length: 6, alphanumeric: true }),
    verify,
  ];
  const onResend = (event) => {
    if (!event.target.closest('[data-resend]')) return;
    verifyError.hidden = true;
    verify.clear();
    verify.focus();
    toast(L('Enviamos outro código.', 'We sent another code.', 'Enviamos otro código.'));
  };
  const onInput = (event) => {
    // a mensagem de erro sai quando a pessoa volta a digitar (o campo limpo depois do erro não conta)
    if (event.target.id === 'otp-verify' && event.target.value && event.target.value.length < 6) verifyError.hidden = true;
  };
  root.addEventListener('click', onResend);
  root.addEventListener('input', onInput);

  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    otps.forEach((o) => o.destroy());
    root.removeEventListener('click', onResend);
    root.removeEventListener('input', onInput);
    unmountCopy();
    unmountNav();
  };
}
