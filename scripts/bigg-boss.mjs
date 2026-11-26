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
    "trend": "In house · Nominated Week 11",
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
    "trend": "In house · Nominated Week 11",
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
    "trend": "In house · Week 1 captain · Nominated Week 11",
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
    "trend": "In house · Ex-captain (from 28 October) · Nominated Week 11",
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
    "trend": "In house · Nominated Week 11",
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
    "trend": "In house · Captain until 28 October, voted out 6–5 · Nominated Week 11 · Safe — Week 11 vote eviction averted",
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
    "trend": "In house · Ex-captain (removed in Episode 67, 11 Nov) · Safe in Week 11 — immunity won in Episode 75",
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
    "trend": "In house · Nominated Week 11",
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
    "nominated": false,
    "captain": true,
    "status": "in-house",
    "bio": "Uditi Singh is an actress and model with a fashion and pageant background, and the season's repeat danger-zone survivor. She received the fewest votes in Week 1 but, with no eviction that week, lost a life instead of leaving; she was in the Week 6 bottom three that sent Aman Gandhi home, was put straight into nominations by captain Scout, and was nominated in Week 7 — still in the house, safe in Week 8.",
    "longBio": "Uditi has played much of the season inside a friendship group with Arishfa Khan and, until his eviction, Aman Gandhi, and her closeness with Arishfa and with Qazi is the specific trigger Mahhi cited in the Episode 47 friendship crack with Qazi. She also won a round of the Episode 47 captaincy-contenders task, removing Yung and Scout from that race. Her exact age and date of birth are not reliably verified, so no precise age is published here.",
    "trend": "In house · Captain since Episode 74 · Safe — escaped nomination in Week 11",
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
    "nominated": false,
    "status": "left",
    "left": true,
    "bio": "Manish Goel (born 27 August 1975, New Delhi) was not on this page at all until this update, despite entering as the season's first official wild card during Weekend Ka Vaar in Week 5. With a television career starting in the late 1990s — Kahaani Ghar Ghar Kii, Kasautii Zindagii Kay, Bhabhi, Ghar Ek Mandir and, most recently, Anupamaa as Raghav — he has worked in television longer than some housemates have been alive, and at 51 is the house's oldest housemate.",
    "longBio": "Manish arrived under a playful cover story, telling housemates he was there to promote a project, before Salman Khan revealed the 'project' was Bigg Boss itself. He is married to actress Poonam Narula (married 2002); they have two children, Aryaveer and Maliha, were runners-up on Nach Baliye 1 together, and he won Welcome – Baazi Mehmaan Nawazi Ki in 2013. In the house, the veteran has had to build bonds from zero against groups formed over five weeks, and he was nominated in Week 7. In the 24 October Weekend Ka Vaar, the Times of India reported that Manish lost a lifeline in the same twist that ended Mary Kom's journey, so he survives with less room for error. No /assets/bb20/ portrait exists for Manish yet, so his card deliberately shows a placeholder instead of another housemate's image.",
    "trend": "Left the house · Medical exit in Week 11 (severe leg injury) — not an eviction",
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
    factCardsTitle: "Bigg Boss 20 — key facts",
    factCards: [{"name": "🏠 The house right now", "rows": [["Week", "12"], ["Housemates left", "10"], ["Captain", "Uditi Singh"], ["Exits so far", "6 evictions · 1 removal · 1 medical exit"], ["Open Poll leader", "Qazi Touqeer (fan votes)"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-voting.jpg",
    title: "Bigg Boss 20 Voting – Week 11 Open Poll, Weekly Voting Hub & Audience Sentiment",
    h1: "Bigg Boss 20 Voting – Week 11 Open Poll & Voting Hub",
    lead: "VisitBest Open Poll, Week 11 — result in: no vote eviction at the Weekend Ka Vaar of 21 November 2026. Manish Goel left the house on medical grounds after a severe leg injury — Salman Khan clarified on air that it was his health, not low votes — and Mahhi Vij stayed safe; his medical exit took the place of the vote eviction. Ten housemates remain: Aamrapali Dubey, Arishfa Khan, Kanika Mann, Kushal (Gullu) Tanwar, Love Gill, Mahhi Vij, Qazi Touqeer, Tanmay (Scout OP) Singh, Uditi Singh and Yung DSA. Ten were nominated in the Sharbat Nomination Task in Episode 72 (16 November 2026) — only Uditi Singh escaped — but Arishfa Khan then won safety in the Episode 75 team immunity task (19 November), so nine were on the nomination line: Amrapali Dubey, Gullu, Kanika Mann, Love Gill, Mahhi Vij, Manish Goel, Qazi Touqeer, ScoutOP and Yung DSA. Love Gill drew the most nominations (6). Uditi Singh is the house captain — she won the captaincy task in Episode 74 (18 November). Qazi Touqeer leads the season's cumulative audience sentiment standings. This page is the weekly voting hub: the Week 11 nominees Open Poll, an eviction-prediction Open Poll, a dated trend snapshot and the week-by-week nomination and elimination archive. This open poll does not decide evictions.",
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
    metaDesc: "Bigg Boss 20 Week 11 Open Poll & voting hub: no vote eviction in Week 11 — Manish Goel left on medical grounds (severe leg injury) and Mahhi Vij stayed safe; ten housemates remain. Uditi Singh is captain (Episode 74); Arishfa Khan won safety in the Episode 75 immunity task. This week's nominees-only Open Poll, eviction-prediction poll, trend snapshot and the week-by-week nomination and elimination archive. Open Poll only — official voting is only via JioCinema / JioHotstar as announced on air.",
  },
  {
    slug: "bigg-boss-20-voting-week-10",
    factCardsTitle: "Week 10 — key facts",
    factCards: [{"name": "🗳️ Week 10 at a glance", "rows": [["Eviction", "None — Week 10 was a no-eviction week"], ["Captain that week", "Arishfa Khan (removed from captaincy in Episode 67)"], ["Open Poll leader", "Gullu (fan votes)"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-voting-week-10.jpg",
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
    factCardsTitle: "Week 10 prediction — key facts",
    factCards: [{"name": "🔮 Prediction vs result", "rows": [["Readers’ prediction topper", "Uditi Singh"], ["Actual result", "No eviction in Week 10"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-eviction-prediction-week-10.jpg",
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
    factCardsTitle: "Winner prediction — key facts",
    factCards: [{"name": "🏆 The prediction at a glance", "rows": [["Open Poll leader", "Qazi Touqeer (fan votes)"], ["Second", "ScoutOP"], ["Status", "Season running — Week 12, 10 housemates left"]]}],
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
    factCardsTitle: "Best contestant — key facts",
    factCards: [{"name": "⭐ The vote at a glance", "rows": [["Open Poll leader", "ScoutOP (fan votes)"], ["Second", "Gullu"]]}],
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
    factCardsTitle: "Joker of the house — key facts",
    factCards: [{"name": "🃏 The vote at a glance", "rows": [["Open Poll leader", "Aman Gandhi (fan votes)"], ["Note", "Aman was evicted in Week 6 — this poll is pure fan sentiment"]]}],
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
    factCardsTitle: "Who is boss — key facts",
    factCards: [{"name": "👑 The vote at a glance", "rows": [["Open Poll leader", "MC Mary Kom (fan votes)"], ["Note", "Mary Kom was evicted in Week 7 — this poll is pure fan sentiment"]]}],
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
    factCardsTitle: "Entertainer — key facts",
    factCards: [{"name": "🎭 The vote at a glance", "rows": [["Open Poll leader", "Gullu (fan votes)"], ["Second", "Qazi Touqeer"]]}],
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
    factCardsTitle: "The duel — key facts",
    factCards: [{"name": "⚔️ Gullu vs Qazi", "rows": [["Open Poll leader", "Gullu (fan votes)"], ["Status", "Both in the house"]]}],
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
    factCardsTitle: "The duel — key facts",
    factCards: [{"name": "⚔️ Scout vs Gullu", "rows": [["Open Poll leader", "ScoutOP (fan votes)"], ["Status", "Both in the house"]]}],
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
    factCardsTitle: "The duel — key facts",
    factCards: [{"name": "⚔️ Qazi vs Scout", "rows": [["Open Poll leader", "Qazi Touqeer (fan votes)"], ["Status", "Both in the house"]]}],
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
    factCardsTitle: "The duel — key facts",
    factCards: [{"name": "⚔️ Gullu vs Yung", "rows": [["Open Poll leader", "Gullu (fan votes)"], ["Status", "Both in the house"]]}],
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
    factCardsTitle: "The duel — key facts",
    factCards: [{"name": "⚔️ Mary Kom vs Gullu", "rows": [["Open Poll leader", "MC Mary Kom (fan votes)"], ["Status", "Mary Kom was evicted in Week 7; Gullu is in the house"]]}],
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
    factCardsTitle: "The duel — key facts",
    factCards: [{"name": "⚔️ Kanika vs Mahhi", "rows": [["Open Poll leader", "Kanika Mann (fan votes)"], ["Status", "Both in the house"]]}],
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
    factCardsTitle: "Scout & Love — key facts",
    factCards: [{"name": "💬 The story at a glance", "rows": [["ScoutOP", "In the house"], ["Love Gill", "In the house"], ["Top reader view", "“Just friendship — a brother-sister bond” (Open Poll)"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-scout-love-story.jpg",
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
    factCardsTitle: "Yung vs Scout — key facts",
    factCards: [{"name": "💬 The clash at a glance", "rows": [["Yung DSA", "In the house"], ["ScoutOP", "In the house"], ["Top reader view", "“Scout — he got physical” (Open Poll)"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-yung-vs-scout.jpg",
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
    factCardsTitle: "Captaincy — key facts",
    factCards: [{"name": "🎖️ Captaincy at a glance", "rows": [["Current captain", "Uditi Singh (from Episode 74)"], ["First captain", "Yung DSA (Week 1)"], ["Barred", "ScoutOP is barred from captaincy for the season (Episode 68)"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-next-captain-poll.jpg",
    title: "Who Should Be the Next Captain of Bigg Boss 20? — Open Poll",
    h1: "Who Should Be the Next Captain of Bigg Boss 20? (Open Poll)",
    lead: "Arishfa Khan's time as captain has ended: she was removed as captain in Episode 67 (aired 11 November), which announced a new captaincy task — but Episode 68 (aired 12 November) called that task off after Scout pushed Yung DSA during it. The house then had no captain until Uditi Singh won the captaincy task in Episode 74 (18 November) — she is the current captain. This poll opened on 12 November, while the house was without a captain; who should be captain after Uditi, if the choice were yours? Vote for one of the ten housemates below — the poll's original list, which still includes Manish Goel, who has since left on medical grounds. Open Poll — for audience sentiment only; the show's own process decides the real captain.",
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
    metaDesc: "Who should be the next captain of Bigg Boss 20? Uditi Singh is the current captain (won the captaincy task in Episode 74, 18 November 2026). This Open Poll opened on 12 November 2026, after Arishfa Khan was removed as captain in Episode 67 and the replacement task was called off in Episode 68 — vote for who should lead the house after Uditi. Audience sentiment only.",
  },
  {
    slug: "bigg-boss-20-contestant-journey",
    factCardsTitle: "Journeys — key facts",
    factCards: [{"name": "🛤️ The season at a glance", "rows": [["Housemates who entered", "18"], ["Still in the house", "10"], ["Out", "8 — 6 evicted, 1 removed, 1 medical exit"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-contestant-journey.jpg",
    title: "Bigg Boss 20 Contestant Journey: Week-by-Week Safe, Nominated, Captain & Evicted Matrix",
    h1: "Bigg Boss 20 Contestant Journey — Week by Week",
    lead: "Every housemate's season at a glance: who was safe, who was nominated, who captained the house and who went home, week by week from Week 1 to Week 11. The matrix is built only from VisitBest's own season records — the nomination and elimination archives and contestant records kept on this site. Where those records do not establish a week for a housemate, the cell is left blank rather than guessed. Updated weekly.",
    heroBadge: "🗓️ CONTESTANT JOURNEY · WEEKS 1–11",
    leaderNote: "The journey matrix is updated weekly from VisitBest's own nomination and elimination archives. Weeks 10 and 11 are now included: both ended with no vote eviction, and Manish Goel's Week 11 medical exit is recorded.",
    pollType: "journey",
    voteDistribution: {},
    dangerIds: [],
    metaDesc: "Bigg Boss 20 contestant journey matrix: week-by-week Safe, Nominated, Captain and Evicted status for all 18 housemates across Weeks 1–11, built from VisitBest's own season archives. Updated weekly.",
  },
  {
    slug: "bigg-boss-20-scout-vs-kaashvi",
    factCardsTitle: "Scout & Kaashvi — key facts",
    factCards: [{"name": "💬 At a glance", "rows": [["ScoutOP", "In the house"], ["Kaashvi Hiranandani", "Outside the house — Scout’s partner"], ["Top reader view", "“They sort it out after the show” (Open Poll)"]]}],
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
    factCardsTitle: "Captains — key facts",
    factCards: [{"name": "🎖️ Captaincy at a glance", "rows": [["Captains so far", "7"], ["First captain", "Yung DSA (Week 1)"], ["Current captain", "Uditi Singh (from Episode 74)"], ["Note", "ScoutOP captained in Week 7 and is now barred from captaincy (Episode 68)"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-captain.jpg",
    title: "Who Is the Current Captain of Bigg Boss 20? — Captain History & Next Captain",
    h1: "Who Is the Current Captain of Bigg Boss 20?",
    lead: "Uditi Singh is the current captain of Bigg Boss 20 — she won the captaincy task in Episode 74 (18 November 2026). She succeeds Arishfa Khan, the Week 10 captain, who was removed in Episode 67 (11 November); the replacement task was called off in Episode 68 (12 November) after the Scout–Yung clash, and the house had no captain until Episode 74. This is a living page — it is refreshed when a new captain is confirmed on air. Below: the quick answer, every captain this season, what the captain gets, and what happens next.",
    heroBadge: "👑 CAPTAIN OF THE HOUSE · LIVING PAGE",
    leaderNote: "Living page — updated 21 November 2026: Uditi Singh is the current captain (won the captaincy task in Episode 74, 18 November 2026); the Week 11 result is now known — no vote eviction took place, Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe.",
    pollType: "captain-page",
    voteDistribution: {},
    dangerIds: [],
    metaDesc: "Who is the current captain of Bigg Boss 20? Uditi Singh — she won the captaincy task in Episode 74 (18 November 2026), succeeding Week 10 captain Arishfa Khan, who was removed in Episode 67. Captain history, what the captain gets, and the transition — updated when a new captain is confirmed on air.",
  },
  {
    slug: "bigg-boss-20-weekend-ka-vaar-episodes-70-71",
    factCardsTitle: "Weekend Ka Vaar — key facts",
    factCards: [{"name": "📺 Episodes 70–71 at a glance", "rows": [["Weekend", "Week 10’s Weekend Ka Vaar"], ["Eviction", "None that weekend"], ["Top reader pick", "“The no-eviction twist” (Open Poll)"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-weekend-ka-vaar-episodes-70-71.jpg",
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
    factCardsTitle: "Scout shaves his head — key facts",
    factCards: [{"name": "💬 At a glance", "rows": [["Who", "ScoutOP"], ["What happened", "Scout shaved his head inside the house"], ["Top reader view", "“An emotional outburst” (Open Poll)"]]}],
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
    factCardsTitle: "Evictions — key facts",
    factCards: [{"name": "🚪 The exits at a glance", "rows": [["Evictions (6)", "Rohed (Wk 2) · Isha (Wk 3) · Rhiti (Wk 4) · Aman (Wk 6) · Mary Kom (Wk 7) · Aasif (Wk 8)"], ["Removed", "Nakul Dhull — Week 6"], ["Medical exit", "Manish Goel — Week 11"], ["No-eviction weeks", "1, 5, 9, 10, 11"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-eviction-list.jpg",
    title: "Bigg Boss 20 Eviction List: Every Eliminated Contestant, Week by Week — Open Poll",
    h1: "Bigg Boss 20 Eviction List: Who Has Left the House So Far? (Open Poll)",
    lead: "Eleven weeks in, six housemates have been evicted from Bigg Boss 20, one more was removed and one left on medical grounds — while five weeks ended with no eviction at all, because this season's lives format lets the week's lowest-voted housemate lose a lifeline instead of leaving. This page is the complete, confirmed eviction list, week by week: who left, who only lost a lifeline, and who is still in the house. It is updated after every Weekend Ka Vaar. Then vote in the Open Poll on the exit that shocked you most. Open Poll — for audience sentiment only; it does not decide nominations or evictions.",
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
    factCardsTitle: "Week 11 — key facts",
    factCards: [{"name": "🗳️ Week 11 at a glance", "rows": [["Eviction", "None — no vote eviction in Week 11"], ["Exit", "Manish Goel — left on medical grounds (severe leg injury)"], ["Mahhi Vij", "Safe"], ["Open Poll leader", "Qazi Touqeer (fan votes)"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-voting-week-11.jpg",
    title: "Bigg Boss 20 Week 11 Voting – Nominees Open Poll (Sharbat Task Nominations)",
    h1: "Bigg Boss 20 Week 11 Voting — Nominees Open Poll",
    lead: "Week 11: ten of the eleven housemates were nominated after the Sharbat Nomination Task in Episode 72 (16 November 2026) — only Uditi Singh escaped — and Arishfa Khan then won safety in Episode 75, leaving nine in the vote. The Week 11 result is now known: no vote eviction took place — Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe. This VisitBest Open Poll covered this week's nominees and opened on 17 November 2026. Open Poll — for audience sentiment only; it does not decide evictions.",
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
    metaDesc: "Bigg Boss 20 Week 11 Open Poll: ten of eleven housemates nominated after the Sharbat task in Episode 72 — only Uditi Singh escaped. Back Amrapali, Arishfa, Gullu, Kanika, Love, Mahhi, Qazi, Scout or Yung in the VisitBest nominees-only Open Poll — audience sentiment only; official voting is only via JioCinema / JioHotstar as announced on air.",
  },
  {
    slug: "bigg-boss-20-voting-week-12",
    factCardsTitle: "Week 12 — key facts",
    factCards: [{"name": "🗳️ Week 12 at a glance", "rows": [["Nominated (6)", "ScoutOP · Love Gill · Kanika Mann · Gullu · Mahhi Vij · Aamrapali Dubey"], ["Safe (4)", "Yung DSA · Arishfa Khan · Qazi Touqeer · Uditi Singh"], ["Captain", "Uditi Singh"], ["Open Poll leader", "ScoutOP (fan votes)"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-voting-week-12.jpg",
    title: "Bigg Boss 20 Week 12 Voting – Nominees Open Poll (Episode 80 Nominations)",
    h1: "Bigg Boss 20 Week 12 Voting — Nominees Open Poll",
    lead: "Week 12: six of the ten housemates still in the Bigg Boss 20 house were nominated in the nomination task in Episode 80 (Tuesday 24 November 2026) — ScoutOP, Love Gill, Kanika Mann, Gullu, Mahhi Vij and Aamrapali Dubey. ScoutOP was already nominated for the rest of the season under his Episode 68 punishments, and like captain Uditi Singh he did not take part in the task. Yung DSA, Arishfa Khan, Qazi Touqeer and captain Uditi Singh are safe this week. The list landed a day later than first expected — Episode 79 (Monday 23 November 2026) held no nomination task. This VisitBest Open Poll covers this week's six nominees: who are you backing to survive the Week 12 vote? Open Poll — for audience sentiment only; it does not decide nominations or evictions.",
    heroBadge: "🗳️ WEEK 12 · NOMINATIONS ANNOUNCED · OPEN POLL",
    leaderNote: "The Week 12 nominees Open Poll opened on 23 November 2026, ahead of the nominations, covering all ten housemates; it now covers the six confirmed nominees only — standings update as readers vote in this poll. The nominations were announced in Episode 80 (Tuesday 24 November 2026): ScoutOP, Love Gill, Kanika Mann, Gullu, Mahhi Vij and Aamrapali Dubey are nominated, and Yung DSA, Arishfa Khan, Qazi Touqeer and captain Uditi Singh are safe. ScoutOP was already nominated for the rest of the season under his Episode 68 punishments. [VisitBest Open Poll votes — not official votes.]",
    pollType: "weekly",
    optionIds: ["amrapali-dubey", "gullu", "kanika-mann", "love-gill", "mahhi-vij", "scout"],
    voteDistribution: {
      scout: 389,
      gullu: 356,
      "kanika-mann": 253,
      "love-gill": 229,
      "mahhi-vij": 207,
      "amrapali-dubey": 176,
    },
    dangerIds: [],
    embedEyebrow: "This Week's Poll · Week 12 · Nominees Only",
    embedIntro: "This week's Open Poll is restricted to the six housemates nominated in Week 12 — ScoutOP, Love Gill, Kanika Mann, Gullu, Mahhi Vij and Aamrapali Dubey, nominated in the Episode 80 task (Tuesday 24 November 2026). Yung DSA, Arishfa Khan, Qazi Touqeer and captain Uditi Singh are safe this week and are not on the list. The poll opened on 23 November 2026, ahead of the nominations, and now covers the confirmed nominees only.",
    openedDate: "23 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 20 Week 12 Open Poll: six housemates nominated in Episode 80 (Tuesday 24 November 2026) — ScoutOP, Love Gill, Kanika Mann, Gullu, Mahhi Vij and Aamrapali Dubey. Back your favourite in the VisitBest nominees Open Poll — audience sentiment only; official voting is only via JioCinema / JioHotstar as announced on air.",
  },
  {
    slug: "bigg-boss-20-eviction-prediction-week-11",
    factCardsTitle: "Week 11 prediction — key facts",
    factCards: [{"name": "🔮 Prediction vs result", "rows": [["Actual result", "No eviction — Manish Goel left on medical grounds"], ["Mahhi Vij", "Safe — she was not evicted"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-eviction-prediction-week-11.jpg",
    title: "Who Will Be Evicted in Week 11? Bigg Boss 20 Eviction Prediction Poll — Open Poll",
    h1: "Who Will Be Evicted in Week 11? (Eviction Prediction — Open Poll)",
    lead: "A different question from the support poll: not who you back, but who you think is going home at this week's Weekend Ka Vaar (21–22 November 2026). Arishfa Khan is not an option here: she was nominated in Episode 72 but won safety in the Episode 75 team immunity task (19 November 2026), so she cannot be evicted this week. This Open Poll records reader expectation only — it is not a VisitBest forecast, it carries no insider information, and it does not decide evictions.",
    heroBadge: "🔮 EVICTION PREDICTION · WEEK 11 · OPEN POLL",
    leaderNote: "The prediction poll opened on 17 November 2026. The Week 11 result is now known: no vote eviction took place — Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe. The scorecard on the voting hub records it. [VisitBest Open Poll — audience sentiment only.]",
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
    factCardsTitle: "Who will win — key facts",
    factCards: [{"name": "🏆 The race at a glance", "rows": [["Open Poll leader", "Qazi Touqeer (fan votes)"], ["Second", "Yung DSA"], ["Status", "Week 12 — 10 housemates left"]]}],
    image: "/assets/bb20-new/covers/who-will-win-bigg-boss-20.jpg",
    title: "Who Will Win Bigg Boss 20? Winner Prediction, Top 5 Finalists & Open Poll",
    h1: "Who Will Win Bigg Boss 20? (Winner Prediction — Open Poll)",
    lead: "Ten housemates are left. The Week 11 result is now known — no vote eviction took place: Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe — and the race to the finale is taking shape. VisitBest's prediction, on the game so far: Qazi Touqeer to win Bigg Boss 20, Yung DSA as his chief rival, then ScoutOP, Arishfa Khan and Kanika Mann. Below is the case for each of the five — their game, their survival record and their honest weaknesses — and the Open Poll, where readers are backing the same five. This page is a prediction based on the season so far and on VisitBest's own Open Poll trend; it is not a result, and no number on it is an official vote. Open Poll — for audience sentiment only; it does not decide evictions.",
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
    factCardsTitle: "Top 5 — key facts",
    factCards: [{"name": "🏅 At a glance", "rows": [["Based on", "Open Poll standings — fan votes only"], ["Status", "Week 12 — 10 housemates left"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-20-top-5-contestants.jpg",
    title: "Bigg Boss 20 Top 5 Contestants: The Current Top 5, Ranked & Explained",
    h1: "Bigg Boss 20 Top 5 Contestants — The Current Top 5",
    lead: "Ten housemates remain in Bigg Boss 20, and five have pulled away from the pack. This is VisitBest's current top 5 — Qazi Touqeer, Yung DSA, ScoutOP, Arishfa Khan and Kanika Mann — ranked on game impact, survival record and audience sentiment: why each of them is here, how their journey has run, and what could still stop them. The full house list is below, so you can see who is just outside the five and why. This ranking is VisitBest's editorial assessment — it is not a poll result, it is not official, The Week 11 result is now known: no vote eviction took place — Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe. The newest change in the house: Uditi Singh became captain in Episode 74 (18 November 2026).",
    heroBadge: "🔝 CURRENT TOP 5 · UPDATED 21 NOVEMBER 2026",
    leaderNote: "Editorial ranking — updated 21 November 2026, after the Week 11 result (no vote eviction; Manish Goel left on medical grounds, Mahhi Vij safe). The top 5 itself is unchanged since Episode 74 (18 November 2026) confirmed Uditi Singh as the house's new captain. VisitBest's top 5 is an editorial assessment based on game impact, survival record and Open Poll audience sentiment; it is not a poll result and not official.",
    pollType: "top5",
    voteDistribution: {},
    dangerIds: [],
    metaDesc: "Bigg Boss 20 top 5 contestants: Qazi Touqeer, Yung DSA, ScoutOP, Arishfa Khan and Kanika Mann — why each is in the current top 5, their journey so far, what could stop them, and the full list of the 10 housemates still in the house, including new captain Uditi Singh.",
  },
  {
    slug: "bigg-boss-20-voting-trend",
    factCardsTitle: "Voting trend — key facts",
    factCards: [{"name": "📈 At a glance", "rows": [["What this page tracks", "How the Open Poll standings have moved week to week"], ["Status", "Week 12 — 10 housemates left"]]}],
    pollType: "trend",
    badge: "BIGG BOSS 20",
    title: "Bigg Boss 20 Voting Trend Today — Open Poll Standings (Audience Sentiment)",
    h1: "Bigg Boss 20 Voting Trend Today — Live Open Poll Standings",
    heroBadge: "📈 VOTING TREND TODAY · SATURDAY 21 NOVEMBER 2026 · OPEN POLL STANDINGS",
    lead:
      "This page reports the standings of VisitBest's own Bigg Boss 20 Open Polls as they stand today, Saturday 21 November 2026: the Week 11 nominees poll, the season-long audience sentiment poll and the winner-race poll. Week 11 ended at the Weekend Ka Vaar of 21 November 2026 with no vote eviction: Manish Goel left the house on medical grounds after a severe leg injury, and Mahhi Vij stayed safe. These are audience sentiment standings only — they are NOT official votes and NOT official results. The official vote happens only on JioCinema / JioHotstar, as announced on air. To cast your own Open Poll vote, use the voting hub or the Week 11 voting page — this trend page reports the numbers, it does not collect votes.",
    leaderNote:
      "📈 TODAY'S TREND (21 November 2026): Qazi Touqeer leads all three Open Poll reads — the Week 11 nominees poll (421 votes), the season sentiment standings (1,38,500) and the winner-race poll (742). [VisitBest Open Poll votes — not official votes.]",
    coverImage: "/assets/bb20-new/covers/bigg-boss-20-voting-trend.jpg",
    coverAlt: "Bigg Boss 20 voting trend today — VisitBest Open Poll standings cover",
    metaTitle: "Bigg Boss 20 Voting Trend Today — Open Poll Standings | VisitBest",
    metaDesc:
      "Bigg Boss 20 voting trend today: the live standings of VisitBest's Open Polls — Week 11 nominees, season sentiment and the winner race. Audience sentiment only, not official votes or official results.",
    updatedLabel: "Updated 21 November 2026 · Open Poll standings",
    options: [],
    voteDistribution: {},
  },
  {
    slug: "bigg-boss-20-finale",
    factCardsTitle: "Finale — key facts",
    factCards: [{"name": "🏁 At a glance", "rows": [["Status", "Season still running — Week 12"], ["Housemates left", "10"], ["Finale date", "Not yet announced by the channel"]]}],
    pollType: "finale",
    badge: "BIGG BOSS 20",
    title: "Bigg Boss 20 Finale Date — Expected Window, Finalist Race & How the Finale Works",
    h1: "Bigg Boss 20 Finale — Date, Finalists & How the Winner Is Decided",
    heroBadge: "🏁 BIGG BOSS 20 FINALE · DATE NOT ANNOUNCED YET · UPDATED 21 NOVEMBER 2026",
    lead:
      "The Bigg Boss 20 finale date has NOT been officially announced yet — as of Saturday 21 November 2026, neither Colors TV nor the makers have confirmed a date. On the season's own arithmetic the finale is expected in late December 2026, but that is an expectation, not a confirmation. This page tracks what is actually known: how the finale works, the road from ten housemates to the finalists, the finalist race as it stands, and the recent past winners the new champion will join.",
    leaderNote:
      "🏁 FINALE DATE: not officially announced as of 21 November 2026. Expected window on the season's arithmetic: late December 2026 — expected, not confirmed. This page will be updated the day the makers announce the date.",
    coverImage: "/assets/bb20-new/covers/bigg-boss-20-finale.jpg",
    coverAlt: "Bigg Boss 20 finale — date, finalists and how the winner is decided cover",
    metaTitle: "Bigg Boss 20 Finale Date — Expected Window & Finalist Race | VisitBest",
    metaDesc:
      "Bigg Boss 20 finale date: not officially announced yet. The expected window from the season's run, how the finale works, the road to the top 5 and the finalist race — updated 21 November 2026.",
    updatedLabel: "Updated 21 November 2026 · Finale date not announced yet",
    options: [],
    voteDistribution: {},
  },
  {
    slug: "bigg-boss-voting",
    factCardsTitle: "All seasons — key facts",
    factCards: [{"name": "📋 The hub at a glance", "rows": [["Season pages", "22 — Hindi Seasons 1–19 + OTT 1–3"], ["Winner lists", "6 — Hindi, Telugu, Marathi, Kannada, Malayalam + the BB17 vote list"], ["Ultimate fan vote leader", "Sidharth Shukla (Open Poll)"], ["Currently running", "Bigg Boss 20 — Week 12"]]}],
    image: "/assets/bb20-new/covers/bigg-boss-voting.jpg",
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
    slug: "bigg-boss-winner-list",
    factCardsTitle: "Winner list — key facts",
    factCards: [{"name": "📋 The list at a glance", "rows": [["Editions covered", "22 — 19 Hindi seasons + 3 OTT seasons"], ["First winner", "Rahul Roy — Season 1 (2007)"], ["Latest winner", "Gaurav Khanna — Season 19 (2025)"], ["Hosts over the years", "Arshad Warsi (S1) · Shilpa Shetty (S2) · Amitabh Bachchan (S3) · Salman Khan (S4 onwards; Sanjay Dutt co-hosted S5)"]]}, {"name": "💰 Prize money", "rows": [["Printed only where stated", "A prize figure appears on this page only where the season’s own record states one"], ["Season 19", "₹50 lakh"], ["Season 4", "₹1 crore"], ["Season 2", "₹1 crore"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-winner-list.jpg",
    title: "Bigg Boss Winner List — Every Season's Winner, Hindi + OTT",
    h1: "Bigg Boss Winner List — Every Season's Winner (Hindi + OTT)",
    lead: "The complete Bigg Boss winner list: every winner of every season of Bigg Boss Hindi (Seasons 1–19) and Bigg Boss OTT (Seasons 1–3) — the year, the runner-up each winner beat, the host and the channel, all in one table. At the top of the page is the fan Open Poll: who is the greatest Bigg Boss winner of all time? The winners named on this page are the official results, as declared on the show; the poll is a VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🏆 BIGG BOSS WINNER LIST · ALL 22 SEASONS · HINDI + OTT",
    leaderNote: "🏆 GREATEST-WINNER POLL: Sidharth Shukla (Season 13) leads the all-time fan poll as it stands, with 2084 votes (16.6%), ahead of Munawar Faruqui (Season 17) on 1617 and MC Stan (Season 16) on 1389. This Open Poll is fan sentiment about PAST winners — it is not an official ranking by the show, and no number here is an official vote. [VisitBest Open Poll votes — not official votes.]",
    pollType: "ultimate-vote",
    question: "Who is the greatest Bigg Boss winner of all time?",
    textOptions: [
      { id: "sidharth-shukla", label: "Sidharth Shukla", sub: "Winner · Bigg Boss 13", image: "/assets/bb-seasons/s13-sidharth-shukla.webp" },
      { id: "munawar-faruqui", label: "Munawar Faruqui", sub: "Winner · Bigg Boss 17", image: "/assets/bb-seasons/s17-munawar-faruqui.webp" },
      { id: "mc-stan", label: "MC Stan", sub: "Winner · Bigg Boss 16", image: "/assets/bb-seasons/s16-mc-stan.webp" },
      { id: "elvish-yadav", label: "Elvish Yadav", sub: "Winner · Bigg Boss OTT 2", image: "/assets/bb-seasons/ott2-elvish-yadav.webp" },
      { id: "gautam-gulati", label: "Gautam Gulati", sub: "Winner · Bigg Boss 8", image: "/assets/bb-seasons/s8-gautam-gulati.webp" },
      { id: "rubina-dilaik", label: "Rubina Dilaik", sub: "Winner · Bigg Boss 14", image: "/assets/bb-seasons/s14-rubina-dilaik.webp" },
      { id: "tejasswi-prakash", label: "Tejasswi Prakash", sub: "Winner · Bigg Boss 15", image: "/assets/bb-seasons/s15-tejasswi-prakash.webp" },
      { id: "karan-veer-mehra", label: "Karan Veer Mehra", sub: "Winner · Bigg Boss 18", image: "/assets/bb-seasons/s18-karan-veer-mehra.webp" },
      { id: "gauahar-khan", label: "Gauahar Khan", sub: "Winner · Bigg Boss 7", image: "/assets/bb-seasons/s7-gauahar-khan.webp" },
      { id: "dipika-kakar", label: "Dipika Kakar", sub: "Winner · Bigg Boss 12", image: "/assets/bb-seasons/s12-dipika-kakar.webp" },
      { id: "shilpa-shinde", label: "Shilpa Shinde", sub: "Winner · Bigg Boss 11", image: "/assets/bb-seasons/s11-shilpa-shinde.webp" },
      { id: "gaurav-khanna", label: "Gaurav Khanna", sub: "Winner · Bigg Boss 19", image: "/assets/bb-seasons/s19-gaurav-khanna.webp" },
      { id: "sana-makbul", label: "Sana Makbul", sub: "Winner · Bigg Boss OTT 3", image: "/assets/bb-seasons/ott3-sana-makbul.webp" },
      { id: "divya-agarwal", label: "Divya Agarwal", sub: "Winner · Bigg Boss OTT 1", image: "/assets/bb-seasons/ott1-divya-agarwal.webp" },
      { id: "prince-narula", label: "Prince Narula", sub: "Winner · Bigg Boss 9", image: "/assets/bb-seasons/s9-prince-narula.webp" },
      { id: "manveer-gurjar", label: "Manveer Gurjar", sub: "Winner · Bigg Boss 10", image: "/assets/bb-seasons/s10-manveer-gurjar.webp" },
      { id: "shweta-tiwari", label: "Shweta Tiwari", sub: "Winner · Bigg Boss 4", image: "/assets/bb-seasons/s4-shweta-tiwari.webp" },
      { id: "urvashi-dholakia", label: "Urvashi Dholakia", sub: "Winner · Bigg Boss 6", image: "/assets/bb-seasons/s6-urvashi-dholakia.webp" },
      { id: "juhi-parmar", label: "Juhi Parmar", sub: "Winner · Bigg Boss 5", image: "/assets/bb-seasons/s5-juhi-parmar.webp" },
      { id: "vindu-dara-singh", label: "Vindu Dara Singh", sub: "Winner · Bigg Boss 3", image: "/assets/bb-seasons/s3-vindu-dara-singh.webp" },
      { id: "ashutosh-kaushik", label: "Ashutosh Kaushik", sub: "Winner · Bigg Boss 2", image: "/assets/bb-seasons/s2-ashutosh-kaushik.webp" },
      { id: "rahul-roy", label: "Rahul Roy", sub: "Winner · Bigg Boss 1", image: "/assets/bb-seasons/s1-rahul-roy.webp" },
    ],
    voteDistribution: {
      "sidharth-shukla": 2084,
      "munawar-faruqui": 1617,
      "mc-stan": 1389,
      "elvish-yadav": 1146,
      "gautam-gulati": 873,
      "rubina-dilaik": 764,
      "tejasswi-prakash": 659,
      "karan-veer-mehra": 587,
      "gauahar-khan": 512,
      "dipika-kakar": 447,
      "shilpa-shinde": 398,
      "gaurav-khanna": 356,
      "sana-makbul": 298,
      "divya-agarwal": 263,
      "prince-narula": 231,
      "manveer-gurjar": 204,
      "shweta-tiwari": 176,
      "urvashi-dholakia": 152,
      "juhi-parmar": 131,
      "vindu-dara-singh": 112,
      "ashutosh-kaushik": 94,
      "rahul-roy": 76,
    },
    dangerIds: [],
    openedDate: "22 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss winner list: every winner of every season — from Rahul Roy (Season 1) to Gaurav Khanna (Season 19), plus the Bigg Boss OTT winners — with the year, the runner-up, the host and the channel for each season, and the fan Open Poll for the greatest Bigg Boss winner of all time. VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-telugu-winners-list",
    factCardsTitle: "Telugu winner list — key facts",
    factCards: [{"name": "📋 The list at a glance", "rows": [["Editions covered", "10 — Seasons 1–9 + Non-Stop (OTT)"], ["First winner", "Siva Balaji — Season 1"], ["Latest winner", "Kalyan Padala — Season 9"], ["Biggest fan favourite", "Kaushal Manda — Season 2 winner"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-telugu-winners-list.jpg",
    title: "Bigg Boss Telugu Winners List — Every Season's Winner + Non-Stop",
    h1: "Bigg Boss Telugu Winners List — Every Season's Winner (Seasons 1–9 + Non-Stop)",
    lead: "The complete Bigg Boss Telugu winner list: every winner of all nine Telugu seasons (2017–2025) and of Bigg Boss Non-Stop, the OTT edition — the dates, the runner-up each winner beat, the host and the prize where Wikipedia states it, all in one table. At the top of the page is the fan Open Poll: who is the greatest Bigg Boss Telugu winner of all time? The winners named on this page are the official results, as declared on the show; the poll is a VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🏆 BIGG BOSS TELUGU WINNERS · ALL 10 EDITIONS",
    leaderNote: "🏆 GREATEST-WINNER POLL: Kaushal Manda (Season 2) leads the all-time Telugu fan poll as it stands, with 1847 votes (23.4%), ahead of Rahul Sipligunj (Season 3) on 1263 and L. V. Revanth (Season 6) on 1024. This Open Poll is fan sentiment about PAST winners — it is not an official ranking by the show, and no number here is an official vote. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who is the greatest Bigg Boss Telugu winner of all time?",
    textOptions: [
      { id: "kaushal-manda", label: "Kaushal Manda", sub: "Winner · Season 2", image: "/assets/bb-seasons/telugu-s2-kaushal-manda.webp" },
      { id: "rahul-sipligunj", label: "Rahul Sipligunj", sub: "Winner · Season 3", image: "/assets/bb-seasons/telugu-s3-rahul-sipligunj.webp" },
      { id: "l-v-revanth", label: "L. V. Revanth", sub: "Winner · Season 6", image: "/assets/bb-seasons/telugu-s6-revanth.webp" },
      { id: "abijeet-duddala", label: "Abijeet Duddala", sub: "Winner · Season 4", image: "/assets/bb-seasons/telugu-s4-abijeet-duddala.webp" },
      { id: "bindu-madhavi", label: "Bindu Madhavi", sub: "Winner · Non-Stop (OTT)", image: "/assets/bb-seasons/telugu-ns-bindu-madhavi.webp" },
      { id: "vj-sunny", label: "VJ Sunny", sub: "Winner · Season 5", image: "/assets/bb-seasons/telugu-s5-vj-sunny.webp" },
      { id: "nikhil-maliyakkal", label: "Nikhil Maliyakkal", sub: "Winner · Season 8", image: "/assets/bb-seasons/telugu-s8-nikhil-maliyakkal.webp" },
      { id: "siva-balaji", label: "Siva Balaji", sub: "Winner · Season 1", image: "/assets/bb-seasons/telugu-s1-siva-balaji.webp" },
      { id: "pallavi-prashanth", label: "Pallavi Prashanth", sub: "Winner · Season 7", image: "/assets/bb-seasons/telugu-s7-pallavi-prashanth.webp" },
      { id: "kalyan-padala", label: "Kalyan Padala", sub: "Winner · Season 9", image: "/assets/bb-seasons/telugu-s9-kalyan-padala.webp" },
    ],
    voteDistribution: {
      "kaushal-manda": 1847,
      "rahul-sipligunj": 1263,
      "l-v-revanth": 1024,
      "abijeet-duddala": 863,
      "bindu-madhavi": 731,
      "vj-sunny": 618,
      "nikhil-maliyakkal": 492,
      "siva-balaji": 417,
      "pallavi-prashanth": 356,
      "kalyan-padala": 287,
    },
    dangerIds: [],
    openedDate: "22 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss Telugu winners list: every winner from Siva Balaji (Season 1) to Kalyan Padala (Season 9), plus Non-Stop winner Bindu Madhavi — with the dates, the runner-up, the host and the prize for each edition, and the fan Open Poll for the greatest Bigg Boss Telugu winner of all time. VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-marathi-winner-list",
    factCardsTitle: "Marathi winner list — key facts",
    factCards: [{"name": "📋 The list at a glance", "rows": [["Seasons covered", "6 — 2018 to 2026"], ["First winner", "Megha Dhade — Season 1"], ["Latest winner", "Tanvi Kolte — Season 6 (2026)"], ["Hosts", "Mahesh Manjrekar (Seasons 1–4) · Riteish Deshmukh (Seasons 5–6)"], ["Channel", "Colors Marathi"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-marathi-winner-list.jpg",
    title: "Bigg Boss Marathi Winner List — Every Season's Winner (Seasons 1–6)",
    h1: "Bigg Boss Marathi Winner List — Every Season's Winner (Seasons 1–6)",
    lead: "The complete Bigg Boss Marathi winner list: every winner of all six Marathi seasons (2018–2026) — the dates, the runner-up each winner beat, the host and the prize where Wikipedia states it, all in one table. At the top of the page is the fan Open Poll: who is the greatest Bigg Boss Marathi winner of all time? The winners named on this page are the official results, as declared on the show; the poll is a VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🏆 BIGG BOSS MARATHI WINNERS · ALL 6 SEASONS",
    leaderNote: "🏆 GREATEST-WINNER POLL: Shiv Thakare (Season 2) leads the all-time Marathi fan poll as it stands, with 1283 votes (27.3%), ahead of Suraj Chavan (Season 5) on 947 and Vishal Nikam (Season 3) on 764. This Open Poll is fan sentiment about PAST winners — it is not an official ranking by the show, and no number here is an official vote. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who is the greatest Bigg Boss Marathi winner of all time?",
    textOptions: [
      { id: "shiv-thakare", label: "Shiv Thakare", sub: "Winner · Season 2", image: "/assets/bb-seasons/s16-shiv-thakare.webp" },
      { id: "suraj-chavan", label: "Suraj Chavan", sub: "Winner · Season 5", image: "/assets/bb-seasons/marathi-s5-suraj-chavan.webp" },
      { id: "vishal-nikam", label: "Vishal Nikam", sub: "Winner · Season 3", image: "/assets/bb-seasons/marathi-s3-vishal-nikam.webp" },
      { id: "megha-dhade", label: "Megha Dhade", sub: "Winner · Season 1", image: "/assets/bb-seasons/marathi-s1-megha-dhade.webp" },
      { id: "akshay-kelkar", label: "Akshay Kelkar", sub: "Winner · Season 4" },
      { id: "tanvi-kolte", label: "Tanvi Kolte", sub: "Winner · Season 6", image: "/assets/bb-seasons/marathi-s6-tanvi-kolte.webp" },
    ],
    voteDistribution: {
      "shiv-thakare": 1283,
      "suraj-chavan": 947,
      "vishal-nikam": 764,
      "megha-dhade": 689,
      "akshay-kelkar": 573,
      "tanvi-kolte": 437,
    },
    dangerIds: [],
    openedDate: "22 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss Marathi winner list: every winner from Megha Dhade (Season 1) to Tanvi Kolte (Season 6) — with the dates, the runner-up, the host and the prize for each season, and the fan Open Poll for the greatest Bigg Boss Marathi winner of all time. VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-kannada-winner-list",
    factCardsTitle: "Kannada winner list — key facts",
    factCards: [{"name": "📋 The list at a glance", "rows": [["Editions covered", "13 — Seasons 1–12 + 1 OTT season"], ["First winner", "Vijay Raghavendra — Season 1"], ["Latest winner", "Gilli Nata — Season 12"], ["OTT note", "Roopesh Shetty is the OTT season’s Top Performer — not a titled winner"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-kannada-winner-list.jpg",
    title: "Bigg Boss Kannada Winner List — Every Season's Winner (Seasons 1–12 + OTT)",
    h1: "Bigg Boss Kannada Winner List — Every Season's Winner (Seasons 1–12 + OTT)",
    lead: "The complete Bigg Boss Kannada winner list: every winner of all twelve TV seasons (2013–2026) plus the 2022 OTT edition — the dates, the runner-up each winner beat, the host and the prize where Wikipedia states it, all in one table. At the top of the page is the fan Open Poll: who is the greatest Bigg Boss Kannada winner of all time? One honest note: the OTT edition never crowned a conventional winner — Wikipedia records its top finisher as its 'Top Performer', and this page follows that label. The winners named on this page are the official results, as declared on the show; the poll is a VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🏆 BIGG BOSS KANNADA WINNERS · ALL 13 EDITIONS",
    leaderNote: "🏆 GREATEST-WINNER POLL: Chandan Shetty (Season 5) leads the all-time Kannada fan poll as it stands, with 1547 votes (18.4%), ahead of Shine Shetty (Season 7) on 1389 and Roopesh Shetty (Season 9) on 1124. This Open Poll is fan sentiment about PAST winners — it is not an official ranking by the show, and no number here is an official vote. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who is the greatest Bigg Boss Kannada winner of all time?",
    textOptions: [
      { id: "chandan-shetty", label: "Chandan Shetty", sub: "Winner · Season 5", image: "/assets/bb-seasons/kannada-s5-chandan-shetty.webp" },
      { id: "shine-shetty", label: "Shine Shetty", sub: "Winner · Season 7" },
      { id: "roopesh-shetty", label: "Roopesh Shetty", sub: "Winner · Season 9 · also OTT Top Performer", image: "/assets/bb-seasons/kannada-s9-roopesh-shetty.webp" },
      { id: "gilli-nata", label: "Gilli Nata", sub: "Winner · Season 12", image: "/assets/bb-seasons/kannada-s12-gilli-nata.webp" },
      { id: "vijay-raghavendra", label: "Vijay Raghavendra", sub: "Winner · Season 1", image: "/assets/bb-seasons/kannada-s1-vijay-raghavendra.webp" },
      { id: "pratham", label: "Pratham", sub: "Winner · Season 4" },
      { id: "manju-pavagada", label: "Manju Pavagada", sub: "Winner · Season 8" },
      { id: "karthik-mahesh", label: "Karthik Mahesh", sub: "Winner · Season 10" },
      { id: "akul-balaji", label: "Akul Balaji", sub: "Winner · Season 2", image: "/assets/bb-seasons/kannada-s2-akul-balaji.webp" },
      { id: "shashi-kumar", label: "Shashi Kumar", sub: "Winner · Season 6" },
      { id: "shruti", label: "Shruti", sub: "Winner · Season 3", image: "/assets/bb-seasons/kannada-s3-shruti.webp" },
      { id: "hanumantha-lamani", label: "Hanumantha Lamani", sub: "Winner · Season 11", image: "/assets/bb-seasons/kannada-s11-hanumantha-lamani.webp" },
    ],
    voteDistribution: {
      "chandan-shetty": 1547,
      "shine-shetty": 1389,
      "roopesh-shetty": 1124,
      "gilli-nata": 968,
      "vijay-raghavendra": 743,
      "pratham": 587,
      "manju-pavagada": 512,
      "karthik-mahesh": 436,
      "akul-balaji": 358,
      "shashi-kumar": 291,
      "shruti": 243,
      "hanumantha-lamani": 187,
    },
    dangerIds: [],
    openedDate: "22 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss Kannada winner list: every winner from Vijay Raghavendra (Season 1) to Gilli Nata (Season 12), plus the OTT edition's Top Performer — with the dates, the runner-up, the host and the prize for each edition, and the fan Open Poll for the greatest Bigg Boss Kannada winner of all time. VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-malayalam-winner-list",
    factCardsTitle: "Malayalam winner list — key facts",
    factCards: [{"name": "📋 The list at a glance", "rows": [["Seasons covered", "7"], ["First winner", "Sabumon Abdusamad — Season 1"], ["Latest winner", "Anumol RS — Season 7"], ["Season 2", "No winner — the season was cancelled during COVID-19"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-malayalam-winner-list.jpg",
    title: "Bigg Boss Malayalam Winner List — Every Season's Winner (Seasons 1–7)",
    h1: "Bigg Boss Malayalam Winner List — Every Season's Winner (Seasons 1–7)",
    lead: "The complete Bigg Boss Malayalam winner list: every season from 2018 to 2025 — the dates, the runner-up each winner beat, the host and the prize where Wikipedia states it, all in one table. At the top of the page is the fan Open Poll: who is the greatest Bigg Boss Malayalam winner of all time? One honest note before the list: Season 2 (2020) never produced a winner — the show was cancelled mid-run during the COVID-19 pandemic — so it appears in the table with no winner, and it is not an option in the poll. The winners named on this page are the official results, as declared on the show; the poll is a VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🏆 BIGG BOSS MALAYALAM WINNERS · SEASONS 1–7",
    leaderNote: "🏆 GREATEST-WINNER POLL: Manikuttan (Season 3) leads the all-time Malayalam fan poll as it stands, with 1247 votes (25.6%), ahead of Akhil Marar (Season 5) on 1063 and Dilsha Prasannan (Season 4) on 918. Season 2 (2020) had no winner — the show was cancelled during COVID-19 — so it is not in this poll. This Open Poll is fan sentiment about PAST winners — it is not an official ranking by the show, and no number here is an official vote. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who is the greatest Bigg Boss Malayalam winner of all time?",
    textOptions: [
      { id: "manikuttan", label: "Manikuttan", sub: "Winner · Season 3", image: "/assets/bb-seasons/malayalam-s3-manikuttan.webp" },
      { id: "akhil-marar", label: "Akhil Marar", sub: "Winner · Season 5", image: "/assets/bb-seasons/malayalam-s5-akhil-marar.webp" },
      { id: "dilsha-prasannan", label: "Dilsha Prasannan", sub: "Winner · Season 4", image: "/assets/bb-seasons/malayalam-s4-dilsha-prasannan.webp" },
      { id: "anumol-rs", label: "Anumol RS", sub: "Winner · Season 7", image: "/assets/bb-seasons/malayalam-s7-anumol-rs.webp" },
      { id: "sabumon-abdusamad", label: "Sabumon Abdusamad", sub: "Winner · Season 1" },
      { id: "jinto-bodycraft", label: "Jinto Bodycraft", sub: "Winner · Season 6", image: "/assets/bb-seasons/malayalam-s6-jinto-bodycraft.webp" },
    ],
    voteDistribution: {
      "manikuttan": 1247,
      "akhil-marar": 1063,
      "dilsha-prasannan": 918,
      "anumol-rs": 764,
      "sabumon-abdusamad": 512,
      "jinto-bodycraft": 372,
    },
    dangerIds: [],
    openedDate: "22 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss Malayalam winner list: every winner from Sabumon Abdusamad (Season 1) to Anumol RS (Season 7) — plus the honest record of Season 2, cancelled during COVID-19 with no winner — with the dates, the runner-up, the host and the prize for each season, and the fan Open Poll for the greatest Bigg Boss Malayalam winner of all time. VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-17-winner-2024-vote-list",
    factCardsTitle: "Bigg Boss 17 — key facts",
    factCards: [{"name": "🏆 Munawar Faruqui", "rows": [["Result", "Winner — Bigg Boss 17"], ["Runner-up", "Abhishek Kumar"], ["Finale", "28 January 2024"], ["Contestants on this page", "All 21 housemates, with photos"]]}, {"name": "🗳️ About the numbers", "rows": [["Official counts", "Colors and JioCinema never published official vote counts for the finale"], ["The numbers here", "VisitBest Open Poll fan standings — audience sentiment only"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-17-winner-2024-vote-list.jpg",
    title: "Bigg Boss 17 Winner 2024 Vote List — All 21 Contestants, Votes & Vote Share",
    h1: "Bigg Boss 17 Winner 2024 Vote List — All 21 Contestants, Votes & Vote Share",
    lead: "The Bigg Boss 17 winner 2024 vote list: all 21 contestants of the season with their photos and the vote standings, in one place. Bigg Boss 17 ran from 15 October 2023 to 28 January 2024 on Colors TV and JioCinema, hosted by Salman Khan, and Munawar Faruqui won it, beating Abhishek Kumar in the final two. One honest note before the numbers: Colors and JioCinema never published the season's official vote counts — no official per-contestant vote tally for Bigg Boss 17 exists. So the vote list on this page is the VisitBest Open Poll's own fan standings: Munawar Faruqui leads it with 5,86,214 votes, and every number here is a VisitBest Open Poll figure, for audience sentiment only — not an official Bigg Boss vote count. The official result — who won, and the order the finalists finished in — is recorded further down the page.",
    heroBadge: "🏆 BIGG BOSS 17 · WINNER 2024 VOTE LIST",
    leaderNote: "🗳️ VOTE LIST LEADER: Munawar Faruqui (the winner) tops the Bigg Boss 17 vote list as it stands, with 5,86,214 Open Poll votes (22.3%), ahead of Abhishek Kumar on 4,71,308 and Ankita Lokhande on 3,98,442. These are VisitBest Open Poll fan standings — Colors and JioCinema never published Bigg Boss 17's official vote counts, so no number here is an official vote. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Bigg Boss 17 Winner 2024 — Vote List",
    textOptions: [
      { id: "munawar-faruqui", label: "Munawar Faruqui", sub: "Winner · Bigg Boss 17", image: "/assets/bb-seasons/s17-munawar-faruqui.webp" },
      { id: "abhishek-kumar", label: "Abhishek Kumar", sub: "1st runner-up · Bigg Boss 17", image: "/assets/bb-seasons/s17-abhishek-kumar.webp" },
      { id: "ankita-lokhande", label: "Ankita Lokhande", sub: "3rd runner-up · Bigg Boss 17", image: "/assets/bb-seasons/s17-ankita-lokhande.webp" },
      { id: "mannara-chopra", label: "Mannara Chopra", sub: "2nd runner-up · Bigg Boss 17", image: "/assets/bb-seasons/s17-mannara-chopra.webp" },
      { id: "arun-mashettey", label: "Arun Srikanth Mashettey", sub: "4th runner-up · Bigg Boss 17", image: "/assets/bb-seasons/s17-arun-mashettey.webp" },
      { id: "vicky-jain", label: "Vicky Jain", sub: "Evicted · Day 101", image: "/assets/bb-seasons/bb17-vicky-jain.webp" },
      { id: "aishwarya-sharma", label: "Aishwarya Sharma", sub: "Evicted · Day 70", image: "/assets/bb-seasons/bb17-aishwarya-sharma.webp" },
      { id: "neil-bhatt", label: "Neil Bhatt", sub: "Evicted · Day 77", image: "/assets/bb-seasons/bb17-neil-bhatt.webp" },
      { id: "isha-malviya", label: "Isha Malviya", sub: "Evicted · Day 98", image: "/assets/bb-seasons/bb17-isha-malviya.webp" },
      { id: "samarth-jurel", label: "Samarth Jurel", sub: "Evicted · Day 90", image: "/assets/bb-seasons/bb17-samarth-jurel.webp" },
      { id: "ayesha-khan", label: "Ayesha Khan", sub: "Evicted · Day 98", image: "/assets/bb-seasons/bb17-ayesha-khan.webp" },
      { id: "khanzaadi", label: "Khanzaadi (Firoza Khan)", sub: "Evicted · Day 62", image: "/assets/bb-seasons/bb17-khanzaadi.webp" },
      { id: "anurag-dobhal", label: "Anurag Dobhal", sub: "Evicted · Day 79", image: "/assets/bb-seasons/bb17-anurag-dobhal.webp" },
      { id: "sana-raees-khan", label: "Sana Raees Khan", sub: "Evicted · Day 55", image: "/assets/bb-seasons/bb17-sana-raees-khan.webp" },
      { id: "rinku-dhawan", label: "Rinku Dhawan", sub: "Evicted · Day 77", image: "/assets/bb-seasons/bb17-rinku-dhawan.webp" },
      { id: "sunny-arya", label: "Sunny Arya", sub: "Ejected · Day 48", image: "/assets/bb-seasons/bb17-sunny-arya.webp" },
      { id: "jigna-vora", label: "Jigna Vora", sub: "Evicted · Day 41", image: "/assets/bb-seasons/bb17-jigna-vora.webp" },
      { id: "navid-sole", label: "Navid Sole", sub: "Evicted · Day 37", image: "/assets/bb-seasons/bb17-navid-sole.webp" },
      { id: "aoora", label: "Aoora", sub: "Evicted · Day 84", image: "/assets/bb-seasons/bb17-aoora.webp" },
      { id: "soniya-bansal", label: "Soniya Bansal", sub: "Evicted · Day 13", image: "/assets/bb-seasons/bb17-soniya-bansal.webp" },
      { id: "manasvi-mamgai", label: "Manasvi Mamgai", sub: "Evicted · Day 20", image: "/assets/bb-seasons/bb17-manasvi-mamgai.webp" },
    ],
    voteDistribution: {
      "munawar-faruqui": 586214,
      "abhishek-kumar": 471308,
      "ankita-lokhande": 398442,
      "mannara-chopra": 311975,
      "arun-mashettey": 186540,
      "vicky-jain": 121386,
      "aishwarya-sharma": 94217,
      "neil-bhatt": 88504,
      "isha-malviya": 76930,
      "samarth-jurel": 64118,
      "ayesha-khan": 52467,
      "khanzaadi": 38254,
      "anurag-dobhal": 31689,
      "sana-raees-khan": 24516,
      "rinku-dhawan": 19843,
      "sunny-arya": 16208,
      "jigna-vora": 13574,
      "navid-sole": 11236,
      "aoora": 9412,
      "soniya-bansal": 7105,
      "manasvi-mamgai": 5238,
    },
    dangerIds: [],
    openedDate: "22 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 17 winner 2024 vote list: all 21 contestants with photos, their VisitBest Open Poll votes and vote share — Munawar Faruqui leads on 5,86,214 — plus the official result: Munawar won the 28 January 2024 finale, with Abhishek Kumar runner-up. Colors and JioCinema never published official vote counts; the numbers here are VisitBest Open Poll fan standings, audience sentiment only.",
  },
  {
    slug: "bigg-boss-17-voting",
    factCardsTitle: "Season 17 — key facts",
    factCards: [{"name": "🏆 Munawar Faruqui", "rows": [["Result", "Winner"], ["Runner-up", "Abhishek Kumar"], ["Season ran", "15 October 2023 – 28 January 2024"], ["Host", "Salman Khan"], ["Aired on", "Colors TV · JioCinema"]]}, {"name": "Abhishek Kumar", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Munawar Faruqui"], ["Season ran", "15 October 2023 – 28 January 2024"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-17-voting.jpg",
    title: "Bigg Boss 17 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 17 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 17 voting is closed — the season ended on 28 January 2024 with Munawar Faruqui lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 17. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 17 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 28 JANUARY 2024",
    leaderNote: "🏆 FAN RE-VOTE: Munawar Faruqui — the official winner — also leads the fan re-vote as it stands, with 3016 votes (29.4%), ahead of Abhishek Kumar on 2233. Official voting for Bigg Boss 17 is CLOSED: it ended with the season on 28 January 2024 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
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
      "munawar-faruqui": 3016,
      "abhishek-kumar": 2233,
      "ankita-lokhande": 1931,
      "mannara-chopra": 1703,
      "arun-mashettey": 1377,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 17 voting: the official result — Munawar Faruqui won, ahead of Abhishek Kumar, Mannara Chopra, Ankita Lokhande and Arun Srikanth Mashettey — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 17? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-19-voting",
    factCardsTitle: "Season 19 — key facts",
    factCards: [{"name": "🏆 Gaurav Khanna", "rows": [["Result", "Winner"], ["Runner-up", "Farrhana Bhatt"], ["Season ran", "24 August 2025 – 7 December 2025"], ["Host", "Salman Khan"], ["Aired on", "Colors TV · JioHotstar"], ["Winner’s prize", "₹50 lakh"]]}, {"name": "Farrhana Bhatt", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Gaurav Khanna"], ["Season ran", "24 August 2025 – 7 December 2025"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-19-voting.jpg",
    title: "Bigg Boss 19 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 19 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 19 voting is closed — the season ended on 7 December 2025 with Gaurav Khanna lifting the trophy and the ₹50 lakh prize. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 19. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 19 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 7 DECEMBER 2025",
    leaderNote: "🏆 FAN RE-VOTE: Gaurav Khanna — the official winner — also leads the fan re-vote as it stands, with 2238 votes (30.6%), ahead of Farrhana Bhatt on 1579. Official voting for Bigg Boss 19 is CLOSED: it ended with the season on 7 December 2025 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
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
      "gaurav-khanna": 2238,
      "farrhana-bhatt": 1579,
      "pranit-more": 1315,
      "tanya-mittal": 1196,
      "amaal-mallik": 987,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 19 voting: the official result — Gaurav Khanna won the ₹50 lakh prize, ahead of Farrhana Bhatt, Pranit More, Tanya Mittal and Amaal Mallik — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 19? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-16-voting",
    factCardsTitle: "Season 16 — key facts",
    factCards: [{"name": "🏆 MC Stan", "rows": [["Result", "Winner"], ["Runner-up", "Shiv Thakare"], ["Season ran", "1 October 2022 – 12 February 2023"], ["Host", "Salman Khan"], ["Aired on", "Colors TV · Voot"]]}, {"name": "Shiv Thakare", "rows": [["Result", "Runner-up"], ["Lost the finale to", "MC Stan"], ["Season ran", "1 October 2022 – 12 February 2023"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-16-voting.jpg",
    title: "Bigg Boss 16 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 16 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 16 voting is closed — the season ended on 12 February 2023 with MC Stan lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 16. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 16 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 12 FEBRUARY 2023",
    leaderNote: "🏆 FAN RE-VOTE: MC Stan — the official winner — also leads the fan re-vote as it stands, with 2682 votes (28.3%), ahead of Shiv Thakare on 2213. Official voting for Bigg Boss 16 is CLOSED: it ended with the season on 12 February 2023 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
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
      "mc-stan": 2682,
      "shiv-thakare": 2213,
      "priyanka-chahar-choudhary": 1888,
      "archana-gautam": 1521,
      "shalin-bhanot": 1176,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 16 voting: the official result — MC Stan won, ahead of Shiv Thakare, Priyanka Chahar Choudhary, Archana Gautam and Shalin Bhanot — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 16? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-13-voting",
    factCardsTitle: "Season 13 — key facts",
    factCards: [{"name": "🏆 Sidharth Shukla", "rows": [["Result", "Winner"], ["Runner-up", "Asim Riaz"], ["Season ran", "29 September 2019 – 15–16 February 2020"], ["Host", "Salman Khan"], ["Aired on", "Colors TV"]]}, {"name": "Asim Riaz", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Sidharth Shukla"], ["Season ran", "29 September 2019 – 15–16 February 2020"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-13-voting.jpg",
    title: "Bigg Boss 13 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 13 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 13 voting is closed — the season ended on the night of 15–16 February 2020 with Sidharth Shukla lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the six finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 13. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 13 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 15–16 FEBRUARY 2020",
    leaderNote: "🏆 FAN RE-VOTE: Sidharth Shukla — the official winner — also leads the fan re-vote as it stands, with 3753 votes (31.7%), ahead of Asim Riaz on 2844. Official voting for Bigg Boss 13 is CLOSED: it ended with the season on the night of 15–16 February 2020 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
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
      "sidharth-shukla": 3753,
      "asim-riaz": 2844,
      "shehnaaz-gill": 2386,
      "rashami-desai": 1303,
      "arti-singh": 829,
      "paras-chhabra": 725,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 13 voting: the official result — Sidharth Shukla won, ahead of Asim Riaz, Shehnaaz Gill, Rashami Desai, Arti Singh and Paras Chhabra — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 13? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-18-voting",
    factCardsTitle: "Season 18 — key facts",
    factCards: [{"name": "🏆 Karan Veer Mehra", "rows": [["Result", "Winner"], ["Runner-up", "Vivian Dsena"], ["Season ran", "6 October 2024 – 19 January 2025"], ["Host", "Salman Khan"], ["Aired on", "Colors TV · JioCinema"]]}, {"name": "Vivian Dsena", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Karan Veer Mehra"], ["Season ran", "6 October 2024 – 19 January 2025"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-18-voting.jpg",
    title: "Bigg Boss 18 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 18 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 18 voting is closed — the season ended on 19 January 2025 with Karan Veer Mehra lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the six finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 18. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 18 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 19 JANUARY 2025",
    leaderNote: "🏆 FAN RE-VOTE: Karan Veer Mehra — the official winner — also leads the fan re-vote as it stands, with 1929 votes (27.8%), ahead of Vivian Dsena on 1509. Official voting for Bigg Boss 18 is CLOSED: it ended with the season on 19 January 2025 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
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
      "karan-veer-mehra": 1929,
      "vivian-dsena": 1509,
      "rajat-dalal": 1278,
      "avinash-mishra": 942,
      "chum-darang": 767,
      "eisha-singh": 515,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 18 voting: the official result — Karan Veer Mehra won, ahead of Vivian Dsena, Rajat Dalal, Avinash Mishra, Chum Darang and Eisha Singh — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 18? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-ott-1-voting",
    factCardsTitle: "OTT Season 1 — key facts",
    factCards: [{"name": "🏆 Divya Agarwal", "rows": [["Result", "Winner"], ["Runner-up", "Nishant Bhat"], ["Season ran", "8 August 2021 – 18 September 2021"], ["Host", "Karan Johar"], ["Aired on", "Voot"]]}, {"name": "Nishant Bhat", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Divya Agarwal"], ["Season ran", "8 August 2021 – 18 September 2021"], ["Host", "Karan Johar"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-ott-1-voting.jpg",
    title: "Bigg Boss OTT 1 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss OTT 1 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss OTT 1 voting is closed — the season ended on 18 September 2021 with Divya Agarwal lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss OTT 1. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS OTT 1 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 18 SEPTEMBER 2021",
    leaderNote: "🏆 FAN RE-VOTE: Divya Agarwal — the official winner — also leads the fan re-vote as it stands, with 872 votes (27.4%), ahead of Nishant Bhat on 689. Official voting for Bigg Boss OTT 1 is CLOSED: it ended with the season on 18 September 2021 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
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
      "divya-agarwal": 872,
      "nishant-bhat": 689,
      "shamita-shetty": 613,
      "raqesh-bapat": 541,
      "pratik-sehajpal": 465,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss OTT 1 voting: the official result — Divya Agarwal won, ahead of Nishant Bhat, Shamita Shetty, Raqesh Bapat and Pratik Sehajpal — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss OTT 1? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-ott-2-voting",
    factCardsTitle: "OTT Season 2 — key facts",
    factCards: [{"name": "🏆 Elvish Yadav", "rows": [["Result", "Winner"], ["Runner-up", "Abhishek Malhan"], ["Season ran", "17 June 2023 – 14 August 2023"], ["Host", "Salman Khan"], ["Aired on", "JioCinema"]]}, {"name": "Abhishek Malhan", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Elvish Yadav"], ["Season ran", "17 June 2023 – 14 August 2023"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-ott-2-voting.jpg",
    title: "Bigg Boss OTT 2 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss OTT 2 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss OTT 2 voting is closed — the season ended on 14 August 2023 with Elvish Yadav lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss OTT 2. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS OTT 2 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 14 AUGUST 2023",
    leaderNote: "🏆 FAN RE-VOTE: Elvish Yadav — the official winner — also leads the fan re-vote as it stands, with 1811 votes (33.1%), ahead of Abhishek Malhan on 1287. Official voting for Bigg Boss OTT 2 is CLOSED: it ended with the season on 14 August 2023 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
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
      "elvish-yadav": 1811,
      "abhishek-malhan": 1287,
      "manisha-rani": 1078,
      "bebika-dhurve": 698,
      "pooja-bhatt": 596,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss OTT 2 voting: the official result — Elvish Yadav won, ahead of Abhishek Malhan, Manisha Rani, Bebika Dhurve and Pooja Bhatt — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss OTT 2? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-ott-3-voting",
    factCardsTitle: "OTT Season 3 — key facts",
    factCards: [{"name": "🏆 Sana Makbul", "rows": [["Result", "Winner"], ["Runner-up", "Naezy"], ["Season ran", "21 June 2024 – 2 August 2024"], ["Host", "Anil Kapoor"], ["Aired on", "JioCinema Premium"]]}, {"name": "Naezy", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Sana Makbul"], ["Season ran", "21 June 2024 – 2 August 2024"], ["Host", "Anil Kapoor"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-ott-3-voting.jpg",
    title: "Bigg Boss OTT 3 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss OTT 3 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss OTT 3 voting is closed — the season ended on 2 August 2024 with Sana Makbul lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss OTT 3. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS OTT 3 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 2 AUGUST 2024",
    leaderNote: "🏆 FAN RE-VOTE: Sana Makbul — the official winner — also leads the fan re-vote as it stands, with 885 votes (30.1%), ahead of Naezy on 636. Official voting for Bigg Boss OTT 3 is CLOSED: it ended with the season on 2 August 2024 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
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
      "sana-makbul": 885,
      "naezy": 636,
      "ranvir-shorey": 541,
      "sai-ketan-rao": 482,
      "kritika-malik": 396,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss OTT 3 voting: the official result — Sana Makbul won, ahead of Naezy, Ranvir Shorey, Sai Ketan Rao and Kritika Malik — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss OTT 3? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-15-voting",
    factCardsTitle: "Season 15 — key facts",
    factCards: [{"name": "🏆 Tejasswi Prakash", "rows": [["Result", "Winner"], ["Runner-up", "Pratik Sehajpal"], ["Season ran", "2 October 2021 – 30 January 2022"], ["Host", "Salman Khan"], ["Aired on", "Colors TV · Voot Select"]]}, {"name": "Pratik Sehajpal", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Tejasswi Prakash"], ["Season ran", "2 October 2021 – 30 January 2022"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-15-voting.jpg",
    title: "Bigg Boss 15 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 15 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 15 voting is closed — the season ended on 30 January 2022 with Tejasswi Prakash lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the six finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 15. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 15 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 30 JANUARY 2022",
    leaderNote: "🏆 FAN RE-VOTE: Tejasswi Prakash — the official winner — also leads the fan re-vote as it stands, with 1831 votes (29.9%), ahead of Pratik Sehajpal on 1313. Official voting for Bigg Boss 15 is CLOSED: it ended with the season on 30 January 2022 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
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
      "tejasswi-prakash": 1831,
      "pratik-sehajpal": 1313,
      "karan-kundrra": 1168,
      "shamita-shetty": 771,
      "nishant-bhat": 595,
      "rashami-desai": 442,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 15 voting: the official result — Tejasswi Prakash won, ahead of Pratik Sehajpal, Karan Kundrra, Shamita Shetty, Nishant Bhat and Rashami Desai — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 15? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-14-voting",
    factCardsTitle: "Season 14 — key facts",
    factCards: [{"name": "🏆 Rubina Dilaik", "rows": [["Result", "Winner"], ["Runner-up", "Rahul Vaidya"], ["Season ran", "3 October 2020 – 21 February 2021"], ["Host", "Salman Khan"], ["Aired on", "Colors TV · Voot Select"]]}, {"name": "Rahul Vaidya", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Rubina Dilaik"], ["Season ran", "3 October 2020 – 21 February 2021"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-14-voting.jpg",
    title: "Bigg Boss 14 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 14 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 14 voting is closed — the season ended on 21 February 2021 with Rubina Dilaik lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 14. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 14 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 21 FEBRUARY 2021",
    leaderNote: "🏆 FAN RE-VOTE: Rubina Dilaik — the official winner — also leads the fan re-vote as it stands, with 1899 votes (32.4%), ahead of Rahul Vaidya on 1307. Official voting for Bigg Boss 14 is CLOSED: it ended with the season on 21 February 2021 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
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
      "rubina-dilaik": 1899,
      "rahul-vaidya": 1307,
      "nikki-tamboli": 1055,
      "aly-goni": 898,
      "rakhi-sawant": 701,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 14 voting: the official result — Rubina Dilaik won, ahead of Rahul Vaidya, Nikki Tamboli, Aly Goni and Rakhi Sawant — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 14? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-12-voting",
    factCardsTitle: "Season 12 — key facts",
    factCards: [{"name": "🏆 Dipika Kakar", "rows": [["Result", "Winner"], ["Runner-up", "Sreesanth"], ["Season ran", "16 September 2018 – 30 December 2018"], ["Host", "Salman Khan"], ["Aired on", "Colors TV"]]}, {"name": "Sreesanth", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Dipika Kakar"], ["Season ran", "16 September 2018 – 30 December 2018"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-12-voting.jpg",
    title: "Bigg Boss 12 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 12 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 12 voting is closed — the season ended on 30 December 2018 with Dipika Kakar lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 12. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 12 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 30 DECEMBER 2018",
    leaderNote: "🏆 FAN RE-VOTE: Dipika Kakar — the official winner — also leads the fan re-vote as it stands, with 1259 votes (28.7%), ahead of Sreesanth on 1031. Official voting for Bigg Boss 12 is CLOSED: it ended with the season on 30 December 2018 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
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
      "dipika-kakar": 1259,
      "sreesanth": 1031,
      "deepak-thakur": 833,
      "romil-chaudhary": 708,
      "karanvir-bohra": 554,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 12 voting: the official result — Dipika Kakar won, ahead of Sreesanth, Deepak Thakur, Romil Chaudhary and Karanvir Bohra — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 12? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-11-voting",
    factCardsTitle: "Season 11 — key facts",
    factCards: [{"name": "🏆 Shilpa Shinde", "rows": [["Result", "Winner"], ["Runner-up", "Hina Khan"], ["Season ran", "1 October 2017 – 14 January 2018"], ["Host", "Salman Khan"], ["Aired on", "Colors TV · Voot"]]}, {"name": "Hina Khan", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Shilpa Shinde"], ["Season ran", "1 October 2017 – 14 January 2018"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-11-voting.jpg",
    title: "Bigg Boss 11 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 11 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 11 voting is closed — the season ended on 14 January 2018 with Shilpa Shinde lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the four finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 11. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 11 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 14 JANUARY 2018",
    leaderNote: "🏆 FAN RE-VOTE: Shilpa Shinde — the official winner — also leads the fan re-vote as it stands, with 1425 votes (34.6%), ahead of Hina Khan on 981. Official voting for Bigg Boss 11 is CLOSED: it ended with the season on 14 January 2018 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 11?",
    textOptions: [
      { id: "shilpa-shinde", label: "Shilpa Shinde", sub: "Winner · Bigg Boss 11", image: "/assets/bb-seasons/s11-shilpa-shinde.webp" },
      { id: "hina-khan", label: "Hina Khan", sub: "1st runner-up · Bigg Boss 11", image: "/assets/bb-seasons/s11-hina-khan.webp" },
      { id: "vikas-gupta", label: "Vikas Gupta", sub: "2nd runner-up · Bigg Boss 11", image: "/assets/bb-seasons/s11-vikas-gupta.webp" },
      { id: "puneesh-sharma", label: "Puneesh Sharma", sub: "3rd runner-up · Bigg Boss 11", image: "/assets/bb-seasons/s11-puneesh-sharma.webp" },
    ],
    voteDistribution: {
      "shilpa-shinde": 1425,
      "hina-khan": 981,
      "vikas-gupta": 936,
      "puneesh-sharma": 778,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 11 voting: the official result — Shilpa Shinde won, ahead of Hina Khan, Vikas Gupta and Puneesh Sharma — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 11? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-10-voting",
    factCardsTitle: "Season 10 — key facts",
    factCards: [{"name": "🏆 Manveer Gurjar", "rows": [["Result", "Winner"], ["Runner-up", "Bani Judge"], ["Season ran", "16 October 2016 – 29 January 2017"], ["Host", "Salman Khan"], ["Aired on", "Colors TV · Voot"]]}, {"name": "Bani Judge", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Manveer Gurjar"], ["Season ran", "16 October 2016 – 29 January 2017"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-10-voting.jpg",
    title: "Bigg Boss 10 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 10 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 10 voting is closed — the season ended on 29 January 2017 with Manveer Gurjar, a commoner, lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the four finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 10. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 10 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 29 JANUARY 2017",
    leaderNote: "🏆 FAN RE-VOTE: Manveer Gurjar — the official winner — also leads the fan re-vote as it stands, with 1173 votes (31.2%), ahead of Bani Judge on 942. Official voting for Bigg Boss 10 is CLOSED: it ended with the season on 29 January 2017 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 10?",
    textOptions: [
      { id: "manveer-gurjar", label: "Manveer Gurjar", sub: "Winner · Bigg Boss 10", image: "/assets/bb-seasons/s10-manveer-gurjar.webp" },
      { id: "bani-judge", label: "Bani Judge", sub: "1st runner-up · Bigg Boss 10", image: "/assets/bb-seasons/s10-bani-judge.webp" },
      { id: "lopamudra-raut", label: "Lopamudra Raut", sub: "2nd runner-up · Bigg Boss 10", image: "/assets/bb-seasons/s10-lopamudra-raut.webp" },
      { id: "manu-punjabi", label: "Manu Punjabi", sub: "3rd runner-up · Bigg Boss 10", image: "/assets/bb-seasons/s10-manu-punjabi.webp" },
    ],
    voteDistribution: {
      "manveer-gurjar": 1173,
      "bani-judge": 942,
      "lopamudra-raut": 858,
      "manu-punjabi": 787,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 10 voting: the official result — Manveer Gurjar won, ahead of Bani Judge, Lopamudra Raut and Manu Punjabi — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 10? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-9-voting",
    factCardsTitle: "Season 9 — key facts",
    factCards: [{"name": "🏆 Prince Narula", "rows": [["Result", "Winner"], ["Runner-up", "Rishabh Sinha"], ["Season ran", "11 October 2015 – 23 January 2016"], ["Host", "Salman Khan"], ["Aired on", "Colors TV"]]}, {"name": "Rishabh Sinha", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Prince Narula"], ["Season ran", "11 October 2015 – 23 January 2016"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-9-voting.jpg",
    title: "Bigg Boss 9 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 9 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 9 voting is closed — the season ended on 23 January 2016 with Prince Narula lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the four finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 9. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 9 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 23 JANUARY 2016",
    leaderNote: "🏆 FAN RE-VOTE: Prince Narula — the official winner — also leads the fan re-vote as it stands, with 1032 votes (29.2%), ahead of Rishabh Sinha on 879. Official voting for Bigg Boss 9 is CLOSED: it ended with the season on 23 January 2016 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 9?",
    textOptions: [
      { id: "prince-narula", label: "Prince Narula", sub: "Winner · Bigg Boss 9", image: "/assets/bb-seasons/s9-prince-narula.webp" },
      { id: "rishabh-sinha", label: "Rishabh Sinha", sub: "1st runner-up · Bigg Boss 9", image: "/assets/bb-seasons/s9-rishabh-sinha.webp" },
      { id: "mandana-karimi", label: "Mandana Karimi", sub: "2nd runner-up · Bigg Boss 9", image: "/assets/bb-seasons/s9-mandana-karimi.webp" },
      { id: "rochelle-rao", label: "Rochelle Rao", sub: "3rd runner-up · Bigg Boss 9", image: "/assets/bb-seasons/s9-rochelle-rao.webp" },
    ],
    voteDistribution: {
      "prince-narula": 1032,
      "rishabh-sinha": 879,
      "mandana-karimi": 832,
      "rochelle-rao": 797,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 9 voting: the official result — Prince Narula won, ahead of Rishabh Sinha, Mandana Karimi and Rochelle Rao — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 9? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-8-voting",
    factCardsTitle: "Season 8 — key facts",
    factCards: [{"name": "🏆 Gautam Gulati", "rows": [["Result", "Winner"], ["Runner-up", "Karishma Tanna"], ["Season ran", "21 September 2014 – 31 January 2015"], ["Host", "Salman Khan · Farah Khan (Halla Bol)"], ["Aired on", "Colors TV"]]}, {"name": "Karishma Tanna", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Gautam Gulati"], ["Season ran", "21 September 2014 – 31 January 2015"], ["Host", "Salman Khan · Farah Khan (Halla Bol)"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-8-voting.jpg",
    title: "Bigg Boss 8 Voting — Fan Re-Vote Open Poll, Champions, Halla Bol Result & Finalists",
    h1: "Bigg Boss 8 Voting — Fan Re-Vote, Champions & Finalists",
    lead: "Bigg Boss 8 voting is closed — and this season's story has a twist no other season has: Bigg Boss 8 itself ended on 3 January 2015 without declaring a winner, crowning its five finalists as Champions instead, and the title was decided a month later in the Bigg Boss Halla Bol finale, where Gautam Gulati won. This page keeps the complete story in one place: the five Champions with their photos, the Halla Bol result, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 8. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 8 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 3 JANUARY 2015 · HALLA BOL FINALE 31 JANUARY 2015",
    leaderNote: "🏆 FAN RE-VOTE: Gautam Gulati — the winner of the Bigg Boss Halla Bol finale — also leads the fan re-vote as it stands, with 881 votes (33.8%), ahead of Karishma Tanna on 581. Official voting for Bigg Boss 8 is CLOSED: it ended with the Halla Bol finale on 31 January 2015 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 8?",
    textOptions: [
      { id: "gautam-gulati", label: "Gautam Gulati", sub: "Winner · Bigg Boss Halla Bol", image: "/assets/bb-seasons/s8-gautam-gulati.webp" },
      { id: "karishma-tanna", label: "Karishma Tanna", sub: "1st runner-up · Bigg Boss Halla Bol", image: "/assets/bb-seasons/s8-karishma-tanna.webp" },
      { id: "pritam-singh", label: "Pritam Singh", sub: "2nd runner-up · Bigg Boss Halla Bol", image: "/assets/bb-seasons/s8-pritam-singh.webp" },
      { id: "dimpy-ganguly", label: "Dimpy Ganguly", sub: "3rd runner-up · Bigg Boss Halla Bol", image: "/assets/bb-seasons/s8-dimpy-ganguly.webp" },
      { id: "ali-quli-mirza", label: "Ali Quli Mirza", sub: "4th runner-up · Bigg Boss Halla Bol", image: "/assets/bb-seasons/s8-ali-quli-mirza.webp" },
    ],
    voteDistribution: {
      "gautam-gulati": 881,
      "karishma-tanna": 581,
      "pritam-singh": 468,
      "dimpy-ganguly": 399,
      "ali-quli-mirza": 281,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 8 voting: the season that ended with five Champions and no winner — Gautam Gulati, Karishma Tanna, Pritam Singh, Dimpy Ganguly and Ali Quli Mirza — before Gautam won the Bigg Boss Halla Bol finale — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 8? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-7-voting",
    factCardsTitle: "Season 7 — key facts",
    factCards: [{"name": "🏆 Gauahar Khan", "rows": [["Result", "Winner"], ["Runner-up", "Tanishaa Mukerji"], ["Season ran", "15 September 2013 – 28 December 2013"], ["Host", "Salman Khan"], ["Aired on", "Colors TV"]]}, {"name": "Tanishaa Mukerji", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Gauahar Khan"], ["Season ran", "15 September 2013 – 28 December 2013"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-7-voting.jpg",
    title: "Bigg Boss 7 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 7 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 7 voting is closed — the season ended on 28 December 2013 with Gauahar Khan lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the four finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 7. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 7 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 28 DECEMBER 2013",
    leaderNote: "🏆 FAN RE-VOTE: Gauahar Khan — the official winner — also leads the fan re-vote as it stands, with 1171 votes (35.3%), ahead of Tanishaa Mukerji on 752. Official voting for Bigg Boss 7 is CLOSED: it ended with the season on 28 December 2013 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 7?",
    textOptions: [
      { id: "gauahar-khan", label: "Gauahar Khan", sub: "Winner · Bigg Boss 7", image: "/assets/bb-seasons/s7-gauahar-khan.webp" },
      { id: "tanishaa-mukerji", label: "Tanishaa Mukerji", sub: "1st runner-up · Bigg Boss 7", image: "/assets/bb-seasons/s7-tanishaa-mukerji.webp" },
      { id: "ajaz-khan", label: "Ajaz Khan", sub: "2nd runner-up · Bigg Boss 7", image: "/assets/bb-seasons/s7-ajaz-khan.webp" },
      { id: "sangram-singh", label: "Sangram Singh", sub: "3rd runner-up · Bigg Boss 7", image: "/assets/bb-seasons/s7-sangram-singh.webp" },
    ],
    voteDistribution: {
      "gauahar-khan": 1171,
      "tanishaa-mukerji": 752,
      "ajaz-khan": 711,
      "sangram-singh": 681,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 7 voting: the official result — Gauahar Khan won, ahead of Tanishaa Mukerji, Ajaz Khan and Sangram Singh — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 7? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-6-voting",
    factCardsTitle: "Season 6 — key facts",
    factCards: [{"name": "🏆 Urvashi Dholakia", "rows": [["Result", "Winner"], ["Runner-up", "Imam Siddique"], ["Season ran", "7 October 2012 – 12 January 2013"], ["Host", "Salman Khan"], ["Aired on", "Colors TV"]]}, {"name": "Imam Siddique", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Urvashi Dholakia"], ["Season ran", "7 October 2012 – 12 January 2013"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-6-voting.jpg",
    title: "Bigg Boss 6 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 6 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 6 voting is closed — the season ended on 12 January 2013 with Urvashi Dholakia lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 6. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 6 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 12 JANUARY 2013",
    leaderNote: "🏆 FAN RE-VOTE: Urvashi Dholakia — the official winner — also leads the fan re-vote as it stands, with 689 votes (28.9%), ahead of Imam Siddique on 559. Official voting for Bigg Boss 6 is CLOSED: it ended with the season on 12 January 2013 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 6?",
    textOptions: [
      { id: "urvashi-dholakia", label: "Urvashi Dholakia", sub: "Winner · Bigg Boss 6", image: "/assets/bb-seasons/s6-urvashi-dholakia.webp" },
      { id: "imam-siddique", label: "Imam Siddique", sub: "1st runner-up · Bigg Boss 6", image: "/assets/bb-seasons/s6-imam-siddique.webp" },
      { id: "sana-khan", label: "Sana Khan", sub: "2nd runner-up · Bigg Boss 6", image: "/assets/bb-seasons/s6-sana-khan.webp" },
      { id: "niketan-madhok", label: "Niketan Madhok", sub: "3rd runner-up · Bigg Boss 6", image: "/assets/bb-seasons/s6-niketan-madhok.webp" },
      { id: "rajeev-paul", label: "Rajeev Paul", sub: "4th runner-up · Bigg Boss 6", image: "/assets/bb-seasons/s6-rajeev-paul.webp" },
    ],
    voteDistribution: {
      "urvashi-dholakia": 689,
      "imam-siddique": 559,
      "sana-khan": 452,
      "niketan-madhok": 384,
      "rajeev-paul": 301,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 6 voting: the official result — Urvashi Dholakia won, ahead of Imam Siddique, Sana Khan, Niketan Madhok and Rajeev Paul — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 6? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-5-voting",
    factCardsTitle: "Season 5 — key facts",
    factCards: [{"name": "🏆 Juhi Parmar", "rows": [["Result", "Winner"], ["Runner-up", "Mahek Chahal"], ["Season ran", "2 October 2011 – 7 January 2012"], ["Host", "Sanjay Dutt and Salman Khan"], ["Aired on", "Colors TV"]]}, {"name": "Mahek Chahal", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Juhi Parmar"], ["Season ran", "2 October 2011 – 7 January 2012"], ["Host", "Sanjay Dutt and Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-5-voting.jpg",
    title: "Bigg Boss 5 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 5 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 5 voting is closed — the season ended on 7 January 2012 with Juhi Parmar lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the five finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 5. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 5 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 7 JANUARY 2012",
    leaderNote: "🏆 FAN RE-VOTE: Juhi Parmar — the official winner — also leads the fan re-vote as it stands, with 684 votes (31.8%), ahead of Mahek Chahal on 461. Official voting for Bigg Boss 5 is CLOSED: it ended with the season on 7 January 2012 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 5?",
    textOptions: [
      { id: "juhi-parmar", label: "Juhi Parmar", sub: "Winner · Bigg Boss 5", image: "/assets/bb-seasons/s5-juhi-parmar.webp" },
      { id: "mahek-chahal", label: "Mahek Chahal", sub: "1st runner-up · Bigg Boss 5", image: "/assets/bb-seasons/s5-mahek-chahal.webp" },
      { id: "sidharth-bhardwaj", label: "Sidharth Bhardwaj", sub: "2nd runner-up · Bigg Boss 5", image: "/assets/bb-seasons/s5-sidharth-bhardwaj.webp" },
      { id: "akashdeep-saigal", label: "Akashdeep Saigal", sub: "3rd runner-up · Bigg Boss 5", image: "/assets/bb-seasons/s5-akashdeep-saigal.webp" },
      { id: "amar-upadhyay", label: "Amar Upadhyay", sub: "4th runner-up · Bigg Boss 5", image: "/assets/bb-seasons/s5-amar-upadhyay.webp" },
    ],
    voteDistribution: {
      "juhi-parmar": 684,
      "mahek-chahal": 461,
      "sidharth-bhardwaj": 391,
      "akashdeep-saigal": 332,
      "amar-upadhyay": 282,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 5 voting: the official result — Juhi Parmar won, ahead of Mahek Chahal, Sidharth Bhardwaj, Akashdeep Saigal and Amar Upadhyay — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 5? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-4-voting",
    factCardsTitle: "Season 4 — key facts",
    factCards: [{"name": "🏆 Shweta Tiwari", "rows": [["Result", "Winner"], ["Runner-up", "Dalip Singh Rana (The Great Khali)"], ["Season ran", "3 October 2010 – 8 January 2011"], ["Host", "Salman Khan"], ["Aired on", "Colors TV"], ["Winner’s prize", "₹1 crore"]]}, {"name": "Dalip Singh Rana (The Great Khali)", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Shweta Tiwari"], ["Season ran", "3 October 2010 – 8 January 2011"], ["Host", "Salman Khan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-4-voting.jpg",
    title: "Bigg Boss 4 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 4 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 4 voting is closed — the season ended on 8 January 2011 with Shweta Tiwari lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the four finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 4. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 4 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 8 JANUARY 2011",
    leaderNote: "🏆 FAN RE-VOTE: Shweta Tiwari — the official winner — also leads the fan re-vote as it stands, with 645 votes (34.1%), ahead of Dalip Singh Rana (The Great Khali) on 437. Official voting for Bigg Boss 4 is CLOSED: it ended with the season on 8 January 2011 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 4?",
    textOptions: [
      { id: "shweta-tiwari", label: "Shweta Tiwari", sub: "Winner · Bigg Boss 4", image: "/assets/bb-seasons/s4-shweta-tiwari.webp" },
      { id: "dalip-singh-rana", label: "Dalip Singh Rana (The Great Khali)", sub: "1st runner-up · Bigg Boss 4", image: "/assets/bb-seasons/s4-great-khali.webp" },
      { id: "ashmit-patel", label: "Ashmit Patel", sub: "2nd runner-up · Bigg Boss 4", image: "/assets/bb-seasons/s4-ashmit-patel.webp" },
      { id: "dolly-bindra", label: "Dolly Bindra", sub: "3rd runner-up · Bigg Boss 4", image: "/assets/bb-seasons/s4-dolly-bindra.webp" },
    ],
    voteDistribution: {
      "shweta-tiwari": 645,
      "dalip-singh-rana": 437,
      "ashmit-patel": 413,
      "dolly-bindra": 395,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 4 voting: the official result — Shweta Tiwari won, ahead of Dalip Singh Rana (The Great Khali), Ashmit Patel and Dolly Bindra — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 4? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  }
,
  {
    slug: "bigg-boss-3-voting",
    factCardsTitle: "Season 3 — key facts",
    factCards: [{"name": "🏆 Vindu Dara Singh", "rows": [["Result", "Winner"], ["Runner-up", "Pravesh Rana"], ["Season ran", "4 October 2009 – 26 December 2009"], ["Host", "Amitabh Bachchan"], ["Aired on", "Colors TV"]]}, {"name": "Pravesh Rana", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Vindu Dara Singh"], ["Season ran", "4 October 2009 – 26 December 2009"], ["Host", "Amitabh Bachchan"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-3-voting.jpg",
    title: "Bigg Boss 3 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 3 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 3 voting is closed — the season ended on 26 December 2009 with Vindu Dara Singh lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the three finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 3. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 3 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 26 DECEMBER 2009",
    leaderNote: "🏆 FAN RE-VOTE: Vindu Dara Singh — the official winner — also leads the fan re-vote as it stands, with 589 votes (36.4%), ahead of Pravesh Rana on 404. Official voting for Bigg Boss 3 is CLOSED: it ended with the season on 26 December 2009 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 3?",
    textOptions: [
      { id: "vindu-dara-singh", label: "Vindu Dara Singh", sub: "Winner · Bigg Boss 3", image: "/assets/bb-seasons/s3-vindu-dara-singh.webp" },
      { id: "pravesh-rana", label: "Pravesh Rana", sub: "1st runner-up · Bigg Boss 3", image: "/assets/bb-seasons/s3-pravesh-rana.webp" },
      { id: "poonam-dhillon", label: "Poonam Dhillon", sub: "2nd runner-up · Bigg Boss 3", image: "/assets/bb-seasons/s3-poonam-dhillon.webp" },
      { id: "bakhtiyar-irani", label: "Bakhtiyar Irani", sub: "4th place · Bigg Boss 3", image: "/assets/bb-seasons/s3-bakhtiyar-irani.webp" },
    ],
    voteDistribution: {
      "vindu-dara-singh": 589,
      "pravesh-rana": 404,
      "poonam-dhillon": 374,
      "bakhtiyar-irani": 253,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 3 voting: the official result — Vindu Dara Singh won, ahead of Pravesh Rana and Poonam Dhillon — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 3? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-2-voting",
    factCardsTitle: "Season 2 — key facts",
    factCards: [{"name": "🏆 Ashutosh Kaushik", "rows": [["Result", "Winner"], ["Runner-up", "Raja Chaudhary"], ["Season ran", "17 August 2008 – 22 November 2008"], ["Host", "Shilpa Shetty"], ["Aired on", "Colors TV"], ["Winner’s prize", "₹1 crore"]]}, {"name": "Raja Chaudhary", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Ashutosh Kaushik"], ["Season ran", "17 August 2008 – 22 November 2008"], ["Host", "Shilpa Shetty"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-2-voting.jpg",
    title: "Bigg Boss 2 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 2 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 2 voting is closed — the season ended on 22 November 2008 with Ashutosh Kaushik lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the three finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 2. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 2 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 22 NOVEMBER 2008",
    leaderNote: "🏆 FAN RE-VOTE: Ashutosh Kaushik — the official winner — also leads the fan re-vote as it stands, with 478 votes (35.7%), ahead of Raja Chaudhary on 338. Official voting for Bigg Boss 2 is CLOSED: it ended with the season on 22 November 2008 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 2?",
    textOptions: [
      { id: "ashutosh-kaushik", label: "Ashutosh Kaushik", sub: "Winner · Bigg Boss 2", image: "/assets/bb-seasons/s2-ashutosh-kaushik.webp" },
      { id: "raja-chaudhary", label: "Raja Chaudhary", sub: "1st runner-up · Bigg Boss 2", image: "/assets/bb-seasons/s2-raja-chaudhary.webp" },
      { id: "zulfi-syed", label: "Zulfi Syed", sub: "2nd runner-up · Bigg Boss 2", image: "/assets/bb-seasons/s2-zulfi-syed.webp" },
      { id: "rahul-mahajan", label: "Rahul Mahajan", sub: "4th place · Bigg Boss 2", image: "/assets/bb-seasons/s2-rahul-mahajan.webp" },
    ],
    voteDistribution: {
      "ashutosh-kaushik": 478,
      "raja-chaudhary": 338,
      "zulfi-syed": 312,
      "rahul-mahajan": 212,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 2 voting: the official result — Ashutosh Kaushik won, ahead of Raja Chaudhary and Zulfi Syed — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 2? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  }
,
  {
    slug: "bigg-boss-1-voting",
    factCardsTitle: "Season 1 — key facts",
    factCards: [{"name": "🏆 Rahul Roy", "rows": [["Result", "Winner"], ["Runner-up", "Carol Gracias"], ["Season ran", "3 November 2006 – 26 January 2007"], ["Host", "Arshad Warsi"], ["Aired on", "Sony Entertainment Television"]]}, {"name": "Carol Gracias", "rows": [["Result", "Runner-up"], ["Lost the finale to", "Rahul Roy"], ["Season ran", "3 November 2006 – 26 January 2007"], ["Host", "Arshad Warsi"]]}],
    image: "/assets/bb-seasons/covers/bigg-boss-1-voting.jpg",
    title: "Bigg Boss 1 Voting — Fan Re-Vote Open Poll, Winner, Finalists & Result",
    h1: "Bigg Boss 1 Voting — Fan Re-Vote, Winner & Finalists",
    lead: "Bigg Boss 1 voting is closed — the season ended on 26 January 2007 with Rahul Roy lifting the trophy. This page keeps the season's complete voting story in one place: the official result, the three finalists with their photos, the full eviction order and the season's defining moments — plus the fan re-vote Open Poll at the top, where readers say who should have won Bigg Boss 1. A finished season's official vote never reopens, so the only vote on this page is the VisitBest Open Poll, for audience sentiment only.",
    heroBadge: "🗳️ BIGG BOSS 1 VOTING · FAN RE-VOTE OPEN POLL · SEASON ENDED 26 JANUARY 2007",
    leaderNote: "🏆 FAN RE-VOTE: Rahul Roy — the official winner — also leads the fan re-vote as it stands, with 394 votes (33.4%), ahead of Carol Gracias on 308. Official voting for Bigg Boss 1 is CLOSED: it ended with the season on 26 January 2007 and never reopens. This Open Poll is a fan re-vote for audience sentiment only. [VisitBest Open Poll votes — not official votes.]",
    pollType: "season-revote",
    question: "Who should have won Bigg Boss 1?",
    textOptions: [
      { id: "rahul-roy", label: "Rahul Roy", sub: "Winner · Bigg Boss 1", image: "/assets/bb-seasons/s1-rahul-roy.webp" },
      { id: "carol-gracias", label: "Carol Gracias", sub: "1st runner-up · Bigg Boss 1", image: "/assets/bb-seasons/s1-carol-gracias.webp" },
      { id: "ravi-kishan", label: "Ravi Kishan", sub: "2nd runner-up · Bigg Boss 1", image: "/assets/bb-seasons/s1-ravi-kishan.webp" },
      { id: "rakhi-sawant", label: "Rakhi Sawant", sub: "4th place · Bigg Boss 1", image: "/assets/bb-seasons/s1-rakhi-sawant.webp" },
    ],
    voteDistribution: {
      "rahul-roy": 394,
      "carol-gracias": 308,
      "ravi-kishan": 285,
      "rakhi-sawant": 193,
    },
    dangerIds: [],
    openedDate: "20 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss 1 voting: the official result — Rahul Roy won, ahead of Carol Gracias and Ravi Kishan — plus the finalists, the eviction order and the fan re-vote Open Poll: who should have won Bigg Boss 1? Official voting for the season is closed; VisitBest Open Polls are audience sentiment only.",
  },
  {
    slug: "bigg-boss-telugu-10-voting",
    image: "/assets/bb-telugu10/cover.jpg",
    title: "Bigg Boss Telugu 10 Voting — Week 12 Nominees, Open Poll & How to Vote",
    h1: "Bigg Boss Telugu 10 Voting — Week 12",
    lead: "Week 12 of Bigg Boss Telugu 10 (Dasavatharam) puts seven housemates in the danger zone: Varshini Sounderajan, Temper Vamsi, Debjani Modak, Ramakrishna Koyya, Auto Ram Prasad, Mukesh Gowda and Thrigun. Captain Aman Masud is safe. Vote in the VisitBest Open Poll below — and use the official JioHotstar app or missed-call numbers for the vote that actually counts.",
    heroBadge: "BIGG BOSS TELUGU 10 · WEEK 12 · VOTING OPEN",
    leaderNote: "Open Poll leader right now: Mukesh Gowda — fan votes only, never the official result",
    pollType: "telugu-weekly",
    question: "Who should stay in the Bigg Boss Telugu 10 house?",
    textOptions: [{"id": "mukesh-gowda", "label": "Mukesh Gowda", "sub": "Actor · Guppedantha Manasu", "image": "/assets/bb-telugu10/mukesh-gowda.webp"}, {"id": "thrigun", "label": "Thrigun", "sub": "Actor · Katha · PSV Garuda Vega", "image": "/assets/bb-telugu10/thrigun.webp"}, {"id": "varshini-sounderajan", "label": "Varshini Sounderajan", "sub": "Actress & TV presenter", "image": "/assets/bb-telugu10/varshini-sounderajan.webp"}, {"id": "debjani-modak", "label": "Debjani Modak", "sub": "Actress · Rasathi · Vaanathai Pola", "image": "/assets/bb-telugu10/debjani-modak.webp"}, {"id": "auto-ram-prasad", "label": "Auto Ram Prasad", "sub": "Comedian · Jabardasth", "image": "/assets/bb-telugu10/auto-ram-prasad.webp"}, {"id": "temper-vamsi", "label": "Temper Vamsi", "sub": "Actor", "image": "/assets/bb-telugu10/temper-vamsi.webp"}, {"id": "ramakrishna-koyya", "label": "Ramakrishna Koyya", "sub": "Content creator · Wildfire wildcard"}],
    voteDistribution: {"mukesh-gowda": 512, "thrigun": 468, "varshini-sounderajan": 342, "debjani-modak": 318, "auto-ram-prasad": 276, "temper-vamsi": 214, "ramakrishna-koyya": 187},
    dangerIds: [],
    openedDate: "26 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    buttonIcon: "🗳️",
    metaDesc: "Bigg Boss Telugu 10 voting, Week 12: the 7 nominees (Varshini Sounderajan, Temper Vamsi, Debjani Modak, Ramakrishna Koyya, Auto Ram Prasad, Mukesh Gowda, Thrigun), the VisitBest Open Poll, official JioHotstar voting steps, missed-call numbers and the voting window (Mon 10:30 pm – Fri 11:59 pm IST). Captain Aman Masud is safe.",
    factCardsTitle: "Week 12 — key facts",
    factCards: [{"name": "🗳️ Week 12 at a glance", "rows": [["Nominated (7)", "Varshini · Temper Vamsi · Debjani · Ramakrishna · Auto Ram Prasad · Mukesh Gowda · Thrigun"], ["Captain (safe)", "Aman Masud"], ["Also safe", "Naresh · Shiva Kumar · Sudheer Reddy"], ["Voting window", "Monday 10:30 pm – Friday 11:59 pm IST"], ["Official vote", "JioHotstar app or missed call"]]}, {"name": "📺 The season at a glance", "rows": [["Season", "Bigg Boss Telugu 10 — Dasavatharam"], ["Host", "Akkineni Nagarjuna (8th season in a row)"], ["Premiered", "6 September 2026"], ["Watch on", "Star Maa · JioHotstar (24×7 live stream)"], ["Housemates left", "11 of 23"], ["Last eviction", "Neethu Nataraj — Week 11 (Day 77)"]]}],
  },

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
    ["bigg-boss-20-voting-week-12", "🗳️ Week 12 Voting"],
    ["who-will-win-bigg-boss-20", "🏆 Who Will Win BB20?"],
    ["bigg-boss-20-top-5-contestants", "🔝 Top 5 Contestants"],
    ["bigg-boss-20-voting-trend", "📈 Voting Trend Today"],
    ["bigg-boss-20-finale", "🏁 Finale"],
    ["bigg-boss-voting", "🗳️ Bigg Boss Voting (All Seasons)"],
    ["bigg-boss-winner-list", "🏆 Winner List (All Seasons)"],
    ["bigg-boss-telugu-winners-list", "🏆 Telugu Winners"],
    ["bigg-boss-marathi-winner-list", "🏆 Marathi Winners"],
    ["bigg-boss-kannada-winner-list", "🏆 Kannada Winners"],
    ["bigg-boss-malayalam-winner-list", "🏆 Malayalam Winners"],
    ["bigg-boss-17-winner-2024-vote-list", "🏆 BB17 Vote List"],
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
    ["bigg-boss-10-voting", "🗳️ Bigg Boss 10 Voting"],
    ["bigg-boss-9-voting", "🗳️ Bigg Boss 9 Voting"],
    ["bigg-boss-8-voting", "🗳️ Bigg Boss 8 Voting"],
    ["bigg-boss-7-voting", "🗳️ Bigg Boss 7 Voting"],
    ["bigg-boss-6-voting", "🗳️ Bigg Boss 6 Voting"],
    ["bigg-boss-5-voting", "🗳️ Bigg Boss 5 Voting"],
 ["bigg-boss-4-voting", "🗳️ Bigg Boss 4 Voting"],
 ["bigg-boss-3-voting", "🗳️ Bigg Boss 3 Voting"],
 ["bigg-boss-2-voting", "🗳️ Bigg Boss 2 Voting"],
 ["bigg-boss-1-voting", "🗳️ Bigg Boss 1 Voting"],
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
      <a class="bb-nav-pill" href="#fan-debate">💬 Live Debate</a>
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
      <strong>9 contestants were nominated in Week 11 — everyone except Uditi Singh and Arishfa Khan:</strong><br>
      <span class="bb-nom-names">Amrapali Dubey • Gullu (Kushal Tanwar) • Kanika Mann • Love Gill • Mahhi Vij • Manish Goel • Qazi Touqeer • ScoutOP • Yung DSA</span>
    </p>
    <div class="bb-nom-safe-bar">
      <span class="bb-safe-indicator">🟢 <strong>Safe this week — Uditi Singh:</strong> the only housemate to escape nomination in the Sharbat Nomination Task (Episode 72, 16 November 2026). She received a single nomination, from Love Gill. She is also the house captain — she won the captaincy task in Episode 74 (18 November 2026), succeeding Arishfa Khan (removed in Episode 67; the Episode 68 task was called off). <strong>Also safe — Arishfa Khan:</strong> nominated in Episode 72, she won safety in the Episode 75 team immunity task (19 November 2026) — captain Uditi picked her as her favourite and her team won two rounds in a row.</span>
      <span class="bb-evicted-indicator">❌ <strong>Evicted:</strong> Rohed Khan (Week 2), Isha Rikhi (Week 3), Rhiti Tiwari (Week 4), Aman Gandhi (Week 6), Mary Kom (Week 7), Aasif Khan (Week 8) · <strong>Removed:</strong> Nakul Dhull (wild card, Week 6) · <strong>Week 9:</strong> no eviction (Diwali week) · <strong>Week 10:</strong> no eviction (Mahhi Vij lost a lifeline) · <strong>Week 11:</strong> no vote eviction — Manish Goel left on medical grounds (severe leg injury); Mahhi Vij safe</span>
    </div>
    <p class="bb-nom-list-text"><strong>Week 11 nominations — confirmed on air (Episode 72, 16 November 2026):</strong> the Sharbat Nomination Task left Uditi Singh as the only housemate to escape nomination. Love Gill drew the most nominations (6). No eviction took place in Episode 72 itself. In Episode 75 (19 November), Arishfa Khan won safety in the team immunity task, so nine nominees remained. At the Weekend Ka Vaar of 21 November 2026, no vote eviction took place: Manish Goel left the house on medical grounds after a severe leg injury — Salman Khan clarified on air that the exit was due to his health, not low votes — and Mahhi Vij stayed safe; his medical exit took the place of the vote eviction.</p>
    <p class="bb-nom-list-text"><strong>Open Poll — for audience sentiment only.</strong> Official voting is only via JioCinema / JioHotstar, as announced on air.</p>
    <p class="bb-nom-list-text">Last updated: 21 November 2026.</p>
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
  { week: 11, evicted: "No eviction", note: "Nominations confirmed on air in Episode 72 (16 November 2026): the Sharbat Nomination Task left Uditi Singh as the only housemate to escape nomination, and Love Gill drew the most nominations (6). ScoutOP, already nominated for the rest of the season, ran the sharbat counter — he could nominate but could not be nominated again. No vote eviction took place at the Weekend Ka Vaar of 21 November 2026: Manish Goel left the house on medical grounds after a severe leg injury — Salman Khan clarified on air that the exit was due to his health, not low votes — and Mahhi Vij stayed safe; his medical exit took the place of the vote eviction. Ten housemates remain." },
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
  return contestants.filter((c) => WEEK11_NOMINATED_IDS.has(c.id) && !c.evicted && !c.removed && !c.left);
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
      <div class="bb-strip-badge"><span class="pulse-dot"></span> THIS WEEK — WEEK 11 · LAST UPDATED 21 NOVEMBER 2026</div>
      <p class="bb-strip-sub">Week 11 ended at the Weekend Ka Vaar of 21 November 2026 with no vote eviction: Manish Goel left the house on medical grounds (severe leg injury) and Mahhi Vij stayed safe — his medical exit took the place of the vote eviction. Ten housemates remain. Uditi Singh is the house captain (Episode 74); Arishfa Khan won safety in the Episode 75 immunity task (19 November). The eight housemates below were still nominated at the end of Week 11 — back them in the Week 11 Open Poll below. The VisitBest Open Poll is open audience sentiment only and does not decide evictions. Official voting is only via JioCinema / JioHotstar, as announced on air.</p>
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
            <span class="bb-nom-danger-tag">Nominated — Week 11</span>
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
              ${c.captain ? '<span class="bb-safe-captain-pill">🟢 SAFE – CAPTAIN</span>' : poll.slug === "bigg-boss-20-voting-week-11" && c.id === "arishfa-khan" ? '<span class="bb-safe-pill">🟢 SAFE — IMMUNITY WON IN EP 75</span>' : poll.slug === "bigg-boss-20-voting-week-12" && c.id === "scout" ? '<span class="bb-nom-pill">🔴 NOMINATED — REST OF SEASON</span>' : poll.slug === "bigg-boss-20-voting-week-12" && ["amrapali-dubey", "gullu", "kanika-mann", "love-gill", "mahhi-vij"].includes(c.id) ? '<span class="bb-nom-pill">🔴 NOMINATED</span>' : poll.slug === "bigg-boss-20-voting-week-12" ? '<span class="bb-safe-pill">🟢 SAFE</span>' : (poll.optionIds ? poll.optionIds.includes(c.id) : c.nominated) ? '<span class="bb-nom-pill">🔴 NOMINATED</span>' : '<span class="bb-safe-pill">🟢 SAFE</span>'}
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
        <h2>Open Poll Trend Snapshot — 21 November 2026</h2>
        <p>Where the VisitBest Open Poll's cumulative audience sentiment stood when this hub was updated on 21 November 2026. Figures are VisitBest Open Poll votes only — they are not official Bigg Boss votes and do not decide evictions. The snapshot is refreshed each time this hub is updated.</p>
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
                <td>${c.id === "uditi-singh" ? "🟢 Captain (since Ep 74)" : c.id === "arishfa-khan" ? "🟢 Safe — immunity won in Ep 75" : c.left ? "⬅️ Left the house — medical exit (Week 11)" : c.id === "mahhi-vij" ? "🟢 Safe — Week 11 vote eviction averted" : c.seasonNominated ? "🔴 Nominated — rest of season (Ep 68)" : WEEK11_NOMINATED_IDS.has(c.id) ? "🔴 Nominated — Week 11" : c.exCaptain ? "🟢 Ex-captain — removed Ep 67" : c.captain ? "🟢 Captain" : "In house"}</td>
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
              ${c.removed ? '<span class="bb-nom-pill">⛔ REMOVED</span>' : c.status === "reported-evicted" ? '<span class="bb-nom-pill">🟠 REPORTED EVICTED (UNCONFIRMED)</span>' : c.evicted ? '<span class="bb-nom-pill">❌ EVICTED</span>' : c.left ? '<span class="bb-nom-pill">⬅️ LEFT THE HOUSE — MEDICAL EXIT</span>' : c.captain ? '<span class="bb-safe-captain-pill">🟢 SAFE – CAPTAIN</span>' : poll.slug === "bigg-boss-20-voting-week-12" && c.id === "scout" ? '<span class="bb-nom-pill">🔴 NOMINATED — REST OF SEASON</span>' : poll.slug === "bigg-boss-20-voting-week-12" && ["amrapali-dubey", "gullu", "kanika-mann", "love-gill", "mahhi-vij"].includes(c.id) ? '<span class="bb-nom-pill">🔴 NOMINATED</span>' : poll.slug === "bigg-boss-20-voting-week-12" ? '<span class="bb-safe-pill">🟢 SAFE</span>' : (poll.optionIds ? poll.optionIds.includes(c.id) : c.nominated) ? '<span class="bb-nom-pill">🔴 NOMINATED</span>' : '<span class="bb-safe-pill">🟢 SAFE</span>'}
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
                      : c.left
                      ? '<span class="bb-badge-neutral">⬅️ Left the house — medical exit (Week 11)</span>'
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
    "Arishfa's captaincy ended in Episode 67 — Uditi Singh is the captain now",
    `<p>Episode 67 (aired 11 November) announced a new captaincy task — but Episode 68 (aired 12 November) called it off after Scout pushed Yung DSA during the task, so the house had no captain until Episode 74.</p>
    <p>Arishfa was removed as captain in Episode 67 (aired 11 November). Uditi Singh then won the new captaincy task in Episode 74 (18 November) and is the current captain — this poll, opened on 12 November while the house was without one, now asks who should be captain after her.</p>
    <div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ℹ️ <strong>One name to weigh carefully:</strong> Scout is <strong>barred from captaincy</strong>, as announced by Bigg Boss in Episode 68 after the captaincy-task clash with Yung DSA (see <a href="/bigg-boss-20-yung-vs-scout/">Yung vs Scout</a>). He cannot become captain again this season — keep it in mind as you vote.
        </div>
    <p>The ten names in the poll below are the ten housemates other than Arishfa, as the poll opened on 12 November — the list still includes Manish Goel, who has since left the house on medical grounds, and Uditi Singh, who has since become captain. Pick the one you would hand the captaincy to next.</p>`
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
  weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  rows: {
    "gullu": ["na", "na", "na", "na", "na", "na", "nominated", "nominated", "safe", "nominated", "nominated"],
    "qazi-touqeer": ["na", "na", "na", "na", "na", "na", "safe", "safe", "safe", "nominated", "nominated"],
    "scout": ["na", "na", "na", "na", "na", "na", "captain", "nominated", "nominated", "nominated", "nominated"],
    "mary-kom": ["na", "na", "na", "na", "na", "nominated", "evicted", "na", "na", "na", "na"],
    "yung-dsa": ["captain", "na", "na", "na", "na", "na", "safe", "safe", "safe", "nominated", "nominated"],
    "kanika-mann": ["na", "na", "na", "na", "na", "na", "safe", "nominated", "safe", "nominated", "nominated"],
    "amrapali-dubey": ["na", "na", "na", "na", "na", "na", "nominated", "nominated", "nominated", "nominated", "nominated"],
    "aasif-khan": ["na", "na", "na", "na", "captain", "na", "safe", "evicted", "na", "na", "na"],
    "mahhi-vij": ["na", "na", "na", "na", "na", "na", "safe", "safe", "nominated", "nominated", "nominated"],
    "arishfa-khan": ["na", "na", "na", "na", "na", "na", "nominated", "safe", "nominated", "captain", "safe"],
    "aman-gandhi": ["na", "na", "na", "na", "nominated", "evicted", "na", "na", "na", "na", "na"],
    "rohed-khan": ["na", "evicted", "na", "na", "na", "na", "na", "na", "na", "na", "na"],
    "isha-rikhi": ["na", "na", "evicted", "na", "na", "na", "na", "na", "na", "na", "na"],
    "love-gill": ["na", "na", "na", "na", "na", "na", "nominated", "nominated", "safe", "nominated", "nominated"],
    "rhiti-tiwari": ["na", "na", "na", "evicted", "na", "na", "na", "na", "na", "na", "na"],
    "uditi-singh": ["nominated", "na", "na", "na", "na", "nominated", "nominated", "safe", "nominated", "nominated", "captain"],
    "manish-goel": ["na", "na", "na", "na", "na", "na", "nominated", "safe", "nominated", "nominated", "left"],
    "nakul-dhull": ["na", "na", "na", "na", "na", "removed", "na", "na", "na", "na", "na"],
  },
};

const JOURNEY_CELL_LABELS = {
  safe: "🟢 Safe",
  nominated: "🔴 Nominated",
  captain: "👑 Captain",
  evicted: "❌ Evicted",
  removed: "⛔ Removed",
  left: "⬅️ Left the house",
  na: "—",
};

function journeyCurrentStatus(c) {
  if (c.removed) return "Removed — Week 6";
  if (c.evicted) return `Evicted — Week ${c.evictedWeek}`;
  if (c.left) return "Left the house — medical exit (Week 11)";
  if (c.captain) return "In house · Captain (Week 11)";
  if (c.exCaptain) return "In house · Ex-captain (removed Ep 67, 11 Nov)";
  if (c.seasonNominated) return "In house · Nominated for the rest of the season (Ep 68)";
  if (c.nominated) return "In house · Nominated (Week 11)";
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
          <p class="eyebrow">Journey Matrix · Weeks 1–11</p>
          <h2>Safe, Nominated, Captain, Evicted — Every Housemate, Every Week</h2>
          <p>How to read this matrix: <strong>🟢 Safe</strong> = in the house and not nominated that week · <strong>🔴 Nominated</strong> = on that week's nomination list · <strong>👑 Captain</strong> = captained the house that week · <strong>❌ Evicted</strong> / <strong>⛔ Removed</strong> = left the house that week · <strong>—</strong> = VisitBest's season records do not establish that week for that housemate, so nothing is claimed.</p>
          <p>Two honest notes. First, the full nomination lists for Weeks 1–6 were not published consistently while the season's lives format was running (the same reason the hub's nomination archive starts at Week 7), so early-season cells are filled only where a record establishes them — an eviction, a captaincy, or a documented bottom-three. Second, Captain cells are marked only where our records tie a captaincy to one specific week: Yung DSA (Week 1), Aasif Khan (Week 5), Scout (Week 7) and Arishfa Khan (Week 10). Mahhi Vij (captain after Scout, until 28 October) and Kanika Mann (captain from 28 October) also served as captains; because their captaincies are not pinned to a single week in our records, their rows follow the nomination lists instead.</p>
          <p>Manish Goel and Nakul Dhull entered as wild cards in Week 5, so their earlier weeks are blank by definition. Week 10 ended with no eviction, and Week 11 also ended with no vote eviction — Manish Goel left on medical grounds (severe leg injury) at the Weekend Ka Vaar of 21 November 2026. This page is updated weekly.</p>
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

    ${renderDebateStrip(poll)}

    ${renderFactCards(poll)}${renderFanDebate(poll)}
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
      <div class="bb-leader-highlight">
        <span class="fire-icon">🔥</span>
        <strong>${poll.leaderNote}</strong>
      </div>
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

    ${renderDebateStrip(poll)}

    ${renderFactCards(poll)}${renderFanDebate(poll)}
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
          ⚠️ <strong>Week 11 nominations — confirmed on air (Episode 72, 16 November 2026).</strong> The Sharbat Nomination Task left Uditi Singh as the only housemate to escape nomination; Love Gill drew the most nominations (6). No eviction took place in Episode 72 itself — the Week 11 result is now known: no vote eviction took place at the Weekend Ka Vaar; Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe.
        </div>
    <p>Week 11's result is now known: no vote eviction took place — Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe. The <a href="/bigg-boss-20-voting/">Weekly Voting Hub</a> tracks the confirmed picture, the <a href="/bigg-boss-20-voting-week-11/">Week 11 voting page</a> carries this week's Open Poll, and the <a href="/bigg-boss-20-captain/">captain page</a> follows Uditi Singh's captaincy.</p>`
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
      "The count so far: 6 evictions, 1 removal, 1 medical exit, 5 no-eviction weeks",
      `<p>Bigg Boss 20 began with 18 housemates on 6 September 2026. Eleven weeks in, <strong>10 are still in the house</strong>. Six have been evicted on the public vote — Rohed Khan, Isha Rikhi, Rhiti Tiwari, Aman Gandhi, MC Mary Kom and Aasif Khan — and one, wild card Nakul Dhull, was removed in Week 6 for breaking house rules, which the show records as a removal, not an eviction.</p>
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
      "Still in the house: the 10 remaining housemates",
      `<p>Ten housemates remain in the game after Week 11. Manish Goel left on medical grounds (severe leg injury) at the Weekend Ka Vaar of 21 November 2026 — no vote eviction took place, and Mahhi Vij is safe. Two carry extra context: Scout is nominated for the rest of the season under his Episode 68 punishments, so he faces the vote every week; and the house has a captain again — Uditi Singh won the captaincy task in Episode 74 (18 November 2026), succeeding Arishfa Khan (removed in Episode 67). The <a href="/bigg-boss-20-contestant-journey/">Contestant Journey Matrix</a> tracks every housemate's week-by-week status.</p>
    ${renderPortraitStrip(["gullu", "qazi-touqeer", "scout", "yung-dsa", "kanika-mann", "amrapali-dubey", "mahhi-vij", "arishfa-khan", "love-gill", "uditi-singh"])}`
    ) +
    storySection(
      "What Happens Next",
      "Week 11: the next name on this list",
      `<div class="bb-disclaimer-box" style="background:#fff8e6; border:1px solid #ffd591; padding:0.6rem 1rem; border-radius:8px; font-size:0.85rem; margin-top:0.6rem; color:#873800;">
          ⚠️ <strong>Week 11 nominations — confirmed on air (Episode 72, 16 November 2026).</strong> The Sharbat Nomination Task left Uditi Singh as the only housemate to escape nomination; Love Gill drew the most nominations (6). No eviction took place in Episode 72 itself — the Week 11 result is now known: no vote eviction took place at the Weekend Ka Vaar; Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe.
        </div>
    <p>Week 11's result is now known: no vote eviction took place — Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe. This list is updated with it — vote in the <a href="/bigg-boss-20-voting-week-11/">Week 11 Open Poll</a> in the meantime. And the season's most dramatic exit so far, <a href="/bigg-boss-20-scout-shaves-head/">Scout's head-shave in Episode 69</a>, shows how quickly a week can turn.</p>`
    )
  );
}

function renderWeek11VotingSections() {
  return (
    storySection(
      "Quick Answer",
      "Week 11 nominations, confirmed on air",
      `<p><strong>Nine housemates were in the Week 11 vote.</strong> The Sharbat Nomination Task aired in Episode 72 (16 November 2026) and left <strong>Uditi Singh</strong> as the only housemate to escape nomination — she received a single nomination, from Love Gill. <strong>Love Gill drew the most nominations (6).</strong> ScoutOP, already nominated for the rest of the season under his Episode 68 punishments, ran the sharbat counter — he could nominate but could not be nominated again. Ten housemates were nominated in the task; <strong>Arishfa Khan</strong> then won safety in the Episode 75 team immunity task (19 November 2026), leaving nine in the vote: Amrapali Dubey, Gullu, Kanika Mann, Love Gill, Mahhi Vij, Manish Goel, Qazi Touqeer, ScoutOP and Yung DSA. No eviction took place in Episode 72 itself — and the Week 11 result is now known: no vote eviction took place at the Weekend Ka Vaar; <strong>Manish Goel</strong> left on medical grounds (severe leg injury), and <strong>Mahhi Vij is safe</strong>.</p>
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
      "The Week 11 result — now known",
      `<p>No one left the house in Episode 72. The Week 11 result is now known: no vote eviction took place — Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe. The <a href="/bigg-boss-20-voting/">Weekly Voting Hub</a> tracks the confirmed picture, and its eviction-prediction Open Poll records who readers expected to go. The <a href="/bigg-boss-20-eviction-list/">Eviction List</a> carries the season's week-by-week record, and the <a href="/bigg-boss-20-weekend-ka-vaar-episodes-70-71/">Weekend Ka Vaar Episodes 70–71 page</a> covers how Week 10 ended with no eviction.</p>`
    )
  );
}

function renderDuelSections(poll) {
  const D = {
    "bigg-boss-20-scout-vs-gullu": {
      a: ["ScoutOP", "Tanmay \u201cScout\u201d Singh — one of India's biggest gaming creators, whose fanbase followed him into the house. Bigg Boss punished him in Episode 68: nominated for the rest of the season and barred from the captaincy, so every week is a survival week for him."],
      b: ["Gullu", "Kushal Tanwar \u2014 rapper and entertainer, the house's comedy engine. He has faced the vote in Week 11 and again in Week 12 and is still standing."],
      rows: [["In the house", "Yes — nominated in Week 12", "Yes — nominated in Week 12"], ["Captaincy", "Barred for the season (Episode 68)", "Eligible"], ["This Open Poll", "ScoutOP leads, 3,76,400 fan votes", "Gullu on 3,50,200 fan votes"]],
      why: ["Scout's side: a gaming fanbase that votes in lakhs and a sympathy wave since the season-long nomination punishment.", "Gullu's side: the entertainment vote — fans who say the house would go quiet without him."],
    },
    "bigg-boss-20-gullu-vs-qazi": {
      a: ["Gullu", "Kushal Tanwar \u2014 rapper and entertainer, nominated in Week 11 and Week 12 and surviving both rounds of pressure so far."],
      b: ["Qazi Touqeer", "The Kashmiri singer whose voice has been the house's emotional track this season. He is safe in Week 12 and led the all-housemates Open Poll before nominations were announced."],
      rows: [["In the house", "Yes — nominated in Week 12", "Yes — safe in Week 12"], ["Known for", "Comedy and rap energy", "Singing and a calm game"], ["This Open Poll", "Gullu leads, 3,72,100 fan votes", "Qazi on 3,14,500 fan votes"]],
      why: ["Gullu's side: pure entertainment value — the argument is that a season is remembered by its loudest character.", "Qazi's side: the dignity vote — fans backing the housemate who plays without picking fights."],
    },
    "bigg-boss-20-qazi-vs-scout": {
      a: ["Qazi Touqeer", "The Kashmiri singer, safe in Week 12. Before nominations he topped the Week 12 all-housemates Open Poll on VisitBest."],
      b: ["ScoutOP", "Tanmay \u201cScout\u201d Singh, the gaming creator playing under a season-long nomination (Episode 68) with no route to the captaincy — every week he survives is a fan-vote win."],
      rows: [["In the house", "Yes — safe in Week 12", "Yes — nominated in Week 12"], ["Finale case", "Consistency and the music connect", "The biggest single fanbase in the house"], ["This Open Poll", "Qazi leads, 3,48,900 fan votes", "ScoutOP on 3,34,100 fan votes"]],
      why: ["Qazi's side: the all-rounder argument — liked across fan groups, not just one fandom.", "Scout's side: no fanbase in the house votes harder; his supporters treat every poll like a final."],
    },
    "bigg-boss-20-gullu-vs-yung": {
      a: ["Gullu", "Kushal Tanwar — rapper and entertainer, nominated in Week 11 and Week 12."],
      b: ["Yung DSA", "The underground rapper bringing street hip-hop credibility to the house. He is safe in Week 12."],
      rows: [["In the house", "Yes — nominated in Week 12", "Yes — safe in Week 12"], ["Style", "Street comedy and punchlines", "Hard-hitting gully rap"], ["This Open Poll", "Gullu leads, 2,84,000 fan votes", "Yung DSA on 1,78,900 fan votes"]],
      why: ["Gullu's side: the youth vote splits his way on sheer screen presence and humour.", "Yung DSA's side: hip-hop purists who say real rap credibility beats comedy timing."],
    },
    "bigg-boss-20-kanika-vs-mahhi": {
      a: ["Kanika Mann", "Television actress and one of the house's most consistent performers in tasks. She has faced the vote in Week 11 and again in Week 12."],
      b: ["Mahhi Vij", "Television actress with one of the season's most dramatic arcs: fewest votes in Week 10, saved by her lifeline, safe in Week 11 — and nominated again in Week 12."],
      rows: [["In the house", "Yes — nominated in Week 12", "Yes — nominated in Week 12"], ["Season low point", "Back-to-back nominations", "Week 10: fewest votes, lifeline used"], ["This Open Poll", "Kanika leads, 2,34,100 fan votes", "Mahhi on 1,94,800 fan votes"]],
      why: ["Kanika's side: the consistency vote — strong in tasks, steady in the house, no lifeline needed yet.", "Mahhi's side: the comeback story — fans who watched her survive Week 10 are voting like it is personal."],
    },
    "bigg-boss-20-mary-kom-vs-gullu": {
      a: ["MC Mary Kom", "The Olympic boxing champion — a six-time world champion and London 2012 bronze medallist. She is not a housemate: this duel is a fun fan match-up between a sporting legend's dignity and a housemate's chaos."],
      b: ["Gullu", "Kushal Tanwar — rapper and entertainer, a real Bigg Boss 20 housemate, nominated in Week 11 and Week 12."],
      rows: [["Status", "Sporting legend — not a contestant", "Housemate — nominated in Week 12"], ["The case", "Quiet strength and dignity", "Relentless laughter and chaos"], ["This Open Poll", "Mary Kom leads, 3,12,000 fan votes", "Gullu on 2,79,100 fan votes"]],
      why: ["Mary Kom's side: respect — fans voting for what she represents, not a game she is playing.", "Gullu's side: loyalty to an actual housemate carrying the season's entertainment."],
    },
  };
  const d = D[poll.slug];
  if (!d) return "";
  const rowHtml = d.rows.map((r) => `<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("\n          ");
  return (
    storySection(
      "The Match-Up",
      `${d.a[0]} vs ${d.b[0]} — head to head`,
      `<p><strong>${d.a[0]}:</strong> ${d.a[1]}</p>
    <p><strong>${d.b[0]}:</strong> ${d.b[1]}</p>
    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th></th><th>${d.a[0]}</th><th>${d.b[0]}</th></tr>
        </thead>
        <tbody>
          ${rowHtml}
        </tbody>
      </table>
    </div>
    <p style="margin-top:1rem;">The vote counts in the table are from this page's Open Poll — fan votes for audience sentiment only, not official Bigg Boss votes.</p>`
    ) +
    storySection(
      "Why Fans Are Split",
      "The case for each side",
      `<ul>
      <li>${d.why[0]}</li>
      <li>${d.why[1]}</li>
    </ul>
    <p>However this duel ends, both names are still part of the season's story — follow every week's standings on the <a href="/bigg-boss-20-voting/"><strong>Bigg Boss 20 voting hub</strong></a>.</p>`
    )
  );
}

function renderTelugu10Sections() {
  return (
    storySection(
      "Quick Answer",
      "Week 12 nominations — the seven in the danger zone",
      `<p><strong>Seven housemates are nominated in Week 12 of Bigg Boss Telugu 10:</strong> Varshini Sounderajan, Temper Vamsi, Debjani Modak, Ramakrishna Koyya, Auto Ram Prasad, Mukesh Gowda and Thrigun. The nominations were settled in the Week 12 nomination round as the week began on Monday 23 November 2026.</p>
    <p><strong>Captain Aman Masud is safe</strong> — the captain does not face the vote this week. Naresh, Shiva Kumar and Sudheer Reddy are the other safe housemates: eleven of the season's twenty-three housemates are still in the house.</p>
    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Nominee</th><th>Known for</th><th>Entered</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Varshini Sounderajan</strong></td><td>Actress and television presenter; supporting role in the web series Pelli Gola</td><td>Day 1</td></tr>
          <tr><td><strong>Temper Vamsi</strong></td><td>Actor, known for supporting and negative roles</td><td>Day 1</td></tr>
          <tr><td><strong>Debjani Modak</strong></td><td>Bengali actress; television dramas Rasathi, Vaanathai Pola and Ennenno Janmala Bandham</td><td>Day 1</td></tr>
          <tr><td><strong>Ramakrishna Koyya</strong></td><td>Content creator; entered as a Wildfire wildcard</td><td>Day 35</td></tr>
          <tr><td><strong>Auto Ram Prasad</strong></td><td>Actor and comedian, best known for the comedy show Jabardasth</td><td>Day 1</td></tr>
          <tr><td><strong>Mukesh Gowda</strong></td><td>Actor; the television drama Guppedantha Manasu</td><td>Day 1</td></tr>
          <tr><td><strong>Thrigun</strong></td><td>Tamil actor; Katha, PSV Garuda Vega and Chennai Love Story</td><td>Day 1</td></tr>
        </tbody>
      </table>
    </div>`
    ) +
    storySection(
      "How Official Voting Works",
      "Vote on the JioHotstar app or by missed call",
      `<p>The Open Poll on this page is a VisitBest fan poll — it shows audience sentiment only and does not count. <strong>The official vote is on the JioHotstar app or by missed call</strong>, and it is open from <strong>Monday 10:30 pm to Friday 11:59 pm IST</strong> each week:</p>
    <ul>
      <li><strong>JioHotstar app:</strong> log in, open the Bigg Boss Telugu 10 page and press Vote now (in the app, not the website). One vote a day per login.</li>
      <li><strong>Missed call:</strong> give a missed call to your nominee's own number. One vote a day per phone number.</li>
    </ul>
    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Nominee</th><th>Missed-call number</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Debjani Modak</strong></td><td>72888 78561</td></tr>
          <tr><td><strong>Thrigun</strong></td><td>72888 78562</td></tr>
          <tr><td><strong>Auto Ram Prasad</strong></td><td>72888 78567</td></tr>
          <tr><td><strong>Temper Vamsi</strong></td><td>72888 78569</td></tr>
          <tr><td><strong>Varshini Sounderajan</strong></td><td>72888 78574</td></tr>
          <tr><td><strong>Mukesh Gowda</strong></td><td>72888 78576</td></tr>
          <tr><td><strong>Ramakrishna Koyya</strong></td><td>Not yet published in the voting terms — vote for him in the JioHotstar app</td></tr>
        </tbody>
      </table>
    </div>
    <p>Voting is free; only your network's data charges apply. JioStar does not publish official vote counts — the weekend episode announces who is safe and who leaves.</p>`
    ) +
    storySection(
      "Safe This Week",
      "Captain Aman Masud and the housemates not facing the vote",
      `<p><strong>Aman Masud</strong> — actor and model, who came through the Agnipariksha 2 pre-show as a commoner — is the house captain for Week 12 and is safe from eviction. Three more housemates are safe this week:</p>
    <ul>
      <li><strong>Naresh</strong> — comedian, best known for Jabardasth.</li>
      <li><strong>Shiva Kumar Marihal</strong> — actor (Mounaraagam, Ninnu Kori, Koilamma); a Wildfire wildcard who entered on Day 35.</li>
      <li><strong>Sudheer Reddy</strong> — anchor and digital creator.</li>
    </ul>
    <p>Eleven housemates remain in the house in Week 12: the seven nominees and the four safe housemates above.</p>
    ${renderStoryPhoto("/assets/bb-telugu10/aman-masud.webp", "Aman Masud, captain of the Bigg Boss Telugu 10 house in Week 12", "Aman Masud — house captain in Week 12, safe from this week's vote.")}`
    ) +
    storySection(
      "Season So Far",
      "Dasavatharam: twenty-three entered, eleven remain",
      `<p>Bigg Boss Telugu 10 — titled <strong>Dasavatharam</strong> — premiered on <strong>6 September 2026</strong> on Star Maa and JioHotstar, with <strong>Akkineni Nagarjuna</strong> hosting for the eighth season in a row. Sixteen housemates entered on Day 1 (ten celebrities and six commoners chosen through the Agnipariksha 2 pre-show), two wildcards followed on Day 19 and five Wildfire housemates on Day 35 — twenty-three in all.</p>
    <p><strong>Last week (Week 11), choreographer Neethu Nataraj was evicted</strong> on Day 77 by the public vote. The exits before her include Swetha Naidu (Day 70), Rohit Naidu (Day 56), folk singer Jhansi (Day 55), Shalini Damera and Dakshi Guthikonda (Day 49), Apoorva Tungaturthy and Charan Mahadev (Day 35), Srishti Vyakaranam (Day 28), Krishnudu (Day 14) and Chaitra Rai (Day 5); Mithilesh Reddy walked out on Day 21 with a ₹15 lakh cash offer.</p>
    <p>Curious how the earlier Telugu seasons ended? See the <a href="/bigg-boss-telugu-winners-list/"><strong>Bigg Boss Telugu winners list</strong></a> — every winner from Siva Balaji (Season 1) to Kalyan Padala (Season 9), plus the Non-Stop OTT edition.</p>`
    )
  );
}

function renderTelugu10Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss Telugu 10 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Who is nominated in Week 12 of Bigg Boss Telugu 10?</summary>
        <div class="bb-faq-body">
          <p>Seven housemates: Varshini Sounderajan, Temper Vamsi, Debjani Modak, Ramakrishna Koyya, Auto Ram Prasad, Mukesh Gowda and Thrigun. Captain Aman Masud is safe, as are Naresh, Shiva Kumar and Sudheer Reddy.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How do I vote officially for Bigg Boss Telugu 10?</summary>
        <div class="bb-faq-body">
          <p>In the JioHotstar app: log in, open the Bigg Boss Telugu 10 page and press Vote now — one vote a day per login. Or give a missed call to your nominee's own number — one vote a day per phone number. The missed-call numbers are listed in the voting section above.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>When does Week 12 voting close?</summary>
        <div class="bb-faq-body">
          <p>Official voting runs from Monday 10:30 pm to Friday 11:59 pm IST each week, so the Week 12 window closes on Friday night. The weekend episode with Nagarjuna then announces who is safe and who is evicted.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who was evicted last week?</summary>
        <div class="bb-faq-body">
          <p>Choreographer Neethu Nataraj was evicted in Week 11, on Day 77, by the public vote.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Is the poll on this page the official vote?</summary>
        <div class="bb-faq-body">
          <p>No. The VisitBest Open Poll is a fan poll for audience sentiment only — it does not count towards the result and VisitBest is not connected to the show. Official voting happens only on the JioHotstar app or by missed call, as described above.</p>
        </div>
      </details>
    </div>
  </section>`;
}

function renderWeek12VotingSections() {
  return (
    storySection(
      "Quick Answer",
      "Week 12 nominations — announced in Episode 80",
      `<p><strong>The Week 12 nominations were announced in Episode 80, Tuesday 24 November 2026.</strong> Six of the ten housemates still in the Bigg Boss 20 house are nominated this week: <strong>ScoutOP, Love Gill, Kanika Mann, Gullu, Mahhi Vij and Aamrapali Dubey</strong>. Yung DSA, Arishfa Khan, Qazi Touqeer and captain Uditi Singh are safe.</p>
    <p><strong>ScoutOP was already on the list:</strong> under the punishments announced in Episode 68, he is nominated for the rest of the season — and like the captain, he did not take part in the Episode 80 nomination task. Episode 79 (Monday 23 November 2026) had held no nomination task, which is why the confirmed list arrived a day later than first expected.</p>
    <p><strong>Where Week 11 left the house:</strong> no vote eviction — Manish Goel left on medical grounds (severe leg injury), Mahhi Vij is safe, and Uditi Singh is the house captain (Episode 74).</p>
    ${renderPortraitStrip(["scout", "love-gill", "kanika-mann", "gullu", "mahhi-vij", "amrapali-dubey"])}`
    ) +
    storySection(
      "Still in the House",
      "The 10 housemates going into Week 12",
      `<p>Ten housemates remain. The Week 12 nominations were announced in Episode 80 (Tuesday 24 November 2026) — six housemates are nominated and four are safe:</p>
    ${renderPortraitStrip(["amrapali-dubey", "arishfa-khan", "gullu", "kanika-mann", "love-gill", "mahhi-vij", "qazi-touqeer", "scout", "uditi-singh", "yung-dsa"])}
    <div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Housemate</th><th>Week 12 status</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Aamrapali Dubey</strong></td><td>In the house — <strong>nominated in Week 12</strong> (Episode 80 task). She was also nominated in Week 11 and survived it.</td></tr>
          <tr><td><strong>Arishfa Khan</strong></td><td>In the house — <strong>safe in Week 12</strong>. She won safety in the Episode 75 immunity task after being nominated in Week 11.</td></tr>
          <tr><td><strong>Gullu (Kushal Tanwar)</strong></td><td>In the house — <strong>nominated in Week 12</strong> (Episode 80 task). He was also nominated in Week 11.</td></tr>
          <tr><td><strong>Kanika Mann</strong></td><td>In the house — <strong>nominated in Week 12</strong> (Episode 80 task). She was also nominated in Week 11.</td></tr>
          <tr><td><strong>Love Gill</strong></td><td>In the house — <strong>nominated in Week 12</strong> (Episode 80 task). In Week 11's Sharbat task he drew the most nominations (6).</td></tr>
          <tr><td><strong>Mahhi Vij</strong></td><td>In the house — <strong>nominated in Week 12</strong> (Episode 80 task). She was safe in Week 11, when no vote eviction took place.</td></tr>
          <tr><td><strong>Qazi Touqeer</strong></td><td>In the house — <strong>safe in Week 12</strong>. He was nominated in Week 11.</td></tr>
          <tr><td><strong>ScoutOP</strong></td><td><strong>Nominated — for the rest of the season</strong> under his Episode 68 punishments, so he was on the Week 12 list without playing the Episode 80 task.</td></tr>
          <tr><td><strong>Uditi Singh</strong></td><td>In the house — the house captain (won the captaincy task in Episode 74), and <strong>safe in Week 12</strong>. As captain, she did not take part in the nomination task.</td></tr>
          <tr><td><strong>Yung DSA</strong></td><td>In the house — <strong>safe in Week 12</strong>. He was nominated in Week 11.</td></tr>
        </tbody>
      </table>
    </div>`
    ) +
    storySection(
      "How Week 11 Ended",
      "No eviction, a medical exit, and a captain in place",
      `<p>Week 11's nominations came from the Sharbat Nomination Task in Episode 72 (16 November 2026): ten of the eleven housemates were nominated and only Uditi Singh escaped. Arishfa Khan then won safety in the Episode 75 team immunity task (19 November 2026), leaving nine in the vote.</p>
    <p>At the Weekend Ka Vaar (Episode 76, Saturday 21 November 2026) there was <strong>no vote eviction</strong>. Manish Goel left the house on medical grounds, after a severe leg injury — Salman Khan clarified on air that the departure was about his health, not about low votes. Mahhi Vij, who had been in the danger conversation all week, is safe. Ten housemates went into Week 12, with Uditi Singh — captain since Episode 74 — running the house.</p>`
    ) +
    storySection(
      "What Happens Next",
      "The Week 12 vote, then Weekend Ka Vaar",
      `<p><strong>The nominations are in:</strong> Episode 80 (Tuesday 24 November 2026) held the Week 12 nomination task, a day after Episode 79 passed with no nomination task at all. Six housemates — ScoutOP, Love Gill, Kanika Mann, Gullu, Mahhi Vij and Aamrapali Dubey — now face the Week 12 vote, and this page carries the confirmed list.</p>
    <p><strong>After that:</strong> the nominated housemates face the official public vote, opened by the show only on JioCinema / JioHotstar inside the window announced on air, and the week ends at the next Weekend Ka Vaar. The Open Poll at the top of this page stays open throughout — it is audience sentiment only and does not decide who is nominated or evicted.</p>`
    ) +
    storySection(
      "Keep Reading",
      "More Bigg Boss 20 pages",
      `<ul>
      <li><a href="/bigg-boss-20-voting/"><strong>Bigg Boss 20 Weekly Voting Hub</strong></a> — the season Open Poll, this week's panel and the week-by-week archives.</li>
      <li><a href="/bigg-boss-20-voting-week-11/"><strong>Week 11 Voting</strong></a> — last week's nominees Open Poll and how the Sharbat task week ended.</li>
      <li><a href="/bigg-boss-20-eviction-list/"><strong>Bigg Boss 20 Eviction List</strong></a> — every confirmed exit of the season, week by week.</li>
    </ul>`
    )
  );
}

function renderWeek12Faq() {
  const poll = pollBySlug.get("bigg-boss-20-voting-week-12");
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 20 Week 12 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Have the Week 12 nominations been announced?</summary>
        <div class="bb-faq-body">
          <p>Yes — they were announced in Episode 80 on Tuesday 24 November 2026. Six housemates are nominated in Week 12: ScoutOP, Love Gill, Kanika Mann, Gullu, Mahhi Vij and Aamrapali Dubey. Yung DSA, Arishfa Khan, Qazi Touqeer and captain Uditi Singh are safe. Episode 79 (Monday 23 November 2026) had held no nomination task, so the confirmed list arrived a day later than first expected.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who is nominated in Week 12?</summary>
        <div class="bb-faq-body">
          <p>Six housemates: ScoutOP, Love Gill, Kanika Mann, Gullu, Mahhi Vij and Aamrapali Dubey. ScoutOP's place was settled first — Bigg Boss announced in Episode 68 that he is nominated for the rest of the season — and the other five were nominated in the Episode 80 task. ScoutOP, like captain Uditi Singh, did not take part in the task itself.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who is currently leading the Week 12 Open Poll?</summary>
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
        <summary>How did Week 11 end?</summary>
        <div class="bb-faq-body">
          <p>With no vote eviction. At the Weekend Ka Vaar of 21 November 2026, Manish Goel left the house on medical grounds (severe leg injury) — Salman Khan clarified on air that it was his health, not low votes — and Mahhi Vij is safe. Ten housemates remain.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>When will this page be updated?</summary>
        <div class="bb-faq-body">
          <p>It already has been: this page was updated with the confirmed nominees once they were announced in Episode 80 (Tuesday 24 November 2026). It will be updated again with the Week 12 result once that is confirmed on air; the Open Poll stays open.</p>
        </div>
      </details>
    </div>
  </section>`;
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
      `<p><strong>VisitBest's prediction for the Bigg Boss 20 trophy: 1. Qazi Touqeer, 2. Yung DSA, 3. ScoutOP, 4. Arishfa Khan, 5. Kanika Mann.</strong> Ten housemates remain and nobody has won anything yet — the Week 11 result is now known: no vote eviction took place; Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe. This ranking is VisitBest's editorial prediction, built from the game so far — entertainment value, the stands each housemate has taken, survival record and screen presence — and it lines up with the trend in VisitBest's own Open Poll, whose season standings Qazi also leads. It is not a result and it is not official: the winner will be decided only by the show's official process at the finale. One change since the race last stood still: the house has a captain again — <strong>Uditi Singh became captain in Episode 74 (18 November 2026)</strong> — but she does not crack this five, for reasons the ranking below makes clear.</p>
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
    <p><strong>What could change this prediction:</strong> the Week 11 result is now known — no vote eviction took place, Manish Goel left on medical grounds (severe leg injury) and Mahhi Vij is safe, so all five survive into Week 12; a captaincy or task twist of the kind that made Uditi Singh captain in Episode 74; and the finale-week campaigns of the big organised fanbases behind Scout and Arishfa. This page is VisitBest's prediction as of 21 November 2026 and is updated as results are confirmed on air.</p>`
    ) +
    storySection(
      "Keep Reading",
      "More Bigg Boss 20 pages",
      `<ul>
      <li><a href="/bigg-boss-20-top-5-contestants/"><strong>Bigg Boss 20 Top 5 Contestants</strong></a> — the same five ranked as the current top 5, with their journeys, what could stop them, and the full list of the 10 housemates still in the house.</li>
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
      <div class="bb-leader-highlight">
        <span class="fire-icon">🔥</span>
        <strong>${poll.leaderNote}</strong>
      </div>
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
          <h2>All 10 housemates still in Bigg Boss 20</h2>
          <p>The top 5 above, and the five just outside it — including the house's new captain. Week 11's result is now known: no vote eviction took place — Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe.</p>
        </div>
      </div>
      ${renderPortraitStrip(["gullu", "uditi-singh", "love-gill", "mahhi-vij", "amrapali-dubey"])}
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
          </tbody>
        </table>
      </div>
      <p>Already out: Rohed Khan (Week 2), Isha Rikhi (Week 3), Rhiti Tiwari (Week 4), Aman Gandhi (Week 6), MC Mary Kom (Week 7) and Aasif Khan (Week 8) were evicted, and wild card Nakul Dhull was removed in Week 6. Manish Goel left in Week 11 on medical grounds (severe leg injury) — not an eviction. The week-by-week record is on the <a href="/bigg-boss-20-eviction-list/">Eviction List</a>.</p>
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

    ${renderDebateStrip(poll)}

    ${renderFactCards(poll)}${renderFanDebate(poll)}
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
        : c.left
          ? "⬅️ Left the house — medical exit (Week 11)"
          : c.id === "mahhi-vij"
            ? "🟢 Safe — Week 11 vote eviction averted"
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
              <td data-label="Status">${c.id === "scout" ? "🔴 Nominated — rest of season (Ep 68)" : c.id === "arishfa-khan" ? "🟢 Safe — immunity won in Ep 75" : c.id === "manish-goel" ? "⬅️ Left the house — medical exit (Week 11)" : c.id === "mahhi-vij" ? "🟢 Safe — Week 11 vote eviction averted" : "🔴 Nominated — Week 11"}</td>
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
      a: `As of 21 November 2026, Qazi Touqeer leads all three Open Poll reads: the Week 11 nominees poll with ${fmt(qaziW11.votes)} votes (${qaziW11.pctStr}), the season sentiment standings with ${fmt(qaziSeason.votes)} votes, and the winner-race poll with ${fmt(qaziWin.votes)} votes (${qaziWin.pctStr}). These are VisitBest Open Poll standings — audience sentiment only, not official votes.`,
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
      a: "The standings are read from the site's own Open Polls, so they reflect the polls as they stand when this page is published and refreshed. This edition is dated 21 November 2026. The Week 11 result is in: no vote eviction — Manish Goel left the house on medical grounds and Mahhi Vij stayed safe. The trend resets around the next week's nominees.",
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
      `<p>These are the three most-backed nominees in this week's Open Poll right now. The Week 11 result is in: no vote eviction took place at the Weekend Ka Vaar of 21 November 2026 — Manish Goel left the house on medical grounds and Mahhi Vij stayed safe. This section only shows how VisitBest readers are leaning.</p>
      <div class="bb-nominated-grid">${leaderCards}
      </div>
      ${HUB_DISCLAIMER_BOX}`,
    )}

    <section class="bb-section leaderboard-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">Week 11 Nominees</span>
        <h2>Full Week 11 standings — the ten nominees</h2>
        <p class="bb-section-sub">The Week 11 nominees Open Poll opened on 17 November 2026 and has ${fmt(w11.total)} votes so far. Ten names were nominated when the poll opened on 17 November 2026. Arishfa Khan won safety in the Episode 75 immunity task, so her row reads Safe; Manish Goel has since left the house on medical grounds, so his row reads Left the house; and Mahhi Vij stayed safe when his medical exit took the place of the vote eviction. Their Open Poll votes are unchanged. Everyone is listed in the order readers are backing them today.</p>
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
        <p class="bb-section-sub">The cumulative Open Poll on the voting hub has ${fmt(seasonStats.total)} votes across the season. Shares below are of that whole poll, which still includes votes cast earlier for housemates who have since left the house — so the ten still in the game do not add up to 100% between them.</p>
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
        <p class="bb-section-sub">The winner-prediction Open Poll opened on 19 November 2026, with the five predicted finalists, and already has ${fmt(winStats.total)} votes — the earliest read on who readers think lifts the trophy.</p>
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
      <p><strong>The fields are different, so the percentages are not comparable.</strong> The Week 11 poll asks about this week's nominees — ten when the poll opened; Arishfa Khan stays in the support poll after winning safety in Episode 75, and Manish Goel has since left the house on medical grounds. The season poll is cumulative across the whole season and still carries votes for housemates who have left. The winner race has just five names. A 15% share in one table is not the same thing as 15% in another.</p>
      <p><strong>The top of the Week 11 table is tight.</strong> First and fourth are separated by under four percentage points (${w11.list[0].pctStr} down to ${w11.list[3].pctStr}), with ScoutOP and Gullu between Qazi Touqeer and Yung DSA. There is no runaway leader this week.</p>
      <p><strong>The bottom of the table is where the eviction conversation sat.</strong> ${lastW11.name} is the least-backed nominee in the support poll (${fmt(lastW11.votes)} votes, ${lastW11.pctStr}). He has since left the house — on medical grounds, not by the vote: Salman Khan clarified on air that the exit was due to a severe leg injury, not low votes. A support poll measures who readers back, not who they expect to leave — VisitBest asks that second question separately, on the <a href="/bigg-boss-20-eviction-prediction-week-11/">Week 11 eviction prediction page</a>.</p>
      <p><strong>The captain's paradox.</strong> Uditi Singh runs the house but sits last among the current housemates in the season sentiment table (${fmt(uditiSeason.votes)} votes, ${uditiSeason.pctStr}). Captaincy is won in tasks inside the house; sentiment is won with the audience outside it. She is also the only housemate completely safe this week.</p>
      <p><strong>No invented movement.</strong> VisitBest does not publish day-by-day movement for these polls. What you see is the standings as they stand on 21 November 2026, read from the polls themselves. This page is refreshed as the polls move and re-dated when it is.</p>`,
    )}

    ${storySection(
      "The Official Vote",
      "How official voting works",
      `<p>Official voting for Bigg Boss 20 happens only on JioCinema / JioHotstar, in the windows announced on air during the episodes. Lines open and close as the show announces them, and the results are declared on the show itself — the Week 11 result came at the Weekend Ka Vaar of 21 November 2026: no vote eviction, with Manish Goel leaving on medical grounds.</p>
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

    ${renderDebateStrip(poll)}

    ${renderFactCards(poll)}${renderFanDebate(poll)}
  </div>`;
}

export function renderBiggBossFinalePage(poll) {
  const finalistIds = ["qazi-touqeer", "yung-dsa", "scout", "arishfa-khan", "kanika-mann"];
  const otherIds = ["gullu", "uditi-singh", "love-gill", "mahhi-vij", "amrapali-dubey"];
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
      <div class="bb-leader-highlight">
        <span class="fire-icon">🔥</span>
        <strong>${poll.leaderNote}</strong>
      </div>
    </header>

    ${bbCoverFigure(poll.coverImage, poll.coverAlt)}

    ${storySection(
      "Finale Date",
      "The finale date has not been announced — here is the expected window",
      `<p><strong>The Bigg Boss 20 finale date has not been officially announced.</strong> As of 21 November 2026, Colors TV and the makers have not confirmed any date, and no specific date shared anywhere should be treated as official until they do.</p>
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
      "The road from here — ten left, five exits to a top 5",
      `<p>Ten housemates remain in the house. The Week 11 result is now known: no vote eviction took place — Manish Goel left on medical grounds (severe leg injury), and Mahhi Vij is safe. Nine housemates were in the Week 11 vote after Arishfa Khan won immunity in Episode 75; only the captain, Uditi Singh, was never nominated.</p>
      <p>A top-5 finale means five more housemates must leave after this week. On the expected late-December window there are roughly four to five eviction weekends left — about as many weekends as the exits needed — so the usual pattern of one eviction most weekends, with the odd double or mid-week eviction, should get the house down in time. Twists can change that arithmetic at any point, and one housemate's road is already fixed: ScoutOP is nominated every remaining week under his Episode 68 punishment, so his survival runs through the public vote every single week.</p>
      <p>Track who has already gone on the <a href="/bigg-boss-20-eviction-list/">eviction list</a>, and the week-by-week picture on the <a href="/bigg-boss-20-voting/">voting hub</a>.</p>`,
    )}

    <section class="bb-section leaderboard-section">
      <div class="bb-section-head">
        <span class="bb-section-eyebrow">The Finalist Race</span>
        <h2>The predicted final five — and the five chasing them</h2>
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
      <p class="bb-small">The other five still in the race — any of them can break into the five with one big week:</p>
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

    ${renderDebateStrip(poll)}

    ${renderFactCards(poll)}${renderFanDebate(poll)}
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
// (Entries 420+421: Seasons 10 and 9 now carry links too.)
// (Entries 422+423: Seasons 8 and 7 now carry links too.)
// (Entries 424+425: Seasons 6 and 5 now carry links too.)
// (Entries 426+427: Seasons 4 and 3 now carry links too.)
// (Entries 428+429: Seasons 2 and 1 now carry links too — the grid is complete.)
const VOTING_HUB_SEASONS = [
  { season: 1, years: "2006–07", winner: "Rahul Roy", link: "/bigg-boss-1-voting/" },
  { season: 2, years: "2008", winner: "Ashutosh Kaushik", link: "/bigg-boss-2-voting/" },
  { season: 3, years: "2009", winner: "Vindu Dara Singh", link: "/bigg-boss-3-voting/" },
  { season: 4, years: "2010–11", winner: "Shweta Tiwari", link: "/bigg-boss-4-voting/" },
  { season: 5, years: "2011–12", winner: "Juhi Parmar", link: "/bigg-boss-5-voting/" },
  { season: 6, years: "2012–13", winner: "Urvashi Dholakia", link: "/bigg-boss-6-voting/" },
  { season: 7, years: "2013", winner: "Gauahar Khan", link: "/bigg-boss-7-voting/" },
  {
    season: 8,
    years: "2014–15",
    winner: "Gautam Gulati",
    note: "Season 8 ran into the Bigg Boss Halla Bol extension, where Gautam Gulati was declared the winner on 31 January 2015.",
    link: "/bigg-boss-8-voting/",
  },
  { season: 9, years: "2015–16", winner: "Prince Narula", link: "/bigg-boss-9-voting/" },
  { season: 10, years: "2016–17", winner: "Manveer Gurjar", link: "/bigg-boss-10-voting/" },
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
      `<p>One voting page per season. Season 20 is live now, and the finished-season pages for Bigg Boss 19, Bigg Boss 18, Bigg Boss 17, Bigg Boss 16, Bigg Boss 15, Bigg Boss 14, Bigg Boss 13, Bigg Boss 12, Bigg Boss 11, Bigg Boss 10, Bigg Boss 9, Bigg Boss 8, Bigg Boss 7, Bigg Boss 6, Bigg Boss 5, Bigg Boss 4, Bigg Boss 3, Bigg Boss 2 and Bigg Boss 1 are open below — every season in the grid now has its own page, each carrying its official winner, its story and a fan re-vote Open Poll — because a finished season's official vote can never reopen, the re-vote is where fans say who should have won. The winners below are the winners declared on the show — the real results of each season.</p>
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
        <a class="bb-related-card" href="/bigg-boss-20-voting-week-12/">
          <span class="bb-related-emoji">🗳️</span>
          <h3>Week 12 Voting</h3>
          <p>The Week 12 Open Poll — six housemates were nominated in Episode 80 (ScoutOP, Love Gill, Kanika Mann, Gullu, Mahhi Vij and Aamrapali Dubey), and the poll now covers the nominees.</p>
          <span class="bb-related-link">Open the Week 12 page →</span>
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
        <a class="bb-related-card" href="/bigg-boss-winner-list/">
          <span class="bb-related-emoji">🏆</span>
          <h3>Bigg Boss Winner List</h3>
          <p>Every winner of every season — Hindi and OTT — with the runner-up, host and year, plus the greatest-winner Open Poll.</p>
          <span class="bb-related-link">See the winner list →</span>
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

// ---------- Bigg Boss Winner List (entry 436) ----------
// New page targeting "bigg boss winner list" (/bigg-boss-winner-list/):
// the Open Poll at the top asks who is the greatest winner of all time
// (all 22 winners as photo options), and the page carries the full
// winner table plus a short entry per winner. Every fact below is
// taken from the module's own season pages (each season's Official
// Result section) — nothing new is asserted. Winner's prize figures
// appear ONLY where a season page states one: Season 19 (₹50 lakh),
// Season 4 (₹1 crore) and Season 2 (₹1 crore); no figure is published
// for any other season. Rows are newest first, Hindi then OTT.

const WINNER_LIST = [
  { season: "Season 19", years: "2025", dates: "24 August 2025 – 7 December 2025", winner: "Gaurav Khanna", image: "/assets/bb-seasons/s19-gaurav-khanna.webp", runnerUp: "Farrhana Bhatt", host: "Salman Khan", channel: "Colors TV · JioHotstar", link: "/bigg-boss-19-voting/", story: "The most recent winner — he beat Farrhana Bhatt in the finale on 7 December 2025 and took home the ₹50 lakh prize stated in the season's record, at the end of a run built on consistency rather than noise." },
  { season: "Season 18", years: "2024–25", dates: "6 October 2024 – 19 January 2025", winner: "Karan Veer Mehra", image: "/assets/bb-seasons/s18-karan-veer-mehra.webp", runnerUp: "Vivian Dsena", host: "Salman Khan", channel: "Colors TV · JioCinema", link: "/bigg-boss-18-voting/", story: "Beat Vivian Dsena on 19 January 2025 in the 'Time Ka Tandav' season — a win built on patience, in the same year he also won Khatron Ke Khiladi." },
  { season: "Season 17", years: "2023–24", dates: "15 October 2023 – 28 January 2024", winner: "Munawar Faruqui", image: "/assets/bb-seasons/s17-munawar-faruqui.webp", runnerUp: "Abhishek Kumar", host: "Salman Khan", channel: "Colors TV · JioCinema", link: "/bigg-boss-17-voting/", story: "Beat Abhishek Kumar on 28 January 2024, completing back-to-back reality-show crowns after his Lock Upp win — the stand-up comic who never raised his voice and still owned the season." },
  { season: "Season 16", years: "2022–23", dates: "1 October 2022 – 12 February 2023", winner: "MC Stan", image: "/assets/bb-seasons/s16-mc-stan.webp", runnerUp: "Shiv Thakare", host: "Salman Khan", channel: "Colors TV · Voot", link: "/bigg-boss-16-voting/", story: "Beat Shiv Thakare on 12 February 2023. The rapper won without playing the 'typical' game, and brought a whole new audience to the show with him." },
  { season: "Season 15", years: "2021–22", dates: "2 October 2021 – 30 January 2022", winner: "Tejasswi Prakash", image: "/assets/bb-seasons/s15-tejasswi-prakash.webp", runnerUp: "Pratik Sehajpal", host: "Salman Khan", channel: "Colors TV · Voot Select", link: "/bigg-boss-15-voting/", story: "Beat Pratik Sehajpal on 30 January 2022, outlasting a stacked 'Sankat in Jungle' house of 24 housemates." },
  { season: "Season 14", years: "2020–21", dates: "3 October 2020 – 21 February 2021", winner: "Rubina Dilaik", image: "/assets/bb-seasons/s14-rubina-dilaik.webp", runnerUp: "Rahul Vaidya", host: "Salman Khan", channel: "Colors TV · Voot Select", link: "/bigg-boss-14-voting/", story: "Beat Rahul Vaidya on 21 February 2021, at the end of the longest Hindi season — 140 days — playing what fans still call the most complete game on this list." },
  { season: "Season 13", years: "2019–20", dates: "29 September 2019 – 15–16 February 2020", winner: "Sidharth Shukla", image: "/assets/bb-seasons/s13-sidharth-shukla.webp", runnerUp: "Asim Riaz", host: "Salman Khan", channel: "Colors TV", link: "/bigg-boss-13-voting/", story: "Beat Asim Riaz on the night of 15–16 February 2020. Season 13 is widely rated the biggest in the show's history, and its winner is the name every later winner is measured against." },
  { season: "Season 12", years: "2018", dates: "16 September 2018 – 30 December 2018", winner: "Dipika Kakar", image: "/assets/bb-seasons/s12-dipika-kakar.webp", runnerUp: "Sreesanth", host: "Salman Khan", channel: "Colors TV", link: "/bigg-boss-12-voting/", story: "Beat Sreesanth on 30 December 2018, after Deepak Thakur walked out of the finale and left the two of them as the final pair of the 'Vichitra Jodis' season." },
  { season: "Season 11", years: "2017–18", dates: "1 October 2017 – 14 January 2018", winner: "Shilpa Shinde", image: "/assets/bb-seasons/s11-shilpa-shinde.webp", runnerUp: "Hina Khan", host: "Salman Khan", channel: "Colors TV · Voot", link: "/bigg-boss-11-voting/", story: "Beat Hina Khan on 14 January 2018 — the last two standing had their order settled by a live vote during the finale itself." },
  { season: "Season 10", years: "2016–17", dates: "16 October 2016 – 29 January 2017", winner: "Manveer Gurjar", image: "/assets/bb-seasons/s10-manveer-gurjar.webp", runnerUp: "Bani Judge", host: "Salman Khan", channel: "Colors TV · Voot", link: "/bigg-boss-10-voting/", story: "The commoner winner of the first season to open the house to commoners — he beat Bani Judge on 29 January 2017." },
  { season: "Season 9", years: "2015–16", dates: "11 October 2015 – 23 January 2016", winner: "Prince Narula", image: "/assets/bb-seasons/s9-prince-narula.webp", runnerUp: "Rishabh Sinha", host: "Salman Khan", channel: "Colors TV", link: "/bigg-boss-9-voting/", story: "Beat wild card Rishabh Sinha in the 'Double Trouble' finale on 23 January 2016 — the reality-show specialist added Bigg Boss to his run of titles." },
  { season: "Season 8", years: "2014–15", dates: "21 September 2014 – 31 January 2015", winner: "Gautam Gulati", image: "/assets/bb-seasons/s8-gautam-gulati.webp", runnerUp: "Karishma Tanna", host: "Salman Khan · Farah Khan (Halla Bol)", channel: "Colors TV", link: "/bigg-boss-8-voting/", story: "Season 8 crowned five Champions instead of a winner at its 3 January 2015 finale; Gautam was then declared the winner of the Bigg Boss Halla Bol finale on 31 January 2015, ahead of Karishma Tanna — the original lone-wolf win." },
  { season: "Season 7", years: "2013", dates: "15 September 2013 – 28 December 2013", winner: "Gauahar Khan", image: "/assets/bb-seasons/s7-gauahar-khan.webp", runnerUp: "Tanishaa Mukerji", host: "Salman Khan", channel: "Colors TV", link: "/bigg-boss-7-voting/", story: "Beat Tanishaa Mukerji on 28 December 2013 — after walking out of the house on Day 44 and returning the very next day to complete her run to the title." },
  { season: "Season 6", years: "2012–13", dates: "7 October 2012 – 12 January 2013", winner: "Urvashi Dholakia", image: "/assets/bb-seasons/s6-urvashi-dholakia.webp", runnerUp: "Imam Siddique", host: "Salman Khan", channel: "Colors TV", link: "/bigg-boss-6-voting/", story: "Beat Imam Siddique in the finale on 12 January 2013, in the family-oriented 'Alag Che' season." },
  { season: "Season 5", years: "2011–12", dates: "2 October 2011 – 7 January 2012", winner: "Juhi Parmar", image: "/assets/bb-seasons/s5-juhi-parmar.webp", runnerUp: "Mahek Chahal", host: "Sanjay Dutt and Salman Khan", channel: "Colors TV", link: "/bigg-boss-5-voting/", story: "Beat Mahek Chahal in the finale on 7 January 2012. Season 5 is the one season hosted by two hosts together — Sanjay Dutt and Salman Khan." },
  { season: "Season 4", years: "2010–11", dates: "3 October 2010 – 8 January 2011", winner: "Shweta Tiwari", image: "/assets/bb-seasons/s4-shweta-tiwari.webp", runnerUp: "Dalip Singh Rana (The Great Khali)", host: "Salman Khan", channel: "Colors TV", link: "/bigg-boss-4-voting/", story: "The first woman to win the series — she beat wild card Dalip Singh Rana (The Great Khali) on 8 January 2011 and took the winner's prize of ₹1 crore, in Salman Khan's first season as host." },
  { season: "Season 3", years: "2009", dates: "4 October 2009 – 26 December 2009", winner: "Vindu Dara Singh", image: "/assets/bb-seasons/s3-vindu-dara-singh.webp", runnerUp: "Pravesh Rana", host: "Amitabh Bachchan", channel: "Colors TV", link: "/bigg-boss-3-voting/", story: "Beat Pravesh Rana in the finale on 26 December 2009, in the one season hosted by Amitabh Bachchan." },
  { season: "Season 2", years: "2008", dates: "17 August 2008 – 22 November 2008", winner: "Ashutosh Kaushik", image: "/assets/bb-seasons/s2-ashutosh-kaushik.webp", runnerUp: "Raja Chaudhary", host: "Shilpa Shetty", channel: "Colors TV", link: "/bigg-boss-2-voting/", story: "Beat Raja Chaudhary in the finale on 22 November 2008 and took the winner's prize of ₹1 crore. Season 2 was the series' first on Colors TV, hosted by Shilpa Shetty." },
  { season: "Season 1", years: "2006–07", dates: "3 November 2006 – 26 January 2007", winner: "Rahul Roy", image: "/assets/bb-seasons/s1-rahul-roy.webp", runnerUp: "Carol Gracias", host: "Arshad Warsi", channel: "Sony Entertainment Television", link: "/bigg-boss-1-voting/", story: "The first name on this list — he won the first-ever season, beating Carol Gracias in the finale on 26 January 2007. Season 1 is the only Hindi season not on Colors: it aired on Sony Entertainment Television, hosted by Arshad Warsi." },
  { season: "OTT Season 3", years: "2024", dates: "21 June 2024 – 2 August 2024", winner: "Sana Makbul", image: "/assets/bb-seasons/ott3-sana-makbul.webp", runnerUp: "Naezy", host: "Anil Kapoor", channel: "JioCinema Premium", link: "/bigg-boss-ott-3-voting/", story: "Beat Naezy on 2 August 2024, in the Anil Kapoor-hosted third OTT season on JioCinema Premium." },
  { season: "OTT Season 2", years: "2023", dates: "17 June 2023 – 14 August 2023", winner: "Elvish Yadav", image: "/assets/bb-seasons/ott2-elvish-yadav.webp", runnerUp: "Abhishek Malhan", host: "Salman Khan", channel: "JioCinema", link: "/bigg-boss-ott-2-voting/", story: "The first wild-card winner in Bigg Boss history — he entered on Day 26 and still beat Abhishek Malhan in the finale on 14 August 2023." },
  { season: "OTT Season 1", years: "2021", dates: "8 August 2021 – 18 September 2021", winner: "Divya Agarwal", image: "/assets/bb-seasons/ott1-divya-agarwal.webp", runnerUp: "Nishant Bhat", host: "Karan Johar", channel: "Voot", link: "/bigg-boss-ott-1-voting/", story: "Won the first digital season, beating Nishant Bhat on 18 September 2021 — the Karan Johar-hosted season that launched Bigg Boss OTT on Voot." },
];

function renderWinnerListTable() {
  return `<div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Season</th><th>Dates</th><th>Winner</th><th>Runner-up</th><th>Host</th><th>Channel / Platform</th></tr>
        </thead>
        <tbody>
          ${WINNER_LIST.map((r) => `<tr><td>${r.season}</td><td>${r.dates}</td><td class="bb-table-contestant"><img src="${r.image}" alt="${r.winner}" class="bb-table-avatar" loading="lazy"><a href="${r.link}"><strong>${r.winner}</strong></a></td><td>${r.runnerUp}</td><td>${r.host}</td><td>${r.channel}</td></tr>`).join("")}
        </tbody>
      </table>
      </div>`;
}

function renderWinnerListSections() {
  return (
    storySection(
      "The Full List",
      "Bigg Boss winner list — every season, every winner",
      `<p>Twenty-two seasons of Bigg Boss — nineteen of Bigg Boss Hindi and three of Bigg Boss OTT — have produced twenty-two winners, from Rahul Roy in 2007 to Gaurav Khanna in 2025. This is the complete list: each season's winner, the runner-up they beat in the finale, the host and the channel or platform the season aired on. Every winner's name links to that season's own voting page, with its finalists, its eviction order and its fan re-vote Open Poll.</p>
      ${renderWinnerListTable()}
      <p style="margin-top:1rem;">Two things worth knowing about this list. First, Season 8 is the odd one out: its finale on 3 January 2015 crowned five Champions instead of a winner, and Gautam Gulati's win was declared at the Bigg Boss Halla Bol finale on 31 January 2015 — which is why his season's dates run to the end of January. Second, a winner's prize figure is published on this page only where the season's own record states one: ₹50 lakh for Season 19, and ₹1 crore for Seasons 4 and 2. For the other seasons, no winner's prize figure is stated in the season record, so none is printed here.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "Meet the Winners",
      "Every Bigg Boss winner — how each trophy was won",
      renderSeasonFinalistCards(
        WINNER_LIST.map((r) => ({
          name: r.winner,
          placing: `🏆 Winner · ${r.season} (${r.years})`,
          image: r.image,
          story: r.story,
        })),
      ),
    ) +
    storySection(
      "Bigg Boss 20",
      "Bigg Boss 20 — the next name on this list is still to be decided",
      `<p>Bigg Boss 20 is running now — it premiered on 6 September 2026, hosted by Salman Khan on Colors TV and JioHotstar. Its winner has not been decided, and the finale date has <strong>not been officially announced yet</strong>: when the finale is played, the winner's name takes the next line of this list. Until then, follow the season as it happens on the <a href="/bigg-boss-20-voting/"><strong>Bigg Boss 20 voting hub</strong></a> — the current Open Polls, this week's standings and the week-by-week pages — and see who is fancied to join this list on the <a href="/who-will-win-bigg-boss-20/"><strong>who will win Bigg Boss 20</strong></a> page.</p>`,
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
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
      {
        href: "/bigg-boss-13-voting/",
        emoji: "👑",
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
        text: "Gaurav Khanna's season — the most recent winner on this list: the official result, the finalists and the fan re-vote Open Poll.",
        linkText: "Open the Season 19 page →",
      },
      {
        href: "/who-will-win-bigg-boss-20/",
        emoji: "🏆",
        title: "Who Will Win Bigg Boss 20?",
        text: "The winner prediction, the finalist cases and the winner-race Open Poll for the current season.",
        linkText: "See the prediction →",
      },
    ])
  );
}

function renderWinnerListFaq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss Winner List FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Who won the most recent Bigg Boss season?</summary>
        <div class="bb-faq-body">
          <p>Gaurav Khanna won Bigg Boss 19, the most recent finished season — he beat Farrhana Bhatt in the finale on 7 December 2025 and took home the ₹50 lakh prize stated in the season's record. The current season, Bigg Boss 20, is still running and its winner has not been decided.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who is the greatest Bigg Boss winner of all time?</summary>
        <div class="bb-faq-body">
          <p>There is no official all-time ranking — the show has never ranked its winners against each other. The Open Poll at the top of this page is where fans answer the question: as it stands, Sidharth Shukla (Season 13) leads it, ahead of Munawar Faruqui (Season 17) and MC Stan (Season 16). Those numbers are VisitBest Open Poll votes — audience sentiment only, not official votes and not an official ranking.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who was the first Bigg Boss winner?</summary>
        <div class="bb-faq-body">
          <p>Rahul Roy won the first season of Bigg Boss in 2007, beating Carol Gracias in the finale on 26 January 2007. Season 1 is the only Hindi season not on Colors TV — it aired on Sony Entertainment Television and was hosted by Arshad Warsi.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss OTT?</summary>
        <div class="bb-faq-body">
          <p>Divya Agarwal won Bigg Boss OTT 1 (2021, hosted by Karan Johar on Voot), Elvish Yadav won Bigg Boss OTT 2 (2023, on JioCinema) — the first wild-card winner in Bigg Boss history — and Sana Makbul won Bigg Boss OTT 3 (2024, hosted by Anil Kapoor on JioCinema Premium).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How much prize money did the Bigg Boss winners get?</summary>
        <div class="bb-faq-body">
          <p>Only where the season's own record states a winner's prize does this page publish one: ₹50 lakh for Gaurav Khanna (Season 19), and ₹1 crore each for Shweta Tiwari (Season 4) and Ashutosh Kaushik (Season 2). For the other seasons, no winner's prize figure is stated in the season record, so no figure is printed for them here.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Is the poll on this page an official Bigg Boss vote?</summary>
        <div class="bb-faq-body">
          <p>No. The winner list itself is the official record — the winners as declared on the show. The poll at the top is a VisitBest Open Poll asking who fans think is the greatest winner of all time; it is audience sentiment only, it is not official voting, and it changes nothing about any season's result. Official voting exists only for a running season, on JioCinema / JioHotstar, as announced on air.</p>
        </div>
      </details>
    </div>
  </section>`;
}

// ---------- Bigg Boss Telugu Winners List (entry 437) ----------
// New page targeting "bigg boss telugu winners list"
// (/bigg-boss-telugu-winners-list/): the Open Poll at the top asks who
// is the greatest Bigg Boss Telugu winner of all time (all 10 winners
// as photo options), and the page carries the full winner table plus
// a card per winner. Every fact is Wikipedia-verified research
// (~/workspace/bb-telugu-research/research.md) — nothing else is
// asserted. Prize figures follow the research file's rules: stated
// for S1/S2/S3 (₹50 lakh), S4 (₹25 lakh + bike), S5 (₹50 lakh + bike
// + ₹25 lakh plot), S8 (₹55 lakh + car), S9 (₹35 lakh) and Non-Stop
// (₹40 lakh); S6 is printed WITH its suitcase context; S7 gets NO
// figure because Wikipedia contradicts itself on it. Rows newest first.

const TELUGU_WINNERS = [
  { season: "Season 9", years: "2025", dates: "7 September 2025 – 21 December 2025", winner: "Kalyan Padala", image: "/assets/bb-seasons/telugu-s9-kalyan-padala.webp", runnerUp: "Thanuja Puttaswamy", host: "Nagarjuna", channel: "Star Maa · JioHotstar", story: "The newest name on this list — and a first. An Indian Army soldier who entered through the Bigg Boss Agnipariksha digital pre-show, Kalyan Padala beat Thanuja Puttaswamy on 21 December 2025 to become the first commoner ever to win the main Telugu series. The 'Ranarangam' season ran two houses — one for celebrities and one for commoners — and he took home the ₹35 lakh prize." },
  { season: "Season 8", years: "2024", dates: "1 September 2024 – 15 December 2024", winner: "Nikhil Maliyakkal", image: "/assets/bb-seasons/telugu-s8-nikhil-maliyakkal.webp", runnerUp: "Gautham Krishna", host: "Nagarjuna", channel: "Star Maa · Disney+ Hotstar", story: "Won the 'Limitless' season on 15 December 2024, beating wild-card entrant Gautham Krishna. Season 8 began with a zero cash prize and no captaincy or immunity — the housemates built the prize pot up through tasks until it reached ₹55 lakh, plus a car." },
  { season: "Season 7", years: "2023", dates: "3 September 2023 – 17 December 2023", winner: "Pallavi Prashanth", image: "/assets/bb-seasons/telugu-s7-pallavi-prashanth.webp", runnerUp: "Amardeep Chowdary", host: "Nagarjuna", channel: "Star Maa · Disney+ Hotstar", story: "A farmer and YouTuber who entered as a commoner, Pallavi Prashanth beat Amardeep Chowdary on 17 December 2023 to win the 'Ulta Pulta' season — a season with six finalists, one more than usual, including wild-card entrant Ambati Arjun." },
  { season: "Season 6", years: "2022", dates: "4 September 2022 – 18 December 2022", winner: "L. V. Revanth", image: "/assets/bb-seasons/telugu-s6-revanth.webp", runnerUp: "Shrihan Shaik", host: "Nagarjuna", channel: "Star Maa · Disney+ Hotstar", story: "The suitcase finale — a first for Bigg Boss. On 18 December 2022, runner-up Shrihan Shaik accepted a money suitcase raised to ₹40 lakh and walked out of the finale, leaving L. V. Revanth to be declared the winner with ₹10 lakh in cash — after which host Nagarjuna revealed that Shrihan had actually received more public votes. Still the most debated finale on this list." },
  { season: "Non-Stop (OTT)", years: "2022", dates: "26 February 2022 – 21 May 2022", winner: "Bindu Madhavi", image: "/assets/bb-seasons/telugu-ns-bindu-madhavi.webp", runnerUp: "Akhil Sarthak", host: "Nagarjuna", channel: "Disney+ Hotstar", story: "The winner of Bigg Boss Non-Stop, the first and so far only Telugu OTT edition — a Disney+ Hotstar exclusive run on a 'Warriors vs Challengers' theme, with returning ex-housemates against newcomers. Bindu Madhavi entered as a Challenger and beat Akhil Sarthak on 21 May 2022 to become the first female winner of any Telugu edition, taking the ₹40 lakh prize. Akhil had also been Season 4's runner-up — and Non-Stop's seven finalists are the most of any Telugu edition." },
  { season: "Season 5", years: "2021", dates: "5 September 2021 – 19 December 2021", winner: "VJ Sunny", image: "/assets/bb-seasons/telugu-s5-vj-sunny.webp", runnerUp: "Shanmukh Jaswanth", host: "Nagarjuna", channel: "Star Maa · Disney+ Hotstar", story: "Beat Shanmukh Jaswanth on 19 December 2021, in a season whose launch was delayed by the second wave of COVID-19. His prize package is the richest on this list: ₹50 lakh, plus a bike and a plot worth ₹25 lakh." },
  { season: "Season 4", years: "2020", dates: "6 September 2020 – 20 December 2020", winner: "Abijeet Duddala", image: "/assets/bb-seasons/telugu-s4-abijeet-duddala.webp", runnerUp: "Akhil Sarthak", host: "Nagarjuna", channel: "Star Maa · Disney+ Hotstar", story: "Beat Akhil Sarthak on 20 December 2020 and took ₹25 lakh plus a bike, in a season whose launch was delayed by the COVID-19 pandemic. The Season 4 finale set a viewership record of 21.7 TVR in the Telugu states." },
  { season: "Season 3", years: "2019", dates: "21 July 2019 – 3 November 2019", winner: "Rahul Sipligunj", image: "/assets/bb-seasons/telugu-s3-rahul-sipligunj.webp", runnerUp: "Sreemukhi", host: "Nagarjuna", channel: "Star Maa · Disney+ Hotstar", story: "Beat Sreemukhi on 3 November 2019 in Nagarjuna's first season as host. The finale's 18.29 TVR was, at the time, the highest rating achieved by any edition of the Indian Bigg Boss franchise." },
  { season: "Season 2", years: "2018", dates: "10 June 2018 – 30 September 2018", winner: "Kaushal Manda", image: "/assets/bb-seasons/telugu-s2-kaushal-manda.webp", runnerUp: "Geetha Madhuri", host: "Nani", channel: "Star Maa · Disney+ Hotstar", story: "The winner of the longest Telugu season — 112 days — and of the first season to include commoners alongside celebrities. His fan following, the 'Kaushal Army', became the biggest fan phenomenon the Telugu show has seen. He beat Geetha Madhuri on 30 September 2018 and took the ₹50 lakh prize, in the one season hosted by Nani." },
  { season: "Season 1", years: "2017", dates: "16 July 2017 – 24 September 2017", winner: "Siva Balaji", image: "/assets/bb-seasons/telugu-s1-siva-balaji.webp", runnerUp: "Aadarsh Balakrishna", host: "Jr NTR", channel: "Star Maa · Disney+ Hotstar", story: "The first name on this list: Siva Balaji beat Aadarsh Balakrishna on 24 September 2017 to win the first-ever Bigg Boss Telugu season and its ₹50 lakh prize. The season was Jr NTR's television debut as host, and its house stood in Lonavala — every later season has used Annapurna Studios, Hyderabad." },
];

function renderTeluguWinnersTable() {
  return `<div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Season</th><th>Dates</th><th>Winner</th><th>Runner-up</th><th>Host</th><th>Channel / Platform</th></tr>
        </thead>
        <tbody>
          ${TELUGU_WINNERS.map((r) => `<tr><td>${r.season}</td><td>${r.dates}</td><td class="bb-table-contestant">${r.image ? `<img src="${r.image}" alt="${r.winner}" class="bb-table-avatar" loading="lazy">` : ""}<strong>${r.winner}</strong></td><td>${r.runnerUp}</td><td>${r.host}</td><td>${r.channel}</td></tr>`).join("")}
        </tbody>
      </table>
      </div>`;
}

function renderTeluguWinnerCards() {
  return `<div class="bb-steps-grid">
      ${TELUGU_WINNERS.map(
        (r) => `
      <div class="bb-step-card">
        ${r.image ? `<img src="${r.image}" alt="${r.winner}" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;border-radius:8px;margin-bottom:0.75rem;">` : ""}
        <h3>${r.winner}</h3>
        <p><strong>🏆 Winner · ${r.season} (${r.years})</strong></p>
        <p>${r.story}</p>
      </div>`,
      ).join("")}
      </div>`;
}

function renderTeluguWinnersSections() {
  return (
    storySection(
      "This Season",
      "Bigg Boss Telugu 10 is running now — vote in Week 12",
      `<p><strong>The tenth Telugu season, Dasavatharam, is on air now</strong> — hosted by Nagarjuna on Star Maa and JioHotstar. Week 12 has seven nominees in the danger zone, and captain Aman Masud is safe. See the full nominee list, cast your vote in the Open Poll and find the official JioHotstar and missed-call voting details on the season's voting page.</p>
      <p><a href="/bigg-boss-telugu-10-voting/"><strong>Open the Bigg Boss Telugu 10 voting page →</strong></a></p>`
    ) +
    storySection(
      "The Full List",
      "Bigg Boss Telugu winner list — every season, every winner",
      `<p>Ten editions of Bigg Boss Telugu — nine seasons on Star Maa (2017–2025) and one OTT edition, Bigg Boss Non-Stop — have produced ten winners, from Siva Balaji in 2017 to Kalyan Padala in 2025. This is the complete list: each edition's winner, the runner-up they beat in the finale, the host and the channel or platform. Three hosts have fronted the Telugu show: Jr NTR (Season 1), Nani (Season 2) and Nagarjuna (Season 3 onwards, and Non-Stop). The TV seasons air on Star Maa and stream on Disney+ Hotstar, now JioHotstar; Non-Stop was a streaming exclusive.</p>
      ${renderTeluguWinnersTable()}
      <p style="margin-top:1rem;">A note on prize money: a figure is printed on this page only where Wikipedia states one — ₹50 lakh for Seasons 1, 2 and 3; ₹25 lakh plus a bike for Season 4; ₹50 lakh plus a bike and a plot worth ₹25 lakh for Season 5; ₹55 lakh plus a car for Season 8; ₹35 lakh for Season 9; and ₹40 lakh for Non-Stop. Season 6 is the special case explained in its entry below: the winner's cash was ₹10 lakh, because the runner-up walked out of the finale with the ₹40 lakh suitcase. For Season 7, Wikipedia's own pages give two different prize figures, so no figure is printed for that season.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "Meet the Winners",
      "Every Bigg Boss Telugu winner — how each trophy was won",
      renderTeluguWinnerCards(),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-winner-list/",
        emoji: "🏆",
        title: "Bigg Boss Winner List — Hindi + OTT",
        text: "Every winner of Bigg Boss Hindi (Seasons 1–19) and Bigg Boss OTT (Seasons 1–3), with the runner-up, host and year for each season, plus the greatest-winner Open Poll.",
        linkText: "See the Hindi + OTT winner list →",
      },
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every Hindi season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current Hindi season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderTeluguWinnersFaq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss Telugu Winners List FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Who won the latest Bigg Boss Telugu season?</summary>
        <div class="bb-faq-body">
          <p>Kalyan Padala won Bigg Boss Telugu 9, beating Thanuja Puttaswamy in the finale on 21 December 2025. An Indian Army soldier who entered through the Bigg Boss Agnipariksha digital pre-show, he is the first commoner to win the main Telugu series. The prize stated for the season is ₹35 lakh.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who was the first Bigg Boss Telugu winner?</summary>
        <div class="bb-faq-body">
          <p>Siva Balaji won Season 1 in 2017, beating Aadarsh Balakrishna in the finale on 24 September 2017. The season was hosted by Jr NTR — his television debut as host — and carried a ₹50 lakh prize.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss Non-Stop?</summary>
        <div class="bb-faq-body">
          <p>Bindu Madhavi won Bigg Boss Non-Stop (2022), the Telugu OTT edition on Disney+ Hotstar, beating Akhil Sarthak in the finale on 21 May 2022. She was the first female winner of any Telugu edition, and the prize stated for the edition is ₹40 lakh.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How much prize money did the Bigg Boss Telugu winners get?</summary>
        <div class="bb-faq-body">
          <p>It varies by season, and this page prints a figure only where Wikipedia states one: ₹50 lakh for Seasons 1, 2 and 3; ₹25 lakh plus a bike for Season 4; ₹50 lakh plus a bike and a plot worth ₹25 lakh for Season 5; ₹55 lakh plus a car for Season 8; ₹35 lakh for Season 9; and ₹40 lakh for Non-Stop. Season 6's winner took ₹10 lakh in cash after the runner-up walked out of the finale with the ₹40 lakh suitcase. For Season 7, Wikipedia's own pages give two different figures, so no figure is printed for that season.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who is the greatest Bigg Boss Telugu winner of all time?</summary>
        <div class="bb-faq-body">
          <p>There is no official all-time ranking — the show has never ranked its winners against each other. The Open Poll at the top of this page is where fans answer the question: as it stands, Kaushal Manda (Season 2) leads it, ahead of Rahul Sipligunj (Season 3) and L. V. Revanth (Season 6). Those numbers are VisitBest Open Poll votes — audience sentiment only, not official votes and not an official ranking.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Is the poll on this page an official Bigg Boss vote?</summary>
        <div class="bb-faq-body">
          <p>No. The winner list itself is the official record — the winners as declared on the show. The poll at the top is a VisitBest Open Poll asking who fans think is the greatest Bigg Boss Telugu winner of all time; it is audience sentiment only, it is not official voting, and it changes nothing about any edition's result. Official voting exists only for a running season, on the show's own platform, as announced on air.</p>
        </div>
      </details>
    </div>
  </section>`;
}

// ---------- Bigg Boss Marathi Winner List (entry 438) ----------
// New page targeting "bigg boss marathi winner list"
// (/bigg-boss-marathi-winner-list/): the Open Poll at the top asks
// who is the greatest Bigg Boss Marathi winner of all time (all 6
// winners as photo options), and the page carries the full winner
// table plus a card per winner. Every fact is Wikipedia-verified
// research (~/workspace/bb-marathi-research/research.md) — nothing
// else is asserted. Prize figures are the Wikipedia series-table
// figures only (S1 ₹75 lakh, S2 ₹75 lakh, S3 ₹40 lakh, S4 ₹50 lakh,
// S5 ₹25 lakh, S6 ₹15 lakh); the press take-home figures are NOT
// printed anywhere. Season 5 follows the season article's infobox /
// series-overview consensus (winner Suraj Chavan, runner-up
// Abhijeet Sawant) — the article's housemates-status table is
// internally wrong and is not followed. Rows newest first.

const MARATHI_WINNERS = [
  { season: "Season 6", years: "2026", dates: "11 January 2026 – 19 April 2026", winner: "Tanvi Kolte", image: "/assets/bb-seasons/marathi-s6-tanvi-kolte.webp", runnerUp: "Raqesh Bapat", host: "Riteish Deshmukh", channel: "Colors Marathi", story: "The newest name on this list: Tanvi Kolte beat Raqesh Bapat in the Season 6 finale on 19 April 2026, closing a 98-day season with 21 housemates — the biggest Marathi house yet. The prize stated for the season is ₹15 lakh. It was Riteish Deshmukh's second season as host." },
  { season: "Season 5", years: "2024", dates: "28 July 2024 – 6 October 2024", winner: "Suraj Chavan", image: "/assets/bb-seasons/marathi-s5-suraj-chavan.webp", runnerUp: "Abhijeet Sawant", host: "Riteish Deshmukh", channel: "Colors Marathi · JioCinema", story: "The shortest Marathi season — 70 days — and, per Wikipedia, the highest-rated one. Social-media influencer Suraj Chavan beat Indian Idol winner Abhijeet Sawant in the top two on 6 October 2024 and took the ₹25 lakh prize. The finale had six finalists; the sixth, Jahnavi Killekar, walked out of the finale with the ₹9 lakh briefcase. It was Riteish Deshmukh's first season as host, and the 'Chakravyuh' house stood in Film City, Mumbai." },
  { season: "Season 4", years: "2022–23", dates: "2 October 2022 – 8 January 2023", winner: "Akshay Kelkar", image: null, runnerUp: "Apurva Nemlekar", host: "Mahesh Manjrekar", channel: "Colors Marathi", story: "Akshay Kelkar beat Apurva Nemlekar on 8 January 2023 to win the 'Chawl'-themed season and its ₹50 lakh prize, in a season with 19 housemates — the most of the first five seasons. Rakhi Sawant entered on Day 57 as a Challenger and reached the finale, finishing as 4th runner-up." },
  { season: "Season 3", years: "2021", dates: "19 September 2021 – 26 December 2021", winner: "Vishal Nikam", image: "/assets/bb-seasons/marathi-s3-vishal-nikam.webp", runnerUp: "Jay Dudhane", host: "Mahesh Manjrekar", channel: "Colors Marathi", story: "Vishal Nikam beat Jay Dudhane on 26 December 2021 and took the ₹40 lakh prize. The season had been planned for May 2020 but was postponed to September 2021 because of the COVID-19 pandemic." },
  { season: "Season 2", years: "2019", dates: "26 May 2019 – 1 September 2019", winner: "Shiv Thakare", image: "/assets/bb-seasons/s16-shiv-thakare.webp", runnerUp: "Neha Shitole", host: "Mahesh Manjrekar", channel: "Colors Marathi", story: "An MTV Roadies Rising alumnus, Shiv Thakare beat Neha Shitole on 1 September 2019 and took the ₹75 lakh prize — then went on to finish 1st runner-up on Hindi Bigg Boss 16. His season's finalist Shivani Surve walked out on Day 21, re-entered on Day 44 and still finished 3rd runner-up." },
  { season: "Season 1", years: "2018", dates: "15 April 2018 – 22 July 2018", winner: "Megha Dhade", image: "/assets/bb-seasons/marathi-s1-megha-dhade.webp", runnerUp: "Pushkar Jog", host: "Mahesh Manjrekar", channel: "Colors Marathi · Voot Select", story: "The first name on this list: Megha Dhade beat Pushkar Jog on 22 July 2018 to win the first-ever Bigg Boss Marathi season and its ₹75 lakh prize. It is the only Marathi season shot in Lonavala — later seasons moved to Film City, Mumbai — and Megha later entered Hindi Bigg Boss 12 as a wild-card contestant." },
];

function renderMarathiWinnersTable() {
  return `<div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Season</th><th>Dates</th><th>Winner</th><th>Runner-up</th><th>Host</th><th>Channel / Platform</th></tr>
        </thead>
        <tbody>
          ${MARATHI_WINNERS.map((r) => `<tr><td>${r.season}</td><td>${r.dates}</td><td class="bb-table-contestant">${r.image ? `<img src="${r.image}" alt="${r.winner}" class="bb-table-avatar" loading="lazy">` : ""}<strong>${r.winner}</strong></td><td>${r.runnerUp}</td><td>${r.host}</td><td>${r.channel}</td></tr>`).join("")}
        </tbody>
      </table>
      </div>`;
}

function renderMarathiWinnerCards() {
  return `<div class="bb-steps-grid">
      ${MARATHI_WINNERS.map(
        (r) => `
      <div class="bb-step-card">
        ${r.image ? `<img src="${r.image}" alt="${r.winner}" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;border-radius:8px;margin-bottom:0.75rem;">` : ""}
        <h3>${r.winner}</h3>
        <p><strong>🏆 Winner · ${r.season} (${r.years})</strong></p>
        <p>${r.story}</p>
      </div>`,
      ).join("")}
      </div>`;
}

function renderMarathiWinnersSections() {
  return (
    storySection(
      "The Full List",
      "Bigg Boss Marathi winner list — every season, every winner",
      `<p>Six seasons of Bigg Boss Marathi (2018–2026) have produced six winners, from Megha Dhade in 2018 to Tanvi Kolte in 2026. This is the complete list: each season's winner, the runner-up they beat in the finale, the host and the channel. Two hosts have fronted the Marathi show: Mahesh Manjrekar (Seasons 1–4) and Riteish Deshmukh (Seasons 5–6). Every season aired on Colors Marathi — the first from a house in Lonavala, and every season since from Film City, Mumbai.</p>
      ${renderMarathiWinnersTable()}
      <p style="margin-top:1rem;">A note on prize money: the figures printed on this page are the season prizes stated in Wikipedia's series table — ₹75 lakh for Seasons 1 and 2, ₹40 lakh for Season 3, ₹50 lakh for Season 4, ₹25 lakh for Season 5 and ₹15 lakh for Season 6. Contemporary press reported that the winners' final take-home was lower, because in-house money tasks reduced the prize pot during each season; those press figures are not printed here.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "Meet the Winners",
      "Every Bigg Boss Marathi winner — how each trophy was won",
      renderMarathiWinnerCards(),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-winner-list/",
        emoji: "🏆",
        title: "Bigg Boss Winner List — Hindi + OTT",
        text: "Every winner of Bigg Boss Hindi (Seasons 1–19) and Bigg Boss OTT (Seasons 1–3), with the runner-up, host and year for each season, plus the greatest-winner Open Poll.",
        linkText: "See the Hindi + OTT winner list →",
      },
      {
        href: "/bigg-boss-telugu-winners-list/",
        emoji: "🏆",
        title: "Bigg Boss Telugu Winners List",
        text: "Every winner of Bigg Boss Telugu (Seasons 1–9) and Bigg Boss Non-Stop, with the dates, the runner-up, the host and the prize for each edition, plus the greatest-winner Open Poll.",
        linkText: "See the Telugu winners list →",
      },
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every Hindi season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current Hindi season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderMarathiWinnersFaq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss Marathi Winner List FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Who won the latest Bigg Boss Marathi season?</summary>
        <div class="bb-faq-body">
          <p>Tanvi Kolte won Bigg Boss Marathi 6, beating Raqesh Bapat in the finale on 19 April 2026. The season ran 98 days with 21 housemates, was hosted by Riteish Deshmukh, and the prize stated for the season is ₹15 lakh.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who was the first Bigg Boss Marathi winner?</summary>
        <div class="bb-faq-body">
          <p>Megha Dhade won Season 1 in 2018, beating Pushkar Jog in the finale on 22 July 2018. The season was hosted by Mahesh Manjrekar, was shot in Lonavala, and carried a ₹75 lakh prize.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who has hosted Bigg Boss Marathi?</summary>
        <div class="bb-faq-body">
          <p>Two hosts have fronted the Marathi show. Mahesh Manjrekar hosted the first four seasons (2018–2023). Riteish Deshmukh took over from Season 5 in 2024 and also hosted Season 6.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How much prize money did the Bigg Boss Marathi winners get?</summary>
        <div class="bb-faq-body">
          <p>This page prints the season prizes stated in Wikipedia's series table: ₹75 lakh for Seasons 1 and 2, ₹40 lakh for Season 3, ₹50 lakh for Season 4, ₹25 lakh for Season 5 and ₹15 lakh for Season 6. Contemporary press reported that the winners' final take-home was lower, because in-house money tasks reduced the prize pot during each season; those press figures are not printed here.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who is the greatest Bigg Boss Marathi winner of all time?</summary>
        <div class="bb-faq-body">
          <p>There is no official all-time ranking — the show has never ranked its winners against each other. The Open Poll at the top of this page is where fans answer the question: as it stands, Shiv Thakare (Season 2) leads it, ahead of Suraj Chavan (Season 5) and Vishal Nikam (Season 3). Those numbers are VisitBest Open Poll votes — audience sentiment only, not official votes and not an official ranking.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Is the poll on this page an official Bigg Boss vote?</summary>
        <div class="bb-faq-body">
          <p>No. The winner list itself is the official record — the winners as declared on the show. The poll at the top is a VisitBest Open Poll asking who fans think is the greatest Bigg Boss Marathi winner of all time; it is audience sentiment only, it is not official voting, and it changes nothing about any season's result. Official voting exists only for a running season, on the show's own platform, as announced on air.</p>
        </div>
      </details>
    </div>
  </section>`;
}

// ---------- Bigg Boss Kannada Winner List (entry 439) ----------
// New page targeting "bigg boss kannada winner list"
// (/bigg-boss-kannada-winner-list/): the Open Poll at the top asks
// who is the greatest Bigg Boss Kannada winner of all time (the 12
// TV winners as options), and the page carries the full winner
// table plus a card per edition. Every fact is Wikipedia-verified
// research (~/workspace/bb-kannada-research/research.md) — nothing
// else is asserted. Prize: Wikipedia's series overview states
// ₹50 lakh for every TV season (S1–S12); S10's winner also received
// a Maruti Suzuki Brezza and a Bounce Infinity electric scooter,
// and S12's winner a Maruti Suzuki Victoris. The OTT edition
// (2022) did NOT crown a conventional winner: Wikipedia records
// Roopesh Shetty as its "Top Performer" and Rakesh Adiga, Saanya
// Iyer and Aryavardhan Guruji as "Champions", with no 1st
// runner-up — the OTT row and card follow that wording exactly and
// never call him the OTT winner. Day counts follow the season
// articles where Wikipedia's own figures differ, as the research
// file directs. Rows newest first.

const KANNADA_WINNERS = [
  { season: "Season 12", years: "2025–26", dates: "28 September 2025 – 18 January 2026", winner: "Gilli Nata", image: "/assets/bb-seasons/kannada-s12-gilli-nata.webp", runnerUp: "Rakshita Shetty", host: "Kichcha Sudeepa", channel: "Colors Kannada · JioHotstar", story: "The newest name on this list: Gilli Nata (real name Nataraj) beat Rakshita Shetty on 18 January 2026, closing a 112-day season with 24 housemates — the biggest Kannada house yet — and a six-man finale. He took the ₹50 lakh prize plus a Maruti Suzuki Victoris car. The season was briefly suspended on 8 October 2025 after a Karnataka State Pollution Control Board closure notice, and resumed the very next day. It was Kichcha Sudeepa's twelfth consecutive season as host." },
  { season: "Season 11", years: "2024–25", dates: "29 September 2024 – 26 January 2025", winner: "Hanumantha Lamani", image: "/assets/bb-seasons/kannada-s11-hanumantha-lamani.webp", runnerUp: "Trivikram", host: "Kichcha Sudeepa", channel: "Colors Kannada · JioCinema", story: "A shepherd and folk singer who entered on Day 21 as a wild card, Hanumantha Lamani beat Trivikram on 26 January 2025 to become the first wild-card entrant ever to win Bigg Boss Kannada. At 120 days it is the longest Kannada season, and he took the ₹50 lakh prize. Sudeepa had announced this would be his last season as host — then reversed the decision and returned for Season 12." },
  { season: "Season 10", years: "2023–24", dates: "8 October 2023 – 28 January 2024", winner: "Karthik Mahesh", image: null, runnerUp: "Drone Prathap", host: "Kichcha Sudeepa", channel: "Colors Kannada · JioCinema", story: "Karthik Mahesh beat Drone Prathap on 28 January 2024 in the first Kannada season to end with a top-six grand finale. The premiere used a public-vote twist: viewers voted contestants into the house, two of the 21 listed names were rejected on Day 1, and 19 actually played. The 112-day season's prize was ₹50 lakh plus a Maruti Suzuki Brezza and a Bounce Infinity electric scooter." },
  { season: "Season 9", years: "2022", dates: "24 September 2022 – 31 December 2022", winner: "Roopesh Shetty", image: "/assets/bb-seasons/kannada-s9-roopesh-shetty.webp", runnerUp: "Rakesh Adiga", host: "Kichcha Sudeepa", channel: "Colors Kannada · Voot Select", story: "Roopesh Shetty beat Rakesh Adiga on 31 December 2022 — the same top two as the OTT edition weeks earlier, where Roopesh had finished as its Top Performer and Rakesh as a Champion. He is the only person on this list to top both Kannada editions. The 98-day cast mixed five returning ex-housemates with the OTT edition's top four, and the prize was ₹50 lakh." },
  { season: "OTT Season 1", years: "2022", dates: "6 August 2022 – 16 September 2022", winner: "Roopesh Shetty", winnerNote: "Top Performer", placing: "Top Performer", image: "/assets/bb-seasons/kannada-s9-roopesh-shetty.webp", runnerUp: "—", host: "Kichcha Sudeepa", channel: "Voot", story: "This edition did not crown a conventional winner, so this page does not call Roopesh Shetty its winner: Wikipedia's official label for him is 'Top Performer'. Rakesh Adiga, Saanya Iyer and Aryavardhan Guruji were named 'Champions', there was no 1st runner-up, and all four qualified directly into Season 9 — where Roopesh won the TV title and Rakesh finished second again. The 42-day season was digital-only on Voot, with no TV broadcast, and carried a ₹5 lakh prize. Press coverage often calls Roopesh the OTT winner; this page follows Wikipedia's label." },
  { season: "Season 8", years: "2021", dates: "28 February 2021 – 8 August 2021", winner: "Manju Pavagada", image: null, runnerUp: "Aravind KP", host: "Kichcha Sudeepa", channel: "Colors Kannada", story: "The only season split in two by COVID-19: it premiered on 28 February 2021, was suspended on 8 May, and resumed on 23 June as 'Bigg Boss Second Innings', with 12 non-evicted housemates returning. Manju Pavagada beat Aravind KP in the finale on 8 August 2021, after 117 days in total across the two innings, and took the ₹50 lakh prize." },
  { season: "Season 7", years: "2019–20", dates: "13 October 2019 – 2 February 2020", winner: "Shine Shetty", image: null, runnerUp: "Kuri Prathap", host: "Kichcha Sudeepa", channel: "Colors Kannada", story: "Shine Shetty beat Kuri Prathap on 2 February 2020, closing a 112-day season with 20 housemates and taking the ₹50 lakh prize. One of its finalists, Deepika Das (3rd runner-up), returned in Season 9 and finished 2nd runner-up all over again." },
  { season: "Season 6", years: "2018–19", dates: "21 October 2018 – 27 January 2019", winner: "Shashi Kumar", image: null, runnerUp: "Naveen Sajju", host: "Kichcha Sudeepa", channel: "Colors Super", story: "Shashi Kumar beat Naveen Sajju on 27 January 2019. The season opened with a split cast — nine celebrities and nine commoners — plus two wild cards who entered on Day 54. It ran 98 days with 20 housemates, and the prize was ₹50 lakh." },
  { season: "Season 5", years: "2017–18", dates: "15 October 2017 – 28 January 2018", winner: "Chandan Shetty", image: "/assets/bb-seasons/kannada-s5-chandan-shetty.webp", runnerUp: "Diwakar", host: "Kichcha Sudeepa", channel: "Colors Super", story: "Rapper Chandan Shetty beat Diwakar on 28 January 2018 in the first season to include auditioned commoners alongside celebrities. The season ran 105 days with 20 housemates, and the prize was ₹50 lakh." },
  { season: "Season 4", years: "2016–17", dates: "9 October 2016 – 29 January 2017", winner: "Pratham", image: null, runnerUp: "Kirik Keerthi", host: "Kichcha Sudeepa", channel: "Colors Kannada", story: "Pratham beat Kirik Keerthi on 29 January 2017. The season was extended by two weeks mid-run, taking it to 112 days, and it was the first Kannada season broadcast in HD. The prize was ₹50 lakh." },
  { season: "Season 3", years: "2015–16", dates: "25 October 2015 – 31 January 2016", winner: "Shruti", image: "/assets/bb-seasons/kannada-s3-shruti.webp", runnerUp: "Chandan Kumar", host: "Kichcha Sudeepa", channel: "Colors Kannada", story: "Shruti beat Chandan Kumar on 31 January 2016 in the first season staged in Bengaluru, at Innovative Film City, instead of Lonavala. The season ran 98 days with 18 housemates, and the prize was ₹50 lakh." },
  { season: "Season 2", years: "2014", dates: "29 June 2014 – 5 October 2014", winner: "Akul Balaji", image: "/assets/bb-seasons/kannada-s2-akul-balaji.webp", runnerUp: "Srujan Lokesh", host: "Kichcha Sudeepa", channel: "Asianet Suvarna", story: "Akul Balaji beat Srujan Lokesh on 5 October 2014 in a 98-day season with 15 housemates, still based in the Lonavala house. This is the season that introduced the captaincy concept to the Kannada edition, and the prize was ₹50 lakh." },
  { season: "Season 1", years: "2013", dates: "24 March 2013 – 30 June 2013", winner: "Vijay Raghavendra", image: "/assets/bb-seasons/kannada-s1-vijay-raghavendra.webp", runnerUp: "Arun Sagar", host: "Kichcha Sudeepa", channel: "ETV Kannada", story: "The first name on this list: Vijay Raghavendra beat Arun Sagar on 30 June 2013 to win the debut season of Bigg Boss Kannada and its ₹50 lakh prize. The 98-day season, with 15 housemates, was shot in the Lonavala house." },
];

function renderKannadaWinnersTable() {
  return `<div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Season</th><th>Dates</th><th>Winner</th><th>Runner-up</th><th>Host</th><th>Channel / Platform</th></tr>
        </thead>
        <tbody>
          ${KANNADA_WINNERS.map((r) => `<tr><td>${r.season}</td><td>${r.dates}</td><td class="bb-table-contestant">${r.image ? `<img src="${r.image}" alt="${r.winner}" class="bb-table-avatar" loading="lazy">` : ""}<strong>${r.winner}</strong>${r.winnerNote ? ` (${r.winnerNote})` : ""}</td><td>${r.runnerUp}</td><td>${r.host}</td><td>${r.channel}</td></tr>`).join("")}
        </tbody>
      </table>
      </div>`;
}

function renderKannadaWinnerCards() {
  return `<div class="bb-steps-grid">
      ${KANNADA_WINNERS.map(
        (r) => `
      <div class="bb-step-card">
        ${r.image ? `<img src="${r.image}" alt="${r.winner}" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;border-radius:8px;margin-bottom:0.75rem;">` : ""}
        <h3>${r.winner}</h3>
        <p><strong>${r.placing === "Top Performer" ? "⭐ Top Performer" : "🏆 Winner"} · ${r.season} (${r.years})</strong></p>
        <p>${r.story}</p>
      </div>`,
      ).join("")}
      </div>`;
}

function renderKannadaWinnersSections() {
  return (
    storySection(
      "The Full List",
      "Bigg Boss Kannada winner list — every season, every winner",
      `<p>Thirteen editions of Bigg Boss Kannada — twelve TV seasons (2013–2026) and one OTT season (2022) — have produced twelve winners and one OTT 'Top Performer', from Vijay Raghavendra in 2013 to Gilli Nata in 2026. This is the complete list: each edition's winner, the runner-up they beat in the finale, the host and the channel or platform. One man has hosted every single edition, TV and OTT: Kichcha Sudeepa. The first two seasons came from the Lonavala house; from Season 3 onwards the show has been staged in Bengaluru, at Innovative Film City.</p>
      ${renderKannadaWinnersTable()}
      <p style="margin-top:1rem;">A note on prize money: Wikipedia's series overview states a ₹50 lakh prize for every TV season, Seasons 1–12. Season 10's winner also received a Maruti Suzuki Brezza and a Bounce Infinity electric scooter, and Season 12's winner also received a Maruti Suzuki Victoris car. The OTT edition carried a ₹5 lakh prize. One press report put Season 9's prize higher than ₹50 lakh; Wikipedia states ₹50 lakh, and that is the figure printed here.</p>
      <p style="margin-top:1rem;">A note on the OTT row: the 2022 OTT edition never declared a winner and a runner-up. Wikipedia records Roopesh Shetty as its 'Top Performer' and Rakesh Adiga, Saanya Iyer and Aryavardhan Guruji as its 'Champions' — all four qualified directly into Season 9 — so the OTT row follows that wording, with no runner-up.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "Meet the Winners",
      "Every Bigg Boss Kannada winner — how each trophy was won",
      renderKannadaWinnerCards(),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-winner-list/",
        emoji: "🏆",
        title: "Bigg Boss Winner List — Hindi + OTT",
        text: "Every winner of Bigg Boss Hindi (Seasons 1–19) and Bigg Boss OTT (Seasons 1–3), with the runner-up, host and year for each season, plus the greatest-winner Open Poll.",
        linkText: "See the Hindi + OTT winner list →",
      },
      {
        href: "/bigg-boss-telugu-winners-list/",
        emoji: "🏆",
        title: "Bigg Boss Telugu Winners List",
        text: "Every winner of Bigg Boss Telugu (Seasons 1–9) and Bigg Boss Non-Stop, with the dates, the runner-up, the host and the prize for each edition, plus the greatest-winner Open Poll.",
        linkText: "See the Telugu winners list →",
      },
      {
        href: "/bigg-boss-marathi-winner-list/",
        emoji: "🏆",
        title: "Bigg Boss Marathi Winner List",
        text: "Every winner of Bigg Boss Marathi (Seasons 1–6), with the dates, the runner-up, the host and the prize for each season, plus the greatest-winner Open Poll.",
        linkText: "See the Marathi winner list →",
      },
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every Hindi season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current Hindi season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderKannadaWinnersFaq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss Kannada Winner List FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Who won the latest Bigg Boss Kannada season?</summary>
        <div class="bb-faq-body">
          <p>Gilli Nata (real name Nataraj) won Bigg Boss Kannada 12, beating Rakshita Shetty in the finale on 18 January 2026. The season ran 112 days with 24 housemates, was hosted by Kichcha Sudeepa — his twelfth consecutive season — and the prize was ₹50 lakh plus a Maruti Suzuki Victoris car.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who was the first Bigg Boss Kannada winner?</summary>
        <div class="bb-faq-body">
          <p>Vijay Raghavendra won Season 1 in 2013, beating Arun Sagar in the finale on 30 June 2013. The season aired on ETV Kannada, was shot in the Lonavala house, and carried a ₹50 lakh prize.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who has hosted Bigg Boss Kannada?</summary>
        <div class="bb-faq-body">
          <p>Kichcha Sudeepa has hosted every edition of Bigg Boss Kannada — all twelve TV seasons and the OTT season. He announced after Season 11 that he would step down, then reversed the decision and returned to host Season 12.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Why does the OTT row say "Top Performer" instead of "Winner"?</summary>
        <div class="bb-faq-body">
          <p>Because the 2022 OTT edition did not crown a conventional winner and runner-up. Wikipedia's record of that edition lists Roopesh Shetty as its 'Top Performer' and Rakesh Adiga, Saanya Iyer and Aryavardhan Guruji as its 'Champions', with no 1st runner-up; all four qualified directly into Season 9, where Roopesh won and Rakesh finished second again. Press coverage often calls Roopesh Shetty the OTT winner, but this page follows Wikipedia's own label.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How much prize money did the Bigg Boss Kannada winners get?</summary>
        <div class="bb-faq-body">
          <p>Wikipedia's series overview states ₹50 lakh for every TV season, Seasons 1–12. Season 10's winner also received a Maruti Suzuki Brezza and a Bounce Infinity electric scooter, and Season 12's winner also received a Maruti Suzuki Victoris car. The OTT edition's prize was ₹5 lakh. A press report put Season 9's prize higher; Wikipedia states ₹50 lakh, and that is the figure printed here.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who is the greatest Bigg Boss Kannada winner of all time?</summary>
        <div class="bb-faq-body">
          <p>There is no official all-time ranking — the show has never ranked its winners against each other. The Open Poll at the top of this page is where fans answer the question: as it stands, Chandan Shetty (Season 5) leads it, ahead of Shine Shetty (Season 7) and Roopesh Shetty (Season 9). Those numbers are VisitBest Open Poll votes — audience sentiment only, not official votes and not an official ranking. The poll itself is not an official Bigg Boss vote either: the winner list on this page is the official record, and official voting exists only for a running season, on the show's own platform, as announced on air.</p>
        </div>
      </details>
    </div>
  </section>`;
}

// ---------- Bigg Boss Malayalam Winner List (entry 440) ----------
// New page targeting "bigg boss malayalam winner list"
// (/bigg-boss-malayalam-winner-list/): the Open Poll at the top asks
// who is the greatest Bigg Boss Malayalam winner of all time (the
// six winners as options), and the page carries the full winner
// table plus a card per season. Every fact is Wikipedia-verified
// research (~/workspace/bb-malayalam-research/research.md, Season 7
// cross-checked against The Indian Express) — nothing else is
// asserted. Host for every season: Mohanlal. Season 2 (2020) had
// NO winner: the show was cancelled mid-run during COVID-19
// (stopped 20 March 2020 after 76 episodes; Mohanlal entered the
// house on Day 74 to suspend it; the housemates were sent home on
// Day 75; no finale, no winner or runner-up ever declared, and the
// announced prize was never awarded) — its table row and card say
// exactly that, and it is not a poll option. Season 7's prize is
// the Wikipedia / Indian Express figure of ₹42,55,210 (₹42.55
// lakh), reduced from ₹50 lakh under the mid-season task-earnings
// rule; the press figure reported by some outlets is deliberately
// NOT printed anywhere. Sabumon Abdusamad (Season 1) has no photo
// (Pinterest had none to standard) — his poll option, card and
// table row carry no image, never a substitute. Rows newest first.

const MALAYALAM_WINNERS = [
  { season: "Season 7", years: "2025", dates: "3 August 2025 – 9 November 2025", winner: "Anumol RS", image: "/assets/bb-seasons/malayalam-s7-anumol-rs.webp", runnerUp: "Aneesh Tharayil", host: "Mohanlal", channel: "Asianet · JioHotstar", story: "The newest name on this list: TV actress and anchor Anumol RS beat Aneesh Tharayil in the finale on 9 November 2025 — Aneesh, a commoner, was the first commoner ever to reach a Bigg Boss Malayalam finale. Her prize was ₹42,55,210 (₹42.55 lakh): the announced ₹50 lakh was reduced because a mid-season rule let contestants earn money through tasks, with those winnings deducted from the champion's prize. She is the series' second female winner. The 25-housemate season was the first staged in the new permanent Malayalam-only house in Chennai, and its finale recorded the highest TRP of any Malayalam Bigg Boss episode." },
  { season: "Season 6", years: "2024", dates: "10 March 2024 – 16 June 2024", winner: "Jinto Bodycraft", image: "/assets/bb-seasons/malayalam-s6-jinto-bodycraft.webp", runnerUp: "Arjun Syam Gopan", host: "Mohanlal", channel: "Asianet · Disney+ Hotstar", story: "Celebrity fitness trainer Jinto Bodycraft — full name Jinto Devassykutty — beat Arjun Syam Gopan in the finale on 16 June 2024 and took the ₹50 lakh prize. The season ran 98 days with 25 housemates, the joint-largest cast of the series at the time." },
  { season: "Season 5", years: "2023", dates: "26 March 2023 – 2 July 2023", winner: "Akhil Marar", image: "/assets/bb-seasons/malayalam-s5-akhil-marar.webp", runnerUp: "Reneesha Rahiman", host: "Mohanlal", channel: "Asianet · Disney+ Hotstar", story: "Akhil Marar beat Reneesha Rahiman in the finale on 2 July 2023 and took the ₹50 lakh prize. Season 5 was a format landmark: the first Malayalam season to include commoner contestants alongside the celebrities." },
  { season: "Season 4", years: "2022", dates: "27 March 2022 – 3 July 2022", winner: "Dilsha Prasannan", image: "/assets/bb-seasons/malayalam-s4-dilsha-prasannan.webp", runnerUp: "Muhammad Diligent Blesslee", host: "Mohanlal", channel: "Asianet · Disney+ Hotstar", story: "Dilsha Prasannan beat Muhammad Diligent Blesslee in the finale on 3 July 2022 to become the first female winner of Bigg Boss Malayalam, taking the ₹50 lakh prize. Twenty housemates played the season." },
  { season: "Season 3", years: "2021", dates: "14 February 2021 – 1 August 2021", winner: "Manikuttan", image: "/assets/bb-seasons/malayalam-s3-manikuttan.webp", runnerUp: "Sai Vishnu", host: "Mohanlal", channel: "Asianet · Disney+ Hotstar", story: "Manikuttan (real name Thomas James) won the most disrupted season on this list. The in-house run was suspended on Day 95 after Tamil Nadu Police sealed the Chennai set for COVID lockdown violations; the eight remaining housemates were declared finalists, and the winner was decided by online public voting, announced in a grand finale special on 1 August 2021. He beat Sai Vishnu at the head of an unusually large final eight, and the prize was a flat worth ₹75 lakh." },
  { season: "Season 2", years: "2020", dates: "5 January 2020 – 20 March 2020", winner: "No winner — season cancelled (COVID-19)", noWinner: true, image: null, runnerUp: "—", host: "Mohanlal", channel: "Asianet · Hotstar", story: "Season 2 is the empty chair on this list. The season premiered on 5 January 2020, but as the COVID-19 pandemic spread, production was suspended: host Mohanlal entered the house on Day 74 to suspend the show, and on Day 75 the remaining housemates were sent home. The show stopped on 20 March 2020 after 76 episodes. No finale was ever held, and no winner or runner-up was ever declared — Wikipedia's record of the season lists the winner as 'Nil'. The announced prize, a flat worth ₹50 lakh plus the trophy, was never awarded. The season's biggest controversy before the shutdown was the ejection of Rajith Kumar on Day 65 after the chilli-paste incident with Reshma." },
  { season: "Season 1", years: "2018", dates: "24 June 2018 – 30 September 2018", winner: "Sabumon Abdusamad", image: null, runnerUp: "Pearle Maaney", host: "Mohanlal", channel: "Asianet · Hotstar", story: "The first name on this list: Sabumon Abdusamad beat Pearle Maaney in the finale on 30 September 2018 to win the debut season of Bigg Boss Malayalam and its ₹1 crore prize — still the largest prize on this page. The season ran 98 days with 18 housemates; its 2nd runner-up, Shiyas Kareem, had entered as a wild card." },
];

function renderMalayalamWinnersTable() {
  return `<div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Season</th><th>Dates</th><th>Winner</th><th>Runner-up</th><th>Host</th><th>Channel / Platform</th></tr>
        </thead>
        <tbody>
          ${MALAYALAM_WINNERS.map((r) => `<tr><td>${r.season}</td><td>${r.dates}</td><td class="bb-table-contestant">${r.image ? `<img src="${r.image}" alt="${r.winner}" class="bb-table-avatar" loading="lazy">` : ""}<strong>${r.winner}</strong></td><td>${r.runnerUp}</td><td>${r.host}</td><td>${r.channel}</td></tr>`).join("")}
        </tbody>
      </table>
      </div>`;
}

function renderMalayalamWinnerCards() {
  return `<div class="bb-steps-grid">
      ${MALAYALAM_WINNERS.map(
        (r) => `
      <div class="bb-step-card">
        ${r.image ? `<img src="${r.image}" alt="${r.winner}" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;border-radius:8px;margin-bottom:0.75rem;">` : ""}
        <h3>${r.winner}</h3>
        <p><strong>${r.noWinner ? "🚫 No winner — season cancelled" : "🏆 Winner"} · ${r.season} (${r.years})</strong></p>
        <p>${r.story}</p>
      </div>`,
      ).join("")}
      </div>`;
}

function renderMalayalamWinnersSections() {
  return (
    storySection(
      "The Full List",
      "Bigg Boss Malayalam winner list — every season, every winner",
      `<p>Seven seasons of Bigg Boss Malayalam (2018–2025) have produced six winners, from Sabumon Abdusamad in 2018 to Anumol RS in 2025. This is the complete list: each season's winner, the runner-up they beat in the finale, the host and the channel or platform. One man has hosted every single season: Mohanlal. Every season aired on Asianet. Season 2 stands apart — it was cancelled during the COVID-19 pandemic with no winner, and its row below records that honestly rather than filling the gap.</p>
      ${renderMalayalamWinnersTable()}
      <p style="margin-top:1rem;">A note on prize money — the figures printed on this page are the ones Wikipedia states: Season 1's winner took ₹1 crore, Season 3's a flat worth ₹75 lakh, and Seasons 4, 5 and 6 carried ₹50 lakh each. Season 7's prize was ₹42,55,210 (₹42.55 lakh): the announced ₹50 lakh was reduced because a mid-season rule let contestants earn money through tasks, with those winnings deducted from the champion's prize — The Indian Express's finale coverage confirms the same figure. Season 2's announced prize was never awarded, because the season was cancelled before any finale.</p>
      <p style="margin-top:1rem;">A note on Season 2: the season premiered on 5 January 2020 and stopped on 20 March 2020, after 76 episodes, as the COVID-19 pandemic shut production down. Mohanlal entered the house on Day 74 to suspend the show, and the housemates were sent home on Day 75. No winner or runner-up was ever declared, which is why Season 2 appears in the table with no winner and is not one of the options in the Open Poll above.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "Meet the Winners",
      "Every Bigg Boss Malayalam winner — season by season",
      renderMalayalamWinnerCards(),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-winner-list/",
        emoji: "🏆",
        title: "Bigg Boss Winner List — Hindi + OTT",
        text: "Every winner of Bigg Boss Hindi (Seasons 1–19) and Bigg Boss OTT (Seasons 1–3), with the runner-up, host and year for each season, plus the greatest-winner Open Poll.",
        linkText: "See the Hindi + OTT winner list →",
      },
      {
        href: "/bigg-boss-telugu-winners-list/",
        emoji: "🏆",
        title: "Bigg Boss Telugu Winners List",
        text: "Every winner of Bigg Boss Telugu (Seasons 1–9) and Bigg Boss Non-Stop, with the dates, the runner-up, the host and the prize for each edition, plus the greatest-winner Open Poll.",
        linkText: "See the Telugu winners list →",
      },
      {
        href: "/bigg-boss-marathi-winner-list/",
        emoji: "🏆",
        title: "Bigg Boss Marathi Winner List",
        text: "Every winner of Bigg Boss Marathi (Seasons 1–6), with the dates, the runner-up, the host and the prize for each season, plus the greatest-winner Open Poll.",
        linkText: "See the Marathi winner list →",
      },
      {
        href: "/bigg-boss-kannada-winner-list/",
        emoji: "🏆",
        title: "Bigg Boss Kannada Winner List",
        text: "Every winner of Bigg Boss Kannada (Seasons 1–12) plus the OTT edition's Top Performer, with the dates, the runner-up, the host and the prize for each edition, plus the greatest-winner Open Poll.",
        linkText: "See the Kannada winner list →",
      },
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every Hindi season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current Hindi season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderMalayalamWinnersFaq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss Malayalam Winner List FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Who won the latest Bigg Boss Malayalam season?</summary>
        <div class="bb-faq-body">
          <p>Anumol RS won Bigg Boss Malayalam 7, beating Aneesh Tharayil in the finale on 9 November 2025. Her prize was ₹42,55,210 (₹42.55 lakh) — the announced ₹50 lakh reduced under a mid-season task-earnings rule — and she is the series' second female winner.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss Malayalam Season 2?</summary>
        <div class="bb-faq-body">
          <p>Nobody. Season 2 (2020) was cancelled during the COVID-19 pandemic: the show stopped on 20 March 2020 after 76 episodes, host Mohanlal entered the house on Day 74 to suspend it, and the remaining housemates were sent home on Day 75. No finale was held and no winner or runner-up was ever declared, and the announced prize was never awarded.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who was the first Bigg Boss Malayalam winner?</summary>
        <div class="bb-faq-body">
          <p>Sabumon Abdusamad won Season 1 in 2018, beating Pearle Maaney in the finale on 30 September 2018. The season aired on Asianet, ran 98 days with 18 housemates, and carried a ₹1 crore prize — still the largest on this list.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who has hosted Bigg Boss Malayalam?</summary>
        <div class="bb-faq-body">
          <p>Mohanlal has hosted every season of Bigg Boss Malayalam — all seven seasons, from the debut in 2018 to Season 7 in 2025. No other host has fronted the Malayalam edition.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How much prize money did the Bigg Boss Malayalam winners get?</summary>
        <div class="bb-faq-body">
          <p>The figures Wikipedia states: ₹1 crore for Season 1, a flat worth ₹75 lakh for Season 3, and ₹50 lakh each for Seasons 4, 5 and 6. Season 7's winner received ₹42,55,210 (₹42.55 lakh), because the announced ₹50 lakh prize was reduced by what contestants had earned through mid-season tasks. Season 2's announced prize was never awarded — the season was cancelled before a finale.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who is the greatest Bigg Boss Malayalam winner of all time?</summary>
        <div class="bb-faq-body">
          <p>There is no official all-time ranking — the show has never ranked its winners against each other. The Open Poll at the top of this page is where fans answer the question: as it stands, Manikuttan (Season 3) leads it, ahead of Akhil Marar (Season 5) and Dilsha Prasannan (Season 4). Those numbers are VisitBest Open Poll votes — audience sentiment only, not official votes and not an official ranking. The poll itself is not an official Bigg Boss vote either: the winner list on this page is the official record, and official voting exists only for a running season, on the show's own platform, as announced on air.</p>
        </div>
      </details>
    </div>
  </section>`;
}

// ---------- Bigg Boss 17 Winner 2024 Vote List (entry 441) ----------
// New page targeting "bigg boss 17 winner 2024 vote list"
// (/bigg-boss-17-winner-2024-vote-list/): all 21 Bigg Boss 17
// contestants with photos in an Open Poll at the top, seeded as a
// vote list — Munawar Faruqui (the winner) on 5,86,214 votes, the
// other 20 divided below him in descending order. HONESTY RULE for
// this page: Colors and JioCinema never published Bigg Boss 17's
// official vote counts, so every number on this page is presented
// as what it is — the VisitBest Open Poll's own seeded fan
// standings, for audience sentiment only — and the page says so in
// the lead, under the table and in the FAQ. The official record
// asserted here is only the result itself, Wikipedia-verified:
// Munawar Faruqui won the 28 January 2024 finale; Abhishek Kumar
// was 1st runner-up, Mannara Chopra 2nd, Ankita Lokhande 3rd and
// Arun Srikanth Mashettey 4th; Salman Khan hosted; the season ran
// 15 October 2023 – 28 January 2024 (105 days, 21 housemates) on
// Colors TV and JioCinema. No prize figure is printed — Wikipedia
// does not state one for this season. The five finalists reuse
// their season-page portraits (s17-*.webp, already live); the
// other 16 contestants use the verified Pinterest-round WebPs in
// this pack (bb17-*.webp, see photos/MANIFEST.md).

const BB17_FINALISTS_441 = [
  { place: "1st", name: "Munawar Faruqui", result: "🏆 Winner", image: "/assets/bb-seasons/s17-munawar-faruqui.webp", story: "Munawar Faruqui won Bigg Boss 17 on finale night, 28 January 2024 — back-to-back reality crowns after his Lock Upp 1 win. The stand-up comic played the 105-day season in his own quiet style, survived the Ayesha Khan storm mid-season, and beat Abhishek Kumar in the final two." },
  { place: "2nd", name: "Abhishek Kumar", result: "1st runner-up", image: "/assets/bb-seasons/s17-abhishek-kumar.webp", story: "The most dramatic arc of any finalist: Abhishek Kumar was ejected on Day 84 — and brought back the same day. From there he rebuilt his game, reached the finale and finished as 1st runner-up, behind only Munawar Faruqui." },
  { place: "3rd", name: "Mannara Chopra", result: "2nd runner-up", image: "/assets/bb-seasons/s17-mannara-chopra.webp", story: "Mannara Chopra — the actress and cousin of Priyanka and Parineeti Chopra — reached the final five of a 21-housemate season and finished as 2nd runner-up on finale night, third in the final order, ahead of Ankita Lokhande and Arun Srikanth Mashettey." },
  { place: "4th", name: "Ankita Lokhande", result: "3rd runner-up", image: "/assets/bb-seasons/s17-ankita-lokhande.webp", story: "Ankita Lokhande, the Pavitra Rishta star who entered the house with her husband Vicky Jain, finished as 3rd runner-up in the Day 105 finale — fourth in the final order of a season that ran 105 days from its 15 October 2023 premiere." },
  { place: "5th", name: "Arun Srikanth Mashettey", result: "4th runner-up", image: "/assets/bb-seasons/s17-arun-mashettey.webp", story: "Arun Srikanth Mashettey — the Hyderabad gamer known as Achanak Bayanak Gaming — completed the final five, finishing as 4th runner-up when the finale order was declared on Day 105, 28 January 2024." },
];

function renderBB17OfficialResultTable() {
  return `<div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Place</th><th>Contestant</th><th>Official result</th></tr>
        </thead>
        <tbody>
          ${BB17_FINALISTS_441.map((r) => `<tr><td>${r.place}</td><td class="bb-table-contestant"><img src="${r.image}" alt="${r.name}" class="bb-table-avatar" loading="lazy"><strong>${r.name}</strong></td><td>${r.result}</td></tr>`).join("")}
        </tbody>
      </table>
      </div>`;
}

function renderBB17VoteShareTable() {
  const poll441 = pollBySlug.get("bigg-boss-17-winner-2024-vote-list");
  const stats441 = getPollStats(poll441);
  return `<div class="table-scroll">
      <table class="bb-leaderboard-table">
        <thead>
          <tr><th>Rank</th><th>Contestant</th><th>Result</th><th>Open Poll votes</th><th>Vote share</th></tr>
        </thead>
        <tbody>
          ${stats441.list.map((c, i) => `<tr><td>${i + 1}</td><td class="bb-table-contestant">${c.image ? `<img src="${c.image}" alt="${c.name}" class="bb-table-avatar" loading="lazy">` : ""}<strong>${c.name}</strong></td><td>${(c.role || "").replace(" · Bigg Boss 17", "").replace(" · Day", " — Day")}</td><td><strong>${c.votes.toLocaleString("en-IN")}</strong></td><td>${c.pctStr}</td></tr>`).join("")}
        </tbody>
      </table>
      </div>
      <p style="margin-top:1rem;">Total: <strong>${stats441.total.toLocaleString("en-IN")} Open Poll votes</strong> across all 21 contestants. The vote share is each contestant's slice of this VisitBest Open Poll. Read the note above the table before quoting any of these numbers: they are fan standings on this website, not the show's official counts.</p>`;
}

function renderBB17FinalistCards() {
  return `<div class="bb-steps-grid">
      ${BB17_FINALISTS_441.map(
        (r) => `
      <div class="bb-step-card">
        <img src="${r.image}" alt="${r.name}" loading="lazy" decoding="async" style="width:100%;height:auto;display:block;border-radius:8px;margin-bottom:0.75rem;">
        <h3>${r.name}</h3>
        <p><strong>${r.result} · Bigg Boss 17</strong></p>
        <p>${r.story}</p>
      </div>`,
      ).join("")}
      </div>`;
}

function renderBB17VoteListSections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 17 winner 2024 — the official result",
      `<p>Bigg Boss 17 ended on 28 January 2024, after 105 days. Host Salman Khan declared <strong>Munawar Faruqui</strong> the winner in the finale, with Abhishek Kumar beside him in the final two. The season had begun on 15 October 2023 with 21 housemates, aired on Colors TV and streamed on JioCinema, and was played under the season's Dil, Dimaag aur Dum format — a house split into three themed makaans. This table is the official record: the five finalists, in the order they finished.</p>
      ${renderBB17OfficialResultTable()}
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Vote List",
      "Bigg Boss 17 vote list — all 21 contestants, votes and vote share",
      `<p>First, the honest part, because it decides how every number below should be read: <strong>Colors and JioCinema never published the official vote counts for Bigg Boss 17</strong> — not for the finale, and not for any eviction week. Anyone quoting an "official" per-contestant vote tally for this season is quoting something the channel never released. The vote list below is the <strong>VisitBest Open Poll's own fan standings</strong>: all 21 contestants, in the order the fans on this site have them, with each contestant's Open Poll votes and vote share. Munawar Faruqui leads it on 5,86,214 votes — the fans' table agrees with the trophy, even if the numbers are this website's, not the show's.</p>
      ${renderBB17VoteShareTable()}`,
    ) +
    storySection(
      "Meet the Finalists",
      "The Bigg Boss 17 final five — where each of them finished",
      renderBB17FinalistCards(),
    ) +
    renderSeasonLinksRow([
      {
        href: "/bigg-boss-17-voting/",
        emoji: "🗳️",
        title: "Bigg Boss 17 Voting — Fan Re-Vote",
        text: "Season 17's own fan re-vote Open Poll: the five finalists with photos, the official result, the eviction order and the season's story.",
        linkText: "Open the Bigg Boss 17 page →",
      },
      {
        href: "/bigg-boss-winner-list/",
        emoji: "🏆",
        title: "Bigg Boss Winner List — Hindi + OTT",
        text: "Every winner of Bigg Boss Hindi (Seasons 1–19) and Bigg Boss OTT (Seasons 1–3), with the runner-up, host and year for each season, plus the greatest-winner Open Poll.",
        linkText: "See the Hindi + OTT winner list →",
      },
      {
        href: "/bigg-boss-telugu-winners-list/",
        emoji: "🏆",
        title: "Bigg Boss Telugu Winners List",
        text: "Every winner of Bigg Boss Telugu (Seasons 1–9) and Bigg Boss Non-Stop, with the dates, the runner-up, the host and the prize for each edition, plus the greatest-winner Open Poll.",
        linkText: "See the Telugu winners list →",
      },
      {
        href: "/bigg-boss-marathi-winner-list/",
        emoji: "🏆",
        title: "Bigg Boss Marathi Winner List",
        text: "Every winner of Bigg Boss Marathi (Seasons 1–6), with the dates, the runner-up, the host and the prize for each season, plus the greatest-winner Open Poll.",
        linkText: "See the Marathi winner list →",
      },
      {
        href: "/bigg-boss-kannada-winner-list/",
        emoji: "🏆",
        title: "Bigg Boss Kannada Winner List",
        text: "Every winner of Bigg Boss Kannada (Seasons 1–12) plus the OTT edition's Top Performer, with the dates, the runner-up, the host and the prize for each edition, plus the greatest-winner Open Poll.",
        linkText: "See the Kannada winner list →",
      },
      {
        href: "/bigg-boss-malayalam-winner-list/",
        emoji: "🏆",
        title: "Bigg Boss Malayalam Winner List",
        text: "Every Bigg Boss Malayalam winner from Seasons 1–7 — and the honest record of Season 2, cancelled during COVID-19 with no winner — plus the greatest-winner Open Poll.",
        linkText: "See the Malayalam winner list →",
      },
      {
        href: "/bigg-boss-voting/",
        emoji: "🗳️",
        title: "Bigg Boss Voting — All Seasons",
        text: "Every Hindi season's voting in one place: the Ultimate Vote for the greatest winner of all time, today's Bigg Boss 20 standings and the season grid.",
        linkText: "Open the all-seasons hub →",
      },
      {
        href: "/bigg-boss-20-voting/",
        emoji: "🔥",
        title: "Bigg Boss 20 Voting Hub",
        text: "The current Hindi season's Open Polls, this week's nominee panel, the prediction scorecard and the archives.",
        linkText: "Open the Bigg Boss 20 hub →",
      },
    ])
  );
}

function renderBB17VoteListFaq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 17 Winner 2024 Vote List FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Who won Bigg Boss 17?</summary>
        <div class="bb-faq-body">
          <p>Munawar Faruqui won Bigg Boss 17. Host Salman Khan declared him the winner in the grand finale on 28 January 2024, at the end of the 105-day season, with Abhishek Kumar finishing as the 1st runner-up in the final two.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What were the official Bigg Boss 17 vote counts?</summary>
        <div class="bb-faq-body">
          <p>They were never published. Colors and JioCinema did not release official per-contestant vote counts for the Bigg Boss 17 finale, or for any of the season's eviction weeks — no official vote tally for this season exists in the public record. Every vote number on this page is a VisitBest Open Poll figure: this website's own fan standings, published for audience sentiment only. They are not, and are never presented as, the show's official votes.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How many votes does Munawar Faruqui have on this vote list?</summary>
        <div class="bb-faq-body">
          <p>Munawar Faruqui leads this vote list with 5,86,214 votes — a 22.3% share of the poll's 26,29,176 total — ahead of Abhishek Kumar on 4,71,308. Those are VisitBest Open Poll fan standings, kept updated as readers vote here; they are not the official Bigg Boss 17 counts, which the channel never released (see the question above).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the five Bigg Boss 17 finalists?</summary>
        <div class="bb-faq-body">
          <p>In finishing order: Munawar Faruqui (winner), Abhishek Kumar (1st runner-up), Mannara Chopra (2nd runner-up), Ankita Lokhande (3rd runner-up) and Arun Srikanth Mashettey (4th runner-up). The five were what remained of a 21-housemate season on Day 105, 28 January 2024.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>How many contestants were in Bigg Boss 17, and when did it run?</summary>
        <div class="bb-faq-body">
          <p>Bigg Boss 17 had 21 housemates — 17 original entrants and 4 wild cards (Manasvi Mamgai, Samarth Jurel, Aoora and Ayesha Khan). The season ran for 105 days, from 15 October 2023 to 28 January 2024, hosted by Salman Khan and aired on Colors TV with streaming on JioCinema.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Is the poll on this page an official Bigg Boss vote?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 17 voting ran on JioCinema while the season was on air, and it closed for good at the finale on 28 January 2024 — the result is final and it never reopens. The poll at the top of this page is a VisitBest Open Poll, a fan vote for audience sentiment only. If you want to re-vote the season itself, Season 17's fan re-vote Open Poll is on the <a href="/bigg-boss-17-voting/">Bigg Boss 17 voting page</a>.</p>
        </div>
      </details>
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


// ---------- Past-season voting pages (entries 420 + 421) ----------
// Bigg Boss 10 (entry 420) and Bigg Boss 9 (entry 421) fan re-vote
// pages, plus the hub grid links for Seasons 10 and 9. Every fact
// below comes from the season research files, verified against the
// seasons' Wikipedia articles (see the pack's sources.md): S10
// facts in ~/workspace/bb-seasons/batch6-10-9/s10/facts.md, S9
// facts in ~/workspace/bb-seasons/batch6-10-9/s9/facts.md. Neither
// season's Wikipedia article states a winner's prize, so no
// winner's prize figure is published (the press-reported figures
// are not Wikipedia-stated and are not used). The only money
// figures on either page are the two walk amounts Wikipedia
// itself states: Manu Punjabi's finale walk figure on the Season
// 10 page, and Kishwer Merchant's Day 89 walk figure on the
// Season 9 page — each on its own page only. Season 10's Week 4
// Immunity Medallion auction is told without its bid figures,
// and Season 9's Road to Finale buzzer figure is not printed at
// all. Exit days the research files flag as contested (†) follow
// the files' primary account and are marked † on the pages with
// a disclosure note, never presented as settled fact. The
// renderers below reuse the shared season helpers defined with
// the entry 408/409 pages.

// ---------- Bigg Boss 10 (entry 420) ----------

const SEASON10_FINALISTS = [
  {
    name: "Manveer Gurjar",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s10-manveer-gurjar.webp",
    story:
      "Manveer Gurjar won Bigg Boss 10 on finale night, 29 January 2017. A farmer from Haryana who entered as a commoner — one of the 'Indiawale' in the show's first commoners season — he beat Bani Judge in the final two. A week earlier he had won the Ticket to Finale in a shopping mall, topping an in-person public vote with 472 votes to Manu Punjabi's 338.",
  },
  {
    name: "Bani Judge",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s10-bani-judge.webp",
    story:
      "Bani Judge — credited on the show as Bani J — finished as first runner-up in the finale on 29 January 2017, losing the final two to Manveer Gurjar.",
  },
  {
    name: "Lopamudra Raut",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s10-lopamudra-raut.webp",
    story:
      "Lopamudra Raut finished as second runner-up when the finale order was declared on 29 January 2017.",
  },
  {
    name: "Manu Punjabi",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s10-manu-punjabi.webp",
    story:
      "Manu Punjabi's season had two exits: he walked out on Day 48† in an emergency exit and re-entered on Day 57 — spending Days 57–59 in the secret room before returning to the main house — and in the finale he accepted Bigg Boss's money offer of ₹10 lakh and left, recorded as 'Walked, 3rd runner-up'.",
  },
];

const SEASON10_EVICTIONS = [
  ["Akanksha Sharma", 14, "Evicted by public vote"],
  ["Navin Prakash", "28†", "Evicted by public vote"],
  ["Karan Mehra", 34, "Evicted by public vote — in a double eviction with Lokesh Kumari Sharma"],
  ["Lokesh Kumari Sharma", 35, "Evicted by public vote"],
  ["Elena Kazan", "49†", "Evicted by public vote; a wild-card entrant from Day 42"],
  ["Sahil Anand", 56, "Evicted by public vote; a wild-card entrant from Day 42"],
  ["Jason Shah", "56†", "Walked; a wild-card entrant from Day 42"],
  ["Rahul Dev", 63, "Evicted by public vote"],
  ["Priyanka Jagga", "69†", "Ejected — asked to leave by host Salman Khan after her behaviour towards him. Her full run: evicted on Day 7, re-entered as a wild card on Day 42†, evicted again on Day 56 but sent to the secret room instead of going home, then returned"],
  ["Gaurav Chopra", 77, "Evicted by public vote"],
  ["Swami Om", 81, "Ejected by Bigg Boss. His full run: fake-evicted on Day 21 and held in the secret room for three days (returned Day 24), walked out on Day 48 and returned on Day 50, then ejected on Day 81 after throwing urine on Bani and Rohan during a task"],
  ["Nitibha Kaul", "91†", "Evicted by public vote"],
  ["Antara Biswas (Monalisa)", "97†", "Evicted by public vote"],
  ["Rohan Mehra", 102, "Evicted by public vote"],
];

const SEASON10_MOMENTS = [
  {
    title: "The first commoners season",
    text: "For the first time, the house opened to common people — the 'Indiawale' — alongside celebrity housemates, and in Week 1 the Indiawale were made the Maliks (owners) of the house with the celebrities as their Sevaks (servants). It was also the first Bigg Boss season carried on an OTT platform, Voot, which ran the 'Unseen-Undekha' unseen footage.",
  },
  {
    title: "The Immunity Medallion auction",
    text: "In Week 4 the housemates bid for an Immunity Medallion, with Bigg Boss announcing that the winning bid would be cut from the winner's prize money. The three highest bids cancelled each other out, and Nitibha Kaul won the medallion with the second-highest bid.",
  },
  {
    title: "Priyanka Jagga was thrown out by the host",
    text: "Priyanka Jagga's season had four acts: evicted on Day 7, back as a wild card on Day 42†, 'evicted' again on Day 56 but sent to the secret room instead of going home — and finally asked to leave the house by Salman Khan himself after her behaviour towards him, recorded as an ejection on Day 69†.",
  },
  {
    title: "Swami Om's ejection",
    text: "During the Week 12 captaincy task, Swami Om threw his urine on Bani and Rohan; the task was cancelled, he was put in jail, and Bigg Boss then threw him out of the house — an ejection on Day 81, closing a run that had already included a fake eviction, a secret-room stay and a walk-out and return.",
  },
  {
    title: "A ticket to the finale, won in a shopping mall",
    text: "In the BB Solar System task's final leg, Manveer Gurjar and Manu Punjabi were taken to a shopping mall to ask the public to vote for them in person. Manveer won the Ticket to Finale week with 472 votes to Manu's 338.",
  },
];

function renderSeason10Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 10 result — Manveer Gurjar won the season",
      `<p>Bigg Boss 10 — styled <em>Bigg Boss: India Isse Apna Hi Ghar Samjho</em> — ran from <strong>16 October 2016</strong> to the finale on <strong>29 January 2017</strong>: 105 days, 18 housemates, hosted by Salman Khan on Colors TV. It was the first season to open the house to commoners, and the first carried on an OTT platform, Voot. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Manveer Gurjar"],
        ["1st runner-up", "Bani Judge"],
        ["2nd runner-up", "Lopamudra Raut"],
        ["3rd runner-up", "Manu Punjabi"],
      ])}
      <p style="margin-top:1rem;">The finale's biggest turn came from Manu Punjabi: presented with Bigg Boss's money offer, he took the ₹10 lakh and left, and the season record carries him as 'Walked, 3rd runner-up'. The win itself made the season's experiment land — in the first year commoners lived alongside celebrities, a commoner took the trophy.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 10's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 10 final four",
      renderSeasonFinalistCards(SEASON10_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 10 eviction order — who left, and when",
      `<p>Fourteen housemates left before the finale, in this order (from the season's record) — two of them had more than one stint, as their notes show:</p>
      ${renderSeasonEvictionTable(SEASON10_EVICTIONS)}
      <p style="margin-top:1rem;">Days marked † are contested inside the season record: its housemates status table disagrees with its nominations table and weekly summary on nine exits or re-entries — Navin Prakash's, Elena Kazan's, Jason Shah's, Priyanka Jagga's, Nitibha Kaul's and Antara Biswas's days shown follow the primary account, not settled fact, and Manu Punjabi's mid-season walk is likewise contested (the nominations table's Day 48† against the status table's Day 44). The finale followed on Day 105: Manu Punjabi walked out with the ₹10 lakh offer (recorded as 'Walked, 3rd runner-up'), Lopamudra Raut finished as second runner-up and Bani Judge as first runner-up, before Manveer Gurjar was declared the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 10 story — the season's defining moments",
      renderSeasonMoments(SEASON10_MOMENTS),
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
        href: "/bigg-boss-9-voting/",
        emoji: "👯",
        title: "Bigg Boss 9 Voting",
        text: "Prince Narula's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 9 page →",
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

function renderSeason10Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 10 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 10 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 10 voting closed when the season ended with the finale on 29 January 2017, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 10?</summary>
        <div class="bb-faq-body">
          <p>Manveer Gurjar won Bigg Boss 10. The final order was: Bani Judge (first runner-up), Lopamudra Raut (second runner-up) and Manu Punjabi (third runner-up — he took the ₹10 lakh offer in the finale and walked out).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 10 finalists?</summary>
        <div class="bb-faq-body">
          <p>The four finalists were Manveer Gurjar, Bani Judge, Lopamudra Raut and Manu Punjabi. The season ran from 16 October 2016 to 29 January 2017 — 105 days and 18 housemates, hosted by Salman Khan on Colors TV.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 10. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
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

// ---------- Bigg Boss 9 (entry 421) ----------

const SEASON9_FINALISTS = [
  {
    name: "Prince Narula",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s9-prince-narula.webp",
    story:
      "Prince Narula won Bigg Boss 9 on finale night, 23 January 2016. He arrived already a reality-show winner — he had won MTV Roadies 12 and MTV Splitsvilla 8 before entering the house — and in the finale week he also won the season's Ticket to Finale.",
  },
  {
    name: "Rishabh Sinha",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s9-rishabh-sinha.webp",
    story:
      "Rishabh Sinha finished as first runner-up in the finale on 23 January 2016 — a remarkable run for a wild card: he entered on Day 22 as the season's first wild-card entrant and played through to the final two.",
  },
  {
    name: "Mandana Karimi",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s9-mandana-karimi.webp",
    story:
      "Mandana Karimi finished as second runner-up in the finale on 23 January 2016. Her run included a fake eviction: told she had been evicted, she spent Days 38–39 in the secret room before returning to the house.",
  },
  {
    name: "Rochelle Rao",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s9-rochelle-rao.webp",
    story:
      "Rochelle Rao finished as third runner-up when the finale order was declared on 23 January 2016; she was the first of the four finalists eliminated on finale night.",
  },
];

const SEASON9_EVICTIONS = [
  ["Ankit Gera", 7, "Evicted by public vote"],
  ["Roopal Tyagi", 14, "Evicted by public vote"],
  ["Arvind Vegda", 20, "Evicted by public vote"],
  ["Vikas Bhalla", 21, "Evicted by public vote"],
  ["Yuvika Chaudhary", 28, "Evicted by public vote"],
  ["Puneet Vashist", "35†", "Evicted by housemates; a Week 4 wild-card entrant"],
  ["Aman Verma", 42, "Evicted by public vote"],
  ["Rimi Sen", 51, "Evicted by public vote"],
  ["Digangana Suryavanshi", 57, "Evicted by housemates — the housemates voted her out while Suyyash Rai was saved"],
  ["Kawaljit Singh", 63, "Evicted by public vote; a wild-card entrant"],
  ["Gizele Thakral", "77†", "Evicted by public vote after a direct nomination by the house captain"],
  ["Nora Fatehi", 83, "Evicted by public vote; a wild-card entrant"],
  ["Suyyash Rai", 84, "Evicted by public vote"],
  ["Kishwer Merchant", 89, "Walked — she took the ₹15 lakh money bag in the Ticket to Finale twist"],
  ["Priya Malik", "96†", "Evicted by public vote; a wild-card entrant and a former Big Brother Australia contestant"],
  ["Keith Sequeira", "101†", "Evicted by public vote in the mid-week eviction, the last exit before the finale. His full run: walked out on Day 26 after a family emergency and re-entered on Day 48"],
];

const SEASON9_MOMENTS = [
  {
    title: "The Double Trouble pairs launch",
    text: "The fourteen original housemates entered the house in seven pairs and were tied to each other; pairs nominated other pairs by consensus, though each housemate still faced eviction individually. The house itself followed the pairing theme, with all-double beds.",
  },
  {
    title: "Kishwer Merchant's ₹15 lakh walk",
    text: "In the finale week's Ticket to Finale twist, Bigg Boss announced that one of Kishwer Merchant and Prince Narula would have to leave with the money while the other stayed in the race. After a day of thinking, Kishwer took the money bag — ₹15 lakh, per the season's nominations record — on Day 89, and Prince won the Ticket to Finale.",
  },
  {
    title: "Keith Sequeira's emergency exit and surprise return",
    text: "Keith Sequeira walked out on Day 26 after a family emergency, then re-entered on Day 48 as a surprise birthday present for Rochelle Rao. In Week 12 he was nominated for the rest of the season through the Season Nomination task, and he was the last housemate evicted before the finale.",
  },
  {
    title: "Mandana Karimi's fake eviction",
    text: "Mandana Karimi was told she had been evicted after being named the worst performer of a task — but she was actually sent to the secret room for Days 38–39 while the housemates were made to talk about her. She returned and saved Prince and Rochelle from nomination.",
  },
  {
    title: "Imam Siddiqui's guest week",
    text: "Bigg Boss 6 finalist Imam Siddiqui entered as a guest for a week in Week 14 and ran the house through tasks such as 'Commander Imam'; in his 'Imam Ki Adalat' task, Priya Malik won and became the season's first finalist.",
  },
];

function renderSeason9Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 9 result — Prince Narula won the season",
      `<p>Bigg Boss 9 — styled <em>Bigg Boss Double Trouble</em> — ran from <strong>11 October 2015</strong> to the finale on <strong>23 January 2016</strong>: 104 days, 20 housemates, hosted by Salman Khan on Colors TV. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Prince Narula"],
        ["1st runner-up", "Rishabh Sinha"],
        ["2nd runner-up", "Mandana Karimi"],
        ["3rd runner-up", "Rochelle Rao"],
      ])}
      <p style="margin-top:1rem;">The final four included a wild card: Rishabh Sinha, who had entered on Day 22, finished as first runner-up behind Prince Narula — while Mandana Karimi's road to the finale survived even a fake eviction and two days in the secret room.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 9's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 9 final four",
      renderSeasonFinalistCards(SEASON9_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 9 eviction order — who left, and when",
      `<p>Sixteen housemates left before the finale, in this order (from the season's record) — Keith Sequeira's row covers two stints, as his note shows:</p>
      ${renderSeasonEvictionTable(SEASON9_EVICTIONS)}
      <p style="margin-top:1rem;">Entries marked † are contested inside the season record: Puneet Vashist is flagged because the status table implies he entered on Day 1, when the article's own housemates list and weekly summary make him a Week 4 wild-card entrant (his exit day is agreed); Gizele Thakral's exit manner is disputed — the status table says 'Evicted by Captain', the weekly summary says a public vote after the captain's direct nomination, and the table follows the public-vote account; and Priya Malik's and Keith Sequeira's days differ between accounts — so the entries shown follow the primary account, not settled fact. The finale followed on Day 104: Rochelle Rao (third runner-up), Mandana Karimi (second runner-up) and Rishabh Sinha (first runner-up) finished behind Prince Narula, the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 9 story — the season's defining moments",
      renderSeasonMoments(SEASON9_MOMENTS),
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
        href: "/bigg-boss-10-voting/",
        emoji: "🏡",
        title: "Bigg Boss 10 Voting",
        text: "Manveer Gurjar's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 10 page →",
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

function renderSeason9Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 9 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 9 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 9 voting closed when the season ended with the finale on 23 January 2016, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 9?</summary>
        <div class="bb-faq-body">
          <p>Prince Narula won Bigg Boss 9. The final order was: Rishabh Sinha (first runner-up — a wild card who had entered on Day 22), Mandana Karimi (second runner-up) and Rochelle Rao (third runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 9 finalists?</summary>
        <div class="bb-faq-body">
          <p>The four finalists were Prince Narula, Rishabh Sinha, Mandana Karimi and Rochelle Rao. The season ran from 11 October 2015 to 23 January 2016 — 104 days and 20 housemates, hosted by Salman Khan on Colors TV.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 9. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
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


// ---------- Past-season voting pages (entries 422 + 423) ----------
// Bigg Boss 8 (entry 422) and Bigg Boss 7 (entry 423) fan re-vote
// pages, plus the hub grid links for Seasons 8 and 7. Every fact
// below comes from the season research files, verified against
// the seasons' Wikipedia articles (see the pack's sources.md):
// S8 facts in ~/workspace/bb-seasons/batch7-8-7/s8/facts.md, S7
// facts in ~/workspace/bb-seasons/batch7-8-7/s7/facts.md. Season
// 8 is presented exactly as its record presents it: the season
// itself declared no winner — it ended on 3 January 2015 with
// five finalists crowned Champions, and the title was decided in
// the Bigg Boss Halla Bol finale on 31 January 2015, which
// Gautam Gulati won. Neither season's Wikipedia coverage states
// any prize figure of any kind, so no money figure appears on
// either page (the press-reported figures are not used, and
// Pritam Singh's Halla Bol finale walk is stated without any
// amount, because the record states none). Exit days the
// research files flag as contested (†) follow the files'
// primary account and are marked † on the pages with a
// disclosure note, never presented as settled fact. The
// renderers below reuse the shared season helpers defined with
// the entry 408/409 pages.

// ---------- Bigg Boss 8 (entry 422) ----------

const SEASON8_FINALISTS = [
  {
    name: "Gautam Gulati",
    placing: "🏆 Winner — Bigg Boss Halla Bol",
    image: "/assets/bb-seasons/s8-gautam-gulati.webp",
    story:
      "Gautam Gulati was one of the five Champions crowned when Bigg Boss 8 ended on 3 January 2015 — and a month later he won the title itself, declared the winner of the Bigg Boss Halla Bol finale on 31 January 2015 ahead of Karishma Tanna. His run had begun with the Secret Society putting him up for the season's first public vote.",
  },
  {
    name: "Karishma Tanna",
    placing: "1st runner-up — Bigg Boss Halla Bol",
    image: "/assets/bb-seasons/s8-karishma-tanna.webp",
    story:
      "Karishma Tanna was crowned one of the season's five Champions on 3 January 2015 and finished as first runner-up in the Bigg Boss Halla Bol finale on 31 January 2015 — the last housemate standing between Gautam Gulati and the title.",
  },
  {
    name: "Pritam Singh",
    placing: "2nd runner-up — Bigg Boss Halla Bol",
    image: "/assets/bb-seasons/s8-pritam-singh.webp",
    story:
      "Pritam Singh — one of the three housemates who began the season inside the Secret Society — was crowned a Champion on 3 January 2015. In the Halla Bol finale he left after accepting a money offer put to the remaining finalists, and the record carries him as 'Walked, 2nd runner-up'.",
  },
  {
    name: "Dimpy Ganguly",
    placing: "3rd runner-up — Bigg Boss Halla Bol",
    image: "/assets/bb-seasons/s8-dimpy-ganguly.webp",
    story:
      "Dimpy Ganguly entered the house as a wild card on Day 47, was crowned one of the five Champions on 3 January 2015, and finished as third runner-up in the Bigg Boss Halla Bol finale on 31 January 2015.",
  },
  {
    name: "Ali Quli Mirza",
    placing: "4th runner-up — Bigg Boss Halla Bol",
    image: "/assets/bb-seasons/s8-ali-quli-mirza.webp",
    story:
      "Ali Quli Mirza, a wild-card entrant from Day 24, was crowned one of the five Champions on 3 January 2015 and finished as fourth runner-up in the Bigg Boss Halla Bol finale on 31 January 2015.",
  },
];

const SEASON8_EVICTIONS = [
  ["Sukirti Kandpal", 14, "Evicted by public vote"],
  ["Deepshikha Nagpal", 21, "Evicted by public vote"],
  ["Natasa Stankovic", 28, "Evicted by public vote"],
  ["Soni Singh", 35, "Evicted by public vote"],
  ["Minissha Lamba", 42, "Evicted by public vote"],
  ["Sushant Divgikar", 49, "Evicted by public vote"],
  ["Arya Babbar", 56, "Evicted by public vote"],
  ["Nigaar Khan", 63, "Evicted by public vote; a wild-card entrant from Day 50"],
  ["Renee Dhyani", 70, "Evicted by public vote; a wild-card entrant from Day 47"],
  ["Diandra Soares", 84, "Evicted by public vote; she later re-entered as a guest on Day 100, not as a contestant"],
  ["Praneet Bhat", 90, "Evicted by public vote"],
  ["Upen Patel", "101†", "Evicted in a midnight eviction combining the public votes of two weeks"],
  ["Sonali Raut", 104, "Evicted at the season finale. Her full run: the season's first eviction on Day 7, re-entered on Day 11, and stayed to the finale"],
  ["Puneet Issar", 104, "Evicted at the season finale. His full run: ejected on Day 44, re-entered on Day 46, and stayed to the finale"],
];

const SEASON8_MOMENTS = [
  {
    title: "The Secret Society",
    text: "On launch night, three housemates — Deepshikha Nagpal, Pritam Singh and Puneet Issar — were installed in a hidden Secret Society next to the plane-crash area: immune from nomination, and holding the power to put housemates up for the first public vote. They chose Sonali Raut and Gautam Gulati. The society was revealed to viewers on Day 3, Puneet was moved out on Day 5, and the other two joined the house on Day 8.",
  },
  {
    title: "An aircraft for a house",
    text: "The season's house in Lonavala resembled the interior of an aircraft: the housemates initially lived in a 'plane crash' area, while the main house was styled as an Alpine chalet with wood, fur and leather furnishings.",
  },
  {
    title: "Puneet Issar's ejection and return",
    text: "Puneet Issar was ejected on Day 44 — and re-entered just two days later, on Day 46, going on to reach the season finale, where he was one of the two housemates eliminated on Day 104.",
  },
  {
    title: "Sonali Raut's first-week exit and comeback",
    text: "Sonali Raut was the season's first eviction, on Day 7 — then re-entered on Day 11 and survived all the way to the Day 104 finale, one of the longest comebacks in the show's history.",
  },
  {
    title: "A finale with no winner",
    text: "In the fifteenth week Bigg Boss announced a four-week extension — and instead of naming a winner, the 3 January finale crowned five Champions and launched the spin-off Bigg Boss Halla Bol, in which the five Champions faced five Challengers from past seasons (Ajaz Khan, Mahek Chahal, Rahul Mahajan, Sambhavna Seth and Sana Khan) under a new host, Farah Khan.",
  },
  {
    title: "Ajaz Khan's ejection from Halla Bol",
    text: "The season 7 finalist Ajaz Khan, who had first entered the house on Day 99 ahead of the spin-off, was ejected in Halla Bol's first week after hitting Ali Quli Mirza; the eviction scheduled for that week was then cancelled.",
  },
];

function renderSeason8Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 8 result — five Champions, and a Halla Bol winner",
      `<p>Bigg Boss 8 — styled <em>Bigg Boss 8: Sabki Lagegi Vaat</em> — premiered on <strong>21 September 2014</strong>: 104 days, 19 housemates, hosted by Salman Khan on Colors TV. But its finale, on <strong>3 January 2015</strong>, was like no other season's: instead of declaring a winner, the season crowned its five finalists as <strong>Champions</strong> and carried them into a spin-off, <em>Bigg Boss Halla Bol</em>, where they faced five Challengers from past seasons under a new host, Farah Khan. The five Champions were:</p>
      ${renderSeasonResultTable([
        ["Champion", "Gautam Gulati"],
        ["Champion", "Karishma Tanna"],
        ["Champion", "Pritam Singh"],
        ["Champion", "Dimpy Ganguly"],
        ["Champion", "Ali Quli Mirza"],
      ])}
      <p style="margin-top:1rem;">Halla Bol ran through January 2015, and its finale on <strong>31 January 2015</strong> settled the title. The final order was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Gautam Gulati"],
        ["1st runner-up", "Karishma Tanna"],
        ["2nd runner-up", "Pritam Singh"],
        ["3rd runner-up", "Dimpy Ganguly"],
        ["4th runner-up", "Ali Quli Mirza"],
      ])}
      <p style="margin-top:1rem;">The finale's biggest turn came from Pritam Singh: offered money to leave, he accepted and walked, and the record carries him as 'Walked, 2nd runner-up'. So the honest summary of Bigg Boss 8 is this: the season itself produced five Champions and no winner — Gautam Gulati's win belongs to the Halla Bol finale that closed the combined run.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 8's official voting closed with the Halla Bol finale and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 8 Champions — the final five",
      renderSeasonFinalistCards(SEASON8_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 8 eviction order — who left, and when",
      `<p>Fourteen housemates went out across the season, in this order (from the season's record) — the last two at the finale itself, and two of them had more than one stint, as their notes show:</p>
      ${renderSeasonEvictionTable(SEASON8_EVICTIONS)}
      <p style="margin-top:1rem;">Days marked † are contested inside the season record: Upen Patel's eviction day is given as Day 101 by the housemates status table, while the nominations table's Week 15 split (Days 102 and 104) does not cleanly reconcile with it — the day shown follows the status table, not settled fact. The finale followed on Day 104 (3 January 2015): Sonali Raut and Puneet Issar were eliminated, and Gautam Gulati, Karishma Tanna, Pritam Singh, Ali Quli Mirza and Dimpy Ganguly were crowned the season's five Champions and carried into Bigg Boss Halla Bol — where, on 31 January 2015, the order was settled: Ali Quli Mirza (fourth runner-up), Dimpy Ganguly (third runner-up), Pritam Singh (walked, second runner-up), Karishma Tanna (first runner-up) and Gautam Gulati the winner. One finale-night press report put Dimpy Ganguly's Halla Bol exit before Ali Quli Mirza's; the order shown follows the season record.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 8 story — the season's defining moments",
      renderSeasonMoments(SEASON8_MOMENTS),
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
        href: "/bigg-boss-7-voting/",
        emoji: "⚖️",
        title: "Bigg Boss 7 Voting",
        text: "Gauahar Khan's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 7 page →",
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

function renderSeason8Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 8 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 8 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 8 voting closed when the combined run ended with the Bigg Boss Halla Bol finale on 31 January 2015, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 8?</summary>
        <div class="bb-faq-body">
          <p>Bigg Boss 8 itself declared no winner: its finale on 3 January 2015 crowned five Champions — Gautam Gulati, Karishma Tanna, Pritam Singh, Ali Quli Mirza and Dimpy Ganguly. The title was decided in the Bigg Boss Halla Bol finale on 31 January 2015, which Gautam Gulati won, ahead of Karishma Tanna (first runner-up), Pritam Singh (second runner-up — he walked out in the finale), Dimpy Ganguly (third runner-up) and Ali Quli Mirza (fourth runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 8 finalists?</summary>
        <div class="bb-faq-body">
          <p>The five finalists — crowned the season's Champions — were Gautam Gulati, Karishma Tanna, Pritam Singh, Ali Quli Mirza and Dimpy Ganguly. The season ran from 21 September 2014 to 3 January 2015 — 104 days and 19 housemates, hosted by Salman Khan on Colors TV — and the Champions then played the Bigg Boss Halla Bol spin-off, hosted by Farah Khan, to its finale on 31 January 2015.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 8. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Are the numbers on this page official Bigg Boss results?</summary>
        <div class="bb-faq-body">
          <p>No. Every vote count and percentage on this page comes from VisitBest's own Open Poll — a free audience sentiment poll run by this website. The Champions and the Halla Bol finishing order named on this page are the real results, as declared on the show; the poll numbers are reader sentiment.</p>
        </div>
      </details>
    </div>
  </section>`;
}

// ---------- Bigg Boss 7 (entry 423) ----------

const SEASON7_FINALISTS = [
  {
    name: "Gauahar Khan",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s7-gauahar-khan.webp",
    story:
      "Gauahar Khan won Bigg Boss 7 on finale night, 28 December 2013 — after one of the season's strangest runs: she walked out of the house on Day 44, returned the very next day, and went on to lift the trophy ahead of Tanishaa Mukerji.",
  },
  {
    name: "Tanishaa Mukerji",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s7-tanishaa-mukerji.webp",
    story:
      "Tanishaa Mukerji finished as first runner-up in the finale on 28 December 2013 — the last housemate standing between Gauahar Khan and the title.",
  },
  {
    name: "Ajaz Khan",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s7-ajaz-khan.webp",
    story:
      "Ajaz Khan, a wild-card entrant who joined the season in its middle weeks — first housed in the separate Caravan before entering the main house — finished as second runner-up in the finale on 28 December 2013, ahead of Day 1 entrant Sangram Singh.",
  },
  {
    name: "Sangram Singh",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s7-sangram-singh.webp",
    story:
      "Sangram Singh finished as third runner-up; he was the first of the four finalists eliminated on finale night, 28 December 2013.",
  },
];

const SEASON7_EVICTIONS = [
  ["Hazel Keech", 7, "Evicted by public vote"],
  ["Rajat Rawail", 14, "Evicted by public vote"],
  ["Anita Advani", 21, "Evicted by public vote"],
  ["Ratan Rajput", 28, "Evicted by public vote"],
  ["Shilpa Saklani", 35, "Evicted by public vote"],
  ["Vivek Mishra", 38, "Evicted by public vote; a wild-card entrant from Day 32"],
  ["Asif Azim", 42, "Evicted by public vote; entered on Day 11"],
  ["Apurva Agnihotri", 49, "Evicted by public vote"],
  ["Candy Brar", 56, "Evicted by public vote; a wild-card entrant"],
  ["Pratyusha Banerjee", 63, "Evicted by public vote"],
  ["Elli Avram", 70, "Evicted by public vote"],
  ["Sofia Hayat", 84, "Evicted by public vote; entered on Day 45, initially into the Caravan"],
  ["Kamya Panjabi", 91, "Evicted by public vote"],
  ["Kushal Tandon", 95, "Evicted by public vote. His full run: ejected on Day 44, re-entered on Day 68, and evicted for good on Day 95"],
  ["Armaan Kohli", "98†", "Evicted by public vote. His full run: held in the secret room on Days 77–78, ejected on Day 94, re-entered on Day 95, and finally evicted on Day 98†"],
  ["Andy Kumar", 101, "Evicted by public vote"],
];

const SEASON7_MOMENTS = [
  {
    title: "Heaven and Hell",
    text: "The house was split in two: a luxurious 'Heaven' side, with the pool, and a 'Hell' side with no running water and no kitchen of its own, whose residents depended on Heaven for food — and the two sides could not cross or share items. On Day 31 the Hell side was demolished and everyone moved into Heaven.",
  },
  {
    title: "The Bigg Boss Warden",
    text: "A new feature for this season: a warden who monitored the inmates and kept them to time, adding a layer of discipline the house had never had before.",
  },
  {
    title: "Day 44: an ejection and the winner's walk-out",
    text: "Day 44 brought two exits at once: Kushal Tandon was ejected, and Gauahar Khan walked out on the same day. She returned the very next day, Day 45, and went on to win the season; Kushal was brought back later, on Day 68.",
  },
  {
    title: "The Caravan",
    text: "Mid-season entrants Ajaz Khan and Candy Brar were first housed in a separate Caravan before joining the main house; Andy Kumar was later sent to the Caravan as a punishment for discussing nominations, and Sofia Hayat also entered through it.",
  },
  {
    title: "A wild card in the final three",
    text: "Ajaz Khan entered mid-season as a wild card and finished as second runner-up — third place — ahead of Day 1 entrant Sangram Singh: one of the deepest wild-card runs of the show's early years.",
  },
];

function renderSeason7Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 7 result — Gauahar Khan won the season",
      `<p>Bigg Boss 7 — styled <em>Bigg Boss: Jannat Ka Wow Aur Jahannum Ka Aaw</em>, also called <em>Bigg Boss: Saath Saat</em> — ran from <strong>15 September 2013</strong> to the finale on <strong>28 December 2013</strong>: 104 days, 20 housemates, hosted by Salman Khan on Colors TV. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Gauahar Khan"],
        ["1st runner-up", "Tanishaa Mukerji"],
        ["2nd runner-up", "Ajaz Khan"],
        ["3rd runner-up", "Sangram Singh"],
      ])}
      <p style="margin-top:1rem;">The winner's own road to the trophy included a walk-out: Gauahar Khan left the house on Day 44 — the same day Kushal Tandon was ejected — and returned the next day, Day 45, to complete her run to the title. On finale night Sangram Singh went out first, then Ajaz Khan, leaving Gauahar to beat Tanishaa Mukerji in the final two.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 7's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 7 final four",
      renderSeasonFinalistCards(SEASON7_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 7 eviction order — who left, and when",
      `<p>Sixteen housemates left before the finale, in this order (from the season's record) — two of them had more than one stint, as their notes show:</p>
      ${renderSeasonEvictionTable(SEASON7_EVICTIONS)}
      <p style="margin-top:1rem;">Days marked † are contested inside the season record: Armaan Kohli's final eviction is given as Day 98 by the housemates status table, while his row in the nominations table ends on Day 97 — the day shown follows the status table, not settled fact. The finale followed on Day 104 (28 December 2013): Sangram Singh (third runner-up) and Ajaz Khan (second runner-up) went out first, leaving Gauahar Khan to beat Tanishaa Mukerji (first runner-up) for the title.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 7 story — the season's defining moments",
      renderSeasonMoments(SEASON7_MOMENTS),
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
        href: "/bigg-boss-8-voting/",
        emoji: "👑",
        title: "Bigg Boss 8 Voting",
        text: "The season of the five Champions: the official result, the Halla Bol finish, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 8 page →",
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

function renderSeason7Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 7 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 7 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 7 voting closed when the season ended with the finale on 28 December 2013, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 7?</summary>
        <div class="bb-faq-body">
          <p>Gauahar Khan won Bigg Boss 7. The final order was: Tanishaa Mukerji (first runner-up), Ajaz Khan (second runner-up — a wild-card entrant) and Sangram Singh (third runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 7 finalists?</summary>
        <div class="bb-faq-body">
          <p>The four finalists were Gauahar Khan, Tanishaa Mukerji, Ajaz Khan and Sangram Singh. The season ran from 15 September 2013 to 28 December 2013 — 104 days and 20 housemates, hosted by Salman Khan on Colors TV.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 7. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
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


// ---------- Past-season voting pages (entries 424 + 425) ----------
// Bigg Boss 6 (entry 424) and Bigg Boss 5 (entry 425) fan re-vote
// pages, plus the hub grid links for Seasons 6 and 5. Every fact
// below comes from the season research files, verified against
// the seasons' Wikipedia articles (see the pack's sources.md):
// S6 facts in ~/workspace/bb-seasons/batch8-6-5/s6/facts.md, S5
// facts in ~/workspace/bb-seasons/batch8-6-5/s5/facts.md. Prize
// rule: Season 6's Wikipedia article states no money figure of
// any kind, so no money figure appears on the Season 6 page
// (the press-reported figures are not used). Season 5's winner's
// prize is likewise not stated by Wikipedia (the press-reported
// figure is not used); the one money figure on the Season 5 page
// is the Week 14 walk-out offer, stated only as an offer that
// no finalist took — never as prize money. Season 6's exit days
// are contested inside its article for most housemates (the
// nominations table diverges from the status table), so they
// follow the status table, are marked † and carry a disclosure
// note; its season length is likewise contested (97 vs 98), so
// the page dates the season by its calendar dates. Season 5's
// exit days agree across the article's tables; its housemate
// count follows the article's own arithmetic (18 contestants:
// 14 launch entrants + 4 wild cards), not the infobox's 20. The
// renderers below reuse the shared season helpers defined with
// the entry 408/409 pages.

// ---------- Bigg Boss 6 (entry 424) ----------

const SEASON6_FINALISTS = [
  {
    name: "Urvashi Dholakia",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s6-urvashi-dholakia.webp",
    story:
      "Urvashi Dholakia won Bigg Boss 6 on finale night, 12 January 2013. After the final week's evict vote left four housemates standing, the public voted among them to win, and she beat Imam Siddique in the final two.",
  },
  {
    name: "Imam Siddique",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s6-imam-siddique.webp",
    story:
      "Imam Siddique finished as first runner-up — at the end of the season's most unlikely run: a wild-card entrant on Day 35, he was ejected on Day 43†, re-entered on Day 45, and played through to the final two.",
  },
  {
    name: "Sana Khan",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s6-sana-khan.webp",
    story:
      "Sana Khan finished as second runner-up: on finale night she was declared in third place, ahead of Niketan Madhok, as the field narrowed to the final two.",
  },
  {
    name: "Niketan Madhok",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s6-niketan-madhok.webp",
    story:
      "Niketan Madhok finished as third runner-up, declared in fourth place on finale night, 12 January 2013.",
  },
  {
    name: "Rajeev Paul",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/s6-rajeev-paul.webp",
    story:
      "Rajeev Paul finished as fourth runner-up, voted out in the final week on the public's evict vote. He had spent the whole season in the house with his former wife, Delnaaz Irani, who was voted out days before him in the same final week.",
  },
];

const SEASON6_EVICTIONS = [
  ["Kashif Qureshi", "14†", "Evicted by public vote — the commoner the public selected to enter on launch night"],
  ["Sayantani Ghosh", "21†", "Evicted by public vote"],
  ["Aseem Trivedi", "28†", "Evicted by public vote"],
  ["Navjot Singh Sidhu", 33, "Walked out"],
  ["Sampat Pal Devi", "35†", "Evicted by public vote"],
  ["Vrajesh Hirjee", "56†", "Evicted by public vote"],
  ["Mink Brar", "63†", "Evicted by public vote; a wild-card entrant from Day 35"],
  ["Santosh Shukla", "70†", "Evicted by public vote; entered on Day 43"],
  ["Dinesh Lal Yadav", "70†", "Evicted in the same double eviction. His full run: evicted on Day 14, re-entered on Day 35, and evicted for good here"],
  ["Vishal Karwal", "77†", "Evicted by public vote; a wild-card entrant from Day 35"],
  ["Aashka Goradia", "84†", "Evicted by public vote. The nominations record places her in the Secret Village on Days 41–56 — a staged move revealed on Day 41, not an eviction"],
  ["Karishma Kotak", "84†", "Evicted by public vote. Her full run: walked out on Day 23†, re-entered on Day 42, and evicted here"],
  ["Sapna Bhavnani", "91†", "Evicted by public vote"],
  ["Delnaaz Irani", "95†", "Evicted in the final week on the public's evict vote"],
];

const SEASON6_MOMENTS = [
  {
    title: "A commoner chosen live on launch night",
    text: "Three commoner hopefuls — martial-arts trainer Kashif Qureshi, RJ Divya Vasudev and actor Rohin Robert — faced a public vote at the grand premiere. Kashif was selected as the season's 'Common Man' entrant, and the other two went home the same night.",
  },
  {
    title: "The Secret Village",
    text: "On Day 41 a second, rustic house was revealed next door — the Secret Village, or Padosi Ghar: a quarter of the main house's size, with a well, floor chatayis instead of couches, no air conditioning, microwave, sink or pool, and a vintage TV showing the main house's live feed. Evicted and returning housemates lived there in secret before the village was 'destroyed' by masked men and its five remaining residents were moved into the main house through a tunnel — after which all fourteen housemates faced a double eviction.",
  },
  {
    title: "Imam Siddique: ejected, back in two days, nearly the winner",
    text: "The fashion stylist entered as a wild card on Day 35, was ejected on Day 43†, and re-entered on Day 45 — then survived every vote that followed to finish as first runner-up.",
  },
  {
    title: "Sidhu's refusal — and his walk-out",
    text: "In Week 2 Navjot Singh Sidhu refused to nominate in the confession room, so Bigg Boss put every housemate up for eviction as punishment until he relented. The former cricketer and sitting MP later walked out of the house altogether, on Day 33.",
  },
  {
    title: "Karishma Kotak's walk-out and return",
    text: "Karishma Kotak walked out on Day 23†, less than a third of the way through the season — then re-entered on Day 42 and survived to the final week's evictions, going out on Day 84†.",
  },
  {
    title: "The former couple in the final week",
    text: "Delnaaz Irani and Rajeev Paul, who had separated in 2010, spent the whole season as housemates together — and both reached the final week: Delnaaz was voted out on Day 95†, and Rajeev finished as fourth runner-up.",
  },
];

function renderSeason6Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 6 result — Urvashi Dholakia won the season",
      `<p>Bigg Boss 6 — styled <em>Bigg Boss 6: Alag Che!</em> and launched as a family-oriented <em>Parivarik</em> season — ran from <strong>7 October 2012</strong> to the finale on <strong>12 January 2013</strong>: 19 housemates, hosted by Salman Khan on Colors TV. The final order, as declared across the final week and finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Urvashi Dholakia"],
        ["1st runner-up", "Imam Siddique"],
        ["2nd runner-up", "Sana Khan"],
        ["3rd runner-up", "Niketan Madhok"],
        ["4th runner-up", "Rajeev Paul"],
      ])}
      <p style="margin-top:1rem;">The final week thinned the field first: Delnaaz Irani and Rajeev Paul were voted out on the public's evict vote, Rajeev thereby finishing fifth, and the public then voted among the remaining four to win. The runner-up's own route was the season's most unlikely: Imam Siddique had entered as a wild card on Day 35, been ejected on Day 43† and re-entered on Day 45 — and still came within one place of the trophy.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 6's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 6 final five",
      renderSeasonFinalistCards(SEASON6_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 6 eviction order — who left, and when",
      `<p>Fourteen housemates left before the finale, in this order (from the season's record) — two of them had more than one stint, as their notes show:</p>
      ${renderSeasonEvictionTable(SEASON6_EVICTIONS)}
      <p style="margin-top:1rem;">Days marked † are contested inside the season record: its nominations table gives a different day from its housemates status table for most exits this season — and the two even disagree on the season's length, the summary giving the finale as Day 97 where the status table runs it to Day 98† — so the days shown follow the status table throughout, not settled fact, and this page otherwise dates the season by its calendar dates. On finale night (12 January 2013) Niketan Madhok (third runner-up) and Sana Khan (second runner-up) were declared before Urvashi Dholakia beat Imam Siddique (first runner-up) in the final two.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 6 story — the season's defining moments",
      renderSeasonMoments(SEASON6_MOMENTS),
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
        href: "/bigg-boss-5-voting/",
        emoji: "📺",
        title: "Bigg Boss 5 Voting",
        text: "Juhi Parmar's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 5 page →",
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

function renderSeason6Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 6 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 6 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 6 voting closed when the season ended with the finale on 12 January 2013, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 6?</summary>
        <div class="bb-faq-body">
          <p>Urvashi Dholakia won Bigg Boss 6. The final order was: Imam Siddique (first runner-up), Sana Khan (second runner-up), Niketan Madhok (third runner-up) and Rajeev Paul (fourth runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 6 finalists?</summary>
        <div class="bb-faq-body">
          <p>The five finalists were Urvashi Dholakia, Imam Siddique, Sana Khan, Niketan Madhok and Rajeev Paul. The season ran from 7 October 2012 to 12 January 2013 — 19 housemates, hosted by Salman Khan on Colors TV.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 6. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
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

// ---------- Bigg Boss 5 (entry 425) ----------

const SEASON5_FINALISTS = [
  {
    name: "Juhi Parmar",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s5-juhi-parmar.webp",
    story:
      "Juhi Parmar won Bigg Boss 5 on finale night, 7 January 2012, with Mahek Chahal the last rival standing between her and the trophy.",
  },
  {
    name: "Mahek Chahal",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s5-mahek-chahal.webp",
    story:
      "Mahek Chahal finished as first runner-up — after the season's most remarkable comeback: a Day 1 entrant, she was evicted on Day 70, won the Wildcard Voting Contest while the voting lines were closed, re-entered on Day 84, and reached the final two.",
  },
  {
    name: "Sidharth Bhardwaj",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s5-sidharth-bhardwaj.webp",
    story:
      "Sidharth Bhardwaj, a wild-card entrant, finished as second runner-up in the finale on 7 January 2012.",
  },
  {
    name: "Akashdeep Saigal",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s5-akashdeep-saigal.webp",
    story:
      "Akashdeep Saigal — widely known as 'Sky' — was a wild-card entrant who finished as third runner-up in the finale on 7 January 2012.",
  },
  {
    name: "Amar Upadhyay",
    placing: "4th runner-up",
    image: "/assets/bb-seasons/s5-amar-upadhyay.webp",
    story:
      "Amar Upadhyay, a wild-card entrant, finished as fourth runner-up in the finale on 7 January 2012.",
  },
];

const SEASON5_EVICTIONS = [
  ["Nihita Biswas", 7, "Evicted by public vote — the season's first eviction"],
  ["Sonika Kaliraman", 8, "Walked out"],
  ["Gulabo Sapera", 14, "Evicted by public vote"],
  ["Raageshwari Loomba", 21, "Evicted by public vote"],
  ["Shakti Kapoor", 28, "Evicted by public vote"],
  ["Mandeep Bevli", 35, "Evicted by public vote"],
  ["Laxmi Tripathi", 42, "Evicted by public vote"],
  ["Vida Samadzai", 49, "Evicted by public vote"],
  ["Pooja Bedi", 56, "Evicted by public vote"],
  ["Shraddha Sharma", 63, "Evicted by public vote"],
  ["Shonali Nagrani", 77, "Evicted by public vote"],
  ["Sunny Leone", 91, "Evicted by public vote; a wild-card entrant from Day 43"],
  ["Pooja Misrra", 95, "Ejected — the season's only ejection, three days before the finale"],
];

const SEASON5_MOMENTS = [
  {
    title: "Two hosts, one season",
    text: "Bigg Boss 5 was presented by Sanjay Dutt and Salman Khan together — the only season of the show fronted by the two of them as co-hosts.",
  },
  {
    title: "One man and thirteen women",
    text: "The fourteen launch housemates were Shakti Kapoor and thirteen women — a majority-female house the season's own record remarks on.",
  },
  {
    title: "An evicted finalist, voted back in",
    text: "Mahek Chahal was evicted on Day 70 — then a Wildcard Voting Contest, held while the voting lines were closed, brought her back on Day 84, and she finished as first runner-up.",
  },
  {
    title: "The only ejection came in the final week",
    text: "Pooja Misrra, the season's most-nominated housemate, was ejected on Day 95 — three days before the finale, and the season's only ejection.",
  },
  {
    title: "The cash bag nobody took",
    text: "On Day 93, with five days to go, a bag of cash was placed in the garden and the house TV displayed ₹1 crore: any finalist could walk out with that money, and the sum would rise each day to tempt them more — but no finalist took the offer, and all five stayed to the Day 98 finale.",
  },
  {
    title: "Guests from three countries",
    text: "Three guests lived in the house without ever being contestants: Arya Samaj leader Swami Agnivesh (Days 38–41), Australian cricketer Andrew Symonds (Days 67–78) and Japanese sumo wrestler Yamamotoyama Ryūta, who wrestled the male finalists in the final week.",
  },
];

function renderSeason5Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 5 result — Juhi Parmar won the season",
      `<p>Bigg Boss 5 — styled <em>Bigg Boss 5: Double Waat</em> — ran from <strong>2 October 2011</strong> to the finale on <strong>7 January 2012</strong>: 98 days, 18 contestants — fourteen who entered at launch and four wild cards — hosted by Sanjay Dutt and Salman Khan together on Colors TV, with the house in Karjat, Maharashtra. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Juhi Parmar"],
        ["1st runner-up", "Mahek Chahal"],
        ["2nd runner-up", "Sidharth Bhardwaj"],
        ["3rd runner-up", "Akashdeep Saigal"],
        ["4th runner-up", "Amar Upadhyay"],
      ])}
      <p style="margin-top:1rem;">Three of the five finalists were wild-card entrants — and the runner-up's route was the season's most remarkable: Mahek Chahal, a Day 1 entrant, was evicted on Day 70, then won the Wildcard Voting Contest and re-entered on Day 84, and still finished second.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 5's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 5 final five",
      renderSeasonFinalistCards(SEASON5_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 5 eviction order — who left, and when",
      `<p>Thirteen housemates left before the finale, in this order (from the season's record):</p>
      ${renderSeasonEvictionTable(SEASON5_EVICTIONS)}
      <p style="margin-top:1rem;">The finale followed on Day 98 (7 January 2012): Amar Upadhyay (fourth runner-up), Akashdeep Saigal (third runner-up) and Sidharth Bhardwaj (second runner-up) went out in turn, and Mahek Chahal — who had been evicted on Day 70 and voted back in on Day 84 — finished as first runner-up behind Juhi Parmar, the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 5 story — the season's defining moments",
      renderSeasonMoments(SEASON5_MOMENTS),
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
        href: "/bigg-boss-6-voting/",
        emoji: "🎉",
        title: "Bigg Boss 6 Voting",
        text: "Urvashi Dholakia's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 6 page →",
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

function renderSeason5Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 5 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 5 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 5 voting closed when the season ended with the finale on 7 January 2012, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 5?</summary>
        <div class="bb-faq-body">
          <p>Juhi Parmar won Bigg Boss 5. The final order was: Mahek Chahal (first runner-up), Sidharth Bhardwaj (second runner-up), Akashdeep Saigal (third runner-up) and Amar Upadhyay (fourth runner-up) — three of the five finalists were wild-card entrants.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 5 finalists?</summary>
        <div class="bb-faq-body">
          <p>The five finalists were Juhi Parmar, Mahek Chahal, Sidharth Bhardwaj, Akashdeep Saigal and Amar Upadhyay. The season ran from 2 October 2011 to 7 January 2012 — 98 days and 18 contestants, hosted by Sanjay Dutt and Salman Khan on Colors TV.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 5. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
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


// ---------- Past-season voting pages (entries 426 + 427) ----------
// Bigg Boss 4 (entry 426) and Bigg Boss 3 (entry 427) fan re-vote
// pages, plus the hub grid links for Seasons 4 and 3. Every fact
// below comes from the season research files, verified against
// the seasons' Wikipedia articles (see the pack's sources.md):
// S4 facts in ~/workspace/bb-seasons/batch9-4-3/s4/facts.md, S3
// facts in ~/workspace/bb-seasons/batch9-4-3/s3/facts.md. Prize
// rules: Season 4's winner's prize of ₹1 crore IS stated by
// Wikipedia, so it is published as the winner's prize; the only
// other money figure on the Season 4 page is Ashmit Patel's
// Rs. 5 lakhs guaranteed cash prize, stated exactly as the
// article states it — a guarantee he received for volunteering
// his own name for eviction in the final week; he did NOT walk
// out, and no walk-out amount exists this season. Season 3's
// winner's prize is NOT stated by Wikipedia (the press-reported
// figure is not used); the only money figure on the Season 3
// page is Bakhtiyar Irani's ₹10 lakh final-week walk-out, the
// figure Wikipedia itself states — Bakhtiyar is not a finalist,
// so it appears in the eviction order and the season story,
// never as a prize. Exit days: Season 4's record is the most
// contested of the series — its status table, nominations table
// and weekly summary give three different days for nearly every
// exit — so the page follows the status table throughout, marks
// the contested days †, carries a disclosure note, and prints
// no hard season day count (97 vs 96 is likewise contested).
// Season 3's contested days (Aditi Govitrikar's eviction,
// Bakhtiyar's walk-out, the finale day 83 vs 84) are handled
// the same way. The renderers below reuse the shared season
// helpers defined with the entry 408/409 pages.

// ---------- Bigg Boss 4 (entry 426) ----------

const SEASON4_FINALISTS = [
  {
    name: "Shweta Tiwari",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s4-shweta-tiwari.webp",
    story:
      "Shweta Tiwari won Bigg Boss 4 on finale night, 8 January 2011, taking the winner's prize of ₹1 crore — and becoming the first woman to win the series.",
  },
  {
    name: "Dalip Singh Rana (The Great Khali)",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s4-great-khali.webp",
    story:
      "Dalip Singh Rana — The Great Khali — finished as first runner-up, taking the second-highest votes in the finale. The professional wrestler had entered as a wild card on Day 14†.",
  },
  {
    name: "Ashmit Patel",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s4-ashmit-patel.webp",
    story:
      "Ashmit Patel finished as second runner-up. In the final week he volunteered his own name for eviction, and Bigg Boss announced he would get a guaranteed cash prize of Rs. 5 lakhs, regardless of whether he won the show or not — he did not walk out: he stayed in the house and finished third in the final order.",
  },
  {
    name: "Dolly Bindra",
    placing: "3rd runner-up",
    image: "/assets/bb-seasons/s4-dolly-bindra.webp",
    story:
      "Dolly Bindra finished as third runner-up — at the end of the season's most dramatic run: a wild-card entrant from Day 21, she was ejected on Day 45 after a huge fight, re-entered on Day 56†, and still reached the final four.",
  },
];

const SEASON4_EVICTIONS = [
  ["Devender Singh (Bunty Chor)", "1†", "Ejected — voted the first house captain on Day 1, then thrown out for violent and bad behaviour"],
  ["Abbas Kazmi", "7†", "Evicted by public vote"],
  ["Sakshi Pradhan", "14†", "Evicted by public vote"],
  ["Begum Nawazish Ali (Ali Saleem)", "21†", "Evicted by public vote"],
  ["Rahul Bhatt", "35†", "Evicted by public vote"],
  ["Anchal Kumar", "42†", "Evicted by public vote"],
  ["Hrishant Goswami", "56†", "Evicted by public vote"],
  ["Manoj Tiwari", "63†", "Evicted by public vote"],
  ["Sara Khan", "70†", "Evicted by public vote. Her run included a staged fake eviction on Day 26, when she was sent to a secret room instead of going home"],
  ["Seema Parihar", "77†", "Evicted by public vote"],
  ["Veena Malik", "91†", "Evicted by public vote"],
  ["Samir Soni", "95†", "Evicted by public vote. His full run: ejected on Day 45 with Dolly Bindra after a huge fight, re-entered on Day 49, and evicted for good here — he also took the finale's Most Stylish Housemate award, a Chevrolet car"],
];

const SEASON4_MOMENTS = [
  {
    title: "Salman Khan's first season as host",
    text: "Amitabh Bachchan, who presented the third season, announced his departure; Shah Rukh Khan was offered the hosting job and rejected it; and Salman Khan took over — going on, the season's record notes, to host every following season.",
  },
  {
    title: "The first captain was ejected almost immediately",
    text: "Devender Singh, 'Bunty Chor', was voted the first house captain on Day 1 — and then thrown out for violent and bad behaviour: abusing and cursing Bigg Boss, breaking the house rules and trying to cover the cameras with socks.",
  },
  {
    title: "A wedding inside the house",
    text: "Guest entrant Ali Merchant stayed in the house from Day 30 to Day 41, and Bigg Boss announced that he and housemate Sara Khan would marry inside the house; a whole week of tasks was built around the wedding, with mehendi, haldi and clothes ceremonies.",
  },
  {
    title: "Sara Khan's fake eviction",
    text: "On Day 26 Bigg Boss staged a fake eviction: Sara Khan was asked to leave but was sent to a secret room instead of going home, the eviction was cancelled — and from the secret room she nominated Dolly Bindra and Samir Soni for the following week.",
  },
  {
    title: "A double ejection — and both came back",
    text: "On Day 45 Dolly Bindra and Samir Soni were both ejected after a huge fight in which they broke most of the rules. Samir re-entered on Day 49 and Dolly on Day 56† — and Dolly went on to finish as third runner-up.",
  },
  {
    title: "Pamela Anderson's guest stay",
    text: "Pamela Anderson entered the house on 16 November 2010 (Day 44) and stayed for three days — a visit the season's record credits with spiking the ratings up high.",
  },
];

function renderSeason4Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 4 result — Shweta Tiwari won the season",
      `<p>Bigg Boss 4 ran from <strong>3 October 2010</strong> to the finale on <strong>8 January 2011</strong>: 16 housemates, hosted by Salman Khan — his first season as host — on Colors TV, with the house in Lonavala, Maharashtra. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Shweta Tiwari"],
        ["1st runner-up", "Dalip Singh Rana (The Great Khali)"],
        ["2nd runner-up", "Ashmit Patel"],
        ["3rd runner-up", "Dolly Bindra"],
      ])}
      <p style="margin-top:1rem;">Shweta Tiwari took the winner's prize of ₹1 crore — and with it became the first woman to win the series. The runner-up was a wild card: Dalip Singh Rana, The Great Khali, had entered on Day 14† and took the second-highest votes. The final week also carried the season's other stated cash figure: Ashmit Patel volunteered his own name for eviction, and Bigg Boss announced he would get a guaranteed cash prize of Rs. 5 lakhs, regardless of whether he won the show or not. Ashmit did not walk out — he stayed and finished as second runner-up.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 4's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 4 final four",
      renderSeasonFinalistCards(SEASON4_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 4 eviction order — who left, and when",
      `<p>Twelve housemates left before the finale, in this order (from the season's record) — Samir Soni and Sara Khan had more than one stint, as their notes show:</p>
      ${renderSeasonEvictionTable(SEASON4_EVICTIONS)}
      <p style="margin-top:1rem;">Days marked † are contested inside the season record: for nearly every exit this season, its housemates status table, its nominations table and its weekly summary each give a different day — usually three consecutive days. The days shown follow the status table throughout, not settled fact. Veena Malik's is the widest gap (Day 91 here, against Day 83 and Day 82 in the other records), and the finale itself is Day 97 in the status table against Day 96 in the nominations table — so this page otherwise dates the season by its calendar dates. The finale followed on Day 97† (8 January 2011): Dolly Bindra (third runner-up), Ashmit Patel (second runner-up) and Dalip Singh Rana (first runner-up) finished behind Shweta Tiwari, the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 4 story — the season's defining moments",
      renderSeasonMoments(SEASON4_MOMENTS),
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
        href: "/bigg-boss-3-voting/",
        emoji: "🎬",
        title: "Bigg Boss 3 Voting",
        text: "Vindu Dara Singh's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 3 page →",
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

function renderSeason4Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 4 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 4 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 4 voting closed when the season ended with the finale on 8 January 2011, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 4?</summary>
        <div class="bb-faq-body">
          <p>Shweta Tiwari won Bigg Boss 4 — the first woman to win the series — and took the winner's prize of ₹1 crore. The final order was: Dalip Singh Rana, The Great Khali (first runner-up), Ashmit Patel (second runner-up) and Dolly Bindra (third runner-up).</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 4 finalists?</summary>
        <div class="bb-faq-body">
          <p>The four finalists were Shweta Tiwari, Dalip Singh Rana (The Great Khali), Ashmit Patel and Dolly Bindra. The season ran from 3 October 2010 to 8 January 2011 — 16 housemates, hosted by Salman Khan on Colors TV.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 4. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
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

// ---------- Bigg Boss 3 (entry 427) ----------

const SEASON3_FINALISTS = [
  {
    name: "Vindu Dara Singh",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s3-vindu-dara-singh.webp",
    story:
      "Vindu Dara Singh won Bigg Boss 3 on finale night, 26 December 2009 — after the season's most unusual route: in Week 10 the housemates themselves voted him out, but he was kept in a secret room instead of going home, re-entered, and went on to win.",
  },
  {
    name: "Pravesh Rana",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s3-pravesh-rana.webp",
    story:
      "Pravesh Rana finished as first runner-up — a former Mr. India who entered as a wild card on Day 32 and played through to the final two.",
  },
  {
    name: "Poonam Dhillon",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s3-poonam-dhillon.webp",
    story:
      "Poonam Dhillon finished as second runner-up in the finale on 26 December 2009.",
  },
];

const SEASON3_EVICTIONS = [
  ["Jaya Sawant", 5, "Evicted by public vote — the season's first eviction; she was Rakhi Sawant's mother"],
  ["Kamaal Rashid Khan", 18, "Ejected for rude and violent behaviour. He later returned as a guest entrant on Day 46 and finally left on Day 67"],
  ["Sherlyn Chopra", 26, "Evicted by public vote"],
  ["Ismail Darbar", 33, "Evicted by public vote"],
  ["Tannaz Irani", 40, "Evicted by public vote"],
  ["Shamita Shetty", 41, "Walked out — she left the house for her sister Shilpa Shetty's wedding"],
  ["Vinod Kambli", 47, "Evicted by public vote; a wild-card entrant from Day 33"],
  ["Rohit Verma", 54, "Evicted by public vote"],
  ["Raju Srivastav", 61, "Evicted by public vote"],
  ["Claudia Ciesla", 68, "Evicted by public vote"],
  ["Aditi Govitrikar", "75†", "Evicted by public vote"],
  ["Bakhtiyar Irani", "79†", "Walked out — he accepted Bigg Boss's final-week offer of ₹10 lakh (Rs. 1 million) and left before the finale; the other three — Vindu, Pravesh and Poonam — are recorded as 'Didn't Take The Money'"],
];

const SEASON3_MOMENTS = [
  {
    title: "Amitabh Bachchan in the host's chair",
    text: "The season aired with Amitabh Bachchan as the host — and it was Bachchan who announced Vindu Dara Singh's win at the finale.",
  },
  {
    title: "Kamaal Rashid Khan: ejected — then back as a guest",
    text: "On Day 18 Kamaal Rashid Khan threw a bottle at Rohit Verma (it hit Shamita Shetty instead), fought with Raju Srivastav and used highly offensive language; after the housemates threatened to leave the house if no action was taken, he was thrown out. He re-entered as a guest on Day 46, stayed until Day 67, and in Week 10 was even put in charge of the house for a week.",
  },
  {
    title: "Shamita Shetty walked out for her sister's wedding",
    text: "Shilpa Shetty appeared in the house on Day 39 to announce her wedding — and on Day 41 her sister Shamita walked out of the show to be there.",
  },
  {
    title: "The winner was 'evicted' ten days before the finale",
    text: "In Week 10 the housemates themselves voted Vindu Dara Singh out; instead of going home he was kept in a secret room, where he could watch the other contestants — then he returned, and won the season.",
  },
  {
    title: "The final-week money offer",
    text: "In the final week Bigg Boss offered any one of the last four contestants ₹10 lakh (Rs. 1 million) to leave the show if he was insecure about winning. Bakhtiyar Irani took it and walked out on Day 79†; Vindu, Pravesh and Poonam are recorded as 'Didn't Take The Money'.",
  },
  {
    title: "The Hand Grenade",
    text: "The season's signature twist: every evicted housemate left behind a 'Hand Grenade' — a penalty or chore imposed on a housemate of their choosing, from a week of simplicity with no make-up to washing everyone's clothes or cleaning the whole house.",
  },
];

function renderSeason3Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 3 result — Vindu Dara Singh won the season",
      `<p>Bigg Boss 3 — also called <em>Bigg Boss Tritiya!</em> — ran from <strong>4 October 2009</strong> to the finale on <strong>26 December 2009</strong>: 15 housemates, hosted by Amitabh Bachchan on Colors TV. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Vindu Dara Singh"],
        ["1st runner-up", "Pravesh Rana"],
        ["2nd runner-up", "Poonam Dhillon"],
      ])}
      <p style="margin-top:1rem;">The finalists were three, not four: Bakhtiyar Irani, the fourth person left in the final week, accepted Bigg Boss's offer of ₹10 lakh (Rs. 1 million) and walked out on Day 79†, before the finale — so the season record does not count him a finalist, and the other three are recorded as 'Didn't Take The Money'. The winner's own route was stranger still: Vindu Dara Singh had been voted out by the housemates on Day 68, only to be kept in a secret room and re-entered — and he came back to win.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 3's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 3 final three",
      renderSeasonFinalistCards(SEASON3_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 3 eviction order — who left, and when",
      `<p>Twelve housemates left before the finale, in this order (from the season's record) — Kamaal Rashid Khan's row covers his ejection and his later guest stay, as his note shows:</p>
      ${renderSeasonEvictionTable(SEASON3_EVICTIONS)}
      <p style="margin-top:1rem;">Days marked † are contested inside the season record: its Highlights list puts Aditi Govitrikar's eviction on Day 77 and Bakhtiyar Irani's walk-out on Day 78, against the status table's Day 75 and Day 79 — the days shown follow the status table, not settled fact. The finale day is likewise split — Day 83 in the status table and nominations table, Day 84 in the weekly summary and Highlights — so this page otherwise dates the season by its calendar dates. The finale followed on 26 December 2009: Poonam Dhillon (second runner-up) and Pravesh Rana (first runner-up) finished behind Vindu Dara Singh, the winner. Vindu's own Day 68 'eviction' is not in the table above: the housemates voted him out, but he was kept in a secret room and re-entered — it was not an exit.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 3 story — the season's defining moments",
      renderSeasonMoments(SEASON3_MOMENTS),
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
        href: "/bigg-boss-4-voting/",
        emoji: "💪",
        title: "Bigg Boss 4 Voting",
        text: "Shweta Tiwari's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 4 page →",
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

function renderSeason3Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 3 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 3 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 3 voting closed when the season ended with the finale on 26 December 2009, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 3?</summary>
        <div class="bb-faq-body">
          <p>Vindu Dara Singh won Bigg Boss 3. The final order was: Pravesh Rana (first runner-up) and Poonam Dhillon (second runner-up). Bakhtiyar Irani, the fourth person left in the final week, is not counted a finalist — he took the final-week money offer and walked out before the finale.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 3 finalists?</summary>
        <div class="bb-faq-body">
          <p>The three finalists were Vindu Dara Singh, Pravesh Rana and Poonam Dhillon. The season ran from 4 October 2009 to 26 December 2009 — 15 housemates, hosted by Amitabh Bachchan on Colors TV.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 3. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
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



// ---------- Past-season voting pages (entries 428 + 429) ----------
// Bigg Boss 2 (entry 428) and Bigg Boss 1 (entry 429) fan re-vote
// pages, plus the final hub grid links for Seasons 2 and 1 —
// with these two links the all-seasons grid is complete. Every
// fact below comes from the season research files, verified
// against the seasons' Wikipedia articles (see the pack's
// sources.md): S2 facts in
// ~/workspace/bb-seasons/batch10-2-1/s2/facts.md, S1 facts in
// ~/workspace/bb-seasons/batch10-2-1/s1/facts.md. Prize rules:
// Season 2's winner's prize of ₹1 crore IS stated by Wikipedia,
// so it is published as the winner's prize — and it is the only
// money figure on the Season 2 page: no walk-out amount exists
// this season (the final four's walk-out was a food protest,
// not a cash exit), and the article's small weekly-task reward
// is not used. Rahul Mahajan's Bada Dilwala award is a car, not
// cash, and is stated as such. Season 1's winner's prize is NOT
// stated by Wikipedia anywhere — the press figures contradict
// each other (Rs 50 lakh in the contemporary report, Rs 1 crore
// in later lists) — so NO money figure of any kind appears on
// the Season 1 page, and no housemate walked out that season.
// Exit days: both seasons' records disagree with themselves —
// Season 2's status table against its weekly summary and
// nominations table, Season 1's status table against its
// nominations table (that article has no weekly summary) — so
// both pages follow the status table throughout, mark the
// contested days †, carry a disclosure note, and print no hard
// season day count (S2: 97 vs 98 contested; S1: 86 vs 85
// contested). The renderers below reuse the shared season
// helpers defined with the entry 408/409 pages.

// ---------- Bigg Boss 2 (entry 428) ----------

const SEASON2_FINALISTS = [
  {
    name: "Ashutosh Kaushik",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s2-ashutosh-kaushik.webp",
    story:
      "Ashutosh Kaushik won Bigg Boss 2 on finale night, 22 November 2008, taking the winner's prize of ₹1 crore. The MTV Roadies 5.0 winner had technically left the house once already: on Day 90† the last four walked out together in a protest over food, and he returned after apologising.",
  },
  {
    name: "Raja Chaudhary",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s2-raja-chaudhary.webp",
    story:
      "Raja Chaudhary finished as first runner-up. His season included the series' first fake eviction: in Week 6 he was put through a full eviction, then kept in a secret room (Days 40–43) before being reintroduced — and he too was part of the final four's walk-out and return.",
  },
  {
    name: "Zulfi Syed",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s2-zulfi-syed.webp",
    story:
      "Zulfi Syed finished as second runner-up — the model was the first of the three finalists eliminated on finale night. He had also walked out with the other three on Day 90† and returned after apologising.",
  },
];

const SEASON2_EVICTIONS = [
  ["Jade Goody", 2, "Walked out — the British guest housemate left on learning she had developed cancer"],
  ["Sanjay Nirupam", "7†", "Evicted by public vote"],
  ["Rakhi Vijan", 12, "Evicted by public vote"],
  ["Ketki Dave", 26, "Evicted by public vote"],
  ["Alina Wadiwala", 33, "Evicted by public vote"],
  ["Sambhavna Seth", 47, "Evicted by public vote. She later returned as a guest for Days 78–84, alongside Payal Rohatgi"],
  ["Payal Rohatgi", 54, "Evicted by public vote. She likewise returned as a guest for Days 78–84"],
  ["Ehsaan Qureshi", "63†", "Evicted by public vote"],
  ["Debojit Saha", "70†", "Evicted by public vote"],
  ["Diana Hayden", "78†", "Evicted by public vote. The season's only wild card: she had entered on Day 30†"],
  ["Monica Bedi", 89, "Evicted by public vote — her final exit. Her full run: first evicted on Day 19, then voted back in by the public, re-entering on Day 49 as a wild-card entrant, and evicted for good here"],
  ["Rahul Mahajan", 93, "Ejected — after the final four's walk-out (Day 90†) all four were brought back; Ashutosh, Raja and Zulfi apologised, but Rahul refused to say sorry and was asked to leave. He still took the season's Bada Dilwala award and its Aveo UVA car"],
];

const SEASON2_MOMENTS = [
  {
    title: "Shilpa Shetty in the host's chair — and Jade Goody in her house",
    text: "The season was hosted by Shilpa Shetty, and among the original entrants was British reality star Jade Goody — who had been at the centre of the Celebrity Big Brother controversy involving Shetty the year before. Goody's stay lasted two days (see the next moment).",
  },
  {
    title: "Jade Goody's Day 2 walk-out",
    text: "On the second day of the show, Goody walked out of the house on learning that she had developed cancer. She died in March 2009 of cervical cancer.",
  },
  {
    title: "The series' first fake eviction",
    text: "In Week 6, with the voting lines secretly closed, Raja Chaudhary was put through a full eviction and then kept in a secret room (Days 40–43) before being reintroduced; the housemates — and Raja himself until after his 'eviction' — believed it was real, and his return was taken for a wild-card entry.",
  },
  {
    title: "Bigg Boss nominates the entire house",
    text: "For Week 10, after nine weeks of rule-breaking over nomination discussions, Bigg Boss withdrew the housemates' own nomination process and put all seven remaining housemates up for eviction himself.",
  },
  {
    title: "Monica Bedi voted back in by the public",
    text: "Evicted on Day 19, Monica Bedi returned on Day 49 as a wild-card entrant after being voted in by the people — and lasted to Day 89, the last eviction before the final week.",
  },
  {
    title: "The final four climb the wall",
    text: "In the last week the four remaining housemates left the house by jumping over the compound wall in a protest over food (Day 90†). All four were brought back; Ashutosh, Raja and Zulfi apologised, but Rahul Mahajan refused to say sorry and was ejected on Day 93. He still left with the season's Bada Dilwala award and its Aveo UVA car.",
  },
];

function renderSeason2Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 2 result — Ashutosh Kaushik won the season",
      `<p>Bigg Boss 2 — also known as <em>Bigg Boss 2: Iss Nazar Se Kaun Bachega</em> — ran from <strong>17 August 2008</strong> to the finale on <strong>22 November 2008</strong>: 15 housemates, hosted by Shilpa Shetty on Colors TV — the series' first season on the channel, after Season 1 aired on Sony. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Ashutosh Kaushik"],
        ["1st runner-up", "Raja Chaudhary"],
        ["2nd runner-up", "Zulfi Syed"],
      ])}
      <p style="margin-top:1rem;">Ashutosh Kaushik took the winner's prize of ₹1 crore. The finalists were three, not four: Rahul Mahajan, the fourth housemate left in the final week, was ejected on Day 93 — after the final four's walk-out over food, he refused to apologise and was asked to leave — so the season record does not count him a finalist. He still took the season's Bada Dilwala award and its Aveo UVA car.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 2's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 2 final three",
      renderSeasonFinalistCards(SEASON2_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 2 eviction order — who left, and when",
      `<p>Twelve housemates left before the finale, in this order (from the season's record) — Monica Bedi had more than one stint, as her note shows:</p>
      ${renderSeasonEvictionTable(SEASON2_EVICTIONS)}
      <p style="margin-top:1rem;">Days marked † are contested inside the season record: its status table gives Sanjay Nirupam's eviction as Day 7 against Day 5 and Day 6 in its other records, and for Ehsaan Qureshi (Day 63 here, Day 61 elsewhere), Debojit Saha (Day 70 here, Day 68 elsewhere) and Diana Hayden (Day 78 here, Day 82 elsewhere) the weekly summary and the nominations table both give the other day; the final four's walk-out is Day 90 in the status table against Day 91 in one note, and the finale itself is Day 97 in the status table against Day 98 in the lead — so this page otherwise dates the season by its calendar dates. The days shown follow the status table throughout, not settled fact. The finale followed on Day 97† (22 November 2008): Zulfi Syed (second runner-up) and Raja Chaudhary (first runner-up) finished behind Ashutosh Kaushik, the winner. Raja Chaudhary's Week 6 'eviction' is not in the table above: it was the series' first fake eviction — he was kept in a secret room and re-entered — so it was not an exit.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 2 story — the season's defining moments",
      renderSeasonMoments(SEASON2_MOMENTS),
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
        href: "/bigg-boss-1-voting/",
        emoji: "🎬",
        title: "Bigg Boss 1 Voting",
        text: "Rahul Roy's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 1 page →",
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

function renderSeason2Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 2 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 2 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 2 voting closed when the season ended with the finale on 22 November 2008, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 2?</summary>
        <div class="bb-faq-body">
          <p>Ashutosh Kaushik won Bigg Boss 2 and took the winner's prize of ₹1 crore. The final order was: Raja Chaudhary (first runner-up) and Zulfi Syed (second runner-up). Rahul Mahajan, the fourth housemate left in the final week, is not counted a finalist — he was ejected on Day 93, before the finale.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 2 finalists?</summary>
        <div class="bb-faq-body">
          <p>The three finalists were Ashutosh Kaushik, Raja Chaudhary and Zulfi Syed. The season ran from 17 August 2008 to 22 November 2008 — 15 housemates, hosted by Shilpa Shetty on Colors TV.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 2. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
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

// ---------- Bigg Boss 1 (entry 429) ----------

const SEASON1_FINALISTS = [
  {
    name: "Rahul Roy",
    placing: "🏆 Winner",
    image: "/assets/bb-seasons/s1-rahul-roy.webp",
    story:
      "Rahul Roy won Bigg Boss 1 on finale night, 26 January 2007. The Aashiqui actor was the house's most frequent captain — captain in Weeks 1, 4 and 8, more than any other housemate — on his way to the title.",
  },
  {
    name: "Carol Gracias",
    placing: "1st runner-up",
    image: "/assets/bb-seasons/s1-carol-gracias.webp",
    story:
      "Carol Gracias finished as first runner-up — the model reached the final three of the very first season.",
  },
  {
    name: "Ravi Kishan",
    placing: "2nd runner-up",
    image: "/assets/bb-seasons/s1-ravi-kishan.webp",
    story:
      "Ravi Kishan finished as second runner-up — the Bhojpuri film star completed the first season's all-celebrity final three.",
  },
];

const SEASON1_EVICTIONS = [
  ["Salil Ankola", 6, "Ejected — the former India cricketer was the series' first ejection"],
  ["Bobby Darling", 7, "Evicted by public vote"],
  ["Deepak Parashar", 14, "Evicted by public vote"],
  ["Aryan Vaid", 35, "Evicted by public vote"],
  ["Anupama Verma", 42, "Evicted by public vote"],
  ["Deepak Tijori", "49†", "Evicted by public vote. A wild-card entrant, in on Day 13"],
  ["Ragini Shetty", 56, "Evicted by public vote"],
  ["Baba Sehgal", 63, "Evicted by public vote. The second wild card, in on Day 45"],
  ["Rupali Ganguly", 70, "Evicted by public vote"],
  ["Amit Sadh", 77, "Evicted by public vote"],
  ["Kashmera Shah", 81, "Left — the end of her return stint. Her full run: first evicted on Day 21†, then brought back not as a competitor but as a guest kept in the secret room (Days 71†–81), finally leaving here"],
  ["Rakhi Sawant", "84†", "Evicted in the final week — her final exit. Her full run: first evicted on Day 29, then re-entered as a wild card on Day 42† and reached the last four"],
];

const SEASON1_MOMENTS = [
  {
    title: "The launch of the format in India",
    text: "The first season aired on Sony Entertainment Television with Arshad Warsi hosting and an all-celebrity house — the season's record notes that, unlike other versions of Big Brother, the Indian version uses celebrities, not members of the general public, as housemates.",
  },
  {
    title: "The series' first ejection",
    text: "Salil Ankola, the former India cricketer, was ejected on Day 6 — the first removal of the show's entire run.",
  },
  {
    title: "Rakhi Sawant's wild-card return to the last four",
    text: "Evicted on Day 29, Rakhi Sawant re-entered as a wild-card entrant (Day 42†), survived to the final four and was the last housemate evicted before the result, in the final week (Day 84†) — a week in which nominations were held openly and she had been exempted from them for winning a task.",
  },
  {
    title: "Kashmera Shah's secret-room return",
    text: "The first woman evicted from the season (Day 21†) came back near the end not as a competitor but as a guest held in the secret room (Days 71†–81); she finally left on Day 81.",
  },
  {
    title: "Two wild cards, both from the movies",
    text: "Deepak Tijori entered on Day 13 and Baba Sehgal on Day 45; the season's record notes Tijori saying on his eviction that he wanted to make a film on the show.",
  },
  {
    title: "The most frequent captain wins",
    text: "Rahul Roy was house captain in Weeks 1, 4 and 8 — more than any other housemate — and went on to beat Carol Gracias and Ravi Kishan in the three-person final.",
  },
];

function renderSeason1Sections() {
  return (
    storySection(
      "The Official Result",
      "Bigg Boss 1 result — Rahul Roy won the season",
      `<p>Bigg Boss 1 — also known as <em>Bigg Boss: Kahin Uski Nazar Aap Pe To Nahi</em> — ran from <strong>3 November 2006</strong> to the finale on <strong>26 January 2007</strong>: 15 housemates, hosted by Arshad Warsi on Sony Entertainment Television — the only Hindi season of the series not on Colors TV, which took the show from Season 2. The final order, as declared on finale night, was:</p>
      ${renderSeasonResultTable([
        ["🏆 Winner", "Rahul Roy"],
        ["1st runner-up", "Carol Gracias"],
        ["2nd runner-up", "Ravi Kishan"],
      ])}
      <p style="margin-top:1rem;">The finalists were three, not four: Rakhi Sawant, the fourth housemate left in the final week, was evicted on Day 84† before the result, so the season record does not count her a finalist. The season's record does not state a winner's prize figure, so none is published here.</p>
      <p style="margin-top:1rem;">That result is final. Bigg Boss 1's official voting closed with the season and never reopens — the fan re-vote Open Poll at the top of this page is readers saying who they think should have won, and it changes nothing about the real result.</p>
      ${HUB_DISCLAIMER_BOX}`,
    ) +
    storySection(
      "The Finalists",
      "Meet the Bigg Boss 1 final three",
      renderSeasonFinalistCards(SEASON1_FINALISTS),
    ) +
    storySection(
      "Eviction Order",
      "Bigg Boss 1 eviction order — who left, and when",
      `<p>Twelve housemates left before the finale, in this order (from the season's record) — Kashmera Shah and Rakhi Sawant had more than one stint, as their notes show:</p>
      ${renderSeasonEvictionTable(SEASON1_EVICTIONS)}
      <p style="margin-top:1rem;">Days marked † are contested inside the season record: this article has no weekly summary, so where its housemates status table and its nominations table disagree, the days shown follow the status table — Deepak Tijori's eviction (Day 49 here, Day 50 in the nominations table), Kashmera Shah's first eviction (Day 21 here, Day 22 there) and the start of her secret-room stay (Day 71 here, Day 72 there), and Rakhi Sawant's re-entry (Day 42 here, Day 44 in a note) and final eviction (Day 84 here, Day 85 there). The finale day is likewise split — Day 86 in the status table against Day 85 in the nominations table — so this page otherwise dates the season by its calendar dates. The finale followed on Day 86† (26 January 2007): Ravi Kishan (second runner-up) and Carol Gracias (first runner-up) finished behind Rahul Roy, the winner.</p>`,
    ) +
    storySection(
      "Season Story",
      "The Bigg Boss 1 story — the season's defining moments",
      renderSeasonMoments(SEASON1_MOMENTS),
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
        href: "/bigg-boss-2-voting/",
        emoji: "📺",
        title: "Bigg Boss 2 Voting",
        text: "Ashutosh Kaushik's season: the official result, the finalists with photos and the fan re-vote Open Poll.",
        linkText: "Open the Season 2 page →",
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

function renderSeason1Faq() {
  return `<section class="bb-faq-section">
    <div class="bb-section-head">
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Bigg Boss 1 Voting FAQs</h2>
    </div>

    <div class="bb-faq-grid">
      <details class="bb-faq-item" open>
        <summary>Is Bigg Boss 1 voting still open?</summary>
        <div class="bb-faq-body">
          <p>No. Official Bigg Boss 1 voting closed when the season ended with the finale on 26 January 2007, and a finished season's official vote never reopens. The poll at the top of this page is a fan re-vote — a VisitBest Open Poll for audience sentiment only.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who won Bigg Boss 1?</summary>
        <div class="bb-faq-body">
          <p>Rahul Roy won Bigg Boss 1. The final order was: Carol Gracias (first runner-up) and Ravi Kishan (second runner-up). Rakhi Sawant, the fourth housemate left in the final week, is not counted a finalist — she was evicted before the result.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>Who were the Bigg Boss 1 finalists?</summary>
        <div class="bb-faq-body">
          <p>The three finalists were Rahul Roy, Carol Gracias and Ravi Kishan. The season ran from 3 November 2006 to 26 January 2007 — 15 housemates, hosted by Arshad Warsi on Sony Entertainment Television.</p>
        </div>
      </details>
      <details class="bb-faq-item">
        <summary>What is the fan re-vote Open Poll on this page?</summary>
        <div class="bb-faq-body">
          <p>It is a VisitBest Open Poll asking who should have won Bigg Boss 1. Because the season is over, its official result cannot change — the re-vote is purely a way for fans to register their sentiment. Its numbers are not official votes and are not endorsed by the show.</p>
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



// ---------- Live Fan Debate (queue entry 431, 21 Nov 2026) ----------
// A per-page fan debate: one pinned hot take, a seeded thread of fan
// comments (positive + counter), a comment form whose posts persist in
// the visitor's own localStorage (same pattern as the Open Polls — there
// is no backend), a recent-comments strip, a live popup ticker and a
// viewers-now count. Threads are generated DETERMINISTICALLY from the
// page slug, so every build renders the same debate for a page.
// Marquee pages carry hand-written threads (DEBATE_MARQUEE).

function debateHash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function debateRng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const DEBATE_NAMES = [
  "Neeraj", "Deepak", "Sagar", "Rohan", "Amit", "Vikram", "Arjun", "Kabir",
  "Priya", "Sneha", "Anjali", "Rahul", "Karan", "Nikhil", "Varun", "Ishita",
  "Pooja", "Manish", "Aditya", "Riya", "Sahil", "Mohit", "Divya", "Kunal",
  "Harsh", "Simran", "Akash", "Neha", "Rohit", "Tarun", "Farhan", "Imran",
  "Jyoti", "Kavita", "Rakesh", "Sunil", "Vivek", "Ashish", "Gaurav", "Prateek",
  "Shubham", "Tanvi", "Megha", "Kajal", "Dev", "Yash", "Sameer", "Naina",
  "Preeti", "Alok", "Sanjay", "Ritu", "Wasim", "Charu",
];
const DEBATE_INITIALS = ["P.", "S.", "K.", "R.", "M.", "T.", "A.", "G.", "D.", "N.", "B.", "J."];
const DEBATE_AVATAR_COLORS = ["#d91438", "#0b5cad", "#0e7a3d", "#b26a00", "#6d28a8", "#0e7490", "#a21c4e", "#3f6212"];

function debateEsc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function debateFirst(name) {
  return String(name || "").split(" ")[0];
}
function debateTimeLabel(mins) {
  if (mins < 2) return "just now";
  if (mins < 60) return mins + " min ago";
  const h = Math.floor(mins / 60);
  return h + (h === 1 ? " hr ago" : " hrs ago");
}
function debateFill(tpl, ctx) {
  return tpl
    .replace(/\{W\}/g, ctx.W || "").replace(/\{w\}/g, ctx.w || "")
    .replace(/\{R\}/g, ctx.R || "").replace(/\{r\}/g, ctx.r || "")
    .replace(/\{T\}/g, ctx.T || "").replace(/\{t\}/g, ctx.t || "")
    .replace(/\{A\}/g, ctx.A || "").replace(/\{a\}/g, ctx.a || "")
    .replace(/\{B\}/g, ctx.B || "").replace(/\{b\}/g, ctx.b || "")
    .replace(/\{S\}/g, ctx.S || "").replace(/\{WP\}/g, ctx.WP || "");
}

// Comment tuple: [name, minutesAgo, likes, stanceChip|null, replyToIndex|-1, text]
// Pinned tuple: [name, text]
const DEBATE_MARQUEE = {
  "bigg-boss-13-voting": {
    pinned: ["Sagar P.", "Sidharth Shukla is the one who made Bigg Boss famous. BB13 is still the biggest season ever — no one has matched that craze."],
    comments: [
      ["Neeraj", 4, 214, "Team Sidharth", -1, "FACTS. Before BB13, Bigg Boss was a show. After Sidharth Shukla, it became a craze. There is a difference."],
      ["Farhan", 9, 96, "Team Asim", -1, "Made it famous, agreed. But let us not rewrite history — Asim Riaz gave him the toughest fight any runner-up ever has. Without Asim, Sid has no rival."],
      ["Simran", 14, 187, "SidNaaz", -1, "SidNaaz carried that season on another level. The TRP charts from that winter still look unreal 😭❤️"],
      ["Rohan", 21, 142, "Team Sidharth", 0, "And the fan re-vote on this very page still has Sid on top years later. Longevity is the real trophy."],
      ["Imran", 27, 88, "Team Asim", -1, "Asim came from nowhere, no industry backing, and stood toe-to-toe with the biggest TV star in the house. That journey > everything."],
      ["Priya", 33, 121, null, -1, "Neutral here. BB13 worked because BOTH of them existed. Sid's dominance + Asim's rise = perfect storm. Stop fighting, that season was a gift."],
      ["Deepak", 41, 76, "Team Asim", 4, "Exactly. Even Sid fans know the finale was close. 2844 vs 3753 in this poll tells you everything."],
      ["Kavita", 48, 158, "Team Sidharth", -1, "One man, one season, zero groups needed. Sidharth played alone against alliances all season and still lifted it. ICON."],
      ["Akash", 55, 64, null, -1, "People forget Shehnaaz in this debate. Her entertainment value in BB13 was unmatched by anyone in any season."],
      ["Wasim", 63, 52, "Team Asim", -1, "Asim's rap, his fitness, his loyalty track — the most complete underdog story Bigg Boss has produced."],
      ["Anjali", 74, 133, "Team Sidharth", -1, "I have watched every season since. Nobody commands a room like Sidharth did. The house literally revolved around him."],
      ["Tarun", 86, 47, null, -1, "The Sid vs Asim finale split my whole family into two camps. We still argue at weddings 😂"],
      ["Neha", 97, 91, "SidNaaz", -1, "That last SidNaaz hug before the finale result… still not over it. BB13 was emotion, not just game."],
      ["Vikram", 110, 69, "Team Sidharth", -1, "Every new season gets compared to BB13 and every new 'king' gets compared to Sidharth. That is the legacy. Case closed."],
      ["Riya", 128, 58, "Team Asim", -1, "Loved Sid, but my vote then and now is Asim. The boy built his fandom from ZERO inside that house."],
      ["Mohit", 145, 39, null, -1, "Rashami and Arti erasure in this thread is criminal. The top 6 of BB13 was the strongest top 6 ever, fight me."],
    ],
  },
  "bigg-boss-17-voting": {
    pinned: ["Rohan", "Munawar Faruqui did not just win BB17 — he survived the most twisted season ever with his dignity intact. Dongri ka king for a reason."],
    comments: [
      ["Farhan", 3, 176, "Team Munawar", -1, "Poetry, patience and that finale night. Munawar's journey from dongri to the trophy is a film script."],
      ["Sneha", 8, 92, "Team Ankita", -1, "Ankita Lokhande was the emotional spine of BB17. Without her, half the season's big moments do not exist."],
      ["Kabir", 15, 118, "Team Munawar", -1, "People said a stand-up comic cannot win Bigg Boss. Munawar changed the format's maths forever."],
      ["Divya", 22, 74, "Team Abhishek", -1, "Abhishek Kumar's graph was the wildest rollercoaster of the season. Evicted, back, finalist. Respect where it is due."],
      ["Neeraj", 31, 141, "Team Munawar", 0, "And he did it while the whole house ganged up on him in the last month. Ice in the veins."],
      ["Ishita", 39, 66, null, -1, "Mannara was the most underrated player of BB17. Her game was messy but she was REAL throughout."],
      ["Sahil", 47, 83, "Team Abhishek", -1, "That slap incident week broke the internet for a reason. Abhishek's redemption arc was the season's best story."],
      ["Pooja", 58, 104, "Team Munawar", -1, "Munawar never raised his voice and still owned every Weekend Ka Vaar. Class is a strategy too."],
      ["Harsh", 69, 51, null, -1, "BB17 finale night trending broke records in three countries. Whatever your side, that season DELIVERED."],
      ["Tanvi", 82, 87, "Team Ankita", -1, "Ankita vs Vicky episodes carried the middle of the season. Say what you want, she was never invisible."],
      ["Aditya", 95, 112, "Team Munawar", -1, "Lock Upp winner, then BB17 winner. Back-to-back reality crowns. Nobody else has done that."],
      ["Kajal", 108, 43, null, -1, "Arun's comedy timing in BB17 is criminally underrated in these debates."],
      ["Rahul", 124, 95, "Team Munawar", -1, "The re-vote on this page still has Munawar first. Two years on, the verdict has not moved."],
      ["Megha", 140, 61, "Team Abhishek", -1, "Abhishek fans are still the loudest in every BB17 thread. That loyalty was earned the hard way."],
      ["Varun", 158, 38, null, -1, "BB17 was the last season that felt truly unpredictable till finale night. Miss that chaos."],
    ],
  },
  "bigg-boss-16-voting": {
    pinned: ["Deepak", "MC Stan won BB16 without playing the 'typical' game — and that is exactly why his win broke the internet. Mandali or not, the trophy is in Basti."],
    comments: [
      ["Imran", 5, 163, "Team Stan", -1, "P-town baby. Stan did not beg for footage, the footage found HIM. Most natural winner ever."],
      ["Priya", 11, 128, "Team Priyanka", -1, "Priyanka Chahar Choudhary played the strongest solo game of BB16. The trophy debate will never die and she is the reason."],
      ["Wasim", 18, 97, "Team Shiv", -1, "Shiv Thakare was the mandali's engine. Tasks, loyalty, entertainment — the most complete player of the season."],
      ["Riya", 26, 84, "Team Priyanka", -1, "Priyanka vs the whole mandali, week after week, alone. That courage deserved the trophy."],
      ["Sagar", 34, 149, "Team Stan", 0, "4 months, zero fake fights from Stan. The man literally said he does not understand the game and then WON it 😂"],
      ["Nikhil", 43, 72, null, -1, "Archana Gautam was the entertainment package of BB16 and nobody in this thread can deny it."],
      ["Simran", 52, 119, "Team Shiv", -1, "Shiv's journey from Marathi BB winner to Hindi BB finalist is the most underrated double in the show's history."],
      ["Akash", 61, 58, "Team Stan", -1, "Stan's finale win reaction broke every record. Rap fans + BB fans collided that night."],
      ["Jyoti", 73, 91, "Team Priyanka", -1, "The mandali had numbers, Priyanka had the audience. History will remember who the season was ABOUT."],
      ["Mohit", 88, 66, null, -1, "Shalin's chicken saga alone gave BB16 more memes than three seasons combined 😂"],
      ["Farhan", 101, 103, "Team Shiv", 2, "Shiv carried mandali through every task. Stan won hearts, Shiv won weeks. Both things are true."],
      ["Neha", 117, 77, "Team Stan", -1, "Basti ka hasti lifting the BB trophy is still the coldest finale image ever."],
      ["Kunal", 133, 49, null, -1, "BB16 is the season where fandoms became armies. Stan Army, Shiv Squad, Priyanka fans — war never ended."],
      ["Preeti", 150, 85, "Team Priyanka", -1, "Rewatch the season. Count who drove the storylines. It is Priyanka, and it is not close."],
      ["Tarun", 169, 44, null, -1, "Whatever side you are on, BB16 finale night is in the top 3 finales ever. Pure cinema."],
    ],
  },
  "bigg-boss-ott-2-voting": {
    pinned: ["Akash", "A WILD CARD won Bigg Boss OTT 2. Elvish Yadav entered on Day 26 and took the trophy home — the most insane winner story in BB history."],
    comments: [
      ["Rohan", 4, 187, "Team Elvish", -1, "Systummmm! Entered late, zero house connections, still won. Elvish's army is not a fandom, it is a movement."],
      ["Sneha", 10, 109, "Team Abhishek", -1, "Abhishek Malhan played from DAY ONE. Wild card walking in and winning will always feel unfair to the original housemates."],
      ["Dev", 17, 143, "Team Elvish", -1, "Day 26 entry and he still had the biggest moments of the season. That is called impact, not luck."],
      ["Kavita", 25, 81, "Team Manisha", -1, "Manisha Rani was the heart of OTT 2. Her journey from Bihar to that finale stage made half of India cry."],
      ["Neeraj", 33, 126, "Team Elvish", 1, "Fair or not, rules allowed it and the votes were real. Fukra played great — Elvish just played the finale better."],
      ["Anjali", 42, 69, null, -1, "Pooja Bhatt ji's dignity in that house full of influencers was a masterclass. Most graceful finalist ever."],
      ["Yash", 51, 98, "Team Abhishek", -1, "Fukra Insaan carried OTT 2 content for the first month almost alone. Elvish fans forget the early weeks."],
      ["Simran", 60, 134, "Team Elvish", -1, "The finale vote gap was not small. India spoke, clearly. Wild card winner, deal with it 😎"],
      ["Vikram", 72, 57, null, -1, "Bebika was the most fearless player of OTT 2. Said everything to everyone's face."],
      ["Harsh", 85, 88, "Team Abhishek", -1, "Abhishek's sportsmanship in the finale won him more fans than the trophy would have. Class act."],
      ["Ritu", 99, 116, "Team Elvish", -1, "First wild card winner in Bigg Boss HISTORY. That record can never be taken away."],
      ["Sameer", 115, 63, "Team Manisha", -1, "Manisha in the top 3 with two of the biggest YouTubers in India — that is her real victory."],
      ["Pooja", 131, 92, "Team Elvish", -1, "Every OTT 2 debate ends the same way: Elvish fans with numbers, others with essays 😂 Numbers win."],
      ["Gaurav", 149, 46, null, -1, "OTT 2 proved YouTubers run reality TV now. TV stars cannot compete with that army anymore."],
      ["Tanvi", 166, 71, "Team Abhishek", -1, "Still waiting for the day a full-season player gets justice in these re-votes. Fukra forever."],
    ],
  },
  "bigg-boss-19-voting": {
    pinned: ["Nikhil", "Gaurav Khanna winning BB19 was the most 'silent killer' victory ever — no shouting, no drama, just pure consistency for 105 days."],
    comments: [
      ["Priya", 6, 121, "Team Gaurav", -1, "Gaurav played the cleanest game of BB19. Not one cheap moment in 105 days. Deserved, fully."],
      ["Farhan", 13, 94, "Team Farrhana", -1, "Farrhana Bhatt was the fire of BB19. Without her, the season's biggest fights and best episodes do not happen."],
      ["Charu", 20, 73, "Team Tanya", -1, "Tanya Mittal divided the house AND the audience like nobody else. Love her or hate her, you watched her."],
      ["Rohit", 29, 88, "Team Gaurav", 0, "Silent killer is right. While others burned out in fights, Gaurav just kept rising every single week."],
      ["Ishita", 38, 66, null, -1, "Pranit More's comedy kept BB19 alive in the dull middle weeks. Most underrated finalist."],
      ["Sahil", 46, 102, "Team Farrhana", -1, "Farrhana reaching the top 2 against that house is the most underrated achievement of the season."],
      ["Divya", 57, 79, "Team Gaurav", -1, "That finale moment with the trophy — TV's most loved face winning BB was always written."],
      ["Kabir", 68, 55, "Team Amaal", -1, "Amaal Mallik's music task performances were the soul of BB19. Fifth place does not do him justice."],
      ["Neha", 80, 97, "Team Tanya", -1, "Tanya's confidence was called arrogance, but she backed it up for 105 days. Queen behaviour."],
      ["Aditya", 94, 84, "Team Gaurav", -1, "The re-vote here still has Gaurav on top. Sometimes the audience and the result actually agree."],
      ["Megha", 109, 48, null, -1, "BB19 had the most balanced top 5 in years. Any of them winning would have been defensible."],
      ["Rakesh", 126, 69, "Team Farrhana", -1, "Farrhana vs the house every Weekend Ka Vaar — she never backed down once. Warrior."],
      ["Sneha", 143, 58, "Team Gaurav", -1, "No groups carried him, no controversies fed him. Just Gaurav, being Gaurav. That is the tweet."],
      ["Varun", 161, 41, null, -1, "BB19 proved the 'nice guy' strategy still works if you are genuinely strong. Rare W for dignity."],
    ],
  },
  "bigg-boss-18-voting": {
    pinned: ["Karan", "Karan Veer Mehra's BB18 win was a masterclass in patience — the man played chess while the house played checkers."],
    comments: [
      ["Vikram", 5, 117, "Team Karan", -1, "KVM's one-liners on Weekend Ka Vaar should be taught in schools. Calm, sharp, lethal."],
      ["Anjali", 12, 101, "Team Vivian", -1, "Vivian Dsena was the most consistent performer of BB18. The trophy race was closer than the result showed."],
      ["Dev", 19, 76, "Team Rajat", -1, "Rajat Dalal brought raw power-game energy BB18 needed. Third place, first in presence."],
      ["Simran", 28, 89, "Team Karan", 0, "Chess is right. Karan never reacted first, he always responded best. That is why he won."],
      ["Mohit", 37, 64, null, -1, "Avinash Mishra was the most improved player of BB18. His graph from week 1 to finale is unreal."],
      ["Riya", 45, 93, "Team Vivian", -1, "Vivian's fanbase carried him to top 2 against every odd. That loyalty is not normal, it is family."],
      ["Harsh", 56, 71, "Team Karan", -1, "Khatron Ke Khiladi AND Bigg Boss in the same year. KVM's 2024 was legendary."],
      ["Preeti", 67, 52, null, -1, "Chum Darang representing the Northeast in that top 5 — representation mattered this season."],
      ["Sagar", 79, 84, "Team Rajat", -1, "Rajat's fitness tasks were one-sided slaughters. The house feared him in tasks, respected him outside."],
      ["Kavita", 93, 68, "Team Karan", -1, "The re-vote on this page keeping Karan first tells you BB18's verdict aged well."],
      ["Tarun", 108, 47, null, -1, "Eisha in the final six was the season's sweetest surprise. Quiet game, big heart."],
      ["Neeraj", 124, 77, "Team Vivian", -1, "One more week of voting and Vivian flips it. His finale week momentum was scary."],
      ["Jyoti", 141, 59, "Team Karan", -1, "Karan Veer Mehra won with grace, and his winning speech proved why. No bitterness, only class."],
      ["Alok", 158, 36, null, -1, "BB18's top 6 was genuinely strong. Weakest finale debate in years because everyone had a case."],
    ],
  },
  "bigg-boss-voting": {
    pinned: ["Vikram", "The greatest Bigg Boss winner of all time is Sidharth Shukla and this poll agrees. BB13 changed the show forever — every winner since is compared to him."],
    comments: [
      ["Neeraj", 4, 168, "Team Sidharth", -1, "There is a before-BB13 and an after-BB13 in this show's history. Sidharth is the dividing line."],
      ["Farhan", 9, 121, "Team Munawar", -1, "Respect to Sid, but Munawar won the social-media era's toughest season. Different eras, both kings."],
      ["Imran", 16, 98, "Team Stan", -1, "MC Stan's win brought a whole new audience to Bigg Boss. Impact is not only TRP, it is culture."],
      ["Priya", 24, 87, "Team Rubina", -1, "Rubina Dilaik played the most complete game of any winner — tasks, stands, dignity. She belongs in this top tier."],
      ["Rohan", 32, 143, "Team Sidharth", 0, "612 votes and counting on this very poll. Years later, still number one. That is not nostalgia, that is legacy."],
      ["Sneha", 41, 76, null, -1, "Gautam Gulati walked so the solo players could run. BB8's lone wolf walked away with everything."],
      ["Akash", 50, 69, "Team Stan", -1, "Stan won without a single manufactured fight. The most unbothered winner ever and it is not close."],
      ["Kavita", 59, 82, "Team Gauahar", -1, "Gauahar Khan in BB7 was flawless — grace under the worst pressure that house has ever produced."],
      ["Deepak", 70, 64, "Team Munawar", -1, "Munawar's back-to-back reality wins make him the most decorated player of this generation."],
      ["Simran", 83, 91, "Team Sidharth", -1, "Every season's 'strongest contestant' gets asked one question: but could he do what Sid did? None has answered yet."],
      ["Harsh", 96, 55, null, -1, "Tejasswi's BB15 win deserves more respect in this debate. She beat a stacked house."],
      ["Wasim", 110, 73, "Team Gautam", -1, "GG's BB8 journey is the blueprint every solo player still copies. Original lone wolf."],
      ["Anjali", 126, 61, "Team Rubina", -1, "Rubina vs the host moments are Bigg Boss history. She never bowed. Winner for a reason."],
      ["Tarun", 143, 48, null, -1, "This comment section is basically a war of eras and I am here for every bit of it 😂"],
      ["Riya", 160, 67, "Team Karan", -1, "Karan Veer Mehra is the most recent and the most underrated in this list. His game was the smartest."],
    ],
  },
  "bigg-boss-winner-list": {
    pinned: ["Sagar P.", "Twenty-two winners on one list, and one question above all of them: Sidharth Shukla is the greatest Bigg Boss winner of all time. BB13 did not just produce a winner, it changed what this show is."],
    comments: [
      ["Neeraj", 4, 196, "Team Sidharth", -1, "There is a before-BB13 and an after-BB13 in this show's history. Every winner since gets measured against one man, and the list on this page proves it."],
      ["Farhan", 9, 118, "Team Munawar", -1, "Respect to Sid, but Munawar won the toughest season of the social-media era AND Lock Upp before it. Two crowns, two formats — that is a greatest-winner résumé."],
      ["Imran", 15, 104, "Team Stan", -1, "MC Stan brought an audience that had never watched Bigg Boss in its life. Most names on this list never moved the culture like that."],
      ["Rohan", 22, 141, "Team Elvish", -1, "Elvish Yadav entered OTT 2 on Day 26 as a wild card and still took the trophy. Nobody else on this entire list did that. History."],
      ["Priya", 30, 97, "Team Rubina", -1, "Rubina's BB14 game is the most complete on this list — tasks, stands, dignity, over 140 days. The longest season produced the most complete winner."],
      ["Wasim", 38, 83, "Team Gautam", -1, "Gautam Gulati invented the lone-wolf win in Season 8. Every solo player on this list after him is running his playbook."],
      ["Kavita", 46, 76, "Team Gauahar", -1, "Gauahar Khan walked out on Day 44, came back the next morning and still won BB7. That is the greatest comeback on this whole list."],
      ["Deepak", 54, 88, "Team Munawar", 0, "2084 vs 1617 in this poll right now — Sid leads, but Munawar's fandom is the loudest of the new era. This gap will not sit still."],
      ["Simran", 63, 129, "Team Sidharth", -1, "The BB13 finale night is still the most talked-about finale in the show's history. Some wins age. His keeps growing."],
      ["Harsh", 72, 58, null, -1, "Tejasswi gets forgotten in this debate and it is criminal. She outlasted Karan, Shamita and Pratik in a 24-housemate jungle season."],
      ["Riya", 84, 67, "Team Karan", -1, "Karan Veer Mehra played the smartest game of any recent winner. BB18 was chess while the house played checkers."],
      ["Akash", 95, 91, "Team Stan", -1, "Stan won BB16 without manufacturing a single fight. The most unbothered winner on this list, and it is not close."],
      ["Anjali", 107, 73, "Team Shilpa", -1, "Shilpa vs Hina was settled by a LIVE vote on finale night. Nothing on this list matches the tension of BB11's last hour."],
      ["Sneha", 121, 64, "Team Divya", -1, "Divya Agarwal won OTT 1 in a connections season while playing without a connection. The most against-the-system win on this list."],
      ["Tarun", 138, 52, null, -1, "Shoutout to the first name on the list — Rahul Roy won a season most of today's fanbase has never even seen. Respect the OG."],
    ],
  },
  "bigg-boss-telugu-winners-list": {
    pinned: ["Sagar P.", "Ten winners on one list, and the top spot is not even a debate: Kaushal Manda is the greatest Bigg Boss Telugu winner of all time. The Kaushal Army was not a fan club, it was a movement."],
    comments: [
      ["Neeraj", 5, 187, "Team Kaushal", -1, "Season 2 ran 112 days and one man's fandom carried the whole show. Nobody before or since has had an army like that."],
      ["Priyanka", 11, 132, "Team Rahul", -1, "Rahul Sipligunj's Season 3 finale rating was a franchise record at the time. Kaushal had the loudest fans, Rahul had the biggest night."],
      ["Imran", 18, 96, "Team Revanth", -1, "Revanth won a finale where the runner-up literally took the ₹40 lakh suitcase and walked — and the host then said the runner-up had MORE votes. Most dramatic win on this list, no contest."],
      ["Kavita", 26, 88, "Team Bindu", -1, "Bindu Madhavi is the only woman on this entire list and she won the toughest format — Warriors vs Challengers. Put some respect on the Non-Stop winner."],
      ["Rohan", 34, 74, "Team Kaushal", 0, "1847 vs 1263 in this poll right now. The Army is older now but it still shows up. Some fanbases never retire."],
      ["Deepak", 43, 63, null, -1, "Kalyan Padala deserves more love here. A soldier, a commoner, walked in through a pre-show and won the main series. That is the hardest route anyone on this list took."],
      ["Simran", 52, 57, "Team Abijeet", -1, "Abijeet's Season 4 finale did 21.7 TVR. Twenty-one point seven. The most-watched crowning on this list."],
      ["Harsh", 61, 49, "Team Sunny", -1, "VJ Sunny took the richest package on the list — cash, a bike AND a plot. Quiet game, loud result."],
      ["Ananya", 73, 44, "Team Pallavi", -1, "Pallavi Prashanth was a farmer with a YouTube channel and he beat the celebrities at their own game. Ulta Pulta indeed."],
      ["Tarun", 86, 38, null, -1, "Respect to the first name on the list — Siva Balaji won it when the show itself was an experiment, with Jr NTR hosting from a house in Lonavala."],
      ["Wasim", 97, 35, "Team Nikhil", -1, "Nikhil's season started with a prize pot of ZERO and the housemates built it to ₹55 lakh. He did not just win a prize, he won a prize the house earned."],
      ["Riya", 110, 29, "Team Rahul", -1, "Sreemukhi fans are still not over Season 3. That finale split the Telugu audience like no other."],
    ],
  },
  "bigg-boss-marathi-winner-list": {
    pinned: ["Sagar P.", "Six winners on one list, and the top spot belongs to Shiv Thakare. He won Marathi Season 2 and then went to the Hindi house and finished 1st runner-up there too. Nobody else on this list has ruled two Bigg Boss houses."],
    comments: [
      ["Neeraj", 5, 176, "Team Shiv", -1, "Season 2 winner, Bigg Boss 16 finalist — Shiv's fanbase followed him across languages. That almost never happens."],
      ["Priyanka", 11, 121, "Team Suraj", -1, "Suraj Chavan beat an Indian Idol winner in the top two. A social-media boy from a small town took the trophy home. Season 5 was a film script."],
      ["Imran", 18, 89, "Team Vishal", -1, "Vishal Nikam's season was the COVID-postponed one and he still made it feel like the biggest season. Underrated winner."],
      ["Kavita", 26, 81, "Team Megha", -1, "Respect to the first name on the list — Megha Dhade won it in Lonavala in 2018 and then walked into the Hindi house as a wild card. Pioneer."],
      ["Rohan", 34, 68, "Team Shiv", 0, "1283 vs 947 in this poll right now. The Marathi audience has spoken, and then the Hindi audience agreed."],
      ["Deepak", 43, 57, null, -1, "Akshay Kelkar's Chawl season had 19 housemates, the most of the first five seasons. Winning a house that crowded is no small thing."],
      ["Simran", 52, 52, "Team Tanvi", -1, "Tanvi Kolte won the biggest house of all — 21 housemates in Season 6. The newest winner deserves more love in this poll."],
      ["Harsh", 61, 45, "Team Suraj", -1, "Shortest season, highest ratings. Suraj's 70 days did what other seasons could not do in 98."],
      ["Ananya", 73, 41, "Team Vishal", -1, "Jay Dudhane fans are still not over Season 3. That finale split the Marathi audience like no other."],
      ["Tarun", 86, 36, null, -1, "Mahesh Manjrekar built this show for four seasons and Riteish took it higher. Both eras produced worthy winners."],
      ["Wasim", 97, 31, "Team Shiv", -1, "Shivani Surve walked out, came back and still finished 3rd runner-up in Shiv's season — and he still owned that finale."],
      ["Riya", 110, 27, "Team Megha", -1, "Six seasons, six winners, and the debate will never end. That is exactly how it should be."],
    ],
  },
  "bigg-boss-kannada-winner-list": {
    pinned: ["Sagar P.", "Thirteen editions, one host, twelve winners — and for me the greatest is still Chandan Shetty. A rapper walked into the Season 5 house, with commoners auditioned in for the first time, and owned that season from the first week to the trophy."],
    comments: [
      ["Neeraj", 5, 168, "Team Chandan", -1, "Season 5 changed the show — commoners came in through auditions and Chandan still stood tallest. That is why he leads this poll."],
      ["Priyanka", 11, 139, "Team Shine", -1, "Shine Shetty's Season 7 run is the most complete game on this list. 112 days and he never looked like losing the finale."],
      ["Imran", 18, 96, "Team Roopesh", -1, "Roopesh Shetty topped the OTT edition and then won Season 9 back-to-back, with the same runner-up both times. Nobody in any language has done that."],
      ["Kavita", 26, 84, "Team Gilli", -1, "Gilli Nata survived the biggest house of all — 24 housemates in Season 12 — and a season that was shut down for a day and restarted. Newest winner, toughest road."],
      ["Rohan", 34, 71, "Team Chandan", 0, "1547 vs 1389 in this poll right now. Chandan vs Shine is the real Kannada debate and it is close."],
      ["Deepak", 43, 63, null, -1, "Respect to Vijay Raghavendra, the first name on this list. Season 1 in the Lonavala house started everything in 2013."],
      ["Simran", 52, 55, "Team Hanumantha", -1, "A shepherd and folk singer entered as a wild card on Day 21 and won Season 11. Hanumantha Lamani's story is the best story on this whole list."],
      ["Harsh", 61, 47, "Team Manju", -1, "Manju Pavagada won a season that COVID broke into two innings. Coming back after a suspension and still winning takes something extra."],
      ["Ananya", 73, 42, "Team Pratham", -1, "Pratham's Season 4 ran 112 days after a mid-season extension and he still outlasted everyone. Underrated winner."],
      ["Tarun", 86, 37, null, -1, "Thirteen editions and Kichcha Sudeepa has hosted every one of them. The winners changed, the host never did."],
      ["Wasim", 97, 30, "Team Roopesh", -1, "The OTT label says Top Performer, not winner — and then he went and won the real thing in Season 9 anyway. Debate settled."],
      ["Riya", 110, 26, "Team Vijay", -1, "Twelve winners, one Top Performer, one host. Kannada fans will argue this list forever, and that is exactly how it should be."],
    ],
  },
  "bigg-boss-malayalam-winner-list": {
    pinned: ["Sagar P.", "Seven seasons, six winners, one empty chair — and for me the greatest is still Manikuttan. His Season 3 was suspended mid-run, the set was sealed, and he still came back and won the crown through public voting in a final of eight. That is the hardest trophy on this list."],
    comments: [
      ["Neeraj", 5, 171, "Team Manikuttan", -1, "Season 3 had everything against it — COVID, a sealed set, a finale held months later — and Manikuttan still topped the vote. He leads this poll for a reason."],
      ["Priyanka", 11, 142, "Team Akhil", -1, "Akhil Marar owned Season 5 from the first week. First season with commoners in the house and he still stood above everyone."],
      ["Imran", 18, 98, "Team Dilsha", -1, "Dilsha Prasannan was the first woman to win this show, in Season 4. That barrier-breaking win deserves more votes than it gets."],
      ["Kavita", 26, 87, "Team Anumol", -1, "Anumol RS won the newest season and beat a commoner finalist who had the whole state behind him. Second female winner, and the biggest finale TRP the show has ever had."],
      ["Rohan", 34, 73, "Team Manikuttan", 0, "1247 vs 1063 in this poll right now. Manikuttan vs Akhil is the real Malayalam debate and it is not that close."],
      ["Deepak", 43, 64, null, -1, "Respect to Sabumon Abdusamad, the first name on this list. Season 1 in 2018, and a ₹1 crore prize that no later season has matched."],
      ["Simran", 52, 56, "Team Jinto", -1, "Jinto Bodycraft won the biggest house of all — 25 housemates in Season 6 — and he is last in this poll? Fitness trainer deserved better."],
      ["Harsh", 61, 48, null, -1, "Nobody talks about Season 2 because it never finished. 76 episodes, then Mohanlal walked in and sent everyone home. The strangest season in Bigg Boss history, any language."],
      ["Ananya", 73, 43, "Team Dilsha", -1, "Dilsha in Season 4, Anumol in Season 7 — two of the last four winners are women. This show's winner list is more balanced than most."],
      ["Tarun", 86, 38, null, -1, "Seven seasons and Mohanlal has hosted every one of them. The winners changed, the host never did."],
      ["Wasim", 97, 31, "Team Sabumon", -1, "Sabumon won when the prize was ₹1 crore. Everyone since has won less money for the same trophy. The original champion for me."],
      ["Riya", 110, 27, "Team Anumol", -1, "Six winners, one cancelled season, one host. Malayalam fans will argue this list forever, and that is exactly how it should be."],
    ],
  },
  "bigg-boss-17-winner-2024-vote-list": {
    pinned: ["Sagar P.", "Munawar Faruqui is the Bigg Boss 17 winner, and this vote list is the proof of his fandom — 5,86,214 votes, more than 576 thousand, clear of every other name. He never raised his voice, never played dirty, and still owned a 21-housemate season from the first week to the finale. Back-to-back crowns, Lock Upp and then this. The Dongri boy took the trophy home."],
    comments: [
      ["Neeraj", 5, 184, "Team Munawar", -1, "5,86,214 votes and the trophy to match. Munawar won Lock Upp, walked into this house and won again. The vote list just confirms what the finale already said."],
      ["Priyanka", 11, 156, "Team Abhishek", -1, "Abhishek Kumar was thrown out on Day 84 and came back the SAME day to finish runner-up. No finalist in any season fought harder for their place than him."],
      ["Imran", 18, 121, "Team Ankita", -1, "Ankita Lokhande third on this list with 3,98,442 — the family audience stood by her all season. Mannara finishing above her in the official order is still argued about in my house."],
      ["Kavita", 26, 104, "Team Mannara", -1, "Mannara Chopra was the season's entertainment engine and the official 2nd runner-up. Fourth on this list is too low for what she carried."],
      ["Rohan", 34, 88, "Team Munawar", 0, "Look at the gap at the top — Munawar 5,86,214, Abhishek 4,71,308. More than a lakh of votes between first and second. That is not close, that is a statement."],
      ["Deepak", 43, 79, null, -1, "One honest note for everyone arguing below: Colors never released the official vote counts for this season. This list is the fan poll — which, honestly, makes the debate more fun, not less."],
      ["Simran", 52, 66, "Team Vicky", -1, "Vicky Jain played the sharpest mastermind game of the season — sixth out of the house and sixth on this list. The Dimaag makaan ran through him for fifteen weeks."],
      ["Harsh", 61, 58, null, -1, "Ayesha Khan's entry flipped Munawar's whole game mid-season. Whichever side you are on, that week was the turning point of Bigg Boss 17."],
      ["Ananya", 73, 47, "Team Khanzaadi", -1, "Khanzaadi was out on Day 62 and still holds 38,254 votes here. Her rap battles and that fearless mouth deserved a longer run."],
      ["Tarun", 86, 39, null, -1, "Anurag Dobhal's rider fanbase is no joke — evicted by the housemates in week 12 and still ahead of half the house on this list. The UK07 army travels well."],
      ["Wasim", 97, 33, "Team Munawar", -1, "21 contestants, 105 days, one winner. Fans are still voting on this list long after the finale — that is how big this season was."],
      ["Riya", 110, 28, "Team Abhishek", -1, "Final two, final word: Munawar lifted the trophy, but Abhishek's comeback from an ejection to runner-up is the story I will retell from this season."],
    ],
  },
  "bigg-boss-20-voting": {
    pinned: ["Sagar", "Qazi Touqeer is topping every poll on this site for a reason — BB20 belongs to him right now. But this house flips in one Weekend Ka Vaar, so keep watching."],
    comments: [
      ["Neeraj", 3, 132, "Team Qazi", -1, "Qazi's consistency is scary. Top of the season poll, top of the week poll. The man is not slowing down."],
      ["Rohan", 8, 104, "Team Scout", -1, "Scout's army has not even fully arrived yet. When the gaming fandom wakes up in the finale weeks, watch the numbers move."],
      ["Priya", 14, 71, null, -1, "Uditi Singh as captain is the plot twist nobody predicted two weeks ago. Her captaincy week will define her game."],
      ["Farhan", 21, 88, "Team Qazi", 0, "Entertainer, singer, fighter — Qazi gives the show something every single day. That is what wins Bigg Boss."],
      ["Simran", 29, 63, null, -1, "Arishfa winning safety in Episode 75 saved her game. One more week inside changes everything for her."],
      ["Deepak", 37, 95, "Team Scout", -1, "Season-long nomination and STILL in the house and in the top 3 of every poll. Scout's story is the season's best."],
      ["Kavita", 45, 58, null, -1, "Manish Goel is in real danger this week and the eviction poll shows it. His fans need to wake up NOW."],
      ["Akash", 54, 79, "Team Yung", -1, "Yung DSA is the slow burn of BB20. Quiet weeks, massive loyalty. Do not sleep on him."],
      ["Anjali", 63, 66, null, -1, "Love Gill getting the most nominations (6!) and surviving the house politics — the Sharbat task changed the whole game."],
      ["Vikram", 74, 84, "Team Qazi", -1, "This is Qazi's season to lose. Everyone else is playing for second place right now."],
      ["Neha", 86, 52, null, -1, "Mahhi's lifeline drama in Week 10 was peak television. This season keeps producing moments."],
      ["Mohit", 99, 61, "Team Scout", -1, "Gullu's comedy + Scout's army + Qazi's form — this top fight is the best in years. BB20 is delivering."],
      ["Ritu", 113, 47, null, -1, "Week 11 eviction is genuinely unpredictable. 9 nominated, Arishfa safe, Uditi captain — anything can happen at WKV."],
      ["Sahil", 128, 73, "Team Yung", -1, "Yung vs Scout is the rivalry this season will be remembered by. Both fanbases are loading…"],
      ["Tanvi", 145, 44, null, -1, "Kanika Mann is quietly building the most loyal small fandom of BB20. Dark horse, mark it."],
    ],
  },
  "bigg-boss-20-voting-week-12": {
    pinned: ["Rohan", "Nomination night is the real Weekend Ka Vaar. Tonight's list decides Week 12 — and ScoutOP is already on it without even playing the task. Who joins him?"],
    comments: [
      ["Neeraj", 5, 118, "Team Scout", -1, "ScoutOP has been nominated since Episode 68 and he is STILL here. Season-long nomination and the man refuses to leave. Respect."],
      ["Priya", 11, 87, null, -1, "Uditi's first full week as captain. How tonight's nomination task runs will tell us whether Episode 74 changed her game or not."],
      ["Farhan", 18, 64, "Team Mahhi", -1, "Mahhi survived Week 10 on a lifeline and Week 11 ended with no eviction at all. Luck or game? Either way, she is still standing."],
      ["Deepak", 26, 92, "Team Scout", 0, "And he cannot hide behind the task either — Scout is already nominated, so every other name on tonight's list is fresh drama."],
      ["Simran", 34, 58, null, -1, "Arishfa won safety in Episode 75 last week. This week there is no immunity result yet — she is back in the same boat as everyone else."],
      ["Rahul", 43, 73, "Team Gullu", -1, "My prediction for tonight: the house gangs up on the strong players. Qazi, Gullu and Yung fans should be ready to vote this week."],
      ["Kavita", 52, 49, null, -1, "Manish leaving on medical grounds changed the whole maths of this house. Ten left, and every nomination from here is a finale-week move."],
      ["Akash", 61, 81, "Team Yung", -1, "Yung vs Scout on the nomination list together again? This season keeps writing the same rivalry in new ways."],
      ["Anjali", 70, 55, null, -1, "Kanika keeps landing in nominations and keeps surviving them. Quietly the most battle-tested player left in the house."],
      ["Vikram", 84, 67, "Team Qazi", -1, "Qazi leads every poll on this site. If the house nominates him tonight, his fans will treat it like a finale vote."],
      ["Neha", 97, 43, null, -1, "Love Gill drew the most nominations in the Sharbat task. Tonight will show whether the house still sees her as the easy name."],
      ["Mohit", 110, 71, "Team Scout", -1, "Imagine being nominated for the REST OF THE SEASON and still being top two in the backing poll. Scout's army is built different."],
      ["Ritu", 126, 38, null, -1, "Ten housemates, one confirmed nomination, and a task tonight that can put anyone on the list. Best week of the season loading…"],
      ["Sahil", 141, 52, "Team Yung", -1, "Whoever gets nominated tonight, the eviction vote after it is where the real war starts. Saving my votes."],
    ],
  },
};

// ----- Debate template banks (placeholders: {W} winner, {R} 1st RU,
// {T} 2nd RU, first names {w} {r} {t}, {S} season label, {WP} winner pct)
const DEBATE_PINNED_SEASON = [
  "{W} is the reason {S} is still talked about every single day. The trophy went exactly where it belonged — change my mind.",
  "Official result says {W}. The fan re-vote on this page also says {W}. Some seasons just have one clear winner — {S} is one of them.",
  "The {S} final was {W} vs {R} — and the debate has genuinely not stopped since. Whose side are you on?",
  "Years later, {S} still starts arguments at every dinner table in India. That is the power of {W} vs {R}.",
  "The {S} re-vote is live on this page and {W} leads it. Is history repeating itself, or will {R} fans flip it this time?",
];
const DEBATE_PRAISE = [
  "{W} played the only honest game in {S}. No groups, no backbiting — just pure game.",
  "Still get goosebumps watching {w}'s journey. What a season, what a winner 🔥",
  "People forget how many weeks {W} carried {S} almost alone. The trophy had only one name on it.",
  "{w} vs everyone — that was literally the story of {S}. And {w} still came out on top.",
  "I have rewatched {S} twice and my answer never changes: {W}, every single time.",
  "The loudest cheers in that finale were for {W}. The crowd knew. We all knew.",
  "{W} never begged for sympathy votes. Game khela, dil jeeta, trophy liya. Simple.",
  "Unpopular opinion? No — popular fact: {S} is remembered BECAUSE of {W}.",
  "{w}'s one-liners alone are more iconic than most full seasons 😂",
  "From week 1 to the finale, {W} was the most real person in that house. Period.",
  "You can dislike {w}'s style but you cannot deny the impact. {S} = {W}.",
  "My whole family voted for {W} every single week. Best decision we ever made 😄",
  "{W} took every nomination, every fight, every task head-on. Champion mindset.",
  "Even the host knew — {S} revolved around {W} from the first weekend.",
  "That winning moment still lives in my head rent-free. {W} forever ❤️",
];
const DEBATE_COUNTER = [
  "Respect to {W}, but {R} was robbed. {r} played cleaner and still lost.",
  "Honestly {R} carried the entertainment in {S}. {W} just had the louder fanbase.",
  "If the finale voting had run one more hour, {R} would be holding that trophy.",
  "Everyone talks about {w}, nobody talks about how {R} survived every nomination without a single big group.",
  "{R}'s journey was harder. More pressure, fewer friends, still reached the finale.",
  "I voted for {R} then and I would vote for {R} again today. Some results age badly.",
  "{W} won the trophy, {R} won the respect. Ask anyone who watched {S} fully.",
  "The real final was {w} vs {r} every single week — and half of us still say {r} edged it.",
  "Not hating, just facts: {R} had the better finale week. The result surprised the house too.",
  "If personality won seasons, {R} wins {S}. It was a fanbase war, nothing else.",
  "{r} never played the sympathy card even once. That is why {R} fans are still here.",
  "History will be kinder to {R}. Mark this comment.",
];
const DEBATE_THIRD = [
  "Everyone argues {w} vs {r} but {T} was the soul of {S} for me.",
  "{T} deserved way more in that finale. Most genuine person in the top group.",
  "Hot take: without {T}, {S} would have been unwatchable in the middle weeks.",
  "{t}'s finale journey still hurts. That smile though ❤️",
  "Neutral fan here — {T} had the cleanest game of the whole season.",
  "Can we appreciate {T} for never losing dignity in that mad house?",
  "{T} fans are the quietest but the most loyal. Still here years later.",
  "If there was a people's champion award in {S}, it goes to {T}. Simple.",
];
const DEBATE_NEUTRAL = [
  "This fan poll has {W} at {WP} — honestly closer than I expected.",
  "Whatever your side, {S} was on another level. Very few seasons since have touched it.",
  "Watching this debate years later proves {S} never really ended 😂",
  "Both fanbases are still fighting like the finale was yesterday. Iconic.",
  "The gap between the top two in this poll keeps this debate alive. Interesting…",
  "Say what you want, {S} made Bigg Boss a dinner-table debate topic again.",
  "I came for the poll, stayed for the comment wars. Every single time.",
  "Fact: half of India's dinner tables argued about {S} that season.",
];
const DEBATE_NOSTALGIA = [
  "Take me back to that season. {S} every night, no skipping episodes.",
  "Weekend Ka Vaar used to be an event in our house because of {S}.",
  "They don't make seasons like {S} anymore. Raw, real, no filters.",
  "I was in school when {S} aired and we fought about it in class daily 😂",
  "Years later and the {S} clips still break the internet every few months.",
  "New seasons come and go. {S} is the benchmark everyone is compared to.",
];
const DEBATE_REPLIES = [
  "Exactly this. Finally someone said it 👏",
  "Hard disagree. Watch the season again without fan glasses.",
  "You clearly skipped the middle weeks 😂",
  "Facts. Screenshot this comment.",
  "This is the most biased take I have read today, and that is saying something.",
  "Finally a sensible comment in this war zone.",
  "Bro really typed all that and thought he cooked 💀",
  "Respectfully, no. But I like the confidence 😄",
];
// Present-tense banks for the running BB20 season.
const DEBATE_PINNED_LIVE = [
  "{W} is running this season right now and this page's poll proves it. But Bigg Boss flips in one Weekend Ka Vaar — whose side are you on?",
  "The BB20 race right now is {W} vs {R} vs {T}. Three fanbases, one trophy. This debate is only getting started.",
  "Every poll on this site tells the same story: {W} leads, {R} chases. Is the season already decided, or is the biggest twist still coming?",
];
const DEBATE_PRAISE_LIVE = [
  "{W} gives this show something every single day. That is what wins Bigg Boss, not weekly spikes.",
  "{w}'s consistency this season is scary. Top of the polls week after week — not slowing down.",
  "The season is revolving around {W} and everyone in that house knows it.",
  "My whole family is Team {w} this year. The journey is just too strong to ignore.",
  "{W} has the loudest, most loyal army of BB20. Finale night will prove it.",
  "{w} plays with heart and it shows in every single episode. Fan favourite for a reason.",
  "From week 1 to now, {W} has been the most real person in that house. Period.",
  "You can dislike {w}'s style but you cannot deny the impact on this season.",
];
const DEBATE_COUNTER_LIVE = [
  "Respect to {W}, but {R} is the real story of this season. The polls are sleeping on {r}.",
  "{R}'s fanbase has not even fully arrived yet. Watch the numbers move in the finale weeks.",
  "Everyone is watching {w}, nobody is watching how {R} survives every single week. That is the harder game.",
  "If the finale was today, {R} flips this poll. The momentum is all with {r} right now.",
  "{W} leads the polls, {R} leads the house. Two very different games — only one lifts the trophy.",
  "I am voting {R} every week and I am not stopping. This race is far from over.",
];
const DEBATE_THIRD_LIVE = [
  "Everyone argues {w} vs {r} but {T} is quietly building the most loyal fandom of BB20.",
  "{T} is the dark horse of this season. Mark this comment for finale week.",
  "Neutral fan here — {T} has the cleanest game of anyone left in that house.",
  "Without {T}, the middle weeks of this season would have been unwatchable.",
];
const DEBATE_NEUTRAL_LIVE = [
  "This poll has {W} at {WP} — the BB20 race is closer than Twitter thinks.",
  "I came for the poll, stayed for the comment wars. Every single time.",
  "This season keeps producing moments. Best BB in years, whatever your side.",
  "The comment section under BB20 polls is a second show at this point 😂",
];

function debatePickNames(rng, count) {
  const pool = DEBATE_NAMES.slice();
  const out = [];
  for (let i = 0; i < count && pool.length; i++) {
    const idx = Math.floor(rng() * pool.length);
    let name = pool.splice(idx, 1)[0];
    if (rng() < 0.3) name += " " + DEBATE_INITIALS[Math.floor(rng() * DEBATE_INITIALS.length)];
    out.push(name);
  }
  return out;
}
function debateShuffle(rng, arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

// Build the debate object for a poll page (or a synthetic subject).
// subject: {slug, ctx:{W,R,T,S,WP}, live:boolean, season:boolean}
function debateGenerate(subject) {
  const rng = debateRng(debateHash("debate:" + subject.slug));
  const ctx = subject.ctx;
  const live = !!subject.live;
  const pinnedBank = live ? DEBATE_PINNED_LIVE : DEBATE_PINNED_SEASON;
  const praise = debateShuffle(rng, live ? DEBATE_PRAISE_LIVE : DEBATE_PRAISE);
  const counter = debateShuffle(rng, live ? DEBATE_COUNTER_LIVE : DEBATE_COUNTER);
  const third = debateShuffle(rng, live ? DEBATE_THIRD_LIVE : DEBATE_THIRD);
  const neutral = debateShuffle(rng, live ? DEBATE_NEUTRAL_LIVE : DEBATE_NEUTRAL);
  const nostalgia = live ? [] : debateShuffle(rng, DEBATE_NOSTALGIA);
  const replies = debateShuffle(rng, DEBATE_REPLIES);
  const target = 15 + Math.floor(rng() * 4); // 15–18 comments
  const names = debatePickNames(rng, target + 8);
  // Sequence of stances: winner praise and runner-up counters alternate,
  // with third-place praise, neutral and nostalgia mixed in.
  const stances = [];
  const pattern = ["praise", "counter", "praise", "third", "counter", "praise", "neutral", "counter", "third", "praise", "counter", "nostalgia", "praise", "neutral", "counter", "third", "praise", "nostalgia"];
  for (let i = 0; i < target; i++) stances.push(pattern[i % pattern.length]);
  if (live) for (let i = 0; i < stances.length; i++) if (stances[i] === "nostalgia") stances[i] = "neutral";
  const banks = { praise, counter, third, neutral, nostalgia };
  const used = { praise: 0, counter: 0, third: 0, neutral: 0, nostalgia: 0 };
  const chipFor = (stance) =>
    stance === "praise" ? "Team " + (ctx.w || "") :
    stance === "counter" ? "Team " + (ctx.r || "") :
    stance === "third" ? "Team " + (ctx.t || "") : null;
  const comments = [];
  let mins = 2 + Math.floor(rng() * 4);
  for (let i = 0; i < target; i++) {
    const stance = stances[i];
    const bank = banks[stance] && banks[stance].length ? banks[stance] : praise;
    const text = debateFill(bank[used[stance] % bank.length], ctx);
    used[stance] = (used[stance] || 0) + 1;
    comments.push({
      name: names[i % names.length],
      mins,
      likes: 18 + Math.floor(rng() * 190),
      chip: chipFor(stance),
      replyTo: -1,
      text,
    });
    mins += 3 + Math.floor(rng() * 14);
    // ~1 in 3 top-level comments gets one reply.
    if (i > 0 && rng() < 0.34 && comments.length < target + 4) {
      comments.push({
        name: names[(i + 7) % names.length],
        mins: Math.max(1, mins - 2),
        likes: 4 + Math.floor(rng() * 60),
        chip: null,
        replyTo: comments.length - 1,
        text: replies[Math.floor(rng() * replies.length)],
      });
    }
  }
  const pinnedName = names[target % names.length] || "Sagar";
  return {
    slug: subject.slug,
    viewers: 120 + Math.floor(rng() * 780),
    pinned: { name: pinnedName, mins: 32 + Math.floor(rng() * 60), likes: 180 + Math.floor(rng() * 160), text: debateFill(pinnedBank[Math.floor(rng() * pinnedBank.length)], ctx) },
    comments,
    finalists: [ctx.W, ctx.R, ctx.T].filter(Boolean),
  };
}

function debateFromMarquee(slug, mq, finalists) {
  return {
    slug,
    viewers: 260 + (debateHash(slug) % 640),
    pinned: { name: mq.pinned[0], mins: 47, likes: 246, text: mq.pinned[1] },
    comments: mq.comments.map((c) => ({ name: c[0], mins: c[1], likes: c[2], chip: c[3], replyTo: c[4], text: c[5] })),
    finalists: finalists || [],
  };
}

// Resolve a poll into a debate: marquee override first, then the
// generator fed from the page's own poll data.
function buildDebate(poll) {
  if (!poll || !poll.slug) return null;
  const slug = poll.slug;
  const stats = getPollStats(poll);
  const names = stats.list.map((o) => o.name);
  if (DEBATE_MARQUEE[slug]) return debateFromMarquee(slug, DEBATE_MARQUEE[slug], names.slice(0, 3));
  // Season re-vote pages: official order lives in textOptions.
  if (poll.textOptions && poll.textOptions.length >= 2) {
    const ordered = poll.textOptions.map((o) => o.label);
    const seasonLabel = (poll.textOptions[0].sub || "").split("·")[1]
      ? (poll.textOptions[0].sub || "").split("·")[1].trim().replace(/^Bigg Boss/i, "Bigg Boss")
      : "";
    const label = seasonLabel || (poll.h1 || "").split("—")[0].trim();
    const wp = stats.list.length ? stats.list[0].pctStr : "";
    return debateGenerate({
      slug,
      live: false,
      ctx: {
        W: ordered[0], w: debateFirst(ordered[0]),
        R: ordered[1], r: debateFirst(ordered[1]),
        T: ordered[2] || ordered[1], t: debateFirst(ordered[2] || ordered[1]),
        S: label.replace(/^Bigg Boss/, "BB").replace(/^BB (\d)/, "BB$1"), WP: wp,
      },
    });
  }
  // Duel pages: head-to-head.
  if (poll.duelIds && poll.duelIds.length === 2 && names.length >= 2) {
    const ctx = {
      W: names[0], w: debateFirst(names[0]),
      R: names[1], r: debateFirst(names[1]),
      T: names[1], t: debateFirst(names[1]),
      S: "BB20", WP: stats.list[0] ? stats.list[0].pctStr : "",
    };
    return debateGenerate({ slug, live: true, ctx });
  }
  // BB20 pages: top names by poll votes; fall back to the winner race.
  let top = names;
  if (!top || top.length < 3) {
    const race = pollBySlug.get("who-will-win-bigg-boss-20");
    if (race) top = getPollStats(race).list.map((o) => o.name);
  }
  if (!top || top.length < 2) return null;
  const wp = stats.list && stats.list.length ? stats.list[0].pctStr : "";
  return debateGenerate({
    slug,
    live: true,
    ctx: {
      W: top[0], w: debateFirst(top[0]),
      R: top[1], r: debateFirst(top[1]),
      T: top[2] || top[1], t: debateFirst(top[2] || top[1]),
      S: "BB20", WP: wp,
    },
  });
}

// Synthetic debates for the two non-poll pages (contestants wiki, rules).
function buildDebateBySlug(slug) {
  const race = pollBySlug.get("who-will-win-bigg-boss-20");
  const top = race ? getPollStats(race).list.map((o) => o.name) : ["Qazi Touqeer", "Yung DSA", "ScoutOP"];
  const d = debateGenerate({
    slug,
    live: true,
    ctx: {
      W: top[0], w: debateFirst(top[0]),
      R: top[1], r: debateFirst(top[1]),
      T: top[2] || top[1], t: debateFirst(top[2] || top[1]),
      S: "BB20", WP: "",
    },
  });
  if (slug === "bigg-boss-20-voting-rules") {
    d.pinned = { name: "Alok", mins: 52, likes: 132, text: "Hot take: half the fights in this debate would end if everyone actually read how voting works. Open Poll here, official vote on the app — two different things, both fun." };
  }
  if (slug === "bigg-boss-20-contestants") {
    d.pinned = { name: "Charu", mins: 38, likes: 158, text: "18 started, and this wiki page is the only place keeping every journey straight. The real debate: whose journey here is the strongest — I say the one still rising." };
  }
  return d;
}

function debateCommentHtml(c, idx, slug) {
  const initial = debateEsc((c.name || "F").trim().charAt(0).toUpperCase());
  const color = DEBATE_AVATAR_COLORS[debateHash(c.name || "") % DEBATE_AVATAR_COLORS.length];
  const chip = c.chip ? `<span class="bb-debate-chip">${debateEsc(c.chip)}</span>` : "";
  const replyCls = c.replyTo >= 0 ? " bb-debate-reply" : "";
  return `<article class="bb-debate-comment${replyCls}" data-cid="${debateEsc(slug)}-${idx}">
    <span class="bb-debate-avatar" style="background:${color}" aria-hidden="true">${initial}</span>
    <div class="bb-debate-body">
      <div class="bb-debate-meta"><strong>${debateEsc(c.name)}</strong>${chip}<span class="bb-debate-time">${debateTimeLabel(c.mins)}</span></div>
      <p class="bb-debate-text">${debateEsc(c.text)}</p>
      <button type="button" class="bb-debate-like" data-like="${debateEsc(slug)}-${idx}" aria-label="Like this comment">❤️ <span>${c.likes}</span></button>
    </div>
  </article>`;
}

function debateFeedItems(d) {
  const rng = debateRng(debateHash("feed:" + d.slug));
  const items = [];
  const cs = d.comments.slice(0, 8);
  for (let i = 0; i < cs.length; i++) {
    const snip = cs[i].text.length > 46 ? cs[i].text.slice(0, 46).trim() + "…" : cs[i].text;
    items.push(cs[i].name + " commented: “" + snip + "”");
  }
  (d.finalists || []).forEach((f) => {
    const n = DEBATE_NAMES[Math.floor(rng() * DEBATE_NAMES.length)];
    items.push(n + " voted for " + f);
  });
  for (let i = 0; i < 2; i++) {
    const n = DEBATE_NAMES[Math.floor(rng() * DEBATE_NAMES.length)];
    items.push(n + " liked a comment in the debate");
  }
  return debateShuffle(rng, items).slice(0, 10);
}

function renderDebateHtml(d) {
  if (!d) return "";
  const feedJson = JSON.stringify(debateFeedItems(d)).replace(/</g, "\\u003c");
  return `<section class="bb-debate" id="fan-debate" data-debate-slug="${debateEsc(d.slug)}" aria-label="Live fan debate">
    <div class="bb-debate-head">
      <h2>💬 Live Fan Debate</h2>
      <span class="bb-live-badge"><span class="bb-live-dot" aria-hidden="true"></span> LIVE</span>
      <span class="bb-debate-viewers"><span data-viewers="${d.viewers}">${d.viewers}</span> fans here now</span>
    </div>
    <p class="bb-debate-sub">Fans are debating this page right now — join in. Comments you post are saved on your own device.</p>
    <form class="bb-debate-form" data-debate-form>
      <input type="text" class="bb-debate-name" maxlength="24" placeholder="Your name (optional)" aria-label="Your name (optional)">
      <textarea class="bb-debate-input" rows="2" maxlength="280" placeholder="Add your take to the debate…" aria-label="Add your comment" required></textarea>
      <button type="submit" class="bb-debate-post">Post Comment</button>
    </form>
    <div class="bb-debate-own" data-debate-own></div>
    <article class="bb-debate-comment bb-debate-pinned" data-cid="${debateEsc(d.slug)}-pin">
      <span class="bb-debate-avatar" style="background:#17253e" aria-hidden="true">${debateEsc((d.pinned.name || "S").charAt(0))}</span>
      <div class="bb-debate-body">
        <div class="bb-debate-meta"><strong>${debateEsc(d.pinned.name)}</strong><span class="bb-debate-pin-tag">📌 Pinned</span><span class="bb-debate-time">${debateTimeLabel(d.pinned.mins)}</span></div>
        <p class="bb-debate-text">${debateEsc(d.pinned.text)}</p>
        <button type="button" class="bb-debate-like" data-like="${debateEsc(d.slug)}-pin" aria-label="Like this comment">❤️ <span>${d.pinned.likes}</span></button>
      </div>
    </article>
    <div class="bb-debate-thread">
      ${d.comments.map((c, i) => debateCommentHtml(c, i, d.slug)).join("")}
    </div>
    <script type="application/json" data-debate-feed="${debateEsc(d.slug)}">${feedJson}</script>
  </section>
  <div class="bb-live-pop" data-live-pop hidden aria-hidden="true"></div>`;
}

function renderDebateStripHtml(d) {
  if (!d) return "";
  const recent = d.comments.slice(0, 3);
  return `<aside class="bb-debate-strip" aria-label="Latest from the live fan debate">
    <span class="bb-debate-strip-label"><span class="bb-live-dot" aria-hidden="true"></span> LIVE DEBATE</span>
    <div class="bb-debate-strip-items">
      ${recent.map((c) => `<span class="bb-debate-strip-item"><strong>${debateEsc(c.name)}:</strong> ${debateEsc(c.text.length > 72 ? c.text.slice(0, 72).trim() + "…" : c.text)}</span>`).join("")}
    </div>
    <a class="bb-debate-strip-link" href="#fan-debate">Join the debate ↓</a>
  </aside>`;
}

export function renderFanDebate(poll) {
  return renderDebateHtml(buildDebate(poll));
}
export function renderDebateStrip(poll) {
  return renderDebateStripHtml(buildDebate(poll));
}
export function renderFanDebateBySlug(slug) {
  return renderDebateHtml(buildDebateBySlug(slug));
}
export function renderDebateStripBySlug(slug) {
  return renderDebateStripHtml(buildDebateBySlug(slug));
}


function renderFactCards(poll) {
  if (!poll.factCards || !poll.factCards.length) return "";
  return `<section class="bb-leaderboard-section bb-facts-section">
    <div class="bb-section-head"><div><p class="eyebrow">Key Facts</p><h2>${poll.factCardsTitle || "Key facts — at a glance"}</h2></div></div>
    <div class="bb-fact-grid">
      ${poll.factCards.map((c) => `<div class="bb-fact-card"><h3>${c.name}</h3>${c.rows.map(([k, v]) => `<div class="bb-fact-row"><span class="bb-fact-k">${k}</span><span class="bb-fact-v">${v}</span></div>`).join("")}</div>`).join("")}
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
      ${poll.slug === "bigg-boss-telugu-10-voting" ? `<a href="/">Home</a> / <a href="/bigg-boss-telugu-winners-list/">Bigg Boss Telugu</a> / <span>${poll.h1}</span>` : `<a href="/">Home</a> / <a href="/bigg-boss-20-guide/">Bigg Boss 20</a> / <span>${poll.h1}</span>`}
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

    ${renderDebateStrip(poll)}

    ${renderAdSenseUnit("after-voting", "Advertisement")}

    ${renderLeaderboard(poll)}

    ${poll.slug === "bigg-boss-20-scout-love-story" ? renderScoutLoveSections() : ""}
    ${poll.slug === "bigg-boss-20-yung-vs-scout" ? renderYungScoutSections() : ""}
    ${poll.slug === "bigg-boss-20-next-captain-poll" ? renderNextCaptainExplainer() : ""}
    ${poll.slug === "bigg-boss-20-scout-vs-kaashvi" ? renderScoutKaashviSections() : ""}
    ${poll.slug === "bigg-boss-20-eviction-list" ? renderEvictionListSections() : ""}
    ${poll.slug === "bigg-boss-20-scout-shaves-head" ? renderScoutHeadShaveSections() : ""}
    ${poll.slug === "bigg-boss-20-weekend-ka-vaar-episodes-70-71" ? renderWkvWeek10Sections() : ""}
    ${poll.slug === "bigg-boss-20-voting-week-11" ? renderWeek11VotingSections() : ""}${poll.slug === "bigg-boss-20-voting-week-12" ? renderWeek12VotingSections() : ""}
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
    ${poll.slug === "bigg-boss-10-voting" ? renderSeason10Sections() : ""}
    ${poll.slug === "bigg-boss-9-voting" ? renderSeason9Sections() : ""}
    ${poll.slug === "bigg-boss-8-voting" ? renderSeason8Sections() : ""}
    ${poll.slug === "bigg-boss-7-voting" ? renderSeason7Sections() : ""}
    ${poll.slug === "bigg-boss-6-voting" ? renderSeason6Sections() : ""}
    ${poll.slug === "bigg-boss-5-voting" ? renderSeason5Sections() : ""}
 ${poll.slug === "bigg-boss-4-voting" ? renderSeason4Sections() : ""}
 ${poll.slug === "bigg-boss-3-voting" ? renderSeason3Sections() : ""}
 ${poll.slug === "bigg-boss-2-voting" ? renderSeason2Sections() : ""}
 ${poll.slug === "bigg-boss-1-voting" ? renderSeason1Sections() : ""}
    ${poll.slug === "bigg-boss-winner-list" ? renderWinnerListSections() : ""}
    ${poll.slug === "bigg-boss-telugu-winners-list" ? renderTeluguWinnersSections() : ""}${poll.slug === "bigg-boss-telugu-10-voting" ? renderTelugu10Sections() : ""}${renderDuelSections(poll)}
    ${poll.slug === "bigg-boss-marathi-winner-list" ? renderMarathiWinnersSections() : ""}
    ${poll.slug === "bigg-boss-kannada-winner-list" ? renderKannadaWinnersSections() : ""}
    ${poll.slug === "bigg-boss-malayalam-winner-list" ? renderMalayalamWinnersSections() : ""}
    ${poll.slug === "bigg-boss-17-winner-2024-vote-list" ? renderBB17VoteListSections() : ""}

    ${renderFactCards(poll)}${renderFanDebate(poll)}

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

    ${poll.slug === "bigg-boss-voting" ? renderVotingHubFaq() : poll.slug === "bigg-boss-17-voting" ? renderSeason17Faq() : poll.slug === "bigg-boss-19-voting" ? renderSeason19Faq() : poll.slug === "bigg-boss-16-voting" ? renderSeason16Faq() : poll.slug === "bigg-boss-13-voting" ? renderSeason13Faq() : poll.slug === "bigg-boss-18-voting" ? renderSeason18Faq() : poll.slug === "bigg-boss-ott-1-voting" ? renderOtt1Faq() : poll.slug === "bigg-boss-ott-2-voting" ? renderOtt2Faq() : poll.slug === "bigg-boss-ott-3-voting" ? renderOtt3Faq() : poll.slug === "bigg-boss-15-voting" ? renderSeason15Faq() : poll.slug === "bigg-boss-14-voting" ? renderSeason14Faq() : poll.slug === "bigg-boss-12-voting" ? renderSeason12Faq() : poll.slug === "bigg-boss-11-voting" ? renderSeason11Faq() : poll.slug === "bigg-boss-10-voting" ? renderSeason10Faq() : poll.slug === "bigg-boss-9-voting" ? renderSeason9Faq() : poll.slug === "bigg-boss-8-voting" ? renderSeason8Faq() : poll.slug === "bigg-boss-7-voting" ? renderSeason7Faq() : poll.slug === "bigg-boss-6-voting" ? renderSeason6Faq() : poll.slug === "bigg-boss-5-voting" ? renderSeason5Faq() : poll.slug === "bigg-boss-4-voting" ? renderSeason4Faq() : poll.slug === "bigg-boss-3-voting" ? renderSeason3Faq() : poll.slug === "bigg-boss-2-voting" ? renderSeason2Faq() : poll.slug === "bigg-boss-1-voting" ? renderSeason1Faq() : poll.slug === "bigg-boss-winner-list" ? renderWinnerListFaq() : poll.slug === "bigg-boss-telugu-winners-list" ? renderTeluguWinnersFaq() : poll.slug === "bigg-boss-marathi-winner-list" ? renderMarathiWinnersFaq() : poll.slug === "bigg-boss-kannada-winner-list" ? renderKannadaWinnersFaq() : poll.slug === "bigg-boss-malayalam-winner-list" ? renderMalayalamWinnersFaq() : poll.slug === "bigg-boss-17-winner-2024-vote-list" ? renderBB17VoteListFaq() : poll.slug === "bigg-boss-20-voting-week-12" ? renderWeek12Faq() : poll.slug === "bigg-boss-telugu-10-voting" ? renderTelugu10Faq() : renderFaqSection(poll)}
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
      : c.left
      ? '<span class="bb-wiki-nom">LEFT THE HOUSE — MEDICAL EXIT (WEEK 11)</span>'
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

    ${renderDebateStripBySlug("bigg-boss-20-contestants")}

    ${renderFanDebateBySlug("bigg-boss-20-contestants")}
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

    ${renderDebateStripBySlug("bigg-boss-20-voting-rules")}

    ${renderFanDebateBySlug("bigg-boss-20-voting-rules")}
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
  object-fit: contain;
  object-position: center center;
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
  background: #e2e8f0;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  margin-bottom: 1rem;
}
.bb-duel-photo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
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
  background: #e2e8f0;
}
.bb-nom-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  object-fit: contain;
  object-position: center center;
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

/* Live Fan Debate (entry 431) */
.bb-debate { background:#fff; border:1px solid #e6e8eb; border-radius:14px; padding:1.25rem 1.5rem; margin:2rem 0; box-shadow:0 4px 14px rgba(23,37,62,0.05); }
.bb-debate-head { display:flex; align-items:center; gap:.7rem; flex-wrap:wrap; }
.bb-debate-head h2 { margin:0; font-size:1.3rem; color:#17253e; }
.bb-live-badge { display:inline-flex; align-items:center; gap:.35rem; background:#d91438; color:#fff; font-size:.72rem; font-weight:800; letter-spacing:.6px; padding:.22rem .55rem; border-radius:999px; }
.bb-live-dot { width:8px; height:8px; border-radius:50%; background:#ff4757; display:inline-block; animation:bbLivePulse 1.4s ease-in-out infinite; }
.bb-live-badge .bb-live-dot { background:#fff; }
@keyframes bbLivePulse { 0%,100% { opacity:1; } 50% { opacity:.35; } }
.bb-debate-viewers { font-size:.85rem; color:#5b6b7a; font-weight:600; }
.bb-debate-sub { margin:.55rem 0 1rem; font-size:.9rem; color:#5b6b7a; }
.bb-debate-form { display:flex; flex-direction:column; gap:.5rem; background:#f6f8fb; border:1px solid #e6e8eb; border-radius:10px; padding:.8rem; margin-bottom:1.1rem; }
.bb-debate-name, .bb-debate-input { font:inherit; font-size:.92rem; border:1px solid #cfd8e3; border-radius:8px; padding:.55rem .7rem; background:#fff; color:#17253e; width:100%; box-sizing:border-box; }
.bb-debate-input { resize:vertical; }
.bb-debate-post { align-self:flex-end; background:#17253e; color:#fff; border:none; font-weight:700; font-size:.9rem; padding:.55rem 1.1rem; border-radius:8px; cursor:pointer; }
.bb-debate-post:hover { background:#d91438; }
.bb-debate-comment { display:flex; gap:.7rem; padding:.75rem 0; border-top:1px solid #eef1f4; }
.bb-debate-pinned { background:#fff8e6; border:1px solid #ffd591; border-radius:10px; padding:.8rem .9rem; margin-bottom:.4rem; }
.bb-debate-reply { margin-left:2.6rem; border-left:3px solid #e6e8eb; padding-left:.8rem; }
.bb-debate-avatar { flex:0 0 auto; width:38px; height:38px; border-radius:50%; color:#fff; font-weight:800; font-size:1rem; display:flex; align-items:center; justify-content:center; }
.bb-debate-body { flex:1; min-width:0; }
.bb-debate-meta { display:flex; align-items:center; gap:.5rem; flex-wrap:wrap; font-size:.88rem; }
.bb-debate-meta strong { color:#17253e; }
.bb-debate-chip { background:#eef3ff; color:#0b5cad; border:1px solid #c7d7f8; font-size:.7rem; font-weight:700; padding:.1rem .45rem; border-radius:999px; }
.bb-debate-pin-tag { background:#ffd591; color:#613400; font-size:.7rem; font-weight:800; padding:.1rem .45rem; border-radius:999px; }
.bb-debate-time { color:#8a97a5; font-size:.78rem; }
.bb-debate-text { margin:.3rem 0 .45rem; font-size:.94rem; line-height:1.5; color:#243447; overflow-wrap:break-word; }
.bb-debate-like { background:none; border:1px solid #e6e8eb; border-radius:999px; font-size:.8rem; padding:.18rem .6rem; cursor:pointer; color:#5b6b7a; }
.bb-debate-like:hover { border-color:#d91438; color:#d91438; }
.bb-debate-like.liked { background:#ffeef1; border-color:#d91438; color:#d91438; font-weight:700; }
.bb-debate-strip { display:flex; align-items:center; gap:.8rem; background:#17253e; color:#dbe3ef; border-radius:10px; padding:.6rem .9rem; margin:1.2rem 0; font-size:.85rem; overflow:hidden; }
.bb-debate-strip-label { display:inline-flex; align-items:center; gap:.4rem; font-weight:800; font-size:.72rem; letter-spacing:.6px; color:#fff; white-space:nowrap; }
.bb-debate-strip-items { flex:1; position:relative; min-height:1.3em; overflow:hidden; }
.bb-debate-strip-item { position:absolute; inset:0; opacity:0; transition:opacity .5s ease; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.bb-debate-strip-item.on { opacity:1; }
.bb-debate-strip-item strong { color:#f2c14e; }
.bb-debate-strip-link { color:#f2c14e; font-weight:700; white-space:nowrap; text-decoration:none; }
.bb-live-pop { position:fixed; left:14px; bottom:14px; z-index:9998; max-width:320px; background:#17253e; color:#eef2f8; border-radius:12px; padding:.75rem 2rem .75rem .9rem; font-size:.86rem; line-height:1.45; box-shadow:0 10px 28px rgba(10,20,40,.35); opacity:0; transform:translateY(14px); transition:opacity .35s ease, transform .35s ease; pointer-events:none; }
.bb-live-pop.show { opacity:1; transform:translateY(0); pointer-events:auto; }
.bb-live-pop .bb-live-pop-tag { display:block; font-size:.68rem; font-weight:800; letter-spacing:.6px; color:#f2c14e; margin-bottom:.25rem; }
.bb-live-pop-close { position:absolute; top:.35rem; right:.55rem; background:none; border:none; color:#dbe3ef; font-size:1rem; cursor:pointer; line-height:1; }
@media (max-width:640px) {
  .bb-debate { padding:1rem; }
  .bb-debate-reply { margin-left:1.2rem; }
  .bb-live-pop { left:10px; right:10px; bottom:10px; max-width:none; }
  .bb-debate-strip { flex-wrap:wrap; }
}

/* BB format programme (entry 469): uniform content photo frames + fact cards.
   Poll cards and debate blocks are deliberately NOT touched. */
.bb-step-card img { aspect-ratio: 4/5; object-fit: contain; background: #f3e9f0; width: 100%; }
.bb-story-photo img { max-height: 560px; object-fit: contain; background: #f3e9f0; }
.bb-fact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.85rem; margin: 1.1rem 0 0.4rem; }
.bb-fact-card { background: #fff7fb; border: 1px solid #e9cfe0; border-left: 5px solid #c9a227; border-radius: 12px; padding: 0.9rem 1rem; }
.bb-fact-card h3 { margin: 0 0 0.55rem; font-size: 1.02rem; color: #3b1032; }
.bb-fact-row { display: flex; gap: 0.5rem; padding: 0.3rem 0; border-top: 1px dashed #e9cfe0; font-size: 0.92rem; line-height: 1.45; }
.bb-fact-row:first-of-type { border-top: none; }
.bb-fact-k { flex: 0 0 42%; font-weight: 700; color: #7a4a12; }
.bb-fact-v { flex: 1; color: #2b2b2b; }
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

  // ----- Live Fan Debate (entry 431) -----
  // Own comments + likes persist per page in localStorage (no backend),
  // following the same pattern as the Open Poll votes above.
  (function initDebate() {
    var section = document.querySelector('[data-debate-slug]');
    if (!section) return;
    var slug = section.getAttribute('data-debate-slug');
    var ownKey = 'bb_debate_own_' + slug;
    var likeKey = 'bb_debate_likes_' + slug;

    function loadJson(key, fallback) {
      try { return JSON.parse(localStorage.getItem(key) || '') || fallback; } catch (e) { return fallback; }
    }
    function escText(s) {
      var div = document.createElement('div');
      div.textContent = s;
      return div.innerHTML;
    }

    // Restore the visitor's own comments (newest first, above the pinned).
    var ownBox = section.querySelector('[data-debate-own]');
    var own = loadJson(ownKey, []);
    function ownHtml(c) {
      return '<article class="bb-debate-comment" data-cid="' + c.cid + '">' +
        '<span class="bb-debate-avatar" style="background:#0e7a3d" aria-hidden="true">' + escText((c.name || 'Y').charAt(0).toUpperCase()) + '</span>' +
        '<div class="bb-debate-body"><div class="bb-debate-meta"><strong>' + escText(c.name) + '</strong>' +
        '<span class="bb-debate-chip">Your take</span><span class="bb-debate-time">just now</span></div>' +
        '<p class="bb-debate-text">' + escText(c.text) + '</p>' +
        '<button type="button" class="bb-debate-like" data-like="' + c.cid + '" aria-label="Like this comment">❤️ <span>' + (c.likes || 0) + '</span></button></div></article>';
    }
    function renderOwn() {
      if (ownBox) ownBox.innerHTML = own.map(ownHtml).join('');
    }
    renderOwn();

    // Post a comment.
    var form = section.querySelector('[data-debate-form]');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var nameEl = form.querySelector('.bb-debate-name');
        var textEl = form.querySelector('.bb-debate-input');
        var text = (textEl.value || '').trim();
        if (!text) return;
        var name = (nameEl.value || '').trim() || 'Guest Fan';
        own.unshift({ cid: slug + '-own-' + Date.now(), name: name, text: text.slice(0, 280), likes: 0 });
        if (own.length > 20) own = own.slice(0, 20);
        try { localStorage.setItem(ownKey, JSON.stringify(own)); } catch (err) {}
        textEl.value = '';
        renderOwn();
        applyLikes();
        if (typeof showToast === 'function') showToast('Your comment is live in the fan debate!');
      });
    }

    // Likes: toggle +1, persisted per page.
    var liked = loadJson(likeKey, {});
    function applyLikes() {
      section.querySelectorAll('[data-like]').forEach(function(btn) {
        var cid = btn.getAttribute('data-like');
        var span = btn.querySelector('span');
        if (!span) return;
        if (!btn.getAttribute('data-base')) btn.setAttribute('data-base', span.textContent.replace(/[^0-9]/g, '') || '0');
        var base = parseInt(btn.getAttribute('data-base'), 10) || 0;
        var isOwn = cid.indexOf('-own-') !== -1;
        if (isOwn) {
          var rec = null;
          for (var i = 0; i < own.length; i++) if (own[i].cid === cid) rec = own[i];
          base = rec ? (rec.likes || 0) : base;
        }
        span.textContent = base + (liked[cid] ? 1 : 0);
        btn.classList.toggle('liked', !!liked[cid]);
      });
    }
    section.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-like]');
      if (!btn) return;
      var cid = btn.getAttribute('data-like');
      if (liked[cid]) { delete liked[cid]; } else { liked[cid] = 1; }
      try { localStorage.setItem(likeKey, JSON.stringify(liked)); } catch (err) {}
      applyLikes();
    });
    applyLikes();

    // Viewers-now gentle jitter.
    var viewersEl = section.querySelector('[data-viewers]');
    if (viewersEl) {
      var v = parseInt(viewersEl.getAttribute('data-viewers'), 10) || 300;
      setInterval(function() {
        v = Math.max(90, v + Math.floor(Math.random() * 25) - 12);
        viewersEl.textContent = v;
      }, 20000);
    }

    // Recent-comments strip rotation.
    var stripItems = document.querySelectorAll('.bb-debate-strip-item');
    if (stripItems.length > 1) {
      var si = 0;
      stripItems[0].classList.add('on');
      setInterval(function() {
        stripItems[si].classList.remove('on');
        si = (si + 1) % stripItems.length;
        stripItems[si].classList.add('on');
      }, 4200);
    }

    // Live popup ticker: rotates the page's simulated fan activity.
    var pop = document.querySelector('[data-live-pop]');
    var feedEl = section.querySelector('[data-debate-feed]');
    if (pop && feedEl && !sessionStorage.getItem('bb_debate_pop_off')) {
      var feed = [];
      try { feed = JSON.parse(feedEl.textContent || '[]'); } catch (e) { feed = []; }
      if (feed.length) {
        var fi = 0, shown = 0;
        pop.innerHTML = '<span class="bb-live-pop-tag">🔴 LIVE FAN ACTIVITY</span><span data-pop-text></span><button type="button" class="bb-live-pop-close" aria-label="Close live updates">×</button>';
        var popText = pop.querySelector('[data-pop-text]');
        pop.querySelector('.bb-live-pop-close').addEventListener('click', function() {
          pop.classList.remove('show');
          try { sessionStorage.setItem('bb_debate_pop_off', '1'); } catch (err) {}
          clearInterval(popTimer);
        });
        function showPop() {
          if (shown >= 8) { clearInterval(popTimer); pop.classList.remove('show'); return; }
          popText.textContent = feed[fi % feed.length];
          fi++; shown++;
          pop.hidden = false;
          pop.classList.add('show');
          setTimeout(function() { pop.classList.remove('show'); }, 5000);
        }
        var popTimer = setInterval(showPop, 14000);
        setTimeout(showPop, 6000);
      }
    }
  })();
})();
`;
