# Publicar o Lume no npm (ainda não publicado)

Tudo está pronto até o ponto de criar o pacote no npm. Falta só decidir o nome e publicar.

## 1. Escolher o nome

O nome fica num lugar só: a constante `NAME` no topo de `scripts/build-npm.mjs` (hoje `@joniguerini/lume`, provisório).
O README do pacote e o comando `npx` leem dali.

- Com escopo pessoal (`@joniguerini/…`): o npm nunca recusa por parecer com outro nome.
- Sem escopo (`lume-design-system`, `lume-ds`…): o npm só diz se aceita na hora de publicar. Ele já recusou `lumeui` por ser parecido com `lume-ui`.
- `@lumeui/…` exige a organização `lumeui` no npm, que não estava livre.

## 2. Montar e testar

```bash
npm run build          # deixa versoes/<linha>/ em dia
npm run npm:build      # monta dist/npm/pacote/ (na primeira vez, baixa o TypeScript só para compilar o React)
npm pack ./dist/npm/pacote --pack-destination dist/npm
```

Teste feito em 17/11/2026 com a 1.8.0: o `.tgz` instalado num projeto Vite + React 19 + TypeScript estrito passou no `tsc --noEmit` e no `vite build`, e a página abriu sem erros (AppShell, Button, Chip, `initTheme` e `toast`). O `npx … add modal` copiou o modal com o que ele precisa.

## 3. Publicar

```bash
npm login
npm publish dist/npm/pacote --access public
```

O npm pede a chave de segurança (2FA) de quem publica. Cada versão nova do Lume = `npm run build`, `npm run npm:build` e `npm publish` de novo (a versão vem do changelog).

## Depois de publicar

- Contar no site: Primeiros passos (instalação), Recursos › Usar com React e os guias para IAs (`ia/`, nos três idiomas).
- Atualizar a contagem e o nome no README do repositório.
