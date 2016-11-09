# Ruby Solution to Project Euler problem 5
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# Determines if a number is prime
def prime?(num)
  Math.sqrt(num).to_i.downto(2).each { return false if (num % i).zero? }
  true
end
