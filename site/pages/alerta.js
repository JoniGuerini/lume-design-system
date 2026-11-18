import { icon } from '../../ds/icons/icons.js';
import { mountDocNav } from '../doc-nav.js';
import { playgroundMarkup, mountPlayground, mountCodeCopy, tokenTable, a11yList } from '../component-doc.js';
import { controlPage, example, examples, usageCards, ic } from '../form-control-doc.js';
import { L } from '../i18n.js';

export const styles = ['site/component-doc.css', 'site/pages/form-controls.css'];

const TONE_ICON = { neutral: 'info', info: 'info', success: 'check-circle', warning: 'alert-triangle', danger: 'alert-circle' };
const TONES = () => [
  ['neutral', L('Neutro', 'Neutral', 'Neutro')],
  ['info', L('Informação', 'Info', 'Información')],
  ['success', L('Sucesso', 'Success', 'Éxito')],
  ['warning', L('Atenção', 'Warning', 'Atención')],
  ['danger', L('Perigo', 'Danger', 'Peligro')],
];
const COPY = () => ({
  neutral: [L('Mudança de plano em dezembro', 'Plan change in December', 'Cambio de plan en diciembre'), L('Os valores atuais seguem até o fim do mês.', 'Current prices stay until the end of the month.', 'Los valores actuales siguen hasta fin de mes.')],
  info: [L('Nova versão disponível', 'New version available', 'Nueva versión disponible'), L('Atualize quando puder; nada do que você fez se perde.', 'Update when you can; nothing you did is lost.', 'Actualiza cuando puedas; nada de lo que hiciste se pierde.')],
  success: [L('Pagamento confirmado', 'Payment confirmed', 'Pago confirmado'), L('O recibo foi enviado para o seu e-mail.', 'The receipt was sent to your email.', 'El recibo se envió a tu correo.')],
  warning: [L('Seu plano vence em 3 dias', 'Your plan expires in 3 days', 'Tu plan vence en 3 días'), L('Renove para não perder o acesso aos projetos.', 'Renew so you don’t lose access to your projects.', 'Renueva para no perder el acceso a los proyectos.')],
  danger: [L('Não conseguimos salvar', 'We couldn’t save', 'No pudimos guardar'), L('Suas alterações continuam aqui. Tente de novo em alguns segundos.', 'Your changes are still here. Try again in a few seconds.', 'Tus cambios siguen aquí. Inténtalo de nuevo en unos segundos.')],
});

const close = () => `<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-alert__close" data-alert-close aria-label="${L('Fechar', 'Close', 'Cerrar')}">${icon('x', { size: 16 })}</button>`;

function alertBox(tone, { compact = false, action = false, dismiss = false, text = true, role = '' } = {}) {
  const [title, body] = COPY()[tone];
  return `<div class="ds-alert${tone === 'neutral' ? '' : ` ds-alert--${tone}`}${compact ? ' ds-alert--compact' : ''}"${role ? ` role="${role}"` : ''}>
    <span class="ds-alert__icon">${icon(TONE_ICON[tone], { size: 18 })}</span>
    <div class="ds-alert__body">
      <p class="ds-alert__title">${title}</p>
      ${text ? `<p class="ds-alert__text">${body}</p>` : ''}
      ${action ? `<div class="ds-alert__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">${L('Tentar de novo', 'Try again', 'Intentar de nuevo')}</button></div>` : ''}
    </div>
    ${dismiss ? close() : ''}
  </div>`;
}

export default function renderAlerta(page) {
  return controlPage(page, {
    lead: L('Uma mensagem na própria página, que fica à vista até deixar de valer. Para confirmar algo que acabou de acontecer e sumir, use o Toast.', 'A message on the page itself, which stays visible until it no longer applies. To confirm something that just happened and then disappear, use the Toast.', 'Un mensaje en la propia página, que queda a la vista hasta que deja de valer. Para confirmar algo que acaba de pasar y desaparecer, usa el Toast.'),
    stats: [
      [L('tons', 'tones', 'tonos'), 5],
      [L('tamanhos', 'sizes', 'tamaños'), 2],
      ['JavaScript', 0],
      [L('papéis', 'roles', 'roles'), 'alert · status'],
    ],
    sections: [
      { id: 'playground', title: 'Playground', desc: L('Só HTML e CSS. O botão de fechar, quando houver, é você quem liga.', 'Just HTML and CSS. You wire up the close button, if there is one.', 'Solo HTML y CSS. El botón de cerrar, cuando lo haya, lo conectas tú.'), html: playgroundMarkup('alert', { wide: true }) },
      {
        id: 'tons',
        title: L('Tons', 'Tones', 'Tonos'),
        desc: L('O tom nunca vem sozinho: ícone e texto dizem o mesmo que a cor.', 'The tone never comes alone: the icon and text say the same as the color.', 'El tono nunca viene solo: el ícono y el texto dicen lo mismo que el color.'),
        html: `<div class="fc-alerts">${TONES().map(([t]) => alertBox(t)).join('')}</div>`,
      },
      {
        id: 'variantes',
        title: L('Variantes', 'Variants', 'Variantes'),
        desc: L('Com ação para resolver, ou compacto para caber dentro de um painel.', 'With an action to resolve it, or compact to fit inside a panel.', 'Con una acción para resolverlo, o compacto para caber dentro de un panel.'),
        html: examples([
          example(L('Com ação', 'With an action', 'Con acción'), 'ds-alert__actions', L('Dá o próximo passo, em vez de só avisar.', 'Gives the next step, instead of just warning.', 'Da el siguiente paso, en vez de solo avisar.'), alertBox('danger', { action: true })),
          example(L('Compacto', 'Compact', 'Compacto'), 'ds-alert--compact', L('Uma linha só, para painéis e barras.', 'A single line, for panels and bars.', 'Una sola línea, para paneles y barras.'), alertBox('warning', { compact: true, text: false, dismiss: true })),
        ]),
      },
      {
        id: 'acessibilidade',
        title: L('Acessibilidade', 'Accessibility', 'Accesibilidad'),
        desc: L('O papel depende de quando o alerta aparece.', 'The role depends on when the alert appears.', 'El rol depende de cuándo aparece la alerta.'),
        html: a11yList([
          [L('Depois de uma ação', 'After an action', 'Después de una acción'), L(`${ic('role="alert"')} anuncia na hora, como num erro ao salvar. Use só para o que é urgente.`, `${ic('role="alert"')} announces right away, as in a save error. Use it only for what’s urgent.`, `${ic('role="alert"')} anuncia al instante, como en un error al guardar. Úsalo solo para lo urgente.`)],
          [L('Aviso sem pressa', 'A non-urgent notice', 'Aviso sin prisa'), L(`${ic('role="status"')} anuncia sem interromper o que a pessoa está ouvindo.`, `${ic('role="status"')} announces without interrupting what the person is hearing.`, `${ic('role="status"')} anuncia sin interrumpir lo que la persona está oyendo.`)],
          [L('Já na página', 'Already on the page', 'Ya en la página'), L('Quem já está ali ao carregar não precisa de papel: é lido na ordem normal.', 'Those already there on load need no role: they’re read in normal order.', 'Quien ya está ahí al cargar no necesita rol: se lee en el orden normal.')],
          [L('No React', 'In React', 'En React'), L(`${ic('<Alert>')} já escolhe sozinho: ${ic('tone="danger"')} vira ${ic('role="alert"')} e os outros tons, ${ic('role="status"')}. Passe ${ic('role')} para trocar, ou ${ic('role="none"')} no aviso que já está na página ao carregar.`, `${ic('<Alert>')} picks on its own: ${ic('tone="danger"')} becomes ${ic('role="alert"')} and the other tones, ${ic('role="status"')}. Pass ${ic('role')} to change it, or ${ic('role="none"')} for a notice that’s already on the page at load.`, `${ic('<Alert>')} elige solo: ${ic('tone="danger"')} se vuelve ${ic('role="alert"')} y los otros tonos, ${ic('role="status"')}. Pasa ${ic('role')} para cambiarlo, o ${ic('role="none"')} en el aviso que ya está en la página al cargar.`)],
          [L('Não só cor', 'Not only color', 'No solo color'), L('Cada tom tem ícone próprio e texto que explica.', 'Each tone has its own icon and explanatory text.', 'Cada tono tiene ícono propio y texto que explica.')],
        ]),
      },
      {
        id: 'tokens',
        nav: 'Tokens',
        title: L('Tokens usados', 'Tokens used', 'Tokens usados'),
        desc: L('Os tons seguem o mesmo padrão: fundo, contorno e ícone.', 'Tones follow the same pattern: background, outline, and icon.', 'Los tonos siguen el mismo patrón: fondo, contorno e ícono.'),
        html: tokenTable([
          ['color.bg.surface', L('Fundo neutro', 'Neutral background', 'Fondo neutro')],
          ['color.info.subtle', L('Fundo de informação', 'Info background', 'Fondo de información')],
          ['color.success.subtle', L('Fundo de sucesso', 'Success background', 'Fondo de éxito')],
          ['color.warning.subtle', L('Fundo de atenção', 'Warning background', 'Fondo de atención')],
          ['color.danger.subtle', L('Fundo de perigo', 'Danger background', 'Fondo de peligro')],
          ['color.danger.border', L('Contorno de perigo', 'Danger outline', 'Contorno de peligro')],
          ['color.danger.fg', L('Ícone de perigo', 'Danger icon', 'Ícono de peligro')],
          ['radius.lg', L('Cantos', 'Corners', 'Esquinas')],
        ]),
      },
      {
        id: 'uso',
        title: L('Uso', 'Usage', 'Uso'),
        desc: L('Alerta, Toast ou Modal?', 'Alert, Toast, or Modal?', '¿Alerta, Toast o Modal?'),
        html: usageCards([
          ['do', L('Faça: o que continua valendo', 'Do: what still applies', 'Haz: lo que sigue valiendo'), L('Um plano vencendo, um erro a corrigir, um aviso sobre esta página.', 'An expiring plan, an error to fix, a notice about this page.', 'Un plan por vencer, un error por corregir, un aviso sobre esta página.')],
          ['dont', L('Evite: confirmação passageira', 'Avoid: passing confirmations', 'Evita: confirmaciones pasajeras'), L('“Projeto salvo” é para o Toast, que some sozinho.', '“Project saved” is for the Toast, which disappears on its own.', '“Proyecto guardado” es para el Toast, que desaparece solo.')],
          ['tip', L('Diga o que fazer', 'Say what to do', 'Di qué hacer'), L('Um bom alerta explica o que houve e qual é o próximo passo.', 'A good alert explains what happened and what comes next.', 'Una buena alerta explica qué pasó y cuál es el siguiente paso.')],
        ]),
      },
    ],
  });
}

export function mount(root) {
  const unmountPlayground = mountPlayground(root, {
    id: 'alert',
    controls: [
      { id: 'tone', label: L('Tom', 'Tone', 'Tono'), value: 'info', options: TONES().map(([value, label]) => ({ value, label })) },
      { id: 'size', label: L('Tamanho', 'Size', 'Tamaño'), value: 'full', options: [{ value: 'full', label: L('Normal', 'Default', 'Normal') }, { value: 'compact', label: L('Compacto', 'Compact', 'Compacto') }] },
      { id: 'action', label: L('Ação', 'Action', 'Acción'), value: 'off', options: [{ value: 'off', label: L('Sem ação', 'No action', 'Sin acción') }, { value: 'on', label: L('Com ação', 'With an action', 'Con acción') }] },
      { id: 'close', label: L('Fechar', 'Close', 'Cerrar'), value: 'on', options: [{ value: 'on', label: L('Com botão', 'With a button', 'Con botón') }, { value: 'off', label: L('Sem botão', 'No button', 'Sin botón') }] },
    ],
    render: (s) => `<div class="fc-accordion">${alertBox(s.tone, { compact: s.size === 'compact', action: s.action === 'on', dismiss: s.close === 'on', text: s.size !== 'compact' })}</div>`,
    code: (s) => {
      const [title, body] = COPY()[s.tone];
      return `<div class="ds-alert${s.tone === 'neutral' ? '' : ` ds-alert--${s.tone}`}${s.size === 'compact' ? ' ds-alert--compact' : ''}" role="status">
  <span class="ds-alert__icon"><ds-icon name="${TONE_ICON[s.tone]}" size="18"></ds-icon></span>
  <div class="ds-alert__body">
    <p class="ds-alert__title">${title}</p>${s.size === 'compact' ? '' : `\n    <p class="ds-alert__text">${body}</p>`}${s.action === 'on' ? `\n    <div class="ds-alert__actions"><button class="ds-btn ds-btn--secondary ds-btn--sm">${L('Tentar de novo', 'Try again', 'Intentar de nuevo')}</button></div>` : ''}
  </div>${s.close === 'on' ? `\n  <button class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-alert__close" aria-label="${L('Fechar', 'Close', 'Cerrar')}"><ds-icon name="x" size="16"></ds-icon></button>` : ''}
</div>`;
    },
  });
  // nos exemplos, fechar some com o alerta; refazer os controles traz de volta
  const onClick = (event) => {
    event.target.closest('[data-alert-close]')?.closest('.ds-alert')?.remove();
  };
  root.addEventListener('click', onClick);
  const unmountCopy = mountCodeCopy(root);
  const unmountNav = mountDocNav(root);
  return () => {
    unmountPlayground();
    root.removeEventListener('click', onClick);
    unmountCopy();
    unmountNav();
  };
}
