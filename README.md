# 2WEB-BocaBestia

**Web para BocaBestia — smash burgers y street food en Jerez de la Frontera, Cádiz.**

HTML, CSS y JavaScript vanilla. Sin frameworks, sin build, sin complicaciones: se abre `index.html` directamente en el navegador.

© 2026 2WEB Project

---

## Qué hay dentro

- **Hero** — "SABORES QUE DESATAN LA BESTIA" con el badge de "NUEVO EN JEREZ", CTA a la carta, botón para pedir online (Uber Eats) y acceso directo a la ubicación.
- **Las más bestias** — las tres hamburguesas estrella con sus precios (la Boca Bestia Burguer, por supuesto, va destacada con borde rojo).
- **Banner de actitud** — 100% carne de calidad, 0% tonterías. Directo al grano.
- **Reseñas** — carrusel con opiniones reales de Google, navegable con flechas y teclado.
- **Ubicación** — "¡Encuentra a la Bestia!" con mapa oscuro y los datos del local. Recién estrenada, explicada abajo.
- **Footer** — redes sociales y copyright.

## Sección Ubicación

La añadimos para que nadie se pierda buscando el local. Incluye:

- **Mapa oscuro** con Leaflet y tiles de CARTO (gratis, sin API key), centrado en C/ San Marino, 4, con el marker y un popup que dice "¡Aquí vive la Bestia!".
- **Tarjeta de información** con dirección, teléfono e Instagram.
- **Botones** "Cómo llegar" (abre Google Maps) y "Reserva tu mesa".
- Los enlaces del menú ("Ubicación") y del hero ("¿Dónde estamos?") ahora apuntan a la sección.
- **Responsive**: a partir de 900px todo se apila en una columna y el mapa se reduce.

> Ojo: el teléfono que aparece es de prueba. Cuando tengamos el real, se cambia en `index.html`.

## Cómo ejecutar

1. Abrir `index.html` en cualquier navegador.
2. Nada más.

Se necesita internet para las fuentes de Google, el mapa y la librería Leaflet (vía CDN).

## Guía rápida de modificación

- **Colores y tipografías**: variables en `:root` al inicio de `estilos/estilos.css` (`--rojo-bestia`, `--negro-fondo`, etc.).
- **Reseñas**: editar las tarjetas `<article class="tarjeta-resena">` en `index.html`.
- **Mapa**: coordenadas en `L.map('map').setView([lat, lng], zoom)` y en `L.marker([lat, lng])`.
