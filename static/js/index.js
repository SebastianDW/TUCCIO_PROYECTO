/* --- letras de INICIO.html--------- */
const palabras = ['MÁS DE UNA DÉCADA AL SERVICIO NOTARIAL', 'SERVICIOS Y TRÁMITES EN LINEA', 'VISÍTANOS O ENVÍANOS UNA CONSULTA'];
let indice = 0;
const palabraElemento = document.querySelector('.palabra');

function cambiarPalabra() {
    const palabraActual = palabras[indice];
    let caracteres = palabraActual.split('');
    let intervalo;

    // Aparecer letra por letra
    intervalo = setInterval(function () {
        if (caracteres.length > 0) {
            palabraElemento.textContent += caracteres.shift();
        } else {
            clearInterval(intervalo);

            // Desaparecer letra por letra después de 1 segundo
            setTimeout(function () {
                intervalo = setInterval(function () {
                    if (palabraElemento.textContent.length > 0) {
                        palabraElemento.textContent = palabraElemento.textContent.slice(0, -1);
                    } else {
                        clearInterval(intervalo);
                        indice = (indice + 1) % palabras.length;
                        cambiarPalabra();
                    }
                }, 25);
            }, 5000);

            // Añadir efecto de parpadeo
            const parpadeo = document.createElement('span');
            parpadeo.textContent = '|';
            parpadeo.style.animation = 'parpadeo 0.5s infinite alternate';
            palabraElemento.appendChild(parpadeo);
        }
    }, 60);
}

// Llamar a la función para iniciar el cambio automático
cambiarPalabra();

// Escuchar el clic en la palabra y cambiarla manualmente
palabraElemento.addEventListener('click', cambiarPalabra);

/* */