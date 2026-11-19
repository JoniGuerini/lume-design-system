# Grupo de campos

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/grupo-de-campos

Um rótulo, uma dica e um erro para vários controles que formam um dado só: data e horários, nome e sobrenome, valor e unidade. O grupo tem o nome; cada controle tem o seu.

Em números: papel ARIA: group · rótulos: 1 + 1 por controle · arranjos: 2 · React: FieldGroup.

## Ao vivo

Data e dois horários com um rótulo só: “Quando”. A data e os horários abrem os seletores do Lume.

## Arranjos

Por padrão, o primeiro controle ocupa o dobro dos outros. Com `ds-field-group--even`, todos dividem a linha por igual. Em tela estreita, eles quebram a linha.

O primeiro em destaque `ds-field-group` — Valor e unidade: o número leva o dobro do espaço da unidade.

Por igual `ds-field-group--even` — Nome e sobrenome têm o mesmo peso.

Marcação dos exemplos desta seção:

```html
<div class="ds-form-field ds-field-1" role="group" aria-labelledby="fg-amount-label">
<span class="ds-form-field__label" id="fg-amount-label">Duração</span>
<div class="ds-field-1__controls"><div class="ds-field"><input class="ds-field__input" id="fg-amount-n" type="text" aria-label="Quantidade" value="50"></div><div class="ds-field"><input class="ds-field__input" id="fg-amount-u" type="text" aria-label="Unidade" value="minutos"></div></div>
</div>

<div class="ds-form-field ds-field-1 ds-field-1--even" role="group" aria-labelledby="fg-name-label">
<span class="ds-form-field__label" id="fg-name-label">Nome completo</span>
<div class="ds-field-1__controls"><div class="ds-field"><input class="ds-field__input" id="fg-first" type="text" aria-label="Nome" value="Ana"></div><div class="ds-field"><input class="ds-field__input" id="fg-last" type="text" aria-label="Sobrenome" value="Souza"></div></div>
</div>
```

## Erro do grupo

Quando o problema é a combinação (o fim antes do início), o erro é do grupo, não de um controle. Os controles envolvidos ganham aria-invalid e apontam para a mesma mensagem.

## Código

O `Field` liga um rótulo a um controle. O grupo usa `role="group"` com `aria-labelledby`, e cada controle leva o próprio `aria-label`.

```html
<div class="ds-form-field ds-field-group" role="group" aria-labelledby="quando-label" aria-describedby="quando-hint">
  <span class="ds-form-field__label" id="quando-label">Quando</span>
  <div class="ds-field-group__controls">
    <div class="ds-field"><input class="ds-field__input" id="data" aria-label="Data" aria-describedby="quando-hint"></div>
    <div class="ds-field"><input class="ds-field__input" id="inicio" aria-label="Início" aria-describedby="quando-hint"></div>
    <span class="ds-field-group__sep" aria-hidden="true">até</span>
    <div class="ds-field"><input class="ds-field__input" id="fim" aria-label="Fim" aria-describedby="quando-hint"></div>
  </div>
  <div class="ds-form-field__footer"><p class="ds-form-field__hint" id="quando-hint">A sessão dura 50 minutos.</p></div>
</div>

// React: cada controle lê a dica e o erro do grupo sozinho
<FieldGroup label="Quando" hint="A sessão dura 50 minutos." error={erro}>
  <DatePicker aria-label="Data" value={data} onChange={setData} />
  <TimePicker aria-label="Início" value={inicio} onChange={setInicio} />
  <TimePicker aria-label="Fim" value={fim} onChange={setFim} />
</FieldGroup>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

O leitor de tela ouve o grupo e depois cada parte.

- Nome do grupo — Ao entrar no primeiro controle, ouve-se “Quando, grupo”, e depois “Data”.
- Cada controle com nome — O rótulo do grupo não nomeia os controles. Sem o aria-label de cada um, a pessoa ouve três campos iguais.
- Ids próprios — No React, o FieldGroup não passa id para os controles: cada um mantém o seu, e o foco do erro vai para o controle certo.

## Tokens usados

Os mesmos do Campo de texto, mais o espaço entre os controles.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| space.100 (`--ds-space-100`) | Espaço entre os controles | 8 px | 8 px |
| color.fg.subtle (`--ds-color-fg-subtle`) | Separador (“até”) | #53657A | #9C9792 |

## Uso

Quando usar e quando preferir outra coisa.

- **Faça:** um dado em partes. Quando, duração, nome completo, endereço com número.
- **Evite:** campos que não se ligam. E-mail e telefone são dois dados. Cada um no próprio Field, lado a lado com ds-form__row.
- **Dica:** Escolhas também. Um grupo de rádios ou um controle segmentado com rótulo também é um grupo: use o mesmo arranjo.
