// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/graficos/visao-geral. Não edite: rode npm run stories.
import * as page from '../../../site/pages/graficos-visao-geral.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/graficos/visao-geral", group: '', label: "Overview" };

export default {
  title: "Charts/Overview",
  id: "graficos-visao-geral",
  parameters: { docs: { description: { component: "Data that reads at a glance and holds up to a second look. Thin marks, one color per role, labels only where they matter — and every piece of information reachable by keyboard and as a table.\n\nFull documentation: https://lumeui.dev/#/graficos/visao-geral" } } },
};

export const VgExemplo = {
  name: "Live example",
  parameters: { docs: { description: { story: "A dashboard with a single filter at the top: the period applies to everything below it, so the numbers always agree. When it changes, the charts hold the previous drawing while they update — no skeleton, no jump." } } },
  render: () => liveStory(page, "vg-exemplo", INFO),
};

export const VgForma = {
  name: "Which chart to use",
  parameters: { docs: { description: { story: "Choose by the reader’s task, before thinking about color. Sometimes the right answer isn’t a chart at all." } } },
  render: () => liveStory(page, "vg-forma", INFO),
};

export const VgCores = {
  name: "Color",
  parameters: { docs: { description: { story: "Each color does one job: identity (categorical), quantity (sequential), step (ordinal), side of a reference (diverging), or state (status). And none was picked by eye — the order came from a validator." } } },
  render: () => liveStory(page, "vg-cores", INFO),
};

export const VgAnatomia = {
  name: "Anatomy",
  parameters: { docs: { description: { story: "Seven pieces, always in the same place. The title names what’s plotted; with a single series, there’s no need for a legend." } } },
  render: () => liveStory(page, "vg-anatomia", INFO),
};

export const VgMarcas = {
  name: "Marks and breathing room",
  parameters: { docs: { description: { story: "The calm look comes from a few fixed measurements and two negative spaces. Only the data gets to be loud." } } },
  render: () => liveStory(page, "vg-marcas", INFO),
};

export const VgInteracao = {
  name: "Interaction",
  parameters: { docs: { description: { story: "Every chart comes interactive. The tooltip complements — it’s never the only way to a value." } } },
  render: () => liveStory(page, "vg-interacao", INFO),
};

export const VgAcessibilidade = {
  name: "Accessibility",
  parameters: { docs: { description: { story: "Decisions that come built into every chart — and the ones that are still yours." } } },
  render: () => liveStory(page, "vg-acessibilidade", INFO),
};

export const VgUso = {
  name: "Usage",
  parameters: { docs: { description: { story: "What goes wrong most often in charts — and what to do instead." } } },
  render: () => liveStory(page, "vg-uso", INFO),
};

export const VgApi = {
  name: "API",
  parameters: { docs: { description: { story: "One function per form, the same conversation in all of them: mount on an element, take options, and return controls." } } },
  render: () => liveStory(page, "vg-api", INFO),
};
