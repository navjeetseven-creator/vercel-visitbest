import fs from "node:fs";
import path from "node:path";

const html = fs.readFileSync("public/event-management-companies-in-india/index.html", "utf8");
const imgMatches = Array.from(html.matchAll(/<img[^>]+src=['"]([^'"]+)['"][^>]*>/gi));
console.log("Total images found on page:", imgMatches.length);

let missing = 0;
for (const match of imgMatches) {
  const src = match[1];
  const diskPath = path.join("public", src.replace(/^\//, ""));
  const exists = fs.existsSync(diskPath);
  if (!exists) {
    console.log("MISSING IMAGE:", src);
    missing++;
  } else {
    const stat = fs.statSync(diskPath);
    console.log(`PASS: ${src} (${stat.size} bytes)`);
  }
}

if (missing === 0) {
  console.log(`\nSUCCESS: ALL ${imgMatches.length} IMAGES VERIFIED ON DISK!`);
} else {
  console.log(`\nFAILURE: ${missing} images missing!`);
}
