import { icon } from '../../ds/icons/icons.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const sep = () => icon('chevron-right', { size: 14 });
const PATH = () => [L('Início', 'Home', 'Inicio'), L('Projetos', 'Projects', 'Proyectos'), 'Lume', L('Configurações', 'Settings', 'Ajustes')];

const crumbs = (list, label = L('Você está em', 'You are here', 'Estás en')) => `<nav class="ds-breadcrumb" aria-label="${label}"><ol>
  ${list.map((c, i) => (i === list.length - 1 ? `<li>${i ? sep() : ''}<span aria-current="page">${c}</span></li>` : `<li>${i ? sep() : ''}<a href="#/componentes/breadcrumb" data-inert>${c}</a></li>`)).join('')}
</ol></nav>`;

export default function renderBreadcrumb(page) {
  return controlPage(page, {
    lead: L('Mostra o caminho até a página atual e deixa voltar a qualquer nível. É o que aparece no topo deste site.', 'Shows the path to the current page and lets you go back to any level. It’s what appears at the top of this site.', 'Muestra el camino hasta la página actual y deja volver a cualquier nivel. Es lo que aparece arriba en este sitio.'),
    stats: [
      ['JavaScript', 0],
      [L('separador', 'separator', 'separador'), '14 px'],
      [L('no celular', 'on phones', 'en el móvil'), L('só o atual', 'current only', 'solo el actual')],
      [L('atributo', 'attribute', 'atributo'), 'aria-current'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Só HTML e CSS. O último item é a página atual, sem link.', 'Just HTML and CSS. The last item is the current page, with no link.', 'Solo HTML y CSS. El último elemento es la página actual, sin enlace.'), html: playgroundMarkup('breadcrumb') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Em telas estreitas, só a página atual aparece, e o título da página já situa a pessoa.', 'On narrow screens, only the current page appears, and the page title already orients people.', 'En pantallas estrechas, solo aparece la página actual, y el título de la página ya sitúa a la persona.'),
        html: examples([
          example(L('Dois níveis', 'Two levels', 'Dos niveles'), 'ol', L('O mínimo que faz sentido.', 'The minimum that makes sense.', 'Lo mínimo que tiene sentido.'), crumbs(PATH().slice(0, 2))),
          example(L('Vários níveis', 'Several levels', 'Varios niveles'), 'ol', L('Cada nível de cima é um link.', 'Each upper level is a link.', 'Cada nivel de arriba es un enlace.'), crumbs(PATH())),
        ]),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Uma navegação com nome e uma lista em ordem.', 'A named navigation and an ordered list.', 'Una navegación con nombre y una lista en orden.'),
        html: a11yList([
          [L('Nome da navegação', 'Navigation name', 'Nombre de la navegación'), L('O aria-label diferencia esta navegação do menu principal.', 'The aria-label sets this navigation apart from the main menu.', 'El aria-label diferencia esta navegación del menú principal.')],
          [L('Página atual', 'Current page', 'Página actual'), L(`O último item leva ${ic('aria-current="page"')} e não é link.`, `The last item has ${ic('aria-current="page"')} and isn’t a link.`, `El último elemento lleva ${ic('aria-current="page"')} y no es enlace.`)],
          [L('Separadores', 'Separators', 'Separadores'), L('As setas são desenho, escondidas do leitor de tela.', 'The arrows are drawings, hidden from screen readers.', 'Las flechas son dibujos, ocultas para el lector de pantalla.')],
          [L('Teclado', 'Keyboard', 'Teclado'), L('Links comuns, em ordem no Tab.', 'Ordinary links, in Tab order.', 'Enlaces comunes, en orden en el Tab.'), ['Tab', 'Enter']],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Tudo o que o breadcrumb consome.', 'Everything the breadcrumb consumes.', 'Todo lo que consume el breadcrumb.'),
        html: tokenTable([
          ['color.fg.subtle', L('Links e separador', 'Links and separator', 'Enlaces y separador')],
          ['color.fg.default', L('Página atual e hover', 'Current page and hover', 'Página actual y hover')],
          ['text.label-md', L('Texto', 'Text', 'Texto')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: conteúdo em níveis', 'Do: content in levels', 'Haz: contenido en niveles'), L('Quando a pessoa pode chegar fundo e querer subir um nível.', 'When people can go deep and want to go up a level.', 'Cuando la persona puede llegar al fondo y querer subir un nivel.')],
          ['dont', L('Evite: fluxos em etapas', 'Avoid: step flows', 'Evita: flujos por etapas'), L('Para um cadastro em partes, o certo é o Stepper.', 'For a sign-up in parts, the Stepper is right.', 'Para un registro por partes, lo correcto es el Stepper.')],
          ['tip', L('Mostra a estrutura', 'It shows the structure', 'Muestra la estructura'), L('É o lugar na hierarquia, não o histórico do que a pessoa visitou.', 'It’s the place in the hierarchy, not a history of what people visited.', 'Es el lugar en la jerarquía, no el historial de lo que la persona visitó.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'breadcrumb',
    controls: [{ id: 'levels', label: L('Níveis', 'Levels', 'Niveles'), value: '3', options: ['2', '3', '4'].map((v) => ({ value: v, label: v })) }],
    render: (s) => crumbs(PATH().slice(0, Number(s.levels))),
    code: (s) => {
      const list = PATH().slice(0, Number(s.levels));
      return `<nav class="ds-breadcrumb" aria-label="${L('Você está em', 'You are here', 'Estás en')}">
  <ol>
${list.map((c, i) => `    <li>${i ? '<ds-icon name="chevron-right" size="14"></ds-icon>' : ''}${i === list.length - 1 ? `<span aria-current="page">${c}</span>` : `<a href="#">${c}</a>`}</li>`).join('\n')}
  </ol>
</nav>`;
    },
  });
  const onClick = (event) => {
    if (event.target.closest('[data-inert]')) event.preventDefault();
  };
  root.addEventListener('click', onClick);
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    root.removeEventListener('click', onClick);
    unmountCopy();
    unmountNav();
  };
}
