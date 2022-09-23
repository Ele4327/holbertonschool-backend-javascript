const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber() with type SUM', () => {
  it('Test return 0', () => {
    expect(calculateNumber('SUM', 0.3, 0.2)).to.equal(0);
  });
  it('Test return 9', () => {
    expect(calculateNumber('SUM', 5.2, 4.4)).to.equal(9);
  });
  it('Test return 2', () => {
    expect(calculateNumber('SUM', -1.2, 3.3)).to.equal(2);
  });
});

describe('#calculateNumber() with type SUBTRACT', () => {
  it('Test return 0', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 0.9)).to.equal(0);
  });
  it('Test return 8', () => {
    expect(calculateNumber('SUBTRACT', 12, 4.3)).to.equal(8);
  });
  it('Test return -2', () => {
    expect(calculateNumber('SUBTRACT', 3.1, 4.9)).to.equal(-2);
  });
});

describe('#calculateNumber() with type DIVIDE', () => {
  it('Test return 2', () => {
    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });
  it('Test return -2', () => {
    expect(calculateNumber('DIVIDE', 4, -2.1)).to.equal(-2);
  });
  it('Test return 0.4', () => {
    expect(calculateNumber('DIVIDE', 1, 5)).to.equal(0.2);
  });

});
