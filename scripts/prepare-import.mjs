import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const researchDir = path.resolve(root, "..", "research");
const sourceDir = path.join(root, "content", "source");
const assetDir = path.join(root, "public", "assets", "mirror");

await fs.mkdir(sourceDir, { recursive: true });
await fs.mkdir(assetDir, { recursive: true });

async function readJson(file) {
  return JSON.parse(await fs.readFile(path.join(researchDir, file), "utf8"));
}

async function mergeNumbered(prefix, count) {
  const pages = [];
  for (let page = 1; page <= count; page += 1) {
    pages.push(...(await readJson(`${prefix}-${page}.json`)));
  }
  return pages;
}

const [posts, pages, business, media, categories, tags, businessCategories, businessLocations] = await Promise.all([
  readJson("visitbest-posts.json"),
  readJson("pages.json"),
  mergeNumbered("business", 8),
  mergeNumbered("media", 6),
  readJson("categories.json"),
  readJson("tags.json"),
  readJson("business-categories.json"),
  readJson("business-locations.json"),
]);

const datasets = {
  posts,
  pages,
  business,
  media,
  categories,
  tags,
  "business-categories": businessCategories,
  "business-locations": businessLocations,
};

for (const [name, data] of Object.entries(datasets)) {
  await fs.writeFile(path.join(sourceDir, `${name}.json`), `${JSON.stringify(data)}\n`);
}

await fs.copyFile(
  path.resolve(root, "..", "upload", "Landing_page_Landing_page.csv"),
  path.join(sourceDir, "landing-pages.csv"),
);

const discovered = new Set();
const imageAttribute = /(?:src|poster)=["']([^"']+)["']/gi;

function addUrl(candidate) {
  if (!candidate || candidate.startsWith("data:")) return;
  try {
    const url = new URL(candidate.replaceAll("&amp;", "&"), "https://visitbest.in/");
    if (!["visitbest.in", "www.visitbest.in"].includes(url.hostname)) return;
    if (!url.pathname.startsWith("/wp-content/uploads/")) return;
    url.hash = "";
    discovered.add(url.href);
  } catch {
    // Ignore malformed legacy markup; the original HTML remains in the source archive.
  }
}

for (const item of [...posts, ...pages, ...business]) {
  const html = `${item.content?.rendered ?? ""} ${item.excerpt?.rendered ?? ""}`;
  for (const match of html.matchAll(imageAttribute)) addUrl(match[1]);
}

for (const item of media) {
  addUrl(item.source_url);
  const full = item.media_details?.sizes?.full?.source_url;
  if (full) addUrl(full);
}

function assetName(urlText) {
  const url = new URL(urlText);
  const decoded = decodeURIComponent(url.pathname.split("/").pop() || "asset");
  const safeBase = decoded
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(-100) || "asset";
  const hash = createHash("sha1").update(urlText).digest("hex").slice(0, 12);
  return `${hash}-${safeBase}`;
}

const assetQueue = [...discovered]
  .sort()
  .map((url) => ({ url, local: `/assets/mirror/${assetName(url)}` }));

await fs.writeFile(path.join(sourceDir, "asset-queue.json"), `${JSON.stringify(assetQueue, null, 2)}\n`);

const curlEscape = (value) => value.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
const curlConfig = assetQueue
  .flatMap(({ url, local }) => [
    `url = "${curlEscape(url)}"`,
    `output = "${curlEscape(path.join(root, "public", local))}"`,
  ])
  .join("\n");

await fs.writeFile(path.join(researchDir, "curl-assets.cfg"), `${curlConfig}\n`);

console.log(JSON.stringify({
  posts: posts.length,
  pages: pages.length,
  business: business.length,
  media: media.length,
  assetsQueued: assetQueue.length,
}));
