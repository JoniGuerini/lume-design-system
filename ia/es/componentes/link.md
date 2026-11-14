# Enlace

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/link

Lleva a otra página. En medio del texto, subrayado; suelto, al final de una tarjeta o lista, con una flecha. Cuando sale del sitio, el ícono de enlace externo lo avisa antes del clic.

En números: JavaScript: 0 · formas: 2 · tonos: 2 · base: a.

## Ejemplo

```html
<a class="ds-link" href="/novidades">Ver todas las versiones</a>
```

## Variantes

La forma depende de dónde está el enlace, no de su importancia.

Los componentes usan solo tokens semánticos. Mira los colores y la tipografía para entender los roles.

En el texto `ds-link` — Subrayado, para destacarse de las palabras alrededor sin depender solo del color.

Novedades

Divisor, enlace y progreso circular llegaron en la 0.34.

Suelto `ds-link--standalone` — Al final de una tarjeta o lista. La flecha se mueve un poco con el ratón; el subrayado aparece con ella.

Los títulos y el texto de Lume usan Geist — (se abre en una pestaña nueva).

Externo `target="_blank"` — El ícono muestra que sale del sitio, y un texto oculto avisa al lector de pantalla que se abre en una pestaña nueva.

Actualizado el 14 nov · ver historial

Apagado `ds-link--muted` — En pies y metadatos, donde el enlace no debe competir con el contenido.

Marcado de los ejemplos de esta sección:

```html
<a class="ds-link ds-link--standalone" href="#/novidades">Ver todas las versiones<ds-icon name="arrow-right"></ds-icon></a>
```

## Estados

Con el ratón el color se oscurece y el subrayado queda entero; el foco usa el anillo de todo Lume.

colores

colores

colores

Marcado de los ejemplos de esta sección:

```html
<a class="ds-link ds-link--standalone" href="#/novidades">Ver todas las versiones<ds-icon name="arrow-right"></ds-icon></a>

<a class="ds-link ds-link--standalone" aria-disabled="true">Ver todas las versiones<ds-icon name="arrow-right"></ds-icon></a>
```

## Código

El ícono viene de la biblioteca de Lume. Para el externo, el texto oculto también.

```html
<a class="ds-link" href="/cores">colores</a>

<a class="ds-link ds-link--standalone" href="/novidades">
  Ver todas las versiones
  <ds-icon name="arrow-right" class="ds-link__icon" data-arrow></ds-icon>
</a>

<a class="ds-link" href="https://vercel.com/font" target="_blank" rel="noopener">
  Geist<ds-icon name="external-link" class="ds-link__icon"></ds-icon>
  <span class="ds-visually-hidden">(se abre en una pestaña nueva)</span>
</a>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Un enlace dice adónde va, incluso fuera del texto.

- Texto que dice el destino — “Ver todas las versiones”, no “haz clic aquí”: los lectores de pantalla listan los enlaces sueltos de la página.
- No solo color — En medio del texto, el subrayado queda siempre: el color del enlace tiene 4,5:1 con el fondo, pero no con el texto al lado.
- Pestaña nueva avisada — Con `target="_blank"`, el ícono y el texto oculto avisan antes. Usa `rel="noopener"`.
- Teclado — Tab Enter — Tab llega al enlace y Enter lo abre. El ícono tiene aria-hidden.

## Tokens usados

Todo lo que consume el enlace.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.fg.link (`--ds-color-fg-link`) | Texto | #3E5166 | #DAE0E8 |
| color.fg.link-hover (`--ds-color-fg-link-hover`) | Texto con el ratón | #232F3D | #EEF2F6 |
| color.fg.muted (`--ds-color-fg-muted`) | Tono apagado | #46586E | #CEC8C1 |
| color.fg.disabled (`--ds-color-fg-disabled`) | Desactivado | #93A0B0 | #605D59 |
| color.border.focus (`--ds-color-border-focus`) | Foco del teclado | #53657A | #C0CAD6 |
| text.label-md (`--ds-text-label-md`) | Enlace suelto | 14/20 · medium | 14/20 · medium |
| duration.fast (`--ds-duration-fast`) | Cambio de color y flecha | 120ms | 120ms |

## Uso

¿Enlace o botón?

- **Haz:** enlace para ir. Si cambia la dirección de la página, es un enlace: se puede abrir en otra pestaña y copiar.
- **Evita:** enlaces que hacen una acción. Guardar, eliminar y abrir un modal son botones. Para una acción discreta, usa la Acción inline.
- **Consejo:** Externo solo cuando sale. Las páginas del mismo sitio se abren en la misma pestaña y sin ícono.
