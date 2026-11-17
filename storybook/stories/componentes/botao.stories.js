// Gerado por scripts/build-stories.mjs a partir de https://lumeui.dev/#/componentes/botao. Não edite: rode npm run stories.
import * as page from '../../../site/pages/botao.js';
import { liveStory } from '../live.js';

// a seção da página do site, ao vivo: o JavaScript da página liga o exemplo (setas, menus, campos…)
const INFO = { path: "/componentes/botao", group: '', label: "Button" };

export default {
  title: "Components/Actions/Button",
  id: "componentes-botao",
  parameters: { docs: { description: { component: "Triggers an action. Flat and direct: color goes to the main action, the rest leans on outlines and transparency.\n\nFull documentation: https://lumeui.dev/#/componentes/botao" } } },
};

export const Configuravel = {
  name: 'Configurable',
  args: { variant: 'primary', size: 'md', label: 'Save', icon: 'pencil', disabled: false },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'subtle', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    icon: { control: 'select', options: ['', 'pencil', 'plus', 'check', 'download', 'trash', 'send'] },
  },
  render: ({ variant, size, label, icon, disabled }) =>
    `<button type="button" class="ds-btn ds-btn--${variant}${size !== 'md' ? ` ds-btn--${size}` : ''}"${disabled ? ' disabled' : ''}>${icon ? `<ds-icon name="${icon}"></ds-icon>` : ''}${label}</button>`,
};

export const Playground = {
  name: "Playground",
  parameters: { docs: { description: { story: "Build the button, check it in each theme, and copy the ready code." } } },
  render: () => liveStory(page, "playground", INFO),
};

export const Variantes = {
  name: "Variants",
  parameters: { docs: { description: { story: "The variant says how much weight the action carries. The more important, the more color — and only one action gets the brand color." } } },
  render: () => liveStory(page, "variantes", INFO),
};

export const Tamanhos = {
  name: "Sizes",
  parameters: { docs: { description: { story: "Medium is the default. Small for dense bars and tables; large for calls to action and touch screens." } } },
  render: () => liveStory(page, "tamanhos", INFO),
};

export const Estados = {
  name: "States",
  parameters: { docs: { description: { story: "Every variant reacts the same way: hover lightens or highlights, pressed darkens, focus gets the ring. To document and test, force a state with data-state." } } },
  render: () => liveStory(page, "estados", INFO),
};

export const Anatomia = {
  name: "Anatomy",
  parameters: { docs: { description: { story: "Three parts. The icon is optional; the label never is — except in the icon button." } } },
  render: () => liveStory(page, "anatomia", INFO),
};

export const Icone = {
  name: "Icon button",
  parameters: { docs: { description: { story: "For actions recognizable without text — close, search, more options. No background by default; hover to see the hint." } } },
  render: () => liveStory(page, "icone", INFO),
};

export const Uso = {
  name: "Usage",
  parameters: { docs: { description: { story: "Three rules that solve most screens." } } },
  render: () => liveStory(page, "uso", INFO),
};
