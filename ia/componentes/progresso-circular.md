# Progresso circular

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/progresso-circular

O mesmo progresso da barra, num anel. Cabe num card, num cabeçalho ou ao lado de um item de lista, onde a barra não teria largura.

Em números: tamanhos: 20 · 56 · 80 · tons: 4 · formas: determinado e indeterminado · papel ARIA: progressbar.

## Exemplo

```html
<span data-envio></span>

<script type="module">
  import { progressRingHtml, setProgressRing } from 'https://lumeui.dev/v/1.7/lume.js';

  const box = document.querySelector('[data-envio]');
  box.innerHTML = progressRingHtml(0, { label: 'Enviando arquivos' });
  setProgressRing(box.firstElementChild, 62);
</script>
```

## Variantes

Os tons são os da barra: para o resultado, não para o meio do caminho.

Tamanhos `size: 'sm' · 'md' · 'lg'` — 20 px numa linha de texto, sem número; 56 px no padrão; 80 px quando o progresso é o assunto.

Indeterminado `progressRingHtml(null)` — Para quando não dá para saber quanto falta. Com movimento reduzido, o arco para.

Tons `tone: 'success' · 'warning' · 'danger'` — Concluído, perto do limite e com erro. Sempre com um texto que diga o resultado.

- Lume 1.0
- Documentação para IAs
- Lume 1.1

Numa lista `size: 'sm'` — Ao lado do nome, com o número escrito: o anel pequeno não leva número dentro.

Marcação dos exemplos desta seção:

```html
<div class="ds-progress-ring ds-progress-ring--sm" role="progressbar" aria-label="Enviando arquivos" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg></div>

<div class="ds-progress-ring" role="progressbar" aria-label="Enviando arquivos" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">62%</span></div>

<div class="ds-progress-ring ds-progress-ring--lg" role="progressbar" aria-label="Enviando arquivos" aria-valuemin="0" aria-valuemax="100" aria-valuenow="62"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">62%</span></div>

<div class="ds-progress-ring ds-progress-ring--sm" role="progressbar" aria-label="Preparando"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg></div>

<div class="ds-progress-ring" role="progressbar" aria-label="Preparando"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg></div>

<div class="ds-progress-ring ds-progress-ring--success" role="progressbar" aria-label="Enviado" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">100%</span></div>

<div class="ds-progress-ring ds-progress-ring--warning" role="progressbar" aria-label="Espaço usado" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">90%</span></div>

<div class="ds-progress-ring ds-progress-ring--danger" role="progressbar" aria-label="Falha no envio" aria-valuemin="0" aria-valuemax="100" aria-valuenow="38"><svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><circle class="ds-progress-ring__track" cx="20" cy="20" r="18"></circle><circle class="ds-progress-ring__bar" cx="20" cy="20" r="18" pathLength="100"></circle></svg><span class="ds-progress-ring__value" aria-hidden="true">38%</span></div>
```

## Código

A marcação vem pronta; para mudar o valor, chame setProgressRing.

```html
<span data-envio></span>

<script type="module">
  import { progressRingHtml, setProgressRing } from 'https://lumeui.dev/v/1.7/lume.js';

  const box = document.querySelector('[data-envio]');
  box.innerHTML = progressRingHtml(0, { label: 'Enviando arquivos' });
  const ring = box.firstElementChild;

  // a cada passo do envio
  setProgressRing(ring, 62);
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

O anel é um progressbar com nome e valor, como a barra nativa.

- Com nome — Passe `label` com o que está progredindo. Sem ele, o anel se chama “Progresso”.
- Valor — aria-valuenow leva o número; o texto no meio é só visual, para não ser lido duas vezes. Sem valor, é indeterminado.
- Avise no fim — Leitores de tela não anunciam cada mudança: avise o fim em role="status".
- Não só cor — Sucesso e erro precisam de texto ao lado; o tom só reforça.

## Tokens usados

Os mesmos da barra de progresso.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.border.field (`--ds-color-border-field`) | Trilho | #3E5166AD | #FFFFFF61 |
| color.brand.solid (`--ds-color-brand-solid`) | Preenchimento | #3E5166 | #C0CAD6 |
| color.success.solid (`--ds-color-success-solid`) | Concluído | #1E854A | #72CB8B |
| color.warning.solid (`--ds-color-warning-solid`) | Atenção | #FFB851 | #FFB851 |
| color.danger.solid (`--ds-color-danger-solid`) | Com erro | #C13834 | #FF9087 |
| color.fg.default (`--ds-color-fg-default`) | Porcentagem | #2B3847 | #F3EDE5 |
| duration.base (`--ds-duration-base`) | Mudança de valor | 200ms | 200ms |

## Uso

Anel, barra ou spinner?

- **Faça:** onde a barra não cabe. Num card de envio, numa linha de lista, num cabeçalho. Com largura, a barra lê melhor.
- **Evite:** medir o que não é tarefa. Espaço usado ou meta do mês são medidas: use o Medidor ou a Rosca, em Gráficos.
- **Dica:** Espera curta? Spinner. Abaixo de 10 segundos e sem número para mostrar, o Spinner basta.
