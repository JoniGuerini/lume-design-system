/**
 * Introdução do Storybook: a capa do Lume feita com o próprio Lume. Segue o tema e o idioma da barra de cima
 * (preview.js avisa com o evento lume:globals). O índice dos componentes vem de ../indice.js, gerado por
 * npm run stories a partir de site/nav.js.
 */
import { useEffect, useRef, useState } from 'react';
import { icon, iconList } from '../../../ds/icons/icons.js';
import { codeBlockHtml, mountCodeBlocks } from '../../../ds/js/code-block.js';
import { CURRENT_VERSION } from '../../../site/changelog.js';
import { SECTIONS } from '../indice.js';
import './intro.css';

const LINE = CURRENT_VERSION.split('.').slice(0, 2).join('.');
const FIGMA_URL = 'https://www.figma.com/design/1yTJ881xoXjRmdi6NeTnYD/Lume-Design-System';
const COMPONENTS = SECTIONS.reduce((n, s) => n + s.items.length, 0);

const read = () => ({ lang: document.documentElement.lang || 'pt-BR', theme: document.documentElement.dataset.theme || 'light' });
function useGlobals() {
  const [g, setG] = useState(read);
  useEffect(() => {
    const on = () => setG(read());
    window.addEventListener('lume:globals', on);
    return () => window.removeEventListener('lume:globals', on);
  }, []);
  return g;
}

const Icon = ({ name, size = 18 }) => <span className="li-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon(name, { size }) }} />;

/** Seta do link solto: o svg leva a classe e o data-arrow, que o CSS do link anda 2 px no hover. */
const Arrow = () => <span className="li-contents" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon('arrow-right', { size: 16, className: 'ds-link__icon' }).replace('<svg', '<svg data-arrow') }} />;

/** A chama do Lume (assets/favicon.svg): cores de logotipo, iguais nos dois temas. */
const Flame = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" fill="#c97b63" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248z" />
    <path fill="#ffffff" fillOpacity="0.28" d="M15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1.001a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.717z" />
  </svg>
);

/** Abre a documentação de um componente no próprio Storybook (o link sai do iframe da página). */
const storyHref = (slug) => `./?path=/docs/componentes-${slug}--documenta%C3%A7%C3%A3o`;

function Section({ title, lead, children }) {
  return (
    <section className="li-section">
      <header className="li-section__head">
        <h2 className="li-section__title">{title}</h2>
        {lead && <p className="li-section__lead">{lead}</p>}
      </header>
      {children}
    </section>
  );
}

/** A mesma composição nos dois temas: controles reais do Lume, com o conteúdo do próprio Lume. */
function Stage({ theme, t }) {
  return (
    <div className="li-stage" data-theme={theme}>
      <p className="li-stage__label">{theme === 'light' ? t('Claro', 'Light', 'Claro') : t('Escuro', 'Dark', 'Oscuro')}</p>
      <div className="ds-card li-stage__card">
        <div className="li-stage__row li-stage__row--between">
          <p className="ds-card__title">Lume {LINE}</p>
          <span className="ds-badge ds-badge--success"><span className="ds-badge__dot" />{t('Publicada', 'Released', 'Publicada')}</span>
        </div>
        <p className="ds-card__text">{t('Os mesmos tokens desenham os dois temas.', 'The same tokens draw both themes.', 'Los mismos tokens dibujan los dos temas.')}</p>
        <div className="li-stage__row">
          {[['Web', true], ['iOS', false], ['Android', false]].map(([label, on]) => (
            <button key={label} type="button" className="ds-chip" aria-pressed={on} tabIndex={-1}>
              <span className="ds-chip__check"><Icon name="check" size={14} /></span>
              {label}
            </button>
          ))}
        </div>
        <div className="ds-segmented" role="radiogroup" aria-label="Layout">
          <button type="button" className="ds-segmented__item" role="radio" aria-checked="true" tabIndex={-1}>Sidebar</button>
          <button type="button" className="ds-segmented__item" role="radio" aria-checked="false" tabIndex={-1}>Navbar</button>
        </div>
        <label className="ds-switch">
          <input type="checkbox" role="switch" className="ds-switch__input" defaultChecked tabIndex={-1} />
          <span className="ds-choice__text">
            <span className="ds-choice__label">{t('Seguir o sistema', 'Follow the system', 'Seguir el sistema')}</span>
          </span>
        </label>
        <div className="ds-progress-field">
          <div className="ds-progress-field__head">
            <span>{t('Rumo à 1.0', 'On the way to 1.0', 'Rumbo a la 1.0')}</span>
            <span className="ds-progress-field__value">80%</span>
          </div>
          <progress className="ds-progress" value="80" max="100" aria-label={t('Rumo à 1.0', 'On the way to 1.0', 'Rumbo a la 1.0')} />
        </div>
        <div className="li-stage__row">
          <button type="button" className="ds-btn ds-btn--primary ds-btn--sm" tabIndex={-1}>{t('Ver componentes', 'See components', 'Ver componentes')}</button>
          <button type="button" className="ds-btn ds-btn--secondary ds-btn--sm" tabIndex={-1}>{t('Novidades', 'What’s new', 'Novedades')}</button>
        </div>
      </div>
    </div>
  );
}

function Code({ code }) {
  const ref = useRef(null);
  useEffect(() => mountCodeBlocks(ref.current), []);
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: codeBlockHtml(code, { small: true }) }} />;
}

export function Introducao() {
  const { lang } = useGlobals();
  const t = (pt, en, es) => (lang === 'en' ? en : lang === 'es' ? es : pt);
  const tr = (o) => o[lang] || o['pt-BR'];

  const stats = [
    [COMPONENTS, t('componentes', 'components', 'componentes')],
    [iconList.length, t('ícones', 'icons', 'íconos')],
    [2, t('temas', 'themes', 'temas')],
    [3, t('idiomas', 'languages', 'idiomas')],
  ];

  const principles = [
    [t('Tudo plano', 'Everything flat', 'Todo plano'), t('Superfícies opacas e lisas, contornos finos. Sem vidro, brilho, desfoque ou degradê de fundo.', 'Opaque, smooth surfaces and thin borders. No glass, glow, blur, or background gradient.', 'Superficies opacas y lisas, contornos finos. Sin vidrio, brillo, desenfoque ni degradado de fondo.')],
    [t('Ardósia e terracota', 'Slate and terracotta', 'Pizarra y terracota'), t('Ardósia no fundo e no texto; a terracota da chama só onde é preciso apontar.', 'Slate for backgrounds and text; the flame’s terracotta only where something needs pointing out.', 'Pizarra en el fondo y en el texto; la terracota de la llama solo donde hace falta señalar.')],
    [t('Serifa no título', 'Serif for headings', 'Serif en el título'), t('Geist Serif dá voz aos títulos, Geist Sans cuida da leitura, JetBrains Mono fica com o código.', 'Geist Serif voices the headings, Geist Sans handles reading, JetBrains Mono takes the code.', 'Geist Serif da voz a los títulos, Geist Sans se ocupa de la lectura, JetBrains Mono del código.')],
    [t('Acessível de saída', 'Accessible by default', 'Accesible de entrada'), t('Teclado em tudo, foco visível e contraste da WCAG medido em cada par de cores, nos dois temas.', 'Keyboard everywhere, visible focus, and WCAG contrast measured on every color pair, in both themes.', 'Teclado en todo, foco visible y contraste de la WCAG medido en cada par de colores, en los dos temas.')],
  ];

  const install = `<link rel="stylesheet" href="https://lumeui.dev/v/${LINE}/lume.css">
<script type="module">
  import { initTheme } from 'https://lumeui.dev/v/${LINE}/lume.js';
  initTheme();
</script>`;

  return (
    <div className="li" lang={lang}>
      <header className="li-hero">
        <p className="li-hero__eyebrow">Design system · {CURRENT_VERSION}</p>
        <h1 className="li-hero__brand"><Flame size={52} /><span>Lume</span></h1>
        <p className="li-hero__lead">
          {t(
            'Cada componente do Lume, desenhado com o CSS e o JavaScript reais do design system. Troque o tema e o idioma na barra de cima: tudo aqui acompanha.',
            'Every Lume component, drawn with the design system’s real CSS and JavaScript. Switch the theme and language in the top bar: everything here follows.',
            'Cada componente de Lume, dibujado con el CSS y el JavaScript reales del design system. Cambia el tema y el idioma en la barra de arriba: todo aquí lo sigue.',
          )}
        </p>
        <div className="li-hero__actions">
          <a className="ds-btn ds-btn--primary" href={storyHref('botao')} target="_top">{t('Começar pelo Botão', 'Start with Button', 'Empezar por el Botón')}<Icon name="arrow-right" size={18} /></a>
          <a className="ds-btn ds-btn--secondary" href="https://lumeui.dev" target="_blank" rel="noopener">lumeui.dev<Icon name="external-link" size={16} /></a>
          <a className="ds-btn ds-btn--ghost" href={FIGMA_URL} target="_blank" rel="noopener">Figma<Icon name="external-link" size={16} /></a>
        </div>
        <dl className="li-stats">
          {stats.map(([n, label]) => (
            <div key={label} className="li-stat"><dt className="li-stat__label">{label}</dt><dd className="li-stat__value">{n}</dd></div>
          ))}
        </dl>
      </header>

      <Section title={t('Claro e escuro', 'Light and dark', 'Claro y oscuro')} lead={t('Os mesmos controles nos dois temas, um ao lado do outro. Nada aqui é imagem: é o Lume desenhando.', 'The same controls in both themes, side by side. Nothing here is an image: it’s Lume drawing.', 'Los mismos controles en los dos temas, uno al lado del otro. Nada aquí es imagen: es Lume dibujando.')}>
        <div className="li-stages">
          <Stage theme="light" t={t} />
          <Stage theme="dark" t={t} />
        </div>
      </Section>

      <Section title={t('Componentes', 'Components', 'Componentes')} lead={t('Organizados como no site. Cada um abre com as histórias da página dele: exemplo, variantes, estados e o que mais a página mostra.', 'Organized as on the site. Each opens with the stories from its page: example, variants, states, and whatever else the page shows.', 'Organizados como en el sitio. Cada uno abre con las historias de su página: ejemplo, variantes, estados y lo demás que muestra la página.')}>
        <div className="li-index">
          {SECTIONS.map((s) => (
            <div key={s.id} className="li-group">
              <p className="li-group__head"><span>{tr(s.label)}</span><span className="li-group__count">{s.items.length}</span></p>
              <ul className="li-group__list" role="list">
                {s.items.map((c) => (
                  <li key={c.slug}>
                    <a className="li-group__link" href={storyHref(c.slug)} target="_top" title={tr(c.description)}>
                      <Icon name={c.icon} size={16} />
                      <span>{tr(c.label)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t('Princípios', 'Principles', 'Principios')} lead={t('O que se repete em cada peça.', 'What repeats in every piece.', 'Lo que se repite en cada pieza.')}>
        <ol className="li-principles" role="list">
          {principles.map(([title, text], i) => (
            <li key={title} className="li-principle">
              <span className="li-principle__n">{String(i + 1).padStart(2, '0')}</span>
              <p className="li-principle__title">{title}</p>
              <p className="li-principle__text">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title={t('Usar', 'Use it', 'Usarlo')}>
        <div className="li-use">
          <div className="li-use__card li-use__card--wide">
            <p className="li-use__title"><Icon name="code" />HTML</p>
            <p className="li-use__text">{t(`Um CSS e um módulo, direto de lumeui.dev, na linha ${LINE}.`, `One CSS file and one module, straight from lumeui.dev, on line ${LINE}.`, `Un CSS y un módulo, directo de lumeui.dev, en la línea ${LINE}.`)}</p>
            <Code code={install} />
          </div>
          <div className="li-use__card">
            <p className="li-use__title"><Icon name="layers" />React</p>
            <p className="li-use__text">{t('Os mesmos componentes em .tsx, na seção React daqui e na pasta react/ de cada versão.', 'The same components as .tsx, in the React section here and in each version’s react/ folder.', 'Los mismos componentes en .tsx, en la sección React de aquí y en la carpeta react/ de cada versión.')}</p>
            <a className="ds-link ds-link--standalone" href="https://lumeui.dev/#/recursos/react" target="_blank" rel="noopener">{t('Usar com React', 'Use with React', 'Usar con React')}<Arrow /></a>
          </div>
          <div className="li-use__card">
            <p className="li-use__title"><Icon name="terminal" />{t('Para IAs', 'For AI', 'Para IA')}</p>
            <p className="li-use__text">{t('A documentação inteira em Markdown, para uma IA construir telas com o Lume.', 'The whole documentation in Markdown, so an AI can build screens with Lume.', 'Toda la documentación en Markdown, para que una IA construya pantallas con Lume.')}</p>
            <a className="ds-link ds-link--standalone" href="https://lumeui.dev/llms.txt" target="_blank" rel="noopener">llms.txt<Arrow /></a>
          </div>
        </div>
      </Section>
    </div>
  );
}
