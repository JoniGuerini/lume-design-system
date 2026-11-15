// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/barra-de-rolagem. Não edite: rode npm run stories.
export default {
  title: "Componentes/Navegação/Barra de rolagem",
  id: "componentes-barra-de-rolagem",
  parameters: { docs: { description: { component: "Uma barra só, sem trilho nem setas, igual em qualquer sistema. Aparece enquanto a pessoa rola e não ocupa espaço no layout.\n\nDocumentação completa: https://lumeui.dev/#/componentes/barra-de-rolagem" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Role a área com a roda, o toque ou o teclado, e tente arrastar a barra. Na horizontal, use Shift + roda." } } },
  render: () => "<div class=\"cd-playground__preview\" style=\"min-height:0\"><div class=\"fc-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"Área de exemplo com rolagem\"><p>Role esta área para ver a barra.</p><p>Ela aparece enquanto você rola.</p><p>Some cerca de um segundo depois de parar.</p><p>Enquanto está visível, dá para arrastá-la.</p><p>Com o ponteiro em cima, ela fica mais grossa e não some.</p><p>Se a página rolar, ela acompanha a área.</p><p>Não há trilho nem setas.</p><p>Ela não ocupa espaço no layout.</p><p>Vale para qualquer área que rola.</p><p>Linha 9</p><p>Linha 10</p><p>Linha 11</p><p>Linha 12</p><p>Linha 13</p><p>Linha 14</p><p>Linha 15</p><p>Linha 16</p><p>Linha 17</p><p>Linha 18</p><p>Linha 19</p><p>Linha 20</p></div></div>",
};

export const Estados = {
  name: "Estados",
  parameters: { docs: { description: { story: "Hover pode ser forçado com data-state; arrastando, com data-active." } } },
  render: () => "<div class=\"fc-states\"><div class=\"fc-states__item\"><div class=\"fc-states__sample\"><div class=\"fc-scroll-state\"><div class=\"ds-scrollbar ds-scrollbar--y\" data-visible=\"\"></div></div></div><span class=\"fc-states__label\">Visível</span></div><div class=\"fc-states__item\"><div class=\"fc-states__sample\"><div class=\"fc-scroll-state\"><div class=\"ds-scrollbar ds-scrollbar--y\" data-visible=\"\" data-state=\"hover\"></div></div></div><span class=\"fc-states__label\">Hover</span></div><div class=\"fc-states__item\"><div class=\"fc-states__sample\"><div class=\"fc-scroll-state\"><div class=\"ds-scrollbar ds-scrollbar--y\" data-visible=\"\" data-active=\"\"></div></div></div><span class=\"fc-states__label\">Arrastando</span></div></div>",
};

export const Codigo = {
  name: "Código",
  parameters: { docs: { description: { story: "Basta ligar uma vez. Áreas que entram depois também recebem a barra." } } },
  render: () => "<div class=\"cd-code\">\n    <pre class=\"ds-code\"><code>import { initScrollbars } from 'https://lumeui.dev/v/1.3/lume.js';\n\ninitScrollbars();\n\n/* Ajustes por área, no CSS da própria área que rola */\n.painel {\n  --ds-scrollbar-start: 64px; /* recuo em cima */\n  --ds-scrollbar-end: 16px;   /* recuo embaixo */\n}\n\n.abas {\n  --ds-scrollbar: none;       /* sem barra */\n}</code></pre>\n    <button type=\"button\" class=\"ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted cd-code__copy\" data-copy-code=\"\" aria-label=\"Copiar código\" data-ds-tooltip=\"Copiar código\"><svg class=\"ds-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\" aria-hidden=\"true\"><rect x=\"8.5\" y=\"8.5\" width=\"12\" height=\"12\" rx=\"2\"></rect><path d=\"M15.5 8.5v-3a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3\"></path></svg></button>\n  </div>",
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => "<div class=\"usage-grid\">\n    <article class=\"usage-card usage-card--do\"><p class=\"usage-card__head\"><svg class=\"ds-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"></circle><path d=\"m8.5 12 2.5 2.5 4.5-5\"></path></svg>Faça: ligue no app inteiro</p><p class=\"usage-card__text\">Uma chamada só, ao iniciar. Assim toda área rola do mesmo jeito.</p></article><article class=\"usage-card usage-card--dont\"><p class=\"usage-card__head\"><svg class=\"ds-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"></circle><path d=\"m9 9 6 6M15 9l-6 6\"></path></svg>Evite: esconder onde ela ajuda</p><p class=\"usage-card__text\">Use <code class=\"ds-inline-code\">--ds-scrollbar: none</code> só em listas curtas, nunca em conteúdo longo.</p></article><article class=\"usage-card usage-card--tip\"><p class=\"usage-card__head\"><svg class=\"ds-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\" aria-hidden=\"true\"><path d=\"M13 2.5 4.5 13.5H12l-1 8 8.5-11H12z\"></path></svg>Cabeçalho fixo?</p><p class=\"usage-card__text\">Dê a altura dele em <code class=\"ds-inline-code\">--ds-scrollbar-start</code>, para a barra não passar por baixo.</p></article>\n  </div>",
};
