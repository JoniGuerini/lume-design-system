---
name: lume-design-system
description: Cria e revisa interfaces com o Lume Design System (lumeui.dev), um design system em HTML, CSS e JavaScript nativos. Use sempre que a pessoa pedir uma tela, um componente ou um protótipo com o Lume, ou quando o projeto já carregar ds.css ou usar classes ds-*.
---

# Lume Design System

O Lume é um design system sem dependências: um CSS (`https://lumeui.dev/v/0.25/lume.css`), módulos JavaScript opcionais e 130 ícones próprios. A documentação para IAs está publicada em `https://lumeui.dev/ia/`.

## Como trabalhar

1. Leia `https://lumeui.dev/ia/LEIA-ME.md` antes de escrever código. Ele traz a instalação, as regras gerais e a direção visual.
2. Abra o índice `https://lumeui.dev/llms.txt` e leia o arquivo de cada componente que for usar (`https://lumeui.dev/ia/componentes/<nome>.md`). Para uma tela inteira, comece pelos padrões em `https://lumeui.dev/ia/padroes/`.
3. Escreva a interface só com o que aparece nesses arquivos: as classes `ds-*`, os atributos, as funções dos módulos e os tokens `var(--ds-…)`.
4. Para ícones, confira o nome em `https://lumeui.dev/ia/icones.md`.
5. Antes de entregar, revise a tela contra as seções "Uso" e "Acessibilidade" dos componentes usados.

## Nunca

- Inventar classes, variantes, tamanhos, propriedades ou ícones que não estão na documentação.
- Usar cor, espaço, raio ou tamanho de fonte soltos no lugar de um token.
- Recriar à mão um componente que o Lume já tem.
- Usar degradê, vidro, desfoque, sombra decorativa ou o ícone de brilho ("sparkles").

Se a documentação não cobrir o caso, diga isso à pessoa e explique qual foi a escolha mais próxima.
