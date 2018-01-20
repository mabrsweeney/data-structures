var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent;

  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value, this);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.isAtNode(this, target)) {
    return true;
  }
  
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function(target) {
  var nodes = [this];
  while (nodes.length > 0) {
    var curNode = nodes.pop();
    if (this.isAtNode(curNode, target)) {
      var parent = curNode.parent;
      curNode.parent = null;
      var indexOfChild = parent.children.indexOf(curNode);
      parent.children.splice(indexOfChild, 1);
    } else {
      for (var i = 0; i < curNode.children.length; i++) {
        nodes.push(curNode.children[i]);
      }
    }
  }
};

treeMethods.isAtNode = function(node, target) {
  if (typeof node.value === 'object' && 
    JSON.stringify(node.value) === JSON.stringify(target)) {
    return true;
  }
  if (node.value === target) {
    return true;
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 */
