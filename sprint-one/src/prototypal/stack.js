var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  
  newStack.count = 0;
  newStack.storage = {};
  
  return newStack;
};

var stackMethods = {
  size: function() {
    return this.count;
  },
  
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  
  pop: function() {
    if (this.count > 0) {
      var output = this.storage[this.count];
      delete this.storage[this.count];
      this.count--;
      return output;
    }
  }
};


