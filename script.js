// Obtener referencias a los elementos
const gato = document.getElementById('gato');
const comida = document.getElementById('comida');
const jugueteSala = document.getElementById('juguete-sala');
const jugueteJardin = document.getElementById('juguete-jardin');
const jugueteDormitorio = document.getElementById('juguete-dormitorio');
const cama = document.getElementById('cama');

let cansado = false; // Estado del gato (si está cansado o no)
let interacciones = 0; // Contador de interacciones (comer o jugar)

// Función para mover el gato
function moverGato(event) {
    if (cansado) return; // Si está cansado, no se puede mover

    const gatoRect = gato.getBoundingClientRect();

    switch (event.key) {
        case 'ArrowUp':
            gato.style.top = `${gato.offsetTop - 10}px`;
            break;
        case 'ArrowDown':
            gato.style.top = `${gato.offsetTop + 10}px`;
            break;
        case 'ArrowLeft':
            gato.style.left = `${gato.offsetLeft - 10}px`;
            break;
        case 'ArrowRight':
            gato.style.left = `${gato.offsetLeft + 10}px`;
            break;
        case ' ': // Detecta la barra espaciadora
            saltar();
            break;
    }

    verificarComida(); // Verifica si el gato ha comido
    verificarJuguete(); // Verifica si el gato ha encontrado un juguete
}

// Función para hacer saltar al gato
function saltar() {
    gato.classList.add('gato-saltando');
    gato.style.top = `${gato.offsetTop - 50}px`;
    setTimeout(() => {
        gato.style.top = `${gato.offsetTop + 50}px`;
        gato.classList.remove('gato-saltando');
    }, 500); // Tiempo de salto
}

// Función para verificar si el gato ha comido
function verificarComida() {
    const gatoRect = gato.getBoundingClientRect();
    const comidaRect = comida.getBoundingClientRect();

    // Verifica si el gato colisiona con la comida
    if (
        gatoRect.x < comidaRect.x + comidaRect.width &&
        gatoRect.x + gatoRect.width > comidaRect.x &&
        gatoRect.y < comidaRect.y + comidaRect.height &&
        gatoRect.y + gatoRect.height > comidaRect.y
    ) {
        comida.style.display = 'none'; // Oculta la comida después de ser "comida"
        setTimeout(() => {
            comida.style.display = 'block'; // Vuelve a mostrar la comida después de 3 segundos
        }, 3000); // Tiempo en milisegundos (3000 ms = 3 segundos)

        interacciones++; // Incrementa el contador de interacciones

        // Verifica si el gato se ha cansado después de 4 interacciones
        if (interacciones >= 4) {
            cansado = true; // Marcar al gato como cansado
            setTimeout(() => {
                dormir(); // El gato se acuesta automáticamente después de 4 interacciones
            }, 1000); // Espera 1 segundo antes de hacer que se acueste
        }
    }
}

// Función para mostrar los juguetes
function mostrarJuguetes() {
    jugueteSala.style.display = 'block'; // Muestra el juguete en la sala
    jugueteJardin.style.display = 'block'; // Muestra el juguete en el jardín
    jugueteDormitorio.style.display = 'block'; // Muestra el juguete en el dormitorio
}

// Función para verificar los juguetes
function verificarJuguete() {
    const gatoRect = gato.getBoundingClientRect();

    // Verificar juguete en la sala
    const jugueteSalaRect = jugueteSala.getBoundingClientRect();
    if (
        gatoRect.x < jugueteSalaRect.x + jugueteSalaRect.width &&
        gatoRect.x + gatoRect.width > jugueteSalaRect.x &&
        gatoRect.y < jugueteSalaRect.y + jugueteSalaRect.height &&
        gatoRect.y + gatoRect.height > jugueteSalaRect.y
    ) {
        jugueteSala.style.display = 'none'; // Oculta el juguete de la sala
        setTimeout(() => {
            jugueteSala.style.display = 'block'; // Vuelve a mostrar el juguete en la sala después de 3 segundos
        }, 3000); // Tiempo en milisegundos

        interacciones++; // Incrementa el contador de interacciones

        // Verifica si el gato se ha cansado después de 4 interacciones
        if (interacciones >= 4) {
            cansado = true; // Marcar al gato como cansado
            setTimeout(() => {
                dormir(); // El gato se acuesta automáticamente después de 4 interacciones
            }, 1000); // Espera 1 segundo antes de hacer que se acueste
        }
    }

    // Verificar juguete en el jardín
    const jugueteJardinRect = jugueteJardin.getBoundingClientRect();
    if (
        gatoRect.x < jugueteJardinRect.x + jugueteJardinRect.width &&
        gatoRect.x + gatoRect.width > jugueteJardinRect.x &&
        gatoRect.y < jugueteJardinRect.y + jugueteJardinRect.height &&
        gatoRect.y + gatoRect.height > jugueteJardinRect.y
    ) {
        jugueteJardin.style.display = 'none'; // Oculta el juguete del jardín
        setTimeout(() => {
            jugueteJardin.style.display = 'block'; // Vuelve a mostrar el juguete en el jardín después de 3 segundos
        }, 3000); // Tiempo en milisegundos

        interacciones++; // Incrementa el contador de interacciones

        // Verifica si el gato se ha cansado después de 4 interacciones
        if (interacciones >= 4) {
            cansado = true; // Marcar al gato como cansado
            setTimeout(() => {
                dormir(); // El gato se acuesta automáticamente después de 4 interacciones
            }, 1000); // Espera 1 segundo antes de hacer que se acueste
        }
    }

    // Verificar juguete en el dormitorio
    const jugueteDormitorioRect = jugueteDormitorio.getBoundingClientRect();
    if (
        gatoRect.x < jugueteDormitorioRect.x + jugueteDormitorioRect.width &&
        gatoRect.x + gatoRect.width > jugueteDormitorioRect.x &&
        gatoRect.y < jugueteDormitorioRect.y + jugueteDormitorioRect.height &&
        gatoRect.y + gatoRect.height > jugueteDormitorioRect.y
    ) {
        jugueteDormitorio.style.display = 'none'; // Oculta el juguete del dormitorio
        setTimeout(() => {
            jugueteDormitorio.style.display = 'block'; // Vuelve a mostrar el juguete en el dormitorio después de 3 segundos
        }, 3000); // Tiempo en milisegundos

        interacciones++; // Incrementa el contador de interacciones

        // Verifica si el gato se ha cansado después de 4 interacciones
        if (interacciones >= 4) {
            cansado = true; // Marcar al gato como cansado
            setTimeout(() => {
                dormir(); // El gato se acuesta automáticamente después de 4 interacciones
            }, 1000); // Espera 1 segundo antes de hacer que se acueste
        }
    }
}

// Función para que el gato se acueste en la cama
function dormir() {
    if (!cansado) return; // Si no está cansado, no hace nada
    gato.style.display = 'none'; // Oculta al gato
    cama.style.display = 'block'; // Muestra la cama

    setTimeout(() => {
        cansado = false; // Cambia el estado a no cansado
        interacciones = 0; // Resetea el contador de interacciones
        cama.style.display = 'none'; // Oculta la cama
        gato.style.display = 'block'; // Muestra de nuevo al gato
    }, 5000); // Tiempo de sueño (5 segundos)
}

// Llamar a la función para mostrar los juguetes al cargar la página
mostrarJuguetes();

// Asignar el evento de teclado para mover el gato
window.addEventListener('keydown', moverGato);

// Asignar el evento de clic para dormir al gato
gato.addEventListener('click', dormir);
