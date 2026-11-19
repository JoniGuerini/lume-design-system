import { icon } from '../../ds/icons/icons.js';
import { createSearchField } from '../../ds/js/search-field.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, stageWrap, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';
import { combo } from '../keys.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/campo-de-busca.css'];

const name = () => L('Buscar componentes', 'Search components', 'Buscar componentes');
const placeholder = () => L('Buscar', 'Search', 'Buscar');

const field = ({ id, label = name(), size = 'md' }) => `<div class="ds-field${size !== 'md' ? ` ds-field--${size}` : ''}">
  ${icon('search', { size: size === 'sm' ? 16 : 18 })}
  <input class="ds-field__input" id="${id}" type="search" aria-label="${label}" placeholder="${placeholder()}" autocomplete="off">
</div>`;

/** Amostra estática (estados). */
const sample = ({ value = '', kbd = false, state = '' } = {}) => `<div class="ds-field ds-search"${state ? ` data-state="${state}"` : ''}>
  ${icon('search', { size: 18 })}
  <input class="ds-field__input" type="search" tabindex="-1" aria-label="${name()}" placeholder="${placeholder()}" value="${value}">
  ${value ? `<span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action">${icon('x', { size: 16 })}</span>` : kbd ? '<kbd class="ds-kbd ds-search__kbd">/</kbd>' : ''}
</div>`;

const RESULTS = () => [
  L('Botão', 'Button', 'Botón'),
  L('Botão dividido', 'Split button', 'Botón dividido'),
  L('Campo de busca', 'Search field', 'Campo de búsqueda'),
  L('Campo de dinheiro', 'Money field', 'Campo de dinero'),
  L('Campo de senha', 'Password field', 'Campo de contraseña'),
  L('Estado vazio', 'Empty state', 'Estado vacío'),
  L('Grupo de campos', 'Field group', 'Grupo de campos'),
];

export default function renderCampoDeBusca(page) {
  return controlPage(page, {
    lead: L('Filtra uma lista ou uma página enquanto a pessoa digita. Tem a lupa, o × para limpar e, se quiser, uma tecla que leva o foco ao campo de qualquer lugar.', 'Filters a list or a page as people type. It has the magnifier, the × to clear and, if you want, a key that brings focus to the field from anywhere.', 'Filtra una lista o una página mientras la persona escribe. Tiene la lupa, la × para borrar y, si quieres, una tecla que lleva el foco al campo desde cualquier lugar.'),
    stats: [
      [L('limpar', 'clear', 'borrar'), '× · Esc'],
      [L('atalho', 'shortcut', 'atajo'), '/'],
      ['type', 'search'],
      [L('tamanhos', 'sizes', 'tamaños'), 3],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Aperte / fora de um campo para levar o foco à busca. Esc limpa.', 'Press / outside a field to bring focus to the search. Esc clears.', 'Presiona / fuera de un campo para llevar el foco a la búsqueda. Esc borra.'), html: playgroundMarkup('search-field') },
      {
        id: 'variantes',
        title: L('Com e sem atalho', 'With and without a shortcut', 'Con y sin atajo'),
        desc: L(`Com ${ic('shortcut')}, a tecla aparece no campo vazio e some quando há texto, para dar lugar ao ×.`, `With ${ic('shortcut')}, the key shows in the empty field and goes away when there’s text, to make room for the ×.`, `Con ${ic('shortcut')}, la tecla aparece en el campo vacío y desaparece cuando hay texto, para dar lugar a la ×.`),
        html: examples([
          example(L('Filtrando uma lista', 'Filtering a list', 'Filtrando una lista'), "onChange", L('A lista acompanha cada letra. Sem resultado, diga o que foi buscado.', 'The list follows every letter. With no result, say what was searched.', 'La lista acompaña cada letra. Sin resultado, di qué se buscó.'), `<div class="sf-list">${field({ id: 'sf-list' })}<ul class="sf-results" role="list" data-results></ul><p class="sf-empty" data-results-empty hidden></p></div>`),
          example(L('Com atalho', 'With a shortcut', 'Con atajo'), "shortcut: '/'", L('Para a busca principal da tela. Só uma por página.', 'For the screen’s main search. Only one per page.', 'Para la búsqueda principal de la pantalla. Solo una por página.'), sample({ kbd: true }), { inert: true }),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('Vazio com a tecla, com texto e o ×, e em foco.', 'Empty with the key, with text and the ×, and focused.', 'Vacío con la tecla, con texto y la ×, y en foco.'),
        html: stateGrid([
          [L('Vazio', 'Empty', 'Vacío'), sample()],
          [L('Com atalho', 'With a shortcut', 'Con atajo'), sample({ kbd: true })],
          [L('Com texto', 'With text', 'Con texto'), sample({ value: L('botão', 'button', 'botón') })],
          [L('Foco', 'Focus', 'Foco'), sample({ value: L('botão', 'button', 'botón'), state: 'focus' })],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`O nome do campo vem do ${ic('aria-label')} ou de um rótulo. O placeholder não é nome.`, `The field’s name comes from ${ic('aria-label')} or a label. The placeholder isn’t a name.`, `El nombre del campo viene de ${ic('aria-label')} o de una etiqueta. El placeholder no es nombre.`),
        html: codeBlock(`<div class="ds-field">
  <ds-icon name="search" size="18"></ds-icon>
  <input class="ds-field__input" id="busca" type="search" aria-label="${L('Buscar clientes', 'Search clients', 'Buscar clientes')}" placeholder="${placeholder()}">
</div>

<script type="module">
  import { createSearchField } from 'https://lumeui.dev/v/1.12/lume.js';
  createSearchField(document.querySelector('#busca'), {
    shortcut: '/',
    onChange: (value) => filtrar(value),
  });
</script>

// React
<SearchField aria-label="${L('Buscar clientes', 'Search clients', 'Buscar clientes')}" value={busca} onChange={setBusca} shortcut="/" />`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Teclado do começo ao fim, e o atalho dito ao leitor de tela.', 'Keyboard from start to finish, and the shortcut told to screen readers.', 'Teclado de principio a fin, y el atajo dicho al lector de pantalla.'),
        html: a11yList([
          [L('Atalho anunciado', 'Shortcut announced', 'Atajo anunciado'), L(`O campo leva ${ic('aria-keyshortcuts')}. A tecla não dispara enquanto a pessoa digita em outro campo.`, `The field gets ${ic('aria-keyshortcuts')}. The key doesn’t fire while people type in another field.`, `El campo lleva ${ic('aria-keyshortcuts')}. La tecla no se dispara mientras la persona escribe en otro campo.`), ['/']],
          [L('Esc limpa', 'Esc clears', 'Esc borra'), L('Com texto, Esc limpa e fica no campo. Vazio, o Esc segue adiante e fecha o painel em volta.', 'With text, Esc clears and stays in the field. Empty, Esc moves on and closes the surrounding panel.', 'Con texto, Esc borra y queda en el campo. Vacío, el Esc sigue y cierra el panel alrededor.'), ['Esc']],
          [L('× com nome', 'A named ×', 'La × con nombre'), L('O botão de limpar se chama “Limpar busca” e devolve o foco ao campo.', 'The clear button is named “Clear search” and returns focus to the field.', 'El botón de borrar se llama “Borrar búsqueda” y devuelve el foco al campo.')],
          [L('Resultados', 'Results', 'Resultados'), L('Se a lista muda enquanto a pessoa digita, diga a contagem numa região aria-live (“3 resultados”).', 'If the list changes while people type, state the count in an aria-live region (“3 results”).', 'Si la lista cambia mientras la persona escribe, di el conteo en una región aria-live (“3 resultados”).')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Além dos tokens do Campo de texto e da Tecla.', 'On top of the Text field and Key tokens.', 'Además de los tokens del Campo de texto y de la Tecla.'),
        html: tokenTable([
          ['color.fg.muted', L('Lupa e ×', 'Magnifier and ×', 'Lupa y ×')],
          ['color.bg.hover', L('Fundo da tecla', 'Key background', 'Fondo de la tecla')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: filtrar o que está na tela', 'Do: filter what’s on screen', 'Haz: filtrar lo que está en pantalla'), L('Clientes, sessões, notas: a lista acompanha enquanto a pessoa digita.', 'Clients, sessions, notes: the list follows as people type.', 'Clientes, sesiones, notas: la lista acompaña mientras la persona escribe.')],
          ['dont', L('Evite: dois atalhos iguais', 'Avoid: two identical shortcuts', 'Evita: dos atajos iguales'), L(`Uma tecla, uma busca. Com a paleta de comandos do Lume, a busca da página fica com o / e a paleta continua no ${combo('K')}.`, `One key, one search. With Lume’s command palette, the page search keeps / and the palette stays on ${combo('K')}.`, `Una tecla, una búsqueda. Con la paleta de comandos de Lume, la búsqueda de la página se queda con / y la paleta sigue en ${combo('K')}.`)],
          ['tip', L('Busca do app inteiro?', 'Searching the whole app?', '¿Búsqueda de toda la app?'), L(`Para ir a qualquer página ou ação, use uma busca geral, como a ${combo('K')} deste site.`, `To go to any page or action, use a global search, like this site’s ${combo('K')}.`, `Para ir a cualquier página o acción, usa una búsqueda general, como la ${combo('K')} de este sitio.`)],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'search-field',
    controls: [
      { id: 'shortcut', label: L('Atalho', 'Shortcut', 'Atajo'), value: 'on', options: [{ value: 'on', label: '/' }, { value: 'off', label: L('Sem atalho', 'No shortcut', 'Sin atajo') }] },
      { id: 'size', label: L('Tamanho', 'Size', 'Tamaño'), value: 'md', options: [{ value: 'sm', label: L('Pequeno', 'Small', 'Pequeño') }, { value: 'md', label: L('Médio', 'Medium', 'Mediano') }, { value: 'lg', label: L('Grande', 'Large', 'Grande') }] },
    ],
    render: (s) => stageWrap(field({ id: 'sf-play', size: s.size })),
    mount: (preview, s) => {
      const f = createSearchField(preview.querySelector('#sf-play'), s.shortcut === 'on' ? { shortcut: '/' } : {});
      return () => f.destroy();
    },
    code: (s) => `<div class="ds-field${s.size !== 'md' ? ` ds-field--${s.size}` : ''}">
  <ds-icon name="search" size="${s.size === 'sm' ? 16 : 18}"></ds-icon>
  <input class="ds-field__input" id="busca" type="search" aria-label="${name()}" placeholder="${placeholder()}">
</div>

<script type="module">
  import { createSearchField } from 'https://lumeui.dev/v/1.12/lume.js';
  createSearchField(document.querySelector('#busca')${s.shortcut === 'on' ? ", { shortcut: '/' }" : ''});
</script>`,
  });

  // lista filtrada pelo campo
  const list = root.querySelector('[data-results]');
  const empty = root.querySelector('[data-results-empty]');
  const items = RESULTS();
  const render = (q) => {
    const query = q.trim().toLowerCase();
    const found = items.filter((t) => t.toLowerCase().includes(query));
    list.innerHTML = found.map((t) => `<li>${t}</li>`).join('');
    empty.hidden = found.length > 0;
    empty.textContent = L(`Nada encontrado para “${q}”.`, `Nothing found for “${q}”.`, `Nada encontrado para “${q}”.`);
  };
  render('');
  const fields = [
    createSearchField(root.querySelector('#sf-list'), { onChange: render }),
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
