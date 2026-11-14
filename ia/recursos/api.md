# API

Seção do Lume: Recursos. Página: https://lumeui.dev/#/recursos/api

Tudo o que você pode chamar pelo JavaScript, num arquivo só. O que está aqui é público e estável; o resto é interno e pode mudar.

Em números: itens públicos: 88 · verbos: 5 · dependências: 0.

## Importar

Um arquivo, `ds/lume.js`, reúne a API inteira. Os módulos de `ds/js/` continuam podendo ser importados um a um, para carregar só o necessário.

```html
<link rel="stylesheet" href="https://lumeui.dev/v/0.32/lume.css">

<script type="module">
  import { initTheme, createModal, toast } from 'https://lumeui.dev/v/0.32/lume.js';

  initTheme();
  const modal = createModal({ title: 'Publicar alterações?' });
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Convenção

Cada verbo promete uma coisa. Pelo nome, você já sabe o que volta.

| Verbo | Quando | Devolve |
| --- | --- | --- |
| `create…` | Liga um componente a um elemento, ou cria o elemento | Um controle com `destroy()` |
| `mount…` | Liga todos os componentes de um tipo numa área | A função que desliga todos |
| `init…` | Comportamento global da página, uma vez | Nada |
| `open…` `confirm…` `toast` | Ação imediata | A resposta ou um controle com close() |
| `…Html` | Gera a marcação, sem ligar nada | Uma string de HTML |

Estado segue `get…` e `set…`; constantes ficam em maiúsculas, como `THEMES`.

## Tudo o que é público

Os 88 itens de `ds/lume.js`, com o módulo de onde cada um vem.

### Componentes

| Nome | O que faz | Módulo |
| --- | --- | --- |
| `createBackToTop` | Botão de voltar ao topo de uma área que rola. | back-to-top.js |
| `createCalendar` | Calendário com visões de mês, semana e dia. | calendar.js |
| `createCarousel` | Carrossel com setas, pontos, teclado e passagem automática com pausa. | carousel.js |
| `createColorPicker` | Seletor de cor solto: área, matiz, hexadecimal e amostras. | color-picker.js |
| `createColorField` | Campo de cor com amostra que abre o seletor. | color-picker.js |
| `parseHex` | Lê uma cor em hexadecimal (3 ou 6 dígitos, com ou sem #). | color-picker.js |
| `createCommandPalette` | Busca de comandos aberta com ⌘K. | command-palette.js |
| `createComposer` | Campo de mensagem de uma conversa, com anexos. | composer.js |
| `createContextMenu` | Menu do botão direito numa área. | context-menu.js |
| `createDatePicker` | Seletor de data ligado a um campo. | date-picker.js |
| `createDrawer` | Gaveta lateral que você abre e fecha quando quiser. | drawer.js |
| `createFileUpload` | Área de envio de arquivos, com lista e progresso. | file-upload.js |
| `createFilters` | Barra de filtros que guarda o estado no endereço. | filters.js |
| `createForm` | Validação, erros e resumo de erros de um formulário. | form.js |
| `createMenu` | Menu ligado a um botão, com escolha única ou múltipla. | menu.js |
| `createModal` | Modal que você abre e fecha quando quiser. | modal.js |
| `createNumberField` | Campo numérico com – e +. | number-field.js |
| `createOtpField` | Campo de código de verificação. | otp-field.js |
| `createPagination` | Paginação de uma lista ou tabela. | pagination.js |
| `createPopover` | Painel que abre preso a um botão. | popover.js |
| `createResizable` | Painéis redimensionáveis: divisória que arrasta, com teclado, limites e tamanho salvo. | resizable.js |
| `createSegmented` | Controle segmentado. | segmented.js |
| `createSelect` | Seleção do Lume sobre um select nativo. | select.js |
| `mountSelects` | Liga todas as seleções de uma área. | select.js |
| `createShell` | App shell: sidebar ou navbar, recolher e gaveta no celular. | shell.js |
| `renderSidebarNav` | Monta os grupos de navegação da sidebar. | shell.js |
| `renderNavbarNav` | Monta os grupos de navegação da navbar. | shell.js |
| `setActiveNavItem` | Marca o item de navegação da página atual. | shell.js |
| `LAYOUTS` | Os layouts do app shell. | shell.js |
| `createSlider` | Slider de um valor ou de uma faixa. | slider.js |
| `createStepper` | Etapas de um processo. | stepper.js |
| `mountTabs` | Liga todas as abas de uma área. | tabs.js |
| `selectTab` | Escolhe uma aba pelo código. | tabs.js |
| `createTagField` | Campo de tags. | tag-field.js |
| `createTimePicker` | Seletor de horário ligado a um campo. | time-picker.js |
| `createTree` | Árvore que expande e recolhe. | tree.js |

### Ações imediatas

| Nome | O que faz | Módulo |
| --- | --- | --- |
| `openModal` | Abre um modal e devolve a resposta quando ele fecha. | modal.js |
| `confirmModal` | Pede uma confirmação e devolve sim ou não. | modal.js |
| `openDrawer` | Abre uma gaveta lateral e devolve a resposta. | drawer.js |
| `toast` | Mostra um toast; devolve um controle com close(). | toast.js |
| `clearToasts` | Fecha todos os toasts. | toast.js |
| `copyText` | Copia um texto e confirma com um toast. | toast.js |
| `getToastPosition` | Lê a posição dos toasts. | toast.js |
| `setToastPosition` | Muda a posição dos toasts. | toast.js |
| `TOAST_POSITIONS` | As posições possíveis dos toasts. | toast.js |

### Gráficos

| Nome | O que faz | Módulo |
| --- | --- | --- |
| `createBarChart` | Gráfico de barras. | charts.js |
| `createLineChart` | Gráfico de linhas e áreas. | charts.js |
| `createDonutChart` | Gráfico de rosca. | charts.js |
| `createHeatmap` | Mapa de calor em matriz. | charts.js |
| `createCalendarHeatmap` | Mapa de calor em calendário. | charts.js |
| `createScatterChart` | Gráfico de dispersão. | charts.js |
| `statTileHtml` | Indicador com valor, variação e tendência. | charts.js |
| `sparklineHtml` | Minigráfico de linha. | charts.js |
| `meterHtml` | Medidor de uma quantidade com limites. | charts.js |
| `formatter` | Formata números como os gráficos formatam. | charts.js |

### Marcação em texto

| Nome | O que faz | Módulo |
| --- | --- | --- |
| `modalHtml` | O HTML de um modal. | modal.js |
| `composerHtml` | O HTML do campo de mensagem. | composer.js |
| `messageHtml` | O HTML de uma mensagem da conversa. | composer.js |
| `attachmentHtml` | O HTML de um anexo. | composer.js |
| `typingHtml` | O HTML do “digitando…”. | composer.js |
| `streamText` | Escreve uma resposta aos poucos, como um assistente. | composer.js |
| `codeBlockHtml` | O HTML de um bloco de código. | code-block.js |
| `mountCodeBlocks` | Liga o botão de copiar dos blocos de código de uma área. | code-block.js |

### Página: tema, idioma e ícones

| Nome | O que faz | Módulo |
| --- | --- | --- |
| `initTheme` | Aplica o tema salvo ou o do sistema. | theme.js |
| `setTheme` | Escolhe claro, escuro ou sistema. | theme.js |
| `toggleTheme` | Alterna entre claro e escuro. | theme.js |
| `resolvedTheme` | O tema em uso agora. | theme.js |
| `getThemePreference` | A escolha salva: claro, escuro ou sistema. | theme.js |
| `mountThemeControls` | Liga os botões de tema de uma área. | theme.js |
| `THEMES` | Os temas disponíveis. | theme.js |
| `initLocale` | Aplica o idioma salvo ou o do sistema. | i18n.js |
| `setLocale` | Escolhe o idioma dos componentes. | i18n.js |
| `locale` | O idioma em uso agora. | i18n.js |
| `getLocalePreference` | A escolha de idioma salva. | i18n.js |
| `tr` | Escolhe o texto do idioma atual em { pt-BR, en, es }. | i18n.js |
| `msg` | Um texto de sistema dos componentes, no idioma atual. | i18n.js |
| `formatNumber` | Formata um número no idioma atual. | i18n.js |
| `numberFormat` | Intl.NumberFormat no idioma atual. | i18n.js |
| `dateFormat` | Intl.DateTimeFormat no idioma atual. | i18n.js |
| `LOCALES` | Os idiomas do Lume. | i18n.js |
| `LOCALE_NAMES` | O nome de cada idioma. | i18n.js |
| `initTooltips` | Liga as dicas de todos os data-ds-tooltip da página. | tooltip.js |
| `initScrollbars` | Liga a barra de rolagem sobreposta. | scrollbar.js |
| `icon` | O SVG de um ícone, como texto. | icons/icons.js |
| `icons` | Os 132 ícones, por nome. | icons/icons.js |
| `iconList` | Os 132 ícones, em lista. | icons/icons.js |
| `filtersToQuery` | Transforma o estado dos filtros em endereço. | filters.js |
| `filtersFromQuery` | Lê o estado dos filtros de um endereço. | filters.js |

## O que não muda

A partir da 0.24, um nome desta página só muda numa versão maior, com aviso no console e guia de migração. Visual (cor, espaçamento, raio) pode evoluir a qualquer versão, porque não quebra quem usa.
