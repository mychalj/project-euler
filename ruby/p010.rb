# Ruby Solution to Project Euler problem 10
# by Mychal Johnson
# https://github.com/mychalj/project-euler

def prime?(num)
  Math.sqrt(num).to_i.downto(2).each { |i| return false if (num % i).zero? }
  true
end

def sum_of_primes(limit)
end

sum_of_primes()
