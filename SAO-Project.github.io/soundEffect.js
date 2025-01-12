// Función para reproducir el sonido y activar el efecto de desvanecimiento del botón
function playSound() {
    // Reproducir el audio
    var audioElement = document.getElementById('background-audio');
    audioElement.play();

    // Activar el efecto de explosión (desvanecimiento y partículas)
    var button = document.getElementById('play-sound');
    button.classList.add('crash'); // Agregar la clase 'crash' para activar el efecto

    // Eliminar la clase después de que termine el efecto
    setTimeout(() => {
        button.classList.remove('crash');
    }, 1000); // El efecto dura 1 segundo

    // Desvanecer el botón (es decir, desaparecerlo después de la explosión)
    setTimeout(() => {
        button.style.opacity = 0;
    }, 1000); // El botón comienza a desvanecerse después de la animación de explosión
}

// Esta función se llamará cuando se haga clic en el botón para reproducir el sonido
document.getElementById('play-sound').addEventListener('click', playSound);