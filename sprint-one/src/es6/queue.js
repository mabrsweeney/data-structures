class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  
  enqueue(val) {
    for ( var i = this.count; i > 0; i-- ) {
      this.storage[this.count] = this.storage[this.count-1];
    }
    this.storage[0] = val;
    this.count++;
  }
  
  dequeue() {
    if (this.count > 0){ 
      var deqVal = this.storage[this.count-1];
      delete this.storage[this.count-1];
      this.count--;
      return deqVal;
    }
  }
  
  size(){
    return this.count;
  }

}
