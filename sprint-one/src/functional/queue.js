var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    for (var i = size; i >= 0; i--){
      storage[i] = storage[i-1];
    }
    storage[0] = value;
  };

  someInstance.dequeue = function() {
    if(size > 0){
      var deqVal = storage[size];
      delete storage[size];
      size--;
      return deqVal;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
