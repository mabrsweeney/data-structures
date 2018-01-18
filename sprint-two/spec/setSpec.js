describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  
  it('should add any type of value to a set', function() {
    set.add(545);
    set.add({object: 'mechanism'});
    set.add([2, 6, 4]);
    expect(set.contains(545)).to.equal(true);
    expect(set.contains({object: 'mechanism'})).to.equal(true);
    expect(set.contains([2, 6, 4])).to.equal(true);
  });

});
