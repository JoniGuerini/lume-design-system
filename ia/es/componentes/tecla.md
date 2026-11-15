# Tecla

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/tecla

Muestra una tecla o un atajo en medio del texto, en menús y en tooltips. Ayuda a la persona a aprender el camino más rápido.

En números: JavaScript: 0 · altura: 20 px · base: kbd · interactiva: no.

## Ejemplo

```html
<kbd class="ds-kbd">⌘</kbd>
<kbd class="ds-kbd">K</kbd>
```

## Variantes

Una tecla por etiqueta: un atajo de dos teclas son dos etiquetas.

Una tecla `ds-kbd` — Para acciones simples.

Combinación `dos etiquetas` — En Mac es ⌘; en Windows y Linux, Ctrl.

Pulsa Esc para cerrar.

En medio del texto `dentro de un párrafo` — Queda alineada con el texto.

Marcado de los ejemplos de esta sección:

```html
<kbd class="ds-kbd">Esc</kbd>

<kbd class="ds-kbd">⌘</kbd>

<kbd class="ds-kbd">K</kbd>
```

## Accesibilidad

El atajo es solo un atajo: el camino normal debe seguir existiendo.

- Elemento correcto — `kbd` dice que es una entrada de teclado.
- Símbolos con nombre — Los lectores de pantalla no siempre leen ⌘. En botones, usa `aria-keyshortcuts` para indicar el atajo.
- Por sistema — Muestra la tecla del sistema de la persona: ⌘ o Ctrl.

## Tokens usados

Todo lo que consume la tecla.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.hover (`--ds-color-bg-hover`) | Fondo | #3E51660D | #FFFFFF0D |
| color.border.default (`--ds-color-border-default`) | Contorno | #3E516633 | #FFFFFF1A |
| color.fg.subtle (`--ds-color-fg-subtle`) | Texto | #53657A | #9C9792 |
| radius.xs (`--ds-radius-xs`) | Esquinas | 6 px | 6 px |

## Uso

Cuándo usarla y cuándo preferir otra cosa.

- **Haz:** enseñar atajos. En menús, tooltips y en la búsqueda, junto a la acción.
- **Evita:** parecer un botón. Hacer clic en una tecla dibujada no debería hacer nada. Para una acción, usa Botón.
- **Consejo:** Nombres cortos. Esc, Enter, Tab. Escribe completo solo cuando no haya abreviatura conocida.
