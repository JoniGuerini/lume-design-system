# Estado vazio

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/estado-vazio

O que aparece no lugar de uma lista ou de um painel sem nada: o que falta, por quê e o próximo passo. Para o texto de cada situação (primeiro uso, sem resultados, erro), veja o padrão Estados vazios.

Em números: tamanhos: 3 · tons: 4 · partes: 5 · papel ARIA: status.

## Exemplo

```html
<div class="ds-empty" role="status">
  <span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
  <p class="ds-empty__title">Nenhum cliente ainda</p>
  <p class="ds-empty__description">Cadastre o primeiro para marcar sessões e emitir recibos.</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--primary">Cadastrar cliente</button>
  </div>
</div>

// React
<EmptyState
  icon="users"
  title="Nenhum cliente ainda"
  description="Cadastre o primeiro para marcar sessões e emitir recibos."
  actions={<Button variant="primary">Cadastrar cliente</Button>}
/>
```

## Tamanhos

Do tamanho do lugar que ficou vazio: a lista inteira, um painel ou uma linha.

Página `ds-empty` — A lista ou a tela inteira. O padrão.

Compacto `ds-empty--compact` — Dentro de um painel ou de um cartão.

Em linha `ds-empty--inline` — Numa linha de tabela ou de lista, sem botão.

Sem contorno `ds-empty--plain` — Quando já está dentro de um cartão, que faz o contorno.

Marcação dos exemplos desta seção:

```html
<div class="ds-empty" role="status">
<span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
<p class="ds-empty__title">Nenhum cliente ainda</p>
<p class="ds-empty__description">Cadastre o primeiro para marcar sessões e emitir recibos.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Cadastrar cliente</button></div>
</div>

<div class="ds-empty ds-empty--compact" role="status">
<span class="ds-empty__icon"><ds-icon name="calendar"></ds-icon></span>
<p class="ds-empty__title">Nenhuma sessão hoje</p>
<p class="ds-empty__description">A agenda do dia aparece aqui.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary ds-btn--sm"><ds-icon name="plus"></ds-icon>Marcar sessão</button></div>
</div>

<div class="ds-empty ds-empty--inline" role="status">
<span class="ds-empty__icon"><ds-icon name="search-x"></ds-icon></span>
<p class="ds-empty__title">Nada nesta semana</p>
<p class="ds-empty__description">Troque o período para ver mais.</p>
</div>

<div class="ds-card"><div class="ds-empty ds-empty--compact ds-empty--plain" role="status">
<span class="ds-empty__icon"><ds-icon name="file-text"></ds-icon></span>
<p class="ds-empty__title">Nenhuma nota</p>
<p class="ds-empty__description">As notas da sessão ficam aqui.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary ds-btn--sm"><ds-icon name="plus"></ds-icon>Escrever nota</button></div>
</div></div>
```

## Tons

O tom vai só no ícone. Erro e atenção pedem uma ação de recuperação; apagado é para o que não depende da pessoa.

Neutro `—`

Erro `ds-empty--danger`

Atenção `ds-empty--warning`

Apagado `ds-empty--muted`

Marcação dos exemplos desta seção:

```html
<div class="ds-empty ds-empty--compact" role="status">
<span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
<p class="ds-empty__title">Neutro</p>
</div>

<div class="ds-empty ds-empty--compact ds-empty--danger" role="status">
<span class="ds-empty__icon"><ds-icon name="alert-circle"></ds-icon></span>
<p class="ds-empty__title">Erro</p>
</div>

<div class="ds-empty ds-empty--compact ds-empty--warning" role="status">
<span class="ds-empty__icon"><ds-icon name="wifi-off"></ds-icon></span>
<p class="ds-empty__title">Atenção</p>
</div>

<div class="ds-empty ds-empty--compact ds-empty--muted" role="status">
<span class="ds-empty__icon"><ds-icon name="lock"></ds-icon></span>
<p class="ds-empty__title">Apagado</p>
</div>
```

## Código

Só CSS. No React, `EmptyState` monta a mesma marcação.

```html
<div class="ds-empty" role="status">
  <span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
  <p class="ds-empty__title">Nenhum cliente ainda</p>
  <p class="ds-empty__description">Cadastre o primeiro para marcar sessões e emitir recibos.</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--primary">Cadastrar cliente</button>
  </div>
</div>

// React
<EmptyState
  icon="users"
  title="Nenhum cliente ainda"
  description="Cadastre o primeiro para marcar sessões e emitir recibos."
  actions={<Button variant="primary" icon="plus">Cadastrar cliente</Button>}
/>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

O vazio também é conteúdo, e é dito.

- Anunciado sem interromper — `role="status"`: quando uma busca esvazia a lista, o leitor de tela ouve o título.
- Ícone decorativo — O ícone não é lido: o título diz tudo.
- Ação com verbo — “Cadastrar cliente”, não “Clique aqui”: o botão faz sentido fora do contexto.

## Tokens usados

Tudo o que o estado vazio consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.sunken (`--ds-color-bg-sunken`) | Fundo | #E8EDF3 | #151412 |
| color.border.default (`--ds-color-border-default`) | Contorno tracejado | #3E516633 | #FFFFFF1A |
| color.bg.muted (`--ds-color-bg-muted`) | Fundo do ícone | #DAE0E8 | #3D3B38 |
| color.fg.brand (`--ds-color-fg-brand`) | Ícone | #3E5166 | #DAE0E8 |
| text.heading-md (`--ds-text-heading-md`) | Título | 21/28 · regular | 21/28 · regular |
| radius.2xl (`--ds-radius-2xl`) | Cantos | 28 px | 28 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** sempre um próximo passo. Criar, limpar a busca, tentar de novo. Vazio sem saída é beco.
- **Evite:** ilustração no lugar do texto. O ícone acompanha; quem explica é o título e a descrição.
- **Dica:** O texto de cada situação. Primeiro uso, sem resultados, erro, sem permissão, offline: o padrão Estados vazios tem o texto de cada um.
