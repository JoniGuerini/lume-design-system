# Seleção

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/selecao

Para escolher uma ou várias opções numa lista. A lista é do Lume — mesmo visual dos menus, com busca quando cresce —, mas o valor mora num `<select>` real, que vai junto no formulário.

Em números: tipos: 3 · tamanhos: 3 · padrão ARIA: combobox · sem JS: nativo.

## Exemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="idioma">Idioma</label>
  <select id="idioma" name="idioma" data-ds-select data-icon="globe">
    <option selected>Português (Brasil)</option>
    <option>English (US)</option>
    <option>Español</option>
  </select>
</div>

<script type="module">
  import { mountSelects } from 'https://lumeui.dev/v/1.13/lume.js';
  mountSelects(document);
</script>
```

## Qual usar

Três tipos de seleção para formulários e o chip com menu para filtros. As listas têm o mesmo visual; muda o que acontece ao escolher.

Seleção `select[data-ds-select]` — No formulário. O valor vai junto ao salvar.

Visitas

12.480 — visitas

Chip com menu `ds-chip + createMenu` — No filtro. Muda a tela na hora.

|  | Única | Com busca | Múltipla | Chip de filtro |
| --- | --- | --- | --- | --- |
| Quando | Uma escolha num formulário, poucas opções. | Uma escolha numa lista longa: país, cidade, pessoa. | Várias escolhas: etiquetas, responsáveis, categorias. | Filtro rápido que muda a tela na hora. |
| Opções | 5 a ~15 | 15 a centenas | De poucas a centenas (com busca) | Até ~7 |
| Efeito | Vale ao enviar | Vale ao enviar | Vale ao enviar | Imediato |
| Valor | `<select>` real | `<select>` real | `<select multiple>` real | Estado da tela |
| Atributos | `data-ds-select` | + `data-search` | + `multiple` | ds-chip + createMenu |

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-form-tz-label">Fuso horário</label>
<div class="ds-select"><select id="sl-form-tz" name="fuso" data-ds-select="" data-icon="globe" aria-describedby="sl-form-tz-hint" class="ds-select__native" data-enhanced="" aria-hidden="true"><optgroup label="Brasil"><option selected="">Brasília (UTC−3)</option><option>Manaus (UTC−4)</option><option>Fernando de Noronha (UTC−2)</option><option disabled="">Rio Branco (UTC−5) — em breve</option></optgroup><optgroup label="Europa"><option>Lisboa (UTC+0)</option><option>Madri (UTC+1)</option><option>Berlim (UTC+1)</option></optgroup><optgroup label="América do Norte"><option>Nova York (UTC−5)</option><option>Cidade do México (UTC−6)</option></optgroup></select><button type="button" class="ds-select__trigger" id="sl-form-tz-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-form-tz-listbox" aria-labelledby="sl-form-tz-label" aria-describedby="sl-form-tz-hint"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Brasília (UTC−3)</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="sl-form-tz-hint">Usado nos lembretes e relatórios.</p></div>
</div>

<button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">Salvar</button>

<button type="button" class="ds-chip" data-period="" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-62"><span class="ds-chip__icon"><ds-icon name="calendar"></ds-icon></span><span data-label="">Últimos 30 dias</span><span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span></button>
```

## Com busca

Com `data-search`, a lista ganha um campo no topo e o foco vai direto para ele. Filtra sem acento e sem diferenciar maiúsculas — inclusive pelo nome do grupo.

- Filtra ao digitar e destaca o trecho encontrado, sem mudar o texto lido pelo leitor de tela.
- ↑ ↓ andam só pelas visíveis; Enter escolhe e fecha.
- Esc limpa a busca; com a busca vazia, fecha.
- Nada encontrado? A lista avisa “Nada encontrado para …” no lugar das opções.

```html
<select id="pais" name="pais" data-ds-select data-search
        data-search-placeholder="Buscar país ou continente">
  <optgroup label="América do Sul">
    <option>Argentina</option>
    <option selected>Brasil</option>
  </optgroup>
  …
</select>
```

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-search-person-label">Responsável</label>
<div class="ds-select"><select id="sl-search-person" name="responsavel" data-ds-select="" data-icon="users" data-search="" data-search-placeholder="Buscar pessoa" aria-describedby="sl-search-person-hint" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Ana Souza</option><option>Bruno Lima</option><option>Carla Dias</option><option>Diego Ramos</option><option>Elisa Prado</option><option>Fábio Nunes</option><option>Gabriela Rocha</option><option>Heitor Melo</option><option>Isabela Torres</option><option>João Pedro Alves</option><option>Lívia Castro</option><option>Marcos Vieira</option></select><button type="button" class="ds-select__trigger" id="sl-search-person-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-search-person-listbox" aria-labelledby="sl-search-person-label" aria-describedby="sl-search-person-hint"><ds-icon name="users"></ds-icon><span class="ds-select__value">Ana Souza</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="sl-search-person-hint">Digite com a lista fechada: a busca já começa com a letra.</p></div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Múltipla escolha

Com `multiple`, cada opção ganha uma caixa de marcação e a lista não fecha ao escolher. Os escolhidos viram chips no campo — até duas linhas, depois “+N”.

Caso principal: etiquetas

`multiple data-search data-max="5" data-footer`

Sem busca, com chips

`multiple`

Contagem no lugar dos chips

`multiple data-display="count" data-footer`

- Clique, Espaço ou Enter alternam sem fechar. Na busca, Espaço digita — use Enter.
- Remover um: o × do chip, desmarcar na lista ou Backspace. Todos: o × do campo ou “Limpar”.
- Selecionar todos respeita a busca atual e o limite.
- Com limite, o resto fica desativado e a lista explica por quê.

```html
<select id="etiquetas" name="etiquetas" multiple data-ds-select
        data-search data-max="5" data-footer
        data-placeholder="Adicione etiquetas">
  <optgroup label="Design">
    <option selected>Componente</option>
    <option selected>Token</option>
  </optgroup>
  …
</select>

<!-- os escolhidos chegam como uma lista -->
<script>
  new FormData(form).getAll('etiquetas'); // ['Componente', 'Token']
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">Salvar</button>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-categories-label">Categorias</label>
<div class="ds-select ds-select--multiple"><select id="sl-categories" name="categorias" data-ds-select="" multiple="" data-display="count" data-footer="" data-placeholder="Todas as categorias" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Alimentação</option><option selected="">Transporte</option><option selected="">Moradia</option><option>Saúde</option><option>Educação</option><option>Lazer</option><option>Assinaturas</option><option>Viagem</option><option>Pets</option><option>Presentes</option></select><div class="ds-select__trigger ds-select__trigger--multi">
<div class="ds-select__values">
<button type="button" class="ds-select__combobox" id="sl-categories-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-categories-listbox" aria-labelledby="sl-categories-label"><span class="ds-select__summary">3 selecionados</span><span class="ds-visually-hidden" data-sr="">: Alimentação, Transporte, Moradia</span></button>
</div>
<button type="button" class="ds-select__clear" aria-label="Limpar seleção"><ds-icon name="x"></ds-icon></button>
<ds-icon name="chevron-down"></ds-icon></div></div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Tamanhos

Os mesmos três do campo de texto — alinham lado a lado num formulário. Use `data-size` no select; na múltipla, os chips acompanham.

Pequeno `data-size="sm"` — 32 px de altura mínima.

Médio `padrão` — 40 px de altura mínima.

Grande `data-size="lg"` — 48 px de altura mínima.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-size-sm-label">Pequeno</label>
<div class="ds-select ds-select--sm"><select id="sl-size-sm" data-ds-select="" data-size="sm" data-icon="globe" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-size-sm-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-size-sm-listbox" aria-labelledby="sl-size-sm-label"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-size-md-label">Médio</label>
<div class="ds-select"><select id="sl-size-md" data-ds-select="" data-icon="globe" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-size-md-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-size-md-listbox" aria-labelledby="sl-size-md-label"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-size-lg-label">Grande</label>
<div class="ds-select ds-select--lg"><select id="sl-size-lg" data-ds-select="" data-size="lg" data-icon="globe" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-size-lg-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-size-lg-listbox" aria-labelledby="sl-size-lg-label"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>
```

## Estados

Iguais aos do campo de texto, na única e na múltipla. Para documentar e testar, force hover ou foco com `data-ds-state` no select.

Padrão — Contorno discreto e seta à direita.

Hover — O contorno fica mais forte.

Foco ou aberto — Contorno na cor de foco, halo suave e a seta gira.

Sem escolha — O texto vazio aparece apagado, como um placeholder.

Desativado — Opacidade reduzida e fora da ordem de foco.

Inválido — Contorno e mensagem de perigo.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-default-label">Idioma</label>
<div class="ds-select"><select id="sl-state-default" data-ds-select="" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-default-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-default-listbox" aria-labelledby="sl-state-default-label"><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-hover-label">Idioma</label>
<div class="ds-select"><select id="sl-state-hover" data-ds-select="" data-ds-state="hover" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-hover-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-hover-listbox" aria-labelledby="sl-state-hover-label"><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-focus-label">Idioma</label>
<div class="ds-select"><select id="sl-state-focus" data-ds-select="" data-ds-state="focus" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-focus-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-focus-listbox" aria-labelledby="sl-state-focus-label"><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-placeholder-label">Idioma</label>
<div class="ds-select"><select id="sl-state-placeholder" data-ds-select="" class="ds-select__native" data-enhanced="" aria-hidden="true"><option value="" selected="">Escolha um idioma</option><option>Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-placeholder-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-placeholder-listbox" aria-labelledby="sl-state-placeholder-label"><span class="ds-select__value" data-placeholder="">Escolha um idioma</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-multi-placeholder-label">Idiomas</label>
<div class="ds-select ds-select--multiple"><select id="sl-state-multi-placeholder" data-ds-select="" multiple="" data-placeholder="Escolha idiomas" class="ds-select__native" data-enhanced="" aria-hidden="true"><option>Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option></select><div class="ds-select__trigger ds-select__trigger--multi">
<div class="ds-select__values">
<ul class="ds-select__chips" role="list"></ul>
<button type="button" class="ds-select__combobox" id="sl-state-multi-placeholder-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-multi-placeholder-listbox" aria-labelledby="sl-state-multi-placeholder-label"><span class="ds-select__summary" data-placeholder="">Escolha idiomas</span><span class="ds-visually-hidden" data-sr=""></span></button>
</div>
<button type="button" class="ds-select__clear" aria-label="Limpar seleção" hidden=""><ds-icon name="x"></ds-icon></button>
<ds-icon name="chevron-down"></ds-icon></div></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-disabled-label">Idioma</label>
<div class="ds-select"><select id="sl-state-disabled" data-ds-select="" disabled="" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-disabled-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-disabled-listbox" aria-labelledby="sl-state-disabled-label" disabled="" data-disabled=""><span class="ds-select__value">Português (Brasil)</span><ds-icon name="chevron-down"></ds-icon></button></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-invalid-label">Idioma</label>
<div class="ds-select"><select id="sl-state-invalid" data-ds-select="" aria-invalid="true" aria-describedby="sl-state-invalid-error" class="ds-select__native" data-enhanced="" aria-hidden="true"><option value="" selected="">Escolha um idioma</option><option>Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option><option>Deutsch</option><option>Italiano</option><option>Nederlands</option><option>Polski</option><option>日本語</option><option>한국어</option></select><button type="button" class="ds-select__trigger" id="sl-state-invalid-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-invalid-listbox" aria-labelledby="sl-state-invalid-label" aria-invalid="true" aria-describedby="sl-state-invalid-error" data-invalid=""><span class="ds-select__value" data-placeholder="">Escolha um idioma</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__error" id="sl-state-invalid-error"><ds-icon name="alert-circle"></ds-icon><span>Escolha pelo menos uma opção para continuar.</span></p></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-state-multi-invalid-label">Idiomas</label>
<div class="ds-select ds-select--multiple"><select id="sl-state-multi-invalid" data-ds-select="" multiple="" data-placeholder="Escolha idiomas" aria-invalid="true" aria-describedby="sl-state-multi-invalid-error" class="ds-select__native" data-enhanced="" aria-hidden="true"><option>Português (Brasil)</option><option>English (US)</option><option>Español</option><option>Français</option></select><div class="ds-select__trigger ds-select__trigger--multi" data-invalid="">
<div class="ds-select__values">
<ul class="ds-select__chips" role="list"></ul>
<button type="button" class="ds-select__combobox" id="sl-state-multi-invalid-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-state-multi-invalid-listbox" aria-labelledby="sl-state-multi-invalid-label" aria-invalid="true" aria-describedby="sl-state-multi-invalid-error"><span class="ds-select__summary" data-placeholder="">Escolha idiomas</span><span class="ds-visually-hidden" data-sr=""></span></button>
</div>
<button type="button" class="ds-select__clear" aria-label="Limpar seleção" hidden=""><ds-icon name="x"></ds-icon></button>
<ds-icon name="chevron-down"></ds-icon></div></div>
<div class="ds-form-field__footer"><p class="ds-form-field__error" id="sl-state-multi-invalid-error"><ds-icon name="alert-circle"></ds-icon><span>Escolha pelo menos uma opção para continuar.</span></p></div>
</div>
```

## Grupos e desativados

`<optgroup>` vira um rótulo de grupo na lista; `<option disabled>` aparece, mas o teclado e o clique pulam a opção.

```html
<select id="fuso" data-ds-select data-icon="globe">
  <optgroup label="Brasil">
    <option selected>Brasília (UTC−3)</option>
    <option disabled>Rio Branco (UTC−5) — em breve</option>
  </optgroup>
  <optgroup label="Europa">
    <option>Lisboa (UTC+0)</option>
  </optgroup>
</select>
```

Sem JavaScript, o mesmo `<select>` aparece como lista nativa do sistema, já com o visual básico do campo. Nada se perde.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-groups-tz-label">Fuso horário</label>
<div class="ds-select"><select id="sl-groups-tz" data-ds-select="" data-icon="globe" aria-describedby="sl-groups-tz-hint" class="ds-select__native" data-enhanced="" aria-hidden="true"><optgroup label="Brasil"><option selected="">Brasília (UTC−3)</option><option>Manaus (UTC−4)</option><option>Fernando de Noronha (UTC−2)</option><option disabled="">Rio Branco (UTC−5) — em breve</option></optgroup><optgroup label="Europa"><option>Lisboa (UTC+0)</option><option>Madri (UTC+1)</option><option>Berlim (UTC+1)</option></optgroup><optgroup label="América do Norte"><option>Nova York (UTC−5)</option><option>Cidade do México (UTC−6)</option></optgroup></select><button type="button" class="ds-select__trigger" id="sl-groups-tz-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-groups-tz-listbox" aria-labelledby="sl-groups-tz-label" aria-describedby="sl-groups-tz-hint"><ds-icon name="globe"></ds-icon><span class="ds-select__value">Brasília (UTC−3)</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="sl-groups-tz-hint">Rio Branco ainda não está disponível.</p></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" id="sl-groups-off-label">Plano</label>
<div class="ds-select"><select id="sl-groups-off" data-ds-select="" disabled="" aria-describedby="sl-groups-off-hint" class="ds-select__native" data-enhanced="" aria-hidden="true"><option selected="">Equipe (fixo pelo administrador)</option></select><button type="button" class="ds-select__trigger" id="sl-groups-off-trigger" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="sl-groups-off-listbox" aria-labelledby="sl-groups-off-label" aria-describedby="sl-groups-off-hint" disabled="" data-disabled=""><span class="ds-select__value">Equipe (fixo pelo administrador)</span><ds-icon name="chevron-down"></ds-icon></button></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="sl-groups-off-hint">Só quem administra a conta pode trocar.</p></div>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Teclado e acessibilidade

Segue o padrão de combobox do WAI-ARIA. A opção ativa é anunciada por `aria-activedescendant`, no gatilho ou no campo de busca.

### Todos os tipos

| Tecla | Fechado | Aberto |
| --- | --- | --- |
| Enter Espaço | Abre a lista | Única: escolhe e fecha · Múltipla: marca ou desmarca |
| ↓ ↑ | Abre na opção escolhida | Move entre as opções visíveis (pula as desativadas) |
| Home End | Abre na primeira ou na última | Vai para a primeira ou a última (sem busca) |
| Page ↓ Page ↑ | — | Pula 10 opções |
| Esc | — | Fecha sem mudar nada |
| Tab | Segue para o próximo campo | Única sem busca: escolhe a ativa e segue · Demais: fecha e segue |

### Sem busca

| Tecla | Fechado | Aberto |
| --- | --- | --- |
| A–Z | Abre na primeira que começa com a letra | Pula para a próxima com a letra |

### Com busca

| Tecla | Fechado | Aberto |
| --- | --- | --- |
| A–Z | Abre a lista e começa a busca com a letra | Filtra a lista |
| Espaço | Abre a lista | Digita um espaço na busca |
| Esc | — | Limpa a busca; vazia, fecha |

### Múltipla

| Tecla | Fechado | Aberto |
| --- | --- | --- |
| Backspace | Remove o último escolhido | Na busca vazia, remove o último escolhido |
| Ctrl A | — | Marca todas as visíveis (sem busca), respeitando o limite |

- Papéis certos — Gatilho com `role="combobox"`, `aria-haspopup="listbox"` e `aria-expanded`; lista `role="listbox"`; opções com `aria-selected`.
- Busca é o combobox — Com busca, o campo do topo tem `role="combobox"` e `aria-autocomplete="list"`; o destaque do trecho não muda o texto lido.
- Múltipla anunciada — A lista tem `aria-multiselectable="true"`; o gatilho lê “3 selecionados: …” e cada chip tem um botão “Remover X”.
- Um só valor, no lugar certo — O select real fica escondido da leitura e do foco, mas guarda o valor e dispara `change` — seu código não muda.
- Validação nativa — `required` funciona nos três tipos: sem escolha, o gatilho recebe o foco e fica inválido.
- Limite explicado — Com `data-max`, as opções restantes ficam desativadas e a lista mostra por quê.

## Tokens usados

O gatilho usa os tokens do campo de texto; a lista, os mesmos do menu; os chips, os do chip pequeno.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| size.control.md (`--ds-size-control-md`) | Altura (médio) | 40 px | 40 px |
| radius.md (`--ds-radius-md`) | Raio do gatilho | 12 px | 12 px |
| text.body-sm (`--ds-text-body-sm`) | Valor escolhido | 14/22 · regular | 14/22 · regular |
| color.border.control (`--ds-color-border-control`) | Contorno do gatilho | #3E516633 | #FFFFFF21 |
| color.border.strong (`--ds-color-border-strong`) | Hover e borda da lista | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Foco e lista aberta | #53657A | #C0CAD6 |
| color.fg.subtle (`--ds-color-fg-subtle`) | Seta, ícone, placeholder, grupo e caixa vazia | #53657A | #9C9792 |
| color.bg.raised (`--ds-color-bg-raised`) | Fundo da lista | #FFFFFF | #2C2A27 |
| radius.lg (`--ds-radius-lg`) | Raio da lista | 16 px | 16 px |
| shadow.xl (`--ds-shadow-xl`) | Sombra da lista | 0 8px 16px -4px rgb(45 58 74 / 0.08), 0 28px 56px -12px rgb(45 58 74 / 0.18) | 0 8px 16px -4px rgb(0 0 0 / 0.32), 0 28px 56px -12px rgb(0 0 0 / 0.6) |
| color.bg.hover (`--ds-color-bg-hover`) | Opção ativa e aviso de limite | #3E51660D | #FFFFFF0D |
| color.fg.brand (`--ds-color-fg-brand`) | Marca da escolhida e trecho encontrado | #3E5166 | #DAE0E8 |
| color.brand.solid (`--ds-color-brand-solid`) | Caixa marcada (múltipla) | #3E5166 | #C0CAD6 |
| color.bg.selected (`--ds-color-bg-selected`) | Chips escolhidos | #3E516612 | #C0CAD61A |
| color.danger.solid (`--ds-color-danger-solid`) | Contorno inválido | #C13834 | #FF9087 |
| duration.base (`--ds-duration-base`) | Seta e entrada da lista | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Curva da entrada | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| opacity.disabled (`--ds-opacity-disabled`) | Desativado e acima do limite | 0.44 | 0.44 |

## Uso

Escolha o tipo pelo tamanho da lista e pelo número de escolhas.

- **Faça:** lista longa com busca. Acima de ~15 opções, ligue a busca. Agrupe quando houver uma divisão natural (continente, área).
- **Evite:** múltipla com poucas opções. Com até 5 opções, checkboxes mostram tudo de uma vez e pedem um clique a menos.
- **Dica:** Limite? Diga qual. Coloque o limite na dica (“até 5”) — a lista também avisa quando ele chega.
