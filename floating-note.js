function closeNote() {
    const floatingNote = document.getElementById('floating-note');
    floatingNote.classList.add('hidden'); // Aplica la clase "hidden"
    setTimeout(() => {
        floatingNote.style.display = 'none'; // Asegura que se oculte después de la animación
    }, 300); // Tiempo en milisegundos que coincide con la transición CSS
}