function calculateNumber(type, a, b) {

    const aRound = Math.round(a);
    const bRound = Math.round(b);

    if (type === 'SUM') {
      let sumValue = aRound + bRound
      return sumValue;
    }

    if (type === 'SUBTRACT') {
      let subValue = aRound - bRound;
      return subValue;
    }

    if (type === 'DIVIDE') {
      let divValue = aRound / bRound;

      if (bRound === 0) {
        return 'Error';
      }

      return divValue;
    }

}

module.exports = calculateNumber;
