import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "most-beautiful-bollywood-actresses");
await fs.mkdir(outDir, { recursive: true });

// Top 30 Actresses Dataset
const actresses = [
  { rank: 1, name: "Deepika Padukone", dob: "January 5, 1986", birthplace: "Copenhagen, Denmark", debut: "Om Shanti Om (2007)", bestMovie: "Piku (2015)", style: "Timeless Elegance & Global Haute Couture", iconicRole: "Shantipriya / Sandy in Om Shanti Om, Mastani, Rani Padmavati", appeal: "Statuesque elegance, luminous expressive eyes, infectious dimpled smile, and effortless transition from classic royal Indian sarees to international red-carpet silhouettes.", global: "Global ambassador for Louis Vuitton, Cartier, BAFTA presenter, Academy Awards presenter." },
  { rank: 2, name: "Aishwarya Rai Bachchan", dob: "November 1, 1973", birthplace: "Mangalore, Karnataka, India", debut: "Iruvar (1997) / Aur Pyaar Ho Gaya (1997)", bestMovie: "Devdas (2002)", style: "Timeless Classical Royalty", iconicRole: "Paro in Devdas, Nandini in Hum Dil De Chuke Sanam, Jodhaa Bai", appeal: "Globally celebrated blue-green eyes, immaculate classical facial symmetry, and graceful Kathak poise that has defined Indian beauty internationally for three decades.", global: "Miss World 1994, 20+ years as L'Oréal global ambassador at Cannes, Padma Shri awardee." },
  { rank: 3, name: "Alia Bhatt", dob: "March 15, 1993", birthplace: "Mumbai, Maharashtra, India", debut: "Student of the Year (2012)", bestMovie: "Gangubai Kathiawadi (2022)", style: "Contemporary Fresh & Minimalist Chic", iconicRole: "Gangubai in Gangubai Kathiawadi, Sehmat in Raazi, Safeena in Gully Boy", appeal: "Unfiltered natural charm, expressive emotive vulnerability, radiant dimples, and modern minimalist fashion versatility.", global: "First Indian Global Ambassador for Gucci, Met Gala headline appearance, Hollywood debut in Heart of Stone." },
  { rank: 4, name: "Katrina Kaif", dob: "July 16, 1983", birthplace: "Hong Kong", debut: "Boom (2003) / Maine Pyaar Kyun Kiya (2005)", bestMovie: "Zindagi Na Milegi Dobara (2011)", style: "Modern Glamour & Athletic Sophistication", iconicRole: "Laila in ZNMD, Zoya in Tiger franchise, Babita Kumari in Zero", appeal: "Chiseled athletic physique, radiant porcelain complexion, magnetic dance screen presence, and chic contemporary styling.", global: "Founder of beauty brand Kay Beauty, international brand icon for Uniqlo and Etihad." },
  { rank: 5, name: "Priyanka Chopra Jonas", dob: "July 18, 1982", birthplace: "Jamshedpur, Jharkhand, India", debut: "The Hero: Love Story of a Spy (2003)", bestMovie: "Barfi! (2012)", style: "Fierce Global Power Glamour", iconicRole: "Jhilmil in Barfi!, Meghna Mathur in Fashion, Kashibai in Bajirao Mastani", appeal: "Commanding charisma, full expressive features, versatile vocal timbre, and boundary-pushing red carpet daring.", global: "Miss World 2000, National Film Award winner, global icon headline series Citadel, Bulgari ambassador." },
  { rank: 6, name: "Kiara Advani", dob: "July 31, 1991", birthplace: "Mumbai, Maharashtra, India", debut: "Fugly (2014) / M.S. Dhoni (2016)", bestMovie: "Shershaah (2021)", style: "Radiant Grace & Contemporary Femininity", iconicRole: "Dimple Cheema in Shershaah, Preeti in Kabir Singh, Katha in Satyaprem Ki Katha", appeal: "Sweet natural warmth, luminous smile, poised bridal and festive elegance that makes her India's beloved screen romantic lead.", global: "Represented India at the Red Sea International Film Festival's Women in Cinema gala." },
  { rank: 7, name: "Shraddha Kapoor", dob: "March 3, 1987", birthplace: "Mumbai, Maharashtra, India", debut: "Teen Patti (2010) / Aashiqui 2 (2013)", bestMovie: "Aashiqui 2 (2013)", style: "Girl-Next-Door Radiance & Effortless Charm", iconicRole: "Arohi in Aashiqui 2, Stree in Stree & Stree 2", appeal: "Soulful hazel eyes, authentic approachable warmth, melodic singing talent, and record-breaking box-office pull.", global: "One of the most-followed Indian celebrities on Instagram with over 94 million followers." },
  { rank: 8, name: "Kriti Sanon", dob: "July 26, 1990", birthplace: "New Delhi, India", debut: "Heropanti (2014)", bestMovie: "Mimi (2021)", style: "Statuesque Runway Poise & Sartorial Edge", iconicRole: "Mimi in Mimi, Bitti in Bareilly Ki Barfi, Sifra in Teri Baaton Mein", appeal: "Tall model proportions (178 cm), razor-sharp bone structure, high-fashion experimental courage, and National Award-winning craft.", global: "National Film Award for Best Actress; founder of luxury skincare brand Hyphen." },
  { rank: 9, name: "Disha Patani", dob: "June 13, 1992", birthplace: "Bareilly, Uttar Pradesh, India", debut: "M.S. Dhoni: The Untold Story (2016)", bestMovie: "Malang (2020)", style: "Athletic Siren & Fitness Icon", iconicRole: "Priyanka in M.S. Dhoni, Sara in Malang, Roxie in Kalki 2898 AD", appeal: "Flawless athletic fitness, martial arts flexibility, youthful glow, and sultry modern swimwear and streetwear aesthetics.", global: "National ambassador for Calvin Klein, major social media youth phenomenon." },
  { rank: 10, name: "Triptii Dimri", dob: "February 23, 1994", birthplace: "Rudraprayag, Uttarakhand, India", debut: "Poster Boys (2017) / Laila Majnu (2018)", bestMovie: "Bulbbul (2020) / Qala (2022)", style: "Ethereal Mystique & Smoldering Screen Gravity", iconicRole: "Bulbbul in Bulbbul, Qala Manjushree in Qala, Zoya in Animal", appeal: "Haunting soulful eyes, classic vintage Indian beauty, profound dramatic subtlety, and undeniable modern screen magnetism.", global: "Forbes Asia 30 Under 30 honoree; India's fastest-rising box-office phenomenon." },
  { rank: 11, name: "Kareena Kapoor Khan", dob: "September 21, 1980", birthplace: "Mumbai, Maharashtra, India", debut: "Refugee (2000)", bestMovie: "Jab We Met (2007)", style: "Royal Pout & Unapologetic Star Power", iconicRole: "Geet in Jab We Met, Poo in Kabhi Khushi Kabhie Gham, Mahi in Heroine", appeal: "Iconic bone structure, incandescent natural skin, sharp comic timing, and two decades of setting fashion trends.", global: "UNICEF National Ambassador, iconic Bollywood royalty." },
  { rank: 12, name: "Anushka Sharma", dob: "May 1, 1988", birthplace: "Ayodhya, Uttar Pradesh, India", debut: "Rab Ne Bana Di Jodi (2008)", bestMovie: "Band Baaja Baaraat (2010) / NH10", style: "Breezy High-Fashion Simplicity", iconicRole: "Taani in RNBDJ, Shruti in BBB, Alizeh in Ae Dil Hai Mushkil", appeal: "Glowing porcelain complexion, vibrant vivacious energy, impeccable airport tailoring, and acclaimed producer sensibility.", global: "Co-founder of Clean Slate Filmz, prominent international luxury endorsements." },
  { rank: 13, name: "Madhuri Dixit", dob: "May 15, 1967", birthplace: "Mumbai, Maharashtra, India", debut: "Abodh (1984) / Tezaab (1988)", bestMovie: "Hum Aapke Hain Koun..! (1994) / Devdas", style: "The Million-Dollar Smile & Kathak Royalty", iconicRole: "Mohini in Tezaab, Nisha in HAHK, Chandramukhi in Devdas", appeal: "The gold standard of classical Indian dance expression, unmatched radiant smile, and timeless graceful dignity.", global: "Padma Shri awardee, historic cultural icon of Indian cinema." },
  { rank: 14, name: "Jacqueline Fernandez", dob: "August 11, 1985", birthplace: "Manama, Bahrain", debut: "Aladin (2009)", bestMovie: "Kick (2014)", style: "High-Octane Glamour & Exotic Charm", iconicRole: "Shaina in Kick, Jessica in Race 3", appeal: "Miss Universe Sri Lanka 2006, infectious joyful smile, incredible dance flexibility, and high-fashion red carpet flair.", global: "International beauty campaigns and animal welfare advocacy." },
  { rank: 15, name: "Tamannaah Bhatia", dob: "December 21, 1989", birthplace: "Mumbai, Maharashtra, India", debut: "Chand Sa Roshan Chehra (2005) / Baahubali", bestMovie: "Baahubali: The Beginning (2015)", style: "Milky Elegance & Dynamic Pan-India Appeal", iconicRole: "Avanthika in Baahubali, Keerthi in F2", appeal: "Luminous fair complexion, sensational dance agility, and effortless command across Hindi, Telugu, and Tamil cinema.", global: "Global ambassador for Shiseido, Cannes Film Festival red carpet regular." },
  { rank: 16, name: "Rashmika Mandanna", dob: "April 5, 1996", birthplace: "Virajpet, Karnataka, India", debut: "Kirik Party (2016) / Goodbye (2022)", bestMovie: "Pushpa: The Rise (2021) / Animal", style: "The National Crush: Sunshine & Vivacity", iconicRole: "Srivalli in Pushpa, Geetanjali in Animal", appeal: "Infectious joyful expressions, relatable warmth, and dominant pan-India box-office presence.", global: "First Indian ambassador for luxury Italian fashion house Onitsuka Tiger." },
  { rank: 17, name: "Janhvi Kapoor", dob: "March 6, 1997", birthplace: "Mumbai, Maharashtra, India", debut: "Dhadak (2018)", bestMovie: "Gunjan Saxena (2020) / Mili", style: "Sultry Siren & Classic Indian Draped Glamour", iconicRole: "Gunjan in Gunjan Saxena, Jerry in Good Luck Jerry", appeal: "Doe-like expressive eyes reminiscent of her mother Sridevi, hour-glass traditional silhouette, and bold fashion choices.", global: "Front-row regular at international fashion weeks and couture galas." },
  { rank: 18, name: "Sara Ali Khan", dob: "August 12, 1995", birthplace: "Mumbai, Maharashtra, India", debut: "Kedarnath (2018)", bestMovie: "Kedarnath (2018) / Atrangi Re", style: "Royal Pataudi Heritage & Breezy Chikankari", iconicRole: "Mukku in Kedarnath, Rinku in Atrangi Re", appeal: "Royal lineage, sharp intellect (Columbia University graduate), self-deprecating wit, and stunning traditional Indian bridal elegance.", global: "Cannes Film Festival red carpet debut in traditional Indian lehenga." },
  { rank: 19, name: "Mrunal Thakur", dob: "August 1, 1992", birthplace: "Dhule, Maharashtra, India", debut: "Love Sonia (2018) / Super 30", bestMovie: "Sita Ramam (2022)", style: "Poetic Vintage Romance & Saree Perfection", iconicRole: "Sita Mahalakshmi in Sita Ramam, Tara in Hi Nanna", appeal: "Regal vintage Indian facial bone structure, expressive teardrop eyes, and profound romantic sincerity on screen.", global: "Cannes Film Festival red-carpet debut celebrated for custom Indian couture." },
  { rank: 20, name: "Aditi Rao Hydari", dob: "October 28, 1986", birthplace: "Hyderabad, Telangana, India", debut: "Yeh Saali Zindagi (2011) / Padmaavat", bestMovie: "Padmaavat (2018) / Heeramandi (2024)", style: "Aristocratic Royal Heirloom Grace", iconicRole: "Mehrunisa in Padmaavat, Bibbojaan in Heeramandi", appeal: "Dual royal lineage, porcelain ethereal skin, delicate classical features, and mesmerizing Kathak grace ('Gajagamini walk').", global: "L'Oréal Paris ambassador at the Cannes Film Festival." },
  { rank: 21, name: "Sanya Malhotra", dob: "February 25, 1992", birthplace: "Delhi, India", debut: "Dangal (2016)", bestMovie: "Pagglait (2021) / Dangal", style: "Authentic Curly-Haired Chic & Earthy Grace", iconicRole: "Babita Phogat in Dangal, Sandhya in Pagglait", appeal: "Gorgeous natural curls, athletic dancing mastery, radiant expressive face, and fearless character choices.", global: "Critically acclaimed festival screenings from Sundance to TIFF." },
  { rank: 22, name: "Taapsee Pannu", dob: "August 1, 1987", birthplace: "New Delhi, India", debut: "Chashme Baddoor (2013)", bestMovie: "Thappad (2020) / Pink", style: "Unconventional Strength & Modern Saree Edge", iconicRole: "Amrita in Thappad, Minal in Pink, Rumi in Manmarziyaan", appeal: "Fierce intelligent screen presence, athletic physique, and pioneering contemporary drape styling.", global: "Leading figure in progressive women-centric Indian cinema." },
  { rank: 23, name: "Vaani Kapoor", dob: "August 23, 1988", birthplace: "Delhi, India", debut: "Shuddh Desi Romance (2013)", bestMovie: "Chandigarh Kare Aashiqui (2021)", style: "Sculpted Runway Glamour & High Slits", iconicRole: "Tara in SDR, Maanvi in Chandigarh Kare Aashiqui", appeal: "Endless model height, razor-sharp jawline, sensational dance stamina, and high-fashion red carpet swagger.", global: "Top muse for leading Indian couture designers including Manish Malhotra." },
  { rank: 24, name: "Sonam Kapoor", dob: "June 9, 1985", birthplace: "Mumbai, Maharashtra, India", debut: "Saawariya (2007)", bestMovie: "Neerja (2016)", style: "The Undisputed Fashion Icon of Modern India", iconicRole: "Neerja Bhanot in Neerja, Zoya in Raanjhanaa", appeal: "Fearless sartorial avant-garde styling, towering aristocrat height, and pioneering international fashion alliances.", global: "Regular fixture at Paris Haute Couture Week, Cannes, and Business of Fashion 500." },
  { rank: 25, name: "Bhumi Pednekar", dob: "July 18, 1989", birthplace: "Mumbai, Maharashtra, India", debut: "Dum Laga Ke Haisha (2015)", bestMovie: "Dum Laga Ke Haisha (2015) / Badhaai Do", style: "Bold Experimental Glamour & Earthy Power", iconicRole: "Sandhya in DLKH, Sumi in Badhaai Do", appeal: "Dramatic chameleon transformations, deeply expressive Indian features, and climate activism advocacy.", global: "UNDP National Advocate for Sustainable Development Goals." },
  { rank: 26, name: "Parineeti Chopra", dob: "October 22, 1988", birthplace: "Ambala, Haryana, India", debut: "Ladies vs Ricky Bahl (2011)", bestMovie: "Hasee Toh Phasee (2014) / Amar Singh Chamkila (2024)", style: "Spunk, Intellect & Classic Punjabi Glow", iconicRole: "Meeta in Hasee Toh Phasee, Amarjot in Chamkila", appeal: "Triple honours degree from Manchester Business School, soulful playback singing voice, and radiant natural warmth.", global: "National Tourism Ambassador, critically lauded musical performances." },
  { rank: 27, name: "Pooja Hegde", dob: "October 13, 1990", birthplace: "Mumbai, Maharashtra, India", debut: "Mohenjo Daro (2016)", bestMovie: "Ala Vaikunthapurramuloo (2020)", style: "Statuesque Pan-India Elegance", iconicRole: "Chaani in Mohenjo Daro, Amulya in Ala Vaikunthapurramuloo", appeal: "Miss Universe India 2010 runner-up, tall elegant frame, stunning smile, and effortless multilingual stardom.", global: "Cannes Film Festival red carpet honoree." },
  { rank: 28, name: "Ananya Panday", dob: "October 30, 1998", birthplace: "Mumbai, Maharashtra, India", debut: "Student of the Year 2 (2019)", bestMovie: "Kho Gaye Hum Kahan (2023) / Gehraiyaan", style: "Gen-Z Trendsetter & Cool Minimalist", iconicRole: "Tia in Gehraiyaan, Ahana in Kho Gaye Hum Kahan, Bella in Call Me Bae", appeal: "Long model limbs, fresh youthful aesthetic, chic pastel styling, and rapid artistic maturity in contemporary urban cinema.", global: "Youth ambassador for major global lifestyle labels and Paris Fashion Week attendee." },
  { rank: 29, name: "Yami Gautam", dob: "November 28, 1988", birthplace: "Bilaspur, Himachal Pradesh, India", debut: "Vicky Donor (2012)", bestMovie: "A Thursday (2022) / Article 370 (2024)", style: "Pristine Pahadi Glow & Steely Sophistication", iconicRole: "Ashima in Vicky Donor, Naina in A Thursday, Zooni in Article 370", appeal: "Crystal-clear radiant skin, striking light brown eyes, and commanding dramatic intensity in high-stakes thrillers.", global: "Leading force in commercially lucrative, content-driven modern Hindi cinema." },
  { rank: 30, name: "Rani Mukerji", dob: "March 21, 1978", birthplace: "Mumbai, Maharashtra, India", debut: "Raja Ki Aayegi Baraat (1996)", bestMovie: "Black (2005) / Hum Tum", style: "Husky-Voiced Bengal Empress & Traditional Sabyasachi Grace", iconicRole: "Michelle in Black, Rhea in Hum Tum, Shivani Shivaji Roy in Mardaani", appeal: "Captivating hazel-green eyes, iconic husky voice, emotional mastery, and breathtaking traditional saree styling.", global: "Multiple Filmfare Best Actress record holder and Indian cinema cultural ambassador." }
];

function buildContent() {
  const sections = [];

  // 1. Hero
  sections.push(`
<section id="introduction">
  <p class="scope"><strong>2026 Editorial Ranking &amp; Cultural Guide:</strong> Evaluating Hindi cinema's 30 most captivating leading ladies across screen presence, fashion influence, classical grace, international visibility, and career impact.</p>
  <p>Bollywood has produced generations of actresses known not only for their breathtaking beauty, but also for their commanding screen presence, trendsetting fashion influence, extraordinary acting craft, and deep cultural resonance. From timeless global icons like <strong>Aishwarya Rai Bachchan</strong> and <strong>Madhuri Dixit</strong> to contemporary reigning queens like <strong>Deepika Padukone</strong>, <strong>Alia Bhatt</strong>, <strong>Kiara Advani</strong>, and <strong>Triptii Dimri</strong>, beauty in Hindi cinema manifests across diverse aesthetic forms.</p>
  <p><em>Editor's Note:</em> Beauty is inherently subjective. This ranking is an independent editorial entertainment assessment that synthesizes screen magnetism, red-carpet style, public recognition, award accolades, and contemporary cultural impact. It is not an objective measurement of physical appearance.</p>
</section>
`);

  // 2. Quick Answer Top 10 Table
  sections.push(`
<section id="quick-answer-top-10">
  <h2>Quick Answer: Top 10 Most Beautiful Bollywood Actresses at a Glance</h2>
  <div class="table-scroll">
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Actress</th>
          <th>Known For</th>
          <th>Signature Style Strength</th>
          <th>Best Movie to Start</th>
        </tr>
      </thead>
      <tbody>
        ${actresses.slice(0, 10).map(a => `
        <tr>
          <td><strong>#${a.rank}</strong></td>
          <td><a href="#actress-${a.rank}"><strong>${a.name}</strong></a></td>
          <td>${a.bestMovie.split(" (")[0]}, ${a.debut.split(" (")[0]}</td>
          <td>${a.style.split(" & ")[0]}</td>
          <td><em>${a.bestMovie}</em></td>
        </tr>`).join("")}
      </tbody>
    </table>
  </div>
</section>
`);

  // 3. Methodology & Ranking Criteria
  sections.push(`
<section id="ranking-methodology">
  <h2>How We Ranked the Actresses: The 8-Pillar Scoring Framework</h2>
  <p>To ensure a transparent, multi-dimensional assessment, each actress was evaluated across eight weighted factors:</p>
  <div class="table-scroll">
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Evaluation Factor</th>
          <th>Weight</th>
          <th>Key Criteria &amp; Observable Elements</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Screen Presence &amp; Gravitas</strong></td><td>20%</td><td>Commanding aura on 70mm cinema screens, eye acting, and dramatic intensity.</td></tr>
        <tr><td><strong>Style &amp; Fashion Influence</strong></td><td>15%</td><td>Red carpet leadership, runway impact, saree drapes, and high-fashion versatility.</td></tr>
        <tr><td><strong>Public Recognition &amp; Fan Appeal</strong></td><td>15%</td><td>Box office pull, social media engagement, and widespread popularity across demographics.</td></tr>
        <tr><td><strong>Career &amp; Cultural Impact</strong></td><td>15%</td><td>Defining memorable characters that influenced Indian society and popular culture.</td></tr>
        <tr><td><strong>On-Screen Romantic &amp; Emotional Chemistry</strong></td><td>10%</td><td>Emotional generosity and believable romantic synergy with diverse co-stars.</td></tr>
        <tr><td><strong>International Recognition</strong></td><td>10%</td><td>Global luxury ambassadorships (Cannes, Met Gala, European fashion houses).</td></tr>
        <tr><td><strong>Longevity &amp; Grace Across Eras</strong></td><td>10%</td><td>Sustained relevance, evolution of personal style, and enduring public admiration.</td></tr>
        <tr><td><strong>Current 2026 Relevance</strong></td><td>5%</td><td>Recent critical or commercial successes and active cultural presence.</td></tr>
      </tbody>
    </table>
  </div>
</section>
`);

  // 4. Individual Profiles for ALL 30 Actresses
  sections.push(`
<section id="top-30-profiles">
  <h2>Top 30 Most Beautiful Bollywood Actresses: Detailed Profiles</h2>
  ${actresses.map(a => `
  <div id="actress-${a.rank}" style="border:1px solid var(--line); border-radius:14px; padding:1.8rem; margin:2rem 0; background:#fff;">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; border-bottom:1px solid #f0f0ef; padding-bottom:0.8rem;">
      <div>
        <span class="eyebrow">Rank #${a.rank} • Bollywood Icon</span>
        <h3 style="margin:0.2rem 0 0; font-size:1.75rem;">${a.name}</h3>
      </div>
      <div>
        <span class="pill" style="background:var(--cream); color:var(--accent-dark); font-weight:800; border-color:var(--accent);">${a.style.split(" & ")[0]}</span>
      </div>
    </div>

    <h4>Quick Facts &amp; Career Highlights</h4>
    <div class="table-scroll">
      <table class="comparison-table" style="font-size:0.88rem;">
        <tbody>
          <tr><td><strong>Date of Birth</strong></td><td>${a.dob}</td><td><strong>Birthplace</strong></td><td>${a.birthplace}</td></tr>
          <tr><td><strong>Bollywood Debut</strong></td><td>${a.debut}</td><td><strong>Essential First Watch</strong></td><td><em>${a.bestMovie}</em></td></tr>
          <tr><td><strong>Signature Style</strong></td><td colspan="3">${a.style}</td></tr>
          <tr><td><strong>Iconic Roles</strong></td><td colspan="3">${a.iconicRole}</td></tr>
        </tbody>
      </table>
    </div>

    <h4>Why She Stands Out in Hindi Cinema</h4>
    <p>${a.appeal}</p>

    <h4>Fashion, Red Carpet &amp; Global Impact</h4>
    <p>${a.global}</p>

    <p style="font-size:0.88rem; color:var(--muted); background:#fdfdfd; padding:0.8rem; border-radius:8px; border-left:3px solid var(--line);">
      <strong>Where to Start Watching:</strong> For new viewers, start with <em>${a.bestMovie}</em> to appreciate both her screen presence and acting talent.
    </p>
  </div>
  `).join("")}
</section>
`);

  // 5. Generational Breakdowns
  sections.push(`
<section id="generational-breakdowns">
  <h2>Bollywood Beauty Icons by Generation</h2>
  <ul>
    <li><strong>The 1990s Golden Era:</strong> Aishwarya Rai Bachchan, Madhuri Dixit, Rani Mukerji, Karisma Kapoor. Defined by opulent handloom sarees, expressive classical dance, and cinematic melodrama.</li>
    <li><strong>The 2000s Global Glamour Wave:</strong> Kareena Kapoor Khan, Katrina Kaif, Priyanka Chopra Jonas, Anushka Sharma. Blended international high fashion, zero-size trends, and modern athletic empowerment.</li>
    <li><strong>The 2010s Nuanced Powerhouses:</strong> Deepika Padukone, Alia Bhatt, Shraddha Kapoor, Kriti Sanon, Sonam Kapoor. Championed author-backed female characters, red-carpet daring, and international luxury representation.</li>
    <li><strong>The 2020s New Wave:</strong> Kiara Advani, Triptii Dimri, Rashmika Mandanna, Janhvi Kapoor, Mrunal Thakur. Celebrate vintage Indian classical aesthetics, diverse regional roots, and digital authenticity.</li>
  </ul>
</section>
`);

  // 6. Style Aesthetics: Saree, Red Carpet, Traditional
  sections.push(`
<section id="style-aesthetics">
  <h2>Style Archetypes: Sarees, Cannes &amp; Red-Carpet Magic</h2>
  <div class="table-scroll">
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Style Category</th>
          <th>Iconic Leading Actresses</th>
          <th>What Defines Their Look</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Timeless Saree Grace</strong></td><td>Deepika Padukone, Vidya Balan, Rani Mukerji</td><td>Regal Kanjeevarams, Sabyasachi silks, high-neck blouses, and temple jewelry.</td></tr>
        <tr><td><strong>Cannes Red Carpet Royalty</strong></td><td>Aishwarya Rai Bachchan, Deepika Padukone, Sonam Kapoor</td><td>Architectural ballgowns, custom capes, and fearless international couture.</td></tr>
        <tr><td><strong>Aristocratic Royal Heritage</strong></td><td>Aditi Rao Hydari, Sara Ali Khan</td><td>Delicate chikankari, heirloom shararas, and understated rawatan pearls.</td></tr>
        <tr><td><strong>Modern Minimalist Chic</strong></td><td>Alia Bhatt, Anushka Sharma</td><td>Monochrome clean tailoring, fresh dewy makeup, and effortless airport looks.</td></tr>
        <tr><td><strong>Athletic Siren &amp; Glamour</strong></td><td>Katrina Kaif, Disha Patani, Vaani Kapoor</td><td>Body-skimming gowns, high-slit silhouettes, and sculpted athletic poise.</td></tr>
      </tbody>
    </table>
  </div>
</section>
`);

  // 7. FAQs
  sections.push(`
<section id="frequently-asked-questions" class="content-section faq">
  <h2>Frequently Asked Questions About Bollywood Actresses</h2>
  
  <details>
    <summary>1. Who is considered the most beautiful Bollywood actress in 2026?</summary>
    <p>On VisitBest's comprehensive 2026 editorial ranking, <strong>Deepika Padukone</strong> holds the #1 position due to her combination of statuesque grace, iconic roles (<em>Piku</em>, <em>Padmaavat</em>), and unprecedented global fashion ambassadorships with Louis Vuitton and Cartier.</p>
  </details>

  <details>
    <summary>2. Is Aishwarya Rai Bachchan still considered one of the most beautiful women in the world?</summary>
    <p>Yes. Over three decades after winning Miss World in 1994, Aishwarya Rai Bachchan remains universally celebrated for her timeless classical facial symmetry, mesmerizing eyes, and enduring international red-carpet presence at the Cannes Film Festival.</p>
  </details>

  <details>
    <summary>3. Which Bollywood actresses have won major international beauty pageants?</summary>
    <p>Notable Miss World winners include Aishwarya Rai (1994) and Priyanka Chopra (2000). Sushmita Sen and Lara Dutta won Miss Universe in 1994 and 2000, respectively, while Dia Mirza won Miss Asia Pacific in 2000.</p>
  </details>

  <details>
    <summary>4. What is the difference between Bollywood actresses and Indian actresses?</summary>
    <p>Bollywood specifically refers to the Hindi-language film industry based in Mumbai. Indian cinema encompasses multiple vibrant regional film industries including Telugu (Tollywood), Tamil (Kollywood), Malayalam (Mollywood), and Kannada (Sandalwood). Many stars (such as Rashmika Mandanna and Tamannaah Bhatia) work successfully across multiple industries as pan-Indian stars.</p>
  </details>

  <details>
    <summary>5. Who is the most beautiful new-generation Bollywood actress?</summary>
    <p><strong>Triptii Dimri</strong> is widely celebrated as the breakthrough sensation of the current decade, winning widespread acclaim for her haunting vintage beauty in <em>Bulbbul</em> and <em>Qala</em> before achieving blockbuster stardom in <em>Animal</em>.</p>
  </details>

  <details>
    <summary>6. Which Bollywood actress has the highest international fashion influence?</summary>
    <p>Deepika Padukone, Priyanka Chopra Jonas, Alia Bhatt, and Sonam Kapoor lead international fashion, regularly representing global luxury brands including Louis Vuitton, Gucci, Bulgari, and Dior at the Met Gala and European fashion weeks.</p>
  </details>
</section>
`);

  // 8. Final Verdict
  sections.push(`
<section id="final-editorial-verdict">
  <h2>Final Verdict: The Multi-Faceted Evolution of Bollywood Beauty</h2>
  <div class="table-scroll">
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>VisitBest Editorial Pick</th>
          <th>Key Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Overall #1</strong></td><td>Deepika Padukone</td><td>Unrivaled combination of elegance, global influence, and dramatic versatility.</td></tr>
        <tr><td><strong>Timeless Classical Beauty</strong></td><td>Aishwarya Rai Bachchan</td><td>Three decades of unmatched international recognition and classical grace.</td></tr>
        <tr><td><strong>Modern Screen Craft</strong></td><td>Alia Bhatt</td><td>National Award-winning emotional authenticity and minimalist global appeal.</td></tr>
        <tr><td><strong>Global Cultural Icon</strong></td><td>Priyanka Chopra Jonas</td><td>Fearless trailblazer across Bollywood, Hollywood, and global charity.</td></tr>
        <tr><td><strong>Sensational Rising Star</strong></td><td>Triptii Dimri</td><td>Haunting, soulful vintage Indian screen presence and meteoric box-office rise.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="button-row" style="margin:1.5rem 0;">
    <a class="button button-primary" href="/category/actress/">Explore More Actress Guides</a>
    <a class="button button-quiet" href="/search/?q=Bollywood">Search Bollywood Guides</a>
  </div>
</section>
`);

  return sections.join("\n");
}

const headings = [
  { id: "introduction", text: "Introduction & Scope" },
  { id: "quick-answer-top-10", text: "Top 10 Actresses at a Glance" },
  { id: "ranking-methodology", text: "How We Ranked the Actresses" },
  { id: "top-30-profiles", text: "Top 30 Actresses Detailed Profiles" },
  { id: "generational-breakdowns", text: "Icons by Generation" },
  { id: "style-aesthetics", text: "Sarees, Cannes & Red Carpet" },
  { id: "frequently-asked-questions", text: "Frequently Asked Questions (FAQ)" },
  { id: "final-editorial-verdict", text: "Final Editorial Verdict" }
];

const tocHtml = `
<aside class="toc-card">
  <h2>In this guide</h2>
  <nav aria-label="Table of contents">
    ${headings.map(h => `<a href="#${h.id}">${h.text}</a>`).join("")}
  </nav>
</aside>
`;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://visitbest.in/most-beautiful-bollywood-actresses/#article",
      "url": "https://visitbest.in/most-beautiful-bollywood-actresses/",
      "name": "Most Beautiful Bollywood Actresses: Top 30 Indian Stars Ranked",
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "VisitBest",
        "url": "https://visitbest.in/"
      },
      "headline": "Most Beautiful Bollywood Actresses: Top 30 Indian Stars Ranked",
      "author": {
        "@type": "Organization",
        "name": "VisitBest Entertainment Editorial Team",
        "url": "https://visitbest.in/about/"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://visitbest.in/most-beautiful-bollywood-actresses/"
      },
      "image": ["https://visitbest.in/assets/editorial/editorial-fallback.svg"],
      "datePublished": "2026-09-09",
      "dateModified": "2026-10-06",
      "description": "Discover the most beautiful Bollywood actresses in 2026, ranked for beauty, style, screen presence and popularity, with biographies, movies, awards and facts."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://visitbest.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Celebrity & Cinema",
          "item": "https://visitbest.in/category/actress/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Most Beautiful Bollywood Actresses",
          "item": "https://visitbest.in/most-beautiful-bollywood-actresses/"
        }
      ]
    }
  ]
};

const fullHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-SZXR1R5PP7"></script>
  <script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-SZXR1R5PP7');</script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6008816938247526" crossorigin="anonymous"></script>
  <title>Most Beautiful Bollywood Actresses in 2026: Top 30 Ranked | VisitBest</title>
  <meta name="description" content="Discover the most beautiful Bollywood actresses in 2026, ranked for beauty, style, screen presence and popularity, with biographies, movies, awards and facts.">
  <link rel="canonical" href="https://visitbest.in/most-beautiful-bollywood-actresses/">
  <meta name="robots" content="index,follow">
  <meta property="og:type" content="article">
  <meta property="og:title" content="Most Beautiful Bollywood Actresses in 2026: Top 30 Ranked | VisitBest">
  <meta property="og:description" content="Discover the most beautiful Bollywood actresses in 2026, ranked for beauty, style, screen presence and popularity, with biographies, movies, awards and facts.">
  <meta property="og:url" content="https://visitbest.in/most-beautiful-bollywood-actresses/">
  <meta name="twitter:card" content="summary">
  <meta property="og:image" content="https://visitbest.in/assets/editorial/editorial-fallback.svg">
  <meta name="twitter:image" content="https://visitbest.in/assets/editorial/editorial-fallback.svg">
  <link rel="stylesheet" href="/site.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
  <a class="skip-link" href="#content">Skip to content</a>
  <header class="site-header"><div class="header-inner container">
    <a class="brand" href="/"><strong>Visit-Best</strong><span>Explore best in India</span></a>
    <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="primary-nav">Menu</button>
    <nav class="primary-nav" id="primary-nav" data-primary-nav aria-label="Primary navigation"><a href="/">Home</a><a href="/bigg-boss-20-guide/">Bigg Boss 20</a><a href="/bigg-boss-20-voting/">BB20 Voting</a><a href="/bigg-boss-20-web-stories/">Web Stories</a><a href="/education/">Education</a><a href="/category/technology/">Technology</a><a href="/category/entertainment/">Entertainment</a><a href="/business/">All Businesses</a></nav>
    <form class="header-search" action="/search/" method="get"><input name="q" type="search" placeholder="Search guides…" aria-label="Search guides"><button class="button button-primary" type="submit">Search</button></form>
  </div></header>

  <main id="content" class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumbs"><a href="/">Home</a><span class="sep">/</span><a href="/category/actress/">Celebrity &amp; Cinema</a><span class="sep">/</span><span>Most Beautiful Bollywood Actresses</span></nav>
    <div class="article-layout">
      <article class="article-card">
        <p class="eyebrow">VisitBest Cinema &amp; Celebrity Guide • Updated October 2026</p>
        <h1 class="article-title">Most Beautiful Bollywood Actresses: Top 30 Indian Stars Ranked</h1>
        <p class="article-dek">An authoritative 2026 ranking and cultural guide to Hindi cinema's most radiant, stylish, and celebrated screen legends.</p>
        <div class="article-meta">
          <span><a class="pill" href="/category/actress/">Celebrity &amp; Cinema</a></span>
          <span>Updated <strong>6 October 2026</strong></span>
          <span><strong>15 min read</strong></span>
        </div>
        <figure class="article-figure">
          <img src="/assets/editorial/editorial-fallback.svg" alt="Illustration representing Indian cinema and Bollywood beauty" loading="eager" decoding="async">
          <figcaption>VisitBest editorial illustration • Bollywood &amp; Indian Cinema Spotlight</figcaption>
        </figure>

        <div class="ad-placement ad-intro" style="margin:2rem auto;text-align:center;min-height:90px;clear:both;">
          <span class="ad-label" style="display:block;font-size:10px;letter-spacing:1px;color:#8c9ba5;text-transform:uppercase;margin-bottom:6px;">Advertisement</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-6008816938247526"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <div class="prose">
          ${buildContent()}
        </div>

        <div class="ad-placement ad-outro" style="margin:2rem auto;text-align:center;min-height:90px;clear:both;">
          <span class="ad-label" style="display:block;font-size:10px;letter-spacing:1px;color:#8c9ba5;text-transform:uppercase;margin-bottom:6px;">Advertisement</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-6008816938247526"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <div class="author-box">
          <div class="author-mark" aria-hidden="true">VB</div>
          <div>
            <strong>VisitBest Entertainment Editorial Team</strong>
            <p>Our film critics and pop-culture historians track Indian cinema, fashion archives, box office records, and national film awards to present balanced, respectful celebrity coverage.</p>
          </div>
        </div>

        <section class="related">
          <h2>Keep exploring</h2>
          <div class="card-grid">
            <article class="card">
              <a href="/90s-actresses/">
                <div class="card-media"><img src="/assets/mirror/4127348dd6bf-90s-Actresses.jpg" alt="90s Actresses" loading="lazy" decoding="async"></div>
                <div class="card-body">
                  <div class="card-meta"><span class="tag">Celebrity &amp; Cinema</span><span>16 July 2025</span></div>
                  <h3>Top 30 Most Beautiful 90s Actresses (Then and Now)</h3>
                  <p>A look back at the most iconic screen legends of the 1980s and 1990s and their lasting cinematic legacy.</p>
                </div>
              </a>
            </article>
            <article class="card">
              <a href="/hottest-chinese-actors/">
                <div class="card-media"><img src="/assets/hottest-chinese-actors/hero.jpg" alt="Chinese actors guide" loading="lazy" decoding="async"></div>
                <div class="card-body">
                  <div class="card-meta"><span class="tag">Entertainment</span><span>6 October 2026</span></div>
                  <h3>Hottest Chinese Actors in 2026: Top 25 Ranked</h3>
                  <p>Discover the top Chinese actors of 2026, ranked by charisma, style, screen presence, and hit C-dramas.</p>
                </div>
              </a>
            </article>
            <article class="card">
              <a href="/best-hindi-comedy-movies/">
                <div class="card-media"><img src="/assets/editorial/editorial-fallback.svg" alt="Hindi comedy movies" loading="lazy" decoding="async"></div>
                <div class="card-body">
                  <div class="card-meta"><span class="tag">Entertainment</span><span>9 September 2026</span></div>
                  <h3>Best Hindi Comedy Movies: Classics &amp; Modern Favourites</h3>
                  <p>A watchlist spanning social satire, buddy comedy, and lighthearted romantic classics.</p>
                </div>
              </a>
            </article>
          </div>
        </section>
      </article>

      ${tocHtml}
    </div>
  </main>

  <footer class="site-footer"><div class="container footer-grid">
    <div>
      <h2>Visit-Best</h2>
      <p>Clear, practical guides on brands, products, companies, entertainment, culture, and everyday decisions across India and beyond.</p>
      <p style="margin-top:.85rem;font-size:.84rem;"><a href="/about/">About VisitBest</a> · <a href="/contact-us/">Contact Us</a> · <a href="/privacy-policy/">Privacy Policy</a></p>
    </div>
    <div>
      <h2>Bigg Boss 20</h2>
      <ul class="footer-links">
        <li><a href="/bigg-boss-20-guide/">Season 20 Guide</a></li>
        <li><a href="/bigg-boss-20-voting/">Live Fan Polls &amp; Voting</a></li>
        <li><a href="/bigg-boss-20-contestants/">Contestants Directory</a></li>
        <li><a href="/bigg-boss-20-web-stories/">Visual Web Stories</a></li>
        <li><a href="/bigg-boss-20-where-to-watch/">Where to Watch</a></li>
        <li><a href="/bigg-boss-20-episode-guide/">Episode Guide</a></li>
        <li><a href="/bigg-boss-20-nominations-explained/">Nominations Explained</a></li>
      </ul>
    </div>
    <div>
      <h2>Categories</h2>
      <ul class="footer-links">
        <li><a href="/category/technology/">Technology</a></li>
        <li><a href="/category/entertainment/">Entertainment</a></li>
        <li><a href="/category/brands/">Brands</a></li>
        <li><a href="/category/business/">Business</a></li>
        <li><a href="/category/actress/">Celebrity &amp; Cinema</a></li>
        <li><a href="/category/corporates/">Corporates</a></li>
        <li><a href="/category/travel/">Travel &amp; Lifestyle</a></li>
      </ul>
    </div>
    <div>
      <h2>Explore &amp; Contact</h2>
      <ul class="footer-links">
        <li><a href="/education/">Education Guides Hub</a></li>
        <li><a href="/education/schools/">Top Schools Worldwide</a></li>
        <li><a href="/education/universities/">Top Universities</a></li>
        <li><a href="/education/medical-colleges/">Medical Colleges (NIRF)</a></li>
        <li><a href="/business/">Business Directory (700+)</a></li>
        <li><a href="/wam-to-gpa-calculator/">WAM to GPA Calculator</a></li>
        <li><a href="/search/">Search All Guides</a></li>
        <li><a href="/assets/bb20-new/image-credits.html">Image Credits</a></li>
        <li><a href="mailto:visitbest10@gmail.com">visitbest10@gmail.com</a></li>
      </ul>
    </div>
  </div><div class="container footer-bottom"><span>© 2026 Visit-Best. All rights reserved.</span><span>Independent editorial guides &amp; fan opinions. Not affiliated with Bigg Boss broadcasters or voting platforms.</span></div></footer>
  <button class="back-top" type="button" data-back-top aria-label="Back to top">↑</button>
  <script src="/site.js" defer></script>
</body>
</html>
`;

await fs.writeFile(path.join(outDir, "index.html"), fullHtml.trim());
console.log(`Generated public/most-beautiful-bollywood-actresses/index.html successfully (${Buffer.byteLength(fullHtml)} bytes).`);
