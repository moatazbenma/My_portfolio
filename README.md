# El Mouataz Benmanssour — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript and Tailwind CSS v4. It implements the approved Claude Design prototype (`Portfolio.dc.html`).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Structure

```
src/
  app/
    layout.tsx            fonts (Geist, Geist Mono), metadata, viewport
    page.tsx              section order
    globals.css           design tokens (colors, breakpoint) and base styles
    icon.svg              favicon
    opengraph-image.jpg   social preview image (+ .alt.txt)
  assets/                 hero photo and project screenshots (optimized by next/image)
  components/
    site-header.tsx       fixed nav + mobile menu (below 820px)
    button-link.tsx       solid / outline / accent link buttons
    ui.tsx                eyebrow, section heading, tags, detail rows, placeholders
    reveal-on-scroll.tsx  fade-in on scroll (disabled for reduced motion)
    sections/             hero, work, experience, awards, skills, education, contact
  lib/content.ts          all copy, links and data
```

## Updating content

Edit `src/lib/content.ts`. Remaining placeholders (shown in `[ brackets ]` on the page):

| What | Where |
| --- | --- |
| Mangrove Guardian impact | `featuredProject.details` → `IMPACT` |

The CV is served from `public/cv.pdf`; replace that file to update it.

## Deploy

Set `SITE_URL` (e.g. `https://yourdomain.com`) in the hosting environment so canonical and Open Graph URLs are absolute. On Vercel, the production domain is picked up automatically.
