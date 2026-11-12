# Bloque de código

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/bloco-de-codigo

Muestra código con la fuente correcta, y un botón copia todo de una vez. Es lo que aparece en todos los playgrounds de este sitio.

En números: fuente mono: JetBrains · tamaños: 2 · desplazamiento: horizontal · base: pre · code.

## Ejemplo

```html
.cartao {
  background: var(--ds-color-bg-surface);
  border-radius: var(--ds-radius-xl);
}
```

## Variantes

Sin el botón, es solo `.ds-code`. Para un término en medio del texto, usa `.ds-inline-code`.

Con copiar `ds-code-block` — Para lo que la persona va a usar.

```html
<html data-theme="dark">
```

Solo lectura `ds-code` — Para un fragmento que solo ilustra.

```html
--ds-radius-xl: 20px;
```

Pequeño `ds-code--sm` — Dentro de tarjetas y tablas.

Ejecuta `npm run dev` y abre el sitio.

En medio del texto `ds-inline-code` — Para nombres de archivos, tokens y comandos.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-code-block">
<pre class="ds-code"><code>npm run build</code></pre>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-code-block__copy" data-code-copy="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
</div>
```

## Accesibilidad

Texto de verdad, que se puede seleccionar y leer.

- Elementos correctos — `pre` preserva los espacios; `code` dice que es código.
- Botón con nombre — Tab Enter — El ícono tiene nombre para el lector de pantalla, y la copia se anuncia en el aviso.
- Líneas largas — El bloque se desplaza en horizontal, sin romper la página ni el código.

## Tokens usados

Todo lo que consume el bloque.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.sunken (`--ds-color-bg-sunken`) | Fondo | #E8EDF3 | #151412 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno | #3E516624 | #FFFFFF0F |
| color.fg.default (`--ds-color-fg-default`) | Texto | #2B3847 | #F3EDE5 |
| text.code-md (`--ds-text-code-md`) | Código | 14/22 · regular | 14/22 · regular |
| text.code-sm (`--ds-text-code-sm`) | Pequeño y en medio del texto | 12/18 · regular | 12/18 · regular |
| radius.lg (`--ds-radius-lg`) | Esquinas | 16 px | 16 px |

## Uso

Cuándo usarlo y cuándo preferir otra cosa.

- **Haz:** código para copiar. Comandos y ejemplos que la persona pegará en otro lugar.
- **Evita:** datos comunes. Una contraseña o un cupón quedan mejor en un campo con botón de copiar.
- **Consejo:** Corto es mejor. Muestra solo lo que importa. Los fragmentos largos cansan y nadie los lee.
