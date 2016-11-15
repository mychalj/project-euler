/*
 * Javascript Solution to Project Euler problem 6
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

// Determines if a number is prime
function isPrime (num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) { return false }
  }
  return true
}
