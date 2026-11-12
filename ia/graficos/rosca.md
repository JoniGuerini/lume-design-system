# Rosca

Seção do Lume: Gráficos. Página: https://lumeui.dev/#/graficos/rosca

A parte do todo de relance. Até seis fatias, o total no miolo e uma lista que é legenda e rótulo ao mesmo tempo.

Em números: fatias no máximo: 6 · espessura padrão: 24 px · respiro entre fatias: 2 px · contraste mínimo: 3,37:1.

## Exemplo

```html
import { createDonutChart } from 'https://lumeui.dev/v/0.25/lume.js';

donutChart(document.querySelector('#pagamentos'), {
  title: 'Pagamentos por método',
  subtitle: 'Transações em outubro',
  items: [
    { name: 'Pix', value: 4210 },
    { name: 'Cartão de crédito', value: 2630 },
    { name: 'Cartão de débito', value: 1290 },
    { name: 'Boleto', value: 610 },
    { name: 'Saldo em conta', value: 320 },
  ],
  format: 'integer',
  centerLabel: 'transações',
});
```

## Variantes

Mesma anatomia, quatro ajustes. A rosca nunca ganha 3D, sombra ou fatia descolada.

Total no miolo `center: 'total'` — O padrão. O miolo soma tudo; no hover, mostra a fatia. A lista ao lado é a legenda e o rótulo de cada parte.

Cauda em “Outros” `maxSegments: 6` — Da 6ª fatia em diante, as menores viram “Outros”, em cinza e sempre por último. A tabela abre a cauda.

Com textura `texture: true` — Hachura em 45° e 135° para daltonismo total, impressão e alto contraste. Na impressão, liga sozinha.

Fina, com miolo próprio `thickness: 14` — Anel fino quando o número do miolo é a mensagem. Diga o que ele significa no rótulo.

### Lado a lado ou empilhadaautomático, pela largura

Com espaço: lista ao lado

No estreito: lista embaixo

Com espaço (diâmetro + 260 px), a lista fica ao lado da rosca. No estreito, desce para baixo dela — sem você configurar nada.

## Rosca ou barras?

A rosca mostra proporção; ninguém compara ângulos com precisão. Quando os valores são próximos, use barras.

- **Evite:** rosca para valores próximos. Qual região é a maior? Com 21,8% contra 21%, o ângulo não responde — a pessoa precisa ler a lista.
- **Faça:** barras ordenadas. Comprimento sobre a mesma base: a ordem salta aos olhos e o valor fica na ponta.

## Estados

O primeiro começa com uma fatia em destaque — passe o mouse ou use as setas para trocar.

Hover e teclado — A fatia sai 4 px do anel, as outras apagam e o miolo mostra o percentual. A linha da lista acende junto.

Carregando — Recarregar

Ao buscar dados novos, a rosca anterior fica a meia opacidade — sem esqueleto, sem pulo.

Vazio — Sem valores, um aviso ocupa o lugar do anel. Uma rosca vazia não é um círculo cinza.

Marcação dos exemplos desta seção:

```html
<figure class="ds-chart" data-kind="donut">
<figcaption class="ds-chart__head">
<div class="ds-chart__titles">
<p class="ds-chart__title" id="ds-donut-44-title">Pagamentos por método</p>
</div>
<div class="ds-chart__actions">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-chart__toggle" data-chart-toggle="" aria-pressed="false" aria-label="Ver como tabela" data-ds-tooltip="Ver como tabela"><ds-icon name="table"></ds-icon></button>
</div>
</figcaption>
<div class="ds-chart__legend" data-legend="" hidden=""></div>
<div class="ds-chart__body" data-body="">
<div class="ds-chart__plot" data-plot="" role="group" aria-roledescription="gráfico" aria-describedby="ds-donut-44-hint" aria-label="Pagamentos por método. Gráfico de rosca com 0 fatias"><div class="ds-chart__empty"><ds-icon name="bar-chart"></ds-icon><span>Nenhum pagamento neste período.</span></div></div>
<div class="ds-chart__tooltip" data-tooltip="" hidden=""></div>
</div>
<div class="ds-chart__table" data-table="" hidden=""></div>
<p class="ds-visually-hidden" id="ds-donut-44-hint">Use as setas para percorrer os valores. A tabela tem todos os dados.</p>
<p class="ds-visually-hidden" aria-live="polite" data-live=""></p></figure>
```

## Anatomia

Cinco partes. A rosca é só o resumo visual; quem carrega os números é a lista.

- 1 — Anel — Espessura de 24 px por padrão (14 a 36). As fatias começam às 12 h e seguem no sentido horário, da maior para a menor.
- 2 — Respiro — 2 px entre fatias, abertos no próprio desenho — a superfície aparece. Nunca um contorno em volta da fatia.
- 3 — Miolo — O total em sans semibold, com algarismos proporcionais, e o rótulo com a unidade. No hover, vira o percentual da fatia.
- 4 — Lista — Legenda e rótulo direto ao mesmo tempo: cor, nome, valor e percentual, com números alinhados em colunas.
- 5 — Outros — A cauda agrupada, em `chart.other`, sempre por último. Nunca uma 7ª cor.

## Acessibilidade

A rosca já sai acessível. O que continua sendo seu: um título claro e o rótulo da unidade no miolo.

- Tabela sempre à mão — O botão no cabeçalho troca a rosca por uma tabela com nome, valor e percentual — inclusive os itens agrupados em “Outros”, um por um.
- Teclado — Tab ← → Home End Esc — Tab foca o gráfico; as setas percorrem as fatias; Home e End vão à primeira e à última; Esc volta ao total.
- Leitor de tela — O gráfico se anuncia com título e número de fatias. A cada seta, uma região ao vivo lê o nome, o percentual e o valor.
- Cor nunca sozinha — Cada fatia tem nome e número na lista, na mesma ordem do anel. Para daltonismo total, impressão e alto contraste, ligue `texture`.
- Contraste verificado — As 6 primeiras cores de série passam de 3:1 sobre a superfície nos dois temas — a menor fica em 3,37:1.
- Movimento — As fatias aparecem uma vez, em fade. Com movimento reduzido, nada anima — nem o destaque da fatia.

## Tokens usados

Fatias usam as cores de gráfico, na ordem fixa; textos usam sempre os tokens de texto.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Primeira fatia | #D95C0A | #D95C0A |
| color.chart.series.2 (`--ds-color-chart-series-2`) | Segunda fatia — e assim até a 5ª | #2A8ED6 | #2A8ED6 |
| color.chart.other (`--ds-color-chart-other`) | “Outros” | #93A0B0 | #605D59 |
| color.fg.default (`--ds-color-fg-default`) | Valor do miolo e da lista | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Nome na lista | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Rótulo do miolo e percentual | #5C6C7F | #9C9792 |
| color.bg.hover (`--ds-color-bg-hover`) | Linha da lista em destaque | #3E51660D | #FFFFFF0D |
| color.border.subtle (`--ds-color-border-subtle`) | Divisória da lista | #3E516624 | #FFFFFF0F |
| color.border.focus (`--ds-color-border-focus`) | Anel de foco do gráfico | #53657A | #C0CAD6 |
| duration.base (`--ds-duration-base`) | Fatia saindo do anel | 200ms | 200ms |

## Uso

A rosca é a forma mais fácil de errar. Use pouco, e só para parte do todo.

- **Faça:** partes de um todo. As fatias somam 100% de uma coisa só — transações, orçamento, clientes. Nada de categorias que se sobrepõem.
- **Faça:** até 6 fatias, em ordem. Da maior para a menor, começando às 12 h. A partir da 6ª, junte em “Outros” — o componente faz isso por você.
- **Evite:** 3D, sombra e fatia descolada. Perspectiva distorce os ângulos e a sombra vira ruído. O destaque já vem no hover, e só enquanto dura.
- **Evite:** rosca de duas fatias. “72% usado” é uma razão contra um limite. Um medidor diz isso numa linha, sem pedir que ninguém leia ângulos.
- **Dica:** Comparar? Use barras. Se a pergunta é “quem é maior”, “quanto mudou” ou “como foi ao longo do tempo”, a resposta é barra ou linha — nunca várias roscas lado a lado.
- **Dica:** Diga a unidade no miolo. “9.120” não diz nada sozinho. centerLabel: 'transações' diz.

## API

Uma chamada monta a rosca, a lista e a tabela; `update()` troca os itens.

| Opção | Valores | Padrão | O que faz |
| --- | --- | --- | --- |
|  `items`  | [{ name, value, color? }] | — | Uma entrada por fatia, na ordem em que aparecem a partir das 12 h. Ordene da maior para a menor. |
|  `format`  | preset \| Intl \| função | 'number' | Formato dos valores no miolo, na lista e na tabela. O percentual é calculado. |
|  `center`  | 'total' \| { value, label } \| false | 'total' | O que o miolo mostra fora do hover. |
|  `centerLabel`  | string | 'Total' | Rótulo sob o total. Diga a unidade: “transações”, “clientes”. |
|  `maxSegments`  | número | 6 | Acima disso, as menores fatias viram “Outros”. |
|  `otherLabel`  | string | 'Outros' | Nome da fatia que agrupa a cauda. |
|  `size · thickness`  | px | 200 · 24 | Diâmetro e espessura do anel. A lista vai para baixo quando não cabe ao lado. |
|  `texture`  | boolean | false | Hachura de reserva para quando a cor não basta. |
|  `title · subtitle`  | string | — | Cabeçalho. Sem título, passe `label` para nomear o gráfico. |
|  `categoryLabel · valueLabel`  | string | 'Categoria' · 'Valor' | Cabeçalhos das colunas da vista em tabela. |

```html
const chart = createDonutChart(el, { title: 'Pagamentos', items, format: 'integer' });

chart.update({ items: novosItens });   // redesenha mantendo a moldura
chart.setLoading(true);                 // meia opacidade enquanto busca
chart.destroy();
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```
