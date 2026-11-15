# Tecla

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/tecla

Mostra uma tecla ou um atalho no meio do texto, em menus e em tooltips. Ajuda a pessoa a aprender o caminho mais rápido.

Em números: JavaScript: 0 · altura: 20 px · base: kbd · interativa: não.

## Exemplo

```html
<kbd class="ds-kbd">⌘</kbd>
<kbd class="ds-kbd">K</kbd>
```

## Variantes

Uma tecla por etiqueta: um atalho de duas teclas são duas etiquetas.

Uma tecla `ds-kbd` — Para ações simples.

Combinação `duas etiquetas` — No Mac é ⌘; no Windows e no Linux, Ctrl.

Tecle Esc para fechar.

No meio do texto `dentro de um parágrafo` — Fica alinhada com o texto.

Marcação dos exemplos desta seção:

```html
<kbd class="ds-kbd">Esc</kbd>

<kbd class="ds-kbd">⌘</kbd>

<kbd class="ds-kbd">K</kbd>
```

## Acessibilidade

O atalho é só um atalho: o caminho normal precisa continuar existindo.

- Elemento certo — `kbd` diz que é uma entrada de teclado.
- Símbolos com nome — Leitores de tela nem sempre leem ⌘. Em botões, use `aria-keyshortcuts` para informar o atalho.
- Por sistema — Mostre a tecla do sistema da pessoa: ⌘ ou Ctrl.

## Tokens usados

Tudo o que a tecla consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.hover (`--ds-color-bg-hover`) | Fundo | #3E51660D | #FFFFFF0D |
| color.border.default (`--ds-color-border-default`) | Contorno | #3E516633 | #FFFFFF1A |
| color.fg.subtle (`--ds-color-fg-subtle`) | Texto | #53657A | #9C9792 |
| radius.xs (`--ds-radius-xs`) | Cantos | 6 px | 6 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** ensinar atalhos. Em menus, tooltips e na busca, ao lado da ação.
- **Evite:** parecer um botão. Clicar numa tecla desenhada não deveria fazer nada. Para ação, use Botão.
- **Dica:** Nomes curtos. Esc, Enter, Tab. Só escreva por extenso quando não houver abreviação conhecida.
