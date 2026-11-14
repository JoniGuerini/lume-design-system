# Upload de arquivo

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/upload

Para enviar arquivos, arrastando ou escolhendo. Cada arquivo tem o próprio progresso e o próprio erro, então uma falha não atrapalha os outros.

Em números: formas de enviar: 2 · estados do arquivo: 4 · limites: tipo · tamanho · número · base: file.

## Exemplo

```html
<div class="ds-form-field">
  <label class="ds-form-field__label" for="anexos">Anexos</label>
  <div class="ds-upload"><input class="ds-upload__input" type="file" id="anexos" name="anexos" multiple></div>
</div>

<script type="module">
  import { createFileUpload } from 'https://lumeui.dev/v/0.40/lume.js';
  createFileUpload(document.querySelector('.ds-upload'), {
    maxSize: 5 * 1024 * 1024,
    maxFiles: 3,
    upload: enviar,
  });
</script>
```

## Variantes

Sem a opção `upload`, os arquivos ficam no input e seguem com o formulário. Com ela, cada um é enviado assim que entra na lista.

Vários arquivos `multiple` — Com limites de tipo, tamanho e número, escritos na dica.

Um arquivo só `sem multiple` — Escolher outro substitui o atual.

Situações por arquivo `data-status` — Enviado, enviando, recusado e falha no envio, com “Tentar de novo”.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="up-many">Anexos</label>
<div class="ds-upload" data-upload="up-many"><input class="ds-upload__input" type="file" id="up-many" name="up-many" multiple="" accept="image/*,.pdf" aria-describedby="ds-upload-2-hint"><div class="ds-upload__zone" aria-hidden="true">
<span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span>
<span class="ds-upload__title" data-title="">Arraste arquivos ou clique para escolher</span>
<span class="ds-upload__hint" id="ds-upload-2-hint" data-hint="">Até 5 MB por arquivo · No máximo 3</span>
</div>
<ul class="ds-upload__list" role="list" data-list="" hidden=""></ul>
<span class="ds-visually-hidden" role="status" data-live=""></span></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="up-one">Currículo</label>
<div class="ds-upload" data-upload="up-one"><input class="ds-upload__input" type="file" id="up-one" name="up-one" accept=".pdf" aria-describedby="ds-upload-3-hint"><div class="ds-upload__zone" aria-hidden="true">
<span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span>
<span class="ds-upload__title" data-title="">Arraste um arquivo ou clique para escolher</span>
<span class="ds-upload__hint" id="ds-upload-3-hint" data-hint="">Até 2 MB por arquivo</span>
</div>
<ul class="ds-upload__list" role="list" data-list="" hidden=""></ul>
<span class="ds-visually-hidden" role="status" data-live=""></span></div>
</div>
```

## Estados

A área pode ser forçada com `data-state` e `data-dragging`.

Marcação dos exemplos desta seção:

```html
<div class="ds-upload"><input class="ds-upload__input" type="file" aria-label="Anexos">
<div class="ds-upload__zone"><span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span><span class="ds-upload__title">Arraste arquivos ou clique para escolher</span></div>
</div>

<div class="ds-upload" data-dragging=""><input class="ds-upload__input" type="file" aria-label="Anexos">
<div class="ds-upload__zone"><span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span><span class="ds-upload__title">Arraste arquivos ou clique para escolher</span></div>
</div>

<div class="ds-upload"><input class="ds-upload__input" type="file" aria-label="Anexos" disabled="">
<div class="ds-upload__zone"><span class="ds-upload__icon"><ds-icon name="upload"></ds-icon></span><span class="ds-upload__title">Arraste arquivos ou clique para escolher</span></div>
</div>
```

## Código

A função `upload` recebe o arquivo, avisa o progresso (de 0 a 1) e devolve uma promessa. O erro que ela lançar aparece na linha do arquivo.

```html
import { createFileUpload } from 'https://lumeui.dev/v/0.40/lume.js';

createFileUpload(document.querySelector('.ds-upload'), {
  accept: ['image/*', '.pdf'],
  maxSize: 5 * 1024 * 1024,
  maxFiles: 3,
  upload: async (file, { onProgress, signal }) => {
    const resposta = await enviar(file, { onProgress, signal });
    if (!resposta.ok) throw new Error('Não foi possível enviar.');
  },
});
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

A área é o próprio input de arquivo, então funciona sem arrastar.

- Sem depender de arrastar — Tab Enter Espaço — Tab leva ao input, e Enter ou Espaço abrem o seletor do sistema.
- Limites avisados antes — A dica com tipo e tamanho está ligada ao input por aria-describedby.
- Progresso anunciado — A barra é um role="progressbar" com o nome do arquivo; o fim e os erros são avisados em role="status".
- Não só cor — Erro e sucesso trazem ícone e texto.
- Remover com nome — Cada × diz qual arquivo sai, e o foco segue para o próximo botão da lista.

## Tokens usados

Tudo o que o upload consome.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.field (`--ds-color-bg-field`) | Fundo da área | #FFFFFF | #2C2A27 |
| color.bg.field-hover (`--ds-color-bg-field-hover`) | Área no hover | #F8FAFD | #33312E |
| color.border.strong (`--ds-color-border-strong`) | Contorno tracejado | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Anel de foco | #53657A | #C0CAD6 |
| color.brand.subtle (`--ds-color-brand-subtle`) | Área ao arrastar | #EEF2F6 | #C0CAD624 |
| color.brand.border (`--ds-color-brand-border`) | Contorno ao arrastar | #DAE0E8 | #C0CAD652 |
| color.brand.solid (`--ds-color-brand-solid`) | Barra de progresso | #3E5166 | #C0CAD6 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno da linha | #3E516624 | #FFFFFF0F |
| color.danger.border (`--ds-color-danger-border`) | Linha com erro | #FFCFCA | #FF90874D |
| color.danger.fg (`--ds-color-danger-fg`) | Texto do erro | #C13834 | #FFB2AA |
| color.success.fg (`--ds-color-success-fg`) | Ícone de enviado | #0F6939 | #97DCA8 |

## Uso

Quando usar e o que combinar.

- **Faça:** diga os limites. Tipo e tamanho na dica evitam a frustração do erro depois de escolher.
- **Evite:** bloquear tudo por um erro. Um arquivo recusado não invalida os outros. Mostre o erro só naquela linha.
- **Dica:** Validar também no servidor. A checagem de tipo e tamanho aqui é uma ajuda para a pessoa, não uma proteção.
