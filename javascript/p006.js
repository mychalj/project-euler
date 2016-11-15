/*
 * Javascript Solution to Project Euler problem 6
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
 */

var sum_of_squares = 0
var square_of_sum = 0

for (var i = 1; i <= 100; i++) {
  var squared = Math.pow(i, 2)
  sum_of_squares += squared
}
