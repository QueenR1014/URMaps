$('#pathList').on('mousedown', function(event) {
    var startX = event.pageX;
    var scrollLeft = this.scrollLeft;
    
    $(this).on('mousemove', function(event) {
        var moveX = event.pageX - startX;
        this.scrollLeft = scrollLeft - moveX;
    });
    
    $(this).on('mouseup', function() {
        $(this).off('mousemove');
    });
});


//cambio color
document.getElementById('switch-color').addEventListener('change', function() {
    document.querySelector('.gradiante').classList.toggle('alt-colors');
});

document.getElementById('switch-color').addEventListener('change', function() {
    document.querySelector('.btn-secondary').classList.toggle('alt-colors');
});

document.getElementById('switch-color').addEventListener('change', function() {
    document.querySelectorAll('.hexagon-item').forEach(item => {
        item.classList.toggle('alt-colors');
    });
});

document.getElementById('switch-color').addEventListener('change', function() {
    document.querySelectorAll('.hex-item').forEach(item => {
        item.classList.toggle('alt-colors');
    });
});

document.getElementById('switch-color').addEventListener('change', function() {
    document.querySelectorAll('.Button_config').forEach(item => {
        item.classList.toggle('alt-colors');
    });
});

document.getElementById('switch-color').addEventListener('change', function() {
    var urmapsLogo = document.getElementById('urmapsLogo');
    // Cambiar el src de las imágenes
    if (urmapsLogo.src.includes('URMAPSHORI.png')) {
        urmapsLogo.src = 'logos/URMAPSHORI_ALTERNATIVO.png';
    } else {
        urmapsLogo.src = 'logos/URMAPSHORI.png';
    }
});


document.addEventListener('DOMContentLoaded', function () {
    let traducciones = [];

    // Cargar el archivo JSON
    fetch('traducciones.json')
        .then(response => response.json())
        .then(data => {
            traducciones = data;
            cambiarIdioma('es'); // Idioma por defecto
        });

    function cambiarIdioma(idioma) {
        const idiomaMap = {
            'es': 'Español',
            'en': 'Inglés',
            'fr': 'Francés'
        };

        // Actualizar el texto de los elementos traducidos
        traducciones.forEach(item => {
            const element = document.getElementById(item.Clave);
            if (element) {
                element.textContent = item[idiomaMap[idioma]];
            }
        });

        // Actualizar el texto del botón
        const languageButton = document.getElementById('languageButton');
        languageButton.textContent = idioma.toUpperCase();
    }

    // Manejar el clic en los elementos del menú desplegable
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            const lang = event.target.getAttribute('data-lang');
            cambiarIdioma(lang);
        });
    });
});

