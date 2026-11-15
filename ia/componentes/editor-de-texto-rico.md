# Editor de texto rico

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/editor-de-texto-rico

Um campo de texto que formata: títulos, listas, citações, negrito, itálico e links, com a barra de ferramentas do Lume. Sem dependências, sobre o contenteditable do navegador, e o HTML que sai é sempre limpo.

Em números: ferramentas: 14 · atalhos de Markdown: 5 · tags no HTML: 15 · dependências: 0.

## Exemplo

```html
<h2>Lume 0.37</h2><p>Mudar a ordem e o lugar das coisas, com o <strong>mouse</strong>, o <strong>toque</strong> ou o <strong>teclado</strong>.</p><ul><li>Lista arrastável, com alça ou sem</li><li>Kanban, com colunas que trocam cartões</li></ul><blockquote>Cada passo é anunciado para o leitor de tela.</blockquote><p>Veja tudo em <a href="#/novidades">Novidades</a>.</p>
```

## Variantes

A barra mostra os grupos que você pedir em `tools`, na ordem.

Mínimo `tools: ['marks', 'link']` — Para um comentário ou uma descrição curta: só negrito, itálico, sublinhado, riscado e link.

Sem contorno `ds-editor--borderless` — Quando o editor é a própria página, como uma nota ou um documento: sem caixa em volta.

## Estados

O contorno e o foco são os do Campo. Na barra, o botão apertado mostra a formatação de onde está o cursor.

Marcação dos exemplos desta seção:

```html
<div class="ds-editor"><div class="ds-toolbar ds-toolbar--plain ds-editor__toolbar"><div class="ds-toolbar__group"><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="true"><ds-icon name="bold"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="italic"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="link"></ds-icon></span></div></div><div class="ds-editor__content" data-placeholder="Escreva a nota da versão…"><p>O cartão da <strong>última versão</strong> no Início lê o resumo do changelog.</p></div></div>

<div class="ds-editor"><div class="ds-toolbar ds-toolbar--plain ds-editor__toolbar"><div class="ds-toolbar__group"><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="true"><ds-icon name="bold"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="italic"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="link"></ds-icon></span></div></div><div class="ds-editor__content" data-placeholder="Escreva a nota da versão…"><p><br></p></div></div>

<div class="ds-editor" data-disabled=""><div class="ds-toolbar ds-toolbar--plain ds-editor__toolbar"><div class="ds-toolbar__group"><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="true"><ds-icon name="bold"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="italic"></ds-icon></span><span class="ds-icon-btn ds-icon-btn--sm" aria-pressed="false"><ds-icon name="link"></ds-icon></span></div></div><div class="ds-editor__content" data-placeholder="Escreva a nota da versão…"><p>O cartão da <strong>última versão</strong> no Início lê o resumo do changelog.</p></div></div>
```

## Código

Com `name`, o editor cria um campo oculto com o HTML, e o formulário envia como qualquer outro campo.

```html
<form>
  <div class="ds-editor">
    <div class="ds-editor__content" aria-label="Nota da versão"><p>…</p></div>
  </div>
</form>

<script type="module">
  import { createEditor } from 'https://lumeui.dev/v/1.1/lume.js';

  const editor = createEditor(document.querySelector('.ds-editor'), {
    tools: ['history', 'marks', 'blocks', 'align', 'link'],
    placeholder: 'Escreva a nota da versão…',
    name: 'nota', // <input type="hidden" name="nota" value="<h2>…</h2>">
    onChange: (html) => console.log(html),
  });

  editor.value; // HTML limpo, ou "" se estiver vazio
  editor.getText();
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Um campo de texto com nome e uma barra de ferramentas que diz o estado de cada botão.

- Campo com nome — O texto é role="textbox" com aria-multiline. Dê um nome com aria-label ou um rótulo ligado por aria-labelledby.
- Barra — Tab ← → — É a Barra de ferramentas: um Tab só, setas entre os botões, e aria-pressed diz se o negrito, a lista ou o alinhamento estão ligados onde está o cursor. Clicar nela não tira o foco do texto.
- Atalhos — Ctrl B Ctrl I Ctrl U Ctrl K — Negrito, itálico e sublinhado como em qualquer editor; Ctrl/⌘ + K abre o link; os botões anunciam o atalho com aria-keyshortcuts.
- Markdown — No começo de um parágrafo, `#`, `##`, `-`, `1.` e `>` viram título, subtítulo, lista, lista numerada e citação. Ctrl/⌘ + Z desfaz.
- Link — Enter Esc — Abre uma linha com o campo do endereço logo abaixo da barra; Enter aplica e Esc volta ao texto, com a seleção no lugar.
- Colar limpo — O que vem de outro site, do Google Docs ou do Word perde fontes, cores e scripts: ficam só a estrutura e as marcas que o editor tem.

## Tokens usados

Os do Campo, mais a tipografia de leitura.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.field (`--ds-color-bg-field`) | Fundo | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Contorno | #3E516633 | #FFFFFF1A |
| color.border.focus (`--ds-color-border-focus`) | Contorno com foco | #53657A | #C0CAD6 |
| color.border.subtle (`--ds-color-border-subtle`) | Linha sob a barra | #3E516624 | #FFFFFF0F |
| color.bg.selected (`--ds-color-bg-selected`) | Botão apertado | #3E516612 | #C0CAD61A |
| color.border.strong (`--ds-color-border-strong`) | Traço da citação | #3E51664D | #FFFFFF29 |
| text.heading-md (`--ds-text-heading-md`) | Título | 21/28 · regular | 21/28 · regular |
| text.body-md (`--ds-text-body-md`) | Texto | 16/28 · regular | 16/28 · regular |

## Uso

Quando a formatação ajuda quem vai ler.

- **Faça:** texto que outra pessoa lê. Notas de versão, descrições, comentários longos: títulos e listas deixam a leitura rápida.
- **Evite:** um campo que só precisa de texto. Nome, assunto, uma frase: use o Campo ou a área de texto. A barra ali só atrapalha.
- **Dica:** Peça só o que vai usar. Um comentário não precisa de alinhamento. Com tools, a barra fica com os grupos que fazem sentido.
