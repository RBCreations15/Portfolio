# AGENTS.md

## Purpose and scope

This repository is a long-term creative portfolio website. Treat it as a carefully art-directed publishing system, not a disposable landing page. Every contribution should improve the site's clarity, longevity, accessibility, performance, and distinct point of view.

These instructions apply to the entire repository. If a more specific `AGENTS.md` is later added within a subdirectory, it may refine these rules for that subtree but must not weaken the accessibility, content-integrity, testing, or quality requirements defined here.

## Current state

The repository is intentionally framework-neutral and does not contain a generated website yet. Do not select a framework, initialize an application, add a CMS, or create pages unless the user asks. When a stack is selected, document the decision and prefer a small, stable toolchain suited to a content-led portfolio.

## Product and design philosophy

Build an editorial, modern, premium creative-studio experience. The work and the ideas behind it should lead; interface decoration should support them.

- Favor strong typography, disciplined grids, generous negative space, deliberate pacing, and art-directed case studies.
- Create hierarchy through scale, rhythm, contrast, alignment, and composition rather than excessive cards, pills, shadows, gradients, or ornamental UI.
- Avoid generic startup/SaaS patterns, interchangeable portfolio templates, dashboard aesthetics, gratuitous glassmorphism, and trend-driven effects without a narrative purpose.
- Use a restrained, intentional color system. Motion should feel composed and should clarify relationships or transitions, never delay access to content.
- Preserve room for variation between projects while maintaining a coherent site-wide system.
- Treat mobile layouts as their own compositions, not merely compressed desktop screens.
- Do not imitate another studio or artist too closely. References may guide principles, not produce a clone.

## Content integrity and placeholders

Never invent or imply real-world facts. This prohibition includes fake clients, brands, collaborators, testimonials, awards, press mentions, statistics, audience numbers, conversion figures, project outcomes, dates, roles, services, or business claims.

- Use only content supplied by the user or clearly present in repository source material.
- When required content is missing, use an unmistakable label such as `[Project title]`, `[Client name]`, `[Verified result]`, or `TODO(content): add approved biography`.
- Placeholder copy must be concise, obvious in the rendered experience, and easy to search for. Do not use realistic-looking fabricated prose to make a design appear complete.
- Generic layout filler may use neutral descriptions such as “Project summary pending.” Do not use lorem ipsum in production-facing work unless explicitly requested.
- Do not display a placeholder testimonial, metric, logo, client list, or case-study result, even with a disclaimer, unless the user explicitly asks for a clearly marked wireframe.
- Keep factual claims traceable to user-provided material. If a claim is ambiguous, flag it for verification rather than polishing it into certainty.
- Before release, search for `TODO(content)`, bracketed placeholders, lorem ipsum, sample links, and temporary assets. Report unresolved items.

## Architecture and file organization

Once implementation begins, use a predictable structure appropriate to the chosen framework. Prefer these conceptual boundaries, adapting names only where framework conventions require it:

```text
src/
  assets/        # Source-controlled visual assets used by the application
  components/    # Reusable UI, grouped by role or feature
  content/       # Structured, user-approved editorial content
  layouts/       # Page-level composition and shared shells
  lib/           # Framework-agnostic utilities and integrations
  pages/         # Routes or route entries
  styles/        # Tokens, foundations, and truly global styles
  types/         # Shared domain types when not colocated
public/          # Files served unchanged
docs/            # Durable architecture, content, and operating documentation
tests/           # Cross-cutting or end-to-end tests
```

- Follow the selected framework's standard route and asset conventions rather than forcing this exact tree.
- Colocate a component's tests, styles, stories, and small supporting files when that makes ownership clearer.
- Keep route files focused on data assembly, metadata, and composition. Move reusable behavior into components or library modules.
- Keep content separate from presentation. Case-study facts should live in typed structured content or an approved content source, not be duplicated across components.
- Avoid catch-all `utils`, `helpers`, or `common` dumping grounds. Name modules by domain and responsibility.
- Use consistent, descriptive names. Components and types use `PascalCase`; functions, variables, and non-component modules use `camelCase` unless the framework specifies otherwise; route names and public asset filenames use lowercase kebab-case.
- Do not commit generated build output, dependencies, secrets, local editor state, or unoptimized duplicate assets.

## Code standards

- Prefer TypeScript with strict checking when the chosen stack supports it. Avoid `any`; narrow unknown external data at boundaries.
- Write small, cohesive modules with explicit responsibilities and minimal hidden state.
- Prefer composition and plain data over inheritance, deep abstractions, or configuration-heavy component APIs.
- Keep functions pure when practical. Make side effects, network access, storage, and browser-only behavior easy to identify.
- Use semantic HTML before JavaScript or ARIA. Progressive enhancement is preferred for core navigation and content.
- Do not duplicate logic or markup merely to move quickly. Extract a reusable unit when a pattern is stable and genuinely repeated; do not abstract speculative future needs.
- Use design tokens for color, typography, spacing, radii, borders, layers, motion, and layout constraints. Do not scatter unexplained magic values.
- Keep global CSS limited to tokens, resets, typography foundations, and intentional global behaviors. Scope component styling by default.
- Follow the repository formatter, linter, and type checker once configured. Do not suppress rules without a short explanation and a concrete reason.
- Remove dead code, commented-out implementations, debug output, and abandoned assets before handing off work.
- Comments should explain intent, constraints, or non-obvious tradeoffs—not restate the code.

## Reusable components

- Establish a small set of primitives for layout, type, media, links/buttons, and accessible interactive behavior before producing many one-off variants.
- Components must have a clear purpose, a narrow API, sensible defaults, and documented variants. Prefer slots/children and composition to large collections of boolean props.
- Separate content models from visual components so projects can be rearranged or restyled without rewriting their facts.
- Reuse behavior as well as appearance. Focus management, keyboard interaction, responsive media, and motion preferences should be solved consistently.
- Do not make a component generic at the cost of semantic markup or art direction. A case-study composition may be bespoke while still using reliable primitives.
- Add or update tests and component documentation when introducing shared interactive primitives.

## Accessibility requirements

Accessibility is a definition-of-done requirement, not a later audit. Target WCAG 2.2 AA at minimum.

- Use landmarks, logical heading levels, lists, buttons, links, figures, captions, and other native elements correctly.
- Ensure all functionality works with a keyboard. Provide visible focus states and predictable focus order; manage focus for dialogs, menus, and route transitions when needed.
- Include a working skip link and a meaningful page title. Maintain clear navigation and current-page indication.
- Provide useful text alternatives for meaningful images and empty `alt` text for decorative images. Document nuanced art-direction and caption requirements alongside content.
- Do not convey meaning by color, position, sound, or motion alone. Meet AA contrast requirements in every theme and interaction state.
- Label controls programmatically. Error messages must identify the problem and recovery action and must be associated with the relevant field.
- Respect `prefers-reduced-motion`. No essential content may depend on animation, hover, autoplay, drag gestures, or a fine pointer.
- Maintain usable target sizes and adequate spacing. Support zoom to at least 200% without loss of content or function and reflow at narrow viewport widths.
- Avoid unnecessary ARIA. When custom widgets are unavoidable, follow established WAI-ARIA Authoring Practices and test them with keyboard and assistive technology.
- Test key journeys using automated checks plus manual keyboard review. Automated scores alone do not establish accessibility.

## Responsive design

- Start with resilient content flow and enhance layouts as space becomes available. Add breakpoints where composition breaks, not for named devices.
- Support narrow mobile viewports from 320 CSS pixels, common tablets, laptops, wide displays, zoomed layouts, and both portrait and landscape orientations.
- Prevent unintended horizontal scrolling. Long titles, URLs, captions, localization, and enlarged text must wrap or adapt safely.
- Use fluid type and spacing carefully with bounded values. Preserve readable line lengths and avoid type that becomes theatrical at the expense of comprehension.
- Use responsive images with correct intrinsic dimensions, `srcset`/`sizes` or framework equivalents, and intentional crops. Avoid loading desktop media on small screens when a materially smaller source is available.
- Inputs must not trigger unwanted mobile zoom, and hover effects must have touch and keyboard equivalents.
- Verify content order remains logical when grid areas or visual order change.

## Performance and media

Treat performance as part of the aesthetic: interaction and reading should feel immediate.

- Prefer static rendering and minimal client-side JavaScript for content-led pages. Hydrate only behavior that needs it.
- Set and monitor explicit performance budgets once the stack and hosting target are selected. As an initial quality target, aim for good Core Web Vitals at the 75th percentile: LCP within 2.5 s, INP within 200 ms, and CLS at or below 0.1.
- Optimize images before shipping. Use AVIF/WebP where appropriate, retain suitable fallbacks, specify width and height, lazy-load below-the-fold media, and never lazy-load the likely LCP image.
- Keep original archival media outside the production delivery path when practical. Name derivatives predictably and document unusual crops or compression choices.
- Subset and self-host fonts when licensing permits. Limit families, weights, and preload usage; provide robust fallbacks and use `font-display` intentionally.
- Avoid autoplay video with sound. Provide controls, captions/transcripts where applicable, posters, reduced-motion behavior, and efficient codecs/bitrates.
- Reserve space for asynchronously loaded content. Avoid layout shifts caused by fonts, embeds, consent tools, and media.
- Audit dependency cost before adding a package. Prefer platform APIs or small focused libraries; remove unused dependencies.
- Measure production builds on representative mobile conditions. Do not trade semantic content or accessibility for a perfect synthetic score.

## SEO, metadata, and resilience

- Give every indexable page a unique title and useful description based on approved content.
- Use canonical URLs, social preview metadata, favicons, sitemap, robots rules, and structured data only when their values are accurate.
- Use durable, human-readable URLs. Plan redirects before changing published paths.
- Ensure meaningful HTML is available without waiting for client-side JavaScript.
- Design useful empty, loading, error, offline, and not-found states where applicable. Never expose stack traces, secrets, or internal identifiers.
- Treat external embeds and analytics as optional enhancements. Consider privacy, consent, accessibility, resilience, and performance before adding them.

## Testing and verification

Every change should be verified in proportion to its risk. Once the toolchain exists, keep a small documented command set for formatting, linting, type checking, unit/component tests, end-to-end tests, accessibility checks, and production builds.

- Test behavior and user outcomes rather than private implementation details.
- Shared logic and interactive components require focused automated tests. Critical journeys require end-to-end coverage.
- Review key pages at multiple viewport sizes and with keyboard-only navigation and reduced motion enabled.
- Check for broken links, missing assets, console errors, hydration warnings, layout overflow, and metadata regressions.
- Visually inspect production output after changes involving typography, layout, responsive behavior, media, or animation.
- Do not claim a check passed unless it was actually run. Report commands executed, results, and any unverified areas in the handoff.
- Do not delete or weaken tests to make a change pass without documenting and resolving the underlying issue.

## Documentation expectations

- Keep `README.md` focused on setup, commands, environment variables, architecture overview, content workflow, and deployment once those details exist.
- Record consequential, hard-to-reverse technical decisions in short architecture decision records under `docs/decisions/`.
- Document component APIs and content schemas near their implementation. Include examples only when they clarify intended usage.
- Update documentation in the same change as behavior, commands, configuration, routes, schemas, or contributor expectations.
- Add an `.env.example` containing safe placeholder keys whenever environment variables are introduced. Never place secrets or real personal data in documentation, fixtures, screenshots, or commits.
- Document asset sources, licenses, font licenses, attribution requirements, and usage restrictions.
- Use `TODO(owner-or-area): action and reason` for temporary work. Link an issue when one exists; do not leave vague `TODO` or `FIXME` markers indefinitely.

## Git workflow

- Start work from an up-to-date default branch and use a short-lived, descriptive branch. For Codex-created branches, use the repository's configured `Portfolio Website/` prefix unless the user requests another convention.
- Keep commits focused and reviewable. Use imperative commit subjects that describe the outcome, for example `Add accessible project navigation`.
- Do not mix unrelated refactors, formatting sweeps, generated assets, or dependency upgrades into a feature commit.
- Inspect the working tree before editing. Preserve user changes and never discard, overwrite, reset, amend, force-push, or rebase someone else's work without explicit permission.
- Include relevant source, tests, documentation, migrations, and lockfile changes together. Commit the package-manager lockfile once a package manager is chosen; do not maintain multiple lockfiles.
- Review the diff and run applicable checks before committing. Pull requests should explain the intent, major decisions, verification performed, accessibility impact, performance impact, and any known follow-up work.
- Include screenshots or recordings for meaningful visual changes at representative desktop and mobile sizes, while avoiding private or fabricated content.
- Prefer small pull requests. Note breaking changes, content migrations, environment changes, and deployment steps clearly.
- Do not commit directly to the default branch, publish, deploy, push, open a pull request, or modify remote state unless the user asks.

## Dependencies, security, and privacy

- Add dependencies only when their maintenance, license, accessibility, bundle cost, and security posture are acceptable. Pin versions through the chosen lockfile.
- Validate and sanitize untrusted input at appropriate boundaries. Escape rendered content by default and review any raw HTML path carefully.
- Keep secrets server-side. Do not expose private API keys through client bundles, logs, source maps, or public environment variable prefixes.
- Minimize collection of personal data. Do not add analytics, tracking, cookies, contact-form storage, or third-party embeds without explicit approval and documented privacy implications.
- Use least-privilege credentials, secure headers, dependency audits, and a documented update process once hosting is configured.

## Definition of done

A change is complete only when:

- It matches the requested scope and the editorial design direction.
- Content is approved or unmistakably marked as placeholder; no facts have been invented.
- Semantics, keyboard access, focus, contrast, motion preferences, responsive behavior, and media alternatives have been considered and tested where relevant.
- Code is clear, typed where applicable, organized consistently, and reuses stable patterns without unnecessary abstraction.
- Applicable formatting, linting, type, test, accessibility, and production-build checks pass.
- Performance and dependency impact are reasonable and production media is optimized.
- Documentation and examples reflect the current behavior.
- The final handoff lists changed files, verification performed, unresolved placeholders, and any meaningful risks or next steps.

## Guidance for future agents

- Read this file and inspect the repository before proposing or making changes.
- Confirm the user's requested scope. Do not generate additional pages, copy, branding, or integrations just to make the project appear complete.
- Prefer existing patterns once they exist. If a new pattern is necessary, explain why and apply it consistently.
- Make the smallest coherent change that fully solves the request, then verify it.
- Ask for source material or use explicit placeholders when facts, imagery, brand assets, legal text, credentials, or creative direction are missing.
- Never represent a mockup, placeholder, synthetic image, or hypothetical result as real portfolio work.

