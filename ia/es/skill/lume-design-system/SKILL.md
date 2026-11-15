---
name: lume-design-system
description: Crea y revisa interfaces con Lume Design System (lumeui.dev), un design system en HTML, CSS y JavaScript nativos. Úsalo siempre que alguien pida una pantalla, un componente o un prototipo con Lume, o cuando el proyecto ya cargue ds.css o use clases ds-*.
---

# Lume Design System

Lume es un design system sin dependencias: un CSS (`https://lumeui.dev/v/1.5/lume.css`), módulos de JavaScript opcionales y 154 íconos propios. La documentación para IAs está publicada en `https://lumeui.dev/ia/es/`.

## Cómo trabajar

1. Lee `https://lumeui.dev/ia/es/LEEME.md` antes de escribir código. Trae la instalación, las reglas generales y la dirección visual.
2. Abre el índice `https://lumeui.dev/ia/es/llms.txt` y lee el archivo de cada componente que vayas a usar (`https://lumeui.dev/ia/es/componentes/<nombre>.md`). Para una pantalla completa, empieza por los patrones en `https://lumeui.dev/ia/es/padroes/`.
3. Escribe la interfaz solo con lo que aparece en esos archivos: las clases `ds-*`, los atributos, las funciones de los módulos y los tokens `var(--ds-…)`.
4. Para los íconos, confirma el nombre en `https://lumeui.dev/ia/es/iconos.md`.
5. En un proyecto React, usa los componentes de `lume/react/` (sección React del LEEME); lo que aún no tiene componente usa el marcado HTML con `className`.
6. Antes de entregar, revisa la pantalla con las secciones "Uso" y "Accesibilidad" de los componentes usados.

## Nunca

- Inventar clases, variantes, tamaños, propiedades o íconos que no están en la documentación.
- Usar colores, espacios, radios o tamaños de fuente sueltos en lugar de un token.
- Rehacer a mano un componente que Lume ya tiene.
- Usar degradados, vidrio, desenfoque, sombras decorativas o el ícono de destellos ("sparkles").

Si la documentación no cubre el caso, avísale a la persona y explica cuál fue la opción más cercana.
