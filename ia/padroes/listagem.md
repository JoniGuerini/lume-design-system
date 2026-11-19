# Listagem de dados

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/listagem

A tela que todo produto tem: uma lista que a pessoa busca, filtra, ordena e trata em lote. Tudo à vista, nada perdido ao voltar e qualquer ação com volta.

Em números: ação principal: 1 · linha de filtros: 1 · “tem certeza?”: 0.

## Exemplo ao vivo

As pessoas de um espaço de trabalho. Busque, filtre, ordene pelo cabeçalho, marque algumas e aja em lote.

- Marque duas pessoas: a barra de lote toma o lugar dos filtros, com a contagem.
- Remova e use “Desfazer” no aviso: elas voltam para o mesmo lugar.
- Busque “xyz”: o vazio diz que é o filtro e oferece limpar.

Marcação dos exemplos desta seção:

```html
<div class="ds-filters" role="search" aria-label="Filtrar pessoas">
<div class="ds-filters__bar">
<label class="ds-field ds-filters__search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" data-filter-search="" placeholder="Buscar por nome ou e-mail" aria-label="Buscar pessoas por nome ou e-mail" autocomplete="off" spellcheck="false">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" data-filter-clear-search="" aria-label="Limpar busca" hidden=""><ds-icon name="x"></ds-icon></button>
</label>
<div class="ds-filters__controls">
<button type="button" class="ds-chip ds-filters__field" data-filter-field="funcao" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-257">
<span data-label="">Função</span>
<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span>
</button><button type="button" class="ds-chip ds-filters__field" data-filter-field="status" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-258">
<span data-label="">Status</span>
<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span>
</button>
</div>
</div>
<div class="ds-filters__summary">
<p class="ds-filters__count" id="ds-filters-2-count" role="status" aria-live="polite" aria-atomic="true">22 pessoas</p>
<ul class="ds-filters__active" role="list" aria-label="Filtros ativos" data-filter-active="" hidden=""></ul>
<button type="button" class="ds-inline-action ds-filters__clear" data-filter-clear="" hidden=""><ds-icon name="x"></ds-icon>Limpar tudo</button>
</div>
</div>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-dl-role="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-259"><ds-icon name="users"></ds-icon>Mudar função<ds-icon name="chevron-down"></ds-icon></button>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-dl-deactivate=""><ds-icon name="pause"></ds-icon>Desativar</button>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-dl-remove=""><ds-icon name="trash"></ds-icon>Remover</button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-dl-clear-selection="" aria-label="Limpar seleção" data-ds-tooltip="Limpar seleção"><ds-icon name="x"></ds-icon></button>

<nav class="ds-pagination" data-dl-pages="" aria-label="Paginação">
<p class="ds-pagination__summary" role="status">1–8 de 22</p>
<ul class="ds-pagination__list" role="list">
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Página anterior" data-page="0" disabled=""><ds-icon name="chevron-left"></ds-icon></button></li>
<li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 1" aria-current="page" data-page="1">1</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 2" data-page="2">2</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 3" data-page="3">3</button></li>
<li class="ds-pagination__compact" aria-hidden="true">1 de 3</li>
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Próxima página" data-page="2"><ds-icon name="chevron-right"></ds-icon></button></li>
</ul></nav>
```

## Anatomia

Seis partes, sempre na mesma ordem, de cima para baixo.

- 1 — Cabeçalho — Título, uma frase do que é a lista e uma ação principal (Convidar). Exportar e afins vão em secundário.
- 2 — Filtros — Busca e os filtros mais usados, numa linha. A ordenação fica no cabeçalho da tabela, num lugar só.
- 3 — Barra de lote — Toma o lugar dos filtros enquanto há seleção: quantas, o que dá para fazer com elas e o X para sair.
- 4 — Tabela — A primeira coluna identifica a linha (avatar, nome e e-mail). Ordenação no cabeçalho das colunas que fazem sentido.
- 5 — Ações da linha — Um ⋯ no fim de cada linha, sempre visível. O que é de uma pessoa só fica aqui, não na barra de lote.
- 6 — Paginação — Embaixo, com o intervalo (“1–8 de 22”). Filtrar volta para a página 1.

## Regras

Seis decisões que valem para qualquer lista de dados.

O endereço guarda a lista

Busca, filtros, ordenação e página vão para a URL. Voltar, recarregar e mandar o link para alguém mostram a mesma lista.

Seleção é da página

O checkbox do cabeçalho marca só o que está à vista. Filtrar ou mudar de página não leva a seleção junto, para ninguém agir sobre o que não vê.

Desfazer em vez de confirmar

Remover e desativar acontecem na hora, com “Desfazer” no aviso. Uma pergunta antes de cada ação só ensina a clicar em “Sim” sem ler.

As ações não somem

O ⋯ da linha fica sempre à vista, não só com o mouse por cima: no toque e no teclado não existe “passar o mouse”.

Vazio por filtro não é lista vazia

Quando os filtros não acham nada, diga isso e ofereça “Limpar filtros”. O convite para começar é para quando não existe nada mesmo.

Datas que se leem

“14 de nov.” em vez de “2026-11-14T09:12”. O horário exato fica para o detalhe da pessoa.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4"></rect><path d="m8 12 3 3 5-6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M9 13.5 4.5 9 9 4.5M4.5 9h10a5 5 0 0 1 0 10H11"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><g fill="currentColor"><circle cx="6" cy="12" r="0.75"></circle><circle cx="12" cy="12" r="0.75"></circle><circle cx="18" cy="12" r="0.75"></circle></g></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m20 20-4.2-4.2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 7V5h14v2M12 5v14M9 19h6"></path></svg>
```

## Mensagens

Curtas, com o número e o nome do que mudou. A ação vem junto, no próprio aviso.

| Situação | Evite | Prefira |
| --- | --- | --- |
| Lote feito | Operação realizada com sucesso! | 3 pessoas removidas. Desfazer |
| Sem resultado | Nenhum registro encontrado. | Ninguém com esses filtros. Limpar filtros |
| Contagem | Exibindo registros 1 a 8 | 8 de 22 pessoas |
| Seleção | Itens selecionados: 3 | 3 selecionadas |

## Acessibilidade

Uma tabela de verdade, com legenda e cabeçalhos, e cada mudança dita em voz alta.

- Tabela com nome — `<caption>` (pode ficar escondida) e `scope="col"` nos cabeçalhos. A área que rola tem `tabindex="0"` para rolar pelo teclado.
- Ordenação dita — O botão do cabeçalho troca `aria-sort` no `<th>`; o leitor de tela diz “crescente” ou “decrescente”.
- Checkbox com o nome da linha — “Selecionar Amanda Ribeiro”, não só “Selecionar”. O do cabeçalho fica misto quando parte da página está marcada.
- Contagens anunciadas — A contagem dos filtros e a da seleção ficam em regiões `aria-live`; o aviso de “Desfazer” é um toast com `role="status"`.
- O foco não se perde — Depois de remover, o foco vai para a tabela, não para o topo da página. Ao limpar a seleção, volta para os filtros.

## Código

A lista junta `createFilters`, a tabela, `createPagination` e `toast` com “Desfazer”. A barra de lote é marcação sua.

```html
<div class="lista">
  <div id="filtros"></div>

  <!-- aparece no lugar dos filtros quando há seleção -->
  <div class="barra-de-lote" role="region" aria-label="Ações em lote" hidden>
    <p aria-live="polite">3 selecionadas</p>
    <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm">Remover</button>
  </div>

  <div class="ds-table-wrap" role="region" aria-labelledby="legenda" tabindex="0">
    <table class="ds-table ds-table--hover">
      <caption id="legenda" class="ds-visually-hidden">Pessoas</caption>
      <thead><tr>
        <th scope="col" class="ds-table__check"><input type="checkbox" aria-label="Selecionar as pessoas desta página"></th>
        <th scope="col" aria-sort="ascending"><button type="button" class="ds-table__sort">Pessoa</button></th>
        …
      </tr></thead>
      <tbody>…</tbody>
    </table>
  </div>

  <nav class="ds-pagination" id="paginas" aria-label="Páginas"></nav>
</div>
```

```html
import { createFilters, createPagination, filtersToQuery, toast } from 'https://lumeui.dev/v/1.13/lume.js';

const pages = createPagination(document.querySelector('#paginas'), {
  total: pessoas.length, pageSize: 8,
  onChange: ({ page }) => render(),
});

const filters = createFilters(document.querySelector('#filtros'), {
  ...config,
  onChange(state) {
    history.replaceState(null, '', '?' + filtersToQuery(state, config));
    selecao.clear();   // a seleção não atravessa filtros
    pages.setPage(1);
    render();
  },
});

function remover(ids) {
  const antes = [...pessoas];
  pessoas = pessoas.filter((p) => !ids.includes(p.id));
  render();
  toast(`${ids.length} pessoas removidas`, {
    action: { label: 'Desfazer', onClick: () => { pessoas = antes; render(); } },
  });
}
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Lista é para comparar e agir sobre muitas coisas parecidas. Para uma coisa só, use a página de detalhe.

- **Faça:** poucas colunas, as que decidem. Quatro ou cinco colunas que ajudam a escolher a linha certa. O resto mora no detalhe, a um clique.
- **Evite:** ação em lote escondida no ⋯ da linha. O que vale para várias linhas fica na barra de lote; o ⋯ é só daquela linha. Misturar os dois faz a pessoa adivinhar sobre o que a ação age.
- **Dica:** Mais de mil linhas? Busque no servidor. O padrão é o mesmo: os filtros mandam o estado, o servidor devolve uma página e o total. A tabela nunca precisa ter tudo de uma vez.
