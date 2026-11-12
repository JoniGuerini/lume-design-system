# Tooltip

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/tooltip

Una pista corta que aparece al pasar el mouse o al enfocar. Nombra íconos y muestra atajos — nunca guarda información que la persona necesita para seguir.

En números: posiciones: 4 · espera: 450 ms · ancho máximo: 240 px · JavaScript: 0 líneas.

## Ejemplo

```html
<button type="button" class="ds-icon-btn" aria-label="Buscar"
  data-ds-tooltip="Buscar"
  data-ds-tooltip-kbd="⌘K">
  <ds-icon name="search"></ds-icon>
</button>
```

## Posiciones

Arriba es el predeterminado. Elige otra cuando la pista taparía algo importante o cuando el disparador está en un borde — cerca del límite de la pantalla, se ajusta sola.

Pasa el mouse

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Tooltip arriba" data-ds-tooltip="Arriba" data-ds-tooltip-placement="top"><ds-icon name="arrow-up"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Tooltip a la derecha" data-ds-tooltip="A la derecha" data-ds-tooltip-placement="right"><ds-icon name="arrow-right"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Tooltip abajo" data-ds-tooltip="Abajo" data-ds-tooltip-placement="bottom"><ds-icon name="chevron-down"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Tooltip a la izquierda" data-ds-tooltip="A la izquierda" data-ds-tooltip-placement="left"><ds-icon name="arrow-left"></ds-icon></button>
```

## Con atajo

El mejor lugar para enseñar un atajo es la pista de la acción. Usa `data-ds-tooltip-kbd`.

Buscar `⌘K`

Contraer menú `⌘B`

Cerrar `Esc`

Marcado de los ejemplos de esta sección:

```html
<span class="ds-tooltip" data-open="">Buscar<kbd class="ds-kbd">⌘K</kbd></span>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Buscar" data-ds-tooltip="Buscar" data-ds-tooltip-placement="top" data-ds-tooltip-kbd="⌘K"><ds-icon name="search"></ds-icon></button>

<span class="ds-tooltip" data-open="">Contraer menú<kbd class="ds-kbd">⌘B</kbd></span>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Contraer menú" data-ds-tooltip="Contraer menú" data-ds-tooltip-placement="top" data-ds-tooltip-kbd="⌘B"><ds-icon name="panel-left"></ds-icon></button>

<span class="ds-tooltip" data-open="">Cerrar<kbd class="ds-kbd">Esc</kbd></span>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Cerrar" data-ds-tooltip="Cerrar" data-ds-tooltip-placement="top" data-ds-tooltip-kbd="Esc"><ds-icon name="x"></ds-icon></button>
```

## Comportamiento

Una espera corta evita pistas parpadeando cuando el puntero solo pasa. Después de la primera, las siguientes aparecen al instante.

Pruébalo: detente en el primero y desliza hacia los demás.

- Con el foco del teclado aparece al instante, sin espera.
- Desaparece al salir, hacer clic, desplazar la página o pulsar Esc.
- En pantallas táctiles no aparece — por eso nada esencial puede depender de ella.
- Un tooltip a la vez: hay un solo elemento en la página, reposicionado en cada disparador.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn" aria-label="Inicio" data-ds-tooltip="Inicio" data-ds-tooltip-placement="bottom"><ds-icon name="home"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Buscar" data-ds-tooltip="Buscar" data-ds-tooltip-placement="bottom"><ds-icon name="search"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Notificaciones" data-ds-tooltip="Notificaciones" data-ds-tooltip-placement="bottom"><ds-icon name="bell"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Calendario" data-ds-tooltip="Calendario" data-ds-tooltip-placement="bottom"><ds-icon name="calendar"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Configuración" data-ds-tooltip="Configuración" data-ds-tooltip-placement="bottom"><ds-icon name="settings"></ds-icon></button>

<button type="button" class="ds-icon-btn" aria-label="Tu cuenta" data-ds-tooltip="Tu cuenta" data-ds-tooltip-placement="bottom"><ds-icon name="user-circle"></ds-icon></button>
```

## Cuándo no usar

Si la persona necesita la información para continuar, no puede quedar oculta.

Información esencial — Reglas de contraseña, plazos, precios: escríbelos en pantalla, cerca del campo.

Contenido interactivo — Los enlaces o botones dentro de la pista no se pueden alcanzar. Usa un menú o un panel.

Texto largo — Más de una línea corta se vuelve lectura. Hasta ~240 px; si pasa de eso, es texto de la página.

Elemento desactivado — Un botón desactivado no recibe foco ni hover — la pista nunca aparece. Explica el motivo al lado.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>
```

## Accesibilidad

La pista complementa — el nombre accesible siempre viene del propio elemento.

- Nombre en el elemento — El botón de ícono lleva `aria-label` con el mismo texto de la pista. El tooltip en sí es `aria-hidden`, para no leerse dos veces.
- Teclado — Tab Esc — Aparece con el foco visible y desaparece con Esc, sin mover el foco.
- Persistente — Queda visible mientras el puntero está en el disparador o este tiene foco.
- Términos en el texto — Un término con pista necesita `tabindex="0"` para ser alcanzable con el teclado.
- Contraste — Texto predeterminado sobre la superficie elevada: por encima de 4,5:1 en los dos temas.
- Desactivar por región — Usa `data-ds-tooltips="off"` en un ancestro cuando la etiqueta ya está visible — como en la barra lateral expandida.

## Tokens usados

Una superficie pequeña, elevada y por encima de todo.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Borde | #3E516633 | #FFFFFF1A |
| color.fg.default (`--ds-color-fg-default`) | Texto | #2B3847 | #F3EDE5 |
| shadow.lg (`--ds-shadow-lg`) | Sombra | 0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14) | 0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5) |
| radius.sm (`--ds-radius-sm`) | Radio | 8 px | 8 px |
| text.label-sm (`--ds-text-label-sm`) | Texto | 13/18 · medium | 13/18 · medium |
| duration.fast (`--ds-duration-fast`) | Entrada y salida | 120ms | 120ms |
| z.tooltip (`--ds-z-tooltip`) | Capa (la más alta) | 1600 | 1600 |

## Uso

Corta, útil y solo cuando el elemento no habla por sí mismo.

- **Haz:** nombra íconos. Dos o tres palabras que dicen qué hace el botón.
- **Evita:** repetir la etiqueta. Si el texto ya está visible, la pista solo estorba.
- **Consejo:** Muestra el atajo. En un botón con etiqueta, la pista vale la pena cuando enseña algo nuevo — como el atajo.
