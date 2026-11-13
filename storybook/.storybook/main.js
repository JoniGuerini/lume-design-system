/** Storybook do Lume: HTML puro, com o CSS e o JavaScript reais do design system (../ds). */
export default {
  framework: { name: '@storybook/html-vite', options: {} },
  addons: ['@storybook/addon-docs'],
  stories: ['../stories/**/*.mdx', '../stories/componentes/*.stories.js'],
  // o design system e o CSS das páginas do site (os exemplos usam o mesmo arranjo das páginas)
  staticDirs: [{ from: '../../ds', to: '/ds' }, { from: '../../site', to: '/site' }, { from: '../../assets', to: '/assets' }],
  core: { disableTelemetry: true, disableWhatsNewNotifications: true },
  docs: { defaultName: 'Documentação' },
  viteFinal: (config) => ({ ...config, base: './' }),
};
