# Avatar

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/avatar

Representa uma pessoa ou conta. Foto quando existe, iniciais num tom estável quando não — e sempre com um nome por trás.

Em números: tamanhos: 5 · tons: 9 · status: 4 · contraste mínimo: 5,81:1.

## Exemplo

```html
<span class="ds-avatar ds-avatar--xl ds-avatar--sand" role="img" aria-label="Marina Duarte, online">
  <span aria-hidden="true">MD</span>
  <span class="ds-avatar__status ds-avatar__status--online" aria-hidden="true"></span>
</span>
```

## Tamanhos

Cinco tamanhos. As iniciais e o status acompanham a proporção sozinhos.

xs — 24 px

Listas densas, tabelas

sm — 32 px

Comentários, menções

md — 40 px

Padrão

lg — 48 px

Cabeçalhos de card

xl — 64 px

Perfil, convite

Marcação dos exemplos desta seção:

```html
<span class="ds-avatar ds-avatar--xs ds-avatar--sand" role="img" aria-label="Marina Duarte"><span aria-hidden="true">MD</span></span>

<span class="ds-avatar ds-avatar--sm ds-avatar--sand" role="img" aria-label="Marina Duarte"><span aria-hidden="true">MD</span></span>

<span class="ds-avatar ds-avatar--sand" role="img" aria-label="Marina Duarte, online"><span aria-hidden="true">MD</span><span class="ds-avatar__status ds-avatar__status--online" aria-hidden="true"></span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--sand" role="img" aria-label="Marina Duarte"><span aria-hidden="true">MD</span></span>

<span class="ds-avatar ds-avatar--xl ds-avatar--sand" role="img" aria-label="Marina Duarte"><span aria-hidden="true">MD</span></span>
```

## Conteúdo

A ordem de preferência é sempre a mesma: imagem, iniciais, ícone.

Imagem — A foto da pessoa, recortada no círculo. As iniciais ficam por baixo, prontas para o caso de a imagem falhar.

Iniciais — Primeira letra do primeiro e do último nome, num tom estável derivado do nome.

Ícone — Sem nome nem foto: convidados, contas genéricas, lugares vazios.

Imagem que falhou — O onerror remove a imagem e as iniciais aparecem — nada de ícone quebrado.

Marcação dos exemplos desta seção:

```html
<span class="ds-avatar ds-avatar--xl ds-avatar--green" role="img" aria-label="Caio Ramos"><span aria-hidden="true">CR</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c9b08f%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23f1dcc8%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%234a4744%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"></span>

<span class="ds-avatar ds-avatar--xl ds-avatar--green" role="img" aria-label="Caio Ramos"><span aria-hidden="true">CR</span></span>

<span class="ds-avatar ds-avatar--xl" role="img" aria-label="Caio Ramos"><ds-icon name="user"></ds-icon></span>
```

## Tons

Nove tons das paletas de apoio, levemente tingidos sobre a superfície. O tom vem do nome: a mesma pessoa tem sempre a mesma cor, em qualquer tela.

Neutro

Areia

Argila

Ocre

Ardósia

Verde

Verde-azulado

Azul

Violeta

Rosa

Tom: Areia

Contraste das iniciais entre 5,81:1 e 6,46:1 nos dois temas.

```html
// mesmo nome, mesmo tom
function toneFor(name) {
  let h = 0;
  for (const ch of name.normalize('NFD')) h = (h * 31 + ch.codePointAt(0)) >>> 0;
  return TONES[h % TONES.length];
}
```

Marcação dos exemplos desta seção:

```html
<span class="ds-avatar ds-avatar--lg" aria-hidden="true"><span aria-hidden="true">N</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--sand" aria-hidden="true"><span aria-hidden="true">A</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--clay" aria-hidden="true"><span aria-hidden="true">A</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--ochre" aria-hidden="true"><span aria-hidden="true">O</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--slate" aria-hidden="true"><span aria-hidden="true">A</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--green" aria-hidden="true"><span aria-hidden="true">V</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--teal" aria-hidden="true"><span aria-hidden="true">V</span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--blue" aria-hidden="true"><span aria-hidden="true">A</span></span>
```

## Status

Um ponto no canto, com um anel na cor do fundo para separar. Status não é só cor: diga também no nome acessível ou no texto ao lado.

Online — `ds-avatar__status--online`

Ausente — `ds-avatar__status--away`

Ocupado — `ds-avatar__status--busy`

Offline — `ds-avatar__status--offline`

Sobre outra superfície, ajuste o anel com `--ds-avatar-ring` (padrão: o fundo do canvas).

Marcação dos exemplos desta seção:

```html
<span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado, online"><span aria-hidden="true">OP</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%238fa3ad%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23e5c3a6%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%233d3b38%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"><span class="ds-avatar__status ds-avatar__status--online" aria-hidden="true"></span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado, ausente"><span aria-hidden="true">OP</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%238fa3ad%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23e5c3a6%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%233d3b38%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"><span class="ds-avatar__status ds-avatar__status--away" aria-hidden="true"></span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado, ocupado"><span aria-hidden="true">OP</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%238fa3ad%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23e5c3a6%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%233d3b38%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"><span class="ds-avatar__status ds-avatar__status--busy" aria-hidden="true"></span></span>

<span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado, offline"><span aria-hidden="true">OP</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%238fa3ad%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23e5c3a6%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%233d3b38%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"><span class="ds-avatar__status ds-avatar__status--offline" aria-hidden="true"></span></span>
```

## Grupo

Avatares sobrepostos para mostrar quem participa. Até quatro rostos e um “+N” para o resto. Passe o mouse para ver os nomes.

```html
<div class="ds-avatar-group" role="group" aria-label="7 participantes">
  <span class="ds-avatar ds-avatar--sm ds-avatar--violet" role="img" aria-label="Marina Duarte">
    <span aria-hidden="true">MD</span>
  </span>
  …
  <span class="ds-avatar ds-avatar--sm ds-avatar--more" role="img" aria-label="Mais 3 pessoas">+3</span>
</div>
```

### Ao lado do nome o avatar vira decoração

- Marina Duarte — Online · Design
- Caio Ramos — Ausente · Produto
- Lia Nakamura — Offline · Engenharia

Marcação dos exemplos desta seção:

```html
<div class="ds-avatar-group" role="group" aria-label="7 participantes">
<span class="ds-avatar ds-avatar--sm ds-avatar--sand" role="img" aria-label="Marina Duarte" data-ds-tooltip="Marina Duarte" data-ds-tooltip-placement="bottom"><span aria-hidden="true">MD</span></span><span class="ds-avatar ds-avatar--sm ds-avatar--green" role="img" aria-label="Caio Ramos" data-ds-tooltip="Caio Ramos" data-ds-tooltip-placement="bottom"><span aria-hidden="true">CR</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c98f73%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23f3e3d3%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%235f4a3c%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"></span><span class="ds-avatar ds-avatar--sm ds-avatar--sand" role="img" aria-label="Lia Nakamura" data-ds-tooltip="Lia Nakamura" data-ds-tooltip-placement="bottom"><span aria-hidden="true">LN</span></span><span class="ds-avatar ds-avatar--sm ds-avatar--violet" role="img" aria-label="Otávio Prado" data-ds-tooltip="Otávio Prado" data-ds-tooltip-placement="bottom"><span aria-hidden="true">OP</span></span>
<span class="ds-avatar ds-avatar--more ds-avatar--sm" role="img" aria-label="Mais 3 pessoas" data-ds-tooltip="Bruna Sá, Rafael Couto, Teresa Lins" data-ds-tooltip-placement="bottom">+3</span>
</div>

<div class="ds-avatar-group" role="group" aria-label="7 participantes">
<span class="ds-avatar ds-avatar--sand" role="img" aria-label="Marina Duarte" data-ds-tooltip="Marina Duarte" data-ds-tooltip-placement="bottom"><span aria-hidden="true">MD</span></span><span class="ds-avatar ds-avatar--green" role="img" aria-label="Caio Ramos" data-ds-tooltip="Caio Ramos" data-ds-tooltip-placement="bottom"><span aria-hidden="true">CR</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c98f73%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23f3e3d3%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%235f4a3c%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"></span><span class="ds-avatar ds-avatar--sand" role="img" aria-label="Lia Nakamura" data-ds-tooltip="Lia Nakamura" data-ds-tooltip-placement="bottom"><span aria-hidden="true">LN</span></span><span class="ds-avatar ds-avatar--violet" role="img" aria-label="Otávio Prado" data-ds-tooltip="Otávio Prado" data-ds-tooltip-placement="bottom"><span aria-hidden="true">OP</span></span>
<span class="ds-avatar ds-avatar--more" role="img" aria-label="Mais 3 pessoas" data-ds-tooltip="Bruna Sá, Rafael Couto, Teresa Lins" data-ds-tooltip-placement="bottom">+3</span>
</div>

<div class="ds-avatar-group" role="group" aria-label="7 participantes">
<span class="ds-avatar ds-avatar--lg ds-avatar--sand" role="img" aria-label="Marina Duarte" data-ds-tooltip="Marina Duarte" data-ds-tooltip-placement="bottom"><span aria-hidden="true">MD</span></span><span class="ds-avatar ds-avatar--lg ds-avatar--green" role="img" aria-label="Caio Ramos" data-ds-tooltip="Caio Ramos" data-ds-tooltip-placement="bottom"><span aria-hidden="true">CR</span><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23c98f73%22%2F%3E%3Ccircle%20cx%3D%2232%22%20cy%3D%2225%22%20r%3D%2211%22%20fill%3D%22%23f3e3d3%22%2F%3E%3Cpath%20d%3D%22M11%2064c1.5-13%2010-20%2021-20s19.5%207%2021%2020z%22%20fill%3D%22%235f4a3c%22%2F%3E%3C%2Fsvg%3E" alt="" onerror="this.remove()"></span><span class="ds-avatar ds-avatar--lg ds-avatar--sand" role="img" aria-label="Lia Nakamura" data-ds-tooltip="Lia Nakamura" data-ds-tooltip-placement="bottom"><span aria-hidden="true">LN</span></span><span class="ds-avatar ds-avatar--lg ds-avatar--violet" role="img" aria-label="Otávio Prado" data-ds-tooltip="Otávio Prado" data-ds-tooltip-placement="bottom"><span aria-hidden="true">OP</span></span>
<span class="ds-avatar ds-avatar--more ds-avatar--lg" role="img" aria-label="Mais 3 pessoas" data-ds-tooltip="Bruna Sá, Rafael Couto, Teresa Lins" data-ds-tooltip-placement="bottom">+3</span>
</div>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

O avatar é uma imagem de uma pessoa. Trate como tal.

- Nome acessível — Sozinho, o avatar leva `role="img"` e `aria-label` com o nome. As iniciais e a imagem ficam escondidas (`aria-hidden` e `alt=""`) para não serem lidas duas vezes.
- Ao lado do nome, decorativo — Se o nome já está escrito ao lado, o avatar inteiro sai com `aria-hidden="true"`.
- Status não é só cor — Inclua o status no nome acessível (“Marina Duarte, online”) ou em texto visível.
- Contraste das iniciais — Entre 5,81:1 e 6,46:1 em todos os tons e nos dois temas — acima dos 4,5:1 do WCAG.
- Grupo com contagem — O grupo é um `role="group"` com o total no rótulo; o “+N” diz quantas pessoas estão ocultas.
- Dica com o nome — Em grupos, cada avatar mostra o nome no hover e no foco via tooltip.

## Tokens usados

Os tons usam as paletas de apoio direto (são categóricos); todo o resto é semântico.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.muted (`--ds-color-bg-muted`) | Fundo neutro e do “+N” | #DAE0E8 | #3D3B38 |
| color.fg.muted (`--ds-color-fg-muted`) | Iniciais e ícone no neutro | #46586E | #CEC8C1 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno | #3E516624 | #FFFFFF0F |
| color.bg.raised (`--ds-color-bg-raised`) | Base dos tons tingidos | #FFFFFF | #2C2A27 |
| radius.full (`--ds-radius-full`) | Forma redonda | 9999 px | 9999 px |
| radius.md (`--ds-radius-md`) | Forma quadrada | 12 px | 12 px |
| color.success.solid (`--ds-color-success-solid`) | Online | #1E854A | #72CB8B |
| color.warning.solid (`--ds-color-warning-solid`) | Ausente | #FFB851 | #FFB851 |
| color.danger.solid (`--ds-color-danger-solid`) | Ocupado | #C13834 | #FF9087 |
| color.fg.disabled (`--ds-color-fg-disabled`) | Offline | #93A0B0 | #605D59 |
| color.bg.canvas (`--ds-color-bg-canvas`) | Anel do status e do grupo | #EEF2F6 | #1D1B18 |

## Uso

Três cuidados para o avatar ajudar a reconhecer pessoas.

- **Faça:** tom estável pelo nome. A mesma pessoa tem sempre a mesma cor — o olho aprende a reconhecer.
- **Evite:** ícone genérico para todo mundo. Se você sabe o nome, use as iniciais. O ícone é só para quem não tem nome.
- **Dica:** Grupo curto. Até quatro rostos. Mais que isso vira mancha — use o “+N”.
