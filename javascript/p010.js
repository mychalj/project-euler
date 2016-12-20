/*
 * Javascript Solution to Project Euler problem 10
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

function is_prime (num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) { return false }
  }
  return true
}

function sum_of_primes(limit){
}

console.log(sum_of_primes())
