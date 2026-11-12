# Badge

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/badge

Rótulo curto de status ou de contagem. Pequeno, discreto e sempre com significado — nunca enfeite.

Em números: tons: 6 · tamanhos: 2 · altura (md / sm): 24/20 · interativo: não.

## Exemplo

```html
<span class="ds-badge ds-badge--success">
  <span class="ds-badge__dot"></span>
  Pronto
</span>
```

## Tons

O tom diz o tipo de status. Fundo suave, texto forte e contorno fino — legível nos dois temas, sem gritar.

Neutro `ds-badge` — Estado sem urgência: rascunho, arquivado, planejado. — Contraste 5,86:1 Lume claro · 8,29:1 Lume escuro

Marca `ds-badge--brand` — Raro. Algo recém-adicionado dentro de uma lista — nunca como chamada. — Contraste 7,25:1 Lume claro · 9,38:1 Lume escuro

Sucesso `ds-badge--success` — Concluído, ativo, aprovado. — Contraste 6,33:1 Lume claro · 8,33:1 Lume escuro

Aviso `ds-badge--warning` — Precisa de atenção, mas não bloqueia. — Contraste 6,43:1 Lume claro · 8,99:1 Lume escuro

Perigo `ds-badge--danger` — Erro ou bloqueio que pede ação. — Contraste 5,02:1 Lume claro · 7,93:1 Lume escuro

Informação `ds-badge--info` — Contexto neutro: beta, em análise. — Contraste 4,56:1 Lume claro · 8,19:1 Lume escuro

Marcação dos exemplos desta seção:

```html
<span class="ds-badge">Rascunho</span>

<span class="ds-badge"><span class="ds-badge__dot"></span>Rascunho</span>

<span class="ds-badge ds-badge--sm">Rascunho</span>

<span class="ds-badge ds-badge--brand">Novo</span>

<span class="ds-badge ds-badge--brand"><span class="ds-badge__dot"></span>Novo</span>

<span class="ds-badge ds-badge--brand ds-badge--sm">Novo</span>

<span class="ds-badge ds-badge--success">Pronto</span>

<span class="ds-badge ds-badge--success"><span class="ds-badge__dot"></span>Pronto</span>
```

## Tamanhos

Médio ao lado de texto comum; pequeno em tabelas, listas densas e cabeçalhos de card.

Médio `padrão` — Altura 24 px · texto label-sm · 13 px

Pequeno `ds-badge--sm` — Altura 20 px · texto caption · 12 px

Marcação dos exemplos desta seção:

```html
<span class="ds-badge ds-badge--success"><span class="ds-badge__dot"></span>Pronto</span>

<span class="ds-badge ds-badge--warning">Em revisão</span>

<span class="ds-badge ds-badge--count">12</span>

<span class="ds-badge ds-badge--success ds-badge--sm"><span class="ds-badge__dot"></span>Pronto</span>

<span class="ds-badge ds-badge--warning ds-badge--sm">Em revisão</span>

<span class="ds-badge ds-badge--sm ds-badge--count">12</span>
```

## Contagem

`ds-badge--count` centraliza o número e mantém a largura mínima de um círculo. Zero não aparece; acima de 99, mostre “99+”.

- Caixa de entrada — 12
- Comentários — 99+
- Aprovações — 3
- Arquivados — sem badge

12 — número exato até 99 — 99+ — acima de 99 — — — zero: sem badge

## Onde usar

Badge acompanha algo — uma linha, um título, um item. Ele nunca está sozinho na tela.

Linha de lista ou tabela — O status de cada item, sempre na mesma coluna.

Integração com o Figma — Beta

Sincroniza tokens e componentes com a biblioteca.

Ao lado de um título — Qualifica o que está escrito: beta, em teste.

Contagem num item — Quanto há para ver, na ponta direita.

Marcação dos exemplos desta seção:

```html
<span class="ds-badge ds-badge--success ds-badge--sm">Pronto</span>

<span class="ds-badge ds-badge--warning ds-badge--sm">Em revisão</span>

<span class="ds-badge ds-badge--sm">Planejado</span>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3.5 13h5l1.5 2.5h4l1.5-2.5h5"></path><path d="M6 4.5h12l2.5 8.5v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V13z"></path></svg>

<span class="ds-badge ds-badge--sm ds-badge--count">3</span>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<span class="ds-badge ds-badge--brand ds-badge--sm ds-badge--count">99+</span>
```

## Acessibilidade

Badge é texto. Trate como texto.

- Cor nunca sozinha — O status está escrito (“Em revisão”). O ponto e o tom só reforçam.
- Contraste verificado — O texto de cada tom passa de 4,5:1 sobre o próprio fundo — sucesso: 6,33:1 no Lume claro e 8,33:1 no Lume escuro.
- Não é interativo — Badge não recebe clique nem foco. Se precisa filtrar ou abrir algo, use chip, link ou botão.
- Contagem com contexto — Um “12” solto não diz nada ao leitor de tela. Complete com texto oculto: “12 não lidas”.
- Mudou? Anuncie — Quando o status muda sem recarregar, coloque a mensagem numa região `aria-live="polite"`.
- Curto de verdade — Uma ou duas palavras. Frase inteira vira texto comum, não badge.

## Tokens usados

Cada tom usa o trio subtle / fg / border do seu status. Aqui, o neutro e o de sucesso como exemplo.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.selected (`--ds-color-bg-selected`) | Fundo (neutro) | #3E516612 | #C0CAD61A |
| color.fg.muted (`--ds-color-fg-muted`) | Texto (neutro) | #46586E | #CEC8C1 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno (neutro) | #3E516624 | #FFFFFF0F |
| color.success.subtle (`--ds-color-success-subtle`) | Fundo (sucesso) | #EFFAF1 | #72CB8B21 |
| color.success.fg (`--ds-color-success-fg`) | Texto (sucesso) | #0F6939 | #97DCA8 |
| color.success.border (`--ds-color-success-border`) | Contorno (sucesso) | #BDEAC6 | #72CB8B4D |
| color.brand.subtle (`--ds-color-brand-subtle`) | Fundo (marca) | #EEF2F6 | #C0CAD624 |
| color.brand.fg (`--ds-color-brand-fg`) | Texto (marca) | #3E5166 | #DAE0E8 |
| text.label-sm (`--ds-text-label-sm`) | Texto (médio) | 13/18 · medium | 13/18 · medium |
| text.caption (`--ds-text-caption`) | Texto (pequeno) | 12/16 · regular | 12/16 · regular |
| radius.full (`--ds-radius-full`) | Forma de pílula | 9999 px | 9999 px |

## Uso

Badge é informação. Se não informa nada, não é badge.

- **Faça:** status e contagens. Diz o estado de algo ou quanto há dele, numa ou duas palavras.
- **Evite:** badge decorativo. Badge não é chamada nem enfeite de herói. Novidade se escreve no texto ou vira um link de verdade.
- **Dica:** Um por linha. Mais de um badge no mesmo item compete pela atenção. Escolha o status que importa agora.
