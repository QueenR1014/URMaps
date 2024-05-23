// TRADUCCIONES KEVIN (REINA: "LO COMENTÉ PARA PROBAR SIN USAR LA API DE FETCH")
/*
document.addEventListener('DOMContentLoaded', function () {
    // Objeto con las traducciones
    const translations = {
        "EN": {
            "pageTitle": "URMAPS",
            "linkInfo": "Information",
            "m1": "Where do you want to go?",
            "m2": "Entrance",
            "m3": "Caldas Stairs",
            "m4": "Colonial Cloister Bathrooms",
            "m5": "Teatrino Entrance",
            "m6": "Syndic",
            "m7": "Aula Mutis Auditorium",
            "m8": "La Bordadita",
            "m9": "Cuenteros Plaza",
            "m10": "CASUR Stairs",
            "m11": "Dining Hall",
            "m12": "Go",
            "ubi": "Current Location"
        },
        "ES": {
            "pageTitle": "URMAPS",
            "linkInfo": "Información",
            "m1": "¿A dónde deseas ir?",
            "m2": "Entrada",
            "m3": "Escaleras de Caldas",
            "m4": "Baños Claustro Colonial",
            "m5": "Entrada Teatrino",
            "m6": "Síndico",
            "m7": "Aula Mutis",
            "m8": "La Bordadita",
            "m9": "Plaza Cuenteros",
            "m10": "Escaleras CASUR",
            "m11": "Comedor",
            "m12": "Ir",
            "ubi": "Ubicacion Actual"
        }
    };

    
    function changeLanguage(lang) {
        document.getElementById("pageTitle").textContent = translations[lang]["pageTitle"];
        document.getElementById("linkInfo").textContent = translations[lang]["linkInfo"];
        document.getElementById("ubi").textContent = translations[lang]["ubi"];
        for (let i = 1; i <= 12; i++) {
            const element = document.getElementById(`m${i}`);
            if (element) {
                element.textContent = translations[lang][`m${i}`];
            }
        }
        
    }

   
    function updateDropdownLabel(lang) {
        const buttonLabel = document.querySelector('.dropdown-toggle');
        buttonLabel.textContent = lang;
    }

    
    document.querySelector('.dropdown-menu').addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            const lang = event.target.getAttribute('data-lang'); 
            changeLanguage(lang);
            updateDropdownLabel(lang); 
        }
    });
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
*/

//Carga de archivo JSON alterno

var traducciones = null;

function loadTranslation(){
    //check if the information has already been loaded
    if(traducciones !== null){
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'data.json', true); // Replace 'data.json' with the path to your JSON file
    console.log("Flag 1");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            traducciones = JSON.parse(xhr.responseText);
            console.log("JSON data loaded:", traducciones);
            // Any further processing that requires the loaded JSON data can be done here
        }
    };
    xhr.send();
} 

// Call the function to start loading the JSON data
loadTranslation();
