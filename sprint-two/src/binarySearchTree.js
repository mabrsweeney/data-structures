var BinarySearchTree = function(value) {
  var newBinarySearchTree = Object.create(BinarySearchTree.methods);
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  newBinarySearchTree.value = value;
  return newBinarySearchTree;
};

BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function(value) {
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
