// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/calendario. Não edite: rode npm run stories.
import * as page from '../../../site/pages/calendario.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/calendario", group: '', label: "Calendar" };

export default {
  title: "Components/Content/Calendar",
  id: "componentes-calendario",
  parameters: { docs: { description: { component: "Month, week, and day in the same piece, with events. Dates, names, and the first day of the week come from the locale — and it’s fully usable by keyboard.\n\nFull documentation: https://lumeui.dev/#/componentes/calendario" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "The real calendar, with events around today. Switch views in the calendar itself, click an event or a day, use the arrows in the month." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Eventos = {
  name: "Events",
  parameters: { docs: { description: { story: "Three shapes, depending on duration, and six tones. Tone is never the only cue: the title says what it is." } } },
  render: () => liveStory(page, "eventos", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "The calendar shows time. To pick a date in a form, a date field is enough." } } },
  render: () => liveStory(page, "uso", INFO),
};
