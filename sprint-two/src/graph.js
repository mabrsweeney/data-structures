

// Instantiate a new graph
var Graph = function() {
  
  this.nodes = [];
  this.edges = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var idx = -1;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      idx = i;
    }
  }
  
  this.nodes.splice(idx, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.edges.hasOwnProperty(fromNode)) {
    for (var i = 0; i < this.edges[fromNode].length; i++) {
      if (this.edges[fromNode][i] === toNode) {
        return true;
      }
    }
  }
  
  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.edges.hasOwnProperty(fromNode)) {
    this.edges[fromNode].push(toNode);
  } else {
    this.edges[fromNode] = [toNode];
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


