// Seleccionamos el botón y el elemento de audio
const soundToggleButton = document.getElementById("sound-toggle");
const backgroundAudio = document.getElementById("background-audio");

// Establecemos el estado inicial
let isMuted = false; // Inicialmente, el audio está activado

// Función para alternar entre sonido activado y desactivado
soundToggleButton.addEventListener("click", () => {
    isMuted = !isMuted; // Cambiamos el estado

    if (isMuted) {
        backgroundAudio.muted = true; // Silenciamos el audio
        soundToggleButton.textContent = "🔇"; // Cambiamos el icono
    } else {
        backgroundAudio.muted = false; // Activamos el audio
        soundToggleButton.textContent = "🔊"; // Cambiamos el icono
    }
});