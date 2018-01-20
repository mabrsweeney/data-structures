var BinarySearchTree = function(value) {
  var newBinarySearchTree = Object.create(BinarySearchTree.methods);
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  newBinarySearchTree.value = value;
  return newBinarySearchTree;
};

BinarySearchTree.methods = {};

// Input:   Value to insert
// Output:  N/A
// Purpose: Insert a value into the correct location in the BST.
BinarySearchTree.methods.insert = function(value) {
  if (typeof value !== 'number') {
    return undefined;
  }
  var cTree = this;
  var pTree = null;
  while (cTree !== null) {
    if (cTree.value < value) {
      pTree = cTree;
      cTree = cTree.right;
    } else if (cTree.value > value) {
      pTree = cTree;
      cTree = cTree.left;
    } else {
      return;
    }
  }
  cTree = BinarySearchTree(value);
  if (pTree.value > cTree.value) {
    pTree.left = cTree;
  } else {
    pTree.right = cTree;
  }
};

// Input:   Value
// Output:  Whether or not the value is in the BST
// Purpose: Iteratively determines if the input value is in the tree.
BinarySearchTree.methods.contains = function(value) {
  var cTree = this;
  while (cTree !== null) {
    if (cTree.value === value) {
      return true;
    }
    if (cTree.value > value) {
      cTree = cTree.left;
    } else {
      cTree = cTree.right;
    }
  }
  return false;
};

BinarySearchTree.methods.breadthFirstLog = function(cb) {
  var nodes = [this];
  
  while (nodes.length > 0) {
    var node = nodes.shift();
    cb(node.value);
    if (node.left !== null) {
      nodes.push(node.left);
    }
    if (node.right !== null) {
      nodes.push(node.right);
    }
  }
};

// Input:   A callback function
// Output:  N/A
// Purpose: Will call a function on each node in the tree in
//          a depth first pattern.
BinarySearchTree.methods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);

  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 *
 * depthFirstLog: O(n)
 * contains: O(log(n))
 * insert: O(log(n))
 *
 *
 */
