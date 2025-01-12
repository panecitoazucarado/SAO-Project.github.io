// Función para alternar entre modo claro y oscuro
function toggleTheme() {
    // Cambiar la clase 'dark-mode' en el body
    document.body.classList.toggle('dark-mode');
    
    // Cambiar el ícono del botón dependiendo del tema
    const button = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = '☀️';  // Ícono para modo claro
    } else {
        button.textContent = '🌙';  // Ícono para modo oscuro
    }
}

// Detectar si ya existe un tema guardado en el localStorage y aplicarlo
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').textContent = '☀️';
}

// Guardar el tema en localStorage para mantenerlo entre sesiones
window.addEventListener('beforeunload', () => {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});