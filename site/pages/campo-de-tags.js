import { icon } from '../../ds/icons/icons.js';
import { createTagField } from '../../ds/js/tag-field.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, formField, example, examples, stateGrid, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const label = () => L('Assuntos', 'Topics', 'Temas');
const starter = () => [L('design', 'design', 'diseño'), 'tokens'];
const placeholder = () => L('Digite e tecle Enter', 'Type and press Enter', 'Escribe y pulsa Enter');

const staticTag = (text, armed) => `<li class="ds-tags__tag"${armed ? ' data-armed' : ''}><span class="ds-tags__text">${text}</span><span class="ds-tags__remove">${icon('x', { size: 14 })}</span></li>`;
const staticField = (o) => `<div class="ds-form-field">
    <span class="ds-form-field__label">${label()}</span>
    <div class="ds-field ds-tags"${o.state ? ` data-state="${o.state}"` : ''}>${o.tags?.length ? `<ul class="ds-tags__list" role="list">${o.tags.map((t, i) => staticTag(t, o.armed && i === o.tags.length - 1)).join('')}</ul>` : ''}<input class="ds-field__input" type="text" tabindex="-1" aria-label="${label()}"${o.empty ? ` placeholder="${placeholder()}"` : ''}${o.invalid ? ' aria-invalid="true"' : ''}${o.disabled ? ' disabled' : ''}></div>
    ${o.error ? `<p class="ds-form-field__error">${icon('alert-circle', { size: 16 })}<span>${o.error}</span></p>` : ''}
  </div>`;

export default function renderCampoDeTags(page) {
  const tags = starter();
  return controlPage(page, {
    lead: L('Para vários valores livres dentro de um campo só, como assuntos, destinatários ou palavras-chave. Se as opções são uma lista fechada, use a Seleção múltipla.', 'For several free values inside one field, like topics, recipients, or keywords. If the options are a closed list, use the multiple Select.', 'Para varios valores libres dentro de un solo campo, como temas, destinatarios o palabras clave. Si las opciones son una lista cerrada, usa el Selector múltiple.'),
    stats: [
      [L('criar tag', 'create a tag', 'crear etiqueta'), 'Enter · ,'],
      [L('colar lista', 'paste a list', 'pegar lista'), L('sim', 'yes', 'sí')],
      [L('repetidas', 'duplicates', 'repetidas'), L('recusadas', 'refused', 'rechazadas')],
      [L('valor enviado', 'value sent', 'valor enviado'), 'a,b,c'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Digite e tecle Enter ou vírgula. Cole uma lista separada por vírgulas. Com o campo vazio, Backspace marca a última tag e, de novo, apaga.', 'Type and press Enter or comma. Paste a comma-separated list. With the field empty, Backspace marks the last tag and, pressed again, deletes it.', 'Escribe y pulsa Enter o coma. Pega una lista separada por comas. Con el campo vacío, Backspace marca la última etiqueta y, de nuevo, la borra.'), html: playgroundMarkup('tag-field') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('O campo cresce em linhas conforme as tags entram. Regras próprias explicam por que uma tag não entrou.', 'The field grows in lines as tags come in. Custom rules explain why a tag didn’t get in.', 'El campo crece en líneas a medida que entran etiquetas. Las reglas propias explican por qué una etiqueta no entró.'),
        html: examples([
          example(L('Livre', 'Free', 'Libre'), 'createTagField', L('Qualquer texto vira tag, sem repetir.', 'Any text becomes a tag, without duplicates.', 'Cualquier texto se vuelve etiqueta, sin repetir.'), formField({ id: 'tf-free', fieldClass: 'ds-tags', label: label() })),
          example(L('Com limite', 'With a limit', 'Con límite'), 'max', L('Passou de 3, o campo avisa e a tag não entra.', 'Past 3, the field warns and the tag doesn’t get in.', 'Pasados 3, el campo avisa y la etiqueta no entra.'), formField({ id: 'tf-max', fieldClass: 'ds-tags', label: L('Palavras-chave', 'Keywords', 'Palabras clave'), hint: L('Até 3 palavras-chave.', 'Up to 3 keywords.', 'Hasta 3 palabras clave.') })),
          example(L('Com regra', 'With a rule', 'Con regla'), 'validate', L('Só aceita e-mail, e a mensagem diz o que faltou.', 'It only accepts emails, and the message says what’s missing.', 'Solo acepta correos, y el mensaje dice qué faltó.'), formField({ id: 'tf-email', fieldClass: 'ds-tags', label: L('Convidar', 'Invite', 'Invitar') })),
          example(L('Muitas tags', 'Many tags', 'Muchas etiquetas'), L('várias linhas', 'multiple lines', 'varias líneas'), L('O campo cresce em vez de esconder valores.', 'The field grows instead of hiding values.', 'El campo crece en vez de esconder valores.'), formField({ id: 'tf-many', fieldClass: 'ds-tags', label: L('Ingredientes', 'Ingredients', 'Ingredientes') })),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L(`Hover e foco seguem o Campo de texto e podem ser forçados com ${ic('data-state')}.`, `Hover and focus follow the Text field and can be forced with ${ic('data-state')}.`, `Hover y foco siguen el Campo de texto y se pueden forzar con ${ic('data-state')}.`),
        html: stateGrid([
          [L('Vazio', 'Empty', 'Vacío'), staticField({ empty: true })],
          [L('Com tags', 'With tags', 'Con etiquetas'), staticField({ tags })],
          ['Hover', staticField({ tags, state: 'hover' })],
          [L('Foco', 'Focus', 'Foco'), staticField({ tags, state: 'focus' })],
          [L('Última marcada', 'Last one marked', 'Última marcada'), staticField({ tags, armed: true, state: 'focus' })],
          [L('Erro', 'Error', 'Error'), staticField({ tags, invalid: true, error: L('“tokens” já está na lista.', '“tokens” is already on the list.', '“tokens” ya está en la lista.') })],
          [L('Desativado', 'Disabled', 'Desactivado'), staticField({ tags, disabled: true })],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`Funciona com ${ic('createForm')}: com ${ic('required')}, ter pelo menos uma tag já basta.`, `It works with ${ic('createForm')}: with ${ic('required')}, having at least one tag is enough.`, `Funciona con ${ic('createForm')}: con ${ic('required')}, tener al menos una etiqueta ya basta.`),
        html: codeBlock(`import { createTagField } from 'https://lumeui.dev/v/1.5/lume.js';

const tags = createTagField(document.querySelector('#assuntos'), {
  value: ['design', 'tokens'],
  max: 5,
  validate: (text) => (text.length > 20 ? '${L('Use até 20 caracteres.', 'Use up to 20 characters.', 'Usa hasta 20 caracteres.')}' : null),
  onChange: (values) => console.log(values),
});

// ${L('no envio', 'on submit', 'al enviar')}: assuntos=design,tokens`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Dá para fazer tudo pelo teclado, e cada mudança é anunciada.', 'Everything can be done from the keyboard, and each change is announced.', 'Se puede hacer todo con el teclado, y cada cambio se anuncia.'),
        html: a11yList([
          [L('Criar', 'Create', 'Crear'), L('Enter ou vírgula criam a tag. Sair do campo também cria a que estava sendo digitada, para nada se perder.', 'Enter or comma create the tag. Leaving the field also creates the one being typed, so nothing gets lost.', 'Enter o coma crean la etiqueta. Salir del campo también crea la que se estaba escribiendo, para que nada se pierda.'), ['Enter', ',']],
          [L('Apagar sem susto', 'Delete without surprises', 'Borrar sin sustos'), L('Backspace com o campo vazio primeiro marca a última tag; só o segundo apaga.', 'Backspace with the field empty first marks the last tag; only the second press deletes it.', 'Backspace con el campo vacío primero marca la última etiqueta; solo el segundo la borra.'), ['Backspace']],
          [L('Botão com nome', 'Named buttons', 'Botones con nombre'), L('Cada × é um botão no Tab, com o nome da tag: “Remover design”.', 'Each × is a button in Tab order, with the tag’s name: “Remove design”.', 'Cada × es un botón en el Tab, con el nombre de la etiqueta: “Quitar diseño”.'), ['Tab']],
          [L('Mudanças anunciadas', 'Announced changes', 'Cambios anunciados'), L('Uma região role="status" avisa o que entrou e o que saiu.', 'A role="status" region says what came in and what went out.', 'Una región role="status" avisa qué entró y qué salió.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Além dos tokens do Campo de texto.', 'On top of the Text field tokens.', 'Además de los tokens del Campo de texto.'),
        html: tokenTable([
          ['color.border.control', L('Contorno da tag', 'Tag outline', 'Contorno de la etiqueta')],
          ['color.border.strong', L('Tag marcada', 'Marked tag', 'Etiqueta marcada')],
          ['color.bg.selected', L('Fundo da tag marcada', 'Marked tag background', 'Fondo de la etiqueta marcada')],
          ['color.fg.subtle', L('Ícone ×', '× icon', 'Ícono ×')],
          ['color.bg.hover', L('× no hover', '× on hover', '× en hover')],
          ['radius.full', L('Tag', 'Tag', 'Etiqueta')],
          ['text.label-sm', L('Texto da tag', 'Tag text', 'Texto de la etiqueta')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: valores abertos', 'Do: open values', 'Haz: valores abiertos'), L('Assuntos, e-mails para convidar, palavras-chave: o que a pessoa escreve, não o que escolhe.', 'Topics, emails to invite, keywords: what people write, not what they pick.', 'Temas, correos para invitar, palabras clave: lo que la persona escribe, no lo que elige.')],
          ['dont', L('Evite: lista fechada', 'Avoid: a closed list', 'Evita: una lista cerrada'), L('Se as opções já são conhecidas, a Seleção múltipla evita erro de digitação.', 'If the options are already known, the multiple Select avoids typos.', 'Si las opciones ya se conocen, el Selector múltiple evita errores de escritura.')],
          ['tip', L('Ensine a criar', 'Teach how to create', 'Enseña a crear'), L('Um placeholder como “Digite e tecle Enter” resolve na primeira vez.', 'A placeholder like “Type and press Enter” solves it the first time.', 'Un placeholder como “Escribe y pulsa Enter” lo resuelve la primera vez.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'tag-field',
    controls: [
      { id: 'max', label: L('Limite', 'Limit', 'Límite'), value: 'none', options: [{ value: 'none', label: L('Sem limite', 'No limit', 'Sin límite') }, { value: '3', label: '3' }, { value: '5', label: '5' }] },
      { id: 'state', label: L('Estado', 'State', 'Estado'), value: 'default', options: [{ value: 'default', label: L('Normal', 'Default', 'Normal') }, { value: 'disabled', label: L('Desativado', 'Disabled', 'Desactivado') }] },
    ],
    text: { id: 'label', label: L('Rótulo', 'Label', 'Etiqueta'), value: label() },
    render: (s) => stageWrap(formField({ id: 'tf-play', fieldClass: 'ds-tags', label: s.label || label(), attrs: `placeholder="${placeholder()}"${s.state === 'disabled' ? ' disabled' : ''}` })),
    mount: (preview, s) => {
      const field = createTagField(preview.querySelector('#tf-play'), { value: starter(), max: s.max === 'none' ? undefined : Number(s.max) });
      return () => field.destroy();
    },
    code: (s) => `<div class="ds-form-field">
  <label class="ds-form-field__label" for="assuntos">${s.label || label()}</label>
  <div class="ds-field ds-tags"><input class="ds-field__input" id="assuntos" name="assuntos" type="text" placeholder="${placeholder()}"${s.state === 'disabled' ? ' disabled' : ''}></div>
</div>

<script type="module">
  import { createTagField } from 'https://lumeui.dev/v/1.5/lume.js';
  createTagField(document.querySelector('#assuntos'), {
    value: ${JSON.stringify(starter()).replace(/"/g, "'").replace(/,/g, ', ')},${s.max === 'none' ? '' : `\n    max: ${s.max},`}
  });
</script>`,
  });

  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const fields = [
    createTagField(root.querySelector('#tf-free'), { value: starter() }),
    createTagField(root.querySelector('#tf-max'), { value: starter(), max: 3 }),
    createTagField(root.querySelector('#tf-email'), { value: ['ana@lume.dev'], validate: (t) => (EMAIL.test(t) ? null : L('Use um e-mail no formato nome@empresa.com.', 'Use an email like name@company.com.', 'Usa un correo con el formato nombre@empresa.com.')) }),
    createTagField(root.querySelector('#tf-many'), { value: L('alho,cebola,tomate,manjericão,azeite,sal,pimenta,orégano', 'garlic,onion,tomato,basil,olive oil,salt,pepper,oregano', 'ajo,cebolla,tomate,albahaca,aceite,sal,pimienta,orégano').split(',') }),
  ];

  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    fields.forEach((f) => f.destroy());
    unmountCopy();
    unmountNav();
  };
}
