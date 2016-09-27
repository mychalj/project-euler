/*
 * Javascript Solution to Project Euler problem 3
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

var num = 600851475143;
var x = 2;

var highestPrime = function(val) {
  while (x < val) {
    if (val % x === 0) {
      val /= x;
    } else {
      x++;
    }
  }
  console.log(x);
};

highestPrime(num);
