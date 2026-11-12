# Movimento

Seção do Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/movimento

Movimento explica o que mudou e de onde veio. Poucas durações, poucas curvas e sempre o mesmo par para o mesmo tipo de mudança.

Em números: durações: 5 · curvas: 5 · receitas: 4 · movimento reduzido: .

## Durações

Quanto maior a superfície e a distância percorrida, maior a duração. Toque uma por vez ou todas juntas para comparar — todas com a curva standard.

| Token | Valor | Demonstração |  |
| --- | --- | --- | --- |
| instant — --ds-duration-instant — Mudança sem transição — troca imediata de estado. | 0 ms |  |  |
| fast — --ds-duration-fast — Hover, foco e cor. A maior parte das interações. | 120 ms |  |  |
| base — --ds-duration-base — Menus, tooltips, chevrons e popovers. | 200 ms |  |  |
| slow — --ds-duration-slow — Sidebar, gaveta, grupos do menu e entrada de página. | 320 ms |  |  |
| slower — --ds-duration-slower — Reservada para transições grandes e raras. | 480 ms |  |  |

## Curvas

A curva define o ritmo. Os gráficos usam os quatro números reais de cada token; as demonstrações rodam em 480 ms (duration.slower) para dar tempo de perceber a diferença.

Padrão para quase tudo: sai rápido e assenta suave.

Superfícies que se deslocam: menus, sidebar, gaveta.

Entradas: o elemento chega e desacelera.

Saídas: o elemento ganha velocidade ao sair.

Progresso e loops contínuos, sem aceleração.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-play-row="" aria-label="Tocar standard"><ds-icon name="play"></ds-icon></button>

<button type="button" class="ds-inline-action" data-copy="cubic-bezier(0.2, 0, 0, 1)"><ds-icon name="code"></ds-icon>cubic-bezier(0.2, 0, 0, 1)</button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-play-row="" aria-label="Tocar emphasized"><ds-icon name="play"></ds-icon></button>

<button type="button" class="ds-inline-action" data-copy="cubic-bezier(0.32, 0.72, 0, 1)"><ds-icon name="code"></ds-icon>cubic-bezier(0.32, 0.72, 0, 1)</button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-play-row="" aria-label="Tocar decelerate"><ds-icon name="play"></ds-icon></button>

<button type="button" class="ds-inline-action" data-copy="cubic-bezier(0, 0, 0, 1)"><ds-icon name="code"></ds-icon>cubic-bezier(0, 0, 0, 1)</button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-play-row="" aria-label="Tocar accelerate"><ds-icon name="play"></ds-icon></button>

<button type="button" class="ds-inline-action" data-copy="cubic-bezier(0.3, 0, 1, 1)"><ds-icon name="code"></ds-icon>cubic-bezier(0.3, 0, 1, 1)</button>
```

## Receitas

As combinações que os componentes usam de verdade. Cada demonstração abaixo roda com o mesmo CSS dos componentes.

Botões, chips, itens de navegação, campos e ações inline.

```html
transition: background-color var(--ds-duration-fast) var(--ds-easing-standard);
```

Menu dos chips, chevron que gira e a busca ⌘K. A opacidade usa fast + standard.

```html
transition:
  opacity var(--ds-duration-fast) var(--ds-easing-standard),
  transform var(--ds-duration-base) var(--ds-easing-emphasized);
```

Recolher a sidebar (⌘B), a gaveta no celular e abrir os grupos do menu.

```html
transition: width var(--ds-duration-slow) var(--ds-easing-emphasized);
```

Movimento

Toda troca de página do site: o conteúdo sobe 6 px e aparece.

```html
animation: page-enter var(--ds-duration-slow) var(--ds-easing-decelerate) both;
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-btn ds-btn--secondary">Botão</button>

<button type="button" class="ds-chip">Chip<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<a class="ds-inline-action" href="#/fundamentos/movimento" data-noop=""><ds-icon name="file-text"></ds-icon>Ação inline</a>

<button type="button" class="ds-inline-action" data-copy="transition: background-color var(--ds-duration-fast) var(--ds-easing-standard);"><ds-icon name="copy"></ds-icon>Copiar transição</button>

<button type="button" class="ds-chip" data-toggle-pop="" aria-expanded="false">Tema<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10.5 3.5a7.5 7.5 0 0 0 10 10A8.5 8.5 0 1 1 10.5 3.5z"></path></svg>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"></path></svg>
```

## Movimento reduzido

Quem pede menos movimento no sistema operacional recebe a mesma interface, com as mudanças de estado instantâneas. Nada depende de animação para funcionar.

Com a simulação ligada, todas as demonstrações desta página passam a trocar de estado sem animar. Também em movimento reduzido: o tema troca sem transição e a navegação da página rola sem suavização.

```html
/* ds/base.css */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Marcação dos exemplos desta seção:

```html
<span class="ds-badge" data-system-pref="">Sem restrição</span>

<button type="button" class="ds-chip ds-chip--sm" data-simulate="" aria-pressed="false"><ds-icon name="motion"></ds-icon><span data-simulate-label="">Desligado</span></button>
```

## Uso

Movimento bom passa despercebido. Três regras para manter assim.

- **Faça:** use os pares de tokens. Duração e curva sempre dos tokens, no par da receita certa. Prefira animar opacity e transform.
- **Evite:** valores soltos. Números e curvas inventados na hora deixam cada componente com um ritmo diferente.
- **Dica:** Interação frequente, movimento curto. O que acontece toda hora (hover, foco) fica em fast. Durações longas só para mudanças grandes e raras.
