# Estado vacío

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/estado-vazio

Lo que aparece en lugar de una lista o un panel sin nada: qué falta, por qué y el siguiente paso. Para el texto de cada situación (primer uso, sin resultados, error), mira el patrón Estados vacíos.

En números: tamaños: 3 · tonos: 4 · partes: 5 · rol ARIA: status.

## Ejemplo

```html
<div class="ds-empty" role="status">
  <span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
  <p class="ds-empty__title">Ningún cliente todavía</p>
  <p class="ds-empty__description">Registra el primero para agendar sesiones y emitir recibos.</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--primary">Registrar cliente</button>
  </div>
</div>

// React
<EmptyState
  icon="users"
  title="Ningún cliente todavía"
  description="Registra el primero para agendar sesiones y emitir recibos."
  actions={<Button variant="primary">Registrar cliente</Button>}
/>
```

## Tamaños

Del tamaño del lugar que quedó vacío: la lista entera, un panel o una fila.

Página `ds-empty` — La lista o la pantalla entera. El predeterminado.

Compacto `ds-empty--compact` — Dentro de un panel o de una tarjeta.

En línea `ds-empty--inline` — En una fila de tabla o de lista, sin botón.

Sin contorno `ds-empty--plain` — Cuando ya está dentro de una tarjeta, que hace el contorno.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-empty" role="status">
<span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
<p class="ds-empty__title">Ningún cliente todavía</p>
<p class="ds-empty__description">Registra el primero para agendar sesiones y emitir recibos.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Registrar cliente</button></div>
</div>

<div class="ds-empty ds-empty--compact" role="status">
<span class="ds-empty__icon"><ds-icon name="calendar"></ds-icon></span>
<p class="ds-empty__title">Ninguna sesión hoy</p>
<p class="ds-empty__description">La agenda del día aparece aquí.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary ds-btn--sm"><ds-icon name="plus"></ds-icon>Agendar sesión</button></div>
</div>

<div class="ds-empty ds-empty--inline" role="status">
<span class="ds-empty__icon"><ds-icon name="search-x"></ds-icon></span>
<p class="ds-empty__title">Nada esta semana</p>
<p class="ds-empty__description">Cambia el período para ver más.</p>
</div>

<div class="ds-card"><div class="ds-empty ds-empty--compact ds-empty--plain" role="status">
<span class="ds-empty__icon"><ds-icon name="file-text"></ds-icon></span>
<p class="ds-empty__title">Ninguna nota</p>
<p class="ds-empty__description">Las notas de la sesión quedan aquí.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary ds-btn--sm"><ds-icon name="plus"></ds-icon>Escribir nota</button></div>
</div></div>
```

## Tonos

El tono va solo en el ícono. Error y atención piden una acción de recuperación; atenuado es para lo que no depende de la persona.

Neutro `—`

Error `ds-empty--danger`

Atención `ds-empty--warning`

Atenuado `ds-empty--muted`

Marcado de los ejemplos de esta sección:

```html
<div class="ds-empty ds-empty--compact" role="status">
<span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
<p class="ds-empty__title">Neutro</p>
</div>

<div class="ds-empty ds-empty--compact ds-empty--danger" role="status">
<span class="ds-empty__icon"><ds-icon name="alert-circle"></ds-icon></span>
<p class="ds-empty__title">Error</p>
</div>

<div class="ds-empty ds-empty--compact ds-empty--warning" role="status">
<span class="ds-empty__icon"><ds-icon name="wifi-off"></ds-icon></span>
<p class="ds-empty__title">Atención</p>
</div>

<div class="ds-empty ds-empty--compact ds-empty--muted" role="status">
<span class="ds-empty__icon"><ds-icon name="lock"></ds-icon></span>
<p class="ds-empty__title">Atenuado</p>
</div>
```

## Código

Solo CSS. En React, `EmptyState` arma el mismo marcado.

```html
<div class="ds-empty" role="status">
  <span class="ds-empty__icon"><ds-icon name="users"></ds-icon></span>
  <p class="ds-empty__title">Ningún cliente todavía</p>
  <p class="ds-empty__description">Registra el primero para agendar sesiones y emitir recibos.</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--primary">Registrar cliente</button>
  </div>
</div>

// React
<EmptyState
  icon="users"
  title="Ningún cliente todavía"
  description="Registra el primero para agendar sesiones y emitir recibos."
  actions={<Button variant="primary" icon="plus">Registrar cliente</Button>}
/>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

El vacío también es contenido, y se dice.

- Anunciado sin interrumpir — `role="status"`: cuando una búsqueda vacía la lista, el lector de pantalla oye el título.
- Ícono decorativo — El ícono no se lee: el título lo dice todo.
- Acción con verbo — “Registrar cliente”, no “Haz clic aquí”: el botón tiene sentido fuera de contexto.

## Tokens usados

Todo lo que consume el estado vacío.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.sunken (`--ds-color-bg-sunken`) | Fondo | #E8EDF3 | #151412 |
| color.border.default (`--ds-color-border-default`) | Contorno discontinuo | #3E516633 | #FFFFFF1A |
| color.bg.muted (`--ds-color-bg-muted`) | Fondo del ícono | #DAE0E8 | #3D3B38 |
| color.fg.brand (`--ds-color-fg-brand`) | Ícono | #3E5166 | #DAE0E8 |
| text.heading-md (`--ds-text-heading-md`) | Título | 21/28 · regular | 21/28 · regular |
| radius.2xl (`--ds-radius-2xl`) | Esquinas | 28 px | 28 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** siempre un siguiente paso. Crear, borrar la búsqueda, intentar de nuevo. Vacío sin salida es un callejón.
- **Evita:** ilustración en lugar del texto. El ícono acompaña; quien explica es el título y la descripción.
- **Consejo:** El texto de cada situación. Primer uso, sin resultados, error, sin permiso, offline: el patrón Estados vacíos tiene el texto de cada uno.
