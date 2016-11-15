/*
 * Javascript Solution to Project Euler problem 6
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

// Calculates the difference between the sum of squares of the first
// (num variable) natural numbers and the square of the sum
function sum_square_diff(num) {
  var sum_of_squares = 0
  var square_of_sum = 0

  for (var i = 1; i <= num; i++) {
    var squared = Math.pow(i, 2)
    sum_of_squares += squared
    square_of_sum += i
  }

  square_of_sum = Math.pow(square_of_sum, 2)

  var difference = square_of_sum - sum_of_squares

  return difference
}

console.log(sum_square_diff(100))
