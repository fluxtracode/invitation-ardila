// Lightweight pure Vanilla JS animations (Zero dependencies, 0kb bundle overhead)

const prefersReducedMotion = () => {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Animate hero section after gate is opened
 */
export function animateHero() {
  if (typeof document === 'undefined') return;

  const targets = document.querySelectorAll('.hero-badge, .hero-content');
  if (prefersReducedMotion()) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  targets.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('is-revealed');
    }, index * 150 + 80);
  });
}

/**
 * Setup scroll animations for Doa, Gallery, and Lokasi sections using native IntersectionObserver
 */
export function setupScrollAnimations() {
  if (typeof window === 'undefined') return;

  const targets = document.querySelectorAll('.doa-item, .gallery-item, .lokasi-card');

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}
