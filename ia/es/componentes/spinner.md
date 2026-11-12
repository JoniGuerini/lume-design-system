# Spinner

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/spinner

Dice que algo está pasando en una espera corta. Hereda el color del texto, así que funciona en cualquier lugar, incluso dentro de botones.

En números: JavaScript: 0 · tamaños: 16 · 20 · 32 · vuelta: 0,8 s · rol ARIA: status.

## Ejemplo

```html
<span class="ds-spinner" role="status" aria-label="Cargando"></span>
```

## Variantes

Siempre que quepa, di lo que está pasando.

Cargando los pedidos…

Con texto `ds-spinner` — Lo mejor para esperas de más de un segundo.

Dentro del botón `aria-busy` — El botón queda ocupado y no acepta otro clic.

Tamaños `--sm · --lg` — 16, 20 y 32 px. El mayor sirve para un área entera.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--primary" aria-busy="true"><span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>Guardando</button>

<span class="ds-spinner ds-spinner--sm" role="status" aria-label="Cargando"></span>

<span class="ds-spinner" role="status" aria-label="Cargando"></span>

<span class="ds-spinner ds-spinner--lg" role="status" aria-label="Cargando"></span>
```

## Accesibilidad

Un dibujo que gira no dice nada por sí solo.

- Con nombre — Solo, lleva `role="status"` y `aria-label`. Junto a un texto, usa `aria-hidden`.
- Botón ocupado — `aria-busy="true"` impide clics repetidos y el texto dice qué pasa: “Guardando”.
- Movimiento reducido — El anillo deja de girar. Por eso, el texto importa aún más.

## Tokens usados

El color viene del texto alrededor; el resto es forma.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.fg.default (`--ds-color-fg-default`) | Color más común | #2B3847 | #F3EDE5 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | En el botón primario | #F8FAFD | #1D2734 |
| radius.full (`--ds-radius-full`) | Anillo | 9999 px | 9999 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** de 1 a 10 segundos. Guardar, cargar un panel, confirmar un pago.
- **Evita:** esperas instantáneas. Por debajo de un segundo, nada: un spinner que parpadea estorba más que ayuda.
- **Consejo:** ¿Conoces la forma? Skeleton. Cuando ya se sabe cómo quedará el contenido, el Skeleton parece más rápido.
