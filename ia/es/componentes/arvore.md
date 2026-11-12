# Árbol

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/arvore

Muestra niveles anidados, como carpetas o categorías, sin ocupar toda la pantalla. Solo aparecen las partes abiertas.

En números: niveles: sin límite · atajos: 8 · sangría: 20 px · rol ARIA: tree.

## Ejemplo

```html
<div class="ds-tree" aria-label="Archivos"></div>

<script type="module">
  import { createTree } from 'https://lumeui.dev/v/0.25/lume.js';
  createTree(document.querySelector('.ds-tree'), {
    items: arquivos,
    expanded: ['docs', 'contratos'],
    onSelect: (item) => abrir(item.id),
  });
</script>
```

## Variantes

Los íconos y la información lateral son opcionales.

Con íconos `icon · meta` — Para archivos, con el tamaño al lado.

Solo texto `label` — Para categorías, con menos ruido.

## Estados

Hover y foco se pueden forzar con `data-state` en la fila.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-tree"><ul class="ds-tree__group"><li class="ds-tree__item" aria-selected="false"><div class="ds-tree__row"><span class="ds-tree__toggle"></span><span class="ds-tree__icon"><ds-icon name="file-text"></ds-icon></span><span class="ds-tree__label">Notas.txt</span></div></li></ul></div>

<div class="ds-tree"><ul class="ds-tree__group"><li class="ds-tree__item" aria-selected="true"><div class="ds-tree__row"><span class="ds-tree__toggle"></span><span class="ds-tree__icon"><ds-icon name="file-text"></ds-icon></span><span class="ds-tree__label">Notas.txt</span></div></li></ul></div>
```

## Código

El `aria-label` de `.ds-tree` da nombre al árbol para el lector de pantalla.

```html
import { createTree } from 'https://lumeui.dev/v/0.25/lume.js';

const tree = createTree(document.querySelector('.ds-tree'), {
  items: [
    { id: 'docs', label: 'Documentos', icon: 'folder', children: [
      { id: 'notas', label: 'Notas.txt', icon: 'file-text' },
    ] },
  ],
  expanded: ['docs'],
  onSelect: (item) => abrir(item.id),
});
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Sigue el patrón ARIA de árbol: un solo punto en el Tab, y las flechas hacen el resto.

- Moverse — ↑ ↓ Home End — ↑ y ↓ pasan por las filas visibles; Home y End van a la primera y a la última.
- Abrir y cerrar — → ← — → abre o entra en la carpeta; ← cierra o vuelve al nivel de arriba.
- Elegir — Enter Espacio — Enter o Espacio eligen la fila. Las letras saltan al siguiente nombre que empiece con ellas.
- Estado anunciado — aria-expanded, aria-selected y aria-level dicen el estado y el nivel de cada fila.

## Tokens usados

Todo lo que consume el árbol.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Nombre | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Flecha, ícono e información | #5C6C7F | #9C9792 |
| color.bg.hover (`--ds-color-bg-hover`) | Fila en hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Fila elegida | #3E516612 | #C0CAD61A |
| color.border.focus (`--ds-color-border-focus`) | Anillo de foco | #53657A | #C0CAD6 |
| color.fg.disabled (`--ds-color-fg-disabled`) | Fila desactivada | #93A0B0 | #605D59 |
| radius.sm (`--ds-radius-sm`) | Esquinas de la fila | 8 px | 8 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** jerarquías reales. Carpetas, categorías y organigramas, donde el nivel tiene significado.
- **Evita:** la navegación del sitio. Para páginas, la sidebar es más simple. El árbol pide un teclado que no todos conocen.
- **Consejo:** Abre el camino. Empieza con el elemento actual visible, con sus carpetas ya abiertas.
