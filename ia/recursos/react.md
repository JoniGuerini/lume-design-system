# Usar com React

Seção do Lume: Recursos. Página: https://lumeui.dev/#/recursos/react

Componentes .tsx para copiar no projeto, por cima do mesmo CSS e JavaScript do Lume. Sem pacote para instalar: a pasta vem no zip de cada versão.

Em números: dos 46 componentes: 46 · React: 18+ · dependências: 0.

## Instalar

Baixe o zip da versão 0.31, descompacte e leve a pasta para dentro de `src/` com o nome `lume`. Os componentes estão em `lume/react/` e importam o JavaScript e os ícones da própria pasta. Funciona com Vite, Next.js e qualquer projeto React 18 ou mais novo.

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

Importe o `lume.css` uma vez, na entrada do app, e os componentes de `./lume/react`.

```html
import { createRoot } from 'react-dom/client';
import './lume/lume.css';
import { initTheme } from './lume/lume.js';
import { App } from './App';

initTheme();
createRoot(document.getElementById('root')!).render(<App />);
```

```html
import { useState } from 'react';
import { Alert, Badge, Button, Panel } from './lume/react';

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

Com uma IA: aponte para `https://lumeui.dev/llms.txt` e diga que o projeto usa os componentes de `lume/react`.

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
| `IconButton` | Só o ícone; o rótulo para leitores de tela é obrigatório. | IconButton.tsx |
| `InlineAction` | Ação mínima no meio do conteúdo ("Na cena +"). | InlineAction.tsx |
| `Chip · RemovableChip · ChipGroup` | Filtro (pressed), seletor (chevron) e removível (onRemove). | Chip.tsx |

### Formulários

| Componente | O que faz | Arquivo |
| --- | --- | --- |
| `Field · Input · Textarea · TextField` | Rótulo, dica, erro e contador ligados ao controle; TextField junta tudo. | Field.tsx |
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
| `Progress` | Barra com rótulo e porcentagem; sem valor, indeterminada. | Loading.tsx |
| `Spinner` | Três tamanhos, já com o rótulo "Carregando". | Loading.tsx |
| `Skeleton` | Bloco, linha de texto e círculo. | Loading.tsx |

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
| `Calendar` | Mês, semana e dia, com eventos; visão e data no estado. | Calendar.tsx |
| `CodeBlock` | Código com o botão de copiar. | Calendar.tsx |
| `Carousel` | Cada filho vira um slide; perView, peek, loop e autoplay com pausa. index e onChange no estado. | Carousel.tsx |

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
| `ThemeToggle · useTheme` | O botão de claro e escuro e o tema em uso. | AppShell.tsx |

## Como funciona

|   |   |
| --- | --- |
| Uma camada fina | Cada componente só monta a marcação do Lume, com as mesmas classes. O visual vem do `lume.css`; corrigiu lá, corrigiu no React. |
| Seus arquivos | Os .tsx ficam no seu projeto, como no shadcn: dá para ler, mudar e apagar o que não usar. Nada de npm. |
| TypeScript | Props tipadas e comentadas, com o link da página de cada componente. `IconName` lista os 132 ícones: nome errado não compila. |
| Idioma | Os textos que o componente escreve sozinho ("Fechar", "Carregando") seguem o idioma do Lume e mudam com `setLocale`. `useLocale()` faz o mesmo nos seus. |
| Versões | A pasta `react/` vai em cada linha: `/v/0.31/react/`. Atualizar é trocar a pasta do Lume pela da linha nova. |

## O que vem

Os 46 componentes já estão em React.
