// Intersection Observer para animaciones reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, (entry.target.dataset.delay || 0) * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  observer.observe(el);
});

// Timeline items stagger
document.querySelectorAll('.tl-item').forEach((el, i) => {
  el.style.animationDelay = `${i * 0.08}s`;
});
