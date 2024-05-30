// traduccion_alterna.js

const translations = {
    "Español": {
        "Entrada": "Inicio",
        "EscaleraCaldas": "Escalera Caldas",
        "BañosClaustroColonial": "Baños Claustro Colonial",
        "EntradaTeatrino": "Entrada Teatrino",
        "Síndico": "Síndico",
        "AulaMutis": "Aula Mutis",
        "LaBordadita": "La Bordadita",
        "PlazaCuenteros": "Plaza Cuenteros",
        "EscalerasCASUR": "Escaleras CASUR",
        "Comedor": "Comedor"
    },
    "Inglés": {
        "Entrada": "Home",
        "EscaleraCaldas": "Caldas Stairs",
        "BañosClaustroColonial": "Colonial Cloister Bathrooms",
        "EntradaTeatrino": "Teatrino Entrance",
        "Síndico": "Syndic",
        "AulaMutis": "Aula Mutis Auditorium",
        "LaBordadita": "La Bordadita",
        "PlazaCuenteros": "Cuenteros Plaza",
        "EscalerasCASUR": "CASUR Stairs",
        "Comedor": "Dining Hall"
    },
    "Francés": {
        "Entrada": "Début",
        "EscaleraCaldas": "Escaliers Caldas",
        "BañosClaustroColonial": "Salles de bain du Cloître Colonial",
        "EntradaTeatrino": "Entrée du Teatrino",
        "Síndico": "Syndic",
        "AulaMutis": "Auditorium Aula Mutis",
        "LaBordadita": "La Bordadita",
        "PlazaCuenteros": " Place des Conteurs",
        "EscalerasCASUR": "Escaliers CASUR",
        "Comedor": "Salle à manger"
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.getElementById('languageButton');
    const languageOptions = document.querySelectorAll('.dropdown-item');

    languageOptions.forEach(option => {
        option.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedLanguage = this.getAttribute('data-lang');
            console.log('Idioma seleccionado:', selectedLanguage);
            changeLanguage(selectedLanguage);
        });
    });

    function changeLanguage(language) {
        const langKey = language === 'en' ? 'Inglés' : language === 'es' ? 'Español' : 'Francés';
        const content = translations[langKey];
        console.log('Contenido cargado para', langKey, ':', content);
        //manejo de último botón
        console.log('El último botón de contenido en ser clickeado es: ',lastClickedButton);
        if(lastClickedButton == null){
            mostrarDescripcion("m2");
        }else{
        mostrarDescripcion(lastClickedButton);
        }
        if (content) {
            // Actualiza el texto del botón para reflejar el idioma seleccionado
            languageButton.textContent = language.toUpperCase();
            console.log('Texto del botón actualizado a:', languageButton.textContent);

            // Actualiza los elementos del contenido aquí
            const ids = [
                'Entrada', 'EscaleraCaldas', 'BañosClaustroColonial', 'EntradaTeatrino', 'Síndico', 'AulaMutis', 
                'LaBordadita', 'PlazaCuenteros', 'EscalerasCASUR', 'Comedor'/* 'EntradaT', 'EscaleraCaldasT', 
                'BañosClaustroColonialT', 'EntradaTeatrinoT', 'SíndicoT', 'AulaMutisT', 'LaBordaditaT', 
                'PlazaCuenterosT', 'EscalerasCASURT', 'ComedorT', 'desc_Entrada', 'desc_EscaleraCaldas', 
                'desc_BañosClaustroColonial', 'desc_EntradaTeatrino', 'desc_Síndico', 'desc_AulaMutis', 
                'desc_LaBordadita', 'desc_PlazaCuenteros', 'desc_EscalerasCASUR', 'desc_Comedor'*/
            ];

            ids.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    
                    element.textContent = content[id];
                } else {
                    console.warn(`Elemento con ID '${id}' no encontrado.`);
                }
            });
        } else {
            console.error('No se encontraron traducciones para', langKey);
        }
    }
});
