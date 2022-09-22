const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('Round only the first argument', () => {
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(2.8, 0), 3);
  });

  it('Round only the second argument', () => {
    assert.equal(calculateNumber(0, 2.0), 2);
    assert.equal(calculateNumber(0, 4.3), 4);
    assert.equal(calculateNumber(0, 1.4), 1);
  });

  it('should return the right number', () => {
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(1.6, 1.8), 4);
  });
});
