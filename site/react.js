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
      ['Icon', 'Icon.tsx', '/fundamentos/icones', '0.26', L('Os 130 ícones, com o nome checado pelo TypeScript.', 'The 130 icons, with the name checked by TypeScript.', 'Los 130 íconos, con el nombre comprobado por TypeScript.')],
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
      ['NumberField', 'Pickers.tsx', '/componentes/campo-numerico', '0.27', L('Número com − e +, limites e formato (moeda, porcentagem).', 'Number with − and +, limits and format (currency, percent).', 'Número con − y +, límites y formato (moneda, porcentaje).')],
      ['Slider', 'Controls.tsx', '/componentes/slider', '0.27', L('Um valor ou uma faixa; onChange enquanto arrasta, onCommit ao soltar.', 'A value or a range; onChange while dragging, onCommit on release.', 'Un valor o un rango; onChange mientras arrastras, onCommit al soltar.')],
      ['TagField', 'Pickers.tsx', '/componentes/campo-de-tags', '0.27', L('Lista de valores livres, com limite e validação.', 'A list of free values, with a limit and validation.', 'Lista de valores libres, con límite y validación.')],
      ['FileUpload', 'Controls.tsx', '/componentes/upload', '0.27', L('Arrastar ou escolher, com envio, progresso e erro por arquivo.', 'Drag or pick, with upload, progress and per-file errors.', 'Arrastrar o elegir, con envío, progreso y error por archivo.')],
      ['OtpField', 'Controls.tsx', '/componentes/codigo-de-verificacao', '0.27', L('Uma casa por dígito; onComplete na última.', 'One box per digit; onComplete on the last one.', 'Una casilla por dígito; onComplete en la última.')],
      ['Form', 'Form.tsx', '/padroes/formularios', '0.27', L('A validação do Lume, com regras próprias e o resumo de erros.', 'Lume’s validation, with custom rules and the error summary.', 'La validación de Lume, con reglas propias y el resumen de errores.')],
    ],
  },
  {
    title: L('Feedback e carregamento', 'Feedback and loading', 'Feedback y carga'),
    items: [
      ['Badge', 'Badge.tsx', '/componentes/badge', '0.26', L('Seis tons, ponto e contador.', 'Six tones, dot and counter.', 'Seis tonos, punto y contador.')],
      ['Alert', 'Alert.tsx', '/componentes/alerta', '0.26', L('Tom com o ícone certo, ações e o × (onClose).', 'Tone with the right icon, actions and the × (onClose).', 'Tono con el ícono correcto, acciones y la × (onClose).')],
      ['Progress', 'Loading.tsx', '/componentes/barra-de-progresso', '0.26', L('Barra com rótulo e porcentagem; sem valor, indeterminada.', 'Bar with label and percentage; without a value, indeterminate.', 'Barra con etiqueta y porcentaje; sin valor, indeterminada.')],
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
    ],
  },
];

/** Quantos dos 44 componentes do Lume já têm versão React (uma página de componente conta uma vez). */
export const reactCount = () => new Set(REACT_GROUPS().flatMap((g) => g.items.map((i) => i[2])).filter((r) => r?.startsWith('/componentes/'))).size;
