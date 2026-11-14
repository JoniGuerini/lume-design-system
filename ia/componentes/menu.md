# Menu

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/menu

Uma lista de opções que abre a partir de um gatilho. Serve para escolher um valor — como nos chips — ou para disparar ações.

Em números: modos: 2 · tipos de item: 6 · teclas: 8 · função: createMenu.

## Exemplo

```html
import { createMenu } from 'https://lumeui.dev/v/0.40/lume.js';

const menu = createMenu(gatilho, {
  label: 'Ordenar por',
  value: 'recent',
  options: [
    { value: 'recent', label: 'Mais recentes', icon: 'clock' },
    { value: 'name', label: 'Nome', icon: 'type' },
    { value: 'size', label: 'Tamanho', icon: 'bar-chart' },
    { value: 'kind', label: 'Tipo de arquivo', icon: 'file-text' },
  ],
  onChange: (valor) => ordenar(valor),
});

// ao sair da página: menu.destroy();
```

## Modos

A mesma função, dois trabalhos. Escolha pelo que acontece depois do clique.

Seleção `mode: 'radio'` — Guarda um valor. O item atual ganha a marca e o gatilho mostra a escolha. É o padrão.

Ação `mode: 'action'` — Dispara um comando e some. Sem marca de seleção; aceita atalhos, separadores e item de perigo.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-chip" data-mn-demo="radio" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-32"><span class="ds-chip__icon"><ds-icon name="filter"></ds-icon></span><span data-mn-label="">Mais recentes</span><span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-mn-demo="action" aria-label="Mais opções" data-ds-tooltip="Mais opções" data-ds-tooltip-placement="bottom" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-33"><ds-icon name="more-horizontal"></ds-icon></button>
```

## Colunas

Lista longa não rola nem vira um menu gigante: com maxRows, cada coluna leva no máximo esse número de itens e o resto segue para a coluna do lado, dividido por igual. É o que a navbar usa nos grupos.

Em colunas `maxRows: 5` — 16 itens com até 5 por coluna viram 4 colunas de 4 — não 5, 5, 5 e 1. ↑/↓ descem a coluna e passam para a próxima; ←/→ pulam de coluna. Perto da borda, o menu desliza para caber na tela.

```html
createMenu(botao, {
  label: 'Componentes',
  options: paginas.map((p) => ({ value: p.href, label: p.label, icon: p.icon })),
  maxRows: 5,   // no máximo 5 por coluna, equilibrado
  onChange: (href) => (location.hash = href),
});
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-chip" data-mn-demo="columns" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-31"><span>Componentes</span><span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Itens

Cada item é um objeto em `options`. Os especiais organizam a lista sem virar opção.

- Rótulo do menu `label: 'Ordenar por'` — Opcional. Diz o que está sendo escolhido e vira o nome do menu.
- Item com ícone `{ value, label, icon: 'clock' }` — Ícone de 18 px à esquerda. Use em todos os itens ou em nenhum.
- Selecionado `value: 'name'` — No modo seleção, a marca na cor da marca indica o valor atual.
- Grupo `{ type: 'group', label: 'Arquivo' }` — Um título pequeno para separar assuntos numa lista longa.
- Atalho `shortcut: '⌘D'` — Só no modo ação. Ensina a tecla sem ocupar espaço.
- Desativado `disabled: true` — Fica visível, mas pulado pelo teclado. Prefira esconder se nunca vai funcionar.
- Separador `{ type: 'separator' }` — Uma linha entre blocos — antes do que é destrutivo, por exemplo.
- Perigo `tone: 'danger'` — Para excluir e afins. Sempre por último, depois de um separador.

Marcação dos exemplos desta seção:

```html
<div class="ds-menu" data-open=""><p class="ds-menu__label" aria-hidden="true">Ordenar por</p><button type="button" class="ds-menu__item" role="menuitemradio" aria-checked="false" data-value="recent">
<ds-icon name="clock"></ds-icon><span class="ds-menu__text">Mais recentes</span><ds-icon name="check"></ds-icon>
</button><button type="button" class="ds-menu__item" role="menuitemradio" aria-checked="true" data-value="name">
<ds-icon name="type"></ds-icon><span class="ds-menu__text">Nome</span><ds-icon name="check"></ds-icon>
</button><button type="button" class="ds-menu__item" role="menuitemradio" aria-checked="false" data-value="size">
<ds-icon name="bar-chart"></ds-icon><span class="ds-menu__text">Tamanho</span><ds-icon name="check"></ds-icon>
</button><button type="button" class="ds-menu__item" role="menuitemradio" aria-checked="false" data-value="kind">
<ds-icon name="file-text"></ds-icon><span class="ds-menu__text">Tipo de arquivo</span><ds-icon name="check"></ds-icon>
</button></div>

<div class="ds-menu" data-mode="action" data-open=""><p class="ds-menu__group" aria-hidden="true">Arquivo</p><button type="button" class="ds-menu__item" role="menuitem" data-value="duplicate">
<ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicar</span><span class="ds-menu__shortcut">⌘D</span>
</button><button type="button" class="ds-menu__item" role="menuitem" data-value="export">
<ds-icon name="download"></ds-icon><span class="ds-menu__text">Exportar PDF</span><span class="ds-menu__shortcut">⌘E</span>
</button><button type="button" class="ds-menu__item" role="menuitem" aria-disabled="true" data-value="share">
<ds-icon name="link"></ds-icon><span class="ds-menu__text">Compartilhar</span>
</button><div class="ds-menu__separator" role="separator"></div><button type="button" class="ds-menu__item ds-menu__item--danger" role="menuitem" data-value="delete">
<ds-icon name="trash"></ds-icon><span class="ds-menu__text">Excluir</span>
</button></div>
```

## Estados

Hover e foco têm o mesmo fundo e podem ser forçados com `data-state`.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-menu__item"><ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicar</span></button>

<button type="button" class="ds-menu__item" aria-checked="true"><ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicar</span><ds-icon name="check"></ds-icon></button>

<button type="button" class="ds-menu__item ds-menu__item--danger"><ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicar</span></button>

<button type="button" class="ds-menu__item" aria-disabled="true"><ds-icon name="copy"></ds-icon><span class="ds-menu__text">Duplicar</span></button>
```

## Teclado

Tudo que dá para fazer com o mouse dá para fazer sem ele.

| Tecla | No gatilho | Com o menu aberto |
| --- | --- | --- |
| ↓ | Abre o menu no item atual | Vai para o próximo item (dá a volta no fim) |
| ↑ | Abre o menu (no modo ação, pelo último item) | Vai para o item anterior |
| Home | — | Primeiro item |
| End | — | Último item |
| Enter | Abre ou fecha | Escolhe o item com foco |
| Espaço | Abre ou fecha | Escolhe o item com foco |
| A–Z | — | Pula para o próximo item que começa com a letra |
| Esc | — | Fecha e devolve o foco ao gatilho |
| Tab | — | Fecha e segue para o próximo elemento |

## Acessibilidade

createMenu já liga os atributos ARIA no gatilho e no menu.

- Gatilho anunciado — Recebe `aria-haspopup="menu"`, `aria-expanded` e `aria-controls` — o leitor de tela sabe que abre algo.
- Papéis certos — Seleção usa `menuitemradio` com `aria-checked`; ação usa `menuitem`.
- Foco com sentido — ↓ Esc — Ao abrir, vai para o item selecionado (ou o primeiro). Ao fechar com Esc ou escolher, volta ao gatilho.
- Fecha sozinho — Clique fora, rolar a página ou redimensionar fecham o menu sem prender ninguém.
- Botão de ícone com nome — Se o gatilho é só um ícone, dê `aria-label` e uma dica.
- Não depende da cor — O selecionado tem marca; o perigo tem ícone e posição própria, além da cor.

## Tokens usados

Flutua acima do conteúdo, por isso borda forte e sombra maior.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Borda | #3E51664D | #FFFFFF29 |
| radius.lg (`--ds-radius-lg`) | Raio do menu | 16 px | 16 px |
| shadow.xl (`--ds-shadow-xl`) | Sombra | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| text.label-md (`--ds-text-label-md`) | Itens | 14/20 · medium | 14/20 · medium |
| color.bg.hover (`--ds-color-bg-hover`) | Item com foco | #3E51660D | #FFFFFF0D |
| color.fg.brand (`--ds-color-fg-brand`) | Marca de selecionado | #3E5166 | #DAE0E8 |
| color.danger.fg (`--ds-color-danger-fg`) | Item de perigo | #C13834 | #FFB2AA |
| color.danger.subtle (`--ds-color-danger-subtle`) | Perigo com foco | #FFF4F3 | #FF908721 |
| color.border.subtle (`--ds-color-border-subtle`) | Separador | #3E516624 | #FFFFFF0F |
| duration.fast (`--ds-duration-fast`) | Abrir e fechar | 120ms | 120ms |
| easing.emphasized (`--ds-easing-emphasized`) | Curva do deslize | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| z.popover (`--ds-z-popover`) | Camada | 1400 | 1400 |

## Uso

Menu esconde opções. Vale a pena quando são muitas para mostrar e poucas para buscar.

- **Faça:** de 3 a 12 opções. Ordenação, filtros, ações secundárias de um item — o que não precisa estar sempre visível.
- **Evite:** 2 opções ou 40. Duas cabem num controle segmentado ou em chips. Dezenas pedem uma seleção com busca.
- **Dica:** Destrutivo por último. Separado por uma linha, longe do que é seguro clicar.
