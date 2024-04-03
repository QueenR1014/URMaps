console.log("######################");
console.log("TESTING");
console.log("######################");
const mapGraph = [['A', 'B', 5], ['A', 'E', 7], ['B', 'C', 3], ['C', 'D', 2], ['D', 'G', 4], ['G', 'F', 1], ['F', 'E', 2], ['D', 'H', 6], ['H', 'I', 3], ['H', 'J', 5]];

const coordinates = {
    'A': { x: 127, y: 444 },
    'B': { x: 209, y: 444 },
    'C': { x: 211, y: 350 },
    'D': { x: 211, y: 296 },
    'E': { x: 50,  y: 444 },
    'F': { x: 50,  y: 333 },
    'G': { x: 50, y: 296 },
    'H': { x: 211, y: 260 },
    'I': { x: 249, y: 260 },
    'J': { x: 100, y: 260 }
};

const names = [ ['A', 'Entrada'], ['B', 'Escalera Caldas'], 
                ['C', 'Baños Carrasquilla'], ['D', 'Entrada Teatrino'], 
                ['E', 'Museo Rosarista'], ['F', 'Aula Mutis'], 
                ['G','La Bordadita'], ['H','Cuenteros'], 
                ['I', 'Escaleras Casur'], ['J','Comedor']];   

const pathElement = document.getElementById('path');

const form = document.getElementById('pathForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const startNode = document.getElementById('startNode').value;
    const endNode = document.getElementById('endNode').value;

    // Llama a tu función dijkstra con los nodos de inicio y destino
    const { path, distance } = dijkstra(mapGraph, startNode, endNode);

    // Borra cualquier punto existente en el camino
    pathElement.innerHTML = '';

    // Dibuja el nuevo camino si existe
    if (path) {
        path.forEach(node => {
            const pointElement = document.createElement('div');
            pointElement.className = 'point';
            pointElement.style.left = `${coordinates[node].x}px`;
            pointElement.style.top = `${coordinates[node].y}px`;
            pathElement.appendChild(pointElement);
        });

        console.log('Shortest Path:', path);
        console.log('Shortest Distance:', distance);
    } else {
        console.log('No hay camino disponible entre los nodos seleccionados.');
    }
});

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.sort();
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.shift().element;
        }
        return null;
    }

    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function dijkstra(graph, start, end) {
    const distances = {};
    const visited = {};
    const predecessors = {}; // No need for initialization here
    const priorityQueue = new PriorityQueue();

    for (const edge of graph) {
        const [node1, node2, weight] = edge;
        if (!distances[node1]) distances[node1] = Infinity;
        if (!distances[node2]) distances[node2] = Infinity;
    }

    distances[start] = 0;
    priorityQueue.enqueue(start, 0);

    while (!priorityQueue.isEmpty()) {
        const currentNode = priorityQueue.dequeue();
        if (visited[currentNode]) continue;
        visited[currentNode] = true;

        if (currentNode === end) {
            const path = [];
            let backtrackNode = end; // Start from the destination
            while (backtrackNode !== start) { // Stop when reaching the start
                path.unshift(backtrackNode); // Add node to the beginning of the path
                backtrackNode = predecessors[backtrackNode];
            }
            path.unshift(start); // Add the start node to complete the path

            return { path, distance: distances[end] };
        }

        for (const [node1, node2, weight] of graph) {
            if (node1 === currentNode || node2 === currentNode) {
                const neighborNode = node1 === currentNode ? node2 : node1;
                const totalDistance = distances[currentNode] + weight;

                if (totalDistance < distances[neighborNode]) {
                    distances[neighborNode] = totalDistance;
                    predecessors[neighborNode] = currentNode;
                    priorityQueue.enqueue(neighborNode, totalDistance);
                }
            }
        }
    }

    // Dibuja el nuevo camino si existe
// Dibuja el nuevo camino si existe
if (path) {
    // Crea un elemento SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');

    // Itera sobre los nodos en el camino
    for (let i = 0; i < path.length - 1; i++) {
        const currentNode = path[i];
        const nextNode = path[i + 1];

        // Obtiene las coordenadas del nodo actual y el siguiente nodo
        const startX = coordinates[currentNode].x;
        const startY = coordinates[currentNode].y;
        const endX = coordinates[nextNode].x;
        const endY = coordinates[nextNode].y;

        // Crea un elemento de línea SVG para conectar los nodos
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', (startX / img.width) * 100 + '%');
        line.setAttribute('y1', (startY / img.height) * 100 + '%');
        line.setAttribute('x2', (endX / img.width) * 100 + '%');
        line.setAttribute('y2', (endY / img.height) * 100 + '%');
        line.setAttribute('stroke', 'red'); // Color de la línea
        line.setAttribute('stroke-width', '2'); // Grosor de la línea

        // Agrega la línea al SVG
        svg.appendChild(line);
    }

    // Agrega el SVG al contenedor de camino
    pathElement.appendChild(svg);

    console.log('Shortest Path:', path);
    console.log('Shortest Distance:', distance);
} else {
    console.log('No hay camino disponible entre los nodos seleccionados.');
}



    return null; // Path not found
}
