# Elevação

Seção do Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/elevacao

No Lume, profundidade vem primeiro da cor da superfície e só depois da sombra. Camadas claras, sombras macias e uma ordem de empilhamento sem surpresas.

Em números: camadas de superfície: 5 · sombras: 6 · níveis de z-index: 9.

## Camadas de superfície

Cada degrau é uma superfície um pouco mais alta. Nos temas escuros, subir é clarear; nos claros, a camada mais alta é o branco.

app — #DAE0E8 — sunken — #E8EDF3 — canvas — #EEF2F6 — surface — #FFFFFF — raised — #FFFFFF

app — #0F0E0C — sunken — #151412 — canvas — #1D1B18 — surface — #24221F — raised — #2C2A27

- 01 — bg.app — Atrás dos painéis do app shell.
- 02 — bg.sunken — Campos e áreas rebaixadas.
- 03 — bg.canvas — Fundo do painel de conteúdo.
- 04 — bg.surface — Cards e blocos. A sidebar usa a mesma cor.
- 05 — bg.raised — Painéis, menus e modais.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
```

## Sombras

Seis sombras em duas camadas — uma curta e definida, outra longa e difusa. No escuro são pretas e densas; no Lume claro, uma ardósia bem suave. Clique numa sombra para copiar.

xs — Detalhes mínimos. — sm — Controles levemente destacados. — md — Cards em destaque. — lg — Painéis, sidebar, tooltip e toast. — xl — Menus e popovers. — 2xl — ⌘K e gaveta do celular.

xs — Detalhes mínimos. — sm — Controles levemente destacados. — md — Cards em destaque. — lg — Painéis, sidebar, tooltip e toast. — xl — Menus e popovers. — 2xl — ⌘K e gaveta do celular.

### Valores mesmo token, valor diferente em cada tema

| Token | Lume claro | Lume escuro |  |
| --- | --- | --- | --- |
| shadow.xs — --ds-shadow-xs |  `0 1px 2px 0 rgb(45 58 74 / 0.06)`  |  `0 1px 2px 0 rgb(0 0 0 / 0.32)`  |  |
| shadow.sm — --ds-shadow-sm |  `0 1px 2px 0 rgb(45 58 74 / 0.06), 0 2px 6px -1px rgb(45 58 74 / 0.06)`  |  `0 1px 2px 0 rgb(0 0 0 / 0.3), 0 2px 6px -1px rgb(0 0 0 / 0.24)`  |  |
| shadow.md — --ds-shadow-md |  `0 2px 4px -1px rgb(45 58 74 / 0.06), 0 8px 20px -4px rgb(45 58 74 / 0.1)`  |  `0 2px 4px -1px rgb(0 0 0 / 0.28), 0 8px 20px -4px rgb(0 0 0 / 0.36)`  |  |
| shadow.lg — --ds-shadow-lg |  `0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14)`  |  `0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5)`  |  |
| shadow.xl — --ds-shadow-xl |  `0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18)`  |  `0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6)`  |  |
| shadow.2xl — --ds-shadow-2xl |  `0 12px 24px -6px rgb(45 58 74 / 0.1), 0 48px 96px -24px rgb(45 58 74 / 0.24)`  |  `0 12px 24px -6px rgb(0 0 0 / 0.36), 0 48px 96px -24px rgb(0 0 0 / 0.72)`  |  |

## Quando elevar

O que fica no fluxo usa só cor de superfície. Sombra é para o que se separa da página; sombra forte, só para o que flutua por cima de tudo.

| Componente | Superfície | Sombra | Camada |
| --- | --- | --- | --- |
| Card — Bloco de conteúdo sobre o canvas. | bg.surface | — | — |
| Painel — Superfície principal, como o “Roteiro”. | bg.raised | shadow.lg | — |
| Sidebar e área principal — Os dois painéis do app shell. | bg.surface | shadow.lg | — |
| Topbar — Fica presa no topo ao rolar. | bg.canvas | — | z.sticky |
| Menu — Abre a partir de um chip ou botão. | bg.raised | shadow.xl | z.popover |
| Tooltip — Dica sobre qualquer elemento. | bg.raised | shadow.lg | z.tooltip |
| Toast — Aviso curto e passageiro. | bg.inverse | shadow.lg | z.toast |
| Paleta ⌘K — Diálogo modal sobre o fundo escurecido. | bg.raised | shadow.2xl | z.modal |
| Gaveta do celular — A sidebar em telas pequenas. | bg.surface | shadow.2xl | z.overlay |

## Empilhamento

A ordem de quem fica por cima. Use sempre o token: os intervalos de 100 deixam espaço para casos especiais sem briga de números.

- 1600 — tooltip — Tooltip — sempre por cima de tudo.
- 1500 — toast — Toast.
- 1400 — popover — Menus e popovers.
- 1300 — modal — Modais (o ⌘K usa a camada nativa do <dialog>).
- 1200 — overlay — Fundo escurecido e gaveta do celular.
- 1100 — sticky — Topbar.
- 1000 — dropdown — Listas suspensas no fluxo.
- 1 — raised — Algo que precisa passar à frente dos vizinhos.
- 0 — base — Fluxo normal da página.

## Uso

Menos sombra, mais intenção.

- **Faça:** camada de cor primeiro. Um card sobre o canvas só precisa da superfície e de uma borda sutil.
- **Evite:** sombra forte no fluxo. Sombra grande em algo que não flutua cria ruído e rouba a hierarquia dos menus e modais.
- **Dica:** z-index só por token. Números soltos viram uma corrida (999, 9999…). Os tokens já dizem quem fica por cima.
