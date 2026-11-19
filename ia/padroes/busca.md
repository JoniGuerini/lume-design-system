# Busca e comandos

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/busca

Três jeitos de encontrar: a paleta (Ctrl K) leva a qualquer lugar, os filtros recortam uma lista e os atalhos poupam o caminho de quem já sabe para onde vai.

Em números: abre a busca: Ctrl K · também abre: / · níveis de relevância: 3 · linha de filtros: 1.

## Paleta de comandos

Uma caixa só para ir a qualquer página ou disparar qualquer ação. Abre com Ctrl K, com / ou pela lupa — e volta o foco para onde estava ao fechar.

- 1 — Campo de busca — Já vem focado. Digitar filtra na hora — sem botão de buscar.
- 2 — Grupo — Agrupa por intenção: ir para, criar, ações, ajuda. A ordem dos grupos é a de registro.
- 3 — Item ativo — Fundo de seleção e o ↵ à direita. ↑ ↓ movem; o mouse também move.
- 4 — Dica — Um atalho ou um estado curto (“Em breve”). Nunca uma frase.
- 5 — Rodapé — Lembra as teclas. Some no celular, onde não há teclado físico.

Uma paleta só deste exemplo, com os comandos de um app de pedidos. Ctrl K continua abrindo a do Lume.

Marcação dos exemplos desta seção:

```html
<div class="ds-command__search"><ds-icon name="search"></ds-icon><span>rel<span></span></span><kbd class="ds-kbd">Esc</kbd><span>1</span></div>

<div class="ds-command__list">
<div class="ds-command__group"><div class="ds-command__group-label">Ir para<span>2</span></div>
<div class="ds-command__item" aria-selected="true"><ds-icon name="bar-chart"></ds-icon><span class="ds-command__label">Relatórios</span><ds-icon name="corner-down-left"></ds-icon><span>3</span></div>
</div>
<div class="ds-command__group"><div class="ds-command__group-label">Ações</div>
<div class="ds-command__item"><ds-icon name="folder"></ds-icon><span class="ds-command__label">Arquivar pedidos concluídos</span></div>
<div class="ds-command__item"><ds-icon name="keyboard"></ds-icon><span class="ds-command__label">Ver atalhos de teclado</span><span class="ds-command__hint">?</span><span>4</span></div>
</div>
</div>

<footer class="ds-command__footer"><span><kbd class="ds-kbd">↑</kbd><kbd class="ds-kbd">↓</kbd> navegar</span><span><kbd class="ds-kbd">↵</kbd> abrir</span><span><kbd class="ds-kbd">Esc</kbd> fechar</span><span>5</span></footer>

<button type="button" class="ds-btn ds-btn--primary" data-open-demo=""><ds-icon name="search"></ds-icon>Abrir a paleta de exemplo</button>
```

## Registrar itens

Cada item é um objeto. Passe uma função em `items` e a lista é lida de novo a cada abertura — itens que dependem do contexto aparecem sozinhos.

| Campo | Para que serve |
| --- | --- |
|  `id`  | Único. Identifica o item. |
|  `label`  | O que aparece e o que mais pesa na busca. Comece pelo verbo ou pelo nome do lugar. |
|  `group`  | Título do grupo. Itens do mesmo grupo aparecem juntos. |
|  `icon`  | Um ícone da biblioteca. Ajuda a ler a lista de relance. |
|  `keywords`  | Sinônimos que a pessoa pode digitar (“planilha” acha “Exportar em CSV”). Não aparecem. |
|  `description`  | Também entra na busca. Use para ações que precisam de contexto. |
|  `hint`  | Atalho ou estado curto, à direita. |
|  `perform()`  | O que acontece no Enter ou no clique. A paleta fecha antes. |

```html
import { createCommandPalette } from 'https://lumeui.dev/v/1.12/lume.js';

const palette = createCommandPalette({
  placeholder: 'Buscar páginas e ações…',
  items: () => [
    { id: 'pedidos', label: 'Pedidos', group: 'Ir para', icon: 'inbox',
      keywords: ['vendas'], perform: () => go('/pedidos') },
    { id: 'novo', label: 'Novo pedido', group: 'Criar', icon: 'plus',
      hint: 'N', perform: () => openNewOrder() },
    { id: 'csv', label: 'Exportar em CSV', group: 'Ações', icon: 'download',
      keywords: ['planilha', 'excel'], perform: exportCsv },
  ],
});

// ⌘K, Ctrl K e / já abrem. Para um botão:
button.addEventListener('click', () => palette.open());
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Como a busca acha

Sem acento e sem maiúscula: “relatorio” acha “Relatórios”. Todas as palavras precisam aparecer — no rótulo, no grupo, na descrição ou nas palavras-chave. Depois, a ordem: o rótulo que começa com o texto vem primeiro.

- Relatórios — Ir para — começa com

- começa com — O rótulo começa com o texto.
- contém — O rótulo tem o texto no meio.
- outro campo — Achou no grupo, na descrição ou nas palavras-chave.

Marcação dos exemplos desta seção:

```html
<label class="ds-field">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" value="rela" data-tester="" aria-label="Testar a busca da paleta" autocomplete="off" spellcheck="false">
</label>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="rela">rela</button>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="planilha">planilha</button>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="novo cli">novo cli</button>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="pedidos">pedidos</button>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="xyz">xyz</button>
```

## Filtros

Uma linha acima da lista que ela recorta: busca primeiro, depois os filtros mais usados e a ordenação no fim. O que está ligado aparece embaixo, com um X para tirar — e a contagem diz quanto sobrou.

Busca primeiro — É o filtro que todo mundo tenta antes. Ela filtra enquanto você digita (com uma pausa curta) e Esc limpa. — Os mais usados à vista — Dois ou três filtros na linha. O resto vai para um botão “Mais filtros” — nunca uma segunda linha. — Ordenar não é filtrar — A ordenação fica no fim da linha e não aparece nos filtros ativos: muda a ordem, não o que sobra. — Sem resultado, um caminho — A lista vazia explica por quê e oferece “Limpar filtros”. Nunca uma tabela vazia sem aviso.

## Estado na URL

Filtro que só existe na memória se perde no recarregar e não dá para compartilhar. Guarde o estado na URL — só o que difere do padrão.

- Use `replaceState`: o botão Voltar não deve desfazer letra por letra.
- Quem recebe o link vê a mesma lista — inclusive a ordenação.
- Valor que não existe (um status apagado) é ignorado, não quebra a página.

```html
import { filtersToQuery, filtersFromQuery } from 'https://lumeui.dev/v/1.12/lume.js';

// ao filtrar: troca a URL sem empilhar uma entrada por letra digitada
history.replaceState(null, '', '?' + filtersToQuery(filters.value, config));

// ao abrir a página (ou num link compartilhado): restaura
filters.setValue(filtersFromQuery(location.search, config));
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-url="" aria-label="Copiar link" data-ds-tooltip="Copiar link"><ds-icon name="link"></ds-icon></button>

<button type="button" class="ds-chip ds-chip--sm" data-restore="?status=pendente&amp;canal=app"><code>?status=pendente&amp;canal=app</code></button>

<button type="button" class="ds-chip ds-chip--sm" data-restore="?q=souza"><code>?q=souza</code></button>

<button type="button" class="ds-chip ds-chip--sm" data-restore="?desconto=1&amp;ordem=maior"><code>?desconto=1&amp;ordem=maior</code></button>

<button type="button" class="ds-chip ds-chip--sm" data-restore="?"><code>sem filtros</code></button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Atalhos de teclado

Atalho é um caminho a mais, nunca o único. Mostre-o onde a ação aparece — no tooltip, no menu, na paleta — e quem usa muito aprende sozinho.

| Teclas | No Lume |
| --- | --- |
| Ctrl K | Abrir ou fechar a busca |
| / | Abrir a busca (fora de campos) |
| Ctrl B | Recolher a sidebar ou abrir a gaveta |
| ↑ ↓ | Mover nas listas, menus e na paleta |
| ↵ | Abrir o item ativo |
| Esc | Fechar busca, menu, gaveta ou limpar a busca dos filtros |

Onde mostrar

⌘ no Mac, Ctrl no resto

Escreva o modificador do sistema da pessoa. Cada tecla é um kbd separado.

Uma tecla só, fora de campos — “/” ou “N” não disparam enquanto alguém digita. Com modificador, valem em qualquer lugar.

Não brigue com o navegador — Nada de Ctrl T, Ctrl W, Ctrl L ou Ctrl R: são do navegador e do sistema.

Diga para a tecnologia assistiva

Use `aria-keyshortcuts` no controle que o atalho aciona.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Novo pedido" data-ds-tooltip="Novo pedido" data-ds-tooltip-kbd="N" aria-keyshortcuts="N"><ds-icon name="plus"></ds-icon></button>

<button type="button" class="ds-chip" data-shortcut-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-254">Pedido<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<kbd class="ds-kbd">Ctrl</kbd>

<kbd class="ds-kbd">K</kbd>
```

## Acessibilidade

Buscar é a forma mais rápida de navegar com teclado e leitor de tela — desde que cada peça diga o que é.

- Paleta é um diálogo com combobox — ↑ ↓ ↵ — O campo é um `combobox` ligado à lista (`listbox`); o item ativo é anunciado por `aria-activedescendant` sem tirar o foco do campo.
- Foco que volta — Esc — Ao fechar a paleta, o foco volta para quem a abriu. Ao executar um item, vai para onde a ação levar.
- Filtros numa região de busca — A barra tem `role="search"` com nome; cada filtro é um botão com menu, com rótulo e valor no texto.
- Contagem anunciada — O “8 de 24 pedidos” fica numa região `aria-live="polite"`: o leitor fala o resultado depois de cada mudança, sem interromper.
- Remover com nome — O X de cada filtro ativo diz o que remove (“Remover filtro Status: Pago”). Depois de remover, o foco vai para o próximo — ou para a busca.
- Lista vazia explicada — Sem resultados, a tabela dá lugar a uma mensagem com o motivo e um botão para limpar.

## Código

A paleta e os filtros são módulos independentes; os dois só pedem dados e uma função para cada ação.

### Filtros

```html
import { createFilters } from 'https://lumeui.dev/v/1.12/lume.js';

const filters = createFilters(document.querySelector('#filtros'), {
  label: 'Filtrar pedidos',
  search: { placeholder: 'Buscar por cliente ou número' },
  fields: [
    { id: 'status', label: 'Status', options: [{ value: 'pago', label: 'Pago' }, …] },
    { id: 'canal', label: 'Canal', options: [{ value: 'app', label: 'App' }, …] },
  ],
  toggles: [{ id: 'desconto', label: 'Com desconto' }],
  sort: { id: 'ordem', label: 'Ordenar', options: [...], value: 'recentes' },
  noun: ['pedido', 'pedidos'],
  onChange(state) {
    const rows = buscar(state);            // { q, status, canal, desconto, ordem }
    render(rows);
    filters.setCount(rows.length, total);  // "8 de 24 pedidos", anunciado ao leitor de tela
  },
});

filters.clear();                           // limpa tudo, menos a ordenação
```

| API | O que faz |
| --- | --- |
|  `createFilters(el, config)`  | Monta a barra (busca, filtros, liga/desliga, ordenação, ativos, contagem) e devolve o controle. |
|  `filters.value · setValue(parcial) · clear()`  | Lê e muda o estado; cada mudança chama `onChange`. |
|  `filters.setCount(mostrados, total)`  | Atualiza a contagem anunciada. |
|  `filtersToQuery · filtersFromQuery`  | Estado ⇄ URL, ignorando o que é padrão ou não existe. |
|  `.ds-filters e partes`  | As classes também servem para uma barra montada à mão (veja o comentário em filters.css). |

### Paleta

| Opção | O que faz |
| --- | --- |
|  `items`  | Lista de itens — ou uma função que devolve a lista a cada abertura. |
|  `placeholder · label`  | Texto do campo e o nome do diálogo para leitores de tela. |
|  `hotkeys: false`  | Não liga ⌘K nem /. Para paletas extras, como a de exemplo desta página. |
|  `open() · close() · destroy()`  | Controle manual; destroy() remove o diálogo e os atalhos. |
|  `filterCommands(items, busca)`  | A mesma busca da paleta, para testes ou outras listas. |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Encontrar deve ser mais rápido do que lembrar onde fica.

- **Faça:** tudo também pela paleta. Toda página e toda ação frequente entra na paleta, com sinônimos. Quem conhece o atalho nunca precisa caçar um menu.
- **Evite:** filtros espalhados. Um filtro dentro de cada cartão ou coluna confunde o que vale para quê. Uma linha só, acima de tudo o que ela recorta.
- **Dica:** Rótulo com a palavra da pessoa. “Exportar em CSV” com a palavra-chave “planilha”. Pense no que alguém digitaria, não no nome interno da função.
