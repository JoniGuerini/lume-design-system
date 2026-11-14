# Menú contextual

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/menu-de-contexto

Las acciones de un elemento, justo donde está la persona: clic derecho, tecla de menú o toque largo. Es un atajo, nunca el único camino.

En números: formas de abrir: 3 · rol ARIA: menu · toque largo: 500 ms · superficie: la del Menú.

## Ejemplo

```html
<ul id="arquivos" role="list">
  <li data-arquivo tabindex="0">Propuesta.pdf</li>
</ul>

<script type="module">
  import { createContextMenu } from 'https://lumeui.dev/v/0.38/lume.js';
  createContextMenu(document.querySelector('#arquivos'), {
    selector: '[data-arquivo]',
    options: [
      { value: 'open', label: 'Abrir', icon: 'external-link' },
      { type: 'separator' },
      { value: 'delete', label: 'Eliminar', icon: 'trash', tone: 'danger' },
    ],
    onSelect: (value, alvo) => agir(value, alvo),
  });
</script>
```

## Código

Con `selector`, un solo menú atiende a todas las filas; `options` puede cambiar según el elemento.

```html
import { createContextMenu } from 'https://lumeui.dev/v/0.38/lume.js';

createContextMenu(document.querySelector('#arquivos'), {
  selector: '[data-arquivo]',
  label: 'Acciones del archivo',
  options: [
    { value: 'open', label: 'Abrir', icon: 'external-link' },
    { type: 'separator' },
    { value: 'delete', label: 'Eliminar', icon: 'trash', tone: 'danger' },
  ],
  onSelect: (value, alvo) => agir(value, alvo),
});
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Funciona como el Menú cuando está abierto, pero nadie lo descubre solo: por eso siempre es un atajo.

- Abrir con el teclado — Shift F10 — El elemento debe recibir foco. La tecla de menú o Shift+F10 lo abren junto a él.
- Moverse y elegir — ↑ ↓ Enter — ↑/↓, Home/End y letras se mueven; Enter elige.
- Cerrar — Esc — Esc cierra y devuelve el foco al elemento.
- Otro camino — Ofrece las mismas acciones en un botón visible: el clic derecho no es obvio ni existe en todas partes.

## Tokens usados

Los mismos del Menú.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.raised (`--ds-color-bg-raised`) | Fondo | #FFFFFF | #2C2A27 |
| color.border.strong (`--ds-color-border-strong`) | Contorno | #3E51664D | #FFFFFF29 |
| shadow.xl (`--ds-shadow-xl`) | Sombra | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| color.bg.hover (`--ds-color-bg-hover`) | Elemento activo | #3E51660D | #FFFFFF0D |
| color.danger.fg (`--ds-color-danger-fg`) | Acción de peligro | #C13834 | #FFB2AA |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** atajo en listas. Archivos, filas de tabla y tarjetas, donde la persona repite acciones.
- **Evita:** acciones ocultas. Si la acción solo existe en el clic derecho, buena parte de las personas nunca la encontrará.
- **Consejo:** Corto y en orden de uso. Las más comunes arriba; las destructivas al final, tras un separador.
