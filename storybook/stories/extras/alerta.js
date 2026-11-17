export const Configuravel = {
  name: 'Configurable',
  args: { tone: 'info', title: 'Update available', text: 'The new version goes live tonight.', compact: false },
  argTypes: { tone: { control: 'select', options: ['info', 'success', 'warning', 'danger'] } },
  render: ({ tone, title, text, compact }) =>
    `<div class="ds-alert ds-alert--${tone}${compact ? ' ds-alert--compact' : ''}" role="status"><div class="ds-alert__body">${title && !compact ? `<p class="ds-alert__title">${title}</p>` : ''}<p class="ds-alert__text">${text}</p></div></div>`,
};
