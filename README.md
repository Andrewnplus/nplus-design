# nplus-design

Visual preview surface for [`@nplus/shared`](https://github.com/Andrewnplus/nplus-shared) — the design contract and primitives used by [`nplus.page`](https://nplus.page) and [`nplus.faith`](https://nplus.faith).

Render every shared token and component in both themes, side-by-side, on one site.

## Why this exists

- **Visual review** for changes to the shared package before consumer sites pull them in.
- **Documentation** of the token / component contract for future agents (and future Andrew).
- **One place** to see "does this still feel like the N+ family?"

## Local development

```bash
nvm use 22
npm install
npm run dev   # http://localhost:4321
npm run build
```

## Pages

- `/` — overview
- `/tokens` — surface, brand, brand-alt scales + typography, both themes
- `/components` — `ReadingProgress`, `SubscribeBand` (band/inline/compact), both themes

## Adding a new primitive

1. Add the component to `@nplus/shared/components/Foo.astro` and export it from `nplus-shared/package.json`.
2. Push & bump the shared dep here: `npm update @nplus/shared`.
3. Add a section to `src/pages/components.astro` rendering it inside both `.theme-nplus-page` and `.theme-nplus-faith` wrappers.

## Deploy

Hosted at <https://nplus.page/nplus-design/> — GitHub Pages serves this project repo under the custom domain of `Andrewnplus/andrewnplus.github.io`. Every push to `main` deploys via the shared Astro → GitHub Pages workflow; see `.github/workflows/deploy.yml`.
