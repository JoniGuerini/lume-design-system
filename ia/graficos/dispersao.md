# Dispersão

Seção do Lume: Gráficos. Página: https://lumeui.dev/#/graficos/dispersao

A relação entre duas medidas: cada ponto é um item. Pontos de 8 px com anel, até três séries, nome só em quem merece — e um alvo generoso para o hover achar o ponto mais próximo.

Em números: séries: até 3 · ponto: 8 px · anel: 2 px · alvo do hover: 24 px.

## Exemplo

```html
import { createScatterChart } from 'https://lumeui.dev/v/1.7/lume.js';

// cada ponto: { x, y, label }
const chart = createScatterChart(document.querySelector('#contas'), {
  title: 'Custo × satisfação por segmento',
  subtitle: 'Cada ponto é uma conta',
  series: [
    { name: 'Varejo', points: varejo },
    { name: 'Empresas', points: empresas },
    { name: 'Autônomos', points: autonomos },
  ],
  x: { label: 'Custo de aquisição', format: 'currency' },
  y: { label: 'NPS', format: 'integer' },
});
```

## Variantes

Da nuvem simples às bolhas. Em todas, o hover acha o ponto mais próximo e a tabela lista cada um.

Simples `1 série` — Uma série, um tom. Sem legenda: o título diz o que cada ponto é.

Por segmento `series: 3` — Até três séries. Numa dispersão, qualquer ponto pode encostar em qualquer outro — por isso o teto é menor que nas linhas.

Bolhas `size` — Uma terceira medida vira a área da bolha. Serve para comparar ordens de grandeza, não para ler o valor.

Com referências `reference` — As medianas dividem o plano em quadrantes: acima e à esquerda está o melhor — satisfeito e barato.

Rótulos seletivos `showLabel` — Nome só nos extremos — o maior NPS, o menor e o custo mais alto. O resto fica no tooltip e na tabela.

## Alvo de 24 px

Um ponto de 8 px é pequeno demais para mirar. O hover procura o ponto mais perto do ponteiro, até 24 px de distância.

- Ponto de 8 px — Raio 4, na cor da série. Pequeno o bastante para a nuvem respirar.
- Anel de 2 px — Da cor da superfície, separa pontos sobrepostos sem desenhar contorno de tinta.
- Alvo de 24 px — O mais próximo dentro do raio acende, com um anel da cor dele. Em bolhas, a distância conta a partir da borda.

Experimente na nuvem `44 pontos` — Passe o mouse no meio dos pontos: sempre há um aceso, o mais perto do ponteiro.

## Acessibilidade

Cada ponto é alcançável sem mouse e sem cor.

- Tabela com todos os pontos — O botão de tabela lista cada ponto com nome, série, x, y e tamanho — o caminho para quem não enxerga a nuvem.
- Teclado — Tab ← → Home End Esc — Tab foca o gráfico; as setas andam pelos pontos da esquerda para a direita, Home e End vão às pontas e Esc fecha o tooltip.
- Leitor de tela — O gráfico anuncia quantos pontos tem; cada ponto visitado é lido com nome e os dois valores.
- Cores validadas em todos os pares — Na dispersão qualquer cor encosta em qualquer outra. As três primeiras séries do Lume foram validadas par a par para daltonismo — por isso o limite de três.
- Cor nunca sozinha — Com duas séries ou mais há legenda, e o tooltip repete o nome da série.
- Alvo generoso — O hover pega o ponto mais próximo até 24 px, o mínimo confortável para mouse e toque.

## Tokens usados

As três primeiras cores de série, as linhas do plano e a cor da superfície para o anel.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Primeira série | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Segunda série | #2A8ED6 | #2A8ED6 |
| color.chart.series.3 (`--ds-color-chart-series-3`) | Terceira série | #CD5892 | #CD5892 |
| color.bg.surface (`--ds-color-bg-surface`) | Anel dos pontos (cor da superfície) | #FFFFFF | #24221F |
| color.chart.grid (`--ds-color-chart-grid`) | Linhas de grade | #DAE0E8 | #33312E |
| color.chart.axis (`--ds-color-chart-axis`) | Eixos | #C0CAD6 | #4A4744 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Valores e títulos dos eixos, referência | #53657A | #9C9792 |
| color.fg.muted (`--ds-color-fg-muted`) | Rótulos diretos | #46586E | #CEC8C1 |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo do tooltip | #FFFFFF | #2C2A27 |

## Uso

Dispersão responde “uma coisa anda com a outra?”. Para o resto, há gráficos melhores.

- **Faça:** até 3 séries. Mais que isso, as cores começam a se confundir. Agrupe em “Outros” ou separe em pequenos múltiplos.
- **Evite:** bolha para valor exato. O olho erra a área de círculos. A bolha diz “bem maior” ou “bem menor”; o número fica no tooltip.
- **Dica:** Zero é opcional. Diferente das barras, os eixos podem começar perto dos dados — a posição é a mensagem, não o comprimento. Ligue zero quando a distância até zero importa.
- **Faça:** uma referência. Mediana, média ou meta dão sentido aos quadrantes. Sem elas, a pessoa não sabe o que é “alto”.
- **Evite:** tempo no eixo x. Se os pontos são uma sequência no tempo, ligue-os: use um gráfico de linha.
- **Dica:** Rótulo só nos extremos. Nome em todos os pontos vira ruído. Rotule o que a história pede e deixe o resto no tooltip.

## API

Uma função, com update, setLoading e destroy como em todos os gráficos.

```html
import { createScatterChart } from 'https://lumeui.dev/v/1.7/lume.js';

const chart = createScatterChart(document.querySelector('#contas'), {
  title: 'Custo × satisfação',
  series: [{ name: 'Varejo', points: [{ x: 42, y: 61, label: 'Conta 01' }, { x: 58, y: 47, label: 'Conta 02' }] }],
  x: { label: 'Custo de aquisição', format: 'currency' },
  y: { label: 'NPS', format: 'integer', reference: 50, referenceLabel: 'Meta' },
});
```

| Opção | Tipo | Padrão | Para quê |
| --- | --- | --- | --- |
| `series` | { name, color?, points }[] | — | Até 3 séries. Acima disso, o Lume avisa no console: agrupe ou use pequenos múltiplos. |
| `points` | { x, y, size?, label?, showLabel? }[] | — | `label` nomeia o ponto no tooltip e na tabela; `showLabel: false` tira só o rótulo direto. |
| `x · y` | { label, format, zero, reference, referenceLabel } | zero: false | Título do eixo, formato, se começa no zero e uma linha de referência tracejada. |
| `size` | { label, format, range } | range: [4, 18] | Com `size` nos pontos, o raio segue a raiz do valor (área proporcional). |
| `height` | number | 320 | Altura total, com os eixos. |
| `title · subtitle · label · card · table · pointLabel` | — | — | Iguais aos de todos os gráficos; pointLabel nomeia a coluna da tabela. |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```
