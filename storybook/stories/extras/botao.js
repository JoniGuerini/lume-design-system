export const Configuravel = {
  name: 'Configurável',
  args: { variante: 'primary', tamanho: 'md', rotulo: 'Salvar', icone: 'pencil', desativado: false },
  argTypes: {
    variante: { control: 'select', options: ['primary', 'secondary', 'ghost', 'subtle', 'danger'] },
    tamanho: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    icone: { control: 'select', options: ['', 'pencil', 'plus', 'check', 'download', 'trash', 'send'] },
  },
  render: ({ variante, tamanho, rotulo, icone, desativado }) =>
    `<button type="button" class="ds-btn ds-btn--${variante}${tamanho !== 'md' ? ` ds-btn--${tamanho}` : ''}"${desativado ? ' disabled' : ''}>${icone ? `<ds-icon name="${icone}"></ds-icon>` : ''}${rotulo}</button>`,
};
