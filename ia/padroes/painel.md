# Painel de indicadores

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/painel

Uma tela para responder a uma pergunta de relance: números comparados, um gráfico principal e, escrito, o que pede atenção. Os gráficos são os do Lume; aqui o assunto é como montá-los juntos.

Em números: pergunta: 1 · indicadores, no máximo: 4 · período para tudo: 1.

## Exemplo ao vivo

O uso da documentação do Lume, com números de exemplo. Para escolher o gráfico de cada dado, veja Gráficos › Visão geral.

### Precisa de atenção

- “datepicker” foi buscado 38 vezes sem resultado — A página se chama Seletor de data. Vale um sinônimo na busca. — Ver buscas
- Tokens perdeu 24% das visitas — Desde que saiu do menu de Recursos. — Abrir a página

- Troque o período: indicadores e gráficos mudam juntos, e cada subtítulo repete o período.
- Buscas sem resultado caindo aparece em verde: ali, cair é bom.
- Atualize: o horário muda, e os cartões avisam que estão carregando.

## Anatomia

Cinco partes, da pergunta ao detalhe: quem lê de cima para baixo para quando já tem a resposta.

- 1 — Cabeçalho — A pergunta que o painel responde, de quando é o dado e o período, que vale para tudo abaixo.
- 2 — Indicadores — Até quatro números, cada um com a variação e a tendência. Quem cai é bom diz isso (buscas sem resultado).
- 3 — Gráfico principal — O maior da tela, respondendo à pergunta do título. O período anterior em cinza, para comparar.
- 4 — Precisa de atenção — O que pede uma ação, já escrito em frases, com o link para agir. Ninguém precisa garimpar o gráfico.
- 5 — Detalhes — Embaixo, os recortes que explicam o número: de onde vêm, o que mais se vê.

## Regras

Seis decisões que valem para qualquer painel.

Uma pergunta por painel

O título é a pergunta (“Como a documentação está sendo usada”), não “Dashboard”. O que não ajuda a responder vai para outro painel.

Número sempre comparado

“4.812 visitas” não diz se é bom. Com “+12% vs. 30 dias anteriores”, diz. No máximo quatro indicadores.

Um período para tudo

O seletor do topo muda todos os cartões juntos. Período por cartão faz a pessoa comparar coisas que não se comparam.

O que pede ação vem escrito

Uma queda importante não fica escondida numa curva. Vira uma frase em “Precisa de atenção”, com o link.

Diga de quando é o dado

“Atualizado às 09:40” e um botão para atualizar. Número velho tratado como novo leva a decisão errada.

Todo número leva a algum lugar

Do painel para a lista que explica o número. O painel resume; a decisão acontece na lista.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.3"></path><path d="M12 17h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 9h14M5 15h14M10 4 8 20M16 4l-2 16"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="3"></rect><path d="M3.5 10h17M8 3v4M16 3v4"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 17.2h.01"></path><path d="M12 17.2h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10.3 4.2 2.9 17.5A2 2 0 0 0 4.6 20.5h14.8a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0z"></path><path d="M12 9.5v4"></path><path d="M12 17h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
```

## Mensagens

Número com contexto, hora que se lê e vazio que diz o que fazer.

| Situação | Evite | Prefira |
| --- | --- | --- |
| Título | Dashboard | Como a documentação está sendo usada |
| Variação | +12,4% | +12,4% vs. 30 dias anteriores |
| Atualização | Last sync: 2026-11-15T12:40:00Z | Atualizado às 09:40 |
| Sem dados | No data | Nenhuma visita nesse período. Escolha um período maior. |

## Acessibilidade

Quem não vê o gráfico precisa chegar à mesma conclusão.

- Gráfico com tabela — Cada gráfico do Lume tem vista em tabela e tooltip pelo teclado (setas). Os números do painel também existem em texto.
- Variação sem depender da cor — Seta, sinal (+ ou −) e a frase “vs. 30 dias anteriores”. Verde e vermelho só reforçam.
- Período anunciado — O seletor é um `radiogroup`; os indicadores ficam em `aria-live="polite"`, e o leitor de tela lê os números novos depois da troca.
- Carregando, dito — `setLoading(true)` marca o gráfico com `aria-busy`; ninguém lê um número velho achando que é novo.
- Atenção como lista — “Precisa de atenção” é uma seção com título e uma `<ul>`; os links dizem para onde vão (“Ver buscas”), não “Clique aqui”.

## Código

Os gráficos são `createLineChart` e `createBarChart`; os indicadores, `statTileHtml`. O período é um `createSegmented` que atualiza todos.

```html
<header>
  <h1>Como a documentação está sendo usada</h1>
  <p>Atualizado às 09:40</p>
  <div class="ds-segmented" role="radiogroup" aria-label="Período">…</div>
</header>

<div id="indicadores" aria-live="polite"></div>
<div id="visitas"></div>

<section aria-labelledby="atencao">
  <h2 id="atencao">Precisa de atenção</h2>
  <ul>…</ul>
</section>
```

```html
import { createLineChart, createSegmented, statTileHtml } from 'https://lumeui.dev/v/1.9/lume.js';

const grafico = createLineChart(document.querySelector('#visitas'), {
  card: true, title: 'Visitas', categories, tooltipLabels,
  series: [
    { name: 'Este período', values: atual },
    { name: 'Período anterior', values: anterior, muted: true },
  ],
});

createSegmented(document.querySelector('[aria-label="Período"]'), {
  async onChange(periodo) {
    grafico.setLoading(true);                 // um período para todos os cartões
    const d = await buscar(periodo);
    indicadores.innerHTML = statTileHtml({ label: 'Visitas', value: d.visitas, delta: d.variacao, deltaLabel: 'vs. 30 dias anteriores' });
    grafico.update({ categories: d.dias, series: d.series });
    grafico.setLoading(false);
  },
});
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Painel é para acompanhar. Para investigar, a pessoa vai para a lista ou o relatório.

- **Faça:** comece pelo que a pessoa decide. Pergunte “o que alguém faz depois de olhar isto?”. Os números que mudam essa decisão entram; o resto fica num relatório.
- **Evite:** a parede de números. Doze indicadores do mesmo tamanho dizem que nada é mais importante. Quatro, com um gráfico maior, contam uma história.
- **Dica:** Período começa no que mais se usa. Abra no período que as pessoas mais escolhem (aqui, 30 dias) e lembre a escolha delas na próxima visita.
