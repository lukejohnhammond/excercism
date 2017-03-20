const Pangram = function (sentence) {
  this.sentence = sentence;
};

Pangram.prototype.isPangram = function() {
  const sentence = this.sentence
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .sort();

  const uniqueCharacters = Array.from(new Set(sentence));
  if (!sentence) return false;
  return (uniqueCharacters.length < 26) ? false : true;
};

module.exports = Pangram;

var pangram = new Pangram('a quick movement of the enemy will jeopardize five gunboats!_£$£$%£$%£^');
pangram.isPangram();
