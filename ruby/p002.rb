# Ruby Solution to Project Euler problem 2
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# Creates an array with the starting numbers.
fib_nums = [1, 2]
# Theses variables are used to iterate the loop and provide the index
# number for the values that are being used.
i_one = 0
i_two = 1
i = 0
# Creates an empty array to hold the even numbers.
even_nums = []

# This loop calculates the numbers in the Fibonacci sequence going
# up to 4 million and places them in an array.
while fib_nums[i_two] < 4_000_000
  num = fib_nums[i_one] + fib_nums[i_two]
  fib_nums << num
  i_one += 1
  i_two += 1
end

# This loop pushes the even numbers from the fib_nums array to the
# even_nums array.
while fib_nums[i] < 4_000_000
  even_nums << fib_nums[i] if (fib_nums[i] % 2).zero?
  i += 1
end

# This total variable stores the value that is calculated when the
# inject method is used on the num array.
total = even_nums.inject(0) { |a, e| a + e }

# This outputs the total variable.
print 'The sum of the even-valued numbers between 1 and 4000000 '
puts 'using the Fibonacci sequence: ' + total.to_s
