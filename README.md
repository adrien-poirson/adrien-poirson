# adrien-poirson.dev

My personal website, served at [adrien-poirson.dev](https://adrien-poirson.dev). Built with [Astro](https://astro.build) and Tailwind CSS, hosted on Netlify.

The look: Instrument Serif for headings with one italic rust word, Instrument Sans for text, JetBrains Mono for small labels; warm paper and ink with a light and dark theme; flat surfaces and solid one-pixel rules, no cards or gradients. Tokens and utilities live in `src/styles/global.css`.

## Development

Requires the Node version in `.nvmrc` (`nvm use`).

```sh
yarn install
yarn dev         # http://localhost:4321
yarn build       # static site in dist/
yarn preview     # serve dist/
yarn check       # type-check the Astro files
yarn resume      # build, then print /resume/ to public/ResumeAdrienPoirson.pdf (needs Google Chrome)
```

The resume lives in `src/data/resume.ts`; `/resume/` renders it and the `resume` script prints that page with headless Chrome. Edit the data, run the script, commit the PDF.

## Structure

```text
src/
├── components/   Header, Footer, Button, Logo, Principles, Cta, Social
├── data/         site facts, experience and projects, skills, the resume
├── images/       screenshots, resized at build time by astro:assets
├── layouts/      Layout.astro (page shell, SEO meta, theme script)
├── pages/        one file per route: index, work, about, contact, 404
└── styles/       global.css (Tailwind + the design tokens and utilities)
scripts/          resume-pdf.mjs
public/           resume PDF, favicon, robots.txt
```

## Deployment

Netlify builds `main` with `yarn build` and publishes `dist/` (see `netlify.toml`). The contact form uses Netlify Forms: the form is static HTML with `data-netlify="true"`, submissions arrive in the Netlify dashboard, and the page's script sends it in place and shows the thank-you panel.
