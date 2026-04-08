// ============================================
// Live Tech – vivenu Podcast Website
// ============================================

// --- Scroll Reveal ---
const fadeEls = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0, rootMargin: '0px 0px -60px 0px' });

fadeEls.forEach((el) => observer.observe(el));

// Trigger hero immediately on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hero .fade-up')?.classList.add('visible');
});
// Also trigger immediately in case DOMContentLoaded already fired
document.querySelector('.hero .fade-up')?.classList.add('visible');

// Fallback: check on scroll if any fade-up elements should be visible
function checkFadeUps() {
  document.querySelectorAll('.fade-up:not(.visible)').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkFadeUps, { passive: true });
checkFadeUps();

// --- Nav scroll effect ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// --- Mobile menu ---
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
