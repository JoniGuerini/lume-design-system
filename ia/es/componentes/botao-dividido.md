# Botón dividido

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/botao-dividido

La acción más común y, pegada a ella, la flecha con las alternativas. Un clic resuelve el caso de siempre; la flecha guarda los demás sin ocupar la barra.

En números: partes: 2 · variantes: 4 · tamaños: 3 · menú: createMenu.

## Ejemplo

```html
<div class="ds-split-button">
  <button type="button" class="ds-btn ds-btn--primary" id="nova">
    <ds-icon name="plus"></ds-icon>
    Nueva sesión
  </button>
  <button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" id="nova-mais" aria-label="Más opciones">
    <ds-icon name="chevron-down"></ds-icon>
  </button>
</div>

<script type="module">
  import { createMenu } from 'https://lumeui.dev/v/1.13/lume.js';
  createMenu(document.querySelector('#nova-mais'), {
    mode: 'action',
    label: 'Más opciones',
    hideLabel: true,
    options: [
      { value: 'recorrente', label: 'Sesión recurrente', icon: 'refresh' },
      { value: 'bloqueio', label: 'Bloquear horario', icon: 'lock' },
      { type: 'separator' },
      { value: 'importar', label: 'Importar agenda', icon: 'upload' },
    ],
    onChange: (value) => …,
  });
</script>
```

## Variantes

Las dos mitades llevan la misma variante y el mismo tamaño. En las rellenas, una línea del color del fondo separa las dos; en las de contorno, el propio contorno. Ghost no entra: sin contorno, las dos mitades no se leen como una pieza.

Primario `ds-btn--primary` — La acción principal de la pantalla, con sus variaciones.

Secundario `ds-btn--secondary` — En una barra, junto a una primaria.

Sutil `ds-btn--subtle` — Apoyo con un poco de presencia.

Peligro `ds-btn--danger` — Eliminar y las formas de eliminar. Siempre con confirmación.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Nueva sesión</button>
<button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" aria-label="Más opciones" data-split-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-20"><ds-icon name="chevron-down"></ds-icon></button>
</div>

<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="download"></ds-icon>Exportar</button>
<button type="button" class="ds-btn ds-btn--secondary ds-split-button__menu" aria-label="Más opciones" data-split-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-21"><ds-icon name="chevron-down"></ds-icon></button>
</div>

<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--subtle"><ds-icon name="copy"></ds-icon>Duplicar</button>
<button type="button" class="ds-btn ds-btn--subtle ds-split-button__menu" aria-label="Más opciones" data-split-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-22"><ds-icon name="chevron-down"></ds-icon></button>
</div>

<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--danger"><ds-icon name="trash"></ds-icon>Eliminar</button>
<button type="button" class="ds-btn ds-btn--danger ds-split-button__menu" aria-label="Más opciones" data-split-menu="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-23"><ds-icon name="chevron-down"></ds-icon></button>
</div>
```

## Estados

Cada mitad reacciona sola. Con el menú abierto, la flecha gira.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Nueva sesión</button>
<button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" aria-label="Más opciones" data-split-menu=""><ds-icon name="chevron-down"></ds-icon></button>
</div>

<div class="ds-split-button">
<button type="button" class="ds-btn ds-btn--primary" disabled=""><ds-icon name="plus"></ds-icon>Nueva sesión</button>
<button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" aria-label="Más opciones" data-split-menu="" disabled=""><ds-icon name="chevron-down"></ds-icon></button>
</div>
```

## Código

Solo CSS más el Menú: la flecha es un `createMenu` en modo acción, con el nombre solo para el lector de pantalla.

```html
<div class="ds-split-button">
  <button type="button" class="ds-btn ds-btn--primary" id="nova">
    <ds-icon name="plus"></ds-icon>
    Nueva sesión
  </button>
  <button type="button" class="ds-btn ds-btn--primary ds-split-button__menu" id="nova-mais" aria-label="Más opciones">
    <ds-icon name="chevron-down"></ds-icon>
  </button>
</div>

<script type="module">
  import { createMenu } from 'https://lumeui.dev/v/1.13/lume.js';
  createMenu(document.querySelector('#nova-mais'), {
    mode: 'action',
    label: 'Más opciones',
    hideLabel: true,
    options: [
      { value: 'recorrente', label: 'Sesión recurrente', icon: 'refresh' },
      { value: 'bloqueio', label: 'Bloquear horario', icon: 'lock' },
      { type: 'separator' },
      { value: 'importar', label: 'Importar agenda', icon: 'upload' },
    ],
    onChange: (value) => …,
  });
</script>

// React
<SplitButton
  label="Nueva sesión"
  icon="plus"
  onClick={novaSessao}
  options={opcoes}
  onSelect={(value) => …}
/>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Dos botones de verdad, cada uno en el Tab.

- Dos puntos en el Tab — Tab — El primero hace la acción; el segundo abre el menú. Nada queda oculto al teclado.
- La flecha tiene nombre — ↓ Enter — “Más opciones”, con `aria-haspopup="menu"` y `aria-expanded` que pone el Menú.
- La principal queda fuera del menú — Repetir la acción principal en el menú hace que el lector de pantalla oiga lo mismo dos veces.

## Tokens usados

Los mismos del Botón.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Alto y ancho de la flecha | 40 px | 40 px |
| duration.base (`--ds-duration-base`) | Giro de la flecha | 200ms | 200ms |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** una acción y sus variaciones. “Nueva sesión” y “Sesión recurrente”: el mismo verbo, formas distintas.
- **Evita:** acciones sin relación. Si el menú junta cosas que no tienen que ver con la principal, usa un botón de ícono con Menú.
- **Consejo:** Uno por pantalla. Como el primario, el botón dividido llama la atención. Más de uno se vuelve ruido.
