# CLAUDE.md

This repo is the personal GitHub Pages site of Marcel Cremer (`marcelcremer.github.io`).

## Brand

- All visual design (colors, typography) must follow [`STYLEGUIDE.md`](./STYLEGUIDE.md).
- The website uses the "Digital / Brand" system from the styleguide (fixed light theme, `#1A4D8F` primary, Montserrat). The "Presentation / Talk" system in the same file is for slide decks only — never apply it to the site.

## Deployment

- The site is deployed via GitHub Actions to the `gh-pages` branch (GitHub Pages source: "Deploy from a branch", branch `gh-pages`).
- Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes the repository root to `gh-pages`.
- Every pull request gets an automatic preview deployment via [pr-preview-action](https://github.com/rossjrw/pr-preview-action) (`.github/workflows/pr-preview.yml`), published under `gh-pages/pr-preview/pr-<number>/` and linked to `https://marcelcremer.github.io/pr-preview/pr-<number>/`. The preview is removed automatically when the PR closes.

## Workflow

- Work on a feature branch, never directly on `main`.
- Commit changes with clear, descriptive commit messages.
- Push the branch to `origin`.
- **Always** open a pull request into `main` at the end of the work (even for small changes) — no direct merge without a PR.
- Review the PR diff yourself once more before reporting it as done.
- Do not merge the PR automatically; that decision belongs to the repo owner.
