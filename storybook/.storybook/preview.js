/**
 * Cada história recebe o tema e o idioma da barra de ferramentas, e o JavaScript do Lume é ligado de novo
 * depois de desenhar (abas, seleções, dicas, blocos de código).
 */
import '../../ds/icons/icons.js';
import { setLocale } from '../../ds/js/i18n.js';
import { mountSelects } from '../../ds/js/select.js';
import { mountTabs } from '../../ds/js/tabs.js';
import { initTooltips } from '../../ds/js/tooltip.js';
import { mountCodeBlocks } from '../../ds/js/code-block.js';
import { addons } from 'storybook/preview-api';

initTooltips();

/**
 * Tema e idioma também nas páginas sem história (a Introdução): a barra de cima avisa pelo canal do Storybook,
 * e o evento lume:globals redesenha quem estiver ouvindo.
 */
const applyGlobals = ({ theme = 'light', locale = 'pt-BR' } = {}) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.lang = locale;
  setLocale(locale, { persist: false });
  window.dispatchEvent(new CustomEvent('lume:globals', { detail: { theme, locale } }));
};
const channel = addons.getChannel();
channel.on('setGlobals', ({ globals }) => applyGlobals(globals));
channel.on('globalsUpdated', ({ globals }) => applyGlobals(globals));

const withLume = (story, context) => {
  const { theme = 'light', locale = 'pt-BR' } = context.globals;
  document.documentElement.dataset.theme = theme;
  document.documentElement.lang = locale;
  setLocale(locale, { persist: false });
  const out = story();
  const el = typeof out === 'string' ? Object.assign(document.createElement('div'), { className: 'lume-story', innerHTML: out }) : out;
  queueMicrotask(() => {
    mountSelects(el);
    mountTabs(el);
    mountCodeBlocks(el);
  });
  return el;
};

export default {
  decorators: [withLume],
  globalTypes: {
    theme: {
      description: 'Tema',
      toolbar: { title: 'Tema', icon: 'mirror', items: [{ value: 'light', title: 'Claro' }, { value: 'dark', title: 'Escuro' }], dynamicTitle: true },
    },
    locale: {
      description: 'Idioma',
      toolbar: { title: 'Idioma', icon: 'globe', items: [{ value: 'pt-BR', title: 'Português' }, { value: 'en', title: 'English' }, { value: 'es', title: 'Español' }], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light', locale: 'pt-BR' },
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    backgrounds: { disable: true },
    options: { storySort: { order: ['Lume', 'Componentes', 'React', 'Padrões'] } },
  },
  tags: ['autodocs'],
};
