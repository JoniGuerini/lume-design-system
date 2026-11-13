# Formulários

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/formularios

Pedir informação sem fazer a pessoa adivinhar: um rótulo claro por campo, a dica antes do erro e erros que dizem como resolver — no momento certo.

Em números: regras nativas: 9 · momentos de validar: 3 · ação principal: 1 · contraste do erro: 7,9:1.

## Exemplo ao vivo

Um formulário de verdade, com `createForm`. Envie vazio, digite “ab” no nome, tente o endereço “pagamentos” — e veja o erro sumir enquanto corrige.

- Envie vazio: o resumo recebe o foco e cada link leva ao campo.
- Erro só ao sair do campo — e some na primeira tecla certa.
- Com tudo certo, o toast confirma e o formulário volta ao começo.

## Layout

Uma coluna, de cima para baixo, na ordem em que a pessoa pensa. O layout responde a uma pergunta: qual é a próxima coisa a preencher?

Uma coluna, rótulo em cima — O olho desce numa linha só. Rótulo ao lado do campo obriga a ler em zigue-zague — e não cabe no celular.

Lado a lado, só o que anda junto

Cidade e UF, início e fim, nome e sobrenome. Use `.ds-form__row`; no celular vira uma coluna.

A largura conta o tamanho da resposta — CEP curto, rua longa. Um campo largo para quatro dígitos parece pedir mais do que pede.

Marque o opcional, não o obrigatório — A maioria dos campos é obrigatória: avise isso uma vez no topo e marque só a exceção com “opcional”. Nada de asterisco.

Seções com carimbo

Formulário com mais de seis campos ganha seções numeradas, como no painel: `01 · Endereço`.

A dica fica embaixo, sempre visível — Placeholder some na primeira letra. O que a pessoa precisa saber para acertar vai na dica, que continua lá.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l1">Nome completo</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l1" name="pf-ex-l1" type="text" required="" spellcheck="false"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l2">E-mail</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l2" name="pf-ex-l2" type="text" required="" spellcheck="false"></div>
</div>

<div class="ds-form__row"><div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l3">Cidade</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l3" name="pf-ex-l3" type="text" required="" spellcheck="false"></div>
</div><div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l4">UF</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l4" name="pf-ex-l4" type="text" required="" spellcheck="false"></div>
</div></div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l5">CEP</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l5" name="pf-ex-l5" type="text" required="" spellcheck="false"></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l6">Rua</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l6" name="pf-ex-l6" type="text" required="" spellcheck="false"></div>
</div>

<p class="ds-form__note">Todos os campos são obrigatórios, exceto os marcados como opcionais.</p>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l7">Telefone<span class="ds-form-field__optional">opcional</span></label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l7" name="pf-ex-l7" type="text" spellcheck="false"></div>
</div>

<fieldset class="ds-form__section"><legend class="ds-form__legend"><span class="ds-section__stamp">02</span>Endereço</legend><div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-l8">Rua</label>
<div class="ds-field"><input class="ds-field__input" id="pf-ex-l8" name="pf-ex-l8" type="text" required="" spellcheck="false"></div>
</div></fieldset>
```

## Validação

Valide quando a pessoa termina, não enquanto ela digita. E, com o erro na tela, revalide a cada tecla — ninguém deve corrigir e continuar vendo o erro.

01 — Ao sair do campo

Se a pessoa digitou algo. Passar pelo campo com Tab não acusa nada.

02 — Ao enviar

Valida tudo, mostra o resumo no topo e leva o foco até ele.

03 — Enquanto corrige

Campo com erro revalida a cada tecla — o erro some na hora certa.

### Compare o mesmo campo, três momentos

Padrão. O erro aparece quando a pessoa termina — nunca no meio da digitação.

### Regras prontas vêm dos atributos do HTML

| Atributo | Mensagem padrão |
| --- | --- |
|  `required`  | Preencha este campo. · Escolha uma opção. · Marque esta opção para continuar. |
|  `type="email"`  | Use um e-mail no formato nome@empresa.com. |
|  `type="url"`  | Use um endereço completo, que comece com https://. |
|  `minlength`  | Use pelo menos 3 caracteres (faltam 1). |
|  `data-max`  | Use no máximo 40 caracteres (sobram 2). — o contador acompanha |
|  `min · max`  | Use um valor a partir de 1. · Use um valor até 99. |
|  `pattern`  | O texto do atributo title — escreva-o como instrução. |
|  `data-min (fieldset)`  | Marque pelo menos 2. |
|  `rules (JS)`  | Qualquer regra sua: devolva a mensagem, ou null quando estiver tudo certo. |

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M9.5 20.5H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h3.5M15.5 16.5 20 12l-4.5-4.5M20 12H9.5"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20 5v7a3 3 0 0 1-3 3H5M9 11l-4 4 4 4"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg>

<div class="ds-segmented" role="radiogroup" aria-labelledby="pf-modes-label">
<button type="button" class="ds-segmented__item" role="radio" data-mode="blur" aria-checked="true">Ao sair do campo</button><button type="button" class="ds-segmented__item" role="radio" data-mode="submit" aria-checked="false">Ao enviar</button><button type="button" class="ds-segmented__item" role="radio" data-mode="input" aria-checked="false">A cada tecla</button>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-val-email">E-mail de trabalho</label>
<div class="ds-field"><input class="ds-field__input" id="pf-val-email" name="email" type="email" required="" autocomplete="email" aria-describedby="pf-val-email-hint" spellcheck="false"></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="pf-val-email-hint">Digite “ana” e saia do campo — ou envie.</p></div>
</div>

<button type="submit" class="ds-btn ds-btn--secondary">Enviar</button>
```

## Mensagens de erro

O erro é uma instrução, não uma bronca: diz o que fazer para seguir. Ícone e texto sempre juntos — a cor sozinha não conta nada para quem não a vê.

- Resumo no topo. Recebe o foco ao enviar e diz quantos campos faltam. Cada linha é um link que leva ao campo.
- Erro embaixo do campo. Ícone e texto em `danger.fg`, no lugar da dica. Diz como resolver.
- Campo marcado. Contorno de perigo e `aria-invalid="true"`. Some assim que a pessoa corrige.

### Como escrever evite → prefira

| Situação | Evite | Prefira |
| --- | --- | --- |
| Campo vazio | Obrigatório | Preencha o nome do projeto. |
| Formato | E-mail inválido | Use um e-mail no formato nome@empresa.com. |
| Tamanho | Mínimo 8 | Use pelo menos 8 caracteres — faltam 3. |
| Conflito | Erro 409 | Esse endereço já está em uso. Que tal pagamentos-2? |
| Data | Data inválida | Use dia, mês e ano, como 31/10/2026. |
| Servidor | Ocorreu um erro inesperado! | Não conseguimos salvar agora. Seus dados continuam aqui — tente de novo. |

### Quando o erro não é de um campo .ds-alert

Falha ao salvar, conflito, aviso antes de uma mudança: um alerta no topo do formulário, com o tom certo e uma saída.

Marcação dos exemplos desta seção:

```html
<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Revise 2 campos para continuar</p>
<ul class="ds-alert__list" role="list"><li><a href="#pf-ex-nome">Nome do projeto: dê um nome ao projeto</a></li><li><a href="#pf-ex-mail">E-mail para avisos: use um e-mail no formato nome@empresa.com</a></li></ul>
</div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="pf-ex-nome">Nome do projeto</label>
<div class="ds-field"><span></span><input class="ds-field__input" id="pf-ex-nome" aria-invalid="true"></div>
<div class="ds-form-field__footer"><p class="ds-form-field__error"><span></span><ds-icon name="alert-circle"></ds-icon><span>Dê um nome ao projeto.</span></p></div>
</div>

<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">Não conseguimos criar o projeto</p><p class="ds-alert__text">Seus dados continuam aqui. Tente de novo em alguns segundos.</p><div class="ds-alert__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm"><ds-icon name="refresh"></ds-icon>Tentar de novo</button><span class="ds-alert__meta">Erro 503 · 14:32</span></div></div>
</div>

<div class="ds-alert ds-alert--warning">
<span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">O endereço muda os links antigos</p><p class="ds-alert__text">Quem tiver o link anterior vai cair numa página de aviso por 30 dias.</p></div>
</div>

<div class="ds-alert ds-alert--success">
<span class="ds-alert__icon"><ds-icon name="check-circle"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">Rascunho salvo</p><p class="ds-alert__text">Você pode fechar e continuar depois, de qualquer aparelho.</p></div>
</div>

<div class="ds-alert ds-alert--info">
<span class="ds-alert__icon"><ds-icon name="info"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">Convites vão por e-mail</p><p class="ds-alert__text">Quem ainda não tem conta recebe um link para criar.</p></div>
</div>

<div class="ds-alert ds-alert--compact">
<span class="ds-alert__icon"><ds-icon name="info"></ds-icon></span>
<div class="ds-alert__body"><p class="ds-alert__title">Compacto</p><p class="ds-alert__text">uma linha, dentro de painéis.</p></div>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-alert__close" aria-label="Fechar aviso"><ds-icon name="x"></ds-icon></button>
</div>
```

## Ações

Uma ação principal, com verbo que diz o que acontece: “Criar projeto”, não “OK”. E o botão de enviar nunca fica desativado — deixe enviar e explique o que falta.

Principal à direita — O olho termina a leitura à direita, onde está a ação que conclui. Cancelar fica ao lado, mais discreto.

Destrutiva longe da principal — Excluir vai para a outra ponta, com o tom de perigo — e sempre pede confirmação.

Enviando — O botão diz o que está acontecendo e não aceita um segundo clique. O resto do formulário continua legível.

No celular — As ações ocupam a largura e a principal sobe para o topo, perto do polegar e do fim da leitura.

Marcação dos exemplos desta seção:

```html
<div class="ds-form__actions"><button type="button" class="ds-btn ds-btn--secondary">Cancelar</button><button type="button" class="ds-btn ds-btn--primary">Salvar alterações</button></div>

<div class="ds-form__actions"><button type="button" class="ds-btn ds-btn--ghost ds-form__actions-start"><ds-icon name="trash"></ds-icon>Excluir projeto</button><button type="button" class="ds-btn ds-btn--secondary">Cancelar</button><button type="button" class="ds-btn ds-btn--primary">Salvar</button></div>

<div class="ds-form__actions"><button type="button" class="ds-btn ds-btn--secondary">Cancelar</button><button type="button" class="ds-btn ds-btn--primary" aria-disabled="true" data-busy=""><ds-icon name="loader"></ds-icon>Criando…</button></div>

<div class="ds-form__actions"><button type="button" class="ds-btn ds-btn--primary">Salvar alterações</button><button type="button" class="ds-btn ds-btn--secondary">Cancelar</button></div>
```

## Formulário longo

Seções numeradas, ações fixas no rodapé e um status do que ainda não foi salvo. Edite um campo abaixo e veja o rodapé acompanhar.

## Acessibilidade

O que `createForm` e os estilos garantem — e o que fica com você.

- Rótulo visível e ligado ao campo — Todo campo tem `<label for>`. Placeholder não é rótulo: some ao digitar e tem contraste baixo.
- Erro ligado ao campo — O texto do erro entra no `aria-describedby` e o campo ganha `aria-invalid="true"`. A dica continua ligada.
- Resumo recebe o foco — Tab Enter — Ao enviar com erro, o foco vai para o resumo; cada link leva ao campo (na seleção, ao gatilho; no grupo, à opção).
- Nunca só cor — Erro tem ícone e texto; o contorno de perigo é reforço. O contraste do texto de erro passa de 4,5:1 nos dois temas.
- Grupos com fieldset — Radios e checkboxes relacionados ficam em `<fieldset>` com `<legend>`; o erro do grupo fica ligado ao fieldset.
- Preenchimento automático — Use `autocomplete` (email, name, postal-code…) e o `type` certo, que abre o teclado certo no celular.
- Botão sempre ativo — Desativar o envio esconde o motivo. Deixe enviar e mostre o que falta; durante o envio, use `aria-disabled` e diga “Criando…”.

## Código

Estrutura em HTML com as classes do formulário; o comportamento vem de uma linha de JS.

### HTML

```html
<form class="ds-form" id="projeto" novalidate>
  <div data-form-summary></div>

  <fieldset class="ds-form__section">
    <legend class="ds-form__legend"><span class="ds-section__stamp">01</span>Sobre o projeto</legend>
    <div class="ds-form__row">
      <div class="ds-form-field">
        <label class="ds-form-field__label" for="nome">Nome do projeto</label>
        <div class="ds-field"><input class="ds-field__input" id="nome" name="nome"
          required minlength="3" data-max="40" aria-describedby="nome-dica"></div>
        <div class="ds-form-field__footer">
          <p class="ds-form-field__hint" id="nome-dica">Aparece no menu e na busca.</p>
          <span class="ds-form-field__counter" aria-hidden="true">0/40</span>
        </div>
      </div>
      <!-- outro campo… -->
    </div>
  </fieldset>

  <div class="ds-form__actions">
    <button type="reset" class="ds-btn ds-btn--secondary">Cancelar</button>
    <button type="submit" class="ds-btn ds-btn--primary">Criar projeto</button>
  </div>
</form>
```

### JavaScript

```html
import { createForm } from 'https://lumeui.dev/v/0.27/lume.js';

const form = createForm(document.querySelector('#projeto'), {
  rules: {
    // regra sua: devolva a mensagem, ou null quando estiver tudo certo
    endereco: (valor) => (ocupados.has(valor) ? 'Esse endereço já está em uso.' : null),
  },
  messages: { nome: { required: 'Dê um nome ao projeto.' } },
  onSubmit: async (dados) => {
    await salvar(dados);
    toast('Projeto criado', { tone: 'success' });
  },
});
```

### createForm(form, opções) ds/js/form.js

| Opção ou método | Valor | O que faz |
| --- | --- | --- |
|  `validateOn`  |  `'blur' (padrão) · 'submit' · 'input'`  | Quando mostrar o erro. Com erro na tela, o campo sempre revalida enquanto a pessoa corrige. |
|  `rules`  |  `{ nome: (valor, el, form) => string \| null }`  | Regras próprias, depois das nativas. Pode ser uma lista. |
|  `messages`  |  `{ nome: { required: '…' } }`  | Troca a mensagem de uma regra. No HTML: data-error-required, data-error-email… |
|  `summary`  |  `true · Element · false`  | Resumo de erros no topo (em [data-form-summary] ou no início do form). |
|  `onSubmit`  |  `(dados, form) => void`  | Só roda com tudo válido. dados vem do FormData; nomes repetidos viram lista. |
|  `onInvalid`  |  `(erros) => void`  | Roda quando o envio para por erro: [{ name, label, message }]. |
|  `validate()`  |  `boolean`  | Valida tudo e mostra os erros, sem mover o foco. |
|  `reset() · destroy()`  |  ``  | Limpa valores, erros e o resumo · desliga tudo. |

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Seis regras que evitam a maioria dos formulários ruins.

- **Faça:** peça só o necessário. Cada campo a mais é uma razão para desistir. O que dá para descobrir depois, pergunte depois.
- **Evite:** placeholder como rótulo. Some na primeira letra, e a pessoa esquece o que estava preenchendo no meio da frase.
- **Dica:** Escolha um padrão seguro. Visibilidade começa em “Privado”. O padrão certo evita uma pergunta — e um erro.
- **Faça:** erro que ensina. “Use pelo menos 8 caracteres — faltam 3” diz o que fazer. “Senha inválida” só diz que errou.
- **Evite:** limpar o que a pessoa digitou. Em erro, nunca apague os campos. Mantenha tudo e marque só o que precisa mudar.
- **Dica:** Confirme com toast. Deu certo? Um toast curto (“Projeto criado”) e a tela segue. Modal de sucesso interrompe à toa.
