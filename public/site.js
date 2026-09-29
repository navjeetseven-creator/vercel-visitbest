(function () {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-primary-nav]');
  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      document.body.classList.toggle('nav-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
    });
  }

  const headings = Array.from(document.querySelectorAll('.prose h2[id], .prose h3[id]'));
  const tocLinks = new Map(Array.from(document.querySelectorAll('.toc-card a[href^="#"]')).map(function (link) {
    return [link.getAttribute('href').slice(1), link];
  }));
  if (headings.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        tocLinks.forEach(function (link) { link.classList.remove('is-active'); link.removeAttribute('aria-current'); });
        const active = tocLinks.get(entry.target.id);
        if (active) { active.classList.add('is-active'); active.setAttribute('aria-current', 'location'); }
      });
    }, { rootMargin: '-18% 0px -70% 0px', threshold: 0 });
    headings.forEach(function (heading) { observer.observe(heading); });
  }

  document.querySelectorAll('.toc-card a').forEach(function (link) {
    link.addEventListener('click', function () {
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const filter = document.querySelector('[data-directory-filter]');
  if (filter) {
    const cards = Array.from(document.querySelectorAll('[data-directory-card]'));
    const count = document.querySelector('[data-directory-count]');
    filter.addEventListener('input', function () {
      const term = filter.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(function (card) {
        const match = !term || card.textContent.toLowerCase().includes(term);
        card.hidden = !match;
        if (match) visible += 1;
      });
      if (count) count.textContent = visible + ' shown';
    });
  }

  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    const input = document.getElementById('search-query');
    const count = document.getElementById('search-count');
    const results = document.getElementById('search-results');
    const index = Array.isArray(window.__VISITBEST_SEARCH__) ? window.__VISITBEST_SEARCH__ : [];
    const params = new URLSearchParams(window.location.search);
    const renderResults = function (value) {
      const term = value.trim().toLowerCase();
      const matches = term ? index.filter(function (item) {
        return [item.title, item.summary, item.category].join(' ').toLowerCase().includes(term);
      }).slice(0, 80) : index.slice(0, 12);
      if (count) count.textContent = term ? (matches.length + ' result' + (matches.length === 1 ? '' : 's')) : 'Showing the latest 12 guides';
      if (!results) return;
      results.replaceChildren();
      if (!matches.length) {
        const empty = document.createElement('p');
        empty.className = 'takeaway';
        empty.textContent = 'No matching guides yet. Try a broader phrase or browse the categories.';
        results.appendChild(empty);
        return;
      }
      matches.forEach(function (item) {
        const article = document.createElement('article');
        article.className = 'search-result';
        const link = document.createElement('a');
        link.href = item.href;
        const heading = document.createElement('h2');
        heading.textContent = item.title || 'VisitBest guide';
        const meta = document.createElement('p');
        meta.className = 'search-result-meta';
        meta.textContent = item.category || 'Guide';
        const summary = document.createElement('p');
        summary.textContent = item.summary || 'Explore this VisitBest guide.';
        link.append(heading, meta, summary);
        article.appendChild(link);
        results.appendChild(article);
      });
    };
    if (input) {
      input.value = params.get('q') || '';
      input.addEventListener('input', function () { renderResults(input.value); });
    }
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const value = input ? input.value.trim() : '';
      const next = value ? '/search/?q=' + encodeURIComponent(value) : '/search/';
      window.history.replaceState({}, '', next);
      renderResults(value);
    });
    renderResults(input ? input.value : '');
  }

  const backTop = document.querySelector('[data-back-top]');
  if (backTop) {
    window.addEventListener('scroll', function () { backTop.classList.toggle('is-visible', window.scrollY > 520); }, { passive: true });
    backTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    if (link.closest('.toc-card')) return;
    link.addEventListener('click', function (event) {
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
})();
