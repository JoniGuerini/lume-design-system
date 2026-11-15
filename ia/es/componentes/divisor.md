# Divisor

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/divisor

Una línea fina que separa bloques sin llamar la atención. En horizontal entre grupos de contenido, en vertical entre elementos de una fila y, cuando ayuda, con una etiqueta en el medio.

En números: JavaScript: 0 · direcciones: 2 · grosor: 1 px · base: hr.

## Ejemplo

```html
<hr class="ds-divider">
```

## Variantes

La línea es siempre la misma; cambia lo que separa.

Colores

Paletas, roles y contraste medido en los dos temas.

Tipografía

Geist Serif en los títulos, Geist Sans en el texto.

Horizontal `ds-divider` — Entre grupos de una tarjeta o una lista, cuando el espacio solo no basta.

Vertical `ds-divider--vertical` — Entre elementos de una fila: metadatos, acciones de una barra. Ocupa la altura de la fila.

0.34 Divisor, enlace y progreso circular

0.33 Valoración y barra de herramientas

0.32 Paneles redimensionables

Con etiqueta al inicio `ds-divider--label · --start` — Abre un grupo dentro de una lista, como un título pequeño.

Cargar lumeui.dev/v/1.4/lume.css

Descargar lume-1.4.zip

Con etiqueta en el medio `ds-divider--label` — Entre dos alternativas. Basta una palabra corta.

Difuminado `ds-divider--fade` — Se desvanece en los extremos. Es el divisor de la sidebar, entre la navegación y el pie.

Marcado de los ejemplos de esta sección:

```html
<hr class="ds-divider">

<span class="ds-divider ds-divider--vertical" role="separator" aria-orientation="vertical"></span>

<div class="ds-divider ds-divider--label ds-divider--start"><span>Versiones anteriores</span></div>

<div class="ds-divider ds-divider--label"><span>o</span></div>

<hr class="ds-divider ds-divider--fade">
```

## Código

Elige el elemento por lo que significa: hr separa, la etiqueta es texto.

```html
<!-- horizontal -->
<hr class="ds-divider">

<!-- vertical, dentro de un flex -->
<span class="ds-divider ds-divider--vertical" role="separator" aria-orientation="vertical"></span>

<!-- con etiqueta -->
<div class="ds-divider ds-divider--label"><span>o</span></div>
<div class="ds-divider ds-divider--label ds-divider--start"><span>Versiones anteriores</span></div>
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

Un separador es estructura: anuncia solo lo que cambia la lectura.

- Horizontal — El `hr` ya es role="separator". Úsalo cuando la división también tiene sentido para quien escucha la página.
- Vertical — Lleva role="separator" y aria-orientation="vertical". Si es solo adorno entre metadatos, cámbialo por aria-hidden="true".
- Con etiqueta — Es un div común: el lector de pantalla lee el texto (“o”, “Versiones anteriores”) y omite las líneas.
- Contraste — La línea es decorativa y queda por debajo de 3:1 a propósito. La etiqueta usa texto apagado con 4,5:1.

## Tokens usados

Todo lo que consume el divisor.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.border.subtle (`--ds-color-border-subtle`) | Línea | #3E516624 | #FFFFFF0F |
| gradient.divider (`--ds-gradient-divider`) | Línea difuminada | linear-gradient(90deg, var(--ds-color-border-strong) 0%, transparent 100%) | linear-gradient(90deg, var(--ds-color-border-strong) 0%, transparent 100%) |
| color.fg.muted (`--ds-color-fg-muted`) | Etiqueta | #46586E | #CEC8C1 |
| text.label-sm (`--ds-text-label-sm`) | Etiqueta | 13/18 · medium | 13/18 · medium |
| space.150 (`--ds-space-150`) | Espacio entre la etiqueta y las líneas | 12 px | 12 px |

## Uso

Menos divisores, más espacio.

- **Haz:** separa lo que es distinto. Un divisor entre dos temas ayuda; entre elementos iguales de una lista, basta el espacio.
- **Evita:** un divisor entre cada par. Demasiadas líneas se vuelven cuadrícula y cargan la pantalla. Para filas de datos, usa la Tabla.
- **Consejo:** Etiqueta corta. Una o dos palabras. Si la etiqueta necesita más, es un título de sección.
