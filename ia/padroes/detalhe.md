# Detalhe e edição

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/detalhe

A página de uma coisa só: quem ou o que é, os detalhes e o que mudou. Cada campo se edita no lugar, e cada mudança entra no histórico.

Em números: campo editado por vez: 1 · abas, no máximo: 5 · modo “Editar” da página: 0.

## Exemplo ao vivo

A página de uma pessoa da Listagem de dados. Edite os campos com o lápis e veja o histórico.

- Edite a equipe e salve com Enter: o valor muda e Atividade ganha uma linha.
- “Adicionar telefone” é o vazio que já é o botão.
- Apague o nome e tente salvar: o erro fica ali, na linha. Esc desiste.

Marcação dos exemplos desta seção:

```html
<nav class="ds-breadcrumb" aria-label="Você está em"><ol>
<li><a href="#/padroes/listagem">Pessoas</a></li>
<li><ds-icon name="chevron-right"></ds-icon><span aria-current="page" data-de-crumb="">Amanda Ribeiro</span></li>
</ol></nav>
```

## Anatomia

Seis partes. O cabeçalho fica igual em todas as abas.

- 1 — Caminho — O breadcrumb volta para a lista, com os filtros que a pessoa tinha. É o “Voltar” que nunca erra.
- 2 — Cabeçalho — Quem ou o que é, o estado e as ações daquela coisa. Fica igual em todas as abas.
- 3 — Abas — Visão geral primeiro. Atividade com o número de eventos. No máximo cinco abas.
- 4 — Propriedades — Rótulo e valor, um por linha. Quem pode mudar vê o lápis; o resto é só leitura.
- 5 — Resumo — Ao lado, os fatos que não se editam: quando entrou, último acesso, quantos projetos.
- 6 — Histórico — Quem mudou o quê e quando, do mais novo para o mais antigo. Cada edição entra aqui na hora.

## Regras

Seis decisões que valem para qualquer página de detalhe.

Editar no lugar, um campo por vez

Para mudar a equipe, ninguém precisa de uma página de formulário. O campo abre ali mesmo, com Salvar e Cancelar.

O lápis não se esconde

Fica à vista, não só com o mouse por cima. E só aparece onde a pessoa pode mesmo editar.

Enter salva, Esc desiste

Ao terminar, o foco volta para o lápis daquela linha, e não para o topo da página.

A tela é a confirmação

O valor novo no lugar e a linha nova no histórico já dizem que salvou. Toast aqui seria repetir.

Toda mudança tem autor e hora

“Ana Lima mudou a equipe de Produto para Design”: o antes, o depois e quem fez.

Vazio é convite

“Adicionar telefone” no lugar de um traço. Diz o que falta e já é o botão para preencher.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M16 4.5a2.12 2.12 0 0 1 3 3L8 18.5l-4 1 1-4z"></path><path d="m14 6.5 3 3"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="2.5" y="6" width="19" height="12" rx="2.5"></rect><path d="M6 10h.01M9.3 10h.01M12.6 10h.01M15.9 10h.01M18 10h.01M7 14h10"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1L3.5 8.5M3.5 4v4.5H8M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
```

## Mensagens

O histórico conta uma história: quem, o quê, de onde para onde.

| Situação | Evite | Prefira |
| --- | --- | --- |
| Sem valor | — ou N/A | Adicionar telefone |
| Histórico | Registro atualizado. | Você mudou a equipe de Design para Produto |
| Erro | Campo inválido. | Escreva o nome. |
| Data | 2026-11-14 09:12:33 | 14 de nov., 09:12 |

## Acessibilidade

Editar no lugar só funciona se o foco souber para onde ir.

- Lápis com nome completo — “Editar equipe”, não só “Editar”: numa lista de botões iguais, o nome é o que diferencia.
- Foco no campo e de volta — Ao abrir, o foco vai para o campo, com o texto selecionado. Ao salvar ou cancelar, volta para o lápis da mesma linha.
- Salvo, dito em voz alta — Uma região `role="status"` escondida diz “Equipe salva”: quem não vê a tela não fica na dúvida.
- Erro preso ao campo — `aria-invalid` e `aria-describedby` ligam a mensagem ao campo; o foco continua nele.
- Estrutura que se lê — Breadcrumb com `aria-current`, abas no padrão ARIA e propriedades em `<dl>`: o leitor de tela diz “Equipe, Design”.

## Código

As propriedades são uma `ds-dl`; a edição troca o `<dd>` por um formulário pequeno. As abas vêm de `mountTabs`.

```html
<dl class="ds-dl ds-dl--lines">
  <div class="ds-dl__row">
    <dt>Equipe</dt>
    <dd>
      <span>Design</span>
      <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" aria-label="Editar equipe">…</button>
    </dd>
  </div>
</dl>

<!-- ao clicar no lápis, o dd vira: -->
<form>
  <div class="ds-field ds-field--sm"><input class="ds-field__input" aria-label="Equipe" value="Design"></div>
  <button type="submit" class="ds-btn ds-btn--primary ds-btn--sm">Salvar</button>
  <button type="button" class="ds-btn ds-btn--ghost ds-btn--sm">Cancelar</button>
</form>
<p class="ds-visually-hidden" role="status"></p>   <!-- “Equipe salva” -->
```

```html
import { mountTabs } from 'https://lumeui.dev/v/1.12/lume.js';

mountTabs(pagina);

function editar(linha) {
  const lapis = linha.querySelector('button');
  linha.dd.replaceChildren(formulario);
  formulario.querySelector('input').select();

  formulario.onsubmit = async (e) => {
    e.preventDefault();
    await salvar(linha.id, formulario.input.value);
    mostrar(linha);                          // o valor novo já é a confirmação
    status.textContent = 'Equipe salva';
    lapis.focus();
  };
  formulario.onkeydown = (e) => e.key === 'Escape' && (mostrar(linha), lapis.focus());
}
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Detalhe é para uma coisa só. Para comparar várias, volte para a lista.

- **Faça:** identidade sempre à vista. Nome, estado e ações ficam no cabeçalho, acima das abas. Trocar de aba não pode fazer a pessoa esquecer onde está.
- **Evite:** um botão Editar para a página toda. Transformar tudo em formulário para mudar um campo faz a pessoa procurar o campo de novo e salvar o que não mexeu.
- **Dica:** Campos que andam juntos, edite juntos. Endereço, cobrança: quando um campo não faz sentido sem os outros, abra um painel ou modal com o grupo inteiro.
