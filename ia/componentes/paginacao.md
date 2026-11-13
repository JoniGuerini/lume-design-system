# Paginação

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/paginacao

Divide uma lista longa em páginas e diz onde a pessoa está. Use quando ela precisa voltar a um ponto ou comparar páginas.

Em números: altura: 36 px · versões: 2 · páginas ao lado: à escolha · papel: navigation.

## Exemplo

```html
<nav class="ds-pagination"></nav>

<script type="module">
  import { createPagination } from 'https://lumeui.dev/v/0.27/lume.js';
  createPagination(document.querySelector('.ds-pagination'), {
    total: 248,
    pageSizes: [10, 25, 50],
    onChange: ({ page, pageSize }) => carregar(page, pageSize),
  });
</script>
```

## Variantes

As partes aparecem conforme a necessidade: poucas páginas não precisam de reticências.

Poucas páginas `total: 42` — Até sete páginas ficam todas à vista, sem reticências.

Muitas páginas `total: 2480` — A primeira e a última ficam sempre à vista.

Itens por página `pageSizes` — Ao trocar, a pessoa continua vendo o mesmo item.

Com links `hrefFor` — Cada página é um endereço: dá para compartilhar e abrir em outra aba.

Marcação dos exemplos desta seção:

```html
<nav class="ds-pagination" data-demo="few" aria-label="Paginação">
<p class="ds-pagination__summary" role="status">1–10 de 42</p>
<ul class="ds-pagination__list" role="list">
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Página anterior" data-page="0" disabled=""><ds-icon name="chevron-left"></ds-icon></button></li>
<li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 1" aria-current="page" data-page="1">1</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 2" data-page="2">2</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 3" data-page="3">3</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 4" data-page="4">4</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 5" data-page="5">5</button></li>
<li class="ds-pagination__compact" aria-hidden="true">1 de 5</li>
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Próxima página" data-page="2"><ds-icon name="chevron-right"></ds-icon></button></li>
</ul></nav>

<nav class="ds-pagination" data-demo="many" aria-label="Paginação">
<p class="ds-pagination__summary" role="status">111–120 de 2.480</p>
<ul class="ds-pagination__list" role="list">
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Página anterior" data-page="11"><ds-icon name="chevron-left"></ds-icon></button></li>
<li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 1" data-page="1">1</button></li><li class="ds-pagination__gap" aria-hidden="true">…</li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 11" data-page="11">11</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 12" aria-current="page" data-page="12">12</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 13" data-page="13">13</button></li><li class="ds-pagination__gap" aria-hidden="true">…</li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 248" data-page="248">248</button></li>
<li class="ds-pagination__compact" aria-hidden="true">12 de 248</li>
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Próxima página" data-page="13"><ds-icon name="chevron-right"></ds-icon></button></li>
</ul></nav>
```

## Estados

Hover e foco podem ser forçados com `data-state`.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-pagination__page">3</button>

<button type="button" class="ds-pagination__page" aria-current="page">3</button>

<button type="button" class="ds-pagination__page" disabled="">3</button>
```

## Código

`onChange` avisa a página e o tamanho; quem carrega os dados é você.

```html
import { createPagination } from 'https://lumeui.dev/v/0.27/lume.js';

const pagination = createPagination(document.querySelector('.ds-pagination'), {
  total: 248,
  pageSizes: [10, 25, 50],
  onChange: ({ page, pageSize }) => carregar(page, pageSize),
});

pagination.setTotal(100); // o total mudou (um filtro, por exemplo)
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

São links ou botões comuns, dentro de uma navegação com nome.

- Página atual — Marcada com aria-current="page", além do destaque visual.
- Nomes completos — O leitor de tela ouve “Página 3” e “Próxima página”, não só “3” e uma seta.
- Mudança anunciada — O intervalo “11–20 de 248” fica em role="status".
- Foco no lugar — Tab Enter — Ao trocar de página, o foco fica na seta ou vai para a página atual.

## Tokens usados

Tudo o que a paginação consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Números e resumo | #46586E | #CEC8C1 |
| color.bg.hover (`--ds-color-bg-hover`) | Número no hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Página atual | #3E516612 | #C0CAD61A |
| color.border.default (`--ds-color-border-default`) | Contorno da atual | #3E516633 | #FFFFFF1A |
| color.fg.disabled (`--ds-color-fg-disabled`) | Seta sem destino | #93A0B0 | #605D59 |
| radius.sm (`--ds-radius-sm`) | Cantos | 8 px | 8 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** tabelas e resultados. Quando a pessoa procura algo e quer voltar a um ponto da lista.
- **Evite:** poucos itens. Uma página só não precisa de paginação. Esconda o componente.
- **Dica:** Volte ao topo. Ao trocar de página, leve a pessoa ao começo da lista.
