# Breadcrumb

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/breadcrumb

Muestra el camino hasta la página actual y deja volver a cualquier nivel. Es lo que aparece arriba en este sitio.

En números: JavaScript: 0 · separador: 14 px · en el móvil: solo el actual · atributo: aria-current.

## Ejemplo

```html
<nav class="ds-breadcrumb" aria-label="Estás en">
  <ol>
    <li><a href="#">Inicio</a></li>
    <li><ds-icon name="chevron-right" size="14"></ds-icon><a href="#">Proyectos</a></li>
    <li><ds-icon name="chevron-right" size="14"></ds-icon><span aria-current="page">Lume</span></li>
  </ol>
</nav>
```

## Variantes

En pantallas estrechas, solo aparece la página actual, y el título de la página ya sitúa a la persona.

Dos niveles `ol` — Lo mínimo que tiene sentido.

Varios niveles `ol` — Cada nivel de arriba es un enlace.

Marcado de los ejemplos de esta sección:

```html
<nav class="ds-breadcrumb" aria-label="Estás en"><ol>
<li><a href="#/componentes/breadcrumb" data-inert="">Inicio</a></li><li><ds-icon name="chevron-right"></ds-icon><span aria-current="page">Proyectos</span></li>
</ol></nav>

<nav class="ds-breadcrumb" aria-label="Estás en"><ol>
<li><a href="#/componentes/breadcrumb" data-inert="">Inicio</a></li><li><ds-icon name="chevron-right"></ds-icon><a href="#/componentes/breadcrumb" data-inert="">Proyectos</a></li><li><ds-icon name="chevron-right"></ds-icon><a href="#/componentes/breadcrumb" data-inert="">Lume</a></li><li><ds-icon name="chevron-right"></ds-icon><span aria-current="page">Ajustes</span></li>
</ol></nav>
```

## Accesibilidad

Una navegación con nombre y una lista en orden.

- Nombre de la navegación — El aria-label diferencia esta navegación del menú principal.
- Página actual — El último elemento lleva `aria-current="page"` y no es enlace.
- Separadores — Las flechas son dibujos, ocultas para el lector de pantalla.
- Teclado — Tab Enter — Enlaces comunes, en orden en el Tab.

## Tokens usados

Todo lo que consume el breadcrumb.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.fg.subtle (`--ds-color-fg-subtle`) | Enlaces y separador | #5C6C7F | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Página actual y hover | #2B3847 | #F3EDE5 |
| text.label-md (`--ds-text-label-md`) | Texto | 14/20 · medium | 14/20 · medium |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** contenido en niveles. Cuando la persona puede llegar al fondo y querer subir un nivel.
- **Evita:** flujos por etapas. Para un registro por partes, lo correcto es el Stepper.
- **Consejo:** Muestra la estructura. Es el lugar en la jerarquía, no el historial de lo que la persona visitó.
