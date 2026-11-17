export const Configuravel = {
  name: 'Configurable',
  args: { label: 'Get product updates', checked: true, small: false, switchOnRight: false, disabled: false },
  render: ({ label, checked, small, switchOnRight, disabled }) =>
    `<label class="ds-switch${small ? ' ds-switch--sm' : ''}${switchOnRight ? ' ds-switch--end' : ''}" style="max-width:360px"><input type="checkbox" role="switch" class="ds-switch__input"${checked ? ' checked' : ''}${disabled ? ' disabled' : ''}><span class="ds-choice__text"><span class="ds-choice__label">${label}</span></span></label>`,
};
