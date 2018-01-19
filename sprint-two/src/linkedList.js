var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if ( list.head === null ) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    if (list.head !== null) {
      var temp = list.head;
      var removedHead = list.head.value;
      if (list.head === list.tail) {
        list.tail = null;
      }
      list.head = list.head.next;
      delete temp;
      return removedHead;
    }
    throw new Error('No head exists!');
  };

  list.contains = function(target) {
    var itrNode = list.head;
    while (itrNode !== null) {
      if (typeof target !== 'object') {
        if (itrNode.value === target) {
          return true;
        }
      } else {
        if (JSON.stringify(itrNode.value) === JSON.stringify(target)) {
          return true;
        }
      }
      itrNode = itrNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: Constant time O(1)
 * removeHead: Constant time O(1)
 * contains: Linear time O(n)
 */

