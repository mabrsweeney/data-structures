var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.storage = {};
  queueInstance.count = 0;
  return queueInstance;
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
      delete this.storage[0];
      this.count--;
      return output;
    }
  }
};

