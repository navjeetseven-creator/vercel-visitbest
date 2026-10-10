import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

async function rasterizeVisuals() {
  const dir = "public/assets/event-management-companies-in-india/visuals";
  const svgs = [
    { name: "budget-distribution", w: 900, h: 500 },
    { name: "event-types-comparison", w: 1000, h: 500 },
    { name: "geographic-coverage", w: 900, h: 600 },
    { name: "process-infographic", w: 1200, h: 400 }
  ];

  for (const s of svgs) {
    const xml = await fs.readFile(path.join(dir, s.name + ".svg"));
    await sharp(xml)
      .resize(s.w, s.h)
      .png({ quality: 95 })
      .toFile(path.join(dir, s.name + ".png"));
    console.log("Rasterized " + s.name + ".png successfully!");
  }
}

rasterizeVisuals();
