export const Configuravel = {
  name: 'Configurável',
  args: { tom: 'info', titulo: 'Atualização disponível', texto: 'A versão nova entra no ar hoje à noite.', compacto: false },
  argTypes: { tom: { control: 'select', options: ['info', 'success', 'warning', 'danger'] } },
  render: ({ tom, titulo, texto, compacto }) =>
    `<div class="ds-alert ds-alert--${tom}${compacto ? ' ds-alert--compact' : ''}" role="status"><div class="ds-alert__body">${titulo && !compacto ? `<p class="ds-alert__title">${titulo}</p>` : ''}<p class="ds-alert__text">${texto}</p></div></div>`,
};
