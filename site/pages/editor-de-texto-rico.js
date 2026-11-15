import { icon } from '../../ds/icons/icons.js';
import { createEditor } from '../../ds/js/editor.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/editor-de-texto-rico.css'];

/* O texto dos exemplos é o próprio Lume: a nota de uma versão */
const NOTE = () =>
  L(
    '<h2>Lume 0.37</h2><p>Mudar a ordem e o lugar das coisas, com o <strong>mouse</strong>, o <strong>toque</strong> ou o <strong>teclado</strong>.</p><ul><li>Lista arrastável, com alça ou sem</li><li>Kanban, com colunas que trocam cartões</li></ul><blockquote>Cada passo é anunciado para o leitor de tela.</blockquote><p>Veja tudo em <a href="#/novidades">Novidades</a>.</p>',
    '<h2>Lume 0.37</h2><p>Change the order and place of things, with the <strong>mouse</strong>, <strong>touch</strong>, or <strong>keyboard</strong>.</p><ul><li>Sortable list, with or without a handle</li><li>Kanban, with columns that exchange cards</li></ul><blockquote>Each step is announced to screen readers.</blockquote><p>See everything in <a href="#/novidades">What’s new</a>.</p>',
    '<h2>Lume 0.37</h2><p>Cambiar el orden y el lugar de las cosas, con el <strong>ratón</strong>, el <strong>toque</strong> o el <strong>teclado</strong>.</p><ul><li>Lista ordenable, con o sin agarre</li><li>Kanban, con columnas que intercambian tarjetas</li></ul><blockquote>Cada paso se anuncia al lector de pantalla.</blockquote><p>Mira todo en <a href="#/novidades">Novedades</a>.</p>',
  );

const SHORT = () => L('<p>O cartão da <strong>última versão</strong> no Início lê o resumo do changelog.</p>', 'The <strong>latest version</strong> card on Home reads the changelog summary.', 'La tarjeta de la <strong>última versión</strong> en Inicio lee el resumen del changelog.');

const label = () => L('Nota da versão', 'Release note', 'Nota de la versión');
const placeholder = () => L('Escreva a nota da versão…', 'Write the release note…', 'Escribe la nota de la versión…');

const editor = ({ html = '', tools = '', borderless = false, attrs = '', ph = '', aria = label() } = {}) =>
  `<div class="ds-editor${borderless ? ' ds-editor--borderless' : ''}" data-editor${tools ? ` data-tools="${tools}"` : ''}${ph ? ` data-placeholder="${ph}"` : ''}${attrs}><div class="ds-editor__content" aria-label="${aria}">${html}</div></div>`;

/* estados: a marcação que o JS monta, sem ligar */
const staticEditor = (attrs = '', html = SHORT(), extra = '') =>
  `<div class="ds-editor ed-state"${attrs}><div class="ds-toolbar ds-toolbar--plain ds-editor__toolbar"><div class="ds-toolbar__group">${['bold', 'italic', 'link']
    .map((t, i) => `<span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="${i === 0}">${icon(t, { size: 18 })}</span>`)
    .join('')}</div></div><div class="ds-editor__content${extra}" data-placeholder="${placeholder()}">${html}</div></div>`;

export default function renderEditor(page) {
  return controlPage(page, {
    lead: L('Um campo de texto que formata: títulos, listas, citações, negrito, itálico e links, com a barra de ferramentas do Lume. Sem dependências, sobre o contenteditable do navegador, e o HTML que sai é sempre limpo.', 'A text field that formats: headings, lists, quotes, bold, italic, and links, with Lume’s toolbar. No dependencies, built on the browser’s contenteditable, and the HTML it produces is always clean.', 'Un campo de texto que da formato: títulos, listas, citas, negrita, cursiva y enlaces, con la barra de herramientas de Lume. Sin dependencias, sobre el contenteditable del navegador, y el HTML que sale siempre está limpio.'),
    stats: [
      [L('ferramentas', 'tools', 'herramientas'), 14],
      [L('atalhos de Markdown', 'Markdown shortcuts', 'atajos de Markdown'), 5],
      [L('tags no HTML', 'HTML tags', 'etiquetas en el HTML'), 15],
      [L('dependências', 'dependencies', 'dependencias'), 0],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L(`Escreva, selecione e formate. No começo de uma linha, ${ic('# ')} vira título e ${ic('- ')} vira lista; ${ic('Ctrl')} + ${ic('K')} põe um link.`, `Write, select, and format. At the start of a line, ${ic('# ')} becomes a heading and ${ic('- ')} a list; ${ic('Ctrl')} + ${ic('K')} adds a link.`, `Escribe, selecciona y da formato. Al comienzo de una línea, ${ic('# ')} se vuelve título y ${ic('- ')} lista; ${ic('Ctrl')} + ${ic('K')} agrega un enlace.`), html: playgroundMarkup('editor', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L(`A barra mostra os grupos que você pedir em ${ic('tools')}, na ordem.`, `The toolbar shows the groups you ask for in ${ic('tools')}, in order.`, `La barra muestra los grupos que pidas en ${ic('tools')}, en orden.`),
        html: examples(
          [
            example(L('Mínimo', 'Minimal', 'Mínimo'), "tools: ['marks', 'link']", L('Para um comentário ou uma descrição curta: só negrito, itálico, sublinhado, riscado e link.', 'For a comment or a short description: just bold, italic, underline, strikethrough, and link.', 'Para un comentario o una descripción corta: solo negrita, cursiva, subrayado, tachado y enlace.'), editor({ html: SHORT(), tools: 'marks,link', aria: L('Comentário', 'Comment', 'Comentario') })),
            example(L('Sem contorno', 'Borderless', 'Sin contorno'), 'ds-editor--borderless', L('Quando o editor é a própria página, como uma nota ou um documento: sem caixa em volta.', 'When the editor is the page itself, like a note or a document: no box around it.', 'Cuando el editor es la página misma, como una nota o un documento: sin caja alrededor.'), `<div class="ed-paper">${editor({ html: SHORT(), tools: 'history,marks,blocks', borderless: true })}</div>`),
          ],
          2,
        ),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('O contorno e o foco são os do Campo. Na barra, o botão apertado mostra a formatação de onde está o cursor.', 'The border and focus are the Field’s. In the toolbar, the pressed button shows the formatting where the cursor is.', 'El contorno y el foco son los del Campo. En la barra, el botón presionado muestra el formato de donde está el cursor.'),
        html: stateGrid([
          [L('Padrão', 'Default', 'Por defecto'), staticEditor()],
          [L('Com o mouse', 'Hover', 'Con el ratón'), staticEditor(' data-state="hover"')],
          [L('Com foco', 'Focus', 'Con foco'), staticEditor(' data-state="focus"')],
          [L('Vazio', 'Empty', 'Vacío'), staticEditor('', '<p><br></p>', ' is-empty')],
          [L('Desativado', 'Disabled', 'Desactivado'), staticEditor(' data-disabled')],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`Com ${ic('name')}, o editor cria um campo oculto com o HTML, e o formulário envia como qualquer outro campo.`, `With ${ic('name')}, the editor creates a hidden field with the HTML, and the form sends it like any other field.`, `Con ${ic('name')}, el editor crea un campo oculto con el HTML, y el formulario lo envía como cualquier otro campo.`),
        html: codeBlock(`<form>
  <div class="ds-editor">
    <div class="ds-editor__content" aria-label="${label()}"><p>…</p></div>
  </div>
</form>

<script type="module">
  import { createEditor } from 'https://lumeui.dev/v/1.5/lume.js';

  const editor = createEditor(document.querySelector('.ds-editor'), {
    tools: ['history', 'marks', 'blocks', 'align', 'link'],
    placeholder: '${placeholder()}',
    name: 'nota', // <input type="hidden" name="nota" value="<h2>…</h2>">
    onChange: (html) => console.log(html),
  });

  editor.value; // ${L('HTML limpo, ou "" se estiver vazio', 'clean HTML, or "" when empty', 'HTML limpio, o "" si está vacío')}
  editor.getText();
</script>`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Um campo de texto com nome e uma barra de ferramentas que diz o estado de cada botão.', 'A named text field and a toolbar that states each button’s state.', 'Un campo de texto con nombre y una barra de herramientas que dice el estado de cada botón.'),
        html: a11yList([
          [L('Campo com nome', 'Named field', 'Campo con nombre'), L('O texto é role="textbox" com aria-multiline. Dê um nome com aria-label ou um rótulo ligado por aria-labelledby.', 'The text is role="textbox" with aria-multiline. Give it a name with aria-label or a label linked by aria-labelledby.', 'El texto es role="textbox" con aria-multiline. Dale un nombre con aria-label o una etiqueta vinculada con aria-labelledby.')],
          [L('Barra', 'Toolbar', 'Barra'), L('É a Barra de ferramentas: um Tab só, setas entre os botões, e aria-pressed diz se o negrito, a lista ou o alinhamento estão ligados onde está o cursor. Clicar nela não tira o foco do texto.', 'It’s the Toolbar: a single Tab stop, arrows between buttons, and aria-pressed says whether bold, the list, or the alignment is on where the cursor is. Clicking it doesn’t take focus from the text.', 'Es la Barra de herramientas: un solo Tab, flechas entre los botones, y aria-pressed dice si la negrita, la lista o la alineación están activas donde está el cursor. Hacer clic en ella no le quita el foco al texto.'), ['Tab', '←', '→']],
          [L('Atalhos', 'Shortcuts', 'Atajos'), L('Negrito, itálico e sublinhado como em qualquer editor; Ctrl/⌘ + K abre o link; os botões anunciam o atalho com aria-keyshortcuts.', 'Bold, italic, and underline as in any editor; Ctrl/⌘ + K opens the link; buttons announce their shortcut with aria-keyshortcuts.', 'Negrita, cursiva y subrayado como en cualquier editor; Ctrl/⌘ + K abre el enlace; los botones anuncian su atajo con aria-keyshortcuts.'), ['Ctrl B', 'Ctrl I', 'Ctrl U', 'Ctrl K']],
          [L('Markdown', 'Markdown', 'Markdown'), L(`No começo de um parágrafo, ${ic('# ')}, ${ic('## ')}, ${ic('- ')}, ${ic('1. ')} e ${ic('> ')} viram título, subtítulo, lista, lista numerada e citação. Ctrl/⌘ + Z desfaz.`, `At the start of a paragraph, ${ic('# ')}, ${ic('## ')}, ${ic('- ')}, ${ic('1. ')}, and ${ic('> ')} become a heading, subheading, list, numbered list, and quote. Ctrl/⌘ + Z undoes it.`, `Al comienzo de un párrafo, ${ic('# ')}, ${ic('## ')}, ${ic('- ')}, ${ic('1. ')} y ${ic('> ')} se vuelven título, subtítulo, lista, lista numerada y cita. Ctrl/⌘ + Z lo deshace.`)],
          [L('Link', 'Link', 'Enlace'), L('Abre uma linha com o campo do endereço logo abaixo da barra; Enter aplica e Esc volta ao texto, com a seleção no lugar.', 'Opens a row with the address field right below the toolbar; Enter applies and Esc returns to the text, with the selection intact.', 'Abre una fila con el campo de la dirección justo debajo de la barra; Enter aplica y Esc vuelve al texto, con la selección en su lugar.'), ['Enter', 'Esc']],
          [L('Colar limpo', 'Clean paste', 'Pegar limpio'), L('O que vem de outro site, do Google Docs ou do Word perde fontes, cores e scripts: ficam só a estrutura e as marcas que o editor tem.', 'Content from another site, Google Docs, or Word loses fonts, colors, and scripts: only the structure and the marks the editor has remain.', 'Lo que viene de otro sitio, de Google Docs o de Word pierde fuentes, colores y scripts: quedan solo la estructura y las marcas que tiene el editor.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Os do Campo, mais a tipografia de leitura.', 'The Field’s, plus the reading typography.', 'Los del Campo, más la tipografía de lectura.'),
        html: tokenTable([
          ['color.bg.field', L('Fundo', 'Background', 'Fondo')],
          ['color.border.default', L('Contorno', 'Border', 'Contorno')],
          ['color.border.focus', L('Contorno com foco', 'Focus border', 'Contorno con foco')],
          ['color.border.subtle', L('Linha sob a barra', 'Line below the toolbar', 'Línea bajo la barra')],
          ['color.bg.selected', L('Botão apertado', 'Pressed button', 'Botón presionado')],
          ['color.border.strong', L('Traço da citação', 'Quote rule', 'Trazo de la cita')],
          ['text.heading-md', L('Título', 'Heading', 'Título')],
          ['text.body-md', L('Texto', 'Text', 'Texto')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando a formatação ajuda quem vai ler.', 'When formatting helps whoever will read it.', 'Cuando el formato ayuda a quien va a leer.'),
        html: usageCards([
          ['do', L('Faça: texto que outra pessoa lê', 'Do: text someone else reads', 'Haz: texto que otra persona lee'), L('Notas de versão, descrições, comentários longos: títulos e listas deixam a leitura rápida.', 'Release notes, descriptions, long comments: headings and lists make reading quick.', 'Notas de versión, descripciones, comentarios largos: títulos y listas agilizan la lectura.')],
          ['dont', L('Evite: um campo que só precisa de texto', 'Avoid: a field that only needs text', 'Evita: un campo que solo necesita texto'), L('Nome, assunto, uma frase: use o Campo ou a área de texto. A barra ali só atrapalha.', 'A name, a subject, one sentence: use the Field or the text area. A toolbar there just gets in the way.', 'Nombre, asunto, una frase: usa el Campo o el área de texto. Ahí la barra solo estorba.')],
          ['tip', L('Peça só o que vai usar', 'Ask only for what you’ll use', 'Pide solo lo que vas a usar'), L(`Um comentário não precisa de alinhamento. Com ${ic('tools')}, a barra fica com os grupos que fazem sentido.`, `A comment doesn’t need alignment. With ${ic('tools')}, the toolbar keeps only the groups that make sense.`, `Un comentario no necesita alineación. Con ${ic('tools')}, la barra queda con los grupos que tienen sentido.`)],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'editor',
    controls: [
      { id: 'tools', label: L('Barra', 'Toolbar', 'Barra'), value: 'all', options: [{ value: 'all', label: L('Completa', 'Full', 'Completa') }, { value: 'text', label: L('Mínima', 'Minimal', 'Mínima') }] },
      { id: 'state', label: L('Estado', 'State', 'Estado'), value: 'on', options: [{ value: 'on', label: L('Editável', 'Editable', 'Editable') }, { value: 'off', label: L('Desativado', 'Disabled', 'Desactivado') }] },
    ],
    render: (s) => `<div class="ed-play">${editor({ html: NOTE(), tools: s.tools === 'all' ? '' : 'marks,link', ph: placeholder(), attrs: ' data-play' })}<details class="ed-out"><summary>editor.value</summary><pre data-out></pre></details></div>`,
    mount: (preview, s) => {
      const out = preview.querySelector('[data-out]');
      const el = preview.querySelector('[data-play]');
      const ed = createEditor(el, { tools: s.tools === 'all' ? undefined : ['marks', 'link'], placeholder: el.dataset.placeholder, onChange: (html) => (out.textContent = html) });
      out.textContent = ed.value;
      if (s.state === 'off') ed.setDisabled(true);
      return () => ed.destroy();
    },
    code: (s) => `<div class="ds-editor">
  <div class="ds-editor__content" aria-label="${label()}"></div>
</div>

<script type="module">
  import { createEditor } from 'https://lumeui.dev/v/1.5/lume.js';
  const editor = createEditor(document.querySelector('.ds-editor'), {${s.tools === 'all' ? '' : `\n    tools: ['marks', 'link'],`}
    placeholder: '${placeholder()}',
  });${s.state === 'off' ? '\n  editor.setDisabled(true);' : ''}
</script>`,
  });
  const editors = [...root.querySelectorAll('[data-editor]:not([data-play])')].map((el) =>
    createEditor(el, { tools: el.dataset.tools ? el.dataset.tools.split(',') : undefined, placeholder: el.dataset.placeholder || '' }),
  );
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    editors.forEach((e) => e.destroy());
    unmountCopy();
    unmountNav();
  };
}
