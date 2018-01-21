

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  for (var key in this.nodes) {
    delete this.nodes[key][node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = toNode;
  this.nodes[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) { 
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * forEachNode: O(n)
 * removeEdge: O(1)
 * addEdge: O(1)
 * hasEdge: O(1)
 * removeNode: O(n)
 * contains: O(1)
 * addNode: O(1)
 *
 */


