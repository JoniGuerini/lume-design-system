# Lume Design System: guia para IAs

Leia este arquivo antes de criar qualquer tela com o Lume. Ele diz como instalar, quais regras valem para todas as telas e o que você nunca deve inventar. O índice completo dos arquivos está em https://lumeui.dev/llms.txt.

O Lume é um design system em HTML, CSS e JavaScript nativos, sem dependências. Ele reúne tokens, tipografia, 150 ícones próprios, 55 componentes, gráficos e padrões de tela, nos temas claro e escuro.

## Antes de tudo

1. **Use só o que está documentado.** Toda classe `ds-*`, todo atributo `data-*` e toda função JavaScript que você usar precisa aparecer em um arquivo desta documentação. Não invente classes, variantes, tamanhos nem propriedades.
2. **Ícones só da lista.** Use `<ds-icon name="…">` com um nome de https://lumeui.dev/ia/icones.md. Se nenhum servir, escolha o mais próximo da lista e avise a pessoa. Nunca desenhe um SVG próprio no lugar.
3. **Cor, espaço, raio e tipografia só por token.** Use `var(--ds-…)`, nunca um valor solto como `#3e5166` ou `13px`. Os tokens estão em https://lumeui.dev/ia/recursos/tokens.md e em cada arquivo de componente, na seção "Tokens usados".
4. **Componente antes de código próprio.** Se existe um componente para a necessidade, use-o, mesmo que dê para fazer à mão.
5. **Na dúvida, pergunte ou avise.** Se a documentação não cobre um caso, diga à pessoa o que faltou e qual foi a escolha mais próxima. Não preencha a lacuna com algo que pareça do Lume.
6. **Siga as seções "Uso" e "Acessibilidade" de cada componente.** São regras, não sugestões.

## Instalação

O Lume está publicado com versão fixa em `https://lumeui.dev/v/0.36/` e pode ser carregado direto de outro site. Licença MIT.

```html
<html lang="pt-BR" data-theme="light">
  <head>
    <link rel="stylesheet" href="https://lumeui.dev/v/0.36/lume.css">
  </head>
  <body>
    <button type="button" class="ds-btn ds-btn--primary">Salvar</button>

    <script type="module">
      import { initTooltips } from 'https://lumeui.dev/v/0.36/lume.js';
      initTooltips();
    </script>
  </body>
</html>
```

- **Um CSS só:** `lume.css` traz as fontes, os tokens, a base e todos os componentes.
- **Um JavaScript só, se preferir:** `lume.js` reúne toda a API pública (`import { createModal, toast } from 'https://lumeui.dev/v/0.36/lume.js'`). A lista e a convenção de nomes estão em `https://lumeui.dev/ia/recursos/api.md`. O que não está nele é interno: não use.
- **Tema:** `data-theme="light"` (claro) ou `data-theme="dark"` (escuro) no `<html>`. Para seguir o sistema, chame `initTheme()` de `https://lumeui.dev/ds/js/theme.js`.
- **JavaScript só onde precisa:** componentes visuais funcionam só com CSS. Os interativos têm um módulo em `https://lumeui.dev/ds/js/`. Importe só os que a tela usa, e o arquivo de cada componente mostra qual é.
- **Ícones:** importe `https://lumeui.dev/ds/icons/icons.js` uma vez para que o `<ds-icon>` funcione.
- **Idioma:** os textos de sistema dos componentes seguem o idioma do navegador (português, inglês ou espanhol; qualquer outro vira inglês). Para fixar um, chame `setLocale('pt-BR')` de `https://lumeui.dev/ds/js/i18n.js`.
- **Versão:** use o endereço com versão (`/v/0.36/`). A versão atual e a lista estão em `https://lumeui.dev/v/index.json`. `https://lumeui.dev/ds/` sempre traz a mais nova, e cada versão tem um zip para quem prefere os arquivos no projeto (`https://lumeui.dev/v/0.36/lume-0.36.zip`).

## React

Em projetos React, use os componentes de `lume/react/`, que vêm no zip de cada versão (`https://lumeui.dev/v/0.36/lume-0.36.zip`). A pasta do zip vai inteira para `src/lume/`; o app importa `./lume/lume.css` uma vez e os componentes de `./lume/react`.

```tsx
import './lume/lume.css';
import { Button, Alert } from './lume/react';

<Button variant="primary" icon="check">Salvar alterações</Button>
<Alert tone="success" title="Alterações salvas" />
```

- **Use o componente React quando ele existir** (lista em `https://lumeui.dev/ia/recursos/react.md`). As props seguem as variantes da página de cada componente: `variant`, `size`, `tone`.
- **O que ainda não tem componente React** usa a marcação HTML da página do componente, com `className` no lugar de `class`. O CSS é o mesmo.
- **Ícones:** `<Icon name="…" />`, com os nomes da lista de ícones. O TypeScript recusa nome que não existe.
- **Não instale pacote npm do Lume:** ele não existe. Os arquivos ficam no projeto, como no shadcn.

## Direção visual

- **Tudo plano.** Superfícies opacas, contornos finos, raios grandes. Sem degradê, sombra decorativa, vidro, desfoque, brilho ou textura.
- **Sem imagens decorativas.** A personalidade vem da tipografia, dos contornos e da cor de destaque.
- **Tipografia:** Geist Serif nos títulos, Geist Sans no texto e JetBrains Mono no código. Use os estilos de texto dos tokens (`--ds-text-…`), não tamanhos soltos.
- **Uma ação primária por tela.** As outras ações ficam em secundário, ghost ou sutil.
- **Menos é mais.** Prefira menos elementos bem resolvidos a enfeites. Não use ícone de brilho ("sparkles") para indicar novidade ou IA.

## Textos

- Português do Brasil, curto e direto. Rótulos de botão começam com verbo ("Salvar alterações", não "OK").
- O componente já traz os textos de sistema nos três idiomas (português, inglês e espanhol). Não traduza à mão o que ele já resolve.

## Acessibilidade

O Lume segue a WCAG 2.2, nível AA, nos dois temas. Os componentes já vêm com teclado, foco visível e contraste medido. Continua sendo sua responsabilidade:

- dar nome a botões só com ícone (`aria-label` e uma dica com o mesmo texto);
- usar o elemento certo (`<button>` para ação, `<a>` para navegar);
- não depender só de cor para passar informação;
- respeitar as regras de cada componente na seção "Acessibilidade".

## Onde está cada coisa

- **Componentes:** um arquivo por componente em `https://lumeui.dev/ia/componentes/`. Cada um traz um exemplo de código, as variantes com suas classes, os estados, a anatomia, a acessibilidade, os tokens e as regras de uso.
- **Fundamentos:** cores, tipografia, ícones, espaçamento, raios, elevação, movimento e layout, em `https://lumeui.dev/ia/fundamentos/`.
- **Gráficos:** em `https://lumeui.dev/ia/graficos/`.
- **Padrões de tela:** app shell, formulários, login, busca, estados vazios e conversa, em `https://lumeui.dev/ia/padroes/`. Comece por eles quando for montar uma tela inteira.
- **Primeiros passos:** `https://lumeui.dev/ia/primeiros-passos.md`.

## Escolha rápida

- Ação → Botão; ação dentro de texto ou lista → Ação inline.
- Uma opção entre poucas, sempre visíveis, com efeito imediato → Controle segmentado; escolher uma ou várias numa lista → Seleção.
- Liga e desliga com efeito imediato → Switch; marcar para enviar depois → Checkbox.
- Mensagem que some sozinha → Toast; que fica na tela → Alerta.
- Decisão ou tarefa curta que interrompe o fluxo → Modal; detalhes ou tarefa sem sair da página → Gaveta lateral.
- Agrupar conteúdo → Card; a superfície de uma tarefa do produto, com controles e seções → Painel.
- Tarefa com progresso medível → Barra de progresso; espera curta → Spinner; conteúdo com forma conhecida carregando → Skeleton.
