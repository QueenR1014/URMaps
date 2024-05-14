// Diccionario de los id´s de cada lugar 
const id_s = [
    ['m2', 'Entrada'], ['m3', 'Escalera Caldas'], ['m4', 'Baños Claustro'],
    ['m5', 'Entrada Teatrino'], ['m6', 'Síndico'], ['m7', 'Aula Mutis'],
    ['m8', 'La Bordadita'], ['m9', 'Cuenteros'], ['m10', 'Escaleras Casur'],
    ['m11', 'Comedor']
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

// Función que nos permitira que se guarde el camino más optimo desde el punto 'A' al destino seleccionado
function manejarClic(id) {
    const end = getNombreDelBoton(id);
    if (end) {
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


