document.addEventListener('DOMContentLoaded', function () {
    // Objeto con las traducciones
    const translations = {
        "EN": {
            "pageTitle": "URMAPS",
            "linkInfo": "Information",
            "m1": "Where do you want to go?",
            "m2": "Entrance",
            "m3": "Caldas Stairs",
            "m4": "Carrasquilla Bathrooms",
            "m5": "Teatrino Entrance",
            "m6": "Syndic",
            "m7": "Mutis Classroom",
            "m8": "The Embroidery",
            "m9": "Storytellers",
            "m10": "Casur Stairs",
            "m11": "Dining Hall",
            "m12": "Go",
            "ubi":"Current Location"
        },
        "ES": {
            "pageTitle": "URMAPS",
            "linkInfo": "Información",
            "m1": "¿A dónde deseas ir?",
            "m2": "Entrada",
            "m3": "Escalera Caldas",
            "m4": "Baños Carrasquilla",
            "m5": "Entrada Teatrino",
            "m6": "Síndico",
            "m7": "Aula Mutis",
            "m8": "La Bordadita",
            "m9": "Cuenteros",
            "m10": "Escaleras Casur",
            "m11": "Comedor",
            "m12": "Ir",
            "ubi":"Ubicacion Actual"
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
