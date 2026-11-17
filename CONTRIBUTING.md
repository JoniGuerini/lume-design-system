# Como contribuir com o Lume

Obrigado pelo interesse! O Lume é mantido por uma pessoa só, então o jeito de contribuir é simples e direto.

> *English: bug reports and small pull requests (fixes, accessibility, translations) are welcome. For anything bigger, please open an issue first. Issues and PRs can be written in English, Portuguese or Spanish.*

## Achou um bug ou tem uma ideia?

Abra uma [Issue](../../issues/new/choose). Ela pode ser em português, inglês ou espanhol. Para bug, diga em qual página ou componente acontece, o tema (claro ou escuro) e o navegador. Uma captura de tela ajuda muito.

## Pull requests

São bem-vindos **PRs pequenos**:

- correções de bugs;
- melhorias de acessibilidade (teclado, leitor de tela, contraste);
- textos e traduções (português, inglês e espanhol);
- erros na documentação.

Para **componente novo, mudança visual ou de API**, abra uma Issue antes de escrever código. Assim a gente combina se aquilo entra e como, e ninguém perde trabalho. Nem todo PR é aceito, mesmo quando está certo: o Lume tem uma direção visual definida e prefere menos peças a mais.

## Rodar o projeto

Precisa só do Node 18 ou mais novo. Não há dependências para instalar.

```bash
npm run dev            # abre o site em http://localhost:5173
```

O servidor gera os tokens sozinho e acompanha as mudanças em `tokens/`.

## Regras do código

- **Sem dependências:** HTML, CSS e JavaScript nativos. Nada de pacotes novos.
- **Tokens são a fonte da verdade:** cores, espaços e tipografia vêm de `tokens/*.json`. `ds/tokens.css` e `ds/tokens.js` são gerados, não edite. Componentes usam só tokens semânticos (`var(--ds-color-fg-muted)`, nunca uma cor solta).
- **Três idiomas:** todo texto novo nasce em português, inglês e espanhol. Nos componentes, por `msg()` (`ds/js/messages.js`). No site, por `T(pt, en, es)` ou `L(pt, en, es)`.
- **Estados:** toda regra com `:hover`, `:focus-visible` ou `:active` tem a irmã com `[data-state="hover|focus|pressed"]`.
- **Acessibilidade:** teclado completo, nome acessível, contraste WCAG AA nos dois temas.
- **Plano:** sem degradê de fundo, vidro, blur, brilho ou imagens decorativas.

## Antes de abrir o PR

```bash
npm run build          # tokens, React e o site
npm run test:a11y      # acessibilidade e contraste em todas as páginas, nos dois temas
```

Se mudou CSS, rode também `npm run test:visual`. Na primeira vez, rode `npm run test:visual -- --atualizar` antes de mexer, para gerar as fotos de referência no seu computador. Depois, rode de novo e confira o relatório em `dist/test-visual/relatorio.html`.

Não precisa mexer no changelog, no número da versão nem nos arquivos gerados para IAs (`ia/`) e para o Storybook. Isso é feito na hora de lançar a versão.

## Licença

Ao contribuir, você concorda que o seu código seja distribuído sob a [licença MIT](LICENSE) do projeto.
