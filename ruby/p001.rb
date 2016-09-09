=begin
 * Ruby Solution to Project Euler problem 1
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
=end

#This creates an array with the numbers 1-999.
num = (1...1000).to_a

#The delete_if method deletes the numbers in the array that are not multiples of 3 or 5.
num.delete_if {|i| i % 3 != 0 && i % 5 != 0}

#The inject method adds the individual values together in the array and stores the sum in the total variable.
total = num.inject(0){|sum, x| sum + x}

#This outputs the total variable.
puts total
