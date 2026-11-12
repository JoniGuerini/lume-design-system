# Alerta

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/alerta

Uma mensagem na própria página, que fica à vista até deixar de valer. Para confirmar algo que acabou de acontecer e sumir, use o Toast.

Em números: tons: 5 · tamanhos: 2 · JavaScript: 0 · papéis: alert · status.

## Exemplo

```html
<div class="ds-alert ds-alert--info" role="status">
  <span class="ds-alert__icon"><ds-icon name="info" size="18"></ds-icon></span>
  <div class="ds-alert__body">
    <p class="ds-alert__title">Nova versão disponível</p>
    <p class="ds-alert__text">Atualize quando puder; nada do que você fez se perde.</p>
  </div>
  <button class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-alert__close" aria-label="Fechar"><ds-icon name="x" size="16"></ds-icon></button>
</div>
```

## Tons

O tom nunca vem sozinho: ícone e texto dizem o mesmo que a cor.

Marcação dos exemplos desta seção:

```html
<div class="ds-alert">
<span class="ds-alert__icon"><ds-icon name="info"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Mudança de plano em dezembro</p>
<p class="ds-alert__text">Os valores atuais seguem até o fim do mês.</p>
</div>
</div>

<div class="ds-alert ds-alert--info">
<span class="ds-alert__icon"><ds-icon name="info"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Nova versão disponível</p>
<p class="ds-alert__text">Atualize quando puder; nada do que você fez se perde.</p>
</div>
</div>

<div class="ds-alert ds-alert--success">
<span class="ds-alert__icon"><ds-icon name="check-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Pagamento confirmado</p>
<p class="ds-alert__text">O recibo foi enviado para o seu e-mail.</p>
</div>
</div>

<div class="ds-alert ds-alert--warning">
<span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Seu plano vence em 3 dias</p>
<p class="ds-alert__text">Renove para não perder o acesso aos projetos.</p>
</div>
</div>

<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Não conseguimos salvar</p>
<p class="ds-alert__text">Suas alterações continuam aqui. Tente de novo em alguns segundos.</p>
</div>
</div>
```

## Variantes

Com ação para resolver, ou compacto para caber dentro de um painel.

Com ação `ds-alert__actions` — Dá o próximo passo, em vez de só avisar.

Compacto `ds-alert--compact` — Uma linha só, para painéis e barras.

Marcação dos exemplos desta seção:

```html
<div class="ds-alert ds-alert--danger">
<span class="ds-alert__icon"><ds-icon name="alert-circle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Não conseguimos salvar</p>
<p class="ds-alert__text">Suas alterações continuam aqui. Tente de novo em alguns segundos.</p>
<div class="ds-alert__actions"><button type="button" class="ds-btn ds-btn--secondary ds-btn--sm">Tentar de novo</button></div>
</div>
</div>

<div class="ds-alert ds-alert--warning ds-alert--compact">
<span class="ds-alert__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<div class="ds-alert__body">
<p class="ds-alert__title">Seu plano vence em 3 dias</p>
</div>
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-alert__close" data-alert-close="" aria-label="Fechar"><ds-icon name="x"></ds-icon></button>
</div>
```

## Acessibilidade

O papel depende de quando o alerta aparece.

- Depois de uma ação — `role="alert"` anuncia na hora, como num erro ao salvar. Use só para o que é urgente.
- Aviso sem pressa — `role="status"` anuncia sem interromper o que a pessoa está ouvindo.
- Já na página — Quem já está ali ao carregar não precisa de papel: é lido na ordem normal.
- Não só cor — Cada tom tem ícone próprio e texto que explica.

## Tokens usados

Os tons seguem o mesmo padrão: fundo, contorno e ícone.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.surface (`--ds-color-bg-surface`) | Fundo neutro | #FFFFFF | #24221F |
| color.info.subtle (`--ds-color-info-subtle`) | Fundo de informação | #F0F8FF | #6ABCFF21 |
| color.success.subtle (`--ds-color-success-subtle`) | Fundo de sucesso | #EFFAF1 | #72CB8B21 |
| color.warning.subtle (`--ds-color-warning-subtle`) | Fundo de atenção | #FFF9F0 | #FFB85121 |
| color.danger.subtle (`--ds-color-danger-subtle`) | Fundo de perigo | #FFF4F3 | #FF908721 |
| color.danger.border (`--ds-color-danger-border`) | Contorno de perigo | #FFCFCA | #FF90874D |
| color.danger.fg (`--ds-color-danger-fg`) | Ícone de perigo | #C13834 | #FFB2AA |
| radius.lg (`--ds-radius-lg`) | Cantos | 16 px | 16 px |

## Uso

Alerta, Toast ou Modal?

- **Faça:** o que continua valendo. Um plano vencendo, um erro a corrigir, um aviso sobre esta página.
- **Evite:** confirmação passageira. “Projeto salvo” é para o Toast, que some sozinho.
- **Dica:** Diga o que fazer. Um bom alerta explica o que houve e qual é o próximo passo.
