import { icon } from '../../ds/icons/icons.js';
import { openDrawer } from '../../ds/js/drawer.js';
import { toast } from '../../ds/js/toast.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const details = () => `<dl class="fc-details">
  <div><dt>${L('Cliente', 'Customer', 'Cliente')}</dt><dd>Ana Lima</dd></div>
  <div><dt>${L('Situação', 'Status', 'Estado')}</dt><dd><span class="ds-badge ds-badge--success"><span class="ds-badge__dot"></span>${L('Aprovado', 'Approved', 'Aprobado')}</span></dd></div>
  <div><dt>${L('Total', 'Total', 'Total')}</dt><dd>R$ 1.280,00</dd></div>
</dl>
<p>${L('A gaveta mostra os detalhes sem tirar a pessoa da lista. Ao fechar, ela volta ao mesmo lugar.', 'The drawer shows the details without taking people away from the list. When it closes, they’re back in the same spot.', 'El panel muestra los detalles sin sacar a la persona de la lista. Al cerrar, vuelve al mismo lugar.')}</p>`;

const openExample = (theme, opts = {}) =>
  openDrawer({
    theme,
    eyebrow: L('Pedido', 'Order', 'Pedido'),
    title: '1042',
    body: details(),
    actions: [{ label: L('Fechar', 'Close', 'Cerrar'), value: 'close' }, { label: L('Aprovar', 'Approve', 'Aprobar'), value: 'approve', variant: 'primary' }],
    ...opts,
  }).then((v) => v === 'approve' && toast(L('Pedido aprovado', 'Order approved', 'Pedido aprobado'), { tone: 'success' }));

export default function renderGaveta(page) {
  return controlPage(page, {
    lead: L('Mostra detalhes ou uma tarefa sem tirar a pessoa da página. Entra pela borda e deixa ver o que está por trás.', 'Shows details or a task without taking people off the page. It enters from the edge and lets you see what’s behind it.', 'Muestra detalles o una tarea sin sacar a la persona de la página. Entra por el borde y deja ver lo que hay detrás.'),
    stats: [
      [L('lados', 'sides', 'lados'), 3],
      [L('larguras', 'widths', 'anchos'), '360 · 480 · 640'],
      [L('base', 'base', 'base'), 'dialog'],
      [L('foco', 'focus', 'foco'), L('preso', 'trapped', 'atrapado')],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Abra e feche com o Esc, clicando fora ou pelos botões.', 'Open it and close with Esc, by clicking outside, or with the buttons.', 'Ábrelo y ciérralo con Esc, haciendo clic fuera o con los botones.'), html: playgroundMarkup('drawer') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('A direita é o padrão. A de baixo funciona bem para escolhas rápidas.', 'Right is the default. Bottom works well for quick choices.', 'La derecha es lo predeterminado. La de abajo funciona bien para elecciones rápidas.'),
        html: examples([
          example(L('À direita', 'Right', 'Derecha'), "side: 'right'", L('Para detalhes de um item de uma lista.', 'For details of an item in a list.', 'Para detalles de un elemento de una lista.'), `<button type="button" class="ds-btn ds-btn--secondary" data-open="right">${icon('panel-left', { size: 18 })}${L('Abrir', 'Open', 'Abrir')}</button>`),
          example(L('À esquerda', 'Left', 'Izquierda'), "side: 'left'", L('Para filtros ou navegação extra.', 'For filters or extra navigation.', 'Para filtros o navegación extra.'), `<button type="button" class="ds-btn ds-btn--secondary" data-open="left">${icon('filter', { size: 18 })}${L('Abrir', 'Open', 'Abrir')}</button>`),
          example(L('Embaixo', 'Bottom', 'Abajo'), "side: 'bottom'", L('Para escolhas rápidas, sobretudo no celular.', 'For quick choices, especially on phones.', 'Para elecciones rápidas, sobre todo en el móvil.'), `<button type="button" class="ds-btn ds-btn--secondary" data-open="bottom">${icon('more-horizontal', { size: 18 })}${L('Abrir', 'Open', 'Abrir')}</button>`),
        ], 3),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`${ic('openDrawer')} devolve uma promessa com o valor da ação escolhida, como o Modal.`, `${ic('openDrawer')} returns a promise with the chosen action’s value, like the Modal.`, `${ic('openDrawer')} devuelve una promesa con el valor de la acción elegida, como el Modal.`),
        html: codeBlock(`import { openDrawer } from 'https://lumeui.dev/v/0.28/lume.js';

const escolha = await openDrawer({
  side: 'right',
  eyebrow: '${L('Pedido', 'Order', 'Pedido')}',
  title: '1042',
  body: detalhes,
  actions: [
    { label: '${L('Fechar', 'Close', 'Cerrar')}', value: 'close' },
    { label: '${L('Aprovar', 'Approve', 'Aprobar')}', value: 'approve', variant: 'primary' },
  ],
});`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L(`É um ${ic('dialog')} nativo, como o Modal: o navegador cuida do foco e deixa o resto da página inerte.`, `It’s a native ${ic('dialog')}, like the Modal: the browser handles focus and makes the rest of the page inert.`, `Es un ${ic('dialog')} nativo, como el Modal: el navegador se ocupa del foco y deja el resto de la página inerte.`),
        html: a11yList([
          [L('Foco preso', 'Trapped focus', 'Foco atrapado'), L('Enquanto está aberta, o Tab só anda dentro dela.', 'While it’s open, Tab only moves inside it.', 'Mientras está abierto, el Tab solo se mueve adentro.'), ['Tab']],
          [L('Fechar', 'Close', 'Cerrar'), L('Esc e o botão de fechar sempre funcionam, e o foco volta a quem abriu.', 'Esc and the close button always work, and focus returns to what opened it.', 'Esc y el botón de cerrar siempre funcionan, y el foco vuelve a quien lo abrió.'), ['Esc']],
          [L('Com nome', 'With a name', 'Con nombre'), L('O título dá nome à gaveta para o leitor de tela.', 'The title names the drawer for screen readers.', 'El título da nombre al panel para el lector de pantalla.')],
          [L('Movimento reduzido', 'Reduced motion', 'Movimiento reducido'), L('Sem animação de entrada para quem pediu menos movimento.', 'No entrance animation for those who asked for less motion.', 'Sin animación de entrada para quien pidió menos movimiento.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Além dos tokens do Modal.', 'On top of the Modal tokens.', 'Además de los tokens del Modal.'),
        html: tokenTable([
          ['color.bg.raised', L('Fundo', 'Background', 'Fondo')],
          ['color.bg.overlay', L('Véu', 'Scrim', 'Velo')],
          ['shadow.2xl', L('Sombra', 'Shadow', 'Sombra')],
          ['radius.xl', L('Cantos', 'Corners', 'Esquinas')],
          ['layout.frame-gap', L('Respiro em volta', 'Space around', 'Espacio alrededor')],
          ['duration.base', L('Entrada', 'Entrance', 'Entrada')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Gaveta ou Modal?', 'Drawer or Modal?', '¿Panel o Modal?'),
        html: usageCards([
          ['do', L('Faça: manter o contexto', 'Do: keep the context', 'Haz: mantener el contexto'), L('Abrir o detalhe de uma linha e ainda ver a lista atrás.', 'Opening a row’s details while still seeing the list behind.', 'Abrir el detalle de una fila y seguir viendo la lista detrás.')],
          ['dont', L('Evite: decisões rápidas', 'Avoid: quick decisions', 'Evita: decisiones rápidas'), L('Para “Excluir este projeto?”, o Modal é direto e centrado.', 'For “Delete this project?”, the Modal is direct and centered.', 'Para “¿Eliminar este proyecto?”, el Modal es directo y centrado.')],
          ['tip', L('Uma de cada vez', 'One at a time', 'Uno a la vez'), L('Gaveta sobre gaveta confunde. Troque o conteúdo em vez de empilhar.', 'A drawer over a drawer is confusing. Swap the content instead of stacking.', 'Panel sobre panel confunde. Cambia el contenido en vez de apilar.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'drawer',
    controls: [
      { id: 'side', label: L('Lado', 'Side', 'Lado'), value: 'right', options: [{ value: 'right', label: L('À direita', 'Right', 'Derecha') }, { value: 'left', label: L('À esquerda', 'Left', 'Izquierda') }, { value: 'bottom', label: L('Embaixo', 'Bottom', 'Abajo') }] },
      { id: 'size', label: L('Largura', 'Width', 'Ancho'), value: 'md', options: [{ value: 'sm', label: '360 px' }, { value: 'md', label: '480 px' }, { value: 'lg', label: '640 px' }] },
    ],
    render: () => `<button type="button" class="ds-btn ds-btn--secondary" data-play>${L('Abrir gaveta', 'Open drawer', 'Abrir panel')}</button>`,
    mount: (preview, s) => {
      const btn = preview.querySelector('[data-play]');
      const onClick = () => openExample(btn.closest('[data-theme]')?.dataset.theme, { side: s.side, size: s.size });
      btn.addEventListener('click', onClick);
      return () => btn.removeEventListener('click', onClick);
    },
    code: (s) => `import { openDrawer } from 'https://lumeui.dev/v/0.28/lume.js';

openDrawer({
  side: '${s.side}',${s.size === 'md' ? '' : `\n  size: '${s.size}',`}
  title: '1042',
  body: detalhes,
});`,
  });
  const onOpen = (event) => {
    const btn = event.target.closest('[data-open]');
    if (btn) openExample(undefined, { side: btn.dataset.open });
  };
  root.addEventListener('click', onOpen);
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    root.removeEventListener('click', onOpen);
    unmountCopy();
    unmountNav();
  };
}
