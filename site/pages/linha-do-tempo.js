import { icon } from '../../ds/icons/icons.js';
import { dateFormat } from '../../ds/js/i18n.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const when = (d, h, m) => dateFormat({ day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(2026, 10, d, h, m));
const EVENTS = () => [
  { tone: 'success', ic: 'check', title: L('Pedido entregue', 'Order delivered', 'Pedido entregado'), text: L('Recebido por Ana', 'Received by Ana', 'Recibido por Ana'), d: 8, h: 14, m: 20 },
  { tone: 'brand', ic: 'package', title: L('Saiu para entrega', 'Out for delivery', 'Salió para entrega'), text: L('Previsão para hoje', 'Expected today', 'Previsto para hoy'), d: 8, h: 8, m: 5 },
  { tone: '', ic: 'file-text', title: L('Nota fiscal emitida', 'Invoice issued', 'Factura emitida'), text: '', d: 7, h: 17, m: 42 },
  { tone: '', ic: 'clock', title: L('Pedido criado', 'Order created', 'Pedido creado'), text: L('Por Bruno', 'By Bruno', 'Por Bruno'), d: 7, h: 9, m: 30 },
];

const item = (e, { icons = true, time = true } = {}) => `<li class="ds-timeline__item"${e.tone ? ` data-tone="${e.tone}"` : ''}>
    <span class="ds-timeline__marker">${icons ? icon(e.ic, { size: 14 }) : ''}</span>
    <div class="ds-timeline__content">
      <p class="ds-timeline__title">${e.title}</p>
      ${e.text ? `<p class="ds-timeline__text">${e.text}</p>` : ''}
      ${time ? `<time class="ds-timeline__time" datetime="2026-11-${String(e.d).padStart(2, '0')}T${String(e.h).padStart(2, '0')}:${String(e.m).padStart(2, '0')}">${when(e.d, e.h, e.m)}</time>` : ''}
    </div>
  </li>`;
const timeline = (o) => `<ol class="ds-timeline">${EVENTS().map((e) => item(e, o)).join('')}</ol>`;

export default function renderTimeline(page) {
  return controlPage(page, {
    lead: L('Eventos em ordem, como o histórico de um pedido ou a atividade de um projeto. Mostra o que aconteceu, quando e quem fez.', 'Events in order, like an order’s history or a project’s activity. Shows what happened, when, and who did it.', 'Eventos en orden, como el historial de un pedido o la actividad de un proyecto. Muestra qué pasó, cuándo y quién lo hizo.'),
    stats: [
      ['JavaScript', 0],
      [L('tons', 'tones', 'tonos'), 5],
      [L('marcador', 'marker', 'marcador'), '24 px'],
      [L('base', 'base', 'base'), 'ol'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Só HTML e CSS, sobre uma lista ordenada.', 'Just HTML and CSS, on top of an ordered list.', 'Solo HTML y CSS, sobre una lista ordenada.'), html: playgroundMarkup('timeline') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L(`O tom vai em ${ic('data-tone')}, no item. Reserve a cor para o que merece destaque.`, `The tone goes in ${ic('data-tone')}, on the item. Save color for what deserves attention.`, `El tono va en ${ic('data-tone')}, en el elemento. Reserva el color para lo que merece destacar.`),
        html: examples([
          example(L('Com ícones', 'With icons', 'Con íconos'), 'ds-timeline__marker', L('O ícone diz o tipo do evento.', 'The icon says the event type.', 'El ícono dice el tipo de evento.'), timeline()),
          example(L('Com pontos', 'With dots', 'Con puntos'), L('marcador vazio', 'empty marker', 'marcador vacío'), L('Quando todos os eventos são do mesmo tipo.', 'When all events are of the same type.', 'Cuando todos los eventos son del mismo tipo.'), timeline({ icons: false })),
        ]),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('É uma lista ordenada, com a data em um elemento próprio.', 'It’s an ordered list, with the date in its own element.', 'Es una lista ordenada, con la fecha en un elemento propio.'),
        html: a11yList([
          [L('Ordem', 'Order', 'Orden'), L(`Use ${ic('ol')}: o leitor de tela diz quantos eventos há e em qual está.`, `Use ${ic('ol')}: screen readers say how many events there are and which one it’s on.`, `Usa ${ic('ol')}: el lector de pantalla dice cuántos eventos hay y en cuál está.`)],
          [L('Data de verdade', 'A real date', 'Fecha de verdad'), L(`${ic('time')} com ${ic('datetime')} deixa a data legível também para máquinas.`, `${ic('time')} with ${ic('datetime')} keeps the date machine-readable too.`, `${ic('time')} con ${ic('datetime')} deja la fecha legible también para máquinas.`)],
          [L('Não só cor', 'Not only color', 'No solo color'), L('O sentido está no título; o tom e o ícone só reforçam.', 'The meaning is in the title; tone and icon only reinforce it.', 'El sentido está en el título; el tono y el ícono solo refuerzan.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que a linha do tempo consome.', 'Everything the timeline consumes.', 'Todo lo que consume la línea de tiempo.'),
        html: tokenTable([
          ['color.bg.muted', L('Marcador neutro', 'Neutral marker', 'Marcador neutro')],
          ['color.brand.solid', L('Marcador de marca', 'Brand marker', 'Marcador de marca')],
          ['color.success.subtle', L('Marcador de sucesso', 'Success marker', 'Marcador de éxito')],
          ['color.border.default', L('Fio entre eventos', 'Line between events', 'Línea entre eventos')],
          ['color.fg.subtle', L('Data', 'Date', 'Fecha')],
          ['radius.full', L('Marcador', 'Marker', 'Marcador')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarla y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: o que já aconteceu', 'Do: what already happened', 'Haz: lo que ya pasó'), L('Histórico de pedidos, atividade e auditoria, do mais novo para o mais antigo.', 'Order history, activity, and audit logs, newest first.', 'Historial de pedidos, actividad y auditoría, del más nuevo al más antiguo.')],
          ['dont', L('Evite: o que falta fazer', 'Avoid: what’s still to do', 'Evita: lo que falta hacer'), L('Etapas de um fluxo pedem o Stepper.', 'Steps in a flow call for the Stepper.', 'Las etapas de un flujo piden el Stepper.')],
          ['tip', L('Data relativa com cuidado', 'Careful with relative dates', 'Fecha relativa con cuidado'), L('“Há 2 horas” é ótimo para o recente; para o resto, mostre a data.', '“2 hours ago” is great for recent events; otherwise, show the date.', '“Hace 2 horas” es ideal para lo reciente; para el resto, muestra la fecha.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'timeline',
    controls: [
      { id: 'marker', label: L('Marcador', 'Marker', 'Marcador'), value: 'icons', options: [{ value: 'icons', label: L('Com ícones', 'With icons', 'Con íconos') }, { value: 'dots', label: L('Com pontos', 'With dots', 'Con puntos') }] },
      { id: 'time', label: L('Data', 'Date', 'Fecha'), value: 'on', options: [{ value: 'on', label: L('Com data', 'With date', 'Con fecha') }, { value: 'off', label: L('Sem data', 'No date', 'Sin fecha') }] },
    ],
    render: (s) => stageWrap(timeline({ icons: s.marker === 'icons', time: s.time === 'on' })),
    code: (s) => {
      const e = EVENTS()[0];
      return `<ol class="ds-timeline">
  <li class="ds-timeline__item" data-tone="success">
    <span class="ds-timeline__marker">${s.marker === 'icons' ? '<ds-icon name="check" size="14"></ds-icon>' : ''}</span>
    <div class="ds-timeline__content">
      <p class="ds-timeline__title">${e.title}</p>
      <p class="ds-timeline__text">${e.text}</p>${s.time === 'on' ? `\n      <time class="ds-timeline__time" datetime="2026-11-08T14:20">${when(8, 14, 20)}</time>` : ''}
    </div>
  </li>
</ol>`;
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
