# Linhas e áreas

Seção do Lume: Gráficos. Página: https://lumeui.dev/#/graficos/linhas

Para mostrar como algo muda no tempo. Traço de 2 px, um eixo só, a mira encontra o mês e o nome fica no fim da linha — sem caixa de legenda para decifrar.

Em números: variantes: 8 · traço: 2 px · nomes no fim: até 4 · eixo y: 1.

## Exemplo

```html
import { createLineChart } from 'https://lumeui.dev/v/1.14/lume.js';

const chart = createLineChart(document.querySelector('#usuarios'), {
  title: 'Usuários ativos',
  subtitle: 'Por mês · 2026',
  categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  series: [
    { name: 'Usuários ativos', values: [12100, 13800, 13200, 17900, 20600, 23800, 23100, 26900, 29800, 29200, 33600, 38200] },
  ],
  format: 'integer',
});
```

## Variantes

O mesmo componente cobre as perguntas mais comuns sobre o tempo. Passe o mouse em qualquer uma.

Linha única `1 série` — Uma série não precisa de legenda: o título diz o que é, e o último valor fica escrito no fim da linha.

Várias séries `endLabels` — Até quatro linhas ganham o nome no fim — quando cabem sem colidir. Se as linhas se encontram ali, ficam a legenda e o tooltip.

Contra o período anterior `muted: true` — O ano passado entra em cinza, por baixo: é contexto, não protagonista. Continua nomeado na legenda e no tooltip.

Ênfase `highlight: 0` — Quando a história é uma série, ela fica na cor e as outras viram cinza. Mais claro que quatro cores disputando o olho.

Área `area: true` — Para uma série só, quando o volume importa. A área é uma lavagem de 10% da cor — a linha continua mandando.

Áreas empilhadas `stacked: true` — Partes que somam um total no tempo. A borda de cada faixa é a linha; o total aparece no tooltip.

Com meta `target` — A meta é a única linha tracejada do sistema — tracejado quer dizer referência, nunca grade.

Com lacunas `null` — Sem dado em abril e maio: a linha quebra em vez de inventar uma ponte. No tooltip e na tabela, aparece “—”.

## Mira e tooltip

Ninguém mira numa linha de 2 px. A mira vertical acha o mês mais próximo e um único tooltip mostra todas as séries ali.

- Encontra o x, não a linha — A mira se prende ao ponto de dados mais perto do ponteiro, em qualquer altura da área.
- Um tooltip, todas as séries — A leitura lista cada série visível naquele mês, na ordem da legenda.
- Valor primeiro, nome depois — Quem olha já sabe a série; quer o número. Ele vem forte, o nome vem apagado, com um traço da cor como chave.
- O mesmo no teclado — Tab foca o gráfico, as setas andam pelos meses e o valor é lido por leitores de tela.

## Um eixo só

Nada de dois eixos y. Duas grandezas de escalas diferentes viram um índice comum ou dois gráficos alinhados.

Com dois eixos, a escala de cada lado é escolhida à mão. O ponto em que as linhas se cruzam — e a impressão de que andam juntas — passa a ser decisão de quem montou o gráfico, não dos dados.

Índice com base 100 `zero: false` — As duas medidas partem de 100 em janeiro. Agora dá para comparar o ritmo: usuários cresceram mais que a receita.

Dois gráficos, mesmo eixo x `pequenos múltiplos` — Cada medida na sua escala, um gráfico embaixo do outro, com os meses alinhados.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10.3 4.2 2.9 17.5A2 2 0 0 0 4.6 20.5h14.8a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0z"></path><path d="M12 9.5v4"></path><path d="M12 17h.01"></path></svg>
```

## Acessibilidade

O gráfico já nasce com teclado, tabela e nomes. Estas são as decisões que continuam sendo suas.

- Tabela sempre à mão — O botão de tabela no cabeçalho troca o desenho pelos números — todos, inclusive os que o gráfico não rotula. O tooltip nunca é o único caminho até um valor.
- Teclado — Tab ← → Home End Esc — Tab foca o gráfico; as setas andam pelos pontos, Home e End vão às pontas e Esc fecha o tooltip.
- Leitor de tela — O gráfico tem nome e resumo (tipo, pontos e séries). Cada ponto visitado pelo teclado é anunciado numa região ao vivo.
- Cor nunca sozinha — Com duas séries ou mais, sempre há legenda — e nomes no fim da linha quando cabem. A série de contexto é cinza e continua nomeada.
- Contraste verificado — Toda cor de série passa de 3:1 contra a superfície — a menor é 3,36:1 no Lume claro e 3,45:1 no Lume escuro. Textos usam tokens de texto, nunca a cor da série.
- Movimento com moderação — A linha se desenha uma vez, quando aparece na tela, e não anima com `prefers-reduced-motion`.

## Tokens usados

Marcas consomem as cores de gráfico; tudo o que é texto consome tokens de texto.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Primeira série | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Segunda série | #2A8ED6 | #2A8ED6 |
| color.chart.series.3 (`--ds-color-chart-series-3`) | Terceira série | #CD5892 | #CD5892 |
| color.chart.series.4 (`--ds-color-chart-series-4`) | Quarta série | #A86600 | #A86600 |
| color.chart.muted (`--ds-color-chart-muted`) | Contexto e séries fora da ênfase | #C0CAD6 | #4A4744 |
| color.chart.grid (`--ds-color-chart-grid`) | Linhas de grade | #DAE0E8 | #33312E |
| color.chart.axis (`--ds-color-chart-axis`) | Linha de base e mira | #C0CAD6 | #4A4744 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Rótulos dos eixos e linha de meta | #53657A | #9C9792 |
| color.fg.muted (`--ds-color-fg-muted`) | Nome no fim da linha | #46586E | #CEC8C1 |
| color.fg.default (`--ds-color-fg-default`) | Valor no fim da linha | #2B3847 | #F3EDE5 |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo do tooltip | #FFFFFF | #2C2A27 |
| color.border.focus (`--ds-color-border-focus`) | Foco do gráfico | #53657A | #C0CAD6 |

## Uso

Escolha a linha quando a pergunta tem “quando” ou “desde”. Quatro cuidados resolvem quase tudo.

- **Faça:** tempo no eixo x. Linhas ligam pontos em sequência. Se a ordem não é tempo (ou outra sequência real), use barras.
- **Evite:** dois eixos y. Cria correlação que não existe. Indexe as duas medidas na mesma base ou faça dois gráficos.
- **Dica:** Mais de 4 séries?. Destaque a que importa e deixe o resto em cinza, agrupe a cauda em “Outros” ou separe em pequenos múltiplos. Nunca invente uma 9ª cor.
- **Faça:** rótulo seletivo. O valor final, o pico ou a série da história. Um número em cada ponto ninguém lê.
- **Evite:** área sobreposta. Áreas de várias séries umas sobre as outras escondem dados. Para partes de um total, empilhe; para comparar, use linhas.
- **Dica:** Zero no eixo. Áreas sempre começam no zero. Em linhas, desligue com zero: false só quando a variação é a história — e diga isso no subtítulo.

## API

Uma função, as mesmas regras de todos os gráficos do Lume.

```html
import { createLineChart } from 'https://lumeui.dev/v/1.14/lume.js';

const chart = createLineChart(document.querySelector('#receita'), {
  title: 'Receita',
  categories: ['Jan', 'Fev', 'Mar'],
  series: [{ name: 'Receita', values: [82000, 91000, 88000] }],
  format: 'currency-compact',
});

chart.update({ target: { value: 90000, label: 'Meta' } });
```

| Opção | Tipo | Padrão | Para quê |
| --- | --- | --- | --- |
| `categories` | string[] | — | Rótulos do eixo x, em ordem. |
| `series` | { name, values, color?, muted? }[] | — | Uma entrada por linha. `null` em values quebra a linha. Sem `color`, a série usa o slot da sua posição. |
| `area` | boolean | false | Lavagem de 10% sob a linha. |
| `stacked` | boolean | false | Faixas somadas; o tooltip mostra o total. |
| `curve` | 'linear' \| 'smooth' | 'linear' | Suave é monotônica: não cria picos que não existem. |
| `markers` | 'end' \| 'all' \| 'none' | 'end' | Pontos de 8 px com anel de 2 px. `all` só até 40 pontos. |
| `endLabels` | boolean | true | Nome (ou valor, com uma série) no fim da linha, se couber sem colidir. |
| `highlight` | number | — | Índice da série em destaque; as outras ficam em cinza. |
| `target` | { value, label } | — | Linha de referência tracejada. |
| `zero` | boolean | true | O eixo começa no zero. Áreas sempre começam. |
| `format · axisFormat` | preset \| Intl \| função | 'number' | Valores no tooltip e na tabela; o eixo compacta a partir de mil. |
| `height` | number | 280 | Altura total, já com a faixa do eixo x. |
| `title · subtitle · label` | string | — | Título visível ou, sem ele, o nome acessível do gráfico. |
| `card · table · tooltipLabels` | boolean · boolean · string[] | false · true · — | Superfície com contorno, botão de tabela e rótulos longos para o tooltip. |

| Método | O que faz |
| --- | --- |
| `update(options)` | Mescla as opções e redesenha. Séries escondidas na legenda continuam escondidas. |
| `setLoading(bool)` | Mantém o desenho anterior a 45% enquanto os dados chegam — sem esqueleto, sem pulo. |
| `destroy()` | Desliga observadores e eventos e limpa o contêiner. |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```
