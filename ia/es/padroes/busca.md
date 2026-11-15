# Búsqueda y comandos

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/busca

Tres maneras de encontrar: la paleta (Ctrl K) lleva a cualquier lugar, los filtros recortan una lista y los atajos ahorran el camino a quien ya sabe adónde va.

En números: abre la búsqueda: Ctrl K · también abre: / · niveles de relevancia: 3 · fila de filtros: 1.

## Paleta de comandos

Una sola caja para ir a cualquier página o disparar cualquier acción. Se abre con Ctrl K, con / o desde la lupa — y devuelve el foco a donde estaba al cerrar.

- 1 — Campo de búsqueda — Ya viene enfocado. Escribir filtra al instante — sin botón de buscar.
- 2 — Grupo — Agrupa por intención: ir a, crear, acciones, ayuda. El orden de los grupos es el de registro.
- 3 — Elemento activo — Fondo de selección y el ↵ a la derecha. ↑ ↓ mueven; el mouse también.
- 4 — Pista — Un atajo o un estado corto (“Próximamente”). Nunca una frase.
- 5 — Pie — Recuerda las teclas. Desaparece en el móvil, donde no hay teclado físico.

Una paleta solo de este ejemplo, con los comandos de una app de pedidos. Ctrl K sigue abriendo la de Lume.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-command__search"><ds-icon name="search"></ds-icon><span>inf<span></span></span><kbd class="ds-kbd">Esc</kbd><span>1</span></div>

<div class="ds-command__list">
<div class="ds-command__group"><div class="ds-command__group-label">Ir a<span>2</span></div>
<div class="ds-command__item" aria-selected="true"><ds-icon name="bar-chart"></ds-icon><span class="ds-command__label">Informes</span><ds-icon name="corner-down-left"></ds-icon><span>3</span></div>
</div>
<div class="ds-command__group"><div class="ds-command__group-label">Acciones</div>
<div class="ds-command__item"><ds-icon name="folder"></ds-icon><span class="ds-command__label">Archivar pedidos completados</span></div>
<div class="ds-command__item"><ds-icon name="keyboard"></ds-icon><span class="ds-command__label">Ver atajos de teclado</span><span class="ds-command__hint">?</span><span>4</span></div>
</div>
</div>

<footer class="ds-command__footer"><span><kbd class="ds-kbd">↑</kbd><kbd class="ds-kbd">↓</kbd> navegar</span><span><kbd class="ds-kbd">↵</kbd> abrir</span><span><kbd class="ds-kbd">Esc</kbd> cerrar</span><span>5</span></footer>

<button type="button" class="ds-btn ds-btn--primary" data-open-demo=""><ds-icon name="search"></ds-icon>Abrir la paleta de ejemplo</button>
```

## Registrar elementos

Cada elemento es un objeto. Pasa una función en `items` y la lista se lee de nuevo en cada apertura — los elementos que dependen del contexto aparecen solos.

| Campo | Para qué sirve |
| --- | --- |
|  `id`  | Único. Identifica el elemento. |
|  `label`  | Lo que aparece y lo que más pesa en la búsqueda. Empieza por el verbo o por el nombre del lugar. |
|  `group`  | Título del grupo. Los elementos del mismo grupo aparecen juntos. |
|  `icon`  | Un ícono de la biblioteca. Ayuda a leer la lista de un vistazo. |
|  `keywords`  | Sinónimos que la persona puede escribir (“hoja” encuentra “Exportar en CSV”). No aparecen. |
|  `description`  | También entra en la búsqueda. Úsala para acciones que necesitan contexto. |
|  `hint`  | Atajo o estado corto, a la derecha. |
|  `perform()`  | Lo que pasa con Enter o con el clic. La paleta se cierra antes. |

```html
import { createCommandPalette } from 'https://lumeui.dev/v/1.6/lume.js';

const palette = createCommandPalette({
  placeholder: 'Buscar páginas y acciones…',
  items: () => [
    { id: 'pedidos', label: 'Pedidos', group: 'Ir a', icon: 'inbox',
      keywords: ['ventas'], perform: () => go('/pedidos') },
    { id: 'nuevo', label: 'Nuevo pedido', group: 'Crear', icon: 'plus',
      hint: 'N', perform: () => openNewOrder() },
    { id: 'csv', label: 'Exportar en CSV', group: 'Acciones', icon: 'download',
      keywords: ['hoja de cálculo', 'excel'], perform: exportCsv },
  ],
});

// ⌘K, Ctrl K y / ya la abren. Para un botón:
button.addEventListener('click', () => palette.open());
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Cómo encuentra la búsqueda

Sin acento y sin mayúscula: “informacion” encuentra “Información”. Todas las palabras tienen que aparecer — en la etiqueta, el grupo, la descripción o las palabras clave. Después, el orden: la etiqueta que empieza con el texto va primero.

- Informes — Ir a — empieza con

- empieza con — La etiqueta empieza con el texto.
- contiene — La etiqueta tiene el texto en el medio.
- otro campo — Encontrado en el grupo, la descripción o las palabras clave.

Marcado de los ejemplos de esta sección:

```html
<label class="ds-field">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" value="inf" data-tester="" aria-label="Probar la búsqueda de la paleta" autocomplete="off" spellcheck="false">
</label>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="inf">inf</button>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="hoja">hoja</button>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="nuevo cli">nuevo cli</button>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="pedidos">pedidos</button>

<button type="button" class="ds-chip ds-chip--sm" data-try-query="xyz">xyz</button>
```

## Filtros

Una fila encima de la lista que recorta: búsqueda primero, después los filtros más usados y el orden al final. Lo que está activo aparece debajo, con una X para quitarlo — y el conteo dice cuánto queda.

Búsqueda primero — Es el filtro que todo el mundo prueba antes. Filtra mientras escribes (con una pausa corta) y Esc limpia. — Los más usados a la vista — Dos o tres filtros en la fila. El resto va a un botón “Más filtros” — nunca una segunda fila. — Ordenar no es filtrar — El orden queda al final de la fila y no aparece en los filtros activos: cambia el orden, no lo que queda. — Sin resultado, un camino — La lista vacía explica por qué y ofrece “Limpiar filtros”. Nunca una tabla vacía sin aviso.

## Estado en la URL

Un filtro que solo existe en la memoria se pierde al recargar y no se puede compartir. Guarda el estado en la URL — solo lo que difiere del predeterminado.

- Usa `replaceState`: el botón Atrás no debe deshacer letra por letra.
- Quien recibe el enlace ve la misma lista — incluido el orden.
- Un valor que no existe (un estado borrado) se ignora, no rompe la página.

```html
import { filtersToQuery, filtersFromQuery } from 'https://lumeui.dev/v/1.6/lume.js';

// al filtrar: cambia la URL sin apilar una entrada por letra escrita
history.replaceState(null, '', '?' + filtersToQuery(filters.value, config));

// al abrir la página (o en un enlace compartido): restaura
filters.setValue(filtersFromQuery(location.search, config));
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-url="" aria-label="Copiar enlace" data-ds-tooltip="Copiar enlace"><ds-icon name="link"></ds-icon></button>

<button type="button" class="ds-chip ds-chip--sm" data-restore="?status=pendente&amp;canal=app"><code>?status=pendente&amp;canal=app</code></button>

<button type="button" class="ds-chip ds-chip--sm" data-restore="?q=souza"><code>?q=souza</code></button>

<button type="button" class="ds-chip ds-chip--sm" data-restore="?desconto=1&amp;ordem=maior"><code>?desconto=1&amp;ordem=maior</code></button>

<button type="button" class="ds-chip ds-chip--sm" data-restore="?"><code>sin filtros</code></button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Atajos de teclado

Un atajo es un camino más, nunca el único. Muéstralo donde aparece la acción — en el tooltip, en el menú, en la paleta — y quien lo usa mucho lo aprende solo.

| Teclas | En Lume |
| --- | --- |
| Ctrl K | Abrir o cerrar la búsqueda |
| / | Abrir la búsqueda (fuera de campos) |
| Ctrl B | Contraer la sidebar o abrir el cajón |
| ↑ ↓ | Moverse en las listas, menús y en la paleta |
| ↵ | Abrir el elemento activo |
| Esc | Cerrar búsqueda, menú, cajón o limpiar la búsqueda de los filtros |

Dónde mostrarlo

Ctrl en Mac, Ctrl en el resto

Escribe el modificador del sistema de la persona. Cada tecla es un kbd aparte.

Una sola tecla, fuera de campos — “/” o “N” no se disparan mientras alguien escribe. Con modificador, valen en cualquier lugar.

No pelees con el navegador — Nada de Ctrl T, Ctrl W, Ctrl L o Ctrl R: son del navegador y del sistema.

Díselo a la tecnología de asistencia

Usa `aria-keyshortcuts` en el control que activa el atajo.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Nuevo pedido" data-ds-tooltip="Nuevo pedido" data-ds-tooltip-kbd="N" aria-keyshortcuts="N"><ds-icon name="plus"></ds-icon></button>

<button type="button" class="ds-chip" data-shortcut-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-224">Pedido<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<kbd class="ds-kbd">Ctrl</kbd>

<kbd class="ds-kbd">K</kbd>
```

## Accesibilidad

Buscar es la forma más rápida de navegar con teclado y lector de pantalla — siempre que cada pieza diga qué es.

- La paleta es un diálogo con combobox — ↑ ↓ ↵ — El campo es un `combobox` vinculado a la lista (`listbox`); el elemento activo se anuncia con `aria-activedescendant` sin quitar el foco del campo.
- Foco que vuelve — Esc — Al cerrar la paleta, el foco vuelve a quien la abrió. Al ejecutar un elemento, va a donde lleve la acción.
- Filtros en una región de búsqueda — La barra tiene `role="search"` con nombre; cada filtro es un botón con menú, con etiqueta y valor en el texto.
- Conteo anunciado — El “8 de 24 pedidos” queda en una región `aria-live="polite"`: el lector dice el resultado después de cada cambio, sin interrumpir.
- Quitar con nombre — La X de cada filtro activo dice qué quita (“Quitar filtro Estado: Pagado”). Después de quitar, el foco va al siguiente — o a la búsqueda.
- Lista vacía explicada — Sin resultados, la tabla da lugar a un mensaje con el motivo y un botón para limpiar.

## Código

La paleta y los filtros son módulos independientes; los dos solo piden datos y una función para cada acción.

### Filtros

```html
import { createFilters } from 'https://lumeui.dev/v/1.6/lume.js';

const filters = createFilters(document.querySelector('#filtros'), {
  label: 'Filtrar pedidos',
  search: { placeholder: 'Buscar por cliente o número' },
  fields: [
    { id: 'status', label: 'Estado', options: [{ value: 'pago', label: 'Pagado' }, …] },
    { id: 'canal', label: 'Canal', options: [{ value: 'app', label: 'App' }, …] },
  ],
  toggles: [{ id: 'desconto', label: 'Con descuento' }],
  sort: { id: 'ordem', label: 'Ordenar', options: [...], value: 'recentes' },
  noun: ['pedido', 'pedidos'],
  onChange(state) {
    const rows = buscar(state);            // { q, status, canal, desconto, ordem }
    render(rows);
    filters.setCount(rows.length, total);  // "8 de 24 pedidos", anunciado al lector de pantalla
  },
});

filters.clear();                           // limpia todo, menos el orden
```

| API | Qué hace |
| --- | --- |
|  `createFilters(el, config)`  | Arma la barra (búsqueda, filtros, interruptores, orden, activos, conteo) y devuelve el control. |
|  `filters.value · setValue(parcial) · clear()`  | Lee y cambia el estado; cada cambio llama a `onChange`. |
|  `filters.setCount(mostrados, total)`  | Actualiza el conteo anunciado. |
|  `filtersToQuery · filtersFromQuery`  | Estado ⇄ URL, ignorando lo que es predeterminado o no existe. |
|  `.ds-filters y partes`  | Las clases también sirven para una barra armada a mano (mira el comentario en filters.css). |

### Paleta

| Opción | Qué hace |
| --- | --- |
|  `items`  | Lista de elementos — o una función que devuelve la lista en cada apertura. |
|  `placeholder · label`  | Texto del campo y el nombre del diálogo para lectores de pantalla. |
|  `hotkeys: false`  | No conecta ⌘K ni /. Para paletas extra, como la de ejemplo de esta página. |
|  `open() · close() · destroy()`  | Control manual; destroy() quita el diálogo y los atajos. |
|  `filterCommands(items, busca)`  | La misma búsqueda de la paleta, para pruebas u otras listas. |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Encontrar debe ser más rápido que recordar dónde está.

- **Haz:** todo también por la paleta. Toda página y toda acción frecuente entra en la paleta, con sinónimos. Quien conoce el atajo nunca necesita buscar un menú.
- **Evita:** filtros dispersos. Un filtro dentro de cada tarjeta o columna confunde qué vale para qué. Una sola fila, encima de todo lo que recorta.
- **Consejo:** Etiqueta con la palabra de la persona. “Exportar en CSV” con la palabra clave “hoja de cálculo”. Piensa en lo que alguien escribiría, no en el nombre interno de la función.
