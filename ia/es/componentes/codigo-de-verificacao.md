# Código de verificación

Sección de Lume: Componentes. Página: https://lumeui.dev/#/componentes/codigo-de-verificacao

Para el código de inicio de sesión en dos pasos. Parece seis casillas, pero es un solo campo, y por eso pegar y el autocompletado del móvil funcionan sin esfuerzo.

En números: casillas: a elegir · campos reales: 1 · autocomplete: one-time-code · tipos: 2.

## Ejemplo

```html
<div class="ds-otp"><input class="ds-otp__input" id="codigo" name="codigo" aria-label="Código de verificación"></div>

<script type="module">
  import { createOtpField } from 'https://lumeui.dev/v/1.1/lume.js';
  createOtpField(document.querySelector('.ds-otp'), {
    length: 6,
    onComplete: (code) => verificar(code),
  });
</script>
```

## Variantes

El número de casillas sigue tu servicio de verificación.

Seis dígitos `length: 6` — El más común, y solo acepta números.

En dos grupos `group: 3` — Es más fácil de leer y memorizar.

Cuatro dígitos `length: 4` — Códigos más cortos, como un PIN.

Letras y números `alphanumeric` — Se vuelve mayúsculas solo.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-six" name="otp-six" aria-label="Código de verificación" type="text" maxlength="6" autocomplete="one-time-code" inputmode="numeric" autocapitalize="off" spellcheck="false" pattern="\d{6}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__box" data-box="3"></span><span class="ds-otp__box" data-box="4"></span><span class="ds-otp__box" data-box="5"></span></div></div>

<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-group" name="otp-group" aria-label="Código de verificación" type="text" maxlength="6" autocomplete="one-time-code" inputmode="numeric" autocapitalize="off" spellcheck="false" pattern="\d{6}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__gap"></span><span class="ds-otp__box" data-box="3"></span><span class="ds-otp__box" data-box="4"></span><span class="ds-otp__box" data-box="5"></span></div></div>

<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-four" name="otp-four" aria-label="Código de verificación" type="text" maxlength="4" autocomplete="one-time-code" inputmode="numeric" autocapitalize="off" spellcheck="false" pattern="\d{4}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__box" data-box="3"></span></div></div>

<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-alpha" name="otp-alpha" aria-label="Código de verificación" type="text" maxlength="6" autocomplete="one-time-code" inputmode="text" autocapitalize="characters" spellcheck="false" pattern="[0-9A-Za-z]{6}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__box" data-box="3"></span><span class="ds-otp__box" data-box="4"></span><span class="ds-otp__box" data-box="5"></span></div></div>
```

## Estados

Foco y error se pueden forzar con `data-state` y `data-error`.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-otp">
<div class="ds-otp__boxes"><span class="ds-otp__box"></span><span class="ds-otp__box"></span><span class="ds-otp__box"></span><span class="ds-otp__box"></span><span class="ds-otp__box"></span><span class="ds-otp__box"></span></div>
</div>

<div class="ds-otp">
<div class="ds-otp__boxes"><span class="ds-otp__box" data-filled="">4</span><span class="ds-otp__box" data-filled="">8</span><span class="ds-otp__box" data-filled="">2</span><span class="ds-otp__box" data-active=""></span><span class="ds-otp__box"></span><span class="ds-otp__box"></span></div>
</div>

<div class="ds-otp">
<div class="ds-otp__boxes"><span class="ds-otp__box" data-filled="">4</span><span class="ds-otp__box" data-filled="">8</span><span class="ds-otp__box" data-filled="">2</span><span class="ds-otp__box" data-filled="">9</span><span class="ds-otp__box" data-filled="">1</span><span class="ds-otp__box" data-filled="">3</span></div>
</div>

<div class="ds-otp" data-error="">
<div class="ds-otp__boxes"><span class="ds-otp__box" data-filled="">4</span><span class="ds-otp__box" data-filled="">8</span><span class="ds-otp__box" data-filled="">2</span><span class="ds-otp__box" data-filled="">9</span><span class="ds-otp__box" data-filled="">1</span><span class="ds-otp__box" data-filled="">3</span></div>
</div>
```

## En una pantalla de verificación

Pruébalo: el código correcto aquí es 123456. Equivocarse muestra el mensaje, limpia el campo y devuelve el foco, para intentar de nuevo sin usar el ratón.

Confirma que eres tú

Enviamos un código de 6 dígitos a ana@lume.dev.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-otp" data-otp=""><input class="ds-otp__input" id="otp-verify" name="otp-verify" aria-label="Código de verificación" aria-describedby="otp-verify-error" type="text" maxlength="6" autocomplete="one-time-code" inputmode="numeric" autocapitalize="off" spellcheck="false" pattern="\d{6}"><div class="ds-otp__boxes" aria-hidden="true"><span class="ds-otp__box" data-box="0"></span><span class="ds-otp__box" data-box="1"></span><span class="ds-otp__box" data-box="2"></span><span class="ds-otp__box" data-box="3"></span><span class="ds-otp__box" data-box="4"></span><span class="ds-otp__box" data-box="5"></span></div></div>

<p class="ds-form-field__error" data-verify-error="" hidden="" id="otp-verify-error"><ds-icon name="alert-circle"></ds-icon><span>Código incorrecto. Revísalo e inténtalo de nuevo.</span></p>

<button type="button" class="ds-inline-action" data-resend=""><ds-icon name="refresh"></ds-icon>Enviar otro código</button>
```

## Accesibilidad

Un único input evita los problemas de varias cajas: el lector de pantalla lee un solo campo, con un solo nombre.

- Autocompletado — Con autocomplete="one-time-code", el móvil sugiere el código que llegó por SMS.
- Pegar — Ctrl V — Pegar funciona desde cualquier casilla, y lo que no sea dígito se ignora.
- Teclado numérico — En el móvil, inputmode="numeric" abre el teclado de números.
- Casillas ocultas — Las casillas tienen aria-hidden: son solo un dibujo. Quien usa lector de pantalla oye el campo, no seis cajas.
- Error con texto — Además del contorno rojo, escribe qué pasó y vincula el mensaje con aria-describedby.

## Tokens usados

Todo lo que consume el campo.

| Token | Función | Lume claro | Lume oscuro |
| --- | --- | --- | --- |
| color.bg.field (`--ds-color-bg-field`) | Fondo de la casilla | #FFFFFF | #2C2A27 |
| color.border.default (`--ds-color-border-default`) | Contorno | #3E516633 | #FFFFFF1A |
| color.border.strong (`--ds-color-border-strong`) | Contorno en hover y divisor del grupo | #3E51664D | #FFFFFF29 |
| color.border.focus (`--ds-color-border-focus`) | Casilla activa | #53657A | #C0CAD6 |
| color.danger.solid (`--ds-color-danger-solid`) | Contorno en error | #C13834 | #FF9087 |
| color.fg.default (`--ds-color-fg-default`) | Dígito y cursor | #2B3847 | #F3EDE5 |
| radius.md (`--ds-radius-md`) | Esquinas de la casilla | 12 px | 12 px |
| opacity.disabled (`--ds-opacity-disabled`) | Desactivado | 0.44 | 0.44 |

## Uso

Cuándo usarlo y qué ofrecer junto.

- **Haz:** verificar solo. Con el código completo, compruébalo sin pedir otro clic.
- **Evita:** contraseña o PIN visible. Los dígitos quedan a la vista, porque el código es de un solo uso. Para secretos que se repiten, usa un campo de contraseña.
- **Consejo:** Siempre un plan B. Ofrece “Enviar otro código” y di adónde fue.
