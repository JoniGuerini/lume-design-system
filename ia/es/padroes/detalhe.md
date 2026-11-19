# Detalle y edición

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/detalhe

La página de una sola cosa: quién o qué es, los detalles y lo que cambió. Cada campo se edita en el lugar y cada cambio entra en el historial.

En números: campo editado a la vez: 1 · pestañas, como máximo: 5 · modo “Editar” de la página: 0.

## Ejemplo en vivo

La página de una persona del Listado de datos. Edita los campos con el lápiz y mira el historial.

- Edita el equipo y guarda con Enter: el valor cambia y Actividad gana una fila.
- “Añadir teléfono” es el vacío que ya es el botón.
- Borra el nombre e intenta guardar: el error queda ahí, en la fila. Esc desiste.

Marcado de los ejemplos de esta sección:

```html
<nav class="ds-breadcrumb" aria-label="Estás en"><ol>
<li><a href="#/padroes/listagem">Personas</a></li>
<li><ds-icon name="chevron-right"></ds-icon><span aria-current="page" data-de-crumb="">Amanda Ribeiro</span></li>
</ol></nav>
```

## Anatomía

Seis partes. El encabezado queda igual en todas las pestañas.

- 1 — Ruta — El breadcrumb vuelve a la lista, con los filtros que la persona tenía. Es el “Volver” que nunca falla.
- 2 — Encabezado — Quién o qué es, el estado y las acciones de esa cosa. Queda igual en todas las pestañas.
- 3 — Pestañas — Resumen primero. Actividad con el número de eventos. Cinco pestañas como máximo.
- 4 — Propiedades — Etiqueta y valor, uno por fila. Quien puede cambiarlo ve el lápiz; el resto es solo lectura.
- 5 — Resumen — Al lado, los hechos que no se editan: cuándo entró, último acceso, cuántos proyectos.
- 6 — Historial — Quién cambió qué y cuándo, del más nuevo al más antiguo. Cada edición entra aquí al instante.

## Reglas

Seis decisiones que valen para cualquier página de detalle.

Editar en el lugar, un campo a la vez

Para cambiar el equipo, nadie necesita una página de formulario. El campo se abre ahí mismo, con Guardar y Cancelar.

El lápiz no se esconde

Queda a la vista, no solo al pasar el mouse. Y solo aparece donde la persona realmente puede editar.

Enter guarda, Esc desiste

Al terminar, el foco vuelve al lápiz de esa fila, no al principio de la página.

La pantalla es la confirmación

El valor nuevo en su lugar y la fila nueva en el historial ya dicen que se guardó. Un toast aquí sería repetir.

Todo cambio tiene autor y hora

“Ana Lima cambió el equipo de Producto a Diseño”: el antes, el después y quién lo hizo.

Vacío es invitación

“Añadir teléfono” en lugar de un guion. Dice qué falta y ya es el botón para completarlo.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M16 4.5a2.12 2.12 0 0 1 3 3L8 18.5l-4 1 1-4z"></path><path d="m14 6.5 3 3"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="2.5"></rect><path d="M6 10h.01M9.3 10h.01M12.6 10h.01M15.9 10h.01M18 10h.01M7 14h10"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1L3.5 8.5M3.5 4v4.5H8M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
```

## Mensajes

El historial cuenta una historia: quién, qué, de dónde a dónde.

| Situación | Evita | Prefiere |
| --- | --- | --- |
| Sin valor | — o N/A | Añadir teléfono |
| Historial | Registro actualizado. | Cambiaste el equipo de Diseño a Producto |
| Error | Campo inválido. | Escribe el nombre. |
| Fecha | 2026-11-14 09:12:33 | 14 nov, 09:12 |

## Accesibilidad

Editar en el lugar solo funciona si el foco sabe adónde ir.

- Lápiz con nombre completo — “Editar equipo”, no solo “Editar”: en una lista de botones iguales, el nombre es lo que los distingue.
- Foco al campo y de vuelta — Al abrir, el foco va al campo, con el texto seleccionado. Al guardar o cancelar, vuelve al lápiz de la misma fila.
- Guardado, dicho en voz alta — Una región `role="status"` oculta dice “Equipo guardado”: quien no ve la pantalla no queda con la duda.
- Error atado al campo — `aria-invalid` y `aria-describedby` unen el mensaje al campo; el foco sigue en él.
- Estructura que se lee — Breadcrumb con `aria-current`, pestañas en el patrón ARIA y propiedades en `<dl>`: el lector de pantalla dice “Equipo, Diseño”.

## Código

Las propiedades son una `ds-dl`; la edición cambia el `<dd>` por un formulario pequeño. Las pestañas vienen de `mountTabs`.

```html
<dl class="ds-dl ds-dl--lines">
  <div class="ds-dl__row">
    <dt>Equipo</dt>
    <dd>
      <span>Diseño</span>
      <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" aria-label="Editar equipo">…</button>
    </dd>
  </div>
</dl>

<!-- al hacer clic en el lápiz, el dd se vuelve: -->
<form>
  <div class="ds-field ds-field--sm"><input class="ds-field__input" aria-label="Equipo" value="Diseño"></div>
  <button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">Guardar</button>
  <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm">Cancelar</button>
</form>
<p class="ds-visually-hidden" role="status"></p>   <!-- “Equipo guardado” -->
```

```html
import { mountTabs } from 'https://lumeui.dev/v/1.11/lume.js';

mountTabs(pagina);

function editar(fila) {
  const lapiz = fila.querySelector('button');
  fila.dd.replaceChildren(formulario);
  formulario.querySelector('input').select();

  formulario.onsubmit = async (e) => {
    e.preventDefault();
    await guardar(fila.id, formulario.input.value);
    mostrar(fila);                          // el valor nuevo ya es la confirmación
    status.textContent = 'Equipo guardado';
    lapiz.focus();
  };
  formulario.onkeydown = (e) => e.key === 'Escape' && (mostrar(fila), lapiz.focus());
}
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

El detalle es para una sola cosa. Para comparar varias, vuelve a la lista.

- **Haz:** identidad siempre a la vista. Nombre, estado y acciones quedan en el encabezado, encima de las pestañas. Cambiar de pestaña no puede hacer olvidar dónde se está.
- **Evita:** un botón Editar para toda la página. Convertir todo en formulario para cambiar un campo obliga a buscar el campo de nuevo y guardar lo que no se tocó.
- **Consejo:** Campos que van juntos, edítalos juntos. Dirección, cobro: cuando un campo no tiene sentido sin los otros, abre un panel o modal con el grupo entero.
