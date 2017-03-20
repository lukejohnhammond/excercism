const Pangram = function (sentence) {
  this.sentence = sentence;
};

Pangram.prototype.isPangram = function() {
  if (!this.sentence) return false;
  const sentence = this.sentence
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .sort();

  const uniqueCharacters = new Set(sentence);

  return (uniqueCharacters.size < 26) ? false : true;
};

module.exports = Pangram;
