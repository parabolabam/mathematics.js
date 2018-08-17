// vertex - вершина
// edge - ребро
function Graph(){
	this.adjList = {}
}

Graph.prototype.addVertex = function(vertex) {
	this.adjList[vertex] = { neibs: [] };
}


Graph.prototype.addEdge = function(vertex1, vertex2) {
	this.adjList[vertex1].neibs.push(vertex2);
}

module.exports = Graph;