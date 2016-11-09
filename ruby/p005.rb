# Ruby Solution to Project Euler problem 5
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# Determines if a number is prime
def prime?(num)
  (2..num).each do |i|
    return false if (num % i).zero?
    return true
  end
end
