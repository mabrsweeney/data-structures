

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};


// Input:   The current bucket, the key we are looking for and whether
//          or not we want the pevious or next node.
// Output:  Will return the node with the corresponding key
// Purpose: Return the Node with the tuple in order to remove it or
//          manipulate it.
HashTable.prototype.getTupleNode = function(bucket, k, isPrev) {
  var curNode = bucket.head;
  
  if (curNode.value[0] === k) {
    return curNode;
  } else if (curNode === bucket.tail) {
    return undefined;
  } else if (curNode.next.value[0] === k) {
    if (isPrev) {
      return curNode;
    } else {
      return curNode.next;
    }
  } else {
    while (curNode.next !== bucket.tail) {
      curNode = curNode.next;
      if (curNode.next.value[0] === k) {
        if (isPrev) {
          return curNode;
        } else {
          return curNode.next;
        }
      }
    }
  }
};

// Input:   Key, Value
// Output:  N/A
// Purpose: To insert a value into the Hash Table given the key.
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    var newLList = LinkedList();
    newLList.addToTail([k, v]);
    this._storage.set(index, newLList);
  } else {
    var node = this.getTupleNode(bucket, k, false);
    if (node === undefined) {
      bucket.addToTail([k, v]);
    } else {
      node.value[1] = v;
    }
    
  }
  this._size++;
  
  if (this._size > this._limit * .75) {
    this.reSize(this._limit + this._limit);
  } 
};

// Input:   Key
// Output:  Returns the value 
// Purpose: Given the key the function will return the value
//          using the hashing function to determine its location.
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  if (bucket === undefined || (bucket.head === null)) {
    return undefined;
  }
  
  var curNode = bucket.head;
  if (curNode.value[0] === k) {
    return curNode.value[1];
  }
  
  while (curNode !== bucket.tail) {
    curNode = curNode.next;
    if (curNode.value[0] === k) {
      return curNode.value[1];
    }
  }
};


// Input:   Key
// Output:  N/A
// Purpose: Removes a value from the hash table given a 
//          Corresponding key.
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  var removeNode = function(prevNode) {
    if (prevNode.next === bucket.tail) {
      prevNode.next = null;
      bucket.tail = prevNode;
    } else {
      prevNode.next = prevNode.next.next;
    }
  };
  
  if (bucket === undefined) {
    return undefined;
  }
  
  var curNode = this.getTupleNode(bucket, k, true);
  if (curNode === undefined) {
    return undefined;
  } else if (curNode === bucket.head) {
    bucket.removeHead();
  } else {
    removeNode(curNode);
  }
  
  this._size--;
  
  if (this._size < this._limit * .25) {
    this.reSize(Math.floor(this._limit / 2));
  } 
};

HashTable.prototype.reSize = function(newLimit) {
  var tempStorage = this._storage;
  var oldLimit = this._limit;
   
  this._storage = LimitedArray(newLimit);
  this._size = 0;
  this._limit = newLimit;
  for (var i = 0; i < oldLimit; i++) {
    var bucket = tempStorage.get(i);
    if (bucket !== undefined) {
      while (bucket.head !== null) {
        var tuple = bucket.removeHead();
        this.insert(tuple[0], tuple[1]);
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 * remove: O(n)
 * retrieve: O(n)
 * insert: O(n)
 * 
 *
 */


