=begin
 * Ruby Solution to Project Euler problem 4
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
=end

def isPalindrome(num)
  if num == num.to_s.split("").reverse().join("").to_i
    return true
  else
    return false
  end
end

product = 0
max = 0

(100..999).each do |i|
  (100..999).each do |j|
    product = i * j
    if isPalindrome(product)
      max = product if max < product
    end
  end
end

puts "The largest palindrome made from the product of two 3-digit numbers is #{max}."
