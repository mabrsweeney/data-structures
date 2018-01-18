var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var found = false;
  var checkNode = function(node) {
    if (!found) {
      if (typeof(node.value) === 'object') {
        if (JSON.stringify(node.value) === JSON.stringify(target)) {
          found = true;
          return;
        }         
      } else {
        if (node.value === target) {
          found = true;
          return;
        }        
      }
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i]);
      }
    }
  };
  checkNode(this);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 */
