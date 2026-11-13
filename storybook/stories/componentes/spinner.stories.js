// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/spinner. Não edite: rode npm run stories.
export default {
  title: "Componentes/Feedback/Spinner",
  id: "componentes-spinner",
  parameters: { docs: { description: { component: "Diz que algo está acontecendo numa espera curta. Herda a cor do texto, então funciona em qualquer lugar, inclusive dentro de botões.\n\nDocumentação completa: https://lumeui.dev/#/componentes/spinner" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só CSS, e a cor vem do texto em volta." } } },
  render: () => "<div class=\"cd-playground__preview\" style=\"min-height:0\"><span class=\"ds-spinner\" role=\"status\" aria-label=\"Carregando\"></span></div>",
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Sempre que couber, diga o que está acontecendo." } } },
  render: () => "<div class=\"fc-grid fc-grid--3\"><article class=\"cd-example\">\n    <div class=\"cd-example__preview\"><div class=\"fc-preview\"><p class=\"fc-spinner-text\"><span class=\"ds-spinner ds-spinner--sm\" role=\"status\" aria-label=\"Carregando\"></span>Carregando os pedidos…</p></div></div>\n    <div class=\"cd-example__body\"><p class=\"cd-example__name\">Com texto<code>ds-spinner</code></p><p class=\"cd-example__text\">O melhor para esperas de mais de um segundo.</p></div>\n  </article><article class=\"cd-example\">\n    <div class=\"cd-example__preview\"><div class=\"fc-preview\"><button type=\"button\" class=\"ds-btn ds-btn--primary\" aria-busy=\"true\"><span class=\"ds-spinner ds-spinner--sm\" aria-hidden=\"true\"></span>Salvando</button></div></div>\n    <div class=\"cd-example__body\"><p class=\"cd-example__name\">Dentro do botão<code>aria-busy</code></p><p class=\"cd-example__text\">O botão fica ocupado e não aceita outro clique.</p></div>\n  </article><article class=\"cd-example\">\n    <div class=\"cd-example__preview\"><div class=\"fc-preview\"><div class=\"fc-spinner-row\"><span class=\"ds-spinner ds-spinner--sm\" role=\"status\" aria-label=\"Carregando\"></span><span class=\"ds-spinner\" role=\"status\" aria-label=\"Carregando\"></span><span class=\"ds-spinner ds-spinner--lg\" role=\"status\" aria-label=\"Carregando\"></span></div></div></div>\n    <div class=\"cd-example__body\"><p class=\"cd-example__name\">Tamanhos<code>--sm · --lg</code></p><p class=\"cd-example__text\">16, 20 e 32 px. O maior serve para uma área inteira.</p></div>\n  </article></div>",
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => "<div class=\"usage-grid\">\n    <article class=\"usage-card usage-card--do\"><p class=\"usage-card__head\"><svg class=\"ds-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"></circle><path d=\"m8.5 12 2.5 2.5 4.5-5\"></path></svg>Faça: de 1 a 10 segundos</p><p class=\"usage-card__text\">Salvar, carregar um painel, confirmar um pagamento.</p></article><article class=\"usage-card usage-card--dont\"><p class=\"usage-card__head\"><svg class=\"ds-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"></circle><path d=\"m9 9 6 6M15 9l-6 6\"></path></svg>Evite: espera instantânea</p><p class=\"usage-card__text\">Abaixo de um segundo, nada: um spinner que pisca atrapalha mais que ajuda.</p></article><article class=\"usage-card usage-card--tip\"><p class=\"usage-card__head\"><svg class=\"ds-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\" aria-hidden=\"true\"><path d=\"M13 2.5 4.5 13.5H12l-1 8 8.5-11H12z\"></path></svg>Sabe a forma? Skeleton</p><p class=\"usage-card__text\">Quando já se sabe como o conteúdo vai ficar, o Skeleton parece mais rápido.</p></article>\n  </div>",
};
