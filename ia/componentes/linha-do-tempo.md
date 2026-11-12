# Linha do tempo

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/linha-do-tempo

Eventos em ordem, como o histórico de um pedido ou a atividade de um projeto. Mostra o que aconteceu, quando e quem fez.

Em números: JavaScript: 0 · tons: 5 · marcador: 24 px · base: ol.

## Exemplo

```html
<ol class="ds-timeline">
  <li class="ds-timeline__item" data-tone="success">
    <span class="ds-timeline__marker"><ds-icon name="check" size="14"></ds-icon></span>
    <div class="ds-timeline__content">
      <p class="ds-timeline__title">Pedido entregue</p>
      <p class="ds-timeline__text">Recebido por Ana</p>
      <time class="ds-timeline__time" datetime="2026-11-08T14:20">8 de nov., 14:20</time>
    </div>
  </li>
</ol>
```

## Variantes

O tom vai em `data-tone`, no item. Reserve a cor para o que merece destaque.

Com ícones `ds-timeline__marker` — O ícone diz o tipo do evento.

Com pontos `marcador vazio` — Quando todos os eventos são do mesmo tipo.

Marcação dos exemplos desta seção:

```html
<ol class="ds-timeline"><li class="ds-timeline__item" data-tone="success">
<span class="ds-timeline__marker"><ds-icon name="check"></ds-icon></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Pedido entregue</p>
<p class="ds-timeline__text">Recebido por Ana</p>
<time class="ds-timeline__time" datetime="2026-11-08T14:20">8 de nov., 14:20</time>
</div>
</li><li class="ds-timeline__item" data-tone="brand">
<span class="ds-timeline__marker"><ds-icon name="package"></ds-icon></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Saiu para entrega</p>
<p class="ds-timeline__text">Previsão para hoje</p>
<time class="ds-timeline__time" datetime="2026-11-08T08:05">8 de nov., 08:05</time>
</div>
</li><li class="ds-timeline__item">
<span class="ds-timeline__marker"><ds-icon name="file-text"></ds-icon></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Nota fiscal emitida</p>
<time class="ds-timeline__time" datetime="2026-11-07T17:42">7 de nov., 17:42</time>
</div>
</li><li class="ds-timeline__item">
<span class="ds-timeline__marker"><ds-icon name="clock"></ds-icon></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Pedido criado</p>
<p class="ds-timeline__text">Por Bruno</p>
<time class="ds-timeline__time" datetime="2026-11-07T09:30">7 de nov., 09:30</time>
</div>
</li></ol>

<ol class="ds-timeline"><li class="ds-timeline__item" data-tone="success">
<span class="ds-timeline__marker"></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Pedido entregue</p>
<p class="ds-timeline__text">Recebido por Ana</p>
<time class="ds-timeline__time" datetime="2026-11-08T14:20">8 de nov., 14:20</time>
</div>
</li><li class="ds-timeline__item" data-tone="brand">
<span class="ds-timeline__marker"></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Saiu para entrega</p>
<p class="ds-timeline__text">Previsão para hoje</p>
<time class="ds-timeline__time" datetime="2026-11-08T08:05">8 de nov., 08:05</time>
</div>
</li><li class="ds-timeline__item">
<span class="ds-timeline__marker"></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Nota fiscal emitida</p>
<time class="ds-timeline__time" datetime="2026-11-07T17:42">7 de nov., 17:42</time>
</div>
</li><li class="ds-timeline__item">
<span class="ds-timeline__marker"></span>
<div class="ds-timeline__content">
<p class="ds-timeline__title">Pedido criado</p>
<p class="ds-timeline__text">Por Bruno</p>
<time class="ds-timeline__time" datetime="2026-11-07T09:30">7 de nov., 09:30</time>
</div>
</li></ol>
```

## Acessibilidade

É uma lista ordenada, com a data em um elemento próprio.

- Ordem — Use `ol`: o leitor de tela diz quantos eventos há e em qual está.
- Data de verdade — `time` com `datetime` deixa a data legível também para máquinas.
- Não só cor — O sentido está no título; o tom e o ícone só reforçam.

## Tokens usados

Tudo o que a linha do tempo consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.muted (`--ds-color-bg-muted`) | Marcador neutro | #DAE0E8 | #3D3B38 |
| color.brand.solid (`--ds-color-brand-solid`) | Marcador de marca | #3E5166 | #C0CAD6 |
| color.success.subtle (`--ds-color-success-subtle`) | Marcador de sucesso | #EFFAF1 | #72CB8B21 |
| color.border.default (`--ds-color-border-default`) | Fio entre eventos | #3E516633 | #FFFFFF1A |
| color.fg.subtle (`--ds-color-fg-subtle`) | Data | #5C6C7F | #9C9792 |
| radius.full (`--ds-radius-full`) | Marcador | 9999 px | 9999 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** o que já aconteceu. Histórico de pedidos, atividade e auditoria, do mais novo para o mais antigo.
- **Evite:** o que falta fazer. Etapas de um fluxo pedem o Stepper.
- **Dica:** Data relativa com cuidado. “Há 2 horas” é ótimo para o recente; para o resto, mostre a data.
