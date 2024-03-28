document.addEventListener("DOMContentLoaded", function() {
    const puzzleContainer = document.getElementById("puzzle-container");
    const pieces = document.querySelectorAll(".puzzle-piece");
    let activePiece = null;

    pieces.forEach(piece => {
        piece.addEventListener("mousedown", function(e) {
            activePiece = this;
            this.style.zIndex = "999";
        });

        piece.addEventListener("mouseup", function(e) {
            if (activePiece) {
                const rect = puzzleContainer.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
                const dropzone = document.elementFromPoint(mouseX, mouseY);

                if (dropzone && dropzone.classList.contains("puzzle-piece")) {
                    const tempX = activePiece.style.left;
                    const tempY = activePiece.style.top;
                    activePiece.style.left = dropzone.style.left;
                    activePiece.style.top = dropzone.style.top;
                    dropzone.style.left = tempX;
                    dropzone.style.top = tempY;
                }

                activePiece.style.zIndex = "auto";
                
                activePiece = null;
            }
        });

        piece.addEventListener("mousemove", function(e) {
            if (activePiece) {
                const rect = puzzleContainer.getBoundingClientRect();
                const mouseX = e.clientX - rect.left - activePiece.offsetWidth / 2;
                const mouseY = e.clientY - rect.top - activePiece.offsetHeight / 2;
                activePiece.style.left = mouseX + "px";
                activePiece.style.top = mouseY + "px";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const confettiContainer = document.getElementById("confetti-container");

    function createConfetti() {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000); // Eliminar el confeti después de 4 segundos
    }

     // Crear confeti cada 100 milisegundos por un tiempo limitado
     const confettiInterval = setInterval(createConfetti, 100);
     
     setTimeout(() => {
         clearInterval(confettiInterval);
     }, 5000);
 });