# Carrossel

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/carrossel

Mostra destaques ou uma galeria um por vez, num espaço só. Use quando a ordem importa menos que o espaço; se tudo é importante, prefira uma grade.

Em números: por vista: 1+ · teclas: 4 · ponto: 6 px · arrastar: nativo.

## Exemplo

```html
<section class="ds-carousel" aria-label="Destaques">
  <div class="ds-carousel__viewport">
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
  </div>
</section>

<script type="module">
  import { createCarousel } from 'https://lumeui.dev/v/0.37/lume.js';
  createCarousel(document.querySelector('.ds-carousel'));
</script>
```

## Variantes

Quantos aparecem de uma vez vem do CSS, em `--ds-carousel-per-view`: dá para mudar por largura de tela sem mexer no JavaScript.

Destaque `ds-carousel` — Um slide por vez, com título e texto. Bom para novidades e boas-vindas.

Galeria `ds-carousel--peek` — Dois por vez (um no celular), com a ponta do próximo à vista: a pessoa vê que tem mais.

## Estados

O ponto atual estica e escurece: muda de forma, não só de cor. Sem `loop`, a seta da ponta fica desativada.

Marcação dos exemplos desta seção:

```html
<div class="ds-carousel__bar">
<div class="ds-carousel__dots"><button type="button" class="ds-carousel__dot" aria-current="true" aria-label="1"></button><button type="button" class="ds-carousel__dot" aria-label="2"></button><button type="button" class="ds-carousel__dot" aria-label="3"></button><button type="button" class="ds-carousel__dot" aria-label="4"></button></div>
<span class="ds-carousel__count">1 / 4</span>
<div class="ds-carousel__nav">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" disabled="" aria-label="prev"><ds-icon name="chevron-left"></ds-icon></button>
<button type="button" class="ds-icon-btn ds-icon-btn--muted" aria-label="next"><ds-icon name="chevron-right"></ds-icon></button>
</div>
</div>

<div class="ds-carousel__bar">
<div class="ds-carousel__dots"><button type="button" class="ds-carousel__dot" aria-label="1"></button><button type="button" class="ds-carousel__dot" aria-current="true" aria-label="2"></button><button type="button" class="ds-carousel__dot" aria-label="3"></button><button type="button" class="ds-carousel__dot" aria-label="4"></button></div>
<span class="ds-carousel__count">2 / 4</span>
<div class="ds-carousel__nav">
<button type="button" class="ds-icon-btn ds-icon-btn--muted" aria-label="prev"><ds-icon name="chevron-left"></ds-icon></button>
<button type="button" class="ds-icon-btn ds-icon-btn--muted" aria-label="next"><ds-icon name="chevron-right"></ds-icon></button>
</div>
</div>
```

## Código

Os slides são seus; o carrossel põe a barra de baixo, o teclado e os rótulos.

```html
<section class="ds-carousel" aria-label="Destaques">
  <div class="ds-carousel__viewport">
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
    <div class="ds-carousel__slide">…</div>
  </div>
</section>

<script type="module">
  import { createCarousel } from 'https://lumeui.dev/v/0.37/lume.js';

  const carousel = createCarousel(document.querySelector('.ds-carousel'), {
    loop: true,
    onChange: (index) => console.log(index),
  });
  carousel.next();
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Segue o padrão de carrossel da ARIA. Dê um nome ao carrossel com aria-label.

- Nome e papel — O leitor de tela diz “carrossel” e, em cada slide, “2 de 5”.
- Só o que está à vista — Os slides fora da vista ficam inert: o Tab não cai num link escondido.
- Teclado — ← → Home End — Com o foco na área dos slides, as setas trocam e Home e End vão às pontas.
- Passagem automática — Sempre com o botão de pausa, para com o mouse ou o foco e não começa com movimento reduzido. Enquanto passa sozinho, o leitor de tela não anuncia cada troca.
- Pontos — Cada ponto é um botão “Ir para o slide 3”, com aria-current no atual e área de toque maior que o desenho.

## Tokens usados

Tudo o que o carrossel consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.fg.default (`--ds-color-fg-default`) | Ponto atual e título | #2B3847 | #F3EDE5 |
| color.border.strong (`--ds-color-border-strong`) | Pontos | #3E51664D | #FFFFFF29 |
| color.fg.muted (`--ds-color-fg-muted`) | Ponto com o mouse, contagem e texto | #46586E | #CEC8C1 |
| color.bg.surface (`--ds-color-bg-surface`) | Fundo do slide de destaque | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno do slide | #3E516624 | #FFFFFF0F |
| color.border.focus (`--ds-color-border-focus`) | Foco na área dos slides | #53657A | #C0CAD6 |
| space.150 (`--ds-space-150`) | Espaço entre slides | 12 px | 12 px |
| radius.xl (`--ds-radius-xl`) | Cantos da área e do slide | 20 px | 20 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** de 3 a 7 slides. Coisas parecidas, em que ver uma de cada vez não atrapalha.
- **Evite:** o essencial escondido. Pouca gente passa do segundo slide. O que todo mundo precisa ver vai fora do carrossel.
- **Dica:** Passar sozinho, só se precisar. Mexer sozinho tira a atenção da leitura. Se usar, deixe pelo menos 5 segundos por slide.
