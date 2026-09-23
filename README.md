# fernandohuamancaja.com

Personal site of Fernando Huamancaja: cloud and AI integration engineer at CapTech.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com), deployed as a static site on Netlify.

## Develop

Requires Node.js 22.12 or newer (see `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type-check .astro files and content schemas
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

## Editing content

All profile content lives in YAML under `src/content/` and is validated at build time by the
schemas in `src/content.config.ts`. A typo in a field name or a missing required value fails the
build instead of silently rendering nothing.

| File | Renders |
| --- | --- |
| `src/data/site.ts` | Name, role, links, hero copy, about paragraphs, navigation |
| `src/content/highlights.yaml` | "What I do now" cards in the About section |
| `src/content/experience.yaml` | Experience timeline, one entry per company with one or more positions |
| `src/content/projects.yaml` | Selected work (`featured: true` renders the problem / approach / outcome case study) and the "More projects" grid |
| `src/content/skills.yaml` | Skill groups with logos or built-in glyphs and tag chips |
| `src/content/certifications.yaml` | Certifications, awards and education |

Logos and badges are plain files under `public/images/`. Line icons referenced by `glyph:` or
`icon:` names come from `src/components/Icon.astro`.

## Structure

```
src/
  components/   one Astro component per section, plus Header, Footer, Icon
  content/      YAML content collections
  data/site.ts  site-wide constants
  layouts/      Base.astro: <head>, theme bootstrap, header and footer
  pages/        index.astro and 404.astro
  styles/       global.css: Tailwind import, theme tokens, shared component classes
public/         static assets served as-is (favicon, logos, og image, robots.txt)
```

Dark mode follows the visitor's system preference and can be toggled from the header; the choice
is remembered in `localStorage`.

## Analytics

Analytics are off by default. To enable Google Analytics 4, set `PUBLIC_GA_MEASUREMENT_ID` to your
`G-XXXXXXXXXX` measurement ID (locally in a `.env` file, in production under Netlify site
environment variables). The tag is only rendered when the variable is present.

## Deploy

Netlify builds from `netlify.toml` (`npm run build`, publish `dist/`, Node 22). The GitHub
Actions workflow in `.github/workflows/ci.yml` runs `astro check` and a production build on every
pull request and on pushes to `master`.
