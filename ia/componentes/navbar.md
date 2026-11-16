# Navbar

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/navbar

A mesma navegação da sidebar, deitada no topo: links diretos, um menu por grupo e a busca. Quando falta espaço, a busca encolhe e os últimos itens vão para o Mais.

Em números: altura: 64 px · a partir de: 1024 px · menu: colunas · sem espaço: Mais.

## Ao vivo

A navbar deste site, com as páginas de verdade. Diminua a janela e veja a busca encolher e os itens irem para o Mais. Os menus abrem, e escolher uma página só marca o grupo dela.

Tudo cabe

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<div class="ds-slider__head">
<label class="ds-form-field__label" for="sh-navbar-width">Largura da janela</label>
<output class="ds-slider__value" for="sh-navbar-width">1440 px</output>
</div>
<div class="ds-slider"><input class="ds-slider__input" id="sh-navbar-width" type="range" min="560" max="1600" step="10" value="1440" aria-valuetext="1440 px"></div>
</div>
```

## Anatomia

Numa largura em que já falta espaço, para o Mais aparecer. Passe o mouse ou foque uma parte da lista para destacá-la.

- 1 — Painel — O mesmo painel da sidebar, deitado no topo: 64 px de altura, raio xl e contorno fino.
- 2 — Marca — A chama e o nome, como na sidebar. Leva ao início.
- 3 — Links principais — Os itens do grupo sem título viram links diretos. O início fica na marca.
- 4 — Botão de grupo — Cada grupo vira um botão com seta. Ele abre um menu com as páginas, em colunas.
- 5 — Grupo atual — O grupo da página aberta fica selecionado, como o item atual da sidebar.
- 6 — Mais — Só aparece quando falta espaço: guarda os últimos itens, separados pelo nome do grupo.
- 7 — Busca — Abre a paleta de comandos. Com espaço, tem 240 px e o atalho; sem espaço, só a lupa.

## Quando falta espaço

A navbar nunca quebra em duas linhas nem corta um item no meio. Ela abre mão das coisas nesta ordem.

1 — Tudo cabe

Links, grupos e a busca inteira, com o atalho.

2 — A busca encolhe

Primeiro sai o texto da busca: fica só a lupa, do tamanho de um botão. O nome continua lá para o leitor de tela.

3 — Os últimos vão para o Mais

Se ainda faltar, os itens saem do fim para o começo e entram no botão Mais, um por vez, até caber. Nada fica cortado nem por cima da busca.

A conta é feita com `ResizeObserver` na própria barra, não na janela: vale também para uma navbar dentro de um painel menor.

Se a página atual foi para o Mais, é o Mais que fica selecionado.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m20 20-4.2-4.2"></path></svg>

<button type="button" class="ds-inline-action" data-try-width="full">Ver no exemplo<ds-icon name="arrow-up"></ds-icon></button>

<button type="button" class="ds-inline-action" data-try-width="compact">Ver no exemplo<ds-icon name="arrow-up"></ds-icon></button>

<button type="button" class="ds-inline-action" data-try-width="more">Ver no exemplo<ds-icon name="arrow-up"></ds-icon></button>
```

## Menus dos grupos

Cada botão de grupo abre um menu com as páginas daquele grupo. Lista longa vira grade, sem rolagem.

Uma coluna por seção

Se os itens têm `section`, cada seção vira uma coluna com o nome em cima (`sectionColumns`).

Cinco por coluna

Sem seções, o menu quebra em colunas equilibradas de até cinco itens (`maxRows: 5`). ← e → pulam de coluna.

Mais, agrupado

O Mais junta os itens que saíram, com o nome de cada grupo como título da coluna.

Sempre na tela

Perto da borda, o menu desliza para caber. A seta do botão gira enquanto ele está aberto.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="2"></rect><rect x="13.5" y="4" width="6.5" height="6.5" rx="2"></rect><rect x="4" y="13.5" width="6.5" height="6.5" rx="2"></rect><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2"></rect></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><g fill="currentColor"><circle cx="6" cy="12" r="0.75"></circle><circle cx="12" cy="12" r="0.75"></circle><circle cx="18" cy="12" r="0.75"></circle></g></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M8.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v3.5M15.5 3.5H19a1.5 1.5 0 0 1 1.5 1.5v3.5M8.5 20.5H5A1.5 1.5 0 0 1 3.5 19v-3.5M15.5 20.5H19a1.5 1.5 0 0 0 1.5-1.5v-3.5"></path></svg>

<button type="button" class="ds-inline-action" data-try-menu=""><ds-icon name="chevron-down"></ds-icon>Abrir Componentes no exemplo<ds-icon name="arrow-up"></ds-icon></button>
```

## No app

O Lume inteiro, no layout navbar. Troque para o celular: abaixo de 1024 px a navbar sai e o botão de menu da topbar abre a mesma gaveta da sidebar.

Carregando o app…

Navbar · Desktop 1280 × 800

Marcação dos exemplos desta seção:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Tamanho da tela" data-segmented="device">
<button type="button" class="ds-segmented__item" role="radio" data-value="desktop" aria-checked="true">Desktop</button><button type="button" class="ds-segmented__item" role="radio" data-value="tablet" aria-checked="false">Tablet</button><button type="button" class="ds-segmented__item" role="radio" data-value="phone" aria-checked="false">Celular</button>
</div>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-demo-toggle="" disabled=""><ds-icon name="menu"></ds-icon><span data-demo-toggle-label="">Abrir gaveta</span></button>

<button type="button" class="ds-theme-toggle " data-demo-theme="dark" aria-pressed="false" aria-label="Tema do exemplo" data-ds-tooltip="Alternar claro e escuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-demo-reload="" aria-label="Recarregar o exemplo" data-ds-tooltip="Recarregar o exemplo"><ds-icon name="refresh"></ds-icon></button>
```

## Sidebar ou navbar

Os dois levam aos mesmos lugares. A diferença está em quantos lugares são e em quanto espaço o conteúdo pede.

|  | Sidebar | Navbar |
| --- | --- | --- |
| Quantas áreas | Muitas: grupos longos, dezenas de páginas | Poucas: o que cabe numa linha |
| Largura do conteúdo | Perde 288 px (76 px recolhida) | A largura toda, só perde a altura da barra |
| Achar uma página | Tudo à vista, rolando a lista | Um clique a mais: abrir o menu do grupo |
| Novidades | Bolinha em cada item | Bolinha no botão do grupo |
| No celular | Gaveta | A mesma gaveta |

Os dois leem os mesmos grupos. Neste site, a pessoa escolhe na topbar (só no desktop) ou pela busca; a escolha fica salva em `ds-layout`. Quem chega pela primeira vez vê a sidebar.

## Teclado

Os menus seguem o mesmo teclado do componente Menu.

| Teclas | Ação | Detalhe |
| --- | --- | --- |
| Tab | Andar pela barra | Marca, links, botões de grupo, Mais e busca, na ordem da tela. |
| Enter | Abrir o menu do grupo | Espaço e ↓ também abrem; o foco vai para a página atual ou para a primeira. |
| ↑ ↓ | Andar no menu | Home e End vão para a primeira e a última. Uma letra pula para o item que começa com ela. |
| ← → | Pular de coluna | Nos menus em grade ou com seções. |
| Esc | Fechar o menu | E devolve o foco ao botão do grupo. |
| Ctrl K | Abrir a busca | Mesmo com a busca só no ícone. |

## Acessibilidade

O que o teclado e o leitor de tela encontram.

- Navegação com nome — Os links e botões ficam num `nav` “Principal”, o mesmo nome da sidebar: só um dos dois aparece por vez.
- Botões que abrem menu — Enter — Cada grupo é um botão com `aria-haspopup` e `aria-expanded`; o menu é uma lista com `role="menu"`.
- Página atual — O link atual tem `aria-current="page"`; no menu, a página atual vem marcada.
- Nada some de verdade — O que vai para o Mais sai do Tab e entra no menu dele. A busca compacta mantém o texto escondido, para o leitor de tela.
- Foco de volta — Esc — Esc ou escolher uma página fecha o menu e devolve o foco ao botão que o abriu.

## Tokens usados

Os mesmos da sidebar, mais a altura da barra.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| layout.topbar (`--ds-layout-topbar`) | Altura da barra | 64 px | 64 px |
| layout.frame-gap (`--ds-layout-frame-gap`) | Distância da borda da janela e do painel principal | 10 px | 10 px |
| radius.xl (`--ds-radius-xl`) | Cantos do painel | 20 px | 20 px |
| color.bg.sidebar (`--ds-color-bg-sidebar`) | Fundo do painel | #F8FAFD | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno do painel | #3E516624 | #FFFFFF0F |
| size.control.compact (`--ds-size-control-compact`) | Altura dos links e botões de grupo | 36 px | 36 px |
| size.control.md (`--ds-size-control-md`) | Busca compacta | 40 px | 40 px |
| color.bg.hover (`--ds-color-bg-hover`) | Hover e menu aberto | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Link e grupo atuais | #3E516612 | #C0CAD61A |
| color.brand.indicator (`--ds-color-brand-indicator`) | Bolinha de novidade | #C97B63 | #DE9680 |

## Código

A navbar mora no `.ds-shell`, ao lado da sidebar, e aparece com `data-layout="navbar"`. Os grupos são os mesmos.

### HTML

```html
<div class="ds-shell" id="shell" data-layout="navbar">
  <div class="ds-navbar">
    <a class="ds-brand" href="#/" aria-label="Início"><img class="ds-brand__mark" src="logo.svg" alt="">Seu app</a>
    <nav class="ds-navbar__nav" id="navbar-nav" aria-label="Principal"></nav>
    <button class="ds-field ds-sidebar-search ds-navbar__search" data-command-open>…</button>
  </div>
  <!-- a sidebar continua na página: no celular, é ela que vira a gaveta -->
  <aside class="ds-sidebar" id="sidebar">…</aside>
  <div class="ds-main">…</div>
</div>
```

### JavaScript

```html
import { createShell, renderSidebarNav, renderNavbarNav } from 'https://lumeui.dev/v/1.8/lume.js';

const groups = [
  { id: 'main', items: [
    { label: 'Início', icon: 'home', href: '#/' },          // na navbar, o início fica na marca
    { label: 'Relatórios', icon: 'bar-chart', href: '#/relatorios' },
  ] },
  { id: 'vendas', label: 'Vendas', items: [
    { label: 'Pedidos', icon: 'inbox', href: '#/pedidos' },
    { label: 'Clientes', icon: 'users', href: '#/clientes' },
  ] },
];

renderSidebarNav(document.getElementById('sidebar-nav'), groups);   // a gaveta do celular
const navbar = renderNavbarNav(document.getElementById('navbar-nav'), groups, {
  go: (href) => (location.hash = href),                              // o que fazer ao escolher no menu
});
navbar.setActive(location.hash);

const shell = createShell(document.getElementById('shell'));
shell.setLayout('navbar');                                          // ou “sidebar”; fica salvo
```

| API | O que faz |
| --- | --- |
|  `renderNavbarNav(el, groups, { go })`  | Desenha links e botões de grupo e liga os menus. `go(href)` roda ao escolher uma página; o padrão é `location.assign`. |
|  `navbar.setActive(href)`  | Marca o link ou o grupo da página atual (ou o Mais, se ela foi para lá). |
|  `navbar.destroy()`  | Desliga os menus e a medida de espaço. |
|  `shell.setLayout('navbar' \| 'sidebar')`  | Troca o layout e grava em `ds-layout`. `shell.layout` lê o atual. |
|  `botões [data-layout-option]`  | Dentro do shell, num radiogroup, viram o seletor de layout sem código. |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Quando a navbar é a melhor escolha.

- **Faça:** poucas áreas, conteúdo largo. Tabelas, quadros e painéis que precisam da largura toda. Nomes curtos nos grupos, para caber mais antes do Mais.
- **Evite:** dezenas de links soltos. Se a linha de cima já não cabe numa tela comum, os grupos estão grandes demais ou são muitos: é caso de sidebar.
- **Dica:** O mais usado primeiro. O Mais tira do fim. Ponha à esquerda o que a pessoa mais usa, e ele vai ser o último a sair.
