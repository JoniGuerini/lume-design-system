# Estados vacíos

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/estados-vazios

Cuando no hay nada que mostrar — todavía, por un filtro o por un error — la pantalla dice qué pasó y ofrece el siguiente paso. Nunca un área en blanco.

En números: situaciones: 6 · lugares: 3 · partes: 4 · siguiente paso: siempre.

## Ejemplo

```html
<div class="ds-empty">
  <span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
  <p class="ds-empty__title">Ningún proyecto todavía</p>
  <p class="ds-empty__description">Los proyectos reúnen tareas, archivos y personas. Crea el primero e invita al equipo.</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Crear proyecto</button>
    <button type="button" class="ds-inline-action">Ver un ejemplo<ds-icon name="arrow-right" size="14"></ds-icon></button>
  </div>
</div>
```

## Primer uso

La primera vez es el mejor momento para enseñar: di qué va a aparecer aquí y da el botón que lo hace aparecer. Haz clic en “Crear proyecto”.

- Acción principal con verbo: “Crear proyecto”. Una alternativa discreta al lado, si la hay.
- Después de crear, el foco va al elemento nuevo — la persona ve el resultado al instante.
- Nada de pantalla vacía con un “+” suelto en la esquina. El vacío es la propia invitación.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Tema del ejemplo: primer uso" data-ds-tooltip="Alternar claro y oscuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<div class="ds-empty ds-empty--plain">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">Ningún proyecto todavía</p>
<p class="ds-empty__description">Los proyectos reúnen tareas, archivos y personas. Crea el primero e invita al equipo.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary" data-act="create"><ds-icon name="plus"></ds-icon>Crear proyecto</button><button type="button" class="ds-inline-action" data-act="sample">Ver un ejemplo<ds-icon name="arrow-right"></ds-icon></button></div>
</div>
```

## Sin resultados

El vacío lo causó la persona — con una búsqueda o un filtro. Repite lo que pidió, sugiere qué probar y deja los controles a la vista.

Ningún documento

- El título repite la búsqueda entre comillas: la persona comprueba si escribió bien.
- “Limpiar búsqueda” devuelve la lista y el foco al campo. El conteo se anuncia sin robar el foco.
- No escondas la búsqueda ni los filtros en el estado vacío: son justamente el camino de vuelta.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Tema del ejemplo: sin resultados" data-ds-tooltip="Alternar claro y oscuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<div class="ds-field ds-field--sm"><ds-icon name="search"></ds-icon><input class="ds-field__input" type="search" value="presupuesto 2019" aria-label="Buscar documentos" data-search="" spellcheck="false" autocomplete="off"></div>

<button type="button" class="ds-chip ds-chip--sm" data-kind="all" aria-pressed="false">Todos</button>

<button type="button" class="ds-chip ds-chip--sm" data-kind="pdf" aria-pressed="true">PDF</button>

<button type="button" class="ds-chip ds-chip--sm" data-kind="planilha" aria-pressed="false">Hoja de cálculo</button>

<div class="ds-empty ds-empty--compact ds-empty--plain">
<span class="ds-empty__icon"><ds-icon name="search-x"></ds-icon></span>
<p class="ds-empty__title">Nada encontrado para “presupuesto 2019”</p>
<p class="ds-empty__description">Revisa la ortografía o prueba otra palabra — o limpia el filtro de tipo.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary" data-act="clear-search"><ds-icon name="x"></ds-icon>Limpiar búsqueda</button><button type="button" class="ds-inline-action" data-act="clear-filters">Limpiar filtros<ds-icon name="filter"></ds-icon></button></div>
</div>
```

## Error

Algo falló de nuestro lado. Di qué no se cargó, tranquiliza sobre los datos y ofrece intentar de nuevo. Haz clic en “Intentar de nuevo”.

- Tono de peligro en el ícono, no en toda la pantalla. El texto dice lo mismo que el color.
- Código y hora en `.ds-empty__meta`: el soporte lo agradece, y no estorba a quien no lo necesita.
- Sin culpa (“Hiciste algo mal”) y sin exclamación. El error del sistema es del sistema.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Tema del ejemplo: error" data-ds-tooltip="Alternar claro y oscuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<div class="ds-empty ds-empty--danger ds-empty--plain">
<span class="ds-empty__icon"><ds-icon name="alert-circle"></ds-icon></span>
<p class="ds-empty__title">No pudimos cargar los pagos</p>
<p class="ds-empty__description">Puede ser inestabilidad de nuestro lado. Tus datos están seguros — inténtalo de nuevo en unos segundos.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary" data-act="retry"><ds-icon name="refresh"></ds-icon>Intentar de nuevo</button><button type="button" class="ds-inline-action" data-act="status">Ver estado del servicio<ds-icon name="external-link"></ds-icon></button></div>
<p class="ds-empty__meta">Error 503 · 14:32</p>
</div>
```

## Sin permiso

El contenido existe, pero no para esta persona. Di de quién es y cómo pedir acceso — sin exponer lo que no puede ver.

- Ícono neutro (candado), no de error: nadie se equivocó.
- Después de pedir, confirma en el mismo lugar y di qué pasa a continuación.
- “Acceso denegado (403)” no ayuda a nadie a llegar a donde necesita.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Tema del ejemplo: sin permiso" data-ds-tooltip="Alternar claro y oscuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<div class="ds-empty ds-empty--muted ds-empty--plain">
<span class="ds-empty__icon"><ds-icon name="lock"></ds-icon></span>
<p class="ds-empty__title">No tienes acceso a este informe</p>
<p class="ds-empty__description">Es del equipo de Finanzas. Pide acceso a quien lo creó — la persona recibe un aviso.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary" data-act="request"><ds-icon name="mail"></ds-icon>Pedir acceso</button><button type="button" class="ds-inline-action" data-act="back">Volver a informes<ds-icon name="arrow-left"></ds-icon></button></div>
</div>
```

## Offline

Sin internet, muestra lo que ya estaba guardado con un aviso discreto; sin nada guardado, un estado vacío que se resuelve solo. Este ejemplo también sigue tu conexión de verdad.

- Revisar contrato de asociación — Hoy
- Enviar presupuesto a Bruno — Mañana
- Preparar presentación T4 — Viernes

- Con versión guardada: alerta compacta arriba y el contenido sigue legible.
- Vuelve solo cuando vuelva la conexión — y avisa con un toast corto.
- No borres lo que la persona ya veía solo porque se cayó la red.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Tema del ejemplo: offline" data-ds-tooltip="Alternar claro y oscuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>
```

## Cargando

Hasta 1 segundo, nada — un spinner que parpadea estorba más que ayuda. Hasta 10, spinner con texto. Si pasa de eso, di que está tardando y ofrece cancelar.

- Ventas de octubre — Actualizado hace 2 h
- Costos por equipo — Actualizado ayer
- Churn trimestral — Actualizado hace 3 días

- Texto junto al spinner: “Cargando los informes…”. Un ícono girando solo no le dice nada a un lector de pantalla.
- ¿Recargar algo que ya está en pantalla? Mantén el contenido atenuado en vez de cambiarlo por un vacío.
- Con movimiento reducido, el ícono se detiene y el texto sigue.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Tema del ejemplo: cargando" data-ds-tooltip="Alternar claro y oscuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>
```

## Anatomía

Cuatro partes — y solo la acción es obligatoria cuando existe una salida. Todo centrado, en una columna estrecha.

- Ícono. Da el contexto de un vistazo. Un ícono de la biblioteca, nunca ilustración ni emoji. Opcional dentro de listas.
- Título. Qué pasó, en hasta seis palabras. Sin punto final.
- Descripción. Por qué está vacío y qué hacer. Una o dos frases.
- Acciones. Una principal — el siguiente paso — y, si tiene sentido, una alternativa en acción en línea.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-empty">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">Ningún proyecto todavía</p>
<p class="ds-empty__description">Los proyectos reúnen tareas, archivos y personas. Crea el primero e invita al equipo.</p>
<div class="ds-empty__actions"><span class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Crear proyecto</span><span class="ds-inline-action">Ver un ejemplo<ds-icon name="arrow-right"></ds-icon></span></div>
</div>
```

## Escritura

Di qué pasó, por qué (cuando ayuda) y qué hacer. Tono tranquilo, sin culpa, sin exclamación — y siempre con una salida.

| Situación | Evita | Prefiere |
| --- | --- | --- |
| Primer uso | Sin datos. | Ningún proyecto todavía. Crea el primero e invita al equipo. |
| Sin resultados | 0 resultados | Nada encontrado para “presupuesto 2019”. Revisa la ortografía o limpia los filtros. |
| Error | ¡Ocurrió un error! | No pudimos cargar los pagos. Inténtalo de nuevo en unos segundos. |
| Sin permiso | Acceso denegado (403) | No tienes acceso a este informe. Pídelo a quien lo creó. |
| Offline | Network error | Sin conexión. Mostrando la última versión guardada, de las 14:32. |
| Cargando | Espere… | Cargando los proyectos… Suele tardar pocos segundos. |

## Dónde aparece

El mismo estado cambia de tamaño según el lugar. La página entera tiene espacio; dentro de un panel, se encoge; en una lista, se vuelve una fila.

Página entera `ds-empty` — Toda la pantalla está vacía. Ícono grande, título, descripción y acción.

Dentro de panel `ds-empty--compact` — Un bloque de la pantalla está vacío; el resto sigue funcionando.

Nombre — Actualizado

Fila de lista o tabla `ds-empty--inline`

Ícono a la izquierda, acción a la derecha. En una tabla, va en una celda con `colspan`.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-empty">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">Ningún proyecto todavía</p>
<p class="ds-empty__description">Los proyectos reúnen tareas, archivos y personas. Crea el primero e invita al equipo.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Crear proyecto</button></div>
</div>

<span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted"><ds-icon name="more-horizontal"></ds-icon></span>

<div class="ds-empty ds-empty--compact" role="status">
<span class="ds-empty__icon"><ds-icon name="search-x"></ds-icon></span>
<p class="ds-empty__title">Nada encontrado para “presupuesto 2019”</p>
<p class="ds-empty__description">Revisa la ortografía o prueba otra palabra. La búsqueda mira títulos y autores.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="x"></ds-icon>Limpiar búsqueda</button></div>
</div>

<div class="ds-empty ds-empty--inline ds-empty--danger">
<span class="ds-empty__icon"><ds-icon name="alert-circle"></ds-icon></span>
<p class="ds-empty__title">No pudimos cargar los pagos</p>
<p class="ds-empty__description">Inténtalo de nuevo en unos segundos.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="refresh"></ds-icon>Intentar de nuevo</button></div>
<p class="ds-empty__meta">Error 503 · 14:32</p>
</div>
```

## Accesibilidad

El estado vacío también es contenido: necesita anunciarse, tener foco predecible y nunca depender solo de ícono o color.

- Anuncia sin robar el foco — Resultado vacío y conteo en `role="status"`: el lector de pantalla dice “Nada encontrado” y la persona sigue en el campo de búsqueda.
- Alerta solo después de una acción — El error que aparece al intentar de nuevo usa `role="alert"`. En la carga de la página, nada de alerta — el contenido ya está ahí.
- Foco que sigue a la acción — Tab Enter — “Limpiar búsqueda” devuelve el foco al campo; “Intentar de nuevo” con éxito lleva al contenido; “Crear” lleva al elemento nuevo.
- Cargando con texto — El contenedor recibe `aria-busy="true"` y el spinner viene con una frase. Un ícono girando solo no dice nada.
- Íconos decorativos — El ícono del estado es `aria-hidden`; el título y la descripción llevan el sentido.
- Movimiento reducido — Con `prefers-reduced-motion`, el spinner se detiene. El texto sigue diciendo qué está pasando.
- Controles a la vista — Búsqueda, filtros y navegación siguen en pantalla en el estado vacío — son el camino de vuelta.

## Código

Una clase base y modificadores para lugar y tono. Las acciones son los botones y acciones en línea de siempre.

```html
<div class="ds-empty ds-empty--danger">
  <span class="ds-empty__icon"><ds-icon name="alert-circle"></ds-icon></span>
  <p class="ds-empty__title">No pudimos cargar los pagos</p>
  <p class="ds-empty__description">Puede ser inestabilidad de nuestro lado. Tus datos están seguros — inténtalo de nuevo en unos segundos.</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="refresh"></ds-icon>Intentar de nuevo</button>
    <button type="button" class="ds-inline-action">Ver estado del servicio<ds-icon name="external-link" size="14"></ds-icon></button>
  </div>
  <p class="ds-empty__meta">Error 503 · 14:32</p>
</div>
```

| Clase | Cuándo usar |
| --- | --- |
|  `ds-empty`  | Página entera o área principal vacía. |
|  `ds-empty--compact`  | Dentro de panel, tarjeta o columna. |
|  `ds-empty--inline`  | Una fila de lista o tabla; ícono a la izquierda, acción a la derecha. |
|  `ds-empty--plain`  | Sin contorno ni fondo, cuando ya está dentro de una superficie. |
|  `ds-empty--danger`  | Error: ícono en el tono de peligro. |
|  `ds-empty--warning`  | Offline y situaciones de atención. |
|  `ds-empty--muted`  | Neutro, como sin permiso. |
|  `ds-empty--loading`  | Cargando: el ícono gira (se detiene con movimiento reducido). |
|  `ds-empty__meta`  | Código del error, hora, versión — línea pequeña al final. |

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Seis reglas para que el vacío no se vuelva un callejón sin salida.

- **Haz:** siempre un siguiente paso. Crear, limpiar filtros, intentar de nuevo, pedir acceso. Si no hay nada que hacer, di cuándo va a cambiar.
- **Evita:** “Sin datos”. No explica nada. La persona no sabe si es error, filtro o si todavía no empezó.
- **Consejo:** Diferencia las causas. Primer uso, sin resultados y error piden textos y acciones distintos — aun con el mismo layout.
- **Haz:** ícono de la biblioteca. Un ícono da el contexto y combina con el resto. Las ilustraciones grandes y los emoji compiten con el mensaje.
- **Evita:** cambiar contenido por spinner. Al recargar, mantén lo que ya estaba en pantalla atenuado. Parpadear a vacío parece que todo desapareció.
- **Consejo:** Una acción principal. Dos botones primarios en el vacío dividen la atención. La alternativa va en acción en línea.
