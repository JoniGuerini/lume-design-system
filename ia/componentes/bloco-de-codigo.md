# Bloco de código

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/bloco-de-codigo

Mostra código com a fonte certa, e um botão copia tudo de uma vez. É o que aparece em todos os playgrounds deste site.

Em números: fonte mono: JetBrains · tamanhos: 2 · rolagem: horizontal · base: pre · code.

## Exemplo

```html
.cartao {
  background: var(--ds-color-bg-surface);
  border-radius: var(--ds-radius-xl);
}
```

## Variantes

Sem o botão, é só `.ds-code`. Para um termo no meio do texto, use `.ds-inline-code`.

Com copiar `ds-code-block` — Para o que a pessoa vai usar.

```html
<html data-theme="dark">
```

Só leitura `ds-code` — Para um trecho que só ilustra.

```html
--ds-radius-xl: 20px;
```

Pequeno `ds-code--sm` — Dentro de cartões e tabelas.

Rode `npm run dev` e abra o site.

No meio do texto `ds-inline-code` — Para nomes de arquivos, tokens e comandos.

Marcação dos exemplos desta seção:

```html
<div class="ds-code-block">
<pre class="ds-code"><code>npm run build</code></pre>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-code-block__copy" data-code-copy="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
</div>
```

## Acessibilidade

Texto de verdade, que dá para selecionar e ler.

- Elementos certos — `pre` preserva os espaços; `code` diz que é código.
- Botão com nome — Tab Enter — O ícone tem nome para o leitor de tela, e a cópia é anunciada no aviso.
- Linhas longas — O bloco rola na horizontal, sem quebrar a página nem o código.

## Tokens usados

Tudo o que o bloco consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.sunken (`--ds-color-bg-sunken`) | Fundo | #E8EDF3 | #151412 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno | #3E516624 | #FFFFFF0F |
| color.fg.default (`--ds-color-fg-default`) | Texto | #2B3847 | #F3EDE5 |
| text.code-md (`--ds-text-code-md`) | Código | 14/22 · regular | 14/22 · regular |
| text.code-sm (`--ds-text-code-sm`) | Pequeno e no meio do texto | 12/18 · regular | 12/18 · regular |
| radius.lg (`--ds-radius-lg`) | Cantos | 16 px | 16 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** código para copiar. Comandos e exemplos que a pessoa vai colar em outro lugar.
- **Evite:** dados comuns. Uma senha ou um código de cupom ficam melhor num campo com botão de copiar.
- **Dica:** Curto é melhor. Mostre só o que importa. Trechos longos cansam e ninguém lê.
