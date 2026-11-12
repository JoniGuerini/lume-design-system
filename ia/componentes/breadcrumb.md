# Breadcrumb

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/breadcrumb

Mostra o caminho até a página atual e deixa voltar a qualquer nível. É o que aparece no topo deste site.

Em números: JavaScript: 0 · separador: 14 px · no celular: só o atual · atributo: aria-current.

## Exemplo

```html
<nav class="ds-breadcrumb" aria-label="Você está em">
  <ol>
    <li><a href="#">Início</a></li>
    <li><ds-icon name="chevron-right" size="14"></ds-icon><a href="#">Projetos</a></li>
    <li><ds-icon name="chevron-right" size="14"></ds-icon><span aria-current="page">Lume</span></li>
  </ol>
</nav>
```

## Variantes

Em telas estreitas, só a página atual aparece, e o título da página já situa a pessoa.

Dois níveis `ol` — O mínimo que faz sentido.

Vários níveis `ol` — Cada nível de cima é um link.

Marcação dos exemplos desta seção:

```html
<nav class="ds-breadcrumb" aria-label="Você está em"><ol>
<li><a href="#/componentes/breadcrumb" data-inert="">Início</a></li><li><ds-icon name="chevron-right"></ds-icon><span aria-current="page">Projetos</span></li>
</ol></nav>

<nav class="ds-breadcrumb" aria-label="Você está em"><ol>
<li><a href="#/componentes/breadcrumb" data-inert="">Início</a></li><li><ds-icon name="chevron-right"></ds-icon><a href="#/componentes/breadcrumb" data-inert="">Projetos</a></li><li><ds-icon name="chevron-right"></ds-icon><a href="#/componentes/breadcrumb" data-inert="">Lume</a></li><li><ds-icon name="chevron-right"></ds-icon><span aria-current="page">Configurações</span></li>
</ol></nav>
```

## Acessibilidade

Uma navegação com nome e uma lista em ordem.

- Nome da navegação — O aria-label diferencia esta navegação do menu principal.
- Página atual — O último item leva `aria-current="page"` e não é link.
- Separadores — As setas são desenho, escondidas do leitor de tela.
- Teclado — Tab Enter — Links comuns, em ordem no Tab.

## Tokens usados

Tudo o que o breadcrumb consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.fg.subtle (`--ds-color-fg-subtle`) | Links e separador | #5C6C7F | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Página atual e hover | #2B3847 | #F3EDE5 |
| text.label-md (`--ds-text-label-md`) | Texto | 14/20 · medium | 14/20 · medium |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** conteúdo em níveis. Quando a pessoa pode chegar fundo e querer subir um nível.
- **Evite:** fluxos em etapas. Para um cadastro em partes, o certo é o Stepper.
- **Dica:** Mostra a estrutura. É o lugar na hierarquia, não o histórico do que a pessoa visitou.
