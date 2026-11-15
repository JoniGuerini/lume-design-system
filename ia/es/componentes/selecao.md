# Selector

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/selecao

Para elegir una o varias opciones de una lista. La lista es de Lume — el mismo aspecto de los menús, con búsqueda cuando crece —, pero el valor vive en un `<select>` real, que va junto con el formulario.

En números: tipos: 3 · tamaños: 3 · patrón ARIA: combobox · sin JS: nativo.

## Ejemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="idioma">Idioma</label>
  <select id="idioma" name="idioma" data-ds-select data-icon="globe">
    <option selected>Português (Brasil)</option>
    <option>English (US)</option>
    <option>Español</option>
  </select>
</div>

<script type="module">
  import { mountSelects } from 'https://lumeui.dev/v/1.5/lume.js';
  mountSelects(document);
</script>
```

## Cuál usar

Tres tipos de selector para formularios y el chip con menú para filtros. Las listas tienen el mismo aspecto; cambia lo que pasa al elegir.

Selector `select[data-ds-select]` — En el formulario. El valor va junto al guardar.

Visitas

12.480 — visitas

Chip con menú `ds-chip + createMenu` — En el filtro. Cambia la pantalla al instante.

|  | Única | Con búsqueda | Múltiple | Chip de filtro |
| --- | --- | --- | --- | --- |
| Cuándo | Una elección en un formulario, pocas opciones. | Una elección en una lista larga: país, ciudad, persona. | Varias elecciones: etiquetas, responsables, categorías. | Filtro rápido que cambia la pantalla al instante. |
| Opciones | 5 a ~15 | 15 a cientos | De pocas a cientos (con búsqueda) | Hasta ~7 |
| Efecto | Vale al enviar | Vale al enviar | Vale al enviar | Inmediato |
| Valor | `<select>` real | `<select>` real | `<select multiple>` real | Estado de la pantalla |
| Atributos | `data-ds-select` | + `data-search` | + `multiple` | ds-chip + createMenu |

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-form-tz-label">Zona horaria</label>
<div class="ds-select"><select id="sl-form-tz" name="fuso" data-ds-select="" data-icon="globe" aria-describedby="sl-form-tz-hint" class="ds-select__native" data-enhanced="" aria-hidden="true"><optgroup label="Brasil"><option selected="">Brasília (UTC−3)</option><option>Manaus (UTC−4)</option><option>Fernando de Noronha (UTC−2)</option><option disabled="">Rio Branco (UTC−5) — pronto</option></optgroup><optgroup label="Europa"><option>Lisboa (UTC+0)</option><option>Madrid (UTC+1)</option><option>Berlín (UTC+1)</option></optgroup><optgroup label="América del Norte"><option>Nueva York (UTC−5)</option><option>Ciudad de México (UTC−6)</option></optgroup></select><button type="button" class="ds-select__trigger" id="sl-form-tz-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-form-tz-listbox" aria-labelledby="sl-form-tz-label" aria-describedby="sl-form-tz-hint"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Brasília (UTC−3)</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="sl-form-tz-hint">Se usa en recordatorios e informes.</p></div>
</div>

<button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">Guardar</button>

<button type="button" class="ds-chip" data-period="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-49"><span class="ds-chip__icon"><ds-icon name="calendar"></ds-icon></span><span data-label="">Últimos 30 días</span><span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>
```

## Con búsqueda

Con `data-search`, la lista gana un campo arriba y el foco va directo a él. Filtra sin tildes y sin distinguir mayúsculas — incluso por el nombre del grupo.

- Filtra al escribir y destaca el fragmento encontrado, sin cambiar el texto que lee el lector de pantalla.
- ↑ ↓ recorren solo las visibles; Enter elige y cierra.
- Esc borra la búsqueda; con la búsqueda vacía, cierra.
- ¿Nada encontrado? La lista avisa “No hay resultados para …” en lugar de las opciones.

```html
<select id="pais" name="pais" data-ds-select data-search
        data-search-placeholder="Buscar país o continente">
  <optgroup label="América del Sur">
    <option>Argentina</option>
    <option selected>Brasil</option>
  </optgroup>
  …
</select>
```

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-search-person-label">Responsable</label>
<div class="ds-select"><select id="sl-search-person" name="responsavel" data-ds-select="" data-icon="users" data-search="" data-search-placeholder="Buscar persona" aria-describedby="sl-search-person-hint" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Ana Souza</option><option>Bruno Lima</option><option>Carla Dias</option><option>Diego Ramos</option><option>Elisa Prado</option><option>Fábio Nunes</option><option>Gabriela Rocha</option><option>Heitor Melo</option><option>Isabela Torres</option><option>João Pedro Alves</option><option>Lívia Castro</option><option>Marcos Vieira</option></select><button type="button" class="ds-select__trigger" id="sl-search-person-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-search-person-listbox" aria-labelledby="sl-search-person-label" aria-describedby="sl-search-person-hint"><ds-icon name="users"></ds-icon><span class="ds-select__value">Ana Souza</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="sl-search-person-hint">Escribe con la lista cerrada: la búsqueda empieza con esa letra.</p></div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Selección múltiple

Con `multiple`, cada opción gana una casilla y la lista no se cierra al elegir. Los elegidos se vuelven chips en el campo — hasta dos líneas, después “+N”.

Caso principal: etiquetas

`multiple data-search data-max="5" data-footer`

Sin búsqueda, con chips

`multiple`

Conteo en lugar de chips

`multiple data-display="count" data-footer`

- Clic, Espacio o Enter alternan sin cerrar. En la búsqueda, Espacio escribe — usa Enter.
- Quitar uno: la × del chip, desmarcar en la lista o Backspace. Todos: la × del campo o “Borrar”.
- Seleccionar todos respeta la búsqueda actual y el límite.
- Con límite, el resto queda desactivado y la lista explica por qué.

```html
<select id="etiquetas" name="etiquetas" multiple data-ds-select
        data-search data-max="5" data-footer
        data-placeholder="Añade etiquetas">
  <optgroup label="Design">
    <option selected>Componente</option>
    <option selected>Token</option>
  </optgroup>
  …
</select>

<!-- los elegidos llegan como una lista -->
<script>
  new FormData(form).getAll('etiquetas'); // ['Componente', 'Token']
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">Guardar</button>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-categories-label">Categorías</label>
<div class="ds-select ds-select--multiple"><select id="sl-categories" name="categorias" data-ds-select="" multiple="" data-display="count" data-footer="" data-placeholder="Todas las categorías" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Alimentación</option><option selected="">Transporte</option><option selected="">Vivienda</option><option>Salud</option><option>Educación</option><option>Ocio</option><option>Suscripciones</option><option>Viajes</option><option>Pets</option><option>Regalos</option></select><div class="ds-select__trigger ds-select__trigger--multi">
<div class="ds-select__values">
<button type="button" class="ds-select__combobox" id="sl-categories-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-categories-listbox" aria-labelledby="sl-categories-label"><span class="ds-select__summary">3 seleccionados</span><span class="ds-visually-hidden" data-sr="">: Alimentación, Transporte, Vivienda</span></button>
</div>
<button type="button" class="ds-select__clear" aria-label="Borrar selección"><ds-icon name="x"></ds-icon></button>
<ds-icon name="chevron-down"></ds-icon></div></div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Tamaños

Los mismos tres del campo de texto — se alinean lado a lado en un formulario. Usa `data-size` en el select; en el múltiple, los chips acompañan.

Pequeño `data-size="sm"` — 32 px de altura mínima.

Mediano `predeterminado` — 40 px de altura mínima.

Grande `data-size="lg"` — 48 px de altura mínima.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-size-sm-label">Pequeño</label>
<div class="ds-select ds-select--sm"><select id="sl-size-sm" data-ds-select="" data-size="sm" data-icon="globe" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-size-sm-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-size-sm-listbox" aria-labelledby="sl-size-sm-label"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-size-md-label">Mediano</label>
<div class="ds-select"><select id="sl-size-md" data-ds-select="" data-icon="globe" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-size-md-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-size-md-listbox" aria-labelledby="sl-size-md-label"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-size-lg-label">Grande</label>
<div class="ds-select ds-select--lg"><select id="sl-size-lg" data-ds-select="" data-size="lg" data-icon="globe" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-size-lg-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-size-lg-listbox" aria-labelledby="sl-size-lg-label"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>
```

## Estados

Iguales a los del campo de texto, en el único y en el múltiple. Para documentar y probar, fuerza hover o foco con `data-ds-state` en el select.

Predeterminado — Contorno discreto y flecha a la derecha.

Hover — El contorno se vuelve más fuerte.

Foco o abierto — Contorno en el color de foco, halo suave y la flecha gira.

Sin elección — El texto vacío aparece atenuado, como un placeholder.

Desactivado — Opacidad reducida y fuera del orden de foco.

Inválido — Contorno y mensaje de peligro.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-default-label">Idioma</label>
<div class="ds-select"><select id="sl-state-default" data-ds-select="" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-default-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-default-listbox" aria-labelledby="sl-state-default-label"><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-hover-label">Idioma</label>
<div class="ds-select"><select id="sl-state-hover" data-ds-select="" data-ds-state="hover" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-hover-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-hover-listbox" aria-labelledby="sl-state-hover-label"><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-focus-label">Idioma</label>
<div class="ds-select"><select id="sl-state-focus" data-ds-select="" data-ds-state="focus" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-focus-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-focus-listbox" aria-labelledby="sl-state-focus-label"><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-placeholder-label">Idioma</label>
<div class="ds-select"><select id="sl-state-placeholder" data-ds-select="" class="ds-select__native" data-enhanced="" aria-hidden="true"><option value="" selected="">Elige un idioma</option><option>Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-placeholder-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-placeholder-listbox" aria-labelledby="sl-state-placeholder-label"><span class="ds-select__value" data-placeholder="">Elige un idioma</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-multi-placeholder-label">Idiomas</label>
<div class="ds-select ds-select--multiple"><select id="sl-state-multi-placeholder" data-ds-select="" multiple="" data-placeholder="Elige idiomas" class="ds-select__native" data-enhanced="" aria-hidden="true"><option>Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option></select><div class="ds-select__trigger ds-select__trigger--multi">
<div class="ds-select__values">
<ul class="ds-select__chips" role="list"></ul>
<button type="button" class="ds-select__combobox" id="sl-state-multi-placeholder-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-multi-placeholder-listbox" aria-labelledby="sl-state-multi-placeholder-label"><span class="ds-select__summary" data-placeholder="">Elige idiomas</span><span class="ds-visually-hidden" data-sr=""></span></button>
</div>
<button type="button" class="ds-select__clear" aria-label="Borrar selección" hidden=""><ds-icon name="x"></ds-icon></button>
<ds-icon name="chevron-down"></ds-icon></div></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-disabled-label">Idioma</label>
<div class="ds-select"><select id="sl-state-disabled" data-ds-select="" disabled="" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-disabled-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-disabled-listbox" aria-labelledby="sl-state-disabled-label" disabled="" data-disabled=""><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-invalid-label">Idioma</label>
<div class="ds-select"><select id="sl-state-invalid" data-ds-select="" aria-invalid="true" aria-describedby="sl-state-invalid-error" class="ds-select__native" data-enhanced="" aria-hidden="true"><option value="" selected="">Elige un idioma</option><option>Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-invalid-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-invalid-listbox" aria-labelledby="sl-state-invalid-label" aria-invalid="true" aria-describedby="sl-state-invalid-error" data-invalid=""><span class="ds-select__value" data-placeholder="">Elige un idioma</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__error" id="sl-state-invalid-error"><ds-icon name="alert-circle"></ds-icon><span>Elige al menos una opción para continuar.</span></p></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-multi-invalid-label">Idiomas</label>
<div class="ds-select ds-select--multiple"><select id="sl-state-multi-invalid" data-ds-select="" multiple="" data-placeholder="Elige idiomas" aria-invalid="true" aria-describedby="sl-state-multi-invalid-error" class="ds-select__native" data-enhanced="" aria-hidden="true"><option>Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option></select><div class="ds-select__trigger ds-select__trigger--multi" data-invalid="">
<div class="ds-select__values">
<ul class="ds-select__chips" role="list"></ul>
<button type="button" class="ds-select__combobox" id="sl-state-multi-invalid-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-multi-invalid-listbox" aria-labelledby="sl-state-multi-invalid-label" aria-invalid="true" aria-describedby="sl-state-multi-invalid-error"><span class="ds-select__summary" data-placeholder="">Elige idiomas</span><span class="ds-visually-hidden" data-sr=""></span></button>
</div>
<button type="button" class="ds-select__clear" aria-label="Borrar selección" hidden=""><ds-icon name="x"></ds-icon></button>
<ds-icon name="chevron-down"></ds-icon></div></div>
<div class="ds-form-field__footer"><p class="ds-form-field__error" id="sl-state-multi-invalid-error"><ds-icon name="alert-circle"></ds-icon><span>Elige al menos una opción para continuar.</span></p></div>
</div>
```

## Grupos y desactivados

`<optgroup>` se vuelve una etiqueta de grupo en la lista; `<option disabled>` aparece, pero el teclado y el clic saltan la opción.

```html
<select id="zona" data-ds-select data-icon="globe">
  <optgroup label="Brasil">
    <option selected>Brasília (UTC−3)</option>
    <option disabled>Rio Branco (UTC−5) — pronto</option>
  </optgroup>
  <optgroup label="Europa">
    <option>Lisboa (UTC+0)</option>
  </optgroup>
</select>
```

Sin JavaScript, el mismo `<select>` aparece como lista nativa del sistema, ya con el aspecto básico del campo. No se pierde nada.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-groups-tz-label">Zona horaria</label>
<div class="ds-select"><select id="sl-groups-tz" data-ds-select="" data-icon="globe" aria-describedby="sl-groups-tz-hint" class="ds-select__native" data-enhanced="" aria-hidden="true"><optgroup label="Brasil"><option selected="">Brasília (UTC−3)</option><option>Manaus (UTC−4)</option><option>Fernando de Noronha (UTC−2)</option><option disabled="">Rio Branco (UTC−5) — pronto</option></optgroup><optgroup label="Europa"><option>Lisboa (UTC+0)</option><option>Madrid (UTC+1)</option><option>Berlín (UTC+1)</option></optgroup><optgroup label="América del Norte"><option>Nueva York (UTC−5)</option><option>Ciudad de México (UTC−6)</option></optgroup></select><button type="button" class="ds-select__trigger" id="sl-groups-tz-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-groups-tz-listbox" aria-labelledby="sl-groups-tz-label" aria-describedby="sl-groups-tz-hint"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Brasília (UTC−3)</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="sl-groups-tz-hint">Rio Branco todavía no está disponible.</p></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-groups-off-label">Plan</label>
<div class="ds-select"><select id="sl-groups-off" data-ds-select="" disabled="" aria-describedby="sl-groups-off-hint" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Equipo (fijado por el administrador)</option></select><button type="button" class="ds-select__trigger" id="sl-groups-off-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-groups-off-listbox" aria-labelledby="sl-groups-off-label" aria-describedby="sl-groups-off-hint" disabled="" data-disabled=""><span class="ds-select__value">Equipo (fijado por el administrador)</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="sl-groups-off-hint">Solo quien administra la cuenta puede cambiarlo.</p></div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Teclado y accesibilidad

Sigue el patrón de combobox de WAI-ARIA. La opción activa se anuncia con `aria-activedescendant`, en el disparador o en el campo de búsqueda.

### Todos los tipos

| Tecla | Cerrado | Abierto |
| --- | --- | --- |
| Enter Espacio | Abre la lista | Única: elige y cierra · Múltiple: marca o desmarca |
| ↓ ↑ | Abre en la opción elegida | Recorre las opciones visibles (salta las desactivadas) |
| Home End | Abre en la primera o en la última | Va a la primera o a la última (sin búsqueda) |
| Page ↓ Page ↑ | — | Salta 10 opciones |
| Esc | — | Cierra sin cambiar nada |
| Tab | Sigue al siguiente campo | Única sin búsqueda: elige la activa y sigue · Demás: cierra y sigue |

### Sin búsqueda

| Tecla | Cerrado | Abierto |
| --- | --- | --- |
| A–Z | Abre en la primera que empieza con la letra | Salta a la siguiente con la letra |

### Con búsqueda

| Tecla | Cerrado | Abierto |
| --- | --- | --- |
| A–Z | Abre la lista y empieza la búsqueda con la letra | Filtra la lista |
| Espacio | Abre la lista | Escribe un espacio en la búsqueda |
| Esc | — | Borra la búsqueda; vacía, cierra |

### Múltiple

| Tecla | Cerrado | Abierto |
| --- | --- | --- |
| Backspace | Quita el último elegido | En la búsqueda vacía, quita el último elegido |
| Ctrl A | — | Marca todas las visibles (sin búsqueda), respetando el límite |

- Los roles correctos — Disparador con `role="combobox"`, `aria-haspopup="listbox"` y `aria-expanded`; lista `role="listbox"`; opciones con `aria-selected`.
- La búsqueda es el combobox — Con búsqueda, el campo de arriba tiene `role="combobox"` y `aria-autocomplete="list"`; el destaque del fragmento no cambia el texto leído.
- Múltiple anunciado — La lista tiene `aria-multiselectable="true"`; el disparador lee “3 seleccionados: …” y cada chip tiene un botón “Quitar X”.
- Un solo valor, en el lugar correcto — El select real queda oculto a la lectura y al foco, pero guarda el valor y dispara `change` — tu código no cambia.
- Validación nativa — `required` funciona en los tres tipos: sin elección, el disparador recibe el foco y queda inválido.
- Límite explicado — Con `data-max`, las opciones restantes quedan desactivadas y la lista muestra por qué.

## Tokens usados

El disparador usa los tokens del campo de texto; la lista, los del menú; los chips, los del chip pequeño.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Altura (mediano) | 40 px | 40 px |
| radius.md (`--ds-radius-md`) | Radio del disparador | 12 px | 12 px |
| text.body-sm (`--ds-text-body-sm`) | Valor elegido | 14/22 · regular | 14/22 · regular |
| color.border.control (`--ds-color-border-control`) | Contorno del disparador | #3E516633 | #FFFFFF21 |
| color.border.strong (`--ds-color-border-strong`) | Hover y borde de la lista | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Foco y lista abierta | #53657A | #C0CAD6 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Flecha, ícono, placeholder, grupo y casilla vacía | #5C6C7F | #9C9792 |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo de la lista | #FFFFFF | #2C2A27 |
| radius.lg (`--ds-radius-lg`) | Radio de la lista | 16 px | 16 px |
| shadow.xl (`--ds-shadow-xl`) | Sombra de la lista | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| color.bg.hover (`--ds-color-bg-hover`) | Opción activa y aviso de límite | #3E51660D | #FFFFFF0D |
| color.fg.brand (`--ds-color-fg-brand`) | Marca de la elegida y fragmento encontrado | #3E5166 | #DAE0E8 |
| color.brand.solid (`--ds-color-brand-solid`) | Casilla marcada (múltiple) | #3E5166 | #C0CAD6 |
| color.bg.selected (`--ds-color-bg-selected`) | Chips elegidos | #3E516612 | #C0CAD61A |
| color.danger.solid (`--ds-color-danger-solid`) | Contorno inválido | #C13834 | #FF9087 |
| duration.base (`--ds-duration-base`) | Flecha y entrada de la lista | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Curva de la entrada | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| opacity.disabled (`--ds-opacity-disabled`) | Desactivado y por encima del límite | 0.44 | 0.44 |

## Uso

Elige el tipo según el tamaño de la lista y la cantidad de elecciones.

- **Haz:** lista larga con búsqueda. Por encima de ~15 opciones, activa la búsqueda. Agrupa cuando haya una división natural (continente, área).
- **Evita:** múltiple con pocas opciones. Con hasta 5 opciones, los checkboxes muestran todo de una vez y piden un clic menos.
- **Consejo:** ¿Límite? Di cuál. Pon el límite en la pista (“hasta 5”) — la lista también avisa cuando se alcanza.
