document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.mobile-nav');

  if (!burger || !nav) return;

  // открытие / закрытие бургера
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // клик по пункту меню
  nav.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    // убрать aria-current у всех пунктов
    nav.querySelectorAll('a').forEach(a => {
      a.removeAttribute('aria-current');
    });

    // поставить aria-current на выбранный
    link.setAttribute('aria-current', 'page');

    // закрыть меню
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});