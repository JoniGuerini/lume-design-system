# Acordeón

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/acordeao

Secciones que se abren y se cierran en su lugar. Bueno para preguntas frecuentes y detalles que solo parte de las personas quiere leer.

En números: JavaScript: 0 · apariencias: 2 · base: details · altura mínima: 52 px.

## Ejemplo

```html
<div class="ds-accordion">
  <details class="ds-accordion__item" name="faq" open>
    <summary class="ds-accordion__head">
      <span>¿Qué incluye el plan?</span>
      <ds-icon name="chevron-down" size="18"></ds-icon>
    </summary>
    <div class="ds-accordion__body">Todos los componentes, los tokens y las actualizaciones.</div>
  </details>
  <!-- más elementos -->
</div>
```

## Variantes

Con el mismo `name` en los elementos, abrir uno cierra los otros. Sin él, varios quedan abiertos.

Con líneas `ds-accordion` — Discreto, para el medio de una página.

En tarjetas `ds-accordion--card` — Cada elemento es una superficie. Bueno sobre el fondo de la página.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-accordion">
<details class="ds-accordion__item" name="ac-lines" open="">
<summary class="ds-accordion__head"><span>¿Qué incluye el plan?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Todos los componentes, los tokens y las actualizaciones.</div>
</details><details class="ds-accordion__item" name="ac-lines">
<summary class="ds-accordion__head"><span>¿Puedo cancelar cuando quiera?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Sí, sin multa. El acceso sigue hasta el fin del período.</div>
</details><details class="ds-accordion__item" name="ac-lines">
<summary class="ds-accordion__head"><span>¿Cómo hablo con soporte?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Por chat, en días hábiles, o por el correo de tu cuenta.</div>
</details>
</div>

<div class="ds-accordion ds-accordion--card">
<details class="ds-accordion__item" name="ac-card" open="">
<summary class="ds-accordion__head"><span>¿Qué incluye el plan?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Todos los componentes, los tokens y las actualizaciones.</div>
</details><details class="ds-accordion__item" name="ac-card">
<summary class="ds-accordion__head"><span>¿Puedo cancelar cuando quiera?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Sí, sin multa. El acceso sigue hasta el fin del período.</div>
</details><details class="ds-accordion__item" name="ac-card">
<summary class="ds-accordion__head"><span>¿Cómo hablo con soporte?</span><ds-icon name="chevron-down"></ds-icon></summary>
<div class="ds-accordion__body">Por chat, en días hábiles, o por el correo de tu cuenta.</div>
</details>
</div>
```

## Estados

Hover y foco se pueden forzar con `data-state` en el encabezado.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-accordion"><details class="ds-accordion__item"><summary class="ds-accordion__head"><span>¿Qué incluye el plan?</span><ds-icon name="chevron-down"></ds-icon></summary><div class="ds-accordion__body">Todos los componentes, los tokens y las actualizaciones.</div></details></div>

<div class="ds-accordion"><details class="ds-accordion__item" open=""><summary class="ds-accordion__head"><span>¿Qué incluye el plan?</span><ds-icon name="chevron-down"></ds-icon></summary><div class="ds-accordion__body">Todos los componentes, los tokens y las actualizaciones.</div></details></div>
```

## Accesibilidad

El navegador ya se ocupa del rol, del estado y del teclado.

- Teclado — Tab Enter Espacio — Tab va de un título a otro; Enter o Espacio abren y cierran.
- Estado anunciado — El lector de pantalla dice “contraído” o “expandido” sin atributo extra.
- Encontrable — Ctrl F — En navegadores actuales, buscar en la página abre el elemento que tiene el texto.
- Movimiento reducido — Con `prefers-reduced-motion`, se abre sin animar.

## Tokens usados

Todo lo que consume el acordeón.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.border.subtle (`--ds-color-border-subtle`) | Líneas y contorno de la tarjeta | #3E516624 | #FFFFFF0F |
| color.bg.surface (`--ds-color-bg-surface`) | Fondo de la tarjeta | #FFFFFF | #24221F |
| color.fg.default (`--ds-color-fg-default`) | Título | #2B3847 | #F3EDE5 |
| color.fg.muted (`--ds-color-fg-muted`) | Contenido | #46586E | #CEC8C1 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Flecha | #53657A | #9C9792 |
| duration.base (`--ds-duration-base`) | Abrir y cerrar | 200ms | 200ms |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** contenido opcional. Preguntas frecuentes y detalles que no todos necesitan leer.
- **Evita:** lo esencial. Lo que todos necesitan ver no debe quedar oculto tras un clic.
- **Consejo:** Títulos que lo dicen todo. La persona decide abrir por el título: escribe la pregunta entera.
