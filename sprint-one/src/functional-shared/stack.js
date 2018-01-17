var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  var newStack.storage = {};
  var newStack.size = 0;
  
  _.extend(newStack, stackMethods);
  
  return newStack;
};

var stackMethods = {
  push: function(value) {
    this.size++;
    this.storage[size] = value;
  }
  
};


