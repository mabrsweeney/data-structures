var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      var output = storage[1];
      for (var key in storage) {
        storage[key - 1] = storage[key];
      }
      delete storage[0];
      count--;
      return output;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

