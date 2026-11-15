# Acción en línea

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/acao-inline

La acción más discreta del sistema. Vive dentro del contenido — “En la escena +”, “Ver historial →” — y solo destaca cuando llega el puntero.

En números: formas: 5 · altura mínima: 28 px · texto: 13 px · elementos: a · button.

## Ejemplo

```html
<button type="button" class="ds-inline-action">
  <ds-icon name="video" size="16"></ds-icon>
  En la escena
  <ds-icon name="plus" size="14" class="ds-inline-action__plus"></ds-icon>
</button>
```

## Formas

El signo al final cuenta qué pasa: + añade o abre algo aquí; → lleva a otro lugar.

Acción en el lugar `<button>` — Hace algo sin salir del contexto: añadir, adjuntar, generar.

Navegación `<a>` — Lleva a otra pantalla. La flecha dice “ir a”.

Con ícono `<button>` — El ícono anticipa el tipo de contenido.

Fuerte `<a>` — Un poco más de presencia, para el siguiente paso de un texto.

Desactivada `<button>` — Todavía no disponible. Di por qué cerca.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-inline-action"><ds-icon name="file-text"></ds-icon>Añadir nota<ds-icon name="plus"></ds-icon></button>

<a class="ds-inline-action" href="#/componentes/acao-inline">Ver historial<ds-icon name="arrow-right"></ds-icon></a>

<button type="button" class="ds-inline-action"><ds-icon name="video"></ds-icon>En la escena<ds-icon name="plus"></ds-icon></button>

<a class="ds-inline-action ds-inline-action--strong" href="#/componentes/acao-inline">Ver qué cambió<ds-icon name="arrow-right"></ds-icon></a>

<button type="button" class="ds-inline-action" disabled=""><ds-icon name="clock"></ds-icon>Pronto</button>
```

## Mostrar y ocultar

Con `<details>`, la acción en línea abre contenido extra en el lugar. El + gira y se vuelve × cuando está abierto. Pruébalo:

24s — Invita a conocer

¿Quieres ver cómo quedaría tu rutina? Conócelo por el enlace del perfil.

```html
<details class="ds-disclosure">
  <summary class="ds-inline-action">
    <ds-icon name="file-text" size="16"></ds-icon>
    Más detalles
    <ds-icon name="plus" size="14" class="ds-inline-action__plus"></ds-icon>
  </summary>
  <div class="ds-disclosure__content">…</div>
</details>
```

Marcado de los ejemplos de esta sección:

```html
<details class="ds-disclosure">
<summary class="ds-inline-action"><ds-icon name="file-text"></ds-icon>Más detalles<ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content">
<p><span>Formato</span>Video vertical, 9:16</p>
<p><span>Público</span>Pequeños negocios</p>
<p><span>Llamado</span>Enlace en el perfil</p>
</div>
</details>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## ¿En línea o ghost?

Los dos son discretos. La diferencia es dónde están.

### Acción en línea

- Dentro del contenido, justo después de lo que afecta.
- Sin área visible: solo texto, ícono y signo.
- Varias por pantalla, una por bloque.

### Botón ghost

- En barras, encabezados y listas — fuera del texto.
- El área de clic aparece al pasar el cursor.
- Para acciones que valen para toda la pantalla.

Marcado de los ejemplos de esta sección:

```html
<span class="ds-inline-action"><ds-icon name="video"></ds-icon>En la escena<ds-icon name="plus"></ds-icon></span>

<span class="ds-inline-action">Ver ejemplo<ds-icon name="arrow-right"></ds-icon></span>

<span class="ds-btn ds-btn--ghost ds-btn--sm"><ds-icon name="star"></ds-icon>Ejemplos</span>

<span class="ds-btn ds-btn--ghost ds-btn--sm"><ds-icon name="download"></ds-icon>Exportar</span>
```

## Accesibilidad

Discreta para los ojos, clara para quien usa teclado y lector de pantalla.

- El elemento correcto — ¿Navega? `<a href>`. ¿Hace algo aquí? `<button>`. ¿Abre y cierra? `<details><summary>`.
- Teclado — Tab Enter Espacio — Tab enfoca; Enter activa enlaces y botones; Espacio también activa botones y el summary.
- Área táctil — Altura mínima de 28 px, por encima de los 24 px de WCAG 2.2 (tamaño del objetivo).
- Íconos y signos son decorativos — El texto dice la acción. El + y la → salen con aria-hidden.
- Estado del disclosure — El summary nativo anuncia expandido y contraído — no necesita aria-expanded.
- Desactivada con motivo — Prefiere explicarlo al lado (“Pronto”). Los enlaces desactivados llevan aria-disabled y salen del Tab.

## Tokens usados

Pocos y todos de texto: eso es lo que la mantiene liviana.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| text.label-sm (`--ds-text-label-sm`) | Etiqueta | 13/18 · medium | 13/18 · medium |
| color.fg.subtle (`--ds-color-fg-subtle`) | Color en reposo | #53657A | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Color en hover y de la forma fuerte | #2B3847 | #F3EDE5 |
| color.fg.brand (`--ds-color-fg-brand`) | Hover de la forma fuerte | #3E5166 | #DAE0E8 |
| space.100 (`--ds-space-100`) | Espacio entre ícono, etiqueta y signo | 8 px | 8 px |
| radius.xs (`--ds-radius-xs`) | Radio del anillo de foco | 6 px | 6 px |
| duration.fast (`--ds-duration-fast`) | Transición de color | 120ms | 120ms |
| duration.base (`--ds-duration-base`) | Giro del + y paso de la flecha | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Curva del giro y de la flecha | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| opacity.muted (`--ds-opacity-muted`) | Desactivada | 0.64 | 0.64 |

## Uso

Tres reglas para que siga discreta.

- **Haz:** cerca de lo que afecta. Justo debajo del bloque, alineada al texto.
- **Evita:** la acción principal. Lo que cierra la tarea es un botón primario. La acción en línea es para el camino secundario.
- **Consejo:** Un signo por acción. + añade o abre aquí; → va a otro lugar. Nunca los dos juntos.
