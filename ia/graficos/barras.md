# Barras

Seção do Lume: Gráficos. Página: https://lumeui.dev/#/graficos/barras

Compara grandezas lado a lado. Uma base no zero, barras finas, a ponta arredondada carregando o dado — e o número só onde ele conta a história.

Em números: layouts: 3 · orientações: 2 · espessura máxima: 24 px · contraste mínimo: 3,36:1.

## Exemplo

```html
import { createBarChart } from 'https://lumeui.dev/v/1.8/lume.js';

createBarChart(document.querySelector('#vendas'), {
  title: 'Vendas por canal',
  subtitle: 'Mil unidades · 1º semestre',
  categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  series: [
    { name: 'App', values: [30, 35, 41, 44, 52, 60] },
    { name: 'Loja', values: [40, 42, 38, 50, 55, 52] },
    { name: 'Site', values: [20, 18, 22, 25, 24, 28] },
  ],
  labels: 'none',
});
```

## Variantes

Cada forma responde a uma pergunta. Escolha pela pergunta, não pela aparência.

Colunas `orientation: 'vertical'` — Uma série, uma cor. Só o maior valor ganha rótulo; o eixo carrega o resto.

Agrupadas `layout: 'grouped'` — Compara séries dentro de cada categoria. Até 4 séries, com 2 px entre barras vizinhas.

Empilhadas `layout: 'stacked'` — O total e a composição juntos. Só a ponta do topo é arredondada; o total vai em cima.

100% `layout: 'percent'` — Só a composição: cada coluna soma 100%. O tooltip mostra a parte e o valor real.

Horizontais `orientation: 'horizontal'` — Para rankings e nomes longos. O valor vai na ponta, então o eixo some.

Divergentes `diverging: true` — Acima e abaixo de uma referência, nas duas pontas da escala divergente. O zero é a meta.

Ênfase `highlight: 11` — Quando a história é uma barra só: ela fica na cor, o resto vira contexto em cinza.

Funil `ordinal: true` — Etapas em sequência numa rampa de um tom. O tooltip mostra quanto passou da etapa anterior.

## Estados

O gráfico responde ao ponteiro, ao teclado e aos dados. Os dois primeiros começam com o estado aplicado — interaja para ver de novo.

Hover e foco — A faixa da categoria acende e o tooltip lista todas as séries. Com Tab e setas, o mesmo — e um leitor de tela ouve os valores.

Série escondida — Clique na legenda para esconder uma série. As outras mantêm a cor: a cor segue a série, não a posição.

Carregando — Recarregar

Ao buscar dados novos, o desenho anterior fica a meia opacidade. Sem esqueleto, sem pulo de layout.

Vazio — Sem dados, a área do gráfico vira um aviso com a mesma altura. Diga o que fazer, se houver.

Marcação dos exemplos desta seção:

```html
<figure class="ds-chart" data-kind="bar">
<figcaption class="ds-chart__head">
<div class="ds-chart__titles">
<p class="ds-chart__title" id="ds-bar-19-title">Vendas na semana</p>
</div>
<div class="ds-chart__actions">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-chart__toggle" data-chart-toggle="" aria-pressed="false" aria-label="Ver como tabela" data-ds-tooltip="Ver como tabela"><ds-icon name="table"></ds-icon></button>
</div>
</figcaption>
<div class="ds-chart__legend" data-legend="" hidden=""></div>
<div class="ds-chart__body" data-body="">
<div class="ds-chart__plot" data-plot="" role="group" aria-roledescription="gráfico" aria-describedby="ds-bar-19-hint" aria-label="Vendas na semana. Gráfico de colunas, 0 categorias"><div class="ds-chart__empty"><ds-icon name="bar-chart"></ds-icon><span>Nenhuma venda neste período.</span></div></div>
<div class="ds-chart__tooltip" data-tooltip="" hidden=""></div>
</div>
<div class="ds-chart__table" data-table="" hidden=""></div>
<p class="ds-visually-hidden" id="ds-bar-19-hint">Use as setas para percorrer os valores. A tabela tem todos os dados.</p>
<p class="ds-visually-hidden" aria-live="polite" data-live=""></p></figure>
```

## Anatomia

Seis medidas fixas fazem o visual calmo. O dado é a única coisa que pode chamar atenção.

- 1 — Linha de base — Toda barra nasce do zero, numa linha de 1 px em `chart.axis`. Barra não corta eixo.
- 2 — Barra — No máximo 24 px de espessura. O que sobra da faixa é respiro, não barra mais gorda.
- 3 — Ponta de dados — Raio de 4 px só na ponta que carrega o valor. A base fica reta, colada no zero.
- 4 — Respiro — 2 px entre barras vizinhas e entre segmentos empilhados, deixando a superfície aparecer. Nunca um contorno.
- 5 — Rótulo de valor — Na ponta, em `fg.default` — texto nunca usa a cor da série. Só onde conta a história.
- 6 — Grade e eixo — Fios de 1 px, sólidos, em `chart.grid`. Marcas redondas, compactas a partir de mil.

## Acessibilidade

Todo gráfico de barras já sai assim. O que continua sendo seu: um título claro e um formato de número que faça sentido.

- Tabela sempre à mão — O botão no cabeçalho troca o gráfico por uma `<table>` com todos os valores — inclusive os que o gráfico não rotula. O tooltip nunca é o único caminho até um número.
- Teclado — Tab ← → Home End Esc — Tab foca o gráfico; as setas percorrem as categorias; Home e End vão às pontas; Esc fecha o tooltip.
- Leitor de tela — O gráfico se anuncia com título, tipo e número de categorias. A cada seta, uma região ao vivo lê a categoria e o valor de cada série.
- Cor nunca sozinha — Com duas séries ou mais há legenda; posição e rótulos ajudam. Para daltonismo total, impressão e alto contraste, ligue `texture`.
- Contraste verificado — As 8 cores de série passam de 3:1 sobre a superfície nos dois temas — a menor fica em 3,36:1. A ordem das cores foi validada para protanopia e deuteranopia.
- Movimento — As barras crescem uma vez, quando aparecem. Com movimento reduzido, nada anima.

## Tokens usados

Marcas usam as cores de gráfico; textos usam sempre os tokens de texto.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Série 1 (e a única, quando há uma) | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Série 2 — e assim até a 8 | #2A8ED6 | #2A8ED6 |
| color.chart.muted (`--ds-color-chart-muted`) | Contexto em cinza (ênfase) | #C0CAD6 | #4A4744 |
| color.chart.div.2 (`--ds-color-chart-div-2`) | Abaixo da referência | #48A7F1 | #2A8ED6 |
| color.chart.div.6 (`--ds-color-chart-div-6`) | Acima da referência | #F57630 | #D95C0A |
| color.chart.ord.5 (`--ds-color-chart-ord-5`) | Primeira etapa do funil | #923700 | #FF945E |
| color.chart.ord.1 (`--ds-color-chart-ord-1`) | Última etapa do funil | #FF945E | #923700 |
| color.chart.grid (`--ds-color-chart-grid`) | Linhas de grade | #DAE0E8 | #33312E |
| color.chart.axis (`--ds-color-chart-axis`) | Linha de base | #C0CAD6 | #4A4744 |
| color.fg.default (`--ds-color-fg-default`) | Rótulos de valor | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Rótulos de categoria | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Marcas do eixo | #53657A | #9C9792 |
| color.bg.hover (`--ds-color-bg-hover`) | Faixa da categoria no hover | #3E51660D | #FFFFFF0D |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo do tooltip | #FFFFFF | #2C2A27 |
| shadow.md (`--ds-shadow-md`) | Sombra do tooltip | 0 2px 4px -1px rgb(45 58 74 / 0.06), 0 8px 20px -4px rgb(45 58 74 / 0.1) | 0 2px 4px -1px rgb(0 0 0 / 0.28), 0 8px 20px -4px rgb(0 0 0 / 0.36) |
| color.border.focus (`--ds-color-border-focus`) | Anel de foco do gráfico | #53657A | #C0CAD6 |

## Uso

Barras comparam comprimento. Quase todo erro vem de esquecer isso.

- **Faça:** comece do zero. O comprimento da barra é o valor. Com a base no zero, 66 parece um pouco maior que 62 — porque é.
- **Evite:** eixo cortado. Começar em 60 faz 6% de diferença parecer o triplo. Se a variação pequena é a história, use uma linha.
- **Dica:** Nomes longos? Deite as barras. Na horizontal o rótulo cabe inteiro, sem girar texto, e o ranking se lê de cima para baixo.
- **Faça:** uma série, uma cor. Times, produtos e regiões não têm ordem. Todas as barras na cor do slot 1; o comprimento já diz quem é maior.
- **Evite:** pintar cada barra. Cores diferentes prometem séries diferentes. Para categorias nominais, isso é ruído — e gasta as cores de que você vai precisar.
- **Dica:** Mais de 4 séries. Agrupadas com 5 séries ou mais viram um pente ilegível. Empilhe, junte a cauda em “Outros” ou divida em vários gráficos pequenos.

## API

Uma chamada monta o gráfico; `update()` troca os dados sem recriar a moldura.

| Opção | Valores | Padrão | O que faz |
| --- | --- | --- | --- |
|  `categories`  | string[] | — | Rótulos das categorias, na ordem do eixo. |
|  `series`  | [{ name, values, color? }] | — | Uma entrada por série. Sem `color`, a série usa o slot da sua posição (1–8). |
|  `orientation`  | 'vertical' \| 'horizontal' | 'vertical' | Horizontal para rankings e nomes longos. |
|  `layout`  | 'grouped' \| 'stacked' \| 'percent' | 'grouped' | Lado a lado, empilhado ou empilhado em 100%. |
|  `labels`  | 'auto' \| 'none' \| 'max' \| 'last' \| 'all' | 'auto' | Rótulos de valor. `auto` mostra todos só em barras horizontais de uma série ou empilhadas. |
|  `highlight`  | número | — | Índice da categoria em destaque; as outras ficam em `chart.muted`. |
|  `diverging`  | boolean | false | Positivo e negativo nas pontas da escala divergente. Legenda com `positiveLabel` e `negativeLabel`. |
|  `ordinal`  | boolean | false | Categorias em sequência (funil, faixas) numa rampa de um tom. |
|  `format`  | preset \| Intl \| função | 'number' | `'integer'`, `'compact'`, `'percent'`, `'currency'` … O eixo compacta sozinho; troque com `axisFormat`. |
|  `height`  | px | 280 | Altura total das colunas, incluindo o eixo. Barras horizontais calculam a altura pelas linhas. |
|  `title · subtitle`  | string | — | Cabeçalho do gráfico. Sem título, passe `label` para nomeá-lo. |
|  `card · table · texture`  | boolean | false · true · false | Superfície com contorno, botão de tabela e hachura de reserva. |

```html
const chart = createBarChart(el, { title: 'Vendas', categories, series });

chart.update({ series: novasSeries });   // redesenha mantendo legenda e tabela
chart.setLoading(true);                   // meia opacidade enquanto busca
chart.destroy();                          // remove tudo e os observadores
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```
