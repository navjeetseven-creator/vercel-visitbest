// list-polls.mjs — generic "listicle + Open Poll" pages for VisitBest.
//
// House pattern: scripts/build.mjs strips <script>/<style> from posts.json
// content, so an interactive poll cannot live inside a post. Poll pages are
// therefore rendered by a dedicated module (like scripts/bigg-boss.mjs) and
// wired into build.mjs: addRoute + a render loop + the search index.
//
// This module is deliberately generic — no Bigg Boss branding — so future
// actress/celebrity list articles can reuse it by adding an entry to
// `listPolls` with the same field shape as the Bigg Boss polls:
// slug, image, title, h1, lead, heroBadge, leaderNote, question, textOptions
// ({id, label, sub, image}), voteDistribution ({id: seededVotes}),
// openedDate, buttonLabel, metaDesc, sectionsHtml.
//
// Poll behaviour: the seeded voteDistribution is the starting figure baked
// into the page. A reader's own vote is stored in their browser
// (localStorage, key "vb-listpoll-<slug>") and shown as +1 on top of the
// seeded figures. One vote per browser. Open Poll — audience sentiment only.

const esc = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

export const LIST_POLL_DISCLAIMER =
  "Open Poll — for audience sentiment only. This is a VisitBest reader poll with seeded starting figures; it is not an official vote of any kind.";

function renderListPollDisclaimer() {
  return `<section class="lp-disclaimer" role="note" aria-label="Open Poll disclaimer">
    <h2>Open Poll</h2>
    <p><strong>Open Poll — for audience sentiment only.</strong> This is a VisitBest reader poll with seeded starting figures; it is not an official vote of any kind. The standings show how VisitBest readers feel — nothing on this page is connected to any award, show or official result.</p>
  </section>`;
}

// ---------------------------------------------------------------------------
// Article body for the Hong Kong list. Facts are drawn only from the
// verified research file for this list (Wikipedia-based, 25 Nov 2026).
// ---------------------------------------------------------------------------

const hkSections = `
<section class="lp-article">
  <h2>The faces of a golden decade</h2>
  <p>In the 1990s, Hong Kong was one of the most productive film industries on earth, and its leading ladies were famous far beyond the territory. Their faces carried wuxia epics, Stephen Chow comedies, Wong Kar-wai romances and John Woo-style crime films to audiences across Asia and, increasingly, to the West. Beauty mattered, but so did presence: the women on this list were not decorations on a poster. They were the reason the tickets sold.</p>
  <p>We chose the ten on three measures: how famous they were in the era itself, the signature roles audiences still name first, and how strongly they are still recognised today. Every profile pairs a photograph from her era with a recent one, because the honest then-and-now contrast is the point of the list. One honest note before the rankings: most of these women left the industry years ago and live private lives. Two of them — Joey Wong and Sharla Cheung — are rarely photographed now, so their "now" pictures are simply the most recent widely shared photographs of them, and we have not printed a year we cannot verify.</p>
</section>

<section class="lp-article">
  <h2>The list at a glance</h2>
  <div class="lp-tablewrap">
  <table class="lp-table">
    <thead><tr><th style="background:#3b1032;color:#ffffff">Name</th><th style="background:#3b1032;color:#ffffff">Born</th><th style="background:#3b1032;color:#ffffff">Signature 90s role</th><th style="background:#3b1032;color:#ffffff">Where she is now</th></tr></thead>
    <tbody>
      <tr><td>Maggie Cheung</td><td>20 September 1964</td><td>Center Stage (1991)</td><td>Stepped back from acting; UNICEF ambassador; occasional public appearances</td></tr>
      <tr><td>Brigitte Lin</td><td>3 November 1954</td><td>Dongfang Bubai in Swordsman II (1992)</td><td>Retired since 1994; essay writer; Golden Horse Lifetime Achievement Award in 2023</td></tr>
      <tr><td>Joey Wong</td><td>31 January 1967</td><td>Nip Siu-sin in A Chinese Ghost Story (1987)</td><td>Retired; lives in Vancouver; opened a moxibustion centre in 2024</td></tr>
      <tr><td>Michele Reis</td><td>20 June 1970</td><td>The Killer's Agent in Fallen Angels (1995)</td><td>Withdrew from acting; family and charity work; occasional appearances</td></tr>
      <tr><td>Rosamund Kwan</td><td>24 September 1962</td><td>Thirteenth Aunt in Once Upon a Time in China (1991)</td><td>Retired since 2007; briefly ran a skincare brand; out of the industry</td></tr>
      <tr><td>Athena Chu</td><td>25 October 1971</td><td>Zixia Fairy in A Chinese Odyssey (1995)</td><td>Still acts occasionally; came back in 2016 after a five-year break</td></tr>
      <tr><td>Sharla Cheung</td><td>1967 or 1968 (reported both ways)</td><td>Stephen Chow's leading lady in God of Gamblers II (1990) and Royal Tramp (1992)</td><td>Left films in the mid-1990s for business; occasional later screen work</td></tr>
      <tr><td>Chingmy Yau</td><td>16 May 1968</td><td>Naked Killer (1992)</td><td>Retired since her 1999 marriage; family life; no comeback</td></tr>
      <tr><td>Gigi Lai</td><td>1 October 1971</td><td>Smartie in Young and Dangerous (1996)</td><td>Retired from entertainment in 2008; businesswoman and company chairman</td></tr>
      <tr><td>Vivian Chow</td><td>10 November 1967</td><td>The Greed of Man (1992), and the original "Jade Girl" image</td><td>Semi-retired singer; part-time concerts and charity work</td></tr>
    </tbody>
  </table>
  </div>
  <figure class="lp-wide">
    <img src="/assets/hk-actresses/timeline.webp" alt="Timeline of signature roles that defined 90s Hong Kong cinema, from A Chinese Ghost Story in 1987 to Young and Dangerous in 1996" loading="lazy">
    <figcaption>The performances that defined the decade, year by year.</figcaption>
  </figure>
</section>

<section class="lp-article lp-profile" id="maggie-cheung">
  <h2>1. Maggie Cheung</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/maggie-cheung-then.webp" alt="Maggie Cheung in In the Mood for Love, at the height of her fame" loading="lazy">
      <figcaption><span class="lp-when">Then</span> Maggie Cheung in In the Mood for Love (2000), the role the world knows her by.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/maggie-cheung-now.webp" alt="Maggie Cheung in a recent photograph" loading="lazy">
      <figcaption><span class="lp-when">Now</span> Maggie Cheung at a brand event in Shanghai, in a recent photograph.</figcaption>
    </figure>
  </div>
  <p>Maggie Cheung's 90s were a masterclass in range. She won the Best Actress award at the Berlin International Film Festival for Center Stage (1991), then moved between Green Snake (1993), the French art-house detour Irma Vep (1996) and the beloved romance Comrades: Almost a Love Story (1996). Just after the decade closed she gave the performance that defines her for international audiences, in In the Mood for Love (2000), and won Best Actress at Cannes for Clean (2004).</p>
  <p>She has stepped back from acting since the late 2000s without ever formally announcing a retirement; Clean remains her last lead role. She was appointed a UNICEF ambassador in 2010, appeared at a BFI Southbank retrospective of her films in London in September 2024, and joined Xiaohongshu in August 2025, to the delight of fans who rarely get to see her.</p>
</section>

<section class="lp-article lp-profile" id="brigitte-lin">
  <h2>2. Brigitte Lin</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/brigitte-lin-then.webp" alt="Brigitte Lin in her early screen career" loading="lazy">
      <figcaption><span class="lp-when">Then</span> Brigitte Lin in her early screen years, before the wuxia classics.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/brigitte-lin-now.webp" alt="Brigitte Lin in a recent portrait" loading="lazy">
      <figcaption><span class="lp-when">Now</span> Brigitte Lin in a recent portrait, decades after her retirement.</figcaption>
    </figure>
  </div>
  <p>For many fans this list has only one possible name at the top. Brigitte Lin's androgynous, commanding Dongfang Bubai in Swordsman II (1992) is her most iconic role — Time magazine listed the performance among the ten greatest in cinema history. The same years brought New Dragon Gate Inn (1992), The Bride with White Hair (1993) and two Wong Kar-wai films in a single year, Chungking Express and Ashes of Time (both 1994). No other actress of the era mixed beauty and menace quite like her.</p>
  <p>She retired from acting on her marriage in 1994, at the height of her fame, and never returned to film. She became an essay writer, publishing four essay collections, received an honorary doctorate from the University of Hong Kong in April 2023, and was honoured with the Lifetime Achievement Award at the 60th Golden Horse Awards in 2023.</p>
</section>

<section class="lp-article lp-profile" id="joey-wong">
  <h2>3. Joey Wong</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/joey-wong-then.webp" alt="Joey Wong as Nip Siu-sin in A Chinese Ghost Story" loading="lazy">
      <figcaption><span class="lp-when">Then</span> Joey Wong as the ghost Nip Siu-sin in A Chinese Ghost Story, the role that made her.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/joey-wong-now.webp" alt="Joey Wong in a recent photograph" loading="lazy">
      <figcaption><span class="lp-when">Now</span> Joey Wong in a recent photograph, shared from her private life in Canada.</figcaption>
    </figure>
  </div>
  <p>Joey Wong was one of the "Four Flowers" of Hong Kong cinema, and her fame rests on one of the most beloved performances of the era: the gentle ghost Nip Siu-sin in the A Chinese Ghost Story series (1987–1991). She followed it with Green Snake (1993), playing the White Snake opposite Maggie Cheung, and City Hunter (1993). Taiwanese-born, she became a star entirely through Hong Kong films.</p>
  <p>She announced her intention to retire in 1994, worked only occasionally afterwards, and made her final film, Shanghai Story, in 2004. She emigrated to Vancouver, Canada, where she lives a devout Buddhist life away from the cameras. In 2024 she opened a moxibustion centre in Vancouver — a rare piece of news from one of the most private stars on this list, which is why her recent photograph above carries no year: it is the most recent widely shared one, and we will not guess at a date.</p>
</section>

<section class="lp-article lp-profile" id="michele-reis">
  <h2>4. Michele Reis</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/michele-reis-then.webp" alt="Michele Reis in a 1990s portrait" loading="lazy">
      <figcaption><span class="lp-when">Then</span> Michele Reis in a 1990s portrait, at the height of her fame.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/michele-reis-now.webp" alt="Michele Reis at a recent event" loading="lazy">
      <figcaption><span class="lp-when">Now</span> Michele Reis at a recent event appearance.</figcaption>
    </figure>
  </div>
  <p>Michele Reis arrived with two crowns — Miss Hong Kong and the first Miss Chinese International, both in 1988 — and then proved she could act. She appeared in Swordsman II (1992) and the Fong Sai-yuk films (1993), and gave her most famous performance outside the Chinese-speaking world as the Killer's Agent in Wong Kar-wai's Fallen Angels (1995). Her own favourite of her roles is Emerald in Flowers of Shanghai (1998).</p>
  <p>She withdrew from acting from the early 2000s to focus on family and charity, marrying Julian Hui in 2008; her last film role to date is in Bodyguards and Assassins (2009). She still appears in public from time to time, including as a guest judge on ViuTV's King Maker IV in December 2021, and her poise at those appearances is a large part of why she ranks this high.</p>
</section>

<section class="lp-article lp-profile" id="rosamund-kwan">
  <h2>5. Rosamund Kwan</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/rosamund-kwan-then.webp" alt="Rosamund Kwan as Thirteenth Aunt in Once Upon a Time in China" loading="lazy">
      <figcaption><span class="lp-when">Then</span> Rosamund Kwan as Thirteenth Aunt in Once Upon a Time in China.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/rosamund-kwan-now.webp" alt="Rosamund Kwan at a recent event" loading="lazy">
      <figcaption><span class="lp-when">Now</span> Rosamund Kwan at a recent event, long after her retirement.</figcaption>
    </figure>
  </div>
  <p>Rosamund Kwan, daughter of Shaw Brothers actor Kwan Shan, became the romantic heart of the Once Upon a Time in China series (1991–1997) as Thirteenth Aunt, opposite Jet Li's Wong Fei-hung. It is one of the defining pairings of 90s Hong Kong cinema, and she also appeared in Swordsman II (1992). Her classic, poised beauty made her the era's idea of elegance.</p>
  <p>Her last film was Hands in the Hair (2006), and she announced her retirement from acting in 2007. She launched a skincare brand, RK Beauty, in 2015; it was liquidated the following year. Since then she has stayed out of the industry, which makes her occasional event appearances a genuine treat for long-time fans.</p>
</section>

<section class="lp-article lp-profile" id="athena-chu">
  <h2>6. Athena Chu</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/athena-chu-then.webp" alt="Athena Chu as Zixia Fairy in A Chinese Odyssey" loading="lazy">
      <figcaption><span class="lp-when">Then</span> Athena Chu as Zixia Fairy in A Chinese Odyssey (1995).</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/athena-chu-now.webp" alt="Athena Chu at a recent television appearance" loading="lazy">
      <figcaption><span class="lp-when">Now</span> Athena Chu at a recent television appearance.</figcaption>
    </figure>
  </div>
  <p>Athena Chu debuted in Fight Back to School II (1992), earning a Hong Kong Film Award Best New Performer nomination, and then landed the role she will always be named for: Zixia Fairy in Stephen Chow's A Chinese Odyssey Part One: Pandora's Box and Part Two: Cinderella (both 1995). A generation of fans can quote her lines from those films. She closed the decade with a Golden Horse Best Actress nomination for The Boss Up There (1999).</p>
  <p>She is one of the few women on this list still working. After a five-year hiatus from 2011 she announced a comeback in 2016, appeared in Once Again (2017) and The Lingering (2018), and was still making public appearances into 2023. She married Paul Wong of the band Beyond in 2012.</p>
</section>

<section class="lp-article lp-profile" id="sharla-cheung">
  <h2>7. Sharla Cheung</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/sharla-cheung-then.webp" alt="Sharla Cheung in a 1990s portrait" loading="lazy">
      <figcaption><span class="lp-when">Then</span> Sharla Cheung in a 1990s portrait, from her Stephen Chow years.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/sharla-cheung-now.webp" alt="Sharla Cheung in a recent photograph" loading="lazy">
      <figcaption><span class="lp-when">Now</span> Sharla Cheung in a recent photograph, from a rare public appearance.</figcaption>
    </figure>
  </div>
  <p>Sharla Cheung was Stephen Chow's most frequent leading lady, appearing with him in more than ten films between 1988 and 1994: All for the Winner (1990), God of Gamblers II (1990), Fight Back to School (1991), Royal Tramp (1992), King of Beggars (1992) and Hail the Judge (1994) among them. If 90s Hong Kong comedy had a first lady, it was her — glamorous, quick and never merely decorative.</p>
  <p>She retired from film in the mid-1990s after two films she produced herself, Dream Lover and Romantic Dream (both 1995), failed commercially, and moved into business. She returned for mainland television work in the 2000s, including Diao Chan (2002), and appeared in the short film Inn in 2022. She is rarely photographed today, so — as with Joey Wong — her recent photograph above is the most recent widely shared one and carries no printed year. Her birth year is also reported two ways, 1967 and 1968; we print both rather than pretend certainty.</p>
</section>

<section class="lp-article lp-profile" id="chingmy-yau">
  <h2>8. Chingmy Yau</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/chingmy-yau-then.webp" alt="Chingmy Yau in a 1990s portrait" loading="lazy">
      <figcaption><span class="lp-when">Then</span> Chingmy Yau in a 1990s portrait, in her Naked Killer years.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/chingmy-yau-now.webp" alt="Chingmy Yau at a recent event" loading="lazy">
      <figcaption><span class="lp-when">Now</span> Chingmy Yau at a recent event, decades after retiring.</figcaption>
    </figure>
  </div>
  <p>Chingmy Yau was the bold face of early-90s Hong Kong cinema. Naked Killer (1992) became a cult classic, made her a 90s sex symbol and earned her a Hong Kong Film Award Best Actress nomination; she had already been nominated as Best Supporting Actress for Lee Rock (1991), appeared in Royal Tramp (1992), and was nominated as Best Actress again for Hold You Tight (1998). A former Miss Hong Kong 1987 contestant, she built a career on confidence as much as beauty.</p>
  <p>She retired on her marriage in 1999 to Sham Kar Wai, founder of the fashion group I.T, and has never made a comeback. The couple have three daughters; the eldest, Ayla Sham, is a model. Chingmy Yau's public appearances are rare, which is exactly why each new photograph of her travels so fast among fans.</p>
</section>

<section class="lp-article lp-profile" id="gigi-lai">
  <h2>9. Gigi Lai</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/gigi-lai-then.webp" alt="Gigi Lai in a 1990s glamour portrait" loading="lazy">
      <figcaption><span class="lp-when">Then</span> Gigi Lai in a 1990s glamour portrait.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/gigi-lai-now.webp" alt="Gigi Lai at a recent event" loading="lazy">
      <figcaption><span class="lp-when">Now</span> Gigi Lai at a recent event, in her businesswoman years.</figcaption>
    </figure>
  </div>
  <p>Hong Kong media nicknamed Gigi Lai the "Goddess of Beauty", and the name stuck for three decades. In the 90s she was mainly a singer and a TVB actress; her best-known film role of the decade is Smartie in Young and Dangerous (1996) and its sequels. Her biggest acting fame actually arrived in the 2000s, on television — War and Beauty (2004), which won her TVB's Best Actress award, and The Gem of Life (2008–09).</p>
  <p>She retired from entertainment after marrying businessman Patrick Ma in 2008, announcing the decision at The Gem of Life premiere, partly to run her injured brother's business. She is now a businesswoman and the chairman of a listed company — a second act as polished as the first.</p>
</section>

<section class="lp-article lp-profile" id="vivian-chow">
  <h2>10. Vivian Chow</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/vivian-chow-then.webp" alt="Vivian Chow in an early-1990s portrait" loading="lazy">
      <figcaption><span class="lp-when">Then</span> Vivian Chow in an early-1990s portrait, the original Jade Girl.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/hk-actresses/vivian-chow-now.webp" alt="Vivian Chow at a recent event" loading="lazy">
      <figcaption><span class="lp-when">Now</span> Vivian Chow at a recent event, still performing part-time.</figcaption>
    </figure>
  </div>
  <p>Vivian Chow was first a Cantopop singer, and the era's defining "Jade Girl" idol — the wholesome, long-haired image a generation grew up with. Her best-known acting role was on television, in the TVB classic The Greed of Man (1992), while her 90s film roles were mostly supporting parts, including The Perfect Match (1991) and The Kung Fu Scholar (1994). She closes this list because no account of 90s Hong Kong beauty is complete without her, even if her fame was built on stage and TV as much as on film.</p>
  <p>Semi-retired from the late 1990s, when she moved to Vancouver, she returned part-time from 2004: comeback concerts at the Hong Kong Coliseum in 2006 and the "Deep V.25" concert in 2011, a film role in Café. Waiting. Love (2014), and steady charity work. Reports in 2025 spoke of tour preparation and new music — the Jade Girl, still singing.</p>
</section>

<section class="lp-article">
  <h2>How this Open Poll works</h2>
  <p>The poll at the top of this page opened on 25 November 2026 with seeded starting figures, so the standings were never an empty row of zeros. You may vote once from your browser; your vote is stored only in your own browser and is added to the figure you see. The standings are a running picture of reader sentiment, nothing more — they decide nothing, they are attached to no award, and reasonable people will argue with them. That argument is the fun of it.</p>
</section>

<section class="lp-article lp-faq">
  <h2>Frequently asked questions</h2>
  <h3>Who is considered the most beautiful 90s Hong Kong actress?</h3>
  <p>There is no single settled answer. Brigitte Lin and Maggie Cheung are the two names most often put first — Lin for Swordsman II and her Wong Kar-wai films, Cheung for Center Stage and In the Mood for Love. In the VisitBest Open Poll at the top of this page, Maggie Cheung currently leads Brigitte Lin; that is reader sentiment, not a verdict.</p>
  <h3>Is this poll official?</h3>
  <p>No. It is a VisitBest reader poll that opened with seeded starting figures. It is not connected to any award, broadcaster, studio or official vote of any kind, and its percentages measure audience sentiment only.</p>
  <h3>Where are they now?</h3>
  <p>Most have left the screen: Brigitte Lin retired in 1994 and writes essays; Chingmy Yau retired on her 1999 marriage; Rosamund Kwan retired in 2007; Gigi Lai retired in 2008 and is now a businesswoman; Joey Wong lives privately in Vancouver. Maggie Cheung stepped back from acting without formally retiring. Athena Chu still acts occasionally, Vivian Chow performs part-time, and Michele Reis makes occasional public and charity appearances.</p>
  <h3>Why does the list use then-and-now photos?</h3>
  <p>Because the contrast is the story. The "then" photographs show the era that made each woman famous; the "now" photographs are recent public appearances, so readers can see both honestly. Where a star lives privately and recent photographs are scarce — Joey Wong and Sharla Cheung — we use the most recent widely shared photograph and say so, rather than printing a year we cannot verify.</p>
</section>

<section class="lp-article lp-credits">
  <h2>Photo credits</h2>
  <p>Photos via Pinterest, identity-checked against reference portraits before use. Source pins:</p>
  <ul class="lp-creditlist">
    <li>Brigitte Lin — <a href="https://www.pinterest.com/pin/563161128388026137/" rel="nofollow noopener" target="_blank">then</a> · <a href="https://www.pinterest.com/pin/662592163935266194/" rel="nofollow noopener" target="_blank">now</a></li>
    <li>Maggie Cheung — <a href="https://www.pinterest.com/pin/306385580913692535/" rel="nofollow noopener" target="_blank">then</a> · <a href="https://www.pinterest.com/pin/4590716253879747584/" rel="nofollow noopener" target="_blank">now</a></li>
    <li>Michele Reis — <a href="https://www.pinterest.com/pin/746330969520651508/" rel="nofollow noopener" target="_blank">then</a> · <a href="https://www.pinterest.com/pin/50172983345174970/" rel="nofollow noopener" target="_blank">now</a></li>
    <li>Joey Wong — <a href="https://www.pinterest.com/pin/17310779810973398/" rel="nofollow noopener" target="_blank">then</a> · <a href="https://www.pinterest.com/pin/666462444857104639/" rel="nofollow noopener" target="_blank">now</a></li>
    <li>Rosamund Kwan — <a href="https://www.pinterest.com/pin/798051996465344594/" rel="nofollow noopener" target="_blank">then</a> · <a href="https://www.pinterest.com/pin/718324209291745761/" rel="nofollow noopener" target="_blank">now</a></li>
    <li>Chingmy Yau — <a href="https://www.pinterest.com/pin/817966351096080310/" rel="nofollow noopener" target="_blank">then</a> · <a href="https://www.pinterest.com/pin/522558363010810400/" rel="nofollow noopener" target="_blank">now</a></li>
    <li>Sharla Cheung — <a href="https://www.pinterest.com/pin/464363411549027132/" rel="nofollow noopener" target="_blank">then</a> · <a href="https://www.pinterest.com/pin/680606562436817637/" rel="nofollow noopener" target="_blank">now</a></li>
    <li>Vivian Chow — <a href="https://www.pinterest.com/pin/543739354990047729/" rel="nofollow noopener" target="_blank">then</a> · <a href="https://www.pinterest.com/pin/391179917604597672/" rel="nofollow noopener" target="_blank">now</a></li>
    <li>Athena Chu — <a href="https://www.pinterest.com/pin/668643875976829135/" rel="nofollow noopener" target="_blank">then</a> · <a href="https://www.pinterest.com/pin/925489792177204175/" rel="nofollow noopener" target="_blank">now</a></li>
    <li>Gigi Lai — <a href="https://www.pinterest.com/pin/627126316876842416/" rel="nofollow noopener" target="_blank">then</a> · <a href="https://www.pinterest.com/pin/797277940307711364/" rel="nofollow noopener" target="_blank">now</a></li>
  </ul>
</section>
`;

const auSections = `
<section class="lp-article">
  <h2>A small country with an outsized screen presence</h2>
  <p>Australia has about 27 million people, yet its actresses headline Hollywood films, anchor prestige television and collect the industry's biggest awards at a rate far beyond the country's size. This list ranks the ten Australian actresses who combine that screen achievement with the kind of presence audiences remember — and every photograph is a recent one, because this is a list about who they are now, not a then-and-now comparison.</p>
  <p>The ranking weighs current prominence, signature roles and honours. It is not just our opinion, either: five of these ten women were nominated for the 2026 AACTA Audience Choice Award for Favourite Australian Actress — and the winner, Margot Robbie, tops this list too. Cast your own vote in the Open Poll at the top of the page.</p>
  <figure class="lp-wide">
    <img src="/assets/au-actresses/by-the-numbers.webp" alt="Infographic: Australian screen queens by the numbers — three Academy Awards, five of the ten are 2026 AACTA Favourite Australian Actress nominees, four Primetime Emmy Awards" loading="lazy">
    <figcaption>The honours behind the list, counted.</figcaption>
  </figure>
</section>

<section class="lp-article">
  <h2>The list at a glance</h2>
  <div class="lp-tablewrap">
  <table class="lp-table">
    <thead><tr><th style="background:#3b1032;color:#ffffff">Name</th><th style="background:#3b1032;color:#ffffff">Born</th><th style="background:#3b1032;color:#ffffff">Signature role</th><th style="background:#3b1032;color:#ffffff">Where she is now</th></tr></thead>
    <tbody>
      <tr><td>Margot Robbie</td><td>2 July 1990, Gold Coast</td><td>Barbie in Barbie (2023)</td><td>Stars as Catherine Earnshaw in Wuthering Heights (2026); co-founded LuckyChap Entertainment</td></tr>
      <tr><td>Nicole Kidman</td><td>20 June 1967, Honolulu, raised in Sydney</td><td>Virginia Woolf in The Hours (2002)</td><td>Leads the crime series Scarpetta (2026–present)</td></tr>
      <tr><td>Cate Blanchett</td><td>14 May 1969, Melbourne</td><td>Jasmine French in Blue Jasmine (2013)</td><td>Starred in Black Bag and Father Mother Sister Brother (2025)</td></tr>
      <tr><td>Sarah Snook</td><td>1 December 1987, Adelaide</td><td>Shiv Roy in Succession (2018–2023)</td><td>Leads and executive-produces All Her Fault (2025)</td></tr>
      <tr><td>Elizabeth Debicki</td><td>24 August 1990, Paris, raised in Melbourne</td><td>Diana, Princess of Wales, in The Crown (2022–2023)</td><td>Made her West End debut in My Master Builder (2025)</td></tr>
      <tr><td>Rose Byrne</td><td>24 July 1979, Sydney</td><td>Helen Harris in Bridesmaids (2011)</td><td>Leads Platonic; Oscar-nominated for If I Had Legs I'd Kick You (2025)</td></tr>
      <tr><td>Rebel Wilson</td><td>2 March 1980, Sydney</td><td>Fat Amy in the Pitch Perfect films (2012–2017)</td><td>Directs, writes and stars in Girl Group (2026)</td></tr>
      <tr><td>Isla Fisher</td><td>3 February 1976, Muscat, raised in Perth</td><td>Gloria Cleary in Wedding Crashers (2005)</td><td>Stars in Wolf Like Me (2022–present)</td></tr>
      <tr><td>Katherine Langford</td><td>29 April 1996, Perth</td><td>Hannah Baker in 13 Reasons Why (2017–2018)</td><td>Played Sally Bowles in Cabaret in the West End (2024–2025)</td></tr>
      <tr><td>Mia Wasikowska</td><td>25 October 1989, Canberra</td><td>Alice Kingsleigh in Alice in Wonderland (2010)</td><td>Works in independent film; most recent credit Leviticus (2026)</td></tr>
    </tbody>
  </table>
  </div>
  <p>Three of the ten were born outside Australia — Nicole Kidman in Honolulu, Elizabeth Debicki in Paris and Isla Fisher in Muscat — and all three were raised in Australia, as their profiles below explain. Dates and honours are as stated in each actress's Wikipedia profile, checked in November 2026.</p>
</section>

<section class="lp-article lp-profile" id="margot-robbie">
  <h2>1. Margot Robbie</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/au-actresses/margot-robbie-1.webp" alt="Margot Robbie in a pink gown at the Golden Globes 2024" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Margot Robbie at the Golden Globes, in the pink of her Barbie era.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/au-actresses/margot-robbie-2.webp" alt="Margot Robbie in a red rose gown at the Critics' Choice Awards 2024" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Margot Robbie at the Critics' Choice Awards.</figcaption>
    </figure>
  </div>
  <p>Born on the Gold Coast in 1990, Margot Robbie broke through as Naomi Lapaglia in The Wolf of Wall Street (2013), then built a run few actors of her generation can match: Harley Quinn across three films, an Oscar-nominated turn as Tonya Harding in I, Tonya (2017), and Barbie (2023), the year's biggest film. She was the world's highest-paid actress in 2023.</p>
  <p>Through LuckyChap Entertainment, the company she co-founded in 2014, she also produces much of what she stars in. She now plays Catherine Earnshaw in Wuthering Heights (2026), and Australian audiences have just had their say: she won the 2026 AACTA Audience Choice Award for Favourite Australian Actress. Her honours include seven AACTA Awards and three Critics' Choice Awards, with nominations for three Academy Awards, six BAFTAs and four Golden Globes.</p>
</section>

<section class="lp-article lp-profile" id="nicole-kidman">
  <h2>2. Nicole Kidman</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/au-actresses/nicole-kidman-1.webp" alt="Nicole Kidman in a silver beaded dress at a recent red-carpet appearance" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Nicole Kidman at a recent red-carpet appearance.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/au-actresses/nicole-kidman-2.webp" alt="Nicole Kidman with long wavy blonde hair at a recent event" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Nicole Kidman in a strapless embellished gown.</figcaption>
    </figure>
  </div>
  <p>Nicole Kidman was born in Honolulu in 1967 to Australian parents and raised in Sydney from the age of three — and she became the first Australian to win the Academy Award for Best Actress, for playing Virginia Woolf in The Hours (2002). Satine in Moulin Rouge! (2001) made her a global star; Celeste Wright in Big Little Lies (2017–2019) made her a television one too.</p>
  <p>Nearly six decades in, the work has not slowed: she won the Volpi Cup at Venice for Babygirl (2024), became the first Australian actor to receive the AFI Life Achievement Award in 2024, and now leads the crime series Scarpetta (2026–present). Her honours include an Academy Award, a BAFTA, six Golden Globes and two Primetime Emmys, and she has served UNICEF since 1994 and UN Women since 2006 as a goodwill ambassador.</p>
</section>

<section class="lp-article lp-profile" id="cate-blanchett">
  <h2>3. Cate Blanchett</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/au-actresses/cate-blanchett-1.webp" alt="Cate Blanchett in a burgundy dress at the BAFTA Film Awards" loading="lazy">
      <figcaption><span class="lp-when">BAFTA</span> Cate Blanchett at the BAFTA Film Awards.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/au-actresses/cate-blanchett-2.webp" alt="Cate Blanchett in a gold beaded gown at the Golden Globes 2025" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Cate Blanchett at the Golden Globes.</figcaption>
    </figure>
  </div>
  <p>Melbourne-born Cate Blanchett, born in 1969, is the most-nominated Australian in Academy Awards history. She won the Oscar for Best Supporting Actress playing Katharine Hepburn in The Aviator (2004) and for Best Actress as Jasmine French in Blue Jasmine (2013), alongside four BAFTAs and four Golden Globes. For a generation of filmgoers she is also Galadriel in The Lord of the Rings.</p>
  <p>Her recent run is as strong as any in her career: the Apple TV+ miniseries Disclaimer (2024), Steven Soderbergh's Black Bag (2025), Jim Jarmusch's Father Mother Sister Brother (2025), which won the Golden Lion at Venice, and The Seagull on stage at London's Barbican in 2025. Lydia Tár in Tár (2022) added yet another defining role.</p>
</section>

<section class="lp-article lp-profile" id="sarah-snook">
  <h2>4. Sarah Snook</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/au-actresses/sarah-snook-1.webp" alt="Sarah Snook laughing at the Olivier Awards 2024" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Sarah Snook at the Olivier Awards.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/au-actresses/sarah-snook-2.webp" alt="Sarah Snook in a cream gown at the Tony Awards 2025" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Sarah Snook at the Tony Awards.</figcaption>
    </figure>
  </div>
  <p>Adelaide-born Sarah Snook, born in 1987, spent years as one of Australia's best-kept secrets — Predestination (2014) showed what she could do — before Succession (2018–2023) made her Shiv Roy one of television's defining characters and won her a Primetime Emmy and two Golden Globes.</p>
  <p>Then she did something almost no one attempts: played all 26 roles in The Picture of Dorian Gray on stage, winning both the Olivier Award in London and the Tony Award on Broadway for Best Actress in a Play. She voiced Grace Pudel in Memoir of a Snail (2024) and now leads and executive-produces the limited series All Her Fault (2025). Six AACTA Awards round out the shelf.</p>
</section>

<section class="lp-article lp-profile" id="elizabeth-debicki">
  <h2>5. Elizabeth Debicki</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/au-actresses/elizabeth-debicki-1.webp" alt="Elizabeth Debicki in a beaded off-shoulder dress at the Governors Awards" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Elizabeth Debicki at the Governors Awards.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/au-actresses/elizabeth-debicki-2.webp" alt="Elizabeth Debicki in a silver-blue gown at the SAG Awards 2024" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Elizabeth Debicki at the SAG Awards.</figcaption>
    </figure>
  </div>
  <p>Elizabeth Debicki was born in Paris in 1990 to a Polish father and an Australian mother, both ballet dancers, and was raised in Melbourne from the age of five. The Great Gatsby (2013), The Night Manager (2016), Widows (2018) and Tenet (2020) established her cool, statuesque screen presence.</p>
  <p>Her portrayal of Diana, Princess of Wales, in the final two seasons of The Crown (2022–2023) brought her a Primetime Emmy — the first won by an Australian in that supporting category — plus a Golden Globe and a Critics' Choice Award, to go with three AACTA Awards. She has since starred in MaXXXine (2024) and made her West End debut in My Master Builder (2025).</p>
</section>

<section class="lp-article lp-profile" id="rose-byrne">
  <h2>6. Rose Byrne</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/au-actresses/rose-byrne-1.webp" alt="Rose Byrne in a black strapless gown at the DGA Awards 2024" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Rose Byrne at the DGA Awards.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/au-actresses/rose-byrne-2.webp" alt="Rose Byrne in a champagne gown at the EE BAFTA Film Awards 2026" loading="lazy">
      <figcaption><span class="lp-when">2026</span> Rose Byrne at the EE BAFTA Film Awards in London, February 2026.</figcaption>
    </figure>
  </div>
  <p>Sydney-born Rose Byrne, born in 1979, moves between drama and comedy as easily as anyone working today: Ellen Parsons in Damages (2007–2012), Helen Harris in Bridesmaids (2011), the Insidious films, and acclaimed leads in Physical (2021–2023) and Platonic (2023–present). Her first major honour came early — the Volpi Cup at Venice for The Goddess of 1967 (2000).</p>
  <p>Her most recent run may be her best. If I Had Legs I'd Kick You (2025) won her the Silver Bear at Berlin and a Golden Globe, plus a nomination for the Academy Award for Best Actress, and she has followed it with a Tony-nominated Broadway turn in Fallen Angels (2026). She is one of the few actors nominated for the Triple Crown of Acting.</p>
</section>

<section class="lp-article lp-profile" id="rebel-wilson">
  <h2>7. Rebel Wilson</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/au-actresses/rebel-wilson-1.webp" alt="Rebel Wilson in a black off-shoulder gown at the Toronto International Film Festival 2026" loading="lazy">
      <figcaption><span class="lp-when">2026</span> Rebel Wilson at the Toronto International Film Festival.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/au-actresses/rebel-wilson-2.webp" alt="Rebel Wilson in a black feathered gown at the AACTA Awards 2024" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Rebel Wilson at the AACTA Awards on the Gold Coast.</figcaption>
    </figure>
  </div>
  <p>Sydney-born Rebel Wilson, born in 1980, stole Bridesmaids (2011) in a handful of scenes and then built a franchise on the role of Fat Amy in the Pitch Perfect films (2012–2017), winning MTV and Teen Choice comedy awards along the way. Isn't It Romantic and The Hustle (both 2019) were her first lead roles.</p>
  <p>She has since stepped behind the camera as well: her directorial debut was the Australian musical comedy The Deb, and she directs, produces, writes and stars in Girl Group (2026). Australian audiences still claim her as one of their own — she was a 2026 AACTA Audience Choice nominee for Favourite Australian Actress.</p>
</section>

<section class="lp-article lp-profile" id="isla-fisher">
  <h2>8. Isla Fisher</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/au-actresses/isla-fisher-1.webp" alt="Isla Fisher in a red gown at the TIME Women of the Year Gala 2026" loading="lazy">
      <figcaption><span class="lp-when">2026</span> Isla Fisher at the TIME Women of the Year Gala.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/au-actresses/isla-fisher-2.webp" alt="Isla Fisher in a black one-shoulder gown at the Vanity Fair Oscar Party 2024" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Isla Fisher at the Vanity Fair Oscar Party.</figcaption>
    </figure>
  </div>
  <p>Isla Fisher was born in Muscat, Oman, in 1976 to Scottish parents and raised in Perth from the age of six — and she has described her own sensibility as Australian. Australians first knew her as Shannon Reed in Home and Away (1994–1997); the world met her as Gloria Cleary in Wedding Crashers (2005), which won her the MTV award for best breakthrough performance.</p>
  <p>Confessions of a Shopaholic (2009) and Now You See Me (2013) followed, and she now stars in the comedy-drama Wolf Like Me (2022–present) and voiced a role in Dog Man (2025). Off screen she writes the Marge in Charge children's books. Like four others on this list, she was a 2026 AACTA Audience Choice nominee for Favourite Australian Actress.</p>
</section>

<section class="lp-article lp-profile" id="katherine-langford">
  <h2>9. Katherine Langford</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/au-actresses/katherine-langford-1.webp" alt="Katherine Langford in a red fringed gown at the Cannes Film Festival 2024" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Katherine Langford at the Cannes Film Festival.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/au-actresses/katherine-langford-2.webp" alt="Katherine Langford in a silver halter gown at the Cannes Film Festival 2023" loading="lazy">
      <figcaption><span class="lp-when">2023</span> Katherine Langford at Cannes the year before.</figcaption>
    </figure>
  </div>
  <p>Perth-born Katherine Langford, born in 1996, became one of the most talked-about young actors in the world almost overnight as Hannah Baker in 13 Reasons Why (2017–2018), a performance that earned her a Golden Globe nomination. Love, Simon (2018) and the ensemble of Knives Out (2019) followed.</p>
  <p>Her recent prominence has been on stage: she made her stage debut as Sally Bowles in Cabaret at the Kit Kat Club in London's West End in September 2024 and played the role for 18 weeks. Her younger sister is the actress Josephine Langford.</p>
</section>

<section class="lp-article lp-profile" id="mia-wasikowska">
  <h2>10. Mia Wasikowska</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/au-actresses/mia-wasikowska-1.webp" alt="Mia Wasikowska on the Cannes red carpet in 2023" loading="lazy">
      <figcaption><span class="lp-when">2023</span> Mia Wasikowska on the Cannes red carpet.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/au-actresses/mia-wasikowska-2.webp" alt="Mia Wasikowska smiling in a close-up portrait at Cannes 2023" loading="lazy">
      <figcaption><span class="lp-when">2023</span> Mia Wasikowska at Cannes, in the most recent widely shared portraits of her.</figcaption>
    </figure>
  </div>
  <p>Canberra-born Mia Wasikowska, born in 1989, headlined one of the biggest films on earth at twenty: Alice Kingsleigh in Alice in Wonderland (2010), which won her the Australian Film Institute's International Award for Best Actress. The Kids Are All Right (2010), Jane Eyre (2011), Stoker (2013) and Crimson Peak (2015) showed her preference for distinctive, director-led work.</p>
  <p>Since her last major studio release she has worked mainly in independent films — Damsel (2018), Judy and Punch (2019) and Bergman Island (2021) among them — and her most recent credit is Leviticus (2026). She is rarely photographed in public; the portraits above are from Cannes in May 2023 — the festival red carpet and the Club Zero photocall — her most recent major festival appearance.</p>
</section>

<section class="lp-article">
  <h2>Questions readers ask</h2>
  <h3>Were all ten born in Australia?</h3>
  <p>No — and the list is honest about it. Nicole Kidman was born in Honolulu to Australian parents and raised in Sydney; Elizabeth Debicki was born in Paris and raised in Melbourne; Isla Fisher was born in Muscat and raised in Perth. Each is an Australian actress by upbringing and citizenship, as her profile records it.</p>
  <h3>Who just missed the list?</h3>
  <p>Toni Collette, Phoebe Tonkin and Samara Weaving were the closest calls. Tonkin won the 2025 AACTA Award for Best Lead Actress in a Drama Series for Boy Swallows Universe and was herself a 2026 Favourite Australian Actress nominee; Weaving was a 2026 nominee for the AACTA Rabanne Breakthrough Artist award. Any of the three could headline the next edition of this list.</p>
  <h3>Is the Open Poll an official result?</h3>
  <p>No. The Open Poll at the top of this page is a VisitBest reader poll with seeded starting figures, for audience sentiment only. It is not connected to AACTA or any other award — the AACTA result mentioned here (Margot Robbie's win) is the official one, reported from AACTA's own announcement.</p>
  <h3>Where do the facts and photographs come from?</h3>
  <p>Birth dates, roles and honours are drawn from each actress's Wikipedia profile and AACTA's own media release, checked in November 2026. The photographs are recent red-carpet and festival portraits sourced from Pinterest; every one was checked against a known reference portrait before use.</p>
</section>
`;

const cnSections = `
<section class="lp-article">
  <h2>The faces of the world's biggest drama industry</h2>
  <p>China's screen industry is enormous, and its leading actresses are famous on a scale few Western stars ever reach — a hit Chinese drama can be watched by hundreds of millions of people. This list ranks the ten Chinese actresses who combine that fame with the roles, honours and presence audiences remember, and every photograph is a recent one: this is a list about who they are now.</p>
  <p>The ranking weighs current prominence, signature roles and honours. Four of the ten have been crowned Golden Eagle Goddess — the China TV Golden Eagle Awards' public-voted honour — and the two most recent CMG Actress of the Year winners both appear. Cast your own vote in the Open Poll at the top of the page.</p>
  <figure class="lp-wide">
    <img src="/assets/cn-actresses/by-the-numbers.webp" alt="Infographic: China's screen queens by the numbers — four Golden Eagle Goddesses, three New Four Dan actresses, two back-to-back CMG Actress of the Year winners" loading="lazy">
    <figcaption>The honours behind the list, counted.</figcaption>
  </figure>
</section>

<section class="lp-article">
  <h2>The list at a glance</h2>
  <div class="lp-tablewrap">
  <table class="lp-table">
    <thead><tr><th style="background:#3b1032;color:#ffffff">Name</th><th style="background:#3b1032;color:#ffffff">Born</th><th style="background:#3b1032;color:#ffffff">Signature role</th><th style="background:#3b1032;color:#ffffff">Where she is now</th></tr></thead>
    <tbody>
      <tr><td>Liu Yifei</td><td>25 August 1987, Wuhan</td><td>Hua Mulan in Mulan (2020)</td><td>The Tale of Rose (2024); CMG Actress of the Year 2025</td></tr>
      <tr><td>Dilraba Dilmurat</td><td>3 June 1992, Ürümqi</td><td>Qiao Jingjing in You Are My Glory (2021)</td><td>Sword Rose (2025); Love Beyond the Grave (2026)</td></tr>
      <tr><td>Yang Mi</td><td>12 September 1986, Beijing</td><td>Bai Qian in Eternal Love (2017)</td><td>This Thriving Land — CMG Actress of the Year 2026</td></tr>
      <tr><td>Zhao Liying</td><td>16 October 1987, Langfang</td><td>Sheng Minglan in The Story of Minglan (2018)</td><td>The Legend of Shen Li (2024); The Dream Maker (2026)</td></tr>
      <tr><td>Yang Zi</td><td>6 November 1992, Beijing</td><td>Jin Mi in Ashes of Love (2018)</td><td>Flourished Peony (2025); Born to Be Alive (2026)</td></tr>
      <tr><td>Zhao Lusi</td><td>9 November 1998, Chengdu</td><td>Sang Zhi in Hidden Love (2023)</td><td>Love's Ambition (2025)</td></tr>
      <tr><td>Liu Shishi</td><td>10 March 1987, Beijing</td><td>Ma'ertai Ruoxi in Scarlet Heart (2011)</td><td>Kill My Sins and Love in Pavilion (2025)</td></tr>
      <tr><td>Tang Yan</td><td>6 December 1983, Shanghai</td><td>Miss Wang in Blossoms Shanghai (2023)</td><td>Blossoms Shanghai remains her most recent major credit</td></tr>
      <tr><td>Bai Lu</td><td>23 September 1994, Changzhou</td><td>Li Susu in Till the End of the Moon (2023)</td><td>Moonlight Mystique, Northward and Feud (2025)</td></tr>
      <tr><td>Yu Shuxin</td><td>18 December 1995, Shanghai</td><td>Xiao Lanhua in Love Between Fairy and Devil (2022)</td><td>Ski into Love and Speed and Love (2025)</td></tr>
    </tbody>
  </table>
  </div>
  <p>One honest note: Liu Yifei was born in Wuhan and built her career in Chinese film and television, but she moved to the United States as a child and has held US citizenship since 2002 — her profile below says so plainly. Dates and honours are as stated in each actress's Wikipedia profile, checked in November 2026.</p>
</section>

<section class="lp-article lp-profile" id="liu-yifei">
  <h2>1. Liu Yifei</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/liu-yifei-1.webp" alt="Liu Yifei in a gold beaded gown at the BVLGARI Polychroma event in Taormina, May 2025" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Liu Yifei at BVLGARI's Polychroma event in Taormina, Sicily.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/liu-yifei-2.webp" alt="Liu Yifei in a pale blue beaded gown at the same BVLGARI event" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Liu Yifei at the same event, the following evening.</figcaption>
    </figure>
  </div>
  <p>Born in Wuhan in 1987, Liu Yifei — also known as Crystal Liu — was a star in China while still a teenager: Wang Yuyan in Demi-Gods and Semi-Devils (2003), Zhao Ling'er in Chinese Paladin (2005) and Xiaolongnü in The Return of the Condor Heroes (2006) made her the defining face of a generation of wuxia drama. The world met her as Hua Mulan in Disney's Mulan (2020).</p>
  <p>Her recent years belong to television: A Dream of Splendor (2022), Meet Yourself (2023) and The Tale of Rose (2024), with Best Actress wins at the Macau International Television Festival for the first two of those and Actress of the Year at the 2025 CMG Annual Chinese TV Drama Ceremony. One fact stated plainly: she moved to the US as a child and has held US citizenship since 2002; she is on this list as a Chinese-born actress whose career was made in Chinese screen drama.</p>
</section>

<section class="lp-article lp-profile" id="dilraba-dilmurat">
  <h2>2. Dilraba Dilmurat</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/dilraba-dilmurat-1.webp" alt="Dilraba Dilmurat in a black one-shoulder gown with an embellished skirt" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Dilraba Dilmurat in a black one-shoulder gown.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/dilraba-dilmurat-2.webp" alt="Dilraba Dilmurat in a gold and black mosaic sequin gown" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Dilraba Dilmurat in a gold mosaic sequin gown.</figcaption>
    </figure>
  </div>
  <p>Dilraba Dilmurat, born in Ürümqi in 1992, is an ethnic Uyghur actress whose rise tracks modern Chinese television itself: Bai Fengjiu in Eternal Love (2017) and its sequel, the lead in Pretty Li Huizhen (2017), Li Changge in The Long Ballad (2021) and Qiao Jingjing in You Are My Glory (2021).</p>
  <p>Pretty Li Huizhen won her the Best Actress award at the China TV Golden Eagle Awards, and in 2018 she was crowned Golden Eagle Goddess at the Golden Eagle TV Art Festival. She remains at the top of the industry — Sword Rose and Love on the Turquoise Land in 2025, Love Beyond the Grave in 2026 — with a shelf of brand endorsements that reflects her commercial reach.</p>
</section>

<section class="lp-article lp-profile" id="yang-mi">
  <h2>3. Yang Mi</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/yang-mi-1.webp" alt="Yang Mi in a red strapless gown on a red carpet" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Yang Mi in a red strapless gown on the red carpet.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/yang-mi-2.webp" alt="Yang Mi in a black tulle gown at Harper's Bazaar Icons 2025" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Yang Mi at Harper's Bazaar Icons, May 2025.</figcaption>
    </figure>
  </div>
  <p>Beijing-born Yang Mi, born in 1986, has been famous for so long that Chinese media named her among the New Four Dan actresses twice, in 2009 and again in 2013. Palace (2011) made her a television star, the Tiny Times films made her a film one, and Bai Qian in Eternal Love (2017) became one of the most-watched performances in Chinese drama history.</p>
  <p>She has kept reinventing the career since: the drama Baby (2018) earned her a Silver Shell Best Actress nomination at San Sebastián, and in 2026 This Thriving Land won her Actress of the Year at the CMG Annual Chinese TV Drama Ceremony — her first Best Actress title in nearly 14 years, as her profile notes. Recent films include She's Got No Name (2024) and The Lychee Road (2025).</p>
</section>

<section class="lp-article lp-profile" id="zhao-liying">
  <h2>4. Zhao Liying</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/zhao-liying-1.webp" alt="Zhao Liying in a silver-to-gold ombre sequin gown" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Zhao Liying in a silver-to-gold ombre gown.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/zhao-liying-2.webp" alt="Zhao Liying waving in a gold gown at the Asian Film Awards" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Zhao Liying at the Asian Film Awards.</figcaption>
    </figure>
  </div>
  <p>Zhao Liying, also known as Zanilia Zhao, was born in Langfang in 1987 and built her stardom role by role: Legend of Lu Zhen (2013), Hua Qiangu in The Journey of Flower (2015), Chu Qiao in Princess Agents (2017) and Sheng Minglan in The Story of Minglan (2018) — a run of hits few actresses anywhere can match.</p>
  <p>The honours match the ratings: Outstanding Actress at the Flying Apsaras Awards for Wild Bloom (2022), the Golden Eagle Audience's Choice award twice, Golden Eagle Goddess in 2014, and Best Supporting Actress at the Hundred Flowers Awards for the film Article 20 (2024). She headlined The Legend of Shen Li (2024) and a string of 2024–2025 films, with The Dream Maker following in 2026.</p>
</section>

<section class="lp-article lp-profile" id="yang-zi">
  <h2>5. Yang Zi</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/yang-zi-1.webp" alt="Yang Zi in a metallic gold ruffled gown on a red carpet" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Yang Zi in a metallic gold ruffled gown.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/yang-zi-2.webp" alt="Yang Zi in a mint-green lace gown at Tencent Video All Star Night 2025" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Yang Zi at Tencent Video All Star Night.</figcaption>
    </figure>
  </div>
  <p>Yang Zi, also known as Andy Yang, was born in Beijing in 1992 and grew up on screen — Chinese audiences first knew her as Xia Xue in the sitcom Home with Kids (2005–2006). She rebuilt that childhood fame into an adult career with Ode to Joy (2016), Jin Mi in Ashes of Love (2018) and Tong Nian in Go Go Squid! (2019).</p>
  <p>Her recent work has brought the industry's serious recognition: she won the Magnolia Award for Best Actress at the Shanghai Television Festival for Born to Be Alive, after three consecutive nominations at that festival — a first for an actress there. Flourished Peony (2025) and Born to Be Alive (2026) lead her current run.</p>
</section>

<section class="lp-article lp-profile" id="zhao-lusi">
  <h2>6. Zhao Lusi</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/zhao-lusi-1.webp" alt="Zhao Lusi in a peach sequined gown on a red carpet" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Zhao Lusi in a peach sequined gown.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/zhao-lusi-2.webp" alt="Zhao Lusi in a white dress at WeTV 2024" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Zhao Lusi at WeTV's 2024 event.</figcaption>
    </figure>
  </div>
  <p>Zhao Lusi, also known as Rosy Zhao, was born in Chengdu in 1998 and is the youngest actress on this list. The Romance of Tiger and Rose (2020) made her a star, Who Rules the World and Love Like the Galaxy (both 2022) made her a leading lady, and Sang Zhi in Hidden Love (2023) became a word-of-mouth hit far beyond China.</p>
  <p>Her honours include the Asian Star Prize at the Seoul International Drama Awards for The Long Ballad. After a health break that paused her work in late 2024, she returned in 2025, headlining Love's Ambition following The Story of Pearl Girl (2024).</p>
</section>

<section class="lp-article lp-profile" id="liu-shishi">
  <h2>7. Liu Shishi</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/liu-shishi-1.webp" alt="Liu Shishi holding an award at iQiyi Screaming Night, December 2024" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Liu Shishi at iQiyi Screaming Night, December 2024.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/liu-shishi-2.webp" alt="Liu Shishi in a light blue gown holding an award and flowers" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Liu Shishi with an award, in a light blue gown.</figcaption>
    </figure>
  </div>
  <p>Liu Shishi, also known as Cecilia Liu, was born in Beijing in 1987. Ma'ertai Ruoxi in Scarlet Heart (2011) made her one of the most beloved actresses in China — the role won her Most Popular Actress at the Shanghai Television Festival — and Chinese Paladin 3 (2009) and The Imperial Doctress (2016) frame a career built on period drama.</p>
  <p>She was crowned Golden Eagle Goddess in 2012 and named among the new Four Dan actresses of her era. After a quieter period she returned to leading roles with A Journey to Love (2023), then Kill My Sins and Love in Pavilion in 2025.</p>
</section>

<section class="lp-article lp-profile" id="tang-yan">
  <h2>8. Tang Yan</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/tang-yan-1.webp" alt="Tang Yan in a black sequin gown at Tencent Video All Star Night" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Tang Yan at Tencent Video All Star Night, January 2025.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/tang-yan-2.webp" alt="Tang Yan in a black and gold ballgown on a red carpet" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Tang Yan in a black-and-gold ballgown.</figcaption>
    </figure>
  </div>
  <p>Tang Yan, known internationally as Tiffany Tang, was born in Shanghai in 1983. Zi Xuan in Chinese Paladin 3 (2009) began her rise; My Sunshine (2015) and The Princess Weiyoung (2016) made her one of the most bankable television actresses of her decade, with Huading Best Actress awards for both, and she was crowned Golden Eagle Goddess in 2016.</p>
  <p>Her most recent major credit is also one of her most prestigious: Miss Wang in Blossoms Shanghai (2023), Wong Kar-wai's first television series. She works selectively now, which is why this list places her on the strength of a career that defined an era of Chinese television.</p>
</section>

<section class="lp-article lp-profile" id="bai-lu">
  <h2>9. Bai Lu</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/bai-lu-1.webp" alt="Bai Lu in a cream sequined gown holding a gold award" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Bai Lu holding one of her popularity awards.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/bai-lu-2.webp" alt="Bai Lu in a white and silver strapless gown holding an award" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Bai Lu in a white-and-silver strapless gown.</figcaption>
    </figure>
  </div>
  <p>Bai Lu — born Bai Mengyan in Changzhou in 1994 — is one of the hardest-working leads in Chinese drama: The Legends (2019), Love Is Sweet (2020), One and Only (2021) and a double turn in Till the End of the Moon (2023) and Story of Kunning Palace (2023) built her a devoted audience.</p>
  <p>Her awards shelf is built on popularity honours from iQiyi's carnivals and the Golden Angel Awards, plus a Huading Best Actress nomination for One and Only. In 2025 alone she led Moonlight Mystique, Northward and Feud, and in 2026 she left her agency of ten years to establish her own studio.</p>
</section>

<section class="lp-article lp-profile" id="yu-shuxin">
  <h2>10. Yu Shuxin</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/yu-shuxin-1.webp" alt="Yu Shuxin in a white ruffled gown holding a microphone and an award" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Yu Shuxin accepting an award in a white ruffled gown.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/cn-actresses/yu-shuxin-2.webp" alt="Yu Shuxin with red hair in a black and gold metallic dress at a YSL Beauté event" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Yu Shuxin at a YSL Beauté event.</figcaption>
    </figure>
  </div>
  <p>Yu Shuxin, known internationally as Esther Yu, was born in Shanghai in 1995 and first found fame through the idol show Youth With You 2, as a member of the project group The9. Acting made her a star in her own right: Find Yourself (2020), then Xiao Lanhua — Orchid — in Love Between Fairy and Devil (2022), one of the decade's most loved fantasy dramas.</p>
  <p>My Journey to You (2023) and Love Game in Eastern Fantasy (2024) brought her Most Influential and Most Popular TV Actress honours at iQiyi and Tencent's year-end events. Ski into Love and Speed and Love kept her leading through 2025.</p>
</section>

<section class="lp-article">
  <h2>Questions readers ask</h2>
  <h3>Is Liu Yifei Chinese or American?</h3>
  <p>Both descriptions appear in her profile, so here is the plain version: she was born in Wuhan, China, in 1987, moved to the United States as a child, and has held US citizenship since 2002. Her acting career — from Chinese Paladin to Mulan to her recent television hits — was built in Chinese film and drama, which is why she belongs on this list, with the citizenship fact stated openly.</p>
  <h3>What is a Golden Eagle Goddess?</h3>
  <p>At each China Golden Eagle TV Art Festival, one actress is crowned Golden Eagle Goddess — a public-facing honour tied to the Golden Eagle Awards, China's national television awards. Four women on this list have held the title: Liu Shishi (2012), Zhao Liying (2014), Tang Yan (2016) and Dilraba Dilmurat (2018).</p>
  <h3>Who just missed the list?</h3>
  <p>Zhou Ye, Zhang Jingyi and Guan Xiaotong were the closest calls — Zhou Ye leads Legend of the Female General (2025), Zhang Jingyi broke out globally in Lighter and Princess (2022), and Guan Xiaotong has been a leading actress since her teens. Any of them could make the next edition.</p>
  <h3>Is the Open Poll an official result?</h3>
  <p>No. The Open Poll at the top of this page is a VisitBest reader poll with seeded starting figures, for audience sentiment only. It is not connected to the Golden Eagle Awards, CMG or any other body — the official honours mentioned here are reported from each actress's profile.</p>
  <h3>Where do the facts and photographs come from?</h3>
  <p>Birth dates, roles and honours are drawn from each actress's Wikipedia profile, checked in November 2026. The photographs are recent red-carpet, gala and festival portraits sourced from Pinterest; every one was checked against a known reference portrait before use.</p>
</section>
`;

const krSections = `
<section class="lp-article">
  <h2>The women who carried the Korean wave</h2>
  <p>Korean drama is now a global industry, and its leading actresses are recognised from Seoul to São Paulo. This list ranks the ten South Korean actresses who combine that reach with the roles and honours that define it — including all three members of "The Troika", the trio Korean media have treated for two decades as the country's benchmark of screen beauty.</p>
  <p>Every photograph is recent, and every woman here has a new credit in 2025 or 2026. The ranking weighs current prominence, signature roles and honours; the Open Poll at the top of the page lets readers cast their own vote.</p>
  <figure class="lp-wide">
    <img src="/assets/kr-actresses/by-the-numbers.webp" alt="Infographic: K-drama royalty by the numbers — three of The Troika, three Grand Prize holders, all ten working in 2025 or 2026" loading="lazy">
    <figcaption>The honours behind the list, counted.</figcaption>
  </figure>
</section>

<section class="lp-article">
  <h2>The list at a glance</h2>
  <div class="lp-tablewrap">
  <table class="lp-table">
    <thead><tr><th style="background:#3b1032;color:#ffffff">Name</th><th style="background:#3b1032;color:#ffffff">Born</th><th style="background:#3b1032;color:#ffffff">Signature role</th><th style="background:#3b1032;color:#ffffff">Where she is now</th></tr></thead>
    <tbody>
      <tr><td>Song Hye-kyo</td><td>22 November 1981, Daegu</td><td>Kang Mo-yeon in Descendants of the Sun (2016)</td><td>Dark Nuns (2025); Netflix's Tantara (2026)</td></tr>
      <tr><td>Kim Ji-won</td><td>19 October 1992, Seoul</td><td>Hong Hae-in in Queen of Tears (2024)</td><td>Doctor X: Mafia in White (2026)</td></tr>
      <tr><td>Han So-hee</td><td>18 November 1993, Ulsan</td><td>Yu Na-bi in Nevertheless (2021)</td><td>Project Y and The Intern remake (2026)</td></tr>
      <tr><td>IU</td><td>16 May 1993, Seoul</td><td>Jang Man-wol in Hotel del Luna (2019)</td><td>When Life Gives You Tangerines (2025); Perfect Crown (2026)</td></tr>
      <tr><td>Bae Suzy</td><td>10 October 1994, Gwangju</td><td>Go Hye-mi in Dream High (2011)</td><td>Genie, Make a Wish (2025)</td></tr>
      <tr><td>Kim Tae-hee</td><td>29 March 1980, Ulsan</td><td>Han Seo-jin in Iris (2009)</td><td>Butterfly (2025)</td></tr>
      <tr><td>Jun Ji-hyun</td><td>30 October 1981, Seoul</td><td>Cheon Song-yi in My Love from the Star (2013)</td><td>Tempest (2025); filming Colony</td></tr>
      <tr><td>Seo Ye-ji</td><td>6 April 1990, Seoul</td><td>Ko Moon-young in It's Okay to Not Be Okay (2020)</td><td>SNL Korea (2025); stage debut (2026)</td></tr>
      <tr><td>Park Shin-hye</td><td>18 February 1990, Gwangju</td><td>Cha Eun-sang in The Heirs (2013)</td><td>Undercover Miss Hong (2026)</td></tr>
      <tr><td>Kim Da-mi</td><td>9 April 1995, Seoul</td><td>Jo Yi-seo in Itaewon Class (2020)</td><td>Nine Puzzles and The Great Flood (2025)</td></tr>
    </tbody>
  </table>
  </div>
  <p>Birth dates, roles and honours are as stated in each actress's Wikipedia profile, checked in November 2026. One small honesty note sits in Song Hye-kyo's profile below: her birth was registered late, so some listings show a different date.</p>
</section>

<section class="lp-article lp-profile" id="song-hye-kyo">
  <h2>1. Song Hye-kyo</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/song-hye-kyo-1.webp" alt="Song Hye-kyo in a beige pleated gown at the Met Gala 2025" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Song Hye-kyo at the Met Gala.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/song-hye-kyo-2.webp" alt="Song Hye-kyo making a finger heart at the 61st Baeksang Arts Awards" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Song Hye-kyo at the 61st Baeksang Arts Awards.</figcaption>
    </figure>
  </div>
  <p>Song Hye-kyo has been a star for a quarter of a century: Autumn in My Heart (2000) and Full House (2004) made her a pioneer of the Korean wave, and Descendants of the Sun (2016) made her its global face, winning her the Grand Prize at both the KBS Drama Awards and the APAN Star Awards.</p>
  <p>Her reinvention in The Glory (2022–2023) won her Best Actress – Television at the Baeksang Arts Awards, and she followed it with the film Dark Nuns (2025) and the lead in Netflix's Tantara (2026). She is one of "The Troika" — Tae-Hye-Ji — the three actresses Korean media treat as the country's enduring standard of beauty. Her birth date is listed here as 22 November 1981; it was registered late, as 26 February 1982, after she was ill as an infant, which is why some sources differ.</p>
</section>

<section class="lp-article lp-profile" id="kim-ji-won">
  <h2>2. Kim Ji-won</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/kim-ji-won-1.webp" alt="Kim Ji-won in a navy strapless gown at Bvlgari's Eclettica event in Seoul" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Kim Ji-won at Bvlgari's Eclettica event in Seoul.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/kim-ji-won-2.webp" alt="Kim Ji-won in a black off-shoulder gown with a statement necklace" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Kim Ji-won at the same Bvlgari event.</figcaption>
    </figure>
  </div>
  <p>Kim Ji-won, born in Seoul in 1992, climbed the classic way — standout supporting roles in The Heirs (2013) and Descendants of the Sun (2016), then leads in Fight for My Way (2017) and My Liberation Notes (2022) — before Queen of Tears (2024) became tvN's highest-rated drama of its time and made her one of the most sought-after actresses in Korea.</p>
  <p>Her honours include Excellence Awards at the KBS Drama Awards in consecutive years, Best Supporting Actress at the APAN Star Awards, and the Prime Minister's Commendation at the 2025 Korean Popular Culture and Arts Awards. She leads Doctor X: Mafia in White in 2026.</p>
</section>

<section class="lp-article lp-profile" id="han-so-hee">
  <h2>3. Han So-hee</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/han-so-hee-1.webp" alt="Han So-hee in a white strapless gown at Cannes 2025" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Han So-hee on the Cannes red carpet.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/han-so-hee-2.webp" alt="Han So-hee in a peach gown at the Toronto International Film Festival 2025" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Han So-hee at TIFF, for the Project Y premiere.</figcaption>
    </figure>
  </div>
  <p>Han So-hee — born Lee So-hee in Ulsan in 1993 — broke through as the other woman in The World of the Married (2020), then headlined Nevertheless and the action series My Name in a single year (2021), and carried Gyeongseong Creature (2023–2024) for Netflix.</p>
  <p>Her record so far is nomination-heavy at the major ceremonies — Baeksang nominations for Best New Actress and Best Actress — alongside Asia Artist Awards wins for Rookie of the Year and Best Artist. Her film work is expanding fast: Project Y premiered at Toronto in 2025 ahead of its January 2026 release, and the Korean remake of The Intern followed in September 2026.</p>
</section>

<section class="lp-article lp-profile" id="iu">
  <h2>4. IU</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/iu-1.webp" alt="IU in a grey patterned strapless gown at the Asia Artist Awards 2025" loading="lazy">
      <figcaption><span class="lp-when">2025</span> IU at the Asia Artist Awards.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/iu-2.webp" alt="IU waving in the same gown at the Asia Artist Awards 2025" loading="lazy">
      <figcaption><span class="lp-when">2025</span> IU at the same ceremony.</figcaption>
    </figure>
  </div>
  <p>IU — born Lee Ji-eun in Seoul in 1993 — is first and foremost one of Korea's most decorated singers, and this list counts only her acting. That acting career stands on its own: Dream High (2011) as a teenager, then Jang Man-wol in Hotel del Luna (2019) and a widely praised turn in My Mister (2018), which brought her first Baeksang Best Actress nomination.</p>
  <p>When Life Gives You Tangerines (2025) took her acting honours to the top level — Best Actress at the Blue Dragon Series Awards and the Grand Prize (Daesang) at the APAN Star Awards — and she followed it with Perfect Crown in April 2026.</p>
</section>

<section class="lp-article lp-profile" id="bae-suzy">
  <h2>5. Bae Suzy</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/bae-suzy-1.webp" alt="Bae Suzy waving in a black and silver sequinned gown at the 61st Baeksang Arts Awards" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Bae Suzy at the 61st Baeksang Arts Awards.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/bae-suzy-2.webp" alt="Bae Suzy in a light pink strapless gown at the Baeksang Arts Awards" loading="lazy">
      <figcaption><span class="lp-when">2026</span> Bae Suzy at the 62nd Baeksang Arts Awards.</figcaption>
    </figure>
  </div>
  <p>Bae Suzy, born in Gwangju in 1994, debuted as an idol and crossed straight into acting: Dream High (2011), then Architecture 101 (2012), which won her the Baeksang Best New Actress award and fixed her in Korean culture as the "Nation's First Love". She was the first Korean female celebrity to win rookie awards across singing, drama, film and variety.</p>
  <p>Gu Family Book (2013) and While You Were Sleeping (2017) led to the darker leads of Anna (2022) and Doona! (2023). She starred in the film Wonderland (2024) and the Netflix series Genie, Make a Wish (2025).</p>
</section>

<section class="lp-article lp-profile" id="kim-tae-hee">
  <h2>6. Kim Tae-hee</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/kim-tae-hee-1.webp" alt="Kim Tae-hee in a white one-shoulder top in a studio portrait" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Kim Tae-hee in a studio portrait.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/kim-tae-hee-2.webp" alt="Kim Tae-hee in a black mini dress at the Butterfly premiere in New York" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Kim Tae-hee at the Butterfly premiere, New York.</figcaption>
    </figure>
  </div>
  <p>Kim Tae-hee, born in Ulsan in 1980, is the "Tae" of Tae-Hye-Ji — and her profile states plainly that she is considered one of South Korea's most beautiful actresses. Stairway to Heaven (2003), Love Story in Harvard (2004) and Iris (2009) built that standing; Yong-pal (2015) brought her Top Excellence awards at both the Korea Drama Awards and the SBS Drama Awards.</p>
  <p>She works selectively now: Hi Bye, Mama! (2020), Lies Hidden in My Garden (2023) and the series Butterfly (2025) are her recent credits. On a list about beauty and presence, her place is not in doubt.</p>
</section>

<section class="lp-article lp-profile" id="jun-ji-hyun">
  <h2>7. Jun Ji-hyun</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/jun-ji-hyun-1.webp" alt="Jun Ji-hyun in a pale pink strapless gown at Piaget Watches and Wonders 2025" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Jun Ji-hyun at Piaget's Watches &amp; Wonders event.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/jun-ji-hyun-2.webp" alt="Jun Ji-hyun in a blue sequined gown at a Piaget exhibition in Beijing" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Jun Ji-hyun at Piaget's exhibition in Beijing.</figcaption>
    </figure>
  </div>
  <p>Jun Ji-hyun — born Wang Ji-hyun in Seoul in 1981, also known as Gianna Jun — is the "Ji" of Tae-Hye-Ji. My Sassy Girl (2001) made her a film icon across Asia; My Love from the Star (2013–2014) did it again on television a decade later, winning her the Grand Prize at both the Baeksang Arts Awards and the SBS Drama Awards.</p>
  <p>She has two Grand Bell Best Actress trophies, for My Sassy Girl and Assassination (2015). She works at her own pace: after Jirisan (2021) came Tempest (2025), the film Colony — her first film in a decade — and her own agency, Peachy, launched in 2025.</p>
</section>

<section class="lp-article lp-profile" id="seo-ye-ji">
  <h2>8. Seo Ye-ji</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/seo-ye-ji-1.webp" alt="Seo Ye-ji in a grey cardigan making a cheek-heart pose at a Seoul event" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Seo Ye-ji at a collection launch in Seoul, October 2024.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/seo-ye-ji-2.webp" alt="Seo Ye-ji in a white blouse and red skirt at the NARS anniversary event" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Seo Ye-ji at NARS' 30th anniversary event, August 2024.</figcaption>
    </figure>
  </div>
  <p>Seo Ye-ji, born in Seoul in 1990, built her name on intense performances — Save Me (2017), Lawless Lawyer (2018) — before Ko Moon-young in It's Okay to Not Be Okay (2020) became one of the most imitated characters in K-drama, winning her APAN Excellence and Popular Star awards and the Baeksang award for Most Popular Actress.</p>
  <p>Her path since has been unusual, and this list states it plainly: after Eve (2022) she took a long break from television drama. Her return has come through variety (SNL Korea, 2025), a stage debut in January 2026, and a horror film, Geumwoldo, billed for 2027 as her big-screen comeback.</p>
</section>

<section class="lp-article lp-profile" id="park-shin-hye">
  <h2>9. Park Shin-hye</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/park-shin-hye-1.webp" alt="Park Shin-hye in a purple ball gown at the 2024 SBS Drama Awards" loading="lazy">
      <figcaption><span class="lp-when">2024</span> Park Shin-hye at the SBS Drama Awards.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/park-shin-hye-2.webp" alt="Park Shin-hye in a black one-shoulder sequined gown on a red carpet" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Park Shin-hye on the red carpet.</figcaption>
    </figure>
  </div>
  <p>Park Shin-hye, born in Gwangju in 1990, grew up as one of K-drama's most reliable leads: You're Beautiful (2009), The Heirs (2013), Pinocchio (2014), Doctors (2016) and Memories of the Alhambra (2018), alongside the film Miracle in Cell No. 7 (2013), which won her a film critics' Best Supporting Actress award.</p>
  <p>Her honours include the Baeksang award for Most Popular Actress in film and the Prime Minister's Commendation at the Korea Popular Culture Awards. She led two series in 2024 — Doctor Slump and The Judge from Hell — and the tvN drama Undercover Miss Hong in January 2026.</p>
</section>

<section class="lp-article lp-profile" id="kim-da-mi">
  <h2>10. Kim Da-mi</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/kim-da-mi-1.webp" alt="Kim Da-mi in a pink lace dress on the Seoul Awards red carpet" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Kim Da-mi on the Seoul Awards red carpet.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/kr-actresses/kim-da-mi-2.webp" alt="Kim Da-mi in a black peplum dress at the A Hundred Memories press event" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Kim Da-mi at the A Hundred Memories press event, September 2025.</figcaption>
    </figure>
  </div>
  <p>Kim Da-mi, born in Seoul in 1995, arrived with a sweep: The Witch: Part 1. The Subversion (2018) won her Best New Actress at the Blue Dragon, Grand Bell and Buil film awards and more, and Itaewon Class (2020) repeated the trick on television with the Baeksang Best New Actress award.</p>
  <p>Our Beloved Summer (2021–2022) and Soulmate (2023) confirmed her range, and 2025 was her busiest year yet — the Disney+ thriller Nine Puzzles, the JTBC series A Hundred Memories and the Netflix film The Great Flood.</p>
</section>

<section class="lp-article">
  <h2>Questions readers ask</h2>
  <h3>Who are "The Troika" — Tae-Hye-Ji?</h3>
  <p>Kim Tae-hee, Song Hye-kyo and Jun Ji-hyun — the syllables Tae, Hye and Ji form the nickname. Korean media have grouped the three for two decades as the country's defining screen beauties, and all three are on this list. Kim Tae-hee's profile states that she is considered one of South Korea's most beautiful actresses.</p>
  <h3>Why is Song Hye-kyo's birth date different on some sites?</h3>
  <p>She was born on 22 November 1981 in Daegu, but her birth was registered late — as 26 February 1982 — because she was ill as an infant. This page uses the birth date itself, 22 November 1981, and says why the other date exists.</p>
  <h3>Is IU an actress or a singer?</h3>
  <p>Primarily a singer — one of Korea's most awarded — who also acts. This list counts her acting only: Hotel del Luna, My Mister, When Life Gives You Tangerines and Perfect Crown, and the acting honours those brought her.</p>
  <h3>Who just missed the list?</h3>
  <p>Shin Min-a, Park Bo-young and Kim Go-eun were the closest calls — Shin Min-a led Karma (2025) and The Remarried Empress (2026), Park Bo-young played twins in Our Unwritten Seoul (2025), and Kim Go-eun won Best Actress at both the Baeksang and Blue Dragon awards for Exhuma (2024). Any of them could make the next edition.</p>
  <h3>Is the Open Poll an official result?</h3>
  <p>No. The Open Poll at the top of this page is a VisitBest reader poll with seeded starting figures, for audience sentiment only. It is not connected to the Baeksang Arts Awards or any other body — the official honours mentioned here are reported from each actress's profile.</p>
  <h3>Where do the facts and photographs come from?</h3>
  <p>Birth dates, roles and honours are drawn from each actress's Wikipedia profile, checked in November 2026. The photographs are recent red-carpet, festival and awards portraits sourced from Pinterest; every one was checked against a known reference portrait before use.</p>
</section>
`;

const jpSections = `
<section class="lp-article">
  <h2>The faces of the Japanese screen</h2>
  <p>Japanese cinema and television run on a star system all of their own — morning-drama heroines become national sweethearts, and a Kore-eda film can define a generation of actresses at once. This list ranks the ten Japanese actresses who define screen beauty in Japan right now, from a woman once named the most beautiful face in the country to the current generation's Cannes regulars.</p>
  <p>Every photograph is recent, and the ranking weighs signature roles, honours and current work. Two of the ten work under stage names, and three of them once played sisters in the same film — the details are in the profiles. The Open Poll at the top of the page lets readers cast their own vote.</p>
  <figure class="lp-wide">
    <img src="/assets/jp-actresses/by-the-numbers.webp" alt="Infographic: Japan's screen queens by the numbers — seven Japan Academy Newcomer winners, three Our Little Sister sisters, four Asadora leads" loading="lazy">
    <figcaption>The honours and connections behind the list, counted.</figcaption>
  </figure>
</section>

<section class="lp-article">
  <h2>The list at a glance</h2>
  <div class="lp-tablewrap">
  <table class="lp-table">
    <thead><tr><th style="background:#3b1032;color:#ffffff">Name</th><th style="background:#3b1032;color:#ffffff">Born</th><th style="background:#3b1032;color:#ffffff">Signature role</th><th style="background:#3b1032;color:#ffffff">Where she is now</th></tr></thead>
    <tbody>
      <tr><td>Haruka Ayase</td><td>24 March 1985, Hiroshima</td><td>Sachiko in Our Little Sister (2015)</td><td>Three lead films in 2026, including Kore-eda's Sheep in the Box</td></tr>
      <tr><td>Suzu Hirose</td><td>19 June 1998, Shizuoka</td><td>Chihaya in the Chihayafuru trilogy (2016–2018)</td><td>A Pale View of Hills (2025); You, Like a Star (2026)</td></tr>
      <tr><td>Yui Aragaki</td><td>11 June 1988, Naha, Okinawa</td><td>Mikuri in The Full-Time Wife Escapist (2016)</td><td>Worlds Apart (2024); works selectively</td></tr>
      <tr><td>Kanna Hashimoto</td><td>3 February 1999, Fukuoka</td><td>Kagura in Gintama (2017)</td><td>Asadora Omusubi heroine; Kingdom 5 (2026)</td></tr>
      <tr><td>Minami Hamabe</td><td>29 August 2000, Ishikawa</td><td>Noriko in Godzilla Minus One (2023)</td><td>Godzilla Minus Zero (2026); Taiga drama Brothers in Arms</td></tr>
      <tr><td>Satomi Ishihara</td><td>24 December 1986, Tokyo</td><td>Mikoto Misumi in Unnatural (2018)</td><td>Missing (2024); Politica Lupin (2026)</td></tr>
      <tr><td>Keiko Kitagawa</td><td>22 August 1986, Kobe</td><td>Isabella in The Promised Neverland (2020)</td><td>Night Flower (2025) — Hochi and ELLE Best Actress</td></tr>
      <tr><td>Masami Nagasawa</td><td>3 June 1987, Iwata, Shizuoka</td><td>Dako in The Confidence Man JP (2019–2022)</td><td>Dollhouse and Hokusai's Daughter (2025)</td></tr>
      <tr><td>Mio Imada</td><td>5 March 1997, Fukuoka</td><td>Miyo in As Long as We Both Shall Live (2023)</td><td>Asadora Anpan heroine (2025); Merry Berry Love (2026)</td></tr>
      <tr><td>Nana Komatsu</td><td>16 February 1996, Tokyo</td><td>Kanako in The World of Kanako (2014)</td><td>Exit 8 at Cannes (2025); Chanel ambassador</td></tr>
    </tbody>
  </table>
  </div>
  <p>Birth dates, roles and honours are as stated in each actress's Wikipedia profile, checked in November 2026. Japanese names are given in the order those profiles use; two entries work under stage names, and their birth names are noted in their profiles.</p>
</section>

<section class="lp-article lp-profile" id="ayase-haruka">
  <h2>1. Haruka Ayase</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/ayase-haruka-1.webp" alt="Ayase Haruka in an orange dress at a red-carpet appearance" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Ayase Haruka in orange at a red-carpet appearance.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/ayase-haruka-2.webp" alt="Ayase Haruka in a white dress, studio portrait" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Ayase Haruka in a white-dress studio portrait.</figcaption>
    </figure>
  </div>
  <p>Haruka Ayase, born Aya Tademaru, has been at the top of Japanese beauty rankings for so long that her Wikipedia profile records her being named the most beautiful face in Japan in 2018. Her range is the real story: the beloved eldest sister Sachiko in Hirokazu Kore-eda’s Our Little Sister (2015), the Taiga drama lead in Yae’s Sakura, and hit series from Hotaru no Hikari to Heaven and Hell: Soul Exchange.</p>
  <p>Her honours include Best Actress at the Blue Ribbon Awards (Oppai Volleyball), the Mainichi Film Awards and the Yokohama Film Festival (both for Our Little Sister), and the Hochi Film Award for The Legend and Butterfly and Revolver Lily (2023). She is busier than ever: 2026 brings three lead films, including Sheep in the Box, which reunites her with Kore-eda.</p>
</section>
<section class="lp-article lp-profile" id="hirose-suzu">
  <h2>2. Suzu Hirose</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/hirose-suzu-1.webp" alt="Hirose Suzu in a pale pink one-shoulder gown at a brand event" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Hirose Suzu in a pale pink gown at a d program brand event.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/hirose-suzu-2.webp" alt="Hirose Suzu in a black sequinned gown waving" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Hirose Suzu in a black sequinned gown, waving at an event.</figcaption>
    </figure>
  </div>
  <p>Suzu Hirose broke through at seventeen as the youngest of the four sisters in Our Little Sister (2015), winning Newcomer of the Year at the Japan Academy Film Prize, then headlined the Chihayafuru trilogy and became the heroine of Natsuzora, NHK’s 100th Asadora morning drama. The Third Murder (2017) added a Japan Academy Best Supporting Actress prize while she was still a teenager.</p>
  <p>She is now the defining actress of her generation in Japan: A Pale View of Hills (2025) took her to Cannes and brought Best Actress honours at the Yokohama Film Festival and the Nikkan Sports Film Awards, and 2026 brings the lead in You, Like a Star and Netflix’s Human Vapor.</p>
</section>
<section class="lp-article lp-profile" id="aragaki-yui">
  <h2>3. Yui Aragaki</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/aragaki-yui-1.webp" alt="Aragaki Yui in a black pantsuit at the Tokyo International Film Festival 2023" loading="lazy">
      <figcaption><span class="lp-when">2023</span> Aragaki Yui at the 36th Tokyo International Film Festival.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/aragaki-yui-2.webp" alt="Aragaki Yui laughing on stage, holding a microphone" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Aragaki Yui laughing on stage at a film event.</figcaption>
    </figure>
  </div>
  <p>Yui Aragaki — "Gakki" to a whole country — became a star with Sky of Love (2007), spent a decade as Dr Shiraishi in Code Blue, and then fronted The Full-Time Wife Escapist (2016), whose ending "koi dance" went viral across Japan; she won Best Actress at the Blue Ribbon Awards for Mixed Doubles (2017). She married her Escapist co-star Gen Hoshino in 2021.</p>
  <p>She works selectively now: (Ab)normal Desire (2023) brought her a Japanese Movie Critics Best Supporting Actress award, and she led Worlds Apart in 2024. Her profile lists no new acting credits for 2025 or 2026, and in October 2026 she and Hoshino announced the birth of their first child — a quieter chapter, stated here exactly as her record shows it.</p>
</section>
<section class="lp-article lp-profile" id="hashimoto-kanna">
  <h2>4. Kanna Hashimoto</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/hashimoto-kanna-1.webp" alt="Hashimoto Kanna in a black gown with a large bow on the red carpet" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Hashimoto Kanna in a black gown with a bow on the red carpet.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/hashimoto-kanna-2.webp" alt="Hashimoto Kanna in a pink ruffled dress, making a peace sign" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Hashimoto Kanna in a pink ruffled dress.</figcaption>
    </figure>
  </div>
  <p>Kanna Hashimoto was a Fukuoka idol when a fan’s photograph of her performing went viral in 2013 and made her famous overnight. She converted that fame into a real acting career: Kagura in the Gintama films, the lead in Kaguya-sama: Love Is War, and a running role in the Kingdom film series, alongside a Japan Academy Newcomer Award for Sailor Suit and Machine Gun: Graduation.</p>
  <p>She carried the Asadora Omusubi (2024–2025) as its heroine, hosted NHK’s Kōhaku Uta Gassen three years running, and returns in Kingdom 5: The Clash of Souls in 2026, with two more lead dramas the same year.</p>
</section>
<section class="lp-article lp-profile" id="hamabe-minami">
  <h2>5. Minami Hamabe</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/hamabe-minami-1.webp" alt="Hamabe Minami in a white dress at a jewellery event" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Hamabe Minami in white at a high-jewellery event.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/hamabe-minami-2.webp" alt="Hamabe Minami in a paisley gown on stage" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Hamabe Minami in a paisley gown, her name on the backdrop behind her.</figcaption>
    </figure>
  </div>
  <p>Minami Hamabe won the New Generation Award at the Toho Cinderella Audition as a child and broke through leading Let Me Eat Your Pancreas (2017), which brought her Newcomer of the Year at the Japan Academy Prize. Kakegurui made her a fan favourite, and the Asadora Ranman put her in Japan’s flagship morning slot.</p>
  <p>Her 2023 double of Godzilla Minus One and Shin Kamen Rider won her Best Supporting Actress at the Blue Ribbon Awards and a Japan Academy Best Actress nomination. In 2026 she reprises Noriko in Godzilla Minus Zero and joins the Taiga drama Brothers in Arms.</p>
</section>
<section class="lp-article lp-profile" id="ishihara-satomi">
  <h2>6. Satomi Ishihara</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/ishihara-satomi-1.webp" alt="Ishihara Satomi in a black off-shoulder dress, smiling" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Ishihara Satomi in a black off-shoulder dress.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/ishihara-satomi-2.webp" alt="Ishihara Satomi in a black velvet gown at the Harry Winston Nagoya event" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Ishihara Satomi at the Harry Winston renewal event in Nagoya.</figcaption>
    </figure>
  </div>
  <p>Satomi Ishihara, born Kuniko Ishigami, debuted as a lead at sixteen in Kimi wa Petto and grew into one of Japan’s most bankable television stars with Rich Man, Poor Woman and Heartbroken Chocolatier. Shin Godzilla (2016) took her English-speaking performance worldwide, and Unnatural (2018) won her Best Actress at the Tokyo Drama Awards.</p>
  <p>Missing (2024) brought her the Hochi Film Award for Best Actress and a Japan Academy nomination. After the birth of her second child in 2025, she returns in 2026 leading the drama Politica Lupin.</p>
</section>
<section class="lp-article lp-profile" id="kitagawa-keiko">
  <h2>7. Keiko Kitagawa</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/kitagawa-keiko-1.webp" alt="Kitagawa Keiko in a red gown holding an award at the ELLE Cinema Awards 2025" loading="lazy">
      <figcaption><span class="lp-when">2025</span> Kitagawa Keiko with her award at the ELLE Cinema Awards.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/kitagawa-keiko-2.webp" alt="Kitagawa Keiko in a blue one-shoulder gown with a patterned cape" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Kitagawa Keiko in a blue one-shoulder gown.</figcaption>
    </figure>
  </div>
  <p>Keiko Kitagawa started as Sailor Mars in Pretty Guardian Sailor Moon and as a Seventeen model, then built one of television’s steadiest careers: Buzzer Beat, The After-Dinner Mysteries and the hit Your Home Is My Business!, which won her the Television Academy Award for Best Actress. On film she is best known internationally as Isabella in The Promised Neverland (2020).</p>
  <p>Her career peak may be arriving now: Night Flower (2025) won her Best Actress at the Hochi Film Awards and the ELLE Cinema Awards, with a Japan Academy nomination, and she is in the Asadora The Ghost Writer’s Wife (2025–26) with two more leads in 2026.</p>
</section>
<section class="lp-article lp-profile" id="nagasawa-masami">
  <h2>8. Masami Nagasawa</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/nagasawa-masami-1.webp" alt="Nagasawa Masami in a white shirt and striped tie, waving" loading="lazy">
      <figcaption><span class="lp-when">2026</span> Nagasawa Masami at a Tokyo event for Between Two Lovers.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/nagasawa-masami-2.webp" alt="Nagasawa Masami in a grey strapless gown at the Godzilla Minus Zero premiere" loading="lazy">
      <figcaption><span class="lp-when">2026</span> Nagasawa Masami at the Godzilla Minus Zero premiere.</figcaption>
    </figure>
  </div>
  <p>Masami Nagasawa won the Toho Cinderella Grand Prix at twelve and was a star at seventeen with Crying Out Love in the Center of the World. Her profile credits her with five Japan Academy Film Prizes and four Blue Ribbon Awards across two decades, from Our Little Sister to the con-artist comedy series The Confidence Man JP, where her Dako became a signature role.</p>
  <p>She remains a first-choice lead: 2025 brought Dollhouse and Hokusai’s Daughter, in which she plays the artist Katsushika Ōi, and 2026 includes Between Two Lovers and Godzilla Minus Zero.</p>
</section>
<section class="lp-article lp-profile" id="imada-mio">
  <h2>9. Mio Imada</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/imada-mio-1.webp" alt="Imada Mio in a black dress on the red carpet" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Imada Mio in black on the red carpet.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/imada-mio-2.webp" alt="Imada Mio in a pale pink gown holding a red clutch" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Imada Mio in a pale pink gown at a festival red carpet.</figcaption>
    </figure>
  </div>
  <p>Mio Imada was scouted in Fukuoka and launched with the local label "Prettiest Girl in Fukuoka" — a billing she has long outgrown. Boys Over Flowers Season 2 (2018) was her break, the Tokyo Revengers films won her Newcomer of the Year at the Japan Academy Prize, and As Long as We Both Shall Live showed her dramatic weight as Miyo.</p>
  <p>In 2025 she reached the top of the profession: heroine of the Asadora Anpan, chosen from 3,365 auditionees, and a host of the 76th Kōhaku Uta Gassen. In 2026 she leads Guilt and the South Korean–Japanese drama Merry Berry Love.</p>
</section>
<section class="lp-article lp-profile" id="komatsu-nana">
  <h2>10. Nana Komatsu</h2>
  <div class="lp-pair">
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/komatsu-nana-1.webp" alt="Komatsu Nana in a black lace gown on the red carpet" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Komatsu Nana in a black lace gown on the red carpet.</figcaption>
    </figure>
    <figure class="lp-shot">
      <img src="/assets/jp-actresses/komatsu-nana-2.webp" alt="Komatsu Nana in a polka-dot strapless gown outdoors" loading="lazy">
      <figcaption><span class="lp-when">Recent</span> Komatsu Nana in a polka-dot gown at an outdoor red carpet.</figcaption>
    </figure>
  </div>
  <p>Nana Komatsu arrived fully formed in The World of Kanako (2014), winning Newcomer of the Year at the Japan Academy Film Prize, and within two years was acting for Martin Scorsese in Silence, her Hollywood debut. Drowning Love, Threads: Our Tapestry of Love and The Last 10 Years made her the defining face of a younger, fashion-literate generation; she has been a Chanel ambassador since 2015.</p>
  <p>After the birth of her first child in 2024, she returned to acting in 2025 with Exit 8, which premiered at Cannes — her first time at the festival. No 2026 acting credit is listed yet; her recent profile is fashion-led, and that is stated here plainly rather than padded.</p>
</section>
<section class="lp-article">
  <h2>Questions readers ask</h2>
  <h3>Who is considered the most beautiful actress in Japan?</h3>
  <p>Haruka Ayase was named the most beautiful face in Japan in 2018, as her Wikipedia profile records, and she tops this list. Suzu Hirose leads the younger generation. The Open Poll at the top of this page shows who VisitBest readers put first.</p>
  <h3>Which actresses on this list have played sisters?</h3>
  <p>Three of them: Haruka Ayase, Masami Nagasawa and Suzu Hirose played three of the four sisters in Hirokazu Kore-eda's Our Little Sister (2015), a film that remains a touchstone of modern Japanese cinema.</p>
  <h3>What is an Asadora, and who here has led one?</h3>
  <p>An Asadora is NHK's flagship morning drama serial, the most prestigious daily slot in Japanese television. Suzu Hirose (Natsuzora), Kanna Hashimoto (Omusubi) and Mio Imada (Anpan) have all been its heroine, and Minami Hamabe co-led Ranman.</p>
  <h3>Are any of these names stage names?</h3>
  <p>Two. Satomi Ishihara was born Kuniko Ishigami, and Haruka Ayase was born Aya Tademaru; both work under stage names, as their profiles state.</p>
  <h3>Who just missed the list?</h3>
  <p>Honourable mentions go to Nana Mori, the voice of Weathering with You and a Japan Academy nominee for Kokuho (2025); Erika Toda, of Death Note and Liar Game, who returns with two dramas in 2026; and Kyoko Fukada, the Kamikaze Girls star, whose recent work has been limited since a health-related hiatus in 2021.</p>
  <h3>Is this poll an official vote?</h3>
  <p>No. The Open Poll is a VisitBest reader poll for audience sentiment only. It is not connected to any Japanese broadcaster, agency or awards body, and its numbers are not official votes of any kind.</p>
  <p>Sources: each actress's English Wikipedia profile, checked November 2026, for birth dates, roles and honours. Photographs: recent public appearances, 2023–2026.</p>
</section>
`;

const trSections = `
<p>Turkish drama is a global industry now. Its series sell to well over a hundred countries, and its leading ladies are recognised from Latin America to South Asia. This ranking weighs the complete package: a face the camera loves, the defining roles, the major honours and where each career stands today. Every fact and date below comes from the actress's own published profile, and where a filmography has gone quiet, the profile says so plainly.</p>
<h2>The 10 at a Glance</h2>
<table class="lp-table"><thead><tr><th style="background:#3b1032;color:#ffffff">Rank</th><th style="background:#3b1032;color:#ffffff">Actress</th><th style="background:#3b1032;color:#ffffff">Born</th><th style="background:#3b1032;color:#ffffff">Best known for</th></tr></thead><tbody>
<tr><td>1</td><td>Hande Erçel</td><td>24 November 1993, Bandırma</td><td>Sen Çal Kapımı; Chasing the Wind</td></tr>
<tr><td>2</td><td>Demet Özdemir</td><td>26 February 1992, İzmit</td><td>Erkenci Kuş; Eşref Rüya</td></tr>
<tr><td>3</td><td>Serenay Sarıkaya</td><td>1 July 1992, Ankara</td><td>Medcezir; Aile; Şahmaran</td></tr>
<tr><td>4</td><td>Neslihan Atagül</td><td>20 August 1992, Istanbul</td><td>Kara Sevda; Fatih Harbiye</td></tr>
<tr><td>5</td><td>Beren Saat</td><td>26 February 1984, Ankara</td><td>Aşk-ı Memnu; Fatmagül'ün Suçu Ne?</td></tr>
<tr><td>6</td><td>Meryem Uzerli</td><td>12 August 1982, Kassel, Germany</td><td>Muhteşem Yüzyıl (Hürrem Sultan)</td></tr>
<tr><td>7</td><td>Elçin Sangu</td><td>13 August 1985, İzmir</td><td>Kiralık Aşk; Çöp Adam</td></tr>
<tr><td>8</td><td>Burcu Biricik</td><td>4 May 1989, Elmalı</td><td>Camdaki Kız; Fatma</td></tr>
<tr><td>9</td><td>Afra Saraçoğlu</td><td>2 December 1997, Edremit</td><td>Yalı Çapkını</td></tr>
<tr><td>10</td><td>Özge Gürel</td><td>5 February 1987, Istanbul</td><td>Kiraz Mevsimi; Dolunay; Bay Yanlış</td></tr>
</tbody></table>
<figure class="lp-figure"><img src="/assets/tr-actresses/tr-by-the-numbers.webp" alt="Turkish drama royalty by the numbers infographic" loading="lazy"><figcaption class="lp-caption">Turkish drama royalty, by the numbers.</figcaption></figure>
<h2>1. Hande Erçel</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/tr-actresses/hande-ercel-1.webp" alt="Hande Erçel portrait" loading="lazy"><figcaption class="lp-caption">2024 — Hande Erçel at the Cannes Film Festival's Megalopolis premiere.</figcaption></figure><figure class="lp-figure"><img src="/assets/tr-actresses/hande-ercel-2.webp" alt="Hande Erçel portrait" loading="lazy"><figcaption class="lp-caption">2026 — Hande Erçel at Cannes.</figcaption></figure></div>
<p><strong>Born:</strong> 24 November 1993, Bandırma. <strong>Signature roles:</strong> Eda Yıldız in <em>Sen Çal Kapımı</em> (2020–2021), Hayat in <em>Aşk Laftan Anlamaz</em> and prosecutor Leyla in <em>Bambaşka Biri</em>; on film, Kimia Khatoon in <em>Intoxicated by Love</em> (2024) and the lead of the Netflix film <em>Chasing the Wind</em> (2025). <strong>Honours:</strong> Best Female Comedy Actress at the Golden Butterfly Awards for <em>Aşk Laftan Anlamaz</em>, with further Golden Butterfly nominations since. Her profile records her as the most-followed Turkish actress on Instagram, among the highest-paid actresses in Turkey, and the only Turkish actress named on IMDb's World's Most Beautiful Actresses list. <strong>Now:</strong> leading the series <em>Aşk ve Gözyaşi</em> and the Disney+ series <em>Reminder</em> — the busiest career on this list.</p>
<h2>2. Demet Özdemir</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/tr-actresses/demet-ozdemir-1.webp" alt="Demet Özdemir portrait" loading="lazy"><figcaption class="lp-caption">2026 — Demet Özdemir at the ELLE Style Awards.</figcaption></figure><figure class="lp-figure"><img src="/assets/tr-actresses/demet-ozdemir-2.webp" alt="Demet Özdemir portrait" loading="lazy"><figcaption class="lp-caption">Demet Özdemir at the Pantene Golden Butterfly Awards.</figcaption></figure></div>
<p><strong>Born:</strong> 26 February 1992, İzmit; she began her career as a dancer. <strong>Signature roles:</strong> Sanem in <em>Erkenci Kuş</em> (2018–2019), the romantic comedy that made her famous across Europe and Latin America; Zeynep in <em>Doğduğun Ev Kaderindir</em>; the Netflix films <em>Love Tactics</em> (2022) and its sequel. <strong>Honours:</strong> Best Actress at the Murex d'Or Awards (2019), Best Actress in a Romantic Comedy at the 45th Golden Butterfly Awards, Best International Actress at Venice's Kinéo Awards (2023) and at DIAFA (2024). <strong>Now:</strong> leading the hit series <em>Eşref Rüya</em> since 2025, in which she also performs songs.</p>
<h2>3. Serenay Sarıkaya</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/tr-actresses/serenay-sarikaya-1.webp" alt="Serenay Sarıkaya portrait" loading="lazy"><figcaption class="lp-caption">2024 — Serenay Sarıkaya at the GQ Creativity Awards.</figcaption></figure><figure class="lp-figure"><img src="/assets/tr-actresses/serenay-sarikaya-2.webp" alt="Serenay Sarıkaya portrait" loading="lazy"><figcaption class="lp-caption">Serenay Sarıkaya walking for L'Oréal Paris in Paris.</figcaption></figure></div>
<p><strong>Born:</strong> 1 July 1992, Ankara; first runner-up at Miss Turkey 2010. <strong>Signature roles:</strong> Mira in <em>Medcezir</em> (2013–2015), Duru in the streaming pioneer <em>Fi</em>, Şahsu in Netflix's <em>Şahmaran</em>, Devin in <em>Aile</em> and Leyla in <em>Thank You, Next</em> (2024). <strong>Honours:</strong> two Golden Butterfly Best Actress awards, in 2014 and 2015, GQ Turkey's Woman of the Year (2014) and a Produ Award for <em>Aile</em> (2024). <strong>Now:</strong> her screen filmography currently ends with <em>Thank You, Next</em> in 2024; she also continues on stage as Alice in <em>Alice Müzikali</em>.</p>
<h2>4. Neslihan Atagül</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/tr-actresses/neslihan-atagul-1.webp" alt="Neslihan Atagül portrait" loading="lazy"><figcaption class="lp-caption">Neslihan Atagül at a Pantene event in Istanbul.</figcaption></figure><figure class="lp-figure"><img src="/assets/tr-actresses/neslihan-atagul-2.webp" alt="Neslihan Atagül portrait" loading="lazy"><figcaption class="lp-caption">Neslihan Atagül at the Pantene Golden Butterfly Awards.</figcaption></figure></div>
<p><strong>Born:</strong> 20 August 1992, Istanbul. <strong>Signature roles:</strong> Nihan in <em>Kara Sevda</em> (2015–2017), the romance sold to more than 110 countries that became the first Turkish series to win an International Emmy; Neriman in <em>Fatih Harbiye</em>; Nare in <em>Sefirin Kızı</em>. <strong>Honours:</strong> Best Actress at the Tokyo International Film Festival (2012) for <em>Araf</em>, with further best-actress wins in Pune and Izmir and International Actress of the Year at DIAFA (2021). <strong>Now:</strong> she left <em>Sefirin Kızı</em> in 2021 for health reasons, as her profile records, and her latest series is <em>Gecenin Ucunda</em> (2022–2023); she welcomed a son in 2025.</p>
<h2>5. Beren Saat</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/tr-actresses/beren-saat-1.webp" alt="Beren Saat portrait" loading="lazy"><figcaption class="lp-caption">Beren Saat at a Gliss brand event.</figcaption></figure><figure class="lp-figure"><img src="/assets/tr-actresses/beren-saat-2.webp" alt="Beren Saat portrait" loading="lazy"><figcaption class="lp-caption">Beren Saat at her Beren Exuberance event.</figcaption></figure></div>
<p><strong>Born:</strong> 26 February 1984, Ankara. <strong>Signature roles:</strong> Bihter in <em>Aşk-ı Memnu</em> (2008–2010), still the defining performance of Turkish melodrama; Fatmagül in <em>Fatmagül'ün Suçu Ne?</em>; Kösem Sultan in <em>Muhteşem Yüzyıl: Kösem</em>; Atiye in the Netflix series <em>The Gift</em> (2019–2021). <strong>Honours:</strong> two Golden Butterfly Awards for <em>Aşk-ı Memnu</em> — the first nominee to win the award two years running — in a run when she was the highest-paid actress in Turkey (2008–2014). <strong>Now:</strong> her last screen role is the Netflix film <em>Last Call for Istanbul</em> (2023); in 2026 she made her singing debut with the single "CapitaliZoo" and the EP <em>Exuberance</em>.</p>
<h2>6. Meryem Uzerli</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/tr-actresses/meryem-uzerli-1.webp" alt="Meryem Uzerli portrait" loading="lazy"><figcaption class="lp-caption">2024 — Meryem Uzerli on the Cannes red carpet.</figcaption></figure><figure class="lp-figure"><img src="/assets/tr-actresses/meryem-uzerli-2.webp" alt="Meryem Uzerli portrait" loading="lazy"><figcaption class="lp-caption">2024 — Meryem Uzerli at the Cannes Film Festival.</figcaption></figure></div>
<p><strong>Born:</strong> 12 August 1982, Kassel, Germany; she holds German and Turkish citizenship. <strong>Signature roles:</strong> Hürrem Sultan in <em>Muhteşem Yüzyıl</em> (2011–2013), the performance that carried the Ottoman epic around the world; Ayşe in the film <em>Kovan</em> (2018); Reyan in <em>RU</em> (2024). <strong>Honours:</strong> two Golden Butterfly Awards, including Best Actress for <em>Muhteşem Yüzyıl</em> (2012), GQ Turkey's Woman of the Year (2012) and Best International Actress at the Beirut International Awards Festival (2016) and the Chelsea Film Festival (2020). <strong>Now:</strong> seen in <em>Şakir Paşa Ailesi</em> (2024–2025) and the Go Türkiye series <em>Antalya Gambit</em> (2025).</p>
<h2>7. Elçin Sangu</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/tr-actresses/elcin-sangu-1.webp" alt="Elçin Sangu portrait" loading="lazy"><figcaption class="lp-caption">Elçin Sangu at a Corendon brand event.</figcaption></figure><figure class="lp-figure"><img src="/assets/tr-actresses/elcin-sangu-2.webp" alt="Elçin Sangu portrait" loading="lazy"><figcaption class="lp-caption">Elçin Sangu at an OGM Pictures premiere.</figcaption></figure></div>
<p><strong>Born:</strong> 13 August 1985, İzmir; she graduated in opera from Mersin University before acting. <strong>Signature roles:</strong> Defne in <em>Kiralık Aşk</em> (2015–2017), the romantic comedy that made her one of Turkey's most loved leading ladies; Zeynep in <em>Çarpışma</em>; Peri in <em>Çöp Adam</em> (2022–2023). <strong>Honours:</strong> three Golden Butterfly Awards for <em>Kiralık Aşk</em>, as her profile records; she is described there as one of the highest-paid celebrities in Turkey. <strong>Now:</strong> the film <em>Uykucu</em> (2025), and in 2026 she leads the Netflix series <em>Not a Stranger</em> and the series <em>Cevher</em>.</p>
<h2>8. Burcu Biricik</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/tr-actresses/burcu-biricik-1.webp" alt="Burcu Biricik portrait" loading="lazy"><figcaption class="lp-caption">Burcu Biricik at a Netflix event in Istanbul.</figcaption></figure><figure class="lp-figure"><img src="/assets/tr-actresses/burcu-biricik-2.webp" alt="Burcu Biricik portrait" loading="lazy"><figcaption class="lp-caption">Burcu Biricik at an OGM Pictures event.</figcaption></figure></div>
<p><strong>Born:</strong> 4 May 1989, Elmalı, in Antalya Province; she won the Miss Mediterranean beauty competition in 2006. <strong>Signature roles:</strong> Nalan in <em>Camdaki Kız</em> (2021–2023), the lead of one of the decade's biggest dramas; the title role of Netflix's <em>Fatma</em> (2021); Hülya in <em>Hayat Şarkısı</em>, the performance her profile calls critically acclaimed. <strong>Honours:</strong> Best Actress at the Mannheim Turkish Film Festival, with a Seoul International Drama Awards nomination, both for her festival films, as her profile records. <strong>Now:</strong> her listed screen work currently ends in 2023; this ranking rests on <em>Camdaki Kız</em> and <em>Fatma</em>, two of the defining performances of recent years.</p>
<h2>9. Afra Saraçoğlu</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/tr-actresses/afra-saracoglu-1.webp" alt="Afra Saraçoğlu portrait" loading="lazy"><figcaption class="lp-caption">Afra Saraçoğlu in a green floral gown at an awards event.</figcaption></figure><figure class="lp-figure"><img src="/assets/tr-actresses/afra-saracoglu-2.webp" alt="Afra Saraçoğlu portrait" loading="lazy"><figcaption class="lp-caption">Afra Saraçoğlu at a GQ Türkiye event.</figcaption></figure></div>
<p><strong>Born:</strong> 2 December 1997, Edremit; the youngest actress on this list. <strong>Signature roles:</strong> Ece in <em>Mrs. Fazilet and Her Daughters</em> (2017–2018), the role that made her famous; Seyran in <em>Yalı Çapkını</em> (2022–2025), the Friday-night phenomenon of recent Turkish television. <strong>Honours:</strong> the Shining Star Award at the 45th Golden Butterfly Awards, a Turkey Youth Award for Best Supporting Actress, Elle Style's Star of the Year and GQ Men of the Year 2024's Most Dazzling Achievement. <strong>Now:</strong> after <em>Yalı Çapkını</em> ended in 2025 she starred in the Go Türkiye miniseries <em>Istanbul My Love</em>, with a new series, <em>A.B.İ.</em>, listed for 2026.</p>
<h2>10. Özge Gürel</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/tr-actresses/ozge-gurel-1.webp" alt="Özge Gürel portrait" loading="lazy"><figcaption class="lp-caption">Özge Gürel in Cannes in a black tulle gown.</figcaption></figure><figure class="lp-figure"><img src="/assets/tr-actresses/ozge-gurel-2.webp" alt="Özge Gürel portrait" loading="lazy"><figcaption class="lp-caption">Özge Gürel on the Cannes red carpet for L'Oréal Paris.</figcaption></figure></div>
<p><strong>Born:</strong> 5 February 1987, Istanbul; actress and singer. <strong>Signature roles:</strong> Öykü in <em>Kiraz Mevsimi</em> (2014–2015), her first lead; Nazlı in <em>Dolunay</em> (2017) and Ezgi in <em>Bay Yanlış</em> (2020), both opposite Can Yaman; Canan in <em>Sipahi</em> (2022–2023). The sunny romantic-comedy lead is her signature, and few play it better. <strong>Now:</strong> the film <em>Savrulan Zaman</em> (2024) and the lead of the 2025 web series <em>Siyah Bere</em>. She married her <em>Kiraz Mevsimi</em> co-star Serkan Çayoğlu in 2022.</p>
<h2>Frequently Asked Questions</h2>
<h3>Who is the most beautiful Turkish actress?</h3>
<p>Beauty is a matter of opinion, which is why this page carries an Open Poll. Hande Erçel currently leads it. She is also, as her profile records, the most-followed Turkish actress on Instagram and the only Turkish actress named on IMDb's World's Most Beautiful Actresses list.</p>
<h3>Which Turkish series won an International Emmy?</h3>
<p><em>Kara Sevda</em> (Endless Love), starring Neslihan Atagül as Nihan. Sold to more than 110 countries, it became the first Turkish series to win an International Emmy Award.</p>
<h3>Are all ten actresses Turkish?</h3>
<p>Nine of the ten were born in Turkey. Meryem Uzerli was born in Kassel, Germany, to a Turkish father and a German mother, and holds German and Turkish citizenship; she is a Turkish actress whose career was made in Turkey.</p>
<h3>Who just missed the list?</h3>
<p>Honourable mentions: Tuba Büyüküstün, nominated for an International Emmy for <em>20 Dakika</em> and still leading films in 2026; Fahriye Evcen, the <em>Çalıkuşu</em> and <em>Alparslan</em> star; and Sinem Kobal, a leading lady since her teens.</p>
`;

const ruSections = `
<p>Russian cinema has produced some of the most striking screen faces in the world, and its leading ladies move between Moscow premieres, European festivals and Hollywood sets. This ranking weighs the complete package: a face the camera loves, the defining roles, the major honours and where each career stands today. Every fact and date below comes from the actress's own published profile, and where a filmography has gone quiet, the profile says so plainly.</p>
<h2>The 10 at a Glance</h2>
<table class="lp-table"><thead><tr><th style="background:#3b1032;color:#ffffff">Rank</th><th style="background:#3b1032;color:#ffffff">Actress</th><th style="background:#3b1032;color:#ffffff">Born</th><th style="background:#3b1032;color:#ffffff">Best known for</th></tr></thead><tbody>
<tr><td>1</td><td>Svetlana Khodchenkova</td><td>21 January 1983, Moscow</td><td>The Wolverine; Tinker Tailor Soldier Spy</td></tr>
<tr><td>2</td><td>Yulia Peresild</td><td>5 September 1984, Pskov</td><td>The Challenge; Battle for Sevastopol</td></tr>
<tr><td>3</td><td>Yuliya Snigir</td><td>2 June 1983, Donskoy</td><td>The Master and Margarita; The New Pope</td></tr>
<tr><td>4</td><td>Sasha Luss</td><td>6 June 1992, Magadan</td><td>Anna; Valerian</td></tr>
<tr><td>5</td><td>Lyubov Aksyonova</td><td>15 March 1990, Moscow</td><td>Major Grom: Plague Doctor; Coma</td></tr>
<tr><td>6</td><td>Elizaveta Boyarskaya</td><td>20 December 1985, Leningrad (now Saint Petersburg)</td><td>The Admiral; Anna Karenina</td></tr>
<tr><td>7</td><td>Anna Chipovskaya</td><td>16 June 1987, Moscow</td><td>The Thaw; The Poet</td></tr>
<tr><td>8</td><td>Aglaya Tarasova</td><td>18 April 1994, Saint Petersburg</td><td>Ice; Ice 2</td></tr>
<tr><td>9</td><td>Kristina Asmus</td><td>14 April 1988, Korolyov</td><td>Interns; Text</td></tr>
<tr><td>10</td><td>Stasya Miloslavskaya</td><td>4 May 1995, Moscow</td><td>The Bull; In From the Cold</td></tr>
</tbody></table>
<figure class="lp-figure"><img src="/assets/ru-actresses/ru-by-the-numbers.webp" alt="Russian cinema by the numbers infographic" loading="lazy"><figcaption class="lp-caption">Russian cinema, by the numbers.</figcaption></figure>
<h2>1. Svetlana Khodchenkova</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ru-actresses/svetlana-khodchenkova-1.webp" alt="Svetlana Khodchenkova portrait" loading="lazy"><figcaption class="lp-caption">Svetlana Khodchenkova in a black suit on the red carpet.</figcaption></figure><figure class="lp-figure"><img src="/assets/ru-actresses/svetlana-khodchenkova-2.webp" alt="Svetlana Khodchenkova portrait" loading="lazy"><figcaption class="lp-caption">Svetlana Khodchenkova at the Yaga premiere.</figcaption></figure></div>
<p><strong>Born:</strong> 21 January 1983, Moscow. <strong>Signature roles:</strong> Viper in <em>The Wolverine</em> (2013), opposite Hugh Jackman; Irina in <em>Tinker Tailor Soldier Spy</em> (2011); the leading role of Irina the Greek in <em>Viking</em> (2016); the fencer Aleksandra Pokrovskaya in <em>On the Edge</em> (2020). <strong>Honours:</strong> Honored Artist of the Russian Federation (2018); a Nika Award nomination for Best Actress for her debut, <em>Bless the Woman</em>; Best Actress at the Polish Film Festival (2008) for <em>Little Moscow</em>. <strong>Now:</strong> her latest film is <em>The Wizard of the Emerald City</em> (2025); her television work currently ends in 2023.</p>
<h2>2. Yulia Peresild</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ru-actresses/yulia-peresild-1.webp" alt="Yulia Peresild portrait" loading="lazy"><figcaption class="lp-caption">Yulia Peresild in a black Tegin gown on the red carpet.</figcaption></figure><figure class="lp-figure"><img src="/assets/ru-actresses/yulia-peresild-2.webp" alt="Yulia Peresild portrait" loading="lazy"><figcaption class="lp-caption">Yulia Peresild at the Golden Eagle Awards.</figcaption></figure></div>
<p><strong>Born:</strong> 5 September 1984, Pskov. <strong>Signature roles:</strong> the sniper Lyudmila Pavlichenko in <em>Battle for Sevastopol</em> (2015); Zhenya Belyaeva in <em>The Challenge</em> (2023), filmed aboard the International Space Station in October 2021 — which made her, as her profile states, the first professional actress to act in outer space. <strong>Honours:</strong> Golden Eagle Awards for <em>The Edge</em> (2010) and <em>Battle for Sevastopol</em> (2016), Best Actress at the Beijing and BRICS festivals (2015), the State Prize of the Russian Federation (2023) and the title Merited Artist of the Russian Federation (2018). <strong>Now:</strong> two films in 2025 and two more listed for 2026 — one of the busiest careers on this list.</p>
<h2>3. Yuliya Snigir</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ru-actresses/yuliya-snigir-1.webp" alt="Yuliya Snigir portrait" loading="lazy"><figcaption class="lp-caption">2024 — Yuliya Snigir at The Master and Margarita premiere.</figcaption></figure><figure class="lp-figure"><img src="/assets/ru-actresses/yuliya-snigir-2.webp" alt="Yuliya Snigir portrait" loading="lazy"><figcaption class="lp-caption">Yuliya Snigir with a Golden Eagle award statuette.</figcaption></figure></div>
<p><strong>Born:</strong> 2 June 1983, Donskoy, Tula Oblast; she was discovered through modelling while studying English philology. <strong>Signature roles:</strong> Irina in <em>A Good Day to Die Hard</em> (2013), opposite Bruce Willis; the title role in the series <em>Catherine the Great</em> (2015); Ewa Novak in <em>The New Pope</em> (2020); Margarita in <em>The Master and Margarita</em> (2024). <strong>Honours:</strong> in 2024 she won the Nika Award for Best Actress — her profile states the win without naming the work it was for, so none is claimed here. <strong>Now:</strong> her latest credits are from 2024; no 2025 or 2026 credit is listed.</p>
<h2>4. Sasha Luss</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ru-actresses/sasha-luss-1.webp" alt="Sasha Luss portrait" loading="lazy"><figcaption class="lp-caption">2024 — Sasha Luss at the amfAR Gala in Cannes.</figcaption></figure><figure class="lp-figure"><img src="/assets/ru-actresses/sasha-luss-2.webp" alt="Sasha Luss portrait" loading="lazy"><figcaption class="lp-caption">2023 — Sasha Luss at the amfAR Gala in Cannes.</figcaption></figure></div>
<p><strong>Born:</strong> 6 June 1992, Magadan; a fashion model from her teens, cast by Karl Lagerfeld for Chanel. <strong>Signature roles:</strong> the title role of Anna Poliatova in Luc Besson's <em>Anna</em> (2019), the role she is best known for; Princess Lihö-Minaa in <em>Valerian and the City of a Thousand Planets</em> (2017). <strong>Honours:</strong> her profile states no acting award; her one listed honour is a modelling title, Glamour Russia's Model of the Year (2013), and it is recorded here as exactly that. <strong>Now:</strong> three films in 2024, with another listed for 2026 and a role in the <em>Tomb Raider</em> series to come.</p>
<h2>5. Lyubov Aksyonova</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ru-actresses/lyubov-aksyonova-1.webp" alt="Lyubov Aksyonova portrait" loading="lazy"><figcaption class="lp-caption">Lyubov Aksyonova in a studio portrait.</figcaption></figure><figure class="lp-figure"><img src="/assets/ru-actresses/lyubov-aksyonova-2.webp" alt="Lyubov Aksyonova portrait" loading="lazy"><figcaption class="lp-caption">Lyubov Aksyonova in a black suit at a premiere.</figcaption></figure></div>
<p><strong>Born:</strong> 15 March 1990, Moscow. <strong>Signature roles:</strong> the journalist Yulia Pchyolkina in <em>Major Grom: Plague Doctor</em> (2021); Fly in <em>Coma</em> (2020); Dunya Raskolnikova in the series <em>Crime and Punishment</em> (2024). <strong>Honours:</strong> her profile states no awards, and none are claimed here — her standing rests on the roles, and on momentum. <strong>Now:</strong> the strongest current slate on this list: a <em>Major Grom</em> sequel, the film <em>Hater</em> and two series are all listed for 2026.</p>
<h2>6. Elizaveta Boyarskaya</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ru-actresses/elizaveta-boyarskaya-1.webp" alt="Elizaveta Boyarskaya portrait" loading="lazy"><figcaption class="lp-caption">Elizaveta Boyarskaya in a TOUS jewellery portrait.</figcaption></figure><figure class="lp-figure"><img src="/assets/ru-actresses/elizaveta-boyarskaya-2.webp" alt="Elizaveta Boyarskaya portrait" loading="lazy"><figcaption class="lp-caption">Elizaveta Boyarskaya on the red carpet.</figcaption></figure></div>
<p><strong>Born:</strong> 20 December 1985, Leningrad, now Saint Petersburg; the daughter of actors Mikhail Boyarsky and Larisa Luppian, and a leading lady of the Maly Drama Theatre since 2006. <strong>Signature roles:</strong> Anna Timiryova in <em>The Admiral</em> (2008); the title role in <em>Anna Karenina</em> (2016); Catherine II in the series <em>Catherine the Great</em> (2023). <strong>Honours:</strong> Honored Artist of the Russian Federation (2018), the one honour her profile states. <strong>Now:</strong> her listed filmography currently ends in 2023, after a gap back to 2018; this ranking rests on two decades of defining roles.</p>
<h2>7. Anna Chipovskaya</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ru-actresses/anna-chipovskaya-1.webp" alt="Anna Chipovskaya portrait" loading="lazy"><figcaption class="lp-caption">Anna Chipovskaya at a CTC event.</figcaption></figure><figure class="lp-figure"><img src="/assets/ru-actresses/anna-chipovskaya-2.webp" alt="Anna Chipovskaya portrait" loading="lazy"><figcaption class="lp-caption">Anna Chipovskaya in a grey suit.</figcaption></figure></div>
<p><strong>Born:</strong> 16 June 1987, Moscow; the daughter of actress Olga Chipovskaya and jazz musician Boris Frumkin. <strong>Signature roles:</strong> Maryana in <em>The Thaw</em> (2013), the series that made her popular; Darya Bulavina in <em>The Road to Calvary</em> (2017); Yelizaveta Vorontsova in <em>The Poet</em> (2025). <strong>Honours:</strong> a Golden Eagle nomination for Best Actress on Television for <em>The Thaw</em> — a nomination, not a win, and the only honour her profile states. <strong>Now:</strong> current on film with <em>The Poet</em> (2025); her television work ends in 2020.</p>
<h2>8. Aglaya Tarasova</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ru-actresses/aglaya-tarasova-1.webp" alt="Aglaya Tarasova portrait" loading="lazy"><figcaption class="lp-caption">Aglaya Tarasova in a green suit.</figcaption></figure><figure class="lp-figure"><img src="/assets/ru-actresses/aglaya-tarasova-2.webp" alt="Aglaya Tarasova portrait" loading="lazy"><figcaption class="lp-caption">Aglaya Tarasova in a red jacket.</figcaption></figure></div>
<p><strong>Born:</strong> 18 April 1994, Saint Petersburg; born Darya Tarasova, the daughter of actress Kseniya Rappoport, she holds Russian and Israeli citizenship. <strong>Signature roles:</strong> the injured figure skater Nadya Lapshina in <em>Ice</em> (2018) and <em>Ice 2</em> (2020), the role she is best known for; Sofya in the sitcom <em>Interns</em>. <strong>Honours:</strong> the Golden Eagle Award for the best female movie role (2019), for <em>Ice</em>. <strong>Now:</strong> her film work currently ends with <em>Serf 2</em> (2024). Her profile also records that in September 2025 she was detained at Domodedovo Airport on a drug-smuggling charge and in November 2025 received a three-year suspended sentence and a fine; it is part of her current public record and is stated here for completeness.</p>
<h2>9. Kristina Asmus</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ru-actresses/kristina-asmus-1.webp" alt="Kristina Asmus portrait" loading="lazy"><figcaption class="lp-caption">Kristina Asmus in a checked dress.</figcaption></figure><figure class="lp-figure"><img src="/assets/ru-actresses/kristina-asmus-2.webp" alt="Kristina Asmus portrait" loading="lazy"><figcaption class="lp-caption">Kristina Asmus with her short blonde pixie cut.</figcaption></figure></div>
<p><strong>Born:</strong> 14 April 1988, Korolyov, Moscow Oblast; a former gymnast who now works at the Yermolova Theatre. <strong>Signature roles:</strong> Varya Chernous in the medical sitcom <em>Interns</em> (2010–2016), her best-known role; Galya in the war film <em>The Dawns Here Are Quiet</em> (2015); Nina in <em>Text</em> (2019). <strong>Honours:</strong> no film-award win is stated in her profile; it records magazine titles — Maxim's sexiest Russian woman of 2010, Glamour's TV Actress of the Year (2011) and a Fashion People Award (2013). <strong>Now:</strong> her filmography currently ends in 2024; her stated current work is on stage.</p>
<h2>10. Stasya Miloslavskaya</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ru-actresses/stasya-miloslavskaya-1.webp" alt="Stasya Miloslavskaya portrait" loading="lazy"><figcaption class="lp-caption">Stasya Miloslavskaya in a tulle gown.</figcaption></figure><figure class="lp-figure"><img src="/assets/ru-actresses/stasya-miloslavskaya-2.webp" alt="Stasya Miloslavskaya portrait" loading="lazy"><figcaption class="lp-caption">2024 — Stasya Miloslavskaya in an O'STIN campaign photo.</figcaption></figure></div>
<p><strong>Born:</strong> 4 May 1995, Moscow; born Anastasia Miloslavskaya, the youngest actress on this list, and a member of the Moscow Pushkin Drama Theatre. <strong>Signature roles:</strong> Tanya in <em>The Bull</em> (2019); the young Jenny in the Netflix series <em>In From the Cold</em> (2022); Anna in <em>Krasavitsa</em> (2025). <strong>Honours:</strong> a Golden Eagle nomination for <em>The Bull</em> — a nomination, not a win, as her profile states it. <strong>Now:</strong> current, with <em>Krasavitsa</em> in 2025 and <em>Chuzhie dengi</em> listed for 2026.</p>
<h2>Frequently Asked Questions</h2>
<h3>Who is the most beautiful Russian actress?</h3>
<p>Beauty is a matter of opinion, which is why this page carries an Open Poll. Svetlana Khodchenkova currently leads it — the face Western audiences know best, from <em>The Wolverine</em> and <em>Tinker Tailor Soldier Spy</em>.</p>
<h3>Which Russian actress has filmed in space?</h3>
<p>Yulia Peresild. For <em>The Challenge</em> (2023) she filmed aboard the International Space Station in October 2021, which her profile records as a first for a professional actress.</p>
<h3>Which of the ten have worked in Hollywood films?</h3>
<p>Three at studio level: Svetlana Khodchenkova (Viper in <em>The Wolverine</em>, and <em>Tinker Tailor Soldier Spy</em>), Yuliya Snigir (opposite Bruce Willis in <em>A Good Day to Die Hard</em>) and Sasha Luss (the lead of Luc Besson's <em>Anna</em>). Stasya Miloslavskaya has also appeared in a Netflix series, <em>In From the Cold</em>.</p>
<h3>Are all ten actresses Russian?</h3>
<p>Yes — all ten were born in Russia (several in the Soviet era, in Moscow, Saint Petersburg, Pskov, Magadan and elsewhere). Aglaya Tarasova also holds Israeli citizenship, as her profile records.</p>
<h3>Who just missed the list?</h3>
<p>Honourable mention: Ravshana Kurkova, the Uzbek-born Russian actress of <em>About Love</em> and <em>The White Crow</em>. Her listed filmography currently ends in 2021, which is the only reason she sits outside the ten.</p>
`;

const phSections = `
<p>Philippine cinema and television run on star power, and its leading ladies are famous far beyond the archipelago — on Hollywood red carpets, at Paris fashion weeks and on global beauty lists. This ranking weighs the complete package: a face the camera loves, the defining roles, the major honours and where each career stands today. Every fact and date below comes from the actress's own published profile; where a source disagrees with itself, nothing is claimed, and where an acting career has gone quiet, the profile says so plainly.</p>
<h2>The 10 at a Glance</h2>
<table class="lp-table"><thead><tr><th style="background:#3b1032;color:#ffffff">Rank</th><th style="background:#3b1032;color:#ffffff">Actress</th><th style="background:#3b1032;color:#ffffff">Born</th><th style="background:#3b1032;color:#ffffff">Best known for</th></tr></thead><tbody>
<tr><td>1</td><td>Liza Soberano</td><td>4 January 1998, Santa Clara, California, U.S.</td><td>Lisa Frankenstein; Forevermore</td></tr>
<tr><td>2</td><td>Kathryn Bernardo</td><td>26 March 1996, Cabanatuan</td><td>Hello, Love, Goodbye; Hello, Love, Again</td></tr>
<tr><td>3</td><td>Nadine Lustre</td><td>31 October 1993, Quezon City</td><td>Never Not Love You; Deleter</td></tr>
<tr><td>4</td><td>Anne Curtis</td><td>17 February 1985, Yarrawonga, Australia</td><td>No Other Woman; BuyBust</td></tr>
<tr><td>5</td><td>Marian Rivera</td><td>12 August 1984, Madrid, Spain</td><td>Marimar; Rewind; Balota</td></tr>
<tr><td>6</td><td>Kim Chiu</td><td>19 April 1990, Cebu City</td><td>What's Wrong with Secretary Kim</td></tr>
<tr><td>7</td><td>Heart Evangelista</td><td>14 February 1985, Manila</td><td>G-mik; I Left My Heart in Sorsogon</td></tr>
<tr><td>8</td><td>Maja Salvador</td><td>5 October 1988</td><td>Wildflower; The Killer Bride</td></tr>
<tr><td>9</td><td>Julia Barretto</td><td>10 March 1997, Marikina</td><td>Love You to the Stars and Back</td></tr>
<tr><td>10</td><td>Belle Mariano</td><td>10 June 2002, Pasig</td><td>He's Into Her; Can't Buy Me Love</td></tr>
</tbody></table>
<figure class="lp-figure"><img src="/assets/ph-actresses/ph-by-the-numbers.webp" alt="Philippine cinema by the numbers infographic" loading="lazy"><figcaption class="lp-caption">Philippine cinema, by the numbers.</figcaption></figure>
<h2>1. Liza Soberano</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ph-actresses/liza-soberano-1.webp" alt="Liza Soberano portrait" loading="lazy"><figcaption class="lp-caption">Liza Soberano at an Elton John AIDS Foundation event.</figcaption></figure><figure class="lp-figure"><img src="/assets/ph-actresses/liza-soberano-2.webp" alt="Liza Soberano portrait" loading="lazy"><figcaption class="lp-caption">Liza Soberano in a white halter gown.</figcaption></figure></div>
<p><strong>Born:</strong> Hope Elizabeth Soberano, 4 January 1998, Santa Clara, California — she holds United States and Philippine citizenship, as her profile states. <strong>Signature roles:</strong> the series <em>Forevermore</em> (2014); <em>My Ex and Whys</em> (2017); her Hollywood debut as Taffy in <em>Lisa Frankenstein</em> (2024). <strong>Honours:</strong> a FAMAS Award, a PMPC Star Award and six Box Office Entertainment Awards; she topped TC Candler's list of the 100 Most Beautiful Faces in the world in 2017, and Tatler Asia named her among its most influential people in 2022 and 2023. <strong>Now:</strong> based in California since 2022; the animated film <em>Forgotten Island</em> (2026), in which she voices Raissa, was released in September 2026, and she leads the upcoming <em>Patron Saints of Nothing</em>.</p>
<h2>2. Kathryn Bernardo</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ph-actresses/kathryn-bernardo-1.webp" alt="Kathryn Bernardo portrait" loading="lazy"><figcaption class="lp-caption">Kathryn Bernardo in a red terno gown.</figcaption></figure><figure class="lp-figure"><img src="/assets/ph-actresses/kathryn-bernardo-2.webp" alt="Kathryn Bernardo portrait" loading="lazy"><figcaption class="lp-caption">Kathryn Bernardo at the Asian World Film Festival.</figcaption></figure></div>
<p><strong>Born:</strong> 26 March 1996, Cabanatuan, Nueva Ecija. <strong>Signature roles:</strong> <em>Mara Clara</em> (2010); <em>The Hows of Us</em> (2018); <em>Hello, Love, Goodbye</em> (2019) and its sequel <em>Hello, Love, Again</em> (2024) — which her profile records as the first Filipino film to gross over ₱1 billion worldwide. <strong>Honours:</strong> two FAMAS Awards, including Best Actress for <em>A Very Good Girl</em> (2024); the Outstanding Asian Star award at the Seoul International Drama Awards; 14 Box Office Entertainment Awards. <strong>Now:</strong> a <em>Pilipinas Got Talent</em> judge in 2025, the lead of <em>Someone, Someday</em> (2026), and a Madame Tussauds Hong Kong wax figure launched in July 2026.</p>
<h2>3. Nadine Lustre</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ph-actresses/nadine-lustre-1.webp" alt="Nadine Lustre portrait" loading="lazy"><figcaption class="lp-caption">2023 — Nadine Lustre after winning Best Actress at the 71st FAMAS Awards.</figcaption></figure><figure class="lp-figure"><img src="/assets/ph-actresses/nadine-lustre-2.webp" alt="Nadine Lustre portrait" loading="lazy"><figcaption class="lp-caption">Nadine Lustre at a Billboard Philippines event.</figcaption></figure></div>
<p><strong>Born:</strong> 31 October 1993, Quezon City. <strong>Signature roles:</strong> <em>Diary ng Panget</em> (2014); the series <em>On the Wings of Love</em> (2015–16); <em>Never Not Love You</em> (2018); the techno-horror film <em>Deleter</em> (2022). <strong>Honours:</strong> six FAMAS Awards, a Gawad Urian Award, five Box Office Entertainment Awards and four Metro Manila Film Festival Awards, as her profile's lead states. <strong>Now:</strong> <em>Nokturno</em> and <em>Uninvited</em> in 2024 (the latter won her the 2025 FAMAS Best Supporting Actress award), <em>Call Me Mother</em> in 2025, and the series <em>Love, Siargao</em> in 2026.</p>
<h2>4. Anne Curtis</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ph-actresses/anne-curtis-1.webp" alt="Anne Curtis portrait" loading="lazy"><figcaption class="lp-caption">2023 — Anne Curtis at the BoF 500 event in a Valentino gown.</figcaption></figure><figure class="lp-figure"><img src="/assets/ph-actresses/anne-curtis-2.webp" alt="Anne Curtis portrait" loading="lazy"><figcaption class="lp-caption">Anne Curtis in a Carolina Herrera terno dress.</figcaption></figure></div>
<p><strong>Born:</strong> 17 February 1985, Yarrawonga, Victoria, Australia — she holds Australian and Philippine citizenship, as her profile states. <strong>Signature roles:</strong> <em>Baler</em> (2008); <em>No Other Woman</em> (2011); the action film <em>BuyBust</em> (2018). <strong>Honours:</strong> two FAMAS Awards, two Metro Manila Film Festival Awards, a Luna Award and four Box Office Entertainment Awards. <strong>Now:</strong> after a hiatus from 2020 she returned to <em>It's Showtime</em> in 2022, headlined the series <em>It's Okay to Not Be Okay</em> (2025) and <em>The Loved One</em> (2026); her Madame Tussauds Hong Kong wax figure was unveiled in 2024.</p>
<h2>5. Marian Rivera</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ph-actresses/marian-rivera-1.webp" alt="Marian Rivera portrait" loading="lazy"><figcaption class="lp-caption">Marian Rivera in a Hacchic Couture gown.</figcaption></figure><figure class="lp-figure"><img src="/assets/ph-actresses/marian-rivera-2.webp" alt="Marian Rivera portrait" loading="lazy"><figcaption class="lp-caption">Marian Rivera at a BVLGARI event.</figcaption></figure></div>
<p><strong>Born:</strong> 12 August 1984, Madrid, Spain — she holds Philippine and Spanish citizenship, as her profile states. <strong>Signature roles:</strong> <em>Marimar</em> (2007) and <em>Dyesebel</em> (2008), the series that made her a primetime queen; <em>Rewind</em> (2023); <em>Balota</em> (2024). <strong>Honours:</strong> Best Actress at the Cinemalaya festival for <em>Balota</em> (2024) and ten Box Office Entertainment Awards, among many others — her profile's own sections give differing totals for her FAMAS wins, so no FAMAS number is claimed here. <strong>Now:</strong> the series <em>My Guardian Alien</em> (2024), a <em>Stars on the Floor</em> judge in 2025, and host of <em>Tadhana</em> since 2017.</p>
<h2>6. Kim Chiu</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ph-actresses/kim-chiu-1.webp" alt="Kim Chiu portrait" loading="lazy"><figcaption class="lp-caption">2025 — Kim Chiu at Star Magical Christmas.</figcaption></figure><figure class="lp-figure"><img src="/assets/ph-actresses/kim-chiu-2.webp" alt="Kim Chiu portrait" loading="lazy"><figcaption class="lp-caption">Kim Chiu in a studio portrait.</figcaption></figure></div>
<p><strong>Born:</strong> 19 April 1990, Cebu City. <strong>Signature roles:</strong> <em>Sana Maulit Muli</em> (2007); <em>Tayong Dalawa</em> (2009); <em>Bride for Rent</em> (2014); the Philippine remake <em>What's Wrong with Secretary Kim</em> (2024). <strong>Honours:</strong> a Seoul International Drama Award, a FAMAS Award, eight Star Awards for Television and eleven Box Office Entertainment Awards; she topped <em>Yes!</em> Magazine's 100 Most Beautiful Stars list in 2010. <strong>Now:</strong> the Prime Video series <em>The Alibi</em> (2025), and a main host of <em>It's Showtime</em>.</p>
<h2>7. Heart Evangelista</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ph-actresses/heart-evangelista-1.webp" alt="Heart Evangelista portrait" loading="lazy"><figcaption class="lp-caption">2025 — Heart Evangelista at the Giambattista Valli show.</figcaption></figure><figure class="lp-figure"><img src="/assets/ph-actresses/heart-evangelista-2.webp" alt="Heart Evangelista portrait" loading="lazy"><figcaption class="lp-caption">2024 — Heart Evangelista at Paris Fashion Week.</figcaption></figure></div>
<p><strong>Born:</strong> Love Marie Payawal Ongpauco-Escudero, 14 February 1985, Manila. <strong>Signature roles:</strong> the youth series <em>G-mik</em> (2000), which won her a PMPC Star Award for Best New Female TV Personality; <em>My First Romance</em> (2003); the series <em>I Left My Heart in Sorsogon</em> (2021–22). <strong>Honours:</strong> her early Star Awards for best new female personality are the honours her profile states; her fame today rests as much on fashion as on acting. <strong>Now:</strong> stated plainly, her acting has gone quiet — her last listed film is from 2023 and her last series ended in 2022; she is now primarily a global fashion figure and, since 2024, head of the Senate Spouses Foundation.</p>
<h2>8. Maja Salvador</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ph-actresses/maja-salvador-1.webp" alt="Maja Salvador portrait" loading="lazy"><figcaption class="lp-caption">Maja Salvador at a BVLGARI event.</figcaption></figure><figure class="lp-figure"><img src="/assets/ph-actresses/maja-salvador-2.webp" alt="Maja Salvador portrait" loading="lazy"><figcaption class="lp-caption">Maja Salvador in a blue blazer.</figcaption></figure></div>
<p><strong>Born:</strong> 5 October 1988. (Her profile gives two different birthplaces in different sections, so none is printed here.) <strong>Signature roles:</strong> <em>Thelma</em> (2011); <em>The Legal Wife</em> (2014); the revenge series <em>Wildflower</em> (2017); <em>The Killer Bride</em> (2019). <strong>Honours:</strong> an Asia Contents Award, a FAMAS Award, a Gawad Urian Award, a Luna Award and a PMPC Star Award for Movies, as her profile's lead states. <strong>Now:</strong> a lead role in <em>Someone, Someday</em> (2026), a return to <em>ASAP</em> in 2024, and founder of the talent agency Crown Artist Management.</p>
<h2>9. Julia Barretto</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ph-actresses/julia-barretto-1.webp" alt="Julia Barretto portrait" loading="lazy"><figcaption class="lp-caption">Julia Barretto in a studio portrait.</figcaption></figure><figure class="lp-figure"><img src="/assets/ph-actresses/julia-barretto-2.webp" alt="Julia Barretto portrait" loading="lazy"><figcaption class="lp-caption">Julia Barretto in a beaded terno.</figcaption></figure></div>
<p><strong>Born:</strong> 10 March 1997, Marikina, Metro Manila, into the Barretto acting family. <strong>Signature roles:</strong> <em>Vince and Kath and James</em> (2016); <em>Love You to the Stars and Back</em> (2017); <em>Un/Happy for You</em> (2024). <strong>Honours:</strong> two FAMAS Awards and three Box Office Entertainment Awards, as her profile's lead states. <strong>Now:</strong> two films in 2024, an <em>Eat Bulaga!</em> co-host in 2025, independent since leaving her agency in July 2026, with <em>Always Yours, Never Mine</em> released in 2026.</p>
<h2>10. Belle Mariano</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/ph-actresses/belle-mariano-1.webp" alt="Belle Mariano portrait" loading="lazy"><figcaption class="lp-caption">Belle Mariano in a lavender ballgown.</figcaption></figure><figure class="lp-figure"><img src="/assets/ph-actresses/belle-mariano-2.webp" alt="Belle Mariano portrait" loading="lazy"><figcaption class="lp-caption">Belle Mariano in a purple sequin dress.</figcaption></figure></div>
<p><strong>Born:</strong> 10 June 2002, Pasig, Metro Manila — the youngest actress on this list. <strong>Signature roles:</strong> <em>He's Into Her</em> (2021–22); <em>An Inconvenient Love</em> (2022); <em>Can't Buy Me Love</em> (2023–24). <strong>Honours:</strong> the Outstanding Asian Star award at the Seoul International Drama Awards (2022) — the first Filipina recipient, as her profile states — and the Listeners' Choice Award at the first Billboard Philippines Women in Music (2024). <strong>Now:</strong> the films <em>Meet, Greet &amp; Bye</em> (2025) and <em>Tayo sa Wakas</em> (2026), and her own makeup brand, launched in 2025.</p>
<h2>Frequently Asked Questions</h2>
<h3>Who is the most beautiful Filipino actress?</h3>
<p>Beauty is a matter of opinion, which is why this page carries an Open Poll. Liza Soberano currently leads it — she is also the one actress here to have topped TC Candler's global list of the 100 Most Beautiful Faces, in 2017.</p>
<h3>Which Filipino actresses have worked in Hollywood?</h3>
<p>Liza Soberano made her Hollywood debut in <em>Lisa Frankenstein</em> (2024) and is now based in California; she voices a lead role in the 2026 animated film <em>Forgotten Island</em>.</p>
<h3>Are all ten actresses Filipino?</h3>
<p>Yes — all ten are Filipino actresses. Three were born abroad and hold dual citizenship, exactly as their profiles state: Liza Soberano (born in California; United States and Philippines), Anne Curtis (born in Australia; Australia and Philippines) and Marian Rivera (born in Madrid; Philippines and Spain).</p>
<h3>Which Filipino film first grossed over ₱1 billion?</h3>
<p><em>Hello, Love, Again</em> (2024), starring Kathryn Bernardo — her profile records it as the first Filipino film to gross over ₱1 billion worldwide.</p>
<h3>Who just missed the list?</h3>
<p>Honourable mentions: Ivana Alawi, the most-subscribed Filipino personality on YouTube per her profile; Andrea Brillantes, a star since childhood with <em>Kadenang Ginto</em>; and Sarah Geronimo, a pop superstar whose acting honours include Box Office Queen titles — her profile lists no acting credit after 2019, as she works primarily in music.</p>
`;

const idSections = `
<p>Indonesian cinema has a century of glamour behind it, and its leading ladies headline everything from Jakarta blockbusters and Joko Anwar horrors to Netflix series and Cannes premieres. This ranking weighs the complete package: a face the camera loves, the defining roles, the major honours and where each career stands today. Every fact and date below comes from the actress's own published profile; where a filmography has gone quiet, the profile says so plainly.</p>
<h2>The 10 at a Glance</h2>
<table class="lp-table"><thead><tr><th style="background:#3b1032;color:#ffffff">Rank</th><th style="background:#3b1032;color:#ffffff">Actress</th><th style="background:#3b1032;color:#ffffff">Born</th><th style="background:#3b1032;color:#ffffff">Best known for</th></tr></thead><tbody>
<tr><td>1</td><td>Dian Sastrowardoyo</td><td>16 March 1982, Jakarta</td><td>Ada Apa dengan Cinta?; Cigarette Girl</td></tr>
<tr><td>2</td><td>Chelsea Islan</td><td>2 June 1995, Queens, New York, U.S.</td><td>May the Devil Take You; Godam &amp; Tira</td></tr>
<tr><td>3</td><td>Maudy Ayunda</td><td>19 December 1994, Jakarta</td><td>Perahu Kertas; Habibie &amp; Ainun 3</td></tr>
<tr><td>4</td><td>Pevita Pearce</td><td>6 October 1992, Jakarta</td><td>Sri Asih; 5 cm</td></tr>
<tr><td>5</td><td>Laura Basuki</td><td>9 January 1988, West Berlin, West Germany</td><td>Susi Susanti: Love All; Before, Now &amp; Then</td></tr>
<tr><td>6</td><td>Tara Basro</td><td>11 June 1990, Jakarta</td><td>Satan's Slaves; Impetigore</td></tr>
<tr><td>7</td><td>Putri Marino</td><td>4 August 1993, Denpasar</td><td>Posesif; Layangan Putus</td></tr>
<tr><td>8</td><td>Luna Maya</td><td>Denpasar, Bali (birth date not stated in her profile)</td><td>Suzzanna: Buried Alive; Sukma</td></tr>
<tr><td>9</td><td>Cinta Laura</td><td>17 August 1993, Quakenbrück, Germany</td><td>After the Dark; The Ninth Passenger</td></tr>
<tr><td>10</td><td>Mawar Eva de Jongh</td><td>26 September 2001, Amsterdam, Netherlands</td><td>Bumi Manusia; Miracle in Cell No. 7</td></tr>
</tbody></table>
<figure class="lp-figure"><img src="/assets/id-actresses/id-by-the-numbers.webp" alt="Indonesian cinema by the numbers infographic" loading="lazy"><figcaption class="lp-caption">Indonesian cinema, by the numbers.</figcaption></figure>
<h2>1. Dian Sastrowardoyo</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/id-actresses/dian-sastrowardoyo-1.webp" alt="Dian Sastrowardoyo portrait" loading="lazy"><figcaption class="lp-caption">2025 — Dian Sastrowardoyo at the Toronto International Film Festival.</figcaption></figure><figure class="lp-figure"><img src="/assets/id-actresses/dian-sastrowardoyo-2.webp" alt="Dian Sastrowardoyo portrait" loading="lazy"><figcaption class="lp-caption">2024 — Dian Sastrowardoyo in a kebaya at Festival Film Indonesia.</figcaption></figure></div>
<p><strong>Born:</strong> Dian Paramita Sastrowardoyo, 16 March 1982, Jakarta. <strong>Signature roles:</strong> Cinta in <em>Ada Apa dengan Cinta?</em> (2001) and its 2016 sequel, the role that defined a generation of Indonesian romance; Dasiyah in the Netflix series <em>Cigarette Girl</em> (2023); the title role in <em>Kartini</em>. <strong>Honours:</strong> Best Actress wins at Deauville and Singapore (2002, for <em>Whispering Sands</em>) and the Citra Award for Best Leading Actress (2002, for <em>Ada Apa dengan Cinta?</em>); her later Citra results are nominations, and they are recorded here as nominations. <strong>Now:</strong> fully current — <em>The Fox King</em> (2025) and <em>The Sea Speaks His Name</em> (2026) are among her latest credits.</p>
<h2>2. Chelsea Islan</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/id-actresses/chelsea-islan-1.webp" alt="Chelsea Islan portrait" loading="lazy"><figcaption class="lp-caption">2025 — Chelsea Islan in a kebaya at the Cannes Film Festival.</figcaption></figure><figure class="lp-figure"><img src="/assets/id-actresses/chelsea-islan-2.webp" alt="Chelsea Islan portrait" loading="lazy"><figcaption class="lp-caption">Chelsea Islan in a green kebaya at a press conference.</figcaption></figure></div>
<p><strong>Born:</strong> Chelsea Elizabeth Islan, 2 June 1995, Queens, New York — her profile describes her as an American-born Indonesian actress. <strong>Signature roles:</strong> Alfie in <em>May the Devil Take You</em> (2018) and its sequel; Tira in the superhero film <em>Godam &amp; Tira</em> (2024); Illona in <em>Rudy Habibie</em> (2016). <strong>Honours:</strong> two consecutive Citra Best Actress nominations (2015, 2016) — nominations, not wins; her wins include the Indonesian Choice Awards Actress of the Year four years running (2015–2018) and a Maya Award for <em>3 Srikandi</em>. <strong>Now:</strong> current, with <em>Godam &amp; Tira</em> (2024) her latest dated lead role.</p>
<h2>3. Maudy Ayunda</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/id-actresses/maudy-ayunda-1.webp" alt="Maudy Ayunda portrait" loading="lazy"><figcaption class="lp-caption">2025 — Maudy Ayunda in a gold kebaya at Festival Film Indonesia.</figcaption></figure><figure class="lp-figure"><img src="/assets/id-actresses/maudy-ayunda-2.webp" alt="Maudy Ayunda portrait" loading="lazy"><figcaption class="lp-caption">Maudy Ayunda at a premiere in Jakarta.</figcaption></figure></div>
<p><strong>Born:</strong> Ayunda Faza Maudya, 19 December 1994, Jakarta; educated at Oxford. <strong>Signature roles:</strong> Kugy in <em>Perahu Kertas</em> (2012); Ainun in <em>Habibie &amp; Ainun 3</em> (2019); Jeng Sri in <em>Losmen Bu Broto</em> (2021). <strong>Honours:</strong> a place on Forbes Asia's 30 Under 30 list (2021); an Indonesian Movie Actors Award as Favorite Supporting Actress for <em>Losmen Bu Broto</em>; her two Indonesian Film Festival results for that film were nominations, and most of her other wins are for music. <strong>Now:</strong> her filmography lists no film credits for 2022–2025 — her work in between was music, business and advocacy — and she returns as the lead of <em>Levitating</em> in 2026.</p>
<h2>4. Pevita Pearce</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/id-actresses/pevita-pearce-1.webp" alt="Pevita Pearce portrait" loading="lazy"><figcaption class="lp-caption">Pevita Pearce in a black high-neck dress.</figcaption></figure><figure class="lp-figure"><img src="/assets/id-actresses/pevita-pearce-2.webp" alt="Pevita Pearce portrait" loading="lazy"><figcaption class="lp-caption">Pevita Pearce at an INTime event.</figcaption></figure></div>
<p><strong>Born:</strong> Pevita Cleo Eileen Pearce, 6 October 1992, Jakarta; her profile calls her a British-Indonesian actress of Welsh and Banjar descent and lists her citizenship as UK. <strong>Signature roles:</strong> the superheroine Alana in <em>Sri Asih</em> (2022); Dinda in <em>5 cm</em> (2012); Hayati in <em>Tenggelamnya Kapal Van Der Wijck</em> (2013). <strong>Honours:</strong> Best Actress at Festival Film Bandung (2014) and Indonesian Choice Awards Actress of the Year (2014); several rows of her awards table leave the result blank, so no outcome is claimed for those. <strong>Now:</strong> stated plainly, her profile lists no dated film credit after <em>Sri Asih</em> (2022).</p>
<h2>5. Laura Basuki</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/id-actresses/laura-basuki-1.webp" alt="Laura Basuki portrait" loading="lazy"><figcaption class="lp-caption">2023 — Laura Basuki at the Marie Claire Asia Star Awards in Busan.</figcaption></figure><figure class="lp-figure"><img src="/assets/id-actresses/laura-basuki-2.webp" alt="Laura Basuki portrait" loading="lazy"><figcaption class="lp-caption">Laura Basuki in a studio portrait.</figcaption></figure></div>
<p><strong>Born:</strong> 9 January 1988, West Berlin, West Germany. <strong>Signature roles:</strong> the badminton legend in <em>Susi Susanti: Love All</em> (2019); Ino in <em>Before, Now &amp; Then</em> (2022); Ava in <em>Heartbreak Motel</em> (2024). <strong>Honours:</strong> the strongest awards record on this list — Citra Awards for Best Leading Actress in 2010 and 2020, and the Silver Bear for Best Supporting Performance at the Berlin Film Festival (2022), plus a Marie Claire Asia Star Award (2023). <strong>Now:</strong> very current — three films in 2024 and <em>Red Before Dawn</em> listed for 2026.</p>
<h2>6. Tara Basro</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/id-actresses/tara-basro-1.webp" alt="Tara Basro portrait" loading="lazy"><figcaption class="lp-caption">Tara Basro in a close-up portrait.</figcaption></figure><figure class="lp-figure"><img src="/assets/id-actresses/tara-basro-2.webp" alt="Tara Basro portrait" loading="lazy"><figcaption class="lp-caption">Tara Basro in a green Bulgari dress.</figcaption></figure></div>
<p><strong>Born:</strong> Andi Mutiara Pertiwi Basro, 11 June 1990, Jakarta. <strong>Signature roles:</strong> Rini in Joko Anwar's <em>Satan's Slaves</em> (2017) and <em>Satan's Slaves 2: Communion</em> (2022); Maya in <em>Impetigore</em> (2019); Sari in <em>A Copy of My Mind</em> (2015). <strong>Honours:</strong> the Citra Award for Best Leading Actress (2015, for <em>A Copy of My Mind</em>) and an Usmar Ismail Favorite Actress win for the same film; her <em>Impetigore</em> Citra result was a nomination. <strong>Now:</strong> quieter in lead roles — her last lead film listed is from 2022, and her 2025 credit is a cameo.</p>
<h2>7. Putri Marino</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/id-actresses/putri-marino-1.webp" alt="Putri Marino portrait" loading="lazy"><figcaption class="lp-caption">2024 — Putri Marino on the Cannes Film Festival red carpet.</figcaption></figure><figure class="lp-figure"><img src="/assets/id-actresses/putri-marino-2.webp" alt="Putri Marino portrait" loading="lazy"><figcaption class="lp-caption">Putri Marino in a copper strapless dress.</figcaption></figure></div>
<p><strong>Born:</strong> Ni Luh Dharma Putri Marino, 4 August 1993, Denpasar, Bali; of Italian-Balinese descent. <strong>Signature roles:</strong> Lala in <em>Posesif</em> (2017); Kinan in the hit web series <em>Layangan Putus</em> (2021); Raia in <em>The Architecture of Love</em> (2024). <strong>Honours:</strong> she won the Citra Award for Best Actress for <em>Posesif</em> — her debut film; her profile notes she was only the second debut actress ever to win it. <strong>Now:</strong> very current — four films in 2024 and <em>Four Seasons in Java</em> listed for 2026.</p>
<h2>8. Luna Maya</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/id-actresses/luna-maya-1.webp" alt="Luna Maya portrait" loading="lazy"><figcaption class="lp-caption">2025 — Luna Maya in a white lace kebaya on her wedding day.</figcaption></figure><figure class="lp-figure"><img src="/assets/id-actresses/luna-maya-2.webp" alt="Luna Maya portrait" loading="lazy"><figcaption class="lp-caption">2025 — Luna Maya in traditional bridal dress.</figcaption></figure></div>
<p><strong>Born:</strong> Luna Maya Sugeng, in Denpasar, Bali — her profile gives her birthplace but nowhere states her birth date, so none is printed here. <strong>Signature roles:</strong> the horror icon Suzzanna in <em>Suzzanna: Buried Alive</em> (2018) and <em>Suzzanna: Kliwon Friday Night</em> (2023); Arini in <em>Sukma</em> (2025). <strong>Honours:</strong> a Best Actress win in 2019 for <em>Suzzanna: Buried Alive</em>, recorded in her awards-list article; her main profile's own list is mostly nominations and popularity titles, including a Citra nomination for <em>Ruang</em> (2006) — no Citra win is stated anywhere, and none is claimed. <strong>Now:</strong> fully current — lead roles in 2024 and 2025, with a new <em>Suzzanna</em> film listed for 2026; she married in 2025, and both photographs here are from her wedding.</p>
<h2>9. Cinta Laura</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/id-actresses/cinta-laura-1.webp" alt="Cinta Laura portrait" loading="lazy"><figcaption class="lp-caption">2025 — Cinta Laura in a kebaya-inspired gown at Cannes.</figcaption></figure><figure class="lp-figure"><img src="/assets/id-actresses/cinta-laura-2.webp" alt="Cinta Laura portrait" loading="lazy"><figcaption class="lp-caption">Cinta Laura in a white feather gown at Cannes.</figcaption></figure></div>
<p><strong>Born:</strong> Cinta Laura Kiehl, 17 August 1993, Quakenbrück, Germany; a Columbia University graduate. <strong>Signature roles:</strong> Utami in the American film <em>After the Dark</em> (2013); Nicole in <em>The Ninth Passenger</em> (2018); her teen breakthrough in <em>Oh Baby</em> (2007). <strong>Honours:</strong> an SCTV Best Actress win as a teenager (2007) and a Latino Film Festival Best Female Actress win (2019); most of her later wins are for music and celebrity titles, as her profile records; she was appointed an ambassador against violence against women and children in 2019. <strong>Now:</strong> stated plainly, her acting filmography has gone quiet — her profile lists no acting credit after 2019; her recent work is music and public life.</p>
<h2>10. Mawar Eva de Jongh</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/id-actresses/mawar-eva-de-jongh-1.webp" alt="Mawar Eva de Jongh portrait" loading="lazy"><figcaption class="lp-caption">Mawar Eva de Jongh in a white turtleneck studio portrait.</figcaption></figure><figure class="lp-figure"><img src="/assets/id-actresses/mawar-eva-de-jongh-2.webp" alt="Mawar Eva de Jongh portrait" loading="lazy"><figcaption class="lp-caption">Mawar Eva de Jongh in a black polka-dot top.</figcaption></figure></div>
<p><strong>Born:</strong> 26 September 2001, Amsterdam, Netherlands — the youngest actress on this list. <strong>Signature roles:</strong> Annelies in <em>Bumi Manusia</em> (2019), the role that made her famous; Kartika in <em>Miracle in Cell No. 7</em> (2022); the assassin "14" in <em>The Shadow Strays</em> (2024). <strong>Honours:</strong> Best Supporting Actress wins in 2023 for <em>Miracle in Cell No. 7</em> (the awarding bodies are left blank in her profile's table, so none is named here) and Best Leading Actress – Comedy at the Indonesian Journalist Film Festival (2025). <strong>Now:</strong> the most prolific current filmography on this list — four films in 2025 and more listed for 2026.</p>
<h2>Frequently Asked Questions</h2>
<h3>Who is the most beautiful Indonesian actress?</h3>
<p>Beauty is a matter of opinion, which is why this page carries an Open Poll. Dian Sastrowardoyo currently leads it — the face of <em>Ada Apa dengan Cinta?</em>, Indonesian cinema's defining modern romance.</p>
<h3>Which Indonesian actress has won at the Berlin Film Festival?</h3>
<p>Laura Basuki won the Silver Bear for Best Supporting Performance at the 72nd Berlin International Film Festival in 2022, for <em>Before, Now &amp; Then</em>.</p>
<h3>Are all ten actresses Indonesian?</h3>
<p>Yes — all ten are Indonesian actresses. Four were born abroad, as their profiles state: Chelsea Islan (New York), Laura Basuki (West Berlin), Cinta Laura (Germany) and Mawar Eva de Jongh (Amsterdam); Pevita Pearce, born in Jakarta, holds UK citizenship per her profile.</p>
<h3>Why is no birth date shown for Luna Maya?</h3>
<p>Because her published profile does not state one — it gives her birthplace, Denpasar, but no date. Rather than guess, this page prints none.</p>
<h3>Who just missed the list?</h3>
<p>Honourable mentions: Adinia Wirasti, a two-time Citra Award winner; Acha Septriasa, who won the Citra for <em>Test Pack</em>; and Raisa, one of Indonesia's biggest singers — her profile lists only two film roles, neither after 2016, so she is a singer first and sits outside an actresses list.</p>
`;

const gbSections = `
<p>British actresses run world cinema's glamour end as well as its prestige end: an Oscar winner from Reading, a Marvel assassin from Oxford, the face of <em>The Queen's Gambit</em> and the detective of <em>Killing Eve</em>. This ranking weighs the complete package: a face the camera loves, the defining roles, the major honours and where each career stands today. Every fact and date below comes from the actress's own published profile; where a profile states a date two ways, or only a year, the profile here says so rather than guessing.</p>
<h2>The 10 at a Glance</h2>
<table class="lp-table"><thead><tr><th style="background:#3b1032;color:#ffffff">Rank</th><th style="background:#3b1032;color:#ffffff">Actress</th><th style="background:#3b1032;color:#ffffff">Born</th><th style="background:#3b1032;color:#ffffff">Best known for</th></tr></thead><tbody>
<tr><td>1</td><td>Emily Blunt</td><td>23 February 1983, London</td><td>Oppenheimer; A Quiet Place</td></tr>
<tr><td>2</td><td>Kate Winslet</td><td>5 October 1975, Reading</td><td>Titanic; The Reader</td></tr>
<tr><td>3</td><td>Keira Knightley</td><td>26 March 1985, London</td><td>Pride &amp; Prejudice; Pirates of the Caribbean</td></tr>
<tr><td>4</td><td>Florence Pugh</td><td>3 January 1996, Oxford</td><td>Little Women; Thunderbolts*</td></tr>
<tr><td>5</td><td>Anya Taylor-Joy</td><td>16 April 1996, Miami, U.S.</td><td>The Queen's Gambit; Furiosa</td></tr>
<tr><td>6</td><td>Vanessa Kirby</td><td>18 April, year given as 1987 or 1988, London</td><td>The Crown; Pieces of a Woman</td></tr>
<tr><td>7</td><td>Jodie Comer</td><td>11 March 1993, Liverpool</td><td>Killing Eve; Prima Facie</td></tr>
<tr><td>8</td><td>Rosamund Pike</td><td>1979, Hammersmith, London</td><td>Gone Girl; Saltburn</td></tr>
<tr><td>9</td><td>Emilia Clarke</td><td>23 October 1986, London</td><td>Game of Thrones; Me Before You</td></tr>
<tr><td>10</td><td>Carey Mulligan</td><td>28 May 1985, London</td><td>An Education; Promising Young Woman</td></tr>
</tbody></table>
<figure class="lp-figure"><img src="/assets/gb-actresses/gb-by-the-numbers.webp" alt="British cinema by the numbers infographic" loading="lazy"><figcaption class="lp-caption">British cinema, by the numbers.</figcaption></figure>
<h2>1. Emily Blunt</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/gb-actresses/emily-blunt-1.webp" alt="Emily Blunt portrait" loading="lazy"><figcaption class="lp-caption">Emily Blunt in a red turtleneck studio portrait.</figcaption></figure><figure class="lp-figure"><img src="/assets/gb-actresses/emily-blunt-2.webp" alt="Emily Blunt portrait" loading="lazy"><figcaption class="lp-caption">2023 — Emily Blunt in a white gown at the Academy Awards.</figcaption></figure></div>
<p><strong>Born:</strong> Emily Olivia Laura Blunt, 23 February 1983, London; her profile also records US citizenship alongside her UK citizenship. <strong>Signature roles:</strong> Katherine Oppenheimer in <em>Oppenheimer</em> (2023); Evelyn Abbott in <em>A Quiet Place</em> (2018); Emily Charlton in <em>The Devil Wears Prada</em> (2006). <strong>Honours:</strong> a Golden Globe win (for the television film <em>Gideon's Daughter</em>) and an Actor Award win for <em>A Quiet Place</em>; her Academy Award result for <em>Oppenheimer</em> and her four BAFTA results are nominations, recorded here as nominations. <strong>Now:</strong> at a career peak — <em>The Smashing Machine</em> (2025), <em>The Devil Wears Prada 2</em> (2026), and a star on the Hollywood Walk of Fame in April 2026.</p>
<h2>2. Kate Winslet</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/gb-actresses/kate-winslet-1.webp" alt="Kate Winslet portrait" loading="lazy"><figcaption class="lp-caption">Kate Winslet in a red halter-neck gown.</figcaption></figure><figure class="lp-figure"><img src="/assets/gb-actresses/kate-winslet-2.webp" alt="Kate Winslet portrait" loading="lazy"><figcaption class="lp-caption">Kate Winslet in a close portrait.</figcaption></figure></div>
<p><strong>Born:</strong> Kate Elizabeth Winslet, 5 October 1975, Reading, Berkshire. <strong>Signature roles:</strong> Rose in <em>Titanic</em> (1997); Hanna Schmitz in <em>The Reader</em> (2008); Mare Sheehan in <em>Mare of Easttown</em> (2021). <strong>Honours:</strong> the heaviest record on this list — an Academy Award win for <em>The Reader</em>, five BAFTA Awards, five Golden Globe Awards, two Primetime Emmy Awards and a Grammy Award, all wins as her profile states them; she was appointed CBE in 2012. <strong>Now:</strong> current — she produced and starred in <em>Lee</em> (2023), led <em>The Regime</em> (2024) and made her directorial debut with <em>Goodbye June</em> (2025).</p>
<h2>3. Keira Knightley</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/gb-actresses/keira-knightley-1.webp" alt="Keira Knightley portrait" loading="lazy"><figcaption class="lp-caption">2025 — Keira Knightley at the Golden Globe Awards.</figcaption></figure><figure class="lp-figure"><img src="/assets/gb-actresses/keira-knightley-2.webp" alt="Keira Knightley portrait" loading="lazy"><figcaption class="lp-caption">Keira Knightley at a Black Doves event, in her current bob.</figcaption></figure></div>
<p><strong>Born:</strong> Keira Christina Knightley, 26 March 1985, London. <strong>Signature roles:</strong> Elizabeth Bennet in <em>Pride &amp; Prejudice</em> (2005); Elizabeth Swann in the <em>Pirates of the Caribbean</em> films; Joan Clarke in <em>The Imitation Game</em> (2014). <strong>Honours:</strong> stated exactly — at the top level her record is nominations: two Academy Award, two BAFTA and four Golden Globe nominations, with no win stated; she was appointed OBE in 2018. <strong>Now:</strong> current — after a year off with her family, she headlined the Netflix spy series <em>Black Doves</em> (2024) and <em>The Woman in Cabin 10</em> (2025).</p>
<h2>4. Florence Pugh</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/gb-actresses/florence-pugh-1.webp" alt="Florence Pugh portrait" loading="lazy"><figcaption class="lp-caption">Florence Pugh in a blue strapless dress at an ELLE event.</figcaption></figure><figure class="lp-figure"><img src="/assets/gb-actresses/florence-pugh-2.webp" alt="Florence Pugh portrait" loading="lazy"><figcaption class="lp-caption">2025 — Florence Pugh at the Thunderbolts* premiere in Los Angeles.</figcaption></figure></div>
<p><strong>Born:</strong> 3 January 1996, Oxford. <strong>Signature roles:</strong> Amy March in <em>Little Women</em> (2019); Yelena Belova in Marvel's <em>Black Widow</em> (2021) and <em>Thunderbolts*</em> (2025); Jean Tatlock in <em>Oppenheimer</em> (2023). <strong>Honours:</strong> a British Independent Film Award and three Critics' Choice Awards won; her Academy Award result for <em>Little Women</em> and her three BAFTA results are nominations. <strong>Now:</strong> fully current — <em>Thunderbolts*</em> (2025), with <em>Avengers: Doomsday</em> and <em>Dune: Part Three</em> to follow per her profile.</p>
<h2>5. Anya Taylor-Joy</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/gb-actresses/anya-taylor-joy-1.webp" alt="Anya Taylor-Joy portrait" loading="lazy"><figcaption class="lp-caption">Anya Taylor-Joy at the Marrakech International Film Festival.</figcaption></figure><figure class="lp-figure"><img src="/assets/gb-actresses/anya-taylor-joy-2.webp" alt="Anya Taylor-Joy portrait" loading="lazy"><figcaption class="lp-caption">2024 — Anya Taylor-Joy in a silver Dior gown at the Academy Awards.</figcaption></figure></div>
<p><strong>Born:</strong> Anya-Josephine Marie Taylor-Joy, 16 April 1996, Miami, Florida — her profile gives no nationality adjective in its lead and lists her citizenship as United Kingdom and United States; she was raised in Buenos Aires and then London, and she is included here on her stated UK citizenship, with her birthplace stated plainly. <strong>Signature roles:</strong> Beth Harmon in <em>The Queen's Gambit</em> (2020); the title role in <em>Emma</em> (2020); Furiosa in <em>Furiosa: A Mad Max Saga</em> (2024). <strong>Honours:</strong> Golden Globe and Actor Award wins for <em>The Queen's Gambit</em>; her Emmy result for the same role was a nomination. <strong>Now:</strong> fully current — <em>The Gorge</em> and <em>Sacrifice</em> (2025) and the miniseries <em>Lucky</em> (2026).</p>
<h2>6. Vanessa Kirby</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/gb-actresses/vanessa-kirby-1.webp" alt="Vanessa Kirby portrait" loading="lazy"><figcaption class="lp-caption">2025 — Vanessa Kirby at the BAFTA Film Awards.</figcaption></figure><figure class="lp-figure"><img src="/assets/gb-actresses/vanessa-kirby-2.webp" alt="Vanessa Kirby portrait" loading="lazy"><figcaption class="lp-caption">2024 — Vanessa Kirby in a red Prada gown at the Toronto Film Festival.</figcaption></figure></div>
<p><strong>Born:</strong> Vanessa Nuala Kirby, 18 April, London — her own profile gives her birth year two ways, as 1987 or 1988, so it is printed that way here rather than resolved by guesswork. <strong>Signature roles:</strong> Princess Margaret in <em>The Crown</em> (2016–2017); Martha in <em>Pieces of a Woman</em> (2020); Sue Storm in <em>The Fantastic Four: First Steps</em> (2025). <strong>Honours:</strong> a BAFTA Television Award win for <em>The Crown</em> and the Volpi Cup for Best Actress at Venice for <em>Pieces of a Woman</em>; her Academy Award and BAFTA film results for that film are nominations. <strong>Now:</strong> fully current — <em>First Steps</em> launched her as Sue Storm in 2025, with two Avengers films to follow.</p>
<h2>7. Jodie Comer</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/gb-actresses/jodie-comer-1.webp" alt="Jodie Comer portrait" loading="lazy"><figcaption class="lp-caption">Jodie Comer in a red off-the-shoulder gown.</figcaption></figure><figure class="lp-figure"><img src="/assets/gb-actresses/jodie-comer-2.webp" alt="Jodie Comer portrait" loading="lazy"><figcaption class="lp-caption">2025 — Jodie Comer at the Fashion Awards.</figcaption></figure></div>
<p><strong>Born:</strong> 11 March 1993, Liverpool. <strong>Signature roles:</strong> Villanelle in <em>Killing Eve</em> (2018–2022); Tessa in the one-woman play <em>Prima Facie</em> (2022–2023); Isla in <em>28 Years Later</em> (2025). <strong>Honours:</strong> a remarkable sweep of wins across screen and stage — two BAFTA Television Awards, a Primetime Emmy, a Tony Award and a Laurence Olivier Award, all wins as her profile states them; her two Golden Globe results are nominations. <strong>Now:</strong> current — <em>28 Years Later</em> (2025) and a 2026 tour of <em>Prima Facie</em>.</p>
<h2>8. Rosamund Pike</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/gb-actresses/rosamund-pike-1.webp" alt="Rosamund Pike portrait" loading="lazy"><figcaption class="lp-caption">Rosamund Pike at a Saltburn screening.</figcaption></figure><figure class="lp-figure"><img src="/assets/gb-actresses/rosamund-pike-2.webp" alt="Rosamund Pike portrait" loading="lazy"><figcaption class="lp-caption">Rosamund Pike in a pink Erdem gown at an Oscars event.</figcaption></figure></div>
<p><strong>Born:</strong> Rosamund Mary Ellen Pike, in Hammersmith, London — her profile states only her birth year, 1979, with no day or month, so none is printed here. <strong>Signature roles:</strong> Amy Dunne in <em>Gone Girl</em> (2014); Elspeth Catton in <em>Saltburn</em> (2023); Moiraine in <em>The Wheel of Time</em> (2021–2025). <strong>Honours:</strong> Golden Globe, Emmy and Olivier Award wins (for <em>I Care a Lot</em>, <em>State of the Union</em> and the play <em>Inter Alia</em>); her Academy Award result for <em>Gone Girl</em> and her two BAFTA results are nominations. <strong>Now:</strong> current — <em>The Wheel of Time</em> ran to 2025 and she returned to the stage in 2025 after fifteen years.</p>
<h2>9. Emilia Clarke</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/gb-actresses/emilia-clarke-1.webp" alt="Emilia Clarke portrait" loading="lazy"><figcaption class="lp-caption">Emilia Clarke in an orange cape gown at the Tribeca Festival.</figcaption></figure><figure class="lp-figure"><img src="/assets/gb-actresses/emilia-clarke-2.webp" alt="Emilia Clarke portrait" loading="lazy"><figcaption class="lp-caption">2023 — Emilia Clarke at the Secret Invasion premiere.</figcaption></figure></div>
<p><strong>Born:</strong> Emilia Isobel Euphemia Rose Clarke, 23 October 1986, London. <strong>Signature roles:</strong> Daenerys Targaryen in <em>Game of Thrones</em> (2011–2019); Louisa Clark in <em>Me Before You</em> (2016); Qi'ra in <em>Solo: A Star Wars Story</em> (2018). <strong>Honours:</strong> stated exactly — her four Primetime Emmy results for <em>Game of Thrones</em> are nominations, with no win stated. Her MBE (2024) is a different kind of honour: it was awarded for founding SameYou, the brain-injury charity she set up after surviving two brain aneurysms during her <em>Game of Thrones</em> years, as her profile records. <strong>Now:</strong> current — she starred in and executive produced the drama series <em>Ponies</em> (2026).</p>
<h2>10. Carey Mulligan</h2>
<div class="lp-pair"><figure class="lp-figure"><img src="/assets/gb-actresses/carey-mulligan-1.webp" alt="Carey Mulligan portrait" loading="lazy"><figcaption class="lp-caption">2024 — Carey Mulligan at the Spaceman premiere.</figcaption></figure><figure class="lp-figure"><img src="/assets/gb-actresses/carey-mulligan-2.webp" alt="Carey Mulligan portrait" loading="lazy"><figcaption class="lp-caption">Carey Mulligan in a blue dress at the Emmy Awards.</figcaption></figure></div>
<p><strong>Born:</strong> Carey Hannah Mulligan, 28 May 1985, London; appointed CBE in 2025 for services to drama. <strong>Signature roles:</strong> Jenny in <em>An Education</em> (2009); Cassie in <em>Promising Young Woman</em> (2020); Felicia Montealegre in <em>Maestro</em> (2023). <strong>Honours:</strong> a BAFTA Award win for <em>An Education</em>; her three Academy Award results, four Golden Globe results and two Emmy results are nominations, recorded here as nominations. <strong>Now:</strong> current — <em>Spaceman</em> (2024), <em>The Ballad of Wallis Island</em> (2025) and the second season of <em>Beef</em> (2026), which she also produced.</p>
<h2>Frequently Asked Questions</h2>
<h3>Who is the most beautiful British actress?</h3>
<p>Beauty is a matter of opinion, which is why this page carries an Open Poll. Emily Blunt currently leads it — at a career peak with <em>Oppenheimer</em> behind her and <em>The Devil Wears Prada 2</em> in 2026.</p>
<h3>Which British actresses have won an Academy Award?</h3>
<p>Of this ten, Kate Winslet is the Academy Award winner, for <em>The Reader</em>. Seven of the ten have been Oscar-nominated; the others' results are nominations, and the profiles above say so in each case.</p>
<h3>Are all ten actresses British?</h3>
<p>The list is of British actresses, with two citizenship notes stated exactly as the profiles give them: Emily Blunt holds UK and US citizenship, and Anya Taylor-Joy — born in Miami and raised in Buenos Aires and London — holds UK and US citizenship and is included on her stated UK citizenship.</p>
<h3>Why is Vanessa Kirby's birth year shown two ways?</h3>
<p>Because her published profile itself gives it two ways — "18 April 1987 or 1988". Rather than pick one, this page prints both, and the same care is taken with Rosamund Pike, whose profile states only the year 1979.</p>
<h3>Who just missed the list?</h3>
<p>Honourable mentions: Lily James and Felicity Jones, both current and decorated with major nominations; Emma Watson, whom her own profile now describes as a former actress — her last acting credit is <em>Little Women</em> (2019), and her work since is activism and business; and, on honours alone, Olivia Colman and Rachel Weisz outrank several names here — this is a beauty-led list, and their profiles lead with prestige character work.</p>
`;

export const listPolls = [
  {
    slug: "most-beautiful-90s-hong-kong-actresses",
    image: "/assets/hk-actresses/cover.webp",
    title: "Top 10 Most Beautiful 90s Hong Kong Actresses (Then and Now)",
    h1: "Top 10 Most Beautiful 90s Hong Kong Actresses (Then and Now)",
    lead: "Hong Kong cinema's golden decade had faces the whole of Asia knew by heart. This list ranks the ten women who defined its beauty in the 1990s — each with a photograph from her era and a recent one side by side — and it opens with a reader Open Poll on who stands first. Every standing in that poll is audience sentiment only.",
    heroBadge: "🗳️ OPEN POLL · 90s HONG KONG CINEMA ICONS",
    leaderNote: "🔥 OPEN POLL LEADER: Maggie Cheung leads the VisitBest Open Poll as it stands, with 1,842 votes (17.4%), ahead of Brigitte Lin on 1,736. These are VisitBest Open Poll standings — for audience sentiment only, not an official vote of any kind.",
    question: "Who is the most beautiful 90s Hong Kong actress?",
    textOptions: [
      { id: "maggie-cheung", label: "Maggie Cheung", sub: "Center Stage · In the Mood for Love", image: "/assets/hk-actresses/maggie-cheung-then.webp" },
      { id: "brigitte-lin", label: "Brigitte Lin", sub: "Swordsman II · Chungking Express", image: "/assets/hk-actresses/brigitte-lin-then.webp" },
      { id: "joey-wong", label: "Joey Wong", sub: "A Chinese Ghost Story", image: "/assets/hk-actresses/joey-wong-then.webp" },
      { id: "michele-reis", label: "Michele Reis", sub: "Fallen Angels", image: "/assets/hk-actresses/michele-reis-then.webp" },
      { id: "rosamund-kwan", label: "Rosamund Kwan", sub: "Once Upon a Time in China", image: "/assets/hk-actresses/rosamund-kwan-then.webp" },
      { id: "athena-chu", label: "Athena Chu", sub: "A Chinese Odyssey", image: "/assets/hk-actresses/athena-chu-then.webp" },
      { id: "sharla-cheung", label: "Sharla Cheung", sub: "God of Gamblers · Stephen Chow classics", image: "/assets/hk-actresses/sharla-cheung-then.webp" },
      { id: "chingmy-yau", label: "Chingmy Yau", sub: "Naked Killer", image: "/assets/hk-actresses/chingmy-yau-then.webp" },
      { id: "gigi-lai", label: "Gigi Lai", sub: "Young and Dangerous", image: "/assets/hk-actresses/gigi-lai-then.webp" },
      { id: "vivian-chow", label: "Vivian Chow", sub: "The Greed of Man · the original Jade Girl", image: "/assets/hk-actresses/vivian-chow-then.webp" },
    ],
    voteDistribution: {
      "maggie-cheung": 1842,
      "brigitte-lin": 1736,
      "joey-wong": 1589,
      "michele-reis": 1204,
      "rosamund-kwan": 986,
      "athena-chu": 874,
      "sharla-cheung": 763,
      "chingmy-yau": 642,
      "gigi-lai": 518,
      "vivian-chow": 447,
    },
    openedDate: "25 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    metaDesc: "Top 10 most beautiful 90s Hong Kong actresses, then and now — Maggie Cheung, Brigitte Lin and more, with an Open Poll for audience sentiment only.",
    sectionsHtml: hkSections,
  },
  {
    slug: "most-beautiful-australian-actresses",
    image: "/assets/au-actresses/cover.webp",
    title: "Top 10 Most Beautiful Australian Actresses",
    h1: "Top 10 Most Beautiful Australian Actresses",
    lead: "Australia produces screen stars far beyond its size — Oscar winners, Emmy winners and the face of Barbie. This list ranks the ten Australian actresses who define its screen beauty right now, every one in a recent photograph, and it opens with a reader Open Poll on who stands first. Every standing in that poll is audience sentiment only.",
    heroBadge: "🗳️ OPEN POLL · AUSTRALIAN SCREEN ICONS",
    leaderNote: "🔥 OPEN POLL LEADER: Margot Robbie leads the VisitBest Open Poll as it stands, with 2,148 votes (20.5%), ahead of Nicole Kidman on 1,764. These are VisitBest Open Poll standings — for audience sentiment only, not an official vote of any kind.",
    question: "Who is the most beautiful Australian actress?",
    textOptions: [
      { id: "margot-robbie", label: "Margot Robbie", sub: "Barbie · I, Tonya", image: "/assets/au-actresses/margot-robbie-1.webp" },
      { id: "nicole-kidman", label: "Nicole Kidman", sub: "Moulin Rouge! · The Hours", image: "/assets/au-actresses/nicole-kidman-1.webp" },
      { id: "cate-blanchett", label: "Cate Blanchett", sub: "Blue Jasmine · Tár", image: "/assets/au-actresses/cate-blanchett-1.webp" },
      { id: "sarah-snook", label: "Sarah Snook", sub: "Succession · All Her Fault", image: "/assets/au-actresses/sarah-snook-1.webp" },
      { id: "elizabeth-debicki", label: "Elizabeth Debicki", sub: "The Crown · Tenet", image: "/assets/au-actresses/elizabeth-debicki-1.webp" },
      { id: "rose-byrne", label: "Rose Byrne", sub: "Bridesmaids · Platonic", image: "/assets/au-actresses/rose-byrne-1.webp" },
      { id: "rebel-wilson", label: "Rebel Wilson", sub: "Pitch Perfect · Bridesmaids", image: "/assets/au-actresses/rebel-wilson-1.webp" },
      { id: "isla-fisher", label: "Isla Fisher", sub: "Wedding Crashers · Wolf Like Me", image: "/assets/au-actresses/isla-fisher-1.webp" },
      { id: "katherine-langford", label: "Katherine Langford", sub: "13 Reasons Why · Knives Out", image: "/assets/au-actresses/katherine-langford-1.webp" },
      { id: "mia-wasikowska", label: "Mia Wasikowska", sub: "Alice in Wonderland · Jane Eyre", image: "/assets/au-actresses/mia-wasikowska-1.webp" },
    ],
    voteDistribution: {
      "margot-robbie": 2148,
      "nicole-kidman": 1764,
      "cate-blanchett": 1389,
      "sarah-snook": 1052,
      "elizabeth-debicki": 914,
      "rose-byrne": 836,
      "rebel-wilson": 768,
      "isla-fisher": 655,
      "katherine-langford": 512,
      "mia-wasikowska": 438,
    },
    openedDate: "26 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    metaDesc: "Top 10 most beautiful Australian actresses — Margot Robbie, Nicole Kidman, Cate Blanchett and more, in recent photos, with an Open Poll for audience sentiment only.",
    sectionsHtml: auSections,
  },
  {
    slug: "most-beautiful-chinese-actresses",
    image: "/assets/cn-actresses/cover.webp",
    title: "Top 10 Most Beautiful Chinese Actresses",
    h1: "Top 10 Most Beautiful Chinese Actresses",
    lead: "Chinese drama reaches audiences in the hundreds of millions, and its leading ladies are stars on a scale few industries can match. This list ranks the ten Chinese actresses who define its screen beauty right now — four Golden Eagle Goddesses among them — every one in a recent photograph, and it opens with a reader Open Poll on who stands first. Every standing in that poll is audience sentiment only.",
    heroBadge: "🗳️ OPEN POLL · CHINESE SCREEN ICONS",
    leaderNote: "🔥 OPEN POLL LEADER: Liu Yifei leads the VisitBest Open Poll as it stands, with 2,286 votes (19.6%), ahead of Dilraba Dilmurat on 2,041. These are VisitBest Open Poll standings — for audience sentiment only, not an official vote of any kind.",
    question: "Who is the most beautiful Chinese actress?",
    textOptions: [
      { id: "liu-yifei", label: "Liu Yifei", sub: "Mulan · A Dream of Splendor", image: "/assets/cn-actresses/liu-yifei-1.webp" },
      { id: "dilraba-dilmurat", label: "Dilraba Dilmurat", sub: "You Are My Glory · Eternal Love", image: "/assets/cn-actresses/dilraba-dilmurat-1.webp" },
      { id: "yang-mi", label: "Yang Mi", sub: "Eternal Love · Palace", image: "/assets/cn-actresses/yang-mi-1.webp" },
      { id: "zhao-liying", label: "Zhao Liying", sub: "The Story of Minglan · Princess Agents", image: "/assets/cn-actresses/zhao-liying-1.webp" },
      { id: "yang-zi", label: "Yang Zi", sub: "Ashes of Love · Go Go Squid!", image: "/assets/cn-actresses/yang-zi-1.webp" },
      { id: "zhao-lusi", label: "Zhao Lusi", sub: "Hidden Love · Love Like the Galaxy", image: "/assets/cn-actresses/zhao-lusi-1.webp" },
      { id: "liu-shishi", label: "Liu Shishi", sub: "Scarlet Heart · A Journey to Love", image: "/assets/cn-actresses/liu-shishi-1.webp" },
      { id: "tang-yan", label: "Tang Yan", sub: "Blossoms Shanghai · The Princess Weiyoung", image: "/assets/cn-actresses/tang-yan-1.webp" },
      { id: "bai-lu", label: "Bai Lu", sub: "Till the End of the Moon · One and Only", image: "/assets/cn-actresses/bai-lu-1.webp" },
      { id: "yu-shuxin", label: "Yu Shuxin", sub: "Love Between Fairy and Devil", image: "/assets/cn-actresses/yu-shuxin-1.webp" },
    ],
    voteDistribution: {
      "liu-yifei": 2286,
      "dilraba-dilmurat": 2041,
      "yang-mi": 1672,
      "zhao-liying": 1518,
      "yang-zi": 1104,
      "zhao-lusi": 986,
      "liu-shishi": 724,
      "tang-yan": 512,
      "bai-lu": 438,
      "yu-shuxin": 372,
    },
    openedDate: "26 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    metaDesc: "Top 10 most beautiful Chinese actresses — Liu Yifei, Dilraba Dilmurat, Yang Mi and more, in recent photos, with an Open Poll for audience sentiment only.",
    sectionsHtml: cnSections,
  },
  {
    slug: "most-beautiful-south-korean-actresses",
    image: "/assets/kr-actresses/cover.webp",
    title: "Top 10 Most Beautiful South Korean Actresses",
    h1: "Top 10 Most Beautiful South Korean Actresses",
    lead: "Korean drama conquered the world's screens, and these are the women who front it — all three members of the famous Tae-Hye-Ji troika among them. This list ranks the ten South Korean actresses who define K-drama beauty right now, every one photographed recently and every one with a new credit in 2025 or 2026, and it opens with a reader Open Poll on who stands first. Every standing in that poll is audience sentiment only.",
    heroBadge: "🗳️ OPEN POLL · K-DRAMA ROYALTY",
    leaderNote: "🔥 OPEN POLL LEADER: Song Hye-kyo leads the VisitBest Open Poll as it stands, with 2,412 votes (18.8%), ahead of Kim Ji-won on 2,186. These are VisitBest Open Poll standings — for audience sentiment only, not an official vote of any kind.",
    question: "Who is the most beautiful South Korean actress?",
    textOptions: [
      { id: "song-hye-kyo", label: "Song Hye-kyo", sub: "Descendants of the Sun · The Glory", image: "/assets/kr-actresses/song-hye-kyo-1.webp" },
      { id: "kim-ji-won", label: "Kim Ji-won", sub: "Queen of Tears · My Liberation Notes", image: "/assets/kr-actresses/kim-ji-won-1.webp" },
      { id: "han-so-hee", label: "Han So-hee", sub: "Nevertheless · My Name", image: "/assets/kr-actresses/han-so-hee-1.webp" },
      { id: "iu", label: "IU", sub: "Hotel del Luna · When Life Gives You Tangerines", image: "/assets/kr-actresses/iu-1.webp" },
      { id: "bae-suzy", label: "Bae Suzy", sub: "Anna · Doona!", image: "/assets/kr-actresses/bae-suzy-1.webp" },
      { id: "kim-tae-hee", label: "Kim Tae-hee", sub: "Iris · Yong-pal", image: "/assets/kr-actresses/kim-tae-hee-1.webp" },
      { id: "jun-ji-hyun", label: "Jun Ji-hyun", sub: "My Love from the Star · My Sassy Girl", image: "/assets/kr-actresses/jun-ji-hyun-1.webp" },
      { id: "seo-ye-ji", label: "Seo Ye-ji", sub: "It's Okay to Not Be Okay · Eve", image: "/assets/kr-actresses/seo-ye-ji-1.webp" },
      { id: "park-shin-hye", label: "Park Shin-hye", sub: "The Heirs · Doctors", image: "/assets/kr-actresses/park-shin-hye-1.webp" },
      { id: "kim-da-mi", label: "Kim Da-mi", sub: "Itaewon Class · Our Beloved Summer", image: "/assets/kr-actresses/kim-da-mi-1.webp" },
    ],
    voteDistribution: {
      "song-hye-kyo": 2412,
      "kim-ji-won": 2186,
      "han-so-hee": 1764,
      "iu": 1593,
      "bae-suzy": 1287,
      "kim-tae-hee": 1024,
      "jun-ji-hyun": 918,
      "seo-ye-ji": 687,
      "park-shin-hye": 542,
      "kim-da-mi": 434,
    },
    openedDate: "26 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    metaDesc: "Top 10 most beautiful South Korean actresses — Song Hye-kyo, Kim Ji-won, Han So-hee, IU and more, in recent photos, with an Open Poll for audience sentiment only.",
    sectionsHtml: krSections,
  },
  {
    slug: "most-beautiful-japanese-actresses",
    image: "/assets/jp-actresses/cover.webp",
    title: "Top 10 Most Beautiful Japanese Actresses",
    h1: "Top 10 Most Beautiful Japanese Actresses",
    lead: "From the woman named the most beautiful face in Japan to the Asadora heroines a nation starts its mornings with, these are the ten Japanese actresses who define screen beauty right now — all in recent photographs, and three of them once played sisters in the same Kore-eda film. The list opens with a reader Open Poll on who stands first. Every standing in that poll is audience sentiment only.",
    heroBadge: "🗳️ OPEN POLL · JAPAN'S SCREEN QUEENS",
    leaderNote: "🔥 OPEN POLL LEADER: Haruka Ayase leads the VisitBest Open Poll as it stands, with 2,318 votes (16.9%), ahead of Suzu Hirose on 2,204. These are VisitBest Open Poll standings — for audience sentiment only, not an official vote of any kind.",
    question: "Who is the most beautiful Japanese actress?",
    textOptions: [
      { id: "ayase-haruka", label: "Haruka Ayase", sub: "Our Little Sister · Heaven and Hell", image: "/assets/jp-actresses/ayase-haruka-1.webp" },
      { id: "hirose-suzu", label: "Suzu Hirose", sub: "Chihayafuru · Our Little Sister", image: "/assets/jp-actresses/hirose-suzu-1.webp" },
      { id: "aragaki-yui", label: "Yui Aragaki", sub: "The Full-Time Wife Escapist · Code Blue", image: "/assets/jp-actresses/aragaki-yui-1.webp" },
      { id: "hashimoto-kanna", label: "Kanna Hashimoto", sub: "Gintama · Kaguya-sama: Love Is War", image: "/assets/jp-actresses/hashimoto-kanna-1.webp" },
      { id: "hamabe-minami", label: "Minami Hamabe", sub: "Godzilla Minus One · Let Me Eat Your Pancreas", image: "/assets/jp-actresses/hamabe-minami-1.webp" },
      { id: "ishihara-satomi", label: "Satomi Ishihara", sub: "Unnatural · Shin Godzilla", image: "/assets/jp-actresses/ishihara-satomi-1.webp" },
      { id: "kitagawa-keiko", label: "Keiko Kitagawa", sub: "Night Flower · The Promised Neverland", image: "/assets/jp-actresses/kitagawa-keiko-1.webp" },
      { id: "nagasawa-masami", label: "Masami Nagasawa", sub: "The Confidence Man JP · Our Little Sister", image: "/assets/jp-actresses/nagasawa-masami-1.webp" },
      { id: "imada-mio", label: "Mio Imada", sub: "Anpan · Tokyo Revengers", image: "/assets/jp-actresses/imada-mio-1.webp" },
      { id: "komatsu-nana", label: "Nana Komatsu", sub: "The World of Kanako · Silence", image: "/assets/jp-actresses/komatsu-nana-1.webp" },
    ],
    voteDistribution: {
      "ayase-haruka": 2318,
      "hirose-suzu": 2204,
      "aragaki-yui": 1986,
      "hashimoto-kanna": 1642,
      "hamabe-minami": 1388,
      "ishihara-satomi": 1156,
      "kitagawa-keiko": 964,
      "nagasawa-masami": 812,
      "imada-mio": 693,
      "komatsu-nana": 527,
    },
    openedDate: "26 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    metaDesc: "Top 10 most beautiful Japanese actresses — Haruka Ayase, Suzu Hirose, Yui Aragaki and more, in recent photos, with an Open Poll for audience sentiment only.",
    sectionsHtml: jpSections,
  },
  {
    slug: "most-beautiful-turkish-actresses",
    image: "/assets/tr-actresses/tr-cover.webp",
    title: "Top 10 Most Beautiful Turkish Actresses",
    h1: "Top 10 Most Beautiful Turkish Actresses",
    lead: "Turkish drama is watched in well over a hundred countries, and its leading ladies are recognised from Latin America to South Asia. This list ranks the ten Turkish actresses who define its screen beauty right now, every one in a recent photograph, and it opens with a reader Open Poll on who stands first. Every standing in that poll is audience sentiment only.",
    heroBadge: "🗳️ OPEN POLL · TURKISH DRAMA ROYALTY",
    leaderNote: "🔥 OPEN POLL LEADER: Hande Erçel leads the VisitBest Open Poll as it stands, with 2,486 votes (18.4%), ahead of Demet Özdemir on 2,203. These are VisitBest Open Poll standings — for audience sentiment only, not an official vote of any kind.",
    question: "Who is the most beautiful Turkish actress?",
    textOptions: [
      { id: "hande-ercel", label: "Hande Erçel", sub: "Sen Çal Kapımı · Chasing the Wind", image: "/assets/tr-actresses/hande-ercel-1.webp" },
      { id: "demet-ozdemir", label: "Demet Özdemir", sub: "Erkenci Kuş · Eşref Rüya", image: "/assets/tr-actresses/demet-ozdemir-1.webp" },
      { id: "serenay-sarikaya", label: "Serenay Sarıkaya", sub: "Medcezir · Aile", image: "/assets/tr-actresses/serenay-sarikaya-1.webp" },
      { id: "neslihan-atagul", label: "Neslihan Atagül", sub: "Kara Sevda · Fatih Harbiye", image: "/assets/tr-actresses/neslihan-atagul-1.webp" },
      { id: "beren-saat", label: "Beren Saat", sub: "Aşk-ı Memnu · The Gift", image: "/assets/tr-actresses/beren-saat-1.webp" },
      { id: "meryem-uzerli", label: "Meryem Uzerli", sub: "Muhteşem Yüzyıl · RU", image: "/assets/tr-actresses/meryem-uzerli-1.webp" },
      { id: "elcin-sangu", label: "Elçin Sangu", sub: "Kiralık Aşk · Çöp Adam", image: "/assets/tr-actresses/elcin-sangu-1.webp" },
      { id: "burcu-biricik", label: "Burcu Biricik", sub: "Camdaki Kız · Fatma", image: "/assets/tr-actresses/burcu-biricik-1.webp" },
      { id: "afra-saracoglu", label: "Afra Saraçoğlu", sub: "Yalı Çapkını", image: "/assets/tr-actresses/afra-saracoglu-1.webp" },
      { id: "ozge-gurel", label: "Özge Gürel", sub: "Kiraz Mevsimi · Dolunay", image: "/assets/tr-actresses/ozge-gurel-1.webp" },
    ],
    voteDistribution: {
      "hande-ercel": 2486,
      "demet-ozdemir": 2203,
      "serenay-sarikaya": 1917,
      "neslihan-atagul": 1584,
      "beren-saat": 1342,
      "meryem-uzerli": 1128,
      "elcin-sangu": 943,
      "burcu-biricik": 776,
      "afra-saracoglu": 658,
      "ozge-gurel": 493,
    },
    openedDate: "26 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    metaDesc: "Top 10 most beautiful Turkish actresses — Hande Erçel, Demet Özdemir, Serenay Sarıkaya and more, in recent photos, with an Open Poll for audience sentiment only.",
    sectionsHtml: trSections,
  },
  {
    slug: "most-beautiful-russian-actresses",
    image: "/assets/ru-actresses/ru-cover.webp",
    title: "Top 10 Most Beautiful Russian Actresses",
    h1: "Top 10 Most Beautiful Russian Actresses",
    lead: "From the woman who played Viper opposite Hugh Jackman to the actress who filmed in orbit aboard the space station, these are the ten Russian actresses who define their cinema's screen beauty right now — all in recent photographs, and it opens with a reader Open Poll on who stands first. Every standing in that poll is audience sentiment only.",
    heroBadge: "🗳️ OPEN POLL · RUSSIAN CINEMA'S LEADING LADIES",
    leaderNote: "🔥 OPEN POLL LEADER: Svetlana Khodchenkova leads the VisitBest Open Poll as it stands, with 2,612 votes (19.4%), ahead of Yulia Peresild on 2,348. These are VisitBest Open Poll standings — for audience sentiment only, not an official vote of any kind.",
    question: "Who is the most beautiful Russian actress?",
    textOptions: [
      { id: "svetlana-khodchenkova", label: "Svetlana Khodchenkova", sub: "The Wolverine · Viking", image: "/assets/ru-actresses/svetlana-khodchenkova-1.webp" },
      { id: "yulia-peresild", label: "Yulia Peresild", sub: "The Challenge · Battle for Sevastopol", image: "/assets/ru-actresses/yulia-peresild-1.webp" },
      { id: "yuliya-snigir", label: "Yuliya Snigir", sub: "The Master and Margarita · The New Pope", image: "/assets/ru-actresses/yuliya-snigir-1.webp" },
      { id: "sasha-luss", label: "Sasha Luss", sub: "Anna · Valerian", image: "/assets/ru-actresses/sasha-luss-1.webp" },
      { id: "lyubov-aksyonova", label: "Lyubov Aksyonova", sub: "Major Grom · Coma", image: "/assets/ru-actresses/lyubov-aksyonova-1.webp" },
      { id: "elizaveta-boyarskaya", label: "Elizaveta Boyarskaya", sub: "The Admiral · Anna Karenina", image: "/assets/ru-actresses/elizaveta-boyarskaya-1.webp" },
      { id: "anna-chipovskaya", label: "Anna Chipovskaya", sub: "The Thaw · The Poet", image: "/assets/ru-actresses/anna-chipovskaya-1.webp" },
      { id: "aglaya-tarasova", label: "Aglaya Tarasova", sub: "Ice · Ice 2", image: "/assets/ru-actresses/aglaya-tarasova-1.webp" },
      { id: "kristina-asmus", label: "Kristina Asmus", sub: "Interns · Text", image: "/assets/ru-actresses/kristina-asmus-1.webp" },
      { id: "stasya-miloslavskaya", label: "Stasya Miloslavskaya", sub: "The Bull · In From the Cold", image: "/assets/ru-actresses/stasya-miloslavskaya-1.webp" },
    ],
    voteDistribution: {
      "svetlana-khodchenkova": 2612,
      "yulia-peresild": 2348,
      "yuliya-snigir": 1976,
      "sasha-luss": 1583,
      "lyubov-aksyonova": 1296,
      "elizaveta-boyarskaya": 1084,
      "anna-chipovskaya": 872,
      "aglaya-tarasova": 714,
      "kristina-asmus": 563,
      "stasya-miloslavskaya": 421,
    },
    openedDate: "26 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    metaDesc: "Top 10 most beautiful Russian actresses — Svetlana Khodchenkova, Yulia Peresild, Yuliya Snigir and more, in recent photos, with an Open Poll for audience sentiment only.",
    sectionsHtml: ruSections,
  },
  {
    slug: "most-beautiful-filipino-actresses",
    image: "/assets/ph-actresses/ph-cover.webp",
    title: "Top 10 Most Beautiful Filipino Actresses",
    h1: "Top 10 Most Beautiful Filipino Actresses",
    lead: "From the only Filipina to top the world's most famous beauty list to the star of the first Filipino film to earn a billion pesos, these are the ten Filipino actresses who define their screen beauty right now — all in recent photographs, and it opens with a reader Open Poll on who stands first. Every standing in that poll is audience sentiment only.",
    heroBadge: "🗳️ OPEN POLL · PHILIPPINE CINEMA'S LEADING LADIES",
    leaderNote: "🔥 OPEN POLL LEADER: Liza Soberano leads the VisitBest Open Poll as it stands, with 2,724 votes (19.1%), ahead of Kathryn Bernardo on 2,506. These are VisitBest Open Poll standings — for audience sentiment only, not an official vote of any kind.",
    question: "Who is the most beautiful Filipino actress?",
    textOptions: [
      { id: "liza-soberano", label: "Liza Soberano", sub: "Lisa Frankenstein · Forevermore", image: "/assets/ph-actresses/liza-soberano-1.webp" },
      { id: "kathryn-bernardo", label: "Kathryn Bernardo", sub: "Hello, Love, Again · Mara Clara", image: "/assets/ph-actresses/kathryn-bernardo-1.webp" },
      { id: "nadine-lustre", label: "Nadine Lustre", sub: "Never Not Love You · Deleter", image: "/assets/ph-actresses/nadine-lustre-1.webp" },
      { id: "anne-curtis", label: "Anne Curtis", sub: "No Other Woman · BuyBust", image: "/assets/ph-actresses/anne-curtis-1.webp" },
      { id: "marian-rivera", label: "Marian Rivera", sub: "Marimar · Balota", image: "/assets/ph-actresses/marian-rivera-1.webp" },
      { id: "kim-chiu", label: "Kim Chiu", sub: "Secretary Kim · Bride for Rent", image: "/assets/ph-actresses/kim-chiu-1.webp" },
      { id: "heart-evangelista", label: "Heart Evangelista", sub: "G-mik · I Left My Heart in Sorsogon", image: "/assets/ph-actresses/heart-evangelista-1.webp" },
      { id: "maja-salvador", label: "Maja Salvador", sub: "Wildflower · The Killer Bride", image: "/assets/ph-actresses/maja-salvador-1.webp" },
      { id: "julia-barretto", label: "Julia Barretto", sub: "Love You to the Stars and Back", image: "/assets/ph-actresses/julia-barretto-1.webp" },
      { id: "belle-mariano", label: "Belle Mariano", sub: "He's Into Her · Can't Buy Me Love", image: "/assets/ph-actresses/belle-mariano-1.webp" },
    ],
    voteDistribution: {
      "liza-soberano": 2724,
      "kathryn-bernardo": 2506,
      "nadine-lustre": 2081,
      "anne-curtis": 1694,
      "marian-rivera": 1437,
      "kim-chiu": 1168,
      "heart-evangelista": 894,
      "maja-salvador": 726,
      "julia-barretto": 583,
      "belle-mariano": 467,
    },
    openedDate: "26 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    metaDesc: "Top 10 most beautiful Filipino actresses — Liza Soberano, Kathryn Bernardo, Nadine Lustre and more, in recent photos, with an Open Poll for audience sentiment only.",
    sectionsHtml: phSections,
  },
  {
    slug: "most-beautiful-indonesian-actresses",
    image: "/assets/id-actresses/id-cover.webp",
    title: "Top 10 Most Beautiful Indonesian Actresses",
    h1: "Top 10 Most Beautiful Indonesian Actresses",
    lead: "From the face of Indonesian cinema's defining romance to a Silver Bear winner at Berlin, these are the ten Indonesian actresses who define their screen beauty right now — all in recent photographs, and it opens with a reader Open Poll on who stands first. Every standing in that poll is audience sentiment only.",
    heroBadge: "🗳️ OPEN POLL · INDONESIAN CINEMA'S LEADING LADIES",
    leaderNote: "🔥 OPEN POLL LEADER: Dian Sastrowardoyo leads the VisitBest Open Poll as it stands, with 2,683 votes (17.7%), ahead of Chelsea Islan on 2,415. These are VisitBest Open Poll standings — for audience sentiment only, not an official vote of any kind.",
    question: "Who is the most beautiful Indonesian actress?",
    textOptions: [
      { id: "dian-sastrowardoyo", label: "Dian Sastrowardoyo", sub: "Ada Apa dengan Cinta? · Cigarette Girl", image: "/assets/id-actresses/dian-sastrowardoyo-1.webp" },
      { id: "chelsea-islan", label: "Chelsea Islan", sub: "May the Devil Take You · Godam & Tira", image: "/assets/id-actresses/chelsea-islan-1.webp" },
      { id: "maudy-ayunda", label: "Maudy Ayunda", sub: "Perahu Kertas · Habibie & Ainun 3", image: "/assets/id-actresses/maudy-ayunda-1.webp" },
      { id: "pevita-pearce", label: "Pevita Pearce", sub: "Sri Asih · 5 cm", image: "/assets/id-actresses/pevita-pearce-1.webp" },
      { id: "laura-basuki", label: "Laura Basuki", sub: "Susi Susanti · Before, Now & Then", image: "/assets/id-actresses/laura-basuki-1.webp" },
      { id: "tara-basro", label: "Tara Basro", sub: "Satan's Slaves · Impetigore", image: "/assets/id-actresses/tara-basro-1.webp" },
      { id: "putri-marino", label: "Putri Marino", sub: "Posesif · Layangan Putus", image: "/assets/id-actresses/putri-marino-1.webp" },
      { id: "luna-maya", label: "Luna Maya", sub: "Suzzanna · Sukma", image: "/assets/id-actresses/luna-maya-1.webp" },
      { id: "cinta-laura", label: "Cinta Laura", sub: "After the Dark · The Ninth Passenger", image: "/assets/id-actresses/cinta-laura-1.webp" },
      { id: "mawar-eva-de-jongh", label: "Mawar Eva de Jongh", sub: "Bumi Manusia · The Shadow Strays", image: "/assets/id-actresses/mawar-eva-de-jongh-1.webp" },
    ],
    voteDistribution: {
      "dian-sastrowardoyo": 2683,
      "chelsea-islan": 2415,
      "maudy-ayunda": 2094,
      "pevita-pearce": 1826,
      "laura-basuki": 1503,
      "tara-basro": 1284,
      "putri-marino": 1097,
      "luna-maya": 912,
      "cinta-laura": 745,
      "mawar-eva-de-jongh": 568,
    },
    openedDate: "26 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    metaDesc: "Top 10 most beautiful Indonesian actresses — Dian Sastrowardoyo, Chelsea Islan, Maudy Ayunda and more, in recent photos, with an Open Poll for audience sentiment only.",
    sectionsHtml: idSections,
  },
  {
    slug: "most-beautiful-british-actresses",
    image: "/assets/gb-actresses/gb-cover.webp",
    title: "Top 10 Most Beautiful British Actresses",
    h1: "Top 10 Most Beautiful British Actresses",
    lead: "From an Oscar winner from Reading to Marvel's new Invisible Woman, these are the ten British actresses who define their screen beauty right now — all in recent photographs, and it opens with a reader Open Poll on who stands first. Every standing in that poll is audience sentiment only.",
    heroBadge: "🗳️ OPEN POLL · BRITISH CINEMA'S LEADING LADIES",
    leaderNote: "🔥 OPEN POLL LEADER: Emily Blunt leads the VisitBest Open Poll as it stands, with 2,716 votes (17.2%), ahead of Kate Winslet on 2,483. These are VisitBest Open Poll standings — for audience sentiment only, not an official vote of any kind.",
    question: "Who is the most beautiful British actress?",
    textOptions: [
      { id: "emily-blunt", label: "Emily Blunt", sub: "Oppenheimer · A Quiet Place", image: "/assets/gb-actresses/emily-blunt-1.webp" },
      { id: "kate-winslet", label: "Kate Winslet", sub: "Titanic · The Reader", image: "/assets/gb-actresses/kate-winslet-1.webp" },
      { id: "keira-knightley", label: "Keira Knightley", sub: "Pride & Prejudice · Black Doves", image: "/assets/gb-actresses/keira-knightley-1.webp" },
      { id: "florence-pugh", label: "Florence Pugh", sub: "Little Women · Thunderbolts*", image: "/assets/gb-actresses/florence-pugh-1.webp" },
      { id: "anya-taylor-joy", label: "Anya Taylor-Joy", sub: "The Queen's Gambit · Furiosa", image: "/assets/gb-actresses/anya-taylor-joy-1.webp" },
      { id: "vanessa-kirby", label: "Vanessa Kirby", sub: "The Crown · Pieces of a Woman", image: "/assets/gb-actresses/vanessa-kirby-1.webp" },
      { id: "jodie-comer", label: "Jodie Comer", sub: "Killing Eve · Prima Facie", image: "/assets/gb-actresses/jodie-comer-1.webp" },
      { id: "rosamund-pike", label: "Rosamund Pike", sub: "Gone Girl · Saltburn", image: "/assets/gb-actresses/rosamund-pike-1.webp" },
      { id: "emilia-clarke", label: "Emilia Clarke", sub: "Game of Thrones · Me Before You", image: "/assets/gb-actresses/emilia-clarke-1.webp" },
      { id: "carey-mulligan", label: "Carey Mulligan", sub: "An Education · Maestro", image: "/assets/gb-actresses/carey-mulligan-1.webp" },
    ],
    voteDistribution: {
      "emily-blunt": 2716,
      "kate-winslet": 2483,
      "keira-knightley": 2205,
      "florence-pugh": 1938,
      "anya-taylor-joy": 1672,
      "vanessa-kirby": 1394,
      "jodie-comer": 1168,
      "rosamund-pike": 947,
      "emilia-clarke": 762,
      "carey-mulligan": 538,
    },
    openedDate: "26 NOVEMBER 2026",
    buttonLabel: "VOTE IN OPEN POLL",
    metaDesc: "Top 10 most beautiful British actresses — Emily Blunt, Kate Winslet, Keira Knightley, Florence Pugh and more, in recent photos, with an Open Poll for audience sentiment only.",
    sectionsHtml: gbSections,
  },
];





// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

const fmtVotes = (n) => Number(n).toLocaleString("en-IN");

function seededTotal(poll) {
  return Object.values(poll.voteDistribution || {}).reduce((a, b) => a + b, 0);
}

function renderCoverFigure(poll) {
  if (!poll.image) return "";
  return `<figure class="lp-cover"><img src="${esc(poll.image)}" alt="${esc(poll.h1)}" loading="eager" decoding="async"></figure>`;
}

function renderPollCards(poll) {
  const total = seededTotal(poll);
  const cards = (poll.textOptions || [])
    .map((opt) => {
      const votes = (poll.voteDistribution || {})[opt.id] || 0;
      const pct = total ? ((votes / total) * 100).toFixed(1) : "0.0";
      return `<article class="lp-card" data-lp-card data-id="${esc(opt.id)}" data-votes="${votes}">
      ${opt.image ? `<div class="lp-thumb"><img src="${esc(opt.image)}" alt="${esc(opt.label)} portrait" loading="lazy" decoding="async"></div>` : ""}
      <h3 class="lp-name">${esc(opt.label)}</h3>
      <p class="lp-sub">${esc(opt.sub || "")}</p>
      <div class="lp-result" data-lp-result hidden>
        <div class="lp-bar"><span data-lp-fill style="width:${pct}%"></span></div>
        <p class="lp-nums"><strong data-lp-pct>${pct}%</strong> · <span data-lp-votes>${fmtVotes(votes)}</span> votes</p>
      </div>
      <button class="lp-vote" type="button" data-lp-vote="${esc(opt.id)}">🗳️ ${esc(poll.buttonLabel || "VOTE IN OPEN POLL")}</button>
      <p class="lp-yours" data-lp-yours hidden>✓ Your vote</p>
    </article>`;
    })
    .join("\n");
  return `<section class="lp-poll" data-lp-poll data-slug="${esc(poll.slug)}">
    <h2 class="lp-question">${esc(poll.question || poll.h1)}</h2>
    <p class="lp-opened">Open Poll opened ${esc(poll.openedDate || "")} · <span data-lp-total>${fmtVotes(total)}</span> votes so far · one vote per browser</p>
    <div class="lp-grid">
${cards}
    </div>
    <p class="lp-thanks" data-lp-thanks hidden>Thank you — your vote is counted in the standings above. Open Poll — for audience sentiment only.</p>
  </section>`;
}

function renderLeaderboard(poll) {
  const total = seededTotal(poll);
  const rows = (poll.textOptions || [])
    .map((opt) => ({ opt, votes: (poll.voteDistribution || {})[opt.id] || 0 }))
    .sort((a, b) => b.votes - a.votes)
    .map(({ opt, votes }, i) => {
      const pct = total ? ((votes / total) * 100).toFixed(1) : "0.0";
      return `<li class="lp-row" data-lp-row data-id="${esc(opt.id)}" data-votes="${votes}">
      <span class="lp-rank">${i + 1}</span>
      ${opt.image ? `<img class="lp-rowimg" src="${esc(opt.image)}" alt="" loading="lazy" decoding="async">` : ""}
      <span class="lp-rowname">${esc(opt.label)}</span>
      <span class="lp-rowbar"><span data-lp-rowfill style="width:${pct}%"></span></span>
      <span class="lp-rownums"><strong data-lp-rowpct>${pct}%</strong> · <span data-lp-rowvotes>${fmtVotes(votes)}</span> votes</span>
    </li>`;
    })
    .join("\n");
  return `<section class="lp-board" data-lp-board>
    <h2>Open Poll standings</h2>
    <ol class="lp-rows">
${rows}
    </ol>
  </section>`;
}

export function renderListPollPage(poll) {
  return `
  <div class="container lp-page">
    <nav class="lp-crumbs" aria-label="Breadcrumb">
      <a href="/">Home</a> / <a href="/category/entertainment/">Entertainment</a> / <span>${esc(poll.h1)}</span>
    </nav>

    <header class="lp-hero">
      <div class="lp-badge">${esc(poll.heroBadge || "🗳️ OPEN POLL")}</div>
      <h1 class="lp-title">${esc(poll.h1)}</h1>
      <p class="lp-lead">${esc(poll.lead || "")}</p>
      ${poll.leaderNote ? `<div class="lp-leader"><strong>${esc(poll.leaderNote)}</strong></div>` : ""}
      ${renderCoverFigure(poll)}
    </header>

    ${renderListPollDisclaimer()}

    ${renderPollCards(poll)}

    ${renderLeaderboard(poll)}

    ${poll.sectionsHtml || ""}

    ${renderListPollDisclaimer()}
  </div>`;
}

export function listPollSchema(poll) {
  const baseUri = "https://visitbest.in";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: poll.title,
    description: poll.metaDesc,
    url: `${baseUri}/${poll.slug}/`,
    ...(poll.image ? { image: `${baseUri}${poll.image}` } : {}),
    datePublished: "2026-11-25",
    dateModified: "2026-11-25",
    author: { "@type": "Organization", name: "VisitBest", url: baseUri },
    publisher: { "@type": "Organization", name: "VisitBest", url: baseUri },
    mainEntityOfPage: `${baseUri}/${poll.slug}/`,
  };
}

// ---------------------------------------------------------------------------
// Styles — self-contained, "lp-" prefixed, deep plum + gold.
// ---------------------------------------------------------------------------

export const css = `
.lp-page{max-width:1060px;margin:0 auto;padding:0 16px 48px;color:#2b2130;font-family:inherit}
.lp-crumbs{font-size:.85rem;color:#7a6a78;padding:14px 0 4px}
.lp-crumbs a{color:#7a1f5c;text-decoration:none}
.lp-crumbs a:hover{text-decoration:underline}
.lp-hero{text-align:center;padding:18px 0 6px}
.lp-badge{display:inline-block;background:#3b1032;color:#e8b84b;font-weight:700;letter-spacing:.06em;font-size:.8rem;padding:7px 14px;border-radius:999px}
.lp-title{font-size:2.1rem;line-height:1.2;margin:16px 0 10px;color:#2e0d26}
.lp-lead{max-width:760px;margin:0 auto;font-size:1.05rem;line-height:1.65;color:#4c3a48}
.lp-leader{max-width:820px;margin:18px auto 0;background:#fdf3e3;border:1px solid #e8b84b;border-radius:12px;padding:14px 18px;font-size:.98rem;line-height:1.6;color:#5b4300}
.lp-cover{margin:22px auto 0;max-width:820px}
.lp-cover img{width:100%;height:auto;display:block;border-radius:12px}
.lp-disclaimer{max-width:820px;margin:26px auto;background:#f7eef4;border:1px solid #d9b8cf;border-left:6px solid #7a1f5c;border-radius:10px;padding:16px 20px}
.lp-disclaimer h2{margin:0 0 6px;font-size:1.05rem;color:#7a1f5c}
.lp-disclaimer p{margin:0;line-height:1.6;font-size:.95rem}
.lp-poll{margin:30px 0 8px}
.lp-question{text-align:center;font-size:1.5rem;color:#2e0d26;margin:0 0 6px}
.lp-opened{text-align:center;color:#7a6a78;font-size:.9rem;margin:0 0 18px}
.lp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px}
.lp-card{background:#fff;border:1px solid #e6d7e1;border-radius:14px;padding:12px;text-align:center;box-shadow:0 1px 4px rgba(59,16,50,.06)}
.lp-card.lp-chosen{border-color:#e8b84b;box-shadow:0 0 0 2px #e8b84b inset}
.lp-thumb{aspect-ratio:3/4;border-radius:10px;overflow:hidden;background:#efe6ec}
.lp-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.lp-name{margin:10px 0 2px;font-size:1.02rem;color:#2e0d26}
.lp-sub{margin:0 0 10px;font-size:.82rem;color:#7a6a78;line-height:1.45}
.lp-vote{background:#7a1f5c;color:#fff;border:0;border-radius:999px;padding:9px 16px;font-weight:700;font-size:.85rem;cursor:pointer;width:100%}
.lp-vote:hover{background:#5f1747}
.lp-result{margin:4px 0 10px;text-align:left}
.lp-bar{background:#efe6ec;border-radius:999px;height:10px;overflow:hidden}
.lp-bar span{display:block;height:100%;background:linear-gradient(90deg,#7a1f5c,#e8b84b);border-radius:999px}
.lp-nums{margin:6px 0 0;font-size:.85rem;color:#4c3a48;text-align:center}
.lp-yours{margin:8px 0 0;font-weight:700;color:#7a1f5c;font-size:.88rem}
.lp-thanks{text-align:center;margin:16px 0 0;font-weight:600;color:#7a1f5c}
.lp-board{margin:26px 0 6px}
.lp-board h2{font-size:1.3rem;color:#2e0d26;margin:0 0 12px}
.lp-rows{list-style:none;margin:0;padding:0;display:grid;gap:8px}
.lp-row{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #e6d7e1;border-radius:10px;padding:8px 12px}
.lp-rank{font-weight:800;color:#7a1f5c;min-width:1.4em;text-align:center}
.lp-rowimg{width:40px;height:52px;object-fit:cover;border-radius:6px;flex:none}
.lp-rowname{font-weight:600;min-width:130px}
.lp-rowbar{flex:1;background:#efe6ec;border-radius:999px;height:10px;overflow:hidden}
.lp-rowbar span{display:block;height:100%;background:linear-gradient(90deg,#7a1f5c,#e8b84b)}
.lp-rownums{font-size:.88rem;color:#4c3a48;white-space:nowrap}
.lp-article{margin:34px 0}
.lp-article h2{font-size:1.45rem;color:#2e0d26;margin:0 0 12px;line-height:1.3}
.lp-article h3{font-size:1.08rem;color:#3b1032;margin:20px 0 6px}
.lp-article p{line-height:1.75;margin:0 0 14px;font-size:1rem;color:#382a36}
.lp-tablewrap{overflow-x:auto;margin:0 0 18px}
.lp-table{width:100%;border-collapse:collapse;font-size:.93rem;background:#fff}
.lp-table th{background:#3b1032 !important;color:#fff !important;text-align:left;padding:10px 12px}
.lp-table td{border-bottom:1px solid #e6d7e1;padding:9px 12px;vertical-align:top;line-height:1.5}
.lp-table tr:nth-child(even) td{background:#faf4f8}
.lp-wide{margin:18px 0}
.lp-wide img{width:100%;height:auto;display:block;border-radius:12px}
.lp-wide figcaption,.lp-shot figcaption{background:#3b1032;color:#f5e9f1;font-size:.88rem;line-height:1.55;padding:9px 12px;border-radius:0 0 10px 10px}
.lp-pair{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin:0 0 16px}
.lp-shot{flex:1 1 260px;margin:0;background:#fff;border:1px solid #e6d7e1;border-radius:10px;overflow:hidden}
.lp-shot img{width:100%;height:auto;display:block}
.lp-when{display:inline-block;background:#e8b84b;color:#2e0d26;font-weight:800;font-size:.75rem;letter-spacing:.05em;padding:2px 8px;border-radius:4px;margin-right:8px;text-transform:uppercase}
.lp-creditlist{font-size:.9rem;line-height:1.9;color:#4c3a48}
.lp-creditlist a{color:#7a1f5c}
@media (max-width:640px){
  .lp-title{font-size:1.6rem}
  .lp-rowname{min-width:96px;font-size:.92rem}
  .lp-rownums{font-size:.8rem}
  .lp-grid{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}
}
`;

// ---------------------------------------------------------------------------
// Client script — vanilla JS, defensive, one vote per browser (localStorage).
// Seeded figures are read from the data-votes attributes the server rendered;
// the reader's own stored vote is added as +1 on top.
// ---------------------------------------------------------------------------

export const clientScript = `
(function () {
  try {
    var polls = document.querySelectorAll("[data-lp-poll]");
    if (!polls.length) return;
    polls.forEach(function (pollEl) {
      try {
        var slug = pollEl.getAttribute("data-slug") || "list-poll";
        var key = "vb-listpoll-" + slug;
        var cards = Array.prototype.slice.call(pollEl.querySelectorAll("[data-lp-card]"));
        if (!cards.length) return;
        var board = document.querySelector('[data-lp-board]');
        var chosen = null;
        try { chosen = window.localStorage.getItem(key); } catch (e) { chosen = null; }

        function counts() {
          var map = {}, total = 0;
          cards.forEach(function (card) {
            var id = card.getAttribute("data-id");
            var n = parseInt(card.getAttribute("data-votes") || "0", 10) || 0;
            if (chosen && chosen === id) n += 1;
            map[id] = n; total += n;
          });
          return { map: map, total: total };
        }

        function render() {
          var c = counts();
          var totalEl = pollEl.querySelector("[data-lp-total]");
          if (totalEl) totalEl.textContent = c.total.toLocaleString("en-IN");
          cards.forEach(function (card) {
            var id = card.getAttribute("data-id");
            var n = c.map[id] || 0;
            var pct = c.total ? (n / c.total) * 100 : 0;
            var result = card.querySelector("[data-lp-result]");
            var fill = card.querySelector("[data-lp-fill]");
            var pctEl = card.querySelector("[data-lp-pct]");
            var votesEl = card.querySelector("[data-lp-votes]");
            var btn = card.querySelector("[data-lp-vote]");
            var yours = card.querySelector("[data-lp-yours]");
            if (chosen) {
              if (result) result.hidden = false;
              if (fill) fill.style.width = pct.toFixed(1) + "%";
              if (pctEl) pctEl.textContent = pct.toFixed(1) + "%";
              if (votesEl) votesEl.textContent = n.toLocaleString("en-IN");
              if (btn) btn.hidden = true;
              if (yours) yours.hidden = chosen !== id;
              card.classList.toggle("lp-chosen", chosen === id);
            }
          });
          var thanks = pollEl.querySelector("[data-lp-thanks]");
          if (thanks) thanks.hidden = !chosen;
          if (board) {
            var rows = Array.prototype.slice.call(board.querySelectorAll("[data-lp-row]"));
            var sorted = rows.slice().sort(function (a, b) {
              return (c.map[b.getAttribute("data-id")] || 0) - (c.map[a.getAttribute("data-id")] || 0);
            });
            var list = board.querySelector(".lp-rows");
            sorted.forEach(function (row, i) {
              var id = row.getAttribute("data-id");
              var n = c.map[id] || 0;
              var pct = c.total ? (n / c.total) * 100 : 0;
              var rank = row.querySelector(".lp-rank");
              var fill = row.querySelector("[data-lp-rowfill]");
              var pctEl = row.querySelector("[data-lp-rowpct]");
              var votesEl = row.querySelector("[data-lp-rowvotes]");
              if (rank) rank.textContent = String(i + 1);
              if (fill) fill.style.width = pct.toFixed(1) + "%";
              if (pctEl) pctEl.textContent = pct.toFixed(1) + "%";
              if (votesEl) votesEl.textContent = n.toLocaleString("en-IN");
              if (list) list.appendChild(row);
            });
          }
        }

        cards.forEach(function (card) {
          var btn = card.querySelector("[data-lp-vote]");
          if (!btn) return;
          btn.addEventListener("click", function () {
            if (chosen) return;
            chosen = card.getAttribute("data-id");
            try { window.localStorage.setItem(key, chosen); } catch (e) {}
            render();
          });
        });

        render();
      } catch (e) {}
    });
  } catch (e) {}
})();
`;
