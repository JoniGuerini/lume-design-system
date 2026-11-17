# Lume Design System

Design system aberto, com tokens, 154 ícones, 60 componentes, gráficos e 12 padrões de tela. Tem tema claro e escuro, em português, inglês e espanhol, e é feito só com HTML, CSS e JavaScript nativos, sem dependências. Tem camada React e documentação para IAs.

**[lumeui.dev](https://lumeui.dev)** · [Storybook](https://lumeui.dev/storybook/) · [Figma](https://www.figma.com/design/1yTJ881xoXjRmdi6NeTnYD/Lume-Design-System) · [npm](https://www.npmjs.com/package/@joniguerini/lume) · [Como contribuir](CONTRIBUTING.md)

> *An open design system: tokens, components, charts and screen patterns in plain HTML, CSS and JavaScript, with React bindings. Docs in English, Portuguese and Spanish at [lumeui.dev](https://lumeui.dev).*

## Usar

Documentação: https://lumeui.dev (português, inglês e espanhol).

```bash
npm install @joniguerini/lume
```

```js
import '@joniguerini/lume/lume.css';
import { initTheme } from '@joniguerini/lume';          // HTML e JavaScript
import { Button } from '@joniguerini/lume/react';         // React 18+, compilado e com tipos
```

Sem npm: `<link rel="stylesheet" href="https://lumeui.dev/v/1.9/lume.css">` e `import … from 'https://lumeui.dev/v/1.9/lume.js'`.

## Rodar

```bash
npm run dev
```

Abre em http://localhost:5173. O servidor gera os tokens ao iniciar e de novo sempre que um arquivo em `tokens/` muda.

Para só gerar os tokens: `npm run tokens`. Para exportar para o Figma e outras ferramentas: `npm run tokens:export` (gera `dist/tokens/`; ferramenta interna, não aparece no site).

Para publicar: `npm run build` gera os tokens, roda o teste do plugin do Figma e monta em `dist/site/` só o site (`index.html`, `ds/`, `site/`, o favicon e a documentação para IAs), mais o pacote: `ds/lume.css` e cada versão em `v/<linha>/`, com zip. As linhas anteriores ficam em `versoes/`. Licença MIT (`LICENSE`). Storybook: `npm run stories` gera as histórias e `npm run storybook` abre (as dependências ficam só em `storybook/`). O `vercel.json` já aponta o Vercel para esse comando e essa pasta. Pacote do npm: `npm run npm:build` monta `dist/npm/pacote/` (passo a passo em `npm/PUBLICAR.md`).

### Plugin do Figma

```bash
npm run figma
```

Gera `dist/figma-plugin/`. No Figma para desktop: **Plugins → Desenvolvimento → Importar plugin do manifesto…** e escolha `dist/figma-plugin/manifest.json`. O plugin cria as variáveis, os estilos, os ícones e os componentes em blocos de documentação (modos Claro e Escuro), em português, inglês ou espanhol (opção Idioma na janela); rodar de novo atualiza sem duplicar. O código fica em `figma/plugin/` (um arquivo por grupo). `npm run figma:test` roda o plugin numa imitação da API do Figma e gera `dist/figma-plugin/preview.html`.

## Estrutura

```
tokens/              ← fonte da verdade (edite aqui)
  palettes.json      paletas primitivas em OKLCH (hue + chroma → 11 a 16 tons)
  foundation.json    espaço, raio, tamanhos, layout, z-index, movimento
  typography.json    famílias, pesos e 19 estilos de texto
  semantic.json      tokens de cor por tema (escuro e claro) + checagens de contraste
  effects.json       sombras e o gradiente do divisor
figma/
  plugin/            o plugin do Figma, um arquivo por grupo (00 núcleo · 01–06 idiomas e dicionário · 10 fundamentos · 20 ícones · 30+ blocos · 99 main)
  ui.html            a janela do plugin
scripts/
  build-tokens.mjs   tokens/*.json → ds/tokens.css + ds/tokens.js (com relatório WCAG)
  build-figma-plugin.mjs  figma/plugin/*.js + tokens + ícones → dist/figma-plugin/
  test-figma-plugin.mjs   roda o plugin em figma-mock.mjs (imitação da API) e gera a prévia
  export-tokens.mjs  tokens → dist/tokens/ (variáveis do Figma, plugin, DTCG, JSON plano, CSS)
  token-export.mjs   os conversores que export-tokens e o plugin do Figma usam
  build-site.mjs     só o site → dist/site/ (o que o Vercel publica)
  serve.mjs          servidor de desenvolvimento
ds/                  ← o design system em si
  ds.css             ponto de entrada (importa tudo)
  tokens.css/js      gerados — não edite
  base.css           reset, tipografia base, foco, acessibilidade
  components/        um CSS por componente (botão, chip, campo, seleção, checkbox, switch, abas,
                     tabela, modal, menu, toast, painel, avatar, alerta, filtros, conversa,
                     gráficos, shell, ⌘K…)
  icons/icons.js     154 ícones próprios + função icon() + <ds-icon>
  js/                theme, tooltip, menu, select, date-picker, time-picker, number-field, slider,
                     tag-field, file-upload, otp-field, segmented, pagination, stepper, tree, tabs, modal, popover, drawer, context-menu, code-block, back-to-top, toast, shell, command-palette,
                     composer (conversa), form (validação), filters (barra de filtros),
                     i18n + messages (idioma e os textos dos componentes em PT, EN e ES)
  js/charts.js       gráficos em SVG: barras, linhas e áreas, rosca, heatmap, calendário,
                     dispersão, indicador, sparkline e medidor (núcleo em js/charts/)
site/                ← o site de documentação (usa o DS)
  nav.js             mapa do site: sidebar, rotas, breadcrumb e busca (nomes nos três idiomas)
  i18n.js            textos do shell e da busca em PT, EN e ES
  docs.css           layout das páginas de documentação (cabeçalho, nav da página, seções, tabelas)
  doc-nav.js         navegação "nesta página" (rolagem + seção ativa)
  component-doc.*    peças das páginas de componente: playground com código, tokens usados, acessibilidade
  changelog.js       versões e o indicador de Novidades da sidebar
  roadmap.js         próximas etapas: página Roadmap e card do Início
  chart-data.js      dados de exemplo (fixos) das páginas de gráficos
  pages/             páginas (cada uma com seu .css): home, primeiros-passos, novidades,
                     8 fundamentos, 60 componentes, 7 de gráficos, 12 padrões, 4 recursos,
                     placeholder, 404
```

## Usar em outro projeto

```html
<link rel="stylesheet" href="ds/ds.css">
<script type="module" src="ds/icons/icons.js"></script>

<button class="ds-btn ds-btn--primary ds-btn--lg"><ds-icon name="pencil"></ds-icon>Criar</button>
```

Nos estilos, consuma sempre tokens semânticos: `var(--ds-color-fg-muted)`, `var(--ds-radius-xl)`, `font: var(--ds-text-body-md)`.

### Gráficos

```js
import { createBarChart } from './ds/js/charts.js';

const chart = createBarChart(document.querySelector('#vendas'), {
  title: 'Vendas por mês',
  categories: ['Jan', 'Fev', 'Mar'],
  series: [{ name: 'Loja', values: [120, 180, 152] }],
  format: 'currency',
});

chart.update({ series: [{ name: 'Loja', values: [130, 170, 160] }] });
chart.destroy();
```

### Calendário

```js
import { createCalendar } from './ds/js/calendar.js';   // mês, semana e dia, com eventos e teclado

createCalendar(document.querySelector('#agenda'), {
  view: 'month',
  events: [{ id: 'a', title: 'Revisão do roteiro', start, end, tone: 'brand' }],
  onEventClick: (event) => abrir(event.id),
});
```

### Padrões

```js
import { createForm } from './ds/js/form.js';          // validação em português, a partir dos atributos nativos
import { createComposer } from './ds/js/composer.js';   // caixa de mensagem com anexos e comandos "/"
import { createFilters } from './ds/js/filters.js';     // busca + filtros + pílulas ativas + contagem

createForm(document.querySelector('form'), { onSubmit: (data) => salvar(data) });
```

O app shell aceita `createShell(el, { persist: false })` para demonstrações que não devem salvar preferências; abra o site com `?embed` para o mesmo efeito.

### Idiomas

Os textos dos componentes (validação, “Fechar”, “Nenhum resultado”, gráficos) e a formatação de números e datas seguem o idioma: português, inglês ou espanhol. Por padrão vale o idioma do sistema; o que não for um dos três vira inglês.

```js
import { setLocale, locale } from './ds/js/i18n.js';

setLocale('en');        // 'pt-BR' | 'en' | 'es' | 'system' — salva a escolha e avisa com ds:localechange
locale();               // 'en'
```

Todos os gráficos seguem o tema sozinhos (as cores são tokens `--ds-color-chart-*`), têm tooltip no hover e no teclado, legenda que esconde séries e uma vista em tabela. As 8 cores de série têm ordem fixa, validada para daltonismo nos dois temas: não recicle nem invente uma 9ª — agrupe em “Outros”.

## Personalizar

- **Cor da marca:** em `tokens/palettes.json`, mude `hue` (e `chroma`) de `brand`. Ex.: `50` pêssego, `275` índigo, `152` verde.
- **Temas:** `<html data-theme="dark|light|system">`. Por padrão segue o sistema. Qualquer elemento pode ter um `data-theme` próprio (temas aninhados).
- **Sem imagens nem texturas:** a personalidade vem das superfícies opacas em camadas, dos contornos finos, da tipografia e do acento pêssego. Fundos são sempre cores sólidas — nada de degradê, vidro ou blur.
- **Nova página:** crie `site/pages/minha-pagina.js` exportando `default function render(page)` (e, se quiser, `mount(root)` que devolve uma função de limpeza, e `styles = 'site/pages/minha-pagina.css'`). Depois adicione `load: () => import('./pages/minha-pagina.js')` ao item em `site/nav.js`. Páginas de fundamentos seguem o modelo de `cores.js`: `.doc-header` → `.doc-nav` → `.doc-section`.

## Contribuir

Bugs, ideias e correções são bem-vindos. Veja o [CONTRIBUTING.md](CONTRIBUTING.md).

## Atalhos

| Atalho | Ação |
| --- | --- |
| `⌘K` / `Ctrl K` / `/` | Busca rápida |
| `⌘B` / `Ctrl B` | Recolher ou expandir a sidebar |
| `Esc` | Fechar busca ou menu mobile |
