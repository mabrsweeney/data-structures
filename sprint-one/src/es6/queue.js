class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  size() {
    return this.count;
  }
  
  enqueue(value) {
    this.count++;
    this.storage[this.count] = value;
  }
  
  dequeue() {
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

}
