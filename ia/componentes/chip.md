# Chip

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/chip

Pílula com contorno para filtrar, escolher e mostrar seleções. Mais leve que um botão, pensada para aparecer em grupo.

Em números: tipos: 3 · tamanhos: 2 · estados: 5 · altura (md / sm): 36/32.

## Exemplo

```html
<button type="button" class="ds-chip" aria-pressed="true">
  <span class="ds-chip__check"><ds-icon name="check" size="14"></ds-icon></span>
  Escuro
</button>
```

## Tipos

O mesmo visual, três trabalhos diferentes. Todos funcionam aqui.

Filtro `aria-pressed` — Liga e desliga um critério. Vários podem ficar ligados ao mesmo tempo.

Ordenado por: Recentes

Seletor `aria-haspopup="menu"` — Mostra a escolha atual e abre um menu para trocar.

Removível `ds-chip--removable` — Mostra algo que a pessoa adicionou — e deixa tirar.

Marcação dos exemplos desta seção:

```html
<div class="ds-chip-group" role="group" aria-label="Plataformas" data-filter-demo="">
<button type="button" class="ds-chip" aria-pressed="true"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Web</button><button type="button" class="ds-chip" aria-pressed="false"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>iOS</button><button type="button" class="ds-chip" aria-pressed="false"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Android</button>
</div>

<button data-sort-chip="" type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-26"><span class="ds-chip__icon"><ds-icon name="filter"></ds-icon></span>Recentes<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<div class="ds-chip-group" role="list" aria-label="Etiquetas" data-tags=""><span role="listitem"><span class="ds-chip ds-chip--removable">Design<button type="button" class="ds-chip__remove" aria-label="Remover Design"><ds-icon name="x"></ds-icon></button></span></span><span role="listitem"><span class="ds-chip ds-chip--removable">Tokens<button type="button" class="ds-chip__remove" aria-label="Remover Tokens"><ds-icon name="x"></ds-icon></button></span></span><span role="listitem"><span class="ds-chip ds-chip--removable">Acessibilidade<button type="button" class="ds-chip__remove" aria-label="Remover Acessibilidade"><ds-icon name="x"></ds-icon></button></span></span><span role="listitem"><span class="ds-chip ds-chip--removable">Movimento<button type="button" class="ds-chip__remove" aria-label="Remover Movimento"><ds-icon name="x"></ds-icon></button></span></span></div>
```

## Filtros em grupo

Filtros combinam: ligue mais de um. Nenhum ligado é o mesmo que todos.

Mostrando 6 de 6

- Botão — Pronto
- Chip — Pronto
- Menu — Em revisão
- Campo de texto — Em revisão
- Tabela — Em andamento
- Modal — Planejado

Marcação dos exemplos desta seção:

```html
<div class="ds-chip-group" role="group" aria-label="Filtrar por status" data-status-filter="">
<button type="button" class="ds-chip ds-chip--sm" aria-pressed="false" data-status="ready"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Prontos</button><button type="button" class="ds-chip ds-chip--sm" aria-pressed="false" data-status="review"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Em revisão</button><button type="button" class="ds-chip ds-chip--sm" aria-pressed="false" data-status="progress"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Em andamento</button><button type="button" class="ds-chip ds-chip--sm" aria-pressed="false" data-status="planned"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Planejados</button>
</div>

<button type="button" class="ds-inline-action" data-status-clear="" hidden=""><ds-icon name="x"></ds-icon>Limpar filtros</button>
```

## Tamanhos

Médio acompanha botões e campos; pequeno vai em barras de filtro e dentro de cards.

Médio `padrão` — Altura 36 px · texto label-sm · 13 px · recuo 16 px, 12 px do lado do ícone ou da seta

Pequeno `ds-chip--sm` — Altura 32 px · texto caption · 12 px · recuo 12 px, 8 px do lado do ícone ou da seta

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-chip" aria-pressed="true"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Filtro</button>

<button type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="false"><span class="ds-chip__icon"><ds-icon name="filter"></ds-icon></span>Seletor<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<span class="ds-chip ds-chip--removable">Etiqueta<button type="button" class="ds-chip__remove" aria-label="Remover Etiqueta"><ds-icon name="x"></ds-icon></button></span>

<button type="button" class="ds-chip ds-chip--sm" aria-pressed="true"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Filtro</button>

<button type="button" class="ds-chip ds-chip--sm" aria-haspopup="menu" aria-expanded="false"><span class="ds-chip__icon"><ds-icon name="filter"></ds-icon></span>Seletor<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<span class="ds-chip ds-chip--sm ds-chip--removable">Etiqueta<button type="button" class="ds-chip__remove" aria-label="Remover Etiqueta"><ds-icon name="x"></ds-icon></button></span>
```

## Estados

Selecionado ganha fundo e contorno mais forte — e, no filtro, a marca de check, para não depender só da cor. Force um estado com `data-state`.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-chip" aria-pressed="false"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Web</button>

<button type="button" class="ds-chip" aria-pressed="true"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Web</button>

<button type="button" class="ds-chip" aria-pressed="false" disabled=""><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Web</button>

<button type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="false">Recentes<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="true">Recentes<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="false" disabled="">Recentes<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<span class="ds-chip ds-chip--removable">Web<button type="button" class="ds-chip__remove" aria-label="Remover Web"><ds-icon name="x"></ds-icon></button></span>

<span class="ds-chip ds-chip--removable" aria-disabled="true">Web<button type="button" class="ds-chip__remove" aria-label="Remover Web"><ds-icon name="x"></ds-icon></button></span>
```

## Acessibilidade

Cada tipo tem a sua semântica. O visual é o mesmo; o que o leitor de tela ouve, não.

- Filtro é um botão de alternância — Enter Espaço — `<button aria-pressed>`: o leitor anuncia “Web, botão de alternância, pressionado”.
- Seletor abre um menu — ↓ Esc — `aria-haspopup="menu"` e `aria-expanded` — o `createMenu` cuida dos dois e das setas.
- Remover tem nome — O botão de remover diz o que remove (“Remover Tokens”). Depois, o foco vai para a etiqueta vizinha.
- Grupo com nome — Envolva os chips em `role="group"` com `aria-label` (“Filtrar por status”).
- Não só cor — O filtro ligado mostra um check, além do fundo. O resultado do filtro é anunciado numa região viva.
- Alvo confortável — 36 px no médio; o pequeno (32 px) deve ficar em barras com espaço entre os chips.

## Tokens usados

Tudo o que o chip consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.border.control (`--ds-color-border-control`) | Contorno | #3E516633 | #FFFFFF21 |
| color.border.strong (`--ds-color-border-strong`) | Contorno no hover e selecionado | #3E51664D | #FFFFFF29 |
| color.bg.hover (`--ds-color-bg-hover`) | Hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Selecionado e aberto | #3E516612 | #C0CAD61A |
| color.fg.default (`--ds-color-fg-default`) | Rótulo | #2B3847 | #F3EDE5 |
| color.fg.brand (`--ds-color-fg-brand`) | Ícone à esquerda | #3E5166 | #DAE0E8 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Seta e botão de remover | #53657A | #9C9792 |
| text.label-sm (`--ds-text-label-sm`) | Rótulo (médio) | 13/18 · medium | 13/18 · medium |
| text.caption (`--ds-text-caption`) | Rótulo (pequeno) | 12/16 · regular | 12/16 · regular |
| radius.full (`--ds-radius-full`) | Forma de pílula | 9999 px | 9999 px |
| duration.fast (`--ds-duration-fast`) | Transição | 120ms | 120ms |
| opacity.disabled (`--ds-opacity-disabled`) | Desativado | 0.44 | 0.44 |

## Uso

Três regras para chips que ajudam em vez de enfeitar.

- **Faça:** chips para escolhas rápidas. Filtros, ordenação, etiquetas — coisas que mudam a vista, não que executam algo.
- **Evite:** chip como botão de ação. “Publicar”, “Excluir”, “Enviar” são ações: use botão.
- **Dica:** Até seis por grupo. Com mais opções que isso, troque por um seletor que abre menu — cabe numa linha e se lê melhor.
