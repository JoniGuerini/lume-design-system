# Abas

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/abas

Alternam entre vistas do mesmo assunto sem sair da página. Uma aba ativa por vez, sempre com o painel logo abaixo.

Em números: aparências: 2 · tamanhos: 2 · modos de ativação: 2 · atalhos de teclado: 4.

## Exemplo

```html
<div class="ds-tabs" data-ds-tabs>
  <div class="ds-tabs__list" role="tablist" aria-label="Projeto">
    <button type="button" class="ds-tabs__tab" role="tab" id="aba-geral" aria-controls="painel-geral" aria-selected="true">
      Visão geral
    </button>
    <button type="button" class="ds-tabs__tab" role="tab" id="aba-atividade" aria-controls="painel-atividade" aria-selected="false">
      Atividade
      <span class="ds-tabs__count">12</span>
    </button>
    <button type="button" class="ds-tabs__tab" role="tab" id="aba-arquivos" aria-controls="painel-arquivos" aria-selected="false">
      Arquivos
      <span class="ds-tabs__count">3</span>
    </button>
    <button type="button" class="ds-tabs__tab" role="tab" id="aba-ajustes" aria-controls="painel-ajustes" aria-selected="false">
      Ajustes
    </button>
  </div>
  <div class="ds-tabs__panel" role="tabpanel" id="painel-geral" aria-labelledby="aba-geral">…</div>
  <div class="ds-tabs__panel" role="tabpanel" id="painel-atividade" aria-labelledby="aba-atividade" hidden>…</div>
  <div class="ds-tabs__panel" role="tabpanel" id="painel-arquivos" aria-labelledby="aba-arquivos" hidden>…</div>
  <div class="ds-tabs__panel" role="tabpanel" id="painel-ajustes" aria-labelledby="aba-ajustes" hidden>…</div>
</div>
```

## Aparências

A sublinhada organiza seções de conteúdo; a segmentada troca a vista de uma mesma coisa. As duas vêm em médio e pequeno.

Sublinhada `ds-tabs` — Para seções de um mesmo objeto — perfil, projeto, configurações. Fica no topo do conteúdo, alinhada à esquerda.

Segmentada `ds-tabs--segmented` — Para alternar a vista de um mesmo conjunto — lista, quadro, agenda. Duas a quatro opções curtas.

Marcação dos exemplos desta seção:

```html
<div class="ds-tabs ds-tabs--segmented" data-ds-tabs="">
<div class="ds-tabs__list" role="tablist" aria-label="Visualização">
<button type="button" class="ds-tabs__tab" role="tab" id="ap-s-tab-lista" aria-controls="ap-s-panel-lista" aria-selected="true">
<ds-icon name="list"></ds-icon><span>Lista</span>
</button><button type="button" class="ds-tabs__tab" role="tab" id="ap-s-tab-quadro" aria-controls="ap-s-panel-quadro" aria-selected="false">
<ds-icon name="layout"></ds-icon><span>Quadro</span>
</button><button type="button" class="ds-tabs__tab" role="tab" id="ap-s-tab-agenda" aria-controls="ap-s-panel-agenda" aria-selected="false">
<ds-icon name="calendar"></ds-icon><span>Agenda</span>
</button>
</div>
<div class="ds-tabs__panel" role="tabpanel" id="ap-s-panel-lista" aria-labelledby="ap-s-tab-lista"><div>
<p>Lista</p>
<p>Itens em linhas, bom para comparar detalhes.</p>
</div></div><div class="ds-tabs__panel" role="tabpanel" id="ap-s-panel-quadro" aria-labelledby="ap-s-tab-quadro" hidden=""><div>
<p>Quadro</p>
<p>Itens em colunas por status, bom para acompanhar o fluxo.</p>
</div></div><div class="ds-tabs__panel" role="tabpanel" id="ap-s-panel-agenda" aria-labelledby="ap-s-tab-agenda" hidden=""><div>
<p>Agenda</p>
<p>Itens no calendário, bom para prazos.</p>
</div></div>
</div>
```

## Estados

Hover e foco podem ser forçados com `data-state`.

Marcação dos exemplos desta seção:

```html
<div class="ds-tabs"><div class="ds-tabs__list"><button type="button" class="ds-tabs__tab">Roteiro</button></div></div>

<div class="ds-tabs"><div class="ds-tabs__list"><button type="button" class="ds-tabs__tab" aria-selected="true">Roteiro</button></div></div>

<div class="ds-tabs"><div class="ds-tabs__list"><button type="button" class="ds-tabs__tab" disabled="">Roteiro</button></div></div>
```

## Anatomia

Quatro partes. Cada aba aponta para o seu painel, e o painel aponta de volta.

- 1 — Lista de abas — `role="tablist"` com nome (`aria-label`). Rola na horizontal quando não cabe.
- 2 — Aba ativa — Texto em `fg.default` e indicador de 2 px na cor da marca. As outras ficam em `fg.subtle`.
- 3 — Contagem opcional — Número curto do que há dentro. Sem cor de status — ela não é um alerta.
- 4 — Painel — `role="tabpanel"`, focável, logo abaixo da lista. Só o painel ativo aparece.

Marcação dos exemplos desta seção:

```html
<div class="ds-tabs" data-anatomy="">
<div class="ds-tabs__list">
<span class="ds-tabs__tab" aria-selected="true">Visão geral</span>
<span class="ds-tabs__tab">Atividade <span class="ds-tabs__count">12</span></span>
<span class="ds-tabs__tab">Arquivos</span>
</div>
<div class="ds-tabs__panel"><div>
<p>Visão geral</p>
<p>Resumo do projeto, responsáveis e próximos passos.</p>
</div></div>
</div>
```

## Comportamento

Na ativação automática, as setas já trocam o painel. Na manual, as setas só movem o foco — use quando abrir um painel custa caro (busca, carregamento).

Automática `padrão` — Foque uma aba e use ← →: o painel troca junto.

Manual `data-activation="manual"` — As setas movem o foco; Enter ou Espaço ativam.

### Teclado

|   |   |
| --- | --- |
| Tab | Entra na aba ativa. Tab de novo vai para o painel. |
| ← → | Aba anterior ou próxima. No fim, volta ao começo. |
| Home End | Primeira ou última aba. |
| Enter Espaço | Ativa a aba focada — só no modo manual. |

### Em código

```html
import { mountTabs } from 'https://lumeui.dev/v/1.2/lume.js';

// liga todas as abas [data-ds-tabs] da página — inclusive as que entrarem depois
const unmount = mountTabs(document);

document.addEventListener('ds:tabchange', (event) => {
  console.log(event.detail.id); // id da aba ativa
});
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

O script cuida dos estados e do teclado. A marcação certa é com você.

- Papéis e ligações — `tablist` → `tab` com `aria-controls`; o `tabpanel` responde com `aria-labelledby`.
- Um ponto de parada — ← → — Só a aba ativa recebe Tab (`tabindex` móvel). As outras se alcançam com as setas.
- Estado anunciado — `aria-selected` diz qual está ativa; o leitor de tela lê “aba, 2 de 4, selecionada”.
- Painel focável — O painel recebe `tabindex="0"` para quem navega por Tab chegar ao conteúdo, mesmo sem links.
- Nome da lista — Dê um `aria-label` ao tablist (“Projeto”, “Visualização”) para diferenciar conjuntos.
- Abas não são navegação — Para ir a outra página, use links. Abas trocam conteúdo dentro da mesma página.

## Tokens usados

Tudo o que as abas consomem.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| size.control.compact (`--ds-size-control-compact`) | Altura da aba (médio) | 36 px | 36 px |
| size.control.sm (`--ds-size-control-sm`) | Altura da aba (pequeno) | 32 px | 32 px |
| text.label-md (`--ds-text-label-md`) | Rótulo | 14/20 · medium | 14/20 · medium |
| color.fg.subtle (`--ds-color-fg-subtle`) | Aba inativa | #5C6C7F | #9C9792 |
| color.fg.default (`--ds-color-fg-default`) | Aba ativa | #2B3847 | #F3EDE5 |
| color.brand.solid (`--ds-color-brand-solid`) | Indicador da aba ativa | #3E5166 | #C0CAD6 |
| color.border.subtle (`--ds-color-border-subtle`) | Linha de base | #3E516624 | #FFFFFF0F |
| color.bg.hover (`--ds-color-bg-hover`) | Hover | #3E51660D | #FFFFFF0D |
| color.bg.sunken (`--ds-color-bg-sunken`) | Trilho da segmentada | #E8EDF3 | #151412 |
| color.bg.muted (`--ds-color-bg-muted`) | Aba ativa da segmentada | #DAE0E8 | #3D3B38 |
| color.bg.selected (`--ds-color-bg-selected`) | Fundo da contagem | #3E516612 | #C0CAD61A |
| radius.full (`--ds-radius-full`) | Segmentada e contagem | 9999 px | 9999 px |
| duration.fast (`--ds-duration-fast`) | Transição de cor | 120ms | 120ms |

## Uso

Três regras para abas que não confundem.

- **Faça:** rótulos curtos e paralelos. Substantivos de uma ou duas palavras, de duas a seis abas.
- **Evite:** abas como etapas. Abas não têm ordem. Para um fluxo em passos, use etapas com “Continuar”.
- **Dica:** Guarde a aba ativa. Se faz sentido compartilhar ou voltar para a mesma vista, guarde a aba no endereço ou na sessão.
