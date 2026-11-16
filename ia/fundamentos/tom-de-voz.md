# Tom de voz

Seção do Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/tom-de-voz

A voz é quem o produto é, e não muda. O tom é como essa voz soa em cada momento: um aviso de erro não fala como uma comemoração, e um app de finanças não fala como um jogo.

Em números: tons: 4 · situações: 5 · regras: 6.

## Voz e tom

A voz do Lume tem três traços. Eles valem em todos os tons; o tom só decide quanto de cada um aparece.

Clara

Palavras do dia a dia, uma ideia por frase.

Não é: jargão técnico nem código de erro.

Direta

Diz o que aconteceu e o que fazer em seguida.

Não é: seca nem ríspida.

Gentil

Cuida de quem errou e nunca põe a culpa na pessoa.

Não é: melosa nem cheia de desculpas.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 19.5C6 15.6 3.5 12.6 3.5 9.3A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8.5 2.3c0 3.3-2.5 6.3-8.5 10.2z"></path></svg>
```

## Tons

Quatro tons prontos, com as mesmas cinco situações escritas do jeito de cada um. Troque o tom e compare: os botões quase não mudam, porque verbo é verbo em qualquer tom.

Neutro

Claro e direto. É o tom do Lume e a escolha segura quando não há motivo para outro.

Combina com — Ferramentas, painéis, design systems

- Fala com a pessoa por “você”, sem rodeio
- Frases curtas, com o verbo no começo
- Sem exclamação e sem piada

Sucesso

Espera

Erro

Exclusão

Vazio

Marcação dos exemplos desta seção:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Tom">
<button type="button" class="ds-segmented__item" role="radio" data-value="neutro" aria-checked="true">Neutro</button><button type="button" class="ds-segmented__item" role="radio" data-value="acolhedor" aria-checked="false">Acolhedor</button><button type="button" class="ds-segmented__item" role="radio" data-value="profissional" aria-checked="false">Profissional</button><button type="button" class="ds-segmented__item" role="radio" data-value="leve" aria-checked="false">Leve</button>
</div>

<div class="ds-toast ds-toast--success" data-open=""><span class="ds-toast__icon"><ds-icon name="check-circle"></ds-icon></span>
<span class="ds-toast__message">Alterações salvas.</span>
</div>

<span class="ds-spinner ds-spinner--sm" aria-hidden="true"></span>

<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Não foi possível salvar</p>
<p class="ds-alert__text">Confira a conexão e tente de novo. O que você escreveu continua aqui.</p>
<div class="ds-alert__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm"><ds-icon name="refresh"></ds-icon>Tentar de novo</button></div>
</div>
</div>

<div class="ds-modal ds-modal--inline ds-modal--danger">
<div class="ds-modal__header">
<span class="ds-modal__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-modal__heading"><p class="ds-modal__title">Excluir “Site novo”?</p></div>
</div>
<div class="ds-modal__body">O projeto e os 12 arquivos dele saem para sempre.</div>
<div class="ds-modal__footer">
<button type="button" class="ds-btn ds-btn--secondary">Cancelar</button>
<button type="button" class="ds-btn ds-btn--danger">Excluir projeto</button>
</div>
</div>

<div class="ds-empty ds-empty--compact">
<span class="ds-empty__icon"><ds-icon name="folder"></ds-icon></span>
<p class="ds-empty__title">Nenhum projeto ainda</p>
<p class="ds-empty__description">Crie o primeiro para começar a organizar o trabalho.</p>
<div class="ds-empty__actions"><button type="button" class="ds-btn ds-btn--primary ds-btn--sm"><ds-icon name="plus"></ds-icon>Criar projeto</button></div>
</div>
```

## Tom por situação

O tom do app é um só, mas ele se ajusta ao momento. O que ele pode mudar e o que fica igual em qualquer tom:

| Situação | O tom pode | Nenhum tom pode |
| --- | --- | --- |
| Sucesso | Comemorar pouco, ou nada quando a tela já mostra o resultado. | Interromper com um modal para dizer que deu certo. |
| Erro | Mudar o jeito de dizer: mais curto, mais calmo, mais formal. | Culpar a pessoa, fazer piada ou esconder o que fazer. |
| Exclusão | Oferecer uma saída mais leve, como arquivar. | Suavizar a consequência: o que sai, sai para sempre. |
| Espera | Dar contexto e, quando souber, quanto tempo falta. | Prometer um prazo que não dá para cumprir. |
| Vazio | Convidar e mostrar o primeiro passo. | Deixar a tela sem nenhuma ação. |

## Regras de escrita

Seis regras que valem para qualquer tom e qualquer idioma.

Verbo no botão

“Salvar”, “Excluir projeto”. Nunca “OK” ou “Sim”: o botão diz o que vai fazer.

O que houve e o que fazer

Toda mensagem de problema responde às duas perguntas, nessa ordem.

Sem culpa

“Não foi possível salvar”, e não “Você digitou errado”. O sistema assume o problema.

Curto primeiro

A frase principal resolve sozinha; o detalhe vem depois, para quem precisar.

Mesma palavra, mesma coisa

Excluir é sempre excluir. Trocar por apagar ou remover na tela seguinte confunde.

Números e datas pelo idioma

Formate com `Intl`, nunca à mão. O mesmo valor muda de forma em cada idioma.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="3.5"></rect><path d="M8.5 12h7"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V13"></path><path d="M12 16.5h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5l7.5 2.8v5.4c0 4.4-3.1 7.9-7.5 8.8-4.4-.9-7.5-4.4-7.5-8.8V6.3z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 7V5h14v2M12 5v14M9 19h6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M3.5 5v6.2a1.5 1.5 0 0 0 .44 1.06l8 8a1.5 1.5 0 0 0 2.12 0l6.2-6.2a1.5 1.5 0 0 0 0-2.12l-8-8A1.5 1.5 0 0 0 11.2 3.5H5A1.5 1.5 0 0 0 3.5 5z"></path><path d="M8 8h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.2 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.2-3.5-8.5s1.2-6.2 3.5-8.5z"></path></svg>
```

## Mensagens

Os textos que mais aparecem, antes e depois. O “depois” está no tom Neutro.

| Situação | Evite | Prefira |
| --- | --- | --- |
| Confirmação | OK | Excluir projeto |
| Falha de rede | Erro 503: Service Unavailable | Não foi possível conectar. Tente de novo em alguns segundos. |
| Campo inválido | Entrada inválida. | Digite um e-mail no formato nome@exemplo.com. |
| Lista vazia | Sem dados. | Nenhum pedido ainda. Os pedidos aparecem aqui assim que chegarem. |
| Sucesso | Operação realizada com sucesso! | Pedido enviado. |

## Nos três idiomas

Traduzir não basta: cada idioma tem os costumes dele. O tom continua o mesmo, mas a forma muda.

|  | Português | English | Español |
| --- | --- | --- | --- |
| Tratamento | “Você” em todos os tons | “you” em todos os tons | “tú”; “usted” no Profissional |
| Maiúsculas | Só a primeira palavra: “Criar projeto” | Também só a primeira: “Create project” | Só a primeira: “Crear proyecto” |
| Pontuação | Aspas curvas “ ” | Aspas curvas “ ” e apóstrofo ’ | ¿ e ¡ abrem a pergunta e a exclamação |
| Números e datas | 12.345,5 · 15/11/2026 · R$ 49,90 | 12,345.5 · 11/15/26 · R$49.90 | 12.345,5 · 15/11/26 · 49,90 R$ |
| Comprimento | Até 30% mais longo que o inglês | Costuma ser o mais curto | Até 30% mais longo que o inglês |

## Como padronizar no seu app

Escolha um tom, tire os textos do meio do código e dê o mesmo guia a quem escreve, gente ou IA. É o que o Lume faz com o `messages.js`.

- 1 — Escolha a voz e um tom — Três traços de voz e um dos quatro tons, ou um seu. Um tom por app: misturar tons de uma tela para outra parece dois produtos.
- 2 — Textos num arquivo, com chaves — O código pede a chave, não escreve a frase. Revisar o tom vira editar um arquivo, e trocar de tom vira trocar de arquivo.
- 3 — O mesmo guia para a IA — Cole o trecho abaixo antes de pedir textos. Ele segue o tom escolhido lá em cima.

```html
// mensagens/neutro.js
export default {
  'salvar.ok': 'Alterações salvas.',
  'salvar.erro': 'Não foi possível salvar',
  'projetos.vazio': 'Nenhum projeto ainda',
};

// mensagens/acolhedor.js
export default {
  'salvar.ok': 'Pronto, está tudo salvo.',
  'salvar.erro': 'Não conseguimos salvar agora',
  'projetos.vazio': 'Seu espaço está pronto',
};

// mensagens/index.js: o tom do app é uma escolha só
import neutro from './neutro.js';
import acolhedor from './acolhedor.js';

const TONS = { neutro, acolhedor };
const tom = 'acolhedor';

export const t = (chave) => TONS[tom][chave] ?? TONS.neutro[chave] ?? chave;

// na tela
toast(t('salvar.ok'));
```

```html
Escreva os textos da interface no tom Neutro.
O tom: Claro e direto. É o tom do Lume e a escolha segura quando não há motivo para outro.
- Fala com a pessoa por “você”, sem rodeio.
- Frases curtas, com o verbo no começo.
- Sem exclamação e sem piada.
- Botões começam com verbo e dizem o que fazem; nunca “OK”.
- Erros dizem o que aconteceu e o que fazer, sem culpar a pessoa e sem piada.
- Exclusão deixa a consequência clara; espera diz quanto tempo falta, quando der.
- Mesma palavra para a mesma coisa em todas as telas.

Devolva cada texto com a chave dele no arquivo de mensagens.
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Tom bom não chama atenção para si: a pessoa só percebe que entendeu.

- **Faça:** escreva o tom antes dos textos. Três traços e cinco exemplos, como nesta página, resolvem mais discussão do que qualquer revisão no fim.
- **Evite:** um tom por tela. Formal no cadastro, cheio de piada no painel e seco no erro: a pessoa não sabe com quem está falando.
- **Dica:** Leia em voz alta. Se a frase soaria estranha dita por uma pessoa do outro lado do balcão, reescreva.
