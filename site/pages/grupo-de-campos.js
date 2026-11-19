import { createDatePicker } from '../../ds/js/date-picker.js';
import { createTimePicker } from '../../ds/js/time-picker.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const input = (id, label, { value = '', cls = '', size = '', describedBy = '', invalid = false } = {}) =>
  `<div class="ds-field${cls ? ` ${cls}` : ''}"${size ? ` style="width:${size}"` : ''}><input class="ds-field__input" id="${id}" type="text" aria-label="${label}"${value ? ` value="${value}"` : ''}${describedBy ? ` aria-describedby="${describedBy}"` : ''}${invalid ? ' aria-invalid="true"' : ''}></div>`;

/** O grupo inteiro: rótulo, controles e dica ou erro. */
const group = ({ id, label, controls, hint = '', error = '', even = false }) => `<div class="ds-form-field ds-field-group${even ? ' ds-field-group--even' : ''}" role="group" aria-labelledby="${id}-label"${hint || error ? ` aria-describedby="${id}-${error ? 'error' : 'hint'}"` : ''}>
  <span class="ds-form-field__label" id="${id}-label">${label}</span>
  <div class="ds-field-group__controls">${controls}</div>
  ${error ? `<div class="ds-form-field__footer"><p class="ds-form-field__error" id="${id}-error"><ds-icon name="alert-circle" size="16"></ds-icon><span>${error}</span></p></div>` : hint ? `<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="${id}-hint">${hint}</p></div>` : ''}
</div>`;

const sep = () => `<span class="ds-field-group__sep" aria-hidden="true">${L('até', 'to', 'a')}</span>`;

const whenGroup = (id, opts = {}) =>
  group({
    id,
    label: L('Quando', 'When', 'Cuándo'),
    hint: opts.error ? '' : L('A sessão dura 50 minutos.', 'The session lasts 50 minutes.', 'La sesión dura 50 minutos.'),
    error: opts.error,
    controls: `${input(`${id}-date`, L('Data', 'Date', 'Fecha'), { describedBy: `${id}-${opts.error ? 'error' : 'hint'}` })}${input(`${id}-start`, L('Início', 'Start', 'Inicio'), { describedBy: `${id}-${opts.error ? 'error' : 'hint'}`, invalid: Boolean(opts.error) })}${sep()}${input(`${id}-end`, L('Fim', 'End', 'Fin'), { describedBy: `${id}-${opts.error ? 'error' : 'hint'}`, invalid: Boolean(opts.error) })}`,
  });

export default function renderGrupoDeCampos(page) {
  return controlPage(page, {
    lead: L('Um rótulo, uma dica e um erro para vários controles que formam um dado só: data e horários, nome e sobrenome, valor e unidade. O grupo tem o nome; cada controle tem o seu.', 'One label, one hint, and one error for several controls that make up a single piece of data: date and times, first and last name, amount and unit. The group has the name; each control has its own.', 'Una etiqueta, una pista y un error para varios controles que forman un solo dato: fecha y horarios, nombre y apellido, valor y unidad. El grupo tiene el nombre; cada control tiene el suyo.'),
    stats: [
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'group'],
      [L('rótulos', 'labels', 'etiquetas'), L('1 + 1 por controle', '1 + 1 per control', '1 + 1 por control')],
      [L('arranjos', 'layouts', 'arreglos'), 2],
      ['React', 'FieldGroup'],
    ],
    sections: [
      {
        id: 'ao-vivo',
        title: L('Ao vivo', 'Live', 'En vivo'),
        desc: L('Data e dois horários com um rótulo só: “Quando”. A data e os horários abrem os seletores do Lume.', 'Date and two times under a single label: “When”. The date and the times open Lume’s pickers.', 'Fecha y dos horarios con una sola etiqueta: “Cuándo”. La fecha y los horarios abren los selectores de Lume.'),
        html: `<div class="fc-stage fc-stage--wide">${whenGroup('fg-live')}</div>`,
      },
      {
        id: 'variantes',
        title: L('Arranjos', 'Layouts', 'Arreglos'),
        desc: L(`Por padrão, o primeiro controle ocupa o dobro dos outros. Com ${ic('ds-field-group--even')}, todos dividem a linha por igual. Em tela estreita, eles quebram a linha.`, `By default, the first control takes twice the space of the others. With ${ic('ds-field-group--even')}, all of them split the row evenly. On narrow screens, they wrap.`, `Por defecto, el primer control ocupa el doble que los otros. Con ${ic('ds-field-group--even')}, todos dividen la línea por igual. En pantalla estrecha, saltan de línea.`),
        html: examples([
          example(L('O primeiro em destaque', 'The first stands out', 'El primero destacado'), 'ds-field-group', L('Valor e unidade: o número leva o dobro do espaço da unidade.', 'Amount and unit: the number gets twice the unit’s space.', 'Valor y unidad: el número lleva el doble del espacio de la unidad.'), group({ id: 'fg-amount', label: L('Duração', 'Duration', 'Duración'), controls: `${input('fg-amount-n', L('Quantidade', 'Amount', 'Cantidad'), { value: '50' })}${input('fg-amount-u', L('Unidade', 'Unit', 'Unidad'), { value: L('minutos', 'minutes', 'minutos') })}` })),
          example(L('Por igual', 'Evenly', 'Por igual'), 'ds-field-group--even', L('Nome e sobrenome têm o mesmo peso.', 'First and last name carry the same weight.', 'Nombre y apellido tienen el mismo peso.'), group({ id: 'fg-name', even: true, label: L('Nome completo', 'Full name', 'Nombre completo'), controls: `${input('fg-first', L('Nome', 'First name', 'Nombre'), { value: 'Ana' })}${input('fg-last', L('Sobrenome', 'Last name', 'Apellido'), { value: 'Souza' })}` })),
        ]),
      },
      {
        id: 'erro',
        title: L('Erro do grupo', 'Group error', 'Error del grupo'),
        desc: L('Quando o problema é a combinação (o fim antes do início), o erro é do grupo, não de um controle. Os controles envolvidos ganham aria-invalid e apontam para a mesma mensagem.', 'When the problem is the combination (end before start), the error belongs to the group, not to one control. The controls involved get aria-invalid and point to the same message.', 'Cuando el problema es la combinación (el fin antes del inicio), el error es del grupo, no de un control. Los controles involucrados reciben aria-invalid y apuntan al mismo mensaje.'),
        html: `<div class="fc-stage fc-stage--wide">${whenGroup('fg-error', { error: L('O fim precisa ser depois do início.', 'The end needs to be after the start.', 'El fin debe ser después del inicio.') })}</div>`,
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`O ${ic('Field')} liga um rótulo a um controle. O grupo usa ${ic('role="group"')} com ${ic('aria-labelledby')}, e cada controle leva o próprio ${ic('aria-label')}.`, `${ic('Field')} ties one label to one control. The group uses ${ic('role="group"')} with ${ic('aria-labelledby')}, and each control gets its own ${ic('aria-label')}.`, `${ic('Field')} une una etiqueta a un control. El grupo usa ${ic('role="group"')} con ${ic('aria-labelledby')}, y cada control lleva su propio ${ic('aria-label')}.`),
        html: codeBlock(`<div class="ds-form-field ds-field-group" role="group" aria-labelledby="quando-label" aria-describedby="quando-hint">
  <span class="ds-form-field__label" id="quando-label">${L('Quando', 'When', 'Cuándo')}</span>
  <div class="ds-field-group__controls">
    <div class="ds-field"><input class="ds-field__input" id="data" aria-label="${L('Data', 'Date', 'Fecha')}" aria-describedby="quando-hint"></div>
    <div class="ds-field"><input class="ds-field__input" id="inicio" aria-label="${L('Início', 'Start', 'Inicio')}" aria-describedby="quando-hint"></div>
    <span class="ds-field-group__sep" aria-hidden="true">${L('até', 'to', 'a')}</span>
    <div class="ds-field"><input class="ds-field__input" id="fim" aria-label="${L('Fim', 'End', 'Fin')}" aria-describedby="quando-hint"></div>
  </div>
  <div class="ds-form-field__footer"><p class="ds-form-field__hint" id="quando-hint">${L('A sessão dura 50 minutos.', 'The session lasts 50 minutes.', 'La sesión dura 50 minutos.')}</p></div>
</div>

// React: ${L('cada controle lê a dica e o erro do grupo sozinho', 'each control reads the group’s hint and error on its own', 'cada control lee la pista y el error del grupo solo')}
<FieldGroup label="${L('Quando', 'When', 'Cuándo')}" hint="${L('A sessão dura 50 minutos.', 'The session lasts 50 minutes.', 'La sesión dura 50 minutos.')}" error={erro}>
  <DatePicker aria-label="${L('Data', 'Date', 'Fecha')}" value={data} onChange={setData} />
  <TimePicker aria-label="${L('Início', 'Start', 'Inicio')}" value={inicio} onChange={setInicio} />
  <TimePicker aria-label="${L('Fim', 'End', 'Fin')}" value={fim} onChange={setFim} />
</FieldGroup>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O leitor de tela ouve o grupo e depois cada parte.', 'Screen readers hear the group and then each part.', 'El lector de pantalla oye el grupo y después cada parte.'),
        html: a11yList([
          [L('Nome do grupo', 'Group name', 'Nombre del grupo'), L('Ao entrar no primeiro controle, ouve-se “Quando, grupo”, e depois “Data”.', 'On entering the first control, people hear “When, group”, then “Date”.', 'Al entrar en el primer control, se oye “Cuándo, grupo”, y después “Fecha”.')],
          [L('Cada controle com nome', 'Each control named', 'Cada control con nombre'), L('O rótulo do grupo não nomeia os controles. Sem o aria-label de cada um, a pessoa ouve três campos iguais.', 'The group label doesn’t name the controls. Without each one’s aria-label, people hear three identical fields.', 'La etiqueta del grupo no nombra los controles. Sin el aria-label de cada uno, la persona oye tres campos iguales.')],
          [L('Ids próprios', 'Their own ids', 'Ids propios'), L('No React, o FieldGroup não passa id para os controles: cada um mantém o seu, e o foco do erro vai para o controle certo.', 'In React, FieldGroup doesn’t pass an id to the controls: each keeps its own, and error focus goes to the right control.', 'En React, FieldGroup no pasa id a los controles: cada uno mantiene el suyo, y el foco del error va al control correcto.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Os mesmos do Campo de texto, mais o espaço entre os controles.', 'The same as the Text field, plus the space between controls.', 'Los mismos del Campo de texto, más el espacio entre los controles.'),
        html: tokenTable([
          ['space.100', L('Espaço entre os controles', 'Space between controls', 'Espacio entre los controles')],
          ['color.fg.subtle', L('Separador (“até”)', 'Separator (“to”)', 'Separador (“a”)')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: um dado em partes', 'Do: one piece of data in parts', 'Haz: un dato en partes'), L('Quando, duração, nome completo, endereço com número.', 'When, duration, full name, address with number.', 'Cuándo, duración, nombre completo, dirección con número.')],
          ['dont', L('Evite: campos que não se ligam', 'Avoid: fields that don’t connect', 'Evita: campos que no se conectan'), L('E-mail e telefone são dois dados. Cada um no próprio Field, lado a lado com ds-form__row.', 'Email and phone are two pieces of data. Each in its own Field, side by side with ds-form__row.', 'Correo y teléfono son dos datos. Cada uno en su propio Field, lado a lado con ds-form__row.')],
          ['tip', L('Escolhas também', 'Choices too', 'Elecciones también'), L('Um grupo de rádios ou um controle segmentado com rótulo também é um grupo: use o mesmo arranjo.', 'A radio group or a labeled segmented control is also a group: use the same layout.', 'Un grupo de radios o un control segmentado con etiqueta también es un grupo: usa el mismo arreglo.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const controls = [];
  for (const id of ['fg-live', 'fg-error']) {
    controls.push(createDatePicker(root.querySelector(`#${id}-date`), { value: new Date(2026, 10, 20) }));
    controls.push(createTimePicker(root.querySelector(`#${id}-start`), { value: id === 'fg-error' ? '15:00' : '14:00' }));
    controls.push(createTimePicker(root.querySelector(`#${id}-end`), { value: id === 'fg-error' ? '14:00' : '14:50' }));
  }
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    controls.forEach((c) => c.destroy());
    unmountCopy();
    unmountNav();
  };
}
