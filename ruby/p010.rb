# Ruby Solution to Project Euler problem 10
# by Mychal Johnson
# https://github.com/mychalj/project-euler

require 'prime'

# Finds the sum of all the primes below 'limit'
def sum_of_primes(limit)
  answer = 0

  Prime.each(limit) do |i|
    answer += i
  end
  puts answer
end

sum_of_primes(2_000_000)
