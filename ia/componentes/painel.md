# Painel

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/painel

A superfície de uma tarefa do produto: rótulo, título, controles e conteúdo em seções com respiro. Tudo plano — o destaque vem da hierarquia, não de efeito.

Em números: partes: 7 · variações: 3 · raio: 28 px · ação primária: 1.

## Exemplo

```html
<article class="ds-panel" aria-labelledby="roteiro-titulo">
  <header class="ds-panel__header">
    <div>
      <p class="ds-panel__eyebrow">Roteiro</p>
      <h2 class="ds-panel__title" id="roteiro-titulo">Roteiro de lançamento</h2>
    </div>
    <div class="ds-panel__actions">
      <button class="ds-icon-btn" aria-label="Fechar"><ds-icon name="x"></ds-icon></button>
    </div>
    <div class="ds-panel__aside">
      <button class="ds-btn ds-btn--ghost ds-btn--sm"><ds-icon name="star"></ds-icon>Exemplos</button>
    </div>
  </header>
  <div class="ds-panel__toolbar">
    <button class="ds-chip">Tom direto …</button>
    <span class="ds-panel__spacer"></span>
    <span class="ds-panel__meta">~3 min</span>
  </div>
  <div class="ds-panel__body">
    <section class="ds-section">
      <p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Abertura</span></p>
      <p class="ds-section__text">…</p>
    </section>
  </div>
  <footer class="ds-panel__footer">
    <button class="ds-btn ds-btn--primary">Escolher formato</button>
  </footer>
</article>
```

## Anatomia

Sete partes, sempre na mesma ordem. Quem já viu um painel sabe ler qualquer outro.

- 1 — Rótulo — O tipo do conteúdo, apagado: “Roteiro”, “Pedido”, “Revisão”. — `text.eyebrow · fg.subtle`
- 2 — Título — O assunto, com tracking justo. Um por painel. — `text.heading-lg`
- 3 — Ações de ícone — Fechar, duplicar, expandir — sem fundo, sempre com nome. — `ds-icon-btn`
- 4 — Aside — Uma ação secundária em ghost, como “Exemplos”. — `ds-btn--ghost`
- 5 — Barra de controles — Chips que ajustam o conteúdo; a meta fica à direita. — `ds-chip · ds-panel__meta`
- 6 — Seção — Carimbo + rótulo, texto com respiro e ações inline. — `ds-section`
- 7 — Rodapé — A ação principal do painel. Só uma. — `ds-btn--primary`

Marcação dos exemplos desta seção:

```html
<article class="ds-panel ds-panel--compact">
<header class="ds-panel__header">
<div>
<p class="ds-panel__eyebrow"><span>Roteiro</span></p>
<p class="ds-panel__title"><span>Roteiro de lançamento</span></p>
</div>
<div class="ds-panel__actions"><span class="ds-icon-btn"><ds-icon name="stack"></ds-icon></span><span class="ds-icon-btn"><ds-icon name="x"></ds-icon></span></div>
<div class="ds-panel__aside"><span class="ds-btn ds-btn--ghost ds-btn--sm"><ds-icon name="star"></ds-icon>Exemplos</span></div>
</header>
<div class="ds-panel__toolbar">
<span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="pencil"></ds-icon></span>Tom direto<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></span>
<span class="ds-panel__spacer"></span>
<span class="ds-panel__meta">~3 min</span>
</div>
<div class="ds-panel__body">
<section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Abertura</span></p>
<p class="ds-section__text">Comece pelo problema de quem vai ler.</p>
<div class="ds-section__actions"><span class="ds-inline-action"><ds-icon name="video"></ds-icon>Na cena<ds-icon name="plus"></ds-icon></span></div>
</section>
</div>
<footer class="ds-panel__footer"><span class="ds-btn ds-btn--primary"><ds-icon name="video"></ds-icon>Escolher formato</span></footer>
</article>
```

## Seções

O carimbo dá ordem ao conteúdo. Use números para etapas, tempos para roteiros e só o rótulo quando a ordem não importa.

01 — Contexto

02 — Proposta

Numerada — Etapas e listas de decisão.

00s — Abra com a situação

14s — Apresente o produto

Temporal — Roteiros, vídeos e cronogramas.

Observações

Anexos

Só rótulo — Blocos sem ordem: notas, detalhes.

## Variações

Uma estrutura, três jeitos de encaixar na tela.

Padrão `ds-panel`

A tarefa principal da tela, com sombra e fundo elevado.

Compacto `ds-panel--compact`

Gavetas, painéis laterais e espaços menores.

Plano `ds-panel--flat`

Dentro de outra superfície — sem sombra própria.

Marcação dos exemplos desta seção:

```html
<article class="ds-panel " aria-label="Roteiro de lançamento">
<header class="ds-panel__header">
<div>
<p class="ds-panel__eyebrow">Roteiro</p>
<h3 class="ds-panel__title">Roteiro de lançamento</h3>
</div>
<div class="ds-panel__actions"><button type="button" class="ds-icon-btn" aria-label="Duplicar"><ds-icon name="stack"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Fechar"><ds-icon name="x"></ds-icon></button></div>
</header>
<div class="ds-panel__body">
<section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Abertura</span></p>
<p class="ds-section__text">Comece pelo problema de quem vai ler: o que está travando hoje e por que isso importa agora.</p>
<div class="ds-section__actions"><button type="button" class="ds-inline-action"><ds-icon name="video"></ds-icon>Na cena<ds-icon name="plus"></ds-icon></button></div>
</section><section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">01</span><span>Proposta</span></p>
<p class="ds-section__text">Mostre o caminho em uma frase. Os detalhes entram depois, quando a pessoa já sabe aonde vai.</p>
<div class="ds-section__actions"><button type="button" class="ds-inline-action"><ds-icon name="file-text"></ds-icon>Referências<ds-icon name="plus"></ds-icon></button></div>
</section>
</div>
</article>

<article class="ds-panel ds-panel--compact" aria-label="Roteiro de lançamento">
<header class="ds-panel__header">
<div>
<p class="ds-panel__eyebrow">Roteiro</p>
<h3 class="ds-panel__title">Roteiro de lançamento</h3>
</div>
<div class="ds-panel__actions"><button type="button" class="ds-icon-btn" aria-label="Duplicar"><ds-icon name="stack"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Fechar"><ds-icon name="x"></ds-icon></button></div>
</header>
<div class="ds-panel__body">
<section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Abertura</span></p>
<p class="ds-section__text">Comece pelo problema de quem vai ler: o que está travando hoje e por que isso importa agora.</p>
<div class="ds-section__actions"><button type="button" class="ds-inline-action"><ds-icon name="video"></ds-icon>Na cena<ds-icon name="plus"></ds-icon></button></div>
</section>
</div>
</article>

<article class="ds-panel ds-panel--compact ds-panel--flat" aria-label="Roteiro de lançamento">
<header class="ds-panel__header">
<div>
<p class="ds-panel__eyebrow">Roteiro</p>
<h3 class="ds-panel__title">Roteiro de lançamento</h3>
</div>
<div class="ds-panel__actions"><button type="button" class="ds-icon-btn" aria-label="Duplicar"><ds-icon name="stack"></ds-icon></button><button type="button" class="ds-icon-btn" aria-label="Fechar"><ds-icon name="x"></ds-icon></button></div>
</header>
<div class="ds-panel__body">
<section class="ds-section">
<p class="ds-section__head"><span class="ds-section__stamp">00</span><span>Abertura</span></p>
<p class="ds-section__text">Comece pelo problema de quem vai ler: o que está travando hoje e por que isso importa agora.</p>
<div class="ds-section__actions"><button type="button" class="ds-inline-action"><ds-icon name="video"></ds-icon>Na cena<ds-icon name="plus"></ds-icon></button></div>
</section>
</div>
</article>
```

## Painel ou card?

Os dois são superfícies, mas resolvem coisas diferentes.

### Painel

- Uma tarefa inteira: ler, ajustar e decidir.
- Tem controles, seções e uma ação principal.
- Normalmente um por tela ou por gaveta.

### Card

- Um item de uma coleção: um resumo para abrir.
- Clicável por inteiro, sem controles próprios.
- Aparece em grade ou lista, vários por tela.

## Acessibilidade

A ordem visual do painel já é a ordem de leitura. Mantenha assim.

- Região com nome — Use `<article aria-labelledby>` apontando para o título.
- Título no nível certo — O título é um heading de verdade (h2 numa página, h1 num modal). O rótulo apagado é só texto.
- Ações de ícone com nome — Fechar, duplicar e expandir levam `aria-label` e dica com o mesmo texto.
- Ordem de leitura — Cabeçalho → controles → seções → ação. Não reordene com CSS.
- Controles pelo teclado — ↑ ↓ Esc — Os chips abrem menus navegáveis por setas; Esc fecha e devolve o foco.
- Carimbos são conteúdo — “00 · Abertura” é lido em ordem. Não use o carimbo como única pista de sequência em listas longas — numere o texto também.

## Tokens usados

O painel não tem cor própria: tudo vem de superfície, texto e espaço.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo | #FFFFFF | #2C2A27 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno | #3E516624 | #FFFFFF0F |
| radius.2xl (`--ds-radius-2xl`) | Raio | 28 px | 28 px |
| shadow.lg (`--ds-shadow-lg`) | Sombra | 0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14) | 0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5) |
| space.600 (`--ds-space-600`) | Padding lateral e inferior | 48 px | 48 px |
| space.400 (`--ds-space-400`) | Entre cabeçalho, controles e conteúdo | 32 px | 32 px |
| space.500 (`--ds-space-500`) | Entre seções | 40 px | 40 px |
| text.eyebrow (`--ds-text-eyebrow`) | Rótulo | 13/18 · medium | 13/18 · medium |
| text.heading-lg (`--ds-text-heading-lg`) | Título | 26/32 · regular | 26/32 · regular |
| text.display-sm (`--ds-text-display-sm`) | Título em destaque | 40/44 · regular | 40/44 · regular |
| text.caption (`--ds-text-caption`) | Carimbo | 12/16 · regular | 12/16 · regular |
| text.body-md (`--ds-text-body-md`) | Texto das seções | 16/28 · regular | 16/28 · regular |
| color.fg.subtle (`--ds-color-fg-subtle`) | Rótulo, carimbo e meta | #5C6C7F | #9C9792 |

## Uso

O painel é para telas do produto — não para páginas inteiras.

- **Faça:** uma tarefa por painel. Um roteiro, um pedido, uma revisão. Se a tela tem duas tarefas, são dois painéis — ou um painel e uma gaveta.
- **Evite:** painel como página. Início, landing e documentação têm layouts próprios. Enfiar tudo num painel vira um bloco de texto sem hierarquia de página.
- **Dica:** Uma ação no rodapé. O primário fecha a tarefa. Ações de apoio vão para o aside ou para as ações inline das seções.
