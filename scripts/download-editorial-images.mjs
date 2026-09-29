import fs from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const entries = JSON.parse(await fs.readFile(path.join(root, "content", "editorial-images.json"), "utf8"));
const queue = [...new Map(entries.map((entry) => [entry.local, entry])).values()];
const destinationRoot = path.join(root, "public");

async function download(entry) {
  const target = path.join(destinationRoot, entry.local.replace(/^\//, ""));
  await fs.mkdir(path.dirname(target), { recursive: true });
  const existing = await fs.stat(target).catch(() => null);
  if (existing?.size > 1024) return { ...entry, status: "cached", bytes: existing.size };
  await run("curl", ["-L", "--fail", "--retry", "3", "--retry-all-errors", "--connect-timeout", "20", "--max-time", "180", "-o", target, entry.url], { maxBuffer: 1024 * 1024 });
  const result = await fs.stat(target);
  if (result.size <= 1024) throw new Error(`Downloaded file is unexpectedly small: ${entry.local}`);
  return { ...entry, status: "downloaded", bytes: result.size };
}

const results = [];
let cursor = 0;
async function worker() {
  while (cursor < queue.length) {
    const entry = queue[cursor++];
    try {
      const result = await download(entry);
      results.push(result);
      console.log(`${result.status} ${entry.local} (${result.bytes} bytes)`);
    } catch (error) {
      results.push({ ...entry, status: "failed", error: error.message });
      console.error(`failed ${entry.local}: ${error.message}`);
    }
  }
}

await Promise.all(Array.from({ length: Math.min(4, queue.length) }, () => worker()));
const failed = results.filter((result) => result.status === "failed");
console.log(JSON.stringify({ requested: queue.length, completed: results.length - failed.length, failed: failed.map((result) => ({ local: result.local, error: result.error })) }, null, 2));
if (failed.length) process.exitCode = 1;
