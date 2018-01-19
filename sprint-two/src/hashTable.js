

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
  
  //check for reSize;
  
/*  if (this._size >= this._limit * .75) {
    this.reHash(this._limit + this._limit);
    
  } else if (this._size <= this._limit * .25) {
    this.reHash(Math.ceil(this._limit / 2));
  } 
  // index is out of bounds because the old limit is still being used
  // after the Hashtable is resized.
  var index = getIndexBelowMaxForKey(k, this._limit);
  while (this._keyStorage.hasOwnProperty(index) && this._keyStorage[index] !== k) {
    index = (index + 1) % this._limit;
  }

  this._keyStorage[index] = k;
  this._storage.set(index, v);
  this._size++;*/
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
  
  /*var startIndex = index;
  while (this._keyStorage[index] !== k) { 
    index = (index + 1) % this._limit;
    if (index === startIndex) {
      return undefined;
    }
  }

  return this._storage.get(index);*/
};


// Input:   Key
// Output:  N/A
// Purpose: Removes a value from the hash table given a 
//          Corresponding key.
HashTable.prototype.remove = function(k) {
  
  var removeNode = function(prevNode) {
    if (prevNode.next === bucket.tail) {
      prevNode.next = null;
      bucket.tail = prevNode;
    } else {
      prevNode.next = prevNode.next.next;
    }
  };
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
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
  /*var curNode = bucket.head;
  if (curNode.value[0] === k) {
    bucket.removeHead();
  } else if (curNode.next.value[0] === k) {
    removeNode(curNode);
  } else {
    while (curNode.next !== bucket.tail) {
      curNode = curNode.next;
      if (curNode.next.value[0] === k) {
        removeNode(curNode);
      }
    }
  }*/
  /*var index = getIndexBelowMaxForKey(k, this._limit);
  while (this._keyStorage[index] !== k) { 
    index = (index + 1) % this._limit;
  }
  this._storage.set(index, undefined);
  this._size--;*/
};

HashTable.prototype.reHash = function(newLimit) {
  var tempStorage = this._storage;
  var tempKeyStorage = this._keyStorage;
  this._keyStorage = {};
  this._storage = LimitedArray(newLimit);
  this._size = 0;
  //Limit needs to be set before rehashing begins.

  for (var i = 0; i < this._limit; i++) {
    if (tempStorage.get(i) !== undefined) {
      var newKey = tempKeyStorage[i];
      this.insert(newKey, tempStorage.get(i));
    }
  }
  this._limit = newLimit;
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


