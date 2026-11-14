/**
 * Os componentes da camada React (react/*.tsx), para a página Recursos › Usar com React.
 * Componente novo em react/ = linha nova aqui, com a versão em que entrou.
 * Cada item: [nome do componente, arquivo, rota da página do Lume, versão, texto (pt, en, es)].
 */
import { L } from './i18n.js';

export const REACT_GROUPS = () => [
  {
    title: L('Base', 'Base', 'Base'),
    items: [
      ['Icon', 'Icon.tsx', '/fundamentos/icones', '0.26', L('Os 132 ícones, com o nome checado pelo TypeScript.', 'The 132 icons, with the name checked by TypeScript.', 'Los 132 íconos, con el nombre comprobado por TypeScript.')],
      ['useLocale', 'useLocale.ts', null, '0.26', L('O idioma do Lume; redesenha quando ele muda.', 'Lume’s language; re-renders when it changes.', 'El idioma de Lume; vuelve a dibujar cuando cambia.')],
      ['cx', 'cx.ts', null, '0.26', L('Junta classes, ignorando o que for falso.', 'Joins classes, skipping anything falsy.', 'Une clases, ignorando lo que sea falso.')],
    ],
  },
  {
    title: L('Ações', 'Actions', 'Acciones'),
    items: [
      ['Button · ButtonLink', 'Button.tsx', '/componentes/botao', '0.26', L('Variante, tamanho, ícones e ocupado (busy). ButtonLink é o mesmo visual num link.', 'Variant, size, icons and busy. ButtonLink is the same look on a link.', 'Variante, tamaño, íconos y ocupado (busy). ButtonLink es el mismo aspecto en un enlace.')],
      ['IconButton', 'IconButton.tsx', '/componentes/botao', '0.26', L('Só o ícone; o rótulo para leitores de tela é obrigatório.', 'Icon only; the screen reader label is required.', 'Solo el ícono; la etiqueta para lectores de pantalla es obligatoria.')],
      ['InlineAction', 'InlineAction.tsx', '/componentes/acao-inline', '0.26', L('Ação mínima no meio do conteúdo ("Na cena +").', 'Minimal action within content ("In scene +").', 'Acción mínima dentro del contenido ("En escena +").')],
      ['Link', 'Link.tsx', '/componentes/link', '0.34', L('No texto ou solto (variant), apagado (muted) e externo, com ícone e aviso de nova aba.', 'Inline or standalone (variant), muted, and external, with icon and new-tab notice.', 'En el texto o suelto (variant), apagado (muted) y externo, con ícono y aviso de pestaña nueva.')],
      ['Chip · RemovableChip · ChipGroup', 'Chip.tsx', '/componentes/chip', '0.26', L('Filtro (pressed), seletor (chevron) e removível (onRemove).', 'Filter (pressed), selector (chevron) and removable (onRemove).', 'Filtro (pressed), selector (chevron) y removible (onRemove).')],
    ],
  },
  {
    title: L('Formulários', 'Forms', 'Formularios'),
    items: [
      ['Field · Input · Textarea · TextField', 'Field.tsx', '/componentes/campo-de-texto', '0.27', L('Rótulo, dica, erro e contador ligados ao controle; TextField junta tudo.', 'Label, hint, error and counter wired to the control; TextField puts it all together.', 'Etiqueta, pista, error y contador conectados al control; TextField lo junta todo.')],
      ['Select', 'Select.tsx', '/componentes/selecao', '0.27', L('Uma ou várias opções, com grupos, busca e limite.', 'One or more options, with groups, search and a limit.', 'Una o varias opciones, con grupos, búsqueda y límite.')],
      ['Checkbox · Radio · RadioGroup · CheckboxGroup', 'Choice.tsx', '/componentes/checkbox-radio', '0.27', L('Opções soltas ou em grupo, com o valor controlado.', 'Single options or groups, with a controlled value.', 'Opciones sueltas o en grupo, con el valor controlado.')],
      ['Switch', 'Choice.tsx', '/componentes/switch', '0.27', L('Liga e desliga, com descrição e dois tamanhos.', 'On and off, with a description and two sizes.', 'Enciende y apaga, con descripción y dos tamaños.')],
      ['DatePicker', 'Pickers.tsx', '/componentes/seletor-de-data', '0.27', L('Data ou período, valor em Date; o formulário recebe ISO.', 'Date or range, value as Date; the form gets ISO.', 'Fecha o período, valor en Date; el formulario recibe ISO.')],
      ['TimePicker', 'Pickers.tsx', '/componentes/seletor-de-horario', '0.27', L('Horário em HH:MM, com lista e digitação livre.', 'Time as HH:MM, with a list and free typing.', 'Hora en HH:MM, con lista y escritura libre.')],
      ['ColorPicker · ColorField', 'ColorPicker.tsx', '/componentes/seletor-de-cor', '0.31', L('O seletor solto e o campo que o abre; o hexadecimal fica no estado.', 'The standalone picker and the field that opens it; the hex stays in state.', 'El selector suelto y el campo que lo abre; el hexadecimal queda en el estado.')],
      ['NumberField', 'Pickers.tsx', '/componentes/campo-numerico', '0.27', L('Número com − e +, limites e formato (moeda, porcentagem).', 'Number with − and +, limits and format (currency, percent).', 'Número con − y +, límites y formato (moneda, porcentaje).')],
      ['Slider', 'Controls.tsx', '/componentes/slider', '0.27', L('Um valor ou uma faixa; onChange enquanto arrasta, onCommit ao soltar.', 'A value or a range; onChange while dragging, onCommit on release.', 'Un valor o un rango; onChange mientras arrastras, onCommit al soltar.')],
      ['TagField', 'Pickers.tsx', '/componentes/campo-de-tags', '0.27', L('Lista de valores livres, com limite e validação.', 'A list of free values, with a limit and validation.', 'Lista de valores libres, con límite y validación.')],
      ['FileUpload', 'Controls.tsx', '/componentes/upload', '0.27', L('Arrastar ou escolher, com envio, progresso e erro por arquivo.', 'Drag or pick, with upload, progress and per-file errors.', 'Arrastrar o elegir, con envío, progreso y error por archivo.')],
      ['OtpField', 'Controls.tsx', '/componentes/codigo-de-verificacao', '0.27', L('Uma casa por dígito; onComplete na última.', 'One box per digit; onComplete on the last one.', 'Una casilla por dígito; onComplete en la última.')],
      ['Form', 'Form.tsx', '/padroes/formularios', '0.27', L('A validação do Lume, com regras próprias e o resumo de erros.', 'Lume’s validation, with custom rules and the error summary.', 'La validación de Lume, con reglas propias y el resumen de errores.')],
    ],
  },
  {
    title: L('Navegação', 'Navigation', 'Navegación'),
    items: [
      ['Menu', 'Navigation.tsx', '/componentes/menu', '0.28', L('Liga a lista a qualquer gatilho (triggerRef): escolha ou ações.', 'Attaches the list to any trigger (triggerRef): choice or actions.', 'Conecta la lista a cualquier disparador (triggerRef): elección o acciones.')],
      ['Tabs', 'Navigation.tsx', '/componentes/abas', '0.28', L('Abas ARIA com setas, Home e End; sublinhadas ou segmentadas.', 'ARIA tabs with arrows, Home and End; underlined or segmented.', 'Pestañas ARIA con flechas, Home y End; subrayadas o segmentadas.')],
      ['SegmentedControl', 'Navigation.tsx', '/componentes/controle-segmentado', '0.28', L('Poucas opções lado a lado, uma escolhida.', 'A few options side by side, one chosen.', 'Pocas opciones lado a lado, una elegida.')],
      ['Pagination', 'Navigation.tsx', '/componentes/paginacao', '0.28', L('Página e itens por página no estado; links opcionais.', 'Page and page size in state; optional links.', 'Página y elementos por página en el estado; enlaces opcionales.')],
      ['Stepper', 'Navigation.tsx', '/componentes/stepper', '0.28', L('Etapas, a atual e volta às feitas com onChange.', 'Steps, the current one, and going back with onChange.', 'Etapas, la actual y volver a las hechas con onChange.')],
      ['Accordion', 'Navigation.tsx', '/componentes/acordeao', '0.28', L('Sobre details nativo; single deixa um aberto por vez.', 'Built on native details; single keeps one open at a time.', 'Sobre details nativo; single deja uno abierto a la vez.')],
      ['Tree', 'Navigation.tsx', '/componentes/arvore', '0.28', L('Níveis aninhados, com teclado e o item escolhido.', 'Nested levels, with keyboard and the selected item.', 'Niveles anidados, con teclado y el ítem elegido.')],
      ['useScrollbars', 'Navigation.tsx', '/componentes/barra-de-rolagem', '0.28', L('Liga a barra de rolagem sobreposta no app inteiro.', 'Turns on the overlay scrollbar for the whole app.', 'Activa la barra de desplazamiento superpuesta en toda la app.')],
      ['BackToTop', 'Navigation.tsx', '/componentes/voltar-ao-topo', '0.28', L('Botão preso ao canto da área que rola.', 'A button pinned to the corner of the scrolling area.', 'Botón fijo en la esquina del área que se desplaza.')],
    ],
  },
  {
    title: L('Camadas', 'Layers', 'Capas'),
    items: [
      ['Modal', 'Layers.tsx', '/componentes/modal', '0.28', L('open e onClose com o valor da ação; foco preso e Esc pelo dialog nativo.', 'open and onClose with the action value; focus trap and Esc from the native dialog.', 'open y onClose con el valor de la acción; foco atrapado y Esc por el dialog nativo.')],
      ['Drawer', 'Layers.tsx', '/componentes/gaveta-lateral', '0.28', L('O mesmo Modal, entrando pela borda.', 'The same Modal, sliding in from the edge.', 'El mismo Modal, entrando por el borde.')],
      ['Popover', 'Layers.tsx', '/componentes/popover', '0.28', L('Conteúdo em React preso ao gatilho.', 'React content pinned to the trigger.', 'Contenido en React fijo al disparador.')],
      ['ContextMenu', 'Layers.tsx', '/componentes/menu-de-contexto', '0.28', L('Botão direito, Shift+F10 ou toque longo numa área.', 'Right click, Shift+F10 or long press in an area.', 'Clic derecho, Shift+F10 o toque largo en un área.')],
      ['Tooltip', 'Layers.tsx', '/componentes/tooltip', '0.28', L('Envolve um elemento; aceita posição e atalho.', 'Wraps an element; takes a placement and a shortcut.', 'Envuelve un elemento; acepta posición y atajo.')],
      ['toast', 'toast.js', '/componentes/toast', '0.28', L('Função, não componente: toast(texto, opções).', 'A function, not a component: toast(text, options).', 'Función, no componente: toast(texto, opciones).')],
      ['useDisclosure', 'Layers.tsx', null, '0.28', L('Aberto, fechado e as funções, para Modal e Drawer.', 'Open, closed and the functions, for Modal and Drawer.', 'Abierto, cerrado y las funciones, para Modal y Drawer.')],
    ],
  },
  {
    title: L('Feedback e carregamento', 'Feedback and loading', 'Feedback y carga'),
    items: [
      ['Badge', 'Badge.tsx', '/componentes/badge', '0.26', L('Seis tons, ponto e contador.', 'Six tones, dot and counter.', 'Seis tonos, punto y contador.')],
      ['Alert', 'Alert.tsx', '/componentes/alerta', '0.26', L('Tom com o ícone certo, ações e o × (onClose).', 'Tone with the right icon, actions and the × (onClose).', 'Tono con el ícono correcto, acciones y la × (onClose).')],
      ['Banner', 'Notices.tsx', '/componentes/banner-de-anuncio', '0.35', L('Tom, título e texto; closable com id lembra no navegador que foi fechado.', 'Tone, title, and text; closable with an id remembers in the browser that it was closed.', 'Tono, título y texto; closable con id recuerda en el navegador que se cerró.')],
      ['NotificationCenter', 'Notices.tsx', '/componentes/central-de-notificacoes', '0.35', L('O sino com o número; items no estado e onChange para o que foi lido. Ids novos são anunciados.', 'The bell with the count; items in state and onChange for what was read. New ids are announced.', 'La campana con el número; items en el estado y onChange para lo leído. Los ids nuevos se anuncian.')],
      ['Progress', 'Loading.tsx', '/componentes/barra-de-progresso', '0.26', L('Barra com rótulo e porcentagem; sem valor, indeterminada.', 'Bar with label and percentage; without a value, indeterminate.', 'Barra con etiqueta y porcentaje; sin valor, indeterminada.')],
      ['ProgressRing', 'Loading.tsx', '/componentes/progresso-circular', '0.34', L('Anel com a porcentagem; sem valor, indeterminado. Três tamanhos e os tons da barra.', 'Ring with the percentage; without a value, indeterminate. Three sizes and the bar’s tones.', 'Anillo con el porcentaje; sin valor, indeterminado. Tres tamaños y los tonos de la barra.')],
      ['Spinner', 'Loading.tsx', '/componentes/spinner', '0.26', L('Três tamanhos, já com o rótulo "Carregando".', 'Three sizes, with the "Loading" label built in.', 'Tres tamaños, ya con la etiqueta "Cargando".')],
      ['Skeleton', 'Loading.tsx', '/componentes/skeleton', '0.26', L('Bloco, linha de texto e círculo.', 'Block, text line and circle.', 'Bloque, línea de texto y círculo.')],
    ],
  },
  {
    title: L('Conteúdo', 'Content', 'Contenido'),
    items: [
      ['Card · CardLink', 'Panel.tsx', '/componentes/card', '0.26', L('Superfície simples; CardLink é o card inteiro como link.', 'Simple surface; CardLink is the whole card as a link.', 'Superficie simple; CardLink es la tarjeta entera como enlace.')],
      ['Panel · Section', 'Panel.tsx', '/componentes/painel', '0.26', L('Cabeçalho, barra, corpo e rodapé na ordem certa, por props.', 'Header, toolbar, body and footer in the right order, through props.', 'Encabezado, barra, cuerpo y pie en el orden correcto, por props.')],
      ['Avatar · AvatarGroup', 'Avatar.tsx', '/componentes/avatar', '0.26', L('Iniciais e tom pelo nome, foto com volta às iniciais, status e "+N".', 'Initials and tone from the name, photo falling back to initials, status and "+N".', 'Iniciales y tono por el nombre, foto que vuelve a las iniciales, estado y "+N".')],
      ['Kbd', 'Content.tsx', '/componentes/tecla', '0.26', L('Uma tecla ou uma combinação (keys).', 'One key or a combination (keys).', 'Una tecla o una combinación (keys).')],
      ['DescriptionList', 'Content.tsx', '/componentes/lista-de-definicoes', '0.26', L('Pares de rótulo e valor a partir de uma lista.', 'Label and value pairs from a list.', 'Pares de etiqueta y valor a partir de una lista.')],
      ['Timeline', 'Content.tsx', '/componentes/linha-do-tempo', '0.26', L('Eventos com tom, ícone e data.', 'Events with tone, icon and date.', 'Eventos con tono, ícono y fecha.')],
      ['Breadcrumb', 'Content.tsx', '/componentes/breadcrumb', '0.26', L('Itens com link; renderLink para o link do seu roteador.', 'Items with links; renderLink for your router’s link.', 'Ítems con enlace; renderLink para el enlace de tu enrutador.')],
      ['Table', 'Table.tsx', '/componentes/tabela', '0.29', L('Colunas, ordenação e seleção no estado; vazio e carregando.', 'Columns, sorting and selection in state; empty and loading.', 'Columnas, orden y selección en el estado; vacío y cargando.')],
      ['Calendar', 'Calendar.tsx', '/componentes/calendario', '0.29', L('Mês, semana e dia, com eventos; visão e data no estado.', 'Month, week and day, with events; view and date in state.', 'Mes, semana y día, con eventos; vista y fecha en el estado.')],
      ['CodeBlock', 'Calendar.tsx', '/componentes/bloco-de-codigo', '0.29', L('Código com o botão de copiar.', 'Code with the copy button.', 'Código con el botón de copiar.')],
      ['Carousel', 'Carousel.tsx', '/componentes/carrossel', '0.30', L('Cada filho vira um slide; perView, peek, loop e autoplay com pausa. index e onChange no estado.', 'Each child becomes a slide; perView, peek, loop and autoplay with pause. index and onChange in state.', 'Cada hijo es una diapositiva; perView, peek, loop y autoplay con pausa. index y onChange en el estado.')],
      ['ResizablePanels', 'Resizable.tsx', '/componentes/paineis-redimensionaveis', '0.32', L('Um ResizablePanel por parte, com size, min, max e collapsible; as divisórias entram sozinhas. storageKey guarda o tamanho.', 'One ResizablePanel per part, with size, min, max and collapsible; dividers are added for you. storageKey keeps the size.', 'Un ResizablePanel por parte, con size, min, max y collapsible; los divisores se agregan solos. storageKey guarda el tamaño.')],
      ['Rating', 'Rating.tsx', '/componentes/avaliacao', '0.33', L('Dar nota, com name, value e onChange; RatingDisplay só mostra, com meia estrela.', 'Give a score, with name, value and onChange; RatingDisplay only shows one, with half stars.', 'Calificar, con name, value y onChange; RatingDisplay solo muestra, con media estrella.')],
      ['Toolbar', 'Toolbar.tsx', '/componentes/barra-de-ferramentas', '0.33', L('ToolbarGroup, ToolbarSeparator e ToolbarButton; pressed no estado e onToggle na barra.', 'ToolbarGroup, ToolbarSeparator and ToolbarButton; pressed in state and onToggle on the bar.', 'ToolbarGroup, ToolbarSeparator y ToolbarButton; pressed en el estado y onToggle en la barra.')],
      ['Divider', 'Link.tsx', '/componentes/divisor', '0.34', L('Horizontal, vertical, esmaecido ou com rótulo no meio ou no começo.', 'Horizontal, vertical, faded, or with a label in the middle or at the start.', 'Horizontal, vertical, difuminado o con etiqueta en el medio o al inicio.')],
    ],
  },
  {
    title: L('Gráficos', 'Charts', 'Gráficos'),
    items: [
      ['BarChart · LineChart · DonutChart', 'Charts.tsx', '/graficos/barras', '0.29', L('As opções do gráfico viram props; mudou, ele atualiza.', 'The chart options become props; when they change, it updates.', 'Las opciones del gráfico son props; si cambian, se actualiza.')],
      ['Heatmap · CalendarHeatmap · ScatterChart', 'Charts.tsx', '/graficos/heatmap', '0.29', L('Matriz, calendário de um ano e dispersão.', 'Matrix, a year calendar and scatter.', 'Matriz, calendario de un año y dispersión.')],
      ['StatTile · Sparkline · Meter', 'Charts.tsx', '/graficos/indicadores', '0.29', L('O número com variação, a linha de tendência e o medidor.', 'The number with change, the trend line and the meter.', 'El número con variación, la línea de tendencia y el medidor.')],
    ],
  },
  {
    title: L('App shell e tema', 'App shell and theme', 'App shell y tema'),
    items: [
      ['AppShell', 'AppShell.tsx', '/padroes/app-shell', '0.29', L('Sidebar que recolhe, gaveta no celular e topbar; onNavigate liga ao seu roteador.', 'Collapsing sidebar, drawer on phones and top bar; onNavigate hooks into your router.', 'Sidebar que se contrae, cajón en el móvil y barra superior; onNavigate se conecta a tu enrutador.')],
      ['ThemeToggle · useTheme', 'AppShell.tsx', '/fundamentos/cores', '0.29', L('O botão de claro e escuro e o tema em uso.', 'The light and dark button and the theme in use.', 'El botón de claro y oscuro y el tema en uso.')],
    ],
  },
];

/** Quantos dos 46 componentes do Lume já têm versão React (uma página de componente conta uma vez). */
export const reactCount = () => new Set(REACT_GROUPS().flatMap((g) => g.items.map((i) => i[2])).filter((r) => r?.startsWith('/componentes/'))).size;
