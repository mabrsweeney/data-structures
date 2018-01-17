var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.count;
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
}

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    var output = this.storage[1];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    delete this.storage[0];
    this.count--;
    return output;
  }
};


