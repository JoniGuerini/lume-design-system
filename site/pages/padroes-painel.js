import { icon } from '../../ds/icons/icons.js';
import { createLineChart, createBarChart, statTileHtml } from '../../ds/js/charts.js';
import { createSegmented } from '../../ds/js/segmented.js';
import { dateFormat } from '../../ds/js/i18n.js';
import { seeded } from '../chart-data.js';
import { mountDocNav } from '../doc-nav.js';
import { mountCodeCopy, codeBlock, a11yList, escapeHtml } from '../component-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/padroes-comum.css', 'site/pages/padroes-painel.css'];

/* ───────── Dados de exemplo: o uso da documentação do Lume (números inventados, fixos) ───────── */

const ic = (s) => `<code class="ds-inline-code">${s}</code>`;
const END = new Date(2026, 10, 14);

const DAILY = (() => {
  const rnd = seeded(15);
  return Array.from({ length: 180 }, (_, i) => {
    const date = new Date(END);
    date.setDate(END.getDate() - (179 - i));
    const dow = date.getDay();
    const week = dow === 0 || dow === 6 ? 0.55 : 1;
    const visits = Math.round((620 + i * 3.1) * week * (0.88 + rnd() * 0.24));
    return { date, visits, people: Math.round(visits * (0.4 + rnd() * 0.05)), copies: Math.round(visits * (0.1 + rnd() * 0.03)), misses: Math.round(visits * (0.012 - i * 0.00003) * (0.7 + rnd() * 0.6)) };
  });
})();

const RANGES = () => [
  { value: '7', days: 7, bucket: 'day', label: L('7 dias', '7 days', '7 días'), prev: L('vs. 7 dias anteriores', 'vs. previous 7 days', 'vs. 7 días anteriores') },
  { value: '30', days: 30, bucket: 'day', label: L('30 dias', '30 days', '30 días'), prev: L('vs. 30 dias anteriores', 'vs. previous 30 days', 'vs. 30 días anteriores') },
  { value: '90', days: 84, bucket: 'week', label: L('90 dias', '90 days', '90 días'), prev: L('vs. 90 dias anteriores', 'vs. previous 90 days', 'vs. 90 días anteriores') },
];

const PAGES = () => [
  [L('Botão', 'Button', 'Botón'), 0.14],
  [L('Cores', 'Colors', 'Colores'), 0.11],
  [L('Tabela', 'Table', 'Tabla'), 0.08],
  [L('Modal', 'Modal', 'Modal'), 0.065],
  [L('Ícones', 'Icons', 'Íconos'), 0.06],
];
const SOURCES = () => [
  [L('Direto', 'Direct', 'Directo'), 0.41],
  [L('Busca', 'Search', 'Búsqueda'), 0.29],
  ['LinkedIn', 0.18],
  [L('Outros sites', 'Other sites', 'Otros sitios'), 0.12],
];

const sum = (list, key) => list.reduce((a, d) => a + d[key], 0);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function slice(rangeId) {
  const range = RANGES().find((r) => r.value === rangeId);
  const cur = DAILY.slice(-range.days);
  const prev = DAILY.slice(-range.days * 2, -range.days);
  const size = range.bucket === 'week' ? 7 : 1;
  const group = (days) => Array.from({ length: Math.ceil(days.length / size) }, (_, i) => days.slice(i * size, i * size + size));
  const gc = group(cur);
  const gp = group(prev);
  const short = dateFormat({ day: '2-digit', month: '2-digit' });
  const long = dateFormat({ weekday: 'short', day: 'numeric', month: 'short' });
  const weekLong = dateFormat({ day: 'numeric', month: 'short' });
  const totals = (days) => ({ visits: sum(days, 'visits'), people: sum(days, 'people'), copies: sum(days, 'copies'), misses: sum(days, 'misses') });
  return {
    range,
    categories: gc.map((g) => short.format(g[0].date)),
    tooltipLabels: gc.map((g) => (size === 7 ? L(`Semana de ${weekLong.format(g[0].date)}`, `Week of ${weekLong.format(g[0].date)}`, `Semana del ${weekLong.format(g[0].date)}`) : cap(long.format(g[0].date)))),
    visits: gc.map((g) => sum(g, 'visits')),
    previous: gc.map((_, i) => (gp[i] ? sum(gp[i], 'visits') : null)),
    trend: (key) => gc.map((g) => sum(g, key)),
    now: totals(cur),
    before: totals(prev),
  };
}

const change = (a, b) => a / b - 1;

function kpis(d) {
  return [
    statTileHtml({ label: L('Visitas', 'Visits', 'Visitas'), value: d.now.visits, format: 'integer', delta: change(d.now.visits, d.before.visits), deltaLabel: d.range.prev, trend: d.trend('visits') }),
    statTileHtml({ label: L('Pessoas', 'People', 'Personas'), value: d.now.people, format: 'integer', delta: change(d.now.people, d.before.people), deltaLabel: d.range.prev, trend: d.trend('people') }),
    statTileHtml({ label: L('Código copiado', 'Code copied', 'Código copiado'), value: d.now.copies, format: 'integer', delta: change(d.now.copies, d.before.copies), deltaLabel: d.range.prev, trend: d.trend('copies') }),
    statTileHtml({ label: L('Buscas sem resultado', 'Searches with no results', 'Búsquedas sin resultado'), value: d.now.misses, format: 'integer', delta: change(d.now.misses, d.before.misses), deltaLabel: d.range.prev, good: 'down', trend: d.trend('misses') }),
  ].join('');
}

const share = (list, total) => {
  const rows = list.map(([name, s]) => [name, Math.round(total * s)]);
  return { categories: rows.map((r) => r[0]), series: [{ name: L('Visitas', 'Visits', 'Visitas'), values: rows.map((r) => r[1]) }] };
};

const ATTENTION = () => [
  ['search-x', 'warning', L('“datepicker” foi buscado 38 vezes sem resultado', '“datepicker” was searched 38 times with no results', '“datepicker” se buscó 38 veces sin resultado'), L('A página se chama Seletor de data. Vale um sinônimo na busca.', 'The page is called Date picker in Portuguese. A search synonym would help.', 'La página se llama Selector de fecha. Vale un sinónimo en la búsqueda.'), L('Ver buscas', 'See searches', 'Ver búsquedas')],
  ['trending-down', 'warning', L('Tokens perdeu 24% das visitas', 'Tokens lost 24% of its visits', 'Tokens perdió el 24% de las visitas'), L('Desde que saiu do menu de Recursos.', 'Since it left the Resources menu.', 'Desde que salió del menú de Recursos.'), L('Abrir a página', 'Open the page', 'Abrir la página')],
];

const timeFmt = () => dateFormat({ hour: '2-digit', minute: '2-digit' });

function screen(d) {
  return `<div class="pt-stage" data-pi-stage>
    <div class="pt-screen pi-screen">
      <header class="pt-screen__head">
        <div>
          <h3 class="pt-screen__title">${L('Como a documentação está sendo usada', 'How the docs are being used', 'Cómo se está usando la documentación')}</h3>
          <p class="pt-screen__desc pi-fresh"><span data-pi-fresh>${L(`Atualizado às ${timeFmt().format(new Date(2026, 10, 15, 9, 40))}`, `Updated at ${timeFmt().format(new Date(2026, 10, 15, 9, 40))}`, `Actualizado a las ${timeFmt().format(new Date(2026, 10, 15, 9, 40))}`)}</span>
            <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-pi-refresh aria-label="${L('Atualizar os dados', 'Refresh the data', 'Actualizar los datos')}" data-ds-tooltip="${L('Atualizar', 'Refresh', 'Actualizar')}">${icon('refresh', { size: 14 })}</button>
          </p>
        </div>
        <div class="ds-segmented" role="radiogroup" aria-label="${L('Período', 'Period', 'Período')}" data-pi-range>
          ${RANGES().map((r) => `<button type="button" class="ds-segmented__item" role="radio" data-value="${r.value}" aria-checked="${r.value === d.range.value}">${r.label}</button>`).join('')}
        </div>
      </header>

      <div class="pi-kpis" data-pi-kpis aria-live="polite">${kpis(d)}</div>

      <div class="pi-row pi-row--main">
        <div data-pi-line></div>
        <section class="pi-attention" aria-labelledby="pi-attention-title">
          <h4 class="pi-attention__title" id="pi-attention-title">${L('Precisa de atenção', 'Needs attention', 'Necesita atención')}</h4>
          <ul class="pi-attention__list" role="list">
            ${ATTENTION().map(([glyph, tone, title, text, action]) => `<li class="pi-attention__item">
              <span class="pi-attention__icon pi-attention__icon--${tone}">${icon(glyph, { size: 16 })}</span>
              <div>
                <p class="pi-attention__name">${title}</p>
                <p class="pi-attention__text">${text}</p>
                <a class="ds-link ds-link--standalone pi-attention__link" href="#/padroes/listagem" data-pi-inert>${action}<span data-arrow>${icon('arrow-right', { size: 14 })}</span></a>
              </div>
            </li>`).join('')}
          </ul>
        </section>
      </div>

      <div class="pi-row">
        <div data-pi-pages></div>
        <div data-pi-sources></div>
      </div>
    </div>
  </div>`;
}

/* ───────── Textos da página ───────── */

const PARTS = () => [
  [L('Cabeçalho', 'Header', 'Encabezado'), L('A pergunta que o painel responde, de quando é o dado e o período, que vale para tudo abaixo.', 'The question the dashboard answers, how fresh the data is, and the period, which applies to everything below.', 'La pregunta que el panel responde, de cuándo es el dato y el período, que vale para todo lo de abajo.')],
  [L('Indicadores', 'Indicators', 'Indicadores'), L('Até quatro números, cada um com a variação e a tendência. Quem cai é bom diz isso (buscas sem resultado).', 'Up to four numbers, each with the change and the trend. Ones where down is good say so (searches with no results).', 'Hasta cuatro números, cada uno con la variación y la tendencia. Los que mejoran al bajar lo dicen (búsquedas sin resultado).')],
  [L('Gráfico principal', 'Main chart', 'Gráfico principal'), L('O maior da tela, respondendo à pergunta do título. O período anterior em cinza, para comparar.', 'The largest on the screen, answering the title’s question. The previous period in gray, to compare.', 'El más grande de la pantalla, respondiendo a la pregunta del título. El período anterior en gris, para comparar.')],
  [L('Precisa de atenção', 'Needs attention', 'Necesita atención'), L('O que pede uma ação, já escrito em frases, com o link para agir. Ninguém precisa garimpar o gráfico.', 'What calls for action, already written in sentences, with the link to act. Nobody needs to dig through the chart.', 'Lo que pide una acción, ya escrito en frases, con el enlace para actuar. Nadie necesita escarbar en el gráfico.')],
  [L('Detalhes', 'Details', 'Detalles'), L('Embaixo, os recortes que explicam o número: de onde vêm, o que mais se vê.', 'Below, the breakdowns that explain the number: where people come from, what they view most.', 'Abajo, los cortes que explican el número: de dónde vienen, qué se ve más.')],
];

const RULES = () => [
  ['help-circle', L('Uma pergunta por painel', 'One question per dashboard', 'Una pregunta por panel'), L('O título é a pergunta (“Como a documentação está sendo usada”), não “Dashboard”. O que não ajuda a responder vai para outro painel.', 'The title is the question (“How the docs are being used”), not “Dashboard”. What doesn’t help answer it goes to another dashboard.', 'El título es la pregunta (“Cómo se está usando la documentación”), no “Dashboard”. Lo que no ayuda a responderla va a otro panel.')],
  ['hash', L('Número sempre comparado', 'Numbers always compared', 'Número siempre comparado'), L('“4.812 visitas” não diz se é bom. Com “+12% vs. 30 dias anteriores”, diz. No máximo quatro indicadores.', '“4,812 visits” doesn’t say if it’s good. With “+12% vs. previous 30 days”, it does. Four indicators at most.', '“4.812 visitas” no dice si es bueno. Con “+12% vs. 30 días anteriores”, sí. Cuatro indicadores como máximo.')],
  ['calendar', L('Um período para tudo', 'One period for everything', 'Un período para todo'), L('O seletor do topo muda todos os cartões juntos. Período por cartão faz a pessoa comparar coisas que não se comparam.', 'The selector at the top changes every card together. A period per card makes people compare things that don’t compare.', 'El selector de arriba cambia todas las tarjetas juntas. Un período por tarjeta hace comparar cosas que no se comparan.')],
  ['alert-triangle', L('O que pede ação vem escrito', 'What calls for action comes written', 'Lo que pide acción viene escrito'), L('Uma queda importante não fica escondida numa curva. Vira uma frase em “Precisa de atenção”, com o link.', 'An important drop doesn’t hide in a curve. It becomes a sentence in “Needs attention”, with the link.', 'Una caída importante no queda escondida en una curva. Se vuelve una frase en “Necesita atención”, con el enlace.')],
  ['clock', L('Diga de quando é o dado', 'Say how fresh the data is', 'Di de cuándo es el dato'), L('“Atualizado às 09:40” e um botão para atualizar. Número velho tratado como novo leva a decisão errada.', '“Updated at 9:40” and a button to refresh. Old numbers treated as new lead to wrong decisions.', '“Actualizado a las 09:40” y un botón para actualizar. Un número viejo tratado como nuevo lleva a decisiones equivocadas.')],
  ['arrow-right', L('Todo número leva a algum lugar', 'Every number leads somewhere', 'Todo número lleva a algún lugar'), L('Do painel para a lista que explica o número. O painel resume; a decisão acontece na lista.', 'From the dashboard to the list that explains the number. The dashboard summarizes; the decision happens in the list.', 'Del panel a la lista que explica el número. El panel resume; la decisión ocurre en la lista.')],
];

const WRITING = () => [
  [L('Título', 'Title', 'Título'), L('Dashboard', 'Dashboard', 'Dashboard'), L('Como a documentação está sendo usada', 'How the docs are being used', 'Cómo se está usando la documentación')],
  [L('Variação', 'Change', 'Variación'), L('+12,4%', '+12.4%', '+12,4%'), L('+12,4% vs. 30 dias anteriores', '+12.4% vs. previous 30 days', '+12,4% vs. 30 días anteriores')],
  [L('Atualização', 'Freshness', 'Actualización'), L('Last sync: 2026-11-15T12:40:00Z', 'Last sync: 2026-11-15T12:40:00Z', 'Last sync: 2026-11-15T12:40:00Z'), L('Atualizado às 09:40', 'Updated at 9:40 AM', 'Actualizado a las 09:40')],
  [L('Sem dados', 'No data', 'Sin datos'), L('No data', 'No data', 'No data'), L('Nenhuma visita nesse período. Escolha um período maior.', 'No visits in this period. Choose a longer period.', 'Ninguna visita en ese período. Elige un período más largo.')],
];

const htmlCode = () => `<header>
  <h1>${L('Como a documentação está sendo usada', 'How the docs are being used', 'Cómo se está usando la documentación')}</h1>
  <p>${L('Atualizado às 09:40', 'Updated at 9:40 AM', 'Actualizado a las 09:40')}</p>
  <div class="ds-segmented" role="radiogroup" aria-label="${L('Período', 'Period', 'Período')}">…</div>
</header>

<div id="${L('indicadores', 'indicators', 'indicadores')}" aria-live="polite"></div>
<div id="${L('visitas', 'visits', 'visitas')}"></div>

<section aria-labelledby="${L('atencao', 'attention', 'atencion')}">
  <h2 id="${L('atencao', 'attention', 'atencion')}">${L('Precisa de atenção', 'Needs attention', 'Necesita atención')}</h2>
  <ul>…</ul>
</section>`;

const jsCode = () => `import { createLineChart, createSegmented, statTileHtml } from 'https://lumeui.dev/v/1.12/lume.js';

const ${L('grafico', 'chart', 'grafico')} = createLineChart(document.querySelector('#${L('visitas', 'visits', 'visitas')}'), {
  card: true, title: '${L('Visitas', 'Visits', 'Visitas')}', categories, tooltipLabels,
  series: [
    { name: '${L('Este período', 'This period', 'Este período')}', values: ${L('atual', 'current', 'actual')} },
    { name: '${L('Período anterior', 'Previous period', 'Período anterior')}', values: ${L('anterior', 'previous', 'anterior')}, muted: true },
  ],
});

createSegmented(document.querySelector('[aria-label="${L('Período', 'Period', 'Período')}"]'), {
  async onChange(${L('periodo', 'period', 'periodo')}) {
    ${L('grafico', 'chart', 'grafico')}.setLoading(true);                 // ${L('um período para todos os cartões', 'one period for every card', 'un período para todas las tarjetas')}
    const d = await ${L('buscar', 'fetch', 'buscar')}(${L('periodo', 'period', 'periodo')});
    ${L('indicadores', 'indicators', 'indicadores')}.innerHTML = statTileHtml({ label: '${L('Visitas', 'Visits', 'Visitas')}', value: d.${L('visitas', 'visits', 'visitas')}, delta: d.${L('variacao', 'change', 'variacion')}, deltaLabel: '${L('vs. 30 dias anteriores', 'vs. previous 30 days', 'vs. 30 días anteriores')}' });
    ${L('grafico', 'chart', 'grafico')}.update({ categories: d.${L('dias', 'days', 'dias')}, series: d.series });
    ${L('grafico', 'chart', 'grafico')}.setLoading(false);
  },
});`;

/* ───────── Página ───────── */

const section = (id, title, desc, body) => `
  <section class="doc-section" id="${id}" aria-labelledby="${id}-title">
    <header class="doc-section__header">
      <div>
        <h2 class="doc-section__title" id="${id}-title">${title}</h2>
        <p class="doc-section__desc">${desc}</p>
      </div>
    </header>
    ${body}
  </section>`;

const NAV = () => [
  ['pi-exemplo', L('Exemplo', 'Example', 'Ejemplo')],
  ['pi-anatomia', L('Anatomia', 'Anatomy', 'Anatomía')],
  ['pi-regras', L('Regras', 'Rules', 'Reglas')],
  ['pi-mensagens', L('Mensagens', 'Messages', 'Mensajes')],
  ['pi-acessibilidade', L('Acessibilidade', 'Accessibility', 'Accesibilidad')],
  ['pi-codigo', L('Código', 'Code', 'Código')],
  ['pi-uso', L('Uso', 'Usage', 'Uso')],
];

export default function renderPainel(page) {
  const d = slice('30');
  return `
  <div class="page doc pi-page">
    <header class="doc-header">
      <div>
        <p class="doc-header__eyebrow">${page.group}</p>
        <h1 class="doc-header__title">${page.label}</h1>
        <p class="doc-header__lead">${L('Uma tela para responder a uma pergunta de relance: números comparados, um gráfico principal e, escrito, o que pede atenção. Os gráficos são os do Lume; aqui o assunto é como montá-los juntos.', 'A screen to answer one question at a glance: compared numbers, one main chart, and, in words, what needs attention. The charts are Lume’s; here the subject is how to put them together.', 'Una pantalla para responder a una pregunta de un vistazo: números comparados, un gráfico principal y, por escrito, lo que necesita atención. Los gráficos son los de Lume; aquí el tema es cómo juntarlos.')}</p>
      </div>
      <dl class="doc-stats">
        <div class="doc-stat"><dt class="doc-stat__label">${L('pergunta', 'question', 'pregunta')}</dt><dd class="doc-stat__value">1</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('indicadores, no máximo', 'indicators, at most', 'indicadores, como máximo')}</dt><dd class="doc-stat__value">4</dd></div>
        <div class="doc-stat"><dt class="doc-stat__label">${L('período para tudo', 'period for everything', 'período para todo')}</dt><dd class="doc-stat__value">1</dd></div>
      </dl>
    </header>

    <nav class="doc-nav" aria-label="${L('Nesta página', 'On this page', 'En esta página')}">
      ${NAV().map(([id, label]) => `<button type="button" class="doc-nav__link" data-target="${id}">${label}</button>`).join('')}
    </nav>

    ${section(
      'pi-exemplo',
      L('Exemplo ao vivo', 'Live example', 'Ejemplo en vivo'),
      L(`O uso da documentação do Lume, com números de exemplo. Para escolher o gráfico de cada dado, veja <a class="ds-link" href="#/graficos/visao-geral">Gráficos › Visão geral</a>.`, `Usage of the Lume docs, with example numbers. To choose the chart for each kind of data, see <a class="ds-link" href="#/graficos/visao-geral">Charts › Overview</a>.`, `El uso de la documentación de Lume, con números de ejemplo. Para elegir el gráfico de cada dato, mira <a class="ds-link" href="#/graficos/visao-geral">Gráficos › Visión general</a>.`),
      `${screen(d)}
      <ul class="pt-tries" role="list">
        <li>${icon('calendar', { size: 16 })}${L('Troque o período: indicadores e gráficos mudam juntos, e cada subtítulo repete o período.', 'Switch the period: indicators and charts change together, and each subtitle repeats the period.', 'Cambia el período: indicadores y gráficos cambian juntos, y cada subtítulo repite el período.')}</li>
        <li>${icon('trending-down', { size: 16 })}${L('Buscas sem resultado caindo aparece em verde: ali, cair é bom.', 'Searches with no results going down shows in green: there, down is good.', 'Búsquedas sin resultado bajando aparece en verde: ahí, bajar es bueno.')}</li>
        <li>${icon('refresh', { size: 16 })}${L('Atualize: o horário muda, e os cartões avisam que estão carregando.', 'Refresh: the time changes, and the cards say they’re loading.', 'Actualiza: la hora cambia y las tarjetas avisan que están cargando.')}</li>
      </ul>`,
    )}

    ${section(
      'pi-anatomia',
      L('Anatomia', 'Anatomy', 'Anatomía'),
      L('Cinco partes, da pergunta ao detalhe: quem lê de cima para baixo para quando já tem a resposta.', 'Five parts, from the question to the detail: whoever reads top to bottom stops once they have the answer.', 'Cinco partes, de la pregunta al detalle: quien lee de arriba abajo se detiene cuando ya tiene la respuesta.'),
      `<ol class="pt-parts" role="list">${PARTS().map(([name, text], i) => `<li><span class="pt-parts__num">${i + 1}</span><div><p class="pt-parts__name">${name}</p><p class="pt-parts__text">${text}</p></div></li>`).join('')}</ol>`,
    )}

    ${section(
      'pi-regras',
      L('Regras', 'Rules', 'Reglas'),
      L('Seis decisões que valem para qualquer painel.', 'Six decisions that apply to any dashboard.', 'Seis decisiones que valen para cualquier panel.'),
      `<div class="pt-rules">${RULES().map(([glyph, title, text]) => `<article class="pt-rule"><span class="pt-rule__icon">${icon(glyph, { size: 18 })}</span><p class="pt-rule__title">${title}</p><p class="pt-rule__text">${text}</p></article>`).join('')}</div>`,
    )}

    ${section(
      'pi-mensagens',
      L('Mensagens', 'Messages', 'Mensajes'),
      L('Número com contexto, hora que se lê e vazio que diz o que fazer.', 'Numbers with context, readable times, and empty states that say what to do.', 'Números con contexto, horas que se leen y vacíos que dicen qué hacer.'),
      `<div class="doc-table pt-writing">
        <div class="doc-table__head" aria-hidden="true"><span>${L('Situação', 'Situation', 'Situación')}</span><span>${L('Evite', 'Avoid', 'Evita')}</span><span>${L('Prefira', 'Prefer', 'Prefiere')}</span></div>
        ${WRITING().map(([s, bad, good]) => `<div class="doc-table__row"><span class="pt-writing__situation">${s}</span><span class="pt-writing__bad">${icon('x-circle', { size: 16 })}<span>${escapeHtml(bad)}</span></span><span class="pt-writing__good">${icon('check-circle', { size: 16 })}<span>${escapeHtml(good)}</span></span></div>`).join('')}
      </div>`,
    )}

    ${section(
      'pi-acessibilidade',
      L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
      L('Quem não vê o gráfico precisa chegar à mesma conclusão.', 'People who can’t see the chart need to reach the same conclusion.', 'Quien no ve el gráfico necesita llegar a la misma conclusión.'),
      a11yList([
        [L('Gráfico com tabela', 'Charts with a table', 'Gráfico con tabla'), L('Cada gráfico do Lume tem vista em tabela e tooltip pelo teclado (setas). Os números do painel também existem em texto.', 'Every Lume chart has a table view and a keyboard tooltip (arrows). The dashboard’s numbers also exist as text.', 'Cada gráfico de Lume tiene vista de tabla y tooltip por teclado (flechas). Los números del panel también existen en texto.')],
        [L('Variação sem depender da cor', 'Change without relying on color', 'Variación sin depender del color'), L('Seta, sinal (+ ou −) e a frase “vs. 30 dias anteriores”. Verde e vermelho só reforçam.', 'Arrow, sign (+ or −), and the phrase “vs. previous 30 days”. Green and red only reinforce.', 'Flecha, signo (+ o −) y la frase “vs. 30 días anteriores”. Verde y rojo solo refuerzan.')],
        [L('Período anunciado', 'Period announced', 'Período anunciado'), L(`O seletor é um ${ic('radiogroup')}; os indicadores ficam em ${ic('aria-live="polite"')}, e o leitor de tela lê os números novos depois da troca.`, `The selector is a ${ic('radiogroup')}; the indicators sit in ${ic('aria-live="polite"')}, and the screen reader reads the new numbers after the switch.`, `El selector es un ${ic('radiogroup')}; los indicadores están en ${ic('aria-live="polite"')} y el lector de pantalla lee los números nuevos tras el cambio.`)],
        [L('Carregando, dito', 'Loading, said', 'Cargando, dicho'), L(`${ic('setLoading(true)')} marca o gráfico com ${ic('aria-busy')}; ninguém lê um número velho achando que é novo.`, `${ic('setLoading(true)')} marks the chart with ${ic('aria-busy')}; nobody reads an old number thinking it’s new.`, `${ic('setLoading(true)')} marca el gráfico con ${ic('aria-busy')}; nadie lee un número viejo creyendo que es nuevo.`)],
        [L('Atenção como lista', 'Attention as a list', 'Atención como lista'), L(`“Precisa de atenção” é uma seção com título e uma ${ic('&lt;ul&gt;')}; os links dizem para onde vão (“Ver buscas”), não “Clique aqui”.`, `“Needs attention” is a section with a heading and a ${ic('&lt;ul&gt;')}; links say where they go (“See searches”), not “Click here”.`, `“Necesita atención” es una sección con título y una ${ic('&lt;ul&gt;')}; los enlaces dicen adónde van (“Ver búsquedas”), no “Haz clic aquí”.`)],
      ]),
    )}

    ${section(
      'pi-codigo',
      L('Código', 'Code', 'Código'),
      L(`Os gráficos são ${ic('createLineChart')} e ${ic('createBarChart')}; os indicadores, ${ic('statTileHtml')}. O período é um ${ic('createSegmented')} que atualiza todos.`, `Charts are ${ic('createLineChart')} and ${ic('createBarChart')}; indicators, ${ic('statTileHtml')}. The period is a ${ic('createSegmented')} that updates them all.`, `Los gráficos son ${ic('createLineChart')} y ${ic('createBarChart')}; los indicadores, ${ic('statTileHtml')}. El período es un ${ic('createSegmented')} que actualiza todos.`),
      `${codeBlock(htmlCode())}
      ${codeBlock(jsCode())}`,
    )}

    ${section(
      'pi-uso',
      L('Uso', 'Usage', 'Uso'),
      L('Painel é para acompanhar. Para investigar, a pessoa vai para a lista ou o relatório.', 'A dashboard is for keeping track. To investigate, people go to the list or the report.', 'El panel es para seguir. Para investigar, la persona va a la lista o al informe.'),
      `<div class="usage-grid">
        <article class="usage-card usage-card--do">
          <p class="usage-card__head">${icon('check-circle', { size: 20 })}${L('Faça: comece pelo que a pessoa decide', 'Do: start from what people decide', 'Haz: empieza por lo que la persona decide')}</p>
          <p class="usage-card__text">${L('Pergunte “o que alguém faz depois de olhar isto?”. Os números que mudam essa decisão entram; o resto fica num relatório.', 'Ask “what does someone do after looking at this?”. The numbers that change that decision go in; the rest goes in a report.', 'Pregunta “¿qué hace alguien después de mirar esto?”. Los números que cambian esa decisión entran; el resto va a un informe.')}</p>
        </article>
        <article class="usage-card usage-card--dont">
          <p class="usage-card__head">${icon('x-circle', { size: 20 })}${L('Evite: a parede de números', 'Avoid: the wall of numbers', 'Evita: la pared de números')}</p>
          <p class="usage-card__text">${L('Doze indicadores do mesmo tamanho dizem que nada é mais importante. Quatro, com um gráfico maior, contam uma história.', 'Twelve indicators of the same size say nothing is more important. Four, with a bigger chart, tell a story.', 'Doce indicadores del mismo tamaño dicen que nada es más importante. Cuatro, con un gráfico mayor, cuentan una historia.')}</p>
        </article>
        <article class="usage-card usage-card--tip">
          <p class="usage-card__head">${icon('zap', { size: 20 })}${L('Período começa no que mais se usa', 'The period starts at the most used', 'El período empieza en el más usado')}</p>
          <p class="usage-card__text">${L('Abra no período que as pessoas mais escolhem (aqui, 30 dias) e lembre a escolha delas na próxima visita.', 'Open on the period people choose most (here, 30 days) and remember their choice on the next visit.', 'Abre en el período que más se elige (aquí, 30 días) y recuerda la elección en la próxima visita.')}</p>
        </article>
      </div>`,
    )}
  </div>`;
}

/* ───────── Comportamento ───────── */

export function mount(root) {
  const cleanups = [];
  const stage = root.querySelector('[data-pi-stage]');
  const $ = (sel) => stage.querySelector(sel);
  const kpiEl = $('[data-pi-kpis]');
  let data = slice('30');
  let timer = 0;

  const lineOpts = () => ({
    title: L('Visitas', 'Visits', 'Visitas'),
    subtitle: L(`Por ${data.range.bucket === 'week' ? 'semana' : 'dia'} · ${data.range.label}`, `Per ${data.range.bucket} · ${data.range.label}`, `Por ${data.range.bucket === 'week' ? 'semana' : 'día'} · ${data.range.label}`),
    categories: data.categories,
    tooltipLabels: data.tooltipLabels,
    series: [
      { name: L('Este período', 'This period', 'Este período'), values: data.visits },
      { name: L('Período anterior', 'Previous period', 'Período anterior'), values: data.previous, muted: true },
    ],
    format: 'integer',
    curve: data.range.bucket === 'day' ? 'linear' : 'smooth',
    height: 220,
  });
  const pagesOpts = () => ({ title: L('Páginas mais vistas', 'Most viewed pages', 'Páginas más vistas'), subtitle: data.range.label, ...share(PAGES(), data.now.visits) });
  const sourcesOpts = () => ({ title: L('De onde vêm', 'Where people come from', 'De dónde vienen'), subtitle: data.range.label, ...share(SOURCES(), data.now.visits) });

  const line = createLineChart($('[data-pi-line]'), { card: true, ...lineOpts() });
  const pages = createBarChart($('[data-pi-pages]'), { card: true, orientation: 'horizontal', format: 'integer', categoryLabel: L('Página', 'Page', 'Página'), ...pagesOpts() });
  const sources = createBarChart($('[data-pi-sources]'), { card: true, orientation: 'horizontal', format: 'integer', categoryLabel: L('Origem', 'Source', 'Origen'), ...sourcesOpts() });
  const charts = [line, pages, sources];

  const load = (next, after) => {
    charts.forEach((c) => c.setLoading(true));
    kpiEl.setAttribute('aria-busy', 'true');
    clearTimeout(timer);
    timer = setTimeout(() => {
      data = next();
      kpiEl.innerHTML = kpis(data);
      line.update(lineOpts());
      pages.update(pagesOpts());
      sources.update(sourcesOpts());
      charts.forEach((c) => c.setLoading(false));
      kpiEl.removeAttribute('aria-busy');
      after?.();
    }, 360);
  };

  const range = createSegmented($('[data-pi-range]'), { onChange: (value) => load(() => slice(value)) });

  const onClick = (event) => {
    if (event.target.closest('[data-pi-inert]')) return event.preventDefault();
    if (event.target.closest('[data-pi-refresh]')) {
      const value = data.range.value;
      load(
        () => slice(value),
        () => ($('[data-pi-fresh]').textContent = L('Atualizado agora', 'Updated just now', 'Actualizado ahora')),
      );
    }
  };
  stage.addEventListener('click', onClick);

  cleanups.push(
    () => stage.removeEventListener('click', onClick),
    () => clearTimeout(timer),
    () => range.destroy(),
    ...charts.map((c) => () => c.destroy()),
    mountDocNav(root),
    mountCodeCopy(root),
  );
  return () => cleanups.forEach((fn) => fn?.());
}

