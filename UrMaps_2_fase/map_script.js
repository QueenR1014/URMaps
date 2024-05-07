console.log('map script loaded')
//Algoritmo de búsqueda de camino
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



    return null; // Path not found
}

//variable de control demo
var currentMediaType = 'image';
const mapGraph = [  ['A', 'B', 5], ['A', 'E', 7], 
                    ['B', 'C', 3], ['C', 'D', 2], 
                    ['D', 'G', 4], ['G', 'F', 1], 
                    ['F', 'E', 2], ['D', 'H', 6], 
                    ['H', 'I', 3], ['H', 'J', 5]];


const coordinates = {
    "A": { "x": 21, "y": 35},
    "B": {"x": 9,"y": 32},
    "C": {"x": 9,"y": 19},
    "D": {"x": 9,"y": 9},
    "E": {"x": 31,"y": 32},
    "F": {"x": 31,"y": 21},
    "G": {"x": 31,"y": 9},
    "H": {"x": 9,"y": -13},
    "I": {"x": 6,"y": -10},
    "J": {"x": 24,"y": -22}
}


const names = [ ['A', 'Entrada'], ['B', 'Escalera Caldas'], 
                ['C', 'Baños Carrasquilla'], ['D', 'Entrada Teatrino'], 
                ['E', 'Síndico'], ['F', 'Aula Mutis'], 
                ['G','La Bordadita'], ['H','Cuenteros'], 
                ['I', 'Escaleras Casur'], ['J','Comedor']];   


// Map visualization

var map = L.map('map').setView([0, 0], 3);
var imageMap = 'Mapa/Mapapato.png';

// Load the image overlay with specific bounds
var imageUrl = imageMap;
var aspectRatio = 3000 / 3000; // Width / Height of your image
var mapHeight = 100; // Set the desired map height in map units (e.g., degrees of latitude)
var mapWidth = aspectRatio * mapHeight; // Calculate the corresponding width based on the aspect ratio

var imageBounds = [[-mapHeight / 2, -mapWidth / 2], [mapHeight / 2, mapWidth / 2]];

L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Set the maximum bounds of the map to restrict panning
map.setMaxBounds(imageBounds);

// Add a marker to the map



var form = document.getElementById('pathForm');

for(const [key, value] of Object.entries(coordinates)){
    var marker = L.marker([coordinates[key]["y"],coordinates[key]["x"]]).addTo(map);
}

console.log("added markers");

