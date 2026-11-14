# Indicadores

Seção do Lume: Gráficos. Página: https://lumeui.dev/#/graficos/indicadores

Quando o gráfico é um número. O valor de agora, quanto mudou e para onde vai — sem eixo, sem legenda, sem esforço para ler.

Em números: peças: 3 · destaque por tela: 1 · sentidos da variação: 3 · tons do medidor: 4.

## Exemplo

```html
import { statTileHtml } from 'https://lumeui.dev/v/0.40/lume.js';

el.innerHTML = statTileHtml({
  label: 'Receita',
  value: 1284000,
  format: 'currency-compact',
  delta: 0.124,
  deltaLabel: 'vs. mês anterior',
  trend: [8, 9, 9, 11, …],
});
```

## Anatomia

Cinco partes, sempre nesta ordem. Só o rótulo e o valor são obrigatórios.

- 1 — Rótulo — O que é medido, em caixa de frase e sem dois-pontos.
- 2 — Valor — Sans semibold, compactado (38,2 mil; R$ 1,3 mi). Algarismos proporcionais.
- 3 — Variação opcional — Sinal, ícone e texto juntos. A cor diz se melhorou ou piorou — nunca sozinha.
- 4 — Período opcional — Contra o quê a variação foi medida. Sem ele, o número não diz nada.
- 5 — Tendência opcional — Sparkline no tom de contexto; o ponto de agora na cor de destaque.

Marcação dos exemplos desta seção:

```html
<article class="ds-stat">
<p class="ds-stat__label">Clientes ativos</p>
<p class="ds-stat__value">38.210</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+13,7%</span><span class="ds-visually-hidden"> (melhora)</span></span>
<span class="ds-stat__period">vs. mês anterior</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Tendência de Clientes ativos"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 28C5.85 27.48 8.7 26.44 11.55 26.44C14.39 26.44 17.24 26.99 20.09 26.99C22.94 26.99 25.79 23.72 28.64 22.67C31.48 21.62 34.33 21.08 37.18 20.18C40.03 19.29 42.88 17.24 45.73 17.24C48.58 17.24 51.42 17.89 54.27 17.89C57.12 17.89 59.97 15.4 62.82 14.39C65.67 13.38 68.52 11.72 71.36 11.72C74.21 11.72 77.06 12.28 79.91 12.28C82.76 12.28 85.61 9.61 88.45 8.23C91.3 6.85 94.15 5.41 97 4L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 28C5.85 27.48 8.7 26.44 11.55 26.44C14.39 26.44 17.24 26.99 20.09 26.99C22.94 26.99 25.79 23.72 28.64 22.67C31.48 21.62 34.33 21.08 37.18 20.18C40.03 19.29 42.88 17.24 45.73 17.24C48.58 17.24 51.42 17.89 54.27 17.89C57.12 17.89 59.97 15.4 62.82 14.39C65.67 13.38 68.52 11.72 71.36 11.72C74.21 11.72 77.06 12.28 79.91 12.28C82.76 12.28 85.61 9.61 88.45 8.23C91.3 6.85 94.15 5.41 97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>
```

## Linha de indicadores

Os números que abrem um painel. Mesma estrutura, mesmo período de comparação, do mais importante para o menos.

- De 2 a 5 por linha. Mais que isso vira tabela.
- Todos comparados com o mesmo período — ou cada um diz o seu.
- Clicável quando leva a um detalhe (`href`).

Marcação dos exemplos desta seção:

```html
<article class="ds-stat">
<p class="ds-stat__label">Receita</p>
<p class="ds-stat__value">R$&nbsp;149&nbsp;mil</p>
<p class="ds-stat__delta" data-tone="bad">
<span class="ds-stat__change"><ds-icon name="trending-down"></ds-icon><span>−2%</span><span class="ds-visually-hidden"> (piora)</span></span>
<span class="ds-stat__period">vs. novembro</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Tendência de Receita"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 28C5.85 26.97 8.7 24.91 11.55 24.91C14.39 24.91 17.24 25.94 20.09 25.94C22.94 25.94 25.79 21.68 28.64 20.46C31.48 19.24 34.33 17.71 37.18 17.71C40.03 17.71 42.88 22.51 45.73 22.51C48.58 22.51 51.42 16.65 54.27 14.97C57.12 13.3 59.97 11.2 62.82 11.2C65.67 11.2 68.52 12.91 71.36 12.91C74.21 12.91 77.06 9.59 79.91 8.11C82.76 6.64 85.61 4 88.45 4C91.3 4 94.15 4.69 97 5.03L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 28C5.85 26.97 8.7 24.91 11.55 24.91C14.39 24.91 17.24 25.94 20.09 25.94C22.94 25.94 25.79 21.68 28.64 20.46C31.48 19.24 34.33 17.71 37.18 17.71C40.03 17.71 42.88 22.51 45.73 22.51C48.58 22.51 51.42 16.65 54.27 14.97C57.12 13.3 59.97 11.2 62.82 11.2C65.67 11.2 68.52 12.91 71.36 12.91C74.21 12.91 77.06 9.59 79.91 8.11C82.76 6.64 85.61 4 88.45 4C91.3 4 94.15 4.69 97 5.03" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Clientes ativos</p>
<p class="ds-stat__value">38.200</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+13,7%</span><span class="ds-visually-hidden"> (melhora)</span></span>
<span class="ds-stat__period">vs. novembro</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Tendência de Clientes ativos"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 28C5.85 27.48 8.7 26.44 11.55 26.44C14.39 26.44 17.24 26.99 20.09 26.99C22.94 26.99 25.79 23.72 28.64 22.67C31.48 21.62 34.33 21.08 37.18 20.18C40.03 19.29 42.88 17.24 45.73 17.24C48.58 17.24 51.42 17.89 54.27 17.89C57.12 17.89 59.97 15.4 62.82 14.39C65.67 13.38 68.52 11.72 71.36 11.72C74.21 11.72 77.06 12.28 79.91 12.28C82.76 12.28 85.61 9.61 88.45 8.23C91.3 6.85 94.15 5.41 97 4L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 28C5.85 27.48 8.7 26.44 11.55 26.44C14.39 26.44 17.24 26.99 20.09 26.99C22.94 26.99 25.79 23.72 28.64 22.67C31.48 21.62 34.33 21.08 37.18 20.18C40.03 19.29 42.88 17.24 45.73 17.24C48.58 17.24 51.42 17.89 54.27 17.89C57.12 17.89 59.97 15.4 62.82 14.39C65.67 13.38 68.52 11.72 71.36 11.72C74.21 11.72 77.06 12.28 79.91 12.28C82.76 12.28 85.61 9.61 88.45 8.23C91.3 6.85 94.15 5.41 97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Tempo de resposta</p>
<p class="ds-stat__value">182 ms</p>
<p class="ds-stat__delta" data-tone="bad">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+8%</span><span class="ds-visually-hidden"> (piora)</span></span>
<span class="ds-stat__period">vs. semana anterior</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Tendência de Tempo de resposta"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 28C5.85 25.71 8.7 21.14 11.55 21.14C14.39 21.14 17.24 24.57 20.09 24.57C22.94 24.57 25.79 14.29 28.64 14.29C31.48 14.29 34.33 17.71 37.18 17.71C40.03 17.71 42.88 12.38 45.73 10.86C48.58 9.33 51.42 7.43 54.27 7.43C57.12 7.43 59.97 14.29 62.82 14.29C65.67 14.29 68.52 10.51 71.36 8.8C74.21 7.09 77.06 4 79.91 4C82.76 4 85.61 7.43 88.45 7.43C91.3 7.43 94.15 6.51 97 6.06L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 28C5.85 25.71 8.7 21.14 11.55 21.14C14.39 21.14 17.24 24.57 20.09 24.57C22.94 24.57 25.79 14.29 28.64 14.29C31.48 14.29 34.33 17.71 37.18 17.71C40.03 17.71 42.88 12.38 45.73 10.86C48.58 9.33 51.42 7.43 54.27 7.43C57.12 7.43 59.97 14.29 62.82 14.29C65.67 14.29 68.52 10.51 71.36 8.8C74.21 7.09 77.06 4 79.91 4C82.76 4 85.61 7.43 88.45 7.43C91.3 7.43 94.15 6.51 97 6.06" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Chamados abertos</p>
<p class="ds-stat__value">46</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-down"></ds-icon><span>−21%</span><span class="ds-visually-hidden"> (melhora)</span></span>
<span class="ds-stat__period">vs. semana anterior</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Tendência de Chamados abertos"><svg viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 4C5.85 5.33 8.7 8 11.55 8C14.39 8 17.24 6 20.09 6C22.94 6 25.79 13 28.64 13C31.48 13 34.33 11 37.18 11C40.03 11 42.88 15.44 45.73 16C48.58 16.56 51.42 16.56 54.27 17C57.12 17.44 59.97 18.2 62.82 19C65.67 19.8 68.52 21.2 71.36 22C74.21 22.8 77.06 23.56 79.91 24C82.76 24.44 85.61 24.5 88.45 25C91.3 25.5 94.15 27 97 28L97 32L3 32Z"></path><path class="ds-sparkline__line" d="M3 4C5.85 5.33 8.7 8 11.55 8C14.39 8 17.24 6 20.09 6C22.94 6 25.79 13 28.64 13C31.48 13 34.33 11 37.18 11C40.03 11 42.88 15.44 45.73 16C48.58 16.56 51.42 16.56 54.27 17C57.12 17.44 59.97 18.2 62.82 19C65.67 19.8 68.52 21.2 71.36 22C74.21 22.8 77.06 23.56 79.91 24C82.76 24.44 85.61 24.5 88.45 25C91.3 25.5 94.15 27 97 28" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>
```

## Número de destaque

O número que a tela inteira existe para mostrar. Um só por vista, na mesma sans do resto — fonte de display ou serifada parece enfeite.

Algarismos proporcionais no número grande

Em tamanho grande, algarismos tabulares dão a cada dígito a largura de um zero e o “1” fica solto. Guarde `tabular-nums` para colunas que precisam alinhar.

Marcação dos exemplos desta seção:

```html
<article class="ds-stat ds-stat--hero">
<p class="ds-stat__label">Receita em 2026</p>
<p class="ds-stat__value">R$&nbsp;1,4&nbsp;mi</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+27,9%</span><span class="ds-visually-hidden"> (melhora)</span></span>
<span class="ds-stat__period">vs. 2025</span>
</p>
<div class="ds-stat__trend"><span class="ds-sparkline" role="img" aria-label="Tendência de Receita em 2026"><svg viewBox="0 0 100 44" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 40C5.85 38.46 8.7 35.37 11.55 35.37C14.39 35.37 17.24 36.91 20.09 36.91C22.94 36.91 25.79 30.51 28.64 28.69C31.48 26.86 34.33 24.57 37.18 24.57C40.03 24.57 42.88 31.77 45.73 31.77C48.58 31.77 51.42 22.97 54.27 20.46C57.12 17.94 59.97 14.8 62.82 14.8C65.67 14.8 68.52 17.37 71.36 17.37C74.21 17.37 77.06 12.39 79.91 10.17C82.76 7.96 85.61 4 88.45 4C91.3 4 94.15 5.03 97 5.54L97 44L3 44Z"></path><path class="ds-sparkline__line" d="M3 40C5.85 38.46 8.7 35.37 11.55 35.37C14.39 35.37 17.24 36.91 20.09 36.91C22.94 36.91 25.79 30.51 28.64 28.69C31.48 26.86 34.33 24.57 37.18 24.57C40.03 24.57 42.88 31.77 45.73 31.77C48.58 31.77 51.42 22.97 54.27 20.46C57.12 17.94 59.97 14.8 62.82 14.8C65.67 14.8 68.52 17.37 71.36 17.37C74.21 17.37 77.06 12.39 79.91 10.17C82.76 7.96 85.61 4 88.45 4C91.3 4 94.15 5.03 97 5.54" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span></div>
</article>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m9 9 6 6M15 9l-6 6"></path></svg>
```

## Sparkline

A tendência sem eixos, em linha com o texto. Estica na largura de quem a contém e o traço não deforma.

Com área — O padrão: linha no tom de contexto, lavagem leve e o ponto de agora na cor de destaque.

Só a linha — Para linhas de tabela e lugares apertados, onde a área pesaria.

Sem ponto — Quando “agora” não importa — só o formato da curva.

Reta — Pontos ligados por segmentos, para séries curtas ou com degraus.

### Dentro de uma tabela

Marcação dos exemplos desta seção:

```html
<span class="ds-sparkline" aria-hidden="true"><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 44C5.85 43.13 8.7 41.39 11.55 41.39C14.39 41.39 17.24 42.31 20.09 42.31C22.94 42.31 25.79 36.86 28.64 35.11C31.48 33.36 34.33 32.47 37.18 30.97C40.03 29.48 42.88 26.07 45.73 26.07C48.58 26.07 51.42 27.14 54.27 27.14C57.12 27.14 59.97 23 62.82 21.32C65.67 19.64 68.52 16.87 71.36 16.87C74.21 16.87 77.06 17.79 79.91 17.79C82.76 17.79 85.61 13.35 88.45 11.05C91.3 8.75 94.15 6.35 97 4L97 48L3 48Z"></path><path class="ds-sparkline__line" d="M3 44C5.85 43.13 8.7 41.39 11.55 41.39C14.39 41.39 17.24 42.31 20.09 42.31C22.94 42.31 25.79 36.86 28.64 35.11C31.48 33.36 34.33 32.47 37.18 30.97C40.03 29.48 42.88 26.07 45.73 26.07C48.58 26.07 51.42 27.14 54.27 27.14C57.12 27.14 59.97 23 62.82 21.32C65.67 19.64 68.52 16.87 71.36 16.87C74.21 16.87 77.06 17.79 79.91 17.79C82.76 17.79 85.61 13.35 88.45 11.05C91.3 8.75 94.15 6.35 97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span>

<span class="ds-sparkline" aria-hidden="true"><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__line" d="M3 44C5.85 43.13 8.7 41.39 11.55 41.39C14.39 41.39 17.24 42.31 20.09 42.31C22.94 42.31 25.79 36.86 28.64 35.11C31.48 33.36 34.33 32.47 37.18 30.97C40.03 29.48 42.88 26.07 45.73 26.07C48.58 26.07 51.42 27.14 54.27 27.14C57.12 27.14 59.97 23 62.82 21.32C65.67 19.64 68.52 16.87 71.36 16.87C74.21 16.87 77.06 17.79 79.91 17.79C82.76 17.79 85.61 13.35 88.45 11.05C91.3 8.75 94.15 6.35 97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span>

<span class="ds-sparkline" aria-hidden="true"><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__line" d="M3 44C5.85 43.13 8.7 41.39 11.55 41.39C14.39 41.39 17.24 42.31 20.09 42.31C22.94 42.31 25.79 36.86 28.64 35.11C31.48 33.36 34.33 32.47 37.18 30.97C40.03 29.48 42.88 26.07 45.73 26.07C48.58 26.07 51.42 27.14 54.27 27.14C57.12 27.14 59.97 23 62.82 21.32C65.67 19.64 68.52 16.87 71.36 16.87C74.21 16.87 77.06 17.79 79.91 17.79C82.76 17.79 85.61 13.35 88.45 11.05C91.3 8.75 94.15 6.35 97 4" vector-effect="non-scaling-stroke"></path></svg></span>

<span class="ds-sparkline" aria-hidden="true"><svg viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true"><path class="ds-sparkline__area" d="M3 44L11.55 41.39L20.09 42.31L28.64 35.11L37.18 30.97L45.73 26.07L54.27 27.14L62.82 21.32L71.36 16.87L79.91 17.79L88.45 11.05L97 4L97 48L3 48Z"></path><path class="ds-sparkline__line" d="M3 44L11.55 41.39L20.09 42.31L28.64 35.11L37.18 30.97L45.73 26.07L54.27 27.14L62.82 21.32L71.36 16.87L79.91 17.79L88.45 11.05L97 4" vector-effect="non-scaling-stroke"></path></svg><i class="ds-sparkline__dot"></i></span>
```

## Medidor

Uma razão contra um limite. O preenchimento carrega a gravidade — marca, atenção, crítico — e a trilha é um tom mais claro da mesma cor. A partir da atenção, ganha ícone.

Duas fatias de pizza são um medidor. Para várias partes de um todo, use a rosca ou barras empilhadas.

Marcação dos exemplos desta seção:

```html
<div class="ds-meter ds-meter--brand" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="42" aria-valuetext="42 GB de 100 GB" aria-label="Armazenamento">
<div class="ds-meter__head">
<span class="ds-meter__label">Armazenamento</span>
<span class="ds-meter__value"><strong>42 GB</strong><span> de 100 GB</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Limite do plano: 100 GB</p>
</div>

<div class="ds-meter ds-meter--warning" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="78" aria-valuetext="78 de 100, atenção" aria-label="Cota de API">
<div class="ds-meter__head">
<span class="ds-meter__label">Cota de API</span>
<span class="ds-meter__value"><ds-icon name="alert-triangle"></ds-icon><strong>78</strong><span> de 100</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Atenção a partir de 75% — renova em 3 dias</p>
</div>

<div class="ds-meter ds-meter--danger" role="meter" aria-valuemin="0" aria-valuemax="5000" aria-valuenow="4700" aria-valuetext="R$&nbsp;4,7&nbsp;mil de R$&nbsp;5&nbsp;mil, crítico" aria-label="Limite usado">
<div class="ds-meter__head">
<span class="ds-meter__label">Limite usado</span>
<span class="ds-meter__value"><ds-icon name="alert-circle"></ds-icon><strong>R$&nbsp;4,7&nbsp;mil</strong><span> de R$&nbsp;5&nbsp;mil</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Crítico a partir de 90%</p>
</div>

<div class="ds-meter ds-meter--success" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="112" aria-valuetext="112 de 100, ok" aria-label="Meta de vendas">
<div class="ds-meter__head">
<span class="ds-meter__label">Meta de vendas</span>
<span class="ds-meter__value"><strong>112</strong><span> de 100</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Meta batida — tom de sucesso forçado com tone</p>
</div>

<div class="ds-meter ds-meter--brand ds-meter--sm" role="meter" aria-valuemin="0" aria-valuemax="5" aria-valuenow="3" aria-valuetext="3 etapas de 5 etapas" aria-label="Onboarding">
<div class="ds-meter__head">
<span class="ds-meter__label">Onboarding</span>
<span class="ds-meter__value"><strong>3 etapas</strong><span> de 5 etapas</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
</div>

<div class="ds-meter ds-meter--danger ds-meter--sm" role="meter" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0.86" aria-valuetext="86%, crítico" aria-label="Espaço do time">
<div class="ds-meter__head">
<span class="ds-meter__label">Espaço do time</span>
<span class="ds-meter__value"><ds-icon name="alert-circle"></ds-icon><strong>86%</strong></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
<p class="ds-meter__caption">Limites próprios: atenção em 60%, crítico em 85%</p>
</div>
```

## Variação

A cor sai de dois fatos: para onde o número foi e se isso é bom. A mesma alta pode ser melhora ou piora — por isso o sinal, o ícone e o texto vêm sempre juntos.

Subiu e subir é bom: melhora.

Subiu, mas o bom é cair: piora.

Caiu e cair é bom: melhora.

Caiu e o bom é subir: piora.

Não mudou: estável, sem cor.

Sem lado bom: só informa.

Marcação dos exemplos desta seção:

```html
<article class="ds-stat">
<p class="ds-stat__label">Receita</p>
<p class="ds-stat__value">R$&nbsp;1,3&nbsp;mi</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+12,4%</span><span class="ds-visually-hidden"> (melhora)</span></span>
<span class="ds-stat__period">vs. mês anterior</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Custo de aquisição</p>
<p class="ds-stat__value">R$&nbsp;84</p>
<p class="ds-stat__delta" data-tone="bad">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+8%</span><span class="ds-visually-hidden"> (piora)</span></span>
<span class="ds-stat__period">vs. mês anterior</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Tempo de resposta</p>
<p class="ds-stat__value">182 ms</p>
<p class="ds-stat__delta" data-tone="good">
<span class="ds-stat__change"><ds-icon name="trending-down"></ds-icon><span>−14%</span><span class="ds-visually-hidden"> (melhora)</span></span>
<span class="ds-stat__period">vs. mês anterior</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Clientes ativos</p>
<p class="ds-stat__value">38.210</p>
<p class="ds-stat__delta" data-tone="bad">
<span class="ds-stat__change"><ds-icon name="trending-down"></ds-icon><span>−3,1%</span><span class="ds-visually-hidden"> (piora)</span></span>
<span class="ds-stat__period">vs. mês anterior</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Visitas</p>
<p class="ds-stat__value">12.400</p>
<p class="ds-stat__delta" data-tone="neutral">
<span class="ds-stat__change"><ds-icon name="minus"></ds-icon><span>0%</span><span class="ds-visually-hidden"> (estável)</span></span>
<span class="ds-stat__period">vs. mês anterior</span>
</p>
</article>

<article class="ds-stat">
<p class="ds-stat__label">Temperatura do servidor</p>
<p class="ds-stat__value">41 °C</p>
<p class="ds-stat__delta" data-tone="neutral">
<span class="ds-stat__change"><ds-icon name="trending-up"></ds-icon><span>+2%</span><span class="ds-visually-hidden"> (estável)</span></span>
<span class="ds-stat__period">vs. ontem</span>
</p>
</article>
```

## Acessibilidade

O indicador é texto, então já começa acessível. Estes detalhes completam.

- Número é texto — Valor, variação e período são texto de verdade — leitores de tela leem, buscadores acham, dá para copiar.
- Melhora ou piora, por escrito — A variação leva um texto oculto — “(melhora)”, “(piora)” ou “(estável)” — porque a cor não chega ao leitor de tela.
- Cor nunca sozinha — Sinal (+ ou −) e ícone de alta ou queda acompanham a cor. Funciona em escala de cinza e para daltônicos.
- Sparkline com nome — Com `trendLabel` ou `label`, vira uma imagem com descrição; sem, fica oculta — o número já disse tudo.
- Medidor semântico — `role="meter"` com valor, mínimo, máximo e um texto que inclui o estado: “92 de 100, crítico”.
- Contraste da variação — Verde e vermelho de texto (`success.fg`, `danger.fg`) passam de 4,5:1 nos dois temas.

## Tokens

O que indicador, sparkline e medidor consomem.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fundo do indicador | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno | #3E516624 | #FFFFFF0F |
| radius.xl (`--ds-radius-xl`) | Raio do indicador | 20 px | 20 px |
| color.fg.muted (`--ds-color-fg-muted`) | Rótulo | #46586E | #CEC8C1 |
| color.fg.default (`--ds-color-fg-default`) | Valor | #2B3847 | #F3EDE5 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Período | #5C6C7F | #9C9792 |
| color.success.fg (`--ds-color-success-fg`) | Variação que melhora | #0F6939 | #97DCA8 |
| color.danger.fg (`--ds-color-danger-fg`) | Variação que piora | #C13834 | #FFB2AA |
| color.chart.other (`--ds-color-chart-other`) | Linha da sparkline | #93A0B0 | #605D59 |
| color.chart.series.1 (`--ds-color-chart-series-1`) | Ponto atual da sparkline | #D95C0A | #D95C0A |
| color.brand.solid (`--ds-color-brand-solid`) | Medidor normal | #3E5166 | #C0CAD6 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Trilha do medidor normal | #EEF2F6 | #C0CAD624 |
| color.chart.status.warning (`--ds-color-chart-status-warning`) | Medidor em atenção | #F6A10C | #FFB851 |
| color.chart.status.critical (`--ds-color-chart-status-critical`) | Medidor crítico | #E44B46 | #E44B46 |
| color.chart.status.good (`--ds-color-chart-status-good`) | Medidor com meta batida | #339F5C | #51B873 |
| radius.full (`--ds-radius-full`) | Trilha do medidor | 9999 px | 9999 px |

## Uso

Quando um número basta — e como não estragá-lo.

- **Faça:** um número no lugar de uma barra. Um valor só não precisa de gráfico. Uma coluna sozinha ou uma pizza de duas fatias viram indicador.
- **Evite:** variação sem período. “+12%” sozinho não diz se é sobre ontem ou sobre o ano passado. Nomeie o período.
- **Dica:** Um destaque por tela. Se dois números disputam o topo, nenhum ganha. Escolha o que a tela existe para mostrar.

## API

Três funções que devolvem HTML, sem estado — use em qualquer lugar, inclusive dentro de tabelas e cards.

```html
import { statTileHtml, sparklineHtml, meterHtml } from 'https://lumeui.dev/v/0.40/lume.js';

kpis.innerHTML = [
  statTileHtml({ label: 'Receita', value: 1284000, format: 'currency-compact',
             delta: 0.124, deltaLabel: 'vs. mês anterior', trend: receita }),
  statTileHtml({ label: 'Tempo de resposta', value: '182 ms',
             delta: 0.08, deltaLabel: 'vs. semana anterior', good: 'down' }),
].join('');

celula.innerHTML = sparklineHtml(receita, { width: 96, height: 24, area: false });
uso.innerHTML = meterHtml({ label: 'Armazenamento', value: 72, max: 100, format: (v) => `${v} GB` });
```

`statTileHtml(options)`

Indicador completo. Devolve HTML.

|   |   |
| --- | --- |
|  `label`  | Rótulo, em caixa de frase e sem dois-pontos. |
|  `value · format`  | Número e formato ('currency-compact', 'integer'…) — ou um texto pronto, como '182 ms'. |
|  `delta · deltaFormat`  | Variação (razão: 0,124 = +12,4%) e como mostrá-la. Padrão: porcentagem. |
|  `deltaLabel`  | Contra o quê: “vs. mês anterior”. Sem período, a variação não diz nada. |
|  `good`  | 'up' (subir é bom), 'down' (cair é bom) ou 'none' (sem lado bom). |
|  `trend · trendLabel`  | Série da sparkline e o nome acessível dela. |
|  `hero · href`  | Versão de destaque; com href, o indicador vira link. |

`sparklineHtml(values, options)`

Linha de tendência sem eixos. Devolve HTML que estica na largura do contêiner.

|   |   |
| --- | --- |
|  `width · height`  | Tamanho padrão quando nada manda nele (112 × 32). |
|  `area · curve`  | Lavagem sob a linha (padrão) e 'smooth' ou 'linear'. |
|  `highlight`  | 'last' marca o ponto atual; 'none' tira o ponto. |
|  `color · label`  | Cor da linha (padrão: chart.other) e o nome acessível. |
|  `domain`  | Escala fixa [mín, máx]. Sem ela, a escala cobre ao menos 10% do valor — série estável não vira serra. |

`meterHtml(options)`

Uma razão contra um limite. Devolve HTML com role="meter".

|   |   |
| --- | --- |
|  `label · value · max · min`  | O que mede e em que faixa. |
|  `format`  | Formato do valor; sem ele, mostra a porcentagem. |
|  `thresholds`  | Onde vira atenção e crítico. Padrão: { warning: 0.75, danger: 0.9 }. |
|  `tone · size · caption`  | Força um tom ('success'…), versão 'sm' e uma linha de apoio. |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```
