/*
 * Javascript Solution to Project Euler problem 5
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

// Creates an array that contains the prime number to start with in
// the smallestMultiple function and the largest power of each of
// the prime numbers less than and including the start number.
function largestPower (num) {
  var powers = []
  var index = 0
  var start = 0

  for (var i = 2; i <= num; i++) {
    for (var j = 2; j <= num; j++) {
      if (isPrime(i) && Math.pow(i, j) <= num) {
        powers[index] = Math.pow(i, j)
        start = i
      }
    }
    index++
  }
  powers.unshift(start)
  return powers
}

// Determines the smallest number that is evenly divisible by all
// numbers from 1 to the given positive number.
function smallestMultiple (limit) {
  var powersArr = (largestPower(limit)).slice(1)
  var start = (largestPower(limit)).unshift()
  var answer = powersArr.reduce(function (a, b) { return a * b })

  for (var i = start + 1; i <= limit; i++) {
    if (isPrime(i)) {
      answer *= i
    }
  }
  return answer
}

// Displays the desired answer
console.log(smallestMultiple(20))
