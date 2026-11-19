# Panel de indicadores

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/painel

Una pantalla para responder a una pregunta de un vistazo: números comparados, un gráfico principal y, por escrito, lo que necesita atención. Los gráficos son los de Lume; aquí el tema es cómo juntarlos.

En números: pregunta: 1 · indicadores, como máximo: 4 · período para todo: 1.

## Ejemplo en vivo

El uso de la documentación de Lume, con números de ejemplo. Para elegir el gráfico de cada dato, mira Gráficos › Visión general.

### Necesita atención

- “datepicker” se buscó 38 veces sin resultado — La página se llama Selector de fecha. Vale un sinónimo en la búsqueda. — Ver búsquedas
- Tokens perdió el 24% de las visitas — Desde que salió del menú de Recursos. — Abrir la página

- Cambia el período: indicadores y gráficos cambian juntos, y cada subtítulo repite el período.
- Búsquedas sin resultado bajando aparece en verde: ahí, bajar es bueno.
- Actualiza: la hora cambia y las tarjetas avisan que están cargando.

## Anatomía

Cinco partes, de la pregunta al detalle: quien lee de arriba abajo se detiene cuando ya tiene la respuesta.

- 1 — Encabezado — La pregunta que el panel responde, de cuándo es el dato y el período, que vale para todo lo de abajo.
- 2 — Indicadores — Hasta cuatro números, cada uno con la variación y la tendencia. Los que mejoran al bajar lo dicen (búsquedas sin resultado).
- 3 — Gráfico principal — El más grande de la pantalla, respondiendo a la pregunta del título. El período anterior en gris, para comparar.
- 4 — Necesita atención — Lo que pide una acción, ya escrito en frases, con el enlace para actuar. Nadie necesita escarbar en el gráfico.
- 5 — Detalles — Abajo, los cortes que explican el número: de dónde vienen, qué se ve más.

## Reglas

Seis decisiones que valen para cualquier panel.

Una pregunta por panel

El título es la pregunta (“Cómo se está usando la documentación”), no “Dashboard”. Lo que no ayuda a responderla va a otro panel.

Número siempre comparado

“4.812 visitas” no dice si es bueno. Con “+12% vs. 30 días anteriores”, sí. Cuatro indicadores como máximo.

Un período para todo

El selector de arriba cambia todas las tarjetas juntas. Un período por tarjeta hace comparar cosas que no se comparan.

Lo que pide acción viene escrito

Una caída importante no queda escondida en una curva. Se vuelve una frase en “Necesita atención”, con el enlace.

Di de cuándo es el dato

“Actualizado a las 09:40” y un botón para actualizar. Un número viejo tratado como nuevo lleva a decisiones equivocadas.

Todo número lleva a algún lugar

Del panel a la lista que explica el número. El panel resume; la decisión ocurre en la lista.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.3"></path><path d="M12 17h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 9h14M5 15h14M10 4 8 20M16 4l-2 16"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="3"></rect><path d="M3.5 10h17M8 3v4M16 3v4"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 17.2h.01"></path><path d="M12 17.2h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10.3 4.2 2.9 17.5A2 2 0 0 0 4.6 20.5h14.8a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0z"></path><path d="M12 9.5v4"></path><path d="M12 17h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
```

## Mensajes

Números con contexto, horas que se leen y vacíos que dicen qué hacer.

| Situación | Evita | Prefiere |
| --- | --- | --- |
| Título | Dashboard | Cómo se está usando la documentación |
| Variación | +12,4% | +12,4% vs. 30 días anteriores |
| Actualización | Last sync: 2026-11-15T12:40:00Z | Actualizado a las 09:40 |
| Sin datos | No data | Ninguna visita en ese período. Elige un período más largo. |

## Accesibilidad

Quien no ve el gráfico necesita llegar a la misma conclusión.

- Gráfico con tabla — Cada gráfico de Lume tiene vista de tabla y tooltip por teclado (flechas). Los números del panel también existen en texto.
- Variación sin depender del color — Flecha, signo (+ o −) y la frase “vs. 30 días anteriores”. Verde y rojo solo refuerzan.
- Período anunciado — El selector es un `radiogroup`; los indicadores están en `aria-live="polite"` y el lector de pantalla lee los números nuevos tras el cambio.
- Cargando, dicho — `setLoading(true)` marca el gráfico con `aria-busy`; nadie lee un número viejo creyendo que es nuevo.
- Atención como lista — “Necesita atención” es una sección con título y una `<ul>`; los enlaces dicen adónde van (“Ver búsquedas”), no “Haz clic aquí”.

## Código

Los gráficos son `createLineChart` y `createBarChart`; los indicadores, `statTileHtml`. El período es un `createSegmented` que actualiza todos.

```html
<header>
  <h1>Cómo se está usando la documentación</h1>
  <p>Actualizado a las 09:40</p>
  <div class="ds-segmented" role="radiogroup" aria-label="Período">…</div>
</header>

<div id="indicadores" aria-live="polite"></div>
<div id="visitas"></div>

<section aria-labelledby="atencion">
  <h2 id="atencion">Necesita atención</h2>
  <ul>…</ul>
</section>
```

```html
import { createLineChart, createSegmented, statTileHtml } from 'https://lumeui.dev/v/1.12/lume.js';

const grafico = createLineChart(document.querySelector('#visitas'), {
  card: true, title: 'Visitas', categories, tooltipLabels,
  series: [
    { name: 'Este período', values: actual },
    { name: 'Período anterior', values: anterior, muted: true },
  ],
});

createSegmented(document.querySelector('[aria-label="Período"]'), {
  async onChange(periodo) {
    grafico.setLoading(true);                 // un período para todas las tarjetas
    const d = await buscar(periodo);
    indicadores.innerHTML = statTileHtml({ label: 'Visitas', value: d.visitas, delta: d.variacion, deltaLabel: 'vs. 30 días anteriores' });
    grafico.update({ categories: d.dias, series: d.series });
    grafico.setLoading(false);
  },
});
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

El panel es para seguir. Para investigar, la persona va a la lista o al informe.

- **Haz:** empieza por lo que la persona decide. Pregunta “¿qué hace alguien después de mirar esto?”. Los números que cambian esa decisión entran; el resto va a un informe.
- **Evita:** la pared de números. Doce indicadores del mismo tamaño dicen que nada es más importante. Cuatro, con un gráfico mayor, cuentan una historia.
- **Consejo:** El período empieza en el más usado. Abre en el período que más se elige (aquí, 30 días) y recuerda la elección en la próxima visita.
