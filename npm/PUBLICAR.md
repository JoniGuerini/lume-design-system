# Publicar o Lume no npm

O pacote é `@joniguerini/lume` (publicado desde a 1.9.0, em 17/11/2026). O nome fica num lugar só: a constante `NAME` no topo de `scripts/build-npm.mjs`; o README do pacote e o comando `npx` leem dali.

## Hoje: à mão, num comando

```bash
npm run build          # a versão nova no changelog e versoes/<linha>/ em dia
npm run publicar       # monta o pacote, confere se a versão já está no npm e publica (pede a chave de segurança)
```

Se a versão já estiver no npm, o `npm run publicar` para sem publicar nada.

## Sozinho, pelo GitHub (desligado por enquanto)

**Em 17/11/2026 o GitHub Actions ficou bloqueado na conta dele** (“account is locked due to a billing issue”, depois de uma verificação de cartão recusada; nada a pagar). O workflow foi desligado (`gh workflow disable publicar-npm.yml`) para não falhar a cada versão. Quando o suporte do GitHub destravar: `gh workflow enable publicar-npm.yml`, rodar o ensaio e, se a conexão do npm tiver vencido (validade até 19/11/2026, 21:41 UTC), apagar e criar de novo com os mesmos campos.

O workflow `.github/workflows/publicar-npm.yml` publica quando o `site/changelog.js` muda na `main` e a versão dele ainda não está no npm. Nada a fazer além do de sempre ao fechar uma versão:

```bash
npm run build          # deixa versoes/<linha>/ em dia (o pacote sai dali)
git push               # o changelog com a versão nova chega na main
```

Ele monta o pacote, confere se a versão já existe no npm (se existir, para sem erro) e publica com a procedência do repositório (`--provenance`). Acompanhe na aba **Actions** do GitHub.

Não há token guardado: o npm confia no workflow pelo **Trusted Publisher**, configurado uma vez em npmjs.com › `@joniguerini/lume` › Settings › Trusted Publisher › GitHub Actions:

- Organization or user: `JoniGuerini`
- Repository: `lume-design-system`
- Workflow filename: `publicar-npm.yml`
- Environment: (vazio)

Para conferir sem publicar: aba Actions › Publicar no npm › Run workflow, com **Ensaio** marcado (o padrão). Ele monta e mostra o conteúdo do pacote, e para antes de publicar.

## Passo a passo, sem o atalho

```bash
npm run build
npm run npm:build      # monta dist/npm/pacote/ (na primeira vez, baixa o TypeScript só para compilar o React)
npm login
npm publish dist/npm/pacote --access public
```

O npm pede a chave de segurança (2FA) de quem publica. A mesma versão nunca se publica duas vezes: para corrigir, suba a versão no changelog.

## Testes já feitos

17/11/2026, com a 1.9.0 instalada direto do npm: Vite + React 19 e TypeScript estrito (`tsc --noEmit` e `vite build`), Next.js 16 com página gerada no servidor, React 18.3 com todos os componentes no navegador em StrictMode, e `npx @joniguerini/lume add modal`. A primeira publicação levou uns 4 minutos para abrir ao público (antes, o npm mostra um marcador `0.0.0-stage` só para o dono).
