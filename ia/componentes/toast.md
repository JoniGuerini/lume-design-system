# Toast

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/toast

Confirma que algo aconteceu, sem interromper. Aparece embaixo, some sozinho e pode trazer uma ação curta, como desfazer.

Em números: tons: 5 · duração padrão: 2,2 s · na tela ao mesmo tempo: 3 · posições: 6.

## Exemplo

```html
import { toast } from 'https://lumeui.dev/v/1.3/lume.js';

toast('Alterações salvas', {
  tone: 'success',
});
```

## Tons

O fundo é sempre o invertido — o toast se destaca de qualquer tela. O tom aparece só no ícone, para a cor não gritar.

Neutro `—`

O padrão: confirmações simples do que a pessoa acabou de fazer.

Sucesso `tone: 'success'`

Algo que demorou ou importava terminou bem.

Informação `tone: 'info'`

Uma novidade que não pede ação imediata.

Aviso `tone: 'warning'`

Atenção, sem bloquear. O app continua funcionando.

Perigo `tone: 'danger'`

Falhou, mas dá para tentar de novo. Erros graves ficam na tela.

Marcação dos exemplos desta seção:

```html
<div class="ds-toast" data-open=""><span class="ds-toast__icon"><ds-icon name="check"></ds-icon></span>
<span class="ds-toast__message">Link copiado</span>
</div>

<button type="button" class="ds-inline-action" data-show-tone="neutral"><ds-icon name="play"></ds-icon>Mostrar</button>

<div class="ds-toast ds-toast--success" data-open=""><span class="ds-toast__icon"><ds-icon name="check-circle"></ds-icon></span>
<span class="ds-toast__message">Alterações salvas</span>
</div>

<button type="button" class="ds-inline-action" data-show-tone="success"><ds-icon name="play"></ds-icon>Mostrar</button>

<div class="ds-toast ds-toast--info" data-open=""><span class="ds-toast__icon"><ds-icon name="info"></ds-icon></span>
<span class="ds-toast__message">Nova versão disponível</span>
</div>

<button type="button" class="ds-inline-action" data-show-tone="info"><ds-icon name="play"></ds-icon>Mostrar</button>

<div class="ds-toast ds-toast--warning" data-open=""><span class="ds-toast__icon"><ds-icon name="alert-triangle"></ds-icon></span>
<span class="ds-toast__message">Você está sem conexão</span>
</div>

<button type="button" class="ds-inline-action" data-show-tone="warning"><ds-icon name="play"></ds-icon>Mostrar</button>
```

## Com ação

Uma ação só, curta e reversível — “Desfazer”, “Ver”, “Tentar de novo”. Com ação, o toast fica 5 s.

- Roteiro de lançamento
- Paleta da campanha
- Notas da reunião

Tudo arquivado. Recomeçar

Arquive um arquivo e desfaça pelo toast. — Desfazer no toast é melhor do que pedir confirmação antes: a pessoa age rápido e corrige se errar.

## Comportamento

Previsível: sempre no mesmo lugar, sempre saindo sozinho.

Seis posições

Embaixo ao centro é o padrão. Em cima, fica abaixo da topbar. O mais novo entra junto da borda e o toast desliza do lado de onde vem.

No máximo 3 por posição

O quarto empurra o mais antigo para fora. Cada posição tem a própria região anunciada.

No celular

Abaixo de 768 px, os cantos viram o centro do mesmo lado — em cima ou embaixo.

Pausa com o ponteiro

Passou o mouse ou chegou com Tab, o tempo para. Saiu, continua.

Até fechar

Com `duration: Infinity` ganha um ×. Feche pelo código com `.close()`.

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="9" rx="2"></rect><rect x="13.5" y="3.5" width="7" height="5" rx="2"></rect><rect x="13.5" y="11.5" width="7" height="9" rx="2"></rect><rect x="3.5" y="15.5" width="7" height="5" rx="2"></rect></svg>

<button type="button" class="ds-inline-action" data-demo="corners"><ds-icon name="play"></ds-icon>Testar os seis</button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"></path><path d="m3.5 12 8.5 4.5 8.5-4.5"></path><path d="m3.5 16 8.5 4.5 8.5-4.5"></path></svg>

<button type="button" class="ds-inline-action" data-demo="burst"><ds-icon name="play"></ds-icon>Mostrar 4 seguidos</button>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="4" width="18" height="12.5" rx="2.5"></rect><path d="M8.5 20.5h7M12 16.5v4"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V12l3 2"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>

<button type="button" class="ds-inline-action" data-demo="sticky"><ds-icon name="play"></ds-icon>Mostrar até fechar</button>
```

## Acessibilidade

Avisa sem roubar o foco de ninguém.

- Anunciado com educação — A região é `role="status"` com `aria-live="polite"`: o leitor de tela lê quando terminar o que está falando.
- Não move o foco — Tab — A pessoa continua onde estava. A ação do toast é alcançável com Tab.
- Tempo suficiente — Pausa no hover e no foco. Com ação, 5 s; para algo importante, use “até fechar”.
- Não depende da cor — Cada tom tem ícone próprio — sucesso, aviso, perigo e informação se distinguem sem cor.
- Mensagem completa — Escreva o que aconteceu, não só “Pronto!”. Quem só ouve o anúncio precisa entender.
- Erro sério fica na tela — Se a pessoa precisa agir para resolver, mostre o erro perto do problema — não num aviso que some.

## Tokens usados

Fundo invertido para destacar; tons só no ícone.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.inverse (`--ds-color-bg-inverse`) | Fundo | #2B3847 | #F3EDE5 |
| color.fg.inverse (`--ds-color-fg-inverse`) | Texto e ação | #F8FAFD | #0F0E0C |
| radius.md (`--ds-radius-md`) | Raio | 12 px | 12 px |
| shadow.lg (`--ds-shadow-lg`) | Sombra | 0 4px 8px -2px rgb(45 58 74 / 0.07), 0 16px 36px -8px rgb(45 58 74 / 0.14) | 0 4px 8px -2px rgb(0 0 0 / 0.3), 0 16px 36px -8px rgb(0 0 0 / 0.5) |
| text.label-md (`--ds-text-label-md`) | Mensagem | 14/20 · medium | 14/20 · medium |
| color.success.solid (`--ds-color-success-solid`) | Ícone de sucesso | #1E854A | #72CB8B |
| color.warning.solid (`--ds-color-warning-solid`) | Ícone de aviso | #FFB851 | #FFB851 |
| color.danger.solid (`--ds-color-danger-solid`) | Ícone de perigo | #C13834 | #FF9087 |
| color.info.solid (`--ds-color-info-solid`) | Ícone de informação | #1776B5 | #6ABCFF |
| duration.base (`--ds-duration-base`) | Entrada e saída | 200ms | 200ms |
| easing.emphasized (`--ds-easing-emphasized`) | Curva da entrada | cubic-bezier(0.32, 0.72, 0, 1) | cubic-bezier(0.32, 0.72, 0, 1) |
| z.toast (`--ds-z-toast`) | Camada | 1500 | 1500 |

## Uso

Para confirmar, não para conversar.

- **Faça:** confirme o que aconteceu. Curto, no passado, dizendo o resultado — embaixo, onde não cobre a navegação.
- **Evite:** erro importante que some. Se a pessoa precisa resolver, o erro fica na tela, perto do campo.
- **Dica:** Desfazer em vez de confirmar. Para ações reversíveis, agir direto e oferecer desfazer é mais rápido do que um modal.
### Onde posicionar uma posição só para o app inteiro

| Posição | Quando usar |  |
| --- | --- | --- |
| Embaixo, ao centro — `bottom-center` | Confirmações em geral. Longe da navegação e das ações do topo. É o padrão. | Mostrar |
| Embaixo, à direita — `bottom-end` | Telas com trabalho no centro — editores, tabelas largas: o canto não cobre o conteúdo. | Mostrar |
| Em cima, ao centro — `top-center` | Avisos do sistema que valem para a tela toda, como conexão ou sessão. | Mostrar |
| Em cima, à direita — `top-end` | Notificações que chegam de fora (mensagens, convites). Fica abaixo da topbar, sem cobrir as ações dela. | Mostrar |
| Embaixo, à esquerda — `bottom-start` | Evite no app shell: no desktop cobre o rodapé da sidebar. | Mostrar |
| Em cima, à esquerda — `top-start` | Raramente: fica sobre a navegação da sidebar. | Mostrar |
