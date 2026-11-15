import { codeBlockHtml, mountCodeBlocks } from '../../ds/js/code-block.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const CSS_SAMPLE = `.cartao {
  background: var(--ds-color-bg-surface);
  border-radius: var(--ds-radius-xl);
}`;

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default function renderBlocoDeCodigo(page) {
  return controlPage(page, {
    lead: L('Mostra código com a fonte certa, e um botão copia tudo de uma vez. É o que aparece em todos os playgrounds deste site.', 'Shows code in the right font, and a button copies it all at once. It’s what appears in every playground on this site.', 'Muestra código con la fuente correcta, y un botón copia todo de una vez. Es lo que aparece en todos los playgrounds de este sitio.'),
    stats: [
      [L('fonte mono', 'mono font', 'fuente mono'), 'JetBrains'],
      [L('tamanhos', 'sizes', 'tamaños'), 2],
      [L('rolagem', 'scrolling', 'desplazamiento'), L('horizontal', 'horizontal', 'horizontal')],
      [L('base', 'base', 'base'), 'pre · code'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('O botão copia só o código, e um aviso confirma.', 'The button copies only the code, and a notice confirms it.', 'El botón copia solo el código, y un aviso lo confirma.'), html: playgroundMarkup('code-block', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L(`Sem o botão, é só ${ic('.ds-code')}. Para um termo no meio do texto, use ${ic('.ds-inline-code')}.`, `Without the button, it’s just ${ic('.ds-code')}. For a term within text, use ${ic('.ds-inline-code')}.`, `Sin el botón, es solo ${ic('.ds-code')}. Para un término en medio del texto, usa ${ic('.ds-inline-code')}.`),
        html: examples([
          example(L('Com copiar', 'With copy', 'Con copiar'), 'ds-code-block', L('Para o que a pessoa vai usar.', 'For what people will use.', 'Para lo que la persona va a usar.'), codeBlockHtml('npm run build')),
          example(L('Só leitura', 'Read only', 'Solo lectura'), 'ds-code', L('Para um trecho que só ilustra.', 'For a snippet that only illustrates.', 'Para un fragmento que solo ilustra.'), `<pre class="ds-code"><code>${escape('<html data-theme="dark">')}</code></pre>`),
          example(L('Pequeno', 'Small', 'Pequeño'), 'ds-code--sm', L('Dentro de cartões e tabelas.', 'Inside cards and tables.', 'Dentro de tarjetas y tablas.'), `<pre class="ds-code ds-code--sm"><code>--ds-radius-xl: 20px;</code></pre>`),
          example(L('No meio do texto', 'Within text', 'En medio del texto'), 'ds-inline-code', L('Para nomes de arquivos, tokens e comandos.', 'For file names, tokens, and commands.', 'Para nombres de archivos, tokens y comandos.'), `<p style="font:var(--ds-text-body-sm)">${L(`Rode ${ic('npm run dev')} e abra o site.`, `Run ${ic('npm run dev')} and open the site.`, `Ejecuta ${ic('npm run dev')} y abre el sitio.`)}</p>`),
        ]),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Texto de verdade, que dá para selecionar e ler.', 'Real text you can select and read.', 'Texto de verdad, que se puede seleccionar y leer.'),
        html: a11yList([
          [L('Elementos certos', 'The right elements', 'Elementos correctos'), L(`${ic('pre')} preserva os espaços; ${ic('code')} diz que é código.`, `${ic('pre')} preserves spacing; ${ic('code')} says it’s code.`, `${ic('pre')} preserva los espacios; ${ic('code')} dice que es código.`)],
          [L('Botão com nome', 'Named button', 'Botón con nombre'), L('O ícone tem nome para o leitor de tela, e a cópia é anunciada no aviso.', 'The icon has a name for screen readers, and the copy is announced in the notice.', 'El ícono tiene nombre para el lector de pantalla, y la copia se anuncia en el aviso.'), ['Tab', 'Enter']],
          [L('Linhas longas', 'Long lines', 'Líneas largas'), L('O bloco rola na horizontal, sem quebrar a página nem o código.', 'The block scrolls horizontally, without breaking the page or the code.', 'El bloque se desplaza en horizontal, sin romper la página ni el código.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o bloco consome.', 'Everything the block consumes.', 'Todo lo que consume el bloque.'),
        html: tokenTable([
          ['color.bg.sunken', L('Fundo', 'Background', 'Fondo')],
          ['color.border.subtle', L('Contorno', 'Outline', 'Contorno')],
          ['color.fg.default', L('Texto', 'Text', 'Texto')],
          ['text.code-md', L('Código', 'Code', 'Código')],
          ['text.code-sm', L('Pequeno e no meio do texto', 'Small and within text', 'Pequeño y en medio del texto')],
          ['radius.lg', L('Cantos', 'Corners', 'Esquinas')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: código para copiar', 'Do: code to copy', 'Haz: código para copiar'), L('Comandos e exemplos que a pessoa vai colar em outro lugar.', 'Commands and examples people will paste elsewhere.', 'Comandos y ejemplos que la persona pegará en otro lugar.')],
          ['dont', L('Evite: dados comuns', 'Avoid: ordinary data', 'Evita: datos comunes'), L('Uma senha ou um código de cupom ficam melhor num campo com botão de copiar.', 'A password or coupon code works better in a field with a copy button.', 'Una contraseña o un cupón quedan mejor en un campo con botón de copiar.')],
          ['tip', L('Curto é melhor', 'Short is better', 'Corto es mejor'), L('Mostre só o que importa. Trechos longos cansam e ninguém lê.', 'Show only what matters. Long snippets tire people, and nobody reads them.', 'Muestra solo lo que importa. Los fragmentos largos cansan y nadie los lee.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'code-block',
    controls: [{ id: 'size', label: L('Tamanho', 'Size', 'Tamaño'), value: 'md', options: [{ value: 'md', label: L('Médio', 'Medium', 'Mediano') }, { value: 'sm', label: L('Pequeno', 'Small', 'Pequeño') }] }],
    render: (s) => codeBlockHtml(CSS_SAMPLE, { small: s.size === 'sm' }),
    code: (s) => `<div class="ds-code-block">
  <pre class="ds-code${s.size === 'sm' ? ' ds-code--sm' : ''}"><code>…</code></pre>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-code-block__copy" data-code-copy aria-label="${L('Copiar código', 'Copy code', 'Copiar código')}">
    <ds-icon name="copy" size="16"></ds-icon>
  </button>
</div>

<script type="module">
  import { mountCodeBlocks } from 'https://lumeui.dev/v/0.41/lume.js';
  mountCodeBlocks(document);
</script>`,
  });
  const unmountBlocks = mountCodeBlocks(root);
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountBlocks();
    unmountCopy();
    unmountNav();
  };
}
