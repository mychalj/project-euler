# Ruby Solution to Project Euler problem 4
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# Determines whether the number is a palidrome.
def palindrome?(num)
  return true if (n = num.to_s) == n.reverse
  false
end

# Calculates the largest palindrome that was requested.
def largest_palindrome(min, max)
  range = (min..max)
  max = range.end
  answer = 0

  range.each do |i|
    max.downto(i) do |j|
      product = i * j
      answer = product if product > answer && palindrome?(product)
    end
  end
  puts answer
end

largest_palindrome(100, 999)
