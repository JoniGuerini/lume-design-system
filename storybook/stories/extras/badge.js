export const Configuravel = {
  name: 'Configurável',
  args: { tom: 'success', rotulo: 'Publicado', pequeno: false },
  argTypes: { tom: { control: 'select', options: ['neutral', 'brand', 'info', 'success', 'warning', 'danger'] } },
  render: ({ tom, rotulo, pequeno }) => `<span class="ds-badge ds-badge--${tom}${pequeno ? ' ds-badge--sm' : ''}">${rotulo}</span>`,
};
