# Ruby Solution to Project Euler problem 7
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# Determines if a number is prime
def prime?(num)
  Math.sqrt(num).to_i.downto(2).each { |i| return false if (num % i).zero? }
  true
end

# Finds the (num variable)st/th prime number
def find_nth_prime(num)
end
