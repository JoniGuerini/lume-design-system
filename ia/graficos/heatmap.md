# Heatmap

Seção do Lume: Gráficos. Página: https://lumeui.dev/#/graficos/heatmap

Intensidade numa grade — dia × hora, ou dia a dia no ano. Um tom só que fica mais forte com o valor; dois tons com o meio neutro quando a pergunta é acima ou abaixo de uma referência.

Em números: formatos: 2 · escalas: 2 · faixas: até 7 · respiro: 2 px.

## Exemplo

```html
import { createHeatmap } from 'https://lumeui.dev/v/0.31/lume.js';

const chart = createHeatmap(document.querySelector('#pedidos'), {
  title: 'Pedidos por hora',
  subtitle: 'Última semana',
  rows: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  columns: ['0h', '1h', '2h', /* … */ '23h'],
  values: pedidos, // 7 linhas × 24 colunas; null = sem dado
  valueLabel: 'pedidos',
  format: 'integer',
});
```

## Variantes

Matriz para padrões que se repetem (dia da semana × hora); calendário para o ano inteiro de uma vez.

Matriz `createHeatmap()` — Linhas e colunas com significado. O pico do meio-dia e o vale da madrugada saltam à vista — sem ler um número.

Divergente `scale: 'diverging'` — Frio abaixo da média, quente acima, cinza no meio. O meio precisa ler como “nada”.

Calendário `createCalendarHeatmap()` — Um quadrado por dia, uma coluna por semana. Abre na semana mais recente; em telas estreitas, role para o passado. A tabela resume por mês.

## Escala e faixas

O valor vira uma faixa de cor, não um tom contínuo — faixas o olho consegue comparar. No escuro, a âncora inverte: mais é mais claro.

Lume claro

Sequencial · 7 faixas — vazio — 1 — 2 — 3 — 4 — 5 — 6 — 7

Sequencial · 5 faixas — vazio — 1 — 2 — 3 — 4 — 5 — 6 — 7

Divergente · 7 faixas — −3 — −2 — −1 — meio — +1 — +2 — +3

Lume escuro

Sequencial · 7 faixas — vazio — 1 — 2 — 3 — 4 — 5 — 6 — 7

Sequencial · 5 faixas — vazio — 1 — 2 — 3 — 4 — 5 — 6 — 7

Divergente · 7 faixas — −3 — −2 — −1 — meio — +1 — +2 — +3

- Faixas iguais — O intervalo entre o mínimo e o máximo é dividido em partes iguais. Com 5 faixas, usamos os passos 1, 2, 4, 6 e 7, para cobrir toda a rampa.
- Vazio não é zero — Célula sem dado (e o zero, na sequencial) usa a cor da grade — fica claro que ali não há nada, e não “pouco”.
- O meio é uma decisão — Na divergente, `center` define o que é neutro: zero numa variação, a média numa contagem, a meta num resultado.

Marcação dos exemplos desta seção:

```html
<div class="ds-chart__scale"><span>Menos</span><span class="ds-chart__scale-bins"><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span></span><span>Mais</span></div>

<div class="ds-chart__scale"><span>−8</span><span class="ds-chart__scale-bins"><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span><span class="ds-chart__scale-bin"></span></span><span>+8</span></div>
```

## Acessibilidade

Cor sozinha não carrega número. Por isso o mapa sempre tem outro caminho até o valor.

- Tabela sempre à mão — O botão de tabela troca o mapa pelos números: linhas × colunas na matriz e um resumo por mês no calendário — 365 linhas não ajudam ninguém.
- Teclado em duas direções — ← ↑ ↓ → Home End — Tab foca o mapa; as setas andam entre as células, Home e End vão ao começo e ao fim da linha, Esc fecha o tooltip. No calendário, ← e → pulam semanas e ↑ e ↓ andam dias.
- Leitor de tela — O mapa é anunciado com o tamanho da grade; cada célula visitada pelo teclado é lida com linha, coluna e valor.
- Contorno no hover — A célula ativa ganha um anel de 1,5 px na cor do texto, visível sobre qualquer faixa, nos dois temas.
- Faixas contáveis — No máximo 7 cores com significado. Acima disso, vizinhas se confundem — use uma tabela.
- Ponta clara permitida — Na sequencial, o passo mais fraco pode quase sumir na superfície: ele quer dizer “perto de zero”. O valor exato continua no tooltip e na tabela.

## Tokens usados

Duas rampas e a cor da grade. Nenhuma cor de série categórica entra aqui.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.chart.seq.1 (`--ds-color-chart-seq-1`) | Sequencial: o mínimo | #FFE7DB | #712800 |
| color.chart.seq.4 (`--ds-color-chart-seq-4`) | Sequencial: o meio | #F57630 | #D95C0A |
| color.chart.seq.7 (`--ds-color-chart-seq-7`) | Sequencial: o máximo | #923700 | #FFB590 |
| color.chart.div.1 (`--ds-color-chart-div-1`) | Divergente: extremo abaixo (frio) | #1776B5 | #6ABCFF |
| color.chart.div.4 (`--ds-color-chart-div-4`) | Divergente: meio neutro | #DAE0E8 | #3D3B38 |
| color.chart.div.7 (`--ds-color-chart-div-7`) | Divergente: extremo acima (quente) | #B74900 | #FF945E |
| color.chart.grid (`--ds-color-chart-grid`) | Célula vazia | #DAE0E8 | #33312E |
| color.fg.default (`--ds-color-fg-default`) | Anel da célula ativa | #2B3847 | #F3EDE5 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Rótulos e legenda de escala | #5C6C7F | #9C9792 |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo do tooltip | #FFFFFF | #2C2A27 |

## Uso

O heatmap mostra padrão, não valor exato. Use quando a pergunta é “onde concentra?”.

- **Faça:** um tom só. Magnitude é uma rampa de um tom, do claro ao forte. O olho lê “mais” sem precisar de legenda.
- **Evite:** arco-íris. Vermelho, amarelo, verde e azul não têm ordem. Ninguém sabe se o verde é mais ou menos que o amarelo.
- **Dica:** Divergente com meio neutro. Dois tons opostos — frio e quente — e cinza no meio. Dois tons frios não leem como “lados”.
- **Faça:** até 7 faixas. Cinco resolvem quase sempre. Sete é o teto: acima disso, faixas vizinhas se misturam.
- **Evite:** valor exato pela cor. Se a pessoa precisa do número para decidir, mostre o número — numa tabela ou em barras.
- **Dica:** Mesma escala para comparar. Dois mapas lado a lado? Fixe o mesmo domain nos dois, ou a mesma cor vai significar valores diferentes.

## API

Duas funções com as mesmas regras de todos os gráficos do Lume: update, setLoading e destroy.

```html
import { createHeatmap, createCalendarHeatmap } from 'https://lumeui.dev/v/0.31/lume.js';

createHeatmap(document.querySelector('#pedidos'), {
  title: 'Pedidos por hora',
  rows: ['Seg', 'Ter', 'Qua'],
  columns: ['8h', '9h', '10h'],
  values: [[12, 30, 41], [9, 28, 44], [14, 26, 39]],
  valueLabel: 'pedidos',
});

createCalendarHeatmap(document.querySelector('#atividade'), {
  title: 'Atividade no ano',
  start: '2025-11-02',
  values: atividadePorDia, // um número por dia
  valueLabel: 'entregas',
});
```

### createHeatmap()

| Opção | Tipo | Padrão | Para quê |
| --- | --- | --- | --- |
| `rows · columns` | string[] | — | Rótulos das linhas (à esquerda) e das colunas (embaixo). |
| `values` | (number \| null)[][] | — | `values[linha][coluna]`. `null` vira célula vazia, com “Sem dado” no tooltip. |
| `scale` | 'sequential' \| 'diverging' | 'sequential' | Um tom do pouco ao muito, ou dois tons com o meio neutro. |
| `steps` | 3 – 7 | 5 | Quantas faixas de cor. Mais de 7 deixa vizinhas indistinguíveis. |
| `domain` | [min, max] | dos dados | Fixe para comparar mapas diferentes na mesma escala. |
| `center` | number | 0 | O valor do meio neutro na escala divergente (ex.: a média). |
| `zeroEmpty` | boolean | true | Zero aparece como célula vazia na sequencial. |
| `format · valueLabel` | preset \| Intl \| função · string | 'number' · — | Valor no tooltip, na tabela e na legenda; unidade depois do número. |
| `cellHeight` | number | quadrada | Altura da célula; por padrão acompanha a largura, entre 14 e 32 px. |
| `scaleLegend · scaleLabels` | boolean · [string, string] | true · mín./máx. | Legenda de escala embaixo, com os extremos ou “Menos/Mais”. |
| `title · subtitle · label · card · table` | — | — | Iguais aos de todos os gráficos. |

### createCalendarHeatmap()

| Opção | Tipo | Padrão | Para quê |
| --- | --- | --- | --- |
| `start` | 'AAAA-MM-DD' \| Date | hoje | Primeiro dia. As colunas são semanas, de domingo a sábado. |
| `values` | (number \| null)[] | — | Um valor por dia, a partir de start. |
| `steps · format · valueLabel` | — | 5 · 'integer' · — | Como no heatmap; a escala é sempre sequencial. |
| `scaleLabels` | [string, string] | ['Menos', 'Mais'] | Extremos da legenda de escala. |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```
