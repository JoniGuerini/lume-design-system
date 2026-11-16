# Ícones

Seção do Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/icones

Uma biblioteca própria, desenhada no mesmo grid e com o mesmo traço. Contorno fino, pontas redondas e cor herdada do texto.

Em números: ícones: 154 · categorias: 8 · grid: 24 px · traço: 1,5.

## Biblioteca

Busque pelo nome ou por palavras em português, inglês ou espanhol. Clique num ícone para copiar o código.

- home
- menu
- panel-left
- panel-top
- chevron-down
- chevron-up
- chevron-left
- chevron-right
- chevrons-up-down
- arrow-right
- arrow-left
- arrow-up
- arrow-up-right
- arrow-down
- external-link
- corner-down-left
- log-out
- compass
- zoom-in
- zoom-out
- maximize
- search
- search-x
- send
- paperclip
- stop-circle
- thumbs-up
- thumbs-down
- at-sign
- plus
- minus
- x
- check
- pencil
- copy
- trash
- download
- upload
- link
- filter
- refresh
- more-horizontal
- more-vertical
- grip-vertical
- zap
- play
- pause
- megaphone
- slash
- mic
- video
- info
- alert-circle
- alert-triangle
- check-circle
- x-circle
- help-circle
- bell
- loader
- clock
- history
- shield
- lock
- wifi-off
- star
- heart
- flag
- settings
- sliders
- sun
- moon
- cabin
- mountain
- monitor
- scrollbar
- eye
- eye-off
- keyboard
- command
- app-shell
- layout
- button
- input
- check-square
- radio
- toggle
- tag
- card
- dialog
- tabs
- carousel
- resizable
- kanban
- tooltip
- table
- list
- bold
- italic
- underline
- strikethrough
- align-left
- align-center
- align-right
- list-ordered
- heading
- quote
- undo
- redo
- divider
- progress-ring
- banner
- toolbar
- message-square
- stack
- calendar
- file-text
- folder
- inbox
- image
- package
- book-open
- code
- terminal
- git-branch
- git-pull-request
- mail
- globe
- target
- hash
- dashboard
- bar-chart
- line-chart
- area-chart
- donut
- heatmap
- scatter
- gauge
- trending-up
- trending-down
- palette
- droplet
- type
- shapes
- grid
- layers
- component
- spacing
- radius
- elevation
- motion
- accessibility
- user
- user-circle
- users

Marcação dos exemplos desta seção:

```html
<label class="ds-field">
<ds-icon name="search"></ds-icon>
<span class="ds-visually-hidden">Buscar ícones</span>
<input class="ds-field__input" type="search" placeholder="Buscar: casa, seta, calendário…" autocomplete="off" spellcheck="false" data-search="">
</label>

<button type="button" class="ds-chip" data-menu="size" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-10"><span class="ds-chip__icon"><ds-icon name="spacing"></ds-icon></span><span data-label="">24 px</span><span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="all" aria-pressed="true">Todos<span>154</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="navegacao" aria-pressed="false">Navegação<span>18</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="acoes" aria-pressed="false">Ações<span>35</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="status" aria-pressed="false">Status e feedback<span>17</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="interface" aria-pressed="false">Interface<span>44</span></button>

<button type="button" class="ds-chip ds-chip--sm" data-category="objetos" aria-pressed="false">Objetos<span>15</span></button>
```

## Anatomia

As mesmas regras para todos os ícones. É isso que faz a biblioteca parecer uma família.

- 01 — Grid de 24 × 24 — Todo ícone é desenhado na mesma prancheta, para alinhar em qualquer tamanho.
- 02 — Respiro de 2 px — A área útil é 20 × 20. A borda livre dá equilíbrio óptico entre formas diferentes.
- 03 — Keylines — Círculo, quadrado e retângulos guiam o peso visual: um círculo e um quadrado parecem do mesmo tamanho.
- 04 — Traço 1,5 — Contorno de 1,5 px; em 16 px ou menos sobe para 1,75 para não sumir.
- 05 — Pontas redondas — Pontas e junções arredondadas, coerentes com os raios generosos do sistema.
- 06 — currentColor — O ícone herda a cor do texto ao redor — muda junto com o tema e o estado.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="home" aria-pressed="true" aria-label="Ver home" data-ds-tooltip="home" data-ds-tooltip-placement="bottom"><ds-icon name="home"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="settings" aria-pressed="false" aria-label="Ver settings" data-ds-tooltip="settings" data-ds-tooltip-placement="bottom"><ds-icon name="settings"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="palette" aria-pressed="false" aria-label="Ver palette" data-ds-tooltip="palette" data-ds-tooltip-placement="bottom"><ds-icon name="palette"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="bell" aria-pressed="false" aria-label="Ver bell" data-ds-tooltip="bell" data-ds-tooltip-placement="bottom"><ds-icon name="bell"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="calendar" aria-pressed="false" aria-label="Ver calendar" data-ds-tooltip="calendar" data-ds-tooltip-placement="bottom"><ds-icon name="calendar"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-anatomy-icon="user" aria-pressed="false" aria-label="Ver user" data-ds-tooltip="user" data-ds-tooltip-placement="bottom"><ds-icon name="user"></ds-icon></button>
```

## Tamanhos

Cinco tamanhos, todos em tokens. Abaixo de 16 px o traço engrossa sozinho para manter a leitura.

O ícone acompanha o tamanho do componente: 14 no badge, 16 no chip, 20 no botão padrão, 24 no botão grande.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<svg class="ds-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<svg class="ds-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<span class="ds-badge ds-badge--success"><ds-icon name="check"></ds-icon>Publicado</span>

<span class="ds-chip ds-chip--sm"><span class="ds-chip__icon"><ds-icon name="pencil"></ds-icon></span>Tom direto</span>

<span class="ds-btn ds-btn--secondary"><ds-icon name="download"></ds-icon>Exportar</span>
```

## Em código

Dois jeitos de usar: a função `icon()` em JavaScript ou o elemento `<ds-icon>` direto no HTML.

JavaScript

```html
import { icon } from 'https://lumeui.dev/v/1.9/lume.js';

button.innerHTML = icon('home', { size: 20 });
// com rótulo para leitores de tela
icon('bell', { size: 20, label: 'Notificações' });
```

HTML

```html
<ds-icon name="home"></ds-icon>
<ds-icon name="home" size="16"></ds-icon>
<!-- ícone sozinho, com significado -->
<ds-icon name="home" size="20" label="Início"></ds-icon>
```

Decorativo, ao lado de texto

Sem `label`: o SVG sai com `aria-hidden="true"` e o leitor de tela lê só o texto.

Sozinho, com significado

Com `label`: vira `role="img"` com nome acessível. Em botões só de ícone, prefira o `aria-label` no botão.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="4.5" r="1.5"></circle><path d="M5 8.5l7 1.5 7-1.5M12 10v4.5M9.5 20.5l2.5-6 2.5 6"></path></svg>
```

## Uso

Ícone ajuda a reconhecer, não substitui a palavra.

- **Faça:** ícone com texto. Na navegação e em botões, o rótulo diz o que acontece; o ícone ajuda a achar mais rápido.
- **Evite:** misturar estilos. Ícones preenchidos, de outra biblioteca ou com outro traço quebram a família. Se faltar um, desenhe no grid.
- **Dica:** Ícone sozinho? Nome e dica. Botões só de ícone precisam de aria-label e de um tooltip com o mesmo texto.
