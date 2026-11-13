# Usar con React

Sección de Lume: Recursos. Página: https://lumeui.dev/#/recursos/react

Componentes .tsx para copiar al proyecto, sobre el mismo CSS y JavaScript de Lume. Sin paquete que instalar: la carpeta viene en el zip de cada versión.

En números: de los 44 componentes: 15 · React: 18+ · dependencias: 0.

## Instalar

Descarga el zip de la versión 0.26, descomprímelo y lleva la carpeta dentro de `src/` con el nombre `lume`. Los componentes están en `lume/react/` e importan el JavaScript y los íconos de la misma carpeta. Funciona con Vite, Next.js y cualquier proyecto React 18 o más nuevo.

```html
src/
  lume/                 ← la carpeta del zip, entera
    lume.css
    lume.js
    js/  icons/  fonts/
    react/              ← los componentes .tsx
  main.tsx
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Usar

Importa `lume.css` una vez, en la entrada de la app, y los componentes de `./lume/react`.

```html
import { createRoot } from 'react-dom/client';
import './lume/lume.css';
import { initTheme } from './lume/lume.js';
import { App } from './App';

initTheme();
createRoot(document.getElementById('root')!).render(<App />);
```

```html
import { useState } from 'react';
import { Alert, Badge, Button, Panel } from './lume/react';

export function App() {
  const [saving, setSaving] = useState(false);
  return (
    <Panel eyebrow="Pedido" title="Pedido #1042" actions={<Badge tone="success" dot>Pagado</Badge>}>
      <Alert tone="info" title="Entrega prevista para el viernes" />
      <Button variant="primary" icon="check" busy={saving} onClick={() => setSaving(true)}>
        {saving ? 'Guardando' : 'Confirmar'}
      </Button>
    </Panel>
  );
}
```

Con una IA: apúntala a `https://lumeui.dev/llms.txt` y dile que el proyecto usa los componentes de `lume/react`.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Componentes

Lo que ya está en React. Cada nombre lleva a la página del componente, con los usos, las variantes y la accesibilidad, que valen igual aquí.

### Base

| Componente | Qué hace | Archivo |
| --- | --- | --- |
| `Icon` | Los 130 íconos, con el nombre comprobado por TypeScript. | Icon.tsx |
| `useLocale` | El idioma de Lume; vuelve a dibujar cuando cambia. | useLocale.ts |
| `cx` | Une clases, ignorando lo que sea falso. | cx.ts |

### Acciones

| Componente | Qué hace | Archivo |
| --- | --- | --- |
| `Button · ButtonLink` | Variante, tamaño, íconos y ocupado (busy). ButtonLink es el mismo aspecto en un enlace. | Button.tsx |
| `IconButton` | Solo el ícono; la etiqueta para lectores de pantalla es obligatoria. | IconButton.tsx |
| `InlineAction` | Acción mínima dentro del contenido ("En escena +"). | InlineAction.tsx |
| `Chip · RemovableChip · ChipGroup` | Filtro (pressed), selector (chevron) y removible (onRemove). | Chip.tsx |

### Feedback y carga

| Componente | Qué hace | Archivo |
| --- | --- | --- |
| `Badge` | Seis tonos, punto y contador. | Badge.tsx |
| `Alert` | Tono con el ícono correcto, acciones y la × (onClose). | Alert.tsx |
| `Progress` | Barra con etiqueta y porcentaje; sin valor, indeterminada. | Loading.tsx |
| `Spinner` | Tres tamaños, ya con la etiqueta "Cargando". | Loading.tsx |
| `Skeleton` | Bloque, línea de texto y círculo. | Loading.tsx |

### Contenido

| Componente | Qué hace | Archivo |
| --- | --- | --- |
| `Card · CardLink` | Superficie simple; CardLink es la tarjeta entera como enlace. | Panel.tsx |
| `Panel · Section` | Encabezado, barra, cuerpo y pie en el orden correcto, por props. | Panel.tsx |
| `Avatar · AvatarGroup` | Iniciales y tono por el nombre, foto que vuelve a las iniciales, estado y "+N". | Avatar.tsx |
| `Kbd` | Una tecla o una combinación (keys). | Content.tsx |
| `DescriptionList` | Pares de etiqueta y valor a partir de una lista. | Content.tsx |
| `Timeline` | Eventos con tono, ícono y fecha. | Content.tsx |
| `Breadcrumb` | Ítems con enlace; renderLink para el enlace de tu enrutador. | Content.tsx |

## Cómo funciona

|   |   |
| --- | --- |
| Una capa fina | Cada componente solo arma el marcado de Lume, con las mismas clases. El aspecto viene de `lume.css`; se corrige allí, queda corregido en React. |
| Tus archivos | Los .tsx quedan en tu proyecto, como en shadcn: puedes leer, cambiar y borrar lo que no uses. Nada de npm. |
| TypeScript | Props tipadas y comentadas, con el enlace a la página de cada componente. `IconName` lista los 130 íconos: un nombre equivocado no compila. |
| Idioma | Los textos que el componente escribe solo ("Cerrar", "Cargando") siguen el idioma de Lume y cambian con `setLocale`. `useLocale()` hace lo mismo en los tuyos. |
| Versiones | La carpeta `react/` va en cada línea: `/v/0.26/react/`. Actualizar es cambiar la carpeta de Lume por la de la línea nueva. |

## Lo que viene

Una etapa por versión, hasta los 44 componentes. Mientras un componente no llega, usa el marcado HTML de su página con className: el CSS es el mismo.

|   |   |   |
| --- | --- | --- |
| `0.27` | React: formularios: Los 11 controles de formulario, con el valor controlado por React y validación. | Próximo |
| `0.28` | React: navegación y capas: Los 15 componentes que abren, cierran y cambian de estado. | Planificado |
| `0.29` | React: contenido, gráficos y app shell: Los componentes más ricos, que completan los 44. | Planificado |
