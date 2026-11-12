# Avatar

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/avatar

Representa a una persona o cuenta. Foto cuando existe, iniciales en un tono estable cuando no — y siempre con un nombre detrás.

En números: tamaños: 5 · tonos: 9 · estados: 4 · contraste mínimo: 5,81:1.

## Ejemplo

```html
<span class="ds-avatar ds-avatar--xl ds-avatar--sand" role="img" aria-label="Marina Duarte, online">
  <span aria-hidden="true">MD</span>
  <span class="ds-avatar__status ds-avatar__status--online" aria-hidden="true"></span>
</span>
```

## Tamaños

Cinco tamaños. Las iniciales y el estado acompañan la proporción solos.

xs — 24 px

Listas densas, tablas

sm — 32 px

Comentarios, menciones

md — 40 px

Predeterminado

lg — 48 px

Encabezados de tarjeta

xl — 64 px

Perfil, invitación

Marcado de los ejemplos de esta sección:

```html
<span class="ds-avatar ds-avatar--xs ds-avatar--sand" role="img" aria-label="Marina Duarte"><span aria-hidden="true">MD</span></span>

<span class="ds-avatar ds-avatar--sm ds-avatar--sand" role="img" aria-label="Marina Duarte"><span aria-hidden="true">MD</span></span>

<span class="ds-avatar ds-avatar--sand" role="img" aria-label="Marina Duarte, online"><span aria-hidden="true">MD</span><span class="ds-avatar__status ds-avatar__status--online" aria-hidden="true"></span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--sand" role="img" aria-label="Marina Duarte"><span aria-hidden="true">MD</span></span>

<span class="ds-avatar ds-avatar--xl ds-avatar--sand" role="img" aria-label="Marina Duarte"><span aria-hidden="true">MD</span></span>
```

## Contenido

El orden de preferencia es siempre el mismo: imagen, iniciales, ícono.

Imagen — La foto de la persona, recortada en el círculo. Las iniciales quedan debajo, listas por si la imagen falla.

Iniciales — Primera letra del primer y del último nombre, en un tono estable derivado del nombre.

Ícono — Sin nombre ni foto: invitados, cuentas genéricas, lugares vacíos.

Imagen que falló — El onerror quita la imagen y aparecen las iniciales — nada de ícono roto.

Marcado de los ejemplos de esta sección:

```html
<span class="ds-avatar ds-avatar--xl ds-avatar--green" role="img" aria-label="Caio Ramos"><span aria-hidden="true">CR</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c9b08f%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23f1dcc8%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%234a4744%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"></span>

<span class="ds-avatar ds-avatar--xl ds-avatar--green" role="img" aria-label="Caio Ramos"><span aria-hidden="true">CR</span></span>

<span class="ds-avatar ds-avatar--xl" role="img" aria-label="Caio Ramos"><ds-icon name="user"></ds-icon></span>
```

## Tonos

Nueve tonos de las paletas de apoyo, levemente teñidos sobre la superficie. El tono viene del nombre: la misma persona tiene siempre el mismo color, en cualquier pantalla.

Neutro

Arena

Arcilla

Ocre

Pizarra

Verde

Verde azulado

Azul

Violeta

Rosa

Tono: Arena

Contraste de las iniciales entre 5,81:1 y 6,46:1 en los dos temas.

```html
// mismo nombre, mismo tono
function toneFor(name) {
  let h = 0;
  for (const ch of name.normalize('NFD')) h = (h * 31 + ch.codePointAt(0)) >>> 0;
  return TONES[h % TONES.length];
}
```

Marcado de los ejemplos de esta sección:

```html
<span class="ds-avatar ds-avatar--lg" aria-hidden="true"><span aria-hidden="true">N</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--sand" aria-hidden="true"><span aria-hidden="true">A</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--clay" aria-hidden="true"><span aria-hidden="true">A</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--ochre" aria-hidden="true"><span aria-hidden="true">O</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--slate" aria-hidden="true"><span aria-hidden="true">P</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--green" aria-hidden="true"><span aria-hidden="true">V</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--teal" aria-hidden="true"><span aria-hidden="true">VA</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--blue" aria-hidden="true"><span aria-hidden="true">A</span></span>
```

## Estado

Un punto en la esquina, con un anillo del color del fondo para separar. El estado no es solo color: dilo también en el nombre accesible o en el texto al lado.

Online — `ds-avatar__status--online`

Ausente — `ds-avatar__status--away`

Ocupado — `ds-avatar__status--busy`

Offline — `ds-avatar__status--offline`

Sobre otra superficie, ajusta el anillo con `--ds-avatar-ring` (predeterminado: el fondo del canvas).

Marcado de los ejemplos de esta sección:

```html
<span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado, online"><span aria-hidden="true">OP</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%238fa3ad%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23e5c3a6%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%233d3b38%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"><span class="ds-avatar__status ds-avatar__status--online" aria-hidden="true"></span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado, ausente"><span aria-hidden="true">OP</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%238fa3ad%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23e5c3a6%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%233d3b38%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"><span class="ds-avatar__status ds-avatar__status--away" aria-hidden="true"></span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado, ocupado"><span aria-hidden="true">OP</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%238fa3ad%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23e5c3a6%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%233d3b38%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"><span class="ds-avatar__status ds-avatar__status--busy" aria-hidden="true"></span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado, offline"><span aria-hidden="true">OP</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%238fa3ad%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23e5c3a6%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%233d3b38%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"><span class="ds-avatar__status ds-avatar__status--offline" aria-hidden="true"></span></span>
```

## Grupo

Avatares superpuestos para mostrar quién participa. Hasta cuatro rostros y un “+N” para el resto. Pasa el mouse para ver los nombres.

```html
<div class="ds-avatar-group" role="group" aria-label="7 participantes">
  <span class="ds-avatar ds-avatar--sm ds-avatar--violet" role="img" aria-label="Marina Duarte">
    <span aria-hidden="true">MD</span>
  </span>
  …
  <span class="ds-avatar ds-avatar--sm ds-avatar--more" role="img" aria-label="3 personas más">+3</span>
</div>
```

### Junto al nombre el avatar se vuelve decoración

- Marina Duarte — Online · Design
- Caio Ramos — Ausente · Producto
- Lia Nakamura — Offline · Ingeniería

Marcado de los ejemplos de esta sección:

```html
<div class="ds-avatar-group" role="group" aria-label="7 participantes">
<span class="ds-avatar ds-avatar--sm ds-avatar--sand" role="img" aria-label="Marina Duarte" data-ds-tooltip="Marina Duarte" data-ds-tooltip-placement="bottom"><span aria-hidden="true">MD</span></span><span class="ds-avatar ds-avatar--sm ds-avatar--green" role="img" aria-label="Caio Ramos" data-ds-tooltip="Caio Ramos" data-ds-tooltip-placement="bottom"><span aria-hidden="true">CR</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c98f73%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23f3e3d3%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%235f4a3c%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"></span><span class="ds-avatar ds-avatar--sm ds-avatar--sand" role="img" aria-label="Lia Nakamura" data-ds-tooltip="Lia Nakamura" data-ds-tooltip-placement="bottom"><span aria-hidden="true">LN</span></span><span class="ds-avatar ds-avatar--sm ds-avatar--violet" role="img" aria-label="Otávio Prado" data-ds-tooltip="Otávio Prado" data-ds-tooltip-placement="bottom"><span aria-hidden="true">OP</span></span>
<span class="ds-avatar ds-avatar--more ds-avatar--sm" role="img" aria-label="3 personas más" data-ds-tooltip="Bruna Sá, Rafael Couto, Teresa Lins" data-ds-tooltip-placement="bottom">+3</span>
</div>

<div class="ds-avatar-group" role="group" aria-label="7 participantes">
<span class="ds-avatar ds-avatar--sand" role="img" aria-label="Marina Duarte" data-ds-tooltip="Marina Duarte" data-ds-tooltip-placement="bottom"><span aria-hidden="true">MD</span></span><span class="ds-avatar ds-avatar--green" role="img" aria-label="Caio Ramos" data-ds-tooltip="Caio Ramos" data-ds-tooltip-placement="bottom"><span aria-hidden="true">CR</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c98f73%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23f3e3d3%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%235f4a3c%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"></span><span class="ds-avatar ds-avatar--sand" role="img" aria-label="Lia Nakamura" data-ds-tooltip="Lia Nakamura" data-ds-tooltip-placement="bottom"><span aria-hidden="true">LN</span></span><span class="ds-avatar ds-avatar--violet" role="img" aria-label="Otávio Prado" data-ds-tooltip="Otávio Prado" data-ds-tooltip-placement="bottom"><span aria-hidden="true">OP</span></span>
<span class="ds-avatar ds-avatar--more" role="img" aria-label="3 personas más" data-ds-tooltip="Bruna Sá, Rafael Couto, Teresa Lins" data-ds-tooltip-placement="bottom">+3</span>
</div>

<div class="ds-avatar-group" role="group" aria-label="7 participantes">
<span class="ds-avatar ds-avatar--lg ds-avatar--sand" role="img" aria-label="Marina Duarte" data-ds-tooltip="Marina Duarte" data-ds-tooltip-placement="bottom"><span aria-hidden="true">MD</span></span><span class="ds-avatar ds-avatar--lg ds-avatar--green" role="img" aria-label="Caio Ramos" data-ds-tooltip="Caio Ramos" data-ds-tooltip-placement="bottom"><span aria-hidden="true">CR</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c98f73%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23f3e3d3%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%235f4a3c%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"></span><span class="ds-avatar ds-avatar--lg ds-avatar--sand" role="img" aria-label="Lia Nakamura" data-ds-tooltip="Lia Nakamura" data-ds-tooltip-placement="bottom"><span aria-hidden="true">LN</span></span><span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado" data-ds-tooltip="Otávio Prado" data-ds-tooltip-placement="bottom"><span aria-hidden="true">OP</span></span>
<span class="ds-avatar ds-avatar--more ds-avatar--lg" role="img" aria-label="3 personas más" data-ds-tooltip="Bruna Sá, Rafael Couto, Teresa Lins" data-ds-tooltip-placement="bottom">+3</span>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

El avatar es una imagen de una persona. Trátalo como tal.

- Nombre accesible — Solo, el avatar lleva `role="img"` y `aria-label` con el nombre. Las iniciales y la imagen quedan ocultas (`aria-hidden` y `alt=""`) para no leerse dos veces.
- Junto al nombre, decorativo — Si el nombre ya está escrito al lado, el avatar entero lleva `aria-hidden="true"`.
- El estado no es solo color — Incluye el estado en el nombre accesible (“Marina Duarte, online”) o en texto visible.
- Contraste de las iniciales — Entre 5,81:1 y 6,46:1 en todos los tonos y en los dos temas — por encima del 4,5:1 de WCAG.
- Grupo con conteo — El grupo es un `role="group"` con el total en la etiqueta; el “+N” dice cuántas personas están ocultas.
- Tooltip con el nombre — En grupos, cada avatar muestra el nombre al pasar el mouse y al recibir foco mediante un tooltip.

## Tokens usados

Los tonos usan las paletas de apoyo directamente (son categóricos); todo lo demás es semántico.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.muted (`--ds-color-bg-muted`) | Fondo neutro y del “+N” | #DAE0E8 | #3D3B38 |
| color.fg.muted (`--ds-color-fg-muted`) | Iniciales e ícono en el neutro | #46586E | #CEC8C1 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno | #3E516624 | #FFFFFF0F |
| color.bg.raised (`--ds-color-bg-raised`) | Base de los tonos teñidos | #FFFFFF | #2C2A27 |
| radius.full (`--ds-radius-full`) | Forma redonda | 9999 px | 9999 px |
| radius.md (`--ds-radius-md`) | Forma cuadrada | 12 px | 12 px |
| color.success.solid (`--ds-color-success-solid`) | Online | #1E854A | #72CB8B |
| color.warning.solid (`--ds-color-warning-solid`) | Ausente | #FFB851 | #FFB851 |
| color.danger.solid (`--ds-color-danger-solid`) | Ocupado | #C13834 | #FF9087 |
| color.fg.disabled (`--ds-color-fg-disabled`) | Offline | #93A0B0 | #605D59 |
| color.bg.canvas (`--ds-color-bg-canvas`) | Anillo del estado y del grupo | #EEF2F6 | #1D1B18 |

## Uso

Tres cuidados para que el avatar ayude a reconocer personas.

- **Haz:** tono estable por el nombre. La misma persona tiene siempre el mismo color — el ojo aprende a reconocerla.
- **Evita:** ícono genérico para todos. Si sabes el nombre, usa las iniciales. El ícono es solo para quien no tiene nombre.
- **Consejo:** Grupo corto. Hasta cuatro rostros. Más que eso se vuelve una mancha — usa el “+N”.
