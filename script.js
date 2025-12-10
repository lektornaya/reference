// Простой, надёжный скрипт: меню, плавный скролл, модалка и валидация формы.

document.addEventListener('DOMContentLoaded', () => {
  // helpers
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  /* MOBILE NAV */
  const navToggle = $('.nav-toggle');
  const nav = $('.nav');
  const navList = $('.nav-list');

  function closeNav() {
    navToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('active');
    document.body.style.overflow = '';
  }
  function openNav() {
    navToggle.setAttribute('aria-expanded', 'true');
    nav.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      if (nav && nav.classList.contains('active')) closeNav();
      else openNav();
    });
  }

  // close when click anchor
  $$('.nav-link').forEach(a => a.addEventListener('click', () => closeNav()));

  /* SMOOTH SCROLL (учёт фиксированной шапки) */
  const header = $('.header');
  const headerHeight = () => header ? header.offsetHeight : 0;
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight() - 12;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
  });

  /* PROJECT MODAL */
  const modal = $('#projectModal');
  const modalImg = $('#modalImg');
  const modalTitle = $('#modalTitle');
  const modalDesc = $('#modalDesc');
  const modalClose = modal ? modal.querySelector('.modal-close') : null;

  function openProject(card) {
    const img = card.dataset.img || '';
    const title = card.dataset.title || '';
    const desc = card.dataset.desc || '';
    if (modalImg) modalImg.src = img;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    if (modal) {
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }
  function closeProject() {
    if (modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (modalImg) modalImg.src = '';
    }
  }

  $$('.project-card .link-more').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.project-card');
      openProject(card);
    });
  });
  // also open when pressing Enter on card
  $$('.project-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter') openProject(card);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeProject);
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeProject(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });

  /* FORM VALIDATION */
  const contactForm = $('#contactForm');
  const resultBox = $('#formResult');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // clear previous
      resultBox.textContent = '';
      const name = contactForm.querySelector('#name');
      const email = contactForm.querySelector('#email');
      const message = contactForm.querySelector('#message');
      let ok = true;

      [name, email, message].forEach(el => el.style.outline = 'none');

      if (!name.value.trim()) { name.style.outline = '2px solid #f3d4d4'; ok = false; }
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRe.test(email.value.trim())) { email.style.outline = '2px solid #f3d4d4'; ok = false; }
      if (!message.value.trim()) { message.style.outline = '2px solid #f3d4d4'; ok = false; }

      if (!ok) {
        resultBox.textContent = 'Пожалуйста, заполните обязательные поля корректно.';
        return;
      }

      // fake send (replace with fetch to real endpoint)
      const btn = contactForm.querySelector('button[type="submit"]');
      const prev = btn.textContent;
      btn.textContent = 'Отправка...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = prev;
        btn.disabled = false;
        resultBox.textContent = 'Спасибо — сообщение отправлено.';
        contactForm.reset();
      }, 800);
    });
  }

  /* small enhancement: show header shadow on scroll */
  window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }, { passive: true });
});
