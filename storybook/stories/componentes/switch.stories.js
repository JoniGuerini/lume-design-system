// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/switch. Não edite: rode npm run stories.
import * as page from '../../../site/pages/switch.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/switch", group: '', label: "Switch" };

export default {
  title: "Components/Forms/Switch",
  id: "componentes-switch",
  parameters: { docs: { description: { component: "Turns something on or off right away, with no save button. If the change only applies on submit, use a checkbox.\n\nFull documentation: https://lumeui.dev/#/componentes/switch" } } },
};

export const Configuravel = {
  name: 'Configurable',
  args: { label: 'Get product updates', checked: true, small: false, switchOnRight: false, disabled: false },
  render: ({ label, checked, small, switchOnRight, disabled }) =>
    `<label class="ds-switch${small ? ' ds-switch--sm' : ''}${switchOnRight ? ' ds-switch--end' : ''}" style="max-width:360px"><input type="checkbox" role="switch" class="ds-switch__input"${checked ? ' checked' : ''}${disabled ? ' disabled' : ''}><span class="ds-choice__text"><span class="ds-choice__label">${label}</span></span></label>`,
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "A native checkbox with role=\"switch\". The one on the stage works." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Quando = {
  name: "Switch or checkbox?",
  parameters: { docs: { description: { story: "Both hold a yes/no. The difference is when the choice takes effect." } } },
  render: () => liveStory(page, "quando", INFO),
};

export const Tamanhos = {
  name: "Sizes",
  parameters: { docs: { description: { story: "Medium is the default. Small fits in table rows and dense bars." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "On gets the brand color and the thumb moves right — the position communicates too, not just the color." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Ajustes = {
  name: "Settings list",
  parameters: { docs: { description: { story: "The most common use: label and description on the left, the switch on the right with .ds-switch--end. Each change applies right away." } } },
  render: () => liveStory(page, "ajustes", INFO),
};

export const Movimento = {
  name: "Motion",
  parameters: { docs: { description: { story: "The thumb moves in duration.base (200 ms) with easing.emphasized: it leaves fast and settles softly. With reduced motion, the change is instant." } } },
  render: () => liveStory(page, "movimento", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Three rules to avoid confusion." } } },
  render: () => liveStory(page, "uso", INFO),
};
