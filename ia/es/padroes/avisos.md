# Avisos y confirmaciones

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/avisos

Toast, alerta, banner o modal: cada uno responde a una pregunta distinta. Cuánto cuesta equivocarse y cuánto debe durar el aviso deciden cuál usar.

En números: formas de avisar: 4 · banner a la vez: 1 · errores en toast: 0.

## Ejemplo en vivo

Un informe en edición. Cada acción responde con el aviso que le corresponde.

- Sección 1 — El tiempo de respuesta bajó un 18% y las personas activas superaron las 2 mil.
- Sección 2 — La búsqueda nueva respondió por la mitad de las visitas a la documentación.
- Sección 3 — En noviembre, el foco es el primer uso y las pantallas de error.

- Guardar borrador: un toast corto, sin acción. Salió bien y listo.
- Publicar: las secciones sin título se vuelven una alerta arriba, con enlaces a cada campo.
- En el ⋯, Archivar ocurre al instante, con Deshacer; Eliminar pregunta antes.
- Activa “Sin conexión” arriba del escenario: el banner queda hasta que vuelva la conexión.

Marcado de los ejemplos de esta sección:

```html
<label class="ds-switch ds-switch--sm">
<input type="checkbox" role="switch" class="ds-switch__input" data-av-offline="">
<span class="ds-choice__text"><span class="ds-choice__label">Sin conexión</span></span>
</label>

<div class="ds-banner ds-banner--warning" role="region" aria-label="Aviso" data-av-banner="" hidden="">
<span class="ds-banner__icon"><ds-icon name="wifi-off"></ds-icon></span>
<p class="ds-banner__text"><strong>Sin conexión.</strong> Lo que escribas queda guardado y se sube cuando vuelva la conexión.</p>
<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-av-retry="">Intentar ahora</button>
</div>

<div class="ds-empty ds-empty--compact ds-empty--plain" data-av-deleted="" hidden="">
<span class="ds-empty__icon"><ds-icon name="trash"></ds-icon></span>
<p class="ds-empty__title">Informe eliminado</p>
<p class="ds-empty__description">En el ejemplo, se puede recuperar.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-av-restore="">Reiniciar el ejemplo</button></div>
</div>
```

## Cuál usar

Cuatro formas de avisar, de la más ligera a la que interrumpe.

| Medio | Cuándo | ¿Desaparece solo? | Ejemplo |
| --- | --- | --- | --- |
| Toast | El resultado de algo que la persona hizo, que salió bien o tiene vuelta atrás. | Sí, en 2 s (5 s con acción) | “Borrador guardado” |
| Alerta | Un problema de esta pantalla, que queda hasta resolverse. Cerca de donde ocurrió. | No, se va al resolverse | “2 secciones no tienen título” |
| Banner | Un estado que vale para toda la app: conexión, mantenimiento, plan. | Cuando termina el estado | “Sin conexión” |
| Modal | Una decisión que no vuelve y necesita respuesta ahora. | Se cierra con la respuesta | “¿Eliminar el informe?” |

## Reglas

Seis decisiones que valen para cualquier aviso.

Deshacer gana a confirmar

Si se puede deshacer, hazlo al instante y ofrece “Deshacer” en el toast. Archivar, mover y quitar de una lista funcionan así.

Confirmar solo lo que no vuelve

El modal dice qué se pierde, con números, y el botón repite el verbo: “Eliminar informe”.

El error no va en un toast

El toast desaparece en segundos. Lo que la persona necesita corregir queda en una alerta hasta que se corrija.

Cerca de donde ocurrió

La alerta queda arriba del área afectada, con enlaces a cada campo. Nada de aviso en una esquina para un problema en el medio.

Un aviso por cosa

No sumes alerta y toast para el mismo problema. Un banner por vez; como máximo tres toasts.

Nunca solo el color

Ícono y texto dicen lo mismo que el tono. Una alerta amarilla sin palabras no dice nada a quien no distingue el color.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M9 13.5 4.5 9 9 4.5M4.5 9h10a5 5 0 0 1 0 10H11"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10.3 4.2 2.9 17.5A2 2 0 0 0 4.6 20.5h14.8a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0z"></path><path d="M12 9.5v4"></path><path d="M12 17h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.5"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>
```

## Mensajes

Qué pasó y qué hacer, en palabras de quien usa. El código de error va al registro, no a la pantalla.

| Situación | Evita | Prefiere |
| --- | --- | --- |
| Salió bien | ¡Operación completada con éxito! | Borrador guardado |
| Falta algo | Error al procesar la solicitud. | 2 secciones no tienen título. Dales un título para publicar. |
| Sin red | ERR_INTERNET_DISCONNECTED | Sin conexión. Lo que escribas queda guardado. |
| Eliminar | ¿Seguro que desea continuar? | ¿Eliminar el informe? Las 3 secciones y los comentarios desaparecen. |

## Accesibilidad

Cada medio habla a su manera: unos sin mover el foco, otros llevando el foco hasta ellos.

- Toast discreto — La región del toast es `role="status"`: se anuncia sin interrumpir. Con acción, dura 5 s y el tiempo se pausa con el foco o el puntero encima.
- Deshacer también en otro lugar — Quien se perdió el toast necesita otro camino: lo archivado aparece en Archivados, con Restaurar.
- La alerta recibe el foco — La alerta que aparece tras una acción tiene `role="alert"` y `tabindex="-1"`; el foco va hasta ella y cada enlace lleva al campo correcto.
- El banner no roba el foco — Es una región con nombre (`aria-label="Aviso"`), fácil de encontrar por los puntos de referencia, y su texto se anuncia cuando aparece.
- El modal de peligro empieza en Cancelar — Un Enter apresurado no elimina nada. Esc cierra y el foco vuelve al ⋯ que abrió el menú.

## Código

Alerta y banner son marcado; `toast` y `confirmModal` son una línea cada uno.

```html
<!-- Alerta: arriba del área afectada, con un enlace a cada campo -->
<div class="ds-alert ds-alert--warning" role="alert" tabindex="-1">
  <span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
  <div class="ds-alert__body">
    <p class="ds-alert__title">2 secciones no tienen título</p>
    <ul class="ds-alert__list">
      <li><a href="#seccion-2">Sección 2: dale un título.</a></li>
      <li><a href="#seccion-3">Sección 3: dale un título.</a></li>
    </ul>
  </div>
</div>

<!-- Banner: un estado de toda la app -->
<div class="ds-banner ds-banner--warning" role="region" aria-label="Aviso">
  <span class="ds-banner__icon"><ds-icon name="wifi-off"></ds-icon></span>
  <p class="ds-banner__text"><strong>Sin conexión.</strong> Lo que escribas queda guardado.</p>
</div>
```

```html
import { toast, confirmModal } from 'https://lumeui.dev/v/1.3/lume.js';

// Tiene vuelta: hazlo ahora y ofrece Deshacer
archivar(informe);
toast('Informe archivado', {
  action: { label: 'Deshacer', onClick: () => desarchivar(informe) },
});

// No tiene vuelta: pregunta, diciendo qué se pierde
const ok = await confirmModal({
  title: '¿Eliminar el informe?',
  body: 'Las 3 secciones y los comentarios desaparecen. No se puede deshacer.',
  confirmLabel: 'Eliminar informe',
  tone: 'danger',   // el foco empieza en Cancelar
});
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

En la duda, el aviso más ligero que aún cumple su función.

- **Haz:** di el siguiente paso. Todo aviso de problema termina con lo que la persona puede hacer: intentar de nuevo, corregir el campo, esperar la conexión.
- **Evita:** un modal para decir que salió bien. Interrumpir para celebrar obliga a cerrar algo que no se pidió. El éxito es un toast, o ni eso cuando la pantalla ya lo muestra.
- **Consejo:** ¿La pantalla ya lo muestra? No avises. Un elemento que aparece en la lista o un switch que cambia de posición ya son el aviso. El toast es para cuando el efecto no está a la vista.
