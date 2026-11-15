# Listado de datos

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/listagem

La pantalla que todo producto tiene: una lista que la persona busca, filtra, ordena y trata en lote. Todo a la vista, nada perdido al volver y cualquier acción con vuelta atrás.

En números: acción principal: 1 · fila de filtros: 1 · “¿estás seguro?”: 0.

## Ejemplo en vivo

Las personas de un espacio de trabajo. Busca, filtra, ordena por el encabezado, marca algunas y actúa en lote.

- Marca dos personas: la barra de lote ocupa el lugar de los filtros, con el conteo.
- Elimínalas y usa “Deshacer” en el aviso: vuelven al mismo lugar.
- Busca “xyz”: el vacío dice que es el filtro y ofrece limpiarlo.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-dl-role="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-239"><ds-icon name="users"></ds-icon>Cambiar función<ds-icon name="chevron-down"></ds-icon></button>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-dl-deactivate=""><ds-icon name="pause"></ds-icon>Desactivar</button>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-dl-remove=""><ds-icon name="trash"></ds-icon>Eliminar</button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-dl-clear-selection="" aria-label="Limpiar selección" data-ds-tooltip="Limpiar selección"><ds-icon name="x"></ds-icon></button>

<nav class="ds-pagination" data-dl-pages="" aria-label="Paginación">
<p class="ds-pagination__summary" role="status">1–8 de 22</p>
<ul class="ds-pagination__list" role="list">
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Página anterior" data-page="0" disabled=""><ds-icon name="chevron-left"></ds-icon></button></li>
<li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 1" aria-current="page" data-page="1">1</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 2" data-page="2">2</button></li><li class="ds-pagination__number"><button type="button" class="ds-pagination__page" aria-label="Página 3" data-page="3">3</button></li>
<li class="ds-pagination__compact" aria-hidden="true">1 de 3</li>
<li><button type="button" class="ds-pagination__page ds-pagination__arrow" aria-label="Página siguiente" data-page="2"><ds-icon name="chevron-right"></ds-icon></button></li>
</ul></nav>
```

## Anatomía

Seis partes, siempre en el mismo orden, de arriba abajo.

- 1 — Encabezado — Título, una frase de qué es la lista y una acción principal (Invitar). Exportar y similares van en secundario.
- 2 — Filtros — Búsqueda y los filtros más usados, en una fila. El orden queda en el encabezado de la tabla, en un solo lugar.
- 3 — Barra de lote — Ocupa el lugar de los filtros mientras hay selección: cuántas, qué se puede hacer con ellas y la X para salir.
- 4 — Tabla — La primera columna identifica la fila (avatar, nombre y correo). Orden en el encabezado de las columnas donde tiene sentido.
- 5 — Acciones de la fila — Un ⋯ al final de cada fila, siempre visible. Lo que es de una sola persona queda aquí, no en la barra de lote.
- 6 — Paginación — Abajo, con el intervalo (“1–8 de 22”). Filtrar vuelve a la página 1.

## Reglas

Seis decisiones que valen para cualquier lista de datos.

La dirección guarda la lista

Búsqueda, filtros, orden y página van a la URL. Volver, recargar y enviar el enlace a alguien muestran la misma lista.

La selección es de la página

El checkbox del encabezado marca solo lo que está a la vista. Filtrar o cambiar de página no arrastra la selección, para que nadie actúe sobre lo que no ve.

Deshacer en vez de confirmar

Eliminar y desactivar ocurren al instante, con “Deshacer” en el aviso. Una pregunta antes de cada acción solo enseña a pulsar “Sí” sin leer.

Las acciones no se esconden

El ⋯ de la fila queda siempre a la vista, no solo al pasar el mouse: en el toque y en el teclado no existe “pasar el mouse”.

Vacío por filtro no es lista vacía

Cuando los filtros no encuentran nada, dilo y ofrece “Limpiar filtros”. La invitación a empezar es para cuando de verdad no hay nada.

Fechas que se leen

“14 nov” en vez de “2026-11-14T09:12”. La hora exacta queda para el detalle de la persona.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4"></rect><path d="m8 12 3 3 5-6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M9 13.5 4.5 9 9 4.5M4.5 9h10a5 5 0 0 1 0 10H11"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><g fill="currentColor"><circle cx="6" cy="12" r="0.75"></circle><circle cx="12" cy="12" r="0.75"></circle><circle cx="18" cy="12" r="0.75"></circle></g></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m20 20-4.2-4.2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 7V5h14v2M12 5v14M9 19h6"></path></svg>
```

## Mensajes

Cortos, con el número y el nombre de lo que cambió. La acción viene junto, en el propio aviso.

| Situación | Evita | Prefiere |
| --- | --- | --- |
| Lote hecho | ¡Operación realizada con éxito! | 3 personas eliminadas. Deshacer |
| Sin resultados | No se encontraron registros. | Nadie con esos filtros. Limpiar filtros |
| Conteo | Mostrando registros 1 a 8 | 8 de 22 personas |
| Selección | Elementos seleccionados: 3 | 3 seleccionadas |

## Accesibilidad

Una tabla de verdad, con leyenda y encabezados, y cada cambio dicho en voz alta.

- Tabla con nombre — `<caption>` (puede quedar oculta) y `scope="col"` en los encabezados. El área que se desplaza tiene `tabindex="0"` para desplazarse con el teclado.
- Orden anunciado — El botón del encabezado cambia `aria-sort` en el `<th>`; el lector de pantalla dice “ascendente” o “descendente”.
- Checkbox con el nombre de la fila — “Seleccionar a Amanda Ribeiro”, no solo “Seleccionar”. El del encabezado queda mixto cuando parte de la página está marcada.
- Conteos anunciados — El conteo de los filtros y el de la selección están en regiones `aria-live`; el aviso de “Deshacer” es un toast con `role="status"`.
- El foco no se pierde — Después de eliminar, el foco va a la tabla, no al principio de la página. Al limpiar la selección, vuelve a los filtros.

## Código

La lista junta `createFilters`, la tabla, `createPagination` y `toast` con “Deshacer”. La barra de lote es marcado tuyo.

```html
<div class="lista">
  <div id="filtros"></div>

  <!-- aparece en el lugar de los filtros cuando hay selección -->
  <div class="barra-de-lote" role="region" aria-label="Acciones en lote" hidden>
    <p aria-live="polite">3 seleccionadas</p>
    <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm">Eliminar</button>
  </div>

  <div class="ds-table-wrap" role="region" aria-labelledby="leyenda" tabindex="0">
    <table class="ds-table ds-table--hover">
      <caption id="leyenda" class="ds-visually-hidden">Personas</caption>
      <thead><tr>
        <th scope="col" class="ds-table__check"><input type="checkbox" aria-label="Seleccionar las personas de esta página"></th>
        <th scope="col" aria-sort="ascending"><button type="button" class="ds-table__sort">Persona</button></th>
        …
      </tr></thead>
      <tbody>…</tbody>
    </table>
  </div>

  <nav class="ds-pagination" id="paginas" aria-label="Páginas"></nav>
</div>
```

```html
import { createFilters, createPagination, filtersToQuery, toast } from 'https://lumeui.dev/v/1.8/lume.js';

const pages = createPagination(document.querySelector('#paginas'), {
  total: personas.length, pageSize: 8,
  onChange: ({ page }) => render(),
});

const filters = createFilters(document.querySelector('#filtros'), {
  ...config,
  onChange(state) {
    history.replaceState(null, '', '?' + filtersToQuery(state, config));
    seleccion.clear();   // la selección no atraviesa filtros
    pages.setPage(1);
    render();
  },
});

function eliminar(ids) {
  const antes = [...personas];
  personas = personas.filter((p) => !ids.includes(p.id));
  render();
  toast(`${ids.length} personas eliminadas`, {
    action: { label: 'Deshacer', onClick: () => { personas = antes; render(); } },
  });
}
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

La lista es para comparar y actuar sobre muchas cosas parecidas. Para una sola, usa la página de detalle.

- **Haz:** pocas columnas, las que deciden. Cuatro o cinco columnas que ayudan a elegir la fila correcta. El resto vive en el detalle, a un clic.
- **Evita:** acción en lote escondida en el ⋯ de la fila. Lo que vale para varias filas queda en la barra de lote; el ⋯ es solo de esa fila. Mezclarlos hace adivinar sobre qué actúa la acción.
- **Consejo:** ¿Más de mil filas? Busca en el servidor. El patrón es el mismo: los filtros envían el estado, el servidor devuelve una página y el total. La tabla nunca necesita todo de una vez.
