document.addEventListener('DOMContentLoaded', () => {
  const jaula = document.getElementById('jaula');
  if (!jaula) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sinCursor = window.matchMedia('(hover: none)');

  if (reducedMotion.matches) {
    jaula.classList.add('jaula-abierta');
    return;
  }

  const toggleJaula = () => jaula.classList.toggle('jaula-abierta');

  jaula.addEventListener('click', toggleJaula);
  jaula.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleJaula();
    }
  });

  if (sinCursor.matches) {
    const abrirUnaVez = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          jaula.classList.add('jaula-abierta');
          observer.disconnect();
        }
      });
    };
    const observer = new IntersectionObserver(abrirUnaVez, { threshold: 0.5 });
    observer.observe(jaula);
  }
});