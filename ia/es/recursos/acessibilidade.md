# Accesibilidad

Sección de Lume: Recursos. Página: https://lumeui.dev/#/recursos/acessibilidade

Pantallas que todo el mundo puede usar: con teclado, con lector de pantalla, con zoom, con poca visión de color o pidiendo menos movimiento. La meta es WCAG 2.2 nivel AA, en los dos temas.

En números: contrastes en el build: 78/78 · WCAG 2.2: AA · temas medidos: 2 · pendientes abiertos: 0.

## Principios

Cuatro ideas guían cada componente. No son un anexo al final del proyecto: entran en el token, en el CSS y en el JavaScript.

### Perceptible

Contraste medido, nada solo por color, texto que aguanta zoom. Los dos temas valen igual.

### Operable

Todo con el teclado, foco siempre visible, nada con tiempo demasiado corto para actuar.

### Comprensible

Etiquetas claras, errores que dicen cómo resolverlos, comportamiento predecible.

### Robusto

HTML nativo primero, patrones ARIA conocidos cuando lo nativo no basta.

Cómo medimos — 78 de 78 pares pasan ahora

La referencia es WCAG 2.2, nivel AA. En cada build, `scripts/build-tokens.mjs` mide todos los pares de texto y fondo declarados en `tokens/semantic.json`, en los dos temas — las transparencias se componen sobre el fondo antes de la cuenta. Un par que baja del mínimo aparece en la terminal al instante. Lo que el build no mide (foco, teclado, lectores de pantalla) está en las secciones de abajo, y lo que aún no está bien queda en Pendientes.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="2.5"></rect><path d="M6 10h.01M9.3 10h.01M12.6 10h.01M15.9 10h.01M18 10h.01M7 14h10"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20.5 15a2 2 0 0 1-2 2H8l-4.5 3.5V5.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5"></path></svg>
```

## Contraste

Elige un texto o marca y un fondo: la cuenta es la misma del build, en los dos temas. Úsalo para revisar una combinación antes de usarla.

Aa — Texto de ejemplo en 14 px

Lume claro

6,48:1

#46586E sobre #EEF2F6

- Texto normal — hasta 18 px, o hasta 14 px en negrita — AA 4,5 pasa — AAA 7,0 no pasa
- Texto grande — a partir de 24 px, o 18,66 px en negrita — AA 3,0 pasa — AAA 4,5 pasa
- Componentes y gráficos — bordes que identifican el control, íconos, marcas — AA 3,0 pasa

Aa — Texto de ejemplo en 14 px

Lume oscuro

10,36:1

#CEC8C1 sobre #1D1B18

- Texto normal — hasta 18 px, o hasta 14 px en negrita — AA 4,5 pasa — AAA 7,0 pasa
- Texto grande — a partir de 24 px, o 18,66 px en negrita — AA 3,0 pasa — AAA 4,5 pasa
- Componentes y gráficos — bordes que identifican el control, íconos, marcas — AA 3,0 pasa

Colores de gráfico, en orden validado — Los 8 colores de serie siguen un orden elegido para protanopia y deuteranopia: el peor par vecino aún tiene ΔE 11,7 (meta: 8), 18,5 con visión típica, y todos superan 3:1 sobre la superficie en los dos temas. Ver en Gráficos

### Pares verificados en el build 38 pares × 2 temas

| Texto o marca | Fondo | Mínimo | Lume claro | Lume oscuro |
| --- | --- | --- | --- | --- |
| fg.default | bg.canvas | 4,5:1 | Lume claro — 10,61:1 | Lume oscuro — 14,77:1 |
| fg.muted | bg.canvas | 4,5:1 | Lume claro — 6,48:1 | Lume oscuro — 10,36:1 |
| fg.default | bg.sidebar | 4,5:1 | Lume claro — 11,42:1 | Lume oscuro — 13,64:1 |
| fg.muted | bg.sidebar | 4,5:1 | Lume claro — 6,97:1 | Lume oscuro — 9,56:1 |
| fg.subtle | bg.sidebar | 4,5:1 | Lume claro — 5,14:1 | Lume oscuro — 5,48:1 |
| fg.muted | bg.raised | 4,5:1 | Lume claro — 7,29:1 | Lume oscuro — 8,62:1 |
| fg.link | bg.canvas | 4,5:1 | Lume claro — 7,25:1 | Lume oscuro — 12,93:1 |
| fg.brand | bg.canvas | 4,5:1 | Lume claro — 7,25:1 | Lume oscuro — 12,93:1 |
| brand.on-solid | brand.solid | 4,5:1 | Lume claro — 7,80:1 | Lume oscuro — 9,09:1 |
| brand.fg | brand.subtle | 4,5:1 | Lume claro — 7,25:1 | Lume oscuro — 9,38:1 |
| fg.inverse | bg.inverse | 4,5:1 | Lume claro — 11,42:1 | Lume oscuro — 16,59:1 |
| success.fg | success.subtle | 4,5:1 | Lume claro — 6,33:1 | Lume oscuro — 8,33:1 |
| success.on-solid | success.solid | 4,5:1 | Lume claro — 4,66:1 | Lume oscuro — 7,41:1 |
| warning.fg | warning.subtle | 4,5:1 | Lume claro — 6,43:1 | Lume oscuro — 8,99:1 |
| warning.on-solid | warning.solid | 4,5:1 | Lume claro — 8,33:1 | Lume oscuro — 8,33:1 |
| danger.fg | danger.subtle | 4,5:1 | Lume claro — 5,02:1 | Lume oscuro — 7,93:1 |
| danger.on-solid | danger.solid | 4,5:1 | Lume claro — 5,41:1 | Lume oscuro — 7,13:1 |
| info.fg | info.subtle | 4,5:1 | Lume claro — 4,56:1 | Lume oscuro — 8,19:1 |
| info.on-solid | info.solid | 4,5:1 | Lume claro — 4,89:1 | Lume oscuro — 7,31:1 |
| chart.series.1 | bg.surface | 3,0:1 | Lume claro — 3,83:1 | Lume oscuro — 4,14:1 |
| chart.series.2 | bg.surface | 3,0:1 | Lume claro — 3,54:1 | Lume oscuro — 4,49:1 |
| chart.series.3 | bg.surface | 3,0:1 | Lume claro — 3,88:1 | Lume oscuro — 4,08:1 |
| chart.series.4 | bg.surface | 3,0:1 | Lume claro — 4,60:1 | Lume oscuro — 3,45:1 |
| chart.series.5 | bg.surface | 3,0:1 | Lume claro — 3,37:1 | Lume oscuro — 4,70:1 |
| chart.series.6 | bg.surface | 3,0:1 | Lume claro — 3,89:1 | Lume oscuro — 4,07:1 |
| chart.series.7 | bg.surface | 3,0:1 | Lume claro — 3,79:1 | Lume oscuro — 4,19:1 |
| chart.series.8 | bg.surface | 3,0:1 | Lume claro — 3,36:1 | Lume oscuro — 4,73:1 |
| fg.subtle | bg.canvas | 4,5:1 | Lume claro — 4,78:1 | Lume oscuro — 5,94:1 |
| fg.subtle | bg.surface | 4,5:1 | Lume claro — 5,38:1 | Lume oscuro — 5,48:1 |
| fg.subtle | bg.raised | 4,5:1 | Lume claro — 5,38:1 | Lume oscuro — 4,94:1 |
| fg.subtle | bg.sunken | 4,5:1 | Lume claro — 4,57:1 | Lume oscuro — 6,36:1 |
| border.field | bg.canvas | 3,0:1 | Lume claro — 3,35:1 | Lume oscuro — 3,58:1 |
| border.field | bg.surface | 3,0:1 | Lume claro — 3,57:1 | Lume oscuro — 3,50:1 |
| border.field | bg.raised | 3,0:1 | Lume claro — 3,57:1 | Lume oscuro — 3,38:1 |
| border.field | bg.sunken | 3,0:1 | Lume claro — 3,29:1 | Lume oscuro — 3,57:1 |
| fg.muted | bg.sunken | 4,5:1 | Lume claro — 6,19:1 | Lume oscuro — 11,10:1 |
| fg.muted | bg.field | 4,5:1 | Lume claro — 7,29:1 | Lume oscuro — 8,62:1 |
| fg.default | bg.field-hover | 4,5:1 | Lume claro — 11,42:1 | Lume oscuro — 11,15:1 |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--outline" data-ra-swap="" aria-label="Invertir texto y fondo" data-ds-tooltip="Invertir"><ds-icon name="chevrons-up-down"></ds-icon></button>
```

## Foco y teclado

Quien navega con el teclado necesita saber dónde está y llegar a todo. Pulsa Tab dentro del ejemplo: todos los controles muestran el mismo anillo.

“Crear” muestra el anillo fijo, con `data-state="focus"`, para que lo veas sin teclado.

- Grosor: focus-ring.width · 2 px
- Distancia: focus-ring.offset · 2 px
- Color: border.focus · 5,32:1 en Lume claro y 10,36:1 en Lume oscuro, sobre el canvas
- Cuándo: Solo con :focus-visible — el clic del mouse no enciende el anillo

- Nunca quites el contorno — Nada de `outline: none` sin cambiarlo por otro indicador igual de visible. El anillo viene del `base.css` para todo elemento enfocable.
- El orden del foco es el orden de lectura — Nada de `tabindex` positivo. Si el orden parece incorrecto, es el orden del HTML el que lo está.
- Una parada por grupo — Pestañas, grupos de radio y listas usan “roving tabindex”: Tab entra en el grupo, las flechas se mueven dentro de él.
- El foco siempre vuelve — Al cerrar un modal, menú, cajón o la búsqueda ⌘K, el foco vuelve al elemento que lo abrió.
- Saltar la navegación — Tab — El primer Tab de la página muestra “Saltar al contenido”, que lleva directo al panel principal.

### Mapa de teclado 12 componentes y patrones

| Componente | Teclas |
| --- | --- |
| Botón y enlace | Enter — activa (el botón también con Espacio ) |
| Menú | ↓ ↑ — abren y recorren — Home End — primera y última opción — Enter Espacio — eligen — letras — saltan a la opción — Esc — cierra y vuelve al disparador |
| Selector | Enter ↓ — abre la lista — ↑ ↓ PgUp PgDn — recorren — escribir — filtra (con búsqueda) o salta — Backspace — quita el último chip (múltiple) — Esc — cierra sin cambiar |
| Pestañas | ← → — cambian de pestaña — Home End — primera y última — Enter — activa, en el modo manual |
| Modal | Tab — circula solo dentro del modal — Esc — cierra — al cerrar — el foco vuelve a quien lo abrió |
| Toast | nunca — roba el foco — Tab — alcanza la acción (Deshacer) — foco o hover — pausan el tiempo |
| Tabla | Tab — va a los botones de ordenar y a las casillas — Enter — ordena la columna — Espacio — marca la fila |
| Gráficos | Tab — enfoca el gráfico — ← → — recorren los valores (anunciados) — ↑ ↓ — cambian de fila en el heatmap — Home End — primero y último — Esc — oculta el tooltip |
| Búsqueda ⌘K | ⌘ K / — abren — ↑ ↓ — recorren — Enter — va — Esc — cierra y devuelve el foco |
| Composer | Enter — envía — Shift Enter — salto de línea — / — abre los comandos — Esc — cierra el menú o detiene la respuesta |
| App shell | ⌘ B — contrae o expande la sidebar — Esc — cierra el cajón en el móvil — primer Tab — muestra “Saltar al contenido” |
| Tooltip | foco del teclado — muestra la pista — Esc — cierra sin mover el foco — hover — se puede apuntar al globo sin que desaparezca |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-theme-toggle" data-ra-theme="dark" aria-pressed="false" aria-label="Tema del ejemplo: foco" data-ds-tooltip="Alternar claro y oscuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Crear</button>

<button type="button" class="ds-btn ds-btn--secondary">Cancelar</button>

<button type="button" class="ds-icon-btn ds-icon-btn--outline" aria-label="Copiar enlace" data-ds-tooltip="Copiar enlace"><ds-icon name="link"></ds-icon></button>

<button type="button" class="ds-chip" aria-pressed="false" data-ra-chip="">Favoritos</button>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input"><span class="ds-choice__text"><span class="ds-choice__label">Recordar</span></span></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" checked=""><span class="ds-choice__text"><span class="ds-choice__label">Avisos</span></span></label>

<div class="ds-field ds-field--sm"><ds-icon name="search"></ds-icon><input class="ds-field__input" type="search" placeholder="Buscar" aria-label="Buscar en el ejemplo"></div>
```

## Lectores de pantalla

El lector de pantalla lee la estructura, no el dibujo. Puntos de referencia, nombres y regiones en vivo hacen que la pantalla tenga sentido sin verla.

Puntos de referencia

Sidebar, navegación, ruta y contenido son puntos de referencia con nombre. Quien usa lector salta directo entre ellos.

```html
<a class="ds-skip-link" href="#contenido">Saltar al contenido</a>
<aside class="ds-sidebar" aria-label="Barra lateral">
  <nav class="ds-sidebar__nav" aria-label="Principal">…</nav>
</aside>
<div class="ds-main">
  <header class="ds-topbar">
    <nav class="ds-breadcrumb" aria-label="Estás en">…</nav>
  </header>
  <main id="contenido" tabindex="-1">…</main>
</div>
```

Nombres

Todo control tiene nombre. El botón solo con ícono lleva `aria-label`; el tooltip repite el mismo texto para quien ve. Los íconos junto al texto quedan ocultos.

```html
<!-- Botón solo con ícono: el nombre viene del aria-label; el tooltip muestra el mismo texto -->
<button class="ds-icon-btn" aria-label="Copiar enlace" data-ds-tooltip="Copiar enlace">
  <ds-icon name="copy"></ds-icon>
</button>

<!-- Ícono decorativo junto al texto: oculto para el lector -->
<button class="ds-btn ds-btn--primary">
  <ds-icon name="plus"></ds-icon>Crear proyecto
</button>
```

Regiones en vivo

La región tiene que existir antes del cambio — solo cambia el texto. Anuncia el resultado, no cada letra escrita.

```html
<!-- La región existe antes; solo cambia el texto -->
<p class="ds-visually-hidden" role="status" data-count></p>

count.textContent = '12 pedidos encontrados';
```

Texto solo para el lector

`.ds-visually-hidden` oculta de la pantalla, no del lector. Úsalo para completar lo que dicen el color o el ícono.

```html
<!-- Visible solo para lectores de pantalla: completa lo que dicen el color y el ícono -->
<span class="ds-stat__change">
  <ds-icon name="trending-up"></ds-icon>+12,4 %
  <span class="ds-visually-hidden">(mejora)</span>
</span>
```

### Qué región usar

| Región | Cómo anuncia | Dónde la usamos |
| --- | --- | --- |
| `role="status"` | educado: espera a que la persona termine | Toast, conteo de filtros, “ningún resultado”, anuncio al navegar un gráfico |
| `role="log"` | educado, en orden | Respuestas nuevas en la conversación |
| `role="alert"` | interrumpe: úsalo poco | Fallo que exige atención ahora. Los errores de formulario prefieren el resumen con foco |
| `aria-busy="true"` | avisa que está cambiando | Gráfico recargando, respuesta escribiéndose |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Movimiento

El movimiento orienta, pero puede marear a quien tiene sensibilidad vestibular. Cuando el sistema pide menos movimiento, Lume cambia la animación por un cambio inmediato — el resultado es el mismo, sin el recorrido.

Tu sistema tiene el movimiento normal. La columna de la derecha muestra cómo queda para quien pide menos.

Con movimiento — Movimiento reducido

Cambio de tema

Entrada de gráfico

Escribiendo…

### Qué cambia

| Dónde | Con movimiento | Reducido |
| --- | --- | --- |
| Cambio de tema | Transición suave de toda la página | Cambia al instante |
| Gráficos | Las barras crecen, las líneas se dibujan | Aparecen listos |
| Conversación | Los puntitos pulsan, la respuesta aparece poco a poco | Puntitos quietos, respuesta entera de una vez |
| Navegación en la página | Desplazamiento suave hasta la sección | Salto directo |
| Menús, modales, toasts | Entran con un deslizamiento corto | Solo aparecen |

### Duraciones y curvas

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| duration.fast (`--ds-duration-fast`) | Hover, pequeños cambios de color | 120ms | 120ms |
| duration.base (`--ds-duration-base`) | Menús, chips, campos | 200ms | 200ms |
| duration.slow (`--ds-duration-slow`) | Modales, paneles, cambio de tema | 320ms | 320ms |
| duration.slower (`--ds-duration-slower`) | Entrada de gráficos | 480ms | 480ms |
| easing.standard (`--ds-easing-standard`) | La mayoría de las transiciones | cubic-bezier(0.2, 0, 0, 1) | cubic-bezier(0.2, 0, 0, 1) |
| easing.emphasized (`--ds-easing-emphasized`) | Entradas con más presencia | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-ra-replay="theme"><ds-icon name="refresh"></ds-icon>Cambiar</button>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-ra-replay="chart"><ds-icon name="refresh"></ds-icon>Repetir</button>

<div class="ds-typing"><span class="ds-typing__dots" aria-hidden="true"><i></i><i></i><i></i></span><span>Lume está escribiendo</span></div>
```

## Pendientes conocidos

Lo que estaba por debajo de la regla y cómo se resolvió, medido ahora con los tokens actuales. Si algo vuelve a fallar, el sello vuelve a “Abierto” solo — nada de esconder.

Contorno de campos

WCAG 1.4.11 · contraste de componentes, 3:1

El composer y el switch apagado usan `border.field`, que supera 3:1 en todas las superficies. Desde la 0.9, campos, selector y chip que abre menú usan el fondo del menú que abren (`bg.field`, igual a `bg.raised`) con el contorno fino de `border.default` — decisión visual: el contorno queda por debajo de 3:1, y la etiqueta encima del campo y el contraste del fondo lo identifican. Chips y botones con texto siguen con `border.control`.

Resuelta en 0.4.1. El build ahora mide `border.field` contra las cuatro superficies con cada cambio.

Switch apagado

WCAG 1.4.11 · 3:1

El riel apagado recibió el borde de campo: el contorno del control aparece en cualquier fondo, y la bolita sigue contrastando con el riel.

Resuelta en 0.4.1, con el mismo token de los campos — un ajuste resolvió los dos.

Texto atenuado en el tema claro

WCAG 1.4.3 · texto, 4,5:1

`fg.subtle` aparece en placeholders, leyendas y marcas de eje de 12–14 px. En el claro pasó a `neutral.550`, un paso nuevo; y `fg.muted` bajó a `neutral.650`, para que los dos no queden iguales.

Resuelta en 0.4.1. La verificación del build subió de 3:1 a 4,5:1.

Tooltip que desaparece al apuntarlo

WCAG 1.4.13 · contenido con hover o foco

Ahora se puede llevar el puntero hasta el globo sin que desaparezca, queda abierto mientras el disparador tenga hover o foco, y Esc lo cierra sin mover el foco. Pruébalo en el botón de copiar en Foco y teclado.

Fuera de la regla, a propósito

`fg.disabled` queda cerca de 2,62:1. WCAG exime a los controles desactivados — pero, si la persona necesita saber por qué algo está desactivado, dilo en texto al lado.

Marcado de los ejemplos de esta sección:

```html
<span class="ds-badge ds-badge--sm ds-badge--success"><ds-icon name="check"></ds-icon>Resuelto</span>

<div class="ds-table-wrap"><table class="ds-table ds-table--compact">
<thead><tr><th scope="col">Par</th><th scope="col" class="ds-table__num">Lume claro</th><th scope="col" class="ds-table__num">Lume oscuro</th></tr></thead>
<tbody><tr><th scope="row">border.field sobre bg.canvas</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,35:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,58:1</span></td></tr><tr><th scope="row">border.field sobre bg.surface</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,57:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,50:1</span></td></tr><tr><th scope="row">border.field sobre bg.raised</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,57:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,38:1</span></td></tr><tr><th scope="row">border.field sobre bg.sunken</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,29:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,57:1</span></td></tr></tbody></table></div>

<div class="ds-table-wrap"><table class="ds-table ds-table--compact">
<thead><tr><th scope="col">Par</th><th scope="col" class="ds-table__num">Lume claro</th><th scope="col" class="ds-table__num">Lume oscuro</th></tr></thead>
<tbody><tr><th scope="row">Borde del riel (border.field) sobre bg.canvas</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,35:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>3,58:1</span></td></tr><tr><th scope="row">Bolita (fg.muted) sobre el riel</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5,49:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>6,73:1</span></td></tr></tbody></table></div>

<div class="ds-table-wrap"><table class="ds-table ds-table--compact">
<thead><tr><th scope="col">Par</th><th scope="col" class="ds-table__num">Lume claro</th><th scope="col" class="ds-table__num">Lume oscuro</th></tr></thead>
<tbody><tr><th scope="row">fg.subtle sobre bg.canvas</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>4,78:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5,94:1</span></td></tr><tr><th scope="row">fg.subtle sobre bg.surface</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5,38:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5,48:1</span></td></tr><tr><th scope="row">fg.subtle sobre bg.raised</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>5,38:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>4,94:1</span></td></tr><tr><th scope="row">fg.subtle sobre bg.sunken</th><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>4,57:1</span></td><td class="ds-table__num"><span><ds-icon name="check"></ds-icon>6,36:1</span></td></tr></tbody></table></div>

<span class="ds-badge ds-badge--sm"><ds-icon name="info"></ds-icon>Nota</span>
```

## Checklist para cada pantalla

Antes de abrir el PR, pasa por aquí. Marcar es solo para que lleves la cuenta — nada se guarda.

### Accesibilidad de cada pieza

Cada página de componente y patrón tiene su propia sección de accesibilidad, con teclado y lectores de pantalla.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-meter ds-meter--brand" role="meter" aria-valuemin="0" aria-valuemax="13" aria-valuenow="0" aria-valuetext="0 de 13" aria-label="Revisado en esta pantalla">
<div class="ds-meter__head">
<span class="ds-meter__label">Revisado en esta pantalla</span>
<span class="ds-meter__value"><strong>0</strong><span> de 13</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill"></span></div>
</div>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">El texto supera 4,5:1 (3:1 si es grande) en los dos temas</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Nada depende solo del color: el estado tiene ícono y texto; las series tienen leyenda</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Funciona con zoom de 200% y en una pantalla de 320 px sin desplazamiento lateral</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Las imágenes e íconos que informan tienen texto alternativo; los decorativos, no</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Todo funciona solo con teclado, en el orden de lectura</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">El foco siempre está visible y nunca queda oculto detrás de algo fijo</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" data-ra-check=""><span class="ds-choice__text"><span class="ds-choice__label">Al cerrar un modal, menú o cajón, el foco vuelve a quien lo abrió</span></span></label>
```

## Cómo probar

La herramienta automática detecta una parte; el resto pide usar la pantalla como la usan otras personas. Diez minutos por pantalla ya detectan la mayoría de los problemas.

Solo teclado

Guarda el mouse. Llega a todo con Tab, flechas, Enter y Esc — y mira siempre dónde está el foco.

Lector de pantalla

VoiceOver en Mac (⌘ F5) o NVDA en Windows. Navega por títulos y puntos de referencia; escucha si los nombres tienen sentido.

Zoom y pantalla estrecha

Zoom de 200% y ventana de 320 px: nada puede desaparecer ni exigir desplazamiento lateral.

Alto contraste

Activa el contraste del sistema (forced-colors). Bordes y foco tienen que seguir visibles.

Visión de color

En DevTools, Rendering › Emulate vision deficiencies. Estados y series tienen que leerse sin el color.

Movimiento reducido

Actívalo en los ajustes del sistema (o emúlalo en DevTools) y revisa que nada se anime solo.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="2.5"></rect><path d="M6 10h.01M9.3 10h.01M12.6 10h.01M15.9 10h.01M18 10h.01M7 14h10"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m20 20-4.2-4.2"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="4" width="18" height="12.5" rx="2.5"></rect><path d="M8.5 20.5h7M12 16.5v4"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3 12h4l2.5-6 5 12L17 12h4"></path></svg>
```
