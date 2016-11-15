# Ruby Solution to Project Euler problem 7
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# Determines if a number is prime
def prime?(num)
  Math.sqrt(num).to_i.downto(2).each { |i| return false if (num % i).zero? }
  true
end

# Finds the (max variable)st/th prime number
def find_nth_prime(max)
  count = 0
  num = 1

  while count < max
    num += 1
    count += 1 if prime?(num)
  end
  puts num
end

find_nth_prime(10_001)
