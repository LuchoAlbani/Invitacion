document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("music");
    var muteButton = document.getElementById("muteButton");
    var card = document.querySelector(".birthdayCard");

    // Esperar interacción del usuario antes de reproducir la música
    document.body.addEventListener("click", function () {
        if (music.paused) {
            music.play();
        }
    }, { once: true });

    // Función para cambiar el texto del botón sin pausar la música
    muteButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que se dispare el evento de play del body
        muteButton.textContent = "¿Cómo vas a mutear este temazo? 🤨";
    });

    // Agregar interacción a la tarjeta para abrir/cerrar con click
    card.addEventListener("click", function () {
        this.classList.toggle("open");
    });
});
