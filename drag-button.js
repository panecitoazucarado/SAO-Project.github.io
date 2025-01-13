// Archivo: drag-button.js

(function() {
    // Esta función hace que un elemento sea arrastrable y redimensionable
    window.makeElementDraggableAndResizable = function(elementId) {
        const element = document.getElementById(elementId);

        if (!element) {
            console.error(`No se encontró el elemento con ID: ${elementId}`);
            return;
        }

        // Variables para el arrastre
        let isDragging = false;
        let offsetX, offsetY;
        let initialPosition = { left: 0, top: 0 };

        // Variables para redimensionar
        let isResizing = false;
        let startWidth, startHeight, startX, startY;

        // Iniciar el arrastre
        element.addEventListener("mousedown", (e) => {
            // Si el clic es en la zona de redimensionamiento, no iniciar arrastre
            if (e.target.classList.contains("resize-handle")) return;

            isDragging = true;
            offsetX = e.clientX - element.offsetLeft;
            offsetY = e.clientY - element.offsetTop;
            initialPosition.left = element.offsetLeft;
            initialPosition.top = element.offsetTop;

            element.style.cursor = "grabbing"; // Cambio de cursor

            document.addEventListener("mousemove", onDrag);
            document.addEventListener("mouseup", stopDrag);
        });

        // Función para mover el botón (arrastre)
        function onDrag(e) {
            if (isDragging) {
                let newLeft = e.clientX - offsetX;
                let newTop = e.clientY - offsetY;

                const maxLeft = window.innerWidth - element.offsetWidth;
                const maxTop = window.innerHeight - element.offsetHeight;

                newLeft = Math.max(0, Math.min(newLeft, maxLeft));
                newTop = Math.max(0, Math.min(newTop, maxTop));

                element.style.left = `${newLeft}px`;
                element.style.top = `${newTop}px`;

                initialPosition.left = newLeft;
                initialPosition.top = newTop;
            }
        }

        // Función para detener el arrastre
        function stopDrag() {
            isDragging = false;
            element.style.cursor = "grab"; // Cursor vuelve a normal
            document.removeEventListener("mousemove", onDrag);
            document.removeEventListener("mouseup", stopDrag);
        }

        // Iniciar el redimensionamiento
        const resizeHandles = createResizeHandles();

        resizeHandles.forEach(handle => {
            handle.addEventListener("mousedown", (e) => {
                isResizing = true;
                startWidth = element.offsetWidth;
                startHeight = element.offsetHeight;
                startX = e.clientX;
                startY = e.clientY;

                // Prevenir el comportamiento de selección de texto
                e.preventDefault();
                document.addEventListener("mousemove", onResize);
                document.addEventListener("mouseup", stopResize);
            });
        });

        // Función para redimensionar el botón
        function onResize(e) {
            if (isResizing) {
                let newWidth = startWidth + (e.clientX - startX);
                let newHeight = startHeight + (e.clientY - startY);

                // Asegurarse de que no se reduzca a tamaños demasiado pequeños
                newWidth = Math.max(100, newWidth);
                newHeight = Math.max(50, newHeight);

                element.style.width = `${newWidth}px`;
                element.style.height = `${newHeight}px`;
            }
        }

        // Función para detener el redimensionamiento
        function stopResize() {
            isResizing = false;
            document.removeEventListener("mousemove", onResize);
            document.removeEventListener("mouseup", stopResize);
        }

        // Crear las manijas de redimensionamiento en las esquinas y bordes
        function createResizeHandles() {
            const positions = ["top-left", "top-right", "bottom-left", "bottom-right"];
            const handles = [];

            positions.forEach(position => {
                const handle = document.createElement("div");
                handle.classList.add("resize-handle", position);
                element.appendChild(handle);
                handles.push(handle);
            });

            return handles;
        }
    };
})();