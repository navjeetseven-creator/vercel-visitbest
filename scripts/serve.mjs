import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const port = Number(process.env.PORT || 4173);
const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".xml": "application/xml; charset=utf-8", ".txt": "text/plain; charset=utf-8", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".avif": "image/avif", ".gif": "image/gif" };

const server = http.createServer(async (request, response) => {
  const requested = decodeURIComponent((request.url || "/").split("?")[0]);
  const safe = path.normalize(requested).replace(/^([.][.][/\\])+/, "");
  const candidates = [
    path.join(root, safe),
    path.join(root, safe, "index.html"),
    path.join(root, "404.html"),
  ];
  let file = null;
  for (const candidate of candidates) {
    if (await fs.stat(candidate).then((stat) => stat.isFile()).catch(() => false)) { file = candidate; break; }
  }
  if (!file) { response.writeHead(404); response.end("Not found"); return; }
  const extension = path.extname(file).toLowerCase();
  response.writeHead(file.endsWith("404.html") ? 404 : 200, { "content-type": mime[extension] || "application/octet-stream" });
  response.end(await fs.readFile(file));
});

server.listen(port, () => console.log(`VisitBest preview: http://localhost:${port}`));
