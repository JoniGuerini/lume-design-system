export const Configuravel = {
  name: 'Configurável',
  args: { rotulo: 'Receber novidades', ligado: true, pequeno: false, aDireita: false, desativado: false },
  render: ({ rotulo, ligado, pequeno, aDireita, desativado }) =>
    `<label class="ds-switch${pequeno ? ' ds-switch--sm' : ''}${aDireita ? ' ds-switch--end' : ''}" style="max-width:360px"><input type="checkbox" role="switch" class="ds-switch__input"${ligado ? ' checked' : ''}${desativado ? ' disabled' : ''}><span class="ds-choice__text"><span class="ds-choice__label">${rotulo}</span></span></label>`,
};
