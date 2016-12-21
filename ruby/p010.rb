# Ruby Solution to Project Euler problem 10
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# Determines if a number is prime
def prime?(num)
  Math.sqrt(num).to_i.downto(2).each { |i| return false if (num % i).zero? }
  true
end

# Finds the sum of all the primes below 'limit'
def sum_of_primes(limit)
  answer = 0

  (2...limit).each do |i|
    answer = answer + i if prime?(i)
  end
  puts answer
end

sum_of_primes(2000000)
