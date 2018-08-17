var math = require("./MathLib.js");
var graph = require("./UnorientedGraph.js");
var orgraph = require("./OrientedGraph.js")


const graph_ = new orgraph();
graph_.addVertex('A');
graph_.addVertex('B');
graph_.addVertex('C');
graph_.addEdge('A', 'B', 1);
graph_.addEdge('C', 'B', 2);
graph_.addEdge('A', 'C', 3);
graph_.addEdge('B', 'C', 4);
console.log(graph_.bfs('A'))
