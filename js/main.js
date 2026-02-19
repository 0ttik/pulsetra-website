// ===== App Store Link Config =====
const APP_STORE_URL = 'https://apps.apple.com/app/idXXXXXXXXXX'; // Replace with real ID
const IS_PUBLISHED = false; // Set to true after App Store approval

// ===== App Store Button =====
(function initAppStoreButton() {
  const btn = document.getElementById('appStoreBtn');
  if (!btn) return;

  if (IS_PUBLISHED) {
    btn.href = APP_STORE_URL;
    btn.classList.remove('hero__cta--disabled');
    btn.textContent = '';
    btn.innerHTML =
      '<svg width="20" height="24" viewBox="0 0 17 20" fill="currentColor"><path d="M13.545 10.239c-.02-2.159 1.762-3.195 1.842-3.245-1.003-1.467-2.565-1.668-3.12-1.69-1.329-.135-2.594.783-3.268.783-.674 0-1.716-.763-2.82-.743-1.452.021-2.789.845-3.536 2.145-1.507 2.614-.386 6.488 1.082 8.61.718 1.038 1.573 2.204 2.697 2.162 1.081-.043 1.49-.7 2.798-.7 1.308 0 1.674.7 2.816.678 1.164-.02 1.902-1.058 2.614-2.1.823-1.205 1.162-2.372 1.182-2.433-.026-.012-2.267-.87-2.287-3.467zM11.4 3.527c.596-.723.999-1.727.889-2.727-.859.035-1.9.572-2.516 1.294-.553.64-1.037 1.662-.907 2.642.958.075 1.936-.487 2.534-1.209z"/></svg>' +
      ' Download on the App Store';
  }
})();

// ===== Mobile Navigation =====
(function initMobileNav() {
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const closeBtn = document.querySelector('.mobile-nav__close');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
  closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) mobileNav.classList.remove('open');
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
})();

// ===== FAQ Accordion =====
(function initFAQ() {
  document.querySelectorAll('.faq__question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq__answer');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq__item').forEach((i) => {
        i.classList.remove('open');
        i.querySelector('.faq__answer').style.maxHeight = null;
      });

      // Open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
})();
