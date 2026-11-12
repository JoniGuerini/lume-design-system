# Interfaz con Lume Design System

Este proyecto usa Lume Design System (https://lumeui.dev). Antes de crear o cambiar cualquier pantalla, lee https://lumeui.dev/ia/es/LEEME.md y, para cada componente usado, su archivo en https://lumeui.dev/ia/es/componentes/. El índice completo está en https://lumeui.dev/ia/es/llms.txt.

Reglas que valen siempre:

- Usa solo clases `ds-*`, atributos y funciones que aparecen en la documentación de Lume. No inventes variantes, tamaños ni propiedades.
- Íconos solo con `<ds-icon name="…">` y nombres de la lista en https://lumeui.dev/ia/es/iconos.md.
- Color, espacio, radio y tipografía solo por token (`var(--ds-…)`), nunca valores sueltos.
- Si Lume tiene un componente para la necesidad, úsalo en lugar de crear uno propio.
- Sigue las secciones "Uso" y "Accesibilidad" de cada componente.
- Visual plano: sin degradados, sombras decorativas, vidrio ni desenfoque. Una acción primaria por pantalla.
- Si la documentación no cubre un caso, avísale a la persona y di cuál fue la opción más cercana.

Copia este archivo a la raíz de tu proyecto con el nombre que lee tu herramienta: `AGENTS.md`, `CLAUDE.md` o el archivo de reglas de tu editor.
