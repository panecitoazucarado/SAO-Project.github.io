document.querySelectorAll('.season-button').forEach(button => {
    button.addEventListener('mouseover', function() {
        const description = this.querySelector('p');
        description.style.display = 'block';  // Muestra la descripción al pasar el mouse
    });

    button.addEventListener('mouseleave', function() {
        const description = this.querySelector('p');
        description.style.display = 'none';  // Oculta la descripción cuando el mouse sale
    });
});