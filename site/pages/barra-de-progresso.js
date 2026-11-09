import { icon } from '../../ds/icons/icons.js';
import { numberFormat } from '../../ds/js/i18n.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

let uid = 0;
const pct = (v) => numberFormat({ style: 'percent' }).format(v / 100);

const bar = ({ label, value, cls = '' }) => {
  const id = `pb-${++uid}`;
  return `<div class="ds-progress-field">
    <div class="ds-progress-field__head"><span id="${id}">${label}</span>${value === undefined ? '' : `<span class="ds-progress-field__value" data-value>${pct(value)}</span>`}</div>
    <progress class="ds-progress${cls ? ` ${cls}` : ''}" aria-labelledby="${id}"${value === undefined ? '' : ` value="${value}" max="100"`}></progress>
  </div>`;
};

export default function renderProgresso(page) {
  const sending = L('Enviando arquivos', 'Uploading files', 'Enviando archivos');
  return controlPage(page, {
    lead: L('Mostra quanto de uma tarefa já foi feito. Quando não dá para saber quanto falta, a versão indeterminada diz que algo está acontecendo.', 'Shows how much of a task is done. When there’s no way to know how much is left, the indeterminate version says something is happening.', 'Muestra cuánto de una tarea ya está hecho. Cuando no se puede saber cuánto falta, la versión indeterminada dice que algo está pasando.'),
    stats: [
      ['JavaScript', 0],
      [L('base', 'base', 'base'), 'progress'],
      [L('espessuras', 'thicknesses', 'grosores'), '4 · 8 px'],
      [L('tons', 'tones', 'tonos'), 4],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Só CSS, sobre o ${ic('progress')} nativo. Sem ${ic('value')}, a barra fica indeterminada.`, `Just CSS, on top of native ${ic('progress')}. Without ${ic('value')}, the bar is indeterminate.`, `Solo CSS, sobre el ${ic('progress')} nativo. Sin ${ic('value')}, la barra queda indeterminada.`), html: playgroundMarkup('progress') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Use o tom para o resultado, não para o meio do caminho.', 'Use a tone for the result, not along the way.', 'Usa el tono para el resultado, no para el medio del camino.'),
        html: examples([
          example(L('Determinada', 'Determinate', 'Determinada'), 'value · max', L('Quando dá para medir, sempre mostre o número.', 'When it can be measured, always show the number.', 'Cuando se puede medir, muestra siempre el número.'), bar({ label: sending, value: 62 })),
          example(L('Indeterminada', 'Indeterminate', 'Indeterminada'), L('sem value', 'no value', 'sin value'), L('Para quando não há como saber quanto falta.', 'For when there’s no way to know what’s left.', 'Para cuando no hay forma de saber cuánto falta.'), bar({ label: L('Preparando', 'Preparing', 'Preparando') })),
          example(L('Concluída', 'Complete', 'Completada'), 'ds-progress--success', L('Junto com um texto que diz que terminou.', 'Together with text saying it’s done.', 'Junto con un texto que dice que terminó.'), bar({ label: L('Enviado', 'Uploaded', 'Enviado'), value: 100, cls: 'ds-progress--success' })),
          example(L('Com erro', 'With an error', 'Con error'), 'ds-progress--danger', L('Mostra onde parou; o texto diz o motivo.', 'Shows where it stopped; the text says why.', 'Muestra dónde se detuvo; el texto dice el motivo.'), bar({ label: L('Falha no envio', 'Upload failed', 'Fallo en el envío'), value: 38, cls: 'ds-progress--danger' })),
        ]),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O elemento nativo já é anunciado como barra de progresso, com o valor atual.', 'The native element is already announced as a progress bar, with its current value.', 'El elemento nativo ya se anuncia como barra de progreso, con el valor actual.'),
        html: a11yList([
          [L('Com nome', 'With a name', 'Con nombre'), L(`Ligue o texto à barra com ${ic('aria-labelledby')}, para saber o que está progredindo.`, `Link the text to the bar with ${ic('aria-labelledby')}, so people know what’s progressing.`, `Vincula el texto a la barra con ${ic('aria-labelledby')}, para saber qué está progresando.`)],
          [L('Não só cor', 'Not only color', 'No solo color'), L('Sucesso e erro precisam de texto; a cor apenas reforça.', 'Success and errors need text; color only reinforces it.', 'El éxito y el error necesitan texto; el color solo refuerza.')],
          [L('Avise no fim', 'Announce the end', 'Avisa al final'), L('Leitores de tela não anunciam cada mudança: avise o fim em role="status".', 'Screen readers don’t announce every change: announce the end in role="status".', 'Los lectores de pantalla no anuncian cada cambio: avisa el fin en role="status".')],
          [L('Movimento reduzido', 'Reduced motion', 'Movimiento reducido'), L('A indeterminada para de se mover e vira uma faixa estática.', 'The indeterminate bar stops moving and becomes a static band.', 'La indeterminada deja de moverse y queda como una franja estática.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que a barra consome.', 'Everything the bar consumes.', 'Todo lo que consume la barra.'),
        html: tokenTable([
          ['color.border.field', L('Trilho', 'Track', 'Riel')],
          ['color.brand.solid', L('Preenchimento', 'Fill', 'Relleno')],
          ['color.success.solid', L('Concluída', 'Complete', 'Completada')],
          ['color.warning.solid', L('Atenção', 'Warning', 'Atención')],
          ['color.danger.solid', L('Com erro', 'With an error', 'Con error')],
          ['radius.full', L('Cantos', 'Corners', 'Esquinas')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Barra, spinner ou medidor?', 'Bar, spinner, or meter?', '¿Barra, spinner o medidor?'),
        html: usageCards([
          ['do', L('Faça: tarefas com mais de 10 segundos', 'Do: tasks over 10 seconds', 'Haz: tareas de más de 10 segundos'), L('Envios e importações, em que saber quanto falta acalma.', 'Uploads and imports, where knowing what’s left is reassuring.', 'Envíos e importaciones, donde saber cuánto falta tranquiliza.')],
          ['dont', L('Evite: medir o que não é tarefa', 'Avoid: measuring what isn’t a task', 'Evita: medir lo que no es tarea'), L('Espaço usado ou meta do mês são medidas: use o Medidor, em Gráficos.', 'Used storage or a monthly goal are measures: use the Meter, in Charts.', 'El espacio usado o la meta del mes son medidas: usa el Medidor, en Gráficos.')],
          ['tip', L('Espera curta? Spinner', 'Short wait? Spinner', '¿Espera corta? Spinner'), L('Abaixo de 10 segundos, um Spinner basta.', 'Under 10 seconds, a Spinner is enough.', 'Por debajo de 10 segundos, basta un Spinner.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'progress',
    controls: [
      { id: 'mode', label: L('Tipo', 'Type', 'Tipo'), value: 'live', options: [{ value: 'live', label: L('Avançando', 'Advancing', 'Avanzando') }, { value: 'off', label: L('Indeterminada', 'Indeterminate', 'Indeterminada') }] },
      { id: 'size', label: L('Espessura', 'Thickness', 'Grosor'), value: 'md', options: [{ value: 'md', label: '4 px' }, { value: 'lg', label: '8 px' }] },
    ],
    text: { id: 'label', label: L('Rótulo', 'Label', 'Etiqueta'), value: L('Enviando arquivos', 'Uploading files', 'Enviando archivos') },
    render: (s) => stageWrap(bar({ label: s.label || L('Enviando', 'Uploading', 'Enviando'), value: s.mode === 'live' ? 0 : undefined, cls: s.size === 'lg' ? 'ds-progress--lg' : '' })),
    mount: (preview, s) => {
      if (s.mode !== 'live') return null;
      const el = preview.querySelector('progress');
      const out = preview.querySelector('[data-value]');
      let v = 0;
      const timer = setInterval(() => {
        v = v >= 100 ? 0 : Math.min(100, v + 7);
        el.value = v;
        out.textContent = pct(v);
      }, 500);
      return () => clearInterval(timer);
    },
    code: (s) => `<div class="ds-progress-field">
  <div class="ds-progress-field__head">
    <span id="envio">${s.label || L('Enviando', 'Uploading', 'Enviando')}</span>${s.mode === 'live' ? '\n    <span class="ds-progress-field__value">62%</span>' : ''}
  </div>
  <progress class="ds-progress${s.size === 'lg' ? ' ds-progress--lg' : ''}" aria-labelledby="envio"${s.mode === 'live' ? ' value="62" max="100"' : ''}></progress>
</div>`,
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
