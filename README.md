# Creative Portfolio

A complete first-version portfolio for a multidisciplinary creative and emerging creative director. The site is intentionally designed as an editorial, image-led creative-studio experience. All missing facts, imagery, biography, contact details, credits, and results are visibly marked as placeholders.

## Technology

- [Astro](https://astro.build/) with static output
- TypeScript with Astro's strict configuration
- Tailwind CSS 4 through its lightweight Vite plugin
- Astro content collections for reusable Markdown project case studies
- CSS transitions and a small Intersection Observer enhancement instead of a heavy animation dependency
- GitHub Actions for GitHub Pages deployment

The site has no database, authentication, CMS, backend, analytics, or form endpoint.

## Local development

Use Node.js 22 or newer. The expected version is recorded in `.nvmrc`.

```bash
npm install
npm run dev
```

Astro will print the local address, normally `http://localhost:4321/`.

Available commands:

```bash
npm run dev      # Start the local development server
npm run check    # Run Astro and TypeScript validation
npm run build    # Validate and produce the static site in dist/
npm run check:links # Verify internal links in the generated static site
npm run preview  # Preview the completed production build locally
```

## Project structure

```text
.github/workflows/deploy.yml      GitHub Pages build and deployment
public/
  favicon.svg                     Temporary neutral favicon
  media/
    projects/                     Case-study media, grouped by project slug
    ugc/                          Approved UGC videos, posters, captions, stills
    photography/                  Approved photographs
    portraits/                    Approved personal portraits
    branding/logos/               Personal and approved project marks
    branding/icons/               Approved icon assets
    fonts/                        Licensed web font files
src/
  components/                     Reusable navigation, cards, buttons, media, sections
  content/projects/               One Markdown file per case study
  data/site.ts                    Global identity, contact details, and navigation
  data/services.ts                Reusable service information
  layouts/BaseLayout.astro        Shared document shell and SEO metadata
  lib/paths.ts                    Base-path-safe internal URL helper
  pages/                          Home, work, services, about, contact, 404, projects
  styles/global.css               Design tokens and global foundations
  content.config.ts               Typed project content schema
```

The repository-wide development rules and content-integrity policy live in `AGENTS.md`.

## Update global site information

Edit `src/data/site.ts` to replace:

- `[Your Name]`
- the positioning title and site description
- email address and Instagram handle
- location and availability
- social sharing image reference when one exists

Navigation is also maintained in this file. Keep the bracketed labels until approved values are available so unfinished content remains obvious.

## Change colors and typography

The design tokens are at the top of `src/styles/global.css` inside the Tailwind `@theme` block. The temporary system uses:

- `paper` and `paper-deep` for warm neutral backgrounds
- `ink` for primary text and dark surfaces
- `clay` and `clay-dark` for the accent
- `line` and `muted` for dividers and secondary text
- an editorial system-serif display stack and a neutral system-sans stack

Change tokens rather than replacing colors or fonts in individual components. If custom fonts are introduced, place licensed `.woff2` files in `public/media/fonts/`, add `@font-face` declarations to the global stylesheet, and update the theme variables. Confirm licensing and loading performance first.

## Add or edit a project

Each project is a Markdown file in `src/content/projects/`. Copy an existing entry, give it a unique lowercase kebab-case filename, and update its frontmatter. The filename becomes the project URL:

```text
src/content/projects/example-project.md
→ /projects/example-project/
```

The complete typed field list is in `src/content.config.ts`. Supported sections include:

- title, project/client, year, location, category, and services
- status, featured placement, ordering, and summary
- hero image and alternative text
- overview, challenge, creative approach, role, and deliverables
- process steps
- gallery images and captions
- video URLs or placeholders
- before and after imagery
- verified results
- credits

Optional sections disappear cleanly when their data is omitted or an array is empty. Never invent missing outcomes, roles, clients, dates, or credits. Leave a clear bracketed placeholder or remove the optional section.

To feature a project on the home page, set `featured: true`. Use `order` to control project order.

## Add images and videos

1. Add optimized, approved assets under `public/media/` using the organization described in `public/media/README.md`.
2. Reference a public asset from project frontmatter with a leading slash, for example:

   ```yaml
   heroImage: "/media/projects/example-project/hero.webp"
   heroAlt: "Concise description of the meaningful visual content"
   ```

3. For gallery images, add the `image` field to an existing gallery item.
4. Supply accurate alt text and captions. Decorative images use empty alt text in components, but portfolio imagery will usually be meaningful.

Prefer AVIF or WebP for photographs, include intrinsic dimensions when adding custom image components, and use compressed MP4/WebM for video. Do not add autoplay audio or heavy background video. Video should have a poster, controls, and captions or a transcript when speech or meaningful audio is present.

## Replace placeholder copy

Search the repository for these markers:

```bash
rg '\[Placeholder|\[Your|pending|coming soon|Coming soon' src public
```

Replace only with approved, accurate content. Pay particular attention to biography, project roles, credits, dates, location, deliverables, project outcomes, and contact details. The existing named project entries were supplied as titles only; they do not currently claim that any organization was a client.

Before publishing, confirm that no unapproved client names, testimonials, statistics, awards, press mentions, or results have been added.

## Connect the inquiry form later

The form in `src/pages/contact.astro` is an accessible interface only. It intentionally prevents submission and tells visitors that nothing is sent or stored.

Practical static-site options include Formspree, Basin, Formspark, or a similar approved provider. Before connecting one:

1. Review pricing, data handling, retention, spam protection, accessibility, and privacy terms.
2. Create the endpoint in the chosen service.
3. Add the real form `action` and `method="POST"` according to that provider's instructions.
4. Remove the preview-only submit script and notice.
5. Add success and failure states, spam mitigation, a privacy notice, and end-to-end testing.

Do not commit secret keys or insert a pretend endpoint.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is pushed, and it can also be started manually from GitHub Actions.

For a normal repository site such as `username.github.io/repository-name/`, the workflow automatically uses:

- `SITE_URL=https://username.github.io`
- `BASE_PATH=/repository-name`

All internal application links use `src/lib/paths.ts`, so they continue to work from that repository subpath.

On GitHub:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push or manually run the deployment workflow.

If the repository itself is named `username.github.io`, add an Actions repository variable named `BASE_PATH` with the value `/`.

Local development defaults to `/` and does not need environment variables. To reproduce a repository subpath locally, run the build with `BASE_PATH=/repository-name`.

## Add a custom domain later

1. Configure the domain with the DNS provider using GitHub Pages' current documentation.
2. Add a repository Actions variable named `SITE_URL` with the complete origin, for example `https://portfolio.example`.
3. Add a repository Actions variable named `BASE_PATH` with the value `/`.
4. Add `public/CNAME` containing only the final domain name.
5. Update the domain in GitHub's Pages settings and enable HTTPS.
6. Rebuild and check canonical URLs, social metadata, internal links, and the 404 page.

The default `https://example.com` value in `astro.config.mjs` is a reserved local-build placeholder, not a claim that the site is live there.

## Content and launch checklist

- Replace the name, biography, portrait, contact details, location, and availability.
- Confirm which named projects may be publicly shown and how each relationship should be described.
- Add approved project imagery, video, credits, dates, roles, and outcomes.
- Decide whether to retain, revise, or remove each service description and potential deliverable.
- Create and approve a social sharing image before adding `og:image`.
- Connect the form only after selecting a static-form provider and reviewing privacy requirements.
- Run `npm run build` and manually review desktop, tablet, mobile, keyboard navigation, reduced motion, links, and form states.
