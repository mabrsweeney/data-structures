var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function(val){
  for (var i = this.count; i > 0; i--) {
    this.storage[i] = this.storage[i-1];
  }
  this.storage[0] = val;
  this.count++;
};
Queue.prototype.dequeue = function(){
  if (this.count > 0) {
    var deqVal = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return deqVal;
  }
};
Queue.prototype.size = function(){
  
  return this.count;
};


