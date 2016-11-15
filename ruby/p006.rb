# Ruby Solution to Project Euler problem 6
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# Calculates the difference between the sum of squares of the first
# (num variable) natural numbers and the square of the sum
def sum_square_diff(num)
  sum_of_squares = 0
  square_of_sum = 0

  (1..num).each do |i|
    squared = i**2
    sum_of_squares += squared
    square_of_sum += i
  end

  square_of_sum **= 2

  difference = square_of_sum - sum_of_squares

  puts difference
end

sum_square_diff(100)
