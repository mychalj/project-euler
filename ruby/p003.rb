# Ruby Solution to Project Euler problem 3
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# This is the number that the function will find the largest prime
# factor(lpm) of.
num = 600_851_475_143
# This variable is used to iterate through the loop to find the lpm.
largest_prime = 2

# This while loop keeps going until the desired lpm is stored in largest_prime.
while largest_prime < num
  if (num % largest_prime).zero?
    num /= largest_prime
  else
    largest_prime += 1
  end
end

# This outputs the lpm stored in largest_prime.
puts largest_prime
