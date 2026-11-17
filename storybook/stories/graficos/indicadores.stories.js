// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/indicadores. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-indicadores.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/indicadores", group: '', label: "Indicators" };

export default {
  title: "Charts/Indicators",
  id: "graficos-indicadores",
  parameters: { docs: { description: { component: "When the chart is a number. The current value, how much it changed, and where it’s heading — no axis, no legend, no effort to read.\n\nFull documentation: https://lumeui.dev/#/graficos/indicadores" } } },
};

export const InPlayground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Build the indicator, see it in each theme, and copy the code. Switch “Good when” to watch the same rise become worse." } } },
  render: () => liveStory(page, "in-playground", INFO),
};

export const InAnatomia = {
  name: "Anatomy",
  parameters: { docs: { description: { story: "Five parts, always in this order. Only the label and the value are required." } } },
  render: () => liveStory(page, "in-anatomia", INFO),
};

export const InKpis = {
  name: "Indicator row",
  parameters: { docs: { description: { story: "The numbers that open a dashboard. Same structure, same comparison period, from most to least important." } } },
  render: () => liveStory(page, "in-kpis", INFO),
};

export const InDestaque = {
  name: "Hero number",
  parameters: { docs: { description: { story: "The number the whole screen exists to show. Only one per view, in the same sans as the rest — a display or serif font looks like decoration." } } },
  render: () => liveStory(page, "in-destaque", INFO),
};

export const InSparkline = {
  name: "Sparkline",
  parameters: { docs: { description: { story: "The trend without axes, inline with the text. It stretches to its container’s width and the stroke doesn’t distort." } } },
  render: () => liveStory(page, "in-sparkline", INFO),
};

export const InMedidor = {
  name: "Meter",
  parameters: { docs: { description: { story: "A ratio against a limit. The fill carries the severity — brand, warning, critical — and the track is a lighter tint of the same color. From warning on, it gets an icon." } } },
  render: () => liveStory(page, "in-medidor", INFO),
};

export const InVariacao = {
  name: "Change",
  parameters: { docs: { description: { story: "The color comes from two facts: where the number went and whether that’s good. The same rise can be better or worse — that’s why the sign, icon, and text always come together." } } },
  render: () => liveStory(page, "in-variacao", INFO),
};

export const InAcessibilidade = {
  name: "Accessibility",
  parameters: { docs: { description: { story: "The indicator is text, so it starts out accessible. These details complete it." } } },
  render: () => liveStory(page, "in-acessibilidade", INFO),
};

export const InUso = {
  name: "Usage",
  parameters: { docs: { description: { story: "When a number is enough — and how not to ruin it." } } },
  render: () => liveStory(page, "in-uso", INFO),
};

export const InApi = {
  name: "API",
  parameters: { docs: { description: { story: "Three functions that return HTML, with no state — use them anywhere, including inside tables and cards." } } },
  render: () => liveStory(page, "in-api", INFO),
};
