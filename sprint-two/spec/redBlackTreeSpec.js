describe('redBlackTree', function() {
  var redBlackTree;

  beforeEach(function() {
    redBlackTree = RedBlackTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(redBlackTree.insert).to.be.a('function');
    expect(redBlackTree.contains).to.be.a('function');
    expect(redBlackTree.depthFirstLog).to.be.a('function');
  });

  xit('should insert values at the correct location in the tree', function() {
    redBlackTree.insert(2);
    redBlackTree.insert(3);
    redBlackTree.insert(7);
    redBlackTree.insert(6);
    expect(redBlackTree.left.right.value).to.equal(3);
    expect(redBlackTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    redBlackTree.insert(2);
    redBlackTree.insert(3);
    redBlackTree.insert(7);
    expect(redBlackTree.contains(7)).to.equal(true);
    expect(redBlackTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    redBlackTree.insert(2);
    redBlackTree.insert(3);
    redBlackTree.insert(7);
    redBlackTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });
  
  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    redBlackTree.insert(2);
    redBlackTree.insert(3);
    redBlackTree.insert(7);
    redBlackTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 3]);
  });
  
  it('should not accept anything other than a number as input', function() {
    redBlackTree.insert('egg');
    redBlackTree.insert(true);
    expect(redBlackTree.contains('egg')).to.equal(false);
    expect(redBlackTree.contains(true)).to.equal(false);
  });
  
  it('should have no adjacent red nodes', function() {
    redBlackTree.insert(5);
    redBlackTree.insert(2);
    redBlackTree.insert(7);
    redBlackTree.insert(6);
    redBlackTree.insert(4);
    redBlackTree.insert(1);
    expect(redBlackTree.hasAdjacentRed()).to.equal(false);
  });
  
  it('should rotate the tree to rebalance upon...', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    redBlackTree.insert(2);
    redBlackTree.insert(1);
    redBlackTree.breadthFirstLog(func);
    expect(array).to.eql([2, 1, 5]); 
  });
  
});
