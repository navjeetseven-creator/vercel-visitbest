import fs from "node:fs/promises";
import path from "node:path";

const targetDir = "public/assets/event-management-companies-in-india/companies";

const list = [
  {
    slug: "shaadisquad",
    url: "https://shaadisquad.com/wp-content/uploads/2024/02/1.jpeg",
    ext: "jpg",
    caption: "Bespoke celebrity wedding mandap design by Shaadi Squad",
    sourcePage: "https://shaadisquad.com/"
  },
  {
    slug: "showmakerz",
    url: "https://www.showmakerz.com/images/event-management-company.webp",
    ext: "webp",
    caption: "Corporate conference stage production by Showmakerz",
    sourcePage: "https://www.showmakerz.com/"
  },
  {
    slug: "inventum",
    url: "https://www.inventumevents.com/wp-content/uploads/2018/04/01.jpg",
    ext: "jpg",
    caption: "Turnkey exhibition stand fabrication and pavilion design by Inventum Events",
    sourcePage: "https://www.inventumevents.com/"
  },
  {
    slug: "vibgyor",
    url: "https://vibgyornet.com/wp-content/uploads/slider/cache/6ff01fa249a1c84c57347e4fb2feb187/connection-optical-fiber-cable-technology-ezgif-scaled.webp",
    ext: "webp",
    caption: "Experiential tech showcase and brand installation by Vibgyor Brand Experiences",
    sourcePage: "https://www.vibgyornet.com/"
  }
];

async function downloadAuthorized() {
  const manifest = [];
  for (const item of list) {
    try {
      const res = await fetch(item.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        signal: AbortSignal.timeout(8000)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      const fileName = `${item.slug}-lead.${item.ext}`;
      const filePath = path.join(targetDir, fileName);
      await fs.writeFile(filePath, buffer);
      manifest.push({
        slug: item.slug,
        localPath: `/assets/event-management-companies-in-india/companies/${fileName}`,
        originalUrl: item.url,
        sourcePage: item.sourcePage,
        caption: item.caption,
        status: "Source located & downloaded from official site",
        fileSize: buffer.length
      });
      console.log(`Saved ${fileName} (${buffer.length} bytes)`);
    } catch(err) {
      console.error(`Failed ${item.slug}: ${err.message}`);
    }
  }
  await fs.writeFile("scripts/event_company_images_downloaded.json", JSON.stringify(manifest, null, 2));
}

downloadAuthorized();
