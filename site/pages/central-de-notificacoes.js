import { icon } from '../../ds/icons/icons.js';
import { msg } from '../../ds/js/i18n.js';
import { createNotificationCenter, relativeTime } from '../../ds/js/notifications.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/central-de-notificacoes.css'];

const ago = (minutes) => new Date(Date.now() - minutes * 60000);

/* Notificações que o próprio Lume mandaria */
const ITEMS = () => [
  { id: 'v035', title: 'Lume 0.35', text: L('Banner de anúncio e central de notificações.', 'Announcement banner and notification center.', 'Banner de anuncio y centro de notificaciones.'), time: ago(4), icon: 'megaphone', tone: 'brand', href: '#/novidades' },
  { id: 'stories', title: L('Storybook atualizado', 'Storybook updated', 'Storybook actualizado'), text: L('As histórias dos componentes novos já estão lá.', 'The stories for the new components are there.', 'Las historias de los componentes nuevos ya están ahí.'), time: ago(130), icon: 'check-circle', tone: 'success' },
  { id: 'v034', title: 'Lume 0.34', text: L('Divisor, link e progresso circular.', 'Divider, link, and circular progress.', 'Divisor, enlace y progreso circular.'), time: ago(60 * 26), icon: 'megaphone', tone: 'brand', href: '#/novidades', read: true },
  { id: 'v033', title: 'Lume 0.33', text: L('Avaliação e barra de ferramentas.', 'Rating and toolbar.', 'Valoración y barra de herramientas.'), time: ago(60 * 24 * 9), icon: 'megaphone', href: '#/novidades', read: true },
];

const NEXT = () => ({ id: 'v036', title: 'Lume 0.36', text: L('Visualizador de imagem, com zoom.', 'Image viewer, with zoom.', 'Visor de imágenes, con zoom.'), time: new Date(), icon: 'megaphone', tone: 'brand', href: '#/roadmap' });

const bell = (attrs = '') => `<button type="button" class="ds-icon-btn"${attrs}>${icon('bell', { size: 20 })}</button>`;

/* O painel desenhado à mão, aberto, para as variantes e os estados (sem JS) */
const itemHtml = (item, state = '') => `<li class="ds-notify__item"${item.read ? '' : ' data-unread'}>
  <a class="ds-notify__link" href="${item.href ?? '#'}"${state ? ` data-state="${state}"` : ''} tabindex="-1">
    ${item.icon ? `<span class="ds-notify__icon${item.tone ? ` ds-notify__icon--${item.tone}` : ''}">${icon(item.icon, { size: 16 })}</span>` : ''}
    <span class="ds-notify__body"><span class="ds-notify__item-title">${item.title}</span>${item.text ? `<span class="ds-notify__text">${item.text}</span>` : ''}<time class="ds-notify__time">${relativeTime(item.time)}</time></span>
    ${item.read ? '' : '<span class="ds-dot ds-notify__dot"></span>'}
  </a>
</li>`;

const panel = (items, { all = true } = {}) => `<div class="ds-popover ds-notify-panel cn-static" role="group" aria-label="${msg('notifications.title')}">
  <div class="ds-notify">
    <div class="ds-notify__header"><h3 class="ds-notify__title">${msg('notifications.title')}</h3>${all && items.some((i) => !i.read) ? `<span class="ds-inline-action">${msg('notifications.markAll')}</span>` : ''}</div>
    ${items.length ? `<ul class="ds-notify__list" role="list">${items.map((i) => itemHtml(i)).join('')}</ul>` : `<div class="ds-notify__empty">${icon('bell', { size: 24 })}<span>${msg('notifications.empty')}</span></div>`}
  </div>
</div>`;

const countBell = (n) => `<span class="ds-icon-btn ds-notify-trigger">${icon('bell', { size: 20 })}${n ? `<span class="ds-notify-trigger__count">${n}</span>` : ''}</span>`;

export default function renderNotifications(page) {
  const items = ITEMS();
  return controlPage(page, {
    lead: L('O sino que abre a lista do que aconteceu, para cada pessoa. O número mostra quantas faltam ler; abrir uma notificação a marca como lida.', 'The bell that opens the list of what happened, for each person. The number shows how many are left to read; opening a notification marks it as read.', 'La campana que abre la lista de lo que pasó, para cada persona. El número muestra cuántas faltan por leer; abrir una notificación la marca como leída.'),
    stats: [
      [L('base', 'base', 'base'), 'Popover'],
      [L('tons de ícone', 'icon tones', 'tonos de ícono'), 6],
      [L('tempo', 'time', 'tiempo'), L('relativo', 'relative', 'relativo')],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'dialog'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Abra o sino e clique numa notificação. “Chegou uma nova” mostra o que acontece quando uma notificação chega com a lista fechada.', 'Open the bell and click a notification. “A new one arrived” shows what happens when one arrives with the list closed.', 'Abre la campana y haz clic en una notificación. “Llegó una nueva” muestra qué pasa cuando llega una con la lista cerrada.'), html: playgroundMarkup('notify', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('O painel é sempre o mesmo; muda o que há nele.', 'The panel is always the same; what changes is what’s in it.', 'El panel es siempre el mismo; cambia lo que hay en él.'),
        html: examples([
          example(L('Com não lidas', 'With unread', 'Con sin leer'), 'read: false', L('Título forte e o ponto do indicador. “Marcar todas como lidas” só aparece quando há o que marcar.', 'Bold title and the indicator dot. “Mark all as read” only appears when there’s something to mark.', 'Título fuerte y el punto del indicador. “Marcar todas como leídas” solo aparece cuando hay algo que marcar.'), panel(items.slice(0, 3))),
          example(L('Tudo lido', 'All read', 'Todo leído'), 'read: true', L('Sem ponto, título no peso normal e o sino sem número.', 'No dot, regular-weight title, and the bell without a number.', 'Sin punto, título en peso normal y la campana sin número.'), panel(items.map((i) => ({ ...i, read: true })).slice(1))),
          example(L('Vazio', 'Empty', 'Vacío'), 'items: []', L('Uma frase curta, sem ilustração.', 'A short sentence, no illustration.', 'Una frase corta, sin ilustración.'), panel([])),
          example(L('Sem ícone', 'Without icon', 'Sin ícono'), L('sem icon', 'no icon', 'sin icon'), L('Para listas em que todas as notificações são do mesmo tipo.', 'For lists where every notification is the same kind.', 'Para listas donde todas las notificaciones son del mismo tipo.'), panel(items.slice(0, 2).map(({ icon: _i, ...rest }) => rest))),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('O número no sino segue a cor do indicador; acima de 99, vira “99+”.', 'The number on the bell uses the indicator color; above 99, it becomes “99+”.', 'El número en la campana usa el color del indicador; arriba de 99, se vuelve “99+”.'),
        html: stateGrid([
          [L('Sino sem não lidas', 'Bell, nothing unread', 'Campana sin pendientes'), countBell(0)],
          [L('Sino com 2', 'Bell with 2', 'Campana con 2'), countBell(2)],
          [L('Sino com mais de 99', 'Bell with over 99', 'Campana con más de 99'), countBell('99+')],
          [L('Item com o mouse', 'Item on hover', 'Elemento con el ratón'), `<ul class="ds-notify__list cn-item" role="list">${itemHtml(items[0], 'hover')}</ul>`],
          [L('Item com foco', 'Item with focus', 'Elemento con foco'), `<ul class="ds-notify__list cn-item" role="list">${itemHtml(items[0], 'focus')}</ul>`],
          [L('Item lido', 'Read item', 'Elemento leído'), `<ul class="ds-notify__list cn-item" role="list">${itemHtml({ ...items[0], read: true })}</ul>`],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L('Você dá o sino e a lista; o JavaScript desenha o painel, o número e cuida do lido.', 'You provide the bell and the list; JavaScript draws the panel and the number and handles what’s read.', 'Tú das la campana y la lista; el JavaScript dibuja el panel, el número y se ocupa de lo leído.'),
        html: codeBlock(`<button type="button" class="ds-icon-btn"><ds-icon name="bell"></ds-icon></button>

<script type="module">
  import { createNotificationCenter } from 'https://lumeui.dev/v/0.38/lume.js';

  const center = createNotificationCenter(document.querySelector('.ds-icon-btn'), {
    items: [
      { id: 'v035', title: 'Lume 0.35', text: '${items[0].text}', time: new Date(),
        icon: 'megaphone', tone: 'brand', href: '/novidades' },
    ],
    onChange: (items, unread) => ${L('salvar(items)', 'save(items)', 'guardar(items)')},
  });

  // ${L('chegou uma nova (por WebSocket, por exemplo)', 'a new one arrived (over a WebSocket, for example)', 'llegó una nueva (por WebSocket, por ejemplo)')}
  center.add({ id: 'v036', title: 'Lume 0.36', time: new Date() });
</script>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Um popover com uma lista de links: nada de novo para aprender.', 'A popover with a list of links: nothing new to learn.', 'Un popover con una lista de enlaces: nada nuevo que aprender.'),
        html: a11yList([
          [L('Sino com o número', 'Bell with the count', 'Campana con el número'), L('O nome do sino traz quantas faltam ler: “Notificações, 2 não lidas”. O número visível é aria-hidden.', 'The bell’s name includes how many are unread: “Notifications, 2 unread”. The visible number is aria-hidden.', 'El nombre de la campana dice cuántas faltan: “Notificaciones, 2 sin leer”. El número visible es aria-hidden.')],
          [L('Painel', 'Panel', 'Panel'), L('role="dialog" não modal, com nome. Abrir leva o foco para dentro; Esc fecha e devolve o foco ao sino.', 'A non-modal role="dialog" with a name. Opening moves focus inside; Esc closes and returns focus to the bell.', 'role="dialog" no modal, con nombre. Abrir lleva el foco adentro; Esc cierra y devuelve el foco a la campana.'), ['Tab', 'Enter', 'Esc']],
          [L('Não lida', 'Unread', 'Sin leer'), L('O ponto é visual; cada item não lido diz “Não lida” ao leitor de tela.', 'The dot is visual; each unread item says “Unread” to screen readers.', 'El punto es visual; cada elemento sin leer dice “Sin leer” al lector de pantalla.')],
          [L('O que chega', 'What arrives', 'Lo que llega'), L('add() anuncia “Nova notificação: …” numa região de status, sem roubar o foco.', 'add() announces “New notification: …” in a status region, without stealing focus.', 'add() anuncia “Nueva notificación: …” en una región de estado, sin robar el foco.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que a central consome, além do Popover.', 'Everything the center consumes, on top of the Popover.', 'Todo lo que consume el centro, además del Popover.'),
        html: tokenTable([
          ['color.brand.indicator', L('Número e ponto de não lida', 'Count and unread dot', 'Número y punto sin leer')],
          ['color.bg.hover', L('Item com o mouse', 'Item on hover', 'Elemento con el ratón')],
          ['color.bg.muted', L('Fundo do ícone neutro', 'Neutral icon background', 'Fondo del ícono neutro')],
          ['color.fg.muted', L('Texto e título lido', 'Text and read title', 'Texto y título leído')],
          ['color.fg.subtle', L('Tempo', 'Time', 'Tiempo')],
          ['color.border.subtle', L('Linha do cabeçalho', 'Header line', 'Línea del encabezado')],
          ['radius.md', L('Cantos do item', 'Item corners', 'Esquinas del elemento')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Notificação, toast ou banner?', 'Notification, toast, or banner?', '¿Notificación, toast o banner?'),
        html: usageCards([
          ['do', L('Faça: o que a pessoa vai querer rever', 'Do: what people will want to revisit', 'Haz: lo que la persona querrá revisar'), L('Uma versão nova, algo que mudou no que é dela. A notificação fica guardada; o toast some.', 'A new version, something that changed in what’s theirs. A notification stays; a toast disappears.', 'Una versión nueva, algo que cambió en lo suyo. La notificación queda guardada; el toast desaparece.')],
          ['dont', L('Evite: notificar o que a pessoa acabou de fazer', 'Avoid: notifying what people just did', 'Evita: notificar lo que la persona acaba de hacer'), L('“Salvo” é um toast. Na central, só o que aconteceu enquanto ela fazia outra coisa.', '“Saved” is a toast. In the center, only what happened while they were doing something else.', '“Guardado” es un toast. En el centro, solo lo que pasó mientras hacía otra cosa.')],
          ['tip', L('Título que se basta', 'A title that stands alone', 'Un título que se basta'), L('Quem lê só o título tem que entender o que houve. O texto completa.', 'Someone reading only the title should understand what happened. The text completes it.', 'Quien lee solo el título tiene que entender qué pasó. El texto completa.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'notify',
    controls: [{ id: 'start', label: L('Começa com', 'Starts with', 'Empieza con'), value: 'some', options: [{ value: 'some', label: L('Não lidas', 'Unread', 'Sin leer') }, { value: 'read', label: L('Tudo lido', 'All read', 'Todo leído') }, { value: 'empty', label: L('Vazio', 'Empty', 'Vacío') }] }],
    render: () => `<div class="cn-play">
      <div class="cn-play__bar"><span class="cn-play__title">Lume</span>${bell(' data-bell')}</div>
      <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-new>${icon('plus', { size: 16 })}${L('Chegou uma nova', 'A new one arrived', 'Llegó una nueva')}</button>
    </div>`,
    mount: (preview, s) => {
      const start = s.start === 'empty' ? [] : ITEMS().map((i) => (s.start === 'read' ? { ...i, read: true } : i));
      const center = createNotificationCenter(preview.querySelector('[data-bell]'), {
        items: start,
        onSelect: () => {},
      });
      // os links do exemplo não saem da página
      const stay = (event) => {
        if (event.target.closest('.ds-notify__link')) event.preventDefault();
      };
      document.addEventListener('click', stay, true);
      const btn = preview.querySelector('[data-new]');
      const onNew = () => {
        center.add(NEXT());
        btn.disabled = true;
      };
      btn.addEventListener('click', onNew);
      return () => {
        btn.removeEventListener('click', onNew);
        document.removeEventListener('click', stay, true);
        center.destroy();
      };
    },
    code: (s) => `<button type="button" class="ds-icon-btn"><ds-icon name="bell"></ds-icon></button>

<script type="module">
  import { createNotificationCenter } from 'https://lumeui.dev/v/0.38/lume.js';

  createNotificationCenter(document.querySelector('.ds-icon-btn'), {
    items: ${s.start === 'empty' ? '[]' : `[
      { id: 'v035', title: 'Lume 0.35', time: new Date(), icon: 'megaphone', tone: 'brand', href: '/novidades'${s.start === 'read' ? ', read: true' : ''} },
    ]`},
  });
</script>`,
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
