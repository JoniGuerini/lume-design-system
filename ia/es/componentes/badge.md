# Badge

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/badge

Etiqueta corta de estado o de conteo. Pequeña, discreta y siempre con significado — nunca adorno.

En números: tonos: 6 · tamaños: 2 · altura (md / sm): 24/20 · interactivo: no.

## Ejemplo

```html
<span class="ds-badge ds-badge--success">
  <span class="ds-badge__dot"></span>
  Listo
</span>
```

## Tonos

El tono dice el tipo de estado. Fondo suave, texto fuerte y contorno fino — legible en los dos temas, sin gritar.

Neutro `ds-badge` — Estado sin urgencia: borrador, archivado, planificado. — Contraste 5,86:1 Lume claro · 8,29:1 Lume oscuro

Marca `ds-badge--brand` — Raro. Algo recién agregado dentro de una lista — nunca como llamado. — Contraste 7,25:1 Lume claro · 9,38:1 Lume oscuro

Éxito `ds-badge--success` — Completado, activo, aprobado. — Contraste 6,33:1 Lume claro · 8,33:1 Lume oscuro

Aviso `ds-badge--warning` — Necesita atención, pero no bloquea. — Contraste 6,43:1 Lume claro · 8,99:1 Lume oscuro

Peligro `ds-badge--danger` — Error o bloqueo que pide acción. — Contraste 5,02:1 Lume claro · 7,93:1 Lume oscuro

Información `ds-badge--info` — Contexto neutro: beta, en análisis. — Contraste 4,56:1 Lume claro · 8,19:1 Lume oscuro

Marcado de los ejemplos de esta sección:

```html
<span class="ds-badge">Borrador</span>

<span class="ds-badge"><span class="ds-badge__dot"></span>Borrador</span>

<span class="ds-badge ds-badge--sm">Borrador</span>

<span class="ds-badge ds-badge--brand">Nuevo</span>

<span class="ds-badge ds-badge--brand"><span class="ds-badge__dot"></span>Nuevo</span>

<span class="ds-badge ds-badge--brand ds-badge--sm">Nuevo</span>

<span class="ds-badge ds-badge--success">Listo</span>

<span class="ds-badge ds-badge--success"><span class="ds-badge__dot"></span>Listo</span>
```

## Tamaños

Mediano junto a texto común; pequeño en tablas, listas densas y encabezados de tarjeta.

Mediano `predeterminado` — Altura 24 px · texto label-sm · 13 px

Pequeño `ds-badge--sm` — Altura 20 px · texto caption · 12 px

Marcado de los ejemplos de esta sección:

```html
<span class="ds-badge ds-badge--success"><span class="ds-badge__dot"></span>Listo</span>

<span class="ds-badge ds-badge--warning">En revisión</span>

<span class="ds-badge ds-badge--count">12</span>

<span class="ds-badge ds-badge--success ds-badge--sm"><span class="ds-badge__dot"></span>Listo</span>

<span class="ds-badge ds-badge--warning ds-badge--sm">En revisión</span>

<span class="ds-badge ds-badge--sm ds-badge--count">12</span>
```

## Conteo

`ds-badge--count` centra el número y mantiene el ancho mínimo de un círculo. El cero no aparece; por encima de 99, muestra “99+”.

- Bandeja de entrada — 12
- Comentarios — 99+
- Aprobaciones — 3
- Archivados — sin badge

12 — número exacto hasta 99 — 99+ — por encima de 99 — — — cero: sin badge

## Dónde usar

El badge acompaña algo — una fila, un título, un elemento. Nunca está solo en la pantalla.

Fila de lista o tabla — El estado de cada elemento, siempre en la misma columna.

Editor de texto enriquecido — Beta

Negrita, listas y enlaces, con atajos de Markdown.

Junto a un título — Califica lo que está escrito: beta, en prueba.

Conteo en un elemento — Cuánto hay para ver, en el extremo derecho.

Marcado de los ejemplos de esta sección:

```html
<span class="ds-badge ds-badge--success ds-badge--sm">Listo</span>

<span class="ds-badge ds-badge--warning ds-badge--sm">En revisión</span>

<span class="ds-badge ds-badge--sm">Planificado</span>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3.5 13h5l1.5 2.5h4l1.5-2.5h5"></path><path d="M6 4.5h12l2.5 8.5v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V13z"></path></svg>

<span class="ds-badge ds-badge--sm ds-badge--count">3</span>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2h-15z"></path><path d="M10 20.5a2.2 2.2 0 0 0 4 0"></path></svg>

<span class="ds-badge ds-badge--brand ds-badge--sm ds-badge--count">99+</span>
```

## Accesibilidad

El badge es texto. Trátalo como texto.

- Nunca solo color — El estado está escrito (“En revisión”). El punto y el tono solo refuerzan.
- Contraste verificado — El texto de cada tono supera 4,5:1 sobre su propio fondo — éxito: 6,33:1 en Lume claro y 8,33:1 en Lume oscuro.
- No es interactivo — El badge no recibe clic ni foco. Si necesita filtrar o abrir algo, usa chip, enlace o botón.
- Conteo con contexto — Un “12” suelto no dice nada al lector de pantalla. Complétalo con texto oculto: “12 sin leer”.
- ¿Cambió? Anúncialo — Cuando el estado cambia sin recargar, pon el mensaje en una región `aria-live="polite"`.
- Corto de verdad — Una o dos palabras. Una frase entera se vuelve texto común, no badge.

## Tokens usados

Cada tono usa el trío subtle / fg / border de su estado. Aquí, el neutro y el de éxito como ejemplo.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.selected (`--ds-color-bg-selected`) | Fondo (neutro) | #3E516612 | #C0CAD61A |
| color.fg.muted (`--ds-color-fg-muted`) | Texto (neutro) | #46586E | #CEC8C1 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno (neutro) | #3E516624 | #FFFFFF0F |
| color.success.subtle (`--ds-color-success-subtle`) | Fondo (éxito) | #EFFAF1 | #72CB8B21 |
| color.success.fg (`--ds-color-success-fg`) | Texto (éxito) | #0F6939 | #97DCA8 |
| color.success.border (`--ds-color-success-border`) | Contorno (éxito) | #BDEAC6 | #72CB8B4D |
| color.brand.subtle (`--ds-color-brand-subtle`) | Fondo (marca) | #EEF2F6 | #C0CAD624 |
| color.brand.fg (`--ds-color-brand-fg`) | Texto (marca) | #3E5166 | #DAE0E8 |
| text.label-sm (`--ds-text-label-sm`) | Texto (mediano) | 13/18 · medium | 13/18 · medium |
| text.caption (`--ds-text-caption`) | Texto (pequeño) | 12/16 · regular | 12/16 · regular |
| radius.full (`--ds-radius-full`) | Forma de píldora | 9999 px | 9999 px |

## Uso

El badge es información. Si no informa nada, no es badge.

- **Haz:** estados y conteos. Dice el estado de algo o cuánto hay, en una o dos palabras.
- **Evita:** badge decorativo. El badge no es un llamado ni adorno del héroe. La novedad se escribe en el texto o se vuelve un enlace de verdad.
- **Consejo:** Uno por fila. Más de un badge en el mismo elemento compite por la atención. Elige el estado que importa ahora.
