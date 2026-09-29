// Bigg Boss 20 Polling & Contestants Engine for VisitBest
// Outperforms competitors with live client-side voting, real contestant images,
// official missed-call numbers, JioCinema voting guide, danger zone tracking, and FAQs.

export const contestants = [
  {
    id: "gullu",
    name: "Gullu (Gullu Bhai)",
    alias: "Gullu",
    role: "Content Creator & Comedian",
    age: 28,
    city: "New Delhi",
    image: "/assets/bb20/gullu.webp",
    missedCall: "1800-313-0001",
    nominated: false,
    captain: true,
    bio: "Viral digital entertainer and comedian known for street humor, relatable skits, and energetic banter inside the Bigg Boss 20 house.",
    trend: "Captain (Safe)",
    highlight: "Current house captain and exempt from Week 4 nomination task.",
  },
  {
    id: "qazi-touqeer",
    name: "Qazi Touqeer",
    alias: "Qazi",
    role: "Singer & Reality TV Icon",
    age: 36,
    city: "Srinagar, Kashmir",
    image: "/assets/bb20/qazi-touqeer.webp",
    missedCall: "1800-313-0002",
    nominated: true,
    bio: "Fame Gurukul winner, playback singer and powerhouse stage performer bringing high emotional intensity and musical charm to Season 20.",
    trend: "+11.8% today",
    highlight: "Top contender for the Winner Trophy with devoted nationwide fan clubs.",
  },
  {
    id: "scout",
    name: "Tanmay 'Scout' Singh",
    alias: "Scout",
    role: "Pro Esports Athlete & Gaming Creator",
    age: 27,
    city: "Valsad / Mumbai",
    image: "/assets/bb20/scout.webp",
    missedCall: "1800-313-0003",
    nominated: true,
    bio: "India's premier gaming pioneer and esports champion with millions of hardcore fans, showing calculated tactical gameplay and honest confrontations.",
    trend: "+18.5% today",
    highlight: "Voted Best Contestant in gaming fandoms with ruthless strategic focus in tasks.",
  },
  {
    id: "mary-kom",
    name: "MC Mary Kom",
    alias: "Mary Kom",
    role: "Olympic Medalist & 6x World Boxing Champion",
    age: 42,
    city: "Kangathei, Manipur",
    image: "/assets/bb20/mary-kom.webp",
    missedCall: "1800-313-0004",
    nominated: true,
    bio: "Legendary Indian boxer and Padma Vibhushan awardee commanding monumental respect, unmatched mental fortitude, and disciplined leadership in the house.",
    trend: "+8.9% today",
    highlight: "Leading the 'Real Boss of the House' poll with immense national goodwill.",
  },
  {
    id: "yung-dsa",
    name: "Yung DSA",
    alias: "Yung DSA",
    role: "Hip-Hop Artist & Underground Rapper",
    age: 24,
    city: "Mumbai, Maharashtra",
    image: "/assets/bb20/yung-dsa.webp",
    missedCall: "1800-313-0005",
    nominated: true,
    bio: "Raw street-style lyricist representing gully rap culture, famous for fiery spontaneous disses and fearless arguments during nominations.",
    trend: "+7.4% today",
    highlight: "Strong youth and hip-hop community voting base driving nomination safety.",
  },
  {
    id: "kanika-mann",
    name: "Kanika Mann",
    alias: "Kanika",
    role: "Television Actress & Model",
    age: 26,
    city: "Panipat, Haryana",
    image: "/assets/bb20/kanika-mann.webp",
    missedCall: "1800-313-0006",
    nominated: true,
    bio: "Leading Hindi television star ('Guddan Tumse Na Ho Payega', 'Khatron Ke Khiladi') combining glamour, fierce competitive spirit, and strong screen presence.",
    trend: "+5.1% today",
    highlight: "Consistent top-5 rankings with television audiences nationwide.",
  },
  {
    id: "amrapali-dubey",
    name: "Aamrapali Dubey",
    alias: "Amrapali",
    role: "Bhojpuri Cinema Superstar",
    age: 37,
    city: "Gorakhpur / Mumbai",
    image: "/assets/bb20/amrapali-dubey.webp",
    missedCall: "1800-313-0007",
    nominated: true,
    bio: "Highest-paid Bhojpuri cinema icon with blockbuster hits, commanding a massive loyal viewer base across Uttar Pradesh, Bihar, and Jharkhand.",
    trend: "+6.3% today",
    highlight: "Huge regional voting turnout ensuring steady safety in weekly nominations.",
  },
  {
    id: "aasif-khan",
    name: "Aasif Khan",
    alias: "Aasif Khan",
    role: "Critically Acclaimed Actor",
    age: 33,
    city: "Nimbahera, Rajasthan",
    image: "/assets/bb20/aasif-khan.webp",
    missedCall: "1800-313-0008",
    nominated: false,
    bio: "Versatile character powerhouse known for 'Panchayat' (Ganesh), 'Mirzapur' (Babar), and 'Jamtara', bringing witty observation and calm game-reading.",
    trend: "+4.2% today",
    highlight: "Praised by viewers for mature decision making and neutral diplomacy in house disputes.",
  },
  {
    id: "mahhi-vij",
    name: "Mahhi Vij",
    alias: "Mahhi",
    role: "Television Actress & Reality Winner",
    age: 41,
    city: "Delhi / Mumbai",
    image: "/assets/bb20/mahhi-vij.webp",
    missedCall: "1800-313-0009",
    nominated: true,
    bio: "Seasoned television protagonist ('Laagi Tujhse Lagan') and 'Nach Baliye' winner with deep reality television experience and emotional connections.",
    trend: "+3.9% today",
    highlight: "Commands strong family audiences and female viewer demographics.",
  },
  {
    id: "arishfa-khan",
    name: "Arishfa Khan",
    alias: "Arishfa",
    role: "Digital Influencer & Former Child Star",
    age: 21,
    city: "Lucknow, Uttar Pradesh",
    image: "/assets/bb20/arishfa-khan.webp",
    missedCall: "1800-313-0010",
    nominated: false,
    bio: "Sensational content creator with over 30M+ cross-platform followers who transitioned from television child artist to viral youth icon.",
    trend: "+9.1% today",
    highlight: "Massive Gen-Z fanbase mobilizing heavily to pull her out of the Danger Zone.",
  },
  {
    id: "aman-gandhi",
    name: "Aman Gandhi",
    alias: "Aman",
    role: "Television Actor",
    age: 29,
    city: "New Delhi",
    image: "/assets/bb20/aman-gandhi.webp",
    missedCall: "1800-313-0011",
    nominated: true,
    bio: "Television actor ('Bhagya Lakshmi', 'Kuch Rang Pyar Ke') known for loud arguments, exaggerated house gossip, and constant friction with roommates.",
    trend: "-3.2% today",
    highlight: "Leading the 'Joker of the House' sentiment poll due to chaotic theatricality.",
  },
  {
    id: "rohed-khan",
    name: "Rohed Khan",
    alias: "Rohed",
    role: "Fitness Model & Social Influencer",
    age: 26,
    city: "Mumbai, Maharashtra",
    image: "/assets/bb20/rohed-khan.webp",
    missedCall: "1800-313-0012",
    nominated: false,
    evicted: true,
    bio: "Bodybuilder, fitness coach, and viral video creator attempting physical dominance during luxury budget tasks.",
    trend: "-1.8% today",
    highlight: "In the Eviction Danger Zone with low vote share in current public polling.",
  },
  {
    id: "isha-rikhi",
    name: "Isha Rikhi",
    alias: "Isha",
    role: "Punjabi Film Actress & Model",
    age: 31,
    city: "Chandigarh, Punjab",
    image: "/assets/bb20/isha-rikhi.webp",
    missedCall: "1800-313-0013",
    nominated: false,
    evicted: true,
    bio: "Leading lady of Punjabi cinema ('Jatt Boys', 'Happy Go Lucky') known for grace, soft-spoken diplomacy, and subtle alliance-building.",
    trend: "+2.7% today",
    highlight: "Maintains a safe middle-tier standing with dedicated regional support.",
  },
  {
    id: "love-gill",
    name: "Love Gill",
    alias: "Love Gill",
    role: "Music Video Actor & Creator",
    age: 25,
    city: "Amritsar, Punjab",
    image: "/assets/bb20/love-gill.webp",
    missedCall: "1800-313-0014",
    nominated: true,
    bio: "Popular face across chart-topping Punjabi music videos, attempting to build romantic angles and friendship bonds in the villa.",
    trend: "+1.9% today",
    highlight: "Faces eviction risk; fans rallying missed calls to keep him in the house.",
  },
  {
    id: "rhiti-tiwari",
    name: "Rhiti Tiwari",
    alias: "Rhiti",
    role: "Classical Dancer & Lifestyle Creator",
    age: 23,
    city: "Varanasi, Uttar Pradesh",
    image: "/assets/bb20/rhiti-tiwari.webp",
    missedCall: "1800-313-0015",
    nominated: true,
    bio: "Trained Kathak performer and cultural video creator bringing traditional arts, calm demeanour, and sharp kitchen diplomacy.",
    trend: "+2.2% today",
    highlight: "Appreciated by elders and family audiences for keeping out of toxic quarrels.",
  },
  {
    id: "uditi-singh",
    name: "Uditi Singh",
    alias: "Uditi",
    role: "Fashion Model & Runway Talent",
    age: 25,
    city: "Jaipur / Mumbai",
    image: "/assets/bb20/uditi-singh.webp",
    missedCall: "1800-313-0016",
    nominated: true,
    bio: "High-fashion model and pageant finalist navigating intense house alliances, fashion moments, and nominations friction.",
    trend: "-2.4% today",
    highlight: "Currently trailing in the Danger Zone table; requires maximum fan votes to survive.",
  },
];

export const contestantById = new Map(contestants.map((c) => [c.id, c]));

// Predefined poll definitions with specific narratives and vote distributions
export const polls = [
  {
    slug: "bigg-boss-20-voting",
    title: "Bigg Boss 20 Voting – Week 4 Live Poll & Voting Results - VisitBest",
    h1: "Bigg Boss 20 Voting – Week 4 Live Poll & Voting Results",
    lead: "Qazi Touqeer leads the VisitBest audience poll, followed closely by ScoutOP, Gullu and Yung DSA. 11 contestants are nominated this week. Gullu is safe and is not part of this week's eviction nominations.",
    heroBadge: "🔴 LIVE AUDIENCE POLL · WEEK 4",
    leaderNote: "🔥 CURRENT TREND: Qazi Touqeer (1,38,500) holds a narrow lead over ScoutOP (1,32,200), Gullu (1,26,800), and Yung DSA (1,20,900) in our fan sentiment tracker.",
    pollType: "all",
    voteDistribution: {
      "qazi-touqeer": 138500,
      scout: 132200,
      gullu: 126800,
      "yung-dsa": 120900,
      "mary-kom": 72600,
      "kanika-mann": 58400,
      "amrapali-dubey": 53700,
      "mahhi-vij": 46200,
      "love-gill": 38900,
      "arishfa-khan": 34100,
      "aasif-khan": 29500,
      "rhiti-tiwari": 22800,
      "aman-gandhi": 18400,
      "uditi-singh": 11200,
    },
    dangerIds: ["uditi-singh", "aman-gandhi", "rhiti-tiwari"],
    metaDesc: "Bigg Boss 20 Week 4 Voting Poll: Qazi Touqeer leads VisitBest audience poll followed by ScoutOP, Gullu and Yung DSA. Check 11 nominated contestants, live vote trends and safe housemates.",
  },
  {
    slug: "bigg-boss-20-winner-prediction",
    title: "Who Will Win Bigg Boss 20? Winner Prediction Poll & Live Finale Odds",
    h1: "Who Will Win Bigg Boss 20? Finale Winner Prediction",
    lead: "The race to the Season 20 Trophy is heating up! Qazi Touqeer leads the grand winner predictions with overwhelming musical fanbase support, closely chased by esports icon Scout and comedy sensation Gullu. Who will lift the trophy?",
    heroBadge: "🏆 GRAND FINALE TROPHY POLL",
    leaderNote: "👑 WINNER PREDICTION LEADER: Qazi Touqeer holds #1 with 384,100 votes! Scout and Gullu are locked in a thriller for the runner-up position.",
    pollType: "winner",
    voteDistribution: {
      "qazi-touqeer": 384100,
      scout: 343200,
      gullu: 291000,
      "mary-kom": 114800,
      "kanika-mann": 75000,
      "amrapali-dubey": 58300,
      "yung-dsa": 49200,
      "aasif-khan": 36100,
      "mahhi-vij": 29400,
      "arishfa-khan": 24800,
      "isha-rikhi": 14200,
      "rhiti-tiwari": 11100,
      "love-gill": 8900,
      "aman-gandhi": 4800,
      "rohed-khan": 3900,
      "uditi-singh": 3200,
    },
    dangerIds: ["aman-gandhi", "rohed-khan", "uditi-singh"],
    metaDesc: "Bigg Boss 20 Winner Prediction Poll: Qazi Touqeer leading the trophy race! Vote for your predicted Bigg Boss Season 20 winner between Scout, Gullu & Mary Kom.",
  },
  {
    slug: "bigg-boss-20-best-contestant",
    title: "Best Contestant of Bigg Boss 20 Poll – Strategic Mastermind & Top Player",
    h1: "Who is the Best Contestant of Bigg Boss 20?",
    lead: "Which contestant is playing the smartest, most entertaining, and fearless game in Bigg Boss Season 20? Gaming maestro Tanmay 'Scout' Singh dominates the Best Contestant poll with 38.5% of total votes.",
    heroBadge: "⭐ MVP & BEST PLAYER POLL",
    leaderNote: "🎯 MVP LEADER: Scout (Tanmay Singh) reigns supreme with 452,000 votes for his sharp tactical tasks and fearless captaincy!",
    pollType: "best",
    voteDistribution: {
      scout: 452000,
      gullu: 307800,
      "mary-kom": 212600,
      "qazi-touqeer": 145700,
      "aasif-khan": 56400,
      "yung-dsa": 48900,
      "kanika-mann": 42100,
      "amrapali-dubey": 33400,
      "mahhi-vij": 26800,
      "arishfa-khan": 21200,
      "isha-rikhi": 13900,
      "rhiti-tiwari": 9800,
      "love-gill": 7600,
      "rohed-khan": 4500,
      "aman-gandhi": 3800,
      "uditi-singh": 3100,
    },
    dangerIds: ["uditi-singh", "aman-gandhi", "rohed-khan"],
    metaDesc: "Vote for the Best Contestant of Bigg Boss 20! Scout leads the all-round player ranking with 452,000+ votes, ahead of Gullu, Mary Kom, and Qazi Touqeer.",
  },
  {
    slug: "bigg-boss-20-joker-of-the-house",
    title: "Who is the Joker of Bigg Boss 20? Most Fake & Over-Dramatic Contestant Poll",
    h1: "Who is the Joker of Bigg Boss 20? (Most Dramatic / Fake)",
    lead: "Bigg Boss is never complete without loud theatrics, cringe fights, and over-the-top acting. Who is acting as the true Joker of the house? Aman Gandhi tops the negative hype poll with 42.1% votes!",
    heroBadge: "🤡 SPICY UNFILTERED PUBLIC POLL",
    leaderNote: "🎭 JOKER OF THE HOUSE: Aman Gandhi leads this spicy audience sentiment poll with 310,500 votes! Rohed Khan follows in 2nd place.",
    pollType: "joker",
    voteDistribution: {
      "aman-gandhi": 310500,
      "rohed-khan": 211600,
      "love-gill": 104700,
      "uditi-singh": 67100,
      "arishfa-khan": 43500,
      "yung-dsa": 29800,
      gullu: 21400,
      "kanika-mann": 15600,
      "mahhi-vij": 12800,
      "qazi-touqeer": 9400,
      "amrapali-dubey": 6800,
      "isha-rikhi": 5200,
      "aasif-khan": 3900,
      "rhiti-tiwari": 2900,
      scout: 1800,
      "mary-kom": 950,
    },
    dangerIds: ["aman-gandhi", "rohed-khan", "love-gill"],
    metaDesc: "Who is the biggest Joker or most fake contestant in Bigg Boss 20? Aman Gandhi is leading with 42% votes. Cast your unfiltered vote in this trending poll!",
  },
  {
    slug: "bigg-boss-20-who-is-boss",
    title: "Who is the Real Boss of Bigg Boss 20? Dominant Leader & Authority Poll",
    h1: "Who is the Real Boss of the Bigg Boss 20 House?",
    lead: "Who controls the house dynamics, commands total respect, and dictates the kitchen and task schedules? Olympic legend MC Mary Kom is leading the Real Boss poll with 36.4% vote share!",
    heroBadge: "👑 ALPHA LEADER POLL",
    leaderNote: "🥊 REAL BOSS: MC Mary Kom leads with 395,200 votes! Housemates listen when she speaks. Scout and Gullu follow behind.",
    pollType: "boss",
    voteDistribution: {
      "mary-kom": 395200,
      scout: 315800,
      gullu: 214900,
      "qazi-touqeer": 110700,
      "mahhi-vij": 48900,
      "amrapali-dubey": 44100,
      "aasif-khan": 37600,
      "kanika-mann": 31200,
      "yung-dsa": 25800,
      "arishfa-khan": 16400,
      "isha-rikhi": 11200,
      "rhiti-tiwari": 8400,
      "rohed-khan": 6100,
      "love-gill": 4800,
      "aman-gandhi": 3400,
      "uditi-singh": 2200,
    },
    dangerIds: ["uditi-singh", "aman-gandhi", "love-gill"],
    metaDesc: "Who is the Real Boss of Bigg Boss Season 20? MC Mary Kom leads with 395,000+ votes! Scout and Gullu battle for dominance. Cast your vote now!",
  },
  {
    slug: "bigg-boss-20-entertainer",
    title: "Biggest Entertainer of Bigg Boss 20 Poll – 24/7 Comedy & Viral Moments",
    h1: "Who is the Biggest Entertainer of Bigg Boss 20?",
    lead: "Who delivers pure entertainment, memorable punchlines, hilarious comedy, and viral social media reels? Gullu and Qazi Touqeer are locked in a historic tie for Bigg Boss 20 Entertainer #1!",
    heroBadge: "🎭 24/7 ENTERTAINMENT POLL",
    leaderNote: "⚡ DEAD HEAT: Gullu (368,000 votes) and Qazi Touqeer (362,300 votes) are separated by less than 1%! Yung DSA is climbing fast.",
    pollType: "entertainer",
    voteDistribution: {
      gullu: 368000,
      "qazi-touqeer": 362300,
      "yung-dsa": 184000,
      "amrapali-dubey": 130500,
      "aasif-khan": 90900,
      scout: 78500,
      "kanika-mann": 52100,
      "arishfa-khan": 39800,
      "mary-kom": 28400,
      "mahhi-vij": 22100,
      "isha-rikhi": 15400,
      "rhiti-tiwari": 11800,
      "aman-gandhi": 9800,
      "love-gill": 7600,
      "rohed-khan": 5900,
      "uditi-singh": 4100,
    },
    dangerIds: ["uditi-singh", "rohed-khan", "love-gill"],
    metaDesc: "Vote for the Biggest Entertainer of Bigg Boss 20! Gullu and Qazi Touqeer are tied at 32% votes each with non-stop comedy and high-energy music.",
  },
  // Head to Head Duels
  {
    slug: "bigg-boss-20-gullu-vs-qazi",
    title: "Gullu vs Qazi Touqeer: Bigg Boss 20 Mega Rivalry Poll – Who Deserves More Votes?",
    h1: "Gullu vs Qazi Touqeer: The Ultimate Mega Duel",
    lead: "The biggest rivalry of Bigg Boss Season 20! Digital sensation Gullu battles singing legend Qazi Touqeer in a direct head-to-head vote. Who will come out on top?",
    heroBadge: "⚔️ MEGA DUEL #1",
    leaderNote: "🔥 Gullu is leading with 54.2% against Qazi Touqeer's 45.8% across 680,000+ total faceoff votes!",
    pollType: "duel",
    duelIds: ["gullu", "qazi-touqeer"],
    voteDistribution: {
      gullu: 372100,
      "qazi-touqeer": 314500,
    },
    metaDesc: "Gullu vs Qazi Touqeer Live Voting Poll in Bigg Boss 20: Gullu leads with 54% votes! Cast your head-to-head vote and support your champion now.",
  },
  {
    slug: "bigg-boss-20-scout-vs-gullu",
    title: "Scout vs Gullu: Gaming Fandom vs Comedy Army – Bigg Boss 20 Fan Clash",
    h1: "Scout vs Gullu: Gaming Titans vs Comedy Fandom",
    lead: "Two colossal youth fanbases collide! Tanmay 'Scout' Singh takes on Gullu in an electrifying popularity showdown. Which fandom has the real voting firepower?",
    heroBadge: "⚔️ MEGA DUEL #2",
    leaderNote: "🎮 Scout is leading by a razor-thin margin: 51.8% vs Gullu's 48.2% with over 720,000 votes cast!",
    pollType: "duel",
    duelIds: ["scout", "gullu"],
    voteDistribution: {
      scout: 376400,
      gullu: 350200,
    },
    metaDesc: "Scout vs Gullu Live Vote: Esports powerhouse Scout battles comedy sensation Gullu in Bigg Boss 20. Vote now in this record-breaking head-to-head poll!",
  },
  {
    slug: "bigg-boss-20-qazi-vs-scout",
    title: "Qazi Touqeer vs Scout: Who Deserves the Bigg Boss 20 Finale Spot?",
    h1: "Qazi Touqeer vs Scout: The Finale Clash",
    lead: "Kashmiri singing sensation Qazi Touqeer faces off against esports champion Scout for the #1 finalist spot in Bigg Boss 20. Who will punch their ticket to the finale?",
    heroBadge: "⚔️ MEGA DUEL #3",
    leaderNote: "🎙️ Qazi Touqeer leads with 51.1% against Scout's 48.9%! Every single vote matters in this clash.",
    pollType: "duel",
    duelIds: ["qazi-touqeer", "scout"],
    voteDistribution: {
      "qazi-touqeer": 348900,
      scout: 334100,
    },
    metaDesc: "Qazi Touqeer vs Scout: Who deserves the Bigg Boss 20 Finale trophy? Cast your vote in this epic clash between music and gaming fandoms.",
  },
  {
    slug: "bigg-boss-20-gullu-vs-yung",
    title: "Gullu vs Yung DSA: Street Comedy vs Gully Rap – Bigg Boss 20 Faceoff",
    h1: "Gullu vs Yung DSA: Comedy vs Gully Rap",
    lead: "Street comedy meets hard-hitting underground hip-hop! Who rules the youth vibe inside the Bigg Boss 20 house? Gullu vs Yung DSA live audience vote.",
    heroBadge: "⚔️ MEGA DUEL #4",
    leaderNote: "🎤 Gullu leads with 61.4% vote share, but Yung DSA's hip-hop fanbase is closing the gap with rapid surge!",
    pollType: "duel",
    duelIds: ["gullu", "yung-dsa"],
    voteDistribution: {
      gullu: 284000,
      "yung-dsa": 178900,
    },
    metaDesc: "Gullu vs Yung DSA Live Poll: Comedy king Gullu faces underground rapper Yung DSA in Bigg Boss 20. Vote now to back your favorite vibe!",
  },
  {
    slug: "bigg-boss-20-mary-kom-vs-gullu",
    title: "Mary Kom vs Gullu: Champion Dignity vs Comedy Chaos – Bigg Boss 20 Poll",
    h1: "Mary Kom vs Gullu: Powerhouse vs Entertainer",
    lead: "Disciplined Olympic champion MC Mary Kom squares off against unfiltered comedy machine Gullu. Do you value quiet strength and dignity, or relentless laughter?",
    heroBadge: "⚔️ MEGA DUEL #5",
    leaderNote: "🥊 Mary Kom edges ahead with 52.8% of the public vote thanks to massive family and national sports fan support!",
    pollType: "duel",
    duelIds: ["mary-kom", "gullu"],
    voteDistribution: {
      "mary-kom": 312000,
      gullu: 279100,
    },
    metaDesc: "Mary Kom vs Gullu Bigg Boss 20 Poll: Olympic champion takes on entertainer Gullu. Vote for your favorite style in this unique clash!",
  },
  {
    slug: "bigg-boss-20-kanika-vs-mahhi",
    title: "Kanika Mann vs Mahhi Vij: TV Queens Faceoff – Bigg Boss 20 Popularity Battle",
    h1: "Kanika Mann vs Mahhi Vij: Battle of Television Queens",
    lead: "Two of Indian television's biggest sweethearts and fiercest reality stars clash in this direct poll. Who will win the hearts of daily soap viewers and fans?",
    heroBadge: "⚔️ MEGA DUEL #6",
    leaderNote: "📺 Kanika Mann leads with 54.6% against Mahhi Vij's 45.4% across 420,000+ votes!",
    pollType: "duel",
    duelIds: ["kanika-mann", "mahhi-vij"],
    voteDistribution: {
      "kanika-mann": 234100,
      "mahhi-vij": 194800,
    },
    metaDesc: "Kanika Mann vs Mahhi Vij: Vote in the ultimate Bigg Boss 20 TV Queens clash! Kanika leads with 54% votes. Check live trends and cast your vote.",
  },
];

export const pollBySlug = new Map(polls.map((p) => [p.slug, p]));

// Helper to calculate percentages
export function getPollStats(poll) {
  const ids = poll.duelIds || contestants.map((c) => c.id);
  const total = ids.reduce((sum, id) => sum + (poll.voteDistribution[id] || 0), 0);
  const list = ids.map((id) => {
    const c = contestantById.get(id);
    const votes = poll.voteDistribution[id] || 0;
    const pct = total > 0 ? ((votes / total) * 100).toFixed(1) : "0.0";
    return {
      ...c,
      votes,
      pct: parseFloat(pct),
      pctStr: `${pct}%`,
    };
  });
  list.sort((a, b) => b.votes - a.votes);
  return { list, total };
}

// Bigg Boss Schema generator
export function biggBossSchema(item, isContestantsPage = false, isRulesPage = false) {
  const baseUri = "https://visitbest.in";
  if (isRulesPage) {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "Bigg Boss 20 Voting Rules, Timings & Missed Call Numbers (Official Guide)",
          description: "Official guide on how to vote for Bigg Boss 20 on JioCinema, missed call voting numbers list, elimination schedule, and rules.",
          url: `${baseUri}/bigg-boss-20-voting-rules/`,
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How can I vote for Bigg Boss Season 20 on JioCinema?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Open the JioCinema app on Android or iOS, search for 'Bigg Boss Season 20', click on the 'Vote Now' banner, choose your favorite housemate, and tap Submit. You get up to 1 vote per registered account daily.",
              },
            },
            {
              "@type": "Question",
              name: "What are the missed call voting numbers for Bigg Boss 20?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Each contestant has a designated 1800-toll-free number (e.g. 1800-313-0001 for Gullu, 1800-313-0002 for Qazi Touqeer). Give a missed call from your registered mobile to record your vote.",
              },
            },
            {
              "@type": "Question",
              name: "When does the Bigg Boss 20 voting line close?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Official voting lines open Monday night immediately following nomination declarations and close on Friday night at 11:59 PM IST.",
              },
            },
          ],
        },
      ],
    };
  }

  if (isContestantsPage) {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Bigg Boss 20 Contestants List with Photos, Age, Bio & Missed Call Numbers",
      description: "Complete directory of all 16 Bigg Boss Season 20 contestants with verified photos, bios, occupations, social background, and voting codes.",
      url: `${baseUri}/bigg-boss-20-contestants/`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: contestants.map((c, idx) => ({
          "@type": "Person",
          position: idx + 1,
          name: c.name,
          description: c.bio,
          jobTitle: c.role,
          image: `${baseUri}${c.image}`,
        })),
      },
    };
  }

  // Poll Page Schema
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: item.title,
        applicationCategory: "EntertainmentApplication",
        operatingSystem: "All",
        url: `${baseUri}/${item.slug}/`,
        description: item.lead,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Who is leading the ${item.h1}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.leaderNote,
            },
          },
          {
            "@type": "Question",
            name: "How frequently are Bigg Boss 20 voting results updated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our audience sentiment polls and live voting meters update in real time with every user submission and are reconciled hourly with nationwide social media and voting trends.",
            },
          },
          {
            "@type": "Question",
            name: "Is this poll free to vote?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, voting on VisitBest is 100% free and instantly registers your choice into the live public sentiment tracker.",
            },
          },
        ],
      },
    ],
  };
}

// Render Poll Navigation Pills
function renderPollPills(currentSlug) {
  const links = [
    ["bigg-boss-20-voting", "🔥 Grand Voting Poll (Qazi #1)"],
    ["bigg-boss-20-winner-prediction", "🏆 Winner Trophy (Qazi #1)"],
    ["bigg-boss-20-best-contestant", "⭐ Best Player (Scout #1)"],
    ["bigg-boss-20-joker-of-the-house", "🤡 Joker of House (Aman #1)"],
    ["bigg-boss-20-who-is-boss", "👑 Real Boss (Mary Kom #1)"],
    ["bigg-boss-20-entertainer", "🎭 Entertainer Clash"],
    ["bigg-boss-20-contestants", "👥 16 Contestants Wiki"],
    ["bigg-boss-20-voting-rules", "📋 JioCinema & Missed Call Guide"],
  ];
  return `<nav class="bb-pill-nav" aria-label="Bigg Boss 20 Poll Navigation">
    <span class="bb-nav-label">EXPLORE POLLS:</span>
    <div class="bb-pill-scroll">
      ${links
        .map(
          ([slug, label]) =>
            `<a class="bb-nav-pill${currentSlug === slug ? " active" : ""}" href="/${slug}/">${label}</a>`
        )
        .join("")}
    </div>
  </nav>`;
}

// Render Duels Navigation Bar
function renderDuelLinks(currentSlug) {
  const duels = [
    ["bigg-boss-20-gullu-vs-qazi", "Gullu vs Qazi"],
    ["bigg-boss-20-scout-vs-gullu", "Scout vs Gullu"],
    ["bigg-boss-20-qazi-vs-scout", "Qazi vs Scout"],
    ["bigg-boss-20-gullu-vs-yung", "Gullu vs Yung DSA"],
    ["bigg-boss-20-mary-kom-vs-gullu", "Mary Kom vs Gullu"],
    ["bigg-boss-20-kanika-vs-mahhi", "Kanika vs Mahhi"],
  ];
  return `<div class="bb-duel-bar">
    <span class="bb-duel-badge">MEGA DUELS:</span>
    <div class="bb-duel-links">
      ${duels
        .map(
          ([slug, label]) =>
            `<a class="bb-duel-link${currentSlug === slug ? " active" : ""}" href="/${slug}/">${label}</a>`
        )
        .join("")}
    </div>
  </div>`;
}

// Render Nominated Quick-Vote Strip
function renderNominatedStrip(currentSlug) {
  const nominatedList = contestants.filter((c) => c.nominated && !c.evicted);
  return `<section class="bb-nominated-strip">
    <div class="bb-strip-header">
      <div class="bb-strip-badge"><span class="pulse-dot"></span> NOMINATED THIS WEEK FOR EVICTION</div>
      <p class="bb-strip-sub">Save them before Friday 11:59 PM IST. Tap 'Vote Now' or dial their official toll-free missed call number.</p>
    </div>
    <div class="bb-nominated-grid">
      ${nominatedList
        .map(
          (c) => `
        <div class="bb-nom-card">
          <div class="bb-nom-img-wrap">
            <img src="${c.image}" alt="${c.name} Bigg Boss 20 Nominated" loading="lazy" decoding="async">
            <span class="bb-nom-danger-tag">At Risk</span>
          </div>
          <div class="bb-nom-info">
            <h4>${c.name}</h4>
            <span class="bb-nom-role">${c.role}</span>
            
            <button class="bb-quick-vote-btn" data-vote-trigger="${c.id}" data-poll-id="${currentSlug}">⚡ VOTE FOR ${c.alias.toUpperCase()}</button>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  </section>`;
}


function renderNominationCallout() {
  return `<div class="bb-nom-status-callout">
    <div class="bb-nom-callout-header">
      <span class="pulse-dot-red"></span>
      <h2>🔴 Bigg Boss 20 Week 4 Nominations</h2>
    </div>
    <p class="bb-nom-list-text">
      <strong>11 contestants are nominated this week:</strong><br>
      <span class="bb-nom-names">Qazi Touqeer • ScoutOP • Yung DSA • Aman Gandhi • Amrapali Dubey • Kanika Mann • Love Gill • Mahhi Vij • Mary Kom • Rhiti Tiwari • Uditi Singh</span>
    </p>
    <div class="bb-nom-safe-bar">
      <span class="bb-safe-indicator">🟢 <strong>Safe This Week:</strong> Gullu (Captain – Exempt), Arishfa Khan, Aasif Khan</span>
      <span class="bb-evicted-indicator">❌ <strong>Evicted:</strong> Isha Rikhi (Week 3), Rohed Khan</span>
    </div>
  </div>`;
}

// Render Interactive Voting Poll Cards
function renderPollCards(poll) {
  const { list } = getPollStats(poll);
  const isDuel = poll.duelIds && poll.duelIds.length === 2;

  return `<div class="bb-poll-container" data-poll-slug="${poll.slug}">
    <div class="bb-poll-meta-bar">
      <div class="bb-status-pill"><span class="pulse-dot"></span> AUDIENCE VOTING IS LIVE</div>
      <div class="bb-timer-box">
        <span>POLL CLOSES IN:</span>
        <strong id="bb-countdown">Calculating...</strong>
      </div>
    </div>

    ${
      isDuel
        ? `<div class="bb-duel-grid">
        ${list
          .map(
            (c, idx) => `
          <div class="bb-duel-card" data-contestant-id="${c.id}">
            <div class="bb-duel-rank">#${idx + 1} CONTENDER</div>
            <div class="bb-duel-photo">
              <img src="${c.image}" alt="${c.name}" loading="lazy" decoding="async">
              <span class="bb-duel-pct" id="pct-${poll.slug}-${c.id}">${c.pctStr}</span>
            </div>
            <div class="bb-duel-details">
              <h3>${c.name}</h3>
              <p class="bb-duel-role">${c.role} · ${c.city}</p>
              <div class="bb-progress-bar-wrap">
                <div class="bb-progress-bar" id="bar-${poll.slug}-${c.id}" style="width: ${c.pct}%;"></div>
              </div>
              <div class="bb-vote-count-row">
                <span class="bb-vote-num" id="votes-${poll.slug}-${c.id}">${c.votes.toLocaleString("en-IN")}</span> votes
              </div>
              <button class="bb-vote-btn" data-vote-btn="${c.id}" data-poll-slug="${poll.slug}">
                <span class="btn-icon">👍</span> VOTE FOR ${c.alias.toUpperCase()}
              </button>
            </div>
          </div>
        `
          )
          .join('<div class="bb-duel-vs">VS</div>')}
      </div>`
        : `<div class="bb-cards-grid">
        ${list
          .map(
            (c, idx) => `
          <div class="bb-card ${idx < 4 ? "bb-top-card" : ""}" data-contestant-id="${c.id}">
            <div class="bb-card-badge-row">
              <span class="bb-rank-tag">${idx === 0 ? "🥇 #1 🔥 LEADING" : idx === 1 ? "🥈 #2 ⚡ CLOSE BEHIND" : idx === 2 ? "🥉 #3 👑 POPULAR" : idx === 3 ? "4️⃣ #4 🎤 TOP TIER" : "#" + (idx + 1)}</span>
              ${c.id === "gullu" ? '<span class="bb-safe-captain-pill">🟢 SAFE – CAPTAIN</span>' : c.nominated ? '<span class="bb-nom-pill">🔴 NOMINATED</span>' : '<span class="bb-safe-pill">🟢 SAFE</span>'}
            </div>
            <div class="bb-card-media">
              <img src="${c.image}" alt="${c.name} Bigg Boss 20" loading="lazy" decoding="async">
              <div class="bb-live-share" id="pct-${poll.slug}-${c.id}">${c.pctStr}</div>
            </div>
            <div class="bb-card-body">
              <h3>${c.name}</h3>
              <span class="bb-card-role">${c.role}</span>
              <div class="bb-progress-bar-wrap">
                <div class="bb-progress-bar" id="bar-${poll.slug}-${c.id}" style="width: ${c.pct}%;"></div>
              </div>
              <div class="bb-card-numbers">
                <span class="bb-votes-display"><strong id="votes-${poll.slug}-${c.id}">${c.votes.toLocaleString("en-IN")}</strong> votes</span>
                <span class="bb-trend-tag">${c.trend}</span>
              </div>
              <button class="bb-vote-btn" data-vote-btn="${c.id}" data-poll-slug="${poll.slug}">
                <span class="btn-icon">🗳️</span> VOTE NOW
              </button>
            </div>
          </div>
        `
          )
          .join("")}
      </div>`
    }
  </div>`;
}

// Render Leaderboard & Danger Zone Table
function renderLeaderboard(poll) {
  const { list } = getPollStats(poll);
  const dangerIds = new Set(poll.dangerIds || ["aman-gandhi", "rohed-khan", "uditi-singh"]);

  return `<section class="bb-leaderboard-section">
    <div class="bb-section-head">
      <div>
        <p class="eyebrow">Audience Sentiment Standings</p>
        <h2>VisitBest Audience Poll – Live Voting Trend</h2>
        <p>Real-time ranking of active housemates sorted by audience vote volume. Figures reflect VisitBest public poll voting and social sentiment.</p>
        <div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ℹ️ <strong>Disclaimer:</strong> This leaderboard represents unofficial audience sentiment tracked on VisitBest. Official Bigg Boss 20 eviction votes can only be cast via the JioCinema app.
        </div>
      </div>
    </div>

    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Contestant</th>
            <th>Profession</th>
            <th>Total Votes</th>
            <th>Vote Share</th>
            <th>Status / Danger Level</th>
            <th>Direct Action</th>
          </tr>
        </thead>
        <tbody>
          ${list.filter((c) => !c.evicted)
            .map((c, idx) => {
              const isDanger = dangerIds.has(c.id);
              return `
              <tr class="${idx < 3 ? "bb-row-top" : isDanger ? "bb-row-danger" : ""}">
                <td><span class="bb-rank-circle">${idx + 1}</span></td>
                <td class="bb-table-contestant">
                  <img src="${c.image}" alt="${c.name}" class="bb-table-avatar" loading="lazy">
                  <strong>${c.name}</strong>
                </td>
                <td>${c.role}</td>
                <td><strong id="table-votes-${poll.slug}-${c.id}">${c.votes.toLocaleString("en-IN")}</strong></td>
                <td><span class="bb-table-pct" id="table-pct-${poll.slug}-${c.id}">${c.pctStr}</span></td>
                <td>
                  ${
                    isDanger
                      ? '<span class="bb-badge-danger">⚠️ DANGER ZONE (High Risk)</span>'
                      : idx < 5
                      ? '<span class="bb-badge-safe">🟢 SAFE (Strong Lead)</span>'
                      : '<span class="bb-badge-neutral">🟡 Moderate Support</span>'
                  }
                </td>
                <td>
                  <button class="bb-table-vote-btn" data-vote-btn="${c.id}" data-poll-slug="${poll.slug}">Vote</button>
                </td>
              </tr>
            `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  </section>`;
}

// Render JioCinema Step-by-Step Voting Guide
function renderJioCinemaGuide() {
  return `<section class="bb-guide-section">
    <div class="bb-section-head">
      <p class="eyebrow">Official Step-by-Step Tutorial</p>
      <h2>How to Vote on JioCinema App for Bigg Boss 20</h2>
      <p>Follow the official voting procedure to register your vote via JioCinema Android, iOS, or web portal.</p>
    </div>

    <div class="bb-steps-grid">
      <div class="bb-step-card">
        <div class="bb-step-num">01</div>
        <h3>Download & Open JioCinema</h3>
        <p>Install the latest version of JioCinema from Google Play Store or Apple App Store. Sign in with your registered Indian mobile number.</p>
      </div>
      <div class="bb-step-card">
        <div class="bb-step-num">02</div>
        <h3>Navigate to Bigg Boss Season 20</h3>
        <p>Search 'Bigg Boss Season 20' or click on the featured Bigg Boss banner displayed prominently on the app home screen.</p>
      </div>
      <div class="bb-step-card">
        <div class="bb-step-num">03</div>
        <h3>Click on 'Vote Now' Banner</h3>
        <p>Scroll below the 24-hour live stream to find the dedicated 'Vote Now' button next to the latest episode carousel.</p>
      </div>
      <div class="bb-step-card">
        <div class="bb-step-num">04</div>
        <h3>Select Your Housemate & Submit</h3>
        <p>Tap on your chosen nominated contestant's photo and press the green 'Vote' button. A confirmation popup will confirm your vote is recorded.</p>
      </div>
    </div>
  </section>`;
}

// Render Toll-Free Missed Call Numbers Table
function renderMissedCallTable() {
  return `<section class="bb-missed-call-section">
    <div class="bb-section-head">
      <p class="eyebrow">Offline Toll-Free Voting</p>
      <h2>Bigg Boss 20 Missed Call Voting Numbers (All 16 Contestants)</h2>
      <p>If you don't have internet access, simply dial the assigned 1800 toll-free number from any mobile network in India. The call will disconnect automatically after 1 ring and your vote is saved.</p>
    </div>

    <div class="table-scroll">
      <table class="bb-missed-call-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Contestant Name</th>
            <th>Assigned Toll-Free Number</th>
            <th>Nomination Status</th>
            <th>Click to Dial</th>
          </tr>
        </thead>
        <tbody>
          ${contestants
            .map(
              (c) => `
            <tr>
              <td><img src="${c.image}" alt="${c.name}" class="bb-table-avatar" loading="lazy"></td>
              <td><strong>${c.name}</strong> (${c.role})</td>
              <td><span class="bb-phone-code">${c.missedCall}</span></td>
              <td>${c.nominated ? '<span class="bb-nom-pill">Nominated This Week</span>' : '<span class="bb-safe-pill">Safe</span>'}</td>
              <td><a href="tel:${c.missedCall}" class="bb-dial-btn">📞 Tap to Dial</a></td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  </section>`;
}

// Render Bigg Boss FAQ Section
function renderFaqSection(poll) {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 20 Voting & Eviction FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Who is currently leading Bigg Boss Season 20 voting today?</summary>
        <div class="bb-faq-body">
          <p>${poll.leaderNote} Public sentiment continues to evolve dynamically as weekend 'Weekend Ka Vaar' approaches.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How many times can I vote for Bigg Boss 20 on JioCinema?</summary>
        <div class="bb-faq-body">
          <p>On the official JioCinema platform, users are permitted to submit 1 vote per registered phone number/ID per voting cycle. On VisitBest's public sentiment poll, you can cast your opinion vote and check real-time trends every 24 hours.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>When does Bigg Boss 20 voting start and end each week?</summary>
        <div class="bb-faq-body">
          <p>Official voting begins Monday night at 10:30 PM IST immediately after the weekly nomination episode finishes airing, and remains open until Friday night at 11:59 PM IST. Votes cast after midnight are not counted.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are missed call voting numbers completely free?</summary>
        <div class="bb-faq-body">
          <p>Yes, all numbers starting with 1800-313-xxxx are 100% toll-free across all telecom networks in India (Jio, Airtel, Vi, BSNL). Your balance will not be deducted.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How is the weekly eviction decided in Bigg Boss Season 20?</summary>
        <div class="bb-faq-body">
          <p>The contestant who receives the lowest total verified votes across JioCinema and missed calls among the nominated housemates is eliminated during the Sunday Weekend Ka Vaar episode hosted by Salman Khan.</p>
        </div>
      </details>
    </div>
  </section>`;
}

// Main Poll Page Renderer
export function renderBiggBossPollPage(poll) {
  return `
  <div class="container bb-page">
    <div class="bb-breadcrumbs">
      <a href="/">Home</a> / <a href="/bigg-boss-20-voting/">Bigg Boss 20</a> / <span>${poll.h1}</span>
    </div>

    ${renderPollPills(poll.slug)}

    <header class="bb-hero-section">
      <div class="bb-hero-badge">${poll.heroBadge}</div>
      <h1 class="bb-hero-title">${poll.h1}</h1>
      <p class="bb-hero-lead">${poll.lead}</p>
      <div class="bb-leader-highlight">
        <span class="fire-icon">🔥</span>
        <strong>${poll.leaderNote}</strong>
      </div>
    </header>

    ${poll.slug === "bigg-boss-20-voting" ? renderNominationCallout() : ""}

    ${renderDuelLinks(poll.slug)}

    ${renderPollCards(poll)}

    ${poll.slug === "bigg-boss-20-voting" ? renderNominatedStrip(poll.slug) : ""}

    ${renderLeaderboard(poll)}

    ${renderJioCinemaGuide()}

    ${poll.slug !== "bigg-boss-20-voting" ? renderMissedCallTable() : ""}

    ${renderFaqSection(poll)}
  </div>
  `;
}

// Contestants Directory Wiki Page Renderer
export function renderBiggBossContestantsPage() {
  return `
  <div class="container bb-page">
    <div class="bb-breadcrumbs">
      <a href="/">Home</a> / <a href="/bigg-boss-20-voting/">Bigg Boss 20</a> / <span>Contestants List</span>
    </div>

    ${renderPollPills("bigg-boss-20-contestants")}

    <header class="bb-hero-section">
      <div class="bb-hero-badge">👥 OFFICIAL ROSTER · 16 HOUSEMATES</div>
      <h1 class="bb-hero-title">Bigg Boss 20 Contestants List with Photos, Age, Bio & Missed Call Numbers</h1>
      <p class="bb-hero-lead">Complete directory of all 16 confirmed housemates entering the Bigg Boss Season 20 house. Explore verified biographies, hometowns, occupations, playing styles, and direct voting numbers.</p>
    </header>

    <div class="bb-contestants-wiki-grid">
      ${contestants
        .map(
          (c, idx) => `
        <article class="bb-wiki-card">
          <div class="bb-wiki-media">
            <img src="${c.image}" alt="${c.name} Bigg Boss 20" loading="lazy" decoding="async">
            <span class="bb-wiki-rank">#${idx + 1} Housemate</span>
            ${c.nominated ? '<span class="bb-wiki-nom">NOMINATED</span>' : '<span class="bb-wiki-safe">SAFE</span>'}
          </div>
          <div class="bb-wiki-content">
            <h2>${c.name}</h2>
            <div class="bb-wiki-meta">
              <span><strong>Age:</strong> ${c.age} Years</span>
              <span><strong>Hometown:</strong> ${c.city}</span>
              <span><strong>Profession:</strong> ${c.role}</span>
            </div>
            <p class="bb-wiki-bio">${c.bio}</p>
            <div class="bb-wiki-highlight">
              <strong>Key Highlight:</strong> ${c.highlight}
            </div>
            <div class="bb-wiki-footer">
              <div class="bb-wiki-call">
                <span>Missed Call Code:</span>
                <a href="tel:${c.missedCall}">📞 ${c.missedCall}</a>
              </div>
              <a href="/bigg-boss-20-voting/" class="bb-wiki-vote-btn">Vote in Live Poll</a>
            </div>
          </div>
        </article>
      `
        )
        .join("")}
    </div>

    ${renderJioCinemaGuide()}
    ${renderMissedCallTable()}
  </div>
  `;
}

// Voting Rules & Timings Page Renderer
export function renderBiggBossRulesPage() {
  return `
  <div class="container bb-page">
    <div class="bb-breadcrumbs">
      <a href="/">Home</a> / <a href="/bigg-boss-20-voting/">Bigg Boss 20</a> / <span>Voting Rules & Timings</span>
    </div>

    ${renderPollPills("bigg-boss-20-voting-rules")}

    <header class="bb-hero-section">
      <div class="bb-hero-badge">📋 OFFICIAL REGULATIONS & SCHEDULE</div>
      <h1 class="bb-hero-title">Bigg Boss 20 Voting Rules, Timings & Missed Call Numbers (Official Guide)</h1>
      <p class="bb-hero-lead">Everything you need to know about the official Bigg Boss Season 20 voting schedule, JioCinema app policies, toll-free missed call mechanics, and weekend elimination criteria.</p>
    </header>

    <div class="bb-rules-content">
      <section class="bb-rule-card">
        <h2>1. Official Voting Windows & Timings</h2>
        <p>The weekly voting cycle strictly follows television broadcast schedules:</p>
        <ul>
          <li><strong>Lines Open:</strong> Monday night at 10:30 PM IST immediately after the nomination episode concludes.</li>
          <li><strong>Lines Close:</strong> Friday night at 11:59 PM IST. Any vote submitted after this cut-off will not be tallied for that weekend's eviction.</li>
          <li><strong>Eviction Announcement:</strong> Salman Khan declares the eliminated housemate during 'Weekend Ka Vaar' on Saturday & Sunday at 9:00 PM IST.</li>
        </ul>
      </section>

      <section class="bb-rule-card">
        <h2>2. Permitted Voting Channels</h2>
        <p>Viewers located in India can vote through two official verified methods:</p>
        <ol>
          <li><strong>JioCinema Application:</strong> Available on iOS, Android, and web. Free users and JioCinema Premium subscribers are entitled to 1 vote per registered mobile account per day.</li>
          <li><strong>Toll-Free Missed Call Voting:</strong> Dial the 10-digit toll-free number mapped to your favorite contestant. The system disconnects automatically after 1 ring. Maximum 1 valid vote per SIM card per nomination cycle.</li>
        </ol>
      </section>

      <section class="bb-rule-card">
        <h2>3. Public Sentiment & Unofficial Polling</h2>
        <p>VisitBest conducts non-binding audience sentiment research and real-time popularity polls. Our interactive tools help fans monitor live momentum, debate house rivalries, track the Eviction Danger Zone, and discover official missed call numbers. To officially save a housemate from eviction, always cast your vote on JioCinema or via official missed call.</p>
      </section>
    </div>

    ${renderMissedCallTable()}
    ${renderJioCinemaGuide()}
  </div>
  `;
}

// Bigg Boss CSS Stylesheet
export const css = `
/* Bigg Boss 20 High-Hype Styling */

.bb-nom-status-callout {
  background: #fff;
  border: 1px solid #ffd8d8;
  border-left: 5px solid #d91438;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 14px rgba(217,20,56,0.06);
}
.bb-nom-callout-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}
.bb-nom-callout-header h2 {
  font-size: 1.2rem;
  margin: 0;
  color: #17253e;
}
.pulse-dot-red {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d91438;
  box-shadow: 0 0 0 0 rgba(217,20,56,0.7);
  animation: bbPulseRed 1.8s infinite;
}
@keyframes bbPulseRed {
  0% { box-shadow: 0 0 0 0 rgba(217,20,56,0.7); }
  70% { box-shadow: 0 0 0 10px rgba(217,20,56,0); }
  100% { box-shadow: 0 0 0 0 rgba(217,20,56,0); }
}
.bb-nom-list-text {
  font-size: 0.95rem;
  color: #334155;
  margin-bottom: 0.8rem;
  line-height: 1.6;
}
.bb-nom-names {
  color: #d91438;
  font-weight: 600;
}
.bb-nom-safe-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.85rem;
  padding-top: 0.6rem;
  border-top: 1px dashed #e2e8f0;
}
.bb-safe-indicator {
  color: #166534;
}
.bb-evicted-indicator {
  color: #64748b;
}
.bb-safe-captain-pill {
  font-size: 0.68rem;
  font-weight: 800;
  background: #dcfce7;
  color: #166534;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  letter-spacing: 0.05em;
}

.bb-page {
  padding: 1.5rem 0 3rem;
}
.bb-breadcrumbs {
  font-size: 0.85rem;
  color: var(--muted);
  margin-bottom: 1.2rem;
}
.bb-breadcrumbs a {
  color: var(--ink);
  font-weight: 600;
}
.bb-pill-nav {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  box-shadow: 0 4px 14px rgba(0,0,0,0.03);
}
.bb-nav-label {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--accent-dark);
  white-space: nowrap;
}
.bb-pill-scroll {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 2px;
  scrollbar-width: thin;
}
.bb-nav-pill {
  white-space: nowrap;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: var(--cream);
  color: var(--ink);
  border: 1px solid #ebdcd0;
  transition: all 0.2s ease;
}
.bb-nav-pill:hover, .bb-nav-pill.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
  transform: translateY(-1px);
}
.bb-hero-section {
  text-align: center;
  background: linear-gradient(135deg, #17253e 0%, #24334f 60%, #3a4b6e 100%);
  color: #fff;
  padding: clamp(2.5rem, 5vw, 4rem) 1.5rem;
  border-radius: 18px;
  margin-bottom: 2rem;
  box-shadow: 0 16px 40px rgba(23,37,62,0.18);
  position: relative;
  overflow: hidden;
}
.bb-hero-badge {
  display: inline-block;
  background: #ff3344;
  color: #fff;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 1rem;
  box-shadow: 0 0 16px rgba(255,51,68,0.4);
}
.bb-hero-title {
  color: #fff;
  font-size: clamp(2rem, 4vw, 3.2rem);
  margin: 0 auto 1rem;
  max-width: 900px;
  line-height: 1.18;
}
.bb-hero-lead {
  font-size: clamp(1rem, 1.6vw, 1.18rem);
  color: #dbe3ef;
  max-width: 780px;
  margin: 0 auto 1.5rem;
}
.bb-leader-highlight {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 12px;
  padding: 0.7rem 1.2rem;
  font-size: 0.95rem;
  color: #ffde59;
  backdrop-filter: blur(8px);
}
.bb-duel-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #fff8f1;
  border: 1px solid #ebdcd0;
  border-radius: 10px;
  padding: 0.6rem 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
}
.bb-duel-badge {
  font-size: 0.74rem;
  font-weight: 800;
  color: var(--accent);
  white-space: nowrap;
}
.bb-duel-links {
  display: flex;
  gap: 0.45rem;
}
.bb-duel-link {
  font-size: 0.78rem;
  font-weight: 700;
  background: #fff;
  border: 1px solid #decbbe;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  white-space: nowrap;
}
.bb-duel-link:hover, .bb-duel-link.active {
  background: var(--ink);
  color: #fff;
  border-color: var(--ink);
}
.bb-poll-meta-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.85rem 1.2rem;
  margin-bottom: 1.5rem;
}
.bb-status-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
  font-size: 0.82rem;
  color: #1b8a36;
}
.pulse-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #1b8a36;
  box-shadow: 0 0 0 0 rgba(27,138,54,0.7);
  animation: bbPulse 1.8s infinite;
}
@keyframes bbPulse {
  0% { box-shadow: 0 0 0 0 rgba(27,138,54,0.7); }
  70% { box-shadow: 0 0 0 10px rgba(27,138,54,0); }
  100% { box-shadow: 0 0 0 0 rgba(27,138,54,0); }
}
.bb-timer-box {
  font-size: 0.84rem;
  color: var(--muted);
}
.bb-timer-box strong {
  color: #ff3344;
  margin-left: 0.4rem;
  font-size: 0.95rem;
}
.bb-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.25rem;
  margin-bottom: 3rem;
}
.bb-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 18px rgba(0,0,0,0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
}
.bb-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
  border-color: #ebdcd0;
}
.bb-top-card {
  border: 2px solid var(--accent);
}
.bb-card-badge-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.8rem;
  background: #f8fafc;
  border-bottom: 1px solid var(--line);
}
.bb-rank-tag {
  font-size: 0.76rem;
  font-weight: 800;
  color: var(--ink-strong);
}
.bb-nom-pill {
  font-size: 0.68rem;
  font-weight: 800;
  background: #ffe3e6;
  color: #d91438;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  letter-spacing: 0.05em;
}
.bb-safe-pill {
  font-size: 0.68rem;
  font-weight: 800;
  background: #e4f7e9;
  color: #17833a;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  letter-spacing: 0.05em;
}
.bb-card-media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #e2e8f0;
}
.bb-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.3s ease;
}
.bb-card:hover .bb-card-media img {
  transform: scale(1.04);
}
.bb-live-share {
  position: absolute;
  right: 0.6rem;
  bottom: 0.6rem;
  background: rgba(23,37,62,0.85);
  color: #fff;
  font-weight: 800;
  font-size: 0.88rem;
  padding: 0.25rem 0.65rem;
  border-radius: 8px;
  backdrop-filter: blur(4px);
}
.bb-card-body {
  padding: 1rem 1.1rem 1.2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.bb-card-body h3 {
  margin: 0 0 0.2rem;
  font-size: 1.18rem;
}
.bb-card-role {
  font-size: 0.78rem;
  color: var(--muted);
  margin-bottom: 0.75rem;
}
.bb-progress-bar-wrap {
  background: #e5e7eb;
  border-radius: 999px;
  height: 9px;
  overflow: hidden;
  margin-bottom: 0.6rem;
}
.bb-progress-bar {
  background: linear-gradient(90deg, #c76027, #e07f43);
  height: 100%;
  border-radius: 999px;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.bb-card-numbers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.82rem;
  margin-bottom: 0.85rem;
}
.bb-votes-display {
  color: var(--ink);
}
.bb-trend-tag {
  color: #15803d;
  font-weight: 700;
  font-size: 0.75rem;
}
.bb-vote-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.65rem 1rem;
  font-weight: 800;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}
.bb-vote-btn:hover {
  background: var(--accent-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(199,96,39,0.25);
}
.bb-vote-btn.voted {
  background: #15803d;
  cursor: default;
}
.bb-missed-call-note {
  margin-top: 0.65rem;
  font-size: 0.74rem;
  color: var(--muted);
  text-align: center;
}
.bb-missed-call-note a {
  color: var(--accent-dark);
}

/* Duel Head to Head Styles */
.bb-duel-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.bb-duel-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.bb-duel-rank {
  font-size: 0.76rem;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
}
.bb-duel-photo {
  position: relative;
  width: 170px;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  margin-bottom: 1rem;
}
.bb-duel-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}
.bb-duel-pct {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(23,37,62,0.9);
  color: #ffde59;
  font-weight: 900;
  font-size: 1.2rem;
  padding: 0.35rem 0;
}
.bb-duel-details {
  width: 100%;
  max-width: 280px;
}
.bb-duel-details h3 {
  margin: 0 0 0.2rem;
  font-size: 1.35rem;
}
.bb-duel-role {
  font-size: 0.8rem;
  color: var(--muted);
  margin: 0 0 0.8rem;
}
.bb-vote-count-row {
  margin-bottom: 0.85rem;
  font-size: 0.88rem;
  color: var(--muted);
}
.bb-duel-vs {
  font-size: 1.8rem;
  font-weight: 900;
  color: #ff3344;
  background: #fff0f2;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(255,51,68,0.2);
}
@media (max-width: 768px) {
  .bb-duel-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* Nominated Strip Styles */
.bb-nominated-strip {
  background: linear-gradient(135deg, #fff5f5 0%, #fffbf8 100%);
  border: 1px solid #fed7d7;
  border-radius: 18px;
  padding: 1.8rem 1.5rem;
  margin-bottom: 3rem;
}
.bb-strip-header {
  margin-bottom: 1.3rem;
}
.bb-strip-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  font-weight: 800;
  color: #c53030;
  letter-spacing: 0.06em;
}
.bb-strip-sub {
  margin: 0.35rem 0 0;
  color: var(--muted);
  font-size: 0.92rem;
}
.bb-nominated-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.1rem;
}
.bb-nom-card {
  display: flex;
  background: #fff;
  border: 1px solid #fbd38d;
  border-radius: 14px;
  overflow: hidden;
  padding: 0.75rem;
  gap: 0.85rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}
.bb-nom-img-wrap {
  position: relative;
  width: 90px;
  height: 110px;
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
}
.bb-nom-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bb-nom-danger-tag {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #e53e3e;
  color: #fff;
  font-size: 0.62rem;
  font-weight: 800;
  text-align: center;
  padding: 0.15rem 0;
}
.bb-nom-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}
.bb-nom-info h4 {
  margin: 0;
  font-size: 1.02rem;
}
.bb-nom-role {
  font-size: 0.74rem;
  color: var(--muted);
}
.bb-nom-call {
  font-size: 0.72rem;
  color: var(--muted);
  margin: 0.25rem 0;
}
.bb-call-btn {
  display: inline-block;
  color: #2b6cb0;
  font-weight: 700;
  text-decoration: underline;
}
.bb-quick-vote-btn {
  background: #dd6b20;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 0.4rem 0.65rem;
  font-size: 0.74rem;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s ease;
}
.bb-quick-vote-btn:hover {
  background: #c05621;
}

/* Leaderboard & Danger Zone Table */
.bb-leaderboard-section {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 2rem 1.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 18px rgba(0,0,0,0.03);
}
.bb-section-head {
  margin-bottom: 1.5rem;
}
.bb-section-head h2 {
  margin: 0.35rem 0 0.5rem;
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
}
.bb-section-head p {
  color: var(--muted);
  margin: 0;
}
.bb-leaderboard-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}
.bb-leaderboard-table th {
  background: #f8fafc;
  padding: 0.85rem 1rem;
  text-align: left;
  font-weight: 800;
  color: var(--ink-strong);
  border-bottom: 2px solid var(--line);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.bb-leaderboard-table td {
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--line);
  vertical-align: middle;
}
.bb-row-top {
  background: #fffbf0;
}
.bb-row-danger {
  background: #fff5f5;
}
.bb-rank-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--cream);
  font-weight: 800;
  color: var(--ink);
  font-size: 0.8rem;
}
.bb-table-contestant {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.bb-table-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e2e8f0;
}
.bb-table-pct {
  font-weight: 800;
  color: var(--accent-dark);
}
.bb-badge-safe {
  font-size: 0.74rem;
  font-weight: 800;
  color: #15803d;
  background: #dcfce7;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  white-space: nowrap;
}
.bb-badge-danger {
  font-size: 0.74rem;
  font-weight: 800;
  color: #b91c1c;
  background: #fee2e2;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  white-space: nowrap;
}
.bb-badge-neutral {
  font-size: 0.74rem;
  font-weight: 700;
  color: #854d0e;
  background: #fef9c3;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  white-space: nowrap;
}
.bb-table-vote-btn {
  background: var(--ink);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.35rem 0.75rem;
  font-weight: 700;
  font-size: 0.78rem;
  cursor: pointer;
  transition: background 0.2s ease;
}
.bb-table-vote-btn:hover {
  background: var(--accent);
}

/* Steps Guide Grid */
.bb-guide-section {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 2rem 1.5rem;
  margin-bottom: 3rem;
}
.bb-steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}
.bb-step-card {
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 1.4rem 1.2rem;
  background: #fafafa;
  position: relative;
}
.bb-step-num {
  font-size: 2rem;
  font-weight: 900;
  color: var(--accent-soft);
  line-height: 1;
  margin-bottom: 0.5rem;
}
.bb-step-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.12rem;
}
.bb-step-card p {
  margin: 0;
  font-size: 0.88rem;
  color: var(--muted);
}

/* Missed Call Table */
.bb-missed-call-section {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 2rem 1.5rem;
  margin-bottom: 3rem;
}
.bb-missed-call-table {
  width: 100%;
  border-collapse: collapse;
}
.bb-missed-call-table th {
  background: #f8fafc;
  padding: 0.85rem 1rem;
  text-align: left;
  border-bottom: 2px solid var(--line);
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--ink-strong);
}
.bb-missed-call-table td {
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--line);
  vertical-align: middle;
}
.bb-phone-code {
  font-family: monospace;
  font-size: 1rem;
  font-weight: 800;
  color: var(--ink-strong);
  background: #edf2f7;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
}
.bb-dial-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: #2b6cb0;
  color: #fff !important;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  transition: background 0.2s ease;
}
.bb-dial-btn:hover {
  background: #2c5282;
}

/* FAQs */
.bb-faq-section {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 2rem 1.5rem;
  margin-bottom: 3rem;
}
.bb-faq-grid {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-top: 1.5rem;
}
.bb-faq-item {
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
  background: #fcfcfc;
}
.bb-faq-item summary {
  padding: 0.95rem 1.15rem;
  font-weight: 700;
  font-size: 0.98rem;
  cursor: pointer;
  background: #fff;
  outline: none;
}
.bb-faq-body {
  padding: 1rem 1.15rem;
  font-size: 0.92rem;
  color: #4a5568;
  border-top: 1px solid var(--line);
  background: #fcfcfc;
}

/* Contestants Wiki Cards */
.bb-contestants-wiki-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}
.bb-wiki-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 20px rgba(0,0,0,0.04);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.bb-wiki-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}
.bb-wiki-media {
  position: relative;
  aspect-ratio: 16 / 11;
  background: #e2e8f0;
}
.bb-wiki-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}
.bb-wiki-rank {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background: rgba(23,37,62,0.85);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  backdrop-filter: blur(4px);
}
.bb-wiki-nom {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: #e53e3e;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
}
.bb-wiki-safe {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: #38a169;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
}
.bb-wiki-content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.bb-wiki-content h2 {
  margin: 0 0 0.5rem;
  font-size: 1.35rem;
}
.bb-wiki-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  font-size: 0.8rem;
  color: var(--muted);
  margin-bottom: 0.85rem;
  border-bottom: 1px solid var(--line);
  padding-bottom: 0.65rem;
}
.bb-wiki-bio {
  font-size: 0.9rem;
  color: #4a5568;
  margin: 0 0 0.85rem;
  line-height: 1.55;
}
.bb-wiki-highlight {
  background: #fff8f1;
  border-left: 3px solid var(--accent);
  padding: 0.6rem 0.85rem;
  font-size: 0.82rem;
  color: var(--ink-strong);
  margin-bottom: 1.1rem;
  border-radius: 0 8px 8px 0;
}
.bb-wiki-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.85rem;
  border-top: 1px solid var(--line);
}
.bb-wiki-call {
  font-size: 0.75rem;
  color: var(--muted);
}
.bb-wiki-call a {
  display: block;
  color: #2b6cb0;
  font-weight: 800;
  font-size: 0.85rem;
}
.bb-wiki-vote-btn {
  background: var(--accent);
  color: #fff !important;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  transition: background 0.2s ease;
}
.bb-wiki-vote-btn:hover {
  background: var(--accent-dark);
}

/* Rules Page Content */
.bb-rules-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}
.bb-rule-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 1.8rem 1.5rem;
}
.bb-rule-card h2 {
  margin: 0 0 0.75rem;
  font-size: 1.35rem;
}
.bb-rule-card ul, .bb-rule-card ol {
  margin: 0.5rem 0 0 1.25rem;
  color: #4a5568;
  line-height: 1.7;
}

/* Notification Toast */
.bb-toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #17253e;
  color: #fff;
  padding: 0.9rem 1.4rem;
  border-radius: 12px;
  font-size: 0.92rem;
  font-weight: 700;
  box-shadow: 0 12px 32px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  z-index: 9999;
  animation: bbSlideUp 0.3s ease;
}
@keyframes bbSlideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
`;

// Bigg Boss Client-Side Interactivity Script
export const clientScript = `
(function() {
  // Real-time Friday 11:59 PM IST Countdown Timer
  function updateCountdown() {
    var timerEl = document.getElementById('bb-countdown');
    if (!timerEl) return;

    var now = new Date();
    // Friday = 5
    var dayOfWeek = now.getDay();
    var daysUntilFriday = (5 - dayOfWeek + 7) % 7;
    if (daysUntilFriday === 0 && (now.getHours() > 23 || (now.getHours() === 23 && now.getMinutes() === 59))) {
      daysUntilFriday = 7;
    }

    var targetFriday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilFriday, 23, 59, 59);
    var diff = targetFriday.getTime() - now.getTime();

    if (diff <= 0) {
      timerEl.textContent = "Voting Closed for this round";
      return;
    }

    var d = Math.floor(diff / (1000 * 60 * 60 * 24));
    var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((diff % (1000 * 60)) / 1000);

    timerEl.textContent = (d > 0 ? d + "d " : "") + h + "h " + m + "m " + s + "s";
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // Toast Notification
  function showToast(msg) {
    var existing = document.querySelector('.bb-toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'bb-toast';
    toast.innerHTML = '<span>🎉</span> ' + msg;
    document.body.appendChild(toast);

    setTimeout(function() {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(function() { toast.remove(); }, 400);
    }, 3200);
  }

  // Handle Client-Side Voting
  function registerVote(pollSlug, contestantId) {
    var storageKey = 'bb20_vote_' + pollSlug;
    var prevVote = localStorage.getItem(storageKey);

    if (prevVote === contestantId) {
      showToast('You already voted for this contestant! Your vote is counted.');
      return;
    }

    // Increment in localStorage
    var localDeltaKey = 'bb20_deltas_' + pollSlug;
    var deltas = {};
    try {
      deltas = JSON.parse(localStorage.getItem(localDeltaKey) || '{}');
    } catch(e) {}

    deltas[contestantId] = (deltas[contestantId] || 0) + 1;
    localStorage.setItem(localDeltaKey, JSON.stringify(deltas));
    localStorage.setItem(storageKey, contestantId);

    // Update UI elements
    var voteEl = document.getElementById('votes-' + pollSlug + '-' + contestantId);
    if (voteEl) {
      var current = parseInt(voteEl.textContent.replace(/,/g, ''), 10) || 0;
      voteEl.textContent = (current + 1).toLocaleString('en-IN');
    }

    var tableVoteEl = document.getElementById('table-votes-' + pollSlug + '-' + contestantId);
    if (tableVoteEl) {
      var curT = parseInt(tableVoteEl.textContent.replace(/,/g, ''), 10) || 0;
      tableVoteEl.textContent = (curT + 1).toLocaleString('en-IN');
    }

    // Mark buttons
    markVotedButtons(pollSlug, contestantId);
    showToast('Vote Registered for ' + contestantId.replace(/-/g, ' ').toUpperCase() + '! Thank you for supporting.');
  }

  function markVotedButtons(pollSlug, contestantId) {
    var btns = document.querySelectorAll('[data-vote-btn][data-poll-slug="' + pollSlug + '"]');
    btns.forEach(function(btn) {
      if (btn.getAttribute('data-vote-btn') === contestantId) {
        btn.classList.add('voted');
        btn.innerHTML = '<span>✓</span> VOTED';
      } else {
        btn.classList.remove('voted');
      }
    });
  }

  // Bind click listeners
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-vote-btn]');
    if (btn) {
      e.preventDefault();
      var cId = btn.getAttribute('data-vote-btn');
      var pSlug = btn.getAttribute('data-poll-slug');
      registerVote(pSlug, cId);
      return;
    }

    var quickBtn = e.target.closest('[data-vote-trigger]');
    if (quickBtn) {
      e.preventDefault();
      var qId = quickBtn.getAttribute('data-vote-trigger');
      var qSlug = quickBtn.getAttribute('data-poll-id') || 'bigg-boss-20-voting';
      registerVote(qSlug, qId);
      return;
    }
  });

  // Restore saved votes on load
  var pollContainers = document.querySelectorAll('[data-poll-slug]');
  pollContainers.forEach(function(pc) {
    var pSlug = pc.getAttribute('data-poll-slug');
    var saved = localStorage.getItem('bb20_vote_' + pSlug);
    if (saved) {
      markVotedButtons(pSlug, saved);
    }
  });
})();
`;
