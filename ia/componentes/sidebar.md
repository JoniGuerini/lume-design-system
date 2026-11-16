# Sidebar

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/sidebar

A navegação na lateral: marca, busca, os lugares de todo dia e grupos que recolhem. No desktop, ela encolhe até ficar só com os ícones; no celular, vira gaveta.

Em números: aberta: 288 px · recolhida: 76 px · gaveta abaixo de: 1024 px · atalho: Ctrl B.

## Ao vivo

É o próprio Lume, rodando aqui dentro. Recolha, troque o tamanho da tela e veja a sidebar virar gaveta. Nada do que você fizer aqui muda as suas preferências.

Carregando o app…

Sidebar expandida · Desktop 1280 × 800

Marcação dos exemplos desta seção:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Tamanho da tela" data-segmented="device">
<button type="button" class="ds-segmented__item" role="radio" data-value="desktop" aria-checked="true">Desktop</button><button type="button" class="ds-segmented__item" role="radio" data-value="tablet" aria-checked="false">Tablet</button><button type="button" class="ds-segmented__item" role="radio" data-value="phone" aria-checked="false">Celular</button>
</div>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-demo-toggle=""><ds-icon name="panel-left"></ds-icon><span data-demo-toggle-label="">Recolher menu</span></button>

<button type="button" class="ds-theme-toggle " data-demo-theme="dark" aria-pressed="false" aria-label="Tema do exemplo" data-ds-tooltip="Alternar claro e escuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted" data-demo-reload="" aria-label="Recarregar o exemplo" data-ds-tooltip="Recarregar o exemplo"><ds-icon name="refresh"></ds-icon></button>
```

## Anatomia

A sidebar do próprio site, com menos páginas. Os grupos abrem e fecham, e clicar num item marca a página atual. Passe o mouse ou foque uma parte da lista para destacá-la.

- 1 — Painel — 288 px de largura, raio xl e contorno fino. Flutua sobre o fundo do app, a 10 px da borda.
- 2 — Marca — A chama na coluna dos ícones e o nome alinhado com os rótulos. Leva ao início.
- 3 — Busca — Um botão com cara de campo: abre a paleta de comandos, como Ctrl K.
- 4 — Navegação principal — O grupo sem título: itens maiores, sempre à vista, para os lugares de todo dia.
- 5 — Bolinha de novidade — Marca o que mudou desde a última visita. O leitor de tela ouve “Novo”.
- 6 — Título do grupo — Recolhe e abre o grupo. O estado fica salvo para a próxima visita.
- 7 — Rótulo de seção — Divide um grupo longo. Vem do campo `section` de cada item.
- 8 — Item atual — Fundo selecionado, contorno fino e `aria-current="page"`.
- 9 — Rodapé — Preso no pé do painel: conta, workspace ou, aqui, a versão.

## Item

Ícone de 20 px, rótulo e, se for o caso, a bolinha. Os estados podem ser forçados com `data-state`.

## Aberta e recolhida

No desktop, a sidebar recolhe para 76 px e deixa o conteúdo respirar. Os ícones ficam na mesma coluna nos dois estados, por isso nada pula na animação.

Aberta — 288 px

- Não há botão no cabeçalho: quem recolhe é a aba redonda presa na borda direita, na altura da marca.
- A aba aparece com o mouse sobre a sidebar ou com o foco, e some no resto do tempo.
- Sem tooltips: o nome já está escrito.

Recolhida — 76 px

- A chama ocupa o lugar do botão, maior (28 px). Com o mouse ou o foco, vira o ícone de expandir.
- Os ícones não saem da coluna; os rótulos somem por opacidade.
- Cada item ganha tooltip com o nome. Títulos de grupo viram um fio, e a bolinha sobe para o canto do ícone.

A escolha fica salva (`ds-sidebar`) e é aplicada antes do primeiro desenho: a página não pisca ao abrir.

A largura anima em `duration.slow` com `easing.emphasized`; com movimento reduzido, a troca é imediata.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-inline-action" data-try="collapse"><ds-icon name="panel-left"></ds-icon>Recolher no exemplo ao vivo<ds-icon name="arrow-up"></ds-icon></button>
```

## No celular

Abaixo de 1024 px a sidebar sai da tela e vira gaveta, aberta pelo botão de menu da topbar. A navbar usa a mesma gaveta.

- 1 — Abrir — O botão de menu (ou Ctrl B) desliza a gaveta e escurece o fundo. O foco vai para o item atual.
- 2 — Navegar — Escolher uma página fecha a gaveta. A largura é 288 px, mas nunca encosta na borda: sobram 48 px para tocar fora.
- 3 — Fechar — Toque no fundo, no X ou aperte Esc. O foco volta para o botão de menu.

Na gaveta não existe modo recolhido: ela abre sempre inteira, com os rótulos.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-btn ds-btn--secondary" data-try="phone"><ds-icon name="arrow-up"></ds-icon>Ver no celular, ao vivo</button>
```

## Comportamento

Os detalhes que fazem a sidebar parecer quieta: nada muda sem motivo e tudo volta como estava.

Grupos que lembram

Cada grupo recolhe pelo título e o estado fica salvo (`ds-nav-groups`). Recolhida, a sidebar mostra os ícones de todos.

Item atual à vista

Se a página atual está num grupo fechado, o grupo abre e a lista rola até ela.

Bolinhas que somem

A bolinha fica até a pessoa abrir a página. Com o grupo fechado, ela aparece no título do grupo.

Rolagem só na lista

Marca, busca e rodapé ficam parados. A lista rola sozinha, com a barra sobreposta e a ponta esmaecida.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.5"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1z"></path><path d="M17 9a3.5 3.5 0 0 1 0 6M8 15.67V19a1.5 1.5 0 0 0 3 0v-1.33"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="4" y="3.5" width="16" height="17" rx="3"></rect><path d="M16 7.5v5"></path></svg>
```

## Teclado

Atalhos de uma tecla só valem fora de campos de texto: ninguém perde o que está digitando.

| Teclas | Ação | Detalhe |
| --- | --- | --- |
| Ctrl B | Recolher ou expandir | No celular, abre e fecha a gaveta. |
| Tab | Andar pelos itens | Na ordem da tela: marca, busca, itens e títulos de grupo, rodapé. |
| Enter | Abrir ou fechar o grupo | No título do grupo. Espaço faz o mesmo. |
| Ctrl K | Abrir a busca | O mesmo que clicar no campo da sidebar. / também abre. |
| Esc | Fechar a gaveta | E devolve o foco ao botão de menu. |

## Acessibilidade

O que o teclado e o leitor de tela encontram.

- Regiões com nome — A sidebar é um `aside` “Barra lateral” e a lista, um `nav` “Principal”. Dá para pular até elas pelo leitor de tela.
- Página atual — O item atual tem `aria-current="page"`: não depende só do destaque visual.
- Grupos que dizem o estado — Enter — O título é um botão com `aria-expanded` e `aria-controls`. Os rótulos de seção ficam fora do leitor: o nome do item já basta.
- Nomes quando recolhida — Só ícones na tela, mas cada item mantém o rótulo para o leitor e ganha tooltip no hover e no foco.
- Recolher com rótulo — Ctrl B — A aba e a chama dizem o que fazem (“Recolher menu” ↔ “Expandir menu”) e mostram Ctrl B no tooltip.
- Foco na gaveta — Esc — Ao abrir, o foco vai para o item atual; Esc fecha e devolve o foco ao botão de menu.
- Movimento reduzido — Com a preferência do sistema ligada, recolher e abrir a gaveta acontecem sem animação.

## Tokens usados

Mude um número e a sidebar inteira acompanha.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| layout.sidebar (`--ds-layout-sidebar`) | Largura aberta (e máxima da gaveta) | 288 px | 288 px |
| layout.sidebar-collapsed (`--ds-layout-sidebar-collapsed`) | Largura recolhida | 76 px | 76 px |
| layout.frame-gap (`--ds-layout-frame-gap`) | Distância da borda da janela e do painel principal | 10 px | 10 px |
| radius.xl (`--ds-radius-xl`) | Cantos do painel | 20 px | 20 px |
| color.bg.sidebar (`--ds-color-bg-sidebar`) | Fundo do painel | #F8FAFD | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno do painel e do item atual | #3E516624 | #FFFFFF0F |
| size.control.lg (`--ds-size-control-lg`) | Altura dos itens principais | 48 px | 48 px |
| size.control.md (`--ds-size-control-md`) | Altura dos itens e títulos de grupo | 40 px | 40 px |
| color.bg.hover (`--ds-color-bg-hover`) | Hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Item atual | #3E516612 | #C0CAD61A |
| color.brand.indicator (`--ds-color-brand-indicator`) | Bolinha de novidade | #C97B63 | #DE9680 |
| duration.slow (`--ds-duration-slow`) | Recolher, expandir e gaveta | 320ms | 320ms |

## Código

O HTML é fixo; a navegação é desenhada a partir de uma lista. A sidebar vive dentro do `.ds-shell`: veja o App shell para a moldura inteira.

### HTML

```html
<aside class="ds-sidebar" id="sidebar" aria-label="Barra lateral">
  <div class="ds-sidebar__header">
    <a class="ds-brand" href="#/" aria-label="Início"><img class="ds-brand__mark" src="logo.svg" alt="">Seu app</a>
    <button class="ds-icon-btn ds-icon-btn--outline ds-icon-btn--lg ds-sidebar__toggle" data-shell-toggle aria-controls="sidebar">
      <img class="ds-sidebar__toggle-mark" src="logo.svg" alt="">
      <ds-icon name="panel-left" class="ds-sidebar__toggle-collapse"></ds-icon>
      <ds-icon name="x" class="ds-sidebar__toggle-close"></ds-icon>
    </button>
  </div>
  <div class="ds-sidebar__search">
    <button class="ds-field ds-sidebar-search" data-command-open>…</button>
  </div>
  <nav class="ds-sidebar__nav" id="sidebar-nav" aria-label="Principal"></nav>
  <div class="ds-sidebar__footer"><a class="ds-account" href="…">…</a></div>
</aside>
<!-- a aba de recolher fica fora da sidebar, presa na borda dela -->
<button class="ds-shell__edge" data-shell-toggle aria-controls="sidebar"><ds-icon name="chevron-left" size="16"></ds-icon></button>
```

### JavaScript

```html
import { createShell, renderSidebarNav, setActiveNavItem } from 'https://lumeui.dev/v/1.8/lume.js';

const nav = document.getElementById('sidebar-nav');
renderSidebarNav(nav, [
  // o grupo sem label é a navegação principal (itens maiores, sempre abertos)
  { id: 'main', items: [
    { label: 'Início', icon: 'home', href: '#/' },
    { label: 'Novidades', icon: 'megaphone', href: '#/novidades', dot: true },
  ] },
  { id: 'vendas', label: 'Vendas', items: [
    { label: 'Pedidos', icon: 'inbox', href: '#/pedidos', section: 'Hoje' },
    { label: 'Clientes', icon: 'users', href: '#/clientes', section: 'Cadastro' },
  ] },
]);

const shell = createShell(document.getElementById('shell'));
setActiveNavItem(nav, location.hash);   // marca aria-current, abre o grupo e rola até o item
addEventListener('hashchange', () => setActiveNavItem(nav, location.hash));

shell.setCollapsed(true);               // recolhe (desktop)
shell.collapsed;                        // → true
```

| API | O que faz |
| --- | --- |
|  `renderSidebarNav(el, groups)`  | Desenha a navegação. Cada item: `label`, `icon`, `href` e, se quiser, `dot` e `section`. |
|  `setActiveNavItem(el, href)`  | Marca a página atual, abre o grupo dela e rola até ela. |
|  `createShell(el, { persist, initial })`  | Liga recolher, gaveta e grupos. `persist: false` não grava nada; `initial` força “expanded” ou “collapsed”. |
|  `shell.toggle() · setCollapsed() · setMobileOpen()`  | Mudam o estado como os botões e o atalho fazem. |
|  `shell.collapsed · mobile · mobileOpen`  | Leem o estado atual. |
|  `evento ds:shellchange`  | Disparado no shell a cada mudança, com { sidebar, mobile, mobileOpen }. |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

A sidebar some quando está bem feita.

- **Faça:** muitas páginas, uso diário. Apps que a pessoa abre todo dia e em que pula entre dezenas de páginas. Até seis grupos, com nomes de uma ou duas palavras.
- **Evite:** ações e níveis demais. A sidebar leva a lugares. Botões de criar ou excluir e um terceiro nível de navegação vão para o conteúdo da página.
- **Dica:** Poucas áreas? Navbar. Com poucas áreas e conteúdo largo (tabelas, quadros), a navbar devolve a largura toda. Os mesmos grupos servem às duas.
