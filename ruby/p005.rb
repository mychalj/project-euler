# Ruby Solution to Project Euler problem 5
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# Determines if a number is prime
def prime?(num)
  Math.sqrt(num).to_i.downto(2).each { |i| return false if (num % i).zero? }
  true
end

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
