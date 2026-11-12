# Botão

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/botao

Dispara uma ação. Plano e direto: a cor fica para a ação principal, o resto se apoia em contorno e transparência.

Em números: variantes: 5 · tamanhos: 3 · estados: 5 · contraste do primário: 7,80:1.

## Exemplo

```html
<button type="button" class="ds-btn ds-btn--primary">
  <ds-icon name="pencil"></ds-icon>
  Criar componente
</button>
```

## Variantes

A variante diz o peso da ação. Quanto mais importante, mais cor — e só uma ação ganha a cor da marca.

Primário `ds-btn--primary` — A ação principal da tela. Uma por vez.

Secundário `ds-btn--secondary` — Alternativa à principal: cancelar, voltar, ações de apoio.

Ghost `ds-btn--ghost` — Ações discretas em barras, cabeçalhos e listas.

Sutil `ds-btn--subtle` — Apoio com um pouco mais de presença que o ghost.

Perigo `ds-btn--danger` — Ações destrutivas e irreversíveis — sempre com confirmação.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="pencil"></ds-icon>Criar</button>

<button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="pencil"></ds-icon>Criar</button>

<button type="button" class="ds-btn ds-btn--ghost"><ds-icon name="pencil"></ds-icon>Criar</button>

<button type="button" class="ds-btn ds-btn--subtle"><ds-icon name="pencil"></ds-icon>Criar</button>

<button type="button" class="ds-btn ds-btn--danger">Excluir</button>
```

## Tamanhos

Médio é o padrão. Pequeno para barras densas e tabelas; grande para chamadas e telas de toque.

- Tamanho: Pequeno
- Altura: size.control.sm · 32 px
- Padding: 12 px
- Texto: text.label-sm
- Raio: radius.sm · 8 px
- Classe: ds-btn--sm

- Tamanho: Médio padrão
- Altura: size.control.md · 40 px
- Padding: 16 px
- Texto: text.label-md
- Raio: radius.md · 12 px
- Classe: —

- Tamanho: Grande
- Altura: size.control.lg · 48 px
- Padding: 20 px
- Texto: text.label-lg
- Raio: radius.md · 12 px
- Classe: ds-btn--lg

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-btn ds-btn--primary ds-btn--sm"><ds-icon name="pencil"></ds-icon>Criar</button>

<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="pencil"></ds-icon>Criar</button>

<button type="button" class="ds-btn ds-btn--primary ds-btn--lg"><ds-icon name="pencil"></ds-icon>Criar</button>
```

## Estados

Todas as variantes reagem do mesmo jeito: hover clareia ou realça, pressionado escurece, foco ganha o anel. Para documentar e testar, force um estado com `data-state`.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-btn ds-btn--primary">Salvar</button>

<button type="button" class="ds-btn ds-btn--primary" disabled="">Salvar</button>

<button type="button" class="ds-btn ds-btn--secondary">Salvar</button>

<button type="button" class="ds-btn ds-btn--secondary" disabled="">Salvar</button>

<button type="button" class="ds-btn ds-btn--ghost">Salvar</button>

<button type="button" class="ds-btn ds-btn--ghost" disabled="">Salvar</button>

<button type="button" class="ds-btn ds-btn--subtle">Salvar</button>

<button type="button" class="ds-btn ds-btn--subtle" disabled="">Salvar</button>
```

## Anatomia

Três partes. O ícone é opcional; o rótulo, nunca — exceto no botão de ícone.

- 1 — Contêiner — Altura `size.control.*`, raio `radius.md`, padding lateral de 12 a 20 px. Borda de 1 px sempre presente (transparente quando não aparece), para os tamanhos não mudarem.
- 2 — Ícone opcional — 16 a 20 px, a 8 px do rótulo, herdando a cor. À esquerda para ações; à direita só para “avançar”.
- 3 — Rótulo — Estilo `text.label-*`, numa linha só. Comece com verbo: “Salvar alterações”, não “OK”.

Marcação dos exemplos desta seção:

```html
<span class="ds-btn ds-btn--primary ds-btn--lg">
<span><ds-icon name="pencil"></ds-icon></span>
<span>Criar componente</span>
</span>
```

## Botão de ícone

Para ações reconhecíveis sem texto — fechar, buscar, mais opções. Sem fundo por padrão; passe o mouse para ver a dica.

Padrão `ds-icon-btn`

Apagado `ds-icon-btn--muted`

Contorno `ds-icon-btn--outline`

Sutil `ds-icon-btn--subtle`

Redondo `ds-icon-btn--round`

```html
<button type="button" class="ds-icon-btn" aria-label="Fechar" data-ds-tooltip="Fechar">
  <ds-icon name="x"></ds-icon>
</button>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm" aria-label="Fechar" data-ds-tooltip="Fechar" data-ds-tooltip-placement="bottom"><ds-icon name="x"></ds-icon></button>

<button type="button" class="ds-icon-btn " aria-label="Fechar" data-ds-tooltip="Fechar" data-ds-tooltip-placement="bottom"><ds-icon name="x"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--lg" aria-label="Fechar" data-ds-tooltip="Fechar" data-ds-tooltip-placement="bottom"><ds-icon name="x"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted ds-icon-btn--sm" aria-label="Mais opções" data-ds-tooltip="Mais opções" data-ds-tooltip-placement="bottom"><ds-icon name="more-horizontal"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted " aria-label="Mais opções" data-ds-tooltip="Mais opções" data-ds-tooltip-placement="bottom"><ds-icon name="more-horizontal"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted ds-icon-btn--lg" aria-label="Mais opções" data-ds-tooltip="Mais opções" data-ds-tooltip-placement="bottom"><ds-icon name="more-horizontal"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline ds-icon-btn--sm" aria-label="Recolher menu" data-ds-tooltip="Recolher menu" data-ds-tooltip-placement="bottom"><ds-icon name="panel-left"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline " aria-label="Recolher menu" data-ds-tooltip="Recolher menu" data-ds-tooltip-placement="bottom"><ds-icon name="panel-left"></ds-icon></button>
```

## Acessibilidade

O botão já vem acessível. Estas são as decisões que continuam sendo suas.

- Elemento certo — Use `<button>` para ações e `<a class="ds-btn">` para navegar. O elemento traz teclado e leitor de tela de graça.
- Teclado — Tab Enter Espaço — Tab leva o foco; Enter e Espaço acionam.
- Foco sempre visível — Anel de 2 px na cor de foco, com 2 px de respiro — nos dois temas, em todas as variantes.
- Contraste verificado — Texto do primário sobre a marca: 7,80:1 no Lume claro e 9,09:1 no Lume escuro, acima do mínimo de 4,5:1.
- Só ícone? Dê um nome — Coloque `aria-label` no botão e uma dica com o mesmo texto.
- Desativado com cuidado — `disabled` tira o botão do foco. Se a pessoa precisa descobrir a ação, use `aria-disabled="true"` e explique o motivo.

## Tokens usados

Tudo o que o botão consome. Mudou o token, mudou o botão — em todas as telas.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Altura (médio) | 40 px | 40 px |
| space.200 (`--ds-space-200`) | Padding lateral (médio) | 16 px | 16 px |
| space.100 (`--ds-space-100`) | Espaço entre ícone e rótulo | 8 px | 8 px |
| radius.md (`--ds-radius-md`) | Raio | 12 px | 12 px |
| text.label-md (`--ds-text-label-md`) | Rótulo | 14/20 · medium | 14/20 · medium |
| color.brand.solid (`--ds-color-brand-solid`) | Fundo do primário | #3E5166 | #C0CAD6 |
| color.brand.solid-hover (`--ds-color-brand-solid-hover`) | Hover do primário | #2B3847 | #DAE0E8 |
| color.brand.solid-pressed (`--ds-color-brand-solid-pressed`) | Primário pressionado | #232F3D | #93A0B0 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Rótulo do primário | #F8FAFD | #1D2734 |
| color.border.control (`--ds-color-border-control`) | Contorno do secundário | #3E516633 | #FFFFFF21 |
| color.bg.hover (`--ds-color-bg-hover`) | Hover do secundário e ghost | #3E51660D | #FFFFFF0D |
| color.bg.muted (`--ds-color-bg-muted`) | Fundo do sutil | #DAE0E8 | #3D3B38 |
| color.danger.solid (`--ds-color-danger-solid`) | Fundo do perigo | #C13834 | #FF9087 |
| color.border.focus (`--ds-color-border-focus`) | Anel de foco | #53657A | #C0CAD6 |
| duration.fast (`--ds-duration-fast`) | Transição de cor | 120ms | 120ms |
| opacity.disabled (`--ds-opacity-disabled`) | Desativado | 0.44 | 0.44 |

## Uso

Três regras que resolvem a maioria das telas.

- **Faça:** uma ação primária por tela. A cor guia o olho. Uma ação principal, as outras em contorno ou ghost.
- **Evite:** tudo primário. Se tudo chama atenção, nada chama. A pessoa não sabe por onde começar.
- **Dica:** Rótulo com verbo. O rótulo diz o que vai acontecer. Ninguém precisa ler o resto da tela para decidir.
