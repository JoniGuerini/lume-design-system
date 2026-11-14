# Layout

Seção do Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/layout

Onde as coisas ficam e como se reorganizam. Cinco breakpoints, um shell com medidas fixas e larguras máximas que protegem a leitura.

Em números: breakpoints: 5 · sidebar (px): 288/76 · topbar (px): 64 · conteúdo máx. (px): 1160.

## Breakpoints

Mobile primeiro: o layout base vale para telas pequenas e cada breakpoint acrescenta regras a partir da sua largura. Redimensione a janela para ver o marcador andar.

| Nome | A partir de | Media query | O que muda no app |
| --- | --- | --- | --- |
| sm | 640 px | @media (min-width: 640px) | Ainda sem regra no app — disponível para componentes. |
| md | 768 px | @media (min-width: 768px) | Abaixo dele, margens e painéis compactam, a trilha da topbar mostra só a página atual e as tabelas viram cartões. |
| lg | 1024 px | @media (min-width: 1024px) | Abaixo dele, a sidebar vira gaveta com fundo escurecido e o menu aparece na topbar. A partir dele, a sidebar fica fixa e recolhível (⌘B). |
| xl | 1280 px | @media (min-width: 1280px) | Abaixo dele, o hero do Início empilha e as grades de 4 colunas passam para 2. |
| 2xl | 1536 px | @media (min-width: 1536px) | Ainda sem regra no app — telas largas mantêm a largura máxima de conteúdo. |

## App shell

Dois painéis sobre o fundo do app: sidebar e conteúdo, com a topbar dentro do conteúdo. O diagrama está em escala de uma janela de 1440 × 900.

|   |   |   |   |
| --- | --- | --- | --- |
| layout.sidebar — --ds-layout-sidebar | 288 px | Sidebar expandida. |  |
| layout.sidebar-collapsed — --ds-layout-sidebar-collapsed | 76 px | Sidebar recolhida — só os ícones, todos centrados no mesmo eixo. |  |
| layout.topbar — --ds-layout-topbar | 64 px | Altura da topbar e do cabeçalho da sidebar. |  |
| layout.frame-gap — --ds-layout-frame-gap | 10 px | Respiro entre a borda da janela e os dois painéis. |  |
| radius.2xl — --ds-radius-2xl | 28 px | Raio dos painéis do shell. |  |

## Larguras

Telas largas não devem esticar o conteúdo até a borda. As páginas param em 1160 px e o texto corrido em 720 px.

content-max — Largura máxima do conteúdo das páginas.

prose-max — Medida confortável para texto corrido.

gutter — Margem lateral do conteúdo no desktop.

prose-max na prática — 720 px · ≈ 100 caracteres por linha — Uma boa linha de leitura tem entre 60 e 80 caracteres. Mais curta, o olho pula de linha o tempo todo; mais longa, ele se perde no caminho de volta. Por isso o texto corrido tem largura máxima própria, menor que a do conteúdo, e os títulos podem ocupar a largura inteira sem prejudicar a leitura.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-copy="var(--ds-layout-content-max)" aria-label="Copiar variável: var(--ds-layout-content-max)" data-ds-tooltip="Copiar variável"><ds-icon name="copy"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-copy="var(--ds-layout-prose-max)" aria-label="Copiar variável: var(--ds-layout-prose-max)" data-ds-tooltip="Copiar variável"><ds-icon name="copy"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-copy="var(--ds-layout-gutter)" aria-label="Copiar variável: var(--ds-layout-gutter)" data-ds-tooltip="Copiar variável"><ds-icon name="copy"></ds-icon></button>
```

## Grade

Dois padrões de grade cobrem o site. Arraste para mudar a largura do contêiner e veja como cada um se reorganiza. O espaço entre itens é sempre space.150 (12 px).

Largura do contêiner — 1040 px

Colunas fixas que colapsam — 4 colunas — auto-fill com mínimo — 4 colunas

```html
/* colunas fixas: cartões de mesma importância */
grid-template-columns: repeat(4, minmax(0, 1fr));
/* e menos colunas em cada breakpoint */
```

```html
/* auto-fill: as colunas aparecem sozinhas */
grid-template-columns:
  repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
```

## Camadas

A ordem de empilhamento é uma escala fixa: nada de z-index 9999. Quanto mais alto na lista, mais na frente.

|   |   |   |   |   |
| --- | --- | --- | --- | --- |
|  | tooltip — --ds-z-tooltip | 1600 | Tooltips e o link “Pular para o conteúdo”. |  |
|  | toast — --ds-z-toast | 1500 | Avisos de confirmação. |  |
|  | popover — --ds-z-popover | 1400 | Menus que os chips abrem. |  |
|  | modal — --ds-z-modal | 1300 | Reservado. A busca ⌘K usa <dialog>, que já vai para a camada superior do navegador. |  |
|  | overlay — --ds-z-overlay | 1200 | Fundo escurecido da gaveta — a gaveta fica um nível acima. |  |
|  | sticky — --ds-z-sticky | 1100 | Topbar fixa e a navegação desta página. |  |
|  | dropdown — --ds-z-dropdown | 1000 | Reservado para listas suspensas. |  |
|  | raised — --ds-z-raised | 1 | Reservado para algo que precise ficar acima dos vizinhos. |  |
|  | base — --ds-z-base | 0 | Conteúdo no fluxo normal. |  |

## Uso

Regras para o layout continuar previsível em qualquer tela.

- **Faça:** limite a largura com tokens. Conteúdo até content-max, texto corrido até prose-max. Em telas pequenas, a largura vem do contêiner.
- **Evite:** medidas mágicas. Breakpoints e larguras inventados na hora criam saltos que ninguém consegue prever.
- **Dica:** @media não lê variáveis. Custom properties não funcionam dentro de media queries. Use o valor em px do token e, para “abaixo de”, subtraia uma fração.
