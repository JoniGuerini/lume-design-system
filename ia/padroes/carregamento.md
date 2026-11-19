# Carregamento e erros

Seção do Lume: Padrões. Página: https://lumeui.dev/#/padroes/carregamento

O caminho de uma página do clique até o conteúdo, e o que fazer quando ele dá errado: esqueleto com a forma certa, aviso quando demora, erro só na parte que falhou e nada do que a pessoa escreveu perdido.

Em números: sem indicador: < 1 s · avisar demora: 3 s · erro sem saída: 0.

## Exemplo ao vivo

A página de um projeto. Escolha o que simular em cima do palco. Os estados dentro de um cartão seguem Estados vazios.

### Telas

### Comentários

- Carregando: o esqueleto tem a forma das telas e dos comentários, e nada pula quando eles chegam.
- Lento: depois de 3 segundos aparece o aviso, com Cancelar.
- Erro ao salvar: clique em Salvar notas. O texto fica, e Tentar de novo resolve.

Marcação dos exemplos desta seção:

```html
<div class="ds-segmented" role="radiogroup" aria-labelledby="lo-sim-label" data-lo-sim="">
<button type="button" class="ds-segmented__item" role="radio" data-value="carregando" aria-checked="true">Carregando</button><button type="button" class="ds-segmented__item" role="radio" data-value="lento" aria-checked="false">Lento</button><button type="button" class="ds-segmented__item" role="radio" data-value="parte" aria-checked="false">Parte falhou</button><button type="button" class="ds-segmented__item" role="radio" data-value="salvar" aria-checked="false">Erro ao salvar</button><button type="button" class="ds-segmented__item" role="radio" data-value="404" aria-checked="false">Não encontrada</button>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-lo-replay="" aria-label="Recomeçar a simulação" data-ds-tooltip="Recomeçar"><ds-icon name="refresh"></ds-icon></button>

<span class="ds-skeleton"></span>

<span class="ds-skeleton ds-skeleton--text"></span>

<div class="ds-form-field">
<label class="ds-form-field__label" for="lo-notes">Notas do projeto</label>
<div class="ds-field ds-field--multiline"><textarea class="ds-field__input" id="lo-notes" rows="2">Revisar o contraste do rodapé antes de publicar.</textarea></div>
</div>

<button type="submit" class="ds-btn ds-btn--primary ds-btn--sm" data-lo-save="">Salvar notas</button>
```

## Quanto tempo, qual resposta

A espera decide o que mostrar. Os números são da percepção de quem usa, não do servidor.

| Espera | O que mostrar |
| --- | --- |
| Até 1 s | Nada. Um indicador que pisca e some atrapalha mais que ajuda. |
| 1 a 3 s | Esqueleto com a forma da página que vai chegar, para nada pular quando chegar. |
| Mais de 3 s | O esqueleto continua e uma frase diz que está demorando, com Cancelar. |
| Falhou | Só a parte que falhou mostra o erro, com Tentar de novo. O resto da página continua. |

## Regras

Seis decisões que valem para qualquer espera ou falha.

Esqueleto com a forma certa

As formas cinza ocupam o lugar exato do que vem: título, linhas, avatar. Quando o conteúdo chega, nada pula.

Demorou, diga

Passou de 3 segundos, uma frase avisa e oferece cancelar. Esqueleto infinito parece travado.

O erro fica onde falhou

Se só os comentários falharam, só o cartão dos comentários mostra o erro. Derrubar a página inteira por uma parte é perder o resto.

O que a pessoa escreveu fica

Salvar falhou? O texto continua no campo, o aviso diz isso e Tentar de novo usa o mesmo conteúdo.

Sempre uma saída

Todo erro tem uma ação: tentar de novo, voltar, ver os outros projetos. Erro sem botão é beco sem saída.

Sem código na tela

“Erro 500” não ajuda ninguém. Diga o que não carregou e o que fazer; o código vai para o registro.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="9" rx="2"></rect><rect x="13.5" y="3.5" width="7" height="5" rx="2"></rect><rect x="13.5" y="11.5" width="7" height="9" rx="2"></rect><rect x="3.5" y="15.5" width="7" height="5" rx="2"></rect></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="2"></rect><rect x="13.5" y="4" width="6.5" height="6.5" rx="2"></rect><rect x="4" y="13.5" width="6.5" height="6.5" rx="2"></rect><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2"></rect></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5l7.5 2.8v5.4c0 4.4-3.1 7.9-7.5 8.8-4.4-.9-7.5-4.4-7.5-8.8V6.3z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.3-4.6L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.6l1.7-2.1M20 20v-4.5h-4.5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 7V5h14v2M12 5v14M9 19h6"></path></svg>
```

## Mensagens

O que não funcionou, o que continua funcionando e o que fazer agora.

| Situação | Evite | Prefira |
| --- | --- | --- |
| Demorando | Aguarde… | Está demorando mais que o normal. Cancelar |
| Parte falhou | Erro 500: Internal Server Error | Não conseguimos carregar os comentários. O resto da página funciona. |
| Salvar falhou | Falha na operação. | Não conseguimos salvar. O que você escreveu continua aqui. |
| Não encontrada | 404 Not Found | Esta página não existe mais. Ver projetos |

## Acessibilidade

Quem não vê o esqueleto precisa saber que algo está vindo, e quando chegou.

- Carregando, dito — A área que espera tem `aria-busy="true"` e um nome (“Carregando telas”); as formas do esqueleto não são lidas.
- Chegou, sem roubar o foco — Quando o conteúdo chega, `aria-busy` sai e a região `aria-live="polite"` lê o que entrou. O foco fica onde estava.
- Demora anunciada — O aviso de demora é `role="status"`; Cancelar é um botão de verdade, alcançável pelo teclado.
- Erro ao salvar recebe o foco — O alerta tem `role="alert"` e recebe o foco; Tentar de novo é o primeiro botão depois dele.
- Movimento reduzido — O pulso do esqueleto e o giro do spinner param com `prefers-reduced-motion`; a forma continua dizendo que está carregando.

## Código

Esqueleto e spinner são CSS (`ds-skeleton`, `ds-spinner`); os tempos e o erro por parte são do seu código.

```html
<!-- carregando: a forma do que vem -->
<div aria-busy="true" aria-label="Carregando telas">
  <span class="ds-skeleton" style="--w:32px; --h:32px"></span>
  <span class="ds-skeleton ds-skeleton--text" style="--w:60%"></span>
</div>

<!-- uma parte falhou: o erro fica no cartão -->
<section aria-labelledby="comentarios">
  <h2 id="comentarios">Comentários</h2>
  <p>Não conseguimos carregar os comentários. O resto da página funciona.</p>
  <button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">Tentar de novo</button>
</section>
```

```html
import { toast } from 'https://lumeui.dev/v/1.12/lume.js';

// esqueleto só depois de 1 s; aviso de demora depois de 3 s
const esqueleto = setTimeout(() => mostrarEsqueleto(), 1000);
const demora = setTimeout(() => avisarDemora(), 3000);
try {
  mostrar(await fetch('/api/projetos/12').then((r) => r.json()));
} catch {
  mostrarErro(cartao);   // só a parte que falhou
} finally {
  clearTimeout(esqueleto); clearTimeout(demora);
}
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

Esqueleto para o que tem forma conhecida; spinner para o que não tem (um botão, uma ação).

- **Faça:** carregue por partes. O cabeçalho e o que já se sabe aparecem primeiro; o que depende de outra busca chega depois, cada um no seu cartão.
- **Evite:** spinner no meio de uma página vazia. Não diz o que vem nem quanto falta, e quando o conteúdo chega tudo pula de lugar.
- **Dica:** Tente de novo sozinho, uma vez. Falha de rede costuma ser passageira. Uma nova tentativa automática antes de mostrar o erro poupa a pessoa de muita coisa.
