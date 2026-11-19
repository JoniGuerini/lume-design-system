# Usar com React

Seção do Lume: Recursos. Página: https://lumeui.dev/#/recursos/react

Componentes React por cima do mesmo CSS e JavaScript do Lume, já compilados e com tipos. Instale pelo npm ou, se preferir os arquivos no projeto, copie os .tsx.

Em números: dos 67 componentes: 67 · React: 18+ · dependências: 0.

## Instalar

Um pacote só traz o CSS, o JavaScript e os componentes React, já compilados e com tipos. Funciona com Vite, Next.js e qualquer projeto React 18 ou mais novo.

```html
npm install @joniguerini/lume
```

### Prefere os arquivos no projeto?

Como no shadcn: baixe o zip da versão 1.13 e leve a pasta para `src/` com o nome `lume`, ou rode `npx @joniguerini/lume init`. Os componentes ficam em `lume/react/`, em .tsx, para ler e mudar à vontade; aí os imports passam a ser `./lume/react`.

```html
src/
  lume/                 ← a pasta do zip, inteira
    lume.css
    lume.js
    js/  icons/  fonts/
    react/              ← os componentes .tsx
  main.tsx
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Usar

Importe o `lume.css` uma vez, na entrada do app, e os componentes de `@joniguerini/lume/react`. No Next.js, o CSS vai no layout raiz; os componentes já chegam marcados para o cliente.

```html
import { createRoot } from 'react-dom/client';
import '@joniguerini/lume/lume.css';
import { initTheme } from '@joniguerini/lume';
import { App } from './App';

initTheme();
createRoot(document.getElementById('root')!).render(<App />);
```

```html
import { useState } from 'react';
import { Alert, Badge, Button, Panel } from '@joniguerini/lume/react';

export function App() {
  const [saving, setSaving] = useState(false);
  return (
    <Panel eyebrow="Pedido" title="Pedido #1042" actions={<Badge tone="success" dot>Pago</Badge>}>
      <Alert tone="info" title="Entrega prevista para sexta" />
      <Button variant="primary" icon="check" busy={saving} onClick={() => setSaving(true)}>
        {saving ? 'Salvando' : 'Confirmar'}
      </Button>
    </Panel>
  );
}
```

Com uma IA: aponte para `https://lumeui.dev/llms.txt` e diga que o projeto usa os componentes de `@joniguerini/lume/react`.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Componentes

O que já está em React. Cada nome leva à página do componente, onde estão os usos, as variantes e a acessibilidade, que valem igual aqui.

### Base

| Componente | O que faz | Arquivo |
| --- | --- | --- |
| `Icon` | Os 132 ícones, com o nome checado pelo TypeScript. | Icon.tsx |
| `useLocale` | O idioma do Lume; redesenha quando ele muda. | useLocale.ts |
| `cx` | Junta classes, ignorando o que for falso. | cx.ts |

### Ações

| Componente | O que faz | Arquivo |
| --- | --- | --- |
| `Button · ButtonLink` | Variante, tamanho, ícones e ocupado (busy). ButtonLink é o mesmo visual num link. | Button.tsx |
| `SplitButton` | A ação principal e a seta com as alternativas num Menu. | Button.tsx |
| `IconButton` | Só o ícone; o rótulo para leitores de tela é obrigatório. | IconButton.tsx |
| `InlineAction` | Ação mínima no meio do conteúdo ("Na cena +"). | InlineAction.tsx |
| `Link` | No texto ou solto (variant), apagado (muted) e externo, com ícone e aviso de nova aba. | Link.tsx |
| `Chip · RemovableChip · ChipGroup` | Filtro (pressed), seletor (chevron) e removível (onRemove). | Chip.tsx |

### Formulários

| Componente | O que faz | Arquivo |
| --- | --- | --- |
| `Field · Input · Textarea · TextField` | Rótulo, dica, erro e contador ligados ao controle; TextField junta tudo. | Field.tsx |
| `PasswordField` | Senha com mostrar e esconder (aria-pressed). | Field.tsx |
| `SearchField` | Busca com limpar, Esc e atalho de teclado. | Field.tsx |
| `CurrencyField` | Dinheiro formatado no idioma; o estado e o formulário recebem o número. | Field.tsx |
| `FieldGroup` | Um rótulo, dica e erro para vários controles, cada um com o próprio id. | Field.tsx |
| `Select` | Uma ou várias opções, com grupos, busca e limite. | Select.tsx |
| `Checkbox · Radio · RadioGroup · CheckboxGroup` | Opções soltas ou em grupo, com o valor controlado. | Choice.tsx |
| `Switch` | Liga e desliga, com descrição e dois tamanhos. | Choice.tsx |
| `DatePicker` | Data ou período, valor em Date; o formulário recebe ISO. | Pickers.tsx |
| `TimePicker` | Horário em HH:MM, com lista e digitação livre. | Pickers.tsx |
| `ColorPicker · ColorField` | O seletor solto e o campo que o abre; o hexadecimal fica no estado. | ColorPicker.tsx |
| `NumberField` | Número com − e +, limites e formato (moeda, porcentagem). | Pickers.tsx |
| `Slider` | Um valor ou uma faixa; onChange enquanto arrasta, onCommit ao soltar. | Controls.tsx |
| `TagField` | Lista de valores livres, com limite e validação. | Pickers.tsx |
| `FileUpload` | Arrastar ou escolher, com envio, progresso e erro por arquivo. | Controls.tsx |
| `OtpField` | Uma casa por dígito; onComplete na última. | Controls.tsx |
| `RichTextEditor` | label, value e onChange com o HTML limpo; tools, placeholder, name e disabled. O editor é dono do próprio DOM. | Editor.tsx |
| `Form` | A validação do Lume, com regras próprias e o resumo de erros. | Form.tsx |

### Navegação

| Componente | O que faz | Arquivo |
| --- | --- | --- |
| `Menu` | Liga a lista a qualquer gatilho (triggerRef): escolha ou ações. | Navigation.tsx |
| `Tabs` | Abas ARIA com setas, Home e End; sublinhadas ou segmentadas. | Navigation.tsx |
| `SegmentedControl` | Poucas opções lado a lado, uma escolhida. | Navigation.tsx |
| `Pagination` | Página e itens por página no estado; links opcionais. | Navigation.tsx |
| `Stepper` | Etapas, a atual e volta às feitas com onChange. | Navigation.tsx |
| `Accordion` | Sobre details nativo; single deixa um aberto por vez. | Navigation.tsx |
| `Tree` | Níveis aninhados, com teclado e o item escolhido. | Navigation.tsx |
| `useScrollbars` | Liga a barra de rolagem sobreposta no app inteiro. | Navigation.tsx |
| `BackToTop` | Botão preso ao canto da área que rola. | Navigation.tsx |

### Camadas

| Componente | O que faz | Arquivo |
| --- | --- | --- |
| `Modal` | open e onClose com o valor da ação; foco preso e Esc pelo dialog nativo. | Layers.tsx |
| `Drawer` | O mesmo Modal, entrando pela borda. | Layers.tsx |
| `Popover` | Conteúdo em React preso ao gatilho. | Layers.tsx |
| `ContextMenu` | Botão direito, Shift+F10 ou toque longo numa área. | Layers.tsx |
| `Tooltip` | Envolve um elemento; aceita posição e atalho. | Layers.tsx |
| `toast` | Função, não componente: toast(texto, opções). | toast.js |
| `useDisclosure` | Aberto, fechado e as funções, para Modal e Drawer. | Layers.tsx |

### Feedback e carregamento

| Componente | O que faz | Arquivo |
| --- | --- | --- |
| `Badge` | Seis tons, ponto e contador. | Badge.tsx |
| `Alert` | Tom com o ícone certo, ações e o × (onClose). | Alert.tsx |
| `Banner` | Tom, título e texto; closable com id lembra no navegador que foi fechado. | Notices.tsx |
| `NotificationCenter` | O sino com o número; items no estado e onChange para o que foi lido. Ids novos são anunciados. | Notices.tsx |
| `Progress` | Barra com rótulo e porcentagem; sem valor, indeterminada. | Loading.tsx |
| `ProgressRing` | Anel com a porcentagem; sem valor, indeterminado. Três tamanhos e os tons da barra. | Loading.tsx |
| `Spinner` | Três tamanhos, já com o rótulo "Carregando". | Loading.tsx |
| `Skeleton` | Bloco, linha de texto e círculo. | Loading.tsx |
| `EmptyState` | O que falta, por quê e o próximo passo; tamanhos, tons e sem contorno. | EmptyState.tsx |

### Conteúdo

| Componente | O que faz | Arquivo |
| --- | --- | --- |
| `Card · CardLink` | Superfície simples; CardLink é o card inteiro como link. | Panel.tsx |
| `Panel · Section` | Cabeçalho, barra, corpo e rodapé na ordem certa, por props. | Panel.tsx |
| `Avatar · AvatarGroup` | Iniciais e tom pelo nome, foto com volta às iniciais, status e "+N". | Avatar.tsx |
| `Kbd` | Uma tecla ou uma combinação (keys). | Content.tsx |
| `DescriptionList` | Pares de rótulo e valor a partir de uma lista. | Content.tsx |
| `Timeline` | Eventos com tom, ícone e data. | Content.tsx |
| `Breadcrumb` | Itens com link; renderLink para o link do seu roteador. | Content.tsx |
| `Table` | Colunas, ordenação e seleção no estado; vazio e carregando. | Table.tsx |
| `DataTable` | Busca, filtros, ordem, páginas, lote, colunas, densidade, edição na célula e CSV. | DataTable.tsx |
| `Calendar` | Mês, semana e dia, com eventos; visão e data no estado. | Calendar.tsx |
| `CodeBlock` | Código com o botão de copiar. | Calendar.tsx |
| `Carousel` | Cada filho vira um slide; perView, peek, loop e autoplay com pausa. index e onChange no estado. | Carousel.tsx |
| `ResizablePanels` | Um ResizablePanel por parte, com size, min, max e collapsible; as divisórias entram sozinhas. storageKey guarda o tamanho. | Resizable.tsx |
| `Rating` | Dar nota, com name, value e onChange; RatingDisplay só mostra, com meia estrela. | Rating.tsx |
| `Toolbar` | ToolbarGroup, ToolbarSeparator e ToolbarButton; pressed no estado e onToggle na barra. | Toolbar.tsx |
| `Divider` | Horizontal, vertical, esmaecido ou com rótulo no meio ou no começo. | Link.tsx |
| `ImageGallery` | Miniaturas que abrem o visualizador; images com src, thumb, alt e caption. openImageViewer abre de qualquer lugar. | ImageViewer.tsx |
| `SortableList` | items com id, renderItem e onChange com a nova ordem; handle, plain e orientation. | Sortable.tsx |
| `Kanban` | columns com items, renderCard e onChange com as colunas já atualizadas; handle para cartões com links. | Sortable.tsx |

### Gráficos

| Componente | O que faz | Arquivo |
| --- | --- | --- |
| `BarChart · LineChart · DonutChart` | As opções do gráfico viram props; mudou, ele atualiza. | Charts.tsx |
| `Heatmap · CalendarHeatmap · ScatterChart` | Matriz, calendário de um ano e dispersão. | Charts.tsx |
| `StatTile · Sparkline · Meter` | O número com variação, a linha de tendência e o medidor. | Charts.tsx |

### App shell e tema

| Componente | O que faz | Arquivo |
| --- | --- | --- |
| `AppShell` | Sidebar que recolhe, gaveta no celular e topbar; onNavigate liga ao seu roteador. | AppShell.tsx |
| `AppShell · sidebar` | A sidebar do AppShell: grupos de nav, item atual por activeHref, recolhida e gaveta. | AppShell.tsx |
| `AppShell layout="navbar"` | Os mesmos grupos no topo, com um menu por grupo e o Mais quando falta espaço. | AppShell.tsx |
| `ThemeToggle · useTheme` | O botão de claro e escuro e o tema em uso. | AppShell.tsx |

## Como funciona

|   |   |
| --- | --- |
| Uma camada fina | Cada componente só monta a marcação do Lume, com as mesmas classes. O visual vem do `lume.css`; corrigiu lá, corrigiu no React. |
| Seus arquivos | Pelo npm, vêm compilados e com tipos. Copiados, os .tsx ficam no seu projeto, como no shadcn: dá para ler, mudar e apagar o que não usar. |
| TypeScript | Props tipadas e comentadas, com o link da página de cada componente. `IconName` lista os 175 ícones: nome errado não compila. |
| Idioma | Os textos que o componente escreve sozinho ("Fechar", "Carregando") seguem o idioma do Lume e mudam com `setLocale`. `useLocale()` faz o mesmo nos seus. |
| Versões | Pelo npm, atualizar é `npm update @joniguerini/lume`; a versão do pacote é a do Lume. Copiado, a pasta `react/` vai em cada linha (`/v/1.13/react/`) e atualizar é trocar a pasta. |

## O que vem

Os 67 componentes já estão em React.
