/**
 * Lume Design System: a API pública, num lugar só.
 *
 *   import { createModal, toast, initTheme } from 'https://lumeui.dev/ds/lume.js';
 *
 * Tudo o que está aqui é público e documentado em Recursos › API. O que não está é interno e pode mudar sem aviso.
 * Os módulos de ds/js/ continuam podendo ser importados um a um, para carregar só o necessário.
 *
 * Convenção dos nomes:
 *   create…  liga um componente a um elemento (ou cria o elemento) e devolve um controle com destroy()
 *   mount…   liga todos os componentes de um tipo numa área e devolve a função que desliga
 *   init…    comportamento global da página, chamado uma vez
 *   open…, confirm…, toast   ação imediata
 *   …Html    devolve a marcação como texto, sem ligar nada
 *   get… / set…   estado; constantes em maiúsculas
 */
import './icons/icons.js';

export { icon, icons, iconList } from './icons/icons.js';
export { createBackToTop } from './js/back-to-top.js';
export { createCalendar } from './js/calendar.js';
export { createCarousel } from './js/carousel.js';
export { createResizable } from './js/resizable.js';
export { createRating, ratingHtml } from './js/rating.js';
export { progressRingHtml, setProgressRing } from './js/progress-ring.js';
export { createBanner } from './js/banner.js';
export { createNotificationCenter, relativeTime } from './js/notifications.js';
export { openImageViewer, mountImageViewer } from './js/image-viewer.js';
export { createSortable, createKanban } from './js/sortable.js';
export { createEditor, sanitizeHtml } from './js/editor.js';
export { createToolbar } from './js/toolbar.js';
export {
  createBarChart, createLineChart, createDonutChart, createHeatmap, createCalendarHeatmap, createScatterChart,
  sparklineHtml, statTileHtml, meterHtml, chartFormatter,
} from './js/charts.js';
export { codeBlockHtml, mountCodeBlocks } from './js/code-block.js';
export { createColorPicker, createColorField, parseHex } from './js/color-picker.js';
export { createCommandPalette } from './js/command-palette.js';
export { createComposer, composerHtml, messageHtml, attachmentHtml, typingHtml, streamText } from './js/composer.js';
export { createContextMenu } from './js/context-menu.js';
export { createDatePicker } from './js/date-picker.js';
export { createDrawer, openDrawer } from './js/drawer.js';
export { createFileUpload } from './js/file-upload.js';
export { createFilters, filtersToQuery, filtersFromQuery } from './js/filters.js';
export { createForm } from './js/form.js';
export {
  locale, setLocale, initLocale, getLocalePreference, tr, msg, numberFormat, dateFormat, formatNumber, LOCALES, LOCALE_NAMES,
} from './js/i18n.js';
export { createMenu } from './js/menu.js';
export { createModal, openModal, confirmModal, modalHtml } from './js/modal.js';
export { createNumberField } from './js/number-field.js';
export { createCurrencyField } from './js/currency-field.js';
export { createPasswordField } from './js/password-field.js';
export { createSearchField } from './js/search-field.js';
export { createOtpField } from './js/otp-field.js';
export { createPagination } from './js/pagination.js';
export { createPopover } from './js/popover.js';
export { initScrollbars } from './js/scrollbar.js';
export { createSegmented } from './js/segmented.js';
export { createSelect, mountSelects } from './js/select.js';
export { createShell, renderSidebarNav, renderNavbarNav, setActiveNavItem, LAYOUTS } from './js/shell.js';
export { createSlider } from './js/slider.js';
export { createStepper } from './js/stepper.js';
export { mountTabs, selectTab } from './js/tabs.js';
export { createTagField } from './js/tag-field.js';
export { initTheme, setTheme, toggleTheme, resolvedTheme, getThemePreference, mountThemeControls, THEMES } from './js/theme.js';
export { createTimePicker } from './js/time-picker.js';
export { toast, clearToasts, copyText, getToastPosition, setToastPosition, TOAST_POSITIONS } from './js/toast.js';
export { initTooltips } from './js/tooltip.js';
export { createTree } from './js/tree.js';
