function Graph(){
	this.adjList = {}
}




Graph.prototype.addVertex = function(vertex) {
	this.adjList[vertex] = { neibs: {} };
}


Graph.prototype.addEdge = function(vertex1, vertex2, weight) {
	this.adjList[vertex1].neibs[vertex2] = weight;
}

Graph.prototype.getEdge = function(vertex){
	return this.adjList[vertex]
}

Graph.prototype.getNeibours = function(vertex) {
	return this.adjList[vertex].neibs

}

Graph.prototype.bfs = function(sourse){
	for(var prop in this.getNeibours(sourse)){
	 	console.log(prop, this.getEdge(sourse).neibs[prop])
	}
	return 1;
}
module.exports = Graph;