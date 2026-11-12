# Raios

Seção do Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/raios

Cantos generosos dão o tom calmo do Lume. Uma escala curta — do detalhe à pílula — e uma regra simples para cantos dentro de cantos.

Em números: tokens de raio: 9 · px, do xs ao 3xl: 6–36 · px no botão: 12 · para pílulas: full.

## Escala

Nove passos. Quanto maior a superfície, maior o raio. Clique num raio para copiar a variável.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="8.5" y="8.5" width="12" height="12" rx="2"></rect><path d="M15.5 8.5v-3a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"></path></svg>
```

## Raios aninhados

Quando uma superfície arredondada fica dentro de outra, o raio de dentro é o de fora menos o espaçamento. Assim as curvas ficam paralelas.

20 — − — 8 — = — 12 px — `radius.md`

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-chip ds-chip--sm" data-outer="lg" aria-pressed="false">lg · 16</button>

<button type="button" class="ds-chip ds-chip--sm" data-outer="xl" aria-pressed="true">xl · 20</button>

<button type="button" class="ds-chip ds-chip--sm" data-outer="2xl" aria-pressed="false">2xl · 28</button>

<button type="button" class="ds-chip ds-chip--sm" data-outer="3xl" aria-pressed="false">3xl · 36</button>

<button type="button" class="ds-chip ds-chip--sm" data-pad="050" aria-pressed="false">4 px</button>

<button type="button" class="ds-chip ds-chip--sm" data-pad="100" aria-pressed="true">8 px</button>

<button type="button" class="ds-chip ds-chip--sm" data-pad="150" aria-pressed="false">12 px</button>

<button type="button" class="ds-chip ds-chip--sm" data-pad="200" aria-pressed="false">16 px</button>
```

## Onde usar

Cada componente já vem com o raio certo. Os exemplos abaixo são os componentes reais.

| Raio | Componentes | Exemplo |
| --- | --- | --- |
| full — pílula | Chip, badge, controle segmentado, avatar. |  |
| xs — 6 px | Kbd, código inline, foco da ação inline. |  |
| sm — 8 px | Botão pequeno, botão de ícone. |  |
| md — 12 px | Botão, campo, toast, item do ⌘K. |  |
| lg — 16 px | Menu, bloco de código, cartão da conta. |  |
| xl — 20 px | Card; painel no celular. |  |
| 2xl — 28 px | Painel, ⌘K, sidebar e área principal. |  |

## Uso

O raio também é hierarquia: cantos menores para o que é pequeno, maiores para o que contém.

- **Faça:** use a escala. Raio por token mantém tudo coerente — e muda junto se a escala mudar.
- **Evite:** raio solto ou repetido. Valor fixo foge da escala; o mesmo raio dentro e fora deixa a curva interna “gorda”.
- **Dica:** Pílula só no que é compacto. Chips, badges, avatares e o seletor de tema. Botões e campos ficam com md.
