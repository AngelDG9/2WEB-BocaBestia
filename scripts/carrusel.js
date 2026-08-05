document.addEventListener('DOMContentLoaded', () => {
  const ventana = document.querySelector('.carrusel-ventana');
  const pista = document.querySelector('.carrusel-pista');
  const btnIzq = document.querySelector('.carrusel-btn-izq');
  const btnDer = document.querySelector('.carrusel-btn-der');
  if (!ventana || !pista) return;

  const calcularScroll = () => {
    const card = pista.querySelector('.tarjeta-resena');
    const gap = parseInt(getComputedStyle(pista).gap) || 20;
    const cardWidth = card ? Math.round(card.getBoundingClientRect().width) : 320;
    return cardWidth + gap;
  };

  const scrollByAmount = () => calcularScroll();

  btnIzq && btnIzq.addEventListener('click', () => {
    ventana.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' });
  });

  btnDer && btnDer.addEventListener('click', () => {
    ventana.scrollBy({ left: scrollByAmount(), behavior: 'smooth' });
  });

  ventana.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { ventana.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' }); }
    if (e.key === 'ArrowRight') { ventana.scrollBy({ left: scrollByAmount(), behavior: 'smooth' }); }
  });
});
