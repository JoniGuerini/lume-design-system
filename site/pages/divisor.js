import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/divisor.css'];

const label = (text, start = false) => `<div class="ds-divider ds-divider--label${start ? ' ds-divider--start' : ''}"><span>${text}</span></div>`;
const vertical = '<span class="ds-divider ds-divider--vertical" role="separator" aria-orientation="vertical"></span>';

/* Um pedaço do próprio Lume, para o divisor ter o que separar */
const tokensCard = () => `<div class="dv-card">
  <p class="dv-card__title">${L('Cores', 'Colors', 'Colores')}</p>
  <p class="dv-card__text">${L('Paletas, papéis e contraste medido nos dois temas.', 'Palettes, roles, and contrast measured in both themes.', 'Paletas, roles y contraste medido en los dos temas.')}</p>
  <hr class="ds-divider">
  <p class="dv-card__title">${L('Tipografia', 'Typography', 'Tipografía')}</p>
  <p class="dv-card__text">${L('Geist Serif nos títulos, Geist Sans no texto.', 'Geist Serif for headings, Geist Sans for text.', 'Geist Serif en los títulos, Geist Sans en el texto.')}</p>
</div>`;

const metaRow = () => `<div class="dv-meta">
  <span>Lume 0.34</span>${vertical}<span>${L('52 componentes', '52 components', '52 componentes')}</span>${vertical}<span>${L('3 idiomas', '3 languages', '3 idiomas')}</span>
</div>`;

const releases = () => `<div class="dv-list">
  <p class="dv-list__item"><strong>0.34</strong> ${L('Divisor, link e progresso circular', 'Divider, link, and circular progress', 'Divisor, enlace y progreso circular')}</p>
  ${label(L('Versões anteriores', 'Earlier versions', 'Versiones anteriores'), true)}
  <p class="dv-list__item"><strong>0.33</strong> ${L('Avaliação e barra de ferramentas', 'Rating and toolbar', 'Valoración y barra de herramientas')}</p>
  <p class="dv-list__item"><strong>0.32</strong> ${L('Painéis redimensionáveis', 'Resizable panels', 'Paneles redimensionables')}</p>
</div>`;

const more = () => `<div class="dv-list">
  <p class="dv-list__item"><strong>${L('Carregar', 'Load', 'Cargar')}</strong> lumeui.dev/v/0.40/lume.css</p>
  ${label(L('ou', 'or', 'o'))}
  <p class="dv-list__item"><strong>${L('Baixar', 'Download', 'Descargar')}</strong> lume-0.40.zip</p>
</div>`;

export default function renderDivider(page) {
  return controlPage(page, {
    lead: L('Uma linha fina que separa blocos sem chamar atenção. Na horizontal entre grupos de conteúdo, na vertical entre itens de uma linha e, quando ajuda, com um rótulo no meio.', 'A thin line that separates blocks without drawing attention. Horizontal between groups of content, vertical between items in a row and, when it helps, with a label in the middle.', 'Una línea fina que separa bloques sin llamar la atención. En horizontal entre grupos de contenido, en vertical entre elementos de una fila y, cuando ayuda, con una etiqueta en el medio.'),
    stats: [
      ['JavaScript', 0],
      [L('direções', 'directions', 'direcciones'), 2],
      [L('espessura', 'thickness', 'grosor'), '1 px'],
      [L('base', 'base', 'base'), 'hr'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Só CSS. Na horizontal, o ${ic('hr')} nativo já é um separador para o leitor de tela.`, `Just CSS. Horizontally, the native ${ic('hr')} is already a separator for screen readers.`, `Solo CSS. En horizontal, el ${ic('hr')} nativo ya es un separador para el lector de pantalla.`), html: playgroundMarkup('divider') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('A linha é sempre a mesma; muda o que ela separa.', 'The line is always the same; what changes is what it separates.', 'La línea es siempre la misma; cambia lo que separa.'),
        html: examples([
          example(L('Horizontal', 'Horizontal', 'Horizontal'), 'ds-divider', L('Entre grupos de um card ou de uma lista, quando o espaço sozinho não basta.', 'Between groups in a card or list, when space alone isn’t enough.', 'Entre grupos de una tarjeta o una lista, cuando el espacio solo no basta.'), tokensCard()),
          example(L('Vertical', 'Vertical', 'Vertical'), 'ds-divider--vertical', L('Entre itens de uma linha: metadados, ações de uma barra. Ocupa a altura da linha.', 'Between items in a row: metadata, actions in a bar. It takes the row’s height.', 'Entre elementos de una fila: metadatos, acciones de una barra. Ocupa la altura de la fila.'), metaRow()),
          example(L('Com rótulo no começo', 'Label at the start', 'Con etiqueta al inicio'), 'ds-divider--label · --start', L('Abre um grupo dentro de uma lista, como um título pequeno.', 'Opens a group inside a list, like a small heading.', 'Abre un grupo dentro de una lista, como un título pequeño.'), releases()),
          example(L('Com rótulo no meio', 'Label in the middle', 'Con etiqueta en el medio'), 'ds-divider--label', L('Entre duas alternativas. Uma palavra curta basta.', 'Between two alternatives. A short word is enough.', 'Entre dos alternativas. Basta una palabra corta.'), more()),
          example(L('Esmaecido', 'Faded', 'Difuminado'), 'ds-divider--fade', L('Some nas pontas. É o divisor da sidebar, entre a navegação e o rodapé.', 'Fades at the ends. It’s the sidebar divider, between the navigation and the footer.', 'Se desvanece en los extremos. Es el divisor de la sidebar, entre la navegación y el pie.'), '<div class="dv-fade"><hr class="ds-divider ds-divider--fade"></div>'),
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L('Escolha o elemento pelo que ele significa: hr separa, o rótulo é texto.', 'Pick the element by what it means: hr separates, the label is text.', 'Elige el elemento por lo que significa: hr separa, la etiqueta es texto.'),
        html: codeBlock(`<!-- ${L('horizontal', 'horizontal', 'horizontal')} -->
<hr class="ds-divider">

<!-- ${L('vertical, dentro de um flex', 'vertical, inside a flex row', 'vertical, dentro de un flex')} -->
<span class="ds-divider ds-divider--vertical" role="separator" aria-orientation="vertical"></span>

<!-- ${L('com rótulo', 'with a label', 'con etiqueta')} -->
<div class="ds-divider ds-divider--label"><span>${L('ou', 'or', 'o')}</span></div>
<div class="ds-divider ds-divider--label ds-divider--start"><span>${L('Versões anteriores', 'Earlier versions', 'Versiones anteriores')}</span></div>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Separador é estrutura: só anuncie o que muda a leitura.', 'A separator is structure: only announce what changes how the page reads.', 'Un separador es estructura: anuncia solo lo que cambia la lectura.'),
        html: a11yList([
          [L('Horizontal', 'Horizontal', 'Horizontal'), L(`O ${ic('hr')} já é role="separator". Use-o quando a divisão faz sentido também para quem ouve a página.`, `${ic('hr')} is already role="separator". Use it when the division also makes sense to someone listening to the page.`, `El ${ic('hr')} ya es role="separator". Úsalo cuando la división también tiene sentido para quien escucha la página.`)],
          [L('Vertical', 'Vertical', 'Vertical'), L('Leva role="separator" e aria-orientation="vertical". Se for só enfeite entre metadados, troque por aria-hidden="true".', 'It carries role="separator" and aria-orientation="vertical". If it’s just decoration between metadata, use aria-hidden="true" instead.', 'Lleva role="separator" y aria-orientation="vertical". Si es solo adorno entre metadatos, cámbialo por aria-hidden="true".')],
          [L('Com rótulo', 'With a label', 'Con etiqueta'), L('É um div comum: o leitor de tela lê o texto (“ou”, “Versões anteriores”) e as linhas ficam de fora.', 'It’s a plain div: screen readers read the text (“or”, “Earlier versions”) and skip the lines.', 'Es un div común: el lector de pantalla lee el texto (“o”, “Versiones anteriores”) y omite las líneas.')],
          [L('Contraste', 'Contrast', 'Contraste'), L('A linha é decorativa e fica abaixo de 3:1 de propósito. O rótulo usa texto apagado com 4,5:1.', 'The line is decorative and stays below 3:1 on purpose. The label uses muted text at 4.5:1.', 'La línea es decorativa y queda por debajo de 3:1 a propósito. La etiqueta usa texto apagado con 4,5:1.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o divisor consome.', 'Everything the divider consumes.', 'Todo lo que consume el divisor.'),
        html: tokenTable([
          ['color.border.subtle', L('Linha', 'Line', 'Línea')],
          ['gradient.divider', L('Linha esmaecida', 'Faded line', 'Línea difuminada')],
          ['color.fg.muted', L('Rótulo', 'Label', 'Etiqueta')],
          ['text.label-sm', L('Rótulo', 'Label', 'Etiqueta')],
          ['space.150', L('Espaço entre o rótulo e as linhas', 'Space between the label and the lines', 'Espacio entre la etiqueta y las líneas')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Menos divisores, mais espaço.', 'Fewer dividers, more space.', 'Menos divisores, más espacio.'),
        html: usageCards([
          ['do', L('Faça: separe o que é diferente', 'Do: separate what’s different', 'Haz: separa lo que es distinto'), L('Um divisor entre dois assuntos ajuda; entre itens iguais de uma lista, o espaço já basta.', 'A divider between two topics helps; between identical list items, space is enough.', 'Un divisor entre dos temas ayuda; entre elementos iguales de una lista, basta el espacio.')],
          ['dont', L('Evite: divisor entre todo par', 'Avoid: a divider between every pair', 'Evita: un divisor entre cada par'), L('Linhas demais viram grade e pesam a tela. Para linhas de dados, use a Tabela.', 'Too many lines turn into a grid and weigh the screen down. For rows of data, use the Table.', 'Demasiadas líneas se vuelven cuadrícula y cargan la pantalla. Para filas de datos, usa la Tabla.')],
          ['tip', L('Rótulo curto', 'Short label', 'Etiqueta corta'), L('Uma ou duas palavras. Se o rótulo precisa de mais, é um título de seção.', 'One or two words. If the label needs more, it’s a section heading.', 'Una o dos palabras. Si la etiqueta necesita más, es un título de sección.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'divider',
    controls: [
      { id: 'kind', label: L('Forma', 'Form', 'Forma'), value: 'line', options: [{ value: 'line', label: L('Horizontal', 'Horizontal', 'Horizontal') }, { value: 'vertical', label: L('Vertical', 'Vertical', 'Vertical') }, { value: 'label', label: L('Com rótulo', 'With a label', 'Con etiqueta') }, { value: 'fade', label: L('Esmaecido', 'Faded', 'Difuminado') }] },
      { id: 'align', label: L('Rótulo', 'Label', 'Etiqueta'), value: 'center', options: [{ value: 'center', label: L('No meio', 'Middle', 'En el medio') }, { value: 'start', label: L('No começo', 'Start', 'Al inicio') }] },
    ],
    text: { id: 'text', label: L('Texto', 'Text', 'Texto'), value: L('ou', 'or', 'o') },
    render: (s) => {
      if (s.kind === 'vertical') return `<div class="fc-stage">${metaRow()}</div>`;
      const line = s.kind === 'label' ? label(s.text || L('ou', 'or', 'o'), s.align === 'start') : `<hr class="ds-divider${s.kind === 'fade' ? ' ds-divider--fade' : ''}">`;
      return `<div class="fc-stage dv-play"><p class="dv-play__text">${L('Fundamentos', 'Foundations', 'Fundamentos')}</p>${line}<p class="dv-play__text">${L('Componentes', 'Components', 'Componentes')}</p></div>`;
    },
    code: (s) =>
      s.kind === 'vertical'
        ? '<span class="ds-divider ds-divider--vertical" role="separator" aria-orientation="vertical"></span>'
        : s.kind === 'label'
          ? `<div class="ds-divider ds-divider--label${s.align === 'start' ? ' ds-divider--start' : ''}"><span>${s.text || L('ou', 'or', 'o')}</span></div>`
          : `<hr class="ds-divider${s.kind === 'fade' ? ' ds-divider--fade' : ''}">`,
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
