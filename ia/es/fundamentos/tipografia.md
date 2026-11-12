# Tipografía

Sección de Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/tipografia

Geist Serif da voz a los títulos, Geist Sans se ocupa de la lectura y JetBrains Mono, del código. 19 estilos listos cubren desde el héroe hasta la etiqueta más pequeña.

En números: familias: 3 · pesos: 5 · estilos de texto: 19 · tamaño base: 16 px.

## Familias

Tres familias, cada una con un trabajo. Nunca mezcles dos en el mismo papel.

Aa

Títulos y números — Geist Serif — Serifa de alto contraste, en un solo peso (Regular): da el tono editorial a los títulos. — ABCDEFGHIJKLMabcdefghijklm0123456789 ?!&@ áçõ — 400

Aa

Lectura e interfaz — Geist Sans — Sin serifa, hecha para pantalla: legible de 12 a 18 px, en pesos de 100 a 900. — ABCDEFGHIJKLMabcdefghijklm0123456789 ?!&@ áçõ — 400 — 500 — 600 — 700

Aa

Código y tokens — JetBrains Mono — Caracteres distintos (0/O, 1/l) y ancho fijo. — ABCDEFGHIJKLMabcdefghijklm0123456789 ?!&@ áçõ — 400 — 500 — 600

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-inline-action" data-copy="var(--ds-font-family-display)"><ds-icon name="copy"></ds-icon><code>--ds-font-family-display</code></button>

<button type="button" class="ds-inline-action" data-copy="var(--ds-font-family-sans)"><ds-icon name="copy"></ds-icon><code>--ds-font-family-sans</code></button>

<button type="button" class="ds-inline-action" data-copy="var(--ds-font-family-mono)"><ds-icon name="copy"></ds-icon><code>--ds-font-family-mono</code></button>
```

## Escala

Cada estilo reúne familia, tamaño, altura de línea, peso y tracking en un solo token. Escribe abajo para probar tu texto en todos ellos.

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

Marcado de los ejemplos de esta sección:

```html
<label class="ds-field">
<ds-icon name="type"></ds-icon>
<input class="ds-field__input" type="text" value="Construyamos con refinamiento." data-sample-input="" aria-label="Texto de ejemplo" spellcheck="false">
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-sample-reset="" aria-label="Restaurar texto" data-ds-tooltip="Restaurar"><ds-icon name="refresh"></ds-icon></button>
</label>

<button type="button" class="ds-chip ds-chip--sm" data-category="all" aria-pressed="true">Todos</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="display" aria-pressed="false">Display</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="heading" aria-pressed="false">Títulos</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="body" aria-pressed="false">Cuerpo</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="label" aria-pressed="false">Etiquetas</button>

<button type="button" class="ds-chip ds-chip--sm" data-category="other" aria-pressed="false">Otros</button>

<p class="ds-text-display-lg" data-sample="">Construyamos con refinamiento.</p>
```

## Jerarquía en la práctica

Una pantalla típica usa pocos estilos. El contraste viene del tamaño y del color — no de muchos pesos distintos.

### Del token al componente

Marcado de los ejemplos de esta sección:

```html
<p class="ds-text-eyebrow">Guía de lanzamiento</p>

<p class="ds-text-body-lg">Todo lo que cambia en la versión 0.1, en orden de impacto para quien ya usa el sistema.</p>

<p class="ds-text-body-sm">01 · Fundamentos</p>

<p class="ds-text-body-md">Color, tipografía e íconos ahora son tokens. Los componentes leen esos valores y se ajustan al tema sin ninguna línea de más.</p>

<p class="ds-text-label-md">Ver qué cambió →</p>

<p class="ds-text-caption">Actualizado el 31 de octubre · 4 min de lectura</p>

<p class="ds-text-code-sm">font: var(--ds-text-body-md);</p>
```

## Pesos y tracking

Cuanto más grande el texto, más justo el espacio entre letras. Solo el overline, en mayúsculas, abre el tracking.

Pesos — font.weight.* — Aa — regular — 400 — Aa — medium — 500 — Aa — semibold — 600 — Aa — bold — 700 — Aa — heavy — 800 — Tracking por estilo — del mayor al menor — display-lg — -0,025em — display-md — -0,022em — display-sm — -0,02em — heading-xl — -0,018em — heading-lg — -0,014em — heading-md — -0,01em — body-lg — -0,014em — heading-sm — -0,016em — body-md — -0,011em — label-lg — -0,011em — heading-xs — -0,011em — body-sm — -0,006em — label-md — -0,006em — code-md — 0 — label-sm — -0,003em — eyebrow — 0 — caption — 0 — code-sm — 0 — overline — 0,08em

## Uso

Tres reglas para mantener el texto consistente.

- **Haz:** usa un estilo listo. Familia, tamaño, línea, peso y tracking vienen juntos — y cambian juntos.
- **Evita:** tamaños y pesos sueltos. Los valores sueltos crean variaciones casi iguales y rompen el ritmo de la página.
- **Consejo:** Medida de lectura. Para textos largos, mantén de 60 a 75 caracteres por línea. El token de layout ya lo limita.
