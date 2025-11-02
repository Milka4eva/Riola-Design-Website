(function() {
  // Плавная прокрутка (на случай, если в CSS не задано)
  document.documentElement.style.scrollBehavior = 'smooth';

  // Берем твое мобильное меню
  const nav = document.getElementById('mobile-nav');
  if (!nav) return;

  const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
  if (!links.length) return;

  const byId = (id) => links.find(a => a.getAttribute('href') === '#' + id);

  // Подсветка активного пункта при скролле
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(a => a.classList.remove('active'));
        const link = byId(id);
        if (link) link.classList.add('active');
        // не ломаем историю, но обновляем hash красиво
        history.replaceState(null, '', '#' + id);
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  // Наблюдаем за всеми секциями с id
  document.querySelectorAll('section[id]').forEach(sec => io.observe(sec));

  // Активная "Home" по умолчанию, если открыли без hash
  if (!location.hash) {
    links.forEach(a => a.classList.remove('active'));
    const homeLink = byId('home');
    if (homeLink) homeLink.classList.add('active');
  }

  // Закрыть бургер после клика по пункту меню
  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    document.body.classList.remove('nav-open'); // если ты где-то её добавляешь
  });
})();