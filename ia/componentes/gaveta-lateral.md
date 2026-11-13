# Gaveta lateral

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/gaveta-lateral

Mostra detalhes ou uma tarefa sem tirar a pessoa da página. Entra pela borda e deixa ver o que está por trás.

Em números: lados: 3 · larguras: 360 · 480 · 640 · base: dialog · foco: preso.

## Exemplo

```html
import { openDrawer } from 'https://lumeui.dev/v/0.29/lume.js';

openDrawer({
  side: 'right',
  title: '1042',
  body: detalhes,
});
```

## Variantes

A direita é o padrão. A de baixo funciona bem para escolhas rápidas.

À direita `side: 'right'` — Para detalhes de um item de uma lista.

À esquerda `side: 'left'` — Para filtros ou navegação extra.

Embaixo `side: 'bottom'` — Para escolhas rápidas, sobretudo no celular.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-btn ds-btn--secondary" data-open="right"><ds-icon name="panel-left"></ds-icon>Abrir</button>

<button type="button" class="ds-btn ds-btn--secondary" data-open="left"><ds-icon name="filter"></ds-icon>Abrir</button>

<button type="button" class="ds-btn ds-btn--secondary" data-open="bottom"><ds-icon name="more-horizontal"></ds-icon>Abrir</button>
```

## Código

`openDrawer` devolve uma promessa com o valor da ação escolhida, como o Modal.

```html
import { openDrawer } from 'https://lumeui.dev/v/0.29/lume.js';

const escolha = await openDrawer({
  side: 'right',
  eyebrow: 'Pedido',
  title: '1042',
  body: detalhes,
  actions: [
    { label: 'Fechar', value: 'close' },
    { label: 'Aprovar', value: 'approve', variant: 'primary' },
  ],
});
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

É um `dialog` nativo, como o Modal: o navegador cuida do foco e deixa o resto da página inerte.

- Foco preso — Tab — Enquanto está aberta, o Tab só anda dentro dela.
- Fechar — Esc — Esc e o botão de fechar sempre funcionam, e o foco volta a quem abriu.
- Com nome — O título dá nome à gaveta para o leitor de tela.
- Movimento reduzido — Sem animação de entrada para quem pediu menos movimento.

## Tokens usados

Além dos tokens do Modal.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo | #FFFFFF | #2C2A27 |
| color.bg.overlay (`--ds-color-bg-overlay`) | Véu | #2B384759 | #00000099 |
| shadow.2xl (`--ds-shadow-2xl`) | Sombra | 0 12px 24px -6px rgb(45 58 74 / 0.1), 0 48px 96px -24px rgb(45 58 74 / 0.24) | 0 12px 24px -6px rgb(0 0 0 / 0.36), 0 48px 96px -24px rgb(0 0 0 / 0.72) |
| radius.xl (`--ds-radius-xl`) | Cantos | 20 px | 20 px |
| layout.frame-gap (`--ds-layout-frame-gap`) | Respiro em volta | 10 px | 10 px |
| duration.base (`--ds-duration-base`) | Entrada | 200ms | 200ms |

## Uso

Gaveta ou Modal?

- **Faça:** manter o contexto. Abrir o detalhe de uma linha e ainda ver a lista atrás.
- **Evite:** decisões rápidas. Para “Excluir este projeto?”, o Modal é direto e centrado.
- **Dica:** Uma de cada vez. Gaveta sobre gaveta confunde. Troque o conteúdo em vez de empilhar.
