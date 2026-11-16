# Primeiros passos

Seção do Lume: Lume. Página: https://lumeui.dev/#/primeiros-passos

Como instalar, importar os estilos e usar os tokens no seu projeto. Sem dependências e sem build obrigatório: um CSS, os módulos que você usar e pronto.

Em números: dependências: 0 · arquivo de CSS: 1 · tokens: 383 · temas: 2.

## Instalação

Três passos, sem terminal. Prefere ter os arquivos no projeto? Baixe o zip da versão e leve a pasta para o seu projeto.

- Passo 1: — Carregue o CSS — Cole esta linha no `<head>`: um arquivo só traz as fontes, os tokens, a base e todos os componentes. O `1.9` no endereço é a versão; o seu projeto só muda quando você trocar esse número. Licença MIT. — `<link rel="stylesheet" href="https://lumeui.dev/v/1.9/lume.css">`
- Passo 2: — Escolha o tema — `light` é o claro e `dark`, o escuro. Para seguir o sistema (o padrão do site), `initTheme()` escolhe um dos dois. — `<html lang="pt-BR" data-theme="light">`
- Passo 3: — Ligue só o JavaScript que usar — Componentes visuais funcionam só com CSS. Para os interativos, importe de `lume.js` o que a tela usa. — `<script type="module"> import { initTooltips, mountSelects } from 'https://lumeui.dev/v/1.9/lume.js'; initTooltips(); mountSelects(document); </script>`

## Sua primeira tela

Escolha um ponto de partida, veja em cada tema e copie. O código abaixo é exatamente o que está no palco.

```html
<form class="ds-card" style="display:grid;gap:var(--ds-space-250);width:min(420px,100%)">
  <h2 class="ds-text-heading-md">Criar projeto</h2>
  <div class="ds-form-field">
    <label class="ds-form-field__label" for="gs-nome">Nome do projeto</label>
    <div class="ds-field"><input class="ds-field__input" id="gs-nome" placeholder="Ex.: Portal do cliente"></div>
    <p class="ds-form-field__hint">Aparece no menu e nos convites.</p>
  </div>
  <label class="ds-switch">
    <input type="checkbox" role="switch" class="ds-switch__input" checked>
    <span class="ds-choice__text"><span class="ds-choice__label">Projeto privado</span></span>
  </label>
  <div style="display:flex;gap:var(--ds-space-100)">
    <button type="button" class="ds-btn ds-btn--primary">Criar projeto</button>
    <button type="button" class="ds-btn ds-btn--ghost">Cancelar</button>
  </div>
</form>
```

Marcação dos exemplos desta seção:

```html
<form class="ds-card">
<h2 class="ds-text-heading-md">Criar projeto</h2>
<div class="ds-form-field">
<label class="ds-form-field__label" for="gs-nome">Nome do projeto</label>
<div class="ds-field"><input class="ds-field__input" id="gs-nome" placeholder="Ex.: Portal do cliente"></div>
<p class="ds-form-field__hint">Aparece no menu e nos convites.</p>
</div>
<label class="ds-switch">
<input type="checkbox" role="switch" class="ds-switch__input" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Projeto privado</span></span>
</label>
<div>
<button type="button" class="ds-btn ds-btn--primary">Criar projeto</button>
<button type="button" class="ds-btn ds-btn--ghost">Cancelar</button>
</div>
</form>

<button type="button" class="ds-chip" data-control="example" aria-haspopup="menu" aria-expanded="false" aria-controls="ds-menu-7">
<span>Ponto de partida</span><span data-label="">Formulário</span>
<span class="ds-chip__chevron"><ds-icon name="chevron-down"></ds-icon></span>
</button>

<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Usando tokens

No seu CSS, use sempre um token semântico — nunca um valor solto. Assim o tema, a marca e a densidade mudam sem tocar no seu código.

```html
.meu-card {
  padding: var(--ds-space-300);
  border-radius: var(--ds-radius-xl);
  background: var(--ds-color-bg-surface);
  border: 1px solid var(--ds-color-border-subtle);
  color: var(--ds-color-fg-default);
  font: var(--ds-text-body-md);
}
```

- Cor — `--ds-color-*` — 96
- Texto — `--ds-text-*` — 19
- Espaço — `--ds-space-*` — 15
- Raio — `--ds-radius-*` — 9
- Sombra — `--ds-shadow-*` — 6
- Movimento — `--ds-duration-* · --ds-easing-*` — 5
- Layout — `--ds-layout-* · --ds-z-*` — 7

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Módulos JavaScript

Cada componente interativo tem o seu módulo, sem dependência entre eles. Importe só o que a tela usa.

| Módulo | Para quê | Como ligar |  |
| --- | --- | --- | --- |
|  `ds/icons/icons.js`  | Ícones como <ds-icon> e a função icon() |  ``  |  |
|  `ds/js/theme.js`  | Tema escuro, claro ou do sistema |  `initTheme(); setTheme("light")`  |  |
|  `ds/js/tooltip.js`  | Dicas por data-ds-tooltip |  `initTooltips()`  |  |
|  `ds/js/menu.js`  | Menus que abrem de um gatilho |  `createMenu(botao, { options, onChange })`  |  |
|  `ds/js/select.js`  | Seleção com lista própria |  `mountSelects(document)`  |  |
|  `ds/js/tabs.js`  | Abas com teclado |  `mountTabs(document)`  |  |
|  `ds/js/modal.js`  | Modal e confirmação |  `await confirmModal({ title })`  |  |
|  `ds/js/toast.js`  | Avisos rápidos e cópia |  `toast("Salvo"); copyText(valor)`  |  |
|  `ds/js/command-palette.js`  | Busca Ctrl K |  `createCommandPalette({ items })`  |  |
|  `ds/js/shell.js`  | App shell com sidebar |  `createShell(document.querySelector(".ds-shell"))`  |  |

## Use a sua marca

A marca inteira sai de um matiz. Mude um número e o build recria a paleta, ajusta ao sRGB e confere o contraste de novo.

- 1 — Em `tokens/palettes.json`, troque o hue (e, se quiser, o chroma) da paleta `refugio`.
- 2 — Rode `npm run tokens` — ou deixe o `npm run dev` aberto, que ele refaz sozinho.
- 3 — Veja o relatório de contraste no terminal. Se algo cair abaixo de 4,5:1, ajuste o token semântico.

```html
"refugio": { "hue": 253, "chroma": 0.043 }
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Estrutura

Onde cada coisa mora. Você edita `tokens/`; o resto é consumido.

```html
ds/
├─ ds.css              ponto de entrada: tokens + base + componentes
├─ tokens.css          gerado a partir de tokens/*.json — não edite
├─ base.css            reset, tipografia base, foco
├─ components/         um CSS por componente
├─ js/                 um módulo por componente interativo
└─ icons/icons.js      biblioteca de ícones
tokens/                a fonte da verdade: cores, tipografia, espaço…
scripts/build-tokens.mjs gera tokens.css e confere o contraste
```

## Próximos passos

Marcação dos exemplos desta seção:

```html
<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5a8.5 8.5 0 0 0 0 17c1.1 0 1.8-.8 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8h2.1a3.8 3.8 0 0 0 3.8-3.8C20.5 6.9 16.7 3.5 12 3.5z"></path><circle cx="7.8" cy="11.2" r="1.1" fill="currentColor" stroke="none"></circle><circle cx="9.6" cy="7.3" r="1.1" fill="currentColor" stroke="none"></circle><circle cx="14.2" cy="6.9" r="1.1" fill="currentColor" stroke="none"></circle><circle cx="17.2" cy="9.6" r="1.1" fill="currentColor" stroke="none"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="3.5"></rect><path d="M8.5 12h7"></path></svg>

<svg class="ds-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1z"></path><path d="M17 9a3.5 3.5 0 0 1 0 6M8 15.67V19a1.5 1.5 0 0 0 3 0v-1.33"></path></svg>
```
