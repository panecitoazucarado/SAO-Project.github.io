// hide-button-once-clicked.js

(function() {
    // Verifica si el botón ya fue clickeado previamente
    if (localStorage.getItem('buttonClicked') === 'true') {
        // Si el botón ya fue clickeado, lo oculta
        var button = document.getElementById('play-sound');
        if (button) {
            button.style.display = 'none';
        }
    }

    // Función que se ejecuta al hacer clic en el botón
    window.playSound = function() {
        var audioElement = document.getElementById('background-audio');
        if (audioElement) {
            audioElement.play();  // Reproduce el audio
        }

        // Agrega el efecto de cristales rotos (simulado por animación)
        var button = document.getElementById('play-sound');
        if (button) {
            button.classList.add('crash');
            setTimeout(() => {
                button.classList.remove('crash');
            }, 1000); // El efecto dura 1 segundo

            // Aplicar el efecto de desvanecimiento
            button.classList.add('fade-out');
            
            // Espera a que el desvanecimiento termine antes de ocultar el botón
            setTimeout(() => {
                button.style.display = 'none'; // Esconde el botón después del fade-out
            }, 1000); // Tiempo de desvanecimiento (1 segundo)

            // Guarda en localStorage que el botón ha sido clickeado
            localStorage.setItem('buttonClicked', 'true');
        }
    };

    // Restablecer localStorage y mostrar el botón si la página se recarga
    window.addEventListener('beforeunload', function() {
        localStorage.removeItem('buttonClicked');
    });
})();