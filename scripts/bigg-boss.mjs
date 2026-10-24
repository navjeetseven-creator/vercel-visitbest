// Bigg Boss 20 Contestants & Unofficial Open Poll Engine for VisitBest
// Client-side Unofficial Open Poll, contestant images, an explainer on how
// official voting works (only via JioCinema / JioHotstar, as announced on air),
// danger zone tracking, and FAQs. VisitBest polls are unofficial audience
// sentiment only and do not decide nominations or evictions.

export const contestants = [
  {
    "id": "gullu",
    "name": "Gullu (Kushal Tanwar)",
    "alias": "Gullu",
    "role": "Reality TV Star, Content Creator & Fitness Enthusiast",
    "age": "26–27",
    "city": "Gurugram, Haryana",
    "image": "/assets/bb20/gullu.webp",
    "nominated": true,
    "captain": false,
    "status": "in-house",
    "bio": "Kushal Tanwar, known as Gullu or Gullu Boxer, is a reality-show winner — MTV Roadies XX: Double Cross (2025), Splitsvilla and Maa Hai Naa — and a hotel-management graduate from IHMCT Pune who worked in hospitality and event management before television. In the house he mixes entertainment and physical tasks, with an early captaincy stint that has long since ended.",
    "longBio": "Gullu came in as one of reality television's form players, with back-to-back reality wins giving him a ready fanbase. His long friendship with Roadies gang leader Elvish Yadav, the Bigg Boss OTT 2 winner, has been a talking point in the house, and Elvish publicly backed him after his clash with wild card Nakul Dhull — the altercation after which Nakul was removed in Week 6. Nominated again in Week 7, Gullu's survival depends on whether his reality-show fanbase converts into Bigg Boss support. Note: his exact date of birth is not reliably verified; secondary profiles give a birth year of 1999, so his age is shown as approximate.",
    "trend": "In house · Nominated Week 7",
    "highlight": "Roadies XX winner at the centre of the Nakul Dhull removal — now fighting a Week 7 nomination."
  },
  {
    "id": "qazi-touqeer",
    "name": "Qazi Touqeer",
    "alias": "Qazi",
    "role": "Singer & Reality TV Icon",
    "age": 40,
    "city": "Srinagar, Kashmir",
    "image": "/assets/bb20/qazi-touqeer.webp",
    "nominated": false,
    "status": "in-house",
    "bio": "Qazi Ahmed Touqeer (born 4 June 1986, Srinagar) won Fame Gurukul on 20 October 2005 alongside Ruprekha Banerjee — the season that also featured a young Arijit Singh — and became a household name for raw, emotional singing. Best remembered on film for his appearance in 'Afghan Jalebi' from Phantom (2015), he returns to national television exactly 21 years later as this season's great nostalgia story.",
    "longBio": "Qazi is the son of Mushtaq Ahmed Qazi, a lawyer who later embraced Sufism, and Syeda Rukhsana, a school teacher; his uncle Qazi Rafi is a well-known Kashmiri singer and his younger brother is entrepreneur Qazi Touseef. Inside the house he has been emotional, musical and confrontational in turn: a clash with Scout, a friendship with Mahhi Vij that cracked in Episode 47 over his closeness with Arishfa Khan and Uditi Singh, an apology to Aasif Khan over a remark Aasif took personally, and then winning the 23 October captaincy task round and handing the captaincy to Mahhi. Qazi kept his personal life private for years; in the house he revealed he married during Covid in 2020. His wife Ifsa (also spelt Hifza/Hifsa in reports) is a dentist nine years younger than him. Circulating photos said to be of his wife remain unverified.",
    "trend": "In house · Won the Week 7 captaincy task round",
    "highlight": "Fame Gurukul winner marking 21 years in the house in October 2026 — and the man who made Mahhi captain."
  },
  {
    "id": "scout",
    "name": "Tanmay 'Scout' Singh",
    "alias": "Scout",
    "role": "Pro Esports Athlete & Gaming Creator",
    "age": 30,
    "city": "Mumbai, Maharashtra",
    "image": "/assets/bb20/scout.webp",
    "nominated": false,
    "status": "in-house",
    "bio": "Tanmay Singh (born 30 July 1996), universally known as Scout or ScoutOP, is one of the pioneers of Indian esports — a former professional BGMI/PUBG Mobile player turned one of the country's biggest gaming creators. In the house he has played tactically and spoken bluntly, captained the house in Week 7, and clashed repeatedly with Qazi Touqeer, including in the 23 October captaincy task.",
    "longBio": "Scout's personal life has become the season's biggest outside-the-house storyline. He has said in the house that he has been in a relationship for around five years with gaming creator Kaashvi Hiranandani, known as KaashPlays (born 28 April 1997, Mumbai, age 29 — a streamer who moved from a finance career into gaming and was named Female Streamer of the Year at the Indian Gaming Awards 2022). Scout has discussed a difficult past relationship and spoken of marriage plans, saying Kaashvi wants to be financially independent first. That is now colliding with his on-screen bond with Love Gill, which both describe as a brother-sister bond but which guest host Rohit Shetty questioned in Weekend Ka Vaar promos, and with Kaashvi's reported Weekend Ka Vaar appearance, in which she is reported to tell him she is finding it difficult to defend him.",
    "trend": "In house · Captain in Week 7, succeeded by Mahhi Vij",
    "highlight": "Week 7 captain whose game, his bond with Love Gill, and his relationship with girlfriend Kaashvi (KaashPlays) all collide on Weekend Ka Vaar."
  },
  {
    "id": "mary-kom",
    "name": "MC Mary Kom",
    "alias": "Mary Kom",
    "role": "Olympic Medalist & 6x World Boxing Champion",
    "age": 43,
    "city": "Kangathei, Manipur",
    "image": "/assets/bb20/mary-kom.webp",
    "nominated": true,
    "status": "reported-evicted",
    "bio": "Mangte Chungneijang Mary Kom (born 1 March 1983, Kangathei, Manipur) is, by achievement, the most decorated person ever to enter a Bigg Boss house: the only woman to win six World Boxing Championship titles, an Olympic bronze medallist (London 2012), Asian Games and Commonwealth Games gold medallist, and Padma Vibhushan awardee. Her Bigg Boss stint was about presence more than gameplay, and she commanded respect whenever she spoke.",
    "longBio": "Born to Mangte Tonpa Kom and Mangte Akham Kom, Mary Kom took up boxing after being inspired by Dingko Singh's 1998 Asian Games gold and initially hid it from her father. Her stint also brought controversy, including backlash over a remark about fellow Indian sportswomen, after which her team apologised and said her words were misunderstood. She was nominated in Week 7 alongside Arishfa Khan, Uditi Singh, Manish Goel, Aamrapali Dubey, Love Gill and Gullu. On 24 October, ABP Live reported that she had been eliminated after reportedly receiving the fewest votes, with her exit expected to feature in an upcoming Weekend Ka Vaar episode. That elimination is REPORTED only — official on-air confirmation from the makers is awaited, so she is listed here as 'Reported evicted', not as a confirmed eviction.",
    "trend": "Reported evicted · Week 7 (awaiting on-air confirmation)",
    "highlight": "Six-time world champion and Olympic medallist — reported evicted in Week 7; do not treat as confirmed until it airs."
  },
  {
    "id": "yung-dsa",
    "name": "Yung DSA",
    "alias": "Yung DSA",
    "role": "Hip-Hop Artist & Underground Rapper",
    "age": null,
    "city": "Mumbai, Maharashtra",
    "image": "/assets/bb20/yung-dsa.webp",
    "nominated": false,
    "status": "in-house",
    "bio": "Yung DSA is a Mumbai-based hip-hop artist and creator representing the underground gully-rap generation, whose appeal is built on raw, unfiltered lyricism rather than television familiarity. He won the Week 1 captaincy through the 2X Room round and has been one of the house's sharper, more confrontational voices in nominations and task arguments, with spontaneous disses that play well with younger viewers.",
    "longBio": "This season's early game was structured around 'lives' and lifelines, and Yung's Week 1 captaincy shaped it. Reporting early in the season said Yung and Scout approached Qazi in the first two weeks to plan together; Qazi says he chose to stay away and play his own game — a small detail that explains a lot about the house's shifting groups. Yung was among the housemates knocked out of the captaincy race in the volatile 23 October task. His youth and hip-hop community support remains his core audience base. His exact age and date of birth are not reliably verified, so no precise age is published here.",
    "trend": "In house · Week 1 captain",
    "highlight": "Week 1 captain and the house's gully-rap voice — strong youth and hip-hop community support, still in the game in Week 7."
  },
  {
    "id": "kanika-mann",
    "name": "Kanika Mann",
    "alias": "Kanika",
    "role": "Television Actress & Model",
    "age": 33,
    "city": "Panipat, Haryana",
    "image": "/assets/bb20/kanika-mann.webp",
    "nominated": false,
    "status": "in-house",
    "bio": "Kanika Mann (born 7 October 1993, Panipat) holds a Master of Laws (LL.M.) from Panjab University and is best known as Guddan in Guddan Tumse Na Ho Payega, after Badho Bahu, Punjabi films including Rocky Mental and Daana Paani, the web series Roohaniyat, and a finalist run on Khatron Ke Khiladi 12. She was this season's first confirmed contestant and its first housemate through the door on premiere night, 6 September.",
    "longBio": "Kanika's route into acting was not straightforward: her father initially opposed acting and wanted her to pursue law — she completed the law degree, then acting won, and he later helped her with her first audition. On entering, she received a 'Puppet Master' power to influence later entrants. Inside the house she has been competitive and emotionally direct, was praised by Salman Khan in Week 5 Weekend Ka Vaar coverage, took a life from Rohed Khan in the Week 2 sequence that preceded his eviction, and featured in Episode 47's key Scout conversation — teasing him about not knowing his girlfriend's birthday, a clip that fed the wider Kaashvi story.",
    "trend": "In house",
    "highlight": "The season's first entrant — a law graduate turned TV star, still in the house in Week 7."
  },
  {
    "id": "amrapali-dubey",
    "name": "Aamrapali Dubey",
    "alias": "Amrapali",
    "role": "Bhojpuri Cinema Superstar",
    "age": 39,
    "city": "Gorakhpur / Mumbai",
    "image": "/assets/bb20/amrapali-dubey.webp",
    "nominated": true,
    "status": "in-house",
    "bio": "Aamrapali Dubey is one of Bhojpuri cinema's biggest leading actresses. She made her Bhojpuri film debut in 2014 opposite Dinesh Lal Yadav 'Nirahua' in Nirahua Hindustani, after earlier television work, and built a career of blockbuster Bhojpuri hits and devotional releases that makes her a household name across Uttar Pradesh, Bihar and Jharkhand — and gives her the season's most loyal regional audience.",
    "longBio": "That regional audience is Aamrapali's Bigg Boss superpower: few housemates can match the loyalty of the Bhojpuri belt when she is nominated — and she is nominated in Week 7, on the same list from which Mary Kom was reported evicted. Inside the house her journey has been less about engineered controversy and more about presence in daily life and group equations, including light-hearted kitchen-duty moments in the 23 October episode while the captaincy battle raged around her. Her birthday is 11 January; the birth year (1987) comes from secondary profiles rather than a primary source, so her age is shown with that caution.",
    "trend": "In house · Nominated Week 7",
    "highlight": "Bhojpuri superstar with the season's most loyal regional vote bank — on the Week 7 nomination list."
  },
  {
    "id": "aasif-khan",
    "name": "Aasif Khan",
    "alias": "Aasif Khan",
    "role": "Critically Acclaimed Actor",
    "age": 35,
    "city": "Nimbahera, Rajasthan",
    "image": "/assets/bb20/aasif-khan.webp",
    "nominated": false,
    "status": "in-house",
    "bio": "Aasif Khan (born 13 March 1991, Nimbahera) is one of India's most respected OTT supporting actors — Ganesh in Panchayat, Babar in Mirzapur and Anas in Jamtara — after five years of theatre in Jaipur and work as a casting associate. In Bigg Boss he has played a calm, observant game, became captain in Week 5, and is praised for mature, neutral reads of house disputes.",
    "longBio": "Aasif is the son of the late Ayyub Khan and Firdous Khan, and married Zeba on 10 December 2024 in Mumbai. He won the first round of the Episode 47 captaincy-contenders task, knocking Qazi and Gullu out of that race. October also brought a serious personal story into the open: reporting on 23 October, attributed to his wife Zeba, said Aasif had previously suffered a major heart attack, which he had earlier described publicly as acid reflux. A remark by Qazi in a house argument was taken by Aasif as a reference to that history; Qazi apologised and clarified it was not directed at him. That health detail is reported here only as attributed reporting.",
    "trend": "In house · Captain in Week 5",
    "highlight": "Panchayat's Ganesh and a Week 5 captain — the house's calm strategist."
  },
  {
    "id": "mahhi-vij",
    "name": "Mahhi Vij",
    "alias": "Mahhi",
    "role": "Television Actress & Reality Winner",
    "age": 44,
    "city": "New Delhi / Mumbai",
    "image": "/assets/bb20/mahhi-vij.webp",
    "nominated": false,
    "captain": true,
    "status": "in-house",
    "bio": "Mahhi Vij (born 1 April 1982, New Delhi) is Nakusha from Laagi Tujhse Lagan, a Jhalak Dikhhla Jaa 4 contestant and, with husband Jay Bhanushali, winner of Nach Baliye 5. One of the house's most experienced reality performers, her friendship with Qazi Touqeer was one of the season's defining bonds — which is why its crack in Episode 47 mattered, and why Qazi choosing her as captain days later mattered more.",
    "longBio": "Mahhi married actor Jay Bhanushali in 2011; they have a daughter, Tara (born 2019), and foster children Khushi and Rajveer. In Episode 47, Mahhi confronted Qazi over his loyalty after seeing him with Uditi Singh and Arishfa Khan, saying she felt used; Qazi disagreed and chose not to talk it through at that point. Yet on 23 October it was Qazi who won the captaincy task round and declared Mahhi the new captain, succeeding Scout. As captain going into Weekend Ka Vaar, every duty allocation and every defence of her friends will now be read as captaincy, not just personality.",
    "trend": "In house · Current captain (from 23 October)",
    "highlight": "Current captain — chosen by Qazi on 23 October, days after their Episode 47 fall-out."
  },
  {
    "id": "arishfa-khan",
    "name": "Arishfa Khan",
    "alias": "Arishfa",
    "role": "Digital Influencer & Former Child Star",
    "age": 23,
    "city": "Shahjahanpur, Uttar Pradesh",
    "image": "/assets/bb20/arishfa-khan.webp",
    "nominated": true,
    "status": "in-house",
    "bio": "Arishfa Khan (born 3 April 2003, Shahjahanpur) debuted as a child artist in Chhal – Sheh Aur Maat in 2012 and became known as young Gunjan in Ek Veer Ki Ardaas… Veera, with credits including Jeannie Aur Juju, Uttaran and Papa By Chance. She rebuilt her career as a TikTok-era star on Instagram and YouTube, and at 23 is the season's youngest contestant — with more than 29 million Instagram followers, its biggest digital following.",
    "longBio": "Arishfa reportedly became interested in acting while accompanying her mother, who worked as a stunt performer, to shoots. In the house she has fought against being dismissed as 'bacchi' (a child) — a running tension for the youngest housemate. She is nominated in Week 7, was at the centre of a captaincy-task flashpoint in Episode 47 reporting, and her closeness with Qazi and Uditi Singh is the trigger Mahhi cited in the Episode 47 confrontation that cracked the Mahhi–Qazi friendship.",
    "trend": "In house · Nominated Week 7 · Youngest housemate",
    "highlight": "Youngest housemate with the house's biggest social following (29M+) — nominated in Week 7 and central to the Qazi–Mahhi split."
  },
  {
    "id": "aman-gandhi",
    "name": "Aman Gandhi",
    "alias": "Aman",
    "role": "Television Actor",
    "age": null,
    "city": "New Delhi",
    "image": "/assets/bb20/aman-gandhi.webp",
    "nominated": false,
    "evicted": true,
    "evictedWeek": 6,
    "status": "evicted",
    "bio": "Aman Gandhi is a television actor known for Bhagya Lakshmi and Kuch Rang Pyar Ke Aise Bhi. He spent six weeks in the house: in Week 5 he reportedly received the fewest votes but, with no eviction that week, lost a lifeline instead. He was then evicted on public votes in Week 6, announced on 18 October, when he was named in the bottom three alongside Uditi Singh and Mary Kom.",
    "longBio": "Aman's Week 3 move in the luxury-ration sequence, taking a life from Yung DSA, showed a willingness to play tactically, and inside the house he built a close friendship group with Uditi Singh and Arishfa Khan. On 23 October he had to clarify, after a viral photo of him holding a UNO 'wild' card caused re-entry rumours, that it was a joke at a podcast interview — he is not re-entering as a wild card. His exact age and date of birth are not reliably verified, so no precise age is published here.",
    "trend": "Evicted · Week 6",
    "highlight": "Evicted in Week 6 after a Week 5 lifeline reprieve — and forced, a week later, to deny wild-card re-entry rumours over a joke photo."
  },
  {
    "id": "rohed-khan",
    "name": "Rohed Khan",
    "alias": "Rohed",
    "role": "Actor & Model",
    "age": null,
    "city": "Austria / based in India",
    "image": "/assets/bb20/rohed-khan.webp",
    "nominated": false,
    "evicted": true,
    "evictedWeek": 2,
    "status": "evicted",
    "bio": "Rohed Khan is an Austrian actor and model who appeared in the Kangana Ranaut film Tejas (2023). His Bigg Boss journey was the season's shortest: in Week 2, Kanika Mann took a life from him in the 2X Room sequence, and he then lost his second life after the public vote — becoming the first eviction of the season, five weeks before this page was updated.",
    "longBio": "With only two weeks on screen, Rohed never had time to build the alliances or the audience narrative that might have saved him, and he remains the clearest reminder that, in this lives-based format, an unfamiliar face plus an early nomination can end a journey before it starts. His exact age and date of birth are not reliably verified, so no precise age is published here.",
    "trend": "Evicted · Week 2 (first eviction)",
    "highlight": "First evicted, in Week 2, after losing both lives — the old page wrongly still listed him as 'Safe'."
  },
  {
    "id": "isha-rikhi",
    "name": "Isha Rikhi",
    "alias": "Isha",
    "role": "Punjabi Film Actress & Model",
    "age": null,
    "city": "Chandigarh, Punjab",
    "image": "/assets/bb20/isha-rikhi.webp",
    "nominated": false,
    "evicted": true,
    "evictedWeek": 3,
    "status": "evicted",
    "bio": "Isha Rikhi is a leading face of Punjabi cinema, known for films including Jatt Boys Pind Pehre Dar and Happy Go Lucky. Her soft-spoken diplomacy and quiet alliance-building were vulnerable in the fast, lives-based opening month: in Week 3 she and Rhiti Tiwari each lost a life in the ration-ranking task, and Isha then lost her last life after the public vote and was evicted in Week 3.",
    "longBio": "Isha's eviction, following Rohed Khan's in Week 2, established the early pattern of the season: the first month belonged to the reality-show and digital fanbases, and film faces without a television or social-media voting machine behind them went home first. Her exact age and date of birth are not reliably verified, so no precise age is published here.",
    "trend": "Evicted · Week 3",
    "highlight": "Evicted in Week 3 after losing her last life — the old page wrongly kept her listed as 'Safe'."
  },
  {
    "id": "love-gill",
    "name": "Love Gill",
    "alias": "Love Gill",
    "role": "Punjabi Actress, Model & Digital Creator",
    "age": null,
    "city": "Amritsar, Punjab",
    "image": "/assets/bb20/love-gill.webp",
    "nominated": true,
    "status": "in-house",
    "bio": "Love Gill is a popular face from Punjabi music videos and Punjabi screen work who entered this season through the Fans Ka Faisla route — arriving with a public mandate rather than only a casting decision. Love is nominated in Week 7, in the same weekend that guest host Rohit Shetty is reported to question the on-screen bond with Scout, which both Love and Scout consistently describe as a brother-sister bond.",
    "longBio": "In the Weekend Ka Vaar promo reported on 24 October, Rohit Shetty is reported to tell Love Gill and Scout that physical closeness including massages is 'looking absolutely wrong' from outside. Earlier house coverage also had the makers warning the pair, and Scout reflecting that being in a committed relationship makes house attachments harder. How Love answers on Weekend Ka Vaar — and whether the Fans Ka Faisla audience still backs Love — may decide both survival this week and the wider Kaashvi storyline. Love Gill's exact age and date of birth are not reliably verified, so no precise age is published here.",
    "trend": "In house · Nominated Week 7",
    "highlight": "The Fans Ka Faisla entrant facing reported Weekend Ka Vaar questions about Scout — while nominated for eviction."
  },
  {
    "id": "rhiti-tiwari",
    "name": "Rhiti Tiwari",
    "alias": "Rhiti",
    "role": "Singer & Composer",
    "age": null,
    "city": "Varanasi, Uttar Pradesh",
    "image": "/assets/bb20/rhiti-tiwari.webp",
    "nominated": false,
    "evicted": true,
    "evictedWeek": 4,
    "status": "evicted",
    "bio": "Rhiti Tiwari is a singer and composer, and the daughter of Bhojpuri star and MP Manoj Tiwari. Her journey was shaped by the Week 3–4 lives sequence: after losing a life in the Week 3 ration-ranking task, her last life was taken by the captaincy contenders in Week 4 and she was evicted mid-week — a format exit that gave her no usual Weekend Ka Vaar farewell stage.",
    "longBio": "Reports in early October that Rhiti had been sent to a secret room and would return were subsequently reported as false. Her profession and family background were corrected in this update: season reporting identifies her as a singer-composer and Manoj Tiwari's daughter, not primarily as a dance/lifestyle creator as the old page claimed. Her exact age and date of birth are not reliably verified, so no precise age is published here.",
    "trend": "Evicted · Week 4 (mid-week)",
    "highlight": "Evicted mid-week in Week 4 — a singer-composer from one of Bhojpuri's most famous music families."
  },
  {
    "id": "uditi-singh",
    "name": "Uditi Singh",
    "alias": "Uditi",
    "role": "Actress & Model",
    "age": null,
    "city": "Jaipur / Mumbai",
    "image": "/assets/bb20/uditi-singh.webp",
    "nominated": true,
    "status": "in-house",
    "bio": "Uditi Singh is an actress and model with a fashion and pageant background, and the season's repeat danger-zone survivor. She received the fewest votes in Week 1 but, with no eviction that week, lost a life instead of leaving; she was in the Week 6 bottom three that sent Aman Gandhi home, was put straight into nominations by captain Scout, and is nominated again in Week 7 — still in the house.",
    "longBio": "Uditi has played much of the season inside a friendship group with Arishfa Khan and, until his eviction, Aman Gandhi, and her closeness with Arishfa and with Qazi is the specific trigger Mahhi cited in the Episode 47 friendship crack with Qazi. She also won a round of the Episode 47 captaincy-contenders task, removing Yung and Scout from that race. Her exact age and date of birth are not reliably verified, so no precise age is published here.",
    "trend": "In house · Nominated Week 7",
    "highlight": "The season's repeat danger-zone survivor — fewest votes in Week 1, bottom three in Week 6, nominated again in Week 7, still in."
  },
  {
    "id": "manish-goel",
    "name": "Manish Goel",
    "alias": "Manish",
    "role": "Television Actor",
    "age": 51,
    "city": "New Delhi",
    "image": "/assets/bb20/manish-goel.webp",
    "nominated": true,
    "status": "in-house",
    "bio": "Manish Goel (born 27 August 1975, New Delhi) was not on this page at all until this update, despite entering as the season's first official wild card during Weekend Ka Vaar in Week 5. With a television career starting in the late 1990s — Kahaani Ghar Ghar Kii, Kasautii Zindagii Kay, Bhabhi, Ghar Ek Mandir and, most recently, Anupamaa as Raghav — he has worked in television longer than some housemates have been alive, and at 51 is the house's oldest housemate.",
    "longBio": "Manish arrived under a playful cover story, telling housemates he was there to promote a project, before Salman Khan revealed the 'project' was Bigg Boss itself. He is married to actress Poonam Narula (married 2002); they have two children, Aryaveer and Maliha, were runners-up on Nach Baliye 1 together, and he won Welcome – Baazi Mehmaan Nawazi Ki in 2013. In the house, the veteran has had to build bonds from zero against groups formed over five weeks, and he is nominated in Week 7. No /assets/bb20/ portrait exists for Manish yet, so his card deliberately shows a placeholder instead of another housemate's image.",
    "trend": "In house · Wild card (Week 5) · Nominated Week 7",
    "highlight": "The season's first wild card and its oldest housemate at 51 — a three-decade TV career entering a house already five weeks formed."
  },
  {
    "id": "nakul-dhull",
    "name": "Nakul Dhull",
    "alias": "Nakul",
    "role": "Social Media Creator",
    "age": null,
    "city": "",
    "image": "/assets/bb20/nakul-dhull.webp",
    "nominated": false,
    "evicted": true,
    "removed": true,
    "status": "removed",
    "bio": "Nakul Dhull entered as a wild card in Week 5, with far less public biography available than any original housemate — a fact stated honestly here rather than filled with invented detail. Within about a week, his journey ended not by public vote but by removal: multiple reports agree he was asked to leave the show in Week 6 after a physical altercation with Gullu (Kushal Tanwar), for breaking the house rules. He is therefore listed as 'Removed', never 'Evicted'.",
    "longBio": "The reported altercation drew public support for Gullu from Elvish Yadav, Maxtern and Karan Kundrra in outside coverage. Season fact-checking coverage also flagged an earlier viral claim that Nakul was thrown out on Day 1 after a fight with Gullu as unverified and single-source — that rumour should not be confused with the reported Week 6 removal, and is not published here as fact. No reliable age, date of birth or hometown source was found for Nakul in this audit, so none is published. No /assets/bb20/ portrait exists for Nakul, so his card deliberately shows a placeholder instead of another housemate's image.",
    "trend": "Removed · Week 6",
    "highlight": "Wild card removed in Week 6 after a reported physical altercation with Gullu — labelled 'Removed', never 'Evicted'."
  }
];

export const contestantById = new Map(contestants.map((c) => [c.id, c]));

// Predefined poll definitions with specific narratives and vote distributions
export const polls = [
  {
    slug: "bigg-boss-20-voting",
    title: "Bigg Boss 20 Voting – Week 7 Unofficial Open Poll & Audience Sentiment - VisitBest",
    h1: "Bigg Boss 20 Voting – Week 7 Unofficial Open Poll",
    lead: "VisitBest Unofficial Open Poll for Week 7: Qazi Touqeer leads the audience sentiment standings, followed closely by ScoutOP, Gullu and Yung DSA. Seven contestants are nominated this week — Gullu, Mary Kom, Aamrapali Dubey, Arishfa Khan, Love Gill, Uditi Singh and wild card Manish Goel. Mahhi Vij is captain. This poll is unofficial and does not decide evictions.",
    heroBadge: "🔴 LIVE AUDIENCE POLL · WEEK 4 · UNOFFICIAL OPEN POLL",
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
    dangerIds: ["mary-kom", "uditi-singh", "love-gill"],
    metaDesc: "Bigg Boss 20 Week 7 Unofficial Open Poll: Qazi Touqeer leads VisitBest audience sentiment followed by ScoutOP, Gullu and Yung DSA. Check the 7 nominated contestants and the current captain. Unofficial only — official voting is only via JioCinema / JioHotstar as announced on air.",
  },
  {
    slug: "bigg-boss-20-winner-prediction",
    title: "Who Will Win Bigg Boss 20? Winner Prediction Poll & Finale Odds — Unofficial Open Poll",
    h1: "Who Will Win Bigg Boss 20? Finale Winner Prediction (Unofficial Open Poll)",
    lead: "The race to the Season 20 Trophy is heating up! Qazi Touqeer leads the grand winner predictions with overwhelming musical fanbase support, closely chased by esports icon Scout and comedy sensation Gullu. Who will lift the trophy?",
    heroBadge: "🏆 GRAND FINALE TROPHY POLL · UNOFFICIAL OPEN POLL",
    leaderNote: "👑 WINNER PREDICTION LEADER: Qazi Touqeer holds #1 with 384,100 votes! Scout and Gullu are locked in a thriller for the runner-up position. [VisitBest Unofficial Open Poll votes — not official votes.]",
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
    metaDesc: "Unofficial Open Poll: Bigg Boss 20 Winner Prediction Poll: Qazi Touqeer leading the trophy race! Vote for your predicted Bigg Boss Season 20 winner between Scout, Gullu & Mary Kom.",
  },
  {
    slug: "bigg-boss-20-best-contestant",
    title: "Best Contestant of Bigg Boss 20 Poll – Strategic Mastermind & Top Player — Unofficial Open Poll",
    h1: "Who is the Best Contestant of Bigg Boss 20? (Unofficial Open Poll)",
    lead: "Which contestant is playing the smartest, most entertaining, and fearless game in Bigg Boss Season 20? Gaming maestro Tanmay 'Scout' Singh dominates the Best Contestant poll with 38.5% of total votes.",
    heroBadge: "⭐ MVP & BEST PLAYER POLL · UNOFFICIAL OPEN POLL",
    leaderNote: "🎯 MVP LEADER: Scout (Tanmay Singh) reigns supreme with 452,000 votes for his sharp tactical tasks and fearless captaincy! [VisitBest Unofficial Open Poll votes — not official votes.]",
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
    metaDesc: "Unofficial Open Poll: Vote for the Best Contestant of Bigg Boss 20! Scout leads the all-round player ranking with 452,000+ votes, ahead of Gullu, Mary Kom, and Qazi Touqeer.",
  },
  {
    slug: "bigg-boss-20-joker-of-the-house",
    title: "Who is the Joker of Bigg Boss 20? Most Fake & Over-Dramatic Contestant Poll — Unofficial Open Poll",
    h1: "Who is the Joker of Bigg Boss 20? (Most Dramatic / Fake) (Unofficial Open Poll)",
    lead: "Bigg Boss is never complete without loud theatrics, cringe fights, and over-the-top acting. Who is acting as the true Joker of the house? Aman Gandhi tops the negative hype poll with 42.1% votes!",
    heroBadge: "🤡 SPICY UNFILTERED PUBLIC POLL · UNOFFICIAL OPEN POLL",
    leaderNote: "🎭 JOKER OF THE HOUSE: Aman Gandhi leads this spicy audience sentiment poll with 310,500 votes! Rohed Khan follows in 2nd place. [VisitBest Unofficial Open Poll votes — not official votes.]",
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
    metaDesc: "Unofficial Open Poll: Who is the biggest Joker or most fake contestant in Bigg Boss 20? Aman Gandhi is leading with 42% votes. Cast your unfiltered vote in this trending poll!",
  },
  {
    slug: "bigg-boss-20-who-is-boss",
    title: "Who is the Real Boss of Bigg Boss 20? Dominant Leader & Authority Poll — Unofficial Open Poll",
    h1: "Who is the Real Boss of the Bigg Boss 20 House? (Unofficial Open Poll)",
    lead: "Who controls the house dynamics, commands total respect, and dictates the kitchen and task schedules? Olympic legend MC Mary Kom is leading the Real Boss poll with 36.4% vote share!",
    heroBadge: "👑 ALPHA LEADER POLL · UNOFFICIAL OPEN POLL",
    leaderNote: "🥊 REAL BOSS: MC Mary Kom leads with 395,200 votes! Housemates listen when she speaks. Scout and Gullu follow behind. [VisitBest Unofficial Open Poll votes — not official votes.]",
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
    metaDesc: "Unofficial Open Poll: Who is the Real Boss of Bigg Boss Season 20? MC Mary Kom leads with 395,000+ votes! Scout and Gullu battle for dominance. Cast your vote now!",
  },
  {
    slug: "bigg-boss-20-entertainer",
    title: "Biggest Entertainer of Bigg Boss 20 Poll – 24/7 Comedy & Viral Moments — Unofficial Open Poll",
    h1: "Who is the Biggest Entertainer of Bigg Boss 20? (Unofficial Open Poll)",
    lead: "Who delivers pure entertainment, memorable punchlines, hilarious comedy, and viral social media reels? Gullu and Qazi Touqeer are locked in a historic tie for Bigg Boss 20 Entertainer #1!",
    heroBadge: "🎭 24/7 ENTERTAINMENT POLL · UNOFFICIAL OPEN POLL",
    leaderNote: "⚡ DEAD HEAT: Gullu (368,000 votes) and Qazi Touqeer (362,300 votes) are separated by less than 1%! Yung DSA is climbing fast. [VisitBest Unofficial Open Poll votes — not official votes.]",
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
    metaDesc: "Unofficial Open Poll: Vote for the Biggest Entertainer of Bigg Boss 20! Gullu and Qazi Touqeer are tied at 32% votes each with non-stop comedy and high-energy music.",
  },
  // Head to Head Duels
  {
    slug: "bigg-boss-20-gullu-vs-qazi",
    title: "Gullu vs Qazi Touqeer: Bigg Boss 20 Mega Rivalry Poll – Who Deserves More Votes? — Unofficial Open Poll",
    h1: "Gullu vs Qazi Touqeer: The Ultimate Mega Duel (Unofficial Open Poll)",
    lead: "The biggest rivalry of Bigg Boss Season 20! Digital sensation Gullu battles singing legend Qazi Touqeer in a direct head-to-head vote. Who will come out on top?",
    heroBadge: "⚔️ MEGA DUEL #1 · UNOFFICIAL OPEN POLL",
    leaderNote: "🔥 Gullu is leading with 54.2% against Qazi Touqeer's 45.8% across 680,000+ total faceoff votes! [VisitBest Unofficial Open Poll votes — not official votes.]",
    pollType: "duel",
    duelIds: ["gullu", "qazi-touqeer"],
    voteDistribution: {
      gullu: 372100,
      "qazi-touqeer": 314500,
    },
    metaDesc: "Unofficial Open Poll: Gullu vs Qazi Touqeer Unofficial Open Poll in Bigg Boss 20: Gullu leads with 54% votes! Cast your head-to-head vote and support your champion now.",
  },
  {
    slug: "bigg-boss-20-scout-vs-gullu",
    title: "Scout vs Gullu: Gaming Fandom vs Comedy Army – Bigg Boss 20 Fan Clash — Unofficial Open Poll",
    h1: "Scout vs Gullu: Gaming Titans vs Comedy Fandom (Unofficial Open Poll)",
    lead: "Two colossal youth fanbases collide! Tanmay 'Scout' Singh takes on Gullu in an electrifying popularity showdown. Which fandom has the real voting firepower?",
    heroBadge: "⚔️ MEGA DUEL #2 · UNOFFICIAL OPEN POLL",
    leaderNote: "🎮 Scout is leading by a razor-thin margin: 51.8% vs Gullu's 48.2% with over 720,000 votes cast! [VisitBest Unofficial Open Poll votes — not official votes.]",
    pollType: "duel",
    duelIds: ["scout", "gullu"],
    voteDistribution: {
      scout: 376400,
      gullu: 350200,
    },
    metaDesc: "Unofficial Open Poll: Scout vs Gullu Unofficial Open Poll: Esports powerhouse Scout battles comedy sensation Gullu in Bigg Boss 20. Vote now in this record-breaking head-to-head poll!",
  },
  {
    slug: "bigg-boss-20-qazi-vs-scout",
    title: "Qazi Touqeer vs Scout: Who Deserves the Bigg Boss 20 Finale Spot? — Unofficial Open Poll",
    h1: "Qazi Touqeer vs Scout: The Finale Clash (Unofficial Open Poll)",
    lead: "Kashmiri singing sensation Qazi Touqeer faces off against esports champion Scout for the #1 finalist spot in Bigg Boss 20. Who will punch their ticket to the finale?",
    heroBadge: "⚔️ MEGA DUEL #3 · UNOFFICIAL OPEN POLL",
    leaderNote: "🎙️ Qazi Touqeer leads with 51.1% against Scout's 48.9%! Every single vote matters in this clash. [VisitBest Unofficial Open Poll votes — not official votes.]",
    pollType: "duel",
    duelIds: ["qazi-touqeer", "scout"],
    voteDistribution: {
      "qazi-touqeer": 348900,
      scout: 334100,
    },
    metaDesc: "Unofficial Open Poll: Qazi Touqeer vs Scout: Who deserves the Bigg Boss 20 Finale trophy? Cast your vote in this epic clash between music and gaming fandoms.",
  },
  {
    slug: "bigg-boss-20-gullu-vs-yung",
    title: "Gullu vs Yung DSA: Street Comedy vs Gully Rap – Bigg Boss 20 Faceoff — Unofficial Open Poll",
    h1: "Gullu vs Yung DSA: Comedy vs Gully Rap (Unofficial Open Poll)",
    lead: "Street comedy meets hard-hitting underground hip-hop! Who rules the youth vibe inside the Bigg Boss 20 house? Gullu vs Yung DSA live audience vote.",
    heroBadge: "⚔️ MEGA DUEL #4 · UNOFFICIAL OPEN POLL",
    leaderNote: "🎤 Gullu leads with 61.4% vote share, but Yung DSA's hip-hop fanbase is closing the gap with rapid surge! [VisitBest Unofficial Open Poll votes — not official votes.]",
    pollType: "duel",
    duelIds: ["gullu", "yung-dsa"],
    voteDistribution: {
      gullu: 284000,
      "yung-dsa": 178900,
    },
    metaDesc: "Unofficial Open Poll: Gullu vs Yung DSA Unofficial Open Poll: Comedy king Gullu faces underground rapper Yung DSA in Bigg Boss 20. Vote now to back your favorite vibe!",
  },
  {
    slug: "bigg-boss-20-mary-kom-vs-gullu",
    title: "Mary Kom vs Gullu: Champion Dignity vs Comedy Chaos – Bigg Boss 20 Poll — Unofficial Open Poll",
    h1: "Mary Kom vs Gullu: Powerhouse vs Entertainer (Unofficial Open Poll)",
    lead: "Disciplined Olympic champion MC Mary Kom squares off against unfiltered comedy machine Gullu. Do you value quiet strength and dignity, or relentless laughter?",
    heroBadge: "⚔️ MEGA DUEL #5 · UNOFFICIAL OPEN POLL",
    leaderNote: "🥊 Mary Kom edges ahead with 52.8% of the public vote thanks to massive family and national sports fan support! [VisitBest Unofficial Open Poll votes — not official votes.]",
    pollType: "duel",
    duelIds: ["mary-kom", "gullu"],
    voteDistribution: {
      "mary-kom": 312000,
      gullu: 279100,
    },
    metaDesc: "Unofficial Open Poll: Mary Kom vs Gullu Bigg Boss 20 Poll: Olympic champion takes on entertainer Gullu. Vote for your favorite style in this unique clash!",
  },
  {
    slug: "bigg-boss-20-kanika-vs-mahhi",
    title: "Kanika Mann vs Mahhi Vij: TV Queens Faceoff – Bigg Boss 20 Popularity Battle — Unofficial Open Poll",
    h1: "Kanika Mann vs Mahhi Vij: Battle of Television Queens (Unofficial Open Poll)",
    lead: "Two of Indian television's biggest sweethearts and fiercest reality stars clash in this direct poll. Who will win the hearts of daily soap viewers and fans?",
    heroBadge: "⚔️ MEGA DUEL #6 · UNOFFICIAL OPEN POLL",
    leaderNote: "📺 Kanika Mann leads with 54.6% against Mahhi Vij's 45.4% across 420,000+ votes! [VisitBest Unofficial Open Poll votes — not official votes.]",
    pollType: "duel",
    duelIds: ["kanika-mann", "mahhi-vij"],
    voteDistribution: {
      "kanika-mann": 234100,
      "mahhi-vij": 194800,
    },
    metaDesc: "Unofficial Open Poll: Kanika Mann vs Mahhi Vij: Vote in the ultimate Bigg Boss 20 TV Queens clash! Kanika leads with 54% votes. Check live trends and cast your vote.",
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
          name: "Bigg Boss 20 Voting Rules & Timings — Unofficial Guide (Official Voting via JioCinema / JioHotstar)",
          description: "Unofficial VisitBest guide explaining how official Bigg Boss 20 voting works via JioCinema / JioHotstar as announced on air, plus the VisitBest Unofficial Open Poll disclaimer. VisitBest does not publish missed-call voting numbers.",
          url: `${baseUri}/bigg-boss-20-voting-rules/`,
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How can I vote officially for Bigg Boss Season 20?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Official voting, where opened by the show, is only through the official platform — JioCinema / JioHotstar — as announced on Colors TV / JioHotstar during the episode. Open the official app, find Bigg Boss Season 20, and follow the voting instructions and limits shown there for the current week.",
              },
            },
            {
              "@type": "Question",
              name: "Does VisitBest publish missed call voting numbers for Bigg Boss 20?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. VisitBest removed previously listed missed-call numbers because no reliable official source for them could be verified. Official voting, where opened by the show, is only via JioCinema / JioHotstar, as announced on air.",
              },
            },
            {
              "@type": "Question",
              name: "When does the Bigg Boss 20 voting line close?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Official voting windows are announced by the show on Colors TV / JioHotstar during the episode for that week. Rely only on the dates and times announced on air and in the official app.",
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
      name: "Bigg Boss 20 Contestants List with Photos, Age, Bio & Journey (Updated Week 7)",
      description: "Complete directory of all 18 Bigg Boss Season 20 housemates (16 originals plus 2 wild cards) with photos where available, corrected bios, occupations and Week 7 status. Includes the VisitBest Unofficial Open Poll disclaimer.",
      url: `${baseUri}/bigg-boss-20-contestants/`,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: contestants.map((c, idx) => ({
          "@type": "Person",
          position: idx + 1,
          name: c.name,
          description: c.bio,
          jobTitle: c.role,
          ...(c.image ? { image: `${baseUri}${c.image}` } : {}),
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
            name: "How frequently is the VisitBest Unofficial Open Poll updated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The VisitBest Unofficial Open Poll is updated as readers cast opinion votes on this site. It is unofficial audience sentiment only, is not official Bigg Boss voting, and does not decide nominations or evictions. Official voting is only via JioCinema / JioHotstar, as announced on air.",
            },
          },
          {
            "@type": "Question",
            name: "Is this poll free to vote?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — the VisitBest Unofficial Open Poll is free. It registers your choice in our unofficial audience sentiment poll only; it is not an official Bigg Boss vote.",
            },
          },
        ],
      },
    ],
  };
}


// Shared Unofficial Open Poll disclaimer — required on every poll / contestants / rules page
export const UNOFFICIAL_POLL_DISCLAIMER = "Unofficial Open Poll — for audience sentiment only. This poll is run by VisitBest for entertainment and discussion. It is NOT official Bigg Boss voting, it does not decide nominations or evictions, and its results are not official vote counts. Official voting, where opened by the show, is only through the official platform — JioCinema / JioHotstar — as announced on Colors TV / JioHotstar during the episode. Please do not treat VisitBest poll percentages as official results.";

function renderUnofficialPollDisclaimer() {
  return `<section class="bb-unofficial-disclaimer" role="note" aria-label="Unofficial Open Poll disclaimer">
    <h2>Unofficial Open Poll</h2>
    <p><strong>Unofficial Open Poll — for audience sentiment only.</strong> This poll is run by VisitBest for entertainment and discussion. It is NOT official Bigg Boss voting, it does not decide nominations or evictions, and its results are not official vote counts. <strong>Official voting, where opened by the show, is only through the official platform — JioCinema / JioHotstar — as announced on Colors TV / JioHotstar during the episode.</strong> Please do not treat VisitBest poll percentages as official results.</p>
  </section>`;
}

// Render Poll Navigation Pills
function renderPollPills(currentSlug) {
  const links = [
    ["bigg-boss-20-voting", "🔥 Grand Voting Poll (Qazi #1)"],
    ["bigg-boss-20-guide", "📖 Season Guide"],
    ["bigg-boss-20-web-stories", "📱 Web Stories"],
    ["bigg-boss-20-where-to-watch", "📺 Where to Watch"],
    ["bigg-boss-20-winner-prediction", "🏆 Winner Trophy (Qazi #1)"],
    ["bigg-boss-20-best-contestant", "⭐ Best Player (Scout #1)"],
    ["bigg-boss-20-joker-of-the-house", "🤡 Joker of House (Aman #1)"],
    ["bigg-boss-20-who-is-boss", "👑 Real Boss (Mary Kom #1)"],
    ["bigg-boss-20-entertainer", "🎭 Entertainer Clash"],
    ["bigg-boss-20-contestants", "👥 18 Contestants Wiki"],
    ["bigg-boss-20-voting-rules", "📋 Voting Guide"],
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
      <p class="bb-strip-sub">These are the Week 7 nominated housemates. Support them in the VisitBest Unofficial Open Poll below — it is unofficial audience sentiment only and does not decide evictions. Official voting is only via JioCinema / JioHotstar, as announced on air.</p>
    </div>
    <div class="bb-nominated-grid">
      ${nominatedList
        .map(
          (c) => `
        <div class="bb-nom-card">
          <div class="bb-nom-img-wrap">
            ${c.image ? `<img src="${c.image}" alt="${c.name} Bigg Boss 20 Nominated" loading="lazy" decoding="async">` : `<span class="bb-img-placeholder" aria-label="No photo yet for ${c.name}">Photo coming soon</span>`}
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
      <h2>🔴 Bigg Boss 20 Week 7 Nominations — Unofficial Open Poll</h2>
    </div>
    <p class="bb-nom-list-text">
      <strong>7 contestants are nominated this week:</strong><br>
      <span class="bb-nom-names">Gullu (Kushal Tanwar) • Mary Kom (reported evicted — awaiting on-air confirmation) • Aamrapali Dubey • Arishfa Khan • Love Gill • Uditi Singh • Manish Goel (wild card)</span>
    </p>
    <div class="bb-nom-safe-bar">
      <span class="bb-safe-indicator">🟢 <strong>Captain This Week:</strong> Mahhi Vij (chosen by Qazi Touqeer, who won the 23 October captaincy task round; Scout was the previous captain)</span>
      <span class="bb-evicted-indicator">❌ <strong>Evicted:</strong> Rohed Khan (Week 2), Isha Rikhi (Week 3), Rhiti Tiwari (Week 4), Aman Gandhi (Week 6) · <strong>Removed:</strong> Nakul Dhull (wild card, Week 6)</span>
    </div>
    <p class="bb-nom-list-text"><strong>Unofficial Open Poll — for audience sentiment only.</strong> Official voting is only via JioCinema / JioHotstar, as announced on air.</p>
  </div>`;
}

// Render Interactive Voting Poll Cards
function renderPollCards(poll) {
  const { list } = getPollStats(poll);
  const isDuel = poll.duelIds && poll.duelIds.length === 2;

  return `<div class="bb-poll-container" data-poll-slug="${poll.slug}">
    <div class="bb-poll-meta-bar">
      <div class="bb-status-pill"><span class="pulse-dot"></span> UNOFFICIAL OPEN POLL — AUDIENCE SENTIMENT ONLY</div>
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
              ${c.image ? `<img src="${c.image}" alt="${c.name}" loading="lazy" decoding="async">` : `<span class="bb-img-placeholder" aria-label="No photo yet for ${c.name}">Photo coming soon</span>`}
              <span class="bb-duel-pct" id="pct-${poll.slug}-${c.id}">${c.pctStr}</span>
            </div>
            <div class="bb-duel-details">
              <h3>${c.name}</h3>
              <p class="bb-duel-role">${c.role} · ${c.city}</p>
              <div class="bb-progress-bar-wrap">
                <div class="bb-progress-bar" id="bar-${poll.slug}-${c.id}" style="width: ${c.pct}%;"></div>
              </div>
              <div class="bb-vote-count-row">
                <span class="bb-vote-num" id="votes-${poll.slug}-${c.id}">${c.votes.toLocaleString("en-IN")}</span> Unofficial Open Poll votes
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
              ${c.removed ? '<span class="bb-nom-pill">⛔ REMOVED</span>' : c.status === "reported-evicted" ? '<span class="bb-nom-pill">🟠 REPORTED EVICTED (UNCONFIRMED)</span>' : c.evicted ? '<span class="bb-nom-pill">❌ EVICTED</span>' : c.captain ? '<span class="bb-safe-captain-pill">🟢 SAFE – CAPTAIN</span>' : c.nominated ? '<span class="bb-nom-pill">🔴 NOMINATED</span>' : '<span class="bb-safe-pill">🟢 SAFE</span>'}
            </div>
            <div class="bb-card-media">
              ${c.image ? `<img src="${c.image}" alt="${c.name} Bigg Boss 20" loading="lazy" decoding="async">` : `<span class="bb-img-placeholder" aria-label="No photo yet for ${c.name}">Photo coming soon</span>`}
              <div class="bb-live-share" id="pct-${poll.slug}-${c.id}">${c.pctStr}</div>
            </div>
            <div class="bb-card-body">
              <h3>${c.name}</h3>
              <span class="bb-card-role">${c.role}</span>
              <div class="bb-progress-bar-wrap">
                <div class="bb-progress-bar" id="bar-${poll.slug}-${c.id}" style="width: ${c.pct}%;"></div>
              </div>
              <div class="bb-card-numbers">
                <span class="bb-votes-display"><strong id="votes-${poll.slug}-${c.id}">${c.votes.toLocaleString("en-IN")}</strong> Unofficial Open Poll votes</span>
                <span class="bb-trend-tag">${c.trend}</span>
              </div>
              <button class="bb-vote-btn" data-vote-btn="${c.id}" data-poll-slug="${poll.slug}">
                <span class="btn-icon">🗳️</span> VOTE IN OPEN POLL
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
        <h2>Unofficial Open Poll – Audience Sentiment Standings</h2>
        <p>Ranking of housemates by votes cast in the VisitBest Unofficial Open Poll on this page. Figures are VisitBest Unofficial Open Poll votes only — they are not official Bigg Boss votes and do not decide evictions.</p>
        <div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ℹ️ <strong>Unofficial Open Poll — for audience sentiment only.</strong> This leaderboard represents unofficial audience sentiment tracked on VisitBest. It does not decide nominations or evictions. Official Bigg Boss 20 voting, where opened by the show, is only via JioCinema / JioHotstar, as announced on air.
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
            <th>Unofficial Open Poll Votes</th>
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
                  ${c.image ? `<img src="${c.image}" alt="${c.name}" class="bb-table-avatar" loading="lazy">` : ""}
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
      <p class="eyebrow">How Official Voting Works</p>
      <h2>How Official Voting Works for Bigg Boss 20 (JioCinema / JioHotstar)</h2>
      <p>Official voting, where opened by the show, is only through the official platform — JioCinema / JioHotstar — as announced on Colors TV / JioHotstar during the episode. The steps below are a general guide to that official process; always follow the instructions given on air and in the app for the current week. VisitBest has no official voting numbers of its own.</p>
    </div>

    <div class="bb-steps-grid">
      <div class="bb-step-card">
        <div class="bb-step-num">01</div>
        <h3>Download & Open JioCinema</h3>
        <p>Install the latest version of the official app (JioCinema / JioHotstar) from Google Play Store or Apple App Store and sign in as instructed in the app.</p>
      </div>
      <div class="bb-step-card">
        <div class="bb-step-num">02</div>
        <h3>Navigate to Bigg Boss Season 20</h3>
        <p>Search 'Bigg Boss Season 20' or click on the featured Bigg Boss banner displayed prominently on the app home screen.</p>
      </div>
      <div class="bb-step-card">
        <div class="bb-step-num">03</div>
        <h3>Find the Voting Section, If Voting Is Open</h3>
        <p>If voting has been opened for that week, the app will show a voting section or banner for Bigg Boss Season 20 during the announced voting window.</p>
      </div>
      <div class="bb-step-card">
        <div class="bb-step-num">04</div>
        <h3>Select Your Housemate & Submit</h3>
        <p>Choose your housemate in the app and submit as instructed on screen. Only votes cast this way, inside the announced official window, count towards evictions.</p>
      </div>
    </div>
  </section>`;
}

// (Removed in Phase 1: the unverified missed-call numbers table was deleted — see renderUnofficialPollDisclaimer.)

// Render Bigg Boss FAQ Section
function renderFaqSection(poll) {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 20 Voting & Eviction FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Who is currently leading the VisitBest Unofficial Open Poll today?</summary>
        <div class="bb-faq-body">
          <p>${poll.leaderNote} This is Unofficial Open Poll audience sentiment only — it is not official voting and does not decide evictions.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How does official Bigg Boss 20 voting work, and how is it different from the VisitBest poll?</summary>
        <div class="bb-faq-body">
          <p>Official voting, where opened by the show, is only through the official platform — JioCinema / JioHotstar — as announced on Colors TV / JioHotstar during the episode, under the rules and limits shown there. The VisitBest Unofficial Open Poll is separate: it is an opinion poll for audience sentiment only, it is not official voting, and it does not decide nominations or evictions.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>When does official Bigg Boss 20 voting open and close each week?</summary>
        <div class="bb-faq-body">
          <p>Official voting windows are announced by the show on Colors TV / JioHotstar during the episode for that week. Please rely only on the dates and times announced on air and in the official app for the current week — VisitBest does not publish its own official voting schedule.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Does VisitBest publish missed-call voting numbers for Bigg Boss 20?</summary>
        <div class="bb-faq-body">
          <p>No. VisitBest previously listed unverified missed-call numbers on this site; they have been removed because no reliable official source for them could be verified. Do not rely on missed-call numbers published by unofficial sites. Official voting, where opened by the show, is only via JioCinema / JioHotstar, as announced on air.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How is the weekly eviction decided in Bigg Boss Season 20?</summary>
        <div class="bb-faq-body">
          <p>Evictions are decided by the show through its official voting process, as announced on Colors TV / JioHotstar. The VisitBest Unofficial Open Poll plays no part in deciding who is eliminated.</p>
        </div>
      </details>
    </div>
  </section>`;
}

// High-Impression Responsive AdSense Unit for Bigg Boss Pages
export function renderAdSenseUnit(position = "mid", label = "Advertisement") {
  return `<div class="bb-ad-wrapper bb-ad-${position}" style="margin:2rem auto;text-align:center;min-height:90px;max-width:970px;clear:both;padding:12px;background:#fbfbfa;border:1px solid #ebecee;border-radius:12px;">
    <span style="display:block;font-size:10px;font-weight:700;letter-spacing:1.2px;color:#8c9ba5;text-transform:uppercase;margin-bottom:8px;">${label}</span>
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-6008816938247526"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </div>`;
}

// Main Poll Page Renderer
export function renderBiggBossPollPage(poll) {
  return `
  <div class="container bb-page">
    <div class="bb-breadcrumbs">
      <a href="/">Home</a> / <a href="/bigg-boss-20-guide/">Bigg Boss 20</a> / <span>${poll.h1}</span>
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

    ${renderUnofficialPollDisclaimer()}

    ${poll.slug === "bigg-boss-20-voting" ? renderNominationCallout() : ""}

    ${renderAdSenseUnit("top", "Sponsored / Advertisement")}

    ${renderDuelLinks(poll.slug)}

    ${renderPollCards(poll)}

    ${renderAdSenseUnit("after-voting", "Advertisement")}

    ${poll.slug === "bigg-boss-20-voting" ? renderNominatedStrip(poll.slug) : ""}

    ${renderLeaderboard(poll)}

    ${renderAdSenseUnit("after-leaderboard", "Advertisement")}

    ${renderJioCinemaGuide()}

    ${renderUnofficialPollDisclaimer()}

    ${renderAdSenseUnit("bottom", "Advertisement")}

    ${renderFaqSection(poll)}
  </div>
  `;
}

// Contestants Directory Wiki Page Renderer
export function renderBiggBossContestantsPage() {
  const statusPill = (c) =>
    c.removed
      ? '<span class="bb-wiki-nom">REMOVED — WEEK 6</span>'
      : c.status === "reported-evicted"
      ? '<span class="bb-wiki-nom">REPORTED EVICTED — WEEK 7 (AWAITING ON-AIR CONFIRMATION)</span>'
      : c.evicted
      ? `<span class="bb-wiki-nom">EVICTED${c.evictedWeek ? ` — WEEK ${c.evictedWeek}` : ""}</span>`
      : c.captain
      ? '<span class="bb-wiki-safe">CAPTAIN</span>'
      : c.nominated
      ? '<span class="bb-wiki-nom">NOMINATED — WEEK 7</span>'
      : '<span class="bb-wiki-safe">IN THE HOUSE</span>';
  return `
  <div class="container bb-page">
    <div class="bb-breadcrumbs">
      <a href="/">Home</a> / <a href="/bigg-boss-20-voting/">Bigg Boss 20</a> / <span>Contestants List</span>
    </div>

    ${renderPollPills("bigg-boss-20-contestants")}

    <header class="bb-hero-section">
      <div class="bb-hero-badge">👥 FULL ROSTER · 18 HOUSEMATES (16 ORIGINALS + 2 WILD CARDS) · UPDATED WEEK 7</div>
      <h1 class="bb-hero-title">Bigg Boss 20 Contestants List with Photos, Age, Bio & Journey So Far</h1>
      <p class="bb-hero-lead">Complete, updated directory of every Bigg Boss Season 20 housemate — all 16 originals plus wild cards Manish Goel and Nakul Dhull — with corrected ages where they can be verified, what each housemate was known for before the show, how their journey has actually gone up to 24 October 2026, and whether they are still in the house. Where a date of birth could not be reliably verified, we say so rather than guessing.</p>
    </header>

    <section class="bb-status-summary">
      <h2>At a glance — who is still in?</h2>
      <ul>
        <li><strong>Still in the house (at 24 Oct, before the Weekend Ka Vaar eviction airs):</strong> Gullu (Kushal Tanwar), Qazi Touqeer, Tanmay 'Scout' Singh, Yung DSA, Kanika Mann, Aamrapali Dubey, Aasif Khan, Mahhi Vij (current captain), Arishfa Khan, Love Gill, Uditi Singh, Manish Goel (wild card)</li>
        <li><strong>Reported evicted — Week 7, awaiting on-air confirmation:</strong> MC Mary Kom (reported by ABP Live on 24 October; official confirmation from the makers is awaited — not presented here as confirmed)</li>
        <li><strong>Evicted:</strong> Rohed Khan (Week 2), Isha Rikhi (Week 3), Rhiti Tiwari (Week 4, mid-week), Aman Gandhi (Week 6)</li>
        <li><strong>Removed by Bigg Boss:</strong> Nakul Dhull (wild card, Week 6, after a reported physical altercation with Gullu)</li>
        <li><strong>Captain:</strong> Mahhi Vij, from 23 October — Qazi Touqeer won the captaincy task round and chose her. Scout was the previous captain.</li>
      </ul>
    </section>

    ${renderUnofficialPollDisclaimer()}

    ${renderAdSenseUnit("contestants-top", "Advertisement")}

    <div class="bb-contestants-wiki-grid">
      ${contestants
        .map(
          (c, idx) => `
        <article class="bb-wiki-card">
          <div class="bb-wiki-media">
            ${c.image ? `<img src="${c.image}" alt="${c.name} Bigg Boss 20" loading="lazy" decoding="async">` : `<span class="bb-img-placeholder bb-wiki-placeholder" aria-label="No photo yet for ${c.name}">Photo coming soon</span>`}
            <span class="bb-wiki-rank">#${idx + 1} Housemate</span>
            ${statusPill(c)}
          </div>
          <div class="bb-wiki-content">
            <h2>${c.name}</h2>
            <div class="bb-wiki-meta">
              <span><strong>Age:</strong> ${c.age ? `${c.age} Years` : "Not publicly verified"}</span>
              ${c.city ? `<span><strong>Hometown:</strong> ${c.city}</span>` : ""}
              <span><strong>Profession:</strong> ${c.role}</span>
            </div>
            <p class="bb-wiki-bio">${c.bio}</p>
            ${c.longBio ? `<details class="bb-wiki-longbio"><summary>Full bio & journey so far</summary><p>${c.longBio}</p></details>` : ""}
            <div class="bb-wiki-highlight">
              <strong>Key Highlight:</strong> ${c.highlight}
            </div>
            <div class="bb-wiki-footer">
              ${c.evicted || c.removed ? `<span class="bb-wiki-status-note">${c.trend}</span>` : `<a href="/bigg-boss-20-voting/" class="bb-wiki-vote-btn">Vote in Unofficial Open Poll</a>`}
            </div>
          </div>
        </article>
      `
        )
        .join("")}
    </div>

    ${renderAdSenseUnit("contestants-mid", "Advertisement")}
    ${renderJioCinemaGuide()}
    ${renderUnofficialPollDisclaimer()}
    ${renderAdSenseUnit("contestants-bottom", "Advertisement")}
  </div>
  `;
}

// Voting Rules & Timings Page Renderer
export function renderBiggBossRulesPage() {
  return `
  <div class="container bb-page">
    <div class="bb-breadcrumbs">
      <a href="/">Home</a> / <a href="/bigg-boss-20-guide/">Bigg Boss 20</a> / <span>Voting Rules & Timings</span>
    </div>

    ${renderPollPills("bigg-boss-20-voting-rules")}

    <header class="bb-hero-section">
      <div class="bb-hero-badge">📋 UNOFFICIAL GUIDE · OFFICIAL VOTING ONLY VIA JIOCINEMA / JIOHOTSTAR</div>
      <h1 class="bb-hero-title">Bigg Boss 20 Voting Rules & Timings — How Official Voting Works</h1>
      <p class="bb-hero-lead">An unofficial VisitBest explainer: how official Bigg Boss Season 20 voting works, and how it differs from the VisitBest Unofficial Open Poll. VisitBest does not publish missed-call voting numbers — previously listed unverified numbers have been removed.</p>
    </header>

    ${renderUnofficialPollDisclaimer()}

    ${renderAdSenseUnit("rules-top", "Advertisement")}

    <div class="bb-rules-content">
      <section class="bb-rule-card">
        <h2>1. Official Voting Windows & Timings</h2>
        <p>Official voting windows are announced by the show on Colors TV / JioHotstar during the episode for that week. Please rely only on the dates and times announced on air and in the official app for the current week — there is no official voting outside those announced windows, and VisitBest does not publish its own official voting schedule.</p>
      </section>

      <section class="bb-rule-card">
        <h2>2. The Only Official Voting Channel</h2>
        <p>Official voting, where opened by the show, is only through the official platform:</p>
        <ol>
          <li><strong>JioCinema / JioHotstar:</strong> Open the official app, find Bigg Boss Season 20, and follow the voting instructions and limits shown there for the current week.</li>
        </ol>
        <p>VisitBest does not offer official voting, does not publish missed-call voting numbers, and cannot save a housemate from eviction. Numbers previously listed on this site were removed because no reliable official source for them could be verified.</p>
      </section>

      <section class="bb-rule-card">
        <h2>3. Public Sentiment & the VisitBest Unofficial Open Poll</h2>
        <p><strong>Unofficial Open Poll — for audience sentiment only.</strong> VisitBest runs a non-binding audience sentiment poll for entertainment and discussion. It is NOT official Bigg Boss voting, it does not decide nominations or evictions, and its results are not official vote counts. To officially support a housemate, always vote via JioCinema / JioHotstar as announced on air.</p>
      </section>
    </div>

    ${renderJioCinemaGuide()}
    ${renderUnofficialPollDisclaimer()}
  </div>
  `;
}

// Bigg Boss CSS Stylesheet
export const css = `
/* Bigg Boss 20 High-Hype Styling */

.bb-unofficial-disclaimer { background:#fff8e6; border:1px solid #ffd591; border-left:5px solid #d48806; border-radius:12px; padding:1rem 1.25rem; margin:1.5rem 0; color:#613400; }
.bb-unofficial-disclaimer h2 { margin:0 0 .5rem; font-size:1.05rem; color:#873800; }
.bb-unofficial-disclaimer p { margin:0; font-size:.92rem; line-height:1.55; }
.bb-status-summary { background:#fff; border:1px solid #e6e8eb; border-radius:12px; padding:1.25rem 1.5rem; margin:1.5rem 0; }
.bb-status-summary h2 { margin-top:0; font-size:1.15rem; }
.bb-status-summary li { margin-bottom:.45rem; line-height:1.55; }
.bb-img-placeholder { display:flex; align-items:center; justify-content:center; min-height:180px; background:#eef1f4; color:#5b6b7a; font-weight:700; letter-spacing:.4px; text-align:center; padding:1rem; }
.bb-wiki-longbio { margin:.75rem 0; }
.bb-wiki-longbio summary { cursor:pointer; font-weight:700; color:#17253e; }
.bb-wiki-longbio p { margin-top:.5rem; line-height:1.6; }
.bb-wiki-status-note { font-weight:700; color:#873800; }


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

/* Legacy missed-call table styles (unused since Phase 1 removal) */
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
      showToast('You already voted for this contestant in this Unofficial Open Poll!');
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
    showToast('Unofficial Open Poll vote registered for ' + contestantId.replace(/-/g, ' ').toUpperCase() + '! This is audience sentiment only and does not decide evictions.');
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
