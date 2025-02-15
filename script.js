function checkPassword() {
    const password = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');

    if (password === "21") {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('card-container').classList.remove('hidden');
        document.body.style.backgroundColor = "purple"; // Cambia el fondo a morado
        errorMessage.textContent = ""; // Borra cualquier mensaje de error anterior
    } else {
        errorMessage.textContent = "Esa no es la contraseña, tontita.";
    }
}

function openCard() {
    const cardImage = document.getElementById('card-image');
    const message = document.getElementById('message');
    const openText = document.getElementById('open-text');
    const emojiContainer = document.getElementById('emoji-container'); // Nuevo div de emojis

    if (cardImage.src.includes("carta-cerrada.png")) {
        cardImage.src = "carta-abierta.png"; // Cambia la imagen
        cardImage.classList.add("open"); // Aumenta el tamaño
        message.style.setProperty("display", "block", "important");  // Muestra el mensaje
        emojiContainer.style.setProperty("display", "block", "important"); // Muestra los emojis
        openText.style.display = "none";  // Oculta el texto "Ábreme"
    }
}


function createFallingHearts() {
    const container = document.createElement('div');
    container.classList.add('hearts-container');
    document.body.appendChild(container);

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = "❤️";

        // Posición horizontal aleatoria
        heart.style.left = Math.random() * 100 + "vw";

        // Tamaño aleatorio
        const size = Math.random() * 20 + 10; // Entre 10px y 30px
        heart.style.fontSize = size + "px";

        // Duración de la animación aleatoria
        const duration = Math.random() * 5 + 3; // Entre 3s y 8s
        heart.style.animationDuration = duration + "s";

        container.appendChild(heart);

        // Eliminar el corazón después de que caiga
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 300); // Crea un nuevo corazón cada 300ms
}

// Ejecutar la animación cuando la página cargue
window.onload = () => {
    createFallingHearts();
};

