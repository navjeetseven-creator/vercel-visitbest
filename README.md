# VisitBest static migration

This repository is a static, SEO-friendly export of VisitBest. It contains the published WordPress articles, pages, business-directory records, taxonomies, locally mirrored uploads, and the landing-page list supplied with the migration request. The export currently renders 30 live posts, 8 WordPress pages, 712 directory profiles, 45 refreshed CSV-only routes, and 1,033 HTML routes in total.

## Deploy on Vercel

1. Create a GitHub repository and upload this project at the repository root.
2. Import the repository in Vercel.
3. Vercel will run `npm run build` and publish the `dist` directory automatically.
4. Add `visitbest.in` and `www.visitbest.in` in the Vercel project domains.
5. After checking the preview deployment, update DNS to Vercel.

No database, PHP runtime, WordPress installation, or environment variables are required.

## Local use

```bash
npm run build
npm run validate
npm run dev
```

Then open `http://localhost:4173`.

`npm run validate` checks every generated page for metadata, a usable heading structure, local asset/route references, all 174 supplied CSV routes, the sitemap, and the 404 page.

## Content updates

The original public WordPress API export is stored in `content/source`. Update the JSON files and run `npm run build` to regenerate every route, sitemap, archive page, search index, and feed.

The newsletter controls remain marked “Coming soon” because the current website does not connect them to a mailing service. Same-domain WordPress uploads are mirrored in `public/assets/mirror`; the CSV-only pages use either a relevant mirrored image or the self-contained `public/assets/editorial/editorial-fallback.svg`. The source map and attribution notes are in `content/editorial-images.json`. Broken placeholder links, archived image dependencies, and unknown internal links are removed or routed to site search during the build.

The article template adds a responsive table of contents, scroll-aware active-section highlighting, a replacement VisitBest Editorial Team bio, source notes, related guides, accessible hover/focus states, and client-side search/filter behavior without a database or WordPress runtime.
