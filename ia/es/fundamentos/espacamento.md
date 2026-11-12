# Espaciado

Sección de Lume: Fundamentos. Página: https://lumeui.dev/#/fundamentos/espacamento

Una escala de 4 en 4 px que da ritmo a la interfaz. El espacio pequeño agrupa, el grande separa — siempre con un token.

En números: pasos: 15 · base: 4 px · space-100: 8 px · unidad: rem.

## Escala

Cada paso es un múltiplo de 4 px, en rem — acompaña el zoom del navegador. Haz clic en un paso para copiar la variable.

¿Por qué 100 = 8 px? El nombre es la fracción de 8 px por 100. Así caben pasos nuevos en el medio (025, 075, 150…) sin renombrar nada.

```html
gap: var(--ds-space-150);      /* 12 px */
padding: var(--ds-space-300);  /* 24 px */
```

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><rect x="8.5" y="8.5" width="12" height="12" rx="2"></rect><path d="M15.5 8.5v-3a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"></path></svg>
```

## En la práctica

Un componente usa pocos tokens, cada uno con un papel. Cambia la densidad para ver la escala trabajando en conjunto.

Revisé el guion del lanzamiento. Ajusté la apertura y dejé dos opciones de llamado para que elijas. — 3 comentarios · 1 archivo

Tokens usados — Padding — Respiro interno de la tarjeta — space-300 — 24 px — Gap — Entre elementos lado a lado — space-150 — 12 px — Pila — Entre líneas del mismo grupo — space-100 — 8 px — Entre grupos — Separa bloques distintos — space-300 — 24 px

Marcado de los ejemplos de esta sección:

```html
<span class="ds-btn ds-btn--primary ">Aprobar</span>

<span class="ds-btn ds-btn--secondary ">Comentar</span>
```

## Ritmo

La proximidad agrupa. Usa espacio pequeño dentro de un grupo y un salto claro entre grupos — el ojo entiende la estructura antes de leer.

Marcado de los ejemplos de esta sección:

```html
<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m9 9 6 6M15 9l-6 6"></path></svg>

<svg class="ds-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true"><circle cx="12" cy="12" r="8.5"></circle><path d="m8.5 12 2.5 2.5 4.5-5"></path></svg>
```

## Uso

Pocas reglas, aplicadas siempre.

- **Haz:** un token por papel. Padding, gap y pila vienen de la escala. Cambiar la densidad se vuelve cambiar tres tokens.
- **Evita:** números mágicos. Los valores fuera de la escala parecen un detalle, pero suman desalineaciones por toda la pantalla.
- **Consejo:** Consejo: duplica para separar. Si dos bloques deben parecer separados, el espacio entre ellos debe ser al menos el doble del espacio interno.
