# Pestañas

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/abas

Alternan entre vistas del mismo asunto sin salir de la página. Una pestaña activa a la vez, siempre con el panel justo debajo.

En números: apariencias: 2 · tamaños: 2 · modos de activación: 2 · atajos de teclado: 4.

## Ejemplo

```html
<div class="ds-tabs" data-ds-tabs>
  <div class="ds-tabs__list" role="tablist" aria-label="Proyecto">
    <button type="button" class="ds-tabs__tab" role="tab" id="pestana-geral" aria-controls="panel-geral" aria-selected="true">
      Resumen
    </button>
    <button type="button" class="ds-tabs__tab" role="tab" id="pestana-atividade" aria-controls="panel-atividade" aria-selected="false">
      Actividad
      <span class="ds-tabs__count">12</span>
    </button>
    <button type="button" class="ds-tabs__tab" role="tab" id="pestana-arquivos" aria-controls="panel-arquivos" aria-selected="false">
      Archivos
      <span class="ds-tabs__count">3</span>
    </button>
    <button type="button" class="ds-tabs__tab" role="tab" id="pestana-ajustes" aria-controls="panel-ajustes" aria-selected="false">
      Ajustes
    </button>
  </div>
  <div class="ds-tabs__panel" role="tabpanel" id="panel-geral" aria-labelledby="pestana-geral">…</div>
  <div class="ds-tabs__panel" role="tabpanel" id="panel-atividade" aria-labelledby="pestana-atividade" hidden>…</div>
  <div class="ds-tabs__panel" role="tabpanel" id="panel-arquivos" aria-labelledby="pestana-arquivos" hidden>…</div>
  <div class="ds-tabs__panel" role="tabpanel" id="panel-ajustes" aria-labelledby="pestana-ajustes" hidden>…</div>
</div>
```

## Apariencias

La subrayada organiza secciones de contenido; la segmentada cambia la vista de una misma cosa. Las dos vienen en mediano y pequeño.

Subrayada `ds-tabs` — Para secciones de un mismo objeto — perfil, proyecto, configuración. Queda arriba del contenido, alineada a la izquierda.

Segmentada `ds-tabs--segmented` — Para alternar la vista de un mismo conjunto — lista, tablero, agenda. De dos a cuatro opciones cortas.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-tabs ds-tabs--segmented" data-ds-tabs="">
<div class="ds-tabs__list" role="tablist" aria-label="Vista">
<button type="button" class="ds-tabs__tab" role="tab" id="ap-s-tab-lista" aria-controls="ap-s-panel-lista" aria-selected="true">
<ds-icon name="list"></ds-icon><span>Lista</span>
</button><button type="button" class="ds-tabs__tab" role="tab" id="ap-s-tab-quadro" aria-controls="ap-s-panel-quadro" aria-selected="false">
<ds-icon name="layout"></ds-icon><span>Tablero</span>
</button><button type="button" class="ds-tabs__tab" role="tab" id="ap-s-tab-agenda" aria-controls="ap-s-panel-agenda" aria-selected="false">
<ds-icon name="calendar"></ds-icon><span>Agenda</span>
</button>
</div>
<div class="ds-tabs__panel" role="tabpanel" id="ap-s-panel-lista" aria-labelledby="ap-s-tab-lista"><div>
<p>Lista</p>
<p>Elementos en filas, bueno para comparar detalles.</p>
</div></div><div class="ds-tabs__panel" role="tabpanel" id="ap-s-panel-quadro" aria-labelledby="ap-s-tab-quadro" hidden=""><div>
<p>Tablero</p>
<p>Elementos en columnas por estado, bueno para seguir el flujo.</p>
</div></div><div class="ds-tabs__panel" role="tabpanel" id="ap-s-panel-agenda" aria-labelledby="ap-s-tab-agenda" hidden=""><div>
<p>Agenda</p>
<p>Elementos en el calendario, bueno para plazos.</p>
</div></div>
</div>
```

## Estados

Hover y foco se pueden forzar con `data-state`.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-tabs"><div class="ds-tabs__list"><button type="button" class="ds-tabs__tab">Guion</button></div></div>

<div class="ds-tabs"><div class="ds-tabs__list"><button type="button" class="ds-tabs__tab" aria-selected="true">Guion</button></div></div>

<div class="ds-tabs"><div class="ds-tabs__list"><button type="button" class="ds-tabs__tab" disabled="">Guion</button></div></div>
```

## Anatomía

Cuatro partes. Cada pestaña apunta a su panel, y el panel apunta de vuelta.

- 1 — Lista de pestañas — `role="tablist"` con nombre (`aria-label`). Se desplaza en horizontal cuando no cabe.
- 2 — Pestaña activa — Texto en `fg.default` e indicador de 2 px en el color de la marca. Las demás quedan en `fg.subtle`.
- 3 — Conteo opcional — Número corto de lo que hay dentro. Sin color de estado — no es una alerta.
- 4 — Panel — `role="tabpanel"`, enfocable, justo debajo de la lista. Solo aparece el panel activo.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-tabs" data-anatomy="">
<div class="ds-tabs__list">
<span class="ds-tabs__tab" aria-selected="true">Resumen</span>
<span class="ds-tabs__tab">Actividad <span class="ds-tabs__count">12</span></span>
<span class="ds-tabs__tab">Archivos</span>
</div>
<div class="ds-tabs__panel"><div>
<p>Resumen</p>
<p>Resumen del proyecto, responsables y próximos pasos.</p>
</div></div>
</div>
```

## Comportamiento

En la activación automática, las flechas ya cambian el panel. En la manual, las flechas solo mueven el foco — úsala cuando abrir un panel es costoso (búsqueda, carga).

Automática `predeterminado` — Enfoca una pestaña y usa ← →: el panel cambia a la vez.

Manual `data-activation="manual"` — Las flechas mueven el foco; Enter o Espacio activan.

### Teclado

|   |   |
| --- | --- |
| Tab | Entra en la pestaña activa. Tab otra vez va al panel. |
| ← → | Pestaña anterior o siguiente. Al final, vuelve al principio. |
| Home End | Primera o última pestaña. |
| Enter Espacio | Activa la pestaña enfocada — solo en el modo manual. |

### En código

```html
import { mountTabs } from 'https://lumeui.dev/v/0.35/lume.js';

// conecta todas las pestañas [data-ds-tabs] de la página — incluso las que entren después
const unmount = mountTabs(document);

document.addEventListener('ds:tabchange', (event) => {
  console.log(event.detail.id); // id de la pestaña activa
});
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Accesibilidad

El script se encarga de los estados y del teclado. El marcado correcto depende de ti.

- Roles y vínculos — `tablist` → `tab` con `aria-controls`; el `tabpanel` responde con `aria-labelledby`.
- Una sola parada — ← → — Solo la pestaña activa recibe Tab (`tabindex` móvil). Las demás se alcanzan con las flechas.
- Estado anunciado — `aria-selected` dice cuál está activa; el lector de pantalla lee “pestaña, 2 de 4, seleccionada”.
- Panel enfocable — El panel recibe `tabindex="0"` para que quien navega con Tab llegue al contenido, incluso sin enlaces.
- Nombre de la lista — Dale un `aria-label` al tablist (“Proyecto”, “Vista”) para diferenciar conjuntos.
- Las pestañas no son navegación — Para ir a otra página, usa enlaces. Las pestañas cambian contenido dentro de la misma página.

## Tokens usados

Todo lo que consumen las pestañas.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| size.control.compact (`--ds-size-control-compact`) | Altura de la pestaña (mediano) | 36 px | 36 px |
| size.control.sm (`--ds-size-control-sm`) | Altura de la pestaña (pequeño) | 32 px | 32 px |
| text.label-md (`--ds-text-label-md`) | Etiqueta | 14/20 · medium | 14/20 · medium |
| color.fg.subtle (`--ds-color-fg-subtle`) | Pestaña inactiva | #5C6C7F | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Pestaña activa | #2B3847 | #F3EDE5 |
| color.brand.solid (`--ds-color-brand-solid`) | Indicador de la pestaña activa | #3E5166 | #C0CAD6 |
| color.border.subtle (`--ds-color-border-subtle`) | Línea base | #3E516624 | #FFFFFF0F |
| color.bg.hover (`--ds-color-bg-hover`) | Hover | #3E51660D | #FFFFFF0D |
| color.bg.sunken (`--ds-color-bg-sunken`) | Riel de la segmentada | #E8EDF3 | #151412 |
| color.bg.muted (`--ds-color-bg-muted`) | Pestaña activa de la segmentada | #DAE0E8 | #3D3B38 |
| color.bg.selected (`--ds-color-bg-selected`) | Fondo del conteo | #3E516612 | #C0CAD61A |
| radius.full (`--ds-radius-full`) | Segmentada y conteo | 9999 px | 9999 px |
| duration.fast (`--ds-duration-fast`) | Transición de color | 120ms | 120ms |

## Uso

Tres reglas para pestañas que no confunden.

- **Haz:** etiquetas cortas y paralelas. Sustantivos de una o dos palabras, de dos a seis pestañas.
- **Evita:** pestañas como etapas. Las pestañas no tienen orden. Para un flujo por pasos, usa etapas con “Continuar”.
- **Consejo:** Guarda la pestaña activa. Si tiene sentido compartir o volver a la misma vista, guarda la pestaña en la dirección o en la sesión.
