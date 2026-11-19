# Campo de busca

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/campo-de-busca

Filtra uma lista ou uma página enquanto a pessoa digita. Tem a lupa, o × para limpar e, se quiser, uma tecla que leva o foco ao campo de qualquer lugar.

Em números: limpar: × · Esc · atalho: / · type: search · tamanhos: 3.

## Exemplo

```html
<div class="ds-field">
  <ds-icon name="search" size="18"></ds-icon>
  <input class="ds-field__input" id="busca" type="search" aria-label="Buscar componentes" placeholder="Buscar">
</div>

<script type="module">
  import { createSearchField } from 'https://lumeui.dev/v/1.11/lume.js';
  createSearchField(document.querySelector('#busca'), { shortcut: '/' });
</script>
```

## Com e sem atalho

Com `shortcut`, a tecla aparece no campo vazio e some quando há texto, para dar lugar ao ×.

- Botão
- Botão dividido
- Campo de busca
- Campo de dinheiro
- Campo de senha
- Estado vazio
- Grupo de campos

Nada encontrado para “”.

Filtrando uma lista `onChange` — A lista acompanha cada letra. Sem resultado, diga o que foi buscado.

Com atalho `shortcut: '/'` — Para a busca principal da tela. Só uma por página.

Marcação dos exemplos desta seção:

```html
<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" id="sf-list" type="search" aria-label="Buscar componentes" placeholder="Buscar" autocomplete="off"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" hidden="" aria-label="Limpar busca"><ds-icon name="x"></ds-icon></button>
</div>

<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" aria-label="Buscar componentes" placeholder="Buscar" value="">
<kbd class="ds-kbd ds-search__kbd">/</kbd>
</div>
```

## Estados

Vazio com a tecla, com texto e o ×, e em foco.

Marcação dos exemplos desta seção:

```html
<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" aria-label="Buscar componentes" placeholder="Buscar" value="">
</div>

<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" aria-label="Buscar componentes" placeholder="Buscar" value="">
<kbd class="ds-kbd ds-search__kbd">/</kbd>
</div>

<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" aria-label="Buscar componentes" placeholder="Buscar" value="botão">
<span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"><ds-icon name="x"></ds-icon></span>
</div>
```

## Código

O nome do campo vem do `aria-label` ou de um rótulo. O placeholder não é nome.

```html
<div class="ds-field">
  <ds-icon name="search" size="18"></ds-icon>
  <input class="ds-field__input" id="busca" type="search" aria-label="Buscar clientes" placeholder="Buscar">
</div>

<script type="module">
  import { createSearchField } from 'https://lumeui.dev/v/1.11/lume.js';
  createSearchField(document.querySelector('#busca'), {
    shortcut: '/',
    onChange: (value) => filtrar(value),
  });
</script>

// React
<SearchField aria-label="Buscar clientes" value={busca} onChange={setBusca} shortcut="/" />
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Teclado do começo ao fim, e o atalho dito ao leitor de tela.

- Atalho anunciado — / — O campo leva `aria-keyshortcuts`. A tecla não dispara enquanto a pessoa digita em outro campo.
- Esc limpa — Esc — Com texto, Esc limpa e fica no campo. Vazio, o Esc segue adiante e fecha o painel em volta.
- × com nome — O botão de limpar se chama “Limpar busca” e devolve o foco ao campo.
- Resultados — Se a lista muda enquanto a pessoa digita, diga a contagem numa região aria-live (“3 resultados”).

## Tokens usados

Além dos tokens do Campo de texto e da Tecla.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Lupa e × | #46586E | #CEC8C1 |
| color.bg.hover (`--ds-color-bg-hover`) | Fundo da tecla | #3E51660D | #FFFFFF0D |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** filtrar o que está na tela. Clientes, sessões, notas: a lista acompanha enquanto a pessoa digita.
- **Evite:** dois atalhos iguais. Uma tecla, uma busca. Com a paleta de comandos do Lume, a busca da página fica com o / e a paleta continua no Ctrl K.
- **Dica:** Busca do app inteiro?. Para ir a qualquer página ou ação, use uma busca geral, como a Ctrl K deste site.
