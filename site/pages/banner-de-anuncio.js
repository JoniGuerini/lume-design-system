import { icon } from '../../ds/icons/icons.js';
import { msg } from '../../ds/js/i18n.js';
import { createBanner } from '../../ds/js/banner.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/banner-de-anuncio.css'];

const ICONS = { neutral: 'info', brand: 'megaphone', info: 'info', warning: 'alert-triangle', danger: 'alert-circle' };

const close = () => `<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="${msg('banner.close')}">${icon('x', { size: 16 })}</button>`;

const banner = ({ tone = 'neutral', strong = '', text, link = '', href = '#/novidades', closable = true, flush = false, attrs = '' }) =>
  `<div class="ds-banner${tone !== 'neutral' ? ` ds-banner--${tone}` : ''}${flush ? ' ds-banner--flush' : ''}" role="region" aria-label="${msg('banner.label')}"${attrs}>
    <span class="ds-banner__icon">${icon(ICONS[tone], { size: 18 })}</span>
    <p class="ds-banner__text">${strong ? `<strong>${strong}</strong>` : ''}${text}${link ? ` <a class="ds-link" href="${href}">${link}</a>` : ''}</p>
    ${closable ? close() : ''}
  </div>`;

const release = () => ({ tone: 'brand', strong: 'Lume 0.35', text: L('Banner de anúncio e central de notificações.', 'Announcement banner and notification center.', 'Banner de anuncio y centro de notificaciones.'), link: L('Ver novidades', 'See what’s new', 'Ver novedades') });

/* Um pedaço de app em volta, para o banner estar onde ele mora: no topo, acima da barra */
const app = (inner) => `<div class="bn-app">
  ${inner}
  <div class="bn-app__bar"><span class="bn-app__title">${L('Componentes', 'Components', 'Componentes')}</span><span class="bn-app__crumb">${L('Feedback', 'Feedback', 'Feedback')}</span></div>
  <div class="bn-app__body"><span class="ds-skeleton ds-skeleton--text" style="--w:60%"></span><span class="ds-skeleton ds-skeleton--text" style="--w:85%"></span><span class="ds-skeleton ds-skeleton--text" style="--w:40%"></span></div>
</div>`;

export default function renderBanner(page) {
  return controlPage(page, {
    lead: L('Uma faixa no topo do app para um recado que vale para todo mundo: uma versão nova, uma mudança que vem aí. A pessoa fecha e o banner lembra que ela já viu.', 'A strip at the top of the app for a message that applies to everyone: a new version, a change on the way. People close it and the banner remembers they saw it.', 'Una franja arriba de la app para un mensaje que vale para todos: una versión nueva, un cambio que se viene. La persona lo cierra y el banner recuerda que ya lo vio.'),
    stats: [
      [L('tons', 'tones', 'tonos'), 5],
      [L('por vez', 'at a time', 'a la vez'), 1],
      [L('lembra', 'remembers', 'recuerda'), 'localStorage'],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'region'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Feche o banner: com ${ic('id')}, ${ic('createBanner')} guarda no navegador e ele não volta ao recarregar.`, `Close the banner: with an ${ic('id')}, ${ic('createBanner')} stores it in the browser and it doesn’t come back on reload.`, `Cierra el banner: con un ${ic('id')}, ${ic('createBanner')} lo guarda en el navegador y no vuelve al recargar.`), html: playgroundMarkup('banner', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('O tom diz o tipo de recado; o ícone e o texto dizem o mesmo que a cor.', 'The tone says what kind of message it is; the icon and text say the same as the color.', 'El tono dice el tipo de mensaje; el ícono y el texto dicen lo mismo que el color.'),
        html: examples(
          [
            example(L('Novidade', 'News', 'Novedad'), 'ds-banner--brand', L('Uma versão nova, um recurso que chegou. Faixa sólida no tom da marca: o único tom que se destaca de verdade.', 'A new version, a feature that arrived. A solid strip in the brand tone: the only tone that truly stands out.', 'Una versión nueva, una función que llegó. Franja sólida en el tono de la marca: el único tono que destaca de verdad.'), banner(release())),
            example(L('Neutro', 'Neutral', 'Neutro'), 'ds-banner', L('Um recado sem urgência, que não precisa chamar atenção.', 'A message with no urgency that doesn’t need to draw attention.', 'Un mensaje sin urgencia, que no necesita llamar la atención.'), banner({ text: L('O Storybook do Lume agora também mostra os componentes React.', 'Lume’s Storybook now also shows the React components.', 'El Storybook de Lume ahora también muestra los componentes React.'), link: 'Storybook', href: '#/recursos/react' })),
            example(L('Informação', 'Information', 'Información'), 'ds-banner--info', L('Algo que ajuda a entender o que mudou.', 'Something that helps people understand what changed.', 'Algo que ayuda a entender qué cambió.'), banner({ tone: 'info', text: L('Cada linha do Lume fica congelada em /v/0.xx/: atualize quando quiser.', 'Each Lume line stays frozen at /v/0.xx/: update whenever you want.', 'Cada línea de Lume queda congelada en /v/0.xx/: actualiza cuando quieras.'), link: L('Instalação', 'Installation', 'Instalación'), href: '#/primeiros-passos' })),
            example(L('Atenção', 'Warning', 'Atención'), 'ds-banner--warning', L('Uma mudança que pede ação antes de uma data. Sem fechar, enquanto a ação não for feita.', 'A change that needs action before a date. Not closable until the action is done.', 'Un cambio que pide acción antes de una fecha. Sin cerrar, mientras la acción no esté hecha.'), banner({ tone: 'warning', text: L('Na 1.0, nomes públicos só mudam com aviso no console.', 'From 1.0, public names only change with a console warning.', 'Desde la 1.0, los nombres públicos solo cambian con aviso en la consola.'), link: 'API', href: '#/recursos/api', closable: false })),
            example(L('Erro', 'Error', 'Error'), 'ds-banner--danger', L('Algo que afeta todo o app agora. Fica até o problema acabar.', 'Something affecting the whole app right now. It stays until the problem is over.', 'Algo que afecta toda la app ahora. Se queda hasta que el problema termine.'), banner({ tone: 'danger', text: L('As fontes do Lume não carregaram; o texto usa as do sistema.', 'Lume’s fonts didn’t load; text is using system fonts.', 'Las fuentes de Lume no cargaron; el texto usa las del sistema.'), closable: false })),
            example(L('No topo do app', 'At the top of the app', 'Arriba de la app'), 'ds-banner--flush', L('Colado nas bordas, acima da barra de cima: só a linha de baixo separa.', 'Flush with the edges, above the top bar: only the bottom line separates it.', 'Pegado a los bordes, encima de la barra superior: solo la línea de abajo lo separa.'), app(banner({ ...release(), flush: true }))),
          ],
          2,
        ),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L('A marcação é do banner inteiro; o JavaScript só fecha e lembra.', 'The markup is the whole banner; JavaScript only closes it and remembers.', 'El marcado es el banner entero; el JavaScript solo lo cierra y lo recuerda.'),
        html: codeBlock(`<div class="ds-banner ds-banner--brand" aria-label="${msg('banner.label')}">
  <span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
  <p class="ds-banner__text">
    <strong>Lume 0.35</strong> ${L('Banner de anúncio e central de notificações.', 'Announcement banner and notification center.', 'Banner de anuncio y centro de notificaciones.')}
    <a class="ds-link" href="/novidades">${L('Ver novidades', 'See what’s new', 'Ver novedades')}</a>
  </p>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close"><ds-icon name="x" size="16"></ds-icon></button>
</div>

<script type="module">
  import { createBanner } from 'https://lumeui.dev/v/0.38/lume.js';

  // ${L('id novo a cada anúncio: quem fechou o anterior vê este', 'a new id for each announcement: whoever closed the last one sees this one', 'id nuevo en cada anuncio: quien cerró el anterior ve este')}
  createBanner(document.querySelector('.ds-banner'), { id: 'lume-0.35' });
</script>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Um recado que está na página desde o começo, não um aviso que interrompe.', 'A message that’s on the page from the start, not an interrupting alert.', 'Un mensaje que está en la página desde el principio, no un aviso que interrumpe.'),
        html: a11yList([
          [L('Região com nome', 'Named region', 'Región con nombre'), L('É role="region" com o nome “Anúncio”: leitores de tela o listam entre os pontos da página. Não use role="alert": ele não chegou agora.', 'It’s role="region" named “Announcement”: screen readers list it among the page landmarks. Don’t use role="alert": it didn’t just arrive.', 'Es role="region" con el nombre “Anuncio”: los lectores de pantalla lo listan entre los puntos de la página. No uses role="alert": no acaba de llegar.')],
          [L('Fechar', 'Close', 'Cerrar'), L('O botão diz “Fechar anúncio”. Fechado com o foco dentro, o foco vai para o que vem logo depois, e não se perde.', 'The button says “Close announcement”. Closed with focus inside, focus moves to what comes right after, so it isn’t lost.', 'El botón dice “Cerrar anuncio”. Cerrado con el foco dentro, el foco va a lo que viene justo después, y no se pierde.'), ['Tab', 'Enter']],
          [L('Não só cor', 'Not only color', 'No solo color'), L('Cada tom tem o seu ícone, e o texto diz o tipo de recado.', 'Each tone has its own icon, and the text says what kind of message it is.', 'Cada tono tiene su ícono, y el texto dice el tipo de mensaje.')],
          [L('Uma frase', 'One sentence', 'Una frase'), L('Texto curto e um link só: o banner fica em todas as telas e não pode virar leitura obrigatória.', 'Short text and one link: the banner sits on every screen and can’t become required reading.', 'Texto corto y un solo enlace: el banner está en todas las pantallas y no puede volverse lectura obligatoria.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Os mesmos tons do alerta.', 'The same tones as the alert.', 'Los mismos tonos de la alerta.'),
        html: tokenTable([
          ['color.bg.surface', L('Fundo neutro', 'Neutral background', 'Fondo neutro')],
          ['color.brand.solid', L('Fundo da novidade', 'News background', 'Fondo de novedad')],
          ['color.brand.on-solid', L('Texto e ícone da novidade', 'News text and icon', 'Texto e ícono de novedad')],
          ['color.info.subtle', L('Fundo de informação', 'Information background', 'Fondo de información')],
          ['color.warning.subtle', L('Fundo de atenção', 'Warning background', 'Fondo de atención')],
          ['color.danger.subtle', L('Fundo de erro', 'Error background', 'Fondo de error')],
          ['color.border.default', L('Contorno neutro', 'Neutral border', 'Contorno neutro')],
          ['radius.lg', L('Cantos', 'Corners', 'Esquinas')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Banner, alerta ou toast?', 'Banner, alert, or toast?', '¿Banner, alerta o toast?'),
        html: usageCards([
          ['do', L('Faça: recado para todo mundo', 'Do: messages for everyone', 'Haz: mensajes para todos'), L('Versão nova, mudança que vem aí, problema que afeta o app inteiro.', 'A new version, a change on the way, a problem affecting the whole app.', 'Versión nueva, cambio que se viene, problema que afecta a toda la app.')],
          ['dont', L('Evite: um banner por cima do outro', 'Avoid: stacking banners', 'Evita: un banner encima de otro'), L('Um por vez. Recado de uma tela só é Alerta; resposta a uma ação é Toast.', 'One at a time. A message for a single screen is an Alert; a response to an action is a Toast.', 'Uno a la vez. Un mensaje de una sola pantalla es Alerta; la respuesta a una acción es Toast.')],
          ['tip', L('Troque o id a cada anúncio', 'Change the id for each announcement', 'Cambia el id en cada anuncio'), L('Quem fechou o “lume-0.34” vê o “lume-0.35”. Mesmo id, o banner fica fechado.', 'Whoever closed “lume-0.34” sees “lume-0.35”. Same id, the banner stays closed.', 'Quien cerró “lume-0.34” ve “lume-0.35”. Mismo id, el banner queda cerrado.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'banner',
    controls: [
      { id: 'tone', label: L('Tom', 'Tone', 'Tono'), value: 'brand', options: ['neutral', 'brand', 'info', 'warning', 'danger'].map((v) => ({ value: v, label: v })) },
      { id: 'close', label: L('Fechar', 'Close', 'Cerrar'), value: 'yes', options: [{ value: 'yes', label: L('Sim', 'Yes', 'Sí') }, { value: 'no', label: L('Não', 'No', 'No') }] },
      { id: 'link', label: 'Link', value: 'yes', options: [{ value: 'yes', label: L('Sim', 'Yes', 'Sí') }, { value: 'no', label: L('Não', 'No', 'No') }] },
    ],
    text: { id: 'text', label: L('Texto', 'Text', 'Texto'), value: L('Banner de anúncio e central de notificações.', 'Announcement banner and notification center.', 'Banner de anuncio y centro de notificaciones.') },
    render: (s) =>
      `<div class="bn-play">${banner({ ...release(), tone: s.tone, text: s.text || '…', link: s.link === 'yes' ? release().link : '', closable: s.close === 'yes', attrs: ' data-play' })}
      <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm bn-play__again" data-again hidden>${icon('refresh', { size: 16 })}${L('Mostrar de novo', 'Show again', 'Mostrar de nuevo')}</button></div>`,
    mount: (preview) => {
      const again = preview.querySelector('[data-again]');
      const b = createBanner(preview.querySelector('[data-play]'), { focusAfterClose: again, onClose: () => (again.hidden = false) });
      const onAgain = () => {
        b.reset();
        again.hidden = true;
        preview.querySelector('.ds-banner__close')?.focus();
      };
      again.addEventListener('click', onAgain);
      return () => {
        again.removeEventListener('click', onAgain);
        b.destroy();
      };
    },
    code: (s) => `<div class="ds-banner${s.tone !== 'neutral' ? ` ds-banner--${s.tone}` : ''}" aria-label="${msg('banner.label')}">
  <span class="ds-banner__icon"><ds-icon name="${ICONS[s.tone]}"></ds-icon></span>
  <p class="ds-banner__text"><strong>Lume 0.35</strong> ${s.text}${s.link === 'yes' ? ` <a class="ds-link" href="/novidades">${release().link}</a>` : ''}</p>${s.close === 'yes' ? '\n  <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close"><ds-icon name="x" size="16"></ds-icon></button>' : ''}
</div>${s.close === 'yes' ? `

<script type="module">
  import { createBanner } from 'https://lumeui.dev/v/0.38/lume.js';
  createBanner(document.querySelector('.ds-banner'), { id: 'lume-0.35' });
</script>` : ''}`,
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
