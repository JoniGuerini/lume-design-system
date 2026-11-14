import { icon } from '../../ds/icons/icons.js';
import { msg } from '../../ds/js/i18n.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/link.css'];

const ext = () => `${icon('external-link', { size: 16, className: 'ds-link__icon' })}<span class="ds-visually-hidden">${msg('link.external')}</span>`;
const arrow = () => icon('arrow-right', { size: 16, className: 'ds-link__icon' }).replace('<svg', '<svg data-arrow');

const inline = ({ state = '', cls = '' } = {}) => `<a class="ds-link${cls}" href="#/fundamentos/cores"${state ? ` data-state="${state}"` : ''}>${L('cores', 'colors', 'colores')}</a>`;
const standalone = ({ state = '', muted = false } = {}) => `<a class="ds-link ds-link--standalone${muted ? ' ds-link--muted' : ''}" href="#/novidades"${state ? ` data-state="${state}"` : ''}>${L('Ver todas as versões', 'See all versions', 'Ver todas las versiones')}${arrow()}</a>`;
const geist = () => `<a class="ds-link" href="https://vercel.com/font" target="_blank" rel="noopener">Geist${ext()}</a>`;

const paragraph = () => `<p class="lk-text">${L(`Os componentes usam só tokens semânticos. Veja as ${inline()} e a ${'<a class="ds-link" href="#/fundamentos/tipografia">tipografia</a>'} para entender os papéis.`, `Components only use semantic tokens. See ${inline()} and ${'<a class="ds-link" href="#/fundamentos/tipografia">typography</a>'} to understand the roles.`, `Los componentes usan solo tokens semánticos. Mira los ${inline()} y la ${'<a class="ds-link" href="#/fundamentos/tipografia">tipografía</a>'} para entender los roles.`)}</p>`;

export default function renderLink(page) {
  return controlPage(page, {
    lead: L('Leva a outra página. No meio do texto, sublinhado; solto, no fim de um card ou de uma lista, com uma seta. Quando sai do site, o ícone de link externo avisa antes do clique.', 'Takes you to another page. Inside text, underlined; standalone, at the end of a card or list, with an arrow. When it leaves the site, the external-link icon says so before the click.', 'Lleva a otra página. En medio del texto, subrayado; suelto, al final de una tarjeta o lista, con una flecha. Cuando sale del sitio, el ícono de enlace externo lo avisa antes del clic.'),
    stats: [
      ['JavaScript', 0],
      [L('formas', 'forms', 'formas'), 2],
      [L('tons', 'tones', 'tonos'), 2],
      [L('base', 'base', 'base'), 'a'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Só CSS, sobre o ${ic('a')} nativo. Link é para ir a algum lugar; para fazer algo, use um botão.`, `Just CSS, on top of native ${ic('a')}. A link goes somewhere; to do something, use a button.`, `Solo CSS, sobre el ${ic('a')} nativo. Un enlace es para ir a algún lugar; para hacer algo, usa un botón.`), html: playgroundMarkup('link') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('A forma vem de onde o link está, não da importância dele.', 'The form comes from where the link sits, not from how important it is.', 'La forma depende de dónde está el enlace, no de su importancia.'),
        html: examples([
          example(L('No texto', 'Inline', 'En el texto'), 'ds-link', L('Sublinhado, para se destacar das palavras ao redor sem depender só da cor.', 'Underlined, so it stands out from the surrounding words without relying on color alone.', 'Subrayado, para destacarse de las palabras alrededor sin depender solo del color.'), paragraph()),
          example(L('Solto', 'Standalone', 'Suelto'), 'ds-link--standalone', L('No fim de um card ou de uma lista. A seta anda um pouco com o mouse; o sublinhado aparece junto.', 'At the end of a card or list. The arrow moves a little on hover; the underline appears with it.', 'Al final de una tarjeta o lista. La flecha se mueve un poco con el ratón; el subrayado aparece con ella.'), `<div class="lk-card"><p class="lk-card__title">${L('Novidades', 'What’s new', 'Novedades')}</p><p class="lk-text">${L('Divisor, link e progresso circular chegaram na 0.34.', 'Divider, link, and circular progress arrived in 0.34.', 'Divisor, enlace y progreso circular llegaron en la 0.34.')}</p>${standalone()}</div>`),
          example(L('Externo', 'External', 'Externo'), 'target="_blank"', L('O ícone mostra que sai do site, e o texto escondido avisa o leitor de tela que abre em nova aba.', 'The icon shows that it leaves the site, and hidden text tells screen readers it opens in a new tab.', 'El ícono muestra que sale del sitio, y un texto oculto avisa al lector de pantalla que se abre en una pestaña nueva.'), `<p class="lk-text">${L(`Os títulos e o texto do Lume usam a ${geist()}.`, `Lume’s headings and text use ${geist()}.`, `Los títulos y el texto de Lume usan ${geist()}.`)}</p>`),
          example(L('Apagado', 'Muted', 'Apagado'), 'ds-link--muted', L('Em rodapés e metadados, onde o link não pode competir com o conteúdo.', 'In footers and metadata, where the link shouldn’t compete with the content.', 'En pies y metadatos, donde el enlace no debe competir con el contenido.'), `<p class="lk-text lk-text--muted">${L('Atualizado em 14 nov', 'Updated Nov 14', 'Actualizado el 14 nov')} · <a class="ds-link ds-link--muted" href="#/novidades">${L('ver histórico', 'see history', 'ver historial')}</a></p>`),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('No hover a cor escurece e o sublinhado fica inteiro; o foco usa o anel de todo o Lume.', 'On hover the color deepens and the underline turns solid; focus uses the ring used across Lume.', 'Con el ratón el color se oscurece y el subrayado queda entero; el foco usa el anillo de todo Lume.'),
        html: stateGrid([
          [L('Padrão', 'Default', 'Predeterminado'), `<p class="lk-text">${inline()}</p>`],
          [L('Com o mouse', 'Hover', 'Con el ratón'), `<p class="lk-text">${inline({ state: 'hover' })}</p>`],
          [L('Com foco', 'Focus', 'Con foco'), `<p class="lk-text">${inline({ state: 'focus' })}</p>`],
          [L('Solto, padrão', 'Standalone, default', 'Suelto, predeterminado'), standalone()],
          [L('Solto, com o mouse', 'Standalone, hover', 'Suelto, con el ratón'), standalone({ state: 'hover' })],
          [L('Desativado', 'Disabled', 'Desactivado'), `<a class="ds-link ds-link--standalone" aria-disabled="true">${L('Ver todas as versões', 'See all versions', 'Ver todas las versiones')}${arrow()}</a>`],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L('O ícone vem da biblioteca do Lume. Para o externo, o texto escondido também.', 'The icon comes from Lume’s library. For external links, the hidden text too.', 'El ícono viene de la biblioteca de Lume. Para el externo, el texto oculto también.'),
        html: codeBlock(`<a class="ds-link" href="/cores">${L('cores', 'colors', 'colores')}</a>

<a class="ds-link ds-link--standalone" href="/novidades">
  ${L('Ver todas as versões', 'See all versions', 'Ver todas las versiones')}
  <ds-icon name="arrow-right" class="ds-link__icon" data-arrow></ds-icon>
</a>

<a class="ds-link" href="https://vercel.com/font" target="_blank" rel="noopener">
  Geist<ds-icon name="external-link" class="ds-link__icon"></ds-icon>
  <span class="ds-visually-hidden">${msg('link.external')}</span>
</a>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Um link diz para onde vai, mesmo fora do texto.', 'A link says where it goes, even out of context.', 'Un enlace dice adónde va, incluso fuera del texto.'),
        html: a11yList([
          [L('Texto que diz o destino', 'Text that names the destination', 'Texto que dice el destino'), L('“Ver todas as versões”, não “clique aqui”: leitores de tela listam os links soltos da página.', '“See all versions”, not “click here”: screen readers list a page’s links out of context.', '“Ver todas las versiones”, no “haz clic aquí”: los lectores de pantalla listan los enlaces sueltos de la página.')],
          [L('Não só cor', 'Not only color', 'No solo color'), L('No meio do texto, o sublinhado fica sempre: a cor do link tem 4,5:1 com o fundo, mas não com o texto ao lado.', 'Inside text, the underline always stays: the link color has 4.5:1 against the background, but not against the text next to it.', 'En medio del texto, el subrayado queda siempre: el color del enlace tiene 4,5:1 con el fondo, pero no con el texto al lado.')],
          [L('Nova aba avisada', 'New tab announced', 'Pestaña nueva avisada'), L(`Com ${ic('target="_blank"')}, o ícone e o texto escondido avisam antes. Use ${ic('rel="noopener"')}.`, `With ${ic('target="_blank"')}, the icon and hidden text warn beforehand. Use ${ic('rel="noopener"')}.`, `Con ${ic('target="_blank"')}, el ícono y el texto oculto avisan antes. Usa ${ic('rel="noopener"')}.`)],
          [L('Teclado', 'Keyboard', 'Teclado'), L('Tab chega ao link e Enter abre. O ícone tem aria-hidden.', 'Tab reaches the link and Enter opens it. The icon has aria-hidden.', 'Tab llega al enlace y Enter lo abre. El ícono tiene aria-hidden.'), ['Tab', 'Enter']],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o link consome.', 'Everything the link consumes.', 'Todo lo que consume el enlace.'),
        html: tokenTable([
          ['color.fg.link', L('Texto', 'Text', 'Texto')],
          ['color.fg.link-hover', L('Texto com o mouse', 'Text on hover', 'Texto con el ratón')],
          ['color.fg.muted', L('Tom apagado', 'Muted tone', 'Tono apagado')],
          ['color.fg.disabled', L('Desativado', 'Disabled', 'Desactivado')],
          ['color.border.focus', L('Foco do teclado', 'Keyboard focus', 'Foco del teclado')],
          ['text.label-md', L('Link solto', 'Standalone link', 'Enlace suelto')],
          ['duration.fast', L('Troca de cor e seta', 'Color change and arrow', 'Cambio de color y flecha')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Link ou botão?', 'Link or button?', '¿Enlace o botón?'),
        html: usageCards([
          ['do', L('Faça: link para ir', 'Do: links to go', 'Haz: enlace para ir'), L('Se muda o endereço da página, é link: dá para abrir em outra aba e copiar.', 'If it changes the page address, it’s a link: it can open in another tab and be copied.', 'Si cambia la dirección de la página, es un enlace: se puede abrir en otra pestaña y copiar.')],
          ['dont', L('Evite: link que faz uma ação', 'Avoid: links that perform actions', 'Evita: enlaces que hacen una acción'), L('Salvar, excluir e abrir um modal são botões. Para a ação discreta, use a Ação inline.', 'Saving, deleting, and opening a modal are buttons. For a subtle action, use the Inline action.', 'Guardar, eliminar y abrir un modal son botones. Para una acción discreta, usa la Acción inline.')],
          ['tip', L('Externo só quando sai', 'External only when it leaves', 'Externo solo cuando sale'), L('Páginas do mesmo site abrem na mesma aba e sem ícone.', 'Pages on the same site open in the same tab, with no icon.', 'Las páginas del mismo sitio se abren en la misma pestaña y sin ícono.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'link',
    controls: [
      { id: 'form', label: L('Forma', 'Form', 'Forma'), value: 'inline', options: [{ value: 'inline', label: L('No texto', 'Inline', 'En el texto') }, { value: 'standalone', label: L('Solto', 'Standalone', 'Suelto') }] },
      { id: 'tone', label: L('Tom', 'Tone', 'Tono'), value: 'link', options: [{ value: 'link', label: L('Link', 'Link', 'Enlace') }, { value: 'muted', label: L('Apagado', 'Muted', 'Apagado') }] },
      { id: 'target', label: L('Destino', 'Destination', 'Destino'), value: 'here', options: [{ value: 'here', label: L('Neste site', 'This site', 'Este sitio') }, { value: 'out', label: L('Externo', 'External', 'Externo') }] },
    ],
    text: { id: 'text', label: L('Texto', 'Text', 'Texto'), value: L('Ver todas as versões', 'See all versions', 'Ver todas las versiones') },
    render: (s) => {
      const cls = `ds-link${s.form === 'standalone' ? ' ds-link--standalone' : ''}${s.tone === 'muted' ? ' ds-link--muted' : ''}`;
      const out = s.target === 'out';
      const end = out ? ext() : s.form === 'standalone' ? arrow() : '';
      const a = `<a class="${cls}" href="${out ? 'https://vercel.com/font' : '#/novidades'}"${out ? ' target="_blank" rel="noopener"' : ''}>${s.text || 'Link'}${end}</a>`;
      return s.form === 'inline' ? `<p class="lk-text lk-play">${L('Na 0.34 chegaram três peças.', 'Three pieces arrived in 0.34.', 'En la 0.34 llegaron tres piezas.')} ${a}.</p>` : a;
    },
    code: (s) => {
      const cls = `ds-link${s.form === 'standalone' ? ' ds-link--standalone' : ''}${s.tone === 'muted' ? ' ds-link--muted' : ''}`;
      const out = s.target === 'out';
      const end = out ? `\n  <ds-icon name="external-link" class="ds-link__icon"></ds-icon>\n  <span class="ds-visually-hidden">${msg('link.external')}</span>` : s.form === 'standalone' ? '\n  <ds-icon name="arrow-right" class="ds-link__icon" data-arrow></ds-icon>' : '';
      return `<a class="${cls}" href="${out ? 'https://vercel.com/font' : '/novidades'}"${out ? ' target="_blank" rel="noopener"' : ''}>${end ? `\n  ${s.text || 'Link'}${end}\n` : s.text || 'Link'}</a>`;
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
