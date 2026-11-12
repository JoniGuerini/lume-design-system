# Switch

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/switch

Liga ou desliga algo na hora, sem botão de salvar. Se a mudança só vale ao enviar, use checkbox.

Em números: tamanhos: 2 · estados: 5 · transição: 200 ms · papel ARIA: switch.

## Exemplo

```html
<label class="ds-switch">
  <input type="checkbox" role="switch" class="ds-switch__input" checked>
  <span class="ds-choice__text">
    <span class="ds-choice__label">Avisar sobre comentários</span>
    <span class="ds-choice__description">Avisamos quando alguém comentar.</span>
  </span>
</label>
```

## Switch ou checkbox?

Os dois guardam um sim/não. A diferença é quando a escolha passa a valer.

Ligado agora

Switch `ds-switch` — Efeito imediato. Não precisa de botão de salvar.

Checkbox `ds-checkbox` — Faz parte de um formulário e vale ao enviar.

Marcação dos exemplos desta seção:

```html
<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-q-dark" checked="" data-live=""><span class="ds-choice__text"><span class="ds-choice__label">Modo foco</span><span class="ds-choice__description">Esconde notificações enquanto estiver ligado.</span></span></label>

<label class="ds-checkbox"><input type="checkbox" class="ds-checkbox__input" checked=""><span class="ds-choice__text"><span class="ds-choice__label">Receber o contrato por e-mail</span><span class="ds-choice__description">Vale quando você enviar o formulário.</span></span></label>

<button type="button" class="ds-btn ds-btn--primary ds-btn--sm" aria-hidden="true">Enviar</button>
```

## Tamanhos

Médio é o padrão. O pequeno cabe em linhas de tabela e barras densas.

Médio `padrão` — 36 × 20 px

Pequeno `ds-switch--sm` — 28 × 16 px

Marcação dos exemplos desta seção:

```html
<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-1" checked=""><span class="ds-choice__text"><span class="ds-choice__label">Ligado</span></span></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-2"><span class="ds-choice__text"><span class="ds-choice__label">Desligado</span></span></label>

<label class="ds-switch ds-switch--sm"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-3" checked=""><span class="ds-choice__text"><span class="ds-choice__label">Ligado</span></span></label>

<label class="ds-switch ds-switch--sm"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-4"><span class="ds-choice__text"><span class="ds-choice__label">Desligado</span></span></label>
```

## Estados

Ligado ganha a cor da marca e o polegar vai para a direita — a posição também comunica, não só a cor.

Marcação dos exemplos desta seção:

```html
<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-5"></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-6" checked=""></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-7"></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-8"></label>

<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-9" disabled=""></label>
```

## Lista de ajustes

O uso mais comum: rótulo e descrição à esquerda, switch à direita com `.ds-switch--end`. Cada mudança vale na hora.

Notificações

- Resumo por e-mail — Toda segunda, com o que mudou na semana.
- Notificações no celular — Menções e respostas, na hora.
- Som ao receber mensagem — Só quando a aba está aberta.
- Recursos em teste — Pode mudar sem aviso.

## Movimento

O polegar anda em `duration.base` (200 ms) com `easing.emphasized`: sai rápido e assenta suave. Com movimento reduzido, a troca é instantânea.

```html
.ds-switch__input::before {
  transition: translate var(--ds-duration-base) var(--ds-easing-emphasized);
}

@media (prefers-reduced-motion: reduce) {
  .ds-switch__input::before { transition: none; }
}
```

Marcação dos exemplos desta seção:

```html
<label class="ds-switch"><input type="checkbox" role="switch" class="ds-switch__input" id="sw-motion" aria-label="Exemplo de movimento"></label>

<button type="button" class="ds-btn ds-btn--secondary ds-btn--sm" data-motion-play=""><ds-icon name="play"></ds-icon>Alternar</button>

<button type="button" class="ds-chip ds-chip--sm" data-motion-reduce="" aria-pressed="false"><ds-icon name="motion"></ds-icon>Simular movimento reduzido</button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Um checkbox nativo por baixo, anunciado como interruptor.

- role="switch" — O leitor de tela anuncia “interruptor, ligado” em vez de “caixa de seleção, marcada”.
- Teclado — Tab Espaço — Tab leva o foco; Espaço liga e desliga.
- Rótulo descreve o que liga — “Notificações por e-mail”, não “Ligado”. O estado já é anunciado pelo controle.
- Não depende só da cor — A posição do polegar muda junto com a cor — funciona para quem não distingue o pêssego.
- Efeito visível — Se a mudança acontece fora da tela, confirme com um aviso curto (toast) para quem não vê o resultado.
- Movimento reduzido — Com `prefers-reduced-motion`, o polegar troca de lado sem animar.

## Tokens usados

Tudo o que o switch consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.muted (`--ds-color-bg-muted`) | Trilho desligado | #DAE0E8 | #3D3B38 |
| color.fg.muted (`--ds-color-fg-muted`) | Polegar desligado | #46586E | #CEC8C1 |
| color.brand.solid (`--ds-color-brand-solid`) | Trilho ligado | #3E5166 | #C0CAD6 |
| color.brand.on-solid (`--ds-color-brand-on-solid`) | Polegar ligado | #F8FAFD | #1D2734 |
| color.border.default (`--ds-color-border-default`) | Contorno do trilho | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Contorno no hover | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Anel de foco | #53657A | #C0CAD6 |
| radius.full (`--ds-radius-full`) | Trilho e polegar | 9999 px | 9999 px |
| duration.base (`--ds-duration-base`) | Polegar e cor | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Curva do polegar | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| text.label-md (`--ds-text-label-md`) | Rótulo | 14/20 · medium | 14/20 · medium |
| text.body-sm (`--ds-text-body-sm`) | Descrição | 14/22 · regular | 14/22 · regular |
| opacity.disabled (`--ds-opacity-disabled`) | Desativado | 0.44 | 0.44 |

## Uso

Três regras para não confundir.

- **Faça:** efeito na hora. Liga e a interface muda. Nenhum “salvar” depois.
- **Evite:** switch com botão de enviar. Se precisa confirmar, é checkbox. O switch promete efeito imediato.
- **Dica:** Rótulo sem “ligar/desligar”. “Modo escuro” basta. “Ligar modo escuro” fica estranho quando já está ligado.
