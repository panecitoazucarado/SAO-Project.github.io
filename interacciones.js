// Seleccionamos el botón flotante
const floatingBtn = document.getElementById('floating-btn');

// Añadimos el evento de clic al botón
floatingBtn.addEventListener('click', function() {
    // Toggle entre mostrar y ocultar la descripción
    floatingBtn.classList.toggle('expanded');
});