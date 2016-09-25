/*
 * Javascript Solution to Project Euler problem 3
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

var x = 2;
var num = 13195;
var factors = [];

var primeFactors = function(val) {
  for (var i = 2; i < val; i ++) {
    if (val % i === 0) {
      return false;
    }
  }
  return val;
};

while (x < num) {
  if (Number.isInteger(num / x)) {
    if (primeFactors(x)) {
      factors.push(x);
    }
  }
  x++;
}

console.log(factors[factors.length - 1]);
