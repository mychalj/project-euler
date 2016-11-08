/*
 * Javascript Solution to Project Euler problem 5
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) { return false; }
  }
  return true;
}
