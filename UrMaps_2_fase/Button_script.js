// Diccionario de los id´s de cada lugar, se relacionan por los nodos del grafo
const id_s = {
    "m2": "A",
    "m3": "B",
    "m4": "C",
    "m5": "D",
    "m6": "E",
    "m7": "F",
    "m8": "G",
    "m9": "H",
    "m10": "I",
    "m11": "J"
}

//Juanes si ves esto, copia las fuentes que ya están en el directorio de archivos
const imageSources ={
    "m2": "A",
    "m3": ["Escalera_Caldas/"],
    "m4": "C",
    "m5": "D",
    "m6": "E",
    "m7": "F",
    "m8": "G",
    "m9": "H",
    "m10": "I",
    "m11": "J"
}
// Asignar la letra correspondiente de 'Entrada' a una varibale que nos indica el inicio del recorrido 
let start = 'A'

// Función que nos permitira que se guarde el camino más optimo desde el punto 'A' al destino seleccionado
function manejarClic(id) {
    const end = id_s[id];
    if (end) {
        visualization(start, end);
    } else {
        console.error("No fue posible cargar el camino. Nodo final no especificado o nulo.", id);
    }
}



// Bucle que nos va ayduar que se pueda ejecutar el evento correspondiente al guiado del mapa
for (let i = 2; i <= 11; i++) {
    const buttonId = 'm' + i;
    document.getElementById(buttonId).addEventListener("click", function() {
        manejarClic(buttonId);
    });
}


//función de reemplazo de fuente de imagen
function getSrcById(index) {
    // Check if the index exists in the imageSources dictionary
    if (index in imageSources) {
        return imageSources[index]; // Return the corresponding source
    } else {
        return 'default/path/to/image.jpg'; // Default source if index is not found
    }
}