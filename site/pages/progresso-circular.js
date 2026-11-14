import { progressRingHtml, setProgressRing } from '../../ds/js/progress-ring.js';
import { numberFormat } from '../../ds/js/i18n.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/progresso-circular.css'];

const uploading = () => L('Enviando arquivos', 'Uploading files', 'Enviando archivos');

/* Etapas do próprio Lume, cada uma com quanto já está pronto */
const steps = () => [
  [L('Fundamentos', 'Foundations', 'Fundamentos'), 100, 'success'],
  [L('Componentes', 'Components', 'Componentes'), 86, ''],
  [L('Plugin do Figma', 'Figma plugin', 'Plugin de Figma'), 40, 'warning'],
];

const list = () => `<ul class="pr-list" role="list">${steps()
  .map(([name, v, tone]) => `<li class="pr-list__item">${progressRingHtml(v, { size: 'sm', tone, label: name })}<span class="pr-list__name">${name}</span><span class="pr-list__value" aria-hidden="true">${numberFormat({ style: 'percent' }).format(v / 100)}</span></li>`)
  .join('')}</ul>`;

export default function renderProgressRing(page) {
  return controlPage(page, {
    lead: L('O mesmo progresso da barra, num anel. Cabe num card, num cabeçalho ou ao lado de um item de lista, onde a barra não teria largura.', 'The same progress as the bar, in a ring. It fits in a card, a header, or next to a list item, where a bar wouldn’t have the width.', 'El mismo progreso de la barra, en un anillo. Cabe en una tarjeta, un encabezado o junto a un elemento de lista, donde la barra no tendría ancho.'),
    stats: [
      [L('tamanhos', 'sizes', 'tamaños'), '20 · 56 · 80'],
      [L('tons', 'tones', 'tonos'), 4],
      [L('formas', 'forms', 'formas'), L('determinado e indeterminado', 'determinate and indeterminate', 'determinado e indeterminado')],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'progressbar'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`${ic('progressRingHtml')} monta o anel e ${ic('setProgressRing')} muda o valor. Sem valor, o arco gira.`, `${ic('progressRingHtml')} builds the ring and ${ic('setProgressRing')} changes the value. With no value, the arc spins.`, `${ic('progressRingHtml')} arma el anillo y ${ic('setProgressRing')} cambia el valor. Sin valor, el arco gira.`), html: playgroundMarkup('ring') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Os tons são os da barra: para o resultado, não para o meio do caminho.', 'The tones are the bar’s: for the result, not along the way.', 'Los tonos son los de la barra: para el resultado, no para el medio del camino.'),
        html: examples([
          example(L('Tamanhos', 'Sizes', 'Tamaños'), "size: 'sm' · 'md' · 'lg'", L('20 px numa linha de texto, sem número; 56 px no padrão; 80 px quando o progresso é o assunto.', '20 px in a line of text, no number; 56 px by default; 80 px when progress is the point.', '20 px en una línea de texto, sin número; 56 px por defecto; 80 px cuando el progreso es el tema.'), `<div class="pr-row">${progressRingHtml(62, { size: 'sm', label: uploading() })}${progressRingHtml(62, { label: uploading() })}${progressRingHtml(62, { size: 'lg', label: uploading() })}</div>`),
          example(L('Indeterminado', 'Indeterminate', 'Indeterminado'), 'progressRingHtml(null)', L('Para quando não dá para saber quanto falta. Com movimento reduzido, o arco para.', 'For when there’s no way to know what’s left. With reduced motion, the arc stops.', 'Para cuando no se puede saber cuánto falta. Con movimiento reducido, el arco se detiene.'), `<div class="pr-row">${progressRingHtml(null, { size: 'sm', label: L('Preparando', 'Preparing', 'Preparando') })}${progressRingHtml(null, { label: L('Preparando', 'Preparing', 'Preparando') })}</div>`),
          example(L('Tons', 'Tones', 'Tonos'), "tone: 'success' · 'warning' · 'danger'", L('Concluído, perto do limite e com erro. Sempre com um texto que diga o resultado.', 'Complete, near the limit, and failed. Always with text that states the result.', 'Completado, cerca del límite y con error. Siempre con un texto que diga el resultado.'), `<div class="pr-row">${progressRingHtml(100, { tone: 'success', label: L('Enviado', 'Uploaded', 'Enviado') })}${progressRingHtml(90, { tone: 'warning', label: L('Espaço usado', 'Space used', 'Espacio usado') })}${progressRingHtml(38, { tone: 'danger', label: L('Falha no envio', 'Upload failed', 'Fallo en el envío') })}</div>`),
          example(L('Numa lista', 'In a list', 'En una lista'), "size: 'sm'", L('Ao lado do nome, com o número escrito: o anel pequeno não leva número dentro.', 'Next to the name, with the number written out: the small ring has no number inside.', 'Junto al nombre, con el número escrito: el anillo pequeño no lleva número dentro.'), list()),
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L('A marcação vem pronta; para mudar o valor, chame setProgressRing.', 'The markup comes ready; to change the value, call setProgressRing.', 'El marcado viene listo; para cambiar el valor, llama a setProgressRing.'),
        html: codeBlock(`<span data-envio></span>

<script type="module">
  import { progressRingHtml, setProgressRing } from 'https://lumeui.dev/v/0.39/lume.js';

  const box = document.querySelector('[data-envio]');
  box.innerHTML = progressRingHtml(0, { label: '${uploading()}' });
  const ring = box.firstElementChild;

  // ${L('a cada passo do envio', 'at each step of the upload', 'en cada paso del envío')}
  setProgressRing(ring, 62);
</script>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O anel é um progressbar com nome e valor, como a barra nativa.', 'The ring is a progressbar with a name and a value, like the native bar.', 'El anillo es un progressbar con nombre y valor, como la barra nativa.'),
        html: a11yList([
          [L('Com nome', 'With a name', 'Con nombre'), L(`Passe ${ic('label')} com o que está progredindo. Sem ele, o anel se chama “Progresso”.`, `Pass ${ic('label')} with what’s progressing. Without it, the ring is called “Progress”.`, `Pasa ${ic('label')} con lo que está progresando. Sin él, el anillo se llama “Progreso”.`)],
          [L('Valor', 'Value', 'Valor'), L('aria-valuenow leva o número; o texto no meio é só visual, para não ser lido duas vezes. Sem valor, é indeterminado.', 'aria-valuenow carries the number; the text in the middle is visual only, so it isn’t read twice. With no value, it’s indeterminate.', 'aria-valuenow lleva el número; el texto del centro es solo visual, para no leerse dos veces. Sin valor, es indeterminado.')],
          [L('Avise no fim', 'Announce the end', 'Avisa al final'), L('Leitores de tela não anunciam cada mudança: avise o fim em role="status".', 'Screen readers don’t announce every change: announce the end in role="status".', 'Los lectores de pantalla no anuncian cada cambio: avisa el fin en role="status".')],
          [L('Não só cor', 'Not only color', 'No solo color'), L('Sucesso e erro precisam de texto ao lado; o tom só reforça.', 'Success and errors need text nearby; the tone only reinforces it.', 'El éxito y el error necesitan texto al lado; el tono solo refuerza.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Os mesmos da barra de progresso.', 'The same as the progress bar.', 'Los mismos de la barra de progreso.'),
        html: tokenTable([
          ['color.border.field', L('Trilho', 'Track', 'Riel')],
          ['color.brand.solid', L('Preenchimento', 'Fill', 'Relleno')],
          ['color.success.solid', L('Concluído', 'Complete', 'Completado')],
          ['color.warning.solid', L('Atenção', 'Warning', 'Atención')],
          ['color.danger.solid', L('Com erro', 'With an error', 'Con error')],
          ['color.fg.default', L('Porcentagem', 'Percentage', 'Porcentaje')],
          ['duration.base', L('Mudança de valor', 'Value change', 'Cambio de valor')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Anel, barra ou spinner?', 'Ring, bar, or spinner?', '¿Anillo, barra o spinner?'),
        html: usageCards([
          ['do', L('Faça: onde a barra não cabe', 'Do: where a bar doesn’t fit', 'Haz: donde la barra no cabe'), L('Num card de envio, numa linha de lista, num cabeçalho. Com largura, a barra lê melhor.', 'In an upload card, a list row, a header. With room, a bar reads better.', 'En una tarjeta de envío, una fila de lista, un encabezado. Con ancho, la barra se lee mejor.')],
          ['dont', L('Evite: medir o que não é tarefa', 'Avoid: measuring what isn’t a task', 'Evita: medir lo que no es tarea'), L('Espaço usado ou meta do mês são medidas: use o Medidor ou a Rosca, em Gráficos.', 'Used storage or a monthly goal are measures: use the Meter or the Donut, in Charts.', 'El espacio usado o la meta del mes son medidas: usa el Medidor o la Dona, en Gráficos.')],
          ['tip', L('Espera curta? Spinner', 'Short wait? Spinner', '¿Espera corta? Spinner'), L('Abaixo de 10 segundos e sem número para mostrar, o Spinner basta.', 'Under 10 seconds, with no number to show, a Spinner is enough.', 'Por debajo de 10 segundos y sin número para mostrar, basta un Spinner.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'ring',
    controls: [
      { id: 'mode', label: L('Tipo', 'Type', 'Tipo'), value: 'live', options: [{ value: 'live', label: L('Avançando', 'Advancing', 'Avanzando') }, { value: 'off', label: L('Indeterminado', 'Indeterminate', 'Indeterminado') }] },
      { id: 'size', label: L('Tamanho', 'Size', 'Tamaño'), value: 'md', options: [{ value: 'sm', label: 'sm' }, { value: 'md', label: 'md' }, { value: 'lg', label: 'lg' }] },
      { id: 'tone', label: L('Tom', 'Tone', 'Tono'), value: '', options: [{ value: '', label: 'brand' }, { value: 'success', label: 'success' }, { value: 'warning', label: 'warning' }, { value: 'danger', label: 'danger' }] },
    ],
    render: (s) => progressRingHtml(s.mode === 'live' ? 0 : null, { size: s.size, tone: s.tone, label: uploading() }),
    mount: (preview, s) => {
      if (s.mode !== 'live') return null;
      const ring = preview.querySelector('.ds-progress-ring');
      let v = 0;
      const timer = setInterval(() => {
        v = v >= 100 ? 0 : Math.min(100, v + 7);
        setProgressRing(ring, v);
      }, 500);
      return () => clearInterval(timer);
    },
    code: (s) => {
      const opts = [s.size !== 'md' && `size: '${s.size}'`, s.tone && `tone: '${s.tone}'`, `label: '${uploading()}'`].filter(Boolean).join(', ');
      return `<span data-envio></span>

<script type="module">
  import { progressRingHtml${s.mode === 'live' ? ', setProgressRing' : ''} } from 'https://lumeui.dev/v/0.39/lume.js';

  const box = document.querySelector('[data-envio]');
  box.innerHTML = progressRingHtml(${s.mode === 'live' ? '0' : 'null'}, { ${opts} });${s.mode === 'live' ? '\n  setProgressRing(box.firstElementChild, 62);' : ''}
</script>`;
    },
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
