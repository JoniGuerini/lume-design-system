# Lista de definições

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/lista-de-definicoes

Pares de rótulo e valor, como numa ficha de detalhes. Mais leve que uma tabela quando só há um registro para mostrar.

Em números: JavaScript: 0 · disposições: 3 · base: dl · sem espaço: empilha.

## Exemplo

```html
<dl class="ds-dl ds-dl--lines">
  <div class="ds-dl__row"><dt>Cliente</dt><dd>Ana Lima</dd></div>
  <div class="ds-dl__row"><dt>E-mail</dt><dd>ana@lume.dev</dd></div>
  <div class="ds-dl__row"><dt>Plano</dt><dd>Equipe</dd></div>
  <div class="ds-dl__row"><dt>Criado em</dt><dd>8 de novembro</dd></div>
</dl>
```

## Variantes

Rótulo ao lado do valor, com ou sem linhas, ou em cima, para caber em colunas.

Simples `ds-dl` — Para o meio de um cartão.

Com linhas `ds-dl--lines` — Mais fácil de acompanhar quando a lista é longa.

Em colunas `ds-dl--stacked` — Rótulo em cima, para resumos.

Marcação dos exemplos desta seção:

```html
<dl class="ds-dl"><div class="ds-dl__row"><dt>Cliente</dt><dd>Ana Lima</dd></div><div class="ds-dl__row"><dt>E-mail</dt><dd>ana@lume.dev</dd></div><div class="ds-dl__row"><dt>Plano</dt><dd>Equipe</dd></div><div class="ds-dl__row"><dt>Criado em</dt><dd>8 de novembro</dd></div></dl>

<dl class="ds-dl ds-dl--lines"><div class="ds-dl__row"><dt>Cliente</dt><dd>Ana Lima</dd></div><div class="ds-dl__row"><dt>E-mail</dt><dd>ana@lume.dev</dd></div><div class="ds-dl__row"><dt>Plano</dt><dd>Equipe</dd></div><div class="ds-dl__row"><dt>Criado em</dt><dd>8 de novembro</dd></div></dl>

<dl class="ds-dl ds-dl--stacked"><div class="ds-dl__row"><dt>Cliente</dt><dd>Ana Lima</dd></div><div class="ds-dl__row"><dt>E-mail</dt><dd>ana@lume.dev</dd></div><div class="ds-dl__row"><dt>Plano</dt><dd>Equipe</dd></div><div class="ds-dl__row"><dt>Criado em</dt><dd>8 de novembro</dd></div></dl>
```

## Acessibilidade

O próprio HTML liga cada rótulo ao seu valor.

- Semântica — Leitores de tela entendem `dt` como termo e `dd` como definição. O `div` em volta de cada par é permitido.
- Texto longo — Valores longos, como e-mails, quebram em vez de vazar.
- Pouco espaço — Em contêiner estreito, o rótulo sobe para cima do valor, em vez de quebrar as palavras.

## Tokens usados

Tudo o que a lista consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.fg.subtle (`--ds-color-fg-subtle`) | Rótulo | #53657A | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Valor | #2B3847 | #F3EDE5 |
| color.border.subtle (`--ds-color-border-subtle`) | Linhas | #3E516624 | #FFFFFF0F |
| text.body-sm (`--ds-text-body-sm`) | Texto | 14/22 · regular | 14/22 · regular |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** um registro só. Os detalhes de um pedido, um perfil, um resumo antes de confirmar.
- **Evite:** comparar registros. Para vários itens lado a lado, use a Tabela.
- **Dica:** Sem valor? Diga. Mostre “Não informado” em vez de um espaço vazio.
