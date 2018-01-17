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
      list.head = list.head.next;
      delete temp;
      return removedHead;
    }
  };

  list.contains = function(target) {
    var itrNode = list.head;
    while (itrNode !== null) {
      if (itrNode.value === target) {
        return true;
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
 */
