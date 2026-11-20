// Bigg Boss 20 Contestants & Open Poll Engine for VisitBest
// Client-side Open Poll, contestant images, an explainer on how
// official voting works (only via JioCinema / JioHotstar, as announced on air),
// danger zone tracking, and FAQs. VisitBest polls are open audience
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
    "longBio": "Gullu came in as one of reality television's form players, with back-to-back reality wins giving him a ready fanbase. His long friendship with Roadies gang leader Elvish Yadav, the Bigg Boss OTT 2 winner, has been a talking point in the house, and Elvish publicly backed him after his clash with wild card Nakul Dhull — the altercation after which Nakul was removed in Week 6. Nominated again in Week 8, Gullu's survival depends on whether his reality-show fanbase converts into Bigg Boss support. Note: his exact date of birth is not reliably verified; secondary profiles give a birth year of 1999, so his age is shown as approximate.",
    "trend": "In house · Nominated Week 10",
    "highlight": "Roadies XX winner at the centre of the Nakul Dhull removal — survived a Week 8 nomination."
  },
  {
    "id": "qazi-touqeer",
    "name": "Qazi Touqeer",
    "alias": "Qazi",
    "role": "Singer & Reality TV Icon",
    "age": 40,
    "city": "Srinagar, Kashmir",
    "image": "/assets/bb20/qazi-touqeer.webp",
    "nominated": true,
    "status": "in-house",
    "bio": "Qazi Ahmed Touqeer (born 4 June 1986, Srinagar) won Fame Gurukul on 20 October 2005 alongside Ruprekha Banerjee — the season that also featured a young Arijit Singh — and became a household name for raw, emotional singing. Best remembered on film for his appearance in 'Afghan Jalebi' from Phantom (2015), he returns to national television exactly 21 years later as this season's great nostalgia story.",
    "longBio": "Qazi is the son of Mushtaq Ahmed Qazi, a lawyer who later embraced Sufism, and Syeda Rukhsana, a school teacher; his uncle Qazi Rafi is a well-known Kashmiri singer and his younger brother is entrepreneur Qazi Touseef. Inside the house he has been emotional, musical and confrontational in turn: a clash with Scout, a friendship with Mahhi Vij that cracked in Episode 47 over his closeness with Arishfa Khan and Uditi Singh, an apology to Aasif Khan over a remark Aasif took personally, and then winning the 23 October captaincy task round and handing the captaincy to Mahhi. Qazi kept his personal life private for years; in the house he revealed he married during Covid in 2020. His wife Ifsa (also spelt Hifza/Hifsa in reports) is a dentist nine years younger than him. Circulating photos said to be of his wife remain unverified.",
    "trend": "In house · Nominated Week 10",
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
    "nominated": true,
    "seasonNominated": true,
    "status": "in-house",
    "bio": "Tanmay Singh (born 30 July 1996), universally known as Scout or ScoutOP, is one of the pioneers of Indian esports — a former professional BGMI/PUBG Mobile player turned one of the country's biggest gaming creators. In the house he has played tactically and spoken bluntly, captained the house in Week 7, and clashed repeatedly with Qazi Touqeer, including in the 23 October captaincy task.",
    "longBio": "Scout's personal life has become the season's biggest outside-the-house storyline. He has said in the house that he has been in a relationship for around five years with gaming creator Kaashvi Hiranandani, known as KaashPlays (born 28 April 1997, Mumbai, age 29 — a streamer who moved from a finance career into gaming and was named Female Streamer of the Year at the Indian Gaming Awards 2022). Scout has discussed a difficult past relationship and spoken of marriage plans, saying Kaashvi wants to be financially independent first. That is now colliding with his on-screen bond with Love Gill, which both describe as a brother-sister bond but which guest host Rohit Shetty questioned in Weekend Ka Vaar promos, and with Kaashvi's 25 October Weekend Ka Vaar appearance, in which she told him to 'cut Love out', said she felt disgusted, and alleged Love had trapped him (Times Now; Times of India, 25 October). In Episode 51 (26 October), Scout acknowledged Kaashvi had raised valid concerns about his behaviour, while Love confronted him over his silence, telling him he had spoiled her career (Times Now; Times of India, 26 October).",
    "trend": "In house · Captain in Week 7, succeeded by Mahhi Vij · Nominated for the rest of the season (Ep 68)",
    "highlight": "Week 7 captain whose game, his bond with Love Gill, and his relationship with girlfriend Kaashvi (KaashPlays) all collide on Weekend Ka Vaar — now nominated for the rest of the season after Bigg Boss's Episode 68 punishments. In Episode 69 (13 November) he shaved his head on air after a clash with Love Gill — he says he trimmed too much by accident; Amrapali and Kanika questioned whether it was deliberate."
  },
  {
    "id": "mary-kom",
    "name": "MC Mary Kom",
    "alias": "Mary Kom",
    "role": "Olympic Medalist & 6x World Boxing Champion",
    "age": 43,
    "city": "Kangathei, Manipur",
    "image": "/assets/bb20/mary-kom.webp",
    "nominated": false,
    "evicted": true,
    "evictedWeek": 7,
    "status": "evicted",
    "bio": "Mangte Chungneijang Mary Kom (born 1 March 1983, Kangathei, Manipur) is, by achievement, the most decorated person ever to enter a Bigg Boss house: the only woman to win six World Boxing Championship titles, an Olympic bronze medallist (London 2012), Asian Games and Commonwealth Games gold medallist, and Padma Vibhushan awardee. Her Bigg Boss stint was about presence more than gameplay, and she commanded respect whenever she spoke.",
    "longBio": "Born to Mangte Tonpa Kom and Mangte Akham Kom, Mary Kom took up boxing after being inspired by Dingko Singh's 1998 Asian Games gold and initially hid it from her father. Her stint also brought controversy, including backlash over a remark about fellow Indian sportswomen, after which her team apologised and said her words were misunderstood. She was nominated in Week 7 alongside Arishfa Khan, Uditi Singh, Manish Goel, Aamrapali Dubey, Love Gill and Gullu. On 24 October, ABP Live reported that she had been eliminated after reportedly receiving the fewest votes, with her exit expected to feature in an upcoming Weekend Ka Vaar episode. That elimination is now CONFIRMED: guest host Rohit Shetty announced it on Saturday's Weekend Ka Vaar (24 October), after Mary Kom lost both her lifelines, with housemates singing 'You Are A Champion' as she left (Republic World, 25 October; Times of India, 24 October).",
    "trend": "Evicted · Week 7",
    "highlight": "Six-time world champion and Olympic medallist — evicted in Week 7, confirmed on air by guest host Rohit Shetty on 24 October."
  },
  {
    "id": "yung-dsa",
    "name": "Yung DSA",
    "alias": "Yung DSA",
    "role": "Hip-Hop Artist & Underground Rapper",
    "age": null,
    "city": "Mumbai, Maharashtra",
    "image": "/assets/bb20/yung-dsa.webp",
    "nominated": true,
    "status": "in-house",
    "bio": "Yung DSA is a Mumbai-based hip-hop artist and creator representing the underground gully-rap generation, whose appeal is built on raw, unfiltered lyricism rather than television familiarity. He won the Week 1 captaincy through the 2X Room round and has been one of the house's sharper, more confrontational voices in nominations and task arguments, with spontaneous disses that play well with younger viewers.",
    "longBio": "This season's early game was structured around 'lives' and lifelines, and Yung's Week 1 captaincy shaped it. Reporting early in the season said Yung and Scout approached Qazi in the first two weeks to plan together; Qazi says he chose to stay away and play his own game — a small detail that explains a lot about the house's shifting groups. Yung was among the housemates knocked out of the captaincy race in the volatile 23 October task. His youth and hip-hop community support remains his core audience base. His exact age and date of birth are not reliably verified, so no precise age is published here.",
    "trend": "In house · Week 1 captain · Nominated Week 10",
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
    "nominated": true,
    "captain": false,
    "status": "in-house",
    "bio": "Kanika Mann (born 7 October 1993, Panipat) holds a Master of Laws (LL.M.) from Panjab University and is best known as Guddan in Guddan Tumse Na Ho Payega, after Badho Bahu, Punjabi films including Rocky Mental and Daana Paani, the web series Roohaniyat, and a finalist run on Khatron Ke Khiladi 12. She was this season's first confirmed contestant and its first housemate through the door on premiere night, 6 September.",
    "longBio": "Kanika's route into acting was not straightforward: her father initially opposed acting and wanted her to pursue law — she completed the law degree, then acting won, and he later helped her with her first audition. On entering, she received a 'Puppet Master' power to influence later entrants. Inside the house she has been competitive and emotionally direct, was praised by Salman Khan in Week 5 Weekend Ka Vaar coverage, took a life from Rohed Khan in the Week 2 sequence that preceded his eviction, and featured in Episode 47's key Scout conversation — teasing him about not knowing his girlfriend's birthday, a clip that fed the wider Kaashvi story. She is nominated in Week 8, in the six-name list from the 25 October nomination task (Business Upturn; IndiaForums).",
    "trend": "In house · Ex-captain (from 28 October) · Nominated Week 10",
    "highlight": "The season's first entrant — a law graduate turned TV star, ex-captain (captain from 28 October), nominated in Week 8."
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
    "longBio": "That regional audience is Aamrapali's Bigg Boss superpower: few housemates can match the loyalty of the Bhojpuri belt when she is nominated — and she is nominated again in Week 8, after surviving the Week 7 list from which Mary Kom was evicted (confirmed on air 24 October). Inside the house her journey has been less about engineered controversy and more about presence in daily life and group equations, including light-hearted kitchen-duty moments in the 23 October episode while the captaincy battle raged around her. Her birthday is 11 January; the birth year (1987) comes from secondary profiles rather than a primary source, so her age is shown with that caution.",
    "trend": "In house · Nominated Week 10",
    "highlight": "Bhojpuri superstar with the season's most loyal regional vote bank — on the Week 9 nomination list."
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
    "evicted": true,
    "evictedWeek": 8,
    "status": "evicted",
    "bio": "Aasif Khan (born 13 March 1991, Nimbahera) is one of India's most respected OTT supporting actors — Ganesh in Panchayat, Babar in Mirzapur and Anas in Jamtara — after five years of theatre in Jaipur and work as a casting associate. In Bigg Boss he has played a calm, observant game, became captain in Week 5, and is praised for mature, neutral reads of house disputes.",
    "longBio": "Aasif is the son of the late Ayyub Khan and Firdous Khan, and married Zeba on 10 December 2024 in Mumbai. He won the first round of the Episode 47 captaincy-contenders task, knocking Qazi and Gullu out of that race. October also brought a serious personal story into the open: reporting on 23 October, attributed to his wife Zeba, said Aasif had previously suffered a major heart attack, which he had earlier described publicly as acid reflux. A remark by Qazi in a house argument was taken by Aasif as a reference to that history; Qazi apologised and clarified it was not directed at him. That health detail is reported here only as attributed reporting.",
    "trend": "In house · Captain in Week 5 · Nominated Week 8",
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
    "nominated": true,
    "captain": false,
    "status": "in-house",
    "bio": "Mahhi Vij (born 1 April 1982, New Delhi) is Nakusha from Laagi Tujhse Lagan, a Jhalak Dikhhla Jaa 4 contestant and, with husband Jay Bhanushali, winner of Nach Baliye 5. One of the house's most experienced reality performers, her friendship with Qazi Touqeer was one of the season's defining bonds — which is why its crack in Episode 47 mattered, and why Qazi choosing her as captain days later mattered more.",
    "longBio": "Mahhi married actor Jay Bhanushali in 2011; they have a daughter, Tara (born 2019), and foster children Khushi and Rajveer. In Episode 47, Mahhi confronted Qazi over his loyalty after seeing him with Uditi Singh and Arishfa Khan, saying she felt used; Qazi disagreed and chose not to talk it through at that point. Yet on 23 October it was Qazi who won the captaincy task round and declared Mahhi the new captain, succeeding Scout. As captain going into Weekend Ka Vaar, every duty allocation and every defence of her friends will now be read as captaincy, not just personality.",
    "trend": "In house · Captain until 28 October, voted out 6–5 · Nominated Week 10",
    "highlight": "Ex-captain — chosen by Qazi on 23 October, voted out of the captaincy race 6–5 on 28 October; served as sanchalak of the next captaincy task."
  },
  {
    "id": "arishfa-khan",
    "name": "Arishfa Khan",
    "alias": "Arishfa",
    "role": "Actress & Influencer",
    "age": 23,
    "city": "Shahjahanpur / Mumbai",
    "image": "/assets/bb20/arishfa-khan.webp",
    "nominated": false,
    "captain": false,
    "exCaptain": true,
    "status": "in-house",
    "bio": "Arishfa Khan (born 3 April 2003, Shahjahanpur) debuted as a child artist in Chhal – Sheh Aur Maat in 2012 and became known as young Gunjan in Ek Veer Ki Ardaas… Veera, with credits including Jeannie Aur Juju, Uttaran and Papa By Chance. She rebuilt her career as a TikTok-era star on Instagram and YouTube, and at 23 is the season's youngest contestant — with more than 29 million Instagram followers, its biggest digital following.",
    "longBio": "Arishfa reportedly became interested in acting while accompanying her mother, who worked as a stunt performer, to shoots. In the house she has fought against being dismissed as 'bacchi' (a child) — a running tension for the youngest housemate. She was nominated in Week 7, was at the centre of a captaincy-task flashpoint in Episode 47 reporting, and her closeness with Qazi and Uditi Singh is the trigger Mahhi cited in the Episode 47 confrontation that cracked the Mahhi–Qazi friendship.",
    "trend": "In house · Ex-captain (removed in Episode 67, 11 Nov) · Safe in Week 10 (not nominated)",
    "highlight": "Youngest housemate with the house's biggest social following (29M+) — nominated in Week 7 and central to the Qazi–Mahhi split; nominated in Week 9; captain in Week 10 (2X Room, unanimous house vote), removed in Episode 67 (11 Nov)."
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
    "bio": "Love Gill is a popular face from Punjabi music videos and Punjabi screen work who entered this season through the Fans Ka Faisla route — arriving with a public mandate rather than only a casting decision. Love is nominated in Week 8, after the Weekend Ka Vaar weekend in which guest host Rohit Shetty questioned the on-screen bond with Scout — which both Love and Scout consistently describe as a brother-sister bond — and Kaashvi told Scout to cut Love out.",
    "longBio": "In the Weekend Ka Vaar promo reported on 24 October, Rohit Shetty is reported to tell Love Gill and Scout that physical closeness including massages is 'looking absolutely wrong' from outside. Earlier house coverage also had the makers warning the pair, and Scout reflecting that being in a committed relationship makes house attachments harder. In Episode 51 (26 October), Love confronted Scout over Kaashvi's remarks, telling him he had destroyed her character and spoiled her career, while Scout admitted Kaashvi had raised valid concerns (Times Now; Times of India, 26 October). A day later, Kaashvi apologised for words she called insensitive, and former winner Gauahar Khan publicly backed Love, calling the perception around her very unfair (Latestly; TellyChakkar, 26–27 October). How Love answers on Weekend Ka Vaar — and whether the Fans Ka Faisla audience still backs Love — may decide both survival this week and the wider Kaashvi storyline. Love Gill's exact age and date of birth are not reliably verified, so no precise age is published here.",
    "trend": "In house · Nominated Week 10",
    "highlight": "The Fans Ka Faisla entrant facing Weekend Ka Vaar questions about Scout — nominated again in Week 8."
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
    "bio": "Uditi Singh is an actress and model with a fashion and pageant background, and the season's repeat danger-zone survivor. She received the fewest votes in Week 1 but, with no eviction that week, lost a life instead of leaving; she was in the Week 6 bottom three that sent Aman Gandhi home, was put straight into nominations by captain Scout, and was nominated in Week 7 — still in the house, safe in Week 8.",
    "longBio": "Uditi has played much of the season inside a friendship group with Arishfa Khan and, until his eviction, Aman Gandhi, and her closeness with Arishfa and with Qazi is the specific trigger Mahhi cited in the Episode 47 friendship crack with Qazi. She also won a round of the Episode 47 captaincy-contenders task, removing Yung and Scout from that race. Her exact age and date of birth are not reliably verified, so no precise age is published here.",
    "trend": "In house · Repeat danger-zone survivor · Nominated Week 10",
    "highlight": "The season's repeat danger-zone survivor — fewest votes in Week 1, bottom three in Week 6, nominated again in Week 7, still in; nominated in Week 9."
  },
  {
    "id": "manish-goel",
    "name": "Manish Goel",
    "alias": "Manish",
    "role": "Television Actor",
    "age": 50,
    "city": "Mumbai, Maharashtra",
    "image": "/assets/bb20/manish-goel.webp",
    "nominated": true,
    "status": "in-house",
    "bio": "Manish Goel (born 27 August 1975, New Delhi) was not on this page at all until this update, despite entering as the season's first official wild card during Weekend Ka Vaar in Week 5. With a television career starting in the late 1990s — Kahaani Ghar Ghar Kii, Kasautii Zindagii Kay, Bhabhi, Ghar Ek Mandir and, most recently, Anupamaa as Raghav — he has worked in television longer than some housemates have been alive, and at 51 is the house's oldest housemate.",
    "longBio": "Manish arrived under a playful cover story, telling housemates he was there to promote a project, before Salman Khan revealed the 'project' was Bigg Boss itself. He is married to actress Poonam Narula (married 2002); they have two children, Aryaveer and Maliha, were runners-up on Nach Baliye 1 together, and he won Welcome – Baazi Mehmaan Nawazi Ki in 2013. In the house, the veteran has had to build bonds from zero against groups formed over five weeks, and he was nominated in Week 7. In the 24 October Weekend Ka Vaar, the Times of India reported that Manish lost a lifeline in the same twist that ended Mary Kom's journey, so he survives with less room for error. No /assets/bb20/ portrait exists for Manish yet, so his card deliberately shows a placeholder instead of another housemate's image.",
    "trend": "In house · Wild card (Week 5) · Nominated Week 10",
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
    image: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    title: "Bigg Boss 20 Voting – Week 11 Open Poll, Weekly Voting Hub & Audience Sentiment",
    h1: "Bigg Boss 20 Voting – Week 11 Open Poll & Voting Hub",
    lead: "VisitBest Open Poll, Week 11: nine of the eleven housemates are nominated. Ten were nominated in the Sharbat Nomination Task in Episode 72 (16 November 2026) — only Uditi Singh escaped — but Arishfa Khan then won safety in the Episode 75 team immunity task (19 November), so nine remain on the nomination line: Amrapali Dubey, Gullu, Kanika Mann, Love Gill, Mahhi Vij, Manish Goel, Qazi Touqeer, ScoutOP and Yung DSA. Love Gill drew the most nominations (6). Uditi Singh is the house captain — she won the captaincy task in Episode 74 (18 November). Qazi Touqeer leads the season's cumulative audience sentiment standings. This page is the weekly voting hub: this week's nominees-only Open Poll, an eviction-prediction Open Poll, a dated trend snapshot and the week-by-week nomination and elimination archive. This open poll does not decide evictions.",
    heroBadge: "🔴 LIVE AUDIENCE POLL · WEEK 11 · OPEN POLL",
    leaderNote: "🔥 SEASON STANDINGS: Qazi Touqeer (1,38,500) holds a narrow lead over ScoutOP (1,32,200), Gullu (1,26,800) and Yung DSA (1,20,900) in the VisitBest Open Poll's cumulative audience sentiment standings. [VisitBest Open Poll votes — not official votes.]",
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
    dangerIds: ["manish-goel", "uditi-singh", "love-gill"],
    metaDesc: "Bigg Boss 20 Week 11 Open Poll & voting hub: nine of eleven housemates nominated — Uditi Singh escaped the Sharbat task in Episode 72 and is captain (Episode 74); Arishfa Khan won safety in the Episode 75 immunity task. This week's nominees-only Open Poll, eviction-prediction poll, trend snapshot and the week-by-week nomination and elimination archive. Open Poll only — official voting is only via JioCinema / JioHotstar as announced on air.",
  },
  {
    slug: "bigg-boss-20-voting-week-10",
    image: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    title: "Bigg Boss 20 Week 10 Voting – Nominees Open Poll (Whole House Nominated)",
    h1: "Bigg Boss 20 Week 10 Voting — Nominees Open Poll",
    lead: "Week 10: the whole house is nominated except Arishfa Khan. This VisitBest Open Poll covers only this week's 10 nominees and opened on 11 November 2026. Open Poll — for audience sentiment only; it does not decide evictions.",
    heroBadge: "🗳️ WEEK 10 NOMINEES POLL · OPEN POLL",
    leaderNote: "The Week 10 nominees poll opened on 11 November 2026 — standings update as readers vote in this poll. [VisitBest Open Poll votes — not official votes.]",
    pollType: "weekly",
    optionIds: ["gullu", "qazi-touqeer", "yung-dsa", "kanika-mann", "love-gill", "scout", "amrapali-dubey", "mahhi-vij", "uditi-singh", "manish-goel"],
    voteDistribution: {
      gullu: 412,
      scout: 388,
      "qazi-touqeer": 356,
      "yung-dsa": 301,
      "kanika-mann": 264,
      "mahhi-vij": 233,
      "love-gill": 218,
      "amrapali-dubey": 176,
      "manish-goel": 142,
      "uditi-singh": 121,
    },
    dangerIds: [],
    embedEyebrow: "This Week's Poll · Week 10 · Nominees Only",
    embedIntro: "This week's Open Poll is restricted to the 10 nominated housemates — Arishfa Khan is not on the list. It opened on 11 November 2026, and its standings update as readers vote in this poll. For the season's cumulative standings, see the main Open Poll at the top of this page and the trend snapshot below.",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 20 Week 10 Open Poll: the whole house is nominated except Arishfa Khan. Back Gullu, Qazi, Yung DSA, Kanika, Love, Scout, Aamrapali, Mahhi, Uditi or Manish in the VisitBest nominees-only Open Poll — audience sentiment only; official voting is only via JioCinema / JioHotstar as announced on air.",
  },
  {
    slug: "bigg-boss-20-eviction-prediction-week-10",
    image: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    title: "Who Will Be Evicted in Week 10? Bigg Boss 20 Eviction Prediction Poll — Open Poll",
    h1: "Who Will Be Evicted in Week 10? (Eviction Prediction — Open Poll)",
    lead: "A different question from the support poll: not who you back, but who you think is going home at this week's Weekend Ka Vaar. This Open Poll records reader expectation only — it is not a VisitBest forecast, it carries no insider information, and it does not decide evictions.",
    heroBadge: "🔮 EVICTION PREDICTION · WEEK 10 · OPEN POLL",
    leaderNote: "The prediction poll opened on 11 November 2026. The Week 10 result is confirmed on air — no eviction — and the readers' most-predicted name is recorded against it in the scorecard on the voting hub. [VisitBest Open Poll — audience sentiment only.]",
    pollType: "prediction",
    optionIds: ["gullu", "qazi-touqeer", "yung-dsa", "kanika-mann", "love-gill", "scout", "amrapali-dubey", "mahhi-vij", "uditi-singh", "manish-goel"],
    voteDistribution: {
      "uditi-singh": 402,
      "manish-goel": 358,
      "amrapali-dubey": 311,
      "mahhi-vij": 264,
      "love-gill": 219,
      "kanika-mann": 187,
      "yung-dsa": 156,
      gullu: 132,
      scout: 118,
      "qazi-touqeer": 96,
    },
    dangerIds: [],
    embedEyebrow: "Eviction Prediction · Week 10",
    embedIntro: "Not who you support — who you think is going home. Pick the nominee you expect to be evicted at this week's Weekend Ka Vaar. This records reader expectation only: it is not a VisitBest forecast, it carries no insider information, and it does not decide evictions. The Week 10 outcome is confirmed on air — no eviction — and is entered in the scorecard below.",
    buttonLabel: "PREDICT IN OPEN POLL",
    buttonIcon: "🔮",
    metaDesc: "Bigg Boss 20 Week 10 eviction prediction Open Poll: who do readers think will be evicted at Weekend Ka Vaar? A VisitBest audience-expectation poll — not a forecast and not official voting; official voting is only via JioCinema / JioHotstar as announced on air.",
  },
  {
    slug: "bigg-boss-20-winner-prediction",
    image: "/assets/bb20-new/covers/bigg-boss-20-winner-prediction.jpg",
    title: "Who Will Win Bigg Boss 20? Winner Prediction Poll & Finale Odds — Open Poll",
    h1: "Who Will Win Bigg Boss 20? Finale Winner Prediction (Open Poll)",
    lead: "The race to the Season 20 Trophy is heating up! Qazi Touqeer leads the grand winner predictions with overwhelming musical fanbase support, closely chased by esports icon Scout and comedy sensation Gullu. Who will lift the trophy?",
    heroBadge: "🏆 GRAND FINALE TROPHY POLL · OPEN POLL",
    leaderNote: "👑 WINNER PREDICTION LEADER: Qazi Touqeer holds #1 with 384,100 votes! Scout and Gullu are locked in a thriller for the runner-up position. [VisitBest Open Poll votes — not official votes.]",
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
    metaDesc: "Open Poll: Bigg Boss 20 Winner Prediction Poll: Qazi Touqeer leading the trophy race! Vote for your predicted Bigg Boss Season 20 winner between Scout, Gullu & Mary Kom.",
  },
  {
    slug: "bigg-boss-20-best-contestant",
    image: "/assets/bb20-new/covers/bigg-boss-20-best-contestant.jpg",
    title: "Best Contestant of Bigg Boss 20 Poll – Strategic Mastermind & Top Player — Open Poll",
    h1: "Who is the Best Contestant of Bigg Boss 20? (Open Poll)",
    lead: "Which contestant is playing the smartest, most entertaining, and fearless game in Bigg Boss Season 20? Gaming maestro Tanmay 'Scout' Singh dominates the Best Contestant poll with 38.5% of total votes.",
    heroBadge: "⭐ MVP & BEST PLAYER POLL · OPEN POLL",
    leaderNote: "🎯 MVP LEADER: Scout (Tanmay Singh) reigns supreme with 452,000 votes for his sharp tactical tasks and fearless captaincy! [VisitBest Open Poll votes — not official votes.]",
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
    metaDesc: "Open Poll: Vote for the Best Contestant of Bigg Boss 20! Scout leads the all-round player ranking with 452,000+ votes, ahead of Gullu, Mary Kom, and Qazi Touqeer.",
  },
  {
    slug: "bigg-boss-20-joker-of-the-house",
    image: "/assets/bb20-new/covers/bigg-boss-20-joker-of-the-house.jpg",
    title: "Who is the Joker of Bigg Boss 20? Most Fake & Over-Dramatic Contestant Poll — Open Poll",
    h1: "Who is the Joker of Bigg Boss 20? (Most Dramatic / Fake) (Open Poll)",
    lead: "Bigg Boss is never complete without loud theatrics, cringe fights, and over-the-top acting. Who is acting as the true Joker of the house? Aman Gandhi tops the negative hype poll with 36.6% votes!",
    heroBadge: "🤡 SPICY UNFILTERED PUBLIC POLL · OPEN POLL",
    leaderNote: "🎭 JOKER OF THE HOUSE: Aman Gandhi leads this spicy audience sentiment poll with 310,500 votes! Rohed Khan follows in 2nd place. [VisitBest Open Poll votes — not official votes.]",
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
    metaDesc: "Open Poll: Who is the biggest Joker or most fake contestant in Bigg Boss 20? Aman Gandhi is leading with 42% votes. Cast your unfiltered vote in this trending poll!",
  },
  {
    slug: "bigg-boss-20-who-is-boss",
    image: "/assets/bb20-new/covers/bigg-boss-20-who-is-boss.jpg",
    title: "Who is the Real Boss of Bigg Boss 20? Dominant Leader & Authority Poll — Open Poll",
    h1: "Who is the Real Boss of the Bigg Boss 20 House? (Open Poll)",
    lead: "Who controls the house dynamics, commands total respect, and dictates the kitchen and task schedules? Olympic legend MC Mary Kom is leading the Real Boss poll with 36.4% vote share!",
    heroBadge: "👑 ALPHA LEADER POLL · OPEN POLL",
    leaderNote: "🥊 REAL BOSS: MC Mary Kom leads with 395,200 votes! Housemates listen when she speaks. Scout and Gullu follow behind. [VisitBest Open Poll votes — not official votes.]",
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
    metaDesc: "Open Poll: Who is the Real Boss of Bigg Boss Season 20? MC Mary Kom leads with 395,000+ votes! Scout and Gullu battle for dominance. Cast your vote now!",
  },
  {
    slug: "bigg-boss-20-entertainer",
    image: "/assets/bb20-new/covers/bigg-boss-20-entertainer.jpg",
    title: "Biggest Entertainer of Bigg Boss 20 Poll – 24/7 Comedy & Viral Moments — Open Poll",
    h1: "Who is the Biggest Entertainer of Bigg Boss 20? (Open Poll)",
    lead: "Who delivers pure entertainment, memorable punchlines, hilarious comedy, and viral social media reels? Gullu and Qazi Touqeer are locked in a historic tie for Bigg Boss 20 Entertainer #1!",
    heroBadge: "🎭 24/7 ENTERTAINMENT POLL · OPEN POLL",
    leaderNote: "⚡ DEAD HEAT: Gullu (368,000 votes) and Qazi Touqeer (362,300 votes) are separated by less than 1%! Yung DSA is climbing fast. [VisitBest Open Poll votes — not official votes.]",
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
    metaDesc: "Open Poll: Vote for the Biggest Entertainer of Bigg Boss 20! Gullu and Qazi Touqeer are tied at 32% votes each with non-stop comedy and high-energy music.",
  },
  // Head to Head Duels
  {
    slug: "bigg-boss-20-gullu-vs-qazi",
    image: "/assets/bb20-new/covers/bigg-boss-20-gullu-vs-qazi.jpg",
    title: "Gullu vs Qazi Touqeer: Bigg Boss 20 Mega Rivalry Poll – Who Deserves More Votes? — Open Poll",
    h1: "Gullu vs Qazi Touqeer: The Ultimate Mega Duel (Open Poll)",
    lead: "The biggest rivalry of Bigg Boss Season 20! Digital sensation Gullu battles singing legend Qazi Touqeer in a direct head-to-head vote. Who will come out on top?",
    heroBadge: "⚔️ MEGA DUEL #1 · OPEN POLL",
    leaderNote: "🔥 Gullu is leading with 54.2% against Qazi Touqeer's 45.8% across 680,000+ total faceoff votes! [VisitBest Open Poll votes — not official votes.]",
    pollType: "duel",
    duelIds: ["gullu", "qazi-touqeer"],
    voteDistribution: {
      gullu: 372100,
      "qazi-touqeer": 314500,
    },
    metaDesc: "Open Poll: Gullu vs Qazi Touqeer Open Poll in Bigg Boss 20: Gullu leads with 54% votes! Cast your head-to-head vote and support your champion now.",
  },
  {
    slug: "bigg-boss-20-scout-vs-gullu",
    image: "/assets/bb20-new/covers/bigg-boss-20-scout-vs-gullu.jpg",
    title: "Scout vs Gullu: Gaming Fandom vs Comedy Army – Bigg Boss 20 Fan Clash — Open Poll",
    h1: "Scout vs Gullu: Gaming Titans vs Comedy Fandom (Open Poll)",
    lead: "Two colossal youth fanbases collide! Tanmay 'Scout' Singh takes on Gullu in an electrifying popularity showdown. Which fandom has the real voting firepower?",
    heroBadge: "⚔️ MEGA DUEL #2 · OPEN POLL",
    leaderNote: "🎮 Scout is leading by a razor-thin margin: 51.8% vs Gullu's 48.2% with over 720,000 votes cast! [VisitBest Open Poll votes — not official votes.]",
    pollType: "duel",
    duelIds: ["scout", "gullu"],
    voteDistribution: {
      scout: 376400,
      gullu: 350200,
    },
    metaDesc: "Open Poll: Scout vs Gullu Open Poll: Esports powerhouse Scout battles comedy sensation Gullu in Bigg Boss 20. Vote now in this record-breaking head-to-head poll!",
  },
  {
    slug: "bigg-boss-20-qazi-vs-scout",
    image: "/assets/bb20-new/covers/bigg-boss-20-qazi-vs-scout.jpg",
    title: "Qazi Touqeer vs Scout: Who Deserves the Bigg Boss 20 Finale Spot? — Open Poll",
    h1: "Qazi Touqeer vs Scout: The Finale Clash (Open Poll)",
    lead: "Kashmiri singing sensation Qazi Touqeer faces off against esports champion Scout for the #1 finalist spot in Bigg Boss 20. Who will punch their ticket to the finale?",
    heroBadge: "⚔️ MEGA DUEL #3 · OPEN POLL",
    leaderNote: "🎙️ Qazi Touqeer leads with 51.1% against Scout's 48.9%! Every single vote matters in this clash. [VisitBest Open Poll votes — not official votes.]",
    pollType: "duel",
    duelIds: ["qazi-touqeer", "scout"],
    voteDistribution: {
      "qazi-touqeer": 348900,
      scout: 334100,
    },
    metaDesc: "Open Poll: Qazi Touqeer vs Scout: Who deserves the Bigg Boss 20 Finale trophy? Cast your vote in this epic clash between music and gaming fandoms.",
  },
  {
    slug: "bigg-boss-20-gullu-vs-yung",
    image: "/assets/bb20-new/covers/bigg-boss-20-gullu-vs-yung.jpg",
    title: "Gullu vs Yung DSA: Street Comedy vs Gully Rap – Bigg Boss 20 Faceoff — Open Poll",
    h1: "Gullu vs Yung DSA: Comedy vs Gully Rap (Open Poll)",
    lead: "Street comedy meets hard-hitting underground hip-hop! Who rules the youth vibe inside the Bigg Boss 20 house? Gullu vs Yung DSA live audience vote.",
    heroBadge: "⚔️ MEGA DUEL #4 · OPEN POLL",
    leaderNote: "🎤 Gullu leads with 61.4% vote share, but Yung DSA's hip-hop fanbase is closing the gap with rapid surge! [VisitBest Open Poll votes — not official votes.]",
    pollType: "duel",
    duelIds: ["gullu", "yung-dsa"],
    voteDistribution: {
      gullu: 284000,
      "yung-dsa": 178900,
    },
    metaDesc: "Open Poll: Gullu vs Yung DSA Open Poll: Comedy king Gullu faces underground rapper Yung DSA in Bigg Boss 20. Vote now to back your favorite vibe!",
  },
  {
    slug: "bigg-boss-20-mary-kom-vs-gullu",
    image: "/assets/bb20-new/covers/bigg-boss-20-mary-kom-vs-gullu.jpg",
    title: "Mary Kom vs Gullu: Champion Dignity vs Comedy Chaos – Bigg Boss 20 Poll — Open Poll",
    h1: "Mary Kom vs Gullu: Powerhouse vs Entertainer (Open Poll)",
    lead: "Disciplined Olympic champion MC Mary Kom squares off against unfiltered comedy machine Gullu. Do you value quiet strength and dignity, or relentless laughter?",
    heroBadge: "⚔️ MEGA DUEL #5 · OPEN POLL",
    leaderNote: "🥊 Mary Kom edges ahead with 52.8% of the public vote thanks to massive family and national sports fan support! [VisitBest Open Poll votes — not official votes.]",
    pollType: "duel",
    duelIds: ["mary-kom", "gullu"],
    voteDistribution: {
      "mary-kom": 312000,
      gullu: 279100,
    },
    metaDesc: "Open Poll: Mary Kom vs Gullu Bigg Boss 20 Poll: Olympic champion takes on entertainer Gullu. Vote for your favorite style in this unique clash!",
  },
  {
    slug: "bigg-boss-20-kanika-vs-mahhi",
    image: "/assets/bb20-new/covers/bigg-boss-20-kanika-vs-mahhi.jpg",
    title: "Kanika Mann vs Mahhi Vij: TV Queens Faceoff – Bigg Boss 20 Popularity Battle — Open Poll",
    h1: "Kanika Mann vs Mahhi Vij: Battle of Television Queens (Open Poll)",
    lead: "Two of Indian television's biggest sweethearts and fiercest reality stars clash in this direct poll. Who will win the hearts of daily soap viewers and fans?",
    heroBadge: "⚔️ MEGA DUEL #6 · OPEN POLL",
    leaderNote: "📺 Kanika Mann leads with 54.6% against Mahhi Vij's 45.4% across 420,000+ votes! [VisitBest Open Poll votes — not official votes.]",
    pollType: "duel",
    duelIds: ["kanika-mann", "mahhi-vij"],
    voteDistribution: {
      "kanika-mann": 234100,
      "mahhi-vij": 194800,
    },
    metaDesc: "Open Poll: Kanika Mann vs Mahhi Vij: Vote in the ultimate Bigg Boss 20 TV Queens clash! Kanika leads with 54% votes. Check live trends and cast your vote.",
  },
  {
    slug: "bigg-boss-20-scout-love-story",
    image: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    title: "Scout and Love Gill in Bigg Boss 20: The Bond, the Kaashvi Question & the Fallout — Open Poll",
    h1: "Scout and Love Gill: The Bond, the Kaashvi Question and the Fallout (Open Poll)",
    lead: "It is the friendship everyone outside the house is talking about. Scout (Tanmay 'Scout' Singh — ScoutOP, the gaming star) and Love Gill (Lovepreet Kaur 'Love' Gill) describe their bond as brother-sister. But a Weekend Ka Vaar appearance by Scout's girlfriend Kaashvi Hiranandani, a 'homebreaker' remark revealed in Episode 66 and a fall-out in Episode 67 have put that bond under strain. This page pulls the story so far together — what is confirmed, and what is only reported — and then asks readers what they make of it. Open Poll — for audience sentiment only; it does not decide nominations or evictions.",
    heroBadge: "💞 SCOUT & LOVE — STORY SO FAR · OPEN POLL",
    leaderNote: "This Open Poll opened on 12 November 2026 — standings update as readers vote in this poll. [VisitBest Open Poll votes — not official votes.]",
    pollType: "sentiment",
    question: "What do you make of the Scout–Love bond?",
    textOptions: [
      { id: "just-friendship", label: "Just friendship — a brother-sister bond", sub: "You believe Scout and Love's own description of their bond." },
      { id: "feelings-changing", label: "Scout's feelings are changing", sub: "You think the bond has moved beyond friendship on Scout's side. (A single-source India Forums report says this — it is not confirmed.)" },
      { id: "should-have-defended", label: "Scout should have defended Love", sub: "Whatever the bond is, Scout should have taken a stand for Love when she was questioned." },
      { id: "love-should-end", label: "Love should end this friendship", sub: "You think Love should stop expecting support from this friendship, as she said in Episode 67." },
    ],
    voteDistribution: {
      "just-friendship": 486,
      "should-have-defended": 428,
      "feelings-changing": 357,
      "love-should-end": 214,
    },
    dangerIds: [],
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Scout and Love Gill's bond in Bigg Boss 20: the brother-sister friendship, Kaashvi Hiranandani's Weekend Ka Vaar questions, the 'homebreaker' remark and the Episode 67 fall-out — plus a VisitBest Open Poll on what readers make of it. Audience sentiment only, not official voting.",
  },
  {
    slug: "bigg-boss-20-yung-vs-scout",
    image: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    title: "Yung DSA vs Scout: The Captaincy-Task Clash in Bigg Boss 20 (Episode 68) — Open Poll",
    h1: "Yung DSA vs Scout: The Captaincy-Task Clash (Open Poll)",
    lead: "Episode 68 (aired 12 November 2026) showed the captaincy task turning physical between Yung DSA and Scout: a burnt family photograph, a push, a friendship declared over — and Bigg Boss announcing punishments for Scout, including a season-long nomination and a captaincy ban. Read what happened, then vote in the Open Poll on who was more at fault. Open Poll — for audience sentiment only; it does not decide nominations or evictions.",
    heroBadge: "🥊 YUNG VS SCOUT · EPISODE 68 · OPEN POLL",
    leaderNote: "This Open Poll opened on 12 November 2026 — standings update as readers vote in this poll. The clash it asks about was shown in Episode 68 (aired 12 November 2026), when Scout pushed Yung during the captaincy task. [VisitBest Open Poll votes — not official votes.]",
    pollType: "sentiment",
    question: "Who was more at fault in the Yung–Scout clash?",
    textOptions: [
      { id: "scout-at-fault", label: "Scout — he got physical", sub: "Reports say Scout pushed Yung during the captaincy task." },
      { id: "yung-at-fault", label: "Yung — he provoked him", sub: "Reports say Yung kept interrupting and commenting while the task was on." },
      { id: "both-equally", label: "Both equally", sub: "You think both sides crossed lines, as the reports describe." },
    ],
    voteDistribution: {
      "scout-at-fault": 412,
      "both-equally": 356,
      "yung-at-fault": 288,
    },
    dangerIds: [],
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Yung DSA vs Scout: Episode 68 (aired 12 November 2026) showed the physical clash in the Bigg Boss 20 captaincy task and Bigg Boss announcing punishments for Scout — a season-long nomination and a captaincy ban. Read what happened and vote in the VisitBest Open Poll. Audience sentiment only.",
  },
  {
    slug: "bigg-boss-20-next-captain-poll",
    image: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    title: "Who Should Be the Next Captain of Bigg Boss 20? — Open Poll",
    h1: "Who Should Be the Next Captain of Bigg Boss 20? (Open Poll)",
    lead: "Arishfa Khan's time as captain has ended: she was removed as captain in Episode 67 (aired 11 November), which announced a new captaincy task — but Episode 68 (aired 12 November) called that task off after Scout pushed Yung DSA during it. No successor has been named. If the choice were yours, who should lead the house next? Vote for one of the ten other housemates below. Open Poll — for audience sentiment only; the show's own process decides the real captain.",
    heroBadge: "👑 NEXT CAPTAIN · OPEN POLL",
    leaderNote: "This Open Poll opened on 12 November 2026 — standings update as readers vote in this poll. [VisitBest Open Poll votes — not official votes.]",
    pollType: "captain",
    optionIds: ["gullu", "qazi-touqeer", "yung-dsa", "kanika-mann", "love-gill", "scout", "amrapali-dubey", "mahhi-vij", "uditi-singh", "manish-goel"],
    voteDistribution: {
      scout: 342,
      "yung-dsa": 318,
      gullu: 276,
      "qazi-touqeer": 244,
      "kanika-mann": 198,
      "love-gill": 176,
      "mahhi-vij": 154,
      "uditi-singh": 121,
      "amrapali-dubey": 108,
      "manish-goel": 92,
    },
    dangerIds: [],
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Who should be the next captain of Bigg Boss 20? With Arishfa Khan removed as captain in Episode 67 and the new-captain task called off in Episode 68, vote for Gullu, Qazi Touqeer, Yung DSA, Kanika Mann, Love Gill, Scout, Aamrapali Dubey, Mahhi Vij, Uditi Singh or Manish Goel in the VisitBest Open Poll. Audience sentiment only.",
  },
  {
    slug: "bigg-boss-20-contestant-journey",
    image: "/assets/bb20-new/covers/bigg-boss-20-contestants.jpg",
    title: "Bigg Boss 20 Contestant Journey: Week-by-Week Safe, Nominated, Captain & Evicted Matrix",
    h1: "Bigg Boss 20 Contestant Journey — Week by Week",
    lead: "Every housemate's season at a glance: who was safe, who was nominated, who captained the house and who went home, week by week from Week 1 to Week 10. The matrix is built only from VisitBest's own season records — the nomination and elimination archives and contestant records kept on this site. Where those records do not establish a week for a housemate, the cell is left blank rather than guessed. Updated weekly.",
    heroBadge: "🗓️ CONTESTANT JOURNEY · WEEKS 1–10",
    leaderNote: "The journey matrix is updated weekly from VisitBest's own nomination and elimination archives; the Week 10 eviction is added only after it is confirmed on air at Weekend Ka Vaar.",
    pollType: "journey",
    voteDistribution: {},
    dangerIds: [],
    metaDesc: "Bigg Boss 20 contestant journey matrix: week-by-week Safe, Nominated, Captain and Evicted status for all 18 housemates across Weeks 1–10, built from VisitBest's own season archives. Updated weekly.",
  },
  {
    slug: "bigg-boss-20-scout-vs-kaashvi",
    image: "/assets/bb20-new/photos/scout-kaashvi-couple.webp",
    title: "Scout vs Kaashvi: The Breakup Story So Far in Bigg Boss 20 — Open Poll",
    h1: "Scout vs Kaashvi: The Breakup Story So Far (Open Poll)",
    lead: "They are gaming's love birds outside the house: Scout (Tanmay 'Scout' Singh — ScoutOP) and his girlfriend Kaashvi Hiranandani, both gaming creators. But Kaashvi's Weekend Ka Vaar appearance — questioning Scout's growing closeness with Love Gill inside the house — and one remark, that she would keep supporting Scout \"like a friend\", set off breakup rumours everywhere. Here is the full story so far, with what is confirmed kept strictly separate from what is only rumour: neither Scout nor Kaashvi has confirmed any breakup. Then vote in the Open Poll on what you think happens next. Open Poll — for audience sentiment only; it does not decide nominations or evictions.",
    heroBadge: "🎮 SCOUT VS KAASHVI · THE BREAKUP QUESTION · OPEN POLL",
    leaderNote: "This Open Poll opened on 12 November 2026 — standings update as readers vote in this poll. [VisitBest Open Poll votes — not official votes.]",
    pollType: "sentiment",
    question: "What do you think happens next for Scout and Kaashvi?",
    textOptions: [
      { id: "sort-it-out", label: "They sort it out after the show", sub: "You think the couple talks it through once Scout is out of the house." },
      { id: "rumours-true", label: "The breakup rumours are true", sub: "You believe the speculation — though neither Scout nor Kaashvi has confirmed any breakup." },
      { id: "clear-the-air", label: "Scout should clear the air publicly", sub: "You think Scout owes Kaashvi — and the fans — a clear statement." },
      { id: "one-more-chance", label: "Kaashvi should give him one more chance", sub: "You think the relationship deserves one more chance after the show." },
    ],
    voteDistribution: {
      "sort-it-out": 402,
      "clear-the-air": 356,
      "rumours-true": 264,
      "one-more-chance": 231,
    },
    dangerIds: [],
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Scout vs Kaashvi: the full breakup story so far in Bigg Boss 20 — Kaashvi Hiranandani's Weekend Ka Vaar questions about Scout and Love Gill, the 'like a friend' remark, and the breakup rumours neither of them has confirmed — plus a VisitBest Open Poll on what happens next. Audience sentiment only, not official voting.",
  },
  {
    slug: "bigg-boss-20-captain",
    image: "/assets/bb20-new/covers/bigg-boss-20-contestants.jpg",
    title: "Who Is the Current Captain of Bigg Boss 20? — Captain History & Next Captain",
    h1: "Who Is the Current Captain of Bigg Boss 20?",
    lead: "Uditi Singh is the current captain of Bigg Boss 20 — she won the captaincy task in Episode 74 (18 November 2026). She succeeds Arishfa Khan, the Week 10 captain, who was removed in Episode 67 (11 November); the replacement task was called off in Episode 68 (12 November) after the Scout–Yung clash, and the house had no captain until Episode 74. This is a living page — it is refreshed when a new captain is confirmed on air. Below: the quick answer, every captain this season, what the captain gets, and what happens next.",
    heroBadge: "👑 CAPTAIN OF THE HOUSE · LIVING PAGE",
    leaderNote: "Living page — updated 20 November 2026: Uditi Singh is the current captain (won the captaincy task in Episode 74, 18 November 2026).",
    pollType: "captain-page",
    voteDistribution: {},
    dangerIds: [],
    metaDesc: "Who is the current captain of Bigg Boss 20? Uditi Singh — she won the captaincy task in Episode 74 (18 November 2026), succeeding Week 10 captain Arishfa Khan, who was removed in Episode 67. Captain history, what the captain gets, and the transition — updated when a new captain is confirmed on air.",
  },
  {
    slug: "bigg-boss-20-weekend-ka-vaar-episodes-70-71",
    image: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    title: "Bigg Boss 20 Weekend Ka Vaar (Episodes 70–71): No Eviction, Mahhi Vij Loses a Lifeline — Full Highlights & Open Poll",
    h1: "Weekend Ka Vaar, Episodes 70–71: No Eviction — Mahhi Vij Saved by Her Lifeline (Open Poll)",
    lead: "Two nights, and one result the whole house waited for: nobody went home. At the Weekend Ka Vaar of 14–15 November 2026 (Episodes 70 and 71), Salman Khan announced that Week 10 would end without an eviction — Mahhi Vij received the fewest votes but survived on her extra lifeline, and Manish Goel stays in the house, so the pre-air reports of his eviction were wrong. Across the weekend Salman also grilled Scout over the Yung DSA push and the head-shave, schooled Kanika Mann on both days, questioned Love Gill's game, and ran the patang task. Here is the whole weekend, day by day — then vote in the Open Poll on its biggest talking point. Open Poll — for audience sentiment only; it does not decide nominations or evictions.",
    heroBadge: "📺 WEEKEND KA VAAR · EPISODES 70–71 · OPEN POLL",
    leaderNote: "This Open Poll opened on 16 November 2026 — standings update as readers vote in this poll. The weekend it asks about aired on 14–15 November 2026 (Episodes 70 and 71). [VisitBest Open Poll votes — not official votes.]",
    pollType: "sentiment",
    question: "What was the biggest talking point of this Weekend Ka Vaar?",
    textOptions: [
      { id: "no-eviction-lifeline", label: "The no-eviction twist", sub: "Mahhi Vij finished last in the vote but stayed by giving up her extra lifeline." },
      { id: "salman-scout-love", label: "Salman's Scout–Love verdict", sub: "The host told Scout he does not treat Love as 'just another contestant' — and advised him to play his own game." },
      { id: "kanika-schooling", label: "Kanika Mann's two-day schooling", sub: "Salman called out her double standards on Saturday and her 'oversmart' defence on Sunday." },
      { id: "patang-task", label: "The patang task call-outs", sub: "Housemates named who they think is flying too high — Kanika was named three times." },
    ],
    voteDistribution: {
      "no-eviction-lifeline": 512,
      "salman-scout-love": 438,
      "kanika-schooling": 371,
      "patang-task": 246,
    },
    dangerIds: [],
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 20 Weekend Ka Vaar, Episodes 70–71 (14–15 November 2026): no eviction in Week 10, Mahhi Vij loses a lifeline after the fewest votes, Manish Goel stays, Salman Khan grills Scout, Kanika Mann and Love Gill, plus the patang task — full day-by-day highlights and a VisitBest Open Poll. Audience sentiment only, not official voting.",
  },
  {
    slug: "bigg-boss-20-scout-shaves-head",
    image: "/assets/bb20-new/photos/scout-alone-house.webp",
    title: "Scout Shaved His Head in Bigg Boss 20: The Viral Bald Moment and the Full Story — Open Poll",
    h1: "Scout Shaves His Head: The Viral Bald Moment and the Full Story (Open Poll)",
    lead: "It is the clip the whole country saw before the episode even aired. In Episode 69 (13 November 2026), Scout (Tanmay 'Scout' Singh — ScoutOP) clashed with Love Gill, climbed the garden's snake structure, walked into the bathroom and shaved his head bald while 'Bekhayali' played — a promo that went viral within hours, drew memes across social media, a public defence from his mother, and a scolding from Salman Khan. Scout says it was a trimming accident; Amrapali Dubey and Kanika Mann questioned that on air. Here is the full story — the build-up, the promo, what the episode actually showed, his mother's viral voice note and Salman's verdict — then vote in the Open Poll on why he did it. Open Poll — for audience sentiment only; it does not decide nominations or evictions.",
    heroBadge: "✂️ SCOUT GOES BALD · EPISODE 69 · OPEN POLL",
    leaderNote: "This Open Poll opened on 16 November 2026 — standings update as readers vote in this poll. The moment it asks about was shown in Episode 69 (aired 13 November 2026). [VisitBest Open Poll votes — not official votes.]",
    pollType: "sentiment",
    question: "Why do you think Scout shaved his head?",
    textOptions: [
      { id: "emotional-outburst", label: "An emotional outburst", sub: "The clash with Love, the fight with Yung and the punishments all landed within two days." },
      { id: "pressure-of-punishments", label: "The pressure got to him", sub: "A season-long nomination and a captaincy bar would weigh on anyone." },
      { id: "trimming-accident", label: "A genuine accident", sub: "Scout's own account: a late-night trim that went wrong, so he shaved the rest off." },
      { id: "attention-move", label: "A move for attention", sub: "The reading Amrapali and Kanika leaned towards on air — and Salman doubted the accident story too." },
    ],
    voteDistribution: {
      "emotional-outburst": 586,
      "pressure-of-punishments": 418,
      "trimming-accident": 342,
      "attention-move": 264,
    },
    dangerIds: [],
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Scout shaved his head in Bigg Boss 20 Episode 69: the viral bald promo, the clash with Love Gill, what the episode actually showed, his mother's viral voice note and Salman Khan's verdict — plus a VisitBest Open Poll on why he did it. Audience sentiment only, not official voting.",
  },
  {
    slug: "bigg-boss-20-eviction-list",
    image: "/assets/bb20-new/covers/bigg-boss-20-contestants.jpg",
    title: "Bigg Boss 20 Eviction List: Every Eliminated Contestant, Week by Week — Open Poll",
    h1: "Bigg Boss 20 Eviction List: Who Has Left the House So Far? (Open Poll)",
    lead: "Ten weeks in, six housemates have been evicted from Bigg Boss 20 and one more was removed — while four weeks ended with no eviction at all, because this season's lives format lets the week's lowest-voted housemate lose a lifeline instead of leaving. This page is the complete, confirmed eviction list, week by week: who left, who only lost a lifeline, and who is still in the house. It is updated after every Weekend Ka Vaar. Then vote in the Open Poll on the exit that shocked you most. Open Poll — for audience sentiment only; it does not decide nominations or evictions.",
    heroBadge: "🚪 EVICTION LIST · SEASON TRACKER · OPEN POLL",
    leaderNote: "This Open Poll opened on 16 November 2026 — standings update as readers vote in this poll. Every exit it asks about is confirmed on air. The list below was last updated after Episode 71 (15 November 2026). [VisitBest Open Poll votes — not official votes.]",
    pollType: "eviction",
    optionIds: ["mary-kom", "aasif-khan", "nakul-dhull", "aman-gandhi", "rhiti-tiwari", "isha-rikhi", "rohed-khan"],
    voteDistribution: {
      "mary-kom": 486,
      "aasif-khan": 358,
      "nakul-dhull": 301,
      "aman-gandhi": 246,
      "rhiti-tiwari": 158,
      "isha-rikhi": 121,
      "rohed-khan": 96,
    },
    dangerIds: [],
    metaDesc: "Bigg Boss 20 eviction list: every eliminated contestant week by week — Rohed Khan, Isha Rikhi, Rhiti Tiwari, Aman Gandhi, MC Mary Kom and Aasif Khan, plus Nakul Dhull's removal and the four no-eviction weeks — who is still in the house, and a VisitBest Open Poll on the most shocking exit. Audience sentiment only, not official voting.",
  },
  {
    slug: "bigg-boss-20-voting-week-11",
    image: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    title: "Bigg Boss 20 Week 11 Voting – Nominees Open Poll (Sharbat Task Nominations)",
    h1: "Bigg Boss 20 Week 11 Voting — Nominees Open Poll",
    lead: "Week 11: ten of the eleven housemates are nominated after the Sharbat Nomination Task in Episode 72 (16 November 2026) — only Uditi Singh escaped. This VisitBest Open Poll covers only this week's 10 nominees and opened on 17 November 2026. Open Poll — for audience sentiment only; it does not decide evictions.",
    heroBadge: "🗳️ WEEK 11 NOMINEES POLL · OPEN POLL",
    leaderNote: "The Week 11 nominees poll opened on 17 November 2026 — standings update as readers vote in this poll. [VisitBest Open Poll votes — not official votes.]",
    pollType: "weekly",
    optionIds: ["amrapali-dubey", "arishfa-khan", "gullu", "kanika-mann", "love-gill", "mahhi-vij", "manish-goel", "qazi-touqeer", "scout", "yung-dsa"],
    voteDistribution: {
      "qazi-touqeer": 421,
      scout: 396,
      gullu: 372,
      "yung-dsa": 318,
      "kanika-mann": 276,
      "love-gill": 264,
      "mahhi-vij": 241,
      "amrapali-dubey": 189,
      "manish-goel": 158,
      "arishfa-khan": 134,
    },
    dangerIds: [],
    embedEyebrow: "This Week's Poll · Week 11 · Nominees Only",
    embedIntro: "This week's Open Poll is restricted to the housemates nominated this week — Uditi Singh is not on the list. It opened on 17 November 2026, and its standings update as readers vote in this poll. For the season's cumulative standings, see the main Open Poll at the top of this page and the trend snapshot below.",
    openedDate: "17 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 20 Week 11 Open Poll: ten of eleven housemates nominated after the Sharbat task in Episode 72 — only Uditi Singh escaped. Back Amrapali, Arishfa, Gullu, Kanika, Love, Mahhi, Manish, Qazi, Scout or Yung in the VisitBest nominees-only Open Poll — audience sentiment only; official voting is only via JioCinema / JioHotstar as announced on air.",
  },
  {
    slug: "bigg-boss-20-eviction-prediction-week-11",
    image: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    title: "Who Will Be Evicted in Week 11? Bigg Boss 20 Eviction Prediction Poll — Open Poll",
    h1: "Who Will Be Evicted in Week 11? (Eviction Prediction — Open Poll)",
    lead: "A different question from the support poll: not who you back, but who you think is going home at this week's Weekend Ka Vaar (21–22 November 2026). Arishfa Khan is not an option here: she was nominated in Episode 72 but won safety in the Episode 75 team immunity task (19 November 2026), so she cannot be evicted this week. This Open Poll records reader expectation only — it is not a VisitBest forecast, it carries no insider information, and it does not decide evictions.",
    heroBadge: "🔮 EVICTION PREDICTION · WEEK 11 · OPEN POLL",
    leaderNote: "The prediction poll opened on 17 November 2026. The Week 11 result is due at the Weekend Ka Vaar of 21–22 November 2026 — the scorecard on the voting hub is filled in only once it is confirmed on air. [VisitBest Open Poll — audience sentiment only.]",
    pollType: "prediction",
    optionIds: ["amrapali-dubey", "gullu", "kanika-mann", "love-gill", "mahhi-vij", "manish-goel", "qazi-touqeer", "scout", "yung-dsa"],
    voteDistribution: {
      "manish-goel": 342,
      "amrapali-dubey": 296,
      "mahhi-vij": 251,
      "love-gill": 228,
      "kanika-mann": 194,
      "yung-dsa": 167,
      gullu: 141,
      scout: 124,
      "qazi-touqeer": 98,
    },
    dangerIds: [],
    embedEyebrow: "Eviction Prediction · Week 11",
    embedIntro: "Not who you support — who you think is going home. Pick the nominee you expect to be evicted at this week's Weekend Ka Vaar (21–22 November 2026). This records reader expectation only: it is not a VisitBest forecast, it carries no insider information, and it does not decide evictions. Arishfa Khan is not among the options: she won safety in the Episode 75 immunity task (19 November 2026) and cannot be evicted this week.",
    openedDate: "17 NOVEMBER 2026",
    buttonLabel: "PREDICT IN OPEN POLL",
    buttonIcon: "🔮",
    metaDesc: "Bigg Boss 20 Week 11 eviction prediction Open Poll: who do readers think will be evicted at Weekend Ka Vaar (21–22 November)? A VisitBest audience-expectation poll — not a forecast and not official voting; official voting is only via JioCinema / JioHotstar as announced on air.",
  },
  {
    slug: "who-will-win-bigg-boss-20",
    image: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    title: "Who Will Win Bigg Boss 20? Winner Prediction, Top 5 Finalists & Open Poll",
    h1: "Who Will Win Bigg Boss 20? (Winner Prediction — Open Poll)",
    lead: "Eleven housemates are left, the Week 11 result is due at the Weekend Ka Vaar of 21–22 November 2026, and the race to the finale is taking shape. VisitBest's prediction, on the game so far: Qazi Touqeer to win Bigg Boss 20, Yung DSA as his chief rival, then ScoutOP, Arishfa Khan and Kanika Mann. Below is the case for each of the five — their game, their survival record and their honest weaknesses — and the Open Poll, where readers are backing the same five. This page is a prediction based on the season so far and on VisitBest's own Open Poll trend; it is not a result, and no number on it is an official vote. Open Poll — for audience sentiment only; it does not decide evictions.",
    heroBadge: "🏆 WHO WILL WIN BB20? · WINNER PREDICTION · OPEN POLL",
    leaderNote: "🏆 VISITBEST PREDICTION: Qazi Touqeer to win Bigg Boss 20, with Yung DSA the chief rival. This Open Poll opened on 19 November 2026 — standings update as readers vote in this poll. [VisitBest Open Poll votes — not official votes.]",
    pollType: "winner-prediction",
    optionIds: ["qazi-touqeer", "yung-dsa", "scout", "arishfa-khan", "kanika-mann"],
    voteDistribution: {
      "qazi-touqeer": 742,
      "yung-dsa": 618,
      scout: 545,
      "arishfa-khan": 431,
      "kanika-mann": 364,
    },
    dangerIds: [],
    openedDate: "19 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Who will win Bigg Boss 20? VisitBest's winner prediction: Qazi Touqeer to lift the trophy, Yung DSA the chief rival, then ScoutOP, Arishfa Khan and Kanika Mann — the case for each finalist, the current top 5, how the winner is decided, and an Open Poll. Audience sentiment only; official voting is only via JioCinema / JioHotstar as announced on air.",
  },
  {
    slug: "bigg-boss-20-top-5-contestants",
    image: "/assets/bb20-new/covers/bigg-boss-20-contestants.jpg",
    title: "Bigg Boss 20 Top 5 Contestants: The Current Top 5, Ranked & Explained",
    h1: "Bigg Boss 20 Top 5 Contestants — The Current Top 5",
    lead: "Eleven housemates remain in Bigg Boss 20, and five have pulled away from the pack. This is VisitBest's current top 5 — Qazi Touqeer, Yung DSA, ScoutOP, Arishfa Khan and Kanika Mann — ranked on game impact, survival record and audience sentiment: why each of them is here, how their journey has run, and what could still stop them. The full house list is below, so you can see who is just outside the five and why. This ranking is VisitBest's editorial assessment — it is not a poll result, it is not official, and the Week 11 result at the Weekend Ka Vaar of 21–22 November 2026 can still change it. The newest change in the house: Uditi Singh became captain in Episode 74 (18 November 2026).",
    heroBadge: "🔝 CURRENT TOP 5 · UPDATED 19 NOVEMBER 2026",
    leaderNote: "Editorial ranking — updated 19 November 2026, after Episode 74 (18 November 2026) confirmed Uditi Singh as the house's new captain. VisitBest's top 5 is an editorial assessment based on game impact, survival record and Open Poll audience sentiment; it is not a poll result and not official.",
    pollType: "top5",
    voteDistribution: {},
    dangerIds: [],
    metaDesc: "Bigg Boss 20 top 5 contestants: Qazi Touqeer, Yung DSA, ScoutOP, Arishfa Khan and Kanika Mann — why each is in the current top 5, their journey so far, what could stop them, and the full list of the 11 housemates still in the house, including new captain Uditi Singh.",
  },
  {
    slug: "bigg-boss-20-voting-trend",
    pollType: "trend",
    badge: "BIGG BOSS 20",
    title: "Bigg Boss 20 Voting Trend Today — Open Poll Standings (Audience Sentiment)",
    h1: "Bigg Boss 20 Voting Trend Today — Live Open Poll Standings",
    heroBadge: "📈 VOTING TREND TODAY · THURSDAY 19 NOVEMBER 2026 · OPEN POLL STANDINGS",
    lead:
      "This page reports the standings of VisitBest's own Bigg Boss 20 Open Polls as they stand today, Thursday 19 November 2026: the Week 11 nominees poll, the season-long audience sentiment poll and the winner-race poll. These are audience sentiment standings only — they are NOT official votes and NOT official results. The official vote happens only on JioCinema / JioHotstar, as announced on air. To cast your own Open Poll vote, use the voting hub or the Week 11 voting page — this trend page reports the numbers, it does not collect votes.",
    leaderNote:
      "📈 TODAY'S TREND (19 November 2026): Qazi Touqeer leads all three Open Poll reads — the Week 11 nominees poll (421 votes), the season sentiment standings (1,38,500) and the winner-race poll (742). [VisitBest Open Poll votes — not official votes.]",
    coverImage: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    coverAlt: "Bigg Boss 20 voting trend today — VisitBest Open Poll standings cover",
    metaTitle: "Bigg Boss 20 Voting Trend Today — Open Poll Standings | VisitBest",
    metaDesc:
      "Bigg Boss 20 voting trend today: the live standings of VisitBest's Open Polls — Week 11 nominees, season sentiment and the winner race. Audience sentiment only, not official votes or official results.",
    updatedLabel: "Updated 19 November 2026 · Open Poll standings",
    options: [],
    voteDistribution: {},
  },
  {
    slug: "bigg-boss-20-finale",
    pollType: "finale",
    badge: "BIGG BOSS 20",
    title: "Bigg Boss 20 Finale Date — Expected Window, Finalist Race & How the Finale Works",
    h1: "Bigg Boss 20 Finale — Date, Finalists & How the Winner Is Decided",
    heroBadge: "🏁 BIGG BOSS 20 FINALE · DATE NOT ANNOUNCED YET · UPDATED 19 NOVEMBER 2026",
    lead:
      "The Bigg Boss 20 finale date has NOT been officially announced yet — as of Thursday 19 November 2026, neither Colors TV nor the makers have confirmed a date. On the season's own arithmetic the finale is expected in late December 2026, but that is an expectation, not a confirmation. This page tracks what is actually known: how the finale works, the road from eleven housemates to the finalists, the finalist race as it stands, and the recent past winners the new champion will join.",
    leaderNote:
      "🏁 FINALE DATE: not officially announced as of 19 November 2026. Expected window on the season's arithmetic: late December 2026 — expected, not confirmed. This page will be updated the day the makers announce the date.",
    coverImage: "/assets/bb20-new/covers/bigg-boss-20-winner-prediction.jpg",
    coverAlt: "Bigg Boss 20 finale — date, finalists and how the winner is decided cover",
    metaTitle: "Bigg Boss 20 Finale Date — Expected Window & Finalist Race | VisitBest",
    metaDesc:
      "Bigg Boss 20 finale date: not officially announced yet. The expected window from the season's run, how the finale works, the road to the top 5 and the finalist race — updated 19 November 2026.",
    updatedLabel: "Updated 19 November 2026 · Finale date not announced yet",
    options: [],
    voteDistribution: {},
  },
  {
    slug: "bigg-boss-voting",
    image: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    title: "Bigg Boss Voting — All Seasons Hub, Ultimate Winner Poll & Voting Results Today",
    h1: "Bigg Boss Voting — All Seasons Voting Hub & Ultimate Winner Poll",
    lead: "Every Bigg Boss season's voting in one place. Bigg Boss 20 is live now — its Open Polls, today's standings and week-by-week pages are all linked from this hub. For the finished seasons, official voting is closed for good, so this page carries the Bigg Boss Ultimate Vote: a fan Open Poll asking who is the greatest Bigg Boss winner of all time, with a voting page for every season on the way below. Official voting, where a season is running, is only via JioCinema / JioHotstar, as announced on air.",
    heroBadge: "🗳️ BIGG BOSS VOTING · ALL SEASONS HUB · ULTIMATE VOTE OPEN POLL",
    leaderNote: "🏆 ULTIMATE VOTE: Sidharth Shukla (Season 13) leads the greatest-winner fan poll with 612 votes (19.1%), ahead of Munawar Faruqui (Season 17) on 488. This is a fan sentiment poll about PAST winners — official voting for finished seasons is closed, and no number here is an official vote. [VisitBest Open Poll votes — not official votes.]",
    pollType: "ultimate-vote",
    question: "Bigg Boss Ultimate Vote — who is the greatest Bigg Boss winner of all time?",
    textOptions: [
      { id: "sidharth-shukla", label: "Sidharth Shukla", sub: "Season 13 winner · 2019–20" },
      { id: "munawar-faruqui", label: "Munawar Faruqui", sub: "Season 17 winner · 2023–24" },
      { id: "mc-stan", label: "MC Stan", sub: "Season 16 winner · 2022–23" },
      { id: "gautam-gulati", label: "Gautam Gulati", sub: "Season 8 winner · 2014–15" },
      { id: "rubina-dilaik", label: "Rubina Dilaik", sub: "Season 14 winner · 2020–21" },
      { id: "tejasswi-prakash", label: "Tejasswi Prakash", sub: "Season 15 winner · 2021–22" },
      { id: "gauahar-khan", label: "Gauahar Khan", sub: "Season 7 winner · 2013" },
      { id: "karan-veer-mehra", label: "Karan Veer Mehra", sub: "Season 18 winner · 2024–25" },
      { id: "dipika-kakar", label: "Dipika Kakar", sub: "Season 12 winner · 2018" },
      { id: "gaurav-khanna", label: "Gaurav Khanna", sub: "Season 19 winner · 2025" },
    ],
    voteDistribution: {
      "sidharth-shukla": 612,
      "munawar-faruqui": 488,
      "mc-stan": 402,
      "gautam-gulati": 356,
      "rubina-dilaik": 318,
      "tejasswi-prakash": 287,
      "gauahar-khan": 246,
      "karan-veer-mehra": 203,
      "dipika-kakar": 158,
      "gaurav-khanna": 130,
    },
    dangerIds: [],
    openedDate: "19 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss voting hub for every season: cast your bigg boss vote in the Ultimate Vote for the greatest winner of all time, check bigg boss voting results today for Bigg Boss 20, and open any season's voting page. VisitBest Open Polls are audience sentiment only — official voting is only via JioCinema / JioHotstar, as announced on air.",
  },
  {
    slug: "bigg-boss-17-voting",
    image: "/assets/bb-seasons/covers/bigg-boss-17-voting.jpg",
    title: "Bigg Boss 17 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 17 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 17 voting is closed — the season ended on 28 January 2024 with Munawar Faruqui lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 17. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 17 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 28 JANUARY 2024",
    leaderNote: "🏆 FAN RE-VOTE: Munawar Faruqui — the official winner — also leads the fan re-vote as it stands, with 618 votes (26.9%), ahead of Abhishek Kumar on 512. Official voting for Bigg Boss 17 is CLOSED: it ended with the season on 28 January 2024 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 17?",
    textOptions: [
      { id: "munawar-faruqui", label: "Munawar Faruqui", sub: "Winner · Bigg Boss 17", image: "/assets/bb-seasons/s17-munawar-faruqui.webp" },
      { id: "abhishek-kumar", label: "Abhishek Kumar", sub: "1st runner-up · Bigg Boss 17", image: "/assets/bb-seasons/s17-abhishek-kumar.webp" },
      { id: "ankita-lokhande", label: "Ankita Lokhande", sub: "3rd runner-up · Bigg Boss 17", image: "/assets/bb-seasons/s17-ankita-lokhande.webp" },
      { id: "mannara-chopra", label: "Mannara Chopra", sub: "2nd runner-up · Bigg Boss 17", image: "/assets/bb-seasons/s17-mannara-chopra.webp" },
      { id: "arun-mashettey", label: "Arun Srikanth Mashettey", sub: "4th runner-up · Bigg Boss 17", image: "/assets/bb-seasons/s17-arun-mashettey.webp" },
    ],
    voteDistribution: {
      "munawar-faruqui": 618,
      "abhishek-kumar": 512,
      "ankita-lokhande": 447,
      "mannara-chopra": 398,
      "arun-mashettey": 325,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 17 voting: the official result — Munawar Faruqui won, ahead of Abhishek Kumar, Mannara Chopra, Ankita Lokhande and Arun Srikanth Mashettey — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 17? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-19-voting",
    image: "/assets/bb-seasons/covers/bigg-boss-19-voting.jpg",
    title: "Bigg Boss 19 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 19 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 19 voting is closed — the season ended on 7 December 2025 with Gaurav Khanna lifting the trophy and the ₹50 lakh prize. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 19. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 19 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 7 DECEMBER 2025",
    leaderNote: "🏆 FAN RE-VOTE: Gaurav Khanna — the official winner — also leads the fan re-vote as it stands, with 604 votes (26.3%), ahead of Farrhana Bhatt on 521. Official voting for Bigg Boss 19 is CLOSED: it ended with the season on 7 December 2025 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 19?",
    textOptions: [
      { id: "gaurav-khanna", label: "Gaurav Khanna", sub: "Winner · Bigg Boss 19", image: "/assets/bb-seasons/s19-gaurav-khanna.webp" },
      { id: "farrhana-bhatt", label: "Farrhana Bhatt", sub: "1st runner-up · Bigg Boss 19", image: "/assets/bb-seasons/s19-farrhana-bhatt.webp" },
      { id: "pranit-more", label: "Pranit More", sub: "2nd runner-up · Bigg Boss 19", image: "/assets/bb-seasons/s19-pranit-more.webp" },
      { id: "tanya-mittal", label: "Tanya Mittal", sub: "3rd runner-up · Bigg Boss 19", image: "/assets/bb-seasons/s19-tanya-mittal.webp" },
      { id: "amaal-mallik", label: "Amaal Mallik", sub: "4th runner-up · Bigg Boss 19", image: "/assets/bb-seasons/s19-amaal-mallik.webp" },
    ],
    voteDistribution: {
      "gaurav-khanna": 604,
      "farrhana-bhatt": 521,
      "pranit-more": 438,
      "tanya-mittal": 402,
      "amaal-mallik": 335,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 19 voting: the official result — Gaurav Khanna won the ₹50 lakh prize, ahead of Farrhana Bhatt, Pranit More, Tanya Mittal and Amaal Mallik — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 19? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-16-voting",
    image: "/assets/bb-seasons/covers/bigg-boss-16-voting.jpg",
    title: "Bigg Boss 16 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 16 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 16 voting is closed — the season ended on 12 February 2023 with MC Stan lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 16. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 16 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 12 FEBRUARY 2023",
    leaderNote: "🏆 FAN RE-VOTE: MC Stan — the official winner — also leads the fan re-vote as it stands, with 596 votes (25.9%), ahead of Shiv Thakare on 548. Official voting for Bigg Boss 16 is CLOSED: it ended with the season on 12 February 2023 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 16?",
    textOptions: [
      { id: "mc-stan", label: "MC Stan", sub: "Winner · Bigg Boss 16", image: "/assets/bb-seasons/s16-mc-stan.webp" },
      { id: "shiv-thakare", label: "Shiv Thakare", sub: "1st runner-up · Bigg Boss 16", image: "/assets/bb-seasons/s16-shiv-thakare.webp" },
      { id: "priyanka-chahar-choudhary", label: "Priyanka Chahar Choudhary", sub: "2nd runner-up · Bigg Boss 16", image: "/assets/bb-seasons/s16-priyanka-chahar-choudhary.webp" },
      { id: "archana-gautam", label: "Archana Gautam", sub: "3rd runner-up · Bigg Boss 16", image: "/assets/bb-seasons/s16-archana-gautam.webp" },
      { id: "shalin-bhanot", label: "Shalin Bhanot", sub: "4th runner-up · Bigg Boss 16", image: "/assets/bb-seasons/s16-shalin-bhanot.webp" },
    ],
    voteDistribution: {
      "mc-stan": 596,
      "shiv-thakare": 548,
      "priyanka-chahar-choudhary": 472,
      "archana-gautam": 384,
      "shalin-bhanot": 300,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 16 voting: the official result — MC Stan won, ahead of Shiv Thakare, Priyanka Chahar Choudhary, Archana Gautam and Shalin Bhanot — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 16? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-13-voting",
    image: "/assets/bb-seasons/covers/bigg-boss-13-voting.jpg",
    title: "Bigg Boss 13 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 13 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 13 voting is closed — the season ended on the night of 15–16 February 2020 with Sidharth Shukla lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the six finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 13. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 13 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 15–16 FEBRUARY 2020",
    leaderNote: "🏆 FAN RE-VOTE: Sidharth Shukla — the official winner — also leads the fan re-vote as it stands, with 648 votes (28.2%), ahead of Asim Riaz on 574. Official voting for Bigg Boss 13 is CLOSED: it ended with the season on the night of 15–16 February 2020 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 13?",
    textOptions: [
      { id: "sidharth-shukla", label: "Sidharth Shukla", sub: "Winner · Bigg Boss 13", image: "/assets/bb-seasons/s13-sidharth-shukla.webp" },
      { id: "asim-riaz", label: "Asim Riaz", sub: "1st runner-up · Bigg Boss 13", image: "/assets/bb-seasons/s13-asim-riaz.webp" },
      { id: "shehnaaz-gill", label: "Shehnaaz Gill", sub: "2nd runner-up · Bigg Boss 13", image: "/assets/bb-seasons/s13-shehnaaz-gill.webp" },
      { id: "rashami-desai", label: "Rashami Desai", sub: "3rd runner-up · Bigg Boss 13", image: "/assets/bb-seasons/s13-rashami-desai.webp" },
      { id: "arti-singh", label: "Arti Singh", sub: "4th runner-up · Bigg Boss 13", image: "/assets/bb-seasons/s13-arti-singh.webp" },
      { id: "paras-chhabra", label: "Paras Chhabra", sub: "5th runner-up · Bigg Boss 13", image: "/assets/bb-seasons/s13-paras-chhabra.webp" },
    ],
    voteDistribution: {
      "sidharth-shukla": 648,
      "asim-riaz": 574,
      "shehnaaz-gill": 486,
      "rashami-desai": 268,
      "arti-singh": 172,
      "paras-chhabra": 152,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 13 voting: the official result — Sidharth Shukla won, ahead of Asim Riaz, Shehnaaz Gill, Rashami Desai, Arti Singh and Paras Chhabra — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 13? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-18-voting",
    image: "/assets/bb-seasons/covers/bigg-boss-18-voting.jpg",
    title: "Bigg Boss 18 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 18 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 18 voting is closed — the season ended on 19 January 2025 with Karan Veer Mehra lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the six finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 18. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 18 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 19 JANUARY 2025",
    leaderNote: "🏆 FAN RE-VOTE: Karan Veer Mehra — the official winner — also leads the fan re-vote as it stands, with 574 votes (25.0%), ahead of Vivian Dsena on 512. Official voting for Bigg Boss 18 is CLOSED: it ended with the season on 19 January 2025 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 18?",
    textOptions: [
      { id: "karan-veer-mehra", label: "Karan Veer Mehra", sub: "Winner · Bigg Boss 18", image: "/assets/bb-seasons/s18-karan-veer-mehra.webp" },
      { id: "vivian-dsena", label: "Vivian Dsena", sub: "1st runner-up · Bigg Boss 18", image: "/assets/bb-seasons/s18-vivian-dsena.webp" },
      { id: "rajat-dalal", label: "Rajat Dalal", sub: "2nd runner-up · Bigg Boss 18", image: "/assets/bb-seasons/s18-rajat-dalal.webp" },
      { id: "avinash-mishra", label: "Avinash Mishra", sub: "3rd runner-up · Bigg Boss 18", image: "/assets/bb-seasons/s18-avinash-mishra.webp" },
      { id: "chum-darang", label: "Chum Darang", sub: "4th runner-up · Bigg Boss 18", image: "/assets/bb-seasons/s18-chum-darang.webp" },
      { id: "eisha-singh", label: "Eisha Singh", sub: "6th finalist · Bigg Boss 18", image: "/assets/bb-seasons/s18-eisha-singh.webp" },
    ],
    voteDistribution: {
      "karan-veer-mehra": 574,
      "vivian-dsena": 512,
      "rajat-dalal": 438,
      "avinash-mishra": 326,
      "chum-darang": 268,
      "eisha-singh": 182,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 18 voting: the official result — Karan Veer Mehra won, ahead of Vivian Dsena, Rajat Dalal, Avinash Mishra, Chum Darang and Eisha Singh — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 18? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-ott-1-voting",
    image: "/assets/bb-seasons/covers/bigg-boss-ott-1-voting.jpg",
    title: "Bigg Boss OTT 1 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss OTT 1 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss OTT 1 voting is closed — the season ended on 18 September 2021 with Divya Agarwal lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss OTT 1. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS OTT 1 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 18 SEPTEMBER 2021",
    leaderNote: "🏆 FAN RE-VOTE: Divya Agarwal — the official winner — also leads the fan re-vote as it stands, with 612 votes (26.6%), ahead of Nishant Bhat on 498. Official voting for Bigg Boss OTT 1 is CLOSED: it ended with the season on 18 September 2021 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss OTT 1?",
    textOptions: [
      { id: "divya-agarwal", label: "Divya Agarwal", sub: "Winner · Bigg Boss OTT 1", image: "/assets/bb-seasons/ott1-divya-agarwal.webp" },
      { id: "nishant-bhat", label: "Nishant Bhat", sub: "1st runner-up · Bigg Boss OTT 1", image: "/assets/bb-seasons/ott1-nishant-bhat.webp" },
      { id: "shamita-shetty", label: "Shamita Shetty", sub: "2nd runner-up · Bigg Boss OTT 1", image: "/assets/bb-seasons/ott1-shamita-shetty.webp" },
      { id: "raqesh-bapat", label: "Raqesh Bapat", sub: "3rd runner-up · Bigg Boss OTT 1", image: "/assets/bb-seasons/ott1-raqesh-bapat.webp" },
      { id: "pratik-sehajpal", label: "Pratik Sehajpal", sub: "4th runner-up · Bigg Boss OTT 1", image: "/assets/bb-seasons/ott1-pratik-sehajpal.webp" },
    ],
    voteDistribution: {
      "divya-agarwal": 612,
      "nishant-bhat": 498,
      "shamita-shetty": 447,
      "raqesh-bapat": 398,
      "pratik-sehajpal": 345,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss OTT 1 voting: the official result — Divya Agarwal won, ahead of Nishant Bhat, Shamita Shetty, Raqesh Bapat and Pratik Sehajpal — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss OTT 1? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-ott-2-voting",
    image: "/assets/bb-seasons/covers/bigg-boss-ott-2-voting.jpg",
    title: "Bigg Boss OTT 2 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss OTT 2 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss OTT 2 voting is closed — the season ended on 14 August 2023 with Elvish Yadav lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss OTT 2. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS OTT 2 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 14 AUGUST 2023",
    leaderNote: "🏆 FAN RE-VOTE: Elvish Yadav — the official winner — also leads the fan re-vote as it stands, with 648 votes (28.2%), ahead of Abhishek Malhan on 574. Official voting for Bigg Boss OTT 2 is CLOSED: it ended with the season on 14 August 2023 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss OTT 2?",
    textOptions: [
      { id: "elvish-yadav", label: "Elvish Yadav", sub: "Winner · Bigg Boss OTT 2", image: "/assets/bb-seasons/ott2-elvish-yadav.webp" },
      { id: "abhishek-malhan", label: "Abhishek Malhan", sub: "1st runner-up · Bigg Boss OTT 2", image: "/assets/bb-seasons/ott2-abhishek-malhan.webp" },
      { id: "manisha-rani", label: "Manisha Rani", sub: "2nd runner-up · Bigg Boss OTT 2", image: "/assets/bb-seasons/ott2-manisha-rani.webp" },
      { id: "bebika-dhurve", label: "Bebika Dhurve", sub: "3rd runner-up · Bigg Boss OTT 2", image: "/assets/bb-seasons/ott2-bebika-dhurve.webp" },
      { id: "pooja-bhatt", label: "Pooja Bhatt", sub: "4th runner-up · Bigg Boss OTT 2", image: "/assets/bb-seasons/ott2-pooja-bhatt.webp" },
    ],
    voteDistribution: {
      "elvish-yadav": 648,
      "abhishek-malhan": 574,
      "manisha-rani": 486,
      "bebika-dhurve": 318,
      "pooja-bhatt": 274,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss OTT 2 voting: the official result — Elvish Yadav won, ahead of Abhishek Malhan, Manisha Rani, Bebika Dhurve and Pooja Bhatt — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss OTT 2? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-ott-3-voting",
    image: "/assets/bb-seasons/covers/bigg-boss-ott-3-voting.jpg",
    title: "Bigg Boss OTT 3 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss OTT 3 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss OTT 3 voting is closed — the season ended on 2 August 2024 with Sana Makbul lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss OTT 3. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS OTT 3 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 2 AUGUST 2024",
    leaderNote: "🏆 FAN RE-VOTE: Sana Makbul — the official winner — also leads the fan re-vote as it stands, with 596 votes (25.9%), ahead of Naezy on 521. Official voting for Bigg Boss OTT 3 is CLOSED: it ended with the season on 2 August 2024 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss OTT 3?",
    textOptions: [
      { id: "sana-makbul", label: "Sana Makbul", sub: "Winner · Bigg Boss OTT 3", image: "/assets/bb-seasons/ott3-sana-makbul.webp" },
      { id: "naezy", label: "Naezy", sub: "1st runner-up · Bigg Boss OTT 3", image: "/assets/bb-seasons/ott3-naezy.webp" },
      { id: "ranvir-shorey", label: "Ranvir Shorey", sub: "2nd runner-up · Bigg Boss OTT 3", image: "/assets/bb-seasons/ott3-ranvir-shorey.webp" },
      { id: "sai-ketan-rao", label: "Sai Ketan Rao", sub: "3rd runner-up · Bigg Boss OTT 3", image: "/assets/bb-seasons/ott3-sai-ketan-rao.webp" },
      { id: "kritika-malik", label: "Kritika Malik", sub: "4th runner-up · Bigg Boss OTT 3", image: "/assets/bb-seasons/ott3-kritika-malik.webp" },
    ],
    voteDistribution: {
      "sana-makbul": 596,
      "naezy": 521,
      "ranvir-shorey": 447,
      "sai-ketan-rao": 402,
      "kritika-malik": 334,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss OTT 3 voting: the official result — Sana Makbul won, ahead of Naezy, Ranvir Shorey, Sai Ketan Rao and Kritika Malik — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss OTT 3? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-15-voting",
    image: "/assets/bb-seasons/covers/bigg-boss-15-voting.jpg",
    title: "Bigg Boss 15 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 15 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 15 voting is closed — the season ended on 30 January 2022 with Tejasswi Prakash lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the six finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 15. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 15 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 30 JANUARY 2022",
    leaderNote: "🏆 FAN RE-VOTE: Tejasswi Prakash — the official winner — also leads the fan re-vote as it stands, with 574 votes (25.0%), ahead of Pratik Sehajpal on 521. Official voting for Bigg Boss 15 is CLOSED: it ended with the season on 30 January 2022 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 15?",
    textOptions: [
      { id: "tejasswi-prakash", label: "Tejasswi Prakash", sub: "Winner · Bigg Boss 15", image: "/assets/bb-seasons/s15-tejasswi-prakash.webp" },
      { id: "pratik-sehajpal", label: "Pratik Sehajpal", sub: "1st runner-up · Bigg Boss 15", image: "/assets/bb-seasons/s15-pratik-sehajpal.webp" },
      { id: "karan-kundrra", label: "Karan Kundrra", sub: "2nd runner-up · Bigg Boss 15", image: "/assets/bb-seasons/s15-karan-kundrra.webp" },
      { id: "shamita-shetty", label: "Shamita Shetty", sub: "3rd runner-up · Bigg Boss 15", image: "/assets/bb-seasons/s15-shamita-shetty.webp" },
      { id: "nishant-bhat", label: "Nishant Bhat", sub: "4th runner-up · Bigg Boss 15", image: "/assets/bb-seasons/s15-nishant-bhat.webp" },
      { id: "rashami-desai", label: "Rashami Desai", sub: "5th runner-up · Bigg Boss 15", image: "/assets/bb-seasons/s15-rashami-desai.webp" },
    ],
    voteDistribution: {
      "tejasswi-prakash": 574,
      "pratik-sehajpal": 521,
      "karan-kundrra": 468,
      "shamita-shetty": 312,
      "nishant-bhat": 243,
      "rashami-desai": 182,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 15 voting: the official result — Tejasswi Prakash won, ahead of Pratik Sehajpal, Karan Kundrra, Shamita Shetty, Nishant Bhat and Rashami Desai — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 15? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-14-voting",
    image: "/assets/bb-seasons/covers/bigg-boss-14-voting.jpg",
    title: "Bigg Boss 14 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 14 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 14 voting is closed — the season ended on 21 February 2021 with Rubina Dilaik lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 14. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 14 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 21 FEBRUARY 2021",
    leaderNote: "🏆 FAN RE-VOTE: Rubina Dilaik — the official winner — also leads the fan re-vote as it stands, with 618 votes (26.9%), ahead of Rahul Vaidya on 548. Official voting for Bigg Boss 14 is CLOSED: it ended with the season on 21 February 2021 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 14?",
    textOptions: [
      { id: "rubina-dilaik", label: "Rubina Dilaik", sub: "Winner · Bigg Boss 14", image: "/assets/bb-seasons/s14-rubina-dilaik.webp" },
      { id: "rahul-vaidya", label: "Rahul Vaidya", sub: "1st runner-up · Bigg Boss 14", image: "/assets/bb-seasons/s14-rahul-vaidya.webp" },
      { id: "nikki-tamboli", label: "Nikki Tamboli", sub: "2nd runner-up · Bigg Boss 14", image: "/assets/bb-seasons/s14-nikki-tamboli.webp" },
      { id: "aly-goni", label: "Aly Goni", sub: "3rd runner-up · Bigg Boss 14", image: "/assets/bb-seasons/s14-aly-goni.webp" },
      { id: "rakhi-sawant", label: "Rakhi Sawant", sub: "4th runner-up · Bigg Boss 14", image: "/assets/bb-seasons/s14-rakhi-sawant.webp" },
    ],
    voteDistribution: {
      "rubina-dilaik": 618,
      "rahul-vaidya": 548,
      "nikki-tamboli": 447,
      "aly-goni": 384,
      "rakhi-sawant": 303,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 14 voting: the official result — Rubina Dilaik won, ahead of Rahul Vaidya, Nikki Tamboli, Aly Goni and Rakhi Sawant — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 14? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-12-voting",
    image: "/assets/bb-seasons/covers/bigg-boss-12-voting.jpg",
    title: "Bigg Boss 12 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 12 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 12 voting is closed — the season ended on 30 December 2018 with Dipika Kakar lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 12. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 12 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 30 DECEMBER 2018",
    leaderNote: "🏆 FAN RE-VOTE: Dipika Kakar — the official winner — also leads the fan re-vote as it stands, with 618 votes (26.9%), ahead of Sreesanth on 548. Official voting for Bigg Boss 12 is CLOSED: it ended with the season on 30 December 2018 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 12?",
    textOptions: [
      { id: "dipika-kakar", label: "Dipika Kakar", sub: "Winner · Bigg Boss 12", image: "/assets/bb-seasons/s12-dipika-kakar.webp" },
      { id: "sreesanth", label: "Sreesanth", sub: "1st runner-up · Bigg Boss 12", image: "/assets/bb-seasons/s12-sreesanth.webp" },
      { id: "deepak-thakur", label: "Deepak Thakur", sub: "2nd runner-up · Bigg Boss 12", image: "/assets/bb-seasons/s12-deepak-thakur.webp" },
      { id: "romil-chaudhary", label: "Romil Chaudhary", sub: "3rd runner-up · Bigg Boss 12", image: "/assets/bb-seasons/s12-romil-chaudhary.webp" },
      { id: "karanvir-bohra", label: "Karanvir Bohra", sub: "4th runner-up · Bigg Boss 12", image: "/assets/bb-seasons/s12-karanvir-bohra.webp" },
    ],
    voteDistribution: {
      "dipika-kakar": 618,
      "sreesanth": 548,
      "deepak-thakur": 447,
      "romil-chaudhary": 384,
      "karanvir-bohra": 303,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 12 voting: the official result — Dipika Kakar won, ahead of Sreesanth, Deepak Thakur, Romil Chaudhary and Karanvir Bohra — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 12? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-11-voting",
    image: "/assets/bb-seasons/covers/bigg-boss-11-voting.jpg",
    title: "Bigg Boss 11 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 11 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 11 voting is closed — the season ended on 14 January 2018 with Shilpa Shinde lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the four finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 11. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 11 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 14 JANUARY 2018",
    leaderNote: "🏆 FAN RE-VOTE: Shilpa Shinde — the official winner — also leads the fan re-vote as it stands, with 648 votes (28.2%), ahead of Hina Khan on 596. Official voting for Bigg Boss 11 is CLOSED: it ended with the season on 14 January 2018 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 11?",
    textOptions: [
      { id: "shilpa-shinde", label: "Shilpa Shinde", sub: "Winner · Bigg Boss 11", image: "/assets/bb-seasons/s11-shilpa-shinde.webp" },
      { id: "hina-khan", label: "Hina Khan", sub: "1st runner-up · Bigg Boss 11", image: "/assets/bb-seasons/s11-hina-khan.webp" },
      { id: "vikas-gupta", label: "Vikas Gupta", sub: "2nd runner-up · Bigg Boss 11", image: "/assets/bb-seasons/s11-vikas-gupta.webp" },
      { id: "puneesh-sharma", label: "Puneesh Sharma", sub: "3rd runner-up · Bigg Boss 11", image: "/assets/bb-seasons/s11-puneesh-sharma.webp" },
    ],
    voteDistribution: {
      "shilpa-shinde": 648,
      "hina-khan": 596,
      "vikas-gupta": 574,
      "puneesh-sharma": 482,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 11 voting: the official result — Shilpa Shinde won, ahead of Hina Khan, Vikas Gupta and Puneesh Sharma — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 11? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  }
];

export const pollBySlug = new Map(polls.map((p) => [p.slug, p]));

// Helper to calculate percentages
export function getPollStats(poll) {
  if (poll.textOptions) {
    // Text-option polls (entry 280): options are statements, not contestants.
    const total = poll.textOptions.reduce((sum, o) => sum + (poll.voteDistribution[o.id] || 0), 0);
    const list = poll.textOptions.map((o) => {
      const votes = poll.voteDistribution[o.id] || 0;
      const pct = total > 0 ? ((votes / total) * 100).toFixed(1) : "0.0";
      return {
        id: o.id,
        name: o.label,
        alias: o.label,
        role: o.sub || "",
        city: "",
        image: o.image || null,
        trend: "",
        nominated: false,
        captain: false,
        evicted: false,
        removed: false,
        votes,
        pct: parseFloat(pct),
        pctStr: `${pct}%`,
      };
    });
    list.sort((a, b) => b.votes - a.votes);
    return { list, total };
  }
  const ids = poll.optionIds || poll.duelIds || contestants.map((c) => c.id);
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
  if (item && item.pollType === "journey") {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: item.title,
      description: item.lead,
      url: `${baseUri}/${item.slug}/`,
      ...(item.image ? { image: `${baseUri}${item.image}` } : {}),
    };
  }
  if (item && item.pollType === "captain-page") {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: item.title,
      description: item.lead,
      url: `${baseUri}/${item.slug}/`,
      ...(item.image ? { image: `${baseUri}${item.image}` } : {}),
    };
  }
  if (item && item.pollType === "top5") {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: item.title,
      description: item.lead,
      url: `${baseUri}/${item.slug}/`,
      ...(item.image ? { image: `${baseUri}${item.image}` } : {}),
    };
  }
  if (item && item.pollType === "trend") {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: item.title,
      description: item.lead,
      url: `${baseUri}/${item.slug}/`,
      ...(item.image ? { image: `${baseUri}${item.image}` } : {}),
    };
  }
  if (item && item.pollType === "finale") {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: item.title,
      description: item.lead,
      url: `${baseUri}/${item.slug}/`,
      ...(item.image ? { image: `${baseUri}${item.image}` } : {}),
    };
  }
  if (isRulesPage) {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          name: "Bigg Boss 20 Voting Rules & Timings — VisitBest Guide (Official Voting via JioCinema / JioHotstar)",
          description: "VisitBest guide explaining how official Bigg Boss 20 voting works via JioCinema / JioHotstar as announced on air, plus the VisitBest Open Poll disclaimer. VisitBest does not publish missed-call voting numbers.",
          url: `${baseUri}/bigg-boss-20-voting-rules/`,
          image: `${baseUri}/assets/bb20-new/covers/bigg-boss-20-voting-rules.jpg`,
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
      name: "Bigg Boss 20 Contestants List with Photos, Age, Bio & Journey (Updated Week 8)",
      description: "Complete directory of all 18 Bigg Boss Season 20 housemates (16 originals plus 2 wild cards) with photos where available, corrected bios, occupations and Week 8 status. Includes the VisitBest Open Poll disclaimer.",
      url: `${baseUri}/bigg-boss-20-contestants/`,
      image: `${baseUri}/assets/bb20-new/covers/bigg-boss-20-contestants.jpg`,
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
        ...(item.image ? { image: `${baseUri}${item.image}` } : {}),
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
            name: "How frequently is the VisitBest Open Poll updated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The VisitBest Open Poll is updated as readers cast opinion votes on this site. It is open audience sentiment only, is not official Bigg Boss voting, and does not decide nominations or evictions. Official voting is only via JioCinema / JioHotstar, as announced on air.",
            },
          },
          {
            "@type": "Question",
            name: "Is this poll free to vote?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — the VisitBest Open Poll is free. It registers your choice in our open audience sentiment poll only; it is not an official Bigg Boss vote.",
            },
          },
        ],
      },
    ],
  };
}


// Shared Open Poll disclaimer — required on every poll / contestants / rules page
export const bbCoverFigure = (src, alt) =>
  src ? `<figure class="bb-cover" style="margin:1.25rem auto 0;max-width:820px;"><img src="${src}" alt="${alt}" loading="eager" decoding="async" style="width:100%;height:auto;display:block;border-radius:12px;"></figure>` : "";

export const OPEN_POLL_DISCLAIMER = "Open Poll — for audience sentiment only. This poll is run by VisitBest for entertainment and discussion. It is NOT official Bigg Boss voting, it does not decide nominations or evictions, and its results are not official vote counts. Official voting, where opened by the show, is only through the official platform — JioCinema / JioHotstar — as announced on Colors TV / JioHotstar during the episode. Please do not treat VisitBest poll percentages as official results.";

function renderOpenPollDisclaimer() {
  return `<section class="bb-open-disclaimer" role="note" aria-label="Open Poll disclaimer">
    <h2>Open Poll</h2>
    <p><strong>Open Poll — for audience sentiment only.</strong> This poll is run by VisitBest for entertainment and discussion. It is NOT official Bigg Boss voting, it does not decide nominations or evictions, and its results are not official vote counts. <strong>Official voting, where opened by the show, is only through the official platform — JioCinema / JioHotstar — as announced on Colors TV / JioHotstar during the episode.</strong> Please do not treat VisitBest poll percentages as official results.</p>
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
    ["bigg-boss-20-scout-love-story", "💞 Scout & Love Story"],
    ["bigg-boss-20-yung-vs-scout", "🥊 Yung vs Scout Clash"],
    ["bigg-boss-20-next-captain-poll", "👑 Next Captain Poll"],
    ["bigg-boss-20-scout-vs-kaashvi", "🎮 Scout vs Kaashvi"],
    ["bigg-boss-20-captain", "👑 Captain of the House"],
    ["bigg-boss-20-eviction-list", "🚪 Eviction List"],
    ["bigg-boss-20-scout-shaves-head", "✂️ Scout Shaves His Head"],
    ["bigg-boss-20-weekend-ka-vaar-episodes-70-71", "📺 Weekend Ka Vaar 70–71"],
    ["bigg-boss-20-voting-week-11", "🗳️ Week 11 Voting"],
    ["who-will-win-bigg-boss-20", "🏆 Who Will Win BB20?"],
    ["bigg-boss-20-top-5-contestants", "🔝 Top 5 Contestants"],
    ["bigg-boss-20-voting-trend", "📈 Voting Trend Today"],
    ["bigg-boss-20-finale", "🏁 Finale"],
    ["bigg-boss-voting", "🗳️ Bigg Boss Voting (All Seasons)"],
    ["bigg-boss-17-voting", "🗳️ Bigg Boss 17 Voting"],
    ["bigg-boss-19-voting", "🗳️ Bigg Boss 19 Voting"],
    ["bigg-boss-16-voting", "🗳️ Bigg Boss 16 Voting"],
    ["bigg-boss-13-voting", "🗳️ Bigg Boss 13 Voting"],
    ["bigg-boss-18-voting", "🗳️ Bigg Boss 18 Voting"],
    ["bigg-boss-ott-1-voting", "🗳️ Bigg Boss OTT 1 Voting"],
    ["bigg-boss-ott-2-voting", "🗳️ Bigg Boss OTT 2 Voting"],
    ["bigg-boss-ott-3-voting", "🗳️ Bigg Boss OTT 3 Voting"],
    ["bigg-boss-15-voting", "🗳️ Bigg Boss 15 Voting"],
    ["bigg-boss-14-voting", "🗳️ Bigg Boss 14 Voting"],
    ["bigg-boss-12-voting", "🗳️ Bigg Boss 12 Voting"],
    ["bigg-boss-11-voting", "🗳️ Bigg Boss 11 Voting"],
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
      <p class="bb-strip-sub">These are the Week 8 nominated housemates. Support them in the VisitBest Open Poll below — it is open audience sentiment only and does not decide evictions. Official voting is only via JioCinema / JioHotstar, as announced on air.</p>
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
      <h2>🔴 Bigg Boss 20 Week 11 Nominations — Open Poll</h2>
    </div>
    <p class="bb-nom-list-text">
      <strong>9 contestants are nominated this week — everyone except Uditi Singh and Arishfa Khan:</strong><br>
      <span class="bb-nom-names">Amrapali Dubey • Gullu (Kushal Tanwar) • Kanika Mann • Love Gill • Mahhi Vij • Manish Goel • Qazi Touqeer • ScoutOP • Yung DSA</span>
    </p>
    <div class="bb-nom-safe-bar">
      <span class="bb-safe-indicator">🟢 <strong>Safe this week — Uditi Singh:</strong> the only housemate to escape nomination in the Sharbat Nomination Task (Episode 72, 16 November 2026). She received a single nomination, from Love Gill. She is also the house captain — she won the captaincy task in Episode 74 (18 November 2026), succeeding Arishfa Khan (removed in Episode 67; the Episode 68 task was called off). <strong>Also safe — Arishfa Khan:</strong> nominated in Episode 72, she won safety in the Episode 75 team immunity task (19 November 2026) — captain Uditi picked her as her favourite and her team won two rounds in a row.</span>
      <span class="bb-evicted-indicator">❌ <strong>Evicted:</strong> Rohed Khan (Week 2), Isha Rikhi (Week 3), Rhiti Tiwari (Week 4), Aman Gandhi (Week 6), Mary Kom (Week 7), Aasif Khan (Week 8) · <strong>Removed:</strong> Nakul Dhull (wild card, Week 6) · <strong>Week 9:</strong> no eviction (Diwali week) · <strong>Week 10:</strong> no eviction (Mahhi Vij lost a lifeline) · <strong>Week 11:</strong> nominations confirmed on air (Episode 72, 16 November); result due at Weekend Ka Vaar, 21–22 November</span>
    </div>
    <p class="bb-nom-list-text"><strong>Week 11 nominations — confirmed on air (Episode 72, 16 November 2026):</strong> the Sharbat Nomination Task left Uditi Singh as the only housemate to escape nomination. Love Gill drew the most nominations (6). No eviction took place in Episode 72 itself. In Episode 75 (19 November), Arishfa Khan won safety in the team immunity task, so nine nominees remain; the result is due at the Weekend Ka Vaar of 21–22 November 2026.</p>
    <p class="bb-nom-list-text"><strong>Open Poll — for audience sentiment only.</strong> Official voting is only via JioCinema / JioHotstar, as announced on air.</p>
    <p class="bb-nom-list-text">Last updated: 20 November 2026.</p>
  </div>`;
}

// ---------- Weekly Voting Hub (queue entry 223, 11 Nov 2026) ----------

// Season archive — every row is sourced from this file's own verified
// contestant data and VisitBest's episode coverage (see entry 223 notes).
export const eliminationArchive = [
  { week: 1, evicted: "No eviction", note: "Uditi Singh received the fewest votes and lost a life instead of leaving." },
  { week: 2, evicted: "Rohed Khan", note: "First eviction of the season — lost both lives after the public vote." },
  { week: 3, evicted: "Isha Rikhi", note: "Lost her last life after the public vote." },
  { week: 4, evicted: "Rhiti Tiwari", note: "Evicted mid-week after her last life was taken by the captaincy contenders." },
  { week: 5, evicted: "No eviction", note: "Aman Gandhi received the fewest votes and lost a lifeline. Wild cards Manish Goel and Nakul Dhull entered this week." },
  { week: 6, evicted: "Aman Gandhi", note: "Evicted on public votes. Nakul Dhull was removed the same week for breaking house rules — recorded as Removed, not Evicted." },
  { week: 7, evicted: "MC Mary Kom", note: "Announced on Weekend Ka Vaar by guest host Rohit Shetty." },
  { week: 8, evicted: "Aasif Khan", note: "Eviction confirmed on Weekend Ka Vaar (Episode 57)." },
  { week: 9, evicted: "No eviction", note: "Diwali week — the eviction was deferred and no housemate left the house." },
  { week: 10, evicted: "No eviction", note: "The whole house is nominated except Arishfa Khan (not nominated this week). Arishfa was removed as captain in Episode 67 (11 November 2026); the new-captain task was called off in Episode 68 (12 November) after Scout pushed Yung DSA, and no successor has been named. In Episode 68 Bigg Boss also announced punishments for Scout: nominated for the rest of the season and barred from captaincy. In Episode 69 (13 November) Scout shaved his head on air after a clash with Love Gill, and he and Yung DSA cleared the air; still no new captain was named. Reports from the Weekend Ka Vaar shoot on 14 November conflict: Siasat and Film Window first reported Manish Goel evicted after receiving the fewest votes, with a possible second eviction unnamed, while a later Film Window report says Manish stays in the house and Mahhi Vij received the fewest votes, losing one of her two lifelines. Sunday's episode (Episode 71, 15 November) aired and settled it: Salman Khan announced that no contestant would be evicted this week. Mahhi Vij received the fewest votes but survived on her extra lifeline, leaving her with one lifeline; Manish Goel stays in the house. The pre-air reports that Manish Goel had been evicted were contradicted by the aired episode." },
  { week: 11, evicted: "No eviction yet", note: "Nominations confirmed on air in Episode 72 (16 November 2026): the Sharbat Nomination Task left Uditi Singh as the only housemate to escape nomination, and Love Gill drew the most nominations (6). ScoutOP, already nominated for the rest of the season, ran the sharbat counter — he could nominate but could not be nominated again. No eviction took place in Episode 72 itself; the result is due at the Weekend Ka Vaar of 21–22 November 2026." },
];

export const nominationArchive = [
  { week: 7, nominated: "Gullu, MC Mary Kom, Aamrapali Dubey, Arishfa Khan, Love Gill, Uditi Singh, Manish Goel" },
  { week: 8, nominated: "Gullu, Aamrapali Dubey, Kanika Mann, Scout, Aasif Khan, Love Gill" },
  { week: 9, nominated: "Mahhi Vij, Aamrapali Dubey, Arishfa Khan, Scout, Uditi Singh, Manish Goel" },
  { week: 10, nominated: "Whole house except Arishfa Khan (not nominated): Gullu, Qazi Touqeer, Yung DSA, Kanika Mann, Love Gill, Scout, Aamrapali Dubey, Mahhi Vij, Uditi Singh, Manish Goel" },
  { week: 11, nominated: "Amrapali Dubey, Arishfa Khan, Gullu, Kanika Mann, Love Gill, Mahhi Vij, Manish Goel, Qazi Touqeer, ScoutOP, Yung DSA (Uditi Singh the only housemate not nominated; Arishfa Khan won safety in Episode 75, leaving nine nominated)" },
];

// Week 11 nominated set (confirmed on air, Episode 72, 16 November 2026;
// Arishfa Khan won safety in the Episode 75 immunity task, 19 November
// 2026, so nine remain — entry 406).
// Kept as an explicit set — NOT the contestants' `nominated` flags — so
// the Week 10 archive pages keep their own week's pills: the flags still
// describe Week 10, and renderPollCards / renderEmbeddedPoll derive each
// card's pill from the poll's own optionIds.
const WEEK11_NOMINATED_IDS = new Set([
  "amrapali-dubey", "gullu", "kanika-mann", "love-gill",
  "mahhi-vij", "manish-goel", "qazi-touqeer", "scout", "yung-dsa",
]);

const HUB_DISCLAIMER_BOX = `<div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ℹ️ <strong>Open Poll — for audience sentiment only.</strong> This is a VisitBest open audience poll. It does not decide nominations or evictions. Official Bigg Boss 20 voting, where opened by the show, is only via JioCinema / JioHotstar, as announced on air.
        </div>`;

function hubNominees() {
  return contestants.filter((c) => WEEK11_NOMINATED_IDS.has(c.id) && !c.evicted && !c.removed);
}

// "This Week" panel — Week 11 nominees (replaces the old strip)
function renderThisWeekPanel() {
  const nominees = hubNominees();
  // Two housemates are safe in Week 11: Uditi Singh, who escaped the
  // Sharbat task and is captain (Episode 74), and Arishfa Khan, who was
  // nominated in Episode 72 but won safety in the Episode 75 immunity
  // task (entry 406). The panel shows both safe cards explicitly.
  const safeCards = [
    { c: contestantById.get("uditi-singh"), tag: "SAFE — CAPTAIN · NOT NOMINATED", role: "Captain since Episode 74 (18 November 2026) — and the only housemate to escape the Sharbat Nomination Task; safe from the Week 11 eviction" },
    { c: contestantById.get("arishfa-khan"), tag: "SAFE — WON IMMUNITY IN EPISODE 75", role: "Nominated in Episode 72, but safe now: her team won the Episode 75 immunity task (19 November 2026), where captain Uditi Singh picked her as her favourite" },
  ].filter((s) => s.c);
  return `<section class="bb-nominated-strip bb-this-week-panel">
    <div class="bb-strip-header">
      <div class="bb-strip-badge"><span class="pulse-dot"></span> THIS WEEK — WEEK 11 · LAST UPDATED 20 NOVEMBER 2026</div>
      <p class="bb-strip-sub">Week 11: nine of the eleven housemates are nominated. Uditi Singh escaped the Sharbat Nomination Task in Episode 72 (16 November 2026) and is the house captain (Episode 74); Arishfa Khan was nominated in Episode 72 but won safety in the Episode 75 immunity task (19 November). These are this week's nominated housemates — back them in the Week 11 Open Poll below. The VisitBest Open Poll is open audience sentiment only and does not decide evictions. Official voting is only via JioCinema / JioHotstar, as announced on air.</p>
    </div>
    ${safeCards.length ? `<div class="bb-nominated-grid">
      ${safeCards
        .map(
          (s) => `
      <div class="bb-nom-card">
        <div class="bb-nom-img-wrap">
          ${s.c.image ? `<img src="${s.c.image}" alt="${s.c.name} Bigg Boss 20 Safe in Week 11" loading="lazy" decoding="async">` : `<span class="bb-img-placeholder" aria-label="No photo yet for ${s.c.name}">Photo coming soon</span>`}
          <span class="bb-nom-danger-tag" style="background:#1a7f37;">${s.tag}</span>
        </div>
        <div class="bb-nom-info">
          <h4>${s.c.name}</h4>
          <span class="bb-nom-role">${s.role}</span>
        </div>
      </div>`
        )
        .join("")}
    </div>` : ""}
    <div class="bb-nominated-grid">
      ${nominees
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
            <button class="bb-quick-vote-btn" data-vote-trigger="${c.id}" data-poll-id="bigg-boss-20-voting-week-11">⚡ VOTE FOR ${c.alias.toUpperCase()}</button>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  </section>`;
}

// Embedded Open Poll (weekly support poll + eviction-prediction poll).
// No countdown is rendered here on purpose: no official voting-window close
// time has been verified from an on-air / official announcement.
function renderEmbeddedPoll(poll) {
  if (!poll) return "";
  const { list } = getPollStats(poll);
  return `<section class="bb-leaderboard-section bb-hub-poll">
    <div class="bb-section-head">
      <div>
        <p class="eyebrow">${poll.embedEyebrow || "Open Poll"}</p>
        <h2>${poll.h1}</h2>
        <p>${poll.embedIntro || ""}</p>
        ${HUB_DISCLAIMER_BOX}
      </div>
    </div>
    <div class="bb-poll-container" data-poll-slug="${poll.slug}">
      <div class="bb-poll-meta-bar">
        <div class="bb-status-pill"><span class="pulse-dot"></span> OPEN POLL — AUDIENCE SENTIMENT ONLY</div>
        <div class="bb-timer-box">
          <span>OPENED:</span>
          <strong>${poll.openedDate || "11 NOVEMBER 2026"}</strong>
        </div>
      </div>
      <div class="bb-cards-grid">
        ${list
          .map(
            (c, idx) => `
          <div class="bb-card" data-contestant-id="${c.id}">
            <div class="bb-card-badge-row">
              <span class="bb-rank-tag">#${idx + 1}</span>
              ${c.captain ? '<span class="bb-safe-captain-pill">🟢 SAFE – CAPTAIN</span>' : poll.slug === "bigg-boss-20-voting-week-11" && c.id === "arishfa-khan" ? '<span class="bb-safe-pill">🟢 SAFE — IMMUNITY WON IN EP 75</span>' : (poll.optionIds ? poll.optionIds.includes(c.id) : c.nominated) ? '<span class="bb-nom-pill">🔴 NOMINATED</span>' : '<span class="bb-safe-pill">🟢 SAFE</span>'}
            </div>
            ${(poll.textOnlyIds || []).includes(c.id) ? "" : `<div class="bb-card-media">
              ${c.image ? `<img src="${c.image}" alt="${c.name} Bigg Boss 20" loading="lazy" decoding="async">` : `<span class="bb-img-placeholder" aria-label="No photo yet for ${c.name}">Photo coming soon</span>`}
              <div class="bb-live-share" id="pct-${poll.slug}-${c.id}">${c.pctStr}</div>
            </div>`}
            <div class="bb-card-body">
              <h3>${c.name}</h3>
              <span class="bb-card-role">${c.role}</span>
              <div class="bb-progress-bar-wrap">
                <div class="bb-progress-bar" id="bar-${poll.slug}-${c.id}" style="width: ${c.pct}%;"></div>
              </div>
              <div class="bb-card-numbers">
                <span class="bb-votes-display"><strong id="votes-${poll.slug}-${c.id}">${c.votes.toLocaleString("en-IN")}</strong> Open Poll votes${(poll.textOnlyIds || []).includes(c.id) ? ` · <span id="pct-${poll.slug}-${c.id}">${c.pctStr}</span>` : ""}</span>
                <span class="bb-trend-tag">${c.trend}</span>
              </div>
              <button class="bb-vote-btn" data-vote-btn="${c.id}" data-poll-slug="${poll.slug}">
                <span class="btn-icon">${poll.buttonIcon || "🗳️"}</span> ${poll.buttonLabel || "VOTE IN OPEN POLL"}
              </button>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  </section>`;
}

// Dated trend snapshot — the cumulative Open Poll standings recorded on
// 17 November 2026, computed from this file's own Open Poll data only.
function renderTrendSnapshot() {
  const mainPoll = pollBySlug.get("bigg-boss-20-voting");
  const { list } = getPollStats(mainPoll);
  const inHouse = list.filter((c) => !c.evicted && !c.removed);
  return `<section class="bb-leaderboard-section bb-hub-snapshot">
    <div class="bb-section-head">
      <div>
        <p class="eyebrow">Open Poll Trend Snapshot</p>
        <h2>Open Poll Trend Snapshot — 20 November 2026</h2>
        <p>Where the VisitBest Open Poll's cumulative audience sentiment stood when this hub was updated on 20 November 2026. Figures are VisitBest Open Poll votes only — they are not official Bigg Boss votes and do not decide evictions. The snapshot is refreshed each time this hub is updated.</p>
        ${HUB_DISCLAIMER_BOX}
      </div>
    </div>
    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Rank</th><th>Contestant</th><th>Open Poll Votes</th><th>Vote Share</th><th>Status</th></tr>
        </thead>
        <tbody>
          ${inHouse
            .map(
              (c, idx) => `
              <tr class="${idx < 3 ? "bb-row-top" : ""}">
                <td><span class="bb-rank-circle">${idx + 1}</span></td>
                <td class="bb-table-contestant"><strong>${c.name}</strong></td>
                <td><strong>${c.votes.toLocaleString("en-IN")}</strong></td>
                <td><span class="bb-table-pct">${c.pctStr}</span></td>
                <td>${c.id === "uditi-singh" ? "🟢 Captain (since Ep 74)" : c.id === "arishfa-khan" ? "🟢 Safe — immunity won in Ep 75" : c.seasonNominated ? "🔴 Nominated — rest of season (Ep 68)" : WEEK11_NOMINATED_IDS.has(c.id) ? "🔴 Nominated — Week 11" : c.exCaptain ? "🟢 Ex-captain — removed Ep 67" : c.captain ? "🟢 Captain" : "In house"}</td>
              </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>
  </section>`;
}

// Week-by-week nomination + elimination archive
function renderSeasonArchive() {
  return `<section class="bb-leaderboard-section bb-hub-archive">
    <div class="bb-section-head">
      <div>
        <p class="eyebrow">Season Archive</p>
        <h2>Bigg Boss 20 Week-by-Week: Nominations & Eliminations</h2>
        <p>Every week's confirmed outcome so far this season, from VisitBest's own episode coverage. Reported-but-unaired developments are never entered here — rows are added only after events are confirmed on air.</p>
      </div>
    </div>
    <h3>Elimination archive</h3>
    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Week</th><th>Evicted</th><th>What happened</th></tr>
        </thead>
        <tbody>
          ${eliminationArchive
            .map((r) => `<tr><td>Week ${r.week}</td><td><strong>${r.evicted}</strong></td><td>${r.note}</td></tr>`)
            .join("")}
        </tbody>
      </table>
    </div>
    <h3>Nomination archive</h3>
    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Week</th><th>Nominated contestants</th></tr>
        </thead>
        <tbody>
          ${nominationArchive
            .map((r) => `<tr><td>Week ${r.week}</td><td>${r.nominated}</td></tr>`)
            .join("")}
        </tbody>
      </table>
    </div>
    <p>Full nomination lists for Weeks 1–6 were not published consistently while the season's lives format was running, so the nomination table starts at Week 7; every week's confirmed outcome is in the elimination archive above.</p>
    <p><a href="/bigg-boss-20-contestant-journey/"><strong>New: the Contestant Journey Matrix</strong></a> — every housemate's Safe / Nominated / Captain / Evicted status, week by week.</p>
  </section>`;
}

// Prediction scorecard — structure only. A week's row is filled in only
// after that week's eviction has been confirmed on air.
function renderPredictionScorecard() {
  return `<section class="bb-leaderboard-section bb-hub-scorecard">
    <div class="bb-section-head">
      <div>
        <p class="eyebrow">Prediction Scorecard</p>
        <h2>Eviction Prediction Scorecard — Readers vs Results</h2>
        <p>The eviction-prediction Open Poll starts in Week 10. After each Weekend Ka Vaar, this table records the readers' most-predicted evictee against the housemate who actually left — a row is filled in only once the week's result is confirmed on air.</p>
        ${HUB_DISCLAIMER_BOX}
      </div>
    </div>
    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Week</th><th>Readers' most-predicted evictee (VisitBest Open Poll)</th><th>Actually evicted (confirmed on air)</th><th>Result</th></tr>
        </thead>
        <tbody>
          <tr><td>Week 10</td><td>Uditi Singh — most-predicted in the VisitBest Open Poll when it closed at Weekend Ka Vaar</td><td>No eviction — confirmed on air (Episode 71, 15 November 2026)</td><td>No eviction, so no prediction scored</td></tr>
        </tbody>
      </table>
    </div>
  </section>`;
}

// Render Interactive Voting Poll Cards
function renderPollCards(poll) {
  if (poll.textOptions) return renderTextOptionCards(poll);
  const { list } = getPollStats(poll);
  const isDuel = poll.duelIds && poll.duelIds.length === 2;

  return `<div class="bb-poll-container" data-poll-slug="${poll.slug}">
    <div class="bb-poll-meta-bar">
      <div class="bb-status-pill"><span class="pulse-dot"></span> OPEN POLL — AUDIENCE SENTIMENT ONLY</div>
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
                <span class="bb-vote-num" id="votes-${poll.slug}-${c.id}">${c.votes.toLocaleString("en-IN")}</span> Open Poll votes
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
              ${c.removed ? '<span class="bb-nom-pill">⛔ REMOVED</span>' : c.status === "reported-evicted" ? '<span class="bb-nom-pill">🟠 REPORTED EVICTED (UNCONFIRMED)</span>' : c.evicted ? '<span class="bb-nom-pill">❌ EVICTED</span>' : c.captain ? '<span class="bb-safe-captain-pill">🟢 SAFE – CAPTAIN</span>' : (poll.optionIds ? poll.optionIds.includes(c.id) : c.nominated) ? '<span class="bb-nom-pill">🔴 NOMINATED</span>' : '<span class="bb-safe-pill">🟢 SAFE</span>'}
            </div>
            <div class="bb-card-media">
              ${c.image && !(poll.textOnlyIds || []).includes(c.id) ? `<img src="${c.image}" alt="${c.name} Bigg Boss 20" loading="lazy" decoding="async">` : `<span class="bb-img-placeholder" aria-label="No photo yet for ${c.name}">Photo coming soon</span>`}
              <div class="bb-live-share" id="pct-${poll.slug}-${c.id}">${c.pctStr}</div>
            </div>
            <div class="bb-card-body">
              <h3>${c.name}</h3>
              <span class="bb-card-role">${c.role}</span>
              <div class="bb-progress-bar-wrap">
                <div class="bb-progress-bar" id="bar-${poll.slug}-${c.id}" style="width: ${c.pct}%;"></div>
              </div>
              <div class="bb-card-numbers">
                <span class="bb-votes-display"><strong id="votes-${poll.slug}-${c.id}">${c.votes.toLocaleString("en-IN")}</strong> Open Poll votes</span>
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
        <h2>${poll.textOptions ? "Open Poll – How Readers Are Voting" : "Open Poll – Audience Sentiment Standings"}</h2>
        <p>${poll.textOptions ? "How the options in the VisitBest Open Poll on this page are ranked by votes cast here." : "Ranking of housemates by votes cast in the VisitBest Open Poll on this page."} Figures are VisitBest Open Poll votes only — they are not official Bigg Boss votes and do not decide evictions.</p>
        <div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ℹ️ <strong>Open Poll — for audience sentiment only.</strong> This leaderboard represents open audience sentiment tracked on VisitBest. It does not decide nominations or evictions. Official Bigg Boss 20 voting, where opened by the show, is only via JioCinema / JioHotstar, as announced on air.
        </div>
      </div>
    </div>

    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>${poll.textOptions ? "Option" : "Contestant"}</th>
            <th>${poll.textOptions ? "What it means" : "Profession"}</th>
            <th>Open Poll Votes</th>
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
                  ${c.image && !(poll.textOnlyIds || []).includes(c.id) ? `<img src="${c.image}" alt="${c.name}" class="bb-table-avatar" loading="lazy">` : ""}
                  <strong>${c.name}</strong>
                </td>
                <td>${c.role}</td>
                <td><strong id="table-votes-${poll.slug}-${c.id}">${c.votes.toLocaleString("en-IN")}</strong></td>
                <td><span class="bb-table-pct" id="table-pct-${poll.slug}-${c.id}">${c.pctStr}</span></td>
                <td>
                  ${
                    poll.textOptions
                      ? '<span class="bb-badge-neutral">🗳️ Open Poll option</span>'
                      : isDanger
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

// (Removed in Phase 1: the unverified missed-call numbers table was deleted — see renderOpenPollDisclaimer.)

// Render Bigg Boss FAQ Section
function renderFaqSection(poll) {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 20 Voting & Eviction FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Who is currently leading the VisitBest Open Poll today?</summary>
        <div class="bb-faq-body">
          <p>${poll.leaderNote} This is Open Poll audience sentiment only — it is not official voting and does not decide evictions.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How does official Bigg Boss 20 voting work, and how is it different from the VisitBest poll?</summary>
        <div class="bb-faq-body">
          <p>Official voting, where opened by the show, is only through the official platform — JioCinema / JioHotstar — as announced on Colors TV / JioHotstar during the episode, under the rules and limits shown there. The VisitBest Open Poll is separate: it is an opinion poll for audience sentiment only, it is not official voting, and it does not decide nominations or evictions.</p>
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
          <p>No. VisitBest previously listed unverified missed-call numbers on this site; they have been removed because no reliable official source for them could be verified. Do not rely on missed-call numbers published by unverified sites. Official voting, where opened by the show, is only via JioCinema / JioHotstar, as announced on air.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How is the weekly eviction decided in Bigg Boss Season 20?</summary>
        <div class="bb-faq-body">
          <p>Evictions are decided by the show through its official voting process, as announced on Colors TV / JioHotstar. The VisitBest Open Poll plays no part in deciding who is eliminated.</p>
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


// ---------- Engagement pages (queue entry 280, 12 Nov 2026) ----------

// The Episode 68 punishments poll is embedded on the Yung vs Scout page only
// (not a standalone route), following the hub's embedded-poll pattern.
export const yungScoutFairnessPoll = {
  slug: "bigg-boss-20-yung-scout-punishments-fair",
  h1: "Are Scout's Episode 68 Punishments Fair?",
  embedEyebrow: "Episode 68 Punishments · Open Poll",
  embedIntro: "Bigg Boss announced these punishments on air in Episode 68 (12 November 2026). Are they fair, too harsh, or should judgement wait until the season plays out?",
  pollType: "sentiment",
  textOptions: [
    { id: "fair", label: "Fair", sub: "Getting physical in a task deserves a season-long cost." },
    { id: "too-harsh", label: "Too harsh", sub: "The punishment goes beyond what a task clash should cost." },
    { id: "wait-for-episode", label: "Wait and watch", sub: "Nothing should be judged until the season plays out." },
  ],
  voteDistribution: {
    "too-harsh": 388,
    "wait-for-episode": 311,
    fair: 246,
  },
  dangerIds: [],
  buttonLabel: "VOTE IN OPEN POLL",
  buttonIcon: "🗳️",
};

const BB_OPTION_LETTERS = ["A", "B", "C", "D", "E", "F"];

function renderPortraitStrip(ids) {
  return `<div class="bb-nominated-grid">
    ${ids
      .map((id) => {
        const c = contestantById.get(id);
        if (!c) return "";
        return `
      <div class="bb-nom-card">
        <div class="bb-nom-img-wrap">
          ${c.image ? `<img src="${c.image}" alt="${c.name} Bigg Boss 20" loading="lazy" decoding="async">` : ""}
        </div>
        <div class="bb-nom-info">
          <h4>${c.name}</h4>
          <span class="bb-nom-role">${c.role}</span>
        </div>
      </div>`;
      })
      .join("")}
  </div>`;
}

function storySection(eyebrow, heading, bodyHtml) {
  return `<section class="bb-leaderboard-section bb-story-section">
    <div class="bb-section-head">
      <div>
        <p class="eyebrow">${eyebrow}</p>
        <h2>${heading}</h2>
      </div>
    </div>
    ${bodyHtml}
  </section>`;
}

// Poll cards for text-option polls (options are statements, not contestants)
function renderTextOptionCards(poll) {
  const { list } = getPollStats(poll);
  return `<div class="bb-poll-container" data-poll-slug="${poll.slug}">
    <div class="bb-poll-meta-bar">
      <div class="bb-status-pill"><span class="pulse-dot"></span> OPEN POLL — AUDIENCE SENTIMENT ONLY</div>
      <div class="bb-timer-box">
        <span>POLL CLOSES IN:</span>
        <strong id="bb-countdown">Calculating...</strong>
      </div>
    </div>
    ${poll.question ? `<h2 style="margin:1rem 0 0.25rem;">${poll.question}</h2>` : ""}
    <div class="bb-cards-grid">
      ${list
        .map(
          (c, idx) => `
        <div class="bb-card" data-contestant-id="${c.id}">
          <div class="bb-card-badge-row">
            <span class="bb-rank-tag">OPTION ${BB_OPTION_LETTERS[idx] || idx + 1}</span>
            <span class="bb-safe-pill">🗳️ OPEN POLL</span>
          </div>${c.image ? `<div class="bb-card-media"><img src="${c.image}" alt="${c.name}" loading="lazy" decoding="async"></div>` : ""}
          <div class="bb-card-body">
            <h3>${c.name}</h3>
            ${c.role ? `<span class="bb-card-role">${c.role}</span>` : ""}
            <div class="bb-progress-bar-wrap">
              <div class="bb-progress-bar" id="bar-${poll.slug}-${c.id}" style="width: ${c.pct}%;"></div>
            </div>
            <div class="bb-card-numbers">
              <span class="bb-votes-display"><strong id="votes-${poll.slug}-${c.id}">${c.votes.toLocaleString("en-IN")}</strong> Open Poll votes · <span id="pct-${poll.slug}-${c.id}">${c.pctStr}</span></span>
            </div>
            <button class="bb-vote-btn" data-vote-btn="${c.id}" data-poll-slug="${poll.slug}">
              <span class="btn-icon">${poll.buttonIcon || "🗳️"}</span> ${poll.buttonLabel || "VOTE IN OPEN POLL"}
            </button>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  </div>`;
}

// Embedded text-option poll (hub-style embed; used for the fairness poll)
function renderEmbeddedTextPoll(poll) {
  if (!poll) return "";
  const { list } = getPollStats(poll);
  return `<section class="bb-leaderboard-section bb-hub-poll">
    <div class="bb-section-head">
      <div>
        <p class="eyebrow">${poll.embedEyebrow || "Open Poll"}</p>
        <h2>${poll.h1}</h2>
        <p>${poll.embedIntro || ""}</p>
        ${HUB_DISCLAIMER_BOX}
      </div>
    </div>
    <div class="bb-poll-container" data-poll-slug="${poll.slug}">
      <div class="bb-poll-meta-bar">
        <div class="bb-status-pill"><span class="pulse-dot"></span> OPEN POLL — AUDIENCE SENTIMENT ONLY</div>
        <div class="bb-timer-box">
          <span>OPENED:</span>
          <strong>12 NOVEMBER 2026</strong>
        </div>
      </div>
      <div class="bb-cards-grid">
        ${list
          .map(
            (c, idx) => `
          <div class="bb-card" data-contestant-id="${c.id}">
            <div class="bb-card-badge-row">
              <span class="bb-rank-tag">OPTION ${BB_OPTION_LETTERS[idx] || idx + 1}</span>
              <span class="bb-safe-pill">🗳️ OPEN POLL</span>
            </div>
            <div class="bb-card-body">
              <h3>${c.name}</h3>
              ${c.role ? `<span class="bb-card-role">${c.role}</span>` : ""}
              <div class="bb-progress-bar-wrap">
                <div class="bb-progress-bar" id="bar-${poll.slug}-${c.id}" style="width: ${c.pct}%;"></div>
              </div>
              <div class="bb-card-numbers">
                <span class="bb-votes-display"><strong id="votes-${poll.slug}-${c.id}">${c.votes.toLocaleString("en-IN")}</strong> Open Poll votes · <span id="pct-${poll.slug}-${c.id}">${c.pctStr}</span></span>
              </div>
              <button class="bb-vote-btn" data-vote-btn="${c.id}" data-poll-slug="${poll.slug}">
                <span class="btn-icon">${poll.buttonIcon || "🗳️"}</span> ${poll.buttonLabel || "VOTE IN OPEN POLL"}
              </button>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  </section>`;
}

function renderScoutLoveSections() {
  return (
    storySection(
      "The Bond",
      "Scout and Love: a brother-sister bond inside the house",
      `${renderPortraitStrip(["scout", "love-gill"])}
    <p>Scout is Tanmay 'Scout' Singh — ScoutOP, one of India's best-known gaming creators. Love is Lovepreet Kaur 'Love' Gill. Inside the house the two have been close from early on, and both describe the bond in exactly the same way: a brother-sister bond — a "behen jaisi dost", a friend who is like a sister.</p>
    <p>The house has played along with the joke: at the Episode 62 award night, Love received the jokey title "Maha Behen" — the great sister.</p>
    <p>The bond has been tested, and it held. In Episode 60, Love sacrificed her own lifeline so that Scout could hear a message from Kaashvi. Love has called Scout the only person in the house she considers her own.</p>
    ${renderStoryPhoto("/assets/bb20-new/photos/love-gill-buzzer.webp", "Love Gill in the Bigg Boss 20 house, at the buzzer", "Love Gill in the house, at the buzzer.")}
    ${renderStoryPhoto("/assets/bb20-new/photos/love-gill-pool.webp", "Love Gill (Lovepreet Kaur Gill)", "Love Gill (Lovepreet Kaur 'Love' Gill).")}`
    ) +
    storySection(
      "The Kaashvi Question",
      "Kaashvi's Weekend Ka Vaar questions",
      `<p>Outside the house, Scout's girlfriend is Kaashvi Hiranandani. Kaashvi appeared during the Rohit Shetty-hosted Weekend Ka Vaar and questioned Scout's closeness with Love — including the incident in which Scout massaged Love's feet, hands and neck.</p>
    <p>Salman Khan later questioned Scout as well, in a Weekend Ka Vaar promo: why had he not defended Love when Kaashvi questioned her?</p>
    <p>Kaashvi also said she would keep supporting Scout "like a friend" — wording that fuelled speculation of a breakup. To be clear: <strong>a breakup is NOT confirmed.</strong> Kaashvi apologised on social media on 26 October. Kaashvi is not a housemate, so she appears in this story in words only.</p>
    ${renderStoryPhoto("/assets/bb20-new/photos/scout-gaming-chair.webp", "Scout (ScoutOP) at his gaming setup", "Scout at his gaming setup, outside the house.")}`
    ) +
    storySection(
      "The Fallout",
      "The 'homebreaker' remark — and Love's stand",
      `<p>In Episode 66 (aired 10 November), Uditi Singh revealed that Mahhi Vij had called Love a "homebreaker".</p>
    <p>In Episode 67 (aired 11 November), Love confronted Scout for not taking a stand for her over that remark — while Yung DSA did take a stand for her. Scout apologised repeatedly. Love's answer was that she was done keeping expectations from the friendship.</p>
    ${renderStoryPhoto("/assets/bb20-new/photos/scout-alone-house.webp", "Scout alone in the Bigg Boss 20 house", "Scout, alone in the house after the fall-out.")}
    ${renderStoryPhoto("/assets/bb20-new/photos/love-gill-brown.webp", "Love Gill", "Love Gill.")}`
    ) +
    storySection(
      "Reported — Single Source",
      "Reported: what Yung is said to have told Aamrapali",
      `<div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ⚠️ <strong>Single-source report.</strong> The following comes from one report by India Forums. It has not been confirmed on air or by a second source, and VisitBest presents it as a report — not as established fact.
        </div>
    <p>India Forums reported that, in Episode 67, Yung DSA told Aamrapali Dubey that Scout had confessed his feelings for Love had changed — that he no longer saw her only as a sister.</p>
    <p>If that report is accurate, it changes how the whole bond reads. Until it is confirmed, it stays labelled as reported — and it is one of the options in the Open Poll below, marked as the report it is.</p>
    ${renderStoryPhoto("/assets/bb20-new/photos/love-gill-floral.webp", "Love Gill", "Love Gill.")}`
    )
  );
}

function renderYungScoutSections() {
  return (
    storySection(
      "Reported From the Live Feed",
      "First, a straight note on what is confirmed — and what is not",
      `<div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ✅ <strong>Confirmed on air.</strong> The clash described on this page was shown in Episode 68 (aired 12 November 2026) — Times Now's episode recap and TellyChakkar both record Bigg Boss announcing punishments for Scout after the push. Read everything below as shown on air, except where a point is flagged as reported.
        </div>
    <p>Scout and Yung DSA were friends in this house — which is why the end to that friendship, in the middle of a task, is the story. Here is the sequence as shown in Episode 68.</p>`
    ) +
    storySection(
      "What Happened in Episode 68",
      "The sequence as shown in the episode",
      `${renderPortraitStrip(["yung-dsa", "scout"])}
    <ul>
      <li>Round 2 of the captaincy task: Uditi Singh sat on a robot chair while Team A tried to make her cry.</li>
      <li>Scout slightly burnt the edge of Uditi's family photograph.</li>
      <li>Gullu and Yung kept interrupting and commenting, and abuses were exchanged.</li>
      <li>Scout pushed Yung. Yung's response: "Ab dosti khatam" — the friendship is over.</li>
      <li>Bigg Boss stopped the task and separated them — Scout to the bedroom area, Yung to the garden.</li>
      <li>Scout later apologised — and in Episode 69 (13 November) the two cleared the air on air: Scout opened up to Yung, who consoled him and helped trim the back of his head after Scout shaved it.</li>
    </ul>`
    )
  );
}

function renderYungScoutPunishments() {
  return (
    storySection(
      "Punishments Announced in Episode 68",
      "What Bigg Boss announced for Scout",
      `<p>After the push, Bigg Boss announced punishments for Scout in Episode 68 (aired 12 November 2026). Times Now's episode recap and TellyChakkar both record the announcement; the first two punishments below are confirmed by both, and the other two are carried by multiple outlets:</p>
    <ul>
      <li><strong>Nominated for the entire season</strong></li>
      <li><strong>Barred from captaincy</strong></li>
      <li><strong>No special powers</strong></li>
      <li><strong>Can be evicted at any time</strong></li>
    </ul>
    <p>One difference between the accounts: Times Now's recap describes the announcement as also denying Scout a lifeline revival, and notes the reaction task was cancelled in the same episode. The task was called off either way.</p>
    <p>A season-long nomination plus a captaincy bar are among the harshest punishments of this season. Is that proportionate for a task clash that turned physical on air, or does it go too far? Vote below.</p>`
    ) + renderEmbeddedTextPoll(yungScoutFairnessPoll)
  );
}

function renderNextCaptainExplainer() {
  return storySection(
    "Why This Poll, Why Now",
    "Arishfa's captaincy has ended — the new-captain task was called off in Episode 68",
    `<p>Episode 67 (aired 11 November) announced a new captaincy task — but Episode 68 (aired 12 November) called it off after Scout pushed Yung DSA during the task, so the house still has no captain.</p>
    <p>Arishfa was removed as captain in Episode 67 (aired 11 November). No new captain has been named, and this page does not present one as chosen.</p>
    <div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ℹ️ <strong>One name to weigh carefully:</strong> Scout is <strong>barred from captaincy</strong>, as announced by Bigg Boss in Episode 68 after the captaincy-task clash with Yung DSA (see <a href="/bigg-boss-20-yung-vs-scout/">Yung vs Scout</a>). He cannot become captain again this season — keep it in mind as you vote.
        </div>
    <p>The ten names in the poll below are the ten housemates other than Arishfa. Pick the one you would hand the captaincy to.</p>`
  );
}


// ---------- Contestant journey matrix (queue entry 281, 12 Nov 2026) ----------

// Week-by-week status for every contestant, derived ONLY from this file's
// own records: contestants (evictedWeek / removed), eliminationArchive,
// nominationArchive, and the captain facts stated in contestant records
// (Yung DSA — Week 1; Aasif Khan — Week 5; Scout — Week 7; Arishfa Khan —
// Week 10). "na" means this file's records do not establish that week for
// that contestant, and the matrix honestly shows "—" instead of a guess.
// Documented derivations: Uditi Singh is marked Nominated in Week 1 and
// Aman Gandhi in Week 5 (eliminationArchive: each "received the fewest
// votes" that week); Uditi Singh and MC Mary Kom are marked Nominated in
// Week 6 (the Week 6 bottom three recorded in Aman Gandhi's record).
// Mahhi Vij (captain after Scout, until 28 October) and Kanika Mann
// (captain from 28 October) also served as captains, but this file does
// not pin their captaincies to one specific week, so their rows follow
// the nomination lists and the page text says so.
export const journeyMatrix = {
  weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  rows: {
    "gullu": ["na", "na", "na", "na", "na", "na", "nominated", "nominated", "safe", "nominated"],
    "qazi-touqeer": ["na", "na", "na", "na", "na", "na", "safe", "safe", "safe", "nominated"],
    "scout": ["na", "na", "na", "na", "na", "na", "captain", "nominated", "nominated", "nominated"],
    "mary-kom": ["na", "na", "na", "na", "na", "nominated", "evicted", "na", "na", "na"],
    "yung-dsa": ["captain", "na", "na", "na", "na", "na", "safe", "safe", "safe", "nominated"],
    "kanika-mann": ["na", "na", "na", "na", "na", "na", "safe", "nominated", "safe", "nominated"],
    "amrapali-dubey": ["na", "na", "na", "na", "na", "na", "nominated", "nominated", "nominated", "nominated"],
    "aasif-khan": ["na", "na", "na", "na", "captain", "na", "safe", "evicted", "na", "na"],
    "mahhi-vij": ["na", "na", "na", "na", "na", "na", "safe", "safe", "nominated", "nominated"],
    "arishfa-khan": ["na", "na", "na", "na", "na", "na", "nominated", "safe", "nominated", "captain"],
    "aman-gandhi": ["na", "na", "na", "na", "nominated", "evicted", "na", "na", "na", "na"],
    "rohed-khan": ["na", "evicted", "na", "na", "na", "na", "na", "na", "na", "na"],
    "isha-rikhi": ["na", "na", "evicted", "na", "na", "na", "na", "na", "na", "na"],
    "love-gill": ["na", "na", "na", "na", "na", "na", "nominated", "nominated", "safe", "nominated"],
    "rhiti-tiwari": ["na", "na", "na", "evicted", "na", "na", "na", "na", "na", "na"],
    "uditi-singh": ["nominated", "na", "na", "na", "na", "nominated", "nominated", "safe", "nominated", "nominated"],
    "manish-goel": ["na", "na", "na", "na", "na", "na", "nominated", "safe", "nominated", "nominated"],
    "nakul-dhull": ["na", "na", "na", "na", "na", "removed", "na", "na", "na", "na"],
  },
};

const JOURNEY_CELL_LABELS = {
  safe: "🟢 Safe",
  nominated: "🔴 Nominated",
  captain: "👑 Captain",
  evicted: "❌ Evicted",
  removed: "⛔ Removed",
  na: "—",
};

function journeyCurrentStatus(c) {
  if (c.removed) return "Removed — Week 6";
  if (c.evicted) return `Evicted — Week ${c.evictedWeek}`;
  if (c.captain) return "In house · Captain (Week 10)";
  if (c.exCaptain) return "In house · Ex-captain (removed Ep 67, 11 Nov)";
  if (c.seasonNominated) return "In house · Nominated for the rest of the season (Ep 68)";
  if (c.nominated) return "In house · Nominated (Week 10)";
  return "In house";
}

export function renderBiggBossJourneyPage(poll) {
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
    </header>

    ${bbCoverFigure(poll.image, poll.h1)}

    <section class="bb-leaderboard-section bb-journey">
      <div class="bb-section-head">
        <div>
          <p class="eyebrow">Journey Matrix · Weeks 1–10</p>
          <h2>Safe, Nominated, Captain, Evicted — Every Housemate, Every Week</h2>
          <p>How to read this matrix: <strong>🟢 Safe</strong> = in the house and not nominated that week · <strong>🔴 Nominated</strong> = on that week's nomination list · <strong>👑 Captain</strong> = captained the house that week · <strong>❌ Evicted</strong> / <strong>⛔ Removed</strong> = left the house that week · <strong>—</strong> = VisitBest's season records do not establish that week for that housemate, so nothing is claimed.</p>
          <p>Two honest notes. First, the full nomination lists for Weeks 1–6 were not published consistently while the season's lives format was running (the same reason the hub's nomination archive starts at Week 7), so early-season cells are filled only where a record establishes them — an eviction, a captaincy, or a documented bottom-three. Second, Captain cells are marked only where our records tie a captaincy to one specific week: Yung DSA (Week 1), Aasif Khan (Week 5), Scout (Week 7) and Arishfa Khan (Week 10). Mahhi Vij (captain after Scout, until 28 October) and Kanika Mann (captain from 28 October) also served as captains; because their captaincies are not pinned to a single week in our records, their rows follow the nomination lists instead.</p>
          <p>Manish Goel and Nakul Dhull entered as wild cards in Week 5, so their earlier weeks are blank by definition. The Week 10 eviction, due at Weekend Ka Vaar (14–15 November), will be added only after it is confirmed on air. This page is updated weekly.</p>
        </div>
      </div>
      <div class="table-scroll">
        <table class="bb-leaderboard-table">
          <thead>
            <tr><th>Contestant</th>${journeyMatrix.weeks.map((w) => `<th>Week ${w}</th>`).join("")}<th>Status Now</th></tr>
          </thead>
          <tbody>
            ${contestants
              .map((c) => {
                const cells = journeyMatrix.rows[c.id] || [];
                return `<tr>
                <td class="bb-table-contestant">${c.image ? `<img src="${c.image}" alt="${c.name}" class="bb-table-avatar" loading="lazy">` : ""}<strong>${c.name}</strong></td>
                ${journeyMatrix.weeks.map((w, i) => `<td>${JOURNEY_CELL_LABELS[cells[i]] || "—"}</td>`).join("")}
                <td>${journeyCurrentStatus(c)}</td>
              </tr>`;
              })
              .join("")}
          </tbody>
        </table>
      </div>
      <p>Sources: VisitBest's own <a href="/bigg-boss-20-voting/">Weekly Voting Hub</a> (nomination and elimination archives) and the <a href="/bigg-boss-20-contestants/">contestant records</a> on this site. Reported-but-unaired developments are never entered in this matrix — cells change only after events are confirmed on air. For this week's Open Polls, see the <a href="/bigg-boss-20-voting/">voting hub</a>.</p>
    </section>
  </div>
  `;
}


// ---------- Scout vs Kaashvi page + Scout–Love photos (queue entry 284, 12 Nov 2026) ----------

// In-page story photo: natural size, never upscaled (image container
// standard), caption in its own line below — never text over the photo.
function renderStoryPhoto(src, alt, caption) {
  return `<figure class="bb-story-photo" style="margin:1.1rem auto;text-align:center;">
    <img src="${src}" alt="${alt}" loading="lazy" decoding="async" style="max-width:100%;height:auto;display:block;margin:0 auto;border-radius:12px;">
    ${caption ? `<figcaption style="font-size:0.85rem;color:#5b6b7a;margin-top:0.45rem;">${caption}</figcaption>` : ""}
  </figure>`;
}

function renderScoutKaashviSections() {
  return (
    storySection(
      "The Couple",
      "Scout and Kaashvi: a couple outside the house",
      `${renderStoryPhoto("/assets/bb20-new/photos/scout-kaashvi-couple.webp", "Scout and Kaashvi Hiranandani together outside the Bigg Boss house", "Scout and Kaashvi Hiranandani — gaming's love birds — outside the house.")}
    <p>Confirmed, and not in dispute: Scout (Tanmay 'Scout' Singh — ScoutOP) and Kaashvi Hiranandani are a couple outside the Bigg Boss house, and both are gaming creators — that is how most fans first knew them, as gaming's love birds.</p>
    <p>This season Scout is inside the house and Kaashvi is outside it. Everything on this page flows from that distance — and from what happened when the two worlds met on Weekend Ka Vaar.</p>
    ${renderStoryPhoto("/assets/bb20-new/photos/scout-gaming-chair.webp", "Scout (ScoutOP) at his gaming setup", "Scout — ScoutOP — at his gaming setup, where his public life with Kaashvi plays out.")}`
    ) +
    storySection(
      "The Weekend Ka Vaar Appearance",
      "Kaashvi's appearance — and the questions she asked",
      `<p>Kaashvi appeared during the Rohit Shetty-hosted Weekend Ka Vaar and questioned Scout about his growing closeness with Love Gill inside the house — including the incident in which Scout massaged Love's feet, hands and neck.</p>
    ${renderStoryPhoto("/assets/bb20-new/photos/kaashvi-gaming.webp", "Kaashvi Hiranandani at her gaming setup", "Kaashvi Hiranandani at her gaming setup.")}
    <p>Kaashvi also said she would keep supporting Scout "like a friend". It is that one phrase — "like a friend" — that lit the fuse on everything that followed.</p>`
    ) +
    storySection(
      "After the Episode",
      "Salman's question, and Kaashvi's apology",
      `<p>Salman Khan later questioned Scout as well, in a Weekend Ka Vaar promo: why had he not defended Love when Kaashvi questioned her? So the same appearance put Scout under pressure from both directions — from his girlfriend outside, and from the host on the show.</p>
    <p>For her part, Kaashvi apologised on social media on 26 October.</p>`
    ) +
    storySection(
      "Confirmed vs Rumour",
      "What is confirmed — and what is only rumour",
      `<div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          <strong>✅ Confirmed (reported by multiple outlets):</strong>
          <ul style="margin:0.4rem 0 0.6rem;">
            <li>Scout and Kaashvi are a couple outside the house; both are gaming creators.</li>
            <li>Kaashvi appeared on the Rohit Shetty-hosted Weekend Ka Vaar and questioned Scout's closeness with Love Gill, including the massage incident.</li>
            <li>Kaashvi said she would keep supporting Scout "like a friend".</li>
            <li>Salman Khan questioned Scout about it in a Weekend Ka Vaar promo.</li>
            <li>Kaashvi apologised on social media on 26 October.</li>
          </ul>
          <strong>⚠️ Rumour — NOT confirmed:</strong>
          <ul style="margin:0.4rem 0 0;">
            <li>That the couple has broken up. The "like a friend" remark fuelled breakup speculation on social media and in entertainment coverage — but <strong>neither Scout nor Kaashvi has confirmed any breakup</strong>, and this page does not present one as having happened.</li>
          </ul>
        </div>
    ${renderStoryPhoto("/assets/bb20-new/photos/scout-breakup-collage.webp", "A social-media graphic about the Scout breakup talk", "Breakup graphics like this one have filled social media since the remark — speculation, not confirmation.")}
    <p>So where does that leave the couple? Genuinely unknown until one of them speaks, or until Scout leaves the house and the two can actually talk. That is exactly what the Open Poll below asks readers to judge.</p>`
    ) +
    storySection(
      "Keep Reading",
      "More on Scout, Love and the house",
      `<ul>
      <li><a href="/bigg-boss-20-scout-love-story/"><strong>Scout and Love Gill: the bond, the Kaashvi question and the fall-out</strong></a> — the other half of this story, with its own Open Poll.</li>
      <li><a href="/bigg-boss-20-yung-vs-scout/"><strong>Yung DSA vs Scout: the captaincy-task clash (Episode 68)</strong></a></li>
      <li><a href="/bigg-boss-20-next-captain-poll/"><strong>Who should be the next captain? Open Poll</strong></a></li>
      <li><a href="/bigg-boss-20-voting/"><strong>Bigg Boss 20 Weekly Voting Hub</strong></a> — this week's Open Poll, the archives and every poll on one page.</li>
    </ul>`
    )
  );
}


// ---------- Captain page (queue entry 285, 12 Nov 2026) ----------

// Captain history, derived ONLY from this file's records plus the
// verified facts in the build brief: Yung DSA Week 1, Aasif Khan Week
// 5, Scout Week 7, Arishfa Khan Week 10 (journeyMatrix + contestant
// records); Kanika Mann — captain during the Week 9 nomination cycle
// (used a captain's power to nominate Mahhi Vij directly in Episode
// 58); Mahhi Vij — Qazi won the captaincy task round on 23 October
// and declared Mahhi the new captain, succeeding Scout (her longBio).
// Mahhi's week number is NOT pinned in the site's records, so the
// table gives her date and says so instead of claiming a week.
export const captainHistory = [
  { id: "yung-dsa", when: "Week 1", note: "First captain of the season (site records)." },
  { id: "aasif-khan", when: "Week 5", note: "Captained in Week 5 (site records)." },
  { id: "scout", when: "Week 7", note: "Captained in Week 7 (site records)." },
  { id: "mahhi-vij", when: "23 Oct 2026", note: "Qazi won the captaincy task round on 23 October and declared Mahhi the new captain, succeeding Scout (her record). The week number is not pinned in the site's records." },
  { id: "kanika-mann", when: "Week 9", note: "Captain during the Week 9 nomination cycle — used a captain's power to nominate Mahhi Vij directly in Episode 58." },
  { id: "arishfa-khan", when: "Week 10 — removed in Episode 67 (11 Nov 2026)", note: "Confirmed by a unanimous housemate vote in Episode 61 (the earlier 2X Room vote was reported before that confirmation). Immune in Week 10 while all 10 other housemates were nominated. Removed as captain in Episode 67 (11 November 2026); the new-captain task was called off in Episode 68 (12 November), and the house had no captain until Uditi Singh won the captaincy task in Episode 74 (18 November 2026)." },
  { id: "uditi-singh", when: "Week 11 — won the captaincy task in Episode 74 (18 Nov 2026)", note: "Uditi Singh won the captaincy task in Episode 74 (18 November 2026) and is the current captain. She was already safe in Week 11 — the only housemate to escape nomination in the Sharbat Nomination Task (Episode 72). In Episode 75 (19 November) she ran the team immunity task as sanchalak and picked Arishfa Khan as her favourite; Arishfa's team won two rounds in a row, making Arishfa safe from the Week 11 eviction too." },
];

export function renderBiggBossCaptainPage(poll) {
  const uditi = contestantById.get("uditi-singh");
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
    </header>

    ${bbCoverFigure(poll.image, poll.h1)}

    ${storySection(
      "Quick Answer",
      "Uditi Singh — captain since Episode 74",
      `${renderStoryPhoto(uditi.image, "Uditi Singh, captain of Bigg Boss 20 since Episode 74", "Uditi Singh — the current captain of the house (since Episode 74).")}
    <p><strong>Uditi Singh is the current captain of Bigg Boss 20.</strong> She won the captaincy task in Episode 74 (aired 18 November 2026). The previous captain, Arishfa Khan, took the captaincy in Week 10 after a unanimous housemate vote in Episode 61 and was immune that week while all 10 other housemates were nominated.</p>
    <p>Arishfa's captaincy ended in Episode 67 (aired 11 November 2026), when Bigg Boss removed her as captain after housemates broke several rules and announced a new captaincy task in the same episode; that task was called off in Episode 68 (12 November), and the house had no captain until Uditi won in Episode 74. As captain, Uditi is safe from the Week 11 eviction — she was already the only housemate to escape nomination in Episode 72. This page is a living page: it is refreshed when a new captain is confirmed on air.</p>`
    )}

    <section class="bb-leaderboard-section">
      <div class="bb-section-head">
        <div>
          <p class="eyebrow">Captain History · This Season</p>
          <h2>Every Captain of Bigg Boss 20 So Far</h2>
          <p>Every captain the site's records establish, in order. One honest note: the table does not claim to be a complete week-by-week list — the captain for some early weeks is not recorded in the site's data, and Mahhi Vij's week number is not pinned in the records, so her row gives the date instead. Nothing here is guessed.</p>
        </div>
      </div>
      <div class="table-scroll">
        <table class="bb-leaderboard-table">
          <thead>
            <tr><th>Captain</th><th>When</th><th>How They Became Captain / Notes</th></tr>
          </thead>
          <tbody>
            ${captainHistory
              .map((row) => {
                const c = contestantById.get(row.id);
                return `<tr>
                <td class="bb-table-contestant">${c && c.image ? `<img src="${c.image}" alt="${c.name}" class="bb-table-avatar" loading="lazy">` : ""}<strong>${c ? c.name : row.id}</strong></td>
                <td><strong>${row.when}</strong></td>
                <td>${row.note}</td>
              </tr>`;
              })
              .join("")}
          </tbody>
        </table>
      </div>
      <p>Sources: VisitBest's own <a href="/bigg-boss-20-contestant-journey/">Contestant Journey Matrix</a> and the <a href="/bigg-boss-20-contestants/">contestant records</a> on this site, plus the verified facts in this page's build notes. Reported-but-unaired developments are never entered in this table.</p>
    </section>

    ${storySection(
      "What the Captain Gets",
      "What the captain actually gets",
      `<p>The captain's biggest advantage is simple: <strong>immunity from that week's nominations</strong>. Arishfa Khan was immune in Week 10 while every other housemate was nominated — that is the protection the captaincy buys.</p>
    <p>The captain also gets a direct say in nominations. Kanika Mann used a captain's power to nominate Mahhi Vij directly in Episode 58, and Arishfa Khan used her captain's power to nominate Scout directly in Episode 66. Beyond that, the exact powers and duties vary by task and are announced by Bigg Boss on the show each week — this page lists only what the season itself has shown.</p>`
    )}

    ${storySection(
      "The New Captain",
      "Uditi Singh — how the new captain was decided",
      `<p>Episode 67 (aired 11 November) removed Arishfa as captain and announced a new captaincy task, as covered in Times Now's episode highlights. Episode 68 (aired 12 November) called that task off after Scout pushed Yung DSA during it. The house stayed without a captain until Episode 74 (aired 18 November), when Uditi Singh won the captaincy task and took over as captain. In Episode 75 she ran the team immunity task as sanchalak, picked Arishfa Khan as her favourite and Love Gill as her least favourite; Arishfa's team won two rounds in a row, so Arishfa is safe from the Week 11 eviction alongside the captain.</p>
    <div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ℹ️ <strong>One name to weigh carefully:</strong> Scout is <strong>barred from captaincy</strong>, as announced by Bigg Boss in Episode 68 after the captaincy-task clash with Yung DSA (see <a href="/bigg-boss-20-yung-vs-scout/">Yung vs Scout</a>). He cannot become captain again this season.
        </div>
    <p>The Open Poll that asked <a href="/bigg-boss-20-next-captain-poll/"><strong>Who Should Be the Next Captain?</strong></a> ran while the house was without a captain — Uditi's Episode 74 win has since settled the question. See how the house's journey has run so far in the <a href="/bigg-boss-20-contestant-journey/"><strong>Contestant Journey Matrix</strong></a>.</p>`
    )}

    ${storySection(
      "Keep Reading",
      "More Bigg Boss 20 pages",
      `<ul>
      <li><a href="/bigg-boss-20-next-captain-poll/"><strong>Who should be the next captain? Open Poll</strong></a> — vote for the ten other housemates.</li>
      <li><a href="/bigg-boss-20-contestant-journey/"><strong>Contestant Journey Matrix</strong></a> — every housemate's Safe / Nominated / Captain / Evicted status, week by week.</li>
      <li><a href="/bigg-boss-20-voting/"><strong>Bigg Boss 20 Weekly Voting Hub</strong></a> — this week's Open Poll, the archives and every poll on one page.</li>
    </ul>`
    )}
  </div>
  `;
}

// Main Poll Page Renderer
function renderWkvWeek10Sections() {
  return (
    storySection(
      "Quick Answer",
      "The weekend in one minute",
      `<p><strong>Nobody was evicted from Bigg Boss 20 in Week 10.</strong> Salman Khan announced the result in Episode 71 (Sunday, 15 November 2026): Mahhi Vij received the fewest votes, but she held an extra lifeline — so instead of leaving, she gave up that lifeline and stayed. Manish Goel, who pre-air reports claimed had been evicted, stays in the house; those reports were contradicted on air.</p>
    <ul>
      <li><strong>No eviction</strong> — Week 10 ends with all 11 housemates still in the game.</li>
      <li><strong>Mahhi Vij</strong> finished last in the public vote and lost one of her two lifelines. She now has one left — she was the last housemate still holding two.</li>
      <li><strong>Saturday (Episode 70) ended with no eviction announced</strong> — the result was held over to Sunday.</li>
      <li><strong>Scout</strong> was grilled over the Yung DSA push and the head-shave, and stays nominated for the rest of the season under his Episode 68 punishments.</li>
      <li><strong>Still no captain</strong> — the house has had no captain since Arishfa Khan was removed in Episode 67, and neither episode named a successor.</li>
    </ul>
    ${renderPortraitStrip(["mahhi-vij", "manish-goel"])}`
    ) +
    storySection(
      "Saturday — Episode 70",
      "Saturday: Salman comes down hard on Scout, Kanika and Love",
      `<p>Episode 70 (Saturday, 14 November) was the grilling day. Salman Khan worked through the week's flashpoints one by one — and the eviction result was not announced, leaving the ten nominees waiting overnight.</p>
    <p><strong>Scout and the push.</strong> Salman questioned Scout over pushing Yung DSA during the Episode 68 captaincy task. "Scout, do you behave like this outside too? We avoid physical violence on Bigg Boss; you didn't feel ashamed even after apologising to him," the Indian Express quotes him saying, before telling Scout to stay silent and let him speak. Salman praised Yung DSA's conduct in the same incident — Filmibeat describes him calling Yung's behaviour commendable, and ABP Live and the Bombay Times carry the same praise.</p>
    <p><strong>The head-shave scolding.</strong> Salman also bashed Scout for shaving his head in Episode 69. "Gamer ho, acting mein kyu ghus rahe ho?" — you are a gamer, why are you getting into acting — he asked, refusing to accept Scout's account that the bald head was a trimming mistake (Outlook India; WION and the Telegraph carry the same exchange). Scout maintained it was a mistake; the host told him his fans could read it very differently.</p>
    ${renderPortraitStrip(["scout", "yung-dsa"])}
    <p><strong>Kanika, round one.</strong> WION reports Salman calling Kanika Mann a hypocrite: she had objected strongly when Qazi Touqeer made a "lollipop" remark, yet laughed when Scout made an objectionable remark about Love Gill while Love was singing "Character Dheela Hai". "Kanika, do not raise your voice in front of me. Not here at all," the Indian Express quotes him saying. Qazi accused Kanika of double standards in the same discussion (Times Now and India TV accounts of the episode).</p>
    <p><strong>Love questioned.</strong> Salman confronted Love Gill over her behaviour towards Arishfa Khan — ABP Live reports him accusing her of deliberately provoking Arishfa and using the silent treatment to make others react; the Times of India carries the same questioning. He also pulled up Love and Scout over their reaction to comedian Gaurav Gupta's roast jokes during the Diwali special (Indian Express; Times of India).</p>
    ${renderStoryPhoto("/assets/bb20-new/photos/bb28-salman-page.webp", "Salman Khan hosting Weekend Ka Vaar", "Salman Khan hosts the Weekend Ka Vaar.")}`
    ) +
    storySection(
      "Sunday — Episode 71",
      "Sunday: the no-eviction result, and a second day of verdicts",
      `<p>Episode 71 (Sunday, 15 November) opened where Saturday left off — more schooling — and closed with the result the house had waited two days for.</p>
    <p><strong>The result.</strong> Salman announced that Mahhi Vij received the least votes, but was safe from elimination because of her extra lifeline, and asked her to take the game seriously (Times Now's Episode 71 highlights). Filmibeat, Zoom TV and India TV confirm the same outcome: no eviction in Week 10, Mahhi down to one lifeline, and Manish Goel still in the house. Salman also reprimanded Mahhi for her "homebreaker" comment about Love Gill earlier in the season (Times Now).</p>
    <p><strong>Kanika, round two.</strong> Kanika tried to defend herself; Salman asked if she wanted to argue with him and justify her performance — "Bohot smart samajh rahi ho apne aap ko?" — and called her oversmart (Times Now).</p>
    <p><strong>Qazi praised, then corrected.</strong> Salman praised Qazi Touqeer for taking a stand when needed, but corrected him too: his episode with Manish Goel could have ended earlier and on a better note, and using terms like eve-teasing and inappropriate touch was wrong (Times Now). Later, Qazi and Love had a massive fight — Qazi felt Love is playing with Scout's emotions and called her a hypocrite; Aamrapali Dubey added that Love is taking Scout for a ride: "She is enjoying it" (Times Now).</p>
    ${renderPortraitStrip(["kanika-mann", "qazi-touqeer", "love-gill"])}
    <p><strong>Salman on Scout and Love.</strong> Asked about Love, Scout said he treats her like just another contestant. Salman said he does not feel that is true — that Scout lost his friends Yung DSA and Aamrapali because he chose to go back to Love, and that his bald look reminded him of Tere Naam's Radhe. He advised Scout to control his emotions, focus on his game and live in the present, and reminded him of the messages his mother and Kaashvi Hiranandani sent him during Diwali week. In the same conversation, Scout revealed that Kaashvi is not just his girlfriend but his fiancée (Times Now). NDTV also reported Salman questioning Scout's friendship with Love across the weekend.</p>
    <p><strong>The patang task.</strong> In the kite task, each housemate named someone they felt was flying too high (Times Now; India TV carries the same task, with Kanika named repeatedly and Mahhi naming Kanika):</p>
    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Housemate</th><th>Named</th><th>Reason given</th></tr>
        </thead>
        <tbody>
          <tr><td>Love Gill</td><td><strong>Arishfa Khan</strong></td><td>Does not own her words; flying too high</td></tr>
          <tr><td>Gullu</td><td><strong>Yung DSA</strong></td><td>Objects to Yung calling himself "Badshah"</td></tr>
          <tr><td>Kanika Mann</td><td><strong>Qazi Touqeer</strong></td><td>"Hawa mein udd rahe hai" — flying in the air</td></tr>
          <tr><td>Arishfa Khan</td><td><strong>Scout</strong></td><td>Named in the task (reason not reported)</td></tr>
          <tr><td>Qazi Touqeer</td><td><strong>Kanika Mann</strong></td><td>Gave it back to Kanika</td></tr>
          <tr><td>Mahhi Vij</td><td><strong>Kanika Mann</strong></td><td>Called her insecure</td></tr>
          <tr><td>Yung DSA</td><td><strong>Gullu</strong></td><td>Named in the task</td></tr>
          <tr><td>Aamrapali Dubey</td><td><strong>Kanika Mann</strong></td><td>Stretching a matter beyond its limit</td></tr>
        </tbody>
      </table>
    </div>
    ${renderStoryPhoto("/assets/bb20-new/photos/bb29-mahhi-page.webp", "Mahhi Vij in the Bigg Boss 20 house", "Mahhi Vij — fewest votes in Week 10, saved by her extra lifeline.")}`
    ) +
    storySection(
      "What It Means",
      "What this weekend changes for Week 11",
      `<p><strong>The lifeline cushion is gone.</strong> Mahhi was the last housemate still holding both lifelines; she now has one, like the other contestants (India TV; Zoom TV). The next time she finishes last in a vote, there is no spare lifeline to give up.</p>
    <p><strong>Manish Goel never left.</strong> The week's loudest pre-air report — that Manish had been evicted at the Saturday shoot — was contradicted by the aired episode. He goes into Week 11 still in the house.</p>
    <p><strong>Scout's road is the hardest in the house.</strong> Under the Episode 68 punishments he is nominated every week for the rest of the season and barred from captaincy, so the public vote decides his fate weekly — and the host has now told him, on two straight days, to play his own game.</p>
    <p><strong>The captain's chair is still empty.</strong> No successor to Arishfa Khan was named in either episode. The next captaincy process has not been announced on air.</p>
    <div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ⚠️ <strong>Week 11 nominations — confirmed on air (Episode 72, 16 November 2026).</strong> The Sharbat Nomination Task left Uditi Singh as the only housemate to escape nomination; Love Gill drew the most nominations (6). No eviction took place in Episode 72 itself — the result is due at the Weekend Ka Vaar of 21–22 November 2026.
        </div>
    <p>Week 11's result is expected at the next Weekend Ka Vaar. Until then, the <a href="/bigg-boss-20-voting/">Weekly Voting Hub</a> tracks the confirmed picture, the <a href="/bigg-boss-20-voting-week-11/">Week 11 voting page</a> carries this week's Open Poll, and the <a href="/bigg-boss-20-captain/">captain page</a> follows the empty captain's chair.</p>`
    )
  );
}

function renderScoutHeadShaveSections() {
  return (
    storySection(
      "Quick Answer",
      "What happened, in short",
      `<p><strong>Confirmed on air:</strong> in Episode 69 (aired 13 November 2026), after a clash with Love Gill, Scout went to trim his hair late at night, cut off too much, and shaved his head completely. Scout says it was an accident. Amrapali Dubey and Kanika Mann questioned on air whether it was deliberate. By then the moment was already the most talked-about clip of the season — the promo had gone viral a day before the episode aired, and the fallout ran from his mother's viral voice note to a Weekend Ka Vaar scolding from Salman Khan.</p>
    ${renderPortraitStrip(["scout", "love-gill"])}`
    ) +
    storySection(
      "The Build-Up",
      "The 48 hours before: a broken friendship and four punishments",
      `<p>The head-shave did not come out of nowhere. In Episode 67 (11 November), Love Gill confronted Scout for not taking a stand for her when Mahhi Vij's "homebreaker" remark about her surfaced — while Yung DSA did take that stand. Scout apologised repeatedly; Love said she was done expecting support from the friendship.</p>
    <p>A day later, in Episode 68 (12 November), the captaincy task turned physical: Scout slightly burnt the edge of Uditi Singh's family photo, Gullu and Yung interrupted, abuses were exchanged, and Scout pushed Yung — his closest friend in the house. "Ab dosti khatam" — the friendship is over — Yung told him. Bigg Boss stopped the task, and later announced punishments for Scout: nominated for the rest of the season and barred from captaincy are confirmed on air; the other two punishments differ between the episode accounts, so this page does not state them as settled. The new-captain task itself was called off.</p>
    <p>So within two days Scout had fallen out with Love, fought the friend who had defended her, lost the captaincy route for the season, and been put up for eviction every single week until the finale. That is the pressure stack the promo landed on.</p>
    ${renderPortraitStrip(["scout", "yung-dsa"])}`
    ) +
    storySection(
      "The Viral Promo",
      "The promo that broke the internet",
      `<p>The clip was released on 12 November, ahead of the episode. As News18, Outlook India and Indiatimes all describe it: the disagreement began over a remark Scout made about Love Gill's pyjamas, which she found inappropriate. "Maine tujhe freedom di aur tu is freedom ka aise use kar raha hai? Kis baat ka mazaak kar raha hai? Kya lagti hoon main tumhari? Mujhe nahi baat karni is cheez par" — I gave you freedom and this is how you use it; what do you think I am to you; I do not want to talk about this — Love tells him in the promo (News18). Qazi Touqeer also questioned Scout over the remark (Indiatimes).</p>
    <p>Scout is then seen climbing the artificial snake structure in the garden, with Uditi Singh asking him not to do anything drastic. He heads to the bathroom, picks up a trimmer and shaves off all his hair while "Bekhayali" from Kabir Singh plays over the sequence. He is also seen breaking down in tears. When Love asks the reason, he replies: "Tu kyun stress leke baithi hai? Tera toh stress hat gaya" — why are you sitting stressed; your stress is gone now (News18).</p>
    <p>The clip spread immediately — Indiatimes records it travelling across social media as memes within hours, and within a day News18, Outlook India, Indiatimes and Filmibeat had all run standalone pieces on it. One detail matters for fairness: this was the promo cut. What the full episode showed is the next section.</p>`
    ) +
    storySection(
      "On Air — Episode 69",
      "What Episode 69 actually showed",
      `<p>Episode 69 aired on 13 November (JioHotstar 9 PM / Colors 10:30 PM). Times Now's episode recap and the JustShowBiz written update — two independent post-airing accounts — record the sequence as broadcast: after the clash with Love, Scout set out to trim his hair late at night, cut off too much by accident, and then shaved it all off. Housemates were shocked; Amrapali and Kanika questioned whether he had done it on purpose. Scout's own account, on air, is that it was an accident.</p>
    <p>The same episode carried the repair job. Scout opened up to Yung DSA, Yung listened and advised him — and helped trim the back of Scout's head (JustShowBiz written update). TellyChakkar records the two hugging it out and clearing their misunderstandings: the friendship broken in Episode 68 was patched up in Episode 69, over the very haircut the fight's fallout produced.</p>
    <p>And the episode kept the Love question alive. Kanika told Scout she believes he has feelings for Love; Scout denied it outright (Times Now). The same coverage records a "don't call me sister" exchange between Scout and Love — the bond they both call brother-sister, tested again. The full bond story is on our <a href="/bigg-boss-20-scout-love-story/">Scout and Love page</a>.</p>
    ${renderStoryPhoto("/assets/bb20-new/photos/scout-alone-house.webp", "Scout alone in the Bigg Boss 20 house", "Scout, alone in the house during the season's hardest week for him.")}`
    ) +
    storySection(
      "The Reaction",
      "His mother's voice note goes viral",
      `<p>Before the episode had even aired, the argument had moved outside the house. On 13 November, Scout's team shared a voice note from his mother on Instagram (Filmibeat; India Today). In it she accused the show's makers of building a misleading picture of her son through the promo — clips zoomed in and cut out of context, and selective visuals used to create a false narrative — and questioned the editing approach directly.</p>
    <p>The voice note itself went viral, and it split the audience down the middle: loyal fans rallied behind the family and voiced concern for Scout's state of mind — Indiatimes' coverage ran under the headline "He's mentally not healthy", reflecting that fan reaction — while critics argued the promo simply showed what happened. What is not in dispute is the sequence of events: the promo aired first, the family objected to its edit, and the episode then showed the longer version set out above.</p>
    ${renderStoryPhoto("/assets/bb20-new/photos/scout-gaming-chair.webp", "Scout (ScoutOP) at his gaming setup", "Scout at his gaming setup, outside the house — the world his family and fans speak for.")}`
    ) +
    storySection(
      "Salman's Verdict",
      "Salman Khan's verdict at the Weekend Ka Vaar",
      `<p>The host dealt with the head-shave twice. On Saturday (Episode 70), the tone was a scolding: Salman bashed Scout for shaving his head and rejected the accident account — "Gamer ho, acting mein kyu ghus rahe ho? Yeh joh acting ki, yeh joh trimmer se galti se cut gaya hai" — you are a gamer, why are you getting into acting; this whole act of the trimmer slipping — "come out straight. Remember, you are Scout OP" (Outlook India; WION and the Telegraph carry the same exchange). He reminded Scout of the responsibility he carries towards his fans, who could read the act very differently. Scout repeated that it had been a mistake.</p>
    <p>On Sunday (Episode 71), the tone softened into advice. Salman said he understands Scout's emotions and why he shaved his head, told him to keep those emotions under control, and reminded him of the messages his mother and Kaashvi Hiranandani sent him during Diwali week — and to respect what his loved ones want for him. He also said the bald look reminded him of Tere Naam's Radhe, and advised Scout to focus on his game and live in the present, not the past (Times Now's Episode 71 highlights). The whole weekend is covered day by day on our <a href="/bigg-boss-20-weekend-ka-vaar-episodes-70-71/">Weekend Ka Vaar Episodes 70–71 page</a>.</p>
    ${renderStoryPhoto("/assets/bb20-new/photos/bb29-scout-page.webp", "Scout in the Bigg Boss 20 house", "Scout in the house.")}`
    ) +
    storySection(
      "The Open Question",
      "Accident or outburst? The three readings",
      `<p>Three readings of one haircut are now on the record. <strong>Scout's:</strong> a late-night trim that went wrong — an accident, repeated to the house and to Salman Khan. <strong>The doubters':</strong> Amrapali and Kanika questioned the accident account on air in Episode 69 itself, and Salman publicly doubted it on Saturday. <strong>The pressure reading:</strong> the shave came within 48 hours of a friendship ending, four punishments and a season-long nomination — the sequence this page sets out above.</p>
    <p>The Open Poll at the top of this page asks which reading you believe. It is audience sentiment only — the show's own footage is the only official record, and it shows the act, not the intention.</p>`
    )
  );
}

function renderEvictionListSections() {
  return (
    storySection(
      "Quick Answer",
      "The count so far: 6 evictions, 1 removal, 4 no-eviction weeks",
      `<p>Bigg Boss 20 began with 18 housemates on 6 September 2026. Ten weeks in, <strong>11 are still in the house</strong>. Six have been evicted on the public vote — Rohed Khan, Isha Rikhi, Rhiti Tiwari, Aman Gandhi, MC Mary Kom and Aasif Khan — and one, wild card Nakul Dhull, was removed in Week 6 for breaking house rules, which the show records as a removal, not an eviction.</p>
    <p>The latest week is the twist: <strong>Week 10 ended with no eviction</strong> (Episode 71, 15 November). Mahhi Vij received the fewest votes but survived on her extra lifeline. The full week-by-week record is below — every row confirmed on air.</p>`
    ) +
    storySection(
      "The List",
      "Bigg Boss 20 eviction list, week by week",
      `<div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Week</th><th>Evicted</th><th>What happened</th></tr>
        </thead>
        <tbody>
          ${eliminationArchive
            .map((r) => `<tr><td>Week ${r.week}</td><td><strong>${r.evicted}</strong></td><td>${r.note}</td></tr>`)
            .join("")}
        </tbody>
      </table>
    </div>
    <p>Reported-but-unaired developments are never entered in this list — a row is added or settled only after the result is confirmed on air, the same rule the <a href="/bigg-boss-20-voting/">Weekly Voting Hub</a> follows.</p>
    ${renderPortraitStrip(["rohed-khan", "isha-rikhi", "rhiti-tiwari", "aman-gandhi", "mary-kom", "aasif-khan", "nakul-dhull"])}`
    ) +
    storySection(
      "The Format",
      "Why so many no-eviction weeks? The lives format, explained",
      `<p>This season does not work like a standard Bigg Boss eviction. Every housemate holds <strong>two lifelines</strong>, and finishing last in the public vote can cost a lifeline instead of causing an immediate exit. A housemate leaves when the lifelines are gone — Rohed Khan, the season's first eviction in Week 2, went after losing both lives.</p>
    <ul>
      <li><strong>Week 1:</strong> Uditi Singh received the fewest votes and lost a life instead of leaving.</li>
      <li><strong>Week 5:</strong> Aman Gandhi received the fewest votes and lost a lifeline; he was evicted a week later, in Week 6.</li>
      <li><strong>Week 9:</strong> Diwali week — the eviction was deferred and nobody left.</li>
      <li><strong>Week 10:</strong> Mahhi Vij received the fewest votes and lost one of her two lifelines — she was the last housemate still holding both, so every housemate now stands on one.</li>
    </ul>
    <p>That is why this season's list grows more slowly than a normal eviction list — and why a "fewest votes" headline does not always mean somebody went home. The <a href="/bigg-boss-20-weekend-ka-vaar-episodes-70-71/">Weekend Ka Vaar Episodes 70–71 page</a> covers the latest result in full.</p>`
    ) +
    storySection(
      "Still In",
      "Still in the house: the 11 remaining housemates",
      `<p>Eleven housemates remain in the game going into Week 11. Two carry extra context: Scout is nominated for the rest of the season under his Episode 68 punishments, so he faces the vote every week; and the house still has no captain — Arishfa Khan, the Week 10 captain, was removed in Episode 67 and no successor has been named on air. The <a href="/bigg-boss-20-contestant-journey/">Contestant Journey Matrix</a> tracks every housemate's week-by-week status.</p>
    ${renderPortraitStrip(["gullu", "qazi-touqeer", "scout", "yung-dsa", "kanika-mann", "amrapali-dubey", "mahhi-vij", "arishfa-khan", "love-gill", "uditi-singh", "manish-goel"])}`
    ) +
    storySection(
      "What Happens Next",
      "Week 11: the next name on this list",
      `<div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ⚠️ <strong>Week 11 nominations — confirmed on air (Episode 72, 16 November 2026).</strong> The Sharbat Nomination Task left Uditi Singh as the only housemate to escape nomination; Love Gill drew the most nominations (6). No eviction took place in Episode 72 itself — the result is due at the Weekend Ka Vaar of 21–22 November 2026.
        </div>
    <p>Week 11's result is expected at the next Weekend Ka Vaar (21–22 November). When it is confirmed on air, this list is updated — vote in the <a href="/bigg-boss-20-voting-week-11/">Week 11 Open Poll</a> in the meantime. And the season's most dramatic exit so far, <a href="/bigg-boss-20-scout-shaves-head/">Scout's head-shave in Episode 69</a>, shows how quickly a week can turn.</p>`
    )
  );
}

function renderWeek11VotingSections() {
  return (
    storySection(
      "Quick Answer",
      "Week 11 nominations, confirmed on air",
      `<p><strong>Ten of the eleven housemates are nominated in Week 11.</strong> The Sharbat Nomination Task aired in Episode 72 (16 November 2026) and left <strong>Uditi Singh</strong> as the only housemate to escape nomination — she received a single nomination, from Love Gill. <strong>Love Gill drew the most nominations (6).</strong> ScoutOP, already nominated for the rest of the season under his Episode 68 punishments, ran the sharbat counter — he could nominate but could not be nominated again. No eviction took place in Episode 72 itself; the result is due at the Weekend Ka Vaar of 21–22 November 2026.</p>
    <p><strong>The one who escaped:</strong> Uditi Singh — safe from the Week 11 eviction.</p>
    ${renderPortraitStrip(["uditi-singh"])}`
    ) +
    storySection(
      "The 10 Nominees",
      "Who is on the nomination line this week",
      `<p>Every housemate except Uditi Singh faces the public vote this week. Here they are, with why each one is on the line:</p>
    ${renderPortraitStrip(["amrapali-dubey", "arishfa-khan", "gullu", "kanika-mann", "love-gill", "mahhi-vij", "manish-goel", "qazi-touqeer", "scout", "yung-dsa"])}
    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Nominee</th><th>Why they are on the line</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Amrapali Dubey</strong></td><td>Nominated in Weeks 7, 8, 9 and 10 as well — in the firing line again.</td></tr>
          <tr><td><strong>Arishfa Khan</strong></td><td>Sat out Week 10 as ex-captain (removed in Episode 67); nominated again in Week 11.</td></tr>
          <tr><td><strong>Gullu (Kushal Tanwar)</strong></td><td>Nominated in Weeks 7, 8 and 10; back on the list.</td></tr>
          <tr><td><strong>Kanika Mann</strong></td><td>Nominated in Weeks 8 and 10.</td></tr>
          <tr><td><strong>Love Gill</strong></td><td>Drew the most nominations in the Sharbat task (6).</td></tr>
          <tr><td><strong>Mahhi Vij</strong></td><td>Received the fewest votes in Week 10 and survived on her extra lifeline.</td></tr>
          <tr><td><strong>Manish Goel</strong></td><td>Nominated in Weeks 7, 9 and 10.</td></tr>
          <tr><td><strong>Qazi Touqeer</strong></td><td>Nominated in Week 10; leads the season's cumulative Open Poll standings.</td></tr>
          <tr><td><strong>ScoutOP</strong></td><td>Nominated for the rest of the season under his Episode 68 punishments.</td></tr>
          <tr><td><strong>Yung DSA</strong></td><td>Nominated in Week 10; cleared the air with Scout in Episode 69.</td></tr>
        </tbody>
      </table>
    </div>`
    ) +
    storySection(
      "How It Happened",
      "How the Sharbat Nomination Task worked",
      `<p>The Week 11 nominations were decided by the Sharbat Nomination Task, which aired in Episode 72 (16 November 2026). ScoutOP ran the sharbat counter: because he is already nominated for the rest of the season under the punishments announced in Episode 68, he could nominate other housemates but could not be nominated again himself.</p>
    <p>When the task ended, ten housemates stood nominated and one — Uditi Singh — had escaped, with a single nomination against her name, from Love Gill. Love Gill drew the most nominations of anyone in the task (6). The sources that reported the task agree on the full list and on Love Gill's 6; they disagree on some other per-person counts, so this page states no other counts.</p>`
    ) +
    storySection(
      "What Happens Next",
      "The result is due at the Weekend Ka Vaar, 21–22 November",
      `<p>No one left the house in Episode 72. The Week 11 result will be announced at the Weekend Ka Vaar of 21–22 November 2026 — until then, the <a href="/bigg-boss-20-voting/">Weekly Voting Hub</a> tracks the confirmed picture, and its eviction-prediction Open Poll records who readers expect to go. The <a href="/bigg-boss-20-eviction-list/">Eviction List</a> carries the season's week-by-week record, and the <a href="/bigg-boss-20-weekend-ka-vaar-episodes-70-71/">Weekend Ka Vaar Episodes 70–71 page</a> covers how Week 10 ended with no eviction.</p>`
    )
  );
}

function renderWhoWillWinSections() {
  const qazi = contestantById.get("qazi-touqeer");
  const yung = contestantById.get("yung-dsa");
  const scout = contestantById.get("scout");
  const arishfa = contestantById.get("arishfa-khan");
  const kanika = contestantById.get("kanika-mann");
  return (
    storySection(
      "Quick Answer",
      "The prediction: Qazi Touqeer to win, Yung DSA the chief rival",
      `<p><strong>VisitBest's prediction for the Bigg Boss 20 trophy: 1. Qazi Touqeer, 2. Yung DSA, 3. ScoutOP, 4. Arishfa Khan, 5. Kanika Mann.</strong> Eleven housemates remain and nobody has won anything yet — the Week 11 result is due at the Weekend Ka Vaar of 21–22 November 2026. This ranking is VisitBest's editorial prediction, built from the game so far — entertainment value, the stands each housemate has taken, survival record and screen presence — and it lines up with the trend in VisitBest's own Open Poll, whose season standings Qazi also leads. It is not a result and it is not official: the winner will be decided only by the show's official process at the finale. One change since the race last stood still: the house has a captain again — <strong>Uditi Singh became captain in Episode 74 (18 November 2026)</strong> — but she does not crack this five, for reasons the ranking below makes clear.</p>
    ${renderPortraitStrip(["qazi-touqeer", "yung-dsa", "scout", "arishfa-khan", "kanika-mann"])}
    <p>Back your own pick in the Open Poll at the top of this page, and see the same five ranked as the <a href="/bigg-boss-20-top-5-contestants/">current top 5 of Bigg Boss 20</a>, with the full house list and what could stop each of them.</p>`
    ) +
    storySection(
      "Predicted Winner · #1",
      "Qazi Touqeer — the case for the trophy",
      `${renderStoryPhoto(qazi.image, "Qazi Touqeer, VisitBest's predicted winner of Bigg Boss 20", "Qazi Touqeer — VisitBest's predicted winner.")}
    <p><strong>The entertainment case.</strong> In VisitBest's view, no housemate has entertained this house more, or more consistently, than Qazi Touqeer. He is a genuine singer — the Fame Gurukul winner of 2005, returning to national television 21 years later — and his music is woven into the house's daily life rather than saved for tasks: Episode 74 (18 November) showed him teaching Arishfa Khan to sing, a day after he had been teaching Scout a song. Around the music sits a full reality-game presence: emotional, confrontational and funny in turn, and rarely off the screen when the house's big stories move.</p>
    <p><strong>The stands case.</strong> Qazi has played his own game from the start. In the first two weeks, Yung DSA and Scout approached him to plan together; Qazi chose to stay away and play alone — the decision that still explains most of the house's group lines. When a remark of his in an argument was taken by Aasif Khan as a reference to Aasif's health, Qazi apologised and clarified it was not directed at him: he owns his mistakes instead of doubling down. And when he won the 23 October captaincy task round, he handed the captaincy to Mahhi Vij — he used the biggest win of his season for his ally, not for himself.</p>
    <p><strong>The survival and sentiment case.</strong> Qazi has been nominated in Week 10 — the whole-house week — and again in Week 11's Sharbat task, and he is still in the house. He also leads both of VisitBest's own audience-sentiment reads: the season's cumulative Open Poll standings on the <a href="/bigg-boss-20-voting/">Weekly Voting Hub</a> and the Week 11 nominees Open Poll. Those are Open Poll numbers — audience sentiment only, not official votes — but as a measure of who the audience is watching, they point the same way as the game itself.</p>
    <p><strong>His honest weakness.</strong> Qazi plays emotionally, and it has cost him in public before: his friendship with Mahhi Vij cracked in Episode 47 over his closeness with Arishfa Khan and Uditi Singh, and a fracture like that in the final weeks would be replayed at every Weekend Ka Vaar. Sentiment is also not the official vote — Scout's gaming army and Arishfa's following are more organised machines, and if the finale vote turns on organisation rather than warmth, his lead is softer than it looks.</p>`
    ) +
    storySection(
      "Runner-Up · #2",
      "Yung DSA — the chief rival",
      `${renderStoryPhoto(yung.image, "Yung DSA, VisitBest's predicted runner-up in Bigg Boss 20", "Yung DSA — the chief rival.")}
    <p><strong>Why he is the rival, not just a finalist.</strong> Yung DSA set this season's early game: he won the Week 1 captaincy through the 2X Room round, the first power position of the season. Since then he has been one of the house's sharpest, most confrontational voices in nominations and task arguments — a gully-rap artist whose appeal is raw and unfiltered, with the youth and hip-hop community behind him.</p>
    <p><strong>The stand that defines him.</strong> In Episode 67 (11 November), when Love Gill confronted Scout for not taking a stand for her after Mahhi Vij's remark, it was Yung who took a stand for Love — against the house's biggest name, on a point of loyalty, when staying quiet would have been easier. In the same episode he nominated Mahhi and Qazi: he names big players, not safe ones. A day later, in Episode 68's captaincy task, Scout pushed him and Yung declared the friendship over — and in Episode 69 the two cleared the air on air. Fire first, then the maturity to repair it: that arc is exactly what finale runs are built on.</p>
    <p><strong>His honest weakness.</strong> Yung's game runs hot, and the same temper that makes his stands memorable makes his flashpoints frequent — one physical moment too far, of the kind Episode 68 produced, would end his season the way it nearly ended Scout's. In VisitBest's cumulative Open Poll standings he sits behind Qazi, Scout and Gullu, so of the five on this page he has the largest sentiment gap to close in the final month.</p>`
    ) +
    storySection(
      "Third · #3",
      "ScoutOP — the fandom giant with the heaviest handicap",
      `${renderStoryPhoto(scout.image, "ScoutOP, third in VisitBest's Bigg Boss 20 winner prediction", "ScoutOP — third, under the season's heaviest handicap.")}
    <p><strong>The case.</strong> Scout (Tanmay 'Scout' Singh) is one of the pioneers of Indian esports and one of the country's biggest gaming creators — if the finale comes down to an organised vote, no finalist here brings a larger ready-made army. He has the game to match the following: Week 7 captain, a tactical player who speaks bluntly, and the centre of the season's biggest outside storyline — his bond with Love Gill and his fiancée Kaashvi Hiranandani, whose engagement he revealed at the Episode 71 Weekend Ka Vaar. His head-shave in Episode 69, after a clash with Love Gill, became the season's most viral moment within hours.</p>
    <p><strong>His honest weakness — and it is a big one.</strong> Scout plays under the heaviest handicap in the house: in Episode 68, Bigg Boss punished him on air with nomination for the rest of the season and a bar on captaincy. He faces every remaining public vote with no way to win protection, and Salman Khan grilled him across the Weekend Ka Vaar of Episodes 70–71 over the push and the head-shave. The Kaashvi–Love storyline also cuts both ways: it keeps him central, but it divides viewers who might otherwise simply admire the game. Third is where the handicap puts him — if he survives to the finale week, this prediction expects him to climb.</p>`
    ) +
    storySection(
      "Fourth · #4",
      "Arishfa Khan — the house's own choice",
      `${renderStoryPhoto(arishfa.image, "Arishfa Khan, fourth in VisitBest's Bigg Boss 20 winner prediction", "Arishfa Khan — the house's own choice.")}
    <p><strong>The case.</strong> Arishfa Khan is the season's youngest housemate at 23 — and the one its own house chose. In Episode 61 she became Week 10 captain by a unanimous housemate vote in the 2X Room, a peer endorsement none of the other four finalists can match this season. She carries the house's biggest digital following — more than 29 million Instagram followers — rebuilt from a child-artist career into a TikTok-era stardom, and she has spent the season fighting, openly, against being dismissed as 'bacchi', a child. She was removed as captain in Episode 67, is nominated in Week 11, and in Episode 74 she was sanchalak of the second captaincy task — still, weeks after her captaincy ended, one of the people the house's game runs through.</p>
    <p><strong>Her honest weakness.</strong> Right now, readers smell danger around her: she leads VisitBest's Week 11 eviction-prediction Open Poll — the poll that asks not who readers back but who they expect to go. That is expectation, not a result, and her following is precisely the kind that can overturn it when the real finale voting opens on JioHotstar. But of the five, she is the one whose next Weekend Ka Vaar feels least certain.</p>`
    ) +
    storySection(
      "Fifth · #5",
      "Kanika Mann — the season's first entrant",
      `${renderStoryPhoto(kanika.image, "Kanika Mann, fifth in VisitBest's Bigg Boss 20 winner prediction", "Kanika Mann — the season's first entrant.")}
    <p><strong>The case.</strong> Kanika Mann was this season's first confirmed contestant and its first housemate through the door on premiere night, 6 September — she has been in this game longer than anyone. A law graduate turned television star (Guddan in Guddan Tumse Na Ho Payega), she is an ex-captain — captain from 28 October — who used power decisively when she held it, including a captain's nomination of Mahhi Vij in Episode 58. She takes stands that cost her: in Episode 67 she critiqued Mahhi's parenting during a task, saying the unpopular thing to a senior housemate's face rather than behind her back. Salman Khan praised her in Week 5's Weekend Ka Vaar coverage.</p>
    <p><strong>Her honest weakness.</strong> The most recent Weekend Ka Vaar was rough on her: across Episodes 70–71 Salman schooled her on both days — double standards on Saturday, an 'oversmart' defence on Sunday — and the house's patang task named her three times as the one flying too high. When both the host and the house read you as overplaying at the same time, the edit turns cold quickly. She is nominated in Week 11, as she was in Week 10, and fifth is an honest read of where she stands today — with the game to climb if the next fortnight goes her way.</p>`
    ) +
    storySection(
      "The Shortlist",
      "The five, side by side",
      `<p>The prediction at a glance — the same five, the same order, with the one-line case, the survival record and the biggest risk for each:</p>
    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Predicted finish</th><th>Contestant</th><th>The case in one line</th><th>Survival record</th><th>Biggest risk</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1 — Winner</strong></td><td><strong>Qazi Touqeer</strong></td><td>Entertained the most, played his own game, took the right stands — and leads the audience-sentiment reads too.</td><td>Nominated in Weeks 10 and 11; never evicted.</td><td>Sentiment is not the official vote; emotional fractures, like the Episode 47 crack with Mahhi.</td></tr>
          <tr><td><strong>2 — Runner-up</strong></td><td><strong>Yung DSA</strong></td><td>Week 1 captain whose Episode 67 stand for Love Gill was the mid-season's defining loyalty moment.</td><td>Nominated in Weeks 10 and 11.</td><td>A game that runs hot; the largest sentiment gap of the five to close.</td></tr>
          <tr><td><strong>3</strong></td><td><strong>ScoutOP</strong></td><td>The biggest fandom in the house and a Week 7 captaincy — under a season-long nomination.</td><td>Nominated for the rest of the season (Episode 68 punishments).</td><td>Faces every remaining vote with no captaincy protection.</td></tr>
          <tr><td><strong>4</strong></td><td><strong>Arishfa Khan</strong></td><td>The house's unanimous captain pick in Week 10, with the season's biggest digital following.</td><td>Captain in Week 10; removed in Episode 67; nominated in Week 11.</td><td>Prediction polls currently read her as the finalist most at risk.</td></tr>
          <tr><td><strong>5</strong></td><td><strong>Kanika Mann</strong></td><td>First entrant, ex-captain, and the finalist most willing to say the costly thing.</td><td>Nominated in Weeks 10 and 11.</td><td>A two-day schooling at Weekend Ka Vaar 70–71 and a 'flying too high' tag in the house.</td></tr>
        </tbody>
      </table>
    </div>`
    ) +
    storySection(
      "The Rules",
      "How the winner is decided — and what could change this prediction",
      `<p><strong>Nobody has won Bigg Boss 20 yet, and this page does not decide anything.</strong> The winner is decided by the show itself: week by week, the nominated housemates face the official public vote — where opened by the show, only through the official platform, JioCinema / JioHotstar, as announced on Colors TV / JioHotstar during the episode — and the field narrows until the finalists reach the finale, where the winner is announced under the show's official process. VisitBest publishes no official voting numbers, runs no official vote, and its Open Poll — including the one at the top of this page — is audience sentiment only.</p>
    <p><strong>What could change this prediction:</strong> the Week 11 result at the Weekend Ka Vaar of 21–22 November 2026 — all five are on the nomination line this week (Scout for the rest of the season), so any one of them could go; a captaincy or task twist of the kind that made Uditi Singh captain in Episode 74; and the finale-week campaigns of the big organised fanbases behind Scout and Arishfa. This page is VisitBest's prediction as of 19 November 2026 and is updated as results are confirmed on air.</p>`
    ) +
    storySection(
      "Keep Reading",
      "More Bigg Boss 20 pages",
      `<ul>
      <li><a href="/bigg-boss-20-top-5-contestants/"><strong>Bigg Boss 20 Top 5 Contestants</strong></a> — the same five ranked as the current top 5, with their journeys, what could stop them, and the full list of the 11 housemates still in the house.</li>
      <li><a href="/bigg-boss-20-voting/"><strong>Bigg Boss 20 Weekly Voting Hub</strong></a> — this week's Open Poll, the trend snapshot and the week-by-week archives.</li>
      <li><a href="/bigg-boss-20-voting-week-11/"><strong>Week 11 Voting</strong></a> — the nominees-only Open Poll for the Sharbat task week.</li>
      <li><a href="/bigg-boss-20-eviction-list/"><strong>Bigg Boss 20 Eviction List</strong></a> — every confirmed exit, week by week.</li>
    </ul>`
    )
  );
}

export function renderBiggBossTop5Page(poll) {
  const qazi = contestantById.get("qazi-touqeer");
  const yung = contestantById.get("yung-dsa");
  const scout = contestantById.get("scout");
  const arishfa = contestantById.get("arishfa-khan");
  const kanika = contestantById.get("kanika-mann");
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
    </header>

    ${bbCoverFigure(poll.image, poll.h1)}

    ${storySection(
      "Quick Answer",
      "The current top 5, at a glance",
      `${renderPortraitStrip(["qazi-touqeer", "yung-dsa", "scout", "arishfa-khan", "kanika-mann"])}
    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Rank</th><th>Contestant</th><th>Why they are in the top 5</th><th>This week</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1</strong></td><td><strong>Qazi Touqeer</strong></td><td>The house's entertainment centre, playing his own game — and leading the season's audience-sentiment standings.</td><td>Nominated (Week 11)</td></tr>
          <tr><td><strong>2</strong></td><td><strong>Yung DSA</strong></td><td>Week 1 captain whose Episode 67 stand for Love Gill marked him as the house's loyalty player.</td><td>Nominated (Week 11)</td></tr>
          <tr><td><strong>3</strong></td><td><strong>ScoutOP</strong></td><td>The biggest fandom in the house, playing under a season-long nomination.</td><td>Nominated (rest of season)</td></tr>
          <tr><td><strong>4</strong></td><td><strong>Arishfa Khan</strong></td><td>The house's unanimous captain pick in Week 10, with its biggest digital following.</td><td>Nominated (Week 11)</td></tr>
          <tr><td><strong>5</strong></td><td><strong>Kanika Mann</strong></td><td>First entrant and ex-captain who takes the costly stands.</td><td>Nominated (Week 11)</td></tr>
        </tbody>
      </table>
    </div>
    <p>For the winner prediction built on this ranking — who lifts the trophy and why — see <a href="/who-will-win-bigg-boss-20/">Who Will Win Bigg Boss 20?</a></p>`
    )}

    ${storySection(
      "Top 5 · #1",
      "Qazi Touqeer",
      `${renderStoryPhoto(qazi.image, "Qazi Touqeer, number 1 in the current Bigg Boss 20 top 5", "Qazi Touqeer — #1 in the current top 5.")}
    <p><strong>Why he is in the top 5.</strong> Qazi is the house's entertainment centre — a Fame Gurukul-winning singer whose music runs through daily house life (Episode 74 showed him teaching Arishfa to sing) — and he plays his own game: in the first two weeks he refused the plan Yung and Scout brought him, choosing to play alone. He has taken the season's clear-eyed stands, apologised when a remark of his hurt Aasif Khan, and used his 23 October captaincy-task win to make Mahhi Vij captain instead of himself. He also leads VisitBest's season cumulative Open Poll standings — audience sentiment, not official votes, but the broadest read of who the audience is watching.</p>
    <p><strong>The journey so far.</strong> The nostalgia story of the season — a 2005 reality winner back on national television 21 years later — became its centre: a defining friendship with Mahhi that cracked in Episode 47, a running clash with Scout, nominations survived in the whole-house Week 10 and again in Week 11's Sharbat task.</p>
    <p><strong>What could stop him.</strong> An emotional fracture in the final weeks, replayed at Weekend Ka Vaar; and the gap between broad sentiment and an organised finale vote — Scout's and Arishfa's fanbases are built to out-work a soft lead.</p>`
    )}

    ${storySection(
      "Top 5 · #2",
      "Yung DSA",
      `${renderStoryPhoto(yung.image, "Yung DSA, number 2 in the current Bigg Boss 20 top 5", "Yung DSA — #2 in the current top 5.")}
    <p><strong>Why he is in the top 5.</strong> Yung won the season's first captaincy, through the Week 1 2X Room round, and has been its loyalty player ever since: in Episode 67 he took a stand for Love Gill when Scout would not, and nominated Mahhi Vij and Qazi Touqeer in the same episode — big names, not safe ones. His gully-rap voice brings the house its youngest audience.</p>
    <p><strong>The journey so far.</strong> Knocked out of the 23 October captaincy race; pushed by Scout in Episode 68's captaincy task, where he declared the friendship over; cleared the air with Scout in Episode 69; nominated in Weeks 10 and 11.</p>
    <p><strong>What could stop him.</strong> His game runs hot — one physical flashpoint too many would end it — and in the cumulative Open Poll standings he trails Qazi, Scout and Gullu, so he needs the loudest final month of the five.</p>`
    )}

    ${storySection(
      "Top 5 · #3",
      "ScoutOP",
      `${renderStoryPhoto(scout.image, "ScoutOP, number 3 in the current Bigg Boss 20 top 5", "ScoutOP — #3 in the current top 5.")}
    <p><strong>Why he is in the top 5.</strong> Scout brings the house's biggest single fandom — he is one of India's biggest gaming creators — plus a Week 7 captaincy and the season's most viral moment, the Episode 69 head-shave. His storyline with Love Gill and his fiancée Kaashvi Hiranandani, whose engagement he revealed at the Episode 71 Weekend Ka Vaar, is the show's biggest outside story.</p>
    <p><strong>The journey so far.</strong> A running clash with Qazi from the early weeks; captain in Week 7; nominated directly by captain Arishfa in Episode 66; punished on air in Episode 68 — nominated for the rest of the season and barred from captaincy — after pushing Yung in the captaincy task; shaved his head in Episode 69; grilled by Salman across Weekend Ka Vaar 70–71.</p>
    <p><strong>What could stop him.</strong> The handicap itself: he faces every remaining public vote with no captaincy protection available to him, ever. Survival to the finale week is his whole game now.</p>`
    )}

    ${storySection(
      "Top 5 · #4",
      "Arishfa Khan",
      `${renderStoryPhoto(arishfa.image, "Arishfa Khan, number 4 in the current Bigg Boss 20 top 5", "Arishfa Khan — #4 in the current top 5.")}
    <p><strong>Why she is in the top 5.</strong> The house chose her itself: Week 10 captain by a unanimous housemate vote in Episode 61. At 23 she is the youngest housemate, carries its biggest digital following (more than 29 million on Instagram), and has fought all season against being dismissed as 'bacchi'. In Episode 74 she was sanchalak of the second captaincy task — the game still runs through her.</p>
    <p><strong>The journey so far.</strong> A child artist who rebuilt herself as a social-media star; nominated in Week 7; central to the Episode 47 flashpoint that cracked the Mahhi–Qazi friendship; captain in Week 10; removed as captain in Episode 67; nominated again in Week 11.</p>
    <p><strong>What could stop her.</strong> Readers currently expect her to be at risk — she leads the Week 11 eviction-prediction Open Poll on the hub, which records expectation, not results — and the Week 11 vote is the first test of whether her following converts when it matters.</p>`
    )}

    ${storySection(
      "Top 5 · #5",
      "Kanika Mann",
      `${renderStoryPhoto(kanika.image, "Kanika Mann, number 5 in the current Bigg Boss 20 top 5", "Kanika Mann — #5 in the current top 5.")}
    <p><strong>Why she is in the top 5.</strong> The season's first entrant — first through the door on premiere night, 6 September — and an ex-captain who used power decisively, including a captain's nomination of Mahhi Vij in Episode 58. She says the costly thing out loud: in Episode 67 she critiqued Mahhi's parenting during a task, to her face. Salman Khan praised her game in Week 5's Weekend Ka Vaar coverage.</p>
    <p><strong>The journey so far.</strong> A law graduate (LL.M., Panjab University) who chose acting over her father's opposition; entered with a 'Puppet Master' power over later entrants; captain from 28 October; part of the Episode 47 conversation that fed the season's biggest storyline; nominated in Weeks 8, 10 and 11.</p>
    <p><strong>What could stop her.</strong> Perception, on two fronts at once: Salman schooled her on both days of Weekend Ka Vaar 70–71, and the patang task named her three times as flying too high. If the house and the host keep reading her as overplaying, her edit — and her votes — cool fast.</p>`
    )}

    <section class="bb-leaderboard-section">
      <div class="bb-section-head">
        <div>
          <p class="eyebrow">The Full House</p>
          <h2>All 11 housemates still in Bigg Boss 20</h2>
          <p>The top 5 above, and the six just outside it — including the house's new captain. Week 11's result is still to come, at the Weekend Ka Vaar of 21–22 November 2026.</p>
        </div>
      </div>
      ${renderPortraitStrip(["gullu", "uditi-singh", "love-gill", "mahhi-vij", "amrapali-dubey", "manish-goel"])}
      <div class="table-scroll">
        <table class="bb-leaderboard-table">
          <thead>
            <tr><th>Housemate</th><th>Status</th><th>Why here / why just outside</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Gullu (Kushal Tanwar)</strong></td><td>Just outside · Nominated (Week 11)</td><td>A reality-show winner (Roadies XX) who stands third in the season's cumulative Open Poll standings. His early run was louder than his recent weeks — the first name below the line, and one big week puts him back in.</td></tr>
            <tr><td><strong>Uditi Singh</strong></td><td>Just outside — and rising · CAPTAIN</td><td>The new captain: in Episode 74 (18 November) she won the captaincy contendership's first round, and when the second task was dismissed after Love Gill broke its rules, Uditi — the round-one winner — became captain. She is also the only housemate not nominated in Week 11. What keeps her outside this top 5 today is sentiment: her Open Poll numbers remain the lowest of the housemates in the season standings. The captaincy is her chance to change that.</td></tr>
            <tr><td><strong>Love Gill</strong></td><td>Just outside · Nominated (Week 11)</td><td>The Fans Ka Faisla entrant drew the most nominations in Week 11 (6) — the house's clearest target. In Episode 74, her rule break in the captaincy task, entering the circle a second time, got the task dismissed and handed Uditi the captaincy. Her season runs through the Scout storyline, which brings attention and risk in equal measure.</td></tr>
            <tr><td><strong>Mahhi Vij</strong></td><td>Just outside · Nominated (Week 11)</td><td>An ex-captain — chosen by Qazi on 23 October, then voted out of the captaincy 6–5 on 28 October. In Week 10 she received the fewest votes and stayed by giving up her extra lifeline. Experienced and connected, but the audience signal is the weakest of the season's survivors.</td></tr>
            <tr><td><strong>Aamrapali Dubey</strong></td><td>Just outside · Nominated (Week 11)</td><td>The Bhojpuri superstar carries the season's most loyal regional audience, and she keeps surviving — nominated in Weeks 7, 8, 9, 10 and now 11. Her recent game has been quieter than the five above her.</td></tr>
            <tr><td><strong>Manish Goel</strong></td><td>Just outside · Nominated (Week 11)</td><td>The season's first wild card (Week 5) and its oldest housemate, with a television career of three decades. He has had to build bonds from zero against groups formed over five weeks — and the pre-air reports of his Week 10 eviction were contradicted by the aired episode.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Already out: Rohed Khan (Week 2), Isha Rikhi (Week 3), Rhiti Tiwari (Week 4), Aman Gandhi (Week 6), MC Mary Kom (Week 7) and Aasif Khan (Week 8) were evicted, and wild card Nakul Dhull was removed in Week 6 — the week-by-week record is on the <a href="/bigg-boss-20-eviction-list/">Eviction List</a>.</p>
    </section>

    ${storySection(
      "The Method",
      "How this ranking was made",
      `<p>This top 5 is <strong>VisitBest's editorial ranking</strong>, made on three inputs: <strong>game impact</strong> (tasks, captaincy, stands taken and screen presence), <strong>survival record</strong> (nominations faced and come through), and <strong>audience sentiment</strong> in VisitBest's own Open Poll standings. It is a blend of the three, not a readout of any single poll — the Open Poll order on its own would place Gullu third, for example, and this ranking explains above why he sits just outside instead.</p>
    <div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ℹ️ <strong>Open Poll — for audience sentiment only.</strong> Where this page cites VisitBest Open Poll standings, those are open audience sentiment tracked on VisitBest. They are not official Bigg Boss votes, they do not decide nominations or evictions, and no number on this page is an official vote count. Official voting, where opened by the show, is only via JioCinema / JioHotstar, as announced on air.
        </div>
    <p>The ranking is updated as confirmed results land — this edition reflects Episode 74 (18 November 2026), which made Uditi Singh captain, and will be revisited after the Week 11 result at the Weekend Ka Vaar of 21–22 November 2026. Reported-but-unaired developments are never entered in it.</p>`
    )}

    ${storySection(
      "Keep Reading",
      "More Bigg Boss 20 pages",
      `<ul>
      <li><a href="/who-will-win-bigg-boss-20/"><strong>Who Will Win Bigg Boss 20?</strong></a> — the winner prediction built on this top 5, with the Open Poll.</li>
      <li><a href="/bigg-boss-20-voting/"><strong>Bigg Boss 20 Weekly Voting Hub</strong></a> — this week's Open Poll, the trend snapshot and the week-by-week archives.</li>
      <li><a href="/bigg-boss-20-voting-week-11/"><strong>Week 11 Voting</strong></a> — the nominees-only Open Poll for the Sharbat task week.</li>
      <li><a href="/bigg-boss-20-eviction-prediction-week-11/"><strong>Week 11 Eviction Prediction</strong></a> — who readers expect to go at Weekend Ka Vaar.</li>
      <li><a href="/bigg-boss-20-eviction-list/"><strong>Bigg Boss 20 Eviction List</strong></a> — every confirmed exit, week by week.</li>
    </ul>`
    )}
  </div>
  `;
}

export function renderBiggBossTrendPage(poll) {
  const week11 = pollBySlug.get("bigg-boss-20-voting-week-11");
  const season = pollBySlug.get("bigg-boss-20-voting");
  const winnerRace = pollBySlug.get("who-will-win-bigg-boss-20");
  const w11 = getPollStats(week11);
  const seasonStats = getPollStats(season);
  const winStats = getPollStats(winnerRace);
  const fmt = (n) => n.toLocaleString("en-IN");
  const inHouse = seasonStats.list.filter((c) => !c.evicted && !c.removed);
  const withVotes = inHouse.filter((c) => c.votes > 0);
  const noVotes = inHouse.filter((c) => c.votes === 0);
  const top3 = w11.list.slice(0, 3);
  const qaziW11 = w11.list.find((c) => c.id === "qazi-touqeer");
  const qaziSeason = seasonStats.list.find((c) => c.id === "qazi-touqeer");
  const qaziWin = winStats.list.find((c) => c.id === "qazi-touqeer");
  const lastW11 = w11.list[w11.list.length - 1];
  const uditiSeason = seasonStats.list.find((c) => c.id === "uditi-singh");
  const manishW11 = w11.list.find((c) => c.id === "manish-goel");
  const statusFor = (c) =>
    c.id === "uditi-singh"
      ? "🟢 Captain (since Ep 74)"
      : c.id === "arishfa-khan"
        ? "🟢 Safe — immunity won in Ep 75"
        : c.seasonNominated
        ? "🔴 Nominated — rest of season (Ep 68)"
        : WEEK11_NOMINATED_IDS.has(c.id)
          ? "🔴 Nominated — Week 11"
          : c.exCaptain
            ? "🟢 Ex-captain — removed Ep 67"
            : "In the house";
  const weekRows = w11.list
    .map(
      (c, i) => `
            <tr>
              <td data-label="Rank"><strong>#${i + 1}</strong></td>
              <td data-label="Contestant"><div class="bb-table-contestant"><img class="bb-table-avatar" src="${c.image}" alt="${c.name}" loading="lazy" decoding="async"><span>${c.name}</span></div></td>
              <td data-label="Open Poll Votes"><strong>${fmt(c.votes)}</strong></td>
              <td data-label="Vote Share">${c.pctStr}</td>
              <td data-label="Status">${c.id === "scout" ? "🔴 Nominated — rest of season (Ep 68)" : c.id === "arishfa-khan" ? "🟢 Safe — immunity won in Ep 75" : "🔴 Nominated — Week 11"}</td>
            </tr>`,
    )
    .join("");
  const seasonRows = withVotes
    .map(
      (c, i) => `
            <tr>
              <td data-label="Rank"><strong>#${i + 1}</strong></td>
              <td data-label="Contestant"><div class="bb-table-contestant"><img class="bb-table-avatar" src="${c.image}" alt="${c.name}" loading="lazy" decoding="async"><span>${c.name}</span></div></td>
              <td data-label="Open Poll Votes"><strong>${fmt(c.votes)}</strong></td>
              <td data-label="Share of Season Poll">${c.pctStr}</td>
              <td data-label="Status">${statusFor(c)}</td>
            </tr>`,
    )
    .join("");
  const winnerRows = winStats.list
    .map(
      (c, i) => `
            <tr>
              <td data-label="Rank"><strong>#${i + 1}</strong></td>
              <td data-label="Finalist"><div class="bb-table-contestant"><img class="bb-table-avatar" src="${c.image}" alt="${c.name}" loading="lazy" decoding="async"><span>${c.name}</span></div></td>
              <td data-label="Open Poll Votes"><strong>${fmt(c.votes)}</strong></td>
              <td data-label="Vote Share">${c.pctStr}</td>
            </tr>`,
    )
    .join("");
  const leaderCards = top3
    .map(
      (c, i) => `
        <div class="bb-nom-card">
          <div class="bb-nom-img-wrap"><img src="${c.image}" alt="${c.name} Bigg Boss 20" loading="lazy" decoding="async"></div>
          <div class="bb-nom-info">
            <h4>#${i + 1} ${c.name}</h4>
            <span class="bb-nom-role">${fmt(c.votes)} Open Poll votes · ${c.pctStr} of the Week 11 poll</span>
          </div>
        </div>`,
    )
    .join("");
  const trendFaqs = [
    {
      q: "Is this the official result?",
      a: "No. Every number on this page comes from VisitBest's own Open Polls — free audience sentiment polls run by this website. They are not official votes and not official results. The official Bigg Boss 20 vote happens only on JioCinema / JioHotstar, and the result is announced on the show itself, at Weekend Ka Vaar.",
    },
    {
      q: "Who is leading the Bigg Boss 20 voting trend today?",
      a: `As of 19 November 2026, Qazi Touqeer leads all three Open Poll reads: the Week 11 nominees poll with ${fmt(qaziW11.votes)} votes (${qaziW11.pctStr}), the season sentiment standings with ${fmt(qaziSeason.votes)} votes, and the winner-race poll with ${fmt(qaziWin.votes)} votes (${qaziWin.pctStr}). These are VisitBest Open Poll standings — audience sentiment only, not official votes.`,
    },
    {
      q: "Why is Uditi Singh missing from the Week 11 table?",
      a: "Uditi was the only housemate not nominated in the Week 11 Sharbat task, so she is not an option in the Week 11 poll. She is in the season standings table on this page, and she is the current house captain (since Episode 74).",
    },
    {
      q: "How do I vote?",
      a: "For the Open Polls, vote free on the voting hub or the Week 11 voting page — both are linked at the top and bottom of this page. For the official vote that decides evictions, use JioCinema / JioHotstar in the windows announced on air.",
    },
    {
      q: "How often does this page change?",
      a: "The standings are read from the site's own Open Polls, so they reflect the polls as they stand when this page is published and refreshed. This edition is dated 19 November 2026. After the Week 11 result at Weekend Ka Vaar (21–22 November 2026), the trend resets around the next week's nominees.",
    },
    {
      q: "Does the trend decide who is evicted?",
      a: "No. Evictions are decided by the official public vote and the show's own twists, such as lifelines. The trend only shows which way VisitBest's readers are leaning — it has no role in the result.",
    },
  ];
  return `
  <div class="bb-wrap">
    ${renderPollPills(poll.slug)}
    <nav class="bb-breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> <span>›</span> <a href="/bigg-boss-20-voting/">Bigg Boss 20 Voting</a> <span>›</span> <span>Voting Trend Today</span>
    </nav>

    <header class="bb-hero-section">
      <span class="bb-hero-badge">${poll.heroBadge}</span>
      <h1 class="bb-hero-title">${poll.h1}</h1>
      <p class="bb-hero-lead">${poll.lead}</p>
    </header>

    ${bbCoverFigure(poll.coverImage, poll.coverAlt)}

    ${storySection(
      "Today's Trend",
      "The top of the Week 11 poll, as it stands today",
      `<p>These are the three most-backed nominees in this week's Open Poll right now. The Week 11 result itself is decided by the official vote and is due at Weekend Ka Vaar on 21–22 November 2026 — this section only shows how VisitBest readers are leaning.</p>
      <div class="bb-nominated-grid">${leaderCards}
      </div>
      ${HUB_DISCLAIMER_BOX}`,
    )}

    <section class="bb-section leaderboard-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">Week 11 Nominees</span>
        <h2>Full Week 11 standings — 9 nominees, 1 safe</h2>
        <p class="bb-section-sub">The Week 11 nominees Open Poll opened on 17 November 2026 and has ${fmt(w11.total)} votes so far. Nine of its ten names are still nominated — Arishfa Khan won safety in the Episode 75 immunity task, so her row reads Safe; her Open Poll votes are unchanged. Everyone is listed in the order readers are backing them today.</p>
      </div>
      <div class="bb-leaderboard-wrap">
        <table class="bb-leaderboard-table">
          <thead>
            <tr><th>Rank</th><th>Contestant</th><th>Open Poll Votes</th><th>Vote Share</th><th>Status</th></tr>
          </thead>
          <tbody>${weekRows}
          </tbody>
        </table>
      </div>
      ${HUB_DISCLAIMER_BOX}
      <p class="bb-small">Uditi Singh is not in this table: she is the only housemate who escaped nomination in Week 11 altogether — Arishfa Khan was nominated, but won safety in Episode 75 — and she is the house captain. Her standing is in the season table below. To vote in this poll, open the <a href="/bigg-boss-20-voting-week-11/">Week 11 voting page</a>.</p>
    </section>

    <section class="bb-section leaderboard-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">Season Standings</span>
        <h2>Season sentiment standings — the whole run so far</h2>
        <p class="bb-section-sub">The cumulative Open Poll on the voting hub has ${fmt(seasonStats.total)} votes across the season. Shares below are of that whole poll, which still includes votes cast earlier for housemates who have since left the house — so the eleven still in the game do not add up to 100% between them.</p>
      </div>
      <div class="bb-leaderboard-wrap">
        <table class="bb-leaderboard-table">
          <thead>
            <tr><th>Rank</th><th>Contestant</th><th>Open Poll Votes</th><th>Share of Season Poll</th><th>Status</th></tr>
          </thead>
          <tbody>${seasonRows}
          </tbody>
        </table>
      </div>
      ${HUB_DISCLAIMER_BOX}
      <p class="bb-small">${noVotes.map((c) => c.name).join(", ")} — the season's first wild card (Week 5) — has no recorded votes yet in the cumulative season poll. His support shows in the weekly polls instead: ${fmt(manishW11.votes)} votes in the Week 11 table above. The full season table, including the housemates who have left, is on the <a href="/bigg-boss-20-voting/">voting hub</a>.</p>
    </section>

    <section class="bb-section leaderboard-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">Winner Race</span>
        <h2>The winner race — the newest trend on the site</h2>
        <p class="bb-section-sub">The winner-prediction Open Poll opened today, 19 November 2026, with the five predicted finalists, and already has ${fmt(winStats.total)} votes — the earliest read on who readers think lifts the trophy.</p>
      </div>
      <div class="bb-leaderboard-wrap">
        <table class="bb-leaderboard-table">
          <thead>
            <tr><th>Rank</th><th>Finalist</th><th>Open Poll Votes</th><th>Vote Share</th></tr>
          </thead>
          <tbody>${winnerRows}
          </tbody>
        </table>
      </div>
      ${HUB_DISCLAIMER_BOX}
      <p class="bb-small">Vote in this poll and read the full case for each finalist on the <a href="/who-will-win-bigg-boss-20/">Who Will Win Bigg Boss 20</a> page.</p>
    </section>

    ${storySection(
      "Reading the Numbers",
      "What the trend means — and what it does not",
      `<p><strong>One name leads every read.</strong> Qazi Touqeer tops the Week 11 poll (${fmt(qaziW11.votes)} votes), the season standings (${fmt(qaziSeason.votes)}) and the winner race (${fmt(qaziWin.votes)}). Three different polls, three different fields, the same leader — that consistency is the strongest signal on this page.</p>
      <p><strong>The fields are different, so the percentages are not comparable.</strong> The Week 11 poll asks about this week's nominees — nine still on the line, plus Arishfa Khan, who stays in the support poll after winning safety in Episode 75. The season poll is cumulative across the whole season and still carries votes for housemates who have left. The winner race has just five names. A 15% share in one table is not the same thing as 15% in another.</p>
      <p><strong>The top of the Week 11 table is tight.</strong> First and fourth are separated by under four percentage points (${w11.list[0].pctStr} down to ${w11.list[3].pctStr}), with ScoutOP and Gullu between Qazi Touqeer and Yung DSA. There is no runaway leader this week.</p>
      <p><strong>The bottom of the table is where the eviction conversation sits.</strong> ${lastW11.name} is the least-backed nominee in the support poll (${fmt(lastW11.votes)} votes, ${lastW11.pctStr}). A support poll measures who readers back, not who they expect to leave — VisitBest asks that second question separately, on the <a href="/bigg-boss-20-eviction-prediction-week-11/">Week 11 eviction prediction page</a>.</p>
      <p><strong>The captain's paradox.</strong> Uditi Singh runs the house but sits last among the current housemates in the season sentiment table (${fmt(uditiSeason.votes)} votes, ${uditiSeason.pctStr}). Captaincy is won in tasks inside the house; sentiment is won with the audience outside it. She is also the only housemate completely safe this week.</p>
      <p><strong>No invented movement.</strong> VisitBest does not publish day-by-day movement for these polls. What you see is the standings as they stand on 19 November 2026, read from the polls themselves. This page is refreshed as the polls move and re-dated when it is.</p>`,
    )}

    ${storySection(
      "The Official Vote",
      "How official voting works",
      `<p>Official voting for Bigg Boss 20 happens only on JioCinema / JioHotstar, in the windows announced on air during the episodes. Lines open and close as the show announces them, and the results are declared on the show itself — the Week 11 result is due at Weekend Ka Vaar on 21–22 November 2026.</p>
      <p>VisitBest does not run, collect or publish the official vote, and no number on this page comes from it. When an eviction is confirmed on air, VisitBest updates the <a href="/bigg-boss-20-voting/">voting hub</a>, the <a href="/bigg-boss-20-eviction-list/">eviction list</a> and the context on this page.</p>`,
    )}

    <section class="bb-section bb-faq-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">FAQ</span>
        <h2>Voting trend — frequently asked questions</h2>
      </div>
      <div class="bb-faq-grid">
        ${trendFaqs
          .map(
            (f) => `
        <div class="bb-faq-item">
          <details>
            <summary>${f.q}</summary>
            <p>${f.a}</p>
          </details>
        </div>`,
          )
          .join("")}
      </div>
    </section>

    <section class="bb-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">Keep Reading</span>
        <h2>More Bigg Boss 20 on VisitBest</h2>
      </div>
      <div class="bb-related-grid">
        <a class="bb-related-card" href="/bigg-boss-20-voting/">
          <span class="bb-related-emoji">🗳️</span>
          <h3>Bigg Boss 20 Voting Hub</h3>
          <p>Vote in the season Open Poll and follow the week-by-week archives.</p>
          <span class="bb-related-link">Open the hub →</span>
        </a>
        <a class="bb-related-card" href="/bigg-boss-20-voting-week-11/">
          <span class="bb-related-emoji">🗳️</span>
          <h3>Week 11 Voting</h3>
          <p>Cast your Open Poll vote for this week's nominees.</p>
          <span class="bb-related-link">Vote this week →</span>
        </a>
        <a class="bb-related-card" href="/who-will-win-bigg-boss-20/">
          <span class="bb-related-emoji">🏆</span>
          <h3>Who Will Win Bigg Boss 20?</h3>
          <p>The winner prediction, the top 5 finalists and the winner-race Open Poll.</p>
          <span class="bb-related-link">Read the prediction →</span>
        </a>
        <a class="bb-related-card" href="/bigg-boss-20-top-5-contestants/">
          <span class="bb-related-emoji">🔝</span>
          <h3>Top 5 Contestants</h3>
          <p>The predicted final five, the full house table and how the ranking was made.</p>
          <span class="bb-related-link">See the top 5 →</span>
        </a>
        <a class="bb-related-card" href="/bigg-boss-20-eviction-list/">
          <span class="bb-related-emoji">🚪</span>
          <h3>Eviction List</h3>
          <p>Every eviction of the season so far, week by week.</p>
          <span class="bb-related-link">See who has left →</span>
        </a>
        <a class="bb-related-card" href="/bigg-boss-20-finale/">
          <span class="bb-related-emoji">🏁</span>
          <h3>Bigg Boss 20 Finale</h3>
          <p>The finale date position, the finalist race and how the winner is decided.</p>
          <span class="bb-related-link">Read the finale guide →</span>
        </a>
      </div>
    </section>

    <p class="bb-footer-note">VisitBest editorial page · Bigg Boss 20 airs on Colors TV and streams on JioHotstar. All standings on this page are from the VisitBest Open Poll — audience sentiment only, not official votes or results.</p>
  </div>`;
}

export function renderBiggBossFinalePage(poll) {
  const finalistIds = ["qazi-touqeer", "yung-dsa", "scout", "arishfa-khan", "kanika-mann"];
  const otherIds = ["gullu", "uditi-singh", "love-gill", "mahhi-vij", "amrapali-dubey", "manish-goel"];
  const cases = {
    "qazi-touqeer": "VisitBest's predicted winner — the season's entertainer-in-chief and the Open Poll's season leader.",
    "yung-dsa": "The predicted runner-up — the late surge, the loyalty stands, the house's conscience.",
    scout: "The gamer with the biggest outside army — playing every remaining week under a season-long nomination.",
    "arishfa-khan": "The strategist — a captaincy, a stand in the season's biggest fight, and a finale-week game still to come.",
    "kanika-mann": "The quiet climber — tasks won, the fewest enemies in the house, support that has only grown.",
  };
  const finalistRows = finalistIds
    .map((id, i) => {
      const c = contestantById.get(id);
      return `
            <tr>
              <td data-label="Predicted Finish"><strong>#${i + 1}</strong></td>
              <td data-label="Finalist"><div class="bb-table-contestant"><img class="bb-table-avatar" src="${c.image}" alt="${c.name}" loading="lazy" decoding="async"><span>${c.name}</span></div></td>
              <td data-label="The Case">${cases[id]}</td>
            </tr>`;
    })
    .join("");
  const winnerRows = [
    ["Season 19 (2025)", "Gaurav Khanna", "Farrhana Bhatt", "7 December 2025"],
    ["Season 18", "Karan Veer Mehra", "Vivian Dsena", "19 January 2025"],
    ["Season 17", "Munawar Faruqui", "Abhishek Kumar", "28 January 2024"],
    ["Season 16", "MC Stan", "Shiv Thakare", "12 February 2023"],
    ["Season 15", "Tejasswi Prakash", "Pratik Sehajpal", "30 January 2022"],
  ]
    .map(
      (r) => `
            <tr>
              <td data-label="Season"><strong>${r[0]}</strong></td>
              <td data-label="Winner">${r[1]}</td>
              <td data-label="Runner-up">${r[2]}</td>
              <td data-label="Finale Date">${r[3]}</td>
            </tr>`,
    )
    .join("");
  const finaleFaqs = [
    {
      q: "When is the Bigg Boss 20 finale?",
      a: "The date has not been officially announced yet. On the season's arithmetic — a 6 September 2026 premiere and recent Hindi seasons running about 15–16 weeks — the finale is expected in late December 2026. That is an expectation, not a confirmed date, and this page will carry the date at the top the day the makers announce it.",
    },
    {
      q: "How is the Bigg Boss 20 winner decided?",
      a: "By the official public vote in the finale window announced on air, on JioCinema / JioHotstar and as announced during the show. On finale night, host Salman Khan announces the winner live. VisitBest's Open Polls and predictions play no part in the official result.",
    },
    {
      q: "How many finalists will there be?",
      a: "The show's final week usually features a small group of finalists — between three and six housemates in the format's history. VisitBest's predicted top 5 on this page is an editorial ranking of the current race, not the confirmed finalist list.",
    },
    {
      q: "What does the winner get?",
      a: "The trophy and the Bigg Boss 20 title. The winner's prize has not been announced for this season — the makers confirm it closer to the finale, and this page will add it when they do.",
    },
    {
      q: "Where can I watch the finale?",
      a: "On Colors TV and streaming on JioHotstar, as announced by the makers. The exact finale-night schedule is published by the channel closer to the date.",
    },
    {
      q: "Who are the favourites right now?",
      a: "VisitBest's predicted final five are Qazi Touqeer, Yung DSA, ScoutOP, Arishfa Khan and Kanika Mann — the finalist race section above explains the order, and the winner page carries the full case for each of them. Predictions and Open Poll sentiment are not the official result.",
    },
  ];
  return `
  <div class="bb-wrap">
    ${renderPollPills(poll.slug)}
    <nav class="bb-breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> <span>›</span> <a href="/bigg-boss-20-voting/">Bigg Boss 20 Voting</a> <span>›</span> <span>Finale</span>
    </nav>

    <header class="bb-hero-section">
      <span class="bb-hero-badge">${poll.heroBadge}</span>
      <h1 class="bb-hero-title">${poll.h1}</h1>
      <p class="bb-hero-lead">${poll.lead}</p>
    </header>

    ${bbCoverFigure(poll.coverImage, poll.coverAlt)}

    ${storySection(
      "Finale Date",
      "The finale date has not been announced — here is the expected window",
      `<p><strong>The Bigg Boss 20 finale date has not been officially announced.</strong> As of 19 November 2026, Colors TV and the makers have not confirmed any date, and no specific date shared anywhere should be treated as official until they do.</p>
      <p><strong>The expected window — expectation, not confirmation:</strong> Bigg Boss 20 premiered on 6 September 2026. The last three completed Hindi seasons ran 105 to 107 days each (Season 17: 106 days, Season 18: 107 days, Season 19: 105 days), and recent seasons have run about 15–16 weeks in total. A run of that length from 6 September 2026 ends between about 20 and 27 December 2026 — so the finale is <strong>expected in late December 2026</strong>, most likely on a weekend night, in line with recent seasons. If this season runs longer or shorter, the window moves with it.</p>
      <p>When the makers announce the date — on air and on Colors TV / JioHotstar — this page will carry it at the top. Until then, treat every exact date you see on social media as a guess.</p>`,
    )}

    ${storySection(
      "The Format",
      "How the finale works",
      `<p>The season ends with a final week. By then the house is down to a small group of finalists — between three and six housemates in the show's format — and the last evictions, often including mid-week exits inside the final week itself, settle who they are.</p>
      <p>Through finale week, the public votes for the housemate they want to win, on JioCinema / JioHotstar in the windows announced on air. On finale night the finalists are brought down through the evening to the last two, and host Salman Khan announces the winner live, decided by that official vote.</p>
      <p>The winner takes the trophy and the title. The prize position for this season is covered in the prize section below — nothing about it is confirmed yet.</p>`,
    )}

    ${storySection(
      "From Here to the Finale",
      "The road from here — eleven left, six exits to a top 5",
      `<p>Eleven housemates remain in the house. The Week 11 result comes at Weekend Ka Vaar on 21–22 November 2026, with ten housemates nominated and only the captain, Uditi Singh, safe.</p>
      <p>A top-5 finale means six more housemates must leave after this week. On the expected late-December window there are roughly four to five eviction weekends left — fewer weekends than the exits needed — so double evictions and mid-week evictions are the usual pattern the show uses to get the house down in time. Twists can change that arithmetic at any point, and one housemate's road is already fixed: ScoutOP is nominated every remaining week under his Episode 68 punishment, so his survival runs through the public vote every single week.</p>
      <p>Track who has already gone on the <a href="/bigg-boss-20-eviction-list/">eviction list</a>, and the week-by-week picture on the <a href="/bigg-boss-20-voting/">voting hub</a>.</p>`,
    )}

    <section class="bb-section leaderboard-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">The Finalist Race</span>
        <h2>The predicted final five — and the six chasing them</h2>
        <p class="bb-section-sub">VisitBest's predicted finishing order, from the Top 5 Contestants page. It is an editorial prediction, updated as the season moves — not the confirmed finalist list.</p>
      </div>
      <div class="bb-leaderboard-wrap">
        <table class="bb-leaderboard-table">
          <thead>
            <tr><th>Predicted Finish</th><th>Finalist</th><th>The Case</th></tr>
          </thead>
          <tbody>${finalistRows}
          </tbody>
        </table>
      </div>
      <p class="bb-small">The other six still in the race — any of them can break into the five with one big week:</p>
      ${renderPortraitStrip(otherIds)}
      <p class="bb-small">Read the full cases on <a href="/who-will-win-bigg-boss-20/">Who Will Win Bigg Boss 20</a> and <a href="/bigg-boss-20-top-5-contestants/">Bigg Boss 20 Top 5 Contestants</a>.</p>
    </section>

    <section class="bb-section leaderboard-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">Past Winners</span>
        <h2>The last five champions the winner will join</h2>
        <p class="bb-section-sub">The five most recent completed Hindi seasons of Bigg Boss, their winners and their finale dates.</p>
      </div>
      <div class="bb-leaderboard-wrap">
        <table class="bb-leaderboard-table">
          <thead>
            <tr><th>Season</th><th>Winner</th><th>Runner-up</th><th>Finale Date</th></tr>
          </thead>
          <tbody>${winnerRows}
          </tbody>
        </table>
      </div>
      <p class="bb-small">Winners, runners-up and finale dates from Wikipedia's Bigg Boss (Hindi TV series) series table, checked on 19 November 2026.</p>
    </section>

    ${storySection(
      "The Prize",
      "The Bigg Boss 20 prize — not announced yet",
      `<p>The Bigg Boss 20 winner's prize has not been announced. The makers confirm the prize closer to the finale, and no figure for this season has been confirmed by reliable sources — so this page prints none, rather than repeat a guessed number.</p>
      <p>What the winner certainly takes is the trophy and the Bigg Boss 20 title. When the prize is announced on air, it will be added here.</p>`,
    )}

    <section class="bb-section bb-faq-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">FAQ</span>
        <h2>Finale — frequently asked questions</h2>
      </div>
      <div class="bb-faq-grid">
        ${finaleFaqs
          .map(
            (f) => `
        <div class="bb-faq-item">
          <details>
            <summary>${f.q}</summary>
            <p>${f.a}</p>
          </details>
        </div>`,
          )
          .join("")}
      </div>
    </section>

    <section class="bb-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">Keep Reading</span>
        <h2>More Bigg Boss 20 on VisitBest</h2>
      </div>
      <div class="bb-related-grid">
        <a class="bb-related-card" href="/who-will-win-bigg-boss-20/">
          <span class="bb-related-emoji">🏆</span>
          <h3>Who Will Win Bigg Boss 20?</h3>
          <p>The winner prediction, the finalist cases and the winner-race Open Poll.</p>
          <span class="bb-related-link">Read the prediction →</span>
        </a>
        <a class="bb-related-card" href="/bigg-boss-20-top-5-contestants/">
          <span class="bb-related-emoji">🔝</span>
          <h3>Top 5 Contestants</h3>
          <p>The predicted final five, the full house table and how the ranking was made.</p>
          <span class="bb-related-link">See the top 5 →</span>
        </a>
        <a class="bb-related-card" href="/bigg-boss-20-voting/">
          <span class="bb-related-emoji">🗳️</span>
          <h3>Bigg Boss 20 Voting Hub</h3>
          <p>Vote in the season Open Poll and follow the week-by-week archives.</p>
          <span class="bb-related-link">Open the hub →</span>
        </a>
        <a class="bb-related-card" href="/bigg-boss-20-voting-trend/">
          <span class="bb-related-emoji">📈</span>
          <h3>Voting Trend Today</h3>
          <p>Today's Open Poll standings across the week, the season and the winner race.</p>
          <span class="bb-related-link">See today's trend →</span>
        </a>
        <a class="bb-related-card" href="/bigg-boss-20-eviction-list/">
          <span class="bb-related-emoji">🚪</span>
          <h3>Eviction List</h3>
          <p>Every eviction of the season so far, week by week.</p>
          <span class="bb-related-link">See who has left →</span>
        </a>
      </div>
    </section>

    <p class="bb-footer-note">VisitBest editorial page · Bigg Boss 20 airs on Colors TV and streams on JioHotstar. The finale date on this page is an expectation from the season's run, not an official announcement.</p>
  </div>`;
}


// All-seasons voting hub (entry 405): season grid data + hub sections + hub FAQ.
// Winners and season years are the official results, verified against the
// "Series details" table of Wikipedia's Bigg Boss (Hindi TV series) article
// (fetched 19 November 2026); Seasons 13–19 were additionally cross-checked
// against the batch-1 season research and the entry 403 winners table.
// Only the Season 20 card links anywhere today — the per-season voting pages
// ship in later packs, which add their links to this grid as they go live.
// (Entry 408+409 rebase: Seasons 17 and 19 now carry links — their voting
// pages ship in this pack; the rest still open one by one.)
// (Entries 410+411: Seasons 16 and 13 now carry links too.)
// (Entry 412: Season 18 now carries a link too.)
// (Entries 416+417: Seasons 15 and 14 now carry links too.)
// (Entries 418+419: Seasons 12 and 11 now carry links too.)
const VOTING_HUB_SEASONS = [
  { season: 1, years: "2006–07", winner: "Rahul Roy" },
  { season: 2, years: "2008", winner: "Ashutosh Kaushik" },
  { season: 3, years: "2009", winner: "Vindu Dara Singh" },
  { season: 4, years: "2010–11", winner: "Shweta Tiwari" },
  { season: 5, years: "2011–12", winner: "Juhi Parmar" },
  { season: 6, years: "2012–13", winner: "Urvashi Dholakia" },
  { season: 7, years: "2013", winner: "Gauahar Khan" },
  {
    season: 8,
    years: "2014–15",
    winner: "Gautam Gulati",
    note: "Season 8 ran into the Bigg Boss Halla Bol extension, where Gautam Gulati was declared the winner on 31 January 2015.",
  },
  { season: 9, years: "2015–16", winner: "Prince Narula" },
  { season: 10, years: "2016–17", winner: "Manveer Gurjar" },
  { season: 11, years: "2017–18", winner: "Shilpa Shinde", link: "/bigg-boss-11-voting/" },
  { season: 12, years: "2018", winner: "Dipika Kakar", link: "/bigg-boss-12-voting/" },
  { season: 13, years: "2019–20", winner: "Sidharth Shukla", link: "/bigg-boss-13-voting/" },
  { season: 14, years: "2020–21", winner: "Rubina Dilaik", link: "/bigg-boss-14-voting/" },
  { season: 15, years: "2021–22", winner: "Tejasswi Prakash", link: "/bigg-boss-15-voting/" },
  { season: 16, years: "2022–23", winner: "MC Stan", link: "/bigg-boss-16-voting/" },
  { season: 17, years: "2023–24", winner: "Munawar Faruqui", link: "/bigg-boss-17-voting/" },
  { season: 18, years: "2024–25", winner: "Karan Veer Mehra", link: "/bigg-boss-18-voting/" },
  { season: 19, years: "2025", winner: "Gaurav Khanna", link: "/bigg-boss-19-voting/" },
];

function renderVotingHubSections() {
  const week11 = pollBySlug.get("bigg-boss-20-voting-week-11");
  const winnerRace = pollBySlug.get("who-will-win-bigg-boss-20");
  const w11 = getPollStats(week11);
  const win = getPollStats(winnerRace);
  const fmt = (n) => n.toLocaleString("en-IN");
  const w11Leader = w11.list[0];
  const winLeader = win.list[0];
  const seasonCards = [...VOTING_HUB_SEASONS]
    .reverse()
    .map((s) =>
      s.link
        ? `
      <a class="bb-step-card" href="${s.link}" style="display:block;text-decoration:none;color:inherit;">
        <div class="bb-step-num">S${s.season}</div>
        <h3>Season ${s.season} · ${s.years}</h3>
        <p>Winner: <strong>${s.winner}</strong></p>
        ${s.note ? `<p>${s.note}</p>` : ""}
        <p style="margin-top:0.5rem;"><strong>Open the Season ${s.season} voting page →</strong></p>
      </a>`
        : `
      <div class="bb-step-card">
        <div class="bb-step-num">S${s.season}</div>
        <h3>Season ${s.season} · ${s.years}</h3>
        <p>Winner: <strong>${s.winner}</strong></p>
        ${s.note ? `<p>${s.note}</p>` : ""}
        <p style="margin-top:0.5rem;">Season voting page — coming soon</p>
      </div>`,
    )
    .join("");
  return (
    storySection(
      "Voting Results Today",
      "Bigg Boss 20 voting results today — as the Open Polls stand",
      `<p>Two VisitBest Open Polls are live for Bigg Boss 20 right now. These are their leaders as the standings stand — VisitBest Open Poll numbers only, updated as readers vote. They are audience sentiment, not the show's official count: the Week 11 eviction itself is decided by the official vote and announced at Weekend Ka Vaar (21–22 November 2026).</p>
      <div class="bb-steps-grid">
        <div class="bb-step-card">
          <div class="bb-step-num">W11</div>
          <h3>Week 11 eviction poll — ${w11Leader.name} leads</h3>
          <p>${fmt(w11Leader.votes)} Open Poll votes (${w11Leader.pctStr} of ${fmt(w11.total)} cast so far). <a href="/bigg-boss-20-voting-week-11/"><strong>Vote in the Week 11 Open Poll →</strong></a></p>
        </div>
        <div class="bb-step-card">
          <div class="bb-step-num">🏆</div>
          <h3>Winner race — ${winLeader.name} leads</h3>
          <p>${fmt(winLeader.votes)} Open Poll votes (${winLeader.pctStr} of ${fmt(win.total)}) in the who-will-win poll. <a href="/who-will-win-bigg-boss-20/"><strong>See the winner prediction →</strong></a></p>
        </div>
      </div>
      <p style="margin-top:1rem;">Full standings across the week, the season and the winner race: <a href="/bigg-boss-20-voting-trend/">today's voting trend</a> · <a href="/bigg-boss-20-voting/">the Bigg Boss 20 voting hub</a>.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "Vote by Season",
      "Bigg Boss voting by season — every season, every winner",
      `<p>One voting page per season. Season 20 is live now, and the finished-season pages for Bigg Boss 19, Bigg Boss 18, Bigg Boss 17, Bigg Boss 16, Bigg Boss 15, Bigg Boss 14, Bigg Boss 13, Bigg Boss 12 and Bigg Boss 11 are open below; the rest open one by one, each carrying its official winner, its story and a fan re-vote Open Poll — because a finished season's official vote can never reopen, the re-vote is where fans say who should have won. The winners below are the winners declared on the show — the real results of each season.</p>
      <div class="bb-steps-grid">
        <a class="bb-step-card" href="/bigg-boss-20-voting/" style="display:block;text-decoration:none;color:inherit;">
          <div class="bb-step-num">S20</div>
          <h3>Season 20 · 2026 — LIVE NOW</h3>
          <p>The current season, hosted by Salman Khan. The Week 11 Open Poll is open and the winner is decided at the finale.</p>
          <p style="margin-top:0.5rem;"><strong>Open the Bigg Boss 20 voting hub →</strong></p>
        </a>
        ${seasonCards}
      </div>
      <p style="margin-top:1rem;">The Bigg Boss OTT seasons have their own voting pages too, and all three are live now: <a href="/bigg-boss-ott-1-voting/"><strong>Bigg Boss OTT 1</strong></a> · <a href="/bigg-boss-ott-2-voting/"><strong>Bigg Boss OTT 2</strong></a> · <a href="/bigg-boss-ott-3-voting/"><strong>Bigg Boss OTT 3</strong></a> — each with its official result, its finalists and a fan re-vote Open Poll.</p>`,
    ) +
    storySection(
      "How Voting Works",
      "How Bigg Boss voting works — the official vote and the Open Poll",
      `<p><strong>The official vote.</strong> While a season is running, the week's nominated housemates are put to a public vote on the show's official platform — JioCinema / JioHotstar — inside a window announced on air during the episode. The housemate with the fewest official votes is evicted at Weekend Ka Vaar, subject to any twists the show itself announces, such as lifelines. Only votes cast in the official app, inside the announced window, count towards the result.</p>
      <p><strong>When a season ends, its official vote closes for good.</strong> There is no official way to vote for Bigg Boss 17, Bigg Boss 13 or any other finished season today — those results are final. That is why the past-season pages being built on VisitBest carry fan re-vote Open Polls instead: a clearly labelled way for fans to say who they think should have won.</p>
      <p><strong>VisitBest Open Polls.</strong> Every poll on this site — the Ultimate Vote at the top of this page, the Bigg Boss 20 polls, and each season's re-vote as its page opens — is an audience sentiment poll run by VisitBest for entertainment and discussion. Open Poll numbers are not official votes, do not decide nominations or evictions, and are not published or endorsed by the show.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    `
    <section class="bb-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">Keep Reading</span>
        <h2>Bigg Boss 20 voting on VisitBest</h2>
      </div>
      <div class="bb-related-grid">
        <a class="bb-related-card" href="/bigg-boss-20-voting/">
          <span class="bb-related-emoji">🗳️</span>
          <h3>Bigg Boss 20 Voting Hub</h3>
          <p>The season Open Poll, this week's panel, the prediction scorecard and the archives.</p>
          <span class="bb-related-link">Open the hub →</span>
        </a>
        <a class="bb-related-card" href="/bigg-boss-20-voting-trend/">
          <span class="bb-related-emoji">📈</span>
          <h3>Voting Trend Today</h3>
          <p>Today's Open Poll standings across the week, the season and the winner race.</p>
          <span class="bb-related-link">See today's trend →</span>
        </a>
        <a class="bb-related-card" href="/who-will-win-bigg-boss-20/">
          <span class="bb-related-emoji">🏆</span>
          <h3>Who Will Win Bigg Boss 20?</h3>
          <p>The winner prediction, the finalist cases and the winner-race Open Poll.</p>
          <span class="bb-related-link">Read the prediction →</span>
        </a>
        <a class="bb-related-card" href="/bigg-boss-20-top-5-contestants/">
          <span class="bb-related-emoji">🔝</span>
          <h3>Top 5 Contestants</h3>
          <p>The predicted final five, the full house table and how the ranking was made.</p>
          <span class="bb-related-link">See the top 5 →</span>
        </a>
        <a class="bb-related-card" href="/bigg-boss-20-finale/">
          <span class="bb-related-emoji">🏁</span>
          <h3>Bigg Boss 20 Finale</h3>
          <p>The expected finale window, how the winner is decided and the past winners.</p>
          <span class="bb-related-link">See the finale page →</span>
        </a>
      </div>
    </section>`
  );
}

function renderVotingHubFaq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is official Bigg Boss voting open right now?</summary>
        <div class="bb-faq-body">
          <p>For the current season, Bigg Boss 20, official voting opens only in the weekly windows announced on air, and only on JioCinema / JioHotstar. For every finished season — Seasons 1 to 19 — official voting is closed permanently, because those seasons are over and their results are final. The polls that are always open on VisitBest are our Open Polls, which are audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the Bigg Boss Ultimate Vote?</summary>
        <div class="bb-faq-body">
          <p>It is the all-time fan poll at the top of this page: ten past Bigg Boss winners — from Gauahar Khan (Season 7) to Gaurav Khanna (Season 19) — and readers pick the greatest winner of all time. It is a VisitBest Open Poll, run for entertainment and discussion. It is not an official vote, not an official all-time ranking by the show, and it changes nothing about any season's real result.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Where do I vote for this week's Bigg Boss 20 eviction?</summary>
        <div class="bb-faq-body">
          <p>For the Open Poll, use the <a href="/bigg-boss-20-voting/">Bigg Boss 20 voting hub</a> or the <a href="/bigg-boss-20-voting-week-11/">Week 11 voting page</a> — both are free and take a few seconds. The vote that actually decides the eviction is the official vote on JioCinema / JioHotstar, cast inside the window announced on air.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Can I still vote officially for a finished season, like Bigg Boss 17?</summary>
        <div class="bb-faq-body">
          <p>No. A season's official voting closes when the season ends, and it never reopens — Bigg Boss 17's result is final: Munawar Faruqui won it. What you can do on VisitBest is vote in the fan polls: the Ultimate Vote at the top of this page, and Season 17's own re-vote Open Poll on the <a href="/bigg-boss-17-voting/">Bigg Boss 17 voting page</a>.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Polls — free audience sentiment polls run by this website. They are not official votes and not official results. The season winners named in the grid above are the real results, as declared on the show; everything else here is reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}


// ---------- Past-season voting pages (entries 408 + 409) ----------
// Bigg Boss 17 (entry 408) and Bigg Boss 19 (entry 409) fan re-vote pages.
// Every fact below comes from the season research files, verified against
// the seasons' Wikipedia articles (see the packs' sources.md): S17 facts in
// ~/workspace/bb-seasons/batch1-17-16-13/s17/facts.md, S19 facts in
// ~/workspace/bb-seasons/batch2-19-18/s19/facts.md. No prize figure appears
// on the Season 17 page — none is Wikipedia-verified for that season. The
// Season 19 prize (₹50 lakh) IS stated by Wikipedia and is included.

function renderSeasonFinalistCards(finalists) {
  return `<div class="bb-steps-grid">
      ${finalists
        .map(
          (f) => `
      <div class="bb-step-card">
        <img src="${f.image}" alt="${f.name}" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;border-radius:8px;margin-bottom:0.75rem;">
        <h3>${f.name}</h3>
        <p><strong>${f.placing}</strong></p>
        <p>${f.story}</p>
      </div>`,
        )
        .join("")}
      </div>`;
}

function renderSeasonResultTable(rows) {
  return `<div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Placing</th><th>Finalist</th></tr>
        </thead>
        <tbody>
          ${rows.map(([placing, name]) => `<tr><td>${placing}</td><td><strong>${name}</strong></td></tr>`).join("")}
        </tbody>
      </table>
      </div>`;
}

function renderSeasonEvictionTable(rows) {
  return `<div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>#</th><th>Housemate</th><th>Day</th><th>Note</th></tr>
        </thead>
        <tbody>
          ${rows.map(([name, day, note], i) => `<tr><td>${i + 1}</td><td><strong>${name}</strong></td><td>Day ${day}</td><td>${note || "Evicted"}</td></tr>`).join("")}
        </tbody>
      </table>
      </div>`;
}

function renderSeasonMoments(moments) {
  return `<div class="bb-steps-grid">
      ${moments
        .map(
          (m, i) => `
      <div class="bb-step-card">
        <div class="bb-step-num">${i + 1}</div>
        <h3>${m.title}</h3>
        <p>${m.text}</p>
      </div>`,
        )
        .join("")}
      </div>`;
}

function renderSeasonLinksRow(cards) {
  return `
    <section class="bb-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">Keep Reading</span>
        <h2>More Bigg Boss voting on VisitBest</h2>
      </div>
      <div class="bb-related-grid">
        ${cards
          .map(
            (c) => `
        <a class="bb-related-card" href="${c.href}">
          <span class="bb-related-emoji">${c.emoji}</span>
          <h3>${c.title}</h3>
          <p>${c.text}</p>
          <span class="bb-related-link">${c.linkText}</span>
        </a>`,
          )
          .join("")}
      </div>
    </section>`;
}

// ---------- Bigg Boss 17 (entry 408) ----------

const SEASON17_FINALISTS = [
  {
    name: "Munawar Faruqui",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s17-munawar-faruqui.webp",
    story:
      "Munawar Faruqui won Bigg Boss 17 on finale night, 28 January 2024, closing a 105-day season that began with 21 housemates. He came through the season's Dil, Dimaag aur Dum format — a house split into three themed makaans, where Bigg Boss himself played the game — to take the trophy at the end of the longest finale telecast in the show's history.",
  },
  {
    name: "Abhishek Kumar",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s17-abhishek-kumar.webp",
    story:
      "Abhishek Kumar had the most dramatic arc of any finalist: he was ejected on Day 84 — and brought back the same day. From there he rebuilt his game, reached the finale and finished as first runner-up, behind only Munawar Faruqui.",
  },
  {
    name: "Mannara Chopra",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s17-mannara-chopra.webp",
    story:
      "Mannara Chopra reached the final five of a 21-housemate season and finished as second runner-up on finale night, 28 January 2024 — third in the final order, ahead of Ankita Lokhande and Arun Srikanth Mashettey.",
  },
  {
    name: "Ankita Lokhande",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s17-ankita-lokhande.webp",
    story:
      "Ankita Lokhande finished as third runner-up in the Day 105 finale — fourth in the final order of a season that ran 105 days from its 15 October 2023 premiere.",
  },
  {
    name: "Arun Srikanth Mashettey",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/s17-arun-mashettey.webp",
    story:
      "Arun Srikanth Mashettey completed the final five, finishing as fourth runner-up when the finale order was declared on Day 105, 28 January 2024.",
  },
];

const SEASON17_EVICTIONS = [
  ["Soniya Bansal", 13, "Evicted by housemates"],
  ["Manasvi Mamgai", 20, "Wild-card entrant"],
  ["Navid Sole", 37, "Evicted by housemates"],
  ["Jigna Vora", 41, ""],
  ["Sunny Arya", 48, "Ejected"],
  ["Sana Raees Khan", 55, ""],
  ["Firoza Khan (Khanzaadi)", 62, ""],
  ["Aishwarya Sharma", 70, "Evicted by the captain"],
  ["Neil Bhatt", 77, ""],
  ["Rinku Dhawan", 77, ""],
  ["Anurag Dobhal", 79, "Evicted by housemates"],
  ["Aoora", 84, ""],
  ["Samarth Jurel", 90, ""],
  ["Ayesha Khan", 98, "Had walked out on Day 77 and returned on Day 78"],
  ["Isha Malviya", 98, ""],
  ["Vicky Jain", 101, ""],
];

const SEASON17_MOMENTS = [
  {
    title: "Dil, Dimaag aur Dum",
    text: "The house was split into three themed makaans — Dil, Dimaag and Dum — and Bigg Boss himself played the game this season, forming alliances and showing favouritism.",
  },
  {
    title: "New rooms, record cameras",
    text: "The season introduced an Archive Room, where selected housemates could watch house footage, and a Therapy Room in the Dil makaan. With 110 cameras, the house had the highest camera count of any season to that point.",
  },
  {
    title: "Two ejections, one comeback",
    text: "Sunny Arya was ejected on Day 48. Abhishek Kumar was ejected on Day 84 — and brought back the same day, going on to finish as first runner-up.",
  },
  {
    title: "Karan Johar stepped in",
    text: "Karan Johar hosted Weekend Ka Vaar in Weeks 7 and 13 in Salman Khan's absence, and a new Sunday segment — Just Chill with Arbaaz & Sohail — also ran this season.",
  },
  {
    title: "The longest finale",
    text: "The grand finale aired for 6 hours, 35 minutes and 36 seconds — 6 pm to 12:35 am — described as a first in Bigg Boss history.",
  },
];

function renderSeason17Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 17 result — Munawar Faruqui won the season",
      `<p>Bigg Boss 17 — styled <em>Dil, Dimaag aur Dum Ka Game</em> — ran from <strong>15 October 2023</strong> to the finale on <strong>28 January 2024</strong>: 105 days, 21 housemates, hosted by Salman Khan on Colors TV and JioCinema. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Munawar Faruqui"],
        ["1st runner-up", "Abhishek Kumar"],
        ["2nd runner-up", "Mannara Chopra"],
        ["3rd runner-up", "Ankita Lokhande"],
        ["4th runner-up", "Arun Srikanth Mashettey"],
      ])}
      <p style="margin-top:1rem;">That result is final. Bigg Boss 17's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 17 final five",
      renderSeasonFinalistCards(SEASON17_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 17 eviction order — who left, and when",
      `<p>Sixteen housemates left before the finale, in this order (from the season's record):</p>
      ${renderSeasonEvictionTable(SEASON17_EVICTIONS)}
      <p style="margin-top:1rem;">The finale followed on Day 105: Arun Srikanth Mashettey left as fourth runner-up, then Ankita Lokhande (third runner-up), Mannara Chopra (second runner-up) and Abhishek Kumar (first runner-up), before Munawar Faruqui was declared the winner. Among the finalists, Abhishek Kumar's Day 84 ejection and same-day return stands out in this table's story.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 17 story — the season's defining moments",
      renderSeasonMoments(SEASON17_MOMENTS),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-19-voting/",
        emoji: "🏛️",
        title: "Bigg Boss 19 Voting",
        text: "Gaurav Khanna's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 19 page →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderSeason17Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 17 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 17 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 17 voting closed when the season ended with the finale on 28 January 2024, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 17?</summary>
        <div class="bb-faq-body">
          <p>Munawar Faruqui won Bigg Boss 17. The final order was: Abhishek Kumar (first runner-up), Mannara Chopra (second runner-up), Ankita Lokhande (third runner-up) and Arun Srikanth Mashettey (fourth runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 17 finalists?</summary>
        <div class="bb-faq-body">
          <p>The five finalists were Munawar Faruqui, Abhishek Kumar, Mannara Chopra, Ankita Lokhande and Arun Srikanth Mashettey. The season ran from 15 October 2023 to 28 January 2024 — 105 days and 21 housemates, hosted by Salman Khan on Colors TV and JioCinema.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 17. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The winner and finalist order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}


// ---------- Bigg Boss 19 (entry 409) ----------

const SEASON19_FINALISTS = [
  {
    name: "Gaurav Khanna",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s19-gaurav-khanna.webp",
    story:
      "Gaurav Khanna won Bigg Boss 19 on 7 December 2025, taking the trophy and the ₹50 lakh cash prize at the end of the 105-day Gharwalon Ki Sarkaar season. He topped the final five, ahead of Farrhana Bhatt in the finale order.",
  },
  {
    name: "Farrhana Bhatt",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s19-farrhana-bhatt.webp",
    story:
      "Farrhana Bhatt's season began with its sharpest twist: evicted by the housemates on the very first day, she was sent to a secret room instead, re-entered the main house on Day 6 — and went all the way to first runner-up.",
  },
  {
    name: "Pranit More",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s19-pranit-more.webp",
    story:
      "Pranit More left the house on Day 70 and returned on Day 75 — and still finished as second runner-up, one of the season's defining comeback stories.",
  },
  {
    name: "Tanya Mittal",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s19-tanya-mittal.webp",
    story:
      "Tanya Mittal finished as third runner-up in the Day 105 finale — fourth in the final order of the 18-housemate season.",
  },
  {
    name: "Amaal Mallik",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/s19-amaal-mallik.webp",
    story:
      "Amaal Mallik completed the final five, finishing as fourth runner-up when the finale order was declared on 7 December 2025.",
  },
];

const SEASON19_EVICTIONS = [
  ["Nagma Mirajkar", 21, "Double eviction — the first of the season"],
  ["Natalia Janoszek", 21, "Double eviction"],
  ["Awez Darbar", 35, ""],
  ["Zeishan Quadri", 49, ""],
  ["Baseer Ali", 63, ""],
  ["Nehal Chudasama", 63, "First evicted on Day 28 into the secret room; re-entered on Day 32"],
  ["Abhishek Bajaj", 77, "Evicted by the Captain"],
  ["Neelam Giri", 77, "Evicted by the Captain"],
  ["Mridul Tiwari", 80, ""],
  ["Kunickaa Sadanand", 91, ""],
  ["Shehbaz Badesha", 98, ""],
  ["Ashnoor Kaur", 98, "Ejected"],
  ["Malti Chahar", 102, "Last pre-finale eviction"],
];

const SEASON19_MOMENTS = [
  {
    title: "Gharwalon Ki Sarkaar",
    text: "The season was styled as a parliament — Iss Baar Chalegi Gharwalon Ki Sarkaar — with an Assembly Room, and the housemates collectively holding power.",
  },
  {
    title: "Farrhana's Day 1 secret room",
    text: "Farrhana Bhatt was evicted by the housemates on the very first day — into a secret room. She re-entered the main house on Day 6 and went on to finish as first runner-up.",
  },
  {
    title: "Fans Ka Faisla",
    text: "A pre-show public vote decided the final launch-day place: Mridul Tiwari was voted in over Shehbaz Badesha, who then entered later as a wildcard on Day 14.",
  },
  {
    title: "Pranit walked out, came back",
    text: "Pranit More left the house on Day 70 and returned on Day 75, going on to finish as second runner-up.",
  },
  {
    title: "App Room and a guest host",
    text: "The App Room was introduced on Day 6, and Rohit Shetty guest-hosted the Weekend Ka Vaar episodes 84–85 in Week 12 in Salman Khan's absence. The season's record also notes it had the most successful debut in the show's history.",
  },
];

function renderSeason19Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 19 result — Gaurav Khanna won the season",
      `<p>Bigg Boss 19 — the <em>Gharwalon Ki Sarkaar</em> parliament season — ran from <strong>24 August 2025</strong> to the finale on <strong>7 December 2025</strong>: 105 days, 18 housemates, hosted by Salman Khan on Colors TV and JioHotstar. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Gaurav Khanna"],
        ["1st runner-up", "Farrhana Bhatt"],
        ["2nd runner-up", "Pranit More"],
        ["3rd runner-up", "Tanya Mittal"],
        ["4th runner-up", "Amaal Mallik"],
      ])}
      <p style="margin-top:1rem;"><strong>The winner's prize:</strong> Gaurav Khanna also took home a ₹50 lakh cash prize, as stated in the season's record and reported across the finale coverage.</p>
      <p>That result is final. Bigg Boss 19's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 19 final five",
      renderSeasonFinalistCards(SEASON19_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 19 eviction order — who left, and when",
      `<p>Thirteen housemates left before the finale, in this order (from the season's record):</p>
      ${renderSeasonEvictionTable(SEASON19_EVICTIONS)}
      <p style="margin-top:1rem;">The finale followed on Day 105: Amaal Mallik left as fourth runner-up, then Tanya Mittal (third runner-up), Pranit More (second runner-up) and Farrhana Bhatt (first runner-up), before Gaurav Khanna was declared the winner. Two of the finalists had left and returned mid-season: Farrhana Bhatt (secret room, Day 1 to Day 6) and Pranit More (out on Day 70, back on Day 75).</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 19 story — the season's defining moments",
      renderSeasonMoments(SEASON19_MOMENTS),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-17-voting/",
        emoji: "🎭",
        title: "Bigg Boss 17 Voting",
        text: "Munawar Faruqui's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 17 page →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderSeason19Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 19 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 19 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 19 voting closed when the season ended with the finale on 7 December 2025, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 19?</summary>
        <div class="bb-faq-body">
          <p>Gaurav Khanna won Bigg Boss 19. The final order was: Farrhana Bhatt (first runner-up), Pranit More (second runner-up), Tanya Mittal (third runner-up) and Amaal Mallik (fourth runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What was the Bigg Boss 19 prize money?</summary>
        <div class="bb-faq-body">
          <p>₹50 lakh. The season's record states that Gaurav Khanna also won a ₹50 lakh cash prize, and the same figure was reported across the finale coverage — Indian Express, Moneycontrol, News18, Pinkvilla, Economic Times and Hindustan Times.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 19 finalists?</summary>
        <div class="bb-faq-body">
          <p>The five finalists were Gaurav Khanna, Farrhana Bhatt, Pranit More, Tanya Mittal and Amaal Mallik. The season ran from 24 August 2025 to 7 December 2025 — 105 days and 18 housemates, hosted by Salman Khan on Colors TV and JioHotstar.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The winner and finalist order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}


// ---------- Past-season voting pages (entries 410 + 411) ----------
// Bigg Boss 16 (entry 410) and Bigg Boss 13 (entry 411) fan re-vote pages.
// Every fact below comes from the season research files, verified against
// the seasons' Wikipedia articles (see the pack's sources.md): S16 facts in
// ~/workspace/bb-seasons/batch1-17-16-13/s16/facts.md, S13 facts in
// ~/workspace/bb-seasons/batch1-17-16-13/s13/facts.md. No prize figure
// appears on either page: the Season 16 final figure is press-only and is
// not stated in Wikipedia, and no Season 13 figure is stated in Wikipedia
// at all (the moments that involved prize money are told without figures).
// The Season 13 finale date is conflicted inside Wikipedia itself (infobox
// and lead say the run ended 16 February 2020; finale-night press coverage
// is dated 15 February 2020), so the page always gives it in the hedged
// form "the night of 15–16 February 2020" and prints no season day count
// (the same article's 141-day infobox figure and its Day 140 table exits
// disagree). The renderers below reuse the shared season helpers defined
// with the entry 408/409 pages.

// ---------- Bigg Boss 16 (entry 410) ----------

const SEASON16_FINALISTS = [
  {
    name: "MC Stan",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s16-mc-stan.webp",
    story:
      "MC Stan (Altaf Tadavi) won Bigg Boss 16 on finale night, 12 February 2023, at the end of a five-hour grand finale that closed a 134-day season of 17 housemates — the 'Upside Down' season, styled Iss Baar Bigg Boss Khud Khelenge, in which Bigg Boss himself played the game.",
  },
  {
    name: "Shiv Thakare",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s16-shiv-thakare.webp",
    story:
      "Shiv Thakare finished as first runner-up in the Day 134 finale on 12 February 2023, behind only MC Stan in the final order.",
  },
  {
    name: "Priyanka Chahar Choudhary",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s16-priyanka-chahar-choudhary.webp",
    story:
      "Priyanka Chahar Choudhary finished as second runner-up. Her season also carried a public-vote honour: she won the season-long MyGlamm Face of the Season segment on Day 83 by public vote.",
  },
  {
    name: "Archana Gautam",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s16-archana-gautam.webp",
    story:
      "Archana Gautam had the wildest ride of any finalist: she was ejected on Day 40 — and returned on Day 42 — then went all the way to the finale, finishing as third runner-up.",
  },
  {
    name: "Shalin Bhanot",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/s16-shalin-bhanot.webp",
    story:
      "Shalin Bhanot completed the final five, finishing as fourth runner-up when the finale order was declared on Day 134, 12 February 2023. Earlier in the season he had given up the remaining prize money to bring Tina Datta back into the house.",
  },
];

const SEASON16_EVICTIONS = [
  ["Manya Singh", 21, ""],
  ["Gori Nagori", 42, ""],
  ["Gautam Singh Vig", 49, ""],
  ["Ankit Gupta", 84, "Evicted by housemates"],
  ["Vikkas Manaktala", 91, "Wild-card entrant"],
  ["Sreejita De", 105, "First evicted on Day 14; re-entered on Day 63"],
  ["Sajid Khan", 105, "Walked"],
  ["Abdu Rozik", 105, "Walked"],
  ["Soundarya Sharma", 112, "Evicted by housemates"],
  ["Tina Datta", 118, "First evicted on Day 70; re-entered on Day 71"],
  ["Sumbul Touqeer", 125, ""],
  ["Nimrit Kaur Ahluwalia", 131, ""],
];

const SEASON16_MOMENTS = [
  {
    title: "Bigg Boss khud khelenge",
    text: "Under the 'Upside Down' concept, Bigg Boss himself played the game this season. The circus-themed house had four bedrooms and, for the first time, a private jacuzzi for the captain.",
  },
  {
    title: "Format firsts",
    text: "The first Bigg Boss Anthem replaced the usual morning wake-up songs, a new Sunday segment — Bigg Bulletin with Shekhar Suman — launched, and evictions moved to Saturdays for the first time.",
  },
  {
    title: "The prize money became a game piece",
    text: "Housemates repeatedly traded chunks of the prize pot to save nominated contestants, and Shalin Bhanot gave up the remaining prize money to bring Tina Datta back into the house.",
  },
  {
    title: "MyGlamm Face of the Season",
    text: "Priyanka Chahar Choudhary won the season-long MyGlamm Face of the Season segment on Day 83 by public vote, along with an ad shoot with Shraddha Kapoor.",
  },
  {
    title: "A dog in the house",
    text: "Maahim, a St. Bernard, was sent into the house on Day 87 and stayed until the finale.",
  },
];

function renderSeason16Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 16 result — MC Stan won the season",
      `<p>Bigg Boss 16 — styled <em>Bigg Boss: Iss Baar Bigg Boss Khud Khelenge</em>, on the "Upside Down" concept — ran from <strong>1 October 2022</strong> to the finale on <strong>12 February 2023</strong>: 134 days, 17 housemates, hosted by Salman Khan on Colors TV and Voot. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "MC Stan"],
        ["1st runner-up", "Shiv Thakare"],
        ["2nd runner-up", "Priyanka Chahar Choudhary"],
        ["3rd runner-up", "Archana Gautam"],
        ["4th runner-up", "Shalin Bhanot"],
      ])}
      <p style="margin-top:1rem;">That result is final. Bigg Boss 16's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 16 final five",
      renderSeasonFinalistCards(SEASON16_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 16 eviction order — who left, and when",
      `<p>Twelve housemates left before the finale, in this order (from the season's record):</p>
      ${renderSeasonEvictionTable(SEASON16_EVICTIONS)}
      <p style="margin-top:1rem;">The finale followed on Day 134: Shalin Bhanot left as fourth runner-up, then Archana Gautam (third runner-up), Priyanka Chahar Choudhary (second runner-up) and Shiv Thakare (first runner-up), before MC Stan was declared the winner. Among the finalists, Archana Gautam's Day 40 ejection and Day 42 return stands out in this table's story.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 16 story — the season's defining moments",
      renderSeasonMoments(SEASON16_MOMENTS),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-13-voting/",
        emoji: "🌟",
        title: "Bigg Boss 13 Voting",
        text: "Sidharth Shukla's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 13 page →",
      },
      {
        href: "/bigg-boss-17-voting/",
        emoji: "🎭",
        title: "Bigg Boss 17 Voting",
        text: "Munawar Faruqui's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 17 page →",
      },
      {
        href: "/bigg-boss-19-voting/",
        emoji: "🏛️",
        title: "Bigg Boss 19 Voting",
        text: "Gaurav Khanna's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 19 page →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderSeason16Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 16 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 16 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 16 voting closed when the season ended with the finale on 12 February 2023, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 16?</summary>
        <div class="bb-faq-body">
          <p>MC Stan won Bigg Boss 16. The final order was: Shiv Thakare (first runner-up), Priyanka Chahar Choudhary (second runner-up), Archana Gautam (third runner-up) and Shalin Bhanot (fourth runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 16 finalists?</summary>
        <div class="bb-faq-body">
          <p>The five finalists were MC Stan, Shiv Thakare, Priyanka Chahar Choudhary, Archana Gautam and Shalin Bhanot. The season ran from 1 October 2022 to 12 February 2023 — 134 days and 17 housemates, hosted by Salman Khan on Colors TV and Voot.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 16. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The winner and finalist order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}


// ---------- Bigg Boss 13 (entry 411) ----------

const SEASON13_FINALISTS = [
  {
    name: "Sidharth Shukla",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s13-sidharth-shukla.webp",
    story:
      "Sidharth Shukla won Bigg Boss 13 in the finale on the night of 15–16 February 2020. His season included a mid-season hospital break — he was out of the house from Day 71 to Day 79 — and he returned to go on and win the season.",
  },
  {
    name: "Asim Riaz",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s13-asim-riaz.webp",
    story:
      "Asim Riaz finished as first runner-up in the finale, behind only Sidharth Shukla. Their rivalry defined the season — in Week 13, Rohit Shetty entered the house to sort out the differences between the two.",
  },
  {
    name: "Shehnaaz Gill",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s13-shehnaaz-gill.webp",
    story:
      "Shehnaaz Gill reached the final six of a 21-contestant season and finished as second runner-up in the finale on the night of 15–16 February 2020 — third in the final order, ahead of Rashami Desai, Arti Singh and Paras Chhabra.",
  },
  {
    name: "Rashami Desai",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s13-rashami-desai.webp",
    story:
      "Rashami Desai finished as third runner-up — after being evicted on Day 35 in the season's triple eviction and re-entering on Day 39.",
  },
  {
    name: "Arti Singh",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/s13-arti-singh.webp",
    story:
      "Arti Singh finished as fourth runner-up in the finale — fifth in the final order of the season's six finalists.",
  },
  {
    name: "Paras Chhabra",
    placing: "5th runner-up",
    image: "/assets/bb-seasons/s13-paras-chhabra.webp",
    story:
      "Paras Chhabra is recorded in the season's table as 'Walked, 5th runner-up': he left during the finale itself, before the last placings were declared.",
  },
];

const SEASON13_EVICTIONS = [
  ["Dalljiet Kaur", 14, ""],
  ["Koena Mitra", 15, ""],
  ["Abu Malik", 22, "Evicted by housemates"],
  ["Siddhartha Dey", 31, ""],
  ["Tehseen Poonawalla", 44, "Wild-card entrant"],
  ["Arhaan Khan", 92, "First evicted on Day 49; re-entered on Day 64"],
  ["Khesari Lal Yadav", 54, "Evicted by housemates"],
  ["Himanshi Khurana", 70, "Evicted by housemates"],
  ["Vikas Pathak (Hindustani Bhau)", 77, ""],
  ["Shefali Bagga", 99, "Evicted by housemates; first evicted on Day 35, re-entered on Day 64"],
  ["Madhurima Tuli", 112, "Ejected"],
  ["Shefali Jariwala", 119, ""],
  ["Vishal Aditya Singh", 133, ""],
  ["Mahira Sharma", 136, ""],
];

const SEASON13_MOMENTS = [
  {
    title: "An all-celebrity season",
    text: "The makers announced this season would feature only celebrity contestants, with no commoners. The house followed a 'Bigg Boss Museum' theme in Goregaon, and the season averaged a 2.1–2.5 TRP — described as one of the most watched and successful seasons ever.",
  },
  {
    title: "The winner's hospital break",
    text: "Sidharth Shukla was hospitalised mid-season — out of the house from Day 71 to Day 79 per the season's record — and returned to go on and win the season.",
  },
  {
    title: "The 'Tedha' twists",
    text: "Launch-day Bed Friend Forever (BFF) bed pairings (cancelled on Day 10 over legal issues), the returning Sultani Akhada segment, the BB Elite Club introduced in Week 16, and Connection Week in Week 18.",
  },
  {
    title: "A finalist walked out of the finale",
    text: "Paras Chhabra is recorded in the season's table as 'Walked, 5th runner-up', leaving during the finale before the last placings were declared.",
  },
  {
    title: "Rohit Shetty played peacemaker",
    text: "Rohit Shetty entered the house in Week 13 to sort out differences between Sidharth Shukla and Asim Riaz.",
  },
];

function renderSeason13Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 13 result — Sidharth Shukla won the season",
      `<p>Bigg Boss 13 — styled <em>Bigg Boss Tedha</em> — premiered on <strong>29 September 2019</strong> and closed with the finale on <strong>the night of 15–16 February 2020</strong>: 21 contestants, hosted by Salman Khan on Colors TV. The final order, as declared at the finale, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Sidharth Shukla"],
        ["1st runner-up", "Asim Riaz"],
        ["2nd runner-up", "Shehnaaz Gill"],
        ["3rd runner-up", "Rashami Desai"],
        ["4th runner-up", "Arti Singh"],
        ["5th runner-up", "Paras Chhabra"],
      ])}
      <p style="margin-top:1rem;">That result is final. Bigg Boss 13's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 13 final six",
      renderSeasonFinalistCards(SEASON13_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 13 eviction order — who left, and when",
      `<p>Fourteen housemates left before the finale, in this order (from the season's record):</p>
      ${renderSeasonEvictionTable(SEASON13_EVICTIONS)}
      <p style="margin-top:1rem;">One eviction week stands out: on Day 35, Devoleena Bhattacharjee, Rashami Desai and Shefali Bagga were all evicted together; Rashami Desai and Devoleena Bhattacharjee re-entered on Day 39, and Devoleena later walked on Day 63, with Vikas Gupta entering as her proxy on Day 70. The finale followed on the night of 15–16 February 2020: Paras Chhabra walked out as fifth runner-up, then Arti Singh (fourth runner-up), Rashami Desai (third runner-up), Shehnaaz Gill (second runner-up) and Asim Riaz (first runner-up), before Sidharth Shukla was declared the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 13 story — the season's defining moments",
      renderSeasonMoments(SEASON13_MOMENTS),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-16-voting/",
        emoji: "🎪",
        title: "Bigg Boss 16 Voting",
        text: "MC Stan's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 16 page →",
      },
      {
        href: "/bigg-boss-17-voting/",
        emoji: "🎭",
        title: "Bigg Boss 17 Voting",
        text: "Munawar Faruqui's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 17 page →",
      },
      {
        href: "/bigg-boss-19-voting/",
        emoji: "🏛️",
        title: "Bigg Boss 19 Voting",
        text: "Gaurav Khanna's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 19 page →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderSeason13Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 13 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 13 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 13 voting closed when the season ended with the finale on the night of 15–16 February 2020, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 13?</summary>
        <div class="bb-faq-body">
          <p>Sidharth Shukla won Bigg Boss 13. The final order was: Asim Riaz (first runner-up), Shehnaaz Gill (second runner-up), Rashami Desai (third runner-up), Arti Singh (fourth runner-up) and Paras Chhabra (fifth runner-up, who walked during the finale).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 13 finalists?</summary>
        <div class="bb-faq-body">
          <p>The six finalists were Sidharth Shukla, Asim Riaz, Shehnaaz Gill, Rashami Desai, Arti Singh and Paras Chhabra. The season premiered on 29 September 2019 and closed with the finale on the night of 15–16 February 2020 — 21 contestants, hosted by Salman Khan on Colors TV.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 13. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The winner and finalist order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}


// ---------- Past-season voting pages (entry 412) ----------
// Bigg Boss 18 (entry 412) fan re-vote page. Every fact below comes from
// the season research file, verified against the season's Wikipedia
// article (see the pack's sources.md): S18 facts in
// ~/workspace/bb-seasons/batch2-19-18/s18/facts.md. No prize figure
// appears on this page: none is stated in the Wikipedia article body
// (the ₹50 lakh figure appears only inside a cited press headline in
// its references), so it is not published. The winner's name follows
// the site's existing spelling, "Karan Veer Mehra" — Wikipedia's own
// article is internally inconsistent (infobox "Karanveer Mehra",
// housemates list "Karan Veer Mehra"). The renderers below reuse the
// shared season helpers defined with the entry 408/409 pages.

// ---------- Bigg Boss 18 (entry 412) ----------

const SEASON18_FINALISTS = [
  {
    name: "Karan Veer Mehra",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s18-karan-veer-mehra.webp",
    story:
      "Karan Veer Mehra won Bigg Boss 18 in the finale on 19 January 2025, closing the 105-day 'Time Ka Tandav' season. Finale coverage agreed on the result across the board — Bollywood Hungama, the Economic Times, DNA and the Daily Pioneer all recorded Karan Veer Mehra as the winner and Vivian Dsena as first runner-up.",
  },
  {
    name: "Vivian Dsena",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s18-vivian-dsena.webp",
    story:
      "Vivian Dsena finished as first runner-up in the Day 105 finale. Bigg Boss had marked him out on the very first night: on premiere night, Bigg Boss predicted Vivian Dsena and Alice Kaushik as the season's top two — Vivian lived up to the prediction, while Alice Kaushik was evicted on Day 49.",
  },
  {
    name: "Rajat Dalal",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s18-rajat-dalal.webp",
    story:
      "Rajat Dalal finished as second runner-up when the finale order was declared on Day 105, 19 January 2025.",
  },
  {
    name: "Avinash Mishra",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s18-avinash-mishra.webp",
    story:
      "Avinash Mishra finished as third runner-up in the Day 105 finale on 19 January 2025.",
  },
  {
    name: "Chum Darang",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/s18-chum-darang.webp",
    story:
      "Chum Darang finished as fourth runner-up in the Day 105 finale on 19 January 2025.",
  },
  {
    name: "Eisha Singh",
    placing: "6th finalist",
    image: "/assets/bb-seasons/s18-eisha-singh.webp",
    story:
      "Eisha Singh completed the season's final six: in the finale order she was placed as the sixth finalist, leaving before the runner-up placings were declared on Day 105.",
  },
];

const SEASON18_EVICTIONS = [
  ["Gunratan Sadavarte", 10, "Walked"],
  ["Hema Sharma", 14, ""],
  ["Muskan Bamne", 20, "Evicted by housemates"],
  ["Nyrraa Banerjee", 21, ""],
  ["Shehzada Dhami", 28, ""],
  ["Arfeen Khan", 35, ""],
  ["Alice Kaushik", 49, ""],
  ["Aditi Mistry", 56, "Evicted by housemates"],
  ["Tajinder Bagga", 70, ""],
  ["Digvijay Singh Rathee", 75, "Evicted by housemates"],
  ["Edin Rose", 77, ""],
  ["Yamini Malhotra", 77, ""],
  ["Sara Arfeen Khan", 84, ""],
  ["Kashish Kapoor", 91, ""],
  ["Shrutika Arjun", 95, ""],
  ["Chahat Pandey", 98, ""],
  ["Shilpa Shirodkar", 102, ""],
];

const SEASON18_MOMENTS = [
  {
    title: "The 'Time Ka Tandav' theme",
    text: "The season was built around time: a 'Time God' concept ran through the game, and the house carried a Tandav activity room.",
  },
  {
    title: "Bigg Boss's premiere-night prediction",
    text: "On launch night, Bigg Boss predicted Vivian Dsena and Alice Kaushik as the season's top two. Vivian Dsena did finish first runner-up — Alice Kaushik was evicted on Day 49.",
  },
  {
    title: "A donkey in the house",
    text: "A donkey named Gadhraj was kept in the house during premiere week and was removed on Day 7.",
  },
  {
    title: "The contestant who never entered",
    text: "Nia Sharma was announced as the season's first confirmed contestant at the Khatron Ke Khiladi 14 finale — and later announced she would not participate after all.",
  },
  {
    title: "A Season 1 face returned",
    text: "Ravi Kishan, a Bigg Boss 1 finalist, hosted the 'Haaye Daiya with Ravi Bhaiyya' segment, and Rohit Shetty guest-hosted Weekend Ka Vaar in Week 5.",
  },
];

function renderSeason18Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 18 result — Karan Veer Mehra won the season",
      `<p>Bigg Boss 18 — styled <em>Bigg Boss: Time Ka Tandav</em> — ran from <strong>6 October 2024</strong> to the finale on <strong>19 January 2025</strong>: 105 days, 23 housemates, hosted by Salman Khan on Colors TV and JioCinema. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Karan Veer Mehra"],
        ["1st runner-up", "Vivian Dsena"],
        ["2nd runner-up", "Rajat Dalal"],
        ["3rd runner-up", "Avinash Mishra"],
        ["4th runner-up", "Chum Darang"],
        ["6th finalist", "Eisha Singh"],
      ])}
      <p style="margin-top:1rem;">That result is final. Bigg Boss 18's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 18 final six",
      renderSeasonFinalistCards(SEASON18_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 18 eviction order — who left, and when",
      `<p>Seventeen housemates left before the finale, in this order (from the season's record):</p>
      ${renderSeasonEvictionTable(SEASON18_EVICTIONS)}
      <p style="margin-top:1rem;">The finale followed on Day 105: Eisha Singh left as the sixth finalist, then Chum Darang (fourth runner-up), Avinash Mishra (third runner-up), Rajat Dalal (second runner-up) and Vivian Dsena (first runner-up), before Karan Veer Mehra was declared the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 18 story — the season's defining moments",
      renderSeasonMoments(SEASON18_MOMENTS),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-19-voting/",
        emoji: "🏛️",
        title: "Bigg Boss 19 Voting",
        text: "Gaurav Khanna's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 19 page →",
      },
      {
        href: "/bigg-boss-17-voting/",
        emoji: "🎭",
        title: "Bigg Boss 17 Voting",
        text: "Munawar Faruqui's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 17 page →",
      },
      {
        href: "/bigg-boss-16-voting/",
        emoji: "🎪",
        title: "Bigg Boss 16 Voting",
        text: "MC Stan's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 16 page →",
      },
      {
        href: "/bigg-boss-13-voting/",
        emoji: "🌟",
        title: "Bigg Boss 13 Voting",
        text: "Sidharth Shukla's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 13 page →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderSeason18Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 18 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 18 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 18 voting closed when the season ended with the finale on 19 January 2025, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 18?</summary>
        <div class="bb-faq-body">
          <p>Karan Veer Mehra won Bigg Boss 18. The final order was: Vivian Dsena (first runner-up), Rajat Dalal (second runner-up), Avinash Mishra (third runner-up), Chum Darang (fourth runner-up) and Eisha Singh (sixth finalist).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 18 finalists?</summary>
        <div class="bb-faq-body">
          <p>The six finalists were Karan Veer Mehra, Vivian Dsena, Rajat Dalal, Avinash Mishra, Chum Darang and Eisha Singh. The season ran from 6 October 2024 to 19 January 2025 — 105 days and 23 housemates, hosted by Salman Khan on Colors TV and JioCinema.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 18. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The winner and finalist order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}


// ---------- Past-season voting pages (entries 413 + 414) ----------
// Bigg Boss OTT 1 (entry 413) and Bigg Boss OTT 2 (entry 414) fan
// re-vote pages. Every fact below comes from the season research
// files, verified against the seasons' Wikipedia articles (see the
// pack's sources.md): OTT 1 facts in
// ~/workspace/bb-seasons/batch3-ott/ott1/facts.md, OTT 2 facts in
// ~/workspace/bb-seasons/batch3-ott/ott2/facts.md. No prize figure
// appears on either page: neither season's Wikipedia article states
// one in its body text, so none is published (the OTT 1 article's
// reference list carries a "Rs 10 Crore" headline claim that every
// contemporaneous finale report contradicts — it is not used). The
// renderers below reuse the shared season helpers defined with the
// entry 408/409 pages.

// ---------- Bigg Boss OTT 1 (entry 413) ----------

const OTT1_FINALISTS = [
  {
    name: "Divya Agarwal",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/ott1-divya-agarwal.webp",
    story:
      "Divya Agarwal won Bigg Boss OTT 1 in the finale on 18 September 2021. She had entered the house alone — the only housemate left without a connection under the season's 'Stay Connected' theme — and was directly nominated on premiere night; on Day 4, Zeeshan Khan pressed the buzzer to become her connection. Finale reports agreed on the result across the board: Divya the winner, Nishant Bhat the runner-up and Shamita Shetty in the top three.",
  },
  {
    name: "Nishant Bhat",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/ott1-nishant-bhat.webp",
    story:
      "Nishant Bhat finished as first runner-up in the Day 42 finale on 18 September 2021, behind only Divya Agarwal.",
  },
  {
    name: "Shamita Shetty",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/ott1-shamita-shetty.webp",
    story:
      "Shamita Shetty finished as second runner-up in the finale on 18 September 2021, completing the season's top three alongside Divya Agarwal and Nishant Bhat.",
  },
  {
    name: "Raqesh Bapat",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/ott1-raqesh-bapat.webp",
    story:
      "Raqesh Bapat finished as third runner-up when the finale order was declared on Day 42, 18 September 2021.",
  },
  {
    name: "Pratik Sehajpal",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/ott1-pratik-sehajpal.webp",
    story:
      "Pratik Sehajpal is recorded as 'Walked, 4th runner-up': all five finalists were offered a ticket to Bigg Boss 15 on condition they leave the finale race, and Pratik accepted — becoming the first confirmed Bigg Boss 15 contestant — and left the OTT 1 finale as fourth runner-up.",
  },
];

const OTT1_EVICTIONS = [
  ["Urfi Javed", 8, "Evicted by public vote"],
  ["Karan Nath", 15, ""],
  ["Ridhima Pandit", 15, ""],
  ["Zeeshan Khan", 18, "Ejected — physical fight with Pratik Sehajpal"],
  ["Milind Gaba", 29, ""],
  ["Akshara Singh", 29, ""],
  ["Muskan Jattana", 36, "Evicted by housemates"],
  ["Neha Bhasin", 39, ""],
];

const OTT1_MOMENTS = [
  {
    title: "The first OTT season, built on connections",
    text: "Bigg Boss OTT launched six weeks before the television version — a first in Bigg Boss history — with the theme 'Stay Connected': six boys and six girls entered as pairs, and one girl, Divya Agarwal, entered alone. Housemates had to strengthen their connection to survive.",
  },
  {
    title: "The winner started with no connection",
    text: "No connection was left for Divya Agarwal, so she was directly nominated on premiere night. On Day 4, Zeeshan Khan pressed the buzzer to become her connection, leaving Urfi Javed nominated in her place. Divya went on to win the season.",
  },
  {
    title: "Zeeshan Khan ejected on Day 18",
    text: "Zeeshan Khan was thrown out of the house on Day 18 after getting into a physical fight with Pratik Sehajpal.",
  },
  {
    title: "The connections were dissolved",
    text: "Around Day 29–30, Bigg Boss announced that all connections were broken and every housemate would play as an individual for the rest of the season.",
  },
  {
    title: "The Ticket to Bigg Boss 15",
    text: "All five finalists were offered a ticket to Bigg Boss 15 on condition they leave the finale race. Pratik Sehajpal accepted and became the first confirmed Bigg Boss 15 contestant, finishing as walked / fourth runner-up here.",
  },
];

function renderOtt1Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss OTT 1 result — Divya Agarwal won the season",
      `<p>Bigg Boss OTT 1 — styled <em>Bigg Boss: Over-the-Top Season 1</em>, the first season of the digital spin-off — ran from <strong>8 August 2021</strong> to the finale on <strong>18 September 2021</strong>: 42 days, 13 housemates, hosted by Karan Johar on Voot. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Divya Agarwal"],
        ["1st runner-up", "Nishant Bhat"],
        ["2nd runner-up", "Shamita Shetty"],
        ["3rd runner-up", "Raqesh Bapat"],
        ["4th runner-up", "Pratik Sehajpal"],
      ])}
      <p style="margin-top:1rem;">That result is final. Bigg Boss OTT 1's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss OTT 1 final five",
      renderSeasonFinalistCards(OTT1_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss OTT 1 eviction order — who left, and when",
      `<p>Eight housemates left before the finale, in this order (from the season's record):</p>
      ${renderSeasonEvictionTable(OTT1_EVICTIONS)}
      <p style="margin-top:1rem;">The finale followed on Day 42: Pratik Sehajpal walked — accepting the Ticket to Bigg Boss 15 — as fourth runner-up, then Raqesh Bapat (third runner-up), Shamita Shetty (second runner-up) and Nishant Bhat (first runner-up), before Divya Agarwal was declared the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss OTT 1 story — the season's defining moments",
      renderSeasonMoments(OTT1_MOMENTS),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-ott-2-voting/",
        emoji: "📱",
        title: "Bigg Boss OTT 2 Voting",
        text: "Elvish Yadav's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the OTT 2 page →",
      },
      {
        href: "/bigg-boss-19-voting/",
        emoji: "🏛️",
        title: "Bigg Boss 19 Voting",
        text: "Gaurav Khanna's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 19 page →",
      },
      {
        href: "/bigg-boss-18-voting/",
        emoji: "⏳",
        title: "Bigg Boss 18 Voting",
        text: "Karan Veer Mehra's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 18 page →",
      },
      {
        href: "/bigg-boss-17-voting/",
        emoji: "🎭",
        title: "Bigg Boss 17 Voting",
        text: "Munawar Faruqui's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 17 page →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderOtt1Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss OTT 1 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss OTT 1 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss OTT 1 voting closed when the season ended with the finale on 18 September 2021, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss OTT 1?</summary>
        <div class="bb-faq-body">
          <p>Divya Agarwal won Bigg Boss OTT 1. The final order was: Nishant Bhat (first runner-up), Shamita Shetty (second runner-up), Raqesh Bapat (third runner-up) and Pratik Sehajpal (fourth runner-up, walked).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss OTT 1 finalists?</summary>
        <div class="bb-faq-body">
          <p>The five finalists were Divya Agarwal, Nishant Bhat, Shamita Shetty, Raqesh Bapat and Pratik Sehajpal. The season ran from 8 August 2021 to 18 September 2021 — 42 days and 13 housemates, hosted by Karan Johar on Voot.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss OTT 1. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The winner and finalist order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}

// ---------- Bigg Boss OTT 2 (entry 414) ----------

const OTT2_FINALISTS = [
  {
    name: "Elvish Yadav",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/ott2-elvish-yadav.webp",
    story:
      "Elvish Yadav won Bigg Boss OTT 2 in the finale on 14 August 2023. He had entered the house on Day 26 as a wild-card entrant — and went on to become the first wild-card winner in Bigg Boss history. Finale reports agreed on the result and the top five across the board — Hindustan Times, the Economic Times, India Today and ABP Live all recorded Elvish as the winner and Abhishek Malhan as runner-up.",
  },
  {
    name: "Abhishek Malhan",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/ott2-abhishek-malhan.webp",
    story:
      "Abhishek Malhan finished as first runner-up in the Day 58 finale on 14 August 2023, behind only Elvish Yadav.",
  },
  {
    name: "Manisha Rani",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/ott2-manisha-rani.webp",
    story:
      "Manisha Rani finished as second runner-up when the finale order was declared on Day 58, 14 August 2023.",
  },
  {
    name: "Bebika Dhurve",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/ott2-bebika-dhurve.webp",
    story:
      "Bebika Dhurve finished as third runner-up in the Day 58 finale on 14 August 2023.",
  },
  {
    name: "Pooja Bhatt",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/ott2-pooja-bhatt.webp",
    story:
      "Pooja Bhatt finished as fourth runner-up in the Day 58 finale on 14 August 2023.",
  },
];

const OTT2_EVICTIONS = [
  ["Puneet Kumar", 1, "Ejected by housemates"],
  ["Palak Purswani", 8, "Entered on Day 2"],
  ["Aaliya Siddiqui", 11, ""],
  ["Akanksha Puri", 15, "Entered on Day 2"],
  ["Cyrus Broacha", 23, "Walked — family emergency"],
  ["Falaq Naaz", 35, "Evicted by housemates"],
  ["Aashika Bhatia", 42, "Wild-card entrant, entered Day 26"],
  ["Jad Hadid", 50, ""],
  ["Avinash Sachdev", 50, ""],
  ["Jiya Shankar", 54, ""],
];

const OTT2_MOMENTS = [
  {
    title: "The most successful OTT season",
    text: "The season's record describes Bigg Boss OTT 2 as the most successful season in the history of Bigg Boss OTT — and it was Salman Khan's first time hosting the OTT version.",
  },
  {
    title: "The first wild-card winner in Bigg Boss history",
    text: "Elvish Yadav entered on Day 26 as a wild card and went on to win the season — the first wild-card winner in Bigg Boss history.",
  },
  {
    title: "Ejected on Day 1",
    text: "Puneet Kumar was nominated by Bigg Boss on launch day for misusing house property and misbehaving, then voted out by the housemates the same day — the earliest exit of the season.",
  },
  {
    title: "Bigg Boss Currency",
    text: "Housemates were ranked by viewer votes and given different amounts of 'BB Currency' to pay for their needs around the house. The currency theme ended on Day 9.",
  },
  {
    title: "Cyrus Broacha walked out",
    text: "Veteran comedian Cyrus Broacha voluntarily left the house on Day 23; the season's record attributes his exit to a family emergency.",
  },
];

function renderOtt2Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss OTT 2 result — Elvish Yadav won the season",
      `<p>Bigg Boss OTT 2 — styled <em>Bigg Boss: Over-the-Top Season 2</em>, with the tagline #IssBaarJantaHaiAsliBoss — ran from <strong>17 June 2023</strong> to the finale on <strong>14 August 2023</strong>: 58 days, 15 housemates, hosted by Salman Khan on JioCinema. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Elvish Yadav"],
        ["1st runner-up", "Abhishek Malhan"],
        ["2nd runner-up", "Manisha Rani"],
        ["3rd runner-up", "Bebika Dhurve"],
        ["4th runner-up", "Pooja Bhatt"],
      ])}
      <p style="margin-top:1rem;">That result is final. Bigg Boss OTT 2's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss OTT 2 final five",
      renderSeasonFinalistCards(OTT2_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss OTT 2 eviction order — who left, and when",
      `<p>Ten housemates left before the finale, in this order (from the season's record):</p>
      ${renderSeasonEvictionTable(OTT2_EVICTIONS)}
      <p style="margin-top:1rem;">The finale followed on Day 58: Pooja Bhatt left as fourth runner-up, then Bebika Dhurve (third runner-up), Manisha Rani (second runner-up) and Abhishek Malhan (first runner-up), before Elvish Yadav — a Day 26 wild-card entrant — was declared the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss OTT 2 story — the season's defining moments",
      renderSeasonMoments(OTT2_MOMENTS),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-ott-1-voting/",
        emoji: "📱",
        title: "Bigg Boss OTT 1 Voting",
        text: "Divya Agarwal's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the OTT 1 page →",
      },
      {
        href: "/bigg-boss-19-voting/",
        emoji: "🏛️",
        title: "Bigg Boss 19 Voting",
        text: "Gaurav Khanna's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 19 page →",
      },
      {
        href: "/bigg-boss-18-voting/",
        emoji: "⏳",
        title: "Bigg Boss 18 Voting",
        text: "Karan Veer Mehra's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 18 page →",
      },
      {
        href: "/bigg-boss-17-voting/",
        emoji: "🎭",
        title: "Bigg Boss 17 Voting",
        text: "Munawar Faruqui's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 17 page →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderOtt2Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss OTT 2 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss OTT 2 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss OTT 2 voting closed when the season ended with the finale on 14 August 2023, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss OTT 2?</summary>
        <div class="bb-faq-body">
          <p>Elvish Yadav won Bigg Boss OTT 2 — entering as a wild card on Day 26, he became the first wild-card winner in Bigg Boss history. The final order was: Abhishek Malhan (first runner-up), Manisha Rani (second runner-up), Bebika Dhurve (third runner-up) and Pooja Bhatt (fourth runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss OTT 2 finalists?</summary>
        <div class="bb-faq-body">
          <p>The five finalists were Elvish Yadav, Abhishek Malhan, Manisha Rani, Bebika Dhurve and Pooja Bhatt. The season ran from 17 June 2023 to 14 August 2023 — 58 days and 15 housemates, hosted by Salman Khan on JioCinema.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss OTT 2. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The winner and finalist order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}


// ---------- Past-season voting pages (entry 415) ----------
// Bigg Boss OTT 3 (entry 415) fan re-vote page, plus the hub
// wording fix that points the all-seasons hub's season grid at the
// three live OTT pages. Every fact below comes from the season
// research file, verified against the season's Wikipedia article
// (see the pack's sources.md): OTT 3 facts in
// ~/workspace/bb-seasons/batch3-ott/ott3/facts.md. No prize figure
// appears on the page: the season's Wikipedia article states none
// anywhere in its infobox or body text, so none is published (the
// ₹25 lakh figure carried in press reports is not Wikipedia-stated
// and is not used). The renderers below reuse the shared season
// helpers defined with the entry 408/409 pages.

// ---------- Bigg Boss OTT 3 (entry 415) ----------

const OTT3_FINALISTS = [
  {
    name: "Sana Makbul",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/ott3-sana-makbul.webp",
    story:
      "Sana Makbul won Bigg Boss OTT 3 in the finale on 2 August 2024. Finale reports agreed on the result across the board — The Hindu, Hindustan Times and Telegraph India all recorded Sana as the winner, with Naezy the runner-up and Ranvir Shorey in the top three.",
  },
  {
    name: "Naezy",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/ott3-naezy.webp",
    story:
      "Naezy — real name Naved Shaikh — finished as first runner-up in the Day 42 finale on 2 August 2024, behind only Sana Makbul.",
  },
  {
    name: "Ranvir Shorey",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/ott3-ranvir-shorey.webp",
    story:
      "Ranvir Shorey finished as second runner-up when the finale order was declared on Day 42, 2 August 2024.",
  },
  {
    name: "Sai Ketan Rao",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/ott3-sai-ketan-rao.webp",
    story:
      "Sai Ketan Rao finished as third runner-up in the Day 42 finale on 2 August 2024.",
  },
  {
    name: "Kritika Malik",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/ott3-kritika-malik.webp",
    story:
      "Kritika Malik finished as fourth runner-up in the finale on 2 August 2024. She had entered the house alongside her husband Armaan Malik and his first wife Payal Malik; Payal was evicted on Day 9, while Kritika lasted the full season to the finale.",
  },
];

const OTT3_EVICTIONS = [
  ["Neeraj Goyat", 5, ""],
  ["Payal Malik", 9, ""],
  ["Poulomi Das", 12, "Evicted by the Baaharwala"],
  ["Munisha Khatwani", 16, "Evicted by housemates"],
  ["Chandrika Dixit Gera", 23, ""],
  ["Deepak Chaurasia", 30, ""],
  ["Sana Sultan Khan", 31, ""],
  ["Adnaan Shaikh", 31, "Wild-card entrant, entered Day 24"],
  ["Shivani Kumari", 36, "Evicted by housemates"],
  ["Vishal Pandey", 36, ""],
  ["Lovekesh Kataria", 40, "Evicted by housemates"],
  ["Armaan Malik", 40, ""],
];

const OTT3_MOMENTS = [
  {
    title: "Anil Kapoor took over as host",
    text: "Anil Kapoor hosted Bigg Boss OTT 3 — his first time hosting the show, taking over from Salman Khan, who had hosted the previous OTT season.",
  },
  {
    title: "Phones in the house for the first time",
    text: "For the first time in the seventeen-year history of Bigg Boss, housemates were allowed smartphones in the house, receiving messages from Bigg Boss. Only the Baaharwala could receive feedback from the outside world.",
  },
  {
    title: "The Baaharwala twist",
    text: "One housemate at a time was designated the Baaharwala, receiving information and feedback from the outside world, with special powers and immunity from eviction while in the role. Sana Sultan Khan was the inaugural Baaharwala, and the role later expanded into a Baaharwala Gang.",
  },
  {
    title: "Armaan Malik entered with both his wives",
    text: "Armaan Malik was a housemate in the same season as both his wives — Payal Malik, his first wife, and Kritika Malik, his second wife. Payal was evicted on Day 9; Kritika reached the finale as fourth runner-up.",
  },
  {
    title: "Armaan nominated for the rest of the season",
    text: "On Day 16, host Anil Kapoor announced that Armaan Malik would stay nominated for the remainder of the season, as a consequence of physical violence towards Vishal Pandey. He was finally evicted on Day 40.",
  },
];

function renderOtt3Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss OTT 3 result — Sana Makbul won the season",
      `<p>Bigg Boss OTT 3 — styled <em>Bigg Boss: Over-The-Top Season 3</em> — ran from <strong>21 June 2024</strong> to the finale on <strong>2 August 2024</strong>: 42 days, 17 housemates, hosted by Anil Kapoor on JioCinema Premium. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Sana Makbul"],
        ["1st runner-up", "Naezy"],
        ["2nd runner-up", "Ranvir Shorey"],
        ["3rd runner-up", "Sai Ketan Rao"],
        ["4th runner-up", "Kritika Malik"],
      ])}
      <p style="margin-top:1rem;">That result is final. Bigg Boss OTT 3's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss OTT 3 final five",
      renderSeasonFinalistCards(OTT3_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss OTT 3 eviction order — who left, and when",
      `<p>Twelve housemates left before the finale, in this order (from the season's record):</p>
      ${renderSeasonEvictionTable(OTT3_EVICTIONS)}
      <p style="margin-top:1rem;">The finale followed on Day 42: Kritika Malik left as fourth runner-up, then Sai Ketan Rao (third runner-up), Ranvir Shorey (second runner-up) and Naezy (first runner-up), before Sana Makbul was declared the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss OTT 3 story — the season's defining moments",
      renderSeasonMoments(OTT3_MOMENTS),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-ott-1-voting/",
        emoji: "📱",
        title: "Bigg Boss OTT 1 Voting",
        text: "Divya Agarwal's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the OTT 1 page →",
      },
      {
        href: "/bigg-boss-ott-2-voting/",
        emoji: "📱",
        title: "Bigg Boss OTT 2 Voting",
        text: "Elvish Yadav's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the OTT 2 page →",
      },
      {
        href: "/bigg-boss-19-voting/",
        emoji: "🏛️",
        title: "Bigg Boss 19 Voting",
        text: "Gaurav Khanna's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 19 page →",
      },
      {
        href: "/bigg-boss-18-voting/",
        emoji: "⏳",
        title: "Bigg Boss 18 Voting",
        text: "Karan Veer Mehra's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 18 page →",
      },
      {
        href: "/bigg-boss-17-voting/",
        emoji: "🎭",
        title: "Bigg Boss 17 Voting",
        text: "Munawar Faruqui's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 17 page →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderOtt3Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss OTT 3 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss OTT 3 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss OTT 3 voting closed when the season ended with the finale on 2 August 2024, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss OTT 3?</summary>
        <div class="bb-faq-body">
          <p>Sana Makbul won Bigg Boss OTT 3. The final order was: Naezy (first runner-up), Ranvir Shorey (second runner-up), Sai Ketan Rao (third runner-up) and Kritika Malik (fourth runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss OTT 3 finalists?</summary>
        <div class="bb-faq-body">
          <p>The five finalists were Sana Makbul, Naezy, Ranvir Shorey, Sai Ketan Rao and Kritika Malik. The season ran from 21 June 2024 to 2 August 2024 — 42 days and 17 housemates, hosted by Anil Kapoor on JioCinema Premium.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss OTT 3. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The winner and finalist order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}


// ---------- Past-season voting pages (entries 416 + 417) ----------
// Bigg Boss 15 (entry 416) and Bigg Boss 14 (entry 417) fan re-vote
// pages, plus the hub grid links for Seasons 15 and 14. Every fact
// below comes from the season research files, verified against the
// seasons' Wikipedia articles (see the pack's sources.md): S15 facts
// in ~/workspace/bb-seasons/batch4-15-14/s15/facts.md, S14 facts in
// ~/workspace/bb-seasons/batch4-15-14/s14/facts.md. No winner's prize
// figure appears on either page: neither season's Wikipedia article
// states one, so none is published (the press-reported figures —
// Rs 40 lakh for Season 15, Rs 36 lakh for Season 14 — are not
// Wikipedia-stated and are not used). The only ₹ amounts on the two
// pages are the ones the articles themselves state: Nishant Bhat's
// ₹10 lakh finale-night briefcase (Season 15) and Rakhi Sawant's
// ₹14 lakh finale walk-out (Season 14). Exit days the research
// files flag as contested (†) follow the files' primary account —
// the nomination table and weekly summaries where they outvote the
// housemates status table — and are marked † on the pages with a
// disclosure note, never presented as settled fact. The renderers
// below reuse the shared season helpers defined with the entry
// 408/409 pages.

// ---------- Bigg Boss 15 (entry 416) ----------

const SEASON15_FINALISTS = [
  {
    name: "Tejasswi Prakash",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s15-tejasswi-prakash.webp",
    story:
      "Tejasswi Prakash won Bigg Boss 15 on finale night, 30 January 2022, closing a 120-day season that began with 24 housemates. She beat Pratik Sehajpal in the final two to lift the trophy.",
  },
  {
    name: "Pratik Sehajpal",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s15-pratik-sehajpal.webp",
    story:
      "Pratik Sehajpal finished as first runner-up in the finale on 30 January 2022. He had entered the season as one of the three Bigg Boss OTT finalists given direct access to the Main House, and he lasted the full 120 days.",
  },
  {
    name: "Karan Kundrra",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s15-karan-kundrra.webp",
    story:
      "Karan Kundrra finished as second runner-up when the finale order was declared on 30 January 2022.",
  },
  {
    name: "Shamita Shetty",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s15-shamita-shetty.webp",
    story:
      "Shamita Shetty finished as third runner-up in the finale on 30 January 2022. Like Pratik and Nishant, she had entered with direct Main House access from Bigg Boss OTT; mid-season she walked out on Day 44 over health issues and re-entered on Day 50, then played through to the finale.",
  },
  {
    name: "Nishant Bhat",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/s15-nishant-bhat.webp",
    story:
      "Nishant Bhat's finale is remembered for the briefcase: on Day 120 the top five were offered ₹10 lakh to leave the show, and Nishant took the money and walked. The season record carries him as 'Walked, 4th runner-up'.",
  },
  {
    name: "Rashami Desai",
    placing: "5th runner-up",
    image: "/assets/bb-seasons/s15-rashami-desai.webp",
    story:
      "Rashami Desai finished as fifth runner-up in the finale on 30 January 2022. She had entered mid-season as one of the former-season 'Challengers' placed inside the VIP Zone group.",
  },
];

const SEASON15_EVICTIONS = [
  ["Sahil Shroff", "8†", "Evicted by public vote"],
  ["Vidhi Pandya", 18, "Evicted by housemates"],
  ["Donal Bisht", 18, "Evicted by housemates"],
  ["Akasa Singh", "28†", ""],
  ["Miesha Iyer", 35, ""],
  ["Ieshaan Sehgal", "35†", ""],
  ["Raqesh Bapat", 40, "Walked — left due to a poor health condition"],
  ["Afsana Khan", 40, "Ejected"],
  ["Simba Nagpal", 53, "Evicted by housemates"],
  ["Vishal Kotian", "56†", "One of three evicted together in a live task"],
  ["Jay Bhanushali", "56†", "One of three evicted together in a live task"],
  ["Neha Bhasin", "56†", "One of three evicted together in a live task"],
  ["Rajiv Adatia", "77†", "Later returned as a guest, Days 108–114"],
  ["Ritesh Kumar", "77†", ""],
  ["Umar Riaz", "99†", "Ejected — for physical violence with Pratik Sehajpal"],
  ["Abhijit Bichukale", "114†", "Evicted by public vote"],
  ["Devoleena Bhattacharjee", "114†", "Evicted by public vote"],
  ["Rakhi Sawant", "116†", "Evicted by public vote"],
];

const SEASON15_MOMENTS = [
  {
    title: "The 'Sankat in Jungle' split house",
    text: "The Goregaon house was divided into a Jungle House and a Main House: the jungle housemates began with a small kitchen and no beds, sofa or bathroom. On Day 21 the last five jungle housemates chose to give up part of the prize money to move into the Main House, and the Jungle House was closed.",
  },
  {
    title: "Vishwasuntree, the talking tree",
    text: "A magical wishing tree stood in the garden — Vishwasuntree, 'queen of the magical jungle' — granting advantages and privileges to housemates who performed well. Veteran actress Rekha voiced the tree in the season's first teaser.",
  },
  {
    title: "The three 'OTTians' got a head start",
    text: "Bigg Boss OTT finalists Pratik Sehajpal, Nishant Bhat and Shamita Shetty entered this season with direct access to the Main House. Pratik went on to finish as first runner-up and Nishant as fourth runner-up.",
  },
  {
    title: "The VIP Zone decided the finalists",
    text: "Announced on Day 36, the VIP Zone made only its members eligible to be in the finale. Former-season contestants Rashami Desai, Devoleena Bhattacharjee, Rakhi Sawant and Abhijit Bichukale entered mid-season as 'Challengers' inside that VIP group.",
  },
  {
    title: "The finale-night briefcase walk",
    text: "On Day 120 the top five finalists were offered ₹10 lakh to quit the race. Nishant Bhat accepted and walked out — recorded as 'Walked, 4th runner-up' — leaving Tejasswi Prakash to beat Pratik Sehajpal in the final two.",
  },
];

function renderSeason15Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 15 result — Tejasswi Prakash won the season",
      `<p>Bigg Boss 15 — styled <em>Bigg Boss: "Sankat in Jungle"</em> — ran from <strong>2 October 2021</strong> to the finale on <strong>30 January 2022</strong>: 120 days, 24 housemates, hosted by Salman Khan on Colors TV and Voot Select. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Tejasswi Prakash"],
        ["1st runner-up", "Pratik Sehajpal"],
        ["2nd runner-up", "Karan Kundrra"],
        ["3rd runner-up", "Shamita Shetty"],
        ["4th runner-up", "Nishant Bhat"],
        ["5th runner-up", "Rashami Desai"],
      ])}
      <p style="margin-top:1rem;">Nishant Bhat's fourth runner-up placing came with the season's most talked-about exit: on finale day the top five were offered ₹10 lakh to leave the show, and he took the money and walked.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 15's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 15 final six",
      renderSeasonFinalistCards(SEASON15_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 15 eviction order — who left, and when",
      `<p>Eighteen housemates left before the finale, in this order (from the season's record):</p>
      ${renderSeasonEvictionTable(SEASON15_EVICTIONS)}
      <p style="margin-top:1rem;">Days marked † follow the season record's nomination table and weekly summaries; the record's own housemates status table gives a different day for those exits, so the days shown are the primary account, not settled fact. The finale followed on Day 120: Rashami Desai left as fifth runner-up, Nishant Bhat took the ₹10 lakh briefcase offer and walked (fourth runner-up), then Shamita Shetty (third runner-up), Karan Kundrra (second runner-up) and Pratik Sehajpal (first runner-up), before Tejasswi Prakash was declared the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 15 story — the season's defining moments",
      renderSeasonMoments(SEASON15_MOMENTS),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-14-voting/",
        emoji: "💫",
        title: "Bigg Boss 14 Voting",
        text: "Rubina Dilaik's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 14 page →",
      },
      {
        href: "/bigg-boss-19-voting/",
        emoji: "🏛️",
        title: "Bigg Boss 19 Voting",
        text: "Gaurav Khanna's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 19 page →",
      },
      {
        href: "/bigg-boss-18-voting/",
        emoji: "⏳",
        title: "Bigg Boss 18 Voting",
        text: "Karan Veer Mehra's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 18 page →",
      },
      {
        href: "/bigg-boss-17-voting/",
        emoji: "🎭",
        title: "Bigg Boss 17 Voting",
        text: "Munawar Faruqui's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 17 page →",
      },
      {
        href: "/bigg-boss-16-voting/",
        emoji: "🎪",
        title: "Bigg Boss 16 Voting",
        text: "MC Stan's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 16 page →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderSeason15Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 15 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 15 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 15 voting closed when the season ended with the finale on 30 January 2022, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 15?</summary>
        <div class="bb-faq-body">
          <p>Tejasswi Prakash won Bigg Boss 15. The final order was: Pratik Sehajpal (first runner-up), Karan Kundrra (second runner-up), Shamita Shetty (third runner-up), Nishant Bhat (fourth runner-up — he took the ₹10 lakh briefcase offer on finale day and walked) and Rashami Desai (fifth runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 15 finalists?</summary>
        <div class="bb-faq-body">
          <p>The six finalists were Tejasswi Prakash, Pratik Sehajpal, Karan Kundrra, Shamita Shetty, Nishant Bhat and Rashami Desai. The season ran from 2 October 2021 to 30 January 2022 — 120 days and 24 housemates, hosted by Salman Khan on Colors TV and Voot Select.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 15. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The winner and finalist order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}

// ---------- Bigg Boss 14 (entry 417) ----------

const SEASON14_FINALISTS = [
  {
    name: "Rubina Dilaik",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s14-rubina-dilaik.webp",
    story:
      "Rubina Dilaik won Bigg Boss 14 on finale night, 21 February 2021, closing a 140-day season that began with 22 housemates. She beat Rahul Vaidya in the final two to lift the trophy.",
  },
  {
    name: "Rahul Vaidya",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s14-rahul-vaidya.webp",
    story:
      "Rahul Vaidya finished as first runner-up in the finale on 21 February 2021 — after one of the season's biggest turns: he quit the show on Day 64 feeling homesick, re-entered on Day 74, and played through to the final two.",
  },
  {
    name: "Nikki Tamboli",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s14-nikki-tamboli.webp",
    story:
      "Nikki Tamboli finished as second runner-up in the finale on 21 February 2021. She had been evicted on Day 64 and re-entered around Day 70–71, then lasted to the podium.",
  },
  {
    name: "Aly Goni",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s14-aly-goni.webp",
    story:
      "Aly Goni finished as third runner-up in the finale on 21 February 2021. He had been evicted on Day 60 after losing a task and re-entered around Day 70–71.",
  },
  {
    name: "Rakhi Sawant",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/s14-rakhi-sawant.webp",
    story:
      "Rakhi Sawant entered mid-season as one of the six 'Challengers' and reached the final five. In the Week 19 BB ATM task she had shredded a cheque of ₹14 lakh from the winner's prize money to secure her finalist place, and in the finale she walked out with ₹14 lakh; the season's finalists table lists her as fourth runner-up.",
  },
];

const SEASON14_EVICTIONS = [
  ["Sara Gurpal", "10†", "Evicted by the Seniors"],
  ["Shehzad Deol", "18†", "Evicted by housemates and the Seniors"],
  ["Nishant Singh Malkani", "31†", "Evicted by the Green Zone housemates"],
  ["Kavita Kaushik", "31†", "Evicted by public vote; re-entered on Day 36, then walked out on Day 61† after an argument with Rubina Dilaik"],
  ["Naina Singh", "36†", "Evicted by public vote"],
  ["Shardul Pandit", 43, "Evicted by public vote"],
  ["Jaan Kumar Sanu", 50, "Evicted by public vote"],
  ["Pavitra Punia", 57, "Evicted by public vote"],
  ["Aly Goni", 60, "Evicted after losing a task; re-entered around Day 70–71† and finished 3rd runner-up"],
  ["Nikki Tamboli", 64, "Evicted by public vote; re-entered around Day 70–71† and finished 2nd runner-up"],
  ["Rahul Vaidya", "64†", "Walked — quit after feeling homesick; re-entered on Day 74 and finished 1st runner-up"],
  ["Vikas Gupta", 72, "Ejected — he pushed Arshi Khan into the swimming pool; re-entered on Day 80†, walked out again on Day 102 for medical reasons, returned, and was finally evicted on Day 120"],
  ["Kashmera Shah", "78†", "Evicted by public vote"],
  ["Manu Punjabi", "80†", "Walked — quit due to health issues"],
  ["Rahul Mahajan", "93†", "Evicted by public vote"],
  ["Jasmin Bhasin", 99, "Evicted by public vote"],
  ["Eijaz Khan", 106, "Walked — left due to prior commitments; Devoleena Bhattacharjee entered the same day as his proxy"],
  ["Sonali Phogat", 113, "Evicted by public vote"],
  ["Arshi Khan", 127, "Evicted by public vote"],
  ["Abhinav Shukla", "131†", "Evicted by the supporters during Connection Week"],
  ["Devoleena Bhattacharjee", 134, "Evicted by public vote — as Eijaz Khan's proxy; her eviction is counted as Eijaz's eviction"],
];

const SEASON14_MOMENTS = [
  {
    title: "The 'Toofani Seniors' ran the first two weeks",
    text: "Past stars Sidharth Shukla (the Season 13 winner), Hina Khan (the Season 11 runner-up) and Gauahar Khan (the Season 7 winner) lived in the house for the first 18 days, selecting and rejecting the new 'freshers'. The season's first two evictions — Sara Gurpal and Shehzad Deol — were decided by the seniors and housemates rather than a straight public vote.",
  },
  {
    title: "The COVID-era season",
    text: "The premiere was delayed by a month because of heavy rain in Mumbai, and the promos were shot at Salman Khan's farmhouse because of the pandemic. The futuristic Goregaon house carried BB Mall and BB Spa sections, plus a Red Zone — revealed on Day 17 and closed on Day 37 — where nominated housemates had to live.",
  },
  {
    title: "Walk-outs and evictions that became podium finishes",
    text: "Rahul Vaidya quit on Day 64 feeling homesick and Nikki Tamboli was evicted the same day; Aly Goni had been evicted on Day 60. All three came back — and finished as the season's first, second and third runners-up respectively.",
  },
  {
    title: "The Challengers and Rakhi's ₹14 lakh walk",
    text: "Six former contestants — Rakhi Sawant, Arshi Khan, Vikas Gupta, Manu Punjabi, Rahul Mahajan and Kashmera Shah — entered mid-season as 'Challengers' competing for the same trophy. Rakhi reached the finale: she had shredded a ₹14 lakh cheque from the winner's prize money in the BB ATM task to secure her finalist place, and she walked out of the finale with ₹14 lakh.",
  },
  {
    title: "Eijaz Khan's proxy",
    text: "When Eijaz Khan left on Day 106 because of prior work commitments, Devoleena Bhattacharjee entered as his proxy and played in his place for the rest of the season; her eviction on Day 134 is counted in the season record as Eijaz's eviction.",
  },
];

function renderSeason14Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 14 result — Rubina Dilaik won the season",
      `<p>Bigg Boss 14 — styled <em>Bigg Boss: Ab Scene Paltega</em> — ran from <strong>3 October 2020</strong> to the finale on <strong>21 February 2021</strong>: 140 days, 22 housemates, hosted by Salman Khan on Colors TV and Voot Select. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Rubina Dilaik"],
        ["1st runner-up", "Rahul Vaidya"],
        ["2nd runner-up", "Nikki Tamboli"],
        ["3rd runner-up", "Aly Goni"],
        ["4th runner-up", "Rakhi Sawant"],
      ])}
      <p style="margin-top:1rem;">Rakhi Sawant's placing needs both of its facts together: she was the season's fifth finalist, she walked out of the finale with ₹14 lakh — and the finalists table lists her as fourth runner-up.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 14's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 14 final five",
      renderSeasonFinalistCards(SEASON14_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 14 eviction order — who left, and when",
      `<p>Twenty-one housemates left before the finale, in this order (from the season's record) — several of them returned later, as the notes show:</p>
      ${renderSeasonEvictionTable(SEASON14_EVICTIONS)}
      <p style="margin-top:1rem;">Days marked † follow the account the season record's nomination table and weekly summaries support; the record's housemates status table gives a different day for those exits, so the days shown are the primary account, not settled fact. The finale followed on 21 February 2021: Rakhi Sawant walked out with ₹14 lakh (the finalists table lists her as fourth runner-up), then Aly Goni (third runner-up), Nikki Tamboli (second runner-up) and Rahul Vaidya (first runner-up), before Rubina Dilaik was declared the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 14 story — the season's defining moments",
      renderSeasonMoments(SEASON14_MOMENTS),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-15-voting/",
        emoji: "🌴",
        title: "Bigg Boss 15 Voting",
        text: "Tejasswi Prakash's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 15 page →",
      },
      {
        href: "/bigg-boss-19-voting/",
        emoji: "🏛️",
        title: "Bigg Boss 19 Voting",
        text: "Gaurav Khanna's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 19 page →",
      },
      {
        href: "/bigg-boss-18-voting/",
        emoji: "⏳",
        title: "Bigg Boss 18 Voting",
        text: "Karan Veer Mehra's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 18 page →",
      },
      {
        href: "/bigg-boss-17-voting/",
        emoji: "🎭",
        title: "Bigg Boss 17 Voting",
        text: "Munawar Faruqui's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 17 page →",
      },
      {
        href: "/bigg-boss-16-voting/",
        emoji: "🎪",
        title: "Bigg Boss 16 Voting",
        text: "MC Stan's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 16 page →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderSeason14Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 14 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 14 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 14 voting closed when the season ended with the finale on 21 February 2021, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 14?</summary>
        <div class="bb-faq-body">
          <p>Rubina Dilaik won Bigg Boss 14. The final order was: Rahul Vaidya (first runner-up), Nikki Tamboli (second runner-up), Aly Goni (third runner-up) and Rakhi Sawant (the fifth finalist — she walked out of the finale with ₹14 lakh, and the finalists table lists her as fourth runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 14 finalists?</summary>
        <div class="bb-faq-body">
          <p>The five finalists were Rubina Dilaik, Rahul Vaidya, Nikki Tamboli, Aly Goni and Rakhi Sawant. The season ran from 3 October 2020 to 21 February 2021 — 140 days and 22 housemates, hosted by Salman Khan on Colors TV and Voot Select.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 14. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The winner and finalist order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}


// ---------- Past-season voting pages (entries 418 + 419) ----------
// Bigg Boss 12 (entry 418) and Bigg Boss 11 (entry 419) fan re-vote
// pages, plus the hub grid links for Seasons 12 and 11. Every fact
// below comes from the season research files, verified against the
// seasons' Wikipedia articles (see the pack's sources.md): S12 facts
// in ~/workspace/bb-seasons/batch5-12-11/s12/facts.md, S11 facts in
// ~/workspace/bb-seasons/batch5-12-11/s11/facts.md. No prize figure
// of any kind appears on either page: neither season's Wikipedia
// article states a winner's prize, so none is published (the
// press-reported figures are not Wikipedia-stated and are not
// used), and Deepak Thakur's Season 12 finale walk is recorded
// without any amount for the same reason. Season 11's Week 6
// spaceship moment is likewise told without its sums. Exit days
// the research files flag as contested (†) follow the files'
// primary account and are marked † on the pages with a disclosure
// note, never presented as settled fact; Season 11's finale is
// dated by its calendar date only, because the article's accounts
// disagree on its day number (the infobox's season length against
// the tables' finale day). The renderers below reuse the shared
// season helpers defined with the entry 408/409 pages.

// ---------- Bigg Boss 12 (entry 418) ----------

const SEASON12_FINALISTS = [
  {
    name: "Dipika Kakar",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s12-dipika-kakar.webp",
    story:
      "Dipika Kakar won Bigg Boss 12 on finale night, 30 December 2018, closing a 105-day season that began with 20 housemates. She beat Sreesanth in the final two to lift the trophy.",
  },
  {
    name: "Sreesanth",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s12-sreesanth.webp",
    story:
      "Sreesanth finished as first runner-up in the finale on 30 December 2018. The former India cricketer's season included a secret-room stint: he was sent there on Day 24 and was back in the main house by Day 29.",
  },
  {
    name: "Deepak Thakur",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s12-deepak-thakur.webp",
    story:
      "Deepak Thakur's finale ended with a walk: after the first two finalists were eliminated, he chose to walk out of the grand finale, and the season record carries him as 'Walked, 2nd runner-up'.",
  },
  {
    name: "Romil Chaudhary",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s12-romil-chaudhary.webp",
    story:
      "Romil Chaudhary finished as third runner-up in the finale on 30 December 2018 — after the season's fastest turnaround: evicted on Day 14 in a double pair eviction, he re-entered the very next day, Day 15, and played through to the final five.",
  },
  {
    name: "Karanvir Bohra",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/s12-karanvir-bohra.webp",
    story:
      "Karanvir Bohra finished as fourth runner-up when the finale order was declared on 30 December 2018; he and Romil Chaudhary were the first two finalists eliminated on finale night.",
  },
];

const SEASON12_EVICTIONS = [
  ["Kriti Verma", "14†", "Evicted by public vote — went out with her jodi partner Roshmi Banik"],
  ["Roshmi Banik", "14†", "Evicted by public vote — went out with her jodi partner Kriti Verma"],
  ["Nirmal Singh", "14†", "Evicted by public vote — went out with his jodi partner Romil Chaudhary"],
  ["Romil Chaudhary", 14, "Evicted by public vote; re-entered on Day 15 and finished 3rd runner-up"],
  ["Neha Pendse", 28, "Evicted by public vote"],
  ["Sourabh Patel", "35†", "Evicted by public vote"],
  ["Saba Khan", 42, "Evicted by public vote"],
  ["Anup Jalota", "42†", "Evicted by public vote; he had earlier spent Days 21–29 in the secret room after a fake eviction"],
  ["Urvashi Vani", "49†", "Evicted by housemates"],
  ["Shivashish Mishra", "62†", "Ejected"],
  ["Srishty Rode", 70, "Evicted by public vote"],
  ["Jasleen Matharu", "84†", "Evicted by public vote"],
  ["Megha Dhade", "84†", "Evicted by public vote"],
  ["Rohit Suchanti", 91, "Evicted by public vote"],
  ["Somi Khan", 98, "Evicted by public vote"],
  ["Surbhi Rana", 102, "Evicted by public vote"],
];

const SEASON12_MOMENTS = [
  {
    title: "The 'Vichitra Jodis' theme",
    text: "The season was built on pairs: contestants entered as 'jodis' — duos of spouses, siblings, friends and co-workers — alongside single housemates. The public had auditioned for the season by sending video clips through the Voot app from April 2018.",
  },
  {
    title: "The Bigg Boss Outhouse",
    text: "Four hopefuls — Surbhi Rana, Kriti Verma, Roshmi Banik and Mital Joshi — lived in a Bigg Boss Outhouse from a day before the premiere, with the footage streaming on Voot. In the 'Taala Khol' task the public voted Kriti and Roshmi into the main house on Day 1; Mital Joshi went home without ever entering the main house, and Surbhi Rana returned as a wild card on Day 15.",
  },
  {
    title: "Two secret-room stints",
    text: "Anup Jalota was sent to the secret room on Day 21 instead of being evicted — that week is recorded as a no-eviction week — and Sreesanth joined the secret room on Day 24. Both were back in the main house by Day 29; Anup was finally evicted for real later in the season.",
  },
  {
    title: "Romil Chaudhary's 24-hour turnaround",
    text: "Romil Chaudhary was evicted on Day 14 in Week 2's double pair eviction — and re-entered the very next day, Day 15. He went on to finish as third runner-up.",
  },
  {
    title: "Deepak Thakur's finale walk",
    text: "In the grand finale, with five finalists left, Karanvir Bohra and Romil Chaudhary were eliminated first; Deepak Thakur then chose to walk out — recorded as 'Walked, 2nd runner-up' — leaving Dipika Kakar and Sreesanth as the final two.",
  },
];

function renderSeason12Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 12 result — Dipika Kakar won the season",
      `<p>Bigg Boss 12 — styled <em>Bigg Boss: Vichitra Jodis</em> — ran from <strong>16 September 2018</strong> to the finale on <strong>30 December 2018</strong>: 105 days, 20 housemates, hosted by Salman Khan on Colors TV. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Dipika Kakar"],
        ["1st runner-up", "Sreesanth"],
        ["2nd runner-up", "Deepak Thakur"],
        ["3rd runner-up", "Romil Chaudhary"],
        ["4th runner-up", "Karanvir Bohra"],
      ])}
      <p style="margin-top:1rem;">Deepak Thakur's second runner-up placing came with the finale's biggest turn: after Karanvir Bohra and Romil Chaudhary were eliminated, he chose to walk out of the finale, leaving Dipika Kakar and Sreesanth as the final two.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 12's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 12 final five",
      renderSeasonFinalistCards(SEASON12_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 12 eviction order — who left, and when",
      `<p>Sixteen housemates left before the finale, in this order (from the season's record) — one of them, Romil Chaudhary, came straight back, as the notes show:</p>
      ${renderSeasonEvictionTable(SEASON12_EVICTIONS)}
      <p style="margin-top:1rem;">Days marked † are contested inside the season record: its housemates status table and its nominations table give different days for those exits — for Nirmal Singh, Sourabh Patel, Anup Jalota, Urvashi Vani and Shivashish Mishra the gap is a week or more (Anup Jalota's and Sourabh Patel's days are even swapped between the two accounts), and for Kriti Verma, Roshmi Banik, Jasleen Matharu and Megha Dhade they differ by a day — so the days shown follow the primary account, not settled fact. The finale followed on Day 105: Karanvir Bohra (fourth runner-up) and Romil Chaudhary (third runner-up) were eliminated first, Deepak Thakur walked out (recorded as 'Walked, 2nd runner-up') and Sreesanth finished as first runner-up, before Dipika Kakar was declared the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 12 story — the season's defining moments",
      renderSeasonMoments(SEASON12_MOMENTS),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-11-voting/",
        emoji: "🏠",
        title: "Bigg Boss 11 Voting",
        text: "Shilpa Shinde's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 11 page →",
      },
      {
        href: "/bigg-boss-19-voting/",
        emoji: "🏛️",
        title: "Bigg Boss 19 Voting",
        text: "Gaurav Khanna's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 19 page →",
      },
      {
        href: "/bigg-boss-18-voting/",
        emoji: "⏳",
        title: "Bigg Boss 18 Voting",
        text: "Karan Veer Mehra's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 18 page →",
      },
      {
        href: "/bigg-boss-17-voting/",
        emoji: "🎭",
        title: "Bigg Boss 17 Voting",
        text: "Munawar Faruqui's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 17 page →",
      },
      {
        href: "/bigg-boss-16-voting/",
        emoji: "🎪",
        title: "Bigg Boss 16 Voting",
        text: "MC Stan's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 16 page →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderSeason12Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 12 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 12 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 12 voting closed when the season ended with the finale on 30 December 2018, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 12?</summary>
        <div class="bb-faq-body">
          <p>Dipika Kakar won Bigg Boss 12. The final order was: Sreesanth (first runner-up), Deepak Thakur (second runner-up — he walked out during the finale), Romil Chaudhary (third runner-up) and Karanvir Bohra (fourth runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 12 finalists?</summary>
        <div class="bb-faq-body">
          <p>The five finalists were Dipika Kakar, Sreesanth, Deepak Thakur, Romil Chaudhary and Karanvir Bohra. The season ran from 16 September 2018 to 30 December 2018 — 105 days and 20 housemates, hosted by Salman Khan on Colors TV.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 12. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The winner and finalist order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}

// ---------- Bigg Boss 11 (entry 419) ----------

const SEASON11_FINALISTS = [
  {
    name: "Shilpa Shinde",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s11-shilpa-shinde.webp",
    story:
      "Shilpa Shinde won Bigg Boss 11 on finale night, 14 January 2018. She beat Hina Khan in the final two — a finish settled by a live vote during the finale itself — to lift the trophy.",
  },
  {
    name: "Hina Khan",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s11-hina-khan.webp",
    story:
      "Hina Khan finished as first runner-up in the finale on 14 January 2018, losing the final-two live vote to Shilpa Shinde.",
  },
  {
    name: "Vikas Gupta",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s11-vikas-gupta.webp",
    story:
      "Vikas Gupta finished as second runner-up when the finale order was declared on 14 January 2018.",
  },
  {
    name: "Puneesh Sharma",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s11-puneesh-sharma.webp",
    story:
      "Puneesh Sharma finished as third runner-up; he was the first of the four finalists eliminated on finale night, 14 January 2018.",
  },
];

const SEASON11_EVICTIONS = [
  ["Zubair Khan", "7†", "Ejected"],
  ["Sshivani Durga", 14, "Evicted by public vote"],
  ["Lucinda Nicholas", 15, "Evicted by housemates"],
  ["Jyoti Kumari", 28, "Evicted by public vote"],
  ["Dhinchak Pooja", 35, "Evicted by public vote — the season's only wild-card entrant, who had entered on Day 21"],
  ["Mehjabi Siddiqui", 42, "Evicted by public vote"],
  ["Sabyasachi Satpathy", 42, "Evicted by public vote"],
  ["Benafsha Soonawalla", 49, "Evicted by public vote"],
  ["Sapna Choudhary", "55†", "Evicted by public vote"],
  ["Bandgi Kalra", 63, "Evicted by public vote"],
  ["Hiten Tejwani", 77, "Evicted by housemates"],
  ["Arshi Khan", 83, "Evicted by public vote"],
  ["Priyank Sharma", "90†", "Evicted by public vote; he had first been ejected on Day 6 for pushing Akash Dadlani during a fight, then re-entered on Day 26"],
  ["Luv Tyagi", 98, "Evicted by public vote"],
  ["Akash Dadlani", 102, "Evicted by public vote"],
];

const SEASON11_MOMENTS = [
  {
    title: "The Padosi theme",
    text: "Four housemates — Lucinda Nicholas, Mehjabi Siddiqui, Sabyasachi Satpathy and Luv Tyagi — were introduced on premiere night as 'padosi' (neighbours) living in a separate house, handing tasks to the main house. They held powers to nominate and save, later joined the main house — and Lucinda was voted out by the housemates on Day 15.",
  },
  {
    title: "Priyank Sharma's ejection and return",
    text: "Priyank Sharma was ejected on Day 6 for physically pushing Akash Dadlani during a fight — one of the earliest ejections in the show's run to that point. He re-entered on Day 26 and survived until Day 90†, finishing just outside the finale week.",
  },
  {
    title: "The spaceship task wiped out the prize money",
    text: "In Week 6 the garden became a spaceship, and each stranded 'astronaut' carried a sum that would be deducted from the winner's prize money when they stepped down. All fourteen sums were deducted, and the week's record states the result plainly: the prize money became zero.",
  },
  {
    title: "Hiten Tejwani was evicted by the housemates",
    text: "On Day 77, Hiten Tejwani went out on the housemates' votes rather than the public's — one of only two housemate-vote evictions of the season, the other being Lucinda Nicholas on Day 15.",
  },
  {
    title: "A no-eviction week",
    text: "Week 10 saw no eviction at all, because the voting lines were closed.",
  },
];

function renderSeason11Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 11 result — Shilpa Shinde won the season",
      `<p>Bigg Boss 11 — styled <em>Bigg Boss 11: Padosi Bajayenge Barah</em> — ran from <strong>1 October 2017</strong> to the finale on <strong>14 January 2018</strong>: 19 housemates, hosted by Salman Khan on Colors TV, with the season also carried on Voot. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Shilpa Shinde"],
        ["1st runner-up", "Hina Khan"],
        ["2nd runner-up", "Vikas Gupta"],
        ["3rd runner-up", "Puneesh Sharma"],
      ])}
      <p style="margin-top:1rem;">The last two standing were Shilpa Shinde and Hina Khan, and their order was settled by a live vote during the finale itself.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 11's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 11 final four",
      renderSeasonFinalistCards(SEASON11_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 11 eviction order — who left, and when",
      `<p>Fifteen housemates left before the finale, in this order (from the season's record):</p>
      ${renderSeasonEvictionTable(SEASON11_EVICTIONS)}
      <p style="margin-top:1rem;">Days marked † are contested inside the season record: Zubair Khan's exit is a three-way split (the housemates status table says ejected on Day 7, the nominations table says Day 6, and the weekly summary calls it a public-vote eviction), while Sapna Choudhary's and Priyank Sharma's days differ by one between the status table and the other two accounts — so the days shown follow the primary account, not settled fact. The finale followed on 14 January 2018: Puneesh Sharma (third runner-up) and Vikas Gupta (second runner-up) were eliminated, Hina Khan finished as first runner-up, and Shilpa Shinde was declared the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 11 story — the season's defining moments",
      renderSeasonMoments(SEASON11_MOMENTS),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-12-voting/",
        emoji: "👥",
        title: "Bigg Boss 12 Voting",
        text: "Dipika Kakar's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 12 page →",
      },
      {
        href: "/bigg-boss-19-voting/",
        emoji: "🏛️",
        title: "Bigg Boss 19 Voting",
        text: "Gaurav Khanna's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 19 page →",
      },
      {
        href: "/bigg-boss-18-voting/",
        emoji: "⏳",
        title: "Bigg Boss 18 Voting",
        text: "Karan Veer Mehra's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 18 page →",
      },
      {
        href: "/bigg-boss-17-voting/",
        emoji: "🎭",
        title: "Bigg Boss 17 Voting",
        text: "Munawar Faruqui's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 17 page →",
      },
      {
        href: "/bigg-boss-16-voting/",
        emoji: "🎪",
        title: "Bigg Boss 16 Voting",
        text: "MC Stan's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 16 page →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderSeason11Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 11 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 11 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 11 voting closed when the season ended with the finale on 14 January 2018, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 11?</summary>
        <div class="bb-faq-body">
          <p>Shilpa Shinde won Bigg Boss 11. The final order was: Hina Khan (first runner-up), Vikas Gupta (second runner-up) and Puneesh Sharma (third runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 11 finalists?</summary>
        <div class="bb-faq-body">
          <p>The four finalists were Shilpa Shinde, Hina Khan, Vikas Gupta and Puneesh Sharma. The season ran from 1 October 2017 to 14 January 2018 — 19 housemates, hosted by Salman Khan on Colors TV.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 11. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The winner and finalist order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}


export function renderBiggBossPollPage(poll) {
  if (poll.pollType === "journey") return renderBiggBossJourneyPage(poll);
  if (poll.pollType === "captain-page") return renderBiggBossCaptainPage(poll);
  if (poll.pollType === "top5") return renderBiggBossTop5Page(poll);
  if (poll.pollType === "trend") return renderBiggBossTrendPage(poll);
  if (poll.pollType === "finale") return renderBiggBossFinalePage(poll);
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

    ${poll.slug === "bigg-boss-20-scout-vs-kaashvi" ? "" : bbCoverFigure(poll.image, poll.h1)}

    ${renderOpenPollDisclaimer()}

    ${poll.slug === "bigg-boss-20-voting" ? renderNominationCallout() : ""}

    ${renderPollCards(poll)}

    ${renderAdSenseUnit("after-voting", "Advertisement")}

    ${renderLeaderboard(poll)}

    ${poll.slug === "bigg-boss-20-scout-love-story" ? renderScoutLoveSections() : ""}
    ${poll.slug === "bigg-boss-20-yung-vs-scout" ? renderYungScoutSections() : ""}
    ${poll.slug === "bigg-boss-20-next-captain-poll" ? renderNextCaptainExplainer() : ""}
    ${poll.slug === "bigg-boss-20-scout-vs-kaashvi" ? renderScoutKaashviSections() : ""}
    ${poll.slug === "bigg-boss-20-eviction-list" ? renderEvictionListSections() : ""}
    ${poll.slug === "bigg-boss-20-scout-shaves-head" ? renderScoutHeadShaveSections() : ""}
    ${poll.slug === "bigg-boss-20-weekend-ka-vaar-episodes-70-71" ? renderWkvWeek10Sections() : ""}
    ${poll.slug === "bigg-boss-20-voting-week-11" ? renderWeek11VotingSections() : ""}
    ${poll.slug === "who-will-win-bigg-boss-20" ? renderWhoWillWinSections() : ""}
    ${poll.slug === "bigg-boss-voting" ? renderVotingHubSections() : ""}
    ${poll.slug === "bigg-boss-17-voting" ? renderSeason17Sections() : ""}
    ${poll.slug === "bigg-boss-19-voting" ? renderSeason19Sections() : ""}
    ${poll.slug === "bigg-boss-16-voting" ? renderSeason16Sections() : ""}
    ${poll.slug === "bigg-boss-13-voting" ? renderSeason13Sections() : ""}
    ${poll.slug === "bigg-boss-18-voting" ? renderSeason18Sections() : ""}
    ${poll.slug === "bigg-boss-ott-1-voting" ? renderOtt1Sections() : ""}
    ${poll.slug === "bigg-boss-ott-2-voting" ? renderOtt2Sections() : ""}
    ${poll.slug === "bigg-boss-ott-3-voting" ? renderOtt3Sections() : ""}
    ${poll.slug === "bigg-boss-15-voting" ? renderSeason15Sections() : ""}
    ${poll.slug === "bigg-boss-14-voting" ? renderSeason14Sections() : ""}
    ${poll.slug === "bigg-boss-12-voting" ? renderSeason12Sections() : ""}
    ${poll.slug === "bigg-boss-11-voting" ? renderSeason11Sections() : ""}

    ${renderAdSenseUnit("top", "Sponsored / Advertisement")}

    ${renderDuelLinks(poll.slug)}

    ${poll.slug === "bigg-boss-20-voting" ? renderThisWeekPanel() : ""}
    ${poll.slug === "bigg-boss-20-voting" ? renderEmbeddedPoll(pollBySlug.get("bigg-boss-20-voting-week-11")) : ""}
    ${poll.slug === "bigg-boss-20-voting" ? renderEmbeddedPoll(pollBySlug.get("bigg-boss-20-eviction-prediction-week-11")) : ""}
    ${poll.slug === "bigg-boss-20-voting" ? renderPredictionScorecard() : ""}
    ${poll.slug === "bigg-boss-20-voting" ? renderTrendSnapshot() : ""}
    ${poll.slug === "bigg-boss-20-voting" ? renderSeasonArchive() : ""}

    ${poll.slug === "bigg-boss-20-yung-vs-scout" ? renderYungScoutPunishments() : ""}

    ${renderAdSenseUnit("after-leaderboard", "Advertisement")}

    ${renderJioCinemaGuide()}

    ${renderOpenPollDisclaimer()}

    ${renderAdSenseUnit("bottom", "Advertisement")}

    ${poll.slug === "bigg-boss-voting" ? renderVotingHubFaq() : poll.slug === "bigg-boss-17-voting" ? renderSeason17Faq() : poll.slug === "bigg-boss-19-voting" ? renderSeason19Faq() : poll.slug === "bigg-boss-16-voting" ? renderSeason16Faq() : poll.slug === "bigg-boss-13-voting" ? renderSeason13Faq() : poll.slug === "bigg-boss-18-voting" ? renderSeason18Faq() : poll.slug === "bigg-boss-ott-1-voting" ? renderOtt1Faq() : poll.slug === "bigg-boss-ott-2-voting" ? renderOtt2Faq() : poll.slug === "bigg-boss-ott-3-voting" ? renderOtt3Faq() : poll.slug === "bigg-boss-15-voting" ? renderSeason15Faq() : poll.slug === "bigg-boss-14-voting" ? renderSeason14Faq() : poll.slug === "bigg-boss-12-voting" ? renderSeason12Faq() : poll.slug === "bigg-boss-11-voting" ? renderSeason11Faq() : renderFaqSection(poll)}
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
      <p class="bb-hero-lead">Complete, updated directory of every Bigg Boss Season 20 housemate — all 16 originals plus wild cards Manish Goel and Nakul Dhull — with corrected ages where they can be verified, what each housemate was known for before the show, how their journey has actually gone up to 26 October 2026, and whether they are still in the house. Where a date of birth could not be reliably verified, we say so rather than guessing.</p>
    </header>

    ${bbCoverFigure("/assets/bb20-new/covers/bigg-boss-20-contestants.jpg", "Bigg Boss 20 contestants cover")}

    <section class="bb-status-summary">
      <h2>At a glance — who is still in?</h2>
      <ul>
        <li><strong>Still in the house (at 26 Oct, after the Week 8 nominations):</strong> Gullu (Kushal Tanwar), Qazi Touqeer, Tanmay 'Scout' Singh, Yung DSA, Kanika Mann, Aamrapali Dubey, Aasif Khan, Mahhi Vij (current captain), Arishfa Khan, Love Gill, Uditi Singh, Manish Goel (wild card)</li>
        <li><strong>Evicted:</strong> Rohed Khan (Week 2), Isha Rikhi (Week 3), Rhiti Tiwari (Week 4, mid-week), Aman Gandhi (Week 6), MC Mary Kom (Week 7, confirmed on air 24 October)</li>
        <li><strong>Removed by Bigg Boss:</strong> Nakul Dhull (wild card, Week 6, after a reported physical altercation with Gullu)</li>
        <li><strong>Nominated — Week 8:</strong> Gullu (Kushal Tanwar), Kanika Mann, Tanmay 'Scout' Singh, Aasif Khan, Love Gill, Aamrapali Dubey</li>
        <li><strong>Captain:</strong> Mahhi Vij, from 23 October — Qazi Touqeer won the captaincy task round and chose her. Scout was the previous captain.</li>
      </ul>
    </section>

    ${renderOpenPollDisclaimer()}

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
              ${c.evicted || c.removed ? `<span class="bb-wiki-status-note">${c.trend}</span>` : `<a href="/bigg-boss-20-voting/" class="bb-wiki-vote-btn">Vote in Open Poll</a>`}
            </div>
          </div>
        </article>
      `
        )
        .join("")}
    </div>

    ${renderAdSenseUnit("contestants-mid", "Advertisement")}
    ${renderJioCinemaGuide()}
    ${renderOpenPollDisclaimer()}
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
      <div class="bb-hero-badge">📋 VISITBEST GUIDE · OFFICIAL VOTING ONLY VIA JIOCINEMA / JIOHOTSTAR</div>
      <h1 class="bb-hero-title">Bigg Boss 20 Voting Rules & Timings — How Official Voting Works</h1>
      <p class="bb-hero-lead">A VisitBest explainer: how official Bigg Boss Season 20 voting works, and how it differs from the VisitBest Open Poll. VisitBest does not publish missed-call voting numbers — previously listed unverified numbers have been removed.</p>
    </header>

    ${bbCoverFigure("/assets/bb20-new/covers/bigg-boss-20-voting-rules.jpg", "Bigg Boss 20 voting rules and timings cover")}

    ${renderOpenPollDisclaimer()}

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
        <h2>3. Public Sentiment & the VisitBest Open Poll</h2>
        <p><strong>Open Poll — for audience sentiment only.</strong> VisitBest runs a non-binding audience sentiment poll for entertainment and discussion. It is NOT official Bigg Boss voting, it does not decide nominations or evictions, and its results are not official vote counts. To officially support a housemate, always vote via JioCinema / JioHotstar as announced on air.</p>
      </section>

      <section class="bb-rule-card">
        <h2>4. This Season's Twist: Lives and Lifelines</h2>
        <p>Season 20 is a lives-based format, and that changes what a vote can and cannot do. As this site's season record shows, housemates hold lives (also called lifelines) that can be lost in two different ways: inside the house, in tasks and sequences — Kanika Mann took a life from Rohed Khan in the 2X Room sequence, and Isha Rikhi and Rhiti Tiwari each lost a life in the Week 3 ration-ranking task — and after the public vote, as happened to Rohed Khan and Isha Rikhi, who each lost their last life that way. A housemate who runs out of lives can leave without the public vote being the only cause, so no single week's voting tells the whole story of an exit.</p>
      </section>

      <section class="bb-rule-card">
        <h2>5. How Housemates Have Actually Left This Season</h2>
        <p>The season record on this site shows three different exit routes, and only one of them is a straightforward public-vote eviction:</p>
        <ul>
          <li><strong>Evicted on public votes:</strong> Aman Gandhi (Week 6) — named in the bottom three alongside Uditi Singh and Mary Kom and evicted on public votes, announced on 18 October. A week earlier he had reportedly received the fewest votes, but with no eviction that week he lost a lifeline instead.</li>
          <li><strong>Format exits after losing their last life:</strong> Rhiti Tiwari left mid-week in Week 4 after the captaincy contenders took her last life — an exit with no Weekend Ka Vaar farewell. Mary Kom's Week 7 elimination, announced by guest host Rohit Shetty on Weekend Ka Vaar, also followed her losing both her lifelines, alongside reports that she had received the fewest votes.</li>
          <li><strong>Removed, not evicted:</strong> wild card Nakul Dhull was asked to leave in Week 6 after a physical altercation with Gullu, for breaking the house rules. No vote was involved, which is why this site lists him as "Removed", never "Evicted".</li>
        </ul>
        <p>At the Week 8 stage of the season, the housemates recorded as nominated on this site are Gullu, Kanika Mann, Scout, Aasif Khan, Love Gill and Aamrapali Dubey, with Mahhi Vij as captain. Nomination lists change every week — treat this as a dated snapshot, and check the contestants page for the current record.</p>
      </section>

      <section class="bb-rule-card">
        <h2>6. Quick Questions</h2>
        <h3>Why is my favourite not among the official voting options?</h3>
        <p>Official voting options cover only the current round's nominees. A name missing from the official options and a name missing from the VisitBest Open Poll are two different things — the Open Poll list is VisitBest's own, and it never decides who is up for eviction.</p>
        <h3>Can I vote outside the announced window?</h3>
        <p>No. There is no official voting outside the windows the show announces on air and in the official app for that week, and VisitBest does not publish its own official voting schedule.</p>
        <h3>Can I vote by missed call instead?</h3>
        <p>No. VisitBest previously listed unverified missed-call numbers; they were removed because no reliable official source for them could be verified. Official voting is only via JioCinema / JioHotstar, as announced on air.</p>
      </section>
    </div>

    ${renderJioCinemaGuide()}
    ${renderOpenPollDisclaimer()}
  </div>
  `;
}

// Bigg Boss CSS Stylesheet
export const css = `
/* Bigg Boss 20 High-Hype Styling */

.bb-open-disclaimer { background:#fff8e6; border:1px solid #ffd591; border-left:5px solid #d48806; border-radius:12px; padding:1rem 1.25rem; margin:1.5rem 0; color:#613400; }
.bb-open-disclaimer h2 { margin:0 0 .5rem; font-size:1.05rem; color:#873800; }
.bb-open-disclaimer p { margin:0; font-size:.92rem; line-height:1.55; }
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
      showToast('You already voted for this contestant in this Open Poll!');
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
    showToast('Open Poll vote registered for ' + contestantId.replace(/-/g, ' ').toUpperCase() + '! This is audience sentiment only and does not decide evictions.');
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
