document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.mobile-nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    nav.querySelectorAll('a.active').forEach(a => a.classList.remove('active'));
    link.classList.add('active');

    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});