import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pages as calculatorPages, renderCalculatorBody, calculatorSchema, css as calculatorCss, client as calculatorClient } from "./calculators.mjs";
import {
  polls as bbPolls,
  contestants as bbContestants,
  renderBiggBossPollPage,
  renderBiggBossContestantsPage,
  renderBiggBossRulesPage,
  biggBossSchema,
  css as bbCss,
  clientScript as bbClient,
} from "./bigg-boss.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(root, "content", "source");
const publicDir = path.join(root, "public");
const distDir = path.join(root, "dist");
const origin = "https://visitbest.in";
const buildDate = "2026-09-09";

async function readJson(file, fallback = null) {
  try {
    return JSON.parse(await fs.readFile(path.join(root, file), "utf8"));
  } catch {
    return fallback;
  }
}

function decodeEntities(value = "") {
  return String(value)
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;|&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    // Preserve the source wording while fixing the recurring typo found in
    // the imported EPC image/title metadata.
    .replace(/\bInida\b/gi, "India")
    .replace(/\[link\s+removed\]/gi, "the organisation's public channels");
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function stripHtml(value = "") {
  return decodeEntities(String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(value, length = 156) {
  const text = stripHtml(value);
  if (text.length <= length) return text;
  return `${text.slice(0, length - 1).replace(/\s+\S*$/, "")}…`;
}

function slugify(value) {
  return stripHtml(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "section";
}

function labelFromSlug(value) {
  return String(value || "")
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ") || "VisitBest";
}

function routePath(value) {
  let text = String(value || "/").trim();
  if (!text.startsWith("/")) text = `/${text}`;
  text = text.split("?")[0].split("#")[0];
  if (text !== "/") text = `/${text.replace(/^\/+|\/+$/g, "")}/`;
  return text;
}

function urlFor(slug, prefix = "") {
  return routePath(`${prefix}/${slug}`);
}

function humanDate(value) {
  if (!value) return "Updated September 9, 2026";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Updated September 9, 2026";
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(date);
}

function wordCount(value) {
  const text = stripHtml(value);
  return text ? text.split(/\s+/).length : 0;
}

function readingTime(value) {
  return Math.max(1, Math.ceil(wordCount(value) / 220));
}

function jsonLd(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

const [posts, pages, business, media, categories, tags, businessCategories, businessLocations, legacyPages, assetQueue, editorialImages] = await Promise.all([
  readJson("content/source/posts.json", []),
  readJson("content/source/pages.json", []),
  readJson("content/source/business.json", []),
  readJson("content/source/media.json", []),
  readJson("content/source/categories.json", []),
  readJson("content/source/tags.json", []),
  readJson("content/source/business-categories.json", []),
  readJson("content/source/business-locations.json", []),
  readJson("content/legacy-pages.json", []),
  readJson("content/source/asset-queue.json", []),
  readJson("content/editorial-images.json", []),
]);

const mediaById = new Map(media.map((item) => [String(item.id), item]));
const assetByUrl = new Map(assetQueue.map((item) => [item.url, item.local]));
const editorialByCluster = new Map((editorialImages || []).map((item) => [item.cluster, item]));
// The original WordPress uploads are mirrored locally. A small number of the
// CSV-only routes did not have a source image, so they use a self-contained
// editorial illustration instead of a hot-linked third-party asset.
const editorialLocalOverrides = new Map([
  ["beauty", "/assets/mirror/7cd90b0490f4-Best-Perfume-in-India.png"],
  ["fitness", "/assets/mirror/fa49fb4e7374-fitness.png"],
  ["watches", "/assets/mirror/d5c1ebc4707e-Best-Watch-Brands-in-India.jpg"],
  ["construction", "/assets/mirror/4e7d0bd84079-Best-Construction-Companies-in-Gurgaon.jpg"],
  ["business", "/assets/mirror/e3de23737a7e-Big-4-Companies-In-India.png"],
  ["food", "/assets/mirror/4e7002bd7e09-Best-Coffee-Brands-in-India.png"],
  ["astrology", "/assets/mirror/aae014840142-Best-Astrologer-In-Bangalore.png"],
  ["spirits", "/assets/mirror/a234a49c5447-best-whiskey-brands-in-india.jpg"],
]);
const editorialFallback = "/assets/editorial/editorial-fallback.svg";
const postBySlug = new Map(posts.map((item) => [item.slug, item]));
const pageBySlug = new Map(pages.map((item) => [item.slug, item]));
const businessBySlug = new Map(business.map((item) => [item.slug, item]));
const legacyBySlug = new Map(legacyPages.map((item) => [item.slug, item]));
const categoryById = new Map(categories.map((item) => [String(item.id), item]));
const businessCategoryById = new Map(businessCategories.map((item) => [String(item.id), item]));
const businessLocationById = new Map(businessLocations.map((item) => [String(item.id), item]));

const routeSet = new Set(["/"]);
const canonicalRoutes = new Set(["/"]);
const routeMeta = new Map();

function addRoute(route, meta = {}) {
  const normalized = routePath(route);
  routeSet.add(normalized);
  if (!meta.alias) canonicalRoutes.add(normalized);
  if (meta.title) routeMeta.set(normalized, meta);
}

for (const item of posts) addRoute(urlFor(item.slug), { title: decodeEntities(item.title?.rendered), type: "article" });
for (const item of pages) addRoute(urlFor(item.slug), { title: decodeEntities(item.title?.rendered), type: "page" });
for (const item of business) addRoute(urlFor(item.slug, "/business"), { title: decodeEntities(item.title?.rendered), type: "business" });
for (const item of legacyPages) addRoute(urlFor(item.slug), { title: item.title, type: item.type === "policy" ? "page" : "article" });
for (const item of categories) addRoute(urlFor(item.slug, "/category"), { title: item.name, type: "archive" });
for (const item of tags) addRoute(urlFor(item.slug, "/tag"), { title: item.name, type: "archive" });
for (const item of businessCategories) addRoute(urlFor(item.slug, "/business-category"), { title: item.name, type: "archive" });
for (const item of businessLocations) addRoute(urlFor(item.slug, "/business-location"), { title: item.name, type: "archive" });
for (const item of calculatorPages) addRoute(urlFor(item.slug), { title: item.title, type: "calculator" });
for (const item of bbPolls) addRoute(urlFor(item.slug), { title: item.title, type: "poll" });
addRoute(urlFor("bigg-boss-20-contestants"), { title: "Bigg Boss 20 Contestants List with Photos, Age, Bio & Missed Call Numbers", type: "page" });
addRoute(urlFor("bigg-boss-20-voting-rules"), { title: "Bigg Boss 20 Voting Rules, Timings & Missed Call Numbers", type: "page" });

for (let page = 1; page <= 72; page += 1) addRoute(page === 1 ? "/business/" : `/business/page/${page}/`, { title: `Business directory page ${page}`, type: "archive" });
for (const item of categories) {
  const matching = posts.filter((post) => post.categories?.includes(item.id)).length + legacyPages.filter((post) => post.category?.toLowerCase() === item.name.toLowerCase()).length;
  const pagesNeeded = Math.max(1, Math.ceil(matching / 12));
  for (let page = 2; page <= pagesNeeded; page += 1) addRoute(`/category/${item.slug}/page/${page}/`, { title: `${item.name} page ${page}`, type: "archive" });
}

const landingCsv = await fs.readFile(path.join(sourceDir, "landing-pages.csv"), "utf8").catch(() => "");
for (const line of landingCsv.split(/\r?\n/).slice(10)) {
  const first = line.split(",")[0]?.trim();
  if (first?.startsWith("/")) addRoute(first, { alias: !canonicalRoutes.has(routePath(first)), type: "legacy-route" });
}
addRoute("/author/admin/", { alias: true, type: "legacy-route" });
addRoute("/search/", { title: "Search VisitBest", type: "page" });

const assetFileExists = new Map();
async function hasAsset(local) {
  if (!local) return false;
  if (!assetFileExists.has(local)) {
    assetFileExists.set(local, await fs.stat(path.join(publicDir, local.replace(/^\//, ""))).then(() => true).catch(() => false));
  }
  return assetFileExists.get(local);
}

function assetForUrl(value) {
  if (!value) return null;
  const archivedSource = decodeEntities(value).match(/https?:\/\/(?:www\.)?visitbest\.in\/wp-content\/uploads\/[^\s"'<>\)]+/i)?.[0];
  if (archivedSource && archivedSource !== value) return assetForUrl(archivedSource);
  let absolute;
  try { absolute = new URL(decodeEntities(value), origin).href; } catch { return null; }
  const normalizedAbsolute = absolute.replace("https://www.visitbest.in/", "https://visitbest.in/");
  const exact = assetByUrl.get(absolute) || assetByUrl.get(normalizedAbsolute);
  if (exact) return exact;
  const noQuery = normalizedAbsolute.split("?")[0];
  for (const [url, local] of assetByUrl) if (url.replace("https://www.visitbest.in/", "https://visitbest.in/").split("?")[0] === noQuery) return local;
  return null;
}

function sameOriginPath(value) {
  try {
    const url = new URL(value, origin);
    if (!["visitbest.in", "www.visitbest.in"].includes(url.hostname)) return null;
    return `${routePath(url.pathname)}${url.search}${url.hash}`;
  } catch { return null; }
}

function internalLink(value, label = "") {
  const raw = decodeEntities(value || "").trim();
  if (!raw || raw === "#") return null;
  // WordPress occasionally preserved placeholder URLs such as
  // `https://[link removed]`. Drop those anchors during migration so they
  // cannot become broken links in the static export.
  if (/^https?:\/\/\s*(?:\[[^\]]+\]|$)/i.test(raw) || /\[link\s+removed\]/i.test(raw) || /^https?:\/\/web\.archive\.org\//i.test(raw)) return null;
  if (raw.startsWith("#")) return raw;
  const pathValue = sameOriginPath(raw);
  if (!pathValue) return raw;
  const base = routePath(pathValue.split("?")[0].split("#")[0]);
  if (base === "/wp-json/" || base.startsWith("/wp-admin/")) return "/search/";
  if (routeSet.has(base)) return pathValue;
  const cleanLabel = stripHtml(label);
  const query = cleanLabel || base.split("/").filter(Boolean).join(" ");
  return `/search/?q=${encodeURIComponent(query.slice(0, 80))}`;
}

function localizeHtml(value = "") {
  let html = String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, "")
    .replace(/<form[\s\S]*?<\/form>/gi, "")
    .replace(/<!--([\s\S]*?)-->/g, "")
    .replace(/\[link\s+removed\]/gi, "the organisation's public channels")
    .replace(/\bInida\b/gi, "India");

  html = html.replace(/\s+(?:srcset|sizes|fetchpriority)=(['"])[\s\S]*?\1/gi, "");
  html = html.replace(/\s+(?:data-src|data-lazy-src)=(['"])([^'"]+)\1/gi, " src=$1$2$1");
  html = html.replace(/\b(src|href)=(['"])([^'"]*)\2/gi, (match, attribute, quote, value) => {
    const local = attribute.toLowerCase() === "src" ? assetForUrl(value) : null;
    if (local) return `src=${quote}${local}${quote}`;
    if (attribute.toLowerCase() === "src") {
      // Archived image URLs are not a reliable production dependency. The
      // matching WordPress uploads are mirrored where available; otherwise
      // use the local illustration so the page never shows a broken image.
      if (/web\.archive\.org/i.test(value)) return `src=${quote}${editorialFallback}${quote}`;
      return `src=${quote}${value}${quote}`;
    }
    const rewritten = internalLink(value);
    return rewritten ? `href=${quote}${rewritten}${quote}` : match;
  });
  html = html.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (match, attrs, body) => {
    const hrefMatch = attrs.match(/href=(['"])([^'"]*)\1/i);
    if (!hrefMatch) return body;
    const rewritten = internalLink(hrefMatch[2], body);
    if (!rewritten) return body;
    let nextAttrs = attrs.replace(hrefMatch[0], `href=${hrefMatch[1]}${rewritten}${hrefMatch[1]}`);
    if (/^https?:\/\//i.test(rewritten) && !/\brel=/i.test(nextAttrs)) nextAttrs += ' rel="nofollow noopener" target="_blank"';
    return `<a${nextAttrs}>${body}</a>`;
  });
  html = html.replace(/<h1\b/gi, "<h2");
  html = html.replace(/<\/h1>/gi, "</h2>");
  html = html.replace(/<table\b[\s\S]*?<\/table>/gi, (table) => `<div class="table-scroll">${table}</div>`);
  html = html.replace(/<img\b([^>]*)>/gi, (match, attrs) => {
    let next = attrs;
    if (!/\bloading=/i.test(next)) next += ' loading="lazy"';
    if (!/\bdecoding=/i.test(next)) next += ' decoding="async"';
    return `<img${next}>`;
  });
  return html.replace(/\s{2,}/g, " ").trim();
}

function addHeadingIds(html) {
  const headings = [];
  const used = new Set();
  const output = html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, level, attrs, body) => {
    const existing = attrs.match(/\bid=(['"])([^'"]+)\1/i)?.[2];
    let id = existing || slugify(body);
    let base = id;
    let index = 2;
    while (used.has(id)) id = `${base}-${index++}`;
    used.add(id);
    const nextAttrs = existing ? attrs : `${attrs} id="${id}"`;
    headings.push({ id, level: Number(level), text: stripHtml(body) });
    return `<h${level}${nextAttrs}>${body}</h${level}>`;
  });
  return { html: output, headings };
}

function itemImage(item) {
  const featured = item?.featured_media ? mediaById.get(String(item.featured_media)) : null;
  const candidates = [featured?.source_url];
  const body = `${item?.content?.rendered || ""} ${item?.excerpt?.rendered || ""}`;
  for (const match of body.matchAll(/(?:src|data-src)=["']([^"']+)["']/gi)) candidates.push(match[1]);
  for (const candidate of candidates) {
    const local = assetForUrl(candidate);
    if (local) return { src: local, alt: decodeEntities(featured?.alt_text || stripHtml(item?.title?.rendered) || "VisitBest guide image") };
  }
  return null;
}

function editorialImage(cluster) {
  const image = editorialByCluster.get(cluster);
  if (!image) return null;
  const src = editorialLocalOverrides.get(cluster) || editorialFallback;
  const mirrored = src !== editorialFallback;
  return {
    src,
    alt: image.alt || "VisitBest editorial image",
    credit: mirrored ? "VisitBest media mirror" : "VisitBest editorial illustration",
    sourcePage: mirrored ? null : null,
    license: mirrored ? "Source image mirrored from the public WordPress export" : "Original SVG",
  };
}

function taxonomyLabel(item, type = "category") {
  const ids = type === "business_category" ? item?.business_category : type === "business_location" ? item?.business_location : item?.categories;
  const map = type === "business_category" ? businessCategoryById : type === "business_location" ? businessLocationById : categoryById;
  return (ids || []).map((id) => map.get(String(id))?.name).filter(Boolean);
}

function taxonomyTerms(item, type = "category") {
  const ids = type === "business_category" ? item?.business_category : type === "business_location" ? item?.business_location : item?.categories;
  const map = type === "business_category" ? businessCategoryById : type === "business_location" ? businessLocationById : categoryById;
  return (ids || []).map((id) => map.get(String(id))).filter(Boolean);
}

function relatedEntries(currentSlug, categoryName = "") {
  const live = posts
    .filter((item) => item.slug !== currentSlug)
    .map((item) => ({ slug: item.slug, title: decodeEntities(item.title?.rendered), summary: truncate(item.excerpt?.rendered || item.content?.rendered), date: item.date, href: urlFor(item.slug), image: itemImage(item), category: taxonomyLabel(item)[0] || "Guide" }));
  const legacy = legacyPages
    .filter((item) => item.slug !== currentSlug)
    .map((item) => ({ slug: item.slug, title: item.title, summary: item.summary, date: buildDate, href: urlFor(item.slug), image: editorialImage(item.imageCluster), category: item.category }));
  return [...live, ...legacy]
    .sort((a, b) => (a.category === categoryName ? -1 : 0) - (b.category === categoryName ? -1 : 0))
    .slice(0, 3);
}

function renderHeader(currentPath = "") {
  const links = [
    ["/", "Home"],
    ["/bigg-boss-20-guide/", "Bigg Boss 20"],
    ["/bigg-boss-20-voting/", "BB20 Voting"],
    ["/bigg-boss-20-web-stories/", "Web Stories"],
    ["/category/technology/", "Technology"],
    ["/category/entertainment/", "Entertainment"],
    ["/business/", "All Businesses"],
  ];
  return `<a class="skip-link" href="#content">Skip to content</a>
  <header class="site-header"><div class="header-inner container">
    <a class="brand" href="/"><strong>Visit-Best</strong><span>Explore best in India</span></a>
    <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="primary-nav">Menu</button>
    <nav class="primary-nav" id="primary-nav" data-primary-nav aria-label="Primary navigation">${links.map(([href, label]) => `<a href="${href}"${routePath(currentPath) === href ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</nav>
    <form class="header-search" action="/search/" method="get"><input name="q" type="search" placeholder="Search guides…" aria-label="Search guides"><button class="button button-primary" type="submit">Search</button></form>
  </div></header>`;
}

function renderFooter() {
  return `<footer class="site-footer"><div class="container footer-grid">
    <div>
      <h2>Visit-Best</h2>
      <p>Clear, practical guides on brands, products, companies, entertainment, culture, and everyday decisions across India and beyond.</p>
      <p style="margin-top:.85rem;font-size:.84rem;"><a href="/about/">About VisitBest</a> · <a href="/contact-us/">Contact Us</a> · <a href="/privacy-policy/">Privacy Policy</a></p>
    </div>
    <div>
      <h2>Bigg Boss 20</h2>
      <ul class="footer-links">
        <li><a href="/bigg-boss-20-guide/">Season 20 Guide</a></li>
        <li><a href="/bigg-boss-20-voting/">Live Fan Polls &amp; Voting</a></li>
        <li><a href="/bigg-boss-20-contestants/">Contestants Directory</a></li>
        <li><a href="/bigg-boss-20-web-stories/">Visual Web Stories</a></li>
        <li><a href="/bigg-boss-20-where-to-watch/">Where to Watch</a></li>
        <li><a href="/bigg-boss-20-episode-guide/">Episode Guide</a></li>
        <li><a href="/bigg-boss-20-nominations-explained/">Nominations Explained</a></li>
      </ul>
    </div>
    <div>
      <h2>Categories</h2>
      <ul class="footer-links">
        <li><a href="/category/technology/">Technology</a></li>
        <li><a href="/category/entertainment/">Entertainment</a></li>
        <li><a href="/category/brands/">Brands</a></li>
        <li><a href="/category/business/">Business</a></li>
        <li><a href="/category/actress/">Celebrity &amp; Cinema</a></li>
        <li><a href="/category/corporates/">Corporates</a></li>
        <li><a href="/category/travel/">Travel &amp; Lifestyle</a></li>
      </ul>
    </div>
    <div>
      <h2>Explore &amp; Contact</h2>
      <ul class="footer-links">
        <li><a href="/business/">Business Directory (700+)</a></li>
        <li><a href="/cgpa-to-percentage-calculator/">CGPA to % Calculator</a></li>
        <li><a href="/search/">Search All Guides</a></li>
        <li><a href="/assets/bb20-new/image-credits.html">Image Credits</a></li>
        <li><a href="mailto:visitbest10@gmail.com">visitbest10@gmail.com</a></li>
      </ul>
    </div>
  </div><div class="container footer-bottom"><span>© 2026 Visit-Best. All rights reserved.</span><span>Independent editorial guides &amp; fan opinions. Not affiliated with Bigg Boss broadcasters or voting platforms.</span></div></footer><button class="back-top" type="button" data-back-top aria-label="Back to top">↑</button>`;
}

function renderPage({ title, description, canonical = "/", body, currentPath = "", schema = null }) {
  const canonicalUrl = new URL(routePath(canonical), origin).href;
  const schemaTag = schema ? `<script type="application/ld+json">${jsonLd(schema)}</script>` : "";
  const googleTag = `<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-SZXR1R5PP7"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-SZXR1R5PP7');</script>`;
  const adsenseTag = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6008816938247526" crossorigin="anonymous"></script>`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${googleTag}${adsenseTag}<title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(truncate(description, 160))}"><link rel="canonical" href="${canonicalUrl}"><meta name="robots" content="index,follow"><meta property="og:type" content="website"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(truncate(description, 160))}"><meta name="twitter:card" content="summary"><link rel="stylesheet" href="/site.css">${schemaTag}</head><body>${renderHeader(currentPath)}<main id="content">${body}</main>${renderFooter()}<script src="/site.js" defer></script></body></html>`;
}

function breadcrumbs(items) {
  return `<nav class="breadcrumbs" aria-label="Breadcrumbs"><a href="/">Home</a>${items.map((item) => `<span class="sep">/</span>${item.href ? `<a href="${item.href}">${escapeHtml(item.label)}</a>` : `<span>${escapeHtml(item.label)}</span>`}`).join("")}</nav>`;
}

function renderToc(headings) {
  if (!headings.length) return `<aside class="toc-card"><h2>In this guide</h2><p class="toc-empty">Sections will appear here as this guide grows.</p></aside>`;
  return `<aside class="toc-card"><h2>In this guide</h2><nav aria-label="Table of contents">${headings.map((heading) => `<a href="#${heading.id}" data-level="${heading.level}">${escapeHtml(heading.text)}</a>`).join("")}</nav></aside>`;
}

function renderAuthor() {
  return `<div class="author-box"><div class="author-mark" aria-hidden="true">VB</div><div><strong>VisitBest Editorial Team</strong><p>We research public sources, compare practical options, and edit guides for clarity. We update time-sensitive details when reliable information changes and flag claims that need verification.</p></div></div>`;
}

function renderRelated(items) {
  if (!items.length) return "";
  return `<section class="related"><h2>Keep exploring</h2><div class="card-grid">${items.map((item) => renderCard(item)).join("")}</div></section>`;
}

function renderCard(item) {
  const media = item.image ? `<div class="card-media"><img src="${item.image.src}" alt="${escapeHtml(item.image.alt || item.title)}" loading="lazy" decoding="async"></div>` : "";
  const directory = item.isBusiness || String(item.href || "").startsWith("/business/");
  return `<article class="card${directory ? " directory-card" : ""}"${directory ? " data-directory-card" : ""}><a href="${item.href}">${media}<div class="card-body"><div class="card-meta"><span class="tag">${escapeHtml(item.category || "Guide")}</span>${item.date ? `<span>${escapeHtml(humanDate(item.date))}</span>` : ""}</div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(truncate(item.summary || "Explore this VisitBest guide.", 150))}</p></div></a></article>`;
}

function renderArticleSchema({ title, description, canonical, datePublished, dateModified, image }) {
  return { "@context": "https://schema.org", "@type": "Article", headline: title, description: truncate(description), datePublished: datePublished || buildDate, dateModified: dateModified || buildDate, author: { "@type": "Organization", name: "VisitBest Editorial Team", url: `${origin}/about/` }, publisher: { "@type": "Organization", name: "VisitBest" }, mainEntityOfPage: { "@type": "WebPage", "@id": new URL(routePath(canonical), origin).href }, ...(image ? { image: [new URL(image.src, origin).href] } : {}) };
}

function renderAdBanner(slot = "in_content") {
  return `<div class="ad-placement ad-${slot}" style="margin:2rem auto;text-align:center;min-height:90px;clear:both;">
    <span class="ad-label" style="display:block;font-size:10px;letter-spacing:1px;color:#8c9ba5;text-transform:uppercase;margin-bottom:6px;">Advertisement</span>
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-6008816938247526"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </div>`;
}

function renderArticle({ slug, title, summary, html, datePublished, dateModified, category, image, canonical = urlFor(slug), type = "article" }) {
  const prepared = addHeadingIds(html);
  const description = truncate(summary || prepared.html);
  const titleText = decodeEntities(title);
  const articleSchema = type === "page" ? { "@context": "https://schema.org", "@type": "WebPage", name: titleText, description, url: new URL(routePath(canonical), origin).href } : renderArticleSchema({ title: titleText, description, canonical, datePublished, dateModified, image });
  const categoryHref = category ? `/category/${slugify(category)}/` : null;
  const meta = `<div class="article-meta"><span>${categoryHref ? `<a class="pill" href="${categoryHref}">${escapeHtml(category)}</a>` : ""}</span><span>Updated <strong>${escapeHtml(humanDate(dateModified || datePublished || buildDate))}</strong></span><span><strong>${readingTime(prepared.html)} min read</strong></span></div>`;
  const figure = image ? `<figure class="article-figure"><img src="${image.src}" alt="${escapeHtml(image.alt || titleText)}" loading="eager" decoding="async"><figcaption>${image.credit ? `${escapeHtml(image.credit)}${image.sourcePage ? ` · <a href="${image.sourcePage}" rel="nofollow noopener" target="_blank">Image source</a>` : ""}` : "Image used inside the guide."}</figcaption></figure>` : "";
  const related = renderRelated(relatedEntries(slug, category));
  const body = `${breadcrumbs([{ href: categoryHref, label: category || "Guide" }, { label: titleText }])}<div class="article-layout"><article class="article-card"><p class="eyebrow">VisitBest guide</p><h1 class="article-title">${escapeHtml(titleText)}</h1><p class="article-dek">${escapeHtml(description)}</p>${meta}${figure}${renderAdBanner("intro")}<div class="prose">${prepared.html}</div>${renderAdBanner("outro")}${renderAuthor()}${related}</article>${renderToc(prepared.headings)}</div>`;
  return renderPage({ title: titleText, description, canonical, currentPath: canonical, body, schema: articleSchema });
}

function renderLegacyHtml(entry) {
  if (entry.type === "policy") {
    return `<section class="content-section"><h2>What this static site collects</h2><p>VisitBest is delivered as a public static website. The site does not require an account and the browser-based search box searches a public index locally. If you email us, your email provider shares the message and address with VisitBest so we can reply.</p></section><section class="content-section"><h2>Hosting and security logs</h2><p>The hosting and delivery provider may process technical request data such as an IP address, device information, and request time to deliver pages, prevent abuse, and maintain security. Those records are governed by the provider's current terms.</p></section><section class="content-section"><h2>Cookies, analytics and advertising</h2><p>This migration package does not add a VisitBest account cookie or newsletter tracker. If analytics, advertising, embedded services, or a newsletter are added later, this policy and the relevant consent controls will be updated before launch.</p></section><section class="content-section"><h2>External links</h2><p>Articles link to selected third-party sources and services. Those websites have their own privacy policies and may set cookies or collect information when you visit them. Review their terms before submitting personal information.</p></section><section class="content-section"><h2>Your questions</h2><p>For privacy questions, corrections, or deletion requests relating to an email you sent us, contact <a href="mailto:visitbest10@gmail.com">visitbest10@gmail.com</a>. We will review reasonable requests under applicable law and may need to retain limited records for security or legal reasons.</p></section><section class="content-section"><h2>Policy updates</h2><p>This policy is effective September 9, 2026 and describes the static migration included in this package. We will publish a revised date and explanation when material data practices change.</p></section>`;
  }
  const isCreative = entry.type === "creative";
  const firstColumn = isCreative ? "Original line" : entry.type === "people" ? "Name" : entry.type === "travel" ? "Place" : entry.type === "reference" ? "Topic" : "Option";
  const secondColumn = isCreative ? "Meaning" : entry.type === "people" ? "Why it stands out" : entry.type === "travel" ? "Why go" : "Best for";
  const thirdColumn = isCreative ? "Theme" : entry.type === "people" ? "Start with" : entry.type === "travel" ? "Planning note" : "What to verify";
  const rows = (entry.items || []).map((item) => `<tr><td>${escapeHtml(item[0])}</td><td>${escapeHtml(item[1])}</td><td>${escapeHtml(item[2])}</td></tr>`).join("");
  const criteria = (entry.criteria || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const references = entry.slug === "google-ranking-factors-2020" ? `<p class="source-note">Primary reference: <a href="https://developers.google.com/search/docs/appearance/ranking-systems-guide" rel="nofollow noopener" target="_blank">Google's guide to Search ranking systems</a>. Google says its systems use many signals rather than a fixed public scorecard.</p>` : entry.slug.includes("wall-putty") || entry.slug.includes("mixer") || entry.slug.includes("laptop") ? `<p class="source-note">For standards, safety, and energy claims, check the current manufacturer documentation and relevant Indian government guidance such as <a href="https://www.bis.gov.in/" rel="nofollow noopener" target="_blank">BIS</a> and <a href="https://beeindia.gov.in/" rel="nofollow noopener" target="_blank">Bureau of Energy Efficiency</a>.</p>` : "";
  const faq = `<section class="content-section faq"><h2>Frequently asked questions</h2><details><summary>How should I use this guide?</summary><p>Use the shortlist to define what matters to you, then verify current price, availability, rules, credentials, or catalogue details at the source before you decide.</p></details><details><summary>Is this a fixed ranking?</summary><p>No. The refreshed page is an editorial starting point organised by fit and evidence. The right choice depends on your use case, location, budget, and timing.</p></details><details><summary>When will this page be updated?</summary><p>VisitBest reviews time-sensitive details when reliable public information changes. Send corrections or newer source links to <a href="mailto:visitbest10@gmail.com">visitbest10@gmail.com</a>.</p></details></section>`;
  return `<section class="content-section"><div class="takeaway"><h2>At a glance</h2><p>${escapeHtml(entry.editorial || entry.summary)}</p></div><ul>${(entry.items || []).slice(0, 4).map((item) => `<li><strong>${escapeHtml(item[0])}</strong> — ${escapeHtml(item[1])}</li>`).join("")}</ul></section><section class="content-section"><h2>Shortlist and comparison</h2><div class="table-scroll"><table class="comparison-table"><thead><tr><th>${firstColumn}</th><th>${secondColumn}</th><th>${thirdColumn}</th></tr></thead><tbody>${rows}</tbody></table></div></section><section class="content-section"><h2>How to choose</h2><p>Start with the real decision: who will use this, where, how often, and what would make the choice unsafe or disappointing? The following checks keep the shortlist practical.</p><ol>${criteria}</ol></section><section class="content-section"><h2>What to verify before you commit</h2><p>Confirm the current specification, price or availability, terms, and seller or provider identity. For companies and services, request a written scope, named contact, references, and cancellation or warranty terms. For products, compare the unit price, compatibility, return window, and genuine support.</p></section><section class="content-section"><h2>Editorial update</h2><p>${escapeHtml(entry.editorial || "This page was refreshed for the static VisitBest migration.")}</p></section>${references}${faq}`;
}

function fallbackForPage(page) {
  if (page.slug !== "earphones-under-2000") return null;
  return { slug: page.slug, title: "Best Earphones Under ₹2,000: Sound, Fit and Battery Guide", category: "Technology", type: "product", imageCluster: "audio", summary: "Compare wired and true-wireless earphones under ₹2,000 by fit, codec support, microphones, battery, comfort, and warranty.", editorial: "Prices and stock change frequently. Choose by fit and use case first, then verify current codec, battery, water-resistance, and service details.", items: [["Wired in-ear monitors", "Consistent sound and no charging case", "Device compatibility and cable durability"], ["Entry-level TWS earbuds", "Convenience for calls and commuting", "Battery, microphone quality, and return policy"], ["Neckband earphones", "Longer battery and lower loss risk", "Comfort and replacement battery support"], ["Workout earbuds", "Secure fit and sweat resistance", "Exact IP rating and cleaning"], ["Call-first earbuds", "Microphone processing and stable connection", "Test voice quality in real environments"], ["Balanced everyday pair", "Music, podcasts, and travel", "Tuning, comfort, and genuine warranty"]], criteria: ["Secure comfortable fit", "Clear microphone for your use", "Battery and charging-case support", "Authentic seller and warranty"] };
}

function archiveCardFromPost(item) {
  return { href: urlFor(item.slug), title: decodeEntities(item.title?.rendered), summary: truncate(item.excerpt?.rendered || item.content?.rendered), date: item.date, image: itemImage(item), category: taxonomyLabel(item)[0] || "Guide" };
}

function archiveCardFromLegacy(item) {
  return { href: urlFor(item.slug), title: item.title, summary: item.summary, date: buildDate, image: editorialImage(item.imageCluster), category: item.category };
}

function renderArchive({ title, description, cards, currentPath, page = 1, totalPages = 1, basePath = "" }) {
  const pagination = totalPages > 1 ? `<nav class="pagination" aria-label="Archive pages">${Array.from({ length: Math.min(totalPages, 12) }, (_, index) => index + 1).map((number) => { const href = number === 1 ? routePath(basePath) : routePath(`${basePath}/page/${number}`); return number === page ? `<span class="current" aria-current="page">${number}</span>` : `<a href="${href}">${number}</a>`; }).join("")}${totalPages > 12 ? `<span>… ${totalPages}</span>` : ""}</nav>` : "";
  const body = `<div class="container">${breadcrumbs([{ label: title }])}<section class="page-intro"><p class="eyebrow">VisitBest archive</p><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p></section><section class="section"><div class="archive-toolbar"><span>${cards.length} guide${cards.length === 1 ? "" : "s"} on this page</span>${currentPath === "/business/" || currentPath.startsWith("/business/page/") ? `<form><input data-directory-filter type="search" placeholder="Filter this page" aria-label="Filter this page"><span data-directory-count>${cards.length} shown</span></form>` : ""}</div><div class="card-grid">${cards.length ? cards.map((card) => renderCard({ ...card, ...(currentPath.startsWith("/business") ? { href: card.href, category: card.category || "Business" } : {}) })).join("") : `<div class="takeaway"><h2>No guides here yet</h2><p>Browse the latest guides or use site search to find a related topic.</p><a class="button button-primary" href="/search/">Search VisitBest</a></div>`}</div>${pagination}</section></div>`;
  return renderPage({ title, description, canonical: currentPath, currentPath, body, schema: { "@context": "https://schema.org", "@type": "CollectionPage", name: title, description, url: new URL(routePath(currentPath), origin).href } });
}

function businessCard(item) {
  const categoriesForItem = taxonomyLabel(item, "business_category");
  const locationsForItem = taxonomyLabel(item, "business_location");
  return { href: urlFor(item.slug, "/business"), title: decodeEntities(item.title?.rendered), summary: truncate(item.excerpt?.rendered || item.content?.rendered, 160), date: item.date, image: itemImage(item), category: categoriesForItem[0] || locationsForItem[0] || "Business" };
}

function renderBusinessDetail(item) {
  const categoryTermsForItem = taxonomyTerms(item, "business_category");
  const locationTermsForItem = taxonomyTerms(item, "business_location");
  const categoriesForItem = categoryTermsForItem.map((term) => term.name);
  const locationsForItem = locationTermsForItem.map((term) => term.name);
  const prepared = addHeadingIds(localizeHtml(item.content?.rendered || `<p>${escapeHtml(truncate(item.excerpt?.rendered || "Business directory profile.", 800))}</p>`));
  const title = decodeEntities(item.title?.rendered);
  const description = truncate(item.excerpt?.rendered || item.content?.rendered, 156);
  const body = `${breadcrumbs([{ href: "/business/", label: "Business directory" }, { label: title }])}<div class="article-layout"><article class="article-card"><p class="eyebrow">Business directory profile</p><h1 class="article-title">${escapeHtml(title)}</h1><p class="article-dek">${escapeHtml(description)}</p><div class="article-meta"><span>${categoryTermsForItem.map((term) => `<a class="pill" href="/business-category/${term.slug}/">${escapeHtml(term.name)}</a>`).join(" ")}</span><span>${locationTermsForItem.map((term) => `<a href="/business-location/${term.slug}/">${escapeHtml(term.name)}</a>`).join(", ")}</span><span>Updated <strong>${escapeHtml(humanDate(item.modified || item.date))}</strong></span></div><div class="prose">${prepared.html}</div><div class="source-note">Directory information is compiled from public sources and should be verified with the organisation before a commercial decision.</div>${renderAuthor()}${renderRelated(relatedEntries("", categoriesForItem[0] || ""))}</article>${renderToc(prepared.headings)}</div>`;
  return renderPage({ title, description, canonical: urlFor(item.slug, "/business"), currentPath: urlFor(item.slug, "/business"), body, schema: { "@context": "https://schema.org", "@type": "ProfilePage", name: title, description, url: new URL(urlFor(item.slug, "/business"), origin).href } });
}

function renderHome() {
  const latest = posts.slice(0, 6).map(archiveCardFromPost);
  const restored = legacyPages.filter((item) => !["tools", "privacy-policy"].includes(item.slug)).slice(0, 6).map(archiveCardFromLegacy);
  const categoryNames = [...new Set([...categories.map((item) => item.name), ...legacyPages.map((item) => item.category)])].filter((name) => name && name !== "Site").slice(0, 10);
  const categoryCards = categoryNames.map((name) => {
    const count = posts.filter((item) => taxonomyLabel(item).includes(name)).length + legacyPages.filter((item) => item.category === name).length;
    return `<a class="category-card" href="/category/${slugify(name)}/"><strong>${escapeHtml(name)}</strong><span>${count} guide${count === 1 ? "" : "s"}</span></a>`;
  }).join("");
  const body = `<div class="container"><section class="hero"><p class="eyebrow">Explore best in India</p><h1>Trusted guides on brands, products &amp; more</h1><p>Expert-curated listicles to help you discover the best watches, appliances, companies, culture, and more across India.</p><div class="button-row"><a class="button button-primary" href="#vb-latest-posts">Browse latest guides</a><a class="button button-quiet" href="#vb-category-browse">View categories</a></div><div class="pill-row"><a class="pill" style="background:#ff3344;color:#fff;border-color:#ff3344;" href="/bigg-boss-20-voting/">🔥 Bigg Boss 20 Live Poll</a><a class="pill" href="/bigg-boss-20-guide/">📖 Season Guide</a><a class="pill" href="/bigg-boss-20-contestants/">👥 BB20 Contestants</a><a class="pill" href="/bigg-boss-20-web-stories/">📱 Web Stories</a>${categoryNames.slice(0, 6).map((name) => `<a class="pill" href="/category/${slugify(name)}/">${escapeHtml(name)}</a>`).join("")}</div></section><section class="section" id="vb-latest-posts"><div class="section-heading"><div><p class="eyebrow">Fresh content</p><h2>Latest posts</h2><p>Recently published guides and listicles from VisitBest.</p></div><a class="section-link" href="/search/">View all posts</a></div><div class="card-grid">${latest.map(renderCard).join("")}</div></section><section class="section" id="vb-restored-posts"><div class="section-heading"><div><p class="eyebrow">Restored from your traffic report</p><h2>More guides worth keeping</h2><p>Older and previously unlinked routes are live again, refreshed for clarity and easier comparison.</p></div><a class="section-link" href="/category/brands/">Browse guides</a></div><div class="card-grid">${restored.map(renderCard).join("")}</div></section><section class="section" id="vb-category-browse"><div class="section-heading"><div><p class="eyebrow">Discover</p><h2>Browse by category</h2><p>Jump into the topics that matter most to you.</p></div></div><div class="category-grid">${categoryCards}</div></section><section class="section directory-strip"><div class="directory-panel"><h3>Find a company by category or city</h3><p>Browse the VisitBest business directory with 700+ public profiles across pharmaceutical, construction, technology, and other sectors.</p><a class="button button-quiet" href="/business/">Open the directory</a></div><div class="directory-panel" style="background: var(--cream); color: var(--ink);"><h3 style="color:var(--ink);">Need a fast answer?</h3><p style="color:var(--muted);">Use site search to move from a broad topic to a focused guide.</p><a class="button button-primary" href="/search/">Search guides</a></div></section><section class="section newsletter"><div><p class="eyebrow">Newsletter</p><h2>Get the best guides in your inbox</h2><p>A weekly roundup of India's best brands, products, companies, and practical ideas.</p></div><form><input type="email" placeholder="Enter your email" aria-label="Email address" disabled><button class="button button-primary" type="button" disabled>Coming soon</button></form></section></div>`;
  return renderPage({ title: "Visit-Best - Explore Best In India", description: "Trusted guides on brands, products, companies, culture, and more across India.", canonical: "/", currentPath: "/", body, schema: { "@context": "https://schema.org", "@type": "WebSite", name: "Visit-Best", url: `${origin}/`, potentialAction: { "@type": "SearchAction", target: `${origin}/search/?q={search_term_string}`, "query-input": "required name=search_term_string" } } });
}

function renderSearch() {
  const searchIndex = [...posts.map((item) => ({ title: decodeEntities(item.title?.rendered), summary: truncate(item.excerpt?.rendered || item.content?.rendered), href: urlFor(item.slug), category: taxonomyLabel(item)[0] || "Guide" })), ...legacyPages.map((item) => ({ title: item.title, summary: item.summary, href: urlFor(item.slug), category: item.category })), ...business.map((item) => ({ title: decodeEntities(item.title?.rendered), summary: truncate(item.excerpt?.rendered || item.content?.rendered), href: urlFor(item.slug, "/business"), category: taxonomyLabel(item, "business_category")[0] || "Business" }))];
  const body = `<div class="container search-page">${breadcrumbs([{ label: "Search" }])}<section class="page-intro"><p class="eyebrow">Find a guide</p><h1>Search VisitBest</h1><p>Search articles, restored guides, and business-directory profiles.</p></section><section class="section"><form class="search-form" id="search-form"><input id="search-query" name="q" type="search" placeholder="Try watches, pharma companies, chocolate…" aria-label="Search VisitBest"><button class="button button-primary" type="submit">Search</button></form><p class="search-result-count" id="search-count"></p><div class="search-results" id="search-results"></div></section></div><script>window.__VISITBEST_SEARCH__=${jsonLd(searchIndex)};</script>`;
  return renderPage({ title: "Search VisitBest Guides", description: "Search VisitBest articles and business-directory profiles.", canonical: "/search/", currentPath: "/search/", body });
}

function renderRedirect(target, title = "VisitBest") {
  const targetPath = routePath(target);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(title)} moved to its current VisitBest page."><meta http-equiv="refresh" content="0;url=${targetPath}"><link rel="canonical" href="${new URL(targetPath, origin).href}"><script>location.replace(${JSON.stringify(targetPath)});</script></head><body><p>This VisitBest address moved to <a href="${targetPath}">${escapeHtml(title)}</a>.</p></body></html>`;
}

async function writeRoute(route, html) {
  const normalized = routePath(route);
  const target = normalized === "/" ? path.join(distDir, "index.html") : path.join(distDir, normalized.replace(/^\//, ""), "index.html");
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, html);
}

await fs.rm(distDir, { recursive: true, force: true });
await fs.mkdir(distDir, { recursive: true });
await fs.cp(publicDir, distDir, { recursive: true });

await writeRoute("/", renderHome());

for (const item of posts) {
  const title = decodeEntities(item.title?.rendered);
  const category = taxonomyLabel(item)[0] || "Guide";
  await writeRoute(urlFor(item.slug), renderArticle({ slug: item.slug, title, summary: item.excerpt?.rendered || item.content?.rendered, html: localizeHtml(item.content?.rendered || ""), datePublished: item.date, dateModified: item.modified, category, image: itemImage(item) }));
}

for (const page of pages) {
  const generated = fallbackForPage(page);
  if (generated) {
    await writeRoute(urlFor(page.slug), renderArticle({ slug: generated.slug, title: generated.title, summary: generated.summary, html: renderLegacyHtml(generated), datePublished: page.date, dateModified: buildDate, category: generated.category, image: editorialImage(generated.imageCluster), type: "article" }));
  } else {
    const title = decodeEntities(page.title?.rendered);
    await writeRoute(urlFor(page.slug), renderArticle({ slug: page.slug, title, summary: page.excerpt?.rendered || page.content?.rendered, html: localizeHtml(page.content?.rendered || `<p>${escapeHtml(title)}</p>`), datePublished: page.date, dateModified: page.modified, category: null, type: "page" }));
  }
}

for (const entry of legacyPages) {
  await writeRoute(urlFor(entry.slug), renderArticle({ slug: entry.slug, title: entry.title, summary: entry.summary, html: renderLegacyHtml(entry), datePublished: buildDate, dateModified: buildDate, category: entry.category === "Site" ? null : entry.category, image: editorialImage(entry.imageCluster), type: entry.type === "policy" ? "page" : "article" }));
}

for (const item of business) await writeRoute(urlFor(item.slug, "/business"), renderBusinessDetail(item));

const postCards = posts.map(archiveCardFromPost);
const legacyCards = legacyPages.filter((item) => !["privacy-policy", "tools"].includes(item.slug)).map(archiveCardFromLegacy);
for (const category of categories) {
  const cards = [...postCards.filter((card) => card.category === category.name), ...legacyCards.filter((card) => card.category === category.name)];
  const totalPages = Math.max(1, Math.ceil(cards.length / 12));
  for (let page = 1; page <= totalPages; page += 1) {
    const current = page === 1 ? `/category/${category.slug}/` : `/category/${category.slug}/page/${page}/`;
    await writeRoute(current, renderArchive({ title: category.name, description: `VisitBest ${category.name.toLowerCase()} guides, comparisons, and explainers.`, cards: cards.slice((page - 1) * 12, page * 12), currentPath: current, page, totalPages, basePath: `/category/${category.slug}` }));
  }
}

const allLegacyCategoryNames = [...new Set(legacyCards.map((card) => card.category))].filter((name) => name && !categories.some((category) => category.name.toLowerCase() === name.toLowerCase()));
for (const name of allLegacyCategoryNames) {
  const cards = legacyCards.filter((card) => card.category === name);
  const current = `/category/${slugify(name)}/`;
  addRoute(current, { title: name, type: "archive" });
  await writeRoute(current, renderArchive({ title: name, description: `VisitBest ${name.toLowerCase()} guides and explainers.`, cards, currentPath: current, basePath: current }));
}

for (const tag of tags) {
  const cards = postCards.filter((card) => posts.find((item) => urlFor(item.slug) === card.href && item.tags?.includes(tag.id)));
  const current = `/tag/${tag.slug}/`;
  await writeRoute(current, renderArchive({ title: tag.name, description: `VisitBest guides tagged ${tag.name}.`, cards, currentPath: current, basePath: current }));
}

for (const term of businessCategories) {
  const cards = business.filter((item) => item.business_category?.includes(term.id)).map(businessCard);
  const current = `/business-category/${term.slug}/`;
  await writeRoute(current, renderArchive({ title: term.name, description: `Browse VisitBest business-directory profiles in ${term.name.toLowerCase()}.`, cards, currentPath: current, basePath: current }));
}
for (const term of businessLocations) {
  const cards = business.filter((item) => item.business_location?.includes(term.id)).map(businessCard);
  const current = `/business-location/${term.slug}/`;
  await writeRoute(current, renderArchive({ title: term.name, description: `Browse VisitBest business-directory profiles in ${term.name}.`, cards, currentPath: current, basePath: current }));
}

// The supplied traffic export contains several historical taxonomy URLs that
// are no longer present in the current WordPress taxonomy response. Keep those
// addresses live as useful empty archives instead of allowing them to 404.
const trafficTaxonomyRoutes = [...new Set(landingCsv.split(/\r?\n/).slice(10).map((line) => line.split(",")[0]?.trim()).filter(Boolean).map(routePath))];
const taxonomyKinds = [
  { prefix: "/tag/", known: new Set(tags.map((term) => term.slug)), title: (slug) => `Tag: ${labelFromSlug(slug)}`, description: (slug) => `VisitBest guides tagged ${labelFromSlug(slug)}.` },
  { prefix: "/business-category/", known: new Set(businessCategories.map((term) => term.slug)), title: (slug) => labelFromSlug(slug), description: (slug) => `Browse VisitBest business-directory profiles in ${labelFromSlug(slug).toLowerCase()}.` },
  { prefix: "/business-location/", known: new Set(businessLocations.map((term) => term.slug)), title: (slug) => labelFromSlug(slug), description: (slug) => `Browse VisitBest business-directory profiles in ${labelFromSlug(slug)}.` },
];
for (const kind of taxonomyKinds) {
  for (const current of trafficTaxonomyRoutes.filter((route) => route.startsWith(kind.prefix) && route.split("/").filter(Boolean).length === 2)) {
    const slug = current.split("/").filter(Boolean).at(-1);
    if (kind.known.has(slug)) continue;
    const title = kind.title(slug);
    addRoute(current, { title, type: "archive" });
    await writeRoute(current, renderArchive({ title, description: kind.description(slug), cards: [], currentPath: current, basePath: current }));
  }
}

for (let page = 1; page <= 72; page += 1) {
  const current = page === 1 ? "/business/" : `/business/page/${page}/`;
  const cards = business.slice((page - 1) * 10, page * 10).map(businessCard);
  await writeRoute(current, renderArchive({ title: page === 1 ? "Business Directory" : `Business Directory · Page ${page}`, description: "Explore public business profiles by category and city, with practical verification notes before you contact a company.", cards, currentPath: current, page, totalPages: 72, basePath: "/business" }));
}

for (let i = 0; i < calculatorPages.length; i++) {
  const item = calculatorPages[i];
  const other = calculatorPages[1 - i];
  const body = renderCalculatorBody(item, other, calculatorCss, calculatorClient.toString());
  const html = renderPage({
    title: `${item.title} - VisitBest`,
    description: item.meta,
    canonical: urlFor(item.slug),
    currentPath: urlFor(item.slug),
    body,
    schema: calculatorSchema(item),
  });
  await writeRoute(urlFor(item.slug), html);
}

for (const poll of bbPolls) {
  const body = `${renderBiggBossPollPage(poll)}<style>${bbCss}</style><script>${bbClient}</script>`;
  const html = renderPage({
    title: `${poll.title} - VisitBest`,
    description: poll.metaDesc,
    canonical: urlFor(poll.slug),
    currentPath: urlFor(poll.slug),
    body,
    schema: biggBossSchema(poll),
  });
  await writeRoute(urlFor(poll.slug), html);
}

const bbContestantsBody = `${renderBiggBossContestantsPage()}<style>${bbCss}</style><script>${bbClient}</script>`;
await writeRoute(urlFor("bigg-boss-20-contestants"), renderPage({
  title: "Bigg Boss 20 Contestants List with Photos, Age, Bio & Missed Call Numbers - VisitBest",
  description: "Complete list of all 16 Bigg Boss Season 20 contestants with verified photos, age, hometown, occupation, social background, and toll-free voting numbers.",
  canonical: urlFor("bigg-boss-20-contestants"),
  currentPath: urlFor("bigg-boss-20-contestants"),
  body: bbContestantsBody,
  schema: biggBossSchema(null, true, false),
}));

const bbRulesBody = `${renderBiggBossRulesPage()}<style>${bbCss}</style><script>${bbClient}</script>`;
await writeRoute(urlFor("bigg-boss-20-voting-rules"), renderPage({
  title: "Bigg Boss 20 Voting Rules, Timings & Missed Call Numbers (Official Guide) - VisitBest",
  description: "Official guide on how to vote for Bigg Boss 20 on JioCinema, missed call voting numbers list, elimination schedule, and rules.",
  canonical: urlFor("bigg-boss-20-voting-rules"),
  currentPath: urlFor("bigg-boss-20-voting-rules"),
  body: bbRulesBody,
  schema: biggBossSchema(null, false, true),
}));

await writeRoute("/search/", renderSearch());
await writeRoute("/author/admin/", renderRedirect("/about/", "VisitBest Editorial Team"));

const searchIndex = [
  ...posts.map((item) => ({ title: decodeEntities(item.title?.rendered), summary: truncate(item.excerpt?.rendered || item.content?.rendered), href: urlFor(item.slug), category: taxonomyLabel(item)[0] || "Guide" })),
  ...legacyPages.map((item) => ({ title: item.title, summary: item.summary, href: urlFor(item.slug), category: item.category })),
  ...business.map((item) => ({ title: decodeEntities(item.title?.rendered), summary: truncate(item.excerpt?.rendered || item.content?.rendered), href: urlFor(item.slug, "/business"), category: taxonomyLabel(item, "business_category")[0] || "Business" })),
  ...calculatorPages.map((item) => ({ title: item.title, summary: item.meta, href: urlFor(item.slug), category: "Calculator" })),
  ...bbPolls.map((item) => ({ title: item.h1, summary: item.metaDesc, href: urlFor(item.slug), category: "Bigg Boss 20" })),
  { title: "Bigg Boss 20 Contestants List with Photos & Bio", summary: "Complete list of all 16 Bigg Boss Season 20 contestants with photos and missed call numbers.", href: urlFor("bigg-boss-20-contestants"), category: "Bigg Boss 20" },
  { title: "Bigg Boss 20 Voting Rules & Timings", summary: "Official guide on how to vote for Bigg Boss 20 on JioCinema and missed call numbers.", href: urlFor("bigg-boss-20-voting-rules"), category: "Bigg Boss 20" },
];
await fs.writeFile(path.join(distDir, "search-index.json"), `${JSON.stringify(searchIndex)}\n`);

const xml = [...canonicalRoutes].sort().map((route) => {
  const meta = routeMeta.get(route);
  const lastmod = meta?.dateModified || buildDate;
  return `<url><loc>${escapeHtml(new URL(route, origin).href)}</loc><lastmod>${lastmod.slice(0, 10)}</lastmod></url>`;
}).join("");
await fs.writeFile(path.join(distDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xml}</urlset>\n`);
await fs.writeFile(path.join(distDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\nSitemap: ${origin}/sitemap-bigg-boss-20-new.xml\n`);
await fs.writeFile(path.join(distDir, "ads.txt"), `google.com, pub-6008816938247526, DIRECT, f08c47fec0942fa0\n`);
await fs.writeFile(path.join(distDir, "404.html"), renderPage({ title: "Page not found · VisitBest", description: "The VisitBest page could not be found.", canonical: "/404.html", body: `<div class="container"><section class="section"><p class="eyebrow">404</p><h1>That page moved</h1><p>Try search or browse the directory to find a current VisitBest guide.</p><div class="button-row"><a class="button button-primary" href="/">Go home</a><a class="button button-quiet" href="/search/">Search guides</a></div></section></div>` }));

const sourceReport = {
  builtAt: buildDate,
  livePosts: posts.length,
  pages: pages.length,
  businessProfiles: business.length,
  restoredRoutes: legacyPages.length,
  mirroredUploads: assetQueue.length,
  canonicalRoutes: canonicalRoutes.size,
  trafficRoutes: [...routeSet].filter((route) => landingCsv.includes(route.replace(/\/$/, ""))).length,
};
await fs.writeFile(path.join(distDir, "migration-report.json"), `${JSON.stringify(sourceReport, null, 2)}\n`);
console.log(JSON.stringify(sourceReport));
