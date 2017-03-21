
const Bob = function() {};

Bob.prototype.hey = function(input) {
  const stripInputAll = input.replace(/[^0-9A-Z\xc4\xdc]/g, '');
  const stripInputCaps = input.replace(/[^A-Z\xc4\xdc]/g, '');
  const stripInputAllChars = input.replace(/[^A-Za-z\xc4\xe4\xdc\xfc]/g, '');

  if (stripInputCaps.length === stripInputAllChars.length && stripInputAllChars.length > 0) return 'Whoa, chill out!';
  if (input.slice(-1).indexOf('?') >= 0) return 'Sure.';
  if (!stripInputAll) return 'Fine. Be that way!';
  if (input) return 'Whatever.';
};

module.exports = Bob;
