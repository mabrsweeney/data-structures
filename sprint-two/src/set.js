var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// Input:   A new item
// Output:  N/A
// Purpose: Adds a new item to the set
setPrototype.add = function(item) {
  this._storage[item] = item;
};

// Input:   An item
// Output:  A boolean value
// Purpose: Checks if the item is within the set
setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

// Input:   An item
// Output:  N/A
// Purpose: Removes an item from the set
setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * add: O(1)
 * contains: O(1)
 * remove: O(1)
 */
