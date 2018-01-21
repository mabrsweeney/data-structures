var RedBlackTree = function(value) {
  var newRedBlackTree = Object.create(RedBlackTree.methods);

  newRedBlackTree.left = null;
  newRedBlackTree.right = null;
  newRedBlackTree.parent = null;
  newRedBlackTree.color = 0;
  newRedBlackTree.value = value;

  return newRedBlackTree;
};

RedBlackTree.methods = {};

// Input:   Value to insert
// Output:  N/A
// Purpose: Insert a value into the correct location in the RBT.
RedBlackTree.methods.insert = function(value) {
  if (typeof value !== 'number') {
    return undefined;
  }

  // cTree needs to be the root node. after rotating the tree at
  // the root node this remains the same and must be set to the new root.
  var cTree = this;
  while (cTree.parent !== null) {
    cTree = cTree.parent;
  }
  
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

  cTree = RedBlackTree(value);
  cTree.color = 1;
  cTree.parent = pTree;

  if (pTree.value > cTree.value) {
    pTree.left = cTree;
    
  } else {
    pTree.right = cTree;
  }

  cTree.rebalance();
};

// Input:   Value
// Output:  Whether or not the value is in the BST
// Purpose: Iteratively determines if the input value is in the tree.
RedBlackTree.methods.contains = function(value) {
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

// Input:   A callback function
// Output:  N/A
// Purpose: Will call a function on each node in the tree in
//          a breasth first pattern.
RedBlackTree.methods.breadthFirstLog = function(cb) {
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
RedBlackTree.methods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);

  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

RedBlackTree.methods.rebalance = function() {
  //If root node, set color to black and return
  if (this.parent === null) {
    this.color = 0;
    return undefined;
  } else if (this.parent.parent === null) {
    this.parent.color = 0;
  }
  
  if (this.color === 1 && this.parent.color === 1) {
    var uncleSide = this.getUncleSide();
    if (this.parent.parent[uncleSide] !== null && this.parent.parent[uncleSide].color === 1) {
    //If a child node, uncle node and their parent are all red, set the grandparent to red and the parent to black
      this.parent.parent.color = 1;
      this.parent.parent[uncleSide].color = 0;
      this.parent.color = 0;
      this.rebalance(this.parent.parent);
    } else { //If a child node is red, a uncle node is black or non-existant, and the parent is red, rotate in the direction of the uncle
      if (this.parent === this.parent.parent.left && this === this.parent.left) {
      // ……..i) Left Left Case (p is left child of g and x is left child of p)
        this.rotateRight(this.parent.parent);
        this.parent.color = 0;
        this.parent.right.color = 1;
      } else if (this.parent === this.parent.parent.left && this === this.parent.right) {
        // ……..ii) Left Right Case (p is left child of g and x is right child of p)
        this.rotateLeft(this.parent);
        this.rotateRight(this.parent);
        this.right.color = 1;
        this.color = 0;
      } else if (this.parent === this.parent.parent.right && this === this.parent.left) {
        // ……..iii) Right Right Case (Mirror of case a)
        this.rotateLeft(this.parent.parent);
        this.parent.color = 0;
        this.parent.left.color = 1;
      } else if (this.parent === this.parent.parent.right && this === this.parent.left) {
        // ……..iv) Right Left Case (Mirror of case c)
        this.rotateRight(this.parent);
        this.rotateLeft(this.parent);
        this.left.color = 1;
        this.color = 0;
      } 
    }
  }
};

RedBlackTree.methods.getUncleSide = function() {
  return this.parent.parent.left === this.parent ? 'right' : 'left';
};

RedBlackTree.methods.hasAdjacentRed = function() {
  var areAdjacent = [];
  this.depthFirstLog(function(node) {
    if ((node.color === 1) && (node.parent !== null) && (node.parent.color === 1)) {
      areAdjacent.push(true);
    } else {
      areAdjacent.push(false);
    }
  });
  return areAdjacent.includes(true);
};

RedBlackTree.methods.rotateLeft = function(node) {
  var child = node.right;
  var parent = node.parent;
  var temp = child.left;
  child.left = node;
  node.right = temp;
  if (temp !== null) {
    temp.parent = node; 
  }
  node.parent = child;
  
  if (parent !== null) {
    if (parent.left === node) {
      parent.left = child;
    } else {
      parent.right = child;
    }
  }
  child.parent = parent;
  // parent.right = childLeft;
  // childLeft = parent;
  // grandParent = node;
};

RedBlackTree.methods.rotateRight = function(node) {
  var child = node.left;
  var parent = node.parent;
  var temp = child.right;
  child.right = node;
  node.left = temp;
  if (temp !== null) {
    temp.parent = node; 
  }
  node.parent = child;
  
  if (parent !== null) {
    if (parent.left === node) {
      parent.left = child;
    } else {
      parent.right = child;
    }
  }
  child.parent = parent;
  // parent.left = childRight;
  // childRight = parent;
  // grandParent = node;
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