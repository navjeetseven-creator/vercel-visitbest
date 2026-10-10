import fs from "node:fs/promises";

const list = [
  { slug: 'wizcraft', url: 'https://www.wizcraftworld.com' },
  { slug: 'percept', url: 'https://perceptindia.in' },
  { slug: '70emg', url: 'https://seventyemg.com' },
  { slug: 'touchwood', url: 'https://touchwood.in' },
  { slug: 'aumevent', url: 'https://aumevent.com' },
  { slug: 'lsdevents', url: 'https://lsdevents.in' },
  { slug: 'inventum', url: 'https://inventumevents.com' },
  { slug: 'showhouse', url: 'https://showhouseevents.com' },
  { slug: 'alchemist', url: 'https://www.alchemist.co.in' },
  { slug: 'vibgyor', url: 'https://www.vibgyornet.com' },
  { slug: 'shaadisquad', url: 'https://shaadisquad.com' },
  { slug: 'motwane', url: 'https://www.motwane.co' },
  { slug: 'showmakerz', url: 'https://www.showmakerz.com' },
  { slug: 'marrymeweddings', url: 'https://www.marrymeweddings.in' },
  { slug: 'craftworld', url: 'https://www.craftworldevents.com' },
  { slug: 'iceindia', url: 'https://www.iceindia.in' },
  { slug: 'pegasus', url: 'https://www.pegasusindia.com' },
  { slug: 'shadows', url: 'https://www.shadows.co.in' },
  { slug: 'magiclights', url: 'https://www.magiclights.net' },
  { slug: 'platinumworld', url: 'https://www.platinumworld.net' }
];

async function scan() {
  const manifest = [];
  for (const item of list) {
    try {
      const res = await fetch(item.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        signal: AbortSignal.timeout(6000)
      });
      const html = await res.text();
      const imgMatches = Array.from(html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi));
      const validImages = imgMatches
        .map(m => m[1])
        .filter(src => !src.includes('data:image') && !src.endsWith('.svg') && !src.toLowerCase().includes('logo') && !src.toLowerCase().includes('icon'))
        .map(src => {
          if (src.startsWith('http')) return src;
          if (src.startsWith('//')) return 'https:' + src;
          if (src.startsWith('/')) return new URL(src, item.url).href;
          return new URL(src, item.url).href;
        });

      manifest.push({
        slug: item.slug,
        url: item.url,
        status: res.status,
        imagesFound: validImages.length,
        sampleImages: validImages.slice(0, 5)
      });
      console.log(item.slug, 'Found images:', validImages.length);
    } catch(err) {
      manifest.push({
        slug: item.slug,
        url: item.url,
        status: 'error',
        error: err.message,
        imagesFound: 0,
        sampleImages: []
      });
      console.log(item.slug, 'FAILED:', err.message);
    }
  }
  await fs.writeFile('scripts/scanned_company_images.json', JSON.stringify(manifest, null, 2));
  console.log('Saved to scripts/scanned_company_images.json');
}

scan();
