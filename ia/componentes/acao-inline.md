# Ação inline

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/acao-inline

A ação mais discreta do sistema. Vive dentro do conteúdo — “Na cena +”, “Ver histórico →” — e só se destaca quando o ponteiro chega.

Em números: formas: 5 · altura mínima: 28 px · texto: 13 px · elementos: a · button.

## Exemplo

```html
<button type="button" class="ds-inline-action">
  <ds-icon name="video" size="16"></ds-icon>
  Na cena
  <ds-icon name="plus" size="14" class="ds-inline-action__plus"></ds-icon>
</button>
```

## Formas

O sinal no fim conta o que acontece: + adiciona ou abre algo aqui; → leva para outro lugar.

Ação no lugar `<button>` — Faz algo sem sair do contexto: adicionar, anexar, gerar.

Navegação `<a>` — Leva a outra tela. A seta diz “ir para”.

Com ícone `<button>` — O ícone antecipa o tipo de conteúdo.

Forte `<a>` — Um pouco mais de presença, para o próximo passo de um texto.

Desativada `<button>` — Ainda não disponível. Diga por quê por perto.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-inline-action"><ds-icon name="file-text"></ds-icon>Adicionar nota<ds-icon name="plus"></ds-icon></button>

<a class="ds-inline-action" href="#/componentes/acao-inline">Ver histórico<ds-icon name="arrow-right"></ds-icon></a>

<button type="button" class="ds-inline-action"><ds-icon name="video"></ds-icon>Na cena<ds-icon name="plus"></ds-icon></button>

<a class="ds-inline-action ds-inline-action--strong" href="#/componentes/acao-inline">Ver o que mudou<ds-icon name="arrow-right"></ds-icon></a>

<button type="button" class="ds-inline-action" disabled=""><ds-icon name="clock"></ds-icon>Em breve</button>
```

## Mostrar e esconder

Com `<details>`, a ação inline abre conteúdo extra no lugar. O + gira e vira × quando está aberto. Experimente:

24s — Convide para conhecer

Quer ver como ficaria a sua rotina? Conheça pelo link do perfil.

```html
<details class="ds-disclosure">
  <summary class="ds-inline-action">
    <ds-icon name="file-text" size="16"></ds-icon>
    Mais detalhes
    <ds-icon name="plus" size="14" class="ds-inline-action__plus"></ds-icon>
  </summary>
  <div class="ds-disclosure__content">…</div>
</details>
```

Marcação dos exemplos desta seção:

```html
<details class="ds-disclosure">
<summary class="ds-inline-action"><ds-icon name="file-text"></ds-icon>Mais detalhes<ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content">
<p><span>Formato</span>Vídeo vertical, 9:16</p>
<p><span>Público</span>Pequenos negócios</p>
<p><span>Chamada</span>Link no perfil</p>
</div>
</details>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Inline ou ghost?

Os dois são discretos. A diferença é onde estão.

### Ação inline

- Dentro do conteúdo, logo depois do que ela afeta.
- Sem área visível: só texto, ícone e sinal.
- Várias por tela, uma por bloco.

### Botão ghost

- Em barras, cabeçalhos e listas — fora do texto.
- Área de clique aparece no hover.
- Para ações que valem para a tela inteira.

Marcação dos exemplos desta seção:

```html
<span class="ds-inline-action"><ds-icon name="video"></ds-icon>Na cena<ds-icon name="plus"></ds-icon></span>

<span class="ds-inline-action">Ver exemplo<ds-icon name="arrow-right"></ds-icon></span>

<span class="ds-btn ds-btn--ghost ds-btn--sm"><ds-icon name="star"></ds-icon>Exemplos</span>

<span class="ds-btn ds-btn--ghost ds-btn--sm"><ds-icon name="download"></ds-icon>Exportar</span>
```

## Acessibilidade

Discreta para os olhos, clara para quem usa teclado e leitor de tela.

- Elemento certo — Navega? `<a href>`. Faz algo aqui? `<button>`. Abre e fecha? `<details><summary>`.
- Teclado — Tab Enter Espaço — Tab foca; Enter aciona links e botões; Espaço também aciona botões e o summary.
- Área de toque — Altura mínima de 28 px, acima dos 24 px do WCAG 2.2 (tamanho do alvo).
- Ícones e sinais são decorativos — O texto diz a ação. O + e a → saem com aria-hidden.
- Estado do disclosure — O summary nativo anuncia expandido e recolhido — não precisa de aria-expanded.
- Desativada com motivo — Prefira explicar ao lado (“Em breve”). Links desativados levam aria-disabled e saem do Tab.

## Tokens usados

Poucos e todos de texto: é isso que a mantém leve.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| text.label-sm (`--ds-text-label-sm`) | Rótulo | 13/18 · medium | 13/18 · medium |
| color.fg.subtle (`--ds-color-fg-subtle`) | Cor em repouso | #53657A | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Cor no hover e da forma forte | #2B3847 | #F3EDE5 |
| color.fg.brand (`--ds-color-fg-brand`) | Hover da forma forte | #3E5166 | #DAE0E8 |
| space.100 (`--ds-space-100`) | Espaço entre ícone, rótulo e sinal | 8 px | 8 px |
| radius.xs (`--ds-radius-xs`) | Raio do anel de foco | 6 px | 6 px |
| duration.fast (`--ds-duration-fast`) | Transição de cor | 120ms | 120ms |
| duration.base (`--ds-duration-base`) | Giro do + e passo da seta | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Curva do giro e da seta | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| opacity.muted (`--ds-opacity-muted`) | Desativada | 0.64 | 0.64 |

## Uso

Três regras para ela continuar discreta.

- **Faça:** perto do que ela afeta. Logo abaixo do bloco, alinhada ao texto.
- **Evite:** a ação principal. O que fecha a tarefa é um botão primário. Inline é para o caminho secundário.
- **Dica:** Um sinal por ação. + adiciona ou abre aqui; → vai para outro lugar. Nunca os dois juntos.
