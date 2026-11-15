import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';
import { MOD } from '../keys.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const kbd = (k) => `<kbd class="ds-kbd">${k}</kbd>`;
const keys = (list) => `<span class="fc-keys">${list.map(kbd).join('')}</span>`;
const SETS = () => ({ single: ['Esc'], combo: [MOD, 'K'], words: ['Shift', 'F10'], arrows: ['←', '→'] });

export default function renderTecla(page) {
  return controlPage(page, {
    lead: L('Mostra uma tecla ou um atalho no meio do texto, em menus e em tooltips. Ajuda a pessoa a aprender o caminho mais rápido.', 'Shows a key or shortcut within text, in menus, and in tooltips. It helps people learn the faster way.', 'Muestra una tecla o un atajo en medio del texto, en menús y en tooltips. Ayuda a la persona a aprender el camino más rápido.'),
    stats: [
      ['JavaScript', 0],
      [L('altura', 'height', 'altura'), '20 px'],
      [L('base', 'base', 'base'), 'kbd'],
      [L('interativa', 'interactive', 'interactiva'), L('não', 'no', 'no')],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Só CSS, sobre o elemento nativo. É uma etiqueta, não um botão.', 'Just CSS, on top of the native element. It’s a label, not a button.', 'Solo CSS, sobre el elemento nativo. Es una etiqueta, no un botón.'), html: playgroundMarkup('kbd') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Uma tecla por etiqueta: um atalho de duas teclas são duas etiquetas.', 'One key per label: a two-key shortcut is two labels.', 'Una tecla por etiqueta: un atajo de dos teclas son dos etiquetas.'),
        html: examples([
          example(L('Uma tecla', 'One key', 'Una tecla'), 'ds-kbd', L('Para ações simples.', 'For simple actions.', 'Para acciones simples.'), keys(['Esc'])),
          example(L('Combinação', 'A combination', 'Combinación'), L('duas etiquetas', 'two labels', 'dos etiquetas'), L('No Mac é ⌘; no Windows e no Linux, Ctrl.', 'It’s ⌘ on Mac; Ctrl on Windows and Linux.', 'En Mac es ⌘; en Windows y Linux, Ctrl.'), keys(['⌘', 'K'])),
          example(L('No meio do texto', 'Within text', 'En medio del texto'), L('dentro de um parágrafo', 'inside a paragraph', 'dentro de un párrafo'), L('Fica alinhada com o texto.', 'It lines up with the text.', 'Queda alineada con el texto.'), `<p style="font:var(--ds-text-body-sm)">${L(`Tecle ${kbd('Esc')} para fechar.`, `Press ${kbd('Esc')} to close.`, `Pulsa ${kbd('Esc')} para cerrar.`)}</p>`),
        ], 3),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O atalho é só um atalho: o caminho normal precisa continuar existindo.', 'A shortcut is only a shortcut: the normal path must still exist.', 'El atajo es solo un atajo: el camino normal debe seguir existiendo.'),
        html: a11yList([
          [L('Elemento certo', 'The right element', 'Elemento correcto'), L(`${ic('kbd')} diz que é uma entrada de teclado.`, `${ic('kbd')} says it’s keyboard input.`, `${ic('kbd')} dice que es una entrada de teclado.`)],
          [L('Símbolos com nome', 'Symbols with names', 'Símbolos con nombre'), L(`Leitores de tela nem sempre leem ⌘. Em botões, use ${ic('aria-keyshortcuts')} para informar o atalho.`, `Screen readers don’t always read ⌘. On buttons, use ${ic('aria-keyshortcuts')} to state the shortcut.`, `Los lectores de pantalla no siempre leen ⌘. En botones, usa ${ic('aria-keyshortcuts')} para indicar el atajo.`)],
          [L('Por sistema', 'By system', 'Por sistema'), L('Mostre a tecla do sistema da pessoa: ⌘ ou Ctrl.', 'Show the key of the person’s system: ⌘ or Ctrl.', 'Muestra la tecla del sistema de la persona: ⌘ o Ctrl.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que a tecla consome.', 'Everything the key consumes.', 'Todo lo que consume la tecla.'),
        html: tokenTable([
          ['color.bg.hover', L('Fundo', 'Background', 'Fondo')],
          ['color.border.default', L('Contorno', 'Outline', 'Contorno')],
          ['color.fg.subtle', L('Texto', 'Text', 'Texto')],
          ['radius.xs', L('Cantos', 'Corners', 'Esquinas')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarla y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: ensinar atalhos', 'Do: teach shortcuts', 'Haz: enseñar atajos'), L('Em menus, tooltips e na busca, ao lado da ação.', 'In menus, tooltips, and search, beside the action.', 'En menús, tooltips y en la búsqueda, junto a la acción.')],
          ['dont', L('Evite: parecer um botão', 'Avoid: looking like a button', 'Evita: parecer un botón'), L('Clicar numa tecla desenhada não deveria fazer nada. Para ação, use Botão.', 'Clicking a drawn key shouldn’t do anything. For an action, use a Button.', 'Hacer clic en una tecla dibujada no debería hacer nada. Para una acción, usa Botón.')],
          ['tip', L('Nomes curtos', 'Short names', 'Nombres cortos'), L('Esc, Enter, Tab. Só escreva por extenso quando não houver abreviação conhecida.', 'Esc, Enter, Tab. Spell it out only when no known abbreviation exists.', 'Esc, Enter, Tab. Escribe completo solo cuando no haya abreviatura conocida.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'kbd',
    controls: [{ id: 'set', label: L('Exemplo', 'Example', 'Ejemplo'), value: 'combo', options: [{ value: 'single', label: L('Uma tecla', 'One key', 'Una tecla') }, { value: 'combo', label: L('Combinação', 'Combination', 'Combinación') }, { value: 'words', label: L('Palavras', 'Words', 'Palabras') }, { value: 'arrows', label: L('Setas', 'Arrows', 'Flechas') }] }],
    render: (s) => keys(SETS()[s.set]),
    code: (s) => SETS()[s.set].map((k) => `<kbd class="ds-kbd">${k}</kbd>`).join('\n'),
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
