# Visualizador de imagem

Seção do Lume: Componentes. Página: https://lumeui.dev/#/componentes/visualizador-de-imagem

Abre uma imagem grande por cima da página, com zoom, arrastar e as outras da mesma galeria. A miniatura fica na página; a imagem inteira, só quando a pessoa pede.

Em números: zoom máximo: 4× · formas de abrir: 2 · atalhos: 8 · papel ARIA: dialog.

## Exemplo

```html
<a class="ds-viewer-thumb" href="inicio.jpg" data-ds-viewer="capturas" data-caption="Início · tema claro">
  <img src="inicio-mini.jpg" alt="A página inicial do Lume no tema claro, com o título “Vamos construir com refinamento.” e o cartão da última versão.">
</a>
<a class="ds-viewer-thumb" href="cores.jpg" data-ds-viewer="capturas" data-caption="Cores · tema escuro">
  <img src="cores-mini.jpg" alt="A página Cores do Lume no tema escuro, com os números da paleta e a escala do pêssego.">
</a>
<a class="ds-viewer-thumb" href="botao.jpg" data-ds-viewer="capturas" data-caption="Botão · tema claro">
  <img src="botao-mini.jpg" alt="A página Botão do Lume no tema claro, com o playground e as variantes.">
</a>
<a class="ds-viewer-thumb" href="graficos.jpg" data-ds-viewer="capturas" data-caption="Gráficos · tema escuro">
  <img src="graficos-mini.jpg" alt="A página Gráficos do Lume no tema escuro, com gráficos de barras e de linhas.">
</a>

<script type="module">
  import { mountImageViewer } from 'https://lumeui.dev/v/1.6/lume.js';
  mountImageViewer(document);
</script>
```

## Variantes

O mesmo visualizador, aberto por miniaturas ou por código.

Galeria `data-ds-viewer` — Links com o mesmo valor viram uma galeria: setas, contagem e legenda de cada uma.

Imagem única `ds-viewer-thumb` — Sozinha, sem setas nem contagem. Sem legenda, a barra mostra só as ferramentas.

Por código `openImageViewer` — Para abrir de um botão, de um menu ou de outro componente. Começa na imagem que você pedir.

Sem carregar `estado de erro` — Se a imagem não vem, o visualizador diz isso no lugar dela, e as outras da galeria continuam.

Marcação dos exemplos desta seção:

```html
<a class="ds-viewer-thumb" href="assets/capturas/inicio.jpg" data-ds-viewer="galeria" data-caption="Início · tema claro"><img src="assets/capturas/inicio-mini.jpg" alt="A página inicial do Lume no tema claro, com o título “Vamos construir com refinamento.” e o cartão da última versão." width="640" height="400" loading="lazy"></a>

<a class="ds-viewer-thumb" href="assets/capturas/cores.jpg" data-ds-viewer="galeria" data-caption="Cores · tema escuro"><img src="assets/capturas/cores-mini.jpg" alt="A página Cores do Lume no tema escuro, com os números da paleta e a escala do pêssego." width="640" height="400" loading="lazy"></a>

<a class="ds-viewer-thumb" href="assets/capturas/botao.jpg" data-ds-viewer="galeria" data-caption="Botão · tema claro"><img src="assets/capturas/botao-mini.jpg" alt="A página Botão do Lume no tema claro, com o playground e as variantes." width="640" height="400" loading="lazy"></a>

<a class="ds-viewer-thumb" href="assets/capturas/graficos.jpg" data-ds-viewer="galeria" data-caption="Gráficos · tema escuro"><img src="assets/capturas/graficos-mini.jpg" alt="A página Gráficos do Lume no tema escuro, com gráficos de barras e de linhas." width="640" height="400" loading="lazy"></a>

<a class="ds-viewer-thumb" href="assets/capturas/cores.jpg" data-ds-viewer="unica"><img src="assets/capturas/cores-mini.jpg" alt="A página Cores do Lume no tema escuro, com os números da paleta e a escala do pêssego." width="640" height="400" loading="lazy"></a>

<button type="button" class="ds-btn ds-btn--secondary" data-open-code=""><ds-icon name="maximize"></ds-icon>Ver as capturas</button>

<button type="button" class="ds-btn ds-btn--secondary" data-open-error=""><ds-icon name="alert-circle"></ds-icon>Abrir imagem que falha</button>
```

## Estados

A miniatura aproxima de leve com o mouse e mostra o anel com o foco. O cursor de lupa avisa que abre.

Marcação dos exemplos desta seção:

```html
<a class="ds-viewer-thumb" href="assets/capturas/botao.jpg" data-ds-viewer="estado" data-caption="Botão · tema claro"><img src="assets/capturas/botao-mini.jpg" alt="A página Botão do Lume no tema claro, com o playground e as variantes." width="640" height="400" loading="lazy"></a>
```

## Código

A miniatura é um link para a imagem grande: sem JavaScript, ela ainda abre. `mountImageViewer` liga todos os links de uma área.

```html
<a class="ds-viewer-thumb" href="inicio.jpg" data-ds-viewer="capturas" data-caption="Início · tema claro">
  <img src="inicio-mini.jpg" alt="A página inicial do Lume no tema claro, com o título “Vamos construir com refinamento.” e o cartão da última versão.">
</a>
<a class="ds-viewer-thumb" href="cores.jpg" data-ds-viewer="capturas" data-caption="Cores · tema escuro">
  <img src="cores-mini.jpg" alt="A página Cores do Lume no tema escuro, com os números da paleta e a escala do pêssego.">
</a>

<script type="module">
  import { mountImageViewer, openImageViewer } from 'https://lumeui.dev/v/1.6/lume.js';

  // clicar numa miniatura abre a galeria do mesmo data-ds-viewer
  mountImageViewer(document);

  // ou abra por código, começando na segunda
  openImageViewer([
    { src: 'inicio.jpg', alt: '…', caption: 'Início · tema claro' },
    { src: 'cores.jpg', alt: '…', caption: 'Cores · tema escuro' },
  ], { index: 1 });
</script>
```

Marcação dos exemplos desta seção:

```html
<button type="button" class="ds-icon-btn ds-icon-btn--sm ds-icon-btn--muted" data-copy-code="" aria-label="Copiar código" data-ds-tooltip="Copiar código"><ds-icon name="copy"></ds-icon></button>
```

## Acessibilidade

Um diálogo modal: o foco entra, fica dentro e volta para a miniatura ao fechar.

- Texto alternativo — O alt da miniatura vai para a imagem grande. Descreva o que a imagem mostra; a legenda é outra coisa e pode ficar vazia.
- Trocar de imagem — ← → Home End — As setas trocam; com zoom, andam pela imagem. A contagem “2 de 4” é anunciada a cada troca.
- Zoom — + − 0 — Botões com nome, `+` e `−` no teclado e `0` para voltar a caber na tela. A roda e a pinça aproximam no ponto do cursor ou dos dedos.
- Fechar — Esc — Esc, o botão “Fechar” ou um clique fora da imagem. O foco volta para quem abriu.
- Carregando e erro — Enquanto a imagem chega aparece o spinner; se falhar, a mensagem “Não foi possível carregar a imagem.” fica numa região de status.
- Movimento reduzido — Sem animação de zoom nem de entrada.

## Tokens usados

O fundo é o do app, opaco: nada de véu translúcido.

| Token | Papel | Lume claro | Lume escuro |
| --- | --- | --- | --- |
| color.bg.app (`--ds-color-bg-app`) | Fundo do visualizador | #DAE0E8 | #0F0E0C |
| color.bg.raised (`--ds-color-bg-raised`) | Barra de ferramentas e setas | #FFFFFF | #2C2A27 |
| color.bg.muted (`--ds-color-bg-muted`) | Fundo da miniatura | #DAE0E8 | #3D3B38 |
| color.border.subtle (`--ds-color-border-subtle`) | Contorno da miniatura | #3E516624 | #FFFFFF0F |
| color.fg.muted (`--ds-color-fg-muted`) | Contagem e porcentagem do zoom | #46586E | #CEC8C1 |
| radius.lg (`--ds-radius-lg`) | Cantos da miniatura e da imagem | 16 px | 16 px |
| radius.full (`--ds-radius-full`) | Ferramentas e setas | 9999 px | 9999 px |

## Uso

Visualizador, carrossel ou modal?

- **Faça:** imagem que pede detalhe. Capturas de tela, fotos de produto, comprovantes: o que a pessoa quer ver de perto.
- **Evite:** imagem de enfeite. Se não há o que ver de perto, a imagem não precisa abrir. Destaques que passam sozinhos são Carrossel.
- **Dica:** Miniatura leve, imagem grande. A miniatura carrega com a página; a grande, só quando abre. Aqui, 30 KB e 200 KB.
