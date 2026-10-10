import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

async function rasterizeVisuals() {
  const dir = "public/assets/event-management-companies-in-india/visuals";
  const svgs = [
    { name: "budget-distribution", w: 1600, h: 867 },
    { name: "event-types-comparison", w: 1600, h: 900 },
    { name: "geographic-coverage", w: 1600, h: 1000 },
    { name: "process-infographic", w: 1800, h: 600 }
  ];

  for (const s of svgs) {
    const xml = await fs.readFile(path.join(dir, s.name + ".svg"));
    await sharp(xml, { density: 150 })
      .resize(s.w, s.h, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png({ quality: 95 })
      .toFile(path.join(dir, s.name + ".png"));
    console.log("Rasterized high-definition " + s.name + ".png (" + s.w + "x" + s.h + ") successfully!");
  }
}

rasterizeVisuals();
