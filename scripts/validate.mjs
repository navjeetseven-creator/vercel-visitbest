import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const source = path.join(root, "content", "source");

function routePath(value) {
  let text = String(value || "/").trim();
  if (!text.startsWith("/")) text = `/${text}`;
  text = text.split("?")[0].split("#")[0];
  if (text !== "/") text = `/${text.replace(/^\/+|\/+$/g, "")}/`;
  return text;
}

async function walk(directory) {
  const output = [];
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await walk(full));
    else output.push(full);
  }
  return output;
}

function fileForReference(reference, currentRoute = "/") {
  const raw = reference.split("#")[0].split("?")[0];
  if (!raw || raw === "/") return path.join(dist, "index.html");
  let resolved = raw;
  if (!raw.startsWith("/")) {
    resolved = new URL(raw, `https://visitbest.in${currentRoute}`).pathname;
  }
  if (/\.(?:css|js|json|xml|txt|svg|png|jpe?g|gif|webp|avif|ico|woff2?)$/i.test(resolved)) return path.join(dist, resolved.replace(/^\//, ""));
  return path.join(dist, resolved.replace(/^\/+|\/+$/g, ""), "index.html");
}

const files = await walk(dist).catch(() => []);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const routes = new Set();
const errors = [];
const warnings = [];
let localReferences = 0;
let localReferenceFailures = 0;
let externalReferences = 0;
let pagesWithImages = 0;

for (const file of htmlFiles) {
  const relative = path.relative(dist, file).replaceAll(path.sep, "/");
  const route = relative === "index.html" ? "/" : `/${relative.replace(/\/index\.html$/, "")}/`;
  routes.add(route);
  const html = await fs.readFile(file, "utf8");
  const titleCount = (html.match(/<title>/gi) || []).length;
  const description = /<meta\s+name=["']description["'][^>]+content=["'][^"']+/i.test(html);
  const canonical = /<link\s+rel=["']canonical["'][^>]+href=["']https:\/\/visitbest\.in\//i.test(html);
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;
  if (titleCount !== 1) errors.push(`${route}: expected one title, found ${titleCount}`);
  if (!description) errors.push(`${route}: missing meta description`);
  if (!canonical) errors.push(`${route}: missing canonical URL`);
  if (route !== "/author/admin/" && h1Count !== 1) errors.push(`${route}: expected one h1, found ${h1Count}`);
  if (/\[link\s+removed\]|https?:\/\/\s*\[[^\]]+\]/i.test(html)) errors.push(`${route}: placeholder/broken link text remains`);
  const imageRefs = [...html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["']/gi)].map((match) => match[1]);
  if (imageRefs.length) pagesWithImages += 1;
  const refs = [...html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const reference of refs) {
    if (/^(?:https?:|\/\/|mailto:|tel:|data:|javascript:|#)/i.test(reference)) {
      if (/^https?:\/\/\s*\[/i.test(reference)) errors.push(`${route}: malformed external reference ${reference}`);
      else if (/^https?:/i.test(reference)) externalReferences += 1;
      continue;
    }
    localReferences += 1;
    const target = fileForReference(reference, route);
    const exists = await fs.stat(target).then(() => true).catch(() => false);
    if (!exists) {
      localReferenceFailures += 1;
      errors.push(`${route}: missing local asset/route ${reference}`);
    }
  }
}

const csv = await fs.readFile(path.join(source, "landing-pages.csv"), "utf8").catch(() => "");
const csvRoutes = [...new Set(csv.split(/\r?\n/).slice(10).map((line) => line.split(",")[0]?.trim()).filter((value) => value?.startsWith("/")).map(routePath))];
const missingCsvRoutes = csvRoutes.filter((route) => !routes.has(route));
if (missingCsvRoutes.length) errors.push(`CSV routes missing from dist: ${missingCsvRoutes.slice(0, 12).join(", ")}${missingCsvRoutes.length > 12 ? "…" : ""}`);

const report = JSON.parse(await fs.readFile(path.join(dist, "migration-report.json"), "utf8").catch(() => "{}"));
for (const required of ["sitemap.xml", "robots.txt", "search-index.json", "404.html"]) {
  if (!files.includes(path.join(dist, required))) errors.push(`Missing build artifact: ${required}`);
}
const editorialFallback = path.join(dist, "assets", "editorial", "editorial-fallback.svg");
if (!await fs.stat(editorialFallback).then(() => true).catch(() => false)) errors.push("Missing editorial fallback image");

const result = {
  htmlPages: htmlFiles.length,
  routeCount: routes.size,
  csvRoutes: csvRoutes.length,
  missingCsvRoutes: missingCsvRoutes.length,
  pagesWithImages,
  localReferences,
  localReferenceFailures,
  externalReferences,
  report,
  errors,
  warnings,
};
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;
