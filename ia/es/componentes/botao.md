# Botón

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/botao

Dispara una acción. Plano y directo: el color queda para la acción principal, el resto se apoya en contorno y transparencia.

En números: variantes: 5 · tamaños: 3 · estados: 6 · contraste del primario: 7,80:1.

## Ejemplo

```html
<button type="button" class="ds-btn ds-btn--primary">
  <ds-icon name="pencil"></ds-icon>
  Crear componente
</button>
```

## Variantes

La variante dice el peso de la acción. Cuanto más importante, más color — y solo una acción lleva el color de la marca.

Primario `ds-btn--primary` — La acción principal de la pantalla. Una a la vez.

Secundario `ds-btn--secondary` — Alternativa a la principal: cancelar, volver, acciones de apoyo.

Ghost `ds-btn--ghost` — Acciones discretas en barras, encabezados y listas.

Sutil `ds-btn--subtle` — Apoyo con un poco más de presencia que el ghost.

Peligro `ds-btn--danger` — Acciones destructivas e irreversibles — siempre con confirmación.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="pencil"></ds-icon>Crear</button>

<button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="pencil"></ds-icon>Crear</button>

<button type="button" class="ds-btn ds-btn--ghost"><ds-icon name="pencil"></ds-icon>Crear</button>

<button type="button" class="ds-btn ds-btn--subtle"><ds-icon name="pencil"></ds-icon>Crear</button>

<button type="button" class="ds-btn ds-btn--danger">Eliminar</button>
```

## Tamaños

Mediano es el predeterminado. Pequeño para barras densas y tablas; grande para llamados y pantallas táctiles.

- Tamaño: Pequeño
- Altura: size.control.sm · 32 px
- Padding: 12 px
- Texto: text.label-sm
- Radio: radius.sm · 8 px
- Clase: ds-btn--sm

- Tamaño: Mediano predeterminado
- Altura: size.control.md · 40 px
- Padding: 16 px
- Texto: text.label-md
- Radio: radius.md · 12 px
- Clase: —

- Tamaño: Grande
- Altura: size.control.lg · 48 px
- Padding: 20 px
- Texto: text.label-lg
- Radio: radius.md · 12 px
- Clase: ds-btn--lg

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--primary ds-btn--sm"><ds-icon name="pencil"></ds-icon>Crear</button>

<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="pencil"></ds-icon>Crear</button>

<button type="button" class="ds-btn ds-btn--primary ds-btn--lg"><ds-icon name="pencil"></ds-icon>Crear</button>
```

## Estados

Todas las variantes reaccionan igual: hover aclara o resalta, presionado oscurece, foco gana el anillo. Para documentar y probar, fuerza un estado con `data-state`.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--primary">Guardar</button>

<button type="button" class="ds-btn ds-btn--primary" disabled="">Guardar</button>

<button type="button" class="ds-btn ds-btn--primary" aria-busy="true" aria-disabled="true"><span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>Guardando</button>

<button type="button" class="ds-btn ds-btn--secondary">Guardar</button>

<button type="button" class="ds-btn ds-btn--secondary" disabled="">Guardar</button>

<button type="button" class="ds-btn ds-btn--secondary" aria-busy="true" aria-disabled="true"><span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>Guardando</button>

<button type="button" class="ds-btn ds-btn--ghost">Guardar</button>

<button type="button" class="ds-btn ds-btn--ghost" disabled="">Guardar</button>
```

## Anatomía

Tres partes. El ícono es opcional; la etiqueta, nunca — excepto en el botón de ícono.

- 1 — Contenedor — Altura `size.control.*`, radio `radius.md`, padding lateral de 12 a 20 px. Borde de 1 px siempre presente (transparente cuando no se ve), para que los tamaños no cambien.
- 2 — Ícono opcional — De 16 a 20 px, a 8 px de la etiqueta, heredando el color. A la izquierda para acciones; a la derecha solo para “avanzar”.
- 3 — Etiqueta — Estilo `text.label-*`, en una sola línea. Empieza con un verbo: “Guardar cambios”, no “OK”.

Marcado de los ejemplos de esta sección:

```html
<span class="ds-btn ds-btn--primary ds-btn--lg">
<span><ds-icon name="pencil"></ds-icon></span>
<span>Crear componente</span>
</span>
```

## Botón de ícono

Para acciones reconocibles sin texto — cerrar, buscar, más opciones. Sin fondo por defecto; pasa el cursor para ver la pista.

Predeterminado `ds-icon-btn`

Atenuado `ds-icon-btn--muted`

Contorno `ds-icon-btn--outline`

Sutil `ds-icon-btn--subtle`

Redondo `ds-icon-btn--round`

```html
<button type="button" class="ds-icon-btn" aria-label="Cerrar" data-ds-tooltip="Cerrar">
  <ds-icon name="x"></ds-icon>
</button>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm" aria-label="Cerrar" data-ds-tooltip="Cerrar" data-ds-tooltip-placement="bottom"><ds-icon name="x"></ds-icon></button>

<button type="button" class="ds-icon-btn " aria-label="Cerrar" data-ds-tooltip="Cerrar" data-ds-tooltip-placement="bottom"><ds-icon name="x"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--lg" aria-label="Cerrar" data-ds-tooltip="Cerrar" data-ds-tooltip-placement="bottom"><ds-icon name="x"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted ds-icon-btn--sm" aria-label="Más opciones" data-ds-tooltip="Más opciones" data-ds-tooltip-placement="bottom"><ds-icon name="more-horizontal"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted " aria-label="Más opciones" data-ds-tooltip="Más opciones" data-ds-tooltip-placement="bottom"><ds-icon name="more-horizontal"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--muted ds-icon-btn--lg" aria-label="Más opciones" data-ds-tooltip="Más opciones" data-ds-tooltip-placement="bottom"><ds-icon name="more-horizontal"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline ds-icon-btn--sm" aria-label="Contraer menú" data-ds-tooltip="Contraer menú" data-ds-tooltip-placement="bottom"><ds-icon name="panel-left"></ds-icon></button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline " aria-label="Contraer menú" data-ds-tooltip="Contraer menú" data-ds-tooltip-placement="bottom"><ds-icon name="panel-left"></ds-icon></button>
```

## Accesibilidad

El botón ya viene accesible. Estas son las decisiones que siguen siendo tuyas.

- El elemento correcto — Usa `<button>` para acciones y `<a class="ds-btn">` para navegar. El elemento trae teclado y lector de pantalla gratis.
- Teclado — Tab Enter Espacio — Tab lleva el foco; Enter y Espacio lo activan.
- Foco siempre visible — Anillo de 2 px en el color de foco, con 2 px de respiro — en los dos temas, en todas las variantes.
- Contraste verificado — Texto del primario sobre la marca: 7,80:1 en Lume claro y 9,09:1 en Lume oscuro, por encima del mínimo de 4,5:1.
- ¿Solo ícono? Dale un nombre — Pon `aria-label` en el botón y una pista con el mismo texto.
- Ocupado sin segundo clic — Mientras guarda, el botón lleva `aria-busy="true"` y `aria-disabled="true"`: el spinner reemplaza al ícono, la etiqueta dice qué pasa (“Guardando”) y el foco sigue en él. En React, `busy` hace todo esto y frena el envío del formulario.
- Desactivado con cuidado — `disabled` saca el botón del foco. Si la persona necesita descubrir la acción, usa `aria-disabled="true"` y explica el motivo.

## Tokens usados

Todo lo que consume el botón. Cambias el token, cambia el botón — en todas las pantallas.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Altura (mediano) | 40 px | 40 px |
| space.200 (`--ds-space-200`) | Padding lateral (mediano) | 16 px | 16 px |
| space.100 (`--ds-space-100`) | Espacio entre ícono y etiqueta | 8 px | 8 px |
| radius.md (`--ds-radius-md`) | Radio | 12 px | 12 px |
| text.label-md (`--ds-text-label-md`) | Etiqueta | 14/20 · medium | 14/20 · medium |
| color.brand.solid (`--ds-color-brand-solid`) | Fondo del primario | #3E5166 | #C0CAD6 |
| color.brand.solid-hover (`--ds-color-brand-solid-hover`) | Hover del primario | #2B3847 | #DAE0E8 |
| color.brand.solid-pressed (`--ds-color-brand-solid-pressed`) | Primario presionado | #232F3D | #93A0B0 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Etiqueta del primario | #F8FAFD | #1D2734 |
| color.border.control (`--ds-color-border-control`) | Contorno del secundario | #3E516633 | #FFFFFF21 |
| color.bg.hover (`--ds-color-bg-hover`) | Hover del secundario y ghost | #3E51660D | #FFFFFF0D |
| color.bg.muted (`--ds-color-bg-muted`) | Fondo del sutil | #DAE0E8 | #3D3B38 |
| color.danger.solid (`--ds-color-danger-solid`) | Fondo del peligro | #C13834 | #FF9087 |
| color.border.focus (`--ds-color-border-focus`) | Anillo de foco | #53657A | #C0CAD6 |
| duration.fast (`--ds-duration-fast`) | Transición de color | 120ms | 120ms |
| opacity.disabled (`--ds-opacity-disabled`) | Desactivado | 0.44 | 0.44 |

## Uso

Tres reglas que resuelven la mayoría de las pantallas.

- **Haz:** una acción primaria por pantalla. El color guía la mirada. Una acción principal, las demás en contorno o ghost.
- **Evita:** todo primario. Si todo llama la atención, nada lo hace. La persona no sabe por dónde empezar.
- **Consejo:** Etiqueta con verbo. La etiqueta dice qué va a pasar. Nadie necesita leer el resto de la pantalla para decidir.
