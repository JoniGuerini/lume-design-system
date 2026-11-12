# Estados vazios

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/estados-vazios

Quando não há nada para mostrar — ainda, por causa de um filtro ou por um erro — a tela diz o que aconteceu e oferece o próximo passo. Nunca uma área em branco.

Em números: situações: 6 · lugares: 3 · partes: 4 · próximo passo: sempre.

## Exemplo

```html
<div class="ds-empty">
  <span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
  <p class="ds-empty__title">Nenhum projeto ainda</p>
  <p class="ds-empty__description">Projetos reúnem tarefas, arquivos e pessoas. Crie o primeiro e convide o time.</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Criar projeto</button>
    <button type="button" class="ds-inline-action">Ver um exemplo<ds-icon name="arrow-right" size="14"></ds-icon></button>
  </div>
</div>
```

## Primeiro uso

A primeira vez é a melhor hora para ensinar: diga o que vai aparecer aqui e dê o botão que faz aparecer. Clique em “Criar projeto”.

- Ação principal com verbo: “Criar projeto”. Uma alternativa discreta ao lado, se houver.
- Depois de criar, o foco vai para o item novo — a pessoa vê o resultado na hora.
- Nada de tela vazia com um “+” solto no canto. O vazio é o próprio convite.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Tema do exemplo: primeiro uso" data-ds-tooltip="Alternar claro e escuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<div class="ds-empty ds-empty--plain">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">Nenhum projeto ainda</p>
<p class="ds-empty__description">Projetos reúnem tarefas, arquivos e pessoas. Crie o primeiro e convide o time.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary" data-act="create"><ds-icon name="plus"></ds-icon>Criar projeto</button><button type="button" class="ds-inline-action" data-act="sample">Ver um exemplo<ds-icon name="arrow-right"></ds-icon></button></div>
</div>
```

## Sem resultados

O vazio foi causado pela pessoa — por uma busca ou um filtro. Repita o que ela pediu, sugira o que tentar e deixe os controles à vista.

Nenhum documento

- O título repete a busca entre aspas: a pessoa confere se digitou certo.
- “Limpar busca” devolve a lista e o foco ao campo. A contagem é anunciada sem roubar o foco.
- Não esconda a busca nem os filtros no estado vazio: são justamente o caminho de volta.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Tema do exemplo: sem resultados" data-ds-tooltip="Alternar claro e escuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<div class="ds-field ds-field--sm"><ds-icon name="search"></ds-icon><input class="ds-field__input" type="search" value="orçamento 2019" aria-label="Buscar documentos" data-search="" spellcheck="false" autocomplete="off"></div>

<button type="button" class="ds-chip ds-chip--sm" data-kind="all" aria-pressed="false">Todos</button>

<button type="button" class="ds-chip ds-chip--sm" data-kind="pdf" aria-pressed="true">PDF</button>

<button type="button" class="ds-chip ds-chip--sm" data-kind="planilha" aria-pressed="false">Planilha</button>

<div class="ds-empty ds-empty--compact ds-empty--plain">
<span class="ds-empty__icon"><ds-icon name="search-x"></ds-icon></span>
<p class="ds-empty__title">Nada encontrado para “orçamento 2019”</p>
<p class="ds-empty__description">Confira a grafia ou tente outra palavra — ou limpe o filtro de tipo.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary" data-act="clear-search"><ds-icon name="x"></ds-icon>Limpar busca</button><button type="button" class="ds-inline-action" data-act="clear-filters">Limpar filtros<ds-icon name="filter"></ds-icon></button></div>
</div>
```

## Erro

Algo falhou do nosso lado. Diga o que não carregou, tranquilize sobre os dados e ofereça tentar de novo. Clique em “Tentar de novo”.

- Tom de perigo no ícone, não na tela toda. O texto diz o mesmo que a cor.
- Código e hora em `.ds-empty__meta`: o suporte agradece, e não atrapalha quem não precisa.
- Sem culpa (“Você fez algo errado”) e sem exclamação. Erro do sistema é do sistema.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Tema do exemplo: erro" data-ds-tooltip="Alternar claro e escuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<div class="ds-empty ds-empty--danger ds-empty--plain">
<span class="ds-empty__icon"><ds-icon name="alert-circle"></ds-icon></span>
<p class="ds-empty__title">Não conseguimos carregar os pagamentos</p>
<p class="ds-empty__description">Pode ser instabilidade do nosso lado. Seus dados estão seguros — tente de novo em alguns segundos.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary" data-act="retry"><ds-icon name="refresh"></ds-icon>Tentar de novo</button><button type="button" class="ds-inline-action" data-act="status">Ver status do serviço<ds-icon name="external-link"></ds-icon></button></div>
<p class="ds-empty__meta">Erro 503 · 14:32</p>
</div>
```

## Sem permissão

O conteúdo existe, mas não para esta pessoa. Diga de quem é e como pedir acesso — sem expor o que ela não pode ver.

- Ícone neutro (cadeado), não de erro: ninguém errou.
- Depois de pedir, confirme no mesmo lugar e diga o que acontece em seguida.
- “Acesso negado (403)” não ajuda ninguém a chegar onde precisa.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Tema do exemplo: sem permissão" data-ds-tooltip="Alternar claro e escuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<div class="ds-empty ds-empty--muted ds-empty--plain">
<span class="ds-empty__icon"><ds-icon name="lock"></ds-icon></span>
<p class="ds-empty__title">Você não tem acesso a este relatório</p>
<p class="ds-empty__description">Ele é do time de Finanças. Peça acesso a quem criou — a pessoa recebe um aviso.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary" data-act="request"><ds-icon name="mail"></ds-icon>Pedir acesso</button><button type="button" class="ds-inline-action" data-act="back">Voltar para relatórios<ds-icon name="arrow-left"></ds-icon></button></div>
</div>
```

## Offline

Sem internet, mostre o que já estava salvo com um aviso discreto; sem nada salvo, um estado vazio que se resolve sozinho. Este exemplo também segue a sua conexão de verdade.

- Revisar contrato de parceria — Hoje
- Enviar orçamento para Bruno — Amanhã
- Preparar apresentação Q4 — Sexta

- Com versão salva: alerta compacto no topo e o conteúdo continua legível.
- Volte sozinho quando a conexão voltar — e avise com um toast curto.
- Não apague o que a pessoa já via só porque a rede caiu.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Tema do exemplo: offline" data-ds-tooltip="Alternar claro e escuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>
```

## Carregando

Até 1 segundo, nada — um spinner que pisca atrapalha mais que ajuda. Até 10, spinner com texto. Passou disso, diga que está demorando e ofereça cancelar.

- Vendas de outubro — Atualizado há 2 h
- Custos por time — Atualizado ontem
- Churn trimestral — Atualizado há 3 dias

- Texto junto do spinner: “Carregando os relatórios…”. Ícone girando sozinho não diz nada a um leitor de tela.
- Recarregar algo que já está na tela? Mantenha o conteúdo esmaecido em vez de trocar por um vazio.
- Com movimento reduzido, o ícone para e o texto continua.

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-theme-toggle" data-pe-theme="dark" aria-pressed="false" aria-label="Tema do exemplo: carregando" data-ds-tooltip="Alternar claro e escuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>
```

## Anatomia

Quatro partes — e só a ação é obrigatória quando existe uma saída. Tudo centrado, numa coluna estreita.

- Ícone. Dá o contexto em um olhar. Um ícone da biblioteca, nunca ilustração ou emoji. Opcional dentro de listas.
- Título. O que aconteceu, em até seis palavras. Sem ponto final.
- Descrição. Por que está vazio e o que fazer. Uma ou duas frases.
- Ações. Uma principal — o próximo passo — e, se fizer sentido, uma alternativa em ação inline.

Marcação dos exemplos desta seção:

```html
<div class="ds-empty">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">Nenhum projeto ainda</p>
<p class="ds-empty__description">Projetos reúnem tarefas, arquivos e pessoas. Crie o primeiro e convide o time.</p>
<div class="ds-empty__actions"><span class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Criar projeto</span><span class="ds-inline-action">Ver um exemplo<ds-icon name="arrow-right"></ds-icon></span></div>
</div>
```

## Escrita

Diga o que aconteceu, por que (quando ajuda) e o que fazer. Tom calmo, sem culpa, sem exclamação — e sempre com uma saída.

| Situação | Evite | Prefira |
| --- | --- | --- |
| Primeiro uso | Nenhum dado. | Nenhum projeto ainda. Crie o primeiro e convide o time. |
| Sem resultados | 0 resultados | Nada encontrado para “orçamento 2019”. Confira a grafia ou limpe os filtros. |
| Erro | Ocorreu um erro! | Não conseguimos carregar os pagamentos. Tente de novo em alguns segundos. |
| Sem permissão | Acesso negado (403) | Você não tem acesso a este relatório. Peça a quem o criou. |
| Offline | Network error | Sem conexão. Mostrando a última versão salva, das 14:32. |
| Carregando | Aguarde… | Carregando os projetos… Costuma levar poucos segundos. |

## Onde aparece

O mesmo estado muda de tamanho conforme o lugar. Página inteira tem espaço; dentro de um painel, encolhe; numa lista, vira uma linha.

Página inteira `ds-empty` — A tela toda está vazia. Ícone grande, título, descrição e ação.

Dentro de painel `ds-empty--compact` — Um bloco da tela está vazio; o resto continua funcionando.

Nome — Atualizado

Linha de lista ou tabela `ds-empty--inline`

Ícone à esquerda, ação à direita. Numa tabela, vai numa célula com `colspan`.

Marcação dos exemplos desta seção:

```html
<div class="ds-empty">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">Nenhum projeto ainda</p>
<p class="ds-empty__description">Projetos reúnem tarefas, arquivos e pessoas. Crie o primeiro e convide o time.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary"><ds-icon name="plus"></ds-icon>Criar projeto</button></div>
</div>

<span class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted"><ds-icon name="more-horizontal"></ds-icon></span>

<div class="ds-empty ds-empty--compact" role="status">
<span class="ds-empty__icon"><ds-icon name="search-x"></ds-icon></span>
<p class="ds-empty__title">Nada encontrado para “orçamento 2019”</p>
<p class="ds-empty__description">Confira a grafia ou tente outra palavra. A busca olha títulos e autores.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="x"></ds-icon>Limpar busca</button></div>
</div>

<div class="ds-empty ds-empty--inline ds-empty--danger">
<span class="ds-empty__icon"><ds-icon name="alert-circle"></ds-icon></span>
<p class="ds-empty__title">Não conseguimos carregar os pagamentos</p>
<p class="ds-empty__description">Tente de novo em alguns segundos.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="refresh"></ds-icon>Tentar de novo</button></div>
<p class="ds-empty__meta">Erro 503 · 14:32</p>
</div>
```

## Acessibilidade

Estado vazio também é conteúdo: precisa ser anunciado, ter foco previsível e nunca depender só de ícone ou cor.

- Anuncie sem roubar o foco — Resultado vazio e contagem em `role="status"`: o leitor de tela fala “Nada encontrado” e a pessoa continua no campo de busca.
- Alerta só depois de uma ação — Erro que aparece ao tentar de novo usa `role="alert"`. Na carga da página, nada de alerta — o conteúdo já está ali.
- Foco que segue a ação — Tab Enter — “Limpar busca” devolve o foco ao campo; “Tentar de novo” com sucesso leva ao conteúdo; “Criar” leva ao item novo.
- Carregando com texto — O contêiner ganha `aria-busy="true"` e o spinner vem com uma frase. Ícone girando sozinho não diz nada.
- Ícones decorativos — O ícone do estado é `aria-hidden`; o título e a descrição carregam o sentido.
- Movimento reduzido — Com `prefers-reduced-motion`, o spinner para. O texto continua dizendo o que está acontecendo.
- Controles à vista — Busca, filtros e navegação continuam na tela no estado vazio — são o caminho de volta.

## Código

Uma classe base e modificadores para lugar e tom. As ações são os botões e ações inline de sempre.

```html
<div class="ds-empty ds-empty--danger">
  <span class="ds-empty__icon"><ds-icon name="alert-circle"></ds-icon></span>
  <p class="ds-empty__title">Não conseguimos carregar os pagamentos</p>
  <p class="ds-empty__description">Pode ser instabilidade do nosso lado. Seus dados estão seguros — tente de novo em alguns segundos.</p>
  <div class="ds-empty__actions">
    <button type="button" class="ds-btn ds-btn--secondary"><ds-icon name="refresh"></ds-icon>Tentar de novo</button>
    <button type="button" class="ds-inline-action">Ver status do serviço<ds-icon name="external-link" size="14"></ds-icon></button>
  </div>
  <p class="ds-empty__meta">Erro 503 · 14:32</p>
</div>
```

| Classe | Quando usar |
| --- | --- |
|  `ds-empty`  | Página inteira ou área principal vazia. |
|  `ds-empty--compact`  | Dentro de painel, cartão ou coluna. |
|  `ds-empty--inline`  | Uma linha de lista ou tabela; ícone à esquerda, ação à direita. |
|  `ds-empty--plain`  | Sem contorno nem fundo, quando já está dentro de uma superfície. |
|  `ds-empty--danger`  | Erro: ícone no tom de perigo. |
|  `ds-empty--warning`  | Offline e situações de atenção. |
|  `ds-empty--muted`  | Neutro, como sem permissão. |
|  `ds-empty--loading`  | Carregando: o ícone gira (para com movimento reduzido). |
|  `ds-empty__meta`  | Código do erro, hora, versão — linha pequena no fim. |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Seis regras para o vazio não virar beco sem saída.

- **Faça:** sempre um próximo passo. Criar, limpar filtros, tentar de novo, pedir acesso. Se não há o que fazer, diga quando vai mudar.
- **Evite:** “Nenhum dado”. Não explica nada. A pessoa não sabe se é erro, filtro ou se ainda não começou.
- **Dica:** Diferencie as causas. Primeiro uso, sem resultados e erro pedem textos e ações diferentes — mesmo com o mesmo layout.
- **Faça:** ícone da biblioteca. Um ícone dá o contexto e combina com o resto. Ilustração grande e emoji competem com a mensagem.
- **Evite:** trocar conteúdo por spinner. Ao recarregar, mantenha o que já estava na tela esmaecido. Piscar para vazio parece que tudo sumiu.
- **Dica:** Uma ação principal. Dois botões primários no vazio dividem a atenção. A alternativa vai em ação inline.
