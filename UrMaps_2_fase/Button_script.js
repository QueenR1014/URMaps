// Diccionario de los id´s de cada lugar 
const id_s = [
    ['m2', 'Entrada'], ['m3', 'Escalera Caldas'], ['m4', 'Baños Claustro'],
    ['m5', 'Entrada Teatrino'], ['m6', 'Síndico'], ['m7', 'Aula Mutis'],
    ['m8', 'La Bordadita'], ['m9', 'Cuenteros'], ['m10', 'Escaleras Casur'],
    ['m11', 'Comedor']
];

let imagesById = [
    ["m2", "Imagenes/Entrada/Entrada_1.jpg", "Imagenes/Entrada/Entrada_2.jpg","Imagenes/Entrada/Entrada_3.jpeg"],
    ["m3", "Imagenes/Escalera_Caldas/Caldas_1.jpeg", "Imagenes/Escalera_Caldas/Caldas_2.jpeg", "Imagenes/Escalera_Caldas/Caldas_3.jpeg"],
    ["m4", "Imagenes/Baños_Claustro/Claustro_1.jpeg", "Imagenes/Baños_Claustro/Claustro_2.jpg", "Imagenes/Baños_Claustro/Claustro_3.jpeg"],
    ["m5", "Imagenes/Entrada_Teatrino/Teatrino_1.jpg", "Imagenes/Entrada_Teatrino/Teatrino_2.jpg", "Imagenes/Entrada_Teatrino/Teatrino_3.jpg"],
    ["m6", "Imagenes/Sindico/Sindico_1.jpeg", "Imagenes/Sindico/Sindico_2.jpeg", "Imagenes/Sindico/Sindico_3.jpeg"],
    ["m7", "Imagenes/Aula_Mutis/Aula_M_1.jpg", "Imagenes/Aula_Mutis/Aula_M_2.jpeg", "Imagenes/Aula_Mutis/Aula_M_3.jpeg"],
    ["m8", "Imagenes/La_Bordadita/Bordadita_1.jpg", "Imagenes/La_Bordadita/Bordadita_2.jpg", "Imagenes/La_Bordadita/Bordadita_3.jpeg"],
    ["m9", "Imagenes/Cuenteros/Cuenteros_1.png", "Imagenes/Cuenteros/Cuenteros_2.jpeg", "Imagenes/Cuenteros/Cuenteros_3.jpeg"],
    ["m10", "Imagenes/Escaleras_Casur/Casur_1.png", "Imagenes/Escaleras_Casur/Casur_2.jpg", "Imagenes/Escaleras_Casur/Casur_3.jpeg"],
    ["m11", "Imagenes/Comedor/Comedor_1.jpg", "Imagenes/Comedor/Comedor_2.jpeg", "Imagenes/Comedor/Comedor_3.jpg"],
];

let desc_edificios = [
    ["m2", "<p> <b> Créditos: </b> <br> <br> Camila Camacho <br> Kevin Canchilla <br> Daniel Morales <br> Laura Ortiz <br> Juan J. Reina <br> Juan E. Torres <br> Simón Vélez </p>"],
    ["m3", "Adornada con pinturas de la época, las escaleras de Caldas reflejan el legado histórico de un edificio que hace parte de la historia del país."],
    ["m4", "Siendo unos de los primeros baños para todas las personas en las universidades del país, muestra cómo mezclar arquitectura colonial y contemporánea."],
    ["m5", "Parte de la expansión republicana de la Universidad (1898) como comedor y remodelado en 2021, conecta el Claustro Colonial con el Claustro Republicano."],
    ["m6", "En esta esquina están las oficinas de la Sindicatura y Secretaría de la Universidad, junto con el Foyer del Aula Mutis, auditorio insignia."],
    ["m7", "Este auditorio recientemente remodelado es, junto con el Aula Máxima, el auditorio insignia de la Universidad. Es sede de los principales eventos institucionales."],
    ["m8", "Es la iglesia de la sede Claustro y monumento nacional. Además, en ella se encuentran los sepulcros de figuras ilustres para la Universidad y el país."],
    ["m9", "Con su espacio verde y cálido, conecta cuatro edificios importantes: Claustro republicano, Casa Rosarista, CASUR y Edificio Nuevo."],
    ["m10", "Conecta a CASUR, el edificio con mayor capacidad de la sede, con el resto del complejo del Claustro."],
    ["m11", "Juntando zonas de bienestar, estudio y esparcimiento, contrasta su estilo como parte del Claustro Republicano con la corriente moderna de la universidad."]
];

let desc_edificios_fr= [
    ["m3", "Orné de peintures de l'époque, les escaliers de Caldas reflètent l'héritage historique d'un bâtiment qui fait partie de l'histoire du pays."],
    ["m4", "Étant l'un des premiers bains pour toutes les personnes dans les universités du pays, il montre comment mélanger l'architecture coloniale et contemporaine."],
    ["m5", "Faisant partie de l'expansion républicaine de l'université (1898) en tant que salle à manger et rénové en 2021, il relie le Cloître Colonial au Cloître Républicain."],
    ["m6", "Dans ce coin se trouvent les bureaux de la Sindicatura et du Secrétariat de l'Université, ainsi que le Foyer de la Aula Mutis, un auditorium phare."],
    ["m7", "Cet auditorium récemment rénové, ainsi que la Aula Maxima, est l'auditorium phare de l'Université. Il accueille les principaux événements institutionnels."],
    ["m8","C'est l'église du siège du Cloître et un monument national. De plus, les tombes de figures illustres pour l'Université et le pays s'y trouvent."],
    ["m9","Avec son espace vert et chaleureux, il relie quatre bâtiments importants : le Cloître Républicain, la Casa Rosarista, CASUR et le Edificio Nuevo bâtiment."],
    ["m10", "Il relie CASUR, le bâtiment avec la plus grande capacité du siège, avec le reste du complexe du Cloître."],
    ["m11", "Réunissant des zones de bien-être, d'étude et de loisirs, il contraste son style en tant que partie du Cloître Républicain avec la tendance moderne de l'université."]
];

let desc_edificios_en = [
    ["m3", "Adorned with paintings from the era, the Caldas stairs reflect the historical legacy of a building that is part of the country's history."],
    ["m4", "Being one of the first non-binary bathrooms in the country's universities, it shows how to mix colonial and contemporary architecture."],
    ["m5", "Part of the university's republican expansion (1898) as a dining hall and renovated in 2021, it connects the Colonial Cloister with the Republican Cloister."],
    ["m6", "In this corner are the offices of the University's Sindicatura and Secretariat, along with the Foyer of the Aula Mutis, a flagship auditorium."],
    ["m7", "This recently renovated auditorium, along with the Aula Maxima, is the flagship auditorium of the University. It hosts the main institutional events."],
    ["m8", "It is the church of the Cloister headquarters and a national monument. In addition, the tombs of illustrious figures for the University and the country are found within it."],
    ["m9", "With its green and warm space, it connects four important buildings: Republican Cloister, Casa Rosarista, CASUR, and the Edificio Nuevo building."],
    ["m10", "It connects CASUR, the building with the largest capacity in the headquarters, with the rest of the Cloister complex."],
    ["m11", "Bringing together areas of well-being, study, and leisure, it contrasts its style as part of the Republican Cloister with the modern trend of the university."]
];

let currentLanguage = 'es'; // Variable para guardar el idioma seleccionado

// Función para obtener la descripción según el idioma y el id
function getDescById(id) {
    let descArray;
    switch (currentLanguage) {
        case 'es':
            descArray = desc_edificios;
            break;
        case 'fr':
            descArray = desc_edificios_fr;
            break;
        case 'en':
            descArray = desc_edificios_en;
            break;
        default:
            descArray = desc_edificios;
    }
    
    for (let i = 0; i < descArray.length; i++) {
        if (descArray[i][0] === id) {
            return descArray[i][1];
        }
    }
    return null;
}

// Función para mostrar la descripción en el idioma seleccionado
function mostrarDescripcion(id) {
    const descripcion = getDescById(id);
    const rectangle = document.querySelector('.descripcion-info');

    if (descripcion !== null) {
        rectangle.innerHTML = `<h1>${descripcion}</h1>`;
    }
}

// Función para cambiar el idioma
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        currentLanguage = event.target.getAttribute('data-lang');
        const languageButton = document.getElementById('languageButton');
        languageButton.textContent = currentLanguage.toUpperCase();
        
        // Actualizar la descripción si ya hay un lugar seleccionado
        const currentId = document.querySelector('.rectangle').dataset.currentId;
        if (currentId) {
            mostrarDescripcion(currentId);
        }
    });
});

// El resto del código sigue igual
let start = 'A';

function getLetterFromName(name) {
    for (let i = 0; i < names.length; i++) {
        if (names[i][1] === name) {
            return names[i][0];
        }
    }
    return null; 
}

function getNombreDelBoton(id) {
    for (let i = 0; i < id_s.length; i++) {
        if (id_s[i][0] === id) {
            return id_s[i][1];
        }
    }
    return null; 
}

function getImagesById(id) {
    for (let i = 0; i < imagesById.length; i++) {
        if (imagesById[i][0] === id) {
            return imagesById[i].slice(1);
        }
    }
    return null;
}

function mostrarCarrusel(id) {
    const carruselContainer = document.querySelector('.slide-list');
    carruselContainer.innerHTML = '';
    const images = getImagesById(id);

    if (images) {
        images.forEach(imageSrc => {
            const imageElement = document.createElement('img');
            imageElement.src = imageSrc;
            imageElement.alt = 'Slide';
            const slideItem = document.createElement('div');
            slideItem.classList.add('slide-item');
            slideItem.appendChild(imageElement);
            carruselContainer.appendChild(slideItem);
        });
    }

    // Reset the currentIndex to ensure the first image is shown
    currentIndex = 0;
    updateSlidePosition();
}

let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide-item');
    const totalSlides = slides.length;

    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    updateSlidePosition();
}

function updateSlidePosition() {
    const newTransform = `translateX(${-currentIndex * 100}%)`;
    document.querySelector('.slide-list').style.transform = newTransform;
}

function manejarClic(id) {
    const end = getNombreDelBoton(id);
    if (end) {
        mostrarCarrusel(id);
        mostrarDescripcion(id);
        visualization(start, getLetterFromName(end), id);
    } else {
        console.error(" ", id);
    }
    // Guardar el id actual para actualizar la descripción al cambiar el idioma
    document.querySelector('.rectangle').dataset.currentId = id;
}

for (let i = 2; i <= 11; i++) {
    const buttonId = 'm' + i;
    document.getElementById(buttonId).addEventListener("click", function() {
        manejarClic(buttonId);
    });
}
