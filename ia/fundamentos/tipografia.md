# Tipografia

Seção do Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/tipografia

Geist Serif dá voz aos títulos, Geist Sans cuida da leitura e JetBrains Mono, do código. 19 estilos prontos cobrem do herói ao menor rótulo.

Em números: famílias: 3 · pesos: 5 · estilos de texto: 19 · tamanho base: 16 px.

## Famílias

Três famílias, cada uma com um trabalho. Nunca misture duas no mesmo papel.

Aa

Títulos e números — Geist Serif — Serifa de alto contraste, num peso só (Regular): dá o tom editorial aos títulos. — ABCDEFGHIJKLMabcdefghijklm0123456789 ?!&@ áçõ — 400

Aa

Leitura e interface — Geist Sans — Sem serifa, feita para tela: legível de 12 a 18 px, em pesos de 100 a 900. — ABCDEFGHIJKLMabcdefghijklm0123456789 ?!&@ áçõ — 400 — 500 — 600 — 700

Aa

Código e tokens — JetBrains Mono — Caracteres distintos (0/O, 1/l) e largura fixa. — ABCDEFGHIJKLMabcdefghijklm0123456789 ?!&@ áçõ — 400 — 500 — 600

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-inline-action" data-copy="var(--ds-font-family-display)"><ds-icon name="copy"></ds-icon><code>--ds-font-family-display</code></button>

<button type="button" class="ds-inline-action" data-copy="var(--ds-font-family-sans)"><ds-icon name="copy"></ds-icon><code>--ds-font-family-sans</code></button>

<button type="button" class="ds-inline-action" data-copy="var(--ds-font-family-mono)"><ds-icon name="copy"></ds-icon><code>--ds-font-family-mono</code></button>
```

## Escala

Cada estilo junta família, tamanho, altura de linha, peso e tracking num token só. Escreva abaixo para testar o seu texto em todos eles.

display-lg — 64/64 · 400 · -0,025em — Geist Serif

display-md — 48/52 · 400 · -0,022em — Geist Serif

display-sm — 40/44 · 400 · -0,02em — Geist Serif

heading-xl — 32/38 · 400 · -0,018em — Geist Serif

heading-lg — 26/32 · 400 · -0,014em — Geist Serif

heading-md — 21/28 · 400 · -0,01em — Geist Serif

heading-sm — 17/24 · 600 · -0,016em — Geist Sans

heading-xs — 15/22 · 600 · -0,011em — Geist Sans

body-lg — 18/32 · 400 · -0,014em — Geist Sans

body-md — 16/28 · 400 · -0,011em — Geist Sans

body-sm — 14/22 · 400 · -0,006em — Geist Sans

label-lg — 16/22 · 500 · -0,011em — Geist Sans

label-md — 14/20 · 500 · -0,006em — Geist Sans

label-sm — 13/18 · 500 · -0,003em — Geist Sans

eyebrow — 13/18 · 500 · 0 — Geist Sans

caption — 12/16 · 400 · 0 — Geist Sans

overline — 11/16 · 600 · 0,08em — Geist Sans

code-md — 14/22 · 400 · 0 — JetBrains Mono

code-sm — 12/18 · 400 · 0 — JetBrains Mono

Marcação dos exemplos desta seção:

```html
<label class="ds-field">
<ds-icon name="type"></ds-icon>
<input class="ds-field__input" type="text" value="Vamos construir com refinamento." data-sample-input="" aria-label="Texto de exemplo" spellcheck="false">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-sample-reset="" aria-label="Restaurar texto" data-ds-tooltip="Restaurar"><ds-icon name="refresh"></ds-icon></button>
</label>

<button type="button" class="ds-chip ds-chip--sm" data-category="all" aria-pressed="true">Todos</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="display" aria-pressed="false">Display</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="heading" aria-pressed="false">Títulos</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="body" aria-pressed="false">Corpo</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="label" aria-pressed="false">Rótulos</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="other" aria-pressed="false">Outros</button>

<p class="ds-text-display-lg" data-sample="">Vamos construir com refinamento.</p>
```

## Hierarquia na prática

Uma tela típica usa poucos estilos. O contraste vem do tamanho e da cor — não de muitos pesos diferentes.

### Do token ao componente

Marcação dos exemplos desta seção:

```html
<p class="ds-text-eyebrow">Guia de lançamento</p>

<p class="ds-text-body-lg">Tudo o que muda na versão 0.1, em ordem de impacto para quem já usa o sistema.</p>

<p class="ds-text-body-sm">01 · Fundamentos</p>

<p class="ds-text-body-md">Cores, tipografia e ícones agora são tokens. Os componentes leem esses valores e se ajustam ao tema sem nenhuma linha a mais.</p>

<p class="ds-text-label-md">Ver o que mudou →</p>

<p class="ds-text-caption">Atualizado em 31 de outubro · 4 min de leitura</p>

<p class="ds-text-code-sm">font: var(--ds-text-body-md);</p>
```

## Pesos e tracking

Quanto maior o texto, mais justo o espaçamento entre letras. Só o overline, em caixa alta, abre o tracking.

Pesos — font.weight.* — Aa — regular — 400 — Aa — medium — 500 — Aa — semibold — 600 — Aa — bold — 700 — Aa — heavy — 800 — Tracking por estilo — do maior para o menor — display-lg — -0,025em — display-md — -0,022em — display-sm — -0,02em — heading-xl — -0,018em — heading-lg — -0,014em — heading-md — -0,01em — body-lg — -0,014em — heading-sm — -0,016em — body-md — -0,011em — label-lg — -0,011em — heading-xs — -0,011em — body-sm — -0,006em — label-md — -0,006em — code-md — 0 — label-sm — -0,003em — eyebrow — 0 — caption — 0 — code-sm — 0 — overline — 0,08em

## Uso

Três regras para manter o texto consistente.

- **Faça:** use um estilo pronto. Família, tamanho, linha, peso e tracking vêm juntos — e mudam juntos.
- **Evite:** tamanho e peso soltos. Valores avulsos criam variações quase iguais e quebram o ritmo da página.
- **Dica:** Medida de leitura. Para textos longos, mantenha 60 a 75 caracteres por linha. O token de layout já limita isso.
