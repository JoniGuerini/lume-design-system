# Inicio de sesión y registro

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/login

La primera pantalla del producto — y la que más gente abandona. Pide solo lo necesario, deja ver la contraseña, explica el error sin revelar quién tiene cuenta y nunca dejes a nadie afuera.

En números: campos para entrar: 2 · campos para registrarse: 3 · acción principal: 1 · “confirmar contraseña”: 0.

## Ejemplo en vivo

Tres pantallas conectadas: entrar, crear cuenta y recuperar la contraseña. La cuenta de prueba acepta cualquier correo con la contraseña `lume2026`; `ana@lume.app` ya está registrado.

Lume

### Revisa tu correo

- Entra con otra contraseña: el error no dice cuál de los dos está mal.
- El ojo muestra la contraseña; los requisitos del registro se marcan mientras escribes.
- Al recuperar, la respuesta es la misma exista o no la cuenta.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-segmented" role="radiogroup" aria-label="Pantalla del ejemplo" data-lc-views="">
<button type="button" class="ds-segmented__item" role="radio" data-lc-view-option="login" aria-checked="true">Entrar</button><button type="button" class="ds-segmented__item" role="radio" data-lc-view-option="signup" aria-checked="false">Crear cuenta</button><button type="button" class="ds-segmented__item" role="radio" data-lc-view-option="recover" aria-checked="false">Recuperar contraseña</button>
</div>

<button type="button" class="ds-theme-toggle" data-lc-theme="dark" aria-pressed="false" aria-label="Tema del ejemplo" data-ds-tooltip="Alternar claro y oscuro">
<ds-icon name="sun" size="18" class="ds-theme-toggle__sun"></ds-icon>
<ds-icon name="moon" size="18" class="ds-theme-toggle__moon"></ds-icon>
</button>

<form class="ds-form" data-lc-view="login" id="lc-login" aria-labelledby="lc-login-title" novalidate="">
<header>
<p><img src="assets/favicon.svg" alt="" width="24" height="24">Lume</p>
<h3><span id="lc-login-title">Entrar en Lume</span></h3>
</header>
<div data-lc-alert=""></div>
<div class="ds-form-field">
<label class="ds-form-field__label" for="lc-login-email">Correo</label>
<div class="ds-field"><input class="ds-field__input" id="lc-login-email" name="email" type="email" required="" autocomplete="username" inputmode="email" autocapitalize="none" spellcheck="false" data-error-required="Indica el correo de la cuenta."></div>
</div>
<div>
<div class="ds-form-field">
<label class="ds-form-field__label" for="lc-login-senha">Contraseña</label>
<div class="ds-field"><input class="ds-field__input" id="lc-login-senha" name="senha" type="password" required="" autocomplete="current-password" spellcheck="false" data-error-required="Indica la contraseña."><button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action" data-lc-reveal="" aria-pressed="false" aria-label="Mostrar contraseña" data-ds-tooltip="Mostrar contraseña"><ds-icon name="eye"></ds-icon></button></div>
</div>
<button type="button" class="ds-inline-action" data-lc-go="recover">Olvidé la contraseña</button>
</div>
<button type="submit" class="ds-btn ds-btn--primary" data-lc-submit="">Entrar</button>
<p>¿No tienes cuenta? <button type="button" data-lc-go="signup">Crear cuenta</button></p>
</form>

<form class="ds-form" id="lc-recover" aria-labelledby="lc-recover-title" novalidate="">
<header>
<p><img src="assets/favicon.svg" alt="" width="24" height="24">Lume</p>
<h3><span id="lc-recover-title">Recuperar la contraseña</span></h3>
<p>Te enviamos un enlace para crear una contraseña nueva.</p>
</header>
<div class="ds-form-field">
<label class="ds-form-field__label" for="lc-recover-email">Correo</label>
<div class="ds-field"><input class="ds-field__input" id="lc-recover-email" name="email" type="email" required="" autocomplete="username" inputmode="email" autocapitalize="none" spellcheck="false" data-error-required="Indica el correo de la cuenta."></div>
</div>
<button type="submit" class="ds-btn ds-btn--primary" data-lc-submit="">Enviar enlace</button>
<p><button type="button" data-lc-go="login"><ds-icon name="arrow-left"></ds-icon>Volver a entrar</button></p>
</form>

<svg class="ds-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"></rect><path d="m3.5 7.5 8.5 6 8.5-6"></path></svg>

<button type="button" class="ds-btn ds-btn--secondary" data-lc-go="login">Volver a entrar</button>
```

## Reglas

Seis decisiones que valen para cualquier pantalla de acceso.

Solo lo necesario

Entrar pide correo y contraseña. Crear cuenta pide nombre, correo y contraseña. El resto — foto, empresa, cargo — queda para después, dentro del producto.

Mostrar la contraseña

Un botón dentro del campo (`.ds-field__action`) muestra lo que se escribió. Es lo que evita el error de tipeo — no un segundo campo.

Sin “confirmar contraseña”

Ni “confirmar correo”. Repetir el campo duplica el trabajo y no detecta el error que importa. Quien se equivocó de correo lo recupera con el enlace.

Requisitos a la vista

Las reglas de la contraseña aparecen antes de escribir y se van marcando mientras la persona escribe — no después de un error.

El error no revela quién tiene cuenta

Al entrar, “correo o contraseña incorrectos” — nunca cuál de los dos. Al recuperar, la misma respuesta exista o no la cuenta.

Deja pegar y autocompletar

Nada de bloquear pegar. Con el `autocomplete` correcto, el gestor de contraseñas completa el inicio de sesión y sugiere una contraseña fuerte en el registro.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z"></path><path d="M14 3.5v5h5M9 13h6M9 16.5h4"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m9 9 6 6M15 9l-6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5l7.5 2.8v5.4c0 4.4-3.1 7.9-7.5 8.8-4.4-.9-7.5-4.4-7.5-8.8V6.3z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"></rect><path d="M8 10.5v-3a4 4 0 0 1 8 0v3"></path></svg>
```

## Mensajes

Todo mensaje dice qué hacer a continuación. En el acceso, además no puede ayudar a quien intenta adivinar cuentas ajenas.

| Situación | Evita | Prefiere |
| --- | --- | --- |
| Contraseña incorrecta | Contraseña inválida para este usuario | Correo o contraseña incorrectos. Revísalos e inténtalo de nuevo, o restablece la contraseña. |
| Demasiados intentos | ¡Cuenta bloqueada! | Demasiados intentos seguidos. Inténtalo de nuevo en 5 minutos o restablece la contraseña. |
| Correo en uso | Error 409: conflicto | Ya existe una cuenta con ese correo. ¿Quieres entrar? |
| Contraseña débil | La contraseña no cumple la política | Usa al menos 8 caracteres, con una letra y un número. |
| Enlace enviado | ¡Correo enviado con éxito! | Si hay una cuenta con ese correo, el enlace llega en unos minutos. |
| Enlace vencido | Token inválido | Ese enlace venció — vale por 1 hora. Pide uno nuevo. |

## Accesibilidad

Entrar no puede depender de la memoria, de una visión perfecta ni de la prisa. La WCAG 2.2 tiene un criterio solo para esto: autenticación accesible (3.3.8).

- El autocomplete correcto — `username` y `current-password` al entrar, `email` y `new-password` en el registro. El gestor de contraseñas completa y sugiere — nadie tiene que memorizar nada.
- Pegar siempre funciona — Bloquear pegar empuja a contraseñas débiles y rompe los gestores. Ni en el correo, ni en la contraseña.
- Mostrar contraseña con estado — El botón tiene un nombre fijo (“Mostrar contraseña”) y `aria-pressed` dice si está activado. El foco no se mueve.
- Requisitos ligados al campo — La lista está en el `aria-describedby` de la contraseña; cada ítem dice en texto si ya se cumple — no solo por el color del ✓.
- Error de acceso como alerta — “Correo o contraseña incorrectos.” aparece en un `.ds-alert` con `role="alert"`; la contraseña se borra y recibe el foco para el siguiente intento.
- Sin pruebas de memoria — Nada de CAPTCHA de imagen ni pregunta secreta como única salida. Si necesitas frenar robots, ofrece un camino que no dependa de descifrar letras.

## Código

El inicio de sesión es un formulario común con `createForm`: los campos, el botón de mostrar contraseña y la respuesta del servidor en una alerta.

```html
<form class="ds-form" id="entrar" novalidate>
  <div class="ds-form-field">
    <label class="ds-form-field__label" for="email">Correo</label>
    <div class="ds-field">
      <input class="ds-field__input" id="email" name="email" type="email" required
        autocomplete="username" inputmode="email" autocapitalize="none" spellcheck="false">
    </div>
  </div>
  <div class="ds-form-field">
    <label class="ds-form-field__label" for="contrasena">Contraseña</label>
    <div class="ds-field">
      <input class="ds-field__input" id="contrasena" name="contrasena" type="password" required
        autocomplete="current-password">
      <button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted ds-field__action"
        aria-pressed="false" aria-label="Mostrar contraseña" data-mostrar-contrasena>
        <ds-icon name="eye" size="16"></ds-icon>
      </button>
    </div>
  </div>
  <button type="submit" class="ds-btn ds-btn--primary">Entrar</button>
</form>
```

```html
import { createForm } from 'https://lumeui.dev/v/0.26/lume.js';

// mostrar contraseña: cambia el tipo del campo y marca el botón
document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-mostrar-contrasena]');
  if (!button) return;
  const input = button.closest('.ds-field').querySelector('input');
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  button.setAttribute('aria-pressed', String(show));
});

createForm(document.querySelector('#entrar'), {
  summary: false, // dos campos: el error aparece en cada uno
  async onSubmit(datos) {
    const ok = await entrar(datos.email, datos.contrasena);
    if (!ok) mostrarAlerta('Correo o contraseña incorrectos.'); // nunca digas cuál de los dos
  },
});
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

La pantalla de acceso queda fuera de la app: sin sidebar, sin navegación — solo la marca y el formulario.

- **Haz:** entra directo después del registro. Quien acaba de crear la cuenta ya está dentro. Pedirle que entre de nuevo, con los mismos datos, es perder gente en la puerta.
- **Evita:** reglas de contraseña escondidas. Descubrir la regla solo después del error — “necesita un carácter especial” — hace adivinar dos veces. Muéstrala antes y márcala mientras escribe.
- **Consejo:** Un camino de vuelta en cada pantalla. Entrar lleva a crear cuenta y a recuperar la contraseña; las dos vuelven a entrar. Nadie queda atrapado en un callejón.
