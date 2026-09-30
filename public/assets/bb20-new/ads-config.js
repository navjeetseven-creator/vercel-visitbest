/* Enter real display-ad unit IDs copied from YOUR AdSense account.
   Blank values keep placements hidden. Ads never load in local previews.
   This publisher ID was read from VisitBest's existing public HTML. */
window.VB_BB20_ADS = {
  enabled: false,
  publisher: 'ca-pub-6008816938247526',
  slots: {
    article_intro: '',
    article_middle: '',
    desktop_sidebar: ''
  }
};
// Reserve configured positions before the first content paint.
if (window.VB_BB20_ADS.enabled && /^(www\.)?visitbest\.in$/.test(location.hostname)) {
  for (const [slot, id] of Object.entries(window.VB_BB20_ADS.slots)) {
    if (!/^\d+$/.test(String(id))) continue;
    const name = {article_intro:'intro',article_middle:'middle',desktop_sidebar:'sidebar'}[slot];
    document.documentElement.classList.add('has-ad-' + name);
  }
}
