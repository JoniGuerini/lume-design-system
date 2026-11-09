import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const loading = () => L('Carregando', 'Loading', 'Cargando');
const saving = () => L('Salvando', 'Saving', 'Guardando');
const spin = (cls = '') => `<span class="ds-spinner${cls ? ` ${cls}` : ''}" role="status" aria-label="${loading()}"></span>`;

export default function renderSpinner(page) {
  return controlPage(page, {
    lead: L('Diz que algo está acontecendo numa espera curta. Herda a cor do texto, então funciona em qualquer lugar, inclusive dentro de botões.', 'Says something is happening during a short wait. It inherits the text color, so it works anywhere, including inside buttons.', 'Dice que algo está pasando en una espera corta. Hereda el color del texto, así que funciona en cualquier lugar, incluso dentro de botones.'),
    stats: [
      ['JavaScript', 0],
      [L('tamanhos', 'sizes', 'tamaños'), '16 · 20 · 32'],
      [L('volta', 'turn', 'vuelta'), '0,8 s'],
      [L('papel ARIA', 'ARIA role', 'rol ARIA'), 'status'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Só CSS, e a cor vem do texto em volta.', 'Just CSS, with the color coming from the surrounding text.', 'Solo CSS, y el color viene del texto alrededor.'), html: playgroundMarkup('spinner') },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Sempre que couber, diga o que está acontecendo.', 'Whenever it fits, say what’s happening.', 'Siempre que quepa, di lo que está pasando.'),
        html: examples([
          example(L('Com texto', 'With text', 'Con texto'), 'ds-spinner', L('O melhor para esperas de mais de um segundo.', 'Best for waits over a second.', 'Lo mejor para esperas de más de un segundo.'), `<p class="fc-spinner-text">${spin('ds-spinner--sm')}${L('Carregando os pedidos…', 'Loading the orders…', 'Cargando los pedidos…')}</p>`),
          example(L('Dentro do botão', 'Inside a button', 'Dentro del botón'), 'aria-busy', L('O botão fica ocupado e não aceita outro clique.', 'The button stays busy and takes no further clicks.', 'El botón queda ocupado y no acepta otro clic.'), `<button type="button" class="ds-btn ds-btn--primary" aria-busy="true"><span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>${saving()}</button>`),
          example(L('Tamanhos', 'Sizes', 'Tamaños'), '--sm · --lg', L('16, 20 e 32 px. O maior serve para uma área inteira.', '16, 20, and 32 px. The largest suits a whole area.', '16, 20 y 32 px. El mayor sirve para un área entera.'), `<div class="fc-spinner-row">${spin('ds-spinner--sm')}${spin()}${spin('ds-spinner--lg')}</div>`),
        ], 3),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('Um desenho que gira não diz nada sozinho.', 'A spinning drawing says nothing on its own.', 'Un dibujo que gira no dice nada por sí solo.'),
        html: a11yList([
          [L('Com nome', 'With a name', 'Con nombre'), L(`Sozinho, leva ${ic('role="status"')} e ${ic('aria-label')}. Ao lado de um texto, use ${ic('aria-hidden')}.`, `Alone, it takes ${ic('role="status"')} and ${ic('aria-label')}. Next to text, use ${ic('aria-hidden')}.`, `Solo, lleva ${ic('role="status"')} y ${ic('aria-label')}. Junto a un texto, usa ${ic('aria-hidden')}.`)],
          [L('Botão ocupado', 'Busy button', 'Botón ocupado'), L(`${ic('aria-busy="true"')} impede cliques repetidos e o texto diz o que acontece: “Salvando”.`, `${ic('aria-busy="true"')} prevents repeat clicks, and the text says what’s happening: “Saving”.`, `${ic('aria-busy="true"')} impide clics repetidos y el texto dice qué pasa: “Guardando”.`)],
          [L('Movimento reduzido', 'Reduced motion', 'Movimiento reducido'), L('O anel para de girar. Por isso, o texto importa ainda mais.', 'The ring stops spinning. That’s why the text matters even more.', 'El anillo deja de girar. Por eso, el texto importa aún más.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('A cor vem do texto em volta; o resto é forma.', 'The color comes from the surrounding text; the rest is shape.', 'El color viene del texto alrededor; el resto es forma.'),
        html: tokenTable([
          ['color.fg.default', L('Cor mais comum', 'Most common color', 'Color más común')],
          ['color.brand.on-solid', L('No botão primário', 'On the primary button', 'En el botón primario')],
          ['radius.full', L('Anel', 'Ring', 'Anillo')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Quando usar e quando preferir outra coisa.', 'When to use it and when to prefer something else.', 'Cuándo usarlo y cuándo preferir otra cosa.'),
        html: usageCards([
          ['do', L('Faça: de 1 a 10 segundos', 'Do: 1 to 10 seconds', 'Haz: de 1 a 10 segundos'), L('Salvar, carregar um painel, confirmar um pagamento.', 'Saving, loading a panel, confirming a payment.', 'Guardar, cargar un panel, confirmar un pago.')],
          ['dont', L('Evite: espera instantânea', 'Avoid: instant waits', 'Evita: esperas instantáneas'), L('Abaixo de um segundo, nada: um spinner que pisca atrapalha mais que ajuda.', 'Under a second, nothing: a flashing spinner hurts more than it helps.', 'Por debajo de un segundo, nada: un spinner que parpadea estorba más que ayuda.')],
          ['tip', L('Sabe a forma? Skeleton', 'Know the shape? Skeleton', '¿Conoces la forma? Skeleton'), L('Quando já se sabe como o conteúdo vai ficar, o Skeleton parece mais rápido.', 'When you know how the content will look, the Skeleton feels faster.', 'Cuando ya se sabe cómo quedará el contenido, el Skeleton parece más rápido.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'spinner',
    controls: [
      { id: 'size', label: L('Tamanho', 'Size', 'Tamaño'), value: 'md', options: [{ value: 'sm', label: '16 px' }, { value: 'md', label: '20 px' }, { value: 'lg', label: '32 px' }] },
      { id: 'where', label: L('Onde', 'Where', 'Dónde'), value: 'alone', options: [{ value: 'alone', label: L('Sozinho', 'Alone', 'Solo') }, { value: 'button', label: L('No botão', 'In a button', 'En el botón') }] },
    ],
    render: (s) => (s.where === 'button'
      ? `<button type="button" class="ds-btn ds-btn--primary" aria-busy="true"><span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>${saving()}</button>`
      : spin(s.size === 'md' ? '' : `ds-spinner--${s.size}`)),
    code: (s) => (s.where === 'button'
      ? `<button type="button" class="ds-btn ds-btn--primary" aria-busy="true">\n  <span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>\n  ${saving()}\n</button>`
      : `<span class="ds-spinner${s.size === 'md' ? '' : ` ds-spinner--${s.size}`}" role="status" aria-label="${loading()}"></span>`),
  });
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    unmountCopy();
    unmountNav();
  };
}
