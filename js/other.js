(function() {
    // плавная прокрутка (дублирование не страшно)
    document.documentElement.style.scrollBehavior = 'smooth';

    const nav = document.getElementById('siteNav') || document.querySelector('.site-nav');
    if (!nav) return;

    const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
    const byId = id => links.find(a => a.getAttribute('href') === '#' + id);

    // Подсветка активного пункта при скролле
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(a => a.classList.remove('active'));
          const link = byId(id);
          if (link) link.classList.add('active');
          history.replaceState(null, '', '#' + id);
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    document.querySelectorAll('.section[id]').forEach(sec => io.observe(sec));

    // Активная "Главная" по умолчанию, если открыли без hash
    if (!location.hash) {
      links.forEach(a => a.classList.remove('active'));
      const home = byId('hero');
      if (home) home.classList.add('active');
    }

    // Закрывать бургер после клика по пункту меню (если бургер добавляет класс на body)
    nav.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      document.body.classList.remove('nav-open');
    });
  })();