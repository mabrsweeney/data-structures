var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if ( list.head === null ) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.prev = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };
  
  list.addToHead = function(value) {
    var newNode = Node(value);
    
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.prev = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var temp = list.head;
      var removedHead = list.head.value;
      if (list.head === list.tail) {
        list.tail = null;
        list.head = null;
      } else {
        list.head = list.head.next;
      }
      delete temp;
      return removedHead;
    }
    throw new Error('No head exists!');
  };
  
  list.removeTail = function() {
    if (list.head !== null) {
      var removed = list.tail.value;
      if (list.head === list.tail) {
        list.head = null;
        list.tail = null;
      } else {
        list.tail = list.tail.prev;
        list.tail.next.prev = null;
        list.tail.next = null;
      }
      return removed;
    }
    
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: Constant time O(1)
 * removeHead: Constant time O(1)
 * contains: Linear time O(n)
 */

