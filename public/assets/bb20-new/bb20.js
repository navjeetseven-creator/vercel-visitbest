/* Navigation and ad initialization for the additional editorial pages. */
(() => {
  const menu = document.querySelector('.menu, .menu-toggle, [data-menu-toggle]');
  const nav = document.querySelector('.nav, .primary-nav, [data-primary-nav]');
  if (menu && nav) menu.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    nav.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
    menu.setAttribute('aria-expanded', String(open));
  });

  const backTop = document.querySelector('[data-back-top]');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('is-visible', window.scrollY > 450);
    }, { passive: true });
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  const preview = new URLSearchParams(location.search).get('ads-preview') === '1';
  const isProduction = location.hostname === 'visitbest.in' || location.hostname === 'www.visitbest.in';
  if (preview && !isProduction) {
    document.documentElement.classList.add('ads-preview');
    document.querySelectorAll('.ad-surface').forEach(el => { el.textContent = 'Reserved ad position — preview only'; });
    return;
  }
  const cfg = window.VB_BB20_ADS;
  if (!isProduction || !cfg || !cfg.enabled) return;
  // Preserve a site-provided loader when one already exists.
  if (!document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(cfg.publisher);
    document.head.append(script);
  }
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const surface = entry.target;
      observer.unobserve(surface);
      const slot = String(cfg.slots?.[surface.dataset.placement] || '');
      const ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.dataset.adClient = cfg.publisher || 'ca-pub-6008816938247526';
      if (/^\d+$/.test(slot)) {
        ins.dataset.adSlot = slot;
      }
      ins.dataset.adFormat = 'auto';
      ins.dataset.fullWidthResponsive = 'true';
      surface.replaceChildren(ins);
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, {rootMargin: '120px 0px'});
  document.querySelectorAll('.ad-surface').forEach(surface => {
    const kind = surface.dataset.placement;
    if (kind === 'desktop_sidebar' && !window.matchMedia('(min-width:1001px)').matches) return;
    observer.observe(surface);
  });
})();
