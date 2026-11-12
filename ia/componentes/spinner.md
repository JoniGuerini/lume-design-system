# Spinner

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/spinner

Diz que algo está acontecendo numa espera curta. Herda a cor do texto, então funciona em qualquer lugar, inclusive dentro de botões.

Em números: JavaScript: 0 · tamanhos: 16 · 20 · 32 · volta: 0,8 s · papel ARIA: status.

## Exemplo

```html
<span class="ds-spinner" role="status" aria-label="Carregando"></span>
```

## Variantes

Sempre que couber, diga o que está acontecendo.

Carregando os pedidos…

Com texto `ds-spinner` — O melhor para esperas de mais de um segundo.

Dentro do botão `aria-busy` — O botão fica ocupado e não aceita outro clique.

Tamanhos `--sm · --lg` — 16, 20 e 32 px. O maior serve para uma área inteira.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-btn ds-btn--primary" aria-busy="true"><span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>Salvando</button>

<span class="ds-spinner ds-spinner--sm" role="status" aria-label="Carregando"></span>

<span class="ds-spinner" role="status" aria-label="Carregando"></span>

<span class="ds-spinner ds-spinner--lg" role="status" aria-label="Carregando"></span>
```

## Acessibilidade

Um desenho que gira não diz nada sozinho.

- Com nome — Sozinho, leva `role="status"` e `aria-label`. Ao lado de um texto, use `aria-hidden`.
- Botão ocupado — `aria-busy="true"` impede cliques repetidos e o texto diz o que acontece: “Salvando”.
- Movimento reduzido — O anel para de girar. Por isso, o texto importa ainda mais.

## Tokens usados

A cor vem do texto em volta; o resto é forma.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.fg.default (`--ds-color-fg-default`) | Cor mais comum | #2B3847 | #F3EDE5 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | No botão primário | #F8FAFD | #1D2734 |
| radius.full (`--ds-radius-full`) | Anel | 9999 px | 9999 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** de 1 a 10 segundos. Salvar, carregar um painel, confirmar um pagamento.
- **Evite:** espera instantânea. Abaixo de um segundo, nada: um spinner que pisca atrapalha mais que ajuda.
- **Dica:** Sabe a forma? Skeleton. Quando já se sabe como o conteúdo vai ficar, o Skeleton parece mais rápido.
