var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};
  stackInstance.storage = {};
  stackInstance.count = 0;
  _.extend(stackInstance, stackMethods);
  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.count] = val;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    var popVal = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return popVal;
  }
};

stackMethods.size = function() {
  return this.count;
};


