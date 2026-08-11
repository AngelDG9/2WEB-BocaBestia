document.addEventListener('DOMContentLoaded', () => {
  const clave = 'opiniones';
  const form = document.getElementById('form-opinion');
  const nombre = document.getElementById('nombre');
  const comentario = document.getElementById('comentario');
  const contador = document.getElementById('contador');
  const toast = document.getElementById('toast');
  const gruposEstrellas = Array.from(document.querySelectorAll('.rating-estrellas'));
  const errorNombre = document.getElementById('error-nombre');
  const errorComentario = document.getElementById('error-comentario');
  const errorRatings = document.getElementById('error-ratings');

  let opiniones = [];
  let toastTimer = null;

  const guardar = () => localStorage.setItem(clave, JSON.stringify(opiniones));

  const cargar = () => {
    try {
      opiniones = JSON.parse(localStorage.getItem(clave)) || [];
    } catch (e) {
      opiniones = [];
    }
    opiniones.forEach((opinion, i) => {
      opinion.id = opinion.id || String(Date.now() + i);
    });
  };

  const marcarError = (el, msg) => {
    el.textContent = msg;
    el.hidden = false;
  };

  const limpiarError = (el) => {
    el.hidden = true;
    el.textContent = '';
  };

  const actualizarContador = () => {
    contador.textContent = comentario.value.length + ' / 500';
  };

  const ocultarToast = () => {
    toast.hidden = true;
  };

  const mostrarToast = (mensaje) => {
    toast.innerHTML = '';
    const span = document.createElement('span');
    span.textContent = mensaje;
    toast.appendChild(span);
    toast.hidden = false;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(ocultarToast, 6000);
  };

  gruposEstrellas.forEach((grupo) => {
    const estrellas = Array.from(grupo.querySelectorAll('.estrella'));
    let valor = 0;

    const pintar = (v) => {
      estrellas.forEach((estrella, i) => estrella.classList.toggle('llena', i < v));
    };

    grupo.addEventListener('mouseover', (e) => {
      const estrella = e.target.closest('.estrella');
      if (estrella) pintar(parseInt(estrella.value, 10));
    });

    grupo.addEventListener('mouseleave', () => pintar(valor));

    grupo.addEventListener('click', (e) => {
      const estrella = e.target.closest('.estrella');
      if (!estrella) return;
      valor = parseInt(estrella.value, 10);
      grupo.dataset.valor = valor;
      limpiarError(errorRatings);
    });

    grupo.dataset.valor = '0';
  });

  nombre.addEventListener('input', () => limpiarError(errorNombre));
  comentario.addEventListener('input', () => {
    actualizarContador();
    limpiarError(errorComentario);
  });
  actualizarContador();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;

    if (nombre.value.trim() === '') {
      marcarError(errorNombre, 'Pon tu nombre, que la Bestia quiere saber quién habla.');
      ok = false;
    } else {
      limpiarError(errorNombre);
    }

    const valores = gruposEstrellas.map((grupo) => parseInt(grupo.dataset.valor || '0', 10));
    if (valores.some((v) => v === 0)) {
      marcarError(errorRatings, 'Valora la comida, el servicio y el ambiente para publicar.');
      ok = false;
    } else {
      limpiarError(errorRatings);
    }

    if (comentario.value.trim() === '') {
      marcarError(errorComentario, 'No nos dejes sin chicha. Cuenta algo, sea bueno o malo.');
      ok = false;
    } else {
      limpiarError(errorComentario);
    }

    if (!ok) return;

    opiniones.unshift({
      id: String(Date.now()),
      nombre: nombre.value.trim(),
      comida: valores[0],
      servicio: valores[1],
      ambiente: valores[2],
      comentario: comentario.value.trim(),
      fecha: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
    });
    guardar();

    form.reset();
    gruposEstrellas.forEach((grupo) => {
      grupo.dataset.valor = '0';
      grupo.querySelectorAll('.estrella').forEach((estrella) => estrella.classList.remove('llena'));
    });
    actualizarContador();
    mostrarToast('¡Opinión publicada, bestia! Gracias por hablar.');
  });

  cargar();
});