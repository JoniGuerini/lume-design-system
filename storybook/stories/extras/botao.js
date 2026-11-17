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
