# Central de notificações

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/central-de-notificacoes

O sino que abre a lista do que aconteceu, para cada pessoa. O número mostra quantas faltam ler; abrir uma notificação a marca como lida.

Em números: base: Popover · tons de ícone: 6 · tempo: relativo · papel ARIA: dialog.

## Exemplo

```html
<button type="button" class="ds-icon-btn"><ds-icon name="bell"></ds-icon></button>

<script type="module">
  import { createNotificationCenter } from 'https://lumeui.dev/v/1.1/lume.js';

  createNotificationCenter(document.querySelector('.ds-icon-btn'), {
    items: [
      { id: 'v035', title: 'Lume 0.35', time: new Date(), icon: 'megaphone', tone: 'brand', href: '/novidades' },
    ],
  });
</script>
```

## Variantes

O painel é sempre o mesmo; muda o que há nele.

Com não lidas `read: false` — Título forte e o ponto do indicador. “Marcar todas como lidas” só aparece quando há o que marcar.

Tudo lido `read: true` — Sem ponto, título no peso normal e o sino sem número.

Vazio `items: []` — Uma frase curta, sem ilustração.

Sem ícone `sem icon` — Para listas em que todas as notificações são do mesmo tipo.

Marcação dos exemplos desta seção:

```html
<div class="ds-popover ds-notify-panel" role="group" aria-label="Notificações">
<div class="ds-notify">
<div class="ds-notify__header"><h3 class="ds-notify__title">Notificações</h3></div>
<ul class="ds-notify__list" role="list"><li class="ds-notify__item">
<a class="ds-notify__link" href="#">
<span class="ds-notify__icon ds-notify__icon--success"><ds-icon name="check-circle"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Storybook atualizado</span><span class="ds-notify__text">As histórias dos componentes novos já estão lá.</span><time class="ds-notify__time">há 2 horas</time></span>
</a>
</li><li class="ds-notify__item">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__icon ds-notify__icon--brand"><ds-icon name="megaphone"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.34</span><span class="ds-notify__text">Divisor, link e progresso circular.</span><time class="ds-notify__time">ontem</time></span>
</a>
</li><li class="ds-notify__item">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__icon"><ds-icon name="megaphone"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.33</span><span class="ds-notify__text">Avaliação e barra de ferramentas.</span><time class="ds-notify__time">6 de nov.</time></span>
</a>
</li></ul>
</div>
</div>

<div class="ds-popover ds-notify-panel" role="group" aria-label="Notificações">
<div class="ds-notify">
<div class="ds-notify__header"><h3 class="ds-notify__title">Notificações</h3></div>
<div class="ds-notify__empty"><ds-icon name="bell"></ds-icon><span>Nenhuma notificação por enquanto.</span></div>
</div>
</div>

<div class="ds-popover ds-notify-panel" role="group" aria-label="Notificações">
<div class="ds-notify">
<div class="ds-notify__header"><h3 class="ds-notify__title">Notificações</h3><span class="ds-inline-action">Marcar todas como lidas</span></div>
<ul class="ds-notify__list" role="list"><li class="ds-notify__item" data-unread="">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.35</span><span class="ds-notify__text">Banner de anúncio e central de notificações.</span><time class="ds-notify__time">há 4 minutos</time></span>
<span class="ds-dot ds-notify__dot"></span>
</a>
</li><li class="ds-notify__item" data-unread="">
<a class="ds-notify__link" href="#">
<span class="ds-notify__body"><span class="ds-notify__item-title">Storybook atualizado</span><span class="ds-notify__text">As histórias dos componentes novos já estão lá.</span><time class="ds-notify__time">há 2 horas</time></span>
<span class="ds-dot ds-notify__dot"></span>
</a>
</li></ul>
</div>
</div>
```

## Estados

O número no sino segue a cor do indicador; acima de 99, vira “99+”.

Marcação dos exemplos desta seção:

```html
<span class="ds-icon-btn ds-notify-trigger"><ds-icon name="bell"></ds-icon></span>

<span class="ds-icon-btn ds-notify-trigger"><ds-icon name="bell"></ds-icon><span class="ds-notify-trigger__count">2</span></span>

<span class="ds-icon-btn ds-notify-trigger"><ds-icon name="bell"></ds-icon><span class="ds-notify-trigger__count">99+</span></span>

<ul class="ds-notify__list" role="list"><li class="ds-notify__item" data-unread="">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__icon ds-notify__icon--brand"><ds-icon name="megaphone"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.35</span><span class="ds-notify__text">Banner de anúncio e central de notificações.</span><time class="ds-notify__time">há 4 minutos</time></span>
<span class="ds-dot ds-notify__dot"></span>
</a>
</li></ul>

<ul class="ds-notify__list" role="list"><li class="ds-notify__item">
<a class="ds-notify__link" href="#/novidades">
<span class="ds-notify__icon ds-notify__icon--brand"><ds-icon name="megaphone"></ds-icon></span>
<span class="ds-notify__body"><span class="ds-notify__item-title">Lume 0.35</span><span class="ds-notify__text">Banner de anúncio e central de notificações.</span><time class="ds-notify__time">há 4 minutos</time></span>
</a>
</li></ul>
```

## Código

Você dá o sino e a lista; o JavaScript desenha o painel, o número e cuida do lido.

```html
<button type="button" class="ds-icon-btn"><ds-icon name="bell"></ds-icon></button>

<script type="module">
  import { createNotificationCenter } from 'https://lumeui.dev/v/1.1/lume.js';

  const center = createNotificationCenter(document.querySelector('.ds-icon-btn'), {
    items: [
      { id: 'v035', title: 'Lume 0.35', text: 'Banner de anúncio e central de notificações.', time: new Date(),
        icon: 'megaphone', tone: 'brand', href: '/novidades' },
    ],
    onChange: (items, unread) => salvar(items),
  });

  // chegou uma nova (por WebSocket, por exemplo)
  center.add({ id: 'v036', title: 'Lume 0.36', time: new Date() });
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Um popover com uma lista de links: nada de novo para aprender.

- Sino com o número — O nome do sino traz quantas faltam ler: “Notificações, 2 não lidas”. O número visível é aria-hidden.
- Painel — Tab Enter Esc — role="dialog" não modal, com nome. Abrir leva o foco para dentro; Esc fecha e devolve o foco ao sino.
- Não lida — O ponto é visual; cada item não lido diz “Não lida” ao leitor de tela.
- O que chega — add() anuncia “Nova notificação: …” numa região de status, sem roubar o foco.

## Tokens usados

Tudo o que a central consome, além do Popover.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.brand.indicator (`--ds-color-brand-indicator`) | Número e ponto de não lida | #C97B63 | #DE9680 |
| color.bg.hover (`--ds-color-bg-hover`) | Item com o mouse | #3E51660D | #FFFFFF0D |
| color.bg.muted (`--ds-color-bg-muted`) | Fundo do ícone neutro | #DAE0E8 | #3D3B38 |
| color.fg.muted (`--ds-color-fg-muted`) | Texto e título lido | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Tempo | #5C6C7F | #9C9792 |
| color.border.subtle (`--ds-color-border-subtle`) | Linha do cabeçalho | #3E516624 | #FFFFFF0F |
| radius.md (`--ds-radius-md`) | Cantos do item | 12 px | 12 px |

## Uso

Notificação, toast ou banner?

- **Faça:** o que a pessoa vai querer rever. Uma versão nova, algo que mudou no que é dela. A notificação fica guardada; o toast some.
- **Evite:** notificar o que a pessoa acabou de fazer. “Salvo” é um toast. Na central, só o que aconteceu enquanto ela fazia outra coisa.
- **Dica:** Título que se basta. Quem lê só o título tem que entender o que houve. O texto completa.
