
// Diccionario de nombres
const id_s = [
    ['m2', 'Entrada'], ['m3', 'Escalera Caldas'], ['m4', 'Baños Carrasquilla'],
    ['m5', 'Entrada Teatrino'], ['m6', 'Síndico'], ['m7', 'Aula Mutis'],
    ['m8', 'La Bordadita'], ['m9', 'Cuenteros'], ['m10', 'Escaleras Casur'],
    ['m11', 'Comedor']
];

// Define una variable para almacenar las letras
let start = 'A'

function getLetterFromName(name) {
    for (let i = 0; i < names.length; i++) {
        if (names[i][1] === name) {
            return names[i][0];
        }
    }
    return null; // Devuelve null si no se encuentra la letra correspondiente al nombre
}

// Función para obtener el nombre asociado a un botón
function getNombreDelBoton(id) {
    for (let i = 0; i < id_s.length; i++) {
        if (id_s[i][0] === id) {
            return id_s[i][1];
        }
    }
    return null; // Devuelve null si no se encuentra el nombre
}

// Función para manejar el clic en los botones
function manejarClic(id) {
    const end = getNombreDelBoton(id);

    if (end) {
        visualization(start, getLetterFromName(end));
    } else {
        console.error("No se encontró el nombre del botón para el id:", id);
    }
}
// Obtener los botones y añadir un evento de clic a cada uno
for (let i = 2; i <= 11; i++) {
    const buttonId = 'm' + i;
    document.getElementById(buttonId).addEventListener("click", function() {
        manejarClic(buttonId);
    });
}

getNombreDelBoton('m2');
