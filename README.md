# BG Sports Enterprises Inc. — bgseinc.com

Modern rebuild of [bgseinc.com](https://bgseinc.com), the site of BG Sports Enterprises Inc. (BGSE), an international sports branding agency founded in 2007 by Brittany Gilman.

Built with **Vite + React 19 + TypeScript + Tailwind CSS v4 + React Router 7**. No backend: it is a static single-page app.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # serve dist/ locally
npm run lint
```

## Where things live

| Path | What |
|---|---|
| `src/data/site.ts` | Name, tagline, nav, social links, contact email, stats, arenas, pillars |
| `src/data/services.ts` | The 12 services (cards + detail-page copy, pulled from the old site) |
| `src/data/posts.ts` | Journal/blog posts as structured blocks, plus the 2013–2020 archive list |
| `src/data/portfolio.ts` | Work gallery, "moments" strip, international events |
| `src/data/people.ts` | Testimonials, team, client list |
| `src/data/videos.ts` | YouTube video IDs from the BGSE channel |
| `src/pages/*` | Home, Services, ServiceDetail, Portfolio, About, Blog, BlogPost, Contact, NotFound |
| `src/components/*` | Header, Footer, Reveal (scroll animation), YouTube (click-to-load embed), Lightbox, PostCard, UI primitives |
| `public/images/**` | Optimized WebP assets (≤1600px) converted from the old site |
| `raw-assets/` | Original downloads (git-ignored) |

Brand tokens are defined in `src/index.css` under `@theme`: red `#f80000` (sampled from the logo), ink `#0a0a0a`, display font Barlow Condensed, body font Inter.

## Contact form

`src/data/site.ts` has `contactEmail` and an optional `formEndpoint` (read from `VITE_CONTACT_ENDPOINT`). With an endpoint set (Formspree, Basin, etc.) the form POSTs JSON; without one it opens the visitor's email client with the message pre-filled.

Create a `.env` with `VITE_CONTACT_ENDPOINT=https://...` to enable the hosted form.

## Deploy

Static output in `dist/`. SPA rewrites are included for Vercel (`vercel.json`) and Netlify (`public/_redirects`). `public/sitemap.xml` and `robots.txt` are included; regenerate the sitemap when adding services or posts.
