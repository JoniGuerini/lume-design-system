import { icon } from '../../ds/icons/icons.js';
import { createTimePicker } from '../../ds/js/time-picker.js';
import { locale } from '../../ds/js/i18n.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, formField, example, examples, stateGrid, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const label = () => L('Horário', 'Time', 'Hora');
const time = (tag, h = 14, m = 30) => new Intl.DateTimeFormat(tag, { hour: '2-digit', minute: '2-digit' }).format(new Date(2026, 0, 1, h, m));

const staticField = (o) =>
  formField({
    id: `tp-state-${o.id}`,
    name: '',
    label: label(),
    value: o.value ?? '',
    state: o.state,
    attrs: [`tabindex="-1"`, o.placeholder ? `placeholder="${o.placeholder}"` : '', o.invalid ? 'aria-invalid="true"' : '', o.disabled ? 'disabled' : ''].filter(Boolean).join(' '),
    extra: `<span class="ds-icon-btn ds-icon-btn--sm ds-field__action">${icon('clock', { size: 18 })}</span>`,
  }) + (o.error ? `<p class="ds-form-field__error" style="margin-top:var(--ds-space-075)">${icon('alert-circle', { size: 16 })}<span>${o.error}</span></p>` : '');

export default function renderSeletorDeHorario(page) {
  const sample = time(locale());
  return controlPage(page, {
    lead: L('Para escolher horas e minutos. Digite do jeito que preferir ou escolha na lista, que aparece no formato do idioma.', 'For choosing hours and minutes. Type it however you like or pick from the list, shown in the language’s format.', 'Para elegir horas y minutos. Escribe como prefieras o elige de la lista, que aparece en el formato del idioma.'),
    stats: [
      [L('passo padrão', 'default step', 'paso predeterminado'), '15 min'],
      [L('formatos', 'formats', 'formatos'), '12 · 24 h'],
      [L('valor enviado', 'value sent', 'valor enviado'), 'HH:MM'],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'combobox'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Experimente digitar ${ic('1430')}, ${ic('14h30')} ou ${ic('2:30 pm')}. Os três viram o mesmo horário.`, `Try typing ${ic('1430')}, ${ic('14h30')}, or ${ic('2:30 pm')}. All three become the same time.`, `Prueba escribir ${ic('1430')}, ${ic('14h30')} o ${ic('2:30 pm')}. Los tres se vuelven la misma hora.`), html: playgroundMarkup('time-picker') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('O passo define as opções da lista, mas qualquer minuto pode ser digitado.', 'The step sets the list options, but any minute can be typed.', 'El paso define las opciones de la lista, pero se puede escribir cualquier minuto.'),
        html: examples([
          example(L('A cada 15 minutos', 'Every 15 minutes', 'Cada 15 minutos'), 'step: 15', L('O padrão, bom para compromissos.', 'The default, good for appointments.', 'Lo predeterminado, bueno para compromisos.'), formField({ id: 'tp-15', label: L('Início', 'Start', 'Inicio') })),
          example(L('A cada 30 minutos', 'Every 30 minutes', 'Cada 30 minutos'), 'step: 30', L('Menos opções, quando a precisão não importa tanto.', 'Fewer options, when precision matters less.', 'Menos opciones, cuando la precisión importa menos.'), formField({ id: 'tp-30', label: L('Reunião', 'Meeting', 'Reunión') })),
          example(L('Com limites', 'With limits', 'Con límites'), 'min · max', L('Só o horário comercial. Digitar fora dele mostra o erro.', 'Business hours only. Typing outside them shows the error.', 'Solo el horario comercial. Escribir fuera de él muestra el error.'), formField({ id: 'tp-limits', label: L('Atendimento', 'Support', 'Atención') })),
          example(L('Já preenchido', 'Already filled', 'Ya completado'), 'value', L('Sempre em HH:MM no código; a tela mostra o formato do idioma.', 'Always HH:MM in code; the screen shows the language’s format.', 'Siempre HH:MM en el código; la pantalla muestra el formato del idioma.'), formField({ id: 'tp-filled', label: L('Lembrete', 'Reminder', 'Recordatorio') })),
        ]),
      },
      {
        id: 'formato',
        title: L('Formato', 'Format', 'Formato'),
        desc: L('Cada idioma lê o horário do seu jeito, e o formulário recebe sempre 24 horas.', 'Each language reads the time its own way, and the form always receives 24 hours.', 'Cada idioma lee la hora a su manera, y el formulario siempre recibe 24 horas.'),
        html: `<div class="fc-formats">
          <div class="fc-formats__row fc-formats__row--head"><span>${L('Idioma', 'Language', 'Idioma')}</span><span>${L('Na tela', 'On screen', 'En pantalla')}</span><span>${L('No formulário', 'In the form', 'En el formulario')}</span></div>
          ${[['Português', 'pt-BR'], ['English', 'en'], ['Español', 'es']].map(([n, tag]) => `<div class="fc-formats__row"><span>${n}</span><span>${time(tag)}</span><span>14:30</span></div>`).join('')}
        </div>`,
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('Os mesmos do Campo de texto.', 'The same as the Text field.', 'Los mismos del Campo de texto.'),
        html: stateGrid([
          [L('Vazio', 'Empty', 'Vacío'), staticField({ id: 'a', placeholder: '--:--' })],
          [L('Preenchido', 'Filled', 'Completado'), staticField({ id: 'b', value: sample })],
          ['Hover', staticField({ id: 'c', value: sample, state: 'hover' })],
          [L('Foco', 'Focus', 'Foco'), staticField({ id: 'd', value: sample, state: 'focus' })],
          [L('Erro', 'Error', 'Error'), staticField({ id: 'e', value: '25:00', invalid: true, error: L(`Use um horário como ${sample}.`, `Use a time like ${sample}.`, `Usa una hora como ${sample}.`) })],
          [L('Desativado', 'Disabled', 'Desactivado'), staticField({ id: 'f', value: sample, disabled: true })],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`Funciona com ${ic('createForm')}, como os outros campos.`, `It works with ${ic('createForm')}, like the other fields.`, `Funciona con ${ic('createForm')}, como los otros campos.`),
        html: codeBlock(`import { createTimePicker } from 'https://lumeui.dev/v/0.36/lume.js';

const picker = createTimePicker(document.querySelector('#inicio'), {
  value: '09:00',
  step: 30,
  min: '08:00',
  max: '18:00',
  onChange: (value) => console.log(value), // '09:30'
});`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O foco fica sempre no campo. As setas só indicam a opção da lista, seguindo o padrão ARIA de combobox.', 'Focus always stays in the field. The arrows only point to the list option, following the ARIA combobox pattern.', 'El foco siempre queda en el campo. Las flechas solo indican la opción de la lista, siguiendo el patrón ARIA de combobox.'),
        html: a11yList([
          [L('Abrir e andar', 'Open and move', 'Abrir y moverse'), L('↓ e ↑ abrem a lista e andam entre as opções; a opção é anunciada por aria-activedescendant.', '↓ and ↑ open the list and move between options; the option is announced through aria-activedescendant.', '↓ y ↑ abren la lista y se mueven entre las opciones; la opción se anuncia con aria-activedescendant.'), ['↓', '↑']],
          [L('Andar uma hora', 'Move one hour', 'Moverse una hora'), L('PageUp e PageDown pulam uma hora; Home e End vão ao começo e ao fim da lista.', 'PageUp and PageDown jump one hour; Home and End go to the start and end of the list.', 'PageUp y PageDown saltan una hora; Home y End van al inicio y al fin de la lista.'), ['PageUp', 'PageDown', 'Home', 'End']],
          [L('Escolher e fechar', 'Choose and close', 'Elegir y cerrar'), L('Enter escolhe; Esc fecha sem mudar nada.', 'Enter chooses; Esc closes without changing anything.', 'Enter elige; Esc cierra sin cambiar nada.'), ['Enter', 'Esc']],
          [L('Botão fora do Tab', 'Button out of Tab order', 'Botón fuera del Tab'), L('O botão do relógio é um atalho para o mouse e o toque. Pelo teclado, as setas fazem o mesmo.', 'The clock button is a shortcut for mouse and touch. On the keyboard, the arrows do the same.', 'El botón del reloj es un atajo para el ratón y el toque. Con el teclado, las flechas hacen lo mismo.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Além dos tokens do Campo de texto.', 'On top of the Text field tokens.', 'Además de los tokens del Campo de texto.'),
        html: tokenTable([
          ['color.bg.raised', L('Fundo da lista', 'List background', 'Fondo de la lista')],
          ['color.border.strong', L('Contorno da lista', 'List outline', 'Contorno de la lista')],
          ['shadow.xl', L('Sombra da lista', 'List shadow', 'Sombra de la lista')],
          ['color.bg.hover', L('Opção ativa', 'Active option', 'Opción activa')],
          ['color.fg.brand', L('Marca da opção escolhida', 'Chosen option check', 'Marca de la opción elegida')],
          ['text.body-sm', L('Texto das opções', 'Option text', 'Texto de las opciones')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: horário do dia', 'Do: time of day', 'Haz: hora del día'), L('Início de reunião, lembretes e janelas de atendimento.', 'Meeting starts, reminders, and support windows.', 'Inicio de reunión, recordatorios y ventanas de atención.')],
          ['dont', L('Evite: duração', 'Avoid: duration', 'Evita: duración'), L('“45 minutos” não é um horário. Use o Campo numérico com a unidade ao lado.', '“45 minutes” isn’t a time of day. Use the Number field with the unit beside it.', '“45 minutos” no es una hora. Usa el Campo numérico con la unidad al lado.')],
          ['tip', L('Fuso horário', 'Time zone', 'Zona horaria'), L('Se a pessoa pode estar em outro fuso, diga na dica qual vale.', 'If the person may be in another time zone, say which one applies in the hint.', 'Si la persona puede estar en otra zona horaria, di en la pista cuál vale.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'time-picker',
    controls: [
      { id: 'step', label: L('Passo', 'Step', 'Paso'), value: '15', options: ['5', '10', '15', '30', '60'].map((v) => ({ value: v, label: `${v} min` })) },
      { id: 'limit', label: L('Limite', 'Limit', 'Límite'), value: 'none', options: [{ value: 'none', label: L('Sem limite', 'No limit', 'Sin límite') }, { value: 'business', label: L('Horário comercial', 'Business hours', 'Horario comercial') }] },
      { id: 'state', label: L('Estado', 'State', 'Estado'), value: 'default', options: [{ value: 'default', label: L('Normal', 'Default', 'Normal') }, { value: 'disabled', label: L('Desativado', 'Disabled', 'Desactivado') }] },
    ],
    text: { id: 'label', label: L('Rótulo', 'Label', 'Etiqueta'), value: label() },
    render: (s) => stageWrap(formField({ id: 'tp-play', label: s.label || label(), attrs: s.state === 'disabled' ? 'disabled' : '' })),
    mount: (preview, s) => {
      const picker = createTimePicker(preview.querySelector('#tp-play'), { step: Number(s.step), ...(s.limit === 'business' ? { min: '08:00', max: '18:00' } : {}) });
      return () => picker.destroy();
    },
    code: (s) => `<div class="ds-form-field">
  <label class="ds-form-field__label" for="inicio">${s.label || label()}</label>
  <div class="ds-field"><input class="ds-field__input" id="inicio" name="inicio" type="text"${s.state === 'disabled' ? ' disabled' : ''}></div>
</div>

<script type="module">
  import { createTimePicker } from 'https://lumeui.dev/v/0.36/lume.js';
  createTimePicker(document.querySelector('#inicio'), {
    step: ${s.step},${s.limit === 'business' ? "\n    min: '08:00',\n    max: '18:00'," : ''}
  });
</script>`,
  });

  const pickers = [
    createTimePicker(root.querySelector('#tp-15')),
    createTimePicker(root.querySelector('#tp-30'), { step: 30 }),
    createTimePicker(root.querySelector('#tp-limits'), { min: '08:00', max: '18:00', step: 30 }),
    createTimePicker(root.querySelector('#tp-filled'), { value: '09:30' }),
  ];

  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    pickers.forEach((p) => p.destroy());
    unmountCopy();
    unmountNav();
  };
}
