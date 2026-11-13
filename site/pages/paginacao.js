import { createPagination } from '../../ds/js/pagination.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, codeBlock, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, stateGrid, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const PAGE = (attrs) => `<button type="button" class="ds-pagination__page" ${attrs}>3</button>`;

export default function renderPaginacao(page) {
  return controlPage(page, {
    lead: L('Divide uma lista longa em páginas e diz onde a pessoa está. Use quando ela precisa voltar a um ponto ou comparar páginas.', 'Splits a long list into pages and shows where the person is. Use it when people need to return to a spot or compare pages.', 'Divide una lista larga en páginas y dice dónde está la persona. Úsala cuando necesite volver a un punto o comparar páginas.'),
    stats: [
      [L('altura', 'height', 'altura'), '36 px'],
      [L('versões', 'versions', 'versiones'), 2],
      [L('páginas ao lado', 'sibling pages', 'páginas al lado'), L('à escolha', 'your choice', 'a elegir')],
      [L('papel', 'role', 'rol'), 'navigation'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Experimente trocar o total e os itens por página.', 'Try changing the total and the items per page.', 'Prueba a cambiar el total y los elementos por página.'), html: playgroundMarkup('pagination', { wide: true }) },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('As partes aparecem conforme a necessidade: poucas páginas não precisam de reticências.', 'Parts appear as needed: a few pages don’t need an ellipsis.', 'Las partes aparecen según la necesidad: pocas páginas no necesitan puntos suspensivos.'),
        html: examples([
          example(L('Poucas páginas', 'A few pages', 'Pocas páginas'), 'total: 42', L('Até sete páginas ficam todas à vista, sem reticências.', 'Up to seven pages stay visible, with no ellipsis.', 'Hasta siete páginas quedan todas a la vista, sin puntos suspensivos.'), '<nav class="ds-pagination" data-demo="few"></nav>'),
          example(L('Muitas páginas', 'Many pages', 'Muchas páginas'), 'total: 2480', L('A primeira e a última ficam sempre à vista.', 'The first and last are always visible.', 'La primera y la última siempre quedan a la vista.'), '<nav class="ds-pagination" data-demo="many"></nav>'),
          example(L('Itens por página', 'Items per page', 'Elementos por página'), 'pageSizes', L('Ao trocar, a pessoa continua vendo o mesmo item.', 'When changed, people keep seeing the same item.', 'Al cambiar, la persona sigue viendo el mismo elemento.'), '<nav class="ds-pagination" data-demo="sizes"></nav>'),
          example(L('Com links', 'With links', 'Con enlaces'), 'hrefFor', L('Cada página é um endereço: dá para compartilhar e abrir em outra aba.', 'Each page is an address: you can share it and open it in another tab.', 'Cada página es una dirección: se puede compartir y abrir en otra pestaña.'), '<nav class="ds-pagination" data-demo="links"></nav>'),
        ]),
      },
      {
        id: 'estados',
        title: L('Estados', 'States', 'Estados'),
        desc: L(`Hover e foco podem ser forçados com ${ic('data-state')}.`, `Hover and focus can be forced with ${ic('data-state')}.`, `Hover y foco se pueden forzar con ${ic('data-state')}.`),
        html: stateGrid([
          [L('Normal', 'Default', 'Normal'), PAGE('')],
          ['Hover', PAGE('data-state="hover"')],
          [L('Foco', 'Focus', 'Foco'), PAGE('data-state="focus"')],
          [L('Atual', 'Current', 'Actual'), PAGE('aria-current="page"')],
          [L('Desativado', 'Disabled', 'Desactivado'), PAGE('disabled')],
        ]),
      },
      {
        id: 'codigo',
        title: L('Código', 'Code', 'Código'),
        desc: L(`${ic('onChange')} avisa a página e o tamanho; quem carrega os dados é você.`, `${ic('onChange')} reports the page and size; you load the data.`, `${ic('onChange')} avisa la página y el tamaño; quien carga los datos eres tú.`),
        html: codeBlock(`import { createPagination } from 'https://lumeui.dev/v/0.26/lume.js';

const pagination = createPagination(document.querySelector('.ds-pagination'), {
  total: 248,
  pageSizes: [10, 25, 50],
  onChange: ({ page, pageSize }) => carregar(page, pageSize),
});

pagination.setTotal(100); // ${L('o total mudou (um filtro, por exemplo)', 'the total changed (a filter, for example)', 'el total cambió (un filtro, por ejemplo)')}`),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('São links ou botões comuns, dentro de uma navegação com nome.', 'They’re ordinary links or buttons, inside a named navigation.', 'Son enlaces o botones comunes, dentro de una navegación con nombre.'),
        html: a11yList([
          [L('Página atual', 'Current page', 'Página actual'), L('Marcada com aria-current="page", além do destaque visual.', 'Marked with aria-current="page", besides the visual highlight.', 'Marcada con aria-current="page", además del resalte visual.')],
          [L('Nomes completos', 'Full names', 'Nombres completos'), L('O leitor de tela ouve “Página 3” e “Próxima página”, não só “3” e uma seta.', 'Screen readers hear “Page 3” and “Next page”, not just “3” and an arrow.', 'El lector de pantalla oye “Página 3” y “Página siguiente”, no solo “3” y una flecha.')],
          [L('Mudança anunciada', 'Announced change', 'Cambio anunciado'), L('O intervalo “11–20 de 248” fica em role="status".', 'The “11–20 of 248” range is in role="status".', 'El intervalo “11–20 de 248” queda en role="status".')],
          [L('Foco no lugar', 'Focus stays put', 'Foco en su lugar'), L('Ao trocar de página, o foco fica na seta ou vai para a página atual.', 'When the page changes, focus stays on the arrow or moves to the current page.', 'Al cambiar de página, el foco queda en la flecha o va a la página actual.'), ['Tab', 'Enter']],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que a paginação consome.', 'Everything pagination consumes.', 'Todo lo que consume la paginación.'),
        html: tokenTable([
          ['color.fg.muted', L('Números e resumo', 'Numbers and summary', 'Números y resumen')],
          ['color.bg.hover', L('Número no hover', 'Number on hover', 'Número en hover')],
          ['color.bg.selected', L('Página atual', 'Current page', 'Página actual')],
          ['color.border.default', L('Contorno da atual', 'Current outline', 'Contorno de la actual')],
          ['color.fg.disabled', L('Seta sem destino', 'Arrow with nowhere to go', 'Flecha sin destino')],
          ['radius.sm', L('Cantos', 'Corners', 'Esquinas')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarla y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: tabelas e resultados', 'Do: tables and results', 'Haz: tablas y resultados'), L('Quando a pessoa procura algo e quer voltar a um ponto da lista.', 'When people look for something and want to return to a spot in the list.', 'Cuando la persona busca algo y quiere volver a un punto de la lista.')],
          ['dont', L('Evite: poucos itens', 'Avoid: a few items', 'Evita: pocos elementos'), L('Uma página só não precisa de paginação. Esconda o componente.', 'A single page doesn’t need pagination. Hide the component.', 'Una sola página no necesita paginación. Oculta el componente.')],
          ['tip', L('Volte ao topo', 'Go back to the top', 'Vuelve arriba'), L('Ao trocar de página, leve a pessoa ao começo da lista.', 'When the page changes, take people to the start of the list.', 'Al cambiar de página, lleva a la persona al inicio de la lista.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'pagination',
    controls: [
      { id: 'total', label: 'Total', value: '248', options: ['42', '248', '2480'].map((v) => ({ value: v, label: v })) },
      { id: 'sizes', label: L('Itens por página', 'Items per page', 'Elementos por página'), value: 'on', options: [{ value: 'on', label: L('Com seletor', 'With selector', 'Con selector') }, { value: 'off', label: L('Sem seletor', 'No selector', 'Sin selector') }] },
      { id: 'siblings', label: L('Ao lado da atual', 'Beside the current', 'Al lado de la actual'), value: '1', options: ['0', '1', '2'].map((v) => ({ value: v, label: v })) },
    ],
    render: () => '<nav class="ds-pagination" data-play></nav>',
    mount: (preview, s) => {
      const p = createPagination(preview.querySelector('[data-play]'), { total: Number(s.total), pageSizes: s.sizes === 'on' ? [10, 25, 50] : undefined, siblings: Number(s.siblings), page: 3 });
      return () => p.destroy();
    },
    code: (s) => `<nav class="ds-pagination"></nav>

<script type="module">
  import { createPagination } from 'https://lumeui.dev/v/0.26/lume.js';
  createPagination(document.querySelector('.ds-pagination'), {
    total: ${s.total},${s.sizes === 'on' ? '\n    pageSizes: [10, 25, 50],' : ''}${s.siblings === '1' ? '' : `\n    siblings: ${s.siblings},`}
    onChange: ({ page, pageSize }) => carregar(page, pageSize),
  });
</script>`,
  });
  const demo = (name) => root.querySelector(`[data-demo="${name}"]`);
  const items = [
    createPagination(demo('few'), { total: 42 }),
    createPagination(demo('many'), { total: 2480, page: 12 }),
    createPagination(demo('sizes'), { total: 248, pageSizes: [10, 25, 50] }),
    createPagination(demo('links'), { total: 90, page: 2, hrefFor: (p) => `#/componentes/paginacao?pagina=${p}` }),
  ];
  // nos exemplos, os links não saem da página
  const onLink = (event) => {
    if (event.target.closest('[data-demo="links"] a')) event.preventDefault();
  };
  root.addEventListener('click', onLink, true);
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    items.forEach((p) => p.destroy());
    root.removeEventListener('click', onLink, true);
    unmountCopy();
    unmountNav();
  };
}
