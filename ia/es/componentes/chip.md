# Chip

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/chip

Píldora con contorno para filtrar, elegir y mostrar selecciones. Más liviana que un botón, pensada para aparecer en grupo.

En números: tipos: 3 · tamaños: 2 · estados: 5 · altura (md / sm): 36/32.

## Ejemplo

```html
<button type="button" class="ds-chip" aria-pressed="true">
  <span class="ds-chip__check"><ds-icon name="check" size="14"></ds-icon></span>
  Oscuro
</button>
```

## Tipos

El mismo aspecto, tres trabajos distintos. Todos funcionan aquí.

Filtro `aria-pressed` — Activa y desactiva un criterio. Varios pueden estar activos a la vez.

Ordenado por: Recientes

Selector `aria-haspopup="menu"` — Muestra la elección actual y abre un menú para cambiarla.

Removible `ds-chip--removable` — Muestra algo que la persona agregó — y deja quitarlo.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-chip-group" role="group" aria-label="Plataformas" data-filter-demo="">
<button type="button" class="ds-chip" aria-pressed="true"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Web</button><button type="button" class="ds-chip" aria-pressed="false"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>iOS</button><button type="button" class="ds-chip" aria-pressed="false"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Android</button>
</div>

<button data-sort-chip="" type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-26"><span class="ds-chip__icon"><ds-icon name="filter"></ds-icon></span>Recientes<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<div class="ds-chip-group" role="list" aria-label="Etiquetas" data-tags=""><span role="listitem"><span class="ds-chip ds-chip--removable">Design<button type="button" class="ds-chip__remove" aria-label="Quitar Design"><ds-icon name="x"></ds-icon></button></span></span><span role="listitem"><span class="ds-chip ds-chip--removable">Tokens<button type="button" class="ds-chip__remove" aria-label="Quitar Tokens"><ds-icon name="x"></ds-icon></button></span></span><span role="listitem"><span class="ds-chip ds-chip--removable">Accesibilidad<button type="button" class="ds-chip__remove" aria-label="Quitar Accesibilidad"><ds-icon name="x"></ds-icon></button></span></span><span role="listitem"><span class="ds-chip ds-chip--removable">Movimiento<button type="button" class="ds-chip__remove" aria-label="Quitar Movimiento"><ds-icon name="x"></ds-icon></button></span></span></div>
```

## Filtros en grupo

Los filtros se combinan: activa más de uno. Ninguno activo es lo mismo que todos.

Mostrando 6 de 6

- Botón — Listo
- Chip — Listo
- Menú — En revisión
- Campo de texto — En revisión
- Tabla — En curso
- Modal — Planificado

Marcado de los ejemplos de esta sección:

```html
<div class="ds-chip-group" role="group" aria-label="Filtrar por estado" data-status-filter="">
<button type="button" class="ds-chip ds-chip--sm" aria-pressed="false" data-status="ready"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Listos</button><button type="button" class="ds-chip ds-chip--sm" aria-pressed="false" data-status="review"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>En revisión</button><button type="button" class="ds-chip ds-chip--sm" aria-pressed="false" data-status="progress"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>En curso</button><button type="button" class="ds-chip ds-chip--sm" aria-pressed="false" data-status="planned"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Planificados</button>
</div>

<button type="button" class="ds-inline-action" data-status-clear="" hidden=""><ds-icon name="x"></ds-icon>Borrar filtros</button>
```

## Tamaños

Mediano acompaña botones y campos; pequeño va en barras de filtro y dentro de tarjetas.

Mediano `predeterminado` — Altura 36 px · texto label-sm · 13 px · relleno 16 px, 12 px del lado del ícono o la flecha

Pequeño `ds-chip--sm` — Altura 32 px · texto caption · 12 px · relleno 12 px, 8 px del lado del ícono o la flecha

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-chip" aria-pressed="true"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Filtro</button>

<button type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="false"><span class="ds-chip__icon"><ds-icon name="filter"></ds-icon></span>Selector<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<span class="ds-chip ds-chip--removable">Etiqueta<button type="button" class="ds-chip__remove" aria-label="Quitar Etiqueta"><ds-icon name="x"></ds-icon></button></span>

<button type="button" class="ds-chip ds-chip--sm" aria-pressed="true"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Filtro</button>

<button type="button" class="ds-chip ds-chip--sm" aria-haspopup="menu" aria-expanded="false"><span class="ds-chip__icon"><ds-icon name="filter"></ds-icon></span>Selector<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<span class="ds-chip ds-chip--sm ds-chip--removable">Etiqueta<button type="button" class="ds-chip__remove" aria-label="Quitar Etiqueta"><ds-icon name="x"></ds-icon></button></span>
```

## Estados

Seleccionado gana fondo y un contorno más fuerte — y, en el filtro, la marca de check, para no depender solo del color. Fuerza un estado con `data-state`.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-chip" aria-pressed="false"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Web</button>

<button type="button" class="ds-chip" aria-pressed="true"><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Web</button>

<button type="button" class="ds-chip" aria-pressed="false" disabled=""><span class="ds-chip__check"><ds-icon name="check"></ds-icon></span>Web</button>

<button type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="false">Recientes<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="true">Recientes<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<button type="button" class="ds-chip" aria-haspopup="menu" aria-expanded="false" disabled="">Recientes<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>

<span class="ds-chip ds-chip--removable">Web<button type="button" class="ds-chip__remove" aria-label="Quitar Web"><ds-icon name="x"></ds-icon></button></span>

<span class="ds-chip ds-chip--removable" aria-disabled="true">Web<button type="button" class="ds-chip__remove" aria-label="Quitar Web"><ds-icon name="x"></ds-icon></button></span>
```

## Accesibilidad

Cada tipo tiene su semántica. El aspecto es el mismo; lo que oye el lector de pantalla, no.

- El filtro es un botón de alternancia — Enter Espacio — `<button aria-pressed>`: el lector anuncia “Web, botón de alternancia, presionado”.
- El selector abre un menú — ↓ Esc — `aria-haspopup="menu"` y `aria-expanded` — `createMenu` se encarga de los dos y de las flechas.
- Quitar tiene nombre — El botón de quitar dice qué quita (“Quitar Tokens”). Después, el foco pasa a la etiqueta vecina.
- Grupo con nombre — Envuelve los chips en `role="group"` con `aria-label` (“Filtrar por estado”).
- No solo color — El filtro activo muestra un check, además del fondo. El resultado del filtro se anuncia en una región viva.
- Objetivo cómodo — 36 px en el mediano; el pequeño (32 px) debe ir en barras con espacio entre los chips.

## Tokens usados

Todo lo que consume el chip.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.border.control (`--ds-color-border-control`) | Contorno | #3E516633 | #FFFFFF21 |
| color.border.strong (`--ds-color-border-strong`) | Contorno en hover y seleccionado | #3E51664D | #FFFFFF29 |
| color.bg.hover (`--ds-color-bg-hover`) | Hover | #3E51660D | #FFFFFF0D |
| color.bg.selected (`--ds-color-bg-selected`) | Seleccionado y abierto | #3E516612 | #C0CAD61A |
| color.fg.default (`--ds-color-fg-default`) | Etiqueta | #2B3847 | #F3EDE5 |
| color.fg.brand (`--ds-color-fg-brand`) | Ícono a la izquierda | #3E5166 | #DAE0E8 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Flecha y botón de quitar | #5C6C7F | #9C9792 |
| text.label-sm (`--ds-text-label-sm`) | Etiqueta (mediano) | 13/18 · medium | 13/18 · medium |
| text.caption (`--ds-text-caption`) | Etiqueta (pequeño) | 12/16 · regular | 12/16 · regular |
| radius.full (`--ds-radius-full`) | Forma de píldora | 9999 px | 9999 px |
| duration.fast (`--ds-duration-fast`) | Transición | 120ms | 120ms |
| opacity.disabled (`--ds-opacity-disabled`) | Desactivado | 0.44 | 0.44 |

## Uso

Tres reglas para chips que ayudan en vez de adornar.

- **Haz:** chips para elecciones rápidas. Filtros, orden, etiquetas — cosas que cambian la vista, no que ejecutan algo.
- **Evita:** chip como botón de acción. “Publicar”, “Eliminar”, “Enviar” son acciones: usa un botón.
- **Consejo:** Hasta seis por grupo. Con más opciones, cámbialo por un selector que abre un menú — cabe en una línea y se lee mejor.
