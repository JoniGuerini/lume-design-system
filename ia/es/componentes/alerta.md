# Alerta

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/alerta

Un mensaje en la propia página, que queda a la vista hasta que deja de valer. Para confirmar algo que acaba de pasar y desaparecer, usa el Toast.

En números: tonos: 5 · tamaños: 2 · JavaScript: 0 · roles: alert · status.

## Ejemplo

```html
<div class="ds-alert ds-alert--info" role="status">
  <span class="ds-alert__icon"><ds-icon name="info" size="18"></ds-icon></span>
  <div class="ds-alert__body">
    <p class="ds-alert__title">Nueva versión disponible</p>
    <p class="ds-alert__text">Actualiza cuando puedas; nada de lo que hiciste se pierde.</p>
  </div>
  <button class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-alert__close" aria-label="Cerrar"><ds-icon name="x" size="16"></ds-icon></button>
</div>
```

## Tonos

El tono nunca viene solo: el ícono y el texto dicen lo mismo que el color.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-alert">
<span class="ds-alert__icon"><ds-icon name="info"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Cambio de plan en diciembre</p>
<p class="ds-alert__text">Los valores actuales siguen hasta fin de mes.</p>
</div>
</div>

<div class="ds-alert ds-alert--info">
<span class="ds-alert__icon"><ds-icon name="info"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Nueva versión disponible</p>
<p class="ds-alert__text">Actualiza cuando puedas; nada de lo que hiciste se pierde.</p>
</div>
</div>

<div class="ds-alert ds-alert--success">
<span class="ds-alert__icon"><ds-icon name="check-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Pago confirmado</p>
<p class="ds-alert__text">El recibo se envió a tu correo.</p>
</div>
</div>

<div class="ds-alert ds-alert--warning">
<span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Tu plan vence en 3 días</p>
<p class="ds-alert__text">Renueva para no perder el acceso a los proyectos.</p>
</div>
</div>

<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">No pudimos guardar</p>
<p class="ds-alert__text">Tus cambios siguen aquí. Inténtalo de nuevo en unos segundos.</p>
</div>
</div>
```

## Variantes

Con una acción para resolverlo, o compacto para caber dentro de un panel.

Con acción `ds-alert__actions` — Da el siguiente paso, en vez de solo avisar.

Compacto `ds-alert--compact` — Una sola línea, para paneles y barras.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">No pudimos guardar</p>
<p class="ds-alert__text">Tus cambios siguen aquí. Inténtalo de nuevo en unos segundos.</p>
<div class="ds-alert__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">Intentar de nuevo</button></div>
</div>
</div>

<div class="ds-alert ds-alert--warning ds-alert--compact">
<span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Tu plan vence en 3 días</p>
</div>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-alert__close" data-alert-close="" aria-label="Cerrar"><ds-icon name="x"></ds-icon></button>
</div>
```

## Accesibilidad

El rol depende de cuándo aparece la alerta.

- Después de una acción — `role="alert"` anuncia al instante, como en un error al guardar. Úsalo solo para lo urgente.
- Aviso sin prisa — `role="status"` anuncia sin interrumpir lo que la persona está oyendo.
- Ya en la página — Quien ya está ahí al cargar no necesita rol: se lee en el orden normal.
- No solo color — Cada tono tiene ícono propio y texto que explica.

## Tokens usados

Los tonos siguen el mismo patrón: fondo, contorno e ícono.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fondo neutro | #FFFFFF | #24221F |
| color.info.subtle (`--ds-color-info-subtle`) | Fondo de información | #F0F8FF | #6ABCFF21 |
| color.success.subtle (`--ds-color-success-subtle`) | Fondo de éxito | #EFFAF1 | #72CB8B21 |
| color.warning.subtle (`--ds-color-warning-subtle`) | Fondo de atención | #FFF9F0 | #FFB85121 |
| color.danger.subtle (`--ds-color-danger-subtle`) | Fondo de peligro | #FFF4F3 | #FF908721 |
| color.danger.border (`--ds-color-danger-border`) | Contorno de peligro | #FFCFCA | #FF90874D |
| color.danger.fg (`--ds-color-danger-fg`) | Ícono de peligro | #C13834 | #FFB2AA |
| radius.lg (`--ds-radius-lg`) | Esquinas | 16 px | 16 px |

## Uso

¿Alerta, Toast o Modal?

- **Haz:** lo que sigue valiendo. Un plan por vencer, un error por corregir, un aviso sobre esta página.
- **Evita:** confirmaciones pasajeras. “Proyecto guardado” es para el Toast, que desaparece solo.
- **Consejo:** Di qué hacer. Una buena alerta explica qué pasó y cuál es el siguiente paso.
