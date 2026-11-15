# Banner de anúncio

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/banner-de-anuncio

Uma faixa no topo do app para um recado que vale para todo mundo: uma versão nova, uma mudança que vem aí. A pessoa fecha e o banner lembra que ela já viu.

Em números: tons: 5 · por vez: 1 · lembra: localStorage · papel ARIA: region.

## Exemplo

```html
<div class="ds-banner ds-banner--brand" aria-label="Anúncio">
  <span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
  <p class="ds-banner__text"><strong>Lume 0.35</strong> Banner de anúncio e central de notificações. <a class="ds-link" href="/novidades">Ver novidades</a></p>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close"><ds-icon name="x" size="16"></ds-icon></button>
</div>

<script type="module">
  import { createBanner } from 'https://lumeui.dev/v/1.2/lume.js';
  createBanner(document.querySelector('.ds-banner'), { id: 'lume-0.35' });
</script>
```

## Variantes

O tom diz o tipo de recado; o ícone e o texto dizem o mesmo que a cor.

Novidade `ds-banner--brand` — Uma versão nova, um recurso que chegou. Faixa sólida no tom da marca: o único tom que se destaca de verdade.

Neutro `ds-banner` — Um recado sem urgência, que não precisa chamar atenção.

Informação `ds-banner--info` — Algo que ajuda a entender o que mudou.

Atenção `ds-banner--warning` — Uma mudança que pede ação antes de uma data. Sem fechar, enquanto a ação não for feita.

Erro `ds-banner--danger` — Algo que afeta todo o app agora. Fica até o problema acabar.

Componentes — Feedback

No topo do app `ds-banner--flush` — Colado nas bordas, acima da barra de cima: só a linha de baixo separa.

Marcação dos exemplos desta seção:

```html
<div class="ds-banner ds-banner--brand" role="region" aria-label="Anúncio">
<span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
<p class="ds-banner__text"><strong>Lume 0.35</strong>Banner de anúncio e central de notificações. <a class="ds-link" href="#/novidades">Ver novidades</a></p>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="Fechar anúncio"><ds-icon name="x"></ds-icon></button>
</div>

<div class="ds-banner" role="region" aria-label="Anúncio">
<span class="ds-banner__icon"><ds-icon name="info"></ds-icon></span>
<p class="ds-banner__text">O Storybook do Lume agora também mostra os componentes React. <a class="ds-link" href="#/recursos/react">Storybook</a></p>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="Fechar anúncio"><ds-icon name="x"></ds-icon></button>
</div>

<div class="ds-banner ds-banner--info" role="region" aria-label="Anúncio">
<span class="ds-banner__icon"><ds-icon name="info"></ds-icon></span>
<p class="ds-banner__text">Cada linha do Lume fica congelada em /v/0.xx/: atualize quando quiser. <a class="ds-link" href="#/primeiros-passos">Instalação</a></p>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="Fechar anúncio"><ds-icon name="x"></ds-icon></button>
</div>

<div class="ds-banner ds-banner--warning" role="region" aria-label="Anúncio">
<span class="ds-banner__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<p class="ds-banner__text">Na 1.0, nomes públicos só mudam com aviso no console. <a class="ds-link" href="#/recursos/api">API</a></p>
</div>

<div class="ds-banner ds-banner--danger" role="region" aria-label="Anúncio">
<span class="ds-banner__icon"><ds-icon name="alert-circle"></ds-icon></span>
<p class="ds-banner__text">As fontes do Lume não carregaram; o texto usa as do sistema.</p>
</div>

<div class="ds-banner ds-banner--brand ds-banner--flush" role="region" aria-label="Anúncio">
<span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
<p class="ds-banner__text"><strong>Lume 0.35</strong>Banner de anúncio e central de notificações. <a class="ds-link" href="#/novidades">Ver novidades</a></p>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close" aria-label="Fechar anúncio"><ds-icon name="x"></ds-icon></button>
</div>

<span class="ds-skeleton ds-skeleton--text"></span>
```

## Código

A marcação é do banner inteiro; o JavaScript só fecha e lembra.

```html
<div class="ds-banner ds-banner--brand" aria-label="Anúncio">
  <span class="ds-banner__icon"><ds-icon name="megaphone"></ds-icon></span>
  <p class="ds-banner__text">
    <strong>Lume 0.35</strong> Banner de anúncio e central de notificações.
    <a class="ds-link" href="/novidades">Ver novidades</a>
  </p>
  <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-banner__close"><ds-icon name="x" size="16"></ds-icon></button>
</div>

<script type="module">
  import { createBanner } from 'https://lumeui.dev/v/1.2/lume.js';

  // id novo a cada anúncio: quem fechou o anterior vê este
  createBanner(document.querySelector('.ds-banner'), { id: 'lume-0.35' });
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Um recado que está na página desde o começo, não um aviso que interrompe.

- Região com nome — É role="region" com o nome “Anúncio”: leitores de tela o listam entre os pontos da página. Não use role="alert": ele não chegou agora.
- Fechar — Tab Enter — O botão diz “Fechar anúncio”. Fechado com o foco dentro, o foco vai para o que vem logo depois, e não se perde.
- Não só cor — Cada tom tem o seu ícone, e o texto diz o tipo de recado.
- Uma frase — Texto curto e um link só: o banner fica em todas as telas e não pode virar leitura obrigatória.

## Tokens usados

Os mesmos tons do alerta.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fundo neutro | #FFFFFF | #24221F |
| color.brand.solid (`--ds-color-brand-solid`) | Fundo da novidade | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Texto e ícone da novidade | #F8FAFD | #1D2734 |
| color.info.subtle (`--ds-color-info-subtle`) | Fundo de informação | #F0F8FF | #6ABCFF21 |
| color.warning.subtle (`--ds-color-warning-subtle`) | Fundo de atenção | #FFF9F0 | #FFB85121 |
| color.danger.subtle (`--ds-color-danger-subtle`) | Fundo de erro | #FFF4F3 | #FF908721 |
| color.border.default (`--ds-color-border-default`) | Contorno neutro | #3E516633 | #FFFFFF1A |
| radius.lg (`--ds-radius-lg`) | Cantos | 16 px | 16 px |

## Uso

Banner, alerta ou toast?

- **Faça:** recado para todo mundo. Versão nova, mudança que vem aí, problema que afeta o app inteiro.
- **Evite:** um banner por cima do outro. Um por vez. Recado de uma tela só é Alerta; resposta a uma ação é Toast.
- **Dica:** Troque o id a cada anúncio. Quem fechou o “lume-0.34” vê o “lume-0.35”. Mesmo id, o banner fica fechado.
