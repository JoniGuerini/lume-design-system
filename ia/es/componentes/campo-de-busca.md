# Campo de búsqueda

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/campo-de-busca

Filtra una lista o una página mientras la persona escribe. Tiene la lupa, la × para borrar y, si quieres, una tecla que lleva el foco al campo desde cualquier lugar.

En números: borrar: × · Esc · atajo: / · type: search · tamaños: 3.

## Ejemplo

```html
<div class="ds-field">
  <ds-icon name="search" size="18"></ds-icon>
  <input class="ds-field__input" id="busca" type="search" aria-label="Buscar componentes" placeholder="Buscar">
</div>

<script type="module">
  import { createSearchField } from 'https://lumeui.dev/v/1.13/lume.js';
  createSearchField(document.querySelector('#busca'), { shortcut: '/' });
</script>
```

## Con y sin atajo

Con `shortcut`, la tecla aparece en el campo vacío y desaparece cuando hay texto, para dar lugar a la ×.

- Botón
- Botón dividido
- Campo de búsqueda
- Campo de dinero
- Campo de contraseña
- Estado vacío
- Grupo de campos

Nada encontrado para “”.

Filtrando una lista `onChange` — La lista acompaña cada letra. Sin resultado, di qué se buscó.

Con atajo `shortcut: '/'` — Para la búsqueda principal de la pantalla. Solo una por página.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" id="sf-list" type="search" aria-label="Buscar componentes" placeholder="Buscar" autocomplete="off"><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" hidden="" aria-label="Borrar búsqueda"><ds-icon name="x"></ds-icon></button>
</div>

<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" aria-label="Buscar componentes" placeholder="Buscar" value="">
<kbd class="ds-kbd ds-search__kbd">/</kbd>
</div>
```

## Estados

Vacío con la tecla, con texto y la ×, y en foco.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" aria-label="Buscar componentes" placeholder="Buscar" value="">
</div>

<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" aria-label="Buscar componentes" placeholder="Buscar" value="">
<kbd class="ds-kbd ds-search__kbd">/</kbd>
</div>

<div class="ds-field ds-search">
<ds-icon name="search"></ds-icon>
<input class="ds-field__input" type="search" aria-label="Buscar componentes" placeholder="Buscar" value="botón">
<span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"><ds-icon name="x"></ds-icon></span>
</div>
```

## Código

El nombre del campo viene de `aria-label` o de una etiqueta. El placeholder no es nombre.

```html
<div class="ds-field">
  <ds-icon name="search" size="18"></ds-icon>
  <input class="ds-field__input" id="busca" type="search" aria-label="Buscar clientes" placeholder="Buscar">
</div>

<script type="module">
  import { createSearchField } from 'https://lumeui.dev/v/1.13/lume.js';
  createSearchField(document.querySelector('#busca'), {
    shortcut: '/',
    onChange: (value) => filtrar(value),
  });
</script>

// React
<SearchField aria-label="Buscar clientes" value={busca} onChange={setBusca} shortcut="/" />
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Teclado de principio a fin, y el atajo dicho al lector de pantalla.

- Atajo anunciado — / — El campo lleva `aria-keyshortcuts`. La tecla no se dispara mientras la persona escribe en otro campo.
- Esc borra — Esc — Con texto, Esc borra y queda en el campo. Vacío, el Esc sigue y cierra el panel alrededor.
- La × con nombre — El botón de borrar se llama “Borrar búsqueda” y devuelve el foco al campo.
- Resultados — Si la lista cambia mientras la persona escribe, di el conteo en una región aria-live (“3 resultados”).

## Tokens usados

Además de los tokens del Campo de texto y de la Tecla.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.fg.muted (`--ds-color-fg-muted`) | Lupa y × | #46586E | #CEC8C1 |
| color.bg.hover (`--ds-color-bg-hover`) | Fondo de la tecla | #3E51660D | #FFFFFF0D |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** filtrar lo que está en pantalla. Clientes, sesiones, notas: la lista acompaña mientras la persona escribe.
- **Evita:** dos atajos iguales. Una tecla, una búsqueda. Con la paleta de comandos de Lume, la búsqueda de la página se queda con / y la paleta sigue en Ctrl K.
- **Consejo:** ¿Búsqueda de toda la app?. Para ir a cualquier página o acción, usa una búsqueda general, como la Ctrl K de este sitio.
