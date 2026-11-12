# Interface com o Lume Design System

Este projeto usa o Lume Design System (https://lumeui.dev). Antes de criar ou mudar qualquer tela, leia https://lumeui.dev/ia/LEIA-ME.md e, para cada componente usado, o arquivo dele em https://lumeui.dev/ia/componentes/. O índice completo está em https://lumeui.dev/llms.txt.

Regras que valem sempre:

- Use só classes `ds-*`, atributos e funções que aparecem na documentação do Lume; no JavaScript, só o que `https://lumeui.dev/ds/lume.js` exporta. Não invente variantes, tamanhos nem propriedades.
- Ícones só com `<ds-icon name="…">` e nomes da lista em https://lumeui.dev/ia/icones.md.
- Cor, espaço, raio e tipografia só por token (`var(--ds-…)`), nunca valores soltos.
- Se existe um componente do Lume para a necessidade, use-o em vez de criar um próprio.
- Siga as seções "Uso" e "Acessibilidade" de cada componente.
- Visual plano: sem degradê, sombra decorativa, vidro ou desfoque. Uma ação primária por tela.
- Se a documentação não cobrir um caso, avise a pessoa e diga qual foi a escolha mais próxima.

Copie este arquivo para a raiz do seu projeto com o nome que a sua ferramenta lê: `AGENTS.md`, `CLAUDE.md` ou o arquivo de regras do seu editor.
