/*
 * Javascript Solution to Project Euler problem 3
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

var x = 2;
var num = 600851475143;
var factors = [];

while (x < num) {
  if (Number.isInteger(num / x)) {
    factors.push(x);
  }
  x++;
}

var primeFactors = factors.filter(function(val) {
  for (var i = 2; i < val; i ++) {
    if (val % i === 0) {
      return false;
    }
  }
  return val;
});

console.log(primeFactors[primeFactors.length - 1]);
