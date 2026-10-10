import fs from "node:fs/promises";
import path from "node:path";

const targetDir = "public/assets/event-management-companies-in-india/companies";

const profiles = [
  { slug: "wizcraft", name: "Wizcraft International", category: "Mega Entertainment & Global Festivals", color1: "#1e1b4b", color2: "#4338ca", accent: "#fbbf24", icon: "👑" },
  { slug: "percept", name: "Percept Limited", category: "Experiential Marketing & Sunburn IPs", color1: "#881337", color2: "#be123c", accent: "#f43f5e", icon: "🔥" },
  { slug: "70emg", name: "70 EMG", category: "Luxury Experiential & Automotive Festivals", color1: "#18181b", color2: "#27272a", accent: "#ea580c", icon: "🏍️" },
  { slug: "touchwood", name: "Touchwood Entertainment", category: "NSE-Listed Luxury Weddings & Royal Destination Galas", color1: "#064e3b", color2: "#047857", accent: "#10b981", icon: "🏛️" },
  { slug: "aumevent", name: "AUM Event & Promotions", category: "Corporate Summits, Govt Conclaves & Exhibitions", color1: "#1e3a8a", color2: "#2563eb", accent: "#38bdf8", icon: "🏢" },
  { slug: "lsdevents", name: "LSD Events", category: "Tech Conferences, Hackathons & Corporate Offsites", color1: "#312e81", color2: "#4f46e5", accent: "#818cf8", icon: "💻" },
  { slug: "inventum", name: "Inventum Events", category: "Exhibition Pavilions & Turnkey Expo Fabrication", color1: "#0f172a", color2: "#334155", accent: "#f59e0b", icon: "🏗️" },
  { slug: "showhouse", name: "Showhouse Events", category: "Auto Expo Reveals & Enterprise Corporate Galas", color1: "#450a0a", color2: "#991b1b", accent: "#ef4444", icon: "🚗" },
  { slug: "alchemist", name: "Alchemist Live", category: "Experiential Youth IPs & Brand Storytelling", color1: "#2e1065", color2: "#6b21a8", accent: "#c084fc", icon: "🎨" },
  { slug: "vibgyor", name: "Vibgyor Brand Experiences", category: "B2B Brand Activations & Nationwide Roadshows", color1: "#14532d", color2: "#16a34a", accent: "#4ade80", icon: "🌐" },
  { slug: "shaadisquad", name: "Shaadi Squad", category: "Celebrity & Boutique Luxury Weddings", color1: "#701a75", color2: "#a21caf", accent: "#f472b6", icon: "💍" },
  { slug: "motwane", name: "Motwane Entertainment & Luxury Weddings", category: "Ultra-High-Net-Worth Royal Palaces & Overseas Buyouts", color1: "#3b0764", color2: "#7e22ce", accent: "#e879f9", icon: "🏰" },
  { slug: "showmakerz", name: "Showmakerz Event Management", category: "Corporate Annual Days & Employee Conclaves", color1: "#083344", color2: "#0e7490", accent: "#22d3ee", icon: "🎭" },
  { slug: "marrymeweddings", name: "Marry Me - The Wedding Planners", category: "NRI & Destination Coastal Weddings", color1: "#831843", color2: "#db2777", accent: "#f472b6", icon: "🌺" },
  { slug: "craftworld", name: "Craftworld Events", category: "Corporate Seminars, AGMs & Hybrid Conferences", color1: "#1e293b", color2: "#475569", accent: "#38bdf8", icon: "📊" },
  { slug: "iceindia", name: "ICE India", category: "Healthcare Congresses & Pharmaceutical Summits", color1: "#042f2e", color2: "#0d9488", accent: "#2dd4bf", icon: "🩺" },
  { slug: "pegasus", name: "Pegasus Events", category: "Banking, Financial & Enterprise Leadership Meets", color1: "#1c1917", color2: "#44403c", accent: "#e0531c", icon: "📈" },
  { slug: "shadows", name: "Shadows Entertainment", category: "Royal Rajasthan Forts & Heritage Folk Curation", color1: "#451a03", color2: "#b45309", accent: "#f59e0b", icon: "🪕" },
  { slug: "magiclights", name: "Magic Lights Wedding Planners", category: "Udaipur Lake Palaces & Destination Weddings", color1: "#0c4a6e", color2: "#0284c7", accent: "#38bdf8", icon: "⛵" },
  { slug: "platinumworld", name: "Platinum World Grp", category: "Global Ultra-Luxury MICE & Private Jet Retreats", color1: "#1e1b4b", color2: "#3730a3", accent: "#a5b4fc", icon: "✈️" }
];

async function generateCards() {
  for (const p of profiles) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
      <defs>
        <linearGradient id="cardGrad_${p.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${p.color1}"/>
          <stop offset="100%" stop-color="${p.color2}"/>
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#cardGrad_${p.slug})"/>
      <circle cx="700" cy="80" r="140" fill="${p.accent}" opacity="0.1"/>
      <circle cx="100" cy="380" r="180" fill="${p.accent}" opacity="0.08"/>
      
      <!-- Frame border -->
      <rect x="25" y="25" width="750" height="400" rx="12" fill="none" stroke="${p.accent}" stroke-width="2" opacity="0.4"/>
      
      <!-- Icon badge -->
      <circle cx="95" cy="95" r="45" fill="#000000" opacity="0.3"/>
      <circle cx="95" cy="95" r="43" fill="${p.accent}" opacity="0.2"/>
      <text x="95" y="108" font-size="42" text-anchor="middle">${p.icon}</text>
      
      <!-- Category Tag -->
      <rect x="160" y="70" width="460" height="32" rx="16" fill="${p.accent}" opacity="0.2"/>
      <text x="180" y="92" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="${p.accent}" letter-spacing="1">${p.category.toUpperCase()}</text>
      
      <!-- Title -->
      <text x="60" y="210" font-family="system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="36" font-weight="800" fill="#ffffff" letter-spacing="0.5">${p.name}</text>
      
      <!-- Subtitle badge -->
      <text x="60" y="260" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="500" fill="#e2e8f0">Official Portfolio Showcase • VisitBest Verified Dossier</text>
      
      <!-- Bottom Strip -->
      <line x1="60" y1="310" x2="740" y2="310" stroke="#ffffff" stroke-width="1" opacity="0.2"/>
      
      <text x="60" y="360" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="600" fill="${p.accent}">✓ VERIFIED OFFICIAL ENTITY</text>
      <text x="60" y="388" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="400" fill="#94a3b8">Audited operational history, licensed corporate standing &amp; active event leadership</text>
      
      <rect x="620" y="340" width="120" height="38" rx="6" fill="${p.accent}"/>
      <text x="680" y="364" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#000000" text-anchor="middle">VIEW WORK ↗</text>
    </svg>`;
    
    await fs.writeFile(path.join(targetDir, `${p.slug}-dossier.svg`), svg);
  }
  console.log(`Generated ${profiles.length} company dossier artwork files`);
}

generateCards();
