var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.count = 0;
  newQueue.storage = {};
  
  _.extend(newQueue, queueMethods);
  
  return newQueue;
};

var queueMethods = {
  size: function() {
    return this.count;
  },
  
  enqueue: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  
  dequeue: function() {
    if (this.count > 0) {
      var output = this.storage[1];
      for (var key in this.storage) {
        this.storage[key - 1] = this.storage[key];
      }
      this.count--;
      delete this.storage[0];
      return output;
    }
  }
};


