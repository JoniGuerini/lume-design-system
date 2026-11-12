# Barra de progresso

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/barra-de-progresso

Mostra quanto de uma tarefa já foi feito. Quando não dá para saber quanto falta, a versão indeterminada diz que algo está acontecendo.

Em números: JavaScript: 0 · base: progress · espessuras: 4 · 8 px · tons: 4.

## Exemplo

```html
<div class="ds-progress-field">
  <div class="ds-progress-field__head">
    <span id="envio">Enviando arquivos</span>
    <span class="ds-progress-field__value">62%</span>
  </div>
  <progress class="ds-progress" aria-labelledby="envio" value="62" max="100"></progress>
</div>
```

## Variantes

Use o tom para o resultado, não para o meio do caminho.

Determinada `value · max` — Quando dá para medir, sempre mostre o número.

Indeterminada `sem value` — Para quando não há como saber quanto falta.

Concluída `ds-progress--success` — Junto com um texto que diz que terminou.

Com erro `ds-progress--danger` — Mostra onde parou; o texto diz o motivo.

Marcação dos exemplos desta seção:

```html
<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pb-1">Enviando arquivos</span><span class="ds-progress-field__value" data-value="">62%</span></div>
<progress class="ds-progress" aria-labelledby="pb-1" value="62" max="100"></progress>
</div>

<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pb-2">Preparando</span></div>
<progress class="ds-progress" aria-labelledby="pb-2"></progress>
</div>

<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pb-3">Enviado</span><span class="ds-progress-field__value" data-value="">100%</span></div>
<progress class="ds-progress ds-progress--success" aria-labelledby="pb-3" value="100" max="100"></progress>
</div>

<div class="ds-progress-field">
<div class="ds-progress-field__head"><span id="pb-4">Falha no envio</span><span class="ds-progress-field__value" data-value="">38%</span></div>
<progress class="ds-progress ds-progress--danger" aria-labelledby="pb-4" value="38" max="100"></progress>
</div>
```

## Acessibilidade

O elemento nativo já é anunciado como barra de progresso, com o valor atual.

- Com nome — Ligue o texto à barra com `aria-labelledby`, para saber o que está progredindo.
- Não só cor — Sucesso e erro precisam de texto; a cor apenas reforça.
- Avise no fim — Leitores de tela não anunciam cada mudança: avise o fim em role="status".
- Movimento reduzido — A indeterminada para de se mover e vira uma faixa estática.

## Tokens usados

Tudo o que a barra consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.border.field (`--ds-color-border-field`) | Trilho | #3E5166AD | #FFFFFF61 |
| color.brand.solid (`--ds-color-brand-solid`) | Preenchimento | #3E5166 | #C0CAD6 |
| color.success.solid (`--ds-color-success-solid`) | Concluída | #1E854A | #72CB8B |
| color.warning.solid (`--ds-color-warning-solid`) | Atenção | #FFB851 | #FFB851 |
| color.danger.solid (`--ds-color-danger-solid`) | Com erro | #C13834 | #FF9087 |
| radius.full (`--ds-radius-full`) | Cantos | 9999 px | 9999 px |

## Uso

Barra, spinner ou medidor?

- **Faça:** tarefas com mais de 10 segundos. Envios e importações, em que saber quanto falta acalma.
- **Evite:** medir o que não é tarefa. Espaço usado ou meta do mês são medidas: use o Medidor, em Gráficos.
- **Dica:** Espera curta? Spinner. Abaixo de 10 segundos, um Spinner basta.
