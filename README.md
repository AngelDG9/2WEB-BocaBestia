# 2WEB-BocaBestia

**Web para BocaBestia — smash burgers y street food en Jerez de la Frontera, Cádiz.**

HTML, CSS y JavaScript vanilla. Sin frameworks, sin build, sin complicaciones: se abre `index.html` directamente en el navegador.

© 2026 2WEB Project

---

## Qué hay dentro

- **Hero** — "SABORES QUE DESATAN LA BESTIA" con el badge de "NUEVO EN JEREZ", CTA a la carta, botón para pedir online (Uber Eats) y acceso directo a la ubicación.
- **Las más bestias** — las tres hamburguesas estrella con sus precios (la Boca Bestia Burguer, por supuesto, va destacada con borde rojo).
- **Nosotros** — "Detrás de la jaula": la historia del local con su gorila interactivo, explicada abajo.
- **Banner de actitud** — 100% carne de calidad, 0% tonterías. Directo al grano.
- **Reseñas** — carrusel con opiniones reales de Google, navegable con flechas y teclado.
- **Ubicación** — "¡Encuentra a la Bestia!" con mapa oscuro y los datos del local. Recién estrenada, explicada abajo.
- **Footer** — redes sociales y copyright.

## Sección Nosotros

El alma de la casa. Cuenta quiénes somos (familia González, los de Menta, y el cocinero Javier Moreno, fugado de la alta cocina) y trae el protagonista estrella: **la Bestia**, el gorila enjaulado ilustrado con IA que preside la entrada del local. Incluye:

- **La jaula interactiva**: una ilustración del gorila (1600×2000) tapada por barrotes dibujados con CSS que **tiembla en reposo** y **se abre al pasar el ratón** (las hojas se deslizan y la imagen se enciende con un glow rojo). En móvil se abre sola al hacer scroll y se cierra/abre al tocar.
- **Copy de marca**: la historia de la familia y el chef, con la línea "Pasa el ratón, si te atreves".
- **Banda de datos**: 50 días de maduración, 500 burgers el día de la apertura y 40 mesas (28+12), en números rojos gordos.
- **Accesibilidad**: se abre también con teclado (Enter/Espacio) y respeta `prefers-reduced-motion` (con animaciones reducidas, la jaula se muestra abierta).

> Juega en `imagenes/gorilla_0.jpg` (o su `.webp`) para cambiar la ilustración, y en el bloque `.jaula` de `index.html` para tocar el copy.

## Sección Ubicación

La añadimos para que nadie se pierda buscando el local. Incluye:

- **Mapa oscuro** con Leaflet y tiles de CARTO (gratis, sin API key), centrado en C/ San Marino, 4, con el marker y un popup que dice "¡Aquí vive la Bestia!".
- **Tarjeta de información** con dirección, teléfono e Instagram.
- **Botones** "Cómo llegar" (abre Google Maps) y "Reserva tu mesa".
- Los enlaces del menú ("Ubicación") y del hero ("¿Dónde estamos?") ahora apuntan a la sección.
- **Responsive**: a partir de 900px todo se apila en una columna y el mapa se reduce.

> Ojo: el teléfono que aparece es de prueba. Cuando tengamos el real, se cambia en `index.html`.

## Sección Opiniones

"¡Habla, la Bestia escucha!" — página dedicada (`opiniones.html`) para que el personal del local grite su veredicto. Sin reseñas a la vista, solo el acto de hablar. Incluye:

- **Estrellas clicables**: comida, servicio y ambiente se puntúan por separado, con preview dorado al pasar el ratón (y una pista: no te deja publicar sin puntuar todo, "valora la comida, el servicio y el ambiente para publicar").
- **Validación con carácter**: cada campo que se queda vacío lanza su propio mensaje con el tono de la Bestia, y el comentario lleva contador hasta 500 caracteres.
- **Toast de confirmación**: al publicar aparece "¡Opinión publicada, bestia! Gracias por hablar." y se esfuma solo a los 6 segundos.
- **Sin backend (de momento)**: las opiniones se guardan en `localStorage` del visitante. Cuando haya un formulario de verdad, solo hay que tocar `scripts/opiniones.js` para mandar los datos a donde sea.

> Toda la lógica vive en `scripts/opiniones.js`; el estilo, en `estilos/estilos-opiniones.css` (sin duplicar el header/footer, que los pone `estilos.css`).

## Cómo ejecutar

1. Abrir `index.html` en cualquier navegador.
2. Nada más.

Se necesita internet para las fuentes de Google, el mapa y la librería Leaflet (vía CDN).

## Guía rápida de modificación

- **Colores y tipografías**: variables en `:root` al inicio de `estilos/estilos.css` (`--rojo-bestia`, `--negro-fondo`, etc.).
- **Reseñas**: editar las tarjetas `<article class="tarjeta-resena">` en `index.html`.
- **Mapa**: coordenadas en `L.map('map').setView([lat, lng], zoom)` y en `L.marker([lat, lng])`.
