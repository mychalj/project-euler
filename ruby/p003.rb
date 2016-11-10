# Ruby Solution to Project Euler problem 3
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# This is the number that the function will find the largest prime
# factor(lpm) of.
num = 600_851_475_143
# This variable is used to iterate through the loop to find the lpm.
x = 2

# This while loop keeps going until the desired lpm is stored in x.
while x < num
  if (num % x).zero?
    num /= x
  else
    x += 1
  end
end

# This outputs the lpm stored in x.
puts 'The largest prime factor of the number 600851475143: ' + x.to_s
