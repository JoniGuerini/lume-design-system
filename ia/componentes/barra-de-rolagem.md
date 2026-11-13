# Barra de rolagem

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/barra-de-rolagem

Uma barra só, sem trilho nem setas, igual em qualquer sistema. Aparece enquanto a pessoa rola e não ocupa espaço no layout.

Em números: função: 1 · espessura: 6 px · área de pegar: 12 px · some em: 0,9 s.

## Exemplo

```html
<div class="painel" tabindex="0" role="region" aria-label="…">
  …
</div>

<script type="module">
  import { initScrollbars } from 'https://lumeui.dev/v/0.29/lume.js';
  initScrollbars();
</script>
```

## Variantes

Todas funcionam aqui: é só rolar.

Role esta área para ver a barra. — Ela aparece enquanto você rola. — Some cerca de um segundo depois de parar. — Enquanto está visível, dá para arrastá-la. — Com o ponteiro em cima, ela fica mais grossa e não some. — Se a página rolar, ela acompanha a área. — Não há trilho nem setas. — Ela não ocupa espaço no layout. — Vale para qualquer área que rola. — Linha 9 — Linha 10 — Linha 11 — Linha 12 — Linha 13 — Linha 14 — Linha 15 — Linha 16 — Linha 17 — Linha 18 — Linha 19 — Linha 20 — Vertical `padrão` — Na borda direita da área. — 1 — 2 — 3 — 4 — 5 — 6 — 7 — 8 — 9 — 10 — 11 — 12 — 13 — 14 — Horizontal `padrão` — Na borda de baixo. Para rolar: Shift + roda, trackpad ou ← →. — Cabeçalho fixo — Role esta área para ver a barra. — Ela aparece enquanto você rola. — Some cerca de um segundo depois de parar. — Enquanto está visível, dá para arrastá-la. — Com o ponteiro em cima, ela fica mais grossa e não some. — Se a página rolar, ela acompanha a área. — Não há trilho nem setas. — Ela não ocupa espaço no layout. — Vale para qualquer área que rola. — Linha 9 — Linha 10 — Linha 11 — Linha 12 — Linha 13 — Linha 14 — Linha 15 — Linha 16 — Linha 17 — Linha 18 — Linha 19 — Linha 20 — Com recuo `--ds-scrollbar-start` — Começa abaixo de um cabeçalho fixo. — Role esta área para ver a barra. — Ela aparece enquanto você rola. — Some cerca de um segundo depois de parar. — Enquanto está visível, dá para arrastá-la. — Com o ponteiro em cima, ela fica mais grossa e não some. — Se a página rolar, ela acompanha a área. — Não há trilho nem setas. — Ela não ocupa espaço no layout. — Vale para qualquer área que rola. — Linha 9 — Linha 10 — Linha 11 — Linha 12 — Linha 13 — Linha 14 — Linha 15 — Linha 16 — Linha 17 — Linha 18 — Linha 19 — Linha 20 — Sem barra `--ds-scrollbar: none` — Para listas curtas na horizontal, como abas.

## Estados

Hover pode ser forçado com `data-state`; arrastando, com `data-active`.

Marcação dos exemplos desta seção:

```html
<div class="ds-scrollbar ds-scrollbar--y" data-visible=""></div>

<div class="ds-scrollbar ds-scrollbar--y" data-visible="" data-active=""></div>
```

## Código

Basta ligar uma vez. Áreas que entram depois também recebem a barra.

```html
import { initScrollbars } from 'https://lumeui.dev/v/0.29/lume.js';

initScrollbars();

/* Ajustes por área, no CSS da própria área que rola */
.painel {
  --ds-scrollbar-start: 64px; /* recuo em cima */
  --ds-scrollbar-end: 16px;   /* recuo embaixo */
}

.abas {
  --ds-scrollbar: none;       /* sem barra */
}
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

A rolagem continua sendo a do navegador; a barra só mostra onde a pessoa está.

- Teclado — ↑ ↓ PgUp PgDn — A rolagem nativa continua. Área sem nada focável precisa de `tabindex="0"`, `role` e um nome.
- Leitor de tela — A barra é só visual, com `aria-hidden`. O conteúdo é lido normalmente.
- Sem aviso falso — Ela não pisca quando o código rola sozinho, ao abrir uma página. Só aparece com a ação da pessoa.
- Mostre que há mais — Com a barra escondida, deixe o conteúdo cortado na borda, para indicar que dá para rolar.

## Tokens usados

Tudo o que a barra consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.border.field (`--ds-color-border-field`) | Barra | #3E5166AD | #FFFFFF61 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Hover e arrastando | #5C6C7F | #9C9792 |
| radius.full (`--ds-radius-full`) | Pontas | 9999 px | 9999 px |
| z.popover (`--ds-z-popover`) | Camada | 1400 | 1400 |
| duration.fast (`--ds-duration-fast`) | Aparecer e engrossar | 120ms | 120ms |
| duration.slow (`--ds-duration-slow`) | Sumir | 320ms | 320ms |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** ligue no app inteiro. Uma chamada só, ao iniciar. Assim toda área rola do mesmo jeito.
- **Evite:** esconder onde ela ajuda. Use --ds-scrollbar: none só em listas curtas, nunca em conteúdo longo.
- **Dica:** Cabeçalho fixo?. Dê a altura dele em --ds-scrollbar-start, para a barra não passar por baixo.
