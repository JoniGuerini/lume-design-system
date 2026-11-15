/** Storybook do Lume: HTML puro, com o CSS e o JavaScript reais do design system (../ds). */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const REACT = path.join(ROOT, 'react') + path.sep;

/**
 * Os componentes React (react/*.tsx) importam '../js/…' e '../icons/…' porque, no pacote, a pasta react/
 * fica dentro da pasta do Lume. Aqui eles estão na raiz do repositório: aponta esses imports para ds/.
 */
const lumeReact = {
  name: 'lume-react-paths',
  enforce: 'pre',
  resolveId(source, importer) {
    if (!importer || !path.normalize(importer).startsWith(REACT)) return null;
    const m = source.match(/^\.\.\/(js|icons)\/(.+)$/);
    return m ? path.join(ROOT, 'ds', m[1], m[2]) : null;
  },
};

export default {
  framework: { name: '@storybook/html-vite', options: {} },
  addons: ['@storybook/addon-docs'],
  stories: ['../stories/**/*.mdx', '../stories/fundamentos/*.stories.js', '../stories/componentes/*.stories.js', '../stories/graficos/*.stories.js', '../stories/padroes/*.stories.js', '../stories/react/*.stories.tsx'],
  // o design system e o CSS das páginas do site (os exemplos usam o mesmo arranjo das páginas)
  staticDirs: [{ from: '../../ds', to: '/ds' }, { from: '../../site', to: '/site' }, { from: '../../assets', to: '/assets' }],
  core: { disableTelemetry: true, disableWhatsNewNotifications: true },
  docs: { defaultName: 'Documentação' },
  viteFinal: (config) => ({
    ...config,
    base: './',
    plugins: [...(config.plugins ?? []), lumeReact],
    esbuild: { ...(config.esbuild || {}), jsx: 'automatic' },
  }),
};
