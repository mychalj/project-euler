=begin
 * Ruby Solution to Project Euler problem 1
 * by Mychal Johnson
 *
 * https://github.com/mychalj/project-euler
=end

num = (1...1000).to_a

num.delete_if {|i| i % 3 != 0 && i % 5 != 0}

total = num.inject(0){|sum, x| sum + x}

puts total
