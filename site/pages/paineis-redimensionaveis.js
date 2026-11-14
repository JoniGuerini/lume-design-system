import { createResizable } from '../../ds/js/resizable.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList, escapeHtml } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css', 'site/pages/paineis-redimensionaveis.css'];

/* O conteúdo dos painéis é o próprio Lume: a lista de componentes, a prévia de um botão e o código dele. */
const NAMES = () => [L('Botão', 'Button', 'Botón'), L('Campo', 'Input', 'Campo'), L('Seleção', 'Select', 'Selección'), L('Carrossel', 'Carousel', 'Carrusel'), L('Seletor de cor', 'Color picker', 'Selector de color'), L('Painéis', 'Panels', 'Paneles')];

const list = () => `<div class="rz-pane">
    <p class="rz-label">00 · ${L('Componentes', 'Components', 'Componentes')}</p>
    <ul class="rz-list" role="list">${NAMES().map((n, i) => `<li${i === 0 ? ' class="rz-list__current"' : ''}>${n}</li>`).join('')}</ul>
  </div>`;

const preview = () => `<div class="rz-pane">
    <p class="rz-label">01 · ${L('Prévia', 'Preview', 'Vista previa')}</p>
    <div class="rz-stage">
      <button type="button" class="ds-btn ds-btn--primary">${L('Salvar', 'Save', 'Guardar')}</button>
      <button type="button" class="ds-btn ds-btn--secondary">${L('Cancelar', 'Cancel', 'Cancelar')}</button>
    </div>
  </div>`;

const code = () => `<div class="rz-pane">
    <p class="rz-label">02 · ${L('Código', 'Code', 'Código')}</p>
    <pre class="rz-code">${escapeHtml(`<button class="ds-btn ds-btn--primary">\n  ${L('Salvar', 'Save', 'Guardar')}\n</button>`)}</pre>
  </div>`;

const panel = (content, attrs = '') => `<div class="ds-resizable__panel"${attrs ? ` ${attrs}` : ''}>${content}</div>`;

const frame = (html, cls = '') => `<div class="rz-frame${cls}">${html}</div>`;

/* Grade de estados: divisória montada à mão, sem JS. */
const stateFrame = (state) =>
  frame(
    `<div class="ds-resizable" data-direction="horizontal">
      <div class="ds-resizable__panel" style="flex: 40 1 0px"></div>
      <div class="ds-resizable__handle" role="separator" aria-orientation="vertical" aria-valuenow="40" tabindex="-1"${state ? ` data-state="${state}"` : ''}><span class="ds-resizable__grip" aria-hidden="true"></span></div>
      <div class="ds-resizable__panel" style="flex: 60 1 0px"></div>
    </div>`,
    ' rz-frame--state',
  );

const snippet = ({ vertical = false, grip = false, collapsible = false } = {}) => `<div class="ds-resizable${grip ? ' ds-resizable--grip' : ''}"${vertical ? ' data-direction="vertical"' : ''} aria-label="${L('Editor', 'Editor', 'Editor')}">
  <div class="ds-resizable__panel" data-size="30" data-min="20"${collapsible ? ' data-collapsible' : ''}>…</div>
  <div class="ds-resizable__panel" data-min="30">…</div>
</div>

<script type="module">
  import { createResizable } from 'https://lumeui.dev/v/0.37/lume.js';
  createResizable(document.querySelector('.ds-resizable'), {
    storageKey: 'editor', // ${L('guarda o tamanho no navegador', 'keeps the size in the browser', 'guarda el tamaño en el navegador')}
  });
</script>`;

export default function renderResizable(page) {
  return controlPage(page, {
    lead: L('Divide uma área em partes que a pessoa ajusta arrastando a divisória. Use quando cada um lê de um jeito: uma lista ao lado do conteúdo, a prévia sobre o código.', 'Splits an area into parts people adjust by dragging the divider. Use it when everyone reads differently: a list next to the content, the preview above the code.', 'Divide un área en partes que la persona ajusta arrastrando el divisor. Úsalo cuando cada uno lee a su manera: una lista junto al contenido, la vista previa sobre el código.'),
    stats: [
      [L('direções', 'directions', 'direcciones'), 2],
      [L('linha', 'line', 'línea'), '1 px'],
      [L('área de pegar', 'grab area', 'área para agarrar'), '9 px'],
      [L('teclas', 'keys', 'teclas'), 5],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Arraste a divisória ou use as setas com ela em foco. Duplo clique volta ao tamanho inicial.', 'Drag the divider or use the arrow keys while it has focus. Double-click goes back to the initial size.', 'Arrastra el divisor o usa las flechas con él en foco. Doble clic vuelve al tamaño inicial.'), html: playgroundMarkup('resizable', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L(`Lado a lado ou um sobre o outro, com ${ic('data-direction')}. Um painel pode ter outros dentro.`, `Side by side or one above the other, with ${ic('data-direction')}. A panel can hold others inside.`, `Lado a lado o uno sobre otro, con ${ic('data-direction')}. Un panel puede tener otros dentro.`),
        html: `<div class="rz-variants">${examples(
          [
            example(L('Lado a lado', 'Side by side', 'Lado a lado'), 'ds-resizable', L('A lista com tamanho mínimo; o conteúdo fica com o resto.', 'The list with a minimum size; the content takes the rest.', 'La lista con tamaño mínimo; el contenido se queda con el resto.'), frame(`<div class="ds-resizable" data-demo="horizontal" aria-label="${L('Componentes e prévia', 'Components and preview', 'Componentes y vista previa')}">${panel(list(), 'data-size="32" data-min="22" data-max="50"')}${panel(preview(), 'data-min="35"')}</div>`)),
            example(L('Um sobre o outro', 'Stacked', 'Uno sobre otro'), 'data-direction="vertical"', L('A prévia em cima e o código embaixo.', 'The preview on top and the code below.', 'La vista previa arriba y el código abajo.'), frame(`<div class="ds-resizable" data-direction="vertical" data-demo="vertical" aria-label="${L('Prévia e código', 'Preview and code', 'Vista previa y código')}">${panel(preview(), 'data-min="30"')}${panel(code(), 'data-size="45" data-min="25"')}</div>`)),
            example(L('Aninhado, com alça e fechável', 'Nested, with grip and collapsible', 'Anidado, con asa y plegable'), 'ds-resizable--grip · data-collapsible', L('A lista fecha ao arrastar até o fim ou com Enter na divisória. A alça à vista ajuda quando arrastar não é óbvio.', 'The list closes when dragged all the way or with Enter on the divider. The visible grip helps when dragging isn’t obvious.', 'La lista se cierra al arrastrarla hasta el final o con Enter en el divisor. El asa a la vista ayuda cuando arrastrar no es obvio.'), frame(`<div class="ds-resizable ds-resizable--grip" data-demo="nested" aria-label="${L('Editor', 'Editor', 'Editor')}">${panel(list(), 'data-size="28" data-min="20" data-max="45" data-collapsible')}${panel(`<div class="ds-resizable ds-resizable--grip" data-direction="vertical" data-demo="nested-inner" aria-label="${L('Prévia e código', 'Preview and code', 'Vista previa y código')}">${panel(preview(), 'data-min="30"')}${panel(code(), 'data-size="45" data-min="25"')}</div>`, 'data-min="40"')}</div>`, ' rz-frame--tall')),
          ],
          1,
        )}</div>`,
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L('A linha engrossa com o mouse e fica na cor do indicador enquanto arrasta. O foco do teclado contorna a área de pegar inteira.', 'The line thickens on hover and takes the indicator color while dragging. Keyboard focus outlines the whole grab area.', 'La línea se engrosa con el ratón y toma el color del indicador mientras se arrastra. El foco del teclado contornea toda el área para agarrar.'),
        html: stateGrid([
          [L('Padrão', 'Default', 'Predeterminado'), stateFrame('')],
          [L('Com o mouse', 'Hover', 'Con el ratón'), stateFrame('hover')],
          [L('Com foco', 'Focus', 'Con foco'), stateFrame('focus')],
          [L('Arrastando', 'Dragging', 'Arrastrando'), stateFrame('pressed')],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`Os painéis são seus; o JavaScript põe as divisórias entre eles. Limites em % (${ic('data-min="20"')}) ou em px (${ic('data-min="240px"')}).`, `The panels are yours; JavaScript puts the dividers between them. Limits in % (${ic('data-min="20"')}) or px (${ic('data-min="240px"')}).`, `Los paneles son tuyos; el JavaScript pone los divisores entre ellos. Límites en % (${ic('data-min="20"')}) o en px (${ic('data-min="240px"')}).`),
        html: codeBlock(snippet({ collapsible: true })),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Segue o padrão de divisória que se move da ARIA (window splitter).', 'It follows the ARIA movable separator pattern (window splitter).', 'Sigue el patrón de divisor móvil de ARIA (window splitter).'),
        html: a11yList([
          [L('Nome e papel', 'Name and role', 'Nombre y rol'), L('Cada divisória é um separator com foco, que diz o tamanho do painel de antes em porcentagem.', 'Each divider is a focusable separator that says the size of the panel before it, as a percentage.', 'Cada divisor es un separator con foco, que dice el tamaño del panel anterior en porcentaje.')],
          [L('Teclado', 'Keyboard', 'Teclado'), L('As setas mudam o tamanho (com Shift, mais rápido), Home e End vão aos limites e Enter fecha e abre o painel que pode fechar.', 'Arrow keys change the size (faster with Shift), Home and End go to the limits, and Enter closes and opens a collapsible panel.', 'Las flechas cambian el tamaño (con Shift, más rápido), Home y End van a los límites y Enter cierra y abre el panel plegable.'), ['←', '→', 'Home', 'End', 'Enter']],
          [L('Painel fechado', 'Closed panel', 'Panel cerrado'), L('Fica inert: o Tab não cai no que não está à vista.', 'It becomes inert: Tab never lands on what isn’t in view.', 'Queda inert: el Tab no cae en lo que no está a la vista.')],
          [L('Área de pegar', 'Grab area', 'Área para agarrar'), L('A linha tem 1 px, mas a área de pegar tem 9 px, para o mouse e o dedo acertarem.', 'The line is 1 px, but the grab area is 9 px, so mouse and finger can hit it.', 'La línea tiene 1 px, pero el área para agarrar tiene 9 px, para que el ratón y el dedo acierten.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que os painéis consomem.', 'Everything the panels consume.', 'Todo lo que consumen los paneles.'),
        html: tokenTable([
          ['color.border.default', L('Linha da divisória e contorno da alça', 'Divider line and grip outline', 'Línea del divisor y contorno del asa')],
          ['color.border.strong', L('Linha com o mouse', 'Line on hover', 'Línea con el ratón')],
          ['color.brand.indicator', L('Linha enquanto arrasta', 'Line while dragging', 'Línea mientras se arrastra')],
          ['color.border.focus', L('Foco do teclado', 'Keyboard focus', 'Foco del teclado')],
          ['color.bg.raised', L('Fundo da alça', 'Grip background', 'Fondo del asa')],
          ['radius.sm', L('Cantos do foco', 'Focus corners', 'Esquinas del foco')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: tamanho mínimo sempre', 'Do: always set a minimum', 'Haz: tamaño mínimo siempre'), L('Sem mínimo, um painel vira uma fresta que ninguém consegue usar.', 'Without a minimum, a panel turns into a sliver nobody can use.', 'Sin mínimo, un panel se vuelve una rendija que nadie puede usar.')],
          ['dont', L('Evite: no celular', 'Avoid: on phones', 'Evita: en el móvil'), L('Em tela estreita, empilhe as partes ou use abas: arrastar uma linha fina com o dedo é difícil.', 'On narrow screens, stack the parts or use tabs: dragging a thin line with a finger is hard.', 'En pantallas estrechas, apila las partes o usa pestañas: arrastrar una línea fina con el dedo es difícil.')],
          ['tip', L('Guarde o tamanho', 'Keep the size', 'Guarda el tamaño'), L(`Com ${ic('storageKey')}, a pessoa ajusta uma vez e encontra igual na próxima visita.`, `With ${ic('storageKey')}, people adjust it once and find it the same on the next visit.`, `Con ${ic('storageKey')}, la persona lo ajusta una vez y lo encuentra igual en la próxima visita.`)],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'resizable',
    controls: [
      { id: 'direction', label: L('Direção', 'Direction', 'Dirección'), value: 'horizontal', options: [{ value: 'horizontal', label: L('Lado a lado', 'Side by side', 'Lado a lado') }, { value: 'vertical', label: L('Um sobre o outro', 'Stacked', 'Uno sobre otro') }] },
      { id: 'grip', label: L('Alça à vista', 'Visible grip', 'Asa a la vista'), value: 'off', options: [{ value: 'off', label: L('Não', 'No', 'No') }, { value: 'on', label: L('Sim', 'Yes', 'Sí') }] },
      { id: 'collapsible', label: L('Primeiro fecha', 'First collapses', 'El primero se pliega'), value: 'off', options: [{ value: 'off', label: L('Não', 'No', 'No') }, { value: 'on', label: L('Sim', 'Yes', 'Sí') }] },
    ],
    render: (s) => {
      const vertical = s.direction === 'vertical';
      const first = vertical ? preview() : list();
      const second = vertical ? code() : preview();
      return frame(`<div class="ds-resizable${s.grip === 'on' ? ' ds-resizable--grip' : ''}" data-play${vertical ? ' data-direction="vertical"' : ''} aria-label="${L('Editor', 'Editor', 'Editor')}">${panel(first, `data-size="30" data-min="20"${s.collapsible === 'on' ? ' data-collapsible' : ''}`)}${panel(second, 'data-min="30"')}</div>`, ' rz-frame--play');
    },
    mount: (preview) => {
      const r = createResizable(preview.querySelector('[data-play]'));
      return () => r.destroy();
    },
    code: (s) => snippet({ vertical: s.direction === 'vertical', grip: s.grip === 'on', collapsible: s.collapsible === 'on' }),
  });
  const demos = ['horizontal', 'vertical', 'nested-inner', 'nested'].map((d) => createResizable(root.querySelector(`[data-demo="${d}"]`)));
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    demos.forEach((r) => r.destroy());
    unmountCopy();
    unmountNav();
  };
}
