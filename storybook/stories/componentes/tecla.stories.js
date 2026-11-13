// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/tecla. Não edite: rode npm run stories.
export default {
  title: "Componentes/Conteúdo/Tecla",
  id: "componentes-tecla",
  parameters: { docs: { description: { component: "Mostra uma tecla ou um atalho no meio do texto, em menus e em tooltips. Ajuda a pessoa a aprender o caminho mais rápido.\n\nDocumentação completa: https://lumeui.dev/#/componentes/tecla" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Só CSS, sobre o elemento nativo. É uma etiqueta, não um botão." } } },
  render: () => "<div class=\"cd-playground__preview\" style=\"min-height:0\"><span class=\"fc-keys\"><kbd class=\"ds-kbd\">⌘</kbd><kbd class=\"ds-kbd\">K</kbd></span></div>",
};

export const Variantes = {
  name: "Variantes",
  parameters: { docs: { description: { story: "Uma tecla por etiqueta: um atalho de duas teclas são duas etiquetas." } } },
  render: () => "<div class=\"fc-grid fc-grid--3\"><article class=\"cd-example\">\n    <div class=\"cd-example__preview\"><div class=\"fc-preview\"><span class=\"fc-keys\"><kbd class=\"ds-kbd\">Esc</kbd></span></div></div>\n    <div class=\"cd-example__body\"><p class=\"cd-example__name\">Uma tecla<code>ds-kbd</code></p><p class=\"cd-example__text\">Para ações simples.</p></div>\n  </article><article class=\"cd-example\">\n    <div class=\"cd-example__preview\"><div class=\"fc-preview\"><span class=\"fc-keys\"><kbd class=\"ds-kbd\">⌘</kbd><kbd class=\"ds-kbd\">K</kbd></span></div></div>\n    <div class=\"cd-example__body\"><p class=\"cd-example__name\">Combinação<code>duas etiquetas</code></p><p class=\"cd-example__text\">No Mac é ⌘; no Windows e no Linux, Ctrl.</p></div>\n  </article><article class=\"cd-example\">\n    <div class=\"cd-example__preview\"><div class=\"fc-preview\"><p style=\"font:var(--ds-text-body-sm)\">Tecle <kbd class=\"ds-kbd\">Esc</kbd> para fechar.</p></div></div>\n    <div class=\"cd-example__body\"><p class=\"cd-example__name\">No meio do texto<code>dentro de um parágrafo</code></p><p class=\"cd-example__text\">Fica alinhada com o texto.</p></div>\n  </article></div>",
};

export const Uso = {
  name: "Uso",
  parameters: { docs: { description: { story: "Quando usar e quando preferir outra coisa." } } },
  render: () => "<div class=\"usage-grid\">\n    <article class=\"usage-card usage-card--do\"><p class=\"usage-card__head\"><svg class=\"ds-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"></circle><path d=\"m8.5 12 2.5 2.5 4.5-5\"></path></svg>Faça: ensinar atalhos</p><p class=\"usage-card__text\">Em menus, tooltips e na busca, ao lado da ação.</p></article><article class=\"usage-card usage-card--dont\"><p class=\"usage-card__head\"><svg class=\"ds-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"></circle><path d=\"m9 9 6 6M15 9l-6 6\"></path></svg>Evite: parecer um botão</p><p class=\"usage-card__text\">Clicar numa tecla desenhada não deveria fazer nada. Para ação, use Botão.</p></article><article class=\"usage-card usage-card--tip\"><p class=\"usage-card__head\"><svg class=\"ds-icon\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" focusable=\"false\" aria-hidden=\"true\"><path d=\"M13 2.5 4.5 13.5H12l-1 8 8.5-11H12z\"></path></svg>Nomes curtos</p><p class=\"usage-card__text\">Esc, Enter, Tab. Só escreva por extenso quando não houver abreviação conhecida.</p></article>\n  </div>",
};
