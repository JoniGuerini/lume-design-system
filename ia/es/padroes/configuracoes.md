# Configuración

Sección de Lume: Patrones. Página: https://lumeui.dev/#/padroes/configuracoes

Donde la persona ajusta su perfil, los avisos y la apariencia, y de vez en cuando hace algo serio. Lo ligero vale al instante; el texto espera a Guardar; lo que no vuelve pide confirmación.

En números: secciones: 4 · botón Guardar: 1 · confirmaciones: 2.

## Ejemplo en vivo

La configuración de una cuenta en Lume. Cambia los ajustes, edita el perfil e intenta cambiar de sección sin guardar.

Tú

- Perfil
- Notificaciones
- Apariencia

Espacio de trabajo

- Zona de peligro

Todo guardado

- Cambia el nombre y ve a Notificaciones: Lume pregunta si descartar.
- Activa un switch: “Guardado” aparece junto al título, sin botón.
- En Apariencia, elige Oscuro: todo el escenario cambia de tema.
- En Zona de peligro, Eliminar solo se habilita tras escribir “Lume”.

Marcado de los ejemplos de esta sección:

```html
<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-nome">Nombre</label>
<div class="ds-field"><input class="ds-field__input" id="cf-nome" name="cf-nome" type="text" value="Ana Lima" autocomplete="name" spellcheck="false" data-cf-input=""></div>
<div class="ds-form-field__footer" hidden=""></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-email">Correo</label>
<div class="ds-field"><input class="ds-field__input" id="cf-email" name="cf-email" type="email" value="ana@lume.app" autocomplete="email" aria-describedby="cf-email-hint" spellcheck="false" data-cf-input=""></div>
<div class="ds-form-field__footer"><p class="ds-form-field__hint" id="cf-email-hint">Si lo cambias, enviamos un enlace para confirmar. Hasta entonces, vale el correo actual.</p></div>
</div>

<div class="ds-form-field">
<label class="ds-form-field__label" for="cf-sobre">Sobre ti</label>
<div class="ds-field ds-field--multiline"><textarea class="ds-field__input" id="cf-sobre" name="cf-sobre" rows="3" data-cf-input="">Me ocupo del diseño de Lume.</textarea></div>
</div>

<button type="button" class="ds-btn ds-btn--ghost ds-btn--sm" data-cf-discard="" disabled="">Descartar</button>

<button type="submit" class="ds-btn ds-btn--primary ds-btn--sm" data-cf-save="" disabled="">Guardar</button>

<label class="ds-switch ds-switch--end">
<input type="checkbox" role="switch" class="ds-switch__input" data-cf-instant="mencoes" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Menciones y respuestas</span><span class="ds-choice__description">Cuando alguien te habla en un comentario.</span></span>
</label>

<label class="ds-switch ds-switch--end">
<input type="checkbox" role="switch" class="ds-switch__input" data-cf-instant="convites" checked="">
<span class="ds-choice__text"><span class="ds-choice__label">Invitaciones aceptadas</span><span class="ds-choice__description">Cuando entra una persona que invitaste.</span></span>
</label>

<label class="ds-switch ds-switch--end">
<input type="checkbox" role="switch" class="ds-switch__input" data-cf-instant="novidades">
<span class="ds-choice__text"><span class="ds-choice__label">Novedades de Lume</span><span class="ds-choice__description">Una vez al mes, como máximo.</span></span>
</label>
```

## Al instante, en el botón o con confirmación

La decisión central del patrón: cuánto cuesta equivocarse decide cuándo vale el ajuste.

| Ajuste | Vale | Por qué |
| --- | --- | --- |
| Encender y apagar | Al instante, con “Guardado” | Es un clic, y otro clic lo deshace. Un botón Guardar solo daría la ocasión de olvidarlo. |
| Pocas opciones | Al instante | Tema, idioma, frecuencia: ver el efecto es la mejor confirmación. |
| Texto | En el botón Guardar | Guardar con cada letra graba a medias y muestra errores antes de tiempo. |
| Lo que no vuelve | Con confirmación | Eliminar, cambiar de plan, transferir: el único momento en que preguntar protege de verdad. |

## Anatomía

Cinco partes. La barra de guardar solo aparece donde hay texto.

- 1 — Navegación de secciones — A la izquierda, agrupada por a quién afecta: a ti o al espacio de trabajo. La zona de peligro siempre va al final.
- 2 — Fila de ajuste — Nombre, una frase del efecto y el control a la derecha. La frase dice qué cambia, no repite el nombre.
- 3 — Aviso de guardado — Un “Guardado” discreto junto al título de la sección, que desaparece solo. Nada de toast para cada switch.
- 4 — Barra de guardar — Solo en los campos de texto: el estado (“Cambios sin guardar”), Descartar y Guardar, que solo funcionan cuando algo cambió.
- 5 — Zona de peligro — Contorno en el tono de peligro, cada acción en su fila y el botón diciendo lo que hace.

## Reglas

Seis decisiones que valen para cualquier pantalla de configuración.

Encender y apagar vale al instante

El switch es efecto inmediato por definición. Si necesita Guardar, el control correcto es un checkbox en un formulario.

El texto espera a Guardar

Y Guardar solo funciona cuando algo cambió. Al lado, el estado en palabras: “Todo guardado” o “Cambios sin guardar”.

Salir sin guardar pregunta

Cambiar de sección con el perfil a medias pregunta si descartar. Es lo que se perdería sin aviso.

El peligro va al final y aparte

En una sección propia, con contorno en el tono de peligro. Nadie debería llegar ahí por error, desplazándose.

Confirmar exige leer

Para lo que no vuelve, la persona escribe el nombre del espacio. El botón dice “Eliminar espacio de trabajo”, nunca “OK”.

Cada sección tiene dirección

En la app, cada ítem es un enlace (/configuracion/notificaciones). Se puede enviar a alguien y Volver funciona.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="2.5" y="6.5" width="19" height="11" rx="5.5"></rect><circle cx="16" cy="12" r="2.75"></circle></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M16 4.5a2.12 2.12 0 0 1 3 3L8 18.5l-4 1 1-4z"></path><path d="m14 6.5 3 3"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="M12 7.5V13"></path><path d="M12 16.5h.01"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M12 3.5l7.5 2.8v5.4c0 4.4-3.1 7.9-7.5 8.8-4.4-.9-7.5-4.4-7.5-8.8V6.3z"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M5 7V5h14v2M12 5v14M9 19h6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"></path></svg>
```

## Mensajes

Lo ligero, en una palabra. Lo serio, con números y el nombre de lo que se pierde.

| Situación | Evita | Prefiere |
| --- | --- | --- |
| Guardado al instante | ¡Tus preferencias se actualizaron con éxito! | Guardado |
| Salir sin guardar | ¿Estás seguro? | ¿Descartar los cambios del perfil? |
| Eliminar | Esta acción es irreversible. ¿Desea continuar? | Esto borra 12 proyectos, 48 archivos y el acceso de 22 personas. |
| Botón de confirmar | OK | Eliminar espacio de trabajo |

## Accesibilidad

Guardar al instante no puede ser silencioso para quien no ve la pantalla.

- Sección actual marcada — La navegación tiene nombre y `aria-current` en la sección abierta. Al cambiar, el foco va al título de la sección (`tabindex="-1"`) y el lector de pantalla dice adónde llegó la persona.
- Switch con nombre y efecto — `role="switch"` dentro del `<label>`, con nombre y descripción: el lector de pantalla dice “Menciones y respuestas, activado” y la frase del efecto.
- “Guardado” anunciado — El aviso está en una región `role="status"`: se anuncia sin quitar el foco del control.
- Estado de la barra en palabras — “Cambios sin guardar” está en `aria-live`; Guardar desactivado tiene el motivo al lado, a la vista.
- Eliminar con el teclado — El modal se abre con el foco en el campo del nombre. Enter confirma solo cuando el nombre coincide; Esc cancela y el foco vuelve al botón Eliminar.

## Código

Los switches y `createSegmented` guardan al instante; el perfil es un `<form>` común; la eliminación usa `createModal` para bloquear el botón hasta que el nombre coincida.

```html
<section aria-labelledby="notificaciones-titulo">
  <header>
    <h2 id="notificaciones-titulo" tabindex="-1">Notificaciones</h2>
    <p role="status" id="guardado"></p>   <!-- “Guardado” aparece aquí -->
  </header>

  <label class="ds-switch ds-switch--end">
    <input type="checkbox" role="switch" class="ds-switch__input" name="menciones" checked>
    <span class="ds-choice__text">
      <span class="ds-choice__label">Menciones y respuestas</span>
      <span class="ds-choice__description">Cuando alguien te habla en un comentario.</span>
    </span>
  </label>
</section>
```

```html
import { createModal, toast } from 'https://lumeui.dev/v/1.13/lume.js';

// Encender y apagar: guarda al instante y avisa sin mover el foco
seccion.addEventListener('change', async (e) => {
  await guardar({ [e.target.name]: e.target.checked });
  guardado.textContent = 'Guardado';
  setTimeout(() => (guardado.textContent = ''), 2000);
});

// Eliminar: solo confirma quien escribió el nombre
const modal = createModal({
  title: '¿Eliminar “Lume”?', tone: 'danger', size: 'sm', body: cuerpo,
  actions: [
    { label: 'Cancelar', value: 'cancel' },
    { label: 'Eliminar espacio de trabajo', value: 'confirm', variant: 'danger' },
  ],
});
const eliminar = modal.el.querySelector('[data-ds-modal-close="confirm"]');
eliminar.disabled = true;
campo.addEventListener('input', () => (eliminar.disabled = campo.value.trim() !== 'Lume'));
if ((await modal.open()) === 'confirm') eliminarEspacio();
modal.destroy();
```

Marcado de los ejemplos de esta sección:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Uso

La configuración es para lo que la persona cambia de vez en cuando. Lo que cambia todos los días vive en la propia pantalla.

- **Haz:** agrupa por a quién afecta. “Tú” y “Espacio de trabajo” dejan claro si el cambio es solo tuyo o de todos, antes incluso de abrir la sección.
- **Evita:** un Guardar para toda la página. Mezclar switches, tema y texto en un solo Guardar hace que la persona se vaya creyendo que activó algo que no activó.
- **Consejo:** Un ajuste con muchos niveles se vuelve página. Permisos por proyecto, reglas de cobro: cuando la fila necesita una tabla, lleva a una página propia.
