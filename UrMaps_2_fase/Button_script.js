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

// Asignar la letra correspondiente de 'Entrada' a una varibale que nos indica el inicio del recorrido 
let start = 'A'

// Función que nos va ayudar a extraer el valor de la letra (A - J) de los destinos
function getLetterFromName(name) {
    for (let i = 0; i < names.length; i++) {
        if (names[i][1] === name) {
            return names[i][0];
        }
    }
    return null; 
}

// Función que nos va ayudar a extraer el nombre asociado a los id´s registrados (m2 - m11) de los destinos
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

function getDescById(id) {
    for (let i = 0; i < desc_edificios.length; i++) {
        if (desc_edificios[i][0] === id) {
            return desc_edificios[i][1];
        }
    }
    return null; 
}

function mostrarDescripcion(id) {
    const descripcion = getDescById(id);
    const rectangle = document.querySelector('.descripcion-info');

    if (descripcion !== null) {
        rectangle.innerHTML = `<h1>${descripcion}</h1>`;
    }
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

// Función que nos permitira que se guarde el camino más optimo desde el punto 'A' al destino seleccionado
function manejarClic(id) {
    const end = getNombreDelBoton(id);
    if (end) {
        mostrarCarrusel(id);
        mostrarDescripcion(id);
        visualization(start, getLetterFromName(end));
    } else {
        console.error(" ", id);
    }
}

// Bucle que nos va ayduar que se pueda ejecutar el evento correspondiente al guiado del mapa
for (let i = 2; i <= 11; i++) {
    const buttonId = 'm' + i;
    document.getElementById(buttonId).addEventListener("click", function() {
        manejarClic(buttonId);
    });
}


