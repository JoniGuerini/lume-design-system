import { createStepper } from '../../ds/js/stepper.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const STEPS = () => [
  { label: L('Conta', 'Account', 'Cuenta'), description: L('E-mail e senha', 'Email and password', 'Correo y contraseña') },
  { label: L('Perfil', 'Profile', 'Perfil'), description: L('Nome e foto', 'Name and photo', 'Nombre y foto') },
  { label: L('Equipe', 'Team', 'Equipo'), description: L('Convites', 'Invites', 'Invitaciones') },
  { label: L('Pronto', 'Done', 'Listo') },
];
const plain = () => STEPS().map(({ label }) => ({ label }));

export default function renderStepper(page) {
  return controlPage(page, {
    lead: L('Mostra as etapas de um fluxo, quantas faltam e onde a pessoa está. Bom para cadastros e configurações em partes.', 'Shows the steps of a flow, how many are left, and where the person is. Good for sign-ups and multi-part setups.', 'Muestra las etapas de un flujo, cuántas faltan y dónde está la persona. Bueno para registros y configuraciones por partes.'),
    stats: [
      [L('orientações', 'orientations', 'orientaciones'), 2],
      [L('estados', 'states', 'estados'), 3],
      [L('marcador', 'marker', 'marcador'), '28 px'],
      [L('atributo', 'attribute', 'atributo'), 'aria-current'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Avance e volte. Com etapas clicáveis, dá para retornar às já feitas.', 'Move forward and back. With clickable steps, you can return to finished ones.', 'Avanza y vuelve. Con etapas clicables, se puede volver a las ya hechas.'), html: playgroundMarkup('stepper', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Na horizontal cabem poucas etapas com nomes curtos. Com descrições longas ou muitas etapas, use a vertical.', 'Horizontal fits a few steps with short names. With long descriptions or many steps, use vertical.', 'En horizontal caben pocas etapas con nombres cortos. Con descripciones largas o muchas etapas, usa la vertical.'),
        html: examples([
          example(L('Horizontal', 'Horizontal', 'Horizontal'), 'ds-stepper', L('Só o nome de cada etapa. No celular, vira uma lista.', 'Just each step’s name. On phones, it becomes a list.', 'Solo el nombre de cada etapa. En el móvil, se vuelve una lista.'), '<ol class="ds-stepper" data-demo="plain"></ol>'),
          example(L('Vertical', 'Vertical', 'Vertical'), 'ds-stepper--vertical', L('Com espaço para uma descrição.', 'With room for a description.', 'Con espacio para una descripción.'), '<ol class="ds-stepper ds-stepper--vertical" data-demo="vertical"></ol>'),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L(`Cada etapa recebe ${ic('data-state')}: feita, atual ou próxima. A diferença vem também do número e da marca, não só da cor.`, `Each step gets ${ic('data-state')}: done, current, or upcoming. The difference also comes from the number and check, not just color.`, `Cada etapa recibe ${ic('data-state')}: hecha, actual o próxima. La diferencia también viene del número y la marca, no solo del color.`),
        html: '<div class="fc-states fc-states--wide" inert><ol class="ds-stepper" data-demo="states"></ol></div>',
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L('O conteúdo de cada etapa é seu; o stepper só mostra o caminho.', 'Each step’s content is yours; the stepper only shows the way.', 'El contenido de cada etapa es tuyo; el stepper solo muestra el camino.'),
        html: codeBlock(`import { createStepper } from 'https://lumeui.dev/v/1.5/lume.js';

const stepper = createStepper(document.querySelector('.ds-stepper'), {
  steps: [{ label: '${STEPS()[0].label}' }, { label: '${STEPS()[1].label}' }, { label: '${STEPS()[3].label}' }],
  clickable: true,
  onChange: (index) => mostrar(index),
});

stepper.next();`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('É uma lista ordenada comum, então o leitor de tela já diz quantas etapas existem.', 'It’s an ordinary ordered list, so screen readers already say how many steps there are.', 'Es una lista ordenada común, así que el lector de pantalla ya dice cuántas etapas hay.'),
        html: a11yList([
          [L('Etapa atual', 'Current step', 'Etapa actual'), L('Marcada com aria-current="step".', 'Marked with aria-current="step".', 'Marcada con aria-current="step".')],
          [L('Etapas feitas', 'Finished steps', 'Etapas hechas'), L('A marca é desenho; o texto “concluída” é lido junto com o nome.', 'The check is a drawing; the word “completed” is read with the name.', 'La marca es un dibujo; el texto “completada” se lee junto con el nombre.')],
          [L('Voltar pelo teclado', 'Go back by keyboard', 'Volver con el teclado'), L('Com etapas clicáveis, as já feitas são botões no Tab. As próximas não recebem foco.', 'With clickable steps, finished ones are buttons in Tab order. Upcoming ones don’t take focus.', 'Con etapas clicables, las ya hechas son botones en el Tab. Las próximas no reciben foco.'), ['Tab', 'Enter']],
          [L('Leve o foco', 'Move focus', 'Lleva el foco'), L('Ao trocar de etapa, mova o foco para o título da nova etapa.', 'When the step changes, move focus to the new step’s heading.', 'Al cambiar de etapa, mueve el foco al título de la nueva etapa.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o stepper consome.', 'Everything the stepper consumes.', 'Todo lo que consume el stepper.'),
        html: tokenTable([
          ['color.brand.solid', L('Marcador feito e atual', 'Done and current marker', 'Marcador hecho y actual')],
          ['color.brand.on-solid', L('Número e marca', 'Number and check', 'Número y marca')],
          ['color.border.field', L('Marcador das próximas', 'Upcoming marker', 'Marcador de las próximas')],
          ['color.border.default', L('Linha entre etapas', 'Line between steps', 'Línea entre etapas')],
          ['color.fg.muted', L('Nome das próximas', 'Upcoming name', 'Nombre de las próximas')],
          ['radius.full', L('Marcador', 'Marker', 'Marcador')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: de 3 a 5 etapas', 'Do: 3 to 5 steps', 'Haz: de 3 a 5 etapas'), L('Etapas com começo e fim claros, em ordem.', 'Steps with a clear start and end, in order.', 'Etapas con inicio y fin claros, en orden.')],
          ['dont', L('Evite: navegação livre', 'Avoid: free navigation', 'Evita: navegación libre'), L('Se a pessoa pode ir a qualquer parte em qualquer ordem, use Abas.', 'If people can go anywhere in any order, use Tabs.', 'Si la persona puede ir a cualquier parte en cualquier orden, usa Pestañas.')],
          ['tip', L('Guarde o que foi preenchido', 'Keep what was filled in', 'Guarda lo completado'), L('Voltar uma etapa nunca deve apagar o que a pessoa já fez.', 'Going back a step should never erase what people already did.', 'Volver una etapa nunca debe borrar lo que la persona ya hizo.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'stepper',
    controls: [
      { id: 'orientation', label: L('Orientação', 'Orientation', 'Orientación'), value: 'horizontal', options: [{ value: 'horizontal', label: 'Horizontal' }, { value: 'vertical', label: 'Vertical' }] },
      { id: 'clickable', label: L('Voltar clicando', 'Click to go back', 'Volver con clic'), value: 'on', options: [{ value: 'on', label: L('Sim', 'Yes', 'Sí') }, { value: 'off', label: L('Não', 'No', 'No') }] },
      { id: 'text', label: L('Descrição', 'Description', 'Descripción'), value: 'off', options: [{ value: 'off', label: L('Sem descrição', 'No description', 'Sin descripción') }, { value: 'on', label: L('Com descrição', 'With description', 'Con descripción') }] },
    ],
    render: (s) => `<div class="fc-stepper"><ol class="ds-stepper${s.orientation === 'vertical' ? ' ds-stepper--vertical' : ''}" data-play></ol>
      <div class="fc-stepper__actions">
        <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-prev>${L('Voltar', 'Back', 'Volver')}</button>
        <button type="button" class="ds-btn ds-btn--primary ds-btn--sm" data-next>${L('Continuar', 'Continue', 'Continuar')}</button>
      </div></div>`,
    mount: (preview, s) => {
      const stepper = createStepper(preview.querySelector('[data-play]'), { steps: s.text === 'on' ? STEPS() : plain(), current: 1, clickable: s.clickable === 'on' });
      const onClick = (event) => {
        if (event.target.closest('[data-next]')) stepper.next();
        if (event.target.closest('[data-prev]')) stepper.prev();
      };
      preview.addEventListener('click', onClick);
      return () => {
        preview.removeEventListener('click', onClick);
        stepper.destroy();
      };
    },
    code: (s) => `<ol class="ds-stepper${s.orientation === 'vertical' ? ' ds-stepper--vertical' : ''}"></ol>

<script type="module">
  import { createStepper } from 'https://lumeui.dev/v/1.5/lume.js';
  createStepper(document.querySelector('.ds-stepper'), {
    steps: [${(s.text === 'on' ? STEPS() : plain()).map((x) => (x.description ? `{ label: '${x.label}', description: '${x.description}' }` : `{ label: '${x.label}' }`)).join(', ')}],
    current: 1,${s.clickable === 'on' ? '\n    clickable: true,' : ''}
  });
</script>`,
  });
  const steppers = [
    createStepper(root.querySelector('[data-demo="plain"]'), { steps: plain().slice(0, 3), current: 1 }),
    createStepper(root.querySelector('[data-demo="vertical"]'), { steps: STEPS().slice(0, 3), current: 1, clickable: true }),
    createStepper(root.querySelector('[data-demo="states"]'), { steps: [{ label: L('Feita', 'Done', 'Hecha') }, { label: L('Atual', 'Current', 'Actual') }, { label: L('Próxima', 'Upcoming', 'Próxima') }], current: 1 }),
  ];
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    steppers.forEach((x) => x.destroy());
    unmountCopy();
    unmountNav();
  };
}
