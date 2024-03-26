'use strict'

console.log("######################");
console.log("TESTING");
console.log("######################");
const map_graph = [['A','B'],['A','E'], ['B','C'], ['C','D'], ['D','G'], ['G','F'],['F','E'], ['D','H'], ['H','I'], ['H','J']];

const names = [['A', 'Entrada'], ['B', 'Escalera Santander'], ['C', 'Baños Carrasquilla'], ['D', 'Entrada Teatrino'], ['E', 'Museo Rosarista'],
            ['F', 'Aula Mutis'], ['G','La Bordadita'], ['H','Cuenteros'], ['I', 'Escaleras Casur'], ['J','Comedor']];   


// connected - working
function connected(node){
    let connections = [];
    for(let i = 0; i < map_graph.length; i++){
        if(node == map_graph[i][0] || node == map_graph[i][1]){
            connections.push(map_graph[i]);
        }
    }
    return connections;
}


function pathfinder(destiny){
    const start = 'A';


}
