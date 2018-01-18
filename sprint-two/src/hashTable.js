

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._keyStorage = {};
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  if (this._size === this._limit) {
    return undefined;
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
    if (index === startIndex) {
      return undefined;
    }
  }
  this._storage.set(index, undefined);
  this._size--;
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


