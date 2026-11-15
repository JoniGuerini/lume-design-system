# Lume Design System: guía para IAs

Lee este archivo antes de crear cualquier pantalla con Lume. Explica cómo instalarlo, qué reglas valen para todas las pantallas y qué no debes inventar nunca. El índice completo de archivos está en https://lumeui.dev/ia/es/llms.txt.

Lume es un design system en HTML, CSS y JavaScript nativos, sin dependencias. Reúne tokens, tipografía, 154 íconos propios, 58 componentes, gráficos y patrones de pantalla, en los temas claro y oscuro.

## Antes que nada

1. **Usa solo lo que está documentado.** Toda clase `ds-*`, todo atributo `data-*` y toda función de JavaScript que uses debe aparecer en un archivo de esta documentación. No inventes clases, variantes, tamaños ni propiedades.
2. **Íconos solo de la lista.** Usa `<ds-icon name="…">` con un nombre de https://lumeui.dev/ia/es/iconos.md. Si ninguno sirve, elige el más cercano de la lista y avísale a la persona. Nunca dibujes un SVG propio en su lugar.
3. **Color, espacio, radio y tipografía solo por token.** Usa `var(--ds-…)`, nunca un valor suelto como `#3e5166` o `13px`. Los tokens están en https://lumeui.dev/ia/es/fundamentos/cores.md (y en las otras páginas de Fundamentos) y en cada archivo de componente, en la sección "Tokens usados".
4. **Componente antes que código propio.** Si existe un componente para la necesidad, úsalo, aunque se pueda hacer a mano.
5. **Ante la duda, pregunta o avisa.** Si la documentación no cubre un caso, dile a la persona qué faltó y cuál fue la opción más cercana. No llenes el hueco con algo que solo parezca de Lume.
6. **Sigue las secciones "Uso" y "Accesibilidad" de cada componente.** Son reglas, no sugerencias.

## Instalación

Lume está publicado con versión fija en `https://lumeui.dev/v/1.5/` y se puede cargar directamente desde otro sitio. Licencia MIT.

```html
<html lang="es" data-theme="light">
  <head>
    <link rel="stylesheet" href="https://lumeui.dev/v/1.5/lume.css">
  </head>
  <body>
    <button type="button" class="ds-btn ds-btn--primary">Guardar</button>

    <script type="module">
      import { initTooltips } from 'https://lumeui.dev/v/1.5/lume.js';
      initTooltips();
    </script>
  </body>
</html>
```

- **Un solo CSS:** `lume.css` trae las fuentes, los tokens, la base y todos los componentes.
- **Un solo JavaScript, si prefieres:** `lume.js` reúne toda la API pública (`import { createModal, toast } from 'https://lumeui.dev/v/1.5/lume.js'`). La lista y la convención de nombres están en `https://lumeui.dev/ia/es/recursos/api.md`. Lo que no está en él es interno: no lo uses.
- **Tema:** `data-theme="light"` (claro) o `data-theme="dark"` (oscuro) en `<html>`. Para seguir el sistema, llama a `initTheme()` de `https://lumeui.dev/ds/js/theme.js`.
- **JavaScript solo donde hace falta:** los componentes visuales funcionan solo con CSS. Los interactivos tienen un módulo en `https://lumeui.dev/ds/js/`. Importa solo los que usa la pantalla; el archivo de cada componente indica cuál.
- **Íconos:** importa `https://lumeui.dev/ds/icons/icons.js` una vez para que `<ds-icon>` funcione.
- **Idioma:** los textos de sistema de los componentes siguen el idioma del navegador (portugués, inglés o español; cualquier otro pasa a inglés). Para fijar uno, llama a `setLocale('es')` de `https://lumeui.dev/ds/js/i18n.js`.
- **Versión:** usa la dirección con versión (`/v/1.5/`). La versión actual y la lista están en `https://lumeui.dev/v/index.json`. `https://lumeui.dev/ds/` siempre trae la más nueva, y cada versión tiene un zip para quien prefiere los archivos en el proyecto (`https://lumeui.dev/v/1.5/lume-1.5.zip`).

## React

En proyectos React, usa los componentes de `lume/react/`, que vienen en el zip de cada versión (`https://lumeui.dev/v/1.5/lume-1.5.zip`). La carpeta del zip va entera a `src/lume/`; la app importa `./lume/lume.css` una vez y los componentes de `./lume/react`.

```tsx
import './lume/lume.css';
import { Button, Alert } from './lume/react';

<Button variant="primary" icon="check">Guardar cambios</Button>
<Alert tone="success" title="Cambios guardados" />
```

- **Usa el componente React cuando exista** (lista en `https://lumeui.dev/ia/es/recursos/react.md`). Las props siguen las variantes de la página de cada componente: `variant`, `size`, `tone`.
- **Lo que aún no tiene componente React** usa el marcado HTML de la página del componente, con `className` en lugar de `class`. El CSS es el mismo.
- **Íconos:** `<Icon name="…" />`, con los nombres de la lista de íconos. TypeScript rechaza un nombre que no existe.
- **No instales un paquete npm de Lume:** no existe. Los archivos quedan en el proyecto, como en shadcn.

## Dirección visual

- **Todo plano.** Superficies opacas, contornos finos, radios grandes. Sin degradados, sombras decorativas, vidrio, desenfoque, brillo ni textura.
- **Sin imágenes decorativas.** La personalidad viene de la tipografía, los contornos y el color de acento.
- **Tipografía:** Geist Serif en los títulos, Geist Sans en el texto y JetBrains Mono en el código. Usa los estilos de texto de los tokens (`--ds-text-…`), no tamaños sueltos.
- **Una acción primaria por pantalla.** Las demás acciones van en secundario, ghost o sutil.
- **Menos es más.** Prefiere pocos elementos bien resueltos a los adornos. No uses un ícono de destellos ("sparkles") para indicar novedad o IA.

## Textos

- Cortos y directos. Las etiquetas de los botones empiezan con un verbo ("Guardar cambios", no "OK").
- El componente ya trae sus textos de sistema en tres idiomas (portugués, inglés y español). No traduzcas a mano lo que ya resuelve.

## Accesibilidad

Lume sigue la WCAG 2.2, nivel AA, en los dos temas. Los componentes ya vienen con teclado, foco visible y contraste medido. Sigue siendo tu responsabilidad:

- dar nombre a los botones solo con ícono (`aria-label` y una ayuda con el mismo texto);
- usar el elemento correcto (`<button>` para acciones, `<a>` para navegar);
- no depender solo del color para transmitir información;
- respetar las reglas de cada componente en su sección "Accesibilidad".

## Dónde está cada cosa

- **Componentes:** un archivo por componente en `https://lumeui.dev/ia/es/componentes/`. Cada uno trae un ejemplo de código, las variantes con sus clases, los estados, la anatomía, la accesibilidad, los tokens y las reglas de uso.
- **Fundamentos:** color, tipografía, íconos, espaciado, radios, elevación, movimiento y layout, en `https://lumeui.dev/ia/es/fundamentos/`.
- **Gráficos:** en `https://lumeui.dev/ia/es/graficos/`.
- **Patrones de pantalla:** app shell, formularios, inicio de sesión, búsqueda, estados vacíos y conversación, en `https://lumeui.dev/ia/es/padroes/`. Empieza por ellos cuando armes una pantalla completa.
- **Primeros pasos:** `https://lumeui.dev/ia/es/primeiros-passos.md`.

Las rutas de los archivos están en portugués, como las direcciones del sitio; el contenido está en español.

## Elección rápida

- Acción → Botón; acción dentro de un texto o una lista → Acción en línea.
- Una opción entre pocas, siempre visibles, con efecto inmediato → Control segmentado; elegir una o varias de una lista → Selector.
- Encender y apagar con efecto inmediato → Switch; marcar para enviar después → Checkbox.
- Mensaje que desaparece solo → Toast; que se queda en pantalla → Alerta.
- Decisión o tarea corta que interrumpe el flujo → Modal; detalles o una tarea sin salir de la página → Panel lateral.
- Agrupar contenido → Tarjeta; la superficie de una tarea del producto, con controles y secciones → Panel.
- Tarea con progreso medible → Barra de progreso; espera corta → Spinner; contenido con forma conocida cargando → Skeleton.
