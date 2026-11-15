# App shell

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/app-shell

A moldura de toda tela: sidebar flutuante, painel principal e topbar. Recolhe no desktop, vira gaveta no celular e responde ao teclado.

Em números: sidebar: 288 px · recolhida: 76 px · topbar: 64 px · gaveta abaixo de: 1024 px.

## Ao vivo

É o próprio app, rodando aqui dentro. Troque o tamanho da tela e veja a sidebar virar gaveta; recolha, troque o tema, navegue. Nada do que você fizer aqui muda as suas preferências.

Carregando o app…

Sidebar expandida · Desktop 1280 × 800

Marcação dos exemplos desta seção:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Tamanho da tela" data-segmented="device">
<button type="button" class="ds-segmented__item" role="radio" data-value="desktop" aria-checked="true">Desktop</button><button type="button" class="ds-segmented__item" role="radio" data-value="tablet" aria-checked="false">Tablet</button><button type="button" class="ds-segmented__item" role="radio" data-value="phone" aria-checked="false">Celular</button>
</div>

<div class="ds-segmented" role="radiogroup" aria-label="Layout do exemplo" data-segmented="layout">
<button type="button" class="ds-segmented__item" role="radio" data-value="sidebar" aria-checked="true" aria-label="Sidebar"><ds-icon name="panel-left"></ds-icon></button><button type="button" class="ds-segmented__item" role="radio" data-value="navbar" aria-checked="false" aria-label="Navbar"><ds-icon name="panel-top"></ds-icon></button>
</div>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-demo-toggle=""><ds-icon name="panel-left"></ds-icon><span data-demo-toggle-label="">Recolher menu</span></button>

<button type="button" class="ds-theme-toggle " data-demo-theme="dark" aria-pressed="false" aria-label="Tema do exemplo" data-ds-tooltip="Alternar claro e escuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-demo-reload="" aria-label="Recarregar o exemplo" data-ds-tooltip="Recarregar o exemplo"><ds-icon name="refresh"></ds-icon></button>
```

## Anatomia

Oito partes, marcadas sobre o app de verdade — as posições vêm do próprio DOM. Passe o mouse ou foque um item da lista para destacá-lo.

Carregando o app…

- 1 — Sidebar — Painel flutuante de 288 px, raio xl, separado do conteúdo por 10 px de fundo do app.
- 2 — Marca — A chama do Lume e o nome, em Geist Serif. Leva ao Início.
- 3 — Busca — Abre a paleta de comandos — o mesmo que Ctrl K ou /.
- 4 — Navegação com grupos — Navegação principal no topo; depois, grupos que recolhem e lembram o estado.
- 5 — Cartão da conta — Fica preso no pé da sidebar: conta, versão ou workspace.
- 6 — Painel principal — O conteúdo da página, com respiro lateral de 40 px e largura de leitura limitada.
- 7 — Topbar e trilha — 64 px, fixa no topo do painel: transparente no início, opaca ao rolar.
- 8 — Tema — Um botão que troca entre claro e escuro a cada clique. Começa como o aparelho, e a escolha fica salva para o app inteiro.

## Recolhido e expandido

No desktop, a sidebar recolhe para 76 px e deixa o conteúdo respirar. Os ícones ficam na mesma coluna nos dois estados — por isso nada pula na animação.

Expandida — 288 px

- Rótulos, títulos de grupo e o atalho da busca à vista.
- Sem tooltips — o nome já está escrito.
- Para recolher, a aba na borda, na altura da marca: aparece com o mouse sobre a sidebar ou com o foco.
- O padrão para quem chega pela primeira vez.

Recolhida — 76 px

- Só ícones; os textos somem por opacidade, sem mudar de lugar.
- Cada item ganha tooltip com o nome — e o atalho, quando tem.
- Títulos de grupo viram um fio divisor; a busca vira a lupa.
- A chama fica no topo, maior; com o mouse ou o foco, vira o botão de expandir.

A escolha fica salva (`ds-sidebar`) e é aplicada antes do primeiro desenho — a página não pisca ao abrir.

A largura anima em `duration.slow` com `easing.emphasized`; com movimento reduzido, a troca é imediata.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-inline-action" data-try="collapse"><ds-icon name="panel-left"></ds-icon>Recolher no exemplo ao vivo<ds-icon name="arrow-up"></ds-icon></button>
```

## Mobile

Abaixo de 1024 px a sidebar sai da tela e vira gaveta. O conteúdo ganha a largura toda; a topbar ganha o botão de menu e a lupa.

- 1 — Abrir — O botão de menu da topbar (ou Ctrl B) desliza a gaveta e escurece o fundo. O foco vai para o item ativo.
- 2 — Navegar — Escolher uma página fecha a gaveta. A largura é 288 px, mas nunca encosta na borda: sobram 48 px para tocar fora.
- 3 — Fechar — Toque no fundo, no X ou aperte Esc. O foco volta para o botão de menu.

Abaixo de 768 px a trilha mostra só a página atual e o respiro lateral cai para 16 px.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-btn ds-btn--secondary" data-try="phone"><ds-icon name="arrow-up"></ds-icon>Ver no celular, ao vivo</button>
```

## Comportamento

Os detalhes que fazem o shell parecer quieto: nada muda sem motivo e tudo volta como estava.

Topbar que aparece ao rolar

No topo da página ela é transparente e some no fundo. Ao rolar, fica opaca e ganha um fio embaixo (data-scrolled no painel).

Item ativo sempre à vista

A página atual ganha aria-current="page"; se estiver num grupo fechado, o grupo abre e a lista rola até ela.

Grupos que lembram

Cada grupo recolhe pelo título e o estado fica salvo (ds-nav-groups). Recolhida, a sidebar mostra todos os ícones.

Três larguras

A partir de 1024 px: sidebar recolhível. Abaixo: gaveta. Abaixo de 768 px: trilha curta e menos respiro.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="9" rx="2"></rect><rect x="13.5" y="3.5" width="7" height="5" rx="2"></rect><rect x="13.5" y="11.5" width="7" height="9" rx="2"></rect><rect x="3.5" y="15.5" width="7" height="5" rx="2"></rect></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.5"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="4" width="18" height="12.5" rx="2.5"></rect><path d="M8.5 20.5h7M12 16.5v4"></path></svg>
```

## Atalhos

Funcionam em qualquer página. Atalhos de uma tecla só valem fora de campos de texto — ninguém perde o que está digitando.

| Teclas | Ação | Detalhe |
| --- | --- | --- |
| Ctrl B | Recolher ou expandir a sidebar | No celular, abre e fecha a gaveta. |
| Ctrl K | Abrir a busca | Abre a paleta de comandos de qualquer lugar. |
| / | Abrir a busca | Só fora de campos de texto — dentro deles, / é só uma barra. |
| Esc | Fechar | Fecha a busca, a gaveta, menus e tooltips, e devolve o foco. |
| Tab | Pular para o conteúdo | O primeiro Tab da página mostra o atalho para o painel principal. |

## Acessibilidade

O shell é a primeira coisa que o teclado e o leitor de tela encontram. Ele precisa ser previsível.

- Regiões com nome — Sidebar em `aside` “Barra lateral”, navegação “Principal”, trilha “Você está em”, conteúdo em `main`. Dá para pular entre elas pelo leitor de tela.
- Pular para o conteúdo — Tab — O primeiro Tab mostra o link; Enter leva o foco direto ao painel principal, sem passar pela navegação toda.
- Página atual — O item ativo tem `aria-current="page"` — não depende só do destaque visual.
- Botões que dizem o estado — Recolher, abrir gaveta e grupos usam `aria-expanded` e `aria-controls`; o rótulo muda junto (“Recolher menu” ↔ “Expandir menu”).
- Foco na gaveta — Esc — Ao abrir, o foco vai para o item ativo; Esc fecha e devolve o foco ao botão de menu.
- Nomes quando recolhida — Só ícones na tela, mas cada item mantém o rótulo para o leitor e ganha tooltip no hover e no foco.
- Atalhos que não atrapalham — Ctrl B e / não disparam dentro de campos de texto. Os atalhos aparecem nos tooltips e em `aria-keyshortcuts`.
- Movimento reduzido — Com a preferência do sistema ligada, sidebar e gaveta trocam de estado sem animação.

## Medidas

Tudo vem de tokens de layout — mude um número e o shell inteiro acompanha.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| layout.sidebar (`--ds-layout-sidebar`) | Largura da sidebar (e máxima da gaveta) | 288 px | 288 px |
| layout.sidebar-collapsed (`--ds-layout-sidebar-collapsed`) | Largura recolhida | 76 px | 76 px |
| layout.topbar (`--ds-layout-topbar`) | Altura da topbar | 64 px | 64 px |
| layout.frame-gap (`--ds-layout-frame-gap`) | Fundo entre os painéis e a borda da janela | 10 px | 10 px |
| layout.gutter (`--ds-layout-gutter`) | Respiro lateral do conteúdo | 40 px | 40 px |
| layout.content-max (`--ds-layout-content-max`) | Largura máxima do conteúdo | 1160 px | 1160 px |
| radius.2xl (`--ds-radius-2xl`) | Raio dos dois painéis | 28 px | 28 px |
| breakpoint.lg (`--ds-breakpoint-lg`) | A partir daqui, sidebar; abaixo, gaveta | 1024 px | 1024 px |
| color.bg.app (`--ds-color-bg-app`) | Fundo atrás dos painéis | #DAE0E8 | #0F0E0C |
| color.bg.sidebar (`--ds-color-bg-sidebar`) | Sidebar | #F8FAFD | #24221F |
| color.bg.canvas (`--ds-color-bg-canvas`) | Painel principal e topbar ao rolar | #EEF2F6 | #1D1B18 |
| duration.slow (`--ds-duration-slow`) | Recolher, expandir e gaveta | 320ms | 320ms |

## Código

O HTML é fixo; a navegação é montada por JS a partir de uma lista. O mesmo arquivo serve o site inteiro.

### HTML

```html
<a class="ds-skip-link" href="#conteudo">Pular para o conteúdo</a>

<div class="ds-shell" id="shell">
  <button class="ds-shell__edge" data-shell-toggle aria-controls="sidebar"><ds-icon name="chevron-left" size="16"></ds-icon></button>
  <aside class="ds-sidebar" id="sidebar" aria-label="Barra lateral">
    <div class="ds-sidebar__header">
      <a class="ds-brand" href="#/" aria-label="Lume"><img class="ds-brand__mark" src="assets/favicon.svg" alt="">Lume</a>
      <button class="ds-icon-btn ds-icon-btn--outline ds-icon-btn--lg ds-sidebar__toggle"
              data-shell-toggle aria-controls="sidebar">
        <img class="ds-sidebar__toggle-mark" src="assets/favicon.svg" alt="">
        <ds-icon name="panel-left" class="ds-sidebar__toggle-collapse"></ds-icon>
        <ds-icon name="x" class="ds-sidebar__toggle-close"></ds-icon>
      </button>
    </div>
    <div class="ds-sidebar__search">…botão que abre a busca…</div>
    <nav class="ds-sidebar__nav" id="sidebar-nav" aria-label="Principal"></nav>
    <div class="ds-sidebar__footer"><a class="ds-account" href="…">…</a></div>
  </aside>

  <div class="ds-shell__scrim" data-shell-scrim></div>

  <div class="ds-main">
    <div class="ds-main__scroll">
      <header class="ds-topbar">
        <button class="ds-icon-btn ds-icon-btn--outline ds-topbar__menu"
                data-shell-toggle aria-controls="sidebar"><ds-icon name="menu"></ds-icon></button>
        <nav class="ds-breadcrumb" aria-label="Você está em"></nav>
        <div class="ds-topbar__spacer"></div>
        …busca e tema…
      </header>
      <main id="conteudo" class="ds-main__content" tabindex="-1"></main>
    </div>
  </div>
</div>
```

### JavaScript

```html
import { createShell, renderSidebarNav, setActiveNavItem } from 'https://lumeui.dev/v/1.2/lume.js';

const nav = document.getElementById('sidebar-nav');
renderSidebarNav(nav, [
  { id: 'main', items: [{ label: 'Início', icon: 'home', href: '#/' }] },
  { id: 'vendas', label: 'Vendas', items: [
    { label: 'Pedidos', icon: 'inbox', href: '#/pedidos', dot: true },
    { label: 'Clientes', icon: 'users', href: '#/clientes' },
  ] },
]);

const shell = createShell(document.getElementById('shell'));
setActiveNavItem(nav, location.hash);            // marca aria-current e abre o grupo

shell.toggle();                                 // recolhe (desktop) ou abre a gaveta (celular)
shell.closeMobile();                            // ao navegar no celular
document.getElementById('shell')
  .addEventListener('ds:shellchange', (e) => console.log(e.detail));
  // → { sidebar: 'expanded' | 'collapsed', mobile: false, mobileOpen: false }
```

| API | O que faz |
| --- | --- |
|  `createShell(el, { persist, initial })`  | Liga recolher, gaveta, grupos e topbar. `persist: false` não grava nada; `initial` força “expanded” ou “collapsed”. |
|  `shell.toggle() · setCollapsed(bool) · setMobileOpen(bool)`  | Mudam o estado como os botões e o atalho fazem. |
|  `shell.collapsed · mobile · mobileOpen`  | Leem o estado atual. |
|  `renderSidebarNav(el, groups)`  | Desenha a navegação: o grupo sem rótulo vira a principal; os outros recolhem. |
|  `setActiveNavItem(el, href)`  | Marca a página atual, abre o grupo dela e rola até ela. |
|  `evento ds:shellchange`  | Disparado no shell a cada mudança, com { sidebar, mobile, mobileOpen }. |

### Modo demonstração ?embed

É o que esta página usa. Com `?embed` na URL, o app não grava tema, sidebar nem grupos, e quem embute controla tudo por `lumeEmbed`.

```html
<!-- o app de verdade, sem gravar preferências -->
<iframe src="index.html?embed&theme=dark&sidebar=collapsed#/"></iframe>

<script type="module">
  const app = iframe.contentWindow.lumeEmbed;   // mesma origem
  app.shell.toggle();
  app.setTheme('dark');          // light · dark
  app.setLocale('pt-BR');
  app.go('/componentes/botao');
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

O shell some quando está bem feito. Três regras ajudam.

- **Faça:** poucos grupos, nomes curtos. Até seis grupos, com rótulos de uma ou duas palavras. Se um item precisa de explicação, ele mora numa página, não no menu.
- **Evite:** ações e níveis demais na sidebar. A sidebar leva a lugares. Botões de criar, excluir ou um terceiro nível de navegação vão para o conteúdo da página.
- **Dica:** Tudo também pela busca. Toda página e ação da sidebar aparece na paleta (Ctrl K). Quem usa teclado nem precisa abrir o menu.
