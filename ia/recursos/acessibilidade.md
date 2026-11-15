# Acessibilidade

Seção do Lume: Recursos. Página: https://lumeui.dev/#/recursos/acessibilidade

Telas que todo mundo consegue usar: no teclado, com leitor de tela, com zoom, com pouca visão de cor ou pedindo menos movimento. A meta é WCAG 2.2 nível AA, nos dois temas.

Em números: contrastes no build: 80/80 · WCAG 2.2: AA · temas medidos: 2 · pendências abertas: 0.

## Princípios

Quatro ideias guiam cada componente. Elas não são um anexo no fim do projeto: entram no token, no CSS e no JavaScript.

### Perceptível

Contraste medido, nada só por cor, texto que aguenta zoom. Os dois temas valem igual.

### Operável

Tudo pelo teclado, foco sempre visível, nada com tempo curto demais para agir.

### Compreensível

Rótulos claros, erros que dizem como resolver, comportamento previsível.

### Robusto

HTML nativo primeiro, padrões ARIA conhecidos quando o nativo não basta.

Como medimos — 80 de 80 pares passam agora

A referência é a WCAG 2.2, nível AA. A cada build, `scripts/build-tokens.mjs` mede todos os pares de texto e fundo declarados em `tokens/semantic.json`, nos dois temas — transparências são compostas sobre o fundo antes da conta. Um par que cai abaixo do mínimo aparece no terminal na hora. O que o build não mede (foco, teclado, leitores de tela) está nas seções abaixo, e o que ainda não está bom fica em Pendências.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="2.5"></rect><path d="M6 10h.01M9.3 10h.01M12.6 10h.01M15.9 10h.01M18 10h.01M7 14h10"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20.5 15a2 2 0 0 1-2 2H8l-4.5 3.5V5.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5"></path></svg>
```

## Contraste

Escolha um texto ou marca e um fundo: a conta é a mesma do build, nos dois temas. Use para conferir uma combinação antes de usá-la.

Aa — Texto de exemplo em 14 px

Lume claro

6,48:1

#46586E sobre #EEF2F6

- Texto normal — até 18 px, ou até 14 px em negrito — AA 4,5 passa — AAA 7,0 não passa
- Texto grande — a partir de 24 px, ou 18,66 px em negrito — AA 3,0 passa — AAA 4,5 passa
- Componentes e gráficos — bordas que identificam o controle, ícones, marcas — AA 3,0 passa

Aa — Texto de exemplo em 14 px

Lume escuro

10,36:1

#CEC8C1 sobre #1D1B18

- Texto normal — até 18 px, ou até 14 px em negrito — AA 4,5 passa — AAA 7,0 passa
- Texto grande — a partir de 24 px, ou 18,66 px em negrito — AA 3,0 passa — AAA 4,5 passa
- Componentes e gráficos — bordas que identificam o controle, ícones, marcas — AA 3,0 passa

Cores de gráfico, em ordem validada — As 8 cores de série seguem uma ordem escolhida para protanopia e deuteranopia: a pior dupla vizinha ainda tem ΔE 11,7 (meta: 8), 18,5 na visão normal, e todas passam de 3:1 sobre a superfície nos dois temas. Ver em Gráficos

### Pares verificados no build 39 pares × 2 temas

| Texto ou marca | Fundo | Mínimo | Lume claro | Lume escuro |
| --- | --- | --- | --- | --- |
| fg.default | bg.canvas | 4,5:1 | Lume claro — 10,61:1 | Lume escuro — 14,77:1 |
| fg.muted | bg.canvas | 4,5:1 | Lume claro — 6,48:1 | Lume escuro — 10,36:1 |
| fg.default | bg.sidebar | 4,5:1 | Lume claro — 11,42:1 | Lume escuro — 13,64:1 |
| fg.muted | bg.sidebar | 4,5:1 | Lume claro — 6,97:1 | Lume escuro — 9,56:1 |
| fg.subtle | bg.sidebar | 4,5:1 | Lume claro — 5,72:1 | Lume escuro — 5,48:1 |
| fg.muted | bg.raised | 4,5:1 | Lume claro — 7,29:1 | Lume escuro — 8,62:1 |
| fg.link | bg.canvas | 4,5:1 | Lume claro — 7,25:1 | Lume escuro — 12,93:1 |
| fg.brand | bg.canvas | 4,5:1 | Lume claro — 7,25:1 | Lume escuro — 12,93:1 |
| brand.on-solid | brand.solid | 4,5:1 | Lume claro — 7,80:1 | Lume escuro — 9,09:1 |
| brand.fg | brand.subtle | 4,5:1 | Lume claro — 7,25:1 | Lume escuro — 9,38:1 |
| fg.inverse | bg.inverse | 4,5:1 | Lume claro — 11,42:1 | Lume escuro — 16,59:1 |
| success.fg | success.subtle | 4,5:1 | Lume claro — 6,33:1 | Lume escuro — 8,33:1 |
| success.on-solid | success.solid | 4,5:1 | Lume claro — 4,66:1 | Lume escuro — 7,41:1 |
| warning.fg | warning.subtle | 4,5:1 | Lume claro — 6,43:1 | Lume escuro — 8,99:1 |
| warning.on-solid | warning.solid | 4,5:1 | Lume claro — 8,33:1 | Lume escuro — 8,33:1 |
| danger.fg | danger.subtle | 4,5:1 | Lume claro — 5,02:1 | Lume escuro — 7,93:1 |
| danger.on-solid | danger.solid | 4,5:1 | Lume claro — 5,41:1 | Lume escuro — 7,13:1 |
| info.fg | info.subtle | 4,5:1 | Lume claro — 4,56:1 | Lume escuro — 8,19:1 |
| info.on-solid | info.solid | 4,5:1 | Lume claro — 4,89:1 | Lume escuro — 7,31:1 |
| chart.series.1 | bg.surface | 3,0:1 | Lume claro — 3,83:1 | Lume escuro — 4,14:1 |
| chart.series.2 | bg.surface | 3,0:1 | Lume claro — 3,54:1 | Lume escuro — 4,49:1 |
| chart.series.3 | bg.surface | 3,0:1 | Lume claro — 3,88:1 | Lume escuro — 4,08:1 |
| chart.series.4 | bg.surface | 3,0:1 | Lume claro — 4,60:1 | Lume escuro — 3,45:1 |
| chart.series.5 | bg.surface | 3,0:1 | Lume claro — 3,37:1 | Lume escuro — 4,70:1 |
| chart.series.6 | bg.surface | 3,0:1 | Lume claro — 3,89:1 | Lume escuro — 4,07:1 |
| chart.series.7 | bg.surface | 3,0:1 | Lume claro — 3,79:1 | Lume escuro — 4,19:1 |
| chart.series.8 | bg.surface | 3,0:1 | Lume claro — 3,36:1 | Lume escuro — 4,73:1 |
| fg.subtle | bg.app | 4,5:1 | Lume claro — 4,50:1 | Lume escuro — 6,67:1 |
| fg.subtle | bg.canvas | 4,5:1 | Lume claro — 5,32:1 | Lume escuro — 5,94:1 |
| fg.subtle | bg.surface | 4,5:1 | Lume claro — 5,98:1 | Lume escuro — 5,48:1 |
| fg.subtle | bg.raised | 4,5:1 | Lume claro — 5,98:1 | Lume escuro — 4,94:1 |
| fg.subtle | bg.sunken | 4,5:1 | Lume claro — 5,08:1 | Lume escuro — 6,36:1 |
| border.field | bg.canvas | 3,0:1 | Lume claro — 3,35:1 | Lume escuro — 3,58:1 |
| border.field | bg.surface | 3,0:1 | Lume claro — 3,57:1 | Lume escuro — 3,50:1 |
| border.field | bg.raised | 3,0:1 | Lume claro — 3,57:1 | Lume escuro — 3,38:1 |
| border.field | bg.sunken | 3,0:1 | Lume claro — 3,29:1 | Lume escuro — 3,57:1 |
| fg.muted | bg.sunken | 4,5:1 | Lume claro — 6,19:1 | Lume escuro — 11,10:1 |
| fg.muted | bg.field | 4,5:1 | Lume claro — 7,29:1 | Lume escuro — 8,62:1 |
| fg.default | bg.field-hover | 4,5:1 | Lume claro — 11,42:1 | Lume escuro — 11,15:1 |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-ra-swap="" aria-label="Inverter texto e fundo" data-ds-tooltip="Inverter"><ds-icon name="chevrons-up-down"></ds-icon></button>
```

## Foco e teclado

Quem navega pelo teclado precisa saber onde está e chegar a tudo. Aperte Tab dentro do exemplo: todos os controles mostram o mesmo anel.

“Criar” mostra o anel fixo, com `data-state="focus"`, para você ver sem teclado.

- Espessura: focus-ring.width · 2 px
- Distância: focus-ring.offset · 2 px
- Cor: border.focus · 5,32:1 no Lume claro e 10,36:1 no Lume escuro, sobre o canvas
- Quando: Só com :focus-visible — o clique do mouse não acende o anel

- Nunca remova o contorno — Sem `outline: none` sem trocar por outro indicador igualmente visível. O anel vem do `base.css` para todo elemento focável.
- A ordem do foco é a ordem de leitura — Nada de `tabindex` positivo. Se a ordem parece errada, a ordem do HTML é que está.
- Um ponto de parada por grupo — Abas, grupos de rádio e listas usam “roving tabindex”: Tab entra no grupo, as setas andam dentro dele.
- O foco sempre volta — Ao fechar modal, menu, gaveta ou a busca ⌘K, o foco volta para o elemento que abriu.
- Pular a navegação — Tab — O primeiro Tab da página mostra “Pular para o conteúdo”, que leva direto ao painel principal.

### Mapa de teclado 12 componentes e padrões

| Componente | Teclas |
| --- | --- |
| Botão e link | Enter — ativa (o botão também com Espaço ) |
| Menu | ↓ ↑ — abrem e percorrem — Home End — primeira e última opção — Enter Espaço — escolhem — letras — pulam para a opção — Esc — fecha e volta ao gatilho |
| Seleção | Enter ↓ — abre a lista — ↑ ↓ PgUp PgDn — percorrem — digitar — filtra (com busca) ou pula — Backspace — remove o último chip (múltipla) — Esc — fecha sem mudar |
| Abas | ← → — trocam de aba — Home End — primeira e última — Enter — ativa, no modo manual |
| Modal | Tab — circula só dentro do modal — Esc — fecha — ao fechar — o foco volta para quem abriu |
| Toast | nunca — rouba o foco — Tab — alcança a ação (Desfazer) — foco ou hover — pausam o tempo |
| Tabela | Tab — vai aos botões de ordenar e às caixas — Enter — ordena a coluna — Espaço — marca a linha |
| Gráficos | Tab — foca o gráfico — ← → — percorrem os valores (anunciados) — ↑ ↓ — trocam de linha no heatmap — Home End — primeiro e último — Esc — esconde o tooltip |
| Busca ⌘K | ⌘ K / — abrem — ↑ ↓ — percorrem — Enter — vai — Esc — fecha e devolve o foco |
| Composer | Enter — envia — Shift Enter — quebra a linha — / — abre os comandos — Esc — fecha o menu ou para a resposta |
| App shell | ⌘ B — recolhe ou expande a sidebar — Esc — fecha a gaveta no celular — primeiro Tab — mostra “Pular para o conteúdo” |
| Tooltip | foco do teclado — mostra a dica — Esc — fecha sem mover o foco — hover — dá para apontar o balão sem ele sumir |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-theme-toggle" data-ra-theme="dark" aria-pressed="false" aria-label="Tema do exemplo: foco" data-ds-tooltip="Alternar claro e escuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Criar</button>

<button type="button" class="ds-btn ds-btn--secondary">Cancelar</button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Copiar link" data-ds-tooltip="Copiar link"><ds-icon name="link"></ds-icon></button>

<button type="button" class="ds-chip" aria-pressed="false" data-ra-chip="">Favoritos</button>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input"><span class="ds-choice__text"><span class="ds-choice__label">Lembrar</span></span></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" checked=""><span class="ds-choice__text"><span class="ds-choice__label">Avisos</span></span></label>

<div class="ds-field ds-field--sm"><ds-icon name="search"></ds-icon><input class="ds-field__input" type="search" placeholder="Buscar" aria-label="Buscar no exemplo"></div>
```

## Leitores de tela

O leitor de tela lê a estrutura, não o desenho. Marcos, nomes e regiões ao vivo fazem a tela ter sentido sem ver.

Marcos

Sidebar, navegação, trilha e conteúdo são marcos com nome. Quem usa leitor pula direto entre eles.

```html
<a class="ds-skip-link" href="#conteudo">Pular para o conteúdo</a>
<aside class="ds-sidebar" aria-label="Barra lateral">
  <nav class="ds-sidebar__nav" aria-label="Principal">…</nav>
</aside>
<div class="ds-main">
  <header class="ds-topbar">
    <nav class="ds-breadcrumb" aria-label="Você está em">…</nav>
  </header>
  <main id="conteudo" tabindex="-1">…</main>
</div>
```

Nomes

Todo controle tem nome. Botão só com ícone leva `aria-label`; o tooltip repete o mesmo texto para quem vê. Ícones ao lado de texto ficam escondidos.

```html
<!-- Botão só com ícone: o nome vem do aria-label; o tooltip mostra o mesmo texto -->
<button class="ds-icon-btn" aria-label="Copiar link" data-ds-tooltip="Copiar link">
  <ds-icon name="copy"></ds-icon>
</button>

<!-- Ícone decorativo ao lado de texto: escondido do leitor -->
<button class="ds-btn ds-btn--primary">
  <ds-icon name="plus"></ds-icon>Criar projeto
</button>
```

Regiões ao vivo

A região precisa existir antes da mudança — só o texto troca. Anuncie o resultado, não cada letra digitada.

```html
<!-- A região existe antes; só o texto muda -->
<p class="ds-visually-hidden" role="status" data-count></p>

count.textContent = '12 pedidos encontrados';
```

Texto só para o leitor

`.ds-visually-hidden` esconde da tela, não do leitor. Use para completar o que a cor ou o ícone dizem.

```html
<!-- Visível só para leitores de tela: completa o que a cor e o ícone dizem -->
<span class="ds-stat__change">
  <ds-icon name="trending-up"></ds-icon>+12,4%
  <span class="ds-visually-hidden">(melhora)</span>
</span>
```

### Qual região usar

| Região | Como anuncia | Onde usamos |
| --- | --- | --- |
| `role="status"` | educado: espera a pessoa terminar | Toast, contagem de filtros, “nenhum resultado”, anúncio ao navegar num gráfico |
| `role="log"` | educado, em ordem | Respostas novas na conversa |
| `role="alert"` | interrompe: use pouco | Falha que exige atenção agora. Erros de formulário preferem o resumo com foco |
| `aria-busy="true"` | avisa que está mudando | Gráfico recarregando, resposta sendo escrita |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Movimento

Movimento orienta, mas pode enjoar quem tem sensibilidade vestibular. Quando o sistema pede menos movimento, o Lume troca animação por mudança imediata — o resultado é o mesmo, sem o caminho.

Seu sistema está com o movimento normal. A coluna da direita mostra como fica para quem pede menos.

Com movimento — Movimento reduzido

Troca de tema

Entrada de gráfico

Escrevendo…

### O que muda

| Onde | Com movimento | Reduzido |
| --- | --- | --- |
| Troca de tema | Transição suave da página inteira | Troca na hora |
| Gráficos | Barras crescem, linhas se desenham | Aparecem prontos |
| Conversa | Pontinhos pulsam, a resposta aparece aos poucos | Pontinhos parados, resposta inteira de uma vez |
| Navegação na página | Rolagem suave até a seção | Salto direto |
| Menus, modais, toasts | Entram com um deslize curto | Só aparecem |

### Durações e curvas

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| duration.fast (`--ds-duration-fast`) | Hover, pequenas trocas de cor | 120ms | 120ms |
| duration.base (`--ds-duration-base`) | Menus, chips, campos | 200ms | 200ms |
| duration.slow (`--ds-duration-slow`) | Modais, painéis, troca de tema | 320ms | 320ms |
| duration.slower (`--ds-duration-slower`) | Entrada de gráficos | 480ms | 480ms |
| easing.standard (`--ds-easing-standard`) | A maioria das transições | cubic-bezier(0.2, 0, 0, 1) | cubic-bezier(0.2, 0, 0, 1) |
| easing.emphasized (`--ds-easing-emphasized`) | Entradas com mais presença | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-ra-replay="theme"><ds-icon name="refresh"></ds-icon>Trocar</button>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-ra-replay="chart"><ds-icon name="refresh"></ds-icon>Repetir</button>

<div class="ds-typing"><span class="ds-typing__dots" aria-hidden="true"><i></i><i></i><i></i></span><span>Lume está escrevendo</span></div>
```

## Pendências conhecidas

O que estava abaixo da regra e como foi resolvido, medido agora com os tokens atuais. Se algo voltar a falhar, o selo volta a “Aberta” sozinho — nada de esconder.

Contorno de campos

WCAG 1.4.11 · contraste de componentes, 3:1

Composer e o switch desligado usam `border.field`, que passa de 3:1 em todas as superfícies. Desde a 0.9, campo, seleção e chip que abre menu usam o fundo do menu que abrem (`bg.field`, igual ao `bg.raised`) com o contorno fino de `border.default` — escolha de visual: o contorno fica abaixo de 3:1, e quem identifica o campo é o rótulo acima dele e o contraste do fundo. Chips e botões com texto seguem com `border.control`.

Resolvida em 0.4.1. O build agora mede `border.field` contra as quatro superfícies a cada mudança.

Switch desligado

WCAG 1.4.11 · 3:1

A trilha desligada ganhou a borda de campo: o contorno do controle aparece em qualquer fundo, e a bolinha continua contrastando com a trilha.

Resolvida em 0.4.1, com o mesmo token dos campos — um ajuste resolveu os dois.

Texto apagado no tema claro

WCAG 1.4.3 · texto, 4,5:1

`fg.subtle` aparece em placeholders, legendas e marcas de eixo de 12–14 px. No claro ele é `refugio.600`, um passo acima de `fg.muted` (`refugio.650`), para os dois não ficarem iguais. Na 1.7.1 ele escureceu um passo para passar também sobre `bg.app`, onde ficam os exemplos.

Resolvida em 0.4.1. A checagem do build subiu de 3:1 para 4,5:1; na 1.7.1 entrou o par com bg.app.

Tooltip que some ao ser apontado

WCAG 1.4.13 · conteúdo em hover ou foco

Agora dá para levar o ponteiro até o balão sem ele sumir, ele fica aberto enquanto o gatilho estiver em hover ou foco, e Esc fecha sem mover o foco. Teste no botão de copiar em Foco e teclado.

Fora da regra, de propósito

`fg.disabled` fica perto de 2,62:1. A WCAG dispensa controles desativados — mas, se a pessoa precisa saber por que algo está desativado, diga em texto ao lado.

Marcação dos exemplos desta seção:

```html
<span class="ds-badge ds-badge--sm ds-badge--success"><ds-icon name="check"></ds-icon>Resolvida</span>

<div class="ds-table-wrap"><table class="ds-table ds-table--compact">
<thead><tr><th scope="col">Par</th><th scope="col" class="ds-table__num">Lume claro</th><th scope="col" class="ds-table__num">Lume escuro</th></tr></thead>
<tbody><tr><th scope="row">border.field sobre bg.canvas</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,35:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,58:1</span></td></tr><tr><th scope="row">border.field sobre bg.surface</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,57:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,50:1</span></td></tr><tr><th scope="row">border.field sobre bg.raised</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,57:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,38:1</span></td></tr><tr><th scope="row">border.field sobre bg.sunken</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,29:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,57:1</span></td></tr></tbody></table></div>

<div class="ds-table-wrap"><table class="ds-table ds-table--compact">
<thead><tr><th scope="col">Par</th><th scope="col" class="ds-table__num">Lume claro</th><th scope="col" class="ds-table__num">Lume escuro</th></tr></thead>
<tbody><tr><th scope="row">Borda da trilha (border.field) sobre bg.canvas</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,35:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,58:1</span></td></tr><tr><th scope="row">Bolinha (fg.muted) sobre a trilha</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5,49:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>6,73:1</span></td></tr></tbody></table></div>

<div class="ds-table-wrap"><table class="ds-table ds-table--compact">
<thead><tr><th scope="col">Par</th><th scope="col" class="ds-table__num">Lume claro</th><th scope="col" class="ds-table__num">Lume escuro</th></tr></thead>
<tbody><tr><th scope="row">fg.subtle sobre bg.app</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>4,50:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>6,67:1</span></td></tr><tr><th scope="row">fg.subtle sobre bg.canvas</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5,32:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5,94:1</span></td></tr><tr><th scope="row">fg.subtle sobre bg.surface</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5,98:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5,48:1</span></td></tr><tr><th scope="row">fg.subtle sobre bg.raised</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5,98:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>4,94:1</span></td></tr><tr><th scope="row">fg.subtle sobre bg.sunken</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5,08:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>6,36:1</span></td></tr></tbody></table></div>

<span class="ds-badge ds-badge--sm"><ds-icon name="info"></ds-icon>Nota</span>
```

## Checklist para cada tela

Antes de abrir o PR, passe por aqui. Marcar é só para você acompanhar — nada fica salvo.

### Acessibilidade de cada peça

Cada página de componente e padrão tem a própria seção de acessibilidade, com teclado e leitores de tela.

Marcação dos exemplos desta seção:

```html
<div class="ds-meter ds-meter--brand" role="meter" aria-valuemin="0" aria-valuemax="13" aria-valuenow="0" aria-valuetext="0 de 13" aria-label="Conferido nesta tela">
<div class="ds-meter__head">
<span class="ds-meter__label">Conferido nesta tela</span>
<span class="ds-meter__value"><strong>0</strong><span> de 13</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
</div>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Texto passa de 4,5:1 (3:1 se for grande) nos dois temas</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Nada depende só de cor: status tem ícone e texto; séries têm legenda</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Funciona com zoom de 200% e numa tela de 320 px sem rolagem lateral</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Imagens e ícones que informam têm texto alternativo; os decorativos, não</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Tudo funciona só com teclado, na ordem de leitura</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">O foco está sempre visível e nunca fica escondido atrás de algo fixo</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Ao fechar modal, menu ou gaveta, o foco volta para quem abriu</span></span></label>
```

## Como testar

Ferramenta automática pega uma parte; o resto pede usar a tela do jeito que outras pessoas usam. Dez minutos por tela já pegam a maioria dos problemas.

Só teclado

Guarde o mouse. Chegue a tudo com Tab, setas, Enter e Esc — e veja sempre onde está o foco.

Leitor de tela

VoiceOver no Mac (⌘ F5) ou NVDA no Windows. Navegue por títulos e marcos; ouça se os nomes fazem sentido.

Zoom e tela estreita

Zoom de 200% e janela de 320 px: nada pode sumir ou exigir rolagem lateral.

Alto contraste

Ative o contraste do sistema (forced-colors). Bordas e foco precisam continuar visíveis.

Visão de cor

No DevTools, Rendering › Emulate vision deficiencies. Status e séries precisam se ler sem a cor.

Movimento reduzido

Ligue nos ajustes do sistema (ou emule no DevTools) e confira que nada se anima sozinho.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="2.5"></rect><path d="M6 10h.01M9.3 10h.01M12.6 10h.01M15.9 10h.01M18 10h.01M7 14h10"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m20 20-4.2-4.2"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="4" width="18" height="12.5" rx="2.5"></rect><path d="M8.5 20.5h7M12 16.5v4"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3 12h4l2.5-6 5 12L17 12h4"></path></svg>
```
