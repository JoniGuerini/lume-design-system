# Tabela de dados

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/tabela-de-dados

A Tabela com o estado dentro: busca, filtros, ordem, páginas, seleção com ações em lote, colunas, densidade, edição na célula e CSV. Para só mostrar dados, a Tabela basta.

Em números: recursos: 10 · densidades: 2 · edição: 3 tipos · dependências: 0.

## Ao vivo

Os componentes do próprio Lume. Busque com /, filtre, ordene, marque algumas linhas, edite o status e o responsável e abra o menu … de uma linha.

## Recursos

Cada um liga com uma opção. Sem ela, a parte não aparece.

- Busca `search: { shortcut: '/' }` — Olha todas as colunas (ou só as que você disser), sem acento e sem maiúscula.
- Filtros `filters` — Um Chip por filtro, com caixas de marcar e quantas linhas cada opção traria.
- Ordem `sortable` — Crescente, decrescente e de volta à ordem original.
- Colunas `hideable · hidden · width` — Escolher as visíveis; com largura, elas não pulam ao trocar de página.
- Densidade `density: 'compact'` — Linhas de 52 ou de 40 px.
- Lote `bulkActions` — Marcou, a barra de ações em lote toma o lugar da barra de ferramentas. Shift marca um intervalo.
- Ações da linha `rowActions` — O botão … abre o Menu. Aparece com o mouse, o foco ou a linha ativa; no toque, sempre.
- Linha ativa `onRowClick · activeKey` — Clique ou Enter abre a linha; a ativa ganha o fundo selecionado e o fio do indicador.
- Edição na célula `edit: { type: 'text' | 'currency' | 'select' }` — O valor vira campo ou menu. Enter salva, Esc desfaz; uma Promise mostra o “salvando”.
- CSV `exportCsv` — Exporta o que está filtrado, ou só as marcadas. Separador ; quando o idioma usa vírgula decimal.

## Código

No HTML, `render` devolve HTML em texto; no React, `DataTable` recebe JSX. As opções são as mesmas. Depois de salvar uma célula, quem é dono dos dados manda a lista nova.

```html
<div id="clientes"></div>

<script type="module">
  import { createDataTable } from 'https://lumeui.dev/v/1.14/lume.js';

  const tabela = createDataTable(document.querySelector('#clientes'), {
    caption: 'Clientes',
    rows: clientes,
    rowKey: (c) => c.id,
    rowLabel: (c) => c.nome,
    columns: [
      { key: 'nome', label: 'Nome', sortable: true, strong: true },
      { key: 'valor', label: 'Valor', num: true, sortable: true, width: 140,
        render: (c) => brl(c.valor),
        edit: { type: 'currency', onSave: (c, valor) => salvar(c.id, { valor }) } },
    ],
    filters: [{ key: 'freq', label: 'Frequência', options, value: (c) => c.freq }],
    search: { shortcut: '/' },
    rowActions: [{ value: 'abrir', label: 'Abrir ficha' }],
    onRowAction: (value, cliente) => …,
    bulkActions: [{ value: 'presenca', label: 'Marcar presença' }],
    onBulkAction: (value, lista) => …,
    onRowClick: (cliente) => tabela.setActive(cliente.id),
    exportCsv: { fileName: 'clientes' },
  });
  // depois de salvar: tabela.setRows(listaNova);
</script>

// React
<DataTable
  caption="Clientes"
  rows={clientes}
  rowKey={(c) => c.id}
  columns={colunas}
  filters={filtros}
  search={{ shortcut: '/' }}
  bulkActions={[{ value: 'presenca', label: 'Marcar presença' }]}
  onBulkAction={(value, lista) => …}
  onRowClick={(c) => setAberto(c.id)}
  activeKey={aberto}
/>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Uma tabela de verdade, com cada controle nomeado.

- Nome da tabela — O título nomeia a tabela (`aria-labelledby`); ordem em `aria-sort`.
- Linhas com nome — `rowLabel` dá nome aos controles de cada linha: “Selecionar Botão”, “Ações de Botão”, “Editar status de Botão”.
- Linha clicável — Tab Enter — Recebe foco com Tab e abre com Enter; a ativa leva aria-current.
- Mudanças ditas — O intervalo e as linhas marcadas ficam em regiões de status: o leitor de tela ouve “1–10 de 24” e “3 selecionadas”.
- Edição pelo teclado — Enter Esc — Enter salva, Esc desfaz e devolve o foco ao valor.

## Tokens usados

Além dos da Tabela, da Paginação e do Chip.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Cartão | #FFFFFF | #24221F |
| color.bg.inverse (`--ds-color-bg-inverse`) | Barra de lote | #2B3847 | #F3EDE5 |
| color.bg.selected (`--ds-color-bg-selected`) | Linhas marcadas e a ativa | #3E516612 | #C0CAD61A |
| color.brand.indicator (`--ds-color-brand-indicator`) | Fio da linha ativa | #C97B63 | #DE9680 |
| radius.xl (`--ds-radius-xl`) | Cantos do cartão | 20 px | 20 px |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** listas de trabalho. Clientes, sessões, pedidos: dados que a pessoa procura, filtra e muda.
- **Evite:** tabela para mostrar. Cinco linhas fixas não pedem busca nem filtro. Use a Tabela.
- **Dica:** Muitos dados?. Até alguns milhares de linhas, a conta é no navegador. Acima disso, busque no servidor e use onStateChange para pedir a página certa.
