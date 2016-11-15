/*
 * Javascript Solution to Project Euler problem 7
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

// Determines if a number is prime
function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) { return false }
  }
  return true
}

// Finds the (max variable)st/th prime number
function find_nth_prime(max) {
  var count = 0
  var num = 1

  while (count < max) {
    num += 1
    if (isPrime(num)) { count += 1 }
  }
  return num
}

console.log(find_nth_prime(10001))
