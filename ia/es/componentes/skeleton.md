# Skeleton

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/skeleton

Muestra la forma del contenido antes de que llegue. La pantalla no salta cuando cargan los datos, y la espera parece menor.

En números: JavaScript: 0 · formas: 3 · pulso: 1,4 s · brillo: ninguno.

## Ejemplo

```html
<div aria-busy="true" role="status" aria-label="Cargando">
  <div class="fc-skel-row">
  <span class="ds-skeleton ds-skeleton--circle">
  </span>
  <div class="fc-skel-lines">
  <span class="ds-skeleton ds-skeleton--text" style="--w:55%">
  </span>
  <span class="ds-skeleton ds-skeleton--text" style="--w:80%">
  </span>
  </div>
  </div>
</div>
```

## Variantes

Monta la forma con tres piezas: línea, círculo y bloque.

Persona `ds-skeleton--circle` — Avatar y dos líneas.

Tarjeta `ds-skeleton` — Un bloque y el texto debajo.

Texto `ds-skeleton--text` — Anchos diferentes, como un párrafo de verdad.

Marcado de los ejemplos de esta sección:

```html
<span class="ds-skeleton ds-skeleton--circle"></span>

<span class="ds-skeleton ds-skeleton--text"></span>

<span class="ds-skeleton"></span>
```

## Accesibilidad

Las formas no dicen nada al lector de pantalla: quien avisa es el contenedor.

- Avisa que carga — En el contenedor, `aria-busy="true"` y un nombre. Cuando lleguen los datos, quita el atributo.
- Sin foco — Las formas no son interactivas y quedan fuera del Tab.
- Movimiento reducido — El pulso se detiene, y la forma queda quieta.

## Tokens usados

Todo lo que consume el skeleton.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.muted (`--ds-color-bg-muted`) | Formas | #DAE0E8 | #3D3B38 |
| radius.md (`--ds-radius-md`) | Bloque | 12 px | 12 px |
| radius.xs (`--ds-radius-xs`) | Línea | 6 px | 6 px |
| radius.full (`--ds-radius-full`) | Círculo | 9999 px | 9999 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** la forma real. Copia el tamaño del contenido final, para que nada salte cuando llegue.
- **Evita:** esperas largas. Si pasa de 10 segundos, di lo que pasa: usa la Barra de progreso.
- **Consejo:** No inventes lo que no llega. Si la lista puede venir vacía, pasa directo al Estado vacío al terminar.
