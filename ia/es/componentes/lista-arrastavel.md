# Lista ordenable

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/lista-arrastavel

Cambiar el orden de una lista arrastrando, con el ratón, el toque o el teclado. El elemento deja un hueco vacío donde va a caer, y cada paso se anuncia al lector de pantalla.

En números: formas de arrastrar: 3 · direcciones: 2 · atajos: 7 · dependencias: 0.

## Ejemplo

```html
<ul class="ds-sortable" role="list" aria-label="Orden de los fundamentos en la sidebar">
  <li class="ds-sortable__item" data-id="cores">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Colores</span>
  </li>
  <li class="ds-sortable__item" data-id="tipografia">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Tipografía</span>
  </li>
  <li class="ds-sortable__item" data-id="icones">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Íconos</span>
  </li>
</ul>

<script type="module">
  import { createSortable } from 'https://lumeui.dev/v/1.9/lume.js';
  createSortable(document.querySelector('.ds-sortable'), { onChange: (e) => console.log(e.id, e.newIndex) });
</script>
```

## Variantes

Cajas sueltas, filas dentro de una tarjeta o elementos lado a lado.

Con agarre `ds-sortable__handle` — El estándar. Solo el agarre arrastra: el resto del elemento sigue clicable y la página se desplaza normalmente con el toque.

En filas `ds-sortable--plain` — Dentro de una tarjeta, sin caja en cada elemento: una línea separa las filas.

Lado a lado `aria-orientation="horizontal"`

Sin agarre, el elemento entero arrastra y recibe el foco. Las flechas `←` `→` lo mueven. Con el toque, mantén un instante antes de arrastrar.

Marcado de los ejemplos de esta sección:

```html
<ul class="ds-sortable" role="list" aria-label="Orden de los fundamentos en la sidebar" data-sortable=""><li class="ds-sortable__item" data-id="cores"><button type="button" class="ds-sortable__handle" data-auto-label="" aria-label="Mover “Colores”" aria-describedby="ds-sortable-help" aria-pressed="false"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Colores</span><span class="ds-sortable__meta">15 paletas</span></li><li class="ds-sortable__item" data-id="tipografia"><button type="button" class="ds-sortable__handle" data-auto-label="" aria-label="Mover “Tipografía”" aria-describedby="ds-sortable-help" aria-pressed="false"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Tipografía</span><span class="ds-sortable__meta">Geist</span></li><li class="ds-sortable__item" data-id="icones"><button type="button" class="ds-sortable__handle" data-auto-label="" aria-label="Mover “Íconos”" aria-describedby="ds-sortable-help" aria-pressed="false"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Íconos</span><span class="ds-sortable__meta">154 íconos</span></li><li class="ds-sortable__item" data-id="espacamento"><button type="button" class="ds-sortable__handle" data-auto-label="" aria-label="Mover “Espaciado”" aria-describedby="ds-sortable-help" aria-pressed="false"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Espaciado</span><span class="ds-sortable__meta">base 8</span></li></ul>

<span class="ds-visually-hidden" aria-live="assertive"></span>

<ul class="ds-sortable" role="list" aria-orientation="horizontal" aria-label="Orden de las series del gráfico" data-sortable="">
<li class="ds-sortable__item" data-id="serie-1" data-label="Durazno" aria-describedby="ds-sortable-help"><span></span>Durazno</li><li class="ds-sortable__item" data-id="serie-2" data-label="Azul" aria-describedby="ds-sortable-help"><span></span>Azul</li><li class="ds-sortable__item" data-id="serie-3" data-label="Rosa" aria-describedby="ds-sortable-help"><span></span>Rosa</li><li class="ds-sortable__item" data-id="serie-4" data-label="Ámbar" aria-describedby="ds-sortable-help"><span></span>Ámbar</li><li class="ds-sortable__item" data-id="serie-5" data-label="Verde agua" aria-describedby="ds-sortable-help"><span></span>Verde agua</li>
</ul>
```

## Estados

Mientras se arrastra, el elemento se vuelve un hueco punteado y una copia elevada sigue al puntero. Tomado con el teclado, recibe el contorno de la marca.

Marcado de los ejemplos de esta sección:

```html
<ul class="ds-sortable" role="list"><li class="ds-sortable__item" data-id="cores"><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Colores</span><span class="ds-sortable__meta">15 paletas</span></li></ul>

<ul class="ds-sortable" role="list"><li class="ds-sortable__item"><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Colores</span><span class="ds-sortable__meta">15 paletas</span></li></ul>

<ul class="ds-sortable" role="list"><li class="ds-sortable__item" data-id="cores" data-grabbed=""><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Colores</span><span class="ds-sortable__meta">15 paletas</span></li></ul>

<ul class="ds-sortable" role="list"><li class="ds-sortable__item" data-id="cores" data-ghost=""><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Colores</span><span class="ds-sortable__meta">15 paletas</span></li></ul>

<ul class="ds-sortable" role="list"><li class="ds-sortable__item ds-sortable__item--drag"><button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical"></ds-icon></button><span class="ds-sortable__label">Colores</span><span class="ds-sortable__meta">15 paletas</span></li></ul>
```

## Código

El `data-id` de cada elemento es lo que `toArray()` devuelve y lo que guardas.

```html
<ul class="ds-sortable" role="list" aria-label="Orden de los fundamentos en la sidebar">
  <li class="ds-sortable__item" data-id="cores">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Colores</span>
  </li>
  <li class="ds-sortable__item" data-id="tipografia">
    <button type="button" class="ds-sortable__handle"><ds-icon name="grip-vertical" size="16"></ds-icon></button>
    <span class="ds-sortable__label">Tipografía</span>
  </li>
</ul>

<script type="module">
  import { createSortable } from 'https://lumeui.dev/v/1.9/lume.js';

  const sortable = createSortable(document.querySelector('.ds-sortable'), {
    onChange: () => salvar(sortable.toArray()), // ['tipografia', 'cores']
  });
</script>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Arrastrar no puede ser la única forma: todo lo que hace el ratón, también lo hace el teclado.

- Tomar y soltar — Espacio Enter — El agarre es un botón con el nombre “Mover …”. Espacio o Enter lo toma; otra vez, lo suelta. Salir con Tab también lo suelta.
- Mover — ↑ ↓ Home End — Las flechas avanzan una posición; Home y End van a los extremos. En una lista lado a lado, son las flechas laterales.
- Deshacer — Esc — Esc devuelve el elemento a donde estaba, también en medio de un arrastre con el ratón.
- Anuncios — Cada paso se dice en una región viva: ““Colores” tomado. Posición 1 de 5.”, luego la nueva posición, y dónde cayó.
- Instrucciones — El agarre describe cómo usarlo: “Espacio para tomar y soltar. Flechas para mover, Esc para deshacer.”
- Movimiento reducido — Los vecinos cambian de lugar sin deslizarse y la copia no se inclina.

## Tokens usados

Superficie, hueco y la copia elevada.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fondo del elemento | #FFFFFF | #24221F |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno del elemento | #3E516624 | #FFFFFF0F |
| color.bg.muted (`--ds-color-bg-muted`) | Fondo del hueco | #DAE0E8 | #3D3B38 |
| color.border.strong (`--ds-color-border-strong`) | Contorno punteado del hueco | #3E51664D | #FFFFFF29 |
| color.bg.raised (`--ds-color-bg-raised`) | Copia que sigue al puntero | #FFFFFF | #2C2A27 |
| shadow.lg (`--ds-shadow-lg`) | Elevación de la copia | 0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14) | 0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5) |
| color.brand.indicator (`--ds-color-brand-indicator`) | Elemento tomado con el teclado | #C97B63 | #DE9680 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Agarre | #53657A | #9C9792 |

## Uso

Cuando el orden es de la persona.

- **Haz:** un orden que la persona elige. Prioridades, el orden de un menú, las series de un gráfico. El orden guardado es el que dejó.
- **Evita:** un orden con regla. Fecha, nombre, valor: eso es ordenar la Tabla. Arrastrar no debe pelear con un orden automático.
- **Consejo:** Cosas que cambian de grupo. Listas con el mismo group intercambian elementos. Para columnas de tarjetas, usa el Kanban.
