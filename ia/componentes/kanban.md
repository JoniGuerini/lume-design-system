# Kanban

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/kanban

Colunas de cartões que passam de uma para outra: etapas de um trabalho, do planejado ao feito. É a lista arrastável com várias listas do mesmo grupo, e o número de cada coluna acompanha.

Em números: colunas: 3–5 · largura mínima: 240 px · atalhos: 9 · dependências: 0.

## Exemplo

```html
<script type="module">
  import { createKanban } from 'https://lumeui.dev/v/1.14/lume.js';
  createKanban(document.querySelector('.ds-kanban'), { onChange: (_, colunas) => console.log(colunas) });
</script>
```

## Variantes

O cartão inteiro arrasta, ou só a alça quando ele tem links e botões.

Coluna vazia `data-empty` — Sem cartões, a coluna mostra onde soltar. O texto vem do Lume, no idioma da página.

Com alça `ds-kanban__card--handle`

Com `handle`, só a alça arrasta: o resto do cartão fica livre para links e botões.

Marcação dos exemplos desta seção:

```html
<div class="ds-kanban" aria-label="Roadmap do Lume" data-kanban="" role="group"><section class="ds-kanban__column" data-id="andamento">
<header class="ds-kanban__header"><h3 class="ds-kanban__title" id="kb-v1-andamento">Em andamento</h3><span class="ds-kanban__count">0</span></header>
<ul class="ds-kanban__list ds-sortable" role="list" aria-label="Em andamento" data-empty="" data-empty-text="Solte um cartão aqui"></ul><span class="ds-visually-hidden" aria-live="assertive"></span>
</section><section class="ds-kanban__column" data-id="feito">
<header class="ds-kanban__header"><h3 class="ds-kanban__title" id="kb-v1-feito">Feito</h3><span class="ds-kanban__count">2</span></header>
<ul class="ds-kanban__list ds-sortable" role="list" aria-label="Feito" data-empty-text="Solte um cartão aqui"><li class="ds-sortable__item ds-kanban__card" data-id="visualizador" data-kanban="" aria-describedby="ds-sortable-help" role="group">
<p class="ds-kanban__card-title">Visualizador de imagem</p>
</li><li class="ds-sortable__item ds-kanban__card" data-id="banner" data-kanban="" aria-describedby="ds-sortable-help" role="group">
<p class="ds-kanban__card-title">Banner e notificações</p>
</li></ul><span class="ds-visually-hidden" aria-live="assertive"></span>
</section></div>
```

## Estados

Os mesmos da lista arrastável, no cartão.

Marcação dos exemplos desta seção:

```html
<ul class="ds-kanban__list" role="list"><li class="ds-sortable__item ds-kanban__card" data-id="visualizador">
<p class="ds-kanban__card-title">Visualizador de imagem</p>
<p class="ds-kanban__card-text">Zoom, arrastar e galeria.</p>
<div class="ds-kanban__card-meta"><span class="ds-badge ds-badge--sm ds-badge--success">0.36</span></div>
</li></ul>

<ul class="ds-kanban__list" role="list"><li class="ds-sortable__item ds-kanban__card" data-id="visualizador" data-grabbed="">
<p class="ds-kanban__card-title">Visualizador de imagem</p>
<p class="ds-kanban__card-text">Zoom, arrastar e galeria.</p>
<div class="ds-kanban__card-meta"><span class="ds-badge ds-badge--sm ds-badge--success">0.36</span></div>
</li></ul>

<ul class="ds-kanban__list" role="list"><li class="ds-sortable__item ds-kanban__card" data-id="visualizador" data-ghost="">
<p class="ds-kanban__card-title">Visualizador de imagem</p>
<p class="ds-kanban__card-text">Zoom, arrastar e galeria.</p>
<div class="ds-kanban__card-meta"><span class="ds-badge ds-badge--sm ds-badge--success">0.36</span></div>
</li></ul>
```

## Código

O `data-id` da coluna e o de cada cartão formam o que `toObject()` devolve.

```html
<div class="ds-kanban" aria-label="Roadmap do Lume">
  <section class="ds-kanban__column" data-id="andamento">
    <header class="ds-kanban__header">
      <h3 class="ds-kanban__title">Em andamento</h3>
      <span class="ds-kanban__count"></span>
    </header>
    <ul class="ds-kanban__list" role="list" aria-label="Em andamento">
      <li class="ds-sortable__item ds-kanban__card" data-id="kanban">
        <p class="ds-kanban__card-title">Lista arrastável e kanban</p>
        <p class="ds-kanban__card-text">Mudar a ordem e o lugar das coisas.</p>
      </li>
    </ul>
  </section>
  <section class="ds-kanban__column" data-id="feito">…</section>
</div>

<script type="module">
  import { createKanban } from 'https://lumeui.dev/v/1.14/lume.js';

  createKanban(document.querySelector('.ds-kanban'), {
    // { andamento: [], feito: ['kanban', …] }
    onChange: (mudanca, colunas) => salvar(colunas),
  });
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Cada coluna é uma lista com nome; o cartão é lido pelo próprio texto.

- Cartão focável — Espaço Enter — Sem alça, o cartão recebe o foco e Espaço ou Enter o pega. Com alça, a alça é o botão “Mover …”.
- Trocar de coluna — ← → — As laterais levam o cartão para a coluna vizinha, e o anúncio diz qual: ““Lista arrastável e kanban” em Feito, posição 1 de 4.”
- Mudar a ordem — ↑ ↓ Home End — As setas de cima e de baixo andam dentro da coluna; Home e End vão às pontas.
- Desfazer — Esc — Esc devolve o cartão para a coluna e a posição de onde saiu.
- Rolagem — Com mais colunas que a largura, o quadro rola de lado; arrastando perto da borda, ele rola sozinho.

## Tokens usados

A coluna é afundada; o cartão, a superfície por cima.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.sunken (`--ds-color-bg-sunken`) | Fundo da coluna | #E8EDF3 | #151412 |
| color.bg.surface (`--ds-color-bg-surface`) | Fundo do cartão | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno do cartão | #3E516624 | #FFFFFF0F |
| color.border.default (`--ds-color-border-default`) | Cartão com o mouse e coluna vazia | #3E516633 | #FFFFFF1A |
| color.fg.muted (`--ds-color-fg-muted`) | Texto do cartão e número da coluna | #46586E | #CEC8C1 |
| radius.xl (`--ds-radius-xl`) | Cantos da coluna | 20 px | 20 px |
| radius.lg (`--ds-radius-lg`) | Cantos do cartão | 16 px | 16 px |

## Uso

Para etapas, não para categorias.

- **Faça:** trabalho que avança. Do planejado ao feito, da triagem à resposta: o cartão muda de coluna quando muda de etapa.
- **Evite:** muitas colunas. De três a cinco cabem na tela. Mais que isso, a pessoa perde o quadro de vista.
- **Dica:** Cartão curto. Título, uma linha e um selo. O detalhe abre ao clicar, num Modal ou numa Gaveta lateral.
