

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._keyStorage = {};
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {

  
  if (this._size >= this._limit * .75) {
    this.reHash(this._limit + this._limit);
    
  } else if (this._size <= this._limit * .25) {
    this.reHash(Math.ceil(this._limit / 2));
  } 
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  while (this._keyStorage.hasOwnProperty(index) && this._keyStorage[index] !== k) {
    index = (index + 1) % this._limit;
  }

  this._keyStorage[index] = k;
  this._storage.set(index, v);
  this._size++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var startIndex = index;
  while (this._keyStorage[index] !== k) { 
    index = (index + 1) % this._limit;
    if (index === startIndex) {
      return undefined;
    }
  }

  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  while (this._keyStorage[index] !== k) { 
    index = (index + 1) % this._limit;
  }
  this._storage.set(index, undefined);
  this._size--;
};

HashTable.prototype.reHash = function(newLimit) {
  var tempStorage = this._storage;
  var tempKeyStorage = this._keyStorage;
  this._keyStorage = {};
  this._storage = LimitedArray(newLimit);
  this._size = 0;
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


