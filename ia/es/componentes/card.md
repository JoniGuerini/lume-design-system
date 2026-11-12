# Tarjeta

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/card

La superficie básica para agrupar contenido. Separa una cosa de otra con fondo y contorno finos, sin sombra.

En números: JavaScript: 0 · esquinas: 20 px · margen: 24 px · sombra: ninguna.

## Ejemplo

```html
<div class="ds-card">
  <p class="ds-card__title">Informe mensual</p>
  <p class="ds-card__text">Ingresos, nuevos clientes y lo que cambió desde el mes pasado.</p>
</div>
```

## Variantes

Una tarjeta es solo un contenedor; la clicable es un enlace entero.

Simple `ds-card` — Agrupa contenido relacionado.

Clicable `ds-card--link` — El contorno se refuerza en hover. El destino es uno solo.

Con acción `dentro de la tarjeta` — Botones dentro de una tarjeta común, sin que toda sea enlace.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-card"><p class="ds-card__title">Informe mensual</p><p class="ds-card__text">Ingresos, nuevos clientes y lo que cambió desde el mes pasado.</p></div>

<a class="ds-card ds-card--link" href="#/componentes/card" data-inert=""><p class="ds-card__title">Informe mensual</p><p class="ds-card__text">Ingresos, nuevos clientes y lo que cambió desde el mes pasado.</p></a>

<div class="ds-card"><p class="ds-card__title">Informe mensual</p><p class="ds-card__text">Ingresos, nuevos clientes y lo que cambió desde el mes pasado.</p><div><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm"><ds-icon name="download"></ds-icon>Descargar</button></div></div>
```

## Estados

Solo cambia la clicable. Hover y foco se pueden forzar con `data-state`.

Marcado de los ejemplos de esta sección:

```html
<a class="ds-card ds-card--link" href="#/componentes/card"><p class="ds-card__title">Informe mensual</p><p class="ds-card__text">Ingresos, nuevos clientes y lo que cambió desde el mes pasado.</p></a>
```

## Accesibilidad

La tarjeta en sí no es nada para el lector de pantalla; lo que importa es el contenido.

- Títulos en orden — Si la tarjeta inicia una sección, usa un título real, en el nivel correcto de la página.
- Enlace único — En la clicable, el `a` es toda la tarjeta. No pongas botones ni otros enlaces dentro.
- Foco — Tab Enter — El anillo aparece alrededor de toda la tarjeta, con el teclado.

## Tokens usados

Todo lo que consume la tarjeta.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fondo | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno | #3E516624 | #FFFFFF0F |
| color.border.strong (`--ds-color-border-strong`) | Contorno en hover | #3E51664D | #FFFFFF29 |
| radius.xl (`--ds-radius-xl`) | Esquinas | 20 px | 20 px |
| text.heading-sm (`--ds-text-heading-sm`) | Título | 17/24 · semibold | 17/24 · semibold |

## Uso

Cuándo usarla y cuándo preferir otra cosa.

- **Haz:** grupos que se repiten. Una cuadrícula de proyectos, resultados u opciones.
- **Evita:** tarjeta dentro de tarjeta. Demasiadas capas pesan. Dentro de una tarjeta, separa con espacio o con una línea.
- **Consejo:** ¿Tarjeta, Panel o Modal?. La Tarjeta agrupa; el Panel es la superficie de una tarea; el Modal interrumpe.
