# Tabela

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/tabela

Para comparar dados em linhas e colunas. Números alinhados, cabeçalho que ordena e seleção que não depende só da cor.

Em números: densidades: 2 · estados: 3 · altura da linha: 52 px · elemento: <table>.

## Exemplo

```html
<div class="ds-table-wrap">
  <table class="ds-table ds-table--hover">
    <caption>Componentes <span class="ds-table__caption-desc">Uso nas telas do produto</span></caption>
    <thead>
      <tr>
        <th scope="col">Componente</th>
        <th scope="col">Status</th>
        <th scope="col" class="ds-table__num">Telas</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="ds-table__strong">Botão</td>
        <td><span class="ds-badge ds-badge--sm ds-badge--success">Pronto</span></td>
        <td class="ds-table__num">248</td>
      </tr>
      <tr>
        <td class="ds-table__strong">Tooltip</td>
        <td><span class="ds-badge ds-badge--sm ds-badge--success">Pronto</span></td>
        <td class="ds-table__num">201</td>
      </tr>
      …
    </tbody>
  </table>
</div>
```

## Ordenar e selecionar

Clique num cabeçalho para ordenar (de novo inverte). Marque linhas para agir em lote — a contagem aparece em cima.

Nenhum selecionado

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-clear="" hidden=""><ds-icon name="x"></ds-icon>Limpar seleção</button>

<p class="ds-visually-hidden" aria-live="polite" data-live=""></p>
```

## Anatomia

Uma tabela nativa com cinco peças. Nada de grid de divs: a semântica vem pronta.

- 1 — Legenda — `<caption>` nomeia a tabela para leitores de tela. Pode ter uma descrição curta.
- 2 — Cabeçalho — `<th scope="col">` em `label-sm`, apagado. Ordenável com um botão dentro e `aria-sort`.
- 3 — Linha — 52 px (40 px na compacta), divisor fino. Hover opcional; selecionada ganha `bg.selected`.
- 4 — Célula numérica — `ds-table__num`: à direita e com algarismos tabulares, para as casas se alinharem.
- 5 — Seleção opcional — Checkbox nativo com rótulo por linha e “selecionar todos” no cabeçalho.

Marcação dos exemplos desta seção:

```html
<div class="ds-table-wrap">
<table class="ds-table">
<caption>Componentes <span>1</span></caption>
<thead><tr>
<th class="ds-table__check"><input type="checkbox"><span>5</span></th>
<th aria-sort="descending"><span class="ds-table__sort">Componente<ds-icon name="chevron-down"></ds-icon></span><span>2</span></th>
<th class="ds-table__num">Telas</th>
</tr></thead>
<tbody>
<tr data-selected=""><td class="ds-table__check"><input type="checkbox" checked=""></td><td class="ds-table__strong">Botão <span>3</span></td><td class="ds-table__num">248 <span>4</span></td></tr>
<tr><td class="ds-table__check"><input type="checkbox"></td><td class="ds-table__strong">Chip</td><td class="ds-table__num">132</td></tr>
</tbody>
</table>
</div>
```

## Densidade

Confortável é o padrão. Compacta para telas de operação, com muitas linhas para varrer.

Confortável `padrão · 52 px`

Compacta `ds-table--compact · 40 px`

Marcação dos exemplos desta seção:

```html
<div class="ds-table-wrap">
<table class="ds-table">
<thead><tr>
<th scope="col">Componente</th><th scope="col">Status</th><th scope="col" class="ds-table__num">Telas</th>
</tr></thead>
<tbody><tr>
<td class="ds-table__strong">Botão</td><td><span class="ds-badge ds-badge--sm ds-badge--success">Pronto</span></td><td class="ds-table__num">248</td>
</tr><tr>
<td class="ds-table__strong">Tooltip</td><td><span class="ds-badge ds-badge--sm ds-badge--success">Pronto</span></td><td class="ds-table__num">201</td>
</tr><tr>
<td class="ds-table__strong">Campo de texto</td><td><span class="ds-badge ds-badge--sm ds-badge--warning">Em revisão</span></td><td class="ds-table__num">164</td>
</tr></tbody>
</table>
</div>

<div class="ds-table-wrap">
<table class="ds-table ds-table--compact">
<thead><tr>
<th scope="col">Componente</th><th scope="col">Status</th><th scope="col" class="ds-table__num">Telas</th>
</tr></thead>
<tbody><tr>
<td class="ds-table__strong">Botão</td><td><span class="ds-badge ds-badge--sm ds-badge--success">Pronto</span></td><td class="ds-table__num">248</td>
</tr><tr>
<td class="ds-table__strong">Tooltip</td><td><span class="ds-badge ds-badge--sm ds-badge--success">Pronto</span></td><td class="ds-table__num">201</td>
</tr><tr>
<td class="ds-table__strong">Campo de texto</td><td><span class="ds-badge ds-badge--sm ds-badge--warning">Em revisão</span></td><td class="ds-table__num">164</td>
</tr></tbody>
</table>
</div>
```

## Estados

Uma tabela sem dados ainda é uma tabela: mantenha o cabeçalho e diga o que fazer. Carregando, mostre a forma das linhas — sem brilho.

Vazio `ds-table__empty` — Ícone, frase curta e uma saída.

Carregando `ds-table__skeleton` — Barras planas que pulsam devagar; param com movimento reduzido.

Marcação dos exemplos desta seção:

```html
<div class="ds-table-wrap">
<table class="ds-table ds-table--hover">
<thead><tr>
<th scope="col">Componente</th><th scope="col">Status</th><th scope="col" class="ds-table__num">Telas</th>
</tr></thead>
<tbody><tr class="ds-table__empty"><td colspan="3">
<span class="ds-table__empty-inner">
<ds-icon name="inbox"></ds-icon>
<span class="ds-table__empty-title">Nenhum componente com esse filtro</span>
<span>Tente outro status ou limpe a busca.</span>
<span class="ds-btn ds-btn--secondary ds-btn--sm">Limpar filtros</span>
</span>
</td></tr></tbody>
</table>
</div>

<div class="ds-table-wrap">
<table class="ds-table ds-table--hover">
<thead><tr>
<th scope="col">Componente</th><th scope="col">Status</th><th scope="col" class="ds-table__num">Telas</th>
</tr></thead>
<tbody><tr><td><span class="ds-table__skeleton"></span></td><td><span class="ds-table__skeleton"></span></td><td class="ds-table__num"><span class="ds-table__skeleton"></span></td></tr><tr><td><span class="ds-table__skeleton"></span></td><td><span class="ds-table__skeleton"></span></td><td class="ds-table__num"><span class="ds-table__skeleton"></span></td></tr><tr><td><span class="ds-table__skeleton"></span></td><td><span class="ds-table__skeleton"></span></td><td class="ds-table__num"><span class="ds-table__skeleton"></span></td></tr></tbody>
</table>
</div>
```

## Acessibilidade

Use a tabela nativa e quase tudo vem de graça.

- Tabela de verdade — `<table>`, `<caption>` e `<th scope="col">`: o leitor de tela anuncia a coluna de cada célula.
- Ordenação anunciada — O cabeçalho ordenável é um botão; o `th` recebe `aria-sort` e uma região viva confirma a mudança.
- Seleção pelo checkbox — Cada linha tem um checkbox com nome (“Selecionar Botão”). O “selecionar todos” mostra o estado misto quando só parte está marcada.
- Rolagem pelo teclado — Tab ↑ ↓ — Com cabeçalho fixo, o contêiner vira `role="region"` com nome e `tabindex="0"` para rolar com as setas.
- Cor nunca sozinha — Status vai em texto no badge; a linha selecionada também fica com o checkbox marcado.
- Não use para layout — Tabela é para dados tabulares. Para alinhar elementos da interface, use grid.

## Tokens usados

Tudo o que a tabela consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fundo e cabeçalho fixo | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno e divisores | #3E516624 | #FFFFFF0F |
| color.fg.subtle (`--ds-color-fg-subtle`) | Cabeçalho e texto apagado | #53657A | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Células | #2B3847 | #F3EDE5 |
| color.bg.hover (`--ds-color-bg-hover`) | Hover da linha | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Linha selecionada | #3E516612 | #C0CAD61A |
| color.fg.brand (`--ds-color-fg-brand`) | Ícone da coluna ordenada | #3E5166 | #DAE0E8 |
| color.brand.solid (`--ds-color-brand-solid`) | Checkbox marcado | #3E5166 | #C0CAD6 |
| color.bg.muted (`--ds-color-bg-muted`) | Barras de carregamento | #DAE0E8 | #3D3B38 |
| text.body-sm (`--ds-text-body-sm`) | Células | 14/22 · regular | 14/22 · regular |
| text.label-sm (`--ds-text-label-sm`) | Cabeçalho | 13/18 · medium | 13/18 · medium |
| radius.xl (`--ds-radius-xl`) | Contêiner | 20 px | 20 px |
| space.200 (`--ds-space-200`) | Respiro lateral das células | 16 px | 16 px |

## Uso

Três regras para tabelas fáceis de ler.

- **Faça:** números à direita. Alinhados à direita e com algarismos tabulares, os valores se comparam de relance.
- **Evite:** tabela para pouca coisa. Duas colunas de “rótulo e valor” ficam melhores numa lista de detalhes.
- **Dica:** Poucas colunas. Mostre só o que ajuda a decidir. O resto vai para o detalhe da linha.
