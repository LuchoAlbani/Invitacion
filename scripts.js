document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("music");

    // Esperar interacción del usuario antes de reproducir
    document.body.addEventListener("click", function () {
        if (music.paused) {
            music.play();
        }
    }, { once: true }); // Solo se ejecuta una vez
});

document.addEventListener("DOMContentLoaded", function () {
    var card = document.querySelector(".birthdayCard");

    card.addEventListener("click", function () {
        this.classList.toggle("open"); // Agrega o quita la clase al hacer click
    });
});
