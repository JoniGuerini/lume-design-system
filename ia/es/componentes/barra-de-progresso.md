# Barra de progreso

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/barra-de-progresso

Muestra cuánto de una tarea ya está hecho. Cuando no se puede saber cuánto falta, la versión indeterminada dice que algo está pasando.

En números: JavaScript: 0 · base: progress · grosores: 4 · 8 px · tonos: 4.

## Ejemplo

```html
<div class="ds-progress-field">
  <div class="ds-progress-field__head">
    <span id="envio">Enviando archivos</span>
    <span class="ds-progress-field__value">62%</span>
  </div>
  <progress class="ds-progress" aria-labelledby="envio" value="62" max="100"></progress>
</div>
```

## Variantes

Usa el tono para el resultado, no para el medio del camino.

Determinada `value · max` — Cuando se puede medir, muestra siempre el número.

Indeterminada `sin value` — Para cuando no hay forma de saber cuánto falta.

Completada `ds-progress--success` — Junto con un texto que dice que terminó.

Con error `ds-progress--danger` — Muestra dónde se detuvo; el texto dice el motivo.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pb-1">Enviando archivos</span><span class="ds-progress-field__value" data-value="">62&nbsp;%</span></div>
<progress class="ds-progress" aria-labelledby="pb-1" value="62" max="100"></progress>
</div>

<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pb-2">Preparando</span></div>
<progress class="ds-progress" aria-labelledby="pb-2"></progress>
</div>

<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pb-3">Enviado</span><span class="ds-progress-field__value" data-value="">100&nbsp;%</span></div>
<progress class="ds-progress ds-progress--success" aria-labelledby="pb-3" value="100" max="100"></progress>
</div>

<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pb-4">Fallo en el envío</span><span class="ds-progress-field__value" data-value="">38&nbsp;%</span></div>
<progress class="ds-progress ds-progress--danger" aria-labelledby="pb-4" value="38" max="100"></progress>
</div>
```

## Accesibilidad

El elemento nativo ya se anuncia como barra de progreso, con el valor actual.

- Con nombre — Vincula el texto a la barra con `aria-labelledby`, para saber qué está progresando.
- No solo color — El éxito y el error necesitan texto; el color solo refuerza.
- Avisa al final — Los lectores de pantalla no anuncian cada cambio: avisa el fin en role="status".
- Movimiento reducido — La indeterminada deja de moverse y queda como una franja estática.

## Tokens usados

Todo lo que consume la barra.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.border.field (`--ds-color-border-field`) | Riel | #3E5166AD | #FFFFFF61 |
| color.brand.solid (`--ds-color-brand-solid`) | Relleno | #3E5166 | #C0CAD6 |
| color.success.solid (`--ds-color-success-solid`) | Completada | #1E854A | #72CB8B |
| color.warning.solid (`--ds-color-warning-solid`) | Atención | #FFB851 | #FFB851 |
| color.danger.solid (`--ds-color-danger-solid`) | Con error | #C13834 | #FF9087 |
| radius.full (`--ds-radius-full`) | Esquinas | 9999 px | 9999 px |

## Uso

¿Barra, spinner o medidor?

- **Haz:** tareas de más de 10 segundos. Envíos e importaciones, donde saber cuánto falta tranquiliza.
- **Evita:** medir lo que no es tarea. El espacio usado o la meta del mes son medidas: usa el Medidor, en Gráficos.
- **Consejo:** ¿Espera corta? Spinner. Por debajo de 10 segundos, basta un Spinner.
