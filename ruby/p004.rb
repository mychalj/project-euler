
# Ruby Solution to Project Euler problem 4
# by Mychal Johnson
# https://github.com/mychalj/project-euler

# Determines whether the number is a palidrome.
def palindrome?(num)
  return true if num == num.to_s.split('').reverse.join('').to_i
  false
end

# Gives all the variables a default value.
product = 0
max = 0

# Calculates the largest palindrome that was requested.
(100..999).each do |i|
  (100..999).each do |j|
    product = i * j
    if palindrome?(product)
      max = product if max < product
    end
  end
end

# Outputs the largest palindrome.
print 'The largest palindrome made from the product of two 3-digit numbers: '
puts max.to_s
