# Ruby Solution to Project Euler problem 5
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# Determines if a number is prime
def prime?(num)
  Math.sqrt(num).to_i.downto(2).each { |i| return false if (num % i).zero? }
  true
end

# Creates an array that contains the prime number to start with in
# the smallest_multiple function and the largest power of each of
# the prime numbers less than and including the start number.
def largest_power(num)
  powers = []
  arr_index, start = 0

  (2..num).each do |i|
    (2..num).each do |j|
      if prime?(i) && (i**j) <= num
        powers[arr_index] = i**j
        start = i
      end
    end
    arr_index += 1
  end
  powers.unshift(start)
end

# Determines the smallest number that is evenly divisible by all
# numbers from 1 to the given positive number
def smallest_multiple(limit)
  powers_arr = largest_power(limit).slice(1..-1)
  start = largest_power(limit).shift
  answer = powers_arr.inject { |a, e| a * e }

  (start + 1..limit).each do |i|
    answer *= i if prime?(i)
  end
  puts answer
end

# Displays the desired answer
smallest_multiple(20)
