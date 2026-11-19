import { createCarousel } from '../../ds/js/carousel.js';
import { icon } from '../../ds/icons/icons.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/carrossel.css'];

/* O conteúdo dos exemplos é o próprio Lume: nada de tarefa inventada. */
const SLIDES = () => [
  ['01', L('Tokens', 'Tokens', 'Tokens'), L('Uma fonte só para cores, espaços e tipos', 'One source for colors, spacing, and type', 'Una sola fuente para colores, espacios y tipos'), L('Mudou o token, mudou o site, o Storybook e o React.', 'Change the token and the site, Storybook, and React change too.', 'Cambia el token y cambian el sitio, Storybook y React.')],
  ['02', L('Componentes', 'Components', 'Componentes'), L('Peças prontas para montar telas', 'Ready-made pieces to build screens', 'Piezas listas para armar pantallas'), L('Cada uma com estados, teclado e os três idiomas.', 'Each with states, keyboard, and all three languages.', 'Cada una con estados, teclado y los tres idiomas.')],
  ['03', L('Padrões', 'Patterns', 'Patrones'), L('Telas inteiras, já resolvidas', 'Whole screens, already solved', 'Pantallas enteras, ya resueltas'), L('Login, busca, formulários e app shell.', 'Login, search, forms, and the app shell.', 'Login, búsqueda, formularios y app shell.')],
  ['04', L('Idiomas', 'Languages', 'Idiomas'), L('Português, inglês e espanhol', 'Portuguese, English, and Spanish', 'Portugués, inglés y español'), L('Datas, números e moedas seguem o idioma escolhido.', 'Dates, numbers, and currencies follow the chosen language.', 'Fechas, números y monedas siguen el idioma elegido.')],
  ['05', L('Temas', 'Themes', 'Temas'), L('Claro e escuro, lado a lado', 'Light and dark, side by side', 'Claro y oscuro, lado a lado'), L('O contraste é medido no build, nos dois.', 'Contrast is measured at build time, in both.', 'El contraste se mide en el build, en los dos.')],
];

const slide = ([n, eyebrow, title, text], { compact = false } = {}) => `<div class="ds-carousel__slide">
      <article class="ds-carousel__card${compact ? ' cr-card--compact' : ''}">
        <p class="ds-carousel__eyebrow">${n} · ${eyebrow}</p>
        <div><h3 class="ds-carousel__title">${title}</h3>${compact ? '' : `<p class="ds-carousel__text">${text}</p>`}</div>
      </article>
    </div>`;

const carousel = (attrs, { count = 5, compact = false, cls = '' } = {}) => `<section class="ds-carousel${cls}" aria-label="${L('Destaques do Lume', 'Lume highlights', 'Destacados de Lume')}" ${attrs}>
    <div class="ds-carousel__viewport">
      ${SLIDES().slice(0, count).map((s) => slide(s, { compact })).join('')}
    </div>
  </section>`;

/* Barra montada à mão para a grade de estados (sem JS). */
const bar = ({ dot = '', prev = '', next = '', current = 0 } = {}) => `<div class="ds-carousel__bar">
    <div class="ds-carousel__dots">${[0, 1, 2, 3].map((i) => `<button type="button" class="ds-carousel__dot"${i === current ? ' aria-current="true"' : ''}${i === 1 && dot ? ` data-state="${dot}"` : ''} aria-label="${i + 1}"></button>`).join('')}</div>
    <span class="ds-carousel__count">${current + 1} / 4</span>
    <div class="ds-carousel__nav">
      <button type="button" class="ds-icon-btn ds-icon-btn--muted"${prev === 'disabled' ? ' disabled' : prev ? ` data-state="${prev}"` : ''} aria-label="prev">${icon('chevron-left', { size: 20 })}</button>
      <button type="button" class="ds-icon-btn ds-icon-btn--muted"${next ? ` data-state="${next}"` : ''} aria-label="next">${icon('chevron-right', { size: 20 })}</button>
    </div>
  </div>`;

const perViewStyle = (n) => (n > 1 ? ` style="--ds-carousel-per-view: ${n}"` : '');

export default function renderCarousel(page) {
  return controlPage(page, {
    lead: L('Mostra destaques ou uma galeria um por vez, num espaço só. Use quando a ordem importa menos que o espaço; se tudo é importante, prefira uma grade.', 'Shows highlights or a gallery one at a time, in a single space. Use it when space matters more than order; if everything matters, prefer a grid.', 'Muestra destacados o una galería de a uno, en un solo espacio. Úsalo cuando el espacio importa más que el orden; si todo es importante, prefiere una cuadrícula.'),
    stats: [
      [L('por vista', 'per view', 'por vista'), '1+'],
      [L('teclas', 'keys', 'teclas'), 4],
      [L('ponto', 'dot', 'punto'), '6 px'],
      [L('arrastar', 'swipe', 'deslizar'), L('nativo', 'native', 'nativo')],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Use as setas, os pontos ou arraste. Com a passagem automática, o mouse em cima ou o foco dentro param o carrossel.', 'Use the arrows, the dots, or swipe. With autoplay, hovering or focusing inside stops the carousel.', 'Usa las flechas, los puntos o desliza. Con el paso automático, el ratón encima o el foco dentro detienen el carrusel.'), html: playgroundMarkup('carousel', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L(`Quantos aparecem de uma vez vem do CSS, em ${ic('--ds-carousel-per-view')}: dá para mudar por largura de tela sem mexer no JavaScript.`, `How many show at once comes from CSS, in ${ic('--ds-carousel-per-view')}: you can change it per screen width without touching JavaScript.`, `Cuántos se ven a la vez viene del CSS, en ${ic('--ds-carousel-per-view')}: se puede cambiar por ancho de pantalla sin tocar el JavaScript.`),
        html: `<div class="cr-variants">${examples(
          [
            example(L('Destaque', 'Highlight', 'Destacado'), 'ds-carousel', L('Um slide por vez, com título e texto. Bom para novidades e boas-vindas.', 'One slide at a time, with title and text. Good for news and welcomes.', 'Una diapositiva a la vez, con título y texto. Bueno para novedades y bienvenidas.'), carousel('data-demo="highlight"', { count: 4 })),
            example(L('Galeria', 'Gallery', 'Galería'), 'ds-carousel--peek', L('Dois por vez (um no celular), com a ponta do próximo à vista: a pessoa vê que tem mais.', 'Two at once (one on phones), with the edge of the next one in view: people can see there’s more.', 'Dos a la vez (uno en el móvil), con el borde del siguiente a la vista: la persona ve que hay más.'), carousel('data-demo="gallery"', { compact: true, cls: ' ds-carousel--peek cr-gallery' })),
          ],
          1,
        )}</div>`,
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L(`O ponto atual estica e escurece: muda de forma, não só de cor. Sem ${ic('loop')}, a seta da ponta fica desativada.`, `The current dot stretches and darkens: it changes shape, not just color. Without ${ic('loop')}, the arrow at the end is disabled.`, `El punto actual se estira y oscurece: cambia de forma, no solo de color. Sin ${ic('loop')}, la flecha del extremo queda desactivada.`),
        html: stateGrid([
          [L('Início, sem volta', 'Start, no loop', 'Inicio, sin vuelta'), bar({ prev: 'disabled' })],
          [L('Ponto com o mouse', 'Dot on hover', 'Punto con el ratón'), bar({ dot: 'hover', prev: 'disabled' })],
          [L('Seta com o mouse', 'Arrow on hover', 'Flecha con el ratón'), bar({ current: 1, next: 'hover' })],
          [L('Seta com foco', 'Arrow with focus', 'Flecha con foco'), bar({ current: 1, next: 'focus' })],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L('Os slides são seus; o carrossel põe a barra de baixo, o teclado e os rótulos.', 'The slides are yours; the carousel adds the bottom bar, the keyboard, and the labels.', 'Las diapositivas son tuyas; el carrusel pone la barra de abajo, el teclado y las etiquetas.'),
        html: codeBlock(`<section class="ds-carousel" aria-label="${L('Destaques', 'Highlights', 'Destacados')}">
  <div class="ds-carousel__viewport">
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
  </div>
</section>

<script type="module">
  import { createCarousel } from 'https://lumeui.dev/v/1.14/lume.js';

  const carousel = createCarousel(document.querySelector('.ds-carousel'), {
    loop: true,
    onChange: (index) => console.log(index),
  });
  carousel.next();
</script>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Segue o padrão de carrossel da ARIA. Dê um nome ao carrossel com aria-label.', 'It follows the ARIA carousel pattern. Give the carousel a name with aria-label.', 'Sigue el patrón de carrusel de ARIA. Dale un nombre al carrusel con aria-label.'),
        html: a11yList([
          [L('Nome e papel', 'Name and role', 'Nombre y rol'), L('O leitor de tela diz “carrossel” e, em cada slide, “2 de 5”.', 'Screen readers say “carousel” and, on each slide, “2 of 5”.', 'El lector de pantalla dice “carrusel” y, en cada diapositiva, “2 de 5”.')],
          [L('Só o que está à vista', 'Only what’s in view', 'Solo lo que está a la vista'), L('Os slides fora da vista ficam inert: o Tab não cai num link escondido.', 'Slides out of view are inert: Tab never lands on a hidden link.', 'Las diapositivas fuera de la vista quedan inert: el Tab no cae en un enlace oculto.')],
          [L('Teclado', 'Keyboard', 'Teclado'), L('Com o foco na área dos slides, as setas trocam e Home e End vão às pontas.', 'With focus on the slide area, arrow keys switch and Home and End go to the ends.', 'Con el foco en el área de las diapositivas, las flechas cambian y Home y End van a los extremos.'), ['←', '→', 'Home', 'End']],
          [L('Passagem automática', 'Autoplay', 'Paso automático'), L('Sempre com o botão de pausa, para com o mouse ou o foco e não começa com movimento reduzido. Enquanto passa sozinho, o leitor de tela não anuncia cada troca.', 'Always with a pause button, it stops on hover or focus and never starts with reduced motion. While it plays, screen readers don’t announce each change.', 'Siempre con botón de pausa, se detiene con el ratón o el foco y no empieza con movimiento reducido. Mientras pasa solo, el lector de pantalla no anuncia cada cambio.')],
          [L('Pontos', 'Dots', 'Puntos'), L('Cada ponto é um botão “Ir para o slide 3”, com aria-current no atual e área de toque maior que o desenho.', 'Each dot is a “Go to slide 3” button, with aria-current on the current one and a touch area bigger than the drawing.', 'Cada punto es un botón “Ir a la diapositiva 3”, con aria-current en el actual y un área táctil mayor que el dibujo.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o carrossel consome.', 'Everything the carousel consumes.', 'Todo lo que consume el carrusel.'),
        html: tokenTable([
          ['color.fg.default', L('Ponto atual e título', 'Current dot and title', 'Punto actual y título')],
          ['color.border.strong', L('Pontos', 'Dots', 'Puntos')],
          ['color.fg.muted', L('Ponto com o mouse, contagem e texto', 'Dot on hover, count, and text', 'Punto con el ratón, conteo y texto')],
          ['color.bg.surface', L('Fundo do slide de destaque', 'Highlight slide background', 'Fondo de la diapositiva de destacado')],
          ['color.border.subtle', L('Contorno do slide', 'Slide outline', 'Contorno de la diapositiva')],
          ['color.border.focus', L('Foco na área dos slides', 'Focus on the slide area', 'Foco en el área de las diapositivas')],
          ['space.150', L('Espaço entre slides', 'Space between slides', 'Espacio entre diapositivas')],
          ['radius.xl', L('Cantos da área e do slide', 'Area and slide corners', 'Esquinas del área y la diapositiva')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: de 3 a 7 slides', 'Do: 3 to 7 slides', 'Haz: de 3 a 7 diapositivas'), L('Coisas parecidas, em que ver uma de cada vez não atrapalha.', 'Similar things, where seeing one at a time doesn’t get in the way.', 'Cosas parecidas, en las que ver una a la vez no estorba.')],
          ['dont', L('Evite: o essencial escondido', 'Avoid: hiding what matters', 'Evita: lo esencial escondido'), L('Pouca gente passa do segundo slide. O que todo mundo precisa ver vai fora do carrossel.', 'Few people go past the second slide. What everyone needs to see goes outside the carousel.', 'Poca gente pasa de la segunda diapositiva. Lo que todos necesitan ver va fuera del carrusel.')],
          ['tip', L('Passar sozinho, só se precisar', 'Autoplay only if needed', 'Paso automático, solo si hace falta'), L('Mexer sozinho tira a atenção da leitura. Se usar, deixe pelo menos 5 segundos por slide.', 'Moving on its own pulls attention away from reading. If you use it, allow at least 5 seconds per slide.', 'Moverse solo quita atención a la lectura. Si lo usas, deja al menos 5 segundos por diapositiva.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'carousel',
    controls: [
      { id: 'perView', label: L('Por vista', 'Per view', 'Por vista'), value: '1', options: ['1', '2', '3'].map((v) => ({ value: v, label: v })) },
      { id: 'peek', label: L('Ponta do próximo', 'Next one’s edge', 'Borde del siguiente'), value: 'off', options: [{ value: 'off', label: L('Não', 'No', 'No') }, { value: 'on', label: L('Sim', 'Yes', 'Sí') }] },
      { id: 'loop', label: L('Voltar ao início', 'Loop', 'Volver al inicio'), value: 'off', options: [{ value: 'off', label: L('Não', 'No', 'No') }, { value: 'on', label: L('Sim', 'Yes', 'Sí') }] },
      { id: 'autoplay', label: L('Passar sozinho', 'Autoplay', 'Paso automático'), value: 'off', options: [{ value: 'off', label: L('Não', 'No', 'No') }, { value: 'on', label: L('A cada 5 s', 'Every 5 s', 'Cada 5 s') }] },
    ],
    render: (s) => carousel(`data-play${perViewStyle(Number(s.perView))}`, { compact: s.perView !== '1', cls: s.peek === 'on' ? ' ds-carousel--peek' : '' }),
    mount: (preview, s) => {
      const c = createCarousel(preview.querySelector('[data-play]'), { loop: s.loop === 'on', autoplay: s.autoplay === 'on' ? 5000 : 0 });
      return () => c.destroy();
    },
    code: (s) => `<section class="ds-carousel${s.peek === 'on' ? ' ds-carousel--peek' : ''}" aria-label="${L('Destaques', 'Highlights', 'Destacados')}"${perViewStyle(Number(s.perView))}>
  <div class="ds-carousel__viewport">
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
  </div>
</section>

<script type="module">
  import { createCarousel } from 'https://lumeui.dev/v/1.14/lume.js';
  createCarousel(document.querySelector('.ds-carousel')${s.loop === 'on' || s.autoplay === 'on' ? `, {${s.loop === 'on' ? '\n    loop: true,' : ''}${s.autoplay === 'on' ? '\n    autoplay: 5000,' : ''}\n  }` : ''});
</script>`,
  });
  const demos = [createCarousel(root.querySelector('[data-demo="highlight"]')), createCarousel(root.querySelector('[data-demo="gallery"]'))];
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    demos.forEach((c) => c.destroy());
    unmountCopy();
    unmountNav();
  };
}
