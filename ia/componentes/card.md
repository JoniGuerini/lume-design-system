# Card

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/card

A superfície básica para agrupar conteúdo. Separa uma coisa da outra com fundo e contorno finos, sem sombra.

Em números: JavaScript: 0 · cantos: 20 px · respiro: 24 px · sombra: nenhuma.

## Exemplo

```html
<div class="ds-card">
  <p class="ds-card__title">Relatório mensal</p>
  <p class="ds-card__text">Receita, novos clientes e o que mudou desde o mês passado.</p>
</div>
```

## Variantes

Um card é só um contêiner; o clicável é um link inteiro.

Simples `ds-card` — Agrupa conteúdo relacionado.

Clicável `ds-card--link` — O contorno reforça no hover. O destino é um só.

Com ação `dentro do card` — Botões dentro de um card comum, sem o card inteiro ser link.

Marcação dos exemplos desta seção:

```html
<div class="ds-card"><p class="ds-card__title">Relatório mensal</p><p class="ds-card__text">Receita, novos clientes e o que mudou desde o mês passado.</p></div>

<a class="ds-card ds-card--link" href="#/componentes/card" data-inert=""><p class="ds-card__title">Relatório mensal</p><p class="ds-card__text">Receita, novos clientes e o que mudou desde o mês passado.</p></a>

<div class="ds-card"><p class="ds-card__title">Relatório mensal</p><p class="ds-card__text">Receita, novos clientes e o que mudou desde o mês passado.</p><div><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm"><ds-icon name="download"></ds-icon>Baixar</button></div></div>
```

## Estados

Só o clicável muda. Hover e foco podem ser forçados com `data-state`.

Marcação dos exemplos desta seção:

```html
<a class="ds-card ds-card--link" href="#/componentes/card"><p class="ds-card__title">Relatório mensal</p><p class="ds-card__text">Receita, novos clientes e o que mudou desde o mês passado.</p></a>
```

## Acessibilidade

O card em si não é nada para o leitor de tela; o conteúdo é que importa.

- Títulos em ordem — Se o card começa uma seção, use um título real, no nível certo da página.
- Link único — No clicável, o `a` é o card inteiro. Não coloque botões ou outros links dentro dele.
- Foco — Tab Enter — O anel aparece em volta do card inteiro, pelo teclado.

## Tokens usados

Tudo o que o card consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fundo | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno | #3E516624 | #FFFFFF0F |
| color.border.strong (`--ds-color-border-strong`) | Contorno no hover | #3E51664D | #FFFFFF29 |
| radius.xl (`--ds-radius-xl`) | Cantos | 20 px | 20 px |
| text.heading-sm (`--ds-text-heading-sm`) | Título | 17/24 · semibold | 17/24 · semibold |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** grupos que se repetem. Uma grade de projetos, resultados ou opções.
- **Evite:** card dentro de card. Camadas demais pesam. Dentro de um card, separe com espaço ou com uma linha.
- **Dica:** Card, Painel ou Modal?. Card agrupa; Painel é a superfície de uma tarefa; Modal interrompe.
