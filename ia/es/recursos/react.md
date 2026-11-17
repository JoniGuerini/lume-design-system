# Usar con React

Sección de Lume: Recursos. Página: https://lumeui.dev/#/recursos/react

Componentes React sobre el mismo CSS y JavaScript de Lume, ya compilados y con tipos. Instálalos desde npm o, si prefieres los archivos en el proyecto, copia los .tsx.

En números: de los 60 componentes: 60 · React: 18+ · dependencias: 0.

## Instalar

Un solo paquete trae el CSS, el JavaScript y los componentes React, ya compilados y con tipos. Funciona con Vite, Next.js y cualquier proyecto React 18 o más nuevo.

```html
npm install @joniguerini/lume
```

### ¿Prefieres los archivos en el proyecto?

Como en shadcn: descarga el zip de la versión 1.9 y lleva la carpeta a `src/` con el nombre `lume`, o ejecuta `npx @joniguerini/lume init`. Los componentes quedan en `lume/react/`, en .tsx, para leer y cambiar a gusto; entonces los imports pasan a ser `./lume/react`.

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

Importa `lume.css` una vez, en la entrada de la app, y los componentes de `@joniguerini/lume/react`. En Next.js, el CSS va en el layout raíz; los componentes ya llegan marcados para el cliente.

```html
import { createRoot } from 'react-dom/client';
import '@joniguerini/lume/lume.css';
import { initTheme } from '@joniguerini/lume';
import { App } from './App';

initTheme();
createRoot(document.getElementById('root')!).render(<App />);
```

```html
import { useState } from 'react';
import { Alert, Badge, Button, Panel } from '@joniguerini/lume/react';

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

Con una IA: apúntala a `https://lumeui.dev/llms.txt` y dile que el proyecto usa los componentes de `@joniguerini/lume/react`.

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Componentes

Lo que ya está en React. Cada nombre lleva a la página del componente, con los usos, las variantes y la accesibilidad, que valen igual aquí.

### Base

| Componente | Qué hace | Archivo |
| --- | --- | --- |
| `Icon` | Los 132 íconos, con el nombre comprobado por TypeScript. | Icon.tsx |
| `useLocale` | El idioma de Lume; vuelve a dibujar cuando cambia. | useLocale.ts |
| `cx` | Une clases, ignorando lo que sea falso. | cx.ts |

### Acciones

| Componente | Qué hace | Archivo |
| --- | --- | --- |
| `Button · ButtonLink` | Variante, tamaño, íconos y ocupado (busy). ButtonLink es el mismo aspecto en un enlace. | Button.tsx |
| `IconButton` | Solo el ícono; la etiqueta para lectores de pantalla es obligatoria. | IconButton.tsx |
| `InlineAction` | Acción mínima dentro del contenido ("En escena +"). | InlineAction.tsx |
| `Link` | En el texto o suelto (variant), apagado (muted) y externo, con ícono y aviso de pestaña nueva. | Link.tsx |
| `Chip · RemovableChip · ChipGroup` | Filtro (pressed), selector (chevron) y removible (onRemove). | Chip.tsx |

### Formularios

| Componente | Qué hace | Archivo |
| --- | --- | --- |
| `Field · Input · Textarea · TextField` | Etiqueta, pista, error y contador conectados al control; TextField lo junta todo. | Field.tsx |
| `Select` | Una o varias opciones, con grupos, búsqueda y límite. | Select.tsx |
| `Checkbox · Radio · RadioGroup · CheckboxGroup` | Opciones sueltas o en grupo, con el valor controlado. | Choice.tsx |
| `Switch` | Enciende y apaga, con descripción y dos tamaños. | Choice.tsx |
| `DatePicker` | Fecha o período, valor en Date; el formulario recibe ISO. | Pickers.tsx |
| `TimePicker` | Hora en HH:MM, con lista y escritura libre. | Pickers.tsx |
| `ColorPicker · ColorField` | El selector suelto y el campo que lo abre; el hexadecimal queda en el estado. | ColorPicker.tsx |
| `NumberField` | Número con − y +, límites y formato (moneda, porcentaje). | Pickers.tsx |
| `Slider` | Un valor o un rango; onChange mientras arrastras, onCommit al soltar. | Controls.tsx |
| `TagField` | Lista de valores libres, con límite y validación. | Pickers.tsx |
| `FileUpload` | Arrastrar o elegir, con envío, progreso y error por archivo. | Controls.tsx |
| `OtpField` | Una casilla por dígito; onComplete en la última. | Controls.tsx |
| `RichTextEditor` | label, value y onChange con el HTML limpio; tools, placeholder, name y disabled. El editor es dueño de su propio DOM. | Editor.tsx |
| `Form` | La validación de Lume, con reglas propias y el resumen de errores. | Form.tsx |

### Navegación

| Componente | Qué hace | Archivo |
| --- | --- | --- |
| `Menu` | Conecta la lista a cualquier disparador (triggerRef): elección o acciones. | Navigation.tsx |
| `Tabs` | Pestañas ARIA con flechas, Home y End; subrayadas o segmentadas. | Navigation.tsx |
| `SegmentedControl` | Pocas opciones lado a lado, una elegida. | Navigation.tsx |
| `Pagination` | Página y elementos por página en el estado; enlaces opcionales. | Navigation.tsx |
| `Stepper` | Etapas, la actual y volver a las hechas con onChange. | Navigation.tsx |
| `Accordion` | Sobre details nativo; single deja uno abierto a la vez. | Navigation.tsx |
| `Tree` | Niveles anidados, con teclado y el ítem elegido. | Navigation.tsx |
| `useScrollbars` | Activa la barra de desplazamiento superpuesta en toda la app. | Navigation.tsx |
| `BackToTop` | Botón fijo en la esquina del área que se desplaza. | Navigation.tsx |

### Capas

| Componente | Qué hace | Archivo |
| --- | --- | --- |
| `Modal` | open y onClose con el valor de la acción; foco atrapado y Esc por el dialog nativo. | Layers.tsx |
| `Drawer` | El mismo Modal, entrando por el borde. | Layers.tsx |
| `Popover` | Contenido en React fijo al disparador. | Layers.tsx |
| `ContextMenu` | Clic derecho, Shift+F10 o toque largo en un área. | Layers.tsx |
| `Tooltip` | Envuelve un elemento; acepta posición y atajo. | Layers.tsx |
| `toast` | Función, no componente: toast(texto, opciones). | toast.js |
| `useDisclosure` | Abierto, cerrado y las funciones, para Modal y Drawer. | Layers.tsx |

### Feedback y carga

| Componente | Qué hace | Archivo |
| --- | --- | --- |
| `Badge` | Seis tonos, punto y contador. | Badge.tsx |
| `Alert` | Tono con el ícono correcto, acciones y la × (onClose). | Alert.tsx |
| `Banner` | Tono, título y texto; closable con id recuerda en el navegador que se cerró. | Notices.tsx |
| `NotificationCenter` | La campana con el número; items en el estado y onChange para lo leído. Los ids nuevos se anuncian. | Notices.tsx |
| `Progress` | Barra con etiqueta y porcentaje; sin valor, indeterminada. | Loading.tsx |
| `ProgressRing` | Anillo con el porcentaje; sin valor, indeterminado. Tres tamaños y los tonos de la barra. | Loading.tsx |
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
| `Table` | Columnas, orden y selección en el estado; vacío y cargando. | Table.tsx |
| `Calendar` | Mes, semana y día, con eventos; vista y fecha en el estado. | Calendar.tsx |
| `CodeBlock` | Código con el botón de copiar. | Calendar.tsx |
| `Carousel` | Cada hijo es una diapositiva; perView, peek, loop y autoplay con pausa. index y onChange en el estado. | Carousel.tsx |
| `ResizablePanels` | Un ResizablePanel por parte, con size, min, max y collapsible; los divisores se agregan solos. storageKey guarda el tamaño. | Resizable.tsx |
| `Rating` | Calificar, con name, value y onChange; RatingDisplay solo muestra, con media estrella. | Rating.tsx |
| `Toolbar` | ToolbarGroup, ToolbarSeparator y ToolbarButton; pressed en el estado y onToggle en la barra. | Toolbar.tsx |
| `Divider` | Horizontal, vertical, difuminado o con etiqueta en el medio o al inicio. | Link.tsx |
| `ImageGallery` | Miniaturas que abren el visor; images con src, thumb, alt y caption. openImageViewer lo abre desde cualquier lugar. | ImageViewer.tsx |
| `SortableList` | items con id, renderItem y onChange con el nuevo orden; handle, plain y orientation. | Sortable.tsx |
| `Kanban` | columns con items, renderCard y onChange con las columnas ya actualizadas; handle para tarjetas con enlaces. | Sortable.tsx |

### Gráficos

| Componente | Qué hace | Archivo |
| --- | --- | --- |
| `BarChart · LineChart · DonutChart` | Las opciones del gráfico son props; si cambian, se actualiza. | Charts.tsx |
| `Heatmap · CalendarHeatmap · ScatterChart` | Matriz, calendario de un año y dispersión. | Charts.tsx |
| `StatTile · Sparkline · Meter` | El número con variación, la línea de tendencia y el medidor. | Charts.tsx |

### App shell y tema

| Componente | Qué hace | Archivo |
| --- | --- | --- |
| `AppShell` | Sidebar que se contrae, cajón en el móvil y barra superior; onNavigate se conecta a tu enrutador. | AppShell.tsx |
| `AppShell · sidebar` | La sidebar del AppShell: grupos de nav, elemento actual por activeHref, contraída y cajón. | AppShell.tsx |
| `AppShell layout="navbar"` | Los mismos grupos arriba, con un menú por grupo y Más cuando falta espacio. | AppShell.tsx |
| `ThemeToggle · useTheme` | El botón de claro y oscuro y el tema en uso. | AppShell.tsx |

## Cómo funciona

|   |   |
| --- | --- |
| Una capa fina | Cada componente solo arma el marcado de Lume, con las mismas clases. El aspecto viene de `lume.css`; se corrige allí, queda corregido en React. |
| Tus archivos | Desde npm, vienen compilados y con tipos. Copiados, los .tsx quedan en tu proyecto, como en shadcn: puedes leer, cambiar y borrar lo que no uses. |
| TypeScript | Props tipadas y comentadas, con el enlace a la página de cada componente. `IconName` lista los 154 íconos: un nombre equivocado no compila. |
| Idioma | Los textos que el componente escribe solo ("Cerrar", "Cargando") siguen el idioma de Lume y cambian con `setLocale`. `useLocale()` hace lo mismo en los tuyos. |
| Versiones | Desde npm, actualizar es `npm update @joniguerini/lume`; la versión del paquete es la de Lume. Copiado, la carpeta `react/` va en cada línea (`/v/1.9/react/`) y actualizar es cambiar la carpeta. |

## Lo que viene

Los 60 componentes ya están en React.
