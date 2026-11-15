import { createRating, ratingHtml } from '../../ds/js/rating.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/avaliacao.css'];

const STAR = 'M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z';
const svg = `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="${STAR}"/></svg>`;

/* Estrelas de dar nota montadas à mão, para a grade de estados (sem JS). */
const staticRating = ({ value = 0, state = '', at = 2, preview = 0, disabled = false } = {}) =>
  `<div class="ds-rating"${preview ? ' data-preview' : ''}${disabled ? ' aria-disabled="true"' : ''} role="radiogroup" aria-label="${L('Exemplo', 'Example', 'Ejemplo')}">${Array.from(
    { length: 5 },
    (_, i) => `<label class="ds-rating__star"${i < value ? ' data-on' : ''}${i < preview ? ' data-preview-on' : ''}${state && i === at ? ` data-state="${state}"` : ''}><input class="ds-rating__input" type="radio" tabindex="-1" name="av-state-${state || value}-${preview}${disabled ? '-d' : ''}" value="${i + 1}"${i + 1 === value ? ' checked' : ''}${disabled ? ' disabled' : ''}><span class="ds-rating__icon" aria-hidden="true">${svg}<span class="ds-rating__fill">${svg}</span></span></label>`,
  ).join('')}</div>`;

const ask = () => L('Como você avalia esta página?', 'How would you rate this page?', '¿Cómo calificas esta página?');

export default function renderRating(page) {
  return controlPage(page, {
    lead: L('Estrelas para dar uma nota ou mostrar a média. Para dar nota, cada estrela é um rádio: o formulário envia o valor sem código.', 'Stars to give a score or show the average. To give a score, each star is a radio: the form sends the value with no extra code.', 'Estrellas para dar una nota o mostrar el promedio. Para calificar, cada estrella es un radio: el formulario envía el valor sin código.'),
    stats: [
      [L('formas', 'forms', 'formas'), 2],
      [L('tamanhos', 'sizes', 'tamaños'), 3],
      [L('meia estrela', 'half star', 'media estrella'), L('ao mostrar', 'when showing', 'al mostrar')],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'radiogroup'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Passe o mouse para ver a nota antes de clicar; clique de novo na mesma estrela para tirar a nota.', 'Hover to preview the score before clicking; click the same star again to clear it.', 'Pasa el ratón para ver la nota antes de hacer clic; haz clic de nuevo en la misma estrella para quitarla.'), html: playgroundMarkup('rating') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L(`Dar nota usa ${ic('createRating')}. Só mostrar usa ${ic('ratingHtml')}, que aceita qualquer decimal e corta a estrela no ponto certo.`, `Giving a score uses ${ic('createRating')}. Just showing uses ${ic('ratingHtml')}, which takes any decimal and cuts the star at the right point.`, `Calificar usa ${ic('createRating')}. Solo mostrar usa ${ic('ratingHtml')}, que acepta cualquier decimal y corta la estrella en el punto justo.`),
        html: examples([
          example(L('Dar nota', 'Give a score', 'Calificar'), 'createRating', L('Num formulário, com o nome do campo. A pergunta é o rótulo do grupo.', 'In a form, with the field name. The question is the group label.', 'En un formulario, con el nombre del campo. La pregunta es la etiqueta del grupo.'), `<div class="av-ask"><p class="av-ask__label" id="av-ask">${ask()}</p><div data-demo="give" aria-labelledby="av-ask"></div><p class="av-ask__out" data-out aria-live="polite"></p></div>`),
          example(L('Só mostrar', 'Display only', 'Solo mostrar'), 'ratingHtml', L('Média com meia estrela, o número ao lado e quantas notas.', 'Average with a half star, the number next to it, and how many scores.', 'Promedio con media estrella, el número al lado y cuántas notas.'), `<div class="av-show">${ratingHtml(4.5, { text: true, count: 128 })}${ratingHtml(3.7, { text: true })}${ratingHtml(2, { text: true })}</div>`),
          example(L('Tamanhos', 'Sizes', 'Tamaños'), 'ds-rating--sm · ds-rating--lg', L('16 px em listas e cards, 20 px no padrão, 28 px quando a nota é o assunto da tela.', '16 px in lists and cards, 20 px by default, 28 px when the score is what the screen is about.', '16 px en listas y tarjetas, 20 px por defecto, 28 px cuando la nota es el tema de la pantalla.'), `<div class="av-show">${ratingHtml(4, { size: 'sm', text: true })}${ratingHtml(4)}${ratingHtml(4, { size: 'lg' })}</div>`),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('A estrela acesa usa a cor do indicador. Com o mouse, as estrelas até a do mouse acendem antes do clique.', 'A lit star uses the indicator color. On hover, the stars up to the pointer light up before the click.', 'La estrella encendida usa el color del indicador. Con el ratón, las estrellas hasta la del puntero se encienden antes del clic.'),
        html: stateGrid([
          [L('Sem nota', 'No score', 'Sin nota'), staticRating()],
          [L('Com nota', 'Scored', 'Con nota'), staticRating({ value: 3 })],
          [L('Prévia com o mouse', 'Hover preview', 'Vista previa con el ratón'), staticRating({ value: 2, preview: 4, state: 'hover', at: 3 })],
          [L('Com foco', 'Focus', 'Con foco'), staticRating({ value: 3, state: 'focus', at: 2 })],
          [L('Desativado', 'Disabled', 'Desactivado'), staticRating({ value: 3, disabled: true })],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L('Para dar nota, um elemento vazio; o JavaScript põe as estrelas. Para mostrar, a marcação vem pronta.', 'To give a score, an empty element; JavaScript adds the stars. To show one, the markup comes ready.', 'Para calificar, un elemento vacío; el JavaScript pone las estrellas. Para mostrar, el marcado viene listo.'),
        html: codeBlock(`<div class="ds-rating" aria-label="${ask()}"></div>
<span data-media></span>

<script type="module">
  import { createRating, ratingHtml } from 'https://lumeui.dev/v/1.1/lume.js';

  createRating(document.querySelector('.ds-rating'), {
    name: '${L('nota', 'score', 'nota')}',
    onChange: (value) => console.log(value),
  });
  document.querySelector('[data-media]').innerHTML = ratingHtml(4.5, { text: true, count: 128 });
</script>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Dar nota é um grupo de rádios; mostrar é uma imagem com o texto da nota.', 'Giving a score is a radio group; showing one is an image with the score as text.', 'Calificar es un grupo de radios; mostrar es una imagen con el texto de la nota.'),
        html: a11yList([
          [L('Nome', 'Name', 'Nombre'), L('O grupo leva a pergunta (aria-label ou aria-labelledby) e cada estrela diz “3 estrelas”.', 'The group carries the question (aria-label or aria-labelledby) and each star says “3 stars”.', 'El grupo lleva la pregunta (aria-label o aria-labelledby) y cada estrella dice “3 estrellas”.')],
          [L('Teclado', 'Keyboard', 'Teclado'), L('Tab entra no grupo e as setas trocam a nota, como em qualquer rádio. Pelo teclado a nota nunca é tirada sem querer.', 'Tab enters the group and the arrow keys change the score, like any radio. From the keyboard, the score is never cleared by accident.', 'Tab entra en el grupo y las flechas cambian la nota, como en cualquier radio. Desde el teclado, la nota nunca se borra sin querer.'), ['Tab', '←', '→']],
          [L('Só mostrar', 'Display only', 'Solo mostrar'), L('Vira role="img" com “Nota 4,5 de 5”: o leitor de tela lê a nota uma vez, não cinco estrelas.', 'It becomes role="img" with “Rated 4.5 out of 5”: screen readers read the score once, not five stars.', 'Se vuelve role="img" con “Calificación 4,5 de 5”: el lector de pantalla lee la nota una vez, no cinco estrellas.')],
          [L('Não só a cor', 'Not just color', 'No solo el color'), L('Ao mostrar, use o número ao lado (text: true) quando a diferença de meia estrela importar.', 'When showing, add the number next to it (text: true) when half a star matters.', 'Al mostrar, usa el número al lado (text: true) cuando media estrella importe.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que a avaliação consome.', 'Everything the rating consumes.', 'Todo lo que consume la valoración.'),
        html: tokenTable([
          ['color.brand.indicator', L('Estrela acesa', 'Lit star', 'Estrella encendida')],
          ['color.border.default', L('Estrela apagada', 'Unlit star', 'Estrella apagada')],
          ['color.border.strong', L('Estrela apagada com o mouse', 'Unlit star on hover', 'Estrella apagada con el ratón')],
          ['color.border.focus', L('Foco do teclado', 'Keyboard focus', 'Foco del teclado')],
          ['color.fg.default', L('Número da nota', 'Score number', 'Número de la nota')],
          ['color.fg.muted', L('Quantas notas', 'How many scores', 'Cuántas notas')],
          ['size.icon.sm', L('Estrela pequena', 'Small star', 'Estrella pequeña')],
          ['size.icon.md', L('Estrela padrão', 'Default star', 'Estrella predeterminada')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: mostre quantas notas', 'Do: show how many scores', 'Haz: muestra cuántas notas'), L('Uma média 5 com duas notas diz menos que 4,5 com cem. O número entre parênteses conta isso.', 'A 5 average from two scores says less than 4.5 from a hundred. The number in parentheses tells that.', 'Un promedio de 5 con dos notas dice menos que 4,5 con cien. El número entre paréntesis lo cuenta.')],
          ['dont', L('Evite: estrela para escolher opção', 'Avoid: stars for picking an option', 'Evita: estrellas para elegir una opción'), L('Estrela é nota de satisfação. Para escolher entre coisas diferentes, use rádios ou controle segmentado.', 'Stars are a satisfaction score. To choose between different things, use radios or a segmented control.', 'Las estrellas son una nota de satisfacción. Para elegir entre cosas distintas, usa radios o control segmentado.')],
          ['tip', L('Cinco estrelas bastam', 'Five stars are enough', 'Cinco estrellas bastan'), L('Escalas maiores pedem uma precisão que a pessoa não tem. Mantenha o padrão de 5.', 'Bigger scales ask for a precision people don’t have. Keep the default of 5.', 'Las escalas más grandes piden una precisión que la persona no tiene. Mantén el estándar de 5.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'rating',
    controls: [
      { id: 'mode', label: L('Forma', 'Form', 'Forma'), value: 'give', options: [{ value: 'give', label: L('Dar nota', 'Give a score', 'Calificar') }, { value: 'show', label: L('Só mostrar', 'Display only', 'Solo mostrar') }] },
      { id: 'size', label: L('Tamanho', 'Size', 'Tamaño'), value: '', options: [{ value: 'sm', label: 'sm' }, { value: '', label: 'md' }, { value: 'lg', label: 'lg' }] },
      { id: 'value', label: L('Nota', 'Score', 'Nota'), value: '3.5', options: ['0', '2', '3.5', '4.5', '5'].map((v) => ({ value: v, label: v })) },
    ],
    render: (s) => (s.mode === 'show' ? ratingHtml(Number(s.value), { size: s.size, text: true }) : `<div class="ds-rating${s.size ? ` ds-rating--${s.size}` : ''}" data-play aria-label="${ask()}"></div>`),
    mount: (preview, s) => {
      const el = preview.querySelector('[data-play]');
      if (!el) return null;
      const r = createRating(el, { value: Math.round(Number(s.value)) });
      return () => r.destroy();
    },
    code: (s) =>
      s.mode === 'show'
        ? `<span data-media></span>

<script type="module">
  import { ratingHtml } from 'https://lumeui.dev/v/1.1/lume.js';
  document.querySelector('[data-media]').innerHTML = ratingHtml(${s.value}, { ${s.size ? `size: '${s.size}', ` : ''}text: true });
</script>`
        : `<div class="ds-rating${s.size ? ` ds-rating--${s.size}` : ''}" aria-label="${ask()}"></div>

<script type="module">
  import { createRating } from 'https://lumeui.dev/v/1.1/lume.js';
  createRating(document.querySelector('.ds-rating'), { name: '${L('nota', 'score', 'nota')}', value: ${Math.round(Number(s.value))} });
</script>`,
  });
  const out = root.querySelector('[data-out]');
  const thanks = (v) => (v ? L(`Nota ${v}. Obrigado!`, `Score ${v}. Thank you!`, `Nota ${v}. ¡Gracias!`) : '');
  const demo = createRating(root.querySelector('[data-demo="give"]'), { name: 'nota', onChange: (v) => (out.textContent = thanks(v)) });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    demo.destroy();
    unmountCopy();
    unmountNav();
  };
}
