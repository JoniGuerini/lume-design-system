# Carga y errores

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/carregamento

El camino de una página desde el clic hasta el contenido, y qué hacer cuando sale mal: esqueleto con la forma correcta, aviso cuando tarda, error solo en la parte que falló y nada de lo que la persona escribió perdido.

En números: sin indicador: < 1 s · avisar demora: 3 s · error sin salida: 0.

## Ejemplo en vivo

La página de un proyecto. Elige qué simular arriba del escenario. Los estados dentro de una tarjeta siguen Estados vacíos.

### Pantallas

### Comentarios

- Cargando: el esqueleto tiene la forma de las pantallas y los comentarios, y nada salta cuando llegan.
- Lento: después de 3 segundos aparece el aviso, con Cancelar.
- Error al guardar: haz clic en Guardar notas. El texto queda e Intentar de nuevo lo resuelve.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-segmented" role="radiogroup" aria-labelledby="lo-sim-label" data-lo-sim="">
<button type="button" class="ds-segmented__item" role="radio" data-value="carregando" aria-checked="true">Cargando</button><button type="button" class="ds-segmented__item" role="radio" data-value="lento" aria-checked="false">Lento</button><button type="button" class="ds-segmented__item" role="radio" data-value="parte" aria-checked="false">Falló una parte</button><button type="button" class="ds-segmented__item" role="radio" data-value="salvar" aria-checked="false">Error al guardar</button><button type="button" class="ds-segmented__item" role="radio" data-value="404" aria-checked="false">No encontrada</button>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-lo-replay="" aria-label="Reiniciar la simulación" data-ds-tooltip="Reiniciar"><ds-icon name="refresh"></ds-icon></button>

<span class="ds-skeleton"></span>

<span class="ds-skeleton ds-skeleton--text"></span>

<div class="ds-form-field">
<label class="ds-form-field__label" for="lo-notes">Notas del proyecto</label>
<div class="ds-field ds-field--multiline"><textarea class="ds-field__input" id="lo-notes" rows="2">Revisar el contraste del pie antes de publicar.</textarea></div>
</div>

<button type="submit" class="ds-btn ds-btn--primary ds-btn--sm" data-lo-save="">Guardar notas</button>
```

## Cuánto tiempo, qué respuesta

La espera decide qué mostrar. Los números son de la percepción de quien usa, no del servidor.

| Espera | Qué mostrar |
| --- | --- |
| Hasta 1 s | Nada. Un indicador que parpadea y desaparece estorba más que ayuda. |
| 1 a 3 s | Esqueleto con la forma de la página que va a llegar, para que nada salte cuando llegue. |
| Más de 3 s | El esqueleto sigue y una frase dice que está tardando, con Cancelar. |
| Falló | Solo la parte que falló muestra el error, con Intentar de nuevo. El resto de la página sigue. |

## Reglas

Seis decisiones que valen para cualquier espera o falla.

Esqueleto con la forma correcta

Las formas grises ocupan el lugar exacto de lo que viene: título, líneas, avatar. Cuando llega el contenido, nada salta.

¿Tarda? Dilo

Pasados 3 segundos, una frase avisa y ofrece cancelar. Un esqueleto infinito parece colgado.

El error queda donde falló

Si solo fallaron los comentarios, solo la tarjeta de comentarios muestra el error. Tirar toda la página por una parte es perder el resto.

Lo que la persona escribió se queda

¿Falló al guardar? El texto sigue en el campo, el aviso lo dice e Intentar de nuevo usa el mismo contenido.

Siempre una salida

Todo error tiene una acción: intentar de nuevo, volver, ver los otros proyectos. Error sin botón es callejón sin salida.

Sin códigos en pantalla

“Error 500” no ayuda a nadie. Di qué no cargó y qué hacer; el código va al registro.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="9" rx="2"></rect><rect x="13.5" y="3.5" width="7" height="5" rx="2"></rect><rect x="13.5" y="11.5" width="7" height="9" rx="2"></rect><rect x="3.5" y="15.5" width="7" height="5" rx="2"></rect></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="2"></rect><rect x="13.5" y="4" width="6.5" height="6.5" rx="2"></rect><rect x="4" y="13.5" width="6.5" height="6.5" rx="2"></rect><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2"></rect></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5l7.5 2.8v5.4c0 4.4-3.1 7.9-7.5 8.8-4.4-.9-7.5-4.4-7.5-8.8V6.3z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.3-4.6L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.6l1.7-2.1M20 20v-4.5h-4.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 7V5h14v2M12 5v14M9 19h6"></path></svg>
```

## Mensajes

Qué no funcionó, qué sigue funcionando y qué hacer ahora.

| Situación | Evita | Prefiere |
| --- | --- | --- |
| Tardando | Espere… | Está tardando más de lo normal. Cancelar |
| Falló una parte | Error 500: Internal Server Error | No pudimos cargar los comentarios. El resto de la página funciona. |
| Falló al guardar | Falló la operación. | No pudimos guardar. Lo que escribiste sigue aquí. |
| No encontrada | 404 Not Found | Esta página ya no existe. Ver proyectos |

## Accesibilidad

Quien no ve el esqueleto necesita saber que algo viene, y cuándo llegó.

- Cargando, dicho — El área que espera tiene `aria-busy="true"` y un nombre (“Cargando pantallas”); las formas del esqueleto no se leen.
- Llegó, sin robar el foco — Cuando llega el contenido, `aria-busy` se va y la región `aria-live="polite"` lee lo que entró. El foco queda donde estaba.
- Demora anunciada — El aviso de demora es `role="status"`; Cancelar es un botón de verdad, alcanzable con el teclado.
- El error al guardar recibe el foco — La alerta tiene `role="alert"` y recibe el foco; Intentar de nuevo es el primer botón después de ella.
- Movimiento reducido — El pulso del esqueleto y el giro del spinner se detienen con `prefers-reduced-motion`; la forma sigue diciendo que está cargando.

## Código

Esqueleto y spinner son CSS (`ds-skeleton`, `ds-spinner`); los tiempos y el error por parte son de tu código.

```html
<!-- cargando: la forma de lo que viene -->
<div aria-busy="true" aria-label="Cargando pantallas">
  <span class="ds-skeleton" style="--w:32px; --h:32px"></span>
  <span class="ds-skeleton ds-skeleton--text" style="--w:60%"></span>
</div>

<!-- una parte falló: el error queda en la tarjeta -->
<section aria-labelledby="comentarios">
  <h2 id="comentarios">Comentarios</h2>
  <p>No pudimos cargar los comentarios. El resto de la página funciona.</p>
  <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">Intentar de nuevo</button>
</section>
```

```html
import { toast } from 'https://lumeui.dev/v/1.13/lume.js';

// esqueleto solo después de 1 s; aviso de demora después de 3 s
const esqueleto = setTimeout(() => mostrarEsqueleto(), 1000);
const demora = setTimeout(() => avisarDemora(), 3000);
try {
  mostrar(await fetch('/api/proyectos/12').then((r) => r.json()));
} catch {
  mostrarError(tarjeta);   // solo la parte que falló
} finally {
  clearTimeout(esqueleto); clearTimeout(demora);
}
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Esqueleto para lo que tiene forma conocida; spinner para lo que no la tiene (un botón, una acción).

- **Haz:** carga por partes. El encabezado y lo que ya se sabe aparecen primero; lo que depende de otra búsqueda llega después, cada uno en su tarjeta.
- **Evita:** un spinner en medio de una página vacía. No dice qué viene ni cuánto falta, y cuando llega el contenido todo salta de lugar.
- **Consejo:** Reintenta solo, una vez. Las fallas de red suelen ser pasajeras. Un reintento automático antes de mostrar el error le ahorra mucho a la persona.
