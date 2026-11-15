# Avaliação

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/avaliacao

Estrelas para dar uma nota ou mostrar a média. Para dar nota, cada estrela é um rádio: o formulário envia o valor sem código.

Em números: formas: 2 · tamanhos: 3 · meia estrela: ao mostrar · papel ARIA: radiogroup.

## Exemplo

```html
<div class="ds-rating" aria-label="Como você avalia esta página?"></div>

<script type="module">
  import { createRating } from 'https://lumeui.dev/v/1.4/lume.js';
  createRating(document.querySelector('.ds-rating'), { name: 'nota', value: 4 });
</script>
```

## Variantes

Dar nota usa `createRating`. Só mostrar usa `ratingHtml`, que aceita qualquer decimal e corta a estrela no ponto certo.

Como você avalia esta página?

Dar nota `createRating` — Num formulário, com o nome do campo. A pergunta é o rótulo do grupo.

Só mostrar `ratingHtml` — Média com meia estrela, o número ao lado e quantas notas.

Tamanhos `ds-rating--sm · ds-rating--lg` — 16 px em listas e cards, 20 px no padrão, 28 px quando a nota é o assunto da tela.

## Estados

A estrela acesa usa a cor do indicador. Com o mouse, as estrelas até a do mouse acendem antes do clique.

## Código

Para dar nota, um elemento vazio; o JavaScript põe as estrelas. Para mostrar, a marcação vem pronta.

```html
<div class="ds-rating" aria-label="Como você avalia esta página?"></div>
<span data-media></span>

<script type="module">
  import { createRating, ratingHtml } from 'https://lumeui.dev/v/1.4/lume.js';

  createRating(document.querySelector('.ds-rating'), {
    name: 'nota',
    onChange: (value) => console.log(value),
  });
  document.querySelector('[data-media]').innerHTML = ratingHtml(4.5, { text: true, count: 128 });
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Dar nota é um grupo de rádios; mostrar é uma imagem com o texto da nota.

- Nome — O grupo leva a pergunta (aria-label ou aria-labelledby) e cada estrela diz “3 estrelas”.
- Teclado — Tab ← → — Tab entra no grupo e as setas trocam a nota, como em qualquer rádio. Pelo teclado a nota nunca é tirada sem querer.
- Só mostrar — Vira role="img" com “Nota 4,5 de 5”: o leitor de tela lê a nota uma vez, não cinco estrelas.
- Não só a cor — Ao mostrar, use o número ao lado (text: true) quando a diferença de meia estrela importar.

## Tokens usados

Tudo o que a avaliação consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.brand.indicator (`--ds-color-brand-indicator`) | Estrela acesa | #C97B63 | #DE9680 |
| color.border.default (`--ds-color-border-default`) | Estrela apagada | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Estrela apagada com o mouse | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Foco do teclado | #53657A | #C0CAD6 |
| color.fg.default (`--ds-color-fg-default`) | Número da nota | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Quantas notas | #46586E | #CEC8C1 |
| size.icon.sm (`--ds-size-icon-sm`) | Estrela pequena | 16 px | 16 px |
| size.icon.md (`--ds-size-icon-md`) | Estrela padrão | 20 px | 20 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** mostre quantas notas. Uma média 5 com duas notas diz menos que 4,5 com cem. O número entre parênteses conta isso.
- **Evite:** estrela para escolher opção. Estrela é nota de satisfação. Para escolher entre coisas diferentes, use rádios ou controle segmentado.
- **Dica:** Cinco estrelas bastam. Escalas maiores pedem uma precisão que a pessoa não tem. Mantenha o padrão de 5.
