export const Configuravel = {
  name: 'Configurable',
  args: { tone: 'success', label: 'Published', small: false },
  argTypes: { tone: { control: 'select', options: ['neutral', 'brand', 'info', 'success', 'warning', 'danger'] } },
  render: ({ tone, label, small }) => `<span class="ds-badge ds-badge--${tone}${small ? ' ds-badge--sm' : ''}">${label}</span>`,
};
