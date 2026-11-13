import { icon } from '../../ds/icons/icons.js';
import { createDatePicker } from '../../ds/js/date-picker.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, formField, example, examples, stateGrid, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const addDays = (n) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d;
};
const short = (d, tag) => new Intl.DateTimeFormat(tag, { day: '2-digit', month: '2-digit', year: 'numeric' }).format(d);
const label = () => L('Data de entrega', 'Delivery date', 'Fecha de entrega');
const rangeLabel = () => L('Período', 'Range', 'Período');

const staticField = (o) =>
  formField({
    id: `dp-state-${o.id}`,
    name: '',
    label: label(),
    value: o.value ?? '',
    state: o.state,
    attrs: [`tabindex="-1"`, o.placeholder ? `placeholder="${o.placeholder}"` : '', o.invalid ? 'aria-invalid="true"' : '', o.disabled ? 'disabled' : ''].filter(Boolean).join(' '),
    extra: `<span class="ds-icon-btn ds-icon-btn--sm ds-field__action">${icon('calendar', { size: 18 })}</span>`,
  }) + (o.error ? `<p class="ds-form-field__error" style="margin-top:var(--ds-space-075)">${icon('alert-circle', { size: 16 })}<span>${o.error}</span></p>` : '');

export default function renderSeletorDeData(page) {
  const today = short(new Date(2026, 10, 28), document.documentElement.lang);
  return controlPage(page, {
    lead: L('Para escolher um dia ou um período. Dá para digitar a data ou abrir o calendário, e as duas formas levam ao mesmo valor.', 'For choosing a day or a range. You can type the date or open the calendar, and both lead to the same value.', 'Para elegir un día o un período. Se puede escribir la fecha o abrir el calendario, y las dos formas llevan al mismo valor.'),
    stats: [
      [L('modos', 'modes', 'modos'), 2],
      [L('idiomas', 'languages', 'idiomas'), 3],
      [L('valor enviado', 'value sent', 'valor enviado'), 'ISO'],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'dialog'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Digite uma data ou abra o calendário. O painel usa o tema do palco.', 'Type a date or open the calendar. The panel uses the stage’s theme.', 'Escribe una fecha o abre el calendario. El panel usa el tema del escenario.'), html: playgroundMarkup('date-picker') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L(`Um dia é o padrão. Com ${ic("mode: 'range'")}, o primeiro clique marca o início e o segundo, o fim.`, `One day is the default. With ${ic("mode: 'range'")}, the first click sets the start and the second, the end.`, `Un día es lo predeterminado. Con ${ic("mode: 'range'")}, el primer clic marca el inicio y el segundo, el fin.`),
        html: examples([
          example(L('Um dia', 'One day', 'Un día'), "mode: 'single'", L('Escolher um dia fecha o painel.', 'Choosing a day closes the panel.', 'Elegir un día cierra el panel.'), formField({ id: 'dp-one', label: label() })),
          example(L('Período', 'Range', 'Período'), "mode: 'range'", L('Dois meses lado a lado quando há espaço, com prévia ao passar o mouse.', 'Two months side by side when there’s room, with a preview on hover.', 'Dos meses lado a lado cuando hay espacio, con vista previa al pasar el cursor.'), formField({ id: 'dp-range', label: rangeLabel() })),
          example(L('Com limites', 'With limits', 'Con límites'), 'min · max', L('Só os próximos 30 dias. Os demais ficam desativados, e digitar fora do limite mostra o erro.', 'Only the next 30 days. The others are disabled, and typing outside the limit shows the error.', 'Solo los próximos 30 días. Los demás quedan desactivados, y escribir fuera del límite muestra el error.'), formField({ id: 'dp-limits', label: L('Agendar para', 'Schedule for', 'Programar para') })),
          example(L('Já preenchido', 'Already filled', 'Ya completado'), 'value', L('Aparece no formato do idioma atual e o painel abre naquele mês.', 'It shows in the current language’s format, and the panel opens on that month.', 'Aparece en el formato del idioma actual y el panel se abre en ese mes.'), formField({ id: 'dp-filled', label: label() })),
        ]),
      },
      {
        id: 'formato',
        title: L('Formato', 'Format', 'Formato'),
        desc: L('O campo mostra a data como cada idioma escreve, mas o formulário recebe sempre o mesmo formato, para o servidor não precisar adivinhar.', 'The field shows the date the way each language writes it, but the form always receives the same format, so the server doesn’t have to guess.', 'El campo muestra la fecha como la escribe cada idioma, pero el formulario siempre recibe el mismo formato, para que el servidor no tenga que adivinar.'),
        html: `<div class="fc-formats">
          <div class="fc-formats__row fc-formats__row--head"><span>${L('Idioma', 'Language', 'Idioma')}</span><span>${L('Na tela', 'On screen', 'En pantalla')}</span><span>${L('No formulário', 'In the form', 'En el formulario')}</span></div>
          ${[['Português', 'pt-BR'], ['English', 'en'], ['Español', 'es']].map(([n, tag]) => `<div class="fc-formats__row"><span>${n}</span><span>${short(new Date(2026, 10, 8), tag)}</span><span>2026-11-08</span></div>`).join('')}
        </div>`,
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L(`O campo segue os estados do Campo de texto. Hover e foco podem ser forçados com ${ic('data-state')}.`, `The field follows the Text field states. Hover and focus can be forced with ${ic('data-state')}.`, `El campo sigue los estados del Campo de texto. Hover y foco se pueden forzar con ${ic('data-state')}.`),
        html: stateGrid([
          [L('Vazio', 'Empty', 'Vacío'), staticField({ id: 'a', placeholder: L('dd/mm/aaaa', 'mm/dd/yyyy', 'dd/mm/aaaa') })],
          [L('Preenchido', 'Filled', 'Completado'), staticField({ id: 'b', value: today })],
          ['Hover', staticField({ id: 'c', value: today, state: 'hover' })],
          [L('Foco', 'Focus', 'Foco'), staticField({ id: 'd', value: today, state: 'focus' })],
          [L('Erro', 'Error', 'Error'), staticField({ id: 'e', value: '31/02/2026', invalid: true, error: L(`Use uma data como ${today}.`, `Use a date like ${today}.`, `Usa una fecha como ${today}.`) })],
          [L('Desativado', 'Disabled', 'Desactivado'), staticField({ id: 'f', value: today, disabled: true })],
        ]),
      },
      {
        id: 'formulario',
        title: L('Em formulários', 'In forms', 'En formularios'),
        desc: L(`Funciona com ${ic('createForm')}: ${ic('required')} e os erros de formato aparecem como nos outros campos. O valor em ISO vai num input oculto, com o ${ic('name')} do campo.`, `It works with ${ic('createForm')}: ${ic('required')} and format errors show up as in the other fields. The ISO value goes in a hidden input, with the field’s ${ic('name')}.`, `Funciona con ${ic('createForm')}: ${ic('required')} y los errores de formato aparecen como en los otros campos. El valor en ISO va en un input oculto, con el ${ic('name')} del campo.`),
        html: codeBlock(`import { createDatePicker } from 'https://lumeui.dev/v/0.27/lume.js';

const picker = createDatePicker(document.querySelector('#entrega'), {
  min: new Date(),
  onChange: (value) => console.log(value), // Date
});

// ${L('no envio', 'on submit', 'al enviar')}: entrega=2026-11-08
// ${L('período', 'range', 'período')}: viagem=2026-11-08/2026-11-15`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Digitar é sempre possível, e o calendário funciona inteiro pelo teclado.', 'Typing is always possible, and the calendar works entirely from the keyboard.', 'Escribir siempre es posible, y el calendario funciona entero con el teclado.'),
        html: a11yList([
          [L('Abrir', 'Open', 'Abrir'), L('↓ no campo abre o calendário, com o foco no dia escolhido ou em hoje.', '↓ in the field opens the calendar, with focus on the chosen day or today.', '↓ en el campo abre el calendario, con el foco en el día elegido o en hoy.'), ['↓']],
          [L('Andar pelos dias', 'Move through days', 'Moverse por los días'), L('Setas andam um dia ou uma semana; Home e End vão ao começo e ao fim da semana.', 'Arrows move one day or one week; Home and End go to the start and end of the week.', 'Las flechas se mueven un día o una semana; Home y End van al inicio y al fin de la semana.'), ['←', '→', '↑', '↓', 'Home', 'End']],
          [L('Trocar de mês e de ano', 'Change month and year', 'Cambiar de mes y de año'), L('PageUp e PageDown trocam de mês; com Shift, de ano. Para uma data distante, digitar é mais rápido.', 'PageUp and PageDown change the month; with Shift, the year. For a distant date, typing is faster.', 'PageUp y PageDown cambian de mes; con Shift, de año. Para una fecha lejana, escribir es más rápido.'), ['PageUp', 'PageDown', 'Shift']],
          [L('Fechar', 'Close', 'Cerrar'), L('Esc fecha e devolve o foco ao botão do calendário.', 'Esc closes and returns focus to the calendar button.', 'Esc cierra y devuelve el foco al botón del calendario.'), ['Esc']],
          [L('Dias com nome completo', 'Days with full names', 'Días con nombre completo'), L('Cada dia é anunciado com dia da semana, número, mês e ano. Hoje é marcado com aria-current.', 'Each day is announced with weekday, number, month, and year. Today is marked with aria-current.', 'Cada día se anuncia con día de la semana, número, mes y año. Hoy se marca con aria-current.')],
          [L('Erro que explica', 'An error that explains', 'Error que explica'), L('Uma data que não existe mostra um exemplo do formato certo, ligado ao campo por aria-describedby.', 'A date that doesn’t exist shows an example of the right format, linked to the field by aria-describedby.', 'Una fecha que no existe muestra un ejemplo del formato correcto, vinculado al campo por aria-describedby.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Além dos tokens do Campo de texto.', 'On top of the Text field tokens.', 'Además de los tokens del Campo de texto.'),
        html: tokenTable([
          ['color.bg.raised', L('Fundo do painel', 'Panel background', 'Fondo del panel')],
          ['color.border.strong', L('Contorno do painel', 'Panel outline', 'Contorno del panel')],
          ['shadow.xl', L('Sombra do painel', 'Panel shadow', 'Sombra del panel')],
          ['color.brand.solid', L('Dia escolhido', 'Chosen day', 'Día elegido')],
          ['color.brand.on-solid', L('Número no dia escolhido', 'Number on the chosen day', 'Número en el día elegido')],
          ['color.brand.subtle', L('Meio do período', 'Middle of the range', 'Medio del período')],
          ['color.bg.hover', L('Dia no hover', 'Day on hover', 'Día en hover')],
          ['color.fg.disabled', L('Dia fora do limite', 'Day outside the limit', 'Día fuera del límite')],
          ['radius.lg', L('Cantos do painel', 'Panel corners', 'Esquinas del panel')],
          ['radius.sm', L('Cantos dos dias', 'Day corners', 'Esquinas de los días')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: datas próximas', 'Do: nearby dates', 'Haz: fechas cercanas'), L('Agendamentos, prazos e reservas, em que ver o mês ajuda a escolher.', 'Bookings, deadlines, and reservations, where seeing the month helps you choose.', 'Citas, plazos y reservas, donde ver el mes ayuda a elegir.')],
          ['dont', L('Evite: data de nascimento', 'Avoid: date of birth', 'Evita: fecha de nacimiento'), L('Ninguém quer voltar décadas no calendário. Use um campo de texto com o formato na dica.', 'Nobody wants to go back decades on a calendar. Use a text field with the format in the hint.', 'Nadie quiere retroceder décadas en el calendario. Usa un campo de texto con el formato en la pista.')],
          ['tip', L('Limites visíveis', 'Visible limits', 'Límites visibles'), L('Se há um limite, diga na dica. Dias desativados, sozinhos, não explicam o motivo.', 'If there’s a limit, say so in the hint. Disabled days alone don’t explain why.', 'Si hay un límite, dilo en la pista. Los días desactivados, por sí solos, no explican el motivo.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'date-picker',
    controls: [
      { id: 'mode', label: L('Modo', 'Mode', 'Modo'), value: 'single', options: [{ value: 'single', label: L('Um dia', 'One day', 'Un día') }, { value: 'range', label: L('Período', 'Range', 'Período') }] },
      { id: 'limit', label: L('Limite', 'Limit', 'Límite'), value: 'none', options: [{ value: 'none', label: L('Sem limite', 'No limit', 'Sin límite') }, { value: 'future', label: L('Só datas futuras', 'Future dates only', 'Solo fechas futuras') }] },
      { id: 'state', label: L('Estado', 'State', 'Estado'), value: 'default', options: [{ value: 'default', label: L('Normal', 'Default', 'Normal') }, { value: 'disabled', label: L('Desativado', 'Disabled', 'Desactivado') }] },
    ],
    text: { id: 'label', label: L('Rótulo', 'Label', 'Etiqueta'), value: label() },
    render: (s) => stageWrap(formField({ id: 'dp-play', label: s.label || label(), attrs: s.state === 'disabled' ? 'disabled' : '' })),
    mount: (preview, s) => {
      const picker = createDatePicker(preview.querySelector('#dp-play'), { mode: s.mode, min: s.limit === 'future' ? new Date() : undefined });
      return () => picker.destroy();
    },
    code: (s) => `<div class="ds-form-field">
  <label class="ds-form-field__label" for="entrega">${s.label || label()}</label>
  <div class="ds-field"><input class="ds-field__input" id="entrega" name="entrega" type="text"${s.state === 'disabled' ? ' disabled' : ''}></div>
</div>

<script type="module">
  import { createDatePicker } from 'https://lumeui.dev/v/0.27/lume.js';
  createDatePicker(document.querySelector('#entrega'), {${s.mode === 'range' ? "\n    mode: 'range'," : ''}${s.limit === 'future' ? '\n    min: new Date(),' : ''}
  });
</script>`,
  });

  const pickers = [
    createDatePicker(root.querySelector('#dp-one')),
    createDatePicker(root.querySelector('#dp-range'), { mode: 'range' }),
    createDatePicker(root.querySelector('#dp-limits'), { min: new Date(), max: addDays(30) }),
    createDatePicker(root.querySelector('#dp-filled'), { value: addDays(3) }),
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
