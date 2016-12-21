/*
 * Javascript Solution to Project Euler problem 10
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

// Determines if a number is prime
function is_prime (num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) { return false }
  }
  return true
}

// Finds the sum of all the primes below 'limit'
function sum_of_primes(limit){
  var answer = 0

  for (var i = 2; i < limit; i++) {
    if (is_prime(i)) {
      answer = answer + i
    }
  }
  return answer
}

console.log(sum_of_primes(2000000))
