import fs from "node:fs/promises";
import path from "node:path";

const targetDir = "public/assets/event-management-companies-in-india/visuals";

// 1. Handwritten Notebook & Floor Plan Visual
const notebookSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650" width="100%" height="100%">
  <defs>
    <filter id="paperShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="3" dy="6" stdDeviation="8" flood-color="#000000" flood-opacity="0.15"/>
    </filter>
  </defs>
  <rect width="1000" height="650" fill="#f5f0eb"/>
  
  <!-- Desk elements -->
  <!-- Pencil -->
  <rect x="80" y="80" width="16" height="420" rx="4" fill="#f59e0b" transform="rotate(-15 80 80)"/>
  <polygon points="77,75 87,40 97,75" fill="#fde68a" transform="rotate(-15 80 80)"/>
  <polygon points="84,52 87,40 90,52" fill="#1e293b" transform="rotate(-15 80 80)"/>
  
  <!-- Notebook Base -->
  <g filter="url(#paperShadow)">
    <rect x="220" y="50" width="700" height="540" rx="8" fill="#fdfbf7" stroke="#e2d9cf" stroke-width="2"/>
    <line x1="570" y1="50" x2="570" y2="590" stroke="#d5c8bb" stroke-width="2" stroke-dasharray="4 4"/>
  </g>
  
  <!-- Left Page: Event Production Blueprint & Floor Plan -->
  <text x="260" y="95" font-family="'Caveat', cursive, 'Segoe Print', sans-serif" font-size="24" font-weight="700" fill="#0f172a">EVENT PRODUCTION MASTER BLUEPRINT</text>
  <text x="260" y="125" font-family="'Caveat', cursive, sans-serif" font-size="16" fill="#64748b">Venue: Convention Hall A (Cap: 1,500 Pax) • Run-of-Show</text>
  
  <!-- Floor Plan Sketch -->
  <rect x="260" y="150" width="270" height="180" fill="#f8fafc" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3 3"/>
  <!-- Stage -->
  <rect x="290" y="165" width="210" height="45" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="395" y="192" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">MAIN LED STAGE (60x24ft)</text>
  
  <!-- Ramps & AV console -->
  <rect x="365" y="300" width="60" height="20" fill="#fee2e2" stroke="#b91c1c" stroke-width="1"/>
  <text x="395" y="314" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#991b1b" text-anchor="middle">CONSOLE / AV</text>
  
  <!-- Seating blocks -->
  <rect x="275" y="225" width="105" height="60" rx="3" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
  <text x="327" y="258" font-family="system-ui, sans-serif" font-size="11" fill="#475569" text-anchor="middle">VIP LOUNGE (A)</text>
  
  <rect x="410" y="225" width="105" height="60" rx="3" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1"/>
  <text x="462" y="258" font-family="system-ui, sans-serif" font-size="11" fill="#475569" text-anchor="middle">DELEGATE ZONE (B)</text>
  
  <!-- Notes on left page -->
  <text x="260" y="365" font-family="'Caveat', cursive, sans-serif" font-size="18" fill="#047857">✓ Sound check: 08:30 AM (Meyer Sound Line Array)</text>
  <text x="260" y="395" font-family="'Caveat', cursive, sans-serif" font-size="18" fill="#047857">✓ Redundant Power Generator: 2x 250 kVA</text>
  <text x="260" y="425" font-family="'Caveat', cursive, sans-serif" font-size="18" fill="#b91c1c">! Strict Security Clearance &amp; Green Room Protocol</text>
  <text x="260" y="455" font-family="'Caveat', cursive, sans-serif" font-size="18" fill="#0f172a">✓ Chief Guest Keynote Speech @ 10:15 AM</text>
  <text x="260" y="485" font-family="'Caveat', cursive, sans-serif" font-size="18" fill="#0f172a">✓ Awards &amp; Gala Dinner: 07:30 PM</text>
  
  <!-- Right Page: Checklists & Sticky Notes -->
  <!-- Yellow sticky note -->
  <g filter="url(#paperShadow)">
    <rect x="610" y="80" width="180" height="150" fill="#fef08a" stroke="#fde047" stroke-width="1" transform="rotate(-3 610 80)"/>
    <text x="625" y="115" font-family="'Caveat', cursive, sans-serif" font-size="16" font-weight="700" fill="#713f12" transform="rotate(-3 610 80)">CRITICAL PERMITS:</text>
    <text x="625" y="140" font-family="'Caveat', cursive, sans-serif" font-size="15" fill="#854d0e" transform="rotate(-3 610 80)">- Police Permission (NOC)</text>
    <text x="625" y="165" font-family="'Caveat', cursive, sans-serif" font-size="15" fill="#854d0e" transform="rotate(-3 610 80)">- PPL / IPRS Licenses</text>
    <text x="625" y="190" font-family="'Caveat', cursive, sans-serif" font-size="15" fill="#854d0e" transform="rotate(-3 610 80)">- Fire &amp; Electrical Safety</text>
    <text x="625" y="215" font-family="'Caveat', cursive, sans-serif" font-size="15" fill="#15803d" font-weight="700" transform="rotate(-3 610 80)">ALL CLEARED ✓</text>
  </g>
  
  <text x="610" y="275" font-family="'Caveat', cursive, sans-serif" font-size="22" font-weight="700" fill="#0f172a">BUDGET &amp; VENDOR DELIVERABLES</text>
  <text x="610" y="310" font-family="'Caveat', cursive, sans-serif" font-size="18" fill="#334155">• Fabrication &amp; Trussing: 100% Complete</text>
  <text x="610" y="340" font-family="'Caveat', cursive, sans-serif" font-size="18" fill="#334155">• Lighting Console: GrandMA3 setup confirmed</text>
  <text x="610" y="370" font-family="'Caveat', cursive, sans-serif" font-size="18" fill="#334155">• Live Multi-Cam Stream: 4K Blackmagic Switcher</text>
  <text x="610" y="400" font-family="'Caveat', cursive, sans-serif" font-size="18" fill="#334155">• Catering Tasting Approved for 1,200 Delegates</text>
  <text x="610" y="430" font-family="'Caveat', cursive, sans-serif" font-size="18" fill="#334155">• Artiste Green Room Concierge Assigned</text>
  <text x="610" y="460" font-family="'Caveat', cursive, sans-serif" font-size="18" fill="#b45309">✎ Handover to Stage Manager: 06:00 AM</text>
  
  <text x="590" y="550" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#94a3b8" letter-spacing="1">VISITBEST EDITORIAL ILLUSTRATION • THE EVENT PLANNER'S DESK</text>
</svg>`;

// 2. Event Management Process Infographic (6 steps)
const processSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" width="100%" height="100%">
  <defs>
    <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#c76027"/>
      <stop offset="100%" stop-color="#0d9488"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="400" fill="#faf8f5" rx="12" stroke="#e2ddd3" stroke-width="2"/>
  
  <text x="600" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="800" fill="#0f172a" text-anchor="middle" letter-spacing="1">6-STAGE EVENT MANAGEMENT WORKFLOW</text>
  <text x="600" y="75" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">From Creative Brief to Post-Event Analytics: Standard Operational Lifecycle in India</text>
  
  <!-- Connecting track line -->
  <line x1="120" y1="180" x2="1080" y2="180" stroke="url(#flowGrad)" stroke-width="4"/>
  
  <!-- 6 Step Cards -->
  <!-- Step 1 -->
  <g transform="translate(100, 110)">
    <circle cx="20" cy="70" r="28" fill="#0f172a" stroke="#ffffff" stroke-width="3"/>
    <text x="20" y="77" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">1</text>
    <rect x="-60" y="115" width="160" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="20" y="140" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a" text-anchor="middle">Brief &amp; Goals</text>
    <text x="20" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Stakeholder alignment</text>
    <text x="20" y="180" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Audience profiling &amp; KPI</text>
  </g>
  
  <!-- Step 2 -->
  <g transform="translate(290, 110)">
    <circle cx="20" cy="70" r="28" fill="#1e293b" stroke="#ffffff" stroke-width="3"/>
    <text x="20" y="77" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">2</text>
    <rect x="-60" y="115" width="160" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="20" y="140" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a" text-anchor="middle">Creative Concept</text>
    <text x="20" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Theme &amp; scenic design</text>
    <text x="20" y="180" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">3D Stage rendering</text>
  </g>
  
  <!-- Step 3 -->
  <g transform="translate(480, 110)">
    <circle cx="20" cy="70" r="28" fill="#c76027" stroke="#ffffff" stroke-width="3"/>
    <text x="20" y="77" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">3</text>
    <rect x="-60" y="115" width="160" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="20" y="140" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#c76027" text-anchor="middle">Budget &amp; Venue</text>
    <text x="20" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Venue contracts &amp; dates</text>
    <text x="20" y="180" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Milestone cost model</text>
  </g>
  
  <!-- Step 4 -->
  <g transform="translate(670, 110)">
    <circle cx="20" cy="70" r="28" fill="#ea580c" stroke="#ffffff" stroke-width="3"/>
    <text x="20" y="77" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">4</text>
    <rect x="-60" y="115" width="160" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="20" y="140" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a" text-anchor="middle">Vendors &amp; Build</text>
    <text x="20" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">AV, lights, LED walls</text>
    <text x="20" y="180" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Statutory permits (PPL/NOC)</text>
  </g>
  
  <!-- Step 5 -->
  <g transform="translate(860, 110)">
    <circle cx="20" cy="70" r="28" fill="#0d9488" stroke="#ffffff" stroke-width="3"/>
    <text x="20" y="77" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">5</text>
    <rect x="-60" y="115" width="160" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="20" y="140" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0d9488" text-anchor="middle">Live Execution</text>
    <text x="20" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Run-of-show cues</text>
    <text x="20" y="180" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Crowd &amp; green room mgmt</text>
  </g>
  
  <!-- Step 6 -->
  <g transform="translate(1050, 110)">
    <circle cx="20" cy="70" r="28" fill="#0284c7" stroke="#ffffff" stroke-width="3"/>
    <text x="20" y="77" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">6</text>
    <rect x="-60" y="115" width="160" height="95" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <text x="20" y="140" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0284c7" text-anchor="middle">Audit &amp; Report</text>
    <text x="20" y="162" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Post-event wrap video</text>
    <text x="20" y="180" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Final vendor reconciliations</text>
  </g>
  
  <text x="600" y="375" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">VISITBEST EDITORIAL FRAMEWORK • ALL STAGES REGULATED BY FORMAL SLA &amp; LEGAL AGREEMENTS</text>
</svg>`;

// 3. Event Budget Distribution Chart
const budgetSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" width="100%" height="100%">
  <rect width="900" height="500" fill="#ffffff" rx="12" stroke="#e2ddd3" stroke-width="2"/>
  
  <text x="450" y="45" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" fill="#0f172a" text-anchor="middle">TYPICAL EVENT BUDGET ALLOCATION IN INDIA</text>
  <text x="450" y="70" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#64748b" text-anchor="middle">Standard Cost Distribution for High-Scale Corporate Conventions &amp; Turnkey Weddings</text>
  
  <!-- Donut Chart slices (Visual representation via grouped segmented paths) -->
  <g transform="translate(260, 260)">
    <!-- 35% Production, Staging & AV -->
    <circle cx="0" cy="0" r="140" fill="none" stroke="#c76027" stroke-width="65" stroke-dasharray="307 880" stroke-dashoffset="0"/>
    <!-- 25% Venue & Catering -->
    <circle cx="0" cy="0" r="140" fill="none" stroke="#0f172a" stroke-width="65" stroke-dasharray="220 880" stroke-dashoffset="-307"/>
    <!-- 15% Décor & Florals -->
    <circle cx="0" cy="0" r="140" fill="none" stroke="#0d9488" stroke-width="65" stroke-dasharray="132 880" stroke-dashoffset="-527"/>
    <!-- 12% Artist, Celebrities & Entertainment -->
    <circle cx="0" cy="0" r="140" fill="none" stroke="#eab308" stroke-width="65" stroke-dasharray="105 880" stroke-dashoffset="-659"/>
    <!-- 8% Management Fee -->
    <circle cx="0" cy="0" r="140" fill="none" stroke="#6366f1" stroke-width="65" stroke-dasharray="70 880" stroke-dashoffset="-764"/>
    <!-- 5% Contingency & Permits -->
    <circle cx="0" cy="0" r="140" fill="none" stroke="#94a3b8" stroke-width="65" stroke-dasharray="46 880" stroke-dashoffset="-834"/>
    
    <text x="0" y="-8" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#0f172a" text-anchor="middle">100%</text>
    <text x="0" y="20" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#64748b" text-anchor="middle">TOTAL BUDGET</text>
  </g>
  
  <!-- Legend Table -->
  <g transform="translate(540, 120)">
    <rect x="0" y="0" width="28" height="28" rx="6" fill="#c76027"/>
    <text x="40" y="16" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Production, Staging &amp; AV (35%)</text>
    <text x="40" y="32" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">Trussing, LED walls, line array, consoles, generators</text>
    
    <rect x="0" y="55" width="28" height="28" rx="6" fill="#0f172a"/>
    <text x="40" y="71" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Venue Rental &amp; Hospitality (25%)</text>
    <text x="40" y="87" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">Convention hall, hotel banquets, catering minimums</text>
    
    <rect x="0" y="110" width="28" height="28" rx="6" fill="#0d9488"/>
    <text x="40" y="126" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Thematic Décor &amp; Fabrication (15%)</text>
    <text x="40" y="142" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">Floral styling, experiential booths, custom props</text>
    
    <rect x="0" y="165" width="28" height="28" rx="6" fill="#eab308"/>
    <text x="40" y="181" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Artistes &amp; Entertainment (12%)</text>
    <text x="40" y="197" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">Celebrity anchors, bands, international acts, riders</text>
    
    <rect x="0" y="220" width="28" height="28" rx="6" fill="#6366f1"/>
    <text x="40" y="236" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Agency Management Fee (8%)</text>
    <text x="40" y="252" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">Turnkey coordination, staffing, project director</text>
    
    <rect x="0" y="275" width="28" height="28" rx="6" fill="#94a3b8"/>
    <text x="40" y="291" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Permits, Insurance &amp; Buffer (5%)</text>
    <text x="40" y="307" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">PPL/IPRS licenses, public liability, force majeure</text>
  </g>
  
  <text x="450" y="475" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">SOURCE: VISITBEST COMMERCIAL EVENT RESEARCH • ESTIMATES VARY BASED ON SCALE &amp; CITY SPECIFICATIONS</text>
</svg>`;

// 4. Pan-India Geographic Network Map
const mapSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="100%" height="100%">
  <rect width="900" height="600" fill="#fdfbf7" rx="12" stroke="#e2ddd3" stroke-width="2"/>
  
  <text x="450" y="45" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" fill="#0f172a" text-anchor="middle">GEOGRAPHIC DISTRIBUTION OF TOP 20 EVENT HUBS</text>
  <text x="450" y="70" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#64748b" text-anchor="middle">Audited Headquarters &amp; Primary Operational Bases Across India</text>
  
  <!-- Map Graphic Area -->
  <g transform="translate(140, 90)">
    <!-- Stylized India outline polygon -->
    <path d="M 240,30 L 280,20 L 320,50 L 330,90 L 380,120 L 460,130 L 470,160 L 420,180 L 410,210 L 440,240 L 410,270 L 350,290 L 320,350 L 280,410 L 240,460 L 220,440 L 200,380 L 160,330 L 140,260 L 110,220 L 150,180 L 190,160 L 220,100 Z" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
    
    <!-- Connection lines connecting main hubs -->
    <line x1="240" y1="120" x2="160" y2="300" stroke="#c76027" stroke-width="2" stroke-dasharray="4 4" opacity="0.6"/>
    <line x1="160" y1="300" x2="220" y2="390" stroke="#c76027" stroke-width="2" stroke-dasharray="4 4" opacity="0.6"/>
    <line x1="240" y1="120" x2="220" y2="390" stroke="#c76027" stroke-width="2" stroke-dasharray="4 4" opacity="0.6"/>
    <line x1="160" y1="300" x2="140" y2="230" stroke="#c76027" stroke-width="2" stroke-dasharray="4 4" opacity="0.6"/>
    <line x1="240" y1="120" x2="180" y2="180" stroke="#c76027" stroke-width="2" stroke-dasharray="4 4" opacity="0.6"/>
    
    <!-- City Hub Pins -->
    <!-- Delhi NCR -->
    <circle cx="240" cy="120" r="10" fill="#c76027"/>
    <circle cx="240" cy="120" r="18" fill="#c76027" opacity="0.2"/>
    <text x="265" y="125" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">Delhi NCR (5 Agencies)</text>
    <text x="265" y="142" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">Touchwood, Inventum, Alchemist, Vibgyor, Showmakerz</text>
    
    <!-- Mumbai -->
    <circle cx="160" cy="300" r="12" fill="#0f172a"/>
    <circle cx="160" cy="300" r="22" fill="#0f172a" opacity="0.2"/>
    <text x="40" y="305" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a" text-anchor="end">Mumbai (9 Agencies)</text>
    <text x="40" y="322" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="end">Wizcraft, Percept, 70 EMG, Shaadi Squad, Motwane...</text>
    
    <!-- Bengaluru -->
    <circle cx="220" cy="390" r="8" fill="#0d9488"/>
    <circle cx="220" cy="390" r="16" fill="#0d9488" opacity="0.2"/>
    <text x="245" y="395" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">Bengaluru (1 Agency)</text>
    <text x="245" y="412" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">LSD Events (Silicon Valley Tech Hub)</text>
    
    <!-- Ahmedabad / Gujarat -->
    <circle cx="140" cy="230" r="8" fill="#2563eb"/>
    <circle cx="140" cy="230" r="15" fill="#2563eb" opacity="0.2"/>
    <text x="25" y="235" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="end">Ahmedabad (1)</text>
    <text x="25" y="250" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="end">AUM Event &amp; Promotions</text>
    
    <!-- Rajasthan (Jaipur & Udaipur) -->
    <circle cx="180" cy="180" r="8" fill="#eab308"/>
    <circle cx="180" cy="180" r="15" fill="#eab308" opacity="0.2"/>
    <text x="75" y="180" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="end">Rajasthan (2)</text>
    <text x="75" y="195" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="end">Shadows (Jaipur), Magic Lights (Udaipur)</text>
  </g>
  
  <text x="450" y="575" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">VISITBEST VERIFIED HUB AUDIT • 100% OF AGENCIES SERVE NATIONWIDE METROS</text>
</svg>`;

async function writeVisuals() {
  await fs.writeFile(path.join(targetDir, "planning-notebook.svg"), notebookSvg);
  await fs.writeFile(path.join(targetDir, "process-infographic.svg"), processSvg);
  await fs.writeFile(path.join(targetDir, "budget-distribution.svg"), budgetSvg);
  await fs.writeFile(path.join(targetDir, "geographic-coverage.svg"), mapSvg);
  console.log("Successfully created all 4 supporting editorial visuals in SVG format!");
}

writeVisuals();
