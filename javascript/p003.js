/*
 * Javascript Solution to Project Euler problem 3
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

var num = 2;
var factors = [];
var primeFactors = [];

while (num < 13195) {
  if (Number.isInteger(13195 / num)) {
    factors.push(num);
  }
  num ++;
}

console.log(factors);
