# Publicar o Lume no npm

O pacote é `@joniguerini/lume` (publicado desde a 1.9.0, em 17/11/2026). O nome fica num lugar só: a constante `NAME` no topo de `scripts/build-npm.mjs`; o README do pacote e o comando `npx` leem dali.

## Sozinho, pelo GitHub (o caminho normal)

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

## À mão (se o GitHub estiver fora)

```bash
npm run build
npm run npm:build      # monta dist/npm/pacote/ (na primeira vez, baixa o TypeScript só para compilar o React)
npm login
npm publish dist/npm/pacote --access public
```

O npm pede a chave de segurança (2FA) de quem publica. A mesma versão nunca se publica duas vezes: para corrigir, suba a versão no changelog.

## Testes já feitos

17/11/2026, com a 1.9.0 instalada direto do npm: Vite + React 19 e TypeScript estrito (`tsc --noEmit` e `vite build`), Next.js 16 com página gerada no servidor, React 18.3 com todos os componentes no navegador em StrictMode, e `npx @joniguerini/lume add modal`. A primeira publicação levou uns 4 minutos para abrir ao público (antes, o npm mostra um marcador `0.0.0-stage` só para o dono).
