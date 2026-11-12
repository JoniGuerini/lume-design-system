# Como contribuir

Seção do Lume: Recursos. Página: https://lumeui.dev/#/recursos/contribuir

O Lume cresce com o que os times precisam. Este é o caminho de uma ideia até virar versão — com as regras da casa, o checklist da revisão e como publicar.

Em números: etapas: 5 · itens na revisão: 17 · dependências: 0 · versão atual: 0.25.1.

## O caminho de uma mudança

Cinco etapas, sempre nesta ordem. Uma correção pequena pode pular a proposta; uma peça nova, nunca.

- 01 — Ideia — Um problema que aparece em mais de uma tela — ou uma peça que três times já desenharam cada um do seu jeito. — Quem — Qualquer pessoa do time — Sai daqui — Uma nota com exemplos reais
- 02 — Proposta — O modelo preenchido: o problema, quem usa, o que já existe e o impacto em tokens e acessibilidade. — Quem — Quem teve a ideia + alguém do Lume — Sai daqui — Aceita, ajustada ou recusada com motivo
- 03 — Rascunho — Tokens, CSS, JS e a página com playground. Estados forçados com data-state, nos dois temas. — Quem — Quem vai construir — Sai daqui — Pull request em rascunho
- 04 — Revisão — Uma pessoa olha o design, outra o código. Os dois passam pelo mesmo checklist. — Quem — Duas pessoas, design e código — Sai daqui — Aprovado ou pedidos de ajuste
- 05 — Publicado — Entra em Novidades com uma versão nova. A bolinha da sidebar avisa todo mundo. — Quem — Quem mantém o Lume — Sai daqui — Versão nova — hoje, 0.25.1

## Propor

Antes do código, a pergunta: que tipo de mudança é esta? Quanto menor, mais rápido sai.

### Token

Muda só um valor — uma cor, um espaço, um raio — e vale para o sistema todo.

Exemplo — color.chart.status.critical nasceu porque o vermelho de perigo parecia o pêssego no escuro.

### Variante

O mesmo componente com outro peso, tamanho ou tom. Mesma anatomia, mesmo teclado.

Exemplo — ds-btn--danger é um botão; só muda a intenção.

### Padrão

Uma combinação de peças que já existem, com regras de uso. Não cria CSS novo — ou cria pouco.

Exemplo — Formulários: campos + validação + resumo de erros.

### Componente

Uma peça nova, com anatomia, estados e acessibilidade próprios.

Exemplo — ds-alert entrou na 0.3 porque nenhum componente dava um aviso inline.

### Isso é do design system? quatro perguntas, no máximo

### Modelo de proposta copie e preencha

Uma proposta boa cabe numa tela. Traga prints de onde o problema aparece — eles convencem mais que qualquer parágrafo.

```html
## Proposta: <nome da peça>

### Problema
O que acontece hoje e onde. Links ou prints de pelo menos duas telas.

### Quem usa
Times, produtos e com que frequência.

### O que já existe
Componentes, padrões ou tokens do Lume que chegam perto — e por que não bastam.

### Proposta
Anatomia, variantes e estados (normal, hover, pressionado, foco, desativado, erro).

### Alternativas
O que mais foi considerado e por que ficou de fora.

### Impacto em tokens
Tokens novos ou alterados. Contraste nos dois temas.

### Acessibilidade
Papel ARIA, teclado, foco, leitor de tela e movimento reduzido.

### Fora do escopo
O que esta proposta não resolve.
```

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5c3 3.5 5.5 6.6 5.5 10a5.5 5.5 0 0 1-11 0c0-3.4 2.5-6.5 5.5-10z"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M7.5 3.5 11.5 10.5h-8z"></path><rect x="13" y="3.5" width="7.5" height="7" rx="2"></rect><circle cx="12" cy="17" r="3.5"></circle></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 2.5 15 5.5 12 8.5 9 5.5zM5.5 9 8.5 12 5.5 15 2.5 12zM18.5 9l3 3-3 3-3-3zM12 15.5l3 3-3 3-3-3z"></path></svg>

<fieldset class="ds-choice-group" data-question="repete">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">01</span>Aparece em mais de uma tela ou produto?</legend>
<p>Ou vai aparecer logo — não só "um dia, talvez".</p>
<div>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-repete" value="sim"><span class="ds-choice__text"><span class="ds-choice__label">Sim</span></span></label>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-repete" value="nao"><span class="ds-choice__text"><span class="ds-choice__label">Não</span></span></label>
</div>
</fieldset>

<fieldset class="ds-choice-group" data-question="valor" hidden="">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">02</span>A diferença é só um valor — uma cor, um espaço, um raio?</legend>
<div>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-valor" value="sim"><span class="ds-choice__text"><span class="ds-choice__label">Sim</span></span></label>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-valor" value="nao"><span class="ds-choice__text"><span class="ds-choice__label">Não</span></span></label>
</div>
</fieldset>

<fieldset class="ds-choice-group" data-question="mesmo" hidden="">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">03</span>É um componente que já existe, com outro peso, tamanho ou tom?</legend>
<div>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-mesmo" value="sim"><span class="ds-choice__text"><span class="ds-choice__label">Sim</span></span></label>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-mesmo" value="nao"><span class="ds-choice__text"><span class="ds-choice__label">Não</span></span></label>
</div>
</fieldset>

<fieldset class="ds-choice-group" data-question="monta" hidden="">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">04</span>Dá para montar com peças que já existem?</legend>
<div>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-monta" value="sim"><span class="ds-choice__text"><span class="ds-choice__label">Sim</span></span></label>
<label class="ds-radio"><input type="radio" class="ds-radio__input" name="rc-q-monta" value="nao"><span class="ds-choice__text"><span class="ds-choice__label">Não</span></span></label>
</div>
</fieldset>
```

## Construir

As regras da casa e o passo a passo de uma peça nova, com os arquivos de verdade deste repositório.

- Zero dependências — HTML, CSS e JavaScript nativos. Nada de `npm install` para usar — os scripts de Node só geram tokens e servem o site.
- Só tokens semânticos — Componentes leem `var(--ds-color-fg-muted)`, nunca um hex nem uma paleta crua como `--ds-color-neutral-400`.
- Nomes ds-bloco__parte--variação — `.ds-panel__header`, `.ds-btn--primary`. O prefixo `ds-` é do sistema; páginas da documentação usam o próprio prefixo.
- Estados forçados com data-state — `data-state="hover|pressed|focus"` desenha o estado sem interação — para documentar e testar.
- Padrões ARIA de verdade — combobox e listbox na Seleção, menu no Menu, tablist nas Abas, dialog no Modal, status no Toast.
- Tudo que liga, desliga — Módulos devolvem `destroy()` ou uma função de limpeza: listeners, timers e observadores saem junto.

### Passo a passo da pasta tokens/ até a página

- Passo 1: — Token, se faltar — Edite o JSON em tokens/ e rode o build. Nunca edite ds/tokens.css nem ds/tokens.js — eles são gerados e o servidor de desenvolvimento os refaz a cada mudança. — `// tokens/semantic.json — a fonte da verdade "chart": { "grid": { "dark": "{color.neutral.800}", "light": "{color.neutral.200}" } } // e, se for cor de marca ou texto, a checagem de contraste: "$checks": [["color.chart.series.1", "color.bg.surface", 3]]` — `npm run tokens # ✓ tokens: … tokens, 13 paletas → ds/tokens.css, ds/tokens.js # contraste: …/… combinações atingem o mínimo`
- Passo 2: — O CSS — Um arquivo por componente em ds/components/, com o markup no comentário do topo, e uma linha de import em ds/ds.css. — `/* * Alerta — mensagem inline com tom, ícone, título, texto e ações. * * <div class="ds-alert ds-alert--danger" role="alert">…</div> * * Tons: neutro (padrão) · --info · --success · --warning · --danger. */ .ds-alert { padding: var(--ds-space-200) var(--ds-space-250); border-radius: var(--ds-radius-xl); background: var(--ds-color-bg-surface); border: 1px solid var(--ds-color-border-subtle); } /* e no ponto de entrada, ds/ds.css */ @import url("./components/alert.css");`
- Passo 3: — O JavaScript, se for interativo — Um módulo em ds/js/ que liga o comportamento e devolve como desligar. — `// ds/js/meu-componente.js export function createMeuComponente(el, { onChange } = {}) { const onClick = (event) => { /* … */ onChange?.(); }; el.addEventListener('click', onClick); return { destroy() { el.removeEventListener('click', onClick); }, }; }`
- Passo 4: — Ícones novos — Entram na lista de ds/icons/icons.js, com as palavras-chave em inglês e espanhol em site/icon-keywords.js, e já aparecem na busca de Ícones. — `// ds/icons/icons.js — grid de 24, traço 1,5, pontas redondas, currentColor // [nome, categoria, palavras-chave em português, desenho] ['send', 'acoes', 'enviar mensagem avião', path('M20.5 3.5 10 14M20.5 3.5 14 20.5l-4-6.5-6.5-4z')], // site/icon-keywords.js — as palavras-chave em inglês e espanhol send: ['send message plane', 'enviar mensaje avión'],`
- Passo 5: — A página — Componentes seguem a página do Botão: playground com código, variantes, tamanhos, estados, anatomia, acessibilidade, tokens e uso. Todo texto vai nos três idiomas. — `// site/pages/meu-componente.js import { mountDocNav } from '../doc-nav.js'; import { mountCodeCopy } from '../component-doc.js'; import { L } from '../i18n.js'; export const styles = ['site/component-doc.css', 'site/pages/meu-componente.css']; export default function render(page) { return `<div class="page doc"> <h1 class="doc-header__title">${page.label}</h1> <p>${L('Olá', 'Hello', 'Hola')}</p> </div>`; } export function mount(root) { const offNav = mountDocNav(root); const offCopy = mountCodeCopy(root); return () => { offNav(); offCopy(); }; }` — `// site/nav.js — textos em T(pt-BR, en, es) { label: T('Meu componente', 'My component', 'Mi componente'), icon: 'component', path: '/componentes/meu-componente', load: () => import('./pages/meu-componente.js'), description: T('Uma frase sobre para que serve.', 'One sentence on what it’s for.', 'Una frase sobre para qué sirve.'), }`

## Revisar

Quem revisa marca; quem construiu já passou por aqui antes. Para os detalhes de contraste, teclado e leitores de tela, veja Acessibilidade.

### O que bloqueia

- Qualquer ✗ no relatório de contraste do build
- Cor, espaço ou raio fixo no CSS em vez de token
- Uma dependência nova
- Algo que só funciona com mouse
- Página sem playground ou sem a seção de acessibilidade
- Erro no console ou id duplicado

### Como comentar

- Aponte o lugar. “O foco do item 3 do menu some no claro” ajuda mais que “o foco está estranho”.
- Diga se bloqueia. Separe o que impede a publicação do que é sugestão para depois.
- Proponha. Se der, mostre o token ou o trecho que resolve.

Marcação dos exemplos desta seção:

```html
<div class="ds-meter" role="progressbar" aria-label="Itens conferidos" aria-valuemin="0" aria-valuemax="17" aria-valuenow="0" data-rc-meter="" aria-valuetext="0 de 17 itens conferidos">
<div class="ds-meter__head">
<span class="ds-meter__label">Itens conferidos</span>
<span class="ds-meter__value"><strong data-rc-count="">0</strong><span> de 17</span></span>
</div>
<div class="ds-meter__track"><span class="ds-meter__fill" data-rc-fill=""></span></div>
</div>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-rc-clear=""><ds-icon name="refresh"></ds-icon>Desmarcar tudo</button>

<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">01</span>Visual<span data-rc-group-count="visual">0/4</span></legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="visual" name="rc-visual-0">
<span class="ds-choice__text"><span class="ds-choice__label">Plano</span><span class="ds-choice__description">Sem degradê, vidro, brilho, blur ou imagem de fundo.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="visual" name="rc-visual-1">
<span class="ds-choice__text"><span class="ds-choice__label">Só tokens</span><span class="ds-choice__description">Nenhum hex, px de cor ou paleta crua no CSS do componente.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="visual" name="rc-visual-2">
<span class="ds-choice__text"><span class="ds-choice__label">Dois temas</span><span class="ds-choice__description">Conferido no escuro e no claro, inclusive com tema aninhado.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="visual" name="rc-visual-3">
<span class="ds-choice__text"><span class="ds-choice__label">Todos os estados</span><span class="ds-choice__description">Normal, hover, pressionado, foco, desativado e erro — com data-state.</span></span>
</label>
</div>
</fieldset>

<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">02</span>Acessibilidade<span data-rc-group-count="a11y">0/4</span></legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="a11y" name="rc-a11y-0">
<span class="ds-choice__text"><span class="ds-choice__label">Contraste</span><span class="ds-choice__description">Texto ≥ 4,5:1 e contornos e ícones ≥ 3:1, nos dois temas.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="a11y" name="rc-a11y-1">
<span class="ds-choice__text"><span class="ds-choice__label">Teclado</span><span class="ds-choice__description">Tudo alcançável com Tab; setas, Enter, Espaço e Esc onde o padrão ARIA pede.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="a11y" name="rc-a11y-2">
<span class="ds-choice__text"><span class="ds-choice__label">Nomes</span><span class="ds-choice__description">Botões de ícone com aria-label; campos com rótulo de verdade.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="a11y" name="rc-a11y-3">
<span class="ds-choice__text"><span class="ds-choice__label">Movimento</span><span class="ds-choice__description">prefers-reduced-motion respeitado; nada pisca nem anima sem motivo.</span></span>
</label>
</div>
</fieldset>

<fieldset class="ds-choice-group">
<legend class="ds-choice-group__legend"><span class="ds-section__stamp">03</span>Código<span data-rc-group-count="codigo">0/4</span></legend>
<div class="ds-choice-group__items">
<label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="codigo" name="rc-codigo-0">
<span class="ds-choice__text"><span class="ds-choice__label">Sem dependências</span><span class="ds-choice__description">Nada novo em package.json, nenhum script de terceiros.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="codigo" name="rc-codigo-1">
<span class="ds-choice__text"><span class="ds-choice__label">Limpeza</span><span class="ds-choice__description">destroy() ou a função de mount remove listeners, timers e observadores.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="codigo" name="rc-codigo-2">
<span class="ds-choice__text"><span class="ds-choice__label">Ids únicos</span><span class="ds-choice__description">Nenhum id repetido na página, nem colidindo com os do app.</span></span>
</label><label class="ds-checkbox">
<input type="checkbox" class="ds-checkbox__input" data-rc-check="codigo" name="rc-codigo-3">
<span class="ds-choice__text"><span class="ds-choice__label">Console limpo</span><span class="ds-choice__description">Nenhum erro ou aviso no navegador.</span></span>
</label>
</div>
</fieldset>
```

## Publicar

Toda versão sai de um arquivo só: `site/changelog.js`. Ele alimenta Novidades, o roadmap do Início, a bolinha da sidebar e o cartão da versão.

1.0.0 — Maior — Muda algo que você usa: um nome de classe, um token removido. Vem com guia de migração. — 0.3.0 — Menor — Coisas novas sem quebrar nada: uma seção, um componente, tokens novos. — 0.3.1 — Correção — Ajustes e bugs. Ninguém precisa mudar nada.

Enquanto estivermos em 0.x, uma versão menor ainda pode trazer uma mudança que quebra — sempre avisada em Novidades. Cada entrega grande vira uma versão menor: 0.1 Primeira versão, 0.2 Gráficos, 0.3 Padrões, 0.4 Recursos, 0.4.1 Contraste em dia, 0.5 Plugin do Figma, 0.6 Plugin completo, 0.6.1 Plugin no plano gratuito, 0.7 Idiomas, 0.8 Lume, 0.9 Refúgio, 0.10 Tema Lume, 0.11 Login e cadastro, 0.11.1 Aviso de versão nova, 0.12 Calendário, 0.13 Roadmap, 0.13.1 Fontes atualizadas, 0.14 Formulários completos, 0.14.1 Topbar no celular, 0.14.2 Novidades só para quem volta, 0.14.3 Última versão no Início, 0.14.4 Claro e escuro, 0.14.5 Botão de tema, 0.14.6 Cartão com altura fixa, 0.15 Navegação e estrutura, 0.16 Camadas, 0.17 Feedback e carregamento, 0.18 Conteúdo, 0.19 Refino, 0.19.1 Ícone de megafone, 0.19.2 Revisão dos ícones, 0.20 Barra de rolagem, 0.21 Voltar ao topo, 0.21.1 Navbar em janelas menores, 0.22 Plugin do Figma, 0.22.1 Números do plugin no site, 0.22.2 Contagem de visitas, 0.23 Lume para IAs, 0.23.1 IAs em três idiomas, 0.24 Testes e API, 0.25 Pacote, 0.25.1 Instalação mais clara.

### Uma entrada em Novidades

Algo que não existia: componente, página, token, ícone.

Algo que existia e ficou melhor, sem mudar como se usa.

Algo que estava errado e agora está certo.

```html
// site/changelog.js
export const CURRENT_VERSION = '0.5.0';   // ← a versão nova

const RELEASES = [
  {
    version: '0.5.0',
    date: '2026-12-01',
    title: T('Nome curto da entrega', 'Short name for the release', 'Nombre corto de la entrega'),
    summary: T('Uma frase sobre o que muda para quem usa.', 'One sentence on what changes for users.', 'Una frase sobre lo que cambia para quien lo usa.'),
    groups: [
      {
        name: T('Componentes', 'Components', 'Componentes'),
        items: [
          // [tipo, texto, link]
          ['novo', T(
            'Alerta inline com tons e ações',
            'Inline alert with tones and actions',
            'Alerta inline con tonos y acciones',
          ), '/padroes/formularios'],
          ['correcao', T(
            'A busca de ícones encontra “calendário”',
            'Icon search finds “calendar”',
            'La búsqueda de íconos encuentra “calendario”',
          ), '/fundamentos/icones'],
        ],
      },
    ],
  },
  // …versões anteriores, da mais nova para a mais antiga
];
```

### Depois de publicar sem passo manual

- A bolinha de Novidades volta na sidebar para quem ainda não viu a versão.
- O cartão da conta mostra a versão nova — hoje, Lume 0.25.1.
- O card de roadmap do Início lê os mesmos arquivos de Novidades e de Roadmap; não há outro lugar para atualizar.

Sem calendário fixo: uma versão menor sai quando uma entrega fica pronta; correções saem assim que estão revisadas.

Marcação dos exemplos desta seção:

```html
<span class="ds-badge ds-badge--sm ds-badge--brand">Novo</span>

<span class="ds-badge ds-badge--sm ds-badge--info">Melhoria</span>

<span class="ds-badge ds-badge--sm ds-badge--success">Correção</span>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Definição de pronto

Uma peça só entra numa versão quando tudo isto é verdade.

- Resolve um problema real — Aparece em pelo menos duas telas, com exemplos.
- Funciona sem o mouse — Teclado, foco visível e leitor de tela conferidos.
- Vive de tokens — Muda junto quando a marca ou o tema mudam.
- Está documentado — Página com playground, estados, acessibilidade e uso, nos três idiomas.
- Passou na revisão — Design e código, com o checklist inteiro marcado.
- Está em Novidades — Com versão, data e link para a página.

## Perguntas frequentes

Pronto para começar? — Veja o que mudou nas últimas versões ou monte sua primeira tela com o Lume — 44 componentes e 6 padrões esperando.

Marcação dos exemplos desta seção:

```html
<details class="ds-disclosure">
<summary class="ds-inline-action"><span>Preciso pedir permissão para usar algo que não está no Lume?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Não. Construa no seu produto com os tokens e componentes que existem. A proposta vem quando a peça se repete.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>E se o meu caso for diferente de tudo?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Comece pela conversa, não pelo código: traga os exemplos. Às vezes é uma variante; às vezes, um padrão com peças que já existem.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>Posso criar um token só para o meu componente?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Só se ele tiver um papel que outros componentes também possam ter. Tokens nomeiam papéis (fg.muted, border.focus), não lugares.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>Quanto tempo leva uma revisão?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Depende do tamanho. Uma correção ou um token passa rápido; um componente novo leva mais, porque passa por design e por código — e pela página com playground.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>Dá para mudar o nome de uma classe?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Dá, mas é uma mudança que quebra: só numa versão maior, com guia de migração. Enquanto isso, mantenha o nome antigo funcionando.</p></div>
</details>

<details class="ds-disclosure">
<summary class="ds-inline-action"><span>Onde ficam as decisões que já foram tomadas?</span><ds-icon name="plus"></ds-icon></summary>
<div class="ds-disclosure__content"><p>Nas páginas: cada componente diz quando usar e quando não usar. O que mudou, e por quê, fica em Novidades.</p></div>
</details>

<a class="ds-btn ds-btn--secondary" href="#/novidades"><ds-icon name="megaphone"></ds-icon>Ver Novidades</a>

<a class="ds-btn ds-btn--primary" href="#/primeiros-passos">Primeiros passos<ds-icon name="arrow-right"></ds-icon></a>
```
