//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {

  if (this.year%400 === 0) {
    return true;
  } else if(this.year%100 === 0) {
    return false;
  } else if (this.year%4 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = Year;
