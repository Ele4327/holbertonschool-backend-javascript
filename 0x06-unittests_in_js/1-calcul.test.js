const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber() with type SUM', () => {
  it('Test return 0', () => {
    assert.equal(calculateNumber('SUM', 0.3, 0.2), 0);
  });
  it('Test return 9', () => {
    assert.equal(calculateNumber('SUM', 5.2, 4.4), 9);
  });
  it('Test return 2', () => {
    assert.equal(calculateNumber('SUM', -1.2, 3.3), 2);
  });
});

describe('#calculateNumber() with type SUBTRACT', () => {
  it('Test return 0', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 0.9), 0);
  });
  it('Test return 8', () => {
    assert.equal(calculateNumber('SUBTRACT', 12, 4.3), 8);
  });
  it('Test return -2', () => {
    assert.equal(calculateNumber('SUBTRACT', 3.1, 4.9), -2);
  });
});

describe('#calculateNumber() with type DIVIDE', () => {
  it('Test return 2', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
  });
  it('Test return -2', () => {
    assert.equal(calculateNumber('DIVIDE', 4, -2.1), -2);
  });
  it('Test return 0.4', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 5), 0.2);
  });

});
