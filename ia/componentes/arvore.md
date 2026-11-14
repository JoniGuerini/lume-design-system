# Árvore

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/arvore

Mostra níveis aninhados, como pastas ou categorias, sem ocupar a tela toda. Só as partes abertas aparecem.

Em números: níveis: sem limite · atalhos: 8 · recuo: 20 px · papel ARIA: tree.

## Exemplo

```html
<div class="ds-tree" aria-label="Arquivos"></div>

<script type="module">
  import { createTree } from 'https://lumeui.dev/v/0.34/lume.js';
  createTree(document.querySelector('.ds-tree'), {
    items: arquivos,
    expanded: ['docs', 'contratos'],
    onSelect: (item) => abrir(item.id),
  });
</script>
```

## Variantes

Ícones e informações laterais são opcionais.

Com ícones `icon · meta` — Para arquivos, com o tamanho ao lado.

Só texto `label` — Para categorias, com menos ruído.

## Estados

Hover e foco podem ser forçados com `data-state` na linha.

Marcação dos exemplos desta seção:

```html
<div class="ds-tree"><ul class="ds-tree__group"><li class="ds-tree__item" aria-selected="false"><div class="ds-tree__row"><span class="ds-tree__toggle"></span><span class="ds-tree__icon"><ds-icon name="file-text"></ds-icon></span><span class="ds-tree__label">Notas.txt</span></div></li></ul></div>

<div class="ds-tree"><ul class="ds-tree__group"><li class="ds-tree__item" aria-selected="true"><div class="ds-tree__row"><span class="ds-tree__toggle"></span><span class="ds-tree__icon"><ds-icon name="file-text"></ds-icon></span><span class="ds-tree__label">Notas.txt</span></div></li></ul></div>
```

## Código

O `aria-label` do `.ds-tree` dá nome à árvore para o leitor de tela.

```html
import { createTree } from 'https://lumeui.dev/v/0.34/lume.js';

const tree = createTree(document.querySelector('.ds-tree'), {
  items: [
    { id: 'docs', label: 'Documentos', icon: 'folder', children: [
      { id: 'notas', label: 'Notas.txt', icon: 'file-text' },
    ] },
  ],
  expanded: ['docs'],
  onSelect: (item) => abrir(item.id),
});
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Segue o padrão ARIA de árvore: um único ponto no Tab, e as setas fazem o resto.

- Andar — ↑ ↓ Home End — ↑ e ↓ passam pelas linhas visíveis; Home e End vão à primeira e à última.
- Abrir e fechar — → ← — → abre ou entra na pasta; ← fecha ou volta ao nível de cima.
- Escolher — Enter Espaço — Enter ou Espaço escolhem a linha. Letras pulam para o próximo nome que começa com ela.
- Estado anunciado — aria-expanded, aria-selected e aria-level dizem o estado e o nível de cada linha.

## Tokens usados

Tudo o que a árvore consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Nome | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Seta, ícone e informação | #5C6C7F | #9C9792 |
| color.bg.hover (`--ds-color-bg-hover`) | Linha no hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Linha escolhida | #3E516612 | #C0CAD61A |
| color.border.focus (`--ds-color-border-focus`) | Anel de foco | #53657A | #C0CAD6 |
| color.fg.disabled (`--ds-color-fg-disabled`) | Linha desativada | #93A0B0 | #605D59 |
| radius.sm (`--ds-radius-sm`) | Cantos da linha | 8 px | 8 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** hierarquias reais. Pastas, categorias e organogramas, em que o nível tem significado.
- **Evite:** a navegação do site. Para páginas, a sidebar é mais simples. Árvore pede um teclado que nem todos conhecem.
- **Dica:** Abra o caminho. Comece com o item atual visível, com as pastas dele já abertas.
