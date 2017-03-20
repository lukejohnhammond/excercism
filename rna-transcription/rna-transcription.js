
const DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {

  const rnaKey = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  return input.split('')
    .map(item => {
      if (!(item in rnaKey)) throw new Error('Invalid input');
      return rnaKey[item];
    })
    .join('');
};

module.exports = DnaTranscriber;
