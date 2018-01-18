

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
  if (this.edges[node] !== undefined) {
    for (var i = 0; i < this.edges[node].length; i++) {
      this.removeEdge(node, this.edges[node][i]);
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
    if (!this.edges[fromNode].includes(toNode)) {
      this.edges[fromNode].push(toNode);
    }
  } else {
    this.edges[fromNode] = [toNode];
  }
  if (this.edges.hasOwnProperty(toNode)) {
    if (!this.edges[toNode].includes(fromNode)) {
      this.edges[toNode].push(fromNode);
    }
  } else {
    this.edges[toNode] = [fromNode];
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.edges[fromNode] === undefined) {
    throw new Error('Edge does not exist');
  }
  var idxFrom = -1;
  var idxTo = -1;
  for (var i = 0; i < this.edges[fromNode].length; i++) {
    if (this.edges[fromNode][i] === toNode) {
      idxFrom = i;
    }    
  }
  for (var i = 0; i < this.edges[toNode].length; i++) {
    if (this.edges[toNode][i] === fromNode) {
      idxTo = i;
    }    
  }
  
  this.edges[fromNode].splice(idxFrom, 1);
  this.edges[toNode].splice(idxTo, 1);
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //for i in nodes:
  //  cb(nodes[i])
  for (var i = 0; i < this.nodes.length; i++) {
    var args = Array.prototype.slice.call(arguments);
    cb(this.nodes[i], args[1]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * forEachNode: O(n)
 * removeEdge: O(n)
 * addEdge: O(1)
 * hasEdge: O(n)
 * removeNode: O(n)
 * contains: O(n)
 * addNode: O(1)
 *
 */


