# Paginación

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/paginacao

Divide una lista larga en páginas y dice dónde está la persona. Úsala cuando necesite volver a un punto o comparar páginas.

En números: altura: 36 px · versiones: 2 · páginas al lado: a elegir · rol: navigation.

## Ejemplo

```html
<nav class="ds-pagination"></nav>

<script type="module">
  import { createPagination } from 'https://lumeui.dev/v/1.9/lume.js';
  createPagination(document.querySelector('.ds-pagination'), {
    total: 248,
    pageSizes: [10, 25, 50],
    onChange: ({ page, pageSize }) => carregar(page, pageSize),
  });
</script>
```

## Variantes

Las partes aparecen según la necesidad: pocas páginas no necesitan puntos suspensivos.

Pocas páginas `total: 42` — Hasta siete páginas quedan todas a la vista, sin puntos suspensivos.

Muchas páginas `total: 2480` — La primera y la última siempre quedan a la vista.

Elementos por página `pageSizes` — Al cambiar, la persona sigue viendo el mismo elemento.

Con enlaces `hrefFor` — Cada página es una dirección: se puede compartir y abrir en otra pestaña.

Marcado de los ejemplos de esta sección:

```html
<nav class="ds-pagination" data-demo="few" aria-label="Paginación">
<p class="ds-pagination__summary" role="status">1–10 de 42</p>
<ul class="ds-pagination__list" role="list">
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Página anterior" data-page="0" disabled=""><ds-icon name="chevron-left"></ds-icon></button></li>
<li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 1" aria-current="page" data-page="1">1</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 2" data-page="2">2</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 3" data-page="3">3</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 4" data-page="4">4</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 5" data-page="5">5</button></li>
<li class="ds-pagination__compact" aria-hidden="true">1 de 5</li>
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Página siguiente" data-page="2"><ds-icon name="chevron-right"></ds-icon></button></li>
</ul></nav>

<nav class="ds-pagination" data-demo="many" aria-label="Paginación">
<p class="ds-pagination__summary" role="status">111–120 de 2480</p>
<ul class="ds-pagination__list" role="list">
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Página anterior" data-page="11"><ds-icon name="chevron-left"></ds-icon></button></li>
<li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 1" data-page="1">1</button></li><li class="ds-pagination__gap" aria-hidden="true">…</li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 11" data-page="11">11</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 12" aria-current="page" data-page="12">12</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 13" data-page="13">13</button></li><li class="ds-pagination__gap" aria-hidden="true">…</li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 248" data-page="248">248</button></li>
<li class="ds-pagination__compact" aria-hidden="true">12 de 248</li>
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Página siguiente" data-page="13"><ds-icon name="chevron-right"></ds-icon></button></li>
</ul></nav>
```

## Estados

Hover y foco se pueden forzar con `data-state`.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-pagination__page">3</button>

<button type="button" class="ds-pagination__page" aria-current="page">3</button>

<button type="button" class="ds-pagination__page" disabled="">3</button>
```

## Código

`onChange` avisa la página y el tamaño; quien carga los datos eres tú.

```html
import { createPagination } from 'https://lumeui.dev/v/1.9/lume.js';

const pagination = createPagination(document.querySelector('.ds-pagination'), {
  total: 248,
  pageSizes: [10, 25, 50],
  onChange: ({ page, pageSize }) => carregar(page, pageSize),
});

pagination.setTotal(100); // el total cambió (un filtro, por ejemplo)
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Son enlaces o botones comunes, dentro de una navegación con nombre.

- Página actual — Marcada con aria-current="page", además del resalte visual.
- Nombres completos — El lector de pantalla oye “Página 3” y “Página siguiente”, no solo “3” y una flecha.
- Cambio anunciado — El intervalo “11–20 de 248” queda en role="status".
- Foco en su lugar — Tab Enter — Al cambiar de página, el foco queda en la flecha o va a la página actual.

## Tokens usados

Todo lo que consume la paginación.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Números y resumen | #46586E | #CEC8C1 |
| color.bg.hover (`--ds-color-bg-hover`) | Número en hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Página actual | #3E516612 | #C0CAD61A |
| color.border.default (`--ds-color-border-default`) | Contorno de la actual | #3E516633 | #FFFFFF1A |
| color.fg.disabled (`--ds-color-fg-disabled`) | Flecha sin destino | #93A0B0 | #605D59 |
| radius.sm (`--ds-radius-sm`) | Esquinas | 8 px | 8 px |

## Uso

Cuándo usarla y cuándo preferir otra cosa.

- **Haz:** tablas y resultados. Cuando la persona busca algo y quiere volver a un punto de la lista.
- **Evita:** pocos elementos. Una sola página no necesita paginación. Oculta el componente.
- **Consejo:** Vuelve arriba. Al cambiar de página, lleva a la persona al inicio de la lista.
