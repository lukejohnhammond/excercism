
var Hamming = function() {};

Hamming.prototype.compute = function(str1, str2) {
  const str1Array = str1.split('');
  const str2Array = str2.split('');
  if (str1.length !== str2.length) throw 'DNA strands must be of equal length.';

  let identicalStrandCount = 0;
  
  for (var i in str1Array){
    console.log('is this running?', str1Array[i], str2Array[i]);
    if (str1Array[i] !== str2Array[i]) {
      identicalStrandCount += 1;
    }
  }
  return identicalStrandCount;
};

module.exports = Hamming;
