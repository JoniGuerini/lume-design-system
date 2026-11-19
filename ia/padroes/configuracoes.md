# Configurações

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/configuracoes

Onde a pessoa ajusta o perfil, os avisos e a aparência, e de vez em quando faz algo sério. O que é leve vale na hora; texto espera o Salvar; o que não volta pede confirmação.

Em números: seções: 4 · botão Salvar: 1 · confirmações: 2.

## Exemplo ao vivo

As configurações de uma conta no Lume. Mexa nos ajustes, edite o perfil e tente trocar de seção sem salvar.

Você

- Perfil
- Notificações
- Aparência

Espaço de trabalho

- Zona de perigo

Tudo salvo

- Mude o nome e vá para Notificações: o Lume pergunta se é para descartar.
- Ligue um switch: “Salvo” aparece ao lado do título, sem botão.
- Em Aparência, escolha Escuro: o palco inteiro troca de tema.
- Em Zona de perigo, Excluir só libera depois de digitar “Lume”.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-nome">Nome</label>
<div class="ds-field"><input class="ds-field__input" id="cf-nome" name="cf-nome" type="text" value="Ana Lima" autocomplete="name" spellcheck="false" data-cf-input=""></div>
<div class="ds-form-field__footer" hidden=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-email">E-mail</label>
<div class="ds-field"><input class="ds-field__input" id="cf-email" name="cf-email" type="email" value="ana@lume.app" autocomplete="email" aria-describedby="cf-email-hint" spellcheck="false" data-cf-input=""></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="cf-email-hint">Se mudar, enviamos um link para confirmar. Até lá, vale o e-mail atual.</p></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-sobre">Sobre você</label>
<div class="ds-field ds-field--multiline"><textarea class="ds-field__input" id="cf-sobre" name="cf-sobre" rows="3" data-cf-input="">Cuido do design do Lume.</textarea></div>
</div>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-cf-discard="" disabled="">Descartar</button>

<button type="submit" class="ds-btn ds-btn--primary ds-btn--sm" data-cf-save="" disabled="">Salvar</button>

<label class="ds-switch ds-switch--end">
<input type="checkbox" role="switch" class="ds-switch__input" data-cf-instant="mencoes" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Menções e respostas</span><span class="ds-choice__description">Quando alguém fala com você num comentário.</span></span>
</label>

<label class="ds-switch ds-switch--end">
<input type="checkbox" role="switch" class="ds-switch__input" data-cf-instant="convites" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Convites aceitos</span><span class="ds-choice__description">Quando uma pessoa que você convidou entra.</span></span>
</label>

<label class="ds-switch ds-switch--end">
<input type="checkbox" role="switch" class="ds-switch__input" data-cf-instant="novidades">
<span class="ds-choice__text"><span class="ds-choice__label">Novidades do Lume</span><span class="ds-choice__description">Uma vez por mês, no máximo.</span></span>
</label>
```

## Na hora, no botão ou com confirmação

A decisão central do padrão: quanto custa errar decide quando o ajuste vale.

| Ajuste | Vale | Por quê |
| --- | --- | --- |
| Liga e desliga | Na hora, com “Salvo” | É um clique, e outro clique volta atrás. Um botão Salvar só daria chance de esquecer. |
| Poucas opções | Na hora | Tema, idioma, frequência: ver o efeito é a melhor confirmação. |
| Texto | No botão Salvar | Salvar a cada letra grava pela metade e mostra erro antes da hora. |
| O que não volta | Com confirmação | Excluir, trocar de plano, transferir: a única hora em que perguntar protege de verdade. |

## Anatomia

Cinco partes. A barra de salvar só aparece onde há texto.

- 1 — Navegação das seções — À esquerda, agrupada por quem é afetado: você ou o espaço de trabalho. A zona de perigo é sempre a última.
- 2 — Linha de ajuste — Nome, uma frase do efeito e o controle à direita. A frase diz o que muda, não repete o nome.
- 3 — Aviso de salvo — Um “Salvo” discreto ao lado do título da seção, que some sozinho. Nada de toast para cada switch.
- 4 — Barra de salvar — Só nos campos de texto: o estado (“Alterações não salvas”), Descartar e Salvar, que só funcionam quando algo mudou.
- 5 — Zona de perigo — Contorno no tom de perigo, cada ação na sua linha e o botão dizendo o que faz.

## Regras

Seis decisões que valem para qualquer tela de configurações.

Liga e desliga vale na hora

Switch é efeito imediato por definição. Se precisa de Salvar, o controle certo é um checkbox num formulário.

Texto espera o Salvar

E o Salvar só funciona quando algo mudou. Ao lado, o estado em palavras: “Tudo salvo” ou “Alterações não salvas”.

Sair sem salvar pergunta

Trocar de seção com o perfil pela metade pergunta se é para descartar. É o que se perderia sem aviso.

Perigo fica no fim e à parte

Numa seção própria, com contorno no tom de perigo. Ninguém deve chegar lá por engano, rolando.

Confirmar exige ler

Para o que não volta, a pessoa digita o nome do espaço. O botão diz “Excluir espaço de trabalho”, nunca “OK”.

Cada seção tem endereço

No app, cada item é um link (/configuracoes/notificacoes). Dá para mandar para alguém e o Voltar funciona.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="2.5" y="6.5" width="19" height="11" rx="5.5"></rect><circle cx="16" cy="12" r="2.75"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M16 4.5a2.12 2.12 0 0 1 3 3L8 18.5l-4 1 1-4z"></path><path d="m14 6.5 3 3"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V13"></path><path d="M12 16.5h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5l7.5 2.8v5.4c0 4.4-3.1 7.9-7.5 8.8-4.4-.9-7.5-4.4-7.5-8.8V6.3z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 7V5h14v2M12 5v14M9 19h6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"></path></svg>
```

## Mensagens

O que é leve, em uma palavra. O que é sério, com números e o nome do que se perde.

| Situação | Evite | Prefira |
| --- | --- | --- |
| Salvo na hora | Suas preferências foram atualizadas com sucesso! | Salvo |
| Sair sem salvar | Tem certeza? | Descartar as alterações do perfil? |
| Excluir | Esta ação é irreversível. Deseja continuar? | Isso apaga 12 projetos, 48 arquivos e o acesso de 22 pessoas. |
| Botão de confirmar | OK | Excluir espaço de trabalho |

## Acessibilidade

Salvar na hora não pode ser silencioso para quem não vê a tela.

- Seção atual marcada — A navegação tem nome e `aria-current` na seção aberta. Ao trocar, o foco vai para o título da seção (`tabindex="-1"`), e o leitor de tela diz onde a pessoa chegou.
- Switch com nome e efeito — `role="switch"` dentro do `<label>`, com o nome e a descrição: o leitor de tela diz “Menções e respostas, ligado” e a frase do efeito.
- “Salvo” anunciado — O aviso fica numa região `role="status"`: é dito sem tirar o foco do controle.
- Estado da barra em palavras — “Alterações não salvas” fica em `aria-live`; Salvar desativado tem o motivo ao lado, à vista.
- Exclusão pelo teclado — O modal abre com o foco no campo do nome. Enter confirma só quando o nome confere; Esc cancela e o foco volta ao botão Excluir.

## Código

Switches e `createSegmented` gravam na hora; o perfil é um `<form>` comum; a exclusão usa `createModal` para travar o botão até o nome conferir.

```html
<section aria-labelledby="notificacoes-titulo">
  <header>
    <h2 id="notificacoes-titulo" tabindex="-1">Notificações</h2>
    <p role="status" id="salvo"></p>   <!-- “Salvo” aparece aqui -->
  </header>

  <label class="ds-switch ds-switch--end">
    <input type="checkbox" role="switch" class="ds-switch__input" name="mencoes" checked>
    <span class="ds-choice__text">
      <span class="ds-choice__label">Menções e respostas</span>
      <span class="ds-choice__description">Quando alguém fala com você num comentário.</span>
    </span>
  </label>
</section>
```

```html
import { createModal, toast } from 'https://lumeui.dev/v/1.14/lume.js';

// Liga e desliga: grava na hora e avisa sem tirar o foco
secao.addEventListener('change', async (e) => {
  await salvar({ [e.target.name]: e.target.checked });
  salvo.textContent = 'Salvo';
  setTimeout(() => (salvo.textContent = ''), 2000);
});

// Excluir: só confirma quem digitou o nome
const modal = createModal({
  title: 'Excluir “Lume”?', tone: 'danger', size: 'sm', body: corpo,
  actions: [
    { label: 'Cancelar', value: 'cancel' },
    { label: 'Excluir espaço de trabalho', value: 'confirm', variant: 'danger' },
  ],
});
const excluir = modal.el.querySelector('[data-ds-modal-close="confirm"]');
excluir.disabled = true;
campo.addEventListener('input', () => (excluir.disabled = campo.value.trim() !== 'Lume'));
if ((await modal.open()) === 'confirm') excluirEspaco();
modal.destroy();
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Configurações são para o que a pessoa muda de vez em quando. O que ela muda todo dia mora na própria tela.

- **Faça:** agrupe por quem é afetado. “Você” e “Espaço de trabalho” deixam claro se a mudança é só sua ou de todo mundo, antes mesmo de abrir a seção.
- **Evite:** um Salvar para a página toda. Misturar switches, tema e texto num Salvar só faz a pessoa sair achando que ligou algo que não ligou.
- **Dica:** Ajuste com muitos níveis vira página. Permissões por projeto, regras de cobrança: quando a linha precisa de uma tabela, ela leva para uma página própria.
