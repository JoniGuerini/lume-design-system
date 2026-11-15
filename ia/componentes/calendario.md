# Calendário

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/calendario

Mês, semana e dia na mesma peça, com eventos. Datas, nomes e o primeiro dia da semana vêm do idioma — e dá para usar inteiro pelo teclado.

Em números: visões: 3 · tons de evento: 6 · semana começa: domingo · dependências: 0.

## Exemplo

```html
import { createCalendar } from 'https://lumeui.dev/v/1.2/lume.js';

createCalendar(document.querySelector('#agenda'), {
  events: [
    { id: 'roteiro', title: 'Revisão do roteiro', start, end, tone: 'brand' },
    { id: 'evento', title: 'Evento de lançamento', start, end, allDay: true, tone: 'success' },
  ],
  onEventClick: (event) => abrir(event.id),
});
```

## Eventos

Três formas, conforme a duração, e seis tons. O tom nunca é a única pista: o título diz o que é.

Com horário — No mês, uma linha: ponto no tom, hora e título. Na semana e no dia, um bloco do tamanho da duração.

Dia todo — Uma barra preenchida, no topo do dia — no mês e na faixa “Dia todo” da semana. Pode durar vários dias.

Ao mesmo tempo — Eventos que se sobrepõem dividem a coluna. No mês, até três por dia; o resto vira “+2 outros”, que abre o dia.

### Tons tone

O padrão: compromisso comum.

O que é seu ou está em foco.

Reuniões e conversas.

Concluído, feriado, lançamento.

Prazo chegando.

Atrasado ou cancelado.

Marcação dos exemplos desta seção:

```html
<span class="ds-calendar__item ds-calendar__item--brand"><span class="ds-calendar__dot"></span><span class="ds-calendar__item-time">10:00</span><span class="ds-calendar__item-title">Revisão do roteiro</span></span>

<span class="ds-calendar__event ds-calendar__event--brand"><span class="ds-calendar__event-title">Revisão do roteiro</span><span class="ds-calendar__event-time">10:00</span></span>

<span class="ds-calendar__chip ds-calendar__chip--success">Evento de lançamento</span>

<span class="ds-calendar__event ds-calendar__event--brand"><span class="ds-calendar__event-title">Roteiro</span><span class="ds-calendar__event-time">10:00</span></span>

<span class="ds-calendar__event ds-calendar__event--info"><span class="ds-calendar__event-title">Café</span><span class="ds-calendar__event-time">10:30</span></span>

<span class="ds-calendar__event ds-calendar__event--neutral"><span class="ds-calendar__event-title">Neutro</span><span class="ds-calendar__event-time">'neutral'</span></span>

<span class="ds-calendar__event ds-calendar__event--brand"><span class="ds-calendar__event-title">Marca</span><span class="ds-calendar__event-time">'brand'</span></span>

<span class="ds-calendar__event ds-calendar__event--info"><span class="ds-calendar__event-title">Info</span><span class="ds-calendar__event-time">'info'</span></span>
```

## Acessibilidade

O mês é uma grade de verdade (role="grid"): um só ponto de parada no Tab, e as setas andam pelos dias.

- Cada dia diz o que tem — O leitor de tela ouve “quarta-feira, 4 de novembro, hoje, 6 eventos” — nunca só “4”.
- Hoje marcado — O dia de hoje tem `aria-current="date"`, além do círculo na cor da marca.
- Eventos com nome completo — Na semana e no dia, cada evento é um botão com título, horário e dia. No mês, Enter abre o dia, onde os eventos são botões.
- O título avisa a troca — Ao trocar de mês, semana ou dia, o título (`aria-live="polite"`) é lido de novo.
- Tom nunca sozinho — A cor ajuda a agrupar, mas o título do evento é o que conta. O texto do evento passa de 4,5:1 sobre o fundo do tom.

### Teclado no mês

|   |   |
| --- | --- |
| ← → | Dia anterior ou seguinte |
| ↑ ↓ | Mesma data na semana anterior ou seguinte |
| Home End | Começo ou fim da semana |
| PageUp PageDown | Mês anterior ou seguinte |
| Enter | Abre o dia |

## API

Um elemento vazio e `createCalendar`. O componente desenha tudo dentro dele.

| Opção | Tipo | Padrão | Para quê |
| --- | --- | --- | --- |
| `view` | 'month' \| 'week' \| 'day' | 'month' | Visão inicial. |
| `date` | Date | hoje | Dia em foco: define o mês, a semana ou o dia que aparece. |
| `events` | { id, title, start, end, allDay?, tone? }[] | [] | Fim exclusivo: 9:00 às 10:00 termina em 10:00; dia todo termina à meia-noite seguinte. |
| `weekStartsOn` | 0 \| 1 | o do idioma | 0 = domingo, 1 = segunda. |
| `views` | string[] | ['month', 'week', 'day'] | As visões do seletor. Com uma só, o seletor some. |
| `scrollToHour` | number | 8 | Hora em que a grade de horas abre. |
| `onEventClick` | (event) => void | — | Clique num evento. Sem ela, clicar no mês abre o dia. |
| `onDateClick` | (date) => void | abre o dia | Clique ou Enter num dia do mês. |
| `onChange` | ({ view, date }) => void | — | Mudou a visão ou o período. |

### Métodos

|   |   |
| --- | --- |
| `setView(view) · setDate(date)` | Troca a visão ou o dia em foco. |
| `today() · prev() · next()` | Volta para hoje ou anda um período. |
| `setEvents(list)` | Troca os eventos e redesenha. |
| `view · date` | A visão e o dia atuais (só leitura). |
| `destroy()` | Desliga tudo e limpa o elemento. |

### Altura CSS

```html
.agenda {
  --ds-calendar-hour: 48px;    /* altura de uma hora */
  --ds-calendar-height: 600px; /* altura da grade de horas */
  --ds-calendar-cell: 112px;   /* altura mínima do dia no mês */
}
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Tokens usados

Superfícies e linhas do sistema; os tons dos eventos são os mesmos do Badge e do Alerta.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fundo | #FFFFFF | #24221F |
| color.bg.sunken (`--ds-color-bg-sunken`) | Dias de fora do mês | #E8EDF3 | #151412 |
| color.border.subtle (`--ds-color-border-subtle`) | Linhas da grade | #3E516624 | #FFFFFF0F |
| color.brand.solid (`--ds-color-brand-solid`) | Círculo de hoje | #3E5166 | #C0CAD6 |
| color.brand.indicator (`--ds-color-brand-indicator`) | Linha de agora | #C97B63 | #DE9680 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Evento no tom da marca | #EEF2F6 | #C0CAD624 |
| color.info.subtle (`--ds-color-info-subtle`) | Evento no tom info | #F0F8FF | #6ABCFF21 |
| text.heading-md (`--ds-text-heading-md`) | Título | 21/28 · regular | 21/28 · regular |
| text.caption (`--ds-text-caption`) | Dias da semana, horas e eventos | 12/16 · regular | 12/16 · regular |
| radius.xl (`--ds-radius-xl`) | Cantos | 20 px | 20 px |

## Uso

O calendário mostra o tempo. Para escolher uma data num formulário, um campo de data basta.

- **Faça:** abra na visão da tarefa. Agenda do dia abre no dia; planejamento, na semana; visão geral, no mês. Guarde a última escolha com onChange.
- **Evite:** um tom para cada evento. Cor demais vira ruído. Use o neutro como padrão e os tons para o que pede atenção: prazo, foco, cancelado.
- **Dica:** Títulos curtos. No mês cabe pouco: “Revisão do roteiro”, não “Reunião para revisar o roteiro do vídeo”. O detalhe vai no clique.
