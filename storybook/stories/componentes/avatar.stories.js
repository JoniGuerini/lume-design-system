// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/avatar. Não edite: rode npm run stories.
import * as page from '../../../site/pages/avatar.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/avatar", group: '', label: "Avatar" };

export default {
  title: "Components/Content/Avatar",
  id: "componentes-avatar",
  parameters: { docs: { description: { component: "Represents a person or account. A photo when there is one, initials in a stable tone when there isn’t — and always a name behind it.\n\nFull documentation: https://lumeui.dev/#/componentes/avatar" } } },
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Change the name to see the initials and tone change. “Failed image” shows the fallback in action." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Tamanhos = {
  name: "Sizes",
  parameters: { docs: { description: { story: "Five sizes. The initials and status follow the proportion on their own." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const TiposDeConteudo = {
  name: "Content",
  parameters: { docs: { description: { story: "The order of preference is always the same: image, initials, icon." } } },
  render: () => liveStory(page, "tipos-de-conteudo", INFO),
};

export const Tons = {
  name: "Tones",
  parameters: { docs: { description: { story: "Nine tones from the supporting palettes, lightly tinted over the surface. The tone comes from the name: the same person always gets the same color, on any screen." } } },
  render: () => liveStory(page, "tons", INFO),
};

export const Status = {
  name: "Status",
  parameters: { docs: { description: { story: "A dot in the corner, with a ring in the background color to separate it. Status isn’t just color: say it in the accessible name or the text beside it too." } } },
  render: () => liveStory(page, "status", INFO),
};

export const Grupo = {
  name: "Group",
  parameters: { docs: { description: { story: "Overlapping avatars to show who’s taking part. Up to four faces and a “+N” for the rest. Hover to see the names." } } },
  render: () => liveStory(page, "grupo", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Three things that help the avatar make people recognizable." } } },
  render: () => liveStory(page, "uso", INFO),
};
