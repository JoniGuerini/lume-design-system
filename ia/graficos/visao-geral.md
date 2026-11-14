# Gráficos

Seção do Lume: Gráficos. Página: https://lumeui.dev/#/graficos/visao-geral

Dados que se leem de relance e aguentam um segundo olhar. Marcas finas, uma cor por papel, rótulos só onde importam — e toda informação acessível por teclado e em tabela.

Em números: formas: 6 · cores categóricas: 8 · pior ΔE entre vizinhas: 11,7 · contraste das marcas: ≥ 3,3:1.

## Exemplo ao vivo

Um painel com filtro único no topo: o período vale para tudo abaixo dele, então os números sempre concordam. Ao trocar, os gráficos seguram o desenho anterior enquanto atualizam — sem esqueleto, sem pulo.

Marcação dos exemplos desta seção:

```html
<div class="ds-segmented" role="radiogroup" aria-labelledby="vg-periodo-label">
<button type="button" class="ds-segmented__item" role="radio" data-range="7d" aria-checked="false">7 dias</button><button type="button" class="ds-segmented__item" role="radio" data-range="30d" aria-checked="true">30 dias</button><button type="button" class="ds-segmented__item" role="radio" data-range="90d" aria-checked="false">90 dias</button><button type="button" class="ds-segmented__item" role="radio" data-range="12m" aria-checked="false">12 meses</button>
</div>
```

## Qual gráfico usar

Escolha pela tarefa de quem lê, antes de pensar em cor. Às vezes a resposta certa nem é um gráfico.

Comparar quantidades

Barras

Do maior ao menor, entre categorias ou ao longo do tempo. Começa sempre no zero.

Mostrar tendência

Linhas e áreas

Como algo muda no tempo. Compare com o período anterior em cinza.

Parte do todo

Rosca

A proporção de relance, com até 6 fatias. Valores próximos pedem barras.

Relação entre medidas

Dispersão

Duas grandezas por item: correlação, grupos e pontos fora da curva.

Intensidade numa grade

Heatmap

Dia × hora, semana × mês: onde concentra. Até 7 faixas de cor.

Um número que importa

Indicadores

O valor de agora, a variação e a tendência. O número é o gráfico.

### Quando não é gráfico

Um valor só — Uma coluna sozinha ou uma pizza de duas fatias viram um indicador. O número é o gráfico.

Valores exatos ou mais de 7 classes — Acima de 7 cores com significado, as vizinhas se confundem. Use uma tabela — ou tabela e gráfico juntos.

Uma série é a história — Destaque essa série na cor e deixe as outras em cinza. Ênfase é mais clara que oito cores disputando atenção.

Marcação dos exemplos desta seção:

```html
<path class="ds-chart__grid" d="M8 63.5H112"></path>

<rect x="12" y="37" width="8" height="26" rx="2" class="ds-chart__bar"></rect>

<rect x="26" y="25" width="8" height="38" rx="2" class="ds-chart__bar"></rect>

<rect x="40" y="32" width="8" height="31" rx="2" class="ds-chart__bar"></rect>

<rect x="54" y="17" width="8" height="46" rx="2" class="ds-chart__bar"></rect>

<rect x="68" y="11" width="8" height="52" rx="2" class="ds-chart__bar"></rect>

<rect x="82" y="19" width="8" height="44" rx="2" class="ds-chart__bar"></rect>

<rect x="96" y="5" width="8" height="58" rx="2" class="ds-chart__bar"></rect>
```

## Cores

Cada cor faz um trabalho só: identidade (categórica), quantidade (sequencial), etapa (ordinal), lado de uma referência (divergente) ou estado (status). E nenhuma foi escolhida no olho — a ordem saiu de um validador.

### Categóricas identidade · ordem fixa, nunca recicle

- 1 — Marca — `brand.600` — #D95C0A
- 2 — Azul — `blue.600` — #2A8ED6
- 3 — Rosa — `pink.600` — #CD5892
- 4 — Âmbar — `amber.700` — #A86600
- 5 — Verde-azulado — `teal.600` — #019D90
- 6 — Vermelho — `red.600` — #E44B46
- 7 — Violeta — `violet.600` — #9070DD
- 8 — Verde — `green.600` — #339F5C

Os mesmos tons passaram nos dois temas — validados contra a superfície escura e a clara. Da 9ª série em diante não existe cor nova: a cauda vira “Outros”.

11,7 — pior ΔE entre vizinhas com protanopia e deuteranopia — alvo ≥ 8 — 18,5 — pior ΔE entre vizinhas com visão típica — mínimo 15 — 11,8 · 15,1 — as 3 primeiras em todos os pares, para dispersão — daltonismo · visão típica — 3,4 · 3,5 — menor contraste de uma marca com a superfície — Lume claro · Lume escuro · mínimo 3:1

Visão típica — Protanopia — Deuteranopia — Simulação de Machado, Oliveira e Fernandes (2009). Vizinhas continuam distintas mesmo sem distinguir vermelho e verde.

### Escalas um tom por trabalho · cada tema com os seus passos

Lume claro

Sequencial `chart.seq.1–7` — pouco — muito

Ordinal `chart.ord.1–5` — 1ª etapa — 5ª etapa

Divergente `chart.div.1–7` — abaixo — neutro — acima

Lume escuro

Sequencial `chart.seq.1–7` — pouco — muito

Ordinal `chart.ord.1–5` — 1ª etapa — 5ª etapa

Divergente `chart.div.1–7` — abaixo — neutro — acima

- Sequencial. Magnitude: um tom só, de pouco a muito. No escuro a âncora inverte — mais é mais claro.
- Ordinal. Etapas em ordem (funil, faixas). A ponta mais fraca ainda passa de 2:1 sobre a superfície.
- Divergente. Abaixo e acima de uma referência: frio e quente, com o meio neutro e cinza.

### Status reservadas

- Bom — Meta batida, operação normal
- Atenção — Perto do limite
- Crítico — Acima do limite, falha
- Informação — Neutro, só para avisar

Só quando a cor significa bom ou ruim — e sempre com ícone e texto. Nunca como “série 4”.

### Contexto

- `chart.muted` — Ênfase: o resto em cinza, para uma série se destacar
- `chart.other` — “Outros”: a cauda agrupada
- `chart.grid` — Grade e célula sem dado
- `chart.axis` — Linha de base, eixos e mira

### A cor segue a entidade experimente

## Anatomia

Sete peças, sempre no mesmo lugar. O título nomeia o que está plotado; com uma série só, nem precisa de legenda.

- 1 — Título e subtítulo — O que está plotado e em que unidade. Frase curta, sem dois-pontos.
- 2 — Legenda — Sempre que houver duas séries ou mais. A chave espelha a marca: traço para linha, quadrado para barra.
- 3 — Eixo e grade — Fios de 1 px, recessivos. Marcas redondas, compactadas a partir de mil.
- 4 — Marca — A única coisa com cor forte. Linha de 2 px, ponto final de 8 px com anel.
- 5 — Rótulo direto — No fim da linha, só se não colidir. Texto na cor de texto — nunca na cor da série.
- 6 — Tooltip — No hover e no foco. O valor vem primeiro e forte; o nome da série, depois.
- 7 — Tabela — O gêmeo acessível: todos os números, inclusive os que o gráfico não rotula.

## Marcas e respiro

O visual calmo vem de poucas medidas fixas e de dois espaços negativos. Só o dado pode ser barulhento.

Barra — Até 24 px de espessura. Ponta de dados com raio de 4 px; a base, reta, nasce de uma linha só.

Linha — 2 px, com pontas e junções arredondadas. Nada de linhas finas demais para ler nem grossas a ponto de pesar.

Marcador — 8 px, com anel de 2 px na cor da superfície — o ponto continua legível onde cruza uma linha.

Respiro de 2 px — Um vão na cor da superfície separa segmentos empilhados e barras vizinhas. Nunca um contorno em volta.

Área — A cor da série a 10% sob a linha: uma lavagem, nunca um bloco saturado.

Grade e meta — Grade de 1 px, sólida e um passo fora da superfície. O tracejado é reservado para meta e limite.

Marcação dos exemplos desta seção:

```html
<path class="ds-chart__baseline" d="M20 84.5H140"></path>

<path class="ds-chart__bar" d="M68 84V28A4 4 0 0 1 72 24H88A4 4 0 0 1 92 28V84Z"></path>

<path class="ds-chart__grid" d="M16 76.5H144M16 44.5H144"></path>

<path class="ds-chart__line" d="M16 70 44 58 72 62 100 36 128 30 144 22"></path>

<path class="ds-chart__line" d="M16 70 80 40 144 30"></path>

<path class="ds-chart__line" d="M16 30 80 44 144 72"></path>

<circle class="ds-chart__dot" cx="80" cy="44" r="6"></circle>

<path class="ds-chart__bar" d="M52 84H76V60H52Z"></path>
```

## Interação

Todo gráfico já vem interativo. O tooltip complementa, nunca é o único caminho até um valor.

- Tooltip — Valor forte, nome apagado, chave em traço. Em linhas, mostra todas as séries daquele ponto.
- Mira — Um fio vertical encontra a data mais próxima. Ninguém precisa acertar uma linha de 2 px.
- Legenda que esconde — Clique numa série para tirá-la do gráfico. As outras não mudam de cor.
- Tabela — O ícone no canto troca o gráfico pelos números.
- Teclado — Tab ← → Home End Esc — Tab foca o gráfico; as setas percorrem os pontos e o leitor de tela anuncia cada um.

## Acessibilidade

Decisões que já vêm prontas em todos os gráficos — e as que continuam sendo suas.

- Cor nunca sozinha — Duas séries ou mais têm legenda; até quatro, também rótulo direto. Status vem com ícone e texto.
- Paleta validada para daltonismo — Vizinhas separadas por ΔE ≥ 8 com protanopia e deuteranopia, e ≥ 15 com visão típica, nos dois temas.
- Tabela em todo gráfico — O botão “Ver como tabela” mostra todos os números. É o equivalente acessível, não um extra.
- Teclado e leitor de tela — Tab ← → Esc — O gráfico recebe foco, as setas percorrem os valores e uma região ao vivo anuncia cada um.
- Contraste das marcas — Toda cor categórica passa de 3:1 contra a superfície — 3,4:1 no Lume claro e 3,5:1 no Lume escuro, no pior caso.
- Textura de reserva — Com `texture: true`, barras e fatias ganham hachura em 45° e 135° — também na impressão e em alto contraste.
- Movimento reduzido — A entrada anima uma vez, quando o gráfico aparece. Com `prefers-reduced-motion`, não anima.
- Texto dos dados é seu — Nomes de série e categoria entram como texto, nunca como HTML — vêm de planilhas e APIs.

## Tokens

Marcas consomem `color.chart.*`; textos, sempre `color.fg.*`. Troque a marca e o gráfico troca junto.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Série 1 · Marca | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Série 2 · Azul | #2A8ED6 | #2A8ED6 |
| color.chart.series.3 (`--ds-color-chart-series-3`) | Série 3 · Rosa | #CD5892 | #CD5892 |
| color.chart.series.4 (`--ds-color-chart-series-4`) | Série 4 · Âmbar | #A86600 | #A86600 |
| color.chart.series.5 (`--ds-color-chart-series-5`) | Série 5 · Verde-azulado | #019D90 | #019D90 |
| color.chart.series.6 (`--ds-color-chart-series-6`) | Série 6 · Vermelho | #E44B46 | #E44B46 |
| color.chart.series.7 (`--ds-color-chart-series-7`) | Série 7 · Violeta | #9070DD | #9070DD |
| color.chart.series.8 (`--ds-color-chart-series-8`) | Série 8 · Verde | #339F5C | #339F5C |
| color.chart.muted (`--ds-color-chart-muted`) | Contexto em cinza (ênfase) | #C0CAD6 | #4A4744 |
| color.chart.other (`--ds-color-chart-other`) | “Outros” | #93A0B0 | #605D59 |
| color.chart.seq.1 (`--ds-color-chart-seq-1`) | Sequencial 1 · pouco | #FFE7DB | #712800 |
| color.chart.seq.2 (`--ds-color-chart-seq-2`) | Sequencial 2 | #FFB590 | #923700 |
| color.chart.seq.3 (`--ds-color-chart-seq-3`) | Sequencial 3 | #FF945E | #B74900 |
| color.chart.seq.4 (`--ds-color-chart-seq-4`) | Sequencial 4 | #F57630 | #D95C0A |
| color.chart.seq.5 (`--ds-color-chart-seq-5`) | Sequencial 5 | #D95C0A | #F57630 |
| color.chart.seq.6 (`--ds-color-chart-seq-6`) | Sequencial 6 | #B74900 | #FF945E |
| color.chart.seq.7 (`--ds-color-chart-seq-7`) | Sequencial 7 · muito | #923700 | #FFB590 |
| color.chart.ord.1 (`--ds-color-chart-ord-1`) | Ordinal 1 | #FF945E | #923700 |
| color.chart.ord.2 (`--ds-color-chart-ord-2`) | Ordinal 2 | #F57630 | #B74900 |
| color.chart.ord.3 (`--ds-color-chart-ord-3`) | Ordinal 3 | #D95C0A | #D95C0A |
| color.chart.ord.4 (`--ds-color-chart-ord-4`) | Ordinal 4 | #B74900 | #F57630 |
| color.chart.ord.5 (`--ds-color-chart-ord-5`) | Ordinal 5 | #923700 | #FF945E |
| color.chart.div.1 (`--ds-color-chart-div-1`) | Divergente 1 · abaixo | #1776B5 | #6ABCFF |
| color.chart.div.2 (`--ds-color-chart-div-2`) | Divergente 2 · abaixo | #48A7F1 | #2A8ED6 |
| color.chart.div.3 (`--ds-color-chart-div-3`) | Divergente 3 · abaixo | #98D0FF | #095C92 |
| color.chart.div.4 (`--ds-color-chart-div-4`) | Divergente 4 · neutro | #DAE0E8 | #3D3B38 |
| color.chart.div.5 (`--ds-color-chart-div-5`) | Divergente 5 · acima | #FFB590 | #923700 |
| color.chart.div.6 (`--ds-color-chart-div-6`) | Divergente 6 · acima | #F57630 | #D95C0A |
| color.chart.div.7 (`--ds-color-chart-div-7`) | Divergente 7 · acima | #B74900 | #FF945E |
| color.chart.status.good (`--ds-color-chart-status-good`) | Status · bom | #339F5C | #51B873 |
| color.chart.status.warning (`--ds-color-chart-status-warning`) | Status · atenção | #F6A10C | #FFB851 |
| color.chart.status.critical (`--ds-color-chart-status-critical`) | Status · crítico | #E44B46 | #E44B46 |
| color.chart.grid (`--ds-color-chart-grid`) | Grade e célula vazia | #DAE0E8 | #33312E |
| color.chart.axis (`--ds-color-chart-axis`) | Linha de base, eixo e mira | #C0CAD6 | #4A4744 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Marcas do eixo | #5C6C7F | #9C9792 |
| color.fg.muted (`--ds-color-fg-muted`) | Rótulos e nomes | #46586E | #CEC8C1 |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo do tooltip | #FFFFFF | #2C2A27 |

## Uso

O que mais dá errado em gráfico — e o que fazer no lugar.

- **Evite:** dois eixos verticais. O alinhamento entre as escalas é arbitrário e inventa uma correlação. Use dois gráficos ou um índice com base 100.
- **Evite:** arco-íris na escala. Magnitude é um tom só, do claro ao escuro. Vários tons fazem o olho procurar categorias que não existem.
- **Faça:** a cor segue a entidade. Filtrou ou escondeu uma série? As que ficaram mantêm a cor. Quem aprendeu “App é azul” não pode ser enganado.
- **Dica:** Rosca só para parte do todo. Até 6 fatias; da 6ª em diante, “Outros”. Para comparar valores próximos, barras leem muito melhor.
- **Evite:** um número em cada ponto. Rotule o fim, o pico ou a série da história. O eixo, o tooltip e a tabela levam o resto.
- **Faça:** mais de 8 séries, agrupe. Não existe 9ª cor. A cauda vira “Outros”, ou o gráfico vira pequenos múltiplos.

## API

Uma função por forma, a mesma conversa em todas: monta num elemento, recebe opções e devolve controles.

```html
import { createBarChart } from 'https://lumeui.dev/v/0.39/lume.js';

const grafico = createBarChart(document.querySelector('#vendas'), {
  title: 'Receita por mês',
  subtitle: 'Em reais · 2026',
  categories: ['Jan', 'Fev', 'Mar'],
  series: [{ name: 'Receita', values: [82000, 91000, 88000] }],
  format: 'currency',
});

grafico.setLoading(true);           // segura o desenho enquanto busca
grafico.update({ series: novas });  // redesenha com as novas opções
grafico.setLoading(false);
grafico.destroy();                  // limpa tudo ao sair da tela
```

### Opções em comum

|   |   |
| --- | --- |
|  `title · subtitle`  | Título e linha de apoio na moldura. O título também nomeia o gráfico para leitores de tela. |
|  `label`  | Nome acessível quando não há título visível. |
|  `card`  | Superfície com contorno e raio — para painéis. |
|  `height`  | Altura total, já contando a faixa do eixo x. Barras horizontais crescem com o número de linhas. |
|  `format · axisFormat`  | Formato dos valores (tooltip, rótulos, tabela) e do eixo. O eixo compacta sozinho a partir de mil. |
|  `table`  | Botão “Ver como tabela”. Ligado por padrão — desligue só se a tabela estiver na tela. |
|  `texture`  | Hachura em 45° e 135° como canal de reserva (daltonismo total, impressão). |
|  `empty`  | Texto do estado vazio. |

### Formatos pt-BR

|   |   |
| --- | --- |
|  `'number'`  | 1.234,6 |
|  `'integer'`  | 1.235 |
|  `'compact'`  | 1,3 mi |
|  `'percent'`  | 12,4% |
|  `'currency'`  | R$ 1.235 |
|  `'currency-compact'`  | R$ 1,3 mi |
|  `{ … } · (v) => …`  | Opções de Intl.NumberFormat ou uma função |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
```
