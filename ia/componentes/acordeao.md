# Acordeão

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/acordeao

Seções que abrem e fecham no lugar. Boa para perguntas frequentes e detalhes que só parte das pessoas quer ler.

Em números: JavaScript: 0 · aparências: 2 · base: details · altura mínima: 52 px.

## Exemplo

```html
<div class="ds-accordion">
  <details class="ds-accordion__item" name="faq" open>
    <summary class="ds-accordion__head">
      <span>O que está incluído no plano?</span>
      <ds-icon name="chevron-down" size="18"></ds-icon>
    </summary>
    <div class="ds-accordion__body">Todos os componentes, os tokens e as atualizações.</div>
  </details>
  <!-- mais itens -->
</div>
```

## Variantes

Com o mesmo `name` nos itens, abrir um fecha os outros. Sem ele, vários ficam abertos.

Com linhas `ds-accordion` — Discreto, para o meio de uma página.

Em cartões `ds-accordion--card` — Cada item é uma superfície. Bom sobre o fundo da página.

Marcação dos exemplos desta seção:

```html
<div class="ds-accordion">
<details class="ds-accordion__item" name="ac-lines" open="">
<summary class="ds-accordion__head"><span>O que está incluído no plano?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Todos os componentes, os tokens e as atualizações.</div>
</details><details class="ds-accordion__item" name="ac-lines">
<summary class="ds-accordion__head"><span>Posso cancelar quando quiser?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Sim, sem multa. O acesso segue até o fim do período.</div>
</details><details class="ds-accordion__item" name="ac-lines">
<summary class="ds-accordion__head"><span>Como falo com o suporte?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Pelo chat, em dias úteis, ou pelo e-mail da sua conta.</div>
</details>
</div>

<div class="ds-accordion ds-accordion--card">
<details class="ds-accordion__item" name="ac-card" open="">
<summary class="ds-accordion__head"><span>O que está incluído no plano?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Todos os componentes, os tokens e as atualizações.</div>
</details><details class="ds-accordion__item" name="ac-card">
<summary class="ds-accordion__head"><span>Posso cancelar quando quiser?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Sim, sem multa. O acesso segue até o fim do período.</div>
</details><details class="ds-accordion__item" name="ac-card">
<summary class="ds-accordion__head"><span>Como falo com o suporte?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Pelo chat, em dias úteis, ou pelo e-mail da sua conta.</div>
</details>
</div>
```

## Estados

Hover e foco podem ser forçados com `data-state` no cabeçalho.

Marcação dos exemplos desta seção:

```html
<div class="ds-accordion"><details class="ds-accordion__item"><summary class="ds-accordion__head"><span>O que está incluído no plano?</span><ds-icon name="chevron-down"></ds-icon></summary><div class="ds-accordion__body">Todos os componentes, os tokens e as atualizações.</div></details></div>

<div class="ds-accordion"><details class="ds-accordion__item" open=""><summary class="ds-accordion__head"><span>O que está incluído no plano?</span><ds-icon name="chevron-down"></ds-icon></summary><div class="ds-accordion__body">Todos os componentes, os tokens e as atualizações.</div></details></div>
```

## Acessibilidade

O navegador já cuida do papel, do estado e do teclado.

- Teclado — Tab Enter Espaço — Tab vai de um título a outro; Enter ou Espaço abrem e fecham.
- Estado anunciado — O leitor de tela diz “recolhido” ou “expandido” sem atributo extra.
- Encontrável — Ctrl F — Em navegadores atuais, buscar na página abre o item que tem o texto.
- Movimento reduzido — Com `prefers-reduced-motion`, abre sem animar.

## Tokens usados

Tudo o que o acordeão consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.border.subtle (`--ds-color-border-subtle`) | Linhas e contorno do cartão | #3E516624 | #FFFFFF0F |
| color.bg.surface (`--ds-color-bg-surface`) | Fundo do cartão | #FFFFFF | #24221F |
| color.fg.default (`--ds-color-fg-default`) | Título | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Conteúdo | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Seta | #5C6C7F | #9C9792 |
| duration.base (`--ds-duration-base`) | Abrir e fechar | 200ms | 200ms |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** conteúdo opcional. Perguntas frequentes e detalhes que nem todo mundo precisa ler.
- **Evite:** o essencial. O que todo mundo precisa ver não deve ficar escondido atrás de um clique.
- **Dica:** Títulos que dizem tudo. A pessoa decide abrir pelo título: escreva a pergunta inteira.
