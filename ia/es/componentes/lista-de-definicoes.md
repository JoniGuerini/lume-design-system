# Lista de definiciones

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/lista-de-definicoes

Pares de etiqueta y valor, como en una ficha de detalles. Más ligera que una tabla cuando solo hay un registro para mostrar.

En números: JavaScript: 0 · disposiciones: 3 · base: dl · sin espacio: apila.

## Ejemplo

```html
<dl class="ds-dl ds-dl--lines">
  <div class="ds-dl__row"><dt>Cliente</dt><dd>Ana Lima</dd></div>
  <div class="ds-dl__row"><dt>Correo</dt><dd>ana@lume.dev</dd></div>
  <div class="ds-dl__row"><dt>Plan</dt><dd>Equipo</dd></div>
  <div class="ds-dl__row"><dt>Creado el</dt><dd>8 de noviembre</dd></div>
</dl>
```

## Variantes

Etiqueta junto al valor, con o sin líneas, o encima, para caber en columnas.

Simple `ds-dl` — Para el medio de una tarjeta.

Con líneas `ds-dl--lines` — Más fácil de seguir cuando la lista es larga.

En columnas `ds-dl--stacked` — Etiqueta encima, para resúmenes.

Marcado de los ejemplos de esta sección:

```html
<dl class="ds-dl"><div class="ds-dl__row"><dt>Cliente</dt><dd>Ana Lima</dd></div><div class="ds-dl__row"><dt>Correo</dt><dd>ana@lume.dev</dd></div><div class="ds-dl__row"><dt>Plan</dt><dd>Equipo</dd></div><div class="ds-dl__row"><dt>Creado el</dt><dd>8 de noviembre</dd></div></dl>

<dl class="ds-dl ds-dl--lines"><div class="ds-dl__row"><dt>Cliente</dt><dd>Ana Lima</dd></div><div class="ds-dl__row"><dt>Correo</dt><dd>ana@lume.dev</dd></div><div class="ds-dl__row"><dt>Plan</dt><dd>Equipo</dd></div><div class="ds-dl__row"><dt>Creado el</dt><dd>8 de noviembre</dd></div></dl>

<dl class="ds-dl ds-dl--stacked"><div class="ds-dl__row"><dt>Cliente</dt><dd>Ana Lima</dd></div><div class="ds-dl__row"><dt>Correo</dt><dd>ana@lume.dev</dd></div><div class="ds-dl__row"><dt>Plan</dt><dd>Equipo</dd></div><div class="ds-dl__row"><dt>Creado el</dt><dd>8 de noviembre</dd></div></dl>
```

## Accesibilidad

El propio HTML vincula cada etiqueta con su valor.

- Semántica — Los lectores de pantalla entienden `dt` como término y `dd` como definición. El `div` alrededor de cada par está permitido.
- Texto largo — Los valores largos, como correos, se parten en vez de desbordarse.
- Poco espacio — En un contenedor estrecho, la etiqueta sube encima del valor, en vez de partir las palabras.

## Tokens usados

Todo lo que consume la lista.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.fg.subtle (`--ds-color-fg-subtle`) | Etiqueta | #5C6C7F | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Valor | #2B3847 | #F3EDE5 |
| color.border.subtle (`--ds-color-border-subtle`) | Líneas | #3E516624 | #FFFFFF0F |
| text.body-sm (`--ds-text-body-sm`) | Texto | 14/22 · regular | 14/22 · regular |

## Uso

Cuándo usarla y cuándo preferir otra cosa.

- **Haz:** un solo registro. Los detalles de un pedido, un perfil, un resumen antes de confirmar.
- **Evita:** comparar registros. Para varios elementos lado a lado, usa la Tabla.
- **Consejo:** ¿Sin valor? Dilo. Muestra “No informado” en vez de un espacio vacío.
